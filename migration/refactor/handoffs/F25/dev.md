## Result
status: pass
summary: `shouldBlockNavigation` now ports the "navigating away" guard of NH:903-914 (and adds a re-entry block). A POP is
blocked while the screen container being left is still in the document, while the app frame shows no screen, or while
the gate itself runs. HostSurvey is unchanged. Unable to Host + device back now gives one back, in the tests and in the browser.

## Files changed
app/src/platform/navigation/navigationGate.ts
app/src/platform/navigation/navigationGate.test.tsx
app/src/pages/HostSurvey/HostSurvey.test.tsx
migration/refactor/handoffs/F25/browser-check.mjs (new: Playwright browser check, see "Commands run")
migration/refactor/handoffs/F25/dev.md (new)

## Commands run
Node 24 (`$HOME/.nvm/versions/node/v24.21.0/bin`) for all commands, run in the worktree `wt-fix-F25`.

- `npm --prefix app run typecheck` → exit 0
- `npx eslint` on the 3 changed app files → exit 0, no warnings; `npx prettier --check` on them → clean
- `npx vitest run src/platform/navigation/navigationGate.test.tsx` → 13/13 pass (4 old + 9 new)
- `npx vitest run src/pages/HostSurvey` → 6 files, 44 tests pass (2 new page tests)
- `npx vitest run src/platform/navigation src/pages/HostSurvey src/app` → 27 files, 168 tests pass
- `npx vitest run` (full suite) → 637 files, 3937 tests pass, exit 0
- Proof that the new tests catch the bug: I put the old gate (`git show HEAD:…/navigationGate.ts`) in place for
  the test run only, then put the new gate back (I compared the file with `cmp` after the run):
  - navigationGate.test.tsx → 8 of the 9 new tests fail. The recursion test: "called 513 times", RangeError
    "Maximum call stack size exceeded". The initial-entry test passes on both, as expected (non-regression check).
  - HostSurvey.test.tsx → the Unable to Host test fails (several dx-navigation events), 20 unhandled RangeErrors.
- `npm run arch` → 222 warnings, none in the changed files; `python3 migration/tools/refactor/arch_baseline.py check`
  → 72 warnings, 0 new, 0 gone
- `npm run build` (app/dist, git-ignored) → exit 0; `node app/build/bundle-report.mjs` → HomeFeed 751.72 kB /
  244.78 kB gzip, Login 601.73 / 184.83. The same report on a build of the old gate: HomeFeed 751.34 / 244.69, Login
  601.35 / 184.71. Change: +0.09 kB gzip (HomeFeed) and +0.12 kB gzip (Login). Both are under the W21 tripwire of
  +0.3 kB per step. The HomeFeed margin to 248.22 is 3.44 kB.
- Browser check: `vite preview` of app/dist on port 4791, then
  `node migration/refactor/handoffs/F25/browser-check.mjs http://localhost:4791` → exit 0, 4/4 pass. I stopped the
  server after the check. Stack: HomeFeed → OrbitLanding → EventDetail (event 7301) → HostSurvey, all by clicks. The
  script sets the survey to `unable_to_host` with the page's own mock write (ActionPostHostSurvey, MSW store; no
  server).
  - Unable to Host, no-preference: back 1 → `/UBTConnect/EventDetail` (history idx 2). At +150 ms both containers are
    in the document; at +1650 ms only EventDetail. Back 2 → `/UBTConnect/OrbitLanding` (idx 1). No page errors.
  - Unable to Host, reducedMotion `reduce`: same result.
  - Confirmed, no-preference and `reduce`: back 1 → EventDetail, back 2 → OrbitLanding.
  - The same script on a build of the old gate (`vite build --outDir` to a scratchpad folder, `vite preview` on port
    4792, stopped after the check): Unable to Host fails in both motion modes. One back goes HomeFeed (all 3 screens
    left; at the first entry CommonUI redirects to HomeFeed). Confirmed passes.
  - The app has no `prefers-reduced-motion` CSS. ScreenTransitionGroup runs its timer either way, so reduced motion
    gives the same 300 ms leave as before.
- Edge cases covered by the new unit tests (navigationGate.test.tsx, block "navigating away from a screen … in the app
  frame": NavigationHost + ScreenTransitionGroup in `#transitionContainer`, fake timers):
  - a POP during the leave is blocked: no back handler runs, no `dx-before-navigation`, no `dx-navigation`, and the
    view-cache calls are skipped (the gate returns before them);
  - the guard clears when the old container leaves the document (at exactly 300 ms), then the next back works;
  - the HostSurvey pattern in memory-router order (re-entry) and in browser order (the handler's back arrives later):
    one back;
  - the initial entry: the first back of the page goes back at once;
  - a replace navigation and a new entry of the same screen with other parameters (a new container per location key);
  - no transition (timeout 0);
  - a screen still loading (`prepare` pending): the old screen stays and the back waits;
  - AllowUpcomingNavigation together with a blocked POP;
  - "no active screen": a frame without a container blocks the POP until a container is there.
- Existing tests that asserted the recursion or the old behavior: none. A grep found no test with RangeError, recursion
  or a POP during a frame transition. No existing test changed. `useHostSurvey.test.tsx` (NavigateTo_Back is raised
  once on Unable to Host, not on a confirmed survey) still holds unchanged.

## Deviations from the brief
- "No active screen" (NH:904 `!getActiveScreen()`) applies only when `#transitionContainer` exists. Routes rendered
  without the app frame in tests (testRouter) have no screen container. Without this limit, every POP in those tests
  would be blocked. There the re-entry check is the guard. The same pattern exists in `appStartSteps.ts:125` and
  `viewCache.ts:29`.
- getActiveScreen reads `#transitionContainer > .screen-container` (the last one), the clone's equivalent of the
  original's `#reactContainer > div > .screen-container`. The reference is kept while `isConnected`; there is no
  MutationObserver. The brief allows this. Release depends only on the node leaving the document; there is no timer or
  transition-end release.
- AllowUpcomingNavigation: the guard is checked first, in the original order (NH:904-914 before skipEvents at
  NH:917). A POP that the guard blocks does not use the one-shot flag, so the flag stays for the next navigation.
  The original ties the mark to the active screen; this port keeps its existing one-shot flag.
- The re-entry block covers POP only. A PUSH or REPLACE started inside a handler still goes through the gate, as before.
- E2E spec: not added. The mock data has no Unable to Host survey (fixtures in `src/mocks/` are off limits), and the
  e2e suite (`build/e2e`) is the PWA suite. The browser script is in the handoff folder; it sets the status through
  the page's own mock write.
- Browser stack: 4 entries instead of 2. With HostSurvey 2 screens above the first entry, the second back is a plain
  back. A back to the first entry is redirected to HomeFeed by CommonUI (existing behavior, `isInitialLocation`).
- Test-only artifact (not a product issue): React Router's memory history clamps `go(-1)` at index 0 but still reports
  delta −1. A re-entrant back from a stack of only 2 entries would leave the memory history index out of step with the
  router. The tests use stacks of 3 or more entries. A browser does nothing on `history.go(-1)` at the first entry.

## Questions for the user
none
