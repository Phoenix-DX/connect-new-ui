# Pack of UI flow Directory_SupperMeetings (DEV model, MCP dump of flows 2026-10-27)

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
| Button | UBTConnect_Utils | CW_Common | ButtonExtendedClass: Text; IsDisabled: Boolean; IsIconOnRight: Boolean; ButtonText: Text (mandatory); IconText_SpacingSize: UBT_Size Identifier = xs; TextExtendedClasses: Text; ButtonOptions: ButtonOptions; IconId: UBT_Icons2 Identifier; HideIcon: Boolean | buttonOnClick() | `UBTConnect_Utils.CW_Common.Button.mvc.js` |
| Button | UBTConnectLibrary | ConnectPatterns | In_ButtonOptions: ButtonOptions; In_ExtendedClass: Text; In_IsDisabled: Boolean | Event_OnClick() | `UBTConnectLibrary.ConnectPatterns.Button.mvc.js` |
| CacheControl_Policies | UBTConnect_Utils | CacheControl | CacheKey: Text; TimeToLiveSeconds: Integer = 7200 | Result(CacheControl_Response: CacheControl_Policies) | `UBTConnect_Utils.CacheControl.CacheControl_Policies.mvc.js` |
| Carousel | OutSystemsUI_2_23 | Interaction | Navigation: CarouselNavigation Identifier = both; Height: Text = "auto"; ItemsPerSlide: CarouselItems; OptionalConfigs: CarouselOptionalConfigs; ExtendedClass: Text | Initialized(CarouselId: Text (mandatory)); OnSlideMoved(CarouselId: Text (mandatory); ItemIndex: Integer) | `OutSystemsUI_2_23.Interaction.Carousel.mvc.js` |
| Columns_Three | UBTConnectLibrary | BasePatterns | ExtendedClasses: Text; ColumnOptions: ColumnOptions | - | `UBTConnectLibrary.BasePatterns.Columns_Three.mvc.js` |
| Columns_Two | UBTConnectLibrary | BasePatterns | ColumnOptions: ColumnOptions; ExtendedClasses: Text | - | `UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js` |
| ComingSoon | UBTConnectLibrary | ConnectPatterns | In_TextOptions: TextOptions | - | `UBTConnectLibrary.ConnectPatterns.ComingSoon.mvc.js` |
| ContactByMessage_Wrapper | UBTConnect_Utils | CW_CTA_PopUps | In_ContactPopupData: UI_ContactByMessage_WrapperData (mandatory) | Event_Call(); Event_Cancel(); Event_Email(); Event_MessageChannel(Event_ChannelId: Type_MessageChannel Identifier (mandatory)) | `UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc.js` |
| ContactPopup_ByPhone | UBTConnect_Utils | CW_CTA_PopUps | In_CallPopupData: ContactByPhonePopupData (mandatory); In_ImageSizeId: UBT_ImageSize Identifier = xl | Event_Call(Event_Number: Text (mandatory)); Event_Cancel() | `UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc.js` |
| CustomContainer | UBTConnectLibrary | BasePatterns | ExtendedClasses: Text; Options: ContainerOptions | Clicked() | `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` |
| CustomText | UBTConnectLibrary | BasePatterns | In_Text: Text (mandatory); In_TextOptions: TextOptions (mandatory); In_PaddingOptions: SpacingOptions; In_HighlightWords: Text; In_HighlightOptions: TextOptions; ExtendedClasses: Text; FitContent: Boolean; InJustifyText: Boolean; NoWrap: Boolean; InlineIcon: InlineIcon | Clicked() | `UBTConnectLibrary.BasePatterns.CustomText.mvc.js` |
| DeeplinkHandlerCentral | EventfulDeeplinksPlugin | EventfulDeeplinksPlugin | - | OnDeeplinkOpen(URL: Text (mandatory)) | - |
| Dialog_AccessRestrictedAction | UBTConnect_Utils | CW_App_Common_Blocks_PopupDialogs | In_ExtendedClass: Text | - | `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc.js` |
| EmptyList | UBTConnectLibrary | ConnectPatterns | IconId: UBT_Icons2 Identifier (mandatory) | - | `UBTConnectLibrary.ConnectPatterns.EmptyList.mvc.js` |
| ExpandableSection | UBTConnectLibrary | ConnectPatterns | StartExpanded: Boolean = True; ExtendedClasses: Text | - | `UBTConnectLibrary.ConnectPatterns.ExpandableSection.mvc.js` |
| Gallery | OutSystemsUI_2_23 | Adaptive | RowItemsDesktop: Integer = 4; RowItemsTablet: Integer = 3; RowItemsPhone: Integer = 1; ItemsGap: Space Identifier = base; ExtendedClass: Text | Initialized(GalleryId: Text (mandatory)) | `OutSystemsUI_2_23.Adaptive.Gallery.mvc.js` |
| HandleImageLoadError | Connect2_LegacyShared | Utility | - | - | `Connect2_LegacyShared.Utility.HandleImageLoadError.mvc.js` |
| HorizontalTagList | UBTConnectLibrary | ConnectPatterns | In_TagToggleList: Tag List (mandatory); In_IsSingleSelection: Boolean; In_IsMandatorySelection: Boolean; In_HorizontalPadding: UBT_Size Identifier; ExtendedClasses: Text; isEnabled: Boolean = True | Changed(UpdatedTagList: Tag List) | `UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc.js` |
| HouseholdMember_ListItem | UBTConnectLibrary | ConnectCorePatterns | Title: Text (mandatory); isEnabled: Boolean = True; LifeCycleText: Text (mandatory); LifeCycleText_Italic: Boolean (mandatory) | OnClickPerson() | - |
| Icon | UBTConnectLibrary | ConnectPatterns | In_IconId: UBT_Icons2 Identifier (mandatory); In_ColorId: UBT_Color Identifier = neutral-9; In_SizeId: UBT_IconsSize Identifier; In_Visible: Boolean = True; In_ExtendedClasses: Text = "" | Click() | `UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` |
| IconText | UBTConnectLibrary | ConnectPatterns | IsIconOnRight: Boolean; Text: Text (mandatory); TextOptions: TextOptions; SpacingSize: UBT_Size Identifier = xs; ExtendedClasses: Text; SubtextOptions: TextOptions; In_Subtext: Text; In_JustifyText: Boolean | Clicked() | `UBTConnectLibrary.ConnectPatterns.IconText.mvc.js` |
| ImageCard | UBTConnectLibrary | ConnectCorePatterns | In_BackgroundURL: Text (mandatory); In_AvatarURLs: AvatarImage List; In_AvatarURLsMaxLimit: Integer; In_CardTypeId: UBT_ImageCardType Identifier (mandatory); In_ShowAvatarList: Boolean; In_ExtendedClass: Text; isLoadingImage: Boolean; UnavailableImageType: Type_Image Identifier; In_IsBookmarked: Boolean; In_BookmarkModifier: Text | Event_Click() | `UBTConnectLibrary.ConnectCorePatterns.ImageCard.mvc.js` |
| ImageCard_LazyLoading | UBTConnectLibrary | ConnectCorePatterns | In_CardTypeId: UBT_ImageCardType Identifier (mandatory); In_ItemsPerRow: Integer; In_ShowAvatarList: Boolean; In_ExtendedClass: Text; In_IsBookmarked: Boolean; In_BookmarkModifier: Text | Event_Click() | `UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc.js` |
| ImageCard__Content | UBTConnectLibrary | ConnectPatterns | In_Title: Text (mandatory); In_Subtitle: Text; In_ShowSubtitle: Boolean | - | `UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc.js` |
| ImageCard__Content__Tag | UBTConnectLibrary | ConnectPatterns | Content: Text (mandatory) | - | `UBTConnectLibrary.ConnectPatterns.ImageCard__Content__Tag.mvc.js` |
| KebabButtonMenu | UBTConnectLibrary | ConnectCorePatterns | isEnable: Boolean = True | Edit(); Share() | `UBTConnectLibrary.ConnectCorePatterns.KebabButtonMenu.mvc.js` |
| Layout_DetailPage | UBTConnectLibrary | Layouts | In_AlignTitleLeft: Boolean; In_IsPrimaryColor: Boolean = True; In_ExtendedClass: Text; In_EnableAccessibilityFeatures: Boolean; In_InitializeNavigationHandler: Boolean = True; In_IsHideTitle: Boolean | OnReadyEvent(WrapperContainerId: Text (mandatory)) | `UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js` |
| Layout_LoginFlow | UBTConnectLibrary | Layouts | In_HasOverlay: Boolean; In_ExtendedClass: Text; In_IsCommonBlock: Boolean | OnPathCalculated(); OnReady(MainContainerId: Text (mandatory)) | `UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc.js` |
| NonMember_ListItem | UBTConnectLibrary | ConnectCorePatterns | Title: Text (mandatory); isEnabled: Boolean = True; DeceasedCaption: Text; LifeCycleText_Italic: Boolean (mandatory); MarriedCaption: Text; MarriedPartnerTakenText: Text; MarriageHighlightText: Text | OnClickPerson() | `UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem.mvc.js` |
| NotesSheet | UBTConnect_Utils | CW_Notes | In_IsOpen: Boolean (mandatory); ExtendedClasses: Text; In_ItemId: Text (mandatory); In_NoteCategoryId: NoteCategory2 Identifier (mandatory); In_Notes: Notes (mandatory) | On_NoteDeleted(NoteId: Long Integer (mandatory); WasLastNote: Boolean (mandatory)); On_NotesChanged(New_Notes: Notes (mandatory)); On_NoteSheet_Closed() | `UBTConnect_Utils.CW_Notes.NotesSheet.mvc.js` |
| OfflineDataSyncCore | OutSystemsUI_2_23 | Private | - | OnConfigure(); OnSync(SyncUnit: Text (mandatory)); OnSyncComplete(SyncUnit: Text (mandatory)); OnSyncError(SyncUnit: Text (mandatory); ErrorMessage: Text (mandatory)); OnSyncStart(SyncUnit: Text (mandatory)) | `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js` |
| PinUnlock_MobileWrapper | UBT_AppManager_Mobile | Fingerprint | In_PinLength: Integer (mandatory); In_ExtendedClasses: Text (mandatory); In_IsScanFingerprintOnReady: Boolean (mandatory); In_ForceVisible: Boolean; In_AllowBackNavigation: Boolean; In_HideFingerprint: Boolean | KeyPressed(); PincodeChange(InputLength: Integer (mandatory)); PinUnlockError(ErrorMessage: Text (mandatory)); PinUnlockSuccess(); Timeout(); UserLoggedOut() | `UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc.js` |
| PopupMenu | Connect2_LegacyShared | Widgets | Position: Text; IsOpen: Boolean; ExtendedClass: Text | OnClose(); OnOpen() | `Connect2_LegacyShared.Widgets.PopupMenu.mvc.js` |
| PopupMenu | UBTConnectLibrary | ConnectPatterns | Position: Position Identifier; IsOpen: Boolean; ExtendedClass: Text | OnClose(); OnOpen() | `UBTConnectLibrary.ConnectPatterns.PopupMenu.mvc.js` |
| PreventBackNavigation | NavigationHandler | NavigationHandler | - | BackNavigationPrevented(BackNavigationEvent: Object (mandatory)) | `NavigationHandler.NavigationHandler.PreventBackNavigation.mvc.js` |
| SeeMoreSection | UBTConnectLibrary | ConnectPatterns | StartExpanded: Boolean = True; ExtendedClasses: Text; isEnabled: Boolean = True | - | `UBTConnectLibrary.ConnectPatterns.SeeMoreSection.mvc.js` |
| SharePopup | UBTConnect_Utils | CW_CTA_PopUps | In_ContactPopupData: ContactPopupData (mandatory); In_ImageSizeId: UBT_ImageSize Identifier = xl | Event_Cancel(); Event_ShareToConnect(); Event_ShareToOthers() | `UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc.js` |
| ShareSheet | UBTConnect_Utils | CW_Share | In_IsOpen: Boolean (mandatory); In_ShareObjectTypeId: Type_ShareObject Identifier (mandatory); In_ShareableObjectId: Text (mandatory); In_IsLegacy: Boolean; In_UpdateType: Text; In_UpdateDate: Date | Event_ClosedShareSheet() | `UBTConnect_Utils.CW_Share.ShareSheet.mvc.js` |
| ShareableObject_Generic | UBTConnect_Utils | CW_Share | In_ShareableObject: UI_ShareableObject_Generic (mandatory) | Event_OnClick() | `UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc.js` |
| SkeletonSection | UBTConnectLibrary | ConnectPatterns | In_IsLoading: Boolean (mandatory); In_ExtendedClass: Text; In_IsActiveWhileLoading: Boolean | - | `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js` |
| Skeleton_TextBlock | UBTConnectLibrary | ConnectPatterns | In_NumberOfLines: Integer (mandatory); In_FontSize: UBT_FontSize Identifier = s | - | `UBTConnectLibrary.ConnectPatterns.Skeleton_TextBlock.mvc.js` |
| SubLayout_Section | UBTConnectLibrary | Layouts | MarginTop: UBT_Size Identifier = Entities.UBT_Size.ExtraSmall; ExtendedClasses: Text | Clicked() | `UBTConnectLibrary.Layouts.SubLayout_Section.mvc.js` |
| TagContent | UBTConnectLibrary | ConnectPatterns | Text: Text (mandatory); ExtendedClasses: Text; BackgroundColorId: UBT_Color Identifier (mandatory); TextColorId: UBT_Color Identifier | Clicked() | `UBTConnectLibrary.ConnectPatterns.TagContent.mvc.js` |
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
| Cache_UserInfo_Get | UBTConnect_Utils | MemoryCache_UserInfo | - | UserInformation: CacheControl_UserInformation; CacheResult: MemoryCacheResult |
| CarouselDisableOnRender | OutSystemsUI_2_23 | Carousel | WidgetId: Text (mandatory) | Success: Boolean; ErrorMessage: ErrorMessage |
| ConfigureOfflineDataSync | OutSystemsUI_2_23 | OfflineDataSync | SyncOnOnline: Boolean (mandatory); SyncOnResume: Boolean (mandatory); RetryOnError: Boolean (mandatory); RetryIntervalInSeconds: Integer (mandatory) | - |
| Create_LocalBookmark_C2 | UBTConnect_Bookmarks_MCS | Bookmarks_LocalStorage | In_ItemId: Text (mandatory); In_BookmarkCategoryId: BookmarkCategory Identifier (mandatory); In_BookmarkId: Long Integer (mandatory); In_DateCreatedUtc: Date Time | LocalBookmarkId: LocalBookmark2 Identifier |
| Delete_LocalBookmarkByBookmarkId_C2 | UBTConnect_Bookmarks_MCS | Bookmarks_LocalStorage | BookmarkId: Long Integer (mandatory) | - |
| EndOfflineDataSync | OutSystemsUI_2_23 | OfflineDataSync | HasError: Boolean (mandatory); ErrorMessage: Text = ""; AllowRetry: Boolean | - |
| FeedbackMessage_AutoClose | UBTJavaScriptUtils | JSUtils_FeedbackMessage | Title: Text; Message: Text (mandatory); MessageType: UBT_MessageType Identifier = Entities.UBT_MessageType.Error; EncodedHTML: Boolean = True; ExtendedClass: Text; DelayMs: Integer = 0; useDebounce: Boolean | - |
| GetHasCarouselEnabled | UBTConnect_Utils | Permissions_FF_Wrappers_OutSystems | - | HasCarouselEnabled: Boolean |
| GetLocalBookmarkByObjectId_C2 | UBTConnect_Bookmarks_MCS | Bookmarks_LocalStorage | ItemId: Text (mandatory) | LocalBookmark: LocalBookmark2 |
| GetPreloadObject | NavigationHandler | Preloading | - | Preload: Object |
| JSUtils_String_Split | UBTJavaScriptUtils | JSUtils_StringManipulation | String: Text (mandatory); Char: Text (mandatory) | List: Text List |
| ListAny | (System) | - | List: Generic Record List (mandatory); Condition: Boolean (mandatory) | Result: Boolean |
| ListAppend | (System) | - | List: Generic Record List (mandatory); Element: Generic Record (mandatory) | - |
| ListAppendAll | (System) | - | List: Generic Record List (mandatory); SourceList: Generic Record List (mandatory) | - |
| ListClear | (System) | - | List: Generic Record List (mandatory) | - |
| ListFilter | (System) | - | SourceList: Generic Record List (mandatory); Condition: Boolean (mandatory) | FilteredList: Generic Record List |
| ListIndexOf | (System) | - | List: Generic Record List (mandatory); Condition: Boolean (mandatory) | Position: Integer |
| ListInsert | (System) | - | List: Generic Record List (mandatory); Element: Generic Record (mandatory); Position: Integer (mandatory) | - |
| LogMessage | (System) | - | Message: Text (mandatory); ModuleName: Text (mandatory) | - |
| OpenInApp_OpenExternalLink | UBTConnect_Utils | OpenInApp_Utils | Url: Text (mandatory); InNewTab: Boolean | - |
| OpenPolicy | UBTConnect_Utils | Policies | PolicyInformation: PolicyInformation2 (mandatory); ErrorMessage: Text = "This policy couldn't be found." | - |
| PIN_Check | UBT_AppManager | PIN | - | NeedRegister: Boolean; NeedUnlock: Boolean |
| PreventNavigation | NavigationHandler | NavigationHandler | NavigationEvent: Object (mandatory) | - |
| ResetReplaceOnUpcomingNavigation | NavigationHandler | NavigationHandler | - | - |
| ScreenController_RaiseCommunicationError | UBTJavaScriptUtils | JSUtils_ScreenController | Message: Text (mandatory) | - |
| ScreenController_RaiseError | UBTJavaScriptUtils | JSUtils_ScreenController | Message: Text (mandatory) | - |
| ScreenController_RaiseTypedException | UBTJavaScriptUtils | JSUtils_ScreenController | Message: Text (mandatory); ExceptionId: UBT_SystemExceptionTypes Identifier (mandatory); SpecificType: Text; ExtraStack: Text | - |
| SetPreloadObject | NavigationHandler | Preloading | Preload: Object (mandatory) | - |
| SetSplideConfigs | OutSystemsUI_2_23 | Carousel | WidgetId: Text (mandatory); ProviderConfigs: SplideConfigs | Success: Boolean; ErrorMessage: ErrorMessage |
| SetSplideEvent | OutSystemsUI_2_23 | Carousel | WidgetId: Text (mandatory); EventName: Text (mandatory); Handler: Object | SplideEventId: Text; Success: Boolean; ErrorMessage: ErrorMessage |
| ShareEntity_ByURL | UBTConnect_Utils | Share | In_ShareTypeId: Type_ShareObject Identifier (mandatory); In_ShareableObjectId: Text (mandatory); In_UpdateType: Text; In_UpdateDate: Date | - |
| ShowComingSoonMessage | UBTConnect_Utils | CommonMessages | - | - |
| UnsetSplideEvent | OutSystemsUI_2_23 | Carousel | WidgetId: Text (mandatory); SplideEventId: Text (mandatory) | Success: Boolean; ErrorMessage: ErrorMessage |

