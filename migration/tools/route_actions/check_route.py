#!/usr/bin/env python3
"""Check one route: the OutSystems client actions and server calls against the React app. Writes one md file.

Usage (from the project root):
  MCP_TOKEN=<token> python3 migration/tools/route_actions/check_route.py <Route>        # writes the route file
  python3 migration/tools/route_actions/check_route.py <Route> --mark-done              # sets the route to done
  python3 migration/tools/route_actions/check_route.py --routes                         # writes ROUTES.md

Sources, in this order (README.md has the details):
  1. KB: ~/Projects/ubt_sharing_kb/connect/outsystems (DEV design time, extracted 2026-10-05).
  2. TST, in this repository (TST wins): migration/screens/<S>/analysis/{facts.json,calls.json,sources/raw},
     migration/survey/screens.json, app/src/api/openapi.yaml.
  3. MCP (DEV), only for gaps: UI flow per screen, the server actions inside data actions (module UBTConnect).
  4. React: migration/route-actions/data/react-shell.json and react-<Route>.json (react_calls.mjs).
"""
import argparse, collections, glob, json, os, re, subprocess, sys
from datetime import date

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, ".claude", "skills", "outsystems-screen-spec", "scripts"))
import mcp_client  # noqa: E402

OUT = os.path.join(ROOT, "migration", "route-actions")
DATA = os.path.join(OUT, "data")
KB = os.path.expanduser("~/Projects/ubt_sharing_kb/connect/outsystems/apps")
KB_LABEL = "ubt_sharing_kb/connect/outsystems/apps"
PLATFORM_MODULES = ("OutSystemsUI_2_23", "NavigationHandler", "UBTJavaScriptUtils", "OutSystems")
APP_ROOT_RE = re.compile(r"(?i)^(onApplicationReady|appManager_OnAppReady\w*|onApplicationResume\w*|fCM_\w+|handleOnApplication\w+)$")


def load(p):
    return json.load(open(p, encoding="utf-8"))


def rel(p):
    return os.path.relpath(p, ROOT)


def core(name):
    n = name.replace("_", "").lower()
    changed = True
    while changed:
        changed = False
        for pre in ("screenevent", "handler", "handle", "event", "on"):
            if n.startswith(pre) and len(n) > len(pre) + 2:
                n, changed = n[len(pre):], True
    return n


def file_key(f):
    return re.sub(r"\.(mvc|controller)\.js$", "", f)


def short(f):
    return file_key(f).split(".")[-1]


# ---------------------------------------------------------------------------------------------------------------
# route list
# ---------------------------------------------------------------------------------------------------------------
def board_rows():
    rows = {}
    for line in open(os.path.join(ROOT, "migration", "board.md"), encoding="utf-8"):
        if line.startswith("| ") and "`/UBTConnect" in line:
            c = [x.strip() for x in line.split("|")]
            rows[c[1]] = {"decision": c[6], "status": c[8]}
    return rows


def generated_routes():
    txt = open(os.path.join(ROOT, "app", "src", "app", "routes.generated.ts"), encoding="utf-8").read()
    return [json.loads(m.group(0)) for m in re.finditer(r'\{"path": [^\n]*?\}', txt)]


def ui_flows():
    try:
        return {s["Name"]: s["UIFlow"] for s in mcp_client.screen_names("UBTConnect")}
    except Exception as e:  # cached file missing and no token
        print("UI flows: MCP not available:", e)
        return {}


def routes_md_path():
    return os.path.join(OUT, "ROUTES.md")


def read_status():
    st = {}
    p = routes_md_path()
    if os.path.exists(p):
        for m in re.finditer(r"^\| \[?`?(\w+)`?\]?[^|]*\| [^|]*\| (todo|done) \|", open(p, encoding="utf-8").read(), re.M):
            st[m.group(1)] = m.group(2)
    return st


def write_routes(done=None):
    st = read_status()
    if done:
        st[done] = "done"
    flows = ui_flows()
    board = board_rows()
    routes = generated_routes()
    build = [r for r in routes if board.get(r["screen"], {}).get("decision") == "build"]
    skip = [r for r in routes if board.get(r["screen"], {}).get("decision") != "build"]
    by_flow = collections.defaultdict(list)
    for r in build:
        by_flow[flows.get(r["screen"], "unclear (not in MCP list)")].append(r["screen"])
    n_done = sum(1 for r in build if st.get(r["screen"]) == "done")
    L = ["# Routes: OutSystems actions against React", "",
         f"One file per route. Run `python3 migration/tools/route_actions/check_route.py <Route>` (see "
         f"[README](../tools/route_actions/README.md)). Progress: **{n_done} of {len(build)}** build routes done.", "",
         f"UI flows: Service Studio MCP `getScreenNames(UBTConnect)`, DEV, read {date.today().isoformat()}. "
         "Routes and scope: `app/src/app/routes.generated.ts` (84 routes) and `migration/board.md`.", "",
         "| Route | UI flow | Status |", "|---|---|---|"]
    for flow in sorted(by_flow):
        for s in sorted(by_flow[flow]):
            status = st.get(s, "todo")
            name = f"[`{s}`]({s}.md)" if os.path.exists(os.path.join(OUT, f"{s}.md")) else f"`{s}`"
            L.append(f"| {name} | `{flow}` | {status} |")
    L += ["", f"## Out of scope ({len(skip)} skip routes)", "",
          "These routes have no React page (decision `skip` on the board). They are not checked.", "",
          "| Route | UI flow |", "|---|---|"]
    for r in sorted(skip, key=lambda r: r["screen"]):
        L.append(f"| `{r['screen']}` | `{flows.get(r['screen'], 'not in the MCP list (DEV)')}` |")
    open(routes_md_path(), "w", encoding="utf-8").write("\n".join(L) + "\n")
    print("wrote", rel(routes_md_path()), f"({len(build)} build, {len(skip)} skip, {n_done} done)")


