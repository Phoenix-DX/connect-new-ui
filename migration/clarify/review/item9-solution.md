# Item 9: design for render errors, route errors and screen load failures (D1 to D6)

Status: proposal for the user (2026-10-29). No code change until the user approves.

Facts: `item9-render-route-errors.md` (E, T, N, G, P rows; `PRR` = `probe-render-route.json`). Base: the flow scope and
the error page of item 8 (`item8-solution.md` §2, §3, §9), the author rules of `app/docs/guides/page-template.md`.

Evidence keys: `W<n>`, `R<n>`, `ACF:<line>` as in the findings; React files are relative to `app/src/`.

## 1. Summary

| Case | TST result | React today | Proposed React design |
|---|---|---|---|
| D1 | The View that failed is empty, a toast shows the message (P1 to P3) | The RouteError marker replaces the app | One `RenderErrorBoundary` per screen container: the screen is empty, `raiseToFlowHandler` shows the toast |
| D2 | The error page (P4; render loop T3) | The RouteError marker | A render loop goes to `showErrorPage`. An error outside the screens goes to `showErrorPage` (root boundary, RouteError) |
| D3 | A full page load, the server page 404 (N14, P6) | The NotMigrated marker | `goTo` sends a path that no screen has to `window.location.assign` (full page load). The `*` route renders nothing |
| D4 | The server answers HTTP 404 (P7) | The NotMigrated marker | The server decides. Demo: a dev-server rule answers 404. Production: a host rule, later |
| D5 | The error page; the load never settles (N12, N13) | The RouteError marker; the failure stays cached | `screens.ts` calls `showErrorPage` on a failed chunk load and keeps the load pending |
| D6 | First load: the error page; later: go back (N8) | No equivalent | No code now. One MCP question session (U2, U6) decides whether the case exists |

One new platform component, four changed files, one optional build plugin. No page or hook changes. The React
structure stays: no boundary per ported block, no View tree.

## 2. Case D1: a render error in a widget or in a block

### 2.1 TST result

The nearest ErrorBoundary above the render that fails catches the error (T1, T2, T6; P1 to P3). That boundary renders
`null` and never resets (T2).

`View.onError` calls `controllerInstance.handleError(e)` (T3). The flow handler is
App_Common for the Home flow (E5). A plain Error is not a system exception (E7), so AllExceptions logs it and calls
`ShowExceptionMessage(message, False)` (E8). The user sees an empty View and an error toast; the URL and the active
screen stay (P1 to P3, `PRR:u4.*`).

### 2.2 React today

`main.tsx:59-61` has one ErrorBoundary around the router. `router.tsx:37` gives the root route `errorElement:
<RouteError />`, so React Router replaces AppFrame and the screen with the marker (`RouteError.tsx:8-18`). No toast
shows, because no code calls `raiseToFlowHandler` for a render error (findings §2.3).

### 2.3 Proposed design

New component `platform/feedback/RenderErrorBoundary.tsx`, a class boundary with a function wrapper:

```tsx
export function RenderErrorBoundary({ name, children }: { name: string; children: ReactNode }): ReactNode;
```

1. `router.tsx:19-23` wraps the element of every route: `<RenderErrorBoundary name={r.screen}><Suspense …>…</Suspense></RenderErrorBoundary>`.
   The element renders inside the screen container of its history entry (`ScreenTransitionGroup.tsx:164-181`). So
   each entry has its own boundary instance, as each TST screen has its own View (T1).
2. `getDerivedStateFromError` stores the error. `render` returns `null` for the rest of the instance life (T2). The
   container `.active-screen.screen-container` stays in the document and is empty, as in P3.
3. `componentDidCatch(error, info)`:
   - `log.error('render error', { screen: name, message, componentStack })` (E8 `Logger.error`; D8).
   - A render loop (`isRenderLoopError`, §3) goes to `showErrorPage(error)` (T3, `createRenderLoopError`).
   - Every other error goes to `raiseToFlowHandler(error, { active })` (T3, T4, E5). `active` is
     `useIsCurrentEntry()` of the entry (`osNavigate.ts:104-110`), the same context that `flow.active()` gives
     (item 8 §2.2). The import is `@/platform/feedback/flowErrors` (`flowErrors.ts:9`).
