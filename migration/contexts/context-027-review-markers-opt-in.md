# context-027 · User review of auto items, F2 answered, review markers opt-in (2026-10-17)

## Result
- **Auto mode is OFF.** The user turned off the project auto-accept at 08:40 and then left Claude Code's permission
  "auto mode". The user reviewed the open items. Their answers are marked in
  `migration/knowledge/auto-decisions-2026-10-16.md` as "CONFIRMED (user, 2026-10-17)". ADR-11/12/13 carry
  `confirmed` in `migration/stack.json`.
- **F2 answered.** TST registers `/UBTConnect/pwaServiceWorker.js` on scope `/UBTConnect/`. The file was fetched (user
  approved) and analysed in `migration/knowledge/pwa-tst-service-worker.md`. **ADR-14** records the cutover handover:
  option A, our worker served at that URL. It is not implemented, because production is out of scope for now.
- **Review markers are now opt-in on the dev server too.** Built apps never showed them. Tests and Storybook turn them
  on. Checks: the Trove dialog renders clean on dev; CI passed (324 files, 1457 tests); sweep 64/64; the demo was
  rebuilt (`app/dist-demo.zip`, 10:21).

## Decisions (who, date)
- User, 2026-10-17:
  - favicon: keep (1A);
  - EventDetail date exemption: keep (2A);
  - all 7 TO CONFIRM rows confirmed; ADR-11/12/13 confirmed;
  - mobile performance: later;
  - SW handover: option A (ADR-14);
  - Trove "Not available" toast: keep it 1:1 (HomeFeed note);
  - review markers: off by default (`?review=1` shows them).
- **Current focus (user): a local demo for colleagues; no production work.** Memory `project-focus-colleague-demo`.

## Facts learned (evidence)
- TST's worker:
  - precaches 1310 versioned URLs and serves every request in scope cache-first;
  - maps 90 screen paths to its cached `index.html`;
  - deletes old `UBTConnect-*` caches on activate.
  - Consequence: after a cutover, that URL must never answer 404.
- `freshPage()` (`app/src/shell/testSupport.ts`) clears sessionStorage, so it turns the review markers back on.

## Files changed
- `app/src/shell/reviewMarkers.ts`, `app/src/shell/testSupport.ts`, `app/src/test/setup.ts`, `app/.storybook/preview.ts`,
  `app/src/components/NotCaptured.tsx` (comment), `app/docs/guides/shell.md`
- `migration/runtime-sources/UBTConnect.pwaServiceWorker.js`, `migration/knowledge/pwa-tst-service-worker.md`
- `migration/stack.json` (ADR-14), `migration/pwa/pwa-discussion-plan.md`
- `migration/tools/` (new): `parity_sweep.py`, `restamp.py` (needs the user's confirm text), `qa_dev_demo.cjs` + `qa-urls.json`, README

## Open issues
- None for the demo. Deferred to production (user, 2026-10-17):
  - the 4 s navigation timeout;
  - the PWA-2/PWA-3/PWA-B agent choices (FIX-D needs no decision);
  - 3 TO CONFIRM rows of 2026-10-15 (ConnectShare Q1, LegacyShareObject Q2, MyBookmarks Q3);
  - the BFF host and the ADR-14 code.
- Mobile performance: later.
- The demo SW scope `/` needs its own domain or subdomain root when the user hosts it (README-demo says so).

## Next
- Colleague feedback on the demo. Production work waits for the user.
