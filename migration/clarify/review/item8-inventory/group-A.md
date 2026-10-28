# W23 inventory, group A (13 hooks)

Rules R1 to R5 are from `migration/clarify/review/item8-w23-errorpage.md` §1. TST dumps are in
`/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/c658e23d-06e2-4426-a111-9e9cbc2d7280/scratchpad/w23A/`
(file name + line). React paths are under `app/src/pages/`.

Sources:
- Live survey dumps (`tst_source.py show`): MessageDetail.js, MessageDetailScreen.js, ShareObjectDetail.js, MessageList.js,
  Search.js, Notifications.js, Notes.js, UpdatesSingleList.js, FeedBlockUpdates.js, ProfileList.js, ShareObject.js, ConnectShare.js.
- `ScreenBlock_MyBookmarks` and `ScreenBlock_BookmarkGroup` are NOT in the live survey (`tst_source.py list` finds only the
  module controller). Their compiled TST code is the earlier static fetch in
  `migration/screens/MyBookmarks/analysis/sources/raw/` and `migration/screens/BookmarksByGroup/analysis/sources/raw/`
  (copied to MyBookmarks.js and BookmarkGroup.js; the parents are `UBTConnect.Legacy_MyBookmarks.MyBookmarks.mvc.js` and
  `UBTConnect.Legacy_MyBookmarks.BookmarksByGroup.mvc.js` in the same folders). Version differences from the live TST are not checked.
- Extra runtime facts found (OutSystems.js, `migration/runtime-sources/`):
  - `executeClientAggregate` (aggregate inside an action: local entities) has no disposal check. It runs and the flow goes on.
    Only `executeScreenClientAggregate` (screen aggregate refresh) is R1.
  - Event triggers of a block (`Controller.prototype.navigateTo_X$Action = Promise.resolve()`) do nothing. The real handler is
    a `Handler_*` / `OnHandle_*` action of the parent screen, and each of these starts with `ensureControllerAlive` (R3).
  - Module client actions (`UBTConnect_UtilsController`, `Connect2_LegacySharedController`, `NavigationHandlerController`,
    `Connect2_MyBookmarks_MUIController`, `UBTConnectController`) have a no-op `ensureControllerAlive`: they run after leaving.
- Note on React `dispatch` from `useFlowState` (`platform/navigation/flowState.ts:82-87`): it is not guarded. After an unmount it
  still updates `latest` and calls `setSaved` (the view cache). The hooks that call `dispatch` directly after an await
  (useMessageList, useSearch, useUpdatesSingleList, useProfileList effect) therefore also write the view cache after the unmount.
  This is a state write, not counted below; in TST R1 drops the answer, so the cached state is not changed.

Verdict key: same / react-extra / react-missing / unclear. "Row" = one side effect (or one group of the same kind).

### pages/MessageDetail/hooks/useMessageDetail.ts
Origin: `Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail` (MessageDetail.js; screen handlers in MessageDetailScreen.js).

