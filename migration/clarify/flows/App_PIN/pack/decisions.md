# Recorded decisions and facts that name the elements of UI flow App_PIN

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:41` (PINChange): | Menu | `/UBTConnect/Menu` | 5 | 78 | lite | build | V3d · bottom bar Menu tab; also from PINRegister, PINChange (user, 2026-10-14) | built | route-menu |
- `migration/board.md:43` (PINChange): | PINChange | `/UBTConnect/PINChange` | 5 | 33 | lite | build | V4c · D3 menu part, consistent with V1 (mock PIN); biometrics on web decided in Phase 4 (user, 2026-10-14) | built | route-pinchange |
- `migration/board.md:11` (PINRegister): | PINRegister | `/UBTConnect/PINRegister` | 1 | 53 | lite | build | V1 · D3(a) · build with mock sign-in + PIN; real B2C not migrated (user, 2026-10-14) | built | route-pinregister |
- `migration/board.md:41` (PINRegister): | Menu | `/UBTConnect/Menu` | 5 | 78 | lite | build | V3d · bottom bar Menu tab; also from PINRegister, PINChange (user, 2026-10-14) | built | route-menu |
- `migration/board.md:12` (PINUnlock): | PINUnlock | `/UBTConnect/PINUnlock` | 1 | 50 | lite | build | V1 · D3(a) · build with mock sign-in + PIN; real B2C not migrated (user, 2026-10-14) | built | route-pinunlock |

## app-shell.spec

- `migration/app-shell.spec.md:35` (PINChange): - The captures of PINRegister, PINChange and Photobook have no `osx` (their digest.md:4).
- `migration/app-shell.spec.md:99` (PINChange): | `Layout_LoginFlow` | Login, PINRegister, PINChange, AcceptPendingPolicies; lock screen | `.ubt-layout--login` > `__svg`, `__header#Placeholder_Header`, `__content#Placeholder_Content`, `#Placeholder_CommonUI_Inside_Layout` (Login dom:8-35); lock variant adds `ubt-lock-screen connect-legacy-compati
- `migration/app-shell.spec.md:226` (PINChange): | PIN register / change | PINRegister, PINChange routes | knowledge/auth.md:16-38; success → `PIN_SessionInactivity_Start`, `HasUnlocked=True`, resume link / `LastURL` / HomeFeed, sets `IsNavigateToHomeOnBack` | route specs; shell gives PIN store + resume helpers | mock |
- `migration/app-shell.spec.md:35` (PINRegister): - The captures of PINRegister, PINChange and Photobook have no `osx` (their digest.md:4).
- `migration/app-shell.spec.md:99` (PINRegister): | `Layout_LoginFlow` | Login, PINRegister, PINChange, AcceptPendingPolicies; lock screen | `.ubt-layout--login` > `__svg`, `__header#Placeholder_Header`, `__content#Placeholder_Content`, `#Placeholder_CommonUI_Inside_Layout` (Login dom:8-35); lock variant adds `ubt-lock-screen connect-legacy-compati
- `migration/app-shell.spec.md:222` (PINRegister): | Authentication & session | `AppManager_Login` (B2C), `/UBT_AppManager/Callback`, `Connect_SetLoggedContext(isFromLogin)` | flow in knowledge/auth.md:9-14; on callback success: `Connect_SetLoggedContext(…, True)`, `TriggerOfflineDataSync`, `ReplaceOnUpcomingNavigation`, then HomeFeed / reset-passwo
- `migration/app-shell.spec.md:225` (PINRegister): | PIN at app start | Splash `LoadingDotsAnimationComplete`; `AppManager_AfterInitialize` | Splash: `Set_InitialClientVariables`, `PIN_Check`, cold-start link, signed in + NeedRegister → PINRegister, + NeedUnlock → PINUnlock, else navigate to link or `LastURL` (Splash p:UBTConnect.App_Common.Splash.m
- `migration/app-shell.spec.md:226` (PINRegister): | PIN register / change | PINRegister, PINChange routes | knowledge/auth.md:16-38; success → `PIN_SessionInactivity_Start`, `HasUnlocked=True`, resume link / `LastURL` / HomeFeed, sets `IsNavigateToHomeOnBack` | route specs; shell gives PIN store + resume helpers | mock |
- `migration/app-shell.spec.md:227` (PINRegister): | PIN unlock | `Pincode_Unlock` | content shown when `In_ForceVisible` or (`PIN_SessionInactivity_Use` and `PIN_IsLocked`) (p:UBT_AppManager.PIN.Pincode_Unlock.mvc.js:192-196); wrong PIN → "Your current PIN is not correct!"; unknown user → "No matching user. Please Register a PIN" + go PINRegister (
- `migration/app-shell.spec.md:229` (PINRegister): | CommonUI gate | `CommonUI_InsideLayout` OnInitialize | `HideLockScreen = not signed in or In_IgnoreLockScreen or NeedRegister` (CUI:533-537); inputs per screen: Login, PINUnlock `IgnoreLockScreen+IgnorePolicy` (Login p:…Login.mvc.js:654; PINUnlock p:…PINUnlock.mvc.js:164), PINRegister `ShowLockScr
- `migration/app-shell.spec.md:248` (PINRegister): | `LastURL` (UBTConnect) | Splash OnLoadComplete when no pending navigation (Splash p:429-436); FCM link (UC:2617-2618) | Splash, PINUnlock, PINRegister success |
- `migration/app-shell.spec.md:225` (PINUnlock): | PIN at app start | Splash `LoadingDotsAnimationComplete`; `AppManager_AfterInitialize` | Splash: `Set_InitialClientVariables`, `PIN_Check`, cold-start link, signed in + NeedRegister → PINRegister, + NeedUnlock → PINUnlock, else navigate to link or `LastURL` (Splash p:UBTConnect.App_Common.Splash.m
- `migration/app-shell.spec.md:227` (PINUnlock): | PIN unlock | `Pincode_Unlock` | content shown when `In_ForceVisible` or (`PIN_SessionInactivity_Use` and `PIN_IsLocked`) (p:UBT_AppManager.PIN.Pincode_Unlock.mvc.js:192-196); wrong PIN → "Your current PIN is not correct!"; unknown user → "No matching user. Please Register a PIN" + go PINRegister (
- `migration/app-shell.spec.md:228` (PINUnlock): | Inactivity lock | `InactivityTimer` in every CommonUI lock block → `PIN_SessionInactivity_Start` | when `PIN_SessionInactivity_Use`: listeners on mouse/touch/key, 10 s check interval, timeout = `PIN_SessionInactivity_Seconds` (AM:7892-8037); on timeout: `PIN_SessionInactivity_Navigate` → page redi
- `migration/app-shell.spec.md:229` (PINUnlock): | CommonUI gate | `CommonUI_InsideLayout` OnInitialize | `HideLockScreen = not signed in or In_IgnoreLockScreen or NeedRegister` (CUI:533-537); inputs per screen: Login, PINUnlock `IgnoreLockScreen+IgnorePolicy` (Login p:…Login.mvc.js:654; PINUnlock p:…PINUnlock.mvc.js:164), PINRegister `ShowLockScr
- `migration/app-shell.spec.md:236` (PINUnlock): | Back navigation | `LayoutRuntime_Top` queue, `BackNavigationHandler`, `PreventBackNavigation` | handlers run by descending priority until one prevents (p:NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js:317-360); priorities: lock screen 100000, modal 10000, drawer 1000 (N
- `migration/app-shell.spec.md:248` (PINUnlock): | `LastURL` (UBTConnect) | Splash OnLoadComplete when no pending navigation (Splash p:429-436); FCM link (UC:2617-2618) | Splash, PINUnlock, PINRegister success |
- `migration/app-shell.spec.md:294` (PINUnlock): These are the app-start calls of a signed-in load of HomeFeed. PINRegister, PINUnlock, Menu… make the same calls (their calls.md
- `migration/app-shell.spec.md:311` (PINUnlock): | `UBTConnect_Utils/CacheControl/CacheControl_Policies/DataActionGetCacheInfo` | unlock content (lock overlay, PINUnlock) | PINUnlock calls:12; Splash calls:12 | recorded |
- `migration/app-shell.spec.md:99` (Block_PINUnlock): | `Layout_LoginFlow` | Login, PINRegister, PINChange, AcceptPendingPolicies; lock screen | `.ubt-layout--login` > `__svg`, `__header#Placeholder_Header`, `__content#Placeholder_Content`, `#Placeholder_CommonUI_Inside_Layout` (Login dom:8-35); lock variant adds `ubt-lock-screen connect-legacy-compati
- `migration/app-shell.spec.md:185` (Block_PINUnlock): | Lock screen (`App_PIN.Block_PINUnlock`) | inactivity / forced unlock (section 9) | always mounted, hidden by CSS unless it contains `.pincode-unlock` or `.unsupported-card` (HF css:1191-1195; HF dom:1110-1153) | `Unlock` → CommonUI `OnPinUnlock_HideLockScreen` (empty action, CUI:475-496) |
- `migration/app-shell.spec.md:232` (Block_PINUnlock): | Unsupported version | `Get_IsUnsupportedSystem` → `Try_GetIsSupportedVersion` | app or browser version below `MinNativeAppVersion` / `MinWebViewVersion_*` (UC:4531-4589, 17351-17368); thresholds empty in the TST response shape (HF calls:52-54); card shown in Login and lock screen (Block_PINUnlock:
- `migration/app-shell.spec.md:227` (Block_PINUnlock_ContentWrapper): | PIN unlock | `Pincode_Unlock` | content shown when `In_ForceVisible` or (`PIN_SessionInactivity_Use` and `PIN_IsLocked`) (p:UBT_AppManager.PIN.Pincode_Unlock.mvc.js:192-196); wrong PIN → "Your current PIN is not correct!"; unknown user → "No matching user. Please Register a PIN" + go PINRegister (

## change requests

- `migration/change-requests/CR-Search-1.md:45` (PINRegister): - Regression parity run on: Login, PINUnlock, PINRegister, Splash, HomeFeed, MyEntertaining (see the foundation report).
- `migration/change-requests/CR-PINUnlock-1.md:6` (PINRegister): - Other routes using it: PINRegister (`Block_PINRegister_ContentWrapper` success also reads `UBTConnect.LastURL`)
- `migration/change-requests/CR-W3A-1.md:36` (PINRegister): - Regression parity run on: Login, PINUnlock, PINRegister, Splash, HomeFeed (2026-10-15, after the change; see the
- `migration/change-requests/CR-Services-1.md:17` (PINRegister): - `app/src/shell/LockHost.tsx` / `paths.ts:33`: the lock block is hidden only on Login, PINUnlock, PINRegister, Splash.
- `migration/change-requests/CR-Services-1.md:44` (PINRegister): - Regression parity run on: Login, PINUnlock, PINRegister, Splash, HomeFeed, MyEntertaining (see the foundation report).
- `migration/change-requests/CR-Splash-2.md:7` (PINRegister): - Other routes using it (catalog/blocks.md): PINRegister / PINUnlock (ScreenController_NavigateToPage), HandleOnResumeOpenLink (GetURLFromEventDataURL)
- `migration/change-requests/CR-Splash-2.md:52` (PINRegister): Block_PINRegister_ContentWrapper (:636-649; PINRegister's resume link / LastURL, which may be an absolute href).
- `migration/change-requests/CR-Splash-2.md:53` (PINRegister): PINRegister and AcceptPendingPolicies import `allowUpcomingNavigation` from the navigation index.
- `migration/change-requests/CR-Search-1.md:45` (PINUnlock): - Regression parity run on: Login, PINUnlock, PINRegister, Splash, HomeFeed, MyEntertaining (see the foundation report).
- `migration/change-requests/CR-PINUnlock-1.md:1` (PINUnlock): # CR-PINUnlock-1: shell PIN redirect (U3) — also write `UBTConnect.LastURL` as Splash does
- `migration/change-requests/CR-PINUnlock-1.md:4` (PINUnlock): - Raised by: PINUnlock, 2026-10-14
- `migration/change-requests/CR-PINUnlock-1.md:10` (PINUnlock): - Expression / handler: `sources/pretty/UBTConnect.App_PIN.PINUnlock.mvc.js:228-249`: after the unlock,
- `migration/change-requests/CR-PINUnlock-1.md:14` (PINUnlock): (`migration/knowledge/shell-facts.md:34`), before it sends a signed-in, not-unlocked user to PINUnlock (:39).
- `migration/change-requests/CR-PINUnlock-1.md:20` (PINUnlock): When the shell's app-start PIN check redirects to PINUnlock, set `UBTConnect.LastURL` to the location the user opened
- `migration/change-requests/CR-F18-1.md:13` (PINUnlock): `active-screen screen-container slide-from-right-enter-done` (Login, PINUnlock, EventDetail… captures); the slider is
- `migration/change-requests/CR-PINUnlock-4.md:1` (PINUnlock): # CR-PINUnlock-4: shell app start — CacheableHouseholds before CacheableMapEntities
- `migration/change-requests/CR-PINUnlock-1.md:6` (Block_PINRegister_ContentWrapper): - Other routes using it: PINRegister (`Block_PINRegister_ContentWrapper` success also reads `UBTConnect.LastURL`)
- `migration/change-requests/CR-F18-1.md:26` (Block_PINRegister_ContentWrapper): Default; Menu.mvc.js:773 Fade; Block_PINRegister_ContentWrapper.mvc.js:618 SlideFromRight; ConnectShare.mvc.js:293
- `migration/change-requests/CR-Splash-2.md:52` (Block_PINRegister_ContentWrapper): Block_PINRegister_ContentWrapper (:636-649; PINRegister's resume link / LastURL, which may be an absolute href).
- `migration/change-requests/CR-Services-1.md:1` (Block_PINUnlock): # CR-Services-1: shell renders CommonUI blocks (Block_PINUnlock, Dialog_AccessRestrictedAction) on a screen without CommonUI
- `migration/change-requests/CR-Services-1.md:5` (Block_PINUnlock): - Block: `app/src/shell` (LockHost / dialogs hosts: `App_PIN.Block_PINUnlock` `b13-$b2`, `CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction` `b13-$b4`)
- `migration/change-requests/CR-Services-1.md:14` (Block_PINUnlock): - Parity (`migration/screens/Services/parity/{default,loading,offline}.json`): `div#b13-$b2 [App_PIN.Block_PINUnlock]`
- `migration/change-requests/CR-Services-1.md:32` (Block_PINUnlock): - Inactivity as compiled: `InactivityTimer` (only inside Pincode_Unlock ← Block_PINUnlock ← CommonUI_InsideLayout / PINUnlock)
- `migration/change-requests/CR-PINUnlock-2.md:5` (Block_PINUnlock): - Block: `UBTConnect.App_PIN.Block_PINUnlock` → `app/src/shell/dialogs/BlockPinUnlock.tsx`
- `migration/change-requests/CR-PINUnlock-2.md:12` (Block_PINUnlock): - Expression / handler: `sources/pretty/UBTConnect.App_PIN.PINUnlock.mvc.js:128-186`: Block_PINUnlock
- `migration/change-requests/CR-PINUnlock-2.md:15` (Block_PINUnlock): - `sources/pretty/UBTConnect.App_PIN.Block_PINUnlock.mvc.js:160-335`: inputs `In_ForceVisible`, `In_IsCommonBlock`
- `migration/change-requests/CR-PINUnlock-2.md:28` (Block_PINUnlock): Q2 option A (pending the user's decision): the screen composes Block_PINUnlock's wrapper from the shared
- `migration/change-requests/CR-PINUnlock-2.md:29` (Block_PINUnlock_ContentWrapper): `Layout_LoginFlow`, `Block_PINUnlock_ContentWrapper` and `CommonUI_InsideLayout` (`app/src/screens/PINUnlock/components/

## knowledge

- `migration/knowledge/auto-decisions-2026-10-15.md:60` (PINChange): | PINChange | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): unlocked branch built from the compiled code with the shared Block_PINRegister_ContentWrapper (mock PI |
- `migration/knowledge/audit-a1-empty-handlers.md:87` (PINChange): - Behaviour: HomeFeed, FeedItemDetail (Feed_Embeded); PINUnlock and the shell lock dialog, PINChange
- `migration/knowledge/audit-a1-empty-handlers.md:97` (PINChange): - `route.py parity` clean after the last code change: HomeFeed, PINUnlock, PINChange, TermsAndPoliciesMenu,
- `migration/knowledge/shell-facts.md:5` (PINRegister): - U3: Splash is anonymous. No app code writes `HasRenderedSplashInSession`: it is a runtime sessionStorage key, not a client variable. After loading, Splash goes to PINRegister, PINUnlock, the cold-start link or `LastURL`.
- `migration/knowledge/shell-facts.md:38` (PINRegister): - Signed in + NeedRegister → `/UBTConnect/PINRegister`; signed in + NeedUnlock → `/UBTConnect/PINUnlock`.
- `migration/knowledge/navigation.md:12` (PINRegister): - Signed in and `NeedRegister`: PINRegister.
- `migration/knowledge/navigation.md:36` (PINRegister): OneSchoolGlobalDetails, PINRegister, SupperMeeting_Details.
- `migration/knowledge/navigation.md:38` (PINRegister): - Push notifications: the module client action `FCM_DeeplinkCallback` can open PINRegister or PINUnlock. [MCP]
- `migration/knowledge/auth.md:12` (PINRegister): 3. First sign-in in a browser → `/UBTConnect/PINRegister`. [trace; user]
- `migration/knowledge/auth.md:16` (PINRegister): ## PINRegister
- `migration/knowledge/auth.md:18` (PINRegister): - Screen `UBTConnect.App_PIN.PINRegister`, content block `UBTConnect.App_PIN.Block_PINRegister_ContentWrapper`,
- `migration/knowledge/shell-facts.md:5` (PINUnlock): - U3: Splash is anonymous. No app code writes `HasRenderedSplashInSession`: it is a runtime sessionStorage key, not a client variable. After loading, Splash goes to PINRegister, PINUnlock, the cold-start link or `LastURL`.
- `migration/knowledge/shell-facts.md:38` (PINUnlock): - Signed in + NeedRegister → `/UBTConnect/PINRegister`; signed in + NeedUnlock → `/UBTConnect/PINUnlock`.
- `migration/knowledge/navigation.md:13` (PINUnlock): - Signed in and `NeedUnlock`: PINUnlock.
- `migration/knowledge/navigation.md:38` (PINUnlock): - Push notifications: the module client action `FCM_DeeplinkCallback` can open PINRegister or PINUnlock. [MCP]
- `migration/knowledge/audit-a1-empty-handlers.md:87` (PINUnlock): - Behaviour: HomeFeed, FeedItemDetail (Feed_Embeded); PINUnlock and the shell lock dialog, PINChange
- `migration/knowledge/audit-a1-empty-handlers.md:97` (PINUnlock): - `route.py parity` clean after the last code change: HomeFeed, PINUnlock, PINChange, TermsAndPoliciesMenu,
- `migration/knowledge/audit-a1-empty-handlers.md:99` (PINUnlock): - Headless Playwright on the dev server: PINUnlock policy links (2) open the two cached policy URLs in a new tab;
- `migration/knowledge/shell-observed.md:25` (PINUnlock): - `/UBTConnect/HomeFeed` renders, then about 17 s after the load the app goes to `/UBTConnect/PINUnlock` (no Splash).
- `migration/knowledge/auto-decisions-2026-10-15.md:60` (Block_PINRegister_ContentWrapper): | PINChange | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): unlocked branch built from the compiled code with the shared Block_PINRegister_ContentWrapper (mock PI |
- `migration/knowledge/audit-a1-empty-handlers.md:76` (Block_PINRegister_ContentWrapper): - Rejection branches in Block_PINRegister_ContentWrapper.tsx:63 and SupperMeeting_DetailsBlock.tsx:54 (cited in place).
- `migration/knowledge/auth.md:18` (Block_PINRegister_ContentWrapper): - Screen `UBTConnect.App_PIN.PINRegister`, content block `UBTConnect.App_PIN.Block_PINRegister_ContentWrapper`,
- `migration/knowledge/audit-a1-empty-handlers.md:29` (Block_PINUnlock_ContentWrapper): | `app/src/shared/UBTConnect/Block_PINUnlock_ContentWrapper/Block_PINUnlock_ContentWrapper.tsx:98-102` | `OnClick_TermsAndCondition`, `OnClick_PrivacyPolicy` (`openPolicy = () => undefined`) | `UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc.js` view :607 / :675, controller :939-968 / :969-998
- `migration/knowledge/audit-a1-empty-handlers.md:88` (Block_PINUnlock_ContentWrapper): (Block_PINUnlock_ContentWrapper); TermsAndPoliciesMenu (re-export).
- `migration/knowledge/auto-decisions-2026-10-16.md:90` (Block_PINUnlock_ContentWrapper): | Audit A1 (empty handlers vs compiled; `migration/knowledge/audit-a1-empty-handlers.md`) | 2 real gaps fixed 1:1: Feed_Embeded OnDownloaded → OpenInApp_TryOpenFileInApp; Block_PINUnlock_ContentWrapper policy links → OpenPolicy (moved to UBTConnect_Utils lib); EventCard_Box / MarkAllAsRead / DeleteA

## flags

- `migration/flags.md:206` (Block_PINUnlock_ContentWrapper): - `clientVar:App_PIN_BiometricEnabled`: `UBTConnect.App_Menu.PINBiometricsMenu.mvc.js`, `UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc.js`, `UBTConnect.controller.js`

## parity exemptions

- `migration/parity-exemptions.json:655` (PINChange): "reason": "The capture renames a link's href to data-original-href, so the replayed reference anchor of the PINChange header (\"Change PIN\") and the IconText block inside it have cursor auto; the app's link has its href \"#\" (cursor pointer). Same artifact as CAPTURE-LINK-HREF-CURSOR (Login Q6), C
- `migration/parity-exemptions.json:656` (PINChange): "evidence": "migration/screens/PINChange/analysis/dom/default.html:34 (data-original-href=\"#\"); migration/screens/PINChange/parity/{default,loading,offline}.json (2 style diffs each, cursor only)"
- `migration/parity-exemptions.json:2` (PINRegister): "_comment": "Accepted parity differences, decided by the user. Every entry has an id, a reason and evidence; the parity report counts how often each fires. Login entries: Q6 answered by the user (2026-10-14), migration/screens/Login/questions.json. PINUnlock entries (*-PINCODE): Q3 answered by the u
- `migration/parity-exemptions.json:223` (PINRegister): "reason": "The capture renames a link's href to data-original-href, so the replayed reference anchor of the PINRegister header (\"Back to login\") and the IconText block inside it have cursor auto; the app's link has its href \"#\" (cursor pointer). Same artifact as CAPTURE-LINK-HREF-CURSOR (Login Q
- `migration/parity-exemptions.json:224` (PINRegister): "evidence": "migration/screens/PINRegister/analysis/dom/default.html:35 (data-original-href=\"#\"); migration/screens/PINRegister/parity/default.json; accepted in kind: Login Q6, PINUnlock Q3",
- `migration/parity-exemptions.json:1558` (PINRegister): "_ignoreClassesNote": "Animation-state classes of screen transitions: the capture moment decides whether they are set (user, 2026-10-14, PINRegister Q1). OS classes on body/html depend on the capture machine and on when OutSystems UI adds them; the clone computes them from the user agent (user, 2026
- `migration/parity-exemptions.json:2` (PINUnlock): "_comment": "Accepted parity differences, decided by the user. Every entry has an id, a reason and evidence; the parity report counts how often each fires. Login entries: Q6 answered by the user (2026-10-14), migration/screens/Login/questions.json. PINUnlock entries (*-PINCODE): Q3 answered by the u
- `migration/parity-exemptions.json:203` (PINUnlock): "evidence": "migration/screens/PINUnlock/analysis/dom/default.html:55 (data-rendered-size=\"202x33\"); migration/screens/PINUnlock/parity/default.expected.png vs default.build.png; PINUnlock Q3 (user)"
- `migration/parity-exemptions.json:212` (PINUnlock): "evidence": "migration/screens/PINUnlock/analysis/dom/default.html:197, 222, 239 (data-original-href=\"#\"); migration/screens/PINUnlock/parity/default.json; PINUnlock Q3 (user)",
- `migration/parity-exemptions.json:223` (PINUnlock): "reason": "The capture renames a link's href to data-original-href, so the replayed reference anchor of the PINRegister header (\"Back to login\") and the IconText block inside it have cursor auto; the app's link has its href \"#\" (cursor pointer). Same artifact as CAPTURE-LINK-HREF-CURSOR (Login Q
- `migration/parity-exemptions.json:224` (PINUnlock): "evidence": "migration/screens/PINRegister/analysis/dom/default.html:35 (data-original-href=\"#\"); migration/screens/PINRegister/parity/default.json; accepted in kind: Login Q6, PINUnlock Q3",
- `migration/parity-exemptions.json:655` (PINUnlock): "reason": "The capture renames a link's href to data-original-href, so the replayed reference anchor of the PINChange header (\"Change PIN\") and the IconText block inside it have cursor auto; the app's link has its href \"#\" (cursor pointer). Same artifact as CAPTURE-LINK-HREF-CURSOR (Login Q6), C

## Decision ids on the board rows of the flow's screens

D3, D3(a, V1, V4c
