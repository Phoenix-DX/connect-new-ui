# Pack of UI flow Legacy_LDMEventsFlow (DEV model, MCP dump of flows 2026-10-27)

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
| BottomBarItem | OutSystemsUI_2_23 | Navigation | ExtendedClass: Text | - | `OutSystemsUI_2_23.Navigation.BottomBarItem.mvc.js` |
| Button | UBTConnect_Utils | CW_Common | ButtonExtendedClass: Text; IsDisabled: Boolean; IsIconOnRight: Boolean; ButtonText: Text (mandatory); IconText_SpacingSize: UBT_Size Identifier = xs; TextExtendedClasses: Text; ButtonOptions: ButtonOptions; IconId: UBT_Icons2 Identifier; HideIcon: Boolean | buttonOnClick() | `UBTConnect_Utils.CW_Common.Button.mvc.js` |
| Button | UBTConnectLibrary | ConnectPatterns | In_ButtonOptions: ButtonOptions; In_ExtendedClass: Text; In_IsDisabled: Boolean | Event_OnClick() | `UBTConnectLibrary.ConnectPatterns.Button.mvc.js` |
| CacheControl_Policies | UBTConnect_Utils | CacheControl | CacheKey: Text; TimeToLiveSeconds: Integer = 7200 | Result(CacheControl_Response: CacheControl_Policies) | `UBTConnect_Utils.CacheControl.CacheControl_Policies.mvc.js` |
| Columns_Two | UBTConnectLibrary | BasePatterns | ColumnOptions: ColumnOptions; ExtendedClasses: Text | - | `UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js` |
| CustomContainer | UBTConnectLibrary | BasePatterns | ExtendedClasses: Text; Options: ContainerOptions | Clicked() | `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` |
| CustomText | UBTConnectLibrary | BasePatterns | In_Text: Text (mandatory); In_TextOptions: TextOptions (mandatory); In_PaddingOptions: SpacingOptions; In_HighlightWords: Text; In_HighlightOptions: TextOptions; ExtendedClasses: Text; FitContent: Boolean; InJustifyText: Boolean; NoWrap: Boolean; InlineIcon: InlineIcon | Clicked() | `UBTConnectLibrary.BasePatterns.CustomText.mvc.js` |
| DeeplinkHandlerCentral | EventfulDeeplinksPlugin | EventfulDeeplinksPlugin | - | OnDeeplinkOpen(URL: Text (mandatory)) | - |
| Dialog_AccessRestrictedAction | UBTConnect_Utils | CW_App_Common_Blocks_PopupDialogs | In_ExtendedClass: Text | - | `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc.js` |
| HandleImageLoadError | Connect2_LegacyShared | Utility | - | - | `Connect2_LegacyShared.Utility.HandleImageLoadError.mvc.js` |
| Icon | UBTConnectLibrary | ConnectPatterns | In_IconId: UBT_Icons2 Identifier (mandatory); In_ColorId: UBT_Color Identifier = neutral-9; In_SizeId: UBT_IconsSize Identifier; In_Visible: Boolean = True; In_ExtendedClasses: Text = "" | Click() | `UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` |
| IconBadge | UBTConnectLibrary | OutSystemsUIOverrides | Number: Long Integer (mandatory); Color: UBT_Color Identifier = Entities.UBT_Color.Primary; IsLight: Boolean; ExtendedClass: Text; MaxNumber: Integer = 9 | - | `UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc.js` |
| Layout_LoginFlow | UBTConnectLibrary | Layouts | In_HasOverlay: Boolean; In_ExtendedClass: Text; In_IsCommonBlock: Boolean | OnPathCalculated(); OnReady(MainContainerId: Text (mandatory)) | `UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc.js` |
| OfflineDataSyncCore | OutSystemsUI_2_23 | Private | - | OnConfigure(); OnSync(SyncUnit: Text (mandatory)); OnSyncComplete(SyncUnit: Text (mandatory)); OnSyncError(SyncUnit: Text (mandatory); ErrorMessage: Text (mandatory)); OnSyncStart(SyncUnit: Text (mandatory)) | `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js` |
| PinUnlock_MobileWrapper | UBT_AppManager_Mobile | Fingerprint | In_PinLength: Integer (mandatory); In_ExtendedClasses: Text (mandatory); In_IsScanFingerprintOnReady: Boolean (mandatory); In_ForceVisible: Boolean; In_AllowBackNavigation: Boolean; In_HideFingerprint: Boolean | KeyPressed(); PincodeChange(InputLength: Integer (mandatory)); PinUnlockError(ErrorMessage: Text (mandatory)); PinUnlockSuccess(); Timeout(); UserLoggedOut() | `UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc.js` |
| PreventBackNavigation | NavigationHandler | NavigationHandler | - | BackNavigationPrevented(BackNavigationEvent: Object (mandatory)) | `NavigationHandler.NavigationHandler.PreventBackNavigation.mvc.js` |
| ScreenBlock_EventDetail | Connect2_OrbitMobile_MUI | LDM_ScreenBlocks | EventHostId: Long Integer (mandatory); EventId: Long Integer | NavigateTo_AndroidMaps(q: Text (mandatory)); NavigateTo_ContactByEmail(Event_AvatarURL: Text (mandatory); Event_ContactName: Text (mandatory); Event_ContactSurname: Text (mandatory); Event_ContactLocality: Text (mandatory); Event_ContactCountry: Text (mandatory); Event_EmailTo: Text (mandatory); Event_IsCoordinator: Boolean (mandatory); Event_Subject: Text (mandatory); Event_Date: Date (mandatory); Event_Locality: Text (mandatory)); NavigateTo_HouseholdCarousel(Household_Id: Long Integer (mandatory); HouseholdNavigationTypeId: HouseholdNavigationType Identifier (mandatory); ItemsLength: Long Integer (mandatory); ItemPosition: Integer (mandatory); IsLimitedLDMHost: Boolean; HouseholdIdList: Long Integer List (mandatory)); NavigateTo_HouseholdDetail(Event_HouseholdId: Long Integer (mandatory)); NavigateTo_WebMaps(api: Integer (mandatory); query: Text (mandatory)) | `Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_EventDetail.mvc.js`, `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.mvc.js` |
| ScreenBlock_EventDetail | Connect2_OrbitMobile_MUI | Orbit_ScreenBlocks | In_MemberId: Long Integer (mandatory); In_EventId: Long Integer (mandatory); In_EventName: Text (mandatory); In_FromNotification: Boolean (mandatory) | NavigateTo_ContactHelpdesk(Event_Subject: Text (mandatory); Event_EventName: Text (mandatory)); NavigateTo_EventBooklet(); NavigateTo_GenerateQRCode(Event_EventStartDate: Date Time (mandatory); Event_EventEndDate: Date Time (mandatory); Event_EventLocation: Text (mandatory)); NavigateTo_Helpers(Event_EventId: Long Integer (mandatory); Event_HostId: Long Integer (mandatory); Event_PreloadEventName: Text (mandatory); Event_PreloadMilestoneName: Text (mandatory)); NavigateTo_HostSurvey(Event_HouseholderId: Long Integer (mandatory); Event_EventStartDate: Date Time (mandatory); Event_EventEndDate: Date Time (mandatory)); NavigateTo_MilestoneDetail(Event_MilestoneId: Text (mandatory); Event_EventName: Text (mandatory); Event_MilestoneName: Text (mandatory); Event_OrbitMilestoneTypeId: OrbitMilestoneType Identifier (mandatory); Event_HostId: Long Integer (mandatory)); NavigateTo_TransportDetail(Event_MilestoneId: Text (mandatory); Event_OrbitMilestoneTypeId: OrbitMilestoneType Identifier (mandatory); Event_MilestoneName: Text (mandatory); Event_HeaderClass: Text (mandatory)); NavigateTo_ViewDocuments(Event_EventStartDate: Date Time (mandatory); Event_EventEndDate: Date Time (mandatory); Event_EventLocation: Text (mandatory)) | `Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_EventDetail.mvc.js`, `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.mvc.js` |
| ScreenBlock_Event_Email | Connect2_OrbitMobile_MUI | LDM_ScreenBlocks | In_EventId: Long Integer; In_IsMessageGuest: Boolean; In_IsContactOrganiser: Boolean; In_EventHostId: Long Integer; EventDate: Date; EventLocality: Text | - | `Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_Event_Email.mvc.js` |
| ScreenBlock_Household_Email | Connect2_LegacyShared | Email | In_HouseholdFirstName: Text (mandatory); In_HouseholdFullName: Text (mandatory); EmailTo: Email (mandatory); ContactBusinessType: CommunityBusinessType2 Identifier; InitialEmailSubject: Text | EmailSubmitted() | `Connect2_LegacyShared.Email.ScreenBlock_Household_Email.mvc.js` |
| ScreenBlock_MyEvents | Connect2_OrbitMobile_MUI | LDM_ScreenBlocks | - | NavigateTo_ContactByEmail(In_AvatarURL: Text (mandatory); In_ContactName: Text (mandatory); In_ContactSurname: Text (mandatory); In_ContactLocality: Text (mandatory); In_ContactCountry: Text (mandatory); In_EmailTo: Text (mandatory)); NavigateTo_EventDetail(EventHostId: Long Integer (mandatory); EventId: Long Integer); NavigateTo_HouseholdCarousel(In_HouseholdId: Long Integer (mandatory); In_CurrentRowNumber: Integer (mandatory); In_Length: Integer (mandatory); In_EventHostId: Long Integer (mandatory); In_EventId: Long Integer (mandatory); In_IsHosting: Boolean (mandatory); In_HouseholdIdList: Long Integer List (mandatory)); NavigateToMyCalendar() | `Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.mvc.js` |
| SkeletonSection | UBTConnectLibrary | ConnectPatterns | In_IsLoading: Boolean (mandatory); In_ExtendedClass: Text; In_IsActiveWhileLoading: Boolean | - | `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js` |

