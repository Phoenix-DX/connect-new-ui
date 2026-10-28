# Item 9: render errors, route errors and uncaught errors (2026-10-28)

Deferred item Q3 (c) of item 8 (`item8-w23-errorpage.md` §7). The question: what does the TST runtime do with an error
that no flow handler takes, and what does the React app do today?

Evidence keys (live TST files, read-only):
- `W<n>` = character offset in `migration/runtime-sources/OutSystems.js`.
- `R<n>` = character offset in `migration/runtime-sources/OutSystemsReactView.js`.
- `ACF:<line>` = `migration/shell/sources/UBTConnect.App_Common.controller.js`.
- `SW<n>` = character offset in `migration/runtime-sources/UBTConnect.pwaServiceWorker.js`.
- `PRR:<key>` = key in `migration/clarify/review/probe-render-route.json` (the live probe of §7).

Certainty labels follow `glossary.md` §7. This review did not use the MCP. The questions for the MCP are in §6.
§7 gives the results of a read-only live probe on TST (2026-10-28).

## 1. The common path of the TST runtime

| # | Fact | Evidence | Label |
|---|---|---|---|
| E1 | `handleError(e, ctx)` traces the error. An offline error opens the app-offline page. An IncompatibleProducerException opens the page with `e.message`. Every other error calls `navigateToErrorPage(e, undefined, undefined, ctx)` | `ErrorHandling` `l()` W322831 | Code |
| E2 | `navigateToErrorPage` returns when a reload is pending. It logs `e` when `e` is set. It returns when the context is not valid. Else it stores the texts and changes the window to `_error.html` | `ErrorHandling` `s()` W322831 | Code |
| E3 | `isValidContext(ctx)` is `!ctx \|\| !ctx.isOutOfContext`. So a call without a context always opens the error page | Navigation `f()` W221723 | Code |
| E4 | `Application.handleError(e, t)` calls `ErrorHandling.handleError(e, t)` directly. It does not go through App_Common OnException | W502444 | Code |
| E5 | App_Common OnException is the flow handler. The Home flow controller sends its errors there. An error that OnException does not handle goes to `ErrorHandling.handleError(ex, callContext)` | ACF:12-137, ACF:122-125; `UBTConnect.Home.controller.js` `handleError` | Code |
| E6 | `registerDefaultErrorHandler` registers the service `GlobalExceptionHandler`. No code in the TST runtime reads that service (3 hits: 2 in the enum, 1 in the register call) | W61362, W61386, W502583 | Code |
| E7 | A plain JavaScript error (TypeError, Error) is not a system exception: `isSystem(e)` is `isInstanceOf(e, SystemException)` | W45570, `isInstanceOf` W44820 | Code |
| E8 | App_Common AllExceptions (not a system exception): `Logger.error`, then `ShowExceptionMessage(message, False)`. A message with "NoteCommunicationError" shows the communication message | ACF:91-117 | Code |

So an unhandled JavaScript error that reaches App_Common becomes a toast with the error message (E7, E8). An error that
goes to `ErrorHandling.handleError` without a context opens the error page (E1 to E4). Item 8 P4 and P7 give the texts.

## 2. Case 1: render errors

### 2.1 TST facts

| # | Fact | Evidence | Label |
|---|---|---|---|
| T1 | Each screen and each block is a `View`. `View.render` returns an ErrorBoundary with `onError: this.onError` around `this.internalRender()` | R191883 | Code |
| T2 | The ErrorBoundary sets `hasError` in `getDerivedStateFromError` and then renders `null`. `componentDidCatch` calls `props.onError(e)`. Nothing resets `hasError` | R181669 | Code |
| T3 | `View.onError`: a render loop ("Maximum update depth exceeded") calls `View.handleError(createRenderLoopError(...))`, which is `ErrorHandling.handleError` without a context. Every other error calls `controllerInstance.handleError(e)` | R186300, R191398, R191509, R192096 | Code |
| T4 | A screen controller sends `handleError` to its UI flow controller. The Home flow sends it to App_Common (E5) | `UBTConnect.Legacy_AssembleFlow.AssembleDetail.mvc.js:1193-1194`; Home flow (E5) | Code |
| T5 | The Router renders a root ErrorBoundary around the whole router. Its `onError` is `runtime.handleError`, so E4 and E3 apply: the error page | R288402 | Code |
| T6 | `internalRender()` runs inside `View.render`, outside the boundary that `View.render` creates. React does not catch an error with the boundary that the failing component renders. So the boundary of the parent View catches it. The parent of a screen is the root boundary (T5) | R191883 | Code (React rule); Observed (§7, P2, P3) |
| T7 | A block of another module calls `controller.handleError(ex)` (for example `Connect2_OrbitMobile_MUI.Orbit_Blocks.OrbitAdminTag.mvc.js:170-171`). The `var controller` of that file is in the constructor scope (:141). Which handler gets the error is not clear from the code | OrbitAdminTag.mvc.js:141, :170-171 | Unclear |

