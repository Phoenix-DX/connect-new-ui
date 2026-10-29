# Pack of UI flow Calendar (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Referenced blocks (other modules) used by the flow

Logic of these blocks is not in the dump. 'TST file' is the compiled code on TST (`python3 migration/clarify/tools/tst_source.py show <file>`), when the survey has it.

| Block | Module | Flow | Inputs | Events | TST file |
|---|---|---|---|---|---|
| AndroidAppLinkOnResumeHandler | Connect2_AndroidAppLinksPlugin | AndroidAppLinks | - | ResumeNavigation(EventData: EventData (mandatory)) | - |
| BackNavigationHandler | NavigationHandler | NavigationHandler | Priority: Integer | BackNavigation(BackNavigationEvent: Object (mandatory)) | `NavigationHandler.NavigationHandler.BackNavigationHandler.mvc.js` |
| Button | UBTConnect_Utils | CW_Common | ButtonExtendedClass: Text; IsDisabled: Boolean; IsIconOnRight: Boolean; ButtonText: Text (mandatory); IconText_SpacingSize: UBT_Size Identifier = xs; TextExtendedClasses: Text; ButtonOptions: ButtonOptions; IconId: UBT_Icons2 Identifier; HideIcon: Boolean | buttonOnClick() | `UBTConnect_Utils.CW_Common.Button.mvc.js` |
| Button | UBTConnectLibrary | ConnectPatterns | In_ButtonOptions: ButtonOptions; In_ExtendedClass: Text; In_IsDisabled: Boolean | Event_OnClick() | `UBTConnectLibrary.ConnectPatterns.Button.mvc.js` |
| CacheControl | UBTConnect_Utils | CacheControl | CacheTypeId: Connect_CacheType Identifier (mandatory); CacheKey: Text (mandatory); TimeToLiveSeconds: Integer = 7200; Timeout: Integer = 10 | OnCacheHit(Object: Object (mandatory)); OnNonCacheHit() | `UBTConnect_Utils.CacheControl.CacheControl.mvc.js` |
| CacheControl_Policies | UBTConnect_Utils | CacheControl | CacheKey: Text; TimeToLiveSeconds: Integer = 7200 | Result(CacheControl_Response: CacheControl_Policies) | `UBTConnect_Utils.CacheControl.CacheControl_Policies.mvc.js` |
| Columns_Two | UBTConnectLibrary | BasePatterns | ColumnOptions: ColumnOptions; ExtendedClasses: Text | - | `UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js` |
| CustomContainer | UBTConnectLibrary | BasePatterns | ExtendedClasses: Text; Options: ContainerOptions | Clicked() | `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` |
| CustomText | UBTConnectLibrary | BasePatterns | In_Text: Text (mandatory); In_TextOptions: TextOptions (mandatory); In_PaddingOptions: SpacingOptions; In_HighlightWords: Text; In_HighlightOptions: TextOptions; ExtendedClasses: Text; FitContent: Boolean; InJustifyText: Boolean; NoWrap: Boolean; InlineIcon: InlineIcon | Clicked() | `UBTConnectLibrary.BasePatterns.CustomText.mvc.js` |
| DeeplinkHandlerCentral | EventfulDeeplinksPlugin | EventfulDeeplinksPlugin | - | OnDeeplinkOpen(URL: Text (mandatory)) | - |
| Dialog_AccessRestrictedAction | UBTConnect_Utils | CW_App_Common_Blocks_PopupDialogs | In_ExtendedClass: Text | - | `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc.js` |
| Embedded_MyEntertaining | UBTConnect_EmbedMyEntertaining | Blocks2 | View: Text = "timeline"; Theme: Text = "light"; Sources: Text = ""; B2CTenant: Text (mandatory) | OnAuthenticated(); OnComplete(Status: Text (mandatory); Total: Text (mandatory)); OnError(Message: Text (mandatory)); OnNavBack(); OnOpenMap(Lat: Text (mandatory); Lng: Text (mandatory); Label: Text (mandatory)); OnReady() | `UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc.js` |
| EventCard | Connect2_OrbitMobile_MUI | LDM_Blocks | - | CallPhoneEventCard(PhoneCallInfo: Text (mandatory)); EventClicked(Event_EventHostId: Long Integer (mandatory); Event_EventId: Long Integer (mandatory)); HouseholdClicked(Event_HouseholdId: Long Integer (mandatory); Event_HouseholdName: Text (mandatory); Event_CurrentRowNumber: Integer (mandatory); Event_Length: Integer (mandatory); Event_EventHostId: Long Integer (mandatory); Event_EventId: Long Integer (mandatory); Event_RecordDisabled: Boolean (mandatory); Event_IsHosting: Boolean (mandatory); Event_IsHouseholdDisplayed: Boolean (mandatory); Event_HouseholdIdList: Text (mandatory)); OnClick_Message(Event_ContactPopupData: Text; Event_CountryName: Text (mandatory)); OnClick_PhoneCall(Event_PhoneCallInfo: Text (mandatory)) | `Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard.mvc.js` |
| EventCard | UBTConnectLibrary | ConnectPatterns | InDate: Date (mandatory); In_HeaderTextColorId: UBT_Color Identifier (mandatory); In_HeaderBackgroundColorId: UBT_Color Identifier (mandatory); In_HeaderIconId: UBT_Icons2 Identifier (mandatory); In_HeaderLabel: Text (mandatory); In_ShowPastLabel: Boolean | OnClickEvent() | `UBTConnectLibrary.ConnectPatterns.EventCard.mvc.js` |
| Gallery | OutSystemsUI_2_23 | Adaptive | RowItemsDesktop: Integer = 4; RowItemsTablet: Integer = 3; RowItemsPhone: Integer = 1; ItemsGap: Space Identifier = base; ExtendedClass: Text | Initialized(GalleryId: Text (mandatory)) | `OutSystemsUI_2_23.Adaptive.Gallery.mvc.js` |
| HandleImageLoadError | Connect2_LegacyShared | Utility | - | - | `Connect2_LegacyShared.Utility.HandleImageLoadError.mvc.js` |
| HorizontalDot_List | UBTConnectLibrary | ConnectPatterns | In_UbtColorIds: UBT_Color Identifier List (mandatory); In_ExtendedClasses: Text | - | `UBTConnectLibrary.ConnectPatterns.HorizontalDot_List.mvc.js` |
| Icon | UBTConnectLibrary | ConnectPatterns | In_IconId: UBT_Icons2 Identifier (mandatory); In_ColorId: UBT_Color Identifier = neutral-9; In_SizeId: UBT_IconsSize Identifier; In_Visible: Boolean = True; In_ExtendedClasses: Text = "" | Click() | `UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` |
| IconText | UBTConnectLibrary | ConnectPatterns | IsIconOnRight: Boolean; Text: Text (mandatory); TextOptions: TextOptions; SpacingSize: UBT_Size Identifier = xs; ExtendedClasses: Text; SubtextOptions: TextOptions; In_Subtext: Text; In_JustifyText: Boolean | Clicked() | `UBTConnectLibrary.ConnectPatterns.IconText.mvc.js` |
| Layout_DetailPage | UBTConnectLibrary | Layouts | In_AlignTitleLeft: Boolean; In_IsPrimaryColor: Boolean = True; In_ExtendedClass: Text; In_EnableAccessibilityFeatures: Boolean; In_InitializeNavigationHandler: Boolean = True; In_IsHideTitle: Boolean | OnReadyEvent(WrapperContainerId: Text (mandatory)) | `UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js` |
| Layout_LoginFlow | UBTConnectLibrary | Layouts | In_HasOverlay: Boolean; In_ExtendedClass: Text; In_IsCommonBlock: Boolean | OnPathCalculated(); OnReady(MainContainerId: Text (mandatory)) | `UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc.js` |
| OfflineDataSyncCore | OutSystemsUI_2_23 | Private | - | OnConfigure(); OnSync(SyncUnit: Text (mandatory)); OnSyncComplete(SyncUnit: Text (mandatory)); OnSyncError(SyncUnit: Text (mandatory); ErrorMessage: Text (mandatory)); OnSyncStart(SyncUnit: Text (mandatory)) | `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js` |
| PinUnlock_MobileWrapper | UBT_AppManager_Mobile | Fingerprint | In_PinLength: Integer (mandatory); In_ExtendedClasses: Text (mandatory); In_IsScanFingerprintOnReady: Boolean (mandatory); In_ForceVisible: Boolean; In_AllowBackNavigation: Boolean; In_HideFingerprint: Boolean | KeyPressed(); PincodeChange(InputLength: Integer (mandatory)); PinUnlockError(ErrorMessage: Text (mandatory)); PinUnlockSuccess(); Timeout(); UserLoggedOut() | `UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc.js` |
| PreventBackNavigation | NavigationHandler | NavigationHandler | - | BackNavigationPrevented(BackNavigationEvent: Object (mandatory)) | `NavigationHandler.NavigationHandler.PreventBackNavigation.mvc.js` |
| SelectionOption_List | UBTConnectLibrary | ConnectPatterns | SelectionOption_ItemList: SelectionOption_Item List (mandatory); isMultiselect: Boolean (mandatory); Item_StyleOptions: ContainerOptions; LastItem_StyleOptions: ContainerOptions; IconSizeId: UBT_IconsSize Identifier = icon-non-standard-16 | NotEnabledOnClick(ClickedItemId: Text (mandatory)); OnSelectionChange(SelectedItems: SelectionOption_Item List (mandatory); ClickedItemId: Text (mandatory)) | `UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc.js` |
| SkeletonSection | UBTConnectLibrary | ConnectPatterns | In_IsLoading: Boolean (mandatory); In_ExtendedClass: Text; In_IsActiveWhileLoading: Boolean | - | `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js` |

