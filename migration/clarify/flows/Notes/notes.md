# Notes (flow Notes): reader notes

## TST presence check (tst_source.py show Notes, NoteCard_Item, NoteCard_List, Notes_FilterSheet, UBTConnect.controller)

Pack elements absent on TST:
- ScreenEvent_OnInitialize JavaScript CheckRestored (FromCache/FromHistory, PageNumber = 1): 0 hits of Restored/FromHistory in Notes.js.
- GetNotes_FilterYear = Get_RecentYears (pack actions.md): TST UBTConnect.controller GetNotes_FilterYear (lines 10115-10150) calls
  Get_Note_DynamicFilter_YearOptions of UBTConnect_Notes_MCS. Get_RecentYears has no hit in the TST controller.
- Handler_ApplyFilters assigns Notes_Filter.Years: TST Notes.js:1416 assigns SortByNewest only.
- Handler_OnClickNoteCardItem: carousel branches (HouseholdCarousel, OneSchoolGlobalCarousel, SetPreloadObject), FeedItemDetail,
  Household_Relations, FeedbackMessage_AutoClose "This member is no longer available". TST Notes.js:1473-1516 navigates
  HouseholdDetails, OneSchoolGlobalDetails and SupperMeeting_Details only; the FeedItem and Member cases are empty.
- NoteCard_List empty state: DEV "No note added yet" / "Add note to content by tapping the Add Note" / "icon." with icon BorderColor.
  TST NoteCard_List.js:229,249,280,315: icon bookmark, "No Notes found", "We were unable to find any Notes to", "display.".
- Notes_FilterSheet: In_StartFilter { Sort_ByNewest } (TST passes an empty Filter_Common, Notes_FilterSheet.js:163-167);
  year option isSelected, list SelectedIds/SelectedNames (TST sets only Id, DisplayText, isEnabled, Title, Order);
  OnParametersChanged (TST handler is null, line 522).

TST elements absent in the pack:
- Search Input In_Options.IsEnabled = (GetNotes.Out_Notes.NoteCardItem_List.Length > 1) (Notes.js:293-300). The dump omits it.
  React has it (NotesPage.tsx:58).
- MaxLength=50 is in the DEV dump and in TST (Notes.js:296).

Not checked: NoteCard_Item args ChannelLogo, ChannelName, PublishedAt on TST (React does not pass them; NoteCard_Item.tsx:62-72);
TST text of Handler_SearchOnSubmit (Notes.js:737 exists; body not read); GetNotes_Pills IsSelected logic in TST (ctl 10171-10250).

## Pack gaps

- NoteCard_List CustomContainer HeightOptions is cut at "Main = If(In_Notes.Empty,…" (blocks.md). React passes no HeightOptions.
- The pack gives no logic of Get_Note_DynamicPills, Get_Note_DynamicFilter_YearOptions (module UBTConnect_Notes_MCS), NoteListActions,
  NotesSheet (UBTConnect_Utils CW_Notes), ItemCard_WithNotes, FilterSheet. references.md names TST files for NoteListActions and NotesSheet.
- data.md client variables are transitive (shell and bottom bar); the Notes screen widgets use none of them. Rows say so.
- strings.md includes strings of other flows (PIN unlock, unsupported version, welcome); they are not Notes strings.
- pack data.md says "no mock handler found" for DeleteBookmarkByBookmarkId2 and Get_UI_UpdateItems_UnreadCount_All; a fixture exists for the
  second (app/src/mocks/fixtures/UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All/01-4f5c3a3c.json). Neither is called by Notes itself.

## KB vs TST (for the judge)

- BR-UBTCON-033 (years hard-coded 2026/2025/2024) and DEV (Get_RecentYears) differ from TST (Get_Note_DynamicFilter_YearOptions).
- BR-UBTCON-035 ("does not refetch"): TST Notes.js:1422 calls Refresh_GetNotes after ApplyFilters.
- BR-UBTCON-038 (search box not wired): TST calls Refresh_GetNotes on clear (1225) and has a submit handler (737).
- BR-UBTCON-031 (six cards per page): DEV and TST PageSize default 20; React 20.

## Mock files

- Notes: app/src/pages/Notes/mocks.ts (ActionGet_NotePills_ByNoteCategoryIds, Notes/DataActionGetNotes); notes collection in
  app/src/containers/NoteListActions/mocks.ts; scenarios real, empty, error, loading (mocks.ts:29-31).
- Shared: app/src/mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:39 (AddBookmark2).

## Board line

Notes is built: migration/board.md:19 `| Notes | /UBTConnect/Notes | 3 | 119 | full | build | V3a ... | built | route-notes |`.
No screen of the flow is unbuilt.
