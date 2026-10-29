# Pack of UI flow Directory_Search (DEV model, MCP dump of flows 2026-10-27)

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
| BottomSheet | OutSystemsUI_2_23 | Interaction | Shape: Shape Identifier = soft; ShowHandler: Boolean = True; ExtendedClass: Text | Initialized(BottomSheetId: Text (mandatory)); OnToggle(BottomSheetId: Text (mandatory); IsOpen: Boolean) | `OutSystemsUI_2_23.Interaction.BottomSheet.mvc.js` |
| BottomSheet | UBTConnectLibrary | ConnectPatterns | Title: Text (mandatory); ShowHandlerPreview: Boolean; HandlerPreviewOffset: Text; ShowHeader: Boolean = True; Content_BackgroundColorId: UBT_Color Identifier; Content_Padding: SpacingOptions; FooterHeight: Text = "0px"; ExtendedClasses: Text; isTransparentOverlay: Boolean; CloseOnClickOutsite: Boolean; ShowBackButton: Boolean; IsNotInertWhenClosed: Boolean; IsHideContentWhenClosed: Boolean; In_TouchActionNoneFix: Boolean | Initialized(Id: Text (mandatory)); OnBack(); OnClose(); OnToggle(IsOpen: Boolean (mandatory)) | `UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc.js` |
| Button | UBTConnect_Utils | CW_Common | ButtonExtendedClass: Text; IsDisabled: Boolean; IsIconOnRight: Boolean; ButtonText: Text (mandatory); IconText_SpacingSize: UBT_Size Identifier = xs; TextExtendedClasses: Text; ButtonOptions: ButtonOptions; IconId: UBT_Icons2 Identifier; HideIcon: Boolean | buttonOnClick() | `UBTConnect_Utils.CW_Common.Button.mvc.js` |
| Button | UBTConnectLibrary | ConnectPatterns | In_ButtonOptions: ButtonOptions; In_ExtendedClass: Text; In_IsDisabled: Boolean | Event_OnClick() | `UBTConnectLibrary.ConnectPatterns.Button.mvc.js` |
| CacheControl_AllCountries | UBTConnect_Utils | CacheControl | CacheKey: Text; TimeToLiveSeconds: Integer = 7200 | Result(CacheControl_Response: CacheControl_AllCountries) | `UBTConnect_Utils.CacheControl.CacheControl_AllCountries.mvc.js` |
| CacheControl_AllLocalities | UBTConnect_Utils | CacheControl | CacheKey: Text; TimeToLiveSeconds: Integer = 7200 | Result(CacheControl_Response: CacheControl_AllLocalities) | `UBTConnect_Utils.CacheControl.CacheControl_AllLocalities.mvc.js` |
| CacheControl_Policies | UBTConnect_Utils | CacheControl | CacheKey: Text; TimeToLiveSeconds: Integer = 7200 | Result(CacheControl_Response: CacheControl_Policies) | `UBTConnect_Utils.CacheControl.CacheControl_Policies.mvc.js` |
| CacheControl_UserInfo | UBTConnect_Utils | CacheControl | CacheKey: Text | Result(CacheControl_Response: CacheControl_UserInformation) | `UBTConnect_Utils.CacheControl.CacheControl_UserInfo.mvc.js` |
| Columns_Two | UBTConnectLibrary | BasePatterns | ColumnOptions: ColumnOptions; ExtendedClasses: Text | - | `UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js` |
| CustomContainer | UBTConnectLibrary | BasePatterns | ExtendedClasses: Text; Options: ContainerOptions | Clicked() | `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` |
| CustomText | UBTConnectLibrary | BasePatterns | In_Text: Text (mandatory); In_TextOptions: TextOptions (mandatory); In_PaddingOptions: SpacingOptions; In_HighlightWords: Text; In_HighlightOptions: TextOptions; ExtendedClasses: Text; FitContent: Boolean; InJustifyText: Boolean; NoWrap: Boolean; InlineIcon: InlineIcon | Clicked() | `UBTConnectLibrary.BasePatterns.CustomText.mvc.js` |
| DeeplinkHandlerCentral | EventfulDeeplinksPlugin | EventfulDeeplinksPlugin | - | OnDeeplinkOpen(URL: Text (mandatory)) | - |
| Dialog_AccessRestrictedAction | UBTConnect_Utils | CW_App_Common_Blocks_PopupDialogs | In_ExtendedClass: Text | - | `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc.js` |
| Gallery | OutSystemsUI_2_23 | Adaptive | RowItemsDesktop: Integer = 4; RowItemsTablet: Integer = 3; RowItemsPhone: Integer = 1; ItemsGap: Space Identifier = base; ExtendedClass: Text | Initialized(GalleryId: Text (mandatory)) | `OutSystemsUI_2_23.Adaptive.Gallery.mvc.js` |
| HandleImageLoadError | Connect2_LegacyShared | Utility | - | - | `Connect2_LegacyShared.Utility.HandleImageLoadError.mvc.js` |
| HorizontalTagList | UBTConnectLibrary | ConnectPatterns | In_TagToggleList: Tag List (mandatory); In_IsSingleSelection: Boolean; In_IsMandatorySelection: Boolean; In_HorizontalPadding: UBT_Size Identifier; ExtendedClasses: Text; isEnabled: Boolean = True | Changed(UpdatedTagList: Tag List) | `UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc.js` |
| Icon | UBTConnectLibrary | ConnectPatterns | In_IconId: UBT_Icons2 Identifier (mandatory); In_ColorId: UBT_Color Identifier = neutral-9; In_SizeId: UBT_IconsSize Identifier; In_Visible: Boolean = True; In_ExtendedClasses: Text = "" | Click() | `UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` |
| IconBadge | UBTConnectLibrary | OutSystemsUIOverrides | Number: Long Integer (mandatory); Color: UBT_Color Identifier = Entities.UBT_Color.Primary; IsLight: Boolean; ExtendedClass: Text; MaxNumber: Integer = 9 | - | `UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc.js` |
| IconText | UBTConnectLibrary | ConnectPatterns | IsIconOnRight: Boolean; Text: Text (mandatory); TextOptions: TextOptions; SpacingSize: UBT_Size Identifier = xs; ExtendedClasses: Text; SubtextOptions: TextOptions; In_Subtext: Text; In_JustifyText: Boolean | Clicked() | `UBTConnectLibrary.ConnectPatterns.IconText.mvc.js` |
| Input | UBTConnectLibrary | ConnectPatterns | In_Options: SearchInput; In_ExtendedClasses: Text = "" | Event_ClearString(); Event_OnChange(Event_CurrentString: Text (mandatory)); Event_OnFocus(); Event_OnReady(Id: Text (mandatory)); Event_Submit(Event_SubmittedString: Text (mandatory)) | `UBTConnectLibrary.ConnectPatterns.Input.mvc.js` |
| Layout_DetailPage | UBTConnectLibrary | Layouts | In_AlignTitleLeft: Boolean; In_IsPrimaryColor: Boolean = True; In_ExtendedClass: Text; In_EnableAccessibilityFeatures: Boolean; In_InitializeNavigationHandler: Boolean = True; In_IsHideTitle: Boolean | OnReadyEvent(WrapperContainerId: Text (mandatory)) | `UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js` |
| Layout_LoginFlow | UBTConnectLibrary | Layouts | In_HasOverlay: Boolean; In_ExtendedClass: Text; In_IsCommonBlock: Boolean | OnPathCalculated(); OnReady(MainContainerId: Text (mandatory)) | `UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc.js` |
| OfflineDataSyncCore | OutSystemsUI_2_23 | Private | - | OnConfigure(); OnSync(SyncUnit: Text (mandatory)); OnSyncComplete(SyncUnit: Text (mandatory)); OnSyncError(SyncUnit: Text (mandatory); ErrorMessage: Text (mandatory)); OnSyncStart(SyncUnit: Text (mandatory)) | `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js` |
| PinUnlock_MobileWrapper | UBT_AppManager_Mobile | Fingerprint | In_PinLength: Integer (mandatory); In_ExtendedClasses: Text (mandatory); In_IsScanFingerprintOnReady: Boolean (mandatory); In_ForceVisible: Boolean; In_AllowBackNavigation: Boolean; In_HideFingerprint: Boolean | KeyPressed(); PincodeChange(InputLength: Integer (mandatory)); PinUnlockError(ErrorMessage: Text (mandatory)); PinUnlockSuccess(); Timeout(); UserLoggedOut() | `UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc.js` |
| PreventBackNavigation | NavigationHandler | NavigationHandler | - | BackNavigationPrevented(BackNavigationEvent: Object (mandatory)) | `NavigationHandler.NavigationHandler.PreventBackNavigation.mvc.js` |
| SearchResult_Item | UBTConnect_Utils | CW_Search | In_SearchResult: SearchResult (mandatory); In_SearchTerm: Text (mandatory); In_ImageHeightId: UBT_ImageSize Identifier; In_ImageWidthId: UBT_ImageSize Identifier; In_ShowSubscriptionWarning: Boolean; In_ImageURL: Text; In_TitleFontSize: UBT_FontSize Identifier = xs; In_LocationTopPadding: UBT_Size Identifier = s | OnClick(SearchResult: SearchResult (mandatory)) | `UBTConnect_Utils.CW_Search.SearchResult_Item.mvc.js` |
| SelectionOption_List | UBTConnectLibrary | ConnectPatterns | SelectionOption_ItemList: SelectionOption_Item List (mandatory); isMultiselect: Boolean (mandatory); Item_StyleOptions: ContainerOptions; LastItem_StyleOptions: ContainerOptions; IconSizeId: UBT_IconsSize Identifier = icon-non-standard-16 | NotEnabledOnClick(ClickedItemId: Text (mandatory)); OnSelectionChange(SelectedItems: SelectionOption_Item List (mandatory); ClickedItemId: Text (mandatory)) | `UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc.js` |
| SkeletonSection | UBTConnectLibrary | ConnectPatterns | In_IsLoading: Boolean (mandatory); In_ExtendedClass: Text; In_IsActiveWhileLoading: Boolean | - | `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js` |
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
| App_Subscription_ShowUpgradePopUp | UBTConnect_Utils | App_Subscription | - | - |
| BottomBarSlider_ForceRefresh | UBTConnectLibrary | BottomBar_Slider | - | - |
| BottomBar_GetList | UBTConnect_Utils | BottomBar | useMapsItems: Boolean; isHouseholder: Boolean (mandatory) | BottomBar_ItemsList: BottomBar_Item List |
| BottomSheetClose | OutSystemsUI_2_23 | BottomSheet | WidgetId: Text (mandatory) | Success: Boolean; ErrorMessage: ErrorMessage |
| BottomSheetOpen | OutSystemsUI_2_23 | BottomSheet | WidgetId: Text (mandatory) | Success: Boolean; ErrorMessage: ErrorMessage |
| ConfigureOfflineDataSync | OutSystemsUI_2_23 | OfflineDataSync | SyncOnOnline: Boolean (mandatory); SyncOnResume: Boolean (mandatory); RetryOnError: Boolean (mandatory); RetryIntervalInSeconds: Integer (mandatory) | - |
| EndOfflineDataSync | OutSystemsUI_2_23 | OfflineDataSync | HasError: Boolean (mandatory); ErrorMessage: Text = ""; AllowRetry: Boolean | - |
| FeedbackMessage_AutoClose | UBTJavaScriptUtils | JSUtils_FeedbackMessage | Title: Text; Message: Text (mandatory); MessageType: UBT_MessageType Identifier = Entities.UBT_MessageType.Error; EncodedHTML: Boolean = True; ExtendedClass: Text; DelayMs: Integer = 0; useDebounce: Boolean | - |
| GetHasCarouselEnabled | UBTConnect_Utils | Permissions_FF_Wrappers_OutSystems | - | HasCarouselEnabled: Boolean |
| Input_ClearString | UBTConnectLibrary | Input | InputId: Text (mandatory); FocusOnInput: Boolean | - |
| ListAny | (System) | - | List: Generic Record List (mandatory); Condition: Boolean (mandatory) | Result: Boolean |
| ListAppend | (System) | - | List: Generic Record List (mandatory); Element: Generic Record (mandatory) | - |
| ListAppendAll | (System) | - | List: Generic Record List (mandatory); SourceList: Generic Record List (mandatory) | - |
| ListClear | (System) | - | List: Generic Record List (mandatory) | - |
| ListDistinct | (System) | - | SourceList: Generic Record List (mandatory) | DistinctList: Generic Record List |
| ListDuplicate | (System) | - | SourceList: Generic Record List (mandatory) | DuplicatedList: Generic Record List |
| ListFilter | (System) | - | SourceList: Generic Record List (mandatory); Condition: Boolean (mandatory) | FilteredList: Generic Record List |
| ListIndexOf | (System) | - | List: Generic Record List (mandatory); Condition: Boolean (mandatory) | Position: Integer |
| ListRemove | (System) | - | List: Generic Record List (mandatory); Position: Integer (mandatory) | - |
| ListSort | (System) | - | List: Generic Record List (mandatory); By: Generic Type (mandatory); Ascending: Boolean = True | - |
| OpenPolicy | UBTConnect_Utils | Policies | PolicyInformation: PolicyInformation2 (mandatory); ErrorMessage: Text = "This policy couldn't be found." | - |
| PIN_Check | UBT_AppManager | PIN | - | NeedRegister: Boolean; NeedUnlock: Boolean |
| PreventNavigation | NavigationHandler | NavigationHandler | NavigationEvent: Object (mandatory) | - |
| ResetReplaceOnUpcomingNavigation | NavigationHandler | NavigationHandler | - | - |
| SearchCategory_GetList | UBTConnect_Utils | SearchCategories | - | SearchCategoryItemsList: SearchCategory_Item List |
| SetBottomBarActiveElement | OutSystemsUI_2_23 | Menu | ActiveItem: Integer = -1 | Success: Boolean; ErrorMessage: ErrorMessage |
| SetPreloadObject | NavigationHandler | Preloading | Preload: Object (mandatory) | - |

