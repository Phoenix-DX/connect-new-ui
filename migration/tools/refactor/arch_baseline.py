#!/usr/bin/env python3
"""Frozen lint:arch baseline (W13). The baseline only shrinks.

  arch_baseline.py check   exit 1 when an ESLint boundary warning (no-restricted-imports, "Rule N")
                           is not in app/docs/refactor/arch-baseline.csv; print baseline rows that no longer
                           occur, so the step that removed them deletes those rows
  arch_baseline.py list    rows and counts per owner
  arch_baseline.py write   create the baseline from the current warnings (first time only; refuses to overwrite)

Key of a row: file (relative to app/), import specifier, rule. Columns: file,import,rule,owner.
Run from anywhere; needs Node 24 on PATH for `npx eslint`.
"""

from __future__ import annotations

import csv
import json
import re
import subprocess
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
APP = ROOT / "app"
BASELINE = APP / "docs/refactor/arch-baseline.csv"
COLUMNS = ["file", "import", "rule", "owner"]
MESSAGE = re.compile(r"^'([^']+)' import is restricted .*?\bRule (\d+):")

# First-time owner assignment by folder (W13): PIN blocks go to their B step, the rest to P7.
OWNERS = [
    ("src/components/auth/PinRegisterContent/", "P6-G1-B-PINRegister"),
    ("src/components/auth/PinCodeRegister/", "P6-G1-B-PINRegister"),
    ("src/components/auth/PinUnlockContent/", "P6-G1-B-PINUnlock"),
    ("src/components/auth/PinCodeUnlock/", "P6-G1-B-PINUnlock"),
    ("src/components/auth/PinUnlockMobile/", "P6-G1-B-PINUnlock"),
    ("src/components/auth/PinCode/", "P6-G1-B-PINUnlock"),
    ("src/components/auth/FingerprintScanner/", "P6-G1-B-PINUnlock"),
    ("src/components/layout/", "P7"),
    ("src/components/version/", "P7"),
]


def current() -> set[tuple[str, str, str]]:
    out = subprocess.run(
        ["npx", "eslint", ".", "-f", "json"], cwd=APP, capture_output=True, text=True, check=False
    ).stdout
    found = set()
    for f in json.loads(out):
        rel = str(Path(f["filePath"]).relative_to(APP))
        for m in f["messages"]:
            hit = MESSAGE.match(m.get("message", ""))
            if m.get("ruleId") == "no-restricted-imports" and m.get("severity") == 1 and hit:
                found.add((rel, hit.group(1), f"rule-{hit.group(2)}"))
    return found


def load() -> list[dict[str, str]]:
    with BASELINE.open(newline="") as fh:
        return list(csv.DictReader(fh))


def key(row: dict[str, str]) -> tuple[str, str, str]:
    return (row["file"], row["import"], row["rule"])


def owner_of(file: str) -> str:
    return next((o for prefix, o in OWNERS if file.startswith(prefix)), "pre-existing")


def cmd_check() -> int:
    base = {key(r) for r in load()}
    now = current()
    new, gone = sorted(now - base), sorted(base - now)
    for f, spec, rule in new:
        print(f"NEW  {f} | {spec} | {rule}")
    for f, spec, rule in gone:
        print(f"GONE {f} | {spec} | {rule}  (delete this row from the baseline)")
    print(f"arch baseline: {len(now)} warnings, {len(base)} baseline rows, {len(new)} new, {len(gone)} gone")
    return 1 if new else 0


def cmd_list() -> int:
    rows = load()
    for owner, n in sorted(Counter(r["owner"] for r in rows).items()):
        print(f"{owner}: {n}")
    print(f"total: {len(rows)}")
    return 0


def cmd_write() -> int:
    if BASELINE.exists():
        print(f"{BASELINE} exists; the baseline only shrinks, edit it by hand", file=sys.stderr)
        return 1
    rows = [(f, spec, rule, owner_of(f)) for f, spec, rule in sorted(current())]
    with BASELINE.open("w", newline="") as fh:
        w = csv.writer(fh)
        w.writerow(COLUMNS)
        w.writerows(rows)
    print(f"wrote {len(rows)} rows")
    return 0


def main(argv: list[str]) -> int:
    cmds = {"check": cmd_check, "list": cmd_list, "write": cmd_write}
    if len(argv) != 1 or argv[0] not in cmds:
        print(__doc__)
        return 2
    return cmds[argv[0]]()


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
