# Survey drift check (2026-10-28)

The survey of 2026-10-13 (`capture/survey-UBTConnect.json`) is the main source of the TST compiled code. The build
wave found one block that changed after it (OrbitLanding, PD13). This check fetched the live TST code again and
compared it with the survey and with `migration/runtime-sources/`.

## Method

- Read-only static GET without a session, under the standing approval for TST manifest files
  (`migration/knowledge/runtime-sources.md`). No data call and no screen service was fetched.
- The order: `moduleinfo`, then every `.mvc.js` file of the app modules (the filter of `survey.js`).
- Then the 155 files of `migration/runtime-sources/` that are in the live manifest.
- Comparison after the BOM and CRLF are normalised. A second pass masks the ids in `OutSystemsDebugger.*("…")`
  calls: OutSystems makes new ids at each publish, so those lines do not change the behaviour.
- `Last-Modified` of the live files: 2026-10-27 06:46 to 06:48 GMT. The manifest version is 15682 (15568 on
  2026-10-15). So TST was published again after 2026-10-15, last on 2026-10-27.

## Result

| Item | Count |
|---|---|
| Survey files, old and live | 640 and 641 |
| Same text | 286 |
| Only debugger ids changed | 255 |
| Logic changed | 79 |
| Files added on TST | 21 |
| Files removed from TST | 20 |
| Runtime-sources files changed (of 155) | 19 |
| Shell sources changed (of 16) | 1 (`UBTConnect.App_Common.controller.js`) |
| Manifest entries added and removed | 83 and 32 |

## Routes of the React app

The count below is per React route (64). It adds the changed lines of the screen file and of the blocks under it.
The shared blocks after the table are not in the count. Data: `survey-drift/routes-closure.txt` (the block tree
comes from `migration/survey/screens.json`).

| Drift | Routes |
|---|---|
| Screen removed on TST | MyBookmarks, BookmarksByGroup. TST removed the module Connect2_MyBookmarks_MUI and the four Legacy_MyBookmarks screens; its new screen is Bookmarks, which is not a React route |
| Large (900 lines or more) | OneSchoolGlobalDetails (2933), Notifications (2380), Notes (1696), Locality_Details (1662), HouseholdCarousel (1614), SupperMeeting_Carousel (1614), Profile (1528), HouseholdDetails (1526), SupperMeeting_Details (1505), Household_Relations (972), AssembleDetail (949) |
| Medium (100 to 899 lines) | EventDetail (545), Search (507), HomeFeed (393), OrbitLanding (373), MyEntertaining (174), CountryList (161), FeedItemDetail (110) |
| Small (under 100 lines) | Updates_SingleList, OrbitAdminLanding, LDM_MyEvents_V2, MessageDetail, CountryDetails, OrbitAdminEventDetail, MilestoneDetail, ContactUsDetails, Menu |
| Shared blocks only | the other 35 routes |

- Most large counts come from blocks of the notes and entity actions: Directory_EntityDetailsActions (505 lines),
  NotesSheet (303), AddNote (249), Note_Item (232), ItemCard_WithNotes (342). TST added a notes section to the
  detail screens (new block UBTConnect_Utils.CW_Notes.ItemNotesSection).
- Notifications: NotificationsList (742 lines) and the new screen NotificationDetails.
- OneSchoolGlobalDetails: the screen lost 1375 lines; its content moved to the new blocks OneSchoolGlobalDetails_Block
  and OneSchoolGlobalCarousel.
- Shared blocks: IconSVG adds new icons only; BottomBarMenu removes the old bookmark flag checks
  (GetHasNewBookmarks); BottomSheet adds the input In_TouchActionNoneFix; Layout_DetailPage, LazyImage,
  UBT_LazyImage, InputCounter, Input and StaticInput have small changes.
- Map and Bookmarks changed a lot too (5661 and 362 lines in the screen file), but they are not React routes.

## Screens added on TST

NotificationDetails, PassportScan, OrbitAdminMilestones, OrbitAdminMilestoneDetail and OneSchoolGlobalCarousel. They
are not React routes. The scope decision for them belongs to the user.

## Runtime sources: changed actions

