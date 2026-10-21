# Call sites: BookmarksByGroup

For every service call: the chains of code that lead to it, from a root (user event, lifecycle handler, fetch at start, block event) down to the call. Built from compiled code only; conditions along a chain are not shown, read them in the files named.

## Observed in the capture (this screen)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `ScreenBlock_BookmarkGroup.upgradeSubscription` → `Connect2_LegacyShared.auditBookmarkSubscriptionEvent` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (4 chain(s) starting in blocks of other screens omitted)

### `Connect2_MyBookmarks_MUI/MyBookmarksFlow/ScreenBlock_BookmarkGroup/DataActionGetAllBookmarksByGroup`
- `onClick in Result_Item_Image` → `Result_Item_Image.onClick_Result_Item` → `event onClick_Item of Result_Item_Image` → `ScreenBlock_BookmarkGroup.onClick_BookmarkedItem` → `ScreenBlock_BookmarkGroup.DataActionGetAllBookmarksByGroup`
- `ScreenBlock_BookmarkGroup.onClickSearchClear` → `ScreenBlock_BookmarkGroup.refreshBookmarkData` → `ScreenBlock_BookmarkGroup.DataActionGetAllBookmarksByGroup`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `ScreenBlock_BookmarkGroup.onKeyup_SearchBookmarkItems` → `ScreenBlock_BookmarkGroup.refreshBookmarkData` → `ScreenBlock_BookmarkGroup.DataActionGetAllBookmarksByGroup`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `ScreenBlock_BookmarkGroup.OnReady` → `ScreenBlock_BookmarkGroup.onReady` → `ScreenBlock_BookmarkGroup.refreshBookmarkData` → `ScreenBlock_BookmarkGroup.DataActionGetAllBookmarksByGroup`
- `ScreenBlock_BookmarkGroup fetch at start` → `ScreenBlock_BookmarkGroup.DataActionGetAllBookmarksByGroup`

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

### `Connect2_MyBookmarks_MUI/MyBookmarksFlow/ScreenBlock_BookmarkGroup/ActionDeleteBookmarkByBookmarkId`
- `onClick in ItemOptionsMenu` → `event bookmarkToggle of ItemOptionsMenu` → `ScreenBlock_BookmarkGroup.onHandle_BookmarkToggle` → `server DeleteBookmarkByBookmarkId`

### `Connect2_MyBookmarks_MUI/MyBookmarksFlow/ScreenBlock_BookmarkGroup/ActionNew_UpdateBookmarkNote`
- `ScreenBlock_BookmarkGroup.updateNote` → `server New_UpdateBookmarkNote`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_CreateShareProfileLink`
- `ShareSheet.handler_OnClickExternalOption` → `server CS_CreateShareProfileLink`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_ShareObject`
- `ShareSheet.handler_OnClickRecentMember` → `ShareSheet.action_SubmitShare` → `server CS_ShareObject`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `ShareSheet.handler_OnClickSend` → `ShareSheet.action_SubmitShare` → `server CS_ShareObject`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetAvailableMembers`
- `ShareSheet.handler_InputEventSubmit` → `ShareSheet.DataActionGetAvailableMembers`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `ShareSheet fetch at start` → `ShareSheet.DataActionGetAvailableMembers`

### `UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetRecentlyShared`
- `ShareSheet.OnParametersChanged` → `ShareSheet.screenEvent_OnParametersChanged` → `ShareSheet.DataActionGetRecentlyShared`
- `ShareSheet fetch at start` → `ShareSheet.DataActionGetRecentlyShared`

### `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All`
- `BottomBarMenu.OnReady` → `BottomBarMenu.onReady` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`

### `Connect2_MyBookmarks_MUI/ActionGetBookmarkById`
- `onClick in Result_Item_Image` → `Result_Item_Image.onClick_Result_Item` → `event onClick_Item of Result_Item_Image` → `ScreenBlock_BookmarkGroup.onClick_BookmarkedItem` → `Connect2_MyBookmarks_MUI.getBookmarkById` → `server GetBookmarkById`

### `Connect2_MyBookmarks_MUI/ActionNew_GetBookmarkById`
- `onClick in Result_Item_Image` → `Result_Item_Image.onClick_Result_Item` → `event onClick_Item of Result_Item_Image` → `ScreenBlock_BookmarkGroup.onClick_BookmarkedItem` → `Connect2_MyBookmarks_MUI.getBookmarkById` → `server New_GetBookmarkById`

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `ScreenBlock_BookmarkGroup.handler_DeleteNote` → `ScreenBlock_BookmarkGroup.upgradeSubscription` → `Connect2_LegacyShared.auditBookmarkSubscriptionEvent` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `ScreenBlock_BookmarkGroup.handler_AddNote` → `ScreenBlock_BookmarkGroup.handler_EditNote` → `ScreenBlock_BookmarkGroup.upgradeSubscription` → `Connect2_LegacyShared.auditBookmarkSubscriptionEvent` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `onClick in ItemOptionsMenu` → `event onShareToConnect of ItemOptionsMenu` → `ScreenBlock_BookmarkGroup.onHandle_ShareItem` → `ScreenBlock_BookmarkGroup.upgradeSubscription` → `Connect2_LegacyShared.auditBookmarkSubscriptionEvent` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`
- `onClick in ItemOptionsMenu` → `event onShareToOthers of ItemOptionsMenu` → `ScreenBlock_BookmarkGroup.onHandle_ShareItem` → `ScreenBlock_BookmarkGroup.upgradeSubscription` → `Connect2_LegacyShared.auditBookmarkSubscriptionEvent` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`

### `UBTConnect_Utils/ActionCS_CreateShareProfileLink`
- `onClick in ItemOptionsMenu` → `event onShareToConnect of ItemOptionsMenu` → `ScreenBlock_BookmarkGroup.onHandle_ShareItem` → `event navigateTo_ShareObject of ScreenBlock_BookmarkGroup` → `BookmarksByGroup.onHandle_NavigateTo_ShareObject` → `UBTConnect_Utils.shareEntity_ByURL` → `server CS_CreateShareProfileLink`
- `onClick in ItemOptionsMenu` → `event onShareToOthers of ItemOptionsMenu` → `ScreenBlock_BookmarkGroup.onHandle_ShareItem` → `event navigateTo_ShareObject of ScreenBlock_BookmarkGroup` → `BookmarksByGroup.onHandle_NavigateTo_ShareObject` → `UBTConnect_Utils.shareEntity_ByURL` → `server CS_CreateShareProfileLink`

