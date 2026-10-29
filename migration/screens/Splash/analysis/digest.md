# Digest: Splash

- Path: `/UBTConnect/Splash`
- Viewport at capture: {'width': 390, 'height': 844, 'dpr': 1}
- body class: `phone portrait osx is-ltr`; body style: `--viewport-height: 844px;`
- PWA: manifest `/UBTConnect/moduleservices/pwa/manifest`, service workers []
- Screen file: `UBTConnect.App_Common.Splash.mvc.js`

## Rendered block tree
```
App_Common.LayoutBlank
  LayoutRuntime_NavigationHandler.LayoutRuntime_Top
  ConnectPatterns.LoadingDots
    Layouts.SVG_Background_Custom
      Utilities.InlineSVG
    BasePatterns.CustomText
      ConnectPatterns.IconInline_Internal
  Private.ApplicationLoadEvents
  Legacy_Share.HandleOnResumeOpenLink
    AndroidAppLinks.AndroidAppLinkOnResumeHandler
    EventfulDeeplinksPlugin.DeeplinkHandlerCentral
  App_Common.OfflineDataSyncEvents
    Private.OfflineDataSyncCore
      Private.NetworkStatusChanged
NavigationHandler.NavigationHandler
```

# Part 1: screen and rendered blocks (spec these in detail)

## `UBTConnect.App_Common.Splash.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Percentage | local | Integer | `0` |
| TriggerAnimation | local | Boolean | `false` |
| NavigationObject | local | Object | `null` |
- Client actions / event handlers: `handler_OnNavigation`, `onUpgradeProgress`, `onLoadComplete`, `loadingDotsAnimationComplete`
- Navigation: `/UBTConnect/PINRegister`(); `/UBTConnect/PINUnlock`()
- Client variables: getApp_PIN_Header_FinalHeightPercentage, getLastURL, setLastURL

## `UBTConnect.App_Common.LayoutBlank.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| ExtendedClass | input | Text | `""` |
| EnableAccessibilityFeatures | input | Boolean | `false` |
- Lifecycle handlers: Ready, Destroy
- Client actions / event handlers: `actionHandler_OnSyncErrorTrigger`, `actionHandler_OnSyncStartTrigger`, `onDestroy`, `onReady`, `actionHandler_OnSyncCompleteTrigger`, `onSyncStart`, `onSyncError`, `onSyncComplete`

## `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| DestroyCallback | local | Object | `null` |
- Lifecycle handlers: Initialize, Destroy
- Client actions / event handlers: `onInitialize`, `onDestroy`
- JavaScript nodes: `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$controller.OnInitialize.InitializeQueueJS`, `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$controller.OnDestroy.ExecuteDestroyCallbackJS`

## `UBTConnectLibrary.ConnectPatterns.LoadingDots.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MergeDurationInSeconds | local | Integer | `1` |
| InitialD | local | Text | `"M 100,50 A 50,50 0 1,0 0,50 A 50,50 0 1,0 100,50"` |
| isTriggerAnimation | input | Boolean | `false` |
| In_Header_FinalHeightPercentage | input | Decimal | `OS.DataTypes.Decimal.defaultValue` |
| In_FinalCurvaturePercentage | input | Decimal | `OS.BuiltinFunctions.integerToDecimal(100)` |
- Lifecycle handlers: Ready, Destroy, ParametersChanged
- Client actions / event handlers: `action_AnimationCompleted`, `onReady`, `onDestroy`, `action_HandleMerge`, `onParametersChanged`, `animationComplete`
- JavaScript nodes: `UBTConnectLibrary.ConnectPatterns.LoadingDots.mvc$controller.OnReady.JavaScript1JS`, `UBTConnectLibrary.ConnectPatterns.LoadingDots.mvc$controller.Action_HandleMerge.AnimateJS`, `UBTConnectLibrary.ConnectPatterns.LoadingDots.mvc$controller.Action_HandleMerge.AddBounceJS`
- Static entities / flags: `uBT_Color.primary`, `uBT_FontSize.base`, `uBT_FontWeight.semiBold`
- Candidate static strings: `Action_AnimationCompleted`

## `UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Path | local | Text | `""` |
| In_Path | input | Text | `""` |
| In_HeightPercentage | input | Decimal | `OS.BuiltinFunctions.integerToDecimal(100)` |
| In_CurvaturePercentage | input | Decimal | `OS.BuiltinFunctions.integerToDecimal(100)` |
| In_ExtendedClass | input | Text | `""` |
- Lifecycle handlers: Initialize, Ready, ParametersChanged
- Client actions / event handlers: `onInitialize`, `onReady`, `calculatePath`, `onParametersChanged`, `onPathCalculated`

## `OutSystemsUI_2_23.Utilities.InlineSVG.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Internal_Configs | local | Record | `OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.InlineSVG_InternalConfigRec())` |
| SVGCode | input | Text | `""` |
| ExtendedClass | input | Text | `""` |
- Lifecycle handlers: Initialize, Ready, Destroy, ParametersChanged
- Client actions / event handlers: `onInitialize`, `initializedHandler`, `registerCallbacks`, `onDestroy`, `onParametersChanged`, `onReady`, `initialized`
- JavaScript nodes: `OutSystemsUI_2_23.Utilities.InlineSVG.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS`
- Static entities / flags: `logType.general`, `registeredCallbackEvents.initialized`
- Candidate static strings: `InitializedHandler`

