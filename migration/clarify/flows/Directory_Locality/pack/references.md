# Pack of UI flow Directory_Locality (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Referenced blocks (other modules) used by the flow

Logic of these blocks is not in the dump. 'TST file' is the compiled code on TST (`python3 migration/clarify/tools/tst_source.py show <file>`), when the survey has it.

| Block | Module | Flow | Inputs | Events | TST file |
|---|---|---|---|---|---|
| ActionsMenu | UBTConnectLibrary | ConnectCorePatterns | In_ActionsMenuOptions: ActionsMenuOptions (mandatory); In_ActionsEnableOptions: ActionsMenuEnableOptions; IsEnabled: Boolean = True; InShowLabels: Boolean = True | Event_Click_Bookmark(); Event_Click_Call(); Event_Click_Email(); Event_Click_Gift(); Event_Click_Notes(); Event_Click_Share(); Event_Click_Unbookmark(); Event_Click_ViewDetails() | `UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc.js` |
| AddressPopup_Wrapper | UBTConnect_Utils | CW_CTA_PopUps | In_Address: Text (mandatory); IsEnabled: Boolean = True; IconVisible: Boolean = True; In_Coordinates: Directory_Coordinates | - | `UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc.js` |
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
| Columns_Three | UBTConnectLibrary | BasePatterns | ExtendedClasses: Text; ColumnOptions: ColumnOptions | - | `UBTConnectLibrary.BasePatterns.Columns_Three.mvc.js` |
| Columns_Two | UBTConnectLibrary | BasePatterns | ColumnOptions: ColumnOptions; ExtendedClasses: Text | - | `UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js` |
| ComingSoon | UBTConnectLibrary | ConnectPatterns | In_TextOptions: TextOptions | - | `UBTConnectLibrary.ConnectPatterns.ComingSoon.mvc.js` |
| ComingSoon_V2 | UBTConnectLibrary | ConnectPatterns | - | - | - |
| ContactByMessage_Wrapper | UBTConnect_Utils | CW_CTA_PopUps | In_ContactPopupData: UI_ContactByMessage_WrapperData (mandatory) | Event_Call(); Event_Cancel(); Event_Email(); Event_MessageChannel(Event_ChannelId: Type_MessageChannel Identifier (mandatory)) | `UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc.js` |
| ContactPopup_ByPhone | UBTConnect_Utils | CW_CTA_PopUps | In_CallPopupData: ContactByPhonePopupData (mandatory); In_ImageSizeId: UBT_ImageSize Identifier = xl | Event_Call(Event_Number: Text (mandatory)); Event_Cancel() | `UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc.js` |
| CustomContainer | UBTConnectLibrary | BasePatterns | ExtendedClasses: Text; Options: ContainerOptions | Clicked() | `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` |
| CustomText | UBTConnectLibrary | BasePatterns | In_Text: Text (mandatory); In_TextOptions: TextOptions (mandatory); In_PaddingOptions: SpacingOptions; In_HighlightWords: Text; In_HighlightOptions: TextOptions; ExtendedClasses: Text; FitContent: Boolean; InJustifyText: Boolean; NoWrap: Boolean; InlineIcon: InlineIcon | Clicked() | `UBTConnectLibrary.BasePatterns.CustomText.mvc.js` |
| DeeplinkHandlerCentral | EventfulDeeplinksPlugin | EventfulDeeplinksPlugin | - | OnDeeplinkOpen(URL: Text (mandatory)) | - |
| Dialog_AccessRestrictedAction | UBTConnect_Utils | CW_App_Common_Blocks_PopupDialogs | In_ExtendedClass: Text | - | `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc.js` |
| EmptyList | UBTConnectLibrary | ConnectPatterns | IconId: UBT_Icons2 Identifier (mandatory) | - | `UBTConnectLibrary.ConnectPatterns.EmptyList.mvc.js` |
| HandleImageLoadError | Connect2_LegacyShared | Utility | - | - | `Connect2_LegacyShared.Utility.HandleImageLoadError.mvc.js` |
| HorizontalTagList | UBTConnectLibrary | ConnectPatterns | In_TagToggleList: Tag List (mandatory); In_IsSingleSelection: Boolean; In_IsMandatorySelection: Boolean; In_HorizontalPadding: UBT_Size Identifier; ExtendedClasses: Text; isEnabled: Boolean = True | Changed(UpdatedTagList: Tag List) | `UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc.js` |
| HouseholdMember_ListItem | UBTConnectLibrary | ConnectCorePatterns | Title: Text (mandatory); isEnabled: Boolean = True; LifeCycleText: Text (mandatory); LifeCycleText_Italic: Boolean (mandatory) | OnClickPerson() | - |
| Icon | UBTConnectLibrary | ConnectPatterns | In_IconId: UBT_Icons2 Identifier (mandatory); In_ColorId: UBT_Color Identifier = neutral-9; In_SizeId: UBT_IconsSize Identifier; In_Visible: Boolean = True; In_ExtendedClasses: Text = "" | Click() | `UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` |
| IconBadge | UBTConnectLibrary | OutSystemsUIOverrides | Number: Long Integer (mandatory); Color: UBT_Color Identifier = Entities.UBT_Color.Primary; IsLight: Boolean; ExtendedClass: Text; MaxNumber: Integer = 9 | - | `UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc.js` |
| IconText | UBTConnectLibrary | ConnectPatterns | IsIconOnRight: Boolean; Text: Text (mandatory); TextOptions: TextOptions; SpacingSize: UBT_Size Identifier = xs; ExtendedClasses: Text; SubtextOptions: TextOptions; In_Subtext: Text; In_JustifyText: Boolean | Clicked() | `UBTConnectLibrary.ConnectPatterns.IconText.mvc.js` |
| ImageCard_LazyLoading | UBTConnectLibrary | ConnectCorePatterns | In_CardTypeId: UBT_ImageCardType Identifier (mandatory); In_ItemsPerRow: Integer; In_ShowAvatarList: Boolean; In_ExtendedClass: Text; In_IsBookmarked: Boolean; In_BookmarkModifier: Text | Event_Click() | `UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc.js` |
| ImageCard__Content | UBTConnectLibrary | ConnectPatterns | In_Title: Text (mandatory); In_Subtitle: Text; In_ShowSubtitle: Boolean | - | `UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc.js` |
| ImageCard__Content__Tag | UBTConnectLibrary | ConnectPatterns | Content: Text (mandatory) | - | `UBTConnectLibrary.ConnectPatterns.ImageCard__Content__Tag.mvc.js` |
| Input | UBTConnectLibrary | ConnectPatterns | In_Options: SearchInput; In_ExtendedClasses: Text = "" | Event_ClearString(); Event_OnChange(Event_CurrentString: Text (mandatory)); Event_OnFocus(); Event_OnReady(Id: Text (mandatory)); Event_Submit(Event_SubmittedString: Text (mandatory)) | `UBTConnectLibrary.ConnectPatterns.Input.mvc.js` |
| KebabButtonMenu | UBTConnectLibrary | ConnectCorePatterns | isEnable: Boolean = True | Edit(); Share() | `UBTConnectLibrary.ConnectCorePatterns.KebabButtonMenu.mvc.js` |
| Layout_DetailPage | UBTConnectLibrary | Layouts | In_AlignTitleLeft: Boolean; In_IsPrimaryColor: Boolean = True; In_ExtendedClass: Text; In_EnableAccessibilityFeatures: Boolean; In_InitializeNavigationHandler: Boolean = True; In_IsHideTitle: Boolean | OnReadyEvent(WrapperContainerId: Text (mandatory)) | `UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js` |
| Layout_LoginFlow | UBTConnectLibrary | Layouts | In_HasOverlay: Boolean; In_ExtendedClass: Text; In_IsCommonBlock: Boolean | OnPathCalculated(); OnReady(MainContainerId: Text (mandatory)) | `UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc.js` |
| Layout_MainPages | UBTConnectLibrary | Layouts | UsePullToRefresh: Boolean; ExtendedClass: Text; EnableAccessibilityFeatures: Boolean; isGrayBackground: Boolean; AddHeaderGap: Boolean = True | OnHeaderScrolled(Event_IsHeaderScrolled: Boolean (mandatory)); OnPullToRefresh() | `UBTConnectLibrary.Layouts.Layout_MainPages.mvc.js` |
| LeafletMap | Leaflet | Leaflet | MapOptions: MapOptions; MarkersList: MarkerWithWindow List; TileLayer: TileLayer; GeoJSON_Features: GeoJSONFeature List; ZoomControlOptions: ZoomControlOptions; useClustering: Boolean; centerToCurrentLocation: Boolean | OnGeoJSON_Clicked(GeoJSONId: Text (mandatory); MapId: Text; Type: Text (mandatory); ExtraData: Text (mandatory)); OnGoToMyLocation_Clicked(MapId: Text (mandatory)); OnInitialized(MapId: Text (mandatory)); OnMarker_Clicked(MarkerId: Text (mandatory); MapId: Text; Type: Text (mandatory); ExtraData: Text (mandatory); Lat: Decimal (mandatory); Long: Decimal (mandatory); MarkerObj: Object (mandatory)); OnMoveEnd(MapVisibleBoundaries: MapVisibleBoundaries (mandatory)); OnParametersChanged(); OnZoomEnd(ZoomLevel: Integer (mandatory)); SetCallbacks(MapId: Text (mandatory)) | `Leaflet.Leaflet.LeafletMap.mvc.js` |
| LocalityContact_ListItem | UBTConnectLibrary | ConnectCorePatterns | LocalityContactOptions: LocalityContactOptions (mandatory); In_ExtendedClasses: Text | Event_OnClickCard() | `UBTConnectLibrary.ConnectCorePatterns.LocalityContact_ListItem.mvc.js` |
| NonMember_ListItem | UBTConnectLibrary | ConnectCorePatterns | Title: Text (mandatory); isEnabled: Boolean = True; DeceasedCaption: Text; LifeCycleText_Italic: Boolean (mandatory); MarriedCaption: Text; MarriedPartnerTakenText: Text; MarriageHighlightText: Text | OnClickPerson() | `UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem.mvc.js` |
| NotesSheet | UBTConnect_Utils | CW_Notes | In_IsOpen: Boolean (mandatory); ExtendedClasses: Text; In_ItemId: Text (mandatory); In_NoteCategoryId: NoteCategory2 Identifier (mandatory); In_Notes: Notes (mandatory) | On_NoteDeleted(NoteId: Long Integer (mandatory); WasLastNote: Boolean (mandatory)); On_NotesChanged(New_Notes: Notes (mandatory)); On_NoteSheet_Closed() | `UBTConnect_Utils.CW_Notes.NotesSheet.mvc.js` |
| OfflineDataSyncCore | OutSystemsUI_2_23 | Private | - | OnConfigure(); OnSync(SyncUnit: Text (mandatory)); OnSyncComplete(SyncUnit: Text (mandatory)); OnSyncError(SyncUnit: Text (mandatory); ErrorMessage: Text (mandatory)); OnSyncStart(SyncUnit: Text (mandatory)) | `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js` |
| PinUnlock_MobileWrapper | UBT_AppManager_Mobile | Fingerprint | In_PinLength: Integer (mandatory); In_ExtendedClasses: Text (mandatory); In_IsScanFingerprintOnReady: Boolean (mandatory); In_ForceVisible: Boolean; In_AllowBackNavigation: Boolean; In_HideFingerprint: Boolean | KeyPressed(); PincodeChange(InputLength: Integer (mandatory)); PinUnlockError(ErrorMessage: Text (mandatory)); PinUnlockSuccess(); Timeout(); UserLoggedOut() | `UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc.js` |
| PreventBackNavigation | NavigationHandler | NavigationHandler | - | BackNavigationPrevented(BackNavigationEvent: Object (mandatory)) | `NavigationHandler.NavigationHandler.PreventBackNavigation.mvc.js` |
| SeeMoreSection | UBTConnectLibrary | ConnectPatterns | StartExpanded: Boolean = True; ExtendedClasses: Text; isEnabled: Boolean = True | - | `UBTConnectLibrary.ConnectPatterns.SeeMoreSection.mvc.js` |
| SelectionOption_List | UBTConnectLibrary | ConnectPatterns | SelectionOption_ItemList: SelectionOption_Item List (mandatory); isMultiselect: Boolean (mandatory); Item_StyleOptions: ContainerOptions; LastItem_StyleOptions: ContainerOptions; IconSizeId: UBT_IconsSize Identifier = icon-non-standard-16 | NotEnabledOnClick(ClickedItemId: Text (mandatory)); OnSelectionChange(SelectedItems: SelectionOption_Item List (mandatory); ClickedItemId: Text (mandatory)) | `UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc.js` |
| SharePopup | UBTConnect_Utils | CW_CTA_PopUps | In_ContactPopupData: ContactPopupData (mandatory); In_ImageSizeId: UBT_ImageSize Identifier = xl | Event_Cancel(); Event_ShareToConnect(); Event_ShareToOthers() | `UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc.js` |
| ShareSheet | UBTConnect_Utils | CW_Share | In_IsOpen: Boolean (mandatory); In_ShareObjectTypeId: Type_ShareObject Identifier (mandatory); In_ShareableObjectId: Text (mandatory); In_IsLegacy: Boolean; In_UpdateType: Text; In_UpdateDate: Date | Event_ClosedShareSheet() | `UBTConnect_Utils.CW_Share.ShareSheet.mvc.js` |
| ShareableObject_Generic | UBTConnect_Utils | CW_Share | In_ShareableObject: UI_ShareableObject_Generic (mandatory) | Event_OnClick() | `UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc.js` |
| SkeletonSection | UBTConnectLibrary | ConnectPatterns | In_IsLoading: Boolean (mandatory); In_ExtendedClass: Text; In_IsActiveWhileLoading: Boolean | - | `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js` |
| StaticInput | UBTConnectLibrary | ConnectPatterns | In_Prompt: Text = "Search for households, members or places."; In_ExtendedClasses: Text = "" | Click_Input() | `UBTConnectLibrary.ConnectPatterns.StaticInput.mvc.js` |
| Statistics_ListItem | UBTConnectLibrary | ConnectCorePatterns | In_StatisticsOptions: StatisticsOptions (mandatory); In_ExtendedClasses: Text; In_HighlightWords: Text; In_ShowSubtitle: Boolean; In_HasActionsMenu: Boolean; In_HideBorder: Boolean | Event_Clicked() | `UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem.mvc.js` |
| StopPropagationHelper | UBTConnectLibrary | ConnectPatterns | - | - | `UBTConnectLibrary.ConnectPatterns.StopPropagationHelper.mvc.js` |
| SubHeader_MainPages | UBTConnectLibrary | Layouts | In_IsShowSearchIcon: Boolean (mandatory) | Click_Search() | `UBTConnectLibrary.Layouts.SubHeader_MainPages.mvc.js` |
| SubLayout_Section | UBTConnectLibrary | Layouts | MarginTop: UBT_Size Identifier = Entities.UBT_Size.ExtraSmall; ExtendedClasses: Text | Clicked() | `UBTConnectLibrary.Layouts.SubLayout_Section.mvc.js` |
| Timer | UBTConnect_Utils | Utils | In_Delay: Integer = 1 | Event_IntervalElapsed() | `UBTConnect_Utils.Utils.Timer.mvc.js` |
| UBT_LazyImage | UBTConnect_Utils | CW_Image | ImageURL: Text; EntityId: Text (mandatory); EntityType: Connect_Entity Identifier (mandatory); ImageSize: LazyImageSize; ExtendedClass: Text; In_BorderRadius: UBT_Shape Identifier; In_HighRes: Boolean; HasErrorMessage: Boolean; In_ForceLoadingState: Boolean | - | `UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc.js` |
| UBT_LazyImage_List | UBTConnect_Utils | CW_Image | Items: LazyImage List (mandatory); ImageSize: LazyImageSize; InvertOrder: Boolean; MaxLimit: Integer = 5 | - | `UBTConnect_Utils.CW_Image.UBT_LazyImage_List.mvc.js` |

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
| Bookmark_SendFeedbackMessage | UBTConnect_Utils | CommonMessages | IsCreate: Boolean; isError: Boolean | - |
| BottomBarSlider_ForceRefresh | UBTConnectLibrary | BottomBar_Slider | - | - |
| BottomBar_GetList | UBTConnect_Utils | BottomBar | useMapsItems: Boolean; isHouseholder: Boolean (mandatory) | BottomBar_ItemsList: BottomBar_Item List |
| BottomSheetClose | OutSystemsUI_2_23 | BottomSheet | WidgetId: Text (mandatory) | Success: Boolean; ErrorMessage: ErrorMessage |
| BottomSheetOpen | OutSystemsUI_2_23 | BottomSheet | WidgetId: Text (mandatory) | Success: Boolean; ErrorMessage: ErrorMessage |
| Cache_UserInfo_Get | UBTConnect_Utils | MemoryCache_UserInfo | - | UserInformation: CacheControl_UserInformation; CacheResult: MemoryCacheResult |
| ConfigureOfflineDataSync | OutSystemsUI_2_23 | OfflineDataSync | SyncOnOnline: Boolean (mandatory); SyncOnResume: Boolean (mandatory); RetryOnError: Boolean (mandatory); RetryIntervalInSeconds: Integer (mandatory) | - |
| Create_LocalBookmark_C2 | UBTConnect_Bookmarks_MCS | Bookmarks_LocalStorage | In_ItemId: Text (mandatory); In_BookmarkCategoryId: BookmarkCategory Identifier (mandatory); In_BookmarkId: Long Integer (mandatory); In_DateCreatedUtc: Date Time | LocalBookmarkId: LocalBookmark2 Identifier |
| Delete_LocalBookmarkByBookmarkId_C2 | UBTConnect_Bookmarks_MCS | Bookmarks_LocalStorage | BookmarkId: Long Integer (mandatory) | - |
| EndOfflineDataSync | OutSystemsUI_2_23 | OfflineDataSync | HasError: Boolean (mandatory); ErrorMessage: Text = ""; AllowRetry: Boolean | - |
| FeedbackMessage_AutoClose | UBTJavaScriptUtils | JSUtils_FeedbackMessage | Title: Text; Message: Text (mandatory); MessageType: UBT_MessageType Identifier = Entities.UBT_MessageType.Error; EncodedHTML: Boolean = True; ExtendedClass: Text; DelayMs: Integer = 0; useDebounce: Boolean | - |
| ForceListUpdateOnScrollEnd | UBTConnect_Utils | ListUtils | ListId: Text (mandatory) | - |
| GetHasCarouselEnabled | UBTConnect_Utils | Permissions_FF_Wrappers_OutSystems | - | HasCarouselEnabled: Boolean |
| GetHasNewNotifications | UBTConnect_Utils | Permissions_FF_Wrappers_OutSystems | - | Out_HasNewNotifications: Boolean |
| GetLocalBookmarkByObjectId_C2 | UBTConnect_Bookmarks_MCS | Bookmarks_LocalStorage | ItemId: Text (mandatory) | LocalBookmark: LocalBookmark2 |
| GetUnreadNotificationNumber | Connect2_LegacyShared | Comms | - | UnreadNotifications: Long Integer |
| Get_LocalBookmarkByObjectId | Connect2_LegacyShared | MyBookmarks_LocalStorage | ObjectType: MyBookmarks_ObjectType Identifier (mandatory); ObjectId: Long Integer (mandatory) | LocalBookmark: LocalBookmark |
| Input_ClearString | UBTConnectLibrary | Input | InputId: Text (mandatory); FocusOnInput: Boolean | - |
| JSUtils_Element_Operations_GetElementById | UBTJavaScriptUtils | JSUtilis_Element_Operations | Id: Text (mandatory) | Element: Object |
| JSUtils_String_Split | UBTJavaScriptUtils | JSUtils_StringManipulation | String: Text (mandatory); Char: Text (mandatory) | List: Text List |
| ListAny | (System) | - | List: Generic Record List (mandatory); Condition: Boolean (mandatory) | Result: Boolean |
| ListAppend | (System) | - | List: Generic Record List (mandatory); Element: Generic Record (mandatory) | - |
| ListAppendAll | (System) | - | List: Generic Record List (mandatory); SourceList: Generic Record List (mandatory) | - |
| ListClear | (System) | - | List: Generic Record List (mandatory) | - |
| ListDuplicate | (System) | - | SourceList: Generic Record List (mandatory) | DuplicatedList: Generic Record List |
| ListFilter | (System) | - | SourceList: Generic Record List (mandatory); Condition: Boolean (mandatory) | FilteredList: Generic Record List |
| ListIndexOf | (System) | - | List: Generic Record List (mandatory); Condition: Boolean (mandatory) | Position: Integer |
| ListRemove | (System) | - | List: Generic Record List (mandatory); Position: Integer (mandatory) | - |
| ListSort | (System) | - | List: Generic Record List (mandatory); By: Generic Type (mandatory); Ascending: Boolean = True | - |
| LogMessage | (System) | - | Message: Text (mandatory); ModuleName: Text (mandatory) | - |
| Map_FitBoundsAuto | Leaflet | Map_Utils | MapId: Text (mandatory) | - |
| Map_InvalidateSize | Leaflet | Map_Utils | MapId: Text (mandatory) | - |
| Map_Marker_OpenPopUp | Leaflet | Map_Utils_Marker | MarkerObj: Object (mandatory) | - |
| Map_SetPopupBindingCallback | Leaflet | Map_PopUp | MapId: Text (mandatory); Callback: Object (mandatory) | - |
| OpenPolicy | UBTConnect_Utils | Policies | PolicyInformation: PolicyInformation2 (mandatory); ErrorMessage: Text = "This policy couldn't be found." | - |
| PIN_Check | UBT_AppManager | PIN | - | NeedRegister: Boolean; NeedUnlock: Boolean |
| PreventNavigation | NavigationHandler | NavigationHandler | NavigationEvent: Object (mandatory) | - |
| ReactiveInstance_ForceUpdate | UBTJavaScriptUtils | JSUtils_ReactiveInstance | Element: Object (mandatory) | - |
| ResetReplaceOnUpcomingNavigation | NavigationHandler | NavigationHandler | - | - |
| ScreenController_RaiseCommunicationError | UBTJavaScriptUtils | JSUtils_ScreenController | Message: Text (mandatory) | - |
| ScreenController_RaiseError | UBTJavaScriptUtils | JSUtils_ScreenController | Message: Text (mandatory) | - |
| ScreenController_RaiseTypedException | UBTJavaScriptUtils | JSUtils_ScreenController | Message: Text (mandatory); ExceptionId: UBT_SystemExceptionTypes Identifier (mandatory); SpecificType: Text; ExtraStack: Text | - |
| SetBottomBarActiveElement | OutSystemsUI_2_23 | Menu | ActiveItem: Integer = -1 | Success: Boolean; ErrorMessage: ErrorMessage |
| SetPreloadObject | NavigationHandler | Preloading | Preload: Object (mandatory) | - |
| ShareEntity_ByURL | UBTConnect_Utils | Share | In_ShareTypeId: Type_ShareObject Identifier (mandatory); In_ShareableObjectId: Text (mandatory); In_UpdateType: Text; In_UpdateDate: Date | - |
| ShowComingSoonMessage | UBTConnect_Utils | CommonMessages | - | - |
| StopPropagationHelper_Check | UBTConnectLibrary | Utilities | - | isToStop: Boolean |

