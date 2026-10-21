# Call sites: LDM_EventDetail_V2

For every service call: the chains of code that lead to it, from a root (user event, lifecycle handler, fetch at start, block event) down to the call. Built from compiled code only; conditions along a chain are not shown, read them in the files named.

## Observed in the capture (this screen)

### `Connect2_OrbitMobile_MUI/LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2/DataActionGetCoordinatorDetails`
- `ScreenBlock_EventDetail_V2.OnParametersChanged` → `ScreenBlock_EventDetail_V2.onParametersChanged` → `ScreenBlock_EventDetail_V2.DataActionGetCoordinatorDetails`
- `ScreenBlock_EventDetail_V2 fetch at start` → `ScreenBlock_EventDetail_V2.DataActionGetCoordinatorDetails`

### `Connect2_OrbitMobile_MUI/LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2/DataActionGetEventByEventId`
- `ScreenBlock_EventDetail_V2.OnParametersChanged` → `ScreenBlock_EventDetail_V2.onParametersChanged` → `ScreenBlock_EventDetail_V2.DataActionGetEventByEventId`
- `ScreenBlock_EventDetail_V2.OnReady` → `ScreenBlock_EventDetail_V2.onReady` → `ScreenBlock_EventDetail_V2.DataActionGetEventByEventId`
- `ScreenBlock_EventDetail_V2 fetch at start` → `ScreenBlock_EventDetail_V2.DataActionGetEventByEventId`

## Declared and reachable from the rendered blocks, not observed

### `Connect2_OrbitMobile_MUI/LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2/ActionGetHouseholdCoordinates`
- `onClick in EventDetail_HostCard` → `event address of EventDetail_HostCard` → `ScreenBlock_EventDetail_V2.onHandle_HostCardAddress` → `server GetHouseholdCoordinates`

### `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All`
- `BottomBarMenu.OnReady` → `BottomBarMenu.onReady` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

