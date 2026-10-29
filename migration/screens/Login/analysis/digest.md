# Digest: Login

- Path: `/UBTConnect/Login`
- Viewport at capture: {'width': 390, 'height': 844, 'dpr': 1}
- body class: `phone portrait osx is-ltr`; body style: `--viewport-height: 844px;`
- PWA: manifest `/UBTConnect/moduleservices/pwa/manifest`, service workers []
- Screen file: `UBTConnect.App_Common.Login.mvc.js`

## Rendered block tree
```
Layouts.Layout_LoginFlow
  LayoutRuntime_NavigationHandler.LayoutRuntime_Top
  Layouts.SVG_Background_LoginWrapper
    Layouts.SVG_Background_Custom
      Utilities.InlineSVG
  ConnectPatterns.Tile
    BasePatterns.CustomContainer
      App_Common.WelcomeToConnect
        BasePatterns.CustomContainer
      BasePatterns.CustomContainer
        Utilities.ButtonLoading
      BasePatterns.CustomContainer
        Utilities.ButtonLoading
  App_Common.Version_LoginWrapper
    BasePatterns.CustomContainer
      App_Common.Version
        BasePatterns.CustomText
          ConnectPatterns.IconInline_Internal
  App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation
    ConfirmationDialogs.ExitConfirmationDialog
      NavigationHandler.BackNavigationHandler
  App_Common.OfflineDataSyncEvents
    Private.OfflineDataSyncCore
      Private.NetworkStatusChanged
  Layouts.AppManager_Events
  ConfirmationDialogs.ActionConfirmationDialog
  App_Common.CommonUI_InsideLayout
    App_Common.OfflineDataSyncEvents
      Private.OfflineDataSyncCore
        Private.NetworkStatusChanged
    CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction
      ConfirmationDialogs.ActionConfirmationDialog
    Legacy_Share.HandleOnResumeOpenLink
      AndroidAppLinks.AndroidAppLinkOnResumeHandler
      EventfulDeeplinksPlugin.DeeplinkHandlerCentral
    Utility.HandleImageLoadError
    NavigationHandler.BackNavigationHandler
```

# Part 1: screen and rendered blocks (spec these in detail)

## `UBTConnect.App_Common.Login.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| IsExecutingLogin | local | Boolean | `false` |
| IsResettingPassword | local | Boolean | `false` |
| IsUnsupportedSystem | local | Boolean | `false` |
| In_IsFromInvalidPermissions | input | Boolean | `false` |
| In_IsFromResetPIN | input | Boolean | `false` |
| CallbackType | input | Text | `""` |
| CallbackGUID | input | Text | `""` |
- Lifecycle handlers: Initialize, Ready
- Client actions / event handlers: `login`, `onReady`, `appManager_Callback`, `onInitialize`
- Navigation: `/UBTConnect/ContactUsMenu`(); `/UBTConnect/HomeFeed`(); `/UBTConnect/PINRegister`()
- JavaScript nodes: `UBTConnect.App_Common.Login.mvc$controller.OnInitialize.IsRestoredFromCacheJS`
- Static entities / flags: `uBT_Size.base`, `appManager_JSUtils_CustomEvents.deviceAwareness_InvalidDevice`, `appManager_JSUtils_CustomEvents.idP_OnLogin`, `appManager_JSUtils_CustomEvents.idP_OnResetPassword`, `uBT_MessageType.success`, `appManager_JSUtils_CustomEvents.pIN_NeedRegistration`
- Candidate static strings: `Need help? ` | `Contact Us`

## `UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_HasOverlay | input | Boolean | `false` |
| In_ExtendedClass | input | Text | `""` |
| In_IsCommonBlock | input | Boolean | `false` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `onReady2`, `onPathCalculated`, `onReady`

## `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| DestroyCallback | local | Object | `null` |
- Lifecycle handlers: Initialize, Destroy
- Client actions / event handlers: `onInitialize`, `onDestroy`
- JavaScript nodes: `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$controller.OnInitialize.InitializeQueueJS`, `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$controller.OnDestroy.ExecuteDestroyCallbackJS`

## `UBTConnectLibrary.Layouts.SVG_Background_LoginWrapper.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_ExtendedClass | input | Text | `""` |
- Client actions / event handlers: `onPathCalculated`

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