## Static entity records named by the flow (Entities.<Entity>.<Record>)

- **BookmarkCategory** (UBTConnect_Bookmarks_MCS): records used: Household, Interchange, Locality, Member, OneSchoolGlobal2, SupperMeeting
  - Household: Id="Household", Initials="H", Label="Households"
  - Interchange: Id="Interchange", Initials="I", Label="Interchange"
  - Locality: Id="Locality", IsActive=False, Label="Localities"
  - Member: Id="Member", Label="Members"
  - OneSchoolGlobal2: Id="OneSchoolGlobal", Label="OneSchool Global"
  - SupperMeeting: Id="Supper Meeting", Label="Supper Meetings"
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
- **Connect_Entity** (Connect_CommonEntities_DB): records used: FeedItem, Household, Interchange, Locality, Member, OneSchoolGlobal, SupperMeetings_aka_Subdivisions
  - FeedItem: APIKey="FeedItem", Id="Feed Item", Is_Active=True, Label="Feed Item", Order=7
  - Household: APIKey="Household", Id="Household", Is_Active=True, Label="Household", Order=1
  - Interchange: APIKey="", Id="Interchange", Is_Active=True, Label="Interchange", Order=4
  - Locality: APIKey="Locality", Id="Locality", Is_Active=True, Label="Locality", Order=5
  - Member: APIKey="Member", Id="Member", Is_Active=True, Label="Member", Order=6
  - OneSchoolGlobal: APIKey="", Id="OneSchool Global", Is_Active=True, Label="OneSchool Global", Order=2
  - SupperMeetings_aka_Subdivisions: APIKey="Subdivision", Id="Supper Meetings", Is_Active=True, Label="Supper Meetings", Order=3
