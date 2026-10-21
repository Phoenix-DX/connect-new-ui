# Route spec: BrowseCountries

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/BrowseCountries` with inputs none [pack.md: Route; BrowseCountries.mvc.js:84 `setInputs = function(inputs) {}`] |
| Tier | lite |
| Captured | 2026-10-14, viewport 390×844, states: default, loading, offline [analysis/states.json] |
| Shared/shell components used | Layout_DetailPage `app/src/shared/UBTConnectLibrary/Layout_DetailPage`, StatisticsList `app/src/shared/UBTConnect/StatisticsList`, BottomBarMenu `app/src/shared/UBTConnect/BottomBarMenu`, CommonUI_InsideLayout `app/src/shared/UBTConnect/CommonUI_InsideLayout`; helpers getLookupConcepts / getFlagURLByCountryCode (`shared/UBTConnectLibrary/lib/actions.ts`), hasAccessToRegion (`shared/UBTConnect/lib/actions.ts`), textToLongInteger (`shared/UBTConnect_Utils/lib/actions.ts`) [pack.md: Block plan] |
| Screen-specific components | none; GetSkeletonList_UI_CountryStatistics ported in `components/actions.ts` |

## Specification
### Structure
The screen has four blocks:
- Layout_DetailPage `$b1` (default inputs) [BrowseCountries.mvc.js:158-173]. Placeholder_Header_Title is "Browse by country" [:175-177; dom/default.html:651]. Placeholder_Header_Right and HeaderContent are empty [:178-179].
- Content = StatisticsList `$b2` [:180-229].
- Bottom = BottomBarMenu `$b3` with ActiveItem Connect_BottomBar_Items.Directory [:231-251].
- Placeholder_CommonUI_Inside_Layout = CommonUI_InsideLayout `$b4` [:253-271; dom/default.html:2749-2750].

StatisticsList inputs [:181-199]:
- In_Statistics = Out_CountriesStatistics mapped {Id = CountryCode, StatisticsOptions = Statistics}.
- In_IsLoading = not GetCountriesStatistics.IsDataFetched.
- In_SearchPrompt = "Search " + GetLookupConcepts(True).Country.Singular ("Search country", dom/default.html placeholder).

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| `UBTConnect` `BrowseCountries/DataActionGetCountriesStatistics` | data action, refresh only (`dataFetchDependenciesOriginal` -1, :291-293) | OnReady → Action_RefreshData → Refresh [:333-378, :458-497; calls.md #2] | none (screen has no variables; fixture inputs `{}`) | Out_CountriesStatistics (CountryCode, Statistics) | read of country statistics, no user scoping visible in client code | real = recorded fixture `UBTConnect/DataActionGetCountriesStatistics/01-c8c3cc75.json` (17 countries, reviewed 2026-10-15); loading = never answers; error = HTTP 500 |

The app-start calls (#1, #3-#8 of calls.md) belong to the shell [call-sites.md].

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| Screen | OnReady [:333-378] | IsViewRestoredFromCache and IsDataFetched → nothing; else Action_RefreshData: Out_CountriesStatistics = GetSkeletonList_UI_CountryStatistics(10) [:476-479; UBTConnect.controller.js:12574-12628: 10 × GetSkeleton_UI_CountryStatistics (Title "Australia", AvatarURL "-", 5 stats)], then Refresh GetCountriesStatistics | DataActionGetCountriesStatistics | – | error → global handler (no screen OnException) |
| Data action | OnAfterFetch [:498-538] | every row: Statistics.AvatarURL = GetFlagURLByCountryCode(CountryCode) | – | – | – |
| StatisticsList | Event_Clicked(Id) [:389-445] | Id <> "": HasAccessToRegion(LongIntegerToText(TextToLongInteger(Id)), Id); access → navigate; no access → App_Subscription_ShowUpgradePopUp (→ Q1) | – (cache read) | `/UBTConnect/BrowseDirectory` (CountryCode = Id) | upgrade popup (Q1) |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | IsDataFetched, 17 countries | dom/default.html | real |
| loading | not IsDataFetched, 10 skeleton rows (`ubt-skeleton-section`) | dom/loading.html | loading |
| offline | fetch failed: IsDataFetched stays False, skeleton rows stay | dom/offline.html | error |

## Patterns used
- P-DATA: `api.ts` getCountriesStatistics through callAction, wire mapped to TextStatisticsOptionsRecord; refresh-only data action driven by OnReady as Updates_SingleList does.
- P-CALLS: one data action call in phase load, from OnReady.
- P-MOCKS: `mocks.ts` recordedHandler for the data action.
- P-BACK: useWasRestoredFromCache + useViewState keep the list on a back navigation (no refresh, no skeleton).
- P-LIST: the List lives in the shared StatisticsList (OSList).
- P-PARAMS: navigation to BrowseDirectory with CountryCode through useOsNavigate.
- P-STATES: skeleton while loading and after a failed fetch, as captured.

## Feature flags
- `connect_LaunchDarkly_PermissionCheck`, `getFlagURLByCountryCode`, `App_PIN_BiometricEnabled`: decision not a flag (user, 2026-10-14); built as in the original.
- `C2EnableC1DirectoryView`, `C2NewBookmarks`, `mobileDirectoryBookmarkNote`: decision default-only (user, 2026-10-14); read only inside the shared BottomBarMenu / shell, the route itself reads no flag.

## Unclear points
- Card click when HasAccessToRegion is False (App_Subscription_ShowUpgradePopUp) was not captured → Q1 answered A (auto-accepted, user instruction 2026-10-15 16:59): the shell's `showUpgradePopUp`

## Decisions to confirm
- The no-access branch calls the shell's `showUpgradePopUp` (Q1, auto-accepted).
- The mock user's plan is Global (app/src/shell/mockUser.ts:62), so every country card navigates to BrowseDirectory.

## Change requests
- none

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real | 0 | 0 | 0 | 0 | 0 | existing: CAPTURE-LINK-HREF-CURSOR-HOMEFEED, CAPTURE-BADGE-MASKED-TEXT-HOMEFEED, SLIDER-APPEAR-TIMING, ignoreSubtrees |
| loading | loading | 0 | 0 | 0 | 0 | 0 | existing: CAPTURE-LINK-HREF-CURSOR-HOMEFEED, CAPTURE-SKELETON-SHIMMER-PHASE, CAPTURE-BADGE-MASKED-TEXT-HOMEFEED, ignoreSubtrees |
| offline | error | 0 | 0 | 0 | 0 | 0 | existing: CAPTURE-LINK-HREF-CURSOR-HOMEFEED, CAPTURE-SKELETON-SHIMMER-PHASE, CAPTURE-BADGE-MASKED-TEXT-HOMEFEED, ignoreSubtrees |

The skeleton rows have the null CountryCode "". They enter StatisticsList without an Id. In the first parity run, ten "" keys left stale skeleton rows next to the data, because the shared List keys rows by `Id ?? index`.

## Server-side notes
- DataActionGetCountriesStatistics returns statistics for every country. The client restricts navigation by subscription (HasAccessToRegion). The backend must enforce region access on the data of BrowseDirectory. Do not rely on this check.
