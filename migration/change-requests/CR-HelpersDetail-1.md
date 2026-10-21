# CR-HelpersDetail-1: shell/mocks — the loading scenario also stalls the app start's Sync_Info_GetMain (LocalOrbitMilestoneType empty)

- Status: applied
- Raised by: HelpersDetail, 2026-10-16 (route-orbit-lite-1)
- Block: `app/src/mocks/scenario.ts` / `app/src/mocks/contract.ts` (scenario `loading` = every handler never answers) and
  the store `app/src/shell/localEntities/orbitStaticEntities.ts` (in memory, filled only by the app start's sync)
- Other routes using it: every Orbit screen with MilestoneHeader whose loading / offline state is captured
  (HelpersDetail now; TransportDetail, GuestArrangements, … later)
- Related: CR-MilestoneDetail-4 (header re-reads the store per version), CR-EventDetail-1 (the store)

## Evidence
- TST captures `loading` and `offline` (migration/screens/HelpersDetail/analysis/dom/loading.html, offline.html): the
  MilestoneHeader sub-header shows the type icon and "Helper (Host)": OnReady reads LocalOrbitMilestoneType from the
  device database, which earlier app starts filled (MilestoneHeader.mvc.js OnReady :256-293).
- Clone, diagnostic parity 2026-10-16 (`--mock loading`): the app start's ActionSync_Info_GetMain never answers either,
  so the store stays empty: `[text] … orbit-milestone-sub-header > span: "Helper (Host)" → "Helper ()"`,
  `[class] i.icon.orbit-icon-person-wave: missing .orbit-icon-person-wave`, `::before` missing.

## Request
Let the app-start calls answer in the `loading` scenario (the scenario reproduces a slow screen call, not a slow app start),
or seed the Orbit local entities as the device database would hold them from an earlier start. No route change needed:
MilestoneHeader already re-reads the store per version (CR-MilestoneDetail-4).

## Interim in the route
None (markup is correct once the store has the record). Proposed exemption `MOCK-LOADING-NO-SYNC-HELPERSDETAIL-HEADER`
(migration/screens/HelpersDetail/proposed-exemptions.json) until this CR lands.

## Resolution (foundation owner, F12, 2026-10-16)
- Change: the second option of the request, fixing the F10 deviation instead of the scenario. LocalOrbitMilestoneType and
  LocalSurveyStatus are now device-database entities like notes and bookmarks (`app/src/shell/localEntities/
  orbitStaticEntities.ts`: IndexedDB stores `OSUSR_HQ9_LOCALORBITMILESTONETYPE` / `OSUSR_HQ9_LOCALSURVEYSTATUS`, entity
  infos from Connect2_OrbitMobile_MUI.entities.js:1229-1334 / 1446-1480; Booleans stored 1/0 as the runtime's
  IndexedDBSerializer). Syncs replace the rows (one transaction, `entityService.replaceAll`). Reads at first render go
  through an in-memory mirror: loaded from the database at app start (`loadOrbitStaticEntities`, `startup.ts`
  runAppStart, not awaited), written through by each sync and read back after its transaction (re-read on a failed
  one); `useOrbitStaticEntitiesVersion` kept. `getLocalOrbitMilestoneTypeById` raises DataBaseException
  ("OSUSR_HQ9_LOCALORBITMILESTONETYPE with id <id> was not found", OutSystems.js:13 IndexedDB Entity.get); MilestoneHeader
  passes it to `raiseToFlowHandler` once per read and keeps the empty record until the rows are read;
  HostAllocation_HelperItem reads through the aggregate form `getLocalOrbitMilestoneTypesById` (Max. Records 1, no raise).
- Mock session: `testSession.ts` (`unlocked` and the first-tab default) seeds the rows with SyncAllOrbitStaticEntities of
  the Sync_Info_GetMain mock's OrbitStaticEntities (`shell/mocks.ts` `orbitStaticEntities`, now exported), as earlier app
  starts left them, next to the bookmarks seed. The `loading` scenario is unchanged.
- The proposed exemption `MOCK-LOADING-NO-SYNC-HELPERSDETAIL-HEADER` (screens/HelpersDetail/proposed-exemptions.json) is
  not needed.
- Regression parity (`route.py parity`, after the last code change): HelpersDetail default/loading/offline 0,
  EventDetail 0, MilestoneDetail 0, OrbitLanding 0, HouseholdDetails 0, MyBookmarks 0, Locality_Details 0.
  `npm --prefix app run ci` green (309 files, 1350 tests).
