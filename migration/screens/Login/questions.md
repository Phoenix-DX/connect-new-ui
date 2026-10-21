# Questions: Login

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] Forgot Password (mock) (answered)
- Question: What does 'Forgot Password?' do in the mock phase? The original runs Login(IsResetPassword=True): IsResettingPassword=True (spinner on that button, Login button disabled), then AppManager_Login sends the browser to the B2C password-reset page; the return comes through the B2C callback (AppManager_Events) with toast texts from the callback record (not captured). D3(a)/U4 only cover 'Login with UBT One'.
- Evidence: p:UBTConnect.App_Common.Login.mvc.js:464 (Forgot Password onClick login(true)), :702-780 (_login), :868-873 (idP_OnResetPassword toast); app-shell.spec.md U4
- OutSystems MCP: not available to the route agent
- Options: a) button as captured, click does nothing until the real identity provider (BFF) | b) click shows the loading state (IsResettingPassword) and stays there | c) click behaves like 'Login with UBT One' (mock sign-in) (recommended: a)
- Answer (user, 2026-10-14T18:35:03): A: 'Forgot Password?' does nothing in the mock phase until the real identity provider (user, 2026-10-14)

## Q2 [decision] Login?In_IsFromResetPIN=True (mock) (answered)
- Question: PINUnlock 'Forgot PIN' opens Login?In_IsFromResetPIN=True. The original OnInitialize then (unless restored from the view cache) runs Login(False) (B2C redirect) and AppManager_Logout (clears session + local PIN); after the B2C round-trip the callback goes to PINRegister. How should the mock do it?
- Evidence: p:UBTConnect.App_Common.Login.mvc.js:960-990 (OnInitialize In_IsFromResetPIN branch); shared Block_PINUnlock_ContentWrapper.tsx:163; shell auth.ts signIn/signOut
- OutSystems MCP: not available to the route agent
- Options: a) signOut() then mock signIn() at once → PINRegister (the B2C round-trip skipped, as U4) | b) signOut() only, stay on Login signed out; the user taps 'Login with UBT One' | c) not built now: Login shows as usual, the user stays signed in (recommended: a)
- Answer (user, 2026-10-14T18:35:03): A: Login?In_IsFromResetPIN=True → signOut() (clears session and local PIN), then mock signIn() which goes to PINRegister (user, 2026-10-14)

## Q3 [decision] B2C callback branches (mock) (answered)
- Question: Branches that only the real B2C callback reaches: (1) OnReady with CallbackType = DeviceAwareness_InvalidDevice → AppManager_HandleDeviceAwarenessPopUp (opens ConfirmationDialog_ResetPassword 'Security Warning', may call AppManager_ChangeDevice); (2) AppManager_Events onCallback: IsSucess False → error toast, IdP_OnResetPassword → toast with callback texts. The mock sign-in (U4) replaces the callback; DeviceAwareness_Use is false on TST. Build them now?
- Evidence: p:UBTConnect.App_Common.Login.mvc.js:800-818 (OnReady), :828-905 (AppManager_Callback), :633-650 (dialog texts); knowledge/shell-observed.md U2 (DeviceAwareness_Use false); pack 'Declared … not observed' AppManager_ChangeDevice
- OutSystems MCP: not available to the route agent
- Options: a) not built: AppManager_Events and the Security Warning dialog render closed as captured, no callback logic (the shell's mock sign-in stands in) | b) build them with fictional callback records through a mock toggle (recommended: a)
- Answer (user, 2026-10-14T18:35:03): A: B2C callback and device-awareness branches not built in the mock phase; the dialog renders closed as captured (user, 2026-10-14)

## Q4 [fact] Get_IsUnsupportedSystem (answered)
- Question: Is Get_IsUnsupportedSystem.Out_IsUnsupportedSystem exactly (unsupported app version OR WebView version OR browser version), i.e. the OR of the three outputs of Get_IsUnsupportedVersion that the shared UnsupportedVersion_Wrapper uses? The route uses that OR (False on TST: no minimum versions; True with ?mock=unsupported-browser, U16).
- Evidence: p:UBTConnect.App_Common.Login.mvc.js:940-947 (OnInitialize), :250 ($if IsUnsupportedSystem → UnsupportedVersion_Wrapper); app-shell.spec.md:190; shared/UBTConnect/lib/actions.ts get_IsUnsupportedVersion
- OutSystems MCP: not available to the route agent (UBTConnect.controller Get_IsUnsupportedSystem not in the route sources)
- Answer (code, 2026-10-14T18:30:11): No: Get_IsUnsupportedSystem.Out_IsUnsupportedSystem = Get_IsUnsupportedVersion.Out_IsUnsupportedAppVersion OR Out_IsUnsupportedBrowserVersion (WebView version NOT included). Evidence: TST compiled UBTConnect.controller.js (Get_IsUnsupportedSystem, comment 'Out_IsUnsupportedSystem = ... AppVersion or ... BrowserVersion'). Fix the route to OR only these two.

## Q5 [fact] DelayedMessage_Show (answered)
- Question: What does UBT_AppManager DelayedMessage_Show do (Login OnReady, when CallbackType is not DeviceAwareness_InvalidDevice), and who sets the client variable AppManager_DelayedMessage? Neither is ported in the shell (CR-Login-1).
- Evidence: p:UBTConnect.App_Common.Login.mvc.js:810-813; migration/shell/client-variables.md:86 (AppManager_DelayedMessage)
- OutSystems MCP: not available to the route agent (UBT_AppManager.controller not in the route sources)
- Answer (code, 2026-10-14T18:30:11): DelayedMessage_Show (UBT_AppManager.controller.js): if AppManager_DelayedMessage is not empty, JSON-deserialize it (AppManager_DelayedMessage record: MessageTitle, Message, Type), set the variable to "", then FeedbackMessage_AutoClose(title, message, type, EncodedHTML=True, ExtendedClass="", DelayMs=0, UseDebounce=False). The only writer is DelayedMessage_Define, called only by FRD_HandleEvent_Logout (Firebase Realtime Database remote logout: AppManager_Logout, DelayedMessage_Define, JSUtils_PageRefresh). The mock has no Firebase, so the message is never set; port DelayedMessage_Show as a shell function (CR-Login-1).

## Q6 [decision] Parity: capture artifacts (answered)
- Question: Accept these Login parity differences as capture artifacts (exemptions), since the build follows the compiled code and the live capture? (1) WelcomeToConnect logo: expected render shows a 16×16 broken image, the live capture recorded data-rendered-size 209x33 → card content and buttons 7px lower, pixel diff; (2) SVG background: compiled SVG has preserveAspectRatio="none", dropped by the capture, so the expected render scales it uniformly (path 0,32 390×665 vs 0,0 390×720), pixel diff; (3) 'Contact Us' link cursor auto (capture renamed href to data-original-href) vs pointer; (4) version text masked in the capture; (5) loading/offline only: body class osx and .slide-from-right-enter-done missing in those captures (taken before the device class/transition).
- Evidence: parity/default.json, loading.json, offline.json; dom/default.html:53 (data-rendered-size=209x33), :93 (data-original-href); sources/pretty/UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc.js:202 (preserveAspectRatio none); parity/default.expected.png vs default.build.png
- OutSystems MCP: not applicable
- Options: a) accept all five as exemptions | b) accept some (name them) | c) none: keep them as open differences (recommended: a)
- Answer (user, 2026-10-14T18:35:03): A: accept the five capture-replay artifacts as parity exemptions in migration/parity-exemptions.json, with reason and evidence (user, 2026-10-14)

