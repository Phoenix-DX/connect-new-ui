## Result
status: pass
summary: All gates pass. ci 0 (3758 tests), parity visual --changed --ref both: 47 routes per reference, 0 differences (BookmarksByGroup default/loading/offline OK on both). Bundle HomeFeed 244.47 (limit 248.22), Login 184.48 (limit 193.84) kB gzip. Diff review clean; W23 holds.

## Files changed
none (test.md only; gate tools wrote app/docs/refactor/reports/P6-G6-B-BookmarksByGroup.md)

## Commands run
curl http://localhost:5174/UBTConnect/HomeFeed → 200; vite cwd = /Users/khaitruong/Projects/connect-new/app
npm --prefix app run ci → exit 0 (617 files, 3758 tests, no flake, build ok)
npm --prefix app run lint:arch → exit 0, 70 warnings, 0 errors; 2 in the route (rule-9: useBookmarkGroup.ts → legacy/os/exceptions, BookmarkGroupView.tsx → legacy/os/os-assets), both in the baseline (moved debt)
python3 migration/tools/refactor/arch_baseline.py check → exit 0, 69 warnings, 69 rows, 0 new, 0 gone
cd app && npx eslint --max-warnings 0 (route, actions.test.ts, api/bookmark/types.ts) → exit 0
python3 migration/tools/refactor_parity.py --level visual --changed --ref both --app http://localhost:5174 → PASS: outsystems 47/47 clean, self 47/47 clean, 0 new differences
node app/build/bundle-report.mjs (after the ci build) → HomeFeed 751.74 kB / 244.47 gzip; Login 601.68 kB / 184.48 gzip; BookmarksByGroupPage chunk 22.17 kB / 7.13 gzip
Not run: rf.py diffcheck --move (change step); parity_sweep (after P0-2).

## Diff review
1. openapi.yaml, mocks, public css: no change. PASS
2. Deleted tests: none (api.ts, ScreenBlock_BookmarkGroup deleted with replacements; 5 new test files). PASS
3. Scope: outside the route only the import line in shared/Connect2_LegacyShared/lib/actions.test.ts and a comment path in api/bookmark/types.ts, both follow the moved fromCacheRecord/toCacheRecord. PASS
4. @origin: present in useBookmarkGroup, bookmarkGroupState, BookmarkGroupView, BookmarkNoteAddEdit, BookmarkNoteDelete, LegacyResultItemBadge. bookmarkGroupActions.ts has none (helper functions, not a block or screen; note only). PASS
5. Not a move step. n/a
6. Behavior: the one known difference is the dev's declared `latest` reading, which differs only when two flows overlap; accepted by the page template. Other changes are structure only. PASS
7. No secret, password, PIN or email in the added lines. PASS
W23: in useBookmarkGroup.ts only state writes use `write` (skipped after unmount: lines 152, 168, 175, 181). Server calls, putCachedBookmarkedItems, Delete_LocalBookmarkByBookmarkId (216), feedback messages, setScrollToTop (178), setPreloadObject and the NavigateTo_* events (306, 327, 330-332) run after unmount. Direct dispatches at 214 (via write), 244, 268, 350 are synchronous or share-sheet state, not app-level side effects. PASS
Parity states: the route has states default, loading, offline.

## Deviations from the brief
none (parity run with --app http://localhost:5174)

## Questions for the user
none