4. The handler does what App_Common does (`exceptions.ts:92-121`). A plain Error becomes the toast
   `showExceptionMessage(message, false)` (`:107-111`). A SecurityException takes the Login branch (`:98-106`). A
   system exception opens the error page when the entry is active (`:113-116`). The toast host `CommonUiHost` is
   outside the screen containers (`AppFrame.tsx:29`), so the toast shows above the empty screen, as in P1 to P3.

What the user sees: the screen content is empty, the bottom bar too, the URL stays, and the error toast shows
(P3). A navigation to the same screen creates a new entry and a new boundary, so the screen renders again (T1, T2).

Granularity: TST empties only the View whose boundary caught the error (P1, P2). The design empties the whole screen.
The module exports the component, so a reviewer can wrap one sub-tree (a list item) with `<RenderErrorBoundary name="…">` and
get the P1 result there. The design does not add such wrappers now (open point 1).

### 2.4 Why this design

- The behaviour is the TST chain T3 → T4 → E5 → E8, through the existing handler `raiseToFlowHandler`. No new
  toast code, no new message rules.
- The structure is React: one boundary at the route element, where React Router and `ScreenTransitionGroup` already
  give one instance per history entry. No boundary per ported block (the TST tree has 552 boundaries for one screen,
  `PRR:u4.tree`).
- The flow handler already has the context check (R6, `exceptions.ts:113`). A render error of a leaving screen
  (during the 300 ms transition) shows no error page, as on TST (E2, E3).

### 2.5 Rejected options

| Option | Why rejected |
|---|---|
| A boundary in every ported block or container | Copies the OutSystems View tree. 64 pages and the containers change. The page template forbids such a rule for components (props only) |
| A second boundary inside each Page, around its content, to separate "screen own render" (P4) from "layout render" (P3) | Only the Page author can place it; 64 pages change. The split exists because of the TST View nesting (T6), not because of a user need |
| Keep the RouteError marker and add a toast | The marker is not what TST shows (findings §5). The whole app disappears, the URL and the shell too |
| `onCaughtError` of `createRoot` (React 19) instead of a boundary | It reports errors that a boundary caught, but renders nothing. The empty View needs a boundary anyway |

## 3. Case D2: the own expressions of a screen; a render loop

### 3.1 TST result

The own render of a screen throws: the root boundary of the Router catches it (T5, T6; P4). Its `onError` is
`runtime.handleError` (T5), so `Application.handleError` → `ErrorHandling.handleError` without a context (E4, E3) →
`navigateToErrorPage` (E1, E2). The user sees `_error.html` with the default text and RELOAD, no toast (P4). A render
loop ("Maximum update depth exceeded") calls `View.handleError(createRenderLoopError(…))`, which is also
`ErrorHandling.handleError` without a context: the error page (T3, Code only).

### 3.2 React today

The RouteError marker (`router.tsx:37`, `RouteError.tsx:18`). Nothing distinguishes a render loop.

### 3.3 Proposed design

1. Render loop: `RenderErrorBoundary.componentDidCatch` tests `isRenderLoopError(error)`: the message starts with
   "Maximum update depth exceeded" (the text that React throws; TST tests the same text, R186300). Then it calls
   `showErrorPage(error)` directly, with no context check (T3: no context, E3). `showErrorPage` logs and leaves the
   document (`errorPage.ts:18-31`).
2. The own render of a screen: in React, the Page component and its layout are inside the same route element.
   The screen boundary of §2 catches both. The result is P3 (empty screen, toast), not P4 (error page).
   This is the one difference the design keeps (open point 1).
3. Errors outside a screen (AppFrame hosts: `AppStart`, `NavigationHost`, `AppLockHost`, `CommonUiHost`,
   `StylesheetHost`; `AppFrame.tsx:22-31`): these are the React equivalent of the TST root boundary (T5).
   - `app/RouteError.tsx` (the `errorElement`, `router.tsx:37`): `useEffect` → `log.error('route error', …)` then
     `showErrorPage(error)`. It returns `null`. The marker goes.
   - `app/ErrorBoundary.tsx` (`main.tsx:60`, outside the router): `componentDidCatch` → `log.error` then
     `showErrorPage(error)`. `render` returns `null` after the error. The marker goes.
   - Both stay: React Router renders its own default error page when a route has no `errorElement`, and the outer
     boundary covers RouterProvider itself.

### 3.4 Why this design

The error page is the TST result for an error that has no screen context (E3, E4, T5). `showErrorPage` is the item 8
port of `navigateToErrorPage` (`errorPage.ts`), already tested (`errorPage.test.ts`, `errorPageDocument.test.ts`).
The render-loop rule is the only TST logic that the port needs (T3); it is a text test, not a structure.