| Flow | Awaited call (TST kind, evidence) | Side effect after await | React (guarded?) file:line | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady | `fetchMessageInstance`: R1, DataActionGetMessageInstance MessageDetail.js:848-863 (OnAfterFetch called only in its `.then`) | toast "no access" (private message of another user) | useMessageDetail.ts:229 (no) | OnAfterFetch (MessageDetail.js:921 and on) never starts | react-extra |
| OnReady | same | leaveToMessageList: toast + `replaceOnUpcomingNavigation` (global flag) + event NavigateTo_MessageList | :234, :237 via :162-166 (no) | nothing (R1) | react-extra |
| OnReady | same | event NavigateTo_Login | :240 (no) | nothing (R1) | react-extra |
| OnReady | same | counters: decrementReadWhatsNewsCounter / decrementReadMessagesCounter | :178-179 (no) | nothing (R1); in OnAfterFetch MessageDetail.js:~1040 | react-extra |
| OnReady | same | server write: markNotificationOpened (Wrapper_NotificationOpened) | :180 (no) | nothing (R1); call is at MessageDetail.js:~1050 inside OnAfterFetch | react-extra |
| OnReady | same | server/cache reads: cache_SignedImageURL_Get, fetchMessageTemplateParameters, getUserInformation, (buildAssemble is pure) | :188, :195, :199 (no) | nothing (R1) | react-extra |
| prepareMessage | `markNotificationOpened`: R2, callServerAction MessageDetail.js:688; used at ~1050 | retracted: leaveToMessageList (toast + replaceOnUpcomingNavigation + event) | :182 (no) | `_messageRetractedFlow$Action` has `ensureControllerAlive` (MessageDetail.js:1388) -> R3, flow stops, no toast, no event | react-extra |
| prepareMessage | `cache_SignedImageURL_Get`: module action (UBTConnect_UtilsController, MessageDetail.js:~1075), no check | next call: fetchMessageTemplateParameters (read) | :195 (no) | aggregate refresh is sent (MessageDetail.js:~1099, `$AggrRefresh` :810-830 has no alive check) | same |
| prepareMessage | `cache_SignedImageURL_Get` (module action) | (the call itself runs after the first await) | :188 (no) | runs (module action) | same |
| prepareMessage | `fetchMessageTemplateParameters`: R1, callAggregateWithStartIndexAndClientVars MessageDetail.js:820 (the rest is chained on it) | getUserInformation (Cache_UserInfo_Get, cache or server read) | :199 (no) | nothing after R1 | react-extra |
| prepareMessage | `getUserInformation` on a restored view (no aggregate): module action cache_UserInfo_Get, MessageDetail.js:~1128 | none after (state only) | :199 | runs (module action) | same |
| onClickViewOrbitEvent | `getOrbitNotificationParameters`: R2, callServerAction MessageDetail.js:759 | event NavigateTo_OrbitMilestone / NavigateTo_OrbitEvent | :275, :282 (no) | block trigger is a no-op; screen handler `Handler_NavigateTo_OrbitMilestone` starts with `ensureControllerAlive` (MessageDetailScreen.js:769) -> R3. Also OrbitEventDetails :638 | react-extra |
| onClickViewOrbitEvent | `getUserInformation` (module action cache_UserInfo_Get, MessageDetail.js:~1275) | (call before the event above) | :281 (no) | runs | same |
| onClickViewOrbitEvent | `getOrbitHostSurveyNotificationParameters`: R2, MessageDetail.js:710 | event NavigateTo_OrbitHostSurvey | :296 (no) | `Handler_NavigateTo_OrbitHostSurvey` alive check MessageDetailScreen.js:827 -> R3 | react-extra |
| adaptiveCardViewerOnExecuteAction | `storeAdaptiveCardResponses` R2 (MessageDetail.js:803), then `fetchMessageInstance` R1 (refresh at ~1655, DataActionGetMessageInstance :848) | "Thanks for filling out our form!" toast, and all OnAfterFetch effects (rows 1 to 6 above) | :362-364 (no) | after R1 nothing: no OnAfterFetch, no toast (MessageDetail.js:1666 is after the refresh) | react-extra |
| adaptiveCardViewerOnExecuteAction | same, catch CommunicationException from the fetch (R1) | toast "Please check your internet connection!" | :366-368 (no) | R1 never rejects: no catch | react-extra |
| adaptiveCardViewerOnExecuteAction | catch CommunicationException from `storeAdaptiveCardResponses` (R2) | same toast | :366-368 (no) | server action failure runs the catch; toast shows (R5, MessageDetail.js:1685) | same |

Other flows: onClickViewAssembleEvent no await; the `send_email` / `view_event` branches await only the event call itself
(no side effect after). Rows: 17.

### pages/MessageDetail/hooks/useShareObjectDetail.ts
Origin: `Connect2_LegacyShared.Share_UI.ShareObjectDetail_ExtendedShare` (ShareObjectDetail.js).

| Flow | Awaited call | Side effect after await | React (guarded?) | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady / OnParametersChanged (refreshGetShare) | `fetchSharedObjectDetail`: R1, DataActionGetShare ShareObjectDetail.js:456-464 (GetShareOnAfterFetch only in `.then`) | `auditShareViewEvent(ShareId, ...)`: server call, audit write | useShareObjectDetail.ts:72 (no; `isAlive()` check is at :73, after the call) | GetShareOnAfterFetch (:597, AuditShareViewEvent :613) never starts | react-extra |

