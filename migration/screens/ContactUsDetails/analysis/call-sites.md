# Call sites: ContactUsDetails

For every service call: the chains of code that lead to it, from a root (user event, lifecycle handler, fetch at start, block event) down to the call. Built from compiled code only; conditions along a chain are not shown, read them in the files named.

## Observed in the capture (this screen)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (5 chain(s) starting in blocks of other screens omitted)

### `UBTConnect_Utils/CacheControl/CacheControl_UserInfo/DataActionGetCacheInfo`
- `CacheControl.OnInitialize` → `CacheControl.onInitialize` → `event onNonCacheHit of CacheControl` → `CacheControl_UserInfo.cacheControlOnNonCacheHit` → `CacheControl_UserInfo.DataActionGetCacheInfo`
- `CacheControl_UserInfo fetch at start` → `CacheControl_UserInfo.DataActionGetCacheInfo`

### `UBTConnect/App_Menu_ContactUs/ContactUsDetails/DataActionDataAction_GetLocalityTimezone`
- `CacheControl.OnInitialize` → `CacheControl.onInitialize` → `event onCacheHit of CacheControl` → `CacheControl_UserInfo.cacheControlOnCacheHit` → `event result of CacheControl_UserInfo` → `CacheControl_UserInfo_Wrapper.cacheControl_UserInfoResult` → `event result of CacheControl_UserInfo_Wrapper` → `ContactUsDetails.cacheControl_UserInfo_WrapperResult` → `ContactUsDetails.DataActionDataAction_GetLocalityTimezone`
- `CacheControl_UserInfo.onAfterFetch` → `event result of CacheControl_UserInfo` → `CacheControl_UserInfo_Wrapper.cacheControl_UserInfoResult` → `event result of CacheControl_UserInfo_Wrapper` → `ContactUsDetails.cacheControl_UserInfo_WrapperResult` → `ContactUsDetails.DataActionDataAction_GetLocalityTimezone`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `ContactUsDetails fetch at start` → `ContactUsDetails.DataActionDataAction_GetLocalityTimezone`

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

### `UBTConnect/App_Menu_ContactUs/ContactUsDetails/ServiceAPISendContactUsMessage`
- `onClick in Button` → `event event_OnClick of Button` → `event buttonOnClick of Button` → `ContactUsDetails.onClick_SubmitForm` → `server SendContactUsMessage`

### `UBTConnect/App_Menu_ContactUs/ContactUsDetails/DataActionDataAction_GetCountriesNames`
- `ContactUsDetails.OnReady` → `ContactUsDetails.screenEvent_OnReady` → `ContactUsDetails.DataActionDataAction_GetCountriesNames`
- `ContactUsDetails fetch at start` → `ContactUsDetails.DataActionDataAction_GetCountriesNames`

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

