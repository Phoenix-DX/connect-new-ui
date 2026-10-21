# CR-OrbitLanding-1: API contract — add the two data actions of ScreenBlock_OrbitLanding (Connect2_OrbitMobile_MUI)

- Status: applied (2026-10-16, foundation F9)
- Raised by: OrbitLanding, 2026-10-16
- Block: `app/src/api/openapi.yaml` (+ generated `schema.d.ts`), `app/src/lib/api.ts` `SERVER_REQUEST_TIMEOUT`
- Other routes using it: every Orbit screen calls Connect2_OrbitMobile_MUI data actions (EventDetail, MilestoneDetail, …):
  the module itself is new to the contract
- Related question: OrbitLanding Q1 (decision, recommended A, pending orchestrator answer)

## Evidence
- `grep ScreenBlock_OrbitLanding app/src/api/openapi.yaml`: no hit; the contract has no `Connect2_OrbitMobile_MUI`
  module (the route was decided `build` on 2026-10-16, after the last contract generation).
- Captured calls (`migration/screens/OrbitLanding/analysis/calls.json` rows 2-3, phase load; `calls.md` §
  DataActionGet_HouseholdMembers / DataActionGet_EventsByMemberId):
  - `screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_OrbitLanding/DataActionGet_HouseholdMembers`
    → `Response` (GetHouseholdMembersResponse_ScreenList: MemberId Long Integer, FirstName Text, IsSelected Boolean)
  - `…/ScreenBlock_OrbitLanding/DataActionGet_EventsByMemberId` → `Response` (GetOrbitEventsSummary_ScreenList:
    OrbitSummaryItem {MilestoneId, EventId, Type, Title, DateTime, SequenceNo, MilestoneInfo, EventInfo},
    OrbitEventType, OrbitMilestoneType) and `YearFilter` (YearItemList: Year Long Integer, IsSelected, Count)
  - Model: `ScreenBlock_OrbitLanding.mvc.js` :1-40 (Get_EventsByMemberIdDataActRec, Get_HouseholdMembersDataActRec);
    structures in `migration/contract/sources/raw/Connect2_OrbitMobile_MUI.model.js`.
  - Inputs: the block's screen variables (`x-os-inputs: screen-variables`): HouseholdMembersList, SelectedMemberId,
    IsFetchingData, EventsSummary, EventFilter, SortEventsASC, YearsSelection, Popup_SortByOpened, Popup_FiltersOpened,
    PopupMeasurements, CurrentMemberId.
- Module timeout: `Connect2_OrbitMobile_MUI.controller.js:8742` `defaultTimeout = 10` (runtime-sources); `SERVER_REQUEST_TIMEOUT`
  is `Record<ContractModule, number>`, so adding the module to the contract needs its entry too.

## Expected change
Run the contract generation with OrbitLanding in the build set (both data actions, owner `ScreenBlock_OrbitLanding`,
inputs screen-variables, outputs above), regenerate `schema.d.ts`, add `Connect2_OrbitMobile_MUI` to
`SERVER_REQUEST_TIMEOUT` with its compiled defaultTimeout.

## Workaround in the route until applied
`app/src/screens/OrbitLanding/api.ts` calls the real endpoints with one `@ts-expect-error` per call (Q1 A): MSW answers
them from `mocks.ts`, so the screen and its parity work now. Once the contract has the actions, `tsc` reports the two
directives as unused: delete them (and the local output types they cast to, if the generated ones match) in the same
change.

## Resolution (foundation owner)
Applied 2026-10-16 (F9).
- Contract: `Connect2_OrbitMobile_MUI.ScreenBlock_OrbitLanding.DataActionGet_HouseholdMembers` and
  `.DataActionGet_EventsByMemberId` (owner `ScreenBlock_OrbitLanding`, inputs screen-variables, outputs
  `GetHouseholdMembersResponse_Screen` list / `GetOrbitEventsSummary_Screen` list + `YearItem` list) are in
  `app/src/api/openapi.yaml` and `schema.d.ts`. They were missing only because the contract was generated before the
  2026-10-16 scope decision; the wave 8 O-B3 regeneration already emitted them. `SERVER_REQUEST_TIMEOUT` has
  `Connect2_OrbitMobile_MUI: 10` (also O-B3).
- The bridge stayed "used" after that: ``callAction(…, `${OWNER}/${action}`)`` with `action: string` is not a literal path,
  so `@ts-expect-error` still matched an error. Removed: `api.ts` calls `callAction` with the two literal paths, the
  wire types in `types.ts` derive from the contract (`ActionOutputs` / `ActionInputs`), `mocks.ts` uses
  `contractHandler` (answers checked at compile time; adds the `empty` scenario).
- Generator (`migration/tools/contract_gen.py`), so the other 22 screens do not hit the same gap: scope = every server
  call compiled into a build screen and its transitive block closure (no longer the survey lists filtered by
  `catalog/actions.md`); compiled code = newest TST copy per file (captures, `migration/runtime-sources`,
  `contract/sources/raw`; survey last). Current TST code of the 12 uncaptured Orbit / LDM / Assemble screens fetched
  read-only (`knowledge/runtime-sources.md`, F9 row). Report: `migration/catalog/contract-report.md`.
