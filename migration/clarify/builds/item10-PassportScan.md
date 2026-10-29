# Item 10 build: PassportScan

Not captured (user decision I10-2 (a), 2026-10-29). Built from the compiled TST code (`migration/screens/PassportScan/sources/`,
`migration/runtime-sources/OrbitPassportScanC2.*`). Spec: `migration/screens/PassportScan/route-spec.md`
(`route.py spec-done` ran before Q3; run it again). Steps run: `step spec`, `spec-done`, `step build`. Not run:
`route.py ready`, parity (no capture).

## Files

Code:
- `app/src/pages/PassportScan/PassportScanPage.tsx` (screen), `inputs.ts` (TargetId, LoginMemberId, LongInteger),
  `components/ScreenBlock_PassportScan.tsx` (block view, props only), `hooks/usePassportScan.ts` (block flows),
  `camera.ts` (Handler_OnRequestCamera seam).
- `app/src/components/layout/OrbitBlankLayout/OrbitBlankLayout.tsx` (Layout_OrbitBlank),
  `app/src/components/layout/BaseLayoutBlank/BaseLayoutBlank.tsx` (BaseLayoutBlank_UpdatedOSUI). Not in the layout
  barrel (imported by path, to keep the barrel file of other agents untouched).
- `app/src/api/passport/repository.ts`, `index.ts`: `fetchPassportScanConfigs` (GetConfigs).
- `app/src/vendor/orbitpassport/OrbitPassportScanC2.PassportScan.js` (byte-identical TST loader, 27 095 bytes, sha256
  `35adc43a…6125`), `SOURCE.md`, `index.ts` (typed loader: one classic `<script>` via `?url`, as `vendor/barcodeplugin`).

Mocks:
- `app/src/pages/PassportScan/mocks.ts`: GetConfigs answers the fake portal BaseURL
  (`<origin>/mock-embeds/orbit-passport.html#`) and fictional token and B2C texts (`statefulHandler`, as
  NotificationDetails, because the contract cannot type the path).
- `app/src/mocks/fictional/passport.ts`: fictional passport (name, number, dates, MRZ) and its SVG picture for the
  mock camera.
- `app/public/mock-embeds/orbit-passport.html`: the fake portal. It answers the loader's handshake
  (`webview:ready` → `auth:token`), shows the passport details, asks for the camera (`passport:requestCamera` →
  `camera:image` / `ocr:error`), shows a review form with the picture, saves (`passport:saved`), closes
  (`webview:close`), handles `navigation:back`, `auth:refresh`, `auth:expired`; demo buttons send `passport:error`,
  `auth:expired`, `auth:requestRefresh`. Only fictional data, no network.
  Location: `public/mock-embeds/` instead of the suggested `public/mock-portal/`: that folder is already left out of
  production builds (`app/build/mockFree.ts:12`, owned by the item 9 agent). The `#` at the end of the mock BaseURL
  makes the loader's `<baseUrl>/passport` open the static page (`#/passport`) without a dev-server rule.

Tests (written with the code, not before it): `PassportScan.test.tsx` (inputs; markup; GetConfigs, then
configure and open with the expected options; saved and error messages; OnAuthExpired refetches and configures again;
Close destroys and goes back; camera answer; R1 unmount while GetConfigs is pending), `OrbitBlankLayout.test.tsx`,
`BaseLayoutBlank.test.tsx`, `vendor/orbitpassport/index.test.ts` (bytes; the loader's protocol in jsdom: iframe URL,
origin check, `auth:token` with member ids, event relays, `camera:image`, `ocr:error`, `navigation:back`). No stories
(budget).

## Parity

None (I10-2 (a)): the user reviews the page. OrbitLanding entry not changed: `canViewPassportDetails` already has
`!isFetchingData && currentMemberId !== NULL_ID` (`app/src/pages/OrbitLanding/hooks/orbitLandingState.ts:141-142`,
TST `ScreenBlock_OrbitLanding.mvc.js:1989`), so no OrbitLanding parity run.

## Differences from TST, with evidence

- JSUtils_Console_Log calls not ported (as FeedCms). DEPRECATED_LayoutReadyMobile, LayoutReady, SetLang, AddFavicon,
  LayoutDestroy not ported (as the other layouts).
- The loader script loads on first use, in parallel with GetConfigs (TST: JS dependency loaded before the block,
  `ScreenBlock_PassportScan.mvc.js:148`). If the user leaves before it loads, the embed is not configured.
- The promise of `configure()` is caught (TST ignores it, `:719`; a `close()` before ready would be an unhandled
  rejection).
- Camera: TST calls CameraPlugin TakePhoto; React answers the fictional picture in mock/demo builds and `{ Image: "" }`
  elsewhere (Q2). Superseded on 2026-10-29: Q2 re-asked, answer (a) = the TST web camera path in every build, see
  `item10-camera-web.md`.
- Inline style of the Container `passportScan` comes from the compiled view (`:209`), not from a capture.
- No `OrbitPassportScanC2` row in `SERVER_REQUEST_TIMEOUT` until the contract has the module (TST timeout 10 s,
  `OrbitPassportScanC2.controller.js`): the call runs without a timeout until then.

## Interim contract form (I10-6)

`api/passport/repository.ts`: one `@ts-expect-error` on the module argument of `callAction`
(`OrbitPassportScanC2`, `ScreenBlock_PassportScan/DataActionGetConfigs`, body `{ TargetMemberId, LoginMemberId }`),
hand-written `PassportScanConfigsWire` (Token, BaseURL, B2CTenant, B2CClientId, B2CPolicy, TokenType). After the
contract regeneration: remove the directive, add the timeout row (10), switch the mock to `contractHandler`.

## Questions (`route.py ask`, all decisions, not blocking)

- Q1 embed loader: (a) vendor unchanged + typed loader (built), (b) TypeScript port. Recommend (a). Needs an ADR row
  like ADR-11 and a scope exception for `app/src/vendor/orbitpassport/` (the route scope does not allow `vendor/`).
- Q2 camera on the web: (a) fictional image in mock/demo builds, no image elsewhere (built), (b) browser camera input,
  (c) native bridge later. Recommend (a). Includes an MCP fact: does the CameraPlugin of OrbitPassportScanC2 run in a PWA?
- Q3 architecture rule 9: OrbitBlankLayout imports `legacy/os/bodyTheme` (1 new `npm run arch` error, as OrbitLayout's
  known violation). (a) platform export of the theme setter (foundation owner), (b) known-violation row, (c) page-level
  platform hook. Recommend (a).

## Checks (from `app/`)

- `npx tsc --noEmit`: no error in the PassportScan files (errors left in Bookmarks and OrbitAdminMilestoneDetail files of
  other agents).
- `npx eslint` and `npx prettier --check` on the changed files: clean.
- `npx vitest run` (4 files): 15 passed, no "Errors" line.
- `npm run arch`: 2 errors: OrbitBlankLayout → `legacy/os/bodyTheme` (Q3) and `pages/OrbitAdminMilestoneDetail` (other
  agent).

Tool calls: 75.
