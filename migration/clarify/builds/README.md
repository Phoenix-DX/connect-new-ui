# Build wave of 2026-10-27: major findings and "build now" items

The user ordered the build of the 27 major findings and the 30 "build now" items (`../infra-gaps.md` §10.4) on
2026-10-27, unattended. Ten Opus agents build one group each from the brief `../BUILD.md`. The orchestrator runs the
gates, records the results and writes the decisions the user must take in `pending-decisions.md`.

## Groups

| Group | Note | Items |
|---|---|---|
| B1 | `B1-contactus.md` | App_Menu_ContactUs F1 (blocker), F2, F3 |
| B2 | `B2-hostsurvey.md` | Legacy_OrbitEventsFlow F1 (blocker): the HostSurvey wizard |
| B3 | `B3-milestones.md` | Legacy_OrbitEventsFlow F2 (blocker): five milestone blocks |
| B4 | `B4-errors.md` | App_Common F1, App_Services F1, F2, Calendar F1, Directory_SupperMeetings F1, _shared F3 |
| B5 | `B5-lists.md` | App_CommonBlocks_Filter F1, App_Notifications F1, F2, Directory_Updates F1, App_Policies F1 |
| B6 | `B6-profile.md` | App_Profile F1: the address section |
| B7 | `B7-search.md` | Directory_Search F1, F2, F3 |
| B8 | `B8-ldm.md` | Legacy_LDMEventsFlow_V2 F1, F2 |
| B9 | `B9-messagedetail.md` | Legacy_MyNotificationsFlow F1, F2, F3, F6 |
| B10 | `B10-misc.md` | Legacy_OrbitEventsFlow F3, Legacy_OrbitAdminFlow F1, Notes F2, _libraries F1, ContactFlow Q1 |

Build items already done in the minor wave (`../fixes/`): App_Common Q3 (constant), App_Menu Q2, App_Policies C4,
Bookmarks Q2, Calendar Q2, Directory_OneSchoolGlobal Q2 (document.title), Home Q1, Home Q2, _libraries Q1. Recorded
without a build: App_PIN Q2. Checks: App_Services Q1 (the SortableJS source is in `migration/runtime-sources/`).

## Gates after the wave

1. Each agent: Vitest of its area, ESLint, Prettier, typecheck, arch.
2. Orchestrator: a second read of every "withdrawn" or "open" claim against the TST lines.
3. `npm run ci` (gen:api, typecheck, lint, arch, arch baselines, dup, unused), the full Vitest suite, `npm run build`.
4. Parity sweep of the 64 routes on port 5174 (`migration/tools/parity_sweep.py`); new blocks keep the captured states.
5. STE lint of every note; the checklist rows and report §5 status through `../tools/apply_fixes.py`.
6. Decisions needed: an Opus advisor and a Fable advisor review each one and recommend; the user decides.
7. One local commit per wave (no push).
