# Digest: EventDetail

- Path: `/UBTConnect/EventDetail`
- Viewport at capture: {'width': 390, 'height': 844, 'dpr': 1}
- body class: `phone portrait orbit-theme osx is-ltr`; body style: `--header-size-content: 0px; --footer-height: 0px; --viewport-height: 844px;`
- PWA: manifest `/UBTConnect/moduleservices/pwa/manifest`, service workers []
- Screen file: `UBTConnect.Legacy_OrbitEventsFlow.EventDetail.mvc.js`

## Rendered block tree
```
Orbit_ScreenBlocks.ScreenBlock_EventDetail
  Layout_OrbitTheme.Layout_Orbit
    LayoutRuntime_NavigationHandler.LayoutRuntime_Top
    Layout.BaseLayout_UpdatedOSUI
      Layout.MenuIcon__UpdatedOSUI
      CW_Notes.ItemNotesSection
        BasePatterns.CustomContainer
          BasePatterns.CustomContainer
            ConnectCorePatterns.ItemCard_ActionBar
              BasePatterns.CustomContainer
                ConnectPatterns.IconText
                  BasePatterns.Columns_Two
                    Adaptive.Columns2
                      ConnectPatterns.Icon
                      BasePatterns.CustomText
                        ConnectPatterns.IconInline_Internal
          CW_Notes.NotesSheet
      Orbit_Blocks.HostSurvey_PillItem
      Orbit_Generic_Blocks.Accordion_Orbit
        Content.DEPRECATED_Accordion
          Content.DEPRECATED_AccordionItem
            Orbit_Blocks.HostAllocation_List
              Orbit_Blocks.HostAllocation_ListItem
              Orbit_Blocks.HostAllocation_ListItem
              Orbit_Blocks.HostAllocation_HelperItem
      Orbit_Blocks.EventDateSelection
        Orbit_Generic_Blocks.ListOfDaySelectors
          Orbit_Generic_Blocks.DaySelector
          Orbit_Generic_Blocks.DaySelector
          Orbit_Generic_Blocks.DaySelector
      Orbit_Blocks.Card_Milestone
        Orbit_Blocks.Card_Template
      Orbit_Blocks.Card_Milestone
        Orbit_Blocks.Card_Template
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
```

# Part 1: screen and rendered blocks (spec these in detail)

## `UBTConnect.Legacy_OrbitEventsFlow.EventDetail.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_MemberId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| In_EventId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| In_EventName | input | Text | `""` |
| In_FromNotification | input | Boolean | `false` |
- Client actions / event handlers: `onHandle_NavigateToGenerateQRCode`, `onHandle_ContactHelpdesk`, `onHandle_NavigateToViewDocuments`, `onHandle_NavigateTo_EventBooklet`, `onHandle_NavigateToMilestoneDetail`, `onHandle_NavigateToHelpers`, `onHandle_NavigateToTransportDetail`, `onHandle_NavigateToHostSurvey`
- Navigation: `/UBTConnect/QRCodeGenerate`(In_EventId, In_MemberId, In_EventName, In_EventStartDate, In_EventEndDate, In_EventLocation); `/UBTConnect/HomeFeed`(); `/UBTConnect/ContactByEmailOrbitHelpdesk`(In_MilestoneId, In_EventId, In_Subject, In_EventName); `/UBTConnect/ViewDocuments`(In_EventEndDate, In_MemberId, In_EventName, In_EventId, In_EventLocation, In_EventStartDate); `/UBTConnect/EventBooklet`(In_EventName, In_EventId); `/UBTConnect/MilestoneDetail`(In_OrbitMilestoneTypeId, In_FromNotification, In_HostId, In_EventId, In_MilestoneId, In_EventName, In_MilestoneName); `/UBTConnect/HelpersDetail`(In_EventId, In_EventName, In_HostId, In_OrbitMilestoneTypeId, In_MilestoneName); `/UBTConnect/TransportDetail`(In_HeaderClass, In_MilestoneName, In_MilestoneId, In_TargetMemberId, In_OrbitMilestoneTypeId); `/UBTConnect/HostSurvey`(In_MemberId, In_EventStartDate, In_EventId, In_EventName, In_EventEndDate)
- Static entities / flags: `orbitMilestoneType.helper`

