#!/usr/bin/env python3
"""Check one route: the OutSystems client actions and server calls against the React app. Writes one md file.

Usage (from the project root):
  python3 route-actions/tools/check_route.py <Route>              # writes routes/<Route>.md and APP_SHELL.md
  python3 route-actions/tools/check_route.py <Route> --mark-done  # sets the route to done in ROUTES.md
  python3 route-actions/tools/check_route.py --routes             # writes ROUTES.md
  python3 route-actions/tools/check_route.py --app-shell          # writes APP_SHELL.md
  python3 route-actions/tools/check_route.py --status             # done, next route, routes without capture

Sources (README.md has the details):
  1. TST, in this repository (TST wins): migration/screens/<S>/analysis/{facts.json,calls.json,sources/raw},
     migration/survey/screens.json, app/src/api/openapi.yaml.
  2. MCP (DEV, read only): the UI flow of each screen (module UBTConnect).
  3. React: route-actions/.cache/data/react-shell.json and react-<Route>.json (react_calls.mjs).
The input paths are in route-actions/config.json.
"""
import argparse, collections, glob, json, os, re, subprocess, sys
from datetime import date

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # route-actions/
ROOT = os.path.dirname(HERE)
CFG = json.load(open(os.path.join(HERE, "config.json"), encoding="utf-8"))


def cfg(*keys):
    """An input path of route-actions/config.json, absolute."""
    v = CFG
    for k in keys:
        v = v[k]
    return os.path.join(ROOT, v)
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mcp_client  # noqa: E402

OUT = os.path.join(HERE, "routes")          # the route files
DATA = os.path.join(cfg("cache"), "data")   # git ignores route-actions/.cache/


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
    for line in open(cfg("tst", "board"), encoding="utf-8"):
        if line.startswith("| ") and "`/UBTConnect" in line:
            c = [x.strip() for x in line.split("|")]
            rows[c[1]] = {"decision": c[6], "status": c[8]}
    return rows


def generated_routes():
    txt = open(cfg("react", "routesGenerated"), encoding="utf-8").read()
    return [json.loads(m.group(0)) for m in re.finditer(r'\{"path": [^\n]*?\}', txt)]


def ui_flows():
    try:
        return {s["Name"]: s["UIFlow"] for s in mcp_client.screen_names("UBTConnect")}
    except Exception as e:  # cached file missing and no token
        print("UI flows: MCP not available:", e)
        return {}


def routes_md_path():
    return os.path.join(HERE, "ROUTES.md")


def read_status():
    st = {}
    p = routes_md_path()
    if os.path.exists(p):
        for m in re.finditer(r"^\| \[?`?(\w+)`?\]?[^|]*\| [^|]*\| (todo|done) \|", open(p, encoding="utf-8").read(), re.M):
            st[m.group(1)] = m.group(2)
    return st


def status():
    """The state of the check: routes done, the next route (order of ROUTES.md), the routes without a TST capture,
    the files of route-actions/ that git has not committed."""
    st = read_status()
    txt = open(routes_md_path(), encoding="utf-8").read().split("## Out of scope")[0]
    order = re.findall(r"^\| \[?`(\w+)`", txt, re.M)
    has = lambda r: os.path.exists(os.path.join(cfg("tst", "screens"), r, "analysis", "facts.json"))
    done = [r for r in order if st.get(r) == "done"]
    todo = [r for r in order if st.get(r) != "done"]
    nxt = next((r for r in todo if has(r)), None)
    print(f"done: {len(done)} of {len(order)}: {', '.join(done) or '-'}")
    print(f"next: {nxt or '-'}")
    print(f"todo with a TST capture: {sum(1 for r in todo if has(r))}")
    nocap = [r for r in todo if not has(r)]
    print(f"todo without a TST capture (the tool stops): {len(nocap)}: {', '.join(nocap) or '-'}")
    git = subprocess.run(["git", "status", "--short", "--", "route-actions"], cwd=ROOT, capture_output=True, text=True).stdout.strip()
    print("uncommitted in route-actions/: " + (git.replace("\n", "; ") if git else "none"))


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
         f"One file per route in `routes/`. Run `python3 route-actions/tools/check_route.py <Route>` (see "
         f"[README](README.md)). Progress: **{n_done} of {len(build)}** build routes done.", "",
         "The app shell (`CommonUI_InsideLayout` and its blocks on TST; the code that `main.tsx` loads in React) is in "
         "[APP_SHELL.md](APP_SHELL.md). The tool merges it from the checked routes.", "",
         f"UI flows: Service Studio MCP `getScreenNames(UBTConnect)`, DEV, read {date.today().isoformat()}. "
         "Routes and scope: `app/src/app/routes.generated.ts` (84 routes) and `migration/board.md`.", "",
         "| Route | UI flow | Status |", "|---|---|---|"]
    for flow in sorted(by_flow):
        for s in sorted(by_flow[flow]):
            status = st.get(s, "todo")
            name = f"[`{s}`](routes/{s}.md)" if os.path.exists(os.path.join(OUT, f"{s}.md")) else f"`{s}`"
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
    base = os.path.join(cfg("tst", "screens"), screen, "analysis")
    if not os.path.exists(os.path.join(base, "facts.json")):
        return None
    facts = load(os.path.join(base, "facts.json"))
    calls = load(os.path.join(base, "calls.json"))["calls"] if os.path.exists(os.path.join(base, "calls.json")) else []
    srcdir = os.path.join(base, "sources", "raw")
    sources = {f: open(os.path.join(srcdir, f), encoding="utf-8", errors="replace").read() for f in os.listdir(srcdir)} \
        if os.path.isdir(srcdir) else {}
    return {"facts": facts, "calls": calls, "sources": sources}


