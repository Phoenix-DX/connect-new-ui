# Digest: ContactUsDetails

- Path: `/UBTConnect/ContactUsDetails`
- Viewport at capture: {'width': 390, 'height': 844, 'dpr': 1}
- body class: `phone portrait osx is-ltr`; body style: `--header-size-content: 0px; --footer-height: 0px; --viewport-height: 844px;`
- PWA: manifest `/UBTConnect/moduleservices/pwa/manifest`, service workers []
- Screen file: `UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js`

## Rendered block tree
```
Layouts.Layout_DetailPage
  LayoutRuntime_NavigationHandler.LayoutRuntime_Top
  ConnectPatterns.Icon
  BasePatterns.CustomContainer
    BasePatterns.CustomContainer
    BasePatterns.CustomContainer
    BasePatterns.CustomContainer
  App_Common_Blocks.SectionSeparator
    BasePatterns.CustomContainer
  SubLayout.SubLayout_DirectoryDetailScreen_Section
    BasePatterns.CustomContainer
      Layouts.SubLayout_Section
        BasePatterns.CustomContainer
          BasePatterns.CustomContainer
          ConnectPatterns.SkeletonSection
            ConnectPatterns.TextArea_WithCounter
              ConnectPatterns.InputCounter
                BasePatterns.CustomContainer
  ConnectPatterns.FixedFooter
    BasePatterns.CustomContainer
      Utilities.ButtonLoading
        CW_Common.Button
          ConnectPatterns.Button
            ConnectPatterns.IconText
              BasePatterns.Columns_Two
                Adaptive.Columns2
                  ConnectPatterns.Icon
                  BasePatterns.CustomText
                    ConnectPatterns.IconInline_Internal
  App_Common_Blocks_PopupDialogs.Dialog_Information
    ConfirmationDialogs.ActionConfirmationDialog
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
App_Cache.CacheControl_UserInfo_Wrapper
  CacheControl.CacheControl_UserInfo
    CacheControl.CacheControl
```

# Part 1: screen and rendered blocks (spec these in detail)

