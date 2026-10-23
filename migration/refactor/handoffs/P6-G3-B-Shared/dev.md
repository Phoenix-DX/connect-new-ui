## Result
status: pass
summary: Moved the 19 src/shared/ rows of P6-G3 (135 files) with move.ts (file-list CSV), renamed component and Props to the target names (16 files), added 19 @origin tags, rewrote 126 imports in 78 files. 31 new Rule 4 warnings added as baseline rows (22 P6-G3-B owners, 9 P7).

## Files changed
135 files under app/src/shared/{Connect2_LegacyShared,NavigationHandler,UBTConnect_EmbedFeed,UBTConnect_Utils,UBTConnect,UBTConnectLibrary}/ -> app/src/components/{layout,feed,search,share,notification,filter}/, app/src/containers/ShareSheet/, app/src/platform/navigation/ScrollAnchor/, as in move-map.csv (colocated tests, stories, README, __captures__ move with them)
~78 importers (import lines and renamed identifiers; two vi.mock factory keys: app/src/components/feed/EmbeddedFeed/EmbeddedFeed.test.tsx, app/src/pages/FeedItemDetail/FeedItemDetail.test.tsx)
app/docs/refactor/arch-baseline.csv (+31 rows)
Prettier re-format of 4 moved files after the renames (long lines): FeedCms.tsx, FilterOptionChoice.tsx, NotificationRefresh.tsx, ShareSheetContainer.stories.tsx

## Commands run
node migration/tools/refactor/move.ts --map <file-list csv> --phase P6-G3 -> moved 135 files, 126 imports, typecheck ok
rename-exports-g1-shared.ts, add-origin-g1-shared.py (reused) -> 16 files renamed (Update_ListItem was already UpdateListItem), 19 tags
npm --prefix app run typecheck -> exit 0
cd app && npx vitest run -> 432 files, 2316 tests pass (after the 2 vi.mock key fixes; 11 failed before)
cd app && npx eslint src -> 0 errors, 80 warnings (all in the baseline); prettier --check src clean
arch_baseline.py check --move-step P6-G3 --base 3b30db5 (before the rows) -> 31 ADD, 0 new failures; after appending: 78 warnings, 78 rows, 0 new, 0 gone (also with --move-step P6-G2)
rf.py diffcheck --move -> FAIL only on base diffs (G2 page steps, UBTConnect/lib/actions); lines of this step that are not a move: none (renames 219, origin tags 27; arch-baseline.csv is a listed other file)

## Deviations from the brief
- Mocks: two moved blocks have a mocks.ts. FeedCms/mocks.ts is now under components/feed (picked up by the existing ../components/**/mocks.ts glob, W17; order shared -> components -> platform unchanged for it). ShareSheet/mocks.ts is now under containers/ShareSheet (picked up by ../containers/*/mocks.ts, which comes before shared; its 4 endpoints exist in no other mocks file, so the order does not matter). handlers.ts is not changed.
- vi.mock factory keys missed by the rename (Embedded_FeedCMS -> FeedCms, ShareSheet -> ShareSheetContainer) fixed by hand (identifiers only).
- Owners of the 31 new baseline rows: feed/* and NotificationIcon -> P6-G3-B-HomeFeed; filter/* -> P6-G3-B-Search; MainLayoutFixedTitle -> P6-G3-B-Updates_SingleList; MenuIconBack and SharePopup (layout shell / used by 9 routes of several groups) -> P7.
- Helper scripts in the scratchpad (file-list generator g3s-gen.py); the project tools are reused unchanged.

## Questions for the user
none