## Static entity records named by the flow (Entities.<Entity>.<Record>)

- **Choice** (Connect_CommonEntities_DB): records used: No, None, Yes
  - No: Id="No"
  - None: Id="None"
  - Yes: Id="Yes"
- **Connect_BottomBar_Items** (UBTConnect_Utils): records used: Bookmarks, Directory, Home, Menu, Updates
  - Bookmarks: Id="Bookmarks"
  - Directory: Id="Directory"
  - Home: Id="Home"
  - Menu: Id="Menu"
  - Updates: Id="Updates"
- **Connect_Entity** (Connect_CommonEntities_DB): records used: Household, Locality, Member
  - Household: APIKey="Household", Id="Household", Is_Active=True, Label="Household", Order=1
  - Locality: APIKey="Locality", Id="Locality", Is_Active=True, Label="Locality", Order=5
  - Member: APIKey="Member", Id="Member", Is_Active=True, Label="Member", Order=6
- **Connect_SearchCategories** (Connect_CommonEntities_DB): records used: All, Households, People, Places
  - All: Id="All"
  - Households: Id="Households"
  - People: Id="People"
  - Places: Id="Places"
- **Connect_Subscription_Plan** (Connect_CommonEntities_DB): records used: Free, Global
  - Free: Id="Free", Is_Active=True, Label="Free Plan", Order=2
  - Global: Id="Global", Is_Active=True, Label="Global Plan", Order=1
