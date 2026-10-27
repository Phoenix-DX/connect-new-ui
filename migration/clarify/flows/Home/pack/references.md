# Pack of UI flow Home (DEV model, MCP dump of flows 2026-10-27)

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
| Carousel | OutSystemsUI_2_23 | Interaction | Navigation: CarouselNavigation Identifier = both; Height: Text = "auto"; ItemsPerSlide: CarouselItems; OptionalConfigs: CarouselOptionalConfigs; ExtendedClass: Text | Initialized(CarouselId: Text (mandatory)); OnSlideMoved(CarouselId: Text (mandatory); ItemIndex: Integer) | `OutSystemsUI_2_23.Interaction.Carousel.mvc.js` |
| CircleButton | UBTConnectLibrary | ConnectPatterns | ExtendedClasses: Text; BackgroundColorId: UBT_Color Identifier; BorderColorId: UBT_Color Identifier; SizeId: UBT_AvatarSize Identifier; IsProcessing: Boolean; PaddingSize: UBT_Size Identifier = s | OnClick() | `UBTConnectLibrary.ConnectPatterns.CircleButton.mvc.js` |
| CircleButton_WithLabel | UBTConnectLibrary | ConnectPatterns | SizeId: UBT_AvatarSize Identifier; BackgroundColorId: UBT_Color Identifier; BorderColorId: UBT_Color Identifier; ExtendedClasses: Text; IsProcessing: Boolean; PaddingSize: UBT_Size Identifier = s; In_BadgeIcon: AvatarIconOptions | OnClick() | `UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc.js` |
| Columns_Two | UBTConnectLibrary | BasePatterns | ColumnOptions: ColumnOptions; ExtendedClasses: Text | - | `UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js` |
| CustomContainer | UBTConnectLibrary | BasePatterns | ExtendedClasses: Text; Options: ContainerOptions | Clicked() | `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` |
| CustomText | UBTConnectLibrary | BasePatterns | In_Text: Text (mandatory); In_TextOptions: TextOptions (mandatory); In_PaddingOptions: SpacingOptions; In_HighlightWords: Text; In_HighlightOptions: TextOptions; ExtendedClasses: Text; FitContent: Boolean; InJustifyText: Boolean; NoWrap: Boolean; InlineIcon: InlineIcon | Clicked() | `UBTConnectLibrary.BasePatterns.CustomText.mvc.js` |
| DeeplinkHandlerCentral | EventfulDeeplinksPlugin | EventfulDeeplinksPlugin | - | OnDeeplinkOpen(URL: Text (mandatory)) | - |
| Dialog_AccessRestrictedAction | UBTConnect_Utils | CW_App_Common_Blocks_PopupDialogs | In_ExtendedClass: Text | - | `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc.js` |
| Dialog_GoExternalApp | UBTConnect_Utils | CW_App_Common_Blocks_PopupDialogs | In_ExtendedClass: Text; ExternalApp_PopUpInfo: ExternalApp_PopUpInfo (mandatory) | OnPopUpReady(PopUpId: Text (mandatory)) | `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_GoExternalApp.mvc.js` |
| Embedded_FeedCMS | UBTConnect_EmbedFeed | Blocks | FeedItemId: Text (mandatory); B2CTenant: Text (mandatory) | OnDownloaded(URL: Text (mandatory); Filename: Text (mandatory)); OnLoaded(); OnShare(ShareId: Text (mandatory); FeedItemTitle: Text (mandatory); FeedItemSubtitle: Text (mandatory); FeedItemImageURL: Text (mandatory)) | `UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.mvc.js` |
| ExitConfirmationDialog | NavigationHandler | ConfirmationDialogs | Force: Boolean | - | `NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc.js` |
| Gallery | OutSystemsUI_2_23 | Adaptive | RowItemsDesktop: Integer = 4; RowItemsTablet: Integer = 3; RowItemsPhone: Integer = 1; ItemsGap: Space Identifier = base; ExtendedClass: Text | Initialized(GalleryId: Text (mandatory)) | `OutSystemsUI_2_23.Adaptive.Gallery.mvc.js` |
| HandleDownload | FileTransferPlugin | FileTransfer | - | OnDownloadComplete(FileDownloadResult: FileDownloadResult (mandatory)); OnDownloadError(FileTransferError: FileTransferError (mandatory)); OnDownloadProgress(Progress: Progress (mandatory)) | - |
| HandleImageLoadError | Connect2_LegacyShared | Utility | - | - | `Connect2_LegacyShared.Utility.HandleImageLoadError.mvc.js` |
| Icon | UBTConnectLibrary | ConnectPatterns | In_IconId: UBT_Icons2 Identifier (mandatory); In_ColorId: UBT_Color Identifier = neutral-9; In_SizeId: UBT_IconsSize Identifier; In_Visible: Boolean = True; In_ExtendedClasses: Text = "" | Click() | `UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` |
| IconBadge | UBTConnectLibrary | OutSystemsUIOverrides | Number: Long Integer (mandatory); Color: UBT_Color Identifier = Entities.UBT_Color.Primary; IsLight: Boolean; ExtendedClass: Text; MaxNumber: Integer = 9 | - | `UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc.js` |
| IconText | UBTConnectLibrary | ConnectPatterns | IsIconOnRight: Boolean; Text: Text (mandatory); TextOptions: TextOptions; SpacingSize: UBT_Size Identifier = xs; ExtendedClasses: Text; SubtextOptions: TextOptions; In_Subtext: Text; In_JustifyText: Boolean | Clicked() | `UBTConnectLibrary.ConnectPatterns.IconText.mvc.js` |
| Layout_DetailPage | UBTConnectLibrary | Layouts | In_AlignTitleLeft: Boolean; In_IsPrimaryColor: Boolean = True; In_ExtendedClass: Text; In_EnableAccessibilityFeatures: Boolean; In_InitializeNavigationHandler: Boolean = True; In_IsHideTitle: Boolean | OnReadyEvent(WrapperContainerId: Text (mandatory)) | `UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js` |
| Layout_HomePage | UBTConnectLibrary | Layouts | UsePullToRefresh: Boolean; ExtendedClass: Text; EnableAccessibilityFeatures: Boolean; ContentBackgroundColor: UBT_Color Identifier = Entities.UBT_Color.Neutral4; AddSearchBar: Boolean = True; SVGHeight: Text = "260px" | OnPullToRefresh(); OnReadyEvent(ContentContainerId: Text (mandatory)); OnSearchClick(); OnSearchInputScrolled(Event_IsSearchInputScrolled: Boolean (mandatory)); OnSVGScrolled(Event_IsSVGScrolled: Boolean (mandatory)) | `UBTConnectLibrary.Layouts.Layout_HomePage.mvc.js` |
| Layout_LoginFlow | UBTConnectLibrary | Layouts | In_HasOverlay: Boolean; In_ExtendedClass: Text; In_IsCommonBlock: Boolean | OnPathCalculated(); OnReady(MainContainerId: Text (mandatory)) | `UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc.js` |
| OfflineDataSyncCore | OutSystemsUI_2_23 | Private | - | OnConfigure(); OnSync(SyncUnit: Text (mandatory)); OnSyncComplete(SyncUnit: Text (mandatory)); OnSyncError(SyncUnit: Text (mandatory); ErrorMessage: Text (mandatory)); OnSyncStart(SyncUnit: Text (mandatory)) | `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js` |
| PinUnlock_MobileWrapper | UBT_AppManager_Mobile | Fingerprint | In_PinLength: Integer (mandatory); In_ExtendedClasses: Text (mandatory); In_IsScanFingerprintOnReady: Boolean (mandatory); In_ForceVisible: Boolean; In_AllowBackNavigation: Boolean; In_HideFingerprint: Boolean | KeyPressed(); PincodeChange(InputLength: Integer (mandatory)); PinUnlockError(ErrorMessage: Text (mandatory)); PinUnlockSuccess(); Timeout(); UserLoggedOut() | `UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc.js` |
| PreventBackNavigation | NavigationHandler | NavigationHandler | - | BackNavigationPrevented(BackNavigationEvent: Object (mandatory)) | `NavigationHandler.NavigationHandler.PreventBackNavigation.mvc.js` |
| SharePopup | UBTConnect_Utils | CW_CTA_PopUps | In_ContactPopupData: ContactPopupData (mandatory); In_ImageSizeId: UBT_ImageSize Identifier = xl | Event_Cancel(); Event_ShareToConnect(); Event_ShareToOthers() | `UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc.js` |
| ShareSheet | UBTConnect_Utils | CW_Share | In_IsOpen: Boolean (mandatory); In_ShareObjectTypeId: Type_ShareObject Identifier (mandatory); In_ShareableObjectId: Text (mandatory); In_IsLegacy: Boolean; In_UpdateType: Text; In_UpdateDate: Date | Event_ClosedShareSheet() | `UBTConnect_Utils.CW_Share.ShareSheet.mvc.js` |
| ShareableObject_Generic | UBTConnect_Utils | CW_Share | In_ShareableObject: UI_ShareableObject_Generic (mandatory) | Event_OnClick() | `UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc.js` |
| SkeletonSection | UBTConnectLibrary | ConnectPatterns | In_IsLoading: Boolean (mandatory); In_ExtendedClass: Text; In_IsActiveWhileLoading: Boolean | - | `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js` |
| Update_ListItem | UBTConnectLibrary | ConnectCorePatterns | In_Type_UpdateFeedItem: Connect_UpdateTypeId Identifier (mandatory); In_AvatarImageURL: Text; ShowImage: Boolean = True; In_InitialsList: Gender, Initials Record List; In_Name: Text (mandatory); In_Date: Date (mandatory); In_Location: Text (mandatory); In_IsRead: Boolean (mandatory); IsEnabled: Boolean = True; HasBorderBottom: Boolean = True; In_ParentsNames: Text; In_BirthType: Text; PaddingSizeId: SpacingOptions; IgnoreReadBackground: Boolean; In_HasShare: Boolean | Event_MarkAsRead(); Event_MarkAsUnread(); Event_SendGift(); Event_Share(); OnClick() | `UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc.js` |

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
| BottomBarSlider_ForceRefresh | UBTConnectLibrary | BottomBar_Slider | - | - |
| BottomBar_GetList | UBTConnect_Utils | BottomBar | useMapsItems: Boolean; isHouseholder: Boolean (mandatory) | BottomBar_ItemsList: BottomBar_Item List |
| CheckMediaScanner_Plugin | Connect2_MediaScannerPlugin | - | - | IsAvailable: Boolean; Error: Error |
| ConfigureOfflineDataSync | OutSystemsUI_2_23 | OfflineDataSync | SyncOnOnline: Boolean (mandatory); SyncOnResume: Boolean (mandatory); RetryOnError: Boolean (mandatory); RetryIntervalInSeconds: Integer (mandatory) | - |
| ConfirmAction | NavigationHandler | NavigationHandler_Confirmation | ActionConfirmationDialogWidgetId: Text (mandatory) | IsConfirmed: Boolean |
| EndOfflineDataSync | OutSystemsUI_2_23 | OfflineDataSync | HasError: Boolean (mandatory); ErrorMessage: Text = ""; AllowRetry: Boolean | - |
| FeedbackMessage_AutoClose | UBTJavaScriptUtils | JSUtils_FeedbackMessage | Title: Text; Message: Text (mandatory); MessageType: UBT_MessageType Identifier = Entities.UBT_MessageType.Error; EncodedHTML: Boolean = True; ExtendedClass: Text; DelayMs: Integer = 0; useDebounce: Boolean | - |
| GetHasCarouselEnabled | UBTConnect_Utils | Permissions_FF_Wrappers_OutSystems | - | HasCarouselEnabled: Boolean |
| GetHasNewLDM | UBTConnect_Utils | Permissions_FF_Wrappers_OutSystems | - | Out_HasNewLDM: Boolean |
| GetHasNewNotifications | UBTConnect_Utils | Permissions_FF_Wrappers_OutSystems | - | Out_HasNewNotifications: Boolean |
| GetPreloadObject | NavigationHandler | Preloading | - | Preload: Object |
| GetUnreadNotificationNumber | Connect2_LegacyShared | Comms | - | UnreadNotifications: Long Integer |
| JSUtils_Console_Log | UBTJavaScriptUtils | JSUtils_Console | Message: Text (mandatory) | - |
| ListAny | (System) | - | List: Generic Record List (mandatory); Condition: Boolean (mandatory) | Result: Boolean |
| ListAppend | (System) | - | List: Generic Record List (mandatory); Element: Generic Record (mandatory) | - |
| ListClear | (System) | - | List: Generic Record List (mandatory) | - |
| ListFilter | (System) | - | SourceList: Generic Record List (mandatory); Condition: Boolean (mandatory) | FilteredList: Generic Record List |
| ListIndexOf | (System) | - | List: Generic Record List (mandatory); Condition: Boolean (mandatory) | Position: Integer |
| MediaScannerPlugin_ForceScan | Connect2_MediaScannerPlugin | - | FilePath: Text (mandatory) | Error: Error; Success: Boolean |
| OpenDocumentFromLocalPath | FileViewerPlugin | - | FilePath: Text (mandatory); Width: Text; Height: Text | Success: Boolean; Error: Error |
| OpenInApp_TryOpenFileInApp | UBTConnect_Utils | OpenInApp_Utils | Filename: Text (mandatory); DownloadUrl: Text (mandatory); FolderToSave: Text (mandatory); FileExtension: Text = "pdf" | Filepath: Text; isInApp: Boolean = True |
| OpenPolicy | UBTConnect_Utils | Policies | PolicyInformation: PolicyInformation2 (mandatory); ErrorMessage: Text = "This policy couldn't be found." | - |
| PIN_Check | UBT_AppManager | PIN | - | NeedRegister: Boolean; NeedUnlock: Boolean |
| PreventNavigation | NavigationHandler | NavigationHandler | NavigationEvent: Object (mandatory) | - |
| ResetReplaceOnUpcomingNavigation | NavigationHandler | NavigationHandler | - | - |
| ScreenModel_Flush | UBTJavaScriptUtils | JSUtils_Model | - | - |
| SetBottomBarActiveElement | OutSystemsUI_2_23 | Menu | ActiveItem: Integer = -1 | Success: Boolean; ErrorMessage: ErrorMessage |
| SetPreloadObject | NavigationHandler | Preloading | Preload: Object (mandatory) | - |
| ShareEntity_ByURL | UBTConnect_Utils | Share | In_ShareTypeId: Type_ShareObject Identifier (mandatory); In_ShareableObjectId: Text (mandatory); In_UpdateType: Text; In_UpdateDate: Date | - |
| ShowComingSoonMessage | UBTConnect_Utils | CommonMessages | - | - |

