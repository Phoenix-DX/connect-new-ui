#!/usr/bin/env python3
"""
analyze_capture.py: turn capture JSON files from capture.js into an analysis folder.

Usage:
  python3 analyze_capture.py --ui capture-<Screen>-default.json \
      [--runtime runtime-<Screen>.json ...] [--state capture-<Screen>-loading.json ...] \
      --out analysis/<Screen>

Produces (all deterministic, no AI interpretation):
  digest.md            one-page overview: blocks, variables, data/server actions, navigation, lifecycle,
                       images, flags, strings, coverage gaps. READ THIS FIRST.
  blocks-tree.txt      nesting of data-block widgets as rendered
  calls.md             every captured service call: order, timing, request/response shapes, TS types
  types.ts             TypeScript interfaces generated from response shapes
  css-relevant.md      CSS rules that match classes used on the page, grouped per block, plus tokens
  coverage.md          checklist of what was and was not captured
  call-sites.md        for every service call, the chains of code leading to it from a root (UI event,
                       lifecycle, fetch at start, block event); "chain stops" marks callbacks/JS nodes
  diagrams.md          Mermaid DRAFTS: architecture (browser blocks, server actions, backend) and
                       sequences (enter screen, each observed server action) for spec sections 2a and 10
  security.md          security inventory: header/cookie names, storage keys by category with risks,
                       where sensitive client variables are written, auth-related actions, open questions
  dom/<label>.html     sanitized DOM per captured state (pretty printed, FOR READING ONLY: prettify adds
                       whitespace that changes inline layout)
  dom/<label>.raw.html the same DOM byte for byte as captured: the reference parity_check.cjs renders
  states.json          per state: how it was reached (viewport, html/body classes, flags variant, steps, mock
                       scenario), read by route.py parity
  calls.json           every service call of the screen with its phase (load or the plan step that triggered it),
                       kind (data/server), input parameter names; per flag variant too. Reference of call parity
  sources/             raw and pretty-printed JS of the screen, blocks and module controllers
  styles/bundle.css    all stylesheets in load order, url() rewritten to asset:<path> placeholders
  styles/assets.json   {path: dataUrl} for assets referenced by the bundle
  facts.json           machine-readable version of everything above

Dependencies: python3, beautifulsoup4 (pip install beautifulsoup4). jsbeautifier is optional
(pip install jsbeautifier) and only improves the pretty-printed sources.
"""
import argparse, json, os, posixpath, re, sys
from collections import OrderedDict, defaultdict
from urllib.parse import urlsplit

try:
    from bs4 import BeautifulSoup
except ImportError:
    sys.exit("beautifulsoup4 is required: pip install beautifulsoup4")
try:
    import jsbeautifier
except ImportError:
    jsbeautifier = None


