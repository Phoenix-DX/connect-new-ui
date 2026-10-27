# Calendar: reader notes

## Rows
- MyCalendar 1 (board skip), MyEntertaining 19, MyEntertaining_Embedded 21, 16 other own blocks 1 each. Total 57.

## TST presence check
Pack elements absent on TST:
- `OnNavBack` event on MyEntertaining_Embedded and `Handle_NavBack` on MyEntertaining: no hit in `tst_source.py show MyEntertaining` or `show MyEntertaining_Embedded` (grep -i back). TST MyEntertaining passes only `In_InitialEventSouceId` and `_handleError`.
- `In_IsHideTitle=True` on Layout_DetailPage in MyEntertaining_Embedded: TST has only `In_IsPrimaryColor: true` (block TST lines 145-147). The TST title placeholder is "My Entertaining".
- TST passes `B2CTenant` and `Sources` to Embedded_MyEntertaining (no View, no Theme): same as the pack.
TST elements absent in the pack:
- The title text "My Entertaining" (TST placeholder_Header_Title) is not in `strings.md`.
- `data.md` lists no data action: `DataActionGetEntertainingConfig` and `ActionAppManager_Get_UserIdToken` belong to the referenced module UBTConnect_EmbedMyEntertaining.

## Pack gaps
- The 16 own blocks other than MyEntertaining_Embedded are used only by MyCalendar or by each other. Three of them (CalendarView, Calendar_Header_SelectedDate, MonthPicker) are also used by `Picker_Date` (another flow). I did not trace whether a built screen uses Picker_Date; the judge may check it.
- The built screens have no Input widget, so no input constraints exist.
- Embedded_MyEntertaining logic is not compared line by line. TST file: `UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc.js` (1475 lines); React: `app/src/pages/MyEntertaining/components/Embedded_MyEntertaining.tsx`.
- KB rules tied to the block: BR-UBTCON-689 (preload source), 690 (map), 691 (error toast). The TST code agrees with all three.

## Mock files per screen
- MyEntertaining: `app/src/pages/MyEntertaining/mocks.ts` (two contract handlers; fictional, never recorded), stand-in embed `connect2Entertaining.ts`, `public/mock-embeds/my-entertaining.html`.
- MyCalendar: none (not built). `GetEventsByCacheKeys` and `Get_CalendarViewOptions`: no handler.

## Board line of the screen that is not built
`| MyCalendar | /UBTConnect/MyCalendar | | 85 | | skip | V7 · skip:dead · replaced by MyEntertaining; revisit if a link to MyCalendar appears (user, 2026-10-14) | - |` (migration/board.md:75)