- **Connect_HouseholdMemberRole** (Connect_CommonEntities_DB): records used: Child
  - Child: Id="Child", Label="Child", Order=3
- **Connect_Subscription_Plan** (Connect_CommonEntities_DB): records used: AdvancePlus, Free, Global, Regional
  - AdvancePlus: Id="AdvancePlus", Is_Active=True, Label="AdvancedPlus Plan", Order=4
  - Free: Id="Free", Is_Active=True, Label="Free Plan", Order=2
  - Global: Id="Global", Is_Active=True, Label="Global Plan", Order=1
  - Regional: Id="Regional", Is_Active=True, Label="Regional Plan", Order=3
- **Connect_Subscription_Region** (Connect_CommonEntities_DB): records used: Global
  - Global: Id="3d96a888-94a1-e611-813a-0a722c59a519", Is_Active=True, Label="Global"
- **DetailDisplayType** (UBTConnectLibrary): records used: AwayFather, AwayMother, RelationshipFather, RelationshipMother
  - AwayFather: Id="AwayFather", Is_Active=True, Label="Away Father", Order=7
  - AwayMother: Id="AwayMother", Is_Active=True, Label="Away Mother", Order=8
  - RelationshipFather: Id="RelationshipFather", Is_Active=True, Label="Relationship Father", Order=3
  - RelationshipMother: Id="RelationshipMother", Is_Active=True, Label="Relationship Mother", Order=4
