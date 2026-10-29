# Recorded decisions and facts that name the elements of UI flow Legacy_AssembleFlow

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:52` (Assemble_BrowseByCountry): | Assemble_BrowseByCountry | `/UBTConnect/Assemble_BrowseByCountry` |  | 64 | lite | build | Assemble is not a separate app either (UBTConnect screens with Connect2_Assemble_MUI blocks); build (user, 2026-10-16) | built | route-assemble |
- `migration/board.md:50` (AssembleDetail): | AssembleDetail | `/UBTConnect/AssembleDetail` |  | 139 | full | build | Assemble is not a separate app either (UBTConnect screens with Connect2_Assemble_MUI blocks); build (user, 2026-10-16) | built | route-assembledetail |
- `migration/board.md:51` (AssembleEvents): | AssembleEvents | `/UBTConnect/AssembleEvents` |  | 121 | full | build | Assemble is not a separate app either (UBTConnect screens with Connect2_Assemble_MUI blocks); build (user, 2026-10-16) | built | route-assemble |

## change requests

- `migration/change-requests/CR-AssembleEvents-1.md:29` (Assemble_BrowseByCountry): - Regression parity run on: 2026-10-16 after the change: AssembleEvents calls 0 (default 11/11, loading, offline); Assemble_BrowseByCountry, Profile, Menu, HomeFeed, Locality_Details, HouseholdDetails, MessageList all 0.
- `migration/change-requests/CR-Assemble_BrowseByCountry-1.md:1` (Assemble_BrowseByCountry): # CR-Assemble_BrowseByCountry-1: mock user — a non-empty SubscriptionRegionId for the Global subscription
- `migration/change-requests/CR-Assemble_BrowseByCountry-1.md:4` (Assemble_BrowseByCountry): - Raised by: Assemble_BrowseByCountry, 2026-10-16
- `migration/change-requests/CR-Assemble_BrowseByCountry-1.md:17` (Assemble_BrowseByCountry): Assemble routes (Assemble_BrowseByCountry and AssembleEvents analysis/calls.json, #4): the captured Global account
- `migration/change-requests/CR-Assemble_BrowseByCountry-1.md:35` (Assemble_BrowseByCountry): - Regression parity run on: 2026-10-16 after the change: Assemble_BrowseByCountry 0 (default, loading, offline); Profile, Menu, HomeFeed, Locality_Details, HouseholdDetails, MessageList all 0. AssembleEvents default now loads the filter-sheet country list (calls 0) but shows 89 position/layout/style
- `migration/change-requests/CR-AssembleDetail-2.md:42` (Assemble_BrowseByCountry): HouseholdDetails, Locality_Details, AssembleEvents, Assemble_BrowseByCountry; smoke test: Bookmark → ActionAddBookmark +
- `migration/change-requests/CR-AssembleDetail-1.md:1` (AssembleDetail): # CR-AssembleDetail-1: Connect2_LegacyShared GetCacheableSubdivision_V2 (ActionGetBulkSubdivisions_V2)
- `migration/change-requests/CR-AssembleDetail-1.md:3` (AssembleDetail): - **From:** route AssembleDetail (no-capture, built from the compiled code). **Owner:** foundation (`src/api/openapi.yaml`
- `migration/change-requests/CR-AssembleDetail-1.md:14` (AssembleDetail): - **Route side today:** OnReady stops after BuildSkeletonList and renders `<NotCaptured name="CR-AssembleDetail-1: …">`
- `migration/change-requests/CR-AssembleDetail-1.md:24` (AssembleDetail): (screens AssembleDetail; evidence controller.js:7691-7704, :3070-3110, :4115-4249). `contract_gen.py` emits
- `migration/change-requests/CR-AssembleDetail-1.md:41` (AssembleDetail): headless smoke test of AssembleDetail (expanded Zapiola hall: 11 households, no skeleton, Vitale shown bookmarked).
- `migration/change-requests/CR-AssembleDetail-2.md:1` (AssembleDetail): # CR-AssembleDetail-2: Connect2_Assemble_MUI ToggleBookmarkItem (AddBookmark / DeleteBookmarkByBookmarkId)
- `migration/change-requests/CR-AssembleDetail-2.md:3` (AssembleDetail): - **From:** route AssembleDetail (no-capture). **Owner:** foundation (`src/api/openapi.yaml` via `contract_gen.py`,
- `migration/change-requests/CR-AssembleDetail-2.md:15` (AssembleDetail): `<NotCaptured name="CR-AssembleDetail-2: …">` in the row, no call, IsBookmarked unchanged (Q2, recommendation A).
- `migration/change-requests/CR-AssembleEvents-1.md:1` (AssembleEvents): # CR-AssembleEvents-1: memory cache — concurrent misses of one key share the pending fetch
- `migration/change-requests/CR-AssembleEvents-1.md:4` (AssembleEvents): - Raised by: AssembleEvents, 2026-10-16
- `migration/change-requests/CR-AssembleEvents-1.md:9` (AssembleEvents): - Related question: AssembleEvents Q3 (decision, recommended A)
- `migration/change-requests/CR-AssembleEvents-1.md:12` (AssembleEvents): - TST made one `Connect2_LegacyShared/ActionGetUserInformation` call on AssembleEvents load (analysis/calls.json #2)
- `migration/change-requests/CR-AssembleEvents-1.md:29` (AssembleEvents): - Regression parity run on: 2026-10-16 after the change: AssembleEvents calls 0 (default 11/11, loading, offline); Assemble_BrowseByCountry, Profile, Menu, HomeFeed, Locality_Details, HouseholdDetails, MessageList all 0.
- `migration/change-requests/CR-Assemble_BrowseByCountry-1.md:7` (AssembleEvents): - Other routes using it: AssembleEvents (Assemble_FilterSheet calls the same GetCacheableRegionSubscribedCountries)
- `migration/change-requests/CR-Assemble_BrowseByCountry-1.md:17` (AssembleEvents): Assemble routes (Assemble_BrowseByCountry and AssembleEvents analysis/calls.json, #4): the captured Global account
- `migration/change-requests/CR-Assemble_BrowseByCountry-1.md:35` (AssembleEvents): - Regression parity run on: 2026-10-16 after the change: Assemble_BrowseByCountry 0 (default, loading, offline); Profile, Menu, HomeFeed, Locality_Details, HouseholdDetails, MessageList all 0. AssembleEvents default now loads the filter-sheet country list (calls 0) but shows 89 position/layout/style

## known original bugs

- `app/docs/known-original-bugs.md:20` (AssembleDetail): | B12 | `Connect2_LegacyShared.RemoveBookmarkFromCache`                                                             | ListIndexOf compares each cached row's ObjectId with LongIntegerToText(In_BookmarkId), so the row is found only when a bookmark id equals an object id; the cached group usually keeps
- `app/docs/known-original-bugs.md:21` (AssembleDetail): | B13 | `Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision` Handler_OnClickBookmarkButton      | After ToggleBookmarkItem the row's IsBookmarked = not IsItemBookmarked whatever the toggle did: a failed delete or add still flips the menu label                                     

## knowledge

- `migration/knowledge/orbit-assemble-ldm.md:9` (Assemble_BrowseByCountry): `Connect2_Assemble_MUI` (AssembleEvents, AssembleDetail, Assemble_BrowseByCountry; 26 blocks).
- `migration/knowledge/orbit-assemble-ldm.md:15` (Assemble_BrowseByCountry): - AssembleEvents, AssembleDetail, Assemble_BrowseByCountry.
- `migration/knowledge/orbit-assemble-ldm.md:46` (Assemble_BrowseByCountry): (default only), LDM_MyEvents_V2, LDM_EventDetail_V2, Assemble_BrowseByCountry, AssembleEvents.
- `migration/knowledge/auto-decisions-2026-10-16.md:67` (Assemble_BrowseByCountry): | Assemble_BrowseByCountry Q1, AssembleEvents Q1/Q3 | **A (recommended)** each | CR-Assemble_BrowseByCountry-1 (mock user region), scenario nomeetings, CR-AssembleEvents-1 (memory cache in-flight miss) → F13 |
- `migration/knowledge/auto-decisions-2026-10-16.md:70` (Assemble_BrowseByCountry): | F13: CR-Assemble_BrowseByCountry-1 (mock user SubscriptionRegionId 1 'Americas'), CR-AssembleEvents-1 (memoryCache QueueJS: shared in-flight miss, timeout 10 s) | applied | |
- `migration/knowledge/orbit-assemble-ldm.md:9` (AssembleDetail): `Connect2_Assemble_MUI` (AssembleEvents, AssembleDetail, Assemble_BrowseByCountry; 26 blocks).
- `migration/knowledge/orbit-assemble-ldm.md:15` (AssembleDetail): - AssembleEvents, AssembleDetail, Assemble_BrowseByCountry.
- `migration/knowledge/orbit-assemble-ldm.md:49` (AssembleDetail): ContactByEmailLDMCoordinator, EmailTarget, AssembleDetail. Capture-plan entries keep the tried `via` paths.
- `migration/knowledge/navigation.md:37` (AssembleDetail): - `DeeplinkHandlerCentralOnDeeplinkOpen` also opens AssembleDetail and MessageDetail. [MCP]
- `migration/knowledge/audit-a1-empty-handlers.md:61` (AssembleDetail): | `screens/AssembleDetail/index.tsx:30` | EventNotFound | AssembleEventDetail never raises it (0 triggers) |
- `migration/knowledge/auto-decisions-2026-10-16.md:75` (AssembleDetail): | AssembleDetail Q1/Q2 | **A (recommended)** | CR-AssembleDetail-1 (GetBulkSubdivisions_V2), CR-AssembleDetail-2 (Assemble bookmark toggle) → F15; AssembleDetail finishes after F15 |
- `migration/knowledge/auto-decisions-2026-10-16.md:78` (AssembleDetail): | F15: CR-AssembleDetail-1 (GetBulkSubdivisions_V2), CR-AssembleDetail-2 (Assemble bookmark toggle) | applied | 3 contract entries via extra-actions.json |
- `migration/knowledge/runtime-sources.md:66` (AssembleDetail): | 45 `.mvc.js` of the 12 not yet captured Orbit / LDM / Assemble screens and their blocks (`UBTConnect.Legacy_OrbitEventsFlow.{EventBooklet,GuestArrangements,TransportDetail,ViewDocuments,EmailContact}`, `UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail`, `UBTConnect.Legacy_OrbitQRCodeFlow.QRC
- `migration/knowledge/orbit-assemble-ldm.md:9` (AssembleEvents): `Connect2_Assemble_MUI` (AssembleEvents, AssembleDetail, Assemble_BrowseByCountry; 26 blocks).
- `migration/knowledge/orbit-assemble-ldm.md:15` (AssembleEvents): - AssembleEvents, AssembleDetail, Assemble_BrowseByCountry.
- `migration/knowledge/orbit-assemble-ldm.md:17` (AssembleEvents): OrbitAdminLanding, LDM_MyEvents_V2, AssembleEvents; MessageDetail Orbit/Assemble handlers): they work once built.
- `migration/knowledge/orbit-assemble-ldm.md:46` (AssembleEvents): (default only), LDM_MyEvents_V2, LDM_EventDetail_V2, Assemble_BrowseByCountry, AssembleEvents.
- `migration/knowledge/navigation.md:28` (AssembleEvents): - The `NavigateTo_MyCalendar…` handlers (AssembleEvents, LDM_MyEvents, LDM_MyEvents_V2, OrbitLanding) open MyEntertaining. [MCP]
- `migration/knowledge/auto-decisions-2026-10-16.md:27` (AssembleEvents): | O-B2: LocalityListDetail capture variant | **full-depth DOM from AssembleEvents** (recommended) | pack copy was cut at depth 7 |
- `migration/knowledge/auto-decisions-2026-10-16.md:67` (AssembleEvents): | Assemble_BrowseByCountry Q1, AssembleEvents Q1/Q3 | **A (recommended)** each | CR-Assemble_BrowseByCountry-1 (mock user region), scenario nomeetings, CR-AssembleEvents-1 (memory cache in-flight miss) → F13 |
- `migration/knowledge/auto-decisions-2026-10-16.md:68` (AssembleEvents): | AssembleEvents Q2 (Start URL DateTime format) | F13 to answer from the OutSystems runtime | |

