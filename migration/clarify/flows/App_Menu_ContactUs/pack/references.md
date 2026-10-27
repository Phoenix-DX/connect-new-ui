# Pack of UI flow App_Menu_ContactUs (DEV model, MCP dump of flows 2026-10-27)

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
| BackNavigationHandler | NavigationHandler | NavigationHandler | Priority: Integer | BackNavigation(BackNavigationEvent: Object (mandatory)) | `NavigationHandler.NavigationHandler.BackNavigationHandler.mvc.js` |
| Button | UBTConnect_Utils | CW_Common | ButtonExtendedClass: Text; IsDisabled: Boolean; IsIconOnRight: Boolean; ButtonText: Text (mandatory); IconText_SpacingSize: UBT_Size Identifier = xs; TextExtendedClasses: Text; ButtonOptions: ButtonOptions; IconId: UBT_Icons2 Identifier; HideIcon: Boolean | buttonOnClick() | `UBTConnect_Utils.CW_Common.Button.mvc.js` |
| Button | UBTConnectLibrary | ConnectPatterns | In_ButtonOptions: ButtonOptions; In_ExtendedClass: Text; In_IsDisabled: Boolean | Event_OnClick() | `UBTConnectLibrary.ConnectPatterns.Button.mvc.js` |
| ButtonLoading | OutSystemsUI_2_23 | Utilities2 | IsLoading: Boolean (mandatory); ShowLabelOnLoading: Boolean; ExtendedClass: Text | Initialized(ButtonLoadingId: Text (mandatory)) | `OutSystemsUI_2_23.Utilities.ButtonLoading.mvc.js` |
| CacheControl_Policies | UBTConnect_Utils | CacheControl | CacheKey: Text; TimeToLiveSeconds: Integer = 7200 | Result(CacheControl_Response: CacheControl_Policies) | `UBTConnect_Utils.CacheControl.CacheControl_Policies.mvc.js` |
| CacheControl_UserInfo | UBTConnect_Utils | CacheControl | CacheKey: Text | Result(CacheControl_Response: CacheControl_UserInformation) | `UBTConnect_Utils.CacheControl.CacheControl_UserInfo.mvc.js` |
| CircleButton_IconPrimary | UBTConnectLibrary | ConnectPatterns | ExtendedClasses: Text; IconId: UBT_Icons2 Identifier (mandatory); Text: Text; isEnabled: Boolean = True; IconBackgroundColorId: UBT_Color Identifier = cyan-lightest; IconColorId: UBT_Color Identifier = cyan-darker | OnClick() | `UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc.js` |
| CircleButton_WithLabel | UBTConnectLibrary | ConnectPatterns | SizeId: UBT_AvatarSize Identifier; BackgroundColorId: UBT_Color Identifier; BorderColorId: UBT_Color Identifier; ExtendedClasses: Text; IsProcessing: Boolean; PaddingSize: UBT_Size Identifier = s; In_BadgeIcon: AvatarIconOptions | OnClick() | `UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc.js` |
| Columns_Three | UBTConnectLibrary | BasePatterns | ExtendedClasses: Text; ColumnOptions: ColumnOptions | - | `UBTConnectLibrary.BasePatterns.Columns_Three.mvc.js` |
| Columns_Two | UBTConnectLibrary | BasePatterns | ColumnOptions: ColumnOptions; ExtendedClasses: Text | - | `UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js` |
| ContactPopup_ByPhone | UBTConnect_Utils | CW_CTA_PopUps | In_CallPopupData: ContactByPhonePopupData (mandatory); In_ImageSizeId: UBT_ImageSize Identifier = xl | Event_Call(Event_Number: Text (mandatory)); Event_Cancel() | `UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc.js` |
| CustomContainer | UBTConnectLibrary | BasePatterns | ExtendedClasses: Text; Options: ContainerOptions | Clicked() | `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` |
| CustomText | UBTConnectLibrary | BasePatterns | In_Text: Text (mandatory); In_TextOptions: TextOptions (mandatory); In_PaddingOptions: SpacingOptions; In_HighlightWords: Text; In_HighlightOptions: TextOptions; ExtendedClasses: Text; FitContent: Boolean; InJustifyText: Boolean; NoWrap: Boolean; InlineIcon: InlineIcon | Clicked() | `UBTConnectLibrary.BasePatterns.CustomText.mvc.js` |
| DeeplinkHandlerCentral | EventfulDeeplinksPlugin | EventfulDeeplinksPlugin | - | OnDeeplinkOpen(URL: Text (mandatory)) | - |
| Dialog_AccessRestrictedAction | UBTConnect_Utils | CW_App_Common_Blocks_PopupDialogs | In_ExtendedClass: Text | - | `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc.js` |
| FixedFooter | UBTConnectLibrary | ConnectPatterns | useBottomBar: Boolean (mandatory); ExpectedFooterHeight: Text (mandatory); ContentContainerId: Text (mandatory) | - | `UBTConnectLibrary.ConnectPatterns.FixedFooter.mvc.js` |
| HandleImageLoadError | Connect2_LegacyShared | Utility | - | - | `Connect2_LegacyShared.Utility.HandleImageLoadError.mvc.js` |
| Icon | UBTConnectLibrary | ConnectPatterns | In_IconId: UBT_Icons2 Identifier (mandatory); In_ColorId: UBT_Color Identifier = neutral-9; In_SizeId: UBT_IconsSize Identifier; In_Visible: Boolean = True; In_ExtendedClasses: Text = "" | Click() | `UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` |
| IconText | UBTConnectLibrary | ConnectPatterns | IsIconOnRight: Boolean; Text: Text (mandatory); TextOptions: TextOptions; SpacingSize: UBT_Size Identifier = xs; ExtendedClasses: Text; SubtextOptions: TextOptions; In_Subtext: Text; In_JustifyText: Boolean | Clicked() | `UBTConnectLibrary.ConnectPatterns.IconText.mvc.js` |
| Input | UBTConnectLibrary | ConnectPatterns | In_Options: SearchInput; In_ExtendedClasses: Text = "" | Event_ClearString(); Event_OnChange(Event_CurrentString: Text (mandatory)); Event_OnFocus(); Event_OnReady(Id: Text (mandatory)); Event_Submit(Event_SubmittedString: Text (mandatory)) | `UBTConnectLibrary.ConnectPatterns.Input.mvc.js` |
| Layout_DetailPage | UBTConnectLibrary | Layouts | In_AlignTitleLeft: Boolean; In_IsPrimaryColor: Boolean = True; In_ExtendedClass: Text; In_EnableAccessibilityFeatures: Boolean; In_InitializeNavigationHandler: Boolean = True; In_IsHideTitle: Boolean | OnReadyEvent(WrapperContainerId: Text (mandatory)) | `UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js` |
| Layout_LoginFlow | UBTConnectLibrary | Layouts | In_HasOverlay: Boolean; In_ExtendedClass: Text; In_IsCommonBlock: Boolean | OnPathCalculated(); OnReady(MainContainerId: Text (mandatory)) | `UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc.js` |
| NavigationConfirmationDialog | NavigationHandler | ConfirmationDialogs | - | Navigation(NavigationEvent: Object (mandatory)) | `NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc.js` |
| OfflineDataSyncCore | OutSystemsUI_2_23 | Private | - | OnConfigure(); OnSync(SyncUnit: Text (mandatory)); OnSyncComplete(SyncUnit: Text (mandatory)); OnSyncError(SyncUnit: Text (mandatory); ErrorMessage: Text (mandatory)); OnSyncStart(SyncUnit: Text (mandatory)) | `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js` |
| PinUnlock_MobileWrapper | UBT_AppManager_Mobile | Fingerprint | In_PinLength: Integer (mandatory); In_ExtendedClasses: Text (mandatory); In_IsScanFingerprintOnReady: Boolean (mandatory); In_ForceVisible: Boolean; In_AllowBackNavigation: Boolean; In_HideFingerprint: Boolean | KeyPressed(); PincodeChange(InputLength: Integer (mandatory)); PinUnlockError(ErrorMessage: Text (mandatory)); PinUnlockSuccess(); Timeout(); UserLoggedOut() | `UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc.js` |
| PreventBackNavigation | NavigationHandler | NavigationHandler | - | BackNavigationPrevented(BackNavigationEvent: Object (mandatory)) | `NavigationHandler.NavigationHandler.PreventBackNavigation.mvc.js` |
| RangeSlider | OutSystemsUI_2_23 | Interaction | MinValue: Decimal (mandatory); MaxValue: Decimal (mandatory); StartingValue: Decimal (mandatory); Orientation: Orientation Identifier = horizontal; Size: Text = "100%"; OptionalConfigs: RangeSliderOptionalConfigs; ExtendedClass: Text | Initialized(RangeSliderId: Text (mandatory)); OnValueChange(RangeSliderId: Text (mandatory); Value: Decimal (mandatory)) | `OutSystemsUI_2_23.Interaction.RangeSlider.mvc.js` |
| SkeletonSection | UBTConnectLibrary | ConnectPatterns | In_IsLoading: Boolean (mandatory); In_ExtendedClass: Text; In_IsActiveWhileLoading: Boolean | - | `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js` |
| SubLayout_Section | UBTConnectLibrary | Layouts | MarginTop: UBT_Size Identifier = Entities.UBT_Size.ExtraSmall; ExtendedClasses: Text | Clicked() | `UBTConnectLibrary.Layouts.SubLayout_Section.mvc.js` |
| TextArea_WithCounter | UBTConnectLibrary | ConnectPatterns | In_InitialLength: Integer (mandatory) | - | `UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc.js` |

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
| ConfigureOfflineDataSync | OutSystemsUI_2_23 | OfflineDataSync | SyncOnOnline: Boolean (mandatory); SyncOnResume: Boolean (mandatory); RetryOnError: Boolean (mandatory); RetryIntervalInSeconds: Integer (mandatory) | - |
| ConfirmAction | NavigationHandler | NavigationHandler_Confirmation | ActionConfirmationDialogWidgetId: Text (mandatory) | IsConfirmed: Boolean |
| EndOfflineDataSync | OutSystemsUI_2_23 | OfflineDataSync | HasError: Boolean (mandatory); ErrorMessage: Text = ""; AllowRetry: Boolean | - |
| FeedbackMessage_AutoClose | UBTJavaScriptUtils | JSUtils_FeedbackMessage | Title: Text; Message: Text (mandatory); MessageType: UBT_MessageType Identifier = Entities.UBT_MessageType.Error; EncodedHTML: Boolean = True; ExtendedClass: Text; DelayMs: Integer = 0; useDebounce: Boolean | - |
| IsEmailValid | UBTConnectLibrary | Utilities_JavaScript | In_Text: Text (mandatory) | Out_Valid: Boolean |
| IsPhoneNumberValid | UBTConnectLibrary | Utilities_JavaScript | In_Text: Text (mandatory) | Out_Valid: Boolean |
| JSUtils_String_CheckNumbers | UBTJavaScriptUtils | JSUtils_StringManipulation | Text: Text (mandatory) | Found: Boolean |
| ListAppendAll | (System) | - | List: Generic Record List (mandatory); SourceList: Generic Record List (mandatory) | - |
| ListIndexOf | (System) | - | List: Generic Record List (mandatory); Condition: Boolean (mandatory) | Position: Integer |
| OpenPolicy | UBTConnect_Utils | Policies | PolicyInformation: PolicyInformation2 (mandatory); ErrorMessage: Text = "This policy couldn't be found." | - |
| PIN_Check | UBT_AppManager | PIN | - | NeedRegister: Boolean; NeedUnlock: Boolean |
| PreventNavigation | NavigationHandler | NavigationHandler | NavigationEvent: Object (mandatory) | - |
| ResetReplaceOnUpcomingNavigation | NavigationHandler | NavigationHandler | - | - |

