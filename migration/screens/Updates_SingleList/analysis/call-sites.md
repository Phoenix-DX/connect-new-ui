# Call sites: Updates_SingleList

For every service call: the chains of code that lead to it, from a root (user event, lifecycle handler, fetch at start, block event) down to the call. Built from compiled code only; conditions along a chain are not shown, read them in the files named.

## Observed in the capture (this screen)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (5 chain(s) starting in blocks of other screens omitted)

### `UBTConnect/Directory_Updates/Updates_SingleList/DataActionGetDateRanges`
- `Updates_SingleList.OnReady` → `Updates_SingleList.screenEvent_OnReady` → `Updates_SingleList.DataActionGetDateRanges`
- `Updates_SingleList fetch at start` → `Updates_SingleList.DataActionGetDateRanges`

### `UBTConnect_Utils/CacheControl/CacheControl_UserInfo/DataActionGetCacheInfo`
- `CacheControl.OnInitialize` → `CacheControl.onInitialize` → `event onNonCacheHit of CacheControl` → `CacheControl_UserInfo.cacheControlOnNonCacheHit` → `CacheControl_UserInfo.DataActionGetCacheInfo`
- `CacheControl_UserInfo fetch at start` → `CacheControl_UserInfo.DataActionGetCacheInfo`

### `UBTConnect_Utils/CacheControl/CacheControl_AllCountries/DataActionGetCacheInfo`
- `CacheControl.OnInitialize` → `CacheControl.onInitialize` → `event onNonCacheHit of CacheControl` → `CacheControl_AllCountries.cacheControlOnNonCacheHit` → `CacheControl_AllCountries.DataActionGetCacheInfo`
- `CacheControl_AllCountries fetch at start` → `CacheControl_AllCountries.DataActionGetCacheInfo`

### `UBTConnect_Utils/CacheControl/CacheControl_AllLocalities/DataActionGetCacheInfo`
- `CacheControl.OnInitialize` → `CacheControl.onInitialize` → `event onNonCacheHit of CacheControl` → `CacheControl_AllLocalities.cacheControlOnNonCacheHit` → `CacheControl_AllLocalities.DataActionGetCacheInfo`
- `CacheControl_AllLocalities fetch at start` → `CacheControl_AllLocalities.DataActionGetCacheInfo`

### `UBTConnect/Directory_Updates/Updates_SingleList/DataActionFetchUpdates`
- `event event_OnClick of Button` → `FilterSheet.onClick_ClearFilters` → `FilterSheet.onClick_Apply` → `event applyFilters of FilterSheet` → `Directory_Updates_FilterSheet.filterSheetApplyFilters` → `event applyFilters of Directory_Updates_FilterSheet` → `Updates_SingleList.handler_ApplyFilters` → `Updates_SingleList.refreshUpdates` → `Updates_SingleList.DataActionFetchUpdates`
- `onClick in Button` → `event event_OnClick of Button` → `FilterSheet.onClick_Apply` → `event applyFilters of FilterSheet` → `Directory_Updates_FilterSheet.filterSheetApplyFilters` → `event applyFilters of Directory_Updates_FilterSheet` → `Updates_SingleList.handler_ApplyFilters` → `Updates_SingleList.refreshUpdates` → `Updates_SingleList.DataActionFetchUpdates`
- `onClick in Icon` → `event click of Icon` → `Input.onClick_ClearString` → `event event_ClearString of Input` → `Updates_SingleList.handler_FilterSearchText` → `Updates_SingleList.refreshUpdates` → `Updates_SingleList.DataActionFetchUpdates`
- `onKeyUp in Input` → `Input.onKeyup` → `event event_Submit of Input` → `Updates_SingleList.handler_FilterSearchText` → `Updates_SingleList.refreshUpdates` → `Updates_SingleList.DataActionFetchUpdates`
- `onClick in CustomText` → `event clicked of CustomText` → `event click_MarkAll of UpdateItem_Header` → `Updates_SingleList.handler_MarkAllAsRead` → `Updates_SingleList.refreshUpdates` → `Updates_SingleList.DataActionFetchUpdates`
- `Updates_SingleList.OnReady` → `Updates_SingleList.screenEvent_OnReady` → `Updates_SingleList.DataActionGetDateRanges` → `Updates_SingleList.onAfterFetch_GetDateRanges` → `Updates_SingleList.refreshUpdates` → `Updates_SingleList.DataActionFetchUpdates`

