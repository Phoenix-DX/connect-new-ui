### migration/app-shell.spec.md

**Change 1**

Before:

> Status: draft for review (2026-10-14). Source of truth: TST captures and TST compiled code. Nothing here is decided by
> the author; every open point is in section 12. Values of client variables, tokens and test-account data are never quoted.
> 
> **Citation key** (line numbers are 1-based in the named file):

After:

> Status: draft for review (2026-10-14). Source of truth: TST captures and TST compiled code. The author decides nothing in this
> spec. Every open point is in section 12. The spec never quotes the values of client variables, tokens and test-account data.
> 
> **Citation key.** Line numbers are 1-based in the named file:

**Change 2**

Before:

> - `<html>`: no class, no style (HF capture env `htmlClass`, `htmlStyle`). `<body>` classes are runtime device classes:
>   `phone portrait osx is-ltr` (HF digest.md:4). Connect2 module screens add `connect-theme` (MyBookmarks, BookmarksByGroup,
>   MessageList, MessageDetail, ConnectShare, LegacyShareObject digests:4); PINRegister, PINChange, Photobook were captured
>   without `osx` (their digest.md:4). React sets the same classes from the device (`phone`/`portrait`/OS/`is-ltr`).
> - `<body style>` is set at runtime: `--viewport-height` (844px), `--header-size-content`, `--footer-height` (0/42/56 px
>   measured per layout: HF digest.md:4, Menu digest.md:4, Splash digest.md:4).
> - Root containers (HF dom:1-4, 1185):

After:

> - `<html>` has no class and no style (HF capture env `htmlClass`, `htmlStyle`).
> - The runtime sets the `<body>` classes from the device: `phone portrait osx is-ltr` (HF digest.md:4).
>   - Connect2 module screens add `connect-theme` (MyBookmarks, BookmarksByGroup, MessageList, MessageDetail, ConnectShare,
>     LegacyShareObject digests:4).
>   - The captures of PINRegister, PINChange and Photobook have no `osx` (their digest.md:4).
>   - The React app sets the same classes from the device (`phone`/`portrait`/OS/`is-ltr`).
> - The runtime sets `<body style>`. It contains `--viewport-height` (844px), `--header-size-content` and `--footer-height`.
>   The captures show `--footer-height` as 0/42/56 px, by layout (HF digest.md:4, Menu digest.md:4, Splash digest.md:4).
> - Root containers (HF dom:1-4, 1185):

**Change 3**

Before:

> - Screen transitions use OutSystems classes (`slide-from-right-enter-done`: Login dom:4; `.slide-from-left-enter-active`,
>   `.fade-leave`: HF css:1216, 1244); `--dx-screen-transition-duration: 300ms` (HF css:1316).
> - Stylesheets in load order, served unchanged (`public/os-legacy.css`, architecture.md "Styling"): `_Basic.css`,
>   `OutSystemsReactWidgets.css`, `UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.css`, `UBT_AppManager.PIN.PinCode.css`,
>   `UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.css`, `OutSystemsUI_2_23.OutSystemsUI.css`,
>   `UBTConnectLibrary.UBTConnectBase.css`, `UBTConnectLibrary.UBTConnectLibrary.css`, `Connect2_LegacyShared.UBTConnect.css`,
>   `OutSystemsUI_2_23.OutSystemsUI.extra.css` (HF css:5-14).
> - Fonts/assets: Inter variable (normal + italic), `connect-icon.ttf/.woff` (icon font, `@font-face` at HF bundle:20441),
>   `fontawesome-webfont.woff2/.woff`, logo `img/UBTConnect.ConnectLogoWhite.svg` (HF capture `assets`).
> - Theme tokens: two `:root` layers; the later `:root, .connect-legacy-compatibily-containter` layer wins (HF css:1159-1161).
>   Resolved: `--color-primary` = `var(--color-cyan-dark)` = `#00819C`; `--color-cyan` `#4EAEC2`; `--color-neutral-0` `#ffffff`;
>   `--bottom-bar-size` 56px; `--header-size` 56px (58px in `.ubt-layout-home`, 103px in `.ubt-layout-main`); `--space-base`
>   16px; `--font-size-base` 1rem; `--message-autoclose-duration` 5000ms (HF css:1266-1353, 240; HF bundle:20374).

