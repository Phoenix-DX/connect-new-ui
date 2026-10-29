# Shared pack: block-only flows and shared client actions (DEV model, MCP dump 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.

## Referenced blocks (other modules) used by the flow

Logic of these blocks is not in the dump. 'TST file' is the compiled code on TST (`python3 migration/clarify/tools/tst_source.py show <file>`), when the survey has it.

| Block | Module | Flow | Inputs | Events | TST file |
|---|---|---|---|---|---|
| ActionConfirmationDialog | NavigationHandler | ConfirmationDialogs | - | Confirmed() | `NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc.js` |
| ActionsMenu | UBTConnectLibrary | ConnectCorePatterns | In_ActionsMenuOptions: ActionsMenuOptions (mandatory); In_ActionsEnableOptions: ActionsMenuEnableOptions; IsEnabled: Boolean = True; InShowLabels: Boolean = True | Event_Click_Bookmark(); Event_Click_Call(); Event_Click_Email(); Event_Click_Gift(); Event_Click_Notes(); Event_Click_Share(); Event_Click_Unbookmark(); Event_Click_ViewDetails() | `UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc.js` |
| AddressPopup_Wrapper | UBTConnect_Utils | CW_CTA_PopUps | In_Address: Text (mandatory); IsEnabled: Boolean = True; IconVisible: Boolean = True; In_Coordinates: Directory_Coordinates | - | `UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc.js` |
| BackNavigationHandler | NavigationHandler | NavigationHandler | Priority: Integer | BackNavigation(BackNavigationEvent: Object (mandatory)) | `NavigationHandler.NavigationHandler.BackNavigationHandler.mvc.js` |
| BottomSheet | OutSystemsUI_2_23 | Interaction | Shape: Shape Identifier = soft; ShowHandler: Boolean = True; ExtendedClass: Text | Initialized(BottomSheetId: Text (mandatory)); OnToggle(BottomSheetId: Text (mandatory); IsOpen: Boolean) | `OutSystemsUI_2_23.Interaction.BottomSheet.mvc.js` |
| BottomSheet | UBTConnectLibrary | ConnectPatterns | Title: Text (mandatory); ShowHandlerPreview: Boolean; HandlerPreviewOffset: Text; ShowHeader: Boolean = True; Content_BackgroundColorId: UBT_Color Identifier; Content_Padding: SpacingOptions; FooterHeight: Text = "0px"; ExtendedClasses: Text; isTransparentOverlay: Boolean; CloseOnClickOutsite: Boolean; ShowBackButton: Boolean; IsNotInertWhenClosed: Boolean; IsHideContentWhenClosed: Boolean; In_TouchActionNoneFix: Boolean | Initialized(Id: Text (mandatory)); OnBack(); OnClose(); OnToggle(IsOpen: Boolean (mandatory)) | `UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc.js` |
| Button | UBTConnect_Utils | CW_Common | ButtonExtendedClass: Text; IsDisabled: Boolean; IsIconOnRight: Boolean; ButtonText: Text (mandatory); IconText_SpacingSize: UBT_Size Identifier = xs; TextExtendedClasses: Text; ButtonOptions: ButtonOptions; IconId: UBT_Icons2 Identifier; HideIcon: Boolean | buttonOnClick() | `UBTConnect_Utils.CW_Common.Button.mvc.js` |
| Button | UBTConnectLibrary | ConnectPatterns | In_ButtonOptions: ButtonOptions; In_ExtendedClass: Text; In_IsDisabled: Boolean | Event_OnClick() | `UBTConnectLibrary.ConnectPatterns.Button.mvc.js` |
| CacheControl | UBTConnect_Utils | CacheControl | CacheTypeId: Connect_CacheType Identifier (mandatory); CacheKey: Text (mandatory); TimeToLiveSeconds: Integer = 7200; Timeout: Integer = 10 | OnCacheHit(Object: Object (mandatory)); OnNonCacheHit() | `UBTConnect_Utils.CacheControl.CacheControl.mvc.js` |
| CacheControl_AllCountries | UBTConnect_Utils | CacheControl | CacheKey: Text; TimeToLiveSeconds: Integer = 7200 | Result(CacheControl_Response: CacheControl_AllCountries) | `UBTConnect_Utils.CacheControl.CacheControl_AllCountries.mvc.js` |
| CacheControl_AllLocalities | UBTConnect_Utils | CacheControl | CacheKey: Text; TimeToLiveSeconds: Integer = 7200 | Result(CacheControl_Response: CacheControl_AllLocalities) | `UBTConnect_Utils.CacheControl.CacheControl_AllLocalities.mvc.js` |
| CacheControl_UserInfo | UBTConnect_Utils | CacheControl | CacheKey: Text | Result(CacheControl_Response: CacheControl_UserInformation) | `UBTConnect_Utils.CacheControl.CacheControl_UserInfo.mvc.js` |
| Carousel | OutSystemsUI_2_23 | Interaction | Navigation: CarouselNavigation Identifier = both; Height: Text = "auto"; ItemsPerSlide: CarouselItems; OptionalConfigs: CarouselOptionalConfigs; ExtendedClass: Text | Initialized(CarouselId: Text (mandatory)); OnSlideMoved(CarouselId: Text (mandatory); ItemIndex: Integer) | `OutSystemsUI_2_23.Interaction.Carousel.mvc.js` |
| Columns_Three | UBTConnectLibrary | BasePatterns | ExtendedClasses: Text; ColumnOptions: ColumnOptions | - | `UBTConnectLibrary.BasePatterns.Columns_Three.mvc.js` |
| Columns_Two | UBTConnectLibrary | BasePatterns | ColumnOptions: ColumnOptions; ExtendedClasses: Text | - | `UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js` |
| ContactByMessage_Wrapper | UBTConnect_Utils | CW_CTA_PopUps | In_ContactPopupData: UI_ContactByMessage_WrapperData (mandatory) | Event_Call(); Event_Cancel(); Event_Email(); Event_MessageChannel(Event_ChannelId: Type_MessageChannel Identifier (mandatory)) | `UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc.js` |
| ContactPopup_ByPhone | UBTConnect_Utils | CW_CTA_PopUps | In_CallPopupData: ContactByPhonePopupData (mandatory); In_ImageSizeId: UBT_ImageSize Identifier = xl | Event_Call(Event_Number: Text (mandatory)); Event_Cancel() | `UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc.js` |
| CustomContainer | UBTConnectLibrary | BasePatterns | ExtendedClasses: Text; Options: ContainerOptions | Clicked() | `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` |
| CustomText | UBTConnectLibrary | BasePatterns | In_Text: Text (mandatory); In_TextOptions: TextOptions (mandatory); In_PaddingOptions: SpacingOptions; In_HighlightWords: Text; In_HighlightOptions: TextOptions; ExtendedClasses: Text; FitContent: Boolean; InJustifyText: Boolean; NoWrap: Boolean; InlineIcon: InlineIcon | Clicked() | `UBTConnectLibrary.BasePatterns.CustomText.mvc.js` |
| EmptyList | UBTConnectLibrary | ConnectPatterns | IconId: UBT_Icons2 Identifier (mandatory) | - | `UBTConnectLibrary.ConnectPatterns.EmptyList.mvc.js` |
| EventCard | Connect2_OrbitMobile_MUI | LDM_Blocks | - | CallPhoneEventCard(PhoneCallInfo: Text (mandatory)); EventClicked(Event_EventHostId: Long Integer (mandatory); Event_EventId: Long Integer (mandatory)); HouseholdClicked(Event_HouseholdId: Long Integer (mandatory); Event_HouseholdName: Text (mandatory); Event_CurrentRowNumber: Integer (mandatory); Event_Length: Integer (mandatory); Event_EventHostId: Long Integer (mandatory); Event_EventId: Long Integer (mandatory); Event_RecordDisabled: Boolean (mandatory); Event_IsHosting: Boolean (mandatory); Event_IsHouseholdDisplayed: Boolean (mandatory); Event_HouseholdIdList: Text (mandatory)); OnClick_Message(Event_ContactPopupData: Text; Event_CountryName: Text (mandatory)); OnClick_PhoneCall(Event_PhoneCallInfo: Text (mandatory)) | `Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard.mvc.js` |
| EventCard | UBTConnectLibrary | ConnectPatterns | InDate: Date (mandatory); In_HeaderTextColorId: UBT_Color Identifier (mandatory); In_HeaderBackgroundColorId: UBT_Color Identifier (mandatory); In_HeaderIconId: UBT_Icons2 Identifier (mandatory); In_HeaderLabel: Text (mandatory); In_ShowPastLabel: Boolean | OnClickEvent() | `UBTConnectLibrary.ConnectPatterns.EventCard.mvc.js` |
| ExitConfirmationDialog | NavigationHandler | ConfirmationDialogs | Force: Boolean | - | `NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc.js` |
| Gallery | OutSystemsUI_2_23 | Adaptive | RowItemsDesktop: Integer = 4; RowItemsTablet: Integer = 3; RowItemsPhone: Integer = 1; ItemsGap: Space Identifier = base; ExtendedClass: Text | Initialized(GalleryId: Text (mandatory)) | `OutSystemsUI_2_23.Adaptive.Gallery.mvc.js` |
| HorizontalTagList | UBTConnectLibrary | ConnectPatterns | In_TagToggleList: Tag List (mandatory); In_IsSingleSelection: Boolean; In_IsMandatorySelection: Boolean; In_HorizontalPadding: UBT_Size Identifier; ExtendedClasses: Text; isEnabled: Boolean = True | Changed(UpdatedTagList: Tag List) | `UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc.js` |
| HouseholdMember_ListItem | UBTConnectLibrary | ConnectCorePatterns | Title: Text (mandatory); isEnabled: Boolean = True; LifeCycleText: Text (mandatory); LifeCycleText_Italic: Boolean (mandatory) | OnClickPerson() | - |
| Icon | UBTConnectLibrary | ConnectPatterns | In_IconId: UBT_Icons2 Identifier (mandatory); In_ColorId: UBT_Color Identifier = neutral-9; In_SizeId: UBT_IconsSize Identifier; In_Visible: Boolean = True; In_ExtendedClasses: Text = "" | Click() | `UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` |
| IconBadge | UBTConnectLibrary | OutSystemsUIOverrides | Number: Long Integer (mandatory); Color: UBT_Color Identifier = Entities.UBT_Color.Primary; IsLight: Boolean; ExtendedClass: Text; MaxNumber: Integer = 9 | - | `UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc.js` |
| IconText | UBTConnectLibrary | ConnectPatterns | IsIconOnRight: Boolean; Text: Text (mandatory); TextOptions: TextOptions; SpacingSize: UBT_Size Identifier = xs; ExtendedClasses: Text; SubtextOptions: TextOptions; In_Subtext: Text; In_JustifyText: Boolean | Clicked() | `UBTConnectLibrary.ConnectPatterns.IconText.mvc.js` |
| ImageCard | UBTConnectLibrary | ConnectCorePatterns | In_BackgroundURL: Text (mandatory); In_AvatarURLs: AvatarImage List; In_AvatarURLsMaxLimit: Integer; In_CardTypeId: UBT_ImageCardType Identifier (mandatory); In_ShowAvatarList: Boolean; In_ExtendedClass: Text; isLoadingImage: Boolean; UnavailableImageType: Type_Image Identifier; In_IsBookmarked: Boolean; In_BookmarkModifier: Text | Event_Click() | `UBTConnectLibrary.ConnectCorePatterns.ImageCard.mvc.js` |
| ImageCard_LazyLoading | UBTConnectLibrary | ConnectCorePatterns | In_CardTypeId: UBT_ImageCardType Identifier (mandatory); In_ItemsPerRow: Integer; In_ShowAvatarList: Boolean; In_ExtendedClass: Text; In_IsBookmarked: Boolean; In_BookmarkModifier: Text | Event_Click() | `UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc.js` |
| ImageCard__Content | UBTConnectLibrary | ConnectPatterns | In_Title: Text (mandatory); In_Subtitle: Text; In_ShowSubtitle: Boolean | - | `UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc.js` |
| Input | UBTConnectLibrary | ConnectPatterns | In_Options: SearchInput; In_ExtendedClasses: Text = "" | Event_ClearString(); Event_OnChange(Event_CurrentString: Text (mandatory)); Event_OnFocus(); Event_OnReady(Id: Text (mandatory)); Event_Submit(Event_SubmittedString: Text (mandatory)) | `UBTConnectLibrary.ConnectPatterns.Input.mvc.js` |
| ItemCard_ActionBar | UBTConnectLibrary | ConnectCorePatterns | ActionBarOptions: ActionBarOptions (mandatory) | OnClickAddNote(); OnClickShare(); OnClickUnbookmark() | `UBTConnectLibrary.ConnectCorePatterns.ItemCard_ActionBar.mvc.js` |
| NavigationConfirmationDialog | NavigationHandler | ConfirmationDialogs | - | Navigation(NavigationEvent: Object (mandatory)) | `NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc.js` |
| NonMember_ListItem | UBTConnectLibrary | ConnectCorePatterns | Title: Text (mandatory); isEnabled: Boolean = True; DeceasedCaption: Text; LifeCycleText_Italic: Boolean (mandatory); MarriedCaption: Text; MarriedPartnerTakenText: Text; MarriageHighlightText: Text | OnClickPerson() | `UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem.mvc.js` |
| NotesSheet | UBTConnect_Utils | CW_Notes | In_IsOpen: Boolean (mandatory); ExtendedClasses: Text; In_ItemId: Text (mandatory); In_NoteCategoryId: NoteCategory2 Identifier (mandatory); In_Notes: Notes (mandatory) | On_NoteDeleted(NoteId: Long Integer (mandatory); WasLastNote: Boolean (mandatory)); On_NotesChanged(New_Notes: Notes (mandatory)); On_NoteSheet_Closed() | `UBTConnect_Utils.CW_Notes.NotesSheet.mvc.js` |
| PopupMenu | Connect2_LegacyShared | Widgets | Position: Text; IsOpen: Boolean; ExtendedClass: Text | OnClose(); OnOpen() | `Connect2_LegacyShared.Widgets.PopupMenu.mvc.js` |
| PopupMenu | UBTConnectLibrary | ConnectPatterns | Position: Position Identifier; IsOpen: Boolean; ExtendedClass: Text | OnClose(); OnOpen() | `UBTConnectLibrary.ConnectPatterns.PopupMenu.mvc.js` |
| SelectionOption_List | UBTConnectLibrary | ConnectPatterns | SelectionOption_ItemList: SelectionOption_Item List (mandatory); isMultiselect: Boolean (mandatory); Item_StyleOptions: ContainerOptions; LastItem_StyleOptions: ContainerOptions; IconSizeId: UBT_IconsSize Identifier = icon-non-standard-16 | NotEnabledOnClick(ClickedItemId: Text (mandatory)); OnSelectionChange(SelectedItems: SelectionOption_Item List (mandatory); ClickedItemId: Text (mandatory)) | `UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc.js` |
| SharePopup | UBTConnect_Utils | CW_CTA_PopUps | In_ContactPopupData: ContactPopupData (mandatory); In_ImageSizeId: UBT_ImageSize Identifier = xl | Event_Cancel(); Event_ShareToConnect(); Event_ShareToOthers() | `UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc.js` |
| ShareSheet | UBTConnect_Utils | CW_Share | In_IsOpen: Boolean (mandatory); In_ShareObjectTypeId: Type_ShareObject Identifier (mandatory); In_ShareableObjectId: Text (mandatory); In_IsLegacy: Boolean; In_UpdateType: Text; In_UpdateDate: Date | Event_ClosedShareSheet() | `UBTConnect_Utils.CW_Share.ShareSheet.mvc.js` |
| ShareableObject_Generic | UBTConnect_Utils | CW_Share | In_ShareableObject: UI_ShareableObject_Generic (mandatory) | Event_OnClick() | `UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc.js` |
| SkeletonSection | UBTConnectLibrary | ConnectPatterns | In_IsLoading: Boolean (mandatory); In_ExtendedClass: Text; In_IsActiveWhileLoading: Boolean | - | `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js` |
| Statistics_ListItem | UBTConnectLibrary | ConnectCorePatterns | In_StatisticsOptions: StatisticsOptions (mandatory); In_ExtendedClasses: Text; In_HighlightWords: Text; In_ShowSubtitle: Boolean; In_HasActionsMenu: Boolean; In_HideBorder: Boolean | Event_Clicked() | `UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem.mvc.js` |
| StopPropagationHelper | UBTConnectLibrary | ConnectPatterns | - | - | `UBTConnectLibrary.ConnectPatterns.StopPropagationHelper.mvc.js` |
| SubLayout_Section | UBTConnectLibrary | Layouts | MarginTop: UBT_Size Identifier = Entities.UBT_Size.ExtraSmall; ExtendedClasses: Text | Clicked() | `UBTConnectLibrary.Layouts.SubLayout_Section.mvc.js` |
| TagContent | UBTConnectLibrary | ConnectPatterns | Text: Text (mandatory); ExtendedClasses: Text; BackgroundColorId: UBT_Color Identifier (mandatory); TextColorId: UBT_Color Identifier | Clicked() | `UBTConnectLibrary.ConnectPatterns.TagContent.mvc.js` |
| UBT_LazyImage | UBTConnect_Utils | CW_Image | ImageURL: Text; EntityId: Text (mandatory); EntityType: Connect_Entity Identifier (mandatory); ImageSize: LazyImageSize; ExtendedClass: Text; In_BorderRadius: UBT_Shape Identifier; In_HighRes: Boolean; HasErrorMessage: Boolean; In_ForceLoadingState: Boolean | - | `UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc.js` |
| UBT_LazyImage_List | UBTConnect_Utils | CW_Image | Items: LazyImage List (mandatory); ImageSize: LazyImageSize; InvertOrder: Boolean; MaxLimit: Integer = 5 | - | `UBTConnect_Utils.CW_Image.UBT_LazyImage_List.mvc.js` |

