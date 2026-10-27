# Flow report: App_Notifications

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 2 (built: 1, Notifications; not built: NotificationDetails, no board row, not on TST) |
| Own blocks | MessageListItem, NotificationsList, NotificationsListBreakpoints, Notifications_Action, Notifications_ConfirmDialog, Notifications_Header, Notifications_MoreActionSheet, Notifications_NoItemsFound, Notifications_SortSheet |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/pages/Notifications/…`, KB page `ui/notifications.md` and the rules it names, TST compiled code of the screen, of the 8 own blocks on TST, of `MoreActionSheet`, `SortSheet`, `Notification_ListItem` and of the module client actions (`tst_source.py`) |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 102 · partial 2 · missing 4 · differs 0 · mock-only 2 · n/a 10 · unclear 0 (same as `checklist.json`, 120 rows).
- **F1** (major): the empty state `Notifications_NoItemsFound` is not built. A user without notifications sees an empty
  content area instead of "No Notifications Found".
- **F2** (major): `Notifications_Header` always shows its badge. TST shows the badge only when the section has unread
  notifications, so a read section shows a red "0" in React.
- The DEV model of this flow is newer than TST. DEV adds swipe actions, delete dialogs, mark-all calls, an unread
  filter, the sort order, the search text and the screen NotificationDetails. TST has none of them (§6.1).
- React follows TST in each of these places. The rows that differ between DEV and TST are `match` with a §6.1 line.
- Status: in React a user can open the list in date sections, search, sort, and open the kebab sheet. Search, sort
  and the sheet options change nothing, as on TST (BR-UBTCON-977, BR-UBTCON-978, BR-UBTCON-980). The empty state is
  missing (F1), and a read section shows a "0" badge (F2).

## 2. Screens

### 2.1 Notifications

Route `/UBTConnect/Notifications`, React file `app/src/pages/Notifications/NotificationsPage.tsx`, flows in
`app/src/pages/Notifications/hooks/useNotifications.ts` and `hooks/notificationsState.ts`. Board: `build`, built
(V3a, D11(c), user 2026-10-14). The bell picks this screen or MessageList by the flag C2NewNotifications, which is
off on TST.

**Identity**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 001 | roles Registered, UBTOne_User | A signed-in user opens the screen | MEMBER_ROUTE (member, enforce): the screen is not in ROUTE_META | `match` | app/src/app/routes.ts:40-57 |
| 002 | input parameters | none | route inputs [] | `match` | app/src/app/routes.generated.ts:27 |
| 003 | entry to the screen | App_NotificationIcon (bell) and MessageDetail open Notifications when GetHasNewNotifications (C2NewNotifications) is on, MessageList when it is off. On TST the flag is off | flagRedirect: a navigation to Notifications opens MessageList when C2NewNotifications is false; a URL opened directly is not redirected | `match` | app/src/app/routes.ts:63-69; migration/board.md:20 (D11(c), user 2026-10-14); migration/knowledge/flag-values-tst.json:10; BR-UBTCON-320<br>On TST the bell and MessageDetail open MessageList, so the screen is a flag variant that the board builds. |
| 004 | lifecycle | OnInitialize → ScreenEvent_OnInitialize; OnReady → ScreenEvent_OnReady; OnDestroy → DestroyEventListener | reducer initializer initialNotificationsState before the first render; one effect runs onReady once; no destroy step (no listener is set) | `match` | app/src/pages/Notifications/hooks/useNotifications.ts:53-56, 133-141; TST Notifications.mvc.js:2801-2850 |
| 005 | local variables | TST: 29 variables, MaxRecords = 20, Filter_MessageTypePrivate and Filter_MessageTypePublic = True, OrderByIsAscending = False, BadgeNumber = 0. DEV: MaxRecords = 2000, ReadCount in place of BadgeNumber, and Local_OnlyShowUnread, Screen_NotificationItemList | NotificationsState with the TST variables and defaults (maxRecords 20); EventListener and EventListenerTarget are not ported (no listener is set) | `match` | app/src/pages/Notifications/hooks/notificationsState.ts:98-131; TST Notifications.mvc.js:63-152<br>DEV and TST differ: see section 6.1. |

**Data**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 006 | FetchNotifications (fetch OnDemand) | refreshed only by RefreshNotifications | fetchNotifications(latest.current), called only by refreshNotifications | `match` | app/src/pages/Notifications/hooks/useNotifications.ts:100-114; app/src/api/notification/repository.ts:35-43; TST Notifications.mvc.js:1184-1203, 2082-2112 |
| 007 | FetchNotifications inputs | the screen data action sends the screen variables | toNotificationsVariablesWire sends every screen variable with its OutSystems name | `match` | app/src/api/notification/mapper.ts:69-108 |
| 008 | FetchNotifications server side | DataActionFetchNotifications: Get_UI_Notifications (Connect2_Notification_CS) with Ascending, DeviceHardwareId, MaxRecords, MessageTypePrivate, MessageTypePublic, SelectedHistorySearch | contract mock: 19 fictional rows; the inputs are not read | `mock-only` | app/src/pages/Notifications/mocks.ts:74-81<br>Production needs the screen data action DataActionFetchNotifications (UBTConnect, App_Notifications) and the service action Get_UI_Notifications of Connect2_Notification_CS. |
| 009 | FetchNotifications: Local_OnlyShowUnread branch | DEV: when Local_OnlyShowUnread, ListFilter(not IsRead) and ListAppendAll. TST: the screen has no variable Local_OnlyShowUnread, so the branch does not exist | none | `match` | pack/screens.md Notifications FetchNotifications; TST Notifications.mvc.js:63-152<br>DEV and TST differ: see section 6.1. |
| 010 | GetDateRanges (fetch OnDemand) | refreshed only by ScreenEvent_OnReady | fetchNotificationDateRanges, called only by onReady | `match` | app/src/pages/Notifications/hooks/useNotifications.ts:121-123; TST Notifications.mvc.js:1148-1180, 1884-1931 |
| 011 | GetDateRanges server side | DataActionGetDateRanges: aggregate GetUpdatesDateRanges on Updates_DateRanges (max 4, Order ascending) | recorded TST fixture of DataActionGetDateRanges; the inputs are not matched | `mock-only` | app/src/pages/Notifications/mocks.ts:13-15, 73<br>Production needs the screen data action DataActionGetDateRanges (UBTConnect, App_Notifications). |
| 012 | outputs of FetchNotifications | UI_NotificationItemList, UnreadNotificationsCount and IsDataFetched are read; HasUnreadMessages is read by nothing (BR-UBTCON-979) | toNotificationList maps items, hasUnreadMessages and unreadNotificationsCount; the state keeps items, isDataFetched and unreadNotificationsCount | `match` | app/src/api/notification/mapper.ts:42-46; app/src/pages/Notifications/hooks/notificationsState.ts:152-158 |

**UI tree**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 013 | Layout_MainPages_Upgrade | isGrayBackground = True; OnHeaderScrolled → Handler_OnHeaderScrolled | Layout_MainPages_Upgrade isGrayBackground, onOnHeaderScrolled | `match` | app/src/pages/Notifications/NotificationsPage.tsx:77-79; TST Notifications.mvc.js:261-282 |
| 014 | Placeholder_Header_Title | If IsToggleSearch, then If IsHeaderScrolled: the search container; every other arm: "Notifications" + Badge | isToggleSearch && isHeaderScrolled ? search container : title with Badge | `match` | app/src/pages/Notifications/NotificationsPage.tsx:80-113; TST Notifications.mvc.js:294-496 |
| 015 | search container of the scrolled header | TST: CustomContainer full-width (flex, center, row) with Icon ArrowLeftAlt (Neutral0, Base_24) → Handler_ToggleSearch, then Input Search_PostScroll. DEV: the Input only | the same container, back icon and Input | `match` | app/src/pages/Notifications/NotificationsPage.tsx:82-109; TST Notifications.mvc.js:296-440<br>DEV and TST differ: see section 6.1. |
| 016 | Search_PostScroll options and events | InitalString = CurrentSearchString, "Search notifications", Debounce_DelayMS 300, Rounded, no autocomplete HTML, sync with the input; OnChange → Handler_OnChangeSearchInput(text, False); Submit → Handler_FilterSearchText(text); ClearString → Handler_FilterSearchText("") | searchOptions; onEventOnChange → onChangeSearchInput(text, false); onEventSubmit; onEventClearString → onFilterSearchText('') | `match` | app/src/pages/Notifications/NotificationsPage.tsx:46-53, 98-108; TST Notifications.mvc.js:355-440 |
| 017 | title Badge (both arms) | Size ExtraSmall, Color RedDark, MaxNumber 9, Number = BadgeNumber. TST: BadgeNumber has no writer, so it stays 0. DEV: Number = ReadCount | Badge xs, red-dark, maxNumber 9, number = badgeNumber (0) | `match` | app/src/pages/Notifications/NotificationsPage.tsx:54-65; TST Notifications.mvc.js:446-496; BR-UBTCON-979<br>DEV and TST differ: see section 6.1. |
| 018 | Placeholder_Header_Right | If IsHeaderScrolled: (If not IsToggleSearch: Icon_Search → Handler_ToggleSearch) + Icon_Kebab; else Icon_Kebab2. Icons Neutral0, Base_24; the kebab icons → OnClick_KebabButton | the same arms and icons | `match` | app/src/pages/Notifications/NotificationsPage.tsx:66-74, 114-131; TST Notifications.mvc.js:497-612 |
| 019 | Placeholder_Header_Input | TST: Search_PreScroll always. DEV: Search_PreScroll only when not IsHeaderScrolled | Search_PreScroll always | `match` | app/src/pages/Notifications/NotificationsPage.tsx:132-144; TST Notifications.mvc.js:613-691<br>DEV and TST differ: see section 6.1. |
| 020 | Search_PreScroll events | the options of Search_PostScroll; OnChange → Handler_OnChangeSearchInput(text, True); ClearString → Handler_FilterSearchText(""); Submit → Handler_FilterSearchText(text) | onChangeSearchInput(text, true); onFilterSearchText('') ; onFilterSearchText | `match` | app/src/pages/Notifications/NotificationsPage.tsx:133-143; TST Notifications.mvc.js:615-691 |
| 021 | HeaderContent: Notifications_Action | HaveFiltersApplied, BottomSheetId = Filter_BottomSheetId, isLoaded = True, ShowSubscriptionOnClick = BottomSheetId_ShowSubscription. TST: no event. DEV: OnlyShowUnread → Handler_OnlyShowUnread | the same four inputs, no event | `match` | app/src/pages/Notifications/NotificationsPage.tsx:145-153; TST Notifications.mvc.js:692-716<br>DEV and TST differ: see section 6.1. |
| 022 | HeaderContent: Container (Visible False) with Notifications_ListHeader | Title = CurrentBreakpoint.SectionName, BadgeNumber = CurrentBreakpoint.BadgeCount, isLoading; the runtime renders nothing for a hidden Container | not rendered | `match` | TST Notifications.mvc.js:716-746; migration/runtime-sources/OutSystemsReactWidgets.js (Container render returns null when not visible) |
| 023 | Content: If_HasNoNotifications | `not isLoading and FetchNotifications.IsDataFetched and FetchNotifications.UI_NotificationItemList.Empty` | `!v.isLoading && v.isDataFetched && v.items.length === 0` | `match` | app/src/pages/Notifications/NotificationsPage.tsx:155; TST Notifications.mvc.js:747-748 |
| 024 | If_HasNoNotifications, True branch | Notifications_NoItemsFound | a NotCaptured marker without children: the built app renders nothing | `missing` | app/src/pages/Notifications/NotificationsPage.tsx:156; app/src/platform/feedback/NotCaptured.tsx:7-8; TST Notifications.mvc.js:749-767; BR-UBTCON-983<br>**F1** (major) |
| 025 | If_HasNoNotifications: If `SelectedHistorySearch <> ""` (DEV only) | DEV: EmptyList with "No results found for '…'". TST: Notifications_NoItemsFound for every empty list | none | `match` | pack/screens.md If_HasNoNotifications; TST Notifications.mvc.js:747-767<br>DEV and TST differ: see section 6.1. |
| 026 | If_HasNoNotifications, False branch: NotificationsListBreakpoints | Breakpoints, UI_NotificationItemList = FetchNotifications list, IsLoading = isLoading. TST: no event. DEV: NotificationDetail and UpdateReadCount | NotificationsListBreakpoints breakpoints, uiNotificationItemList, isLoading | `match` | app/src/pages/Notifications/NotificationsPage.tsx:157-164; TST Notifications.mvc.js:768-790<br>DEV and TST differ: see section 6.1. |
| 027 | False branch: Container (Visible False) with List_Notifications | SkeletonSection, Notification_ListItem and ScrollAnchor per item; the runtime renders nothing for a hidden Container | not rendered | `match` | TST Notifications.mvc.js:791-917 |
| 028 | Bottom: BottomBarMenu | ActiveItem = NullTextIdentifier() | BottomBar activeItem="" | `match` | app/src/pages/Notifications/NotificationsPage.tsx:166; TST Notifications.mvc.js:918-941<br>The behaviour of the block is checked in the report of App_Common. |
| 029 | Placeholder_CommonUI_Inside_Layout: CommonUI_InsideLayout | no arguments | CommonUiLayout without options | `match` | app/src/pages/Notifications/NotificationsPage.tsx:167; TST Notifications.mvc.js:942-960<br>The behaviour of the block is checked in the report of App_Common. |
| 030 | If False (HideInServiceStudio_BottomSheet, HideInServiceStudio_BottomSheet2) | constant False: the True arms are empty and dead; the else arms render the two sheets | the two sheets render without a condition | `n/a` | pack/screens.md; TST Notifications.mvc.js:962-1090<br>dead in the model |
| 031 | Notifications_SortSheet events | SheetInitialized → Handler_FilterSheetSheetInitialized; ApplyFilters → Handler_ApplyFilters(HasFiltersApplied); Loaded → Handler_FilterSheetLoaded | onSheetInitialized, onApplyFilters; Loaded is not wired | `match` | app/src/pages/Notifications/NotificationsPage.tsx:169-173; TST Notifications.mvc.js:962-1028; TST UBTConnect.App_CommonBlocks_Filter.SortSheet.mvc.js:522<br>SortSheet raises Loaded only from CacheControl_UserInfo_Wrapper. That block renders only with HasCountries or HasLocalities, and this sheet sets neither. |
| 032 | Notifications_MoreActionSheet events | TST: SheetInitialized → Handler_MoreActionSheetSheetInitialized; ApplyFilters → Handler_ApplyFilters(HasFiltersApplied); Loaded → Handler_MoreActionSheetLoaded. DEV adds DeleteAll and MarkAllAsRead | onSheetInitialized, onApplyFilters; Loaded is not wired | `match` | app/src/pages/Notifications/NotificationsPage.tsx:174-178; TST Notifications.mvc.js:1029-1090; TST UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.mvc.js:653<br>MoreActionSheet raises Loaded under the same condition as SortSheet. DEV and TST differ: see section 6.1. |

**Screen actions**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 033 | ScreenEvent_OnInitialize, new view | SelectedFilter_MessageTypePrivate and SelectedFilter_MessageTypePublic = True, SelectedFilter_OrderASC = False; InitializeSetting; CurrentBreakpoint = {0, Today, 0} | initialNotificationsState sets the same values | `match` | app/src/pages/Notifications/hooks/notificationsState.ts:93-131; TST Notifications.mvc.js:1516-1540 |
| 034 | InitializeSetting | GetUserId set: ShowWarning True, Filter_MessageType* = SelectedFilter_*; else ShowWarning False, private False, public True. Then Filter_OrderASC = SelectedFilter_OrderASC, Filter_OrderDESC = not SelectedFilter_OrderASC | the signed-in values as constants: showWarning true, both message types true, filter_OrderASC false, filter_OrderDESC true | `match` | app/src/pages/Notifications/hooks/notificationsState.ts:93-97, 116-125; TST Notifications.mvc.js:1968-2019; BR-UBTCON-976<br>The route needs a signed-in user, so the anonymous branch does not run. |
| 035 | [DISABLED] nodes of ScreenEvent_OnInitialize and InitializeSetting | GetThisDeviceId, the DeviceHardwareId assignment and the WarningMessage text are disabled | not implemented; deviceHardwareId stays "" | `n/a` | pack/screens.md Notifications; BR-UBTCON-976<br>dead in the model |
| 036 | ScreenEvent_OnInitialize, view restored from cache: FocusCursor | FocusCursor(Search_PreScroll.Id) after 200 ms: focus() on the element that has the id of the Input block instance | not ported | `match` | TST Notifications.mvc.js:1460-1469; migration/runtime-sources/OutSystemsReactView.js (getRootNodeProperties)<br>No effect: the id names the block instance, not its input element, and a block root is not focusable. |
| 037 | ScreenEvent_OnReady | SetStickyHeaderHeight; isLoading = True; the skeleton list; refresh GetDateRanges | loadingStarted, then fetchNotificationDateRanges | `match` | app/src/pages/Notifications/hooks/useNotifications.ts:116-131; TST Notifications.mvc.js:1884-1931 |
| 038 | OnReady: SetStickyHeaderHeight and GetSkeletonList_UI_Notification(10) | SetStickyHeaderHeight finds no `.updates-list__header` (no breakpoint yet) and returns; the 10 skeleton rows feed only the hidden List_Notifications | not ported | `match` | TST Notifications.mvc.js:1884-1931, 791-917; pack/actions.md GetSkeletonList_UI_Notification<br>No visible effect. |
| 039 | OnAfterFetch_GetDateRanges | App_Notifications_AugmentDateRanges, DateRanges, SetDefaultFilters, RefreshNotifications | app_Notifications_AugmentDateRanges, dateRangesAugmented (with setDefaultFilters), refreshNotifications | `match` | app/src/pages/Notifications/hooks/useNotifications.ts:124-127; app/src/pages/Notifications/hooks/notificationsState.ts:146-151; TST Notifications.mvc.js:2020-2081 |
| 040 | OnAfterFetch_GetDateRanges: exception | isLoading = False, then raise BubbleGenericException(message); a system exception goes up as it is | bubbleGenericException: loadingEnded, then UserException UBTConnect.BubbleGenericException | `match` | app/src/pages/Notifications/hooks/useNotifications.ts:92-96, 128-130; TST Notifications.mvc.js:2040-2075 |
| 041 | RefreshNotifications | refresh FetchNotifications | refreshNotifications → fetchNotifications | `match` | app/src/pages/Notifications/hooks/useNotifications.ts:100-102; TST Notifications.mvc.js:2082-2112 |
| 042 | OnAfterFetch_FetchNotifications | App_Notifications_GetBreakpoints; Breakpoints; CurrentBreakpoint = Breakpoints[0], or EmptyBreakpoint; ShowMarkAll = UnreadNotificationsCount > 0; isLoading = False; Directory_Updates_RefreshBottomBarCount(True). DEV also sets ReadCount | breakpointsSet with the same assignments, then directory_Updates_RefreshBottomBarCount(true) | `match` | app/src/pages/Notifications/hooks/useNotifications.ts:103-110; app/src/pages/Notifications/hooks/notificationsState.ts:159-166; TST Notifications.mvc.js:2277-2340<br>DEV and TST differ: see section 6.1. |
| 043 | OnAfterFetch_FetchNotifications: DestroyEventListener and SetupScrollListener | SetupScrollEndListener looks for Notifications_ListHeader, which the hidden Container does not render. It warns and returns, so Handler_ScrollEnding_UpdateBreakpoint and Directory_Updates_GetListBreakpoint do not run | not ported | `match` | TST Notifications.mvc.js:2324-2330, 2574-2650, 716-746<br>No effect. |
| 044 | OnAfterFetch_FetchNotifications: exception | isLoading = False, then raise BubbleGenericException | the same through bubbleGenericException | `match` | app/src/pages/Notifications/hooks/useNotifications.ts:111-113; TST Notifications.mvc.js:2340-2370 |
| 045 | Handler_FilterSearchText | CurrentSearchString = Text; same text as Filter_Updates.Filter_SearchText → end; else Filter_SearchText = Text, ShowMarkAll = False, ScrollTop(".active-screen", "instant"), isLoading = True, RefreshNotifications. DEV also sets SelectedHistorySearch = Text | searchStringSet; same text → return; searchTextFiltered; scrollTopAndRefresh | `match` | app/src/pages/Notifications/hooks/useNotifications.ts:143-157; app/src/pages/Notifications/hooks/notificationsState.ts:167-170; TST Notifications.mvc.js:1206-1270; BR-UBTCON-977<br>DEV and TST differ: see section 6.1. |
| 046 | Handler_OnChangeSearchInput | CurrentSearchString = Event_CurrentString; In_IsToggleSearch → IsToggleSearch = True | searchInputChanged | `match` | app/src/pages/Notifications/hooks/useNotifications.ts:159-161; app/src/pages/Notifications/hooks/notificationsState.ts:171-174; TST Notifications.mvc.js:1322-1374 |
| 047 | Handler_ToggleSearch | IsToggleSearch = not IsToggleSearch | searchToggled | `match` | app/src/pages/Notifications/hooks/notificationsState.ts:175-176; TST Notifications.mvc.js:1298-1321 |
| 048 | Handler_OnHeaderScrolled | IsHeaderScrolled = Event_IsHeaderScrolled | headerScrolled | `match` | app/src/pages/Notifications/hooks/useNotifications.ts:176-178; TST Notifications.mvc.js:2414-2449 |
| 049 | OnClick_KebabButton | BottomSheetOpen(MoreAction_BottomSheetId) | bottomSheetOpen(latest.current.moreAction_BottomSheetId) | `match` | app/src/pages/Notifications/hooks/useNotifications.ts:167-169; TST Notifications.mvc.js:1605-1631 |
| 050 | Handler_ApplyFilters | TST: HasFiltersApplied = Event_HasFiltersApplied (the screen passes HasFiltersApplied), ShowMarkAll = False, ScrollTop, isLoading = True, RefreshNotifications. DEV: ScrollTop disabled, OrderByIsAscending = not IsNewestToOldest | filtersApplied, then scrollTopAndRefresh | `match` | app/src/pages/Notifications/hooks/useNotifications.ts:143-149, 171-174; app/src/pages/Notifications/hooks/notificationsState.ts:177-179; TST Notifications.mvc.js:2450-2504; BR-UBTCON-978<br>DEV and TST differ: see section 6.1. |
| 051 | Handler_FilterSheetSheetInitialized, Handler_MoreActionSheetSheetInitialized | Filter_BottomSheetId = SheetId; MoreAction_BottomSheetId = SheetId | filterSheetInitialized, moreActionSheetInitialized | `match` | app/src/pages/Notifications/hooks/useNotifications.ts:180-186; app/src/pages/Notifications/hooks/notificationsState.ts:182-185; TST Notifications.mvc.js:1569-1604, 1932-1967 |
| 052 | Handler_FilterSheetLoaded, Handler_MoreActionSheetLoaded | BottomSheetId_IsLoaded = True, BottomSheetId_ShowSubscription = ShowSubscriptionOnClick; the sheets do not raise Loaded on this screen | not ported; bottomSheetId_ShowSubscription stays false | `match` | TST Notifications.mvc.js:2146-2185, 2374-2413; rows 031 and 032 |
| 053 | Handler_MarkAllAsRead | Action_UI_UpdateItem_MarkAllAsRead(Filter_Updates), SetBadgeCountsToZero, Directory_Updates_RefreshBottomBarCount(True); bound to no event on DEV and TST | not implemented | `n/a` | TST Notifications.mvc.js:1816-1883; pack/screens.md; BR-UBTCON-980<br>dead in the model |
| 054 | Handler_MarkAsRead, Handler_MarkAsUnread, RefreshUpdatesAndFlags | bound to no event; RefreshUpdatesAndFlags holds only disabled nodes | not implemented | `n/a` | TST Notifications.mvc.js:1375-1428, 2113-2145, 2223-2276; pack/screens.md<br>dead in the model |
| 055 | SetMarkAllTag, SetupScrollThreshold, UpdateCurrentBreakpoint, SectionHeaderEvent_UpdateListHeader, SetBadgeCountsToZero | no caller that runs: SetupScrollThreshold has no caller, UpdateCurrentBreakpoint runs only from that script, SetBadgeCountsToZero only from Handler_MarkAllAsRead, the others are bound to no event | not implemented | `n/a` | TST Notifications.mvc.js:1632-1707, 1774-1815, 2186-2222, 2505-2573<br>dead in the model |
| 056 | Handler_NotificationDetail (DEV only) | DEV: when not IsRead, MarkAsRead (Comms_CS) first; then both branches navigate to NotificationDetails(MessageInstanceId) (merge node M1). TST: no such action | none | `match` | pack/screens.md; TST Notifications.mvc.js (no such action)<br>DEV and TST differ: see section 6.1. |
| 057 | Handler_OnlyShowUnread (DEV only) | DEV: Local_OnlyShowUnread = OnlyShowUnread, refresh FetchNotifications. TST: no such action | none | `match` | pack/screens.md; TST Notifications.mvc.js (no such action)<br>DEV and TST differ: see section 6.1. |
| 058 | Handler_UpdateReadCount (DEV only) | DEV: ReadCount + 1 or - 1 after a swipe action. TST: no such action | none | `match` | pack/screens.md; TST Notifications.mvc.js (no such action)<br>DEV and TST differ: see section 6.1. |
| 059 | Handler_MoreActionSheetMarkAllAsRead (DEV only) | DEV: MarkAllAsReadNotifications (Comms_CS), SetBadgeCountsToZero, Directory_Updates_RefreshBottomBarCount(True), RefreshNotifications. TST: no such action | none | `match` | pack/screens.md; TST Notifications.mvc.js (no such action)<br>DEV and TST differ: see section 6.1. |
| 060 | Handler_MoreActionSheetDeleteAll (DEV only) | DEV: Delete_Notifications (Connect2_Notification_CS) with the fetched list, then RefreshNotifications. TST: no such action | none | `match` | pack/screens.md; TST Notifications.mvc.js (no such action)<br>DEV and TST differ: see section 6.1. |
| 061 | unreachable end nodes | not connected, in most actions of the screen | not implemented | `n/a` | pack/screens.md Notifications<br>dead in the model |

**Validations**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 062 | validations | no validation node; the two search inputs (Input block) and the switch (Enabled True) have no rule or length limit | no validation | `match` | pack/screens.md Notifications; pack/blocks.md Notifications_Action; TST Notifications_Action.mvc.js:502-516; TST Notifications.mvc.js:355-370, 615-630 |

**Business logic**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 063 | BR-UBTCON-976 | the fetch asks for 20 messages, newest first, private and public on, with an empty DeviceHardwareId | maxRecords 20, orderByIsAscending false, both message types true, deviceHardwareId '' | `match` | app/src/pages/Notifications/hooks/notificationsState.ts:115-119; app/src/api/notification/mapper.ts:94-99; BR-UBTCON-976 |
| 064 | BR-UBTCON-977 | the search text goes to Filter_Updates.Filter_SearchText; SelectedHistorySearch stays "", so the server does not filter | searchTextFiltered writes filter_Updates.searchText; selectedHistorySearch stays '' | `match` | app/src/pages/Notifications/hooks/notificationsState.ts:114, 169-170; BR-UBTCON-977 |
| 065 | BR-UBTCON-978 | the sort choice does not change OrderByIsAscending | no writer of orderByIsAscending | `match` | app/src/pages/Notifications/hooks/notificationsState.ts:118, 177-179; BR-UBTCON-978 |
| 066 | BR-UBTCON-979 | HasUnreadMessages is read by nothing; ShowMarkAll is bound to no widget; BadgeNumber stays 0 | hasUnreadMessages is mapped and not rendered; showMarkAll is not rendered; badgeNumber 0 | `match` | app/src/api/notification/mapper.ts:42-46; app/src/pages/Notifications/NotificationsPage.tsx:54-65; BR-UBTCON-979 |
| 067 | BR-UBTCON-980 | mark all, delete all, mark as read or unread and a click on an item change nothing | the MoreActionSheet handlers are no-ops; the list item has no click handler | `match` | app/src/pages/Notifications/components/MoreActionSheet.tsx:154-160; app/src/pages/Notifications/components/NotificationsList.tsx:38-57; BR-UBTCON-980 |
| 068 | BR-UBTCON-981 | the list has one section per date range; Notifications_Header shows its badge only when BadgeNumber > 0 | the sections match; the header always shows the Badge, also for 0 | `partial` | app/src/pages/Notifications/components/NotificationsListBreakpoints.tsx:26-43; app/src/pages/Notifications/components/Notifications_Header.tsx:52; BR-UBTCON-981<br>**F2** (major) |
| 069 | BR-UBTCON-982 | a restored view with a preload: each swiped item found at its list position becomes read, and UnreadNotificationsCount and the section badge drop by 1 | not ported; the code comment says that no caller sets the preload | `unclear` | TST Notifications.mvc.js:1470-1515; app/src/pages/Notifications/hooks/notificationsState.ts:93-97; BR-UBTCON-982<br>**Q2** |
| 070 | BR-UBTCON-983 | "No Notifications Found" after a completed fetch that returns an empty list | nothing is shown | `missing` | app/src/pages/Notifications/NotificationsPage.tsx:155-156; BR-UBTCON-983<br>**F1** (major) |
| 071 | BR-UBTCON-985 | at most 20 messages; no load-more on scroll; no handler of pull-to-refresh | maxRecords 20; no scroll-end or pull handler | `match` | app/src/pages/Notifications/hooks/notificationsState.ts:119; app/src/pages/Notifications/components/Layout_MainPages_Upgrade.tsx:28-31; BR-UBTCON-985 |
| 072 | SetDefaultFilters (BR-UBTCON-987) | only the missing values: dates from Older.From to Today.To, then ReadOnly = None, then Sort_ByNewest = Yes | setDefaultFilters with the same three checks | `match` | app/src/pages/Notifications/hooks/notificationsState.ts:237-248; TST Notifications.mvc.js:1708-1773; BR-UBTCON-987 |
| 073 | App_Notifications_AugmentDateRanges (BR-UBTCON-161) | Today [0, 0]; Last 7 Days [-7, -1]; Last 30 Days [-30, -8]; Older [AddMonths(-6), -31]; other ids are skipped | the same four ranges | `match` | app/src/pages/Notifications/hooks/notificationsState.ts:197-213; TST UBTConnect.controller.js:359-484, 420, 423; BR-UBTCON-161<br>The KB rule gives another Older range: see K1 in section 6.2. |
| 074 | App_Notifications_GetBreakpoints (BR-UBTCON-268) | one breakpoint per range with items: Position = index of the first item, SectionName, BadgeCount = unread items; sorted by Position; empty list → none | the same | `match` | app/src/pages/Notifications/hooks/notificationsState.ts:215-235; app/src/pages/Notifications/components/actions.ts:9-10; TST UBTConnect.controller.js:498-617; BR-UBTCON-268 |
| 075 | view cache on back (P-BACK) | IsViewRestoredFromCache selects the restored branch of ScreenEvent_OnInitialize; OnReady refreshes the data | useViewState keeps CurrentSearchString, Filter_Updates and HasFiltersApplied; onReady fetches again | `match` | app/src/pages/Notifications/hooks/useNotifications.ts:49-85; app/src/pages/Notifications/hooks/notificationsState.ts:34-50; migration/patterns/P-BACK.md |

**Strings**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 076 | screen strings (2 texts, 4 uses) | "Notifications" (title, two arms), "Search notifications" (two inputs) | the same texts | `match` | app/src/pages/Notifications/NotificationsPage.tsx:48, 56 |
| 077 | DEV-only strings of the screen | DEV: "No results found for '" and "Sorry, we couldn't find any results for your search. …" (EmptyList) | none | `match` | pack/strings.md<br>DEV and TST differ: see section 6.1. |
| 078 | disabled strings of InitializeSetting | "To access your Private Messages,", "please login to the", "Connect App.", "CommunityHub App." (disabled WarningMessage) | none | `n/a` | pack/strings.md; pack/screens.md InitializeSetting<br>dead in the model |
| 079 | skeleton strings | "Example & Example", "Example, Example" (GetSkeleton_UI_NotificationContent): never shown | none | `match` | TST UBTConnect.controller.js:11929-11936<br>See row 038. |

All 2 texts of the screen match. The DEV-only and disabled strings are in the rows above.

### 2.2 NotificationDetails (not built)

The board has no row for NotificationDetails, so no decision exists (`grep -n "^| NotificationDetails "
migration/board.md` finds nothing). TST has no compiled file of the screen, and the DEV inventory of 2026-10-21 does
not list it. The screen is new on DEV.

On DEV, the screen takes `MessageInstanceId` and runs `FetchMessageInstance` at start. That data action calls
`Get_UI_NotificationDetails` of `Connect2_Notification_CS`. The screen shows the title with a calendar icon, the
summary and the date ("ddd dd/MM/yyyy HH:mm tt") in `Layout_MainPages_Upgrade`, with `BottomBarMenu` and
`CommonUI_InsideLayout`. On DEV, `Handler_NotificationDetail` of Notifications opens it; for an unread item it calls
`MarkAsRead` first.

A build needs a route with the input, the data action and the service action `Get_UI_NotificationDetails`. It also
needs the DEV version of NotificationsList, which opens the screen. Q1 asks for the board decision.

**Identity**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 080 | screen NotificationDetails (all items) | DEV: input MessageInstanceId; FetchMessageInstance → Get_UI_NotificationDetails (Connect2_Notification_CS); title, summary and date in Layout_MainPages_Upgrade | no route, no page | `n/a` | migration/board.md: no row for NotificationDetails; tst_source.py list: no UBTConnect.App_Notifications.NotificationDetails.mvc.js; migration/survey/dev-inventory.json: not listed<br>The screen exists on DEV only. The board has no decision. **Q1** |

## 3. Blocks of the flow

### 3.1 Notifications_Action

Used by Notifications (HeaderContent). React: `app/src/pages/Notifications/components/Notifications_Action.tsx`.

**Identity**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 081 | inputs and local variable | HaveFiltersApplied, BottomSheetId, isLoaded, ShowSubscriptionOnClick (all mandatory); local IsOnlyShowUnRead. TST: no event. DEV: event OnlyShowUnread | props with the same names; useState(false) | `match` | app/src/pages/Notifications/components/Notifications_Action.tsx:20-39; TST Notifications_Action.mvc.js:13-37<br>DEV and TST differ: see section 6.1. |

**UI tree**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 082 | CustomContainer and Columns_Two | Neutral0; padding horizontal Base, top Small; margin top Base; Columns_Two ReduceLast | the same options | `match` | app/src/pages/Notifications/components/Notifications_Action.tsx:55-65; TST Notifications_Action.mvc.js:190-205 |
| 083 | Left column | SkeletonSection(not isLoaded) > If HaveFiltersApplied: Icon ErrorFill (Red, NonStandard_14, "header-filter-enabled") > display-flex: IconText "Sort" (Primary) with Icon Tune (Base_24), and Icon ExpandMore; all three → IconClick | the same tree; onClicked and onClick → iconClick | `match` | app/src/pages/Notifications/components/Notifications_Action.tsx:45-88; TST Notifications_Action.mvc.js:250-430 |
| 084 | Right column | SkeletonSection > filter icon > label "Only show unread" (margin-right-s) for Switch_IsOnlyShowUnRead (style switch, variable IsOnlyShowUnRead). TST: no OnChange | the same label; a checkbox switch bound to the local state | `match` | app/src/pages/Notifications/components/Notifications_Action.tsx:89-110; TST Notifications_Action.mvc.js:434-520 |

**Block actions**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 085 | IconClick | isLoaded: ShowSubscriptionOnClick → App_Subscription_ShowUpgradePopUp, else BottomSheetOpen(BottomSheetId); not isLoaded → nothing | the same branches | `match` | app/src/pages/Notifications/components/Notifications_Action.tsx:40-44; TST Notifications_Action.mvc.js:554-610 |
| 086 | Switch_IsOnlyShowUnReadOnChange (DEV only) | DEV: trigger OnlyShowUnread(IsOnlyShowUnRead). TST: the switch has no OnChange | none | `match` | pack/blocks.md Notifications_Action; TST Notifications_Action.mvc.js:502-516<br>DEV and TST differ: see section 6.1. |

**Business logic**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 087 | BR-UBTCON-984 | the sort control opens the sheet or the upgrade dialog; the switch changes nothing | as in the rows above | `match` | app/src/pages/Notifications/components/Notifications_Action.tsx:40-44, 96-107; BR-UBTCON-984 |

**Strings**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 088 | block strings (2) | "Sort", "Only show unread" | the same texts | `match` | app/src/pages/Notifications/components/Notifications_Action.tsx:70, 94 |

### 3.2 Notifications_Header

Used by NotificationsListBreakpoints, and by Notifications inside a hidden Container. React:
`app/src/pages/Notifications/components/Notifications_Header.tsx`.

**Identity**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 089 | inputs | Title, BadgeNumber (mandatory), isLoading (mandatory) | props title, badgeNumber, isLoading | `match` | app/src/pages/Notifications/components/Notifications_Header.tsx:11-26 |

**UI tree**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 090 | CustomContainer | "updates-list__header"; Neutral0; padding vertical ExtraSmall, horizontal Base; empty margin; border Neutral4, top Large | the same options | `match` | app/src/pages/Notifications/components/Notifications_Header.tsx:29-38; TST Notifications_Header.mvc.js:168-202 |
| 091 | Columns_Two Left: SkeletonSection(isLoading) > IconText | icon on the right, spacing ExtraSmall, Neutral7, ExtraSmall, SemiBold, Text = Title | the same | `match` | app/src/pages/Notifications/components/Notifications_Header.tsx:39-51; TST Notifications_Header.mvc.js:230-275 |
| 092 | If_HasBadge | `BadgeNumber > 0` → Badge (RedDark, ExtraSmall, MaxNumber 9, Number = BadgeNumber); else nothing | Badge always, also for 0 | `partial` | app/src/pages/Notifications/components/Notifications_Header.tsx:52; TST Notifications_Header.mvc.js:291-312<br>**F2** (major) |

### 3.3 NotificationsListBreakpoints

Used by Notifications. React: `app/src/pages/Notifications/components/NotificationsListBreakpoints.tsx`.

**Identity**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 093 | inputs and events | Breakpoints, IsLoading, UI_NotificationItemList. TST: no event. DEV: NotificationDetail, UpdateReadCount | props breakpoints, isLoading, uiNotificationItemList | `match` | app/src/pages/Notifications/components/NotificationsListBreakpoints.tsx:7-21; TST NotificationsListBreakpoints.mvc.js:13-30<br>DEV and TST differ: see section 6.1. |

**UI tree**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 094 | list of Breakpoints | "list list-group"; per item a container with Notifications_Header (Title = SectionName, BadgeNumber = BadgeCount, isLoading) and NotificationsList (CurrentBreakpoint, IN_NotificationItemList, IsLoading) | the same | `match` | app/src/pages/Notifications/components/NotificationsListBreakpoints.tsx:25-44; TST NotificationsListBreakpoints.mvc.js:170-245 |

**Block actions**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 095 | Handler_UpdateReadCount (DEV only) | DEV: recount the section badge and the read state of the item, then raise UpdateReadCount. TST: no action | none | `match` | pack/blocks.md NotificationsListBreakpoints<br>DEV and TST differ: see section 6.1. |

### 3.4 NotificationsList

Used by NotificationsListBreakpoints. React: `app/src/pages/Notifications/components/NotificationsList.tsx`, with the
row `Notification_ListItem.tsx` (a copy of the `UBTConnectLibrary` block).

**Identity**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 096 | inputs and local variable | CurrentBreakpoint, IN_NotificationItemList, IsLoading; local UI_NotificationItemList. DEV adds the locals of the delete dialog | props and useState | `match` | app/src/pages/Notifications/components/NotificationsList.tsx:10-27; TST NotificationsList.mvc.js:13-33<br>DEV and TST differ: see section 6.1. |

**UI tree**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 097 | List_Notifications | "list list-group background-neutral-0 updates-list"; per item SkeletonSection(IsLoading) > "updates-list__list-item" with data-plus-date = DateTimeToText(DateTimeCreated) > Notification_ListItem (avatar ProfileIconURL, Description = Title, IsDoubleAvatar False, IsRead, date) + ScrollAnchor(Id) | the same tree | `match` | app/src/pages/Notifications/components/NotificationsList.tsx:31-58; TST NotificationsList.mvc.js:175-270 |
| 098 | swipe actions and delete dialog (DEV only) | DEV: swipe "Mark as read" or "Mark as unread" → ToggleRead (Comms_CS); swipe "Delete" → Notifications_ConfirmDialog → Delete_Notifications. TST: a plain list item | none | `match` | pack/blocks.md NotificationsList<br>DEV and TST differ: see section 6.1. |
| 099 | Notification_ListItem (UBTConnectLibrary.ConnectCorePatterns) | background GetBackgroundColor_IsRead, padding Base; Columns_Three; AvatarImage Base_52; the description through SanitizedHtml (ResetWhitelist); Get_ElapsedTime_Notification; NotificationDot when not read | Notification_ListItem with the same tree | `match` | app/src/pages/Notifications/components/Notification_ListItem.tsx:29-101; TST UBTConnectLibrary.ConnectCorePatterns.Notification_ListItem.mvc.js:222-511<br>No KB page and no pack entry: checked against the TST compiled file only. |

**Block actions**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 100 | OnInitialize | ListFilter(IN_NotificationItemList, date within CurrentBreakpoint.DateRange), then ListAppendAll | useState(() => itemsOfRange(…)) once per mount | `match` | app/src/pages/Notifications/components/NotificationsList.tsx:27; app/src/pages/Notifications/components/actions.ts:9-14; TST NotificationsList.mvc.js:308-356 |
| 101 | OnParametersChanged (DEV only) | DEV: clear the list, filter again. TST: no OnParametersChanged | none | `match` | pack/blocks.md NotificationsList; TST NotificationsList.mvc.js:375-378<br>DEV and TST differ: see section 6.1. |
| 102 | click on an item (DEV only) | DEV: OnClick_NotificationDetail → event NotificationDetail. TST: no click handler | no click handler | `match` | pack/blocks.md NotificationsList; TST NotificationsList.mvc.js:175-270<br>DEV and TST differ: see section 6.1. |

### 3.5 Notifications_SortSheet

Used by Notifications. React: `Notifications_SortSheet` and `SortSheet` in
`app/src/pages/Notifications/components/SortSheet.tsx`. The internals of the shared `SortSheet` are not checked here.

**UI tree**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 103 | SortSheet arguments | In_StartFilter empty; HasSorting (Enable, YesLabel "Newest to Oldest", NoLabel "Oldest to Newest", Order 1), Extra_OptionChoices (empty local) | SortSheet yesLabel and noLabel; NoneLabel '' gives no third choice (BR-UBTCON-333) | `match` | app/src/pages/Notifications/components/SortSheet.tsx:82-95, 161-172; TST Notifications_SortSheet.mvc.js:137-160 |

**Block actions**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 104 | events and FilterSheetApplyFilters | TST: SheetInitialized → SheetInitialized; ApplySort → FilterSheetApplyFilters → ApplyFilters() without a value; Loaded → Loaded. DEV: ApplyFilters(IsNewestToOldest) | onSheetInitialized; onApplySort → onApplyFilters | `match` | app/src/pages/Notifications/components/SortSheet.tsx:161-172; TST Notifications_SortSheet.mvc.js:163-200, 286-320<br>DEV and TST differ: see section 6.1. |

**Strings**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 105 | block strings (2) | "Newest to Oldest", "Oldest to Newest" | the same texts | `match` | app/src/pages/Notifications/components/SortSheet.tsx:166-167 |

### 3.6 Notifications_MoreActionSheet

Used by Notifications. React: `Notifications_MoreActionSheet` and `MoreActionSheet` in
`app/src/pages/Notifications/components/MoreActionSheet.tsx`. Only this block uses `MoreActionSheet`, so the rows
check its options and events here.

**UI tree**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 106 | MoreActionSheet arguments | In_StartFilter and In_Filter_Common_Options_Choice empty | MoreActionSheet without filter options | `match` | app/src/pages/Notifications/components/MoreActionSheet.tsx:154-160; TST Notifications_MoreActionSheet.mvc.js:126-140 |
| 107 | MoreActionSheet (App_CommonBlocks_Filter) in this use | TST: BottomSheet without header (Neutral2, padding Small, footer 72px); "Mark all as read" (Mail, Primary) → MarkAllAsRead; "Delete all notifications" (Delete, Error) → DeleteAllNotification; Cancel → OnClick_Clear → close, ApplySort; Back closes the open sheet. DEV: a confirmation dialog before delete-all, and mark-all closes the sheet | the TST tree and events | `match` | app/src/pages/Notifications/components/MoreActionSheet.tsx:35-131; TST UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.mvc.js:418, 520, 641, 1908, 1937, 2168<br>DEV and TST differ: see section 6.1. |

**Block actions**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 108 | events and handlers | TST: MarkAllAsRead → Handler_MarkAllAsRead (empty); DeleteAllNotification → Handler_DeleteAllNotification (empty); ApplySort → ApplyFilters; SheetInitialized; Loaded → Loaded | onMarkAllAsRead and onDeleteAllNotification are no-ops; onApplySort → onApplyFilters; onSheetInitialized | `match` | app/src/pages/Notifications/components/MoreActionSheet.tsx:141-162; TST Notifications_MoreActionSheet.mvc.js:145-215, 253-365; migration/knowledge/audit-a1-empty-handlers.md:36 |
| 109 | Handler_MarkAllAsRead and Handler_DeleteAllNotification (DEV) | DEV: trigger MarkAllAsRead and trigger DeleteAll (new events of the block) | none | `match` | pack/blocks.md Notifications_MoreActionSheet<br>DEV and TST differ: see section 6.1. |

**Strings**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 110 | sheet strings (3) | "Mark all as read", "Delete all notifications", "Cancel" | the same texts | `match` | app/src/pages/Notifications/components/MoreActionSheet.tsx:86-93, 117 |

### 3.7 Notifications_NoItemsFound

Used by Notifications (row of the True branch of If_HasNoNotifications). React has no component for it.

**UI tree**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 111 | widget tree | CustomContainer "full-width full-height" (Neutral0, padding Base, flex) > CustomContainer "full-width" (padding Small, border Neutral3) > CircleButton (Primary, Small_40) with Icon CalendarBusyFill (Neutral0, Base_24); CustomText "No Notifications Found" (margin-top-base, Neutral10, Base, SemiBold); CustomText (Neutral10, Small, Regular) | no component | `missing` | TST Notifications_NoItemsFound.mvc.js:151-320; pack/blocks.md Notifications_NoItemsFound<br>**F1** (major) |

**Strings**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 112 | block strings (2) | "No Notifications Found", "We were unable to find any Notifications to display." | not in React | `missing` | TST Notifications_NoItemsFound.mvc.js:278, 315<br>**F1** (major) |

### 3.8 Notifications_ConfirmDialog

DEV only: NotificationsList and MoreActionSheet use it on DEV. TST has no such block.

**UI tree**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 113 | block (DEV only) | DEV: delete dialog (texts by IsSingle, Cancel and Delete buttons), used by NotificationsList and MoreActionSheet. TST: no such block | none | `match` | tst_source.py list: no file; pack/blocks.md Notifications_ConfirmDialog<br>DEV and TST differ: see section 6.1. |

**Strings**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 114 | block strings (DEV only) | "Delete notification", "Delete all notifications?", two "Are you sure…" texts, "Mark as read", "Mark as unread", "Delete", "Cancel" | none | `match` | pack/strings.md<br>DEV and TST differ: see section 6.1. |

### 3.9 MessageListItem

No screen or block uses it, on DEV or on TST.

**UI tree**

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 115 | block | no instance on DEV ("used by nothing") or on TST (no screen or block creates its view) | no component | `n/a` | pack/blocks.md MessageListItem; tst_source.py grep App_Notifications.MessageListItem.mvc$view; BR-UBTCON-986<br>dead in the model |

### 3.10 Blocks of other flows

- BottomBarMenu and CommonUI_InsideLayout (App_Common, `../App_Common/pack/blocks.md`): Notifications passes the
  arguments of their rows in §2.1 (`match`). The report of App_Common checks their behaviour (BR-UBTCON-310 to
  BR-UBTCON-318).
- SortSheet, MoreActionSheet and FilterSheet_OptionChoice_Item (App_CommonBlocks_Filter, `../_shared/pack/blocks.md`):
  the arguments and the events of this use are in §3.5 and §3.6. Their internals are not checked here (shared).
- SectionSeparator (App_Common_Blocks): only NotificationDetails uses it (not built).
- Block_PINUnlock, Block_PINUnlock_ContentWrapper (App_PIN), Policy_Checker (App_Policies), OfflineDataSyncEvents,
  UnsupportedVersion_* and WelcomeToConnect (App_Common), CacheControl_UserInfo_Wrapper (App_Cache),
  HandleOnResumeOpenLink (Legacy_Share), App_IconBadge (App_Common_Blocks): transitive through CommonUI_InsideLayout
  and BottomBarMenu. Not checked here.

## 4. Shared blocks and actions

The flow-level rows (screen `-` in `checklist.json`):

| Id | Item | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 116 | Directory_Updates_RefreshBottomBarCount (shared, BR-UBTCON-171) | ForceRefresh = True after each fetch of the list | directory_Updates_RefreshBottomBarCount(true) | `match` | app/src/pages/Notifications/hooks/useNotifications.ts:110; app/src/lib/ubtConnect/actions.ts:62-71<br>This row checks the call. The internals are shared by 19 flows. |
| 117 | ScrollTop (shared) | (".active-screen", "instant") in Handler_FilterSearchText and Handler_ApplyFilters | scrollTop('.active-screen', 'instant') | `match` | app/src/pages/Notifications/hooks/useNotifications.ts:146; app/src/lib/ubtConnect/actions.ts:73-81 |
| 118 | BottomSheetOpen (OutSystemsUI) | opens a sheet by the id that SheetInitialized gave | bottomSheetOpen(id) | `match` | app/src/components/ui/lib/actions.ts:22; app/src/pages/Notifications/hooks/useNotifications.ts:168; app/src/pages/Notifications/components/Notifications_Action.tsx:43 |
| 119 | App_Subscription_ShowUpgradePopUp (UBTConnect_Utils) | called by IconClick when ShowSubscriptionOnClick | showUpgradePopUp() | `match` | app/src/pages/Notifications/components/Notifications_Action.tsx:42; app/src/platform/feedback/dialogs/subscription.ts:10<br>Not reached on this screen: ShowSubscriptionOnClick stays False (row 052). |
| 120 | client variables | Directory_Updates_UnreadCount, _LastCheck and _CheckFrequency_Minut through Directory_Updates_RefreshBottomBarCount; App_PIN_BiometricEnabled, App_Policies_*, IsNavigateToHomeOnBack through CommonUI_InsideLayout | the same variables through the shared code | `match` | app/src/lib/ubtConnect/actions.ts:62-71; pack/data.md<br>The CommonUI_InsideLayout part is checked in the report of App_Common. |

Not checked here (shared, in `../_shared/pack/actions.md`): App_CommonFilter_CheckCountry,
App_CommonFilter_DefineOptionNames, ExitApplicationForWebViewUpdate, GetURLFromEventDataURL,
GetUserInformation_Wrapper_Assign, Get_IsUnsupportedSystem, Get_IsUnsupportedVersion, OfflineDataSync,
OfflineDataSyncConfiguration, OpenGooglePlay_Chrome, OpenGooglePlay_UBTConnect, OpenGooglePlay_WebView,
SetResumeLoginLink, Try_GetIsSupportedVersion, Upgrade_UBTConnect, Upgrade_WebView. The filter actions run inside
SortSheet and MoreActionSheet. The other actions run in the transitive App_Common blocks.

The module client actions of this flow have rows in §2.1: App_Notifications_AugmentDateRanges,
App_Notifications_GetBreakpoints, GetSkeletonList_UI_Notification and GetSkeleton_UI_NotificationContent.
Directory_Updates_GetListBreakpoint does not run (row of SetupScrollListener). Directory_Updates_GetUpdatedBreakpoints
and Directory_Updates_MarkAllAsRead run only from disabled nodes.

This report does not check the internals of the referenced UI blocks of `UBTConnectLibrary` and `NavigationHandler`.
These blocks are Layout_MainPages_Upgrade, CustomContainer, Columns_Two, IconText, Icon, Input, Badge, SkeletonSection,
CircleButton, CustomText, EmptyList and ScrollAnchor. The rows above check the arguments that the flow passes. Notification_ListItem
has its own row (§3.4).

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix |
|---|---|---|---|---|---|
| F1 | major | Notifications / If_HasNoNotifications, Notifications_NoItemsFound | When a completed fetch returns no notification, TST shows `Notifications_NoItemsFound`: a calendar icon, "No Notifications Found" and "We were unable to find any Notifications to display." (BR-UBTCON-983). React renders a `NotCaptured` marker without children, which renders nothing in a built app. The content area stays empty. | `app/src/pages/Notifications/NotificationsPage.tsx:155-156`; `app/src/platform/feedback/NotCaptured.tsx:7-8` | Build `Notifications_NoItemsFound` from `UBTConnect.App_Notifications.Notifications_NoItemsFound.mvc.js:151-320` and pass it as the child of the marker (decision U21, `migration/app-shell.spec.md:353`: build from compiled code and mark NotCaptured). |
| F2 | major | Notifications_Header / If_HasBadge | TST shows the Badge only when `BadgeNumber > 0` (BR-UBTCON-981). React always renders it, so a section with no unread notification shows a red "0" badge. The mock gives every section an unread item, so the parity check does not see it. | `app/src/pages/Notifications/components/Notifications_Header.tsx:52` | Render the Badge only when `badgeNumber > 0`; add a mock case with a read section. |

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

The DEV model (MCP dump of 2026-10-27) is newer than TST for this flow. The KB page `ui/notifications.md` (DEV,
2026-10-05) describes the version that TST runs. In every row below, React follows TST.

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| Screen NotificationDetails | screen with `MessageInstanceId`, `Get_UI_NotificationDetails` | no screen | TST: not built | `tst_source.py list`; `migration/survey/dev-inventory.json` |
| Block Notifications_ConfirmDialog | delete dialog (single and all) | no block | TST | `tst_source.py list` |
| Notifications: variables | MaxRecords = 2000; ReadCount; Local_OnlyShowUnread; Screen_NotificationItemList | MaxRecords = 20; BadgeNumber (no writer); none of the other three | TST (maxRecords 20) | `UBTConnect.App_Notifications.Notifications.mvc.js:63-152` |
| FetchNotifications | `Local_OnlyShowUnread` → ListFilter(not IsRead) | no such variable, no branch | TST | `Notifications.mvc.js:63-152`, `1184-1203` |
| Title Badge | Number = ReadCount, set from UnreadNotificationsCount and by Handler_UpdateReadCount | Number = BadgeNumber, always 0 | TST | `Notifications.mvc.js:446-496` |
| Search_PostScroll container | Input only | Icon ArrowLeftAlt → Handler_ToggleSearch, then the Input | TST | `Notifications.mvc.js:296-440` |
| Placeholder_Header_Input | Search_PreScroll hidden when IsHeaderScrolled | Search_PreScroll always | TST | `Notifications.mvc.js:613-691` |
| Empty state | If `SelectedHistorySearch <> ""` → EmptyList "No results found for '…'" | Notifications_NoItemsFound only | TST (F1 open) | `Notifications.mvc.js:747-767` |
| Handler_FilterSearchText | also sets SelectedHistorySearch = Text (the server filters) | no SelectedHistorySearch writer (BR-UBTCON-977) | TST | `Notifications.mvc.js:1206-1270` |
| Handler_ApplyFilters, Notifications_SortSheet | ApplyFilters(IsNewestToOldest) → OrderByIsAscending; ScrollTop disabled | ApplyFilters() without a value; ScrollTop runs; no order writer (BR-UBTCON-978) | TST | `Notifications.mvc.js:2450-2504`; `Notifications_SortSheet.mvc.js:286-320` |
| Notifications_Action | switch OnChange → event OnlyShowUnread → Handler_OnlyShowUnread | switch without OnChange, no event (BR-UBTCON-984) | TST | `Notifications_Action.mvc.js:502-516` |
| NotificationsListBreakpoints | events NotificationDetail, UpdateReadCount; Handler_UpdateReadCount | no events, no actions | TST | `NotificationsListBreakpoints.mvc.js:170-245` |
| NotificationsList | swipe "Mark as read/unread" → ToggleRead; "Delete" → dialog → Delete_Notifications; item click → NotificationDetail; OnParametersChanged | plain list; OnInitialize only | TST | `NotificationsList.mvc.js:175-378` |
| Handler_NotificationDetail | IsRead → NotificationDetails; else MarkAsRead (Comms_CS) | no action | TST | `Notifications.mvc.js` (action list) |
| Notifications_MoreActionSheet and the screen handlers | MarkAllAsRead → MarkAllAsReadNotifications (Comms_CS) and refresh; DeleteAll → Delete_Notifications and refresh | empty handlers, no events (BR-UBTCON-980) | TST | `Notifications_MoreActionSheet.mvc.js:253-365` |
| MoreActionSheet (App_CommonBlocks_Filter) | "Delete all notifications" opens Notifications_ConfirmDialog; mark-all closes the sheet | both trigger their event at once; no dialog, no close | TST | `UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.mvc.js:1923-1937, 2154-2168` |

### 6.2 KB pages vs TST (for the KB owner)

The KB pages come from DEV (2026-10-05). In these three places a KB rule disagrees with the DEV pack and with TST.
React follows TST in each place.

| Id | KB text | TST (compiled code) | Source |
|---|---|---|---|
| K1 | BR-UBTCON-161: the Older section runs from `AddDays(CurrDate(),-31)` to `AddMonths(CurrDate(),-3)`, "a range whose start is after its end" | Older From = `AddMonths(CurrDate(), -6)`, To = `AddDays(CurrDate(), -31)`: the start is before the end. The DEV pack has the same values | `UBTConnect.controller.js:420, 423` |
| K2 | BR-UBTCON-979: "`BadgeNumber` (badge on the search/kebab icons, max 9)" | BadgeNumber feeds the Badge next to the title "Notifications" in Placeholder_Header_Title (both arms); the search and kebab icons have no badge | `UBTConnect.App_Notifications.Notifications.mvc.js:446-496, 497-612` |
| K3 | BR-UBTCON-981: "none -> `EmptyBreakpoint` (Today, position 0, badge 0)" | EmptyBreakpoint is a new UI_UpdateItem_BreakpointRec: SectionName "", Position 0, BadgeCount 0 | `UBTConnect.model.js:9534-9547`; `Notifications.mvc.js:2305-2312` |

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | NotificationDetails has no board row. Add one? | The screen exists on DEV only: TST has no compiled file, and the DEV inventory of 2026-10-21 does not list it. Without a row, the claim of `migration/clarify/PLAN.md` that every not-built screen is `skip` on the board is not true for this flow. | (a) Add a row `skip` with the reason "DEV only, not on TST; revisit when TST deploys it". (b) Build it now from the DEV model. | (a): TST is the source of truth, and the screen has no entry point on TST. |
| Q2 | Can the preload branch of ScreenEvent_OnInitialize (BR-UBTCON-982) run on TST? React does not port it. | On a view restored from cache, TST marks the swiped carousel items as read and lowers the unread counts. React has only a code comment that says no caller sets the preload. | (a) Port the branch. (b) Confirm with a read-only check of the callers of `EntitiesCarousel` on TST that no back navigation to Notifications carries a preload, and record it. | (b): on TST, Notifications opens no carousel, and no item has a click handler. |
| Q3 | The DEV model of App_Notifications is newer than TST (§6.1). How do we track it? | When TST deploys the DEV version, React lacks mark as read and unread, delete, mark all, the unread filter, the sort order, the search and NotificationDetails. | (a) Keep React on TST, and open a change request that lists the §6.1 rows for a rebuild when TST deploys them. (b) Build the DEV behaviour now behind a flag. | (a): TST is the source of truth, and the DEV server calls (ToggleRead, Delete_Notifications, MarkAllAsReadNotifications) have no TST evidence yet. |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 10 | 9 | 0 | 0 | 0 | 0 | 1 | 0 |
| data | 7 | 5 | 0 | 0 | 0 | 2 | 0 | 0 |
| ui | 36 | 31 | 1 | 2 | 0 | 0 | 2 | 0 |
| actions | 38 | 33 | 0 | 0 | 0 | 0 | 5 | 0 |
| validations | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 19 | 16 | 1 | 1 | 0 | 0 | 1 | 0 |
| strings | 9 | 7 | 0 | 1 | 0 | 0 | 1 | 0 |
| **total** | **120** | **102** | **2** | **4** | **0** | **2** | **10** | **0** |

## 9. Follow-up pass (2026-10-27)

Rows settled or sharpened after the user answers of 2026-10-27 and the TST files that `tst_source.py` reads. A row that stays `unclear` has a new question that names what settles it. Every row below has `verified: "live"`.

| Row | Old verdict | New verdict | Evidence |
|---|---|---|---|
| App_Notifications-069 | `unclear` | `n/a` | TST Notifications.mvc.js:1470-1515; app/src/pages/Notifications/hooks/notificationsState.ts:93-97; BR-UBTCON-982; migration/clarify/answers.json App_Notifications:Q2 |
