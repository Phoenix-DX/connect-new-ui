# Pack of UI flow Map (DEV model, MCP dump of flows 2026-10-27)

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
| BottomSheetAnchor | UBTConnectLibrary | ConnectPatterns | - | - | `UBTConnectLibrary.ConnectPatterns.BottomSheetAnchor.mvc.js` |
| Button | UBTConnect_Utils | CW_Common | ButtonExtendedClass: Text; IsDisabled: Boolean; IsIconOnRight: Boolean; ButtonText: Text (mandatory); IconText_SpacingSize: UBT_Size Identifier = xs; TextExtendedClasses: Text; ButtonOptions: ButtonOptions; IconId: UBT_Icons2 Identifier; HideIcon: Boolean | buttonOnClick() | `UBTConnect_Utils.CW_Common.Button.mvc.js` |
| Button | UBTConnectLibrary | ConnectPatterns | In_ButtonOptions: ButtonOptions; In_ExtendedClass: Text; In_IsDisabled: Boolean | Event_OnClick() | `UBTConnectLibrary.ConnectPatterns.Button.mvc.js` |
| ButtonLoading | OutSystemsUI_2_23 | Utilities2 | IsLoading: Boolean (mandatory); ShowLabelOnLoading: Boolean; ExtendedClass: Text | Initialized(ButtonLoadingId: Text (mandatory)) | `OutSystemsUI_2_23.Utilities.ButtonLoading.mvc.js` |
| CacheControl | UBTConnect_Utils | CacheControl | CacheTypeId: Connect_CacheType Identifier (mandatory); CacheKey: Text (mandatory); TimeToLiveSeconds: Integer = 7200; Timeout: Integer = 10 | OnCacheHit(Object: Object (mandatory)); OnNonCacheHit() | `UBTConnect_Utils.CacheControl.CacheControl.mvc.js` |
| CacheControl_AllCountries | UBTConnect_Utils | CacheControl | CacheKey: Text; TimeToLiveSeconds: Integer = 7200 | Result(CacheControl_Response: CacheControl_AllCountries) | `UBTConnect_Utils.CacheControl.CacheControl_AllCountries.mvc.js` |
| CacheControl_AllLocalities | UBTConnect_Utils | CacheControl | CacheKey: Text; TimeToLiveSeconds: Integer = 7200 | Result(CacheControl_Response: CacheControl_AllLocalities) | `UBTConnect_Utils.CacheControl.CacheControl_AllLocalities.mvc.js` |
| CacheControl_Policies | UBTConnect_Utils | CacheControl | CacheKey: Text; TimeToLiveSeconds: Integer = 7200 | Result(CacheControl_Response: CacheControl_Policies) | `UBTConnect_Utils.CacheControl.CacheControl_Policies.mvc.js` |
| CacheControl_UserInfo | UBTConnect_Utils | CacheControl | CacheKey: Text | Result(CacheControl_Response: CacheControl_UserInformation) | `UBTConnect_Utils.CacheControl.CacheControl_UserInfo.mvc.js` |
| CircleButton | UBTConnectLibrary | ConnectPatterns | ExtendedClasses: Text; BackgroundColorId: UBT_Color Identifier; BorderColorId: UBT_Color Identifier; SizeId: UBT_AvatarSize Identifier; IsProcessing: Boolean; PaddingSize: UBT_Size Identifier = s | OnClick() | `UBTConnectLibrary.ConnectPatterns.CircleButton.mvc.js` |
| CircleButton_IconPrimary | UBTConnectLibrary | ConnectPatterns | ExtendedClasses: Text; IconId: UBT_Icons2 Identifier (mandatory); Text: Text; isEnabled: Boolean = True; IconBackgroundColorId: UBT_Color Identifier = cyan-lightest; IconColorId: UBT_Color Identifier = cyan-darker | OnClick() | `UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc.js` |
| Columns_Two | UBTConnectLibrary | BasePatterns | ColumnOptions: ColumnOptions; ExtendedClasses: Text | - | `UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js` |
| ContactByMessage_Wrapper | UBTConnect_Utils | CW_CTA_PopUps | In_ContactPopupData: UI_ContactByMessage_WrapperData (mandatory) | Event_Call(); Event_Cancel(); Event_Email(); Event_MessageChannel(Event_ChannelId: Type_MessageChannel Identifier (mandatory)) | `UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc.js` |
| ContactPopup_ByPhone | UBTConnect_Utils | CW_CTA_PopUps | In_CallPopupData: ContactByPhonePopupData (mandatory); In_ImageSizeId: UBT_ImageSize Identifier = xl | Event_Call(Event_Number: Text (mandatory)); Event_Cancel() | `UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc.js` |
| CustomContainer | UBTConnectLibrary | BasePatterns | ExtendedClasses: Text; Options: ContainerOptions | Clicked() | `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` |
| CustomText | UBTConnectLibrary | BasePatterns | In_Text: Text (mandatory); In_TextOptions: TextOptions (mandatory); In_PaddingOptions: SpacingOptions; In_HighlightWords: Text; In_HighlightOptions: TextOptions; ExtendedClasses: Text; FitContent: Boolean; InJustifyText: Boolean; NoWrap: Boolean; InlineIcon: InlineIcon | Clicked() | `UBTConnectLibrary.BasePatterns.CustomText.mvc.js` |
| DeeplinkHandlerCentral | EventfulDeeplinksPlugin | EventfulDeeplinksPlugin | - | OnDeeplinkOpen(URL: Text (mandatory)) | - |
| Dialog_AccessRestrictedAction | UBTConnect_Utils | CW_App_Common_Blocks_PopupDialogs | In_ExtendedClass: Text | - | `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc.js` |
| EmptyList | UBTConnectLibrary | ConnectPatterns | IconId: UBT_Icons2 Identifier (mandatory) | - | `UBTConnectLibrary.ConnectPatterns.EmptyList.mvc.js` |
| FixedFooter | UBTConnectLibrary | ConnectPatterns | useBottomBar: Boolean (mandatory); ExpectedFooterHeight: Text (mandatory); ContentContainerId: Text (mandatory) | - | `UBTConnectLibrary.ConnectPatterns.FixedFooter.mvc.js` |
| FloatingContent | OutSystemsUI_2_23 | Content | Position: Position Identifier (mandatory); UseFullHeight: Boolean; UseFullWidth: Boolean; UseMargin: Boolean = True; ExtendedClass: Text | - | `OutSystemsUI_2_23.Content.FloatingContent.mvc.js` |
| HandleImageLoadError | Connect2_LegacyShared | Utility | - | - | `Connect2_LegacyShared.Utility.HandleImageLoadError.mvc.js` |
| HorizontalTagList | UBTConnectLibrary | ConnectPatterns | In_TagToggleList: Tag List (mandatory); In_IsSingleSelection: Boolean; In_IsMandatorySelection: Boolean; In_HorizontalPadding: UBT_Size Identifier; ExtendedClasses: Text; isEnabled: Boolean = True | Changed(UpdatedTagList: Tag List) | `UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc.js` |
| Icon | UBTConnectLibrary | ConnectPatterns | In_IconId: UBT_Icons2 Identifier (mandatory); In_ColorId: UBT_Color Identifier = neutral-9; In_SizeId: UBT_IconsSize Identifier; In_Visible: Boolean = True; In_ExtendedClasses: Text = "" | Click() | `UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` |
| IconBadge | UBTConnectLibrary | OutSystemsUIOverrides | Number: Long Integer (mandatory); Color: UBT_Color Identifier = Entities.UBT_Color.Primary; IsLight: Boolean; ExtendedClass: Text; MaxNumber: Integer = 9 | - | `UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc.js` |
| IconText | UBTConnectLibrary | ConnectPatterns | IsIconOnRight: Boolean; Text: Text (mandatory); TextOptions: TextOptions; SpacingSize: UBT_Size Identifier = xs; ExtendedClasses: Text; SubtextOptions: TextOptions; In_Subtext: Text; In_JustifyText: Boolean | Clicked() | `UBTConnectLibrary.ConnectPatterns.IconText.mvc.js` |
| ImageCard_LazyLoading | UBTConnectLibrary | ConnectCorePatterns | In_CardTypeId: UBT_ImageCardType Identifier (mandatory); In_ItemsPerRow: Integer; In_ShowAvatarList: Boolean; In_ExtendedClass: Text; In_IsBookmarked: Boolean; In_BookmarkModifier: Text | Event_Click() | `UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc.js` |
| ImageCard__Content | UBTConnectLibrary | ConnectPatterns | In_Title: Text (mandatory); In_Subtitle: Text; In_ShowSubtitle: Boolean | - | `UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc.js` |
| ImageCard__Content__Tag | UBTConnectLibrary | ConnectPatterns | Content: Text (mandatory) | - | `UBTConnectLibrary.ConnectPatterns.ImageCard__Content__Tag.mvc.js` |
| Input | UBTConnectLibrary | ConnectPatterns | In_Options: SearchInput; In_ExtendedClasses: Text = "" | Event_ClearString(); Event_OnChange(Event_CurrentString: Text (mandatory)); Event_OnFocus(); Event_OnReady(Id: Text (mandatory)); Event_Submit(Event_SubmittedString: Text (mandatory)) | `UBTConnectLibrary.ConnectPatterns.Input.mvc.js` |
| Layout_DetailPage | UBTConnectLibrary | Layouts | In_AlignTitleLeft: Boolean; In_IsPrimaryColor: Boolean = True; In_ExtendedClass: Text; In_EnableAccessibilityFeatures: Boolean; In_InitializeNavigationHandler: Boolean = True; In_IsHideTitle: Boolean | OnReadyEvent(WrapperContainerId: Text (mandatory)) | `UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js` |
| Layout_LoginFlow | UBTConnectLibrary | Layouts | In_HasOverlay: Boolean; In_ExtendedClass: Text; In_IsCommonBlock: Boolean | OnPathCalculated(); OnReady(MainContainerId: Text (mandatory)) | `UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc.js` |
| LeafletMap_Updated | Leaflet | Leaflet | MapOptions: MapOptions; MarkersList: MarkerWithWindow List; TileLayer: TileLayer; GeoJSON_Features: GeoJSONFeature List; ZoomControlOptions: ZoomControlOptions; useClustering: Boolean; centerToCurrentLocation: Boolean | OnGeoJSON_Clicked(GeoJSONId: Text (mandatory); MapId: Text; Type: Text (mandatory); ExtraData: Text (mandatory)); OnGoToMyLocation_Clicked(MapId: Text (mandatory)); OnInitialized(MapId: Text (mandatory)); OnMarker_Clicked(MarkerId: Text (mandatory); MapId: Text; Type: Text (mandatory); ExtraData: Text (mandatory); Lat: Decimal (mandatory); Long: Decimal (mandatory); MarkerObj: Object (mandatory)); OnMoveEnd(MapVisibleBoundaries: MapVisibleBoundaries (mandatory)); OnParametersChanged(); OnZoomEnd(ZoomLevel: Integer (mandatory)); SetCallbacks(MapId: Text (mandatory)) | `Leaflet.Leaflet.LeafletMap_Updated.mvc.js` |
| NavigationHandler | NavigationHandler | NavigationHandler | - | Navigation(NavigationEvent: Object (mandatory)) | `NavigationHandler.NavigationHandler.NavigationHandler.mvc.js` |
| NegativeMargin | UBTConnectLibrary | BasePatterns | MarginOptions: SpacingOptions (mandatory) | - | `UBTConnectLibrary.BasePatterns.NegativeMargin.mvc.js` |
| NotesSheet | UBTConnect_Utils | CW_Notes | In_IsOpen: Boolean (mandatory); ExtendedClasses: Text; In_ItemId: Text (mandatory); In_NoteCategoryId: NoteCategory2 Identifier (mandatory); In_Notes: Notes (mandatory) | On_NoteDeleted(NoteId: Long Integer (mandatory); WasLastNote: Boolean (mandatory)); On_NotesChanged(New_Notes: Notes (mandatory)); On_NoteSheet_Closed() | `UBTConnect_Utils.CW_Notes.NotesSheet.mvc.js` |
| OfflineDataSyncCore | OutSystemsUI_2_23 | Private | - | OnConfigure(); OnSync(SyncUnit: Text (mandatory)); OnSyncComplete(SyncUnit: Text (mandatory)); OnSyncError(SyncUnit: Text (mandatory); ErrorMessage: Text (mandatory)); OnSyncStart(SyncUnit: Text (mandatory)) | `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js` |
| PinUnlock_MobileWrapper | UBT_AppManager_Mobile | Fingerprint | In_PinLength: Integer (mandatory); In_ExtendedClasses: Text (mandatory); In_IsScanFingerprintOnReady: Boolean (mandatory); In_ForceVisible: Boolean; In_AllowBackNavigation: Boolean; In_HideFingerprint: Boolean | KeyPressed(); PincodeChange(InputLength: Integer (mandatory)); PinUnlockError(ErrorMessage: Text (mandatory)); PinUnlockSuccess(); Timeout(); UserLoggedOut() | `UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc.js` |
| PreventBackNavigation | NavigationHandler | NavigationHandler | - | BackNavigationPrevented(BackNavigationEvent: Object (mandatory)) | `NavigationHandler.NavigationHandler.PreventBackNavigation.mvc.js` |
| SearchResult_Item | UBTConnect_Utils | CW_Search | In_SearchResult: SearchResult (mandatory); In_SearchTerm: Text (mandatory); In_ImageHeightId: UBT_ImageSize Identifier; In_ImageWidthId: UBT_ImageSize Identifier; In_ShowSubscriptionWarning: Boolean; In_ImageURL: Text; In_TitleFontSize: UBT_FontSize Identifier = xs; In_LocationTopPadding: UBT_Size Identifier = s | OnClick(SearchResult: SearchResult (mandatory)) | `UBTConnect_Utils.CW_Search.SearchResult_Item.mvc.js` |
| SeeMoreSection | UBTConnectLibrary | ConnectPatterns | StartExpanded: Boolean = True; ExtendedClasses: Text; isEnabled: Boolean = True | - | `UBTConnectLibrary.ConnectPatterns.SeeMoreSection.mvc.js` |
| SelectionOption_List | UBTConnectLibrary | ConnectPatterns | SelectionOption_ItemList: SelectionOption_Item List (mandatory); isMultiselect: Boolean (mandatory); Item_StyleOptions: ContainerOptions; LastItem_StyleOptions: ContainerOptions; IconSizeId: UBT_IconsSize Identifier = icon-non-standard-16 | NotEnabledOnClick(ClickedItemId: Text (mandatory)); OnSelectionChange(SelectedItems: SelectionOption_Item List (mandatory); ClickedItemId: Text (mandatory)) | `UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc.js` |
| SharePopup | UBTConnect_Utils | CW_CTA_PopUps | In_ContactPopupData: ContactPopupData (mandatory); In_ImageSizeId: UBT_ImageSize Identifier = xl | Event_Cancel(); Event_ShareToConnect(); Event_ShareToOthers() | `UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc.js` |
| ShareSheet | UBTConnect_Utils | CW_Share | In_IsOpen: Boolean (mandatory); In_ShareObjectTypeId: Type_ShareObject Identifier (mandatory); In_ShareableObjectId: Text (mandatory); In_IsLegacy: Boolean; In_UpdateType: Text; In_UpdateDate: Date | Event_ClosedShareSheet() | `UBTConnect_Utils.CW_Share.ShareSheet.mvc.js` |
| ShareableObject_Generic | UBTConnect_Utils | CW_Share | In_ShareableObject: UI_ShareableObject_Generic (mandatory) | Event_OnClick() | `UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc.js` |
| Sidebar | OutSystemsUI_2_23 | Interaction | StartsOpen: Boolean; Direction: Direction Identifier = right; HasOverlay: Boolean; Width: Text = "500px"; ExtendedClass: Text | Initialized(SidebarId: Text); OnToggle(SidebarId: Text (mandatory); IsOpen: Boolean) | `OutSystemsUI_2_23.Interaction.Sidebar.mvc.js` |
| SkeletonSection | UBTConnectLibrary | ConnectPatterns | In_IsLoading: Boolean (mandatory); In_ExtendedClass: Text; In_IsActiveWhileLoading: Boolean | - | `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js` |
| Statistics_ListItem | UBTConnectLibrary | ConnectCorePatterns | In_StatisticsOptions: StatisticsOptions (mandatory); In_ExtendedClasses: Text; In_HighlightWords: Text; In_ShowSubtitle: Boolean; In_HasActionsMenu: Boolean; In_HideBorder: Boolean | Event_Clicked() | `UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem.mvc.js` |
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
| AssignFromObject | NavigationHandler | Preloading | ToObjectRef: Object (mandatory); ObjectValue: Object (mandatory) | AssignedObjectRef: Object |
| Bookmark_SendFeedbackMessage | UBTConnect_Utils | CommonMessages | IsCreate: Boolean; isError: Boolean | - |
| BottomBarSlider_ForceRefresh | UBTConnectLibrary | BottomBar_Slider | - | - |
| BottomBar_GetList | UBTConnect_Utils | BottomBar | useMapsItems: Boolean; isHouseholder: Boolean (mandatory) | BottomBar_ItemsList: BottomBar_Item List |
| BottomSheetClose | OutSystemsUI_2_23 | BottomSheet | WidgetId: Text (mandatory) | Success: Boolean; ErrorMessage: ErrorMessage |
| BottomSheetOpen | OutSystemsUI_2_23 | BottomSheet | WidgetId: Text (mandatory) | Success: Boolean; ErrorMessage: ErrorMessage |
| BottomSheet_SetDragEnabled | UBTConnectLibrary | BottomSheet | In_SheetId: Text (mandatory); In_IsEnabled: Boolean (mandatory) | - |
| ConfigureOfflineDataSync | OutSystemsUI_2_23 | OfflineDataSync | SyncOnOnline: Boolean (mandatory); SyncOnResume: Boolean (mandatory); RetryOnError: Boolean (mandatory); RetryIntervalInSeconds: Integer (mandatory) | - |
| Create_LocalBookmark_C2 | UBTConnect_Bookmarks_MCS | Bookmarks_LocalStorage | In_ItemId: Text (mandatory); In_BookmarkCategoryId: BookmarkCategory Identifier (mandatory); In_BookmarkId: Long Integer (mandatory); In_DateCreatedUtc: Date Time | LocalBookmarkId: LocalBookmark2 Identifier |
| Delete_LocalBookmarkByBookmarkId_C2 | UBTConnect_Bookmarks_MCS | Bookmarks_LocalStorage | BookmarkId: Long Integer (mandatory) | - |
| EndOfflineDataSync | OutSystemsUI_2_23 | OfflineDataSync | HasError: Boolean (mandatory); ErrorMessage: Text = ""; AllowRetry: Boolean | - |
| FeedbackMessage_AutoClose | UBTJavaScriptUtils | JSUtils_FeedbackMessage | Title: Text; Message: Text (mandatory); MessageType: UBT_MessageType Identifier = Entities.UBT_MessageType.Error; EncodedHTML: Boolean = True; ExtendedClass: Text; DelayMs: Integer = 0; useDebounce: Boolean | - |
| GetHasCarouselEnabled | UBTConnect_Utils | Permissions_FF_Wrappers_OutSystems | - | HasCarouselEnabled: Boolean |
| GetLocalBookmarkByObjectId_C2 | UBTConnect_Bookmarks_MCS | Bookmarks_LocalStorage | ItemId: Text (mandatory) | LocalBookmark: LocalBookmark2 |
| GetUserCurrentGeoLocation | UBTConnect_Utils | Location | - | Latitude: Decimal; Longitude: Decimal; isSuccess: Boolean |
| Input_ClearString | UBTConnectLibrary | Input | InputId: Text (mandatory); FocusOnInput: Boolean | - |
| IsCordovaDefined | CommonPlugin | - | - | IsLoaded: Boolean |
| JSUtilis_Element_Operations_Focus | UBTJavaScriptUtils | JSUtilis_Element_Operations | Id: Text (mandatory) | - |
| JSUtils_SetStyleProperty | UBTJavaScriptUtils | JSUtils | ObjectId: Text (mandatory); PropertyName: Text (mandatory); PropertyValue: Text (mandatory) | - |
| JSUtils_String_Split | UBTJavaScriptUtils | JSUtils_StringManipulation | String: Text (mandatory); Char: Text (mandatory) | List: Text List |
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
| LogMessage | (System) | - | Message: Text (mandatory); ModuleName: Text (mandatory) | - |
| Map_ClearStopgapLayer | Leaflet | Map_Utils_Marker | MapId: Text (mandatory); LayerKey: Text (mandatory) | - |
| Map_FlyTo | Leaflet | Map_Utils | MapId: Text (mandatory); Latitude: Decimal (mandatory); Longitude: Decimal (mandatory); ZoomLevel: Integer (mandatory); isAnimate: Boolean = True; Duration: Decimal = 0.25 | - |
| Map_GeoJSON_Feature_Add | Leaflet | Map_Utils_GeoJSON | GeoJSON_Feature: GeoJSONFeature (mandatory); MapId: Text (mandatory); OnClickFunction: Object (mandatory) | - |
| Map_GeoJSON_Feature_Remove | Leaflet | Map_Utils_GeoJSON | MapId: Text (mandatory); GeoJSONId: Text (mandatory) | - |
| Map_GeoJSON_FitBounds | Leaflet | Map_Utils_GeoJSON | MapId: Text (mandatory); GeoJSONId: Text (mandatory) | - |
| Map_GeoJSON_GetFeatureIdsAtPoint2 | Leaflet | Map_Utils_GeoJSON | Latitude: Decimal (mandatory); Longitude: Decimal (mandatory); GeoJSONFeatures: GeoJSONFeature List (mandatory) | Matches: Map_GeoJSON_PointMatch List |
| Map_GetBoundsByZoomLevel | Leaflet | Map_Utils | MapId: Text (mandatory); ZoomLevel: Integer (mandatory) | MinLat: Decimal; MaxLat: Decimal; MinLong: Decimal; MaxLong: Decimal |
| Map_GetCurrentView | Leaflet | Map_Utils | MapId: Text (mandatory) | Latitude: Decimal; Longitude: Decimal; ZoomLevel: Integer |
| Map_GetOnMarkerClickedCallback | Leaflet | Map_Utils | MapId: Text (mandatory) | Callback: Object |
| Map_IsViewportInsideZoomLevel | Leaflet | Map_Utils | MapId: Text (mandatory); MinLat: Decimal; MaxLat: Decimal; MinLong: Decimal; MaxLong: Decimal | IsInsideZoomLevel: Boolean |
| Map_Layer_SetStopgapVisible | Leaflet | Map_Utils | MapId: Text (mandatory); Visible: Boolean (mandatory) | - |
| Map_Layer_SetVisible | Leaflet | Map_Utils | MapId: Text (mandatory); Type: Text (mandatory); Visible: Boolean (mandatory) | - |
| Map_Marker_Add | Leaflet | Map_Utils_Marker | MapId: Text (mandatory); MarkerWithWindow: MarkerWithWindow (mandatory); OnClickFunction: Object (mandatory); UseTypeBasedClustering: Boolean | - |
| Map_Marker_Delete | Leaflet | Map_Utils_Marker | MapId: Text (mandatory); MarkerId: Text (mandatory) | - |
| Map_Markers_BulkAddChunked | Leaflet | Map_Utils_Marker | MapId: Text (mandatory); MarkersWithWindow: MarkerWithWindow List (mandatory); OnClickFunction: Object (mandatory); UseTypeBasedClustering: Boolean; PriorityMinLat: Decimal = 0; PriorityMaxLat: Decimal = 0; PriorityMinLong: Decimal = 0; PriorityMaxLong: Decimal = 0; UseStopgapLayer: Boolean | - |
| Map_Zoom_GetLevel | Leaflet | Map_Utils | MapId: Text (mandatory) | ZoomLevel: Integer |
| OpenAppSettings | Connect2_OpenAppSettingsPlugin | - | - | Success: Boolean; ErrorMessage: Text |
| OpenInApp_OpenExternalLink | UBTConnect_Utils | OpenInApp_Utils | Url: Text (mandatory); InNewTab: Boolean | - |
| OpenPolicy | UBTConnect_Utils | Policies | PolicyInformation: PolicyInformation2 (mandatory); ErrorMessage: Text = "This policy couldn't be found." | - |
| PIN_Check | UBT_AppManager | PIN | - | NeedRegister: Boolean; NeedUnlock: Boolean |
| PreventNavigation | NavigationHandler | NavigationHandler | NavigationEvent: Object (mandatory) | - |
| PutCacheableObject | MemoryClientCache | MemoryCache | MemoryCacheTypeId: MemoryCacheType Identifier (mandatory); CacheKey: Text (mandatory); Object: Object (mandatory); CacheTimeToLiveSeconds: Integer (mandatory) | - |
| ResetReplaceOnUpcomingNavigation | NavigationHandler | NavigationHandler | - | - |
| ScreenController_RaiseCommunicationError | UBTJavaScriptUtils | JSUtils_ScreenController | Message: Text (mandatory) | - |
| ScreenController_RaiseError | UBTJavaScriptUtils | JSUtils_ScreenController | Message: Text (mandatory) | - |
| ScreenController_RaiseTypedException | UBTJavaScriptUtils | JSUtils_ScreenController | Message: Text (mandatory); ExceptionId: UBT_SystemExceptionTypes Identifier (mandatory); SpecificType: Text; ExtraStack: Text | - |
| ScreenModel_Flush | UBTJavaScriptUtils | JSUtils_Model | - | - |
| SearchCategory_GetList | UBTConnect_Utils | SearchCategories | - | SearchCategoryItemsList: SearchCategory_Item List |
| SetBottomBarActiveElement | OutSystemsUI_2_23 | Menu | ActiveItem: Integer = -1 | Success: Boolean; ErrorMessage: ErrorMessage |
| SetPreloadObject | NavigationHandler | Preloading | Preload: Object (mandatory) | - |
| ShareEntity_ByURL | UBTConnect_Utils | Share | In_ShareTypeId: Type_ShareObject Identifier (mandatory); In_ShareableObjectId: Text (mandatory); In_UpdateType: Text; In_UpdateDate: Date | - |
| SidebarClose | OutSystemsUI_2_23 | Sidebar | WidgetId: Text (mandatory) | Success: Boolean; ErrorMessage: ErrorMessage |
| SidebarOpen | OutSystemsUI_2_23 | Sidebar | WidgetId: Text (mandatory) | Success: Boolean; ErrorMessage: ErrorMessage |
| Turf_DistanceBetwwen2Coordinates | TurfJS | TurfFuncitons | Point1: LatLong (mandatory); Point2: LatLong (mandatory) | DistanceInKm: Decimal |

