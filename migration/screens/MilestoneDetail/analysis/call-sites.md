# Call sites: MilestoneDetail

For every service call: the chains of code that lead to it, from a root (user event, lifecycle handler, fetch at start, block event) down to the call. Built from compiled code only; conditions along a chain are not shown, read them in the files named.

## Observed in the capture (this screen)

### `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_AccommodationHost/DataActionGetAccommodationHost`
- `ScreenBlock_AccommodationHost.OnReady` → `ScreenBlock_AccommodationHost.onReady` → `ScreenBlock_AccommodationHost.refreshData` → `ScreenBlock_AccommodationHost.DataActionGetAccommodationHost`
- `ScreenBlock_AccommodationHost fetch at start` → `ScreenBlock_AccommodationHost.DataActionGetAccommodationHost`

### `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_AccommodationHost/DataActionGet_Document`
- `ScreenBlock_AccommodationHost.OnReady` → `ScreenBlock_AccommodationHost.onReady` → `ScreenBlock_AccommodationHost.refreshDocumentData` → `ScreenBlock_AccommodationHost.DataActionGet_Document`
- `ScreenBlock_AccommodationHost fetch at start` → `ScreenBlock_AccommodationHost.DataActionGet_Document`

### `Connect2_LegacyShared/ActionGetSignedImagesInBulk`
- `Connect2_LegacyShared.getBulkSignedImageURL` → `server GetSignedImagesInBulk`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

## Declared and reachable from the rendered blocks, not observed

### `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_MilestoneWrapper/DataActionGetGmpMilestoneHost`
- `ScreenBlock_MilestoneWrapper.OnReady` → `ScreenBlock_MilestoneWrapper.onReady` → `ScreenBlock_MilestoneWrapper.DataActionGetGmpMilestoneHost`
- `ScreenBlock_MilestoneWrapper fetch at start` → `ScreenBlock_MilestoneWrapper.DataActionGetGmpMilestoneHost`

### `Connect2_OrbitMobile_MUI/ActionGetDirectoryAccess`
- `onClick in Card_MemberInformation` → `event clickedMember of Card_MemberInformation` → `ScreenBlock_AccommodationHost.onHandle_ClickedMember` → `Connect2_OrbitMobile_MUI.checkDirectoryAccess` → `server GetDirectoryAccess`

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

