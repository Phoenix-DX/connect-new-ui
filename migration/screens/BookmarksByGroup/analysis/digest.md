# Digest: BookmarksByGroup

- Path: `/UBTConnect/BookmarksByGroup`
- Viewport at capture: {'width': 390, 'height': 844, 'dpr': 1}
- body class: `phone portrait connect-theme osx is-ltr`; body style: `--header-size-content: 0px; --footer-height: 56px; --viewport-height: 844px;`
- PWA: manifest `/UBTConnect/moduleservices/pwa/manifest`, service workers []
- Screen file: `UBTConnect.Legacy_MyBookmarks.BookmarksByGroup.mvc.js`

## Rendered block tree
```
MyBookmarksFlow.ScreenBlock_BookmarkGroup
  Layout.Layout
    LayoutRuntime_NavigationHandler.LayoutRuntime_Top
    Layout.BaseLayout_UpdatedOSUI
      Layout.MenuIcon__UpdatedOSUI
      ScrollAnchors.ScrollAnchor
      Utility.Result_Item_Image
        Utility.ItemOptionsMenu
          Widgets.PopupMenu
      ScrollAnchors.ScrollAnchor
      Utility.Result_Item_Image
        Utility.ItemOptionsMenu
          Widgets.PopupMenu
      ScrollAnchors.ScrollAnchor
      Utility.Result_Item_Image
        Utility.ItemOptionsMenu
          Widgets.PopupMenu
      ScrollAnchors.ScrollAnchor
      Utility.Result_Item_Image
        Utility.ItemOptionsMenu
          Widgets.PopupMenu
      ScrollAnchors.ScrollAnchor
      Utility.Result_Item_Image
        Utility.ItemOptionsMenu
          Widgets.PopupMenu
      ScrollAnchors.ScrollAnchor
      Utility.Result_Item_Image
        Utility.ItemOptionsMenu
          Widgets.PopupMenu
      ScrollAnchors.ScrollAnchor
      Utility.Result_Item_Image
        Utility.ItemOptionsMenu
          Widgets.PopupMenu
      MyBookmarksFlow.BookmarkNoteAddEdit
        ConfirmationDialogs.ActionConfirmationDialog
      MyBookmarksFlow.BookmarkNoteDelete
        ConfirmationDialogs.ActionConfirmationDialog
      CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy
        CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction
          ConfirmationDialogs.ActionConfirmationDialog
      NavigationHandler.BackNavigationHandler
      App_Common.BottomBarMenu
        App_Common.BottomBarContent
          Navigation.BottomBarItem
            ConnectPatterns.Icon
            BasePatterns.CustomText
              ConnectPatterns.IconInline_Internal
          Navigation.BottomBarItem
            ConnectPatterns.Icon
            BasePatterns.CustomText
              ConnectPatterns.IconInline_Internal
          Navigation.BottomBarItem
            App_Common_Blocks.App_IconBadge
              ConnectPatterns.SkeletonSection
                OutSystemsUIOverrides.IconBadge
                  ConnectPatterns.Icon
                  OutSystemsUIOverrides.Badge
            BasePatterns.CustomText
              ConnectPatterns.IconInline_Internal
          Navigation.BottomBarItem
            ConnectPatterns.Icon
            BasePatterns.CustomText
              ConnectPatterns.IconInline_Internal
          Navigation.BottomBarItem
            ConnectPatterns.Icon
            BasePatterns.CustomText
              ConnectPatterns.IconInline_Internal
  CW_Share.ShareSheet
App_Common.CommonUI_InsideLayout
  App_Common.OfflineDataSyncEvents
    Private.OfflineDataSyncCore
      Private.NetworkStatusChanged
  App_PIN.Block_PINUnlock
    Layouts.Layout_LoginFlow
      Layouts.SVG_Background_LoginWrapper
        Layouts.SVG_Background_Custom
          Utilities.InlineSVG
      App_PIN.Block_PINUnlock_ContentWrapper
        Fingerprint.PinUnlock_MobileWrapper
          PIN.Pincode_Unlock
            PIN.InactivityTimer
  CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction
    ConfirmationDialogs.ActionConfirmationDialog
  Legacy_Share.HandleOnResumeOpenLink
    AndroidAppLinks.AndroidAppLinkOnResumeHandler
    EventfulDeeplinksPlugin.DeeplinkHandlerCentral
  Utility.HandleImageLoadError
  NavigationHandler.BackNavigationHandler
```

# Part 1: screen and rendered blocks (spec these in detail)

## `UBTConnect.Legacy_MyBookmarks.BookmarksByGroup.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| BookmarkGroup | input | Text | `""` |
- Client actions / event handlers: `onHandle_NavigateTo_Subdivision`, `onHandle_NavigateTo_CommunityBusinessCarousel`, `onHandle_NavigateTo_Locality`, `onHandle_NavigateTo_ShareObject`, `onHandle_NavigateTo_HouseholdCarousel`
- Navigation: `/UBTConnect/SupperMeeting_Details`(In_SubdivsionId); `/UBTConnect/OneSchoolGlobalDetails`(In_OneSchoolGlobalId); `/UBTConnect/CommunityBusinessDetails_CoomingSoon`(In_CommunityBusinessId); `/UBTConnect/Locality_Details`(LocalityId); `/UBTConnect/LegacyShareObject`(In_ObjectId, In_ShareObjectTypeId); `/UBTConnect/HouseholdCarousel`(In_StartingHouseholdId); `/UBTConnect/HouseholdDetails`(HouseholdId)
- Static entities / flags: `connect_BottomBar_Items.bookmarks`, `connect_Entity.oneSchoolGlobal`

