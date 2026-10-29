# Digest: MessageDetail

- Path: `/UBTConnect/MessageDetail`
- Viewport at capture: {'width': 390, 'height': 844, 'dpr': 1}
- body class: `phone portrait connect-theme osx is-ltr`; body style: `--header-size-content: 0px; --footer-height: 46.875px; --viewport-height: 844px;`
- PWA: manifest `/UBTConnect/moduleservices/pwa/manifest`, service workers []
- Screen file: `UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.mvc.js`

## Rendered block tree
```
MyNotifications.ScreenBlock_MessageDetail
  Layout.Layout
    LayoutRuntime_NavigationHandler.LayoutRuntime_Top
    Layout.BaseLayout_UpdatedOSUI
      Layout.MenuIcon_Back
      Widgets.NotificationDetailBlock
        Content.Card
          HtmlSanitizer.SanitizedHtml
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
      NavigationHandler.BackNavigationHandler
```

# Part 1: screen and rendered blocks (spec these in detail)

## `UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| FeedItemId | local | Text | `""` |
| MessageInstanceId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| isOriginPushNotification | input | Boolean | `false` |
| MessageTemplateId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| HardwareId | input | Text | `""` |
- Client actions / event handlers: `handler_AddAuditAndNavigateTo_EventEmail`, `handler_NavigateTo_Login`, `handler_NavigateTo_AssembleDetail`, `handler_NavigateTo_OrbitEventDetails`, `handler_NavigateTo_MessageList`, `handler_SetFeedItemId`, `handler_NavigateTo_OrbitMilestone`, `handler_NavigateTo_OrbitHostSurvey`, `handler_NavigateTo_ShareObjectDetail`, `handler_AddAuditAndNavigateTo_EventDetail`, `handler_BackNavigationHandlerBackNavigation`, `handler_SubscriptionDenied`
- Navigation: `/UBTConnect/LDM_Email_V2`(In_EventId, EventHostId, In_IsContactOrganiser, In_IsMessageGuest); `/UBTConnect/LDM_Email`(In_EventId, In_IsMessageGuest, EventHostId, In_IsContactOrganiser); `/UBTConnect/Login`(); `/UBTConnect/AssembleDetail`(EventId, SeriesId, AssembleEventTypeTile); `/UBTConnect/EventDetail`(In_EventId, In_EventName, In_FromNotification, In_MemberId); `/UBTConnect/Notifications`(); `/UBTConnect/MessageList`(); `/UBTConnect/MilestoneDetail`(In_EventName, In_FromNotification, In_MilestoneId, In_EventId); `/UBTConnect/HostSurvey`(In_MemberId, In_EventId, In_EventStartDate, In_EventEndDate, In_EventName); `/UBTConnect/HouseholdDetails`(HouseholdId); `/UBTConnect/OneSchoolGlobalDetails`(In_OneSchoolGlobalId); `/UBTConnect/SupperMeeting_Details`(In_SubdivsionId); `/UBTConnect/FeedItemDetail`(FeedItemId); `/UBTConnect/LDM_EventDetail_V2`(EventId, EventHostId); `/UBTConnect/LDM_EventDetail`(EventHostId, EventId); `/UBTConnect/HomeFeed`()
- JavaScript nodes: `UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.mvc$controller.Handler_BackNavigationHandlerBackNavigation.CheckIfInvalidLocationJS`
- Static entities / flags: `applicationEvents_LDM.notificationContactOrganiser`, `type_ShareObject.household`, `type_ShareObject.update`, `type_ShareObject.myHousehold`, `type_ShareObject.oneSchoolGlobal`, `type_ShareObject.supperMeeting`, `type_ShareObject.feed`, `applicationEvents_LDM.notificationViewEvent`

