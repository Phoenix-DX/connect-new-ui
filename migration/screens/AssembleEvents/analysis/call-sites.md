# Call sites: AssembleEvents

For every service call: the chains of code that lead to it, from a root (user event, lifecycle handler, fetch at start, block event) down to the call. Built from compiled code only; conditions along a chain are not shown, read them in the files named.

## Observed in the capture (this screen)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (5 chain(s) starting in blocks of other screens omitted)

### `Connect2_LegacyShared/ActionGetUserInformation`
- `Connect2_LegacyShared.getUserInformation` → `server GetUserInformation`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect_Utils/ActionGetUserInformation`
- `UBTConnect_Utils.cache_UserInfo_GetCallback` → `server GetUserInformation`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `Connect2_LegacyShared/ActionGetCountriesBySubscription`
- `Connect2_LegacyShared.getRegionSubscribedCountries` → `server GetCountriesBySubscription`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBT_AppManager/ActionAppManager_AfterInitialize`
- `UBT_AppManager.appManager_OnAppReady_Web` → `UBT_AppManager.appManager_InitializeWebComponents` → `UBT_AppManager.appManager_AfterInitialize` → `server AppManager_AfterInitialize`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.onApplicationReady` → `UBT_AppManager_Mobile.appManager_Mobile_OnAppReady` → `UBT_AppManager.appManager_InitializeWebComponents` → `UBT_AppManager.appManager_AfterInitialize` → `server AppManager_AfterInitialize`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `Connect2_Assemble_MUI/Assemble/AssembleSummary_List/DataActionGetAssembleEventTypes`
- `AssembleSummary_List.refresh_GetAssembleEventTypes` → `AssembleSummary_List.DataActionGetAssembleEventTypes`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `AssembleSummary_List fetch at start` → `AssembleSummary_List.DataActionGetAssembleEventTypes`

### `UBTConnect/ActionSync_Info_GetMain`
- `UBTConnect.onApplicationReady` → `UBTConnect.connect_SetLoggedContext` → `UBTConnect.sync_Info_Main` → `server Sync_Info_GetMain`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.onApplicationReady` → `UBTConnect.sync_Info_Main` → `server Sync_Info_GetMain`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `Connect2_Assemble_MUI/Assemble/AssembleSummary_List/DataActionGetAssembleMeetingSummaryList`
- `AssembleSummary_List.list_AssembleSummaryCardsOnScrollEnding` → `AssembleSummary_List.DataActionGetAssembleMeetingSummaryList`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `onClick in HorizontalTags` → `HorizontalTags.onClick` → `event onClickTag of HorizontalTags` → `AssembleSummary_List.horizontalTagsOnClickTag` → `AssembleSummary_List.handler_ApplyFilters` → `AssembleSummary_List.refresh_EventList` → `AssembleSummary_List.DataActionGetAssembleMeetingSummaryList`
- `onClick in AssembleSummary_FilterDrawer` → `AssembleSummary_FilterDrawer.applyOnClick` → `event applyFilters of AssembleSummary_FilterDrawer` → `AssembleSummary_List.handler_ApplyFilters` → `AssembleSummary_List.refresh_EventList` → `AssembleSummary_List.DataActionGetAssembleMeetingSummaryList`
- `onClick in AssembleSummary_List__Header` → `event clear of AssembleSummary_List__Header` → `AssembleSummary_List.handler_ClearFilters` → `AssembleSummary_List.refresh_EventList` → `AssembleSummary_List.DataActionGetAssembleMeetingSummaryList`
- `AssembleSummary_List.refresh_GetAssembleMeetingSummaryList` → `AssembleSummary_List.DataActionGetAssembleMeetingSummaryList`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `AssembleSummary_List fetch at start` → `AssembleSummary_List.DataActionGetAssembleMeetingSummaryList`

### `Connect2_LegacyShared/ActionGetNumberUnreadMessages`
- `UBTConnect.onApplicationReady` → `UBTConnect.connect_SetLoggedContext` → `Connect2_LegacyShared.synchronizeNumberUnreadMessages` → `server GetNumberUnreadMessages`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.fCM_NotificationCallback` → `Connect2_LegacyShared.synchronizeNumberUnreadMessages` → `server GetNumberUnreadMessages`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ServiceAPIFetchData_CacheableMapEntities`
- `UBTConnect.get_Cacheable_MapEntities` → `server FetchData_CacheableMapEntities`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ServiceAPIFetchData_CacheableHouseholds`
- `UBTConnect.get_Cacheable_MapHouseholds` → `server FetchData_CacheableHouseholds`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

## Declared and reachable from the rendered blocks, not observed

### `Connect2_Assemble_MUI/Assemble/ScreenBlock_AssembleEvents/DataActionGetSubdivisionName`
- `ScreenBlock_AssembleEvents.OnReady` → `ScreenBlock_AssembleEvents.onReady` → `ScreenBlock_AssembleEvents.DataActionGetSubdivisionName`
- `ScreenBlock_AssembleEvents fetch at start` → `ScreenBlock_AssembleEvents.DataActionGetSubdivisionName`

### `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All`
- `BottomBarMenu.OnReady` → `BottomBarMenu.onReady` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `onClick in LocalityListDetail` → `event onClick_GoToBrowseCountry of LocalityListDetail` → `Assemble_FilterSheet.handler_GoToBrowseCountry` → `Connect2_Assemble_MUI.hasAccessToRegion` → `Connect2_Assemble_MUI.auditSubscriptionEvent` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`