## Static entity records named by the flow (Entities.<Entity>.<Record>)

- **BookmarkCategory** (UBTConnect_Bookmarks_MCS): records used: Household, Interchange, Locality, Member, OneSchoolGlobal2, SupperMeeting
  - Household: Id="Household", Initials="H", Label="Households"
  - Interchange: Id="Interchange", Initials="I", Label="Interchange"
  - Locality: Id="Locality", IsActive=False, Label="Localities"
  - Member: Id="Member", Label="Members"
  - OneSchoolGlobal2: Id="OneSchoolGlobal", Label="OneSchool Global"
  - SupperMeeting: Id="Supper Meeting", Label="Supper Meetings"
- **CacheableMapObjects** (Connect_Map_CS): records used: CountriesGeoJSON, CountriesMarker, GlobalEntities, Households, HouseholdsExploreItems, LocalitiesGeoJSON, LocalitiesMarker
  - CountriesGeoJSON: Id="MapCountriesGeoJSON", Order=4
  - CountriesMarker: Id="MapCountriesMarker", Order=4
  - GlobalEntities: Id="MapGlobalEntities", Order=2
  - Households: Id="MapHouseholds", Order=1
  - HouseholdsExploreItems: Id="MapHouseholdsExploreItems", Order=1
  - LocalitiesGeoJSON: Id="MapLocalitiesGeoJSON", Order=3
  - LocalitiesMarker: Id="MapLocalitiesMarker", Order=3