## `Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| GetBookmarksGroupResponse | output | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.GetBookmarksByGroupResponseRec())` |
| WasSearched | output | Boolean | `false` |
| BookmarkedItems | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_MUIModel.BookmarkItemList())` |
| ShowSearch | local | Boolean | `false` |
| SearchString | local | Text | `""` |
| SortColumn | local | Text | `""` |
| IsFetchingBookmarks | local | Boolean | `false` |
| UpdatedTotal | local | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| WasSearchDone | local | Boolean | `false` |
| SearchString_SearchDone | local | Text | `""` |
| IsFromNavigationHistory | local | Boolean | `false` |
| EditingBookmarkNote | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.BookmarkNoteRec())` |
| IsShareOpen | local | Boolean | `false` |
| ShareableObjectId | local | Text | `""` |
| ShareableObject_Generic | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec())` |
| Type_ShareObjectId | local | Text | `""` |
| BookmarkGroup | input | Text | `""` |
| GetAllBookmarksByGroup | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetAllBookmarksByGroupDataActRec())` |
- Data actions: `DataActionGetAllBookmarksByGroup` → `screenservices/Connect2_MyBookmarks_MUI/MyBookmarksFlow/ScreenBlock_BookmarkGroup/DataActionGetAllBookmarksByGroup`
- Server actions: `DeleteBookmarkByBookmarkId` → `screenservices/Connect2_MyBookmarks_MUI/MyBookmarksFlow/ScreenBlock_BookmarkGroup/ActionDeleteBookmarkByBookmarkId`, `New_UpdateBookmarkNote` → `screenservices/Connect2_MyBookmarks_MUI/MyBookmarksFlow/ScreenBlock_BookmarkGroup/ActionNew_UpdateBookmarkNote`
- Lifecycle handlers: Initialize, Ready
- Client actions / event handlers: `refreshBookmarkData`, `navigateTo_HouseholdsCarousel`, `onClickSearchClear`, `onAfterFetch_GetAllBookmarksByGroup`, `onHandle_ShareItem`, `handler_OnSaveBookmarkNote`, `handler_ConfirmDeleteNote`, `onReady`, `toggleShowSearch`, `navigateTo_LocalityDetail`, `navigateTo_CommunityBusinessDetail`, `handler_AddNote`, `onKeyup_SearchBookmarkItems`, `onClick_BookmarkedItem`, `preloadListSource_Bookmarks`, `navigateTo_SubdivisionDetail`, `handler_DeleteNote`, `backNavigationHandler`, `onHandle_BookmarkToggle`, `updateNote`, `handler_CloseShareSheet`, `handler_EditNote`, `onInitialize`, `resetSearch`, `upgradeSubscription`, `onClick_Search`, `navigateTo_Subdivision`, `navigateTo_ShareObject`, `navigateTo_CommunityBusinessCarousel`, `navigateTo_Locality`, `navigateTo_HouseholdCarousel`
- JavaScript nodes: `Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.RefreshBookmarkData.SetScrollToTopJS`, `Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.Handler_OnSaveBookmarkNote.UpdateNoteJS`, `Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.OnKeyup_SearchBookmarkItems.CheckForEnterKeyJS`, `Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.PreloadListSource_Bookmarks.WasCurrentViewRestoredFromCacheJS`, `Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS`, `Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.ResetSearch.AsynchRefreshBookmarkDataJS`, `Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.ResetSearch.SetScrollToTopJS`, `Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.OnClick_Search.FocusCursorJS`
- Feedback messages: `allExceptionsVar.value.exceptionMessageAttr, /*Error*/ 3)` | `"Coming soon", /*Info*/ 0)` | `"That bookmark isn’t available", /*Error*/ 3)` | `"Bookmark could not be removed. Please try again later.", /*Info*/ 0)` | `"There was an error, please try again.", /*Error*/ 3)`
- Static entities / flags: `menuAction.back`, `myBookmarks_Group.contacts`, `resultListType.household`, `connect_Entity.household`, `myBookmarks_Group.locations`, `myBookmarks_ObjectType.locality`, `myBookmarks_ObjectType.subdivision`, `resultListType.subdivision`, `type_ShareObject.supperMeeting`, `connect_Entity.supperMeetings_aka_Subdivisions`, `myBookmarks_Group.entities`, `myBookmarks_ObjectType.campusCo`, `myBookmarks_ObjectType.oneSchoolGlobal`, `connect_Entity.oneSchoolGlobal`, `communityBusinessType2.campusCo`, `communityBusinessType2.oneSchoolGlobal`
- Images: `img/Connect2_LegacyShared.PlaceholderImage_Household.png`, `img/Connect2_LegacyShared.CampusCo_PhotoComingSoon.png`, `img/Connect2_LegacyShared.CampusCo_PhotoUnavailable.png`, `img/Connect2_LegacyShared.OneSchool_PhotoComingSoon.png`, `img/Connect2_LegacyShared.OneSchool_PhotoUnavailable.png`, `img/Connect2_LegacyShared.no_division_rectangle.png`
- Candidate static strings: `You'll find your` | `You can get back to a page that's` | `UpdateNote` | `RefreshBookmarkData`

