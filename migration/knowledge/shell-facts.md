# Shell facts from compiled code (U1, U3, U9, U10, U11)

Summary (2026-10-14, TST compiled code only; no runtime observation here):
- U1: no route table in local code. Protected screens call `checkRegistered`; the App_Common handler sends a signed-out user to `Login?In_IsFromInvalidPermissions=True`. Nothing navigates to InvalidPermissions.
- U3: Splash is anonymous. No app code writes `HasRenderedSplashInSession`: it is a runtime sessionStorage key, not a client variable. After loading, Splash goes to PINRegister, PINUnlock, the cold-start link or `LastURL`.
- U9: `FeedbackMessage_AutoClose` builds no markup. It wraps OSUI `FeedbackMessageShow` plus the class `feedback-message-autoclose`. Auto-close is CSS, the debounce window is 5 s, and the delayed path has two bugs.
- U10: every fetched flow delegates to App_Common, which handles BubbleCommunication, Communication, Security and All exceptions. `ScreenController_RaiseError` passes the error to that handler.
- U11: NetworkDetection pings `status/network-ping.txt` every 30 s (300 000 ms abort) and watches XHR events. In UBTConnect it only sets `App_NetworkStatus_IsOnline_IsPersistent`; no toast, no class.

Keys: `AM`/`UC` = `migration/screens/HomeFeed/analysis/sources/raw/UBT_AppManager.controller.js` / `UBTConnect.controller.js`; `SPL` = `migration/screens/Splash/analysis/sources/pretty/UBTConnect.App_Common.Splash.mvc.js`, `ALE` = same folder `OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc.js`; `JSU`, `ND`, `ACF` = `migration/shell/sources/UBTJavaScriptUtils.controller.js`, `NetworkDetection.controller.js`, `UBTConnect.App_Common.controller.js`; `OSUI` = HomeFeed `raw/OutSystemsUI_2_23.controller.js`; `survey:<file>:N` = `capture/survey-UBTConnect.json` → `sources[file]`, line N.

## U1 (code side): `/UBTConnect/` and signed-out visitors
- Route table and default screen are not in local code. `UBTConnect.index.js`, `UBTConnect.appDefinition.js` and the runtime `OutSystems.js` appear in the survey `manifest`, but no source exists in the survey or in any screen capture. DefaultScreen = HomeFeed comes only from MCP/DEV (knowledge/navigation.md:7).
- Gate: 74 UBTConnect screens use `checkPermissions = OS.RolesInfo.checkRegistered()` (for example `HF p:UBTConnect.Home.HomeFeed.mvc.js:1069-1071`). 9 have an empty check: Splash (SPL:577), Login, InvalidPermissions, PINBiometricsMenu, ContactUsMenu, ContactUsDetails, Locality_Details, MessageList, MessageDetail (survey scan; matches navigation.md:30-31).
- Signed-out user on a protected screen:
  - The runtime raises `NotRegisteredException`, which goes to the screen's flow handler (App_Common, U10). App_Common has no NotRegistered branch.
  - Its SecurityException branch (ACF:61-89) checks `GetUserId() = NullIdentifier`. If true, `AppManager_SetAppCallback_CurrentLocation` sets `OutSystems_LastURL = window.location.pathname` (AM:4250-4259, 4286-4290), then the app navigates to `/UBTConnect/Login?In_IsFromInvalidPermissions=True` (ACF:79-84).
  - Login with that flag skips `AppManager_SetAppCallback("")`, so the protected path stays as the sign-in callback (`migration/screens/Login/analysis/sources/pretty/UBTConnect.App_Common.Login.mvc.js:950-953`).
  - Screen handlers re-raise `NotRegisteredException` so that it reaches the flow (survey:UBTConnect.Directory_Locality.CountryList.mvc.js:1394-1404).
- InvalidPermissions: no code navigates to it. Content: title "Invalid Permissions". A warning BlankSlate with "You don't have permissions to view the required screen.". A button to `/UBTConnect/Login` (survey:UBTConnect.App_Common.InvalidPermissions.mvc.js:163-165, 201-213).
- `InvalidLoginException` and `NotRegisteredException` extend `SecurityException` (`migration/runtime-sources/OutSystems.js` line 2). They take the SecurityException branch (G1, 2026-10-23).
- Open:
  - Does `/UBTConnect/` render Splash first? See U3.
  - A private-window run on TST, or the runtime/index scripts, can settle both.

