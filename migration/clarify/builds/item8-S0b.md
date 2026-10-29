# Item 8, step S0b: the error page: build note (2026-10-28)

- Design: `../review/item8-solution.md` §3 (design B), §5 B, §6 point 3, §7.2 tests 9 and 10, §9 (user 2026-10-28).
  Facts P1–P7: `../review/item8-w23-errorpage.md` §2. Original: `migration/runtime-sources/UBTConnect._error.html`,
  `UBTConnect.error.js`, and the modules `ErrorScreen`, `ErrorHandling`, `StorageObject` of
  `migration/runtime-sources/OutSystems.js` (offsets as `W<n>`).
- The paths below are relative to `app/` unless they start with `migration/`.
- Nothing is committed. No parity sweep, no `npm run ci`, no dev server (the orchestrator runs them).

## Files

Changed (code):

- `public/UBTConnect/_error.html` (new): the head metas (with the viewport meta `:8`), the `<style>` block
  (`:36-150`) and the body (`:155-170`) of the original as they are, ids and classes kept, `#exception-detail` kept and
  hidden. Not copied: the OutSystemsApp user-agent script (`:10-24`) and the runtime scripts (`:26-33`, `:171`). One
  inline script in plain JavaScript at the end of the body, a port of `ErrorScreen` (W536056-538400), commented with
  the P-ids.
- `src/platform/feedback/errorPage.ts`: rewrite. `showErrorPage(error)` logs (as before), writes the three
  sessionStorage keys in a try/catch, then `window.location.assign('/UBTConnect/_error.html')`. The store,
  `getErrorPage`, `subscribeErrorPage` and `resetErrorPage` are removed (no other user: grep of `app/src`, `app/docs`;
  `src/test/setup.ts` and `testRouter.tsx` did not use them).
- `src/main.tsx`: the `ErrorPageGate` import and wrapper are removed.
- Deleted: `src/app/ErrorPageGate.tsx`, `src/app/ErrorPageGate.test.tsx` (1 test).

Changed (docs): `docs/guides/shell.md` (flow handler list: the error page is the static `_error.html`, how it is
served), `docs/guides/pwa.md` (caching table: one row for `/UBTConnect/_error.html`).

Changed (tests): `src/platform/feedback/errorPage.test.ts` (new, 4 tests), `src/platform/feedback/errorPageDocument.test.ts`
(new, 6 tests), `src/legacy/os/exceptions.test.tsx`, `src/platform/navigation/flowScope.test.tsx`,
`src/pwa/swRoutes.test.ts` (one assertion).

Unchanged: `vite.config.ts`, `build/*`, `src/sw/sw.ts`, `src/pwa/swRoutes.ts` (no denylist entry needed, see
Serving), `src/app/ErrorBoundary.tsx`, `src/app/RouteError.tsx` (see Q3).

## Tests (written first)

Before the code: 6 tests failed (`errorPage.test.ts` 4; `exceptions.test.tsx` 2: the system-exception test and test 9
"active scope or no scope"). `errorPageDocument.test.ts` did not load (ENOENT: no `_error.html`). After: 47 of 47 in
the 5 files.

| Design test | File | Covers |
|---|---|---|
| 9 | `exceptions.test.tsx` | inactive scope: the log, no sessionStorage key, no `location.assign`; active scope, then no scope: the three keys and `location.assign('/UBTConnect/_error.html')` 2 times. The system-exception test and the ignore-step test now check the keys and `location.assign` |
| 9 (unit) | `errorPage.test.ts` | the key format and values; the log comes before `location.assign`; a value that is not an `Error`; no session storage (setItem throws): the page still opens |
| 10 | `errorPageDocument.test.ts` | no runtime script and the original viewport meta; no stored text: the default message, empty extra text, "RELOAD", spinner and `#exception-detail` hidden, `#exception-detail-text` `hidden`; RELOAD hides the button and shows the spinner, no load at 1999 ms, `location.assign('/UBTConnect/')` at 2000 ms (fake timers); a stored message and extra message win; after `showErrorPage`: the default message, the exception message only in the console; unreadable values: the defaults |
| – | `swRoutes.test.ts` | `isAppNavigation('/UBTConnect/_error.html')` is false |