## Referenced client actions called

| Action | Module | Folder | Inputs | Outputs |
|---|---|---|---|---|
| AppManager_GetIsSupportedNativeVersion | UBT_AppManager | AppManager_SupportedVersion | - | IsSupportedNativeVersion: Boolean |
| AppManager_GetIsSupportedWebviewVersion | UBT_AppManager | AppManager_SupportedVersion | - | IsSupported: Boolean; IsAndroid: Boolean; IsApple: Boolean |
| AppManager_GetPIN_HasUnlocked | UBT_AppManager | AppManager_CachedVariables_Gettters | - | HasUnlocked: Boolean |
| AppManager_GetPIN_IsLocked | UBT_AppManager | AppManager_CachedVariables_Gettters | - | IsLocked: Boolean |
| AppManager_GetPIN_IsRegistering | UBT_AppManager | AppManager_CachedVariables_Gettters | - | IsRegistering: Boolean |
| AppManager_Logout | UBT_AppManager | AppManager_Methods | - | - |
| AppManager_OnReadyChecker | UBT_AppManager | AppManager_Initialization | - | isReady: Boolean |
| AssignFromObject | NavigationHandler | Preloading | ToObjectRef: Object (mandatory); ObjectValue: Object (mandatory) | AssignedObjectRef: Object |
| ConfigureOfflineDataSync | OutSystemsUI_2_23 | OfflineDataSync | SyncOnOnline: Boolean (mandatory); SyncOnResume: Boolean (mandatory); RetryOnError: Boolean (mandatory); RetryIntervalInSeconds: Integer (mandatory) | - |
| EndOfflineDataSync | OutSystemsUI_2_23 | OfflineDataSync | HasError: Boolean (mandatory); ErrorMessage: Text = ""; AllowRetry: Boolean | - |
| FeedbackMessage_AutoClose | UBTJavaScriptUtils | JSUtils_FeedbackMessage | Title: Text; Message: Text (mandatory); MessageType: UBT_MessageType Identifier = Entities.UBT_MessageType.Error; EncodedHTML: Boolean = True; ExtendedClass: Text; DelayMs: Integer = 0; useDebounce: Boolean | - |
| GetHasNewLDM | UBTConnect_Utils | Permissions_FF_Wrappers_OutSystems | - | Out_HasNewLDM: Boolean |
| ListAny | (System) | - | List: Generic Record List (mandatory); Condition: Boolean (mandatory) | Result: Boolean |
| ListAppend | (System) | - | List: Generic Record List (mandatory); Element: Generic Record (mandatory) | - |
| ListAppendAll | (System) | - | List: Generic Record List (mandatory); SourceList: Generic Record List (mandatory) | - |
| ListClear | (System) | - | List: Generic Record List (mandatory) | - |
| ListDistinct | (System) | - | SourceList: Generic Record List (mandatory) | DistinctList: Generic Record List |
| ListFilter | (System) | - | SourceList: Generic Record List (mandatory); Condition: Boolean (mandatory) | FilteredList: Generic Record List |
| ListIndexOf | (System) | - | List: Generic Record List (mandatory); Condition: Boolean (mandatory) | Position: Integer |
| ListInsert | (System) | - | List: Generic Record List (mandatory); Element: Generic Record (mandatory); Position: Integer (mandatory) | - |
| ListRemove | (System) | - | List: Generic Record List (mandatory); Position: Integer (mandatory) | - |
| ListSort | (System) | - | List: Generic Record List (mandatory); By: Generic Type (mandatory); Ascending: Boolean = True | - |
| OpenInApp_OpenExternalLink | UBTConnect_Utils | OpenInApp_Utils | Url: Text (mandatory); InNewTab: Boolean | - |
| OpenPolicy | UBTConnect_Utils | Policies | PolicyInformation: PolicyInformation2 (mandatory); ErrorMessage: Text = "This policy couldn't be found." | - |
| PIN_Check | UBT_AppManager | PIN | - | NeedRegister: Boolean; NeedUnlock: Boolean |
| PreventNavigation | NavigationHandler | NavigationHandler | NavigationEvent: Object (mandatory) | - |
| PutCacheableObject | MemoryClientCache | MemoryCache | MemoryCacheTypeId: MemoryCacheType Identifier (mandatory); CacheKey: Text (mandatory); Object: Object (mandatory); CacheTimeToLiveSeconds: Integer (mandatory) | - |
| RemoveCacheableObject_ByType | MemoryClientCache | MemoryCache | MemoryCacheTypeId: MemoryCacheType Identifier (mandatory) | - |
| ResetReplaceOnUpcomingNavigation | NavigationHandler | NavigationHandler | - | - |