## Referenced client actions called

| Action | Module | Folder | Inputs | Outputs |
|---|---|---|---|---|
| AddAuditEventDetailEvent | Connect2_OrbitMobile_MUI | LDM_AuditEvents | EventTypeId: ApplicationEvents_LDM Identifier (mandatory); ClickedHouseholdId: Long Integer; ClickedHouseholdName: Text; EventDate: Date; EventLocality: Text | - |
| AppManager_GetIsSupportedNativeVersion | UBT_AppManager | AppManager_SupportedVersion | - | IsSupportedNativeVersion: Boolean |
| AppManager_GetIsSupportedWebviewVersion | UBT_AppManager | AppManager_SupportedVersion | - | IsSupported: Boolean; IsAndroid: Boolean; IsApple: Boolean |
| AppManager_GetPIN_HasUnlocked | UBT_AppManager | AppManager_CachedVariables_Gettters | - | HasUnlocked: Boolean |
| AppManager_GetPIN_IsLocked | UBT_AppManager | AppManager_CachedVariables_Gettters | - | IsLocked: Boolean |
| AppManager_GetPIN_IsRegistering | UBT_AppManager | AppManager_CachedVariables_Gettters | - | IsRegistering: Boolean |
| AppManager_Logout | UBT_AppManager | AppManager_Methods | - | - |
| AppManager_OnReadyChecker | UBT_AppManager | AppManager_Initialization | - | isReady: Boolean |
| BottomBarSlider_ForceRefresh | UBTConnectLibrary | BottomBar_Slider | - | - |
| BottomBar_GetList | UBTConnect_Utils | BottomBar | useMapsItems: Boolean; isHouseholder: Boolean (mandatory) | BottomBar_ItemsList: BottomBar_Item List |
| ConfigureOfflineDataSync | OutSystemsUI_2_23 | OfflineDataSync | SyncOnOnline: Boolean (mandatory); SyncOnResume: Boolean (mandatory); RetryOnError: Boolean (mandatory); RetryIntervalInSeconds: Integer (mandatory) | - |
| EndOfflineDataSync | OutSystemsUI_2_23 | OfflineDataSync | HasError: Boolean (mandatory); ErrorMessage: Text = ""; AllowRetry: Boolean | - |
| FeedbackMessage_AutoClose | UBTJavaScriptUtils | JSUtils_FeedbackMessage | Title: Text; Message: Text (mandatory); MessageType: UBT_MessageType Identifier = Entities.UBT_MessageType.Error; EncodedHTML: Boolean = True; ExtendedClass: Text; DelayMs: Integer = 0; useDebounce: Boolean | - |
| GetHasCarouselEnabled | UBTConnect_Utils | Permissions_FF_Wrappers_OutSystems | - | HasCarouselEnabled: Boolean |
| GetHasNewLDM | UBTConnect_Utils | Permissions_FF_Wrappers_OutSystems | - | Out_HasNewLDM: Boolean |
| JSUtils_String_Split | UBTJavaScriptUtils | JSUtils_StringManipulation | String: Text (mandatory); Char: Text (mandatory) | List: Text List |
| ListAppend | (System) | - | List: Generic Record List (mandatory); Element: Generic Record (mandatory) | - |
| ListIndexOf | (System) | - | List: Generic Record List (mandatory); Condition: Boolean (mandatory) | Position: Integer |
| OpenPolicy | UBTConnect_Utils | Policies | PolicyInformation: PolicyInformation2 (mandatory); ErrorMessage: Text = "This policy couldn't be found." | - |
| PIN_Check | UBT_AppManager | PIN | - | NeedRegister: Boolean; NeedUnlock: Boolean |
| PreventNavigation | NavigationHandler | NavigationHandler | NavigationEvent: Object (mandatory) | - |
| ResetReplaceOnUpcomingNavigation | NavigationHandler | NavigationHandler | - | - |
| SetBottomBarActiveElement | OutSystemsUI_2_23 | Menu | ActiveItem: Integer = -1 | Success: Boolean; ErrorMessage: ErrorMessage |
| SetPreloadObject | NavigationHandler | Preloading | Preload: Object (mandatory) | - |