## Referenced client actions called

| Action | Module | Folder | Inputs | Outputs |
|---|---|---|---|---|
| AddBookmarkToCache | Connect2_LegacyShared | MemoryCache_MyBookmarks | In_Bookmark: BookmarkItem (mandatory) | Success: Boolean |
| AppManager_GetIsSupportedNativeVersion | UBT_AppManager | AppManager_SupportedVersion | - | IsSupportedNativeVersion: Boolean |
| AppManager_GetIsSupportedWebviewVersion | UBT_AppManager | AppManager_SupportedVersion | - | IsSupported: Boolean; IsAndroid: Boolean; IsApple: Boolean |
| AppManager_GetPIN_HasUnlocked | UBT_AppManager | AppManager_CachedVariables_Gettters | - | HasUnlocked: Boolean |
| AppManager_GetPIN_IsLocked | UBT_AppManager | AppManager_CachedVariables_Gettters | - | IsLocked: Boolean |
| AppManager_OnReadyChecker | UBT_AppManager | AppManager_Initialization | - | isReady: Boolean |
| App_Subscription_ShowUpgradePopUp | UBTConnect_Utils | App_Subscription | - | - |
| AssignFromObject | NavigationHandler | Preloading | ToObjectRef: Object (mandatory); ObjectValue: Object (mandatory) | AssignedObjectRef: Object |
| Bookmark_SendFeedbackMessage | UBTConnect_Utils | CommonMessages | IsCreate: Boolean; isError: Boolean | - |
| BottomSheetClose | OutSystemsUI_2_23 | BottomSheet | WidgetId: Text (mandatory) | Success: Boolean; ErrorMessage: ErrorMessage |
| BottomSheetOpen | OutSystemsUI_2_23 | BottomSheet | WidgetId: Text (mandatory) | Success: Boolean; ErrorMessage: ErrorMessage |
| Cache_UserInfo_Get | UBTConnect_Utils | MemoryCache_UserInfo | - | UserInformation: CacheControl_UserInformation; CacheResult: MemoryCacheResult |
| CarouselDisableOnRender | OutSystemsUI_2_23 | Carousel | WidgetId: Text (mandatory) | Success: Boolean; ErrorMessage: ErrorMessage |
| CheckIOsPlatform | UBTJavaScriptUtils | JSUtils_Platform | - | IsIOs: Boolean |
| Create_LocalBookmark | Connect2_LegacyShared | MyBookmarks_LocalStorage | ObjectType: MyBookmarks_ObjectType Identifier (mandatory); ObjectId: Long Integer (mandatory); Group: MyBookmarks_Group Identifier (mandatory); BookmarkId: Long Integer (mandatory); Note: Text (mandatory) | LocalBookmarkId: LocalBookmark Identifier |
| Create_LocalBookmark_C2 | UBTConnect_Bookmarks_MCS | Bookmarks_LocalStorage | In_ItemId: Text (mandatory); In_BookmarkCategoryId: BookmarkCategory Identifier (mandatory); In_BookmarkId: Long Integer (mandatory); In_DateCreatedUtc: Date Time | LocalBookmarkId: LocalBookmark2 Identifier |
| Delete_LocalBookmarkByBookmarkId | Connect2_LegacyShared | MyBookmarks_LocalStorage | BookmarkId: Long Integer (mandatory) | - |
| Delete_LocalBookmarkByBookmarkId_C2 | UBTConnect_Bookmarks_MCS | Bookmarks_LocalStorage | BookmarkId: Long Integer (mandatory) | - |
| FCM_ParseObject | UBT_AppManager_Mobile | Firebase_CloudMessage | Message: Object (mandatory) | FCM_Notification: FCM_Notification; JSON: Text |
| FormatConnectTime | UBTConnectLibrary | Utils_DateTime | In_Time: Time (mandatory) | Out_FormattedTime: Text |
| GetConnectWeekdayLabel_ByDate | UBTConnectLibrary | Utils_DateTime | In_Date: Date (mandatory) | Out_WeekdayLabel: WeekdayLabelType |
| GetHasNewNotifications | UBTConnect_Utils | Permissions_FF_Wrappers_OutSystems | - | Out_HasNewNotifications: Boolean |
| GetLocalBookmarkByObjectId_C2 | UBTConnect_Bookmarks_MCS | Bookmarks_LocalStorage | ItemId: Text (mandatory) | LocalBookmark: LocalBookmark2 |
| GetUnreadNotificationNumber | Connect2_LegacyShared | Comms | - | UnreadNotifications: Long Integer |
| Get_LocalBookmarkByObjectId | Connect2_LegacyShared | MyBookmarks_LocalStorage | ObjectType: MyBookmarks_ObjectType Identifier (mandatory); ObjectId: Long Integer (mandatory) | LocalBookmark: LocalBookmark |
| Input_ClearString | UBTConnectLibrary | Input | InputId: Text (mandatory); FocusOnInput: Boolean | - |
| JSUtils_DateTime_GetUTCOffset | UBTJavaScriptUtils | JSUtils_DateTime | - | UTCOffset: Integer |
| JSUtils_ElementCache_GetObjProperty | UBTJavaScriptUtils | JSUtils_ElementCache | Parent: Text (mandatory); Property: Text (mandatory) | Value: Object |
| JSUtils_ElementCache_GetTextProperty | UBTJavaScriptUtils | JSUtils_ElementCache | Parent: Text (mandatory); Property: Text (mandatory) | Value: Text |
| JSUtils_ElementCache_SetObjProperty | UBTJavaScriptUtils | JSUtils_ElementCache | Parent: Text (mandatory); Property: Text (mandatory); Value: Object (mandatory) | - |
| JSUtils_ElementCache_SetTextProperty | UBTJavaScriptUtils | JSUtils_ElementCache | Parent: Text (mandatory); Property: Text (mandatory); Value: Text (mandatory) | - |
| JSUtils_String_Split | UBTJavaScriptUtils | JSUtils_StringManipulation | String: Text (mandatory); Char: Text (mandatory) | List: Text List |
| ListAny | (System) | - | List: Generic Record List (mandatory); Condition: Boolean (mandatory) | Result: Boolean |
| ListAppend | (System) | - | List: Generic Record List (mandatory); Element: Generic Record (mandatory) | - |
| ListAppendAll | (System) | - | List: Generic Record List (mandatory); SourceList: Generic Record List (mandatory) | - |
| ListClear | (System) | - | List: Generic Record List (mandatory) | - |
| ListDuplicate | (System) | - | SourceList: Generic Record List (mandatory) | DuplicatedList: Generic Record List |
| ListFilter | (System) | - | SourceList: Generic Record List (mandatory); Condition: Boolean (mandatory) | FilteredList: Generic Record List |
| ListIndexOf | (System) | - | List: Generic Record List (mandatory); Condition: Boolean (mandatory) | Position: Integer |
| ListInsert | (System) | - | List: Generic Record List (mandatory); Element: Generic Record (mandatory); Position: Integer (mandatory) | - |
| ListRemove | (System) | - | List: Generic Record List (mandatory); Position: Integer (mandatory) | - |
| ListSort | (System) | - | List: Generic Record List (mandatory); By: Generic Type (mandatory); Ascending: Boolean = True | - |
| LockOrientation | ScreenOrientationPlugin | - | Orientation: Text (mandatory) | Error: Error |
| LogMessage | (System) | - | Message: Text (mandatory); ModuleName: Text (mandatory) | - |
| OpenInApp_OpenExternalLink | UBTConnect_Utils | OpenInApp_Utils | Url: Text (mandatory); InNewTab: Boolean | - |
| PIN_Check | UBT_AppManager | PIN | - | NeedRegister: Boolean; NeedUnlock: Boolean |
| ParseFirevaseEventValue | Firebase | FirebaseReceiver_ApplicationScope | Snapshot: Object (mandatory) | FirebaseEvent: FirebaseEvent |
| PreventNavigation | NavigationHandler | NavigationHandler | NavigationEvent: Object (mandatory) | - |
| PutCacheableObject | MemoryClientCache | MemoryCache | MemoryCacheTypeId: MemoryCacheType Identifier (mandatory); CacheKey: Text (mandatory); Object: Object (mandatory); CacheTimeToLiveSeconds: Integer (mandatory) | - |
| RemoveBookmarkFromCache | Connect2_LegacyShared | MemoryCache_MyBookmarks | In_Group: MyBookmarks_Group Identifier (mandatory); In_BookmarkId: Long Integer (mandatory) | Success: Boolean |
| ScreenController_NavigateToPage | UBTJavaScriptUtils | JSUtils_ScreenController | URL: Text (mandatory); ReplaceInHistory: Boolean | - |
| ScreenController_RaiseCommunicationError | UBTJavaScriptUtils | JSUtils_ScreenController | Message: Text (mandatory) | - |
| ScreenController_RaiseError | UBTJavaScriptUtils | JSUtils_ScreenController | Message: Text (mandatory) | - |
| ScreenController_RaiseTypedException | UBTJavaScriptUtils | JSUtils_ScreenController | Message: Text (mandatory); ExceptionId: UBT_SystemExceptionTypes Identifier (mandatory); SpecificType: Text; ExtraStack: Text | - |
| SendBookmarkedFeedbackMessage | Connect2_LegacyShared | MyBookmarks | IsCreate: Boolean (mandatory) | - |
| SetSplideConfigs | OutSystemsUI_2_23 | Carousel | WidgetId: Text (mandatory); ProviderConfigs: SplideConfigs | Success: Boolean; ErrorMessage: ErrorMessage |
| SetSplideEvent | OutSystemsUI_2_23 | Carousel | WidgetId: Text (mandatory); EventName: Text (mandatory); Handler: Object | SplideEventId: Text; Success: Boolean; ErrorMessage: ErrorMessage |
| ShareEntity_ByURL | UBTConnect_Utils | Share | In_ShareTypeId: Type_ShareObject Identifier (mandatory); In_ShareableObjectId: Text (mandatory); In_UpdateType: Text; In_UpdateDate: Date | - |
| SynchronizeNumberUnreadMessages | Connect2_LegacyShared | Comms | - | - |
| TriggerForegroundNotification | Connect2_LocalNotificationPlugin | - | In_Title: Text (mandatory); In_Body: Text (mandatory); In_Data: Text (mandatory); In_IconName: Text | - |
| UnsetSplideEvent | OutSystemsUI_2_23 | Carousel | WidgetId: Text (mandatory); SplideEventId: Text (mandatory) | Success: Boolean; ErrorMessage: ErrorMessage |