## U3: Splash and `HasRenderedSplashInSession`
- What it is: sessionStorage key `$OS_UBTConnect$HasRenderedSplashInSession`, next to the runtime keys `$OS_UBTConnect$UpgradeStatus` and `…$RouterHistoryAge` (`migration/screens/Splash/analysis/facts.json:105-110, 4107-4125`). Client variables use another format, `$OS_Users$<Module>$ClientVars$<Name>` in localStorage (facts.json:100-103). The key is declared in no `*.clientVariables.js` (shell/sources, client-variables.md).
- Writers: none in app code. A search for "HasRenderedSplash" or "sessionStorage" gives 0 hits in the 640 survey sources. It gives 0 hits in all captured raw sources except the AM reader. The writer is therefore the OutSystems runtime (not captured).
- Reader: `AppManager_InitializeWebComponents` (AM:2878-2892, 2987-3008). It sets `PIN_IsLocked=False`, then scans sessionStorage for a key ending in that name (comment: "current tab's isolated storage"). If none is found or it is not "true", it sets `PIN_HasUnlocked=False`. So a new tab re-locks and a reload in the same tab keeps the unlock.
- When it renders: Splash is anonymous (SPL:577) and no code navigates to `/UBTConnect/Splash` (survey grep). The runtime shows it as the module SplashScreen (navigation.md:7); its handlers have no sign-in gate. Not determinable here: once per tab or on every full load, and before or after the AM reader runs. The runtime source or a TST new-tab vs reload test can settle it.
- Sequence (SPL unless noted):
  1. `Handler_OnNavigation` prevents any navigation during the splash and stores it in `NavigationObject` (341-345).
  2. OSUI `ApplicationLoadEvents` with `MinimumDisplayTimeMs=1500` (197): with no upgrade it fakes progress in 10 steps (ALE:568-582). On the runtime `onLoadComplete` it waits `max(1500 - elapsed, 0)` ms (ALE:559-565), then fires `OnLoadComplete(window.location.href)` (ALE:538).
  3. `OnLoadComplete` sets `TriggerAnimation=True`. `LastURL` = that href, unless a navigation was caught and `LastURL` is not empty (427-435).
  4. LoadingDots `AnimationComplete` runs `LoadingDotsAnimationComplete` (473-524):
     - Calls `Set_InitialClientVariables`, `PIN_Check`, `GetColdStartLinkURL`, `AllowUpcomingNavigation`.
     - With a cold-start link and (NeedRegister, NeedUnlock or signed out): `SetResumeLoginLink(link)`.
     - Signed in + NeedRegister → `/UBTConnect/PINRegister`; signed in + NeedUnlock → `/UBTConnect/PINUnlock`.
     - Otherwise `ScreenController_NavigateToPage(link if any, else LastURL, replace=true)`, which uses `publicApiHelper.Navigation.navigateTo` (JSU:3781-3789).
- Splash errors go to App_Common (SPL:575).
- Open: the LoadingDots animation length (`UBTConnectLibrary.ConnectPatterns.LoadingDots`, not read).

## U9: `UBTJavaScriptUtils.FeedbackMessage_AutoClose`
- Inputs and defaults (JSU:81, 178-245, 260-268): `Title=""`, `Message` (mandatory), `MessageType=UBT_MessageType.Error` (also used when NullIdentifier, 99-102), `EncodedHTML=True`, `ExtendedClass=""`, `DelayMs=0`, `useDebounce=False`.
- Debounce (105-125, 162-166, 280-295): `window.ubt.lastTimeMessageFired` starts at the first call's `CurrDateTime`. With `useDebounce`, the call returns silently unless `last == now` or `last + 5 s <= now`. Every shown or scheduled call stores the new time.
- Text (128-140): appends "." unless the message ends with `.`, `!` or `?`. If `Title` is not empty, the message becomes `<div class='feedback-message--title'>Title</div><div class='feedback-message--body'>Message</div>` and `EncodedHTML` is forced to False, so the body is rendered as raw HTML. Without a title the text stays escaped (default True).
- Show (142-145): when `DelayMs = 0`, it calls OSUI `FeedbackMessageShow(msg, MessageTypeId - 1, EncodedHTML, (ExtendedClass ? ExtendedClass + " " : "") + "feedback-message-autoclose", CloseOnClick=True)`. That calls the runtime `$public.FeedbackMessage.showFeedbackMessage` (OSUI:10857-10946). The markup, `#feedbackMessageContainer` and click-to-close all come from runtime code that is not captured.
- Delay (146-157, 273-279): `window.setTimeout(DelayMs)` re-calls the action with `DelayMs=0, useDebounce=False`. Bugs:
  - `MessageType` receives `DelayMs` (149), so the toast type becomes `DelayMs - 1`.
  - The re-call gets the already wrapped message and the same `Title`, so a titled delayed toast is wrapped twice and gets "." after `</div>`.
