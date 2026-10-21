# App shell spec: UBTConnect

Status: draft for review (2026-10-14). Source of truth: TST captures and TST compiled code. The author decides nothing in this
spec. Every open point is in section 12. The spec never quotes the values of client variables, tokens and test-account data.

**Citation key.** Line numbers are 1-based in the named file:

| Key | File |
|---|---|
| `HF` | `migration/screens/HomeFeed/analysis/` (`<S>` = same folder of screen `<S>`) |
| `p:<file>:N` / `r:<file>:N` | `<screen>/analysis/sources/pretty/<file>` / `sources/raw/<file>` (HomeFeed unless a screen is named) |
| `UC:N` / `AM:N` | `HF r:UBTConnect.controller.js:N` / `HF r:UBT_AppManager.controller.js:N` |
| `NH:N` / `CUI:N` | `HF p:NavigationHandler.controller.js:N` / `HF p:UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js:N` |
| `survey:<file>:N` | `capture/survey-UBTConnect.json` → `sources["<file>"]`, line N of that source (blocks no screen loaded) |
| `dom:N`, `css:N`, `bundle:N`, `calls:N` | `dom/default.html`, `css-relevant.md`, `styles/bundle.css`, `calls.md` of the screen named (HF if none) |

## 0. Summary

| Item | Value |
|---|---|
| App / platform | UBTConnect, OutSystems 11 Mobile app served as PWA (manifest `/UBTConnect/moduleservices/pwa/manifest`, no service worker: HF digest.md:5); `cordova.js` is loaded (HF calls:713) |
| OutSystems UI version | `OutSystemsUI_2_23` (survey/osui.md:5-23) |
| Home route | `/UBTConnect/HomeFeed` = DefaultScreen; SplashScreen = Splash (knowledge/navigation.md:7). What `/UBTConnect/` shows before sign-in: **unknown, U1** |
| Captured | 2026-10-14, TST, phone 390×844 dpr 1, signed-in test account with a registered PIN (HF capture/capture-HomeFeed-default.json `env`; capture-notes.md:13) |
| Screens surveyed | 83 (survey/routes.md:3); 64 `build` on the board (board.md, 2026-10-21; 41 when this spec was first written) |
| Shell entry block | `UBTConnect.App_Common.CommonUI_InsideLayout`, rendered by 66 screens (survey/shell.md:7; 68 users in survey) |
| Decisions already made (user) | React replaces production, UI/UX 1:1; MSW mocks with same calls/moments/inputs (P-CALLS); D3(a) mock sign-in + mock PIN, B2C later via BFF, no tokens in browser storage; ADR-1 web/PWA only; non-person data recorded, person data fictional, test-user profile = fictional mock user (knowledge/mock-fixtures.md:3-29); flags per migration/flags.md; Orbit/Assemble/LDM external |

## 1. Document and global styles

- `<html>` has no class and no style (HF capture env `htmlClass`, `htmlStyle`).
- The runtime sets the `<body>` classes from the device: `phone portrait osx is-ltr` (HF digest.md:4).
  - Connect2 module screens add `connect-theme` (MyBookmarks, BookmarksByGroup, MessageList, MessageDetail, ConnectShare,
    LegacyShareObject digests:4).
  - The captures of PINRegister, PINChange and Photobook have no `osx` (their digest.md:4).
  - The React app sets the same classes from the device (`phone`/`portrait`/OS/`is-ltr`).
- The runtime sets `<body style>`. It contains `--viewport-height` (844px), `--header-size-content` and `--footer-height`.
  The captures show `--footer-height` as 0/42/56 px, by layout (HF digest.md:4, Menu digest.md:4, Splash digest.md:4).
- Root containers (HF dom:1-4, 1185):

```html
<body class="phone portrait osx is-ltr" style="--header-size-content:…;--footer-height:…;--viewport-height:…">
  <div class="feedback-message-wrapper" id="feedbackMessageContainer">…</div>   <!-- only while a toast shows (CountryList dom[loading]:2) -->
  <div id="reactContainer"><div id="transitionContainer">
    <div class="active-screen screen-container">…layout block…</div>
    <div class="dx-bottom-bar-slider dx-bottom-bar-slider-appear" style="--dx-bottom-bar-items:5;--dx-bottom-bar-active-item:0;…"><div></div></div>
  </div></div>
  <div class="portal-class" style="display:inline"><div><div class="popup-backdrop" data-popup-backdrop>…</div></div></div> <!-- popups (HouseholdDetails dom:1392-1404) -->
</body>
```

- A screen transition uses OutSystems classes (`slide-from-right-enter-done`: Login dom:4; `.slide-from-left-enter-active`,
  `.fade-leave`: HF css:1216, 1244). The duration is `--dx-screen-transition-duration: 300ms` (HF css:1316).
- The React app serves the stylesheets unchanged (`public/os-legacy.css`, architecture.md "Styling"). The load order is:
  - `_Basic.css`
  - `OutSystemsReactWidgets.css`
  - `UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.css`
  - `UBT_AppManager.PIN.PinCode.css`
  - `UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.css`
  - `OutSystemsUI_2_23.OutSystemsUI.css`
  - `UBTConnectLibrary.UBTConnectBase.css`
  - `UBTConnectLibrary.UBTConnectLibrary.css`
  - `Connect2_LegacyShared.UBTConnect.css`
  - `OutSystemsUI_2_23.OutSystemsUI.extra.css` (HF css:5-14)
- Fonts/assets:
  - Inter variable (normal and italic).
  - `connect-icon.ttf/.woff` (icon font, `@font-face` at HF bundle:20441).
  - `fontawesome-webfont.woff2/.woff`.
  - The logo `img/UBTConnect.ConnectLogoWhite.svg` (HF capture `assets`).
- Theme tokens: there are two `:root` layers. The later layer `:root, .connect-legacy-compatibily-containter` wins
  (HF css:1159-1161).
- The resolved values are (HF css:1266-1353, 240; HF bundle:20374):
  - `--color-primary` = `var(--color-cyan-dark)` = `#00819C`.
  - `--color-cyan` `#4EAEC2`.
  - `--color-neutral-0` `#ffffff`.
  - `--bottom-bar-size` 56px.
  - `--header-size` 56px (58px in `.ubt-layout-home`, 103px in `.ubt-layout-main`).
  - `--space-base` 16px.
  - `--font-size-base` 1rem.
  - `--message-autoclose-duration` 5000ms.

## 2. Layouts

All layouts have two parts in common:

- They start with `LayoutRuntime_NavigationHandler.LayoutRuntime_Top` (back-navigation queue, section 9).
- They host `CommonUI_InsideLayout` in their `Placeholder_CommonUI_Inside_Layout`. Connect2 screens are the exception.

