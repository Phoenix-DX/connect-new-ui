# Digest: AssembleEvents

- Path: `/UBTConnect/AssembleEvents`
- Viewport at capture: {'width': 390, 'height': 844, 'dpr': 1}
- body class: `phone portrait connect-theme osx is-ltr`; body style: `--header-size-content: 0px; --footer-height: 56px; --viewport-height: 844px;`
- PWA: manifest `/UBTConnect/moduleservices/pwa/manifest`, service workers []
- Screen file: `UBTConnect.Legacy_AssembleFlow.AssembleEvents.mvc.js`

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
Assemble.ScreenBlock_AssembleEvents
  Layout.Layout
    LayoutRuntime_NavigationHandler.LayoutRuntime_Top
    Layout.BaseLayout_UpdatedOSUI
      Layout.MenuIcon__UpdatedOSUI
      Reusable.NewConnectContent
        Assemble.AssembleSummary_List
          Share.StickyHeader
            Reusable.HorizontalTags
              Reusable.HorizontalScrollTiles
                Content.Tag
                Content.Tag
            Assemble.AssembleSummary_List__Header
          NewConnect_Utilities.NC_ErrorScreen
          Assemble.AssembleSummary_FilterDrawer
            NewConnect.InBlock_ActionMenu
              Reusable.NewConnectContent
                ConnectPatterns.Input
                  Interaction.InputWithIcon
                    ConnectPatterns.Icon
                    Interaction.InputWithIcon
      App_Common.BottomBarMenu
        App_Common.BottomBarContent
          Navigation.BottomBarItem
            ConnectPatterns.Icon
            BasePatterns.CustomText
              ConnectPatterns.IconInline_Internal
          Navigation.BottomBarItem
            ConnectPatterns.Icon
            BasePatterns.CustomText
              ConnectPatterns.IconInline_Internal
          Navigation.BottomBarItem
            App_Common_Blocks.App_IconBadge
              ConnectPatterns.SkeletonSection
                OutSystemsUIOverrides.IconBadge
                  ConnectPatterns.Icon
                  OutSystemsUIOverrides.Badge
            BasePatterns.CustomText
              ConnectPatterns.IconInline_Internal
          Navigation.BottomBarItem
            ConnectPatterns.Icon
            BasePatterns.CustomText
              ConnectPatterns.IconInline_Internal
          Navigation.BottomBarItem
            ConnectPatterns.Icon
            BasePatterns.CustomText
              ConnectPatterns.IconInline_Internal
ConnectPatterns.BottomSheet
  Interaction.BottomSheet
    BasePatterns.Columns_Three
      Adaptive.Columns3
        ConnectPatterns.Icon
        BasePatterns.CustomText
          ConnectPatterns.IconInline_Internal
        ConnectPatterns.Icon
    Assemble.Assemble_FilterSheet
      Interaction.InputWithIcon
      Directory.LocalityListDetail
      CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy
        CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction
          ConfirmationDialogs.ActionConfirmationDialog
```

# Part 1: screen and rendered blocks (spec these in detail)

## `UBTConnect.Legacy_AssembleFlow.AssembleEvents.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| UseNewFilterSheet | local | Boolean | `false` |
| AssembleFilterBottomSheet_Id | local | Text | `""` |
| SubdivisionId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| ShowBackNavigation | input | Boolean | `false` |
| IsUserSubdivision | input | Boolean | `true` |
- Client actions / event handlers: `handler_NavigateTo_AssembleLocationFilters`, `handler_AssembleFilterSheetOnCancel`, `handler_NavigateTo_MyCalendar`, `handler_AssembleFilterSheetInitialized`, `handler_AssembleFilterSheetOnSelectSubdivision`, `handler_NavigateTo_AssembleDetail`
- Navigation: `/UBTConnect/Assemble_BrowseByCountry`(); `/UBTConnect/MyEntertaining`(MyCalendarEventSourceId); `/UBTConnect/AssembleDetail`(Start, EventId, SeriesId)
- Static entities / flags: `type_MyCalendarEventSource.assemble`

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

