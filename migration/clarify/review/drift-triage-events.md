# Drift triage: group "events" (2026-10-29)

Routes: EventDetail, MilestoneDetail, OrbitLanding, LDM_EventDetail_V2, LDM_MyEvents_V2, MyEntertaining.
Source: parity reports of 2026-10-29 (`migration/screens/<S>/parity/*.json`) against the old ones at 62406f26 (all
clean on 2026-10-28). Brief: `../builds/drift-triage-brief.md`.

**Summary: 77 differences in 9 reports, 7 rows. A: 2 rows (22 diffs). B: 1 row (12). C: 4 rows (43). D: 0.**
One capture gap (G1, no parity diff). Clean: OrbitLanding default/loading/offline/popup-filters,
EventDetail loading, LDM_EventDetail_V2 loading/offline, LDM_MyEvents_V2 loading/offline, MyEntertaining loading.

Mapping to `drift-table-2026-10-29.md`: row `Content.DEPRECATED_AccordionItem` splits into R1 (EventDetail, attr 1),
R4 (MilestoneDetail, position 11) and R5 (MilestoneDetail, attr 6). `Layout.BaseLayout_UpdatedOSUI` is R1
(structure) and R6 (class, pseudo). The `calls` row of this group is R1. The `screen` row (pixel, reactContainer
attr) spreads over R1, R2, R3, R6, R7.

## Rows