## Static entity records named by the flow (Entities.<Entity>.<Record>)

- **Type_ContactSubject** (Connect_Communication_CS): records used: CommunityEvents, GeneralQuestions, GeneralQuestionsOrSuggestions, GeneralSuggestionsFeedbackRating, HouseholdDetailsAndProfile, LoginWithUBTOne, SetupAUBTOneAccount, SubscriptionsAndPayments
  - CommunityEvents: Id="Community Events", Order=5
  - GeneralQuestions: Id="General Questions ", Order=7
  - GeneralQuestionsOrSuggestions: Id="General Questions or Suggestions", Order=9
  - GeneralSuggestionsFeedbackRating: Id="General Suggestions, Feedback & Rating", Order=8
  - HouseholdDetailsAndProfile: Id="Household Details & Profile", Order=4
  - LoginWithUBTOne: Id="Log in with UBT One", Order=2
  - SetupAUBTOneAccount: Id="Set up a UBT One account", Order=1
  - SubscriptionsAndPayments: Id="Subscriptions and Payments", Order=3
- **UBT_AvatarSize** (UBTConnectLibrary): records used: Base_52
  - Base_52: Id="base", Order=4
- **UBT_Color** (UBTConnectLibrary): records used: GreenDarker, GreenLightest, Inherit, Neutral0, Neutral1, Neutral10, Neutral3, Neutral4, Neutral5, Neutral6, Neutral7, Neutral8, Neutral9, Primary, Transparent
  - GreenDarker: Color="green-darker", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=67
  - GreenLightest: Color="green-lightest", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=63
  - Inherit: Color="inherit", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=69
  - Neutral0: Color="neutral-0", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=19
  - Neutral1: Color="neutral-1", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=20
  - Neutral10: Color="neutral-10", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=29
  - Neutral3: Color="neutral-3", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=22
  - Neutral4: Color="neutral-4", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=23
  - Neutral5: Color="neutral-5", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=24
  - Neutral6: Color="neutral-6", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=25
  - Neutral7: Color="neutral-7", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=26
  - Neutral8: Color="neutral-8", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=27
  - Neutral9: Color="neutral-9", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=28
  - Primary: Color="primary", IsActive=True, IsBrand=True, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=1
  - Transparent: Color="transparent", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=18
