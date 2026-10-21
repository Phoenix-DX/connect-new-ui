# MilestoneHeader

OutSystems: `Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader` · pack
`migration/blocks/Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.md` · source
`migration/screens/HelpersDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc.js`

| Input                   | Type | Prop                     | Default |
| ----------------------- | ---- | ------------------------ | ------- |
| In_EventName            | Text | `inEventName`            | `''`    |
| In_MilestoneName        | Text | `inMilestoneName`        | `''`    |
| In_OrbitMilestoneTypeId | Text | `inOrbitMilestoneTypeId` | `''`    |

No events, no placeholders.

OnReady (`:256-293`) calls `GetLocalOrbitMilestoneTypeById` (Connect2_OrbitMobile_MUI.
controller.js:4104-4140, local entity LocalOrbitMilestoneType) → `getLocalOrbitMilestoneTypeById` in `../lib/actions.ts`.
The port reads the in-memory mirror of the device database (IndexedDB, F12) in the store. It reads at the first render
and again after each load or sync of the store (`useOrbitStaticEntitiesVersion`, CR-MilestoneDetail-4). A page that the
user opens by URL can render before the store loads the mirror from the database. It can also render before the app
start has synced. Before the port reads the rows, the record stays empty (the original's OnReady waits for the database).

The icon class is `icon <MainIcon>` (the port replaces the `fa` classes of the widget). The label is
`In_MilestoneName + " (" + Type + ")"`.

## Captured variants (2 tested)

| Capture | Source                  | What it shows                             |
| ------- | ----------------------- | ----------------------------------------- |
| v1      | HelpersDetail/default   | `helper-host`: person-wave icon, "(Host)" |
| v2      | MilestoneDetail/default | `accommodation-host`: accommodation icon  |

## Not captured / not settled

- **LocalOrbitMilestoneType records** come from the app start (Sync_Info_Main → SyncAllOrbitStaticEntities,
  CR-EventDetail-1; store in `shell/localEntities/orbitStaticEntities.ts`). The mock lists the fictional types of
  `mocks/fictional/orbit.ts`. The `unlocked` mock session seeds them as earlier app starts left them
  (CR-HelpersDetail-1).
  The captures show only `helper-host` / `accommodation-host` (icon, Type "Host").
- An id that is missing from the table raises a DataBaseException
  ("OSUSR_HQ9_LOCALORBITMILESTONETYPE with id <id> was not found", Entity.get).
  OnReady does not handle it. The exception goes to the flow handler (`raiseToFlowHandler`) and the record stays empty (icon `icon `, label `Name ()`).
- The original reads the record asynchronously after the first render; the port reads it at the first render.