## `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Response | output | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.GetEventDetailScreenRec())` |
| Response_DateFilters | output | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.DateFilterRec())` |
| IsNullResponse | output | Boolean | `false` |
| Response | output | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurveyRec())` |
| Response_HasQRCode | output | Boolean | `false` |
| Response_HasScanned | output | Boolean | `false` |
| Notes | output | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.NotesRec())` |
| Response_HasDocuments | output | Boolean | `false` |
| EventDetails | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.GetEventDetailScreenRec())` |
| DateFilters | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.DateFilterRec())` |
| IsFetchingData | local | Boolean | `false` |
| HostAllocation | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.Milestone_ScreenList())` |
| HasQRCode | local | Boolean | `false` |
| HasScanned | local | Boolean | `false` |
| HasDocuments | local | Boolean | `false` |
| IsEventUnavailable | local | Boolean | `false` |
| UserInformation | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LongIntegerLongIntegerLongIntegerRecord())` |
| EventNotes | local | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.NotesRec())` |
| In_MemberId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| In_EventId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| In_EventName | input | Text | `""` |
| In_FromNotification | input | Boolean | `false` |
| GetLocalSurveyStatusByJSONName | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetLocalSurveyStatusByJSONNameAggrRec())` |
| Get_EventDetails | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new Get_EventDetailsDataActRec())` |
| Get_HostSurveyStatus | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new Get_HostSurveyStatusDataActRec())` |
| Get_HasQRCode | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new Get_HasQRCodeDataActRec())` |
| FetchEventNotes | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new FetchEventNotesDataActRec())` |
| Get_HasDocuments | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new Get_HasDocumentsDataActRec())` |
- Data actions: `DataActionGet_EventDetails` → `screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_EventDetails`, `DataActionGet_HostSurveyStatus` → `screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HostSurveyStatus`, `DataActionGet_HasQRCode` → `screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HasQRCode`, `DataActionFetchEventNotes` → `screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionFetchEventNotes`, `DataActionGet_HasDocuments` → `screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HasDocuments`
- Lifecycle handlers: Ready
- Client actions / event handlers: `onAfterFetch_FetchEventNotes`, `handler_OnNoteDeleted`, `onAfterFetch_GetLocalSurveyStatus`, `onClick_GenerateQRCode`, `onReady`, `onAfterFetch_Get_HasQRCode`, `onHandle_HostAllocationView`, `onClick_NavigateToHostSurvey`, `onHandle_ClickedMilestone`, `onHandle_ViewHelpers`, `onClick_OpenDocuments`, `onClick_ViewEventBooklet`, `handler_OnNotesChanged`, `onHandle_ContactHelpdesk`, `onAfterFetch_Get_EventDetails`, `onAfterFetch_GetHasDocuments`, `onAfterFetch_Get_HostSurveyStatus`, `onHandle_ClickedDate`, `navigateTo_GenerateQRCode`, `navigateTo_HostSurvey`, `navigateTo_ContactHelpdesk`, `navigateTo_EventBooklet`, `navigateTo_MilestoneDetail`, `navigateTo_TransportDetail`, `navigateTo_Helpers`, `navigateTo_ViewDocuments`
- JavaScript nodes: `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS`
- Feedback messages: `"Only Householder is able to edit the survey.", /*Error*/ 3)` | `"You don\'t have access to this feature. Please contact your event organiser for more information.", /*Info*/ 0)`
- Static entities / flags: `menuAction.auto`, `orbitEventType.eventHost`, `orbitEventType.eventAdmin`, `surveyStatus.sent`, `surveyStatus.confirmed`, `orbitSkeletonLoading.eventDetail`, `orbitMilestoneType.mealGuest`, `orbitMilestoneType.mealHost`, `orbitMilestoneType.accommodationGuest`, `orbitMilestoneType.accommodationHost`, `orbitMilestoneType.mealHelper`, `orbitMilestoneType.accommodationHelper`, `milestoneTimeType.dAY`, `milestoneTimeType.bEFORE`, `milestoneTimeType.aFTER`

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