## `Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| SelectedSubdivisionName | output | Text | `""` |
| SubdivisionName | local | Text | `""` |
| SubdivisionId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| ShowBackNavigation | input | Boolean | `false` |
| IsUserSubdivision | input | Boolean | `true` |
| GetSubdivisionName | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetSubdivisionNameDataActRec())` |
- Data actions: `DataActionGetSubdivisionName` → `screenservices/Connect2_Assemble_MUI/Assemble/ScreenBlock_AssembleEvents/DataActionGetSubdivisionName`
- Lifecycle handlers: Ready
- Client actions / event handlers: `getSubdivisionNameOnAfterFetch`, `handler_AssyncException`, `onReady`, `navigateTo_AssembleLocationFilters`, `navigateTo_MyCalendarAssemble`, `navigateTo_AssembleDetail`
- JavaScript nodes: `Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS`
- Exceptions handled: UserException
- Static entities / flags: `menuAction.back`, `menuAction.menu`
- Candidate static strings: `Assemble`

## `Connect2_LegacyShared.Layout.Layout.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| UsePullToRefresh | input | Boolean | `false` |
| ExtendedClasses | input | Text | `""` |
| CustomClass | input | Text | `""` |
| IsHeaderTransparent | input | Boolean | `false` |
- Lifecycle handlers: Initialize, Ready
- Client actions / event handlers: `onReady`, `onInitialize`, `onPullToRefresh`
- Static entities / flags: `themeClass.connect`

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

## `Connect2_Assemble_MUI.Assemble.AssembleSummary_List.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| AssembleEventTypeList | output | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_MUIModel.AssembleEventTypeList())` |
| AssembleSummaryMeetingList | output | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_MUIModel.AssembleEventSummaryList())` |
| EventList | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_MUIModel.AssembleEventSummaryList())` |
| EventList_Filter | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleEventFilterRec())` |
| IsShow_FilterDrawer | local | Boolean | `false` |
| EventList_FilterLabel | local | Text | `""` |
| EventList_RangeFrom | local | DateTime | `OS.DataTypes.DateTime.defaultValue` |
| EventsList_RangeTo | local | DateTime | `OS.DataTypes.DateTime.defaultValue` |
| EventList_PageNumber | local | Integer | `1` |
| EventList_IsFiltered | local | Boolean | `false` |
| EventList_HasMoreRecords | local | Boolean | `false` |
| MaxRecords | local | Integer | `10` |
| SkeletonList_Length | local | Integer | `3` |
| HeaderMenuOptionList | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_MUIModel.TagList())` |
| LocalSubdivisionId | local | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| DeviceTimezone | local | Text | `""` |
| IsHeaderLoading | local | Boolean | `true` |
| SelectedMettingTypeIds | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_MUIModel.Text1RecordList())` |
| SubdivisionId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| GetAssembleEventTypes | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetAssembleEventTypesDataActRec())` |
| GetAssembleMeetingSummaryList | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetAssembleMeetingSummaryListDataActRec())` |
- Data actions: `DataActionGetAssembleEventTypes` → `screenservices/Connect2_Assemble_MUI/Assemble/AssembleSummary_List/DataActionGetAssembleEventTypes`, `DataActionGetAssembleMeetingSummaryList` → `screenservices/Connect2_Assemble_MUI/Assemble/AssembleSummary_List/DataActionGetAssembleMeetingSummaryList`
- Lifecycle handlers: Initialize, Ready
- Client actions / event handlers: `onReady`, `buildHeaderMenu`, `handler_ClearFilters`, `getAssembleEventTypesOnAfterFetch`, `throwAssyncException`, `setLocalSubdivisonId`, `setDeviceTimezone`, `refresh_EventList`, `list_AssembleSummaryCardsOnScrollEnding`, `onClick_AssembleMeetingSummaryCard`, `handler_ApplyFilters`, `getAssembleMeetingSummaryListOnAfterFetch`, `toggleFilterDrawer`, `onInitialize`, `horizontalTagsOnClickTag`, `setDateRangeByFilterOptionId`, `refresh_GetAssembleMeetingSummaryList`, `setFilterLabel`, `refresh_GetAssembleEventTypes`, `navigateTo_AssembleDetail`, `assyncException`, `navigateToLocality`
- JavaScript nodes: `Connect2_Assemble_MUI.Assemble.AssembleSummary_List.mvc$controller.OnReady.FetchDataJS`, `Connect2_Assemble_MUI.Assemble.AssembleSummary_List.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS`, `Connect2_Assemble_MUI.Assemble.AssembleSummary_List.mvc$controller.Refresh_EventList.ScrollToTopJS`
- Static entities / flags: `viewmodeType.upcomingMeetings`, `viewmodeType.pastMeetings`
- Candidate static strings: `ThrowAssyncException` | `Refresh_GetAssembleMeetingSummaryList` | `Refresh_GetAssembleEventTypes`

## `Connect2_LegacyShared.Share.StickyHeader.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| ExtendedClass | input | Text | `""` |

