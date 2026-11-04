#!/usr/bin/env python3
"""Check one route: the OutSystems client actions and server calls against the React app. Writes one md file.

Usage (from the project root):
  MCP_TOKEN=<token> python3 migration/tools/route_actions/check_route.py <Route>        # writes the route file
  python3 migration/tools/route_actions/check_route.py <Route> --mark-done              # sets the route to done
  python3 migration/tools/route_actions/check_route.py --routes                         # writes ROUTES.md

Sources (README.md has the details):
  1. TST, in this repository (TST wins): migration/screens/<S>/analysis/{facts.json,calls.json,sources/raw},
     migration/survey/screens.json, app/src/api/openapi.yaml.
  2. MCP (DEV, read only): the UI flow of each screen, and what each server call does inside (data actions, server
     actions, service actions). The tool reads only the modules that are open in Service Studio. It lists the other
     modules in the route file; the user opens them, then the tool runs again. The tool does not guess their content.
  3. React: migration/route-actions/data/react-shell.json and react-<Route>.json (react_calls.mjs).
"""
import argparse, collections, glob, json, os, re, subprocess, sys
from datetime import date

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mcp_client  # noqa: E402

OUT = os.path.join(ROOT, "migration", "route-actions")
DATA = os.path.join(OUT, "data")


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
        for m in re.finditer(r"^\| \[?`?(\w+)`?\]?[^|]*\| [^|]*\| (todo|done|waiting for MCP) \|", open(p, encoding="utf-8").read(), re.M):
            st[m.group(1)] = m.group(2)
    return st


def write_routes(done=None, waiting=None, reset=None):
    st = read_status()
    if reset and st.get(reset) == "waiting for MCP":
        st[reset] = "todo"
    if done:
        st[done] = "done"
    if waiting:
        st[waiting] = "waiting for MCP"
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
         "Status `waiting for MCP`: the route file lists the modules to open in Service Studio. Open them, then run "
         "the tool again.", "",
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
# MCP (DEV): what each server call does inside
# ---------------------------------------------------------------------------------------------------------------
def _named_actions(code, module):
    """Server and service actions that Model API code names, as 'Module.Action (server|service)'."""
    refs = dict(re.findall(r"var (\w+) = eSpace\.References\.Named\(\"(\w+)\"\)", code))
    named = {}
    for v, holder, coll, n in re.findall(r"var (\w+) = (\w+)\.(ServiceActions|ServerActions)\.Named\(\"(\w+)\"\)", code):
        named[v] = (module if holder == "eSpace" else refs.get(holder, holder), n,
                    "service" if coll == "ServiceActions" else "server")
    return named


def mcp_element(kind, module, name):
    """{dataActionName: ['Module.Action (kind)']} for a screen or block. Raises mcp_client.NotOpen."""
    code = mcp_client.element_code(kind, module, name)
    owners = {v: n for v, n in re.findall(r"var (\w+) = \w+\.Create(?:DataAction|Aggregate)\(\"(\w+)\"\)", code)}
    named = _named_actions(code, module)
    nodes = re.findall(r"var (\w+) = (\w+)\.CreateNode<OutSystems\.Model\.Logic\.Nodes\.IExecuteServerActionNode>\(\"\w+\"\)", code)
    assign = dict(re.findall(r"(\w+)\.Action = (\w+);", code))
    out = collections.defaultdict(list)
    for nv, owner in nodes:
        if owner in owners and assign.get(nv) in named:
            mod, n, k = named[assign[nv]]
            item = f"{mod}.{n} ({k})"
            if mod != "_System_" and item not in out[owners[owner]]:
                out[owners[owner]].append(item)
    for n in owners.values():
        out.setdefault(n, [])
    return dict(out)


