# KB index of UI flow Map

KB root: `../ubt_sharing_kb/connect/outsystems/apps` (os-kb extraction of Connect, DEV, 2026-10-05). Rules quote the model and say `confirmed` or `inferred`.
Read the UI pages fully; open a rule file only for the rules the report cites.

## UI pages of UBTConnect that name the flow or its screens

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/map.md` — Map (flow `Map`) — explore map, preview, explore list and layer caches (7 names of this flow, 27 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/design-tokens.md` — Design tokens used across UBTConnect (whole module) (2 names of this flow, 2 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/search.md` — Directory search (flow `Directory_Search`) (2 names of this flow, 12 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/directory-entity-actions.md` — Directory — entity actions bar (`Directory_EntityDetailsActions`, flow `Directory_CommonBlocks`) (1 names of this flow, 14 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/supper-meetings-oneschool.md` — Supper meetings, OneSchool Global and the entities carousel (1 names of this flow, 13 rules)

## Logic pages and cross-cut pages that name the flow's actions

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/app-version.md`: Get_IsUnsupportedSystem, Get_IsUnsupportedVersion, OpenGooglePlay_UBTConnect, Try_GetIsSupportedVersion, Upgrade_UBTConnect, Upgrade_WebView
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/session-and-sync.md`: GetUserInformation_Wrapper_Assign, OfflineDataSync, OpenGooglePlay_UBTConnect, Upgrade_UBTConnect
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/bookmarks-notes.md`: ToggleBookmarkItem_C2, AddBookmark2, DeleteBookmarkByBookmarkId2
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/client-variables.md`: GetShareType_FromEntity, GetUserInformation_Wrapper_Assign, OfflineDataSync
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/helpers.md`: App_CommonFilter_DefineOptionNames, GetNameAndSurname_ByFullName
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/map-cache.md`: Get_ActiveGeoJsonFeatureId, Map
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-legacy-flows.md`: GetURLFromEventDataURL, SetResumeLoginLink
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-misc-date-actions.md`: ValidateSearchPhoneNumber
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-updates-feed-sections.md`: Directory_Updates_RefreshBottomBarCount
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/push-and-deeplinks.md`: GetURLFromEventDataURL
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/region-access.md`: App_CommonFilter_CheckCountry
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/sharing.md`: GetShareType_FromEntity
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-app-start-and-login.md`: SetResumeLoginLink
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-directory-navigation.md`: GetHouseholdDetails
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-map.md`: Map
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/validation.md`: ToggleBookmarkItem_C2

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
| CacheControl_Household | `BR-UBTCON-080` | confirmed | The household map layer is fetched for the whole world, cached on the device for two hours and announced as complete; while it loads, the visible area is fetched instead |
| CommonUI_InsideLayout | `BR-UBTCON-310` | confirmed | Every screen that embeds the common layout block shows the PIN unlock overlay unless the user is anonymous, the screen opts out, or PIN registration is still pending |
| CommonUI_InsideLayout | `BR-UBTCON-311` | confirmed | A user who still has policies to accept gets the policy checker on every screen that embeds the common layout block, unless that screen opts out |
| CommonUI_InsideLayout | `BR-UBTCON-312` | confirmed | After PIN registration the next screen sends Back to Home instead of the browser history — a one-shot flag consumed on a fresh render only |
| CommonUI_InsideLayout | `BR-UBTCON-313` | confirmed | Pressing Back on the first page of the history does not leave the app: navigation is prevented and Home opens instead |
| Directory_EntityDetailsActions | `BR-UBTCON-833` | confirmed | The directory actions bar offers a fixed set of actions per entity type; a Locality raises "Invalid option" and any other type "Bookmarks not available" |
| Directory_EntityDetailsActions | `BR-UBTCON-834` | confirmed | The actions bar fetches contact details for members, OneSchool Global, supper meetings and households only, and only when a call, e-mail or share action needs them |
| Directory_EntityDetailsActions | `BR-UBTCON-835` | confirmed | After fetching, Call is offered when any phone number exists and E-mail when there is an e-mail address or a mobile number; a fetch error disables every action |
| Directory_EntityDetailsActions | `BR-UBTCON-836` | confirmed | Bookmarking from the actions bar uses the Connect 2 bookmark store when the new-bookmarks flag is on, otherwise the legacy store; the menu shows Bookmark or Unbookmark from the local copy |
| Directory_EntityDetailsActions | `BR-UBTCON-837` | confirmed | Share types are resolved only for entity types that can be shared, and the share pop-up exists only with the extended-share flag |
| Directory_EntityDetailsActions | `BR-UBTCON-838` | confirmed | E-mail for a OneSchool Global entry goes straight to the school e-mail form; for anyone else it opens the message-channel pop-up |
| Directory_EntityDetailsActions | `BR-UBTCON-839` | confirmed | Contact pop-ups for OneSchool Global always use the OneSchool Global image (the host image goes to the share sheet), and a host-supplied name replaces the fetched name |
| Directory_EntityDetailsActions | `BR-UBTCON-840` | confirmed | Deleting a note from the actions bar removes it from the shown list and decrements the note count; the bar shows a skeleton until bookmarks and notes have synced |
| Directory_Updates_RefreshBottomBarCount | `BR-UBTCON-171` | confirmed | The bottom-bar unread badge is refetched from the server only when the configured number of minutes has passed since the last check, or when forced |
| ExitApplicationForWebViewUpdate | `BR-UBTCON-506` | confirmed | The app closes itself after the given delay only where the Cordova exitApp API exists; elsewhere nothing happens |
| External_Link | `BR-UBTCON-334` | confirmed | An external link opens through the RedirectToURL external site on iOS and through the in-app browser helper elsewhere |
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
| GetNameAndSurname_ByFullName | `BR-UBTCON-259` | confirmed | A full name is split on spaces: the last word is the surname and the words before it are the name |
| GetShareType_FromEntity | `BR-UBTCON-244` | confirmed | Share type per entity type — "My Household" is chosen only for an entity type that matched none of the earlier cases, so a Household is always shared as Household |
| GetURLFromEventDataURL | `BR-UBTCON-515` | confirmed | A shared link from the web share page is rewritten into the app's ConnectShare route, and a doubled "UBTConnect/" segment is collapsed |
| GetUserInformation_Wrapper_Assign | `BR-UBTCON-530` | confirmed | Whether the user still has policies to accept is copied from the cached user information onto the device |
| Get_ActiveGeoJsonFeatureId | `BR-UBTCON-270` | confirmed | Selecting a map marker outlines its country and zooms to it — unless the marker is locked, which only reports it as locked |
| Get_IsUnsupportedSystem | `BR-UBTCON-232` | confirmed | The system is unsupported when either the app version or the browser (WebView) version is unsupported |
| Get_IsUnsupportedVersion | `BR-UBTCON-231` | confirmed | The app version is unsupported when the native shell version is unsupported; the WebView counts as unsupported for the WebView flag only on Android |
| HandleOnResumeOpenLink | `BR-UBTCON-632` | confirmed | A link that arrives while the app is running is opened at once only for a logged-in, unlocked, ready user; otherwise it is parked and opened after login or unlock |
| HandleOnResumeOpenLink | `BR-UBTCON-633` | confirmed | Deep links to a notification message or an Assemble event are ignored here because the push plugin opens them; every other deep link is processed |
| Map | `BR-UBTCON-067` | confirmed | The map shows countries when zoomed far out, localities and interchanges in the middle range, and supper meetings, households and OneSchool Global only from street level (zoom 10) |
| Map | `BR-UBTCON-068` | confirmed | Marker selection treats zoom 5 as a country zoom, while layer visibility treats it as a locality zoom |
| Map | `BR-UBTCON-069` | confirmed | The only map filter chip is "Household": with it selected, supper meetings and OneSchool Global disappear from the explore list and the map |
| Map | `BR-UBTCON-070` | confirmed | After the map moves, the explore list is rebuilt only at street level inside the fetched area; zooming back out clears the household explore items |
| Map | `BR-UBTCON-071` | confirmed | Tapping a locked country or locality marker opens the subscription upgrade pop-up; an unlocked one is outlined and zoomed to |
| Map | `BR-UBTCON-072` | confirmed | Tapping a household pin takes the household's display name from the explore list when it is there |
| Map | `BR-UBTCON-073` | confirmed | Selecting a household, supper meeting or OneSchool Global zooms to street level 20 and shows its distance from the user when both positions are known |
| Map | `BR-UBTCON-074` | confirmed | A locality search result zooms to just past the entity level (11), a country result to the country level (5); other results open like an explore item |
| Map | `BR-UBTCON-075` | confirmed | Coming back to the map restores the last viewed position and zoom, and refills the map from the screen cache instead of refetching |
| Map | `BR-UBTCON-076` | confirmed | The map opens on the position it was given; without one it centres on the user's location when known |
| Map | `BR-UBTCON-077` | confirmed | Back on the map first closes an open sidebar or the settings panel instead of leaving the screen |
| Map | `BR-UBTCON-078` | confirmed | The "display all details" switch is shown on when name and address visibility are equal — so it also reads on when both are hidden |
| Map | `BR-UBTCON-079` | confirmed | Saving map visibility sends the name and address choices, confirms "Changes saved" and closes settings; errors are re-raised to the app handler |
| Map | `BR-UBTCON-081` | confirmed | The full household layer is added to the map once: the first complete delivery claims the add, later complete deliveries are ignored |
| Map | `BR-UBTCON-082` | confirmed | Tapping a locked country or locality outline opens the subscription upgrade pop-up; an unlocked outline does nothing |
| Map | `BR-UBTCON-088` | confirmed | The map's layer data blocks are mounted only once a street-level area has been projected or the map has reported a zoom above 10, and each block only while its retained layer is empty |
| Map | `BR-UBTCON-089` | confirmed | The explore sheet appears only on the Explore tab; it lists the household, supper-meeting and OneSchool sections that have items, or one section when "See all" was chosen |
| Map | `BR-UBTCON-090` | confirmed | Closing a map preview returns to the explore sheet only when the preview was opened from the explore list |
| Map | `BR-UBTCON-091` | confirmed | The user's position pin is refreshed every 30 seconds while the map is open, replacing the previous pin |
| Map | `BR-UBTCON-092` | confirmed | The map is drawn once location handling is finished, with a loading overlay until countries, localities, global entities and the first household chunk have all arrived |
| Map_ExploreList_Section | `BR-UBTCON-087` | confirmed | Each explore-list section is ordered by distance (as text) then name, cut to its maximum with a "See more" link when longer |
| Map_PoIPreview | `BR-UBTCON-083` | confirmed | The map preview fetches details by type: supper meeting, locality or interchange, country, household or OneSchool Global; an empty type clears the preview |
| Map_PoIPreview | `BR-UBTCON-084` | confirmed | In the map preview a household's address is shown only when the household is flagged hidden — and not deceased, not ancestry, with an address |
| Map_PoIPreview | `BR-UBTCON-085` | confirmed | "View details" in the map preview opens the supper meeting, locality, country, household or OneSchool Global screen — an interchange opens nothing |
| Map_PoIPreview | `BR-UBTCON-086` | confirmed | The preview shows the distance and the action buttons only for households, supper meetings and OneSchool Global |
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
| SupperMeeting_ImageCard_Content | `BR-UBTCON-902` | confirmed | The supper-meeting card shows the address (with address pop-up) only when the caller asks for it |
| ToggleBookmarkItem_C2 | `BR-UBTCON-237` | confirmed | Connect 2 bookmarking: the device copy is created only after the server confirms the add; a failure shows the add-error toast |
| ToggleBookmarkItem_C2 | `BR-UBTCON-238` | confirmed | Connect 2 un-bookmarking: the device copy is deleted only after the server confirms the delete; a failure shows the remove-error toast |
| Try_GetIsSupportedVersion | `BR-UBTCON-233` | confirmed | If the version check fails, the app treats both the native version and the WebView as supported |
| UnsupportedVersion_Wrapper | `BR-UBTCON-337` | confirmed | An unsupported native app gets the upgrade-app card; otherwise an unsupported Android WebView gets the update-WebView card; otherwise the unsupported-browser card — and Back is blocked while it shows |
| Upgrade_WebView | `BR-UBTCON-234` | confirmed | To update the WebView, Android below 10 is sent to the Chrome store page and Android 10+ to Android System WebView, then the app closes after 10 seconds |
| ValidateSearchPhoneNumber | `BR-UBTCON-178` | confirmed | A directory search term that is all digits (optionally with a leading +) must have at least 4 digits; one that looks like a phone number but mixes in other number characters is rejected; anything with letters is accepted as a name search |
| ValidateSearchPhoneNumber | `BR-UBTCON-179` | confirmed | An invalid phone search shows "Please enter a valid phone number" |

## Referenced modules: pages that name the referenced blocks and the server/service actions

| Name | Hits | Where (first 5) |
|---|---|---|
| AddBookmark2 | 7 | - |
| AddressPopup_Wrapper | 26 | - |
| BackNavigationHandler | 17 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/ui/group-page.md:19`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/ui/app-shell.md:30`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/xcut/settings-and-integrations.md:52`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/rules/BR-CMOB-015.md:32`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/rules/BR-CMOB-002.md:7` |
| BottomSheet | 8 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/notes.md:26`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/search-sheet.md:14` |
| BottomSheetAnchor | 0 | - |
| Button | 30 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-698.md:29`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-696.md:28` |
| ButtonLoading | 8 | - |
| CacheControl | 26 | - |
| CircleButton | 1 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:14` |
| CircleButton_IconPrimary | 0 | - |
| Columns_Two | 1 | - |
| Connect_Search | 15 | - |
| CustomContainer | 19 | - |
| CustomText | 9 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:13`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/design-tokens.md:20` |
| DeleteBookmarkByBookmarkId2 | 5 | - |
| EmptyList | 4 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/search-sheet.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/share-sheet.md:31` |
| FetchData_Countries | 4 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Map_CS/logic/map-access-countries-localities.md:9`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Map_CS/module.md:47` |
| FetchData_GlobalLocation | 6 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Map_CS/logic/map-points-of-interest.md:8` |
| FetchData_Households_ByCoordinates | 8 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/findings.md:159`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Map_CS/logic/map-households-and-visibility.md:8`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Map_CS/logic/map-households-and-visibility.md:17` |
| FetchData_Localities | 4 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Map_CS/logic/map-access-countries-localities.md:10`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Map_CS/module.md:47` |
| FetchData_VisibilityPreferences | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Map_CS/logic/map-households-and-visibility.md:11`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Map_CS/module.md:48`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Map_CS/rules/BR-C2SVC-226.md:38` |
| FixedFooter | 2 | - |
| FloatingContent | 1 | - |
| GetHouseholdDetails | 12 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/module.md:49`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/rules/BR-C2LEG-531.md:26` |
| GetNotesByItemId | 10 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/index/build/triage.md:146`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/findings.md:113`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Notes_CS/logic/notes.md:12` |
| GetSubdivisionDetails_BySubdivisionId | 9 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/subdivision/build/behaviour.md:46`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/subdivision/build/behaviour.md:52` |
| GetSubdivisionLocation_BySubdivisionId | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/findings.md:78`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Subdivision_CS/logic/subdivisions-and-interchanges.md:16`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Subdivision_CS/module.md:81` |
| Get_Core_LocalityTimezone | 7 | - |
| Get_OneSchoolGlobalDetails | 14 | - |
| Get_SearchResultsVisibilityStatus | 0 | - |
| Get_UI_CountryStatistics | 11 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/geography/build/behaviour.md:28` |
| Get_UI_LocalityDetailsWithStatistics | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/geography/build/behaviour.md:52`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Geography_CS/logic/locality-and-country-data.md:12`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Geography_CS/logic/locality-and-country-data.md:22`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Geography_CS/rules/BR-C2SVC-095.md:5` |
| Get_UI_UpdateItems_UnreadCount_All | 7 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/updates/build/behaviour.md:184`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:83` |
| HorizontalTagList | 7 | - |
| Icon | 26 | - |
| IconText | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:62`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/rules/BR-C2UTL-317.md:22` |
| ImageCard_LazyLoading | 1 | - |
| ImageCard__Content | 0 | - |
| Input | 87 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:23`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:81`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:104`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:141`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:169` |
| Layout_DetailPage | 7 | - |
| LeafletMap_Updated | 0 | - |
| ListAppend | 54 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-807.md:20`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/module.md:66`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/rules/BR-C2LEG-301.md:19`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/rules/BR-C2LEG-301.md:20`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_Assemble_IS/module.md:50` |
| ListAppendAll | 34 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-796.md:30`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-931.md:32`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/logic/rest-wrappers.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/logic/rest-wrappers.md:23`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/module.md:66` |
| ListFilter | 81 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyCalendar_CS/logic/event-sources.md:19`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/rules/BR-C2LEG-185.md:21`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_BL/rules/BR-C2LEG-318.md:21`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_BL/rules/BR-C2LEG-320.md:19`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_BL/rules/BR-C2LEG-320.md:21` |
| Member_ContactDetails_Service | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/household/build/behaviour.md:328`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Household_CS/logic/member-account.md:3`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Household_CS/rules/BR-C2SVC-151.md:5` |
| NavigationHandler | 95 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/module.md:7`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/module.md:63`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/module.md:7`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/module.md:66`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/module.md:78` |
| NegativeMargin | 0 | - |
| SearchResult_Item | 19 | - |
| SeeMoreSection | 0 | - |
| Sidebar | 0 | - |
| SkeletonSection | 15 | - |
| Statistics_ListItem | 0 | - |
| UBT_LazyImage | 29 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/ui-components/build/overview.md:75`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/ui-components/build/behaviour.md:286`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/ui-components/build/behaviour.md:292` |
| Update_VisibilityPreferences | 7 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/map/build/behaviour.md:178`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Map_CS/logic/map-households-and-visibility.md:11`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Map_CS/logic/map-households-and-visibility.md:15` |