## Static entity records named by the flow (Entities.<Entity>.<Record>)

- **CarouselNavigation** (OutSystemsUI_2_23): records used: Dots
  - Dots: Type="dots"
- **Connect_BottomBar_Items** (UBTConnect_Utils): records used: Bookmarks, Directory, Home, Menu, Updates
  - Bookmarks: Id="Bookmarks"
  - Directory: Id="Directory"
  - Home: Id="Home"
  - Menu: Id="Menu"
  - Updates: Id="Updates"
- **Connect_Entity** (Connect_CommonEntities_DB): records used: FeedItem
  - FeedItem: APIKey="FeedItem", Id="Feed Item", Is_Active=True, Label="Feed Item", Order=7
- **Connect_Services** (Connect_Services_CS): records used: Assemble, CommunityTradelink, ElGusto, HR100, LDM, MyCalendar, MyNotes, OneSchoolGlobal, Orbit, OrbitAdmin, Trove
  - Assemble: IconId=connect-icon-assemble, Id="Assemble", Is_Active=True, isMandatory=True, Label="Assemble", Order=3, StartAsDefault=True
  - CommunityTradelink: IconId=SVG_CommunityTradelink, Id="CommunityTradelink", Is_Active=True, isMandatory=False, Label="Community Tradelink", Order=10
  - ElGusto: IconId=SVG_ElGusto, Id="ElGusto", Is_Active=True, isMandatory=False, Label="El Gusto", Order=9
  - HR100: IconId=SVG_HR100, Id="HR100", Is_Active=True, isMandatory=False, Label="HR100", Order=8
  - LDM: IconId=connect-icon-ldm, Id="LDM", Is_Active=True, isMandatory=True, Label="Lord's Day Meal", Order=2, StartAsDefault=True
  - MyCalendar: IconId=connect-icon-calendar, Id="MyCalendar", Is_Active=True, isMandatory=False, Label="My Entertaining", Order=5, StartAsDefault=True
  - MyNotes: IconId=connect-icon-tooltip, Id="MyNotes", Is_Active=True, isMandatory=False, Label="My Notes", Order=6, StartAsDefault=True
  - OneSchoolGlobal: IconId=SVG_OneSchoolGlobal, Id="OneSchoolGlobal", Is_Active=False, isMandatory=False, Label="OneSchool Global", Order=7, StartAsDefault=False
  - Orbit: IconId=connect-icon-orbit_text, Id="Orbit", Is_Active=True, isMandatory=True, Label="Orbit", Order=1, StartAsDefault=True
  - OrbitAdmin: IconId=connect-icon-orbit_text, Id="OrbitAdmin", Is_Active=True, isMandatory=True, Label="Orbit Admin", Order=1, StartAsDefault=True
  - Trove: IconId=connect-icon-trove, Id="Trove", Is_Active=True, isMandatory=False, Label="Trove", Order=4, StartAsDefault=True
