"""DEV navigation graph from the MCP serialization (espace.json from unwrap.py), dead code removed.
Usage: python3 migration/tools/mcp/graph.py <espace.json> <out graph.json>
Used on 2026-10-13 to cross-check the TST survey: 806 edges on both sides, same 14 unreachable screens."""
import json, re, collections, sys
es = json.load(open(sys.argv[1]))
owners = {}   # name -> {kind, flow, dests, blocks, actions, urlrefs}
def live_nodes(action):
    """Nodes reachable from the start/exception-handler nodes of an action flow (orphans dropped)."""
    ns = action.get("Nodes", [])
    by = {}
    for n in ns:
        if n.get("Name"): by[n["Name"]] = n
        by[f"{n.get('X')},{n.get('Y')}"] = n
    todo = [n for n in ns if n.get("Object") in ("IStartNode",) or "ExceptionHandler" in n.get("Object", "")]
    seen = set()
    while todo:
        n = todo.pop()
        if id(n) in seen: continue
        seen.add(id(n))
        refs = [n.get(k) for k in ("Target", "TrueTarget", "FalseTarget", "OtherwiseTarget", "CycleTarget")]
        refs += [c.get("Target") for c in n.get("Conditions", []) if isinstance(c, dict)]
        for r in refs:
            if r in by: todo.append(by[r])
    return [n for n in ns if id(n) in seen]
def collect(o, acc):
    if isinstance(o, dict):
        if o.get("Object") == "IIfWidget":
            cond = (o.get("Condition") or "").strip()
            o = {k: v for k, v in o.items() if not ((cond == "True" and k == "FalseBranch") or (cond == "False" and k == "TrueBranch"))}
        if isinstance(o.get("Nodes"), list) and o.get("Object") in ("IScreenAction", "IClientAction", "IMobileBlockAction", "IAction") :
            o = dict(o); o["Nodes"] = live_nodes(o)
        for k, v in o.items():
            if k == "Destination" and isinstance(v, str): acc["dests"].add(v)
            elif k == "SourceBlock" and isinstance(v, str): acc["blocks"].add(v)
            elif k == "Action" and isinstance(v, str) and o.get("Object") == "IExecuteClientActionNode": acc["actions"].add(v)
            elif isinstance(v, str) and k in ("Value", "Condition", "Expression"):
                for m in re.finditer(r'(?:/UBTConnect/|\\")([A-Z][A-Za-z0-9_]+)', v): acc["urlrefs"].add(m.group(1))
            collect(v, acc)
    elif isinstance(o, list):
        for v in o: collect(v, acc)
def new(): return {"dests": set(), "blocks": set(), "actions": set(), "urlrefs": set()}
for flow in es.get("UIFlows", []):
    for node in flow.get("Nodes", []) if isinstance(flow, dict) else []:
        if isinstance(node, dict) and node.get("Object") in ("IMobileScreen", "IMobileBlock"):
            acc = new(); collect(node, acc)
            owners[node["Name"]] = dict(kind=node["Object"][7:], flow=flow.get("Name"), **acc)
cactions = {}
for a in es.get("ClientActions", []):
    acc = new(); collect(a, acc); cactions[a["Name"]] = acc
print("owners:", collections.Counter(o["kind"] for o in owners.values()), "client actions:", len(cactions), file=sys.stderr)
screens = {n for n, o in owners.items() if o["kind"] == "Screen"}
blocks = {n for n, o in owners.items() if o["kind"] == "Block"}
# client action destinations, transitively through called client actions
def ca_dests(name, seen=None):
    seen = seen or set()
    if name in seen or name not in cactions: return set()
    seen.add(name); a = cactions[name]
    out = {d for d in a["dests"]}
    for c in a["actions"]: out |= ca_dests(c, seen)
    return out
def closure(name, seen=None):
    """destinations reachable from an owner: own nodes/widgets, its blocks (transitively), client actions it calls."""
    seen = seen if seen is not None else set()
    if name in seen: return set(), set()
    seen.add(name); o = owners[name]
    d = set(o["dests"]); via = set()
    for c in o["actions"]: d |= ca_dests(c)
    for b in o["blocks"]:
        if b in blocks:
            bd, bv = closure(b, seen); d |= bd; via |= {b} | bv
    return d, via
graph, embeds = {}, {}
for s in sorted(screens):
    d, via = closure(s); graph[s] = sorted(x for x in d if x in screens and x != s); embeds[s] = sorted(via)
inbound = collections.defaultdict(set)
for s, ds in graph.items():
    for t in ds: inbound[t].add(s)
# blocks embedded anywhere (directly) in screens or blocks
used_blocks = collections.defaultdict(set)
for n, o in owners.items():
    for b in o["blocks"]:
        if b in blocks: used_blocks[b].add(n)
urlrefs = collections.defaultdict(set)
for n, o in owners.items():
    for r in o["urlrefs"]:
        if r in screens: urlrefs[r].add(n)
for n, a in cactions.items():
    for r in a["urlrefs"]:
        if r in screens: urlrefs[r].add("ClientAction:" + n)
out = {"screens": sorted(screens), "flow": {n: owners[n]["flow"] for n in screens},
       "graph": graph, "inbound": {k: sorted(v) for k, v in inbound.items()},
       "used_blocks": {k: sorted(v) for k, v in used_blocks.items()}, "unused_blocks": sorted(b for b in blocks if b not in used_blocks),
       "urlrefs": {k: sorted(v) for k, v in urlrefs.items()},
       "default": es.get("DefaultScreen"), "splash": es.get("SplashScreen")}
json.dump(out, open(sys.argv[2], "w"), indent=1)
