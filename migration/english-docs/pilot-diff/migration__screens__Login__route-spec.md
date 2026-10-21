### migration/screens/Login/route-spec.md

**Change 1**

Before:

> ## Specification
> ### Structure
> - `Layout_LoginFlow` id `$b1`, `In_HasOverlay = True`; Placeholder_Header empty [Login.mvc.js:178-182, dom/default.html:5-35].
> - Placeholder_Content: `.connect-login-screen` › `.connect-login-screen__content` › Tile `$b2` (ExtendedClasses
>   `ubt-zindex-2 connect-login-card`) › `.connect-login-card__content` › if IsUnsupportedSystem: `UnsupportedVersion_Wrapper`
>   `$b3`, else `WelcomeToConnect` `$b4` + container with two CustomContainers `$b5` (`login-button  `, empty margin) and `$b7`
>   (`login-button`, margin top base), each with `ButtonLoading` (`full-width`, ShowLabelOnLoading True) and a button
>   [Login.mvc.js:220-500 (Tile :222, $if :250); dom/default.html:36-90].
> - Then `.text-align-center` › `.need-help-footer` "Need help? " + link "Contact Us" (`font-regular text-underline`,
>   margin-left 0) to `/UBTConnect/ContactUsMenu`, and `Version_LoginWrapper` `$b9` [Login.mvc.js:507-552; dom:91-113].
> - `Dialog_ExitConfirmation` `$b10` at the end of Placeholder_Content [Login.mvc.js:553-570; dom:114-124].
> - Placeholder_CommonUI_Inside_Layout: `OfflineDataSyncEvents` `$b11`, `AppManager_Events` `$b12`,
>   `ActionConfirmationDialog` named `ConfirmationDialog_ResetPassword` (scope `b13`; header "Security Warning", body
>   "Your Connect account was accessed from a different device or application." <br> "To help keep your account secure,
>   please click ‘Continue’ to reset your password.", Continue / Cancel), `CommonUI_InsideLayout` `$b14` with
>   In_IgnoreLockScreen True, In_IgnorePolicy True [Login.mvc.js:572-672; dom:126-180].
> - Tile (UBTConnectLibrary.ConnectPatterns.Tile): CustomContainer with Background neutral-0, padding base, radius large and
>   ExtendedClasses = FormatClasses("ubt-tile", ExtendedClasses); inside a `<div>` for the Content placeholder
>   [Tile.mvc.js:147-210; dom:39-41]. Static entity values `large` and `xxs` are read from the captured classes
>   `border-radius-large`, `font-size-xxs` [dom:40, dom:99] (not in the shared static entities).
> - Version_LoginWrapper: CustomContainer with margin top base, text colour neutral-10, font size xxs, containing `Version`
>   [Version_LoginWrapper.mvc.js:128-170; dom:94-110].
> - AppManager_Events: empty block widget [dom:137]; its callback logic is not built (Q3 answered by user: A).

After:

> ## Specification
> ### Structure
> - `Layout_LoginFlow` has id `$b1` and `In_HasOverlay = True`. Placeholder_Header is empty [Login.mvc.js:178-182, dom/default.html:5-35].
> - Placeholder_Content holds this tree [Login.mvc.js:220-500 (Tile :222, $if :250); dom/default.html:36-90]:
>   - `.connect-login-screen` › `.connect-login-screen__content` › Tile `$b2` (ExtendedClasses `ubt-zindex-2 connect-login-card`) › `.connect-login-card__content`.
>   - When IsUnsupportedSystem is true, the card shows `UnsupportedVersion_Wrapper` `$b3`.
>   - When IsUnsupportedSystem is false, the card shows `WelcomeToConnect` `$b4` and a container.
>   - The container has two CustomContainers: `$b5` (`login-button  `, empty margin) and `$b7` (`login-button`, margin top base).
>   - Each CustomContainer has a `ButtonLoading` (`full-width`, ShowLabelOnLoading True) and a button.
> - After the card, `.text-align-center` holds two items [Login.mvc.js:507-552; dom:91-113]:
>   - `.need-help-footer` with the text "Need help? " and a link "Contact Us" (`font-regular text-underline`, margin-left 0). The link goes to `/UBTConnect/ContactUsMenu`.
>   - `Version_LoginWrapper` `$b9`.
> - `Dialog_ExitConfirmation` `$b10` is at the end of Placeholder_Content [Login.mvc.js:553-570; dom:114-124].
> - Placeholder_CommonUI_Inside_Layout holds these items [Login.mvc.js:572-672; dom:126-180]:
>   - `OfflineDataSyncEvents` `$b11`.
>   - `AppManager_Events` `$b12`.
>   - `ActionConfirmationDialog` named `ConfirmationDialog_ResetPassword` (scope `b13`) with these texts:
>     - Header: "Security Warning".
>     - Body, part 1: "Your Connect account was accessed from a different device or application."
>     - Body, part 2, after <br>: "To help keep your account secure, please click ‘Continue’ to reset your password."
>     - Buttons: Continue and Cancel.
>   - `CommonUI_InsideLayout` `$b14` with In_IgnoreLockScreen True, In_IgnorePolicy True.
> - Tile (UBTConnectLibrary.ConnectPatterns.Tile) is a CustomContainer [Tile.mvc.js:147-210; dom:39-41]:
>   - Its Background is neutral-0, its padding is base and its radius is large.
>   - Its ExtendedClasses = FormatClasses("ubt-tile", ExtendedClasses).
>   - Inside it, a `<div>` holds the Content placeholder.
> - The static entity values `large` and `xxs` come from the captured classes `border-radius-large` and `font-size-xxs` [dom:40, dom:99]. They are not in the shared static entities.
> - Version_LoginWrapper is a CustomContainer with margin top base, text colour neutral-10 and font size xxs. It contains `Version` [Version_LoginWrapper.mvc.js:128-170; dom:94-110].
> - AppManager_Events is an empty block widget [dom:137]. The React app does not build its callback logic (Q3 answered by user: A).

**Change 2**

Before:

> The route itself makes no server call; `api.ts`/`mocks.ts` stay empty (handlers = []).

After:

> The route makes no server call. `api.ts` and `mocks.ts` stay empty (handlers = []).

**Change 3**

Before:

> ## Patterns used
> - P-PARAMS: inputs read with `useSearchParams` by their original names (`True`/`False`); navigation via shell (`OSLink`, `useSignIn`).
> - P-STATES: render conditions as the original (`$if IsUnsupportedSystem`); no loading UI of the route's own.
> - P-DIALOG: exit dialog and ConfirmationDialog_ResetPassword from the shell (closed, as captured).
> - P-CALLS: no direct calls; app-start and Version calls come from the shell/shared blocks in the same phase (load).
> - P-MOCKS: `mocks.ts` exports an empty handler list (every call is mocked by the shell).
> - P-FLAGS: the only candidate flag is not a flag (see Feature flags).
> 
> ## Feature flags
> - `clientVar:App_PIN_BiometricEnabled`: MCP unavailable; decision: not a flag (user setting for biometric unlock), behaviour built as in the original (user, 2026-10-14); the Login route does not read it (no branch in Login.mvc.js).

After:

> ## Patterns used
> - P-PARAMS: the screen reads the inputs with `useSearchParams` by their original names (`True`/`False`). Navigation goes through the shell (`OSLink`, `useSignIn`).
> - P-STATES: the screen renders the same conditions as the original (`$if IsUnsupportedSystem`). The route has no loading UI of its own.
> - P-DIALOG: the shell provides the exit dialog and ConfirmationDialog_ResetPassword. Both stay closed, as captured.
> - P-CALLS: the route makes no direct call. The shell and the shared blocks make the app-start and Version calls in the same phase (load).
> - P-MOCKS: `mocks.ts` exports an empty handler list. The shell mocks every call.
> - P-FLAGS: the only candidate flag is not a flag (see Feature flags).
> 
> ## Feature flags
> - `clientVar:App_PIN_BiometricEnabled`: the MCP is not available. Decision: this is not a flag. It is a user setting for biometric unlock (user, 2026-10-14). The React app builds the behaviour as in the original. The Login route does not read it: Login.mvc.js has no branch for it.

**Change 4**

Before:

> ## Decisions to confirm
> - "Forgot Password?" renders as captured and does nothing on click in the mock phase (Q1).
> - Login?In_IsFromResetPIN=True (not restored from the view cache): signOut() (session and local PIN), then the mock
>   sign-in, which goes to PINRegister; the B2C round-trip is skipped as for the Login button (Q2, U4).
> - AppManager_Events renders as the empty captured widget and the Security Warning dialog stays closed; callback and
>   device-awareness branches are not built (Q3). DeviceAwareness_InvalidDevice is an opaque constant (its identifier value
>   is never written to the DOM), so any CallbackType in the mock leads to DelayedMessage_Show.
> - IsUnsupportedSystem = unsupported app version OR unsupported browser version (Q4): False on TST, True with
>   `?mock=unsupported-browser` (U16), which shows UnsupportedVersion_Wrapper instead of the welcome and buttons.
> - OnReady calls the shell's `delayedMessageShow()` (Q5, CR-Login-1); nothing is pending in the mock app.
> - "Login with UBT One" signs in at once as the mock user and the shell picks the destination (D3(a)/U4, shell auth.ts).
> - Static entity values `large` (UBT_Shape) and `xxs` (UBT_FontSize) are local constants taken from the captured classes
>   (dom:40, dom:99) because the shared static entities do not have them.
> - Parity exemptions added for the capture-replay artifacts (Q6): CAPTURE-SVG-PRESERVEASPECTRATIO (ignoreSubtrees
>   `ubt-header-svg`; the header SVG fills the LoginFlow page, so its mask leaves no pixels compared on this route: DOM,
>   style and layout checks still run), CAPTURE-LOGO-REPLAY (logo subtree + WelcomeToConnect sizes and the buttons' offset),
>   CAPTURE-LINK-HREF-CURSOR, CAPTURE-LOADING-BODYCLASS, CAPTURE-LOADING-TRANSITION.
> - The ButtonLoading loading state (`osui-btn-loading--is-loading`, aria-busy) is not captured; it comes from the shared
>   block (src/shared/osui/ButtonLoading/README.md).
> 
> ## Change requests
> - CR-Login-1: shell — port UBT_AppManager `DelayedMessage_Show` (applied: `delayedMessageShow()` in src/shell/feedback)
> - CR-Login-2: shell CommonUiHost — no stand-in on screens that render CommonUI_InsideLayout (applied)
> - CR-Login-3: shared Version — one Get_RuntimeVersion per mount under StrictMode (applied)
> - CR-Login-4: shell/shared Version — environment word in the version text (open, Q7)

After:

> ## Decisions to confirm
> - "Forgot Password?" renders as captured. In the mock phase, a click on it does nothing (Q1).
> - Case: Login?In_IsFromResetPIN=True and the view cache did not restore the screen. The screen does these steps in order (Q2, U4):
>   1. The screen calls `signOut()`. This clears the session and the local PIN.
>   2. The screen runs the mock sign-in. The mock sign-in goes to PINRegister.
>   - The mock skips the B2C round-trip, as for the Login button.
> - AppManager_Events renders as the empty widget from the capture. The Security Warning dialog stays closed. The React app does not build the callback and device-awareness branches (Q3).
> - DeviceAwareness_InvalidDevice is an opaque constant. The original never writes its identifier value to the DOM. So in the mock, any CallbackType leads to DelayedMessage_Show.
> - IsUnsupportedSystem = unsupported app version OR unsupported browser version (Q4). The value is False on TST. With `?mock=unsupported-browser` (U16), the value is True. Then the screen shows UnsupportedVersion_Wrapper instead of WelcomeToConnect and the buttons.
> - OnReady calls the shell function `delayedMessageShow()` (Q5, CR-Login-1). Nothing is pending in the mock app.
> - When the user clicks "Login with UBT One", the React app signs in at once as the mock user. The shell picks the destination (D3(a)/U4, shell auth.ts).
> - The static entity values `large` (UBT_Shape) and `xxs` (UBT_FontSize) are local constants. They come from the captured classes (dom:40, dom:99). The shared static entities do not have them.
> - The user accepted parity exemptions for the capture-replay artifacts (Q6):
>   - CAPTURE-SVG-PRESERVEASPECTRATIO (ignoreSubtrees `ubt-header-svg`). The header SVG fills the LoginFlow page, so its mask leaves no pixels to compare on this route. The DOM, style and layout checks still run.
>   - CAPTURE-LOGO-REPLAY (logo subtree + WelcomeToConnect sizes and the buttons' offset).
>   - CAPTURE-LINK-HREF-CURSOR.
>   - CAPTURE-LOADING-BODYCLASS.
>   - CAPTURE-LOADING-TRANSITION.
> - The capture does not include the ButtonLoading loading state (`osui-btn-loading--is-loading`, aria-busy). The state comes from the shared block (src/shared/osui/ButtonLoading/README.md).
> 
> ## Change requests
> - CR-Login-1: shell. Port UBT_AppManager `DelayedMessage_Show` (applied: `delayedMessageShow()` in src/shell/feedback).
> - CR-Login-2: shell CommonUiHost. Do not render a stand-in on screens that render CommonUI_InsideLayout (applied).
> - CR-Login-3: shared Version. Make one Get_RuntimeVersion call for each mount under StrictMode (applied).
> - CR-Login-4: shell/shared Version. Add the environment word to the version text (open, Q7).

**Change 5**

Before:

> ## Server-side notes
> - Sign-in, password reset and device change (AppManager_Login, AppManager_ChangeDevice, AppManager_Logout) are server/IdP
>   concerns: the BFF must create the session only after the identity provider callback; the mock signs in locally (D3(a)).

After:

> ## Server-side notes
> - Sign-in, password reset and device change (AppManager_Login, AppManager_ChangeDevice, AppManager_Logout) are server/IdP concerns. The BFF must create the session only after the identity provider callback. The mock signs in locally (D3(a)).