## Static entity records named by the flow (Entities.<Entity>.<Record>)

- **CalendarView** (UBTConnectLibrary): records used: Day, Month, Week
  - Day: IconClass=Entities.UBT_Icons.Event, Id="Day", Is_Active=True, Label="Day", Order=1
  - Month: IconClass=Entities.UBT_Icons.Calendar, Id="Month", Is_Active=True, Label="Month", Order=3
  - Week: IconClass=Entities.UBT_Icons.EventNote, Id="Week", Is_Active=True, Label="Week", Order=2
- **Connect_CacheType** (UBTConnect_Utils): records used: MyCalendarEvents
  - MyCalendarEvents: Id="MyCalendarEvents"
- **MyCalendar_EventSource** (?): records used: Assemble
- **OrbitMilestoneType** (Connect2_OrbitMobile_BL): records used: Boat, Flight, Train, Vehicle
  - Boat: CanHost=False, IconTransportArrival="orbit-icon-transportation-boat-arrival", IconTransportDeparture="orbit-icon-transportation-boat-departure", Id="transport-boat", Is_Active=True, IsTransportMilestone=True, MainColorVar=orange, MainIcon="orbit-icon-transportation-boat", Name="Boat", Order=5, TransportHeaderClass="orbit-transport-detail-boat", TravelInfoHeader="Boat Number", TravelInfoHeaderIcon="orbit-icon-license-plate", Type="Transport"
  - Flight: CanHost=False, IconTransportArrival="orbit-icon-transportation-flight-arrival", IconTransportDeparture="orbit-icon-transportation-flight-departure", Id="transport-flight", Is_Active=True, IsTransportMilestone=True, MainColorVar=orange, MainIcon="orbit-icon-transportation-flight", Name="Flight", Order=2, TransportHeaderClass="orbit-transport-detail-flight", TravelInfoHeader="Flight Number", TravelInfoHeaderIcon="orbit-icon-license-plate", Type="Transport"
  - Train: CanHost=False, IconTransportArrival="orbit-icon-transportation-train-arrival", IconTransportDeparture="orbit-icon-transportation-train-departure", Id="transport-train", Is_Active=True, IsTransportMilestone=True, MainColorVar=orange, MainIcon="orbit-icon-transportation-train", Name="Train", Order=4, TransportHeaderClass="orbit-transport-detail-train", TravelInfoHeader="Train Number", TravelInfoHeaderIcon="orbit-icon-license-plate", Type="Transport"
  - Vehicle: CanHost=False, IconTransportArrival="orbit-icon-transportation-vehicle-arrival", IconTransportDeparture="orbit-icon-transportation-vehicle-departure", Id="transport-vehicle", Is_Active=True, IsTransportMilestone=True, MainColorVar=orange, MainIcon="orbit-icon-transportation-vehicle", Name="Vehicle", Order=3, TransportHeaderClass="orbit-transport-detail-vehicle", TravelInfoHeader="Rego", TravelInfoHeaderIcon="orbit-icon-license-plate", Type="Transport"
