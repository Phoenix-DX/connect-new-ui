## Result
status: pass
summary: FeedItemDetail is now a page and a hook (`hooks/useFeedItemDetail.ts`: the 4 share variables and the 2 handlers). The page renders `DetailLayout` directly, without the `Layout_DetailPage` adapter. `api.ts`, `types.ts` and the empty `mocks.ts` are deleted, and the input reader moved to `inputs.ts`. No shared block changed. A temporary old-vs-new check found the same DOM, calls, URLs and view-cache restore. Typecheck, eslint, prettier, the full test suite and `arch_baseline.py check` (exit 0) pass. The HomeFeed first load did not grow (245.99 → 245.91 kB gzip).

## Files changed
app/src/pages/FeedItemDetail/FeedItemDetailPage.tsx (rewritten: DetailLayout + useNavigateBack, inputs.ts, useEmbeddedFeed, useFeedItemDetail; no inline compiled-line references)
app/src/pages/FeedItemDetail/inputs.ts (new: FeedItemDetailInputs, which came from types.ts, and readFeedItemDetailInputs, which came from api.ts; `@origin`)
app/src/pages/FeedItemDetail/hooks/useFeedItemDetail.ts (new: IsShareOpen, ShareableObjectId, ShareObjectTypeId and ShareableFeedItem with the same useViewState names, Handler_ShareFeed, Handler_CloseShareSheet; `@origin`)
app/src/pages/FeedItemDetail/hooks/useFeedItemDetail.test.tsx (new, 4 tests)
app/src/pages/FeedItemDetail/FeedItemDetail.test.tsx (the import of NULL_DATE from ./api became a local constant; 2 new tests in the app frame: the back arrow and the view-cache restore; the 5 old tests did not change)
app/src/pages/FeedItemDetail/api.ts (deleted)
app/src/pages/FeedItemDetail/types.ts (deleted)
app/src/pages/FeedItemDetail/mocks.ts (deleted: an empty handler list)
migration/refactor/handoffs/P6-G3-B-FeedItemDetail/dev.md (this report)

Not changed: the staged diff of P6-G3-B-HomeFeed, `components/feed/*`, `components/share/*`, `containers/ShareSheet`, `components/layout/*`, `shared/UBTConnectLibrary/Layout_DetailPage` (16 other importers keep the adapter), `platform/session/useEmbeddedFeed.ts`, `app/docs/refactor/arch-baseline.csv` (this page had no rows).

## Commands run
Bundle before the change (on the staged HomeFeed base): `npm --prefix app run build` → exit 0; `node app/build/bundle-report.mjs HomeFeed Login FeedItemDetail` → HomeFeed 756.68 / 245.99 kB gzip (39 chunks), Login 608.95 / 186.99, FeedItemDetail 660.75 / 207.62 (24 chunks)
`npm --prefix app run typecheck` → exit 0
`cd app && npx vitest run src/pages/FeedItemDetail` → exit 0, 2 files, 11 tests
`cd app && npx vitest run src/pages/FeedItemDetail src/mocks/handlers.test.ts src/app src/components/feed src/platform/session/useEmbeddedFeed.test.tsx src/containers/ShareSheet src/components/layout/DetailLayout src/shared/UBTConnectLibrary/Layout_DetailPage` → exit 0, 15 files, 85 tests
`cd app && npx vitest run` (full suite) → exit 0, 437 files, 2340 tests (HomeFeed base: 436 / 2334; +1 file and +6 tests)
`cd app && npx eslint src/pages/FeedItemDetail` → exit 0, 0 errors, 0 warnings
`cd app && npx prettier --check src/pages/FeedItemDetail` and `npm run format:check` → exit 0
`python3 migration/tools/refactor/arch_baseline.py check` → exit 0, "61 warnings, 61 baseline rows, 0 new, 0 gone"
`cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err` → exit 0, 0 errors, 210 warnings (the same as the HomeFeed base), no line for src/pages/FeedItemDetail
Mutation check of the restore test: when IsShareOpen used useState instead of useViewState, the new view-cache test failed (1 of 7). The hook was then restored from a copy, and `git diff --no-index` showed no difference.
Temporary old-vs-new tests (`src/__tmp_parity/`: copies of the old page, api.ts and types.ts from the index, deleted after the run) → 2 files, 7 tests, all equal:
  - App frame, HomeFeed → Search → FeedItemDetail, signed in: default, no FeedItemId, C2EnableFeed off, C2ExtendedShare off. Equal: innerHTML on the first render and after 400 ms, the calls (`Embedded_FeedCMS/DataActionGetFeedConfig`, none with the feed off) and the URL after the back arrow (/UBTConnect/Search).
  - Share flow with the real ShareSheet and FeedCms replaced by a spy: C2ExtendedShare on (signed out and signed in) and off. Equal: the DOM after Event_Share, the calls (`ShareSheet/DataActionGetRecentlyShared` when the sheet opens), the URL and the DOM after Search and back. React useId values (`_r_<n>_`) were normalized, because two renders in one process count them on.