## `UBTConnect_Utils.CW_Notes.ItemNotesSection.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| IsAddNote | local | Boolean | `false` |
| ShareContactData | local | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupDataRec())` |
| ShareObjectTypeId | local | Text | `""` |
| In_ItemId | input | Text | `""` |
| In_EntityType | input | Text | `""` |
| In_NoteCategoryId | input | Text | `""` |
| In_Notes | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.NotesRec())` |
| In_IsBookmarked | input | Boolean | `false` |
| In_ContactPopupData | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupDataRec())` |
| useViewDetails | input | Boolean | `false` |
| ActionBarOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ActionBarOptionsRec())` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `handler_OnNoteDeleted`, `handler_OnSharedCancel`, `handler_OnNoteSheetClosed`, `handler_OnShareToOthers`, `handler_OnSaveEditNote`, `handler_OnShowAllNotesRequested`, `handler_OnAddNoteClicked`, `onReady`, `handler_OnShareClicked`, `handler_OnSheetNotesChanged`, `on_UnbookmarkClicked`, `on_BookmarkClicked`, `on_NoteDeleted`, `on_NotesChanged`
- JavaScript nodes: `UBTConnect_Utils.CW_Notes.ItemNotesSection.mvc$controller.OnReady.CheckRestoredJS`
- Static entities / flags: `uBT_Size.small`, `uBT_Color.neutral2`

## `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MainContainerClass | local | Text | `"ubt-custom-container"` |
| ExtendedClasses | input | Text | `""` |
| Options | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ContainerOptionsRec())` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onReady`, `onParametersChanged`, `clicked`

## `UBTConnectLibrary.ConnectCorePatterns.ItemCard_ActionBar.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MainContainerClass | local | Text | `"ubt-action-bar"` |
| ActionBarOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ActionBarOptionsRec())` |
- Client actions / event handlers: `onClickAddNote`, `onClickUnbookmark`, `onClickShare`
- Static entities / flags: `uBT_Display.flex`, `uBT_JustifyContent.flexStart`, `uBT_Size.extraSmall`, `uBT_Color.primary`, `uBT_FontSize.doubleExtraSmall`, `uBT_FontWeight.semiBold`, `uBT_Icons.check`, `uBT_IconSize.nonStandard_18`, `uBT_Color.neutral7`, `uBT_Icons.borderColor`, `uBT_Icons.share`

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

## `UBTConnect_Utils.CW_Notes.NotesSheet.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| BottomSheetId | local | Text | `""` |
| IsEditing | local | Boolean | `false` |
| IsSheetOpen | local | Boolean | `false` |
| NoteText | local | Text | `""` |
| IsSubmittingNote | local | Boolean | `false` |
| In_IsOpen | input | Boolean | `false` |
| ExtendedClasses | input | Text | `""` |
| In_ItemId | input | Text | `""` |
| In_NoteCategoryId | input | Text | `""` |
| In_Notes | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.NotesRec())` |
- Server actions: `AddNote` → `screenservices/UBTConnect_Utils/CW_Notes/NotesSheet/ServiceAPIAddNote`
- Lifecycle handlers: ParametersChanged
- Client actions / event handlers: `handler_OnSubmitNote`, `backNavigationHandlerBackNavigation`, `bottomSheetOnToggle`, `bottomSheet_Initialized`, `onParametersChanged`, `handler_OnEditingStateChanged`, `handler_OnSaveEditNote`, `action_SetBottomSheetOpen`, `handler_OnNoteSheet_Closed`, `on_NotesChanged`, `on_NoteSheet_Closed`, `on_NoteDeleted`
- JavaScript nodes: `UBTConnect_Utils.CW_Notes.NotesSheet.mvc$controller.OnParametersChanged.DelaySetIsOpenJS`
- Exceptions handled: CommunicationException, UserException
- Static entities / flags: `noteActionType.add`
- Candidate static strings: `Action_SetBottomSheetOpen`

## `Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_IsDisabled | input | Boolean | `false` |
| In_IconClass | input | Text | `""` |
| In_PillText | input | Text | `""` |
| In_IsSmallIcon | input | Boolean | `false` |
| In_ExtendedClass | input | Text | `""` |
| In_ExtendedStyle | input | Text | `""` |

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

## `Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_List.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_HostAllocationList | input | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.Milestone_ScreenList())` |
- Client actions / event handlers: `onClick_View`, `onClick_ViewHelpers`

