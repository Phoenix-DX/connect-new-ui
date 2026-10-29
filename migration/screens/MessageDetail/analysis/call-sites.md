# Call sites: MessageDetail

For every service call: the chains of code that lead to it, from a root (user event, lifecycle handler, fetch at start, block event) down to the call. Built from compiled code only; conditions along a chain are not shown, read them in the files named.

## Observed in the capture (this screen)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (5 chain(s) starting in blocks of other screens omitted)

### `Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageDetail/DataActionGetMessageInstance`
- `NotificationDetailBlock.adaptiveCardViewerOnExecuteAction` → `event adaptiveCardEventExecuted of NotificationDetailBlock` → `ScreenBlock_MessageDetail.adaptiveCardViewerOnExecuteAction` → `ScreenBlock_MessageDetail.DataActionGetMessageInstance`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `ScreenBlock_MessageDetail.OnReady` → `ScreenBlock_MessageDetail.onReady` → `ScreenBlock_MessageDetail.DataActionGetMessageInstance`
- `ScreenBlock_MessageDetail fetch at start` → `ScreenBlock_MessageDetail.DataActionGetMessageInstance`

### `UBTConnect_Utils/ActionGetSignedImagesInBulk`
- `UBTConnect_Utils.cache_SignedImageURL_GetCallback` → `server GetSignedImagesInBulk`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

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

### `Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageDetail/ActionWrapper_NotificationOpened`
- `NotificationDetailBlock.adaptiveCardViewerOnExecuteAction` → `event adaptiveCardEventExecuted of NotificationDetailBlock` → `ScreenBlock_MessageDetail.adaptiveCardViewerOnExecuteAction` → `server StoreAdaptiveCardResponses` → `ScreenBlock_MessageDetail.getMessageInstanceByIdOnAfterFetch` → `server Wrapper_NotificationOpened`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageDetail/ActionGet_OrbitHostSurveyNotificationParameters`
- `onClick in ScreenBlock_MessageDetail` → `ScreenBlock_MessageDetail.onClick_ViewOrbitEvent` → `server Get_OrbitHostSurveyNotificationParameters`

### `Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageDetail/ActionGet_OrbitNotificationParameters`
- `onClick in ScreenBlock_MessageDetail` → `ScreenBlock_MessageDetail.onClick_ViewOrbitEvent` → `server Get_OrbitNotificationParameters`

### `Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageDetail/ActionStoreAdaptiveCardResponses`
- `NotificationDetailBlock.adaptiveCardViewerOnExecuteAction` → `event adaptiveCardEventExecuted of NotificationDetailBlock` → `ScreenBlock_MessageDetail.adaptiveCardViewerOnExecuteAction` → `server StoreAdaptiveCardResponses`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageDetail/ScreenDataSetGetMessageTemplateParametersByMessageTemplateId`
- `NotificationDetailBlock.adaptiveCardViewerOnExecuteAction` → `event adaptiveCardEventExecuted of NotificationDetailBlock` → `ScreenBlock_MessageDetail.adaptiveCardViewerOnExecuteAction` → `server StoreAdaptiveCardResponses` → `ScreenBlock_MessageDetail.getMessageInstanceByIdOnAfterFetch` → `ScreenBlock_MessageDetail.ScreenDataSetGetMessageTemplateParametersByMessageTemplateId`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `ScreenBlock_MessageDetail fetch at start` → `ScreenBlock_MessageDetail.ScreenDataSetGetMessageTemplateParametersByMessageTemplateId`

### `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All`
- `BottomBarMenu.OnReady` → `BottomBarMenu.onReady` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