- **Connect_Subscription_Region** (Connect_CommonEntities_DB): records used: Global
  - Global: Id="3d96a888-94a1-e611-813a-0a722c59a519", Is_Active=True, Label="Global"
- **Connect_UpdateTypeId** (Connect_CommonEntities_DB): records used: Birth
  - Birth: Id="Birth"
- **Gender2** (Connect_CommonEntities_DB): records used: MALE
  - MALE: Id="MALE"
- **Type_CarouselItemSwipeAction** (UBTConnect): records used: UpdatesCarousel_SetIsRead
  - UpdatesCarousel_SetIsRead: Id="UpdatesCarousel_SetIsRead", Order=1
- **Type_ShareObject** (Connect2_Sharing_CS): records used: Feed, Update
  - Feed: APIKey="FeedItem", Id="Feed", Is_Active=True, Label="Feed", NotificationTitle="shared a Feed", Order=7
  - Update: APIKey="Updates", Id="Update", Is_Active=True, Label="Update", NotificationTitle="shared an Update", Order=1
- **UBTConnect_JSUtils_ElementCache_Property** (UBTConnect): records used: Obj_UpdatesCarouselSwippedItemId
  - Obj_UpdatesCarouselSwippedItemId: Label="Obj_UpdatesCarouselSwippedItemId"