- **OutSystems_FF** (Connect_CommonEntities_DB): records used: C2EnableSearchByBirthday
  - C2EnableSearchByBirthday: Id="C2EnableSearchByBirthday"
- **Shape** (OutSystemsUI_2_23): records used: Rounded
  - Rounded: Order=2, Shape="rounded"
- **Space** (OutSystemsUI_2_23): records used: ExtraSmall
  - ExtraSmall: Order=2, Space="xs"
- **Type_SearchTarget** (Connect_Search_CS): records used: Global, Map
  - Global: Id="Global", Order=1
  - Map: Id="Map", Order=2
- **UBT_ButtonSize** (UBTConnectLibrary): records used: Small
  - Small: Id="s", Order=3
- **UBT_ButtonType** (UBTConnectLibrary): records used: Primary, Scondary
  - Primary: Id="primary", Order=1
  - Scondary: Id="secondary", Order=2
- **UBT_Color** (UBTConnectLibrary): records used: Inherit, Neutral0, Neutral10, Neutral2, Neutral3, Neutral4, Neutral6, Neutral7, Neutral9, Primary, Red
  - Inherit: Color="inherit", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=69
  - Neutral0: Color="neutral-0", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=19
  - Neutral10: Color="neutral-10", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=29
  - Neutral2: Color="neutral-2", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=21
  - Neutral3: Color="neutral-3", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=22
  - Neutral4: Color="neutral-4", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=23
  - Neutral6: Color="neutral-6", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=25
  - Neutral7: Color="neutral-7", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=26
  - Neutral9: Color="neutral-9", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=28
  - Primary: Color="primary", IsActive=True, IsBrand=True, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=1
  - Red: Color="red", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=10