# ---------------------------------------------------------------------------------------------------------------
# KB (DEV design time)
# ---------------------------------------------------------------------------------------------------------------
def kb_module(module):
    hits = glob.glob(os.path.join(KB, "*", "modules", module))
    if not hits:
        return None
    d = hits[0]
    ui = os.path.join(d, "contracts", "ui.json")
    elems = {}
    if os.path.exists(ui):
        u = load(ui)
        for x in u.get("screens", []) + u.get("blocks", []):
            elems[x["name"]] = x
    rules = {}
    for md in glob.glob(os.path.join(d, "ui", "*.md")):
        cur = None
        for line in open(md, encoding="utf-8"):
            m = re.match(r"^## (\w+) \(", line)
            if m:
                cur = m.group(1)
                rules.setdefault(cur, {"page": os.path.relpath(md, KB), "rules": []})
            elif line.startswith("## "):
                cur = None
            elif cur:
                rules[cur]["rules"] += re.findall(r"\[(BR-[\w-]+)\]", line)
    return {"dir": os.path.relpath(d, KB), "elems": elems, "rules": rules}


# ---------------------------------------------------------------------------------------------------------------
# MCP (DEV): server actions inside the data actions of UBTConnect screens and blocks
# ---------------------------------------------------------------------------------------------------------------
def mcp_backend(kind, module, name):
    """{dataActionName: [ 'Module.Action (service|server)' ]} from the Model API code; None when not readable."""
    if module != "UBTConnect":
        return None
    try:
        code = mcp_client.element_code(kind, module, name)
    except Exception as e:
        print(f"MCP {kind} {name}: {e}")
        return None
    owners = {v: n for v, n in re.findall(r"var (\w+) = \w+\.Create(?:DataAction|Aggregate)\(\"(\w+)\"\)", code)}
    refs = dict(re.findall(r"var (\w+) = eSpace\.References\.Named\(\"(\w+)\"\)", code))
    named = {}
    for v, holder, coll, n in re.findall(r"var (\w+) = (\w+)\.(ServiceActions|ServerActions)\.Named\(\"(\w+)\"\)", code):
        named[v] = (refs.get(holder, module if holder == "eSpace" else holder), n, "service" if coll == "ServiceActions" else "server")
    nodes = re.findall(r"var (\w+) = (\w+)\.CreateNode<OutSystems\.Model\.Logic\.Nodes\.IExecuteServerActionNode>\(\"\w+\"\)", code)
    assign = dict(re.findall(r"(\w+)\.Action = (\w+);", code))
    out = collections.defaultdict(list)
    for nv, owner in nodes:
        if owner in owners and assign.get(nv) in named:
            mod, n, k = named[assign[nv]]
            item = f"{mod}.{n} ({k})"
            if item not in out[owners[owner]]:
                out[owners[owner]].append(item)
    for v, n in owners.items():
        out.setdefault(n, [])
    return dict(out)


# ---------------------------------------------------------------------------------------------------------------
# TST
# ---------------------------------------------------------------------------------------------------------------
def tst_route(screen):
    base = os.path.join(ROOT, "migration", "screens", screen, "analysis")
    if not os.path.exists(os.path.join(base, "facts.json")):
        return None
    facts = load(os.path.join(base, "facts.json"))
    calls = load(os.path.join(base, "calls.json"))["calls"] if os.path.exists(os.path.join(base, "calls.json")) else []
    srcdir = os.path.join(base, "sources", "raw")
    sources = {f: open(os.path.join(srcdir, f), encoding="utf-8", errors="replace").read() for f in os.listdir(srcdir)}
    import analyze_capture as ac
    nodes, edges, endpoints = ac.call_graph(sources)
    return {"facts": facts, "calls": calls, "nodes": nodes, "edges": edges, "endpoints": endpoints}


def survey_screen(screen):
    s = load(os.path.join(ROOT, "migration", "survey", "screens.json"))
    for f, v in s["screens"].items():
        if v["screen"] == screen:
            return f, v, s
    return None, None, s


# ---------------------------------------------------------------------------------------------------------------
# React
# ---------------------------------------------------------------------------------------------------------------
def react_data(route):
    shell_p = os.path.join(DATA, "react-shell.json")
    page_p = os.path.join(DATA, f"react-{route}.json")
    scan = os.path.join(ROOT, "migration", "tools", "route_actions", "react_calls.mjs")
    if not os.path.exists(shell_p):
        subprocess.run(["node", scan, "shell"], check=True, cwd=ROOT)
    subprocess.run(["node", scan, "page", route], check=True, cwd=ROOT)
    subprocess.run(["node", scan, "all"], check=True, cwd=ROOT)
    return load(shell_p), load(page_p), load(os.path.join(DATA, "react-all.json"))


def doc_notes(name, limit=3):
    """Lines of the React docs next to the code (app/src/**/*.md) that name an OutSystems action or block."""
    out = []
    pat = re.compile(rf"\b{re.escape(name)}\b")
    for p in sorted(glob.glob(os.path.join(ROOT, "app", "src", "**", "*.md"), recursive=True)):
        for i, line in enumerate(open(p, encoding="utf-8"), 1):
            if pat.search(line):
                out.append((rel(p), i, line.strip()[:180]))
                if len(out) >= limit:
                    return out
    return out


def contract_paths():
    import yaml
    d = yaml.safe_load(open(os.path.join(ROOT, "app", "src", "api", "openapi.yaml"), encoding="utf-8"))
    return {p: (op.get("post") or {}).get("x-os-paths", []) for p, op in d["paths"].items()}