## flags

- `migration/flags.md:32` (Assemble_BrowseByCountry): | `action:jSUtils_Element_Operations_ToggleAttribute` (gone) (candidate) | flag check action | AcceptPendingPolicies, AssembleDetail, AssembleEvents, Assemble_BrowseByCountry, Bookmarks, BookmarksByGroup, BrowseCountries, BrowseDirectory … | bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents
- `migration/flags.md:65` (Assemble_BrowseByCountry): | `action:toggleSideMenu` (gone) (candidate) | flag check action | AssembleDetail, AssembleEvents, Assemble_BrowseByCountry, BookmarksByGroup, EmailContact, EmailTarget, EventBooklet, EventDetail … | bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks | open | - | **open** |
- `migration/flags.md:113` (Assemble_BrowseByCountry): | `clientVar:App_PIN_BiometricEnabled` (candidate) | client variable | AcceptPendingPolicies, AssembleDetail, AssembleEvents, Assemble_BrowseByCountry, Bookmarks, BookmarksByGroup, BrowseCountries, BrowseDirectory … | bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks | unavaila
- `migration/flags.md:10` (AssembleDetail): | `action:bookmarkToggle` (gone) (candidate) | flag check action | AssembleDetail, BookmarksByGroup, New_BookmarksByGroup | bookmarksbygroup | open | - | **open** |
- `migration/flags.md:12` (AssembleDetail): | `action:bottomSheet_InternalOnToggle` (gone) (candidate) | flag check action | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, CountryDetails, CountryList, FeedItemDetail, HomeFeed … | bookmarksbygroup | open | - | **open** |
- `migration/flags.md:22` (AssembleDetail): | `action:handler_BottomSheetOnToggle` (gone) (candidate) | flag check action | AssembleDetail, BookmarksByGroup, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Locality_Details, Map … | bookmarksbygroup | open | - | **open** |
- `migration/flags.md:23` (AssembleDetail): | `action:handler_OnClickToggleLocalitiesList` (gone) (candidate) | flag check action | AssembleDetail | - | open | - | **open** |
- `migration/flags.md:24` (AssembleDetail): | `action:handler_OnClickToggleSubsdivisionList` (gone) (candidate) | flag check action | AssembleDetail | - | open | - | **open** |
- `migration/flags.md:32` (AssembleDetail): | `action:jSUtils_Element_Operations_ToggleAttribute` (gone) (candidate) | flag check action | AcceptPendingPolicies, AssembleDetail, AssembleEvents, Assemble_BrowseByCountry, Bookmarks, BookmarksByGroup, BrowseCountries, BrowseDirectory … | bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents
- `migration/flags.md:34` (AssembleDetail): | `action:meetingInfo_Toggle` (gone) (candidate) | flag check action | AssembleDetail, AssembleEvents | - | open | - | **open** |
- `migration/flags.md:38` (AssembleDetail): | `action:onToggle` (gone) (candidate) | flag check action | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, CountryDetails, CountryList, EventDetail, FeedItemDetail … | bookmarksbygroup | open | - | **open** |
- `migration/flags.md:12` (AssembleEvents): | `action:bottomSheet_InternalOnToggle` (gone) (candidate) | flag check action | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, CountryDetails, CountryList, FeedItemDetail, HomeFeed … | bookmarksbygroup | open | - | **open** |
- `migration/flags.md:32` (AssembleEvents): | `action:jSUtils_Element_Operations_ToggleAttribute` (gone) (candidate) | flag check action | AcceptPendingPolicies, AssembleDetail, AssembleEvents, Assemble_BrowseByCountry, Bookmarks, BookmarksByGroup, BrowseCountries, BrowseDirectory … | bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents
- `migration/flags.md:34` (AssembleEvents): | `action:meetingInfo_Toggle` (gone) (candidate) | flag check action | AssembleDetail, AssembleEvents | - | open | - | **open** |
- `migration/flags.md:38` (AssembleEvents): | `action:onToggle` (gone) (candidate) | flag check action | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, CountryDetails, CountryList, EventDetail, FeedItemDetail … | bookmarksbygroup | open | - | **open** |
- `migration/flags.md:47` (AssembleEvents): | `action:toggleActionSheet` (gone) (candidate) | flag check action | AssembleEvents | - | open | - | **open** |
- `migration/flags.md:55` (AssembleEvents): | `action:toggleFilterDrawer` (gone) (candidate) | flag check action | AssembleEvents | - | open | - | **open** |
- `migration/flags.md:65` (AssembleEvents): | `action:toggleSideMenu` (gone) (candidate) | flag check action | AssembleDetail, AssembleEvents, Assemble_BrowseByCountry, BookmarksByGroup, EmailContact, EmailTarget, EventBooklet, EventDetail … | bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks | open | - | **open** |
- `migration/flags.md:92` (AssembleEvents): | `action:connect_LaunchDarkly_PermissionCheck` (candidate) | flag check action | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails, CountryDetails … | bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks | unav

