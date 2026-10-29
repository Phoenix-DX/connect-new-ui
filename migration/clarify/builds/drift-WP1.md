# Drift wave WP1: capture and exemption hygiene (2026-10-29)

Class C. Decisions (`../review/drift-decisions-2026-10-29.md`): H-Q5 a, E-Q3 a, E-Q4 a, E-Q5 a, E-Q6 (fix the capture
path), M-Q5 a, D-Q3 a then b; WP4 Q1 and Q2 from `drift-WP4.md`. No app code changed. TST access: read-only captures and
one read-only probe, guard on, no `--allow-writes`.

## Phase 1: capture path and re-captures

| Item | Change | Result |
|---|---|---|
| E-Q6 | `batch_capture.cjs` `openVia`: wait until the `via.click` target is visible (30 s) before `beforeClick` (runtime restart, or the hold/abort handler of loading/offline), then click. Test first: `batch_capture.test.cjs` (2 tests, fake page, call order). The script exports `openVia` and runs `main()` only as the main module. | MilestoneDetail and HostSurvey now have `loading` and `offline` in `analysis/states.json` (first time). Loading DOM: Skeleton_Loading in the screen block; offline: the error path. |
| E-Q5 | Plan OrbitLanding steps: `popup-filters` → `popup-filters-closed` (click `#b1-Popup_Filters .orbit-filters-popup-exit .fa-times`, the TST close icon in `dom/popup-filters.html`, also in React `Popup_OrbitLanding_Filters.tsx:56-57`) → `popup-sort` (click `.orbit-landing-filters.justify-content-flex-end`, waitMs 1500). | Re-capture: 6 states, steps saved in the meta. The stale `popup-filters-closed` (2026-10-16, backdrop click) came from a separate run whose file stayed in `capture/`; it is now replaced. |
| M-Q5 | New probe `migration/clarify/tools/probe_message_ids.cjs` (model: `probe_notification_ids.cjs`; ids, read flags and type ids only). A fresh browser got `DataBaseException` from GetMessages; with the saved session (path only, Playwright reads it) it got 20 messages. 5965247 is not in the list. Plan: `MessageInstanceId=5982748` (newest message already read). | TST capture now shows `ScreenBlock_MessageDetail` (was MessageList). |
| D-Q3 a | AssembleEvents re-captured once. The first run hit the network outage (error page, `_error.html` digest); run again at 19:18, complete. Loading and offline were captured again too (auto states). | Same 89 differences: they are the rows of `CAPTURE-MASKED-COUNT-WIDTH-ASSEMBLEEVENTS-SHEET`, whose runtime list key moved `l1-95` → `l1-97`. |

Side effect of E-Q6: the runtime of a via screen now restarts after the source screen has loaded the click target, so
late calls of the source screen are no longer recorded. MilestoneDetail and HostSurvey `calls.md` lost the "other" rows
`Get_HostSurveyStatus`, `Get_HasDocuments`, `Get_HasQRCode` (EventDetail calls); their own calls are unchanged. Other
via routes change only at their next capture.

`migration/capture-plan.json` is git-ignored: the plan changes are local only.

## Phase 2: exemptions (`migration/parity-exemptions.json`)

Edits made by a one-off exact-match Python script (each match asserted, format round trip checked first).

| Rule | Change | Decision |
|---|---|---|
| CAPTURE-MASKED-IMAGE-HOUSEHOLDCAROUSEL | `l1-1152_` → `l1-\d+_`, `b2-b3` → `b2-b4` | H-Q5 a |
| CAPTURE-MASKED-IMAGE-SMCAROUSEL, -SMCAROUSEL-GRID, CAPTURE-OFFSCREEN-SLIDE-ACTIONS-SKELETON-SMCAROUSEL, CAPTURE-OFFSCREEN-SLIDE-SKELETON-SMCAROUSEL, CAPTURE-MASKED-TEXT-CAROUSELTAG-SMCAROUSEL | `l1-1164_` → `l1-\d+_`, `b2-b1-b1` → `b2-b2-b1` (GRID and OFFSCREEN-SLIDE-SKELETON had the same old id; not in the triage list, they matched no row) | H-Q5 a |
| CAPTURE-MASKED-IMAGE-SUPPERMEETING | `l1-89_` → `l1-\d+_` | H-Q5 a |
| TAGS-MASKED-IMAGE-LOCALITYDETAILS | `l1-3598_`, `l1-3709_` → `l1-\d+_` | H-Q5 a |
| ignore CAPTURE-VIA-USERINFO-HOUSEHOLDCAROUSEL | `^b3-l1-\d+_\d-b2-b4-\$b1$` | H-Q5 a |
| MOCK-RELATIVE-DATES-EVENTDETAIL-DAYSELECTOR, CAPTURE-SKELETON-SHIMMER-PHASE-EVENTDETAIL, CAPTURE-MASKED-ROOM-INFO-MILESTONEDETAIL | `b1-b\d+-`, `b1-\$b\d+`, `l5-\d+` | E-Q3 a |
| new CAPTURE-RUNTIME-LIST-KEY-ARIA-CONTROLS-MILESTONEDETAIL | attr, default, TitleWrapper only, `aria-controls` with `l5-\d+_\d+-b8-Content` on both sides | E-Q4 a |
| ORBITLANDING-POPUP-TOP-AND-RADIO-CHECKED | pixel bound `^([4-7]\|0)\.\d\d%`: popup-sort now differs by 0.06 % at the two radios only (checked property); the popup top is equal. popup-filters and popup-filters-closed are clean, so the states stay `popup-(filters\|sort)` | E-Q5 a |
| CAPTURE-MASKED-COUNT-WIDTH-ASSEMBLEEVENTS-SHEET | `l1-95_` → `l1-\d+_` | D-Q3 b |
| VIA-BACK-MENUICON-MILESTONEDETAIL, CAPTURE-VIA-MASK-SHIFT-MILESTONEDETAIL-PIXELS, CAPTURE-VIA-MASK-SHIFT-HOSTSURVEY-PIXELS | states `^(default\|offline)$` (pixel rules: `(default\|offline).diff.png`, same bounds) | E-Q6 |
| new VIA-BACK-CONTENT-HEIGHT-ORBIT-OFFLINE | MilestoneDetail/HostSurvey offline, ContentWrapper/MainContentWrapper height `390×7[4-7]\d` only (header height of the via path) | E-Q6 |
| new CAPTURE-SKELETON-SHIMMER-PHASE-ORBIT-VIA-OFFLINE | MilestoneDetail/HostSurvey offline, `background-position` of the Skeleton_Loading items | E-Q6 |
| new CAPTURE-POPUP-SCROLL-CLASS-FLUSH-ORDER-DIRECTORY-ACTIONS | Profile, OneSchoolGlobalCarousel, HouseholdCarousel, default only, html `popup-disable-scroll` | WP4 Q2 b then a |