## Static entity records named by the flow (Entities.<Entity>.<Record>)

- **AppManager_FRD_Event** (UBT_AppManager_DB): records used: LogOut
  - LogOut: Id="LogOut"
- **BookmarkCategory** (UBTConnect_Bookmarks_MCS): records used: AssembleEvent, FeedItem, Household, Interchange, LDMEvent, Locality, Member, OneSchoolGlobal2, OrbitEvent, PersonalEvent, SupperMeeting, Update
  - AssembleEvent: Id="Assemble Event", Label="Assemble"
  - FeedItem: Id="Feed Item", Label="Feeds"
  - Household: Id="Household", Initials="H", Label="Households"
  - Interchange: Id="Interchange", Initials="I", Label="Interchange"
  - LDMEvent: Id="LDM Event", Label="LDM"
  - Locality: Id="Locality", IsActive=False, Label="Localities"
  - Member: Id="Member", Label="Members"
  - OneSchoolGlobal2: Id="OneSchoolGlobal", Label="OneSchool Global"
  - OrbitEvent: Id="Orbit Event", Label="Orbit"
  - PersonalEvent: Id="Personal Event", IsActive=False, Label="Personal"
  - SupperMeeting: Id="Supper Meeting", Label="Supper Meetings"
  - Update: Id="Update", IsActive=False, Label="Updates"