- **Choice** (Connect_CommonEntities_DB): records used: No, None, Yes
  - No: Id="No"
  - None: Id="None"
  - Yes: Id="Yes"
- **Connect_BottomBar_Items** (UBTConnect_Utils): records used: Bookmarked, Bookmarks, Directory, Explore, Home, Menu, Settings, Updates
  - Bookmarked: Id="Bookmarked"
  - Bookmarks: Id="Bookmarks"
  - Directory: Id="Directory"
  - Explore: Id="Explore"
  - Home: Id="Home"
  - Menu: Id="Menu"
  - Settings: Id="Settings"
  - Updates: Id="Updates"
- **Connect_Entity** (Connect_CommonEntities_DB): records used: Country, FeedItem, Household, Interchange, Locality, Member, OneSchoolGlobal, SupperMeetings_aka_Subdivisions
  - Country: APIKey="Country", Id="Country", Is_Active=True, Label="Country", Order=8
  - FeedItem: APIKey="FeedItem", Id="Feed Item", Is_Active=True, Label="Feed Item", Order=7
  - Household: APIKey="Household", Id="Household", Is_Active=True, Label="Household", Order=1
  - Interchange: APIKey="", Id="Interchange", Is_Active=True, Label="Interchange", Order=4
  - Locality: APIKey="Locality", Id="Locality", Is_Active=True, Label="Locality", Order=5
  - Member: APIKey="Member", Id="Member", Is_Active=True, Label="Member", Order=6
  - OneSchoolGlobal: APIKey="", Id="OneSchool Global", Is_Active=True, Label="OneSchool Global", Order=2
  - SupperMeetings_aka_Subdivisions: APIKey="Subdivision", Id="Supper Meetings", Is_Active=True, Label="Supper Meetings", Order=3
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
- **Position** (OutSystemsUI_2_23): records used: Top
  - Top: Position="top"
