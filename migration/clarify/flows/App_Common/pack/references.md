# Pack of UI flow App_Common (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Referenced blocks (other modules) used by the flow

Logic of these blocks is not in the dump. 'TST file' is the compiled code on TST (`python3 migration/clarify/tools/tst_source.py show <file>`), when the survey has it.

| Block | Module | Flow | Inputs | Events | TST file |
|---|---|---|---|---|---|
| ActionConfirmationDialog | NavigationHandler | ConfirmationDialogs | - | Confirmed() | `NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc.js` |
| AndroidAppLinkOnResumeHandler | Connect2_AndroidAppLinksPlugin | AndroidAppLinks | - | ResumeNavigation(EventData: EventData (mandatory)) | - |
| Animate | OutSystemsUI_2_23 | Interaction | AnimationType: AnimationType Identifier (mandatory); Delay: Integer = 0; Speed: Speed Identifier | - | `OutSystemsUI_2_23.Interaction.Animate.mvc.js` |
| AppManager_Events | UBT_AppManager | Layouts2 | - | OnCallback(AppManager_Callback: AppManager_Callback (mandatory)) | `UBT_AppManager.Layouts.AppManager_Events.mvc.js` |
| ApplicationLoadEvents | OutSystemsUI_2_23 | Private | MinimumDisplayTimeMs: Integer = 1000 | OnLoadComplete(RedirectURL: Text (mandatory)); OnUpgradeProgress(Completed: Integer (mandatory); Total: Integer (mandatory)) | `OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc.js` |
| BackNavigationHandler | NavigationHandler | NavigationHandler | Priority: Integer | BackNavigation(BackNavigationEvent: Object (mandatory)) | `NavigationHandler.NavigationHandler.BackNavigationHandler.mvc.js` |
| BlankSlate | OutSystemsUI_2_23 | Content | FullHeight: Boolean = True; ExtendedClass: Text | - | `OutSystemsUI_2_23.Content.BlankSlate.mvc.js` |
| BottomBarItem | OutSystemsUI_2_23 | Navigation | ExtendedClass: Text | - | `OutSystemsUI_2_23.Navigation.BottomBarItem.mvc.js` |
| Button | UBTConnect_Utils | CW_Common | ButtonExtendedClass: Text; IsDisabled: Boolean; IsIconOnRight: Boolean; ButtonText: Text (mandatory); IconText_SpacingSize: UBT_Size Identifier = xs; TextExtendedClasses: Text; ButtonOptions: ButtonOptions; IconId: UBT_Icons2 Identifier; HideIcon: Boolean | buttonOnClick() | `UBTConnect_Utils.CW_Common.Button.mvc.js` |
| Button | UBTConnectLibrary | ConnectPatterns | In_ButtonOptions: ButtonOptions; In_ExtendedClass: Text; In_IsDisabled: Boolean | Event_OnClick() | `UBTConnectLibrary.ConnectPatterns.Button.mvc.js` |
| ButtonLoading | OutSystemsUI_2_23 | Utilities2 | IsLoading: Boolean (mandatory); ShowLabelOnLoading: Boolean; ExtendedClass: Text | Initialized(ButtonLoadingId: Text (mandatory)) | `OutSystemsUI_2_23.Utilities.ButtonLoading.mvc.js` |
| CacheControl_Policies | UBTConnect_Utils | CacheControl | CacheKey: Text; TimeToLiveSeconds: Integer = 7200 | Result(CacheControl_Response: CacheControl_Policies) | `UBTConnect_Utils.CacheControl.CacheControl_Policies.mvc.js` |
| Columns_Two | UBTConnectLibrary | BasePatterns | ColumnOptions: ColumnOptions; ExtendedClasses: Text | - | `UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js` |
| CustomContainer | UBTConnectLibrary | BasePatterns | ExtendedClasses: Text; Options: ContainerOptions | Clicked() | `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` |
| CustomText | UBTConnectLibrary | BasePatterns | In_Text: Text (mandatory); In_TextOptions: TextOptions (mandatory); In_PaddingOptions: SpacingOptions; In_HighlightWords: Text; In_HighlightOptions: TextOptions; ExtendedClasses: Text; FitContent: Boolean; InJustifyText: Boolean; NoWrap: Boolean; InlineIcon: InlineIcon | Clicked() | `UBTConnectLibrary.BasePatterns.CustomText.mvc.js` |
| DeeplinkHandlerCentral | EventfulDeeplinksPlugin | EventfulDeeplinksPlugin | - | OnDeeplinkOpen(URL: Text (mandatory)) | - |
| Dialog_AccessRestrictedAction | UBTConnect_Utils | CW_App_Common_Blocks_PopupDialogs | In_ExtendedClass: Text | - | `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc.js` |
| ExitConfirmationDialog | NavigationHandler | ConfirmationDialogs | Force: Boolean | - | `NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc.js` |
| HandleImageLoadError | Connect2_LegacyShared | Utility | - | - | `Connect2_LegacyShared.Utility.HandleImageLoadError.mvc.js` |
| Icon | UBTConnectLibrary | ConnectPatterns | In_IconId: UBT_Icons2 Identifier (mandatory); In_ColorId: UBT_Color Identifier = neutral-9; In_SizeId: UBT_IconsSize Identifier; In_Visible: Boolean = True; In_ExtendedClasses: Text = "" | Click() | `UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` |
| IconBadge | UBTConnectLibrary | OutSystemsUIOverrides | Number: Long Integer (mandatory); Color: UBT_Color Identifier = Entities.UBT_Color.Primary; IsLight: Boolean; ExtendedClass: Text; MaxNumber: Integer = 9 | - | `UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc.js` |
| LayoutRuntime_Top | NavigationHandler | LayoutRuntime_NavigationHandler | - | - | `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js` |
| Layout_LoginFlow | UBTConnectLibrary | Layouts | In_HasOverlay: Boolean; In_ExtendedClass: Text; In_IsCommonBlock: Boolean | OnPathCalculated(); OnReady(MainContainerId: Text (mandatory)) | `UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc.js` |
| LoadingDots | UBTConnectLibrary | ConnectPatterns | isTriggerAnimation: Boolean (mandatory); In_Header_FinalHeightPercentage: Decimal; In_FinalCurvaturePercentage: Decimal = 100 | AnimationComplete() | `UBTConnectLibrary.ConnectPatterns.LoadingDots.mvc.js` |
| NavigationHandler | NavigationHandler | NavigationHandler | - | Navigation(NavigationEvent: Object (mandatory)) | `NavigationHandler.NavigationHandler.NavigationHandler.mvc.js` |
| OfflineDataSyncCore | OutSystemsUI_2_23 | Private | - | OnConfigure(); OnSync(SyncUnit: Text (mandatory)); OnSyncComplete(SyncUnit: Text (mandatory)); OnSyncError(SyncUnit: Text (mandatory); ErrorMessage: Text (mandatory)); OnSyncStart(SyncUnit: Text (mandatory)) | `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js` |
| PinUnlock_MobileWrapper | UBT_AppManager_Mobile | Fingerprint | In_PinLength: Integer (mandatory); In_ExtendedClasses: Text (mandatory); In_IsScanFingerprintOnReady: Boolean (mandatory); In_ForceVisible: Boolean; In_AllowBackNavigation: Boolean; In_HideFingerprint: Boolean | KeyPressed(); PincodeChange(InputLength: Integer (mandatory)); PinUnlockError(ErrorMessage: Text (mandatory)); PinUnlockSuccess(); Timeout(); UserLoggedOut() | `UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc.js` |
| PreventBackNavigation | NavigationHandler | NavigationHandler | - | BackNavigationPrevented(BackNavigationEvent: Object (mandatory)) | `NavigationHandler.NavigationHandler.PreventBackNavigation.mvc.js` |
| ProgressBar | OutSystemsUI_2_23 | Numbers | Progress: Integer (mandatory); ProgressColor: Color Identifier = primary; TrailColor: Color Identifier = neutral-4; Thickness: Integer = 12; OptionalConfigs: ProgressBarOptionalConfigs; ExtendedClass: Text | Initialized(ProgressBarId: Text (mandatory)) | - |
| PullToRefresh | OutSystemsUI_2_23 | Private | - | OnContentPull() | `OutSystemsUI_2_23.Private.PullToRefresh.mvc.js` |
| SVG_Background_Custom | UBTConnectLibrary | Layouts | In_Path: Text = ""; In_HeightPercentage: Decimal = 100; In_CurvaturePercentage: Decimal = 100; In_ExtendedClass: Text | OnPathCalculated() | `UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc.js` |
| SkeletonSection | UBTConnectLibrary | ConnectPatterns | In_IsLoading: Boolean (mandatory); In_ExtendedClass: Text; In_IsActiveWhileLoading: Boolean | - | `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js` |
| Tile | UBTConnectLibrary | ConnectPatterns | ExtendedClasses: Text | - | `UBTConnectLibrary.ConnectPatterns.Tile.mvc.js` |

