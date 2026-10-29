# Pack of UI flow App_Policies (DEV model, MCP dump of flows 2026-10-27)

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
| CacheControl_Policies | UBTConnect_Utils | CacheControl | CacheKey: Text; TimeToLiveSeconds: Integer = 7200 | Result(CacheControl_Response: CacheControl_Policies) | `UBTConnect_Utils.CacheControl.CacheControl_Policies.mvc.js` |
| Columns_Two | UBTConnectLibrary | BasePatterns | ColumnOptions: ColumnOptions; ExtendedClasses: Text | - | `UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js` |
| CustomContainer | UBTConnectLibrary | BasePatterns | ExtendedClasses: Text; Options: ContainerOptions | Clicked() | `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` |
| CustomText | UBTConnectLibrary | BasePatterns | In_Text: Text (mandatory); In_TextOptions: TextOptions (mandatory); In_PaddingOptions: SpacingOptions; In_HighlightWords: Text; In_HighlightOptions: TextOptions; ExtendedClasses: Text; FitContent: Boolean; InJustifyText: Boolean; NoWrap: Boolean; InlineIcon: InlineIcon | Clicked() | `UBTConnectLibrary.BasePatterns.CustomText.mvc.js` |
| DeeplinkHandlerCentral | EventfulDeeplinksPlugin | EventfulDeeplinksPlugin | - | OnDeeplinkOpen(URL: Text (mandatory)) | - |
| Dialog_AccessRestrictedAction | UBTConnect_Utils | CW_App_Common_Blocks_PopupDialogs | In_ExtendedClass: Text | - | `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc.js` |
| FixedFooter | UBTConnectLibrary | ConnectPatterns | useBottomBar: Boolean (mandatory); ExpectedFooterHeight: Text (mandatory); ContentContainerId: Text (mandatory) | - | `UBTConnectLibrary.ConnectPatterns.FixedFooter.mvc.js` |
| HandleImageLoadError | Connect2_LegacyShared | Utility | - | - | `Connect2_LegacyShared.Utility.HandleImageLoadError.mvc.js` |
| Icon | UBTConnectLibrary | ConnectPatterns | In_IconId: UBT_Icons2 Identifier (mandatory); In_ColorId: UBT_Color Identifier = neutral-9; In_SizeId: UBT_IconsSize Identifier; In_Visible: Boolean = True; In_ExtendedClasses: Text = "" | Click() | `UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` |
| Layout_LoginFlow | UBTConnectLibrary | Layouts | In_HasOverlay: Boolean; In_ExtendedClass: Text; In_IsCommonBlock: Boolean | OnPathCalculated(); OnReady(MainContainerId: Text (mandatory)) | `UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc.js` |
| OfflineDataSyncCore | OutSystemsUI_2_23 | Private | - | OnConfigure(); OnSync(SyncUnit: Text (mandatory)); OnSyncComplete(SyncUnit: Text (mandatory)); OnSyncError(SyncUnit: Text (mandatory); ErrorMessage: Text (mandatory)); OnSyncStart(SyncUnit: Text (mandatory)) | `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js` |
| PinUnlock_MobileWrapper | UBT_AppManager_Mobile | Fingerprint | In_PinLength: Integer (mandatory); In_ExtendedClasses: Text (mandatory); In_IsScanFingerprintOnReady: Boolean (mandatory); In_ForceVisible: Boolean; In_AllowBackNavigation: Boolean; In_HideFingerprint: Boolean | KeyPressed(); PincodeChange(InputLength: Integer (mandatory)); PinUnlockError(ErrorMessage: Text (mandatory)); PinUnlockSuccess(); Timeout(); UserLoggedOut() | `UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc.js` |
| PreventBackNavigation | NavigationHandler | NavigationHandler | - | BackNavigationPrevented(BackNavigationEvent: Object (mandatory)) | `NavigationHandler.NavigationHandler.PreventBackNavigation.mvc.js` |
| Separator | OutSystemsUI_2_23 | Utilities2 | IsVertical: Boolean; Space: Space Identifier = base; Color: Color Identifier = neutral-4; ExtendedClass: Text | - | `OutSystemsUI_2_23.Utilities.Separator.mvc.js` |
| SkeletonSection | UBTConnectLibrary | ConnectPatterns | In_IsLoading: Boolean (mandatory); In_ExtendedClass: Text; In_IsActiveWhileLoading: Boolean | - | `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js` |

