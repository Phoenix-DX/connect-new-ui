# Call sites: HostSurvey

For every service call: the chains of code that lead to it, from a root (user event, lifecycle handler, fetch at start, block event) down to the call. Built from compiled code only; conditions along a chain are not shown, read them in the files named.

## Observed in the capture (this screen)

### `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/DataActionGetHostSurvey`
- `ScreenBlock_HostSurvey.OnReady` → `ScreenBlock_HostSurvey.onReady` → `ScreenBlock_HostSurvey.refreshData` → `ScreenBlock_HostSurvey.DataActionGetHostSurvey`
- `ScreenBlock_HostSurvey fetch at start` → `ScreenBlock_HostSurvey.DataActionGetHostSurvey`

## Declared and reachable from the rendered blocks, not observed

### `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/ActionPostHostSurvey`
- `onClick in Orbit_ConfirmationPopUp_New` → `event primaryAction of Orbit_ConfirmationPopUp_New` → `ScreenBlock_HostSurvey.onHandle_PopUp_Primary` → `ScreenBlock_HostSurvey.postHostSurvey` → `server PostHostSurvey`
- `ScreenBlock_HostSurvey.onHandle_PrimaryButton` → `ScreenBlock_HostSurvey.postHostSurvey` → `server PostHostSurvey`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

