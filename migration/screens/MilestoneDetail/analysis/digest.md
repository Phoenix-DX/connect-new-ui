# Digest: MilestoneDetail

- Path: `/UBTConnect/MilestoneDetail`
- Viewport at capture: {'width': 390, 'height': 844, 'dpr': 1}
- body class: `phone portrait orbit-theme osx is-ltr`; body style: `--header-size-content: 0px; --footer-height: 0px; --viewport-height: 844px;`
- PWA: manifest `/UBTConnect/moduleservices/pwa/manifest`, service workers []
- Screen file: `UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail.mvc.js`

## Rendered block tree
```
Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper
  Orbit_ScreenBlocks.ScreenBlock_AccommodationHost
    Layout_OrbitTheme.Layout_Orbit
      LayoutRuntime_NavigationHandler.LayoutRuntime_Top
      Layout.BaseLayout_UpdatedOSUI
        Layout.MenuIcon__UpdatedOSUI
        Orbit_Blocks.MilestoneHeader
        Orbit_Generic_Blocks.Accordion_Orbit
          Content.DEPRECATED_Accordion
            Content.DEPRECATED_AccordionItem
              Orbit_Blocks.Card_MemberInformation
              Orbit_Blocks.Card_MemberInformation
            Content.DEPRECATED_AccordionItem
              Orbit_Blocks.Card_MemberInformation
              Orbit_Blocks.Card_MemberInformation
            Content.DEPRECATED_AccordionItem
              Orbit_Blocks.Card_MemberInformation
              Orbit_Blocks.Card_MemberInformation
            Content.DEPRECATED_AccordionItem
              Orbit_Blocks.Card_MemberInformation
              Orbit_Blocks.Card_MemberInformation
            Content.DEPRECATED_AccordionItem
              Orbit_Blocks.Card_MemberInformation
            Content.DEPRECATED_AccordionItem
              Orbit_Blocks.Card_MemberInformation
        Orbit_Blocks.ContactHelpdesk_Footer
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
    CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy
      CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction
        ConfirmationDialogs.ActionConfirmationDialog
    FileTransfer.HandleDownload
    CW_CTA_PopUps.ContactPopup_ByPhone
      CW_CTA_PopUps.ContactPopup
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
```

# Part 1: screen and rendered blocks (spec these in detail)

## `UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_FromNotification | input | Boolean | `false` |
| In_MilestoneId | input | Text | `""` |
| In_EventId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| In_HostId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| In_OrbitMilestoneTypeId | input | Text | `""` |
| In_MilestoneName | input | Text | `""` |
| In_EventName | input | Text | `""` |
- Client actions / event handlers: `onHandle_NavigateToContactByEmail`, `onHandle_NavigateTo_GuestArrangements`, `onHandle_NavigateToHouseholdDetail`, `onHandle_ContactHelpdesk`
- Navigation: `/UBTConnect/ContactByEmailOrbitHost`(In_HostName, In_EntityType, In_Subject, In_ContactCountry, In_FormattedDateTime, In_ContactLocality, In_HostEmail, In_Surname, In_AvatarURL, In_EntityId, In_MilestoneTitle, In_EventName); `/UBTConnect/GuestArrangements`(In_EventId, In_EventName, In_MilestoneTitle, In_HostId, In_MemberId, In_MilestoneId, In_OrbitMilestoneTypeId); `/UBTConnect/HomeFeed`(); `/UBTConnect/HouseholdDetails`(HouseholdId); `/UBTConnect/ContactByEmailOrbitHelpdesk`(In_Subject, In_MilestoneId, In_EventName, In_EventId)
- Static entities / flags: `connect_Entity.member`

