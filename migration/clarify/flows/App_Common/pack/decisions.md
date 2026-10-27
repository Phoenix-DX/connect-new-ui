# Recorded decisions and facts that name the elements of UI flow App_Common

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:66` (InvalidPermissions): | InvalidPermissions | `/UBTConnect/InvalidPermissions` |  | 28 |  | skip | V1 · D3 · skip:dead · no link, URL or handler targets it (TST; DEV ref) (user, 2026-10-14) | - |  |
- `migration/board.md:10` (Login): | Login | `/UBTConnect/Login` | 1 | 57 | lite | build | V1 · D3(a) · build with mock sign-in + PIN; real B2C not migrated (user, 2026-10-14) | built | route-login |
- `migration/board.md:13` (Splash): | Splash | `/UBTConnect/Splash` | 1 | 18 | lite | build | V1 · D3(a) · build with mock sign-in + PIN; real B2C not migrated (user, 2026-10-14) | built | route-splash |

## app-shell.spec

- `migration/app-shell.spec.md:103` (InvalidPermissions): Not built: `App_Common.Layout`. Only InvalidPermissions uses it, and the board marks InvalidPermissions skip:dead
- `migration/app-shell.spec.md:333` (InvalidPermissions): | U1 | fact | Which screen `/UBTConnect/` (and a protected URL) shows to a signed-out visitor: Splash then Login, Login directly, or InvalidPermissions? | First screen of the app and the mock start flow | User opens TST root in a private window; or MCP (DEV): module Login/Splash settings. Build wait
- `migration/app-shell.spec.md:362` (InvalidPermissions): | U1 | `/UBTConnect/` renders the default screen HomeFeed; a signed-out visitor is sent, after the app-start calls, to `Login?In_IsFromInvalidPermissions=True` (App_Common SecurityException branch, `OutSystems_LastURL` kept as the sign-in callback). Nothing navigates to InvalidPermissions |
- `migration/app-shell.spec.md:52` (Login): - A screen transition uses OutSystems classes (`slide-from-right-enter-done`: Login dom:4; `.slide-from-left-enter-active`,
- `migration/app-shell.spec.md:99` (Login): | `Layout_LoginFlow` | Login, PINRegister, PINChange, AcceptPendingPolicies; lock screen | `.ubt-layout--login` > `__svg`, `__header#Placeholder_Header`, `__content#Placeholder_Content`, `#Placeholder_CommonUI_Inside_Layout` (Login dom:8-35); lock variant adds `ubt-lock-screen connect-legacy-compati
- `migration/app-shell.spec.md:173` (Login): | `ShowExceptionMessage(message, forceLogout)` | maps server texts to title/message/logout (UC:16136-16323): "Authorization has been denied for this request." → "Please make sure you have an active Connect plan…" + logout; "An error has occurred." → "Service Interruption" (info); "Error executing qu
- `migration/app-shell.spec.md:184` (Login): | `Dialog_ExitConfirmation` (HomeFeed, Login) | back navigation with `Force=true` at queue priority −1 (p:UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation.mvc.js:140; p:NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc.js:322, 669-672) | `.connect-dialog-popup > .dx-c
- `migration/app-shell.spec.md:204` (Login): (Login dom:43-50).
- `migration/app-shell.spec.md:222` (Login): | Authentication & session | `AppManager_Login` (B2C), `/UBT_AppManager/Callback`, `Connect_SetLoggedContext(isFromLogin)` | flow in knowledge/auth.md:9-14; on callback success: `Connect_SetLoggedContext(…, True)`, `TriggerOfflineDataSync`, `ReplaceOnUpcomingNavigation`, then HomeFeed / reset-passwo
- `migration/app-shell.spec.md:227` (Login): | PIN unlock | `Pincode_Unlock` | content shown when `In_ForceVisible` or (`PIN_SessionInactivity_Use` and `PIN_IsLocked`) (p:UBT_AppManager.PIN.Pincode_Unlock.mvc.js:192-196); wrong PIN → "Your current PIN is not correct!"; unknown user → "No matching user. Please Register a PIN" + go PINRegister (
- `migration/app-shell.spec.md:229` (Login): | CommonUI gate | `CommonUI_InsideLayout` OnInitialize | `HideLockScreen = not signed in or In_IgnoreLockScreen or NeedRegister` (CUI:533-537); inputs per screen: Login, PINUnlock `IgnoreLockScreen+IgnorePolicy` (Login p:…Login.mvc.js:654; PINUnlock p:…PINUnlock.mvc.js:164), PINRegister `ShowLockScr
- `migration/app-shell.spec.md:23` (Splash): | Home route | `/UBTConnect/HomeFeed` = DefaultScreen; SplashScreen = Splash (knowledge/navigation.md:7). What `/UBTConnect/` shows before sign-in: **unknown, U1** |
- `migration/app-shell.spec.md:38` (Splash): The captures show `--footer-height` as 0/42/56 px, by layout (HF digest.md:4, Menu digest.md:4, Splash digest.md:4).
- `migration/app-shell.spec.md:100` (Splash): | `App_Common.LayoutBlank` | Splash | `.layout.layout-native.blank > .content > .main-content` (Splash dom:8-10) | loading dots, `OfflineDataSyncEvents` (Splash dom:32-65) |
- `migration/app-shell.spec.md:225` (Splash): | PIN at app start | Splash `LoadingDotsAnimationComplete`; `AppManager_AfterInitialize` | Splash: `Set_InitialClientVariables`, `PIN_Check`, cold-start link, signed in + NeedRegister → PINRegister, + NeedUnlock → PINUnlock, else navigate to link or `LastURL` (Splash p:UBTConnect.App_Common.Splash.m
- `migration/app-shell.spec.md:248` (Splash): | `LastURL` (UBTConnect) | Splash OnLoadComplete when no pending navigation (Splash p:429-436); FCM link (UC:2617-2618) | Splash, PINUnlock, PINRegister success |
- `migration/app-shell.spec.md:259` (Splash): | `App_PIN_BiometricEnabled`, `App_PIN_Header_FinalHeightPercentage` | not in captured code (U8) | unlock content (ContentWrapper:1014), Splash (Splash p:159-160) |
- `migration/app-shell.spec.md:304` (Splash): | 6-7 | `UBTConnect/ServiceAPIFetchData_CacheableMapEntities`, `…_CacheableHouseholds` | signed in → async JS after `Connect_SetLoggedContext` (UC:15369-15373, 15514-15519); order between the two varies (HF calls:14-15; Splash calls:10-11) | – | 9806 / 9812 | fictional |
- `migration/app-shell.spec.md:311` (Splash): | `UBTConnect_Utils/CacheControl/CacheControl_Policies/DataActionGetCacheInfo` | unlock content (lock overlay, PINUnlock) | PINUnlock calls:12; Splash calls:12 | recorded |
- `migration/app-shell.spec.md:111` (AppLogo_White): | HomePage | – | `App_Common.AppLogo_White` (`img` 155px wide) | `ConnectPatterns.Icon` + `App_NotificationIcon` | HF dom:16-40 |
- `migration/app-shell.spec.md:124` (BottomBarContent): The block `UBTConnect.App_Common.BottomBarMenu` > `BottomBarContent` > `.bottom-bar-wrapper > .bottom-bar.ph > .list.list-group > a`
- `migration/app-shell.spec.md:124` (BottomBarMenu): The block `UBTConnect.App_Common.BottomBarMenu` > `BottomBarContent` > `.bottom-bar-wrapper > .bottom-bar.ph > .list.list-group > a`
- `migration/app-shell.spec.md:126` (BottomBarMenu): (HF p:UBTConnect.App_Common.BottomBarMenu.mvc.js:462-466).
- `migration/app-shell.spec.md:130` (BottomBarMenu): | home | `connect-icon-home_fill` | Home | `/UBTConnect/HomeFeed` (BottomBarMenu:606-609) | – |
- `migration/app-shell.spec.md:132` (BottomBarMenu): | updates | `connect-icon-list_alt` (inside `App_IconBadge`, `.ubt-badge.background-red`) | Updates | `/UBTConnect/Updates_SingleList` (627-630) | client var `Directory_Updates_UnreadCount`; refreshed on bottom-bar OnReady when older than `…CheckFrequency_Minut` → `ServiceAPIGet_UI_UpdateItems_Unrea
- `migration/app-shell.spec.md:138` (BottomBarMenu): - A second click on the active item of a root page (BottomBarMenu:591-600, 678-679):
- `migration/app-shell.spec.md:142` (BottomBarMenu): is not Home, Directory, Updates, Bookmarks or Menu (BottomBarMenu:678-679).
- `migration/app-shell.spec.md:146` (BottomBarMenu): - BottomBarMenu refreshes it when a parameter changes (BottomBarMenu:543-544).
- `migration/app-shell.spec.md:13` (CommonUI_InsideLayout): | `NH:N` / `CUI:N` | `HF p:NavigationHandler.controller.js:N` / `HF p:UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js:N` |
- `migration/app-shell.spec.md:26` (CommonUI_InsideLayout): | Shell entry block | `UBTConnect.App_Common.CommonUI_InsideLayout`, rendered by 66 screens (survey/shell.md:7; 68 users in survey) |
- `migration/app-shell.spec.md:87` (CommonUI_InsideLayout): - They host `CommonUI_InsideLayout` in their `Placeholder_CommonUI_Inside_Layout`. Connect2 screens are the exception.
- `migration/app-shell.spec.md:229` (CommonUI_InsideLayout): | CommonUI gate | `CommonUI_InsideLayout` OnInitialize | `HideLockScreen = not signed in or In_IgnoreLockScreen or NeedRegister` (CUI:533-537); inputs per screen: Login, PINUnlock `IgnoreLockScreen+IgnorePolicy` (Login p:…Login.mvc.js:654; PINUnlock p:…PINUnlock.mvc.js:164), PINRegister `ShowLockScr
- `migration/app-shell.spec.md:92` (Layout): | Layout block | Build users | Wrapper classes (evidence) | Placeholders → typical content |
- `migration/app-shell.spec.md:101` (Layout): | Connect2 `Layout.Layout` → `BaseLayout_UpdatedOSUI` | MyBookmarks, BookmarksByGroup, MessageList, MessageDetail, ConnectShare, LegacyShareObject | `.backwards-compatibility.connect-theme` > `.layout….aside-overlay.connect-theme` > `.main.screen` (MyBookmarks dom:10-20; BookmarksByGroup dom[offline
- `migration/app-shell.spec.md:103` (Layout): Not built: `App_Common.Layout`. Only InvalidPermissions uses it, and the board marks InvalidPermissions skip:dead
- `migration/app-shell.spec.md:109` (Layout): | Layout | Left | Title | Right | Evidence |
- `migration/app-shell.spec.md:350` (Layout): | U18 | decision | Other native features: keyboard detection, Photobook landscape lock, in-app browser (`OpenInApp_OpenExternalLink`, policies) | Layout classes and link opening | (a) `visualViewport` for keyboard class, no orientation lock, external links in a new tab; **Recommend (a)** |
- `migration/app-shell.spec.md:100` (LayoutBlank): | `App_Common.LayoutBlank` | Splash | `.layout.layout-native.blank > .content > .main-content` (Splash dom:8-10) | loading dots, `OfflineDataSyncEvents` (Splash dom:32-65) |
- `migration/app-shell.spec.md:100` (OfflineDataSyncEvents): | `App_Common.LayoutBlank` | Splash | `.layout.layout-native.blank > .content > .main-content` (Splash dom:8-10) | loading dots, `OfflineDataSyncEvents` (Splash dom:32-65) |
- `migration/app-shell.spec.md:233` (OfflineDataSyncEvents): | Offline sync / network | `OfflineDataSyncEvents`, OSUI `NetworkStatusChanged`, `NetworkDetection` | config SyncOnOnline/Login/Resume True, retry False, 30 s (UC:15168-15180); the sync action itself is empty (UC:15118-15140); online/offline set `App_NetworkStatus_IsOnline_IsPersistent` (UC:15786-15
- `migration/app-shell.spec.md:201` (UnsupportedVersion): - All variants wrap `UnsupportedVersion` (`.unsupported-card`, `WelcomeToConnect`:
- `migration/app-shell.spec.md:202` (UnsupportedVersion): survey:UBTConnect.App_Common.UnsupportedVersion.mvc.js:156, 185).
- `migration/app-shell.spec.md:199` (UnsupportedVersion_Browser): (survey:UBTConnect.App_Common.UnsupportedVersion_Browser.mvc.js:148).
- `migration/app-shell.spec.md:313` (Version): | `UBTConnect/ActionGet_RuntimeVersion` | `App_Common.Version` (Login, Menu) | Login calls; Menu calls:6 | recorded |
- `migration/app-shell.spec.md:201` (WelcomeToConnect): - All variants wrap `UnsupportedVersion` (`.unsupported-card`, `WelcomeToConnect`:
- `migration/app-shell.spec.md:203` (WelcomeToConnect): - `WelcomeToConnect` shows the text "Welcome to" and the image `img.login-screen__connect-logo` (UBTConnect.ConnectLogo.svg)

## change requests

- `migration/change-requests/CR-Login-2.md:1` (Login): # CR-Login-2: shell CommonUiHost — no stand-in on screens that render CommonUI_InsideLayout
- `migration/change-requests/CR-Login-2.md:4` (Login): - Raised by: Login, 2026-10-14
- `migration/change-requests/CR-Login-2.md:8` (Login): (Login renders it in Layout_LoginFlow's Placeholder_CommonUI_Inside_Layout, as the shared Layout_LoginFlow story V2 does)
- `migration/change-requests/CR-Login-2.md:12` (Login): - Captured markup: `migration/screens/Login/analysis/dom/default.html:145-154`: one Dialog_AccessRestrictedAction,
- `migration/change-requests/CR-Login-2.md:27` (Login): parity reports of every Login state until applied.
- `migration/change-requests/CR-Search-1.md:45` (Login): - Regression parity run on: Login, PINUnlock, PINRegister, Splash, HomeFeed, MyEntertaining (see the foundation report).
- `migration/change-requests/CR-F18-1.md:13` (Login): `active-screen screen-container slide-from-right-enter-done` (Login, PINUnlock, EventDetail… captures); the slider is
- `migration/change-requests/CR-F18-1.md:27` (Login): navigateBack None; App_Common ACF:81-84 Login Default; UBTJavaScriptUtils NavigateToPage `getTransitionObject()` → Default.
- `migration/change-requests/CR-Search-1.md:45` (Splash): - Regression parity run on: Login, PINUnlock, PINRegister, Splash, HomeFeed, MyEntertaining (see the foundation report).
- `migration/change-requests/CR-PINUnlock-1.md:1` (Splash): # CR-PINUnlock-1: shell PIN redirect (U3) — also write `UBTConnect.LastURL` as Splash does
- `migration/change-requests/CR-PINUnlock-1.md:5` (Splash): - Block: shell area `app/src/shell/startup.ts` `pinUnlockRedirect` (stand-in for Splash `LoadingDotsAnimationComplete`)
- `migration/change-requests/CR-PINUnlock-1.md:13` (Splash): - Writer in the original: Splash `OnLoadComplete` sets `LastURL` = the loaded href unless a navigation was caught
- `migration/change-requests/CR-PINUnlock-1.md:21` (Splash): (the Splash value; path + search of the current location in the SPA), as Splash `OnLoadComplete` does.
- `migration/change-requests/CR-W3A-1.md:36` (Splash): - Regression parity run on: Login, PINUnlock, PINRegister, Splash, HomeFeed (2026-10-15, after the change; see the
- `migration/change-requests/CR-Services-1.md:17` (Splash): - `app/src/shell/LockHost.tsx` / `paths.ts:33`: the lock block is hidden only on Login, PINUnlock, PINRegister, Splash.
- `migration/change-requests/CR-Services-1.md:44` (Splash): - Regression parity run on: Login, PINUnlock, PINRegister, Splash, HomeFeed, MyEntertaining (see the foundation report).
- `migration/change-requests/CR-HomeFeed-3.md:5` (BottomBarContent): - Block: `App_Common.BottomBarMenu` / `BottomBarContent` / `Navigation.BottomBarItem` (`app/src/shared/UBTConnect/BottomBarMenu`,
- `migration/change-requests/CR-HomeFeed-3.md:6` (BottomBarContent): `BottomBarContent`, `app/src/shared/osui/BottomBarItem`), `App_Common_Blocks.App_IconBadge` / `App_NotificationRefresh`
- `migration/change-requests/CR-F18-1.md:25` (BottomBarMenu): - Compiled transitions: BottomBarMenu.mvc.js:605-671 Default; CommonUI_InsideLayout CUI:427 SlideFromLeft, CUI:460
- `migration/change-requests/CR-HomeFeed-3.md:5` (BottomBarMenu): - Block: `App_Common.BottomBarMenu` / `BottomBarContent` / `Navigation.BottomBarItem` (`app/src/shared/UBTConnect/BottomBarMenu`,
- `migration/change-requests/CR-HomeFeed-3.md:20` (BottomBarMenu): - HomeFeed passes these blocks the captured inputs (`BottomBarMenu id="$b12" activeItem=Home isRootPage`,
- `migration/change-requests/CR-HomeFeed-3.md:38` (BottomBarMenu): UC:2458-2470); BottomBarMenu OnReady now runs once per instance (StrictMode doubled the call); `?mocksession=unlocked`
- `migration/change-requests/CR-HomeFeed-3.md:45` (BottomBarMenu): or JS (OSUI SetBottomBarActiveElement, OutSystemsUI.js:17638-17650, adds only `active`) sets widths. BottomBarMenu v2 test
- `migration/change-requests/CR-Search-3.md:5` (BottomBarMenu): - Block: shell `app/src/shell/userInfo.ts` (`getUserInformation`) or the shared block that calls it on Search (FilterSheet / CacheControl_UserInfo_Wrapper / CommonUI_InsideLayout / BottomBarMenu)
- `migration/change-requests/CR-Login-2.md:1` (CommonUI_InsideLayout): # CR-Login-2: shell CommonUiHost — no stand-in on screens that render CommonUI_InsideLayout
- `migration/change-requests/CR-Login-2.md:7` (CommonUI_InsideLayout): - Other routes using it (catalog/blocks.md): every screen whose layout renders `App_Common.CommonUI_InsideLayout`
- `migration/change-requests/CR-Login-2.md:13` (CommonUI_InsideLayout): inside `CommonUI_InsideLayout` `$b14` (`b14-$b4`); nothing else in `#transitionContainer` but the active screen.
- `migration/change-requests/CR-Login-2.md:17` (CommonUI_InsideLayout): - Shell README (CommonUI_InsideLayout): "this block replaces both per screen", but `CommonUiHost` still mounts its
- `migration/change-requests/CR-Login-2.md:22` (CommonUI_InsideLayout): screen renders `CommonUI_InsideLayout` (for example a registration from the block on mount, or a list of screens whose
- `migration/change-requests/CR-F18-1.md:25` (CommonUI_InsideLayout): - Compiled transitions: BottomBarMenu.mvc.js:605-671 Default; CommonUI_InsideLayout CUI:427 SlideFromLeft, CUI:460
- `migration/change-requests/CR-Services-1.md:32` (CommonUI_InsideLayout): - Inactivity as compiled: `InactivityTimer` (only inside Pincode_Unlock ← Block_PINUnlock ← CommonUI_InsideLayout / PINUnlock)
- `migration/change-requests/CR-Splash-3.md:7` (CommonUI_InsideLayout): - Other routes using it (catalog/blocks.md): every screen without CommonUI_InsideLayout
- `migration/change-requests/CR-W3A-1.md:1` (Layout): # CR-W3A-1: shell (body classes) — Layout.Layout sets the `connect-theme` theme class on the body
- `migration/change-requests/CR-W3A-1.md:5` (Layout): - Block: `Connect2_LegacyShared.Layout.Layout` → `app/src/shared/Connect2_LegacyShared/Layout` (shell area: body classes)
- `migration/change-requests/CR-W3A-1.md:10` (Layout): - Captured markup: every screen using Layout.Layout has `<body class="phone portrait connect-theme osx is-ltr">`
- `migration/change-requests/CR-W3A-1.md:12` (Layout): - Handler: `migration/screens/BookmarksByGroup/analysis/sources/pretty/Connect2_LegacyShared.Layout.Layout.mvc.js`
- `migration/change-requests/CR-W3A-1.md:24` (Layout): Layout.Layout does not touch the body (README "Not ported"); nothing visible is rendered for it.
- `migration/change-requests/CR-W3A-1.md:32` (Layout): screen leaves (Layout.Layout has no OnDestroy). Ported in `app/src/shell/bodyTheme.ts` (`setThemeClassToBody`, test
- `migration/change-requests/CR-W3A-1.md:33` (Layout): `bodyTheme.test.ts`), called by `app/src/shared/Connect2_LegacyShared/Layout/Layout.tsx` at initialization
- `migration/change-requests/CR-W3A-1.md:34` (Layout): (`useLayoutEffect`, OnInitialize `Layout.Layout.mvc.js:415`) with `ThemeClass.Connect` (`connect-theme`). README
- `migration/change-requests/CR-Splash-3.md:1` (LayoutBlank): # CR-Splash-3: shell CommonUI stand-ins — none on a screen whose layout has no CommonUI (Splash / LayoutBlank)
- `migration/change-requests/CR-Splash-3.md:12` (LayoutBlank): and no CommonUI anywhere; Splash's layout `App_Common.LayoutBlank` has no `Placeholder_CommonUI_Inside_Layout`
- `migration/change-requests/CR-Splash-3.md:13` (LayoutBlank): (`sources/pretty/UBTConnect.App_Common.LayoutBlank.mvc.js` view :145-330: LayoutRuntime_Top, Content, OfflineDataSyncEvents only).
- `migration/change-requests/CR-Splash-3.md:23` (LayoutBlank): Splash would then call it from `components/LayoutBlank.tsx`.
- `migration/change-requests/CR-Splash-3.md:33` (LayoutBlank): Splash `components/LayoutBlank.tsx` calls `useNoCommonUi()`. The app-level lock host is unchanged (Splash is in
- `migration/change-requests/CR-Splash-3.md:34` (LayoutBlank): LOCK_SCREEN_IGNORED). Only Splash uses LayoutBlank among live screens (survey). Orchestrator, 2026-10-14.
- `migration/change-requests/CR-Splash-1.md:10` (LayoutBlank): - Captured markup: `migration/screens/Splash/analysis/dom/default.html` lines 5-74: Splash renders `App_Common.LayoutBlank`,
- `migration/change-requests/CR-Splash-3.md:13` (OfflineDataSyncEvents): (`sources/pretty/UBTConnect.App_Common.LayoutBlank.mvc.js` view :145-330: LayoutRuntime_Top, Content, OfflineDataSyncEvents only).
- `migration/change-requests/CR-PINUnlock-2.md:41` (UnsupportedVersion_Wrapper): ExtraLarge, margin x Base, radius Large) > UnsupportedVersion_Wrapper `<s>-$b3` (U16, `?mock=unsupported-browser`).
- `migration/change-requests/CR-Login-3.md:1` (Version): # CR-Login-3: shared Version — one Get_RuntimeVersion per mount (StrictMode)
- `migration/change-requests/CR-Login-3.md:5` (Version): - Block: `UBTConnect.App_Common.Version` → `app/src/shared/UBTConnect/Version/Version.tsx`
- `migration/change-requests/CR-Login-3.md:7` (Version): - Other routes using it (catalog/blocks.md): every route with `App_Common.Version` (Login via Version_LoginWrapper)
- `migration/change-requests/CR-Login-3.md:14` (Version): - Cause: `Version.tsx` calls `get_ConnectVersionDetails()` in a mount `useEffect`; `app/src/main.tsx` renders under
- `migration/change-requests/CR-Login-3.md:18` (Version): The Version block fetches through TanStack Query (P-DATA; one in-flight query is shared by the StrictMode double mount)
- `migration/change-requests/CR-Login-4.md:1` (Version): # CR-Login-4: shell/shared Version — environment word in the version text
- `migration/change-requests/CR-Login-4.md:5` (Version): - Block: `UBTConnect.App_Common.Version` → `app/src/shared/UBTConnect/Version/Version.tsx` and the shell session
- `migration/change-requests/CR-Login-4.md:8` (Version): - Other routes using it (catalog/blocks.md): every route with `App_Common.Version` (Login via Version_LoginWrapper)
- `migration/change-requests/CR-Login-3.md:7` (Version_LoginWrapper): - Other routes using it (catalog/blocks.md): every route with `App_Common.Version` (Login via Version_LoginWrapper)
- `migration/change-requests/CR-Login-4.md:8` (Version_LoginWrapper): - Other routes using it (catalog/blocks.md): every route with `App_Common.Version` (Login via Version_LoginWrapper)
- `migration/change-requests/CR-Login-4.md:16` (Version_LoginWrapper): - Parity difference it explains: `[position] … div#$b9…[App_Common.Version_LoginWrapper] > … > div.text-inherit > span:

## ADRs (stack.md)

- `app/docs/reference/stack.md:117` (Splash): | ADR-6 | GSAP 3.13.0 for the Splash logo animation | accepted | 2026-10-14 |
- `app/docs/reference/stack.md:159` (Splash): ### ADR-6: GSAP 3.13.0 for the Splash logo animation
- `app/docs/reference/stack.md:161` (Splash): - Context: Splash (LoadingDots) animates its logo path with GSAP + MorphSVGPlugin; TST ships GSAPSVGAnimations.gsap_min.js and MorphSVGPlugin_min.js, both 3.13.0 (file headers, 2026-10-14). The npm package gsap@3.13.0 (2025-04-30) includes MorphSVGPlugin.
- `app/docs/reference/stack.md:162` (Splash): - Decision: Add gsap 3.13.0 (same version as TST) to the allow-list; Splash animates the path as compiled (user, 2026-10-14, Splash Q1).
- `app/docs/reference/stack.md:163` (Splash): - Consequences: One more runtime dependency; used only by the Splash/LoadingDots route code. Version follows TST (rule: libraries the original ships keep the TST version).
- `app/docs/reference/stack.md:222` (BottomBarMenu): - P3-2 (decision Q11, auto-accepted under the user's delegation, 2026-10-22): story files (`*.stories.tsx`) and test files (`*.test.ts`, `*.test.tsx`) are outside the cycle rule and every folder rule in `app/.dependency-cruiser.cjs` (constant `STORY_OR_TEST`). Reason: the cycle came only from 8 UBTC
- `app/docs/reference/stack.md:55` (Version): | Package | Version |
- `app/docs/reference/stack.md:139` (Version): - Consequences: The foundation owner adapts scaffold_react_app.py output to the new majors once (router, MSW, test setup). Version list needs the user's acceptance before dep add.
- `app/docs/reference/stack.md:163` (Version): - Consequences: One more runtime dependency; used only by the Splash/LoadingDots route code. Version follows TST (rule: libraries the original ships keep the TST version).

## knowledge

- `migration/knowledge/shell-facts.md:4` (InvalidPermissions): - U1: no route table in local code. Protected screens call `checkRegistered`; the App_Common handler sends a signed-out user to `Login?In_IsFromInvalidPermissions=True`. Nothing navigates to InvalidPermissions.
- `migration/knowledge/shell-facts.md:14` (InvalidPermissions): - Gate: 74 UBTConnect screens use `checkPermissions = OS.RolesInfo.checkRegistered()` (for example `HF p:UBTConnect.Home.HomeFeed.mvc.js:1069-1071`). 9 have an empty check: Splash (SPL:577), Login, InvalidPermissions, PINBiometricsMenu, ContactUsMenu, ContactUsDetails, Locality_Details, MessageList,
- `migration/knowledge/shell-facts.md:20` (InvalidPermissions): - InvalidPermissions: no code navigates to it. Content: title "Invalid Permissions". A warning BlankSlate with "You don't have permissions to view the required screen.". A button to `/UBTConnect/Login` (survey:UBTConnect.App_Common.InvalidPermissions.mvc.js:163-165, 201-213).
- `migration/knowledge/shell-facts.md:67` (InvalidPermissions): 5. Anything else is re-thrown to `OS.ErrorHandling.handleError`, the runtime default (107-114). No NotRegistered branch, no InvalidPermissions navigation.
- `migration/knowledge/navigation.md:41` (InvalidPermissions): - Screens with the Anonymous role: ContactUsDetails, ContactUsMenu, InvalidPermissions, Locality_Details, Login,
- `migration/knowledge/shell-facts.md:4` (Login): - U1: no route table in local code. Protected screens call `checkRegistered`; the App_Common handler sends a signed-out user to `Login?In_IsFromInvalidPermissions=True`. Nothing navigates to InvalidPermissions.
- `migration/knowledge/shell-facts.md:14` (Login): - Gate: 74 UBTConnect screens use `checkPermissions = OS.RolesInfo.checkRegistered()` (for example `HF p:UBTConnect.Home.HomeFeed.mvc.js:1069-1071`). 9 have an empty check: Splash (SPL:577), Login, InvalidPermissions, PINBiometricsMenu, ContactUsMenu, ContactUsDetails, Locality_Details, MessageList,
- `migration/knowledge/shell-facts.md:17` (Login): - Its SecurityException branch (ACF:61-89) checks `GetUserId() = NullIdentifier`. If true, `AppManager_SetAppCallback_CurrentLocation` sets `OutSystems_LastURL = window.location.pathname` (AM:4250-4259, 4286-4290), then the app navigates to `/UBTConnect/Login?In_IsFromInvalidPermissions=True` (ACF:7
- `migration/knowledge/shell-facts.md:18` (Login): - Login with that flag skips `AppManager_SetAppCallback("")`, so the protected path stays as the sign-in callback (`migration/screens/Login/analysis/sources/pretty/UBTConnect.App_Common.Login.mvc.js:950-953`).
- `migration/knowledge/shell-facts.md:20` (Login): - InvalidPermissions: no code navigates to it. Content: title "Invalid Permissions". A warning BlankSlate with "You don't have permissions to view the required screen.". A button to `/UBTConnect/Login` (survey:UBTConnect.App_Common.InvalidPermissions.mvc.js:163-165, 201-213).
- `migration/knowledge/shell-facts.md:65` (Login): 3. `SecurityException`: signed in → `ShowExceptionMessage(msg, ForceLogout=True)`; anonymous → Login as in U1 (62-89).
- `migration/knowledge/shell-facts.md:74` (Login): - End (16444-16452): `FeedbackMessage_AutoClose(title, msg, type, True, "", HasTimeout ? 500 : 0, HasDebounce)`. If `ForceLogout`: `Connect_Logout`, then `JSUtils_PageRedirect("\UBTConnect\Login")`, a full page load (JSU:2234-2240).
- `migration/knowledge/navigation.md:35` (Login): - ConnectShare forwards to AcceptPendingPolicies, ContactUsMenu, FeedItemDetail, HomeFeed, HouseholdDetails, Login,
- `migration/knowledge/shell-facts.md:5` (Splash): - U3: Splash is anonymous. No app code writes `HasRenderedSplashInSession`: it is a runtime sessionStorage key, not a client variable. After loading, Splash goes to PINRegister, PINUnlock, the cold-start link or `LastURL`.
- `migration/knowledge/shell-facts.md:10` (Splash): Keys: `AM`/`UC` = `migration/screens/HomeFeed/analysis/sources/raw/UBT_AppManager.controller.js` / `UBTConnect.controller.js`; `SPL` = `migration/screens/Splash/analysis/sources/pretty/UBTConnect.App_Common.Splash.mvc.js`, `ALE` = same folder `OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc.js`;
- `migration/knowledge/shell-facts.md:14` (Splash): - Gate: 74 UBTConnect screens use `checkPermissions = OS.RolesInfo.checkRegistered()` (for example `HF p:UBTConnect.Home.HomeFeed.mvc.js:1069-1071`). 9 have an empty check: Splash (SPL:577), Login, InvalidPermissions, PINBiometricsMenu, ContactUsMenu, ContactUsDetails, Locality_Details, MessageList,
- `migration/knowledge/shell-facts.md:23` (Splash): - Does `/UBTConnect/` render Splash first? See U3.
- `migration/knowledge/shell-facts.md:26` (Splash): ## U3: Splash and `HasRenderedSplashInSession`
- `migration/knowledge/shell-facts.md:27` (Splash): - What it is: sessionStorage key `$OS_UBTConnect$HasRenderedSplashInSession`, next to the runtime keys `$OS_UBTConnect$UpgradeStatus` and `…$RouterHistoryAge` (`migration/screens/Splash/analysis/facts.json:105-110, 4107-4125`). Client variables use another format, `$OS_Users$<Module>$ClientVars$<Nam
- `migration/knowledge/shell-facts.md:30` (Splash): - When it renders: Splash is anonymous (SPL:577) and no code navigates to `/UBTConnect/Splash` (survey grep). The runtime shows it as the module SplashScreen (navigation.md:7); its handlers have no sign-in gate. Not determinable here: once per tab or on every full load, and before or after the AM re
- `migration/knowledge/shell-facts.md:40` (Splash): - Splash errors go to App_Common (SPL:575).
- `migration/knowledge/navigation.md:20` (BottomBarMenu): - Two orphan `Destination Notes` nodes in `App_Common.BottomBarMenu.Event_BottomBar_Clicked`.
- `migration/knowledge/audit-a1-empty-handlers.md:69` (OfflineDataSyncEvents): | `shared/osui/OfflineDataSyncCore`, `shared/UBTConnect/OfflineDataSyncEvents` | sync events | sync engine not ported; UBTConnect's sync action is empty (spec 12a) |
- `migration/knowledge/audit-a1-empty-handlers.md:66` (UnsupportedVersion_Native): | `shared/UBTConnect/UnsupportedVersion_Native`, `_WebView` | Event_NavigateToPlaystore | store app only (decision U16) |
- `migration/knowledge/stack-baseline.md:16` (Version): | Package | Version | Note |

## flags

- `migration/flags.md:39` (InvalidPermissions): | `action:onToggleMenu` (gone) (candidate) | flag check action | InvalidPermissions | - | open | - | **open** |
- `migration/flags.md:127` (BottomBarMenu): - `action:connect_LaunchDarkly_PermissionCheck`: `UBTConnect.App_Common.BottomBarMenu.mvc.js`, `UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc.js`, `UBTConnect.controller.js`, `UBTConnect_Utils.controller.js`
- `migration/flags.md:137` (BottomBarMenu): - `action:getHasC1DirectoryView`: `UBTConnect.App_Common.BottomBarMenu.mvc.js`, `UBTConnect.Directory_Locality.Locality_Details.mvc.js`
- `migration/flags.md:144` (BottomBarMenu): - `action:getHasNewBookmarks`: `UBTConnect.App_Common.BottomBarMenu.mvc.js`, `UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js`, `UBTConnect.Directory_Locality.Locality_Households_HouseholdList.mvc.js`
- `migration/flags.md:209` (BottomBarMenu): - `launchDarkly_FF.mobileDirectoryBookmarkNote`: `UBTConnect.App_Common.BottomBarMenu.mvc.js`, `UBTConnect_Utils.controller.js`
- `migration/flags.md:199` (Layout): - `action:toggleSideMenu`: `Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc.js`, `UBTConnect.App_Common.MenuIcon.mvc.js`
- `migration/flags.md:172` (MenuIcon): - `action:onToggleMenu`: `UBTConnect.App_Common.MenuIcon.mvc.js`
- `migration/flags.md:199` (MenuIcon): - `action:toggleSideMenu`: `Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc.js`, `UBTConnect.App_Common.MenuIcon.mvc.js`

## parity exemptions

- `migration/parity-exemptions.json:2` (Login): "_comment": "Accepted parity differences, decided by the user. Every entry has an id, a reason and evidence; the parity report counts how often each fires. Login entries: Q6 answered by the user (2026-10-14), migration/screens/Login/questions.json. PINUnlock entries (*-PINCODE): Q3 answered by the u
- `migration/parity-exemptions.json:8` (Login): "evidence": "migration/screens/Login/analysis/sources/pretty/UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc.js:202; migration/screens/Login/parity/default.expected.png vs default.build.png; Login Q6"
- `migration/parity-exemptions.json:14` (Login): "evidence": "migration/screens/Login/analysis/dom/default.html:53 (data-rendered-size=\"209x33\"); Login Q6"
- `migration/parity-exemptions.json:19` (Login): "reason": "The HomeFeed header logo is a broken image in the replayed reference (live capture 155x25); masked in DOM and pixel comparison, as CAPTURE-LOGO-REPLAY for Login.",
- `migration/parity-exemptions.json:161` (Login): "evidence": "migration/screens/Login/analysis/dom/default.html:53; migration/screens/Login/parity/default.json; Login Q6"
- `migration/parity-exemptions.json:170` (Login): "evidence": "migration/screens/Login/analysis/dom/default.html:93; Login Q6",
- `migration/parity-exemptions.json:183` (Login): "evidence": "migration/screens/Login/analysis/dom/loading.html:1, offline.html:1 vs default.html:1; Login Q6"
- `migration/parity-exemptions.json:193` (Login): "evidence": "migration/screens/Login/analysis/dom/loading.html:4, offline.html:4 vs default.html:4; Login Q6"
- `migration/parity-exemptions.json:239` (Splash): "reason": "The Splash capture is a mid-animation snapshot (GSAP matrix on the path, fall-expand phase, ~10 s into a slow TST load); the clone is photographed at another point of the 1.5 s + 1.2 s + 3 s timeline (user, 2026-10-14, Splash decisions)",
- `migration/parity-exemptions.json:240` (Splash): "evidence": "migration/screens/Splash/analysis/dom/default.html:13-48; LoadingDots.mvc.js:617-692"
- `migration/parity-exemptions.json:18` (AppLogo_White): "blockRegex": "^App_Common\\.AppLogo_White$",
- `migration/parity-exemptions.json:248` (AppLogo_White): "pathRegex": "div#b1-Placeholder_Header_Title\\.OSInline( > div#\\$b2\\.OSBlockWidget\\[App_Common\\.AppLogo_White\\]( > img)?)?$",
- `migration/parity-exemptions.json:257` (BottomBarContent): "pathRegex": "a\\.skip-nav$|Placeholder_LoadingSection > a( > .*)?$|\\[App_Common\\.BottomBarContent\\] > .* > a(\\.active)?( > .*)?$",
- `migration/parity-exemptions.json:360` (Layout): "pathRegex": "\\[Layout\\.MenuIcon_Back\\] > div#[^ >]*\\.app-menu-icon\\.back > a#[^ >]*\\.OSFillParent\\.app-menu-back( > i#[^ >]*\\.fa\\.fa-1x\\.fa-arrow-left)?$",
- `migration/parity-exemptions.json:442` (Layout): "reason": "Layout side of CAPTURE-LOADING-FETCH-TIMEOUT-COUNTRYDETAILS: the clone's loading skeleton cards make the content taller than the timed-out capture (ancestors of the masked container grow, the closed bottom sheets move by the 3 px page overflow). auto-accepted in the user's auto mode 2026-
- `migration/parity-exemptions.json:855` (Layout): "reason": "The capture serializer keeps only the attributes of KEEP_ATTR (.claude/skills/outsystems-screen-spec/scripts/capture.js:285), which drops `rows` (and `maxlength`) of the ContactByEmailForm text areas, so the replayed reference shows both at the browser default rows=2 (60 px). TST renders 
- `migration/parity-exemptions.json:1498` (Layout): "reason": "Masked text, not a build defect: the bottom sheet is a screen-level sibling of the Layout, outside .backwards-compatibility, so ':where(.backwards-compatibility) .landing-country-list-item {display:inline-flex; width:100%}' (Connect2_LegacyShared.ConnectMobileCommonTheme.css) does not app
- `migration/parity-exemptions.json:828` (Version): "pathRegex": "div#b11-Content\\.display-flex\\.font-size-xxs\\.justify-content-center > div#\\$b12\\.OSBlockWidget\\[App_Common\\.Version\\]$",
- `migration/parity-exemptions.json:1604` (Version): "reason": "The Version block's OnReady Get_RuntimeVersion starts while the app-start chain runs: on TST it went out before AfterInitialize (4470 ms vs 6814 ms), the clone's shell calls AfterInitialize right after SynchAppContext, before the lazily loaded screen mounts. Its place among the app-start 
- `migration/parity-exemptions.json:159` (WelcomeToConnect): "pathRegex": "\\[App_Common\\.WelcomeToConnect\\]( > .+)?$|div\\.connect-login-card__content > div$",
- `migration/parity-exemptions.json:160` (WelcomeToConnect): "reason": "Sizes and offsets that follow from the logo replay: WelcomeToConnect and its children are sized by the 16x16 broken image in the reference, and the card content is centred, so the block and the buttons below it move (48,48 -> 48,40; 48,222 -> 48,229).",

## Decision ids on the board rows of the flow's screens

D3, D3(a, V1