def mcp_action(kind, module, name):
    """What a server action calls, or the producer module of a referenced action. Raises mcp_client.NotOpen."""
    code = mcp_client.element_code(kind, module, name)
    m = re.search(r"I(Service|Server)ActionSignature (\w+)/(\w+)", code)
    if m:  # a reference: the action lives in its producer module
        return [f"{m.group(2)}.{m.group(3)} ({m.group(1).lower()}, producer module)"]
    out = []
    for mod, n, k in _named_actions(code, module).values():
        if mod != "_System_" and f"{mod}.{n} ({k})" not in out:
            out.append(f"{mod}.{n} ({k})")
    ents = sorted(set(re.findall(r"Entities\.OfType<OutSystems\.Model\.Data\.I(?:Static)?Entity>\(\)\.Named\(\"(\w+)\"\)", code)))
    if ents and "IAggregateNode" in code:
        out.append("aggregates on " + ", ".join(ents))
    return out


def inside(url, screen):
    """(text, module to open or None) for one server call URL: screenservices/<Module>/.../<Prefix><Name>."""
    parts = url.split("/")[1:]
    module, last = parts[0], parts[-1]
    owner = parts[-2] if len(parts) > 2 else None
    m = re.match(r"^(DataAction|ScreenDataSet|ServiceAPI|Action)(\w+)$", last)
    if not m:
        return "not read: unknown call kind", None
    prefix, name = m.groups()
    try:
        if prefix in ("DataAction", "ScreenDataSet"):
            got = mcp_element("screen" if owner == screen else "block", module, owner).get(name)
            if got is None:
                return "not found in MCP (DEV)", None
            return (", ".join(f"`{x}`" for x in got) or ("aggregate (entities only)" if prefix == "ScreenDataSet" else "no server action")), None
        kind = "service" if prefix == "ServiceAPI" else "server"
        got = mcp_action(kind, module, name)
        return (", ".join(f"`{x}`" for x in got) or "no server or service action"), None
    except mcp_client.NotOpen:
        return f"waiting: open module `{module}`", module
    except mcp_client.McpError as e:
        return f"not found in MCP (DEV): {str(e)[:80]}", None