## `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Response | output | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetGmpMilestoneHostResponseRec())` |
| UserMemberId | local | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| IsFetchingData | local | Boolean | `false` |
| In_FromNotification | input | Boolean | `false` |
| In_MilestoneId | input | Text | `""` |
| In_EventId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| In_HostId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| In_OrbitMilestoneTypeId | input | Text | `""` |
| In_MilestoneName | input | Text | `""` |
| In_EventName | input | Text | `""` |
| GetGmpMilestoneHost | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetGmpMilestoneHostDataActRec())` |
- Data actions: `DataActionGetGmpMilestoneHost` → `screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_MilestoneWrapper/DataActionGetGmpMilestoneHost`
- Lifecycle handlers: Ready
- Client actions / event handlers: `onAfterFetch_GetGmpMilestoneHost`, `onReady`, `navigateTo_ContactHostByEmail`, `navigateTo_HouseholdDetail`, `navigateTo_ContactHelpdesk`, `navigateTo_GuestArrangements`
- JavaScript nodes: `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS`
- Exceptions handled: UserException
- Static entities / flags: `orbitMilestoneType.mealGuest`, `orbitMilestoneType.mealHost`, `orbitMilestoneType.mealHelper`, `orbitMilestoneType.accommodationGuest`, `orbitMilestoneType.accommodationHost`, `orbitMilestoneType.accommodationHelper`, `orbitSkeletonLoading.milestoneWrapper`

## `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| AccommodationHostDocument | output | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetAccomodationHostDocumentRec())` |
| Response | output | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.GetAccommodationHost_ScreenRec())` |
| HasData | output | Boolean | `false` |
| IsFetchingData | local | Boolean | `false` |
| AccommodationData | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetAccommodationHostResponseRec())` |
| IsLoadingDocument | local | Boolean | `false` |
| HasDocument | local | Boolean | `false` |
| ContactByPhoneData | local | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactByPhonePopupDataRec())` |
| In_MilestoneId | input | Text | `""` |
| In_EventId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| In_HostId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| In_PreloadEventName | input | Text | `""` |
| In_PreloadMilestoneName | input | Text | `""` |
| In_OrbitMilestoneTypeId | input | Text | `""` |
| Get_Document | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new Get_DocumentDataActRec())` |
| GetAccommodationHost | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetAccommodationHostDataActRec())` |
- Data actions: `DataActionGet_Document` → `screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_AccommodationHost/DataActionGet_Document`, `DataActionGetAccommodationHost` → `screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_AccommodationHost/DataActionGetAccommodationHost`
- Lifecycle handlers: Ready
- Client actions / event handlers: `get_DocumentOnAfterFetch`, `handleDownloadOnDownloadProgress`, `onClick_OpenDocument`, `handleDownloadOnDownloadError`, `refreshData`, `onClick_GuestArrangements`, `buildMemberCallData`, `onHandle_CallClicked`, `onReady`, `onHandle_ContactHelpdesk`, `onHandle_ClickedMember`, `refreshDocumentData`, `handleDownloadOnDownloadComplete`, `onHandle_ClickedMemberPhone`, `onAfterFetch_GetAccommodationHost`, `onHandle_ContactByPhone_Cancel`, `navigateTo_HouseholdDetail`, `navigateTo_ContactHelpdesk`, `navigateTo_GuestArrangements`
- JavaScript nodes: `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS`
- Exceptions handled: UserException
- Static entities / flags: `menuAction.auto`, `directoryAPIFilter.member`, `fileExtension.pDF`, `uBT_MessageType.info`, `imageSigningSize.small`
- Candidate static strings: `Accommodation Allocation` | `Guest Arrangements`

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

## `Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| OrbitMilestoneType | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LocalOrbitMilestoneTypeRec())` |
| In_EventName | input | Text | `""` |
| In_MilestoneName | input | Text | `""` |
| In_OrbitMilestoneTypeId | input | Text | `""` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `onReady`

## `Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_ExtendedClass | input | Text | `""` |
| In_ColoredContent | input | Boolean | `false` |
| In_MultipleItems | input | Boolean | `false` |

## `OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MultipleItems | input | Boolean | `false` |
| ExtendedClass | input | Text | `""` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onReady`, `onParametersChanged`
- JavaScript nodes: `OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc$controller.OnReady.CloseAllItemsJS`

## `OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| IsMultipleItems | local | Boolean | `false` |
| AccordionObj | local | Object | `null` |
| HasWrapper | local | Boolean | `false` |
| IsWebApp | local | Boolean | `false` |
| HasContent | local | Boolean | `true` |
| IsExpanded | input | Boolean | `false` |
| UsePadding | input | Boolean | `true` |
| IsDisabled | input | Boolean | `false` |
| ExtendedClass | input | Text | `""` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onClick`, `collapse`, `onReady`, `setAriaAttributes`, `onUpdate`, `expand`, `onToggle`
- JavaScript nodes: `OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.OnClick.ToggleClassJS`, `OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.OnClick.UpdateAttributeJS`, `OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.OnClick.CloseAllJS`, `OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.Collapse.CollapseJS`, `OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.OnReady.InitJS`, `OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.OnReady.SetGlobalActionsJS`, `OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.SetAriaAttributes.SetAttributesJS`, `OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.Expand.ExpandJS`
- Candidate static strings: `SetAriaAttributes` | `Expand` | `Collapse` | `OnClick` | `OnUpdate`

## `Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| LoadedPhotoURL | local | Text | `""` |
| In_MemberInformation | input | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.MemberInformationRec())` |
| In_DisplayDot | input | Boolean | `false` |
| Is_ShowPersonalInfo | input | Boolean | `true` |
| In_HideMemberInfoLocation | input | Boolean | `false` |
| In_HouseholderId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| In_HouseholdLocality | input | Text | `""` |
| In_HouseholdCountryCode | input | Text | `""` |
| In_ShowAdminTag | input | Boolean | `false` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `onReady`, `clickedPhone`, `clickedMember`
- Static entities / flags: `directoryAPIFilter.member`, `imageSigningSize.small`
- Images: `img/Connect2_LegacyShared.User.png`

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

## `FileTransferPlugin.FileTransfer.HandleDownload.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| InstanceToken | local | Text | `""` |
- Lifecycle handlers: Initialize, Ready, Destroy
- Client actions / event handlers: `onInitialize`, `downloadComplete`, `onReady`, `downloadError`, `downloadProgress`, `onDestroy`, `onDownloadError`, `onDownloadProgress`, `onDownloadComplete`
- JavaScript nodes: `FileTransferPlugin.FileTransfer.HandleDownload.mvc$controller.OnInitialize.InitJS`, `FileTransferPlugin.FileTransfer.HandleDownload.mvc$controller.OnReady.RegisterCallBacksJS`, `FileTransferPlugin.FileTransfer.HandleDownload.mvc$controller.OnReady.RegisterWebCallbacksJS`, `FileTransferPlugin.FileTransfer.HandleDownload.mvc$controller.OnDestroy.UnregisterWebCallbacksJS`, `FileTransferPlugin.FileTransfer.HandleDownload.mvc$controller.OnDestroy.UnregisterCallbacksJS`
- Candidate static strings: `DownloadProgress` | `DownloadComplete` | `DownloadError`

