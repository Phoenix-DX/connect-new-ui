"""Parity sweep over every finished route (report only): `route.py parity` per route, then one line per route.

Run from the project root, with the dev server up (npm --prefix app run dev):
    python3 migration/tools/parity_sweep.py [--app http://localhost:5173] [Route ...]
Without routes it takes every route that has migration/screens/<S>/finished.json. About 10 minutes for 64 routes.
Needed after any change to a parity input (route code, src/shell, src/shared, src/lib, src/components, src/mocks,
src/app, public/UBTConnect, index.html, legacy CSS, migration/parity-exemptions.json): reports count only when made
by route.py parity after the last code change (CLAUDE.md rule 5).
"""
import argparse
import os
import re
import subprocess

SK = ".claude/skills/outsystems-screen-spec/scripts"
NODE_BIN = os.path.expanduser("~/.nvm/versions/node/v24.21.0/bin")
DIFF_KINDS = r"(structure|class|attr|text|style|pseudo|layout|position|pixel|call) [1-9]"

ap = argparse.ArgumentParser()
ap.add_argument("--app", default="http://localhost:5173")
ap.add_argument("routes", nargs="*")
args = ap.parse_args()

env = dict(os.environ, PATH=NODE_BIN + ":" + os.environ["PATH"])
routes = args.routes or [
    d for d in sorted(os.listdir("migration/screens")) if os.path.exists(f"migration/screens/{d}/finished.json")
]
bad = []
for s in routes:
    r = subprocess.run(["python3", f"{SK}/route.py", "parity", s, "--app", args.app], capture_output=True, text=True, env=env)
    lines = [l for l in (r.stdout + r.stderr).splitlines() if re.match(r"^\w[\w@+=-]*: (structure|exempt|no raw)", l)]
    dirty = [l.split(";")[0] for l in lines if re.search(DIFF_KINDS, l.split(";")[0])]
    print(f"{s}: {'OK' if not dirty else 'DIFF ' + ' | '.join(dirty)}", flush=True)
    if dirty:
        bad.append(s)
print("ROUTES", len(routes), "WITH DIFFS", len(bad), bad)
