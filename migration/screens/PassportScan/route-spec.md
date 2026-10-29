# Route spec: PassportScan

Not captured (user decision I10-2 (a), 2026-10-29; `no-capture.json`). Every statement cites the compiled TST code in
`sources/` (S = `UBTConnect.Legacy_OrbitEventsFlow.PassportScan.mvc.js`, B = `OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.mvc.js`,
L = `Connect2_LegacyShared.Layout_OrbitTheme.Layout_OrbitBlank.mvc.js`, BL = `Connect2_LegacyShared.Layout.BaseLayoutBlank_UpdatedOSUI.mvc.js`,
NH = `NavigationHandler.NavigationHandler.BackNavigationHandler.mvc.js`) or in `migration/runtime-sources/`
(E = `OrbitPassportScanC2.PassportScan.js`, the embed loader; MC = `OrbitPassportScanC2.controller.js`).

## Summary

PassportScan hosts the external Orbit Passport portal. The screen holds only the block `ScreenBlock_PassportScan`
(S:150-218) with `CommonUI_InsideLayout` in its placeholder. The block loads `GetConfigs`, then the embed loader puts
the portal in an iframe inside the full-screen container `passportScan`, signs it in with the B2C id token and relays
its events (saved, close, error, auth expired, camera request). Inputs: `TargetId`, `LoginMemberId`, LongInteger
(S:10-22, setInputs S:68-75). Role: registered users (`checkRegistered`, S:276). No feature flag on the screen. In the
demo the iframe opens a local fake portal (`app/public/mock-embeds/orbit-passport.html`) with fictional passport data.

## Specification

### Structure

- Screen root → `ScreenBlock_PassportScan` with `TargetMemberId = TargetId`, `LoginMemberId = LoginMemberId`, event
  `Close` → `Handler_OnClose`; placeholder `CommonUI_Elements` = `CommonUI_InsideLayout` (S:150-218).
- Block root (B:187-262): `Layout_OrbitBlank` (no inputs), placeholder `content` = Container `passportScan` with the
  inline style `position: absolute; top: 0; left: 0; height: 100vh; width: 100vw;` (B:205-217), placeholder
  `commonUI_Elements` = Placeholder `CommonUI_Elements` with the screen's placeholder (B:219-229). Then
  `BackNavigationHandler` (no inputs, default Priority) with event `BackNavigation` (B:231-262).
- `Layout_OrbitBlank` (L:140-210): `LayoutRuntime_Top`, then Container `orbit-theme backwards-compatibility` with
  `BaseLayoutBlank_UpdatedOSUI` (ExtendedClass `"orbit-theme " + ExtendedClasses`), placeholder `Content` and
  `CommonUI_Elements` (as `commonUI`).
- `BaseLayoutBlank_UpdatedOSUI` (BL:135-200): `LayoutWrapper` `layout layout-side layout-native ios-bounce` + extended
  class → `main screen` → `content` (ContentWrapper) → `main-content ThemeGrid_Container` role main → Placeholder
  `content-middle` (Content); Placeholder `CommonUI` after `main screen`, inside LayoutWrapper.

### Data

- `DataActionGetConfigs` of the block, fetch at start (B:315-355): outputs `Token`, `BaseURL`, `B2CTenant`,
  `B2CClientId`, `B2CPolicy`, `TokenType` (all Text, B:9-28). No input parameters; as for the other block data actions
  of this app, the block inputs travel as screen variables (`TargetMemberId`, `LoginMemberId`).
- The contract has no `OrbitPassportScanC2` module (I10-6 (a)): interim form with one `@ts-expect-error`, wire type by
  hand. The module timeout is 10 s (MC `defaultTimeout = 10`); `callAction` has no row for it until the contract is
  regenerated, so it runs without a timeout until then.
- The identity token is `GetConfigs.Token` (B:374, `idToken: $parameters.Token` B:724), not AppManager_Get_UserIdToken.
  Mock: a fictional placeholder text, never a real token.

### Behaviour

- After the fetch, `OnAfterFetch_GetFeedConfig` runs `InitializePassportScan` (B:357-398, JS B:699-760): destroy a
  configured embed, then `OrbitPassport.embed.configure({ loginMemberId, baseUrl, containerId: passportScan id,
  tokenType, idToken, b2cTenants, b2cClientIds, b2cPolicy, onReady, onSaved, onClose, onAuthExpired, onError,
  onRequestCamera })`, then `open({ memberId: TargetMemberId || null })`.
- Loader protocol (E): `configure` builds `<baseUrl>/passport` in the container, hidden (E:213-245), and listens to
  messages from the portal origin only. Portal → host: `webview:ready` (host sends `auth:token`, then onReady),
  `auth:expired`, `auth:requestRefresh` (host sends `auth:refresh`), `passport:saved` (passportId), `webview:close`,
  `passport:error` (error), `passport:requestCamera` (host runs onRequestCamera and answers `camera:image` or
  `ocr:error`). Host → portal also: `navigation:back` (`back()`).
- `Handler_OnReady`: console log only (B:570-593). `Handler_OnSaved(id)`: success message "Passport successfully
  saved." (B:594-622). `Handler_OnError(msg)`: error message with the text (B:468-496). `Handler_OnAuthExpired`:
  refresh GetConfigs, so OnAfterFetch configures again (B:399-432). `Handler_OnClose`: destroy the embed, trigger
  `Close` (B:433-467) → screen `Handler_OnClose` → previous screen (S:227-240).
