# OfflineDataSyncEvents

OutSystems: `UBTConnect.App_Common.OfflineDataSyncEvents` · pack
`migration/blocks/UBTConnect.App_Common.OfflineDataSyncEvents.md`

Inputs: none. Placeholders: none. Child block: `osui/OfflineDataSyncCore`.
Events: `OnSyncStart(SyncUnit)` → `onSyncStart`, `OnSyncComplete(SyncUnit)` → `onSyncComplete`,
`OnSyncError(SyncUnit, ErrorMessage)` → `onSyncError` (kept for callers, not raised).

## Captured variants (1 distinct; 1 tested)

| Capture | Source                   |
| ------- | ------------------------ |
| v1      | BookmarksByGroup/default |

## Not settled

- The handlers only configure and drive the OSUI sync engine (`OutSystemsUI_2_23.OfflineDataSync.js`). The engine is not
  ported. Config: SyncOnOnline / SyncOnResume True, retry False, 30 s (spec section 9, UC:15168-15180). The sync action
  itself is empty (UC:15118-15140). No sync event is raised.