## `UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Out_TimezoneName | output | Text | `""` |
| Out_TimezoneOffset | output | Integer | `0` |
| Countries | output | RecordList | `OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.CS_CountryNameList())` |
| ContactUsForm | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect_Communication_CSModel.UI_ContactUsFormRec())` |
| IsFormFilled | local | Boolean | `false` |
| IsAnyFilled | local | Boolean | `false` |
| Description | local | Text | `""` |
| MessagePrompt | local | Text | `""` |
| isLogged | local | Boolean | `false` |
| CountryPhone | local | PhoneNumber | `""` |
| isSubmiting | local | Boolean | `false` |
| Rate_SelectedRate | local | Integer | `0` |
| Rate_ShowRate | local | Boolean | `false` |
| Rate_UserWantToBeContacted | local | Boolean | `false` |
| CallPopupData | local | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactByPhonePopupDataRec())` |
| LocalCacheControl_UserInformation | local | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.BooleanDirectory_UserCurrentRecord())` |
| isLoadingMainData | local | Boolean | `true` |
| IgnorePolices | local | Boolean | `false` |
| In_ContactSubjectId | input | Text | `""` |
| In_ContactSubjectTitle | input | Text | `""` |
| In_ListMenuOptionLabel | input | Text | `""` |
| DataAction_GetLocalityTimezone | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new DataAction_GetLocalityTimezoneDataActRec())` |
| DataAction_GetCountriesNames | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new DataAction_GetCountriesNamesDataActRec())` |
- Data actions: `DataActionDataAction_GetLocalityTimezone` → `screenservices/UBTConnect/App_Menu_ContactUs/ContactUsDetails/DataActionDataAction_GetLocalityTimezone`, `DataActionDataAction_GetCountriesNames` → `screenservices/UBTConnect/App_Menu_ContactUs/ContactUsDetails/DataActionDataAction_GetCountriesNames`
- Server actions: `SendContactUsMessage` → `screenservices/UBTConnect/App_Menu_ContactUs/ContactUsDetails/ServiceAPISendContactUsMessage`
- Lifecycle handlers: Initialize, Ready
- Client actions / event handlers: `onChange_FormInput`, `onAfterFetch_GetLocalityTimezone`, `action_ResetForm`, `onClick_SubmitForm`, `screenEvent_OnReady`, `contactUs_RateRateSelected`, `cacheControl_UserInfo_WrapperResult`, `onChange_Email`, `onClick_SupportTeam`, `handler_CallPopup_Cancel`, `onClick_UserWantToBeContacted`, `onChange_PhoneNumber`, `screenEvent_OnInitialize`, `onBackNavigation_ConfirmDiscard`
- navigateBack calls: 1
- Static entities / flags: `uBT_Size.small`, `uBT_Size.base`, `uBT_Color.neutral10`, `uBT_FontSize.small`, `uBT_FontWeight.semiBold`, `type_ContactSubject.generalSuggestionsFeedbackRating`, `uBT_Icons2.checkbox`, `uBT_Icons2.checkboxOutlineBlank`, `uBT_Color.neutral5`, `uBT_Color.neutral0`, `uBT_Shadow.extraSmallTop`, `uBT_AvatarSize.base_52`, `uBT_Color.greenLightest`, `uBT_IconsSize.display_36`, `uBT_Color.greenDarker`, `uBT_Icons2.mail`, `uBT_ImageSize.auto`, `uBT_MessageType.error`
- Images: `img/UBTConnect.UbtLogo.png`
- Candidate static strings: `Support Team` | `Full Name` | `Email` | `Phone Number` | `Country` | `Locality` | `Message`

## `UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| ScrollElement | local | Object | `null` |
| ScrollEvent | local | Object | `null` |
| ShadowTimeout | local | Object | `null` |
| In_AlignTitleLeft | input | Boolean | `false` |
| In_IsPrimaryColor | input | Boolean | `true` |
| In_ExtendedClass | input | Text | `""` |
| In_EnableAccessibilityFeatures | input | Boolean | `false` |
| In_InitializeNavigationHandler | input | Boolean | `true` |
| In_IsHideTitle | input | Boolean | `false` |
- Lifecycle handlers: Ready, Destroy
- Client actions / event handlers: `onClick_BackNavigation`, `setScrollEvents`, `onDestroy`, `skipToContentOnClick`, `onReady`, `onReadyEvent`
- navigateBack calls: 1
- Static entities / flags: `uBT_Icons.arrowLeftAlt`, `uBT_Color.inherit`, `uBT_IconSize.base_24`
- Candidate static strings: `Skip to Content (Press Enter)`

## `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| DestroyCallback | local | Object | `null` |
- Lifecycle handlers: Initialize, Destroy
- Client actions / event handlers: `onInitialize`, `onDestroy`
- JavaScript nodes: `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$controller.OnInitialize.InitializeQueueJS`, `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$controller.OnDestroy.ExecuteDestroyCallbackJS`

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

## `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MainContainerClass | local | Text | `"ubt-custom-container"` |
| ExtendedClasses | input | Text | `""` |
| Options | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ContainerOptionsRec())` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onReady`, `onParametersChanged`, `clicked`

## `UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_Title | input | Text | `""` |
| In_PaddingTop | input | Text | `UBTConnectModel.staticEntities.uBT_Size.small` |
| In_PaddingBottom | input | Text | `UBTConnectModel.staticEntities.uBT_Size.small` |
- Static entities / flags: `uBT_Size.small`, `uBT_Color.neutral0`, `uBT_Size.base`, `uBT_FontWeight.semiBold`

## `UBTConnectLibrary.Layouts.SubLayout_Section.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MarginTop | input | Text | `UBTConnectLibraryModel.staticEntities.uBT_Size.extraSmall` |
| ExtendedClasses | input | Text | `""` |
- Client actions / event handlers: `clicked`
- Static entities / flags: `uBT_Size.extraSmall`