- **Shape** (OutSystemsUI_2_23): records used: Rounded
  - Rounded: Order=2, Shape="rounded"
- **Type_SearchTarget** (Connect_Search_CS): records used: Global, Map
  - Global: Id="Global", Order=1
  - Map: Id="Map", Order=2
- **Type_ShareObject** (Connect2_Sharing_CS): records used: Feed, Household, Locality, MyHousehold, OneSchoolGlobal, SupperMeeting
  - Feed: APIKey="FeedItem", Id="Feed", Is_Active=True, Label="Feed", NotificationTitle="shared a Feed", Order=7
  - Household: APIKey="Members", Id="Household", Is_Active=True, Label="Household", NotificationTitle="shared a Household", Order=3
  - Locality: Id="Locality", Is_Active=True, Label="Locality", Order=5
  - MyHousehold: APIKey="My Profile", Id="My Household", Is_Active=True, Label="Household", LabelPrefix="my", NotificationTitle="shared a Household", Order=3
  - OneSchoolGlobal: APIKey="OneSchool Global", Id="OneSchool Global", Is_Active=True, Label="OneSchool Global", NotificationTitle="shared a OneSchool Global", Order=4
  - SupperMeeting: APIKey="Supper Meeting", Id="Supper Meeting", Is_Active=True, Label="Supper Meeting", NotificationTitle="shared a Supper Meeting", Order=2