## Referenced client actions called

| Action | Module | Folder | Inputs | Outputs |
|---|---|---|---|---|
| AllowUpcomingNavigation | NavigationHandler | NavigationHandler | - | - |
| AppManager_GetCachedUserInfo | UBT_AppManager | AppManager_CachedVariables_Gettters | - | UserInformation: AppManager_CachedUserInfo |
| AppManager_GetIsSupportedNativeVersion | UBT_AppManager | AppManager_SupportedVersion | - | IsSupportedNativeVersion: Boolean |
| AppManager_GetIsSupportedWebviewVersion | UBT_AppManager | AppManager_SupportedVersion | - | IsSupported: Boolean; IsAndroid: Boolean; IsApple: Boolean |
| AppManager_GetPIN_HasUnlocked | UBT_AppManager | AppManager_CachedVariables_Gettters | - | HasUnlocked: Boolean |
| AppManager_GetPIN_IsLocked | UBT_AppManager | AppManager_CachedVariables_Gettters | - | IsLocked: Boolean |
| AppManager_GetPIN_IsRegistering | UBT_AppManager | AppManager_CachedVariables_Gettters | - | IsRegistering: Boolean |
| AppManager_Logout | UBT_AppManager | AppManager_Methods | - | - |
| AppManager_OnReadyChecker | UBT_AppManager | AppManager_Initialization | - | isReady: Boolean |
| Cache_UserInfo_Get | UBTConnect_Utils | MemoryCache_UserInfo | - | UserInformation: CacheControl_UserInformation; CacheResult: MemoryCacheResult |
| CanOpenApplicationPolicyDirectlyViaUrl | ApplicationPolicies_CW | - | - | CanOpenDirectly: Boolean |
| ConfigureOfflineDataSync | OutSystemsUI_2_23 | OfflineDataSync | SyncOnOnline: Boolean (mandatory); SyncOnResume: Boolean (mandatory); RetryOnError: Boolean (mandatory); RetryIntervalInSeconds: Integer (mandatory) | - |
| EndOfflineDataSync | OutSystemsUI_2_23 | OfflineDataSync | HasError: Boolean (mandatory); ErrorMessage: Text = ""; AllowRetry: Boolean | - |
| FeedbackMessage_AutoClose | UBTJavaScriptUtils | JSUtils_FeedbackMessage | Title: Text; Message: Text (mandatory); MessageType: UBT_MessageType Identifier = Entities.UBT_MessageType.Error; EncodedHTML: Boolean = True; ExtendedClass: Text; DelayMs: Integer = 0; useDebounce: Boolean | - |
| Get_MemoryCacheKey_UniqueKey | UBTConnect_Utils | ApplicationInfo | - | Key: Text |
| Get_PolicsyIsLoading | ApplicationPolicies_CW | - | - | isLoading: Boolean |
| JSUtils_PageOpenInNewTab | UBTJavaScriptUtils | JSUtils | URL: Text (mandatory) | - |
| JSUtils_SetStyleProperty | UBTJavaScriptUtils | JSUtils | ObjectId: Text (mandatory); PropertyName: Text (mandatory); PropertyValue: Text (mandatory) | - |
| ListAll | (System) | - | List: Generic Record List (mandatory); Condition: Boolean (mandatory) | Result: Boolean |
| ListAppend | (System) | - | List: Generic Record List (mandatory); Element: Generic Record (mandatory) | - |
| ListFilter | (System) | - | SourceList: Generic Record List (mandatory); Condition: Boolean (mandatory) | FilteredList: Generic Record List |
| OpenApplicationPolicy | ApplicationPolicies_CW | - | Url: Text (mandatory); Filename: Text (mandatory); ContentType: Text (mandatory) | HasFoundNetworkError: Boolean |
| OpenPolicy | UBTConnect_Utils | Policies | PolicyInformation: PolicyInformation2 (mandatory); ErrorMessage: Text = "This policy couldn't be found." | - |
| PIN_Check | UBT_AppManager | PIN | - | NeedRegister: Boolean; NeedUnlock: Boolean |
| PreventNavigation | NavigationHandler | NavigationHandler | NavigationEvent: Object (mandatory) | - |
| PutCacheableObject | MemoryClientCache | MemoryCache | MemoryCacheTypeId: MemoryCacheType Identifier (mandatory); CacheKey: Text (mandatory); Object: Object (mandatory); CacheTimeToLiveSeconds: Integer (mandatory) | - |
| ReplaceOnUpcomingNavigation | NavigationHandler | NavigationHandler | - | - |
| ResetReplaceOnUpcomingNavigation | NavigationHandler | NavigationHandler | - | - |
| Set_PolicsyIsLoading | ApplicationPolicies_CW | - | isLoading: Boolean | - |