The project builds the blocks from the foundation queue (catalog/foundation-queue.md). The shell provides the wrapper
contract below.

| Layout block | Build users | Wrapper classes (evidence) | Placeholders → typical content |
|---|---|---|---|
| `UBTConnectLibrary.Layouts.Layout_HomePage` | HomeFeed, Profile | `.layout.layout-side.layout-native.ios-bounce.ubt-layout-home` style `--current-svg-height:260px` (HF dom:8) | Header_Title (logo), Header_Right (bell), HeaderContent, content (SVG + `SubLayout_HomePageSearch`), Bottom (bottom bar), CommonUI **inside** `.layout` (HF dom:12-102, 949-953, 1100) |
| `Layout_DetailPage` | 20 build screens (catalog/blocks.md:12) | `.layout….ubt-layout-detail.ubt-layout-detail--primary` (Menu dom:8) | back icon + Header_Title + Header_Right, HeaderContent, Content, Bottom; CommonUI is a **sibling** of `.layout` (Menu dom:13-42, 453-458, 605) |
| `Layout_MainPages` | CountryList, Locality_Details, CommunityBusinessDetails_CoomingSoon | `.ubt-layout-main.hide-header-on-scroll.layout-gray-background` + `.sticky-observer` (CountryList dom:8-13) | `.ubt-layout-main__title`, `.ubt-layout-main__search`, Content, Bottom (CountryList dom:18-110, 4716-4718) |
| `Layout_MainPages_FixedTitle` | Updates_SingleList, Notes | adds `.layout-sticky-title`; header split `#HeaderTitle` / `#HeaderSearch` (Updates_SingleList dom:8-133) | as MainPages + HeaderContent list header |
| `Layout_MainPages_Upgrade` | Notifications | `.mainpage-upgrade-container`, `.upgrade-header-top`, `.upgrade-header-top-search` (Notifications dom:8-77) | back-left title, search, HeaderContent actions |
| `Layout_LoginFlow` | Login, PINRegister, PINChange, AcceptPendingPolicies; lock screen | `.ubt-layout--login` > `__svg`, `__header#Placeholder_Header`, `__content#Placeholder_Content`, `#Placeholder_CommonUI_Inside_Layout` (Login dom:8-35); lock variant adds `ubt-lock-screen connect-legacy-compatibily-containter` (p:UBTConnect.App_PIN.Block_PINUnlock.mvc.js:166) | Login/PIN content; no bottom bar |
| `App_Common.LayoutBlank` | Splash | `.layout.layout-native.blank > .content > .main-content` (Splash dom:8-10) | loading dots, `OfflineDataSyncEvents` (Splash dom:32-65) |
| Connect2 `Layout.Layout` → `BaseLayout_UpdatedOSUI` | MyBookmarks, BookmarksByGroup, MessageList, MessageDetail, ConnectShare, LegacyShareObject | `.backwards-compatibility.connect-theme` > `.layout….aside-overlay.connect-theme` > `.main.screen` (MyBookmarks dom:10-20; BookmarksByGroup dom[offline]:17) | CommonUI rendered by the screen after the layout (MyBookmarks dom:360) |

Not built: `App_Common.Layout`. Only InvalidPermissions uses it, and the board marks InvalidPermissions skip:dead
(survey/routes.md:78; board.md:66). Pull-to-refresh is a layout input (`UsePullToRefresh`, HF digest.md:256). The survey shows that 6 layouts
use `OutSystemsUI_2_23.Private.PullToRefresh`.

## 3. Header

| Layout | Left | Title | Right | Evidence |
|---|---|---|---|---|
| HomePage | – | `App_Common.AppLogo_White` (`img` 155px wide) | `ConnectPatterns.Icon` + `App_NotificationIcon` | HF dom:16-40 |
| DetailPage | `connect-icon-arrow_left_alt` → `OnClick_BackNavigation` = `navigateBack` (PreviousScreen) | `.header-title.text-align-left` placeholder | `.header-right` placeholder | Menu dom:16-33; Menu p:UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js:333, 487-502 |
| MainPages* | – | `.ubt-layout-main__title` | bell; search `StaticInput` (prompt default "Search for households. entities, news") | CountryList dom:18-70; HF digest.md:401-404 |

The bell is the block `App_Common_Blocks.App_NotificationIcon` (HF p:UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc.js:139, 176,
249-259, 287-291):

- The badge is `App_IconBadge` (max 9). `isLoading = not Notifications_IsSynched`.
- The count is `GetUnreadNotificationNumber`. It is local. The app-start call `GetNumberUnreadMessages` fills it.
- A click opens `/UBTConnect/Notifications` when the flag `C2NewNotifications` is on. Otherwise it opens `/UBTConnect/MessageList`.

## 4. Bottom bar / main navigation

The block `UBTConnect.App_Common.BottomBarMenu` > `BottomBarContent` > `.bottom-bar-wrapper > .bottom-bar.ph > .list.list-group > a`
(HF dom:951-1098) renders the bottom bar. The items come from `BottomBar_GetList(useMapsItems, isHouseholder)`
(HF p:UBTConnect.App_Common.BottomBarMenu.mvc.js:462-466).

| Item | Icon class | Label | Target (logic, TST flag values) | Badge |
|---|---|---|---|---|
| home | `connect-icon-home_fill` | Home | `/UBTConnect/HomeFeed` (BottomBarMenu:606-609) | – |
| directory | `connect-icon-union` | Directory | `GetHasC1DirectoryView` (TST on) ? `/UBTConnect/CountryList` : `/UBTConnect/Locality_Details` (612-622) | – |
| updates | `connect-icon-list_alt` (inside `App_IconBadge`, `.ubt-badge.background-red`) | Updates | `/UBTConnect/Updates_SingleList` (627-630) | client var `Directory_Updates_UnreadCount`; refreshed on bottom-bar OnReady when older than `…CheckFrequency_Minut` → `ServiceAPIGet_UI_UpdateItems_UnreadCount_All` (BottomBarMenu:493-495; UC:2450-2477) |
| bookmarks | `connect-icon-contacts` | Bookmarks | LD `mobileDirectoryBookmarkNote` (TST off) and `C2NewBookmarks` (TST off) → `/UBTConnect/MyBookmarks`; other branches Bookmarks / New_MyBookmarks are skipped (633-665; board D2) | – |
| menu | `connect-icon-widgets` | Menu | `/UBTConnect/Menu` (672-675) | – |

- The input `ActiveItem` sets the active item. The active item has `<a class="active">`. The icon/text of the active item has
  `text-primary`. The other items have `text-neutral-6`. The label has `font-size-xs` (HF dom:956-1090).