### 3.5 Rejected options

| Option | Why rejected |
|---|---|
| The error page for every render error inside a screen (P4 for all) | Loses the P1 to P3 result, which the probe observed for three of four cases |
| A React `ErrorPage` component in the tree | Item 8 §3.1 chose the static document, user 2026-10-28 (§9); a broken runtime must not render the page |

## 4. Case D3: a later navigation to a path that no screen has

### 4.1 TST result

`navigateTo(url)` tests whether the URL is internal. With `AllowInterAppNavigationWhenAppIsRoot` set, a URL is
internal only when it matches a screen URL of the home module (N14; `PRR:u5.laterNav.call.checks`, P5). An unknown
path is external: `changeWindowLocation`, a full page load (N14; P6).

The server answers "404 - File or directory not
found." and the app runtime is gone (P6). `NotFoundScreen` (N2) is not reached this way (findings §7, point 3).

### 4.2 React today

`router.tsx:43`: the `*` route renders `NotMigrated route={null}`, the marker "unknown route" (`NotMigrated.tsx:8`).
`goTo` (`osNavigate.ts:94-98`) sends every path to the router.

### 4.3 Proposed design

1. `osNavigate.ts` `goTo` (`:94-98`), after the flag redirect: when `screenOf(target.path) === null`
   (`paths.ts:23-27`), it calls `window.location.assign(screenUrl(target.path, target.params))` and returns. The
   history, the transition state and the replace mark are not touched: TST throws `RedirectOccurredException` and
   leaves the document (P6). `useOsNavigate`, `useNavigateBack` and `osNavigateTo` share `goTo`, so one change covers
   the three (`:124-134`, `:147-153`). The R4 context check stays first (`:129-130`).
2. The `*` route (`router.tsx:43`) renders a new `app/UnknownPath.tsx` in place of `NotMigrated route={null}`:
   - It logs `log.error('unknown path', { path })`.
   - It renders `null`: the TST Root stays empty when the runtime starts on a path that no route has (N5). On TST
     only a server that gives the app for an unknown path leads to this state, and TST's server does not (P7).
   - Dev server with `?review=1`: it renders the marker "unknown route" as today (`NotCaptured`,
     `reviewMarkers.ts:14-19`). Reaching this route from inside the app means a `navigate()` call that bypassed
     `goTo`, which is a bug worth a marker.
3. `NotMigrated` with a route stays as it is (`router.tsx:25-28`): it is the fallback for a missing page module, not
   part of item 9.

What the user sees after an in-app navigation to an unknown path: a full page load. The server answers (§5). In the
demo, the dev server answers (§5.3, option a) or the app with an empty screen (option b).

### 4.4 Why this design

The rule "a URL outside the screen list is external" is TST logic (N14), and `goTo` is the one place where every
app navigation passes. The React route table (`ROUTES`, `paths.ts:19`) is the "screen URLs of the home module" of
`urlBelongsToCurrentApplication` (W229508). No NotFoundScreen port: TST never shows it (findings §7, point 3).

### 4.5 Rejected options

| Option | Why rejected |
|---|---|
| A React page that shows the text "404 - File or directory not found." | A page of the app that works means the app loaded, which TST does not do (P6). It fakes a server page |
| Port `NotFoundScreen` (N2): the error page with "Screen not found: <path>" | Code only; the probe shows TST never reaches it from `navigateTo` or a first load (P6, P7) |
| `window.location.assign` from the `*` route on every mount | A host that serves the app for every path (SPA fallback) gives a reload loop. The guard would need state |

## 5. Case D4: the first load of a path that no screen has

### 5.1 TST result

The server answers HTTP 404 with "404 - File or directory not found." at 1 s and 6 s. No runtime, no splash (P7).
The service worker sends an unknown path to the server (N15; P8, Code only).

### 5.2 React today

The dev server serves `index.html` for every path (Vite default `appType: 'spa'`; `vite.config.ts:14-33` sets no
`appType`). The app starts and the `*` route shows the marker. The app service worker (demo and production builds)
treats a path without a file extension as an app navigation. It tries the network first, then the precached
`index.html` (`swRoutes.ts:61-64, 77-82`; `sw.ts:7`).

### 5.3 Proposed design

The server decides this case, not React. The demo and production answers differ.

