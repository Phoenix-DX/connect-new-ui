# KB index of UI flow App_Common

KB root: `../ubt_sharing_kb/connect/outsystems/apps` (os-kb extraction of Connect, DEV, 2026-10-05). Rules quote the model and say `confirmed` or `inferred`.
Read the UI pages fully; open a rule file only for the rules the report cites.

## UI pages of UBTConnect that name the flow or its screens

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/app-shell.md` — App shell — start, login, layouts and the common in-layout block (flows `App_Common`, `App_Cache`, `SubLayout`) (23 names of this flow, 37 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/design-tokens.md` — Design tokens used across UBTConnect (whole module) (6 names of this flow, 2 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/bookmarks.md` — Bookmarks (flow `Bookmarks`) — the Connect 2 bookmarks list (3 names of this flow, 13 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/home-feed.md` — Home (flow `Home`) — home feed, services, updates and the embedded news feed (3 names of this flow, 17 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-notifications.md` — My Notifications — legacy (flow `Legacy_MyNotificationsFlow`) (3 names of this flow, 8 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/menu.md` — Menu, Terms & Policies and the menu list block (flow `App_Menu`) (3 names of this flow, 8 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/pin.md` — PIN register, unlock and change (flow `App_PIN`) and PIN & Biometrics (flow `App_Menu`) (3 names of this flow, 14 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/policies.md` — Policy acceptance (flow `App_Policies`) (3 names of this flow, 12 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-orbit.md` — Orbit (flows `Legacy_OrbitEventsFlow`, `Legacy_OrbitQRCodeFlow`, `Legacy_OrbitAdminFlow`) (2 names of this flow, 12 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/notes.md` — Notes (flow `Notes`) — the "My notes" list (2 names of this flow, 12 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/notifications.md` — Notifications (flow `App_Notifications`) (2 names of this flow, 12 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/updates.md` — Updates feed screen (flow `Directory_Updates`) (2 names of this flow, 26 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/calendar.md` — My Calendar and the calendar blocks (flows `Calendar`, `Calendar_Events`) (1 names of this flow, 35 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/common-blocks.md` — Common blocks and pop-up dialogs (flows `App_Common_Blocks`, `App_Common_Blocks_PopupDialogs`) (1 names of this flow, 5 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/contact-us.md` — Contact Us (flow `App_Menu_ContactUs`) (1 names of this flow, 14 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/directory-locality.md` — Directory — countries and localities (flows `Directory_Locality`, `Directory_Interchange`, `Directory_CommonBlocks`, `zDEV_Directory_CommunityBusinessBlocks`) (1 names of this flow, 33 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/filter-sort-sheets.md` — Filter, sort and more-action sheets (flow `App_CommonBlocks_Filter`) (1 names of this flow, 15 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-assemble.md` — Assemble (flow `Legacy_AssembleFlow`) (1 names of this flow, 6 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-bookmarks.md` — My Bookmarks — legacy (flow `Legacy_MyBookmarks`) (1 names of this flow, 3 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-share.md` — Share — legacy (flow `Legacy_Share`) (1 names of this flow, 12 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/map.md` — Map (flow `Map`) — explore map, preview, explore list and layer caches (1 names of this flow, 27 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/personal-events.md` — Personal events (flow `Deprecated_Calendar_PersonalEvent`) (1 names of this flow, 39 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/ztemp-flow.md` — zTemp_Flow — two scratch screens (1 names of this flow, 0 rules)

## Logic pages and cross-cut pages that name the flow's actions

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/session-and-sync.md`: Connect_Logout, Connect_SetLoggedContext, GetUserInformation_Wrapper, GetUserInformation_Wrapper_Assign, OfflineDataSync, OpenGooglePlay_UBTConnect, Sync_Info_Main, Sync_SetSiteProperties, Sync_UserInfo_TriggerCache, TriggerOfflineDataSync, Upgrade_UBTConnect, Sync_Info_GetMain … +2
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/client-variables.md`: Connect_Logout, Connect_SetLoggedContext, GetUserInformation_Wrapper_Assign, OfflineDataSync, Set_InitialClientVariables, ShowCommunicationExceptionMessage, Sync_Info_Main, Sync_Info_GetMain
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-app-start-and-login.md`: Connect_SetLoggedContext, GetColdStartLinkURL, SetResumeLoginLink, Set_InitialClientVariables, TriggerOfflineDataSync, Login, Splash
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/app-version.md`: Get_IsUnsupportedSystem, Get_IsUnsupportedVersion, OpenGooglePlay_UBTConnect, Try_GetIsSupportedVersion, Upgrade_UBTConnect, Upgrade_WebView
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/error-messages.md`: Connect_Logout, ShowCommunicationExceptionMessage, ShowExceptionMessage, Login
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/validation.md`: InvalidPermissions, Login, Splash
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/push-and-deeplinks.md`: GetColdStartLinkURL, GetURLFromEventDataURL
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-legacy-flows.md`: GetURLFromEventDataURL, SetResumeLoginLink
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-pin-and-policy-gates.md`: Login, Splash
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-updates-feed-sections.md`: Directory_Updates_RefreshBottomBarCount

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
| Connect_Logout | `BR-UBTCON-208` | confirmed | Logging out clears every device cache first, then hands over to the App Manager logout |
| Connect_SetLoggedContext | `BR-UBTCON-200` | confirmed | The logged context (user-info cache warm-up, bookmark, note and unread-count sync) is set only when a user is logged in; for an anonymous caller the action does nothing |
| Connect_SetLoggedContext | `BR-UBTCON-201` | confirmed | After a login the device stores are rebuilt from a fresh server sync; on any other call they are rebuilt from the lists the caller passes in |
| Connect_SetLoggedContext | `BR-UBTCON-202` | confirmed | The bookmark, note and notification "synched" flags are set to True after the sync calls without checking that any of them succeeded |
| Directory_Updates_RefreshBottomBarCount | `BR-UBTCON-171` | confirmed | The bottom-bar unread badge is refetched from the server only when the configured number of minutes has passed since the last check, or when forced |
| ExitApplicationForWebViewUpdate | `BR-UBTCON-506` | confirmed | The app closes itself after the given delay only where the Cordova exitApp API exists; elsewhere nothing happens |
| GetColdStartLinkURL | `BR-UBTCON-229` | confirmed | On a cold start the app opens the Android App Links URL when there is one, and falls back to the deeplinks plugin's URL |
| GetURLFromEventDataURL | `BR-UBTCON-515` | confirmed | A shared link from the web share page is rewritten into the app's ConnectShare route, and a doubled "UBTConnect/" segment is collapsed |
| GetUserInformation_Wrapper_Assign | `BR-UBTCON-530` | confirmed | Whether the user still has policies to accept is copied from the cached user information onto the device |
| Get_IsUnsupportedSystem | `BR-UBTCON-232` | confirmed | The system is unsupported when either the app version or the browser (WebView) version is unsupported |
| Get_IsUnsupportedVersion | `BR-UBTCON-231` | confirmed | The app version is unsupported when the native shell version is unsupported; the WebView counts as unsupported for the WebView flag only on Android |
| HandleOnResumeOpenLink | `BR-UBTCON-632` | confirmed | A link that arrives while the app is running is opened at once only for a logged-in, unlocked, ready user; otherwise it is parked and opened after login or unlock |
| HandleOnResumeOpenLink | `BR-UBTCON-633` | confirmed | Deep links to a notification message or an Assemble event are ignored here because the push plugin opens them; every other deep link is processed |
| Login | `BR-UBTCON-300` | confirmed | On an unsupported app or WebView version the login screen stops initialising and shows the unsupported-version card instead of the login buttons |
| Login | `BR-UBTCON-301` | confirmed | Arriving from the invalid-permissions screen skips registering the App Manager login callback — but no navigation in UBTConnect passes that flag as True |
| Login | `BR-UBTCON-302` | confirmed | Coming from a PIN reset, a freshly opened login screen starts the login flow by itself and then logs the App Manager session out |
| Login | `BR-UBTCON-303` | confirmed | Login and Forgot Password are mutually exclusive: each button shows its own spinner and disables the other until the App Manager answers or an exception occurs |
| Login | `BR-UBTCON-304` | confirmed | A successful App Manager callback sets the logged context with a fresh server sync, triggers offline sync and replaces the login screen in history; a failed one shows the App Manager's own message |
| Login | `BR-UBTCON-305` | confirmed | After a successful callback the login screen routes by callback type: login goes Home, a password reset shows a success toast, a pending PIN goes to PIN registration |
| Login | `BR-UBTCON-306` | confirmed | When the login screen is opened by an invalid-device callback it shows the device-awareness (security warning) pop-up; otherwise it shows any delayed message |
| MenuIcon | `BR-UBTCON-339` | confirmed | The header icon is hidden when the screen asks for no menu action and turns into a Back arrow (mirrored in right-to-left) when it asks for Back |
| OfflineDataSync | `BR-UBTCON-520` | confirmed | The offline data synchronization does nothing: the action goes straight from Start to End and ignores SyncUnit |
| OfflineDataSyncConfiguration | `BR-UBTCON-521` | confirmed | Offline sync is set to start automatically when the device comes online, at login and on resume, with no retry on error |
| OfflineDataSyncEvents | `BR-UBTCON-340` | confirmed | An offline sync run ends as success, as a retryable error, or — on a security exception — as a non-retryable error |
| OpenGooglePlay_Chrome | `BR-UBTCON-524` | confirmed | The Chrome update link opens the Google Play page of package com.android.chrome |
| OpenGooglePlay_UBTConnect | `BR-UBTCON-526` | confirmed | The app update link opens the Google Play page of the running app's own package name |
| OpenGooglePlay_WebView | `BR-UBTCON-525` | confirmed | The WebView update link opens the Google Play page of package com.google.android.webview |
| Policy_Checker | `BR-UBTCON-940` | confirmed | While the device flag says policies are pending, every screen whose layout does not opt out is redirected to Accept Pending Policies |
| SetResumeLoginLink | `BR-UBTCON-527` | confirmed | A deep link to open after login is parked on the page window, where GetResumeLoginLink later reads and clears it |
| Set_InitialClientVariables | `BR-UBTCON-528` | confirmed | At every app start the photobook carousel speed is set to eight seconds |
| ShowCommunicationExceptionMessage | `BR-UBTCON-213` | confirmed | A connectivity error is reported as a service interruption when the device is known to be online, and as "No internet connection" otherwise |
| ShowExceptionMessage | `BR-UBTCON-210` | confirmed | The error "No role validation found" is never shown to the user |
| ShowExceptionMessage | `BR-UBTCON-211` | confirmed | An "Authorization has been denied for this request." error is shown as a missing-Connect-plan message and logs the user out |
| ShowExceptionMessage | `BR-UBTCON-212` | confirmed | Timeouts, failed HTTP requests and missing resources are all shown as the generic connectivity message, never as the raw error |
| ShowExceptionMessage | `BR-UBTCON-214` | confirmed | An expired paid subscription is shown with the server's own message under "Subscription Status Update" and logs the user out |
| ShowExceptionMessage | `BR-UBTCON-215` | confirmed | When the account is active on another device the user is told they have been logged out — but this action does not log them out |
| ShowExceptionMessage | `BR-UBTCON-216` | confirmed | Three account-access errors are shown with the server's own text under a fixed title, without logging out |
| ShowExceptionMessage | `BR-UBTCON-217` | confirmed | A generic "An error has occurred." from the server is reworded as a high-traffic service interruption, shown as information |
| ShowExceptionMessage | `BR-UBTCON-218` | confirmed | A database query error is shown as "Temporarily Unavailable — Something went wrong, please try again later" |
| ShowExceptionMessage | `BR-UBTCON-219` | confirmed | A closed-connection error is shown as an unexpected error that asks the user to contact their regional administrator |
| ShowExceptionMessage | `BR-UBTCON-220` | confirmed | A missing-Google-Maps error and a distributed-transaction error are shown with their raw text after a 500 ms delay |
| ShowExceptionMessage | `BR-UBTCON-221` | confirmed | Any other error is shown to the user verbatim as a debounced error toast |
| ShowExceptionMessage | `BR-UBTCON-222` | confirmed | After the toast, a forced logout clears the device caches, logs out and sends the user to the Login screen |
| Splash | `BR-UBTCON-307` | confirmed | A cold-start deep link is parked for after login whenever the user still has to register or unlock a PIN, or is not logged in |
| Splash | `BR-UBTCON-308` | confirmed | When the splash animation finishes, a logged-in user is sent to PIN registration or PIN unlock if needed; otherwise everyone goes to the cold-start link, or failing that to the last URL |
| Splash | `BR-UBTCON-309` | confirmed | While the splash is up every navigation is held back; when loading completes the last URL is set to the loader's redirect URL unless a navigation was intercepted and a last URL already exists |
| Sync_Info_GetMain | `BR-UBTCON-203` | confirmed | Orbit static entities are synced only on the non-login (app start) sync; bookmarks and notes are fetched on both |
| Sync_Info_Main | `BR-UBTCON-204` | confirmed | Any failure of the main sync is swallowed: the action ends normally with empty outputs and the server site properties are not applied |
| Sync_SetSiteProperties | `BR-UBTCON-529` | confirmed | The only server site property the device applies is how many months the updates feed shows |
| Sync_UserInfo_TriggerCache | `BR-UBTCON-207` | confirmed | Warming the user-info cache at start or login never fails the caller: any error is logged and ignored |
| Try_GetIsSupportedVersion | `BR-UBTCON-233` | confirmed | If the version check fails, the app treats both the native version and the WebView as supported |
| UnsupportedVersion_Wrapper | `BR-UBTCON-337` | confirmed | An unsupported native app gets the upgrade-app card; otherwise an unsupported Android WebView gets the update-WebView card; otherwise the unsupported-browser card — and Back is blocked while it shows |
| Upgrade_WebView | `BR-UBTCON-234` | confirmed | To update the WebView, Android below 10 is sent to the Chrome store page and Android 10+ to Android System WebView, then the app closes after 10 seconds |
| UserInfo | `BR-UBTCON-338` | confirmed | The template user-info block logs out through the App Manager directly, skipping the app's cache-clearing logout — the block is not used anywhere |
| Version | `BR-UBTCON-336` | confirmed | The version label reads "App version" followed by the environment in upper case, the native version and the runtime version in brackets, each only when known |

## Referenced modules: pages that name the referenced blocks and the server/service actions

| Name | Hits | Where (first 5) |
|---|---|---|
| ActionConfirmationDialog | 4 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/ui/notes.md:17` |
| Animate | 0 | - |
| AppManager_Events | 5 | `../ubt_sharing_kb/connect/outsystems/apps/ubt-appmanager/modules/UBT_AppManager/rules/BR-UAM-464.md:30`<br>`../ubt_sharing_kb/connect/outsystems/apps/ubt-appmanager/modules/UBT_AppManager/rules/BR-UAM-463.md:34` |
| ApplicationLoadEvents | 5 | - |
| BackNavigationHandler | 17 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/ui/group-page.md:19`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/ui/app-shell.md:30`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/xcut/settings-and-integrations.md:52`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/rules/BR-CMOB-015.md:32`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/rules/BR-CMOB-002.md:7` |
| BlankSlate | 3 | - |
| BottomBarItem | 25 | `../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/module.md:85`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/rules/BR-CMOB-010.md:19`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/rules/BR-CMOB-010.md:21`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/rules/BR-CMOB-010.md:23`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/rules/BR-CMOB-010.md:25` |
| Button | 30 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-698.md:29`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-696.md:28` |
| ButtonLoading | 8 | - |
| CustomContainer | 19 | - |
| CustomText | 9 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:13`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/design-tokens.md:20` |
| Dialog_AccessRestrictedAction | 15 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/subscription-access/build/behaviour.md:70` |
| Get_UI_UpdateItems_UnreadCount_All | 7 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/updates/build/behaviour.md:184`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:83` |
| HandleImageLoadError | 2 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/ui/components.md:18` |
| Icon | 26 | - |
| LayoutRuntime_Top | 1 | - |
| Layout_LoginFlow | 4 | - |
| LoadingDots | 3 | - |
| NavigationHandler | 95 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/module.md:7`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/module.md:63`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/module.md:7`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/module.md:66`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/module.md:78` |
| OfflineDataSyncCore | 4 | - |
| PreventBackNavigation | 11 | `../ubt_sharing_kb/connect/outsystems/apps/ubt-appmanager/modules/UBT_AppManager/rules/BR-UAM-459.md:31`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/contact-popups.md:35` |
| ProgressBar | 3 | - |
| PullToRefresh | 1 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/rules/BR-C2LEG-466.md:25` |
| SVG_Background_Custom | 2 | - |
| Sync_Info_GetMain | 16 | - |
| Tile | 2 | - |
| User_GetName | 1 | - |
