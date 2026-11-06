# Route spec: Search

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/Search` with inputs `none` [pack.md; routes.generated.ts] |
| Tier | lite |
| Captured | viewport 390×844, states: default, loading, offline [analysis/states.json] |
| Shared/shell components used | Layout_DetailPage, Input, FilterSheet_Icon, CustomContainer, HorizontalTagList, SectionSeparator, BottomBarMenu, CommonUI_InsideLayout, FilterSheet (`app/src/shared/...`, paths in pack Block plan) |
| Screen-specific components | `ScreenBlock_Search` (Directory_Search.ScreenBlock_Search), `actions.ts` (SearchCategory_GetList port), `staticEntities.ts` |

## Specification
### Structure
Screen `Directory_Search.Search` renders only `ScreenBlock_Search` with no inputs [Search.mvc.js :128-129], so
In_IsInScreenSearch = False, In_IsEventNavigation = False, In_SearchTargetId = "" (defaults). The block (id `$b1`):
- `Layout_DetailPage` `b1-$b1`, In_InitializeNavigationHandler = not In_IsInScreenSearch [ScreenBlock_Search.mvc.js :291-294].
- Header title: `Input` `b1-$b2`, SearchInput {InitalString = SearchKey_Current, SearchPrompt "Search for households, members or places.", Debounce_DelayMS 300, BorderRadius Shape.Rounded, FocusOnReady True} [:304-312; dom/default.html :23-50].
- Header right: `FilterSheet_Icon` `b1-$b3` (ShowSubscriptionOnClick, isLoaded, HaveFiltersApplied, BottomSheetId from block variables) [:381-386].
- Header content: `CustomContainer` `b1-$b4` (Background Neutral0, vertical padding Small) with `HorizontalTagList` `b1-$b5` (TagList, single, mandatory, padding Base) [:406-446; dom :67-112].
- Content: `SectionSeparator` `b1-$b6` when not HasSearched or SearchKey_Current <> SearchKey_LastSearched [:484-502; dom :116-121]; Recent search block (not captured, CR-Search-1); Search_BirthdayOptions when isBirthdaySearchEnabled and isBirthdayKeyWord (not captured); results (HasSearched) with "Showing results for '<term>':", three SearchResult_Section (Places, Households, Members) in a SkeletonSection, No results texts [:1120-1640].
- Bottom: `BottomBarMenu` `b1-$b37` with no inputs unless In_IsInScreenSearch [:1655-1660; dom :127].
- CommonUI: `CommonUI_InsideLayout` `b1-$b38` [:1679-1681; dom :276].
- `FilterSheet` `b1-$b39` outside the layout: In_Options {HasSorting.Enable False, HasCountries.Enable True, HasLocalities.Enable False}, empty In_StartFilter [:1704-1731; dom :356].

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| `ScreenBlock_Search/ScreenDataSetGet_SearchBirthdayOptions` | aggregate | OnReady when Connect_OutSystems_PermissionCheck(C2EnableSearchByBirthday) [call-sites.md; :3253-3261] | MaxRecords 50, StartIndex 0 | List (Name, SearchName, Order) for Search_BirthdayOptions | recorded fixture | real (recorded), empty, error, loading |
| `ScreenBlock_Search/DataActionFetchSearchResults` | data action | Action_RefreshSearch (Submit, recent term, tag change, ApplyFilters) [:2302-2530] | block variables (SearchKey_Current, SelectedCategory, SelectedCountryIds, …) [openapi Input] | Households, People, Places (Connect_Search_CS.SearchResult) | not recorded → Q2 | fictional (Q2), empty, error |
| CacheControl_AllCountries / CacheControl_UserInfo `DataActionGetCacheInfo` | data | inside FilterSheet (shared) [call-sites.md] | — | — | shared mocks | shared |
| SynchAppContext, AfterInitialize, Sync_Info_GetMain, GetNumberUnreadMessages, CacheableMapEntities, CacheableHouseholds | server | app start / shell [call-sites.md] | — | — | shell | shell |

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| block | OnInitialize | TagList = SearchCategory_GetList (All, Households, Members, Places), IsSelected = Id = SelectedCategory [:3299-3310; Utils.controller :5037-5083] | — | — | — |
| block | OnReady | isBirthdaySearchEnabled = flag C2EnableSearchByBirthday; if True refresh Get_SearchBirthdayOptions(50, 0) [:3253-3261] | birthday options | — | — |
| Input | OnChange | SearchKey_Current = string; isBirthdayKeyWord = Index(string, "birthday", case-insensitive) <> -1; refresh recent lists [:3827-3841] | — | — | — |
| Input | Submit | SearchKey_Current = string; ValidateSearchPhoneNumber (UBTConnect.controller.js:17954-18070); valid → Action_RefreshSearch, else FeedbackMessage_AutoClose("", ErrorMessage, Error) [:2180-2196] | FetchSearchResults | — | "Please enter a valid phone number" |
| Recent term / birthday option | click / Selected | OnClick_RecentSearchTerm: SearchKey_Current = Term; Action_RefreshSearch [:2221-2240, :1176] | FetchSearchResults | — | — |
| Recent term close icon / Clear all | click | DeleteConnectSearch_RecentSearchTerm + refresh terms [:3774-3792]; RemoveAll + refresh both [:3359-3615] | — | — | — |
| Input | ClearString | SearchKey_Current = ""; SearchKey_LastSearched = ""; Action_ClearResults [:3338-3345] | — | — | — |
| HorizontalTagList | Changed | SelectedCategory = selected tag Identifier; TagList = updated; refresh recent clicked; Action_RefreshSearch [:3918-3936] | FetchSearchResults | — | — |
| FilterSheet | SheetInitialized / Loaded / ApplyFilters | BottomSheetId_Filter = id; IsLoaded True, ShowSubscriptionOnClick; SelectedCountryIds = list titled CountriesTitle .SelectedIds, HasFiltersApplied, Action_RefreshSearch [:2282, :3751-3754, :3656-3669] | FetchSearchResults | — | — |
| Action_RefreshSearch | — | if Trim(SearchKey_Current) <> "": save recent term (CR-Search-1), ClearResults, HasSearched True, LastSearched = Current, IsLoading True, fetch; else nothing. Errors: NotRegistered re-raised; BubbleCommunicationException / others → ClearResults, IsLoading False, raise UserException BubbleCommunicationException / BubbleGenericException [:2327-2591] | FetchSearchResults | — | flow handler message |
| OnAfterFetch | — | IsLoading False; HasPeople/HasHouseholds/HasPlaces = list not empty and SelectedCategory in (null, All, own) [:3879-3888] | — | — | — |
| result item | click | RecordDisabled → App_Subscription_ShowUpgradePopUp; else save clicked (CR-Search-1); Event_SearchResultClick; In_IsEventNavigation ends; Locality → Locality_Details(LocalityId = Id); Member/Household → C2EnableCarousel ? SetPreloadObject(distinct enabled household ids) + HouseholdCarousel(In_StartingHouseholdId = HouseholderId) : HouseholdDetails(HouseholdId = HouseholderId) [:2697-3178] | — | see logic | upgrade popup |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | not HasSearched, empty recent lists | yes | real |
| loading | data calls pending (shell feedback message shown by the app) | yes | loading |
| offline | data calls fail; FilterSheet_Icon stays in skeleton | yes | error |
| results / no results / recent / birthday | HasSearched / recent lists / birthday keyword | no → built from the compiled views (survey sources), not captured | real (fictional FetchSearchResults) |

## Patterns used
- P-PARAMS: navigation to Locality_Details / HouseholdCarousel / HouseholdDetails with the original parameter names.
- P-STATES: NotCaptured for results, recent and birthday blocks; loading/offline through the shared blocks.
- P-DATA: `api.ts` adapters (birthday options query, FetchSearchResults) with domain types in `types.ts`.
- P-MOCKS: `mocks.ts` recordedHandler for the birthday options, contractHandler for the fictional search results.
- P-CALLS: birthday options on OnReady (load), FetchSearchResults only on user events.
- P-FLAGS: `useFlagOn('C2EnableSearchByBirthday')`, `useFlagOn('C2EnableCarousel')`.
- P-DIALOG: upgrade dialog through the shell (`showUpgradePopUp`), error messages through `raiseToFlowHandler`.
- P-BACK: block variables (search key, category, results) kept with `useViewState`.

## Feature flags
- `outSystems_FF.c2EnableSearchByBirthday`: MCP unavailable; decision default-only, TST value on (user, 2026-10-14); implemented as `useFlagOn('C2EnableSearchByBirthday')`, which controls the birthday options call and block.
- `action:getHasCarouselEnabled` (C2EnableCarousel): decision default-only, TST on (user, 2026-10-14); `useFlagOn('C2EnableCarousel')` in the item click.
- `action:getHasC1DirectoryView`, `action:getHasNewBookmarks`, `launchDarkly_FF.mobileDirectoryBookmarkNote`, `action:connect_LaunchDarkly_PermissionCheck`, `clientVar:App_PIN_BiometricEnabled`, `registeredCallbackEvents.onToggle`, `action:getFlagURLByCountryCode`: read inside shared/shell blocks (BottomBarMenu, FilterSheet, CommonUI); not read by this route's code (decisions user, 2026-10-14).

## Unclear points
- Q1 (recent searches): answered by the user (2026-10-15) — CR-Search-1 applied; IndexedDB adapter `shell/localEntities/recentSearch.ts` (UBTConnect.entities.js:3, 90-139, 319-427; aggregates.IDB.js), Recent search UI from ScreenBlock_Search view :502-1119.
- Q2 (results): answered by the user (2026-10-15) — SearchResult_Section (survey sources, view :334-650) and Search_BirthdayOptions (view :223-385) built; FetchSearchResults stays a fictional contract mock (not recorded).
- Q3 (submit validation): answered by the user (2026-10-15) — ValidateSearchPhoneNumber ported (`components/actions.ts`).
- Q4 (input focus): answered by user — exemption CAPTURE-UNFOCUSED-SEARCH-INPUT.
- Q5 (extra GetUserInformation): answered by the user (2026-10-15) — CR-Search-3 applied in the shell; no extra call.
- SearchResults_Recent.mvc.js (survey sources) is a separate block that ScreenBlock_Search does not use. The recent UI is inline in the view of ScreenBlock_Search (:502-1119), and the React app builds it from there.

## Decisions to confirm
- FetchSearchResults is not recorded: fictional contract mock (2 households, 3 members, 1 place, any term; `empty` = none).
- No captured state shows the recent search, the result sections, the birthday options and the no-results texts. The React app builds them from the compiled views (review by hand: type a term, submit, open a result, come back).
- Named widget ids (`b1-RecentSearch`, `b1-Recent_SearchResults`, `b1-Recent_SearchTerms`, `b1-Padding`, `b1-PlacesSection`, …) follow the OutSystems naming but are not captured.
- OSWidgets.List markup of the uncaptured lists (`list list-group OSFillParent` + `data-list`; recent clicked also `data-animation-disabled`/`data-virtualization-disabled`) follows the captured lists of other blocks.
- Static values not in the shared constants taken from TST (knowledge/static-entities-tst.json): icons history/calendar/close, space xs, font weight bold.
- The React app stores the recent lists in IndexedDB, as TST does (no tokens; user id, terms and clicked result names stay on the device).
- Input FocusOnReady kept; captured unfocused border masked by the accepted exemption CAPTURE-UNFOCUSED-SEARCH-INPUT (Q4).
- Shell change (CR-Search-3): the signed-in app start waits for the first screen before Sync_Info_GetMain. User-info readers wait for the step of the app start. Regression parity is 0 on Login, PINUnlock, PINRegister, Splash, HomeFeed, MyEntertaining.

## Change requests
- CR-Search-1: shell local entities (applied; IndexedDB follow-up done)
- CR-Search-2: shared Input FocusOnReady (superseded by the accepted exemption, Q4)
- CR-Search-3: extra ActionGetUserInformation at load (applied, closed)

## Parity
| State | Scenario | structure | class | attr | text | style | layout | pixel | call | Exemptions fired |
|---|---|---|---|---|---|---|---|---|---|---|
| default | real | 0 | 0 | 0 | 0 | 0 | 0 | 0 (0.10 %) | 0 | link cursor, badge masked text, ignoreSubtrees (input focus) |
| loading | loading | 0 | 0 | 0 | 0 | 0 | 0 | 0 (0.10 %) | 0 | link cursor, skeleton shimmer, badge, ignoreSubtrees |
| offline | error | 0 | 0 | 0 | 0 | 0 | 0 | 0 (0.10 %) | 0 | link cursor, skeleton shimmer, badge, ignoreSubtrees |

Two consecutive runs after the last change, 2026-10-15.

## Server-side notes
- DataActionFetchSearchResults must scope results to what the session user may see (RecordDisabled marks subscription-locked items; the client only shows the upgrade dialog).