- **UBT_AvatarSize** (UBTConnectLibrary): records used: ExtraSmall_32, Large_65
  - ExtraSmall_32: Id="xs", Order=2
  - Large_65: Id="l", Order=6
- **UBT_Color** (UBTConnectLibrary): records used: BlueDark, CyanDarker, CyanLightest, GreenDark, Inherit, Neutral0, Neutral10, Neutral2, Neutral3, Neutral4, Neutral6, Neutral7, Neutral8, Neutral9, PeachDark, Primary, PrimaryGradientRadial, Red, RedDark, Transparent
  - BlueDark: Color="blue-dark", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=48
  - CyanDarker: Color="cyan-darker", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=61
  - CyanLightest: Color="cyan-lightest", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=57
  - GreenDark: Color="green-dark", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=66
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
  - PeachDark: Color="peach-dark", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=54
  - Primary: Color="primary", IsActive=True, IsBrand=True, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=1
  - PrimaryGradientRadial: Color="primary-gradient-radial", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=74
  - Red: Color="red", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=10
  - RedDark: Color="red-dark", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=10
  - Transparent: Color="transparent", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=18
- **UBT_ColumnBehaviour** (UBTConnectLibrary): records used: ReduceLast
  - ReduceLast: Id="reduce-last", Order=3