- A second click on the active item of a root page (BottomBarMenu:591-600, 678-679):
  - For bookmarks, the block runs `ScrollTop(".layout .content","instant")`.
  - For the other items, the block runs `ScrollTop(".active-screen","instant")`.
  - The block does not raise `BottomBar_Clicked` in this case. It raises `BottomBar_Clicked` only when the clicked item
    is not Home, Directory, Updates, Bookmarks or Menu (BottomBarMenu:678-679).
- Slider: the sibling `.dx-bottom-bar-slider` is in `#transitionContainer`. It has `--dx-bottom-bar-items` /
  `--dx-bottom-bar-active-item` (HF dom:1185; CSS HF css:1211-1218).
  - `OnApplicationReady_BottomBarSlider` installs it at app start (UC:15326).
  - BottomBarMenu refreshes it when a parameter changes (BottomBarMenu:543-544).
  - The CSS hides it while the mobile keyboard is open (`.dx-mobile-keyboard-visible`, HF css:1218).
  - The app-start code installs the code for the mobile keyboard (UC:15329, section 9).

## 5. Side menu / other global navigation

None. The app has no side menu. "Menu" is a screen. The user reaches it from the bottom bar. Only Map uses OSUI `Sidebar`, and the
project skips Map (survey/osui.md:57; board.md).

## 6. Feedback messages (toasts)

There are two kinds of message. Both kinds render in `#feedbackMessageContainer` before `#reactContainer`. The container has
`position:fixed; top:0; z-index:10000` and the full width on phone (HF bundle:220, 4453):

| Kind | Markup (captured) | Source API |
|---|---|---|
| UBT auto-close with title | `.feedback-message.feedback-message-info.feedback-message-autoclose[role=alert]` > `i` + `.feedback-message-text` > `.feedback-message--title` + `.feedback-message--body` (CountryList dom[loading]:2-19) | `UBTJavaScriptUtils.FeedbackMessage_AutoClose(title, message, type, autoClose, class, delayMs, debounce)` (UC:16096-16101, 16444); 19 users (survey) |
| Platform message, no title | `.feedback-message.feedback-message-error` > `i` + `.feedback-message-text` "Request failed with an error" (BookmarksByGroup dom[offline]:2-9); "The connection has timed out" (MyBookmarks dom[loading]) | OutSystems `FeedbackMessage` (e.g. ShareSheet "Share failed. Please try again.", HF digest.md:951) |

Auto-close uses the animation `feedbackMessageSlideDownThenUpPhone`. The duration is `var(--message-autoclose-duration)` = 5000 ms
(HF bundle:4460, 23078, 20374). The types have the colours info/success/warning/error (HF bundle:243-258, 23122).

The shell must expose these shared message helpers, with the same texts:

| Helper | Behaviour (evidence) |
|---|---|
| `ShowCommunicationExceptionMessage` | online (`App_NetworkStatus_IsOnline_IsPersistent`) → info "Service Interruption" + high-traffic text; offline → error "No internet connection. Please check your network settings and try again." (UC:16093-16101) |
| `ShowExceptionMessage(message, forceLogout)` | maps server texts to title/message/logout (UC:16136-16323): "Authorization has been denied for this request." → "Please make sure you have an active Connect plan…" + logout; "An error has occurred." → "Service Interruption" (info); "Error executing query" → "Temporarily Unavailable" / "Something went wrong, please try again later"; "The underlying connection was closed" → generic error text; "Your paid subscription has expired" → "Subscription Status Update" + logout; "We're unable to log you in at this time" → "Access Unavailable"; "Due to multiple unsuccessful login attempts" → "Account Access Restricted"; "…check your active sessions" → "Session Ended"; "unable to create a Free subscription plan" → "Subscription Status Update". Logout → `Connect_Logout` then page redirect to `/UBTConnect/Login` (UC:16444-16452). Used by Login (survey) |

React design: the shell has one container. The hook `useFeedback().show({title?, message, type, autoClose, delayMs})` in
`src/shell/feedback` shows a message. The markup is as above (P-DIALOG). Open points: U9, U10.

## 7. Shared dialogs and overlays

| Dialog | Purpose / trigger | Markup | Events |
|---|---|---|---|
| `NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog` (generic) | `ConfirmAction(dialogId)` dispatches `dx-show` on the dialog's `[data-dx-event-hub]` and resolves a Promise with the answer (NH:256-283; p:NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc.js:693-708) | closed: `.dx-confirmation-dialog > [data-dx-event-hub]` (HF dom:1158-1163); open: OSUI Popup `.popup-dialog` > `.dx-dialog-header/.dx-dialog-body/.dx-dialog-footer` (same file :154-199; CSS HF css:1090-1099). Open state not captured (U21) | `yes`/`no` → resolve |
| `Dialog_AccessRestrictedAction` (in CommonUI, every screen) | `App_Subscription_ShowUpgradePopUp` → `ConfirmAction(App_SubscriptionPopUp)` (HF p:UBTConnect_Utils.controller.js:46-85; 38 callers in survey). Block stores its popup id in `App_SubscriptionPopUp` on Ready (p:…Dialog_AccessRestrictedAction.mvc.js:563-564) | `.subscription-pop-up.connect-dialog-popup.connect-dialog-popup--access-restricted` (HF dom:1157). Texts: "Access Restricted"; "It looks like this content isn't included in your current plan. Upgrade your subscription to access more features and detailed information."; "Upgrade Subscription"; "Close" (same file :214, 397, 464, 519) | Upgrade → `App_Subscription_NavigateToUpgrade`: user cache → `OpenInApp_OpenExternalLink(Subscription.SubscriptionManageLink)` (UBTConnect_Utils.controller.js:3-38) |
| `Dialog_ExitConfirmation` (HomeFeed, Login) | back navigation with `Force=true` at queue priority −1 (p:UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation.mvc.js:140; p:NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc.js:322, 669-672) | `.connect-dialog-popup > .dx-confirmation-dialog.dx-exit-confirmation-dialog` (HF dom:936-942); "Leave App" / "Are you sure you wish to leave the Connect app?" / Yes / No (Dialog_ExitConfirmation:199-247) | Yes → `navigator.app.exitApp()` else `window.close()` (ExitConfirmationDialog:674-681); OnReady clears the screen-state cache (683-691). Web behaviour: U15 |
| Lock screen (`App_PIN.Block_PINUnlock`) | inactivity / forced unlock (section 9) | always mounted, hidden by CSS unless it contains `.pincode-unlock` or `.unsupported-card` (HF css:1191-1195; HF dom:1110-1153) | `Unlock` → CommonUI `OnPinUnlock_HideLockScreen` (empty action, CUI:475-496) |
| Popups portal | OSUI popups render in `body > .portal-class` (HouseholdDetails dom:1392-1404) | – | – |

Route-level dialogs use the same dialog API. The project builds each dialog with its route (survey counts):