- **UBT_AlignItems** (UBTConnectLibrary): records used: Center
  - Center: Id="align-items-center", Order=2
- **UBT_AvatarSize** (UBTConnectLibrary): records used: Base_52, Small_40
  - Base_52: Id="base", Order=4
  - Small_40: Id="s", Order=3
- **UBT_ButtonSize** (UBTConnectLibrary): records used: Medium, Small
  - Medium: Id="m", Order=2
  - Small: Id="s", Order=3
- **UBT_ButtonType** (UBTConnectLibrary): records used: Primary, Scondary, Tertiary
  - Primary: Id="primary", Order=1
  - Scondary: Id="secondary", Order=2
  - Tertiary: Id="tertiary", Order=3
- **UBT_Color** (UBTConnectLibrary): records used: CyanDarker, Inherit, Neutral0, Neutral10, Neutral2, Neutral3, Neutral4, Neutral5, Neutral6, Neutral7, Neutral8, Neutral9, Primary, Red
  - CyanDarker: Color="cyan-darker", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=61
  - Inherit: Color="inherit", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=69
  - Neutral0: Color="neutral-0", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=19
  - Neutral10: Color="neutral-10", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=29
  - Neutral2: Color="neutral-2", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=21
  - Neutral3: Color="neutral-3", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=22
  - Neutral4: Color="neutral-4", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=23
  - Neutral5: Color="neutral-5", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=24
  - Neutral6: Color="neutral-6", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=25
  - Neutral7: Color="neutral-7", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=26
  - Neutral8: Color="neutral-8", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=27
  - Neutral9: Color="neutral-9", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=28
  - Primary: Color="primary", IsActive=True, IsBrand=True, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=1
  - Red: Color="red", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=10
