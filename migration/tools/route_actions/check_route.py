#!/usr/bin/env python3
"""Check one route: the OutSystems client actions and server calls against the React app. Writes one md file.

Usage (from the project root):
  MCP_TOKEN=<token> python3 migration/tools/route_actions/check_route.py <Route>        # writes the route file
  python3 migration/tools/route_actions/check_route.py <Route> --mark-done              # sets the route to done
  python3 migration/tools/route_actions/check_route.py --routes                         # writes ROUTES.md

Sources (README.md has the details):
  1. TST, in this repository (TST wins): migration/screens/<S>/analysis/{facts.json,calls.json,sources/raw},
     migration/survey/screens.json, app/src/api/openapi.yaml.
  2. MCP (DEV, read only): the UI flow of each screen (module UBTConnect).
  3. React: migration/route-actions/data/react-shell.json and react-<Route>.json (react_calls.mjs).
"""
import argparse, collections, glob, json, os, re, subprocess, sys
from datetime import date

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mcp_client  # noqa: E402

OUT = os.path.join(ROOT, "migration", "route-actions")
DATA = os.path.join(OUT, "data")


PATTERN_MODULES = ("UBTConnectLibrary", "OutSystemsUI_2_23")


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
         "The app shell (layout, app start, bottom bar, PIN lock, shared dialogs) is in [APP_SHELL.md](APP_SHELL.md). "
         "The tool merges it from the checked routes.", "",
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
# TST
# ---------------------------------------------------------------------------------------------------------------
def tst_route(screen):
    base = os.path.join(ROOT, "migration", "screens", screen, "analysis")
    if not os.path.exists(os.path.join(base, "facts.json")):
        return None
    facts = load(os.path.join(base, "facts.json"))
    calls = load(os.path.join(base, "calls.json"))["calls"] if os.path.exists(os.path.join(base, "calls.json")) else []
    srcdir = os.path.join(base, "sources", "raw")
    sources = {f: open(os.path.join(srcdir, f), encoding="utf-8", errors="replace").read() for f in os.listdir(srcdir)} \
        if os.path.isdir(srcdir) else {}
    return {"facts": facts, "calls": calls, "sources": sources}


def survey_screen(screen):
    s = load(os.path.join(ROOT, "migration", "survey", "screens.json"))
    for f, v in s["screens"].items():
        if v["screen"] == screen:
            return f, v, s
    return None, None, s


# ---------------------------------------------------------------------------------------------------------------
# React
# ---------------------------------------------------------------------------------------------------------------
def newest_source(scan):
    """The newest change time of the code that the app shell scan reads: app/src, the tsconfig files and the scanner."""
    newest = max(os.path.getmtime(scan), *(os.path.getmtime(p) for p in glob.glob(os.path.join(ROOT, "app", "tsconfig*.json"))))
    for d, _, files in os.walk(os.path.join(ROOT, "app", "src")):
        for f in files:
            if f.endswith((".ts", ".tsx")):
                newest = max(newest, os.path.getmtime(os.path.join(d, f)))
    return newest


def react_data(route):
    shell_p = os.path.join(DATA, "react-shell.json")
    page_p = os.path.join(DATA, f"react-{route}.json")
    scan = os.path.join(ROOT, "migration", "tools", "route_actions", "react_calls.mjs")
    if not os.path.exists(shell_p) or newest_source(scan) > os.path.getmtime(shell_p):
        print("app shell: code changed since the last scan, or no scan yet; scanning again")
        subprocess.run(["node", scan, "shell"], check=True, cwd=ROOT)
    subprocess.run(["node", scan, "page", route], check=True, cwd=ROOT)
    subprocess.run(["node", scan, "all"], check=True, cwd=ROOT)
    return load(shell_p), load(page_p), load(os.path.join(DATA, "react-all.json"))


def doc_notes(names, prefer=(), limit=3):
    """Notes in the React code that name an OutSystems call or the client action that makes it: lines of the docs
    next to the code (app/src/**/*.md) and comment lines of .ts/.tsx files. Files of the route come first."""
    pats = [re.compile(rf"\b{re.escape(n)}\b", re.I) for n in names if n]
    files = [p for p in glob.glob(os.path.join(ROOT, "app", "src", "**", "*"), recursive=True)
             if p.endswith((".md", ".ts", ".tsx")) and not p.endswith(".d.ts") and ".test." not in p]
    files.sort(key=lambda p: (rel(p) not in prefer, not p.endswith(".md"), p))
    out = []
    for p in files:
        code = not p.endswith(".md")
        for i, line in enumerate(open(p, encoding="utf-8"), 1):
            t = line.strip()
            if code and not t.startswith(("//", "/*", "*")) and "// " not in t:
                continue
            if any(x.search(t) for x in pats):
                out.append((rel(p), i, t[:180]))
                if len(out) >= limit:
                    return out
                break  # one line per file
    return out


def contract_io():
    """{TST call path: (input names, output names)} from the contract app/src/api/openapi.yaml."""
    import yaml
    d = yaml.safe_load(open(os.path.join(ROOT, "app", "src", "api", "openapi.yaml"), encoding="utf-8"))
    schemas = d.get("components", {}).get("schemas", {})

    def names(ref):
        sch = schemas.get((ref or "").rsplit("/", 1)[-1], {})
        return list(sch.get("properties", {}).keys())
    out = {}
    for op in d["paths"].values():
        post = op.get("post") or {}
        inp = (((post.get("requestBody") or {}).get("content") or {}).get("application/json") or {}).get("schema", {}).get("$ref")
        res = ((((post.get("responses") or {}).get("200") or {}).get("content") or {}).get("application/json") or {}).get("schema", {})
        outp = (res.get("properties", {}).get("data") or {}).get("$ref")
        for x in post.get("x-os-paths", []):
            out[x] = (names(inp), names(outp))
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


def handler_core(name):
    n = re.sub(r"(?i)^(on_?click_?|handler_?|handle_?|event_?|on_?|action_?)+", "", name)
    return n.replace("_", "").lower()


def match_react_handler(a, handlers, origin_by_file):
    """The React function that ports an OutSystems user action handler: its leading comment names the handler (3),
    its name is the same without the prefixes on/handle/handler/event/action/onClick (2), its file has the @origin
    tag of the block (1). The highest score wins; at equal score, the function with more effects. None below 2."""
    want = handler_core(a["handler"])
    name = a["handler"].lstrip("_")
    # a short name without "_" (login, upgrade) is too common to trust in a comment
    pat = re.compile(rf"(?i)\b{re.escape(name)}\b") if ("_" in name or len(name) >= 10) else None
    best, best_key = None, (1, 0)
    for h in handlers:
        if h["name"][:1].isupper():  # a component, not a handler
            continue
        core = handler_core(h["name"])
        com = h.get("comment", "")
        hit = bool(pat and pat.search(com))
        if hit and len(core) >= 5:  # the comment names several handlers: this function ports another one
            others = [t for t in re.findall(r"\b[A-Z]\w*_\w+\b", com) if t.lower() != name.lower()]
            if any(core in handler_core(t) for t in others) and core not in want:
                hit = False
        related = a["block"] in origin_by_file.get(h["file"], ()) or \
            a["block"].replace("_", "").lower() in h["file"].replace("_", "").lower()
        if not hit and len(want) < 10 and not related:  # a short name alone is not enough
            continue
        sc = (3 if hit else 0) + (2 if core == want else 0)
        sc += 1 if core != want and ((len(want) >= 6 and want in core) or (len(core) >= 6 and core in want)) else 0
        sc += 1 if related else 0
        key = (sc, len(h["effects"]))
        if sc >= 2 and key > best_key:
            best, best_key = h, key
    return best