## Referenced client actions called

| Action | Module | Folder | Inputs | Outputs |
|---|---|---|---|---|
| AddFavicon | OutSystemsUI_2_23 | Utilities | URL: Text (mandatory) | Success: Boolean; ErrorMessage: ErrorMessage |
| AllowUpcomingNavigation | NavigationHandler | NavigationHandler | - | - |
| AppManager_GetIsSupportedNativeVersion | UBT_AppManager | AppManager_SupportedVersion | - | IsSupportedNativeVersion: Boolean |
| AppManager_GetIsSupportedWebviewVersion | UBT_AppManager | AppManager_SupportedVersion | - | IsSupported: Boolean; IsAndroid: Boolean; IsApple: Boolean |
| AppManager_GetPIN_HasUnlocked | UBT_AppManager | AppManager_CachedVariables_Gettters | - | HasUnlocked: Boolean |
| AppManager_GetPIN_IsLocked | UBT_AppManager | AppManager_CachedVariables_Gettters | - | IsLocked: Boolean |
| AppManager_GetPIN_IsRegistering | UBT_AppManager | AppManager_CachedVariables_Gettters | - | IsRegistering: Boolean |
| AppManager_HandleDeviceAwarenessPopUp | UBT_AppManager | AppManager_Methods | ResetPasswordPopupId: Text (mandatory); LoginOperationGUID: Text (mandatory) | isCancelled: Boolean |
| AppManager_Login | UBT_AppManager | AppManager_Methods | isResetPassword: Boolean (mandatory); ConfirmationDialog_ResetPasswordId: Text; AppCallback: Text | - |
| AppManager_Logout | UBT_AppManager | AppManager_Methods | - | - |
| AppManager_OnReadyChecker | UBT_AppManager | AppManager_Initialization | - | isReady: Boolean |
| AppManager_SetAppCallback | UBT_AppManager | AppManager_CachedVariables_Settters | OutSystems_OriginalAppCallback: Text (mandatory) | - |
| BottomBarSlider_ForceRefresh | UBTConnectLibrary | BottomBar_Slider | - | - |
| BottomBar_GetList | UBTConnect_Utils | BottomBar | useMapsItems: Boolean; isHouseholder: Boolean (mandatory) | BottomBar_ItemsList: BottomBar_Item List |
| Cache_InvalidateEverything | UBTConnect_Utils | MemoryCache_Invalidation | - | - |
| Cache_UserInfo_Get | UBTConnect_Utils | MemoryCache_UserInfo | - | UserInformation: CacheControl_UserInformation; CacheResult: MemoryCacheResult |
| ConfigureOfflineDataSync | OutSystemsUI_2_23 | OfflineDataSync | SyncOnOnline: Boolean (mandatory); SyncOnResume: Boolean (mandatory); RetryOnError: Boolean (mandatory); RetryIntervalInSeconds: Integer (mandatory) | - |
| DelayedMessage_Show | UBT_AppManager | DelayedMessage | - | - |
| EndOfflineDataSync | OutSystemsUI_2_23 | OfflineDataSync | HasError: Boolean (mandatory); ErrorMessage: Text = ""; AllowRetry: Boolean | - |
| FeedbackMessage_AutoClose | UBTJavaScriptUtils | JSUtils_FeedbackMessage | Title: Text; Message: Text (mandatory); MessageType: UBT_MessageType Identifier = Entities.UBT_MessageType.Error; EncodedHTML: Boolean = True; ExtendedClass: Text; DelayMs: Integer = 0; useDebounce: Boolean | - |
| GetAndroidAppLinkData | Connect2_AndroidAppLinksPlugin | Public | - | EventData: EventData |
| GetColdStartDeeplinkURL | EventfulDeeplinksPlugin | - | - | Error: Error; Success: Boolean; URL: Text |
| Get_ConnectVersionDetails | UBTConnect_Utils | ApplicationInfo | - | Out_RuntimeVersion: Integer; Out_Environment: Text; Out_NativeVersion: Text |
| IsRTL | OutSystemsUI_2_23 | Utilities | - | IsRTL: Boolean |
| JSUtils_PageRedirect | UBTJavaScriptUtils | JSUtils | URL: Text (mandatory); NavigateIfSamePage: Boolean = True | - |
| LayoutDestroy | OutSystemsUI_2_23 | Application | - | - |
| LayoutReady | OutSystemsUI_2_23 | Application | - | - |
| ListIndexOf | (System) | - | List: Generic Record List (mandatory); Condition: Boolean (mandatory) | Position: Integer |
| OpenPolicy | UBTConnect_Utils | Policies | PolicyInformation: PolicyInformation2 (mandatory); ErrorMessage: Text = "This policy couldn't be found." | - |
| PIN_Check | UBT_AppManager | PIN | - | NeedRegister: Boolean; NeedUnlock: Boolean |
| PreventNavigation | NavigationHandler | NavigationHandler | NavigationEvent: Object (mandatory) | - |
| ReplaceOnUpcomingNavigation | NavigationHandler | NavigationHandler | - | - |
| ResetReplaceOnUpcomingNavigation | NavigationHandler | NavigationHandler | - | - |
| ScreenController_NavigateToPage | UBTJavaScriptUtils | JSUtils_ScreenController | URL: Text (mandatory); ReplaceInHistory: Boolean | - |
| SetBottomBarActiveElement | OutSystemsUI_2_23 | Menu | ActiveItem: Integer = -1 | Success: Boolean; ErrorMessage: ErrorMessage |
| SetLang | OutSystemsUI_2_23 | Accessibility | Lang: Text = "" | Success: Boolean; ErrorMessage: ErrorMessage |
| SetMenuIcon | OutSystemsUI_2_23 | Menu | MenuAction: MenuAction Identifier (mandatory) | Success: Boolean; ErrorMessage: ErrorMessage |
| SetMenuIconListeners | OutSystemsUI_2_23 | Menu | - | ErrorMessage: ErrorMessage; Success: Boolean |
| SkipToContent | OutSystemsUI_2_23 | Accessibility | TargetId: Text (mandatory) | Success: Boolean; ErrorMessage: ErrorMessage |
| StartOfflineDataSync | OutSystemsUI_2_23 | OfflineDataSync | SyncUnit: Text; DiscardPendingSyncUnits: Boolean | - |
| SyncAllOrbitStaticEntities | Connect2_OrbitMobile_MUI | Orbit_SyncStaticEntities | OrbitStaticEntities: StaticEntities_Orbit | - |
| SyncNotes | UBTConnect_Notes_MCS | Notes_LocalStorage | In_Notes: LocalNote List (mandatory) | - |
| SynchBookmarks | Connect2_LegacyShared | MyBookmarks_LocalStorage | UpdatedBookmarks: LocalBookmark List (mandatory) | - |
| SynchBookmarksC2 | UBTConnect_Bookmarks_MCS | Bookmarks_LocalStorage | In_UpdateBookmarks: LocalBookmark2 List (mandatory) | - |
| SynchronizeNumberUnreadMessages | Connect2_LegacyShared | Comms | - | - |
| ToggleSideMenu | OutSystemsUI_2_23 | Menu | - | Success: Boolean; ErrorMessage: ErrorMessage |