onClickShareDetail: no await. Rows: 1.

### pages/MessageList/hooks/useMessageList.ts
Origin: `Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList` (MessageList.js; parent screen `UBTConnect.Legacy_MyNotificationsFlow.MessageList.mvc.js`).

| Flow | Awaited call | Side effect after await | React (guarded?) file:line | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady, PullToRefresh, RefreshMessages, filters, search, scroll (refreshGetMessages) | `getMessages.refetch`: R1, DataActionGetMessages MessageList.js:1268-1277 | setUnreadNotificationsNumber (global counter) | useMessageList.ts:114 via :117-121 (no) | OnAfterFetch_GetMessages (:2761, SetUnreadNotificationsNumber :~2770) never starts | react-extra |
| same | same | raiseToFlowHandler(result.error) | :124 (no) | R1 never rejects: no handler | react-extra |
| refreshMessages | same | scrollContentToTop (DOM `.content` scroll) | :132 (no) | RefreshMessages ScrollToTop JS (MessageList.js:~1675) is after the R1 answer: not run | react-extra |
| OnParametersChanged | `pullToRefresh` -> R1 (RefreshMessages :1661, GetMessages) | event PullToRefreshTriggered | :155 (no) | OnParametersChanged (:1763-1776) waits for PullToRefresh -> R1 -> event never triggered | react-extra |
| onClickGoToMessageDetail | `fetchMessageInstanceExists`: R1, DataActionGetMessageInstanceById2 MessageList.js:1296 | event NavigateTo_MessageDetail | :238 (no) | nothing (R1) | react-extra |
| onClickGoToMessageDetail | same | info toast "no longer available" | :241 (no) | nothing (R1) | react-extra |
| onClickGoToMessageDetail | same | refresh GetMessages (server read) | :242 (no) | nothing (R1) | react-extra |
| onClickGoToMessageDetail | same | raiseToFlowHandler on failure | :234 (no) | nothing (R1) | react-extra |
| onClickMarkAllAsRead | `markAllNotificationsAsRead`: R2, Wrapper_MarkAllAsReadNotifications MessageList.js:1169, flow :2092-2100 | refreshMessages (server read + counter, rows above) | :252 (no) | `_refreshMessages$Action` alive check (:1661) -> R3, stops | react-extra |
| onClickMarkAllAsRead | same | synchronizeNumberUnreadMessages (module sync call) | :253 (no) | never reached (R3 before it, :2106) | react-extra |
| onClickMarkAllAsRead | same | raiseToFlowHandler on failure | :256 (no) | R2 failure reaches the screen handler | same |
| swipeEventsRead | `markMessageAsRead`: R2, MessageList.js:1195, flow :2300 | decrementReadMessagesCounter (via updateMessageRead) | :264 (no) | `_updateMessageRead$Action` alive check (:1952; the decrement is inside it) -> R3 | react-extra |
| swipeEventsRead | same | raiseToFlowHandler on failure | :274 (no) | R2 failure reaches the handler | same |
| swipeEventsClear | `markMessageAsClear`: R2, MessageList.js:1221, flow :2620 | decrementReadMessagesCounter if not read | :285 (no) | `_updateMessageClear$Action` alive check (:1910; decrement inside) -> R3 | react-extra |
| swipeEventsClear | same | raiseToFlowHandler on failure | :287 (no) | R2 failure reaches the handler | same |

Other flows (applyFilters, resetFilters, searchHistory, searchClear, closeSearch, scrollEnding): the awaited call is
`refreshMessages`; after it only state writes or toggles. Effects are the three rows of the first group above. Rows: 15.

### pages/Search/hooks/useSearch.ts
Origin: `UBTConnect.Directory_Search.ScreenBlock_Search` (Search.js). Local-entity aggregates inside actions use
`executeClientAggregate` (no disposal check); screen aggregates use `executeScreenClientAggregate` (R1).

