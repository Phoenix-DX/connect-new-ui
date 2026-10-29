# Item 10: build of OrbitAdminMilestones (with the OrbitAdminLanding entry N1)

Date: 2026-10-29. Route agent. Not captured (user decision I10-3 (a)): built from the compiled TST code in
`migration/screens/OrbitAdminMilestones/sources/` and `migration/runtime-sources/`. Spec:
`migration/screens/OrbitAdminMilestones/route-spec.md` (`route.py spec-done` run, then `route.py step … build`).
Not run: `route.py ready`, `npm run ci`, `npm run unused`, `parity_sweep.py`. Nothing committed.

## Files

Code (new):

- `app/src/pages/OrbitAdminMilestones/OrbitAdminMilestonesPage.tsx` (route, `@origin` of the screen), `inputs.ts`
  (`EventId`), `staticEntities.ts` (`MenuAction_Menu`).
- `app/src/pages/OrbitAdminMilestones/components/AdminMilestonesView.tsx` (`ScreenBlock_AdminMilestones` view, props only).
- `app/src/pages/OrbitAdminMilestones/hooks/adminMilestonesState.ts` (state, reducer, client actions, URL params),
  `hooks/useAdminMilestones.ts` (block flows), `hooks/useNavigateToMilestoneDetail.ts` (screen action).
- `app/src/api/event/adminMilestones.ts`: `fetchAdminMilestones` (data action, interim form), `toAdminMilestones`,
  `dateTimeToDate`, `getMilestoneScanFF` (server action, in the contract), hand-written wire types.

Code (changed):

- `app/src/api/event/index.ts`: one line, `export * from './adminMilestones'`.
- `app/src/pages/OrbitAdminLanding/hooks/useNavigateToEventDetail.ts`: N1. `GetMilestoneScanFF`, then
  `/UBTConnect/OrbitAdminMilestones?EventId=…` (true) or OrbitAdminEventDetail with the 6 inputs (false).
- `app/src/pages/OrbitAdminLanding/mocks.ts`: the stale "DEV-only, removed" note replaced; `GetMilestoneScanFF`
  handler (false, as TST; true in the scenario `scanpermilestone`).
- `app/src/pages/OrbitAdminLanding/OrbitAdminLandingPage.tsx`: doc comment only.

Mocks: `app/src/mocks/fictional/orbitAdminMilestones.ts` (seven milestones of event 7301 around today: helpers'
briefing, coach from Azul, arrival of the visiting families, kitchen team lunch, afternoon break, supper at the hall,
opening meeting; none for 7315 and 7322, which are weeks away) and `app/src/pages/OrbitAdminMilestones/mocks.ts`
(`statefulHandler`, because the contract has no operation yet). Type Ids = the live TST Admin* values.

Tests: `app/src/pages/OrbitAdminMilestones/OrbitAdminMilestones.test.tsx` (new, 8 tests);
`app/src/pages/OrbitAdminLanding/hooks/useNavigateToEventDetail.test.tsx` (async handler, new "true" test);
`app/src/pages/OrbitAdminLanding/OrbitAdminLanding.test.tsx` (`SCAN_FF` count 0 → 1).

Docs: `route-spec.md`, questions Q1 and Q2 (`migration/screens/OrbitAdminMilestones/questions.json`), this note.

## Tests (written first)

The page test was written before the page code. It covers: OnReady (skeleton `b1-$b5`, first name, 7 cards, one call
with `IsFetchingData`, `UserFirstName`, `UserMemberId`, `EventId`), NoInformation_Orbit for an event without
milestones, a card with `IsScanPerMilestone` false (→ OrbitAdminLanding) and true (→ OrbitAdminMilestoneDetail, the
7 inputs in the original order and values), the R1 unmount test, the OnAfterFetch mapping, the missing-data rule and
the null DateTime in the URL. `npx vitest run src/pages/OrbitAdminMilestones src/pages/OrbitAdminLanding
src/mocks/handlers.test.ts`: 7 files, 45 tests passed, no "Errors" line.

## Parity

- OrbitAdminMilestones: none (not captured). The user reviews it by eye: `?mock=scanpermilestone`, then
  OrbitAdminLanding → an event card → the milestones → a milestone card → OrbitAdminMilestoneDetail.
- OrbitAdminLanding: `route.py parity OrbitAdminLanding --app http://localhost:5174` clean (default, loading,
  offline; 0 differences of every kind). The other agents of the wave change shared folders, so the fingerprint can go
  stale before the orchestrator gate.

## Differences from TST, with evidence

1. Admin milestone cards show only the title until Q2 is done: `lib/orbit/staticEntities.ts:49-75` keeps the six
   Admin* Ids undefined, but the live moduleinfo (version 15682) has them (`meeting-admin`, `meeting-meal`,
   `meal-at-hall-admin`, `accommodation-admin`, `transport-vehicle-admin`, `break-admin`).
2. One endpoint for `GetMilestoneScanFF`: React calls `/api/UBTConnect/ActionGetMilestoneScanFF` from both screens.
   TST has two screen-service URLs (`…/OrbitAdminLanding/ActionGetMilestoneScanFF`, `…/OrbitAdminMilestones/…`;
   `OrbitAdminMilestones.mvc.js:231-233`). The contract lists only the first in `x-os-paths`; the regeneration adds it.
3. A view restored from the cache without the answer calls again (F40, as `useAdminLanding`); OutSystems keeps the skeleton.
4. `Get_AdminMilestoneList` sends the non-list block variables and `EventId`, not `Milestones`, as the captured
   `Get_AdminEventsList` (unclear point of the spec; the backend spec decides).
5. `disable-virtualization` is always on (`OSList disableVirtualization`), as AdminLandingView.

## Contract (I10-6 (a))

- Interim form: `fetchAdminMilestones` has one `@ts-expect-error` on the `callAction` inputs and the hand-written
  `AdminMilestoneListWire` (`AdminMilestoneRec` + `OrbitMilestoneTypeRec`, wire keys = first `attr` argument). After
  the regeneration: remove the line, use `ActionOutputs` of the operation, and change the mock to `contractHandler`.
- `openapi.yaml` and `schema.d.ts` not edited.

## Questions

- Q1 (decision): how the mock app reaches the new screens. Options: a) scenario `?mock=scanpermilestone` (true on both
  screens; default false as TST); b) default true; c) no scenario (URL only). Recommendation: a (built so).
- Q2 (decision, change request on `lib/`): set the six live Admin* Ids in `lib/orbit/staticEntities.ts`. Options:
  a) the orchestrator updates the lib (admin cards render description, date and times as TST; no other milestone has
  these Ids); b) keep undefined (title only). Recommendation: a.

## Checks

- `npx tsc --noEmit`: no error in the files of this route. Errors left: `OrbitAdminMilestoneDetail` tests (another
  agent, files not yet written).
- `npx eslint` and `npx prettier --check` on the changed files: clean.
- `npm run arch`: 2 errors, both of other agents (`OrbitAdminMilestoneDetail/hooks/useAdminMilestoneDetail.ts`,
  `components/layout/OrbitBlankLayout`). None in this route.
- `npm run flow-fetch`: no row of this route. Rows left: Bookmarks (stale) and `OrbitAdminMilestoneDetail:134`.
- Ledger row not added (the orchestrator records it).

Tool calls: 72.
