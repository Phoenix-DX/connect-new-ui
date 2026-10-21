#!/usr/bin/env python3
"""
ledger.py: token and outcome ledger for the migration. Measure before optimising.

The orchestrator records one line per agent run (Claude Code reports total tokens per subagent; for
single-agent runs use /cost or the usage shown by your client before and after the phase).

  python3 ledger.py add --screen <Screen> --phase build --tokens 182000 [--agent sub-3] [--tier lite] [--note "..."]
  python3 ledger.py report [--board-dir migration]

Phases: survey, scope, capture, analyze, foundation, spec, build, verify, fix, review, other.
`report` shows tokens by phase and by tier, the cost per screen, and WASTE: tokens spent on screens whose
board decision is now `skip` (work done before the scope decision).
File: <board-dir>/metrics/ledger.csv
"""
import argparse, csv, datetime, os, sys
from collections import defaultdict

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
PHASES = ["survey", "scope", "capture", "analyze", "foundation", "spec", "build", "verify", "fix", "review", "other"]
FIELDS = ["date", "screen", "phase", "tokens", "agent", "tier", "note"]


def path(d):
    return os.path.join(d, "metrics", "ledger.csv")


def add(a):
    if a.phase not in PHASES:
        sys.exit(f"phase must be one of {PHASES}")
    p = path(a.board_dir)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    new = not os.path.exists(p)
    with open(p, "a", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, FIELDS)
        if new:
            w.writeheader()
        w.writerow({"date": datetime.date.today().isoformat(), "screen": a.screen, "phase": a.phase, "tokens": a.tokens,
                    "agent": a.agent or "", "tier": a.tier or "", "note": (a.note or "").replace("\n", " ")})
    print("ok")


def report(a):
    p = path(a.board_dir)
    if not os.path.exists(p):
        sys.exit(f"{p} not found")
    rows = list(csv.DictReader(open(p, encoding="utf-8")))
    board = {}
    try:
        from board import read_board
        board = read_board(os.path.join(a.board_dir, "board.md"))
    except SystemExit:
        pass
    tot = sum(int(r["tokens"]) for r in rows)
    by_phase, by_tier, by_screen = defaultdict(int), defaultdict(list), defaultdict(int)
    for r in rows:
        by_phase[r["phase"]] += int(r["tokens"])
        by_screen[r["screen"]] += int(r["tokens"])
    for s, t in by_screen.items():
        tier = (board.get(s) or {}).get("Tier") or next((r["tier"] for r in rows if r["screen"] == s and r["tier"]), "") or "?"
        by_tier[tier].append(t)
    k = lambda n: f"{n/1000:,.0f}k"
    print(f"total {k(tot)} tokens over {len(by_screen)} screen(s)/topics, {len(rows)} runs\n")
    print("by phase:")
    for ph in PHASES:
        if by_phase[ph]:
            print(f"  {ph:10} {k(by_phase[ph]):>8}  {100*by_phase[ph]/tot:5.1f}%")
    print("\nper screen by tier (median / max):")
    for t, v in sorted(by_tier.items()):
        v = sorted(v)
        print(f"  {t:6} n={len(v):3}  median {k(v[len(v)//2])}  max {k(v[-1])}")
    waste = {s: t for s, t in by_screen.items() if (board.get(s) or {}).get("Decision") == "skip"}
    if waste:
        w = sum(waste.values())
        print(f"\nWASTE (now skipped): {k(w)} ({100*w/tot:.1f}%): " + ", ".join(f"{s} {k(t)}" for s, t in sorted(waste.items(), key=lambda x: -x[1])))
    top = sorted(by_screen.items(), key=lambda x: -x[1])[:5]
    print("\nmost expensive: " + ", ".join(f"{s} {k(t)}" for s, t in top))


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--board-dir", default="migration")
    sub = ap.add_subparsers(dest="cmd", required=True)
    p = sub.add_parser("add")
    for x in ("--screen", "--phase"):
        p.add_argument(x, required=True)
    p.add_argument("--tokens", type=int, required=True)
    p.add_argument("--agent"); p.add_argument("--tier"); p.add_argument("--note")
    sub.add_parser("report")
    a = ap.parse_args()
    {"add": add, "report": report}[a.cmd](a)


if __name__ == "__main__":
    main()