| Flow | Awaited call | Side effect after await | React (guarded?) file:line | TST after leaving | Verdict |
|---|---|---|---|---|---|
| refreshSearch | `saveRecentSearchTerm`: local entities (executeClientAggregate Search.js:2552 + createOrUpdate), no check | clearResults: local recents reads (refreshRecent) | useSearch.ts:233 (no; state writes only) | next step `_action_ClearResults$Action` alive check (Search.js:2754) -> R3, flow stops | react-extra (low: local reads, state only) |
| refreshSearch | same | fetchSearchResults (server read) | :237 (no) | FetchSearchResults (:2192-2202) never called (R3 before it) | react-extra |
| refreshSearch | `fetchSearchResults`: R1, DataActionFetchSearchResults Search.js:2202; OnAfterFetch_FetchSearchResults :4004 | raiseToFlowHandler in the catch (4 branches) | :248, :252, :256, :258 (no; `fetchSeq` is not a liveness guard) | R1 never rejects: catch at Search.js:~2680 never runs | react-extra |
| refreshSearch | same | clearResults in the catch (local reads, state) | :250, :254 (no) | not run (R1) | react-extra (low) |
| onTagListChanged | `get_RecentClickedResults`: local read; TST screen aggregate Get_RecentClickedResults$AggrRefresh Search.js:1856/2016 (executeScreenClientAggregate: R1) | refreshSearch (local term write + server read) | :319 (no) | Event_HorizontalTagListChanged (:4037-4075) continues only after the aggregate: never | react-extra |
| itemClick | `saveRecentClickedResult`: local entities, no check (Search.js:2803-3100) | event Event_SearchResultClick | :332 (no) | block trigger no-op; parent handler `Event_SearchResultClick` has `ensureControllerAlive` (UBTConnect.Map.Map.mvc.js:4908) -> R3 | react-extra |
| itemClick | same | navigate Locality_Details | :336 (no) | Destination Search.js:3124 -> R4 blocked | react-extra |
| itemClick | `getAllSearchRecentClickedResultsByUserId` (local, executeClientAggregate :3229) | setPreloadObject (global store) | :356 (no) | module NavigationHandler action runs (Search.js:~3298) | same |
| itemClick | same | navigate HouseholdCarousel / HouseholdDetails | :357, :359 (no) | Destination Search.js:3302/3308 -> R4 blocked | react-extra |
| onRecentSearchTermRemove | `deleteConnectSearch_RecentSearchTerm` (local) | get_RecentSearchTerms (local read) -> state | :294-296 (no) | delete runs, then Get_RecentSearchTerms refresh is issued (Search.js:3913-3935), answer dropped | same |
| onRecentSearchRemoveAll | `removeAllRecentSearch` (local) | refreshRecent (local reads) -> state | :301-303 (no) | same shape (Search.js:3497-3600) | same |

OnReady effect (:164-172) is guarded; the birthday options query is a read with no after-effect. Rows: 11.

### pages/Notifications/hooks/useNotifications.ts
Origin: `UBTConnect.App_Notifications.Notifications` (Notifications.js). Own `unmounted` guard covers `dispatch` (:68-83).

| Flow | Awaited call | Side effect after await | React (guarded?) file:line | TST after leaving | Verdict |
|---|---|---|---|---|---|
| refreshNotifications (OnReady, filters, search) | `fetchNotifications`: R1, DataActionFetchNotifications Notifications.js:1363; OnAfterFetch :2511 | directory_Updates_RefreshBottomBarCount(true): server read + global counter | useNotifications.ts:110 (no) | OnAfterFetch_FetchNotifications (:2511-2548, RefreshBottomBarCount at the end) never starts | react-extra |
| same | same (and any failure of the fetch) | raiseToFlowHandler (`.catch`) / bubbleGenericException | :112, :137, :148 (no) | R1 never rejects | react-extra |
| onReady | `fetchNotificationDateRanges`: R1, DataActionGetDateRanges Notifications.js:1335; OnAfterFetch_GetDateRanges :2254 | refreshNotifications (fetchNotifications server read) | :127 (no) | OnAfterFetch never starts; RefreshNotifications is also own action with alive check (:2316) | react-extra |

Rows: 3.

### pages/Notes/hooks/useNotes.ts
Origin: `UBTConnect.Notes.Notes` (Notes.js). Own `mounted` guard on `set` (:107-110).

