# Digest: LegacyShareObject

- Path: `/UBTConnect/LegacyShareObject`
- Viewport at capture: {'width': 390, 'height': 844, 'dpr': 1}
- body class: `phone portrait connect-theme osx is-ltr`; body style: `--header-size-content: 0px; --footer-height: 0px; --viewport-height: 844px;`
- PWA: manifest `/UBTConnect/moduleservices/pwa/manifest`, service workers []
- Screen file: `UBTConnect.Legacy_Share.LegacyShareObject.mvc.js`

## Rendered block tree
```
Share_UI.ScreenBlock_ShareObject
  Layout.Layout
    LayoutRuntime_NavigationHandler.LayoutRuntime_Top
    Layout.BaseLayout_UpdatedOSUI
      Layout.MenuIcon_Back
      Utility.Result_Item_Image
        CW_Image.UBT_LazyImage
          ConnectPatterns.SkeletonSection
            ConnectPatterns.LazyImage
              ConnectPatterns.SkeletonSection
                BasePatterns.CustomContainer
      Share_UI.ProfileList
        Interaction.InputWithIcon
        Utility.Result_Item_Image
          Directory.HighlightSearch
        Utility.FreeSubscriptionActionDialog
          ConfirmationDialogs.ActionConfirmationDialog
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
CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction
  ConfirmationDialogs.ActionConfirmationDialog
```

# Part 1: screen and rendered blocks (spec these in detail)

## `UBTConnect.Legacy_Share.LegacyShareObject.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| User_AgeVisibility | local | Boolean | `false` |
| In_ShareObjectTypeId | input | Text | `""` |
| In_ObjectId | input | Text | `""` |
| In_CustomTitle | input | Text | `""` |
- Lifecycle handlers: Initialize
- Client actions / event handlers: `onInitialize`, `handler_ShareObject_SubscriptionDenied`

## `Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| HouseholdName | local | Text | `""` |
| HouseholdDescription | local | Text | `""` |
| HouseholdTag | local | Text | `""` |
| Bucket | local | Text | `""` |
| Path | local | Text | `""` |
| Type | local | Text | `""` |
| SignedURL | local | Text | `""` |
| CommunityBusiness | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect_CommunityBusiness_CSModel.UI_CommunityBusiness_ShareCardRec())` |
| IsLoading | local | Boolean | `false` |
| ShareObjectTypeId | input | Text | `""` |
| ObjectId | input | Text | `""` |
| In_CustomTitle | input | Text | `""` |
| User_AgeVisibility | input | Boolean | `false` |
| GetShareObjectTypeById | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetShareObjectTypeByIdAggrRec())` |
- Aggregates: `ScreenDataSetGetShareObjectTypeById` → `screenservices/Connect2_LegacyShared/Share_UI/ScreenBlock_ShareObject/ScreenDataSetGetShareObjectTypeById`
- Server actions: `ShareObject` → `screenservices/Connect2_LegacyShared/Share_UI/ScreenBlock_ShareObject/ActionShareObject`, `Get_UI_CommunityBusinessShareCard` → `screenservices/Connect2_LegacyShared/Share_UI/ScreenBlock_ShareObject/ServiceAPIGet_UI_CommunityBusinessShareCard`, `GetHouseholdDetails` → `screenservices/Connect2_LegacyShared/Share_UI/ScreenBlock_ShareObject/ServiceAPIGetHouseholdDetails`
- Lifecycle handlers: Initialize, Ready, ParametersChanged
- Client actions / event handlers: `deferredHandleShareProfileList`, `onParametersChanged`, `onInitialize`, `handleShareProfileList`, `onReady`, `subscriptionDenied`
- JavaScript nodes: `Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject.mvc$controller.HandleShareProfileList.DeferHandleShareJS`
- Static entities / flags: `type_ShareObject.household`, `resultListType.household`, `connect_Entity.household`, `uBT_ImageSize.large_65`, `type_ShareObject.oneSchoolGlobal`, `type_ShareObject.campusCo`, `resultListType.subdivision`, `type_ShareObject.feed`, `uBT_Shape.soft`, `uBT_Icons2.feedItem`, `uBT_Color.cyanDark`, `uBT_Color.neutral0`, `uBT_AvatarSize.large_65`
- Images: `img/Connect2_LegacyShared.CampusCo_PhotoComingSoon.png`, `img/Connect2_LegacyShared.OneSchool_PhotoComingSoon.png`
- Candidate static strings: `DeferredHandleShareProfileList`

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

