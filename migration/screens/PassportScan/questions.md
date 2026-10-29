# Questions: PassportScan

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] embed loader (answered)
- Question: How does React hold the Orbit Passport embed loader (scripts/OrbitPassportScanC2.PassportScan.js, the portal team's 'host embed loader' v1.0.0, ES5 IIFE that sets window.OrbitPassport)?
- Evidence: ScreenBlock_PassportScan.mvc.js:148 (JS dependency), :699-782 (configure/open/destroy/back/isConfigured); runtime-sources/OrbitPassportScanC2.PassportScan.js:1-40, 213-245, 600-700; vendored precedent src/vendor/barcodeplugin (ADR-11)
- OutSystems MCP: Not an MCP fact (design choice).
- Options: a: vendor the loader byte-identical in app/src/vendor/orbitpassport/ (SOURCE.md, typed loader index.ts that adds one classic <script> on first use, as barcodeplugin); the protocol, origin checks and camera image parsing stay the portal team's code; an upgrade is a file swap; needs an ADR row like ADR-11 and a scope exception for src/vendor | b: TypeScript port of the postMessage protocol in pages/PassportScan (about 300 lines to keep in step with the portal team by hand; lint and types apply) (recommended: a)
- Answer (user, 2026-10-29T10:38:14): (a) (user, 2026-10-29): keep the TST loader byte-identical in app/src/vendor/orbitpassport/ behind the typed adapter; add an ADR row as ADR-11.

## Q2 [decision] camera on the web (answered)
- Question: What does onRequestCamera do in the web build? TST calls the native CameraPlugin TakePhoto (quality 60, JPEG, back camera) and returns the thumbnail as base64; React has no camera plugin port. Fact for MCP too: does the CameraPlugin version of OrbitPassportScanC2 run in a PWA/browser?
- Evidence: OrbitPassportScanC2.controller.js Handler_OnRequestCamera (TakePhoto, BinaryToBase64, Image='' on error); loader deliverCapture: no image -> ocr:error, portal falls back to Upload or manual entry (OrbitPassportScanC2.PassportScan.js:381-425)
- OutSystems MCP: Not asked yet (orchestrator: CameraPlugin module, TakePhoto, PWA support).
- Options: a: mock and demo builds answer a fictional passport image; other builds answer no image ({Image: ''}), as the TakePhoto failure branch, so the portal shows its Upload/manual fallback | b: browser camera through <input type=file accept=image/* capture=environment> (new web feature, own ADR) | c: wait for a native wrapper camera bridge; until then as (a) (recommended: a)
- Answer (user, 2026-10-29T11:45:33): Re-asked on 2026-10-29 with the corrected fact (TST CameraPlugin TakePhoto works in a PWA: Web_TakePhoto with getUserMedia, CameraPlugin.controller.js / CameraStream.js; mcp-session-2026-10-29.md row 8). User answer (a): port the web camera path as TST (browser camera view, JPEG quality 60, back camera; permission denied or no camera follows the TST error path: log, empty image); the UI comes from the CameraPlugin compiled code.

## Q3 [decision] architecture rule 9 (answered)
- Question: OrbitBlankLayout (port of Layout_OrbitBlank) must set the Orbit theme class on the body in OnInitialize (SetThemeClassToBody, Layout_OrbitBlank.mvc.js:265-300). The only helper is legacy/os/bodyTheme, which rule-9-legacy-os-importers forbids outside platform/api/app; OrbitLayout and LegacyLayout import it as known violations. npm run arch now shows 1 new error for OrbitBlankLayout.
- Evidence: app/src/components/layout/OrbitBlankLayout/OrbitBlankLayout.tsx:4; .dependency-cruiser.cjs rule-9 (from pathNot platform|api|app|legacy/os); OrbitLayout.tsx:5 (known violation)
- OutSystems MCP: Not an MCP fact.
- Options: a: the foundation owner exports the body theme setter from platform (for example @/platform/theme) and the three layouts use it; no baseline row | b: add OrbitBlankLayout to the known violations, as OrbitLayout | c: the page sets the theme through a platform hook and the layout stays without the effect (recommended: a)
- Answer (user, 2026-10-29T10:50:10): (a) (user, 2026-10-29): platform/ exports the body theme setter; OrbitBlankLayout, OrbitLayout and the third layout use it; the known violation of OrbitLayout goes away.

## Q4 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 (a), user 2026-10-29: vendor the loader byte-identical (ADR-17).; Q2 (a), user 2026-10-29 (asked again with the corrected fact): port the web camera path as TST.; Q3 (a), user 2026-10-29: the body theme setter is exported from `platform/`. Three layouts use it.; Auto decisions of window 7 (`migration/clarify/auto-decisions-2026-10-29.md`):; Row 4 (K1, a): the back button in the camera view follows TST (no answer to the portal). Answer an empty image only if; Row 5 (K2, a): phones and tablets use the TST file-input camera (`NativeCamera`).; Row 6 (K3, a now, b on the production accessibility list): the capture button keeps the TST markup, with no; Not ported, as in the other layouts: DEPRECATED_LayoutReadyMobile, LayoutReady, SetLang, AddFavicon, LayoutDestroy;; Fake portal location: `public/mock-embeds/` (already left out of production builds, `app/build/mockFree.ts:12`). The
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-29T15:06:51): confirm (auto-confirmed, user instruction 2026-10-29 window 7, Fable review; auto decision rows 20 in migration/clarify/auto-decisions-2026-10-29.md; final ci 4686 tests, final sweep 2026-10-29)