- `Handler_OnRequestCamera` (MC :81-131): CameraPlugin `TakePhoto(60, 0, 0, true, JPEG, false, back camera, ...)`; on
  success `Image = BinaryToBase64(MediaResult.Thumbnail)`, else log and `Image = ""`. The loader reads `{ Image }`.
  - Web camera (Q2, user 2026-10-29). MCP row 8: TakePhoto works in a PWA through `Web_TakePhoto` and getUserMedia.
    The camera plugin web path is ported as TST in `app/src/platform/device/` (`cameraPlugin.ts`, `webCamera.ts`,
    `cameraPluginCss.ts`), next to the barcode adapter. Details: `migration/clarify/builds/item10-camera-web.md`.
  - A desktop browser shows the camera view (`CameraStream`: `div#camera-interface`, one capture button, back button
    closes the view). A phone or tablet uses a hidden file input with `capture=environment` (`NativeCamera`).
  - JPEG quality 60, back camera. Permission denied or no camera gives the TST error path: log
    `Camera plugin error code: <code>`, `Image = ""`. The portal then shows its Upload or manual fallback.
  - The native Cordova branch is not ported (`OS-PLUG-CAMR-0018`, "The plugin is not available").
  - `takePassportPhoto()` in `pages/PassportScan/camera.ts` calls `takePhoto` in every build. The fictional picture is
    only a test double now.
- `Handler_BackNavigation` (B:506-551): when the embed is configured, PreventNavigation and `embed.back()`; else the
  back navigation goes on. NH joins the shell queue (NH:380-392).
- Layout: OnInitialize sets the Orbit theme class on the body (L:265-300); OnReady IOSMetaTags, IOSPreventSwipe,
  DEPRECATED_LayoutReadyMobile (L:235-264). BaseLayoutBlank OnReady LayoutReady/SetLang/AddFavicon, OnDestroy
  LayoutDestroy (BL:238-274).
- The block has no OnDestroy: a configured embed stays configured after the screen closes until the next
  InitializePassportScan or Close (B:682-686).
- Entry (OrbitLanding, not changed): the React `canViewPassportDetails` already checks `!isFetchingData` and
  `currentMemberId !== NULL_ID` (`app/src/pages/OrbitLanding/hooks/orbitLandingState.ts:141-142`), as
  `ScreenBlock_OrbitLanding.mvc.js:1989`.

### States

- Loading: the empty full-screen container until the portal shows (no skeleton in the block).
- Error of GetConfigs: the flow handler (block `handleError`).
- Portal states are the fake portal's own (spinner until the token, details, review after the camera image).

## Patterns used

- P-DATA, P-CALLS, P-MOCKS: `api/passport` (`fetchPassportScanConfigs`, interim form), page mocks.
- P-PARAMS: `pages/PassportScan/inputs.ts`; navigation back with `useNavigateBack`.
- P-STATES: flow scope rules R1 (`flow.fetch`), R3 (`flow.own`, `flow.events`), R6 (`flow.run`).
- Vendored code (ADR-11 shape, `src/vendor/barcodeplugin`): the loader unchanged behind a typed loader (Q1 (a); ADR-17 in
  `app/docs/reference/stack.md`). Folder `app/src/vendor/orbitpassport/` (`OrbitPassportScanC2.PassportScan.js`, `SOURCE.md`,
  `index.ts`, `index.test.ts`).

## Unclear points


- None open. Settled and moved out:
  - Q1 (a), user 2026-10-29: the TST loader is held byte-identical in `app/src/vendor/orbitpassport/` behind the typed
    adapter, with an ADR row (ADR-17, accepted 2026-10-29; `app/docs/reference/stack.md:130, 273`). The file states no
    license: confirm it with the portal owner before production (ADR-17 consequence).
  - Q2 (a), user 2026-10-29: the web camera is ported as TST (see "Behaviour").
  - Q3 (a), user 2026-10-29: `platform/` exports the body theme setter. `OrbitBlankLayout`, `OrbitLayout` and the third
    layout use it. The known violation of `OrbitLayout` goes away.

## Decisions to confirm


- Q1 (a), user 2026-10-29: vendor the loader byte-identical (ADR-17).
- Q2 (a), user 2026-10-29 (asked again with the corrected fact): port the web camera path as TST.
- Q3 (a), user 2026-10-29: the body theme setter is exported from `platform/`. Three layouts use it.
- Auto decisions of window 7 (`migration/clarify/auto-decisions-2026-10-29.md`):
  - Row 4 (K1, a): the back button in the camera view follows TST (no answer to the portal). Answer an empty image only if
    the demo gets stuck, logged as React-only.
  - Row 5 (K2, a): phones and tablets use the TST file-input camera (`NativeCamera`).
  - Row 6 (K3, a now, b on the production accessibility list): the capture button keeps the TST markup, with no
    aria-label.
- Not ported, as in the other layouts: DEPRECATED_LayoutReadyMobile, LayoutReady, SetLang, AddFavicon, LayoutDestroy;
  the JSUtils_Console_Log calls (as FeedCms), except the two camera logs that the TST caller writes.
- Fake portal location: `public/mock-embeds/` (already left out of production builds, `app/build/mockFree.ts:12`). The
  mock BaseURL ends with `#`, so the loader's `<baseUrl>/passport` opens the static page without a dev-server rule.

## Change requests

None.

## Parity

No parity (I10-2 (a)): the user reviews the page.

## Server-side notes

- `GetConfigs` returns the B2C id token to the client; the portal API resolves the caller from the token and returns
  403 for a target outside the household (E, `authMessage` comment).
