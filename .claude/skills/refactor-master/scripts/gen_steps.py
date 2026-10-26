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
    # W20 (Opus + Fable, auto-accepted user instruction 2026-10-23 13:43): P7-0 and P7-6 empty src/shared/
    ("P7-0", "Move the P7 shared rows", "move", "strict", "sonnet", None, 0.5, "### Phase 7",
     "This step is a pure move before P7-1 (W20): move every src/shared/ row of app/docs/refactor/move-map.csv with "
     "the phase P7, except shared/osui/* (P7-1 moves those), to its target, as the P6 B-Shared steps did (move-map "
     "renames W12, @origin tags, importers follow, W15 baseline rows). Gate: diffcheck --move, parity strict --all."),
    ("P7-1", "components/ui from osui", "move", "visual", "sonnet", None, 1),
    ("P7-2", "Dialogs", "change", "visual", "opus", None, 1),
    ("P7-3", "Empty states and skeletons", "change", "visual", "opus", None, 1),
    ("P7-4", "Cards and carousels, by evidence", "change", "visual", "opus", None, 1.5),
    ("P7-6", "Place shared/*/lib and delete shared/", "change", "strict", "opus", None, 1, "### Phase 7",
     "This step empties and deletes src/shared/ (W20), before the report P7-5. Commit 1 (docs only): add a "
     "move-map.csv row for each file left in src/shared/ (the <package>/lib/ helpers, shared/lib, shared/test, the "
     "mock files, the README), with a target by data ownership: api/<domain>, platform/<area>, lib/ (rule 6: lib/ "
     "imports only lib/), pages/<R> when one page uses it, src/test/ for test setup; the master gets the rows "
     "approved by Opus + Fable before any move. Commit 2: pure move to those targets (diffcheck --move, parity "
     "strict --all, W15 baseline rows); delete src/shared/ only when it has no file, and remove its alias and lint "
     "rules in the same commit."),
    ("P7-5", "Report", "report", "visual", "sonnet", None, 0.5),
    ("P8-1", "Tokens and layers", "change", "visual", "opus", None, 1),
    ("P8-2", "Delete unused CSS", "change", "visual", "sonnet", None, 2),
    ("P9-1", "Rules to error", "tool", "strict", "sonnet", None, 0.5),
    ("P9-2", "Flag check", "tool", "none", "sonnet", None, 0.5),
    ("P9-3", "Docs", "report", "none", "sonnet", None, 1),
    ("P9-4", "Report", "report", "strict", "sonnet", None, 1),
]
GROUP_DAYS = {"G1": 2, "G2": 3, "G3": 4, "G4": 4, "G5": 4, "G6": 1}
# W10 and W11 (Opus + Fable, auto-accepted user instruction 2026-10-23 13:43): one codemod step per group moves the
# shared blocks of 2 or more pages (step B item 3), so the B steps import from the final paths. It runs right after
# step A ("A"), or after the route named here: in group G1, AcceptPendingPolicies and Menu ran before the PIN routes
# (their diffs were prefetched) and the move came after Menu.
GROUP_ORDER = {"G1": ["Login", "Splash", "AcceptPendingPolicies", "Menu", "PINRegister", "PINUnlock", "PINChange",
                      "PINBiometricsMenu", "TermsAndPoliciesMenu", "Profile"],
               # master scheduling (2026-10-24): prefetched steps first; W22 keeps HomeFeed-Page after Services
               "G3": ["HomeFeed", "Services", "Search", "MessageList", "MessageDetail", "FeedItemDetail",
                      "Updates_SingleList", "Notifications"],
               "G4": ["BrowseCountries", "BrowseDirectory", "CountryList", "HouseholdCarousel", "Photobook",
                      "CountryDetails", "Household_Relations", "Locality_Details", "OneSchoolGlobalDetails",
                      "SupperMeeting_Carousel", "CommunityBusinessDetails_CoomingSoon", "Assemble_BrowseByCountry",
                      "SupperMeeting_Details"]}