- **UBT_ColumnBehaviour** (UBTConnectLibrary): records used: ReduceFirst, ReduceLast
  - ReduceFirst: Id="reduce-first", Order=1
  - ReduceLast: Id="reduce-last", Order=3
- **UBT_Display** (UBTConnectLibrary): records used: Flex
  - Flex: Id="display-flex", Order=3
- **UBT_FlexBehavior** (UBTConnectLibrary): records used: Grow
  - Grow: Id="flex-grow", Order=2
- **UBT_FontSize** (UBTConnectLibrary): records used: Base, DoubleExtraSmall, ExtraSmall, Heading6, Small
  - Base: Id="base", Order=5
  - DoubleExtraSmall: Id="xxs", Order=1
  - ExtraSmall: Id="xs", Order=3
  - Heading6: Id="h6", Order=6
  - Small: Id="s", Order=4
- **UBT_FontWeight** (UBTConnectLibrary): records used: Bold, Regular, SemiBold
  - Bold: Id="bold", Order=5
  - Regular: Id="regular", Order=2
  - SemiBold: Id="semi-bold", Order=4
- **UBT_Icons2** (UBTConnectLibrary): records used: Add, ArrowLeftAlt, ArrowOutward, Backspace, Calendar, ChevronRight, Close, Cottage, ErrorFill, Fingerprint, History, HomePIn, HouseFill, LocationOn, Lock, MyLocationFill, OpenNew, PartnerExchange, Remove, School, Tune
  - Add: Id="connect-icon-add", Is_Active=True, Label="Add"
  - ArrowLeftAlt: Id="connect-icon-arrow_left_alt", Is_Active=True, Label="Arrow Left Alt"
  - ArrowOutward: Id="connect-icon-arrow_outward", Is_Active=True, Label="Arrow Outward"
  - Backspace: Id="connect-icon-backspace", Is_Active=True, Label="Backspace"
  - Calendar: Id="connect-icon-calendar", Is_Active=True, Label="Calendar"
  - ChevronRight: Id="connect-icon-chevron_right", Is_Active=True, Label="Chevron Right"
  - Close: Id="connect-icon-close", Is_Active=True, Label="Close"
  - Cottage: Id="connect-icon-cottage", Is_Active=True, Label="Cottage"
  - ErrorFill: Id="connect-icon-error_fill", Is_Active=True, Label="Error Fill"
  - Fingerprint: Id="connect-icon-fingerprint", Is_Active=True, Label="Fingerprint"
  - History: Id="connect-icon-history", Is_Active=True, Label="History"
  - HomePIn: Id="connect-icon-home_pin", Is_Active=True, Label="Home PIn"
  - HouseFill: Id="connect-icon-house_fill", Is_Active=True, Label="HouseFill"
  - LocationOn: Id="connect-icon-location_on", Is_Active=True, Label="Location On"
  - Lock: Id="connect-icon-lock", Is_Active=True, Label="Lock"
  - MyLocationFill: Id="connect-icon-my_location_fill", Is_Active=True, Label="My Location Fill"
  - OpenNew: Id="connect-icon-open_new", Is_Active=True, Label="Open New"
  - PartnerExchange: Id="connect-icon-partner_exchange", Is_Active=True, Label="Partner Exchange"
  - Remove: Id="connect-icon-remove", Is_Active=True, Label="Remove"
  - School: Id="connect-icon-school", Is_Active=True, Label="School"
  - Tune: Id="connect-icon-tune", Is_Active=True, Label="Tune"
