# KB index of UI flow Directory_OneSchoolGlobal

KB root: `../ubt_sharing_kb/connect/outsystems/apps` (os-kb extraction of Connect, DEV, 2026-10-05). Rules quote the model and say `confirmed` or `inferred`.
Read the UI pages fully; open a rule file only for the rules the report cites.

## UI pages of UBTConnect that name the flow or its screens

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/supper-meetings-oneschool.md` — Supper meetings, OneSchool Global and the entities carousel (3 names of this flow, 13 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/directory-entity-actions.md` — Directory — entity actions bar (`Directory_EntityDetailsActions`, flow `Directory_CommonBlocks`) (1 names of this flow, 14 rules)

## Logic pages and cross-cut pages that name the flow's actions

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/app-version.md`: Get_IsUnsupportedSystem, Get_IsUnsupportedVersion, OpenGooglePlay_UBTConnect, Try_GetIsSupportedVersion, Upgrade_UBTConnect, Upgrade_WebView
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/session-and-sync.md`: GetUserInformation_Wrapper, GetUserInformation_Wrapper_Assign, OfflineDataSync, OpenGooglePlay_UBTConnect, Upgrade_UBTConnect
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/helpers.md`: GetNameAndSurname_ByFullName, GetSkeletonList_UI_HouseholdMembers, Get_CurrentEntityHeader, Wait
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/client-variables.md`: GetShareType_FromEntity, GetUserInformation_Wrapper_Assign, OfflineDataSync, Wait
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/bookmarks-notes.md`: ToggleBookmarkItem_C2, AddBookmark2, DeleteBookmarkByBookmarkId2
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-misc-date-actions.md`: GetSekeletonList_UI_OneSchoolGlobal_EventCard, GetSkeleton_OneSchoolGloval_EventDetails, GetSkeleton_UI_OneSchoolGlobal_EventCard
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-directory-navigation.md`: HasAccessToRegion, GetHouseholdDetails
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-legacy-flows.md`: GetURLFromEventDataURL, SetResumeLoginLink
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-updates-feed-sections.md`: Directory_Updates_RefreshBottomBarCount
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/push-and-deeplinks.md`: GetURLFromEventDataURL
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/region-access.md`: HasAccessToRegion
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/sharing.md`: GetShareType_FromEntity
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-app-start-and-login.md`: SetResumeLoginLink
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/validation.md`: ToggleBookmarkItem_C2

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
| Directory_EmptyState | `BR-UBTCON-810` | confirmed | Directory empty states read "No <entity> <location>" — pluralised with "s" only for interchanges |
| Directory_EntityDetailsActions | `BR-UBTCON-833` | confirmed | The directory actions bar offers a fixed set of actions per entity type; a Locality raises "Invalid option" and any other type "Bookmarks not available" |
| Directory_EntityDetailsActions | `BR-UBTCON-834` | confirmed | The actions bar fetches contact details for members, OneSchool Global, supper meetings and households only, and only when a call, e-mail or share action needs them |
| Directory_EntityDetailsActions | `BR-UBTCON-835` | confirmed | After fetching, Call is offered when any phone number exists and E-mail when there is an e-mail address or a mobile number; a fetch error disables every action |
| Directory_EntityDetailsActions | `BR-UBTCON-836` | confirmed | Bookmarking from the actions bar uses the Connect 2 bookmark store when the new-bookmarks flag is on, otherwise the legacy store; the menu shows Bookmark or Unbookmark from the local copy |
| Directory_EntityDetailsActions | `BR-UBTCON-837` | confirmed | Share types are resolved only for entity types that can be shared, and the share pop-up exists only with the extended-share flag |
| Directory_EntityDetailsActions | `BR-UBTCON-838` | confirmed | E-mail for a OneSchool Global entry goes straight to the school e-mail form; for anyone else it opens the message-channel pop-up |
| Directory_EntityDetailsActions | `BR-UBTCON-839` | confirmed | Contact pop-ups for OneSchool Global always use the OneSchool Global image (the host image goes to the share sheet), and a host-supplied name replaces the fetched name |
| Directory_EntityDetailsActions | `BR-UBTCON-840` | confirmed | Deleting a note from the actions bar removes it from the shown list and decrements the note count; the bar shows a skeleton until bookmarks and notes have synced |
| Directory_Updates_RefreshBottomBarCount | `BR-UBTCON-171` | confirmed | The bottom-bar unread badge is refetched from the server only when the configured number of minutes has passed since the last check, or when forced |
| EntitiesCarousel | `BR-UBTCON-904` | confirmed | The entities carousel opens at the caller's starting position unless it already has an active slide (restored view) |
| EntitiesCarousel_Element | `BR-UBTCON-903` | confirmed | A carousel slide renders supper-meeting details or household details by entity type, and only while it is near the active slide |
| ExitApplicationForWebViewUpdate | `BR-UBTCON-506` | confirmed | The app closes itself after the given delay only where the Cordova exitApp API exists; elsewhere nothing happens |
| External_Link | `BR-UBTCON-334` | confirmed | An external link opens through the RedirectToURL external site on iOS and through the in-app browser helper elsewhere |
| GetNameAndSurname_ByFullName | `BR-UBTCON-259` | confirmed | A full name is split on spaces: the last word is the surname and the words before it are the name |
| GetSekeletonList_UI_OneSchoolGlobal_EventCard | `BR-UBTCON-175` | confirmed | While OneSchool Global events load, the list shows ListLength placeholder event cards (4 unless the caller says otherwise) |
| GetShareType_FromEntity | `BR-UBTCON-244` | confirmed | Share type per entity type — "My Household" is chosen only for an entity type that matched none of the earlier cases, so a Household is always shared as Household |
| GetURLFromEventDataURL | `BR-UBTCON-515` | confirmed | A shared link from the web share page is rewritten into the app's ConnectShare route, and a doubled "UBTConnect/" segment is collapsed |
| GetUserInformation_Wrapper_Assign | `BR-UBTCON-530` | confirmed | Whether the user still has policies to accept is copied from the cached user information onto the device |
| Get_CurrentEntityHeader | `BR-UBTCON-262` | confirmed | The carousel header is the current row's label for a single header, otherwise the label of the entry whose index matches the current household; no match gives an empty header |
| Get_IsInsideRenderBuffer | `BR-UBTCON-516` | confirmed | A carousel element is rendered only when it is within RenderBuffer positions of the active element, inclusive |
| Get_IsUnsupportedSystem | `BR-UBTCON-232` | confirmed | The system is unsupported when either the app version or the browser (WebView) version is unsupported |
| Get_IsUnsupportedVersion | `BR-UBTCON-231` | confirmed | The app version is unsupported when the native shell version is unsupported; the WebView counts as unsupported for the WebView flag only on Android |
| Get_LookupSection | `BR-UBTCON-517` | confirmed | Section labels "Action(s)" and "Household(s)" follow the lowercase flag; the OneSchool statistics label is always "Show student numbers" |
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
| Household_GalleryCard_List | `BR-UBTCON-841` | confirmed | A supper meeting's household gallery shows the directory empty state when it has no households |
| IsHouseholdDetails_InAncestryModeView | `BR-UBTCON-518` | confirmed | A household is in ancestry-mode view only if its id is in an in-memory list kept on the page window |
| OfflineDataSync | `BR-UBTCON-520` | confirmed | The offline data synchronization does nothing: the action goes straight from Start to End and ignores SyncUnit |
| OfflineDataSyncConfiguration | `BR-UBTCON-521` | confirmed | Offline sync is set to start automatically when the device comes online, at login and on resume, with no retry on error |
| OfflineDataSyncEvents | `BR-UBTCON-340` | confirmed | An offline sync run ends as success, as a retryable error, or — on a security exception — as a non-retryable error |
| OneSchoolGlobalDetails | `BR-UBTCON-905` | confirmed | OneSchool Global details and the locality's time zone are fetched on a fresh open; the address pop-up never receives coordinates |
| OneSchoolGlobalDetails | `BR-UBTCON-906` | confirmed | The student-information section appears only with the LaunchDarkly flag MobileStudentInformation, and inside it the student numbers are switched off — it shows the 'coming soon' content |
| OneSchoolGlobalDetails | `BR-UBTCON-907` | confirmed | The upcoming-events / about-our-campus switch of a OneSchool Global page is switched off; only the about text and the coming-soon panel are shown |
| OneSchoolGlobalEventDetail | `BR-UBTCON-908` | confirmed | The OneSchool Global event detail screen shows one hard-coded sample event, whatever event id it is given |
| OpenGooglePlay_Chrome | `BR-UBTCON-524` | confirmed | The Chrome update link opens the Google Play page of package com.android.chrome |
| OpenGooglePlay_UBTConnect | `BR-UBTCON-526` | confirmed | The app update link opens the Google Play page of the running app's own package name |
| OpenGooglePlay_WebView | `BR-UBTCON-525` | confirmed | The WebView update link opens the Google Play page of package com.google.android.webview |
| Policy_Checker | `BR-UBTCON-940` | confirmed | While the device flag says policies are pending, every screen whose layout does not opt out is redirected to Accept Pending Policies |
| SetResumeLoginLink | `BR-UBTCON-527` | confirmed | A deep link to open after login is parked on the page window, where GetResumeLoginLink later reads and clears it |
| SupperMeeting_DetailsBlock | `BR-UBTCON-899` | confirmed | Supper-meeting details are fetched by subdivision id each time the view is opened fresh; there is no subscription or country check on the client |
| SupperMeeting_DetailsBlock | `BR-UBTCON-900` | confirmed | Tapping a household in a supper meeting opens the carousel of all the meeting's households when the carousel flag is on, otherwise its details |
| SupperMeeting_HouseholdList | `BR-UBTCON-901` | confirmed | A supper meeting's households are loaded by subdivision when the view is opened fresh |
| SupperMeeting_ImageCard_Content | `BR-UBTCON-902` | confirmed | The supper-meeting card shows the address (with address pop-up) only when the caller asks for it |
| ToggleBookmarkItem_C2 | `BR-UBTCON-237` | confirmed | Connect 2 bookmarking: the device copy is created only after the server confirms the add; a failure shows the add-error toast |
| ToggleBookmarkItem_C2 | `BR-UBTCON-238` | confirmed | Connect 2 un-bookmarking: the device copy is deleted only after the server confirms the delete; a failure shows the remove-error toast |
| Try_GetIsSupportedVersion | `BR-UBTCON-233` | confirmed | If the version check fails, the app treats both the native version and the WebView as supported |
| UnsupportedVersion_Wrapper | `BR-UBTCON-337` | confirmed | An unsupported native app gets the upgrade-app card; otherwise an unsupported Android WebView gets the update-WebView card; otherwise the unsupported-browser card — and Back is blocked while it shows |
| Upgrade_WebView | `BR-UBTCON-234` | confirmed | To update the WebView, Android below 10 is sent to the Chrome store page and Android 10+ to Android System WebView, then the app closes after 10 seconds |
| Wait | `BR-UBTCON-278` | confirmed | The server Wait action spins until the requested number of seconds has passed, unless the IsKi site property is set |

