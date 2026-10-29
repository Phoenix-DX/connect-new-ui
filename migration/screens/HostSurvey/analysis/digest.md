# Digest: HostSurvey

- Path: `/UBTConnect/HostSurvey`
- Viewport at capture: {'width': 390, 'height': 844, 'dpr': 1}
- body class: `phone portrait orbit-theme osx is-ltr`; body style: `--header-size-content: 0px; --footer-height: 0px; --viewport-height: 844px;`
- PWA: manifest `/UBTConnect/moduleservices/pwa/manifest`, service workers []
- Screen file: `UBTConnect.Legacy_OrbitEventsFlow.HostSurvey.mvc.js`

## Rendered block tree
```
App_Common.CommonUI_InsideLayout
  App_Common.OfflineDataSyncEvents
    Private.OfflineDataSyncCore
      Private.NetworkStatusChanged
  App_PIN.Block_PINUnlock
    Layouts.Layout_LoginFlow
      Layouts.SVG_Background_LoginWrapper
        Layouts.SVG_Background_Custom
          Utilities.InlineSVG
      App_PIN.Block_PINUnlock_ContentWrapper
        Fingerprint.PinUnlock_MobileWrapper
          PIN.Pincode_Unlock
            PIN.InactivityTimer
  CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction
    ConfirmationDialogs.ActionConfirmationDialog
  Legacy_Share.HandleOnResumeOpenLink
    AndroidAppLinks.AndroidAppLinkOnResumeHandler
    EventfulDeeplinksPlugin.DeeplinkHandlerCentral
  Utility.HandleImageLoadError
  NavigationHandler.BackNavigationHandler
Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey
  Layout_OrbitTheme.Layout_Orbit
    LayoutRuntime_NavigationHandler.LayoutRuntime_Top
    Layout.BaseLayout_UpdatedOSUI
      Layout.MenuIcon__UpdatedOSUI
      Orbit_Blocks.HostSurvey_TopMessage
      Content.Accordion
        Content.AccordionItem
          Orbit_Blocks.HostSurvey_Item
            Orbit_Blocks.HostSurvey_AccommodationPills
              Orbit_Blocks.HostSurvey_PillItem
              Orbit_Blocks.HostSurvey_PillItem
              Orbit_Blocks.HostSurvey_PillItem
              Orbit_Blocks.HostSurvey_PillItem
          Orbit_Blocks.HostSurvey_Item
            Orbit_Blocks.HostSurvey_AccommodationPills
              Orbit_Blocks.HostSurvey_PillItem
              Orbit_Blocks.HostSurvey_PillItem
              Orbit_Blocks.HostSurvey_PillItem
              Orbit_Blocks.HostSurvey_PillItem
          Orbit_Blocks.HostSurvey_Item
            Orbit_Blocks.HostSurvey_AccommodationPills
              Orbit_Blocks.HostSurvey_PillItem
              Orbit_Blocks.HostSurvey_PillItem
              Orbit_Blocks.HostSurvey_PillItem
          Orbit_Blocks.HostSurvey_Item
            Orbit_Blocks.HostSurvey_AccommodationPills
              Orbit_Blocks.HostSurvey_PillItem
              Orbit_Blocks.HostSurvey_PillItem
              Orbit_Blocks.HostSurvey_PillItem
          Orbit_Blocks.HostSurvey_Item
            Orbit_Blocks.HostSurvey_AccommodationPills
              Orbit_Blocks.HostSurvey_PillItem
              Orbit_Blocks.HostSurvey_PillItem
              Orbit_Blocks.HostSurvey_PillItem
          Orbit_Blocks.HostSurvey_Item
            Orbit_Blocks.HostSurvey_AccommodationPills
              Orbit_Blocks.HostSurvey_PillItem
              Orbit_Blocks.HostSurvey_PillItem
              Orbit_Blocks.HostSurvey_PillItem
          Orbit_Blocks.HostSurvey_Item
            Orbit_Blocks.HostSurvey_AccommodationPills
              Orbit_Blocks.HostSurvey_PillItem
              Orbit_Blocks.HostSurvey_PillItem
              Orbit_Blocks.HostSurvey_PillItem
        Content.AccordionItem
          Orbit_Blocks.HostSurvey_Item
            Orbit_Blocks.HostSurvey_MealPills
              Orbit_Blocks.HostSurvey_PillItem
              Orbit_Blocks.HostSurvey_PillItem
          Orbit_Blocks.HostSurvey_Item
            Orbit_Blocks.HostSurvey_MealPills
              Orbit_Blocks.HostSurvey_PillItem
              Orbit_Blocks.HostSurvey_PillItem
      Orbit_Generic_Blocks.Orbit_ConfirmationPopUp_New
      Orbit_Generic_Blocks.Orbit_ConfirmationPopUp_New
      Orbit_Generic_Blocks.Orbit_ConfirmationPopUp_New
      Orbit_Generic_Blocks.Orbit_ConfirmationPopUp_New
      Orbit_Generic_Blocks.Orbit_ConfirmationPopUp_New
  NavigationHandler.BackNavigationHandler
```