def load(path):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def write(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(text)


def pretty_js(src):
    if jsbeautifier:
        try:
            return jsbeautifier.beautify(src)
        except Exception:
            pass
    return src


def uniq(seq):
    return list(OrderedDict.fromkeys(seq))


# ---------------------------------------------------------------- JS fact extraction
RE = {
    "attr": re.compile(r'this\.attr\("(\w+)",\s*"(\w+)",\s*"\w+",\s*(true|false),\s*(true|false),\s*OS\.DataTypes\.DataTypes\.(\w+),\s*function\s*\(\)\s*\{\s*return\s+(.*?);\s*\}', re.S),
    "dataAction": re.compile(r'callDataAction\("(\w+)",\s*"([^"]+)"'),
    "aggregate": re.compile(r'call(Aggregate\w*)\("(\w+)",\s*"([^"]+)"'),
    "serverAction": re.compile(r'callServerAction\("(\w+)",\s*"([^"]+)"'),
    "nav": re.compile(r'generateScreenURL\("([^"]+)",\s*\{([^{}]*)\}'),
    "navBack": re.compile(r'navigateBack\('),
    "clientAction": re.compile(r'Controller\.prototype\.(_?\w+?)\$Action\s*=\s*function'),
    "lifecycle": re.compile(r'Controller\.prototype\.on(Initialize|Ready|Render|Destroy|ParametersChanged)EventHandler\s*=\s*function'),
    "viewDeps": re.compile(r'"([\w]+(?:\.[\w]+)+)\.mvc\$view"'),
    "cssDeps": re.compile(r'getCssDependencies\s*=\s*function\s*\(\)\s*\{\s*return\s*\[([^\]]*)\]'),
    "img": re.compile(r'getVersionedUrl\("([^"]+)"\)'),
    "feedback": re.compile(r'showFeedbackMessage\(([^;]{0,260})'),
    "exception": re.compile(r'OS\.Exceptions\.Exceptions\.(\w+Exception)'),
    "jsNode": re.compile(r'define\("([^"]+?JS)",'),
    "staticEntity": re.compile(r'staticEntities\.(\w+)\.(\w+)'),
    "clientVar": re.compile(r'ClientVariables\.(get|set)(\w+)\('),
    "text": re.compile(r'\}\s*,\s*"((?:[^"\\]|\\.){2,200})"\s*[,)]'),
    "displayName": re.compile(r'View\.displayName\s*=\s*"([^"]+)"'),
    "eventHandlerName": re.compile(r'controller\.(\w+?)\$Action\('),
}
JS_NOISE = re.compile(r'^(OS|OutSystems|react|div|span|[a-z]+\$|[\w.$/-]+\.(js|css)|screenservices/|img/)')


def js_facts(name, src):
    f = {"file": name}
    f["displayName"] = uniq(RE["displayName"].findall(src))
    variables = []
    for m in RE["attr"].finditer(src):
        n, js, mand, _, typ, default = m.groups()
        if n.startswith("_"):
            continue  # runtime data-fetch status attributes
        kind = "input" if js.endswith("In") else "output" if js.endswith("Out") else "local" if js.endswith("Var") else "attribute"
        default = re.sub(r"\s+", " ", default)[:120]
        variables.append({"name": n, "kind": kind, "type": typ, "default": default})
    f["variables"] = variables
    f["dataActions"] = [{"name": a, "url": u} for a, u in uniq(RE["dataAction"].findall(src))]
    f["aggregates"] = [{"kind": k, "name": a, "url": u} for k, a, u in uniq(RE["aggregate"].findall(src))]
    f["serverActions"] = [{"name": a, "url": u} for a, u in uniq(RE["serverAction"].findall(src))]
    navs = []
    for path, params in RE["nav"].findall(src):
        navs.append({"to": path, "params": uniq(re.findall(r'(\w+)\s*:', params))})
    seen, nav_u = set(), []
    for n in navs:
        k = (n["to"], tuple(n["params"]))
        if k not in seen:
            seen.add(k); nav_u.append(n)
    f["navigation"] = nav_u
    f["navigateBack"] = len(RE["navBack"].findall(src))
    f["clientActions"] = uniq(a.lstrip("_") for a in RE["clientAction"].findall(src))
    f["lifecycle"] = uniq(RE["lifecycle"].findall(src))
    f["referencedBlocks"] = uniq(b for b in RE["viewDeps"].findall(src) if not name.startswith(b + "."))
    css = RE["cssDeps"].search(src)
    f["cssDependencies"] = re.findall(r'"([^"]+)"', css.group(1)) if css else []
    f["images"] = uniq(RE["img"].findall(src))
    f["feedbackMessages"] = uniq(re.sub(r"\s+", " ", x)[:220] for x in RE["feedback"].findall(src))
    f["exceptions"] = uniq(RE["exception"].findall(src))
    f["jsNodes"] = uniq(RE["jsNode"].findall(src))
    f["staticEntities"] = uniq(f"{a}.{b}" for a, b in RE["staticEntity"].findall(src))
    f["clientVariables"] = uniq(f"{op}{v}" for op, v in RE["clientVar"].findall(src))
    texts = []
    for t in RE["text"].findall(src):
        t2 = t.replace("\\'", "'").replace('\\"', '"')
        if JS_NOISE.match(t2) or len(t2.strip()) < 2 or re.fullmatch(r"[\w$.]+", t2) and not re.search(r"[A-Z ]", t2):
            continue
        texts.append(t2)
    f["candidateStrings"] = uniq(texts)[:80]
    return f


def is_screen_or_block(fname):
    return fname.endswith(".mvc.js")


def block_key(fname):
    """Module.Flow.Block.mvc.js -> (Module, "Flow.Block")"""
    parts = fname[: -len(".mvc.js")].split(".")
    return parts[0], ".".join(parts[1:])


# ---------------------------------------------------------------- DOM
def blocks_tree(dom_html):
    soup = BeautifulSoup(dom_html, "html.parser")
    lines = []

    def walk(el, depth):
        for child in el.find_all(recursive=False):
            if child.has_attr("data-block"):
                lines.append("  " * depth + child["data-block"])
                walk(child, depth + 1)
            else:
                walk(child, depth)
    walk(soup, 0)
    return lines, soup


def class_usage(soup):
    usage = defaultdict(set)  # class -> blocks it appears under
    for el in soup.find_all(True):
        cls = el.get("class") or []
        anc = el.find_parent(attrs={"data-block": True})
        owner = anc["data-block"] if anc else "(page)"
        if el.has_attr("data-block"):
            owner = el["data-block"]
        for c in cls:
            usage[c].add(owner)
    return usage


# ---------------------------------------------------------------- CSS
def css_rules(css_text):
    rules, depth_media = [], None
    # Flatten: split on '}' and take the last '{' as selector start. Good enough for lookups.
    for chunk in css_text.split("}"):
        if "{" not in chunk:
            continue
        sel, body = chunk.rsplit("{", 1)
        sel = " ".join(sel.split())
        if "{" in sel:
            sel = sel.rsplit("{", 1)[-1]
        sel = re.sub(r"/\*.*?\*/", "", sel).strip()
        rules.append((sel, " ".join(body.split())))
    return rules


def bundle_styles(ui, out_dir):
    assets = ui.get("assets", {})
    font_bases = {k.rsplit(".", 1)[0] for k in assets if k.endswith((".woff", ".woff2", ".ttf", ".otf"))}
    keep, missing = {}, set()

    def rewrite(css, base):
        def sub(m):
            u = m.group(2).strip()
            if u.startswith("data:") or u.startswith("#"):
                return m.group(0)
            p = urlsplit(u)
            if p.scheme:
                return m.group(0)
            path = posixpath.normpath(posixpath.join(posixpath.dirname(base), p.path))
            if path.endswith(".eot") or (path.endswith(".svg") and path.rsplit(".", 1)[0] in font_bases):
                return 'url("data:,")'
            a = assets.get(path)
            if not a or not a.get("dataUrl"):
                missing.add(path)
                return 'url("")'
            keep[path] = a["dataUrl"]
            return 'url("asset:%s")' % path
        return re.sub(r'url\(\s*([\'"]?)([^\'")]+)\1\s*\)', sub, css)

    parts, order = [], []
    for k, v in ui.get("css", {}).items():
        if "ejoy" in v[:400]:
            continue  # browser extension styles
        base = k if k.startswith("/") else "/" + ui.get("env", {}).get("path", "/app/").split("/")[1] + "/"
        parts.append("/* ==== %s ==== */\n%s" % (k, rewrite(v, base)))
        order.append(k)
    bundle = "\n".join(parts)
    write(os.path.join(out_dir, "styles", "bundle.css"), bundle)
    write(os.path.join(out_dir, "styles", "assets.json"), json.dumps(keep))
    # images referenced from the DOM (same origin, captured) are useful to the builder too
    for k, a in assets.items():
        if a.get("dataUrl") and k not in keep and re.search(r"\.(png|jpe?g|gif|svg|webp)$", k):
            keep[k] = a["dataUrl"]
    write(os.path.join(out_dir, "styles", "assets.json"), json.dumps(keep))
    return bundle, order, sorted(missing), sorted(keep)


def css_relevant(bundle, usage, block_order):
    rules = css_rules(bundle)
    by_block = defaultdict(list)
    generic = []
    for cls, owners in sorted(usage.items()):
        tok = re.compile(r"\.%s(?![\w-])" % re.escape(cls))
        hits = [(s, b) for s, b in rules if tok.search(s)]
        if not hits:
            continue
        if len(hits) > 40:
            generic.append((cls, len(hits)))
            continue
        owner = sorted(owners, key=lambda o: block_order.index(o) if o in block_order else 999)[0]
        by_block[owner].append((cls, hits[:25], len(hits)))
    # tokens: custom properties referenced by relevant rules
    used_vars = set()
    for items in by_block.values():
        for _, hits, _ in items:
            for _, body in hits:
                used_vars.update(re.findall(r"var\((--[\w-]+)", body))
    defs = defaultdict(list)
    for sel, body in rules:
        for name, val in re.findall(r"(--[\w-]+)\s*:\s*([^;]+)", body):
            if name in used_vars and len(defs[name]) < 4:
                defs[name].append((sel[-80:], val.strip()))
    return by_block, generic, defs


# ---------------------------------------------------------------- shapes → TS
def ts_type(shape, name, out, seen):
    if isinstance(shape, list):
        if not shape or shape[0] == "(empty array)":
            return "unknown[] /* empty in capture */"
        return ts_type(shape[0], name + "Item", out, seen) + "[]"
    if isinstance(shape, dict):
        if set(shape.keys()) == {"List"}:
            return ts_type(shape["List"], name, out, seen) + " /* wire: { List: [...] } */"
        iname = re.sub(r"\W", "", name[:1].upper() + name[1:]) or "Anon"
        if iname in seen:
            return iname
        seen.add(iname)
        lines = []
        for k, v in shape.items():
            lines.append(f"  {k}: {ts_type(v, k, out, seen)};")
        out.append(f"export interface {iname} {{\n" + "\n".join(lines) + "\n}")
        return iname
    s = str(shape)
    return {
        "string": "string", "string (EMPTY)": 'string /* "" in capture */', "number": "number",
        "number (0)": "number /* 0 in capture */", "boolean": "boolean", "null": "null",
        "numeric string": "string /* Long Integer as string */", "decimal string": "string /* Decimal as string */",
        "datetime string": "string /* ISO DateTime */", "date string": "string /* Date */",
        "date (1900 default)": 'string /* "1900-01-01..." = no value */',
    }.get(s, f"unknown /* {s} */")


# ---------------------------------------------------------------- security inventory
SEC_CATEGORIES = [
    ("token/secret", r"(token|jwt|bearer|secret|password(?!reset)|passwd|apikey|api_key|connectionstring|sas$|signature|credential|refresh|session_?key|localstoragekey)"),
    ("auth config", r"(b2c|oauth|oidc|idp|authorize|authority|clientid|client_id|tenant|frontegg|login|logout|signup|resetpass|passwordreset|totp|mfa|sso)"),
    ("lock / re-auth", r"((^|[_$])pin([_$]|$)|fingerprint|biometric|faceid|touchid|inactivity|lock)"),
    ("identity / personal", r"(user(name|id|extended|externalid)?$|member|contact|email|phone|birth|address|externalid|session_user_id|deviceinfo_uuid|^uuid$)"),
    ("permissions / entitlements", r"(role|permission|license|entitle|subscription|grant|scope)"),
    ("feature flags", r"(darkly|^ld:|feature|flag|toggle|isenabled|_use$|enabled$)"),
    ("telemetry", r"(insights|tracing|^ai_|log|diagnostic|analytics|crash)"),
    ("device / app info", r"(deviceinfo|platform|browser|version|build|package|environment|applicationinfo|espace)"),
    ("third-party sdk", r"(firebase|onesignal|streamline|sentry)"),
]
RISK = {
    "token/secret": "Readable by any script on the origin (XSS exposure). In React keep tokens server-side (BFF + HttpOnly cookie); do not copy this pattern.",
    "lock / re-auth": "Client-side state: a UI gate, not a security boundary. Verify whether the server refuses calls while locked (OutSystems MCP / team).",
    "permissions / entitlements": "Client-side copy used to show/hide UI. Every server action must enforce the same rule itself; confirm per action.",
    "identity / personal": "Personal identifiers persisted on the device. Check they are cleared on logout and whether they must be stored at all.",
    "auth config": "Public configuration of the identity provider(s). Inventory every provider and flow before designing auth for React.",
}
AUTH_ACTION_RE = re.compile(r"(login|logout|token|session|pin|synch|sync|permission|role|license|entitle|auth|b2c|oauth|frontegg|totp|lock)", re.I)


def core_name(k):
    return re.sub(r"^\$OS_[^$]*\$(?:[^$]*\$ClientVars\$+)?", "", k)


def classify_key(k):
    c = core_name(k)
    for cat, rx in SEC_CATEGORIES:
        if re.search(rx, c, re.I):
            return cat
    return "other"


def security_report(screen, envs, calls, sources, out_dir):
    sec = next((e.get("security") for e in envs if e.get("security")), None)
    env0 = envs[0] if envs else {}
    if sec:
        ls, ss = sec.get("localStorage", []), sec.get("sessionStorage", [])
    else:
        ls = [{"key": k, "category": classify_key(k)} for k in env0.get("localStorageKeys", [])]
        ss = [{"key": k, "category": classify_key(k)} for k in env0.get("sessionStorageKeys", [])]
    req_h, res_h = set(), set()
    for c in calls:
        req_h.update(c.get("requestHeaders") or [])
        res_h.update(c.get("responseHeaders") or [])
    md = [f"# Security inventory: {screen}\n",
          "Names and categories only; no values were captured. Inferences are marked as such and must be confirmed with the OutSystems MCP or the team.\n",
          "## Session and request authentication",
          f"- Request header names on service calls: {', '.join('`'+h+'`' for h in sorted(req_h)) or '(not recorded: capture made with an older capture.js)'}",
          f"- Response header names on service calls: {', '.join('`'+h+'`' for h in sorted(res_h)) or '(not recorded)'}",
          f"- Cookie names visible to JavaScript: {', '.join('`'+c+'`' for c in (sec or {}).get('cookieNamesVisibleToJS', [])) or '(none visible or not recorded)'}",
          "- HttpOnly cookies are invisible to JavaScript by design. Check names and flags (HttpOnly, Secure, SameSite, expiry) manually in DevTools > Application > Cookies; never copy values.",
          "- OutSystems 11 Reactive normally authenticates screenservices calls with its session cookies plus a CSRF token header. Confirm against the header names above.",
          f"- Secure context: {(sec or {}).get('isSecureContext', 'unknown')}", ""]
    dh = (sec or {}).get("documentSecurityHeaders", {})
    md.append("## Document security headers")
    if sec is None:
        md.append("- (not recorded: older capture)")
    else:
        for h in ("content-security-policy", "strict-transport-security", "x-frame-options", "x-content-type-options", "referrer-policy", "permissions-policy"):
            md.append(f"- `{h}`: " + (f"`{dh[h][:300]}`" if h in dh else "**missing**"))
    md.append("")
    hosts = sorted(set((sec or {}).get("thirdPartyHosts", [])))
    md += ["## Third-party hosts contacted", *([f"- `{h}`" for h in hosts] or ["- (not recorded)"]), ""]

    md.append("## Client storage by category")
    by = defaultdict(list)
    for item in ls:
        by[item["category"]].append(("localStorage", item["key"]))
    for item in ss:
        by[item["category"]].append(("sessionStorage", item["key"]))
    order = [c for c, _ in SEC_CATEGORIES] + ["other"]
    for cat in order:
        if not by.get(cat):
            continue
        md.append(f"### {cat} ({len(by[cat])})")
        if cat in RISK:
            md.append(f"> {RISK[cat]}")
        md += [f"- `{core_name(k)}` ({where})" for where, k in by[cat]]
        md.append("")

    # where sensitive client variables are written, from code
    sensitive = {core_name(i["key"]) for i in ls + ss if i["category"] in ("token/secret", "lock / re-auth", "permissions / entitlements", "identity / personal")}
    rows = []
    for fname, src in sources.items():
        for m in re.finditer(r"set(\w+)\(", src):
            var = m.group(1)
            if var not in sensitive:
                continue
            defs = re.findall(r'define\("([^"]+)"', src[:m.start()])
            ctx = re.sub(r"\s+", " ", src[m.start(): m.start() + 160])
            rows.append((var, fname, defs[-1] if defs else "?", ctx))
    md.append("## Where sensitive client variables are written (from code)")
    md.append("| Variable | File | Action / module | Assignment |\n|---|---|---|---|")
    seen = set()
    for var, f, act, ctx in rows:
        if (var, act) in seen:
            continue
        seen.add((var, act))
        md.append(f"| `{var}` | `{f}` | `{act}` | `{ctx[:150]}` |")
    if not rows:
        md.append("| (none found in captured sources) | | | |")
    md.append("")

    acts = set()
    for fname, src in sources.items():
        for name, url in re.findall(r'callServerAction\("(\w+)",\s*"([^"]+)"', src):
            if AUTH_ACTION_RE.search(name):
                acts.add((name, url, fname))
    md.append("## Auth-related server actions found in code")
    md += [f"- `{n}` → `{u}` ({f})" for n, u, f in sorted(acts)] or ["- none in captured sources"]
    md += ["", "## Questions to resolve (OutSystems MCP / team)",
           "1. Login flow: which identity providers (all `auth config` entries above), where the IdP token is exchanged for the OutSystems session, MFA steps.",
           "2. Session: cookie names and flags, lifetime, refresh, logout (what is cleared on the server and on the device).",
           "3. CSRF: which header carries the token on service calls; how React/BFF must send it.",
           "4. Authorization: for each server action this screen calls, does the server check ownership/role itself, or does it rely on client-side flags?",
           "5. Lock/PIN: is it only a client gate, or does the server refuse calls while locked? Which server action resets the lock state on start?",
           "6. Backend calls: does OutSystems call the backend with the user's token or a service identity?",
           "7. Tokens stored in the browser (`token/secret` category): purpose, scope, lifetime, and whether React must keep them client-side.",
           ""]
    write(os.path.join(out_dir, "security.md"), "\n".join(md) + "\n")
    return {"localStorage": ls, "sessionStorage": ss, "requestHeaders": sorted(req_h), "responseHeaders": sorted(res_h),
            "documentSecurityHeaders": dh, "thirdPartyHosts": hosts, "sensitiveWrites": [r[:3] for r in rows], "authActions": sorted(acts)}


# ---------------------------------------------------------------- call sites
UI_EVENT_RE = re.compile(r'\b(on(?:Click|DoubleClick|Change|Blur|Focus|KeyUp|KeyDown|KeyPress|Submit|Scroll|Swipe\w*|Tap|Toggle))\s*:\s*function')


def _file_key(fname):
    return fname[: -len(".mvc.js")] if fname.endswith(".mvc.js") else fname[: -len(".controller.js")]


def _short(fname):
    return _file_key(fname).split(".")[-1]


def call_graph(sources):
    """Build caller → callee edges between UI events, block events, lifecycle handlers, client actions,
    data actions and server actions, from compiled OutSystems code. Returns (nodes, edges, endpoints)."""
    nodes, edges, endpoints = {}, set(), {}
    var_to_file = {f[: -len(".mvc.js")].replace(".", "_") + "_mvc_view": f for f in sources if f.endswith(".mvc.js")}

    def node(nid, label, kind):
        nodes.setdefault(nid, {"label": label, "kind": kind})
        return nid

    for fname, src in sources.items():
        is_mvc = fname.endswith(".mvc.js")
        if not (is_mvc or fname.endswith(".controller.js")):
            continue
        defs = []  # (pos, node_id)
        privates = set(re.findall(r'Controller\.prototype\._(\w+?)\$Action\s*=\s*function', src)) if is_mvc else set()
        for m in re.finditer(r'(\w+)Controller\.default\.(\w+?)\$Action\s*=\s*function', src):
            defs.append((m.start(), node(f"mod:{m.group(1)}:{m.group(2)}", f"{m.group(1)}.{m.group(2)}", "client action")))
        for m in re.finditer(r'(\w+)Controller\.default\.(\w+?)\$ServerAction\s*=\s*function', src):
            defs.append((m.start(), node(f"srv:{m.group(1)}:{m.group(2)}", f"server {m.group(2)}", "server action")))
        if is_mvc:
            for m in re.finditer(r'Controller\.prototype\.(_?)(\w+?)\$(Action|ServerAction)\s*=\s*function', src):
                priv, name, kind = m.groups()
                if kind == "ServerAction":
                    defs.append((m.start(), node(f"srv:{fname}:{name}", f"server {name}", "server action")))
                elif priv:
                    defs.append((m.start(), node(f"act:{fname}:{name}", f"{_short(fname)}.{name}", "client action")))
                elif name not in privates:
                    defs.append((m.start(), node(f"evt:{fname}:{name}", f"event {name} of {_short(fname)}", "block event")))
            for m in re.finditer(r'Controller\.prototype\.on(Initialize|Ready|Render|Destroy|ParametersChanged)EventHandler\s*=\s*function', src):
                defs.append((m.start(), node(f"life:{fname}:{m.group(1)}", f"{_short(fname)}.On{m.group(1)}", "lifecycle")))
        for m in re.finditer(r'define\("', src):
            defs.append((m.start(), None))
        defs.sort()

        def owner(pos):
            cur = None
            for p, nid in defs:
                if p > pos:
                    break
                cur = nid
            return cur

        def resolve_local(name):
            name = name.lstrip("_")
            if is_mvc:
                if name in privates:
                    return f"act:{fname}:{name}"
                return f"evt:{fname}:{name}" if f"evt:{fname}:{name}" in nodes else None
            mod = fname.split(".")[0]
            return f"mod:{mod}:{name}"

        # endpoints
        for m in re.finditer(r'callServerAction\("(\w+)",\s*"([^"]+)"', src):
            o = owner(m.start())
            if o:
                endpoints.setdefault(m.group(2), set()).add(o)
                if o in nodes and nodes[o]["kind"] == "server action":
                    nodes[o]["label"] = f"server {m.group(1)}"
        for m in re.finditer(r'call(?:DataAction|Aggregate\w*)\("(\w+)",\s*"([^"]+)"', src):
            nid = node(f"da:{fname}:{m.group(1)}", f"{_short(fname)}.{m.group(1)}", "data action")
            endpoints.setdefault(m.group(2), set()).add(nid)
            start = node(f"start:{fname}", f"{_short(fname)} fetch at start", "lifecycle")
            edges.add((start, nid))
            base = re.sub(r"^(DataAction|Aggregate)", "", m.group(1))
            after = f"act:{fname}:onAfterFetch_{base}"
            edges.add((nid, after))
            node(after, f"{_short(fname)}.onAfterFetch_{base}", "client action")

        # calls inside definitions
        for m in re.finditer(r'(?<![\w.])controller\.(\w+?)\$(Action|ServerAction|DataActRefresh|AggrRefresh)\(', src):
            o = owner(m.start())
            if not o:
                continue
            name, kind = m.groups()
            if kind == "Action":
                tgt = resolve_local(name)
            elif kind == "ServerAction":
                tgt = f"srv:{fname if is_mvc else fname.split('.')[0]}:{name}"
            else:
                tgt = next((n for n in nodes if n.startswith(f"da:{fname}:") and n.split(":")[-1].lower().endswith(name.lower())), None)
            if tgt and tgt != o:
                edges.add((o, tgt))
        for m in re.finditer(r'(\w+)Controller\.default\.(\w+?)\$Action\(', src):
            o = owner(m.start())
            if o:
                edges.add((o, f"mod:{m.group(1)}:{m.group(2)}"))

        if not is_mvc:
            continue
        # UI events in the view
        for m in UI_EVENT_RE.finditer(src):
            win = src[m.end(): m.end() + 900]
            c = re.search(r'controller\.(\w+?)\$Action\(', win)
            if c:
                tgt = resolve_local(c.group(1))
                if tgt:
                    ui = node(f"ui:{fname}:{m.group(1)}:{c.group(1)}", f"{m.group(1)} in {_short(fname)}", "ui event")
                    edges.add((ui, tgt))
        # block events handled by this view: events: { name$Action: function(...) { controller.handler$Action(...) } }
        for m in re.finditer(r'(?<![\w_])(\w+?)\$Action:\s*function\s*\([^)]*\)\s*\{', src):
            ev = m.group(1)
            if ev.startswith("_"):
                continue
            created = re.findall(r'React\.createElement\((\w+_mvc_view)', src[: m.start()])
            child = var_to_file.get(created[-1]) if created else None
            win = src[m.end(): m.end() + 1200]
            c = re.search(r'controller\.(\w+?)\$Action\(', win)
            if child and c:
                tgt = resolve_local(c.group(1))
                if tgt:
                    src_evt = node(f"evt:{child}:{ev}", f"event {ev} of {_short(child)}", "block event")
                    edges.add((src_evt, tgt))
    return nodes, edges, endpoints


def root_chains(target_ids, nodes, edges, max_depth=9, max_paths=6):
    callers = defaultdict(set)
    for a, b in edges:
        callers[b].add(a)
    out = []

    def walk(n, path):
        if len(out) >= max_paths:
            return
        ups = [c for c in callers.get(n, ()) if c not in path]
        if not ups or len(path) >= max_depth:
            out.append(list(reversed(path)))
            return
        for c in sorted(ups):
            walk(c, path + [c])
    for t in target_ids:
        walk(t, [t])
    return out


ROOT_KINDS = ("ui event", "lifecycle", "block event")


def call_sites_report(screen, sources, calls, out_dir, scope_files=()):
    nodes, edges, endpoints = call_graph(sources)
    scope_files = set(scope_files)
    observed = []
    for c in calls:
        key = c.get("path", "").split("screenservices/")[-1]
        if c.get("scope") == "this screen" and key not in observed:
            observed.append(key)

    def chains_for(key):
        full = next((k for k in endpoints if k.split("screenservices/")[-1] == key), None)
        if not full:
            return None
        return root_chains(sorted(endpoints[full]), nodes, edges)

    def in_scope(chain):
        return any(any(f in n for f in scope_files) for n in chain)

    result = {}
    omitted = {}
    for key in observed:
        ch = chains_for(key)
        scoped_ch = [c for c in (ch or []) if in_scope(c)]
        if scoped_ch and len(scoped_ch) < len(ch):
            omitted[key] = len(ch) - len(scoped_ch)
        result[key] = {"observed": True, "defined": ch is not None, "chains": scoped_ch or ch or []}
    for full in endpoints:
        key = full.split("screenservices/")[-1]
        if key in result:
            continue
        ch = chains_for(key)
        if ch and any(in_scope(c) for c in ch):
            result[key] = {"observed": False, "defined": True, "chains": [c for c in ch if in_scope(c)]}

    def fmt(chain):
        labels = [nodes.get(n, {"label": n})["label"] for n in chain]
        root_kind = nodes.get(chain[0], {}).get("kind")
        tail = "" if root_kind in ROOT_KINDS else "  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)"
        return "- " + " → ".join(f"`{x}`" for x in labels) + tail

    md = [f"# Call sites: {screen}\n",
          "For every service call: the chains of code that lead to it, from a root (user event, lifecycle handler, "
          "fetch at start, block event) down to the call. Built from compiled code only; conditions along a chain are not shown, read them in the files named.\n"]
    for title, keys in (("Observed in the capture (this screen)", [k for k in result if result[k]["observed"]]),
                        ("Declared and reachable from the rendered blocks, not observed", [k for k in result if not result[k]["observed"]])):
        md.append(f"## {title}\n")
        if not keys:
            md.append("- none\n")
        for key in keys:
            r = result[key]
            md.append(f"### `{key}`")
            if not r["defined"]:
                md.append("- Definition not in the captured sources (owning module controller not captured).\n")
                continue
            md += [fmt(c) for c in r["chains"]] or ["- No caller found in captured sources."]
            if key in omitted:
                md.append(f"- ({omitted[key]} chain(s) starting in blocks of other screens omitted)")
            md.append("")
    write(os.path.join(out_dir, "call-sites.md"), "\n".join(md) + "\n")
    out = {}
    for k, r in result.items():
        out[k] = {"observed": r["observed"], "defined": r["defined"],
                  "chains": [[nodes.get(n, {"label": n})["label"] for n in c] for c in r["chains"]],
                  "rootKinds": sorted({nodes.get(c[0], {}).get("kind", "?") for c in r["chains"] if c}),
                  "rootLabels": [nodes.get(c[0], {"label": c[0]})["label"] for c in r["chains"] if c]}
    return out


# ---------------------------------------------------------------- diagram drafts (Mermaid)
def _mm(text):
    """Make a string safe inside a quoted Mermaid label."""
    return str(text).replace('"', "'").replace("<", "‹").replace(">", "›").replace("\n", " ")


def _site(call_sites, name):
    return next((v for k, v in (call_sites or {}).items() if k.endswith("/" + name)), None)


def _chain_text(chain, n=4):
    c = chain if len(chain) <= n else chain[:1] + ["…"] + chain[-(n - 2):]
    return " → ".join(c)


def diagrams_draft(screen, facts, js, calls, tree_lines, out_dir, call_sites=None):
    rendered = set(facts.get("blocksOnPage", []))
    screen_file = facts.get("screenFile")
    roots = [l for l in tree_lines if not l.startswith(" ")]
    infra_roots = roots[1:]
    infra = set()
    cur = None
    for l in tree_lines:
        if not l.startswith(" "):
            cur = l.strip()
        if cur in infra_roots:
            infra.add(l.strip())
    rf = [k for k in facts.get("renderedFiles", []) if k != screen_file]

    def key(k):
        return block_key(k)[1]

    def interesting(k):
        f = js[k]
        return (f["dataActions"] or f["aggregates"] or f["navigation"] or f["lifecycle"]
                or re.search(r"(Layout|BottomBar|Menu|Header|ScreenBlock)", key(k)))
    content = [k for k in rf if key(k) not in infra and interesting(k)]
    ids = {k: f"B{i}" for i, k in enumerate(content)}
    scoped = [c for c in calls if c.get("scope") == "this screen"]
    observed = []
    for c in scoped:
        if c["action"] not in observed:
            observed.append(c["action"])
    declared_da = {}
    for k in rf + ([screen_file] if screen_file else []):
        for d in js.get(k, {}).get("dataActions", []) + js.get(k, {}).get("aggregates", []):
            declared_da[d["name"]] = k
    client_vars = sorted({v[3:] for k in rf for v in js[k]["clientVariables"] if v.startswith("get")})
    cache_nodes = sorted({n.split(".")[-1] for k in rf for n in js[k]["jsNodes"] if re.search(r"(Cache|Restore|Preload)", n)})
    is_modules = sorted({re.sub(r"\.(model|controller)\.js$", "", k) for k in facts.get("allSourceNames", []) if re.search(r"_IS\.(model|controller)\.js$", k)})

    a = ["%% DRAFT generated by analyze_capture.py. Complete it by hand (see assets/example-diagrams.md).",
         "flowchart TB", '  subgraph Browser["Browser"]', "    direction TB",
         f'    Shell["{_mm(screen)} screen<br/>{_mm(screen_file or "screen file not captured")}"]',
         '    subgraph Content["Rendered blocks"]', "      direction LR"]
    for k in content:
        f = js[k]
        bits = []
        if f["dataActions"] or f["aggregates"]:
            bits.append("fetch")
        if f["navigation"]:
            bits.append("navigation")
        if f["lifecycle"]:
            bits.append("lifecycle")
        a.append(f'      {ids[k]}["{_mm(key(k))}<br/>{_mm(block_key(k)[0])}<br/>{", ".join(bits) or "markup"}"]')
    a.append("    end")
    if infra:
        a.append(f'    Infra["App infrastructure blocks ({len(infra)})<br/>render nothing visible"]')
    if cache_nodes:
        a.append(f'    Cache["View cache / preload<br/>{_mm(", ".join(cache_nodes[:3]))}"]')
    if client_vars:
        a.append(f'    Vars["Client variables read<br/>{_mm(", ".join(client_vars[:5]))}{" …" if len(client_vars) > 5 else ""}"]')
    a.append("    Shell --> Content")
    a.append("  end")
    a.append('  subgraph Server["OutSystems server · screenservices"]')
    a.append("    direction LR")
    server_ids = {}
    names = list(dict.fromkeys(list(declared_da) + observed))
    for i, n in enumerate(names):
        sid = f"S{i}"
        server_ids[n] = sid
        tags = []
        if n in declared_da:
            tags.append("data action / aggregate")
        tags.append("observed" if n in observed else "declared, not observed")
        a.append(f'    {sid}["{_mm(n)}<br/>{", ".join(tags)}"]')
    for i, m in enumerate(is_modules):
        a.append(f'    IS{i}["{_mm(m)}"]')
    a.append("  end")
    a.append('  Backend["Backend<br/>not visible from the browser"]')
    for n, sid in server_ids.items():
        owner = declared_da.get(n)
        src = ids.get(owner) if owner in ids else "Content"
        dashed = n not in observed or owner is None
        a.append(f"  {src} {'-.->' if dashed else '-->'} {sid}")
    for i, _ in enumerate(is_modules):
        a.append(f"  IS{i} -.-> Backend")
    if not is_modules and server_ids:
        a.append(f"  {list(server_ids.values())[0]} -.-> Backend")
    unknown = [sid for n, sid in server_ids.items() if n not in observed] + ["Backend"]
    a += ["  classDef unknown stroke-dasharray: 5 4;", f"  class {','.join(unknown)} unknown;"]

    main_block = next((k for k in content if js[k]["dataActions"] or js[k]["aggregates"]), content[0] if content else None)
    mb = _mm(key(main_block)) if main_block else _mm(screen)
    lc = js[main_block]["lifecycle"] if main_block else []
    q = ["%% DRAFT generated by analyze_capture.py. Fill every TODO from the handlers in sources/pretty.",
         "sequenceDiagram", "  autonumber", "  actor U as User", f"  participant S as {mb}", "  participant API as screenservices",
         f"  U->>S: open {_mm(facts.get('env', {}).get('path', screen))}"]
    if "Initialize" in lc:
        q.append("  S->>S: OnInitialize")
    if cache_nodes:
        q += ["  alt fresh entry", "    S->>S: TODO initial state (e.g. clear lists, spinner)", "  else back from history (view restored)",
              "    S->>S: TODO keep cached data?", "  end"]
    shapes = {c["action"]: c.get("response") for c in scoped}
    for n, owner in declared_da.items():
        q.append(f"  S->>API: {_mm(n)}")
        resp = shapes.get(n)
        data = resp.get("data") if isinstance(resp, dict) and isinstance(resp.get("data"), dict) else None
        q.append(f"  API-->>S: {_mm(', '.join(list(data.keys())[:5])) if data else 'TODO outputs'}")
        handler = next((c for c in js[owner]["clientActions"] if c.lower().startswith(("onafterfetch_" + n.replace("DataAction", "")).lower())), None) if owner in js else None
        if handler:
            q.append(f"  S->>S: {_mm(handler)}")
    for n in observed:
        if n in declared_da or n.startswith("Action"):
            continue  # server actions run on user events: they get their own sequence below
        site = _site(call_sites, n)
        roots = [c for c in (site or {}).get("chains", []) if c]
        if roots and "lifecycle" in (site or {}).get("rootKinds", []):
            note = f"  Note over S,API: called from {_mm(_chain_text(roots[0]))} (call-sites.md)"
        else:
            note = "  Note over S,API: observed in capture, trigger unverified (TODO)"
        q += [f"  S->>API: {_mm(n)}", note, "  API-->>S: TODO outputs"]
    if "Ready" in lc:
        q.append("  S->>S: OnReady")
    exc = sorted({e for k in content for e in js[k]["exceptions"]})
    if exc:
        q += ["  alt success", "    S-->>U: TODO render states (spec section 8)", f"  else {_mm(' / '.join(exc))}",
              "    S-->>U: TODO error UI and messages (spec section 11)", "  end"]
    else:
        q.append("  S-->>U: TODO render states (spec section 8)")

    actions = []
    for c in scoped:
        if c["action"] not in declared_da and c["action"] not in actions and c["action"].startswith("Action"):
            actions.append(c["action"])
    seqs = []
    for n in actions:
        site = _site(call_sites, n) or {}
        pairs = [(c, k) for c, k in zip(site.get("chains", []), site.get("rootLabels", [])) if c]
        kinds = site.get("rootKinds", [])
        first = ["  U->>S: TODO user event"]
        if pairs:
            chain = pairs[0][0]
            root = chain[0]
            if root.startswith("onClick") or root.startswith("on") and " in " in root:
                first = [f"  U->>S: {_mm(root)}"]
            elif root.endswith(("OnReady", "OnInitialize", "OnRender", "OnParametersChanged", "OnDestroy")) or "fetch at start" in root:
                first = [f"  S->>S: {_mm(root)}"]
            else:
                first = ["  U->>S: TODO user event", f"  Note over S: chain stops at {_mm(root)} (see call-sites.md)"]
            first.append(f"  Note over S: via {_mm(_chain_text(chain))}")
            if len(pairs) > 1:
                first.append(f"  Note over S: {len(pairs) - 1} other caller chain(s) in call-sites.md")
        seqs += ["", f"### Action: {n}", "```mermaid",
                 "%% DRAFT: trigger from call-sites.md; replace TODOs with the result handling of the calling action",
                 "sequenceDiagram", "  actor U as User", f"  participant S as {mb}", "  participant API as screenservices",
                 *first, f"  S->>API: {_mm(n)}(TODO inputs)", "  API-->>S: TODO outputs",
                 "  alt TODO branch", "    S-->>U: TODO", "  else TODO branch", "    S-->>U: TODO", "  end", "```"]

    md = [f"# Diagram drafts: {screen}\n",
          "Generated from the capture. They are starting points for spec section 2a (architecture) and section 10 (sequences): "
          "verify every node and arrow against the code, complete TODOs, keep 'unverified' notes where the capture cannot prove an order or a trigger. "
          "Dashed = declared but not observed, or not visible from the browser.\n",
          "## Architecture (draft)", "```mermaid", *a, "```", "",
          "## Sequence: enter the screen (draft)", "```mermaid", *q, "```", *seqs, ""]
    write(os.path.join(out_dir, "diagrams.md"), "\n".join(md))
    return {"architectureNodes": len(content), "serverNodes": len(server_ids), "actionSequences": len(actions)}


# ---------------------------------------------------------------- main
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--ui", required=True, help="main UI snapshot (with sources, css, assets)")
    ap.add_argument("--runtime", action="append", default=[], help="runtime capture(s) from stopRuntime()")
    ap.add_argument("--state", action="append", default=[], help="extra UI snapshots of other states (label from file)")
    ap.add_argument("--variant-runtime", action="append", default=[], help="runtime capture of a flag variant (batch_capture.cjs)")
    ap.add_argument("--out", required=True)
    a = ap.parse_args()

    ui = load(a.ui)
    out = a.out
    os.makedirs(out, exist_ok=True)
    screen = ui.get("screen", "Screen")
    env = dict(ui.get("env", {}))
    if not env.get("bodyStyle"):
        m = re.match(r'\s*<body[^>]*\sstyle="([^"]*)"', ui.get("dom", ""))
        env["bodyStyle"] = m.group(1) if m else ""
    ui["env"] = env
    facts = {"screen": screen, "env": env, "report": ui.get("report", {})}

    # sources
    sources = dict(ui.get("blocks", {}).get("sources", {}))
    for r in a.runtime:
        sources.update(load(r).get("files", {}) or {})
    for k, v in sources.items():
        write(os.path.join(out, "sources", "raw", k), v)
        if k.endswith(".mvc.js") or len(v) < 400000:
            write(os.path.join(out, "sources", "pretty", k), pretty_js(v))

    # DOM + blocks
    states = [("default" if ui.get("label") in (None, "default") else ui["label"], ui)] + [(load(s).get("label", os.path.basename(s)), load(s)) for s in a.state]
    tree_lines, soup = blocks_tree(ui["dom"])
    write(os.path.join(out, "blocks-tree.txt"), "\n".join(tree_lines) + "\n")
    states_meta = {}
    for label, snap in states:
        write(os.path.join(out, "dom", f"{label}.html"), BeautifulSoup(snap["dom"], "html.parser").prettify())
        write(os.path.join(out, "dom", f"{label}.raw.html"), snap["dom"])
        senv = snap.get("env", {}) or {}
        meta = dict(snap.get("meta") or {})
        vp = senv.get("viewport") or {}
        meta.setdefault("viewport", f"{vp.get('width', 390)}x{vp.get('height', 844)}")
        meta.setdefault("steps", [])
        meta.setdefault("flags", {})
        meta.setdefault("variant", None)
        meta.setdefault("auto", label if label in ("loading", "offline") else None)
        meta.setdefault("scenario", {"loading": "loading", "offline": "error"}.get(label, "real"))
        bm = re.match(r'\s*<body[^>]*\sstyle="([^"]*)"', snap.get("dom", ""))
        meta.update({"htmlClass": senv.get("htmlClass", env.get("htmlClass", "")) or "",
                     "bodyClass": senv.get("bodyClass", env.get("bodyClass", "")) or "",
                     "bodyStyle": senv.get("bodyStyle") or (bm.group(1) if bm else ""),
                     "dpr": vp.get("dpr", 1)})
        states_meta[label] = meta
    write(os.path.join(out, "states.json"), json.dumps(states_meta, indent=1, ensure_ascii=False) + "\n")
    facts["blocksOnPage"] = ui.get("blocks", {}).get("onPage", [])
    facts["states"] = [label for label, _ in states]

    # JS facts for screen + blocks on page, and module controllers (server actions live there)
    js = {}
    for k, v in sources.items():
        if is_screen_or_block(k) or k.endswith(".controller.js"):
            js[k] = js_facts(k, pretty_js(v) if k.endswith(".mvc.js") else v)
    facts["js"] = js
    screen_files = [k for k in js if k.endswith(f".{screen}.mvc.js")]
    facts["screenFile"] = screen_files[0] if screen_files else None

    # referenced-but-not-rendered blocks → states not captured
    rendered = set(facts["blocksOnPage"])
    rendered_files = [k for k in js if k.endswith(".mvc.js") and (k == facts["screenFile"] or block_key(k)[1] in rendered)]
    other_files = [k for k in js if k.endswith(".mvc.js") and k not in rendered_files]
    scope_modules = {block_key(k)[0] for k in rendered_files}
    facts["renderedFiles"], facts["otherSourceFiles"] = rendered_files, other_files
    referenced = set()
    for k in rendered_files:
        f = js[k]
        if True:
            for b in f["referencedBlocks"]:
                parts = b.split(".")
                referenced.add(".".join(parts[1:]) if len(parts) > 2 else b)
    not_rendered = sorted(r for r in referenced if r not in rendered)
    facts["blocksReferencedNotRendered"] = not_rendered

    # images referenced vs captured
    imgs_ref = sorted({i for f in js.values() for i in f["images"]})
    captured_paths = set(ui.get("assets", {}).keys())
    facts["images"] = [{"ref": i, "captured": any(p.endswith(i.split("?")[0].split("/")[-1]) for p in captured_paths)} for i in imgs_ref]

    # CSS
    bundle, css_order, css_missing, kept_assets = bundle_styles(ui, out)
    usage = class_usage(soup)
    by_block, generic, defs = css_relevant(bundle, usage, [l.strip() for l in tree_lines])
    facts["cssOrder"] = css_order
    facts["cssMissingAssets"] = css_missing
    md = [f"# CSS relevant to {screen}\n",
          "Load order of stylesheets (keep this order in the build):\n",
          *[f"{i+1}. `{c}`" for i, c in enumerate(css_order)], "",
          "Rules below are those whose selector contains a class used on the captured page, grouped by the block that owns the element. Full source: `styles/bundle.css`.\n"]
    for owner in sorted(by_block, key=lambda o: [l.strip() for l in tree_lines].index(o) if o in [l.strip() for l in tree_lines] else 999):
        md.append(f"## {owner}\n")
        for cls, hits, total in by_block[owner]:
            md.append(f"### .{cls}  ({total} rule{'s' if total != 1 else ''})\n```css")
            for sel, body in hits:
                md.append(f"{sel[-220:]} {{ {body[:400]} }}")
            md.append("```")
    if generic:
        md.append("## Generic utility classes (too many rules to list; see bundle.css)\n")
        md.append(", ".join(f"`.{c}` ({n})" for c, n in generic))
    md.append("\n## Design tokens referenced by the rules above\n")
    for name in sorted(defs):
        md.append(f"- `{name}`: " + "; ".join(f"`{v}` (in `{s}`)" for s, v in defs[name]))
    write(os.path.join(out, "css-relevant.md"), "\n".join(md) + "\n")

    # runtime calls
    calls, other, envs = [], [], []
    for r in a.runtime:
        rd = load(r)
        calls.extend(rd.get("calls", []))
        other.extend(rd.get("otherRequests", []))
        if rd.get("environment"):
            envs.append(rd["environment"])
    def in_scope(path):
        seg = path.split("screenservices/")[-1].split("/")
        if len(seg) >= 4:
            return ".".join(seg[1:3]) in rendered or (facts["screenFile"] or "").startswith(seg[0] + "." + seg[1] + "." + seg[2])
        if len(seg) == 2:
            return seg[0] in scope_modules
        return False
    for c in calls:
        c["scope"] = "this screen" if in_scope(c.get("path", "")) else "other (after navigating away, or app shell)"
    facts["calls"] = [{k: c.get(k) for k in ("order", "t", "action", "path", "status", "scope")} for c in calls]

    # calls.json: reference for call parity (parity_check.cjs --calls): which action, in which phase, with which inputs
    def call_rows(rt_calls, marks):
        rows = []
        for c in rt_calls:
            pth = c.get("path", "")
            if "screenservices/" not in pth:
                continue
            seg = pth.split("screenservices/")[-1].split("/")
            act = c.get("action") or seg[-1]
            ts = c.get("ts") if c.get("ts") is not None else c.get("t", 0)
            phase = "load"
            for m in marks or []:
                if m.get("t", 0) <= (ts or 0):
                    phase = m["label"]
            req = c.get("request") if isinstance(c.get("request"), dict) else {}
            ip = req.get("inputParameters")
            rows.append({"module": seg[0], "action": act, "path": pth, "phase": phase, "ts": ts, "status": c.get("status"),
                         "kind": "data" if re.match(r"^(DataAction|ScreenDataSet|Aggregate)", act) else "server",
                         "inputNames": sorted(ip.keys()) if isinstance(ip, dict) else None,
                         "scope": "this screen" if in_scope(pth) else "other"})
        return rows
    marks0 = []
    for r in a.runtime:
        marks0 += load(r).get("marks", []) or []
    calls_ref = {"note": "Generated from the runtime capture. phase = load, or the label of the plan step after which the call started.",
                 "calls": call_rows(calls, marks0), "variants": {}}
    for vr in a.variant_runtime:
        rd = load(vr)
        vid = (rd.get("meta") or {}).get("variant") or os.path.basename(vr).split("+", 1)[-1][:-5]
        calls_ref["variants"][vid] = call_rows(rd.get("calls", []), rd.get("marks", []))
    write(os.path.join(out, "calls.json"), json.dumps(calls_ref, indent=1) + "\n")
    facts["otherRequests"] = other
    ts_out, seen = [], set()
    cmd = [f"# Service calls captured on {screen}\n",
           "| # | t (ms) | call | status | scope | path |", "|---|---|---|---|---|---|"]
    for c in calls:
        cmd.append(f"| {c.get('order')} | {c.get('t', '')} | `{c.get('action')}` | {c.get('status')} | {c['scope']} | `{c.get('path')}` |")
    by_action = OrderedDict()
    for c in [c for c in calls if c["scope"] == "this screen"] + [c for c in calls if c["scope"] != "this screen"]:
        by_action.setdefault(c["action"], c)
    for act, c in by_action.items():
        resp = c.get("response")
        data = resp.get("data", resp) if isinstance(resp, dict) else resp
        tname = re.sub(r"^(DataAction|Action)", "", act) + "Response"
        t = ts_type(data, tname, ts_out, seen)
        req = c.get("request")
        req_vars = list((req.get("screenData", {}) or {}).get("variables", {}).keys()) if isinstance(req, dict) else []
        req_inputs = [k for k in (req.keys() if isinstance(req, dict) else []) if k not in ("versionInfo", "viewName", "screenData", "inputParameters", "clientVariables")]
        inparams = list((req.get("inputParameters") or {}).keys()) if isinstance(req, dict) and isinstance(req.get("inputParameters"), dict) else []
        cmd += ["", f"## {act}", f"- Scope: {c['scope']}", f"- Path: `{c['path']}`",
                f"- Server action input parameters: {', '.join('`'+x+'`' for x in inparams) or '(none)'}",
                f"- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): {', '.join('`'+x+'`' for x in req_vars) or '(none)'}",
                f"- Other request keys: {', '.join('`'+x+'`' for x in req_inputs) or '(none)'}",
                f"- Response type: `{t}` (see types.ts)",
                "```json", json.dumps(c.get("response"), indent=1)[:6000], "```"]
    if other:
        cmd += ["", "## Other requests during capture (no bodies)", "| request | count |", "|---|---|"]
        cmd += [f"| `{o['request']}` | {o['count']} |" for o in other]
    write(os.path.join(out, "calls.md"), "\n".join(cmd) + "\n")
    write(os.path.join(out, "types.ts"), "// Generated from captured response shapes. Long Integer / Decimal travel as strings.\n\n" + "\n\n".join(ts_out) + "\n")

    # code-declared actions vs observed calls
    observed = {c["path"].split("screenservices/")[-1] for c in calls if "screenservices/" in c.get("path", "")}
    declared = []
    for k, f in js.items():
        for d in f["dataActions"] + f["serverActions"] + [{"name": x["name"], "url": x["url"]} for x in f["aggregates"]]:
            declared.append({"file": k, "name": d["name"], "url": d["url"], "observed": d["url"].split("screenservices/")[-1] in observed})
    facts["declaredCalls"] = declared

    # call sites, then diagram drafts (which use them)
    facts["callSites"] = call_sites_report(screen, sources, calls, out, scope_files=rendered_files + ([facts["screenFile"]] if facts["screenFile"] else []))
    facts["allSourceNames"] = sorted(sources.keys())
    facts["diagrams"] = diagrams_draft(screen, facts, js, calls, tree_lines, out, facts.get("callSites"))

    # security inventory
    envs = [load(r).get("environment") or {} for r in a.runtime] + [env]
    facts["security"] = security_report(screen, [e for e in envs if e], calls, sources, out)

    # coverage
    cov = [f"# Coverage for {screen}\n",
           f"- UI states captured: {', '.join(facts['states'])}",
           f"- Runtime captures: {len(a.runtime)} file(s), {len(calls)} call(s)",
           f"- Masked text nodes: {ui.get('report', {}).get('maskedTexts')}, user images removed: {ui.get('report', {}).get('removedUserImages')}",
           f"- Fetch failures during snapshot: {len(ui.get('report', {}).get('failed', []))}", ""]
    cov.append("## Blocks referenced in code but not rendered in any captured state")
    cov.append("Each one is a UI state (loading, empty, error, popup...) that still needs a capture, or a branch that never runs for this user.\n")
    cov += [f"- [ ] `{b}`" for b in not_rendered] or ["- none"]
    cov.append("\n## Images referenced in code")
    cov += [f"- [{'x' if i['captured'] else ' '}] `{i['ref']}`" for i in facts["images"]] or ["- none"]
    cov.append("\n## Data/server actions declared in the screen and its blocks")
    scr_decl = [d for d in declared if d["file"].endswith(".mvc.js")]
    cov += [f"- [{'x' if d['observed'] else ' '}] `{d['name']}` ({d['file']})" for d in scr_decl] or ["- none"]
    cov.append("\n## Module-level server actions (called from client actions; check which ones this screen uses)")
    mod_decl = [d for d in declared if d["file"].endswith(".controller.js")]
    cov += [f"- [{'x' if d['observed'] else ' '}] `{d['name']}` ({d['file']})" for d in mod_decl[:60]] or ["- none"]
    if css_missing:
        cov.append("\n## Assets referenced by CSS but not captured")
        cov += [f"- `{m}`" for m in css_missing[:60]]
    write(os.path.join(out, "coverage.md"), "\n".join(cov) + "\n")

    # digest
    d = [f"# Digest: {screen}\n",
         f"- Path: `{ui.get('env', {}).get('path')}`",
         f"- Viewport at capture: {ui.get('env', {}).get('viewport')}",
         f"- body class: `{ui.get('env', {}).get('bodyClass')}`; body style: `{ui.get('env', {}).get('bodyStyle') or '(see dom/default.html <body style>)'}`",
         f"- PWA: manifest `{ui.get('env', {}).get('manifestLink')}`, service workers {ui.get('env', {}).get('serviceWorkers')}",
         f"- Screen file: `{facts['screenFile']}`", "",
         "## Rendered block tree", "```", *tree_lines, "```", ""]
    order = ([facts["screenFile"]] if facts["screenFile"] else []) + [k for k in rendered_files if k != facts["screenFile"]]
    d.append("# Part 1: screen and rendered blocks (spec these in detail)\n")
    for k in order:
        f = js[k]
        has = any(f[x] for x in ("variables", "dataActions", "aggregates", "serverActions", "navigation", "lifecycle", "feedbackMessages", "jsNodes", "images"))
        if not has:
            continue
        d.append(f"## `{k}`")
        if f["variables"]:
            d.append("| variable | kind | type | default |\n|---|---|---|---|")
            d += [f"| {v['name']} | {v['kind']} | {v['type']} | `{v['default']}` |" for v in f["variables"]]
        for label, key in (("Data actions", "dataActions"), ("Aggregates", "aggregates"), ("Server actions", "serverActions")):
            if f[key]:
                d.append(f"- {label}: " + ", ".join(f"`{x['name']}` → `{x['url']}`" for x in f[key]))
        if f["lifecycle"]:
            d.append("- Lifecycle handlers: " + ", ".join(f["lifecycle"]))
        if f["clientActions"]:
            d.append("- Client actions / event handlers: " + ", ".join(f"`{x}`" for x in f["clientActions"]))
        if f["navigation"]:
            d.append("- Navigation: " + "; ".join(f"`{n['to']}`({', '.join(n['params'])})" for n in f["navigation"]))
        if f["navigateBack"]:
            d.append(f"- navigateBack calls: {f['navigateBack']}")
        if f["jsNodes"]:
            d.append("- JavaScript nodes: " + ", ".join(f"`{x}`" for x in f["jsNodes"]))
        if f["feedbackMessages"]:
            d.append("- Feedback messages: " + " | ".join(f"`{x}`" for x in f["feedbackMessages"]))
        if f["exceptions"]:
            d.append("- Exceptions handled: " + ", ".join(f["exceptions"]))
        if f["staticEntities"]:
            d.append("- Static entities / flags: " + ", ".join(f"`{x}`" for x in f["staticEntities"][:30]))
        if f["clientVariables"]:
            d.append("- Client variables: " + ", ".join(f["clientVariables"]))
        if f["images"]:
            d.append("- Images: " + ", ".join(f"`{x}`" for x in f["images"]))
        if f["candidateStrings"]:
            d.append("- Candidate static strings: " + " | ".join(f"`{x}`" for x in f["candidateStrings"][:25]))
        d.append("")
    d.append("# Part 2: sources of blocks NOT rendered in the captured states\n")
    d.append("These come from referenced blocks or from earlier captures. Use them to describe other states/branches (empty, error, alternative versions), marking them as not visually captured.\n")
    for k in other_files:
        f = js[k]
        bits = []
        for key in ("dataActions", "serverActions", "aggregates"):
            if f[key]:
                bits.append(key + ": " + ", ".join(x["name"] for x in f[key]))
        if f["navigation"]:
            bits.append("navigation: " + ", ".join(n["to"] for n in f["navigation"]))
        if f["images"]:
            bits.append("images: " + ", ".join(f["images"]))
        if f["candidateStrings"]:
            bits.append("strings: " + " | ".join(f["candidateStrings"][:6]))
        d.append(f"- `{k}`" + (": " + "; ".join(bits) if bits else ""))
    d.append("")
    scoped = [c for c in calls if c["scope"] == "this screen"]
    call_lines = [f"- {c['order']}. `{c['action']}` ({c['status']}) at {c.get('t', '?')} ms" for c in scoped] or ["- none"]
    if len(scoped) < len(calls):
        call_lines.append(f"- plus {len(calls) - len(scoped)} call(s) outside this screen, listed in calls.md")
    gap_lines = [f"- `{b}`" for b in not_rendered] or ["- nothing"]
    d += ["## Captured calls", *call_lines, "", "## Not yet captured (see coverage.md)", *gap_lines, ""]
    write(os.path.join(out, "digest.md"), "\n".join(d) + "\n")
    write(os.path.join(out, "facts.json"), json.dumps(facts, indent=1))
    print(f"analysis written to {out}: {len(js)} JS files analysed, {len(calls)} calls, "
          f"{len(not_rendered)} blocks not rendered, {len(kept_assets)} assets, {len(css_order)} stylesheets")


if __name__ == "__main__":
    main()
