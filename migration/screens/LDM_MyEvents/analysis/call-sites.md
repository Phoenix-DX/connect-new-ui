# Call sites: LDM_MyEvents

For every service call: the chains of code that lead to it, from a root (user event, lifecycle handler, fetch at start, block event) down to the call. Built from compiled code only; conditions along a chain are not shown, read them in the files named.

## Observed in the capture (this screen)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (5 chain(s) starting in blocks of other screens omitted)

### `Connect2_OrbitMobile_MUI/LDM_Blocks/MyEvents_MyTimelineFilterButton/DataActionGetEventLocalitiesForFilter`
- `MyEvents_MyTimelineFilterButton.OnReady` → `MyEvents_MyTimelineFilterButton.onReady` → `MyEvents_MyTimelineFilterButton.onParametersChanged` → `MyEvents_MyTimelineFilterButton.getEventLocalitiesData` → `MyEvents_MyTimelineFilterButton.DataActionGetEventLocalitiesForFilter`
- `MyEvents_MyTimelineFilterButton.OnParametersChanged` → `MyEvents_MyTimelineFilterButton.onParametersChanged` → `MyEvents_MyTimelineFilterButton.getEventLocalitiesData` → `MyEvents_MyTimelineFilterButton.DataActionGetEventLocalitiesForFilter`
- `MyEvents_MyTimelineFilterButton fetch at start` → `MyEvents_MyTimelineFilterButton.DataActionGetEventLocalitiesForFilter`

### `Connect2_OrbitMobile_MUI/LDM_ScreenBlocks/ScreenBlock_MyEvents/DataActionGetEventsForMyTimeline`
- `MyEvents_MyTimelineFilterButton.onHandle_Filter` → `event filter of MyEvents_MyTimelineFilterButton` → `ScreenBlock_MyEvents.onHandle_MyTimelineFilter` → `ScreenBlock_MyEvents.getMyTimelineData` → `ScreenBlock_MyEvents.DataActionGetEventsForMyTimeline`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `MyEvents_MyTimelineFilterButton.onHandle_Close` → `event resetFilters of MyEvents_MyTimelineFilterButton` → `ScreenBlock_MyEvents.onHandle_ResetFilters` → `ScreenBlock_MyEvents.getMyTimelineData` → `ScreenBlock_MyEvents.DataActionGetEventsForMyTimeline`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `ScreenBlock_MyEvents.OnReady` → `ScreenBlock_MyEvents.onReady` → `ScreenBlock_MyEvents.getMyTimelineData` → `ScreenBlock_MyEvents.DataActionGetEventsForMyTimeline`
- `MyTimeline.list_MyTimelineOnScrollEnding` → `event scrollEnding of MyTimeline` → `ScreenBlock_MyEvents.onScrollEnding_MyTimeline` → `ScreenBlock_MyEvents.getMyTimelineData` → `ScreenBlock_MyEvents.DataActionGetEventsForMyTimeline`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `ScreenBlock_MyEvents.selectEventView` → `ScreenBlock_MyEvents.getMyTimelineData` → `ScreenBlock_MyEvents.DataActionGetEventsForMyTimeline`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `event tryAgain of MyTimeline` → `ScreenBlock_MyEvents.getMyTimelineData` → `ScreenBlock_MyEvents.DataActionGetEventsForMyTimeline`

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

### `Connect2_OrbitMobile_MUI/LDM_ScreenBlocks/ScreenBlock_MyEvents/DataActionGetEventsForCalendar`
- `ScreenBlock_MyEvents.onHandle_DateClicked` → `ScreenBlock_MyEvents.checkDateBoundaries` → `ScreenBlock_MyEvents.getEventCalendarData` → `ScreenBlock_MyEvents.DataActionGetEventsForCalendar`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `ScreenBlock_MyEvents.OnReady` → `ScreenBlock_MyEvents.onReady` → `ScreenBlock_MyEvents.getEventCalendarData` → `ScreenBlock_MyEvents.DataActionGetEventsForCalendar`
- `ScreenBlock_MyEvents.selectEventView` → `ScreenBlock_MyEvents.getEventCalendarData` → `ScreenBlock_MyEvents.DataActionGetEventsForCalendar`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `ScreenBlock_MyEvents fetch at start` → `ScreenBlock_MyEvents.DataActionGetEventsForCalendar`

### `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All`
- `BottomBarMenu.OnReady` → `BottomBarMenu.onReady` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`

### `Connect2_OrbitMobile_MUI/ActionGetEventViewInfo`
- `ScreenBlock_MyEvents.onHandle_DateClicked` → `Connect2_OrbitMobile_MUI.addAuditCalendarEvent` → `Connect2_OrbitMobile_MUI.getEventViewInfo` → `server GetEventViewInfo`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `ScreenBlock_MyEvents.selectEventView` → `Connect2_OrbitMobile_MUI.addAuditCalendarEvent` → `Connect2_OrbitMobile_MUI.getEventViewInfo` → `server GetEventViewInfo`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