def survey_screen(screen):
    s = load(cfg("tst", "survey"))
    for f, v in s["screens"].items():
        if v["screen"] == screen:
            return f, v, s
    return None, None, s


# ---------------------------------------------------------------------------------------------------------------
# React
# ---------------------------------------------------------------------------------------------------------------
def newest_source(scan):
    """The newest change time of the code that the app shell scan reads: app/src, the tsconfig files and the scanner."""
    newest = max(os.path.getmtime(scan), *(os.path.getmtime(p) for p in glob.glob(os.path.join(cfg("react", "app"), "tsconfig*.json"))))
    for d, _, files in os.walk(cfg("react", "src")):
        for f in files:
            if f.endswith((".ts", ".tsx")):
                newest = max(newest, os.path.getmtime(os.path.join(d, f)))
    return newest


def react_data(route):
    shell_p = os.path.join(DATA, "react-shell.json")
    page_p = os.path.join(DATA, f"react-{route}.json")
    scan = os.path.join(HERE, "tools", "react_calls.mjs")
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
    files = [p for p in glob.glob(os.path.join(cfg("react", "src"), "**", "*"), recursive=True)
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
    d = yaml.safe_load(open(cfg("react", "contract"), encoding="utf-8"))
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
    d = yaml.safe_load(open(cfg("react", "contract"), encoding="utf-8"))
    return {p: (op.get("post") or {}).get("x-os-paths", []) for p, op in d["paths"].items()}


def route_meta(screen):
    txt = open(cfg("react", "routeMeta"), encoding="utf-8").read()
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
    home = re.search(r'export const HOME = "/\w+/(\w+)"', open(cfg("react", "routesGenerated"), encoding="utf-8").read())
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
    shell_set = set(shell_r["files"])
    react_acts = []
    seen_b = set()
    for rr in (page_r, shell_r):
        for bnd in rr.get("bindings", []):
            k = (bnd["file"], bnd["line"])
            if k in seen_b:
                continue
            seen_b.add(k)
            for e in bnd["effects"]:
                if e["kind"] == "call":
                    e["urls"] = cpaths.get(e["detail"]) or []
            react_acts.append({**bnd, "group": "shell" if bnd["file"] in shell_set else "screen"})
    nav_from = collections.defaultdict(set)
    for f in rendered:
        for n in js.get(f, {}).get("navigation", []):
            nav_from[n["to"].rsplit("/", 1)[-1]].add(group_of_file[f])
    result = {"route": route, "screenFile": sfile, "userActions": uacts, "reactActions": react_acts, "flow": flow, "survey": sv, "meta": meta, "endpoints": eps,
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


LINK_BASE = [None]  # the folder of the file that render writes (routes/ or route-actions/)


def link(path, line=None):
    target = os.path.relpath(os.path.join(ROOT, path), LINK_BASE[0] or OUT)
    return f"[`{path.replace('app/src/', '')}{':' + str(line) if line else ''}`]({target}{'#L' + str(line) if line else ''})"




def chain_owner(chain, blocks):
    """(direct caller, part) of a TST chain. The direct caller is the block or module of the action that calls the
    server: the step before `server …`, or the data action step. The part is the part of the chain start: the group
    of its block (`shell` for CommonUI_InsideLayout and its blocks), `shell` for a module-level start."""
    by_short = {b["key"].split(".")[-1]: b for b in blocks}
    steps = [x for x in chain if not x.startswith("server ")]
    last = steps[-1] if steps else (chain[0] if chain else "?")
    m = re.match(r"^(\w+)(?:\.| fetch at start$)", last) or re.match(r"^(?:onClick in|event \w+ of) (\w+)$", last)
    owner = m.group(1) if m else last.split(" ")[0]
    root = chain[0] if chain else ""
    r = re.match(r"^(\w+)(?:\.| fetch at start$)", root) or re.match(r"^(?:\w+ in|event \w+ of) (\w+)$", root)
    rb = r.group(1) if r else ""
    part = by_short[rb]["group"] if rb in by_short else "shell"
    return owner, part


def react_chain(ch):
    """Component → hook → … → function, with a link to the component file. Long chains keep 2 steps, '…' and the
    last step."""
    names = [x["name"] for x in ch]
    names = names if len(names) <= 4 else names[:2] + ["…"] + names[-1:]
    return f"`{' → '.join(names)}`<br>{link(ch[0]['file'])}"


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
    # Empty subgraphs are not written: Mermaid draws them as narrow empty boxes with wrapped titles.
    os_groups = [(grp, title, [o for (g, o) in sorted(owners) if g == grp])
                 for grp, title in (("shell", "App shell"), ("screen", "Screen and its blocks"))]
    if any(os for _, _, os in os_groups):
        L.append('  subgraph OS["OutSystems (TST compiled)"]')
        for grp, title, os_ in os_groups:
            if os_:
                L.append(f'    subgraph OS_{grp}["{title}"]')
                L += [f'      {nid(("o", grp, o), "o")}["{o}"]' for o in os_]
                L.append("    end")
        L.append("  end")
    if r["endpoints"]:
        L.append('  subgraph EP["Server calls (TST)"]')
        for e in r["endpoints"]:
            label = e["short"].rsplit("/", 1)[-1]
            L.append(f'    {nid(("e", e["url"]), "e")}["{label}"]')
        L.append("  end")
    fns = {}
    for e in r["endpoints"]:
        for c in e["react"]:
            fns[(c["where"].split(" ")[0], c["fn"], c["file"])] = c
    re_groups = [(grp, title, [(fn, f) for (w, fn, f) in sorted(fns) if w == grp])
                 for grp, title in (("shell", "App shell"), ("page", "Screen"))]
    if fns:
        L.append('  subgraph RE["React actions"]')
        for grp, title, rs in re_groups:
            if rs:
                L.append(f'    subgraph RE_{grp}["{title}"]')
                L += [f'      {nid(("r", fn, f), "r")}["{fn}()"]' for fn, f in rs]
                L.append("    end")
        L.append("  end")
    comps = {}
    for (w, fn, f), c in fns.items():
        for ch in sorted(c.get("callers", []), key=len)[:2]:
            comps.setdefault((ch[0]["name"], ch[0]["file"]), set()).add((fn, f))
    if comps:
        L.append('  subgraph RC["React components"]')
        L += [f'    {nid(("c", cn, cf), "c")}["{cn}"]' for (cn, cf) in sorted(comps)]
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
UI_KIND = {"onClick": "click", "onDoubleClick": "double click", "onChange": "change", "onBlur": "leave field",
           "onFocus": "focus", "onKeyUp": "key", "onKeyDown": "key", "onKeyPress": "key", "onSubmit": "submit",
           "onScroll": "scroll", "onTap": "tap", "onToggle": "toggle"}
SKIP_ACTIONS = re.compile(r"^(List\w+|String\w*|Text\w*|Integer\w*|LogMessage|Audit|ConfirmAction|Destroy\w*)$")
EXTERNAL_LINK = re.compile(r"(?i)open\w*external\w*link|openinapp|openurl|openbrowser|openinnewtab")


def user_actions(sources, rendered, eps):
    """The actions that a user starts on the route (UI events of rendered blocks, through block events, up to the
    first handler of a business block), with what each handler does, branch by branch, from the TST compiled code:
    server calls, navigation, external links, messages and confirm dialogs. Local client actions are followed 3
    levels deep."""
    import os_call_graph as ac  # a copy of the skill function (tools/os_call_graph.py)
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

    # code of each JavaScript node, by the variable name of its module (`define("A.B$c.D.EJS"` → `A_B_c_D_E`)
    js_nodes = {}
    for src in sources.values():
        for m in re.finditer(r'define\("([^"]+?)JS", \[\], function\s*\(\)\s*\{(.*?)\n\}\);', src, re.S):
            js_nodes[re.sub(r"[.$]", "_", m.group(1))] = m.group(2)

    def effects(key, branch, depth, seen):
        body = bodies.get(key)
        if body is None or key in seen:
            return []
        seen = seen | {key}
        out = []
        marks = []
        for m in re.finditer(r"// Destination: \(PreviousScreen\)", body):
            marks.append((m.start(), "navigate", "previous screen"))
        for m in re.finditer(r"// Destination: (/\S*)", body):
            # a URL with a scheme built in the code (`generateScreenURL(("tel:" + …`): an external link, not the screen
            ext = re.match(r'\s*return[^\n]{0,80}?generateScreenURL\(\(*"([a-z]+):', body[m.end():m.end() + 300])
            if ext:
                marks.append((m.start(), "external", f"{ext.group(1)}: link"))
                continue
            dest = m.group(1).rstrip("/")
            # the screen name; the module root (`/UBTConnect/`) stays a path
            marks.append((m.start(), "navigate", dest.rsplit("/", 1)[-1] if dest.count("/") >= 2 else m.group(1)))
        # the first argument: a text, an expression in parentheses or a variable (an input of the action)
        for m in re.finditer(r'showFeedbackMessage\((\("?[^,]{0,120}?"?\)|"[^"]{0,120}"|[\w.$]{1,120}(?=\s*,))', body):
            txt = m.group(1).strip("()")
            marks.append((m.start(), "message", re.sub(r"vars\.value\.|In(Local)?\b", "", txt)))
        for m in re.finditer(r"// Execute Action: (\w+)(?=\s*\n?\s*(.{0,200}))", body, re.S):
            marks.append((m.start(), "action", (m.group(1), m.group(2))))
        for m in re.finditer(r"// Refresh Query: (\w+)", body):
            marks.append((m.start(), "refresh", m.group(1)))
        # a JavaScript node that gets client actions (`{Name: controller.clientActionProxies.name$Action}`) and calls
        # `$actions.Name` in its code: the action runs
        for m in re.finditer(r"safeExecuteJSNode\((\w+?)JS,", body):
            js = js_nodes.get(m.group(1), "")
            win = body[m.end(): m.end() + 1500]
            win = win[: win.find("safeExecuteJSNode")] if "safeExecuteJSNode" in win else win
            for p in re.finditer(r"(\w+):\s*controller\.clientActionProxies\.(\w+?)\$Action", win):
                if re.search(r"\$actions\." + p.group(1) + r"\b", js):
                    marks.append((m.start(), "action", (p.group(1), f"controller.{p.group(2)}$Action(")))
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
            if re.match(r"(?i)feedbackmessage", name):  # FeedbackMessage_AutoClose and the like (a module action)
                out.append({"branch": br, "kind": "message", "detail": name})
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

    # event bindings in the compiled views: `<event>$Action: function (...) { ... controller.<handler>$Action(` for an
    # event of a child block or widget (the last React.createElement(<child>_mvc_view) before it), and
    # `on<Event>: function (...) { ... controller.<handler>$Action(` for an event of an HTML element of the view
    found = collections.OrderedDict()
    for fname in sorted(rendered):
        src = sources.get(fname, "")
        marks = [(m.start(), m.end(), m.group(1)) for m in re.finditer(r"([\w$]+)\s*:\s*function\s*\([^)]*\)\s*\{", src)]
        for i, (st, en, prop) in enumerate(marks):
            if not (prop.endswith("$Action") or re.match(r"on[A-Z]", prop)):
                continue
            win = src[en: marks[i + 1][0] if i + 1 < len(marks) else en + 1500][:1500]
            c = re.search(r"controller\.(_?\w+?)\$Action\(", win)
            if not c:
                continue
            handler = c.group(1).lstrip("_")
            if prop.endswith("$Action"):
                created = re.findall(r"React\.createElement\((\w+?)_mvc_view", src[:st])
                source = created[-1].split("_")[-1] if created else "?"
                event = f"{prop[:-len('$Action')]} of {source}"
            else:
                event = f"{prop} (HTML element)"
            found.setdefault((fname, handler), []).append(event)
    out = []
    for (f, name), events in found.items():
        eff = effects((f, name), None, 0, set())
        if any(e["kind"] in ("call", "navigate", "external", "message", "confirm") for e in eff):
            out.append({"block": short(f), "file": f, "handler": name, "events": sorted(set(events)), "effects": eff})
    return out


def effect_summary(effects, eps, react=False):
    names, navs = [], []
    for e in effects:
        if e["kind"] == "call":
            if react:
                n = e["detail"].rsplit("/", 1)[-1]
            else:
                c = eps.get(e["detail"])
                n = re.sub(r"^(Action|ServiceAPI|DataAction|ScreenDataSet)", "", (c["short"] if c else e["detail"]).rsplit("/", 1)[-1])
            if n not in names:
                names.append(n)
        if e["kind"] == "navigate" and e["detail"] not in navs:
            navs.append(e["detail"])
    kinds = {e["kind"] for e in effects}
    parts = (["calls " + ", ".join(names)] if names else []) + (["goes to " + ", ".join(navs)] if navs else [])
    parts += (["opens an external link"] if "external" in kinds else []) + (["shows a message"] if "message" in kinds else [])
    parts += (["asks for a confirmation"] if "confirm" in kinds else [])
    parts += [f"calls the prop {e['detail']}()" for e in effects if e["kind"] == "callback"]
    parts += [f"{e['detail']}(): a query fetches again" for e in effects if e["kind"] == "refresh"]
    return "; ".join(parts) or "no effect"


def split_branches(effects):
    """[(branch, effects)]: one entry per branch label of the code; the effects outside any branch go to each entry."""
    always = [e for e in effects if e["branch"] is None]
    branches = []
    for e in effects:
        if e["branch"] is not None and e["branch"] not in branches:
            branches.append(e["branch"])
    if len(branches) <= 1:
        return [(None, effects)]
    return [(br, always + [e for e in effects if e["branch"] == br]) for br in branches]


def action_diagrams(r):
    """OutSystems: one sequence diagram per event binding of the TST views (and per branch of its handler)."""
    eps = {e["url"]: e for e in r.get("allEndpoints") or r["endpoints"]}
    clean = lambda t: re.sub(r"\s+", " ", re.sub(r"[;#]", "", str(t))).strip()[:90]  # one line: Mermaid ends a message at a newline
    out = []
    for a in r.get("userActions") or []:
        if "events" not in a:  # data of an older run: the route runs again later
            continue
        for br, effects in split_branches(a["effects"]):
            kinds = {e["kind"] for e in effects}
            L = ["sequenceDiagram", "  autonumber", "  actor U as User", f"  participant B as {a['block']}"]
            L += (["  participant S as Server (TST calls)"] if "call" in kinds else []) + \
                 (["  participant N as Navigation"] if "navigate" in kinds else []) + \
                 (["  participant X as External link"] if "external" in kinds else [])
            L.append(f"  U->>B: {clean(a['events'][0])} → {a['handler']}" + (f" ({br})" if br else ""))
            for e in effects:
                k, d = e["kind"], e["detail"]
                if k == "navigate":
                    L.append(f"  B->>N: go to {d}")
                elif k == "external":
                    L.append(f"  B->>X: {d}")
                elif k == "message":
                    L.append(f"  Note over B: message {clean(d)}")
                elif k == "confirm":
                    L.append("  Note over B: confirm dialog")
                elif k == "via":
                    L.append(f"  Note over B: via {d}")
                elif d in eps:
                    ep = eps[d]
                    name = re.sub(r"^(Action|ServiceAPI|DataAction|ScreenDataSet)", "", ep["short"].rsplit("/", 1)[-1])
                    ins, outs = ep["io"] or ([], [])
                    L.append(f"  B->>S: {name}({short_list(ins)})")
                    L.append("  S-->>B: " + ((short_list(outs) or "no outputs") if ep["io"] else "outputs not in the contract"))
            out.append({"title": f"{a['block']}: {a['handler']}" + (f" ({br})" if br else ""),
                        "row": [f"`{a['block']}`", "<br>".join(f"`{x}`" for x in a["events"]), f"`{a['handler']}`",
                                f"`{br}`" if br else "–", md_escape(effect_summary(effects, eps))],
                        "mmd": "\n".join(L)})
    return out


def react_action_diagrams(acts, eps_all):
    """React: one sequence diagram per JSX event binding with effects (and per branch of its handler)."""
    by_api = {}
    for e in eps_all:
        for c in e["react"]:
            by_api.setdefault(c["apiPath"], e)
    clean = lambda t: re.sub(r"\s+", " ", re.sub(r"[;#]", "", str(t))).strip()[:90]  # one line: Mermaid ends a message at a newline
    out = []
    for a in acts:
        for br, effects in split_branches(a["effects"]):
            kinds = {e["kind"] for e in effects}
            who = f"{a['element']} · {a['file'].rsplit('/', 1)[-1]}"
            L = ["sequenceDiagram", "  autonumber", "  actor U as User", f"  participant H as {who}"]
            L += (["  participant A as Server (React api)"] if "call" in kinds else []) + \
                 (["  participant N as Navigation"] if "navigate" in kinds else []) + \
                 (["  participant X as External link"] if "external" in kinds else [])
            L.append(f"  U->>H: {a['prop']} → {clean(a['handler'])}" + (f" ({br})" if br else ""))
            for e in effects:
                k, d = e["kind"], e["detail"]
                if k == "navigate":
                    L.append(f"  H->>N: go to {d}")
                elif k == "external":
                    L.append(f"  H->>X: {d}")
                elif k == "message":
                    L.append(f"  Note over H: message {clean(d)}")
                elif k == "confirm":
                    L.append(f"  Note over H: confirm dialog {clean(d)}")
                elif k == "via":
                    L.append(f"  Note over H: via {d}()")
                elif k == "callback":
                    L.append(f"  Note over H: calls the prop {d}()")
                elif k == "refresh":
                    L.append(f"  Note over H: {d}(): a query fetches again")
                elif k == "call":
                    ep = by_api.get(d)
                    ins, outs = (ep or {}).get("io") or ([], [])
                    L.append(f"  H->>A: {d.rsplit('/', 1)[-1]}({short_list(ins)})")
                    L.append("  A-->>H: " + ((short_list(outs) or "no outputs") if ep and ep.get("io") else "outputs"))
            out.append({"title": f"{a['element']}: {a['prop']}" + (f" ({br})" if br else ""),
                        "row": [link(a["file"], a["line"]), f"`<{a['element']}>`", f"`{a['prop']}`",
                                f"`{md_escape(a['handler'])}`", f"`{br}`" if br else "–",
                                md_escape(effect_summary(effects, {}, react=True))],
                        "mmd": "\n".join(L)})
    return out


def slug(text):
    return re.sub(r"[^\w\- ]", "", text.lower()).strip().replace(" ", "-")


def screenshots(route):
    """Markdown lines with the screenshots of the route. First choice: the parity run (TST capture, React build,
    difference). Else the React review images (migration/screens/<R>/review/), else the TST capture images."""
    base = os.path.join(cfg("tst", "screens"), route)
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
    chains = [c for c in e["chains"] if c and chain_owner(c, blocks)[1] == part]  # by the part of the chain start
    return {**e, "chains": chains, "group": part} if chains else None


def call_rows(eps, blocks):
    rows = []
    for e in eps:
        callers = sorted({chain_owner(c, blocks)[0] for c in e["chains"] if c}) or [e.get("owner", "?")]
        rows.append((callers, e))
    rows.sort(key=lambda x: (x[0][0], x[1]["short"]))
    return rows


def short_chain(ch):
    return ch if len(ch) <= 5 else ch[:2] + ["…"] + ch[-2:]


def calls_table(rows, blocks, with_routes=False, base=None):
    L = ["All columns come from the code, without interpretation:", "",
         "- **Direct caller (TST):** the block or module of the action that calls the server (the step before the "
         "server call in the chain).",
         "- **Chain (TST):** the chains of client actions in the TST compiled code, from their start to the call.",
         "  A long chain shows its first 2 steps, …, and its last 2 steps.",
         "- **Seen on TST:** `yes` when TST made the call in the capture.",
         "- **React action:** the React function with the `callAction` of the same call (`file:line`), and the code "
         "that loads it: `shell` (from `main.tsx`), `page` (from the screen), or both.",
         "- **Used by (React references):** the functions and components that reference the React action, up to the "
         "nearest component. A reference is not always a call.",
         "- **Status:** `implemented` when the contract path of the React call gives the same TST URL. It does not "
         "prove the same behaviour.", ""]
    head = "| # | Call (TST) | Kind | Direct caller (TST) | Chain (TST) | Seen on TST | React action | Used by (React references) | Status |"
    if with_routes:
        head += " Routes |"
    L += [head, "|---" * (head.count("|") - 1) + "|"]
    for i, (callers, e) in enumerate(rows, 1):
        frm = "<br>".join(f"`{o}`" for o in callers)
        chains = [md_escape(" → ".join(short_chain(c))) for c in e["chains"][:3]]
        more = len(e["chains"]) - 3
        chain = ("<br>".join(chains) + (f"<br>(+{more} more chains)" if more > 0 else "")) if chains else \
            ("no chain in the TST code; TST made the call in the capture" if e.get("noChain") else "–")
        rc = "<br>".join(f"`{c['fn']}()` {link(c['file'], c['line'])} ({c['where']})" for c in e["react"]) or "–"
        st = f"**{e['status']}**" if e["status"] == "missing" else e["status"]
        seen = {"observed": "yes", "not observed": "no", "not captured": "no capture"}[e["observed"]]
        refs = sorted((ch for c in e["react"] for ch in c.get("callers", [])), key=len)[:2]
        used = "<br>".join(react_chain(ch) for ch in refs) or "–"
        row = f"| {i} | `{e['short']}` | {e['kind']} | {frm} | {chain} | {seen} | {rc} | {used} | {st} |"
        if with_routes:
            row += " " + ", ".join(f"[{x}](routes/{x}.md)" for x in e.get("routes", [])) + " |"
        L.append(row)
    return L


def actions_section(diagrams, name, sec, head):
    """Index table, then one Mermaid diagram per entry. Writes the .mmd files for the syntax check."""
    if not diagrams:
        return ["None found.", ""], []
    L = ["| # | " + " | ".join(head) + " |", "|---" * (len(head) + 1) + "|"]
    titles = []
    for i, d in enumerate(diagrams, 1):
        t = f"{sec}.{i} {d['title']}"
        titles.append(t)
        L.append(f"| [{i}](#{slug(t)}) | " + " | ".join(d["row"]) + " |")
    names = []
    for i, (d, t) in enumerate(zip(diagrams, titles), 1):
        n = f"{name}-{i}"
        names.append(n)
        open(os.path.join(DATA, f"{n}.mmd"), "w").write(d["mmd"])
        L += ["", f"#### {t}", "", "```mermaid", d["mmd"], "```"]
    return L + [""], names


OS_HEAD = ["Block (OutSystems)", "Event (TST view)", "Handler", "Branch", "Effects"]
REACT_HEAD = ["File", "Element", "Event prop", "Handler", "Branch", "Effects"]
ACTIONS_INTRO = [
    "The two lists are independent: the OutSystems list comes from the TST compiled code, the React list from the "
    "React code. The tool does not map one list to the other.", "",
    "- **OutSystems:** each event binding of the compiled views (`<event>$Action: function` of a child block or "
    "widget, `on<Event>: function` of an HTML element) with its handler.",
    "- **React:** each JSX attribute `on<Event>={handler}` with its handler.",
    "- Both lists keep only the bindings whose handler has an effect: a server call, a navigation, an external link, "
    "a message or a confirm dialog. The tool follows the called functions 3 levels deep.",
    "- When the handler has branches in the code (`switch` case, `if` with `===`), each branch has its own diagram. "
    "The branch name is the constant of the condition. `other` is the last `else` or `default`.",
    "- An arrow to the server gives the inputs of the call, the return arrow its outputs (contract "
    "`app/src/api/openapi.yaml`).", ""]


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
        subprocess.run(["node", os.path.join(HERE, "tools", "render_svg.cjs"), *pairs],
                       check=True, cwd=ROOT, stdout=subprocess.DEVNULL)


def clean_outputs(name):
    for stale in glob.glob(os.path.join(DATA, "svg", f"{name}-*.svg")) + glob.glob(os.path.join(DATA, f"{name}-*.mmd")):
        os.remove(stale)


def render(r):
    """The route file: only what belongs to the route. The app shell parts go to APP_SHELL.md."""
    LINK_BASE[0] = OUT
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
    shell_react = [a for a in r.get("reactActions") or [] if a.get("group") == "shell"]
    view = {**r, "endpoints": eps, "allEndpoints": r["endpoints"],
            "userActions": [a for a in r.get("userActions") or [] if a.get("group") != "shell"]}
    mm = mermaid(view)
    open(os.path.join(DATA, f"{route}.mmd"), "w").write(mm)
    clean_outputs(route)
    os_d = action_diagrams(view)
    re_d = react_action_diagrams([a for a in r.get("reactActions") or [] if a.get("group") != "shell"], r["endpoints"])
    ua_os, n1 = actions_section(os_d, f"{route}-os", "5.1", OS_HEAD)
    ua_re, n2 = actions_section(re_d, f"{route}-react", "5.2", REACT_HEAD)
    names = n1 + n2
    ua = [*ACTIONS_INTRO, "### 5.1 OutSystems (TST)", "", *ua_os, "### 5.2 React", "", *ua_re]
    L = [f"# {route}: server calls and user actions in OutSystems and React", "",
         f"This file compares the route `/UBTConnect/{route}` in OutSystems (TST) with the React app.",
         f"The tool `route-actions/tools/check_route.py` wrote this file on {date.today().isoformat()}.",
         "The tool reads the code. It does not run the app.", "",
         "The app shell is in [APP_SHELL.md](../APP_SHELL.md), not here.",
         "- OutSystems app shell: `CommonUI_InsideLayout` with its blocks (TST survey), and the chains that start in a "
         "module action.",
         "- React app shell: the code that `app/src/main.tsx` loads (router, `AppFrame`, app start, hosts).", "",
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
         f"| User actions of the route | OutSystems: {len(os_d)} diagrams. React: {len(re_d)} diagrams |",
         f"| React calls of the screen that TST does not make | {len(questions)} (see [questions](#8-questions)) |",
         f"| Screen and blocks with a React port | {blocks_ported} of {len(own_blocks)} |",
         f"| Navigation targets found in React | {len(own_nav) - len(nav_missing)} of {len(own_nav)} |",
         f"| App shell on this route | {len(shell_eps)} calls; event bindings: OutSystems {len(shell_acts)}, React {len(shell_react)}: see [APP_SHELL.md](../APP_SHELL.md) |",
         "", "## 3. Screenshots", "", *screenshots(route),
         "", "## 4. Diagram", "",
         *(["- A box on the left is the block or module of the action that calls the server (TST code).",
            "- A line connects each call to the React action that makes the same call.",
            "- The right column shows the React components that use each React action.",
            "- A red box is a call that React does not make.", "",
            "```mermaid", mm, "```"] if eps else ["None. The route makes no server call on TST."]), "",
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
          "2. **Route and app shell.** OutSystems: a chain belongs to the app shell when it starts in "
          "`CommonUI_InsideLayout`, one of its blocks, or a module action. React: a binding belongs to the app shell "
          "when its file is in the code that `main.tsx` loads.",
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
    return p  # route file


def render_app_shell():
    """APP_SHELL.md: the app shell parts of every checked route, merged (data/check-*.json)."""
    LINK_BASE[0] = HERE
    eps, blocks, acts, qs, nav, nav_missing, every, racts = {}, {}, {}, {}, {}, set(), {}, {}
    routes = []
    for path in sorted(glob.glob(os.path.join(DATA, "check-*.json"))):
        r = load(path)
        # Only the checked routes (a file in routes/). The cache can keep data of older runs of other routes.
        if not os.path.exists(os.path.join(HERE, "routes", f"{r['route']}.md")):
            continue
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
        for a in r.get("reactActions") or []:
            if a.get("group") == "shell":
                racts.setdefault((a["file"], a["line"]), a)
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
    os_d = action_diagrams(view)
    re_d = react_action_diagrams(list(racts.values()), list(every.values()))
    ua_os, n1 = actions_section(os_d, "APP_SHELL-os", "3.1", OS_HEAD)
    ua_re, n2 = actions_section(re_d, "APP_SHELL-react", "3.2", REACT_HEAD)
    names = n1 + n2
    ua = [*ACTIONS_INTRO, "### 3.1 OutSystems (TST)", "", *ua_os, "### 3.2 React", "", *ua_re]
    cnt = collections.Counter(e["status"] for e in ep_list)
    L = ["# App shell: server calls and user actions in OutSystems and React", "",
         "The app shell is the part of the app that the routes share. The route files leave it out.",
         "- OutSystems: `CommonUI_InsideLayout` with its blocks (TST survey), and the chains that start in a module "
         "action.",
         "- React: the code that `app/src/main.tsx` loads (router, `AppFrame`, app start, hosts).",
         f"The tool `route-actions/tools/check_route.py` merges it from the checked routes on "
         f"{date.today().isoformat()}: " + ", ".join(f"[{x}](routes/{x}.md)" for x in routes) + ".", "",
         "## 1. Result", "",
         "| Check | Result |", "|---|---|",
         f"| App shell server calls on TST | {len(ep_list)}: React makes {cnt['implemented']}, **{cnt['missing']} missing** |",
         f"| App shell event bindings | OutSystems: {len(os_d)} diagrams. React: {len(re_d)} diagrams |",
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
    p = os.path.join(HERE, "APP_SHELL.md")
    open(p, "w", encoding="utf-8").write("\n".join(L) + "\n")
    render_svgs(["APP_SHELL"] + names)
    print("wrote", rel(p))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("route", nargs="?")
    ap.add_argument("--routes", action="store_true", help="write ROUTES.md")
    ap.add_argument("--mark-done", action="store_true", help="set the route to done in ROUTES.md")
    ap.add_argument("--app-shell", action="store_true", help="write APP_SHELL.md from the checked routes")
    ap.add_argument("--status", action="store_true", help="print the state of the check and the next route")
    a = ap.parse_args()
    os.makedirs(DATA, exist_ok=True)
    if a.routes:
        write_routes()
        return
    if a.app_shell:
        render_app_shell()
        return
    if a.status:
        status()
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
