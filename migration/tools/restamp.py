"""Re-stamp finished routes after a code change: parity → step parity → ready → the user's confirm → finish.

Only after the user answered "confirm" in the conversation (CLAUDE.md rules 2 and 4). Pass the user's answer with
--confirm; route.py counts only answers that start with "confirm". A route with any unexempted parity difference is
reported and left alone.
Run from the project root, with the dev server up:
    python3 migration/tools/restamp.py --confirm "confirm (user, <date>: <their words>)" Route1 [Route2 ...]
"""
import argparse
import glob
import json
import os
import re
import subprocess

SK = ".claude/skills/outsystems-screen-spec/scripts"
APP = "http://localhost:5173"
NODE_BIN = os.path.expanduser("~/.nvm/versions/node/v24.21.0/bin")

ap = argparse.ArgumentParser()
ap.add_argument("--confirm", required=True, help="the user's review answer; must start with 'confirm'")
ap.add_argument("routes", nargs="+")
args = ap.parse_args()
if not args.confirm.startswith("confirm"):
    ap.error("--confirm must start with 'confirm' (route.py counts only those answers)")

env = dict(os.environ, PATH=NODE_BIN + ":" + os.environ["PATH"])


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
    run("step", s, "parity")
    code, out = run("ready", s)
    m = re.search(r"review round \d+, (Q\d+)", out)
    if code != 0 or not m:
        print("  ready FAILED:\n    " + "\n    ".join(out.strip().splitlines()[-8:]), flush=True)
        continue
    code, out = run("answer", s, m.group(1), "--by", "user", "--answer", args.confirm)
    print("  " + out.strip().splitlines()[-1], flush=True)
    code, out = run("finish", s)
    print("  " + (out.strip().splitlines()[-1] if out.strip() else f"finish exit {code}"), flush=True)