## Static entity records named by the flow (Entities.<Entity>.<Record>)

- **BookmarkCategory** (UBTConnect_Bookmarks_MCS): records used: Household, Interchange, Locality, Member, OneSchoolGlobal2, SupperMeeting
  - Household: Id="Household", Initials="H", Label="Households"
  - Interchange: Id="Interchange", Initials="I", Label="Interchange"
  - Locality: Id="Locality", IsActive=False, Label="Localities"
  - Member: Id="Member", Label="Members"
  - OneSchoolGlobal2: Id="OneSchoolGlobal", Label="OneSchool Global"
  - SupperMeeting: Id="Supper Meeting", Label="Supper Meetings"
- **BooleanTypes** (OutSystemsUI_2_23): records used: False, True
  - True: Label="true", Order=2
- **CarouselNavigation** (OutSystemsUI_2_23): records used: None
  - None: Type="none"
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
- **DetailDisplayType** (UBTConnectLibrary): records used: AwayFather, AwayMother, RelationshipFather, RelationshipMother
  - AwayFather: Id="AwayFather", Is_Active=True, Label="Away Father", Order=7
  - AwayMother: Id="AwayMother", Is_Active=True, Label="Away Mother", Order=8
  - RelationshipFather: Id="RelationshipFather", Is_Active=True, Label="Relationship Father", Order=3
  - RelationshipMother: Id="RelationshipMother", Is_Active=True, Label="Relationship Mother", Order=4
