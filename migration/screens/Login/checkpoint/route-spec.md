# Route spec: Login

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/Login` with inputs `In_IsFromInvalidPermissions: Boolean, In_IsFromResetPIN: Boolean, CallbackType: Text, CallbackGUID: Text` [pack.md; routes.generated.ts] |
| Tier | lite |
| Captured | 2026-10-14, viewport 390×844, states: default, loading, offline [pack.md] |
| Shared/shell components used | `Layout_LoginFlow` (src/shared/UBTConnectLibrary/Layout_LoginFlow), `CustomContainer`, `WelcomeToConnect`, `Version`, `UnsupportedVersion_Wrapper`, `OfflineDataSyncEvents`, `CommonUI_InsideLayout` (src/shared/UBTConnect/…), `ButtonLoading` (src/shared/osui/ButtonLoading), `OSLink` (src/shared/lib), `DialogExitConfirmation` (src/shell/navigation), `ActionConfirmationDialog` (src/shell/dialogs), `useSignIn`, `signOut` (src/shell/auth.ts), `setAppCallback` (src/shell/resume.ts), `showExceptionMessage`, `delayedMessageShow` (src/shell/feedback), `useWasRestoredFromCache` (src/shell/navigation) |
| Screen-specific components | `components/Tile.tsx` (ConnectPatterns.Tile), `components/Version_LoginWrapper.tsx`, `components/AppManager_Events.tsx` |

## Specification
### Structure
- `Layout_LoginFlow` id `$b1`, `In_HasOverlay = True`; Placeholder_Header empty [Login.mvc.js:178-182, dom/default.html:5-35].
- Placeholder_Content: `.connect-login-screen` › `.connect-login-screen__content` › Tile `$b2` (ExtendedClasses
  `ubt-zindex-2 connect-login-card`) › `.connect-login-card__content` › if IsUnsupportedSystem: `UnsupportedVersion_Wrapper`
  `$b3`, else `WelcomeToConnect` `$b4` + container with two CustomContainers `$b5` (`login-button  `, empty margin) and `$b7`
  (`login-button`, margin top base), each with `ButtonLoading` (`full-width`, ShowLabelOnLoading True) and a button
  [Login.mvc.js:220-500 (Tile :222, $if :250); dom/default.html:36-90].
- Then `.text-align-center` › `.need-help-footer` "Need help? " + link "Contact Us" (`font-regular text-underline`,
  margin-left 0) to `/UBTConnect/ContactUsMenu`, and `Version_LoginWrapper` `$b9` [Login.mvc.js:507-552; dom:91-113].
- `Dialog_ExitConfirmation` `$b10` at the end of Placeholder_Content [Login.mvc.js:553-570; dom:114-124].
- Placeholder_CommonUI_Inside_Layout: `OfflineDataSyncEvents` `$b11`, `AppManager_Events` `$b12`,
  `ActionConfirmationDialog` named `ConfirmationDialog_ResetPassword` (scope `b13`; header "Security Warning", body
  "Your Connect account was accessed from a different device or application." <br> "To help keep your account secure,
  please click ‘Continue’ to reset your password.", Continue / Cancel), `CommonUI_InsideLayout` `$b14` with
  In_IgnoreLockScreen True, In_IgnorePolicy True [Login.mvc.js:572-672; dom:126-180].
- Tile (UBTConnectLibrary.ConnectPatterns.Tile): CustomContainer with Background neutral-0, padding base, radius large and
  ExtendedClasses = FormatClasses("ubt-tile", ExtendedClasses); inside a `<div>` for the Content placeholder
  [Tile.mvc.js:147-210; dom:39-41]. Static entity values `large` and `xxs` are read from the captured classes
  `border-radius-large`, `font-size-xxs` [dom:40, dom:99] (not in the shared static entities).
- Version_LoginWrapper: CustomContainer with margin top base, text colour neutral-10, font size xxs, containing `Version`
  [Version_LoginWrapper.mvc.js:128-170; dom:94-110].
- AppManager_Events: empty block widget [dom:137]; its callback logic is not built (Q3 answered by user: A).

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| UBT_AppManager/ActionAppManager_SynchAppContext | server | app start (shell `AppStart`, signed out) [calls.json #1; shell.md "What runs on every page load"] | EspaceName | config (shell) | shell mock | shell |
| UBTConnect/ActionSync_Info_GetMain | server | app start (shell) [calls.json #2] | isFromLogin | none in the route | shell mock | shell |
| UBTConnect_Utils/ActionGet_RuntimeVersion | server | `Version` OnReady (shared block) [calls.json #3; call-sites] | none | version text | recorded (shell mocks) | shell |

The route itself makes no server call; `api.ts`/`mocks.ts` stay empty (handlers = []).

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| OnInitialize | mount (once) | IsUnsupportedSystem = Get_IsUnsupportedSystem = Out_IsUnsupportedAppVersion OR Out_IsUnsupportedBrowserVersion of `get_IsUnsupportedVersion()` [Q4 answered: TST UBTConnect.controller.js]; if not unsupported: not In_IsFromInvalidPermissions → `setAppCallback('')`; IsExecutingLogin = False; In_IsFromResetPIN and not `useWasRestoredFromCache()` → Login(False) with `signOut()` first, then the mock sign-in (→ PINRegister) [Login.mvc.js:922-990; Q2 answered by user: A] | shell sign-out/sign-in calls | shell `signIn()` destination (PINRegister) | exception toast on error |
| OnReady | mount | CallbackType = DeviceAwareness_InvalidDevice (opaque constant) → HandleDeviceAwarenessPopUp, not built [Q3 answered by user: A]; else `delayedMessageShow()` (shell, CR-Login-1 applied) [Login.mvc.js:783-826; Q5 answered] | none | none | delayed message, if one is pending |
| "Login with UBT One" | click | Login(False): IsExecutingLogin = True (ButtonLoading IsLoading, "Forgot Password?" disabled), then mock sign-in `useSignIn()` (D3(a)/U4): PINRegister / resume link / LastURL / HomeFeed, replace; IsExecutingLogin = False; error → both flags False + `showExceptionMessage(msg, false)` [Login.mvc.js:353-388, 702-780; shell auth.ts] | shell sign-in calls | shell `signIn()` destination | exception toast |
| "Forgot Password?" | click | nothing in the mock phase [Q1 answered by user: A]; enabled = not IsExecutingLogin [Login.mvc.js:450-489] | none | none | none |
| "Login with UBT One" button | enabled | not IsResettingPassword [Login.mvc.js:349] | | | |
| "Contact Us" | click | link [Login.mvc.js:515-534] | none | `/UBTConnect/ContactUsMenu` | none |
| Back | device back | `Dialog_ExitConfirmation` Force=True (shell, U15) | none | Leave App dialog | none |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | signed out, supported system | yes (dom/default.html) | `?mocksession=out` |
| loading | app-start calls pending (same markup, version text empty) | yes (dom/loading.html) | `?latency=infinite` (parity plan) |
| offline | same markup | yes (dom/offline.html) | parity plan |
| unsupported system | IsUnsupportedSystem | no | `?mock=unsupported-browser` (U16) |
| executing login | IsExecutingLogin | no | click (spinner class `osui-btn-loading--is-loading`) |

## Patterns used
- P-PARAMS: inputs read with `useSearchParams` by their original names (`True`/`False`); navigation via shell (`OSLink`, `useSignIn`).
- P-STATES: render conditions as the original (`$if IsUnsupportedSystem`); no loading UI of the route's own.
- P-DIALOG: exit dialog and ConfirmationDialog_ResetPassword from the shell (closed, as captured).
- P-CALLS: no direct calls; app-start and Version calls come from the shell/shared blocks in the same phase (load).
- P-MOCKS: `mocks.ts` exports an empty handler list (every call is mocked by the shell).
- P-FLAGS: the only candidate flag is not a flag (see Feature flags).

## Feature flags
- `clientVar:App_PIN_BiometricEnabled`: MCP unavailable; decision: not a flag (user setting for biometric unlock), behaviour built as in the original (user, 2026-10-14); the Login route does not read it (no branch in Login.mvc.js).

## Unclear points
- What "Forgot Password?" does in the mock → Q1 (decision answered by user: A, nothing)
- Login?In_IsFromResetPIN=True in the mock → Q2 (decision answered by user: A, signOut() then mock signIn())
- B2C callback and device-awareness branches → Q3 (decision answered by user: A, not built)
- Get_IsUnsupportedSystem → Q4 (fact answered from TST compiled code: App OR Browser, WebView not included)
- DelayedMessage_Show → Q5 (fact answered from compiled code; shell `delayedMessageShow()`, CR-Login-1 applied)
- Capture-replay parity differences → Q6 (decision answered by user: A, exemptions in migration/parity-exemptions.json)
- Version text without the environment word (position of the Version span) → Q7 (open, decision; CR-Login-4)

## Decisions to confirm
- "Forgot Password?" renders as captured and does nothing on click in the mock phase (Q1).
- Login?In_IsFromResetPIN=True (not restored from the view cache): signOut() (session and local PIN), then the mock
  sign-in, which goes to PINRegister; the B2C round-trip is skipped as for the Login button (Q2, U4).
- AppManager_Events renders as the empty captured widget and the Security Warning dialog stays closed; callback and
  device-awareness branches are not built (Q3). DeviceAwareness_InvalidDevice is an opaque constant (its identifier value
  is never written to the DOM), so any CallbackType in the mock leads to DelayedMessage_Show.
- IsUnsupportedSystem = unsupported app version OR unsupported browser version (Q4): False on TST, True with
  `?mock=unsupported-browser` (U16), which shows UnsupportedVersion_Wrapper instead of the welcome and buttons.
- OnReady calls the shell's `delayedMessageShow()` (Q5, CR-Login-1); nothing is pending in the mock app.
- "Login with UBT One" signs in at once as the mock user and the shell picks the destination (D3(a)/U4, shell auth.ts).
- Static entity values `large` (UBT_Shape) and `xxs` (UBT_FontSize) are local constants taken from the captured classes
  (dom:40, dom:99) because the shared static entities do not have them.
- Parity exemptions added for the capture-replay artifacts (Q6): CAPTURE-SVG-PRESERVEASPECTRATIO (ignoreSubtrees
  `ubt-header-svg`; the header SVG fills the LoginFlow page, so its mask leaves no pixels compared on this route: DOM,
  style and layout checks still run), CAPTURE-LOGO-REPLAY (logo subtree + WelcomeToConnect sizes and the buttons' offset),
  CAPTURE-LINK-HREF-CURSOR, CAPTURE-LOADING-BODYCLASS, CAPTURE-LOADING-TRANSITION.
- The ButtonLoading loading state (`osui-btn-loading--is-loading`, aria-busy) is not captured; it comes from the shared
  block (src/shared/osui/ButtonLoading/README.md).

## Change requests
- CR-Login-1: shell — port UBT_AppManager `DelayedMessage_Show` (applied: `delayedMessageShow()` in src/shell/feedback)
- CR-Login-2: shell CommonUiHost — no stand-in on screens that render CommonUI_InsideLayout (applied)
- CR-Login-3: shared Version — one Get_RuntimeVersion per mount under StrictMode (applied)
- CR-Login-4: shell/shared Version — environment word in the version text (open, Q7)

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real, mocksession=out | 0 | 0 | 0 | 0 | 0 layout, 1 position (Version span, CR-Login-4 / Q7); calls 0; pixels 0.00% | ignoreSubtrees×2, CAPTURE-LOGO-REPLAY×7, CAPTURE-LINK-HREF-CURSOR×1 |
| loading | loading, mocksession=out | 0 | 0 | 0 | 0 | 0 | + CAPTURE-LOADING-TRANSITION×1, CAPTURE-LOADING-BODYCLASS×1 |
| offline | error, mocksession=out | 0 | 0 | 0 | 0 | 0 | + CAPTURE-LOADING-TRANSITION×1, CAPTURE-LOADING-BODYCLASS×1 |

## Server-side notes
- Sign-in, password reset and device change (AppManager_Login, AppManager_ChangeDevice, AppManager_Logout) are server/IdP
  concerns: the BFF must create the session only after the identity provider callback; the mock signs in locally (D3(a)).
