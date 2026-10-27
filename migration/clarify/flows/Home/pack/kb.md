# KB index of UI flow Home

KB root: `../ubt_sharing_kb/connect/outsystems/apps` (os-kb extraction of Connect, DEV, 2026-10-05). Rules quote the model and say `confirmed` or `inferred`.
Read the UI pages fully; open a rule file only for the rules the report cites.

## UI pages of UBTConnect that name the flow or its screens

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/home-feed.md` — Home (flow `Home`) — home feed, services, updates and the embedded news feed (8 names of this flow, 17 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-notifications.md` — My Notifications — legacy (flow `Legacy_MyNotificationsFlow`) (3 names of this flow, 8 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/app-shell.md` — App shell — start, login, layouts and the common in-layout block (flows `App_Common`, `App_Cache`, `SubLayout`) (2 names of this flow, 37 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/common-blocks.md` — Common blocks and pop-up dialogs (flows `App_Common_Blocks`, `App_Common_Blocks_PopupDialogs`) (2 names of this flow, 5 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/menu.md` — Menu, Terms & Policies and the menu list block (flow `App_Menu`) (2 names of this flow, 8 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/updates.md` — Updates feed screen (flow `Directory_Updates`) (2 names of this flow, 26 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/calendar.md` — My Calendar and the calendar blocks (flows `Calendar`, `Calendar_Events`) (1 names of this flow, 35 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/directory-locality.md` — Directory — countries and localities (flows `Directory_Locality`, `Directory_Interchange`, `Directory_CommonBlocks`, `zDEV_Directory_CommunityBusinessBlocks`) (1 names of this flow, 33 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-orbit.md` — Orbit (flows `Legacy_OrbitEventsFlow`, `Legacy_OrbitQRCodeFlow`, `Legacy_OrbitAdminFlow`) (1 names of this flow, 12 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/pin.md` — PIN register, unlock and change (flow `App_PIN`) and PIN & Biometrics (flow `App_Menu`) (1 names of this flow, 14 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/search.md` — Directory search (flow `Directory_Search`) (1 names of this flow, 12 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/supper-meetings-oneschool.md` — Supper meetings, OneSchool Global and the entities carousel (1 names of this flow, 13 rules)

## Logic pages and cross-cut pages that name the flow's actions

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/app-version.md`: Get_IsUnsupportedSystem, Get_IsUnsupportedVersion, OpenGooglePlay_UBTConnect, Try_GetIsSupportedVersion, Upgrade_UBTConnect, Upgrade_WebView
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-updates-feed-sections.md`: Directory_Updates_GetCarouselPreloadedHouseholds, Directory_Updates_RefreshBottomBarCount, Action_UI_UpdateItem_MarkAsRead
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/session-and-sync.md`: OfflineDataSync, OpenGooglePlay_UBTConnect, Upgrade_UBTConnect
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-legacy-flows.md`: GetURLFromEventDataURL, SetResumeLoginLink, HomeFeed
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-app-start-and-login.md`: SetResumeLoginLink, HomeFeed
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/push-and-deeplinks.md`: GetURLFromEventDataURL
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-pin-and-policy-gates.md`: HomeFeed
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-updates.md`: Action_UI_UpdateItem_MarkAsRead
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/client-variables.md`: OfflineDataSync

## Rules (BR-UBTCON-*) whose source element is a screen, block or action of the flow

| Element | Rule | Confidence | Title |
|---|---|---|---|
| App_IconBadge | `BR-UBTCON-319` | confirmed | An icon badge shows its number only when it is not zero, and shows a skeleton while loading or while the count is still unknown (-1) |
| App_NotificationIcon | `BR-UBTCON-320` | confirmed | The notification bell opens the new Notifications screen when the new-notifications flag is on, otherwise the legacy message list; its badge stays loading until notifications are synched |
| Block_PINUnlock | `BR-UBTCON-952` | confirmed | On an unsupported app or WebView version the lock screen shows the upgrade notice |
| Block_PINUnlock_ContentWrapper | `BR-UBTCON-948` | confirmed | A wrong PIN shows "Your current PIN is not correct!"; an unknown user shows "No matching user. Please Register a PIN" and is sent to PIN registration; anything else is shown as the plugin reported it |
| Block_PINUnlock_ContentWrapper | `BR-UBTCON-949` | confirmed | Biometric unlock is offered on the lock screen only when the user enabled it on this device, and never when re-entering the PIN from the menu |
| Block_PINUnlock_ContentWrapper | `BR-UBTCON-950` | confirmed | Forgot PIN sends the user to Login flagged as a PIN reset — the logout call on this path is disabled |
| Block_PINUnlock_ContentWrapper | `BR-UBTCON-951` | confirmed | The lock screen links Terms & Conditions and the Privacy Policy, each only when the cached policy has a URL |
| BottomBarMenu | `BR-UBTCON-314` | confirmed | Tapping the tab that is already active on a root page scrolls the page to the top instead of navigating |
| BottomBarMenu | `BR-UBTCON-315` | confirmed | Each main bottom-bar tab opens its screen; Directory opens the country list when the C1 directory view is enabled, otherwise the locality page; any other item is handed back to the embedding screen |
| BottomBarMenu | `BR-UBTCON-316` | confirmed | The Bookmarks tab picks one of four screens from two feature flags: bookmark notes (LaunchDarkly) and new bookmarks (OutSystems flag) |
| BottomBarMenu | `BR-UBTCON-317` | confirmed | For a householder the bottom-bar item list is fetched a second time on the first parameter change, then the bar is refreshed |
| BottomBarMenu | `BR-UBTCON-318` | confirmed | Only the Updates tab carries an unread badge, fed from the device's unread-updates count and capped at 9 |
| CommonUI_InsideLayout | `BR-UBTCON-310` | confirmed | Every screen that embeds the common layout block shows the PIN unlock overlay unless the user is anonymous, the screen opts out, or PIN registration is still pending |
| CommonUI_InsideLayout | `BR-UBTCON-311` | confirmed | A user who still has policies to accept gets the policy checker on every screen that embeds the common layout block, unless that screen opts out |
| CommonUI_InsideLayout | `BR-UBTCON-312` | confirmed | After PIN registration the next screen sends Back to Home instead of the browser history — a one-shot flag consumed on a fresh render only |
| CommonUI_InsideLayout | `BR-UBTCON-313` | confirmed | Pressing Back on the first page of the history does not leave the app: navigation is prevented and Home opens instead |
| Directory_Updates_GetCarouselPreloadedHouseholds | `BR-UBTCON-172` | confirmed | In the home updates carousel only unread households get a swipe action, and that action marks the update read |
| Directory_Updates_RefreshBottomBarCount | `BR-UBTCON-171` | confirmed | The bottom-bar unread badge is refetched from the server only when the configured number of minutes has passed since the last check, or when forced |
| ExitApplicationForWebViewUpdate | `BR-UBTCON-506` | confirmed | The app closes itself after the given delay only where the Cordova exitApp API exists; elsewhere nothing happens |
| FeedBlock_Services | `BR-UBTCON-053` | confirmed | The home services carousel lists the user's services in pages of six, with an optional "Add Service" tile at the end |
| FeedBlock_Services | `BR-UBTCON-054` | confirmed | Tapping a home service opens its area: Orbit, LDM, My Calendar, Assemble or Orbit Admin |
| FeedBlock_Services | `BR-UBTCON-055` | confirmed | The LDM service opens the new LDM events screen when the new-LDM feature flag is on, otherwise the old one |
| FeedBlock_Services | `BR-UBTCON-056` | confirmed | Trove, HR100 and Community Tradelink ask for confirmation before leaving the app; El Gusto opens its link directly |
| FeedBlock_Services | `BR-UBTCON-057` | confirmed | OneSchool Global and My Notes tiles only say "This feature will be coming soon."; any other service does nothing |
| FeedBlock_Updates | `BR-UBTCON-058` | confirmed | Tapping a home update the user's plan covers marks it read and opens the household; an update outside the plan opens the upgrade pop-up instead |
| FeedBlock_Updates | `BR-UBTCON-059` | confirmed | With the carousel flag on, an update opens the household carousel preloaded with the accessible updates' households; otherwise it opens the household details |
| FeedBlock_Updates | `BR-UBTCON-060` | confirmed | When the home-page updates fetch returns nothing, the block tells the home screen to hide the Updates section |
| FeedBlock_Updates | `BR-UBTCON-061` | confirmed | Returning to the home screen from cache re-marks as read every update the user already swiped in the carousel |
| FeedBlock_Updates | `BR-UBTCON-062` | confirmed | Sharing a home update opens the share sheet only with the extended-share flag on; otherwise the user sees "coming soon" |
| FeedBlock_Updates | `BR-UBTCON-063` | confirmed | Marking a home update read or unread calls the server and then flips the local flag; "Send gift" only shows a test message |
| Feed_Embeded | `BR-UBTCON-064` | confirmed | The embedded news feed is shown only when the feed feature flag is on |
| Feed_Embeded | `BR-UBTCON-065` | confirmed | Sharing a feed item raises the new share sheet when extended share is on; otherwise the legacy share pop-up offers "to Connect" or "to others" |
| Feed_Embeded | `BR-UBTCON-066` | confirmed | A feed document that no longer exists gets its own message; any other download failure gets a generic retry message |
| GetURLFromEventDataURL | `BR-UBTCON-515` | confirmed | A shared link from the web share page is rewritten into the app's ConnectShare route, and a doubled "UBTConnect/" segment is collapsed |
| Get_IsUnsupportedSystem | `BR-UBTCON-232` | confirmed | The system is unsupported when either the app version or the browser (WebView) version is unsupported |
| Get_IsUnsupportedVersion | `BR-UBTCON-231` | confirmed | The app version is unsupported when the native shell version is unsupported; the WebView counts as unsupported for the WebView flag only on Android |
| HandleOnResumeOpenLink | `BR-UBTCON-632` | confirmed | A link that arrives while the app is running is opened at once only for a logged-in, unlocked, ready user; otherwise it is parked and opened after login or unlock |
| HandleOnResumeOpenLink | `BR-UBTCON-633` | confirmed | Deep links to a notification message or an Assemble event are ignored here because the push plugin opens them; every other deep link is processed |
| HomeFeed | `BR-UBTCON-051` | confirmed | The home "Updates" section is shown until the updates block reports there are none |
| HomeFeed | `BR-UBTCON-052` | confirmed | Sharing from the home feed opens the share sheet for either the feed item or the update — an update is shared under its member id |
| OfflineDataSync | `BR-UBTCON-520` | confirmed | The offline data synchronization does nothing: the action goes straight from Start to End and ignores SyncUnit |
| OfflineDataSyncConfiguration | `BR-UBTCON-521` | confirmed | Offline sync is set to start automatically when the device comes online, at login and on resume, with no retry on error |
| OfflineDataSyncEvents | `BR-UBTCON-340` | confirmed | An offline sync run ends as success, as a retryable error, or — on a security exception — as a non-retryable error |
| OpenGooglePlay_Chrome | `BR-UBTCON-524` | confirmed | The Chrome update link opens the Google Play page of package com.android.chrome |
| OpenGooglePlay_UBTConnect | `BR-UBTCON-526` | confirmed | The app update link opens the Google Play page of the running app's own package name |
| OpenGooglePlay_WebView | `BR-UBTCON-525` | confirmed | The WebView update link opens the Google Play page of package com.google.android.webview |
| Policy_Checker | `BR-UBTCON-940` | confirmed | While the device flag says policies are pending, every screen whose layout does not opt out is redirected to Accept Pending Policies |
| SetResumeLoginLink | `BR-UBTCON-527` | confirmed | A deep link to open after login is parked on the page window, where GetResumeLoginLink later reads and clears it |
| Try_GetIsSupportedVersion | `BR-UBTCON-233` | confirmed | If the version check fails, the app treats both the native version and the WebView as supported |
| UnsupportedVersion_Wrapper | `BR-UBTCON-337` | confirmed | An unsupported native app gets the upgrade-app card; otherwise an unsupported Android WebView gets the update-WebView card; otherwise the unsupported-browser card — and Back is blocked while it shows |
| Upgrade_WebView | `BR-UBTCON-234` | confirmed | To update the WebView, Android below 10 is sent to the Chrome store page and Android 10+ to Android System WebView, then the app closes after 10 seconds |

## Referenced modules: pages that name the referenced blocks and the server/service actions

| Name | Hits | Where (first 5) |
|---|---|---|
| Action_UI_UpdateItem_MarkAsRead | 11 | - |
| Action_UI_UpdateItem_MarkAsUnread | 3 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/read-state.md:10`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/rules/BR-C2SVC-342.md:31` |
| Carousel | 2 | - |
| CircleButton | 1 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:14` |
| CircleButton_WithLabel | 1 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/share-sheet.md:31` |
| Columns_Two | 1 | - |
| CustomContainer | 19 | - |
| CustomText | 9 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:13`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/design-tokens.md:20` |
| Dialog_GoExternalApp | 13 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/navigation/build/behaviour.md:118`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/navigation/build/behaviour.md:142`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/index/build/screen-validations.md:32`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/findings.md:77` |
| Embedded_FeedCMS | 24 | `../ubt_sharing_kb/connect/outsystems/apps/ubt-appmanager/modules/UBT_AppManager_CS/rules/BR-UAM-023.md:33` |
| Gallery | 3 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/ui/landing.md:34` |
| GetExternalLinks_ElGusto | 6 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/server-config/build/behaviour.md:40`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/findings.md:78`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_ServerConfigs/logic/server-config.md:17`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_ServerConfigs/xcut/site-properties.md:16`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_ServerConfigs/rules/BR-C2UTL-074.md:5` |
| GetExternalPackages_CommunityTradelink | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/server-config/build/behaviour.md:40`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_ServerConfigs/logic/server-config.md:16`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_ServerConfigs/xcut/site-properties.md:19`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_ServerConfigs/rules/BR-C2UTL-074.md:5`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_ServerConfigs/rules/BR-C2UTL-074.md:24` |
| GetExternalPackages_HR100 | 6 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/server-config/build/behaviour.md:40`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/findings.md:78`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_ServerConfigs/logic/server-config.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_ServerConfigs/xcut/site-properties.md:17`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_ServerConfigs/rules/BR-C2UTL-074.md:5` |
| GetExternalPackages_Trove | 10 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/server-config/build/behaviour.md:40`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/findings.md:77`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_ServerConfigs/logic/server-config.md:15`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_ServerConfigs/module.md:58`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_ServerConfigs/xcut/site-properties.md:18` |
| Get_UI_CommunityNumbers | 0 | - |
| Get_UI_MembersStatistics | 8 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/geography/build/behaviour.md:40`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/findings.md:154`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Geography_CS/logic/geography-statistics.md:10`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Geography_CS/logic/geography-statistics.md:23` |
| Get_UI_UpdateItemsForHomePage | 19 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/updates/build/behaviour.md:100`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/updates/build/behaviour.md:106` |
| Get_UI_UpdateItems_UnreadCount_All | 7 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/updates/build/behaviour.md:184`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:83` |
| HandleDownload | 0 | - |
| Icon | 26 | - |
| IconText | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:62`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/rules/BR-C2UTL-317.md:22` |
| Layout_DetailPage | 7 | - |
| Layout_HomePage | 1 | - |
| Service_ConnectServices_GetByUser | 4 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Services_CS/logic/service-favourites.md:13` |
| SharePopup | 15 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/ui-components/build/behaviour.md:178`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/feature-flags/build/behaviour.md:166`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/contact-popups.md:25` |
| ShareSheet | 85 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/ui/group-page.md:24`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_Assemble_MUI/logic/bookmarks-sharing.md:39`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_Assemble_MUI/module.md:61`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_Assemble_MUI/rules/BR-C2LEG-043.md:28`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/rules/BR-C2LEG-528.md:30` |
| ShareableObject_Generic | 17 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/rules/BR-C2LEG-193.md:25`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/rules/BR-C2LEG-193.md:38`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_Assemble_MUI/module.md:61`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_Assemble_MUI/rules/BR-C2LEG-043.md:28`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/rules/BR-C2LEG-527.md:28` |
| SkeletonSection | 15 | - |
| Update_ListItem | 6 | - |