- `Dialog_GoExternalApp` (HomeFeed services).
- `NavigationConfirmationDialog` via `Dialog_Navigation` (email forms).
- `Dialog_CustomChoice` (Menu).

## 8. Shared states

- Sections 7 and 9 describe the lock screen overlay and the unsupported-version card.
- Texts of the unsupported card:
  - Browser: "We have noticed you are using an unsupported browser version. … We recommend you upgrade to the latest version."
    (survey:UBTConnect.App_Common.UnsupportedVersion_Browser.mvc.js:148).
  - WebView and native variants (survey:…_WebView.mvc.js:161; survey:…_Native.mvc.js:166).
  - All variants wrap `UnsupportedVersion` (`.unsupported-card`, `WelcomeToConnect`:
    survey:UBTConnect.App_Common.UnsupportedVersion.mvc.js:156, 185).
- `WelcomeToConnect` shows the text "Welcome to" and the image `img.login-screen__connect-logo` (UBTConnect.ConnectLogo.svg)
  (Login dom:43-50).
- Skeletons: the loading and offline captures render `ConnectPatterns.SkeletonSection` with the class `ubt-skeleton-section`
  (HF dom[offline] vs dom: diff of `#…-Placeholder_LoadingSection`). In no capture does the shell render a network banner.
  Offline feedback is a toast (section 6).
- Spinner and blank slate are route-level parts (`ButtonLoading`, `BlankSlate`: survey/osui.md:34, 42).

## 9. Global logic

The Phase column uses three labels:

- **build**: implement now in `src/shell` with mocks.
- **mock**: the app fakes the behavior (no real backend/IdP).
- **later**: production integration, not in the mock phase.