## `UBTConnectLibrary.ConnectPatterns.Tile.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MainContainerClass | local | Text | `"ubt-tile"` |
| ExtendedClasses | input | Text | `""` |
- Static entities / flags: `uBT_Color.neutral0`, `uBT_Size.base`, `uBT_Shape.large`

## `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MainContainerClass | local | Text | `"ubt-custom-container"` |
| ExtendedClasses | input | Text | `""` |
| Options | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ContainerOptionsRec())` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onReady`, `onParametersChanged`, `clicked`

## `UBTConnect.App_Common.WelcomeToConnect.mvc.js`
- Static entities / flags: `uBT_Size.base`, `uBT_Color.primary`, `uBT_FontSize.base`, `uBT_FontWeight.semiBold`
- Images: `img/UBTConnect.ConnectLogo.svg`

## `OutSystemsUI_2_23.Utilities.ButtonLoading.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Internal_Configs | local | Record | `OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.ButtonLoading_InternalConfigRec())` |
| IsLoading | input | Boolean | `false` |
| ShowLabelOnLoading | input | Boolean | `false` |
| ExtendedClass | input | Text | `""` |
- Lifecycle handlers: Initialize, Ready, Destroy, ParametersChanged
- Client actions / event handlers: `initializedHandler`, `onDestroy`, `onParametersChanged`, `registerCallbacks`, `onInitialize`, `onReady`, `initialized`
- JavaScript nodes: `OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS`
- Static entities / flags: `registeredCallbackEvents.initialized`, `logType.general`
- Candidate static strings: `InitializedHandler`

## `UBTConnect.App_Common.Version.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Version | local | Text | `""` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `screenEvent_OnReady`
- Static entities / flags: `uBT_Color.inherit`

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

## `NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| ShowDialog | local | Boolean | `false` |
| Force | input | Boolean | `false` |
- Lifecycle handlers: Initialize, Ready
- Client actions / event handlers: `onBackNavigationExit`, `popupComponentDidUpdate`, `yes`, `onInitialize`, `onReady`, `no`
- JavaScript nodes: `NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc$controller.OnBackNavigationExit.ShouldShowDialogJS`, `NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc$controller.Yes.ExitAppJS`, `NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc$controller.OnReady.ClearScreenStateCacheJS`

## `NavigationHandler.NavigationHandler.BackNavigationHandler.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| DestroyCallback | local | Object | `null` |
| Priority | input | Integer | `0` |
- Lifecycle handlers: Initialize, Destroy
- Client actions / event handlers: `triggerBackNavigation`, `onDestroy`, `onInitialize`, `backNavigation`
- JavaScript nodes: `NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$controller.OnDestroy.DestroyJS`, `NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$controller.OnInitialize.AddBackNavigationHandlerJS`
- Candidate static strings: `TriggerBackNavigation`

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

## `UBT_AppManager.Layouts.AppManager_Events.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| DestroyCallbackFunction | local | Object | `null` |
| DestroyCallbackFunction2 | local | Object | `null` |
| DestroyCallbackFunction3 | local | Object | `null` |
- Lifecycle handlers: Ready, Destroy
- Client actions / event handlers: `onCallbackAction`, `onDestroy`, `onReady`, `onCallback`
- JavaScript nodes: `UBT_AppManager.Layouts.AppManager_Events.mvc$controller.OnDestroy.RunDestroyCallbacksJS`, `UBT_AppManager.Layouts.AppManager_Events.mvc$controller.OnReady.GetHandlersJS`
- Static entities / flags: `appManager_JSUtils_CustomEvents.idP_OnLogin`, `appManager_JSUtils_CustomEvents.idP_OnResetPassword`, `appManager_JSUtils_CustomEvents.idP_OnCancelled`, `appManager_JSUtils_CustomEvents.pIN_NeedRegistration`, `appManager_JSUtils_CustomEvents.idP_OnClose`, `appManager_JSUtils_CustomEvents.deviceAwareness_InvalidDevice`, `appManager_JSUtils_CustomEvents.idP_OnOffline`
- Candidate static strings: `OnCallbackAction`

