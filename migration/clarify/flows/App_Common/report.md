# Flow report: App_Common

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 3 (built: 2, Login, Splash; not built: InvalidPermissions, board decision `skip`) |
| Own blocks | 19. A built screen uses 14 of them. Not used by a built screen: Layout, MenuIcon (InvalidPermissions only), ApplicationTitle, SVGBackground_LoginWrapper, UserInfo (used by nothing) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27, merge marks of the second dump), `app/src/…`, KB pages `ui/app-shell.md`, `ui/design-tokens.md`, `logic/ui-app-start-and-login.md`, `logic/error-messages.md`, `logic/app-version.md`, `logic/session-and-sync.md` (rules only) and UBT_AppManager `logic/sign-in-flow.md`, `logic/device-awareness.md`; TST compiled code (`tst_source.py`) of Login, Splash, CommonUI_InsideLayout, BottomBarMenu, LayoutBlank, Version, the unsupported-version blocks, ApplicationLoadEvents and `UBTConnect.controller.js`; the TST flow controller `migration/shell/sources/UBTConnect.App_Common.controller.js` |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 129 · partial 4 · missing 3 · differs 21 · mock-only 4 · n/a 21 · unclear 0 (same as `checklist.json`, 182 rows).
- **F1** (major): the React flow handler has no BubbleCommunicationException branch. A non-ok answer shows "Request failed with status N" as an error. TST shows "Service Interruption".
- **F2** (minor): "Forgot Password?" on Login does nothing in React. No decision record names this behaviour (Q1).
- **F3** (minor): the device-awareness branch of Login OnReady compares CallbackType with a wrong constant, and the security warning dialog never opens (Q3).
- **F4** (info): from a PIN reset, Login runs Connect_Logout and then the mock sign-in. TST starts the login, then calls AppManager_Logout (Q2).
- **F5** and **F6** (info): system exceptions in the flow handler, and version checks that ignore the stored minimum versions.
- Status: in React a user opens Login and signs in at once as the mock user. Then the app opens PINRegister, the resume link, the sign-in callback or HomeFeed.
- Splash, the lock overlay, the policy checker, the back handlers and the bottom bar behave as on TST. A password reset is not possible.

## 2. Screens

### 2.1 Login