- **HouseholdDetailTags** (UBTConnectLibrary): records used: Photos
  - Photos: Id="Photos", order=2, Text="Photos"
- **LaunchDarkly_FF** (Connect_CommonEntities_DB): records used: MobileDirectoryHouseholdGallery, MobileDirectoryLocalityContacts
  - MobileDirectoryHouseholdGallery: Id="directory-household-gallery"
  - MobileDirectoryLocalityContacts: Id="directory-locality-contacts"
- **MyBookmarks_ObjectType** (Connect2_MyBookmarks_IS): records used: Contact
  - Contact: Id="Contact", IsActive=True
- **Shape** (OutSystemsUI_2_23): records used: Rounded
  - Rounded: Order=2, Shape="rounded"
- **Type_ShareObject** (Connect2_Sharing_CS): records used: Feed, Household, Locality, MyHousehold, OneSchoolGlobal, SupperMeeting
  - Feed: APIKey="FeedItem", Id="Feed", Is_Active=True, Label="Feed", NotificationTitle="shared a Feed", Order=7
  - Household: APIKey="Members", Id="Household", Is_Active=True, Label="Household", NotificationTitle="shared a Household", Order=3
  - Locality: Id="Locality", Is_Active=True, Label="Locality", Order=5
  - MyHousehold: APIKey="My Profile", Id="My Household", Is_Active=True, Label="Household", LabelPrefix="my", NotificationTitle="shared a Household", Order=3
  - OneSchoolGlobal: APIKey="OneSchool Global", Id="OneSchool Global", Is_Active=True, Label="OneSchool Global", NotificationTitle="shared a OneSchool Global", Order=4
  - SupperMeeting: APIKey="Supper Meeting", Id="Supper Meeting", Is_Active=True, Label="Supper Meeting", NotificationTitle="shared a Supper Meeting", Order=2
