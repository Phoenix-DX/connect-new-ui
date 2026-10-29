# Digest: LDM_MyEvents_V2

- Path: `/UBTConnect/LDM_MyEvents_V2`
- Viewport at capture: {'width': 390, 'height': 844, 'dpr': 1}
- body class: `phone portrait connect-theme osx is-ltr`; body style: `--header-size-content: 0px; --footer-height: 56px; --viewport-height: 844px;`
- PWA: manifest `/UBTConnect/moduleservices/pwa/manifest`, service workers []
- Screen file: `UBTConnect.Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2.mvc.js`

## Rendered block tree
```
LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2
  Layout.Layout
    LayoutRuntime_NavigationHandler.LayoutRuntime_Top
    Layout.BaseLayout_UpdatedOSUI
      Layout.MenuIcon__UpdatedOSUI
      LDM_Blocks_V2.MyEvents_MyTimelineFilterButton
      LDM_Blocks_V2.MyTimeline_V2
        LDM_Blocks.EventDetail_SubSection
          LDM_Blocks_V2.EventCard_V2
            LDM_Blocks.EventCard_Box
              LDM_Blocks_V2.EventCard_Info_V2
              LDM_Blocks.EventCard_Guests
                Widgets.OverlappingImages
          LDM_Blocks_V2.EventCard_V2
            LDM_Blocks.EventCard_Box
              LDM_Blocks_V2.EventCard_Info_V2
              LDM_Blocks.EventCard_Guests
                Widgets.OverlappingImages
          LDM_Blocks_V2.EventCard_V2
            LDM_Blocks.EventCard_Box
              LDM_Blocks_V2.EventCard_Info_V2
              LDM_Blocks.EventCard_Guests
                Widgets.OverlappingImages
      CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy
        CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction
          ConfirmationDialogs.ActionConfirmationDialog
      CW_CTA_PopUps.ContactPopup_ByPhone
        CW_CTA_PopUps.ContactPopup
      CW_CTA_PopUps.ContactByMessage_Wrapper
        CW_CTA_PopUps.ContactPopup_ByMessage
          CW_CTA_PopUps.ContactPopup
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
```

# Part 1: screen and rendered blocks (spec these in detail)

## `UBTConnect.Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2.mvc.js`
- Client actions / event handlers: `handler_NavigateTo_ContactByEmail`, `handler_NavigateTo_EventDetail`, `screenBlock_MyEventsNavigateToMyCalendar`, `handler_NavigateTo_HouseholdCarousel`
- Navigation: `/UBTConnect/ContactByEmailMember`(In_AvatarURL, In_ContactCountry, In_IsHousehold, In_HouseholdHeaderName, In_ContactName, In_ContactLocality, In_ContactSurname, In_EmailTo); `/UBTConnect/LDM_EventDetail_V2`(EventId, EventHostId); `/UBTConnect/MyEntertaining`(MyCalendarEventSourceId); `/UBTConnect/HouseholdCarousel`(In_StartingHouseholdId); `/UBTConnect/HouseholdDetails`(HouseholdId)
- Static entities / flags: `type_MyCalendarEventSource.lDM`