def route_meta(screen):
    txt = open(os.path.join(ROOT, "app", "src", "app", "routes.ts"), encoding="utf-8").read()
    m = re.search(rf"^\s*{screen}: \{{ access: '(\w+)', lock: '(\w+)' \}}", txt, re.M)
    meta = {"access": m.group(1), "lock": m.group(2)} if m else {"access": "member", "lock": "enforce"}
    fr = re.search(rf"^\s*{screen}: \{{\s*flag: '(\w+)',\s*when: (\w+),\s*to: '(\w+)'", txt, re.M)
    meta["flagRedirect"] = f"{fr.group(1)} = {fr.group(2)} → {fr.group(3)}" if fr else "none"
    return meta


# ---------------------------------------------------------------------------------------------------------------
# check
# ---------------------------------------------------------------------------------------------------------------
def endpoint_kind(url):
    last = url.rsplit("/", 1)[-1]
    if last.startswith("DataAction"):
        return "data action"
    if last.startswith("ScreenDataSet"):
        return "aggregate"
    if last.startswith("ServiceAPI"):
        return "service action"
    return "server action"


def check(route):
    flows = ui_flows()
    board = board_rows()
    if board.get(route, {}).get("decision") != "build":
        sys.exit(f"{route}: not a build route")
    sfile, sv, survey = survey_screen(route)
    tst = tst_route(route)
    if tst is None:
        sys.exit(f"{route}: no TST capture (migration/screens/{route}/analysis/facts.json); the pilot covers captured routes")
    facts, nodes, edges, endpoints = tst["facts"], tst["nodes"], tst["edges"], tst["endpoints"]
    shell_r, page_r, all_r = react_data(route)
    cpaths = contract_paths()
    meta = route_meta(route)
    flow = flows.get(route, "unclear")

    # --- OS: rendered files, groups ------------------------------------------------------------------------------
    rendered = [f for f in facts["renderedFiles"] if f.endswith(".mvc.js")]
    js = facts["js"]
    by_key = {file_key(f): f for f in rendered}
    shell_files = set()
    todo = [f for f in rendered if f in set(survey["shell"])]
    while todo:
        f = todo.pop()
        if f in shell_files:
            continue
        shell_files.add(f)
        for b in js.get(f, {}).get("referencedBlocks", []):
            if b in by_key:
                todo.append(by_key[b])
    group_of_file = {f: ("shell" if f in shell_files else "screen") for f in rendered}
    short_to_file = {}
    for f in rendered:
        short_to_file.setdefault(short(f), f)

    # --- graph helpers -------------------------------------------------------------------------------------------
    callees = collections.defaultdict(set)
    for a, b in edges:
        callees[a].add(b)
    url_of_node = collections.defaultdict(set)
    for url, ids in endpoints.items():
        for i in ids:
            url_of_node[i].add(url)

    def effects(nid):
        """Endpoints that an action reaches. A block event that the action raises is not followed: the handler of
        the parent block owns what happens next."""
        seen, todo2, out = set(), [nid], set()
        while todo2:
            n = todo2.pop()
            if n in seen:
                continue
            seen.add(n)
            out |= url_of_node.get(n, set())
            todo2 += [c for c in callees.get(n, ()) if not c.startswith("evt:")]
        return out

    # --- endpoints (TST callSites) -------------------------------------------------------------------------------
    observed = {c["path"].split("/UBTConnect/", 1)[-1]: c for c in tst["calls"]}
    observed = {("screenservices/" + k.split("screenservices/", 1)[-1]): v for k, v in observed.items()}
    react_calls = []
    shell_keys = set(shell_r["reachedKeys"])
    for c in page_r["calls"]:
        unit = f"{c['file']}::{c['fn']}"
        where = "shell + page" if any(c["file"] == s["file"] and c["line"] == s["line"] for s in shell_r["calls"]) else "page"
        react_calls.append({**c, "where": where})
    for c in shell_r["calls"]:
        if not any(c["file"] == p["file"] and c["line"] == p["line"] for p in page_r["calls"]):
            react_calls.append({**c, "where": "shell"})
    react_by_url = collections.defaultdict(list)
    react_unknown = []
    for c in react_calls:
        ps = cpaths.get(c["apiPath"])
        if ps is None:
            react_unknown.append(c)
            continue
        for p in ps:
            react_by_url[p].append(c)

    def root_group(chain):
        root = chain[0] if chain else ""
        head = root.split(" ")[0]
        mod_or_block = head.split(".")[0]
        if mod_or_block in short_to_file:
            return group_of_file[short_to_file[mod_or_block]]
        if root.startswith(("onClick in ", "event ")):
            m = re.search(r" (?:in|of) (\w+)$", root)
            if m and m.group(1) in short_to_file:
                return group_of_file[short_to_file[m.group(1)]]
            return "screen"
        if re.match(r"^\w+ fetch at start$", root):
            b = root.split(" ")[0]
            return group_of_file.get(short_to_file.get(b, ""), "screen")
        return "shell"  # module-level root (application ready, callbacks)

    eps = []
    for url, site in facts["callSites"].items():
        full = "screenservices/" + url
        groups = {root_group(c) for c in site.get("chains", [])} or {"screen"}
        grp = "shell" if groups == {"shell"} else "screen"
        rc = react_by_url.get(full, [])
        eps.append({
            "url": full, "short": url, "kind": endpoint_kind(url), "group": grp,
            "observed": "observed" if site.get("observed") else ("not observed" if tst["calls"] else "not captured"),
            "chains": site.get("chains", []), "react": rc,
            "status": "implemented" if rc else "missing",
        })
    tst_urls = {e["url"] for e in eps}
    all_by_url = collections.defaultdict(list)
    for c in all_r["calls"]:
        for p in cpaths.get(c["apiPath"]) or []:
            all_by_url[p].append(c)
    for e in eps:
        if e["status"] == "missing":
            e["elsewhere"] = all_by_url.get(e["url"], [])
            bare = re.sub(r"^(Action|ServiceAPI|DataAction|ScreenDataSet)", "", e["url"].rsplit("/", 1)[-1])
            e["notes"] = doc_notes(bare)
    react_only = []
    for c in react_calls:
        ps = cpaths.get(c["apiPath"]) or []
        if not any(p in tst_urls for p in ps):
            react_only.append({**c, "osPaths": ps})

    # --- backend (MCP) for data actions of UBTConnect elements ---------------------------------------------------
    backend = {}
    for f in rendered:
        das = js.get(f, {}).get("dataActions", [])
        if not das:
            continue
        mod = f.split(".")[0]
        kind = "screen" if f == sfile else "block"
        b = mcp_backend(kind, mod, short(f))
        for da in das:
            name = re.sub(r"^DataAction", "", da["name"])
            if b is None:
                backend[da["url"]] = f"not read: module `{mod}` is not readable by MCP now"
            else:
                items = b.get(name)
                backend[da["url"]] = ", ".join(f"`{x}`" for x in items) if items else "none found (MCP)"
    for e in eps:
        e["backend"] = backend.get(e["url"], "–")

    # --- KB ------------------------------------------------------------------------------------------------------
    kb_cache = {}

    def kb(mod):
        if mod not in kb_cache:
            kb_cache[mod] = kb_module(mod)
        return kb_cache[mod]

    # --- React name index ----------------------------------------------------------------------------------------
    react_files = {}
    for r in (page_r, shell_r):
        for f, names in r["fileFunctions"].items():
            react_files.setdefault(f, set()).update(names)
    origin_files = collections.defaultdict(set)
    for r in (page_r, shell_r):
        for o in r["origins"]:
            origin_files[o["origin"]].add(o["file"])
    reached_texts = {}
    for f in set(page_r["files"]) | set(shell_r["files"]):
        reached_texts[f] = open(os.path.join(ROOT, f), encoding="utf-8").read()
    all_origins = collections.defaultdict(set)
    for o in all_r["origins"]:
        all_origins[o["origin"]].add(o["file"])

    def port_of(f):
        """React files that port a rendered OutSystems file, and the evidence: tag, name, or elsewhere."""
        key, el = file_key(f), short(f)
        if origin_files.get(key):
            return sorted(origin_files[key]), "tag"
        pats = [re.compile(rf"\b{re.escape(key)}\b")]
        if len(el) >= 8 and ("_" in el or len(el) >= 12):
            pats.append(re.compile(rf"\b{re.escape(el)}\b"))
        hits = sorted(x for x, t in reached_texts.items() if any(p.search(t) for p in pats))
        if hits:
            return hits[:3], "name"
        if all_origins.get(key):
            return sorted(all_origins[key]), "elsewhere"
        return [], None

    ports = {f: port_of(f) for f in rendered}
    core_index = collections.defaultdict(set)
    for f, names in react_files.items():
        for n in names:
            core_index[core(n)].add((n, f))

    def name_match(name, prefer_files=()):
        c = core(name)
        if len(c) < 5:
            return None
        hits = core_index.get(c, set())
        if not hits:
            return None
        pref = [h for h in hits if h[1] in prefer_files]
        n, f = sorted(pref or hits)[0]
        return n, f

    # --- client actions per rendered file ------------------------------------------------------------------------
    actions = []
    for f in rendered:
        mod = f.split(".")[0]
        el = short(f)
        pfiles, pev = ports[f]
        ofiles = set(pfiles) if pev in ("tag", "name") else set()
        kbm = kb(mod)
        kbe = (kbm or {}).get("elems", {}).get(el)
        kb_actions = {k[0].lower() + k[1:]: v for k, v in (kbe or {}).get("screenActions", {}).items()}
        tst_names = js.get(f, {}).get("clientActions", [])
        for a in tst_names:
            nid = f"act:{f}:{a}"
            eff = sorted(effects(nid))
            nm = name_match(a, ofiles)
            missing_eff = [u for u in eff if u in tst_urls and not react_by_url.get(u)]
            if mod.startswith(PLATFORM_MODULES):
                status = "matched" if nm else "platform"
            elif nm:
                status = "matched"
            elif eff and not missing_eff and ofiles:
                status = "matched (effects)"
            elif missing_eff:
                status = "missing"
            elif ofiles:
                status = "in ported block"
            else:
                status = "unclear"
            actions.append({"file": f, "group": group_of_file[f], "element": el, "module": mod, "action": a,
                            "effects": eff, "missingEffects": missing_eff, "nameMatch": nm, "originFiles": sorted(ofiles),
                            "portEvidence": pev, "kb": kb_actions.get(a), "inKb": kbe is not None, "status": status})
        if kbe:
            for k in kb_actions:
                if k not in tst_names:
                    actions.append({"file": f, "group": group_of_file[f], "element": el, "module": mod, "action": k,
                                    "effects": [], "missingEffects": [], "nameMatch": None, "originFiles": sorted(ofiles),
                                    "kb": kb_actions[k], "inKb": True, "status": "dev-only"})

    # --- module client actions reached ---------------------------------------------------------------------------
    roots = [n for n in nodes if (n.split(":")[0] in ("act", "life", "ui", "evt", "start", "da") and n.split(":")[1] in rendered)]
    app_roots = [n for n in nodes if n.startswith("mod:") and APP_ROOT_RE.match(n.split(":")[-1])]
    reach_from = {}
    for grp, rs in (("screen", roots), ("shell", app_roots)):
        seen, todo3 = set(), list(rs)
        while todo3:
            n = todo3.pop()
            if n in seen:
                continue
            seen.add(n)
            todo3 += list(callees.get(n, ()))
        for n in seen:
            if n.startswith("mod:"):
                reach_from.setdefault(n, set()).add(grp)
    mod_actions = []
    for n, grps in sorted(reach_from.items()):
        _, mod, name = n.split(":", 2)
        eff = sorted(effects(n))
        nm = name_match(name)
        missing_eff = [u for u in eff if u in tst_urls and not react_by_url.get(u)]
        if mod.startswith(PLATFORM_MODULES) or mod.endswith("Plugin") or "Plugin" in mod:
            status = "matched" if nm else "platform"
        elif nm:
            status = "matched"
        elif eff and not missing_eff:
            status = "matched (effects)"
        elif missing_eff:
            status = "missing"
        else:
            status = "no effect"
        mod_actions.append({"module": mod, "action": name, "group": "shell" if grps == {"shell"} else "screen",
                            "app": n in app_roots, "effects": eff, "missingEffects": missing_eff, "nameMatch": nm,
                            "status": status})

    # --- blocks --------------------------------------------------------------------------------------------------
    blocks = []
    for f in rendered:
        mod = f.split(".")[0]
        el = short(f)
        kbm = kb(mod)
        r = (kbm or {}).get("rules", {}).get(el)
        blocks.append({"file": f, "key": file_key(f), "group": group_of_file[f], "module": mod,
                       "react": ports[f][0], "evidence": ports[f][1],
                       "kbPage": f"{KB_LABEL}/{r['page']}" if r else None, "rules": (r or {}).get("rules", []),
                       "inKb": bool(kbm and el in kbm["elems"]), "kbModule": bool(kbm)})

    # --- navigation ----------------------------------------------------------------------------------------------
    os_nav = collections.defaultdict(set)
    for f in rendered:
        for n in js.get(f, {}).get("navigation", []):
            os_nav[n["to"].rsplit("/", 1)[-1]].add(short(f))
    react_nav = collections.defaultdict(set)
    navigates = re.compile(r"navigat|\bgo\(|osNavigateTo|replaceTo|flagRedirect", re.I)
    for r, w in ((page_r, "page"), (shell_r, "shell")):
        for n in r["navigations"]:
            # a bare screen name counts only in a file that navigates (flag registries and static entities also
            # list screen names)
            if n.get("how") == "name" and not navigates.search(reached_texts.get(n["file"], "")):
                continue
            react_nav[n["to"]].add(f"{n['file']}:{n['line']}")

    result = {"route": route, "screenFile": sfile, "flow": flow, "survey": sv, "meta": meta, "endpoints": eps,
              "reactOnly": react_only, "reactUnknown": react_unknown, "actions": actions, "moduleActions": mod_actions,
              "blocks": blocks, "osNav": {k: sorted(v) for k, v in os_nav.items()},
              "reactNav": {k: sorted(v) for k, v in react_nav.items()}, "observedCount": len(tst["calls"]),
              "react": {"shellFiles": len(shell_r["files"]), "pageFiles": len(page_r["files"]),
                        "pageEntry": page_r["entry"]}}
    json.dump(result, open(os.path.join(DATA, f"check-{route}.json"), "w"), indent=1, default=list)
    return result