| Flow | Awaited call | Side effect after await | React (guarded?) file:line | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady effect | `resetPillsValues` -> GetNotes_Pills: module action (local aggregate + server action Get_NotePills), no check (Notes.js:1277-1290) | refreshGetNotes: fetchNoteCards (server read) | useNotes.ts:160 (no) | `Refresh_GetNotes` own action with alive check (Notes.js:1076) -> R3, ScreenEvent_Ready (:1399) stops | react-extra |
| refreshGetNotes (ready, search, pills, filters, load more) | `fetchNoteCards`: R1, DataActionGetNotes Notes.js:676-684; GetNotesOnAfterFetch :819 | resetPillsValues (local read + server read) on the first page | :135 (no) | GetNotesOnAfterFetch never starts | react-extra |
| same | same (and failure) | raiseToFlowHandler (`run`, `onLoadMore`) | :113, :206 (no) | R1 never rejects | react-extra |

onInitialize: after the local read only a state write; OnReady is not started when the screen left during it (:156), as in TST (the view is not rendered). Rows: 3.

### pages/Updates_SingleList/hooks/useUpdatesSingleList.ts
Origin: `UBTConnect.Directory_Updates.Updates_SingleList` (UpdatesSingleList.js). `set` = `dispatch` (not guarded).

| Flow | Awaited call | Side effect after await | React (guarded?) file:line | TST after leaving | Verdict |
|---|---|---|---|---|---|
| onReady | `fetchUpdateDateRangeIds`: R1, DataActionGetDateRanges UpdatesSingleList.js:1319; OnAfterFetch_GetDateRanges :2839 | refreshUpdates (fetchUpdatesList server read) | useUpdatesSingleList.ts:218 (no) | OnAfterFetch never starts | react-extra |
| onReady | same (and failure) | throw to flow handler | :210, :220-222 (no) | R1 never rejects | react-extra |
| refreshUpdates (ready, reload, markAll) | `fetchUpdatesList`: R1, DataActionFetchUpdates :1291; OnAfterFetch_FetchUpdates :2647 | directory_Updates_RefreshBottomBarCount(true) | :177 (no) | never starts (RefreshBottomBarCount at the end of :2647 body) | react-extra |
| same | same (and failure) | throw to flow handler (`catch`, `.catch(raiseToFlowHandler)`) | :165, :179-181, :231 (no) | R1 never rejects | react-extra |
| handlerMarkAsRead | `markUpdateItemAsRead`: R2, Action_UI_UpdateItem_MarkAsRead UpdatesSingleList.js:2182 | directory_Updates_RefreshBottomBarCount(true) | :287 (no) | `_refreshUpdatesAndFlags$Action` alive check (:1647) -> R3 stops before the bar count | react-extra |
| handlerMarkAsRead | same | raise on failure | :368 (no) | R2 failure reaches the handler | same |
| handlerMarkAsUnread | `markUpdateItemAsUnread`: R2, :3068 | directory_Updates_RefreshBottomBarCount(true) | :294 (no) | `_refreshUpdatesAndFlags` alive check (:1647) -> R3 | react-extra |
| handlerMarkAsUnread | same | raise on failure | :371 (no) | R2 failure reaches the handler | same |
| handlerMarkAllAsRead | `markAllUpdateItemsAsRead`: R2, :2992 | directory_Updates_RefreshBottomBarCount(true) | :307 (no) | `_setBadgeCountsToZero` alive check (:2127) -> R3 stops first | react-extra |
| handlerMarkAllAsRead | same | refreshUpdates (server read + rows above) | :308 (no) | not reached (R3) | react-extra |
| onClickUpdateItem | `handlerMarkAsRead` (R2 inside; TST Handler_MarkAsRead :2169) | captureScrollPosition (localStorage write) | :321 (no) | the R3 stop in `_refreshUpdatesAndFlags` ends Handler_OnClickUpdateItem (:1805) too | react-extra |
| onClickUpdateItem | same | rememberFocusedScrollAnchor (global store) | :322 (no) | same | react-extra |
| onClickUpdateItem | same | setPreloadObject (global store) | :335 (no) | same | react-extra |
| onClickUpdateItem | same | navigate HouseholdCarousel | :336 (no) | same (and Destination :1876 is R4) | react-extra |