### 2.2 What the user sees on TST

| Where the render error is | Boundary that catches it | What the user sees |
|---|---|---|
| A widget inside a screen or block (a child component of the View) | The boundary of that View (T1, T2) | The content of that View is empty, and a toast shows the error message (T3, T4, E8) |
| The own expressions of a block (`internalRender` of the block) | The boundary of the parent View (T6) | The content of the parent (screen or block) is empty, and a toast shows (T3, T4, E8) |
| The own expressions of a screen (`internalRender` of the screen) | The root boundary (T5, T6) | The app is blank, then the error page with the default text and RELOAD (E3, E4; item 8 P4, P7) |
| A render loop, anywhere | The View boundary, then `ErrorHandling.handleError` (T3) | The error page with the default text |

The live probe of §7 confirms the rows 1, 2 and 3 (P1 to P4). The probe did not test row 4 (render loop).

### 2.3 React today

- `app/src/main.tsx:59-61`: one ErrorBoundary around `RouterProvider`.
- `app/src/app/router.tsx:37`: the root route has `errorElement: <RouteError />`. React Router catches a render error of
  any route element there, so RouteError replaces the whole root route (AppFrame and the screen).
- `app/src/app/RouteError.tsx:8-18`: logs "route error" and shows the marker "error screen of the original app (route
  error)" with the message.
- `app/src/app/ErrorBoundary.tsx:14-32`: catches the errors outside the router (and of RouteError). It logs "render
  error" and shows the marker "error screen of the original app (render error)".
- No screen or block has its own boundary. A render error never calls `raiseToFlowHandler`
  (`app/src/legacy/os/exceptions.ts:92`), so no toast and no error page show.

## 3. Case 2: route errors and screen load failures

### 3.1 TST facts

| # | Fact | Evidence | Label |
|---|---|---|---|
| N1 | The Switch has the screen routes (exact paths), the default route of the module root, and then the fallback route `NotFoundScreen` | R288700, R290700 | Code |
| N2 | `NotFoundScreen.componentDidMount` calls `navigateToErrorPage(null, "Screen not found: <pathname>", extraMessage)`. UBTConnect sets `messages.screenNotFound` to null, so the page shows that text and RELOAD. Nothing is logged (`e` is null) | R219206; `UBTConnect.appDefinition.js` `errorPageConfig`; E2 | Code |
| N3 | `NoDefaultScreen` ("This module does not contain a default entry.") shows only when the home module has no default screen. UBTConnect has one (HomeFeed, `app-shell.spec.md` 12a U1), so this case does not occur | R219206, R290700 | Code |
| N4 | A later navigation: `createHistory` blocks the navigation and loads the screen first. When no route matches, `load` returns null and the navigation goes on, so N2 applies. When `load` rejects, the navigation is cancelled and the current screen stays | R279201 (`getUserConfirmation`) | Code |
| N5 | The first page load: Root renders null until `screenLoader.load` resolves, and it ignores a rejection (`.catch(function(){})`). When no route matches, `load` returns null and Root stays empty | R267479-267644 | Code |
| N6 | When the splash shows, the loader uses only the splash route, whose path `*` matches any path | R283827 (`shouldRenderSplashScreen()`); R288100 (`pathname:"*"`) | Code |
| N7 | Permission check: `checkPermissions` throws (for example `OS.RolesInfo.checkRegistered()`). The web flow controller handles the error with the context of the active screen | W516745-516872; AssembleDetail.mvc.js:1196-1197 | Code |
| N8 | During N7 the navigation callbacks are `CheckPermissionsNavigationCallbacks`. A navigation of the handler replaces the location. When the handler does not navigate, the first navigation calls `handleError(new Error("No Permissions"))` (error page); a later one goes back | R281345 | Code |
| N9 | After N7 the load rejects with "Invalid Permissions" and dispatches TransitionEnd Failure | R283827 | Code |
| N10 | An unhandled OnInitialize error gives `{permissionsOk: true}` without a controller. The load rejects with "Error loading screen dependencies". The flow handler already ran (toast or error page) | W517020-517400; R283827 | Code |
| N11 | The user left during the load: the load rejects with "No longer on screen" or "Screen is no longer active". Nothing shows | R283827 | Code |
| N12 | A script load error (a chunk): ScreenLoader calls `loadModule` without an error callback. TST has `CDNFilenameVersioning = false`, so no retry. The error goes to `requirejs.onError` | R283827; RequireManager `c()` W458466; `OutSystemsSettings.js` | Code |
| N13 | The `requirejs.onError` handler: during a version upgrade, a non-system error goes to `handleUpgradeError`. Else `Application.handleError` opens the error page (E4, E3). The load promise never settles | W493882 | Code |
| N14 | `navigateTo(url)` sends an internal URL to the history (`goTo`) and an external URL to `changeWindowLocation` (full page load). With the env param `AllowInterAppNavigationWhenAppIsRoot` set, a URL is internal only when it matches a screen URL of the home module. TST has the param set, so an unknown path is external (§7, P5) | W224400 (`M`), W230829 (`getUrlInfo`), W229508 (`urlBelongsToCurrentApplication`), W224025 (`C`) | Code; Observed (§7, P5) |
| N15 | The TST service worker answers every fetch. A path in `urlMappings` gets the mapped file. Other paths go to the cache, then to the server. An unknown path is in neither, so the server answers | SW128911 (fetch listener), SW120005 (`urlMappings`) | Code |