# Part 1: screen and rendered blocks (spec these in detail)

## `UBTConnect.Legacy_OrbitEventsFlow.HostSurvey.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_EventId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| In_MemberId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| In_EventName | input | Text | `""` |
| In_EventStartDate | input | DateTime | `OS.DataTypes.DateTime.defaultValue` |
| In_EventEndDate | input | DateTime | `OS.DataTypes.DateTime.defaultValue` |
- Client actions / event handlers: `onHandle_NavigateTo_Back`
- navigateBack calls: 1

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

## `UBTConnect.App_PIN.Block_PINUnlock.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| UseOverlay | local | Boolean | `true` |
| IsUnsupportedSystem | local | Boolean | `false` |
| In_ForceVisible | input | Boolean | `false` |
| In_IsCommonBlock | input | Boolean | `false` |
- Lifecycle handlers: Initialize
- Client actions / event handlers: `screenEvent_OnInitialize`, `block_PINUnlock_ContentWrapperNavigateTo_PINRegist`, `unlock`
- Navigation: `/UBTConnect/PINRegister`()
- Static entities / flags: `uBT_Color.neutral0`, `uBT_Size.extraLarge`, `uBT_Size.base`, `uBT_Shape.large`

## `UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_HasOverlay | input | Boolean | `false` |
| In_ExtendedClass | input | Text | `""` |
| In_IsCommonBlock | input | Boolean | `false` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `onReady2`, `onPathCalculated`, `onReady`

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

## `UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| LocalCacheControlPolicies | local | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.CacheControl_PoliciesBooleanRecord())` |
| ShowFingerprintReader | local | Boolean | `false` |
| UseOverlay | input | Boolean | `true` |
| In_ForceVisible | input | Boolean | `false` |
| UnlockText | input | Text | `"Enter your PIN code"` |
| ShowNeedHelp | input | Boolean | `false` |
| isFromMenu | input | Boolean | `false` |
| ShowForgotPIN | input | Boolean | `false` |
| ShowPolicy | input | Boolean | `false` |
- Lifecycle handlers: Initialize
- Client actions / event handlers: `cacheControl_PoliciesResult`, `event_Pincode_PinUnlockError`, `event_Pincode_PinUnlockSuccess`, `onClick_PrivacyPolicy`, `onClick_TermsAndCondition`, `screenEvent_OnInitialize`, `onClick_ForgotPIN`, `unlock`, `navigateTo_PINRegister`
- Navigation: `/UBTConnect/ContactUsMenu`(); `/UBTConnect/Login`(In_IsFromResetPIN)
- Static entities / flags: `uBT_Color.inherit`, `uBT_FontSize.base`, `uBT_FontWeight.semiBold`, `uBT_Icons2.fingerprint`, `uBT_Icons2.backspace`, `uBT_IconsSize.display_36`, `uBT_Color.neutral0`, `uBT_Color.neutral10`, `uBT_FontSize.small`, `uBT_MessageType.error`
- Client variables: getApp_PIN_BiometricEnabled
- Images: `img/UBTConnect.ConnectLogoWhite.svg`, `img/UBTConnect.ConnectLogo.svg`
- Candidate static strings: `Contact Us`