After:

> - A screen transition uses OutSystems classes (`slide-from-right-enter-done`: Login dom:4; `.slide-from-left-enter-active`,
>   `.fade-leave`: HF css:1216, 1244). The duration is `--dx-screen-transition-duration: 300ms` (HF css:1316).
> - The React app serves the stylesheets unchanged (`public/os-legacy.css`, architecture.md "Styling"). The load order is:
>   - `_Basic.css`
>   - `OutSystemsReactWidgets.css`
>   - `UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.css`
>   - `UBT_AppManager.PIN.PinCode.css`
>   - `UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.css`
>   - `OutSystemsUI_2_23.OutSystemsUI.css`
>   - `UBTConnectLibrary.UBTConnectBase.css`
>   - `UBTConnectLibrary.UBTConnectLibrary.css`
>   - `Connect2_LegacyShared.UBTConnect.css`
>   - `OutSystemsUI_2_23.OutSystemsUI.extra.css` (HF css:5-14)
> - Fonts/assets:
>   - Inter variable (normal and italic).
>   - `connect-icon.ttf/.woff` (icon font, `@font-face` at HF bundle:20441).
>   - `fontawesome-webfont.woff2/.woff`.
>   - The logo `img/UBTConnect.ConnectLogoWhite.svg` (HF capture `assets`).
> - Theme tokens: there are two `:root` layers. The later layer `:root, .connect-legacy-compatibily-containter` wins
>   (HF css:1159-1161).
> - The resolved values are (HF css:1266-1353, 240; HF bundle:20374):
>   - `--color-primary` = `var(--color-cyan-dark)` = `#00819C`.
>   - `--color-cyan` `#4EAEC2`.
>   - `--color-neutral-0` `#ffffff`.
>   - `--bottom-bar-size` 56px.
>   - `--header-size` 56px (58px in `.ubt-layout-home`, 103px in `.ubt-layout-main`).
>   - `--space-base` 16px.
>   - `--font-size-base` 1rem.
>   - `--message-autoclose-duration` 5000ms.

**Change 4**

Before:

> All layouts start with `LayoutRuntime_NavigationHandler.LayoutRuntime_Top` (back-navigation queue, section 9) and, except
> Connect2 screens, host `CommonUI_InsideLayout` in their `Placeholder_CommonUI_Inside_Layout`. The blocks are built from
> the foundation queue (catalog/foundation-queue.md); the shell provides the wrapper contract below.

After:

> All layouts have two parts in common:
> 
> - They start with `LayoutRuntime_NavigationHandler.LayoutRuntime_Top` (back-navigation queue, section 9).
> - They host `CommonUI_InsideLayout` in their `Placeholder_CommonUI_Inside_Layout`. Connect2 screens are the exception.
> 
> The project builds the blocks from the foundation queue (catalog/foundation-queue.md). The shell provides the wrapper
> contract below.

**Change 5**

Before:

> Not built: `App_Common.Layout` (only InvalidPermissions, skip:dead, board.md). Pull-to-refresh is a layout input
> (`UsePullToRefresh`, HF digest.md:256) and `OutSystemsUI_2_23.Private.PullToRefresh` is used inside 6 layouts (survey).

After:

> Not built: `App_Common.Layout`. Only InvalidPermissions uses it, and the board marks InvalidPermissions skip:dead
> (survey/routes.md:78; board.md:66). Pull-to-refresh is a layout input (`UsePullToRefresh`, HF digest.md:256). The survey shows that 6 layouts
> use `OutSystemsUI_2_23.Private.PullToRefresh`.