## `Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_ListItem.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_HostAllocationItem | input | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.Milestone_ScreenRec())` |
- Client actions / event handlers: `onClick_View`

## `Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_HelperItem.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| ItemName | local | Text | `""` |
| GetLocalOrbitMilestoneTypeHelper | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetLocalOrbitMilestoneTypeHelperAggrRec())` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `onReady`, `onClick_ViewHelpers`
- Static entities / flags: `orbitMilestoneType.helper`

## `Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| TimeTypeEndFilter | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.TimeTypeFilterRec())` |
| DateList | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.DayFilterList())` |
| In_DateList | input | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.DateFilterRec())` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `onReady`, `onClick_Date`, `clickedDate`
- JavaScript nodes: `Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS`
- Static entities / flags: `milestoneTimeType.bEFORE`, `milestoneTimeType.aFTER`, `milestoneTimeType.dAY`

## `Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ListOfDaySelectors.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| DateList | input | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.DayFilterList())` |
| ShowInWeekday | input | Boolean | `false` |
| ReplaceSunday | input | Boolean | `false` |
| AddWeekdayBelow | input | Boolean | `false` |
- Client actions / event handlers: `clickedDate`
- Static entities / flags: `milestoneTimeType.dAY`, `timeFormat.day`

## `Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.DaySelector.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| IsSelected | input | Boolean | `false` |

## `Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MainColorVar | local | Text | `""` |
| In_MilestoneSummary | input | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.Milestone_ScreenRec())` |
| IsOverrideMainColorVar | input | Text | `""` |
| IsSetUpMeals | input | Boolean | `false` |
- Lifecycle handlers: Initialize
- Client actions / event handlers: `onHandle_ClickedMilestone`, `onClick_Button`, `onInitialize`, `clickedMilestone`
- Static entities / flags: `orbitColorShade.color2`, `orbitColorShade.color7`, `orbitMilestoneType.meetingGuest`, `orbitMilestoneType.meetingHost`, `orbitMilestoneType.mealAtHall`, `orbitMilestoneType.mealGuest`, `orbitMilestoneType.mealHost`, `orbitMilestoneType.mealHelper`, `orbitMilestoneType.accommodationGuest`, `orbitMilestoneType.accommodationHost`, `orbitMilestoneType.accommodationHelper`, `orbitMilestoneType.accommodationHotel`, `orbitMilestoneType.break`, `orbitMilestoneType.adminMeeting`, `orbitMilestoneType.adminMeal`, `orbitMilestoneType.adminMealAtHall`, `orbitMilestoneType.adminAccommodation`, `orbitMilestoneType.adminTransportVehicle`, `orbitMilestoneType.adminBreak`
- Candidate static strings: `View Guests`

## `Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_MainColorVar | input | Text | `""` |
| In_MilestoneTypeId | input | Text | `""` |
- Client actions / event handlers: `onClick`
- Static entities / flags: `orbitColorShade.color2`, `orbitColorShade.color1`, `orbitColorShade.color10`, `orbitMilestoneType.break`

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
- 1. `ActionGetAllApplicationEvents` (200) at 580 ms
- 2. `DataActionFetchEventNotes` (200) at 2860 ms
- 3. `DataActionGet_EventDetails` (200) at 2966 ms
- 4. `DataActionGet_HostSurveyStatus` (200) at 3272 ms
- 5. `DataActionGet_HasDocuments` (200) at 3810 ms
- 6. `DataActionGet_HasQRCode` (200) at 4268 ms

## Not yet captured (see coverage.md)
- `App_Common.UnsupportedVersion_Wrapper`
- `App_Policies.Policy_Checker`
- `CW_Notes.NoteListActions`
- `CacheControl.CacheControl_Policies`
- `ConnectPatterns.AddNote`
- `ConnectPatterns.BottomSheet`
- `ConnectPatterns.HighlightSearch`
- `ConnectPatterns.IconSVG`
- `ConnectPatterns.SkeletonSection`
- `Fingerprint.FingerprintScanner`
- `NavigationHandler.PreventBackNavigation`
- `Orbit_Generic_Blocks.NoInformation_Orbit`
- `Orbit_Generic_Blocks.Skeleton_Loading`
- `PIN.PinCode`
- `Private.PullToRefresh`

