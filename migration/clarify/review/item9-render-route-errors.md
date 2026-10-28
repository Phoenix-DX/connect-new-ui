# Item 9: render errors, route errors and uncaught errors (2026-10-28)

Deferred item Q3 (c) of item 8 (`item8-w23-errorpage.md` §7). The question: what does the TST runtime do with an error
that no flow handler takes, and what does the React app do today?

Evidence keys (live TST files, read-only):
- `W<n>` = character offset in `migration/runtime-sources/OutSystems.js`.
- `R<n>` = character offset in `migration/runtime-sources/OutSystemsReactView.js`.
- `ACF:<line>` = `migration/shell/sources/UBTConnect.App_Common.controller.js`.

Certainty labels follow `glossary.md` §7. This review did not use the MCP. The questions for the MCP are in §6.

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
| T6 | `internalRender()` runs inside `View.render`, outside the boundary that `View.render` creates. React does not catch an error with the boundary that the failing component renders. So the boundary of the parent View catches it. The parent of a screen is the root boundary (T5) | R191883 | Code (React rule); Unclear without a live probe |
| T7 | A block of another module calls `controller.handleError(ex)` (for example `Connect2_OrbitMobile_MUI.Orbit_Blocks.OrbitAdminTag.mvc.js:170-171`). The `var controller` of that file is in the constructor scope (:141). Which handler gets the error is not clear from the code | OrbitAdminTag.mvc.js:141, :170-171 | Unclear |

### 2.2 What the user sees on TST

| Where the render error is | Boundary that catches it | What the user sees |
|---|---|---|
| A widget inside a screen or block (a child component of the View) | The boundary of that View (T1, T2) | The content of that View is empty, and a toast shows the error message (T3, T4, E8) |
| The own expressions of a block (`internalRender` of the block) | The boundary of the parent View (T6) | The content of the parent (screen or block) is empty, and a toast shows (T3, T4, E8) |
| The own expressions of a screen (`internalRender` of the screen) | The root boundary (T5, T6) | The app is blank, then the error page with the default text and RELOAD (E3, E4; item 8 P4, P7) |
| A render loop, anywhere | The View boundary, then `ErrorHandling.handleError` (T3) | The error page with the default text |

The rows 2 and 3 depend on T6. Confirm them with a live probe (§6 U4).

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

### 3.2 What the user sees on TST

| Case | What the user sees |
|---|---|
| Later navigation to a path that no screen has | The error page "Screen not found: /UBTConnect/<path>" and RELOAD (N2, N4) |
| First load of a path that no screen has, no splash | An empty app (N5) |
| First load of a path that no screen has, with the splash | Unclear (N6): §6 U5 |
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
| D1 | Render error in a widget or in the own expressions of a block | Parent or own View empty, plus a toast with the message (§2.2) | The whole app shows the RouteError marker |
| D2 | Render error in the own expressions of a screen; a render loop | The error page, default text (§2.2) | The RouteError marker |
| D3 | Later navigation to an unknown path | The error page "Screen not found: <path>" (N2) | The NotMigrated marker "unknown route" |
| D4 | First load of an unknown path | An empty app, or the splash (N5, N6) | The NotMigrated marker |
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
1. **U4** A render error in a block expression: does the parent screen go empty with a toast (T6, §2.2 rows 2 and 3)?
2. **U5** A first load of `/UBTConnect/<unknown>`: splash, empty app, or error page (N5, N6)?
3. **U7** With a user id, does the SecurityException branch (toast, logout, full page load) start a pending reload
   before the "No Permissions" check of N8?

For the user (decision, after the facts): keep the review markers, or port the TST result per case (D1 to D6)?