| # | Block / cause | Routes, states, diffs | Class | Evidence (old → new) | Proposed fix (`app/src` or tool data) | Size | Risk | User decision |
|---|---|---|---|---|---|---|---|---|
| R1 | New block `UBTConnect_Utils.CW_Notes.ItemNotesSection` and data action `FetchEventNotes` | EventDetail default: structure 1 (`div.orbit-event-notes` missing), call 1 (`DataActionFetchEventNotes` not called), attr 1 (`aria-controls b1-b6-Content → b1-b5-Content`: TST block ids moved +1), pixel 1 (8.45%, over the 0-6% cap of `CAPTURE-VIA-MASK-SHIFT-EVENTDETAIL-PIXELS`). LDM_EventDetail_V2 default: structure 1 (`div.ldm-notes` missing), layout 3 (HostCard 380×94 → 380×65), call 1, pixel 1 (1.82%). Total 10. | A | Survey: `ItemNotesSection` 0 hits in `survey-UBTConnect-2026-10-13.json`, 39 in `survey-UBTConnect.json`; `DataActionFetchEventNotes` 0 → 2. Old analysis copies have no notes block and no call. New: `ScreenBlock_EventDetail.mvc.js:805-860` (container `orbit-event-notes`, category "Orbit Event", ActionBarOptions ShowAddNote/IsAddNoteEnabled True, In_Notes = EventNotes), `:1780-1798` (data action); `LDM_Blocks.EventDetail_HostCard.mvc.js:700-720` (container `ldm-notes`, category "LDM Event"). Response: `EventDetail/analysis/calls.md:40-75` (Total 0, empty list). Block ids: ListOfDaySelectors `b1-b7-$b1` → `b1-b8-$b1`, Skeleton_Loading `b1-$b14` → `b1-$b15`. React: no ItemNotesSection component (only the API types in `api/openapi.yaml:2159`). | New `components/note/ItemNotesSection/` (1117 lines pretty) built from parts that exist: `ItemCardActions/ItemCard_ActionBar.tsx`, `NotesSheet`, NoteListActions (pack `migration/blocks/UBTConnect_Utils.CW_Notes.NoteListActions.md`). EventDetail: add the container, the `EventNotes` variable, `FetchEventNotes` (refresh on On_NotesChanged/On_NoteDeleted) in `api/event/`, and renumber the block ids after `b1-$b3` (+1). LDM_EventDetail_V2: add `ldm-notes` in `pages/LDM_EventDetail_V2/components/EventDetail_HostCard.tsx` and the V2 data action (`.../ScreenBlock_EventDetail_V2/DataActionFetchEventNotes`, add to the API contract if missing). Mocks: both actions return Total 0 and an empty list, as captured. Touches only these 2 routes (no other TST user in the survey). | M | Medium: new shared block; id renumbering on EventDetail (see R4); Add Note / delete are user writes. | Yes, Q1 (mock behaviour of Add Note). The port itself follows I10-12. |
| R2 | `UBTConnectLibrary.Layouts.Layout_DetailPage` new input `In_IsHideTitle`; MyEntertaining hides the header; embedded app gets OnNavBack | MyEntertaining default and offline: structure 1 (`header.header` extra in build), position 1 (content offset 0,0 → 0,50), layout 3 (390×844 → 390×794), pixel 1 (98.84% / 5.83%) each. Total 12. | A | Old vs new sources (`MyEntertaining/analysis/sources/pretty/`): Layout_DetailPage new attr `In_IsHideTitle` default False (:51-56), header in `$if(in_IsHideTitleIn, false, ..., [], [header])` (:304, was always rendered at old :290). `MyEntertaining_Embedded.mvc.js:149` passes `In_IsHideTitle: true`, `:167` title placeholder empty (was "My Entertaining"), `:194-207` new OnNavBack handler; `MyEntertaining.mvc.js:164-177, 216-237` Handle_NavBack → navigate back. `Embedded_MyEntertaining.mvc.js:1442-1444` SDK callback `onNavBack` → `Action_OnNavBack`; new `ResumeListener` variable and `Action_SetResumeListener` (:53, :496-502, :823-851), new `Action_SetToken` (SetEntertainingTokenJS, :785-814). Handle_OpenMap drops the Label input (`MyEntertaining_Embedded.mvc.js:215, 338`). DOM: header count 1 → 0. Survey: one `In_IsHideTitle: true` use. | `components/layout/DetailLayout/DetailLayout.tsx`: optional `hideTitle` prop (default false), no `<header>` when true. 14 files use the layout; the default keeps them unchanged. `pages/MyEntertaining/components/MyEntertaining_Embedded.tsx`: pass `hideTitle`, no title. `Embedded_MyEntertaining.tsx` and `connect2Entertaining.ts`: add the `onNavBack` callback and event `OnNavBack` (page navigates back), the resume listener and SetToken actions; `onOnOpenMap` without label. | M | Medium: without OnNavBack the screen has no back control in the host header. Other routes: none (prop default false). | No (A, port). |
| R3 | Mock data of past LDM events (`LDM_Blocks_V2.EventCard_Info_V2`, `LDM_Blocks.EventDetail_SubSection`) | LDM_MyEvents_V2 default: structure 2 (`div.past-event-cont` extra in build), text 3 ("Allocation Pending" in TST, a fictional host name in React), layout 6 (133×23 → 154-165×23), pixel 1 (1.72%, over the 0.xx% cap of `DATA-GUEST-PHOTO-LDM-MYEVENTS-V2-PIXEL`). Total 12. | B | New DOM: 3 past events, all NameLocation = "Allocation Pending"; old DOM: 5 past events with masked host names. No TST code change: old vs new `EventCard_Info_V2`, `EventDetail_SubSection`, `ScreenBlock_MyEvents_V2` sources are equal. "Allocation Pending" is the server value of HostFullName (no literal in the TST sources); React logic is right (`EventCard_Info_V2.tsx:36-60`: NameLocation when EventHostId > 0). | `mocks/fictional/ldm.ts` `pastEventGroups()` (used only by `pages/LDM_MyEvents_V2/mocks.ts:35`): 3 past events, HostFullName "Allocation Pending" (system text, not personal data). Update the mocks.ts comment ("five past events") and the route test if it counts 5. | S | Low. Only LDM_MyEvents_V2. | Yes, Q2. |
| R4 | Exemptions keyed on ids that moved in the re-capture (`migration/parity-exemptions.json`) | EventDetail default: DaySelector text 3, layout 6, position 3 (12). EventDetail offline: Skeleton_Loading `background-position` 9. MilestoneDetail default: room-info icon position 11. Total 32. | C | Old report used `MOCK-RELATIVE-DATES-EVENTDETAIL-DAYSELECTOR` 12×, `CAPTURE-SKELETON-SHIMMER-PHASE-EVENTDETAIL` 9×, `CAPTURE-MASKED-ROOM-INFO-MILESTONEDETAIL` 11×; new report 0×. Their pathRegex pins `b1-b7-` (now `b1-b8-`, from R1), `b1-\$b14` (now `b1-$b15`, from R1) and `l5-142864` (now `l5-146053`, a runtime list key). The diff values still match each detailRegex and reason (day digits 23/24/25 vs relative mock dates; shimmer phase; masked room texts, e.g. `36,3 → 28,3`, `94,3 → 91,2`). Room-info DOM old = new. | Tool data only: generalize the three pathRegex values to `b1-b\d+-`, `b1-\$b\d+`, `l5-\d+`. No app code. Do it after R1 (React ids then move too). | S | Low: same accepted reasons, wider only on the block or list index. | Yes, Q3. |
| R5 | Runtime list key in `aria-controls` (`Content.DEPRECATED_AccordionItem` in AccommodationHost) | MilestoneDetail default: attr 6 (`b1-b5-l5-146053_N-b8-Content → b1-b5-l5-142864_N-b8-Content`). | C | The key is the OutSystems runtime record key of the capture session (old capture 142864, new 146053; TST code unchanged). React hard-codes it: `pages/MilestoneDetail/components/AccommodationHostView.tsx:166, 239` (also `components/ui/legacy/SectionExpandable` stories and `__captures__`). | Option (a): a narrow exemption for `aria-controls` with `l5-\d+` on MilestoneDetail. (b): change the constant to 146053 (breaks at the next capture). (c): `parity_check.cjs` normalizes runtime list keys in attribute values (skill script, all routes). | S | Low | Yes, Q4. |
| R6 | OrbitLanding `popup-sort` lost its steps in the re-capture | OrbitLanding popup-sort: attr 1 (`#reactContainer aria-hidden true → ∅`), class 1 (`fa-caret-up` → `fa-caret-down`), pseudo 1, pixel 1 (94.14%). Total 4. | C | New `analysis/states.json` has no `popup-sort` entry (old had steps `click .orbit-landing-filters.justify-content-flex-end`). `capture-plan.json` OrbitLanding lists only popup-filters (`_stepsNote`: popup-sort captured in a separate run on 2026-10-16 and merged). `dom/popup-sort.html` is byte-equal to the pre-recapture copy (stale). New report `steps: 0` (old 1): the build never opens the sort popup. | Capture plan: add the popup-sort step, re-capture OrbitLanding (read-only). No app code. | S | Low | Yes, Q5. |
| R7 | OrbitLanding new state `popup-filters-closed` | OrbitLanding popup-filters-closed: pixel 1 (6.42%, hotspots x 40-160, y 320-360). | C | Steps: open filters, then click `.popup-backdrop`. In both expected and build screenshots the popup stays open (TST does not close on a backdrop click, see the plan note). The difference is the known popup top (204 px) and radio state of `ORBITLANDING-POPUP-TOP-AND-RADIO-CHECKED`; its `states` regex `^popup-(filters|sort)$` does not include the new name. `popup-filters` is clean. | (a) add `filters-closed` to the states regex; (b) click the popup close icon instead of the backdrop and re-capture (with R6); (c) drop the state. | S | Low | Yes, Q5. |