- `UBTConnect.controller.js`: 14 actions changed, for example ShowCommunicationExceptionMessage, AddBookmark,
  AddBookmark2, ToggleBookmarkItem_C2, GetNotes_FilterYear and Sync_Info_GetMain. Added: Get_FormattedDistance,
  Get_RecentYears. Removed: GetBookmarkType_FromEntity.
- `UBTConnect_Utils.controller.js`: App_Subscription_NavigateToUpgrade and OpenInApp_OpenExternalLink.
- `Connect2_LegacyShared.controller.js`: the server action GetUserInformation.
- `UBTConnect_Notes_MCS.controller.js`: CreateOrUpdate_LocalNote, Delete_LocalNoteById and Delete_LocalNoteByNoteId
  are replaced by Create_LocalNote, Update_LocalNote and Delete_LocalNote.
- `UBTConnect_Bookmarks_MCS.controller.js`: 5 actions changed, for example Create_LocalBookmark.
- Models: `UBTConnect.model.js` has 13 structures added and 189 removed; `Connect2_OrbitMobile_MUI.model.js` has 102
  added. Details: `survey-drift/runtime-sources-actions.json`.

## Static entities (moduleinfo)

- Connect2_OrbitMobile_BL: milestone types for the admin flow (meeting-admin, accommodation-admin and four more);
  check-in statuses: AlreadyCheckedIn removed; CheckedIn, AlreadyCheckedInForMilestone, CheckedInForOtherMilestone,
  NotAllocated, NotInvited and Moved added.
- UBTConnect_Bookmarks_MCS: the identifier "OneSchoolGlobal" is now "OneSchool Global".
- UBTConnectLibrary: new icons (SVG_Community*, arrows, two icon sizes). Connect_CommonEntities_DB:
  directory-household-gallery. Comms_CS and Connect2_MyBookmarks_BL are gone.
- `migration/knowledge/static-entities-tst.json` (from 2026-10-15) is out of date for these entities. Two React
  constants have the value "OneSchoolGlobal" (`app/src/lib/ubtConnect/staticEntities.ts:157`,
  `app/src/pages/HomeFeed/staticEntities.ts:35`): check which entity they belong to.

## Clarify rows at risk

`tools/mark_stale.py` marks the checklist rows that rest on changed or removed code (rule: user, 2026-10-28). Data:
`survey-drift/impact.txt` (the count per flow and the row ids). An earlier count (574 rows) came from a scratchpad
script that is lost; `impact.txt` held only its error message until the tool replaced it.

| Reason | Level | Rows |
|---|---|---|
| A text field cites a file that TST removed | strong | 120 |
| It cites changed lines (old lines compared with the live file, debugger ids masked) | strong | 166 |
| It cites a changed file without line numbers, or with lines that cannot be mapped | strong | 137 |
| It cites a changed file, but the cited lines did not change | weak | 525 |
| Its screen names a changed screen or block, and no text field cites that file | weak | 1148 |

A row can have more than one reason. In total, 1885 of 5412 rows are stale, and 422 of them are strong. The verdicts do
not change. `INDEX.md` §1 has the column "Stale (strong)". A row that is judged again against the live code gets
`rechecked` and loses its mark (item 2, 2026-10-28: 13 rows).

| Flow | Stale | Strong | Rows |
|---|---|---|---|
| Directory_Household | 166 | 2 | 241 |
| App_CommonBlocks_Filter | 165 | 10 | 213 |
| Directory_Locality | 155 | 15 | 280 |
| Directory_Search | 131 | 7 | 146 |
| Directory_CommonBlocks | 124 | 0 | 151 |
| Bookmarks | 122 | 117 | 123 |
| Legacy_OrbitEventsFlow | 121 | 50 | 518 |
| Notes | 121 | 3 | 121 |
| App_Notifications | 105 | 48 | 120 |
| Home | 102 | 14 | 148 |
| _libraries | 101 | 25 | 245 |
| _shared | 91 | 5 | 194 |
| Legacy_OrbitAdminFlow | 67 | 59 | 109 |
| 32 other flows (22 with stale rows) | 314 | 67 | 2803 |

Notes, Notifications and OneSchoolGlobalDetails changed a lot, but their rows cite the screen names more than the
files. Most of their rows are weak because of that. Read those reports again first.

## What it means

- The parity captures, the survey, the specs and the clarify verdicts were made against an older TST.
- TST still changes. A verdict is valid only for the TST version that it read.
- 2 React routes (MyBookmarks, BookmarksByGroup) copy screens that TST no longer has.

