# Notes of Directory_OneSchoolGlobal_Blocks (reader, stage 1)

## Scope
- Block-only flow, 9 own blocks. Only OneSchoolGlobal_List is rendered by a built screen (Locality_OneSchoolGlobal inside Locality_Details, board:32).
- DW_OneSchoolGlobal_Numbers and DW_OneSchoolGlobal_EventList have one user, OneSchoolGlobalDetails_Block (flow Directory_OneSchoolGlobal),
  and both sit in `If False` branches ([DEAD BRANCH]). Their chain (OneSchoolGlobal_Numbers, OneSchoolGlobal_Event_ListCard,
  OneSchoolGlobal_Event_ListCard_List) is dead with them.
- OneSchoolGlobal_Event_Card and UI_OneSchoolGlobalEventDetail_IconTextWrapper: only OneSchoolGlobalEventDetail uses them
  (board:78 skip:dead). OneSchoolGlobal_DetailCard_Content: used by nothing in the module.
- Board: OneSchoolGlobalDetails line 33 built; OneSchoolGlobalEventDetail line 78 skip; OneSchoolGlobalCarousel line 93 skip:dev-only.

## TST presence check
- All 9 own blocks have a TST file. Pack elements absent on TST: none seen.
- TST OneSchoolGlobalDetails (OSGD.js in my scratch folder) shows ComingSoon (lines 815, 1075) and no reference to
  DW_OneSchoolGlobal_*. This agrees with the DEV If False. I did not open TST OneSchoolGlobalDetails_Block (no such file name).
- OneSchoolGlobal_List TST: onScrollEnding (182), padding-bottom-s and bookmark--rounded (210-212), MaxWidth_100vw (263),
  EntityType OneSchoolGlobal (267), StopPropagationHelper (314), EnableNotes true (353). All as in the pack.
- TST elements absent in the pack: none seen. I did not diff the dead blocks against TST.

## Pack gaps
- Pack args cut at about 300 characters (CustomContainer Options in several blocks); not recoverable from the pack.
- references.md (15 KB) not read. Referenced library blocks (ImageCard*, CustomText, HorizontalTagList, PopupMenu, StopPropagationHelper)
  were not compared with their TST files.
- Dead blocks: no per-widget rows (one row per block, as READER.md says for dead branches).
- Event_OnClick_Bookmark: the React comment says never raised. I did not check TST for a raise in OneSchoolGlobal_List.

## Mock files
- OneSchoolGlobal_List: app/src/pages/Locality_Details/mocks.ts (Locality_Details); not opened.