## Static entity records named by the flow (Entities.<Entity>.<Record>)

- **Connect_Applications** (Connect_CommonEntities_DB): records used: Connect, Directory, Orbit
  - Connect: GUID="65d96f75-9f71-42aa-8447-fd622aa09e7e", Label="Connect"
  - Directory: GUID="d8997dfa-7ae3-4eb1-bb48-0a14e151034a", Label="Directory"
  - Orbit: GUID="4b033840-c133-4f0d-beb9-4c3659a9bc28", Label="Orbit"
- **Connect_CacheType** (UBTConnect_Utils): records used: DirectoryUser
  - DirectoryUser: Id="DirectoryUser"
- **UBT_Color** (UBTConnectLibrary): records used: Inherit, Neutral0, Neutral10, Primary
  - Inherit: Color="inherit", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=69
  - Neutral0: Color="neutral-0", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=19
  - Neutral10: Color="neutral-10", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=29
  - Primary: Color="primary", IsActive=True, IsBrand=True, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=1
- **UBT_ColumnBehaviour** (UBTConnectLibrary): records used: ReduceLast
  - ReduceLast: Id="reduce-last", Order=3
- **UBT_Display** (UBTConnectLibrary): records used: Flex
  - Flex: Id="display-flex", Order=3
- **UBT_FlexDirection** (UBTConnectLibrary): records used: Column
  - Column: Id="flex-direction-column", Order=1
- **UBT_FontSize** (UBTConnectLibrary): records used: Base, Heading3, Small
  - Base: Id="base", Order=5
  - Heading3: Id="h3", Order=9
  - Small: Id="s", Order=4
- **UBT_FontWeight** (UBTConnectLibrary): records used: Regular, SemiBold
  - Regular: Id="regular", Order=2
  - SemiBold: Id="semi-bold", Order=4
- **UBT_Icons2** (UBTConnectLibrary): records used: Backspace, Checkbox, CheckboxOutlineBlank, Fingerprint, OpenNew
  - Backspace: Id="connect-icon-backspace", Is_Active=True, Label="Backspace"
  - Checkbox: Id="connect-icon-checkbox", Is_Active=True, Label="Checkbox"
  - CheckboxOutlineBlank: Id="connect-icon-checkbox_outline_blank", Is_Active=True, Label="Checkbox Outline Blank"
  - Fingerprint: Id="connect-icon-fingerprint", Is_Active=True, Label="Fingerprint"
  - OpenNew: Id="connect-icon-open_new", Is_Active=True, Label="Open New"
- **UBT_IconsSize** (UBTConnectLibrary): records used: Display_36
  - Display_36: Label="icon-display", Order=4
- **UBT_JustifyContent** (UBTConnectLibrary): records used: Center
  - Center: Id="justify-content-center", Order=2
- **UBT_MessageType** (UBTJavaScriptUtils): records used: Error, Info
  - Error: Id=4, Label="Error"
  - Info: Id=1, Label="Info"
- **UBT_Shadow** (UBTConnectLibrary): records used: ExtraSmallTop
  - ExtraSmallTop: Id="xs-top", Order=10
- **UBT_Shape** (UBTConnectLibrary): records used: Large
  - Large: Id="large", Order=4
- **UBT_Size** (UBTConnectLibrary): records used: Base, ExtraLarge, Medium, Small
  - Base: Id="base", Order=7
  - ExtraLarge: Id="xl", Order=10
  - Medium: Id="m", Order=8
  - Small: Id="s", Order=4