Bundle after the change → build exit 0; HomeFeed 756.67 / 245.91 kB gzip (39 chunks), Login 608.94 / 186.95, FeedItemDetail 660.30 / 207.25 (23 chunks: the adapter chunk is gone from its first load). Per chunk (raw bytes): FeedItemDetailPage 1706 → 1881 (+175, the hook), handlers 122476 → 122326 (−150, the empty mocks.ts), entry −3, LoginPage −5.

## Deviations from the brief
1. Workspace: as the master asked (prefetch mode), I worked in the git worktree on branch `rf/prefetch-P6-G3-B-FeedItemDetail-90ac13f1`, not on `refactor/architecture`. The base is the staged HomeFeed diff. I did not stage anything: I deleted the 3 files with `rm`, so the deletions are not staged, and the new files are untracked. Of these files, only `FeedItemDetailPage.tsx` was in the HomeFeed diff (2 lines). It now shows `MM`, and my rewrite is the unstaged part.
2. Shape: a page and a hook, with no container and no component of its own. The page has one data source (the nested GetFeedConfig, in useEmbeddedFeed), no data hook and two handlers. There is no reducer and no state file, because the four variables do not read each other. The variables keep `useViewState` with the same names, so the back-navigation restore (P-BACK) does not change. The new page test covers it.
3. Layout: the page renders `DetailLayout` with `onBack={useNavigateBack()}` instead of the `Layout_DetailPage` adapter, as Menu and ContactUsMenu do. The adapter did the same thing (it called useNavigateBack and passed undefined for the other inputs). The DOM is the same (temporary check). `useNavigateBack` has no effect, so the hook order of the page does not matter.
4. NULL_DATE (In_UpdateDate = NullDate() in the view) is a module constant in the page and in its test. No `api/` or `platform/` module exports a date-only null value, and the page has only this use. ShareSheetContainer has the same default, but the page keeps passing it, as the view does.
5. `ShareableFeedItem` uses the type `UI_ShareableObject_Generic` from `@/components/share/ShareableObject` (the final place, a re-export) and no longer from `shared/UBTConnect_Utils/lib/structures`. The static entities `Type_ShareObject` and `Connect_Entity` stay in `shared/` (P7). The hook imports them as the old page did. These imports cause no lint:arch warning.
6. Edits outside the Edit and Write tools:
   - I used inline Python string replacements to edit the temporary test files, which are deleted now.
   - For the mutation check, I edited the hook with an inline Python replacement, then restored it from a copy. The final file is the one written with Write.
   - One command had a stray `sed -i '' … /dev/null`. It failed ("in-place editing only works for regular files") and changed no file.
   - Every edit of a kept file used Edit or Write.
7. Rule 9: the rewritten page, the inputs and the hook have no compiled-line references. The test names of the 5 old page tests keep theirs, because I changed only the import of that file.
8. For the documenter:
   - move-map row 289 (`src/screens/FeedItemDetail/index.tsx`): the shape is page + hook. Hook `pages/FeedItemDetail/hooks/useFeedItemDetail.ts`, inputs `pages/FeedItemDetail/inputs.ts` (types.ts folded in). The page renders DetailLayout without the Layout_DetailPage adapter. api.ts, types.ts and mocks.ts are deleted.
   - Move-map row 241 (Layout_DetailPage): one importer fewer, 16 remain.
   - The CHANGELOG entry.
   - `app/docs/refactor/graph.json` still lists the old paths. It is a generated file, and earlier B steps did not regenerate it.

## Questions for the user
none
