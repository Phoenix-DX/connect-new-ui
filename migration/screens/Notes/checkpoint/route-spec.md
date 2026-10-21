# Route spec: Notes (`/UBTConnect/Notes`, tier full)

## Summary

"My Notes": the user's notes grouped in item cards, with search, category pills and a sort / year filter sheet.
Evidence: `analysis/dom/default.html` (empty user), `loading.html` / `offline.html` (skeleton cards), compiled code
`analysis/sources/pretty/UBTConnect.Notes.Notes.mvc.js` (view :91-660, controller :660-1735) and the survey sources of
NoteCard_Item, ItemCard_WithNotes, ItemCard_ActionBar, ItemCardActions (`capture/survey-UBTConnect.json` → sources).

- Inputs: none. Layout `Layout_MainPages_FixedTitle` (gray background), title "My Notes" (Notes.mvc.js:227).
- Header right: search icon only while the header is scrolled (scrollTop ".active-screen"), App_NotificationIcon.
- Search input (Notes.mvc.js:290-340): enabled when the last GetNotes answer has more than 1 card, max 50, prompt
  "Search", debounce 200, rounded. OnChange sets Notes_Filter.SearchTerm; Clear empties it and refreshes; Submit
  refreshes (PageNumber is not reset, as in the original).
- Header content: CustomContainer `Filter_Pills` → Horizontal_Filter_TagList (single selection, loading = not
  PillsLoaded) with FilterSheet_Icon_Label (isLoaded True) in its Filter placeholder.
- Content: NoteCard_List (EmptyList "No Notes found / We were unable to find any Notes to / display." when empty,
  else NoteCard_Item rows); bottom BottomBarMenu (no inputs); CommonUI_InsideLayout.
- Notes_FilterSheet (outside the layout): FilterSheet with sorting (Newest to Oldest / Oldest to Newest, Order 1) and
  the "Filter by year" flat list built once at its OnInitialize from the year options.

### Lifecycle and calls (P-CALLS, `analysis/calls.json`)
1. OnInitialize (:1321-1369): Note_Pills and Notes_List are empty → SkeletonLoader_Pills (All + 3 × "Dumyy size") and
   SkeletonLoader_Notes (6 cards); then Years = GetNotes_FilterYear (local cache, no server call).
2. OnReady (:1370-1402): ResetPillsVallues (GetNotes_Pills → Get_NotePills_ByNoteCategoryIds, server) then
   Refresh_GetNotes (Notes_Loading True → DataActionGetNotes → OnAfterFetch).
3. OnAfterFetch (:823-883): page 1 → MaxRecords = Total, Notes_List = list, ResetPillsValue (True at start) →
   ResetPillsVallues again; PillsLoaded True, ResetPillsValue False. Later pages are appended. Notes_Loading False.
   Captured order: pills, GetNotes, pills (calls.json ts 4598, 4844, 5396).
4. Pill click (:884-942): NoteCategoryId = first selected tag's Identifier, PageNumber 1, refresh.
5. Apply filters (:1403-1459): only SortByNewest is copied from the sheet's filter, HasFiltersApplied, refresh.
6. Load more (:1111-1149): when the last answer is not empty and shorter than MaxRecords: PageNumber + 1, refresh.
7. Card click (:1460-1580): Household → HouseholdDetails(HouseholdId), OneSchool Global →
   OneSchoolGlobalDetails(In_OneSchoolGlobalId), Supper Meeting → SupperMeeting_Details(In_SubdivsionId); other
   categories do nothing.
8. NoteCard_Item: Add Note / total-notes icon / "show all" open the NotesSheet; notes changed → the card's notes;
   last note deleted → UpdateNoteCardsList removes the card from NoteCard_List.
Errors in these flows go to the flow exception handler (`handleError`, :1721).

## Patterns used

P-DATA, P-CALLS, P-MOCKS, P-MUTATION (notes collection shared with the notes blocks), P-STATES, P-PARAMS
(navigation), P-OSUI (bottom sheet through the shared FilterSheet), P-LIST. Shared blocks: Layout_MainPages_FixedTitle,
Input, CustomContainer, CustomText, Icon, IconText, Columns_Two, AvatarImage, SkeletonSection, TagToggle, EmptyList,
FilterSheet, NotesSheet, NoteListActions, App_NotificationIcon, BottomBarMenu, CommonUI_InsideLayout. Own blocks in
`app/src/screens/Notes/components/`: Horizontal_Filter_TagList, FilterSheet_Icon_Label, NoteCard_List, NoteCard_Item,
ItemCard_WithNotes, ItemCardActions, ItemCard_ActionBar, Notes_FilterSheet.

