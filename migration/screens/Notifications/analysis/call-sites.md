# Call sites: Notifications

For every service call: the chains of code that lead to it, from a root (user event, lifecycle handler, fetch at start, block event) down to the call. Built from compiled code only; conditions along a chain are not shown, read them in the files named.

## Observed in the capture (this screen)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (5 chain(s) starting in blocks of other screens omitted)

### `UBTConnect/App_Notifications/Notifications/DataActionGetDateRanges`
- `Notifications.OnReady` → `Notifications.screenEvent_OnReady` → `Notifications.DataActionGetDateRanges`
- `Notifications fetch at start` → `Notifications.DataActionGetDateRanges`

### `UBT_AppManager/ActionAppManager_AfterInitialize`
- `UBT_AppManager.appManager_OnAppReady_Web` → `UBT_AppManager.appManager_InitializeWebComponents` → `UBT_AppManager.appManager_AfterInitialize` → `server AppManager_AfterInitialize`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.onApplicationReady` → `UBT_AppManager_Mobile.appManager_Mobile_OnAppReady` → `UBT_AppManager.appManager_InitializeWebComponents` → `UBT_AppManager.appManager_AfterInitialize` → `server AppManager_AfterInitialize`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/App_Notifications/Notifications/DataActionFetchNotifications`
- `onChange in Notifications_Action` → `Notifications_Action.switch_IsOnlyShowUnReadOnChange` → `event onlyShowUnread of Notifications_Action` → `Notifications.handler_OnlyShowUnread` → `Notifications.DataActionFetchNotifications`
- `event event_OnClick of Button` → `MoreActionSheet.onClick_Clear` → `MoreActionSheet.onClick_Apply` → `event applySort of MoreActionSheet` → `Notifications_MoreActionSheet.filterSheetApplyFilters` → `event applyFilters of Notifications_MoreActionSheet` → `Notifications.handler_ApplyFilters` → `Notifications.refreshNotifications` → `Notifications.DataActionFetchNotifications`
- `event event_OnClick of Button` → `SortSheet.onClick_Clear` → `SortSheet.onClick_Apply` → `event applySort of SortSheet` → `Notifications_SortSheet.filterSheetApplyFilters` → `event applyFilters of Notifications_SortSheet` → `Notifications.handler_ApplyFilters` → `Notifications.refreshNotifications` → `Notifications.DataActionFetchNotifications`
- `onClick in Button` → `event event_OnClick of Button` → `SortSheet.onClick_Apply` → `event applySort of SortSheet` → `Notifications_SortSheet.filterSheetApplyFilters` → `event applyFilters of Notifications_SortSheet` → `Notifications.handler_ApplyFilters` → `Notifications.refreshNotifications` → `Notifications.DataActionFetchNotifications`
- `onClick in Icon` → `event click of Icon` → `Input.onClick_ClearString` → `event event_ClearString of Input` → `Notifications.handler_FilterSearchText` → `Notifications.refreshNotifications` → `Notifications.DataActionFetchNotifications`
- `onKeyUp in Input` → `Input.onKeyup` → `event event_Submit of Input` → `Notifications.handler_FilterSearchText` → `Notifications.refreshNotifications` → `Notifications.DataActionFetchNotifications`

### `UBTConnect/ActionSync_Info_GetMain`
- `UBTConnect.onApplicationReady` → `UBTConnect.connect_SetLoggedContext` → `UBTConnect.sync_Info_Main` → `server Sync_Info_GetMain`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.onApplicationReady` → `UBTConnect.sync_Info_Main` → `server Sync_Info_GetMain`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All`
- `BottomBarMenu.OnReady` → `BottomBarMenu.onReady` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`
- `Notifications.handler_MarkAllAsRead` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `Notifications.handler_MarkAsRead` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `Notifications.handler_MarkAsUnread` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `onClick in IconText` → `event clicked of IconText` → `MoreActionSheet.markAllAsReadClicked` → `event markAllAsRead of MoreActionSheet` → `Notifications_MoreActionSheet.handler_MarkAllAsRead` → `event markAllAsRead of Notifications_MoreActionSheet` → `Notifications.handler_MoreActionSheetMarkAllAsRead` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`
- `onChange in Notifications_Action` → `Notifications_Action.switch_IsOnlyShowUnReadOnChange` → `event onlyShowUnread of Notifications_Action` → `Notifications.handler_OnlyShowUnread` → `Notifications.DataActionFetchNotifications` → `Notifications.onAfterFetch_FetchNotifications` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`

### `UBTConnect_Utils/ActionGetUserInformation`
- `UBTConnect_Utils.cache_UserInfo_GetCallback` → `server GetUserInformation`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `Connect2_LegacyShared/ActionGetNumberUnreadMessages`
- `UBTConnect.onApplicationReady` → `UBTConnect.connect_SetLoggedContext` → `Connect2_LegacyShared.synchronizeNumberUnreadMessages` → `server GetNumberUnreadMessages`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.fCM_NotificationCallback` → `Connect2_LegacyShared.synchronizeNumberUnreadMessages` → `server GetNumberUnreadMessages`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ServiceAPIFetchData_CacheableMapEntities`
- `UBTConnect.get_Cacheable_MapEntities` → `server FetchData_CacheableMapEntities`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ServiceAPIFetchData_CacheableHouseholds`
- `UBTConnect.get_Cacheable_MapHouseholds` → `server FetchData_CacheableHouseholds`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

## Declared and reachable from the rendered blocks, not observed

### `UBTConnect/App_Notifications/Notifications/ServiceAPIAction_UI_UpdateItem_MarkAllAsRead`
- `Notifications.handler_MarkAllAsRead` → `server Action_UI_UpdateItem_MarkAllAsRead`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/App_Notifications/Notifications/ActionMarkAllAsReadNotifications`
- `onClick in IconText` → `event clicked of IconText` → `MoreActionSheet.markAllAsReadClicked` → `event markAllAsRead of MoreActionSheet` → `Notifications_MoreActionSheet.handler_MarkAllAsRead` → `event markAllAsRead of Notifications_MoreActionSheet` → `Notifications.handler_MoreActionSheetMarkAllAsRead` → `server MarkAllAsReadNotifications`

### `UBTConnect/App_Notifications/Notifications/ServiceAPIDelete_Notifications`
- `MoreActionSheet.deleteAllNotificationClicked` → `event deleteAllNotification of MoreActionSheet` → `Notifications_MoreActionSheet.handler_DeleteAllNotification` → `event deleteAll of Notifications_MoreActionSheet` → `Notifications.handler_MoreActionSheetDeleteAll` → `server Delete_Notifications`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/App_Notifications/Notifications/ActionMarkAsRead`
- `onClick in NotificationsList` → `NotificationsList.onClick_NotificationDetail` → `event notificationDetail of NotificationsList` → `event notificationDetail of NotificationsListBreakpoints` → `Notifications.handler_NotificationDetail` → `server MarkAsRead`

### `UBTConnect/App_Notifications/NotificationsList/ActionToggleRead`
- `onClick in NotificationsList` → `NotificationsList.handler_ToggleRead` → `server ToggleRead`

### `UBTConnect/App_Notifications/NotificationsList/ServiceAPIDelete_Notifications`
- `NotificationsList.handler_DeleteNotification` → `server Delete_Notifications`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

