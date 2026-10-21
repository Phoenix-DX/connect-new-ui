# Call sites: Search

For every service call: the chains of code that lead to it, from a root (user event, lifecycle handler, fetch at start, block event) down to the call. Built from compiled code only; conditions along a chain are not shown, read them in the files named.

## Observed in the capture (this screen)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (5 chain(s) starting in blocks of other screens omitted)

### `UBTConnect/Directory_Search/ScreenBlock_Search/ScreenDataSetGet_SearchBirthdayOptions`
- `ScreenBlock_Search.OnReady` → `ScreenBlock_Search.screenEvent_OnReady` → `ScreenBlock_Search.ScreenDataSetGet_SearchBirthdayOptions`
- `ScreenBlock_Search fetch at start` → `ScreenBlock_Search.ScreenDataSetGet_SearchBirthdayOptions`

### `UBTConnect_Utils/CacheControl/CacheControl_AllCountries/DataActionGetCacheInfo`
- `CacheControl.OnInitialize` → `CacheControl.onInitialize` → `event onNonCacheHit of CacheControl` → `CacheControl_AllCountries.cacheControlOnNonCacheHit` → `CacheControl_AllCountries.DataActionGetCacheInfo`
- `CacheControl_AllCountries fetch at start` → `CacheControl_AllCountries.DataActionGetCacheInfo`

### `UBTConnect_Utils/CacheControl/CacheControl_UserInfo/DataActionGetCacheInfo`
- `CacheControl.OnInitialize` → `CacheControl.onInitialize` → `event onNonCacheHit of CacheControl` → `CacheControl_UserInfo.cacheControlOnNonCacheHit` → `CacheControl_UserInfo.DataActionGetCacheInfo`
- `CacheControl_UserInfo fetch at start` → `CacheControl_UserInfo.DataActionGetCacheInfo`

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

### `UBTConnect/Directory_Search/ScreenBlock_Search/DataActionFetchSearchResults`
- `onClick in Button` → `event event_OnClick of Button` → `FilterSheet.onClick_ClearFilters` → `FilterSheet.onClick_Apply` → `event applyFilters of FilterSheet` → `ScreenBlock_Search.event_ApplyFilters` → `ScreenBlock_Search.action_RefreshSearch` → `ScreenBlock_Search.DataActionFetchSearchResults`
- `onClick in Button` → `event event_OnClick of Button` → `FilterSheet.onClick_Apply` → `event applyFilters of FilterSheet` → `ScreenBlock_Search.event_ApplyFilters` → `ScreenBlock_Search.action_RefreshSearch` → `ScreenBlock_Search.DataActionFetchSearchResults`
- `onClick in CustomContainer` → `event clicked of CustomContainer` → `TagToggle.customContainerClicked` → `event event_Click of TagToggle` → `HorizontalTagList.tagToggleToggle` → `event changed of HorizontalTagList` → `ScreenBlock_Search.event_HorizontalTagListChanged` → `ScreenBlock_Search.action_RefreshSearch` → `ScreenBlock_Search.DataActionFetchSearchResults`
- `onKeyUp in Input` → `Input.onKeyup` → `event event_Submit of Input` → `ScreenBlock_Search.inputEvent_Submit` → `ScreenBlock_Search.action_RefreshSearch` → `ScreenBlock_Search.DataActionFetchSearchResults`
- `onClick in IconText` → `event clicked of IconText` → `ScreenBlock_Search.onClick_RecentSearchTerm` → `ScreenBlock_Search.action_RefreshSearch` → `ScreenBlock_Search.DataActionFetchSearchResults`
- `ScreenBlock_Search fetch at start` → `ScreenBlock_Search.DataActionFetchSearchResults`

### `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All`
- `BottomBarMenu.OnReady` → `BottomBarMenu.onReady` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