## `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_IsLoading | input | Boolean | `false` |
| In_ExtendedClass | input | Text | `""` |
| In_IsActiveWhileLoading | input | Boolean | `false` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onReady`, `screenEvent_OnParametersChanged`
- JavaScript nodes: `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$controller.ScreenEvent_OnParametersChanged.Delayed_SetInertJS`

## `UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| InputId | local | Text | `""` |
| MainContainerClass | local | Text | `"ubt-input-with-counter"` |
| In_InitialLength | input | Integer | `0` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `onReady`
- JavaScript nodes: `UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc$controller.OnReady.GetInputIdJS`

## `UBTConnectLibrary.ConnectPatterns.InputCounter.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MaxLength | local | Integer | `0` |
| CurrentLength | local | Integer | `0` |
| In_InputId | input | Text | `""` |
| In_InitialLength | input | Integer | `0` |
- Lifecycle handlers: Initialize, Ready, ParametersChanged
- Client actions / event handlers: `onInitialize`, `onParametersChanged`, `onReady`, `setCurrentLength`
- JavaScript nodes: `UBTConnectLibrary.ConnectPatterns.InputCounter.mvc$controller.OnReady.LimitMaxLenthJS`
- Static entities / flags: `uBT_Color.neutral7`, `uBT_FontSize.doubleExtraSmall`, `uBT_FontWeight.semiBold`
- Candidate static strings: `SetCurrentLength`

## `UBTConnectLibrary.ConnectPatterns.FixedFooter.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MainContainerClass | local | Text | `"ubt-fixed-footer"` |
| useBottomBar | input | Boolean | `false` |
| ExpectedFooterHeight | input | Text | `""` |
| ContentContainerId | input | Text | `""` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `onReady`

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

## `UBTConnect_Utils.CW_Common.Button.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| ButtonExtendedClass | input | Text | `""` |
| IsDisabled | input | Boolean | `false` |
| IsIconOnRight | input | Boolean | `false` |
| ButtonText | input | Text | `""` |
| IconText_SpacingSize | input | Text | `UBTConnect_UtilsModel.staticEntities.uBT_Size.extraSmall` |
| TextExtendedClasses | input | Text | `""` |
| ButtonOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ButtonOptionsRec())` |
| IconId | input | Text | `""` |
| HideIcon | input | Boolean | `false` |
- Client actions / event handlers: `buttonOnClick`
- Static entities / flags: `uBT_Size.extraSmall`

## `UBTConnectLibrary.ConnectPatterns.Button.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MainContainerClass | local | Text | `"ubt-button"` |
| In_ButtonOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ButtonOptionsRec())` |
| In_ExtendedClass | input | Text | `""` |
| In_IsDisabled | input | Boolean | `false` |
- Client actions / event handlers: `event_OnClick`

## `UBTConnectLibrary.ConnectPatterns.IconText.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| IsIconOnRight | input | Boolean | `false` |
| Text | input | Text | `""` |
| TextOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TextOptionsRec())` |
| SpacingSize | input | Text | `UBTConnectLibraryModel.staticEntities.uBT_Size.extraSmall` |
| ExtendedClasses | input | Text | `""` |
| SubtextOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TextOptionsRec())` |
| In_Subtext | input | Text | `""` |
| In_JustifyText | input | Boolean | `false` |
- Client actions / event handlers: `clicked`
- Static entities / flags: `uBT_Size.extraSmall`, `uBT_ColumnBehaviour.reduceFirst`, `uBT_ColumnBehaviour.reduceLast`, `uBT_VerticalAlign.center`, `uBT_FlexDirection.rowReverse`