- **HouseholdDetailTags** (UBTConnectLibrary): records used: Photos
  - Photos: Id="Photos", order=2, Text="Photos"
- **LaunchDarkly_FF** (Connect_CommonEntities_DB): records used: MobileDirectoryHouseholdGallery, MobileStudentInformation
  - MobileDirectoryHouseholdGallery: Id="directory-household-gallery"
  - MobileStudentInformation: Id="mobile-directory-student-information"
- **Position** (OutSystemsUI_2_23): records used: Bottom
  - Bottom: Position="bottom"
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
- **UBT_Color** (UBTConnectLibrary): records used: CyanDarker, Info, Inherit, Neutral0, Neutral10, Neutral3, Neutral4, Neutral5, Neutral7, Neutral8, Neutral9, Primary
  - CyanDarker: Color="cyan-darker", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=61
  - Info: Color="info", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=False, IsSemantic=True, Order=30
  - Inherit: Color="inherit", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=69
  - Neutral0: Color="neutral-0", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=19
  - Neutral10: Color="neutral-10", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=29
  - Neutral3: Color="neutral-3", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=22
  - Neutral4: Color="neutral-4", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=23
  - Neutral5: Color="neutral-5", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=24
  - Neutral7: Color="neutral-7", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=26
  - Neutral8: Color="neutral-8", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=27
  - Neutral9: Color="neutral-9", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=28
  - Primary: Color="primary", IsActive=True, IsBrand=True, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=1