**Change 6**

Before:

> Bell (`App_Common_Blocks.App_NotificationIcon`): badge `App_IconBadge` (max 9), `isLoading = not Notifications_IsSynched`;
> count = `GetUnreadNotificationNumber` (local, filled by the app-start call `GetNumberUnreadMessages`); click → flag
> `C2NewNotifications` ? `/UBTConnect/Notifications` : `/UBTConnect/MessageList` (HF p:UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc.js:139, 176, 249-259, 287-291).

After:

> The bell is the block `App_Common_Blocks.App_NotificationIcon` (HF p:UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc.js:139, 176,
> 249-259, 287-291):
> 
> - The badge is `App_IconBadge` (max 9). `isLoading = not Notifications_IsSynched`.
> - The count is `GetUnreadNotificationNumber`. It is local. The app-start call `GetNumberUnreadMessages` fills it.
> - A click opens `/UBTConnect/Notifications` when the flag `C2NewNotifications` is on. Otherwise it opens `/UBTConnect/MessageList`.

**Change 7**

Before:

> Block `UBTConnect.App_Common.BottomBarMenu` > `BottomBarContent` > `.bottom-bar-wrapper > .bottom-bar.ph > .list.list-group > a`
> (HF dom:951-1098). Items from `BottomBar_GetList(useMapsItems, isHouseholder)` (HF p:UBTConnect.App_Common.BottomBarMenu.mvc.js:462-466).

After:

> The block `UBTConnect.App_Common.BottomBarMenu` > `BottomBarContent` > `.bottom-bar-wrapper > .bottom-bar.ph > .list.list-group > a`
> (HF dom:951-1098) renders the bottom bar. The items come from `BottomBar_GetList(useMapsItems, isHouseholder)`
> (HF p:UBTConnect.App_Common.BottomBarMenu.mvc.js:462-466).

**Change 8**

Before:

> - Active item: input `ActiveItem`; active `<a class="active">`, icon/text `text-primary`, others `text-neutral-6`,
>   label `font-size-xs` (HF dom:956-1090).
> - Re-tap on the active item of a root page: bookmarks → `ScrollTop(".layout .content","instant")`, others →
>   `ScrollTop(".active-screen","instant")`; then event `BottomBar_Clicked` (BottomBarMenu:591-600, 678-679).
> - Slider: sibling `.dx-bottom-bar-slider` in `#transitionContainer` with `--dx-bottom-bar-items` /
>   `--dx-bottom-bar-active-item` (HF dom:1185; CSS HF css:1211-1218), installed at app start
>   (`OnApplicationReady_BottomBarSlider`, UC:15326) and refreshed on parameter change (BottomBarMenu:543-544). Hidden while
>   the mobile keyboard is open (`.dx-mobile-keyboard-visible`, HF css:1218; installed at UC:15329).

After:

> - The input `ActiveItem` sets the active item. The active item has `<a class="active">`. The icon/text of the active item has
>   `text-primary`. The other items have `text-neutral-6`. The label has `font-size-xs` (HF dom:956-1090).
> - A second click on the active item of a root page (BottomBarMenu:591-600, 678-679):
>   - For bookmarks, the block runs `ScrollTop(".layout .content","instant")`.
>   - For the other items, the block runs `ScrollTop(".active-screen","instant")`.
>   - Then the block raises the event `BottomBar_Clicked`.
> - Slider: the sibling `.dx-bottom-bar-slider` is in `#transitionContainer`. It has `--dx-bottom-bar-items` /
>   `--dx-bottom-bar-active-item` (HF dom:1185; CSS HF css:1211-1218).
>   - `OnApplicationReady_BottomBarSlider` installs it at app start (UC:15326).
>   - BottomBarMenu refreshes it when a parameter changes (BottomBarMenu:543-544).
>   - The CSS hides it while the mobile keyboard is open (`.dx-mobile-keyboard-visible`, HF css:1218).
>   - The app-start code installs the code for the mobile keyboard (UC:15329, section 9).

