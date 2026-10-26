## Result
status: pass
summary: ci exit 0 (461 files, 2504 tests), arch baseline 0 new, eslint clean, parity visual --changed 2 routes (MessageDetail, MessageList) 0 differences on both refs. W23 holds: only state writes are gated in useMessageDetail.ts.

## Files changed
migration/refactor/handoffs/P6-G3-B-MessageDetail/test.md

## Commands run
- dev server http://localhost:5174 -> 200, cwd /Users/khaitruong/Projects/connect-new/app
- npm --prefix app run ci -> exit 0, 461 files, 2504 tests (no F11 flake)
- arch_baseline.py check -> exit 0, 52 warnings, 0 new, 0 gone
- npx eslint src/pages/MessageDetail -> exit 0
- refactor_parity.py --app http://localhost:5174 --level visual --changed --ref both -> 2 routes, 16 runs, 0 differences (outsystems 2/2 clean, self 2/2 clean)
- bundle-report.mjs: HomeFeed 246.02 kB gzip (limit 248.2 = 236.40 + 5%), Login 187.01 (limit 193.8). Pass. The W21 +0.03 kB is inside the limit.

## W23 review (hooks/useMessageDetail.ts)
- No `isAlive` return after any await. The only gate is `write()` (lines 99-101), used for the 3 state writes (lines 137, 157, 174).
- Ungated, run after unmount: toast and ReplaceOnUpcomingNavigation (leaveToMessageList, 105-109), NavigateTo_MessageList / NavigateTo_Login (108, 167), counter decrement (120-121), markNotificationOpened (122), Cache_SignedImageURL_Get (130), template parameters call (136), getUserInformation (140). The flow keeps its own `variables` copy (156).
- StrictMode: `readyStarted` once-guard (74, 90-91) and `newestReadyRun` liveness (89, 97). OnReady runs once in dev.
- Tests: the 4 tests in the group "after an unmount and in StrictMode (decision W23)" (lines 291-345) cover the unmount plus toast and navigation, the unmount plus counter and Wrapper_NotificationOpened, and StrictMode once-runs (twice). All pass.
- Notes (no fail): the view cache stores one key; the duplicate decrementReadMessagesCounter is left for P6-G3-C.

## Diff review
1. openapi, mocks, css: no change. Pass.
2. No test file deleted; 5 test files added. Pass.
3. Scope: only pages/MessageDetail plus handoff and state files. Pass.
4. @origin present on MessageDetailView, useMessageDetail, messageDetailState, inputs, NotificationDetailBlock, MessageDetailPage. Pass.
5. Not a move step. n/a.
6. Behavior: the cache key change is the only one (known, accepted). The F17 shared flowState chunk is within the bundle limit. Pass.
7. No secret, password, PIN or email found in the added lines. Pass.

## Deviations from the brief
none

## Questions for the user
none