- **UBT_ColumnBehaviour** (UBTConnectLibrary): records used: ExpandMiddle
  - ExpandMiddle: Id="expand-middle", Order=4
- **UBT_Display** (UBTConnectLibrary): records used: Flex
  - Flex: Id="display-flex", Order=3
- **UBT_FontSize** (UBTConnectLibrary): records used: Base, ExtraSmall, Heading1, Small
  - Base: Id="base", Order=5
  - ExtraSmall: Id="xs", Order=3
  - Heading1: Id="h1", Order=11
  - Small: Id="s", Order=4
- **UBT_FontWeight** (UBTConnectLibrary): records used: Bold, Regular, SemiBold
  - Bold: Id="bold", Order=5
  - Regular: Id="regular", Order=2
  - SemiBold: Id="semi-bold", Order=4
- **UBT_Icons2** (UBTConnectLibrary): records used: AccountCircle, Backspace, BookOpen, Checkbox, CheckboxOutlineBlank, Fingerprint, Mail, OpenNew, PersonAdd, PersonPlay, ShoppingBasket, Tooltip, UBT
  - AccountCircle: Id="connect-icon-account_circle", Is_Active=True, Label="Account Circle"
  - Backspace: Id="connect-icon-backspace", Is_Active=True, Label="Backspace"
  - BookOpen: Id="connect-icon-book_open", Is_Active=True, Label="Book Open"
  - Checkbox: Id="connect-icon-checkbox", Is_Active=True, Label="Checkbox"
  - CheckboxOutlineBlank: Id="connect-icon-checkbox_outline_blank", Is_Active=True, Label="Checkbox Outline Blank"
  - Fingerprint: Id="connect-icon-fingerprint", Is_Active=True, Label="Fingerprint"
  - Mail: Id="connect-icon-mail", Is_Active=True, Label="Mail"
  - OpenNew: Id="connect-icon-open_new", Is_Active=True, Label="Open New"
  - PersonAdd: Id="connect-icon-person_add", Is_Active=True, Label="Person Add"
  - PersonPlay: Id="connect-icon-person_play", Is_Active=True, Label="Person Play"
  - ShoppingBasket: Id="connect-icon-shopping_basket", Is_Active=True, Label="Shopping Basket"
  - Tooltip: Id="connect-icon-tooltip", Is_Active=True, Label="Tooltip"
  - UBT: Id="connect-icon-ubt", Is_Active=True, Label="UBT"
