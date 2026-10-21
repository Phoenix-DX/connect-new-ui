# CR-MilestoneDetail-4: shell/shared — MilestoneHeader reads LocalOrbitMilestoneType before the app start has synced it

- Status: applied
- Raised by: MilestoneDetail, 2026-10-16
- Block: `app/src/shell/localEntities/orbitStaticEntities.ts` (store) and
  `app/src/shared/Connect2_OrbitMobile_MUI/MilestoneHeader/MilestoneHeader.tsx` (reads once, `useState`)
- Other routes using it: every Orbit milestone screen with MilestoneHeader (TransportDetail, HelpersDetail, GuestArrangements, …)
- Related: CR-EventDetail-1 (the store), MilestoneDetail parity diagnostic 2026-10-16

## Evidence
- The original reads the record in OnReady from the device database, which earlier app starts filled
  (`…Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc.js` OnReady :256-293; store comment
  `orbitStaticEntities.ts:9-25`: in-memory, synced again by every page load).
- Clone, page opened by URL (as parity does): MilestoneHeader renders before Sync_Info_Main has synced the milestone
  types, so `getLocalOrbitMilestoneTypeById('accommodation-host')` gives the empty record: diagnostic parity run
  `[text] … orbit-milestone-sub-header > span: "Accommodation (Host)" → "Accommodation ()"` and
  `[class] … i.icon.orbit-icon-accommodation: missing .orbit-icon-accommodation`.

## Request
Either the store notifies its readers (e.g. a version hook MilestoneHeader subscribes to) or the shell renders the first
screen after the app start's Sync_Info_Main. Interim in the route: ScreenBlock_AccommodationHost mounts MilestoneHeader
again (React `key`) once the record is in the store; remove it when this CR lands.

## Resolution (foundation owner, F11, 2026-10-16)
- Subscribe API on the store (`app/src/shell/localEntities/orbitStaticEntities.ts`): every SyncOrbitMilestoneTypes /
  SyncOrbitSurveyStatus bumps a version and notifies subscribers (`subscribeOrbitStaticEntities`,
  `getOrbitStaticEntitiesVersion`, hook `useOrbitStaticEntitiesVersion`, re-exported from the shared Orbit lib). Why not
  reorder the app start: the original never waits for this start's Sync_Info_Main; OnReady reads rows that earlier app starts
  left in the device database, which the in-memory port cannot have on a page opened by URL.
- `MilestoneHeader` reads GetLocalOrbitMilestoneTypeById per store version (useMemo on the version), so it shows the record
  once the app start has synced it. The route's React `key` workaround in ScreenBlock_AccommodationHost is removed.
- Not changed (route edit outside this CR): `screens/EventDetail/components/HostAllocation_List.tsx` still reads the helper
  type once (`useState`); it can call `useOrbitStaticEntitiesVersion` the same way. Parity: MilestoneDetail 0, EventDetail 0.