## `UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MainContainerClass | local | Text | `"ubt-columns"` |
| ColumnOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ColumnOptionsRec())` |
| ExtendedClasses | input | Text | `""` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `onReady`

## `OutSystemsUI_2_23.Adaptive.Columns2.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| GutterSize | input | Text | `OutSystemsUI_2_23Model.staticEntities.gutterSize.base` |
| TabletBehavior | input | Text | `OutSystemsUI_2_23Model.staticEntities.breakColumns.none` |
| PhoneBehavior | input | Text | `OutSystemsUI_2_23Model.staticEntities.breakColumns.none` |
| ExtendedClass | input | Text | `""` |
- Static entities / flags: `gutterSize.base`, `breakColumns.none`

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

## `NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| ShowDialog | local | Boolean | `false` |
| ResolveCallback | local | Object | `null` |
- Lifecycle handlers: Initialize, Ready
- Client actions / event handlers: `onInitialize`, `show`, `yes`, `no`, `onReady`, `popupComponentDidUpdate`, `resolve`, `confirmed`
- JavaScript nodes: `NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$controller.OnReady.OnShowJS`, `NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$controller.Resolve.ResolveJS`
- Candidate static strings: `Show`

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

## `UBTConnect_Utils.CacheControl.CacheControl_UserInfo.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| CacheControl_Response | output | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.CacheControl_UserInformationRec())` |
| TTL | output | Integer | `0` |
| CacheTypeId | local | Text | `UBTConnect_UtilsModel.staticEntities.connect_CacheType.directoryUser` |
| CacheKey | input | Text | `""` |
| GetCacheInfo | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetCacheInfoDataActRec())` |
- Data actions: `DataActionGetCacheInfo` → `screenservices/UBTConnect_Utils/CacheControl/CacheControl_UserInfo/DataActionGetCacheInfo`
- Lifecycle handlers: Initialize
- Client actions / event handlers: `cacheControlOnNonCacheHit`, `onInitialize`, `onAfterFetch`, `cacheControlOnCacheHit`, `result`
- Static entities / flags: `connect_CacheType.directoryUser`
- Client variables: getUniqueCacheKey

## `UBTConnect_Utils.CacheControl.CacheControl.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| CacheTypeId | input | Text | `""` |
| CacheKey | input | Text | `""` |
| TimeToLiveSeconds | input | Integer | `7200` |
| Timeout | input | Integer | `10` |
- Lifecycle handlers: Initialize
- Client actions / event handlers: `onInitialize`, `onCacheHit`, `onNonCacheHit`

# Part 2: sources of blocks NOT rendered in the captured states

These come from referenced blocks or from earlier captures. Use them to describe other states/branches (empty, error, alternative versions), marking them as not visually captured.


## Captured calls
- 1. `ActionAppManager_SynchAppContext` (200) at 2511 ms
- 2. `DataActionGetCacheInfo` (200) at 4705 ms
- 3. `DataActionDataAction_GetLocalityTimezone` (200) at 4973 ms
- 4. `ActionAppManager_AfterInitialize` (200) at 5206 ms
- 5. `ActionSync_Info_GetMain` (200) at 5668 ms
- 6. `ActionGetNumberUnreadMessages` (200) at 5958 ms
- 7. `ServiceAPIFetchData_CacheableMapEntities` (200) at 8003 ms
- 8. `ServiceAPIFetchData_CacheableHouseholds` (200) at 10358 ms

## Not yet captured (see coverage.md)
- `App_Common.UnsupportedVersion_Wrapper`
- `App_Common_Blocks_PopupDialogs.Dialog_Navigation`
- `App_Menu_ContactUs.ContactUs_Rate`
- `App_Policies.Policy_Checker`
- `CW_Image.UBT_LazyImage`
- `CacheControl.CacheControl_Policies`
- `ConnectPatterns.CircleButton_WithLabel`
- `ConnectPatterns.HighlightSearch`
- `ConnectPatterns.IconSVG`
- `ConnectPatterns.LazyImage`
- `Fingerprint.FingerprintScanner`
- `NavigationHandler.PreventBackNavigation`
- `PIN.PinCode`

