## Result
status: pass
summary: Pure move of 19 shared blocks (135 files) holds. diffcheck ok, handler set unchanged (155), W15 guard gives exactly 31 ADD rows with owners, ci, parity strict --all (64/64 both refs) and bundle pass.

## Files changed
migration/refactor/handoffs/P6-G3-B-Shared/test.md
(gate tool report) app/docs/refactor/reports/P6-G3-B-Shared.md

## Commands run
curl http://localhost:5174/UBTConnect/HomeFeed -> 200; vite cwd = /Users/khaitruong/Projects/connect-new/app
rf.py diffcheck --move -> ok; renames 135, origin tags 19; other files: arch-baseline.csv, ledger.csv (belong to step/master)
Handler list (vitest, method + path, 445a09d3 via git archive vs now): 155 vs 155, same set. Positions: FeedCms (Embedded_FeedCMS/DataActionGetFeedConfig) 133 -> 145; ShareSheet GetRecentlyShared/GetAvailableMembers 140/141 -> 109/110. Paths are unique, no wildcard, so no shadowing.
W15: HEAD baseline in place, arch_baseline.py check --move-step P6-G3 --base 445a09d3 -> 31 ADD lines, 47 rows, 0 new; file restored. Added rows in the diff: 31, all with owner (17 P6-G3-B-HomeFeed, 9 P6-G3-B-Search, 3 P6-G3-B-Updates_SingleList, 2 P7). arch_baseline.py check -> 78 warnings, 78 rows, 0 new, 0 gone.
npm run ci -> exit 0 (first run, no flake)
lint:arch -> 80 warnings, 0 errors (78 boundary baseline + 2 non-boundary, as dev reports); no warning outside baseline
parity strict --all --ref both --app http://localhost:5174 -> outsystems 64/64 clean, self 64/64 clean, PASS (4.4 min)
bundle-report: HomeFeed 245.57 kB gzip (limit 236.40 x 1.05 = 248.22; margin 2.65 kB, down from 3.32 at G2). Login 186.94 kB (limit 193.84; margin 6.9 kB). Both within limit.

## Diff review
1 openapi / mock fixtures / public css: no change. pass
2 deleted tests: none (all moved as renames). pass
3 scope: only the 19 blocks, importers, baseline. pass
4 @origin: 19 tags. pass
5 move, no logic change: diffcheck ok. pass
6 n/a (move step)
7 secrets: none. pass

## Deviations from the brief
none

## Questions for the user
none