- Auto-close is CSS only: `.phone .feedback-message.feedback-message-autoclose`, animation `feedbackMessageSlideDownThenUpPhone`, `--message-autoclose-duration: 5000ms` (`migration/screens/HomeFeed/analysis/styles/bundle.css:4460-4462, 20374, 23078-23079`). No JS timer removes the node.
- Captured markup has the class twice: `feedback-message-info feedback-message-autoclose feedback-message-autoclose`, plus title and body divs with raw `\r\n` text (`migration/screens/CountryList/analysis/dom/loading.html:2-13`).
- Platform toast for comparison (`OS.FeedbackMessageService.showFeedbackMessage(msg, 3)`, ND:947): no title, no autoclose class (so no CSS slide-out), no debounce. How long it stays and how it closes is runtime behaviour (not captured).
- Open:
  - The ids of `UBT_MessageType` (`UBTJavaScriptUtils.model.js` not captured).
  - How the runtime handles a type outside 0-3.
  - Why the class appears twice.
  - Whether the node is removed after the animation.

## U10: Exception handling
- Flows: App_PIN, App_Policies, Home, App_Menu and App_Cache all delegate to App_Common (`UBTConnect.App_PIN.controller.js:12-16`, same lines in the others). UBTConnect screens use 33 UI flows (survey scan); the other 28 flow controllers are not fetched, so their handlers are not determinable.
- App_Common `OnException` (ACF:12-125), in this order:
  1. `UBTConnect.BubbleCommunicationException` (user exception): `ShowCommunicationExceptionMessage` (32-44).
  2. `CommunicationException`: same action (47-59).
  3. `SecurityException`: signed in → `ShowExceptionMessage(msg, ForceLogout=True)`; anonymous → Login as in U1 (62-89).
  4. Any non-system exception: `ShowExceptionMessage(msg, False)` (92-105).
  5. Anything else is re-thrown to `OS.ErrorHandling.handleError`, the runtime default (107-114). No NotRegistered branch, no InvalidPermissions navigation.
- `ShowCommunicationExceptionMessage` (UC:16085-16101): online (`App_NetworkStatus_IsOnline_IsPersistent`) → info toast "Service Interruption" with the high-traffic text; offline → error toast "No internet connection. Please check your network settings and try again.". No delay, no debounce.
- `ShowExceptionMessage(msg, forceLogout)` (UC:16136-16452), additions to spec section 6:
  - "No role validation found": no toast (16140-16142).
  - Timeouts, "Request failed with an error/500/404/400", "The request is invalid", "Resource not found" and "No HTTP resource": `ShowCommunicationExceptionMessage`, then return (16200-16204, 16353-16356).
  - "Authorization has been denied…", "please install and enable google maps" and "distributed transaction": 500 ms delay (16186-16216).
  - Defaults: no title, Error type, debounce on (16502-16531).
  - End (16444-16452): `FeedbackMessage_AutoClose(title, msg, type, True, "", HasTimeout ? 500 : 0, HasDebounce)`. If `ForceLogout`: `Connect_Logout`, then `JSUtils_PageRedirect("\UBTConnect\Login")`, a full page load (JSU:2234-2240).
- Screen level: data-action handlers raise `BubbleCommunicationException` / `BubbleGenericException` (a user exception, which falls to AllExceptions) and re-raise NotRegistered (survey:…CountryList.mvc.js:1376-1423). `Directory_EntityDetailsActions` uses the `ScreenController_Raise*` helpers (survey:…mvc.js:1209-1261).
- `ScreenController_RaiseError(msg)` (JSU:3840-3900): `activeScreenController.handleError(new Error(msg))`, with the controller found through `ScreenController_Get` (JSU:3701-3711), so the screen's flow handler runs. Used by UBTConnect `OnApplicationReady` AllExceptions (UC:15382-15399). `RaiseCommunicationError` / `RaiseTypedException` build typed runtime exceptions; NotRegistered, Server, DataBase and User exceptions take a specific type (JSU:3792-3810, 3995-4045).
- Open:
  - Whether a plain `Error` counts as "system" (`OS.Exceptions.isSystem`, runtime).
  - The other 28 flows and the Connect2_*/UBT_AppManager flows.
  - Whether the toast is visible before the logout redirect.