## `Connect2_LegacyShared.Reusable.HorizontalTags.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| TagList | input | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.TagList())` |
| ActiveTagId | input | Text | `""` |
| IsScrollToActiveTagOnReady | input | Boolean | `false` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `onReady`, `onClick`, `onClickTag`
- JavaScript nodes: `Connect2_LegacyShared.Reusable.HorizontalTags.mvc$controller.OnReady.ScrollToActiveTagJS`

## `OutSystemsUI_2_23.Content.Tag.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Color | input | Text | `OutSystemsUI_2_23Model.staticEntities.color.primary` |
| Size | input | Text | `""` |
| Shape | input | Text | `OutSystemsUI_2_23Model.staticEntities.shape.rounded` |
| IsLight | input | Boolean | `false` |
| ExtendedClass | input | Text | `""` |
- Static entities / flags: `color.primary`, `shape.rounded`

## `Connect2_Assemble_MUI.Assemble.AssembleSummary_List__Header.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| FilterLabel | input | Text | `""` |
| ListHeaderLabel | input | Text | `""` |
| ShowClear | input | Boolean | `false` |
| IsLoading | input | Boolean | `false` |
- Client actions / event handlers: `onClick`, `clear`
- Candidate static strings: `Clear`

## `Connect2_LegacyShared.NewConnect_Utilities.NC_ErrorScreen.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Height | local | Integer | `0` |
| In_ErrorMessage | input | Text | `"No information available."` |
| In_MatchMainContentHeight | input | Boolean | `false` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `onReady`
- JavaScript nodes: `Connect2_LegacyShared.NewConnect_Utilities.NC_ErrorScreen.mvc$controller.OnReady.SetHeightJS`

## `Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| OriginalAssembleMeetingFilter | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleEventFilterRec())` |
| IsLoading | local | Boolean | `false` |
| FilteredEventTypes | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_MUIModel.AssembleEventTypeBooleanRecordList())` |
| SearchKey_Current | local | Text | `""` |
| IsOpen | input | Boolean | `false` |
| AssembleMeetingFilter | input | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleEventFilterRec())` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `link_ClearOnClick`, `applyOnClick`, `applySearchFilter`, `handler_SearchInputEventOnClear`, `onReady`, `onParametersChanged`, `checkbox_IsSelectedOnChange`, `search_InputEvent_OnChange`, `scrollToTop`, `actionMenuOnClose`, `close`, `applyFilters`
- JavaScript nodes: `Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.mvc$controller.OnReady.JavaScript1JS`, `Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.mvc$controller.ScrollToTop.ScrollToTopJS`, `Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.mvc$controller.ActionMenuOnClose.HasClickedInsideFilterDivJS`
- Static entities / flags: `shape.rounded`
- Candidate static strings: `Filters` | `Meeting Types` | `Reset` | `Cancel`

## `Connect2_LegacyShared.NewConnect.InBlock_ActionMenu.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| ActiveDOMElem | local | Object | `null` |
| IsOpen | input | Boolean | `false` |
| ExtendedClass | input | Text | `""` |
- Lifecycle handlers: ParametersChanged
- Client actions / event handlers: `onCancelClick`, `toggleActionSheet`, `onParametersChanged`, `onClose`
- JavaScript nodes: `Connect2_LegacyShared.NewConnect.InBlock_ActionMenu.mvc$controller.OnCancelClick.FocusActiveDOMElemJS`, `Connect2_LegacyShared.NewConnect.InBlock_ActionMenu.mvc$controller.ToggleActionSheet.ToggleActionSheetJS`

