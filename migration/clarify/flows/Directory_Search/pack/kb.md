# KB index of UI flow Directory_Search

KB root: `../ubt_sharing_kb/connect/outsystems/apps` (os-kb extraction of Connect, DEV, 2026-10-05). Rules quote the model and say `confirmed` or `inferred`.
Read the UI pages fully; open a rule file only for the rules the report cites.

## UI pages of UBTConnect that name the flow or its screens

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/search.md` — Directory search (flow `Directory_Search`) (4 names of this flow, 12 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/filter-sort-sheets.md` — Filter, sort and more-action sheets (flow `App_CommonBlocks_Filter`) (2 names of this flow, 15 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/directory-locality.md` — Directory — countries and localities (flows `Directory_Locality`, `Directory_Interchange`, `Directory_CommonBlocks`, `zDEV_Directory_CommunityBusinessBlocks`) (1 names of this flow, 33 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/home-feed.md` — Home (flow `Home`) — home feed, services, updates and the embedded news feed (1 names of this flow, 17 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/notifications.md` — Notifications (flow `App_Notifications`) (1 names of this flow, 12 rules)

## Logic pages and cross-cut pages that name the flow's actions

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/app-version.md`: Get_IsUnsupportedSystem, Get_IsUnsupportedVersion, OpenGooglePlay_UBTConnect, Try_GetIsSupportedVersion, Upgrade_UBTConnect, Upgrade_WebView
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/session-and-sync.md`: GetUserInformation_Wrapper_Assign, OfflineDataSync, OpenGooglePlay_UBTConnect, Upgrade_UBTConnect
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/client-variables.md`: GetUserInformation_Wrapper_Assign, OfflineDataSync, Search
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-misc-date-actions.md`: ValidateSearchPhoneNumber, Search
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-legacy-flows.md`: GetURLFromEventDataURL, SetResumeLoginLink
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-updates-feed-sections.md`: Directory_Updates_RefreshBottomBarCount
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/helpers.md`: App_CommonFilter_DefineOptionNames
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/push-and-deeplinks.md`: GetURLFromEventDataURL
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/region-access.md`: App_CommonFilter_CheckCountry
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-app-start-and-login.md`: SetResumeLoginLink

## Rules (BR-UBTCON-*) whose source element is a screen, block or action of the flow

| Element | Rule | Confidence | Title |
|---|---|---|---|
| App_CommonFilter_CheckCountry | `BR-UBTCON-256` | confirmed | A country is enabled in the common filter when it matches one of the subscribed countries by code, ignoring case and surrounding spaces |
| App_CommonFilter_DefineOptionNames | `BR-UBTCON-269` | confirmed | The filter's selected-names list is rebuilt from the selected ids, matched case-insensitively; options without a display text are skipped |
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
| FilterSheet | `BR-UBTCON-321` | confirmed | Country and locality filters are only built for a paid plan, and only once the cached country/locality list and the user's subscription have both loaded |
| FilterSheet | `BR-UBTCON-322` | confirmed | On any plan other than Global each country option is enabled only if it is one of the user's subscribed countries |
| FilterSheet | `BR-UBTCON-323` | confirmed | The locality list follows the country selection: all localities when "All" countries is selected, otherwise only those of the selected countries; previously chosen localities survive only if still listed |
| FilterSheet | `BR-UBTCON-324` | confirmed | The sheet opens with the caller's current filter preselected, or "All" when nothing is selected — but the locality preselection copies country ids |
| FilterSheet | `BR-UBTCON-325` | confirmed | When sorting is enabled the sheet adds one sort choice that defaults to Yes (newest first) unless the caller passed a sort; when sorting is disabled any existing sort choice is removed |
| FilterSheet | `BR-UBTCON-326` | confirmed | A free user whose sheet would offer only country/locality filters is told to upgrade instead of opening the sheet |
| FilterSheet | `BR-UBTCON-328` | confirmed | Filter changes take effect only on Apply: Apply is disabled until something changed, Clear is disabled when already clear and applies immediately, and closing the sheet discards unapplied changes |
| FilterSheet | `BR-UBTCON-329` | confirmed | A sheet with exactly one filter opens straight into that filter's option list, and Back from the list closes the sheet |
| FilterSheet | `BR-UBTCON-330` | confirmed | Choosing "All" countries resets the locality selection to "All"; choosing specific countries re-filters the locality list |
| FilterSheet_Icon | `BR-UBTCON-327` | confirmed | The filter icon ignores taps until the sheet has loaded; then it either opens the upgrade pop-up or opens the filter sheet |
| FilterSheet_OptionChoice_Item | `BR-UBTCON-333` | confirmed | A yes/no filter choice offers a third "none" option only when the caller gives it a label |
| FilterSheet_OptionList_Item | `BR-UBTCON-331` | confirmed | Searching a filter list matches option names ignoring case and accents; the "All" option is offered only when not searching and the list allows it; an empty search result shows a no-results message |
| FilterSheet_OptionList_Item | `BR-UBTCON-332` | confirmed | Tapping a locked (not enabled) country or locality opens the upgrade pop-up instead of selecting it |
| GetURLFromEventDataURL | `BR-UBTCON-515` | confirmed | A shared link from the web share page is rewritten into the app's ConnectShare route, and a doubled "UBTConnect/" segment is collapsed |
| GetUserInformation_Wrapper_Assign | `BR-UBTCON-530` | confirmed | Whether the user still has policies to accept is copied from the cached user information onto the device |
| Get_IsUnsupportedSystem | `BR-UBTCON-232` | confirmed | The system is unsupported when either the app version or the browser (WebView) version is unsupported |
| Get_IsUnsupportedVersion | `BR-UBTCON-231` | confirmed | The app version is unsupported when the native shell version is unsupported; the WebView counts as unsupported for the WebView flag only on Android |
| HandleOnResumeOpenLink | `BR-UBTCON-632` | confirmed | A link that arrives while the app is running is opened at once only for a logged-in, unlocked, ready user; otherwise it is parked and opened after login or unlock |
| HandleOnResumeOpenLink | `BR-UBTCON-633` | confirmed | Deep links to a notification message or an Assemble event are ignored here because the push plugin opens them; every other deep link is processed |
| OfflineDataSync | `BR-UBTCON-520` | confirmed | The offline data synchronization does nothing: the action goes straight from Start to End and ignores SyncUnit |
| OfflineDataSyncConfiguration | `BR-UBTCON-521` | confirmed | Offline sync is set to start automatically when the device comes online, at login and on resume, with no retry on error |
| OfflineDataSyncEvents | `BR-UBTCON-340` | confirmed | An offline sync run ends as success, as a retryable error, or — on a security exception — as a non-retryable error |
| OpenGooglePlay_Chrome | `BR-UBTCON-524` | confirmed | The Chrome update link opens the Google Play page of package com.android.chrome |
| OpenGooglePlay_UBTConnect | `BR-UBTCON-526` | confirmed | The app update link opens the Google Play page of the running app's own package name |
| OpenGooglePlay_WebView | `BR-UBTCON-525` | confirmed | The WebView update link opens the Google Play page of package com.google.android.webview |
| Policy_Checker | `BR-UBTCON-940` | confirmed | While the device flag says policies are pending, every screen whose layout does not opt out is redirected to Accept Pending Policies |
| ScreenBlock_Search | `BR-UBTCON-879` | confirmed | A submitted directory search is checked as a phone number first; an invalid phone search shows an error and does not search |
| ScreenBlock_Search | `BR-UBTCON-880` | confirmed | A non-blank search term is saved to the user's recent terms, loading placeholders are shown for the categories in scope, and the directory is searched with the term, the first selected country and the category |
| ScreenBlock_Search | `BR-UBTCON-881` | confirmed | A result section is shown only when it has results and the selected category covers it; the empty state appears when no section has results and nothing is loading |
| ScreenBlock_Search | `BR-UBTCON-882` | confirmed | Tapping a result the user's plan cannot open shows the upgrade pop-up; any other result is remembered as recently opened and opens a locality, or a household (carousel or details) |
| ScreenBlock_Search | `BR-UBTCON-883` | confirmed | Recently opened results are capped per entity type at the client limit; the entries past the limit in SearchedOn order are deleted |
| ScreenBlock_Search | `BR-UBTCON-884` | confirmed | Recent results (5) and recent terms (10) are the current user's, for the current search target, narrowed by the typed text and the chosen category; the 'Global target' fallback can never match |
| ScreenBlock_Search | `BR-UBTCON-885` | confirmed | With birthday search enabled, typing a term containing 'birthday' replaces the recent list with birthday search options; choosing one searches for it |
| ScreenBlock_Search | `BR-UBTCON-886` | confirmed | Recent searches show before the first search and again while the user edits the term after a search; results show once a search has been submitted |
| ScreenBlock_Search | `BR-UBTCON-887` | confirmed | Changing the category chip or the country filter re-runs the current search at once, without the phone-number check, and saves the term as recent |
| ScreenBlock_Search | `BR-UBTCON-888` | confirmed | 'Clear all' deletes every recent term and every recently opened result of the user for the current search target; a single term can be removed on its own |
| SetResumeLoginLink | `BR-UBTCON-527` | confirmed | A deep link to open after login is parked on the page window, where GetResumeLoginLink later reads and clears it |
| Try_GetIsSupportedVersion | `BR-UBTCON-233` | confirmed | If the version check fails, the app treats both the native version and the WebView as supported |
| UnsupportedVersion_Wrapper | `BR-UBTCON-337` | confirmed | An unsupported native app gets the upgrade-app card; otherwise an unsupported Android WebView gets the update-WebView card; otherwise the unsupported-browser card — and Back is blocked while it shows |
| Upgrade_WebView | `BR-UBTCON-234` | confirmed | To update the WebView, Android below 10 is sent to the Chrome store page and Android 10+ to Android System WebView, then the app closes after 10 seconds |
| ValidateSearchPhoneNumber | `BR-UBTCON-178` | confirmed | A directory search term that is all digits (optionally with a leading +) must have at least 4 digits; one that looks like a phone number but mixes in other number characters is rejected; anything with letters is accepted as a name search |
| ValidateSearchPhoneNumber | `BR-UBTCON-179` | confirmed | An invalid phone search shows "Please enter a valid phone number" |

## Referenced modules: pages that name the referenced blocks and the server/service actions

| Name | Hits | Where (first 5) |
|---|---|---|
| Columns_Two | 1 | - |
| Connect_Search | 15 | - |
| CustomContainer | 19 | - |
| CustomText | 9 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:13`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/design-tokens.md:20` |
| Gallery | 3 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/ui/landing.md:34` |
| Get_SearchResultsVisibilityStatus | 0 | - |
| Get_UI_UpdateItems_UnreadCount_All | 7 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/updates/build/behaviour.md:184`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:83` |
| HorizontalTagList | 7 | - |
| Icon | 26 | - |
| IconText | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:62`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/rules/BR-C2UTL-317.md:22` |
| Input | 87 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:23`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:81`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:104`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:141`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:169` |
| Layout_DetailPage | 7 | - |
| ListAppend | 54 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-807.md:20`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/module.md:66`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/rules/BR-C2LEG-301.md:19`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/rules/BR-C2LEG-301.md:20`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_Assemble_IS/module.md:50` |
| ListFilter | 81 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyCalendar_CS/logic/event-sources.md:19`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/rules/BR-C2LEG-185.md:21`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_BL/rules/BR-C2LEG-318.md:21`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_BL/rules/BR-C2LEG-320.md:19`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_BL/rules/BR-C2LEG-320.md:21` |
| SearchResult_Item | 19 | - |
| SkeletonSection | 15 | - |
| UBT_LazyImage | 29 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/ui-components/build/overview.md:75`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/ui-components/build/behaviour.md:286`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/ui-components/build/behaviour.md:292` |