## `NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| ShowDialog | local | Boolean | `false` |
| ResolveCallback | local | Object | `null` |
- Lifecycle handlers: Initialize, Ready
- Client actions / event handlers: `onInitialize`, `show`, `yes`, `no`, `onReady`, `popupComponentDidUpdate`, `resolve`, `confirmed`
- JavaScript nodes: `NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$controller.OnReady.OnShowJS`, `NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$controller.Resolve.ResolveJS`
- Candidate static strings: `Show`

## `UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| HideLockScreen | local | Boolean | `false` |
| IsNavigateToHomeOnBack | local | Boolean | `false` |
| In_ShowLockScreen | input | Boolean | `false` |
| In_IgnorePolicy | input | Boolean | `false` |
| In_IgnoreLockScreen | input | Boolean | `false` |
- Lifecycle handlers: Initialize
- Client actions / event handlers: `onBackNavigation_RedirectHome`, `action_RedirectHome`, `onPinUnlock_HideLockScreen`, `screenEvent_OnInitialize`, `onBackNavigation_MaybeRedirectHome`, `event_OnScreenLocked`, `event_OnScreenUnlocked`
- Navigation: `/UBTConnect/HomeFeed`()
- JavaScript nodes: `UBTConnect.App_Common.CommonUI_InsideLayout.mvc$controller.ScreenEvent_OnInitialize.IsRestoredFromCacheJS`, `UBTConnect.App_Common.CommonUI_InsideLayout.mvc$controller.OnBackNavigation_MaybeRedirectHome.GetIsInitialLocationJS`, `UBTConnect.App_Common.CommonUI_InsideLayout.mvc$controller.OnBackNavigation_MaybeRedirectHome.JavaScript1JS`
- Client variables: getApp_Policies_HasPolicyToAccept, getIsNavigateToHomeOnBack, setIsNavigateToHomeOnBack
- Candidate static strings: `Action_RedirectHome`

## `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_ExtendedClass | input | Text | `""` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `onReady`, `upgrade`
- Static entities / flags: `uBT_FontSize.base`, `uBT_FontWeight.semiBold`, `uBT_Size.small`, `uBT_Display.flex`, `uBT_AlignItems.center`, `uBT_JustifyContent.center`, `uBT_Color.primary`, `uBT_Shape.circle`, `uBT_Icons.lock`, `uBT_Color.neutral0`, `uBT_IconSize.nonStandard_32`, `uBT_Size.base`, `uBT_Color.neutral10`, `uBT_FlexDirection.row`, `uBT_FontSize.small`, `uBT_Icons.openNew`, `uBT_IconSize.nonStandard_16`
- Client variables: setApp_SubscriptionPopUp

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

## `Connect2_LegacyShared.Utility.HandleImageLoadError.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| DestroyCallback | local | Object | `null` |
- Lifecycle handlers: Ready, Destroy
- Client actions / event handlers: `applicationEvent_ImageError`, `onReady`, `onDestroy`
- JavaScript nodes: `Connect2_LegacyShared.Utility.HandleImageLoadError.mvc$controller.OnReady.Error_EventListenerJS`, `Connect2_LegacyShared.Utility.HandleImageLoadError.mvc$controller.OnDestroy.ExecuteDestroyCallbackJS`
- Static entities / flags: `applicationEvents_Directory.errorFromPhotoView`
- Images: `img/Connect2_LegacyShared.User_rectangle.png`
- Candidate static strings: `ApplicationEvent_ImageError`

# Part 2: sources of blocks NOT rendered in the captured states

These come from referenced blocks or from earlier captures. Use them to describe other states/branches (empty, error, alternative versions), marking them as not visually captured.


## Captured calls
- 1. `ActionAppManager_SynchAppContext` (200) at 5006 ms
- 2. `ActionSync_Info_GetMain` (200) at 5836 ms
- 3. `ActionGet_RuntimeVersion` (200) at 13707 ms

## Not yet captured (see coverage.md)
- `App_Common.UnsupportedVersion_Wrapper`
- `App_PIN.Block_PINUnlock`
- `App_Policies.Policy_Checker`
- `ConnectPatterns.HighlightSearch`
- `ConnectPatterns.Icon`
- `NavigationHandler.PreventBackNavigation`

