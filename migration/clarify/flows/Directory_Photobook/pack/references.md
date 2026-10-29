# Pack of UI flow Directory_Photobook (DEV model, MCP dump of flows 2026-10-27)

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
| BottomSheet | OutSystemsUI_2_23 | Interaction | Shape: Shape Identifier = soft; ShowHandler: Boolean = True; ExtendedClass: Text | Initialized(BottomSheetId: Text (mandatory)); OnToggle(BottomSheetId: Text (mandatory); IsOpen: Boolean) | `OutSystemsUI_2_23.Interaction.BottomSheet.mvc.js` |
| BottomSheet | UBTConnectLibrary | ConnectPatterns | Title: Text (mandatory); ShowHandlerPreview: Boolean; HandlerPreviewOffset: Text; ShowHeader: Boolean = True; Content_BackgroundColorId: UBT_Color Identifier; Content_Padding: SpacingOptions; FooterHeight: Text = "0px"; ExtendedClasses: Text; isTransparentOverlay: Boolean; CloseOnClickOutsite: Boolean; ShowBackButton: Boolean; IsNotInertWhenClosed: Boolean; IsHideContentWhenClosed: Boolean; In_TouchActionNoneFix: Boolean | Initialized(Id: Text (mandatory)); OnBack(); OnClose(); OnToggle(IsOpen: Boolean (mandatory)) | `UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc.js` |
| Button | UBTConnect_Utils | CW_Common | ButtonExtendedClass: Text; IsDisabled: Boolean; IsIconOnRight: Boolean; ButtonText: Text (mandatory); IconText_SpacingSize: UBT_Size Identifier = xs; TextExtendedClasses: Text; ButtonOptions: ButtonOptions; IconId: UBT_Icons2 Identifier; HideIcon: Boolean | buttonOnClick() | `UBTConnect_Utils.CW_Common.Button.mvc.js` |
| Button | UBTConnectLibrary | ConnectPatterns | In_ButtonOptions: ButtonOptions; In_ExtendedClass: Text; In_IsDisabled: Boolean | Event_OnClick() | `UBTConnectLibrary.ConnectPatterns.Button.mvc.js` |
| CacheControl_Policies | UBTConnect_Utils | CacheControl | CacheKey: Text; TimeToLiveSeconds: Integer = 7200 | Result(CacheControl_Response: CacheControl_Policies) | `UBTConnect_Utils.CacheControl.CacheControl_Policies.mvc.js` |
| Carousel | OutSystemsUI_2_23 | Interaction | Navigation: CarouselNavigation Identifier = both; Height: Text = "auto"; ItemsPerSlide: CarouselItems; OptionalConfigs: CarouselOptionalConfigs; ExtendedClass: Text | Initialized(CarouselId: Text (mandatory)); OnSlideMoved(CarouselId: Text (mandatory); ItemIndex: Integer) | `OutSystemsUI_2_23.Interaction.Carousel.mvc.js` |
| Columns_Two | UBTConnectLibrary | BasePatterns | ColumnOptions: ColumnOptions; ExtendedClasses: Text | - | `UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js` |
| CustomContainer | UBTConnectLibrary | BasePatterns | ExtendedClasses: Text; Options: ContainerOptions | Clicked() | `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` |
| CustomText | UBTConnectLibrary | BasePatterns | In_Text: Text (mandatory); In_TextOptions: TextOptions (mandatory); In_PaddingOptions: SpacingOptions; In_HighlightWords: Text; In_HighlightOptions: TextOptions; ExtendedClasses: Text; FitContent: Boolean; InJustifyText: Boolean; NoWrap: Boolean; InlineIcon: InlineIcon | Clicked() | `UBTConnectLibrary.BasePatterns.CustomText.mvc.js` |
| DeeplinkHandlerCentral | EventfulDeeplinksPlugin | EventfulDeeplinksPlugin | - | OnDeeplinkOpen(URL: Text (mandatory)) | - |
| Dialog_AccessRestrictedAction | UBTConnect_Utils | CW_App_Common_Blocks_PopupDialogs | In_ExtendedClass: Text | - | `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc.js` |
| HandleImageLoadError | Connect2_LegacyShared | Utility | - | - | `Connect2_LegacyShared.Utility.HandleImageLoadError.mvc.js` |
| Icon | UBTConnectLibrary | ConnectPatterns | In_IconId: UBT_Icons2 Identifier (mandatory); In_ColorId: UBT_Color Identifier = neutral-9; In_SizeId: UBT_IconsSize Identifier; In_Visible: Boolean = True; In_ExtendedClasses: Text = "" | Click() | `UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` |
| IconText | UBTConnectLibrary | ConnectPatterns | IsIconOnRight: Boolean; Text: Text (mandatory); TextOptions: TextOptions; SpacingSize: UBT_Size Identifier = xs; ExtendedClasses: Text; SubtextOptions: TextOptions; In_Subtext: Text; In_JustifyText: Boolean | Clicked() | `UBTConnectLibrary.ConnectPatterns.IconText.mvc.js` |
| LayoutRuntime_Top | NavigationHandler | LayoutRuntime_NavigationHandler | - | - | `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js` |
| Layout_LoginFlow | UBTConnectLibrary | Layouts | In_HasOverlay: Boolean; In_ExtendedClass: Text; In_IsCommonBlock: Boolean | OnPathCalculated(); OnReady(MainContainerId: Text (mandatory)) | `UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc.js` |
| OfflineDataSyncCore | OutSystemsUI_2_23 | Private | - | OnConfigure(); OnSync(SyncUnit: Text (mandatory)); OnSyncComplete(SyncUnit: Text (mandatory)); OnSyncError(SyncUnit: Text (mandatory); ErrorMessage: Text (mandatory)); OnSyncStart(SyncUnit: Text (mandatory)) | `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js` |
| PanZoom | PanZoom | PanZoom | ExtendedClass: Text; DoubleClickEnablesZoom: Boolean | MinZoomReached(); ZoomIn() | `PanZoom.PanZoom.PanZoom.mvc.js` |
| PinUnlock_MobileWrapper | UBT_AppManager_Mobile | Fingerprint | In_PinLength: Integer (mandatory); In_ExtendedClasses: Text (mandatory); In_IsScanFingerprintOnReady: Boolean (mandatory); In_ForceVisible: Boolean; In_AllowBackNavigation: Boolean; In_HideFingerprint: Boolean | KeyPressed(); PincodeChange(InputLength: Integer (mandatory)); PinUnlockError(ErrorMessage: Text (mandatory)); PinUnlockSuccess(); Timeout(); UserLoggedOut() | `UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc.js` |
| PreventBackNavigation | NavigationHandler | NavigationHandler | - | BackNavigationPrevented(BackNavigationEvent: Object (mandatory)) | `NavigationHandler.NavigationHandler.PreventBackNavigation.mvc.js` |
| SanitizedHtml | ReactiveHtmlSanitizer | HtmlSanitizer | Value: Text (mandatory); ResetWhitelist: Boolean (mandatory); AllowedAttributes: Text; DisallowedAttributes: Text; AllowedTags: Text; DisallowedTags: Text; AllowedCssStyles: Text; DisallowedCssStyles: Text | - | `ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc.js` |
| SkeletonSection | UBTConnectLibrary | ConnectPatterns | In_IsLoading: Boolean (mandatory); In_ExtendedClass: Text; In_IsActiveWhileLoading: Boolean | - | `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js` |
| TouchEvents | OutSystemsUI_2_23 | Utilities2 | WidgetId: Text (mandatory); PreventDefaults: Boolean = True | End(X: Decimal (mandatory); Y: Decimal (mandatory); OffsetX: Decimal (mandatory); OffsetY: Decimal (mandatory); TimeTaken: Decimal (mandatory)); Move(X: Decimal (mandatory); Y: Decimal (mandatory); OffsetX: Decimal (mandatory); OffsetY: Decimal (mandatory); Evt: Object (mandatory)); Start(X: Decimal (mandatory); Y: Decimal (mandatory)) | `OutSystemsUI_2_23.Utilities.TouchEvents.mvc.js` |
| UBT_LazyImage | UBTConnect_Utils | CW_Image | ImageURL: Text; EntityId: Text (mandatory); EntityType: Connect_Entity Identifier (mandatory); ImageSize: LazyImageSize; ExtendedClass: Text; In_BorderRadius: UBT_Shape Identifier; In_HighRes: Boolean; HasErrorMessage: Boolean; In_ForceLoadingState: Boolean | - | `UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc.js` |

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
| BottomSheetClose | OutSystemsUI_2_23 | BottomSheet | WidgetId: Text (mandatory) | Success: Boolean; ErrorMessage: ErrorMessage |
| BottomSheetOpen | OutSystemsUI_2_23 | BottomSheet | WidgetId: Text (mandatory) | Success: Boolean; ErrorMessage: ErrorMessage |
| CarouselGoTo | OutSystemsUI_2_23 | Carousel | WidgetId: Text (mandatory); ItemIndex: Integer (mandatory) | Success: Boolean; ErrorMessage: ErrorMessage |
| CarouselToggleDrag | OutSystemsUI_2_23 | Carousel | WidgetId: Text (mandatory); HasDrag: Boolean (mandatory) | Success: Boolean; ErrorMessage: ErrorMessage |
| ConfigureOfflineDataSync | OutSystemsUI_2_23 | OfflineDataSync | SyncOnOnline: Boolean (mandatory); SyncOnResume: Boolean (mandatory); RetryOnError: Boolean (mandatory); RetryIntervalInSeconds: Integer (mandatory) | - |
| EndOfflineDataSync | OutSystemsUI_2_23 | OfflineDataSync | HasError: Boolean (mandatory); ErrorMessage: Text = ""; AllowRetry: Boolean | - |
| FeedbackMessage_AutoClose | UBTJavaScriptUtils | JSUtils_FeedbackMessage | Title: Text; Message: Text (mandatory); MessageType: UBT_MessageType Identifier = Entities.UBT_MessageType.Error; EncodedHTML: Boolean = True; ExtendedClass: Text; DelayMs: Integer = 0; useDebounce: Boolean | - |
| GetHasCarouselEnabled | UBTConnect_Utils | Permissions_FF_Wrappers_OutSystems | - | HasCarouselEnabled: Boolean |
| JSUtils_Console_Log | UBTJavaScriptUtils | JSUtils_Console | Message: Text (mandatory) | - |
| ListIndexOf | (System) | - | List: Generic Record List (mandatory); Condition: Boolean (mandatory) | Position: Integer |
| OpenPolicy | UBTConnect_Utils | Policies | PolicyInformation: PolicyInformation2 (mandatory); ErrorMessage: Text = "This policy couldn't be found." | - |
| PIN_Check | UBT_AppManager | PIN | - | NeedRegister: Boolean; NeedUnlock: Boolean |
| PreventNavigation | NavigationHandler | NavigationHandler | NavigationEvent: Object (mandatory) | - |
| ReplaceOnUpcomingNavigation | NavigationHandler | NavigationHandler | - | - |
| ResetReplaceOnUpcomingNavigation | NavigationHandler | NavigationHandler | - | - |
| SetPreloadObject | NavigationHandler | Preloading | Preload: Object (mandatory) | - |
| SetSplideConfigs | OutSystemsUI_2_23 | Carousel | WidgetId: Text (mandatory); ProviderConfigs: SplideConfigs | Success: Boolean; ErrorMessage: ErrorMessage |
| SetSplideEvent | OutSystemsUI_2_23 | Carousel | WidgetId: Text (mandatory); EventName: Text (mandatory); Handler: Object | SplideEventId: Text; Success: Boolean; ErrorMessage: ErrorMessage |

