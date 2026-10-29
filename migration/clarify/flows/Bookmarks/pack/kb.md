# KB index of UI flow Bookmarks

KB root: `../ubt_sharing_kb/connect/outsystems/apps` (os-kb extraction of Connect, DEV, 2026-10-05). Rules quote the model and say `confirmed` or `inferred`.
Read the UI pages fully; open a rule file only for the rules the report cites.

## UI pages of UBTConnect that name the flow or its screens

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/bookmarks.md` — Bookmarks (flow `Bookmarks`) — the Connect 2 bookmarks list (5 names of this flow, 13 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/app-shell.md` — App shell — start, login, layouts and the common in-layout block (flows `App_Common`, `App_Cache`, `SubLayout`) (2 names of this flow, 37 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/filter-sort-sheets.md` — Filter, sort and more-action sheets (flow `App_CommonBlocks_Filter`) (2 names of this flow, 15 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-bookmarks.md` — My Bookmarks — legacy (flow `Legacy_MyBookmarks`) (2 names of this flow, 3 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/notes.md` — Notes (flow `Notes`) — the "My notes" list (2 names of this flow, 12 rules)

## Logic pages and cross-cut pages that name the flow's actions

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/app-version.md`: Get_IsUnsupportedSystem, Get_IsUnsupportedVersion, OpenGooglePlay_UBTConnect, Try_GetIsSupportedVersion, Upgrade_UBTConnect, Upgrade_WebView
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/bookmarks-notes.md`: GetBookmarks_Pills, ToggleBookmarkItem_C2, AddBookmark2, DeleteBookmarkByBookmarkId2, Bookmarks
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/session-and-sync.md`: GetUserInformation_Wrapper_Assign, OfflineDataSync, OpenGooglePlay_UBTConnect, Upgrade_UBTConnect, Bookmarks
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/client-variables.md`: GetUserInformation_Wrapper_Assign, OfflineDataSync, Bookmarks
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-bookmarks-notes.md`: GetBookmarks, Bookmarks
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-legacy-flows.md`: GetURLFromEventDataURL, SetResumeLoginLink
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-misc-date-actions.md`: GetBookmarks_FilterYear
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-updates-feed-sections.md`: Directory_Updates_RefreshBottomBarCount
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/helpers.md`: App_CommonFilter_DefineOptionNames
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/push-and-deeplinks.md`: GetURLFromEventDataURL
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/region-access.md`: App_CommonFilter_CheckCountry
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-app-start-and-login.md`: SetResumeLoginLink
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/validation.md`: ToggleBookmarkItem_C2

## Rules (BR-UBTCON-*) whose source element is a screen, block or action of the flow

| Element | Rule | Confidence | Title |
|---|---|---|---|
| App_CommonFilter_CheckCountry | `BR-UBTCON-256` | confirmed | A country is enabled in the common filter when it matches one of the subscribed countries by code, ignoring case and surrounding spaces |
| App_CommonFilter_DefineOptionNames | `BR-UBTCON-269` | confirmed | The filter's selected-names list is rebuilt from the selected ids, matched case-insensitively; options without a display text are skipped |
| App_IconBadge | `BR-UBTCON-319` | confirmed | An icon badge shows its number only when it is not zero, and shows a skeleton while loading or while the count is still unknown (-1) |
| App_NotificationIcon | `BR-UBTCON-320` | confirmed | The notification bell opens the new Notifications screen when the new-notifications flag is on, otherwise the legacy message list; its badge stays loading until notifications are synched |
| Block_PINUnlock | `BR-UBTCON-952` | confirmed | On an unsupported app or WebView version the lock screen shows the upgrade notice |
| Block_PINUnlock_ContentWrapper | `BR-UBTCON-948` | confirmed | A wrong PIN shows "Your current PIN is not correct!"; an unknown user shows "No matching user. Please Register a PIN" and is sent to PIN registration; anything else is shown as the plugin reported it |
| Block_PINUnlock_ContentWrapper | `BR-UBTCON-949` | confirmed | Biometric unlock is offered on the lock screen only when the user enabled it on this device, and never when re-entering the PIN from the menu |
| Block_PINUnlock_ContentWrapper | `BR-UBTCON-950` | confirmed | Forgot PIN sends the user to Login flagged as a PIN reset — the logout call on this path is disabled |
| Block_PINUnlock_ContentWrapper | `BR-UBTCON-951` | confirmed | The lock screen links Terms & Conditions and the Privacy Policy, each only when the cached policy has a URL |
| Bookmarks | `BR-UBTCON-020` | confirmed | The bookmarks list is fetched from the server ten at a time, newest first by default; page 1 replaces the list and later pages are appended |
| Bookmarks | `BR-UBTCON-021` | confirmed | Scrolling to the end loads the next bookmarks page only while the last page was not empty and fewer bookmarks are shown than the server total |
| Bookmarks | `BR-UBTCON-022` | confirmed | Tapping a category pill filters the bookmarks by that one category and restarts from page 1; the "All" pill clears the category |
| Bookmarks | `BR-UBTCON-023` | confirmed | Applying the filter sheet sets the sort order and years and refetches the bookmarks — without returning to page 1 |
| Bookmarks | `BR-UBTCON-024` | confirmed | Removing a bookmark from a card refetches the list at the current page number, without resetting paging or pills |
| Bookmarks | `BR-UBTCON-025` | confirmed | Tapping a bookmark opens it only when it is a household; every other bookmark category does nothing |
| Bookmarks | `BR-UBTCON-026` | confirmed | The bookmark year filter offers the years found on the device; placeholder pills and cards are shown while the first page loads |
| Bookmarks | `BR-UBTCON-027` | confirmed | The bookmarks search box is not wired: typing, submitting or clearing it does nothing |
| Bookmarks_Card_Item | `BR-UBTCON-028` | confirmed | A bookmark card offers unbookmark, add-note and share; a note deleted from the card disappears from it and the note count drops by one — although the delete never reaches the server |
| Bookmarks_FilterSheet | `BR-UBTCON-029` | confirmed | The bookmark filter sheet offers newest/oldest sorting and the device years, and returns both in the filter it applies |
| BottomBarMenu | `BR-UBTCON-314` | confirmed | Tapping the tab that is already active on a root page scrolls the page to the top instead of navigating |
| BottomBarMenu | `BR-UBTCON-315` | confirmed | Each main bottom-bar tab opens its screen; Directory opens the country list when the C1 directory view is enabled, otherwise the locality page; any other item is handed back to the embedding screen |
| BottomBarMenu | `BR-UBTCON-316` | confirmed | The Bookmarks tab picks one of four screens from two feature flags: bookmark notes (LaunchDarkly) and new bookmarks (OutSystems flag) |
| BottomBarMenu | `BR-UBTCON-317` | confirmed | For a householder the bottom-bar item list is fetched a second time on the first parameter change, then the bar is refreshed |
| BottomBarMenu | `BR-UBTCON-318` | confirmed | Only the Updates tab carries an unread badge, fed from the device's unread-updates count and capped at 9 |
| CommonUI_InsideLayout | `BR-UBTCON-310` | confirmed | Every screen that embeds the common layout block shows the PIN unlock overlay unless the user is anonymous, the screen opts out, or PIN registration is still pending |
| CommonUI_InsideLayout | `BR-UBTCON-311` | confirmed | A user who still has policies to accept gets the policy checker on every screen that embeds the common layout block, unless that screen opts out |
| CommonUI_InsideLayout | `BR-UBTCON-312` | confirmed | After PIN registration the next screen sends Back to Home instead of the browser history — a one-shot flag consumed on a fresh render only |
| CommonUI_InsideLayout | `BR-UBTCON-313` | confirmed | Pressing Back on the first page of the history does not leave the app: navigation is prevented and Home opens instead |
| Directory_Updates_RefreshBottomBarCount | `BR-UBTCON-171` | confirmed | The bottom-bar unread badge is refetched from the server only when the configured number of minutes has passed since the last check, or when forced |
| ExitApplicationForWebViewUpdate | `BR-UBTCON-506` | confirmed | The app closes itself after the given delay only where the Cordova exitApp API exists; elsewhere nothing happens |
| FilterSheet | `BR-UBTCON-321` | confirmed | Country and locality filters are only built for a paid plan, and only once the cached country/locality list and the user's subscription have both loaded |
| FilterSheet | `BR-UBTCON-322` | confirmed | On any plan other than Global each country option is enabled only if it is one of the user's subscribed countries |
| FilterSheet | `BR-UBTCON-323` | confirmed | The locality list follows the country selection: all localities when "All" countries is selected, otherwise only those of the selected countries; previously chosen localities survive only if still listed |
| FilterSheet | `BR-UBTCON-324` | confirmed | The sheet opens with the caller's current filter preselected, or "All" when nothing is selected — but the locality preselection copies country ids |
| FilterSheet | `BR-UBTCON-325` | confirmed | When sorting is enabled the sheet adds one sort choice that defaults to Yes (newest first) unless the caller passed a sort; when sorting is disabled any existing sort choice is removed |
| FilterSheet | `BR-UBTCON-326` | confirmed | A free user whose sheet would offer only country/locality filters is told to upgrade instead of opening the sheet |
| FilterSheet | `BR-UBTCON-328` | confirmed | Filter changes take effect only on Apply: Apply is disabled until something changed, Clear is disabled when already clear and applies immediately, and closing the sheet discards unapplied changes |
| FilterSheet | `BR-UBTCON-329` | confirmed | A sheet with exactly one filter opens straight into that filter's option list, and Back from the list closes the sheet |
| FilterSheet | `BR-UBTCON-330` | confirmed | Choosing "All" countries resets the locality selection to "All"; choosing specific countries re-filters the locality list |
| FilterSheet_OptionChoice_Item | `BR-UBTCON-333` | confirmed | A yes/no filter choice offers a third "none" option only when the caller gives it a label |
| FilterSheet_OptionList_Item | `BR-UBTCON-331` | confirmed | Searching a filter list matches option names ignoring case and accents; the "All" option is offered only when not searching and the list allows it; an empty search result shows a no-results message |
| FilterSheet_OptionList_Item | `BR-UBTCON-332` | confirmed | Tapping a locked (not enabled) country or locality opens the upgrade pop-up instead of selecting it |
| GetBookmarks_Pills | `BR-UBTCON-242` | confirmed | The bookmark filter always starts with a selected "All" pill, followed by one unselected pill per category the user has bookmarks in |
| GetURLFromEventDataURL | `BR-UBTCON-515` | confirmed | A shared link from the web share page is rewritten into the app's ConnectShare route, and a doubled "UBTConnect/" segment is collapsed |
| GetUserInformation_Wrapper_Assign | `BR-UBTCON-530` | confirmed | Whether the user still has policies to accept is copied from the cached user information onto the device |
| Get_IsUnsupportedSystem | `BR-UBTCON-232` | confirmed | The system is unsupported when either the app version or the browser (WebView) version is unsupported |
| Get_IsUnsupportedVersion | `BR-UBTCON-231` | confirmed | The app version is unsupported when the native shell version is unsupported; the WebView counts as unsupported for the WebView flag only on Android |
| HandleOnResumeOpenLink | `BR-UBTCON-632` | confirmed | A link that arrives while the app is running is opened at once only for a logged-in, unlocked, ready user; otherwise it is parked and opened after login or unlock |
| HandleOnResumeOpenLink | `BR-UBTCON-633` | confirmed | Deep links to a notification message or an Assemble event are ignored here because the push plugin opens them; every other deep link is processed |
| ItemCardActions | `BR-UBTCON-335` | confirmed | Un-bookmarking from a card always tells the parent the item was unbookmarked, even when the server delete failed |
| OfflineDataSync | `BR-UBTCON-520` | confirmed | The offline data synchronization does nothing: the action goes straight from Start to End and ignores SyncUnit |
| OfflineDataSyncConfiguration | `BR-UBTCON-521` | confirmed | Offline sync is set to start automatically when the device comes online, at login and on resume, with no retry on error |
| OfflineDataSyncEvents | `BR-UBTCON-340` | confirmed | An offline sync run ends as success, as a retryable error, or — on a security exception — as a non-retryable error |
| OpenGooglePlay_Chrome | `BR-UBTCON-524` | confirmed | The Chrome update link opens the Google Play page of package com.android.chrome |
| OpenGooglePlay_UBTConnect | `BR-UBTCON-526` | confirmed | The app update link opens the Google Play page of the running app's own package name |
| OpenGooglePlay_WebView | `BR-UBTCON-525` | confirmed | The WebView update link opens the Google Play page of package com.google.android.webview |
| Policy_Checker | `BR-UBTCON-940` | confirmed | While the device flag says policies are pending, every screen whose layout does not opt out is redirected to Accept Pending Policies |
| SetResumeLoginLink | `BR-UBTCON-527` | confirmed | A deep link to open after login is parked on the page window, where GetResumeLoginLink later reads and clears it |
| ToggleBookmarkItem_C2 | `BR-UBTCON-237` | confirmed | Connect 2 bookmarking: the device copy is created only after the server confirms the add; a failure shows the add-error toast |
| ToggleBookmarkItem_C2 | `BR-UBTCON-238` | confirmed | Connect 2 un-bookmarking: the device copy is deleted only after the server confirms the delete; a failure shows the remove-error toast |
| Try_GetIsSupportedVersion | `BR-UBTCON-233` | confirmed | If the version check fails, the app treats both the native version and the WebView as supported |
| UnsupportedVersion_Wrapper | `BR-UBTCON-337` | confirmed | An unsupported native app gets the upgrade-app card; otherwise an unsupported Android WebView gets the update-WebView card; otherwise the unsupported-browser card — and Back is blocked while it shows |
| Upgrade_WebView | `BR-UBTCON-234` | confirmed | To update the WebView, Android below 10 is sent to the Chrome store page and Android 10+ to Android System WebView, then the app closes after 10 seconds |

## Referenced modules: pages that name the referenced blocks and the server/service actions

| Name | Hits | Where (first 5) |
|---|---|---|
| AddBookmark2 | 7 | - |
| CustomContainer | 19 | - |
| CustomText | 9 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:13`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/design-tokens.md:20` |
| DeleteBookmarkByBookmarkId2 | 5 | - |
| EmptyList | 4 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/search-sheet.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/share-sheet.md:31` |
| GetBookmarks | 19 | - |
| Get_UI_UpdateItems_UnreadCount_All | 7 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/updates/build/behaviour.md:184`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:83` |
| Horizontal_Filter_TagList | 2 | - |
| Icon | 26 | - |
| Input | 87 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:23`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:81`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:104`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:141`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:169` |
| ItemCard_WithNotes | 2 | - |
| Layout_MainPages_FixedTitle | 2 | - |
| NoteListActions | 27 | - |
| NotesSheet | 33 | - |
| SkeletonSection | 15 | - |