## U11: `NetworkDetection`
- Start-up makes two calls with `30, 300000`:
  - UBT_AppManager module `OnApplicationReady`, with null callbacks (AM:7363-7384).
  - `NetworkDetection_Initialize` with the AM callbacks (AM:3019-3020, 7083-7111).
  - The JS returns early if `window.dx.Network` exists (ND:647-648), so the first caller wins. The order is runtime (UC:18593 vs AM:8575) and not determinable. If the null-callback call wins, the UBTConnect callbacks below never fire.
- Arguments (ND:504, 557-571, 622-630):
  - `FrequencySeconds=30`: a timer check every 30 s, only while `document.visibilityState === "visible"` (skipped when hidden, ND:791-820).
  - `PingTimeout=300000`: per-ping AbortController timeout of 5 min, fallback 10 000 when 0 (ND:666-707).
- Ping: native `fetch` GET of `OS.Navigation.VersionedURL.getVersionedUrl("status/network-ping.txt")` + `d=<now>`, `cache:"no-store"`, ok = `response.ok`; one shared promise, so no parallel pings (ND:536, 672-722). The file is in the survey `manifest`.
- Other inputs:
  - Browser `online`/`offline` events (ND:783-786).
  - `Request.createHttpRequest` override (ND:831-862): XHR `load` → online; `error`/`timeout`/`abort` → ping check.
  - An async first check `DefineNetworkStateAsync("Initial")` (ND:826).
- State changes only on a transition (ND:729-749). `OnNetworkOnline` / `OnNetworkOffline` set `NetworkDetection_StatusIsOnline_IsPersistent` True / False and call the user callback (ND:1039-1075, 997-1033).
- `Offline_NetworkStatus_PendingPing_Check` (default True, NetworkDetection.clientVariables.js:14-16):
  - Set True when a ping starts (ND:349-357, 709).
  - Set False, with the message cleared and the pending callback run, by `Network_PendingPing_Resolve` (ND:302-343). That happens only after `networkState`/`networkStateSync`, not after timer checks (ND:754-778 vs 791-803).
  - Nothing in captured app code reads it (0 hits in survey, AM and UC).
- UBTConnect wiring:
  - `NetworkDetetion_DefineCallbacks(OnOnline, OnOffiline, null)` (UC:15284-15316) stores the callbacks in the element cache (AM:7295-7316).
  - The AM callbacks run them and set the App Insights online state (AM:7164-7239).
  - `OnOnline`/`OnOffiline` only set `App_NetworkStatus_IsOnline_IsPersistent` (UC:15779-15787, 15806-15816). That flag only picks the text in `ShowCommunicationExceptionMessage` (UC:16093).
  - No toast and no body class: offline captures keep `phone portrait osx is-ltr` (`migration/screens/CountryList/analysis/dom/offline.html:1`).
- `NetworkDetection_ShowCommunicationExceptionMessage` (ND:911-947) is used only by `AppManager_Login` when the pre-login check is offline (AM:3538-3585). It shows a platform error toast (override text, else GenericError if `StatusIsOnline`, else NoInternet), or nothing with `UsingOfflineMode`/ignore.
- Open: which `OnApplicationReady` runs first. A check of `window.dx.Network.userOnlineCallback` at runtime on TST can settle it.

## Static entity identifier values (2026-10-14, foundation wave 1)
- Static entities are compiled as getters by record GUID (e.g. `UBTConnectLibrary.model.js`: `staticEntities.uBT_VerticalAlign.top`
  → record `1d66013f-…`), but the record **values** (`Id`, labels) are not in the compiled code nor in `moduleservices/moduleinfo`.
- Blocks use symbolic constants for identifiers that are only compared in the UI (e.g. `UBT_VerticalAlign` in
  `app/src/shared/UBTConnectLibrary/lib/staticEntities.ts`). Open: where a static entity value reaches the DOM or the
  server. Find the real value there (runtime data source not located yet).

## Answers recorded for routes (2026-10-14, TST compiled code)
- `UBTConnect.Get_IsUnsupportedSystem` = `Get_IsUnsupportedVersion.Out_IsUnsupportedAppVersion OR Out_IsUnsupportedBrowserVersion`
  (WebView version not included). `UBTConnect.controller.js`.