- **Space** (OutSystemsUI_2_23): records used: ExtraSmall
  - ExtraSmall: Order=2, Space="xs"
- **Type_MyCalendarEventSource** (Connect2_MyCalendar_CS): records used: Assemble, LDM, Orbit, UserCreated
  - Assemble: Id="event-assemble"
  - LDM: Id="event-ldm"
  - Orbit: Id="event-orbit"
  - UserCreated: Id="event-user"
- **UBT_AlignItems** (UBTConnectLibrary): records used: Center
  - Center: Id="align-items-center", Order=2
- **UBT_ButtonSize** (UBTConnectLibrary): records used: Small
  - Small: Id="s", Order=3
- **UBT_Color** (UBTConnectLibrary): records used: BlueDark, BlueDarkGradientLinear, BlueDarker, CyanDarkGradientLinear, Inherit, Neutral0, Neutral10, Neutral3, Neutral4, Neutral7, Neutral9, Peach, PeachDarkGradientLinear, PeachDarker, Primary, PurpleDark, PurpleDarkGradientLinear, PurpleDarker, Transparent
  - BlueDark: Color="blue-dark", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=48
  - BlueDarker: Color="blue-darker", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=49
  - BlueDarkGradientLinear: Color="blue-dark-linear-gradient", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=77
  - CyanDarkGradientLinear: Color="cyan-dark-linear-gradient", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=75
  - Inherit: Color="inherit", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=69
  - Neutral0: Color="neutral-0", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=19
  - Neutral10: Color="neutral-10", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=29
  - Neutral3: Color="neutral-3", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=22
  - Neutral4: Color="neutral-4", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=23
  - Neutral7: Color="neutral-7", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=26
  - Neutral9: Color="neutral-9", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=28
  - Peach: Color="peach", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=6
  - PeachDarker: Color="peach-darker", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=55
  - PeachDarkGradientLinear: Color="peach-dark-linear-gradient", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=78
  - Primary: Color="primary", IsActive=True, IsBrand=True, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=1
  - PurpleDark: Color="purple-dark", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=42
  - PurpleDarker: Color="purple-darker", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=43
  - PurpleDarkGradientLinear: Color="purple-dark-linear-gradient", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=76
  - Transparent: Color="transparent", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=18