## parity exemptions

- `migration/parity-exemptions.json:1498` (Assemble_BrowseByCountry): "reason": "Masked text, not a build defect: the bottom sheet is a screen-level sibling of the Layout, outside .backwards-compatibility, so ':where(.backwards-compatibility) .landing-country-list-item {display:inline-flex; width:100%}' (Connect2_LegacyShared.ConnectMobileCommonTheme.css) does not app
- `migration/parity-exemptions.json:1635` (Assemble_BrowseByCountry): "routeRegex": "^/UBTConnect/Assemble_BrowseByCountry(\\?|$)",
- `migration/parity-exemptions.json:1636` (Assemble_BrowseByCountry): "reason": "ScreenBlock_Assemble_Filter's FetchCountries runs Cache_UserInfo_Get, then GetCountriesBySubscription: on TST the screen's user-info request went out before AfterInitialize (calls.json #3-#5), the clone's shell answers block user-info requests after the app-start step (CALL-ORDER-APPSTART
- `migration/parity-exemptions.json:1637` (Assemble_BrowseByCountry): "evidence": "migration/screens/Assemble_BrowseByCountry/analysis/calls.json (GetUserInformation ts 4797, GetCountriesBySubscription ts 5101, AfterInitialize ts 5682); app/src/shell/userInfo.ts (holdUserInfoForAppStart)"
- `migration/parity-exemptions.json:1646` (Assemble_BrowseByCountry): "reason": "Assemble_FilterSheet's FetchCountries runs Cache_UserInfo_Get, then GetCountriesBySubscription: on TST the user-info request went out before AfterInitialize (calls.json #3-#5), the clone's shell answers block user-info requests after the app-start step (CALL-ORDER-APPSTART-USERINFO), so G
- `migration/parity-exemptions.json:1478` (AssembleEvents): "routeRegex": "^/UBTConnect/AssembleEvents(\\?|$)",
- `migration/parity-exemptions.json:1485` (AssembleEvents): "evidence": "migration/screens/AssembleEvents/analysis/dom/default.html:224 (<a data-link data-original-href=\"#\">); migration/screens/AssembleEvents/parity/loading.json, offline.json (only these 2 style diffs)"
- `migration/parity-exemptions.json:1495` (AssembleEvents): "routeRegex": "^/UBTConnect/AssembleEvents(\\?|$)",
- `migration/parity-exemptions.json:1499` (AssembleEvents): "evidence": "migration/screens/AssembleEvents/parity/default.json (89 diffs, all under div#b5-b2-l1-95_N-ListItem1 > .landing-country-list-item); migration/screens/AssembleEvents/analysis/css-relevant.md:1497-1499; Playwright check on the dev server 2026-10-16: computed display inline-block, closest
- `migration/parity-exemptions.json:1645` (AssembleEvents): "routeRegex": "^/UBTConnect/AssembleEvents(\\?|$)",
- `migration/parity-exemptions.json:1647` (AssembleEvents): "evidence": "migration/screens/AssembleEvents/analysis/calls.json (GetUserInformation ts 4633, GetCountriesBySubscription ts 4919, AfterInitialize ts 5492); app/src/shell/userInfo.ts (holdUserInfoForAppStart)"
