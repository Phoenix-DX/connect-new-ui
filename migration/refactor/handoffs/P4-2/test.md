## Result
status: pass
summary: ci, lint:arch, parity strict --all (64/64 OutSystems, 64/64 self on the final run), bundle and e2e:pwa all pass. The first parity run had one pixel-only self difference (EventDetail/default, known F6 flake). Reruns passed, and the final --all run is clean. The diff review passes.

## Files changed
migration/refactor/handoffs/P4-2/test.md
app/docs/refactor/reports/P4-2.md (written by the parity tool)

## Commands run
- Dev server check: http://localhost:5174/UBTConnect/HomeFeed returned 200, cwd /Users/khaitruong/Projects/connect-new/app.
- npm --prefix app run ci → exit 0; 334 test files, 1545 tests passed; build OK.
- npm --prefix app run lint:arch → exit 0; 0 errors, 210 warnings. The only warnings that touch the step are in usePopupWidget.ts → session.ts (rules 4 and 5). They were there before, and the developer said so. No warning in machine.ts or in the other changed files.
- cd app && npx eslint src/platform/session src/platform/bootstrap src/platform/navigation/LockHost.tsx src/platform/navigation/LockHost.test.tsx build/mockFreeBuild.test.ts → exit 0.
- refactor_parity.py --app http://localhost:5174 --level strict --changed --ref both → ran all 64 routes. OutSystems 64/0. Self 63/1: EventDetail/default pixel 1.
- Reruns of EventDetail (F6): both refs, run 1 → clean. Both refs, run 2 → self pixel 1. Self only, runs 3, 4, 5 → clean, pixel 1, clean. Only a single pixel, on and off. The same flake is in log.md at P3-4.
- refactor_parity.py --app http://localhost:5174 --level strict --all --ref both --report app/docs/refactor/reports/P4-2.md → PASS; outsystems 64/64, self 64/64.
- npm --prefix app run build && node app/build/bundle-report.mjs → HomeFeed 237.41 kB gzip (baseline 236.40, +0.4%); Login 185.73 (baseline 184.61, +0.6%). Both are under +5%.
- npm --prefix app run e2e:pwa → 8 of 8 passed.
- Step "Check": ci passes, the new tests pass (machine.test.ts is in the 1545), parity strict --all passes, e2e:pwa passes.

## Diff review
1. openapi.yaml, mocks fixtures, public css: no change. Pass.
2. No test file deleted. In the test files, the only removed lines are import lines and the one mockFreeBuild assertion line. Pass.
3. Scope: all changes are in platform/session, platform/bootstrap and platform/navigation/LockHost, plus app/build/mockFreeBuild.test.ts (deviation 9). Pass.
4. @origin: machine.ts ports no screen or block. It is a new state machine and has no @origin tag. Pass (no tag needed).
5. Not a move step. n/a.
6. Change step, behavior check of each deviation:
   - Selectors keep reading the stored values (isLocked/hasUnlocked from client vars, user from the stored session while starting or signingIn): the values stay as before. Pass.
   - New `userChanged` event: only keeps the status in line with the stored user in `emit` (session.ts). It does not change anything in `starting` or `signingIn`, or for the same user. Pass.
   - signOut from signingIn: only a status transition. Pass.
   - markAppReady no longer calls `emit`. It now notifies only when a snapshot value changes. appReady always changes in that call, so the listeners are told as before. Pass.
   - mockFreeBuild.test.ts: the hash is removed before the /mock|fixture|msw/ match. The test keeps its assertion. The regex strips only the final 8-character hash of assets/..., so a name such as "mock-xxxx.js" still fails. Pass. One note: a hash of another length would not be stripped. Low risk.
   - Heredoc append in session.test.ts: the content is plain test code. The added lines are only additions (no removed assertion). Pass.
   - startup.ts, AppStart.tsx, LockHost.tsx: comment changes only (verified in the diff). Pass.
7. No secret, password, PIN value or email in the diff (grep). Pass.

## Deviations from the brief
none

## Questions for the user
none