- **UBT_ColumnBehaviour** (UBTConnectLibrary): records used: ReduceLast
  - ReduceLast: Id="reduce-last", Order=3
- **UBT_Display** (UBTConnectLibrary): records used: Flex
  - Flex: Id="display-flex", Order=3
- **UBT_FlexBehavior** (UBTConnectLibrary): records used: Grow
  - Grow: Id="flex-grow", Order=2
- **UBT_FontSize** (UBTConnectLibrary): records used: Base, ExtraSmall, Small
  - Base: Id="base", Order=5
  - ExtraSmall: Id="xs", Order=3
  - Small: Id="s", Order=4
- **UBT_FontWeight** (UBTConnectLibrary): records used: Bold, Regular, SemiBold
  - Bold: Id="bold", Order=5
  - Regular: Id="regular", Order=2
  - SemiBold: Id="semi-bold", Order=4
- **UBT_Icons2** (UBTConnectLibrary): records used: ArrowLeftAlt, Backspace, Calendar, ChevronRight, Close, ErrorFill, Fingerprint, History, OpenNew, Tune
  - ArrowLeftAlt: Id="connect-icon-arrow_left_alt", Is_Active=True, Label="Arrow Left Alt"
  - Backspace: Id="connect-icon-backspace", Is_Active=True, Label="Backspace"
  - Calendar: Id="connect-icon-calendar", Is_Active=True, Label="Calendar"
  - ChevronRight: Id="connect-icon-chevron_right", Is_Active=True, Label="Chevron Right"
  - Close: Id="connect-icon-close", Is_Active=True, Label="Close"
  - ErrorFill: Id="connect-icon-error_fill", Is_Active=True, Label="Error Fill"
  - Fingerprint: Id="connect-icon-fingerprint", Is_Active=True, Label="Fingerprint"
  - History: Id="connect-icon-history", Is_Active=True, Label="History"
  - OpenNew: Id="connect-icon-open_new", Is_Active=True, Label="Open New"
  - Tune: Id="connect-icon-tune", Is_Active=True, Label="Tune"
- **UBT_IconsSize** (UBTConnectLibrary): records used: Base_24, Display_36, NonStandard_14
  - Base_24: Label="icon-base", Order=3
  - Display_36: Label="icon-display", Order=4
  - NonStandard_14: Label="icon-non-standard-14", Order=6
- **UBT_ImageSize** (UBTConnectLibrary): records used: ExtraSmall_32, Square
  - ExtraSmall_32: Id="xs", Order=1
  - Square: Id="square", Order=14
- **UBT_JustifyContent** (UBTConnectLibrary): records used: Center
  - Center: Id="justify-content-center", Order=2
- **UBT_MessageType** (UBTJavaScriptUtils): records used: Error
  - Error: Id=4, Label="Error"
- **UBT_Shadow** (UBTConnectLibrary): records used: ExtraSmall
  - ExtraSmall: Id="xs", Order=3
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