- **BooleanTypes** (OutSystemsUI_2_23): records used: False, True
  - True: Label="true", Order=2
- **CacheableMapObjects** (Connect_Map_CS): records used: CountriesGeoJSON, CountriesMarker, GlobalEntities, Households, HouseholdsExploreItems, LocalitiesGeoJSON, LocalitiesMarker
  - CountriesGeoJSON: Id="MapCountriesGeoJSON", Order=4
  - CountriesMarker: Id="MapCountriesMarker", Order=4
  - GlobalEntities: Id="MapGlobalEntities", Order=2
  - Households: Id="MapHouseholds", Order=1
  - HouseholdsExploreItems: Id="MapHouseholdsExploreItems", Order=1
  - LocalitiesGeoJSON: Id="MapLocalitiesGeoJSON", Order=3
  - LocalitiesMarker: Id="MapLocalitiesMarker", Order=3
- **CalendarView** (UBTConnectLibrary): records used: Day, Month, Week
  - Day: IconClass=Entities.UBT_Icons.Event, Id="Day", Is_Active=True, Label="Day", Order=1
  - Month: IconClass=Entities.UBT_Icons.Calendar, Id="Month", Is_Active=True, Label="Month", Order=3
  - Week: IconClass=Entities.UBT_Icons.EventNote, Id="Week", Is_Active=True, Label="Week", Order=2