SHARED_SHARE = 0.4  # a business block that at least 40% of the captured routes render belongs to the app shell


def shared_block_names():
    """Business blocks that many routes render (layout parts such as the bottom bar). With CommonUI_InsideLayout and
    its blocks, they make the app shell: the route files leave them out, APP_SHELL.md has them."""
    cnt, n = collections.Counter(), 0
    for f in glob.glob(os.path.join(ROOT, "migration", "screens", "*", "analysis", "facts.json")):
        n += 1
        for x in set(load(f)["renderedFiles"]):
            if x.endswith(".mvc.js") and not x.startswith(PATTERN_MODULES + ("OutSystemsUI", "NavigationHandler")):
                cnt[x] += 1
    return {k for k, v in cnt.items() if n and v >= SHARED_SHARE * n}


def check(route):
    flows = ui_flows()
    board = board_rows()
    if board.get(route, {}).get("decision") != "build":
        sys.exit(f"{route}: not a build route")
    sfile, sv, survey = survey_screen(route)
    tst = tst_route(route)
    if tst is None:
        sys.exit(f"{route}: no TST capture (migration/screens/{route}/analysis/facts.json); the pilot covers captured routes")
    facts = tst["facts"]
    shell_r, page_r, all_r = react_data(route)
    cpaths = contract_paths()
    cio = contract_io()
    meta = route_meta(route)
    flow = flows.get(route, "unclear")

    # --- OS: rendered files, groups ------------------------------------------------------------------------------
    rendered = [f for f in facts["renderedFiles"] if f.endswith(".mvc.js")]
    js = facts["js"]
    by_key = {file_key(f): f for f in rendered}
    shell_files = set()
    shared = shared_block_names()
    todo = [f for f in rendered if f in set(survey["shell"]) or f in shared]
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

    # --- endpoints (TST callSites) -------------------------------------------------------------------------------
    observed = {c["path"].split("/UBTConnect/", 1)[-1]: c for c in tst["calls"]}
    observed = {("screenservices/" + k.split("screenservices/", 1)[-1]): v for k, v in observed.items()}
    react_calls = []
    for c in page_r["calls"]:
        sh = [x for x in shell_r["calls"] if c["file"] == x["file"] and c["line"] == x["line"]]
        where = "shell + page" if sh else "page"
        callers = (sh[0]["callers"] if sh else []) + c.get("callers", [])
        react_calls.append({**c, "where": where, "callers": callers})
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
    # calls that TST made in the capture but that have no static chain in the compiled code (the call graph does not
    # read the app start roots, for example): they belong to the route too
    have = {e["url"] for e in eps}
    for full, c in observed.items():
        if full in have or not full.startswith("screenservices/"):
            continue
        short_url = full[len("screenservices/"):]
        parts = short_url.split("/")
        rc = react_by_url.get(full, [])
        eps.append({
            "url": full, "short": short_url, "kind": endpoint_kind(short_url),
            "group": "shell" if len(parts) == 2 else "screen", "observed": "observed", "chains": [], "react": rc,
            "status": "implemented" if rc else "missing", "noChain": True,
            "owner": parts[0] if len(parts) == 2 else parts[-2],
        })
    tst_urls = {e["url"] for e in eps}
    for e in eps:
        e["io"] = cio.get(e["url"])
    all_by_url = collections.defaultdict(list)
    for c in all_r["calls"]:
        for p in cpaths.get(c["apiPath"]) or []:
            all_by_url[p].append(c)
    for e in eps:
        if e["status"] == "missing":
            e["elsewhere"] = all_by_url.get(e["url"], [])
            bare = re.sub(r"^(Action|ServiceAPI|DataAction|ScreenDataSet)", "", e["url"].rsplit("/", 1)[-1])
            callers = {c[-2].split(".")[-1] for c in e["chains"] if len(c) >= 2 and "." in c[-2]}
            e["notes"] = doc_notes([bare, *sorted(callers)], prefer=set(page_r["files"]) | set(shell_r["files"]))
    react_only = []
    for c in react_calls:
        ps = cpaths.get(c["apiPath"]) or []
        if not any(p in tst_urls for p in ps):
            react_only.append({**c, "osPaths": ps})

    # --- React name index ----------------------------------------------------------------------------------------
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
    # --- blocks --------------------------------------------------------------------------------------------------
    blocks = []
    for f in rendered:
        blocks.append({"file": f, "key": file_key(f), "group": group_of_file[f], "module": f.split(".")[0],
                       "react": ports[f][0], "evidence": ports[f][1]})

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
    # the default screen: the shell and the screens go there through the constant HOME (PATHS.home), not a literal
    home = re.search(r'export const HOME = "/\w+/(\w+)"', open(os.path.join(ROOT, "app", "src", "app", "routes.generated.ts"), encoding="utf-8").read())
    if home:
        for f, t in reached_texts.items():
            if not navigates.search(t) or re.search(r"routes(\.css)?\.generated\.ts$", f):
                continue
            for i, line in enumerate(t.splitlines(), 1):
                if re.search(r"\bPATHS\.home\b|\bHOME\b", line) and not line.lstrip().startswith(("import", "//", "*", "/*")):
                    react_nav[home.group(1)].add(f"{f}:{i}")
                    break

    uacts = user_actions(tst.get("sources", {}), set(rendered), eps)
    by_short = {short(f): f for f in rendered}
    origin_by_file = collections.defaultdict(set)
    for rr in (page_r, shell_r):
        for o in rr["origins"]:
            origin_by_file[o["file"]].add(o["origin"].split(".")[-1])
    for a in uacts:
        a["group"] = group_of_file.get(by_short.get(a["block"], ""), "screen")
        handlers = [h for h in page_r.get("handlers", []) + shell_r.get("handlers", [])
                    if not h["file"].startswith("app/src/api/")]
        a["react"] = match_react_handler(a, handlers, origin_by_file)
        for e in (a["react"] or {}).get("effects", []):
            if e["kind"] == "call":
                e["urls"] = cpaths.get(e["detail"]) or []
    nav_from = collections.defaultdict(set)
    for f in rendered:
        for n in js.get(f, {}).get("navigation", []):
            nav_from[n["to"].rsplit("/", 1)[-1]].add(group_of_file[f])
    result = {"route": route, "screenFile": sfile, "userActions": uacts, "flow": flow, "survey": sv, "meta": meta, "endpoints": eps,
              "reactOnly": react_only, "reactUnknown": react_unknown,
              "blocks": blocks, "osNav": {k: sorted(v) for k, v in os_nav.items()},
              "reactNav": {k: sorted(v) for k, v in react_nav.items()}, "observedCount": len(tst["calls"]),
              "navGroups": {k: sorted(v) for k, v in nav_from.items()},
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


def trigger(chain, blocks=()):
    """When the call runs, from the root (first step) of a TST chain."""
    root = chain[0] if chain else ""
    act = root.split(".")[-1].split(" ")[-1]
    rules = [
        (r" fetch at start$", "block load (fetch at start)"),
        (r"(?i)onApplicationReady|OnAppReady", "app start"),
        (r"(?i)connect_SetLoggedContext", "sign-in context (app start)"),
        (r"(?i)\.OnReady$|\.onReady$", "ready"),
        (r"(?i)OnInitialize", "initialize"),
        (r"(?i)OnParametersChanged", "parameters change"),
        (r"(?i)OnRender", "render"),
        (r"(?i)ImageError", "image load error"),
        (r"(?i)onClick|Click", "click"),
        (r"(?i)Submit", "submit"),
    ]
    for pat, label in rules:
        if re.search(pat, root):
            return label
    m = re.match(r"^event (\w+) of (\w+)$", root)
    if m:
        return f"event `{m.group(1)}` of `{m.group(2)}`"
    m = re.match(r"^(\w+)\.(\w+)$", root)
    if m and m.group(1) not in blocks:
        return f"module action `{m.group(2)}` (the TST graph has no caller)"
    return f"client action `{act}`" if act else "–"


def react_chain(ch):
    """Component → hook → … → function, with a link to the component file. Long chains keep 2 steps, '…' and the
    last step."""
    names = [x["name"] for x in ch]
    names = names if len(names) <= 4 else names[:2] + ["…"] + names[-1:]
    return f"`{' → '.join(names)}`<br>{link(ch[0]['file'])}"


def from_owner(chain, owner):
    """The chain from the first step of the owner block to the call; long chains keep 2 steps, '…' and the call."""
    i = next((k for k, st in enumerate(chain) if st.startswith((owner + ".", owner + " "))), 0)
    steps = chain[i:]
    return steps if len(steps) <= 4 else steps[:2] + ["…"] + steps[-1:]


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
    L.append('  subgraph EP["Server calls (TST)"]')
    for e in r["endpoints"]:
        label = e["short"].rsplit("/", 1)[-1]
        L.append(f'    {nid(("e", e["url"]), "e")}["{label}"]')
    L.append("  end")
    fns = {}
    for e in r["endpoints"]:
        for c in e["react"]:
            fns[(c["where"].split(" ")[0], c["fn"], c["file"])] = c
    L.append('  subgraph RE["React actions"]')
    for grp, title in (("shell", "App shell"), ("page", "Screen")):
        L.append(f'    subgraph RE_{grp}["{title}"]')
        for (w, fn, f), c in sorted(fns.items()):
            if w == grp:
                L.append(f'      {nid(("r", fn, f), "r")}["{fn}()"]')
        L.append("    end")
    L.append("  end")
    comps = {}
    for (w, fn, f), c in fns.items():
        for ch in sorted(c.get("callers", []), key=len)[:2]:
            comps.setdefault((ch[0]["name"], ch[0]["file"]), set()).add((fn, f))
    L.append('  subgraph RC["React components"]')
    for (cn, cf) in sorted(comps):
        L.append(f'    {nid(("c", cn, cf), "c")}["{cn}"]')
    L.append("  end")
    for (cn, cf), fs in comps.items():
        for fn, f in sorted(fs):
            L.append(f'  {ids[("r", fn, f)]} --- {ids[("c", cn, cf)]}')
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


PHASES = [("app start", "App start and sign-in context"), ("initialize", "Screen initialize"),
          ("block load", "Screen and block load"), ("ready", "Screen ready"), ("parameters change", "Parameters change"),
          ("render", "Render"), ("module action", "Called by a module action (no caller in the TST graph)"),
          ("image load error", "Image load error"), ("client action", "Callbacks and other client actions"),
          ("", "User actions and events")]


def phase_of(trig):
    for i, (key, _) in enumerate(PHASES[:-1]):
        if key and key in trig:
            return i
    return len(PHASES) - 1


def short_list(xs, n=3):
    return ", ".join(xs[:n]) + (", …" if len(xs) > n else "")


USER_TRIGGER = re.compile(r"^(click|submit|event )")
SKILL_SCRIPTS = os.path.join(ROOT, ".claude", "skills", "outsystems-screen-spec", "scripts")
UI_KIND = {"onClick": "click", "onDoubleClick": "double click", "onChange": "change", "onBlur": "leave field",
           "onFocus": "focus", "onKeyUp": "key", "onKeyDown": "key", "onKeyPress": "key", "onSubmit": "submit",
           "onScroll": "scroll", "onTap": "tap", "onToggle": "toggle"}
SKIP_ACTIONS = re.compile(r"^(List\w+|String\w*|Text\w*|Integer\w*|LogMessage|Audit|ConfirmAction|Destroy\w*)$")
EXTERNAL_LINK = re.compile(r"(?i)open\w*external\w*link|openinapp|openurl|openbrowser")


def user_actions(sources, rendered, eps):
    """The actions that a user starts on the route (UI events of rendered blocks, through block events, up to the
    first handler of a business block), with what each handler does, branch by branch, from the TST compiled code:
    server calls, navigation, external links, messages and confirm dialogs. Local client actions are followed 3
    levels deep."""
    sys.path.insert(0, SKILL_SCRIPTS)
    import analyze_capture as ac
    nodes, edges, endpoints = ac.call_graph(sources)
    callees = collections.defaultdict(set)
    for a, b in edges:
        callees[a].add(b)
    url_of = collections.defaultdict(set)
    for url, ids in endpoints.items():
        for i in ids:
            url_of[i].add(url)
    ep_by_url = {e["url"]: e for e in eps}

    def reach_urls(nid, seen=None):
        seen = seen or set()
        if nid in seen:
            return set()
        seen.add(nid)
        out = set(url_of.get(nid, ()))
        for c in callees.get(nid, ()):
            if not c.startswith("evt:"):
                out |= reach_urls(c, seen)
        return out

    # body of each definition: from its start to the next definition in the same file
    bodies = {}
    for fname, src in sources.items():
        marks = []
        for m in re.finditer(r'Controller\.prototype\.(_?)(\w+?)\$(Action|ServerAction)\s*=\s*function', src):
            marks.append((m.start(), (fname, m.group(2)), bool(m.group(1))))
        for m in re.finditer(r'(\w+)Controller\.default\.(\w+?)\$Action\s*=\s*function', src):
            marks.append((m.start(), (m.group(1), m.group(2)), True))
        for m in re.finditer(r'define\("', src):
            marks.append((m.start(), None, False))
        marks.sort(key=lambda x: x[0])
        for i, (pos, key, real) in enumerate(marks):
            if key is None:
                continue
            body = src[pos: marks[i + 1][0] if i + 1 < len(marks) else len(src)]
            if real:  # the private "_name" holds the logic; the public "name" is only a wrapper
                bodies[key] = body
            else:
                bodies.setdefault(key, body)

    def effects(key, branch, depth, seen):
        body = bodies.get(key)
        if body is None or key in seen:
            return []
        seen = seen | {key}
        out = []
        marks = []
        for m in re.finditer(r"// Destination: (/\S*\w)", body):
            marks.append((m.start(), "navigate", m.group(1).rsplit("/", 1)[-1]))
        for m in re.finditer(r'showFeedbackMessage\((\("?[^,]{0,120}?"?\)|"[^"]{0,120}")', body):
            txt = m.group(1).strip("()")
            marks.append((m.start(), "message", re.sub(r"vars\.value\.|In(Local)?\b", "", txt)))
        for m in re.finditer(r"// Execute Action: (\w+)(?=\s*\n?\s*(.{0,200}))", body, re.S):
            marks.append((m.start(), "action", (m.group(1), m.group(2))))
        for m in re.finditer(r"// Refresh Query: (\w+)", body):
            marks.append((m.start(), "refresh", m.group(1)))
        spans = []  # (label, start, end) of each if block with an equality condition
        for m in re.finditer(r"if\s*\(\((?:[^{]*?)===\s*[\w.]*?\.(\w+)\)+\s*\{", body):
            depth_b, i = 1, m.end()
            while i < len(body) and depth_b:
                depth_b += {"{": 1, "}": -1}.get(body[i], 0)
                i += 1
            spans.append((m.group(1), m.end(), i))

        def branch_at(pos):
            inside = [sp for sp in spans if sp[1] <= pos < sp[2]]
            if inside:
                return max(inside, key=lambda sp: sp[1])[0]
            return "other" if any(sp[2] <= pos for sp in spans) else None

        for pos, kind, val in sorted(marks, key=lambda x: x[0]):
            br = branch or branch_at(pos)
            if kind == "refresh":
                for u in sorted(url_of.get(f"da:{key[0]}:DataAction{val}", set()) | url_of.get(f"da:{key[0]}:{val}", set())):
                    if u in ep_by_url:
                        out.append({"branch": br, "kind": "call", "detail": u})
                continue
            if kind != "action":
                out.append({"branch": br, "kind": kind, "detail": val})
                continue
            name, code = val
            if name == "ConfirmAction":
                out.append({"branch": br, "kind": "confirm", "detail": "confirm dialog"})
                continue
            if SKIP_ACTIONS.match(name):
                continue
            if re.search(r"(?i)exception", name):  # the error handler of the action, not its normal flow
                out.append({"branch": br, "kind": "message", "detail": "error message (on exception)"})
                continue
            if EXTERNAL_LINK.search(name):
                out.append({"branch": br, "kind": "external", "detail": name})
                continue
            loc = re.search(r"controller\.(_?)(\w+?)\$(Action|ServerAction)\(", code)
            mod = re.search(r"(\w+)Controller\.default\.(\w+?)\$Action\(", code)
            if loc and loc.group(3) == "ServerAction":
                srv = f"srv:{key[0]}:{loc.group(2)}"
                for u in sorted(url_of.get(srv, ())):
                    if u in ep_by_url:
                        out.append({"branch": br, "kind": "call", "detail": u})
            elif loc and depth < 3:
                out += effects((key[0], loc.group(2)), br, depth + 1, seen)
            elif mod:
                urls = sorted(u for u in reach_urls(f"mod:{mod.group(1)}:{mod.group(2)}") if u in ep_by_url)
                if urls:
                    out.append({"branch": br, "kind": "via", "detail": f"{mod.group(1)}.{mod.group(2)}"})
                    out += [{"branch": br, "kind": "call", "detail": u} for u in urls]
                elif depth < 3 and (mod.group(1), mod.group(2)) in bodies:
                    sub = effects((mod.group(1), mod.group(2)), br, depth + 1, seen)
                    if sub:
                        out.append({"branch": br, "kind": "via", "detail": f"{mod.group(1)}.{mod.group(2)}"})
                        out += sub
        return out

    # user handlers: from UI events, through block events, to the first action of a business block
    pattern = ("UBTConnectLibrary", "OutSystemsUI", "NavigationHandler")
    found = collections.OrderedDict()
    raised = {b for a, b in edges if b.startswith("evt:")}
    called = {b for a, b in edges}
    # roots: UI events, block events that no code raises, and screen actions that no code calls (a screen action
    # with no caller is bound to a widget event that the call graph does not read)
    user_name = re.compile(r"(?i)click|tap|submit|change|select|search|input|toggle|swipe")
    roots = [n for n in sorted(nodes) if n.startswith("ui:")
             or (n.startswith("evt:") and n not in raised and user_name.search(n.split(":")[2]))]
    roots += [n for n in sorted(nodes) if n.startswith("act:") and n not in called and n.split(":")[1] in rendered
              and not n.split(":")[1].startswith(pattern) and user_name.search(n.split(":", 2)[2])
              and not re.match(r"(?i)(onAfterFetch|screenEvent|on(Initialize|Ready|Render|Destroy|ParametersChanged))", n.split(":", 2)[2])]
    for n in roots:
        fname, ev = n.split(":")[1], n.split(":")[2]
        kind = UI_KIND.get(ev) or ("click" if re.search(r"(?i)click|tap", ev) else
                                   "submit" if re.search(r"(?i)submit", ev) else "event")
        todo, seen = [n], set()
        while todo:
            x = todo.pop()
            if x in seen:
                continue
            seen.add(x)
            if x.startswith("act:"):
                f = x.split(":")[1]
                if f in rendered and not f.startswith(pattern):
                    found.setdefault((f, x.split(":", 2)[2]), kind)
                    todo += [c for c in callees.get(x, ()) if c.startswith("evt:")]  # events it raises to its parent
                    continue
            todo += [c for c in callees.get(x, ()) if c.startswith(("act:", "evt:"))]
    out = []
    for (f, name), kind in found.items():
        eff = effects((f, name), None, 0, set())
        if any(e["kind"] in ("call", "navigate", "external", "message") for e in eff):
            out.append({"block": short(f), "handler": name, "trigger": kind, "effects": eff})
    return out


def norm_items(effects, os_side, prefer=()):
    """The comparable items of a list of effects: calls (TST URL), navigation targets, external link, confirm, message.
    A React call has the TST URLs of its contract path; the URL in `prefer` (the OutSystems items) wins."""
    items = set()
    for e in effects:
        k = e["kind"]
        if k == "call":
            if os_side:
                items.add(("call", e["detail"]))
            else:
                urls = e.get("urls") or [e["detail"]]
                items.add(("call", next((u for u in urls if ("call", u) in prefer), urls[0])))
        elif k == "navigate":
            items.add(("navigate", e["detail"]))
        elif k in ("external", "confirm", "message"):
            items.add((k, ""))
    return items


def item_text(it, eps):
    k, d = it
    if k == "call":
        e = eps.get(d)
        name = re.sub(r"^(Action|ServiceAPI|DataAction|ScreenDataSet)", "", (e["short"] if e else d).rsplit("/", 1)[-1])
        return f"call {name}"
    return {"navigate": f"go to {d}", "external": "external link", "confirm": "confirm dialog", "message": "message"}[k]


def action_diagrams(r):
    """For each user action with an effect (one per branch when the handler has branches): an OutSystems sequence
    diagram (TST code) and a React sequence diagram (the matched React handler), with the differences in red.
    Returns a list of {block, trigger, handler, branch, summary, react, status, mmd, mmdReact}."""
    eps = {e["url"]: e for e in r.get("allEndpoints") or r["endpoints"]}
    by_api = {}
    for e in eps.values():
        for c in e["react"]:
            by_api.setdefault(c["apiPath"], e)
    clean = lambda t: re.sub(r"[;#]", "", str(t))[:90]

    def os_lines(e, miss=frozenset()):
        """OutSystems lines; red when React does not make the call at all, or when the React handler of this action
        does not have the effect (`miss`)."""
        k, d = e["kind"], e["detail"]
        its = norm_items([e], True)
        not_here = bool(its) and its <= miss
        if k == "navigate":
            body = [f"  B->>N: go to {d}"]
        elif k == "external":
            body = [f"  B->>X: {d}"]
        elif k == "message":
            body = [f"  Note over B: message {clean(d)}"]
        elif k == "confirm":
            body = ["  Note over B: confirm dialog"]
        elif k == "via":
            return [f"  Note over B: via {d}"]
        else:
            ep = eps[d]
            name = re.sub(r"^(Action|ServiceAPI|DataAction|ScreenDataSet)", "", ep["short"].rsplit("/", 1)[-1])
            ins, outs = ep["io"] or ([], [])
            body = [f"  B->>S: {name}({short_list(ins)})",
                    "  S-->>B: " + ((short_list(outs) or "no outputs") if ep["io"] else "outputs not in the contract")]
            if ep["status"] == "missing":
                return ["  rect rgba(192, 57, 43, 0.15)"] + body + ["  Note over B,S: React does not make this call", "  end"]
        if not_here:
            target = "S" if k == "call" else ("N" if k == "navigate" else ("X" if k == "external" else "B"))
            return ["  rect rgba(192, 57, 43, 0.15)"] + body + [f"  Note over B,{target}: not in the React handler" if target != "B"
                                                              else "  Note over B: not in the React handler", "  end"]
        return body

    def react_lines(e, extra):
        k, d = e["kind"], e["detail"]
        if k == "navigate":
            body = [f"  H->>N: go to {d}"]
        elif k == "external":
            body = [f"  H->>X: {d}"]
        elif k == "message":
            body = [f"  Note over H: message {clean(d)}"]
        elif k == "confirm":
            body = [f"  Note over H: confirm dialog {clean(d)}"]
        elif k == "via":
            return [f"  Note over H: via {d}()"]
        elif k == "callback":
            return [f"  Note over H: calls the prop {d}() (the parent component decides)"]
        elif k == "refresh":
            return [f"  Note over H: {d}(): a query fetches again (the tool does not follow it)"]
        else:
            ep = next((eps[u] for u in e.get("urls") or [] if u in eps), None) or by_api.get(d)
            ins, outs = (ep or {}).get("io") or ([], [])
            body = [f"  H->>A: {d.rsplit('/', 1)[-1]}({short_list(ins)})",
                    "  A-->>H: " + ((short_list(outs) or "no outputs") if ep and ep.get("io") else "outputs")]
        return (["  rect rgba(192, 57, 43, 0.15)"] + body + ["  Note over H: not in OutSystems", "  end"]) if extra else body

    def summary(effects):
        names, navs = [], []
        for e in effects:
            if e["kind"] == "call":
                c = eps[e["detail"]]
                n = re.sub(r"^(Action|ServiceAPI|DataAction|ScreenDataSet)", "", c["short"].rsplit("/", 1)[-1])
                n = f"**{n} (missing)**" if c["status"] == "missing" else n
                if n not in names:
                    names.append(n)
            if e["kind"] == "navigate" and e["detail"] not in navs:
                navs.append(e["detail"])
        kinds = {e["kind"] for e in effects}
        parts = (["calls " + ", ".join(names)] if names else []) + (["goes to " + ", ".join(navs)] if navs else [])
        parts += (["opens an external link"] if "external" in kinds else []) + (["shows a message"] if "message" in kinds else [])
        parts += (["asks for a confirmation"] if "confirm" in kinds else [])
        return "; ".join(parts) or "no effect"

    out_list = []
    for a in r.get("userActions") or []:
        always = [e for e in a["effects"] if e["branch"] is None]
        branches = []
        for e in a["effects"]:
            if e["branch"] is not None and e["branch"] not in branches:
                branches.append(e["branch"])
        h = a.get("react")
        for br in (branches if len(branches) > 1 else [None]):
            effects = always + [e for e in a["effects"] if e["branch"] is not None and (br is None or e["branch"] == br)]
            kinds = {e["kind"] for e in effects}
            L = ["sequenceDiagram", "  autonumber", "  actor U as User", f"  participant B as {a['block']}"]
            L += (["  participant S as Server (TST calls)"] if "call" in kinds else []) + \
                 (["  participant N as Navigation"] if "navigate" in kinds else []) + \
                 (["  participant X as External link"] if "external" in kinds else [])
            L.append(f"  U->>B: {a['trigger']}: {a['handler']}" + (f" ({br})" if br else ""))
            os_items = norm_items(effects, True)
            if h:
                rb = [e for e in h["effects"] if e["branch"] is None or br is None or (e["branch"] or "").lower() == br.lower()]
                re_items = norm_items(rb, False, os_items)
                either = norm_items([e for e in rb if e.get("either")], False, os_items)
                missing, extra = os_items - re_items, (re_items - os_items) - either
            else:
                missing, extra = os_items, set()
            for e in effects:
                L += os_lines(e, frozenset(missing))
            # React
            if h:
                rk = {e["kind"] for e in rb} | {k for k, _ in missing}
                R = ["sequenceDiagram", "  autonumber", "  actor U as User",
                     f"  participant H as {h['name']}() · {h['file'].rsplit('/', 1)[-1]}"]
                R += (["  participant A as Server (React api)"] if "call" in rk else []) + \
                     (["  participant N as Navigation"] if "navigate" in rk else []) + \
                     (["  participant X as External link"] if "external" in rk else [])
                R.append(f"  U->>H: {a['trigger']}" + (f" ({br})" if br else ""))
                for e in rb:
                    its = norm_items([e], False, os_items)
                    if e.get("either") and not its & os_items:
                        R.append("  Note over H: or (the other function of a conditional call)")
                    R += react_lines(e, bool(its) and its <= extra)
                if missing:
                    R.append("  rect rgba(192, 57, 43, 0.15)")
                    R.append("  Note over H: missing, OutSystems has: " + ", ".join(sorted(item_text(i, eps) for i in missing)))
                    R.append("  end")
                status = "same" if not (missing or extra) else \
                    "differs: " + ", ".join(x for x in (f"{len(missing)} missing" if missing else "",
                                                       f"{len(extra)} not in OutSystems" if extra else "") if x)
                react = {"name": h["name"], "file": h["file"], "line": h["line"]}
            else:
                R = ["sequenceDiagram", "  actor U as User", "  participant H as React",
                     "  rect rgba(192, 57, 43, 0.15)",
                     f"  Note over U,H: no React handler found for {a['handler']}", "  end"]
                status, react = "no React handler found", None
            out_list.append({"block": a["block"], "trigger": a["trigger"], "handler": a["handler"], "branch": br,
                             "group": a.get("group", "screen"), "summary": summary(effects), "react": react,
                             "status": status, "mmd": "\n".join(L), "mmdReact": "\n".join(R)})
    return out_list


def slug(text):
    return re.sub(r"[^\w\- ]", "", text.lower()).strip().replace(" ", "-")


def screenshots(route):
    """Markdown lines with the screenshots of the route. First choice: the parity run (TST capture, React build,
    difference). Else the React review images (migration/screens/<R>/review/), else the TST capture images."""
    base = os.path.join(ROOT, "migration", "screens", route)
    d = os.path.join(base, "parity")
    img = lambda path, alt: f'<img src="{os.path.relpath(path, OUT)}" width="200" alt="{alt}">' if os.path.exists(path) else "–"
    states = sorted(glob.glob(os.path.join(d, "*.json")), key=lambda p: (not p.endswith("default.json"), p))
    if states:
        L = ["The screenshots come from the last parity run (`route.py parity`). The TST capture hides personal text "
             "with dots. The React build shows fictional mock data.", "",
             "| State | TST (expected) | React (build) | Difference |", "|---|---|---|---|"]
        for js in states:
            st = os.path.basename(js)[:-5]
            try:
                meta = load(js)
            except ValueError:
                continue
            px = meta.get("pixel") or {}
            info = (f"`{st}`<br>{meta.get('viewport', '')}, mock `{meta.get('mock', '')}`<br>{(meta.get('at') or '')[:10]}"
                    + (f"<br>pixel difference {px['ratio'] * 100:.1f}%" if "ratio" in px else ""))
            L.append(f"| {info} | " + " | ".join(img(os.path.join(d, f"{st}.{k}.png"), f"{st} {k}")
                                                for k in ("expected", "build", "diff")) + " |")
        return L
    for folder, who, note in (("review", "React", "The React app with fictional mock data (review images)."),
                              ("capture", "TST", "The TST capture.")):
        pngs = sorted(glob.glob(os.path.join(base, folder, "**", "*.png"), recursive=True))
        if pngs:
            L = [f"The route has no parity run. {note}", "", f"| State | {who} |", "|---|---|"]
            for pth in pngs[:6]:
                st = os.path.splitext(os.path.basename(pth))[0]
                L.append(f"| `{st}` | {img(pth, st)} |")
            return L
    return ["No screenshots: the route has no parity run, no review image and no TST capture image."]


def part_of(e, blocks, part):
    """The call as seen from one part ("screen" or "shell"): only the chains that a block of that part owns. None
    when the part does not make the call."""
    if not e["chains"]:
        g = e["group"]
        return dict(e) if g == part else None
    chains = [c for c in e["chains"] if c and chain_owner(c, blocks)[1] == part]
    return {**e, "chains": chains, "group": part} if chains else None


def call_rows(eps, blocks):
    block_names = {b["key"].split(".")[-1] for b in blocks}
    rows = []
    for e in eps:
        owners = sorted({chain_owner(c, blocks) for c in e["chains"] if c}) or [(e.get("owner", "?"), e["group"])]
        trigs = []
        for o in owners:
            ch = next((c for c in e["chains"] if c and chain_owner(c, blocks) == o), None)
            if ch:
                trigs.append(trigger(ch, block_names))
            elif e.get("noChain"):
                trigs.append("app start (seen on TST, no static chain)" if e["group"] == "shell" else "seen on TST, no static chain")
            else:
                trigs.append("–")
        rows.append((owners, trigs, e))
    rows.sort(key=lambda x: (x[0][0][0], x[2]["short"]))
    return rows


def calls_table(rows, blocks, with_routes=False):
    L = ["- **Called from (OutSystems):** the block or the app-level module whose own client action makes the call.",
         "- **Made by (TST):** for each block in \"Called from\", its chain of client actions from the block to the call.",
         "- **Trigger:** when the call runs, from the start of the chain on TST.",
         "- **Seen on TST:** `yes` when TST made the call in the capture. Many calls run only after a click.",
         "- **React action:** the React function that makes the same call, and the part that loads it: `shell`, `page` "
         "or both.",
         "- **React caller:** the nearest React component that uses the React action, and the hooks between them. At "
         "most 2 chains, the shortest first.", ""]
    head = "| # | Call (TST) | Kind | Called from (OutSystems) | Trigger | Made by (TST) | Seen on TST | React action | React caller | Status |"
    if with_routes:
        head += " Routes |"
    L += [head, "|---" * (head.count("|") - 1) + "|"]
    for i, (owners, trigs, e) in enumerate(rows, 1):
        frm = "<br>".join(f"`{o}`" for o, g in owners)
        made = []
        for o in owners:
            ch = next((c for c in e["chains"] if c and chain_owner(c, blocks) == o), None)
            made.append(md_escape(" → ".join(from_owner(ch, o[0]))) if ch else ("no static chain in the TST code" if e.get("noChain") else "–"))
        more = len(e["chains"]) - len(owners)
        chain = "<br>".join(made) + (f"<br>(+{more} more chains)" if more > 0 else "")
        rc = "<br>".join(f"`{c['fn']}()` {link(c['file'], c['line'])} ({c['where']})" for c in e["react"]) or "–"
        st = f"**{e['status']}**" if e["status"] == "missing" else e["status"]
        seen = {"observed": "yes", "not observed": "no", "not captured": "no capture"}[e["observed"]]
        chains = sorted((ch for c in e["react"] for ch in c.get("callers", [])), key=len)[:2]
        caller = "<br>".join(react_chain(ch) for ch in chains) or "–"
        row = f"| {i} | `{e['short']}` | {e['kind']} | {frm} | {'<br>'.join(trigs)} | {chain} | {seen} | {rc} | {caller} | {st} |"
        if with_routes:
            row += " " + ", ".join(f"[{x}]({x}.md)" for x in e.get("routes", [])) + " |"
        L.append(row)
    return L


def actions_section(diagrams, name, sec):
    """Index table and, per user action, the OutSystems and the React sequence diagrams. Writes the .mmd files;
    returns (lines, names to render)."""
    if not diagrams:
        return ["No user action here makes a server call, a navigation, an external link or a message.", ""], []
    L = ["Each user action (click, change, submit) has two sequence diagrams: OutSystems (TST code) and React.", "",
         "- **OutSystems:** the participant is the OutSystems block. The action is its screen action on TST.",
         "- **React:** the participant is the React function that ports the action. The tool finds it by its comment "
         "(the OutSystems name), its name, or the `@origin` tag of its file.",
         "- When the handler has branches (a menu option, for example), each branch has its own diagrams. The name of "
         "a branch comes from its condition. `other` is the last `else` or `default`.",
         "- The effects are server calls, navigation (`Navigation`), external links, messages and confirm dialogs.",
         "- An arrow to the server gives the inputs of the call. The return arrow gives the outputs (contract "
         "`app/src/api/openapi.yaml`).",
         "- **Red in the OutSystems diagram:** an effect that the React handler of the action does not have.",
         "- **Red in the React diagram:** an effect that OutSystems does not have, and a note with the effects that "
         "React does not have.", "",
         "| # | Block (OutSystems) | User action | Handler | Option (branch) | Effects (OutSystems) | React handler | React |",
         "|---|---|---|---|---|---|---|---|"]
    titles = []
    for i, d in enumerate(diagrams, 1):
        t = f"{sec}.{i} {d['block']}: {d['trigger']} {d['handler']}" + (f" ({d['branch']})" if d["branch"] else "")
        titles.append(t)
        rh = f"`{d['react']['name']}()` {link(d['react']['file'], d['react']['line'])}" if d["react"] else "–"
        st = d["status"] if d["status"] == "same" else f"**{d['status']}**"
        L.append(f"| [{i}](#{slug(t)}) | `{d['block']}` | {d['trigger']} | `{d['handler']}` | "
                 f"{('`' + d['branch'] + '`') if d['branch'] else '–'} | {md_escape(d['summary'])} | {rh} | {st} |")
    names = []
    for i, (d, t) in enumerate(zip(diagrams, titles), 1):
        n = f"{name}-action-{i}"
        names += [n, f"{n}-react"]
        open(os.path.join(DATA, f"{n}.mmd"), "w").write(d["mmd"])
        open(os.path.join(DATA, f"{n}-react.mmd"), "w").write(d["mmdReact"])
        rh = f"`{d['react']['name']}()` in {link(d['react']['file'], d['react']['line'])}" if d["react"] else "no React handler found"
        L += ["", f"### {t}", "", f"Result: {d['status']}.", "",
              "**OutSystems (TST)**", "", "```mermaid", d["mmd"], "```", "",
              f"**React**: {rh}", "", "```mermaid", d["mmdReact"], "```"]
    return L + [""], names


def missing_lines(eps, blocks, nav_missing, os_nav):
    L = []
    for e in eps:
        if e["status"] != "missing":
            continue
        L.append(f"- Call `{e['short']}`. Chain on TST: " + md_escape(" → ".join(e["chains"][0]) if e["chains"] else "–") + ".")
        if e.get("elsewhere"):
            L.append("  - React has the function, but this route does not use it: " + ", ".join(
                f"`{c['fn']}()` {link(c['file'], c['line'])}" for c in e["elsewhere"]) + ".")
        else:
            L.append("  - No React code makes this call.")
        for p, i, line in e.get("notes", []):
            L.append(f"  - Note in {link(p, i)}: \"{md_escape(line)}\"")
    for b in blocks:
        if b["evidence"] in ("tag", "name"):
            continue
        where = (f" A React file has its tag ({', '.join(link(x) for x in b['react'])}), but this route does not use it."
                 if b["evidence"] == "elsewhere" else " No React file has its tag or its name.")
        L.append(f"- Block `{b['key']}`.{where}")
    for t in nav_missing:
        L.append(f"- Navigation to `{t}` (from {', '.join(os_nav[t])}). The React screen and the app shell do not go to this route.")
    return L or ["None."]


def render_svgs(names):
    """Syntax check of all the Mermaid diagrams of one file, in one browser (render_svg.cjs). The route files carry
    the Mermaid text (user, 2026-11-04); the SVG files stay in data/svg/, which git ignores."""
    pairs = []
    for n in names:
        pairs += [os.path.join(DATA, f"{n}.mmd"), os.path.join(DATA, "svg", f"{n}.svg")]
    if pairs:
        subprocess.run(["node", os.path.join(ROOT, "migration", "tools", "route_actions", "render_svg.cjs"), *pairs],
                       check=True, cwd=ROOT, stdout=subprocess.DEVNULL)


def clean_outputs(name):
    for stale in glob.glob(os.path.join(DATA, "svg", f"{name}-*.svg")) + glob.glob(os.path.join(DATA, f"{name}-*.mmd")):
        os.remove(stale)


def render(r):
    """The route file: only what belongs to the route. The app shell parts go to APP_SHELL.md."""
    route = r["route"]
    blocks = r["blocks"]
    eps = [x for x in (part_of(e, blocks, "screen") for e in r["endpoints"]) if x]
    shell_eps = [x for x in (part_of(e, blocks, "shell") for e in r["endpoints"]) if x]
    cnt = collections.Counter(e["status"] for e in eps)
    own_blocks = [b for b in blocks if b["group"] == "screen"]
    blocks_ported = sum(1 for b in own_blocks if b["evidence"] in ("tag", "name"))
    own_nav = {t: v for t, v in r["osNav"].items() if "screen" in r.get("navGroups", {}).get(t, ["screen"])}
    nav_missing = [t for t in own_nav if t not in r["reactNav"]]
    questions = [c for c in r["reactOnly"] if "page" in c["where"]]
    shell_questions = [c for c in r["reactOnly"] if c["where"] == "shell"]
    shell_acts = [a for a in r.get("userActions") or [] if a.get("group") == "shell"]
    view = {**r, "endpoints": eps, "allEndpoints": r["endpoints"],
            "userActions": [a for a in r.get("userActions") or [] if a.get("group") != "shell"]}
    mm = mermaid(view)
    open(os.path.join(DATA, f"{route}.mmd"), "w").write(mm)
    clean_outputs(route)
    ua, names = actions_section(action_diagrams(view), route, 5)
    L = [f"# {route}: server calls and user actions in OutSystems and React", "",
         f"This file compares the route `/UBTConnect/{route}` in OutSystems (TST) with the React app.",
         f"The tool `migration/tools/route_actions/check_route.py` wrote this file on {date.today().isoformat()}.",
         "The tool reads the code. It does not run the app.", "",
         "The app shell is the same on many routes: layout, app start, bottom bar, PIN lock and shared dialogs.",
         "[APP_SHELL.md](APP_SHELL.md) has it. This file does not.", "",
         "## 1. Route", "",
         "| Item | Value | Source |", "|---|---|---|",
         f"| Route | `/UBTConnect/{route}` | `app/src/app/routes.generated.ts` |",
         f"| OutSystems screen | `{file_key(r['screenFile'])}` | TST compiled code |",
         f"| UI flow | `{r['flow']}` | MCP `getScreenNames` (DEV) |",
         f"| React screen | {link(r['react']['pageEntry'])} | `app/src/pages/` |",
         f"| React route rules | access `{r['meta']['access']}`, lock `{r['meta']['lock']}`, flag redirect {r['meta']['flagRedirect']} | `app/src/app/routes.ts` |",
         f"| Code read | OutSystems: {len(own_blocks)} screen and block files of the route, {len(blocks) - len(own_blocks)} app shell files. React: {r['react']['pageFiles']} screen files | TST `facts.json`, `react_calls.mjs` |",
         "", "## 2. Result", "",
         "| Check | Result |", "|---|---|",
         f"| Server calls of the route on TST | {len(eps)}: React makes {cnt['implemented']}, **{cnt['missing']} missing** |",
         f"| User actions of the route | {len(names)} diagrams (one per action and option) |",
         f"| React calls of the screen that TST does not make | {len(questions)} (see [questions](#8-questions)) |",
         f"| Screen and blocks with a React port | {blocks_ported} of {len(own_blocks)} |",
         f"| Navigation targets found in React | {len(own_nav) - len(nav_missing)} of {len(own_nav)} |",
         f"| App shell on this route | {len(shell_eps)} calls, {len(shell_acts)} user actions: see [APP_SHELL.md](APP_SHELL.md) |",
         "", "## 3. Screenshots", "", *screenshots(route),
         "", "## 4. Diagram", "",
         "- A box on the left is the OutSystems block of the route that makes the call.",
         "- A line connects each call to the React action that makes the same call.",
         "- The right column shows the React components that use each React action.",
         "- A red box is a call that React does not make.", "",
         "```mermaid", mm, "```", "",
         "## 5. User actions", "", *ua,
         "## 6. Server calls", "", *(calls_table(call_rows(eps, blocks), blocks) if eps else ["None."]),
         "", "## 7. Missing in React", "", *missing_lines(eps, own_blocks, nav_missing, own_nav),
         "", "## 8. Questions", ""]
    qs = [f"React calls `{c['apiPath']}` from `{c['fn']}()` {link(c['file'], c['line'])} ({c['where']}). TST {route} "
          "has no chain to this call. Does the call belong to this route?" for c in questions]
    L += [f"{i}. {q}" for i, q in enumerate(qs, 1)] or ["None."]
    L += ["", "## 9. Method", "",
          "1. **OutSystems (TST).** The tool reads `facts.json` and the compiled code of `migration/screens/" + route +
          "/analysis/`:",
          "   - the rendered files;",
          "   - each server call with its chain of client actions, and the calls that TST made in the capture;",
          "   - the effects of each user action.",
          "2. **Route and app shell.** The app shell has these parts:",
          "   - `CommonUI_InsideLayout` with its blocks, and the app-level actions;",
          f"   - the business blocks that at least {int(SHARED_SHARE * 100)}% of the captured routes render, for "
          "example the bottom bar.",
          "   This file shows only the other blocks.",
          "3. **MCP (DEV).** The tool reads the UI flow with `getScreenNames`. TST wins when DEV is different.",
          "4. **React.** `react_calls.mjs` reads the app shell from `app/src/main.tsx` and the screen from its "
          "`<Route>Page.tsx`. It counts only the code that the app uses.",
          "5. **Match.** `callAction(M, A)` gives `/api/M/A`. The `x-os-paths` of `app/src/api/openapi.yaml` give the "
          "TST call. The status is `implemented` when the TST call is the same. Else the status is `missing`.", "",
          "Limit: a name or a call match does not prove the same behaviour. The parity checks of the migration "
          "compare the behaviour."]
    p = os.path.join(OUT, f"{route}.md")
    open(p, "w", encoding="utf-8").write("\n".join(L) + "\n")
    render_svgs([route] + names)
    print("wrote", rel(p))
    return p


def render_app_shell():
    """APP_SHELL.md: the app shell parts of every checked route, merged (data/check-*.json)."""
    eps, blocks, acts, qs, nav, nav_missing, every = {}, {}, {}, {}, {}, set(), {}
    routes = []
    for path in sorted(glob.glob(os.path.join(DATA, "check-*.json"))):
        r = load(path)
        routes.append(r["route"])
        for b in r["blocks"]:
            if b["group"] == "shell":
                blocks.setdefault(b["key"], b)
        for e in r["endpoints"]:
            every.setdefault(e["url"], e)
            x = part_of(e, r["blocks"], "shell")
            if not x:
                continue
            m = eps.setdefault(x["url"], {**x, "chains": [], "routes": []})
            m["routes"].append(r["route"])
            m["chains"] += [c for c in x["chains"] if c not in m["chains"]]
            if x["observed"] == "observed":
                m["observed"] = "observed"
        for a in r.get("userActions") or []:
            if a.get("group") == "shell":
                acts.setdefault((a["block"], a["handler"]), a)
        for c in r["reactOnly"]:
            if c["where"] == "shell":
                qs.setdefault(c["apiPath"], {**c, "routes": []})["routes"].append(r["route"])
        for t, g in (r.get("navGroups") or {}).items():
            if g == ["shell"]:
                nav.setdefault(t, r["osNav"].get(t, []))
                if t not in r["reactNav"]:
                    nav_missing.add(t)
    if not routes:
        return
    blist = list(blocks.values())
    ep_list = list(eps.values())
    view = {"endpoints": ep_list, "allEndpoints": list(every.values()), "blocks": blist, "userActions": list(acts.values())}
    mm = mermaid(view)
    open(os.path.join(DATA, "APP_SHELL.mmd"), "w").write(mm)
    clean_outputs("APP_SHELL")
    ua, names = actions_section(action_diagrams(view), "APP_SHELL", 3)
    cnt = collections.Counter(e["status"] for e in ep_list)
    L = ["# App shell: server calls and user actions in OutSystems and React", "",
         "The app shell is the part of the app that many routes share.",
         "It has the layout `CommonUI_InsideLayout` and its blocks, the app start, the bottom bar, the PIN lock and the "
         "shared dialogs. The route files leave it out.",
         f"The tool `migration/tools/route_actions/check_route.py` merges it from the checked routes on "
         f"{date.today().isoformat()}: " + ", ".join(f"[{x}]({x}.md)" for x in routes) + ".", "",
         "## 1. Result", "",
         "| Check | Result |", "|---|---|",
         f"| App shell server calls on TST | {len(ep_list)}: React makes {cnt['implemented']}, **{cnt['missing']} missing** |",
         f"| App shell user actions | {len(names)} diagrams (one per action and option) |",
         f"| React app shell calls that TST does not make on a route | {len(qs)} |", "",
         "## 2. Diagram", "",
         "```mermaid", mm, "```", "",
         "## 3. User actions", "", *ua,
         "## 4. Server calls", "",
         "The column **Routes** gives the checked routes where the app shell makes the call.", "",
         *(calls_table(call_rows(ep_list, blist), blist, with_routes=True) if ep_list else ["None."]),
         "", "## 5. Missing in React", "",
         *missing_lines(ep_list, blist, sorted(nav_missing), nav),
         "", "## 6. Questions", ""]
    ql = [f"React calls `{c['apiPath']}` from `{c['fn']}()` {link(c['file'], c['line'])} in the app shell. TST has no "
          f"chain to this call on {', '.join(c['routes'])}. Does the app shell make this call on these routes?"
          for c in qs.values()]
    L += [f"{i}. {q}" for i, q in enumerate(ql, 1)] or ["None."]
    p = os.path.join(OUT, "APP_SHELL.md")
    open(p, "w", encoding="utf-8").write("\n".join(L) + "\n")
    render_svgs(["APP_SHELL"] + names)
    print("wrote", rel(p))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("route", nargs="?")
    ap.add_argument("--routes", action="store_true", help="write ROUTES.md")
    ap.add_argument("--mark-done", action="store_true", help="set the route to done in ROUTES.md")
    ap.add_argument("--app-shell", action="store_true", help="write APP_SHELL.md from the checked routes")
    a = ap.parse_args()
    os.makedirs(DATA, exist_ok=True)
    if a.routes:
        write_routes()
        return
    if a.app_shell:
        render_app_shell()
        return
    if not a.route:
        ap.error("route needed")
    if a.mark_done:
        write_routes(done=a.route)
        return
    r = check(a.route)
    render(r)
    render_app_shell()
    write_routes()


if __name__ == "__main__":
    main()
