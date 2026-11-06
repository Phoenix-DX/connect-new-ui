# Call sites: GuestArrangements

For every service call: the chains of code that lead to it, from a root (user event, lifecycle handler, fetch at start, block event) down to the call. Built from compiled code only; conditions along a chain are not shown, read them in the files named.

## Observed in the capture (this screen)

### `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_GuestArrangements/DataActionGetGuestArrangements`
- `ScreenBlock_GuestArrangements.OnReady` → `ScreenBlock_GuestArrangements.onReady` → `ScreenBlock_GuestArrangements.refreshData` → `ScreenBlock_GuestArrangements.DataActionGetGuestArrangements`
- `ScreenBlock_GuestArrangements fetch at start` → `ScreenBlock_GuestArrangements.DataActionGetGuestArrangements`

## Declared and reachable from the rendered blocks, not observed

### `Connect2_OrbitMobile_MUI/ActionGetDirectoryAccess`
- `ScreenBlock_GuestArrangements.onHandle_ClickedMember` → `Connect2_OrbitMobile_MUI.checkDirectoryAccess` → `server GetDirectoryAccess`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