## `Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Message | output | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.MessagePriorityMessageContentMessageTemplateMessageSen` |
| IsRetracted | output | Boolean | `false` |
| IsCleared | output | Boolean | `false` |
| PlaceholderDelimiters | output | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.Delimiter_FunctionDelimiter_ParameterDelimiter_Placeho` |
| IsEntryScreen | local | Boolean | `false` |
| IsLoading | local | Boolean | `true` |
| ShowAssembleAction | local | Boolean | `false` |
| MessageInstanceId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| MessageTemplateId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| HardwareId | input | Text | `""` |
| isOriginPushNotification | input | Boolean | `false` |
| GetMessageTemplateParametersByMessageTemplateId | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetMessageTemplateParametersByMessageTemplateIdAggrRec())` |
| GetMessageInstance | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetMessageInstanceDataActRec())` |
- Data actions: `DataActionGetMessageInstance` → `screenservices/Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageDetail/DataActionGetMessageInstance`
- Aggregates: `ScreenDataSetGetMessageTemplateParametersByMessageTemplateId` → `screenservices/Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageDetail/ScreenDataSetGetMessageTemplateParametersByMessageTemplateId`
- Server actions: `Wrapper_NotificationOpened` → `screenservices/Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageDetail/ActionWrapper_NotificationOpened`, `Get_OrbitHostSurveyNotificationParameters` → `screenservices/Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageDetail/ActionGet_OrbitHostSurveyNotificationParameters`, `Get_OrbitNotificationParameters` → `screenservices/Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageDetail/ActionGet_OrbitNotificationParameters`, `StoreAdaptiveCardResponses` → `screenservices/Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageDetail/ActionStoreAdaptiveCardResponses`
- Lifecycle handlers: Initialize, Ready
- Client actions / event handlers: `getMessageTemplateParametersOnAfterFetch`, `getMessageInstanceByIdOnAfterFetch`, `onClick_ViewOrbitEvent`, `messageRetractedFlow`, `onClick_ViewAssembleEvent`, `onInitialize`, `onReady`, `adaptiveCardViewerOnExecuteAction`, `navigateTo_OrbitHostSurvey`, `navigateTo_OrbitMilestone`, `setFeedItemId`, `navigateTo_MessageList`, `subscriptionDenied`, `navigateTo_OrbitEvent`, `addAuditAndNavigateTo_EventEmail`, `navigateTo_Login`, `addAuditAndNavigateTo_EventDetail`, `navigateTo_AssembleEvent`, `navigateTo_ObjectDetail`
- JavaScript nodes: `Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc$controller.GetMessageInstanceByIdOnAfterFetch.WasCurrentViewRestoredFromCacheJS`, `Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc$controller.AdaptiveCardViewerOnExecuteAction.SubstringJS`
- Feedback messages: `"You don\'t have access to Orbit Host Survey. Please contact the Orbit Helpdesk if you have any questions.", /*Error*/ 3)` | `"You don\'t have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", /*Error*/ 3)` | `"You don\'t have access to Assemble.", /*Error*/ 3)` | `"Invalid message detail id.", /*Error*/ 3)` | `"Event is not accessible", /*Info*/ 0)` | `"Thanks for filling out our form!", /*Info*/ 0)` | `"Please check your internet connection!", /*Info*/ 0)`
- Exceptions handled: CommunicationException
- Static entities / flags: `messageSenderTarget.lordsDayMeal`, `messageSenderTarget.orbit`, `messageSenderTarget.orbitHostSurvey`, `messageInfoType.sharing`, `messagePriority.urgent`, `messageSenderTarget.assemble`, `adaptiveCardsConfig.events`, `parameterName.assembleEventParentId`, `parameterName.assembleEventInstanceId`, `uBT_MessageType.error`, `messageType.private`, `messageInfoType.whatsNew`, `connect_Entity.member`, `imageSize.small`, `parameterName.assembleEventType`
- Candidate static strings: `View Meeting`

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

## `Connect2_LegacyShared.Widgets.NotificationDetailBlock.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Title | input | Text | `""` |
| ProfileIconURL | input | Text | `""` |
| Summary | input | Text | `""` |
| IsUrgent | input | Boolean | `false` |
| isAdaptiveCard | input | Boolean | `false` |
| AdaptiveCardContent | input | Text | `""` |
| MessageContent | input | Text | `""` |
| DateTimeCreated | input | DateTime | `OS.DataTypes.DateTime.defaultValue` |
| HostConfig | input | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HostConfigRec())` |
| ShowDetailsPlaceholder | input | Boolean | `false` |
| ForceNoIconBorder | input | Boolean | `false` |
| HasActionButton | input | Boolean | `false` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `adaptiveCardViewerOnExecuteAction`, `onReady`, `adaptiveCardEventExecuted`
- JavaScript nodes: `Connect2_LegacyShared.Widgets.NotificationDetailBlock.mvc$controller.OnReady.OpenLinksInSystemBrowserJS`
- Feedback messages: `"Please check your internet connection!", /*Info*/ 0)`
- Exceptions handled: CommunicationException
- Images: `img/Connect2_LegacyShared.User_rectangle.png`

## `OutSystemsUI_2_23.Content.Card.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| UsePadding | input | Boolean | `true` |
| ExtendedClass | input | Text | `""` |

## `ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Value | input | Text | `""` |
| ResetWhitelist | input | Boolean | `false` |
| AllowedAttributes | input | Text | `""` |
| DisallowedAttributes | input | Text | `""` |
| AllowedTags | input | Text | `""` |
| DisallowedTags | input | Text | `""` |
| AllowedCssStyles | input | Text | `""` |
| DisallowedCssStyles | input | Text | `""` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onParametersChanged`, `onReady`
- JavaScript nodes: `ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$controller.OnReady.PutHtmlInDomJS`, `ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$controller.OnReady.HtmlSanitizer_setDefaultsJS`

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

# Part 2: sources of blocks NOT rendered in the captured states

These come from referenced blocks or from earlier captures. Use them to describe other states/branches (empty, error, alternative versions), marking them as not visually captured.


## Captured calls
- 1. `ActionAppManager_SynchAppContext` (200) at 3500 ms
- 2. `DataActionGetMessageInstance` (200) at 4571 ms
- 3. `ActionGetSignedImagesInBulk` (200) at 4875 ms
- 4. `ActionAppManager_AfterInitialize` (200) at 6654 ms
- 5. `ActionSync_Info_GetMain` (200) at 7187 ms
- 6. `ActionGetUserInformation` (200) at 7515 ms
- 7. `ActionGetNumberUnreadMessages` (200) at 7771 ms
- 8. `ServiceAPIFetchData_CacheableMapEntities` (200) at 10404 ms
- 9. `ServiceAPIFetchData_CacheableHouseholds` (200) at 13190 ms

## Not yet captured (see coverage.md)
- `App_Common.UnsupportedVersion_Wrapper`
- `App_Policies.Policy_Checker`
- `BasePatterns.Columns_Two`
- `BasePatterns.CustomContainer`
- `CacheControl.CacheControl_Policies`
- `ConnectPatterns.HighlightSearch`
- `ConnectPatterns.IconSVG`
- `Fingerprint.FingerprintScanner`
- `Home.Feed_Embeded`
- `NavigationHandler.PreventBackNavigation`
- `PIN.PinCode`
- `Private.PullToRefresh`
- `Reusable.Spinner`
- `Share_UI.ShareObjectDetail`
- `Share_UI.ShareObjectDetail_ExtendedShare`
- `Widgets.AdaptiveCardViewer`

