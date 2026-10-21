# Route spec: TransportDetail

Sources (analysis/sources/, extracted unchanged, CRLF → LF, from capture/survey-UBTConnect.json `sources`). The newer TST
copies in migration/runtime-sources/ of the screen, TransportDetail and TransportDetail_TravelInfo differ only in
debugger ids. Keys:
- `S` = UBTConnect.Legacy_OrbitEventsFlow.TransportDetail.mvc.js
- `SB` = Connect2_OrbitMobile_MUI.
  Orbit_ScreenBlocks.ScreenBlock_TransportDetail.mvc.js
- `TD` = Connect2_OrbitMobile_MUI.Orbit_Blocks.TransportDetail.mvc.js
- `TI` = Connect2_OrbitMobile_MUI.Orbit_Blocks.TransportDetail_TravelInfo.mvc.js
- `C` = migration/runtime-sources/
  Connect2_OrbitMobile_MUI.controller.js
- `TF` = migration/runtime-sources/Connect2_OrbitMobile_MUI.TimeFormat.js.

No capture (no-capture.json, user 2026-10-16): built from the compiled code.

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/TransportDetail` with In_MilestoneId, In_OrbitMilestoneTypeId, In_MilestoneName, In_HeaderClass (Text), In_TargetMemberId (Long Integer) [S model :12-41] |
| Tier | lite |
| Captured | not captured (no-capture.json: not reachable read-only on TST) |
| Shared/shell components used | Layout_Orbit, MenuIcon__UpdatedOSUI (shared/Connect2_LegacyShared); Skeleton_Loading, ContactHelpdesk_Footer, lib getFormattedDateTimeById (shared/Connect2_OrbitMobile_MUI); CommonUI_InsideLayout (shared/UBTConnect); OSBlock, OSList; useViewState, useWasRestoredFromCache, raiseToFlowHandler, showFeedbackMessage (shell) |
| Screen-specific components | ScreenBlock_TransportDetail, TransportDetail, TransportDetail_TravelInfo (own blocks, catalog: not built elsewhere); components/actions.ts (C ports) |

## Specification
### Structure
Screen [S view :163-233]: ScreenBlock_TransportDetail `$b1` (In_OrbitMilestoneTypeId, In_MilestoneId, In_HeaderClass,
In_PreloadMilestoneName = In_MilestoneName; Menu, CommonUI_Elements empty), CommonUI_InsideLayout `$b2`.

ScreenBlock [SB :214-382]:
- Layout_Orbit CustomClass "orbit-detail orbit-header-center orbit-transport-detail " + In_HeaderClass;
- HeaderLeft MenuIcon__UpdatedOSUI (MenuAction Auto);
- Title Expression Title;
- Content: IsFetchingData → Skeleton_Loading(GetSkeletonLoadingIdFromMilestoneTypeId(In_OrbitMilestoneTypeId)) [:306-332], else IsDataFetched → block TransportDetail(TransportDetail) [:280-304];
- BottomBar ContactHelpdesk_Footer always [:335-369];
- HeaderRight, HeaderContent empty.

TransportDetail [TD :143-1426]: `transport-detail-cont` with these items, each when its data is set:
- Operator (icon orbit-icon-operator);
- Type (icon class "icon " + MilestoneType.MainIcon);
- Departure / Arrival Location (icon class "icon " + IconTransportDeparture / IconTransportArrival; location, terminal, GetFormattedDateTimeById(MilestoneType.Id, DateTime));
- Baggage Allowance (both texts set; "Carry-on: ", "Checked: ");
- TransportDetail_TravelInfo [TI :163-732];
- Trip Duration (vehicle: GetFormattedTimeDifference(departure, arrival) when a date is set; others: "<h>h <mm>m" when TripDuration is not 0);
- Stops list (title, Stopover Arrival / Departure Terminal, Stop Duration = GetFormattedTime_FromTime(StopDurationTime) shown with a title);
- Seats list (HasSeatInfo and seats; "<dep> → <arr>: " only with stops);
- Notes (bold color-orbit-primary-7).

Markup:
- Every Container `div[data-container]`; extended `class` replaces the Style Classes.
- Icon `i[data-icon]` "<style> fa fa-flag fa-1x" or only the extended class (OutSystemsReactWidgets.js Container / Icon / Expression).
- Both Lists virtualized with vertical rows → `style="position: relative;"` (OSList).

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| Connect2_OrbitMobile_MUI `ScreenBlock_TransportDetail/DataActionGet_TransportDetail` | data action (on demand) | OnReady → Refresh Query [SB :488-522, :408-435] | block variables Title, IsFetchingData, In_MilestoneId, In_OrbitMilestoneTypeId, In_PreloadMilestoneName, In_HeaderClass (record TransportDetail left out, as the other Orbit routes) | Response (MilestoneType, TransportDetail) | not in MCP; must check that In_MilestoneId is a milestone of the signed-in member | real (orbit.ts orbitTransportLegs: 7301-T1, 7301-T2; unknown id → empty record), empty, loading, error |

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| block | OnInitialize [SB :439-478] | not restored from the view cache → Title = In_PreloadMilestoneName | – | – | – |
| block | OnReady [SB :488-522] | IsFetchingData True; refresh; OnAfterFetch [SB :568-603]: TransportDetail = Response; Title = Response.TransportDetail.Title when different; IsFetchingData False (no cache check: refetches after back) | Get_TransportDetail | – | – |
| TransportDetail | OnReady [TD :1451-1495] | HasSeatInfo = True at the first seat with a number | – | – | – |
| footer | Click → OnHandle_ContactHelpdesk [SB :523-558] | TransportNumber = vehicle ? TravelIdentifier : TravelInfo.BookingReference; subject GetContactHelpdeskSubject_Transport [C :2149-2177] | – | screen OnHandle_ContactHelpdesk [S :259-307]: GetHasOrbitAccess → `/UBTConnect/ContactByEmailOrbitHelpdesk` (In_EventName = In_MilestoneName, In_Subject, In_TargetMemberId, In_EventId 0, In_MilestoneId) | no access: "You don't have access to Orbit. …" after transition (type 3), HomeFeed |
| any | exception | Legacy_OrbitEventsFlow handleError (raiseToFlowHandler) | – | – | flow handler |
| entry | – | EventDetail OnHandle_NavigateToTransportDetail (built) for a transport milestone; event 7301 lists none (its capture) | – | – | – |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | fetched [SB :281] | no | real (review URLs Q1) |
| loading | IsFetchingData [SB :280, :306] | no | loading |
| empty | unknown milestone: every item hidden, Title "" | no | real with another In_MilestoneId |
| error | data action fails → flow handler | no | error |

## Patterns used
- P-PARAMS: query inputs with the original names; navigation with the original parameter names.
- P-DATA / P-CALLS: api.ts `callAction('Connect2_OrbitMobile_MUI', 'ScreenBlock_TransportDetail/DataActionGet_TransportDetail')` in OnReady only.
- P-MOCKS: mocks.ts contractHandler from the shared Orbit world (src/mocks/fictional/orbit.ts).
- P-STATES: skeleton while fetching, as compiled.
- P-BACK: model kept with useViewState; OnInitialize skips the preload title after a restore.
- P-LIST: OSList for Stops and Seats.
- P-FLAGS: useFlagOn('mobileOrbitAccess') for GetHasOrbitAccess.

## Feature flags
- `action:getHasOrbitAccess`: MCP unavailable (tst=on); decision default-only, TST value on (user, 2026-10-14); useFlagOn('mobileOrbitAccess') with both paths of the handler (no-access branch as compiled).
- `clientVar:App_PIN_BiometricEnabled`: not a flag (user, 2026-10-14); shell only.

## Unclear points
- Mock itinerary and review without capture → Q1 (decision, answered A; built with A) [questions.md Q1]
- Transport OrbitMilestoneType values (icons, header class, TravelInfoHeader) are server data → Q2 (fact, answered; conservative: the original theme's class names). The user confirmed it for the demo (2026-10-21) [questions.md Q2].

## Decisions to confirm
- Q1 → A (answered) [questions.md Q1]: fictional itinerary of event 7301 (orbit.ts orbitTransportLegs), not listed by EventDetail (its capture has no
  transport milestone). Review URLs:
  - flight with a stop, codeshare, seats, baggage: `/UBTConnect/TransportDetail?mocksession=unlocked&In_MilestoneId=7301-T1&In_OrbitMilestoneTypeId=transport-flight&In_MilestoneName=Flight%20to%20Bahia%20Blanca&In_HeaderClass=orbit-transport-detail-flight&In_TargetMemberId=990001`
  - vehicle (number plate, vehicle, driver, trip duration from the times): `/UBTConnect/TransportDetail?mocksession=unlocked&In_MilestoneId=7301-T2&In_OrbitMilestoneTypeId=transport-vehicle&In_MilestoneName=Airport%20pick-up&In_HeaderClass=orbit-transport-detail-vehicle&In_TargetMemberId=990001`
  - loading: add `&mock=loading`; error: `&mock=error`.
- Q2 (fact): MilestoneType records with the theme's class names (orbit-icon-transportation-<type>[-departure|-arrival],
  orbit-transport-detail-<type>), TravelInfoHeader "Flight Number" / "Number Plate" (fictional).
- Markup not captured: built from the compiled view (TD, TI, SB).

## Change requests
- none

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| – | no capture (no-capture.json) | – | – | – | – | – | – |

## Server-side notes
- Get_TransportDetail must return only a milestone of the signed-in member (In_MilestoneId is client input; the block does not send In_TargetMemberId).
