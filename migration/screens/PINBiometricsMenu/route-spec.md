# Route spec: PINBiometricsMenu

Sources: `p:` = `migration/screens/PINBiometricsMenu/analysis/sources/pretty/UBTConnect.App_Menu.PINBiometricsMenu.mvc.js`.

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/PINBiometricsMenu` with inputs none (`setInputs` empty, p:63) |
| Tier | lite |
| Captured | 2026-10-14, viewport 390×844, states: default, loading, offline [analysis/states.json] |
| Shared/shell components used | `Layout_DetailPage` (`app/src/shared/UBTConnectLibrary/Layout_DetailPage/`), `Menu_List` (`app/src/shared/UBTConnect/Menu_List/`), shell navigation (`useOsNavigate`, `useViewState`, `useWasRestoredFromCache`), `useNoCommonUi` (`app/src/shell/dialogs`), `getClientVar` / `setClientVar` (`app/src/shell/session.ts`) |
| Screen-specific components | none (`components/staticEntities.ts` holds the two icon ids the shared static entities lack) |

## Specification
### Structure
Layout_DetailPage (In_IsPrimaryColor default True → `ubt-layout-detail--primary`, title centred) [pack.md block plan; dom/default.html:7-30]:
- Placeholder_Header_Title: text "PIN & Biometrics" (p:156; dom/default.html:21-23). Header back icon (`b1-$b2`) is the layout's own.
- Placeholder_Header_Right, HeaderContent, Bottom, Placeholder_CommonUI_Inside_Layout: empty (p:157-158, 205-206) → no CommonUI, so `useNoCommonUi()` (shell guide).
- Content: Menu_List (`$b2`) with In_MenuSection = {HasSeparator False, MenuOptions = MenuOptionList} (p:161-168; no `SectionSeparator` in dom/default.html:35-37).

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| `ActionSync_Info_GetMain`, `ServiceAPIFetchData_CacheableHouseholds`, `ServiceAPIFetchData_CacheableMapEntities` (+ #1, #2, #4, #5) | server, app start | `UBTConnect.onApplicationReady` / shell (call-sites.md) | as shell | none by this screen | shell | shell mocks |

The screen has no data or server action of its own (`dataFetchActionNames = []`, p:233). Every captured call is the shell's app start [calls.md #1-7].

`AppManager_GetPIN_FingerprintReaderAvailable` is a client action. Available = client var `UBT_AppManager.PIN_FingerprintReaderAvailable_IsPersistent` (UBT_AppManager.controller.js:1825, BookmarksByGroup raw copy). Only the native fingerprint check of UBT_AppManager_Mobile sets it to True (UBT_AppManager_Mobile.controller.js:225). In a browser it is False.

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| Screen | OnInitialize | If IsViewRestoredFromCache (p:261, 423): keep MenuOptionList. Else ListClear; append {IconId UBT_Icons2.Password, Label ChangePinName "Change PIN"} (p:266-273, 16-17); if AppManager_GetPIN_FingerprintReaderAvailable (p:277) append {IconId Fingerprint, Label BiometricLoginName "Biometric Login", LabelDescription "Sign in with Fingerprint or Face Recognition authentication", useSwitch True, SwitchValue = App_PIN_BiometricEnabled} (p:279-291, 19-20). | none | – | – |
| Menu_List | OnClick_MenuOption(row) | Label = ChangePinName → navigate (p:332-335); Label = BiometricLoginName → App_PIN_BiometricEnabled = not App_PIN_BiometricEnabled (p:337-340); else nothing. | none | `/UBTConnect/PINChange` (no params, Default transition) | – |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | one row (no fingerprint reader in the browser) | dom/default.html | real |
| loading | app-start calls pending; screen has no data | dom/loading.html (same markup) | loading |
| offline | app-start calls fail; screen has no data | dom/offline.html (same markup) | error |
| Biometric Login row | AppManager_GetPIN_FingerprintReaderAvailable = True | not captured (native only, U13) | – |

## Patterns used
- P-PARAMS: navigation to `/UBTConnect/PINChange` through `useOsNavigate` (no inputs).
- P-BACK: MenuOptionList kept by the view cache (`useViewState`), rebuilt only when not restored (`useWasRestoredFromCache`).
- P-STATES: loading/offline render the same markup (no data of its own); the native-only Biometric row is not rendered on the web.
- P-LIST: the rows go through the shared Menu_List (OSList inside).

## Feature flags
- `clientVar:App_PIN_BiometricEnabled`:
  - MCP unavailable.
  - Decision: not a flag (false positive). It is a user setting for biometric unlock. The React app builds the behaviour as the original app does (user, 2026-10-14) [migration/flags.md:113].
  - The React app implements it as the shell client var `UBTConnect.App_PIN_BiometricEnabled` (`getClientVar` / `setClientVar`, as `Block_PINUnlock_ContentWrapper`). Only the Biometric Login row reads it. The web never shows that row (U13).

## Unclear points
- none. The compiled code (above) and the user's decision U13 "biometric hidden" settle the availability of the fingerprint reader (migration/app-shell.spec.md:293, 323). The capture shows only the Change PIN row (dom/default.html:35-90).

## Decisions to confirm
- Biometric Login row:
  - The code keeps the original branch behind `appManager_GetPIN_FingerprintReaderAvailable()` = False on the web (U13 option a; same stand-in as `PinUnlock_MobileWrapper.tsx:44-46`). The row never renders now.
  - To switch it on with WebAuthn later: U13 option b.
- Icon ids `connect-icon-password` / `connect-icon-fingerprint` kept in `components/staticEntities.ts` (TST values, static-entities-tst.json `UBTConnect.uBT_Icons2`; password captured dom/default.html:52).

## Change requests
- none

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real | 0 | 0 | 0 | 0 | 0 (position 0, pixel 0.00 %, call 0) | CAPTURE-LINK-HREF-CURSOR-HOMEFEED ×1 |
| loading | loading | 0 | 0 | 0 | 0 | 0 (position 0, pixel 0.00 %, call 0) | CAPTURE-LINK-HREF-CURSOR-HOMEFEED ×1 |
| offline | error | 0 | 0 | 0 | 0 | 0 (position 0, pixel 0.00 %, call 0) | CAPTURE-LINK-HREF-CURSOR-HOMEFEED ×1 |

## Server-side notes
- none: no server call of its own; the biometric setting is a device-local client variable.