- **UBT_AlignItems** (UBTConnectLibrary): records used: Center, FlexStart
  - Center: Id="align-items-center", Order=2
  - FlexStart: Id="align-items-flex-start", Order=1
- **UBT_ButtonSize** (UBTConnectLibrary): records used: Small
  - Small: Id="s", Order=3
- **UBT_ButtonType** (UBTConnectLibrary): records used: Primary, Scondary
  - Primary: Id="primary", Order=1
  - Scondary: Id="secondary", Order=2
- **UBT_Color** (UBTConnectLibrary): records used: BlueNonStandarDarker, CyanDarker, Error, GreenDark, Info, Inherit, Neutral0, Neutral10, Neutral2, Neutral3, Neutral4, Neutral6, Neutral7, Neutral8, Neutral9, Orange, PeachDark, PinkNonStandardDarker, Primary, PrimaryGradientRadial, Purple, Red, RedDark
  - BlueNonStandarDarker: Color="blue-non-standard-darker", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=79
  - CyanDarker: Color="cyan-darker", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=61
  - Error: Color="error", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=False, IsSemantic=True, Order=33
  - GreenDark: Color="green-dark", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=66
  - Info: Color="info", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=False, IsSemantic=True, Order=30
  - Inherit: Color="inherit", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=69
  - Neutral0: Color="neutral-0", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=19
  - Neutral10: Color="neutral-10", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=29
  - Neutral2: Color="neutral-2", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=21
  - Neutral3: Color="neutral-3", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=22
  - Neutral4: Color="neutral-4", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=23
  - Neutral6: Color="neutral-6", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=25
  - Neutral7: Color="neutral-7", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=26
  - Neutral8: Color="neutral-8", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=27
  - Neutral9: Color="neutral-9", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=28
  - Orange: Color="orange", IsActive=False, IsBrand=False, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=11
  - PeachDark: Color="peach-dark", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=54
  - PinkNonStandardDarker: Color="pink-non-standard-darker", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=80
  - Primary: Color="primary", IsActive=True, IsBrand=True, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=1
  - PrimaryGradientRadial: Color="primary-gradient-radial", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=74
  - Purple: Color="purple", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=5
  - Red: Color="red", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=10
  - RedDark: Color="red-dark", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=10
