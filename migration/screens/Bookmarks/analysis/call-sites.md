# Call sites: Bookmarks

For every service call: the chains of code that lead to it, from a root (user event, lifecycle handler, fetch at start, block event) down to the call. Built from compiled code only; conditions along a chain are not shown, read them in the files named.

## Observed in the capture (this screen)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (5 chain(s) starting in blocks of other screens omitted)

### `UBTConnect/Bookmarks/Bookmarks/DataActionGetBookmarks`
- `Bookmarks_Card_List.bookmarksCardList_OnScrollEnding` → `event onLoadMore of Bookmarks_Card_List` → `Bookmarks.bookmarks_Card_ListOnLoadMore` → `Bookmarks.refresh_GetBookmarksData` → `Bookmarks.DataActionGetBookmarks`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `event event_OnClick of Button` → `FilterSheet.onClick_ClearFilters` → `FilterSheet.onClick_Apply` → `event applyFilters of FilterSheet` → `Bookmarks_FilterSheet.handler_FilterSheetApplyFilters` → `event applyFilters of Bookmarks_FilterSheet` → `Bookmarks.handler_ApplyFilters` → `Bookmarks.refresh_GetBookmarksData` → `Bookmarks.DataActionGetBookmarks`
- `onClick in Button` → `event event_OnClick of Button` → `FilterSheet.onClick_Apply` → `event applyFilters of FilterSheet` → `Bookmarks_FilterSheet.handler_FilterSheetApplyFilters` → `event applyFilters of Bookmarks_FilterSheet` → `Bookmarks.handler_ApplyFilters` → `Bookmarks.refresh_GetBookmarksData` → `Bookmarks.DataActionGetBookmarks`
- `event clicked of IconText` → `event onClickUnbookmark of ItemCard_ActionBar` → `ItemCardActions.handler_OnClickUnmark` → `event event_ItemUnbookmarked of ItemCardActions` → `event item_Unbookmarked of Bookmarks_Card_Item` → `event item_Unbookmarked of Bookmarks_Card_List` → `Bookmarks.handler_ItemUnbookmarked` → `Bookmarks.refresh_GetBookmarksData` → `Bookmarks.DataActionGetBookmarks`
- `onClick in CustomContainer` → `event clicked of CustomContainer` → `TagToggle.customContainerClicked` → `event event_Click of TagToggle` → `Horizontal_Filter_TagList.tagToggleToggle` → `event changed of Horizontal_Filter_TagList` → `Bookmarks.handler_OnClickPill` → `Bookmarks.refresh_GetBookmarksData` → `Bookmarks.DataActionGetBookmarks`
- `onClick in Icon` → `event click of Icon` → `Input.onClick_ClearString` → `event event_ClearString of Input` → `Bookmarks.handler_SearchOnClear` → `Bookmarks.refresh_GetBookmarksData` → `Bookmarks.DataActionGetBookmarks`

### `UBT_AppManager/ActionAppManager_AfterInitialize`
- `UBT_AppManager.appManager_OnAppReady_Web` → `UBT_AppManager.appManager_InitializeWebComponents` → `UBT_AppManager.appManager_AfterInitialize` → `server AppManager_AfterInitialize`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.onApplicationReady` → `UBT_AppManager_Mobile.appManager_Mobile_OnAppReady` → `UBT_AppManager.appManager_InitializeWebComponents` → `UBT_AppManager.appManager_AfterInitialize` → `server AppManager_AfterInitialize`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ActionSync_Info_GetMain`
- `UBTConnect.onApplicationReady` → `UBTConnect.connect_SetLoggedContext` → `UBTConnect.sync_Info_Main` → `server Sync_Info_GetMain`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.onApplicationReady` → `UBTConnect.sync_Info_Main` → `server Sync_Info_GetMain`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect_Utils/ActionGetUserInformation`
- `UBTConnect_Utils.cache_UserInfo_GetCallback` → `server GetUserInformation`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `Connect2_LegacyShared/ActionGetNumberUnreadMessages`
- `UBTConnect.onApplicationReady` → `UBTConnect.connect_SetLoggedContext` → `Connect2_LegacyShared.synchronizeNumberUnreadMessages` → `server GetNumberUnreadMessages`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.fCM_NotificationCallback` → `Connect2_LegacyShared.synchronizeNumberUnreadMessages` → `server GetNumberUnreadMessages`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ServiceAPIFetchData_CacheableMapEntities`
- `UBTConnect.get_Cacheable_MapEntities` → `server FetchData_CacheableMapEntities`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ServiceAPIFetchData_CacheableHouseholds`
- `UBTConnect.get_Cacheable_MapHouseholds` → `server FetchData_CacheableHouseholds`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

## Declared and reachable from the rendered blocks, not observed

### `UBTConnect_Utils/CW_Notes/NotesSheet/ServiceAPIAddNote`
- `NotesSheet.handler_OnSubmitNote` → `server AddNote`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ServiceAPIAddBookmark2`
- `onClick in IconText` → `event clicked of IconText` → `event onClickUnbookmark of ItemCard_ActionBar` → `ItemCardActions.handler_OnClickUnmark` → `UBTConnect.toggleBookmarkItem_C2` → `server AddBookmark2`

### `UBTConnect/ServiceAPIDeleteBookmarkByBookmarkId2`
- `onClick in IconText` → `event clicked of IconText` → `event onClickUnbookmark of ItemCard_ActionBar` → `ItemCardActions.handler_OnClickUnmark` → `UBTConnect.toggleBookmarkItem_C2` → `server DeleteBookmarkByBookmarkId2`

### `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All`
- `BottomBarMenu.OnReady` → `BottomBarMenu.onReady` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