- **CarouselNavigation** (OutSystemsUI_2_23): records used: None
  - None: Type="none"
- **Choice** (Connect_CommonEntities_DB): records used: No, None, Yes
  - No: Id="No"
  - None: Id="None"
  - Yes: Id="Yes"
- **Connect_CacheType** (UBTConnect_Utils): records used: MyCalendarEvents
  - MyCalendarEvents: Id="MyCalendarEvents"
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
- **DayOfWeek** (Connect2_Assemble_CS): records used: Sunday
  - Sunday: Id="Sunday", Is_Active=True, Label="LD", LongLabel="Lord's Day", Number=0, Order=1
- **NoteCategory2** (UBTConnect_Notes_MCS): records used: AssembleEvent, FeedItem, Household, Interchange, LDMEvent, Locality, Member, OneSchoolGlobal, OrbitEvent, PersonalEvent, SupperMeeting, Update
  - AssembleEvent: Id="Assemble Event", Label="Assemble"
  - FeedItem: Id="Feed Item", Label="Feeds"
  - Household: Id="Household", Initials="H", Label="Households"
  - Interchange: Id="Interchange", Initials="I", Label="Interchange"
  - LDMEvent: Id="LDM Event", Label="LDM"
  - Locality: Id="locality", IsActive=False, Label="Localities"
  - Member: Id="Member", Initials="M", Label="Members"
  - OneSchoolGlobal: Id="OneSchool Global", Label="OneSchool Global"
  - OrbitEvent: Id="Orbit Event", Label="Orbit"
  - PersonalEvent: Id="Personal Event", IsActive=False, Label="Personal"
  - SupperMeeting: Id="Supper Meeting", Label="Supper Meetings"
  - Update: Id="Update", IsActive=False, Label="Updates"
