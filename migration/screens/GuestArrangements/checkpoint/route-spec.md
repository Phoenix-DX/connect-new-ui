# Route spec: GuestArrangements

Sources (analysis/sources/, extracted unchanged from capture/survey-UBTConnect.json `sources`): `S` =
UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js, `SB` = Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.
ScreenBlock_GuestArrangements.mvc.js, `C` = migration/runtime-sources/Connect2_OrbitMobile_MUI.controller.js.
No capture (no-capture.json, user 2026-10-16): built from the compiled code.

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/GuestArrangements` with In_MilestoneId (Text), In_EventId, In_MemberId, In_HostId (Long Integer), In_OrbitMilestoneTypeId, In_MilestoneTitle, In_EventName (Text) [S model :12-55] |
| Tier | lite |
| Captured | not captured (no-capture.json: not reachable read-only on TST) |
| Shared/shell components used | Layout_Orbit, MenuIcon__UpdatedOSUI (shared/Connect2_LegacyShared); Accordion_Orbit, Card_MemberInformation, MilestoneHeader, NoInformation_Orbit, Skeleton_Loading, ContactHelpdesk_Footer, lib checkDirectoryAccess / getFormattedDateTime (shared/Connect2_OrbitMobile_MUI); DEPRECATED_AccordionItem (shared/osui); Dialog_AccessRestrictedAction_Legacy (shared/UBTConnect_Utils); CommonUI_InsideLayout (shared/UBTConnect); OSBlock, OSList; useViewState, useWasRestoredFromCache, raiseToFlowHandler, showFeedbackMessage, showUpgradePopUp (shell) |
| Screen-specific components | ScreenBlock_GuestArrangements (own block, not built elsewhere); components/actions.ts (C ports, as MilestoneDetail) |

## Specification
### Structure
Screen [S view :196-268]: ScreenBlock_GuestArrangements `$b1` (In_OrbitMilestoneTypeId, In_PreloadMilestoneName =
In_MilestoneTitle, In_HostId, In_PreloadEventName = In_EventName, In_MemberId, In_MilestoneId, In_EventId; Menu and
CommonUI_Elements empty), CommonUI_InsideLayout `$b2`.
ScreenBlock [SB :238-1412]: Layout_Orbit CustomClass "orbit-detail" [:253]; HeaderLeft MenuIcon__UpdatedOSUI (Auto);
Title MilestoneHeader(In_PreloadMilestoneName, In_OrbitMilestoneTypeId, In_PreloadEventName) [:304-322]; Content
[:332-1336]: IsFetchingData → Skeleton_Loading(GetSkeletonLoadingIdFromMilestoneTypeId(In_OrbitMilestoneTypeId));
else fetched → HasData ? arrangements : NoInformation_Orbit("No guest arrangement data has been found. Please check
again later or contact the Orbit Helpdesk if you have any questions.") [:1289]; not fetched → nothing. Arrangements
[:336-1283]: `full-width margin-top-m` > name row (`full-width padding-x-m margin-bottom-m display-flex
flex-direction-column` > `full-width bold color-orbit-primary-7` > Title + " " + FirstName + " " + LastName), then one
Accordion_Orbit (default inputs) with one DEPRECATED_AccordionItem (IsExpanded, no padding, "orbit-accordion-item")
per non-empty list:
- "Special Need/s" [:397-628]: List "list list-group orbit-household-list" of Card_MemberInformation (no location, no
  personal info, no dot, IsHouseholder False, ClickedMember → OnHandle_ClickedMember with Type Member), Placeholder_Info
  `full-width` (when the member's needs are not empty) > List "list list-group orbit-member-list" > `full width
  text-neutral-6 margin-top-xs` > Type + (": " + Notes when both set, else Notes) [:510-602].
- "Arrival Details" [:629-858] / "Departure Details" [:1071-1281]: List "list list-group"; row class "full-width
  padding-x-m" + first/other padding-top + last/other padding-bottom (border-bottom-neutral-4) [:671-674, :1113-1116];
  rows: date (icon orbit-icon-date-time, GetFormattedDateTime(…, time, weekday abbreviated, commas)), travel
  identifier or "Not available" (icon orbit-icon-license-plate), location (icon IconTransportArrival /
  IconTransportDeparture), notes (icon orbit-icon-arrangements, align-items-baseline), each with " margin-top-base" when
  a row above can show.
- "Meal Details" [:881-1068]: same row class; date (weekday, no time, commas) when set, "Midday Meal: …",
  "Evening Meal: …" [:916-1024].
BottomBar: ContactHelpdesk_Footer when HasData [:1340-1366]. After the layout: Dialog_AccessRestrictedAction_Legacy
"FreeSubscriptionAlert" [:1398-1408]. Lists with `disable-virtualization` from IsListVirtualizationDisabled (True, as
the other Orbit routes).

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| Connect2_OrbitMobile_MUI `ScreenBlock_GuestArrangements/DataActionGetGuestArrangements` | data action (on demand) | OnReady → RefreshData [SB :1466-1520, :1549-1582] | block variables IsFetchingData, In_MemberId, In_EventId, In_HostId, In_MilestoneId, In_PreloadEventName, In_PreloadMilestoneName, In_OrbitMilestoneTypeId (record GuestArrangementsData left out, as the other Orbit routes) | Response (GetGuestArrangements_ScreenRec), HasData | not in MCP; must check that the signed-in member hosts (or is) In_MemberId for In_EventId | real (orbit.ts orbitGuestArrangements: members of the Herrera / Ramos households for event 7301; others → HasData False), empty, loading, error |
| Connect2_OrbitMobile_MUI CheckDirectoryAccess (GetDirectoryAccess) | server action via client action | member card click [SB :1614-1700] | HouseholdId, Type Member | HasAccess | shared mock (all access) | shared |
| Connect2_LegacyShared GetSignedImagesInBulk | server action via GetCacheableSignedImageURL | Card_MemberInformation OnReady | Id, Type, Size | SignedURL | shared mock | shared |

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| block | OnReady [SB :1466-1520] | restored from the view cache → nothing; else RefreshData: IsFetchingData True; refresh; OnAfterFetch [SB :1521-1548]: GuestArrangementsData = Response, IsFetchingData False | GetGuestArrangements | – | – |
| member card | ClickedMember(HouseholdId) [SB :495-498, :1614-1700] | CheckDirectoryAccess(HouseholdId, Member): access → NavigateTo_HouseholdDetail then OnApplicationEvent_ViewHousehold (log, U17); else App_Subscription_ShowUpgradePopUp | GetDirectoryAccess | screen OnHandle_NavigateToHouseholdDetail [S :361-385] → `/UBTConnect/HouseholdDetails` (HouseholdId) | upgrade popup |
| footer | Click → OnHandle_ContactHelpdesk [SB :1583-1613] | ContactHelpdesk(GetContactHelpdeskSubject_Milestone(In_OrbitMilestoneTypeId, In_PreloadEventName, In_PreloadMilestoneName, EventDetails.StartDate, EventDetails.Location) [C :2052-2132], In_PreloadMilestoneName) | – | screen OnHandle_ContactHelpdesk [S :295-345]: GetHasOrbitAccess → `/UBTConnect/ContactByEmailOrbitHelpdesk` (In_EventId, In_Subject, In_EventName, In_MilestoneId "") | no access: "You don't have access to Orbit. …" after transition (type 3), HomeFeed |
| any | exception | Legacy_OrbitEventsFlow handleError (raiseToFlowHandler) | – | – | flow handler |
| entry | – | MilestoneDetail ScreenBlock_AccommodationHost OnClick_GuestArrangements, only for a guest with HasGuestArrangements (built; its captured guests have none) | – | – | – |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | fetched, HasData [SB :334-335] | no | real (review URLs, Q1) |
| loading | IsFetchingData [SB :333] | no | loading |
| no data | fetched, not HasData [SB :1286-1295] | no | real with another member |
| error | data action fails → flow handler | no | error |

## Patterns used
- P-PARAMS: query inputs with the original names; navigation with the original parameter names.
- P-DATA / P-CALLS: api.ts `callAction('Connect2_OrbitMobile_MUI', 'ScreenBlock_GuestArrangements/DataActionGetGuestArrangements')` in OnReady only.
- P-MOCKS: mocks.ts contractHandler from the shared Orbit world (src/mocks/fictional/orbit.ts).
- P-STATES: skeleton while fetching, NoInformation without data, as compiled.
- P-BACK: model kept with useViewState; OnReady does nothing after a restore.
- P-LIST: OSList for every List.
- P-FLAGS: useFlagOn('mobileOrbitAccess') for GetHasOrbitAccess.

## Feature flags
- `action:getHasOrbitAccess`: decision default-only, TST value on (user, 2026-10-14); useFlagOn('mobileOrbitAccess') with both paths of the handler (no-access branch as compiled).

## Unclear points
- Mock data and review entry without capture → Q1 (decision, open; built with A).
- Kept 1:1 (user rule 2026-10-14, bugs kept): the arrival date row is visible by the start but shows the end, the
  departure date row the reverse; the travel-identifier row is visible by the location, not by the identifier
  [SB :690-760, :1132-1200]; ContactHelpdesk passes the milestone name as EventName [SB :1583-1613].

## Decisions to confirm
- Q1 → A (pending orchestrator answer): fictional arrangements of the two families the Vitale household hosts for
  event 7301 (orbit.ts orbitGuestArrangements); MilestoneDetail stays as captured (no Guest Arrangements link).
  Review URLs:
  - Herrera family (coach, three members with special needs, three meal days):
    `/UBTConnect/GuestArrangements?mocksession=unlocked&In_MilestoneId=7301-1&In_EventId=7301&In_MemberId=880101&In_HostId=990002&In_OrbitMilestoneTypeId=accommodation-host&In_MilestoneTitle=Accommodation&In_EventName=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul`
  - Ramos family (own car, arrival without number plate → "Not available", no special needs): the same URL with
    `In_MemberId=880201`.
  - no data: `In_MemberId=880301`; loading: add `&mock=loading`; error: `&mock=error`.
- Markup not captured: built from the compiled view (SB).

## Change requests
- none

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| – | no capture (no-capture.json) | – | – | – | – | – | – |

## Server-side notes
- GetGuestArrangements must return only arrangements the signed-in member may see (In_MemberId, In_EventId are client
  input).