## Static entity records named by the flow (Entities.<Entity>.<Record>)

- **ApplicationEvents_LDM** (Connect2_LegacyShared): records used: MyTimelineGuessEmailed, MyTimelineHostEmailed
  - MyTimelineGuessEmailed: Id="c49b96e1-783a-4b26-8d2b-d6890662e642", Is_Active=True, Label="Connect-Functional-MyTimelineGuessEmailed", Order=30
  - MyTimelineHostEmailed: Id="8e5d4070-b2ae-4363-88e0-72cd00142f1e", Is_Active=True, Label="Connect-Functional-MyTimelineHostEmailed", Order=29
- **Connect_BottomBar_Items** (UBTConnect_Utils): records used: Bookmarks, Directory, Home, Menu, Updates
  - Bookmarks: Id="Bookmarks"
  - Directory: Id="Directory"
  - Home: Id="Home"
  - Menu: Id="Menu"
  - Updates: Id="Updates"
- **Type_MyCalendarEventSource** (Connect2_MyCalendar_CS): records used: LDM
  - LDM: Id="event-ldm"
- **UBT_Color** (UBTConnectLibrary): records used: Inherit, Neutral0, Neutral10, Neutral6, Primary, Red
  - Inherit: Color="inherit", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=69
  - Neutral0: Color="neutral-0", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=19
  - Neutral10: Color="neutral-10", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=29
  - Neutral6: Color="neutral-6", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=25
  - Primary: Color="primary", IsActive=True, IsBrand=True, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=1
  - Red: Color="red", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=10
