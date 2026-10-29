# TST publish 2: code diff against React (2026-10-29)

Scope: the TST publish found on 2026-10-29 (moduleinfo `versionToken` `kFqrH…` → `+2kUjg…`,
`drift-decisions-2026-10-29.md` § TST publish 2). Read-only analysis. No code change, no TST access, no MCP.

## Method

- Old code: the survey of 2026-10-28 (collected 2026-10-27 23:53 UTC). New code: `capture/survey-UBTConnect.json`
  (2026-10-29 12:16 UTC). Both have 641 scripts.
- Normalisation: BOM, CRLF and the ids in `OutSystemsDebugger.*("…")`. To read the diffs, a second pass also masks
  `uuid` values and renumbered names.
- Files that are not in the survey: the re-capture copies of 2026-10-29 (`migration/screens/*/analysis/sources/raw/`)
  against `capture/runtime-sources-live-2026-10-28/` and `migration/runtime-sources/`.
- Stylesheets: each `/* ==== /UBTConnect/css/<file> ==== */` part of the 2026-10-29 `analysis/styles/bundle.css`
  files against `app/public/UBTConnect/css/<file>`.
- React counterparts: `@origin` comments and block names in `app/src`.
- Limit: the new moduleinfo (with the URL hashes) is not on disk, and the new survey manifest has paths only. So this
  report rebuilds the list of changed files from the code, not from the hashes.

## Summary

| Item | Count |
|---|---|
| Changed manifest entries on TST | 50 changed, 1 added |
| Identified in this report | 38 changed + 1 added |
| Survey scripts with a logic change | 22 |
| Survey scripts with only new debugger ids | 13 |
| Controllers changed (re-capture copies) | 3 |
| Stylesheet added | 1 (`Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_HostCard.css`) |
| Stylesheets in the 2026-10-29 captures | 42; all are equal to the React copies |
| Verdict 1: already in React | 12 files |
| Verdict 2: gap to port | 9 files (3 of them only in part), in 4 gap groups |
| Verdict 3: no React impact | 18 files |
| Verdict 4: unclear | 12 manifest entries that this report cannot identify |

## Table

Verdicts: 1 = already in React, 2 = gap, 3 = no React impact, 4 = unclear. `S` = survey key line (new survey).