- **UBT_ColumnBehaviour** (UBTConnectLibrary): records used: ExpandMiddle, ReduceFirst, ReduceLast
  - ExpandMiddle: Id="expand-middle", Order=4
  - ReduceFirst: Id="reduce-first", Order=1
  - ReduceLast: Id="reduce-last", Order=3
- **UBT_Display** (UBTConnectLibrary): records used: Flex
  - Flex: Id="display-flex", Order=3
- **UBT_FlexDirection** (UBTConnectLibrary): records used: Row
  - Row: Id="flex-direction-row", Order=3
- **UBT_FontSize** (UBTConnectLibrary): records used: Base, DoubleExtraSmall, ExtraSmall, Heading6, Small
  - Base: Id="base", Order=5
  - DoubleExtraSmall: Id="xxs", Order=1
  - ExtraSmall: Id="xs", Order=3
  - Heading6: Id="h6", Order=6
  - Small: Id="s", Order=4
- **UBT_FontWeight** (UBTConnectLibrary): records used: Regular, SemiBold
  - Regular: Id="regular", Order=2
  - SemiBold: Id="semi-bold", Order=4
- **UBT_Icons2** (UBTConnectLibrary): records used: ArrowDropDown, Backspace, BookClosed, ChevronRight, Cottage, Fingerprint, HomePIn, Lock, OpenNew, School
  - ArrowDropDown: Id="connect-icon-arrow_drop_down", Is_Active=True, Label="Arrow Drop Down"
  - Backspace: Id="connect-icon-backspace", Is_Active=True, Label="Backspace"
  - BookClosed: Id="connect-icon-book_closed", Is_Active=True, Label="Book Closed"
  - ChevronRight: Id="connect-icon-chevron_right", Is_Active=True, Label="Chevron Right"
  - Cottage: Id="connect-icon-cottage", Is_Active=True, Label="Cottage"
  - Fingerprint: Id="connect-icon-fingerprint", Is_Active=True, Label="Fingerprint"
  - HomePIn: Id="connect-icon-home_pin", Is_Active=True, Label="Home PIn"
  - Lock: Id="connect-icon-lock", Is_Active=True, Label="Lock"
  - OpenNew: Id="connect-icon-open_new", Is_Active=True, Label="Open New"
  - School: Id="connect-icon-school", Is_Active=True, Label="School"
