# Item 9, agent 9A: steps B1 to B3 (2026-10-29)

Design: `../review/item9-solution.md` §2, §3, §6, §9.1, §10; user decisions §12 (point 1 (a), point 2 (a)). Brief:
`item9-wave-brief.md`. No commit, no `git add`. No page, component, container, api or mocks file changed.

## Files

| Step | File | Change |
|---|---|---|
| B1 | `app/src/platform/feedback/RenderErrorBoundary.tsx` (new) | `RenderErrorBoundary({ name, children })`: a function wrapper (`useIsCurrentEntry`) around a class boundary. `isRenderLoopError` (exported) |
| B1 | `app/src/platform/feedback/RenderErrorBoundary.test.tsx` (new) | 8 tests, §9.1 cases 1 to 8 |
| B2 | `app/src/app/router.tsx` | Only the screen element (now lines 21-31) and one import line: `<RenderErrorBoundary name={r.screen}>` around the Suspense. Line `errorElement: <RouteError />` unchanged. Agent 9B changed the `*` route and its import in the same file |
| B2 | `app/src/app/RouteError.tsx` | Logs `route error`, then `showErrorPage`; returns `null`. No marker |
| B2 | `app/src/app/ErrorBoundary.tsx` | `componentDidCatch` logs `render error`, then `showErrorPage`; `render` returns `null` after the error. No marker |
| B2 | `app/src/app/ErrorBoundary.test.tsx` (changed), `app/src/app/RouteError.test.tsx` (new) | 1 and 3 tests |
| B3 | `app/src/app/screens.ts` | A failed `loader()` calls `showErrorPage(error)` and returns a promise that never settles. `prepareScreen` is `.then(() => undefined)` |
| B3 | `app/src/app/screens.test.ts` (new) | 3 tests |

## Tests (written first)

- B2, B3: written before the code. The first run was red: 4 failed (B2), 1 failed (B3). Then green.
- B1: the test file was written before the component. The first run was after both files existed (no red run).
- `RenderErrorBoundary.test.tsx` uses the frame of `AppFrame.tsx` (NavigationHost, ScreenTransitionGroup, the toast
  host outside the containers), not `renderRoutes`. Reason: `renderRoutes` has no ScreenTransitionGroup, so a
  navigation to the same path reuses the same boundary instance, and case 7 (a new entry renders again) cannot show.
- Case 6 uses a real leaving screen (a push with `slide-from-right`, the old entry stays 300 ms) in place of
  `resetNavigation` and a second entry.
- Case 4 uses a real render loop (a class component that calls `setState` in `componentDidUpdate`). React throws
  "Maximum update depth exceeded" and the boundary catches it. A second test checks the text rule alone.

## Behaviour per case

| Case | TST result | React now |
|---|---|---|
| D1 (widget, block, layout render error) | The View is empty, the URL stays, a toast shows the message with a full stop (P1 to P3) | The screen container is empty, the URL stays, `render error` logged once, App_Common toast "<message>." (test 1, also in StrictMode). The full stop comes from FeedbackMessage_AutoClose (JSU:128-131, `feedbackMessageAutoClose.ts:52-53`): no change needed |
| D1, system exception | App_Common raises it again: the error page from the active screen (ACF:119, R6) | `location.assign('/UBTConnect/_error.html')` once, no toast (test 3). From a leaving screen: `error page skipped: out of context`, no page (test 6) |
| D1, ignorable exception | Ignored (ACF:24-26) | Nothing shows; the log has `render error` only (test 5) |
| D2, render loop | `createRenderLoopError` → `handleError` without a context: the error page (T3) | `showErrorPage`, no toast, no context check (test 4) |
| D2, own render of the screen (P4) | The root boundary: the error page | Empty screen and toast (difference kept, point 1 (a)) |
| D2, error outside the screens | The root boundary (T5): the error page | `RouteError` and `ErrorBoundary`: log, then the error page; they render nothing, no marker (tests of B2) |
| D5, screen code does not load | No retry (N12); the error page; the load never settles (N13, N4, N5) | `showErrorPage` once; `prepareScreen` never settles, so the transition does not start; no second `loader()` call; the component stays unloaded (`screens.test.ts`) |

