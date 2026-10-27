# KB index of UI flow Directory_Updates

KB root: `../ubt_sharing_kb/connect/outsystems/apps` (os-kb extraction of Connect, DEV, 2026-10-05). Rules quote the model and say `confirmed` or `inferred`.
Read the UI pages fully; open a rule file only for the rules the report cites.

## UI pages of UBTConnect that name the flow or its screens

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/updates.md` — Updates feed screen (flow `Directory_Updates`) (6 names of this flow, 26 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/design-tokens.md` — Design tokens used across UBTConnect (whole module) (2 names of this flow, 2 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/common-blocks.md` — Common blocks and pop-up dialogs (flows `App_Common_Blocks`, `App_Common_Blocks_PopupDialogs`) (1 names of this flow, 5 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/filter-sort-sheets.md` — Filter, sort and more-action sheets (flow `App_CommonBlocks_Filter`) (1 names of this flow, 15 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/home-feed.md` — Home (flow `Home`) — home feed, services, updates and the embedded news feed (1 names of this flow, 17 rules)

## Logic pages and cross-cut pages that name the flow's actions

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-updates-feed-sections.md`: Directory_Updates_AugmentDateRanges, Directory_Updates_GetBreakpoints, Directory_Updates_GetCarouselPreloadedHouseholds, Directory_Updates_GetListBreakpoint, Directory_Updates_GetUpdatedBreakpoints, Directory_Updates_MarkAllAsRead, Directory_Updates_RefreshBottomBarCount, Action_UI_UpdateItem_MarkAsRead
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/app-version.md`: Get_IsUnsupportedSystem, Get_IsUnsupportedVersion, OpenGooglePlay_UBTConnect, Try_GetIsSupportedVersion, Upgrade_UBTConnect, Upgrade_WebView
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/session-and-sync.md`: GetUserInformation_Wrapper_Assign, OfflineDataSync, OpenGooglePlay_UBTConnect, Upgrade_UBTConnect
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-updates.md`: Action_UI_UpdateItem_MarkAllAsRead, Action_UI_UpdateItem_MarkAsRead, Get_UI_UpdateItems
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-legacy-flows.md`: GetURLFromEventDataURL, SetResumeLoginLink
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/client-variables.md`: GetUserInformation_Wrapper_Assign, OfflineDataSync
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-misc-date-actions.md`: GetSkeletonList_UI_Updates
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/helpers.md`: App_CommonFilter_DefineOptionNames
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/push-and-deeplinks.md`: GetURLFromEventDataURL
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/region-access.md`: App_CommonFilter_CheckCountry
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-app-start-and-login.md`: SetResumeLoginLink
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/validation.md`: Updates_SingleList

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
| BottomBarMenu | `BR-UBTCON-314` | confirmed | Tapping the tab that is already active on a root page scrolls the page to the top instead of navigating |
| BottomBarMenu | `BR-UBTCON-315` | confirmed | Each main bottom-bar tab opens its screen; Directory opens the country list when the C1 directory view is enabled, otherwise the locality page; any other item is handed back to the embedding screen |
| BottomBarMenu | `BR-UBTCON-316` | confirmed | The Bookmarks tab picks one of four screens from two feature flags: bookmark notes (LaunchDarkly) and new bookmarks (OutSystems flag) |
| BottomBarMenu | `BR-UBTCON-317` | confirmed | For a householder the bottom-bar item list is fetched a second time on the first parameter change, then the bar is refreshed |
| BottomBarMenu | `BR-UBTCON-318` | confirmed | Only the Updates tab carries an unread badge, fed from the device's unread-updates count and capped at 9 |
| CommonUI_InsideLayout | `BR-UBTCON-310` | confirmed | Every screen that embeds the common layout block shows the PIN unlock overlay unless the user is anonymous, the screen opts out, or PIN registration is still pending |
| CommonUI_InsideLayout | `BR-UBTCON-311` | confirmed | A user who still has policies to accept gets the policy checker on every screen that embeds the common layout block, unless that screen opts out |
| CommonUI_InsideLayout | `BR-UBTCON-312` | confirmed | After PIN registration the next screen sends Back to Home instead of the browser history — a one-shot flag consumed on a fresh render only |
| CommonUI_InsideLayout | `BR-UBTCON-313` | confirmed | Pressing Back on the first page of the history does not leave the app: navigation is prevented and Home opens instead |
| Directory_Updates_AugmentDateRanges | `BR-UBTCON-160` | confirmed | The updates feed is sectioned into Today, Last 7 days (7 to 1 days ago), Last 30 days (30 to 8 days ago) and Older (from the months-to-show limit up to 31 days ago); a range record outside these four is dropped |
| Directory_Updates_FilterSheet | `BR-UBTCON-878` | confirmed | The updates filter sheet offers sort (newest/oldest), countries, localities and read status (All Updates, Read Only, Unread Only); multi-selected countries and localities are passed as lists, but the server applies only the first |
| Directory_Updates_GetBreakpoints | `BR-UBTCON-163` | confirmed | A section header (breakpoint) is created only for a date range that contains at least one loaded update, positioned at the first update in that range |
| Directory_Updates_GetBreakpoints | `BR-UBTCON-164` | confirmed | Each section's badge shows the number of unread updates in that section |
| Directory_Updates_GetCarouselPreloadedHouseholds | `BR-UBTCON-172` | confirmed | In the home updates carousel only unread households get a swipe action, and that action marks the update read |
| Directory_Updates_GetListBreakpoint | `BR-UBTCON-167` | confirmed | No section transition is reported unless both the current and the previous update dates are known |
| Directory_Updates_GetListBreakpoint | `BR-UBTCON-168` | confirmed | For an oldest-first list the two dates are swapped before the section tests, so the same thresholds detect the transition in the other direction |
| Directory_Updates_GetListBreakpoint | `BR-UBTCON-169` | confirmed | Scrolling between two updates crosses into a section when one is past a boundary (30, 7 or 1 days ago) and the other is not; the returned breakpoint is the section being entered for the list's direction |
| Directory_Updates_GetUpdatedBreakpoints | `BR-UBTCON-165` | confirmed | The section being acted on is the last breakpoint at or before the selected list position |
| Directory_Updates_GetUpdatedBreakpoints | `BR-UBTCON-166` | confirmed | After an update changes state, only that section's badge is recounted as the unread updates within the section's date range |
| Directory_Updates_MarkAllAsRead | `BR-UBTCON-170` | confirmed | Mark-all-as-read on the device flips every loaded unread update to read in the local list only |
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
| GetSkeletonList_UI_Updates | `BR-UBTCON-174` | confirmed | While updates load, the list shows ListLength placeholder cards (4 unless the caller says otherwise) |
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
| SectionHeader | `BR-UBTCON-875` | confirmed | An in-list section header is drawn where the date crosses into a new section, except for the list's first section (Today when newest-first, Older when oldest-first) |
| SectionHeader | `BR-UBTCON-876` | confirmed | When a section header scrolls under the sticky header it becomes the current section; scrolling back above it restores the previous section, and the first section reports nothing |
| SetResumeLoginLink | `BR-UBTCON-527` | confirmed | A deep link to open after login is parked on the page window, where GetResumeLoginLink later reads and clears it |
| Try_GetIsSupportedVersion | `BR-UBTCON-233` | confirmed | If the version check fails, the app treats both the native version and the WebView as supported |
| UnsupportedVersion_Wrapper | `BR-UBTCON-337` | confirmed | An unsupported native app gets the upgrade-app card; otherwise an unsupported Android WebView gets the update-WebView card; otherwise the unsupported-browser card — and Back is blocked while it shows |
| UpdateItem_Header | `BR-UBTCON-877` | confirmed | The sticky updates header shows the section's unread badge only when it is above zero, and the 'mark all as read' link only when the screen allows it |
| Updates_SingleList | `BR-UBTCON-860` | confirmed | The updates list is always requested with an explicit date window: from the start of the 'Older' section (today minus the client's months-to-show) to today |
| Updates_SingleList | `BR-UBTCON-861` | confirmed | Missing filter values default to all read states, newest first, and no country or locality restriction; the first complete filter is remembered as the default state |
| Updates_SingleList | `BR-UBTCON-862` | confirmed | Opening the Updates screen fresh shows ten placeholder rows and reloads date ranges and updates; a view restored from the navigation cache is reused without any server call |
| Updates_SingleList | `BR-UBTCON-863` | confirmed | After the list loads, the sticky header shows the first section that has updates, 'mark all as read' is offered only when the returned unread count is positive, and the bottom-bar badge is force-refreshed |
| Updates_SingleList | `BR-UBTCON-864` | confirmed | 'Mark all as read' sends the screen's whole current filter to the server, then marks the loaded list read, zeroes every section badge and reloads; a failure is swallowed silently |
| Updates_SingleList | `BR-UBTCON-865` | confirmed | Marking one update read or unread updates the server, the row, that section's badge and the 'mark all' link, and force-refreshes the bottom-bar badge |
| Updates_SingleList | `BR-UBTCON-866` | confirmed | Tapping an update marks it read and opens its household — in the household carousel (all accessible updates, swipe-to-read only on unread ones) when the carousel flag is on, otherwise the household details screen |
| Updates_SingleList | `BR-UBTCON-867` | confirmed | Sharing an update opens the share sheet for the update's member only when the extended-share flag is on; otherwise 'coming soon' is shown. The share icon itself appears only for updates the server marks shareable |
| Updates_SingleList | `BR-UBTCON-868` | confirmed | Applying the filter sheet reloads the list only when the filter actually changed |
| Updates_SingleList | `BR-UBTCON-869` | confirmed | Update search runs on submit or clear only, and only when the text differs from the active search |
| Updates_SingleList | `BR-UBTCON-870` | confirmed | The update-type chips (All, Birth, Marriage, Taken) are single-select; picking a different chip filters the list to that type |
| Updates_SingleList | `BR-UBTCON-871` | confirmed | Coming back from the household carousel, every update swiped there is shown read, and the unread count and its section badge drop by one each |
| Updates_SingleList | `BR-UBTCON-872` | confirmed | The 'no updates found' panel appears only after a completed fetch returned nothing |
| Updates_SingleList | `BR-UBTCON-873` | confirmed | A section header is evaluated for every row except the first, and the list is treated as oldest-first whenever the sort is anything other than 'newest' |
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
| Get_UI_UpdateItems | 9 | - |
| Get_UI_UpdateItems_UnreadCount_All | 7 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/updates/build/behaviour.md:184`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:83` |
| HorizontalTagList | 7 | - |
| Icon | 26 | - |
| IconText | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:62`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/rules/BR-C2UTL-317.md:22` |
| Input | 87 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:23`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:81`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:104`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:141`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:169` |
| Layout_MainPages_FixedTitle | 2 | - |
| ScrollAnchor | 3 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/ui/group-page.md:19` |
| ShareSheet | 85 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/ui/group-page.md:24`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_Assemble_MUI/logic/bookmarks-sharing.md:39`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_Assemble_MUI/module.md:61`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_Assemble_MUI/rules/BR-C2LEG-043.md:28`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/rules/BR-C2LEG-528.md:30` |
| SkeletonSection | 15 | - |
| Update_ListItem | 6 | - |
