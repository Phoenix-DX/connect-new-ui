# Test: G2 merge (main into refactor/architecture)

Status: pass

## Commands run
- Dev server check: `/UBTConnect/HomeFeed` on 5174 returned 200; vite cwd = `/Users/khaitruong/Projects/connect-new/app`.
- `npm --prefix app run ci`: exit 0. 364 test files, 1898 tests passed; build OK.
- `refactor_parity.py --level strict --changed --ref both --app http://localhost:5174 --out migration/refactor-parity/G2-merge`: exit 0. 1 route (BookmarksByGroup; the 5 changed src files map to it), 6 runs (default, loading, offline, each vs outsystems and self): all OK, 0 differences. Report: `migration/refactor-parity/G2-merge/report.md`. (`--out` must be under `migration/refactor-parity/`; `--out G2-merge` alone is rejected.)
- `git diff --name-only --diff-filter=U`: empty (no unmerged file).
- `git diff --cached HEAD --name-only | grep openapi|mocks/|css`: empty.

## Diff review
1. No change in openapi.yaml, mocks, CSS: pass.
2. No deleted test file: pass (actions.test.ts gains one G2 test, +56 lines).
3. Scope: pass. App changes are 6 files (BookmarksByGroup api, block, actions, staticEntities, types; Connect2_LegacyShared actions.test.ts) plus `migration/screens/BookmarksByGroup/**` from main.
4. `@origin` / `@os-block`: no new ported file; existing tags unchanged.
5. Not a move step.
6. The staged diff shows only the G2 change: BookmarkItem cache shape, `toCacheRecord`/`fromCacheRecord`, use of Connect2_LegacyShared get/put cache, removal of the local cache writer and `DIRECTORY_CACHE_TYPE_MY_BOOKMARKS`, `dateCreatedUtc` field. `@/` aliases are kept and new imports use aliases. No other behavior change.
7. No secret, password, PIN or email seen in the diff.

## Failures
None.