### 3.2 What the user sees on TST

| Case | What the user sees |
|---|---|
| Later navigation to a path that no screen has | A full page load. The server page "404 - File or directory not found." shows, and the app does not load (N14; §7, P6). N2 applies only to an internal URL that no route has |
| First load of a path that no screen has, no splash | The server answers HTTP 404 "404 - File or directory not found." The app does not load, so N5 does not apply (§7, P7) |
| First load of a path that no screen has, with the splash | The same server 404 page: the runtime does not start, so N6 does not apply (§7, P7). The service worker does not change this (N15) |
| Screen code (script) does not load | The error page with the default text (N12, N13) |
| Permission check fails, signed out | Login with `In_IsFromInvalidPermissions=True` (N7, N8; ACF:76-85) |
| Permission check fails, handler does not navigate, first load | The error page with the default text (N8) |
| Permission check fails, handler does not navigate, later navigation | The previous screen (go back, N8) |
| OnInitialize error not handled | The toast or error page of the flow handler. A later navigation is cancelled (N10, N4) |

### 3.3 React today

- `app/src/app/router.tsx:43`: the `*` route shows `NotMigrated` with `route={null}`. `app/src/app/NotMigrated.tsx:5-12`
  shows the marker "unknown route" with the path.
- `app/src/app/router.tsx:39`: `/` redirects to HOME. On TST, `/` is outside the app (note only).
- `app/src/app/screens.ts:29-35`: a failed chunk load keeps the rejected promise (`??=`), so there is no second try.
  `use()` throws, and the root `errorElement` shows the RouteError marker (`router.tsx:37`).
- `app/src/app/screens.ts:57-60`: `prepareScreen` ignores the failure, so the transition starts and then the marker shows.
- `app/src/app/RouteGuard.tsx:60-73`: a signed-out user goes to Login with `In_IsFromInvalidPermissions`, as App_Common
  does. The guard runs in an effect after the route renders. It has no "No Permissions" error page (N8).
- This review did not check the OnInitialize failure path of the React screens (N10).

## 4. Case 3: uncaught errors outside a flow

### 4.1 TST facts

| # | Fact | Evidence | Label |
|---|---|---|---|
| G1 | The TST runtime installs no `error` or `unhandledrejection` listener on the window. `unhandledrejection` and `window.onerror` have 0 hits. The only `addEventListener("error"` is on a RequireJS script tag | W16146 | Code |
| G2 | The other TST sources in `migration/runtime-sources/` and `migration/shell/sources/` install none either. NetworkDetection listens to the `error` event of an XHR only | `NetworkDetection.controller.js:844` | Code |
| G3 | Errors inside a flow go to the controller's `handleError`: client actions, events, data fetches. A JavaScript node ignores only an ignorable error and throws the others | W534850, W527550, W529597, W522850 | Code |
| G4 | `requirejs.onError` is the only global error hook of the runtime (N12, N13) | W459888, W493882 | Code |