| # | TST file | Change | React | Verdict |
|---|---|---|---|---|
| 1 | `Connect2_Assemble_MUI.Assemble.AssembleSummaryCard` | Date text now from `UBTConnectLibrary.FormatDateForAssembleMeetings`. The expression is the same as the removed `GetAssembleEventSummaryDateTimeString` | `components/assemble/AssembleSummaryCard/AssembleSummaryCard.tsx:111` | 1 (same output) |
| 2 | `Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_HostCard` | Inputs `EventId`, `EventNotes`, `EventHostId`; container `ldm-notes` with ItemNotesSection (category "LDM Event", ItemId `<HostId>:<EventId>`, Add Note on); NotesChanged and NoteDeleted events; new stylesheet | `pages/LDM_EventDetail_V2/components/EventDetail_HostCard.tsx:174-176`, `hooks/useLdmEventDetail.ts:85-86, 301` | 1 (WP6) |
| 3 | `…LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2` | `FetchEventNotes` data action, `EventNotes`, OnAfterFetch, `Handler_OnNotesChanged`, `HandlerOn_NoteDeleted` (removes the note, Total = length) | `pages/LDM_EventDetail_V2/hooks/useLdmEventDetail.ts`, `ldmEventDetailState.ts:40` | 1 (WP6) |
| 4 | `…LDM_ScreenBlocks.ScreenBlock_EventDetail` (V1) | Same diff as row 3 | No React route (only V2) | 3 |
| 5 | `…Orbit_ScreenBlocks.ScreenBlock_EventDetail` | ItemNotesSection: `In_ItemId` is text, `In_ItemType` "Orbit Event" removed | `pages/EventDetail/components/EventDetailView.tsx:234-235` | 1 |
| 6 | `UBTConnect.Bookmarks.Bookmarks` | Search input (MaxLength 50, debounce 200, `InitalString` = filter SearchText), OnChange/Submit/Clear handlers, search icon = ScrollTop; OnInitialize sets Bookmarks_Loading; card click: the carousels get the filtered list (OSG, Household), the direct detail links are removed; new GetBookmarks signature | `pages/Bookmarks/BookmarksPage.tsx:39-57`, `hooks/bookmarksState.ts:103, 136`. `InitalString` is missing | 2 in part (G4) |
| 7 | `UBTConnect.Bookmarks.Bookmarks_Card_Item` | Gives `In_EventStartDateTime` / `In_EventEndDateTime` to ItemCard_WithNotes | `pages/Bookmarks/components/Bookmarks_Card_Item.tsx` (no dates) | 2 (G1) |
| 8 | `UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions` | `In_LocalityId`; `FetchNoteId` and NotesSheet ItemId = `<LocalityId>:<EntityId>` for an interchange | `containers/EntityDetailsActions/useEntityDetailsActions.ts:161, 290-293`, `entityDetailsActionsState.ts:66` | 1 (WP4) |
| 9 | `UBTConnect.Directory_Household.HouseholdDetails_Block` | KebabButtonMenu `In_DisableShare` = not GetHouseholdData.IsVisible | `components/household/HouseholdTags/HouseholdTags.tsx:75` | 1 (drift-FU 4) |
| 10 | `UBTConnect.Directory_Interchange.Directory_Interchange_StatisticsList` | New input `In_InterchangeLocalityId`, given as `In_LocalityId` to Directory_EntityDetailsActions (S:317-342) | `pages/Locality_Details/components/Directory_Interchange_StatisticsList.tsx:76-83` (no `inLocalityId`) | 2 (G2) |
| 11 | `UBTConnect.Directory_Locality.Locality_Interchange` | Gives `In_InterchangeLocalityId` to the StatisticsList | `pages/Locality_Details/components/Locality_Interchange.tsx:15-16` (not given down) | 2 (G2) |
| 12 | `UBTConnect.Map.Map` | Bookmarks list on the map, "see all" per type, household visibility texts, bookmark toggle from the detail sheet | No React route | 3 |
| 13 | `UBTConnect.Map.Map_ExploreList_EmptyState` | Title and body are inputs | No React route | 3 |
| 14 | `UBTConnect.Map.Map_ExploreList_Section` | `In_Prefix`, header class `ubt-map-sheet-see-more-header` | No React route | 3 |
| 15 | `UBTConnect.Map.Map_PoIPreview` | OnChange_Bookmark raises `Event_ToggleBookmark` | No React route | 3 |
| 16 | `UBTConnect.Notes.NoteCard_Item` | Gives the event dates of `NoteCardContent` to ItemCard_WithNotes | `pages/Notes/components/NoteCard_Item.tsx` (no dates) | 2 (G1) |
| 17 | `UBTConnect.Notes.Notes` | `InitalString` = SearchTerm; OnInitialize sets Notes_Loading; card click: households filtered by HasDetailAccess, Assemble → AssembleDetail, Interchange → Locality_Details (`Notes_InterchangeId_ExtractId`), OSG filtered, no access → `Handler_OnClickUnauthorizedObject` ("This <label> is no longer available.") | `pages/Notes/NotesPage.tsx:60`, `hooks/notesState.ts:82, 145, 155, 167, 184`. The Interchange branch is missing (comment `notesState.ts:128-130`) | 2 in part (G2) |
| 18 | `UBTConnectLibrary.ConnectCorePatterns.KebabButtonMenu` | `In_DisableShare`; HasShare = not In_DisableShare | `components/ui/KebabButtonMenu/KebabButtonMenu.tsx:13, 38` | 1 (WP3) |
| 19 | `UBTConnectLibrary.ConnectPatterns.ItemCard_WithNotes` | Inputs `In_EventStartDateTime`, `In_EventEndDateTime`; new If `IsEventTimePresent` (both dates not null): CustomText with clock icon (extraSmall), neutral7, font extraSmall, click = OnClickItemCard; text = FormatDateForAssembleMeetings(Start, IsAllDay) with IsAllDay = Start at 00:00:00 and DiffSeconds(Start, End) = 86400 (S:1036) | `components/note/ItemCardWithNotes/ItemCard_WithNotes.tsx:40-50` (no date props) | 2 (G1) |
| 20 | `UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining` | Token kept in `window.__ubtEntertainingToken` (`Action_SetToken`), SDK `getIdToken` reads it; `resume` / `visibilitychange` listener calls Action_RefreshToken; listeners removed on destroy | `pages/MyEntertaining/components/Embedded_MyEntertaining.tsx:133, 178-179` | 1 (WP3) |
| 21 | `UBTConnect_Utils.CW_Notes.ItemNotesSection` | `In_ItemId` is text, `In_ItemType` removed; the action bar is in a CustomContainer (vertical padding small, top border small neutral2); share uses the text id | `containers/ItemNotesSection/ItemNotesSection.tsx:18, 79-87` | 1 |
| 22 | `UBTConnect_Utils.CW_Share.ShareSheet` | `Action_SubmitShare` has two new handlers: CommunicationError and CommunicationException set IsSubmitting = False and raise CommunicationError (S:3168-3199). Order: NotRegistered, CommunicationError, CommunicationException, AllExceptions | `containers/ShareSheet/useShareSheet.ts:128-142` (only NotRegistered, system and "Share failed" message) | 2 (G3) |
| 23 | 13 scripts: `LDM_Blocks.EventCard_Guests`, `LDM_Blocks.EventDetail_ListItem`, `LDM_Blocks.MyTimeline`, `LDM_ScreenBlocks.ScreenBlock_Event_Email`, `LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2`, `Orbit_ScreenBlocks.ScreenBlock_ContactForm`, `HouseholdRelations_Block`, `HouseholdDetails_Members_Block`, `OneSchoolGlobalDetails_Block`, `OneSchoolGlobal_List`, `Directory_Search.ScreenBlock_Search`, `SupperMeeting_DetailsBlock`, `zDEV_…CommunityBusinessCard_Content_Block` | Only new debugger ids | - | 3 |
| 24 | `Connect2_Assemble_MUI.controller.js` | `GetAssembleEventSummaryDateTimeString` removed (moved to the library, row 25) | `AssembleSummaryCard.tsx:11, 111` uses the same logic | 1 |
| 25 | `UBTConnectLibrary.controller.js` | `FormatDateForAssembleMeetings` added: "h:mm tt on " or "On ", then "Lord's Day" or the day name, then ", d MMMM yyyy" | Same as row 24; G1 uses it | 1 |
| 26 | `UBTConnect.controller.js` | `Notes_InterchangeId_ComposeId` and `Notes_InterchangeId_ExtractId` added (ExtractId: empty or 1 part → LocalityId = the id; else part 0 and part 1, raw :15208); Map: `Get_Cacheable_MapEntities` / `MapHouseholds` now ignore non-system errors, `Get_FormattedDistance` uses a no-break space | ComposeId: `entityDetailsActionsState.ts:66`. ExtractId: missing (G2). Map: no route | 2 in part (G2) |
| 27 | `…LDM_Blocks.EventDetail_HostCard.css` (added) | New stylesheet | `app/public/UBTConnect/css/` copy is equal to the 2026-10-29 capture | 1 |
| 28 | 12 other manifest entries | Not identified (no new hash list on disk). Likely model.js, languageResources or stylesheets of blocks that no capture loads | - | 4 |