Rows: 14.

### pages/HomeFeed/hooks/useFeedUpdates.ts
Origin: `UBTConnect.Home.FeedBlock_Updates` (FeedBlockUpdates.js).

| Flow | Awaited call | Side effect after await | React (guarded?) file:line | TST after leaving | Verdict |
|---|---|---|---|---|---|
| itemClick | `markUpdateItemAsRead`: R2, Action_UI_UpdateItem_MarkAsRead FeedBlockUpdates.js:665 (flow :646) | setPreloadObject (global store) | useFeedUpdates.ts:100 (no) | module NavigationHandler action runs (FeedBlockUpdates.js:~700) | same |
| itemClick | same | navigate HouseholdCarousel | :101 (no) (file comment :13-14 says it runs on purpose) | Destination :703 -> R4 blocked | react-extra |
| onMarkAsRead | `markUpdateItemAsRead` R2 (:813) | directory_Updates_RefreshBottomBarCount(true) | not called in React (:118-122: only `setRead`) | runs after the server action (Event_MarkAsRead :801-820, module action) | react-missing (also while alive) |
| onMarkAsUnread | `markUpdateItemAsUnread` R2 (:763) | same call | not called (:123-127) | runs (Event_MarkAsUnread :751-770) | react-missing (also while alive) |

`showUpgradePopUp` awaits have nothing after. `onEventNoUpdates` is an effect on the query data: it does not run after unmount;
TST does not run FetchUpdatesOnAfterFetch (R1): same, not counted. Rows: 4.

### pages/MyBookmarks/hooks/useMyBookmarks.ts
Origin: `Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks` (MyBookmarks.js, earlier static fetch). Parent handlers in `Legacy_MyBookmarks.MyBookmarks.mvc.js`.

| Flow | Awaited call | Side effect after await | React (guarded?) file:line | TST after leaving | Verdict |
|---|---|---|---|---|---|
| refreshBookmarkData (OnReady, tryAgain) | `fetchBookmarkGroupSummaries`: R1, DataActionGetGroupSummaries MyBookmarks.js:685; OnAfterFetch :713 | error toast (communication or user exception) | useMyBookmarks.ts:133, :148 (no) | R1 never rejects: catch (MyBookmarks.js:~850-925) never runs | react-extra |
| same | same | throw NotRegistered / UserException1 / system error to flow handler | :141, :145, :151 (no) | same | react-extra |
| navigateToBookmarkedItem | `fetchBookmarkById`: module client action GetBookmarkById (MyBookmarks.js:~993; MUI controller server action :201), no check | toast "That bookmark isn't available" | :171 (no) | shows (R5, MyBookmarks.js:1132) | same |
| navigateToBookmarkedItem | same | refreshGetGroupSummaries call (server read) | :172 (writes guarded) | Refresh GetGroupSummaries is issued (MyBookmarks.js:1134), answer dropped (R1) | same |
| navigateToBookmarkedItem | `refreshGetGroupSummaries` (R1) | raiseToFlowHandler on its failure | :215 `.catch` (no) | R1 never rejects | react-extra |
| navigateToBookmarkedItem | `fetchBookmarkById` | hidden-record toast (module SendBookmarkedHiddenFeedbackMessage) | :177 (no) | runs (module action, MyBookmarks.js:1029) | same |
| navigateToBookmarkedItem | same | upgrade pop-up | :181 (no) | runs (module action, MyBookmarks.js:1119-1121) | same |
| navigateToBookmarkedItem | same | setPreloadObject (global store) | :186, :199 (no) | runs (module action, MyBookmarks.js:1053, :1096) | same |
| navigateToBookmarkedItem | same | events NavigateTo_Households / Locality / Subdivision / CommunityBusinessCarousel | :187, :195, :197, :203 (no) | parent handlers `OnHandle_NavigateTo_*` alive check (Legacy_MyBookmarks.MyBookmarks.mvc.js:288, 391, 428, 465, 530) -> R3 | react-extra |

Rows: 9. Failure of `fetchBookmarkById` (module action -> server action) reaches the handler in both: same, not counted.