## `Connect2_LegacyShared.Layout.Layout.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| UsePullToRefresh | input | Boolean | `false` |
| ExtendedClasses | input | Text | `""` |
| CustomClass | input | Text | `""` |
| IsHeaderTransparent | input | Boolean | `false` |
- Lifecycle handlers: Initialize, Ready
- Client actions / event handlers: `onReady`, `onInitialize`, `onPullToRefresh`
- Static entities / flags: `themeClass.connect`

## `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| DestroyCallback | local | Object | `null` |
- Lifecycle handlers: Initialize, Destroy
- Client actions / event handlers: `onInitialize`, `onDestroy`
- JavaScript nodes: `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$controller.OnInitialize.InitializeQueueJS`, `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$controller.OnDestroy.ExecuteDestroyCallbackJS`

## `Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| UsePullToRefresh | input | Boolean | `false` |
| HideHeaderOnScroll | input | Boolean | `false` |
| MenuBehavior | input | Text | `Connect2_LegacySharedModel.staticEntities.sideMenuBehavior.overlay` |
| ExtendedClass | input | Text | `""` |
| CustomClass | input | Text | `""` |
| IsHeaderTransparent | input | Boolean | `false` |
- Lifecycle handlers: Ready, Destroy
- Client actions / event handlers: `onDestroy`, `actionHandler_OnPullToRefreshTrigger`, `onReady`, `onPullToRefresh`
- Static entities / flags: `sideMenuBehavior.overlay`

## `Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| IsRTL | local | Boolean | `false` |
| MenuAction | input | Text | `""` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onBack`, `onReady`, `onToggleMenu`
- navigateBack calls: 1
- Static entities / flags: `menuAction.back`, `menuAction.hidden`

## `NavigationHandler.ScrollAnchors.ScrollAnchor.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Id | input | Text | `""` |

## `Connect2_LegacyShared.Utility.Result_Item_Image.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Last_Bucket | local | Text | `""` |
| Last_Path | local | Text | `""` |
| Last_Type | local | Text | `""` |
| Last_SignedURL | local | Text | `""` |
| In_ShowDescription | input | Boolean | `false` |
| ShowPlaceholderForImage | input | Boolean | `false` |
| In_ShowTag | input | Boolean | `false` |
| In_HasAction | input | Boolean | `false` |
| In_IsRoundImage | input | Boolean | `false` |
| In_BackgroundColor | input | Text | `"var(--color-neutral-0)"` |
| In_Diameter | input | Integer | `70` |
| In_ResultType | input | Integer | `0` |
| In_Bucket | input | Text | `""` |
| In_Path | input | Text | `""` |
| In_Type | input | Text | `""` |
| In_SignedURL | input | Text | `""` |
| In_HasPadding | input | Boolean | `true` |
| In_HasBorder | input | Boolean | `true` |
| In_IsNavigationLoading | input | Boolean | `false` |
| CustomClass | input | Text | `""` |
| HtmlDataItem | input | Text | `""` |
| ItemHeight | input | Text | `""` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `loadPhotoAsync`, `onClick_Result_Item`, `onClick_Item`
- Static entities / flags: `resultListType.subdivision`
- Images: `img/Connect2_LegacyShared.no_division_rectangle.png`, `img/Connect2_LegacyShared.User_rectangle.png`

## `Connect2_LegacyShared.Utility.ItemOptionsMenu.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| IsShareToOThersAvailable | local | Boolean | `false` |
| IsBookmarked | local | Boolean | `false` |
| In_IsBookmarked | input | Boolean | `false` |
| IsShareImplemented | input | Boolean | `false` |
| In_IsRecordAvailable | input | Boolean | `true` |
| ShowGift | input | Boolean | `false` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onReady`, `onParametersChanged`, `bookmarkToggle`, `onSendGift`, `onShareToOthers`, `onShareToConnect`

## `Connect2_LegacyShared.Widgets.PopupMenu.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| HasOpened | local | Boolean | `false` |
| ComponentUpdate | local | Object | `null` |
| ComponentDestroy | local | Object | `null` |
| Position | input | Text | `""` |
| IsOpen | input | Boolean | `false` |
| ExtendedClass | input | Text | `""` |
- Lifecycle handlers: Initialize, Ready, Destroy, ParametersChanged
- Client actions / event handlers: `triggerOnOpen`, `onDestroy`, `onParametersChanged`, `onReady`, `triggerOnClose`, `onInitialize`, `onClose`, `onOpen`
- JavaScript nodes: `Connect2_LegacyShared.Widgets.PopupMenu.mvc$controller.OnDestroy.DestroyJS`, `Connect2_LegacyShared.Widgets.PopupMenu.mvc$controller.OnParametersChanged.UpdateJS`, `Connect2_LegacyShared.Widgets.PopupMenu.mvc$controller.OnReady.AddEventHandlersJS`
- Candidate static strings: `TriggerOnOpen` | `TriggerOnClose`

