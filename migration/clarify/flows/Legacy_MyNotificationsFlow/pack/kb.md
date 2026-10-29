# KB index of UI flow Legacy_MyNotificationsFlow

KB root: `../ubt_sharing_kb/connect/outsystems/apps` (os-kb extraction of Connect, DEV, 2026-10-05). Rules quote the model and say `confirmed` or `inferred`.
Read the UI pages fully; open a rule file only for the rules the report cites.

## UI pages of UBTConnect that name the flow or its screens

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-notifications.md` — My Notifications — legacy (flow `Legacy_MyNotificationsFlow`) (3 names of this flow, 8 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/common-blocks.md` — Common blocks and pop-up dialogs (flows `App_Common_Blocks`, `App_Common_Blocks_PopupDialogs`) (1 names of this flow, 5 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/home-feed.md` — Home (flow `Home`) — home feed, services, updates and the embedded news feed (1 names of this flow, 17 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-assemble.md` — Assemble (flow `Legacy_AssembleFlow`) (1 names of this flow, 6 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-ldm-events.md` — LDM events (flows `Legacy_LDMEventsFlow`, `Legacy_LDMEventsFlow_V2`) (1 names of this flow, 10 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-orbit.md` — Orbit (flows `Legacy_OrbitEventsFlow`, `Legacy_OrbitQRCodeFlow`, `Legacy_OrbitAdminFlow`) (1 names of this flow, 12 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-share.md` — Share — legacy (flow `Legacy_Share`) (1 names of this flow, 12 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/supper-meetings-oneschool.md` — Supper meetings, OneSchool Global and the entities carousel (1 names of this flow, 13 rules)

## Logic pages and cross-cut pages that name the flow's actions

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/app-version.md`: Get_IsUnsupportedSystem, Get_IsUnsupportedVersion, OpenGooglePlay_UBTConnect, Try_GetIsSupportedVersion, Upgrade_UBTConnect, Upgrade_WebView
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/session-and-sync.md`: OfflineDataSync, OpenGooglePlay_UBTConnect, Upgrade_UBTConnect
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-legacy-flows.md`: GetURLFromEventDataURL, SetResumeLoginLink, MessageDetail
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-updates-feed-sections.md`: Directory_Updates_RefreshBottomBarCount
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/push-and-deeplinks.md`: GetURLFromEventDataURL
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-app-start-and-login.md`: SetResumeLoginLink
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/client-variables.md`: OfflineDataSync

## Rules (BR-UBTCON-*) whose source element is a screen, block or action of the flow

| Element | Rule | Confidence | Title |
|---|---|---|---|
| App_IconBadge | `BR-UBTCON-319` | confirmed | An icon badge shows its number only when it is not zero, and shows a skeleton while loading or while the count is still unknown (-1) |
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
| Directory_Updates_RefreshBottomBarCount | `BR-UBTCON-171` | confirmed | The bottom-bar unread badge is refetched from the server only when the configured number of minutes has passed since the last check, or when forced |
| ExitApplicationForWebViewUpdate | `BR-UBTCON-506` | confirmed | The app closes itself after the given delay only where the Cordova exitApp API exists; elsewhere nothing happens |
| Feed_Embeded | `BR-UBTCON-064` | confirmed | The embedded news feed is shown only when the feed feature flag is on |
| Feed_Embeded | `BR-UBTCON-065` | confirmed | Sharing a feed item raises the new share sheet when extended share is on; otherwise the legacy share pop-up offers "to Connect" or "to others" |
| Feed_Embeded | `BR-UBTCON-066` | confirmed | A feed document that no longer exists gets its own message; any other download failure gets a generic retry message |
| GetURLFromEventDataURL | `BR-UBTCON-515` | confirmed | A shared link from the web share page is rewritten into the app's ConnectShare route, and a doubled "UBTConnect/" segment is collapsed |
| Get_IsUnsupportedSystem | `BR-UBTCON-232` | confirmed | The system is unsupported when either the app version or the browser (WebView) version is unsupported |
| Get_IsUnsupportedVersion | `BR-UBTCON-231` | confirmed | The app version is unsupported when the native shell version is unsupported; the WebView counts as unsupported for the WebView flag only on Android |
| HandleOnResumeOpenLink | `BR-UBTCON-632` | confirmed | A link that arrives while the app is running is opened at once only for a logged-in, unlocked, ready user; otherwise it is parked and opened after login or unlock |
| HandleOnResumeOpenLink | `BR-UBTCON-633` | confirmed | Deep links to a notification message or an Assemble event are ignored here because the push plugin opens them; every other deep link is processed |
| MessageDetail | `BR-UBTCON-610` | confirmed | A notification opens Orbit event, milestone and host-survey screens directly, flagged as coming from a notification and without the Orbit access check the in-app links apply |
| MessageDetail | `BR-UBTCON-615` | confirmed | Opening an LDM event from a notification is audited as a notification view (keyed on the host event, or the event itself when there is no host) and then routed to the v2 or v1 event screen by the new-LDM flag |
| MessageDetail | `BR-UBTCON-616` | confirmed | Contacting an LDM organiser from a notification is audited, then opens the v2 or v1 event e-mail screen as a guest message (never as "contact organiser") |
| MessageDetail | `BR-UBTCON-623` | confirmed | A notification message can be opened without being logged in; the bottom navigation bar is shown only to a logged-in user |
| MessageDetail | `BR-UBTCON-625` | confirmed | Leaving a message for the notification list goes to the new Notifications screen when the new-notifications flag is on, otherwise to the legacy message list |
| MessageDetail | `BR-UBTCON-626` | confirmed | Pressing back on a message that has no page to return to (for example, opened straight from a push) sends the user to the home feed instead of leaving the app |
| MessageDetail | `BR-UBTCON-627` | confirmed | A "shared with you" notification opens the shared object: household, update or own household → household page; OneSchool Global, supper meeting and feed item → their pages; any other type does nothing |
| MessageList | `BR-UBTCON-624` | confirmed | The legacy notification list opens for anonymous users too, clears the device's notification tray when it appears, and shows the bottom bar only when logged in |
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
| BackNavigationHandler | 17 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/ui/group-page.md:19`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/ui/app-shell.md:30`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/xcut/settings-and-integrations.md:52`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/rules/BR-CMOB-015.md:32`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/rules/BR-CMOB-002.md:7` |
| Get_UI_UpdateItems_UnreadCount_All | 7 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/updates/build/behaviour.md:184`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:83` |
| ScreenBlock_MessageDetail | 65 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/messages/build/behaviour.md:172`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/messages/build/behaviour.md:178`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/messages/build/behaviour.md:184`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/messages/build/behaviour.md:190`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/messages/build/behaviour.md:196` |
| ScreenBlock_MessageList | 53 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/messages/build/behaviour.md:112`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/messages/build/behaviour.md:118`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/messages/build/behaviour.md:124`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/messages/build/behaviour.md:130`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/messages/build/behaviour.md:136` |