## Capture gap G1: MilestoneDetail (and HostSurvey) loading and offline

- Fact: both routes have only `default`. This is not new. `MilestoneDetail/route-spec.md:17`: "Capture of the loading
  and offline states was not possible". `git log --all` has no loading or offline file for either route. The
  pre-recapture copy and the parity at 62406f26 also have `default` only.
- Cause: `batch_capture.cjs:111-121, 262-267`. The automatic states open the screen through `via` (OrbitLanding,
  pre click on Card_Event, then click on Card_Milestone). The hold or abort handler is set after the pre click and a
  fixed 2 s wait (:117), but before the final click. EventDetail still loads its milestone cards then, so its calls are
  held or aborted and the click target never shows.
- React: the skeleton and the error path are built from the code (`route-spec.md:70-74`), with no capture to check.

## Questions for the user

- **Q1 (R1): Add Note on EventDetail and LDM_EventDetail_V2 in the mock.** (a) Stateful, with the local notes store
  that the other notes screens use (`platform/storage/localEntities/localNotes.ts`). (b) Display only: the section
  shows, Add Note does nothing. Recommendation: (a), same behaviour as the other notes screens.
- **Q2 (R3): past LDM events mock.** (a) Follow the new capture: 3 past events, host "Allocation Pending".
  (b) Keep 5 events with fictional hosts and add a data exemption. Recommendation: (a), the mock keeps the captured
  shape.
- **Q3 (R4): update three accepted exemptions.** (a) Generalize the ids (`b1-b\d+-`, `b1-\$b\d+`, `l5-\d+`).
  (b) Pin the new ids (breaks at the next TST publish). Recommendation: (a), after R1.
- **Q4 (R5): runtime list key in aria-controls.** (a) Narrow exemption on MilestoneDetail. (b) Change the React
  constant to 146053. (c) Normalize runtime list keys in `parity_check.cjs` (skill script). Recommendation: (a) now,
  (c) as a later tool fix.
- **Q5 (R6, R7): OrbitLanding popup states.** (a) Add the popup-sort step to `capture-plan.json`, change the second
  step of popup-filters-closed to the close icon, and re-capture OrbitLanding once (read-only). (b) Restore the
  2026-10-16 popup-sort entry in `states.json` and extend the exemption states regex. (c) Drop popup-sort and
  popup-filters-closed. Recommendation: (a).
- **Q6 (G1): MilestoneDetail and HostSurvey loading/offline.** (a) Keep default only, as since 2026-10-16.
  (b) Restore the old loading and offline captures: not possible, none exist. (c) Change the capture path: in
  `openVia`, wait until the `via.click` target is visible before the hold or abort handler is set (small change in
  `batch_capture.cjs`), then capture loading and offline of both routes (read-only). Recommendation: (c) if you want
  evidence for the skeleton; otherwise (a).

## Order

R4 after R1 (the id change of R1 also moves the React ids). R6 and R7 share one OrbitLanding re-capture. Then
`route.py parity` on the 6 routes.