- **UBT_ColumnBehaviour** (UBTConnectLibrary): records used: ExpandMiddle, ReduceFirst, ReduceLast, SameSize
  - ExpandMiddle: Id="expand-middle", Order=4
  - ReduceFirst: Id="reduce-first", Order=1
  - ReduceLast: Id="reduce-last", Order=3
  - SameSize: Id="same-size", Order=5
- **UBT_Display** (UBTConnectLibrary): records used: Flex
  - Flex: Id="display-flex", Order=3
- **UBT_FlexBehavior** (UBTConnectLibrary): records used: Grow
  - Grow: Id="flex-grow", Order=2
- **UBT_FlexDirection** (UBTConnectLibrary): records used: Row
  - Row: Id="flex-direction-row", Order=3
- **UBT_FontSize** (UBTConnectLibrary): records used: Base, DoubleExtraSmall, ExtraSmall, Heading1, Heading2, Small
  - Base: Id="base", Order=5
  - DoubleExtraSmall: Id="xxs", Order=1
  - ExtraSmall: Id="xs", Order=3
  - Heading1: Id="h1", Order=11
  - Heading2: Id="h2", Order=10
  - Small: Id="s", Order=4
- **UBT_FontWeight** (UBTConnectLibrary): records used: Regular, SemiBold
  - Regular: Id="regular", Order=2
  - SemiBold: Id="semi-bold", Order=4