- **Position** (OutSystemsUI_2_23): records used: Bottom
  - Bottom: Position="bottom"
- **RecurrencePatternWeekIndex** (Connect2_Assemble_CS): records used: first, fourth, last, second, third
  - first: Id="first", Is_Active=True, Label="first", Order=1, WeekIndex=1
  - fourth: Id="fourth", Is_Active=True, Label="fourth", Order=4, WeekIndex=4
  - last: Id="last", Is_Active=True, Label="last", Order=5, WeekIndex=5
  - second: Id="second", Is_Active=True, Label="second", Order=2, WeekIndex=2
  - third: Id="third", Is_Active=True, Label="third", Order=3, WeekIndex=3
- **RecurrenceRangeType** (Connect2_Assemble_CS): records used: endDate
  - endDate: Id="endDate", Is_Active=True, Order=1
- **RecurrenceType** (Connect2_Assemble_CS): records used: daily, monthly, weekly, yearly
  - daily: APIAbsoluteType="daily", APIRelativeType="daily", DisplayLabel="Daily", Id="daily", Is_Active=True, Label="day", Order=1, PluralLabel="days"
  - monthly: APIAbsoluteType="absoluteMonthly", APIRelativeType="relativeMonthly", DisplayLabel="Monthly", Id="monthly", Is_Active=True, Label="month", Order=3, PluralLabel="months"
  - weekly: APIAbsoluteType="weekly", APIRelativeType="weekly", DisplayLabel="Weekly", Id="weekly", Is_Active=True, Label="week", Order=2, PluralLabel="weeks"
  - yearly: APIAbsoluteType="absoluteYearly", APIRelativeType="relativeYearly", DisplayLabel="Yearly", Id="yearly", Is_Active=True, Label="year", Order=4, PluralLabel="years"