- **UBT_ColumnBehaviour** (UBTConnectLibrary): records used: ReduceLast
  - ReduceLast: Id="reduce-last", Order=3
- **UBT_Display** (UBTConnectLibrary): records used: Flex, Inline
  - Flex: Id="display-flex", Order=3
  - Inline: Id="display-inline", Order=6
- **UBT_FlexDirection** (UBTConnectLibrary): records used: Column
  - Column: Id="flex-direction-column", Order=1
- **UBT_FontSize** (UBTConnectLibrary): records used: Base, ExtraSmall, Small
  - Base: Id="base", Order=5
  - ExtraSmall: Id="xs", Order=3
  - Small: Id="s", Order=4
- **UBT_FontWeight** (UBTConnectLibrary): records used: SemiBold
  - SemiBold: Id="semi-bold", Order=4
- **UBT_Icons2** (UBTConnectLibrary): records used: AccountCircleFill, Add, Assemble, Backspace, CalendarFill, ChevronLeft, ChevronRight, Close, EventFill, EventNoteFill, Fingerprint, LDM, ListAlt, OpenNew, Orbit
  - AccountCircleFill: Id="connect-icon-account_circle_fill", Is_Active=True, Label="Account Circle Fill"
  - Add: Id="connect-icon-add", Is_Active=True, Label="Add"
  - Assemble: Id="connect-icon-assemble", Is_Active=True, Label="Assemble"
  - Backspace: Id="connect-icon-backspace", Is_Active=True, Label="Backspace"
  - CalendarFill: Id="connect-icon-calendar_fill", Is_Active=True, Label="Calendar Fill"
  - ChevronLeft: Id="connect-icon-chevron_left", Is_Active=True, Label="Chevron Left"
  - ChevronRight: Id="connect-icon-chevron_right", Is_Active=True, Label="Chevron Right"
  - Close: Id="connect-icon-close", Is_Active=True, Label="Close"
  - EventFill: Id="connect-icon-event_fill", Is_Active=True, Label="Event Fill"
  - EventNoteFill: Id="connect-icon-event_note_fill", Is_Active=True, Label="Event Note Fill"
  - Fingerprint: Id="connect-icon-fingerprint", Is_Active=True, Label="Fingerprint"
  - LDM: Id="connect-icon-ldm", Is_Active=True, Label="LDM"
  - ListAlt: Id="connect-icon-list_alt", Is_Active=True, Label="List Alt"
  - OpenNew: Id="connect-icon-open_new", Is_Active=True, Label="Open New"
  - Orbit: Id="connect-icon-orbit", Is_Active=True, Label="Orbit"