| Concern | OutSystems element | Behaviour (evidence) | React design | Phase |
|---|---|---|---|---|
| App start | `UBTConnect.OnApplicationReady` (registered UC:18593) | resets `IsNavigateToHomeOnBack`, `Bookmarks/Notifications/Notes_IsSynched` = False (UC:15272-15282); registers FRD/online/offline/FCM callbacks (15284-15316); `AppManager_Mobile_OnAppReady` → `AppManager_SynchAppContext` → `InitializeWebComponents_Priority` (network detection + navigation handler: AM:3019-3023) → `InitializeWebComponents` (HF p:UBT_AppManager_Mobile.controller.js:112-128, 244-245); keyboard, bottom-bar slider (UC:15322-15329); `Sync_Info_Main(false)` (15332); preconnect links to feed / entertaining URLs (15337-15341, 15496-15512); landscape lock for Photobook (15344-15348); deep-link plugins (15351-15354); if signed in → `Connect_SetLoggedContext` then async cacheable map entities + households (15362-15375); errors → `ScreenController_RaiseError` (15382-15399) | `AppStart` provider runs once per page load, issues the calls of section 10 in the same order and conditions | build (mock calls) |
| Web components init | `AppManager_InitializeWebComponents` | device context (OS, browser, PWA, UUID `WEB_<guid>`), `PIN_IsLocked=False`; if no `HasRenderedSplashInSession` in sessionStorage → `PIN_HasUnlocked=False`; FRD init; App Insights if enabled; `AppManager_AfterInitialize` (AM:2850-2943, 2987-3008) | same steps; telemetry no-op | build / later (telemetry) |
| Authentication & session | `AppManager_Login` (B2C), `/UBT_AppManager/Callback`, `Connect_SetLoggedContext(isFromLogin)` | flow in knowledge/auth.md:9-14; on callback success: `Connect_SetLoggedContext(…, True)`, `TriggerOfflineDataSync`, `ReplaceOnUpcomingNavigation`, then HomeFeed / reset-password toast / PINRegister (Login p:UBTConnect.App_Common.Login.mvc.js:845-890) | mock sign-in service; same post-login sequence and calls (`Sync_Info_GetMain` with `isFromLogin=true`, UC:1114-1117) | mock (U4, U5) |
| Logout | `Connect_Logout` → `Cache_InvalidateEverything`, `AppManager_Logout` (server logout, Firebase sign-out, telemetry, `PIN_Delete`, re-sync context) (UC:1062-1066; AM:3671-3717) | client vars ending `_IsPersistent` survive logout (AM:4176-4194) | mock logout clears mock session + local PIN, keeps `*_IsPersistent` | mock |
| PIN check | `PIN_Check` | `PIN_Use` and a local PIN → `NeedUnlock`; `PIN_Use` without PIN → `NeedRegister` (AM:7593-7616) | `pinCheck()` over the mock PIN store | build |
| PIN at app start | Splash `LoadingDotsAnimationComplete`; `AppManager_AfterInitialize` | Splash: `Set_InitialClientVariables`, `PIN_Check`, cold-start link, signed in + NeedRegister → PINRegister, + NeedUnlock → PINUnlock, else navigate to link or `LastURL` (Splash p:UBTConnect.App_Common.Splash.mvc.js:455-524). AfterInitialize: if `PIN_EnforceOnReady` and signed in → page redirect to PINRegister/PINUnlock (AM:58-94). Observed: a fresh signed-in tab reaches `/PINUnlock` after 16-20 s; a reload keeps the unlock (context-004:20-21) | same branches, config from mock `SynchAppContext` | build (U2, U3) |
| PIN register / change | PINRegister, PINChange routes | knowledge/auth.md:16-38; success → `PIN_SessionInactivity_Start`, `HasUnlocked=True`, resume link / `LastURL` / HomeFeed, sets `IsNavigateToHomeOnBack` | route specs; shell gives PIN store + resume helpers | mock |
| PIN unlock | `Pincode_Unlock` | content shown when `In_ForceVisible` or (`PIN_SessionInactivity_Use` and `PIN_IsLocked`) (p:UBT_AppManager.PIN.Pincode_Unlock.mvc.js:192-196); wrong PIN → "Your current PIN is not correct!"; unknown user → "No matching user. Please Register a PIN" + go PINRegister (p:UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc.js:848-879); success → `HasUnlocked=True`, `IsLocked=False` (Pincode_Unlock:628-637); PINUnlock route then goes to resume link or `LastURL` (PINUnlock p:UBTConnect.App_PIN.PINUnlock.mvc.js:228-246). Forgot PIN → `/UBTConnect/Login?In_IsFromResetPIN` (ContentWrapper:1038) | lock overlay component in CommonUI + PINUnlock route share one unlock component | build (mock PIN) |
| Inactivity lock | `InactivityTimer` in every CommonUI lock block → `PIN_SessionInactivity_Start` | when `PIN_SessionInactivity_Use`: listeners on mouse/touch/key, 10 s check interval, timeout = `PIN_SessionInactivity_Seconds` (AM:7892-8037); on timeout: `PIN_SessionInactivity_Navigate` → page redirect `/UBTConnect/PINUnlock`, else custom event → `PIN_IsLocked=True` → overlay (AM:8063-8070; InactivityTimer p:194-202, 235-236; Pincode_Unlock:666-670) | `useInactivity()` with the same events/interval; overlay or redirect by config | build (U2, U6) |
| CommonUI gate | `CommonUI_InsideLayout` OnInitialize | `HideLockScreen = not signed in or In_IgnoreLockScreen or NeedRegister` (CUI:533-537); inputs per screen: Login, PINUnlock `IgnoreLockScreen+IgnorePolicy` (Login p:…Login.mvc.js:654; PINUnlock p:…PINUnlock.mvc.js:164), PINRegister `ShowLockScreen=False` + both ignores (PINRegister p:…PINRegister.mvc.js:262), ContactUs* `IgnorePolicy` (ContactUsDetails p:…ContactUsDetails.mvc.js:1582) | `<CommonUI ignoreLockScreen ignorePolicy showLockScreen/>` props | build |
| Policy checker | `Policy_Checker` (rendered when not `In_IgnorePolicy` and `App_Policies_HasPolicyToAccept`, CUI:240) | OnInitialize: flag true → `ResetReplaceOnUpcomingNavigation` → `/UBTConnect/AcceptPendingPolicies` (survey:UBTConnect.App_Policies.Policy_Checker.mvc.js:157-163). Flag written from `GetUserInformation` (`UserInformation.HasPoliciesToAccept`, UC:13685-13686); cleared after accepting (survey:UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:654-679) | same; mock user scenario toggle | build (U7) |
| Cache control | `UBTConnect_Utils.CacheControl.*` | `GetCacheableObject(type,key,ttl,timeout)` → hit / miss events (Menu p:UBTConnect_Utils.CacheControl.CacheControl.mvc.js:220-237); `CacheControl_UserInfo` → `DataActionGetCacheInfo` with key `UniqueCacheKey` (Menu p:…CacheControl_UserInfo.mvc.js:257, 324-325); `CacheControl_Policies` inside the unlock content (ContentWrapper:807-810) | in-memory cache keyed like the original (TanStack Query cache) | build |
| Unsupported version | `Get_IsUnsupportedSystem` → `Try_GetIsSupportedVersion` | app or browser version below `MinNativeAppVersion` / `MinWebViewVersion_*` (UC:4531-4589, 17351-17368); thresholds empty in the TST response shape (HF calls:52-54); card shown in Login and lock screen (Block_PINUnlock:188-271, 379-383; Login p:940-947) | browser check from mock config | build as scenario (U16) |
| Offline sync / network | `OfflineDataSyncEvents`, OSUI `NetworkStatusChanged`, `NetworkDetection` | config SyncOnOnline/Login/Resume True, retry False, 30 s (UC:15168-15180); the sync action itself is empty (UC:15118-15140); online/offline set `App_NetworkStatus_IsOnline_IsPersistent` (UC:15786-15787, 15815-15816); `NetworkDetection_OnApplicationReady(30, 300000, …, "No internet connection…", "We're sorry, but an unexpected error…")` (AM:7110-7111, 7384) | `navigator.onLine` + events; same client var; sync no-op | build (U11) |
| Deep links / app links | `GetColdStartLinkURL`, `HandleOnResumeOpenLink`, `FCM_DeeplinkCallback` | rewrites `ConnectSharing/Details…` to ConnectShare (knowledge/navigation.md:22-27); if not signed in / locked / registering → store resume link, else navigate (p:UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc.js:235-313, 353-364; UC:8100-8122, 2612-2655) | plain URLs; keep resume-link helper (`window.applinks.resumeLoginLink`, UC:16078, 10816) | resume link build; plugins later (U14) |
| Push notifications | FCM callbacks (UC:15302-15303, 2722) | refresh unread count, open message | – | later (U12) |
| Back navigation | `LayoutRuntime_Top` queue, `BackNavigationHandler`, `PreventBackNavigation` | handlers run by descending priority until one prevents (p:NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js:317-360); priorities: lock screen 100000, modal 10000, drawer 1000 (NH:360-750), exit dialog −1, CommonUI −10000 (CUI:348). CommonUI: if `IsNavigateToHomeOnBack` (read once, then cleared, unless the view was restored from cache: CUI:515-529) → `PreventBackNavigation` (priority lock screen: PINUnlock p:…PreventBackNavigation.mvc.js:133-135) → HomeFeed with slide-from-left (CUI:312-344, 415-441); else at the initial history entry → prevent + `Action_RedirectHome` (CUI:556-603, 703-712) | `useBackHandler(priority, fn)` queue over `popstate`; same priorities | build |
| View cache & preload | `wasCurrentViewRestoredFromCache` (90 blocks, survey); `SetPreloadObject` / `GetPreloadObject` | preload = one object in `window.dx.Navigation.Storage["dx-preload"]`, deleted after the next screen's OnInitialize (NH:1212-1235, 1808-1821, 555-565); 22 setters / 10 getters (survey); carousels opened by URL are empty (context-004:23) | `setPreload(obj)` / `usePreload()` in navigation state, cleared after the target mounts; view cache helper per P-BACK | build (U19) |
| Feature flags | `Connect_OutSystems/LaunchDarkly_PermissionCheck` helpers | per-user flags (knowledge/feature-flag-helpers.md:4-31) | mock toggles at TST values; `C2NewNotifications` both ways (flags.md:106) | mock |
| Exceptions | `ShowExceptionMessage`, `ShowCommunicationExceptionMessage`, platform toasts | section 6 | shell error helpers + ErrorBoundary (foundation-plan.md 3c) | build (U10) |
| Image errors | `HandleImageLoadError` (in CommonUI) | replaces a failed `<img>` with `data-error-placeholder-src` or `User_rectangle.png` and logs an app event; listener attaches only under an element with class `screen` (p:Connect2_LegacyShared.Utility.HandleImageLoadError.mvc.js:416-446, 203-217, 283) — present only in Connect2 layouts (`.main.screen`: MyBookmarks dom:20; 0 matches on HomeFeed/Menu/CountryList) | same rule (no-op on UBTConnect layouts) | build |
| Telemetry | App Insights, Firebase RTDB (FRD), application events | AM:2906-2922; HandleImageLoadError:215-217; cookies `ai_user`, `ai_session`, `nr2Users` (HF security.md:8) | no network telemetry in mock phase | later (U17) |
| Device features | keyboard, orientation, in-app browser, exit app, biometrics | UC:15322-15329, 15344; UBTConnect_Utils.controller.js:3-38; section 7; ContentWrapper:1013-1014 | adapters in `src/lib/device` (ADR-1) | later (U13, U15, U18) |