**Change 9**

Before:

> None. There is no side menu; "Menu" is a screen reached from the bottom bar. OSUI `Sidebar` is used only by Map (skipped)
> (survey/osui.md:57; board.md).

After:

> None. The app has no side menu. "Menu" is a screen. The user reaches it from the bottom bar. Only Map uses OSUI `Sidebar`, and the
> project skips Map (survey/osui.md:57; board.md).

**Change 10**

Before:

> Two kinds, both rendered in `#feedbackMessageContainer` before `#reactContainer`, `position:fixed; top:0; z-index:10000`,
> full width on phone (HF bundle:220, 4453):

After:

> There are two kinds of message. Both kinds render in `#feedbackMessageContainer` before `#reactContainer`. The container has
> `position:fixed; top:0; z-index:10000` and the full width on phone (HF bundle:220, 4453):

**Change 11**

Before:

> Auto-close: animation `feedbackMessageSlideDownThenUpPhone`, duration `var(--message-autoclose-duration)` = 5000 ms
> (HF bundle:4460, 23078, 20374). Types: info/success/warning/error colours (HF bundle:243-258, 23122).
> 
> Shared message helpers the shell must expose (same texts):

After:

> Auto-close uses the animation `feedbackMessageSlideDownThenUpPhone`. The duration is `var(--message-autoclose-duration)` = 5000 ms
> (HF bundle:4460, 23078, 20374). The types have the colours info/success/warning/error (HF bundle:243-258, 23122).
> 
> The shell must expose these shared message helpers, with the same texts:

**Change 12**

Before:

> React design: `useFeedback().show({title?, message, type, autoClose, delayMs})` in `src/shell/feedback`, one container,
> markup as above (P-DIALOG). Open points: U9, U10.

After:

> React design: the shell has one container. The hook `useFeedback().show({title?, message, type, autoClose, delayMs})` in
> `src/shell/feedback` shows a message. The markup is as above (P-DIALOG). Open points: U9, U10.

**Change 13**

Before:

> Route-level dialogs (built with their routes, using the same dialog API): `Dialog_GoExternalApp` (HomeFeed services),
> `NavigationConfirmationDialog` via `Dialog_Navigation` (email forms), `Dialog_CustomChoice` (Menu) (survey counts).

After:

> Route-level dialogs use the same dialog API. The project builds each dialog with its route (survey counts):
> 
> - `Dialog_GoExternalApp` (HomeFeed services).
> - `NavigationConfirmationDialog` via `Dialog_Navigation` (email forms).
> - `Dialog_CustomChoice` (Menu).

**Change 14**

Before:

> - Lock screen overlay and unsupported-version card: section 7 and 9. Unsupported card texts: browser "We have noticed you
>   are using an unsupported browser version. … We recommend you upgrade to the latest version." (survey:UBTConnect.App_Common.UnsupportedVersion_Browser.mvc.js:148);
>   WebView and native variants (survey:…_WebView.mvc.js:161; survey:…_Native.mvc.js:166); all wrap `UnsupportedVersion`
>   (`.unsupported-card`, `WelcomeToConnect`: survey:UBTConnect.App_Common.UnsupportedVersion.mvc.js:156, 185).
> - `WelcomeToConnect`: "Welcome to" + `img.login-screen__connect-logo` (UBTConnect.ConnectLogo.svg) (Login dom:43-50).
> - Skeletons: loading and offline captures render `ConnectPatterns.SkeletonSection` with class `ubt-skeleton-section`
>   (HF dom[offline] vs dom: diff of `#…-Placeholder_LoadingSection`). No network banner is rendered by the shell in any
>   capture; offline feedback is a toast (section 6).
> - Spinner / blank slate: route level (`ButtonLoading`, `BlankSlate`: survey/osui.md:34, 42).

After:

> - Sections 7 and 9 describe the lock screen overlay and the unsupported-version card.
> - Texts of the unsupported card:
>   - Browser: "We have noticed you are using an unsupported browser version. … We recommend you upgrade to the latest version."
>     (survey:UBTConnect.App_Common.UnsupportedVersion_Browser.mvc.js:148).
>   - WebView and native variants (survey:…_WebView.mvc.js:161; survey:…_Native.mvc.js:166).
>   - All variants wrap `UnsupportedVersion` (`.unsupported-card`, `WelcomeToConnect`:
>     survey:UBTConnect.App_Common.UnsupportedVersion.mvc.js:156, 185).
> - `WelcomeToConnect` shows the text "Welcome to" and the image `img.login-screen__connect-logo` (UBTConnect.ConnectLogo.svg)
>   (Login dom:43-50).
> - Skeletons: the loading and offline captures render `ConnectPatterns.SkeletonSection` with the class `ubt-skeleton-section`
>   (HF dom[offline] vs dom: diff of `#…-Placeholder_LoadingSection`). In no capture does the shell render a network banner.
>   Offline feedback is a toast (section 6).
> - Spinner and blank slate are route-level parts (`ButtonLoading`, `BlankSlate`: survey/osui.md:34, 42).

**Change 15**

Before:

> Phase column: **build** = implement now in `src/shell` with mocks; **mock** = behaviour faked (no real backend/IdP);
> **later** = production integration, not in the mock phase.

After:

> The Phase column uses three labels:
> 
> - **build**: implement now in `src/shell` with mocks.
> - **mock**: the app fakes the behavior (no real backend/IdP).
> - **later**: production integration, not in the mock phase.

**Change 16**

Before:

> React: one typed `ClientVars` context; mock-phase persistence per U5. Tokens and person data are never stored in the
> browser (architecture.md "Tokens and personal data in the browser").

After:

> React design: one typed `ClientVars` context. The mock-phase persistence follows U5. The app never stores tokens and person data
> in the browser (architecture.md "Tokens and personal data in the browser").

**Change 17**

Before:

> - Identity: Azure B2C (`AzureB2C_ClientId`, `AzureB2C_LoginPolicy`, `AzureB2C_ResetPassPolicy`, `Embedd_B2CTenant`);
>   `FrontEgg_AppId` (empty in the TST shape, HF calls:39-41); Streamline TOTP (`Streamline_TOTPOnLogin`) (HF security.md:32-41).
>   The IdP response becomes the OutSystems session in `/UBT_AppManager/Callback` → `ActionAppManager_Login` (knowledge/auth.md:10-11).
> - Session: HttpOnly cookies not visible (check manually); JS cookies `ai_user`, `nr2Users`, `ai_session`; request headers
>   include `x-csrftoken` and `outsystems-request-token` (HF security.md:6-10).
> - Browser storage in the original: tokens (`Firebase_CloudMessage_Token`, `Firebase_RealtimeDatabase_Token`,
>   `ConnectionString`) and the **local PIN** (`AppManager_LocalStorageKey_Pin`) in localStorage; identity and permissions
>   copies (HF security.md:25-71; writers :135-158).
> - Lock/PIN: a client gate; `PIN_IsLocked` reset to False at every start, `PIN_HasUnlocked` reset per new tab session
>   (AM:2878-2891). Whether the server refuses calls while locked: U20.
> - Document headers: CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy missing; HSTS set (HF security.md:13-19).
> - React (decided): tokens server-side later (BFF + HttpOnly cookie); mock phase fakes sign-in, session, PIN, flags.

After:

> - Identity:
>   - Azure B2C (`AzureB2C_ClientId`, `AzureB2C_LoginPolicy`, `AzureB2C_ResetPassPolicy`, `Embedd_B2CTenant`).
>   - `FrontEgg_AppId` (empty in the TST shape, HF calls:39-41).
>   - Streamline TOTP (`Streamline_TOTPOnLogin`) (HF security.md:32-41).
>   - In `/UBT_AppManager/Callback` → `ActionAppManager_Login`, the IdP response becomes the OutSystems session
>     (knowledge/auth.md:10-11).
> - Session:
>   - HttpOnly cookies are not visible. Check them manually.
>   - JS cookies: `ai_user`, `nr2Users`, `ai_session`.
>   - The request headers include `x-csrftoken` and `outsystems-request-token` (HF security.md:6-10).
> - Browser storage in the original app:
>   - localStorage holds the tokens (`Firebase_CloudMessage_Token`, `Firebase_RealtimeDatabase_Token`, `ConnectionString`) and
>     the **local PIN** (`AppManager_LocalStorageKey_Pin`).
>   - Browser storage also holds copies of identity and permissions (HF security.md:25-71; writers :135-158).
> - Lock/PIN is a client gate.
>   - `AppManager_InitializeWebComponents` resets `PIN_IsLocked` to False at every start. It resets `PIN_HasUnlocked` for each
>     new tab session (AM:2878-2891, knowledge/shell-facts.md U3).
>   - Open question U20: does the server refuse calls while the app is locked?
> - The document headers have no CSP, X-Frame-Options, Referrer-Policy and Permissions-Policy. The document has an HSTS header
>   (HF security.md:13-19).
> - React decision (user, section 0): later, the server keeps the tokens (BFF + HttpOnly cookie). In the mock phase, the app
>   fakes sign-in, session, PIN and flags.

**Change 18**

Before:

> App-start calls (signed-in load of HomeFeed; same set on PINRegister, PINUnlock, Menu… : their calls.md tables). Screen
> data actions start in parallel after call 1 (HF calls:6-9).

After:

> These are the app-start calls of a signed-in load of HomeFeed. PINRegister, PINUnlock, Menu… make the same calls (their calls.md
> tables). The screen data actions start in parallel after call 1 (HF calls:6-9).

**Change 19**

Before:

> Anonymous load (Login): only calls 1 and 3 (+ `Get_RuntimeVersion`) (Login calls.md table), consistent with the
> conditions above.

After:

> An anonymous load (Login) makes only calls 1 and 3, and `Get_RuntimeVersion` (Login calls.md table). This agrees with the
> conditions above.

**Change 20**

Before:

> Facts (evidence: [shell-observed](knowledge/shell-observed.md), [shell-facts](knowledge/shell-facts.md),
> [client variables](shell/client-variables.md), knowledge/navigation.md):

After:

> Facts. The evidence is in [shell-observed](knowledge/shell-observed.md), [shell-facts](knowledge/shell-facts.md),
> [client variables](shell/client-variables.md) and knowledge/navigation.md:

**Change 21**

Before:

> Decisions (user, 2026-10-14): U4–U7 and U12–U19 as recommended in the table above:
> - U4 Login button signs in at once as the mock user, then the original branches (PINRegister / resume link / LastURL / HomeFeed).
> - U5 mock session, PIN (hashed) and client variables in sessionStorage/localStorage, mock values only, namespaced.
> - U6 TST lock settings (1200 s, overlay) with a dev override `?locksecs=`.
> - U7 fictional mock user in a recorded locality; scenario toggles (pending policies, subscription, householder) off.
> - U12 no push now; U13 biometric hidden; U14 plain URLs + resume-link helper; U15 Leave App dialog 1:1;
>   U16 unsupported-version Browser variant as a mock scenario only; U17 no telemetry now (log.ts sink later);
>   U18 visualViewport keyboard class, no orientation lock, external links in a new tab; U19 view cache over the whole
>   history stack, cleared when HomeFeed or Login mounts.
> - Original bugs are reproduced 1:1 and listed in `app/docs/known-original-bugs.md` (fix later through an ADR).
> 
> Still open: U11 start order (minor), U20 (production), U21 (capture steps for dialogs, toast, lock overlay).

After:

> Decisions (user, 2026-10-14): U4–U7 and U12–U19 follow the recommendations in the table above:
> 
> - U4: the Login button signs in at once as the mock user. Then the original branches run (PINRegister / resume link / LastURL /
>   HomeFeed).
> - U5: the app keeps the mock session, the PIN (hashed) and the client variables in sessionStorage/localStorage (mock
>   values only, with a namespace).
> - U6: the app uses the TST lock settings (1200 s, overlay). A dev override `?locksecs=` changes them.
> - U7: the mock user is fictional and lives in a recorded locality. The scenario toggles (pending policies, subscription,
>   householder) are off.
> - U12: no push now.
> - U13: biometric is hidden.
> - U14: plain URLs + the resume-link helper.
> - U15: the Leave App dialog stays 1:1.
> - U16: the unsupported-version Browser variant is a mock scenario only.
> - U17: no telemetry now (a log.ts sink comes later).
> - U18: the app uses a visualViewport keyboard class, no orientation lock, and opens external links in a new tab.
> - U19: the view cache covers the whole history stack. The app clears it when HomeFeed or Login mounts.
> - The React app reproduces the original bugs 1:1. `app/docs/known-original-bugs.md` lists them. The project fixes them later through an ADR.
> 
> Still open: U11 start order (minor), U20 (production) and U21 (capture steps for dialogs, toast, lock overlay).

**Change 22**

Before:

> 1. Document classes, body vars, root containers, `os-legacy.css` in the order of section 1, fonts.
> 2. `AppStart` + mock services (SynchAppContext config, mock user, app-start calls of section 10 in order) and `ClientVars`.
> 3. Navigation: back-handler queue with priorities, resume link, preload, view cache (P-BACK), feedback container, dialog API.
> 4. `CommonUI` (lock overlay + inactivity, Policy_Checker, Access Restricted, image errors, offline events) with the
>    40 infrastructure blocks (catalog/infra.json), then Splash/Login/PINRegister/PINUnlock flows as mock flows.
> 5. Layout wrappers + bottom bar with mocked badge (foundation queue blocks 6-12) and flags as mock toggles.
> 
> Acceptance: an empty screen in `Layout_DetailPage` and one in `Layout_HomePage` match the captured shell markup
> (HF dom:1-12, 949-1185; Menu dom:5-42, 453-617) at 390×844; the app-start call sequence equals section 10 for a
> signed-in and a signed-out load; bottom-bar taps reach the routes of section 4 (unbuilt ones show the placeholder);
> lock, unlock, policy redirect and toasts behave as in section 9 with mock toggles.

After:

> 1. Build the document classes, the body vars, the root containers and `os-legacy.css`, in the order of section 1. Add the fonts.
> 2. Build `AppStart` and the mock services (SynchAppContext config, mock user, app-start calls of section 10 in order). Build
>    `ClientVars`.
> 3. Build the navigation:
>    - the back-handler queue with priorities
>    - the resume link, the preload and the view cache (P-BACK)
>    - the feedback container and the dialog API
> 4. Build `CommonUI` with the 40 infrastructure blocks (catalog/infra.json). It has: lock overlay + inactivity, Policy_Checker,
>    Access Restricted, image errors, offline events. Then build the Splash/Login/PINRegister/PINUnlock flows as mock flows.
> 5. Build the layout wrappers and the bottom bar with a mocked badge (foundation queue blocks 6-12). Build the flags as mock
>    toggles.
> 
> Acceptance: the build must meet four conditions:
> 
> - An empty screen in `Layout_DetailPage` and one in `Layout_HomePage` match the captured shell markup (HF dom:1-12, 949-1185;
>   Menu dom:5-42, 453-617) at 390×844.
> - The app-start call sequence equals section 10 for a signed-in load and for a signed-out load.
> - A click on a bottom-bar item reaches the routes of section 4. An unbuilt route shows the placeholder.
> - Lock, unlock, policy redirect and toasts behave as in section 9 with mock toggles.