Demo (dev server and `vite preview`), option (a) of open point 3: a Vite plugin `app/build/unknownPaths.ts` with
`configureServer` and `configurePreviewServer`. It answers 404 for a GET whose path meets four conditions: under
`/UBTConnect/`, no file extension, not `_error.html`, and `screenOf(path) === null`. The body is a small HTML
document; its title and text are "404 - File or directory not found." (P7). Every other request goes on. The decision function is pure
and unit tested. The static files of `public/UBTConnect/` keep their extensions, so they pass.

Production: the host returns 404 for a path under `/UBTConnect/` that is not in the route list. The build can emit
the list from `routes.generated.ts`. This is host configuration (BFF or static host) and waits for the production
phase (`project-focus-colleague-demo`).

The service worker: online, the network answer wins, so the host's 404 shows
(`sw.ts:7`). Offline, the precached `index.html` answers and `UnknownPath` renders nothing; TST offline reaches no
server (N15). A stricter `isAppNavigation` on the route list is a PWA follow-up (open point 6).

Markers: none in production (`showReviewMarkers()` is false outside `import.meta.env.DEV`, `reviewMarkers.ts:15`).
Dev with `?review=1`: the marker, when the app does load (option b, or a path that the plugin lets through).

### 5.4 Why this design

TST's result is a server answer (P7). The React app cannot produce an HTTP 404; the right layer is the server that
serves the app. The dev plugin makes the demo show the TST result and makes D3 and D4 testable end to end.

### 5.5 Rejected options

| Option | Why rejected |
|---|---|
| A React page with the 404 text | See §4.5 |
| A static `public/404.html` that the `*` route loads | The app loaded first; TST's app does not load (P7). A full load from the `*` route has the loop risk of §4.5 |

## 6. Case D5: the screen code does not load

### 6.1 TST result

`ScreenLoader` calls `loadModule` without an error callback; `CDNFilenameVersioning` is false, so no retry (N12). The
error goes to `requirejs.onError`. Outside a version upgrade, `Application.handleError` opens the error page (N13, E4,
E3). The load promise never settles (N13), so it blocks a later navigation (N4) and the first load stays empty (N5)
until the document changes. The user sees `_error.html` with the default text and RELOAD.

### 6.2 React today

`screens.ts:29-33`: a failed `loader()` keeps its rejected promise (`??=`). `use()` throws it into the route, and the
RouteError marker shows (`router.tsx:37`). `prepareScreen` (`:57-60`) ignores the failure, so the transition starts
and then the marker shows.

### 6.3 Proposed design

`screens.ts` `loadable.load` (`:29-33`):

```ts
entry.promise ??= loader().then(
  (m) => (entry.component = m.default),
  (error: unknown) => {
    showErrorPage(error); // N13: Application.handleError → the error page; no retry (N12)
    return new Promise<never>(() => {}); // N13: the load promise never settles
  },
);
```

- First screen of the page: `use(entry.load())` suspends on the pending promise, the Suspense fallback `null` stays
  (`router.tsx:20`), and the document changes to `_error.html` (N5 then E2).
- Later navigation: `prepareScreen` (`:57-60`) stays pending, `ScreenTransitionGroup` does not advance
  (`ScreenTransitionGroup.tsx:143-151`), the current screen stays until the document changes (N4, N13).
- The `.then(() => undefined, () => undefined)` of `prepareScreen` (`:57-60`) becomes `.then(() => undefined)`: a
  rejection no longer exists.
- `showErrorPage` logs `error page` with the name and message (`errorPage.ts:19-21`): D8.
- No retry, as TST (N12). RELOAD on the error page loads `/UBTConnect/` (item 8 P5), which is the only retry on TST
  too. The cached pending promise is gone with the document.
- Not in this design: the `handleUpgradeError` branch of N13 (a chunk fails during a version upgrade). The React
  update path of the PWA (`pwa/register.ts`) is a production item.

Markers: the RouteError marker no longer shows for this case in any build (§3.3).

### 6.4 Why this design

The TST logic is "no retry, error page, the load hangs" (N12, N13). The two lines in `loadable.load` give exactly that
through the existing `showErrorPage`. No new state, no route change.

### 6.5 Rejected options