What the user sees on TST: nothing. The browser console shows the error. No toast, no error page (G1, G2).

### 4.2 React today

- `app/src/platform/feedback/ignorableErrors.ts:9-21` (installed at `app/src/main.tsx:27`): the `error` and
  `unhandledrejection` listeners call `preventDefault` for an IgnorableSystemException only. Other errors go to the
  console, as on TST.
- On TST, an ignorable error stays inside a flow (G3, ACF:24-26). In React, a navigation of a left screen can throw
  outside a flow, so the filter keeps the console clean. The user sees no difference.
- A flow promise that a hook does not await (`void fn()`) becomes an unhandled rejection in React. On TST the same flow
  goes to the flow handler (G3). Item 8 N3 (HostSurvey) was one such case.

## 5. Differences

| # | Case | TST | React today |
|---|---|---|---|
| D1 | Render error in a widget or in the own expressions of a block | Parent or own View empty, plus a toast with the message (§2.2). Observed (§7, P1 to P3) | The whole app shows the RouteError marker |
| D2 | Render error in the own expressions of a screen; a render loop | The error page, default text (§2.2). Screen expression: Observed (§7, P4). Render loop: Code only | The RouteError marker |
| D3 | Later navigation to an unknown path | A full page load to the server page "404 - File or directory not found." (N14). Observed (§7, P6) | The NotMigrated marker "unknown route" |
| D4 | First load of an unknown path | The server page "404 - File or directory not found." (HTTP 404). Observed (§7, P7) | The NotMigrated marker |
| D5 | Screen code does not load | The error page, default text (N12, N13) | The RouteError marker; the failure stays cached |
| D6 | Permission check fails and the handler does not navigate | First load: the error page; later: go back (N8) | No equivalent; RouteGuard covers the signed-out case only |
| D7 | Uncaught error or rejection outside a flow | Nothing visible (G1, G2) | Nothing visible; ignorable errors are kept out of the console |
| D8 | Log | `Logger.error`; the error page flushes the logs (item 8 P6) | `log.error` in RouteError and ErrorBoundary |

D1 to D5 are the cases where the user sees a different result. The markers are review markers, not TST screens.

## 6. Questions and unclear points

For the MCP (DEV; TST wins on a difference):
1. **U1** UBTConnect module: is the property Global Exception Handler set, and to which flow? The runtime has no
   reader of the `GlobalExceptionHandler` service (E6).
2. **U2** Which UI flows of UBTConnect have their own On Exception handler, and do the others go to App_Common? The code
   shows Home → App_Common (E5) and AssembleDetail → Legacy_AssembleFlow (T4).
3. **U3** Connect2_OrbitMobile_MUI and the other block modules: which exception handler gets a block error (T7)?
4. **U6** Do any UBTConnect screens check a role, not only `checkRegistered`? This decides how often N8 occurs.

For a live probe on TST (read-only):
1. **U4** A render error in a block expression: does the parent screen go empty with a toast (T6, §2.2 rows 2 and 3)? Answered: §7, P1 to P4.
2. **U5** A first load of `/UBTConnect/<unknown>`: splash, empty app, or error page (N5, N6)? Answered: §7, P5 to P8.
3. **U7** With a user id, does the SecurityException branch (toast, logout, full page load) start a pending reload
   before the "No Permissions" check of N8? Not probed: §7.

For the user (decision, after the facts): keep the review markers, or port the TST result per case (D1 to D6)?

## 7. Probe results (2026-10-28)

Script: `migration/clarify/tools/probe_render_route.cjs`. Output: `migration/clarify/review/probe-render-route.json` (`PRR`).

Set-up:
- The probe signed in with `site_auth.cjs` and installed `readonly_guard.cjs` with the allow list of
  `capture-plan.json` `defaults.allowActions`. The guard blocked no call (`PRR:blocked` is empty).
- The probe also aborted the POSTs to `moduleservices/log` (82 calls, `PRR:logPostsAborted`). So the error logs of
  the probe did not reach TST. The probe blocked service workers. The viewport was 390 x 844.
- Screen: BrowseCountries. The probe loaded the screen again before each case.
- U4 method: the probe replaced `internalRender` of one View instance and called `forceUpdate()`. This is a client-side
  re-render only. The error message is "Probe U4 <target> <mode>".