# ---------------------------------------------------------------------------------------------------------------
# render
# ---------------------------------------------------------------------------------------------------------------
def md_escape(s):
    return str(s).replace("|", "\\|")


def link(path, line=None):
    target = os.path.relpath(os.path.join(ROOT, path), OUT)
    return f"[`{path.replace('app/src/', '')}{':' + str(line) if line else ''}`]({target}{'#L' + str(line) if line else ''})"


PATTERN_MODULES = ("UBTConnectLibrary", "OutSystemsUI_2_23")


def chain_owner(chain, blocks):
    """The block whose own action makes the call: the last `Block.action` step of a screen or business block (not a
    UI pattern). Else the block of a `<Block> fetch at start` root, else the module of an app-level root."""
    by_short = {b["key"].split(".")[-1]: b for b in blocks}
    for step in reversed(chain):
        m = re.match(r"^(\w+)\.\w+$", step)
        if m and m.group(1) in by_short and by_short[m.group(1)]["module"] not in PATTERN_MODULES:
            return m.group(1), by_short[m.group(1)]["group"]
        m = re.match(r"^(\w+) fetch at start$", step)
        if m and m.group(1) in by_short:
            return m.group(1), by_short[m.group(1)]["group"]
    head = (chain[0] if chain else "?").split(" ")[0].split(".")[0]
    if head in by_short:
        return head, by_short[head]["group"]
    return head, "shell"


