# KB index of UI flow Directory_Locality

KB root: `../ubt_sharing_kb/connect/outsystems/apps` (os-kb extraction of Connect, DEV, 2026-10-05). Rules quote the model and say `confirmed` or `inferred`.
Read the UI pages fully; open a rule file only for the rules the report cites.

## UI pages of UBTConnect that name the flow or its screens

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/directory-locality.md` — Directory — countries and localities (flows `Directory_Locality`, `Directory_Interchange`, `Directory_CommonBlocks`, `zDEV_Directory_CommunityBusinessBlocks`) (17 names of this flow, 33 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/app-shell.md` — App shell — start, login, layouts and the common in-layout block (flows `App_Common`, `App_Cache`, `SubLayout`) (2 names of this flow, 37 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/search.md` — Directory search (flow `Directory_Search`) (2 names of this flow, 12 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/supper-meetings-oneschool.md` — Supper meetings, OneSchool Global and the entities carousel (2 names of this flow, 13 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/contact-by-email.md` — Contact by email (flow `ContactFlow`) (1 names of this flow, 10 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/directory-household.md` — Directory — households and relations (flows `Directory_Household`, `Directory_Household_Blocks`) (1 names of this flow, 23 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/filter-sort-sheets.md` — Filter, sort and more-action sheets (flow `App_CommonBlocks_Filter`) (1 names of this flow, 15 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/home-feed.md` — Home (flow `Home`) — home feed, services, updates and the embedded news feed (1 names of this flow, 17 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-bookmarks.md` — My Bookmarks — legacy (flow `Legacy_MyBookmarks`) (1 names of this flow, 3 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-share.md` — Share — legacy (flow `Legacy_Share`) (1 names of this flow, 12 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/map.md` — Map (flow `Map`) — explore map, preview, explore list and layer caches (1 names of this flow, 27 rules)

## Logic pages and cross-cut pages that name the flow's actions

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-directory-navigation.md`: HasAccessToRegion, GetHouseholdDetails, BrowseCountries, BrowseDirectory, CountryDetails, CountryList, Locality_Details
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/app-version.md`: Get_IsUnsupportedSystem, Get_IsUnsupportedVersion, OpenGooglePlay_UBTConnect, Try_GetIsSupportedVersion, Upgrade_UBTConnect, Upgrade_WebView
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/bookmarks-notes.md`: GetLocal_Bookmark, GetLocal_Bookmark_C2, ToggleBookmarkItem_C2, AddBookmark2, DeleteBookmarkByBookmarkId2
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/helpers.md`: App_CommonFilter_DefineOptionNames, GetNameAndSurname_ByFullName, GetSample_FilterTags, GetSkeletonList_UI_HouseholdMembers, GetSkeleton_UI_CountryStatistics
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/session-and-sync.md`: GetUserInformation_Wrapper, GetUserInformation_Wrapper_Assign, OfflineDataSync, OpenGooglePlay_UBTConnect, Upgrade_UBTConnect
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/client-variables.md`: GetShareType_FromEntity, GetUserInformation_Wrapper_Assign, OfflineDataSync
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/region-access.md`: App_CommonFilter_CheckCountry, HasAccessToRegion
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-legacy-flows.md`: GetURLFromEventDataURL, SetResumeLoginLink
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/validation.md`: GetSkeletonList_UI_OneSchoolGlobal_ListCard, ToggleBookmarkItem_C2
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-updates-feed-sections.md`: Directory_Updates_RefreshBottomBarCount
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/push-and-deeplinks.md`: GetURLFromEventDataURL
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/sharing.md`: GetShareType_FromEntity
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-app-start-and-login.md`: SetResumeLoginLink

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
| BrowseCountries | `BR-UBTCON-781` | confirmed | In the C1 "browse countries" list a country opens the C1 locality browser only when the plan covers it; otherwise the upgrade pop-up |
| BrowseDirectory | `BR-UBTCON-783` | confirmed | In the C1 locality browser a locality opens only when the plan covers it, with the same label pre-build as the country page |
| BrowseDirectory | `BR-UBTCON-790` | confirmed | The C1 locality browser and the country page name the country from the country table by code, and fall back to "Browse Directory" when the statistics carry no country name |
| CommonUI_InsideLayout | `BR-UBTCON-310` | confirmed | Every screen that embeds the common layout block shows the PIN unlock overlay unless the user is anonymous, the screen opts out, or PIN registration is still pending |
| CommonUI_InsideLayout | `BR-UBTCON-311` | confirmed | A user who still has policies to accept gets the policy checker on every screen that embeds the common layout block, unless that screen opts out |
| CommonUI_InsideLayout | `BR-UBTCON-312` | confirmed | After PIN registration the next screen sends Back to Home instead of the browser history — a one-shot flag consumed on a fresh render only |
| CommonUI_InsideLayout | `BR-UBTCON-313` | confirmed | Pressing Back on the first page of the history does not leave the app: navigation is prevented and Home opens instead |
| CountryDetails | `BR-UBTCON-782` | confirmed | Tapping a locality on a country page opens the locality only when the plan covers it, carrying a pre-built "Locality, Country" label |
| CountryDetails | `BR-UBTCON-786` | confirmed | "Browse countries" on a country page opens the country filter sheet, unless the sheet reported that the user must upgrade, in which case the upgrade pop-up opens |
| CountryDetails | `BR-UBTCON-787` | confirmed | Applying the country filter switches the page to the chosen country, or back to the original country when nothing (or "None") is chosen — without a plan check |
| CountryDetails | `BR-UBTCON-788` | confirmed | The locality search on a country page matches the typed text anywhere in the locality name, ignoring case and accents |
| CountryDetails | `BR-UBTCON-791` | confirmed | The country map renders once the locality statistics have loaded (or failed) and a centre exists; each locality is a pin keyed by its id |
| CountryList | `BR-UBTCON-780` | confirmed | Tapping a country in the country list opens its details only when the user's plan covers that country; otherwise the upgrade pop-up is shown |
| CountryList | `BR-UBTCON-784` | confirmed | "My country" and "My locality" open the user's own country and locality straight from the cached user record, with no plan check |
| CountryList | `BR-UBTCON-785` | confirmed | A directory list restored from the view cache with data already fetched is not refetched; otherwise it shows skeleton rows and refreshes |
| Directory_EmptyState | `BR-UBTCON-810` | confirmed | Directory empty states read "No <entity> <location>" — pluralised with "s" only for interchanges |
| Directory_EntityDetailsActions | `BR-UBTCON-833` | confirmed | The directory actions bar offers a fixed set of actions per entity type; a Locality raises "Invalid option" and any other type "Bookmarks not available" |
| Directory_EntityDetailsActions | `BR-UBTCON-834` | confirmed | The actions bar fetches contact details for members, OneSchool Global, supper meetings and households only, and only when a call, e-mail or share action needs them |
| Directory_EntityDetailsActions | `BR-UBTCON-835` | confirmed | After fetching, Call is offered when any phone number exists and E-mail when there is an e-mail address or a mobile number; a fetch error disables every action |
| Directory_EntityDetailsActions | `BR-UBTCON-836` | confirmed | Bookmarking from the actions bar uses the Connect 2 bookmark store when the new-bookmarks flag is on, otherwise the legacy store; the menu shows Bookmark or Unbookmark from the local copy |
| Directory_EntityDetailsActions | `BR-UBTCON-837` | confirmed | Share types are resolved only for entity types that can be shared, and the share pop-up exists only with the extended-share flag |
| Directory_EntityDetailsActions | `BR-UBTCON-838` | confirmed | E-mail for a OneSchool Global entry goes straight to the school e-mail form; for anyone else it opens the message-channel pop-up |
| Directory_EntityDetailsActions | `BR-UBTCON-839` | confirmed | Contact pop-ups for OneSchool Global always use the OneSchool Global image (the host image goes to the share sheet), and a host-supplied name replaces the fetched name |
| Directory_EntityDetailsActions | `BR-UBTCON-840` | confirmed | Deleting a note from the actions bar removes it from the shown list and decrements the note count; the bar shows a skeleton until bookmarks and notes have synced |
| Directory_Interchange_StatisticsList | `BR-UBTCON-801` | confirmed | Interchange cards ignore taps while loading and show an "No interchanges" empty state only after loading finished |
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
| GetNameAndSurname_ByFullName | `BR-UBTCON-259` | confirmed | A full name is split on spaces: the last word is the surname and the words before it are the name |
| GetSample_FilterTags | `BR-UBTCON-264` | confirmed | Locality filter tags: Households (selected), then My Household only when requested, then Supper meetings, Interchange, OneSchool Global and Locality contacts |
| GetShareType_FromEntity | `BR-UBTCON-244` | confirmed | Share type per entity type — "My Household" is chosen only for an entity type that matched none of the earlier cases, so a Household is always shared as Household |
| GetURLFromEventDataURL | `BR-UBTCON-515` | confirmed | A shared link from the web share page is rewritten into the app's ConnectShare route, and a doubled "UBTConnect/" segment is collapsed |
| GetUserInformation_Wrapper_Assign | `BR-UBTCON-530` | confirmed | Whether the user still has policies to accept is copied from the cached user information onto the device |
| Get_IsUnsupportedSystem | `BR-UBTCON-232` | confirmed | The system is unsupported when either the app version or the browser (WebView) version is unsupported |
| Get_IsUnsupportedVersion | `BR-UBTCON-231` | confirmed | The app version is unsupported when the native shell version is unsupported; the WebView counts as unsupported for the WebView flag only on Android |
| HandleOnResumeOpenLink | `BR-UBTCON-632` | confirmed | A link that arrives while the app is running is opened at once only for a logged-in, unlocked, ready user; otherwise it is parked and opened after login or unlock |
| HandleOnResumeOpenLink | `BR-UBTCON-633` | confirmed | Deep links to a notification message or an Assemble event are ignored here because the push plugin opens them; every other deep link is processed |
| HasAccessToRegion | `BR-UBTCON-252` | confirmed | A Global-plan user has access to every country and locality |
| HasAccessToRegion | `BR-UBTCON-253` | confirmed | A Regional or AdvancePlus user has access to a target whose country is one of their subscribed countries, matched by name or code; the locality is not checked |
| HasAccessToRegion | `BR-UBTCON-254` | confirmed | A Free-plan user has access only to their own country (when no locality is targeted) or their own locality |
| HasAccessToRegion | `BR-UBTCON-255` | confirmed | A user on any plan other than Global, Regional, AdvancePlus or Free has no regional access in the app — the server's map rule grants such plans their subscribed countries |
| HouseholdDetails_Block | `BR-UBTCON-812` | confirmed | A hidden household is flagged only on the user's own household ("Your profile is private and only visible to you"); details are never withheld on the client |
| HouseholdDetails_Block | `BR-UBTCON-813` | confirmed | A household's address and photo are shown only when the household is not hidden, deceased or ancestry — and the address is non-empty |
| HouseholdDetails_Block | `BR-UBTCON-814` | confirmed | The household Photos tab is disabled for deceased, ancestry and hidden households |
| HouseholdDetails_Block | `BR-UBTCON-815` | confirmed | From a deceased or ancestry household the locality and supper-meeting links are disabled; otherwise they open with no plan check |
| HouseholdDetails_Block | `BR-UBTCON-816` | confirmed | The photobook entry is hidden without the photobook permission and opens only for a household with a locality; otherwise "Photobook is currently unavailable…" |
| HouseholdDetails_Block | `BR-UBTCON-817` | confirmed | Sharing a household opens the share sheet only with the extended-share flag (otherwise "coming soon"); deceased households cannot be shared from the actions bar |
| HouseholdDetails_Block | `BR-UBTCON-818` | confirmed | Tapping a household member always opens the relations screen when the block is enabled; the away-parent routing is switched off |
| HouseholdDetails_Block | `BR-UBTCON-819` | confirmed | A married child (non-household member) opens their own household when the block is enabled |
| HouseholdDetails_Block | `BR-UBTCON-820` | confirmed | In profile preview, the household shows the user's unsaved account form: address, age display, and only the phone numbers marked shown |
| HouseholdDetails_Block | `BR-UBTCON-821` | confirmed | Household ages follow the viewer's own age-visibility setting, and a cached household is refetched when that setting changed |
| HouseholdDetails_Members_Block | `BR-UBTCON-823` | confirmed | Tapping a household member's row opens relations for anyone but a child; the navigation chevron follows the server's flag, the row tap ignores it |
| HouseholdDetails_Members_Block | `BR-UBTCON-824` | confirmed | A married child's household opens only when the plan covers their locality — the row tap does not check the server's navigation flag |
| HouseholdDetails_Members_Block | `BR-UBTCON-825` | confirmed | Member contact actions appear only when the server marks the member as having CTAs, and call/e-mail are disabled for a deceased member; lifecycle text is shown as sent |
| HouseholdDetails_TimelinePhoto | `BR-UBTCON-843` | confirmed | A household timeline photo is drawn only when it has a background image |
| Household_Card | `BR-UBTCON-808` | confirmed | A household card loads its member avatars only when it has a household id, and always asks for them with the viewer's age visibility off |
| IsHouseholdDetails_InAncestryModeView | `BR-UBTCON-518` | confirmed | A household is in ancestry-mode view only if its id is in an in-memory list kept on the page window |
| Locality_Details | `BR-UBTCON-792` | confirmed | Opening a locality without an id opens the user's own locality; the "My Household" tab is offered only on the user's own locality |
| Locality_Details | `BR-UBTCON-793` | confirmed | "Browse by location" from a locality goes to the C1 locality browser when the C1 directory view flag is on, otherwise to the new country page |
| Locality_Details | `BR-UBTCON-794` | confirmed | A household tapped in a locality opens its details only when it has an id — no plan check is made inside the locality |
| Locality_Details | `BR-UBTCON-795` | confirmed | A OneSchool Global card opens its details unless the tap was already consumed by an inner control |
| Locality_Details | `BR-UBTCON-796` | confirmed | A locality shows one section per selected tag; the Locality contacts tab always shows "coming soon", so the contacts block never renders |
| Locality_Details | `BR-UBTCON-797` | confirmed | The map shortcut on a locality appears only with the maps flag and opens the map at the main hall |
| Locality_Details | `BR-UBTCON-798` | confirmed | On return to a locality the screen re-initialises only once; afterwards it refetches the locality only when the last fetch failed or never completed |
| Locality_Households_HouseholdList | `BR-UBTCON-802` | confirmed | With the carousel flag on, a household in a locality opens the household carousel over the locality's whole household list; otherwise the plain details screen |
| Locality_Households_HouseholdList | `BR-UBTCON-803` | confirmed | Each household in a locality is marked bookmarked from the device bookmark store of whichever bookmark generation is switched on |
| Locality_Interchange | `BR-UBTCON-800` | confirmed | An interchange opens its partner locality only when the plan covers that locality's country, carrying a pre-built label |
| Locality_LocalityContacts | `BR-UBTCON-807` | confirmed | Locality contacts (community businesses) offer call, message and legacy bookmark — but the block is never rendered (the tab shows "coming soon") |
| Locality_OneSchoolGlobal | `BR-UBTCON-806` | confirmed | Scrolling to the end of a locality's OneSchool Global list refetches the same unpaged list and appends it again once it has 20 or more entries |
| Locality_Subdivisions | `BR-UBTCON-804` | confirmed | With the carousel flag on, a supper meeting in a locality opens the supper-meeting carousel over all the locality's meetings; otherwise its details |
| Locality_Subdivisions | `BR-UBTCON-805` | confirmed | Supper-meeting paging on a locality is switched off: the paging flag is never set, and the server call takes no page arguments |
| OfflineDataSync | `BR-UBTCON-520` | confirmed | The offline data synchronization does nothing: the action goes straight from Start to End and ignores SyncUnit |
| OfflineDataSyncConfiguration | `BR-UBTCON-521` | confirmed | Offline sync is set to start automatically when the device comes online, at login and on resume, with no retry on error |
| OfflineDataSyncEvents | `BR-UBTCON-340` | confirmed | An offline sync run ends as success, as a retryable error, or — on a security exception — as a non-retryable error |
| OpenGooglePlay_Chrome | `BR-UBTCON-524` | confirmed | The Chrome update link opens the Google Play page of package com.android.chrome |
| OpenGooglePlay_UBTConnect | `BR-UBTCON-526` | confirmed | The app update link opens the Google Play page of the running app's own package name |
| OpenGooglePlay_WebView | `BR-UBTCON-525` | confirmed | The WebView update link opens the Google Play page of package com.google.android.webview |
| Policy_Checker | `BR-UBTCON-940` | confirmed | While the device flag says policies are pending, every screen whose layout does not opt out is redirected to Accept Pending Policies |
| SetResumeLoginLink | `BR-UBTCON-527` | confirmed | A deep link to open after login is parked on the page window, where GetResumeLoginLink later reads and clears it |
| StatisticsList | `BR-UBTCON-789` | confirmed | The C1 statistics list filters on title or subtitle, ignoring case and accents, and says so when a search finds nothing |
| Statistics_Icons | `BR-UBTCON-809` | confirmed | A statistics card shows a locality count in place of the supper-meeting count when it has no supper-meeting figure |
| Statistics_TypedItem | `BR-UBTCON-842` | confirmed | A statistics row shows its image only when it has one, and its navigation chevron unless the host hides it |
| SupperMeeting_ImageCard_Content | `BR-UBTCON-902` | confirmed | The supper-meeting card shows the address (with address pop-up) only when the caller asks for it |
| ToggleBookmarkItem_C2 | `BR-UBTCON-237` | confirmed | Connect 2 bookmarking: the device copy is created only after the server confirms the add; a failure shows the add-error toast |
| ToggleBookmarkItem_C2 | `BR-UBTCON-238` | confirmed | Connect 2 un-bookmarking: the device copy is deleted only after the server confirms the delete; a failure shows the remove-error toast |
| Try_GetIsSupportedVersion | `BR-UBTCON-233` | confirmed | If the version check fails, the app treats both the native version and the WebView as supported |
| UnsupportedVersion_Wrapper | `BR-UBTCON-337` | confirmed | An unsupported native app gets the upgrade-app card; otherwise an unsupported Android WebView gets the update-WebView card; otherwise the unsupported-browser card — and Back is blocked while it shows |
| Upgrade_WebView | `BR-UBTCON-234` | confirmed | To update the WebView, Android below 10 is sent to the Chrome store page and Android 10+ to Android System WebView, then the app closes after 10 seconds |

## Referenced modules: pages that name the referenced blocks and the server/service actions

| Name | Hits | Where (first 5) |
|---|---|---|
| AddBookmark2 | 7 | - |
| BottomSheet | 8 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/notes.md:26`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/search-sheet.md:14` |
| Columns_Three | 0 | - |
| Columns_Two | 1 | - |
| ComingSoon_V2 | 0 | - |
| ContactPopup_ByPhone | 16 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-937.md:22` |
| CustomContainer | 19 | - |
| CustomText | 9 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:13`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/design-tokens.md:20` |
| DeleteBookmarkByBookmarkId2 | 5 | - |
| EmptyList | 4 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/search-sheet.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/share-sheet.md:31` |
| GetHouseholdCoordinates | 8 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_BL/logic/event-detail.md:15`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_BL/module.md:77`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_BL/xcut/settings-and-auth.md:16`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-780.md:21`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-780.md:28` |
| GetHouseholdDetails | 12 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/module.md:49`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/rules/BR-C2LEG-531.md:26` |
| GetHouseholdList_ByLocalityId | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Household_CS/logic/household-lists.md:8`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Household_CS/module.md:103`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Household_CS/rules/BR-C2SVC-147.md:36` |
| GetInterchangeList_ByLocalityId | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Subdivision_CS/logic/subdivisions-and-interchanges.md:17`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Subdivision_CS/logic/subdivisions-and-interchanges.md:63`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Subdivision_CS/module.md:81` |
| GetNotesByItemId | 10 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/index/build/triage.md:146`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/findings.md:113`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Notes_CS/logic/notes.md:12` |
| GetSubdivisionCardList_ByLocalityId | 12 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/subdivision/build/behaviour.md:22`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/subdivision/build/behaviour.md:34` |
| GetSubdivisionLocation_BySubdivisionId | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/findings.md:78`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Subdivision_CS/logic/subdivisions-and-interchanges.md:16`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Subdivision_CS/module.md:81` |
| Get_Core_LocalityTimezone | 7 | - |
| Get_LocalityCommunityBusinessContacts | 10 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/spec/build/content/15-findings.md:35`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/findings.md:24`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/findings.md:155` |
| Get_OneSchoolGlobalDetails | 14 | - |
| Get_OneSchoolGlobalListByLocality | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_CommunityBusiness_CS/logic/community-business-directory.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_CommunityBusiness_CS/logic/community-business-directory.md:23`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_CommunityBusiness_CS/rules/BR-C2SVC-070.md:32` |
| Get_UI_CommunityNumbers | 0 | - |
| Get_UI_CountryStatistics | 11 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/geography/build/behaviour.md:28` |
| Get_UI_LocalityDetails | 6 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/geography/build/behaviour.md:58`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Geography_CS/logic/locality-and-country-data.md:11`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Geography_CS/logic/locality-and-country-data.md:21`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Geography_CS/logic/locality-and-country-data.md:29` |
| Get_UI_LocalityStatistics | 9 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/geography/build/behaviour.md:34`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Geography_CS/logic/geography-statistics.md:9`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Geography_CS/logic/geography-statistics.md:19` |
| Get_UI_MembersStatistics | 8 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/geography/build/behaviour.md:40`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/findings.md:154`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Geography_CS/logic/geography-statistics.md:10`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Geography_CS/logic/geography-statistics.md:23` |
| Get_UI_UpdateItems_UnreadCount_All | 7 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/updates/build/behaviour.md:184`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:83` |
| HorizontalTagList | 7 | - |
| Household_GetMembers_Service | 7 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/household/build/behaviour.md:322`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Household_CS/logic/household-retrieval.md:11`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Household_CS/logic/household-details.md:20` |
| Icon | 26 | - |
| IconText | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:62`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/rules/BR-C2UTL-317.md:22` |
| ImageCard_LazyLoading | 1 | - |
| Input | 87 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:23`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:81`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:104`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:141`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/screen-validations.md:169` |
| Layout_DetailPage | 7 | - |
| Layout_MainPages | 4 | - |
| LeafletMap | 0 | - |
| Member_ContactDetails_Service | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/household/build/behaviour.md:328`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Household_CS/logic/member-account.md:3`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Household_CS/rules/BR-C2SVC-151.md:5` |
| PreventBackNavigation | 11 | `../ubt_sharing_kb/connect/outsystems/apps/ubt-appmanager/modules/UBT_AppManager/rules/BR-UAM-459.md:31`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/contact-popups.md:35` |
| SkeletonSection | 15 | - |
| StaticInput | 3 | - |
| Statistics_ListItem | 0 | - |
| SubHeader_MainPages | 1 | - |
| Timer | 7 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/xcut/settings-timers.md:17`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/rules/BR-C2LEG-494.md:21`<br>`../ubt_sharing_kb/connect/outsystems/apps/ubt-appmanager/index/build/triage.md:68`<br>`../ubt_sharing_kb/connect/outsystems/apps/ubt-appmanager/findings.md:72`<br>`../ubt_sharing_kb/connect/outsystems/apps/ubt-appmanager/modules/UBT_AppManager_CS/rules/BR-UAM-223.md:33` |
| UBT_LazyImage | 29 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/ui-components/build/overview.md:75`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/ui-components/build/behaviour.md:286`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/ui-components/build/behaviour.md:292` |
