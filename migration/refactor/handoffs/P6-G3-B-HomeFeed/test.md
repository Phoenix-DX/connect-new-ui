## Result
status: pass
summary: Shared-block part only (W21, W22). ci exit 0; parity visual --changed covered all 64 routes against both references, 0 differences; arch baseline check exit 0 (61 rows); HomeFeed first load 245.99 kB gzip (limit 248.22). Diff review passes. The page part is deferred to P6-G3-B-HomeFeed-Page.

## Files changed
migration/refactor/handoffs/P6-G3-B-HomeFeed/test.md
(gate tool report) app/docs/refactor/reports/P6-G3-B-HomeFeed.md

## Commands run
curl http://localhost:5174/UBTConnect/HomeFeed → 200; server cwd = /Users/khaitruong/Projects/connect-new/app
npm --prefix app run ci → exit 0 (no PopupMenu flake)
python3 migration/tools/refactor/arch_baseline.py check → exit 0, 61 warnings, 61 rows, 0 new, 0 gone
cd app && npx eslint <changed ts/tsx files> → exit 0, no output
parity_refactor visual --changed --ref both --app http://localhost:5174 → 64 routes per reference (the global files queryClient.ts and platform/session select all routes, so HomeFeed, FeedItemDetail, Updates_SingleList, Notes, CountryList and every NotificationIcon page are included), 64/64 clean on both, 0 differences. Result: PASS
build + bundle-report → HomeFeed 756.68 / 245.99 kB gzip (baseline 236.40 x 1.05 = 248.22, pass; +0.42 kB vs the W21 measure accepted), Login 608.95 / 186.99 (baseline 184.61, limit 193.84, pass)
Split check: new hooks chunk is 329-368 bytes gzip (two hooks-* chunks now exist); ShareSheetContainer chunk is 3685 gzip (developer reports 3739 before). It shrinks by about 54 bytes, not by 310, so the new chunk is only partly a split; the rest is the added code of the step (per-chunk table in dev.md: +206 Feed, +79 HomeFeedPage, +61 member repository, +48 entry). Within the accepted W21 growth.
log.warn on a failed fetch: queries set meta.errorLog ('DataActionFetchCount failed' in api/member/hooks.ts, 'DataActionGetFeedConfig failed' in api/feed/hooks.ts); QueryCache onError logQueryError in api/client/queryClient.ts calls log.warn(message, error). Tests exist in api/member/hooks.test.tsx and api/feed/hooks.test.tsx, and pass inside ci. I read the code; I did not trigger a failure in the browser.

## Diff review
1. openapi.yaml, mocks fixtures, public css: no change. Pass.
2. Deleted files: CommunityPopulation/api.ts and FeedCms/api.ts (code files, no tests). No test file deleted; flow tests moved to hooks tests. Pass.
3. Scope: changes are the 4 blocks, their call sites (FeedItemDetail, Updates_SingleList, Notes, CountryList, HomeFeedPage), api/member, new api/feed, platform/session hooks, queryClient.ts, baseline CSV. The call-site edits are the needed minimum. Pass.
4. @origin: the two hooks have it. The new api/feed files have no @origin; they port a data action (GetFeedConfig), not a screen or block, so I accept this. Pass.
5. Not a move step.
6. Behavior: queryClient.ts adds a global QueryCache onError, but only queries with meta.errorLog log, and only these two set it. Other noted differences (single call under StrictMode, FeedCms SDK start when config arrives, pages re-render on notification client variable changes) are in dev.md deviations 3, 4, 5 and are covered by parity with 0 differences. Pass, with the notes.
7. Secrets: none found in the diff. Pass.
Notes: the deletion of CommunityPopulation/api.ts and FeedCms/api.ts is staged in the index (dev used git rm); harmless.

## Deviations from the brief
none

## Questions for the user
none
