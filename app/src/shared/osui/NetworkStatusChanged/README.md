# NetworkStatusChanged

OutSystems UI: `OutSystemsUI_2_23.Private.NetworkStatusChanged` · pack
`migration/blocks/OutSystemsUI_2_23.Private.NetworkStatusChanged.md`

Inputs: none. Events: `NetworkStatusChanged(IsOnline)` → `onNetworkStatusChanged(isOnline)`. Placeholders: none.

`IsOnline` starts True. On mount, `navigator.onLine` decides Online / Offline, then the window `online` / `offline`
events decide. The block raises the event only on a change (compiled controller, lines cited in the component). Its only user is
`OfflineDataSyncCore`. The shell's `useNetworkStatusEvents` is a different original (UBTConnect NetworkDetection, which
sets `App_NetworkStatus_IsOnline_IsPersistent`) and offers no event, so it is not used here.

## Captured variants (1 distinct; 1 tested)

| Capture | Source                   |
| ------- | ------------------------ |
| v1      | BookmarksByGroup/default |

## Not captured

- Offline state: no capture differs (the wrapper has no state markup); the test file tests the event.
- Cordova `deviceready` listeners: native only.
