# Call sites: HomeFeed

For every service call: the chains of code that lead to it, from a root (user event, lifecycle handler, fetch at start, block event) down to the call. Built from compiled code only; conditions along a chain are not shown, read them in the files named.

## Observed in the capture (this screen)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (5 chain(s) starting in blocks of other screens omitted)

### `UBTConnect_EmbedFeed/Blocks/Embedded_FeedCMS/DataActionGetFeedConfig`
- `Embedded_FeedCMS fetch at start` → `Embedded_FeedCMS.DataActionGetFeedConfig`

### `UBTConnect/Home/HomeFeed/DataActionGetCommunityStatistics`
- `HomeFeed.OnReady` → `HomeFeed.screenEvent_OnReady` → `HomeFeed.DataActionGetCommunityStatistics`
- `HomeFeed fetch at start` → `HomeFeed.DataActionGetCommunityStatistics`

### `UBTConnect/Home/FeedBlock_Updates/DataActionFetchUpdates`
- `FeedBlock_Updates fetch at start` → `FeedBlock_Updates.DataActionFetchUpdates`

### `UBTConnect/Home/FeedBlock_CommunityPopulation/DataActionFetchCount`
- `FeedBlock_CommunityPopulation fetch at start` → `FeedBlock_CommunityPopulation.DataActionFetchCount`

### `UBTConnect/Home/FeedBlock_Services/DataActionGetServices`
- `FeedBlock_Services fetch at start` → `FeedBlock_Services.DataActionGetServices`

### `UBT_AppManager/ActionAppManager_AfterInitialize`
- `UBT_AppManager.appManager_OnAppReady_Web` → `UBT_AppManager.appManager_InitializeWebComponents` → `UBT_AppManager.appManager_AfterInitialize` → `server AppManager_AfterInitialize`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.onApplicationReady` → `UBT_AppManager_Mobile.appManager_Mobile_OnAppReady` → `UBT_AppManager.appManager_InitializeWebComponents` → `UBT_AppManager.appManager_AfterInitialize` → `server AppManager_AfterInitialize`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ActionSync_Info_GetMain`
- `UBTConnect.onApplicationReady` → `UBTConnect.connect_SetLoggedContext` → `UBTConnect.sync_Info_Main` → `server Sync_Info_GetMain`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.onApplicationReady` → `UBTConnect.sync_Info_Main` → `server Sync_Info_GetMain`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

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

### `UBTConnect/Home/FeedBlock_Updates/ServiceAPIAction_UI_UpdateItem_MarkAsRead`
- `onClick in CustomContainer` → `event clicked of CustomContainer` → `event onClick of Update_ListItem` → `FeedBlock_Updates.event_ListItemOnClick` → `server Action_UI_UpdateItem_MarkAsRead`
- `onClick in ContextMenu` → `event event_MarkAsRead of ContextMenu` → `event event_MarkAsRead of Update_ListItem` → `FeedBlock_Updates.event_MarkAsRead` → `server Action_UI_UpdateItem_MarkAsRead`

### `UBTConnect/Home/FeedBlock_Updates/ServiceAPIAction_UI_UpdateItem_MarkAsUnread`
- `onClick in ContextMenu` → `event event_MarkAsUnread of ContextMenu` → `event event_MarkAsUnread of Update_ListItem` → `FeedBlock_Updates.event_MarkAsUnread` → `server Action_UI_UpdateItem_MarkAsUnread`

### `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_CreateShareProfileLink`
- `onClick in CircleButton_WithLabel` → `CircleButton_WithLabel.action_OnClick` → `event onClick of CircleButton_WithLabel` → `ShareSheet.handler_OnClickExternalOption` → `server CS_CreateShareProfileLink`

### `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_ShareObject`
- `onClick in CircleButton_WithLabel` → `CircleButton_WithLabel.action_OnClick` → `event onClick of CircleButton_WithLabel` → `ShareSheet.handler_OnClickRecentMember` → `ShareSheet.action_SubmitShare` → `server CS_ShareObject`
- `ShareSheet.handler_OnClickSend` → `ShareSheet.action_SubmitShare` → `server CS_ShareObject`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetAvailableMembers`
- `ShareSheet.handler_InputEventSubmit` → `ShareSheet.DataActionGetAvailableMembers`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `ShareSheet fetch at start` → `ShareSheet.DataActionGetAvailableMembers`

### `UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetRecentlyShared`
- `ShareSheet.OnParametersChanged` → `ShareSheet.screenEvent_OnParametersChanged` → `ShareSheet.DataActionGetRecentlyShared`
- `ShareSheet fetch at start` → `ShareSheet.DataActionGetRecentlyShared`

### `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All`
- `BottomBarMenu.OnReady` → `BottomBarMenu.onReady` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`
- `onClick in ContextMenu` → `event event_MarkAsRead of ContextMenu` → `event event_MarkAsRead of Update_ListItem` → `FeedBlock_Updates.event_MarkAsRead` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`
- `onClick in ContextMenu` → `event event_MarkAsUnread of ContextMenu` → `event event_MarkAsUnread of Update_ListItem` → `FeedBlock_Updates.event_MarkAsUnread` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`

### `UBTConnect_Utils/ActionCS_CreateShareProfileLink`
- `event event_Clicked of ContactPopup` → `SharePopup.onClick_CallButton` → `event event_ShareToOthers of SharePopup` → `Feed_Embeded.handle_Share_Others` → `UBTConnect_Utils.shareEntity_ByURL` → `server CS_CreateShareProfileLink`

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `SharePopup.onClick_CallButton` → `event event_ShareToOthers of SharePopup` → `Feed_Embeded.handle_Share_Others` → `UBTConnect_Utils.shareEntity_ByURL` → `Connect2_LegacyShared.auditShareEvent` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

