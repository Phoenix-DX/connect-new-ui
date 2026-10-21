# Pincode_Unlock

OutSystems: `UBT_AppManager.PIN.Pincode_Unlock` · pack `migration/blocks/UBT_AppManager.PIN.Pincode_Unlock.md`

| Input                  | Type    | Prop                    | Default |
| ---------------------- | ------- | ----------------------- | ------- |
| In_PinLength           | Integer | `inPinLength`           | `0`     |
| In_ExtendedClasses     | Text    | `inExtendedClasses`     | `''`    |
| In_ForceVisible        | Boolean | `inForceVisible`        | `false` |
| In_AllowBackNavigation | Boolean | `inAllowBackNavigation` | `false` |

Events: `KeyPressed`, `PinUnlockSuccess`, `PinUnlockError(ErrorMessage)`, `PincodeChange(InputLength)`,
`UserLoggedOut`, `Timeout` → `on` + name. Placeholders: `HeaderBar`, `TitlePlaceholder`, `UnlockText`, `Option`,
`EraseButton`, `Placeholder_BottomKeyboard` (→ `placeholderBottomKeyboard`), `ContentPlaceholder`, each passed to
`PinCode` inside its own placeholder div. PIN check and lock state: `src/shell/pin.ts` (`verifyPin`, `lock`).

## Captured variants (2 tested)

| Capture | Source                                   | What it shows                   |
| ------- | ---------------------------------------- | ------------------------------- |
| v1      | pack variant 1, BookmarksByGroup/default | not locked: the InactivityTimer |
| v2      | pack variant 2, PINChange/default        | In_ForceVisible: the keypad     |

## Not captured / not settled

- Unlock, wrong PIN, In_ForceVisible changes, signed out: from the compiled code, tested in `Pincode_Unlock.test.tsx`.
- Order: the original raises PinUnlockSuccess before it sets PIN_HasUnlocked / PIN_IsLocked; `verifyPin` sets them
  first, then the event is raised.
- OnInitialize stores OnUnlockSuccess as `obj_PinUnlockCallback` in the AppManager element cache for the native
  biometric unlock: not ported (biometrics hidden on the web, U13).
- The Timeout event is passed to `InactivityTimer`, which does not raise it (the shell's `LockHost` runs the timer).
