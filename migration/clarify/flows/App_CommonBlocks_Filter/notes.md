# App_CommonBlocks_Filter: reader notes (stage 1)

Own blocks (7): FilterSheet, FilterSheet_Icon, FilterSheet_Icon_Label, FilterSheet_OptionChoice_Item, FilterSheet_OptionList_Item, MoreActionSheet, SortSheet. No screens.
TST files exist for all 7 (tst_source.py list FilterSheet / MoreActionSheet / SortSheet). I grepped them; I did not read all of fs.js (about 3000 lines), mas.js and ss.js.

## TST presence check
- Pack elements absent on TST: the MoreActionSheet delete popup (Notifications_ConfirmDialog, ShowConfirmDeleteAllPopup, Toggle_DeleteAllPopup): no match in mas.js. Flat-list loop of Action_DefineOptionControl_Empty: fs.js:2434-2437 clears OptionList_Control only.
- TST elements absent in the pack: none seen in the greps.
- DEV != TST candidates for the judge: the two items above. React follows TST in both.

## Pack gaps
- FilterSheet widget text and several arguments are cut at about 300 characters: Skeleton In_IsLoading expression (second factor), Local_FilterChoiceItem assigns after NoLabel, ApplyFilters arguments, local variable list, LocalFilter_SelectionControls assigns (SheetTitle, AddAllOptions name).
- MoreActionSheet and SortSheet repeat the FilterSheet actions with In_Filter_Common_Options_Choice for In_Options. I covered the distinct actions and wrote one not-found row per copied action (React ports only the sort choice and the two menu rows; Notifications passes empty inputs).
- I did not read the bodies of DeleteAllNotificationClicked or of SortSheet Handler_BackNavigation in React (SortSheet.tsx:139-146 seen by grep only).
- Behaviour of SelectionOption_List, BottomSheet, CacheControl_*, App_Subscription_ShowUpgradePopUp, Input is in references.md (module UBTConnectLibrary / UBTConnect_Utils); not read.

## Mock files
- app/src/pages/CountryDetails/mocks.ts:6 (country filter data comment). The cache blocks read AllCountries / AllLocalities from the shared mocks (not traced).

## Screens not built
- None (block-only flow). React places: components/filter/* (FilterSheet, FilterOptionList, FilterOptionChoice, FilterSheetIcon), containers/FilterSheet, pages/Notes/components/FilterSheet_Icon_Label.tsx, pages/Notifications/components/{MoreActionSheet,SortSheet}.tsx.
