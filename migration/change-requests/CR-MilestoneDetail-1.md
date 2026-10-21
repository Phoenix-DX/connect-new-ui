# CR-MilestoneDetail-1: API contract — GetDirectoryAccess and DataActionGetGmpMilestoneHost (Connect2_OrbitMobile_MUI)

- Status: applied
- Raised by: MilestoneDetail, 2026-10-16
- Block: `app/src/api/openapi.yaml` (contract, foundation owner); then `app/src/shared/Connect2_OrbitMobile_MUI/lib/actions.ts`
  (CheckDirectoryAccess) and the route's `ScreenBlock_MilestoneWrapper` / `ScreenBlock_AccommodationHost`
- Other routes using it: every Orbit screen block with member cards (CheckDirectoryAccess on ClickedMember: AccommodationGuest
  / Helper, MealGuest / Host / Helper, HelpersDetail, …); every Orbit milestone opened from a notification
- Related questions: MilestoneDetail Q1 (member click), Q3 (from notification)

## Evidence
- `migration/screens/MilestoneDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.mvc.js:2451-2535`
  OnHandle_ClickedMember → `Connect2_OrbitMobile_MUIController.checkDirectoryAccess$Action(HouseholdId, Type)`;
  `migration/runtime-sources/Connect2_OrbitMobile_MUI.controller.js:1085-1150` CheckDirectoryAccess → server action
  `GetDirectoryAccess(Id, Type)`, HasAccess = not Response.RecordDisabled; with access NavigateTo_HouseholdDetail +
  OnApplicationEvent_ViewHousehold, else App_Subscription_ShowUpgradePopUp.
- `…ScreenBlock_MilestoneWrapper.mvc.js:1120-1160` DataActionGetGmpMilestoneHost
  (`screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_MilestoneWrapper/DataActionGetGmpMilestoneHost`),
  called by OnReady (:1211-1290) when In_FromNotification or an input is missing; the view uses its Response
  (MilestoneType, MilestoneTitle, HostId, Status.Success) only from a notification (:257-260).
- `app/src/api/openapi.yaml`: neither path exists (the schema `Connect2_OrbitMobile_IS__GetGmpMilestoneHostResponse`
  does). Not captured (no click, no notification state).

## Request
Add both operations to the contract (inputs/outputs from the compiled model). Then the route replaces its interim
behaviour: Q1 A (member click navigates as if access were granted) and Q3 A (`<NotCaptured>` for the notification
branch, call skipped).

## Resolution (foundation owner, F11, 2026-10-16)
- Contract: `screenservices/Connect2_OrbitMobile_MUI/ActionGetDirectoryAccess` added to `migration/contract/extra-actions.json`
  (server call reached only through the module client action CheckDirectoryAccess); `contract_gen.py` emits
  `POST /api/Connect2_OrbitMobile_MUI/ActionGetDirectoryAccess` (Id, Type → Response APIDomain_Directory_IS.DirectoryAccess:
  Id, Type, RecordDisabled). `DataActionGetGmpMilestoneHost` was already emitted (closure scope of 2026-10-16:
  `/api/Connect2_OrbitMobile_MUI/ScreenBlock_MilestoneWrapper/DataActionGetGmpMilestoneHost`). `gen:api` run.
- Shared: `checkDirectoryAccess(id, type)` in `app/src/shared/Connect2_OrbitMobile_MUI/lib/actions.ts` (C:1081-1150,
  HasAccess = not RecordDisabled). Fictional mock `app/src/shared/Connect2_OrbitMobile_MUI/lib/mocks.ts` (full-permission
  account: every record enabled); route mock `gmpMilestoneHostAnswer` (milestone of the Orbit world, Success False when unknown).
- Route: OnHandle_ClickedMember → CheckDirectoryAccess(HouseholdId, DirectoryAPIFilter.Member) → navigate + ViewHousehold,
  else `showUpgradePopUp` (App_Subscription_ShowUpgradePopUp). ScreenBlock_MilestoneWrapper ports OnReady (restored / not
  from a notification with every input → nothing; else IsFetchingData, UserMemberId, GetGmpMilestoneHost, OnAfterFetch) and
  the view (skeleton MilestoneWrapper while fetching from a notification; type / HostId / title of the answer; Failed
  layout "This Event could not be found…"). Q1 A and Q3 A interim behaviour removed.
- Parity after the change: MilestoneDetail 0.