- **UBT_Display** (UBTConnectLibrary): records used: Flex
  - Flex: Id="display-flex", Order=3
- **UBT_FontSize** (UBTConnectLibrary): records used: Base, DoubleExtraSmall, ExtraSmall, Heading1, Heading2, Small
  - Base: Id="base", Order=5
  - DoubleExtraSmall: Id="xxs", Order=1
  - ExtraSmall: Id="xs", Order=3
  - Heading1: Id="h1", Order=11
  - Heading2: Id="h2", Order=10
  - Small: Id="s", Order=4
- **UBT_FontWeight** (UBTConnectLibrary): records used: SemiBold
  - SemiBold: Id="semi-bold", Order=4
- **UBT_Icons2** (UBTConnectLibrary): records used: AddCircle, ArrowDown, ArrowRightAlt, ArrowUp, Backspace, Fingerprint, Lock, Notifications, OpenNew, SVG_CommunityCountries, SVG_CommunityHouseholds, SVG_CommunityLocalities, SVG_CommunityMembers, SVG_CommunityTradelink, SVG_ElGusto, SVG_HR100, Settings, Trove
  - AddCircle: Id="connect-icon-add_circle", Is_Active=True, Label="Add Circle"
  - ArrowDown: Id="connect-icon-Arrow-down", Is_Active=True, Label="ArrowDown"
  - ArrowRightAlt: Id="connect-icon-arrow_right_alt", Is_Active=True, Label="Arrow Right Alt"
  - ArrowUp: Id="connect-icon-Arrow-up1", Is_Active=True, Label="ArrowUp"
  - Backspace: Id="connect-icon-backspace", Is_Active=True, Label="Backspace"
  - Fingerprint: Id="connect-icon-fingerprint", Is_Active=True, Label="Fingerprint"
  - Lock: Id="connect-icon-lock", Is_Active=True, Label="Lock"
  - Notifications: Id="connect-icon-notifications", Is_Active=True, Label="Notifications"
  - OpenNew: Id="connect-icon-open_new", Is_Active=True, Label="Open New"
  - Settings: Id="connect-icon-settings", Is_Active=True, Label="Settings"
  - SVG_CommunityCountries: Id="SVG_CommunityCountries", Is_Active=True, Label="SVG_CommunityCountries"
  - SVG_CommunityHouseholds: Id="SVG_CommunityHouseholds", Is_Active=True, Label="SVG_CommunityHouseholds"
  - SVG_CommunityLocalities: Id="SVG_CommunityLocalities", Is_Active=True, Label="SVG_CommunityLocalities"
  - SVG_CommunityMembers: Id="SVG_CommunityMembers", Is_Active=True, Label="SVG_CommunityMembers"
  - SVG_CommunityTradelink: Id="SVG_CommunityTradelink", Is_Active=True, Label="SVG_CommunityTradelink"
  - SVG_ElGusto: Id="SVG_ElGusto", Is_Active=True, Label="SVG_ElGusto"
  - SVG_HR100: Id="SVG_HR100", Is_Active=True, Label="SVG_HR100"
  - Trove: Id="connect-icon-trove", Is_Active=True, Label="Trove"