### 9b. Client variables the shell keeps (names only)

| Variable (module) | Written by (evidence) | Read by |
|---|---|---|
| `LastURL` (UBTConnect) | Splash OnLoadComplete when no pending navigation (Splash p:429-436); FCM link (UC:2617-2618) | Splash, PINUnlock, PINRegister success |
| `IsNavigateToHomeOnBack` | False at app start (UC:15273) and after CommonUI reads it (CUI:524-528); True after PIN registration (knowledge/auth.md:30) | CommonUI |
| `App_Policies_HasPolicyToAccept` | `GetUserInformation_Wrapper_Assign` (UC:13686); AcceptPendingPolicies (survey:…AcceptPendingPolicies.mvc.js:670) | CommonUI, Policy_Checker |
| `Bookmarks_IsSynched`, `Notes_IsSynched`, `Notifications_IsSynched`, `Notifications_LastChecked` | False at start (UC:15275-15282); True / now in `Connect_SetLoggedContext` (UC:1142-1160) | bell (`isLoading`), screens |
| `Directory_Updates_UnreadCount`, `…_LastCheck` | `Directory_Updates_RefreshBottomBarCount` (UC:2473-2477) | bottom bar badge |
| `Directory_Updates_MonthsToShow` | `Sync_SetSiteProperties` (UC:16707-16708) | Updates screens |
| `Embedd_B2CTenant` | `Sync_Info_Main` (UC:16585-16586) | feed embed |
| `App_NetworkStatus_IsOnline_IsPersistent` | OnOnline / OnOffiline (UC:15786-15816) | exception messages |
| `App_SubscriptionPopUp` (UBTConnect_Utils) | `Dialog_AccessRestrictedAction` OnReady (…:563-564) | `App_Subscription_ShowUpgradePopUp` |
| `UniqueCacheKey` (UBTConnect_Utils) | not in captured code (U8) | `CacheControl_UserInfo` (Menu p:324-325) |
| `PhotobookCarousel_SelectedSpeed` | `Set_InitialClientVariables` (UC:16015-16016) | Photobook |
| `App_PIN_BiometricEnabled`, `App_PIN_Header_FinalHeightPercentage` | not in captured code (U8) | unlock content (ContentWrapper:1014), Splash (Splash p:159-160) |
| `PIN_Use`, `PIN_SessionInactivity_Use/_Seconds/_Navigate`, `PIN_EnableFingerprint`, `PIN_EnforceOnReady` (UBT_AppManager) | `AppManager_SynchAppContextInternal` from the SynchAppContext config (HF security.md:150-155; AM:5072-5073) | PIN logic above |
| `PIN_IsLocked`, `PIN_HasUnlocked`, `PIN_IsRegistering` | `AppManager_SetPIN_*` (HF security.md:142-144; AM:2878-2891; Pincode_Unlock:628-670) | lock, deep links |
| identity / device / permissions (`AppManager_*`, `DeviceInfo_*`, `Permissions_List`, `Licenses_List`) | HF security.md:139-158 | flags, telemetry |

React design: one typed `ClientVars` context. The mock-phase persistence follows U5. The app never stores tokens and person data
in the browser (architecture.md "Tokens and personal data in the browser").

## 9a. Security inventory (names and categories only)

- Identity:
  - Azure B2C (`AzureB2C_ClientId`, `AzureB2C_LoginPolicy`, `AzureB2C_ResetPassPolicy`, `Embedd_B2CTenant`).
  - `FrontEgg_AppId` (empty in the TST shape, HF calls:39-41).
  - Streamline TOTP (`Streamline_TOTPOnLogin`) (HF security.md:32-41).
  - In `/UBT_AppManager/Callback` → `ActionAppManager_Login`, the IdP response becomes the OutSystems session
    (knowledge/auth.md:10-11).
- Session:
  - HttpOnly cookies are not visible. Check them manually.
  - JS cookies: `ai_user`, `nr2Users`, `ai_session`.
  - The request headers include `x-csrftoken` and `outsystems-request-token` (HF security.md:6-10).
- Browser storage in the original app:
  - localStorage holds the tokens (`Firebase_CloudMessage_Token`, `Firebase_RealtimeDatabase_Token`, `ConnectionString`) and
    the **local PIN** (`AppManager_LocalStorageKey_Pin`).
  - Browser storage also holds copies of identity and permissions (HF security.md:25-71; writers :135-158).
- Lock/PIN is a client gate.
  - `AppManager_InitializeWebComponents` resets `PIN_IsLocked` to False at every start. It resets `PIN_HasUnlocked` for each
    new tab session (AM:2878-2891, knowledge/shell-facts.md U3).
  - Open question U20: does the server refuse calls while the app is locked?
- The document headers have no CSP, X-Frame-Options, Referrer-Policy and Permissions-Policy. The document has an HSTS header
  (HF security.md:13-19).
- React decision (user, section 0): later, the server keeps the tokens (BFF + HttpOnly cookie). In the mock phase, the app
  fakes sign-in, session, PIN and flags.

## 10. Shared calls

These are the app-start calls of a signed-in load of HomeFeed. PINRegister, PINUnlock, Menu… make the same calls (their calls.md
tables). The screen data actions start in parallel after call 1 (HF calls:6-9).

| # | Call (path `/UBTConnect/screenservices/…`) | Trigger and condition | Inputs | t (ms) | Mock |
|---|---|---|---|---|---|
| 1 | `UBT_AppManager/ActionAppManager_SynchAppContext` | `AppManager_Mobile_OnAppReady` (p:UBT_AppManager_Mobile.controller.js:112-113); always | `EspaceName` | 3799 | fictional config (no real keys), PIN settings per U2 |
| 2 | `UBT_AppManager/ActionAppManager_AfterInitialize` | `InitializeWebComponents` → only if `CheckDeviceOnReady` and signed in (AM:28-43) | `EspaceName`, `AppManager_MobileContext`, `TOTP` | 7211 | recorded (mock-scope.json) |
| 3 | `UBTConnect/ActionSync_Info_GetMain` | `Sync_Info_Main(isFromLogin)` from OnApplicationReady (UC:15332, 16562); also after login with True (UC:1116-1117) | `isFromLogin` | 7961 | fictional (bookmarks, notes, URLs, site properties) |
| 4 | `UBTConnect_Utils/ActionGetUserInformation` | signed in → `Sync_UserInfo_TriggerCache` → user-info cache miss (UC:1111-1112, 16752, 13628; HF call-sites.md:31-32) | – | 8301 | **fictional mock user** (`UserInformation.Directory_UserCurrent`, `HasPoliciesToAccept`: HF types.ts:367-372) |
| 5 | `Connect2_LegacyShared/ActionGetNumberUnreadMessages` | signed in → `SynchronizeNumberUnreadMessages` (UC:1152-1153) | – | 8680 | recorded |
| 6-7 | `UBTConnect/ServiceAPIFetchData_CacheableMapEntities`, `…_CacheableHouseholds` | signed in → async JS after `Connect_SetLoggedContext` (UC:15369-15373, 15514-15519); order between the two varies (HF calls:14-15; Splash calls:10-11) | – | 9806 / 9812 | fictional |