## `UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_PinLength | input | Integer | `0` |
| In_ExtendedClasses | input | Text | `""` |
| In_IsScanFingerprintOnReady | input | Boolean | `false` |
| In_ForceVisible | input | Boolean | `false` |
| In_AllowBackNavigation | input | Boolean | `false` |
| In_HideFingerprint | input | Boolean | `false` |
- Client actions / event handlers: `timeout`, `pinUnlockSuccess`, `keyPressed`, `pincodeChange`, `pinUnlockError`, `userLoggedOut`

## `UBT_AppManager.PIN.Pincode_Unlock.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| LocalPin | local | Record | `OS.DataTypes.ImmutableBase.getData(new UBT_AppManagerModel.Pin_LocalStorage_ItemRec())` |
| LastForceVisible | local | Boolean | `false` |
| In_PinLength | input | Integer | `0` |
| In_ExtendedClasses | input | Text | `""` |
| In_ForceVisible | input | Boolean | `false` |
| In_AllowBackNavigation | input | Boolean | `false` |
- Lifecycle handlers: Initialize, ParametersChanged
- Client actions / event handlers: `pinCodeKeyPressed`, `action_HandleForceVisible`, `onParametersChanged`, `onSetPin`, `onUnlockSuccess`, `onTimeout`, `onInitialize`, `userLoggedOut`, `timeout`, `pincodeChange`, `pinUnlockError`, `keyPressed`, `pinUnlockSuccess`
- JavaScript nodes: `UBT_AppManager.PIN.Pincode_Unlock.mvc$controller.OnInitialize.GetPinUnlockCallbackJS`
- Exceptions handled: NotRegisteredException
- Static entities / flags: `appManager_JSUtils_ElementCache_Property.obj_PinUnlockCallback`
- Client variables: getPIN_SessionInactivity_Use, getPIN_IsLocked
- Candidate static strings: `OnUnlockSuccess`

## `UBT_AppManager.PIN.InactivityTimer.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| DestroyCallback | local | Object | `null` |
- Lifecycle handlers: Initialize, Destroy
- Client actions / event handlers: `onInitialize`, `onTimeout`, `onDestroy`, `timeout`
- JavaScript nodes: `UBT_AppManager.PIN.InactivityTimer.mvc$controller.OnInitialize.GetTimeoutHandlerJS`, `UBT_AppManager.PIN.InactivityTimer.mvc$controller.OnDestroy.ExecuteDestroyCallbackJS`
- Static entities / flags: `appManager_JSUtils_CustomEvents.pIN_OnTimeout`
- Candidate static strings: `OnTimeout`

## `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_ExtendedClass | input | Text | `""` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `onReady`, `upgrade`
- Static entities / flags: `uBT_FontSize.base`, `uBT_FontWeight.semiBold`, `uBT_Size.small`, `uBT_Display.flex`, `uBT_AlignItems.center`, `uBT_JustifyContent.center`, `uBT_Color.primary`, `uBT_Shape.circle`, `uBT_Icons.lock`, `uBT_Color.neutral0`, `uBT_IconSize.nonStandard_32`, `uBT_Size.base`, `uBT_Color.neutral10`, `uBT_FlexDirection.row`, `uBT_FontSize.small`, `uBT_Icons.openNew`, `uBT_IconSize.nonStandard_16`
- Client variables: setApp_SubscriptionPopUp

## `NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| ShowDialog | local | Boolean | `false` |
| ResolveCallback | local | Object | `null` |
- Lifecycle handlers: Initialize, Ready
- Client actions / event handlers: `onInitialize`, `show`, `yes`, `no`, `onReady`, `popupComponentDidUpdate`, `resolve`, `confirmed`
- JavaScript nodes: `NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$controller.OnReady.OnShowJS`, `NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$controller.Resolve.ResolveJS`
- Candidate static strings: `Show`

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

