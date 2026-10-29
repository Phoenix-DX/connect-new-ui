# Item 10: Notes drift to the live TST code (2026-10-29)

User decision Notes Q6 (a), 2026-10-29. Old TST code: capture analysis of 2026-10-14 (scratchpad copy). New TST code:
`migration/screens/Notes/analysis/sources/pretty/` (capture of 2026-10-29) and `migration/runtime-sources/` (2026-10-28).
`Notes.mvc.js`, `NoteCard_List.mvc.js` and `Notes_FilterSheet.mvc.js` below are the live pretty files.

## Differences from TST, cause, and what changed

| # | TST difference | Cause (old → new TST code) | Change |
|---|---|---|---|
| 1 | Search input enabled | Old: `IsEnabled = GetNotes.List.Length > 1`. New: no IsEnabled (record default True, `UBTConnectLibrary.model.js:1482-1484`) and `InitalString = Notes_Filter.SearchTerm` (`Notes.mvc.js:293-308`). Submit now calls Handler_SearchOnSubmit (:735-750), which only runs Refresh_GetNotes. | `NotesPage.tsx`: IsEnabled removed, InitalString added. Same submit flow. |
| 2 | Nine more pills | Server answer of Get_NotePills_ByNoteCategoryIds changed: the user without notes gets nine pills (dom/default.html:164-249). The client Get_Note_DynamicPills did not change (`UBTConnect_Notes_MCS.controller.js:728`). GetNotes_Pills now takes In_SelectedPillId (`UBTConnect.controller.js:10182-10269`), and ResetPillsVallues sends Notes_Filter.NoteCategoryId (`Notes.mvc.js:1355`). | `pages/Notes/mocks.ts`: an empty id list answers the nine TST pills, also in the `empty` scenario (plain msw handler; Q8). `notePillTags(pills, selectedPillId)` and `getNotes_Pills(selectedPillId)`. |
| 3 | EmptyListBorderless | `NoteCard_List.mvc.js` view :238-326: EmptyListBorderless, icon borderColor, texts "No note added yet" / "Add note to content by tapping the Add Note" / "icon.". Container height 100% when In_Notes is empty (:188-192). | New `pages/Notes/components/EmptyListBorderless.tsx` (Notes alone uses it; Q10). `NoteCard_List.tsx`: block, icon, texts, HeightOptions. |
| 4 | Filter sheet: 3 year options | GetNotes_FilterYear is now Get_RecentYears(3), synchronous (`UBTConnect.controller.js:10133-10170`, :6599); old: years of the local notes. OnInitialize is synchronous (`Notes.mvc.js:1377-1444`). | `getNotes_FilterYear()` in `notesState.ts`; `onInitialize` is synchronous. |
| 5 | Filter sheet selection | `Notes_FilterSheet.mvc.js`: In_StartFilter.Sort_ByNewest = In_FilterNotes.SortByNewest (:166-175); OnParametersChanged runs Initialize_FilterYearOptions again (:277-301); a year option is selected when In_FilterNotes.Years has it; SelectedIds and SelectedNames = Years (:305-386). | `Notes_FilterSheet.tsx`: options and start filter from the inputs (`useMemo`). |
| 6 | Offline: cards stay loading | OnInitialize now sets Notes_Loading = True before the skeleton loaders (`Notes.mvc.js:1377-1444`). | `INITIAL_NOTES_STATE.notesLoading = true`. |
| 7 | Card click | `NoteCard_List.mvc.js:398` raises OnClick_NoteCardItem(ItemId, LongIntegerToText(ItemId2), NoteCategoryId, HasDetailAccess). Handler_OnClickNoteCardItem (`Notes.mvc.js:1556-1717`): without detail access, Handler_OnClickUnauthorizedObject (:1107-1148, message "This <pill text, lower case, no final s> is no longer available."). With access: Household → HouseholdCarousel with preload; Feed Item → FeedItemDetail; Assemble Event → AssembleDetail; Interchange → Locality_Details (Notes_InterchangeId_ExtractId); Member → Household_Relations; OneSchool Global → OneSchoolGlobalCarousel (always); Supper Meeting → SupperMeeting_Details. | `noteCardTarget`, `unauthorizedObjectMessage` (`notesState.ts`), `useNotes.onClickNoteCardItem`. Interchange opens nothing until Q9 is answered. |
| 8 | Card wire fields | DataActionGetNotes card: ItemId is now Text, new ItemId2 (Long Integer) and HasDetailAccess (`analysis/calls.md:105-107`). | `api/note/types.ts` (itemId2, hasDetailAccess), `api/note/mapper.ts` (interim hand-written wire type: the contract does not have the fields; remove it after the contract is regenerated). Mock cards: ItemId2 '0', HasDetailAccess true. |
| 9 | Handler_ApplyFilters sets Notes_Filter.Years | New assign (`Notes.mvc.js:1516-1518`). | None: React already did this (capture 2026-10-27). |

