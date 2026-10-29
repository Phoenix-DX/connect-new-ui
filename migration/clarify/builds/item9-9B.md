# Item 9 build, agent 9B: steps B4 to B7 (2026-10-29)

Design: `../review/item9-solution.md` §4, §5, §7, §10, §12 (user decisions of 2026-10-29). Brief: `item9-wave-brief.md`.
No commit. No `git add`. The e2e case is written and not run.

## Files

Code (`app/`):

| File | Change |
|---|---|
| `src/platform/navigation/osNavigate.ts` | `goTo`: when the target path shows no screen, `window.location.assign(screenUrl(…))` and return. The check comes after the flag redirect. The R4 check of the callers comes first. New `ScreenCheck`, `setScreenCheck` |
| `src/platform/navigation/NavigationHost.tsx` | New prop `isScreen` (sets the screen check, as `redirect` does) |
| `src/platform/navigation/testRouter.tsx` | `renderRoutes` gets a 5th parameter `isScreen` |
| `src/app/AppFrame.tsx` | `<NavigationHost … isScreen={showsScreen} />` and the comment |
| `src/app/UnknownPath.tsx` | New. Logs `unknown path` with the path, renders `null` (N5). Marker "unknown route" only when `showReviewMarkers()` (dev server, `?review=1`) |
| `src/app/router.tsx` | Only the import and the `*` route (`<UnknownPath />`). 9A's lines are not touched |
| `src/app/NotMigrated.tsx` | `route` is required: the `null` branch has no caller now |
| `src/app/RouteGuard.tsx` | The Login redirect navigates with `replace: true` (N8). PINUnlock: no change |
| `build/unknownPaths.ts` | New. `isUnknownAppPath(method, url)`, `NOT_FOUND_TITLE`, the plugin `unknownPaths()` (`configureServer`, `configurePreviewServer`) |
| `vite.config.ts` | `unknownPaths()` is the last plugin |
| `build/e2e/pwa.e2e.ts` | D4 case on the production build (`vite preview`) |

Tests: `src/platform/navigation/osNavigate.test.tsx` (6 new), `src/app/router.test.tsx` (rewritten, 2),
`src/app/RouteGuard.test.tsx` (1 assertion, 1 new test), `build/unknownPaths.test.ts` (new, 7).