- **UBT_IconsSize** (UBTConnectLibrary): records used: Base_24, Display_36, NonStandard_16
  - Base_24: Label="icon-base", Order=3
  - Display_36: Label="icon-display", Order=4
  - NonStandard_16: Label="icon-non-standard-16", Order=5
- **UBT_ImageCardType** (UBTConnectLibrary): records used: Detail, Gallery, Sublist
  - Detail: Id="detail", Order=3
  - Gallery: Id="gallery", Order=4
  - Sublist: Id="sublist", Order=2
- **UBT_ImageSize** (UBTConnectLibrary): records used: Auto, Base_52, HalfWidth_50vw, Large_65, MaxWidth_100vw, Square
  - Auto: Id="auto", Order=13
  - Base_52: Id="base", Order=3
  - HalfWidth_50vw: Id="half-width", Order=15
  - Large_65: Id="l", Order=5
  - MaxWidth_100vw: Id="max-width", Order=10
  - Square: Id="square", Order=14
- **UBT_JustifyContent** (UBTConnectLibrary): records used: Center, SpaceBetween
  - Center: Id="justify-content-center", Order=2
  - SpaceBetween: Id="justify-content-space-between", Order=4
- **UBT_MessageType** (UBTJavaScriptUtils): records used: Error
  - Error: Id=4, Label="Error"
- **UBT_Shape** (UBTConnectLibrary): records used: Large, Soft
  - Large: Id="large", Order=4
  - Soft: Id="soft", Order=2
- **UBT_Size** (UBTConnectLibrary): records used: Base, ExtraLarge, ExtraSmall, Medium, Small
  - Base: Id="base", Order=7
  - ExtraLarge: Id="xl", Order=10
  - ExtraSmall: Id="xs", Order=2
  - Medium: Id="m", Order=8
  - Small: Id="s", Order=4
- **UBT_SystemExceptionTypes** (UBTJavaScriptUtils): records used: NotRegisteredException
  - NotRegisteredException: Id="NotRegisteredException"
- **UBT_VerticalAlign** (UBTConnectLibrary): records used: Center
  - Center: Id="center", Order=2
