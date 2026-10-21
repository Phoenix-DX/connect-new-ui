# CR-HostSurvey-1: shell app start — the remaining Orbit local entities (host survey steps, floors, gender preferences, …)

- Status: applied
- Raised by: HostSurvey (route-hostsurvey), 2026-10-16
- Block: `app/src/shell/localEntities/orbitStaticEntities.ts` (SyncAllOrbitStaticEntities and readers),
  `app/src/shell/mocks.ts` (`orbitStaticEntities()`: the Sync_Info_GetMain OrbitStaticEntities lists)
- Other routes using it: every Orbit screen with GetLocal* aggregates on these tables (HostSurvey now; MealGuest,
  AccommodationGuest, … later)
- Related questions: HostSurvey Q1 (decision: stand-in rows in the route until applied)

## Evidence
- Original: SyncAllOrbitStaticEntities (`migration/runtime-sources/Connect2_OrbitMobile_MUI.controller.js:6638-6800`)
  also runs SyncOrbitSurveyStep, SyncOrbitBedSize, SyncOrbitGenderPreference, SyncOrbitHouseFloor,
  SyncOrbitVehicleOwner, SyncOrbitVehicleType, SyncOrbitHelperStatus, SyncOrbitMealType, SyncOrbitHelperRoles
  (:6677-6785), writing LocalHostSurveyStep (Id, HeaderLabel, AddLabel, Order, IsDataStep; model.js:803),
  LocalHouseFloor and LocalGenderPreference (Id, Label, JSON_Name, Order; model.js:1333, 8374), LocalBedSize,
  LocalMealType, LocalHelperStatus, LocalHelperRole, LocalVehicleOwner, LocalVehicleType.
- ScreenBlock_HostSurvey reads them through client aggregates (HS = `migration/screens/HostSurvey/analysis/sources/
  pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.mvc.js`):
  GetLocalHostSurveySteps (:4118-4170, filters on the survey flags, a confirmed survey keeps only the summary step,
  max 10, ORDER BY Order), GetLocalHouseFloors (:3585-3613, max 4, ORDER BY Order), GetLocalGenderPreferences
  (:4440-4463, max 4), GetLocalBedSizes, GetLocalMealTypes, GetLocalHelperStatus, GetLocalHelperRoles,
  GetLocalVehicleOwners, GetLocalVehicleTypes (RefreshStaticEntities :5604-5776).
- Clone: `orbitStaticEntities.ts:282-289` ports only OrbitMilestoneTypes and SurveyStatus ("Not ported (no reader
  built)"); `shell/mocks.ts:70-80` answers the other lists empty.
- Captured facts the mock rows must keep (HostSurvey/default): summary step without data steps (header class
  `orbit-host-survey-no-steps`), floor labels "Ground Floor", "Second Floor" and an 8-letter label, gender labels
  "Male" and two 6-letter labels (dom/default.html:164-560); static-entity ids in
  `migration/knowledge/static-entities-tst.json` (hostSurveyStep, houseFloor).
- Parity without the workaround: no step row → no current step → the content is empty (structure: the summary,
  accordion and 9 HostSurvey_Item rows missing in build).

## Expected change
1. Port the nine Sync* actions in SyncAllOrbitStaticEntities and their tables (same storage as LocalSurveyStatus).
2. Readers for the client aggregates above (filters, Max. Records and ORDER BY as compiled).
3. Shell mock: fill the nine lists of `orbitStaticEntities()`; the rows of
   `app/src/screens/HostSurvey/components/localEntities.ts` are the proposal (captured labels kept, the rest
   fictional).

## Workaround in the route until applied
`app/src/screens/HostSurvey/components/localEntities.ts` holds stand-in rows (Q1) and ports the three aggregates the
built branches read (steps, floors, gender preferences). When applied: read the shell's tables in
`ScreenBlock_HostSurvey.tsx` and delete `localEntities.ts`.