## `Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Out_PastEvents | output | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.TimelineEventGroup_V2List())` |
| Out_UpcomingEvents | output | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventCalendar_V2List())` |
| Out_CalendarEvents | output | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventCalendar_V2List())` |
| CurrentEventView | local | Integer | `Connect2_OrbitMobile_MUIModel.staticEntities.eventView.myTimeline` |
| CurrentCalendarDate | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.CurrentCalendarDateRec())` |
| CalendarEvents | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventList())` |
| PastEventsData | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.TimelineEventGroup_V2List())` |
| UpcomingEventsData | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventCalendar_V2List())` |
| EventFilters | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.EventCalendarFiltersRec())` |
| PastEventFilters | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec())` |
| IsFetchingEvents | local | Boolean | `false` |
| IsFetchingMyTimeline | local | Boolean | `false` |
| IsWeekMonthCalendarExpanded | local | Boolean | `false` |
| DefaultDateRangeInMonths | local | Integer | `24` |
| IsFiltering | local | Boolean | `false` |
| ScrollAmountInPx | local | Integer | `0` |
| ScrollEventCallback | local | Object | `null` |
| ContactByPhoneData | local | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactByPhonePopupDataRec())` |
| ContactByMessagePopupData | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.UI_ContactByMessage_WrapperDataTextRecord())` |
| GetEventsForMyTimeline | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetEventsForMyTimelineDataActRec())` |
| GetEventsForCalendar | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetEventsForCalendarDataActRec())` |
- Data actions: `DataActionGetEventsForMyTimeline` → `screenservices/Connect2_OrbitMobile_MUI/LDM_ScreenBlocks_V2/ScreenBlock_MyEvents_V2/DataActionGetEventsForMyTimeline`, `DataActionGetEventsForCalendar` → `screenservices/Connect2_OrbitMobile_MUI/LDM_ScreenBlocks_V2/ScreenBlock_MyEvents_V2/DataActionGetEventsForCalendar`
- Lifecycle handlers: Initialize, Ready, Destroy
- Client actions / event handlers: `onHandle_ContactByMessage_ClickedEmail`, `onHandle_ContactByMessage_Cancel`, `onHandle_ContactByMessage`, `checkDateBoundaries`, `onDestroy`, `getMyTimelineData`, `onHandle_DateClicked`, `onScrollEnding_MyTimeline`, `onHandle_EventClicked`, `onInitialize`, `setScrollAmount`, `onHandle_ResetFilters`, `onHandle_HouseholdClicked`, `getEventCalendarData`, `onReady`, `onHandle_ContactByPhonePopupEvent_Cancel`, `onAfterFetch_GetEventsForMyTimeline`, `onHandle_ExpandToggled`, `onHandle_SwipeUp`, `onHandle_ContactByPhonePopupEvent_Call`, `logClickedEventAudit`, `onClick_Calendar`, `setViewContainerHeight`, `onAfterFetch_GetEventsForCalendar`, `onHandle_PhoneCall`, `incrementMyTimelineDates`, `onHandle_MyTimelineFilter`, `navigateTo_ContactByEmail`, `navigateToMyCalendar`, `navigateTo_EventDetail`, `navigateTo_HouseholdCarousel`
- JavaScript nodes: `Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.OnDestroy.ExecuteScrollCallbackJS`, `Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS`, `Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.SetScrollAmount.GetScrollTopJS`, `Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS`, `Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.OnAfterFetch_GetEventsForMyTimeline.ScrollToTopJS`, `Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.SetViewContainerHeight.SetViewContainerHeightJS`
- Feedback messages: `"Phone number is not available", /*Info*/ 0)`
- Exceptions handled: NotRegisteredException, UserException
- Static entities / flags: `eventView.myTimeline`, `menuAction.auto`, `eventView.agenda`, `eventView.day`, `eventView.month`, `applicationEvents_LDM.requestAPI_CalendarEvents`, `applicationEvents_LDM.calendarDateChanged`, `applicationEvents_LDM.calendarEventClicked`, `applicationEvents_LDM.myTimelineEventClicked`, `applicationEvents_LDM.myTimelineClearFilter`, `applicationEvents_LDM.myTimelineHouseholdClicked`, `eventCategory.lDM`, `applicationEvents_LDM.myTimelineApplyFilter`

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

## `Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| EventLocalities | output | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventLocalitiesFilterList())` |
| IsShowFilters | local | Boolean | `false` |
| HasLocalityData | local | Boolean | `false` |
| SelectedFilters | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec())` |
| In_HasLoaded | input | Boolean | `false` |
| In_DefaultDateRangeInMonths | input | Integer | `24` |
| In_IsShowing | input | Boolean | `false` |
| GetEventLocalitiesForFilter | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetEventLocalitiesForFilterDataActRec())` |
- Data actions: `DataActionGetEventLocalitiesForFilter` → `screenservices/Connect2_OrbitMobile_MUI/LDM_Blocks_V2/MyEvents_MyTimelineFilterButton/DataActionGetEventLocalitiesForFilter`
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `searchFiltersComponentDidUpdate`, `onHandle_ResetFilters`, `onHandle_Filter`, `onReady`, `onParametersChanged`, `toggleEventFilters`, `onHandle_Close`, `getEventLocalitiesData`, `filter`, `resetFilters`
- Static entities / flags: `applicationEvents_LDM.requestAPI_EventLocalities`