## `UBTConnectLibrary.ConnectPatterns.Input.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| SearchString | local | Text | `""` |
| In_Options | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SearchInputRec())` |
| In_ExtendedClasses | input | Text | `""` |
- Lifecycle handlers: Ready, Destroy, ParametersChanged
- Client actions / event handlers: `event_OnChange2`, `onChange`, `onClick_ClearString`, `onReady`, `onDestroy`, `onParametersChanged`, `onKeyup`, `event_OnChange`, `event_ClearString`, `event_Submit`, `event_OnReady`, `event_OnFocus`
- JavaScript nodes: `UBTConnectLibrary.ConnectPatterns.Input.mvc$controller.OnChange.JavaScript1JS`, `UBTConnectLibrary.ConnectPatterns.Input.mvc$controller.OnReady.GetFunctionJS`
- Static entities / flags: `uBT_Color.inherit`, `uBT_Icons.search`, `uBT_IconSize.medium_20`, `uBT_Icons.cancelFill`
- Candidate static strings: `Event_OnChange2` | `OnClick_ClearString`

## `OutSystemsUI_2_23.Interaction.InputWithIcon.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| AlignIconRight | input | Boolean | `false` |
| ExtendedClass | input | Text | `""` |

## `UBTConnectLibrary.ConnectPatterns.Icon.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MainContainerClass | local | Text | `"ubt-icon"` |
| In_IconId | input | Text | `""` |
| In_ColorId | input | Text | `UBTConnectLibraryModel.staticEntities.uBT_Color.neutral9` |
| In_SizeId | input | Text | `""` |
| In_Visible | input | Boolean | `true` |
| In_ExtendedClasses | input | Text | `""` |
- Client actions / event handlers: `click`
- Static entities / flags: `uBT_Color.neutral9`

## `UBTConnect.App_Common.BottomBarMenu.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| LocalBottomBar_Items | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.BottomBar_ItemList())` |
| Retried | local | Boolean | `false` |
| ActiveItem | input | Text | `""` |
| useMapsItems | input | Boolean | `false` |
| isHouseholder | input | Boolean | `false` |
| isRootPage | input | Boolean | `false` |
- Lifecycle handlers: Initialize, Ready, ParametersChanged
- Client actions / event handlers: `onInitialize`, `onReady`, `onParametersChanged`, `event_BottomBar_Clicked`, `bottomBar_Clicked`
- Navigation: `/UBTConnect/HomeFeed`(); `/UBTConnect/CountryList`(); `/UBTConnect/Locality_Details`(); `/UBTConnect/Updates_SingleList`(); `/UBTConnect/Bookmarks`(); `/UBTConnect/Menu`()
- JavaScript nodes: `UBTConnect.App_Common.BottomBarMenu.mvc$controller.OnParametersChanged.Delayed_BottomBarSlider_ForceRefreshJS`
- Static entities / flags: `connect_BottomBar_Items.updates`, `uBT_Color.primary`, `uBT_Color.neutral6`, `uBT_IconsSize.base_24`, `uBT_FontSize.extraSmall`, `connect_BottomBar_Items.bookmarks`, `connect_BottomBar_Items.home`, `connect_BottomBar_Items.directory`, `connect_BottomBar_Items.menu`
- Client variables: getDirectory_Updates_UnreadCount

## `OutSystemsUI_2_23.Navigation.BottomBarItem.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| ExtendedClass | input | Text | `""` |

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

## `UBTConnect.App_Common_Blocks.App_IconBadge.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| BadgeNumber | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| MaxNotifications | input | Integer | `9` |
| IconId | input | Text | `""` |
| IconColor | input | Text | `""` |
| isLoading | input | Boolean | `false` |
- Client actions / event handlers: `iconClick`, `onClick`
- Static entities / flags: `uBT_Color.red`, `uBT_IconsSize.base_24`

