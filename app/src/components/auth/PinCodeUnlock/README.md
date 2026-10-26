# Pincode_Unlock

OutSystems: `UBT_AppManager.PIN.Pincode_Unlock` · pack `migration/blocks/UBT_AppManager.PIN.Pincode_Unlock.md`

Shape: hook + component. The flows are in `usePinCodeUnlock(inForceVisible, events)`
(`src/platform/session/usePinCodeUnlock.ts`). The component that renders this block calls the hook and passes
`isKeypadVisible`, `onSetPin`, `onBeforeSetPin` (ReplaceOnUpcomingNavigation of the keypad), the InactivityTimer
(`renderInactivityTimer`) and the PreventBackNavigation block of the keypad (`renderPreventBackNavigation`). The
component renders from props only.

| Input                  | Type    | Prop / hook argument                      | Default |
| ---------------------- | ------- | ----------------------------------------- | ------- |
| In_PinLength           | Integer | `inPinLength`                             | `0`     |
| In_ExtendedClasses     | Text    | `inExtendedClasses`                       | `''`    |
| In_ForceVisible        | Boolean | hook `inForceVisible` → `isKeypadVisible` | `false` |
| In_AllowBackNavigation | Boolean | `inAllowBackNavigation`                   | `false` |

Events: `KeyPressed`, `PincodeChange(InputLength)` → `on` + name on the component. `PinUnlockSuccess`,
`PinUnlockError(ErrorMessage)`, `UserLoggedOut`, `Timeout` → `on` + name in the hook's events. Placeholders:
`HeaderBar`, `TitlePlaceholder`, `UnlockText`, `Option`, `EraseButton`, `Placeholder_BottomKeyboard` (→
`placeholderBottomKeyboard`), `ContentPlaceholder`, each passed to `PinCode` inside its own placeholder div. PIN check
and lock state: `src/platform/session/pin.ts` (`verifyPin`, `lock`).

## Captured variants (2 tested)

| Capture | Source                                   | What it shows                   |
| ------- | ---------------------------------------- | ------------------------------- |
| v1      | pack variant 1, BookmarksByGroup/default | not locked: the InactivityTimer |
| v2      | pack variant 2, PINChange/default        | In_ForceVisible: the keypad     |

## Not captured / not settled

- Unlock, wrong PIN, In_ForceVisible changes, signed out: from the compiled code, tested in
  `src/platform/session/usePinCodeUnlock.test.tsx`.
- Order: the original raises PinUnlockSuccess before it sets PIN_HasUnlocked / PIN_IsLocked; `verifyPin` sets them
  first, then the event is raised.
- OnInitialize stores OnUnlockSuccess as `obj_PinUnlockCallback` in the AppManager element cache for the native
  biometric unlock: not ported (biometrics hidden on the web, U13).
- The Timeout event is passed to `InactivityTimer`, which does not raise it (the shell's `LockHost` runs the timer).
