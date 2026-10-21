# Route spec: AssembleEvents

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/AssembleEvents` with inputs SubdivisionId (Long Integer, 0), ShowBackNavigation (False), IsUserSubdivision (True) [pack.md; AssembleEvents.mvc.js model] |
| Tier | full |
| Captured | 2026-10-16 (full-permission account, no meeting), viewport 390×844, states: default, loading, offline [analysis/states.json] |
| Shared/shell components used | CommonUI_InsideLayout, BottomBarMenu (`src/shared/UBTConnect/`), BottomSheet (`src/shared/UBTConnectLibrary/BottomSheet`), Input (`UBTConnectLibrary/Input`), Layout, MenuIcon__UpdatedOSUI, NewConnectContent, LocalityListDetail, Spinner, NC_Card_Item_Text__Skeleton, NC_Result_Item_Badge (`Connect2_LegacyShared/`), AssembleSummaryCard, AssembleSummaryDetailHeader_Skeleton, Assemble_FilterLocalityByCountry (`Connect2_Assemble_MUI/`), Tag, InputWithIcon (`osui/`), ScrollAnchor, Dialog_AccessRestrictedAction_Legacy; lib: getCacheableUserInfo, getCacheableRegionSubscribedCountries (added, see Change requests), removeDiacritics, hasAccessToRegion, bottomSheetOpen/Close, confirmAction, showUpgradePopUp |
| Screen-specific components | `components/`: ScreenBlock_AssembleEvents, AssembleSummary_List (+ StickyHeader), HorizontalTags (+ HorizontalScrollTiles), AssembleSummary_List__Header, NC_ErrorScreen, AssembleSummary_SkeletonList (+ NC_Result_Item__Card__Location markup), AssembleSummary_FilterDrawer, InBlock_ActionMenu, Assemble_FilterSheet; `actions.ts` (Connect2_Assemble_MUI client actions) |

## Specification
### 1. Structure
Screen [AssembleEvents.mvc.js view :150-330]:
- CommonUI_InsideLayout `$b1`.
- ScreenBlock_AssembleEvents `$b2`, with the inputs and BottomBar = BottomBarMenu `$b3`.
- BottomSheet `BottomSheet_AssembleFilter` (Title "Test", CloseOnClickOutsite) with Assemble_FilterSheet
  `Assemble_FilterSheet_Instance` (scope b5) [dom/default.html:475-1180].

ScreenBlock_AssembleEvents [mvc.js view :170-470]:
- Layout.
- HeaderLeft: MenuIcon. It is Back if ShowBackNavigation, else Menu.
- Title: DIV_Assemble "Assemble" (IsUserSubdivision) and DIV_SMName (SubdivisionName).
  DIV_SMName has the classes `text-align-center` and ` font-size-0-75em`, unless ShowBackNavigation and not IsUserSubdivision.
- HeaderRight (IsUserSubdivision): calendar icon and place link.
- Content: NewConnectContent `b2-$b3` > AssembleSummary_List `b2-$b4` [dom/default.html:180-265].

AssembleSummary_List [mvc.js view :135-281]:
- DIV_Root > StickyHeader (pill menu HorizontalTags Upcoming/Past, list header).
- When the fetched list is empty: NC_ErrorScreen "We were unable to find any meetings to display."
- Otherwise: DIV_ResultList > List_AssembleSummaryCards (ScrollAnchor and AssembleSummaryCard IsListItem for each meeting).
- Until the screen has the list: skeleton list (3).
- FilterDrawer `b2-b4-$b8` [dom/default.html:155-305; loading.html:194-330].

### 2. Data
| Call | Kind | Trigger | Inputs | Outputs used | Mock |
|---|---|---|---|---|---|
| Connect2_LegacyShared/ActionGetUserInformation | server (GetCacheableUserInfo) | ScreenBlock OnReady (SubdivisionId 0), List SetLocalSubdivisonId, FilterSheet OnReady | none | Subdivision.Id / Name | shared mock; user hall = SUPPER_MEETINGS[0] (added) |
| UBTConnect_Utils/ActionGetUserInformation | server (Cache_UserInfo_Get) | FilterSheet FetchCountries | none | SubscriptionRegionId | shell mock (CR-Assemble_BrowseByCountry-1) |
| Connect2_LegacyShared/ActionGetCountriesBySubscription | server | FilterSheet FetchCountries | SubscriptionRegionId | Countries | 17 fictional countries |
| AssembleSummary_List/DataActionGetAssembleEventTypes | data action | List OnReady (FetchData JS) | screen variables | AssembleEventTypeList | 5 fictional types |
| AssembleSummary_List/DataActionGetAssembleMeetingSummaryList | data action | List OnReady; Refresh_EventList; OnScrollEnding | LocalSubdivisionId, EventList_Filter, range, page, MaxRecords 10, DeviceTimezone | AssembleSummaryMeetingList | hall programme (filters, paging); `nomeetings` → empty |
| ScreenBlock_AssembleEvents/DataActionGetSubdivisionName | data action (not observed) | ScreenBlock OnReady with a SubdivisionId | SubdivisionId … | SelectedSubdivisionName | hall name |
Calls #1, #5, #7, #9-#11 are the shell's app start [calls.json].

### 3. Behaviour
| Element / lifecycle | Event | Logic | Navigates to |
|---|---|---|---|
| ScreenBlock | OnReady | restored → nothing; SubdivisionId 0 → GetCacheableUserInfo Name, else GetSubdivisionName [ScreenBlock mvc.js controller] | – |
| List | OnInitialize / OnReady | Upcoming + range (C:246-317), header menu, label, IANA tz; OnReady SetLocalSubdivisonId then both data actions; restored → only the missing ones [List mvc.js :335-372, :629-644] | – |
| HorizontalTags | OnClickTag | time option = tag, ApplyFilters → Refresh_EventList [:645-653, :505-534] | – |
| List header | OnClick / Clear | toggle drawer / unselect types + refresh [:419-435, :622-628] | – |
| Card | OnClick | unavailable → nothing; preload {AssembleEventSummary, PreloadedFromListIndex}; NavigateTo_AssembleDetail [:550-566] | `/UBTConnect/AssembleDetail` (Start, EventId, SeriesId) |
| List | OnScrollEnding | fetched and HasMoreRecords → next page appended [:535-549] | – |
| FilterDrawer | Apply / Cancel / Reset / search / checkbox / container click / back | as compiled [FilterDrawer mvc.js :560-1230]; PreventBackNavigation while open | – |
| Calendar icon | OnClick | – | `/UBTConnect/MyEntertaining` (MyCalendarEventSourceId "event-assemble") |
| Place link | OnClick | UseNewFilterSheet (never set: False) → BottomSheetOpen, else | `/UBTConnect/Assemble_BrowseByCountry` |
| FilterSheet | Cancel / NavigateToSubdivision | BottomSheetClose / SubdivisionId, IsUserSubdivision + close [screen controller] | – |

### 4. States
| State | Condition | Captured | Scenario |
|---|---|---|---|
| default | list fetched, no meeting → NC_ErrorScreen; sheet countries listed | yes | nomeetings (Q1) |
| loading | summary not fetched → skeleton list, header skeleton; sheet Spinner | yes | loading |
| offline | data actions fail → skeleton stays; flow handler message | yes | error |
| meetings, past, filters, drawer open, sheet localities | compiled code | no (tests `AssembleEvents.test.tsx`) | real |

## Patterns used
- P-CALLS / P-DATA: `api.ts` (data actions with their owner; shared client actions for the server actions).
- P-MOCKS: `mocks.ts` on `src/mocks/fictional/assemble.ts`; scenarios real, nomeetings, empty, error, loading.
- P-STATES: skeleton list, NC_ErrorScreen, Spinner.
- P-BACK: `useWasRestoredFromCache` + `useViewState` for the list and the block name; BackNavigation prevented while the drawer is open.
- P-PARAMS: inputs from the query string; original paths and parameter names.
- P-LIST: OSList for tags, meetings, skeleton rows, drawer types.
- P-OSUI: Tag, InputWithIcon, BottomSheet (bottomSheetOpen / bottomSheetClose).
- P-DIALOG: FreeSubscriptionAlert via confirmAction.

## Feature flags
- `connect_LaunchDarkly_PermissionCheck`, `App_PIN_BiometricEnabled`, `onToggle`: decision "not a flag (false positive)" (user, 2026-10-14); nothing to build.
- `C2EnableC1DirectoryView` (TST on), `C2NewBookmarks` (TST off), `mobileDirectoryBookmarkNote` (TST off): default-only (user, 2026-10-14); read only inside the shared BottomBarMenu, not by this route's code.

## Unclear points
- Which mock data the default parity runs on (TST account without meetings) → Q1 (decision, answered A) [questions.md Q1].
- Text format of the Start URL parameter to AssembleDetail → Q2 (fact, answered). The text is the UTC instant in ISO 8601 with milliseconds and Z, `yyyy-MM-ddTHH:mm:ss.fffZ` [questions.md Q2]. The React app ports it as shell/navigation `dateTimeParam`.
- Extra GetUserInformation calls from concurrent cache reads → Q3 (decision, answered A = CR-AssembleEvents-1, applied by foundation F13) [questions.md Q3].
- The mock user's empty SubscriptionRegionId stops the sheet's country list → Assemble_BrowseByCountry Q1 / CR-Assemble_BrowseByCountry-1.

## Decisions to confirm
- Q1 → A (answered) [questions.md Q1]: capture-plan AssembleEvents `scenarios.default = "nomeetings"`; the real mock shows the user's hall meetings.
- Q2 → the Start text is the UTC instant `yyyy-MM-ddTHH:mm:ss.fffZ` (answered, code) [questions.md Q2]. The null DateTime gives `1900-01-01T00:00:00`.
- Q3 → A (answered) [questions.md Q3]: CR-AssembleEvents-1 (shell memory cache shares a pending miss).
- OffsetDateTimeByUserUTCOffset returns the DateTime unchanged. The React app has no platform UTC conversion to compensate for (`components/actions.ts`).
- Data actions: the React app issues GetAssembleEventTypes before GetAssembleMeetingSummaryList, as the capture does (calls.json #6, #8). The FetchData JS starts the summary first.
- Not reproduced: show/hide animations (DIV_StickyBottom, Clear, DIV_ListHeader, DIV_Assemble), the action menu's transient `--animatable` class, RememberFocusedScrollAnchor (no shell helper); OSList item ids of the meeting cards are not captured (`l1-<index>`).
- Fictional data: event types, halls (directory-world halls with invented addresses), weekly programmes, and video-call links on example.com (`src/mocks/fictional/assemble.ts`).
- The Connect2_LegacyShared user mock now carries the user's hall (Zapiola, SUPPER_MEETINGS[0]).
- Proposed exemptions (`proposed-exemptions.json`):
  - CAPTURE-LINK-HREF-CURSOR-ASSEMBLEEVENTS (capture artifact, merged).
  - CALL-ORDER-APPSTART-RACE-ASSEMBLEEVENTS (merged).
  - CAPTURE-MASKED-COUNT-WIDTH-ASSEMBLEEVENTS-SHEET (new). The sheet rows sit outside `.backwards-compatibility`, so they are inline-blocks sized by their text.
    The masked counts ('•' is narrower than digits) make the reference rows narrower.
    When the React app uses the captured masked counts, it gives exactly the reference widths and offsets.

## Change requests
- CR-Assemble_BrowseByCountry-1: shell mock user SubscriptionRegionId non-empty (open; blocks the sheet's country list).
- CR-AssembleEvents-1: shell memory cache shares an in-flight miss (applied by foundation F13) [questions.md Q3].
- Shared changes made (orchestrator allowance, minimal): `Connect2_LegacyShared/lib/actions.ts` getRegionSubscribedCountries / getCacheableRegionSubscribedCountries, `staticEntities.ts` RegionSubscribedCountries, `lib/mocks.ts` user Subdivision (Id, Name); new `src/mocks/fictional/assemble.ts`.

## Parity
| State | Scenario | structure | style | layout | position | other | Cause |
|---|---|---|---|---|---|---|---|
| default | nomeetings | 0 | 35 | 20 | 34 | text 0, pixel 0, call 0 | masked counts in the sheet rows (CAPTURE-MASKED-COUNT-WIDTH-ASSEMBLEEVENTS-SHEET, proposed) |
| loading | loading | 0 | 0 | 0 | 0 | – | clean |
| offline | error | 0 | 0 | 0 | 0 | – | clean |

## Server-side notes
- GetAssembleMeetingSummaryList / GetSubdivisionName must scope meetings to halls the session user may see (the client sends LocalSubdivisionId and the filter).
- GetCountriesBySubscription must derive the region from the session, not trust SubscriptionRegionId.