## `Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyTimeline_V2.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_PastEventsData | input | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.TimelineEventGroup_V2List())` |
| In_UpcomingEventsData | input | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventCalendar_V2List())` |
| In_IsFetchingMyTimeline | input | Boolean | `false` |
| In_HasFetchError | input | Boolean | `false` |
| In_IsFiltering | input | Boolean | `false` |
- Client actions / event handlers: `swipeEventSwipeUp`, `list_MyTimelineOnScrollEnding`, `callPhone`, `tryAgain`, `onClick_Message`, `eventClicked`, `onClick_PhoneCall`, `scrollEnding`, `householdClicked`, `eventsSwipeUp`

## `Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_SubSection.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_Title | input | Text | `""` |
| In_HasBottomBorder | input | Boolean | `false` |

## `Connect2_OrbitMobile_MUI.LDM_Blocks_V2.EventCard_V2.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_Event | input | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.EventCalendar_V2Rec())` |
| In_IsExpandable | input | Boolean | `false` |
| In_RightToLeft | input | Boolean | `false` |
- Client actions / event handlers: `eventClicked`, `householdClicked`, `onClick_Message`, `onClick_PhoneCall`, `callPhoneEventCard`
- Static entities / flags: `eventCategory.lDM`

## `Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Box.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| EventColor | local | Text | `""` |
| In_EventType | input | Integer | `0` |
- Lifecycle handlers: Initialize
- Client actions / event handlers: `onInitialize`, `click_Card`
- Static entities / flags: `eventCategory.lDM`, `eventCategory.orbit`

## `Connect2_OrbitMobile_MUI.LDM_Blocks_V2.EventCard_Info_V2.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_Event | input | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.EventCalendar_V2Rec())` |
- Client actions / event handlers: `onClick_CardInfo`, `cardClicked`
- Images: `img/Connect2_OrbitMobile_MUI.LDM_Logo.svg`, `img/Connect2_OrbitMobile_MUI.event_clock.svg`, `img/Connect2_OrbitMobile_MUI.event_host_24px.svg`

## `Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Guests.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| IsExpanded | local | Boolean | `false` |
| Guests | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.CalendarGuestItemList())` |
| In_GuestCount | input | Text | `""` |
| In_Guests | input | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.CalendarGuestItemList())` |
| In_IsExpandable | input | Boolean | `false` |
| In_RightToLeft | input | Boolean | `false` |
- Lifecycle handlers: Initialize
- Client actions / event handlers: `onHandle_Person_Contact_OptionsCallClicked`, `toggleGuestList`, `onInitialize`, `onHandle_HouseholdClicked`, `onHandle_ClickedEmail`, `onClick_PhoneCall`, `householdClicked`, `onClick_Message`
- JavaScript nodes: `Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Guests.mvc$controller.OnHandle_ClickedEmail.GetLocalityNameJS`
- Feedback messages: `"Please check your network connection and try again", /*Info*/ 0)`
- Images: `img/Connect2_OrbitMobile_MUI.event_people_24px.svg`

