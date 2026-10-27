# Directory_Interchange: reader notes (stage 1)

Flow has one own block, Directory_Interchange_StatisticsList. No screens. TST file: UBTConnect.Directory_Interchange.Directory_Interchange_StatisticsList.mvc.js (566 lines, shown by tst_source.py).

## TST presence check
- Pack elements absent on TST: none found. Checked in isl.js: In_IsLoading, In_ShowSubtitle, In_InterchangeList (:31), In_HasActionsMenu=true (:259), In_ExtendedClasses bookmarked class (:262-263), list source (:246), Trigger Event_NavigateToLocality (:431).
- TST elements absent in the pack: none seen. Not checked: the Handler_Clicked body in isl.js and the exact arguments of Directory_EntityDetailsActions (:259-300 not read).
- TST file of the block sits in folder Directory_Interchange (the pack header says the same flow).

## Pack gaps
- Pack lists Handler_Clicked with one unreachable End node (no dead branch, no DISABLED node).
- Server actions in data.md belong to the nested Directory_EntityDetailsActions block, not to this block. Rows point at that block (flow Directory_CommonBlocks).
- app.md says DeleteBookmarkByBookmarkId2 has no mock handler, but app/src/containers/EntityDetailsActions/mocks.ts:45-49 defines ServiceAPIDeleteBookmarkByBookmarkId2.

## Mock files
- app/src/pages/Locality_Details/mocks.ts:75 (Interchange list, one locality, empty subtitle).
- app/src/containers/EntityDetailsActions/mocks.ts (FetchContactDetails :150, FetchNotes :185, bookmarks).

## Screens not built
- None. The flow has no screens (screens.md: none).
