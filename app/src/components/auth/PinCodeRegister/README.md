# Pincode_Register

OutSystems: `UBT_AppManager.PIN.Pincode_Register` · pack `migration/blocks/UBT_AppManager.PIN.Pincode_Register.md` ·
knowledge `migration/knowledge/auth.md` (PINRegister)

| Input                  | Type    | Prop                    | Default |
| ---------------------- | ------- | ----------------------- | ------- |
| In_PinLength           | Integer | `inPinLength`           | `0`     |
| In_ExtendedClasses     | Text    | `inExtendedClasses`     | `''`    |
| In_AllowBackNavigation | Boolean | `inAllowBackNavigation` | `false` |
| IsFirstUse (local)     | Boolean | `isFirstUse`            | `true`  |

The component renders from props only. It does not import `platform/`. Event `KeyPressed` → `onKeyPressed`. The keypad
`SetPin` event goes to the prop `onSetPin`.

The flow (first and second entry, rules, `registerPin`) is in the hook
`usePinCodeRegister` (`src/platform/session/usePinCodeRegister.ts`). The hook takes the events
`PinRegistrationSuccess` (`onPinRegistrationSuccess`) and `PinRegistrationError(ErrorMessage)`
(`onPinRegistrationError`), and returns `isFirstUse` and `onSetPin`. The option `enabled` (default `true`) delays
OnInitialize until the block is on the screen.

Placeholders: `HeaderBar` (inside a `text-align:
left` container), `TitlePlaceholder`, `RegistrationText` (first entry) / `ConfirmationText` (second entry),
`OptionPlaceholder` (`pincode-button`), `ErasePlaceholder`, `ContentPlaceholder` (`content-placeholder`).
The Placeholder_BottomKeyboard of PinCode stays empty.

Rules: `pIN_ValidateRules` (`UBT_AppManager/lib/actions.ts`). Storage: the `registerPin` of the shell.

## Captured variants (1 tested)

| Capture | Source                              | What it shows                                                      |
| ------- | ----------------------------------- | ------------------------------------------------------------------ |
| v1      | pack variant 1, PINRegister/default | first entry (nested keypad collapsed; full keypad in `PinCode` v2) |

## Not captured / not settled

- The confirmation step, rule errors, mismatch and success: from the compiled code, tested in
  `usePinCodeRegister.test.tsx` (flow) and `PinCodeRegister.test.tsx` (view).
- `AppManager_SetPIN_IsRegistering` (True on initialize, False on destroy) is not ported: the shell has no such client
  variable. To settle with the PINRegister screen if anything reads it.