## Static entity records named by the flow (Entities.<Entity>.<Record>)

- **AnimationType** (OutSystemsUI_2_23): records used: BottomToTop, TopToBottom
  - BottomToTop: AnimationType="bottom-to-top"
  - TopToBottom: AnimationType="top-to-bottom"
- **AppManager_JSUtils_CustomEvents** (UBT_AppManager): records used: DeviceAwareness_InvalidDevice, IdP_OnLogin, IdP_OnResetPassword, PIN_NeedRegistration
  - DeviceAwareness_InvalidDevice: Label="DeviceAwareness_InvalidDevice"
  - IdP_OnLogin: Label="IdP_OnLogin"
  - IdP_OnResetPassword: Label="IdP_OnResetPassword"
  - PIN_NeedRegistration: Label="PIN_NeedRegistration"
- **Color** (OutSystemsUI_2_23): records used: Primary
  - Primary: Color="primary", Order=1
- **Connect_BottomBar_Items** (UBTConnect_Utils): records used: Bookmarks, Directory, Home, Menu, Updates
  - Bookmarks: Id="Bookmarks"
  - Directory: Id="Directory"
  - Home: Id="Home"
  - Menu: Id="Menu"
  - Updates: Id="Updates"
- **MenuAction** (OutSystemsUI_2_23): records used: Back, Hidden
  - Back: MenuAction="Back"
  - Hidden: MenuAction="Hidden"