## `Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteAddEdit.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_Note | local | Text | `""` |
| BookmarkNote | input | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.BookmarkNoteRec())` |
- Lifecycle handlers: ParametersChanged
- Client actions / event handlers: `textArea_NoteOnFocus`, `discardNote`, `onParametersChanged`, `saveNote`, `save_Note`
- JavaScript nodes: `Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteAddEdit.mvc$controller.TextArea_NoteOnFocus.JavaScript1JS`
- Candidate static strings: `CANCEL`

## `NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| ShowDialog | local | Boolean | `false` |
| ResolveCallback | local | Object | `null` |
- Lifecycle handlers: Initialize, Ready
- Client actions / event handlers: `onInitialize`, `show`, `yes`, `no`, `onReady`, `popupComponentDidUpdate`, `resolve`, `confirmed`
- JavaScript nodes: `NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$controller.OnReady.OnShowJS`, `NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$controller.Resolve.ResolveJS`
- Candidate static strings: `Show`

## `Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteDelete.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| bookmarkId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
- Client actions / event handlers: `deleteNoteConfirm`
- Candidate static strings: `Are you sure you would like to delete this note?` | `NO`

## `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_ExtendedClass | input | Text | `""` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `onReady`, `upgrade`
- Static entities / flags: `uBT_FontSize.base`, `uBT_FontWeight.semiBold`, `uBT_Size.small`, `uBT_Display.flex`, `uBT_AlignItems.center`, `uBT_JustifyContent.center`, `uBT_Color.primary`, `uBT_Shape.circle`, `uBT_Icons.lock`, `uBT_Color.neutral0`, `uBT_IconSize.nonStandard_32`, `uBT_Size.base`, `uBT_Color.neutral10`, `uBT_FlexDirection.row`, `uBT_FontSize.small`, `uBT_Icons.openNew`, `uBT_IconSize.nonStandard_16`
- Client variables: setApp_SubscriptionPopUp

## `NavigationHandler.NavigationHandler.BackNavigationHandler.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| DestroyCallback | local | Object | `null` |
| Priority | input | Integer | `0` |
- Lifecycle handlers: Initialize, Destroy
- Client actions / event handlers: `triggerBackNavigation`, `onDestroy`, `onInitialize`, `backNavigation`
- JavaScript nodes: `NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$controller.OnDestroy.DestroyJS`, `NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$controller.OnInitialize.AddBackNavigationHandlerJS`
- Candidate static strings: `TriggerBackNavigation`

## `UBTConnect.App_Common.BottomBarMenu.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| LocalBottomBar_Items | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.BottomBar_ItemList())` |
| Retried | local | Boolean | `false` |
| ActiveItem | input | Text | `""` |
| useMapsItems | input | Boolean | `false` |
| isHouseholder | input | Boolean | `false` |
| isRootPage | input | Boolean | `false` |
- Lifecycle handlers: Initialize, Ready, ParametersChanged
- Client actions / event handlers: `onInitialize`, `onReady`, `onParametersChanged`, `event_BottomBar_Clicked`, `bottomBar_Clicked`
- Navigation: `/UBTConnect/HomeFeed`(); `/UBTConnect/CountryList`(); `/UBTConnect/Locality_Details`(); `/UBTConnect/Updates_SingleList`(); `/UBTConnect/Bookmarks`(); `/UBTConnect/New_MyBookmarks`(); `/UBTConnect/MyBookmarks`(); `/UBTConnect/Menu`()
- JavaScript nodes: `UBTConnect.App_Common.BottomBarMenu.mvc$controller.OnParametersChanged.Delayed_BottomBarSlider_ForceRefreshJS`
- Static entities / flags: `connect_BottomBar_Items.updates`, `uBT_Color.primary`, `uBT_Color.neutral6`, `uBT_IconsSize.base_24`, `uBT_FontSize.extraSmall`, `connect_BottomBar_Items.bookmarks`, `connect_BottomBar_Items.home`, `connect_BottomBar_Items.directory`, `launchDarkly_FF.mobileDirectoryBookmarkNote`, `connect_BottomBar_Items.menu`
- Client variables: getDirectory_Updates_UnreadCount

## `OutSystemsUI_2_23.Navigation.BottomBarItem.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| ExtendedClass | input | Text | `""` |

## `UBTConnectLibrary.ConnectPatterns.Icon.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MainContainerClass | local | Text | `"ubt-icon"` |
| In_IconId | input | Text | `""` |
| In_ColorId | input | Text | `UBTConnectLibraryModel.staticEntities.uBT_Color.neutral9` |
| In_SizeId | input | Text | `""` |
| In_Visible | input | Boolean | `true` |
| In_ExtendedClasses | input | Text | `""` |
- Client actions / event handlers: `click`
- Static entities / flags: `uBT_Color.neutral9`

## `UBTConnectLibrary.BasePatterns.CustomText.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_Text | input | Text | `""` |
| In_TextOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TextOptionsRec())` |
| In_PaddingOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SpacingOptionsRec())` |
| In_HighlightWords | input | Text | `""` |
| In_HighlightOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TextOptionsRec())` |
| ExtendedClasses | input | Text | `""` |
| FitContent | input | Boolean | `false` |
| InJustifyText | input | Boolean | `false` |
| NoWrap | input | Boolean | `false` |
| InlineIcon | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.InlineIconRec())` |
- Client actions / event handlers: `clicked`