Test 10 loads the file: `DOMParser`, the head and the body into the test document, then the inline script with
`new Function` in the test window, so the location stub and the fake timers apply (one
`eslint-disable-next-line @typescript-eslint/no-implied-eval` with its reason). jsdom applies the page's `<style>` to
`getComputedStyle`, so `toBeVisible` checks the CSS of the original.

`flowScope.test.tsx`: the module `errorPage` is mocked; the 3 checks `getErrorPage()` null became
`showErrorPage` not called.

## Behaviour changes

- A system exception with no scope or an active scope leaves the app: the three keys, then a full load of
  `/UBTConnect/_error.html`. Before: the review marker (`NotCaptured`) in place of the app, at the screen URL.
- The page shows "There was an error processing your request." and "RELOAD". A click shows the spinner; 2 s later the
  app root `/UBTConnect/` loads (a new app start). The back button goes to the screen URL, a new document, as on TST.
- In jsdom a real call prints the known line "Not implemented: navigation to another Document" (1 line in the full
  run, there before).
- Parity screenshots: no change expected (no capture shows the error page).

## Serving: what was checked, and how

| Where | Result | How |
|---|---|---|
| Dev (`npm run dev`) | served as the file | Code of Vite 7.3.7 (`node_modules/vite/dist/node/chunks/config.js`): `servePublicMiddleware` (:25866) comes before `htmlFallbackMiddleware` (:25870) and `indexHtmlMiddleware` (:25873) and serves every file of `publicFiles` raw. The plugin middlewares come first and answer only `/UBTConnect/moduleservices/pwa/manifest` (`build/pwa.ts:11`), `/embed/feeds…` (`build/staticFiles.ts:47-48`), `/UBTConnect/img/` and `/UBT_CW/img/` (`staticFiles.ts:95`). The MSW worker does not handle navigations (`public/mockServiceWorker.js:95`). No dev server was started. A dev server that already runs gets the new public file from its watcher; restart it if it answers the app shell |
| Demo build | `dist-demo/UBTConnect/_error.html` | `npm run build:demo` passed; the file is byte-identical to the source (`cmp`), in `dist-demo.zip`, and in the precache of `dist-demo/sw.js` (`DEMO_PRECACHE` `**/*`), so the installed demo shows it offline too. Static hosts: `_redirects` serves existing files first (`build/demo/_redirects:2`); `serve.mjs:54` and `serve.py:43` fall back to `index.html` only for a path without a `.` |
| Service worker | not caught | `isAppNavigation` is false for a path whose last segment has a `.` (`src/pwa/swRoutes.ts` `isRoutePath`); new assertion in `swRoutes.test.ts`. No denylist entry needed. Production precache (`build/pwa.ts` `PRODUCTION_PRECACHE`) does not list it: network (Q4) |

## Differences from the design, with evidence

| # | Design text | Built, with evidence |
|---|---|---|
| D1 | §3.1, P1: keys `ErrorPageMessage`, `ErrorPageExtraMessage`, `ErrorPageExceptionInfo` | The runtime's real keys `$OS_UBTConnect$ErrorPageMessage` (and the two others), JSON values (`""`). `ErrorHandlingStorage` = `StorageObject(Session, "ErrorPageMessage", "")` (W325084); key = `OS_STORAGE_PREFIX + module + "$" + key`, value `JSON.stringify` (W38048); `OS_STORAGE_PREFIX` = `"$OS_"` (W36295); the module is `setDefaultStorageNamespace(getHomeModuleName())` (W493724), `homeModuleName: "UBTConnect"` (`UBTConnect.appDefinition.js`). The brief says "as the runtime does". Q1 |
| D2 | `ErrorPageExceptionInfo` = name + message | As designed. The runtime `getExceptionInfo` (W45759) also stores `stack` and `extraStack`. Not stored: the page never shows them (P4) |
| D3 | §3.2 does not name a console line | The page writes the exception message to `console.error`, as `ErrorScreen` `s()` does when exception info exists (`console.error(a)`, W536056-538400). Q2 |
| D4 | §3.2 "message text" | `textContent`. The runtime sets `innerHTML`. The clone stores only `""` or plain text, which shows the same; no markup runs |
| D5 | §3.2: Show Detail not wired | As designed: not wired, `#error-screen-exception-message` and `-stack` not filled (P7). The runtime fills and wires them (`s()`, `c()`), but `#exception-detail` stays `display: none` (`showExceptionStack` false, P4), so nothing visible differs |
| D6 | – | Not ported from `navigateToErrorPage` (W323325): the `hasPendingReload()` check (the clone has no pending-reload state) and `VersionedURL.getVersionedUrl` (a version suffix on the URL; the demo precache is revisioned) |
| D7 | `location.assign` (brief) | The runtime uses `changeWindowLocation` (`location.href = url`, `src/lib/jsUtils.ts:26-30`). Same effect: a new history entry |

