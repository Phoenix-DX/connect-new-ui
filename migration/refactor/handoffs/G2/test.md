# Test: G2 (one record shape in the MyBookmarks cache), worktree wt-main

Status: blocked (parity could not run; everything else passes)

## Commands run (from the worktree root, Node 24)
- Server check: 5175 returns 200 for /UBTConnect/HomeFeed; vite cwd is the worktree `app`.
- `npm --prefix app run ci`: exit 0 (gen:api, typecheck, lint, format:check, 324 files / 1458 tests, vite build).
- `route.py parity BookmarksByGroup --app http://localhost:5175`: "3 states with differences or errors", but the cause is the
  environment, not the code. First run: "playwright not found" (the worktree has no root node_modules). Second run with
  NODE_PATH=<worktree>/app/node_modules: "browserType.launch: Executable doesn't exist
  .../ms-playwright/chromium_headless_shell-1234/..." (the installed Playwright expects a browser build that is not in the
  cache). No page was rendered, so the parity result does not count. I did not install anything (not allowed).
  Fix for the master: `npx playwright install` (or run parity with the Playwright of the main tree), then re-run step 2.

## Diff review
1. openapi.yaml, mocks fixtures, CSS: no change. Pass.
2. No test file deleted. Pass.
3. Scope: only BookmarksByGroup (api, types, components/actions, staticEntities, ScreenBlock_BookmarkGroup) and the
   Connect2_LegacyShared actions.test.ts; migration/board.md and feedback files are the master's lifecycle edits. Pass.
4. @origin: no new ported file. N/A.
5. Move step: N/A.
6. Behavior: one cache shape (OutSystems BookmarkItem via toCacheRecord/fromCacheRecord, shared get/putCachedMyBookmarks);
   local cache writer and constants deleted; rendering and server calls unchanged (restore path now maps records;
   four Put calls go through putCachedBookmarkedItems). Pass. Note: 9 record fields (Type, PhotoDetails, some DetailsJson)
   get defaults, as the dev asked in his question (a); no reader uses them.
7. No secret, PIN or email in the diff. Pass.
8. New test (G2 describe) covers add without throw, DateCreatedUtc descending order, remove finds the row. Pass.

Minor note: the test file import list puts addBookmarkToCache etc. before addMetaTag (not alphabetical); lint passes.