## Feature flags

The screen reads no flag itself. The flags listed in the pack belong to shared blocks (bottom bar, notification
icon, CommonUI) and are handled there with the user's decisions (2026-10-14).

## Unclear points

All answered (questions.md); nothing open.
- Q1 (decision, user 2026-10-15): the TST test user had no notes; parity of state default runs with the `empty`
  scenario (`migration/capture-plan.json` → Notes `scenarios: {"default": "empty"}`). The default mock (`real`) keeps
  the 3 fictional notes (shared notes collection) for manual testing. In `empty` the GetNotes mock answers no notes
  (Total 0) and the app start's Sync_Info_GetMain answers no LocalNotes, so SyncNotes leaves the local notes copy empty
  (`app/src/screens/Notes/mocks.ts`, `app/src/shell/startup.ts:124`).
- Q2 (fact, OutSystems MCP on DEV 2026-10-15): DataAction GetNotes is a pass-through to
  `Connect_Notes_CS.GetNotes(PageNumber, FilterNote = Notes_Filter, PageSize) → Out_Notes`; the service logic is not
  readable. The filter semantics of the mock are the user's decision (2026-10-15), written in mocks.ts as a mock
  assumption.
- Q3 (decision, user 2026-10-15): the pills mock answers with the categories of the fictional notes; no re-record (the
  test account has no notes).
- Q4 (decision, user 2026-10-15): pixel exemption for the masked digit of the skeleton total-notes IconText in loading
  and offline (`CAPTURE-NOTES-MASKED-COUNT`).
- ItemCard_ActionBar Unmark / Share are not reachable here (NoteCard_Item sets ShowAddNote only) and are not ported.

## Parity

`route.py parity Notes --app http://localhost:5173` (2026-10-15, run twice after the last change): default (scenario
empty), loading, offline: structure, class, attr, text, style, pseudo, layout, position, pixel and call differences 0 in
every state. Exemptions used: CAPTURE-LINK-HREF-CURSOR-HOMEFEED, CAPTURE-BADGE-MASKED-TEXT-HOMEFEED,
CAPTURE-SKELETON-SHIMMER-PHASE (loading, offline), CAPTURE-NOTES-MASKED-COUNT (ignoreSubtrees, 6 skeleton IconTexts in
loading and offline).

## Decisions to confirm

- Default state data (Q1, decided): parity compares state default with `?mock=empty`; `?mock=real` shows 1 fictional
  card ("Fenwick Household", 3 notes) and a "2026" year option for manual testing.
- DataActionGetNotes mock (Q2, decided): MOCK ASSUMPTION in mocks.ts: SearchTerm = case-insensitive contains on the card
  title and the note texts; NoteCategoryId = the card's category ('' = all; Notes_Filter holds one id); Years = the
  note's year (edited, else created) in the list; SortByNewest = Choice.No → oldest first, else newest first; pages of
  PageSize; Total = matching cards. FICTIONAL: one card per ItemId + NoteCategoryId, title "Fenwick Household" /
  subtitle "Northbrook", SourceHeader.Label = category id.
- Pills mock (Q3, decided): one pill per sent category id, Text = Identifier = the id (fictional); an empty list answers
  no pills, as the recording (fixture 01-d17576a5.json).
- Pills on a first `?mock=real` open: the local notes copy is filled by the app start's SyncNotes after the screen read
  it (shell order, as the captures), so only "All" shows until the next open. Faithful to the original order; noted in
  CR-Notes-1.
- Notes_FilterSheet is mounted after OnInitialize finished (years read from the local cache), so its year list is
  built from the loaded years, as when the runtime waits for OnInitialize.
- Parity exemption (Q4, decided): CAPTURE-NOTES-MASKED-COUNT, `idRegex ^b8-l1-61_\d+-b7-b1-\$b10$`, states
  `^(loading|offline)$`.
- Change requests: CR-Notes-1 (open, not blocking).

## Change requests

- CR-Notes-1 (`migration/change-requests/CR-Notes-1.md`, open): the local notes copy is in IndexedDB and survives a
  mock scenario switch; after `?mock=real`, the first `?mock=empty` load reads the old copy before SyncNotes empties it
  (pills request with ["Household"], "2026" in the filter sheet's year list); a reload or a fresh profile is exact.
  Asked: scope or clear the local entities per mock scenario. No route workaround.