- **UBT_IconsSize** (UBTConnectLibrary): records used: Base_24, Display_36, Medium_20
  - Base_24: Label="icon-base", Order=3
  - Display_36: Label="icon-display", Order=4
  - Medium_20: Label="icon-medium", Order=2
- **UBT_JustifyContent** (UBTConnectLibrary): records used: Center, FlexEnd, SpaceBetween
  - Center: Id="justify-content-center", Order=2
  - FlexEnd: Id="justify-content-flex-end", Order=3
  - SpaceBetween: Id="justify-content-space-between", Order=4
- **UBT_MessageType** (UBTJavaScriptUtils): records used: Error, Info
  - Error: Id=4, Label="Error"
  - Info: Id=1, Label="Info"
- **UBT_Shape** (UBTConnectLibrary): records used: Circle, Large, Medium
  - Circle: Id="circle", Order=6
  - Large: Id="large", Order=4
  - Medium: Id="medium", Order=3
- **UBT_Size** (UBTConnectLibrary): records used: Base, ExtraLarge, ExtraSmall, Medium, Small
  - Base: Id="base", Order=7
  - ExtraLarge: Id="xl", Order=10
  - ExtraSmall: Id="xs", Order=2
  - Medium: Id="m", Order=8
  - Small: Id="s", Order=4