## `NavigationHandler.NavigationHandler.BackNavigationHandler.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| DestroyCallback | local | Object | `null` |
| Priority | input | Integer | `0` |
- Lifecycle handlers: Initialize, Destroy
- Client actions / event handlers: `triggerBackNavigation`, `onDestroy`, `onInitialize`, `backNavigation`
- JavaScript nodes: `NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$controller.OnDestroy.DestroyJS`, `NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$controller.OnInitialize.AddBackNavigationHandlerJS`
- Candidate static strings: `TriggerBackNavigation`

## `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Response | output | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetHostSurveyResponseRec())` |
| HasError | output | Boolean | `false` |
| IsFetchingData | local | Boolean | `false` |
| CurrentStep | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.IntegerLocalHostSurveyStepRecord())` |
| HostSurvey | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetHostSurveyResponseRec())` |
| StepProperties | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.StepPropertiesStepPropertiesStepPropertiesStepPrope` |
| RoomNames | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList())` |
| IsAddingHelper | local | Boolean | `false` |
| PopUpInfo | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.TextTextBooleanBooleanBooleanBooleanBooleanRecord()` |
| PositionToDelete | local | Integer | `0` |
| SurveyDiscarded | local | Boolean | `false` |
| SurveySubmitted | local | Boolean | `false` |
| IsConfirmedSurvey | local | Boolean | `false` |
| HasDataSteps | local | Boolean | `false` |
| FilteredHelperRoles | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LocalHelperRoleList())` |
| IsPostingSurvey | local | Boolean | `false` |
| In_EventId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| In_MemberId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| In_EventName | input | Text | `""` |
| In_EventStartDate | input | DateTime | `OS.DataTypes.DateTime.defaultValue` |
| In_EventEndDate | input | DateTime | `OS.DataTypes.DateTime.defaultValue` |
| GetLocalHouseFloors | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetLocalHouseFloorsAggrRec())` |
| GetLocalBedSizes | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetLocalBedSizesAggrRec())` |
| GetCurrentLocalSurveyStatus | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetCurrentLocalSurveyStatusAggrRec())` |
| GetLocalHelperStatus | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetLocalHelperStatusAggrRec())` |
| GetLocalVehicleOwners | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetLocalVehicleOwnersAggrRec())` |
| GetLocalMealTypes | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetLocalMealTypesAggrRec())` |
| GetLocalHostSurveySteps | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetLocalHostSurveyStepsAggrRec())` |
| GetLocalHelperRoles | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetLocalHelperRolesAggrRec())` |
| GetLocalVehicleTypes | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetLocalVehicleTypesAggrRec())` |
| GetLocalGenderPreferences | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetLocalGenderPreferencesAggrRec())` |
| GetHostSurvey | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetHostSurveyDataActRec())` |
- Data actions: `DataActionGetHostSurvey` → `screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/DataActionGetHostSurvey`
- Server actions: `PostHostSurvey` → `screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/ActionPostHostSurvey`
- Lifecycle handlers: Ready
- Client actions / event handlers: `onHandle_EditItem`, `deleteItem`, `onReady`, `toggleSingleResetMealData`, `onHandle_PopUp_Secondary`, `onHandle_PopUp_Close`, `onHandle_DeleteItem`, `onAfterFetch_GetHostSurvey`, `onHandle_SecondaryButton`, `onHandle_DeleteSearchHelper`, `saveMultipleMeals_Success`, `survey_Next`, `onHandle_SaveFailed`, `refreshData`, `saveMultipleMeals_Failed`, `refreshStaticEntities`, `onHandle_AddHelpers`, `onAfterFetch_GetHostSurveySteps`, `cancelEdit`, `refreshLocalSurveyStatus`, `postHostSurvey`, `onHandle_PopUp_Primary`, `navigateTo_SpecificStep`, `onAfterFetch_GetLocalHelperRoles`, `setStepData`, `onHandle_PrimaryButton`, `addNewVehicle`, `refreshLocalSurveySteps`, `onClick_AddItem`, `addNewRoom`, `onHandle_BackNavigation`, `onAfterFetch_GetSurveyStatus`, `onHandle_SaveItem`, `validateStepEdit`, `navigateTo_Back`
- JavaScript nodes: `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS`
- Static entities / flags: `menuAction.auto`, `hostSurveyStep.summary`, `surveyStatus.unableToHost`, `hostSurveyStep.navigation`, `surveyStatus.pending`, `surveyStatus.sent`, `hostSurveyStep.accommodation`, `hostSurveyStep.meal`, `hostSurveyStep.helper`, `hostSurveyStep.vehicle`, `accordionIconPosition.right`, `accordionIconType.caret`, `helperStatus.approved`, `helperStatus.pending`, `orbitSkeletonLoading.hostSurvey`, `uBT_MessageType.error`, `surveyStatus.confirmed`
- Candidate static strings: `Enter preferred meals` | `Please make sure you tick which meal is your preference.` | `Do you, or your guests & helpers, have vehicles to help transport guests within the locality?` | `Let your guest know the type of vehicles you have to collect them when they arrive.` | `No room data added.` | `No meal data added.` | `No helper data added.` | `No vehicle data added.`

## `Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| UsePullToRefresh | input | Boolean | `false` |
| ExtendedClasses | input | Text | `""` |
| CustomClass | input | Text | `""` |
- Lifecycle handlers: Initialize, Ready
- Client actions / event handlers: `onReady`, `onInitialize`, `onPullToRefresh`
- Static entities / flags: `themeClass.orbit`

