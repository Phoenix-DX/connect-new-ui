# Error handling of the TST runtime: render errors, route errors, screen loads

Source: `migration/clarify/review/item9-render-route-errors.md` (facts E, T, N, G and probes P1 to P8, 2026-10-28).
React design: `migration/clarify/review/item9-solution.md` (approved by the user, 2026-10-29). The flow handler and
the error page of item 8: `migration/clarify/review/item8-solution.md`.

Evidence keys, as in the findings:

- `W<n>`: character offset in `migration/runtime-sources/OutSystems.js`.
- `R<n>`: character offset in `migration/runtime-sources/OutSystemsReactView.js`.
- `ACF:<line>`: line in `migration/shell/sources/UBTConnect.App_Common.controller.js`.
- `SW<n>`: character offset in `migration/runtime-sources/UBTConnect.pwaServiceWorker.js`.

## What the user sees on TST

| Case | TST result | Evidence | Certainty |
|---|---|---|---|
| Render error in a widget or a block | The View of the nearest boundary is empty. The App_Common flow handler shows a toast with the message. The URL stays | T1, T2, T6; E5, E8; P1 to P3 | Observed |
| Render error in the own expressions of a screen | The error page `_error.html` with the default text and RELOAD. No toast | T5, T6; E1 to E4; P4 | Observed |
| Render loop | The error page (`createRenderLoopError`; the text test `isLoopError`, R191429) | T3 | Code |
| Later navigation to a path that no screen has | A full page load. The server page "404 - File or directory not found." shows | N14 (W224400, W229508, W224025); P6 | Observed |
| First load of a path that no screen has | HTTP 404 and the same server page. No app runtime, no splash | P7 | Observed |
| First load of that path with the service worker | The worker sends the path to the server, so the same 404 shows | N15 (SW128911); P8 | Code |
| The screen code does not load | The error page. No retry (`CDNFilenameVersioning` is false). The load promise never settles | N12, N13 | Code |
| A permission check fails, and the handler navigates | The navigation replaces the location (`CheckPermissionsNavigationCallbacks.goTo` calls `this.replace`) | N8 (R281345) | Code |
| A permission check fails, and the handler does not navigate | First load: the error page ("No Permissions"). Later navigation: go back | N8 (R281345) | Code |
| A signed-out user opens a member screen | Login with `In_IsFromInvalidPermissions=True` | N7, N8; ACF:76-85 | Code |

## Rules that follow from the facts

- TST never shows `NotFoundScreen` ("Screen not found: <path>") from `navigateTo` or from a first load (findings §7,
  P6, P7).
- With `AllowInterAppNavigationWhenAppIsRoot` set, a URL is internal only when it matches a screen URL of the home
  module. TST has the parameter set (N14, P5).
- The flow handler shows no error page for a screen that the user left (R6; E2, E3).
- The production build of React has minified error texts. So a real render loop does not match `isLoopError`, and the
  flow handler shows a toast (`migration/clarify/builds/item9-9A.md`, difference 2; R191429).

## Where the React app does the same

| Case | React |
|---|---|
| Render error inside a screen | `app/src/platform/feedback/RenderErrorBoundary.tsx`, one per screen route |
| Render loop, error outside the screens | `showErrorPage` from `RenderErrorBoundary`, `app/src/app/RouteError.tsx`, `app/src/app/ErrorBoundary.tsx` |
| Screen code load | `app/src/app/screens.ts` |
| Unknown path | `goTo` in `app/src/platform/navigation/osNavigate.ts`, `app/src/app/UnknownPath.tsx`, `app/build/unknownPaths.ts` |
| Permission check | `app/src/app/RouteGuard.tsx` (the Login redirect replaces the entry). No "No Permissions" branch: U2, U6 are open |