- **UBT_Display** (UBTConnectLibrary): records used: Flex
  - Flex: Id="display-flex", Order=3
- **UBT_FontSize** (UBTConnectLibrary): records used: Base, ExtraSmall, Small
  - Base: Id="base", Order=5
  - ExtraSmall: Id="xs", Order=3
  - Small: Id="s", Order=4
- **UBT_FontWeight** (UBTConnectLibrary): records used: SemiBold
  - SemiBold: Id="semi-bold", Order=4
- **UBT_Icons2** (UBTConnectLibrary): records used: Backspace, Fingerprint, OpenNew
  - Backspace: Id="connect-icon-backspace", Is_Active=True, Label="Backspace"
  - Fingerprint: Id="connect-icon-fingerprint", Is_Active=True, Label="Fingerprint"
  - OpenNew: Id="connect-icon-open_new", Is_Active=True, Label="Open New"
- **UBT_IconsSize** (UBTConnectLibrary): records used: Base_24, Display_36
  - Base_24: Label="icon-base", Order=3
  - Display_36: Label="icon-display", Order=4
- **UBT_JustifyContent** (UBTConnectLibrary): records used: Center
  - Center: Id="justify-content-center", Order=2
- **UBT_MessageType** (UBTJavaScriptUtils): records used: Error
  - Error: Id=4, Label="Error"
- **UBT_Shape** (UBTConnectLibrary): records used: Large
  - Large: Id="large", Order=4
- **UBT_Size** (UBTConnectLibrary): records used: Base, ExtraLarge, Medium
  - Base: Id="base", Order=7
  - ExtraLarge: Id="xl", Order=10
  - Medium: Id="m", Order=8