## Q7 [decision] Parity: version text (answered)
- Question: The default state keeps one difference: the Version text is 'App version (61)' in the build but four words on TST ('App version' + environment + '(N)', masked in the capture), so the centred span sits 5px further right (134,1 → 139,1). The environment word needs a shell/shared change (CR-Login-4: keep UBT_AppManager.OutSystems_Environment from SynchAppContext). Wait for CR-Login-4, or accept the difference as an exemption until then?
- Evidence: migration/screens/Login/parity/default.json; analysis/dom/default.html:106 (masked text 3+7+3+4 chars); app/src/shared/UBTConnect/Version/README.md 'Not settled'; migration/change-requests/CR-Login-4.md
- OutSystems MCP: not applicable
- Options: a) wait: apply CR-Login-4, no exemption | b) temporary exemption VERSION-ENVIRONMENT (position of the Version span) until CR-Login-4 is applied (recommended: a)
- Answer (user, 2026-10-14T19:20:40): A: no exemption; CR-Login-4 applied (shell keeps OutSystems_Environment from SynchAppContext, mock Environment TST); Version shows 'App version TST (61)'; parity 0 differences (user, 2026-10-14)

## Q8 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: "Forgot Password?" renders as captured and does nothing on click in the mock phase (Q1).; Login?In_IsFromResetPIN=True (not restored from the view cache): signOut() (session and local PIN), then the mock; AppManager_Events renders as the empty captured widget and the Security Warning dialog stays closed; callback and; IsUnsupportedSystem = unsupported app version OR unsupported browser version (Q4): False on TST, True with; OnReady calls the shell's `delayedMessageShow()` (Q5, CR-Login-1); nothing is pending in the mock app.; "Login with UBT One" signs in at once as the mock user and the shell picks the destination (D3(a)/U4, shell auth.ts).; Static entity values `large` (UBT_Shape) and `xxs` (UBT_FontSize) are local constants taken from the captured classes; Parity exemptions added for the capture-replay artifacts (Q6): CAPTURE-SVG-PRESERVEASPECTRATIO (ignoreSubtrees; The ButtonLoading loading state (`osui-btn-loading--is-loading`, aria-busy) is not captured; it comes from the shared Feature flags: clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-14T19:24:06): confirm (user tested the review, 2026-10-14)

## Q9 [review] review round 2 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: "Forgot Password?" renders as captured and does nothing on click in the mock phase (Q1).; Login?In_IsFromResetPIN=True (not restored from the view cache): signOut() (session and local PIN), then the mock; AppManager_Events renders as the empty captured widget and the Security Warning dialog stays closed; callback and; IsUnsupportedSystem = unsupported app version OR unsupported browser version (Q4): False on TST, True with; OnReady calls the shell's `delayedMessageShow()` (Q5, CR-Login-1); nothing is pending in the mock app.; "Login with UBT One" signs in at once as the mock user and the shell picks the destination (D3(a)/U4, shell auth.ts).; Static entity values `large` (UBT_Shape) and `xxs` (UBT_FontSize) are local constants taken from the captured classes; Parity exemptions added for the capture-replay artifacts (Q6): CAPTURE-SVG-PRESERVEASPECTRATIO (ignoreSubtrees; The ButtonLoading loading state (`osui-btn-loading--is-loading`, aria-busy) is not captured; it comes from the shared Feature flags: clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T01:28:31): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