The 42 stylesheets in the 2026-10-29 bundles are equal to `app/public/UBTConnect/css/`. Eleven of them differ from
`HEAD`: the drift wave refreshed or added them (`knowledge/runtime-sources.md`). They are in the working tree and are
not committed yet.

## Gap groups

### G1 ItemCard_WithNotes event time row (Bookmarks, Notes) — size M

- TST: rows 7, 16, 19. Source: `migration/screens/Bookmarks/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.ItemCard_WithNotes.mvc.js`.
- Fix: add `inEventStartDateTime` and `inEventEndDateTime` to `ItemCard_WithNotes`. Show the CustomText row only when
  both dates are not null. Text = `getAssembleEventSummaryDateTimeString(start, isAllDay)` (same expression as
  FormatDateForAssembleMeetings); move it to a library helper with the TST name, and AssembleSummaryCard uses it too.
- Data: `api/bookmark/bookmarkCards.ts:23-24` has `EventStartDate` / `EventEndDate`. The note card content has no
  event dates: add them to `api/note` types, mapper and `openapi.yaml`.
- Tests: null dates (no row), all-day, timed, Sunday ("Lord's Day"), click.
- Parity: no 2026-10-29 capture shows the row (Bookmarks and Notes DOM have no time text). See Q2.

### G2 Interchange notes id (Locality_Details, Notes) — size S