- `UBT_AppManager.DelayedMessage_Show`: shows `AppManager_DelayedMessage` (JSON: MessageTitle, Message, Type) with
  FeedbackMessage_AutoClose(EncodedHTML True, DelayMs 0, no debounce) and clears it. Only writer: DelayedMessage_Define,
  called only by FRD_HandleEvent_Logout (Firebase RTDB remote logout → logout, define message, page refresh).

## Unverified points kept as built (user, 2026-10-14)
- Cross-origin `navigateTo` (ScreenController_NavigateToPage with a URL of another origin): **settled 2026-10-14** from
  `migration/runtime-sources/OutSystems.js`.
  - The screen API `navigateTo(URL, transition, isReplace)` (:16:26318) calls Navigation.navigateTo (:8:698).
  - `getUrlInfo` (:8:7127) marks the URL internal when it belongs to this application.
  - An internal URL goes to the router: `goTo(urlInfo, transition, replace)`.
  - Any other URL goes to `changeWindowLocation(URL)` (:8:6637) with its defaults (no invalidation suffix, replace False).
    This sets `window.location.href = URL` after the log flush.
  - So for another origin, ReplaceInHistory is ignored. The call always uses `location.href` (a new history entry) and never
    `location.replace`.
  - Ported in `app/src/shared/UBTJavaScriptUtils/lib/actions.ts` (`changeWindowLocation`).
  - Not ported (shell level, every navigateTo): `window.stop()` before the navigation when the document is complete
    (:8:545), and the "Too many redirects" guard.
  - Splash's LastURL always comes from the app's own `window.location.href`. The path to another origin is therefore not
    expected to run.
- `AppManager_GetCachedUserInfo` with an empty `UBT_AppManager.AppManager_UserExtended`: returns an empty record in the
  React app. No captured source writes the variable (`AppManager_SetCachedUserInfo` not called). TST does fill the variable
  while the user is signed in:
  - The key is in localStorage (`screens/OrbitLanding/capture/runtime-OrbitLanding.json` environment.localStorageKeys).
  - The header of OrbitAdminLanding shows the cached FirstName (masked, `screens/OrbitAdminLanding/analysis/dom/default.html`).
  - The writer is still unknown. Ask again when a backend exists.
- React app, mock phase (F16, CR-OrbitAdminLanding-1, CR-QRCodeGenerate-1, 2026-10-16): the stored record holds CountryCode
  only (rule 16).
  - While `config.useMocks` is on and the variable holds a record (signed in), the read merges these fields of the mock
    user from memory (`shell/mockUser.ts` `mockCachedUserIdentity`): FirstName, LastName, MemberId, Locality, Country.
  - The merge fills only the fields that the stored record leaves empty.
  - Email, Phone, Username, ContactBaseId, UserExternalId stay empty.
  - Readers: OrbitAdminLanding, QRCodeGenerate, OrbitLanding (CurrentMemberId), MilestoneDetail (UserMemberId),
    ContactByEmail*, LDM_Email_V2, EmailTarget, LegacyShareObject, OrbitAdminEventDetail (submit/scan paths).
- OrbitLanding with a real CurrentMemberId: TST shows no My-calendar icon on load although the cache is filled. So its
  first Get_HouseholdMembers row (selected on load) was not the signed-in user.
  - The OrbitLanding mock of the React app lists the signed-in user second (`screens/OrbitLanding/mocks.ts`).
  - A click on the own chip shows the icon.
  - View Passport details now navigates to PassportScan (CurrentMemberId ≠ 0), as compiled.

## Client entities storage on the web (2026-10-15)
TST serves `IndexedDBOffline = false` (OutSystemsSettings.js). This value selects WebSQL. Yet TST in Chrome 141 (no
WebSQL) ran client entities on IndexedDB:
- `runtime-HomeFeed.json` lists the IndexedDB database `<envKey>-Users`. Only the IndexedDB branch builds this name
  (OutSystems.js:16 initializeDatabase).
- The compiled aggregates read IndexedDB (UBTConnect_Notes_MCS.controller.js:91-107).

The React app keeps IndexedDB (`app/src/shell/localEntities/`).
Exceptions on the wire: `{ error, exception, specificType? }` with the names of the runtime (OutSystems.js:2, note the
spelling `DataBaseException`). Mocks send them as HTTP 500 (the runtime itself answers 200/503 JSON).