Not changed, not in scope (other tasks):
- Class `search-placeholder-ellipsis` of the search input (shared Input; Bookmarks Q4). Parity: class 1 in default and offline.
- Channel row of the card (new card fields PublishedAt, ChannelLogo, ChannelName, EventStartDate, EventEndDate,
  `calls.md:131-136`; ItemCard_WithNotes, Bookmarks Q5).
- View-cache branch of OnInitialize (CheckRestored: FromCache sets only PageNumber = 1): not ported, as before (the
  port keeps no variable on a back navigation).

## Parity (after the last code change, http://localhost:5174)

| Route | State | Result |
|---|---|---|
| Notes | default (`empty`) | structure 0, class 1 (ellipsis), text 0, style 0, call 0, pixel 1: 0.58 %, worst tile 11.6 %. Pixel causes: the masked second pill has the width of "Feeds", not of the real TST text (Q8); a band about 4 px high above the bottom bar (y about 786, full width), not found. Bookmarks has no such band. |
| Notes | loading | clean |
| Notes | offline | class 1 (ellipsis), pixel 0.02 % |
| Bookmarks | default | class 1 (ellipsis), pixel 0.02 % |
| Bookmarks | loading | clean |
| Bookmarks | offline | class 1 (ellipsis), pixel 0.02 % |

## Questions

- **Notes Q8** (decision, mocks): how the mock answers Get_NotePills_ByNoteCategoryIds. Options (a) plain msw
  handler, nine TST pills for an empty id list, also in `empty` (done); (b) keep-lists option in the shared
  contractHandler; (c) no pills in `empty`. Recommendation (a), plus an MCP check of the server logic and of the
  masked text (assumed "Feeds" / Feed Item).
- **Notes Q9** (fact, MCP `getClientAction UBTConnect Notes_InterchangeId_ExtractId`): how LocalityId comes from the
  Interchange ItemId. Not in the runtime sources or the live survey.
- **Notes Q10** (decision, architecture): EmptyListBorderless (a) page-local (done) or (b) `components/ui`.
  Recommendation (a) until a second route needs it.

## Files

Code: `app/src/pages/Notes/NotesPage.tsx`, `components/NoteCard_List.tsx`, `components/Notes_FilterSheet.tsx`,
`components/EmptyListBorderless.tsx` (new), `components/staticEntities.ts`, `hooks/notesState.ts`, `hooks/useNotes.ts`,
`mocks.ts`; `app/src/api/note/types.ts`, `app/src/api/note/mapper.ts`.
Tests (written first, red before the logic change): `hooks/notesState.test.ts`, `hooks/noteCardTarget.test.ts`,
`hooks/useNotes.test.tsx`, `components/NoteCard_List.test.tsx`, `Notes.test.tsx`; `app/src/api/note/mapper.test.ts`,
`app/src/api/note/repository.test.ts`.

## Checks

- `npx tsc --noEmit`: clean. eslint and prettier on the changed files: clean.
- `npx vitest run src/pages/Notes src/pages/Bookmarks`: all pass.
- `npm run arch`: no violations.
- `src/api/note` (extra run): 2 failures that this task did not cause. `repository.test.ts` (fetchNoteCards total) and
  `hooks.test.tsx` (staleTime 0) expect total '1' but get '3'. Cause: the two OneSchool Global notes (`OSG_NOTES`)
  that the OneSchoolGlobalCarousel task added to `pages/Notes/mocks.ts` (uncommitted).

## Notes for the orchestrator

- The edits were made by Python scripts with exact, single-match replacements (no `sed -i`), to stay in the budget.
- The comment in `components/EmptyListBorderless.tsx` says "question Notes Q7"; the id is **Q10** (comment-only fix).
- Tool calls: 59.