- TST: rows 10, 11, 17, 26.
- Fix: `Directory_Interchange_StatisticsList` gets `inInterchangeLocalityId` and gives `inLocalityId` to
  `EntityDetailsActionsContainer`; `Locality_Interchange` gives its `inInterchangeLocalityId` down. Port
  `notes_InterchangeId_ExtractId` next to `notes_InterchangeId_ComposeId`. Add the Interchange branch in
  `noteCardTarget`: Locality_Details with LocalityId = ExtractId(ObjectId).LocalityId.
- Mock: interchange notes use the id `<LocalityId>:<InterchangeLocalityId>`.
- This closes the deferred Notes Q9 (the ExtractId code was missing; it is now in the re-capture copies of
  `UBTConnect.controller.js`).

### G3 ShareSheet submit errors (all share entry points) — size S

- TST: row 22.
- Fix: in `submitShare`, a CommunicationError user exception or a communication exception goes to the flow handler as
  CommunicationError (not the "Share failed" message). Keep the TST order of the handlers. Unit tests for each handler.
- See Q1 for IsSubmitting.

### G4 Bookmarks search InitalString — size S

- TST: row 6 (`rec.initalStringAttr = Bookmarks_Filter.SearchText`).
- Fix: `BookmarksPage.tsx` Input options get `InitalString: v.bookmarksFilter.searchText`, as `NotesPage.tsx:60`.

### Labels only (no behaviour)

- WP3, WP4, WP6 and drift-FU notes, and comments such as `KebabButtonMenu.tsx:12` and
  `Embedded_MyEntertaining.tsx:55, 70`, say "live TST of 2026-10-27". The code they cite is the publish-2 code.
- `bookmarksState.ts:140-141` describes the old duplicate test (removed in publish 2); the behaviour is the same.
- `AssembleSummaryCard.tsx:35` names the removed action.

## Drift-wave ports and the 2026-10-28 code

- The re-capture copies of the 22 changed scripts (15 routes) are all equal to the new survey. Only the retired route
  BookmarksByGroup has an older ShareSheet. So WP3, WP4, WP6 and drift-FU, which read these copies, use the publish-2
  code. They miss no publish-2 change in the blocks they ported.
- The gaps are in blocks that the drift wave did not touch: ItemCard_WithNotes, Bookmarks_Card_Item, NoteCard_Item,
  Directory_Interchange_StatisticsList, Locality_Interchange, ShareSheet. Also the Notes Interchange branch (deferred)
  and the Bookmarks `InitalString` (item 10 port).
- The open fact of `drift-decisions-2026-10-29.md` ("where TST formats the Assemble summary date now") has an answer:
  `UBTConnectLibrary.FormatDateForAssembleMeetings`, same expression (`migration/screens/AssembleEvents/analysis/sources/raw/UBTConnectLibrary.controller.js`).

## Questions for the user

| Id | Question | Options | Recommendation |
|---|---|---|---|
| P2-Q1 | ShareSheet IsSubmitting: TST disables Send while a share runs (`IsDisabled = SelectedMembers.IsEmpty or IsSubmitting`, S:1759). The old code had it too; React does not (`ShareSheetContainer.tsx:144`, README says "no visible effect") | a: port it with G3; b: only the new error handlers; c: defer | a: one flag in the same files, TST 1:1 |
| P2-Q2 | G1 mock data | a: keep null event dates in the Bookmarks and Notes mocks (row hidden, as in all TST captures); unit tests and a story show the row; b: add dates to one or two fictional event cards (parity differences on default) | a |
| P2-Q3 | The 12 entries not identified | a: one static GET of the live moduleinfo (standing approval for TST manifest files, logged in `knowledge/runtime-sources.md`), then diff those files; b: accept this list | a |
| P2-Q4 | Labels only | a: fix the comments when G1-G4 touch these files; b: leave them | a |

Fix order: G4, G2, G3 (S), then G1 (M). Gate per change scope: unit tests, then parity for Bookmarks, Notes,
Locality_Details, EventDetail, LDM_EventDetail_V2 and one share route.