| Option | Why rejected |
|---|---|
| Retry the import once | TST has no retry (N12, `CDNFilenameVersioning = false`) |
| Throw a `SystemException` into the route and let RouteError open the page | The route element renders first; `ScreenTransitionGroup` would start the transition (N4 differs). More code for the same result |
| Reset `entry.promise` on failure | TST never retries without a reload |

## 7. Case D6: a permission check fails and the handler does not navigate

### 7.1 TST result

`checkPermissions` throws before the screen loads (N7), with the context of the active screen. When the flow handler
navigates, the navigation replaces the location (N8). When it does not navigate: the first load calls
`handleError(new Error("No Permissions"))` (the error page), a later navigation goes back (N8). The load then
rejects with "Invalid Permissions" (N9).

For UBTConnect, App_Common always navigates on a SecurityException. With a user id: a toast, a logout and a full
page load of Login (ACF:69-75). Without one: Login with `In_IsFromInvalidPermissions` (ACF:76-85). So the case
"handler does not navigate" needs one of two things. The flow has its own On Exception handler (U2, open), or the
check is not `checkRegistered` (U6, open).

### 7.2 React today

`RouteGuard.tsx:60-76`: a signed-out user on a member route goes to Login with `In_IsFromInvalidPermissions`
(`followGuardRedirect`, `:50-55`). The route meta has `access` and `lock` only (`routes.ts:24-33`): no role.

### 7.3 Proposed design

No code in this item. The design reserves the place. When U6 or U2 shows a reachable case, `guardRedirect`
(`RouteGuard.tsx:35-43`) gets a third outcome `noPermissions`. `RouteGuard` maps it to `showErrorPage(new
Error('No Permissions'))` at the first check, and to `navigate(-1)` later (N8). Until then, a speculative branch adds
untested code (open point 4).

One fact to check in the build (open point 5): N8 says the handler's navigation replaces the location. `RouteGuard.tsx:71`
navigates without `replace`, so the history keeps the protected entry. The findings do not list this difference.

### 7.4 Rejected options

| Option | Why rejected |
|---|---|
| Build the N8 branch now behind a `role` meta | No route sets a role; U6 is open. Code without a reachable case |
| Move the guard before the render, as N7 | Not a D6 difference; the redirect runs in the same commit's effect, and no capture shows the frame |

## 8. Review markers per case

| Case | Dev server (`?review=1`) | Dev default, demo build | Production build |
|---|---|---|---|
| D1 | TST result (empty screen, toast) | same | same |
| D2 | the error page | same | same |
| D3 | full page load; the `*` route shows the marker only when reached by a bypassing `navigate()` | full page load; `*` renders nothing | same |
| D4 | the dev server's 404 (option a) or the marker (option b) | option a: 404; option b: nothing | the host's 404 |
| D5 | the error page | same | same |
| D6 | unchanged | unchanged | unchanged |

Open point 2 decides whether dev keeps a marker for D1, D2 and D5. The recommendation is no: the console has React's
error with the component stack, and the log has `render error` with the screen name.

## 9. Test plan (tests first)

### 9.1 Unit and integration (Vitest)

`platform/feedback/RenderErrorBoundary.test.tsx` (new), with `renderRoutes` of `testRouter.tsx` and a
`testQueryClient()`:

1. A child throws a plain Error: the boundary renders nothing, `log.error('render error', { screen })` once, a
   feedback message with the error text shows (`feedbackStore`), `location.assign` is not called.
2. The toast text equals the TST text of `PRR:u4.blockChild.toastBoxes` (the thrown message plus a full stop). When
   the port shows no full stop, the build step first finds where TST adds it (`ShowExceptionMessage` UC:16160-16555
   or the feedback block).
3. A child throws a `SystemException`: `location.assign('/UBTConnect/_error.html')` once, no toast.
4. A child throws `new Error('Maximum update depth exceeded…')`: `location.assign('/UBTConnect/_error.html')`, no
   toast, no `raiseToFlowHandler` branch.
5. A child throws an `IgnorableSystemException`: nothing shows, the log has `render error` only.
6. The entry is not current (a leaving screen, `resetNavigation` + a second entry): a `SystemException` gives the
   log line `error page skipped: out of context` and no `location.assign` (R6).
7. A second render of the same instance after the error: still nothing (T2). A new entry (a navigation to the same
   path) renders the screen again.
8. Siblings: the toast host outside the boundary still renders (the `CommonUiHost` position, `AppFrame.tsx:29`).

