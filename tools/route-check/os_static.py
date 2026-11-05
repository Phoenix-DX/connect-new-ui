"""Static TST facts for a route without a capture (user, 2026-11-05): the compiled code of the screen and of its
static closure (TST survey `migration/survey/screens.json`), read from `migration/runtime-sources/` and from the
`analysis/sources/raw/` folders of the captured routes. No capture, no observed calls, no screenshots.

The facts have the shape of `facts.json` for the keys that `check_route.py` reads: `screenFile`, `renderedFiles`
(here: the static closure), `js` (per file, `js_facts` of the migration skill), `callSites` (chains of the call graph
that pass through the closure)."""
import glob
import importlib.util
import os
import re
from collections import defaultdict

import os_call_graph

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))  # the repository root
SK = os.path.join(ROOT, "tools", "pipeline")
RUNTIME = os.path.join(ROOT, "migration", "runtime-sources")


def _analyze():
    spec = importlib.util.spec_from_file_location("analyze_capture", os.path.join(SK, "analyze_capture.py"))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def source_dirs():
    """Where a compiled file can be: runtime-sources first, then the raw folders of the captured routes."""
    dirs = [RUNTIME] if os.path.isdir(RUNTIME) else []
    dirs += sorted(glob.glob(os.path.join(ROOT, "migration", "screens", "*", "analysis", "sources", "raw")))
    return dirs


def find_sources(names):
    """{name: (dir, src)} for the names found; the missing names in the second value."""
    dirs = source_dirs()
    found, missing = {}, []
    for n in names:
        for d in dirs:
            p = os.path.join(d, n)
            if os.path.exists(p):
                found[n] = (os.path.relpath(d, ROOT), open(p, encoding="utf-8", errors="replace").read())
                break
        else:
            missing.append(n)
    return found, missing


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


def build(screen_entry):
    """The static TST data of a route: {"facts", "calls": [], "sources", "dirs", "missing", "static": True}."""
    an = _analyze()
    screen_file = screen_entry["file"]
    closure = [screen_file] + [f for f in screen_entry.get("closure", []) if f != screen_file]
    modules = sorted({f.split(".")[0] for f in closure} | {"UBTConnect"})
    extra = [f"{m}.controller.js" for m in modules] + [f"{m}.model.js" for m in modules]
    found, missing = find_sources(closure + extra)
    sources = {n: src for n, (_, src) in found.items()}
    dirs = {n: d for n, (d, _) in found.items()}
    rendered = [f for f in closure if f in sources]
    js = {f: an.js_facts(f, sources[f]) for f in rendered}
    nodes, edges, endpoints = os_call_graph.call_graph(sources)
    scope = set(rendered)
    sites = {}
    for full, ids in endpoints.items():
        key = full.split("screenservices/")[-1]
        chains = root_chains(sorted(ids), nodes, edges)
        in_scope = [c for c in chains if any(any(f in n for f in scope) for n in c)]
        if in_scope:
            sites[key] = {"observed": False, "defined": True,
                          "chains": [[nodes.get(n, {"label": n})["label"] for n in c] for c in in_scope],
                          "rootKinds": sorted({nodes.get(c[0], {}).get("kind", "?") for c in in_scope if c}),
                          "rootLabels": [nodes.get(c[0], {"label": c[0]})["label"] for c in in_scope if c]}
    facts = {"screen": screen_entry["screen"], "screenFile": screen_file, "renderedFiles": rendered,
             "otherSourceFiles": sorted(set(sources) - set(rendered)), "js": js, "callSites": sites, "calls": [],
             "static": {"closure": len(closure), "missing": [f for f in closure if f not in sources]}}
    return {"facts": facts, "calls": [], "sources": sources, "dirs": dirs, "static": True,
            "missing": [f for f in closure if f not in sources]}


def refresh(facts, sources, changed):
    """facts.json of a captured route with the js facts and the call sites computed again from `sources`, after the
    files in `changed` were replaced by their live code. The observed flags of the capture stay (by call path)."""
    an = _analyze()
    facts = dict(facts)
    js = dict(facts.get("js", {}))
    for f in changed:
        if f in sources and f.endswith(".mvc.js"):
            js[f] = an.js_facts(f, sources[f])
    facts["js"] = js
    rendered = [f for f in facts.get("renderedFiles", []) if f in sources]
    nodes, edges, endpoints = os_call_graph.call_graph(sources)
    scope = set(rendered)
    old = facts.get("callSites", {})
    sites = {}
    for full, ids in endpoints.items():
        key = full.split("screenservices/")[-1]
        chains = root_chains(sorted(ids), nodes, edges)
        in_scope = [c for c in chains if any(any(f in n for f in scope) for n in c)]
        if in_scope:
            sites[key] = {"observed": bool(old.get(key, {}).get("observed")), "defined": True,
                          "chains": [[nodes.get(n, {"label": n})["label"] for n in c] for c in in_scope],
                          "rootKinds": sorted({nodes.get(c[0], {}).get("kind", "?") for c in in_scope if c}),
                          "rootLabels": [nodes.get(c[0], {"label": c[0]})["label"] for c in in_scope if c]}
    for key, site in old.items():
        if key not in sites and site.get("observed"):
            sites[key] = site  # observed in the capture, no static chain in the live code either
    facts["callSites"] = sites
    facts["live"] = sorted(changed)
    return facts
