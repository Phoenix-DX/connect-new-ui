# KB index of UI flow Legacy_Share

KB root: `../ubt_sharing_kb/connect/outsystems/apps` (os-kb extraction of Connect, DEV, 2026-10-05). Rules quote the model and say `confirmed` or `inferred`.
Read the UI pages fully; open a rule file only for the rules the report cites.

## UI pages of UBTConnect that name the flow or its screens

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-share.md` — Share — legacy (flow `Legacy_Share`) (4 names of this flow, 12 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/app-shell.md` — App shell — start, login, layouts and the common in-layout block (flows `App_Common`, `App_Cache`, `SubLayout`) (2 names of this flow, 37 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/home-feed.md` — Home (flow `Home`) — home feed, services, updates and the embedded news feed (1 names of this flow, 17 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/supper-meetings-oneschool.md` — Supper meetings, OneSchool Global and the entities carousel (1 names of this flow, 13 rules)

## Logic pages and cross-cut pages that name the flow's actions

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/app-version.md`: Get_IsUnsupportedSystem, Get_IsUnsupportedVersion, OpenGooglePlay_UBTConnect, Try_GetIsSupportedVersion, Upgrade_UBTConnect, Upgrade_WebView
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/session-and-sync.md`: GetUserInformation_Wrapper, GetUserInformation_Wrapper_Assign, OfflineDataSync, OpenGooglePlay_UBTConnect, Upgrade_UBTConnect
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/sharing.md`: AuditShareViewEvent, OnInitializeSharingScreen, Get_ShareDetails
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-legacy-flows.md`: GetURLFromEventDataURL, SetResumeLoginLink, ConnectShare
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-misc-date-actions.md`: AuditShareViewEvent, OnInitializeSharingScreen
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/client-variables.md`: GetUserInformation_Wrapper_Assign, OfflineDataSync
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/push-and-deeplinks.md`: GetURLFromEventDataURL
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-app-start-and-login.md`: SetResumeLoginLink
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/validation.md`: OnInitializeSharingScreen

## Rules (BR-UBTCON-*) whose source element is a screen, block or action of the flow

| Element | Rule | Confidence | Title |
|---|---|---|---|
| AuditShareViewEvent | `BR-UBTCON-180` | confirmed | A share-view audit record names the viewing user: when no target user is given, the logged-in user's id is used |
| AuditShareViewEvent | `BR-UBTCON-181` | confirmed | The share-view audit event is built and serialised but never sent: the node that would emit it is disabled, so viewing a shared item leaves no audit trail from this action |
| Block_PINUnlock | `BR-UBTCON-952` | confirmed | On an unsupported app or WebView version the lock screen shows the upgrade notice |
| Block_PINUnlock_ContentWrapper | `BR-UBTCON-948` | confirmed | A wrong PIN shows "Your current PIN is not correct!"; an unknown user shows "No matching user. Please Register a PIN" and is sent to PIN registration; anything else is shown as the plugin reported it |
| Block_PINUnlock_ContentWrapper | `BR-UBTCON-949` | confirmed | Biometric unlock is offered on the lock screen only when the user enabled it on this device, and never when re-entering the PIN from the menu |
| Block_PINUnlock_ContentWrapper | `BR-UBTCON-950` | confirmed | Forgot PIN sends the user to Login flagged as a PIN reset — the logout call on this path is disabled |
| Block_PINUnlock_ContentWrapper | `BR-UBTCON-951` | confirmed | The lock screen links Terms & Conditions and the Privacy Policy, each only when the cached policy has a URL |
| CommonUI_InsideLayout | `BR-UBTCON-310` | confirmed | Every screen that embeds the common layout block shows the PIN unlock overlay unless the user is anonymous, the screen opts out, or PIN registration is still pending |
| CommonUI_InsideLayout | `BR-UBTCON-311` | confirmed | A user who still has policies to accept gets the policy checker on every screen that embeds the common layout block, unless that screen opts out |
| CommonUI_InsideLayout | `BR-UBTCON-312` | confirmed | After PIN registration the next screen sends Back to Home instead of the browser history — a one-shot flag consumed on a fresh render only |
| CommonUI_InsideLayout | `BR-UBTCON-313` | confirmed | Pressing Back on the first page of the history does not leave the app: navigation is prevented and Home opens instead |
| ConnectShare | `BR-UBTCON-628` | confirmed | Returning to a cached share page keeps it open only if it is showing a status message or the subscription alert; otherwise the page steps back out of the way |
| ConnectShare | `BR-UBTCON-629` | confirmed | Opening a share link either arms a redirect to the shared object or, when there is nothing to redirect to, schedules the subscription alert a second later |
| ConnectShare | `BR-UBTCON-630` | confirmed | A recipient who cannot access a shared item is shown the subscription upgrade pop-up |
| ConnectShare | `BR-UBTCON-631` | confirmed | Once the share page is ready, an accessible share replaces itself with the shared object's page: member types → household, OneSchool Global, feed item, supper meeting; an unknown type falls back to the status page |
| ExitApplicationForWebViewUpdate | `BR-UBTCON-506` | confirmed | The app closes itself after the given delay only where the Cordova exitApp API exists; elsewhere nothing happens |
| GetURLFromEventDataURL | `BR-UBTCON-515` | confirmed | A shared link from the web share page is rewritten into the app's ConnectShare route, and a doubled "UBTConnect/" segment is collapsed |
| GetUserInformation_Wrapper_Assign | `BR-UBTCON-530` | confirmed | Whether the user still has policies to accept is copied from the cached user information onto the device |
| Get_IsUnsupportedSystem | `BR-UBTCON-232` | confirmed | The system is unsupported when either the app version or the browser (WebView) version is unsupported |
| Get_IsUnsupportedVersion | `BR-UBTCON-231` | confirmed | The app version is unsupported when the native shell version is unsupported; the WebView counts as unsupported for the WebView flag only on Android |
| HandleOnResumeOpenLink | `BR-UBTCON-632` | confirmed | A link that arrives while the app is running is opened at once only for a logged-in, unlocked, ready user; otherwise it is parked and opened after login or unlock |
| HandleOnResumeOpenLink | `BR-UBTCON-633` | confirmed | Deep links to a notification message or an Assemble event are ignored here because the push plugin opens them; every other deep link is processed |
| OfflineDataSync | `BR-UBTCON-520` | confirmed | The offline data synchronization does nothing: the action goes straight from Start to End and ignores SyncUnit |
| OfflineDataSyncConfiguration | `BR-UBTCON-521` | confirmed | Offline sync is set to start automatically when the device comes online, at login and on resume, with no retry on error |
| OfflineDataSyncEvents | `BR-UBTCON-340` | confirmed | An offline sync run ends as success, as a retryable error, or — on a security exception — as a non-retryable error |
| OnInitializeSharingScreen | `BR-UBTCON-245` | confirmed | Opening a share that the directory reports unavailable shows "This shared item is no longer available" and does not redirect |
| OnInitializeSharingScreen | `BR-UBTCON-246` | confirmed | A shared Feed item is always treated as accessible by the recipient — the app re-applies the rule the server already applies |
| OnInitializeSharingScreen | `BR-UBTCON-247` | confirmed | A share whose item comes back without an id is treated as no longer available |
| OnInitializeSharingScreen | `BR-UBTCON-248` | confirmed | A recipient who cannot access the shared item gets the free-subscription alert and "You don't have access to shared item" |
| OnInitializeSharingScreen | `BR-UBTCON-249` | confirmed | An accessible share redirects to its object, except a shared Update, which redirects to the householder it belongs to |
| OnInitializeSharingScreen | `BR-UBTCON-250` | confirmed | A share view is audited only when opening the share fails — the audit on the success path is disabled |
| OnInitializeSharingScreen | `BR-UBTCON-251` | confirmed | Shared links are always resolved without deceased households |
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
| AndroidAppLinkOnResumeHandler | 2 | - |
| DeeplinkHandlerCentral | 3 | - |
| Dialog_AccessRestrictedAction | 15 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/subscription-access/build/behaviour.md:70` |
| Dialog_AccessRestrictedAction_Legacy | 4 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:30`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/module.md:145` |
| Get_ShareDetails | 37 | - |
| ScreenBlock_ShareDetail | 8 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/ui/sharing.md:18`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/ui/feed-share.md:21` |
| ScreenBlock_ShareObject | 17 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/sharing/build/behaviour.md:78`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/triage.md:125`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/traceability.md:29`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/traceability.md:118`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/findings.md:71` |
