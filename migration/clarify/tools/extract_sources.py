#!/usr/bin/env python3
"""extract_sources.py: copy compiled TST files from the live survey for a route that is not captured (item 10).

    python3 migration/clarify/tools/extract_sources.py --screen <S> <pattern> [<pattern> ...]

Each pattern is a regular expression on the file names of capture/survey-UBTConnect.json (the live survey of
2026-10-28, not committed). The matching files go to migration/screens/<S>/sources/ (compiled code only, no user
data). The script prints names and sizes only.
"""
import argparse
import json
import os
import re
import sys

ap = argparse.ArgumentParser()
ap.add_argument("--screen", required=True)
ap.add_argument("patterns", nargs="+")
a = ap.parse_args()
survey = "capture/survey-UBTConnect.json"
if not os.path.exists(survey):
    sys.exit(f"{survey} not found")
src = json.load(open(survey, encoding="utf-8"))["sources"]
out = os.path.join("migration", "screens", a.screen, "sources")
os.makedirs(out, exist_ok=True)
n = 0
for name, body in sorted(src.items()):
    if not any(re.search(p, name) for p in a.patterns):
        continue
    if isinstance(body, dict):
        body = body.get("text") or body.get("content") or body.get("code") or ""
    open(os.path.join(out, name), "w", encoding="utf-8").write(body)
    print(f"{name}: {len(body):,} characters")
    n += 1
print(f"{n} file(s) in {out}")