### pages/BookmarksByGroup/hooks/useBookmarkGroup.ts
Origin: `Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup` (BookmarkGroup.js, earlier static fetch; parent `Legacy_MyBookmarks.BookmarksByGroup.mvc.js`).

| Flow | Awaited call | Side effect after await | React (guarded?) file:line | TST after leaving | Verdict |
|---|---|---|---|---|---|
| fetchBookmarks (ready, not-found refresh) | `fetchBookmarkGroup`: R1, DataActionGetAllBookmarksByGroup BookmarkGroup.js:1917; OnAfterFetch :2165 | putCachedBookmarkedItems (MyBookmarks cache write, global) | useBookmarkGroup.ts:169 (no) | PutCachedMyBookmarks is in OnAfterFetch (:2165-2190): never runs | react-extra |
| refreshBookmarkData | same | setScrollToTop (DOM `.content`) | :178 (no) | SetScrollToTop JS after the R1 answer (:~1952-1960): not run | react-extra |
| refreshBookmarkData | same (failure) | error toast | :182 (no) | catch (BookmarkGroup.js:~1985-1992) never runs (R1) | react-extra |
| refreshBookmarkData | same (failure) | throw system error to flow handler | :180 (no) | R1 never rejects | react-extra |
| onBookmarkToggle | `deleteBookmark`: R2, DeleteBookmarkByBookmarkId BookmarkGroup.js:3168 (flow :3153) | toast "Removed from your Bookmarks" (module action) | :215 (no) | runs (module, :~3178) | same |
| onBookmarkToggle | same | legacyDelete_LocalBookmarkByBookmarkId (local delete, module) | :216 (no) | runs (module, :~3184) | same |
| onBookmarkToggle | same | putCachedBookmarkedItems | :217 (no) | runs (module PutCachedMyBookmarks) | same |
| onBookmarkToggle | same (failed) | toast "could not be removed" | :219 (no) | shows (R5, :3194) | same |
| onSaveBookmarkNote | `updateBookmarkNote`: R2, New_UpdateBookmarkNote BookmarkGroup.js:3250 | error toast on `!success` | :264 (no) | shows (R5, :3257) | same |
| onSaveBookmarkNote | same | raiseToFlowHandler on failure | :266 (no) | R2 failure reaches the handler | same |
| onClickBookmarkedItem | `fetchBookmarkById`: module action GetBookmarkById, no check (BookmarkGroup.js:2752-2915) | toast "That bookmark isn't available" | :279 (no) | shows (R5, :2855) | same |
| onClickBookmarkedItem | same | hidden-record message (module) | :285 (no) | runs (module) | same |
| onClickBookmarkedItem | same | upgrade pop-up | :289 (no) | runs (module, App_Subscription_ShowUpgradePopUp) | same |
| onClickBookmarkedItem | same | putCachedBookmarkedItems | :293 (no) | runs (module PutCachedMyBookmarks) | same |
| onClickBookmarkedItem | same | setPreloadObject (global store) | :297, :313 (no) | inside own actions `NavigateTo_HouseholdsCarousel` (:2025) and `NavigateTo_CommunityBusinessDetail` (:2544), both start with an alive check -> R3 | react-extra |
| onClickBookmarkedItem | same | events NavigateTo_HouseholdCarousel / CommunityBusinessCarousel / Locality / Subdivision | :306, :327, :330, :332 (no) | own actions `NavigateTo_*` alive check (:2025, :2494, :2544, :2982) -> R3 | react-extra |

onShareItem: the awaited `upgradeSubscription` (audit before the await, then the confirm dialog) has nothing after it.
The not-found refresh `fetchBookmarks` in onClickBookmarkedItem reuses rows 1 to 4. Rows: 16.

### pages/LegacyShareObject/hooks/useProfileList.ts
Origin: `Connect2_LegacyShared.Share_UI.ProfileList` (ProfileList.js).

| Flow | Awaited call | Side effect after await | React (guarded?) file:line | TST after leaving | Verdict |
|---|---|---|---|---|---|
| deferredHandleShareObjectList | `shareObject`: R2, ShareObject$ServerAction ProfileList.js:797 (flow :773; a write) | toast with the refusal message | useProfileList.ts:163 (no) | shows (R5, ProfileList.js:816) | same |
| deferredHandleShareObjectList | same | event SubscriptionDenied (upgrade pop-up) | :166 (no) | block trigger no-op; parent screen handler `Handler_ShareObject_SubscriptionDenied` alive check (UBTConnect.Legacy_Share.LegacyShareObject.mvc.js:307) -> R3 (the pop-up call is inside) | react-extra |