## `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| DestroyCallback | local | Object | `null` |
- Lifecycle handlers: Initialize, Destroy
- Client actions / event handlers: `onInitialize`, `onDestroy`
- JavaScript nodes: `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$controller.OnInitialize.InitializeQueueJS`, `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$controller.OnDestroy.ExecuteDestroyCallbackJS`

## `Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| UsePullToRefresh | input | Boolean | `false` |
| HideHeaderOnScroll | input | Boolean | `false` |
| MenuBehavior | input | Text | `Connect2_LegacySharedModel.staticEntities.sideMenuBehavior.overlay` |
| ExtendedClass | input | Text | `""` |
| CustomClass | input | Text | `""` |
| IsHeaderTransparent | input | Boolean | `false` |
- Lifecycle handlers: Ready, Destroy
- Client actions / event handlers: `onDestroy`, `actionHandler_OnPullToRefreshTrigger`, `onReady`, `onPullToRefresh`
- Static entities / flags: `sideMenuBehavior.overlay`

## `Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| IsRTL | local | Boolean | `false` |
| MenuAction | input | Text | `""` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onBack`, `onReady`, `onToggleMenu`
- navigateBack calls: 1
- Static entities / flags: `menuAction.back`, `menuAction.hidden`

## `Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_TopMessage.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_Title | input | Text | `""` |
| In_Message | input | Text | `""` |

## `OutSystemsUI_2_23.Content.Accordion.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| InternalConfigs | local | Record | `OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.Accordion_InternalConfigsRec())` |
| MultipleItems | input | Boolean | `false` |
| ExtendedClass | input | Text | `""` |
- Lifecycle handlers: Initialize, Ready, Destroy, ParametersChanged
- Client actions / event handlers: `onReady`, `registerCallbacks`, `onInitialize`, `onParametersChanged`, `initializedHandler`, `onDestroy`, `initialized`
- JavaScript nodes: `OutSystemsUI_2_23.Content.Accordion.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS`
- Static entities / flags: `logType.general`, `registeredCallbackEvents.initialized`
- Candidate static strings: `InitializedHandler`