## Differences from the design, with evidence

1. **Render-loop text rule.** The design says "the message starts with". The compiled code is
   `t.isLoopError=function(e){return/Maximum update depth exceeded/gi.test(e?.message)}` (OutSystemsReactView.js
   R191429): the text anywhere in the message, any case. `isRenderLoopError` follows the compiled code.
2. **Fact: a real render loop of a production build is not a "loop error".** TST runs the production build of React:
   its error text is "Minified React error #<n>; visit …" (OutSystemsReactView.js offsets 356 and 12572). So on TST
   a real render loop (#185) does not match the rule and goes to App_Common: a toast with the minified text. The
   React production build (React 19.2.8) also minifies (#185, `react.dev/errors/185`), so the result is the same; the
   dev server gives the error page. Only the URL in the toast text differs (library text). Recorded in the code
   comment; no design change.
3. **The error of the render-loop page.** TST passes `createRenderLoopError(viewName)` to `handleError`: "Render loop
   avoided. This is likely due to variables of screen '<viewName>' being changed inside its 'On Render' event handler.
   Avoid changing variables inside 'On Render' event handlers." (R191429). React passes the React error, as the design
   says. Only the stored ExceptionInfo and the console line of `_error.html` differ. See Q1.
4. **RouteError additions.** A ref makes the page open once per error in StrictMode (the dev effect runs twice;
   test). A route error response becomes `new Error('<status> <statusText>')` for `showErrorPage`.
5. **No boundary on the NotMigrated branch** of `router.tsx` (outside the lines 19-23 of 9A). The root
   `errorElement` covers it. 63 of the 84 rows of `routes.generated.ts` have a page module and get the boundary.

## Questions

- **Q1 (D2, render-loop error object).** (a) Keep React's error (design; no visible change). (b) Port
  `createRenderLoopError` with the screen name; the `viewName` format of TST is not confirmed (needs an MCP or a
  compiled-code check). Recommendation: (a). The difference is only in the console of the error page.

## Checks (from `app/`)

- `npx tsc --noEmit`: no error in the files of 9A. Errors seen in other files: `build/unknownPaths.test.ts(5,65)`
  (`./unknownPaths` missing, agent 9B work in progress) and `src/pages/Notes/components/NoteCard_Item.tsx(9,36)`,
  `(10,33)` (missing `./ItemCard_WithNotes`, `./ItemCardActions`). Not fixed.
- `npx eslint` on the 9 files: 0 problems. One `eslint-disable-next-line @typescript-eslint/only-throw-error` with a
  reason in `RouteError.test.tsx` (React Router: a thrown Response). `npx prettier --check`: clean.
- `npx vitest run` on `RenderErrorBoundary.test.tsx`, `ErrorBoundary.test.tsx`, `RouteError.test.tsx`,
  `screens.test.ts`, `ScreenTransitionGroup.test.tsx` (prepare pending path): 5 files, 24 tests passed, no "Errors"
  line. A wider run (with `src/platform/feedback`, `RouteGuard.test.tsx`) showed 1 failure in `RouteGuard.test.tsx`
  ("no check before the app start; then the redirect, with the Default transition"): that file has 17 new lines of
  agent 9B (B6, tests first). `router.test.tsx` did not load (`./UnknownPath` missing at that time, 9B).
- `npm run arch`: no dependency violations (2615 modules; 144 known violations ignored).
- No test mounts the real `router` (grep): the 3-route parity smoke of B2 and the full sweep stay with the
  orchestrator. Not run: full `vitest`, `npm run ci`, `npm run unused`, `npm run e2e:pwa`, parity.

Tool calls: 55.