## Static entity records named by the flow (Entities.<Entity>.<Record>)

- **BooleanTypes** (OutSystemsUI_2_23): records used: False, True, Unset
  - True: Label="true", Order=2
  - Unset: Label="unset", Order=1
- **CarouselNavigation** (OutSystemsUI_2_23): records used: None
  - None: Type="none"
- **Connect_Entity** (Connect_CommonEntities_DB): records used: Household
  - Household: APIKey="Household", Id="Household", Is_Active=True, Label="Household", Order=1
- **Photobook_Speed** (UBTConnect): records used: EightSeconds, FifteenSeconds, FiveSeconds
  - EightSeconds: Id=8000, Label="8s", Order=2
  - FifteenSeconds: Id=15000, Label="15s", Order=3
  - FiveSeconds: Id=5000, Label="5s", Order=1
- **UBT_AlignItems** (UBTConnectLibrary): records used: Center, FlexStart
  - Center: Id="align-items-center", Order=2
  - FlexStart: Id="align-items-flex-start", Order=1
- **UBT_Color** (UBTConnectLibrary): records used: CyanDarker, CyanLightest, Inherit, Neutral0, Neutral10, Neutral9, Primary
  - CyanDarker: Color="cyan-darker", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=61
  - CyanLightest: Color="cyan-lightest", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=57
  - Inherit: Color="inherit", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=69
  - Neutral0: Color="neutral-0", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=19
  - Neutral10: Color="neutral-10", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=29
  - Neutral9: Color="neutral-9", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=28
  - Primary: Color="primary", IsActive=True, IsBrand=True, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=1
