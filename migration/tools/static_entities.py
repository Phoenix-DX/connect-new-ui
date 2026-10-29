#!/usr/bin/env python3
"""static_entities.py: TST static-entity values by name, for the clone (evidence, not shipped).

Values: migration/runtime-sources/moduleinfo.json (GET /UBTConnect/moduleservices/moduleinfo on TST, read-only,
user-approved 2026-10-15) → data.modules[<espaceKey>].staticEntities[<entityKey>][<recordKey>] = value.
Names: the compiled <Module>.model.js files; the first copy found wins, in this order: migration/runtime-sources (live
TST copies since the source switch of 2026-10-28), the screen captures' sources/raw, migration/contract/sources/raw:
  <M>Model.staticEntities.<entity> = {}; var get<E>Record = function (record) {
    return <M>Model.module.staticEntities["<entityKey>"][record]; };
  Object.defineProperty(<M>Model.staticEntities.<entity>, "<record>", { get: ... get<E>Record("<recordKey>") ... });
Writes migration/knowledge/static-entities-tst.json: {"<Module>.<entity>": {"<record>": value}}.
Usage (project root): python3 migration/tools/static_entities.py [--grep <regex>]
"""
import argparse, glob, json, os, re

ap = argparse.ArgumentParser()
ap.add_argument("--grep")
a = ap.parse_args()
info = json.load(open("migration/runtime-sources/moduleinfo.json", encoding="utf-8"))
values = {}
for mod in info["data"]["modules"].values():
    for ek, recs in (mod.get("staticEntities") or {}).items():
        values.setdefault(ek, {}).update(recs)
files = {}
for p in (sorted(glob.glob("migration/runtime-sources/*.model.js")) + glob.glob("migration/screens/*/analysis/sources/raw/*.model.js")
          + glob.glob("migration/contract/sources/raw/*.model.js")):
    files.setdefault(os.path.basename(p), p)
out = {}
# own entities: return <M>Model.module.staticEntities["<ek>"][record]; referenced ones (another producer module):
# return OS.ApplicationInfo.getModules()["<moduleKey>"].staticEntities["<ek>"][record];
ent_re = re.compile(r'(\w+)Model\.staticEntities\.(\w+) = \{\};\s*var (get\w+Record) = function \(record\) \{\s*'
                    r'return (?:\w+Model\.module|OS\.ApplicationInfo\.getModules\(\)\["[0-9a-f-]+"\])'
                    r'\.staticEntities\["([0-9a-f-]+)"\]\[record\];')
for name, p in sorted(files.items()):
    src = open(p, encoding="utf-8", errors="replace").read()
    for m in ent_re.finditer(src):
        module, entity, getter, ek = m.groups()
        recs = {}
        for r in re.finditer(r'staticEntities\.' + re.escape(entity) + r', "(\w+)", \{\s*get: function \(\) \{\s*return ([^;]*?)'
                             + re.escape(getter) + r'\("([0-9a-f-]+)"\)', src):
            rec, conv, rk = r.groups()
            if rk in values.get(ek, {}):
                recs[rec] = values[ek][rk]
        if recs:
            out.setdefault(f"{module}.{entity}", recs)
json.dump(out, open("migration/knowledge/static-entities-tst.json", "w", encoding="utf-8"), indent=1, sort_keys=True)
print(f"{len(out)} static entities with values → migration/knowledge/static-entities-tst.json")
if a.grep:
    for k, v in out.items():
        if re.search(a.grep, k):
            print(k, json.dumps(v)[:600])