`app/RouteError.test.tsx` (new) and `app/ErrorBoundary.test.tsx` (changed): the component logs the error, then
calls `location.assign('/UBTConnect/_error.html')`; it renders nothing; no marker text.

`app/screens.test.ts` (new): a loader that rejects: `location.assign('/UBTConnect/_error.html')` once,
`log.error('error page')`, one loader call, `prepareScreen` stays pending, `entry.component` stays null.
A loader that resolves: unchanged behaviour.

`platform/navigation/osNavigate.test.tsx` (changed): `useOsNavigate('/UBTConnect/NoSuchScreen', { a: 1 })` calls
`window.location.assign('/UBTConnect/NoSuchScreen?a=1')` and does not change the router location; a known path
changes the router location and does not call `assign`; `osNavigateTo` with the host navigate does the same; the
R4 check still throws `OutOfContextException` first from a left screen. The flag redirect runs before the test
(`routes.ts` `FLAG_REDIRECTS`): a redirected target that is a screen navigates in the router.

`app/router.test.tsx` (changed): `UnknownPath` renders nothing by default and logs `unknown path`; with
`setReviewMarkers(true)` it shows "Not captured: unknown route" with the path.

`app/build/unknownPaths.test.ts` (new, option a): the decision function: `/UBTConnect/NoSuchScreen` → 404;
`/UBTConnect/HomeFeed`, `/UBTConnect/`, `/UBTConnect/_error.html`, `/UBTConnect/css/x.css`, `/assets/app.js`,
`/embed/feeds` → pass.

`app/RouteGuard.test.tsx` (changed, open point 5): the login redirect replaces the entry, once the compiled code confirms N8.

### 9.2 End to end and parity

- `npm run e2e:pwa` (`build/e2e/pwa.e2e.ts`) gets two cases on the preview server. A first load of
  `/UBTConnect/NoSuchScreen` answers 404 (option a). A navigation to a screen whose chunk the test deleted from
  `dist/` ends on `_error.html` (D5).
- Parity: `RenderErrorBoundary` renders its children unchanged, so no captured DOM changes. The gate is
  `migration/tools/refactor_parity.py --level visual` on the routes of each step (item 8 gates: per change scope).
  One full 64-route sweep closes the item.
- A manual check on the dev server, with the probe method of §7 of the findings. Throw in one component of
  BrowseCountries. Compare with `PRR:u4.outerBlockOwn`: empty screen, toast text, URL kept.

## 10. Build steps

| Step | Files | Tests and parity that it can affect |
|---|---|---|
| B1 boundary | new `platform/feedback/RenderErrorBoundary.tsx` + test; export in `platform/feedback/index.ts` is not needed (`router.tsx` imports the module) | none (new code) |
| B2 router and root | `app/router.tsx:19-23, 37`; `app/RouteError.tsx`; `app/ErrorBoundary.tsx`; `app/ErrorBoundary.test.tsx`; new `app/RouteError.test.tsx` | `router.test.tsx`; every route renders inside the boundary: a 3-route smoke of parity, the full sweep at the end |
| B3 chunk load | `app/screens.ts:29-33, 57-60`; new `app/screens.test.ts` | `ScreenTransitionGroup.test.tsx` (prepare pending path) |
| B4 unknown path | `platform/navigation/osNavigate.ts:94-98` + test; new `app/UnknownPath.tsx`; `app/router.tsx:43`; `app/router.test.tsx` | `RouteGuard.test.tsx` ("unknown path: no redirect", `:93`), `NavigationHost` tests that navigate to `/nowhere`-style paths (grep before the change) |
| B5 dev 404 (option a) | new `app/build/unknownPaths.ts` + test; `app/vite.config.ts:19-27`; `app/docs/guides/pwa.md` (production host rule) | `npm run e2e:pwa` |
| B6 guard replace (open point 5) | `app/RouteGuard.tsx:71`; `RouteGuard.test.tsx` | Login parity from a protected deep link |
| B7 docs | `app/docs/guides/page-template.md` (rule: no own boundary; `RenderErrorBoundary` is opt-in for a sub-tree); `app/docs/architecture/overview.md` "Runtime pieces"; `app/CHANGELOG`; `migration/knowledge/` (TST error handling facts, linked from the findings); `item9-render-route-errors.md` §5 gets a link to this file | none |

Each step passes `npm run ci` (`package.json:28`), then a local commit on `clarify-screens`. Steps B1 to B3 can go
to one developer in order; B4 and B5 are independent of B1 to B3.

