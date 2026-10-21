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
- `Layout_LoginFlow` has id `$b1` and `In_HasOverlay = True`. Placeholder_Header is empty [Login.mvc.js:178-182, dom/default.html:5-35].
- Placeholder_Content holds this tree [Login.mvc.js:220-500 (Tile :222, $if :250); dom/default.html:36-90]:
  - `.connect-login-screen` › `.connect-login-screen__content` › Tile `$b2` (ExtendedClasses `ubt-zindex-2 connect-login-card`) › `.connect-login-card__content`.
  - When IsUnsupportedSystem is true, the card shows `UnsupportedVersion_Wrapper` `$b3`.
  - When IsUnsupportedSystem is false, the card shows `WelcomeToConnect` `$b4` and a container.
  - The container has two CustomContainers: `$b5` (`login-button  `, empty margin) and `$b7` (`login-button`, margin top base).
  - Each CustomContainer has a `ButtonLoading` (`full-width`, ShowLabelOnLoading True) and a button.
- After the card, `.text-align-center` holds two items [Login.mvc.js:507-552; dom:91-113]:
  - `.need-help-footer` with the text "Need help? " and a link "Contact Us" (`font-regular text-underline`, margin-left 0). The link goes to `/UBTConnect/ContactUsMenu`.
  - `Version_LoginWrapper` `$b9`.
- `Dialog_ExitConfirmation` `$b10` is at the end of Placeholder_Content [Login.mvc.js:553-570; dom:114-124].
- Placeholder_CommonUI_Inside_Layout holds these items [Login.mvc.js:572-672; dom:126-180]:
  - `OfflineDataSyncEvents` `$b11`.
  - `AppManager_Events` `$b12`.
  - `ActionConfirmationDialog` named `ConfirmationDialog_ResetPassword` (scope `b13`) with these texts:
    - Header: "Security Warning".
    - Body, part 1: "Your Connect account was accessed from a different device or application."
    - Body, part 2, after <br>: "To help keep your account secure, please click ‘Continue’ to reset your password."
    - Buttons: Continue and Cancel.
  - `CommonUI_InsideLayout` `$b14` with In_IgnoreLockScreen True, In_IgnorePolicy True.
- Tile (UBTConnectLibrary.ConnectPatterns.Tile) is a CustomContainer [Tile.mvc.js:147-210; dom:39-41]:
  - Its Background is neutral-0, its padding is base and its radius is large.
  - Its ExtendedClasses = FormatClasses("ubt-tile", ExtendedClasses).
  - Inside it, a `<div>` holds the Content placeholder.
