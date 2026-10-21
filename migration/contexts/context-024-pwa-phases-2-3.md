# context-024 · PWA phases 2–3, mock-free production, small fixes (2026-10-16 night, auto mode)

## Result
- **PWA-2, offline parity.**
  - NetworkDetection ported 1:1 (`app/src/shell/feedback/networkDetection.ts`): `status/network-ping.txt` every 30 s
    while the tab is visible, `no-store`, change-only callbacks. The ping file comes from TST and is never cached or
    precached.
  - `storage.persist()` when installed. Fixed the gap where an empty Orbit table after an eviction threw before the
    app-start sync.
  - Logout clears every local entity and the memory cache (ADR-10). Navigation network timeout: 4 s.
- **PWA-3, barcode (ADR-11).** The TST `OSBarcodePlugin.js` is vendored byte-identical (`app/src/vendor/barcodeplugin/`).
  The adapter is in `app/src/lib/device/`. Production uses the web scanner; dev/demo use the fictional one, and
  `?scanner=web` switches. Guide: `app/docs/guides/device.md`.
- **PWA-B, production without mocks.** No mock chunks, MSW, fixtures or mock public files; the build guard
  `app/build/mockFree.ts` fails on leaks. Production JS is 294 KB smaller (gzip 616 KB). Only leftover:
  `mocks/fictional/directory.ts` (mock sign-in user until the BFF).
- **FIX-D.** Photobook setState-in-render fixed; Splash `DataActionGetCacheInfo` (Policies) mock added. Nested `<a>` in
  the bottom bar is 1:1 with TST.
- **Verification.** CI passes (324 files, 1457 tests). Parity sweep 64/64 clean after the last change.
  OrbitAdminEventDetail and Photobook re-stamped (auto-confirmed). `app/dist-demo.zip` rebuilt (7.9 MB, 492 precached
  files).

## Decisions (who, date)
- ADR-11 accepted (the user's P7 choice). Agent choices are auto-accepted under the user's window (2026-10-16 evening
  → 2026-10-17 morning): `migration/knowledge/auto-decisions-2026-10-16.md`.

## Facts learned (evidence)
- OSUI NetworkStatusChanged listens on `window` in a browser (:665-668). TST serves `barcodeplugin.js.LICENSE.txt` as
  404. Playwright `setOffline` does not cover service-worker requests (stop the server to test offline).

## Open issues
- Phase 4 (BFF: auth, push, WebAuthn) and phase 5 (PWA e2e, devices, Lighthouse, pilot, cutover) remain. F2 and the
  BFF host are still open.
- TO CONFIRM rows in the auto-decisions log are for the user's review.

## Next
The user reviews and shares `app/dist-demo.zip`. Phase 5 tests can start with mocks when the user asks.