def mermaid(r):
    L = ["flowchart LR"]
    ids = {}

    def nid(key, prefix):
        if key not in ids:
            ids[key] = f"{prefix}{len(ids)}"
        return ids[key]

    owners = collections.defaultdict(list)
    for e in r["endpoints"]:
        found = {chain_owner(c, r["blocks"]) for c in e["chains"] if c} or {("?", e["group"])}
        for o, g in sorted(found):
            if e not in owners[(g, o)]:
                owners[(g, o)].append(e)
    L.append('  subgraph OS["OutSystems (TST compiled)"]')
    for grp, title in (("shell", "App shell"), ("screen", "Screen and its blocks")):
        L.append(f'    subgraph OS_{grp}["{title}"]')
        for (g, o), _ in sorted(owners.items()):
            if g == grp:
                L.append(f'      {nid(("o", g, o), "o")}["{o}"]')
        L.append("    end")
    L.append("  end")
    L.append('  subgraph EP["Endpoints (TST)"]')
    for e in r["endpoints"]:
        label = e["short"].rsplit("/", 1)[-1]
        L.append(f'    {nid(("e", e["url"]), "e")}["{label}"]')
    L.append("  end")
    fns = {}
    for e in r["endpoints"]:
        for c in e["react"]:
            fns[(c["where"].split(" ")[0], c["fn"], c["file"])] = c
    L.append('  subgraph RE["React"]')
    for grp, title in (("shell", "App shell"), ("page", "Page")):
        L.append(f'    subgraph RE_{grp}["{title}"]')
        for (w, fn, f), c in sorted(fns.items()):
            if w == grp:
                L.append(f'      {nid(("r", fn, f), "r")}["{fn}()"]')
        L.append("    end")
    L.append("  end")
    for (g, o), es in owners.items():
        for e in es:
            L.append(f'  {ids[("o", g, o)]} --> {ids[("e", e["url"])]}')
    for e in r["endpoints"]:
        for c in e["react"]:
            L.append(f'  {ids[("e", e["url"])]} --- {ids[("r", c["fn"], c["file"])]}')
    miss = [ids[("e", e["url"])] for e in r["endpoints"] if e["status"] == "missing"]
    L.append("  classDef missing fill:#fde2e1,stroke:#c0392b,color:#7b241c")
    L.append("  classDef ok fill:#e3f4e8,stroke:#2e7d4f,color:#1d4d31")
    if miss:
        L.append(f"  class {','.join(miss)} missing")
    ok = [ids[("e", e["url"])] for e in r["endpoints"] if e["status"] != "missing"]
    if ok:
        L.append(f"  class {','.join(ok)} ok")
    return "\n".join(L)


