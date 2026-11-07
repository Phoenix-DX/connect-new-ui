#!/usr/bin/env python3
"""Draft of the triage table of the TST sync wave, from the parity reports and the drift data (facts only).

  python3 tools/sync/triage_draft.py [--drift migration/sync/drift-<date>.json] [--out migration/sync/triage-<date>.md]
         [--date YYYY-MM-DD] [--sweep migration/sync/sweep-<date>.txt]

One row per finished route with a parity report that has a difference (a non-zero count), with: the states and their
counts, the kinds, the TST files that changed since the route's capture (drift json), `Shared paths` = `-`,
`Dev model` = opus, `Class` = `?`. The judge (Opus, then the user) sets the class and the shared paths; `sync.py
import` refuses a `?`. The page also lists the routes whose capture changed but whose parity is clean (no item), and
the exemption rules the reports used, for the review.
"""
from __future__ import annotations

import argparse
import datetime as dt
import glob
import json
import os
import re

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
KINDS = ["structure", "class", "attr", "text", "style", "pseudo", "layout", "position", "pixel", "call"]
HEADER = "| Route | Class | States with diffs | Kinds | Changed TST files | Shared paths | Dev model | Owner | Note |"


def route_rows(screens_dir: str) -> tuple[dict, dict, dict]:
    """({route: {state: n}}, {route: set(kinds)}, {route: {exemption id: uses}}) over every finished route."""
    states, kinds, exempt = {}, {}, {}
    for fin in sorted(glob.glob(os.path.join(screens_dir, "*", "finished.json"))):
        route = os.path.basename(os.path.dirname(fin))
        for p in sorted(glob.glob(os.path.join(screens_dir, route, "parity", "*.json"))):
            try:
                d = json.load(open(p, encoding="utf-8"))
            except ValueError:
                continue
            counts = d.get("counts") or {}
            n = sum(v for v in counts.values() if isinstance(v, int))
            for e in d.get("exemptionsUsed") or []:
                eid = e.get("id") if isinstance(e, dict) else str(e)
                exempt.setdefault(route, {})[eid] = exempt.get(route, {}).get(eid, 0) + (e.get("count", 1) if isinstance(e, dict) else 1)
            if n:
                states.setdefault(route, {})[d.get("state") or os.path.basename(p)[:-5]] = n
                kinds.setdefault(route, set()).update(k for k, v in counts.items() if v)
    return states, kinds, exempt


def drift_files(drift: dict) -> dict:
    """{route: [changed TST file names]} from survey_diff's json."""
    out: dict = {}
    for name, row in (drift.get("routes") or {}).get("changed", {}).items():
        for r in row.get("routes", []):
            out.setdefault(r, []).append(name)
    return out


def short(name: str) -> str:
    stem = name[: -len(".mvc.js")] if name.endswith(".mvc.js") else name
    return stem.rsplit(".", 1)[-1]


def render(date: str, states: dict, kinds: dict, exempt: dict, files: dict, sweep: str | None) -> str:
    L = [f"# Triage of the TST sync wave ({date})", "",
         f"sweep: {sweep or '-'}", f"captures: {date}",
         "legend: A = TST changed its code (fix React); B = mock data drift (fix the fictional data or mocks); "
         "C = capture artefact (exemption candidate, the user decides); D = React gap that existed before (the user decides)", "",
         f"Routes with a parity difference: {len(states)}. Routes whose TST files changed since their capture: {len(files)}.", "",
         "## Items", "", HEADER, "|" + "---|" * 9]
    for r in sorted(states):
        st = "; ".join(f"{k}:{v}" for k, v in sorted(states[r].items()))
        ks = ", ".join(k for k in KINDS if k in kinds.get(r, set()))
        fs = ", ".join(f"`{f}`" for f in sorted(files.get(r, []))) or "-"
        L.append(f"| `{r}` | ? | {st} | {ks} | {fs} | - | opus | - | |")
    L += ["", "## Routes whose TST files changed but whose parity is clean (no item)", ""]
    clean = sorted(set(files) - set(states))
    L += [f"- `{r}`: " + ", ".join(f"`{short(f)}`" for f in sorted(files[r])) for r in clean] or ["- none"]
    L += ["", "## Exemptions to review", "", "| Rule | Routes (uses) |", "|---|---|"]
    by_rule: dict = {}
    for r, rules in exempt.items():
        for eid, n in rules.items():
            by_rule.setdefault(eid, []).append(f"{r} ({n})")
    L += [f"| `{eid}` | {', '.join(sorted(v))} |" for eid, v in sorted(by_rule.items())] or ["| (none) | |"]
    L += ["", "## Questions for the user", "", "(filled by the judge: id, item, evidence, options a/b/c, recommendation)", ""]
    return "\n".join(L)


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("--date", default=dt.date.today().isoformat())
    ap.add_argument("--drift", default=None)
    ap.add_argument("--sweep", default=None)
    ap.add_argument("--out", default=None)
    ap.add_argument("--screens-dir", default=os.path.join(ROOT, "migration", "screens"))
    a = ap.parse_args(argv)
    drift = json.load(open(os.path.join(ROOT, a.drift), encoding="utf-8")) if a.drift else {}
    states, kinds, exempt = route_rows(a.screens_dir)
    text = render(a.date, states, kinds, exempt, drift_files(drift), a.sweep)
    out = os.path.join(ROOT, a.out or f"migration/sync/triage-{a.date}.md")
    with open(out, "w", encoding="utf-8") as f:
        f.write(text)
    print(f"{len(states)} routes with differences; written {os.path.relpath(out, ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