- **UBT_Display** (UBTConnectLibrary): records used: Flex
  - Flex: Id="display-flex", Order=3
- **UBT_FlexDirection** (UBTConnectLibrary): records used: Column, Row
  - Column: Id="flex-direction-column", Order=1
  - Row: Id="flex-direction-row", Order=3
- **UBT_FontSize** (UBTConnectLibrary): records used: Base, Display, Heading6, Small
  - Base: Id="base", Order=5
  - Display: Id="display", Order=12
  - Heading6: Id="h6", Order=6
  - Small: Id="s", Order=4
- **UBT_FontWeight** (UBTConnectLibrary): records used: Bold, SemiBold
  - Bold: Id="bold", Order=5
  - SemiBold: Id="semi-bold", Order=4
- **UBT_Icons2** (UBTConnectLibrary): records used: Backspace, Clock, Close, Family, Fingerprint, Info, OpenNew, Pause, PlayArrow, Replay
  - Backspace: Id="connect-icon-backspace", Is_Active=True, Label="Backspace"
  - Clock: Id="connect-icon-clock", Is_Active=True, Label="Clock"
  - Close: Id="connect-icon-close", Is_Active=True, Label="Close"
  - Family: Id="connect-icon-family", Is_Active=True, Label="Family"
  - Fingerprint: Id="connect-icon-fingerprint", Is_Active=True, Label="Fingerprint"
  - Info: Id="connect-icon-info", Is_Active=True, Label="Info"
  - OpenNew: Id="connect-icon-open_new", Is_Active=True, Label="Open New"
  - Pause: Id="connect-icon-pause", Is_Active=True, Label="Pause"
  - PlayArrow: Id="connect-icon-play_arrow", Is_Active=True, Label="Play Arrow"
  - Replay: Id="connect-icon-replay", Is_Active=True, Label="Replay"