# ---------------------------------------------------------------------------------------------------------------
# TST
# ---------------------------------------------------------------------------------------------------------------
def tst_route(screen):
    base = os.path.join(ROOT, "migration", "screens", screen, "analysis")
    if not os.path.exists(os.path.join(base, "facts.json")):
        return None
    facts = load(os.path.join(base, "facts.json"))
    calls = load(os.path.join(base, "calls.json"))["calls"] if os.path.exists(os.path.join(base, "calls.json")) else []
    return {"facts": facts, "calls": calls}


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
    facts = tst["facts"]
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

    # --- inside each server call (MCP, DEV; only open modules) -----------------------------------------------------
    closed = collections.defaultdict(list)
    for e in eps:
        e["inside"], mod = inside(e["url"], route)
        if mod:
            closed[mod].append(e["short"])

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

    result = {"route": route, "screenFile": sfile, "flow": flow, "survey": sv, "meta": meta, "endpoints": eps,
              "reactOnly": react_only, "reactUnknown": react_unknown, "closed": dict(closed),
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


def render(r):
    route = r["route"]
    eps = r["endpoints"]
    cnt = collections.Counter(e["status"] for e in eps)
    blocks_ported = sum(1 for b in r["blocks"] if b["evidence"] in ("tag", "name"))
    nav_missing = [t for t in r["osNav"] if t not in r["reactNav"]]
    closed = r["closed"]
    mm = mermaid(r)
    os.makedirs(os.path.join(OUT, "svg"), exist_ok=True)
    open(os.path.join(DATA, f"{route}.mmd"), "w").write(mm)
    L = [f"# {route}: server calls in OutSystems and React", "",
         f"This file compares the server calls of the route `/UBTConnect/{route}` in OutSystems (TST) with the calls "
         "of the React app.",
         f"The tool `migration/tools/route_actions/check_route.py` wrote this file on {date.today().isoformat()}.",
         "The tool reads the code. It does not run the app.", "",
         "## 1. Route", "",
         "| Item | Value | Source |", "|---|---|---|",
         f"| Route | `/UBTConnect/{route}` | `app/src/app/routes.generated.ts` |",
         f"| OutSystems screen | `{file_key(r['screenFile'])}` | TST compiled code |",
         f"| UI flow | `{r['flow']}` | MCP `getScreenNames` (DEV) |",
         f"| React screen | {link(r['react']['pageEntry'])} | `app/src/pages/` |",
         f"| React route rules | access `{r['meta']['access']}`, lock `{r['meta']['lock']}`, flag redirect {r['meta']['flagRedirect']} | `app/src/app/routes.ts` |",
         f"| Code read | OutSystems: {len(r['blocks'])} screen and block files. React: {r['react']['shellFiles']} app shell files and {r['react']['pageFiles']} screen files | TST `facts.json`, `react_calls.mjs` |",
         "", "## 2. Result", "",
         "| Check | Result |", "|---|---|",
         f"| Server calls on TST | {len(eps)}: React makes {cnt['implemented']}, **{cnt['missing']} missing** |",
         f"| React calls that TST does not make on this route | {len(r['reactOnly'])} (see [questions](#6-questions)) |",
         f"| Screen and blocks with a React port | {blocks_ported} of {len(r['blocks'])} |",
         f"| Navigation targets found in React | {len(r['osNav']) - len(nav_missing)} of {len(r['osNav'])} |",
         f"| Modules that MCP did not read | {len(closed)}" + (": " + ", ".join(f"`{m}`" for m in sorted(closed)) if closed else "") + " |",
         "", "## 3. Diagram", "",
         "- A box on the left is the OutSystems block or app action that makes the call.",
         "- A line connects each call to the React action that makes the same call.",
         "- The right column shows the React components that use each React action.",
         "- A red box is a call that React does not make.", "",
         f"![{route} diagram](svg/{route}.svg)", "", "<details><summary>Mermaid source</summary>", "",
         "```mermaid", mm, "```", "", "</details>", "",
         "## 4. Server calls", "",
         "- **Called from (OutSystems):** the block or the app-level module whose own client action makes the call. "
         "`app shell` = the layout and the app start; `screen` = the screen and its blocks.",
         "- **Made by (TST):** for each block in \"Called from\", its chain of client actions from the block to the call.",
         "- **Trigger:** when the call runs, from the start of the chain on TST.",
         "- **Seen on TST:** `yes` when TST made the call in the capture. Many calls run only after a click.",
         "- **React action:** the React function that makes the same call, and the part that loads it: `shell`, `page` "
         "or both.",
         "- **React caller:** the nearest React component that uses the React action, and the hooks between them. At "
         "most 2 chains, the shortest first.", "",
         "| # | Call (TST) | Kind | Called from (OutSystems) | Trigger | Made by (TST) | Seen on TST | React action | React caller | Status |",
         "|---|---|---|---|---|---|---|---|---|---|"]
    rows = []
    for e in eps:
        owners = sorted({chain_owner(c, r["blocks"]) for c in e["chains"] if c}) or [("?", e["group"])]
        rows.append((owners, e))
    rows.sort(key=lambda x: (x[0][0][1] != "shell", x[0][0][0], x[1]["short"]))
    for i, (owners, e) in enumerate(rows, 1):
        e["n"] = i
        frm = "<br>".join(f"`{o}` ({'app shell' if g == 'shell' else 'screen'})" for o, g in owners)
        made, trig = [], []
        for o in owners:
            ch = next((c for c in e["chains"] if c and chain_owner(c, r["blocks"]) == o), None)
            made.append(md_escape(" → ".join(from_owner(ch, o[0]))) if ch else "–")
            trig.append(trigger(ch, {b["key"].split(".")[-1] for b in r["blocks"]}) if ch else "–")
        more = len(e["chains"]) - len(owners)
        chain = "<br>".join(made) + (f"<br>(+{more} more chains)" if more > 0 else "")
        rc = "<br>".join(f"`{c['fn']}()` {link(c['file'], c['line'])} ({c['where']})" for c in e["react"]) or "–"
        st = f"**{e['status']}**" if e["status"] == "missing" else e["status"]
        seen = {"observed": "yes", "not observed": "no", "not captured": "no capture"}[e["observed"]]
        chains = sorted((ch for c in e["react"] for ch in c.get("callers", [])), key=len)[:2]
        caller = "<br>".join(react_chain(ch) for ch in chains) or "–"
        L.append(f"| {i} | `{e['short']}` | {e['kind']} | {frm} | {'<br>'.join(trig)} | {chain} | {seen} | {rc} | {caller} | {st} |")
    L += ["", "### What each call does on the server (MCP, DEV)", "",
          "| # | Call | Inside the call |", "|---|---|---|"]
    for _, e in rows:
        L.append(f"| {e['n']} | `{e['short'].rsplit('/', 1)[-1]}` | {e['inside']} |")
    L += ["", "## 5. Missing in React", ""]
    miss_eps = [e for e in eps if e["status"] == "missing"]
    miss_blocks = [b for b in r["blocks"] if b["evidence"] not in ("tag", "name")]
    if not (miss_eps or miss_blocks or nav_missing):
        L.append("None.")
    for e in miss_eps:
        L.append(f"- Call `{e['short']}`. Chain on TST: " + md_escape(" → ".join(e["chains"][0]) if e["chains"] else "–") + ".")
        if e.get("elsewhere"):
            L.append("  - React has the function, but this route does not use it: " + ", ".join(
                f"`{c['fn']}()` {link(c['file'], c['line'])}" for c in e["elsewhere"]) + ".")
        else:
            L.append("  - No React code makes this call.")
        for p, i, line in e.get("notes", []):
            L.append(f"  - Note in {link(p, i)}: \"{md_escape(line)}\"")
    for b in miss_blocks:
        where = (f" A React file has its tag ({', '.join(link(x) for x in b['react'])}), but this route does not use it."
                 if b["evidence"] == "elsewhere" else " No React file has its tag or its name.")
        L.append(f"- Block `{b['key']}`.{where}")
    for t in nav_missing:
        L.append(f"- Navigation to `{t}` (from {', '.join(r['osNav'][t])}). The React screen and the app shell do not go to this route.")
    L += ["", "## 6. Questions", ""]
    qs = [f"React calls `{c['apiPath']}` from `{c['fn']}()` {link(c['file'], c['line'])} ({c['where']}). TST {route} "
          "has no chain to this call. Does the call belong to this route?" for c in r["reactOnly"]]
    L += [f"{i}. {q}" for i, q in enumerate(qs, 1)] or ["None."]
    L += ["", "## 7. Modules to open in Service Studio", ""]
    if closed:
        L += ["MCP reads only the modules that are open in Service Studio. The tool does not guess the content of the "
              "other modules.", "",
              "1. Open each module below in Service Studio.",
              "2. Run the tool again. The column \"Inside the call\" then shows the result.", "",
              "| Module | Calls that wait |", "|---|---|"]
        for m in sorted(closed):
            L.append(f"| `{m}` | " + "<br>".join(f"`{x}`" for x in closed[m]) + " |")
    else:
        L.append("None. MCP read all the modules of this route.")
    L += ["", "## 8. Method", "",
          "1. **OutSystems (TST).** The tool reads `facts.json` of `migration/screens/" + route + "/analysis/`:",
          "   - the screen and block files that TST renders;",
          "   - each server call, and the chain of client actions that makes the call;",
          "   - the calls that TST made in the capture (`calls.json`).",
          "2. **Part.** `app shell` is `CommonUI_InsideLayout`, its blocks and the app-level actions. `screen` is the "
          "screen and its other blocks.",
          "3. **MCP (DEV).** The tool reads the UI flow and the inside of each call with `getScreen`, `getWebBlock`, "
          "`getServerAction` and `getServiceAction`. TST wins when DEV is different.",
          "4. **React.** `react_calls.mjs` reads the app shell from `app/src/main.tsx` and the screen from its "
          "`<Route>Page.tsx`. It counts only the code that the app uses.",
          "5. **Match.** `callAction(M, A)` gives `/api/M/A`. The `x-os-paths` of `app/src/api/openapi.yaml` give the "
          "TST call. The status is `implemented` when the TST call is the same. Else the status is `missing`.", "",
          "Limit: a name or a call match does not prove the same behaviour. The parity checks of the migration "
          "compare the behaviour."]
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
    write_routes(waiting=a.route if r["closed"] else None, reset=not r["closed"] and a.route)
    if r["closed"]:
        print("open these modules in Service Studio, then run again:", ", ".join(sorted(r["closed"])))


if __name__ == "__main__":
    main()
