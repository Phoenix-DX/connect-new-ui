# Flow report: Notes

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 1 (built: 1, Notes; not built: none) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/pages/Notes/**`, `app/src/platform/storage/localEntities/localNotes.ts`, KB pages (`pack/kb.md`), TST compiled code (`tst_source.py show Notes`, `NoteCard_Item`, `NoteCard_List`, `Notes_FilterSheet`, `UBTConnect.controller`), `migration/runtime-sources/OutSystemsReactWidgets.js`, `OutSystemsReactView.js` |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 104 · partial 2 · missing 0 · differs 0 · mock-only 2 · n/a 12 · unclear 1 (same as `checklist.json`, 121 rows).
- F1 (minor): the React emulation of the OSWidgets List `OnScrollEnding` differs from the runtime. React has no threshold, fires on an upward scroll, and guards with `Notes_Loading` instead of the handler-running flag.
- Q1: TST passes the screen record `Notes_Filter` to `Notes_FilterSheet` by reference. The sheet writes `Years` and `SortByNewest` on that record. TST can then send the selected years to `GetNotes`. React never sends years.
- React follows TST in 15 places where DEV differs (§6.1). Six KB rules disagree with DEV and TST (§6.2, K1 to K6).
- Status: a user can open My Notes, load more cards, filter by category pill and search. The user can sort with the filter sheet and open household, OneSchool Global and Supper Meeting cards. The user can add, edit or delete notes from a card. The year filter has no effect in React. Its effect on TST is open (Q1).

## 2. Screens

### 2.1 Notes

**Identity**

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| route, roles | `/UBTConnect/Notes`; Registered, UBTOne_User; no inputs | `MEMBER_ROUTE` (member, enforce); no inputs | match | pack `app.md` route index (Notes-001) |
| board | build, V3a, built | built | match | `migration/board.md:19` (Notes-002) |

**Data**

| Data source | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| screen variables | defaults; `PageSize` 20, `PageNumber` 1 | `INITIAL_NOTES_STATE` | match | `notesState.ts:54-72`; TST `Notes.js:57-62` (Notes-021, -022) |
| `GetNotes` (on demand) | `DataActionGetNotes`, refresh only | `fetchNoteCards` in `refreshGetNotes` | match | `useNotes.ts:122-142`; TST `Notes.js:680` (Notes-023, -024) |
| `GetNotes` server side | `Connect_Notes_CS.GetNotes` | contract handler | mock-only | `pages/Notes/mocks.ts:80-101` (Notes-025) |
| `Get_Note_DynamicPills` server side | `UBTConnect_Notes_MCS` server action | `ActionGet_NotePills_ByNoteCategoryIds` mock | mock-only | `api/note/repository.ts:36-42`; KB BR-C2UTL-042 (Notes-026) |
| `AddBookmark2`, `DeleteBookmarkByBookmarkId2`, `Get_UI_UpdateItems_UnreadCount_All`, 5 client variables | transitive, through shared blocks | shell and shared actions | n/a | owned by other flows (Notes-027 to -034). A fixture exists for `Get_UI_UpdateItems_UnreadCount_All`; pack `data.md` is wrong. |

**UI tree**

| Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| layout, title, search icon, bell | `Layout_MainPages_FixedTitle`, "My Notes", `If HeaderIsScrolled` icon, `App_NotificationIcon` | same | match | `NotesPage.tsx:41-51` (Notes-003 to -007) |
| search `Input` | MaxLength 50, "Search", debounce 200, rounded; TST `IsEnabled` = list length > 1 | same, with `IsEnabled` | match | `NotesPage.tsx:55-64`; TST `Notes.js:293-300` (Notes-008, -009) |
| `Filter_Pills`, `Horizontal_Filter_TagList`, `FilterSheet_Icon_Label` | options and arguments | same | match | `NotesPage.tsx:71-93` (Notes-014 to -016) |
| `NoteCard_List`, bottom bar, common layout | arguments and events | same | match | `NotesPage.tsx:99-109` (Notes-017, -018) |
| `If False` bottom sheet | dead true branch | else branch only | n/a | dead in the model (Notes-019) |
| `Notes_FilterSheet` | `In_FilterNotes`, `In_YearsOptions`, 3 events | same, rendered after OnInitialize | match | `NotesPage.tsx:111-120`; TST `Notes.js:582-583` (Notes-020) |

**Screen actions**

| Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| `Handler_SearchOnChange` | SearchTerm = CurrentString; the refresh node is `[DISABLED]` | assign only | match; the node is n/a | TST `Notes.js:1256-1257` (Notes-010, -011) |
| `Handler_SearchOnClear` | SearchTerm = ""; `Refresh_GetNotes` | same | match | TST `Notes.js:1222-1226` (Notes-012) |
| `Event_Submit` | TST calls `Refresh_GetNotes` directly | `run(refreshGetNotes)` | match | TST `Notes.js:342-350` (Notes-013) |
| OnInitialize | skeletons, `GetNotes_FilterYear` | skeleton state, `get_Note_DynamicFilter_YearOptions` | match | TST `Notes.js:1316-1351` (Notes-035 to -037) |
| OnReady | `ResetPillsVallues`, `Refresh_GetNotes` | effect after OnInitialize | match | `useNotes.ts:150-163` (Notes-041) |
| `GetNotesOnAfterFetch` | page 1 replaces, later pages append | same | match | TST `Notes.js:837-869` (Notes-044 to -046) |
| `Notes_CardListOnLoadMore` | last page not empty and length < MaxRecords | adds `!notesLoading` | partial | F1 (Notes-047 to -049) |
| `Handler_OnClickPill` | category, PageNumber 1, ResetPillsValue False, refresh | same | match | TST `Notes.js:903-918` (Notes-050) |
| `Handler_ApplyFilters` | TST: SortByNewest, HasFiltersApplied, refresh | same | match | TST `Notes.js:1416-1422` (Notes-051); Q1 |
| `Handler_OnClickNoteCardItem` | TST: Household → HouseholdDetails, OneSchoolGlobal → OneSchoolGlobalDetails, SupperMeeting → SupperMeeting_Details; other branches empty | `noteCardTarget` | match | TST `Notes.js:1455-1519` (Notes-056 to -065) |
| sheet events, header scroll, search icon | assigns; `ScrollTop` | same | match | `useNotes.ts:167-172,205-210` (Notes-052 to -055) |

**Validations**

| Validation | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| search input | MaxLength 50, not mandatory | same | match | `NotesPage.tsx:58-59` (Notes-009) |

**Business logic**

| Logic | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| `GetNotes_FilterYear` | TST: `Get_Note_DynamicFilter_YearOptions` | port of the TST action | match | `localNotes.ts:84-89,145-147`; KB BR-C2UTL-044 (Notes-038) |
| `Get_RecentYears` | DEV only | none | match | no hit in TST `UBTConnect.controller.js` (Notes-039) |
| `GetNotes_Pills` | "All" plus one pill per category; IsSelected from `In_SelectedPillId` | "All" selected, others not | match | TST calls it with no argument (`Notes.js:1294`), default "" (Notes-040, -042) |
| BR-UBTCON-031 to -040, -243 | KB rules of the flow | see the rows | match | Notes-111 to -121; six rules disagree with TST (§6.2) |

**Strings**

All Notes strings match TST. They are "My Notes", "Search", the skeleton texts and the three sheet labels. They include "No Notes found", "We were unable to find any Notes to" and "display.". Four DEV-only strings are absent on TST and in React (Notes-103, -104). The pack strings of other flows are n/a (Notes-107, -108).

## 3. Blocks of the flow

### 3.1 NoteCard_List

| Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs, events | `In_Notes`, `In_IsLoading`, `In_SearchString`; `OnClick_NoteCardItem`, `OnLoadMore` | same | match | `NoteCard_List.tsx:27-34` (Notes-079) |
| `CustomContainer` options | TST: Background Neutral0, padding H and Top Base | same | match | TST `NoteCard_List.js:171-186` (Notes-080) |
| skeleton, empty state, list | bookmark icon, "No Notes found", list classes | same | match | TST `NoteCard_List.js:229-315` (Notes-081 to -086) |
| `NoteCardList_OnScrollEnding` | OSWidgets List `onScrollEnding` | document scroll listener | partial | F1 (Notes-087) |
| `Handler_UpdateNoteCardsList`, input copy, lifecycle | remove the card; OnInitialize and OnReady empty | same | match | `NoteCard_List.tsx:36-65` (Notes-088 to -092) |

### 3.2 NoteCard_Item

| Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs, events, local | `NoteCardItem`, `In_SearchString`; `OnClickCardItem`, `UpdateNoteCardsList`; `IsAddNote` | same | match | `NoteCard_Item.tsx:25-39` (Notes-066) |
| `ItemCard_WithNotes` | TST: 6 arguments, no channel or date | same | match | TST `NoteCard_Item.js:160-175` (Notes-067) |
| `NoteListActions`, `ItemCardActions`, `NotesSheet` | preview only; add note only; sheet on `IsAddNote` | same | match | `NoteCard_Item.tsx:75-110` (Notes-068 to -071) |
| sheet open and close, notes changed, note deleted | assigns; last note removes the card | same | match | TST `NoteCard_Item.js:469-579` (Notes-072 to -078) |

### 3.3 Notes_FilterSheet

| Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs, events | `In_FilterNotes`, `In_YearsOptions`; 3 events | same | match | `Notes_FilterSheet.tsx:39-46` (Notes-093, -102) |
| `FilterSheet` options | sorting labels, year list; TST start filter empty | same | match | TST `Notes_FilterSheet.js:163-180` (Notes-094, -095) |
| `Initialize_FilterYearOptions` | TST: Id, DisplayText, isEnabled; Title, Order; no OnParametersChanged | same | match | TST `Notes_FilterSheet.js:270-350,522` (Notes-096 to -098) |
| `Handler_FilterSheetApplyFilters` | Years from the first flat list; sort from the filtered choice; trigger | same payload | match | TST `Notes_FilterSheet.js:386-406` (Notes-099 to -101) |
| `Filter_Notes = In_FilterNotes` | record reference: the writes reach the screen record | copy | unclear | Q1 (Notes-110) |

Blocks of other flows: `Layout_MainPages_FixedTitle`, `Icon`, `Input`, `CustomContainer`, `Horizontal_Filter_TagList`, `SkeletonSection`, `ItemCard_WithNotes` (UBTConnectLibrary); `NoteListActions`, `NotesSheet` (UBTConnect_Utils); `FilterSheet`, `FilterSheet_Icon_Label` (App_CommonBlocks_Filter); `App_NotificationIcon`, `BottomBarMenu`, `CommonUI_InsideLayout` (App_Common). Their use here matches; their internals are not checked here (shared).

## 4. Shared blocks and actions

| Item | React location | Verdict |
|---|---|---|
| `ScrollTop` | `lib` action, called with `.active-screen`, `instant` (`useNotes.ts:170-172`) | match (Notes-055) |
| `ToggleBookmarkItem_C2`, `AddBookmark2`, `DeleteBookmarkByBookmarkId2` | `api/bookmark/repository.ts` | not checked here (shared); not reachable from Notes |
| `Directory_Updates_RefreshBottomBarCount`, `Get_UI_UpdateItems_UnreadCount_All` | `api/update/repository.ts:70-73` | checked in the report of flow App_Common |
| `FilterSheet` rules BR-UBTCON-321 to -333 | `components/filter/FilterSheet/` | checked in the report of flow App_CommonBlocks_Filter |
| `App_NotificationIcon` BR-UBTCON-320, shell rules BR-UBTCON-310 to -318 | `NotificationIcon`, `BottomBar`, `CommonUiLayout` | checked in the reports of flows App_Common_Blocks and App_Common |

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix |
|---|---|---|---|---|---|
| F1 | minor | NoteCard_List `NoteCardList_OnScrollEnding`; Notes `Notes_CardListOnLoadMore` | The OSWidgets List fires `onScrollEnding` on a downward scroll only, inside `getInfiniteScrollThreshold` of the end, and not while the handler runs (`OutSystemsReactWidgets.js:1`, `tryFireScrollEndingEvent`). React fires when the list bottom reaches `window.innerHeight`, on any scroll, and blocks with `!notesLoading`. The next page starts later in React, also on an upward scroll. A pill tap or Apply during a page fetch behaves differently. | `app/src/pages/Notes/components/NoteCard_List.tsx:48-57`; `app/src/pages/Notes/hooks/notesState.ts:87-88` | Emulate `tryFireScrollEndingEvent`: the threshold, the downward-scroll check and a handler-running flag. Then remove `!notesLoading` from `canLoadMore`. |

## 6. DEV vs TST differences

### 6.1 DEV vs TST

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| OnInitialize restore check | `CheckRestored`, PageNumber = 1 | absent | TST | `Notes.js:1316-1351` |
| `GetNotes_FilterYear` | `Get_RecentYears(3)` | `Get_Note_DynamicFilter_YearOptions` | TST | `UBTConnect.controller.js:10115-10150` |
| `ResetPillsVallues` | `GetNotes_Pills(Notes_Filter.NoteCategoryId)` | no argument | TST | `Notes.js:1294` |
| `Handler_ApplyFilters` | also copies `Years` | `SortByNewest`, `HasFiltersApplied` only | TST | `Notes.js:1416-1420` |
| `Handler_OnClickNoteCardItem` | carousels, `FeedItemDetail`, `Household_Relations`, member message | three detail screens; other branches empty | TST | `Notes.js:1471-1519` |
| `OnClick_NoteCardItem` arguments | 4 (with `ObjectId2`, `HasDetailAccess`) | 2 | TST | `NoteCard_List.js:388`, `Notes.js:1455` |
| search `Input` `IsEnabled` | not in the dump | list length > 1 | TST | `Notes.js:295` |
| `Event_Submit` | `Handler_SearchOnSubmit` | `Refresh_GetNotes` directly | TST (same effect) | `Notes.js:342-350` |
| `ItemCard_WithNotes` arguments | also `In_ChannelLogo`, `In_ChannelName`, `In_PublishedAt` | absent | TST | `NoteCard_Item.js:160-175` |
| `NoteCard_List` `HeightOptions` | `If(In_Notes.Empty,…)` | absent | TST | `NoteCard_List.js:171-186` |
| `NoteCard_List` empty state | `BorderColor`, "No note added yet" | bookmark, "No Notes found" | TST | `NoteCard_List.js:229-315` |
| `Notes_FilterSheet` `In_StartFilter` | `Sort_ByNewest` | empty `Filter_Common` | TST | `Notes_FilterSheet.js:163-167` |
| year option fields | `isSelected`, `SelectedIds`, `SelectedNames` | `Id`, `DisplayText`, `isEnabled`, `Title`, `Order` | TST | `Notes_FilterSheet.js:294-316` |
| `Notes_FilterSheet` OnParametersChanged | calls `Initialize_FilterYearOptions` | null | TST | `Notes_FilterSheet.js:522` |
| `Get_RecentYears` | client action | absent | TST | no hit in `UBTConnect.controller.js` |

### 6.2 KB pages vs TST

| Id | KB text | TST evidence | File |
|---|---|---|---|
| K1 | BR-UBTCON-033: the year filter offers the literal years 2026, 2025, 2024; `notes.md` says "years: hard-coded" and `GetNotes_FilterYear` "not called" | OnInitialize calls `GetNotes_FilterYear`, which calls `Get_Note_DynamicFilter_YearOptions`; DEV calls `Get_RecentYears` | `Notes.js:1344-1351`; `UBTConnect.controller.js:10115-10150` |
| K2 | BR-UBTCON-031, -032 and `notes.md`: `PageSize` 6 | `PageSize` default 20; DEV 20 | `Notes.js:57-58` |
| K3 | BR-UBTCON-035: Apply "does not refetch" | `Handler_ApplyFilters` calls `Refresh_GetNotes` | `Notes.js:1422` |
| K4 | BR-UBTCON-036: the sheet writes the sort into its input, so the event keeps the old sort | the sheet sets `Filter_Notes.SortByNewest` before it triggers `ApplyFilters(Filter_Notes, …)` | `Notes_FilterSheet.js:386-406` |
| K5 | BR-UBTCON-037 and `notes.md`: only household cards open | OneSchool Global and Supper Meeting cards open their detail screens too | `Notes.js:1499-1517` |
| K6 | BR-UBTCON-038: the search box is not wired; all five handlers are null | `Event_ClearString`, `Event_OnChange` and `Event_Submit` are bound | `Notes.js:310-350,1208-1257` |

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | Does TST send the selected years (and sort) in `DataActionGetNotes` after Apply in the Notes filter sheet? Evidence: the screen passes its record `Notes_Filter` (`Notes.js:582`); the block model stores the input as is (`Notes_FilterSheet.js:72-73`); the runtime `setInputs` does not clone (`OutSystemsReactView.js:6-7`, `setInputs`); the sheet assigns `Filter_Notes = In_FilterNotes` and writes `Years` and `SortByNewest` on it (`Notes_FilterSheet.js:386-404`). | If the record is shared, the year filter works on TST and the React year filter has no effect: a visible behaviour difference. | A: record a read-only TST capture of `DataActionGetNotes` after Apply with one year, then align React. B: keep React as it is (years never sent) and record the decision. | A. The capture is a read; it settles the fact before a code change. |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 5 | 5 | 0 | 0 | 0 | 0 | 0 | 0 |
| data | 16 | 6 | 0 | 0 | 0 | 2 | 8 | 0 |
| ui | 25 | 24 | 0 | 0 | 0 | 0 | 1 | 0 |
| actions | 14 | 12 | 1 | 0 | 0 | 0 | 1 | 0 |
| validations | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 51 | 49 | 1 | 0 | 0 | 0 | 0 | 1 |
| strings | 9 | 7 | 0 | 0 | 0 | 0 | 2 | 0 |
| **total** | 121 | 104 | 2 | 0 | 0 | 2 | 12 | 1 |

## 9. Follow-up pass (2026-10-27)

Rows settled or sharpened after the user answers of 2026-10-27 and the TST files that `tst_source.py` reads. A row that stays `unclear` has a new question that names what settles it. Every row below has `verified: "live"`.

| Row | Old verdict | New verdict | Evidence |
|---|---|---|---|
| Notes-110 | `unclear` | `unclear` | Q1 answered A (user decision 2026-10-27, Notes Q1 (A)): a capture settles the fact. Capture (read-only TST session): open Notes, open the filter sheet, select one year, tap Apply; record the request body of DataActionGetNotes (Years and SortByNewest). Years present = the record is shared by reference and React must send the years (row becomes partial, finding); Years absent = match. |
