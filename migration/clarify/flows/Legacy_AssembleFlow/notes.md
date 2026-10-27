# Legacy_AssembleFlow: reader notes (stage 1, evidence only)

Rows: `draft.json`, 129 rows, verdict empty. Row ids Legacy_AssembleFlow-001 to -129. Line numbers of TST are lines of the
output of `tst_source.py show <file>`. React line numbers are of the files at the time of reading.

## TST presence check

Pack elements absent on TST (AssembleDetail, file UBTConnect.Legacy_AssembleFlow.AssembleDetail.mvc.js):
- data action GetAssembleNotes (GetNotesByItemId, AtStart): TST has `dataFetchActionNames = []` (line 370).
- placeholder MeetingNotes with NoteListActions and ItemCard_ActionBar (ShowAddNote): not in the block instance (lines 193-285).
- block NotesSheet and the If `#HideInServiceStudio_BottomSheet` (constant False): TST renders ShareSheet directly (lines 309-325).
- local variable IsAddNote, actions Handler_OnNoteDeleted, Handler_OnNotesChanged, Handler_NoteSheet_Closed, OpenNoteSheet.
- grep of the TST file for NoteList, NotesSheet, ActionBar, GetAssembleNotes, IsAddNote: 0 hits.
- The meeting note on TST is Section_MeetingNotes of AssembleEventDetail (Connect2_Assemble_MUI.Assemble.AssembleEventDetail.mvc.js:434-462).

DEV and TST differ in names, not in elements:
- AssembleEvents: the pack names the BottomSheet `OutSystemsUI_2_23+UBTConnectLibrary.Interaction`; TST uses
  `UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view` (AssembleEvents.mvc.js:267), arguments Title="Test", CloseOnClickOutsite=true.
- Transitions: pack says Inherited; TST creates `TransitionAnimation.Default` for every navigate of the three screens.
- AssembleDetail: the TST event NavigateTo_HouseholdCarousel carries ItemPosition and SelectedHouseholdId (line 212-222); the pack shows only SelectedHouseholdId.
- AssembleDetail: the TST event Navigateto_EmailContact carries Event_ContactSurname; the handler ignores it (line 287, 592-636).

TST elements absent in the pack: none found for the three screen files. The pack holds no logic of the referenced blocks.
I read their TST code (module Connect2_Assemble_MUI) for the rows of the blocks ScreenBlock_AssembleEvents, ScreenBlock_AssembleDetail,
ScreenBlock_Assemble_Filter, AssembleSummary_List, AssembleSummary_FilterDrawer, Assemble_FilterSheet,
Assemble_FilterLocalityByCountry, Assemble_FilterSubdivisionByLocality, AssembleEventDetail, _AttendeeSubdivision, _Contact, _ContactList.

Dead in practice (facts): UseNewFilterSheet defaults false and nothing assigns it (grep of AssembleEvents TST file), so
Handler_NavigateTo_AssembleLocationFilters always navigates to Assemble_BrowseByCountry. Handler_EventNotFound sets IsEventNotFound;
nothing reads it in TST (getter only, line 915).

## Pack gaps

- The pack holds no logic for the referenced blocks (as the brief says); the block rows come from TST only.
- Not read in detail (rows are summaries): widget visible conditions and style expressions of AssembleSummary_List,
  Assemble_FilterSheet input constraints (MaxLength grep not run on TST for FilterSheet; React has maxLength={50}),
  AssembleEventDetail sections (Section_Attendees, Special, Guests, Contacts), AssembleEventDetail_LocalitiesList,
  _LocalitySubdivisionList, AssembleSummaryCard, VirtualMeeting* blocks, skeleton blocks. Their React files exist under
  app/src/pages/AssembleDetail/components and app/src/components/assemble.
- Not checked: flag values (flag-values-tst.json), the KB, strings of the shared blocks (strings.md has 18 literals, all of shared blocks).
- ButtonApply Enabled expression of ScreenBlock_Assemble_Filter was not read (row tst = not checked).
- React quotes of `AssembleSummary_List` rows come from the hook and state files; the view components were not read line by line.

## Mock files per screen

- Assemble_BrowseByCountry: app/src/pages/Assemble_BrowseByCountry/mocks.ts (ActionGetCountriesBySubscription; real, empty, error, loading).
- AssembleEvents: app/src/pages/AssembleEvents/mocks.ts (DataActionGetAssembleEventTypes, DataActionGetAssembleMeetingSummaryList,
  ScreenBlock_AssembleEvents/DataActionGetSubdivisionName, ActionGetCountriesBySubscription; real, nomeetings, empty, error, loading).
- AssembleDetail: app/src/pages/AssembleDetail/mocks.ts (AssembleEventDetail/DataActionGetAssembleEvent; real, notfound, unavailable, error, loading);
  contacts through the Connect2_LegacyShared member-contact mock.
- Shared fictional data: app/src/mocks/fictional/assemble.ts, directory.ts.

## Board

All three screens: decision build, status built (migration/board.md lines for AssembleDetail, AssembleEvents, Assemble_BrowseByCountry).