## `UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| ContactPopupButtons | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupButtonTextRecordList())` |
| In_CallPopupData | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactByPhonePopupDataRec())` |
| In_ImageSizeId | input | Text | `UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.extraLarge_100` |
- Lifecycle handlers: Initialize, ParametersChanged
- Client actions / event handlers: `onInitialize`, `action_SetContactPopupButtons`, `onClick_CallButton`, `onParametersChanged`, `event_Call`, `event_Cancel`
- Static entities / flags: `uBT_ImageSize.extraLarge_100`, `uBT_Icons.callFill`, `uBT_Icons.homeFill`, `uBT_Icons.enterprise`

## `UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| SkeletonButtonList | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupButtonList())` |
| TargetTimeLabel | local | Text | `""` |
| In_ContactPopupData | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupDataRec())` |
| In_ContactPopupButtons | input | RecordList | `OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupButtonList())` |
| In_ImageSizeId | input | Text | `UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.extraLarge_100` |
- Lifecycle handlers: Initialize, ParametersChanged
- Client actions / event handlers: `action_UpdateTargetTimeLabel`, `screenEvent_OnParametersChanged`, `screenEvent_OnInitialize`, `event_Clicked`, `event_Cancel`
- Static entities / flags: `uBT_ImageSize.extraLarge_100`, `uBT_Size.small`, `uBT_Size.base`, `uBT_Color.neutral10`, `uBT_FontSize.heading6`, `uBT_FontWeight.semiBold`, `uBT_Color.neutral7`, `uBT_FontSize.doubleExtraSmall`, `uBT_ImageSize.square`, `uBT_Shape.circle`, `uBT_Icons.imageGallery`, `uBT_Shape.none`, `uBT_Size.medium`, `uBT_ButtonSize.medium`, `uBT_ButtonType.primary`, `uBT_ButtonType.scondary`, `uBT_FlexBehavior.grow`, `uBT_IconSize.medium_20`, `uBT_ButtonType.tertiary`, `uBT_Icons.callFill`

# Part 2: sources of blocks NOT rendered in the captured states

These come from referenced blocks or from earlier captures. Use them to describe other states/branches (empty, error, alternative versions), marking them as not visually captured.


## Captured calls
- 4. `DataActionGetAccommodationHost` (200) at 4038 ms
- 5. `DataActionGet_Document` (200) at 4336 ms
- 6. `ActionGetSignedImagesInBulk` (200) at 4906 ms
- plus 3 call(s) outside this screen, listed in calls.md

## Not yet captured (see coverage.md)
- `App_Common.UnsupportedVersion_Wrapper`
- `App_Policies.Policy_Checker`
- `BasePatterns.Columns_Two`
- `BasePatterns.CustomContainer`
- `BasePatterns.CustomText`
- `CW_Image.UBT_LazyImage`
- `CacheControl.CacheControl_Policies`
- `ConnectPatterns.Button`
- `ConnectPatterns.Icon`
- `ConnectPatterns.IconText`
- `ConnectPatterns.LazyImage`
- `ConnectPatterns.SkeletonSection`
- `Fingerprint.FingerprintScanner`
- `NavigationHandler.PreventBackNavigation`
- `Orbit_Blocks.OrbitAdminTag`
- `Orbit_Generic_Blocks.NoInformation_Orbit`
- `Orbit_Generic_Blocks.Skeleton_Loading`
- `Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest`
- `Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper`
- `Orbit_ScreenBlocks.ScreenBlock_MealGuest`
- `Orbit_ScreenBlocks.ScreenBlock_MealHelper`
- `Orbit_ScreenBlocks.ScreenBlock_MealHost`
- `PIN.PinCode`
- `Private.PullToRefresh`