## Resolution (foundation owner, F14, 2026-10-16)
- Store (`app/src/shell/localEntities/orbitStaticEntities.ts`): the ten other local entities of the module, entity
  info from `Connect2_OrbitMobile_MUI.entities.js` (LocalOrbitEventType E:862-913, LocalHostSurveyStep E:730-777,
  LocalBedSize E:4-44, LocalGenderPreference E:477-517, LocalHouseFloor E:998-1038, LocalVehicleOwner E:125-165,
  LocalVehicleType E:356-396, LocalHelperStatus E:246-279, LocalMealType E:1119-1152, LocalHelperRole E:598-645), one
  IndexedDB store each, same mirror / write-through / subscribe machinery as LocalSurveyStatus (now one generic mirror
  per table). LocalOrbitEventType included: SyncAllOrbitStaticEntities syncs it too (C:6652-6658).
- Syncs as compiled: SyncOrbitEventTypes (C:6966-6971), SyncOrbitSurveyStep (C:7632-7637), SyncOrbitBedSize
  (C:6846-6850), SyncOrbitGenderPreference (C:7026-7030), SyncOrbitHouseFloor (C:7347-7351), SyncOrbitVehicleOwner
  (C:7692-7696), SyncOrbitVehicleType (C:7751-7755), SyncOrbitHelperStatus (C:7141-7144, no Order),
  SyncOrbitMealType (C:7406-7409, no Order), SyncOrbitHelperRoles (C:7085-7088 fromStructure of the list converted at
  C:6771-6779). `syncAllOrbitStaticEntities` follows C:6652-6791 in order: event and milestone types, then with
  GetHasOrbitHostSurvey every non-empty list, without it only SurveyStatus (always).
- Readers = the HostSurvey aggregates (HS): GetLocalHostSurveySteps (:4118-4170, filters, Max 10, ORDER BY Order),
  GetLocalHouseFloors (:3580-3616, Max 4), GetLocalGenderPreferences (:4430-4463, Max 4), GetLocalBedSizes (Max 5),
  GetLocalMealTypes and GetLocalHelperStatus (no ORDER BY, Max 10), GetLocalHelperRoles (Max 20),
  GetLocalVehicleOwners (Max 4), GetLocalVehicleTypes (Max 8) (Max. Records from RefreshStaticEntities :5604-5776);
  plus `getLocalOrbitEventTypes`, `localHostSurveyStepsRead`. Exported from `shell/localEntities`.
- Mock: `app/src/mocks/fictional/orbit.ts` ORBIT_HOST_SURVEY_STEPS, ORBIT_HOUSE_FLOORS, ORBIT_GENDER_PREFERENCES,
  ORBIT_BED_SIZES, ORBIT_MEAL_TYPES, ORBIT_HELPER_STATUSES, ORBIT_HELPER_ROLES, ORBIT_VEHICLE_OWNERS,
  ORBIT_VEHICLE_TYPES (TST static-entity ids, captured labels kept, JSON_Names = the ones the survey rooms use);
  `shell/mocks.ts` orbitStaticEntities() fills all twelve lists (event types from ORBIT_EVENT_TYPES). The `unlocked`
  test session seeds them through the existing syncAllOrbitStaticEntities call (testSession.ts).
  Fix of the stand-in: gender-preference ids now follow TST (either 1, couples 2, male 3, female 4).
- Route: `ScreenBlock_HostSurvey.tsx` reads the shell readers; `components/localEntities.ts` deleted (Q1 workaround
  gone). RefreshLocalSurveyStatus waits for the store's first read (useOrbitStaticEntitiesVersion) on a page opened
  before the mirror is loaded, as the original's aggregates wait for the database.
- Tests: `orbitStaticEntities.test.ts` (3 new). Parity: HostSurvey DOM kinds and calls 0 (pixel: see CR-HostSurvey-2);
  EventDetail, MilestoneDetail, HelpersDetail, OrbitLanding clean.
