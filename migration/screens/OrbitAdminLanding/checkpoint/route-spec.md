# Route spec: OrbitAdminLanding

Sources: SCR = `analysis/sources/pretty/UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding.mvc.js`, SB =
`analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc.js`,
dom = `analysis/dom/<state>.html`.

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/OrbitAdminLanding` with inputs none [SCR view :148 `inputs: {}`] |
| Tier | lite |
| Captured | 2026-10-16, viewport 390×844, states: default (no admin event: NoInformation_Orbit), loading (skeleton), offline (skeleton + Service Interruption) [states.json] |
| Shared/shell components used | Layout_Orbit, MenuIcon__UpdatedOSUI (`src/shared/Connect2_LegacyShared/`), Card_Event, NoInformation_Orbit, Skeleton_Loading (`src/shared/Connect2_OrbitMobile_MUI/`), BottomBarMenu, CommonUI_InsideLayout (`src/shared/UBTConnect/`), OSList (`src/components/OSList`) [pack Block plan] |
| Screen-specific components | `components/ScreenBlock_AdminLanding.tsx`, `components/actions.ts` (OnApplicationEvent_ClickEvent), `components/staticEntities.ts` |

## Specification
### Structure
Screen (SCR view :115-205) = ScreenBlock_AdminLanding `$b1` (BottomBarMenu `$b2` in its BottomBar, empty Menu /
CommonUI_Elements) + CommonUI_InsideLayout `$b3`. The block (SB view :170-425): Layout_Orbit `b1-$b1` with
MenuIcon__UpdatedOSUI `b1-$b2` (MenuAction "Menu", SB :196), title = flag icon `menu-icon-Orbit`, HeaderContent =
`orbit-admin-header-cont > orbit-admin-header-text-cont > span.orbit-admin-header-text` = UserFirstName (SB :226-258;
dom/default.html header), Content (SB :260-388): IsFetchingData → Skeleton_Loading `b1-$b5` (OrbitSkeletonLoading
.OrbitLanding, SB :375); else if fetched → the list `list list-group orbit-card-list` (virtualization disabled, SB
:262-278) of `orbit-card-list-cont > Card_Event` (alias 3) or NoInformation_Orbit `b1-$b4` with the captured message
(SB :350; dom/default.html:69-75).

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| DataActionGet_AdminEventsList | data action (on demand, dataFetchDependenciesOriginal -1, SB :434-436) | OnReady → Refresh_GetEventsByMemberId (SB :476-506) [calls.md #2] | none (screenData.variables IsFetchingData, UserFirstName, UserMemberId) | Response (GetAdminOrbitEvents_ScreenRec: OrbitSummaryItem + OrbitEventType) | must list only the session user's admin events (QR scanning required) | real (3 events), noadminevents (Q1), empty, loading, error |
| GetMilestoneScanFF (UBTConnect) | server action | Card click → NavigateTo_EventDetail → OnHandle_NavigateToEventDetail (SCR :245-300) [pack "Declared … not observed"] | none | IsScanPerMilestone | feature switch read on the server | real False (Q2), scanpermilestone True |
App-start calls (SynchAppContext, AfterInitialize, Sync_Info_GetMain, GetUserInformation, GetNumberUnreadMessages,
CacheableMapEntities / Households) are the shell's [calls.md #1, #3-#8].

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| Block | OnReady (SB :507-570) | restored from cache → nothing (P-BACK); else IsFetchingData True, AppManager_GetCachedUserInfo → UserFirstName, UserMemberId (TextToLongIntegerValidate, else null id) → Refresh | Get_AdminEventsList | – | – |
| Get_AdminEventsList | OnAfterFetch (SB :643-662) | EventsSummary = Response; IsFetchingData False | – | – | – |
| Card_Event | ClickedEvent → OnHandle_EventCardClicked (SB :579-642) | trigger NavigateTo_EventDetail(EventId, Title, StartEventDate, EndEventDate, EventLocation, row TypeFriendly), then OnApplicationEvent_ClickEvent(AuditPayload_ClickEventRec, SB :603-610; app log) | via screen: GetMilestoneScanFF | IsScanPerMilestone → `OrbitAdminMilestones(EventId)` (SCR :278); else `OrbitAdminEventDetail(In_EventId, In_EventStartDate, In_EventLocation, In_EventName, In_EventEndDate, In_EventTypeFriendly)` (SCR :284-291), DateTimes as `toISOString()` (osNavigate.ts:23-35) | – |
| MenuIcon | back | shared block (MenuAction Menu) | – | back | – |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | fetched, EventsSummary empty → NoInformation_Orbit | yes | noadminevents (Q1; pending capture-plan) |
| with events | fetched, EventsSummary not empty → card list | no (TST account has none) | real |
| loading | IsFetchingData → Skeleton_Loading | yes | loading |
| offline | answer fails → skeleton stays, Service Interruption feedback (shell) | yes | error |

## Patterns used
- P-DATA: `api.ts` adapters (`getAdminEventsList`, `getMilestoneScanFF`), wire types from the contract in `types.ts`.
- P-CALLS: the data action on OnReady, GetMilestoneScanFF on the card click before the navigation (SCR :245-300).
- P-MOCKS: `mocks.ts` with `contractHandler`, scenarios real / noadminevents / scanpermilestone / empty / loading / error.
- P-STATES: skeleton while fetching, NoInformation_Orbit when empty, nothing before the first fetch (SB :260-388).
- P-LIST: OSList for the card list (`animateItems`, `disableVirtualization`).
- P-BACK: `useViewState('Model')` + `useWasRestoredFromCache` (OnReady does nothing when restored).
- P-PARAMS: original parameter names and order of OrbitAdminEventDetail / OrbitAdminMilestones.

## Feature flags
- `action:connect_LaunchDarkly_PermissionCheck`, `clientVar:App_PIN_BiometricEnabled`: decided "not a flag" (user, 2026-10-14); shell behaviour.
- `action:getHasC1DirectoryView` (on), `action:getHasNewBookmarks` (off), `launchDarkly_FF.mobileDirectoryBookmarkNote` (off): default-only, TST values (user, 2026-10-14); read only by the shared BottomBarMenu, nothing in this route.

## Unclear points
- Default parity on an empty admin list while the real mock shows admin events → Q1 (decision, open; built with A).
- Value of GetMilestoneScanFF and the OrbitAdminMilestones target missing on TST and in the app → Q2 (decision, open; built with A).
- Empty admin name in the header (shell's cached user record has no FirstName) → Q3 (decision, open; built with B = CR-OrbitAdminLanding-1).

## Decisions to confirm
- Q1 → A (pending orchestrator answer): real mock = three fictional admin events (orbitAdmin.ts: the weekend conferences 7301 of orbit.ts, a youth day at Monte Hermoso, a gospel meeting at the Bahia Blanca hall), `?mock=noadminevents` = the captured empty account; capture-plan `scenarios.default = "noadminevents"` proposed in `proposed-capture-plan.json`.
- Q2 → A (pending orchestrator answer): GetMilestoneScanFF False; the True branch navigates to `/UBTConnect/OrbitAdminMilestones?EventId=…` as compiled (no such route in the app or on TST) via `?mock=scanpermilestone`.
- Q3 → B (pending orchestrator answer): CR-OrbitAdminLanding-1 (shell returns the mock user's FirstName / MemberId from memory); until applied the header span is empty (interim exemption proposal).
- Proposed exemptions (migration/screens/OrbitAdminLanding/proposed-exemptions.json): offline skeleton shimmer phase; interim header pseudo.
- Card list row ids `b1-l1-7_<i>-$b3` (the list's runtime counter is not captured; "7" is the list uuid, SB :278-290).
- Admin events' OrbitEventType = 'event-admin' (static entity; record Type / Name "Admin" by analogy with the captured Host record, purple, meeting icon; orbitAdmin.ts ORBIT_ADMIN_EVENT_TYPE); TypeFriendly texts fictional ("Weekend Conference Program", "Youth Day", "Gospel Meeting").
- OnApplicationEvent_ClickEvent writes the app log (as OrbitLanding's Orbit audit events), no server call.

## Change requests
- CR-OrbitAdminLanding-1: shell `appManager_GetCachedUserInfo` returns the mock user's FirstName / MemberId in memory (open, Q3)

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real (capture-plan has no scenario yet) | 2 | 0 | 0 | 0 | 2 | shared CAPTURE-*; the list of three admin events vs the captured empty list (Q1). Unofficial run with `--mock noadminevents`: only the header pseudo (Q3) |
| loading | loading | 0 | 0 | 0 | 0 | 0 | shared CAPTURE-*; pseudo 1 = header name (Q3, proposed OA-LANDING-HEADER-NAME-EMPTY-UNTIL-CR) |
| offline | error | 0 | 0 | 0 | 6 (shimmer phase, proposed ORBITADMINLANDING-SKELETON-SHIMMER-PHASE-OFFLINE) | 0 | shared CAPTURE-*; pseudo 1 = header name (Q3) |
Calls: 0 differences in every state.

## Server-side notes
- Get_AdminEventsList must return only the events the session user administers (no member id input: the server reads the session).
- GetMilestoneScanFF is a server switch; no user data.