Calls of shell blocks on some screens:

| Call | Block / trigger | Evidence | Mock |
|---|---|---|---|
| `UBTConnect_Utils/CacheControl/CacheControl_UserInfo/DataActionGetCacheInfo` | `CacheControl_UserInfo_Wrapper` on Menu, CountryList, Profile, ContactUsDetails… | Menu calls:7, 101-107 | recorded, `Directory_UserCurrent` filled from the mock user (knowledge/mock-fixtures.md:25-27) |
| `UBTConnect_Utils/CacheControl/CacheControl_Policies/DataActionGetCacheInfo` | unlock content (lock overlay, PINUnlock) | PINUnlock calls:12; Splash calls:12 | recorded |
| `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All` | bottom bar OnReady when the count is stale | HF call-sites.md:68-69; Updates_SingleList calls:11 | recorded |
| `UBTConnect/ActionGet_RuntimeVersion` | `App_Common.Version` (Login, Menu) | Login calls; Menu calls:6 | recorded |
| `UBT_AppManager/ActionAppManager_Login` / `_Logout` | sign-in / sign-out | HF security.md:161-162 | mocked (never called) |

An anonymous load (Login) makes only calls 1 and 3, and `Get_RuntimeVersion` (Login calls.md table). This agrees with the
conditions above.

## 11. Screen variants and routing decisions

| Group (survey/variants.md) | Built | Selected by | Others |
|---|---|---|---|
| mybookmarks, bookmarksbygroup | MyBookmarks, BookmarksByGroup | bottom bar D2(a): `C2NewBookmarks`=false, `mobileDirectoryBookmarkNote`=false (board.md) | Bookmarks, New_MyBookmarks, New_BookmarksByGroup skip:variant |
| ldm_myevents, ldm_eventdetail, ldm_email | none | external (Orbit module) | skip:external; entry opens a configurable external URL |
| bell target | Notifications and MessageList | `C2NewNotifications` both ways, default off = MessageList (flags.md:106) | – |
| Directory tab | CountryList | `C2EnableC1DirectoryView` on (TST) | Locality_Details is still built (reached from lists) |
| household open | HouseholdCarousel | `C2EnableCarousel` on (TST) | HouseholdDetails built for the 16 unflagged sites (feature-flag-helpers.md:36) |

## 12. Unknowns and gaps

| # | Type | Unknown | Why it matters | How to resolve / question (options, recommendation) |
|---|---|---|---|---|
| U1 | fact | Which screen `/UBTConnect/` (and a protected URL) shows to a signed-out visitor: Splash then Login, Login directly, or InvalidPermissions? | First screen of the app and the mock start flow | User opens TST root in a private window; or MCP (DEV): module Login/Splash settings. Build waits for the answer |
| U2 | fact | TST values of `PIN_Use`, `PIN_SessionInactivity_Use/_Seconds/_Navigate`, `PIN_EnforceOnReady`, `PIN_EnableFingerprint`, `CheckDeviceOnReady`; and which path sends a fresh tab to `/PINUnlock` (Splash, EnforceOnReady or inactivity) | Lock timing, overlay vs redirect, mock SynchAppContext values | User reads TST AppManager config (not secret); or MCP on DEV (`getSiteProperties`/`getServerAction AppManager_SynchAppContext`), noting DEV≠TST |
| U3 | fact | When the Splash renders (first load per tab?) and what writes `HasRenderedSplashInSession` (only read in AM:2987-3008) | Explains "reload keeps unlock" (context-004:21) | MCP: Splash/app settings and the writer; or observe on TST (new tab vs reload) |
| U4 | decision | Mock sign-in UX on Login ("Login with UBT One") | D3(a) says mock sign-in; the screen behaviour is not fixed | Options: (a) button signs in at once as the mock user, then the same callback branches (PINRegister if no local PIN, else resume/HomeFeed); (b) a fake B2C page with user/password; (c) dev panel. **Recommend (a)** |
| U5 | decision | Where mock session, local PIN and client vars live | Reload/new-tab behaviour vs "nothing sensitive in browser storage" | (a) localStorage/sessionStorage like the original, mock values only, namespaced and replaced by the BFF later; (b) memory only (every reload signs out). **Recommend (a)**, PIN stored hashed |
| U6 | decision | Mock inactivity lock settings | Testing needs short timeouts | (a) TST values from U2 + dev override; (b) fixed 60 s. **Recommend (a)** |
| U7 | decision | Fictional mock user content and scenario toggles (`HasPoliciesToAccept`, subscription active/expired, householder) | Fills `GetUserInformation` and `GetCacheInfo`; drives Policy_Checker and Access Restricted | Recommend a fictional person in a recorded locality (place names kept) so Directory screens match fixtures; toggles off by default |
| U8 | fact | Default values of client variables (`UBTConnect.clientVariables`, `UBTConnect_Utils`/`UBT_AppManager` client variables not captured), e.g. `Directory_Updates_UnreadCount_CheckFrequency_Minut`, `UniqueCacheKey`, `App_PIN_Header_FinalHeightPercentage`, `App_PIN_BiometricEnabled` | Bottom-bar refresh timing, Splash animation, cache keys | MCP `getClientVariables` (DEV) or fetch the compiled `*.clientVariables.js` read-only with the skill |
| U9 | fact | `UBTJavaScriptUtils.FeedbackMessage_AutoClose` implementation (delay, debounce, tap-to-close, title/body rules) | Toast API parity | Fetch `UBTJavaScriptUtils.controller.js` read-only (static GET by the skill) or MCP `getClientAction` |
| U10 | fact | UI-flow exception handlers (`UBTConnect.<Flow>.controller.js` not captured) and `ScreenController_RaiseError` | Which errors show which toast, logout on auth errors | MCP `getException`/flow handlers on DEV; or fetch flow controllers read-only |
| U11 | fact | `NetworkDetection` module (arguments 30 / 300000, ping, `Offline_NetworkStatus_PendingPing_Check`) | Offline toasts and status timing | Fetch `NetworkDetection.controller.js` read-only or MCP |
| U12 | decision | Push notifications (FCM deeplink/notification callbacks) on web | ADR-1 per-feature decision | (a) none in mock phase, Web Push later; (b) simulate via dev panel. **Recommend (a)** |
| U13 | decision | Biometric unlock (`FingerprintScanner`, `App_PIN_BiometricEnabled`, PINBiometricsMenu) | Unlock UI shows a fingerprint button when enabled | (a) hide (setting off) now, WebAuthn later; (b) WebAuthn now. **Recommend (a)** |
| U14 | decision | Deep/app links (Android App Links, EventfulDeeplinks cold start and resume, shared `ConnectSharing` links) | ConnectShare and resume-after-login behaviour | (a) plain URLs + the resume-link helper now, native link plugins dropped; (b) also a manifest `share_target`. **Recommend (a)** |
| U15 | decision | "Leave App" dialog on web (Yes → `window.close()`, ignored by browsers for normal tabs) | 1:1 rule vs a button that does nothing | (a) keep dialog 1:1, Yes tries `window.close()`; (b) drop dialog on web. **Recommend (a)** (pure 1:1) |
| U16 | decision | Unsupported-version card scope | Thresholds are empty on TST, native/WebView variants need a store app | (a) build Browser variant + wrapper as a mock scenario, skip Native/WebView; (b) build all three. **Recommend (a)** |
| U17 | decision | Telemetry (App Insights, Firebase RTDB, app events, New Relic cookie `nr2Users`) | Production monitoring | (a) none in mock phase, decide provider later; (b) console logger now. **Recommend (a)** with `src/lib/log.ts` |
| U18 | decision | Other native features: keyboard detection, Photobook landscape lock, in-app browser (`OpenInApp_OpenExternalLink`, policies) | Layout classes and link opening | (a) `visualViewport` for keyboard class, no orientation lock, external links in a new tab; **Recommend (a)** |
| U19 | decision | View-cache depth (OutSystems `ScreenStateCache` is runtime code, not in the app sources) | Back must restore without spinner (P-BACK) | (a) cache every screen in the current history stack, clear when HomeFeed/Login mounts (as the exit dialog does); (b) cache only the previous screen. **Recommend (a)** |
| U20 | fact | Does the server refuse calls while the app is locked? (HF security.md:171) | Production security, BFF design | Team / MCP on AppManager server actions; later phase |
| U21 | fact | Not captured: open states of ActionConfirmationDialog / Access Restricted / Exit dialog, a toast on HomeFeed, the inactivity overlay over a screen | Parity references for section 7 | Capture plan steps (read-only, no writes) in the foundation; until then build from compiled code and mark NotCaptured |