## `OutSystemsUI_2_23.Content.AccordionItem.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| InternalConfigs | local | Record | `OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.AccordionItem_InternalConfigsRec())` |
| StartsExpanded | input | Boolean | `false` |
| Icon | input | Text | `OutSystemsUI_2_23Model.staticEntities.accordionIconType.caret` |
| IconPosition | input | Text | `OutSystemsUI_2_23Model.staticEntities.accordionIconPosition.right` |
| IsDisabled | input | Boolean | `false` |
| ExtendedClass | input | Text | `""` |
- Lifecycle handlers: Initialize, Ready, Destroy, ParametersChanged
- Client actions / event handlers: `onDestroy`, `triggerToggleClick`, `initializedHandler`, `onParametersChanged`, `onReady`, `onInitialize`, `registerCallbacks`, `onToggle`, `initialized`
- JavaScript nodes: `OutSystemsUI_2_23.Content.AccordionItem.mvc$controller.RegisterCallbacks.GetActionReferenceJS`
- Static entities / flags: `accordionIconType.caret`, `accordionIconPosition.right`, `logType.general`, `registeredCallbackEvents.initialized`, `registeredCallbackEvents.onToggle`
- Candidate static strings: `InitializedHandler` | `TriggerToggleClick`

## `Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_Item.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_Title | input | Text | `""` |
| In_HasEdit | input | Boolean | `false` |
| In_HasDelete | input | Boolean | `false` |
| In_HasPlaceholder | input | Boolean | `false` |
- Client actions / event handlers: `click_Edit`, `click_Delete`

## `Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationPills.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_IsDisabled | input | Boolean | `false` |
| In_HostSurvey_Room | input | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurvey_RoomItemRec())` |
| In_HouseFloors | input | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LocalHouseFloorList())` |
| In_GenderPreferences | input | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LocalGenderPreferenceList())` |

## `Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_IsDisabled | input | Boolean | `false` |
| In_IconClass | input | Text | `""` |
| In_PillText | input | Text | `""` |
| In_IsSmallIcon | input | Boolean | `false` |
| In_ExtendedClass | input | Text | `""` |
| In_ExtendedStyle | input | Text | `""` |

## `Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealPills.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_IsDisabled | input | Boolean | `false` |
| In_HostSurvey_Meal | input | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurvey_MealItemInfoRec())` |

## `Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Orbit_ConfirmationPopUp_New.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_ShowPopUp | input | Boolean | `false` |
| In_Title | input | Text | `""` |
| In_Message | input | Text | `""` |
| In_ExtendedClass | input | Text | `""` |
- Client actions / event handlers: `primaryAction`, `close`, `secondaryAction`

# Part 2: sources of blocks NOT rendered in the captured states

These come from referenced blocks or from earlier captures. Use them to describe other states/branches (empty, error, alternative versions), marking them as not visually captured.


## Captured calls
- 1. `DataActionGetHostSurvey` (200) at 2078 ms

## Not yet captured (see coverage.md)
- `App_Common.UnsupportedVersion_Wrapper`
- `App_Policies.Policy_Checker`
- `BasePatterns.Columns_Two`
- `BasePatterns.CustomContainer`
- `BasePatterns.CustomText`
- `CacheControl.CacheControl_Policies`
- `ConnectPatterns.Icon`
- `ConnectPatterns.SkeletonSection`
- `Fingerprint.FingerprintScanner`
- `NavigationHandler.PreventBackNavigation`
- `Orbit_Blocks.HostSurvey_AccommodationItem`
- `Orbit_Blocks.HostSurvey_AddHelper`
- `Orbit_Blocks.HostSurvey_AdminNotes`
- `Orbit_Blocks.HostSurvey_HelperItem`
- `Orbit_Blocks.HostSurvey_HelperPills`
- `Orbit_Blocks.HostSurvey_MealItem`
- `Orbit_Blocks.HostSurvey_NavigationItem`
- `Orbit_Blocks.HostSurvey_StepHeader`
- `Orbit_Blocks.HostSurvey_VehicleItem`
- `Orbit_Blocks.HostSurvey_VehiclePills`
- `Orbit_Generic_Blocks.InputWithMaxChar`
- `Orbit_Generic_Blocks.NoInformation_Orbit`
- `Orbit_Generic_Blocks.Orbit_FooterWithActions`
- `Orbit_Generic_Blocks.Skeleton_Loading`
- `PIN.PinCode`
- `Private.PullToRefresh`

