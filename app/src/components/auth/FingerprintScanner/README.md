# FingerprintScanner

OutSystems: `UBT_AppManager_Mobile.Fingerprint.FingerprintScanner` · pack
`migration/blocks/UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.md` (survey only: no DOM, no compiled code)

| Input            | Type    | Prop              | Default |
| ---------------- | ------- | ----------------- | ------- |
| In_IsScanOnReady | Boolean | `inIsScanOnReady` | -       |

Events: `Unlock` → `onUnlock`, `UnlockError(Event_ErrorMessage)` → `onUnlockError`. Placeholder: `Content` →
`children`. Inputs and events as `PinUnlock_MobileWrapper` passes them.

## Captured variants (none)

No screen renders it on the web. The wrapper's container needs `AppManager_GetPIN_FingerprintReaderAvailable`, and this
value is false in a browser. Biometric unlock is hidden (U13). The captures of PINUnlock / PINChange show the empty
Option placeholder.

## Not captured / not settled

- Everything: markup, the scan on ready, the events. The block renders `<NotCaptured>` with the icon placeholder. To
  build if biometric unlock comes to the web (U13 option b, WebAuthn).