onChangeSearchFilter, keyup: await a GetAvailableUsers refresh (R1, ProfileList.js:745; OnAfterFetch :753) then state only
(`write`). Rows: 2.

### pages/LegacyShareObject/hooks/useShareObject.ts
Origin: `Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject` (ShareObject.js, OnReady :1044-1100; server actions R2 at :1060 and :1092).
No post-await side effect: only guarded state writes (`write`). A failure goes to the flow handler in both (R2). The type-label query is
a screen aggregate (ShareObject.js:867, R1) with no after-effect. Rows: 0.

### pages/ConnectShare/hooks/useConnectShare.ts
Origin: `UBTConnect.Legacy_Share.ConnectShare` (ConnectShare.js).

| Flow | Awaited call | Side effect after await | React (guarded?) file:line | TST after leaving | Verdict |
|---|---|---|---|---|---|
| onInitialize | `onInitializeSharingScreen`: module client action (UBTConnectController, ConnectShare.js:~300), no check; it makes the server call and the audit | 1 s timer, then upgrade pop-up (`setShowFreeSubscriptionAlert`) | useConnectShare.ts:97-100 (yes: not started after unmount, cleared at :104-109) | JS timer always starts (ConnectShare.js:608-613), but `Action_SetShowFreeSubscriptionAlert` has an alive check (:366) -> R3, no pop-up. Same outcome | same |
| onInitialize | same (failure) | raiseToFlowHandler | :68 (no) | module/server failure reaches the screen handler | same |

OnReady (redirect, `replaceOnUpcomingNavigation`, navigate) does not run after an unmount: the effect needs `isInitialized`
(:70, guarded); in TST the view is not rendered, and `Action_Redirect` has an alive check (:447). Same, not counted. Rows: 2.

## Summary

| Hook | Side effects (rows) | react-extra | react-missing | unclear |
|---|---|---|---|---|
| MessageDetail/useMessageDetail | 17 | 12 | 0 | 0 |
| MessageDetail/useShareObjectDetail | 1 | 1 | 0 | 0 |
| MessageList/useMessageList | 15 | 12 | 0 | 0 |
| Search/useSearch | 11 | 8 | 0 | 0 |
| Notifications/useNotifications | 3 | 3 | 0 | 0 |
| Notes/useNotes | 3 | 3 | 0 | 0 |
| Updates_SingleList/useUpdatesSingleList | 14 | 12 | 0 | 0 |
| HomeFeed/useFeedUpdates | 4 | 1 | 2 | 0 |
| MyBookmarks/useMyBookmarks | 9 | 3 | 0 | 0 |
| BookmarksByGroup/useBookmarkGroup | 16 | 6 | 0 | 0 |
| LegacyShareObject/useProfileList | 2 | 1 | 0 | 0 |
| LegacyShareObject/useShareObject | 0 (no post-await side effect) | 0 | 0 | 0 |
| ConnectShare/useConnectShare | 2 | 0 | 0 | 0 |
| Total | 97 | 62 | 2 | 0 |

Patterns of react-extra (what a fix needs): (1) everything after an R1 call (data action, aggregate): OnAfterFetch bodies
(counters, bar count, audit, cache writes), toasts, events, navigation and `raiseToFlowHandler` on failure; (2) after an R2 call,
the step that calls an own action of the screen or block (R3: `updateMessageRead`, `refreshMessages`, `refreshUpdatesAndFlags`,
`NavigateTo_*`, `MessageRetractedFlow`, `Refresh_GetNotes`, `Action_ClearResults`); (3) every `Destination` or event to a parent
screen handler (R3/R4). `same` rows are module client actions and toasts (R5), which TST runs after leaving.
The two react-missing rows (FeedBlock_Updates mark read/unread: `Directory_Updates_RefreshBottomBarCount`) are missing also
while the screen is alive, so they are a port gap, not a W23 difference.