## `UBTConnectLibrary.ConnectPatterns.IconInline_Internal.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| InlineIcon | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.InlineIconRec())` |

## `UBTConnect.App_Common_Blocks.App_IconBadge.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| BadgeNumber | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| MaxNotifications | input | Integer | `9` |
| IconId | input | Text | `""` |
| IconColor | input | Text | `""` |
| isLoading | input | Boolean | `false` |
- Client actions / event handlers: `iconClick`, `onClick`
- Static entities / flags: `uBT_Color.red`, `uBT_IconsSize.base_24`

## `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_IsLoading | input | Boolean | `false` |
| In_ExtendedClass | input | Text | `""` |
| In_IsActiveWhileLoading | input | Boolean | `false` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onReady`, `screenEvent_OnParametersChanged`
- JavaScript nodes: `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$controller.ScreenEvent_OnParametersChanged.Delayed_SetInertJS`

## `UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Number | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| Color | input | Text | `UBTConnectLibraryModel.staticEntities.uBT_Color.primary` |
| IsLight | input | Boolean | `false` |
| ExtendedClass | input | Text | `""` |
| MaxNumber | input | Integer | `9` |
- Static entities / flags: `uBT_Color.primary`

## `UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Number | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| Color | input | Text | `UBTConnectLibraryModel.staticEntities.uBT_Color.primary` |
| Size | input | Text | `""` |
| Shape | input | Text | `UBTConnectLibraryModel.staticEntities.shape.rounded` |
| IsLight | input | Boolean | `false` |
| ExtendedClass | input | Text | `""` |
| MaxNumber | input | Integer | `9` |
- Static entities / flags: `uBT_Color.primary`, `shape.rounded`

## `UBTConnect_Utils.CW_Share.ShareSheet.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Out_SearchResultItemList | output | RecordList | `OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.SearchResultList())` |
| Out_SearchResultItemList | output | RecordList | `OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.SearchResultList())` |
| BottomSheetId | local | Text | `""` |
| SearchTerm | local | Text | `""` |
| IsSearching | local | Boolean | `false` |
| IsOpen | local | Boolean | `false` |
| SearchResultItemList | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.SelectableSearchResultListList())` |
| Skeleton_SearchResultItemList | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.SelectableSearchResultListList())` |
| SelectedMembers | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.SelectableSearchResultListList())` |
| IsSubmitting | local | Boolean | `false` |
| SearchPromt | local | Text | `"Search"` |
| HasNativeShare | local | Boolean | `false` |
| ExternalShareOptions | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRe` |
| ShareId | local | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| CurrentExternalShareIdOption | local | Text | `""` |
| SharingRecentMemberId | local | Text | `""` |
| RecentlyShared | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.SelectableSearchResultListList())` |
| RecentlySharedLabel | local | Text | `"Recently Shared"` |
| IsSearchStep | local | Boolean | `false` |
| AvatarImageSize_HorizontalList | local | Text | `UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.small_40` |
| AvatarImageSize_VerticalList | local | Text | `UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.base_52` |
| AvatarSize_HorizontalList | local | Text | `UBTConnect_UtilsModel.staticEntities.uBT_AvatarSize.small_40` |
| In_IsOpen | input | Boolean | `false` |
| In_ShareObjectTypeId | input | Text | `""` |
| In_ShareableObjectId | input | Text | `""` |
| In_IsLegacy | input | Boolean | `false` |
| In_UpdateType | input | Text | `""` |
| In_UpdateDate | input | Date | `OS.DataTypes.DateTime.defaultValue` |
| GetAvailableMembers | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetAvailableMembersDataActRec())` |
| GetRecentlyShared | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetRecentlySharedDataActRec())` |
- Data actions: `DataActionGetAvailableMembers` → `screenservices/UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetAvailableMembers`, `DataActionGetRecentlyShared` → `screenservices/UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetRecentlyShared`
- Server actions: `CS_CreateShareProfileLink` → `screenservices/UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_CreateShareProfileLink`, `CS_ShareObject` → `screenservices/UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_ShareObject`
- Lifecycle handlers: Initialize, ParametersChanged
- Client actions / event handlers: `onAfterFetch_GetAvailableMembers`, `screenEvent_OnParametersChanged`, `handler_SelectedListItemOnClick`, `handler_OnClickExternalOption`, `onAfterFetch_GetRecentlyShared`, `handler_SearchOnFocus`, `action_SetExternalShareOptions`, `handler_OnClickRecentMember`, `action_CreateSkeletonList`, `action_ScrollTop`, `handler_InputEventClearString`, `handler_BottomSheetOnToggle`, `handler_InputEventSubmit`, `action_ResetLocalVariables`, `handler_SearchResultItemOnSelect`, `handler_OnClickSend`, `action_SubmitShare`, `action_ResetAndCloseSheetState`, `screenEvent_OnInitialize`, `handler_OnBack`, `handler_SearchResultItemOnClick`, `handler_BottomSheetInitialized`, `action_SetLocalIsOpen`, `event_ClosedShareSheet`
- JavaScript nodes: `UBTConnect_Utils.CW_Share.ShareSheet.mvc$controller.ScreenEvent_OnParametersChanged.DelaySetIsOpenJS`, `UBTConnect_Utils.CW_Share.ShareSheet.mvc$controller.Handler_OnClickExternalOption.ExternalShareWithDelayJS`, `UBTConnect_Utils.CW_Share.ShareSheet.mvc$controller.Action_ScrollTop.ScrollToTopJS`
- Feedback messages: `(model.variables.in_ShareObjectTypeIdIn + " has been shared."), /*Info*/ 0)` | `"Share failed. Please try again.", /*Error*/ 3)`
- Exceptions handled: NotRegisteredException
- Static entities / flags: `uBT_ImageSize.small_40`, `uBT_ImageSize.base_52`, `uBT_AvatarSize.small_40`, `uBT_Color.neutral2`, `uBT_Size.none`, `uBT_Color.neutral0`, `uBT_Size.base`, `uBT_Size.small`, `uBT_Shape.medium`, `uBT_Color.neutral5`, `uBT_Shape.large`, `shape.rounded`, `uBT_FontSize.doubleExtraSmall`, `uBT_Color.primary`, `uBT_Color.transparent`, `connect_Entity.member`, `uBT_ImageSize.square`, `uBT_AvatarSize.smallBase_48`, `uBT_IconSize.base_24`, `uBT_Display.flex`, `uBT_FlexDirection.column`, `uBT_Icons.removeFill`, `uBT_IconSize.small_12`, `uBT_Icons.search`, `uBT_FontSize.small`, `uBT_Color.neutral7`, `uBT_Icons.lock`, `uBT_Icons.checkboxFill`, `uBT_Icons.checkboxOutlineBlank`, `uBT_ButtonSize.small`
- Candidate static strings: `Action_SetLocalIsOpen`

## `UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| HideLockScreen | local | Boolean | `false` |
| IsNavigateToHomeOnBack | local | Boolean | `false` |
| In_ShowLockScreen | input | Boolean | `false` |
| In_IgnorePolicy | input | Boolean | `false` |
| In_IgnoreLockScreen | input | Boolean | `false` |
- Lifecycle handlers: Initialize
- Client actions / event handlers: `onBackNavigation_RedirectHome`, `action_RedirectHome`, `onPinUnlock_HideLockScreen`, `screenEvent_OnInitialize`, `onBackNavigation_MaybeRedirectHome`, `event_OnScreenLocked`, `event_OnScreenUnlocked`
- Navigation: `/UBTConnect/HomeFeed`()
- JavaScript nodes: `UBTConnect.App_Common.CommonUI_InsideLayout.mvc$controller.ScreenEvent_OnInitialize.IsRestoredFromCacheJS`, `UBTConnect.App_Common.CommonUI_InsideLayout.mvc$controller.OnBackNavigation_MaybeRedirectHome.GetIsInitialLocationJS`, `UBTConnect.App_Common.CommonUI_InsideLayout.mvc$controller.OnBackNavigation_MaybeRedirectHome.JavaScript1JS`
- Client variables: getApp_Policies_HasPolicyToAccept, getIsNavigateToHomeOnBack, setIsNavigateToHomeOnBack
- Candidate static strings: `Action_RedirectHome`

