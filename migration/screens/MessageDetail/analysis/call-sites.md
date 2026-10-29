# Call sites: MessageList

For every service call: the chains of code that lead to it, from a root (user event, lifecycle handler, fetch at start, block event) down to the call. Built from compiled code only; conditions along a chain are not shown, read them in the files named.

## Observed in the capture (this screen)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (5 chain(s) starting in blocks of other screens omitted)

### `UBT_AppManager/ActionAppManager_AfterInitialize`
- `UBT_AppManager.appManager_OnAppReady_Web` → `UBT_AppManager.appManager_InitializeWebComponents` → `UBT_AppManager.appManager_AfterInitialize` → `server AppManager_AfterInitialize`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.onApplicationReady` → `UBT_AppManager_Mobile.appManager_Mobile_OnAppReady` → `UBT_AppManager.appManager_InitializeWebComponents` → `UBT_AppManager.appManager_AfterInitialize` → `server AppManager_AfterInitialize`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageList/DataActionGetMessages`
- `onClick in MessageListBlock` → `event onClick_GoToMessageDetail of MessageListBlock` → `ScreenBlock_MessageList.onClick_GoToMessageDetail` → `ScreenBlock_MessageList.DataActionGetMessages`
- `ScreenBlock_MessageList.OnReady` → `ScreenBlock_MessageList.onReady` → `ScreenBlock_MessageList.DataActionGetMessages`
- `ScreenBlock_MessageList.onClick_ApplyFilters` → `ScreenBlock_MessageList.refreshMessages` → `ScreenBlock_MessageList.DataActionGetMessages`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `onClick in MessageListBlock` → `event markAllRead of MessageListBlock` → `ScreenBlock_MessageList.onClick_MarkAllAsRead` → `ScreenBlock_MessageList.refreshMessages` → `ScreenBlock_MessageList.DataActionGetMessages`
- `ScreenBlock_MessageList.onClick_ResetFilters` → `ScreenBlock_MessageList.refreshMessages` → `ScreenBlock_MessageList.DataActionGetMessages`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `onClick in ScreenBlock_MessageList` → `ScreenBlock_MessageList.onClick_CloseSearchAndFilter` → `ScreenBlock_MessageList.onClickSearchClear` → `ScreenBlock_MessageList.onHandle_SearchHistorySelectedItem` → `ScreenBlock_MessageList.refreshMessages` → `ScreenBlock_MessageList.DataActionGetMessages`

### `UBTConnect/ActionSync_Info_GetMain`
- `UBTConnect.onApplicationReady` → `UBTConnect.connect_SetLoggedContext` → `UBTConnect.sync_Info_Main` → `server Sync_Info_GetMain`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.onApplicationReady` → `UBTConnect.sync_Info_Main` → `server Sync_Info_GetMain`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect_Utils/ActionGetSignedImagesInBulk`
- `UBTConnect_Utils.cache_SignedImageURL_GetCallback` → `server GetSignedImagesInBulk`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect_Utils/ActionGetUserInformation`
- `UBTConnect_Utils.cache_UserInfo_GetCallback` → `server GetUserInformation`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `Connect2_LegacyShared/ActionGetNumberUnreadMessages`
- `onClick in MessageListBlock` → `event markAllRead of MessageListBlock` → `ScreenBlock_MessageList.onClick_MarkAllAsRead` → `Connect2_LegacyShared.synchronizeNumberUnreadMessages` → `server GetNumberUnreadMessages`
- (2 chain(s) starting in blocks of other screens omitted)

### `UBTConnect/ServiceAPIFetchData_CacheableMapEntities`
- `UBTConnect.get_Cacheable_MapEntities` → `server FetchData_CacheableMapEntities`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ServiceAPIFetchData_CacheableHouseholds`
- `UBTConnect.get_Cacheable_MapHouseholds` → `server FetchData_CacheableHouseholds`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

## Declared and reachable from the rendered blocks, not observed

### `Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageList/ActionWrapper_MarkAllAsReadNotifications`
- `onClick in MessageListBlock` → `event markAllRead of MessageListBlock` → `ScreenBlock_MessageList.onClick_MarkAllAsRead` → `server Wrapper_MarkAllAsReadNotifications`

### `Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageList/ActionMarkMessageAsRead`
- `onClick in MessageListBlock` → `event swipeEventsRead of MessageListBlock` → `ScreenBlock_MessageList.swipe_EventsRead` → `server MarkMessageAsRead`

### `Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageList/ActionMarkMessageAsClear`
- `onClick in MessageListBlock` → `event swipeEventsClear of MessageListBlock` → `ScreenBlock_MessageList.swipe_EventsClear` → `server MarkMessageAsClear`

### `Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageList/DataActionGetMessageInstanceById2`
- `onClick in MessageListBlock` → `event onClick_GoToMessageDetail of MessageListBlock` → `ScreenBlock_MessageList.onClick_GoToMessageDetail` → `ScreenBlock_MessageList.DataActionGetMessageInstanceById2`
- `ScreenBlock_MessageList fetch at start` → `ScreenBlock_MessageList.DataActionGetMessageInstanceById2`

### `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All`
- `BottomBarMenu.OnReady` → `BottomBarMenu.onReady` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