- The static entity values `large` and `xxs` come from the captured classes `border-radius-large` and `font-size-xxs` [dom:40, dom:99]. They are not in the shared static entities.
- Version_LoginWrapper is a CustomContainer with margin top base, text colour neutral-10 and font size xxs. It contains `Version` [Version_LoginWrapper.mvc.js:128-170; dom:94-110].
- AppManager_Events is an empty block widget [dom:137]. The React app does not build its callback logic (Q3 answered by user: A).

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| UBT_AppManager/ActionAppManager_SynchAppContext | server | app start (shell `AppStart`, signed out) [calls.json #1; shell.md "What runs on every page load"] | EspaceName | config (shell) | shell mock | shell |
| UBTConnect/ActionSync_Info_GetMain | server | app start (shell) [calls.json #2] | isFromLogin | none in the route | shell mock | shell |
| UBTConnect_Utils/ActionGet_RuntimeVersion | server | `Version` OnReady (shared block) [calls.json #3; call-sites] | none | version text | recorded (shell mocks) | shell |

The route makes no server call. `api.ts` and `mocks.ts` stay empty (handlers = []).

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
- P-PARAMS: the screen reads the inputs with `useSearchParams` by their original names (`True`/`False`). Navigation goes through the shell (`OSLink`, `useSignIn`).
- P-STATES: the screen renders the same conditions as the original (`$if IsUnsupportedSystem`). The route has no loading UI of its own.
- P-DIALOG: the shell provides the exit dialog and ConfirmationDialog_ResetPassword. Both stay closed, as captured.
- P-CALLS: the route makes no direct call. The shell and the shared blocks make the app-start and Version calls in the same phase (load).
- P-MOCKS: `mocks.ts` exports an empty handler list. The shell mocks every call.
- P-FLAGS: the only candidate flag is not a flag (see Feature flags).

## Feature flags
- `clientVar:App_PIN_BiometricEnabled`: the MCP is not available. Decision: this is not a flag. It is a user setting for biometric unlock (user, 2026-10-14). The React app builds the behaviour as in the original. The Login route does not read it: Login.mvc.js has no branch for it.

## Unclear points
- What "Forgot Password?" does in the mock → Q1 (decision answered by user: A, nothing)
- Login?In_IsFromResetPIN=True in the mock → Q2 (decision answered by user: A, signOut() then mock signIn())
- B2C callback and device-awareness branches → Q3 (decision answered by user: A, not built)
- Get_IsUnsupportedSystem → Q4 (fact answered from TST compiled code: App OR Browser, WebView not included)
- DelayedMessage_Show → Q5 (fact answered from compiled code; shell `delayedMessageShow()`, CR-Login-1 applied)
- Capture-replay parity differences → Q6 (decision answered by user: A, exemptions in migration/parity-exemptions.json)
- Version text without the environment word (position of the Version span) → Q7 (open, decision; CR-Login-4)

## Decisions to confirm
- "Forgot Password?" renders as captured. In the mock phase, a click on it does nothing (Q1).
- Case: Login?In_IsFromResetPIN=True and the view cache did not restore the screen. The screen does these steps in order (Q2, U4):
  1. The screen calls `signOut()`. This clears the session and the local PIN.
  2. The screen runs the mock sign-in. The mock sign-in goes to PINRegister.
  - The mock skips the B2C round-trip, as for the Login button.
- AppManager_Events renders as the empty widget from the capture. The Security Warning dialog stays closed. The React app does not build the callback and device-awareness branches (Q3).
- DeviceAwareness_InvalidDevice is an opaque constant. The original never writes its identifier value to the DOM. So in the mock, any CallbackType leads to DelayedMessage_Show.
- IsUnsupportedSystem = unsupported app version OR unsupported browser version (Q4). The value is False on TST. With `?mock=unsupported-browser` (U16), the value is True. Then the screen shows UnsupportedVersion_Wrapper instead of WelcomeToConnect and the buttons.
- OnReady calls the shell function `delayedMessageShow()` (Q5, CR-Login-1). Nothing is pending in the mock app.
- When the user clicks "Login with UBT One", the React app signs in at once as the mock user. The shell picks the destination (D3(a)/U4, shell auth.ts).
- The static entity values `large` (UBT_Shape) and `xxs` (UBT_FontSize) are local constants. They come from the captured classes (dom:40, dom:99). The shared static entities do not have them.
- The user accepted parity exemptions for the capture-replay artifacts (Q6):
  - CAPTURE-SVG-PRESERVEASPECTRATIO (ignoreSubtrees `ubt-header-svg`). The header SVG fills the LoginFlow page, so its mask leaves no pixels to compare on this route. The DOM, style and layout checks still run.
  - CAPTURE-LOGO-REPLAY (logo subtree + WelcomeToConnect sizes and the buttons' offset).
  - CAPTURE-LINK-HREF-CURSOR.
  - CAPTURE-LOADING-BODYCLASS.
  - CAPTURE-LOADING-TRANSITION.
- The capture does not include the ButtonLoading loading state (`osui-btn-loading--is-loading`, aria-busy). The state comes from the shared block (src/shared/osui/ButtonLoading/README.md).

## Change requests
- CR-Login-1: shell. Port UBT_AppManager `DelayedMessage_Show` (applied: `delayedMessageShow()` in src/shell/feedback).
- CR-Login-2: shell CommonUiHost. Do not render a stand-in on screens that render CommonUI_InsideLayout (applied).
- CR-Login-3: shared Version. Make one Get_RuntimeVersion call for each mount under StrictMode (applied).
- CR-Login-4: shell/shared Version. Add the environment word to the version text (open, Q7).

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real, mocksession=out | 0 | 0 | 0 | 0 | 0 layout, 1 position (Version span, CR-Login-4 / Q7); calls 0; pixels 0.00% | ignoreSubtrees×2, CAPTURE-LOGO-REPLAY×7, CAPTURE-LINK-HREF-CURSOR×1 |
| loading | loading, mocksession=out | 0 | 0 | 0 | 0 | 0 | + CAPTURE-LOADING-TRANSITION×1, CAPTURE-LOADING-BODYCLASS×1 |
| offline | error, mocksession=out | 0 | 0 | 0 | 0 | 0 | + CAPTURE-LOADING-TRANSITION×1, CAPTURE-LOADING-BODYCLASS×1 |

## Server-side notes
- Sign-in, password reset and device change (AppManager_Login, AppManager_ChangeDevice, AppManager_Logout) are server/IdP concerns. The BFF must create the session only after the identity provider callback. The mock signs in locally (D3(a)).
