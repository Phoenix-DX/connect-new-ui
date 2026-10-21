"""Where a destination or block instance sits in screens/blocks, with the If-widget conditions above it.
Usage: python3 migration/tools/mcp/paths.py <espace.json> dest|block <Name>"""
import json, sys
es = json.load(open(sys.argv[1])); kind, target = sys.argv[2], sys.argv[3]   # kind: dest | block
owners = {n["Name"]: (f.get("Name"), n) for f in es["UIFlows"] for n in f.get("Nodes", []) if isinstance(n, dict) and n.get("Object") in ("IMobileScreen", "IMobileBlock")}
def walk(o, path, hits, owner):
    if isinstance(o, dict):
        obj = o.get("Object", "")
        here = path
        if obj == "IIfWidget": here = path + [f"If[{o.get('Condition','?')[:90]}]"]
        if obj == "IScreenAction": here = path + [f"action {o.get('Name')}"]
        if (kind == "dest" and o.get("Destination") == target) or (kind == "block" and o.get("SourceBlock") == target):
            hits.append((owner, " > ".join(here) or "(top)"))
        for k, v in o.items():
            p = here
            if k in ("TrueBranch", "FalseBranch"): p = here + [k]
            walk(v, p, hits, owner)
    elif isinstance(o, list):
        for v in o: walk(v, path, hits, owner)
hits = []
for name, (flow, node) in owners.items(): walk(node, [], hits, f"{flow}.{name}")
for h in hits: print(" -", h[0], "::", h[1][:260])