## Files

- Live copies (not committed, large, in `.gitignore`): `capture/survey-UBTConnect.json` (the live survey since the
  switch; it was `capture/survey-UBTConnect-2026-10-28.json`) and `capture/runtime-sources-live-2026-10-28/`.
- The survey of 2026-10-13: `capture/survey-UBTConnect-2026-10-13.json` (committed).
- Live moduleinfo: `migration/runtime-sources/moduleinfo.json` (it was `moduleinfo-2026-10-28.json`).
- Data of this check: `migration/clarify/review/survey-drift/` (survey-diff, logic-changes, runtime-sources-actions,
  runtime-sources-result, shell-sources-result, routes-closure, impact).

## Decision for the user (decided 2026-10-28)

Decided (user, 2026-10-28): (c). The live survey is not committed. The stale rule is "all rows, in two levels" (see
"Clarify rows at risk"). The four steps are done (section "Source switch done" below).

The options as asked:

How to use the live code. The user asked why (c) and not (a); the answer is in the session of 2026-10-28.

- (a) Update everything now: the live code becomes the source of truth, the affected flows are judged again and the
  affected routes are captured again. It is the most correct. It also costs the most: an estimate of 5 to 8 M tokens
  for the judges, then the captures and the builds. The next TST publish can make it stale again.
- (b) Keep the code of 2026-10-13 as a fixed baseline and keep this report as a list for later. It is the cheapest;
  the React app moves away from TST.
- (c) Switch the source of truth now and mark the affected checklist rows "stale". Judge, capture and build each route
  again only when the user orders it. Recommended (orchestrator).

"Switch the source of truth" means four mechanical steps, with no change to the React code:
1. Keep the old survey as `capture/survey-UBTConnect-2026-10-13.json`; the live copy becomes
   `capture/survey-UBTConnect.json`.
2. Replace the 19 changed runtime sources and the changed shell source with the live copies. Git keeps the old ones.
3. Put the live moduleinfo in place and run `migration/tools/static_entities.py` again.
4. Mark "stale" the checklist rows that cite a changed file.

Not changed by the switch: the React code, the TST DOM captures (the parity baselines) and the clarify verdicts.
`migration/survey/` (routes.md, screens.json) is not generated again without the user's agreement, because some files
have manual columns. The live survey is 25 MB: committing it makes the repository larger.

Separate scope questions for later: the 5 new TST screens and the 2 React routes whose TST screens are removed.

## Source switch done (2026-10-28)

1. `git mv` kept the survey of 2026-10-13 as `capture/survey-UBTConnect-2026-10-13.json` (a rename, no new blob). The
   live copy is `capture/survey-UBTConnect.json`, which is now in `.gitignore`.
2. The 19 changed runtime sources and `migration/shell/sources/UBTConnect.App_Common.controller.js` are the live
   copies. The two MyBookmarks controllers that TST removed stay as evidence.
3. The live moduleinfo is `migration/runtime-sources/moduleinfo.json`. `migration/tools/static_entities.py` now reads
   the record names from the live `migration/runtime-sources/*.model.js` first. Result: 513 entity views; the changes
   are in `migration/knowledge/static-entities.md` (section of 2026-10-28).
4. `migration/clarify/tools/mark_stale.py` marked 1885 rows (422 strong). `collect.py` shows them in `INDEX.md` §1.

One React constant differs from the live value: `app/src/lib/ubtConnect/staticEntities.ts:157` (bookmarkCategory
OneSchoolGlobal; TST "OneSchool Global"). The HomeFeed constant (`app/src/pages/HomeFeed/staticEntities.ts:35`)
belongs to Connect_Services, which did not change.

Not changed: the React code, the parity captures, the clarify verdicts and `migration/survey/`. The tools that read
`capture/survey-UBTConnect.json` (`tst_source.py`, `flow_pack.py`, `block_pack.py`, `contract_gen.py`, `css_sets.py`,
`sitemap.py`, `build_dashboard.py`) read the live survey from now on.

Open for later (the user decides):
- the scope of the 5 new TST screens;
- what to do with the React routes MyBookmarks and BookmarksByGroup;
- the React constant of bookmarkCategory;
- a new judge of the stale rows, one route at a time.
