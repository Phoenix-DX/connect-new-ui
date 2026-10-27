# KB index of UI flow App_Notifications

KB root: `../ubt_sharing_kb/connect/outsystems/apps` (os-kb extraction of Connect, DEV, 2026-10-05). Rules quote the model and say `confirmed` or `inferred`.
Read the UI pages fully; open a rule file only for the rules the report cites.

## UI pages of UBTConnect that name the flow or its screens

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/notifications.md` — Notifications (flow `App_Notifications`) (8 names of this flow, 12 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/design-tokens.md` — Design tokens used across UBTConnect (whole module) (2 names of this flow, 2 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/common-blocks.md` — Common blocks and pop-up dialogs (flows `App_Common_Blocks`, `App_Common_Blocks_PopupDialogs`) (1 names of this flow, 5 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-notifications.md` — My Notifications — legacy (flow `Legacy_MyNotificationsFlow`) (1 names of this flow, 8 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/supper-meetings-oneschool.md` — Supper meetings, OneSchool Global and the entities carousel (1 names of this flow, 13 rules)

## Logic pages and cross-cut pages that name the flow's actions

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-updates-feed-sections.md`: App_Notifications_AugmentDateRanges, Directory_Updates_GetListBreakpoint, Directory_Updates_GetUpdatedBreakpoints, Directory_Updates_MarkAllAsRead, Directory_Updates_RefreshBottomBarCount, Action_UI_UpdateItem_MarkAsRead, Notifications
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/app-version.md`: Get_IsUnsupportedSystem, Get_IsUnsupportedVersion, OpenGooglePlay_UBTConnect, Try_GetIsSupportedVersion, Upgrade_UBTConnect, Upgrade_WebView
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/session-and-sync.md`: GetUserInformation_Wrapper_Assign, OfflineDataSync, OpenGooglePlay_UBTConnect, Upgrade_UBTConnect
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/push-and-deeplinks.md`: App_Notifications_GetBreakpoints, GetSkeletonList_UI_Notification, GetURLFromEventDataURL
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/client-variables.md`: GetUserInformation_Wrapper_Assign, OfflineDataSync, Notifications
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-legacy-flows.md`: GetURLFromEventDataURL, SetResumeLoginLink
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-updates.md`: Action_UI_UpdateItem_MarkAllAsRead, Action_UI_UpdateItem_MarkAsRead
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/helpers.md`: App_CommonFilter_DefineOptionNames
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/region-access.md`: App_CommonFilter_CheckCountry
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-app-start-and-login.md`: SetResumeLoginLink

## Rules (BR-UBTCON-*) whose source element is a screen, block or action of the flow

| Element | Rule | Confidence | Title |
|---|---|---|---|
| App_CommonFilter_CheckCountry | `BR-UBTCON-256` | confirmed | A country is enabled in the common filter when it matches one of the subscribed countries by code, ignoring case and surrounding spaces |
| App_CommonFilter_DefineOptionNames | `BR-UBTCON-269` | confirmed | The filter's selected-names list is rebuilt from the selected ids, matched case-insensitively; options without a display text are skipped |
| App_IconBadge | `BR-UBTCON-319` | confirmed | An icon badge shows its number only when it is not zero, and shows a skeleton while loading or while the count is still unknown (-1) |
| App_Notifications_AugmentDateRanges | `BR-UBTCON-161` | confirmed | The notifications list uses the same Today / 7 / 30-day sections, but its Older section runs from 31 days ago to 3 months ago — a range whose start is after its end |
| App_Notifications_GetBreakpoints | `BR-UBTCON-268` | confirmed | The notification list is split into date-range sections, each starting at its first notification and badged with its unread count; empty ranges get no section |
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
| Directory_Updates_GetListBreakpoint | `BR-UBTCON-167` | confirmed | No section transition is reported unless both the current and the previous update dates are known |
| Directory_Updates_GetListBreakpoint | `BR-UBTCON-168` | confirmed | For an oldest-first list the two dates are swapped before the section tests, so the same thresholds detect the transition in the other direction |
| Directory_Updates_GetListBreakpoint | `BR-UBTCON-169` | confirmed | Scrolling between two updates crosses into a section when one is past a boundary (30, 7 or 1 days ago) and the other is not; the returned breakpoint is the section being entered for the list's direction |
| Directory_Updates_GetUpdatedBreakpoints | `BR-UBTCON-165` | confirmed | The section being acted on is the last breakpoint at or before the selected list position |
| Directory_Updates_GetUpdatedBreakpoints | `BR-UBTCON-166` | confirmed | After an update changes state, only that section's badge is recounted as the unread updates within the section's date range |
| Directory_Updates_MarkAllAsRead | `BR-UBTCON-170` | confirmed | Mark-all-as-read on the device flips every loaded unread update to read in the local list only |
| Directory_Updates_RefreshBottomBarCount | `BR-UBTCON-171` | confirmed | The bottom-bar unread badge is refetched from the server only when the configured number of minutes has passed since the last check, or when forced |
| ExitApplicationForWebViewUpdate | `BR-UBTCON-506` | confirmed | The app closes itself after the given delay only where the Cordova exitApp API exists; elsewhere nothing happens |
| FilterSheet_OptionChoice_Item | `BR-UBTCON-333` | confirmed | A yes/no filter choice offers a third "none" option only when the caller gives it a label |
| GetURLFromEventDataURL | `BR-UBTCON-515` | confirmed | A shared link from the web share page is rewritten into the app's ConnectShare route, and a doubled "UBTConnect/" segment is collapsed |
| GetUserInformation_Wrapper_Assign | `BR-UBTCON-530` | confirmed | Whether the user still has policies to accept is copied from the cached user information onto the device |
| Get_IsUnsupportedSystem | `BR-UBTCON-232` | confirmed | The system is unsupported when either the app version or the browser (WebView) version is unsupported |
| Get_IsUnsupportedVersion | `BR-UBTCON-231` | confirmed | The app version is unsupported when the native shell version is unsupported; the WebView counts as unsupported for the WebView flag only on Android |
| HandleOnResumeOpenLink | `BR-UBTCON-632` | confirmed | A link that arrives while the app is running is opened at once only for a logged-in, unlocked, ready user; otherwise it is parked and opened after login or unlock |
| HandleOnResumeOpenLink | `BR-UBTCON-633` | confirmed | Deep links to a notification message or an Assemble event are ignored here because the push plugin opens them; every other deep link is processed |
| MessageListItem | `BR-UBTCON-986` | confirmed | A message row without an icon fetches the sender's signed photo when a user id is known, and shows a placeholder when none is found |
| Notifications | `BR-UBTCON-976` | confirmed | The notification feed asks the server for 20 messages, newest first, private and public both on for a logged-in user — and sends an empty device id, because the step that read it is disabled |
| Notifications | `BR-UBTCON-977` | confirmed | Search text typed on the notifications screen never reaches the server: it is stored in an updates filter while the fetch sends a variable nothing assigns |
| Notifications | `BR-UBTCON-978` | confirmed | The sort sheet offers newest-to-oldest and oldest-to-newest, but the choice is never applied: the fetch's order flag is not assigned anywhere in the screen |
| Notifications | `BR-UBTCON-979` | confirmed | The feed copies the server's HasUnreadMessages into its data-action output but nothing on the screen reads it; the unread count is used only to badge sections and a hidden mark-all flag |
| Notifications | `BR-UBTCON-980` | confirmed | Mark all as read, mark as read/unread and delete all are not wired: the screen's handlers are bound to no event, the kebab sheet's handlers are empty, and the handlers target the Updates service, not notifications |
| Notifications | `BR-UBTCON-981` | confirmed | The list is cut into date sections; the sticky header shows the current section's name and unread badge, starting at the first section |
| Notifications | `BR-UBTCON-982` | confirmed | Items marked read in a detail carousel come back as a preload: each still found at its list position is shown read and the unread counts drop by one |
| Notifications | `BR-UBTCON-983` | confirmed | "No Notifications Found" is shown only after a completed fetch returned an empty list |
| Notifications | `BR-UBTCON-985` | confirmed | The feed shows at most the first 20 messages — there is no load-more on scroll |
| Notifications | `BR-UBTCON-987` | confirmed | Default filters fill only what is missing — dates from the Older start to Today's end, read state "none", newest first — and they feed the Updates-style filter, not the notification fetch |
| Notifications_Action | `BR-UBTCON-984` | confirmed | The sort control opens its sheet, or the subscription upgrade pop-up when the sheet says the user must upgrade; the "Only show unread" switch changes nothing |
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
| Action_UI_UpdateItem_MarkAllAsRead | 9 | - |
| Action_UI_UpdateItem_MarkAsRead | 11 | - |
| Action_UI_UpdateItem_MarkAsUnread | 3 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/read-state.md:10`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/rules/BR-C2SVC-342.md:31` |
| Badge | 2 | - |
| CircleButton | 1 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:14` |
| Columns_Two | 1 | - |
| CustomContainer | 19 | - |
| CustomText | 9 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:13`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/design-tokens.md:20` |
| Delete_Notifications | 0 | - |
| EmptyList | 4 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/search-sheet.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/share-sheet.md:31` |
| Get_UI_NotificationDetails | 0 | - |
| Get_UI_Notifications | 40 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/logic/message-feed.md:11`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/rules/BR-C2LEG-455.md:46` |
| Get_UI_UpdateItems_UnreadCount_All | 7 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/updates/build/behaviour.md:184`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:83` |
| Icon | 26 | - |
| IconText | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:62`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/rules/BR-C2UTL-317.md:22` |
| Input | 87 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:23`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:81`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:104`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:141`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:169` |
| Layout_MainPages_Upgrade | 2 | - |
| ListAppendAll | 34 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-796.md:30`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-931.md:32`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/logic/rest-wrappers.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/logic/rest-wrappers.md:23`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/module.md:66` |
| ListFilter | 81 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyCalendar_CS/logic/event-sources.md:19`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/rules/BR-C2LEG-185.md:21`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_BL/rules/BR-C2LEG-318.md:21`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_BL/rules/BR-C2LEG-320.md:19`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_BL/rules/BR-C2LEG-320.md:21` |
| MarkAllAsReadNotifications | 3 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/module.md:91`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/module.md:111`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/rules/BR-C2LEG-464.md:24` |
| MarkAsRead | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/module.md:91`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/module.md:111`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/rules/BR-C2LEG-464.md:23`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/read-state.md:20`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/read-state.md:21` |
| Notification_ListItem | 3 | - |
| ScrollAnchor | 3 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/ui/group-page.md:19` |
| SkeletonSection | 15 | - |
| ToggleRead | 0 | - |
