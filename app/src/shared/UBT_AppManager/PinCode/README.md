# PinCode

OutSystems: `UBT_AppManager.PIN.PinCode` · pack `migration/blocks/UBT_AppManager.PIN.PinCode.md` · knowledge
`migration/knowledge/auth.md` (PINRegister)

| Input                  | Type    | Prop                    | Default |
| ---------------------- | ------- | ----------------------- | ------- |
| Length                 | Integer | `length`                | `0`     |
| In_ExtendedClasses     | Text    | `inExtendedClasses`     | `''`    |
| In_AllowBackNavigation | Boolean | `inAllowBackNavigation` | `false` |

Events: `KeyPressed` → `onKeyPressed`, `SetPin(UBTPincode)` → `onSetPin`, `PincodeChange(InputLength)` →
`onPincodeChange`. Placeholders: `HeaderBar` → `headerBar`, `TitlePlaceholder` → `titlePlaceholder`, `Message` →
`message`, `Option` → `option`, `ErasePlaceholder` → `erasePlaceholder`, `Placeholder_BottomKeyboard` →
`placeholderBottomKeyboard`, `ContentPlaceholder` → `contentPlaceholder`.

Keypad of the PIN screens:
- Pins (filled `selected-icon` / `empty-icon`).
- Keys 1–9 and 0 in three columns.
- The Option placeholder (Length > 0) or an OK key (Length 0).
- The erase key.

A full PIN raises SetPin and clears after 500 ms (DelayResetVariables). Keys are off while the PIN is full. The block
uses PreventBackNavigation unless In_AllowBackNavigation is true.

## Captured variants (3 tested)

The pack variants stop at depth 7 (keys); the captures are the full blocks from the screen DOMs, nested blocks
collapsed.

| Capture | Source                                  | What it shows                                                   |
| ------- | --------------------------------------- | --------------------------------------------------------------- |
| v1      | `PINChange/analysis/dom/default.html`   | Pincode_Unlock from the menu: no PreventBackNavigation          |
| v2      | `PINRegister/analysis/dom/default.html` | Pincode_Register: registration message, `pincode-button` option |
| v3      | `PINUnlock/analysis/dom/default.html`   | Pincode_Unlock: Forgot PIN, policy content                      |

## Not captured / not settled

- Typed digits, the full PIN, the reset, the erase key and Length 0 (OK key, `btn ubt-pincode__button-confirm`): from
  the compiled code, tested in `PinCode.test.tsx`.
- OnInitialize calls `PIN_SessionInactivity_Destroy` (:1136). The React component does not port this call. The inactivity timer belongs to the shell's
  `LockHost`, which keeps running while a screen (PINChange) shows this keypad. To settle with the PIN screens.
- The pins use `fa fa-circle` / `fa fa-circle-thin` with `fa-1x` as captured (icon size FontSize).
