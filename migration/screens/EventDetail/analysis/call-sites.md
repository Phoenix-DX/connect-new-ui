# Call sites: EventDetail

For every service call: the chains of code that lead to it, from a root (user event, lifecycle handler, fetch at start, block event) down to the call. Built from compiled code only; conditions along a chain are not shown, read them in the files named.

## Observed in the capture (this screen)

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (5 chain(s) starting in blocks of other screens omitted)

### `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_EventDetails`
- `ScreenBlock_EventDetail.OnReady` → `ScreenBlock_EventDetail.onReady` → `ScreenBlock_EventDetail.DataActionGet_EventDetails`
- `ScreenBlock_EventDetail fetch at start` → `ScreenBlock_EventDetail.DataActionGet_EventDetails`

### `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HostSurveyStatus`
- `ScreenBlock_EventDetail.OnReady` → `ScreenBlock_EventDetail.onReady` → `ScreenBlock_EventDetail.DataActionGet_HostSurveyStatus`
- `ScreenBlock_EventDetail fetch at start` → `ScreenBlock_EventDetail.DataActionGet_HostSurveyStatus`

### `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HasDocuments`
- `ScreenBlock_EventDetail.OnReady` → `ScreenBlock_EventDetail.onReady` → `ScreenBlock_EventDetail.DataActionGet_HasDocuments`
- `ScreenBlock_EventDetail fetch at start` → `ScreenBlock_EventDetail.DataActionGet_HasDocuments`

### `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HasQRCode`
- `ScreenBlock_EventDetail.OnReady` → `ScreenBlock_EventDetail.onReady` → `ScreenBlock_EventDetail.DataActionGet_HasQRCode`
- `ScreenBlock_EventDetail fetch at start` → `ScreenBlock_EventDetail.DataActionGet_HasQRCode`

## Declared and reachable from the rendered blocks, not observed

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

