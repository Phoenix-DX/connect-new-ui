# Route spec: Assemble_BrowseByCountry

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/Assemble_BrowseByCountry` with inputs none [pack.md] |
| Tier | lite |
| Captured | 2026-10-16 (full-permission account), viewport 390×844, states: default, loading, offline [analysis/states.json] |
| Shared/shell components used | CommonUI_InsideLayout (`src/shared/UBTConnect/CommonUI_InsideLayout`), Layout, MenuIcon__UpdatedOSUI, LocalityListDetail, Spinner (`src/shared/Connect2_LegacyShared/*`), InputWithIcon (`src/shared/osui/InputWithIcon`), Assemble_FilterLocalityByCountry (`src/shared/Connect2_Assemble_MUI/`), Dialog_AccessRestrictedAction_Legacy (`src/shared/UBTConnect_Utils/`), BackNavigationHandler (`src/shared/NavigationHandler/`); lib: getCacheableUserInfo, removeDiacritics, getCacheableRegionSubscribedCountries (added here, see Change requests), hasAccessToRegion, showUpgradePopUp, confirmAction |
| Screen-specific components | `components/ScreenBlock_Assemble_Filter.tsx` (Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter, used only here [catalog/blocks.md:208]) |

## Specification
### Structure
- The screen has CommonUI_InsideLayout `$b1`, then ScreenBlock_Assemble_Filter `$b2` [Assemble_BrowseByCountry.mvc.js:127-197].
- The block has these parts [ScreenBlock_Assemble_Filter.mvc.js view :143-610]:
  - Layout: back arrow, Title `DIV_ScreenTitle` = ScreenTitle, and empty Menu / HeaderRight / HeaderContent / CommonUI_Elements.
  - Content when `If(Not ShowLocalitiesList)`:
    - When `If(IsCountriesDataFetched)`:
      - `DIV_SearchByCountry`. It has InputWithIcon `b2-$b3`, a search icon, and Input_SearchTearm ("Search Country", max 50, type search, style `border-width: 0px 0px 1px`).
      - When `If(Not TempCountryDetailList.Empty)`: LocalityListDetail `b2-$b4` (HideHeader). Else `DIV_NoResultsFound` "No results found".
    - When the countries are not fetched: Spinner `b2-$b5`.
  - Content when ShowLocalitiesList: Assemble_FilterLocalityByCountry `b2-$b6` (CountryName, CountryCode).
  - Always: FreeSubscriptionAlert (Dialog_AccessRestrictedAction_Legacy, scope `b2-b7`) and BackNavigationHandler `b2-$b8` [dom/default.html:144-790].
- BottomBar: `DIV_StickyBottom` (`text-align-center assemble-filter-actions`, visible CountryCode <> "") [mvc.js :372-463].
  - Cancel (`btn`).
  - ButtonApply (`btn btn-primary`, width 100px, enabled SubdivisionId <> NullIdentifier).

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| Connect2_LegacyShared/ActionGetUserInformation | server (GetCacheableUserInfo) | OnReady [mvc.js:879-946] | none | Subdivision.Id | memory cache User/"UserInfo" 7200 s | shared LegacyShared mock |
| UBTConnect_Utils/ActionGetUserInformation | server (Cache_UserInfo_Get, shell cache) | FetchCountries [mvc.js:1025-1100] | none | Directory_UserCurrent_Subscription.SubscriptionRegionId | shell user-info cache (app start fills it) | shell mock |
| Connect2_LegacyShared/ActionGetCountriesBySubscription | server (GetCacheableRegionSubscribedCountries) | FetchCountries; search cleared [mvc.js:630-660] | SubscriptionRegionId | Countries (CountryWithMapPosition) | memory cache RegionSubscribedCountries/region id 1200 s; "" raises ObjectNotFound [runtime-sources/Connect2_LegacyShared.controller.js:3551-3688, 5281-5337] | real (17 fictional countries, `src/mocks/fictional/assemble.ts`), empty, error, loading |

App-start calls (#1, #5-#9) belong to the shell [calls.json].

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| block | OnReady | restored from cache → nothing; else GetCacheableUserInfo, FetchCountries (IsCountriesDataFetched False → lists → True) [mvc.js:879-946, 1025-1100] | #2-#4 | – | errors → flow handler |
| Input_SearchTearm | OnChange | "" → reload subscribed countries (cached); else ListFilter Index(Name, RemoveDiacritics(ToLower(Trim(term))), ignore case) [mvc.js:630-703] | cache only | – | – |
| LocalityListDetail row | OnClick_GoToBrowseCountry(Code) | Code <> "": HasAccessToRegion(Code, 0); no access → ConfirmAction FreeSubscriptionAlert; else CountryCode, CountryName, ScreenTitle "Filter by Locality", ShowLocalitiesList [mvc.js:790-878] | – | – | access dialog |
| Assemble_FilterLocalityByCountry | SelectedSubdivision / FreeSubscriptionAlert / Cancel | SubdivisionId = id; App_Subscription_ShowUpgradePopUp; raise Cancel [mvc.js view :259-321, :760-789, :947-983] | – | – | upgrade dialog |
| Cancel button | OnClick | raise Cancel → screen: AllowUpcomingNavigation, NavigateBack [screen mvc.js:269-305] | – | back | – |
| ButtonApply | OnClick | NavigateToSubdivision(SubdivisionId, SubdivisionId = UserInformation.Subdivision.Id) [mvc.js:984-1024] → screen | – | `/UBTConnect/AssembleEvents` (ShowBackNavigation True, SubdivisionId, IsUserSubdivision) [screen mvc.js:228-250] | – |
| BackNavigationHandler | BackNavigation | ShowLocalitiesList → reset (title, SubdivisionId, CountryCode), PreventNavigation, ScrollTop `.content`; else back goes on [mvc.js:704-759, :1172-1183] | – | – | – |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | IsCountriesDataFetched, 17 countries | yes | real |
| loading | Not IsCountriesDataFetched → Spinner | yes | loading |
| offline | request error → Spinner stays, flow handler message | yes | error |
| no results | TempCountryDetailList empty | no (compiled) | empty / search |
| localities | ShowLocalitiesList | no (compiled; block tested in shared) | real + click |

## Patterns used
- P-CALLS / P-DATA: `api.ts` adapters over the shared client actions; same calls in the load phase.
- P-MOCKS: `mocks.ts` (GetCountriesBySubscription from `src/mocks/fictional/assemble.ts`).
- P-STATES: Spinner while fetching; "No results found".
- P-BACK: `useWasRestoredFromCache` (OnReady skips), block variables through `useViewState`; BackNavigationHandler.
- P-PARAMS: AssembleEvents with the original parameter names; Cancel through allowUpcomingNavigation + back.
- P-DIALOG: FreeSubscriptionAlert through `confirmAction`.
- P-LIST: LocalityListDetail (shared OSList).
- P-OSUI: InputWithIcon.

## Feature flags
- `clientVar:App_PIN_BiometricEnabled`: decision "not a flag (false positive)" (user, 2026-10-14); nothing in this route reads it (shell PIN unlock only).

## Unclear points
- The mock user's SubscriptionRegionId is "". TST's Global account sends one. The country list never loads in the React app until the shell mock changes → Q1 (decision; answered A, CR-Assemble_BrowseByCountry-1 applied by foundation F13) [questions.md Q1].

## Decisions to confirm
- Q1 → A (answered by the user, 2026-10-16, auto-accepted; CR-Assemble_BrowseByCountry-1 applied by foundation F13) [questions.md Q1]: CR-Assemble_BrowseByCountry-1 sets the mock user's SubscriptionRegionId to '1'. Before it was applied, the default state showed only the Spinner (parity default failed on that alone).
- Fictional countries: the 17 captured rows. Masked names are replaced by real country names of the masked lengths whose flags the app ships (Ireland is the flag without a row). Counts keep the rendered lengths. The mock keeps TST's unmasked counts (`src/mocks/fictional/assemble.ts`, mock-fixtures.md "Fictional text must be meaningful").
- The mock answers every SubscriptionRegionId with the same 17 countries (the captured Global account sees all regions).
- DIV_StickyBottom's show/hide animation (animate True) is not reproduced (as LocalityListDetail's header).
- The no-results, localities and bottom-bar states were not captured: built from the compiled view, covered by `Assemble_BrowseByCountry.test.tsx`.
- Exemption CALL-ORDER-APPSTART-RACE-ASSEMBLE-BROWSEBYCOUNTRY (proposed in `proposed-exemptions.json`, now in `migration/parity-exemptions.json`): app-start call order of GetCountriesBySubscription, once Q1/CR-1 lets it run.

## Change requests
- CR-Assemble_BrowseByCountry-1: shell mock user SubscriptionRegionId non-empty (applied) [CR-Assemble_BrowseByCountry-1.md].
- Shared lib (allowed by the orchestrator, minimal): `src/shared/Connect2_LegacyShared/lib/actions.ts` getRegionSubscribedCountries + getCacheableRegionSubscribedCountries, `staticEntities.ts` DirectoryCacheType.RegionSubscribedCountries, `lib/mocks.ts` the user's Subdivision (Id 1210, Zapiola: IsUserSubdivision is True for the user's own hall); new `src/mocks/fictional/assemble.ts`.

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real | 0 [parity/default.json] | 0 | 0 | 0 | 0 | ignoreSubtrees×1 |
| loading | loading | 0 | 0 | 0 | 0 | 0 | ignoreSubtrees×1, SPINNER-ROTATION-PHASE×1 |
| offline | error | 0 | 0 | 0 | 0 | 0 | ignoreSubtrees×1, SPINNER-ROTATION-PHASE×1 |

## Server-side notes
- GetCountriesBySubscription must scope the countries to the session user's subscription (the client sends SubscriptionRegionId; the server must not trust it).
- HasAccessToRegion is a client check only (hides navigation); locality and subdivision data actions must enforce the subscription server-side.