## 12a. Answers and decisions (2026-10-14)

Facts. The evidence is in [shell-observed](knowledge/shell-observed.md), [shell-facts](knowledge/shell-facts.md),
[client variables](shell/client-variables.md) and knowledge/navigation.md:

| # | Answer |
|---|---|
| U1 | `/UBTConnect/` renders the default screen HomeFeed; a signed-out visitor is sent, after the app-start calls, to `Login?In_IsFromInvalidPermissions=True` (App_Common SecurityException branch, `OutSystems_LastURL` kept as the sign-in callback). Nothing navigates to InvalidPermissions |
| U2 | TST: PIN_Use true; inactivity true / 1200 s / Navigate false (overlay in place); EnforceOnReady false; EnableFingerprint true; CheckDeviceOnReady true; no minimum versions |
| U3 | A fresh tab locks because the runtime sessionStorage key `$OS_UBTConnect$HasRenderedSplashInSession` is missing (resets PIN_HasUnlocked); a reload keeps the unlock. Splash is anonymous; on TST web it was not shown in a fresh tab |
| U8 | 94 client variables with compiled defaults: shell/client-variables.md |
| U9 | FeedbackMessage_AutoClose wraps the OSUI feedback message (+ class `feedback-message-autoclose`), CSS auto-close 5 s, 5 s debounce, close on click; two bugs in the delayed path (docs/known-original-bugs) |
| U10 | Fetched flows delegate to App_Common: Communication → communication toast; Security signed in → toast + logout + Login; signed out → Login with the flag; others → exception toast. Other 28 flows not fetched |
| U11 | NetworkDetection pings `status/network-ping.txt` every 30 s (visible tab), 300000 ms abort; UBTConnect only stores `App_NetworkStatus_IsOnline_IsPersistent` (no toast, no class). Open: which of the two starts wins |

Decisions (user, 2026-10-14): U4–U7 and U12–U19 follow the recommendations in the table above:

- U4: the Login button signs in at once as the mock user. Then the original branches run (PINRegister / resume link / LastURL /
  HomeFeed).
- U5: the app keeps the mock session, the PIN (hashed) and the client variables in sessionStorage/localStorage (mock
  values only, with a namespace).
- U6: the app uses the TST lock settings (1200 s, overlay). A dev override `?locksecs=` changes them.
- U7: the mock user is fictional and lives in a recorded locality. The scenario toggles (pending policies, subscription,
  householder) are off.
- U12: no push now.
- U13: biometric is hidden.
- U14: plain URLs + the resume-link helper.
- U15: the Leave App dialog stays 1:1.
- U16: the unsupported-version Browser variant is a mock scenario only.
- U17: no telemetry now (a log.ts sink comes later).
- U18: the app uses a visualViewport keyboard class, no orientation lock, and opens external links in a new tab.
- U19: the view cache covers the whole history stack. The app clears it when HomeFeed or Login mounts.
- The React app reproduces the original bugs 1:1. `app/docs/known-original-bugs.md` lists them. The project fixes them later through an ADR.

Still open: U11 start order (minor), U20 (production) and U21 (capture steps for dialogs, toast, lock overlay).

## 13. Build order and acceptance

1. Build the document classes, the body vars, the root containers and `os-legacy.css`, in the order of section 1. Add the fonts.
2. Build `AppStart` and the mock services (SynchAppContext config, mock user, app-start calls of section 10 in order). Build
   `ClientVars`.
3. Build the navigation:
   - the back-handler queue with priorities
   - the resume link, the preload and the view cache (P-BACK)
   - the feedback container and the dialog API
4. Build `CommonUI` with the 40 infrastructure blocks (catalog/infra.json). It has: lock overlay + inactivity, Policy_Checker,
   Access Restricted, image errors, offline events. Then build the Splash/Login/PINRegister/PINUnlock flows as mock flows.
5. Build the layout wrappers and the bottom bar with a mocked badge (foundation queue blocks 6-12). Build the flags as mock
   toggles.

Acceptance: the build must meet four conditions:

- An empty screen in `Layout_DetailPage` and one in `Layout_HomePage` match the captured shell markup (HF dom:1-12, 949-1185;
  Menu dom:5-42, 453-617) at 390×844.
- The app-start call sequence equals section 10 for a signed-in load and for a signed-out load.
- A click on a bottom-bar item reaches the routes of section 4. An unbuilt route shows the placeholder.
- Lock, unlock, policy redirect and toasts behave as in section 9 with mock toggles.