## `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| InstanceToken | local | Text | `""` |
- Lifecycle handlers: Initialize, Destroy
- Client actions / event handlers: `onResume`, `triggerOnSyncComplete`, `onDestroy`, `init`, `syncWrapper`, `triggerOnSyncStart`, `triggerOnSyncError`, `onNetworkStatusChanged`, `onInitialize`, `onSyncError`, `onConfigure`, `onSyncComplete`, `onSync`, `onSyncStart`
- JavaScript nodes: `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnResume.GetSyncOnResumeJS`, `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnDestroy.UnregisterAPIJS`, `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.Init.RegisterAPIJS`, `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.TriggerSyncStartEventJS`, `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.TriggerSyncErrorEventOfflineJS`, `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.SuspendSyncJS`, `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnNetworkStatusChanged.GetSyncOnOnlineJS`, `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnInitialize.InitJS`
- Exceptions handled: SecurityException
- Candidate static strings: `SyncWrapper` | `OnResume` | `TriggerOnSyncStart` | `TriggerOnSyncComplete` | `TriggerOnSyncError` | `Init`

## `OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| IsOnline | local | Boolean | `true` |
| OfflineActionReference | local | Object | `null` |
| OnlineActionReference | local | Object | `null` |
| DeviceReadyActionReference | local | Object | `null` |
- Lifecycle handlers: Ready, Destroy
- Client actions / event handlers: `offline`, `onReady`, `online`, `deviceReady`, `onDestroy`, `init`, `networkStatusChanged`
- JavaScript nodes: `OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.OnReady.InitJS`, `OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.DeviceReady.SetEventListenersJS`, `OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.DeviceReady.SetActionReferencesJS`, `OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.OnDestroy.RemoveEventHandlersJS`, `OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.Init.SaveDeviceReadyCallbackJS`, `OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.Init.RegisterPluginInfoJS`, `OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.Init.SetActionReferencesJS`, `OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.Init.SetEventListenersJS`
- Candidate static strings: `Init` | `Offline` | `Online` | `DeviceReady`

