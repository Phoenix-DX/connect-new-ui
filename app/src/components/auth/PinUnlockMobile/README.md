# PinUnlock_MobileWrapper

OutSystems: `UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper` · pack
`migration/blocks/UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.md`

Shape: component (props only). The flows of the nested Pincode_Unlock are in `usePinCodeUnlock`
(`src/platform/session/usePinCodeUnlock.ts`); the caller passes its result through this block.

| Input                       | Type    | Prop                                                     | Default |
| --------------------------- | ------- | -------------------------------------------------------- | ------- |
| In_PinLength                | Integer | `inPinLength`                                            | `0`     |
| In_ExtendedClasses          | Text    | `inExtendedClasses`                                      | `''`    |
| In_IsScanFingerprintOnReady | Boolean | `inIsScanFingerprintOnReady`                             | `false` |
| In_ForceVisible             | Boolean | `isKeypadVisible` (the hook's result for Pincode_Unlock) | `false` |
| In_AllowBackNavigation      | Boolean | `inAllowBackNavigation`                                  | `false` |
| In_HideFingerprint          | Boolean | `inHideFingerprint`                                      | `false` |

Events: `PinUnlockSuccess` and `PinUnlockError(ErrorMessage)` of the fingerprint scanner, `PincodeChange(InputLength)`,
`KeyPressed` → `on` + name. The keypad's PinUnlockSuccess, PinUnlockError, UserLoggedOut and Timeout are raised by the
hook. Pincode_Unlock wiring: `onSetPin` (SetPin of the keypad) and `renderInactivityTimer`. Placeholders:
`Placeholder_HeaderBar`, `Placeholder_TitlePlaceholder`, `Placeholder_UnlockText`, `Placeholder_FingerprintIcon`,
`Placeholder_EraseButton`, `Placeholder_BottomKeyboard`, `Placeholder_Content` → `placeholder` + rest (underscores
dropped).

The Option placeholder of Pincode_Unlock holds a container with `FingerprintScanner`. The container is visible only
when AppManager_GetPIN_FingerprintReaderAvailable and not In_HideFingerprint. This never happens on the web (U13), so
the placeholder is empty.

## Captured variants (2 tested)

| Capture | Source                                   | What it shows                                        |
| ------- | ---------------------------------------- | ---------------------------------------------------- |
| v1      | pack variant 1, BookmarksByGroup/default | not locked (nested Pincode_Unlock collapsed)         |
| v2      | `PINUnlock/analysis/dom/default.html`    | keypad with the PINUnlock placeholders, empty Option |

## Not captured / not settled

- The fingerprint option (container, scanner, its events): never rendered on the web; see `FingerprintScanner`.