- **Photobook_Speed** (UBTConnect): records used: EightSeconds
  - EightSeconds: Id=8000, Label="8s", Order=2
- **Speed** (OutSystemsUI_2_23): records used: Slow
  - Slow: Speed="slow"
- **UBT_Color** (UBTConnectLibrary): records used: Inherit, Neutral0, Neutral10, Neutral6, Primary, Red
  - Inherit: Color="inherit", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=69
  - Neutral0: Color="neutral-0", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=19
  - Neutral10: Color="neutral-10", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=29
  - Neutral6: Color="neutral-6", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=25
  - Primary: Color="primary", IsActive=True, IsBrand=True, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=1
  - Red: Color="red", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=10
- **UBT_Display** (UBTConnectLibrary): records used: Flex
  - Flex: Id="display-flex", Order=3
- **UBT_FontSize** (UBTConnectLibrary): records used: Base, DoubleExtraSmall, ExtraSmall, Small
  - Base: Id="base", Order=5
  - DoubleExtraSmall: Id="xxs", Order=1
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
- **UBT_MessageType** (UBTJavaScriptUtils): records used: Error, Info, Success
  - Error: Id=4, Label="Error"
  - Info: Id=1, Label="Info"
  - Success: Id=2, Label="Success"
- **UBT_Shape** (UBTConnectLibrary): records used: Large
  - Large: Id="large", Order=4
- **UBT_Size** (UBTConnectLibrary): records used: Base, ExtraLarge, Medium
  - Base: Id="base", Order=7
  - ExtraLarge: Id="xl", Order=10
  - Medium: Id="m", Order=8
