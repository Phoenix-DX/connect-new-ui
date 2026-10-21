# Call sites: Login

For every service call: the chains of code that lead to it, from a root (user event, lifecycle handler, fetch at start, block event) down to the call. Built from compiled code only; conditions along a chain are not shown, read them in the files named.

## Observed in the capture (this screen)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `Login.OnInitialize` → `Login.onInitialize` → `Login.login` → `UBT_AppManager.appManager_Login` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`
- `onClick in Login` → `Login.login` → `UBT_AppManager.appManager_Login` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`
- `Login.OnReady` → `Login.onReady` → `UBT_AppManager.appManager_HandleDeviceAwarenessPopUp` → `UBT_AppManager.appManager_Login` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (2 chain(s) starting in blocks of other screens omitted)

### `UBTConnect/ActionSync_Info_GetMain`
- `AppManager_Events.onCallbackAction` → `event onCallback of AppManager_Events` → `Login.appManager_Callback` → `UBTConnect.connect_SetLoggedContext` → `UBTConnect.sync_Info_Main` → `server Sync_Info_GetMain`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (2 chain(s) starting in blocks of other screens omitted)

### `UBTConnect_Utils/ActionGet_RuntimeVersion`
- `Version.OnReady` → `Version.screenEvent_OnReady` → `UBTConnect_Utils.get_ConnectVersionDetails` → `server Get_RuntimeVersion`

## Declared and reachable from the rendered blocks, not observed

### `UBT_AppManager/ActionAppManager_ChangeDevice`
- `Login.OnReady` → `Login.onReady` → `UBT_AppManager.appManager_HandleDeviceAwarenessPopUp` → `server AppManager_ChangeDevice`

### `UBT_AppManager/ActionAppManager_Logout`
- `Login.OnInitialize` → `Login.onInitialize` → `UBT_AppManager.appManager_Logout` → `server AppManager_Logout`
- `Login.OnInitialize` → `Login.onInitialize` → `Login.login` → `UBTConnect.showExceptionMessage` → `UBTConnect.connect_Logout` → `UBT_AppManager.appManager_Logout` → `server AppManager_Logout`
- `onClick in Login` → `Login.login` → `UBTConnect.showExceptionMessage` → `UBTConnect.connect_Logout` → `UBT_AppManager.appManager_Logout` → `server AppManager_Logout`

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `Connect2_LegacyShared/ActionGetNumberUnreadMessages`
- `AppManager_Events.onCallbackAction` → `event onCallback of AppManager_Events` → `Login.appManager_Callback` → `UBTConnect.connect_SetLoggedContext` → `Connect2_LegacyShared.synchronizeNumberUnreadMessages` → `server GetNumberUnreadMessages`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