- **UBT_IconsSize** (UBTConnectLibrary): records used: Base_24, Display_36, NonStandard_14, NonStandard_16, NonStandard_32, Small_12
  - Base_24: Label="icon-base", Order=3
  - Display_36: Label="icon-display", Order=4
  - NonStandard_14: Label="icon-non-standard-14", Order=6
  - NonStandard_16: Label="icon-non-standard-16", Order=5
  - NonStandard_32: Label="icon-non-standard-32", Order=7
  - Small_12: Label="icon-small", Order=1
- **UBT_ImageCardType** (UBTConnectLibrary): records used: Detail
  - Detail: Id="detail", Order=3
- **UBT_ImageSize** (UBTConnectLibrary): records used: Base_52, ExtraSmall_32, FullWidth_100_Percent, MaxWidth_100vw, Small_40, Square
  - Base_52: Id="base", Order=3
  - ExtraSmall_32: Id="xs", Order=1
  - FullWidth_100_Percent: Id="full-width", Order=12
  - MaxWidth_100vw: Id="max-width", Order=10
  - Small_40: Id="s", Order=2
  - Square: Id="square", Order=14
- **UBT_JustifyContent** (UBTConnectLibrary): records used: Center
  - Center: Id="justify-content-center", Order=2
- **UBT_MessageType** (UBTJavaScriptUtils): records used: Error, Success
  - Error: Id=4, Label="Error"
  - Success: Id=2, Label="Success"
- **UBT_Shadow** (UBTConnectLibrary): records used: ExtraSmall, ExtraSmallTop
  - ExtraSmall: Id="xs", Order=3
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
- **UBT_SystemExceptionTypes** (UBTJavaScriptUtils): records used: NotRegisteredException
  - NotRegisteredException: Id="NotRegisteredException"
- **UBT_VerticalAlign** (UBTConnectLibrary): records used: Center
  - Center: Id="center", Order=2