## Referenced modules: pages that name the referenced blocks and the server/service actions

| Name | Hits | Where (first 5) |
|---|---|---|
| AddBookmark2 | 7 | - |
| AddressPopup_Wrapper | 26 | - |
| BackNavigationHandler | 17 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/ui/group-page.md:19`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/ui/app-shell.md:30`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/xcut/settings-and-integrations.md:52`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/rules/BR-CMOB-015.md:32`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/rules/BR-CMOB-002.md:7` |
| ComingSoon | 6 | - |
| CustomContainer | 19 | - |
| CustomText | 9 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:13`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/design-tokens.md:20` |
| DeleteBookmarkByBookmarkId2 | 5 | - |
| ExpandableSection | 0 | - |
| GetHouseholdCoordinates | 8 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_BL/logic/event-detail.md:15`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_BL/module.md:77`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_BL/xcut/settings-and-auth.md:16`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-780.md:21`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-780.md:28` |
| GetHouseholdDetails | 12 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/module.md:49`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/rules/BR-C2LEG-531.md:26` |
| GetHouseholdList_BySubdivisionId | 4 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Household_CS/logic/household-lists.md:9`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Household_CS/module.md:103` |
| GetNotesByItemId | 10 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/index/build/triage.md:146`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/findings.md:113`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Notes_CS/logic/notes.md:12` |
| GetSubdivisionDetails_BySubdivisionId | 9 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/subdivision/build/behaviour.md:46`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/subdivision/build/behaviour.md:52` |
| GetSubdivisionLocation_BySubdivisionId | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/findings.md:78`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Subdivision_CS/logic/subdivisions-and-interchanges.md:16`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Subdivision_CS/module.md:81` |
| Get_Core_LocalityTimezone | 7 | - |
| Get_OneSchoolGlobalDetails | 14 | - |
| Get_UI_UpdateItems_UnreadCount_All | 7 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/updates/build/behaviour.md:184`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:83` |
| Icon | 26 | - |
| IconText | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:62`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/rules/BR-C2UTL-317.md:22` |
| ImageCard_LazyLoading | 1 | - |
| ImageCard__Content | 0 | - |
| Layout_DetailPage | 7 | - |
| ListAppend | 54 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-807.md:20`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/module.md:66`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/rules/BR-C2LEG-301.md:19`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/rules/BR-C2LEG-301.md:20`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_Assemble_IS/module.md:50` |
| ListAppendAll | 34 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-796.md:30`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-931.md:32`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/logic/rest-wrappers.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/logic/rest-wrappers.md:23`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/module.md:66` |
| Member_ContactDetails_Service | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/household/build/behaviour.md:328`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Household_CS/logic/member-account.md:3`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Household_CS/rules/BR-C2SVC-151.md:5` |
| SkeletonSection | 15 | - |
| Skeleton_TextBlock | 0 | - |
| UBT_LazyImage | 29 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/ui-components/build/overview.md:75`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/ui-components/build/behaviour.md:286`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/ui-components/build/behaviour.md:292` |
| Wait | 26 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/my-calendar/build/overview.md:44`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/my-calendar/build/behaviour.md:126`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/my-calendar/build/behaviour.md:128`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/triage.md:57`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/findings.md:90` |