def render(r):
    route = r["route"]
    eps = r["endpoints"]
    cnt = collections.Counter(e["status"] for e in eps)
    act_cnt = collections.Counter(a["status"] for a in r["actions"])
    mod_cnt = collections.Counter(a["status"] for a in r["moduleActions"])
    blocks_ported = sum(1 for b in r["blocks"] if b["evidence"] in ("tag", "name"))
    nav_missing = [t for t in r["osNav"] if t not in r["reactNav"]]
    mm = mermaid(r)
    os.makedirs(os.path.join(OUT, "svg"), exist_ok=True)
    open(os.path.join(DATA, f"{route}.mmd"), "w").write(mm)
    L = [f"# {route}: OutSystems actions against React", "",
         f"Generated by `migration/tools/route_actions/check_route.py` on {date.today().isoformat()}. The tool reads "
         "the sources below. It does not run the app.", "",
         "| Item | Value | Source |", "|---|---|---|",
         f"| Route | `/UBTConnect/{route}` | `app/src/app/routes.generated.ts` |",
         f"| OutSystems screen | `{file_key(r['screenFile'])}` | TST compiled code (`migration/survey/screens.json`) |",
         f"| UI flow | `{r['flow']}` | MCP `getScreenNames` (DEV); TST flow `{r['survey']['flow']}` |",
         f"| React page | {link(r['react']['pageEntry'])} | `app/src/pages/` |",
         f"| React route meta | access `{r['meta']['access']}`, lock `{r['meta']['lock']}`, flag redirect {r['meta']['flagRedirect']} | `app/src/app/routes.ts` |",
         f"| TST runtime capture | {r['observedCount']} calls observed | `migration/screens/{route}/analysis/calls.json` |",
         f"| Code read | OutSystems: {len([b for b in r['blocks']])} rendered screen and block files. React: {r['react']['shellFiles']} app shell files, {r['react']['pageFiles']} page files | facts.json, react_calls.mjs |",
         "", "## 1. Result", "",
         "| Check | Result |", "|---|---|",
         f"| Endpoints (server calls) | {len(eps)} on TST: {cnt['implemented']} implemented, **{cnt['missing']} missing** |",
         f"| React calls with no TST endpoint on this route | {len(r['reactOnly'])} |",
         f"| Screen and block client actions | {len(r['actions'])}: " + ", ".join(f"{k} {v}" for k, v in sorted(act_cnt.items())) + " |",
         f"| Module client actions reached | {len(r['moduleActions'])}: " + ", ".join(f"{k} {v}" for k, v in sorted(mod_cnt.items())) + " |",
         f"| Rendered blocks with a React port (`@origin`) | {blocks_ported} of {len(r['blocks'])} |",
         f"| Navigation targets | {len(r['osNav'])} on TST, {len(nav_missing)} not found in React |", "",
         "Statuses: [legend](#8-method-and-legend).", "",
         "## 2. Diagram", "",
         "Each OutSystems root (block or app-level action) leads to the endpoints it calls. Each endpoint is joined "
         "to the React function that calls it. Red = missing in React.", "",
         f"![{route} diagram](svg/{route}.svg)", "", "<details><summary>Mermaid source</summary>", "",
         "```mermaid", mm, "```", "", "</details>", "",
         "## 3. Endpoints (server calls)", "",
         "| # | Endpoint (TST) | Kind | Where (OS) | First chain (TST compiled) | TST runtime | Inside the endpoint (MCP, DEV) | React call | Where (React) | Status |",
         "|---|---|---|---|---|---|---|---|---|---|"]
    for i, e in enumerate(sorted(eps, key=lambda e: (e["group"], e["short"])), 1):
        chain = " → ".join(e["chains"][0][-4:]) if e["chains"] else "–"
        rc = "<br>".join(f"`{c['fn']}()` {link(c['file'], c['line'])}" for c in e["react"]) or (
            "not reached: " + "<br>".join(f"`{c['fn']}()` {link(c['file'], c['line'])}" for c in e.get("elsewhere", []))
            if e.get("elsewhere") else "no React code")
        where = ", ".join(sorted({c["where"] for c in e["react"]})) or "–"
        st = f"**{e['status']}**" if e["status"] == "missing" else e["status"]
        L.append(f"| {i} | `{e['short']}` | {e['kind']} | {e['group']} | {md_escape(chain)} | {e['observed']} | {e['backend']} | {rc} | {where} | {st} |")
    L += ["", "### React calls with no TST endpoint on this route", ""]
    if r["reactOnly"]:
        L += ["| React call | Where | Contract `x-os-paths` | Note |", "|---|---|---|---|"]
        for c in r["reactOnly"]:
            L.append(f"| `{c['fn']}()` → `{c['apiPath']}` {link(c['file'], c['line'])} | {c['where']} | "
                     f"{', '.join('`' + p + '`' for p in c['osPaths']) or '–'} | unclear: see section 7 |")
    else:
        L.append("None.")
    # client actions
    L += ["", "## 4. Client actions of the screen and its blocks", "",
          "Source: TST compiled code (`facts.json` → `js[file].clientActions`, call graph of `analyze_capture.py`). "
          "KB column: the actions that the action calls in the DEV model (`contracts/ui.json` of the KB).", ""]
    by_el = collections.defaultdict(list)
    for a in r["actions"]:
        by_el[(a["group"], a["file"])].append(a)
    for (grp, f), acts in sorted(by_el.items()):
        c = collections.Counter(a["status"] for a in acts)
        ev = acts[0].get("portEvidence")
        react = (", ".join(link(x) for x in acts[0]["originFiles"]) + (" (block name in the file, no tag)" if ev == "name" else "")) \
            if acts[0]["originFiles"] else "not found in the React code of this route"
        L += [f"<details><summary><code>{file_key(f)}</code> ({grp}): {len(acts)} actions; "
              + ", ".join(f"{k} {v}" for k, v in sorted(c.items())) + "</summary>", "",
              f"React port: {react}", "",
              "| Action | Calls (KB, DEV) | Endpoints reached (TST) | React match | Status |", "|---|---|---|---|---|"]
        for a in sorted(acts, key=lambda a: a["action"]):
            kbc = ", ".join(f"`{x}`" for x in (a["kb"] or [])) or ("–" if a["inKb"] else "not in KB")
            eff = "<br>".join(f"`{u.rsplit('/', 1)[-1]}`" for u in a["effects"]) or "–"
            nm = f"`{a['nameMatch'][0]}` {link(a['nameMatch'][1])}" if a["nameMatch"] else "–"
            st = f"**{a['status']}**" if a["status"] in ("missing", "unclear") else a["status"]
            L.append(f"| `{a['action']}` | {md_escape(kbc)} | {eff} | {nm} | {st} |")
        L += ["", "</details>", ""]
    # module actions
    L += ["## 5. Module client actions reached", "",
          "The module actions that the screen, its blocks or the app-level roots (`onApplicationReady` and similar) "
          "reach in the TST call graph.", ""]
    by_mod = collections.defaultdict(list)
    for a in r["moduleActions"]:
        by_mod[a["module"]].append(a)
    for mod, acts in sorted(by_mod.items()):
        c = collections.Counter(a["status"] for a in acts)
        L += [f"<details><summary><code>{mod}</code>: {len(acts)} actions; " + ", ".join(f"{k} {v}" for k, v in sorted(c.items())) + "</summary>", "",
              "| Action | Reached from | Endpoints reached | React match | Status |", "|---|---|---|---|---|"]
        for a in sorted(acts, key=lambda a: a["action"]):
            eff = "<br>".join(f"`{u.rsplit('/', 1)[-1]}`" for u in a["effects"]) or "–"
            nm = f"`{a['nameMatch'][0]}` {link(a['nameMatch'][1])}" if a["nameMatch"] else "–"
            st = f"**{a['status']}**" if a["status"] == "missing" else a["status"]
            L.append(f"| `{a['action']}` | {a['group']}{' (app root)' if a['app'] else ''} | {eff} | {nm} | {st} |")
        L += ["", "</details>", ""]
    # blocks
    L += ["## 6. Rendered screen and blocks", "",
          "| Screen or block | Where | React port (`@origin`) | KB page and rules (DEV) |", "|---|---|---|---|"]
    for b in sorted(r["blocks"], key=lambda b: (b["group"], b["key"])):
        files = "<br>".join(link(x) for x in b["react"])
        react = {"tag": files, "name": f"{files}<br>(block name in the file, no tag)",
                 "elsewhere": f"**not reached**; tag in {files}"}.get(b["evidence"], "**not found**")
        kbp = (f"`{b['kbPage']}`" + (": " + ", ".join(b["rules"]) if b["rules"] else "")) if b["kbPage"] else (
            "in KB (`contracts/ui.json`)" if b["inKb"] else ("not in KB" if b["kbModule"] else "module not in KB"))
        L.append(f"| `{b['key']}` | {b['group']} | {react} | {kbp} |")
    # navigation
    L += ["", "### Navigation targets", "", "| Target | From (TST) | React |", "|---|---|---|"]
    for t in sorted(r["osNav"]):
        rn = "<br>".join(f"`{x.replace('app/src/', '')}`" for x in r["reactNav"].get(t, [])[:3]) or "**not found**"
        L.append(f"| `{t}` | {', '.join('`' + x + '`' for x in r['osNav'][t])} | {rn} |")
    extra = sorted(set(r["reactNav"]) - set(r["osNav"]))
    if extra:
        L += ["", "React targets with no TST navigation in the rendered code: " + ", ".join(f"`{x}`" for x in extra) +
              ". The app shell (bottom bar, menu, guards) has most of them."]
    # missing + unclear
    miss_eps = [e for e in eps if e["status"] == "missing"]
    miss_acts = [a for a in r["actions"] + r["moduleActions"] if a["status"] == "missing"]
    unclear = [a for a in r["actions"] if a["status"] == "unclear"]
    L += ["", "## 7. Missing and unclear", "", "### Missing", ""]
    miss_blocks = [b for b in r["blocks"] if b["evidence"] not in ("tag", "name")]
    if not (miss_eps or miss_acts or miss_blocks or nav_missing):
        L.append("None.")
    for e in miss_eps:
        L.append(f"- Endpoint `{e['short']}` ({e['kind']}, TST runtime: {e['observed']}). Chain: "
                 + md_escape(" → ".join(e["chains"][0]) if e["chains"] else "–") + ".")
        if e.get("elsewhere"):
            L.append("  - React code exists, but this route does not reach it: " + ", ".join(
                f"`{c['fn']}()` {link(c['file'], c['line'])}" for c in e["elsewhere"]) + ".")
        else:
            L.append("  - No React code calls this endpoint.")
        for p, i, line in e.get("notes", []):
            L.append(f"  - Note in {link(p, i)}: \"{md_escape(line)}\"")
    for a in miss_acts:
        owner = file_key(a["file"]) if a.get("file") else a["module"]
        L.append(f"- Client action `{owner}.{a['action']}`: it reaches " + ", ".join(f"`{u.rsplit('/', 1)[-1]}`" for u in a["missingEffects"]) + ", which React does not call on this route.")
    for b in miss_blocks:
        where = f" A tag exists in {', '.join(link(x) for x in b['react'])}, but this route does not reach it." if b["evidence"] == "elsewhere" else " No React file has its tag or its name."
        L.append(f"- Block `{b['key']}` ({b['group']}).{where}")
    for t in nav_missing:
        L.append(f"- Navigation to `{t}` (from {', '.join(r['osNav'][t])}): no React navigation to this route in the page or the app shell.")
    L += ["", "### Unclear (questions)", ""]
    qs = []
    for c in r["reactOnly"]:
        qs.append(f"React calls `{c['apiPath']}` from `{c['fn']}()` ({c['where']}), but TST HomeFeed has no chain to it. "
                  "Is the call right on this route, or does it belong to another route?".replace("HomeFeed", route))
    for a in unclear:
        qs.append(f"`{file_key(a['file'])}.{a['action']}`: no React port of the block was found by `@origin`. Where is it?")
    L += [f"{i}. {q}" for i, q in enumerate(qs, 1)] or ["None."]
    devonly = [a for a in r["actions"] if a["status"] == "dev-only"]
    L += ["", "### DEV and TST differences", ""]
    L += [f"- `{file_key(a['file'])}.{a['action']}` is in the KB (DEV, 2026-10-05) but not in the TST compiled code. "
          "TST wins: not counted." for a in devonly] or ["None found."]
    L += ["", "## 8. Method and legend", "",
          "1. **OutSystems, TST.**",
          "   - Rendered files come from `facts.json` `renderedFiles`.",
          "   - Client actions and endpoints come from `facts.json` (`js`, `callSites`) and from the call graph of "
          f"`analyze_capture.py` over `migration/screens/{route}/analysis/sources/raw/`.",
          "   - Group `shell` holds `CommonUI_InsideLayout`, the blocks inside it, and the chains that start at an "
          "app-level action. Group `screen` holds the screen and its other blocks.",
          "2. **KB, DEV design time.** `contracts/ui.json` (the actions each action calls) and the `ui/*.md` pages "
          "(business rules `BR-*`) of `~/Projects/ubt_sharing_kb/connect/outsystems`.",
          "3. **MCP, DEV.** UI flow, and the server or service actions inside each data action of the UBTConnect "
          "screen and blocks (`getScreen`, `getWebBlock`, read only).",
          "4. **React.** `react_calls.mjs` reads two closures with the TypeScript type checker: the app shell from "
          "`app/src/main.tsx` (router, `AppFrame`, `AppStart`, `RouteGuard`, hosts) and the page from its "
          "`<Route>Page.tsx`. Only declarations that the code uses are counted. Endpoint match: `callAction(M, A)` → "
          "`/api/M/A` → `x-os-paths` of `app/src/api/openapi.yaml` = the TST URL.", "",
          "| Status | Meaning |", "|---|---|",
          "| implemented | A React call reaches the same TST endpoint. |",
          "| missing | TST has it on this route; React has no match. For a client action: it reaches an endpoint that React does not call. |",
          "| matched | A React function with the same name (prefixes `on`, `handle`, `handler`, `event`, `screenEvent` and `_` ignored). |",
          "| matched (effects) | No name match, but React calls every endpoint that the action reaches. |",
          "| in ported block | The block has a React port (`@origin`). The action calls no endpoint, so there is nothing more to compare. |",
          "| no effect | A module action that calls no endpoint and has no name match. It is not compared. |",
          "| platform | OutSystems UI, NavigationHandler, JavaScript utilities and plugins. React has platform code for them; compared by name only. |",
          "| dev-only | In the KB (DEV) but not in the TST compiled code. Not counted. |",
          "| unclear | The tool cannot decide. A question is in section 7. |", "",
          "Limits: static reading only. A client action is \"reached\" when the TST call graph links it; JavaScript "
          "nodes and widget events that the graph does not parse can hide callers. A name match is not proof of the "
          "same behaviour. The parity checks of the migration cover the behaviour."]
    p = os.path.join(OUT, f"{route}.md")
    open(p, "w", encoding="utf-8").write("\n".join(L) + "\n")
    subprocess.run(["node", os.path.join(ROOT, "migration", "tools", "route_actions", "render_svg.cjs"),
                    os.path.join(DATA, f"{route}.mmd"), os.path.join(OUT, "svg", f"{route}.svg")], check=True, cwd=ROOT)
    print("wrote", rel(p))
    return p


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("route", nargs="?")
    ap.add_argument("--routes", action="store_true", help="write ROUTES.md")
    ap.add_argument("--mark-done", action="store_true", help="set the route to done in ROUTES.md")
    a = ap.parse_args()
    os.makedirs(DATA, exist_ok=True)
    if a.routes:
        write_routes()
        return
    if not a.route:
        ap.error("route needed")
    if a.mark_done:
        write_routes(done=a.route)
        return
    r = check(a.route)
    render(r)
    write_routes()


if __name__ == "__main__":
    main()