- **UBT_IconsSize** (UBTConnectLibrary): records used: Base_24, Display_36
  - Base_24: Label="icon-base", Order=3
  - Display_36: Label="icon-display", Order=4
- **UBT_ImageSize** (UBTConnectLibrary): records used: Auto
  - Auto: Id="auto", Order=13
- **UBT_JustifyContent** (UBTConnectLibrary): records used: Center
  - Center: Id="justify-content-center", Order=2
- **UBT_MessageType** (UBTJavaScriptUtils): records used: Error
  - Error: Id=4, Label="Error"
- **UBT_Shadow** (UBTConnectLibrary): records used: ExtraSmallTop
  - ExtraSmallTop: Id="xs-top", Order=10
- **UBT_Shape** (UBTConnectLibrary): records used: Large, Soft
  - Large: Id="large", Order=4
  - Soft: Id="soft", Order=2
- **UBT_Size** (UBTConnectLibrary): records used: Base, ExtraLarge, ExtraSmall, Medium, None, Small
  - Base: Id="base", Order=7
  - ExtraLarge: Id="xl", Order=10
  - ExtraSmall: Id="xs", Order=2
  - Medium: Id="m", Order=8
  - None: Id="none", Order=1
  - Small: Id="s", Order=4
- **UBT_VerticalAlign** (UBTConnectLibrary): records used: Center
  - Center: Id="center", Order=2