Docs: `app/docs/guides/page-template.md` (render error rule), `app/docs/architecture/overview.md` (3 rows in "Runtime
pieces"), `app/docs/guides/pwa.md` (new section "Unknown paths", production host rule), `app/docs/refactor/CHANGELOG.md`
(entry "Item 9", also B1 to B3 of 9A), `migration/knowledge/error-handling-tst.md` (new),
`../review/item9-render-route-errors.md` §5 (link to the design and to the knowledge page).

## Tests (written first)

The first run failed as expected: 3 assertions (assign not called, `PUSH` not `REPLACE`), and 2 files with a missing
module (`UnknownPath`, `unknownPaths`). After the change: 4 files, 45 tests pass.

- `osNavigate.test.tsx`: an unknown path with parameters calls `location.assign('/UBTConnect/NoSuchScreen?a=1')`. The
  router location, the history and the replace mark do not change. A known path navigates in the router. A query in
  the path keeps a screen path known. `osNavigateTo` behaves the same. A flag redirect to a screen navigates in the
  router. The R4 check throws first. Without the screen check, the router gets every path.
- `router.test.tsx`: `UnknownPath` renders nothing and logs once. With `setReviewMarkers(true)`, it shows the marker
  and the path.
- `RouteGuard.test.tsx`: the Login redirect is `REPLACE`. The PINUnlock redirect stays `PUSH`.
- `unknownPaths.test.ts`: the cases of design §9.1, plus a query, the case, a trailing `/`, the runtime endpoints, POST.
  It compares with `screenOf` for every route. Both hooks give HTTP 404, `text/html`, the TST title, and pass other requests.

## Behaviour per case

| Case | TST | React now |
|---|---|---|
| D3 later navigation to an unknown path | A full page load, then the server 404 page (N14, P6) | `goTo` calls `window.location.assign`. The dev server or `vite preview` answers HTTP 404 with the TST text |
| D3 the `*` route | Root renders nothing (N5) | `UnknownPath` renders nothing and logs. The marker shows on the dev server with `?review=1` only |
| D4 first load of an unknown path | HTTP 404, "404 - File or directory not found.", no app (P7) | Dev server and `vite preview`: the same status and text. Demo static host: the app loads and renders nothing. Production host: later (pwa.md) |
| N8 Login redirect of the permission check | The navigation replaces the location (R281345) | `replace: true` |
| D6 | No code (decision 4 (a)) | No change |

## Differences from the design, with evidence

1. **The screen check comes from `NavigationHost`, not from a direct `screenOf` call in `goTo`.** 25 test files
   navigate through `renderRoutes`, `useOsNavigate` or `osNavigateTo` to paths that are not in the route table
   (`/UBTConnect/A`, `/UBTConnect/Other`, `/UBTConnect/Updates`). Of these, 15 are in `pages/`, `components/` or
   `containers/`, which the brief does not let 9B edit. `AppFrame` gives `showsScreen` (`app/screens.ts:64`, which is
   `screenOf(path) !== null`), as it gives `redirect` and the `isScreen` of `ScreenTransitionGroup`. In the app, the
   behaviour is the design's.
2. **The check uses the path without its query and hash.** A caller can pass a path with a query. Test:
   `/UBTConnect/Menu?From=Home`.
3. **The plugin has a fifth condition: the runtime endpoints pass** (`/UBTConnect/moduleservices/`,
   `/UBTConnect/screenservices/`). The TST manifest is at `/UBTConnect/moduleservices/pwa/manifest` with no extension
   (`build/pwa.ts` `MANIFEST_PATH`; `build/e2e/harness.ts` `READY_PATH` waits for it). On TST these paths are runtime
   services, not screen URLs. The plugin is also the last one, after the plugins that answer their own paths.
4. **The plugin has its own copy of the `screenOf` rule.** The Vite config cannot load the `@/` imports of
   `paths.ts`. The unit test checks both for every route.
5. **The 404 body has the full text of the probe**: the title, "Server Error", and the two lines
   (`PRR:u5.firstLoad.at1s.text`). The design names only the title text.
6. **Only the Login redirect replaces.** N8 is the handler's navigation during the permission check:
   `CheckPermissionsNavigationCallbacks.goTo` sets `navigated` and calls `this.replace(r)` (R281345). App_Common's
   SecurityException branch for a signed-out user is the Destination `navigateTo("/UBTConnect/Login", …)` (ACF:76-85).
   So N8 is confirmed for Login. The PINUnlock redirect has no TST fact that gives it these callbacks. Design §9.1
   names the Login redirect only.
7. **`NotMigrated` lost its `null` branch.** The design keeps the route branch. That branch did not change.
8. Tests that did not need a change: `RouteGuard.test.tsx:93` tests the pure `guardRedirect` with `/x`. The
   `NavigationHost` tests with such paths render without the screen check.

## Questions

1. **History of the PINUnlock redirect.** `RouteGuard.tsx` pushes PINUnlock. The compiled code has
   `ControllerInitializationNavigationCallbacks.goTo` → `push` and `CheckPermissionsNavigationCallbacks.goTo` →
   `replace` (R281345 region). Which callbacks the TST PIN redirect uses is not confirmed.
   - (a) Keep the push.
   - (b) Add the question to the MCP session of U1, U2 and U6, then align.
   - Recommendation: (b). Keep (a) until then.
2. **Unknown paths on the demo static host.** `serve.mjs`, `serve.py` and the host files keep the SPA fallback. The app
   loads and renders nothing.
   - (a) No change (design §5.3 names the dev server and `vite preview` only).
   - (b) Add the 404 rule to `serve.mjs` and `serve.py`.
   - Recommendation: (a). The production host rule covers it later.

## Checks (from `app/`)

- `npx tsc --noEmit`: no error in the 9B files. Errors in the files of other agents:
  `src/pages/OrbitAdminMilestoneDetail/**`, `src/pages/OrbitAdminMilestones/**`, `src/api/event/adminMilestone.test.ts`,
  `src/components/orbit/OrbitErrorMessage/OrbitErrorMessage.test.tsx`, `src/lib/legacyShared/actions.test.ts`
  (`pages/BookmarksByGroup` removed).
- `npx eslint` (15 code files): clean. `npx prettier --check` (code and docs): clean. Prettier rewrote the tables of
  `overview.md` and `pwa.md`.
- `npx vitest run`: the 4 test files: 45 pass. The folders `src/platform/navigation`, `src/app`,
  `src/platform/bootstrap`, `src/legacy/os`, `src/platform/feedback` with `build/unknownPaths.test.ts` and
  `build/pwaBuild.test.ts`: 61 of 62 files pass. `src/app/routes.test.ts` fails 3 flag-redirect tests (Bookmarks,
  MyBookmarks). `routes.ts` and `routes.test.ts` are changes of the Bookmarks agent, not of 9B. 3 page and component
  test folders with fake paths: 19 pass. No "Errors" line.
- `npm run arch`: no violation (142 known, ignored).
- STE lint: 0 errors in the new text. `page-template.md` keeps the 4 errors of HEAD.
- Not run (brief): full `npx vitest run`, `npm run ci`, `npm run unused`, `npm run e2e:pwa`, parity.

Tool calls: 67.
