# context-025 · PWA test suite: Playwright e2e + Lighthouse (2026-10-16 night, auto mode)

## Result
- **`npm --prefix app run e2e:pwa`** (vitest + the stack's Playwright library; system Chrome, else Playwright Chromium;
  ~13.5 s). Three temp builds: demo, a "next release" demo, production. 8 scenarios pass in 5 runs:
  - SW scope (demo `/`, production `/UBTConnect/`), and the manifest and icons;
  - Chrome reports no installability errors (CDP, fresh persistent profile);
  - offline reload after one visit (server stopped), and the ping is never cached;
  - update waits (no skipWaiting);
  - production has no MSW and no mock chunk;
  - PIN 0223 unlocks and a reload keeps the lock.
  Not part of `ci`, because it needs a browser.
- **`npm --prefix app run lighthouse`** (ADR-13: `lighthouse` 13.4.1 dev, 0 audit issues). Demo build, mobile,
  `?latency=0`, HomeFeed / Search / OrbitLanding. Budget misses are warnings. Reports stay in the gitignored
  `app/lighthouse-reports/`.
  First scores (performance / accessibility / best practices): HomeFeed 44/90/96, Search 56/95/100,
  OrbitLanding 55/92/100. FCP 9–13 s and LCP 14–18 s (simulated mobile); CLS 0.244 on HomeFeed.
- `@lhci/cli` 0.15.1 was rejected by the audit (11 high, no fixed release), so ADR-13 replaces it (ADR-12's scope is
  kept). CI passes (324 files, 1457 tests) and `stack.py check` is OK.

## Decisions (who, date)
- ADR-12 and ADR-13 auto-accepted under the user's window (they implement P14(b)). Log:
  `migration/knowledge/auto-decisions-2026-10-16.md`.

## Facts learned (evidence)
- During the HomeFeed → PINUnlock redirect with a locked PIN, both screen containers hold a keypad for the 300 ms
  slide: the leaving HomeFeed shows the in-screen `.ubt-pin-overlay`, as the original CSS expects
  (`.active-screen:has(.ubt-pincode.connect-pin-screen.ubt-pin-overlay)`, HF css). This is TransitionGroup behaviour,
  not a duplicate render.

## Open issues
- Performance is low on simulated mobile: 52 original CSS files block rendering, and the first visit fetches the
  13 MB precache. Any optimisation must keep the 1:1 CSS; it is a separate track for the user to decide.
- `/favicon.ico` 404 (TST's favicon unknown); logo `alt`/size and colour contrast come from the original.

## Next
Morning summary to the user. Phase 4 needs the BFF; the device matrix is manual (checklist in `app/docs/guides/pwa.md`).