- **UBT_IconsSize** (UBTConnectLibrary): records used: Base_24, Display_36, NonStandard_64
  - Base_24: Label="icon-base", Order=3
  - Display_36: Label="icon-display", Order=4
  - NonStandard_64: Label="icon-non-standard-64", Order=8
- **UBT_ImageSize** (UBTConnectLibrary): records used: MaxHeight_100vh, MaxWidth_100vw, Small_40
  - MaxHeight_100vh: Id="max-height", Order=9
  - MaxWidth_100vw: Id="max-width", Order=10
  - Small_40: Id="s", Order=2
- **UBT_JustifyContent** (UBTConnectLibrary): records used: Center, FlexEnd
  - Center: Id="justify-content-center", Order=2
  - FlexEnd: Id="justify-content-flex-end", Order=3
- **UBT_MessageType** (UBTJavaScriptUtils): records used: Error
  - Error: Id=4, Label="Error"
- **UBT_Shape** (UBTConnectLibrary): records used: Circle, Large, Rounded, Soft
  - Circle: Id="circle", Order=6
  - Large: Id="large", Order=4
  - Rounded: Id="rounded", Order=5
  - Soft: Id="soft", Order=2
- **UBT_Size** (UBTConnectLibrary): records used: Base, DoubleExtraLarge, ExtraLarge, ExtraSmall, Medium, None, Small
  - Base: Id="base", Order=7
  - DoubleExtraLarge: Id="xxl", Order=11
  - ExtraLarge: Id="xl", Order=10
  - ExtraSmall: Id="xs", Order=2
  - Medium: Id="m", Order=8
  - None: Id="none", Order=1
  - Small: Id="s", Order=4
- **UBT_Visibility** (UBTConnectLibrary): records used: Hidden, Visible
  - Hidden: Id="hidden", Order=2
  - Visible: Id="visible", Order=1
