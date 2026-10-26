## Result
status: pass
summary: Group gate G3 passes. ci exit 0; parity visual --all 64/64 clean on both references; e2e:pwa 9/9; arch baseline check exit 0 (49, no P6-G3 owner). HomeFeed first load 244.00 kB gzip (margin 4.22), Login 184.00 (margin 9.84). knip and jscpd match dev.md.

## Files changed
none (report app/docs/refactor/reports/P6-G3-C.md written by the parity tool)

## Commands run
- npm --prefix app run ci -> exit 0 (first run, no F11 flake)
- python3 migration/tools/refactor_parity.py --app http://localhost:5174 --level visual --all --ref both --report app/docs/refactor/reports/P6-G3-C.md -> outsystems 64/64 clean, self 64/64 clean, PASS (4.3 min)
- npm --prefix app run e2e:pwa -> 1 file, 9 tests passed
- npm --prefix app run build && node app/build/bundle-report.mjs -> HomeFeed 244.00 kB gzip (750.05 raw); Login 184.00 kB gzip (599.97 raw)
  - Baseline +5 percent: HomeFeed limit 248.22 (baseline 236.40), margin 4.22 kB. Login limit 193.84 (baseline 184.61), margin 9.84 kB gzip. Raw Login limit 633.03, margin 33.06 kB.
  - W21 tripwire: margin 4.22 is above 1.0 kB; change vs P6-G3-B-HomeFeed-Page (244.02) is -0.02 kB, below the +0.3 kB step limit. Not tripped.
- arch_baseline.py check -> exit 0 (49 warnings, 49 rows, 0 new, 0 gone)
- arch_baseline.py list -> P7 48, pre-existing 1, total 49; no owner P6-G3-*
- npx eslint (new/changed files: platform/session/unreadCounters*, MessageList/hooks, MessageDetail/hooks) -> exit 0, no output
- npx knip (tester) -> 9 unused files, none in G3 (.storybook/withFlags.ts, 8 src/shared index/types files). Same as dev.md.
- npx jscpd (min 8 lines, 70 tokens, tests/stories excluded) on the G3 folders listed in dev.md -> 195 files, 3 clones, 37 lines (0.22 percent): connect2Feed.ts 252-270 vs 471-489; updatesSingleListState.ts vs notificationsState.ts (8 lines); useFeedUpdates.ts vs useUpdatesSingleList.ts (11 lines). Same as dev.md; left.
- Server check: http://localhost:5174 returns 200; vite cwd is /Users/khaitruong/Projects/connect-new/app
- git diff: 6 code files modified (-49 +25 lines in total with the logs), 2 new files in platform/session; no deleted file.

## Diff review
1. openapi.yaml, mocks fixtures, public css: unchanged. Pass.
2. Deleted tests: none. The decrement test case moved to platform/session/unreadCounters.test.ts (11 and 13 lines removed from the two page tests, replaced by the new file). Pass.
3. Out of scope changes: none; only MessageList, MessageDetail and platform/session. Pass.
4. @origin tags: unreadCounters.ts has no @origin tag, but it names Connect2_LegacyShared in its JSDoc. It ports a client action, not a screen or block. Pass (note: add `@origin Connect2_LegacyShared.DecrementReadMessagesCounter` if the owner wants it strict).
5. Move logic: n/a (this is a dedup, body unchanged; I read the new function and the removed lines: same logic).
6. Behavior change: none. Both pages call the same function with the same body.
7. Secrets: none found in the diff.

## Group G3 review links
- http://localhost:5174/UBTConnect/HomeFeed
- http://localhost:5174/UBTConnect/FeedItemDetail
- http://localhost:5174/UBTConnect/Updates_SingleList
- http://localhost:5174/UBTConnect/Services
- http://localhost:5174/UBTConnect/Search
- http://localhost:5174/UBTConnect/Notifications
- http://localhost:5174/UBTConnect/MessageList
- http://localhost:5174/UBTConnect/MessageDetail

Routes with no parity states: FeedItemDetail. Its visual check is the default route state only; review it by hand.

## Deviations from the brief
none

## Questions for the user
none
