# CR-EventDetail-1: shell app start — SyncAllOrbitStaticEntities (Orbit local entities)

- Status: applied
- Raised by: EventDetail, 2026-10-16
- Block: shell app start (`app/src/shell/startup.ts` Sync_Info_Main, `app/src/shell/mocks.ts` Sync_Info_GetMain mock,
  `app/src/shell/localEntities/`) and `app/src/shared/Connect2_OrbitMobile_MUI/lib/actions.ts` (local entities)
- Other routes using it: every Orbit screen that reads an Orbit local entity (EventDetail: LocalSurveyStatus,
  LocalOrbitMilestoneType 'helper-host'; MilestoneDetail / HostSurvey / HelpersDetail read LocalOrbitMilestoneType,
  LocalHelperRole, LocalMealType, … through GetLocal* aggregates)
- Related question: EventDetail Q2 (decision, recommended A), Q5 (fact: TST values of SurveyStatus)

## Evidence
- Original: `UBTConnect.controller.js` Sync_Info_Main (e.g. `migration/screens/AssembleEvents/analysis/sources/raw/
  UBTConnect.controller.js`): after Sync_Info_GetMain, when not from login,
  `Connect2_OrbitMobile_MUIController.default.syncAllOrbitStaticEntities$Action(sync_Info_GetMainVar.value.orbitStaticEntitiesOut)`.
  SyncAllOrbitStaticEntities (`migration/runtime-sources/Connect2_OrbitMobile_MUI.controller.js:6638-6800`) writes the
  local entities, e.g. SyncOrbitSurveyStatus (:7514-7550: DeleteAll + CreateOrUpdate of Id, Label, JSON_Name) and
  SyncOrbitMilestoneTypes (:7447-7490, already ported as `syncOrbitMilestoneTypes` in the shared lib).
- Clone: `app/src/shell/startup.ts:91-109` (syncInfoMain) ignores `OrbitStaticEntities`; `app/src/shell/mocks.ts:63-76,
  132` answers every list empty. No route calls `syncOrbitMilestoneTypes`.
- EventDetail reads them: `ScreenBlock_EventDetail.mvc.js:1502-1595` (aggregate GetLocalSurveyStatusByJSONName on
  JSON_Name = Get_HostSurveyStatus.Response.Id), view `:775-958` (host survey row and status pill), `:958-1070` and
  `:1199-1305` (Host Allocation shown only for status Confirmed); `HostAllocation_HelperItem.mvc.js:274-276`
  (LocalOrbitMilestoneType Id = 'helper-host' → icon).
- Captured: `migration/screens/EventDetail/analysis/dom/default.html:96-196` (View Host Survey, pill "Confirmed",
  Host Allocation with two accommodation rows and the Helper row, icon `orbit-icon-person-wave`).
- Parity difference it explains (default state, run with the captured inputs): `[structure] … div#b1-$b4
  [Orbit_Generic_Blocks.Accordion_Orbit]: missing in build`, `[structure] … div.orbit-host-survey-link-new: missing in
  build`, `[structure] … div#b1-$b3[Orbit_Blocks.HostSurvey_PillItem]: missing in build`, `div.rv-missing extra in build`.

## Expected change
1. App start (signed in, not from login): run SyncAllOrbitStaticEntities with `Sync_Info_GetMain.OrbitStaticEntities`
   (at least SurveyStatus → LocalSurveyStatus and OrbitMilestoneTypes → `syncOrbitMilestoneTypes`), as the original.
2. A read API for LocalSurveyStatus (Id, Label, JSON_Name) that routes can call (GetLocalSurveyStatusByJSONName,
   GetSurveyStatusById), e.g. next to `getLocalOrbitMilestoneTypeById` in the shared Orbit lib or in
   `shell/localEntities`.
3. The Sync_Info_GetMain mock answers fictional Orbit static entities: `ORBIT_SURVEY_STATUSES` and
   `ORBIT_MILESTONE_TYPES` of `app/src/mocks/fictional/orbit.ts` (only the "Confirmed" label is captured; Q5).

## Workaround in the route until applied
`app/src/screens/EventDetail/components/actions.ts`: `getLocalSurveyStatusByJSONName` reads an empty table (a device
that never synced) and `isLocalSurveyStatusMissing()` is true. While it is, a host event with a survey status shows
`<NotCaptured name="CR-EventDetail-1: survey status (LocalSurveyStatus is not synced by the shell)">` in place of the
host survey row, and the same marker around the Host Allocation accordion (its content is known). When applied: point
`getLocalSurveyStatusByJSONName` at the shell's table and delete `LOCAL_SURVEY_STATUS` / `isLocalSurveyStatusMissing`
and the two markers in `ScreenBlock_EventDetail.tsx`.

## Resolution (foundation owner)
Applied by F10 (2026-10-16).
- Change: `app/src/shell/startup.ts` syncInfoMain ports Sync_Info_Main 1:1 (UBTConnect.controller.js:16557-16626, raw copy
  in migration/screens/EventDetail/analysis/sources/raw/): after Sync_Info_GetMain, when not from login,
  `syncAllOrbitStaticEntities(out.OrbitStaticEntities)` (:16579-16583) before the output assignments, inside the
  AllExceptions try. New `app/src/shell/localEntities/orbitStaticEntities.ts`: SyncAllOrbitStaticEntities (C:6638-6800:
  OrbitMilestoneTypes when not empty; GetHasOrbitHostSurvey = flag mobileOrbitHostSurvey: SurveyStatus when not empty,
  else always), SyncOrbitSurveyStatus (C:7514-7550, Integer Id, YesIfEmpty), SyncOrbitMilestoneTypes (moved from the
  shared Orbit lib, which re-exports it), reads GetLocalSurveyStatusByJSONName (max 1), getLocalSurveyStatusById,
  GetLocalOrbitMilestoneTypeById. Store: in memory for the page (decision F10, auto mode: shared blocks read at first
  render; every page load re-syncs); not persisted in IndexedDB and a missing id gives the empty record (documented in
  the file). Other Orbit local entities not ported (no reader built). Shell mock Sync_Info_GetMain answers
  ORBIT_MILESTONE_TYPES and ORBIT_SURVEY_STATUSES (Confirmed = 2 kept); orbit.ts Type "Host" for accommodation-host and
  helper-host (MilestoneHeader captures). EventDetail: workaround and the three NotCaptured markers removed; reads the
  shell table; SurveyStatus ids are Integers (model.js:18659-18686).
- Regression parity run on: OrbitLanding, HomeFeed, Splash, Login, OneSchoolGlobalDetails, SupperMeeting_Details,
  HouseholdDetails: clean. EventDetail (cloneQuery inputs): structure/class/attr/text/style 0 in all states; left: pixel
  (default, loading, offline) and layout (loading, offline: masked one-line header title vs wrapped fictional title),
  proposed as capture artifacts in migration/screens/EventDetail/proposed-exemptions.json `rules_f10`.