## `UBTConnect.App_PIN.Block_PINUnlock.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| UseOverlay | local | Boolean | `true` |
| IsUnsupportedSystem | local | Boolean | `false` |
| In_ForceVisible | input | Boolean | `false` |
| In_IsCommonBlock | input | Boolean | `false` |
- Lifecycle handlers: Initialize
- Client actions / event handlers: `screenEvent_OnInitialize`, `block_PINUnlock_ContentWrapperNavigateTo_PINRegist`, `unlock`
- Navigation: `/UBTConnect/PINRegister`()
- Static entities / flags: `uBT_Color.neutral0`, `uBT_Size.extraLarge`, `uBT_Size.base`, `uBT_Shape.large`

## `UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_HasOverlay | input | Boolean | `false` |
| In_ExtendedClass | input | Text | `""` |
| In_IsCommonBlock | input | Boolean | `false` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `onReady2`, `onPathCalculated`, `onReady`

## `UBTConnectLibrary.Layouts.SVG_Background_LoginWrapper.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_ExtendedClass | input | Text | `""` |
- Client actions / event handlers: `onPathCalculated`

## `UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Path | local | Text | `""` |
| In_Path | input | Text | `""` |
| In_HeightPercentage | input | Decimal | `OS.BuiltinFunctions.integerToDecimal(100)` |
| In_CurvaturePercentage | input | Decimal | `OS.BuiltinFunctions.integerToDecimal(100)` |
| In_ExtendedClass | input | Text | `""` |
- Lifecycle handlers: Initialize, Ready, ParametersChanged
- Client actions / event handlers: `onInitialize`, `onReady`, `calculatePath`, `onParametersChanged`, `onPathCalculated`

## `OutSystemsUI_2_23.Utilities.InlineSVG.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Internal_Configs | local | Record | `OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.InlineSVG_InternalConfigRec())` |
| SVGCode | input | Text | `""` |
| ExtendedClass | input | Text | `""` |
- Lifecycle handlers: Initialize, Ready, Destroy, ParametersChanged
- Client actions / event handlers: `onInitialize`, `initializedHandler`, `registerCallbacks`, `onDestroy`, `onParametersChanged`, `onReady`, `initialized`
- JavaScript nodes: `OutSystemsUI_2_23.Utilities.InlineSVG.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS`
- Static entities / flags: `logType.general`, `registeredCallbackEvents.initialized`
- Candidate static strings: `InitializedHandler`

## `UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| LocalCacheControlPolicies | local | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.CacheControl_PoliciesBooleanRecord())` |
| ShowFingerprintReader | local | Boolean | `false` |
| UseOverlay | input | Boolean | `true` |
| In_ForceVisible | input | Boolean | `false` |
| UnlockText | input | Text | `"Enter your PIN code"` |
| ShowNeedHelp | input | Boolean | `false` |
| isFromMenu | input | Boolean | `false` |
| ShowForgotPIN | input | Boolean | `false` |
| ShowPolicy | input | Boolean | `false` |
- Lifecycle handlers: Initialize
- Client actions / event handlers: `cacheControl_PoliciesResult`, `event_Pincode_PinUnlockError`, `event_Pincode_PinUnlockSuccess`, `onClick_PrivacyPolicy`, `onClick_TermsAndCondition`, `screenEvent_OnInitialize`, `onClick_ForgotPIN`, `unlock`, `navigateTo_PINRegister`
- Navigation: `/UBTConnect/ContactUsMenu`(); `/UBTConnect/Login`(In_IsFromResetPIN)
- Static entities / flags: `uBT_Color.inherit`, `uBT_FontSize.base`, `uBT_FontWeight.semiBold`, `uBT_Icons2.fingerprint`, `uBT_Icons2.backspace`, `uBT_IconsSize.display_36`, `uBT_Color.neutral0`, `uBT_Color.neutral10`, `uBT_FontSize.small`, `uBT_MessageType.error`
- Client variables: getApp_PIN_BiometricEnabled
- Images: `img/UBTConnect.ConnectLogoWhite.svg`, `img/UBTConnect.ConnectLogo.svg`
- Candidate static strings: `Contact Us`

## `UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_PinLength | input | Integer | `0` |
| In_ExtendedClasses | input | Text | `""` |
| In_IsScanFingerprintOnReady | input | Boolean | `false` |
| In_ForceVisible | input | Boolean | `false` |
| In_AllowBackNavigation | input | Boolean | `false` |
| In_HideFingerprint | input | Boolean | `false` |
- Client actions / event handlers: `timeout`, `pinUnlockSuccess`, `keyPressed`, `pincodeChange`, `pinUnlockError`, `userLoggedOut`

## `UBT_AppManager.PIN.Pincode_Unlock.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| LocalPin | local | Record | `OS.DataTypes.ImmutableBase.getData(new UBT_AppManagerModel.Pin_LocalStorage_ItemRec())` |
| LastForceVisible | local | Boolean | `false` |
| In_PinLength | input | Integer | `0` |
| In_ExtendedClasses | input | Text | `""` |
| In_ForceVisible | input | Boolean | `false` |
| In_AllowBackNavigation | input | Boolean | `false` |
- Lifecycle handlers: Initialize, ParametersChanged
- Client actions / event handlers: `pinCodeKeyPressed`, `action_HandleForceVisible`, `onParametersChanged`, `onSetPin`, `onUnlockSuccess`, `onTimeout`, `onInitialize`, `userLoggedOut`, `timeout`, `pincodeChange`, `pinUnlockError`, `keyPressed`, `pinUnlockSuccess`
- JavaScript nodes: `UBT_AppManager.PIN.Pincode_Unlock.mvc$controller.OnInitialize.GetPinUnlockCallbackJS`
- Exceptions handled: NotRegisteredException
- Static entities / flags: `appManager_JSUtils_ElementCache_Property.obj_PinUnlockCallback`
- Client variables: getPIN_SessionInactivity_Use, getPIN_IsLocked
- Candidate static strings: `OnUnlockSuccess`