The React tree of BrowseCountries (`PRR:u4.tree`): the screen View has one child View, the layout block
`Layouts.Layout_DetailPage`. The list item `ConnectCorePatterns.Statistics_ListItem` is in the block
`ConnectPatterns.SkeletonSection`. The tree has 551 Views, 552 ErrorBoundary instances, and 1 root boundary.

| # | Case | Boundary that caught the error | What the user sees | Evidence | Label |
|---|---|---|---|---|---|
| P1 | A widget inside a block: `Statistics_ListItem` renders a child that throws | The boundary of `Statistics_ListItem` | That list item is empty. The list, the header "Browse by country" and the URL stay. A toast shows "Probe U4 inner child." | `PRR:u4.blockChild` | Observed |
| P2 | The own render of the block `Statistics_ListItem` throws | The boundary of the parent View `SkeletonSection` | The whole list is empty. The header and the URL stay. A toast shows "Probe U4 inner own." | `PRR:u4.blockOwn` | Observed |
| P3 | The own render of the layout block `Layout_DetailPage` throws (its parent is the screen) | The boundary of the screen View | The screen is empty, also the bottom bar (it is in the layout). The URL and the active screen stay. A toast shows "Probe U4 outer own." No error page | `PRR:u4.outerBlockOwn` | Observed |
| P4 | The own render of the screen `BrowseCountries` throws | The root boundary (Router) | In 300 ms the window goes to `/UBTConnect/_error.html`. It shows "There was an error processing your request." and RELOAD. No toast | `PRR:u4.screenOwn` | Observed |
| P5 | Runtime check before the later navigation | Not applicable | `AllowInterAppNavigationWhenAppIsRoot` is true. `getUrlInfo` gives `isInternal: false` for `/UBTConnect/NoSuchScreen`, and `true` for `/UBTConnect/BrowseDirectory` | `PRR:u5.laterNav.call.checks` | Observed |
| P6 | Later navigation: `navigateTo('/UBTConnect/NoSuchScreen', …, ctx, true)` from the active screen | Not applicable | The call throws RedirectOccurredException, as for a compiled Destination. Then a full page load opens the server page "404 - File or directory not found." ("Server Error"). The app runtime is gone. No `_error.html`, no "Screen not found" text | `PRR:u5.laterNav` | Observed |
| P7 | First load of `/UBTConnect/ThisScreenDoesNotExist` with a valid session | Not applicable | HTTP 404 and the same server page, at 1 s and at 6 s. No app runtime, no splash | `PRR:u5.firstLoad` | Observed |
| P8 | First load with the service worker | Not applicable | The same server 404 page: the service worker sends an unknown path to the server (N15). The probe blocked service workers, so this row is not observed | SW128911 | Code |

Details:
- The toast is an error feedback message: class `feedback-message feedback-message-error feedback-message-autoclose`.
  It is at the top of the viewport (height 56 px) and shows after 300 ms and after 4 s (`PRR:u4.*.toastBoxes`).
  The toast text is the error message with a full stop at the end.
- In P1 to P3 the ErrorBoundary that caught the error renders `null`. React removes its DOM, and nothing else changes.
- Console errors in P1 to P3 (`PRR:u4.*.consoleErrors`): the React error ("Error: Probe U4 …"), one runtime log line
  with the message, and "net::ERR_BLOCKED_BY_CLIENT" for the aborted log POST. P4 adds "[ErrorScreen] Probe U4 screen own".
  P6 and P7 have "the server responded with a status of 404".
- No case had an unhandled rejection or a window `error` event (`PRR:u4.*.after4s.rejections`, `windowErrors`).
- `Statistics_ListItem` belongs to the module ConnectCorePatterns. Its render error reached a handler that shows the
  toast (P1). The probe does not show which flow handler that was, so T7 stays Unclear.
- U7 was not probed. It needs a screen whose role check fails for a signed-in user (U6 is open). The logout of the
  SecurityException branch is a server call, and the guard blocks it.

What the probe settles:
1. T6 and §2.2 rows 1 to 3: Observed (P1 to P4). The nearest ErrorBoundary above the render that fails catches the error.
   For an own expression of a View, that is the boundary of the parent View.
2. D1 and the screen part of D2: Observed. The render loop part of D2 stays Code only.
3. D3 and D4: corrected. On TST an unknown path never reaches NotFoundScreen through `navigateTo` or a first load.
   The user sees the server 404 page (P6, P7). N2 stays a code fact for an internal URL without a route.
4. U5: answered. U4: answered for blocks of BrowseCountries. U7: open.
