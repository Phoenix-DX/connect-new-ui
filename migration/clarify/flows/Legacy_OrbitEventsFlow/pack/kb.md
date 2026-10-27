# KB index of UI flow Legacy_OrbitEventsFlow

KB root: `../ubt_sharing_kb/connect/outsystems/apps` (os-kb extraction of Connect, DEV, 2026-10-05). Rules quote the model and say `confirmed` or `inferred`.
Read the UI pages fully; open a rule file only for the rules the report cites.

## UI pages of UBTConnect that name the flow or its screens

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-orbit.md` — Orbit (flows `Legacy_OrbitEventsFlow`, `Legacy_OrbitQRCodeFlow`, `Legacy_OrbitAdminFlow`) (11 names of this flow, 12 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/calendar.md` — My Calendar and the calendar blocks (flows `Calendar`, `Calendar_Events`) (3 names of this flow, 35 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/contact-by-email.md` — Contact by email (flow `ContactFlow`) (1 names of this flow, 10 rules)

## Logic pages and cross-cut pages that name the flow's actions

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-legacy-flows.md`: GetURLFromEventDataURL, SetResumeLoginLink, EventBooklet, EventDetail, HostSurvey, MilestoneDetail, OrbitLanding
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/app-version.md`: Get_IsUnsupportedSystem, Get_IsUnsupportedVersion, OpenGooglePlay_UBTConnect, Try_GetIsSupportedVersion, Upgrade_UBTConnect, Upgrade_WebView
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/session-and-sync.md`: OfflineDataSync, OpenGooglePlay_UBTConnect, Upgrade_UBTConnect
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-updates-feed-sections.md`: Directory_Updates_RefreshBottomBarCount
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/helpers.md`: GetNameAndSurname_ByFullName
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
| EmailContact | `BR-UBTCON-607` | confirmed | After an Orbit contact form is submitted, a user who still has Orbit access goes back; one who no longer has it is sent home with the no-access message |
| EventDetail | `BR-UBTCON-600` | confirmed | Every drill-down from an Orbit event (helpdesk, QR code, helpers, host survey, milestone, transport, documents) re-checks Orbit access; without it the user is sent home with a message |
| ExitApplicationForWebViewUpdate | `BR-UBTCON-506` | confirmed | The app closes itself after the given delay only where the Cordova exitApp API exists; elsewhere nothing happens |
| GetNameAndSurname_ByFullName | `BR-UBTCON-259` | confirmed | A full name is split on spaces: the last word is the surname and the words before it are the name |
| GetURLFromEventDataURL | `BR-UBTCON-515` | confirmed | A shared link from the web share page is rewritten into the app's ConnectShare route, and a doubled "UBTConnect/" segment is collapsed |
| Get_IsUnsupportedSystem | `BR-UBTCON-232` | confirmed | The system is unsupported when either the app version or the browser (WebView) version is unsupported |
| Get_IsUnsupportedVersion | `BR-UBTCON-231` | confirmed | The app version is unsupported when the native shell version is unsupported; the WebView counts as unsupported for the WebView flag only on Android |
| GuestArrangements | `BR-UBTCON-606` | confirmed | Contacting the Orbit helpdesk from guest arrangements requires Orbit access; opening a guest's household does not |
| HandleOnResumeOpenLink | `BR-UBTCON-632` | confirmed | A link that arrives while the app is running is opened at once only for a logged-in, unlocked, ready user; otherwise it is parked and opened after login or unlock |
| HandleOnResumeOpenLink | `BR-UBTCON-633` | confirmed | Deep links to a notification message or an Assemble event are ignored here because the push plugin opens them; every other deep link is processed |
| HelpersDetail | `BR-UBTCON-605` | confirmed | Contacting the Orbit helpdesk from the helpers screen requires Orbit access; opening a helper's household does not |
| MilestoneDetail | `BR-UBTCON-602` | confirmed | On a milestone, contacting the Orbit helpdesk and opening guest arrangements require Orbit access; e-mailing the host and opening a household do not |
| OfflineDataSync | `BR-UBTCON-520` | confirmed | The offline data synchronization does nothing: the action goes straight from Start to End and ignores SyncUnit |
| OfflineDataSyncConfiguration | `BR-UBTCON-521` | confirmed | Offline sync is set to start automatically when the device comes online, at login and on resume, with no retry on error |
| OfflineDataSyncEvents | `BR-UBTCON-340` | confirmed | An offline sync run ends as success, as a retryable error, or — on a security exception — as a non-retryable error |
| OpenGooglePlay_Chrome | `BR-UBTCON-524` | confirmed | The Chrome update link opens the Google Play page of package com.android.chrome |
| OpenGooglePlay_UBTConnect | `BR-UBTCON-526` | confirmed | The app update link opens the Google Play page of the running app's own package name |
| OpenGooglePlay_WebView | `BR-UBTCON-525` | confirmed | The WebView update link opens the Google Play page of package com.google.android.webview |
| OrbitLanding | `BR-UBTCON-601` | confirmed | From the Orbit landing page, opening an event or a transport milestone requires Orbit access; the "My calendar" link does not |
| OrbitLanding | `BR-UBTCON-609` | confirmed | Each legacy service's "My calendar" link opens My Calendar pre-filtered to that service's events (Orbit, LDM, Assemble) |
| Policy_Checker | `BR-UBTCON-940` | confirmed | While the device flag says policies are pending, every screen whose layout does not opt out is redirected to Accept Pending Policies |
| SetResumeLoginLink | `BR-UBTCON-527` | confirmed | A deep link to open after login is parked on the page window, where GetResumeLoginLink later reads and clears it |
| TransportDetail | `BR-UBTCON-603` | confirmed | Contacting the Orbit helpdesk from a transport milestone requires Orbit access, and sends the milestone id but no event id |
| Try_GetIsSupportedVersion | `BR-UBTCON-233` | confirmed | If the version check fails, the app treats both the native version and the WebView as supported |
| UnsupportedVersion_Wrapper | `BR-UBTCON-337` | confirmed | An unsupported native app gets the upgrade-app card; otherwise an unsupported Android WebView gets the update-WebView card; otherwise the unsupported-browser card — and Back is blocked while it shows |
| Upgrade_WebView | `BR-UBTCON-234` | confirmed | To update the WebView, Android below 10 is sent to the Chrome store page and Android 10+ to Android System WebView, then the app closes after 10 seconds |
| ViewDocuments | `BR-UBTCON-604` | confirmed | Contacting the Orbit helpdesk from an event's documents requires Orbit access |

## Referenced modules: pages that name the referenced blocks and the server/service actions

| Name | Hits | Where (first 5) |
|---|---|---|
| Get_UI_UpdateItems_UnreadCount_All | 7 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/updates/build/behaviour.md:184`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:83` |
| ScreenBlock_ContactForm | 18 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-events/build/behaviour.md:136`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-events/build/behaviour.md:142`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-events/build/behaviour.md:148`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-events/build/behaviour.md:154`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-events/build/behaviour.md:160` |
| ScreenBlock_EventBooklet | 30 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-events/build/behaviour.md:166`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-events/build/behaviour.md:172`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-events/build/behaviour.md:178`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-events/build/behaviour.md:184`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-events/build/behaviour.md:190` |
| ScreenBlock_EventDetail | 29 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/ui-components/build/behaviour.md:104`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/ldm-events/build/behaviour.md:48`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/ldm-events/build/behaviour.md:54`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/ldm-events/build/behaviour.md:60`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/ldm-events/build/behaviour.md:84` |
| ScreenBlock_GuestArrangements | 13 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-milestones/build/behaviour.md:128`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-milestones/build/behaviour.md:164`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-milestones/build/behaviour.md:182`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-helpers/build/behaviour.md:72`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:63` |
| ScreenBlock_HelperDetails | 16 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-milestones/build/behaviour.md:128`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-milestones/build/behaviour.md:164`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-milestones/build/behaviour.md:170`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-helpers/build/behaviour.md:72`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-helpers/build/behaviour.md:78` |
| ScreenBlock_HostSurvey | 47 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-helpers/build/behaviour.md:36`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-host-survey/build/behaviour.md:80`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-host-survey/build/behaviour.md:86`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-host-survey/build/behaviour.md:92`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-host-survey/build/behaviour.md:98` |
| ScreenBlock_MilestoneWrapper | 13 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-milestones/build/behaviour.md:80`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-milestones/build/behaviour.md:86`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-milestones/build/behaviour.md:92`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_BL/logic/milestone-screens.md:19`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/ui/accommodation.md:12` |
| ScreenBlock_OrbitLanding | 20 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-events/build/behaviour.md:268`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-events/build/behaviour.md:274`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-events/build/behaviour.md:280`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-events/build/behaviour.md:286`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-events/build/behaviour.md:298` |
| ScreenBlock_PassportScan | 1 | `../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/ui/orbit.md:31` |
| ScreenBlock_TransportDetail | 12 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-milestones/build/behaviour.md:128`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-milestones/build/behaviour.md:188`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-milestones/build/behaviour.md:194`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/ui/transport.md:11`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-873.md:5` |
| ScreenBlock_ViewDocuments | 16 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-events/build/behaviour.md:232`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-events/build/behaviour.md:238`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-events/build/behaviour.md:244`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-events/build/behaviour.md:250`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/ui/documents.md:11` |