## `UBT_AppManager.PIN.InactivityTimer.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| DestroyCallback | local | Object | `null` |
- Lifecycle handlers: Initialize, Destroy
- Client actions / event handlers: `onInitialize`, `onTimeout`, `onDestroy`, `timeout`
- JavaScript nodes: `UBT_AppManager.PIN.InactivityTimer.mvc$controller.OnInitialize.GetTimeoutHandlerJS`, `UBT_AppManager.PIN.InactivityTimer.mvc$controller.OnDestroy.ExecuteDestroyCallbackJS`
- Static entities / flags: `appManager_JSUtils_CustomEvents.pIN_OnTimeout`
- Candidate static strings: `OnTimeout`

## `Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| RESUME_EVENT_NAME | local | Text | `"ResumeNavigationEventName"` |
- Lifecycle handlers: Ready, Destroy
- Client actions / event handlers: `resumeNavigationHandler`, `onDestroy`, `onReady`, `resumeNavigation`
- JavaScript nodes: `Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$controller.ResumeNavigationHandler.GetEventPayloadJS`, `Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$controller.OnDestroy.RemoveListenerForPlayerClosedJS`, `Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$controller.OnReady.ResumeNavigationJS`
- Candidate static strings: `ResumeNavigationHandler`

## `EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc.js`
- Lifecycle handlers: Ready, Destroy
- Client actions / event handlers: `onDestroy`, `handleOpenUrl`, `onReady`, `onDeeplinkOpen`
- JavaScript nodes: `EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc$controller.OnDestroy.UnregisterPluginJS`, `EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc$controller.OnReady.RegisterPluginJS`
- Candidate static strings: `HandleOpenUrl`

## `Connect2_LegacyShared.Utility.HandleImageLoadError.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| DestroyCallback | local | Object | `null` |
- Lifecycle handlers: Ready, Destroy
- Client actions / event handlers: `applicationEvent_ImageError`, `onReady`, `onDestroy`
- JavaScript nodes: `Connect2_LegacyShared.Utility.HandleImageLoadError.mvc$controller.OnReady.Error_EventListenerJS`, `Connect2_LegacyShared.Utility.HandleImageLoadError.mvc$controller.OnDestroy.ExecuteDestroyCallbackJS`
- Static entities / flags: `applicationEvents_Directory.errorFromPhotoView`
- Images: `img/Connect2_LegacyShared.User_rectangle.png`
- Candidate static strings: `ApplicationEvent_ImageError`

# Part 2: sources of blocks NOT rendered in the captured states

These come from referenced blocks or from earlier captures. Use them to describe other states/branches (empty, error, alternative versions), marking them as not visually captured.


## Captured calls
- 1. `ActionAppManager_SynchAppContext` (200) at 4649 ms
- 2. `DataActionGetAllBookmarksByGroup` (200) at 5938 ms
- 3. `ActionAppManager_AfterInitialize` (200) at 7494 ms
- 4. `ActionSync_Info_GetMain` (200) at 8282 ms
- 5. `ActionGetUserInformation` (200) at 8715 ms
- 6. `ActionGetNumberUnreadMessages` (200) at 8983 ms
- 7. `ServiceAPIFetchData_CacheableMapEntities` (200) at 9836 ms
- 8. `ServiceAPIFetchData_CacheableHouseholds` (200) at 9986 ms

## Not yet captured (see coverage.md)
- `App_Common.UnsupportedVersion_Wrapper`
- `App_Policies.Policy_Checker`
- `BasePatterns.Columns_Two`
- `BasePatterns.CustomContainer`
- `CW_Common.Button`
- `CW_Image.UBT_LazyImage`
- `CW_Search.SearchResult_Item`
- `CW_Share.ShareSheet_Section`
- `CW_Share.ShareSheet_SectionTitle`
- `CW_Share.ShareableObject_Generic`
- `CacheControl.CacheControl_Policies`
- `ConnectPatterns.BottomSheet`
- `ConnectPatterns.CircleButton_WithLabel`
- `ConnectPatterns.EmptyList`
- `ConnectPatterns.HighlightSearch`
- `ConnectPatterns.IconSVG`
- `ConnectPatterns.Input`
- `Fingerprint.FingerprintScanner`
- `MyBookmarksFlow.BookmarkNote`
- `MyBookmarksFlow.NoBookmarks`
- `NavigationHandler.PreventBackNavigation`
- `PIN.PinCode`
- `Private.PullToRefresh`
- `Reusable.InputCounter`
- `Reusable.MessageList_NoResults`
- `Reusable.Spinner`
- `Utility.Result_Item_Badge`