## `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_IsLoading | input | Boolean | `false` |
| In_ExtendedClass | input | Text | `""` |
| In_IsActiveWhileLoading | input | Boolean | `false` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onReady`, `screenEvent_OnParametersChanged`
- JavaScript nodes: `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$controller.ScreenEvent_OnParametersChanged.Delayed_SetInertJS`

## `UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Number | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| Color | input | Text | `UBTConnectLibraryModel.staticEntities.uBT_Color.primary` |
| IsLight | input | Boolean | `false` |
| ExtendedClass | input | Text | `""` |
| MaxNumber | input | Integer | `9` |
- Static entities / flags: `uBT_Color.primary`

## `UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Number | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| Color | input | Text | `UBTConnectLibraryModel.staticEntities.uBT_Color.primary` |
| Size | input | Text | `""` |
| Shape | input | Text | `UBTConnectLibraryModel.staticEntities.shape.rounded` |
| IsLight | input | Boolean | `false` |
| ExtendedClass | input | Text | `""` |
| MaxNumber | input | Integer | `9` |
- Static entities / flags: `uBT_Color.primary`, `shape.rounded`

## `UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MainContainerClass | local | Text | `"ubt-bottom-sheet"` |
| Local_isOpen | local | Boolean | `false` |
| HideContentWhenClosed | local | Boolean | `false` |
| Title | input | Text | `""` |
| ShowHandlerPreview | input | Boolean | `false` |
| HandlerPreviewOffset | input | Text | `""` |
| ShowHeader | input | Boolean | `true` |
| Content_BackgroundColorId | input | Text | `""` |
| Content_Padding | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SpacingOptionsRec())` |
| FooterHeight | input | Text | `"0px"` |
| ExtendedClasses | input | Text | `""` |
| isTransparentOverlay | input | Boolean | `false` |
| CloseOnClickOutsite | input | Boolean | `false` |
| ShowBackButton | input | Boolean | `false` |
| IsNotInertWhenClosed | input | Boolean | `false` |
| IsHideContentWhenClosed | input | Boolean | `false` |
| In_TouchActionNoneFix | input | Boolean | `false` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `bottomSheet_InternalOnToggle`, `onReady`, `maybeHideContentWhenClosed`, `setHideContentWhenClosed`, `closeOnClick`, `bottomSheet_InternalInitialized`, `removeInert`, `initialized`, `onClose`, `onToggle`, `onBack`
- JavaScript nodes: `UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$controller.OnReady.CloseOnClickJS`, `UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$controller.OnReady.AddTransitionListenerJS`, `UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$controller.MaybeHideContentWhenClosed.DelaySetHideWhenClosedJS`, `UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$controller.BottomSheet_InternalInitialized.JavaScript2JS`, `UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$controller.BottomSheet_InternalInitialized.JavaScript1JS`, `UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$controller.RemoveInert.RemoveInertJS`
- Static entities / flags: `shape.rounded`, `uBT_ColumnBehaviour.expandMiddle`, `uBT_Size.none`, `uBT_VerticalAlign.center`, `uBT_Icons.arrowLeftAlt`, `uBT_Color.neutral9`, `uBT_Color.transparent`, `uBT_IconSize.medium_20`, `uBT_Icons.close`, `uBT_Color.neutral10`, `uBT_FontSize.small`, `uBT_FontWeight.semiBold`
- Candidate static strings: `RemoveInert` | `SetHideContentWhenClosed`

## `OutSystemsUI_2_23.Interaction.BottomSheet.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| InternalConfigs | local | Record | `OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.BottomSheet_InternalConfigRec())` |
| Shape | input | Text | `OutSystemsUI_2_23Model.staticEntities.shape.softRounded` |
| ShowHandler | input | Boolean | `true` |
| ExtendedClass | input | Text | `""` |
- Lifecycle handlers: Initialize, Ready, Destroy, ParametersChanged
- Client actions / event handlers: `onInitialize`, `registerCallback`, `onToggleHandler`, `initializedHandler`, `onDestroy`, `onReady`, `onParametersChanged`, `initialized`, `onToggle`
- JavaScript nodes: `OutSystemsUI_2_23.Interaction.BottomSheet.mvc$controller.RegisterCallback.GetCallbackHandlerJS`
- Static entities / flags: `shape.softRounded`, `registeredCallbackEvents.initialized`, `registeredCallbackEvents.onToggle`
- Candidate static strings: `InitializedHandler` | `OnToggleHandler`