- **UBT_IconsSize** (UBTConnectLibrary): records used: Base_24, Display_36, ExtraSmall_10, Medium_20, NonStandard_16, NonStandard_40, NonStandard_64
  - Base_24: Label="icon-base", Order=3
  - Display_36: Label="icon-display", Order=4
  - ExtraSmall_10: Label="icon-extra-small", Order=11
  - Medium_20: Label="icon-medium", Order=2
  - NonStandard_16: Label="icon-non-standard-16", Order=5
  - NonStandard_40: Label="icon-non-standard-40", Order=12
  - NonStandard_64: Label="icon-non-standard-64", Order=8
- **UBT_JustifyContent** (UBTConnectLibrary): records used: Center
  - Center: Id="justify-content-center", Order=2
- **UBT_MessageType** (UBTJavaScriptUtils): records used: Error, Info
  - Error: Id=4, Label="Error"
  - Info: Id=1, Label="Info"
- **UBT_Shadow** (UBTConnectLibrary): records used: Small
  - Small: Id="s", Order=4
- **UBT_Shape** (UBTConnectLibrary): records used: Large, Medium
  - Large: Id="large", Order=4
  - Medium: Id="medium", Order=3
- **UBT_Size** (UBTConnectLibrary): records used: Base, ExtraLarge, ExtraSmall, Medium, Small
  - Base: Id="base", Order=7
  - ExtraLarge: Id="xl", Order=10
  - ExtraSmall: Id="xs", Order=2
  - Medium: Id="m", Order=8
  - Small: Id="s", Order=4
- **UBT_VerticalAlign** (UBTConnectLibrary): records used: Center
  - Center: Id="center", Order=2