## `Connect2_LegacyShared.Utility.Result_Item_Image.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Last_Bucket | local | Text | `""` |
| Last_Path | local | Text | `""` |
| Last_Type | local | Text | `""` |
| Last_SignedURL | local | Text | `""` |
| In_ShowDescription | input | Boolean | `false` |
| ShowPlaceholderForImage | input | Boolean | `false` |
| In_ShowTag | input | Boolean | `false` |
| In_HasAction | input | Boolean | `false` |
| In_IsRoundImage | input | Boolean | `false` |
| In_BackgroundColor | input | Text | `"var(--color-neutral-0)"` |
| In_Diameter | input | Integer | `70` |
| In_ResultType | input | Integer | `0` |
| In_Bucket | input | Text | `""` |
| In_Path | input | Text | `""` |
| In_Type | input | Text | `""` |
| In_SignedURL | input | Text | `""` |
| In_HasPadding | input | Boolean | `true` |
| In_HasBorder | input | Boolean | `true` |
| In_IsNavigationLoading | input | Boolean | `false` |
| CustomClass | input | Text | `""` |
| HtmlDataItem | input | Text | `""` |
| ItemHeight | input | Text | `""` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `loadPhotoAsync`, `onClick_Result_Item`, `onClick_Item`
- Static entities / flags: `resultListType.subdivision`
- Images: `img/Connect2_LegacyShared.no_division_rectangle.png`, `img/Connect2_LegacyShared.User_rectangle.png`

## `UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| LocalFallbackoptions | local | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec())` |
| LocalFallbackPadding | local | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SpacingOptionsRec())` |
| LocalBorderRadius | local | Text | `UBTConnect_UtilsModel.staticEntities.uBT_Shape.circle` |
| LocalBorderColorId | local | Text | `""` |
| LocalBorderSizeId | local | Text | `""` |
| isFetched | local | Boolean | `false` |
| LocalImageSizeId | local | Text | `""` |
| LocalImageType | local | Text | `""` |
| LocalEntityId | local | Text | `""` |
| LocalImageURL | local | Text | `""` |
| ImageURL | input | Text | `""` |
| EntityId | input | Text | `""` |
| EntityType | input | Text | `""` |
| ImageSize | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LazyImageSizeRec())` |
| ExtendedClass | input | Text | `""` |
| In_BorderRadius | input | Text | `""` |
| In_HighRes | input | Boolean | `false` |
| HasErrorMessage | input | Boolean | `false` |
- Lifecycle handlers: Initialize, Ready, ParametersChanged
- Client actions / event handlers: `onInitialize`, `onReady`, `setLocalEntityId`, `onParametersChanged`
- Static entities / flags: `uBT_Shape.circle`, `connect_Entity.member`, `uBT_Color.cyanLightest`, `uBT_Color.cyanDarker`, `uBT_Size.none`, `uBT_Shape.none`, `uBT_Size.base`, `uBT_FontSize.display`, `uBT_ImageSize.extraSmall_32`, `uBT_FontSize.extraSmall`, `uBT_IconSize.medium_20`, `uBT_ImageSize.small_40`, `uBT_FontSize.small`, `uBT_IconSize.base_24`, `uBT_ImageSize.base_52`, `uBT_FontSize.base`, `uBT_IconSize.nonStandard_32`, `uBT_ImageSize.medium_60`, `uBT_FontSize.heading6`, `uBT_IconSize.display_36`, `uBT_ImageSize.large_65`, `uBT_FontSize.heading4`, `uBT_ImageSize.extraLarge_100`, `uBT_FontSize.heading2`, `uBT_IconSize.nonStandard_64`, `uBT_ImageSize.doubleExtraLarge_176`, `uBT_IconSize.nonStandard_108`, `uBT_ImageSize.fullHeight_100_Percent`, `uBT_ImageSize.maxHeight_100vh`, `uBT_ImageSize.fullWidth_100_Percent`

## `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_IsLoading | input | Boolean | `false` |
| In_ExtendedClass | input | Text | `""` |
| In_IsActiveWhileLoading | input | Boolean | `false` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onReady`, `screenEvent_OnParametersChanged`
- JavaScript nodes: `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$controller.ScreenEvent_OnParametersChanged.Delayed_SetInertJS`

## `UBTConnectLibrary.ConnectPatterns.LazyImage.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| isLoading | local | Boolean | `false` |
| Local_ImageURL | local | Text | `""` |
| Local_HasImage | local | Boolean | `false` |
| MainContainerClass | local | Text | `"ubt-lazy-image"` |
| isError | local | Boolean | `false` |
| DestroyCallback | local | Object | `null` |
| ImageURL | input | Text | `""` |
| In_ImageSize | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LazyImageSizeRec())` |
| FallbackOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec())` |
| FallbackPadding | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SpacingOptionsRec())` |
| In_BorderOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ImageBorderOptionsRec())` |
| HasErrorMessage | input | Boolean | `false` |
| ExtendedClass | input | Text | `""` |
- Lifecycle handlers: Initialize, Ready, Destroy, ParametersChanged
- Client actions / event handlers: `actionDefineHasImage`, `onParametersChanged`, `onLoad`, `onReady`, `onError`, `onInitialize`, `onDestroy`
- JavaScript nodes: `UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$controller.OnReady.SetupOnLoadJS`, `UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$controller.OnInitialize.IsViewRestoredFromCacheJS`, `UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$controller.OnDestroy.JavaScript1JS`
- Static entities / flags: `uBT_FontWeight.semiBold`, `uBT_Color.neutral7`, `uBT_FontSize.small`, `uBT_FontWeight.regular`, `uBT_Size.base`
- Candidate static strings: `OnLoad` | `OnError`

