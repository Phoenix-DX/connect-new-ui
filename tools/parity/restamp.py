"""Re-stamp finished routes after a code change: parity → step parity → ready → the user's confirm → finish.

Only after the user answered "confirm" in the conversation (CLAUDE.md rules 2 and 4). Pass the user's answer with
--confirm; route.py counts only answers that start with "confirm". A route with any unexempted parity difference is
reported and left alone.
Run from the project root, with the dev server up:
    python3 tools/parity/restamp.py --confirm "confirm (user, <date>: <their words>)" [--app http://localhost:5173] [--base <ref>] [--no-scope-guard] Route1 [Route2 ...]
--base and --no-scope-guard go to route.py ready and finish (the scope guard diffs the branch from main; after a
repository-wide change use --no-scope-guard, or --base <the commit before the route work>). --app is the dev server
of THIS repository (check its folder with lsof -p <pid> -a -d cwd). A finished route has no run.json, so `step parity`
is skipped for it (route.py step needs a run).
"""
import argparse
import glob
import json
import os
import re
import subprocess

SK = "tools/pipeline"
DEFAULT_APP = "http://localhost:5173"
NODE_BIN = os.path.expanduser("~/.nvm/versions/node/v24.21.0/bin")

ap = argparse.ArgumentParser()
ap.add_argument("--confirm", required=True, help="the user's review answer; must start with 'confirm'")
ap.add_argument("--app", default=DEFAULT_APP, help="dev server URL of this repository")
ap.add_argument("--base", default=None, help="git base of the scope guard (route.py ready/finish --base)")
ap.add_argument("--no-scope-guard", action="store_true", help="skip the scope guard in ready and finish")
ap.add_argument("routes", nargs="+")
args = ap.parse_args()
if not args.confirm.startswith("confirm"):
    ap.error("--confirm must start with 'confirm' (route.py counts only those answers)")

env = dict(os.environ, PATH=NODE_BIN + ":" + os.environ["PATH"])
APP = args.app


def run(*cmd):
    r = subprocess.run(["python3", f"{SK}/route.py", *cmd], capture_output=True, text=True, env=env)
    return r.returncode, (r.stdout or "") + (r.stderr or "")


for s in args.routes:
    print(f"=== {s}", flush=True)
    code, out = run("parity", s, "--app", APP)
    for line in out.splitlines():
        if re.match(r"^\w[\w@+=-]*: structure", line):
            print("  " + line[:260], flush=True)
    dirty = []
    for f in sorted(glob.glob(f"migration/screens/{s}/parity/*.json")):
        d = json.load(open(f))
        if d.get("diffs"):
            dirty.append(f"{d.get('state')}:{len(d['diffs'])}")
    if dirty:
        print(f"  NOT CLEAN: {', '.join(dirty)}", flush=True)
        continue
    if os.path.exists(f"migration/screens/{s}/run.json"):
        run("step", s, "parity")
    gate = (["--base", args.base] if args.base else []) + (["--no-scope-guard"] if args.no_scope_guard else [])
    code, out = run("ready", s, *gate)
    m = re.search(r"review round \d+, (Q\d+)", out)
    if code != 0 or not m:
        print("  ready FAILED:\n    " + "\n    ".join(out.strip().splitlines()[-8:]), flush=True)
        continue
    code, out = run("answer", s, m.group(1), "--by", "user", "--answer", args.confirm)
    print("  " + out.strip().splitlines()[-1], flush=True)
    code, out = run("finish", s, *gate)
    print("  " + (out.strip().splitlines()[-1] if out.strip() else f"finish exit {code}"), flush=True)