- **ReminderOption** (Connect2_Assemble_CS): records used: ADDayBeforeAfternoon, ADDayBeforeMorning, ADDayOfMorning, ADTimeOf, ADWeekBefore, DoNotRemind, FifteenMinutes, FiveMinutes, OneDay, OneHour, OneWeek, ThirtyMinutes, TwelveHours, TwoHours
  - ADDayBeforeAfternoon: Id="Day before event at 5:00 PM", Is_Active=True, IsAllDay=True, Label="Day before event at 5:00 PM", Order=13
  - ADDayBeforeMorning: Id="Day before event at 9:00 AM", Is_Active=True, IsAllDay=True, Label="Day before event at 9:00 AM", Order=12
  - ADDayOfMorning: Id="Day of event at 9:00 AM", Is_Active=True, IsAllDay=True, Label="Day of event at 9:00 AM", Order=11
  - ADTimeOf: Id="At the time of the event", Is_Active=True, IsAllDay=True, Label="At the time of the event", Order=10
  - ADWeekBefore: Id="1 week before event at 5:00 PM", Is_Active=True, IsAllDay=True, Label="1 week before event at 5:00 PM", Order=14
  - DoNotRemind: API_Value="00:00:00", Id="Don’t remind me", Is_Active=True, Label="Don’t remind me", Order=1
  - FifteenMinutes: API_Value="00:15:00", Id="15 minutes before", Is_Active=True, Label="15 minutes before", Order=3
  - FiveMinutes: API_Value="00:05:00", Id="5 minutes before", Is_Active=True, Label="5 minutes before", Order=2
  - OneDay: API_Value="1.00:00:00", Id="1 day before", Is_Active=True, Label="1 day before", Order=8
  - OneHour: API_Value="01:00:00", Id="1 hour before", Is_Active=True, Label="1 hour before", Order=5
  - OneWeek: API_Value="7.00:00:00", Id="1 week before", Is_Active=True, Label="1 week before", Order=9
  - ThirtyMinutes: API_Value="00:30:00", Id="30 minutes before", Is_Active=True, Label="30 minutes before", Order=4
  - TwelveHours: API_Value="12:00:00", Id="12 hours before", Is_Active=True, Label="12 hours before", Order=7
  - TwoHours: API_Value="02:00:00", Id="2 hours before", Is_Active=True, Label="2 hours before", Order=6
- **Shape** (OutSystemsUI_2_23): records used: Rounded
  - Rounded: Order=2, Shape="rounded"
- **Type_FCMExtraParameter** (UBT_AppManager_CS): records used: NotificationIcon
  - NotificationIcon: Id="NotificationIcon", Is_Active=True
- **Type_MyCalendarEventSource** (Connect2_MyCalendar_CS): records used: Assemble
  - Assemble: Id="event-assemble"
- **Type_RSVPStatus** (Deprecated_Connect2_PersonalEvents): records used: Accepted, Declined, Host, Tentative
  - Accepted: Id="Accepted", Order=2
  - Declined: Id="Declined", Order=3
  - Host: Id="Host", Order=1
  - Tentative: Id="Tentative", Order=4
- **Type_ShareObject** (Connect2_Sharing_CS): records used: Feed, Household, Locality, MyHousehold, OneSchoolGlobal, SupperMeeting
  - Feed: APIKey="FeedItem", Id="Feed", Is_Active=True, Label="Feed", NotificationTitle="shared a Feed", Order=7
  - Household: APIKey="Members", Id="Household", Is_Active=True, Label="Household", NotificationTitle="shared a Household", Order=3
  - Locality: Id="Locality", Is_Active=True, Label="Locality", Order=5
  - MyHousehold: APIKey="My Profile", Id="My Household", Is_Active=True, Label="Household", LabelPrefix="my", NotificationTitle="shared a Household", Order=3
  - OneSchoolGlobal: APIKey="OneSchool Global", Id="OneSchool Global", Is_Active=True, Label="OneSchool Global", NotificationTitle="shared a OneSchool Global", Order=4
  - SupperMeeting: APIKey="Supper Meeting", Id="Supper Meeting", Is_Active=True, Label="Supper Meeting", NotificationTitle="shared a Supper Meeting", Order=2
- **UBTConnect_JSUtils_ElementCache_Parent** (UBTConnect): records used: UBTConnect
  - UBTConnect: Label="UBTConnect"
- **UBT_AlignItems** (UBTConnectLibrary): records used: Center, FlexStart
  - Center: Id="align-items-center", Order=2
  - FlexStart: Id="align-items-flex-start", Order=1
- **UBT_ButtonSize** (UBTConnectLibrary): records used: Medium, Small
  - Medium: Id="m", Order=2
  - Small: Id="s", Order=3
- **UBT_ButtonType** (UBTConnectLibrary): records used: Primary, Scondary, Tertiary
  - Primary: Id="primary", Order=1
  - Scondary: Id="secondary", Order=2
  - Tertiary: Id="tertiary", Order=3
- **UBT_Color** (UBTConnectLibrary): records used: CyanDark, CyanDarker, Error, GreenDark, Neutral0, Neutral10, Neutral2, Neutral3, Neutral4, Neutral5, Neutral7, Neutral8, Neutral9, PeachDark, Primary, Red, RedDark, Success, Transparent, Warning
  - CyanDark: Color="cyan-dark", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=60
  - CyanDarker: Color="cyan-darker", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=61
  - Error: Color="error", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=False, IsSemantic=True, Order=33
  - GreenDark: Color="green-dark", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=66
  - Neutral0: Color="neutral-0", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=19
  - Neutral10: Color="neutral-10", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=29
  - Neutral2: Color="neutral-2", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=21
  - Neutral3: Color="neutral-3", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=22
  - Neutral4: Color="neutral-4", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=23
  - Neutral5: Color="neutral-5", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=24
  - Neutral7: Color="neutral-7", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=26
  - Neutral8: Color="neutral-8", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=27
  - Neutral9: Color="neutral-9", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=28
  - PeachDark: Color="peach-dark", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=54
  - Primary: Color="primary", IsActive=True, IsBrand=True, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=1
  - Red: Color="red", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=10
  - RedDark: Color="red-dark", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=10
  - Success: Color="success", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=False, IsSemantic=True, Order=32
  - Transparent: Color="transparent", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=18
  - Warning: Color="warning", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=False, IsSemantic=True, Order=31
- **UBT_ColumnBehaviour** (UBTConnectLibrary): records used: ExpandMiddle, ReduceFirst, ReduceLast
  - ExpandMiddle: Id="expand-middle", Order=4
  - ReduceFirst: Id="reduce-first", Order=1
  - ReduceLast: Id="reduce-last", Order=3
- **UBT_Display** (UBTConnectLibrary): records used: Flex, InlineFlex
  - Flex: Id="display-flex", Order=3
  - InlineFlex: Id="display-inline-flex", Order=8