## Not built, and why

- `src/app/ErrorBoundary.tsx` and `src/app/RouteError.tsx` still show the markers "error screen of the original app
  (render error / route error)". S0b covers only the `handleError` path (design §3). Q3.
- Production precache of `_error.html` (Q4).
- The pixel check of `_error.html` against a TST capture (§6 point 3, §7.3): needs a TST capture; no network in this
  step.
- P6 (the page logs to the server): not built, as recorded in design §3.3.

## Questions

1. Q1: the sessionStorage key format. Options: a) the runtime format `$OS_UBTConnect$<key>` with JSON values (built);
   b) the bare names of the design text. Recommendation: a (the same keys and values as TST; only `errorPage.ts` and
   `_error.html` read or write them).
2. Q2: `console.error` of the exception message on the page. Options: a) keep it, as `ErrorScreen` `s()` (built);
   b) remove it. Recommendation: a.
3. Q3: render errors (`ErrorBoundary`) and route errors (`RouteError`) still show a review marker. Options: a) leave
   them (React-only failures); b) send them to `_error.html` through `showErrorPage`; c) first check what the TST
   global error handler does with an uncaught error (Application init `setErrorHandler`, W493724; MCP for DEV), then
   decide. Recommendation: c, as a separate item.
4. Q4: production precache. Options: a) leave it to the production phase (current focus: the colleague demo);
   b) add `UBTConnect/_error.html` to `PRODUCTION_PRECACHE` now. Recommendation: a. Unclear: does TST show
   `_error.html` offline?

## Checks (from `app/`)

| Command | Result |
|---|---|
| `npx tsc --noEmit` | pass, 0 errors |
| `npx eslint <7 changed code and test files>` | pass, 0 problems |
| `npx prettier --check <changed files>` | pass; `public/` is in `.prettierignore`, so `_error.html` is not checked |
| `npx vitest run src/platform src/legacy src/app` | 93 files, 592 tests pass |
| `npx vitest run` (all) | 689 files, 4471 tests pass. Before: 688 files, 4462 tests pass. **No "Errors" line** |
| `npm run arch` | pass, no new violation (144 known) |
| `npm run unused` | pass: 1089 rows, 0 new, 0 stale |
| `npm run dup` | pass, 0.43 % (35 clones, as before) |
| `npm run build:demo` | pass; `dist-demo/UBTConnect/_error.html` present, byte-identical to the source |

## Orchestrator checks (2026-10-28)

- Q1 (a) and Q2 (a): both follow the TST runtime (rule: TST wins); no user decision needed. Q3 and Q4 go to the user.
- `npm run ci` passed: 689 files, 4471 tests, no "Errors" line, build OK, 0 new unused exports.
- Parity sweep of the 64 routes on port 5174 (dev server of this repo): 64 of 64 clean. The dev server serves
  `/UBTConnect/_error.html` as the static file (200, `text/html`).
- Pixel check (read-only guard, no sign-in): TST `/UBTConnect/_error.html` against the React page, 390×844, Chromium.
  0 different pixels; the same texts ("There was an error processing your request.", "RELOAD", empty extra text) and
  `#exception-detail` hidden on both. No call was blocked. Screenshots: `../review/item8-errorpage/`.