SHARED_MOVE_AFTER = {"G1": "Menu"}
# W22 (Opus + Fable, auto-accepted user instruction 2026-10-23 13:43): steps that run after a route step of a group
AFTER_ROUTE = {
    ("G3", "Notifications"): [("P6-F16", "HomeFeed first load trim", "change", "strict", "opus", None, 0.5,
                          "This step is the entry trim of decisions W21 and W24: make the HomeFeed first load at least "
                          "about 2 kB gzip smaller without a behavior change (for example a slimmer route table or "
                          "lazy-route manifest, or narrow imports on the app-start path as P6-F15 did). Target: after "
                          "P6-G3-B-HomeFeed-Page (+1.11 kB) lands, the HomeFeed margin to its limit is at least 2.0 "
                          "kB. Gate: parity strict --all with the call check, bundle report."),
                         ("P6-G3-B-HomeFeed-Page", "HomeFeed page part", "change", "visual", "opus", None, 0.25,
                          "This step finishes P6-G3-B-HomeFeed (W22): FeedBlock_Services, FeedBlock_Updates and "
                          "Dialog_GoExternalApp of pages/HomeFeed become hooks and props-only components; GetServices "
                          "moves to api/service (created by P6-G3-B-Services); pages/HomeFeed/api.ts and types.ts go "
                          "to domain hooks or inputs.ts and are deleted. Old-vs-new check for HomeFeed; HomeFeed "
                          "first load must not grow (F17 tripwire, W21).")],
}
# W18 (Opus + Fable, auto-accepted user instruction 2026-10-23 13:43): fix steps that run after the step C of a group
AFTER_GROUP = {
    "G2": [("P6-F15", "Login first load under its limit", "change", "strict", "sonnet", None, 0.5,
            "This step is the bundle fix of decision W18 (migration/refactor/auto-decisions-2026-10-22.md). Take "
            "api/message and api/bookmark (and api/update) out of the entry chunk: the app-start call in "
            "platform/bootstrap/startup.ts imports narrowly (deep import or a small module, static, same call "
            "order); get_IsUnsupportedSystem moves out of shared/**/lib/actions.ts so the lock dialog does not pull "
            "the bookmark and update domains. Target: Login first load at least 2.5 kB smaller (about 190.6 kB "
            "gzip or less); if not reached, also shrink the route table manifest. No behavior change: parity strict "
            "--all with the call check.")],
    # W28 (Opus + Fable, auto-accepted user instruction 2026-10-23 13:43)
    "G4": [("P6-F17", "OnReady before paint option in useFlowState", "change", "visual", "opus", None, 0.25,
            "This step is the platform fix of decision W28 (migration/refactor/auto-decisions-2026-10-22.md). Add an "
            "opt-in `beforePaint` option to `useFlowState` (platform/navigation/flowState.ts): when it is set, OnReady "
            "runs once in a layout effect, before the first paint, as the old G5 and G6 blocks ran it. StrictMode runs "
            "it once; `isAlive` is true until the unmount and guards the state writes only (W23); a rejection goes to "
            "the flow handler, also after the unmount. The option is off by default, so no page changes. Unit tests "
            "for both modes: the state of the first paint, one run in StrictMode, unmount while OnReady is pending, "
            "the restored flag. Document the option in docs/guides/page-template.md: a page sets it when the old block "
            "ran OnReady in a useLayoutEffect. Reference: the page-local hook useReadyBeforePaint of the "
            "MilestoneDetail prefetch.")],
}
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
        shared = entry(f"P6-{g}-B-Shared", f"Move the shared blocks of group {g}", "move", "strict", "sonnet", None,
                       0.25, anchor,
                       f"This step is step B item 3 of group {g} for all its routes at once (W10, W11). Move every "
                       f"src/shared/ row of app/docs/refactor/move-map.csv with the phase P6-{g} to its target, "
                       f"rewrite all importers (also in screens/ of other groups: import paths only), add @origin "
                       f"tags. Move and rename only: no other change in the blocks, no re-export left in src/shared/, "
                       f"rows of other phases stay. When a target path already exists, stop with a question. "
                       f"Gate: diffcheck --move, parity strict --all, lint:arch with no new warning, bundle.")
        shared["fullParity"] = True
        after = SHARED_MOVE_AFTER.get(g, "A")
        if after == "A":
            out.append(shared)
        per_route = round((days - 0.5) / len(routes), 2)
        for r in routes:
            out.append(entry(f"P6-{g}-B-{r}", f"{r} as page", "change", "visual", "opus", None, per_route, anchor,
                             f"This step is step B (restructure) of group {g} for the route {r} only. "
                             f"Do not change the other routes of the group. Step B item 3 is the step "
                             f"P6-{g}-B-Shared: import the shared blocks of 2 or more pages from their move-map "
                             f"targets and do not move them."))
            if after == r:
                out.append(shared)
            for row in AFTER_ROUTE.get((g, r), []):
                out.append(entry(*row[:7], anchor, row[7]))
        out.append(entry(f"P6-{g}-C", f"Prune group {g} and group gate", "report", "visual", "sonnet",
                         ("after", f"Review the routes of group {g} on localhost (links in the step report): "
                                   f"{names}. Then confirm the group."), 0.25, anchor,
                         f"This step is step C (prune) of group {g} and the gate of the group. Routes: {names}."))
        for row in AFTER_GROUP.get(g, []):
            fix = entry(*row[:7], anchor, row[7])
            fix["fullParity"] = True
            out.append(fix)
    out.append(entry("P6-end", "Delete screens/", "change", "visual", "sonnet", None, 0.25, anchor,
                     "This step is the end of Phase 6: the paragraph that starts with 'After G6', changed by W20: "
                     "delete src/screens/ and the fallback in app/screens.ts only; src/shared/ stays until P7-6. "
                     "Guard: no file left in src/screens/ and no import of screens/; ci and parity strict --all."))
    return out


def build(plan: str) -> dict:
    steps = []
    for row in STEPS:
        e = entry(*row)
        if e["id"].startswith("P5-2-") or e["id"].startswith("P5-3-"):
            domain = e["id"].split("-", 2)[2]
            e["extra"] = (f"This step covers the domain api/{domain} only. The other domains of the same plan step "
                          f"are separate steps.")
        if e["id"] in ("P7-0", "P7-6"):
            e["fullParity"] = True
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