- **UBT_Icons2** (UBTConnectLibrary): records used: Add, ArrowDown, ArrowLeftAlt, ArrowUp, Backspace, BookClosed, Boy, ChevronRight, Cottage, Domain, ErrorFill, ExpandMore, Explore, Fingerprint, Girl, Home, HomePIn, HomePinFill, Household, Info, LocationOn, LocationOnFill, Lock, MyLocationFill, Notifications, OpenNew, Person, PersonFill, Remove, SVG_CommunityCountries, SVG_CommunityHouseholds, SVG_CommunityLocalities, SVG_CommunityMembers, Search, Tune
  - Add: Id="connect-icon-add", Is_Active=True, Label="Add"
  - ArrowDown: Id="connect-icon-Arrow-down", Is_Active=True, Label="ArrowDown"
  - ArrowLeftAlt: Id="connect-icon-arrow_left_alt", Is_Active=True, Label="Arrow Left Alt"
  - ArrowUp: Id="connect-icon-Arrow-up1", Is_Active=True, Label="ArrowUp"
  - Backspace: Id="connect-icon-backspace", Is_Active=True, Label="Backspace"
  - BookClosed: Id="connect-icon-book_closed", Is_Active=True, Label="Book Closed"
  - Boy: Id="connect-icon-boy", Is_Active=True, Label="Boy"
  - ChevronRight: Id="connect-icon-chevron_right", Is_Active=True, Label="Chevron Right"
  - Cottage: Id="connect-icon-cottage", Is_Active=True, Label="Cottage"
  - Domain: Id="connect-icon-domain", Is_Active=True, Label="Domain"
  - ErrorFill: Id="connect-icon-error_fill", Is_Active=True, Label="Error Fill"
  - ExpandMore: Id="connect-icon-expand_more", Is_Active=True, Label="Expand More"
  - Explore: Id="connect-icon-explore", Is_Active=True, Label="Explore"
  - Fingerprint: Id="connect-icon-fingerprint", Is_Active=True, Label="Fingerprint"
  - Girl: Id="connect-icon-girl", Is_Active=True, Label="Girl"
  - Home: Id="connect-icon-home", Is_Active=True, Label="Home"
  - HomePIn: Id="connect-icon-home_pin", Is_Active=True, Label="Home PIn"
  - HomePinFill: Id="connect-icon-home_pin_fill", Is_Active=True, Label="Home Pin Fill"
  - Household: Id="connect-icon-family_group", Is_Active=True, Label="Household"
  - Info: Id="connect-icon-info", Is_Active=True, Label="Info"
  - LocationOn: Id="connect-icon-location_on", Is_Active=True, Label="Location On"
  - LocationOnFill: Id="connect-icon-location_on_fill", Is_Active=True, Label="Location On Fill"
  - Lock: Id="connect-icon-lock", Is_Active=True, Label="Lock"
  - MyLocationFill: Id="connect-icon-my_location_fill", Is_Active=True, Label="My Location Fill"
  - Notifications: Id="connect-icon-notifications", Is_Active=True, Label="Notifications"
  - OpenNew: Id="connect-icon-open_new", Is_Active=True, Label="Open New"
  - Person: Id="connect-icon-person", Is_Active=True, Label="Person"
  - PersonFill: Id="connect-icon-person-fill", Is_Active=True, Label="Person Fill"
  - Remove: Id="connect-icon-remove", Is_Active=True, Label="Remove"
  - Search: Id="connect-icon-search", Is_Active=True, Label="Search"
  - SVG_CommunityCountries: Id="SVG_CommunityCountries", Is_Active=True, Label="SVG_CommunityCountries"
  - SVG_CommunityHouseholds: Id="SVG_CommunityHouseholds", Is_Active=True, Label="SVG_CommunityHouseholds"
  - SVG_CommunityLocalities: Id="SVG_CommunityLocalities", Is_Active=True, Label="SVG_CommunityLocalities"
  - SVG_CommunityMembers: Id="SVG_CommunityMembers", Is_Active=True, Label="SVG_CommunityMembers"
  - Tune: Id="connect-icon-tune", Is_Active=True, Label="Tune"