## `UBTConnectLibrary.BasePatterns.Columns_Three.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MainContainerClass | local | Text | `"ubt-columns"` |
| ExtendedClasses | input | Text | `""` |
| ColumnOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ColumnOptionsRec())` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `onReady`

## `OutSystemsUI_2_23.Adaptive.Columns3.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| GutterSize | input | Text | `OutSystemsUI_2_23Model.staticEntities.gutterSize.base` |
| TabletBehavior | input | Text | `OutSystemsUI_2_23Model.staticEntities.breakColumns.none` |
| PhoneBehavior | input | Text | `OutSystemsUI_2_23Model.staticEntities.breakColumns.none` |
| ExtendedClass | input | Text | `""` |
- Static entities / flags: `gutterSize.base`, `breakColumns.none`

## `Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| ScreenTitle | local | Text | `"Browse by Country"` |
| CountryDetailList | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_MUIModel.CountryWithMapPositionList())` |
| TempCountryDetailList | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_MUIModel.CountryWithMapPositionList())` |
| ShowLocalitiesList | local | Boolean | `false` |
| CountryCode | local | Text | `""` |
| CountryName | local | Text | `""` |
| SearchTerm | local | Text | `""` |
| IsCountriesDataFetched | local | Boolean | `false` |
| UserInformation | local | Record | `OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Users_Current_GETResponseRec())` |
| SubdivisionId | local | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `onClickApply`, `onReady`, `onChange_SearchTearm`, `handler_GoBackToCountries`, `handler_SelectedSubdivision`, `fetchCountries`, `handler_GoToBrowseCountry`, `handler_FreeSubscriptionAlert`, `cancel`, `navigateToSubdivision`
- Candidate static strings: `No results found` | `Cancel` | `Apply`

## `Connect2_LegacyShared.Directory.LocalityListDetail.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| CountryDetailList | input | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CountryWithMapPositionList())` |
| HideHeader | input | Boolean | `false` |
- Client actions / event handlers: `onClick_GoToBrowseCountry`

# Part 2: sources of blocks NOT rendered in the captured states

These come from referenced blocks or from earlier captures. Use them to describe other states/branches (empty, error, alternative versions), marking them as not visually captured.


## Captured calls
- 1. `ActionAppManager_SynchAppContext` (200) at 3742 ms
- 2. `ActionGetUserInformation` (200) at 5401 ms
- 3. `ActionGetUserInformation` (200) at 5723 ms
- 4. `DataActionGetAssembleEventTypes` (200) at 5779 ms
- 5. `DataActionGetAssembleMeetingSummaryList` (200) at 5864 ms
- 6. `ActionGetCountriesBySubscription` (200) at 5996 ms
- 7. `ActionAppManager_AfterInitialize` (200) at 6597 ms
- 8. `ActionSync_Info_GetMain` (200) at 7126 ms
- 9. `ActionGetNumberUnreadMessages` (200) at 7403 ms
- 10. `ServiceAPIFetchData_CacheableMapEntities` (200) at 10080 ms
- 11. `ServiceAPIFetchData_CacheableHouseholds` (200) at 12144 ms

## Not yet captured (see coverage.md)
- `App_Common.UnsupportedVersion_Wrapper`
- `App_Policies.Policy_Checker`
- `Assemble.AssembleSummaryCard`
- `Assemble.Assemble_FilterLocalityByCountry`
- `AssembleSkeleton.AssembleSummary_SkeletonList`
- `BasePatterns.Columns_Two`
- `BasePatterns.CustomContainer`
- `CacheControl.CacheControl_Policies`
- `ConnectPatterns.HighlightSearch`
- `ConnectPatterns.IconSVG`
- `Fingerprint.FingerprintScanner`
- `NavigationHandler.PreventBackNavigation`
- `NewConnect_Skeleton.NC_Card_Item_Text__Skeleton`
- `PIN.PinCode`
- `Private.PullToRefresh`
- `Reusable.Spinner`
- `ScrollAnchors.ScrollAnchor`