## `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MainContainerClass | local | Text | `"ubt-custom-container"` |
| ExtendedClasses | input | Text | `""` |
| Options | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ContainerOptionsRec())` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onReady`, `onParametersChanged`, `clicked`

## `Connect2_LegacyShared.Share_UI.ProfileList.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Response | output | Record | `OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SearchResultRec())` |
| Label | output | Text | `""` |
| ShareProfiles | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.ShareProfileList())` |
| SearchFilter | local | Text | `""` |
| SharedProfileIds | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList())` |
| MaxRecords | local | Integer | `50` |
| HasSearched | local | Boolean | `false` |
| NoResultsFoundMessage | local | Text | `""` |
| ShareObjectId | input | Text | `""` |
| ShareObjectTypeId | input | Text | `""` |
| GetAvailableUsers | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetAvailableUsersDataActRec())` |
- Data actions: `DataActionGetAvailableUsers` → `screenservices/Connect2_LegacyShared/Share_UI/ProfileList/DataActionGetAvailableUsers`
- Server actions: `ShareObject` → `screenservices/Connect2_LegacyShared/Share_UI/ProfileList/ActionShareObject`
- Client actions / event handlers: `deferredHandleShareObjectList`, `input_SearchFilterOnChange`, `searchProfile`, `onClick`, `getAvailableUsersOnAfterFetch`, `input_SearchFilterOnKeyup`, `share`, `subscriptionDenied`
- JavaScript nodes: `Connect2_LegacyShared.Share_UI.ProfileList.mvc$controller.OnClick.DeferHandleShareJS`, `Connect2_LegacyShared.Share_UI.ProfileList.mvc$controller.Input_SearchFilterOnKeyup.JavaScript1JS`
- Feedback messages: `shareObjectVar.value.messageOut, /*Error*/ 3)`
- Static entities / flags: `resultListType.household`
- Candidate static strings: `DeferredHandleShareObjectList` | `SearchProfile`

## `OutSystemsUI_2_23.Interaction.InputWithIcon.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| AlignIconRight | input | Boolean | `false` |
| ExtendedClass | input | Text | `""` |

## `Connect2_LegacyShared.Directory.HighlightSearch.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Text | input | Text | `""` |
| SearchTerms | input | Text | `""` |
| StopWords | input | Text | `""` |
| isWordbound | input | Boolean | `false` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onReady`
- JavaScript nodes: `Connect2_LegacyShared.Directory.HighlightSearch.mvc$controller.OnReady.HighlightJS`

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

# Part 2: sources of blocks NOT rendered in the captured states

These come from referenced blocks or from earlier captures. Use them to describe other states/branches (empty, error, alternative versions), marking them as not visually captured.


## Captured calls
- 1. `ActionAppManager_SynchAppContext` (200) at 3160 ms
- 2. `ActionGetUserInformation` (200) at 3211 ms
- 3. `ScreenDataSetGetShareObjectTypeById` (200) at 4826 ms
- 4. `DataActionGetAvailableUsers` (200) at 4870 ms
- 5. `ServiceAPIGetHouseholdDetails` (200) at 4872 ms
- 6. `ActionGetSignedImagesInBulk` (200) at 5004 ms
- 7. `ActionAppManager_AfterInitialize` (200) at 5408 ms
- 8. `ActionSync_Info_GetMain` (200) at 5949 ms
- 9. `ActionGetNumberUnreadMessages` (200) at 6224 ms
- 10. `ServiceAPIFetchData_CacheableHouseholds` (200) at 7301 ms
- 11. `ServiceAPIFetchData_CacheableMapEntities` (200) at 7387 ms

## Not yet captured (see coverage.md)
- `App_Common.UnsupportedVersion_Wrapper`
- `App_Policies.Policy_Checker`
- `BasePatterns.Columns_Two`
- `BasePatterns.CustomText`
- `CacheControl.CacheControl_Policies`
- `ConnectPatterns.AvatarImage`
- `ConnectPatterns.Icon`
- `Fingerprint.FingerprintScanner`
- `NavigationHandler.PreventBackNavigation`
- `PIN.PinCode`
- `Private.PullToRefresh`
- `Share_UI.ListBlankSlate`