- **UBT_FlexBehavior** (UBTConnectLibrary): records used: Grow
  - Grow: Id="flex-grow", Order=2
- **UBT_FlexDirection** (UBTConnectLibrary): records used: Column
  - Column: Id="flex-direction-column", Order=1
- **UBT_FontSize** (UBTConnectLibrary): records used: Base, DoubleExtraSmall, ExtraSmall, Heading1, Heading6, Small
  - Base: Id="base", Order=5
  - DoubleExtraSmall: Id="xxs", Order=1
  - ExtraSmall: Id="xs", Order=3
  - Heading1: Id="h1", Order=11
  - Heading6: Id="h6", Order=6
  - Small: Id="s", Order=4
- **UBT_FontWeight** (UBTConnectLibrary): records used: Regular, SemiBold
  - Regular: Id="regular", Order=2
  - SemiBold: Id="semi-bold", Order=4
- **UBT_Icons2** (UBTConnectLibrary): records used: ArrowDown, ArrowDropDown, ArrowLeftAlt, ArrowUp, ChevronRight, Delete, ErrorFill, Event, ExpandMore, HomePinFill, Mail, Notifications, OpenNew, SVG_CommunityCountries, SVG_CommunityHouseholds, SVG_CommunityLocalities, SVG_CommunityMembers, Schedule, School, Tune
  - ArrowDown: Id="connect-icon-Arrow-down", Is_Active=True, Label="ArrowDown"
  - ArrowDropDown: Id="connect-icon-arrow_drop_down", Is_Active=True, Label="Arrow Drop Down"
  - ArrowLeftAlt: Id="connect-icon-arrow_left_alt", Is_Active=True, Label="Arrow Left Alt"
  - ArrowUp: Id="connect-icon-Arrow-up1", Is_Active=True, Label="ArrowUp"
  - ChevronRight: Id="connect-icon-chevron_right", Is_Active=True, Label="Chevron Right"
  - Delete: Id="connect-icon-delete", Is_Active=True, Label="Delete"
  - ErrorFill: Id="connect-icon-error_fill", Is_Active=True, Label="Error Fill"
  - Event: Id="connect-icon-event", Is_Active=True, Label="Event"
  - ExpandMore: Id="connect-icon-expand_more", Is_Active=True, Label="Expand More"
  - HomePinFill: Id="connect-icon-home_pin_fill", Is_Active=True, Label="Home Pin Fill"
  - Mail: Id="connect-icon-mail", Is_Active=True, Label="Mail"
  - Notifications: Id="connect-icon-notifications", Is_Active=True, Label="Notifications"
  - OpenNew: Id="connect-icon-open_new", Is_Active=True, Label="Open New"
  - Schedule: Id="connect-icon-schedule", Is_Active=True, Label="Schedule"
  - School: Id="connect-icon-school", Is_Active=True, Label="School"
  - SVG_CommunityCountries: Id="SVG_CommunityCountries", Is_Active=True, Label="SVG_CommunityCountries"
  - SVG_CommunityHouseholds: Id="SVG_CommunityHouseholds", Is_Active=True, Label="SVG_CommunityHouseholds"
  - SVG_CommunityLocalities: Id="SVG_CommunityLocalities", Is_Active=True, Label="SVG_CommunityLocalities"
  - SVG_CommunityMembers: Id="SVG_CommunityMembers", Is_Active=True, Label="SVG_CommunityMembers"
  - Tune: Id="connect-icon-tune", Is_Active=True, Label="Tune"
- **UBT_IconsSize** (UBTConnectLibrary): records used: Base_24, ExtraSmall_10, Medium_20, NonStandard_14, NonStandard_16, NonStandard_40, Small_12
  - Base_24: Label="icon-base", Order=3
  - ExtraSmall_10: Label="icon-extra-small", Order=11
  - Medium_20: Label="icon-medium", Order=2
  - NonStandard_14: Label="icon-non-standard-14", Order=6
  - NonStandard_16: Label="icon-non-standard-16", Order=5
  - NonStandard_40: Label="icon-non-standard-40", Order=12
  - Small_12: Label="icon-small", Order=1
- **UBT_ImageCardType** (UBTConnectLibrary): records used: Detail, Gallery, List, Sublist
  - Detail: Id="detail", Order=3
  - Gallery: Id="gallery", Order=4
  - List: Id="list", Order=1
  - Sublist: Id="sublist", Order=2
- **UBT_ImageSize** (UBTConnectLibrary): records used: Auto, Base_52, HalfWidth_50vw, Large_65, MaxWidth_100vw, Small_40, Square
  - Auto: Id="auto", Order=13
  - Base_52: Id="base", Order=3
  - HalfWidth_50vw: Id="half-width", Order=15
  - Large_65: Id="l", Order=5
  - MaxWidth_100vw: Id="max-width", Order=10
  - Small_40: Id="s", Order=2
  - Square: Id="square", Order=14
- **UBT_JustifyContent** (UBTConnectLibrary): records used: Center, SpaceBetween
  - Center: Id="justify-content-center", Order=2
  - SpaceBetween: Id="justify-content-space-between", Order=4
- **UBT_Shadow** (UBTConnectLibrary): records used: ExtraSmall
  - ExtraSmall: Id="xs", Order=3
- **UBT_Shape** (UBTConnectLibrary): records used: Medium, Soft
  - Medium: Id="medium", Order=3
  - Soft: Id="soft", Order=2
- **UBT_Size** (UBTConnectLibrary): records used: Base, ExtraSmall, Medium, None, Small
  - Base: Id="base", Order=7
  - ExtraSmall: Id="xs", Order=2
  - Medium: Id="m", Order=8
  - None: Id="none", Order=1
  - Small: Id="s", Order=4
- **UBT_SystemExceptionTypes** (UBTJavaScriptUtils): records used: NotRegisteredException
  - NotRegisteredException: Id="NotRegisteredException"
- **UBT_VerticalAlign** (UBTConnectLibrary): records used: Center
  - Center: Id="center", Order=2