WP4 Q2 trace: on the three routes the TST DOM has the portals of `Directory_EntityDetailsActions` in this order: an open
NotesSheet popup (ShowPopup True since the TST change, `drift-triage-household.md` R1), then a closed ShareSheet popup
(Profile: NotesSheet, ShareSheet, NotesSheet, NotesSheet; HouseholdCarousel: 4 slide pairs, then NotesSheets).
SupperMeeting_Details loading has the same pair. The html class depends on which popup re-renders last after the last
model flush (`usePopupWidget.ts:36-58`): the cause of the existing rule. I added a sibling rule, not a wider one, so
SupperMeeting_Details keeps its loading-only scope.

WP4 Q1 (OneSchoolGlobalCarousel offline): scenario `captured` 52 differences, default scenario 14. The plan keeps the
default (note updated with both numbers).

## Parity (`route.py parity … --app http://localhost:5174`, after the last change)

| Route | Before (drift sweep) | After |
|---|---|---|
| MilestoneDetail | default 17; loading/offline not captured | default 0, loading 0, offline 0 |
| HostSurvey | default 0; loading/offline not captured | 0, 0, 0 |
| OrbitLanding | popup-sort 4, popup-filters-closed 1, others 0 | all 6 states 0 |
| MessageDetail | default 5 | default 4 (Q1), loading 0, offline 0 |
| AssembleEvents | default 89 | 0, 0, 0 |
| EventDetail | default 12, offline 9 | 0, 0, 0 |
| HouseholdCarousel | default 41, offline 329 | 0, 0, 0 |
| SupperMeeting_Carousel | default 281 | default 1 (Q2), loading 0, offline 0 |
| SupperMeeting_Details | default 110 | 0, 0, 0 |
| Locality_Details | tag-oneschoolglobal 22, tag-suppermeetings 20 | all 6 states 0 |
| Profile | default 37 (WP4 after) | 0, 0, 0 |
| OneSchoolGlobalCarousel | default 1, offline 14 | default 0, loading 0, offline 14 (Q3) |

Every changed or new rule is used (counts in the reports), except the two stale SMCAROUSEL rules (GRID, OFFSCREEN-SLIDE),
which match no row today.

Checks: `node --test` on `batch_capture.test.cjs` and `origin_normalize.test.cjs`: 5 pass. No app code, so no tsc,
eslint or vitest.

## What is left

- MessageDetail default 4 (structure 2, call 1, pixel 1), class C: the React mock knows only the old id, so the clone
  goes to MessageList. Q1.
- SupperMeeting_Carousel default 1 (class `ubt-skeleton-section` missing on slide 3 `b8-b1-Placeholder_LoadingSection`),
  class C: the off-screen slide's actions block is still loading on TST; the rule for b8 covers style and pseudo only. Q2.
- OneSchoolGlobalCarousel offline 14, class C: bookmark state of the default scenario (WP4 Q1) and 1 html
  `popup-disable-scroll`. Q3.

## Questions

- **Q1 (MessageDetail mock).** (a) Seed message 5982748 in `app/src/pages/MessageDetail/mocks.ts` with the new captured
  shape (`analysis/calls.md`; type ids 1/1/1, already read). This file belongs to the messages package. (b) Keep the
  old id and accept the 4 differences. Recommendation: (a). A `cloneQuery` cannot do it: `route_url` appends it to the
  captured route, so the id would be in the query twice.
- **Q2 (SupperMeeting_Carousel class row).** (a) New narrow rule: class `ubt-skeleton-section` on
  `#b3-l1-\d+_[12]-b2-b2-b1-b8-b1-Placeholder_LoadingSection`, same reason as CAPTURE-OFFSCREEN-SLIDE-ACTIONS-SKELETON-SMCAROUSEL.
  (b) Accept. Recommendation: (a).
- **Q3 (OneSchoolGlobalCarousel offline).** (a) Keep as a known C rest. (b) Add `offline` for this route only to the
  html-class rule (1 row) and leave the bookmark rows to WP4 Q1. Recommendation: (b).

## Files

- `.claude/skills/outsystems-screen-spec/scripts/batch_capture.cjs`, new `batch_capture.test.cjs`
- `migration/capture-plan.json` (git-ignored), `migration/parity-exemptions.json`
- new `migration/clarify/tools/probe_message_ids.cjs`
- `migration/screens/{MilestoneDetail,HostSurvey,OrbitLanding,MessageDetail,AssembleEvents}/capture|analysis` (re-captured),
  `parity/` of the 12 routes above
