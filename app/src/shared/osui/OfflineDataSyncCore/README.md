# OfflineDataSyncCore

OutSystems UI: `OutSystemsUI_2_23.Private.OfflineDataSyncCore` · pack
`migration/blocks/OutSystemsUI_2_23.Private.OfflineDataSyncCore.md`

Inputs: none. Placeholders: none. Child block: `NetworkStatusChanged`.

| Event                               | Prop             | Raised                 |
| ----------------------------------- | ---------------- | ---------------------- |
| OnConfigure                         | `onConfigure`    | once, on initialize    |
| OnSync(SyncUnit)                    | `onSync`         | no (engine not ported) |
| OnSyncStart(SyncUnit)               | `onSyncStart`    | no                     |
| OnSyncComplete(SyncUnit)            | `onSyncComplete` | no                     |
| OnSyncError(SyncUnit, ErrorMessage) | `onSyncError`    | no                     |

## Captured variants (1 distinct; 1 tested)

| Capture | Source                   |
| ------- | ------------------------ |
| v1      | BookmarksByGroup/default |

## Not settled

- The OSUI sync engine (`scripts/OutSystemsUI_2_23.OfflineDataSync.js`: StartOfflineDataSync on online / resume / login,
  retries, OnSync → End… actions) is not ported. In UBTConnect the sync action is empty (spec 12a, UC:15118-15140).
  Nothing visible depends on it. The sync events are kept as props for callers and never raised.