- **UBT_IconsSize** (UBTConnectLibrary): records used: Base_24, Display_36, ExtraSmall_10, NonStandard_14, NonStandard_16, NonStandard_40, Small_12
  - Base_24: Label="icon-base", Order=3
  - Display_36: Label="icon-display", Order=4
  - ExtraSmall_10: Label="icon-extra-small", Order=11
  - NonStandard_14: Label="icon-non-standard-14", Order=6
  - NonStandard_16: Label="icon-non-standard-16", Order=5
  - NonStandard_40: Label="icon-non-standard-40", Order=12
  - Small_12: Label="icon-small", Order=1
- **UBT_ImageCardType** (UBTConnectLibrary): records used: Detail, Gallery, List
  - Detail: Id="detail", Order=3
  - Gallery: Id="gallery", Order=4
  - List: Id="list", Order=1
- **UBT_ImageSize** (UBTConnectLibrary): records used: Auto, Base_52, Large_65, MaxWidth_100vw, Small_40, Square
  - Auto: Id="auto", Order=13
  - Base_52: Id="base", Order=3
  - Large_65: Id="l", Order=5
  - MaxWidth_100vw: Id="max-width", Order=10
  - Small_40: Id="s", Order=2
  - Square: Id="square", Order=14
- **UBT_JustifyContent** (UBTConnectLibrary): records used: Center, SpaceBetween
  - Center: Id="justify-content-center", Order=2
  - SpaceBetween: Id="justify-content-space-between", Order=4
- **UBT_MessageType** (UBTJavaScriptUtils): records used: Error
  - Error: Id=4, Label="Error"
- **UBT_Shadow** (UBTConnectLibrary): records used: ExtraSmall
  - ExtraSmall: Id="xs", Order=3
- **UBT_Shape** (UBTConnectLibrary): records used: Circle, Large, Medium, Soft
  - Circle: Id="circle", Order=6
  - Large: Id="large", Order=4
  - Medium: Id="medium", Order=3
  - Soft: Id="soft", Order=2
- **UBT_Size** (UBTConnectLibrary): records used: Base, DoubleExtraLarge, ExtraLarge, ExtraSmall, Medium, None, Small
  - Base: Id="base", Order=7
  - DoubleExtraLarge: Id="xxl", Order=11
  - ExtraLarge: Id="xl", Order=10
  - ExtraSmall: Id="xs", Order=2
  - Medium: Id="m", Order=8
  - None: Id="none", Order=1
  - Small: Id="s", Order=4
- **UBT_SystemExceptionTypes** (UBTJavaScriptUtils): records used: NotRegisteredException
  - NotRegisteredException: Id="NotRegisteredException"
- **UBT_VerticalAlign** (UBTConnectLibrary): records used: Center
  - Center: Id="center", Order=2
