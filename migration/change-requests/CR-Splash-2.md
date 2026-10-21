# CR-Splash-2: module client actions used by Splash — Set_InitialClientVariables, GetColdStartLinkURL, ScreenController_NavigateToPage, AllowUpcomingNavigation export

- Status: applied
- Raised by: Splash, 2026-10-14
- Block: shared module code `app/src/shared/UBTConnect/lib/actions.ts`, `app/src/shared/UBTJavaScriptUtils/`, shell
  `app/src/shell/resume.ts`, `app/src/shell/navigation/index.ts`
- Other routes using it (catalog/blocks.md): PINRegister / PINUnlock (ScreenController_NavigateToPage), HandleOnResumeOpenLink (GetURLFromEventDataURL)
- Related question: none

## Evidence
- `Set_InitialClientVariables` (`sources/raw/UBTConnect.controller.js:16008-16027`): `PhotobookCarousel_SelectedSpeed =
  Photobook_Speed.EightSeconds`. The identifier value is read from a static-entity record
  (`sources/raw/UBTConnect.model.js:27022-27026`, `getPhotobook_SpeedRecord("9233bd6e-…")`) that is not in local code.
- `GetColdStartLinkURL` (`sources/raw/UBTConnect.controller.js:8083-8145`): Android app-link data or the
  EventfulDeeplinks cold-start URL, through `GetURLFromEventDataURL`. Both are native plugins; decision U14 (plugins later)
  means `""` on the web.
- `ScreenController_NavigateToPage(URL, ReplaceInHistory)` (`migration/shell/sources/UBTJavaScriptUtils.controller.js:3781-3789`):
  `publicApiHelper.Navigation.navigateTo(URL, transition, isReplace)`; Splash passes an absolute href (LastURL from
  `window.location.href`, `Splash.mvc.js:427-435`).
- `AllowUpcomingNavigation` exists in `app/src/shell/navigation/navigationGate.ts:14` but is not exported by
  `app/src/shell/navigation/index.ts`.

## Expected change
1. `setInitialClientVariables()` in shared UBTConnect lib with the EightSeconds value once known (MCP: static entity
   `Photobook_Speed`).
2. `getColdStartLinkURL()` in `shell/resume.ts` (`''` until the deep-link plugins exist, U14).
3. A shared `screenController_NavigateToPage(url, replace)` that accepts absolute same-origin URLs.
4. Export `allowUpcomingNavigation` from `shell/navigation`.

## Workaround in the route until applied
Logic only, no markup: `app/src/screens/Splash/index.tsx` skips `Set_InitialClientVariables` (value unknown), uses `''`
for the cold-start link (U14), navigates with the shell's `useOsNavigate` after turning a same-origin href into a path, and
imports `allowUpcomingNavigation` from `shell/navigation/navigationGate`.

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change: foundation owner, 2026-10-14 (batch approved by the user).
  1. `set_InitialClientVariables()` in `app/src/shared/UBTConnect/lib/actions.ts` (named per the shared-code convention,
     lowerCamelCase of `Set_InitialClientVariables`): `UBTConnect.PhotobookCarousel_SelectedSpeed` =
     `Photobook_Speed.EightSeconds` = 8000, new `Photobook_Speed` in `lib/staticEntities.ts` citing
     `migration/knowledge/static-entities.md` (MCP, DEV).
  2. `getColdStartLinkURL()` in `app/src/shell/resume.ts`: `''` (U14).
  3. `useScreenController_NavigateToPage()` → `(url, replaceInHistory)` and `appPathOf(url)` in
     `app/src/shared/UBTJavaScriptUtils/lib/actions.ts` (a hook: navigation needs the router). Same-origin href or app
     path → `useOsNavigate` (replace when asked; a pending ReplaceOnUpcomingNavigation still applies). Another origin:
     the runtime `navigateTo` is not in local code, so the route's previous behaviour is kept (`location.replace`,
     `location.assign` without replace) — open point, see below.
  4. `allowUpcomingNavigation` exported from `app/src/shell/navigation/index.ts`.
  5. Workarounds removed: Splash (local `getColdStartLinkURL`, `appPath`, `navigateToPage`, navigationGate import;
     `Set_InitialClientVariables` now runs first in LoadingDotsAnimationComplete). The helper is also used where the
     compiled code calls ScreenController_NavigateToPage(…, True): PINUnlock (PINUnlock.mvc.js:237-249) and the shared
     Block_PINRegister_ContentWrapper (:636-649; PINRegister's resume link / LastURL, which may be an absolute href).
     PINRegister and AcceptPendingPolicies import `allowUpcomingNavigation` from the navigation index.
  Tests: `shared/UBTConnect/lib/actions.test.ts`, `shared/UBTJavaScriptUtils/lib/actions.test.ts`, `shell/resume.test.ts`.
  Open: cross-origin URL behaviour of `publicApiHelper.Navigation.navigateTo` (runtime, not in local code).
- Regression parity run on: 2026-10-14, after the last code change: Login (default, loading, offline), PINUnlock (default, loading, offline), PINRegister (default, loading, offline), Splash (default): 0 unexempted differences (DOM, styles, positions, text, pixels, calls); no exemption added.
