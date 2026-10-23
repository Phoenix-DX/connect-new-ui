#!/usr/bin/env python3
"""Make migration/refactor/steps.json, the step catalog of the refactor, from refactor-plan-v2.md.

Run from the project root:
  python3 .claude/skills/refactor-master/scripts/gen_steps.py            # write steps.json
  python3 .claude/skills/refactor-master/scripts/gen_steps.py --check    # exit 1 when steps.json differs

The step list and its attributes (kind, level, model, user gates) are in STEPS below: they come from the plan and from
the user's decisions (R1 to R8, A1 to A7, 2026-10-22). The Phase 6 routes come from the plan's section 8 table, so a
change to that table changes the catalog. Every anchor must exist in the plan: the script fails otherwise.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

PLAN = Path("app/docs/architecture/refactor-plan-v2.md")
OUT = Path("migration/refactor/steps.json")

# id, title, kind, level, devModel, gate, estDays
# kind: move | change | tool | report ; level: strict | visual | none
# gate: None | ("before" | "after", text)
STEPS = [
    ("P0-1", "Baseline run", "report", "strict", "sonnet", None, 0.5),
    ("P0-2", "Parity tool for the refactor", "tool", "strict", "sonnet", None, 1.5),
    ("P0-3", "Dev tools, graph and codemod", "tool", "none", "sonnet",
     ("before", "Approve the added dev dependencies eslint-plugin-import-x and tsx (D3 addition). The developer picks "
                "the versions by the stable rule (ADR-2)."), 1),
    ("P0-4", "Measure the code", "tool", "none", "sonnet", None, 0.5),
    # judgment step (265 blocks classified): Opus, by the user's cost rule "Opus for judgment"
    ("P0-5", "Move map and ADR", "report", "none", "opus",
     ("after", "Review app/docs/refactor/move-map.csv, app/docs/refactor/duplicates.md and ADR-15 in "
               "migration/architecture.md, then confirm."), 0.5),
    ("P1-1", "Lint rules in warn mode", "tool", "strict", "sonnet", None, 0.5),
    ("P1-2", "Move shell/ to platform/", "move", "strict", "sonnet", None, 1),
    ("P1-3", "Move lib/ and components/", "move", "strict", "sonnet", None, 1),
    ("P1-4", "Alias imports", "move", "strict", "sonnet", None, 0.5),
    ("P2-1", "Move the route to pages/", "move", "strict", "sonnet", None, 0.5),
    ("P2-2", "Domain api/household", "change", "strict", "opus", None, 1),
    ("P2-3", "Restructure the block into hooks and components", "change", "visual", "opus", None, 2),
    ("P2-4", "Page template and user review", "report", "visual", "sonnet",
     ("after", "Test HouseholdDetails, HouseholdCarousel and Profile on localhost, read the pilot report, then "
               "confirm."), 0.5),
    ("P3-1", "shared/UBTConnect no longer imports screens/ and app/", "change", "strict", "opus", None, 1),
    ("P3-2", "Remove the UBTConnect cycles", "change", "strict", "opus", None, 1.5),
    ("P3-3", "The two other cycles and osui", "change", "strict", "opus", None, 1),
    ("P3-4", "Measure and report", "report", "strict", "sonnet", None, 0.5),
    ("P4-1", "Settings store", "change", "strict", "opus", None, 1),
    ("P4-2", "Session state machine", "change", "strict", "opus", None, 2),
    ("P4-3", "AuthProvider and bootstrap steps", "change", "strict", "opus", None, 1),
    ("P4-4", "Route meta and guard", "change", "strict", "opus", None, 1),
    ("P4-5", "Flags registry", "change", "strict", "opus", None, 1),
    ("P5-1", "api/client", "change", "strict", "opus", None, 1),
    *[(f"P5-2-{d}", f"Domain api/{d}", "change", "strict", "opus", None, 0.4)
      for d in ("member", "country", "locality", "update", "app")],
    *[(f"P5-3-{d}", f"Domain api/{d}", "change", "strict", "opus", None, 0.4)
      for d in ("event", "bookmark", "note", "message", "notification")],
    ("P5-4", "Memory cache to query options", "change", "strict", "opus",
     ("after", "Confirm the exemption list of Phase 5 (migration/refactor-exemptions.json)."), 1),
    # Phase 6 is expanded from the section 8 table (see phase6()).
    ("P7-1", "components/ui from osui", "move", "visual", "sonnet", None, 1),
    ("P7-2", "Dialogs", "change", "visual", "opus", None, 1),
    ("P7-3", "Empty states and skeletons", "change", "visual", "opus", None, 1),
    ("P7-4", "Cards and carousels, by evidence", "change", "visual", "opus", None, 1.5),
    ("P7-5", "Report", "report", "visual", "sonnet", None, 0.5),
    ("P8-1", "Tokens and layers", "change", "visual", "opus", None, 1),
    ("P8-2", "Delete unused CSS", "change", "visual", "sonnet", None, 2),
    ("P9-1", "Rules to error", "tool", "strict", "sonnet", None, 0.5),
    ("P9-2", "Flag check", "tool", "none", "sonnet", None, 0.5),
    ("P9-3", "Docs", "report", "none", "sonnet", None, 1),
    ("P9-4", "Report", "report", "strict", "sonnet", None, 1),
]
GROUP_DAYS = {"G1": 2, "G2": 3, "G3": 4, "G4": 4, "G5": 4, "G6": 1}
# W10 (Opus + Fable, auto-accepted user instruction 2026-10-23 13:43): in group G1, AcceptPendingPolicies and Menu run
# before the PIN routes (their diffs were prefetched), and one codemod step moves the shared blocks of 2 or more pages
# (step B item 3) after the route named here, so the later B steps import from the final paths.
GROUP_ORDER = {"G1": ["Login", "Splash", "AcceptPendingPolicies", "Menu", "PINRegister", "PINUnlock", "PINChange",
                      "PINBiometricsMenu", "TermsAndPoliciesMenu", "Profile"]}
SHARED_MOVE_AFTER = {"G1": "Menu"}
STRETCH_PHASES = {"P8", "P9"}  # R1 (b): phases 8 and 9 run only on the user's request


def phase_of(step_id: str) -> str:
    return step_id.split("-")[0]


def route_groups(plan: str) -> dict[str, list[str]]:
    """The routes of each Phase 6 group, from the table of section 8 of the plan."""
    start = plan.index("## 8. Route groups of Phase 6")
    end = plan.index("\n## ", start + 10)
    groups: dict[str, list[str]] = {}
    for line in plan[start:end].splitlines():
        m = re.match(r"^\|\s*(G[1-6])\s*\|\s*(.+?)\s*\|\s*$", line)
        if m:
            groups[m.group(1)] = [r.strip() for r in m.group(2).split(",") if r.strip()]
    if sorted(groups) != sorted(GROUP_DAYS):
        raise SystemExit(f"section 8 groups {sorted(groups)} differ from {sorted(GROUP_DAYS)}")
    return groups


def entry(step_id, title, kind, level, model, gate, est, anchor=None, extra=None):
    return {
        "id": step_id,
        "phase": phase_of(step_id),
        "title": title,
        "kind": kind,
        "level": level,
        "devModel": model,
        "gate": None if gate is None else {"when": gate[0], "text": gate[1]},
        "estDays": est,
        "stretch": phase_of(step_id) in STRETCH_PHASES,
        "fullParity": False,
        "anchor": anchor or f"**{step_id.split('-')[0]}-{step_id.split('-')[1]} ",
        "extra": extra,
        "deps": [],
    }


def phase6(plan: str) -> list[dict]:
    out = []
    anchor = "### Phase 6"
    for g, routes in route_groups(plan).items():
        days = GROUP_DAYS[g]
        names = ", ".join(routes)
        if g in GROUP_ORDER:
            if sorted(GROUP_ORDER[g]) != sorted(routes):
                raise SystemExit(f"GROUP_ORDER[{g}] differs from the routes of section 8: {routes}")
            routes = GROUP_ORDER[g]
        out.append(entry(f"P6-{g}-A", f"Move group {g} to pages/", "move", "strict", "sonnet", None, 0.25, anchor,
                         f"This step is step A (move) of group {g} only. Routes: {names}."))
        per_route = round((days - 0.5) / len(routes), 2)
        for r in routes:
            out.append(entry(f"P6-{g}-B-{r}", f"{r} as page", "change", "visual", "opus", None, per_route, anchor,
                             f"This step is step B (restructure) of group {g} for the route {r} only. "
                             f"Do not change the other routes of the group."))
            if SHARED_MOVE_AFTER.get(g) == r:
                shared = entry(f"P6-{g}-B-Shared", f"Move the shared blocks of group {g}", "move", "strict", "sonnet",
                               None, 0.25, anchor,
                               f"This step is step B item 3 of group {g} for all its routes at once (W10). Move every "
                               f"src/shared/ row of app/docs/refactor/move-map.csv with the phase P6-{g} to its "
                               f"target, rewrite all importers, add @origin tags. Move and rename only: no other "
                               f"change in the blocks, no re-export left in src/shared/, rows of other phases stay. "
                               f"Gate: diffcheck --move, parity strict --all, lint:arch with no new warning, bundle.")
                shared["fullParity"] = True
                out.append(shared)
        out.append(entry(f"P6-{g}-C", f"Prune group {g} and group gate", "report", "visual", "sonnet",
                         ("after", f"Review the routes of group {g} on localhost (links in the step report): "
                                   f"{names}. Then confirm the group."), 0.25, anchor,
                         f"This step is step C (prune) of group {g} and the gate of the group. Routes: {names}."))
    out.append(entry("P6-end", "Delete screens/ and shared/", "change", "visual", "sonnet", None, 0.25, anchor,
                     "This step is the end of Phase 6: the paragraph that starts with 'After G6'."))
    return out


def build(plan: str) -> dict:
    steps = []
    for row in STEPS:
        e = entry(*row)
        if e["id"].startswith("P5-2-") or e["id"].startswith("P5-3-"):
            domain = e["id"].split("-", 2)[2]
            e["extra"] = (f"This step covers the domain api/{domain} only. The other domains of the same plan step "
                          f"are separate steps.")
        steps.append(e)
        if e["id"] == "P5-4":
            steps.extend(phase6(plan))
    # one chain in plan order; the last step of each phase (and each group gate) runs the full parity
    for i, s in enumerate(steps):
        if i > 0:
            s["deps"] = [steps[i - 1]["id"]]
        last_of_phase = i == len(steps) - 1 or steps[i + 1]["phase"] != s["phase"]
        if (last_of_phase or s["id"] == "P0-1" or s["id"].endswith("-C")) and s["level"] != "none":
            s["fullParity"] = True
    missing = sorted({s["anchor"] for s in steps if s["anchor"] not in plan})
    if missing:
        raise SystemExit(f"anchors not found in {PLAN}: {missing}")
    return {
        "_note": "Written by gen_steps.py from refactor-plan-v2.md. Change STEPS in the script, not this file.",
        "plan": str(PLAN),
        "steps": steps,
    }


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--check", action="store_true", help="exit 1 when steps.json is not up to date")
    ap.add_argument("--plan", default=str(PLAN))
    ap.add_argument("--out", default=str(OUT))
    a = ap.parse_args(argv)
    data = build(Path(a.plan).read_text(encoding="utf-8"))
    text = json.dumps(data, indent=1, ensure_ascii=False) + "\n"
    out = Path(a.out)
    if a.check:
        same = out.exists() and out.read_text(encoding="utf-8") == text
        print("steps.json is up to date" if same else "steps.json is NOT up to date: run gen_steps.py")
        return 0 if same else 1
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(text, encoding="utf-8")
    phases: dict[str, int] = {}
    for s in data["steps"]:
        phases[s["phase"]] = phases.get(s["phase"], 0) + 1
    print(f"wrote {out}: {len(data['steps'])} steps; " + ", ".join(f"{k} {v}" for k, v in phases.items()))
    return 0


if __name__ == "__main__":
    sys.exit(main())
