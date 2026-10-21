# Block_PINUnlock_ContentWrapper

OutSystems: `UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper` · pack
`migration/blocks/UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.md`

| Input           | Type    | Prop             | Default                 |
| --------------- | ------- | ---------------- | ----------------------- |
| UseOverlay      | Boolean | `useOverlay`     | `true`                  |
| In_ForceVisible | Boolean | `inForceVisible` | `false`                 |
| UnlockText      | Text    | `unlockText`     | `'Enter your PIN code'` |
| ShowNeedHelp    | Boolean | `showNeedHelp`   | `false`                 |
| isFromMenu      | Boolean | `isFromMenu`     | `false`                 |
| ShowForgotPIN   | Boolean | `showForgotPIN`  | `false`                 |
| ShowPolicy      | Boolean | `showPolicy`     | `false`                 |

Events: `Unlock` → `onUnlock`, `NavigateTo_PINRegister` → `onNavigateToPINRegister`. Placeholders: none.

Fills `PinUnlock_MobileWrapper` (PIN length 4): logo, unlock text, erase icon, Forgot PIN (→
`/UBTConnect/Login?In_IsFromResetPIN=True`), "Need help? Contact Us" or the policy links (CacheControl_Policies).
The block shows unlock errors with `feedbackMessageAutoClose` (texts mapped as the original). The shell's lock
container renders this block (`src/shell/dialogs/BlockPinUnlock.tsx`, as Block_PINUnlock: ShowForgotPIN, ShowPolicy).

## Captured variants (3 tested)

| Capture | Source                                   | What it shows                                          |
| ------- | ---------------------------------------- | ------------------------------------------------------ |
| v1      | pack variant 1, BookmarksByGroup/default | lock container, not locked                             |
| v2      | `PINUnlock/analysis/dom/default.html`    | keypad, Forgot PIN, policy links (all blocks expanded) |
| v3      | `PINChange/analysis/dom/default.html`    | from the menu: back allowed, no Forgot PIN / policies  |

## Not captured / not settled

- ShowNeedHelp content, UseOverlay False (ConnectLogo.svg), the error messages: from the compiled code, tested.
- The policy links call `UBTConnect_Utils.OpenPolicy` (view :607 / :675, controller :939-998) with the cached policy
  and "This policy couldn't be found.". The React app ports this call as the shared `openPolicy` (`UBTConnect_Utils/lib/actions.ts`, web branch: a new
  tab; the native `OpenApplicationPolicy` branch is out of scope). Wired by audit A1 (2026-10-16).
- Forgot PIN: `navigateTo(…, true)` in the original; it is not known what the last argument means, so the React app uses a plain
  navigation.
- The fingerprint icon placeholder is passed but never shown on the web (U13).
