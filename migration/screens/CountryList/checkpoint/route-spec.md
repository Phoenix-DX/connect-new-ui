# Route spec: CountryList

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/CountryList` with inputs none [pack.md:3] |
| Tier | lite |
| Captured | 2026-10-14 (TST), viewport 390×844, states: default, loading, offline [analysis/states.json] |
| Shared/shell components used | Layout_MainPages, App_NotificationIcon, StaticInput, CustomContainer, SkeletonSection, Columns_Two, UBT_LazyImage, CustomText, FeedBlock_CommunityPopulation, Icon, Statistics_TypedItem, BottomBarMenu, CommonUI_InsideLayout, CacheControl_UserInfo_Wrapper, Directory_LegendBottomSheet (`app/src/shared/…`, block plan in pack.md:80-1036) |
| Screen-specific components | none (the whole view is in `index.tsx`); `components/actions.ts` for GetSkeletonList_UI_CountryStatistics |

## Specification
### Structure
Layout_MainPages (AddHeaderGap False, isGrayBackground True) [CountryList.mvc.js:161-162]: title "Directory", header right
App_NotificationIcon, header input StaticInput "Search any member or location" [:180, :205]. Content CustomContainer
"Content" (padding Base) [:243] holding: SkeletonSection "HeaderLoading" (In_IsLoading = not
LocalCacheControl_UserInformation.isFetched) [:273] → Columns_Two "HeaderColumns" (spacing Small) with the two cards
MY LOCALITY / MY COUNTRY (CustomContainer Neutral0, padding Base, radius Medium; UBT_LazyImage circle Base_52 square;
three CustomTexts) [:311-735]; CustomContainer "Population" (padding top Base) → FeedBlock_CommunityPopulation
[:746]; CustomContainer "Legend" (padding vertical Base) → Columns_Two "Title" (ReduceLast, Center) "Browse by
Country" + info Icon (Primary, Info, NonStandard_16) [:797-880]; SkeletonSection (In_IsLoading = not (isDataFetched or
hasFetchError)) [:906] → List "list list-group", animateItems True, source Out_CountriesStatistics [:924-935], each row a
Container with onClick → Statistics_TypedItem (In_HasImage = AvatarURL <> "", UI_CountryStatistics = {texts, Title,
AvatarURL}) [:936-990]. Bottom BottomBarMenu (Directory, isRootPage) [:1015]; CommonUI_InsideLayout [:1036];
after the layout CacheControl_UserInfo_Wrapper [:1057] and Directory_LegendBottomSheet (inputs {}, so its compiled
default ShowLocalities True) [:1091; Directory_LegendBottomSheet.mvc.js model: ShowLocalities default `true`].

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| `UBTConnect/CountryList/DataActionGetCountriesStatistics` | data action, refresh only [ctrl :1139-1179] | OnReady → Action_RefreshData [call-sites.md] | none (screen variables only, calls.json inputNames null) | Out_CountriesStatistics (CountryCode, Statistics.Title, Statistics.AvatarURL, UI_TypedStatisticsTexts) | read-only aggregate statistics | recorded fixture `UBTConnect/DataActionGetCountriesStatistics/02-93a3ea9f.json` (17 countries, no person data); `empty`, `error`, `loading` (never answers) |
| `FeedBlock_CommunityPopulation/DataActionFetchCount` | shared block | block fetch at start | none | shared | shared | shared mock |
| `CacheControl_UserInfo/DataActionGetCacheInfo` | shell/shared block | CacheControl OnInitialize | shared | Directory_UserCurrent (Result) | shell mock user | shell mock |

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| Screen | OnReady [ctrl :1222-1268] | restored from cache and GetCountriesStatistics.isDataFetched → nothing; else Action_RefreshData | — | — | — |
| Action_RefreshData [ctrl :1347-1440] | — | Out_CountriesStatistics = GetSkeletonList_UI_CountryStatistics(10) [UBTConnect.controller.js:12574-12630, 11508-11575: Title "Australia", AvatarURL "-", 5 stats]; refresh | GetCountriesStatistics | — | CommunicationException → ListClear + BubbleCommunicationException; NotRegistered re-raised; other non-system → ListClear + BubbleGenericException (flow handler) |
| OnAfterFetch_GetCountriesStatistics [ctrl :1181-1221] | after fetch | each row: Statistics.AvatarURL = GetFlagURLByCountryCode(CountryCode) | — | — | — |
| List row container | click [view :936-950] | Handler_StatisticsList_Clicked(CountryCode) [ctrl :1278-1346]: Id <> "" → HasAccessToRegion(LongIntegerToText(TextToLongInteger(Id)), Id) → access: navigate; else App_Subscription_ShowUpgradePopUp | — | `/UBTConnect/CountryDetails` (CountryCode) | upgrade popup |
| MY LOCALITY card | Clicked [ctrl :1467-1493] | — | — | `/UBTConnect/Locality_Details` (LocalityId, PreloadedLocalityLabel) | — |
| MY COUNTRY card | Clicked [ctrl :1441-1466] | — | — | `/UBTConnect/CountryDetails` (CountryCode) | — |
| StaticInput | Click_Input [ctrl :1494-1517] | — | — | `/UBTConnect/Search` | — |
| Info icon | Click [ctrl :1559-1586] | BottomSheetOpen(BottomSheetId) | — | — | sheet opens |
| Directory_LegendBottomSheet | SheetInitialized [ctrl :1587-1624] | BottomSheetId = SheetId | — | — | — |
| CacheControl_UserInfo_Wrapper | Result [ctrl :1518-1558] | LocalCacheControl_UserInformation = {UserInformation, isFetched True} | — | — | — |

Texts: locality line `LongIntegerToText(Locality_SubdivisionCount) + (=1 ? " Supper Meeting" : " Supper Meetings")`; country line
`… Country_LocalityCount … " Locality" / " Localities"` [view :486, :690]. Country card image: GetFlagURLByCountryCode(Country_Code),
ExtendedClass "country-flag" [view :572-593]; locality card image: EntityType Locality, EntityId NullIdentifier "0" [view :391].

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | data fetched, user info fetched | dom/default.html | real |
| loading | requests held (TST: until the request timeout, so the list shows `list-error`, header skeleton on) | dom/loading.html | loading |
| offline | every request fails: list-error, header skeleton on | dom/offline.html | error |

## Patterns used
- P-DATA / P-CALLS / P-MOCKS: `api.ts` adapter for GetCountriesStatistics, called from the OnReady effect; `mocks.ts` recordedHandler.
- P-LIST: the countries List through `OSList` (source, `list list-group`, animateItems).
- P-STATES: skeleton list of 10 while loading, list-error after a failed fetch, SkeletonSections as compiled.
- P-BACK: OnReady skips the refresh when the view was restored from cache with data fetched (`useWasRestoredFromCache`, `useViewState`).
- P-PARAMS: navigations with the original parameter names (`useOsNavigate`).
- P-DIALOG: upgrade popup through the shell's `showUpgradePopUp`; legend sheet through the shared BottomSheet + `bottomSheetOpen`.
- P-OSUI: BottomSheet through the shared Directory_LegendBottomSheet.
- P-FLAGS: the route reads no flag itself; flags live in the shared bottom bar and notification icon.

## Feature flags
- `C2EnableC1DirectoryView`: MCP unavailable; decision default-only TST on (user, 2026-10-14); read by the shared BottomBarMenu (Directory tab opens this route).
- `C2NewBookmarks`: decision default-only TST off (user, 2026-10-14); shared bottom bar only.
- `C2NewNotifications`: decision both, default off (user, 2026-10-14); shared App_NotificationIcon only (navigation target).
- `mobileDirectoryBookmarkNote`: decision default-only TST off (user, 2026-10-14); shared bottom bar only.
- `connect_LaunchDarkly_PermissionCheck`, `getFlagURLByCountryCode`, `getHasC1DirectoryView`, `App_PIN_BiometricEnabled`, `onToggle`: not flags (false positives, user 2026-10-14); built as the original.

## Unclear points
- Default-state difference from the shell mock user (data drift): exemption proposed → Q1 (answered A, auto-accepted 2026-10-15 16:59)
- Loading-state difference from the TST request timeout (capture artifact): exemptions proposed → Q2 (answered A, auto-accepted 2026-10-15 16:59)

## Decisions to confirm
- The "My locality / My country" cards show the shell's mock user (shared `shell/mockUser.ts`: AR, 3 supper meetings, 3 localities), not the TST test user (US flag, 7 / 29, names masked in the capture): data drift; exemption DATA-DRIFT-MOCK-USER-COUNTRYLIST proposed (Q1 → A pending; entry in proposed-exemptions.json).
- Directory_LegendBottomSheet receives ShowLocalities True explicitly: the compiled default is True (CountryList passes no input), while the shared component's default is False (its README says False). The foundation owner may want to align the shared default.
- Unobserved branches built from the compiled code: HasAccessToRegion False → upgrade popup; restored-from-cache OnReady; BubbleGenericException / NotRegistered paths.
- Loading state: the TST capture held requests until the OutSystems timeout (list-error, no skeleton); the mock loading scenario never answers, so the build shows the 10 skeleton rows (capture timing artifact); exemptions CAPTURE-LOADING-FETCH-TIMEOUT-COUNTRYLIST and -SHEET proposed (Q2 → A pending; entries in proposed-exemptions.json).

## Change requests
- none

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real | 0 | 0 | 0 | 0 | 1 (+ text 2, position 1, pixel 0.93%: mock user data, Q1) | link cursor, badge masked text, slider timing (existing) |
| loading | loading | 10 | 2 | 0 | 0 | 2 (+ position 4, pixel 32%: request-timeout artifact, Q2) | link cursor, skeleton shimmer, badge masked text (existing) |
| offline | error | 0 | 0 | 0 | 0 | 0 (clean) | link cursor, skeleton shimmer, badge masked text, slider timing (existing) |

## Server-side notes
- DataActionGetCountriesStatistics returns aggregate counts for every country; the client-side HasAccessToRegion check only hides navigation. CountryDetails' own server actions must enforce the subscription region.
