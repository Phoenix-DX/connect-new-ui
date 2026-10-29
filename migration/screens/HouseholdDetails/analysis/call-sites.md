# Call sites: HouseholdDetails

For every service call: the chains of code that lead to it, from a root (user event, lifecycle handler, fetch at start, block event) down to the call. Built from compiled code only; conditions along a chain are not shown, read them in the files named.

## Observed in the capture (this screen)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (5 chain(s) starting in blocks of other screens omitted)

### `UBTConnect_Utils/ActionGetUserInformation`
- `UBTConnect_Utils.cache_UserInfo_GetCallback` → `server GetUserInformation`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect_Utils/ActionGetSignedImagesInBulk`
- `UBTConnect_Utils.cache_SignedImageURL_GetCallback` → `server GetSignedImagesInBulk`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/Directory_Household/HouseholdDetails_Block/DataActionGetHousehold_Coordinates`
- `HouseholdDetails_Block.refresh_GetHouseholdCoordinates` → `HouseholdDetails_Block.DataActionGetHousehold_Coordinates`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `HouseholdDetails_Block fetch at start` → `HouseholdDetails_Block.DataActionGetHousehold_Coordinates`

### `UBTConnect/Directory_Household/HouseholdDetails_Block/DataActionGetHousehold`
- `HouseholdDetails_Block.refresh_GetHouseholdDetail` → `HouseholdDetails_Block.DataActionGetHousehold`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `HouseholdDetails_Block.OnParametersChanged` → `HouseholdDetails_Block.screenEvent_OnParametersChanged` → `HouseholdDetails_Block.DataActionGetHousehold`
- `HouseholdDetails_Block fetch at start` → `HouseholdDetails_Block.DataActionGetHousehold`

### `UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails`
- `Directory_EntityDetailsActions.action_AsyncRefresh_ContactDetails` → `Directory_EntityDetailsActions.DataActionFetchContactDetails`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `Directory_EntityDetailsActions fetch at start` → `Directory_EntityDetailsActions.DataActionFetchContactDetails`

### `UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchNotes`
- `onClick in CircleButton_WithLabel` → `CircleButton_WithLabel.action_OnClick` → `event onClick of CircleButton_WithLabel` → `CircleButton_IconPrimary.circleButton_WithLabelOnClick` → `event onClick of CircleButton_IconPrimary` → `event event_Click_Notes of ActionsMenu` → `Directory_EntityDetailsActions.handler_AddNotesOnClick` → `Directory_EntityDetailsActions.action_RefreshFetchNotes` → `Directory_EntityDetailsActions.DataActionFetchNotes`
- `Directory_EntityDetailsActions.OnReady` → `Directory_EntityDetailsActions.onReady` → `Directory_EntityDetailsActions.action_RefreshFetchNotes` → `Directory_EntityDetailsActions.DataActionFetchNotes`
- `Directory_EntityDetailsActions fetch at start` → `Directory_EntityDetailsActions.DataActionFetchNotes`

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

### `UBTConnect_Utils/CW_Notes/NotesSheet/ServiceAPIAddNote`
- `NotesSheet.handler_OnSubmitNote` → `server AddNote`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

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

### `UBTConnect/ServiceAPIAddBookmark2`
- `onClick in CircleButton_WithLabel` → `CircleButton_WithLabel.action_OnClick` → `event onClick of CircleButton_WithLabel` → `CircleButton_IconPrimary.circleButton_WithLabelOnClick` → `event onClick of CircleButton_IconPrimary` → `event event_Click_Bookmark of ActionsMenu` → `Directory_EntityDetailsActions.handle_Bookmark` → `UBTConnect.toggleBookmarkItem_C2` → `server AddBookmark2`
- `onClick in CircleButton_WithLabel` → `CircleButton_WithLabel.action_OnClick` → `event onClick of CircleButton_WithLabel` → `CircleButton_IconPrimary.circleButton_WithLabelOnClick` → `event onClick of CircleButton_IconPrimary` → `event event_Click_Unbookmark of ActionsMenu` → `Directory_EntityDetailsActions.handle_Bookmark` → `UBTConnect.toggleBookmarkItem_C2` → `server AddBookmark2`

### `UBTConnect/ServiceAPIDeleteBookmarkByBookmarkId2`
- `onClick in CircleButton_WithLabel` → `CircleButton_WithLabel.action_OnClick` → `event onClick of CircleButton_WithLabel` → `CircleButton_IconPrimary.circleButton_WithLabelOnClick` → `event onClick of CircleButton_IconPrimary` → `event event_Click_Bookmark of ActionsMenu` → `Directory_EntityDetailsActions.handle_Bookmark` → `UBTConnect.toggleBookmarkItem_C2` → `server DeleteBookmarkByBookmarkId2`
- `onClick in CircleButton_WithLabel` → `CircleButton_WithLabel.action_OnClick` → `event onClick of CircleButton_WithLabel` → `CircleButton_IconPrimary.circleButton_WithLabelOnClick` → `event onClick of CircleButton_IconPrimary` → `event event_Click_Unbookmark of ActionsMenu` → `Directory_EntityDetailsActions.handle_Bookmark` → `UBTConnect.toggleBookmarkItem_C2` → `server DeleteBookmarkByBookmarkId2`

### `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All`
- `BottomBarMenu.OnReady` → `BottomBarMenu.onReady` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`

### `UBTConnect_Utils/ActionCS_CreateShareProfileLink`
- `event event_Clicked of ContactPopup` → `SharePopup.onClick_CallButton` → `event event_ShareToOthers of SharePopup` → `Directory_EntityDetailsActions.handle_Share_Others` → `UBTConnect_Utils.shareEntity_ByURL` → `server CS_CreateShareProfileLink`

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `SharePopup.onClick_CallButton` → `event event_ShareToOthers of SharePopup` → `Directory_EntityDetailsActions.handle_Share_Others` → `UBTConnect_Utils.shareEntity_ByURL` → `Connect2_LegacyShared.auditShareEvent` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