## `UBTConnectLibrary.BasePatterns.CustomText.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_Text | input | Text | `""` |
| In_TextOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TextOptionsRec())` |
| In_PaddingOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SpacingOptionsRec())` |
| In_HighlightWords | input | Text | `""` |
| In_HighlightOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TextOptionsRec())` |
| ExtendedClasses | input | Text | `""` |
| FitContent | input | Boolean | `false` |
| InJustifyText | input | Boolean | `false` |
| NoWrap | input | Boolean | `false` |
| InlineIcon | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.InlineIconRec())` |
- Client actions / event handlers: `clicked`

## `UBTConnectLibrary.ConnectPatterns.IconInline_Internal.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| InlineIcon | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.InlineIconRec())` |

## `OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| TimeoutId | local | Integer | `0` |
| IntervalId | local | Integer | `0` |
| MinimumDisplayTimeMs | input | Integer | `1000` |
- Lifecycle handlers: Initialize, Destroy
- Client actions / event handlers: `triggerOnUpgradeProgress`, `onDestroy`, `triggerOnLoadComplete`, `setTimeoutForLoadComplete`, `onInitialize`, `onUpgradeProgress`, `onLoadComplete`
- JavaScript nodes: `OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc$controller.OnDestroy.JSClearTimeoutJS`, `OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc$controller.SetTimeoutForLoadComplete.JSSetTimeoutForLoadCompleteJS`, `OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc$controller.OnInitialize.JSRegisterListenersJS`
- Candidate static strings: `TriggerOnLoadComplete` | `TriggerOnUpgradeProgress` | `SetTimeoutForLoadComplete`

## `Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| RESUME_EVENT_NAME | local | Text | `"ResumeNavigationEventName"` |
- Lifecycle handlers: Ready, Destroy
- Client actions / event handlers: `resumeNavigationHandler`, `onDestroy`, `onReady`, `resumeNavigation`
- JavaScript nodes: `Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$controller.ResumeNavigationHandler.GetEventPayloadJS`, `Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$controller.OnDestroy.RemoveListenerForPlayerClosedJS`, `Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$controller.OnReady.ResumeNavigationJS`
- Candidate static strings: `ResumeNavigationHandler`

## `EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc.js`
- Lifecycle handlers: Ready, Destroy
- Client actions / event handlers: `onDestroy`, `handleOpenUrl`, `onReady`, `onDeeplinkOpen`
- JavaScript nodes: `EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc$controller.OnDestroy.UnregisterPluginJS`, `EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc$controller.OnReady.RegisterPluginJS`
- Candidate static strings: `HandleOpenUrl`

## `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| InstanceToken | local | Text | `""` |
- Lifecycle handlers: Initialize, Destroy
- Client actions / event handlers: `onResume`, `triggerOnSyncComplete`, `onDestroy`, `init`, `syncWrapper`, `triggerOnSyncStart`, `triggerOnSyncError`, `onNetworkStatusChanged`, `onInitialize`, `onSyncError`, `onConfigure`, `onSyncComplete`, `onSync`, `onSyncStart`
- JavaScript nodes: `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnResume.GetSyncOnResumeJS`, `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnDestroy.UnregisterAPIJS`, `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.Init.RegisterAPIJS`, `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.TriggerSyncStartEventJS`, `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.TriggerSyncErrorEventOfflineJS`, `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.SuspendSyncJS`, `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnNetworkStatusChanged.GetSyncOnOnlineJS`, `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnInitialize.InitJS`
- Exceptions handled: SecurityException
- Candidate static strings: `SyncWrapper` | `OnResume` | `TriggerOnSyncStart` | `TriggerOnSyncComplete` | `TriggerOnSyncError` | `Init`

## `OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| IsOnline | local | Boolean | `true` |
| OfflineActionReference | local | Object | `null` |
| OnlineActionReference | local | Object | `null` |
| DeviceReadyActionReference | local | Object | `null` |
- Lifecycle handlers: Ready, Destroy
- Client actions / event handlers: `offline`, `onReady`, `online`, `deviceReady`, `onDestroy`, `init`, `networkStatusChanged`
- JavaScript nodes: `OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.OnReady.InitJS`, `OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.DeviceReady.SetEventListenersJS`, `OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.DeviceReady.SetActionReferencesJS`, `OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.OnDestroy.RemoveEventHandlersJS`, `OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.Init.SaveDeviceReadyCallbackJS`, `OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.Init.RegisterPluginInfoJS`, `OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.Init.SetActionReferencesJS`, `OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.Init.SetEventListenersJS`
- Candidate static strings: `Init` | `Offline` | `Online` | `DeviceReady`

## `NavigationHandler.NavigationHandler.NavigationHandler.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| DestroyCallback | local | Object | `null` |
- Lifecycle handlers: Initialize, Destroy
- Client actions / event handlers: `onInitialize`, `onDestroy`, `triggerNavigation`, `navigation`
- JavaScript nodes: `NavigationHandler.NavigationHandler.NavigationHandler.mvc$controller.OnInitialize.AddEventListenerJS`, `NavigationHandler.NavigationHandler.NavigationHandler.mvc$controller.OnDestroy.ExecuteDestroyCallbackJS`
- Candidate static strings: `TriggerNavigation`

# Part 2: sources of blocks NOT rendered in the captured states

These come from referenced blocks or from earlier captures. Use them to describe other states/branches (empty, error, alternative versions), marking them as not visually captured.


## Captured calls
- 3. `ActionSync_Info_GetMain` (200) at 7011 ms
- 6. `ServiceAPIFetchData_CacheableMapEntities` (200) at 9599 ms
- 7. `ServiceAPIFetchData_CacheableHouseholds` (200) at 12340 ms
- plus 5 call(s) outside this screen, listed in calls.md

## Not yet captured (see coverage.md)
- `ConnectPatterns.HighlightSearch`
- `ConnectPatterns.Icon`