Sizes: B1 about 80 lines + 120 test lines; B2 about
40 lines; B3 about 15 lines + 60 test lines; B4 about 40 lines + 60 test lines; B5 about 40 lines + 40 test lines.

Cross-checks on `npm run ci`: `arch` (platform imports no `app/`: `RenderErrorBoundary` imports only `platform/` and,
through `flowErrors`, `legacy/os/`, rule 9 `overview.md:117`); `unused` (`NotMigrated` keeps its caller at
`router.tsx:27`; `NotCaptured` keeps its callers).

## 11. Open points for the user

1. **Granularity and the screen-own case (D1, D2).**
   - (a) One boundary per screen. A render error anywhere in the screen gives an empty screen and the toast (P3). The
     error page shows for a render loop and for an error outside the screens. Difference kept: P4 (the own render of
     the screen) shows the toast instead of the error page.
   - (b) The error page for every render error inside a screen (P4 for all). Differences kept: P1 to P3.
   - (c) As (a), plus `RenderErrorBoundary` around each item in the shared list components, so one bad item empties
     one item (P1). Touches `components/` and adds a `platform/` import there (rule 4, `overview.md:114`): needs a
     slot or a wrapper at the page level instead.
   - Recommendation: (a). Three of four observed cases match, the code is one component, and (c) stays possible
     later without a design change.
2. **Markers for D1, D2, D5 in dev.**
   - (a) No marker: every build shows the TST result; the log and the console carry the message.
   - (b) Dev server with `?review=1` shows the `NotCaptured` marker with the message instead of the TST result.
   - (c) Keep today's markers (no change). Rejected: it is the difference the item exists for.
   - Recommendation: (a). A marker that replaces the TST result hides the behaviour under review.
3. **D4 in the demo.**
   - (a) The Vite plugin for the dev server and `vite preview` (B5), production host rule recorded for later.
   - (b) Nothing now; the dev server still serves the app, `UnknownPath` renders nothing (N5). Production host rule
     recorded for later.
   - (c) A React page with the 404 text. Rejected (§4.5).
   - Recommendation: (a). About 40 lines, and it makes D3 and D4 testable end to end.
4. **D6.**
   - (a) No code. One MCP question session for U1, U2, U6 (findings §6), then a decision. U3 (the handler of a block
     of another module) does not change this design: React has one flow handler, the App_Common port.
   - (b) Build the N8 branch now behind a `role` meta that no route sets.
   - Recommendation: (a).
5. **RouteGuard replace (N8).** `RouteGuard.tsx:71` pushes the Login entry; N8 says the handler's navigation replaces
   the location.
   - (a) Confirm N8 against the compiled code (`R281345`) in B6 and set `replace: true` when confirmed.
   - (b) Leave it; record the difference in the findings.
   - Recommendation: (a). It is one option in one call, and the history after a deep link then matches TST.
6. **Service worker, unknown path offline (production, PWA).** `isAppNavigation` uses "no file extension"
   (`swRoutes.ts:61-64`); TST's worker sends an unknown path to the server (N15).
   - (a) Later, in the production phase, with the host rule.
   - (b) Now: `isAppNavigation` tests the route list. Touches `pwa/` and `npm run e2e:pwa`.
   - Recommendation: (a). The demo does not run offline on unknown paths.

Facts still open that do not change the design: U1 (Global Exception Handler property), U3, U7 (findings §6).

## 12. User decisions (2026-10-29)

| Open point | Answer |
|---|---|
| Design D1 to D6 and point 1 | Approved with (a): one `RenderErrorBoundary` per screen; the error page for a render loop and for errors outside the screens. Difference kept: P4 shows the toast. |
| 2. Markers for D1, D2, D5 | (a) No marker: every build shows the TST result. |
| 3. D4 in the demo | (a) The Vite plugin for the dev server and `vite preview`; the production host rule is recorded for later. |
| 4, 5, 6 | (a) As recommended: D6 has no code now (one MCP session for U1, U2, U6 first); confirm N8 against the compiled code in B6 and set `replace: true`; the service worker change waits for the production phase. |
| Build questions (2026-10-29) | 9A Q1 (a): keep the React error for a render loop. 9B Q2 (a): no change to `serve.mjs` and `serve.py`. 9B Q1: the PINUnlock history goes to the MCP session with U1, U2, U6 (user chose one MCP session; the user opens Connect2_OrbitMobile_BL). |