### `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All`
- `BottomBarMenu.OnReady` → `BottomBarMenu.onReady` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`
- `onClick in CustomText` → `event clicked of CustomText` → `event click_MarkAll of UpdateItem_Header` → `Updates_SingleList.handler_MarkAllAsRead` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`
- `onClick in CustomContainer` → `event clicked of CustomContainer` → `event onClick of Update_ListItem` → `Updates_SingleList.handler_OnClickUpdateItem` → `Updates_SingleList.handler_MarkAsRead` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`
- `onClick in ContextMenu` → `event event_MarkAsRead of ContextMenu` → `event event_MarkAsRead of Update_ListItem` → `Updates_SingleList.handler_MarkAsRead` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`
- `onClick in ContextMenu` → `event event_MarkAsUnread of ContextMenu` → `event event_MarkAsUnread of Update_ListItem` → `Updates_SingleList.handler_MarkAsUnread` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`
- `event applyFilters of FilterSheet` → `Directory_Updates_FilterSheet.filterSheetApplyFilters` → `event applyFilters of Directory_Updates_FilterSheet` → `Updates_SingleList.handler_ApplyFilters` → `Updates_SingleList.refreshUpdates` → `Updates_SingleList.DataActionFetchUpdates` → `Updates_SingleList.onAfterFetch_FetchUpdates` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`

### `UBT_AppManager/ActionAppManager_AfterInitialize`
- `UBT_AppManager.appManager_OnAppReady_Web` → `UBT_AppManager.appManager_InitializeWebComponents` → `UBT_AppManager.appManager_AfterInitialize` → `server AppManager_AfterInitialize`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.onApplicationReady` → `UBT_AppManager_Mobile.appManager_Mobile_OnAppReady` → `UBT_AppManager.appManager_InitializeWebComponents` → `UBT_AppManager.appManager_AfterInitialize` → `server AppManager_AfterInitialize`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ActionSync_Info_GetMain`
- `UBTConnect.onApplicationReady` → `UBTConnect.connect_SetLoggedContext` → `UBTConnect.sync_Info_Main` → `server Sync_Info_GetMain`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.onApplicationReady` → `UBTConnect.sync_Info_Main` → `server Sync_Info_GetMain`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `Connect2_LegacyShared/ActionGetNumberUnreadMessages`
- `UBTConnect.onApplicationReady` → `UBTConnect.connect_SetLoggedContext` → `Connect2_LegacyShared.synchronizeNumberUnreadMessages` → `server GetNumberUnreadMessages`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.fCM_NotificationCallback` → `Connect2_LegacyShared.synchronizeNumberUnreadMessages` → `server GetNumberUnreadMessages`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ServiceAPIFetchData_CacheableMapEntities`
- `UBTConnect.get_Cacheable_MapEntities` → `server FetchData_CacheableMapEntities`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ServiceAPIFetchData_CacheableHouseholds`
- `UBTConnect.get_Cacheable_MapHouseholds` → `server FetchData_CacheableHouseholds`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

## Declared and reachable from the rendered blocks, not observed

### `UBTConnect/Directory_Updates/Updates_SingleList/ServiceAPIAction_UI_UpdateItem_MarkAsRead`
- `onClick in CustomContainer` → `event clicked of CustomContainer` → `event onClick of Update_ListItem` → `Updates_SingleList.handler_OnClickUpdateItem` → `Updates_SingleList.handler_MarkAsRead` → `server Action_UI_UpdateItem_MarkAsRead`
- `onClick in ContextMenu` → `event event_MarkAsRead of ContextMenu` → `event event_MarkAsRead of Update_ListItem` → `Updates_SingleList.handler_MarkAsRead` → `server Action_UI_UpdateItem_MarkAsRead`

### `UBTConnect/Directory_Updates/Updates_SingleList/ServiceAPIAction_UI_UpdateItem_MarkAllAsRead`
- `onClick in CustomText` → `event clicked of CustomText` → `event click_MarkAll of UpdateItem_Header` → `Updates_SingleList.handler_MarkAllAsRead` → `server Action_UI_UpdateItem_MarkAllAsRead`

### `UBTConnect/Directory_Updates/Updates_SingleList/ServiceAPIAction_UI_UpdateItem_MarkAsUnread`
- `onClick in ContextMenu` → `event event_MarkAsUnread of ContextMenu` → `event event_MarkAsUnread of Update_ListItem` → `Updates_SingleList.handler_MarkAsUnread` → `server Action_UI_UpdateItem_MarkAsUnread`

### `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_CreateShareProfileLink`
- `ShareSheet.handler_OnClickExternalOption` → `server CS_CreateShareProfileLink`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_ShareObject`
- `ShareSheet.handler_OnClickRecentMember` → `ShareSheet.action_SubmitShare` → `server CS_ShareObject`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `ShareSheet.handler_OnClickSend` → `ShareSheet.action_SubmitShare` → `server CS_ShareObject`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetAvailableMembers`
- `onKeyUp in Input` → `Input.onKeyup` → `event event_Submit of Input` → `ShareSheet.handler_InputEventSubmit` → `ShareSheet.DataActionGetAvailableMembers`
- `ShareSheet fetch at start` → `ShareSheet.DataActionGetAvailableMembers`

### `UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetRecentlyShared`
- `ShareSheet.OnParametersChanged` → `ShareSheet.screenEvent_OnParametersChanged` → `ShareSheet.DataActionGetRecentlyShared`
- `ShareSheet fetch at start` → `ShareSheet.DataActionGetRecentlyShared`

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

