## Result
status: pass
summary: Moved the 2 src/shared/ rows of P6-G6 (13 files) with move.ts (file-list CSV): FreeSubscriptionActionDialog -> pages/LegacyShareObject/components/UpgradeSubscriptionDialog (component and Props renamed), NoBookmarks -> components/bookmark/NoBookmarks. 2 @origin tags, 7 imports rewritten. No new Rule 4 warning: baseline stays at 124 rows.

## Files changed
app/src/shared/Connect2_LegacyShared/FreeSubscriptionActionDialog/** (7 files) -> app/src/pages/LegacyShareObject/components/UpgradeSubscriptionDialog/** (FreeSubscriptionActionDialog.* -> UpgradeSubscriptionDialog.*; stories, test, README, __captures__ move with it)
app/src/shared/Connect2_MyBookmarks_MUI/NoBookmarks/** (6 files) -> app/src/components/bookmark/NoBookmarks/**
Importers (import lines and the renamed identifier): 7 files in pages/ (LegacyShareObject, MyBookmarks, BookmarksByGroup components)
Empty old directories removed (2)
Left in place (no move-map row): app/src/shared/Connect2_MyBookmarks_MUI/mocks.ts and mocks.test.ts
migration/tools/refactor/ unchanged (move.ts, rename-exports-g1-shared.ts, add-origin-g1-shared.py reused; helper g6s-gen.py in the scratchpad)

## Commands run
node migration/tools/refactor/move.ts --map g6s-files.csv --phase P6-G6 -> moved 13 files, 7 imports, typecheck ok
rename-exports-g1-shared.ts -> 1 file (FreeSubscriptionActionDialog; NoBookmarks keeps its name); add-origin-g1-shared.py -> 2 tags
npm --prefix app run typecheck -> exit 0
cd app && npx vitest run -> 432 files, 2316 tests pass
cd app && npx eslint src -> 0 errors, 126 warnings (all in the baseline); prettier --check on changed files clean
arch_baseline.py check --move-step P6-G6 --base 584af145 -> 124 warnings, 124 rows, 0 new, 0 gone (no ADD lines)
rf.py diffcheck --move -> FAIL only on base diffs of G3/G4/G5 (AssembleSummarySkeleton.test glob, NoteList.stories, NoteListActionsContainer.test, OrbitEventCard/index.ts, Note_Item_List/index.ts). Renames 986, origin tags 128. No line of this step is listed as not a move.

Lines of this step that are not a move: none.

## Deviations from the brief
- Built on top of the P6-G6-A result in the same worktree (the pages/ paths of LegacyShareObject exist there).
- The G6 mocks.ts under shared/Connect2_MyBookmarks_MUI stays: it has no move-map row.

## Questions for the user
none