Route `/UBTConnect/Login`, page `app/src/pages/Login/LoginPage.tsx`, flows in `app/src/pages/Login/hooks/useLogin.ts`,
sign-in in `app/src/platform/session/auth.ts`. Board: `build`, built (V1, D3(a), user 2026-10-14). The decisions that
apply are D3(a) and U4 (mock sign-in), U1 (the signed-out gate) and U15 (the Leave App dialog).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 001 | roles Anonymous, Registered, UBTOne_User | anyone opens the screen; the screen has no checkRegistered | ROUTE_META Login = { access: 'anonymous', lock: 'ignore' } | `match` | app/src/app/routes.ts:44; migration/knowledge/shell-facts.md:14<br>lock 'ignore' agrees with CommonUI_InsideLayout In_IgnoreLockScreen True. |
| 002 | input parameters (4) | In_IsFromInvalidPermissions, In_IsFromResetPIN (Boolean), CallbackType (AppManager_JSUtils_CustomEvents Identifier), CallbackGUID (Text) | readLoginInputs reads the 4 names from the query string; defaults False and "" | `match` | app/src/pages/Login/inputs.ts:5-27; app/src/app/routes.generated.ts:9 |
| 003 | local variables IsExecutingLogin, IsResettingPassword, IsUnsupportedSystem | the two spinner flags and the unsupported-system switch | useState for each; IsUnsupportedSystem from get_IsUnsupportedSystem at the first render | `match` | app/src/pages/Login/hooks/useLogin.ts:34-36 |
| 004 | lifecycle OnInitialize, OnReady | OnInitialize → OnInitialize; OnReady → OnReady | one mount effect for each, run once per screen instance | `match` | app/src/pages/Login/hooks/useLogin.ts:66-87 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 005 | data actions and aggregates | none | none; the server calls of the Login capture belong to the app start | `match` | pack/screens.md Login; app/src/pages/Login/mocks.ts:3-5 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 006 | Layout_LoginFlow In_HasOverlay True | login layout of UBTConnectLibrary with the overlay | LoginLayout inHasOverlay | `match` | app/src/pages/Login/LoginPage.tsx:25-27; TST UBTConnect.App_Common.Login.mvc.js:178<br>The internals of Layout_LoginFlow (UBTConnectLibrary) are not checked here. |
| 007 | containers connect-login-screen, connect-login-screen__content | two containers | the same two div elements | `match` | app/src/pages/Login/LoginPage.tsx:30-31; TST UBTConnect.App_Common.Login.mvc.js:200, 210 |
| 008 | Tile ExtendedClasses "ubt-zindex-2 connect-login-card", container connect-login-card__content | the login card | Tile with the same classes; div connect-login-card__content | `match` | app/src/pages/Login/components/LoginCard.tsx:32-33; TST UBTConnect.App_Common.Login.mvc.js:219, 240 |
| 009 | If IsUnsupportedSystem (#IsUnsupported) | True: UnsupportedVersion_Wrapper; False: WelcomeToConnect and the two buttons | isUnsupportedSystem ? UnsupportedVersionWrapper : WelcomeToConnect and the buttons | `match` | app/src/pages/Login/components/LoginCard.tsx:34-74; BR-UBTCON-300 |
| 010 | CustomContainer "login-button  " (MarginSize {}) and ButtonLoading (full-width, IsLoading = IsExecutingLogin, ShowLabelOnLoading) | wrapper of the Login button | the same arguments | `match` | app/src/pages/Login/components/LoginCard.tsx:40-41; TST UBTConnect.App_Common.Login.mvc.js:305, 325-327 |
| 011 | button "Login with UBT One" | style btn btn-primary; enabled = not IsResettingPassword; onclick Login(False) with built-in validation | class btn btn-primary OSFillParent; disabled={isResettingPassword}; onClick onLogin | `match` | app/src/pages/Login/components/LoginCard.tsx:42-51; TST UBTConnect.App_Common.Login.mvc.js:346-368; BR-UBTCON-303 |
| 012 | CustomContainer "login-button" (MarginSize Top Base) and ButtonLoading (IsLoading = IsResettingPassword) | wrapper of the Forgot Password button | the same arguments | `match` | app/src/pages/Login/components/LoginCard.tsx:54-59; TST UBTConnect.App_Common.Login.mvc.js:395, 426-428 |
| 013 | button "Forgot Password?" | style btn; enabled = not IsExecutingLogin; onclick Login(True) with built-in validation | class btn OSFillParent; disabled={isExecutingLogin}; onClick onForgotPassword | `match` | app/src/pages/Login/components/LoginCard.tsx:60-69; TST UBTConnect.App_Common.Login.mvc.js:447-469<br>The click handler is a row of the screen actions (Login, isResetPassword True). |
| 014 | footer "Need help? " and link "Contact Us" → ContactUsMenu (font-regular text-underline) | a link to ContactUsMenu | OSLink url /UBTConnect/ContactUsMenu with the same classes | `match` | app/src/pages/Login/components/LoginFooter.tsx:9-15; TST UBTConnect.App_Common.Login.mvc.js:502-533 |
| 015 | Version_LoginWrapper | the app version under the card | LoginVersion | `match` | app/src/pages/Login/components/LoginFooter.tsx:16; app/src/pages/Login/components/LoginVersion.tsx:10-25<br>The block is checked in §3.6. |
| 016 | Dialog_ExitConfirmation (App_Common_Blocks_PopupDialogs) | the Leave App dialog | DialogExitConfirmation | `match` | app/src/pages/Login/LoginPage.tsx:42; migration/app-shell.spec.md U15<br>Block of the _shared pack: its behaviour is checked in the report of _shared. |
| 017 | Placeholder_CommonUI_Inside_Layout: OfflineDataSyncEvents | the sync events block | OfflineDataSync | `match` | app/src/pages/Login/LoginPage.tsx:47<br>The block is checked in §3.4. |
| 018 | AppManager_Events (UBT_AppManager), OnCallback → AppManager_Callback | registers the identity provider callback handlers and raises OnCallback | AppManagerEvents renders the empty block; no handler, because the mock sign-in signs in at once | `differs` | app/src/pages/Login/components/AppManagerEvents.tsx:3-9; migration/app-shell.spec.md U4; migration/board.md Login (D3(a)) |
| 019 | ActionConfirmationDialog #ConfirmationDialog_ResetPassword | header "Security Warning", a body of two lines, labels Continue and Cancel | ConfirmDialog widgetId ConfirmationDialog_ResetPassword with the same texts and a line break | `match` | app/src/pages/Login/LoginPage.tsx:49-62; TST UBTConnect.App_Common.Login.mvc.js:637-646<br>Nothing opens the dialog in React: see the OnReady device-awareness row (F3). |
| 020 | CommonUI_InsideLayout In_IgnoreLockScreen True, In_IgnorePolicy True | no lock screen and no policy checker on Login | CommonUiLayout inIgnoreLockScreen inIgnorePolicy | `match` | app/src/pages/Login/LoginPage.tsx:63; TST UBTConnect.App_Common.Login.mvc.js:652-653 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 021 | OnInitialize: Get_IsUnsupportedSystem; unsupported → End | stops the initialization on an unsupported system | the effect returns at once when isUnsupportedSystem | `match` | app/src/pages/Login/hooks/useLogin.ts:34, 77; TST UBTConnect.App_Common.Login.mvc.js:938-944; BR-UBTCON-300 |
| 022 | OnInitialize: not In_IsFromInvalidPermissions → AppManager_SetAppCallback("") | clears the sign-in callback, except when the signed-out gate opened Login | if (!inIsFromInvalidPermissions) setAppCallback('') | `match` | app/src/pages/Login/hooks/useLogin.ts:78; app/src/platform/session/resume.ts:26-29; TST UBTConnect.App_Common.Login.mvc.js:947-950; migration/app-shell.spec.md U1<br>The KB says that no navigation passes True (K1). |
| 023 | OnInitialize: IsExecutingLogin = False | resets the Login spinner | the state starts False | `match` | app/src/pages/Login/hooks/useLogin.ts:35; TST UBTConnect.App_Common.Login.mvc.js:955 |
| 024 | OnInitialize: In_IsFromResetPIN and a fresh render → Login(False), then AppManager_Logout | starts the identity provider login, then logs the AppManager session out (BR-UBTCON-302) | signOut() first (Connect_Logout: cache clear, ADR-10 clear, AppManager_Logout steps), then the mock sign-in | `partial` | app/src/pages/Login/hooks/useLogin.ts:44-49, 79; app/src/platform/session/auth.ts:67-96; TST UBTConnect.App_Common.Login.mvc.js:957-976<br>The order is the other way round, and the logout is Connect_Logout, not AppManager_Logout.<br>**F4** (info)<br>Question Q2 |
| 025 | Login(isResetPassword True), from "Forgot Password?" | IsResettingPassword = True, then AppManager_Login(True, ConfirmationDialog_ResetPassword.Id): the reset-password policy of the identity provider (BR-UAM-427) | validation.validate('') only: no spinner, no disabled Login button, no call, no message | `unclear` | app/src/pages/Login/hooks/useLogin.ts:97-99; TST UBTConnect.App_Common.Login.mvc.js:719-730; BR-UBTCON-303<br>No decision record names this. The code comment cites a past question (not evidence).<br>**F2** (minor)<br>Question Q1 |
| 026 | Login(isResetPassword False), from "Login with UBT One" | IsExecutingLogin = True, then AppManager_Login(False, popup id) | setIsExecutingLogin(true), then signIn through the identity provider of the build (mock: at once) | `match` | app/src/pages/Login/hooks/useLogin.ts:44-57, 93-96; app/src/platform/session/auth.ts:33-58; TST UBTConnect.App_Common.Login.mvc.js:724-730; migration/app-shell.spec.md U4 |
| 027 | AppManager_Login and the identity provider (server side) | B2C or FrontEgg sign-in, then the server AppManager_Login of UBT_AppManager_CS | mockAuth: no sign-in page; the mock user signs in at once | `mock-only` | app/src/platform/auth/mockAuth.ts:12-32; app/src/platform/auth/authProvider.ts:8-10; KB UBT_AppManager logic/sign-in-flow.md<br>Production needs an identity provider for AppManager_Login and the /UBT_AppManager/Callback screen (BR-UAM-463, BR-UAM-464). |
| 028 | Login: exception handler AllExceptions | both flags False, then ShowExceptionMessage(message) | catch: both flags false, then showExceptionMessage(message, false) | `match` | app/src/pages/Login/hooks/useLogin.ts:49-53; TST UBTConnect.App_Common.Login.mvc.js:744-751; BR-UBTCON-212 |
| 029 | AppManager_Callback success: Connect_SetLoggedContext(isFromLogin True), TriggerOfflineDataSync, ReplaceOnUpcomingNavigation, both flags False | the post-login sequence (BR-UBTCON-304) | signIn: postLogin() = connectSetLoggedContext(true); navigate with replace; flags false after the sign-in | `match` | app/src/platform/session/auth.ts:39, 52-58; app/src/platform/bootstrap/postLogin.ts:53-55; TST UBTConnect.App_Common.Login.mvc.js:846-855<br>TriggerOfflineDataSync has its own row in §4 (differs). |
| 030 | AppManager_Callback routing: IdP_OnLogin → HomeFeed; PIN_NeedRegistration → PINRegister; otherwise End | routes by callback type (BR-UBTCON-305) | signIn returns PINRegister without a local PIN, else the resume link, else OutSystems_LastURL, else HomeFeed | `differs` | app/src/platform/session/auth.ts:40-47; migration/app-shell.spec.md U4; KB UBT_AppManager BR-UAM-464; TST UBTConnect.App_Common.Login.mvc.js:860-874<br>U4 names these branches. On the web, the TST Callback screen sends the browser to OutSystems_LastURL (BR-UAM-464). |
| 031 | AppManager_Callback IdP_OnResetPassword → FeedbackMessage_AutoClose(Message, Success, MessageTitle) | a success toast; the user stays on Login | no reset-password path | `unclear` | TST UBTConnect.App_Common.Login.mvc.js:865-868; BR-UBTCON-305<br>It depends on the answer to Q1.<br>**F2** (minor)<br>Question Q1 |
| 032 | AppManager_Callback failure → FeedbackMessage_AutoClose(Message, MessageType, MessageTitle), both flags False | the message of the App Manager | no failure result: the mock sign-in always succeeds; a build without a provider throws, and ShowExceptionMessage shows the error | `differs` | app/src/platform/session/auth.ts:34-35; app/src/platform/auth/mockAuth.ts:18-22; migration/app-shell.spec.md U4; TST UBTConnect.App_Common.Login.mvc.js:887-890<br>Production needs the failure toast with the message of the provider. |
| 033 | OnReady: CallbackType = DeviceAwareness_InvalidDevice → AppManager_HandleDeviceAwarenessPopUp(CallbackGUID, ConfirmationDialog_ResetPassword.Id) | the security warning dialog (BR-UBTCON-306) | the branch only skips DelayedMessage_Show; no dialog opens; the constant is 'AppManager_JSUtils_CustomEvents.DeviceAwareness_InvalidDevice' | `missing` | app/src/pages/Login/hooks/useLogin.ts:10-12, 84-87; TST UBTConnect.App_Common.Login.mvc.js:796-801; migration/knowledge/static-entities-tst.json:2643; KB UBT_AppManager logic/device-awareness.md<br>The TST value of the record is "DeviceAwareness_InvalidDevice", so the React test never matches.<br>**F3** (minor)<br>Question Q3 |
| 034 | OnReady, else → DelayedMessage_Show | shows a pending delayed message once | delayedMessageShow() | `match` | app/src/pages/Login/hooks/useLogin.ts:86; app/src/platform/feedback/delayedMessage.ts:14-34; CR-Login-1; TST UBTConnect.App_Common.Login.mvc.js:809 |
| 035 | unreachable end nodes of AppManager_Callback, Login, OnInitialize and OnReady | not connected | not implemented | `n/a` | pack/screens.md Login<br>dead in the model |

**Validations**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 036 | built-in validation of both buttons (validateWidget("")) | validates the screen before the action; the screen has no input widget | validation.validate('') before the action | `match` | app/src/pages/Login/hooks/useLogin.ts:40, 94, 98; TST UBTConnect.App_Common.Login.mvc.js:352, 453<br>No validation widget renders on Login, so nothing changes on the screen. |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 037 | BR-UBTCON-300 | an unsupported system stops the initialization and shows the card | the effect returns, and the card replaces the buttons | `match` | app/src/pages/Login/hooks/useLogin.ts:77; app/src/pages/Login/components/LoginCard.tsx:34-35 |
| 038 | BR-UBTCON-301 | In_IsFromInvalidPermissions True keeps the sign-in callback | the same; the route guard opens Login with the flag | `match` | app/src/pages/Login/hooks/useLogin.ts:78; app/src/app/RouteGuard.tsx:46-52; migration/app-shell.spec.md U1<br>KB text disagrees with TST about the callers (K1). |
| 039 | BR-UBTCON-302 | from a PIN reset: login, then AppManager_Logout | Connect_Logout, then the mock sign-in | `partial` | app/src/pages/Login/hooks/useLogin.ts:79<br>**F4** (info)<br>Question Q2 |
| 040 | BR-UBTCON-303 | Login and Forgot Password exclude each other, each with its spinner | Login: yes; Forgot Password: no spinner and no disabled Login button | `partial` | app/src/pages/Login/components/LoginCard.tsx:41-63; app/src/pages/Login/hooks/useLogin.ts:93-99<br>**F2** (minor)<br>Question Q1 |
| 041 | BR-UBTCON-304 | callback success: logged context, offline sync, history replace; failure: the App Manager message | logged context and history replace; no offline sync (§4); no failure result (U4) | `differs` | app/src/platform/session/auth.ts:33-58; migration/app-shell.spec.md U4; migration/app-shell.spec.md:233 |
| 042 | BR-UBTCON-305 | routing by callback type | the U4 destinations | `differs` | app/src/platform/session/auth.ts:40-47; migration/app-shell.spec.md U4 |
| 043 | BR-UBTCON-306 | invalid device: the security warning dialog; otherwise the delayed message | the delayed message only | `missing` | app/src/pages/Login/hooks/useLogin.ts:84-87<br>**F3** (minor)<br>Question Q3 |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 044 | screen strings (8) | "Login with UBT One ", "Forgot Password?", "Need help? ", "Contact Us", "Security Warning", the body of two lines, "Continue", "Cancel" | the same 8 texts | `match` | app/src/pages/Login/components/LoginCard.tsx:50, 68; app/src/pages/Login/components/LoginFooter.tsx:11-13; app/src/pages/Login/LoginPage.tsx:52-61; TST UBTConnect.App_Common.Login.mvc.js:385, 486, 519, 533, 637-646 |

All 8 strings of the screen match.

### 2.2 Splash

Route `/UBTConnect/Splash`, page `app/src/pages/Splash/SplashPage.tsx`, flows in `app/src/pages/Splash/hooks/useSplash.ts`.
Board: `build`, built (V1, D3(a), user 2026-10-14). The cold-start link is always empty on the web (U14), so the
link branches of LoadingDotsAnimationComplete never run in React. They match TST all the same.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 045 | roles Anonymous, Registered, UBTOne_User | anyone opens the screen | ROUTE_META Splash = { access: 'anonymous', lock: 'ignore' } | `match` | app/src/app/routes.ts:47-49; CR-Splash-1<br>Splash runs its own PIN check after the animation, so the app-start lock redirect leaves it alone. |
| 046 | input parameters | none | route inputs [] | `match` | app/src/app/routes.generated.ts:86 |
| 047 | local variables Percentage, TriggerAnimation, NavigationObject | progress value, animation start, the held navigation | useRef(0), useState(false), useRef(null) | `match` | app/src/pages/Splash/hooks/useSplash.ts:36-38 |
| 048 | lifecycle | none: the blocks raise the events | no lifecycle effect of the screen; block events only | `match` | app/src/pages/Splash/hooks/useSplash.ts:33-86 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 049 | data actions and aggregates | none | none; the calls of the Splash capture belong to the app start | `match` | app/src/pages/Splash/SplashPage.tsx:9-13 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 050 | LayoutBlank | the blank layout | BlankLayout | `match` | app/src/pages/Splash/SplashPage.tsx:21-36<br>The block is checked in §3.3. |
| 051 | LoadingDots (UBTConnectLibrary): In_FinalCurvaturePercentage and In_Header_FinalHeightPercentage = Client.App_PIN_Header_FinalHeightPercentage, isTriggerAnimation = TriggerAnimation; AnimationComplete → LoadingDotsAnimationComplete | the loading animation; its end drives the routing | LoadingDots with both percentages from the same client variable, isTriggerAnimation and onAnimationComplete | `match` | app/src/pages/Splash/SplashPage.tsx:25-31; app/src/pages/Splash/hooks/useSplash.ts:39; TST UBTConnect.App_Common.Splash.mvc.js:154-158; app/docs/reference/stack.md ADR-6<br>Both inputs read the height variable (90), not the curvature variable (105), as on TST. |
| 052 | If False: #SplashContent (logo, title, ProgressBar) | never rendered | not implemented | `n/a` | pack/screens.md Splash [DEAD BRANCH]<br>dead in the model |
| 053 | ApplicationLoadEvents (OutSystemsUI) MinimumDisplayTimeMs 1500; OnUpgradeProgress, OnLoadComplete | 10 progress steps of MinimumDisplayTimeMs / 10, then OnLoadComplete(window.location.href) after the rest of the minimum time | useApplicationLoadEvents(1500, …) with the same steps and timing, and the empty block | `match` | app/src/pages/Splash/SplashPage.tsx:32; app/src/pages/Splash/hooks/useSplash.ts:12, 60; app/src/pages/Splash/hooks/useApplicationLoadEvents.ts:30-54; TST OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc.js:528-583 |
| 054 | ApplicationLoadEvents: the moment of load complete | the runtime ApplicationLifecycle onLoadComplete (runtime code, not in local sources) | the end of the app start of the shell (appReady) | `unclear` | app/src/pages/Splash/hooks/useApplicationLoadEvents.ts:13-16, 45-54; TST OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc.js:578-583<br>The code comment calls this point open.<br>Question Q4 |
| 055 | If False → CommonUI_InsideLayout(In_IgnorePolicy True) | never rendered | not rendered; useNoCommonUi tells the shell that the screen has no CommonUI | `n/a` | app/src/pages/Splash/SplashPage.tsx:16-17; CR-Splash-3; pack/screens.md Splash [DEAD BRANCH]<br>dead in the model |
| 056 | else → HandleOnResumeOpenLink (Legacy_Share) | rendered | OpenLinkOnResume | `match` | app/src/pages/Splash/SplashPage.tsx:33; TST UBTConnect.App_Common.Splash.mvc.js:244<br>The block is checked in the report of Legacy_Share (U14). |
| 057 | NavigationHandler, Navigation → Handler_OnNavigation | raises Navigation before each navigation | NavigationHandler with onNavigation on the dx-before-navigation event | `match` | app/src/pages/Splash/SplashPage.tsx:37; app/src/platform/navigation/NavigationHandler/NavigationHandler.tsx:18-33 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 058 | Handler_OnNavigation: PreventNavigation, NavigationObject = NavigationEvent | holds every navigation while Splash shows | stopPropagation, preventDefault, keep the event | `match` | app/src/pages/Splash/hooks/useSplash.ts:42-46; TST UBTConnect.App_Common.Splash.mvc.js:339-342 |
| 059 | OnUpgradeProgress: Percentage = Trunc(Completed / Total * 150) | feeds the dead progress bar only | percentage.current = Math.trunc(completed / total * 150) | `match` | app/src/pages/Splash/hooks/useSplash.ts:49-51; TST UBTConnect.App_Common.Splash.mvc.js:379 |
| 060 | OnLoadComplete: TriggerAnimation = True; LastURL = In_RedirectURL unless NavigationObject <> NullObject() and LastURL <> "" | starts the animation and keeps the last URL | the same | `match` | app/src/pages/Splash/hooks/useSplash.ts:54-58; TST UBTConnect.App_Common.Splash.mvc.js:423-429 |
| 061 | LoadingDotsAnimationComplete: Set_InitialClientVariables, PIN_Check, GetColdStartLinkURL, AllowUpcomingNavigation | the four calls in this order | the same order | `match` | app/src/pages/Splash/hooks/useSplash.ts:63-67; TST UBTConnect.App_Common.Splash.mvc.js:469-480 |
| 062 | LoadingDotsAnimationComplete: link <> "" and (NeedRegister or NeedUnlock or no user) → SetResumeLoginLink(link) | parks the cold-start link for after the PIN step or the sign-in | the same condition | `match` | app/src/pages/Splash/hooks/useSplash.ts:68-71; TST UBTConnect.App_Common.Splash.mvc.js:481-484<br>The link is always "" on the web (U14), so this branch never runs. |
| 063 | LoadingDotsAnimationComplete: signed in and NeedRegister → PINRegister; signed in and NeedUnlock → PINUnlock | Default transition | navigate(PATHS.pinRegister) or navigate(PATHS.pinUnlock), Default transition | `match` | app/src/pages/Splash/hooks/useSplash.ts:72-81; TST UBTConnect.App_Common.Splash.mvc.js:487-496 |
| 064 | LoadingDotsAnimationComplete: otherwise ScreenController_NavigateToPage(link, True), else (Client.LastURL, True) | replaces the Splash entry | screenController_NavigateToPage(link if set, else LastURL, true) | `match` | app/src/pages/Splash/hooks/useSplash.ts:82; TST UBTConnect.App_Common.Splash.mvc.js:504-515 |
| 065 | unreachable end nodes of the four actions | not connected | not implemented | `n/a` | pack/screens.md Splash<br>dead in the model |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 066 | BR-UBTCON-307 | a cold-start link is parked when a PIN step or the sign-in comes first | the same condition | `match` | app/src/pages/Splash/hooks/useSplash.ts:68-71 |
| 067 | BR-UBTCON-308 | after the animation: PINRegister, PINUnlock, the link, or the last URL | the same order | `match` | app/src/pages/Splash/hooks/useSplash.ts:72-82 |
| 068 | BR-UBTCON-309 | navigations are held; the redirect URL becomes the last URL | the same | `match` | app/src/pages/Splash/hooks/useSplash.ts:42-58 |
| 069 | client variables LastURL and App_PIN_Header_FinalHeightPercentage | LastURL Text, default ""; App_PIN_Header_FinalHeightPercentage Decimal, default 90 | the same names and defaults in the client variables of the shell | `match` | app/src/platform/session/clientVars.ts:14, 31; pack/data.md |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 070 | screen strings | no visible string of its own (the dead branch shows the module name) | none | `match` | pack/strings.md; pack/screens.md Splash |

The screen has no visible string of its own.

### 2.3 InvalidPermissions (not built)

Board decision: `skip` (V1, D3, skip:dead, user 2026-10-14, `migration/board.md:66`): no link, URL or handler
targets the screen on TST. The DEV screen shows the side-menu Layout with MenuIcon, the title "Invalid Permissions",
a warning BlankSlate and a Login button. The button opens Login with all inputs at their defaults, and BottomBarMenu
keeps its defaults. The screen has no input, no local variable and no server call. A build needs the App_Common
Layout and MenuIcon blocks (not built), the OSUI BlankSlate and the built BottomBarMenu.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 071 | screen InvalidPermissions (not built) | Layout, MenuIcon, title "Invalid Permissions", BlankSlate with a warning icon, a text and a Login button, BottomBarMenu | not built; no page folder | `n/a` | migration/board.md:66 (skip, V1, D3, skip:dead, user 2026-10-14)<br>board decision skip |

## 3. Blocks of the flow

The rows check the own blocks that a built screen uses, plus one `n/a` row for each own block that no built screen
uses. The block internals of other modules are not checked here (§4). Each table has a Block column, because one
sub-section can hold several small blocks.

### 3.1 CommonUI_InsideLayout

React: `app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx` and the lock host
`app/src/platform/navigation/LockHost.tsx`. 70 screens embed the block. The other flow reports point here for its
behaviour.

| Id | Block | Area | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|---|
| 072 | CommonUI_InsideLayout | identity | inputs In_ShowLockScreen, In_IgnorePolicy, In_IgnoreLockScreen | In_ShowLockScreen goes to Block_PINUnlock In_ForceVisible | props inShowLockScreen, inIgnorePolicy, inIgnoreLockScreen; inShowLockScreen is accepted and not forwarded | `match` | app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx:25-32, 44; TST UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js:200<br>No caller passes In_ShowLockScreen True: the only DEV caller (PINRegister) passes False, and TST has no True value. |
| 073 | CommonUI_InsideLayout | identity | events Event_OnScreenLocked, Event_OnScreenUnlocked | declared and never raised | no event props | `match` | app/src/components/layout/CommonUiLayout/README.md:12-13; KB ui/app-shell.md |
| 074 | CommonUI_InsideLayout | identity | locals HideLockScreen, IsNavigateToHomeOnBack; lifecycle OnInitialize → ScreenEvent_OnInitialize | both set once per initialize | LockHost computes hidden; useViewState keeps IsNavigateToHomeOnBack per view | `match` | app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx:47-52; app/src/platform/navigation/LockHost.tsx:25<br>React computes hidden on each render, TST once per initialize. This report found no visible difference. |
| 075 | CommonUI_InsideLayout | ui | If False (top of the tree) | the True branch is empty and dead | not implemented | `n/a` | pack/blocks.md CommonUI_InsideLayout [DEAD BRANCH]; TST UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js:175<br>dead in the model |
| 076 | CommonUI_InsideLayout | ui | OfflineDataSyncEvents | the sync events block | OfflineDataSync | `match` | app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx:73; TST UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js:178 |
| 077 | CommonUI_InsideLayout | ui | If HideLockScreen or In_IgnoreLockScreen, else Block_PINUnlock(In_ForceVisible = In_ShowLockScreen, In_IsCommonBlock True), Unlock → OnPinUnlock_HideLockScreen | the lock overlay unless hidden | inIgnoreLockScreen leaves LockHost out; LockHost renders BlockPinUnlock inIsCommonBlock unless hidden | `match` | app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx:74; app/src/platform/navigation/LockHost.tsx:19-42; TST UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js:195-202 |
| 078 | CommonUI_InsideLayout | ui | If not In_IgnorePolicy and Client.App_Policies_HasPolicyToAccept → Policy_Checker | the policy checker when policies are pending | the same condition | `match` | app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx:53, 75; TST UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js:237-238 |
| 079 | CommonUI_InsideLayout | ui | Dialog_AccessRestrictedAction (UBTConnect_Utils) | the subscription dialog host | DialogAccessRestrictedAction | `match` | app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx:76; TST UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js:258 |
| 080 | CommonUI_InsideLayout | ui | HandleOnResumeOpenLink (Legacy_Share) | rendered | OpenLinkOnResume | `match` | app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx:77; TST UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js:275<br>The block is checked in the report of Legacy_Share. |
| 081 | CommonUI_InsideLayout | ui | HandleImageLoadError (Connect2_LegacyShared) | rendered | ImageLoadErrorHandler | `match` | app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx:78; TST UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js:292 |
| 082 | CommonUI_InsideLayout | ui | If IsNavigateToHomeOnBack → PreventBackNavigation (BackNavigationPrevented → OnBackNavigation_RedirectHome); else BackNavigationHandler Priority -10000 (BackNavigation → OnBackNavigation_MaybeRedirectHome) | one of two back handlers | the same two handlers; BACK_PRIORITY.commonUi = -10000 | `match` | app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx:79-83; app/src/platform/navigation/backQueue.ts:19; TST UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js:309-345 |
| 083 | CommonUI_InsideLayout | actions | ScreenEvent_OnInitialize | restored from cache: PIN_Check, HideLockScreen; fresh: IsNavigateToHomeOnBack = client variable, client variable = False, then PIN_Check | initial = not restored and the client variable; an effect clears the client variable when not restored; LockHost reads the PIN state | `match` | app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx:47-52; TST UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js:490-529 |
| 084 | CommonUI_InsideLayout | actions | OnBackNavigation_RedirectHome | HomeFeed, transition SlideFromLeft | navigate HomeFeed with SlideFromLeft | `match` | app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx:58-60; TST UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js:411-420 |
| 085 | CommonUI_InsideLayout | actions | OnBackNavigation_MaybeRedirectHome | initial location: PreventNavigation, then setTimeout(Action_RedirectHome, 0) | the same | `match` | app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx:65-69; TST UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js:548-610, 703 |
| 086 | CommonUI_InsideLayout | actions | Action_RedirectHome | HomeFeed, transition Default | navigate HomeFeed (Default) | `match` | app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx:62-64; TST UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js:446-460 |
| 087 | CommonUI_InsideLayout | actions | OnPinUnlock_HideLockScreen | empty action: the overlay hides itself; HideLockScreen stays | no handler; the unlock content hides itself | `match` | app/src/platform/navigation/LockHost.tsx:26; TST UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js:469 |
| 088 | CommonUI_InsideLayout | actions | unreachable end nodes | not connected | not implemented | `n/a` | pack/blocks.md CommonUI_InsideLayout<br>dead in the model |
| 089 | CommonUI_InsideLayout | logic | BR-UBTCON-310 | lock overlay unless anonymous, opted out, or PIN registration pending | hidden = not signed in, or ignored, or PIN_Use without a local PIN | `match` | app/src/platform/navigation/LockHost.tsx:25; app/src/platform/session/pin.ts:16-20 |
| 090 | CommonUI_InsideLayout | logic | BR-UBTCON-311 | policy checker when policies are pending, unless the screen opts out | the same | `match` | app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx:75 |
| 091 | CommonUI_InsideLayout | logic | BR-UBTCON-312 | one-shot Back to Home after the PIN registration, consumed on a fresh render | the same | `match` | app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx:48-52 |
| 092 | CommonUI_InsideLayout | logic | BR-UBTCON-313 | Back on the first history entry opens Home | the same | `match` | app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx:65-69 |

### 3.2 BottomBarMenu and BottomBarContent

React: `app/src/components/layout/BottomBar/BottomBar.tsx` and
`app/src/components/layout/BottomBarContent/BottomBarContent.tsx`. 39 screens embed the bar.

| Id | Block | Area | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|---|
| 093 | BottomBarMenu | identity | inputs ActiveItem, useMapsItems, isHouseholder, isRootPage; event BottomBar_Clicked(Item) | four inputs and one event | props activeItem, useMapsItems, isHouseholder, isRootPage, onBottomBarClicked | `match` | app/src/components/layout/BottomBar/BottomBar.tsx:27-37, 53-60 |
| 094 | BottomBarMenu | identity | locals LocalBottomBar_Items, Retried; lifecycle OnInitialize, OnReady, OnParametersChanged | the item list and the householder retry flag | items from bottomBar_GetList, a retried ref, two effects | `match` | app/src/components/layout/BottomBar/BottomBar.tsx:64, 70-97 |
| 095 | BottomBarContent | ui | BottomBarContent: container bottom-bar-wrapper with Placeholder_BottomBarItems | the bar container | div bottom-bar-wrapper, then div bottom-bar ph around the items | `match` | app/src/components/layout/BottomBarContent/BottomBarContent.tsx:13-21; migration/app-shell.spec.md §4<br>The inner bottom-bar div is the OSUI BottomBar markup of the capture. |
| 096 | BottomBarMenu | ui | list source LocalBottomBar_Items (list list-group); link class If(ActiveItem = Id, "active", ""), onclick Event_BottomBar_Clicked | one link per item | div list list-group; OSLink with class active; onClick | `match` | app/src/components/layout/BottomBar/BottomBar.tsx:126-136; TST UBTConnect.App_Common.BottomBarMenu.mvc.js:241 |
| 097 | BottomBarMenu | ui | If Id = Updates → App_IconBadge(BadgeNumber = Client.Directory_Updates_UnreadCount, IconColor and IconId by active item, isLoading False, MaxNotifications 9), OnClick → Event_BottomBar_Clicked | the badge of the Updates tab | BottomBarIconBadge with the same arguments and onOnClick | `match` | app/src/components/layout/BottomBar/BottomBar.tsx:139-147; TST UBTConnect.App_Common.BottomBarMenu.mvc.js:276-278<br>The internals of App_IconBadge (BR-UBTCON-319) are checked in the report of _shared. |
| 098 | BottomBarMenu | ui | else Icon(In_ColorId and In_IconId by active item, In_SizeId Base_24) | the tab icon | Icon with the same arguments | `match` | app/src/components/layout/BottomBar/BottomBar.tsx:149; TST UBTConnect.App_Common.BottomBarMenu.mvc.js:354 |
| 099 | BottomBarMenu | ui | CustomText(Label, Color by active item, FontSize ExtraSmall) | the tab label | CustomText with the same options | `match` | app/src/components/layout/BottomBar/BottomBar.tsx:152-156; TST UBTConnect.App_Common.BottomBarMenu.mvc.js:381 |
| 100 | BottomBarMenu | ui | useMapsItems True: the maps items | Explore, Bookmarked and, for a householder, Settings | a NotCaptured placeholder | `n/a` | app/src/components/layout/BottomBar/BottomBar.tsx:123-125; migration/board.md Map (skip, V4a, skip:variant, user 2026-10-14)<br>Only Map passes useMapsItems True (pack/screens.md of Map). |
| 101 | BottomBarMenu | actions | Event_BottomBar_Clicked: the active item on a root page → ScrollTop | ".layout .content" for Bookmarks, else ".active-screen", behaviour instant | the same | `match` | app/src/components/layout/BottomBar/BottomBar.tsx:101-102; TST UBTConnect.App_Common.BottomBarMenu.mvc.js:588-597 |
| 102 | BottomBarMenu | actions | Event_BottomBar_Clicked: Home, Directory, Updates, Menu, otherwise | HomeFeed; CountryList when GetHasC1DirectoryView, else Locality_Details; Updates_SingleList; Menu; otherwise the event BottomBar_Clicked | the same destinations and the event | `match` | app/src/components/layout/BottomBar/BottomBar.tsx:103-117; TST UBTConnect.App_Common.BottomBarMenu.mvc.js:604-627, 672-676 |
| 103 | BottomBarMenu | actions | Event_BottomBar_Clicked: Bookmarks | DEV: Bookmarks. TST: Connect_LaunchDarkly_PermissionCheck(mobileDirectoryBookmarkNote) and GetHasNewBookmarks pick Bookmarks, New_MyBookmarks or MyBookmarks | getHasNewBookmarks ? Bookmarks : (LD flag ? New_MyBookmarks : MyBookmarks) | `match` | app/src/components/layout/BottomBar/BottomBar.tsx:109-112; TST UBTConnect.App_Common.BottomBarMenu.mvc.js:631-662<br>React follows TST (§6.1). The KB outcome "Notes" disagrees with TST (K3). |
| 104 | BottomBarMenu | actions | OnInitialize: BottomBar_GetList(isHouseholder, useMapsItems) | the item list | bottomBar_GetList(): the main list Home 1, Directory 2, Updates 3, Bookmarks 5, Menu 5 | `match` | app/src/lib/ubtConnectUtils/actions.ts:52-70; TST UBTConnect.App_Common.BottomBarMenu.mvc.js:444-460; BR-C2UTL-175; BR-C2UTL-176<br>isHouseholder changes only the maps list (BR-C2UTL-176). |
| 105 | BottomBarMenu | actions | OnReady: Directory_Updates_RefreshBottomBarCount(False), then SetBottomBarActiveElement(-1) | refreshes the badge count when it is old | the refresh once per instance; SetBottomBarActiveElement(-1) changes nothing | `match` | app/src/components/layout/BottomBar/BottomBar.tsx:66-77; TST UBTConnect.App_Common.BottomBarMenu.mvc.js:474-490 |
| 106 | BottomBarMenu | actions | OnParametersChanged | householder and not Retried: Retried, OnInitialize, the delayed refresh JS; else BottomBarSlider_ForceRefresh, and the delayed JS only with useMapsItems | the same branches; the retry does not fetch the list again, because the main list does not depend on isHouseholder | `match` | app/src/components/layout/BottomBar/BottomBar.tsx:79-97; TST UBTConnect.App_Common.BottomBarMenu.mvc.js:510-560<br>The householder branch runs only from Map (board skip). |
| 107 | BottomBarMenu | actions | unreachable end nodes | not connected | not implemented | `n/a` | pack/blocks.md BottomBarMenu<br>dead in the model |
| 108 | BottomBarMenu | logic | BR-UBTCON-314 | the active root tab scrolls to the top | the same | `match` | app/src/components/layout/BottomBar/BottomBar.tsx:101-102 |
| 109 | BottomBarMenu | logic | BR-UBTCON-315 | each main tab opens its screen; other items go back to the embedding screen | the same | `match` | app/src/components/layout/BottomBar/BottomBar.tsx:103-117 |
| 110 | BottomBarMenu | logic | BR-UBTCON-316 | the Bookmarks tab picks its screen from two flags | the TST destinations | `match` | app/src/components/layout/BottomBar/BottomBar.tsx:109-112<br>KB disagreement K3. |
| 111 | BottomBarMenu | logic | BR-UBTCON-317 | a householder list is fetched again on the first parameter change | the same branch | `match` | app/src/components/layout/BottomBar/BottomBar.tsx:88-96 |
| 112 | BottomBarMenu | logic | BR-UBTCON-318 | only Updates carries a badge, capped at 9 | the same | `match` | app/src/components/layout/BottomBar/BottomBar.tsx:139-147 |
| 113 | BottomBarMenu | logic | client variables Directory_Updates_UnreadCount, _LastCheck, _CheckFrequency_Minut (default 5) | the badge count and its refresh period | the same names; default 5 | `match` | app/src/platform/session/clientVars.ts:25; app/src/components/layout/BottomBar/BottomBar.tsx:62; app/src/lib/ubtConnect/actions.ts:65-71 |

### 3.3 LayoutBlank

React: `app/src/components/layout/BlankLayout/BlankLayout.tsx`. Splash and ViewEventList use it.

| Id | Block | Area | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|---|
| 114 | LayoutBlank | identity | inputs ExtendedClass, EnableAccessibilityFeatures | two inputs | props extendedClass, enableAccessibilityFeatures | `match` | app/src/components/layout/BlankLayout/BlankLayout.tsx:6-15, 24-29 |
| 115 | LayoutBlank | identity | events OnSyncComplete, OnSyncError, OnSyncStart and the three ActionHandler_OnSync…Trigger actions | re-raise the events of OfflineDataSyncEvents | no event props; the events are not raised | `differs` | app/src/components/layout/BlankLayout/BlankLayout.tsx:17-19; migration/app-shell.spec.md:233<br>Splash and ViewEventList attach no handler to these events. |
| 116 | LayoutBlank | ui | LayoutRuntime_Top (NavigationHandler) | the back-navigation runtime of the layout | LayoutRuntimeTop | `match` | app/src/components/layout/BlankLayout/BlankLayout.tsx:37 |
| 117 | LayoutBlank | ui | container "layout layout-native blank" + ExtendedClass + has-accessible-features | the layout classes | the same expression | `match` | app/src/components/layout/BlankLayout/BlankLayout.tsx:30-34; TST UBTConnect.App_Common.LayoutBlank.mvc.js:176 |
| 118 | LayoutBlank | ui | container content > placeholder Content (style main-content) | the content area | div content > div main-content | `match` | app/src/components/layout/BlankLayout/BlankLayout.tsx:39-43; TST UBTConnect.App_Common.LayoutBlank.mvc.js:189-205<br>The pack does not show the style of a placeholder; TST gives main-content. |
| 119 | LayoutBlank | ui | container offline-data-sync > OfflineDataSyncEvents | the sync events block | the same container and OfflineDataSync | `match` | app/src/components/layout/BlankLayout/BlankLayout.tsx:44-46 |
| 120 | LayoutBlank | actions | OnReady: LayoutReady, SetLang, AddFavicon("favicon.png"); OnDestroy: LayoutDestroy | the OSUI layout helpers | not ported; the favicon link is static in index.html | `differs` | app/src/components/layout/BlankLayout/BlankLayout.tsx:17-20; migration/knowledge/auto-decisions-2026-10-16.md:115 |
| 121 | LayoutBlank | actions | unreachable end nodes | not connected | not implemented | `n/a` | pack/blocks.md LayoutBlank<br>dead in the model |

### 3.4 OfflineDataSyncEvents

React: `app/src/platform/device/OfflineDataSync/OfflineDataSync.tsx`. The app shell spec (§9, line 233) builds the
offline sync as a no-op: the original sync action is empty (BR-UBTCON-520). No built screen listens to the sync
events, so the user sees no difference.

| Id | Block | Area | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|---|
| 122 | OfflineDataSyncEvents | ui | If False (top of the tree) | the True branch is empty and dead | not implemented | `n/a` | pack/blocks.md OfflineDataSyncEvents [DEAD BRANCH]<br>dead in the model |
| 123 | OfflineDataSyncEvents | ui | OfflineDataSyncCore (OutSystemsUI) with OnSync, OnSyncStart, OnSyncComplete, OnConfigure, OnSyncError | drives the OSUI sync engine | OfflineDataSyncCore renders; no handler | `differs` | app/src/platform/device/OfflineDataSync/OfflineDataSync.tsx:17-28; app/src/platform/device/OfflineDataSync/README.md; migration/app-shell.spec.md:233 |
| 124 | OfflineDataSyncEvents | actions | OnConfigure: OfflineDataSyncConfiguration → ConfigureOfflineDataSync | sync on online, login and resume; no retry; 30 s (BR-UBTCON-521) | not ported | `differs` | migration/app-shell.spec.md:233 |
| 125 | OfflineDataSyncEvents | actions | OnSync: OfflineDataSync (empty), then EndOfflineDataSync: success, retryable error, or non-retryable security error | ends each run (BR-UBTCON-520, BR-UBTCON-340) | not ported | `differs` | migration/app-shell.spec.md:233 |
| 126 | OfflineDataSyncEvents | actions | ActionHandler_OnSyncStart / Complete / Error Trigger | re-raise the three events | the props exist; no event is raised | `differs` | app/src/platform/device/OfflineDataSync/OfflineDataSync.tsx:9-15; migration/app-shell.spec.md:233 |
| 127 | OfflineDataSyncEvents | actions | unreachable end nodes | not connected | not implemented | `n/a` | pack/blocks.md OfflineDataSyncEvents<br>dead in the model |

### 3.5 Unsupported version blocks

React: `app/src/components/version/`. Decision U16 builds the Browser card as a mock scenario only
(`?mock=unsupported-browser`). The Native and WebView cards need a store app (ADR-1: web and PWA only).

| Id | Block | Area | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|---|
| 128 | UnsupportedVersion_Wrapper | identity | locals In_IsUnsupportedWebViewVersion, In_IsUnsupportedAppVersion, In_IsUnsupportedBrowserVersion; OnInitialize → Get_IsUnsupportedVersion | reads the three flags once | useState(get_IsUnsupportedVersion) | `match` | app/src/components/version/UnsupportedVersionWrapper/UnsupportedVersionWrapper.tsx:24-28 |
| 129 | UnsupportedVersion_Wrapper | ui | If App or Browser unsupported → CustomContainer (PaddingSize vertical ExtraLarge) and PreventBackNavigation | the card and the blocked Back | the same | `match` | app/src/components/version/UnsupportedVersionWrapper/UnsupportedVersionWrapper.tsx:31-37 |
| 130 | UnsupportedVersion_Wrapper | ui | inner If: App → UnsupportedVersion_Native; else WebView → UnsupportedVersion_WebView; else UnsupportedVersion_Browser | chooses the card (BR-UBTCON-337) | Variant with the same order | `match` | app/src/components/version/UnsupportedVersionWrapper/UnsupportedVersionWrapper.tsx:18-22 |
| 131 | UnsupportedVersion | identity | inputs In_ExtendedClass, In_HideButton; event Event_NavigateToPlaystore | two inputs and one event | props inExtendedClass, inHideButton, onEventNavigateToPlaystore | `match` | app/src/components/version/UnsupportedVersion/UnsupportedVersion.tsx:11-31 |
| 132 | UnsupportedVersion | ui | CustomContainer "unsupported-card " + class; WelcomeToConnect; message container (Medium vertical margin, Neutral10, Small); unless In_HideButton: Button "Upgrade From Google Play" (OpenNew, icon on the right) → event | the card | the same tree and options | `match` | app/src/components/version/UnsupportedVersion/UnsupportedVersion.tsx:34-57; TST UBTConnect.App_Common.UnsupportedVersion.mvc.js |
| 133 | UnsupportedVersion_Browser | ui | UnsupportedVersion(In_ExtendedClass "unsupported-card--webview", In_HideButton True) with the browser message | the browser card | the same arguments and message | `match` | app/src/components/version/UnsupportedVersionBrowser/UnsupportedVersionBrowser.tsx:12-27; TST UBTConnect.App_Common.UnsupportedVersion_Browser.mvc.js:127-148<br>Decision U16: a mock scenario only (?mock=unsupported-browser). |
| 134 | UnsupportedVersion_Native | ui | UnsupportedVersion("unsupported-card--native", In_HideButton = AppManager_GetPackageName() = ""), message, Event → Upgrade_UBTConnect | the store-app card | a NotCaptured placeholder | `differs` | app/src/components/version/UnsupportedVersionNative/UnsupportedVersionNative.tsx:11-17; migration/app-shell.spec.md U16; app/docs/reference/stack.md ADR-1 |
| 135 | UnsupportedVersion_WebView | ui | UnsupportedVersion("unsupported-card--webview"), message, Event → Upgrade_WebView | the Android WebView card | a NotCaptured placeholder | `differs` | app/src/components/version/UnsupportedVersionWebView/UnsupportedVersionWebView.tsx:11-17; migration/app-shell.spec.md U16; app/docs/reference/stack.md ADR-1 |
| 136 | UnsupportedVersion | strings | "Upgrade From Google Play" and the browser message | two texts | the same texts, with \r\n for NewLine() | `match` | app/src/components/version/UnsupportedVersion/UnsupportedVersion.tsx:51; app/src/components/version/UnsupportedVersionBrowser/UnsupportedVersionBrowser.tsx:12-16 |
| 137 | UnsupportedVersion | strings | the native and WebView messages (3 sentences) | two cards | not rendered | `differs` | migration/app-shell.spec.md U16<br>The cards are placeholders by decision U16. |

### 3.6 Version, Version_LoginWrapper, WelcomeToConnect, AppLogo_White

| Id | Block | Area | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|---|
| 138 | Version | identity | local Version; OnReady → ScreenEvent_OnReady | the version text, built on ready | useState(''), one mount effect | `match` | app/src/components/version/AppVersion/AppVersion.tsx:24-38 |
| 139 | Version | ui | CustomText(In_Text = Version, Color Inherit) | the version text | CustomText with Color Inherit | `match` | app/src/components/version/AppVersion/AppVersion.tsx:41 |
| 140 | Version | actions | ScreenEvent_OnReady: "App version", then the environment in upper case, the native version, "(runtime)", each when set | BR-UBTCON-336 | the same steps | `match` | app/src/components/version/AppVersion/AppVersion.tsx:28-33; TST UBTConnect.App_Common.Version.mvc.js:209-226 |
| 141 | Version | logic | Get_ConnectVersionDetails (UBTConnect_Utils) | runtime version, environment, native version | runtime version from Get_RuntimeVersion, environment from SynchAppContext (CR-Login-4), native version "" (no plugin on the web); one request per mount (CR-Login-3) | `match` | app/src/lib/ubtConnectUtils/actions.ts:35-39; app/src/components/version/AppVersion/AppVersion.tsx:18-22 |
| 142 | Version | data | server action Get_RuntimeVersion (UBTConnect_Utils) | the runtime version | callAction ActionGet_RuntimeVersion; recorded mock handler | `mock-only` | app/src/lib/ubtConnectUtils/actions.ts:36; app/src/platform/bootstrap/mocks.ts:221<br>Production needs the server action Get_RuntimeVersion. |
| 143 | Version_LoginWrapper | ui | CustomContainer (MarginSize Top Base; TextOptions Neutral10, DoubleExtraSmall) around Version | the version under the login card | LoginVersion with the same options | `match` | app/src/pages/Login/components/LoginVersion.tsx:14-24 |
| 144 | WelcomeToConnect | ui | container width auto; CustomContainer (Bottom Base; Primary, Base, SemiBold) "Welcome to"; image ConnectLogo login-screen__connect-logo | the welcome text and the logo | the same tree and options | `match` | app/src/components/auth/WelcomeToConnect/WelcomeToConnect.tsx:14-31 |
| 145 | AppLogo_White | ui | image ConnectLogoWhite, width 155px (HomeFeed) | the white logo | img ConnectLogoWhite, width 155px | `match` | app/src/pages/HomeFeed/components/AppLogo_White.tsx:7-12 |
| 146 | WelcomeToConnect | strings | "Welcome to", "App version" | two texts | the same texts | `match` | app/src/components/auth/WelcomeToConnect/WelcomeToConnect.tsx:24; app/src/components/version/AppVersion/AppVersion.tsx:29 |

### 3.7 Own blocks that no built screen uses

| Id | Block | Area | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|---|
| 147 | Layout | ui | block Layout (side-menu layout) | used only by InvalidPermissions | not built | `n/a` | migration/board.md:66 (InvalidPermissions skip); migration/app-shell.spec.md §2 "Not built: App_Common.Layout"<br>board decision skip |
| 148 | MenuIcon | ui | block MenuIcon (BR-UBTCON-339) | used only by InvalidPermissions and Layout | not built | `n/a` | migration/board.md:66 (InvalidPermissions skip)<br>board decision skip |
| 149 | ApplicationTitle | ui | block ApplicationTitle and the external site RedirectToURL | used by nothing in the module | not built | `n/a` | pack/blocks.md ApplicationTitle (used by: nothing); KB ui/app-shell.md<br>dead in the model |
| 150 | SVGBackground_LoginWrapper | ui | block SVGBackground_LoginWrapper | used by nothing in the module | not built | `n/a` | pack/blocks.md SVGBackground_LoginWrapper (used by: nothing)<br>dead in the model |
| 151 | UserInfo | ui | block UserInfo, data action GetUserNameFromServer (User_GetName), BR-UBTCON-338 | used by nothing in the module | not built | `n/a` | pack/blocks.md UserInfo (used by: nothing)<br>dead in the model |
| 152 | Layout | strings | "Skip to Content (Press Enter)", "Toggle the Menu", "Back to previous screen" | texts of Layout and MenuIcon | not built | `n/a` | migration/board.md:66 (InvalidPermissions skip)<br>board decision skip |

### 3.8 Blocks of other flows

- Block_PINUnlock and Block_PINUnlock_ContentWrapper (App_PIN, `../App_PIN/pack/blocks.md`): CommonUI_InsideLayout
  renders the lock through LockHost (row 077, `match`). The report of App_PIN checks the blocks.
- Policy_Checker (App_Policies): CommonUI_InsideLayout renders it under the condition of row 078 (`match`). The report
  of App_Policies checks the block.
- HandleOnResumeOpenLink (Legacy_Share): Splash and CommonUI_InsideLayout render it (rows 056 and 080, `match`). The
  report of Legacy_Share checks the block.
- Dialog_ExitConfirmation (App_Common_Blocks_PopupDialogs, `../_shared/pack/blocks.md`): Login renders it (row 016,
  `match`). The report of _shared checks the block.
- App_IconBadge (App_Common_Blocks, `../_shared/pack/blocks.md`): the Updates tab passes the arguments of row 097
  (`match`). The report of _shared checks the block.

## 4. Shared blocks and actions

The flow-level rows have the screen `-` in `checklist.json`. They cover the own client actions, the server and
service actions, the flow exception handler, and the shared and referenced actions of the flow. The pack has no
element for the flow exception handler. Rows 166 to 170 come from the TST flow controller, which the other
UI flows call (`migration/knowledge/shell-facts.md` U10).

| Id | Block | Area | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|---|
| 153 | - | logic | Connect_Logout (own action) | Cache_InvalidateEverything, then AppManager_Logout (BR-UBTCON-208) | connectLogout: clearMemoryCache, clearAllLocalEntities (ADR-10), then the AppManager_Logout steps | `differs` | app/src/platform/session/auth.ts:60-96; app/docs/reference/stack.md ADR-10; TST UBTConnect.controller.js:1063-1066 |
| 154 | - | logic | Connect_SetLoggedContext (own action) | signed in only: Sync_UserInfo_TriggerCache; from login Sync_Info_Main replaces the lists; SynchBookmarks, SynchBookmarksC2, SyncNotes, SynchronizeNumberUnreadMessages; the three IsSynched flags and Notifications_LastChecked | connectSetLoggedContext with the same steps and flags | `match` | app/src/platform/bootstrap/postLogin.ts:25-48; TST UBTConnect.controller.js:1108-1165; BR-UBTCON-200; BR-UBTCON-201; BR-UBTCON-202 |
| 155 | - | logic | Sync_UserInfo_TriggerCache (own action) | GetUserInformation_Wrapper; errors logged and ignored (BR-UBTCON-207) | try / catch with log.warn | `match` | app/src/platform/bootstrap/postLogin.ts:32-38 |
| 156 | - | logic | Sync_Info_Main (own action) | Sync_Info_GetMain(isFromLogin); not from login: SyncAllOrbitStaticEntities; then the lists, Embedd_B2CTenant, Sync_SetSiteProperties; AllExceptions → End (BR-UBTCON-203, BR-UBTCON-204) | syncInfoMain with the same steps; any error gives the empty lists | `match` | app/src/platform/bootstrap/startup.ts:75-86; TST UBTConnect.controller.js:16579-16618<br>MyEntertainingBaseURL and FeedBaseURL are not returned: no reader in this flow. React also catches system exceptions. |
| 157 | - | logic | Sync_SetSiteProperties (own action) | Directory_Updates_MonthsToShow = UpdatesFeed_MonthsToShow (BR-UBTCON-529) | setClientVar Directory_Updates_MonthsToShow | `match` | app/src/platform/bootstrap/startup.ts:80; TST UBTConnect.controller.js:16611 |
| 158 | - | logic | TriggerOfflineDataSync (own action) | StartOfflineDataSync(SyncUnit, DiscardPendingSyncUnits) | no call | `differs` | app/src/platform/bootstrap/postLogin.ts:50-55; migration/app-shell.spec.md:233; BR-UBTCON-520 |
| 159 | - | logic | Set_InitialClientVariables (own action) | PhotobookCarousel_SelectedSpeed = EightSeconds (8000) (BR-UBTCON-528) | the same value | `match` | app/src/lib/ubtConnect/actions.ts:53-55; CR-Splash-2 |
| 160 | - | logic | GetColdStartLinkURL (own action) and GetURLFromEventDataURL | Android App Links data, else the cold-start URL of the deeplinks plugin, rewritten for ConnectShare (BR-UBTCON-229, BR-UBTCON-515) | returns "" | `differs` | app/src/platform/session/resume.ts:12-17; migration/app-shell.spec.md U14; CR-Splash-2 |
| 161 | - | logic | ShowCommunicationExceptionMessage (own action) | TST: App_NetworkStatus_IsOnline_IsPersistent → info "Service Interruption"; else error "No internet connection…" (BR-UBTCON-213) | the same test and toasts | `match` | app/src/platform/feedback/exceptionMessages.ts:17-23; TST UBTConnect.controller.js:16110-16118<br>DEV also tests navigator.onLine (§6.1). |
| 162 | - | logic | ShowExceptionMessage (own action) | 15 text tests in order, the toast (500 ms for three branches, debounce on), then for ForceLogout Connect_Logout and JSUtils_PageRedirect("\UBTConnect\Login") | RULES in the same order, the same toast arguments, signedOutRemotely, then pageRedirect | `match` | app/src/platform/feedback/exceptionMessages.ts:42-126; TST UBTConnect.controller.js:16141-16470; BR-UBTCON-210 to BR-UBTCON-222 |
| 163 | - | data | Sync_Info_GetMain (own server action) | the tenant, the site properties, the Orbit static entities and the local entities | fetchSyncInfoMain; contract mock handler with fictional data | `mock-only` | app/src/api/app/repository.ts:33-37; app/src/platform/bootstrap/mocks.ts:163-174<br>Production needs the UBTConnect server action Sync_Info_GetMain. |
| 164 | - | data | Get_UI_UpdateItems_UnreadCount_All (service action, Connect_Updates_CS) | the unread count of the Updates tab | fetchUnreadUpdateItemsCount; recorded mock handler | `mock-only` | app/src/api/update/repository.ts:70-74; app/src/platform/bootstrap/mocks.ts:222<br>Production needs the service action. pack/app.md says "no mock handler found", but the handler exists. |
| 165 | - | data | User_GetName (server action, Users) | the user name of the UserInfo block | not called | `n/a` | pack/blocks.md UserInfo (used by: nothing)<br>dead in the model |
| 166 | - | logic | App_Common OnException: BubbleCommunicationException → ShowCommunicationExceptionMessage | the first branch of the flow handler | no such branch: the error falls to ShowExceptionMessage(message, False) | `missing` | app/src/legacy/os/exceptions.ts:69-84; app/src/platform/feedback/bubbleErrors.ts:25-27; TST migration/shell/sources/UBTConnect.App_Common.controller.js:31-39; migration/knowledge/shell-facts.md U10<br>A non-ok answer gives "Request failed with status N". No rule of ShowExceptionMessage matches it, so React shows the raw text as an error.<br>**F1** (major) |
| 167 | - | logic | App_Common OnException: CommunicationException → ShowCommunicationExceptionMessage | the communication toast | the same | `match` | app/src/legacy/os/exceptions.ts:70-73; TST migration/shell/sources/UBTConnect.App_Common.controller.js:46-54 |
| 168 | - | logic | App_Common OnException: SecurityException, signed in → ShowExceptionMessage(message, True) | toast, Connect_Logout, Login page load | the same | `match` | app/src/legacy/os/exceptions.ts:74-77; TST migration/shell/sources/UBTConnect.App_Common.controller.js:61-71 |
| 169 | - | logic | App_Common OnException: SecurityException, no user → AppManager_SetAppCallback_CurrentLocation, Login(In_IsFromInvalidPermissions True), Default | the signed-out gate | the same; the route guard does the same for a member route | `match` | app/src/legacy/os/exceptions.ts:79-81; app/src/app/RouteGuard.tsx:46-52; TST migration/shell/sources/UBTConnect.App_Common.controller.js:79-82; migration/app-shell.spec.md U1 |
| 170 | - | logic | App_Common OnException: AllExceptions (not system) → ShowExceptionMessage(message, False); a system exception → the runtime handler | two outcomes | every other error, system exceptions too, goes to showExceptionMessage | `partial` | app/src/legacy/os/exceptions.ts:83; TST migration/shell/sources/UBTConnect.App_Common.controller.js:91-107<br>The visible effect of the runtime handler is not in local code.<br>**F5** (info) |
| 171 | - | logic | Get_IsUnsupportedSystem (shared) | app or browser version unsupported (BR-UBTCON-232) | the same | `match` | app/src/lib/ubtConnect/unsupportedVersion.ts:29-34; TST UBTConnect.controller.js:4533-4538 |
| 172 | - | logic | Get_IsUnsupportedVersion and Try_GetIsSupportedVersion (shared) | flags from AppManager_GetIsSupportedNativeVersion and AppManager_GetIsSupportedWebviewVersion (BR-UBTCON-231, BR-UBTCON-233) | constants False; Browser True only with ?mock=unsupported-browser in a mock build | `differs` | app/src/lib/ubtConnect/unsupportedVersion.ts:14-27; migration/app-shell.spec.md U2; migration/app-shell.spec.md U16<br>TST has no minimum versions (U2), so the result is the same on TST.<br>**F6** (info) |
| 173 | - | logic | SetResumeLoginLink (shared) | window.applinks.resumeLoginLink = URL (BR-UBTCON-527) | a module variable that GetResumeLoginLink reads and clears | `match` | app/src/platform/session/resume.ts:5-10<br>The App_PIN report (row 128) checks the reader. |
| 174 | - | logic | ScrollTop (shared) | scroll the container to the top; log a missing container | the same | `match` | app/src/lib/ubtConnect/actions.ts:74-81 |
| 175 | - | logic | Directory_Updates_RefreshBottomBarCount (shared) | refetch when CheckFrequency minutes passed or forced (BR-UBTCON-171) | the same | `match` | app/src/lib/ubtConnect/actions.ts:65-71 |
| 176 | - | logic | GetUserInformation_Wrapper_Assign (shared) | App_Policies_HasPolicyToAccept = HasPoliciesToAccept (BR-UBTCON-530) | the same | `match` | app/src/lib/ubtConnect/actions.ts:116-118 |
| 177 | - | logic | OfflineDataSync and OfflineDataSyncConfiguration (shared) | an empty sync action; the sync configuration (BR-UBTCON-520, BR-UBTCON-521) | not ported | `differs` | migration/app-shell.spec.md:233 |
| 178 | - | logic | Upgrade_UBTConnect, Upgrade_WebView, OpenGooglePlay_UBTConnect, OpenGooglePlay_WebView, OpenGooglePlay_Chrome, ExitApplicationForWebViewUpdate (shared) | store links and the app exit of the store app (BR-UBTCON-234, BR-UBTCON-506, BR-UBTCON-524 to BR-UBTCON-526) | not ported | `n/a` | app/docs/reference/stack.md ADR-1; migration/app-shell.spec.md U16<br>decision: web only, no store app |
| 179 | - | logic | PIN_Check (UBT_AppManager) | NeedRegister and NeedUnlock from PIN_Use and the local PIN | pinCheck | `match` | app/src/platform/session/pin.ts:15-20<br>The App_PIN report checks the PIN blocks. |
| 180 | - | logic | AppManager_SetAppCallback (UBT_AppManager) | OutSystems_LastURL = the given URL | setAppCallback | `match` | app/src/platform/session/resume.ts:26-29 |
| 181 | - | logic | AllowUpcomingNavigation, ReplaceOnUpcomingNavigation, ScreenController_NavigateToPage, FeedbackMessage_AutoClose | navigation gate, history replace, URL navigation, toast | the ports of the shell | `match` | migration/clarify/flows/App_PIN/report.md rows 129-131<br>Checked in the report of App_PIN; this flow passes the arguments of the rows above. |
| 182 | - | strings | the texts of ShowExceptionMessage and ShowCommunicationExceptionMessage (24) | condition texts, titles and messages | the same texts, with \r\n and <br> as compiled | `match` | app/src/platform/feedback/exceptionMessages.ts:10-98; TST UBTConnect.controller.js:16113-16118, 16203-16335 |

Not checked here:

- The internals of the referenced blocks of other modules: Layout_LoginFlow, Tile, CustomContainer, CustomText, Icon,
  ButtonLoading, BottomBarItem, LoadingDots, SVG_Background_Custom, LayoutRuntime_Top, NavigationHandler,
  BackNavigationHandler, PreventBackNavigation, ActionConfirmationDialog, AppManager_Events, OfflineDataSyncCore,
  Dialog_AccessRestrictedAction, HandleImageLoadError and the Button of UBTConnect_Utils. The rows above check the
  arguments that the flow passes. Rows 053 and 054 check the TST code of ApplicationLoadEvents.
- GetUserInformation_Wrapper (App_Cache) and the internals of the user-info cache: the report of _shared checks them.
  This flow depends only on GetUserInformation_Wrapper_Assign (row 176).
- The PIN strings of `pack/strings.md` ("Enter your PIN code" and 8 more) belong to Block_PINUnlock_ContentWrapper. The
  report of App_PIN checks them.

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix | Status |
|---|---|---|---|---|---|---|
| F1 | major | App_Common flow OnException / BubbleCommunicationException | TST tests `UBTConnect.BubbleCommunicationException` first and shows the communication toast (flow controller :31-39). `raiseToFlowHandler` has no such branch, so the error goes to `showExceptionMessage(message, false)`. For a non-ok answer the message is "Request failed with status N", and no rule of ShowExceptionMessage matches it. React shows the raw text as an error toast; TST shows "Service Interruption" (or "No internet connection…" offline). The screens that bubble errors: CountryList, Profile, Search, Services and EntityDetailsActions. Rows: 166. | `app/src/legacy/os/exceptions.ts:69-84`; `app/src/platform/feedback/bubbleErrors.ts:25-27` | Add the branch `isUserException(error, 'UBTConnect.BubbleCommunicationException')` → `showCommunicationExceptionMessage()` before the CommunicationException test, with a test in `legacy/os/exceptions.test.tsx`. | |
| F2 | minor | Login / "Forgot Password?" (Login, isResetPassword True) | TST sets IsResettingPassword (spinner, Login button disabled) and starts the reset-password policy of the identity provider. A completed reset ends with a success toast (IdP_OnResetPassword). React runs the built-in validation only: the click changes nothing on the screen. U4 covers "Login with UBT One" only, and no other record names this behaviour. Rows: 025, 031, 040. | `app/src/pages/Login/hooks/useLogin.ts:24-26, 97-99` | Q1. | no fix: decision App_Common Q2 (a): keep Forgot Password without an action |
| F3 | minor | Login / OnReady, device awareness | React compares CallbackType with `'AppManager_JSUtils_CustomEvents.DeviceAwareness_InvalidDevice'`. The TST value is "DeviceAwareness_InvalidDevice" (`migration/knowledge/static-entities-tst.json:2643`), so `Login?CallbackType=DeviceAwareness_InvalidDevice` still runs DelayedMessage_Show. AppManager_HandleDeviceAwarenessPopUp is not built, so nothing opens ConfirmationDialog_ResetPassword. Rows: 033, 043. | `app/src/pages/Login/hooks/useLogin.ts:10-12, 82-87` | Use the TST value now, with the knowledge file as its source. For the dialog: Q3. | fixed 2026-10-27 (`fixes/A-shell.md`): the CallbackType constant; the dialog waits by decision Q3 (a) |
| F4 | info | Login / OnInitialize, In_IsFromResetPIN | TST runs Login(False), the identity provider login, then AppManager_Logout (BR-UBTCON-302). React runs `signOut` first, then the mock sign-in. `signOut` is Connect_Logout: it also runs Cache_InvalidateEverything and the ADR-10 clear. In both apps the user reaches PINRegister after the sign-in. Rows: 024, 039. | `app/src/pages/Login/hooks/useLogin.ts:44-49, 79`; `app/src/platform/session/auth.ts:67-96` | Q2 (the cache part is the same question as App_PIN Q1). | |
| F5 | info | App_Common flow OnException / AllExceptions | TST calls ShowExceptionMessage only for a non-system exception, and re-throws a system exception to the runtime handler (flow controller :91-107). React sends every other error to `showExceptionMessage`. The runtime handler is not in local code, so its visible effect is not known. Rows: 170. | `app/src/legacy/os/exceptions.ts:83` | Port the runtime default of `OS.ErrorHandling.handleError` (`migration/runtime-sources/OutSystems.js`), or record the toast as a decision. | |
| F6 | info | Get_IsUnsupportedVersion (shared) | React returns constants: Browser is True only in the mock scenario of U16. The shell stores the minimum versions of SynchAppContext (`app.minNativeVersion`, `app.minWebViewChrome`, `app.minWebViewSafari`), but no code reads them. TST has no minimum versions (U2), so the result is the same today. Rows: 172. | `app/src/lib/ubtConnect/unsupportedVersion.ts:21-27`; `app/src/platform/bootstrap/startup.ts:53-55` | When production needs version gates, port AppManager_GetIsSupportedNativeVersion and AppManager_GetIsSupportedWebviewVersion with these settings. | |

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

On the other checked items, the DEV pack and the TST compiled code agree. The check covered Login, Splash,
CommonUI_InsideLayout, LayoutBlank, Version, the unsupported-version blocks and the own client actions.

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| BottomBarMenu / Event_BottomBar_Clicked, Bookmarks item | navigate to Bookmarks, no flag check | Connect_LaunchDarkly_PermissionCheck(mobileDirectoryBookmarkNote) and GetHasNewBookmarks choose Bookmarks, New_MyBookmarks or MyBookmarks | TST | `UBTConnect.App_Common.BottomBarMenu.mvc.js:631-662`; `app/src/components/layout/BottomBar/BottomBar.tsx:109-112` |
| ShowCommunicationExceptionMessage | App_NetworkStatus_IsOnline_IsPersistent and a JavaScript node `navigator.onLine` ("Live check at the moment of the error") | the client variable only | TST | `UBTConnect.controller.js:16110` (`tst_source.py show UBTConnect.controller.js`); `app/src/platform/feedback/exceptionMessages.ts:18` |

### 6.2 KB pages vs TST (for the KB owner)

The KB pages come from DEV (2026-10-05). In these three places a KB page disagrees with TST. In K3 it also disagrees
with the DEV pack. React follows TST in each place.

| Id | KB text | TST (compiled code) | Source |
|---|---|---|---|
| K1 | BR-UBTCON-301 and `logic/ui-app-start-and-login.md` ("never True"): no navigation in UBTConnect passes In_IsFromInvalidPermissions True | The SecurityException branch of the App_Common flow handler opens Login with In_IsFromInvalidPermissions True when no user is signed in | `migration/shell/sources/UBTConnect.App_Common.controller.js:79-84`; `migration/knowledge/shell-facts.md:17` |
| K2 | `logic/ui-app-start-and-login.md` "Online / offline": nothing calls OnOnline or OnOffiline, so App_NetworkStatus_IsOnline_IsPersistent stays True and BR-UBTCON-213 always shows "Service Interruption" | OnApplicationReady passes OnOnline and OnOffiline to NetworkDetetion_DefineCallbacks through a JavaScript node; OnOffiline sets the flag False | `UBTConnect.controller.js:15317-15332, 15804` (`tst_source.py show UBTConnect.controller.js`) |
| K3 | BR-UBTCON-316: no bookmark-note access and new bookmarks → Notes | That combination opens Bookmarks; no branch opens Notes. The DEV pack has no Notes destination either | `UBTConnect.App_Common.BottomBarMenu.mvc.js:653-662` |

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | What does "Forgot Password?" do in the mock phase (F2)? | TST shows a spinner, disables the Login button and opens the reset-password policy of the identity provider (BR-UBTCON-303, BR-UAM-427). React does nothing visible. U4 covers only "Login with UBT One". | (a) Keep no action, and record it under D3(a) ("real B2C not migrated"). (b) Copy the TST screen states: the spinner, the disabled Login button, then a mock IdP_OnResetPassword with a success toast. (c) Show an info toast: the reset is not available in the demo. | (a): the real reset page is not migrated, and (b) needs a toast text that no capture shows. |
| Q2 | Do you accept the In_IsFromResetPIN order of Login in React (F4)? | TST starts the identity provider login, then calls AppManager_Logout (BR-UBTCON-302). React runs Connect_Logout first, then the mock sign-in. A mock that signs in at once, followed by the logout, leaves the user signed out. | (a) Accept, and record it as a decision together with App_PIN Q1 (Connect_Logout on this path). (b) Keep the order, but call the AppManager_Logout steps only. | (a): the end state is the same as on TST, and ADR-10 asks for the clear on logout. |
| Q3 | When does Login get the device-awareness dialog (F3)? | TST opens ConfirmationDialog_ResetPassword through AppManager_HandleDeviceAwarenessPopUp when CallbackType is DeviceAwareness_InvalidDevice (BR-UBTCON-306, BR-UAM-464). The mock sign-in never reports an invalid device. | (a) Fix the constant now, and build the dialog flow with the production identity provider. (b) Build AppManager_HandleDeviceAwarenessPopUp now as a mock scenario. | (a): only the server login decides if a device is valid (KB UBT_AppManager `logic/device-awareness.md`). |
| Q4 | Which event ends the Splash load in React (row 054)? | The OSUI block waits for the runtime ApplicationLifecycle onLoadComplete, which is not in local code. React waits for the end of the app start of the shell. The code comment calls the point open. | (a) Keep the end of the app start. (b) Use the first render of the shell, without a wait for the app-start calls. | (a): the routing after the animation needs the session state that the app start sets. |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 19 | 17 | 0 | 0 | 1 | 0 | 1 | 0 |
| data | 6 | 2 | 0 | 0 | 0 | 3 | 1 | 0 |
| ui | 58 | 43 | 0 | 0 | 5 | 0 | 10 | 0 |
| actions | 43 | 26 | 1 | 1 | 7 | 1 | 7 | 0 |
| validations | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 48 | 35 | 3 | 2 | 7 | 0 | 1 | 0 |
| strings | 7 | 5 | 0 | 0 | 1 | 0 | 1 | 0 |
| **total** | **182** | **129** | **4** | **3** | **21** | **4** | **21** | **0** |

## 9. Follow-up pass (2026-10-27)

Rows settled or sharpened after the user answers of 2026-10-27 and the TST files that `tst_source.py` reads. A row that stays `unclear` has a new question that names what settles it. Every row below has `verified: "live"`.

| Row | Old verdict | New verdict | Evidence |
|---|---|---|---|
| App_Common-025 | `unclear` | `differs` | app/src/pages/Login/hooks/useLogin.ts:97-99; TST UBTConnect.App_Common.Login.mvc.js:719-730; BR-UBTCON-303; migration/clarify/answers.json App_Common:Q1 |
| App_Common-031 | `unclear` | `n/a` | TST UBTConnect.App_Common.Login.mvc.js:865-868; BR-UBTCON-305; migration/clarify/answers.json App_Common:Q1 |
| App_Common-054 | `unclear` | `differs` | app/src/pages/Splash/hooks/useApplicationLoadEvents.ts:13-16, 45-54; TST OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc.js:578-583; migration/clarify/answers.json App_Common:Q4 |