## `Connect2_LegacyShared.Widgets.OverlappingImages.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| ImageURLs | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList())` |
| RemainingCount | local | Integer | `0` |
| In_ImageURLs | input | RecordList | `OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList())` |
| In_MaxDisplayImage | input | Integer | `5` |
| In_Diameter | input | Text | `"30px"` |
| In_OverlapPercent | input | Integer | `30` |
| In_ShowRemainingCount | input | Boolean | `false` |
| In_RemainingCountFontSize | input | Integer | `12` |
| In_IsRTL | input | Boolean | `false` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onReady`, `onParametersChanged`

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

## `UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| IsWhatsAppAvailable | local | Boolean | `false` |
| IsSignalAvailable | local | Boolean | `false` |
| SignalBaseURI | local | Text | `"sgnl://signal.me/#p/"` |
| WhatsAppBaseURI | local | Text | `"whatsapp://send?phone="` |
| ExternalAppPackageName | local | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ExternalAppPackageNameRec())` |
| In_ContactPopupData | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.UI_ContactByMessage_WrapperDataRec())` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `screenEvent_OnReady`, `handler_SelectedMessageChannel`, `action_OpenMessagingApp`, `handler_Cancel`, `event_Email`, `event_MessageChannel`, `event_Call`, `event_Cancel`
- Static entities / flags: `type_MessageChannel.email`, `type_MessageChannel.whatsApp`, `type_MessageChannel.signal`, `type_MessageChannel.call`

## `UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| ContactPopupButtons | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupButtonTextRecordList())` |
| In_ContactByMessageData | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactByMessagePopupDataRec())` |
| In_ImageSizeId | input | Text | `UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.extraLarge_100` |
- Lifecycle handlers: Initialize, ParametersChanged
- Client actions / event handlers: `action_SetContactPopupButtons`, `onParametersChanged`, `onInitialize`, `onClick_MessageButton`, `event_Cancel`, `event_SelectedMessageChannel`
- Static entities / flags: `uBT_ImageSize.extraLarge_100`, `type_MessageChannel.email`, `uBT_Icons.mailFill`, `type_MessageChannel.whatsApp`, `uBT_Icons.whatsapp`, `type_MessageChannel.signal`, `uBT_Icons.signal`, `type_MessageChannel.call`, `uBT_Icons.callFill`

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
- 1. `ActionAppManager_SynchAppContext` (200) at 2792 ms
- 2. `DataActionGetEventsForMyTimeline` (200) at 4124 ms
- 3. `DataActionGetEventLocalitiesForFilter` (200) at 4125 ms
- 4. `DataActionGetEventLocalitiesForFilter` (200) at 4418 ms
- 5. `ActionAppManager_AfterInitialize` (200) at 5445 ms
- 6. `ActionSync_Info_GetMain` (200) at 5969 ms
- 7. `ActionGetUserInformation` (200) at 6317 ms
- 8. `ActionGetNumberUnreadMessages` (200) at 6597 ms
- 9. `ServiceAPIFetchData_CacheableMapEntities` (200) at 9040 ms
- 10. `ServiceAPIFetchData_CacheableHouseholds` (200) at 11414 ms

## Not yet captured (see coverage.md)
- `App_Common.UnsupportedVersion_Wrapper`
- `App_Policies.Policy_Checker`
- `BasePatterns.Columns_Two`
- `BasePatterns.CustomContainer`
- `CW_Image.UBT_LazyImage`
- `CacheControl.CacheControl_Policies`
- `Calendars.DayCalendar`
- `Calendars.EventCalendarWeekMonth`
- `Calendars.MonthCalendar`
- `ConnectPatterns.Button`
- `ConnectPatterns.HighlightSearch`
- `ConnectPatterns.IconSVG`
- `ConnectPatterns.IconText`
- `ConnectPatterns.LazyImage`
- `Fingerprint.FingerprintScanner`
- `LDM_Blocks.MonthYearSelector`
- `LDM_Blocks.MyTimeline_Filters`
- `LDM_Blocks.WeekDataDisplay`
- `LDM_Blocks_V2.Agenda_V2`
- `NavigationHandler.PreventBackNavigation`
- `PIN.PinCode`
- `Private.PullToRefresh`
- `Reusable.Person_Contact_Options`
- `Utilities.SwipeEvents`
- `Utility.Result_Item_Image`
- `UtilityFlow.ErrorScreen`
- `Widgets.NetworkWarning`

