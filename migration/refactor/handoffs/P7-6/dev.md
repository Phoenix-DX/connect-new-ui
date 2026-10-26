# P7-6 developer report

The master commits P7-6 as five commits. After each part, `git add -A -- . ':!node_modules' && git write-tree` saved the
index tree to `scratchpad/P7-6-part<N>.tree` (full path:
`/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/59d369e8-2125-443a-af59-6fe7f8eaa7bc/scratchpad/`).
The base is the index before part 1, tree `340686946e8179cea87f7f59326ffda8db29aed1` (G5, G6, P6-end, P7-0 to P7-4).

## Part 1 (commit 1: move-map rows, docs only) — tree `P7-6-part1.tree`

### Result

status: pass
summary: Every one of the 142 files in `src/shared/` is covered by one P7-6 row of move-map.csv: 13 existing rows were
updated (2 of them record the P7-2 dialog outcome) and 43 were added. Review W32 approved all twelve choices T1 to T12
as option (a), with changes, and the changes are in: owners in the row notes, the evidence for row 1, the wording of
row 16, the import of row 33, the two broken rows 7 and 245, and a "Debt created" section in `rows.md`.

### Files changed

app/docs/refactor/move-map.csv (13 rows changed, 43 rows added at the end, rows 7 and 245 quoted)
migration/tools/refactor/p7-6-move-map-rows.py (new: writes the rows; `--check` coverage; `--files` per-file list)
migration/refactor/handoffs/P7-6/rows.md (new: review table, two-target list, "Debt created")
migration/refactor/handoffs/P7-6/dev.md (new)
The `git add -A` of this part also staged the untracked `migration/refactor/handoffs/P7-0/` to `P7-4/` `brief.md` files
(master files).

### Commands run

- `git ls-files app/src/shared` plus `--others --exclude-standard` → 142 files, 0 untracked
- `npx depcruise src --config .dependency-cruiser.cjs --output-type json` → 274 warnings (rule-5 122, rule-9 94,
  rule-4 39, rule-8 19)
- simulation of the rows on that graph (`scratchpad/p76/simulate.py`) → 227 (new: rule-6 55, rule-9 5, rule-8 1,
  rule-4 1, rule-5 1; gone: rule-5 110); ESLint rule 4: +1 row (W15-acceptable), 0 rows in importers that do not move
- `python3 migration/tools/refactor/p7-6-move-map-rows.py` → 56 rows applied; second run: same md5
- `python3 migration/tools/refactor/p7-6-move-map-rows.py --check` → 142 covered (136 moved, 6 deleted), 0 problems
- `python -c csv` field count of move-map.csv → every row has 8 fields
- `python3 migration/tools/refactor/arch_baseline_selfcheck.py` → ok

### Deviations from the brief

- Branch: the worktree is on `rf/prefetch-P7-fff324fa`, as the master ordered (prefetch).
- The follow-up owners are names that the master can map to F ids: FU-split-module-actions, FU-OSLink-navigation, and
  "the CacheControl → api hooks step".
- First round: I changed the importer counts in the notes of my new script with a one-off inline Python substitution,
  not with the Edit tool. No app file was edited this way. The W32 changes used the Edit tool.

### Questions for the user

none

## Part 2 (tool: arch_baseline.py file rows, T5) — tree `P7-6-part2.tree`

### Result

status: pass
summary: `old_path_of` in `migration/tools/refactor/arch_baseline.py` now knows three row kinds: a file row (a source
with an extension: the target file and its test/spec/stories companions), a folder row with a folder target (names
kept), and the block folder row of before. File rows come first, and a file row that does not match goes on to the next
row. `moved_modules` and `translate` handle the same kinds, so an old import of a moved file counts under its new path.
`arch_baseline_selfcheck.py` tests all three kinds.

### Files changed

migration/tools/refactor/arch_baseline.py (`MOVE_MAP`, `phase_rows`, `is_file_path`; `old_path_of`, `moved_modules` and
`translate` extended; the folder-row behavior is unchanged)
migration/tools/refactor/arch_baseline_selfcheck.py (18 new asserts on a temporary move map: file rows, companions, a
file that was already in the target folder, the file row before its folder row, a folder target, another phase, a
delete row)
migration/refactor/handoffs/P7-6/dev.md

### Commands run

- `python3 migration/tools/refactor/arch_baseline_selfcheck.py` → ok
- `python3 migration/tools/refactor/arch_baseline.py check` → 77 warnings, 77 baseline rows, 0 new, 0 gone
- `old_path_of` on the real P7-6 rows (OSLink, a CacheControl block, the adapter story, the wrapper types, a mocks
  test, jsUtils.test, src/test, Leaflet) → the expected `src/shared/` path for each

### Deviations from the brief

- I appended this Part 2 section with a shell heredoc. Later parts and the assert count (17 → 18, corrected in part 3)
  use the Edit tool.

### Questions for the user

none

## Part 3 (delete MultiResolutionImageLoader, T12) — tree `P7-6-part3.tree`

### Result

status: pass
summary: Deleted `src/shared/Connect2_LegacyShared/MultiResolutionImageLoader/` (component, test with 2 cases, story,
README, index), as the P0-5 shape `delete` and W32 T12 (a) say. Nothing in the app used it, and the typecheck passes.

### Evidence

- Import graph (dependency-cruiser JSON of the base): the 5 files have no dependent outside the folder. The component
  imports only `components/ui/os/OSBlock`.
- grep of `app/src`, `app/build` and `app/.storybook` for `MultiResolutionImageLoader`: no hit outside the folder (the
  same before and after the move-map edit).
- knip cannot prove it: `app/knip.json` makes every `src/**/*.stories.tsx` an entry, and the story imports the
  component, so knip keeps it alive.
- move-map row: shape `delete`, routes `0` (P0-5), and the P7-0 note "no importer outside its tests and stories".

### Files changed

app/src/shared/Connect2_LegacyShared/MultiResolutionImageLoader/MultiResolutionImageLoader.tsx (deleted)
app/src/shared/Connect2_LegacyShared/MultiResolutionImageLoader/MultiResolutionImageLoader.test.tsx (deleted, 2 cases)
app/src/shared/Connect2_LegacyShared/MultiResolutionImageLoader/MultiResolutionImageLoader.stories.tsx (deleted)
app/src/shared/Connect2_LegacyShared/MultiResolutionImageLoader/README.md (deleted)
app/src/shared/Connect2_LegacyShared/MultiResolutionImageLoader/index.ts (deleted)
migration/refactor/handoffs/P7-6/dev.md

### Commands run

- `npm --prefix app run typecheck` → exit 0

### Deviations from the brief

- The deleted test is the test of dead code (agent rule 8: a deleted test needs approval). W32 approved T12 (a).
- The move-map row status stays empty. The documenter sets the statuses of the P7-6 rows.

### Questions for the user

none

## Part 4 (pure move, commit 2) — tree `P7-6-part4.tree`

### Result

status: pass
summary: `move.ts` moved the 136 files of the P7-6 rows, using the per-file list from `p7-6-move-map-rows.py --files`,
and rewrote 1374 imports in 866 files. The ts-morph tool renamed 9 blocks (18 exports). `src/shared/` is gone: its
README was deleted, then its empty folders. Its lint rules went in the same part (6 dependency-cruiser rules, the
`.prettierignore` line), and there was no alias. The MSW handler list is the same before and after: 155 handlers in the
same order.

Gates on this tree:
- dependency-cruiser: 274 → 227, the same set as the simulation and the "Debt created" table.
- ESLint: 1 W15 row with owner FU-OSLink-navigation.
- diffcheck: only the declared lint-config lines.
- Unit suite: 640 files, 3933 tests.

### Files changed

- Moved (136, `git mv` by `move.ts`): every source of the P7-6 rows to its target, as in `rows.md`. 125 are git
  renames, and 11 pairs show as D + A (small `index.ts`/`types.ts` files whose import line changed; `rf.py` pairs them
  through the move map).
- Importers: 812 files changed. Import specifiers changed in all of them. In the users of the 9 renamed blocks (and in
  their stories and tests), the identifiers changed too:
  - Member_ListItem → MemberListItem
  - HouseholdDetails_TimelinePhoto → HouseholdTimelinePhoto
  - HouseholdDetails_TimelinePhoto_List → HouseholdTimelinePhotoList
  - CacheControl_AllCountries → AllCountriesCacheControl
  - CacheControl_AllLocalities → AllLocalitiesCacheControl
  - CacheControl_Policies → PoliciesCacheControl
  - CacheControl_UserInfo → UserInfoCacheControl
  - CacheControl_UserInfo_Wrapper → UserInfoCache
  - Layout_DetailPage → DetailLayoutContainer
  - each with its `…Props`
- Prettier re-wrap of import lines in the 33 files that `prettier --list-different` named after the move (shorter
  `@/lib/…` paths fit on one line).
- app/src/shared/README.md (deleted). The empty folders of `src/shared/` were removed.
- app/src/mocks/handlers.ts: the glob `'../shared/**/mocks.ts'` became `'./modules/**/mocks.ts'` (same variable, same
  place in the order). This is a declared non-move line.
- app/src/mocks/handlers.test.ts: the same glob, in 2 places. Declared non-move lines.
- app/.dependency-cruiser.cjs: the 6 `src/shared/` rules were removed (`shared-no-import-of-screens-or-app`, the 2
  P3-2 rules and the 3 P3-3 rules), and `shared/` was removed from 2 comments.
- app/.prettierignore: `src/shared/**/__captures__` removed.
- app/docs/refactor/arch-baseline.csv: +1 row,
  `src/components/ui/os/OSLink.tsx,@/platform/navigation,rule-4,FU-OSLink-navigation`.
- migration/refactor/handoffs/P7-6/rows.md: "66 warnings" → "63 warnings" in "Debt created" (a sum error). The trees
  of parts 1 to 3 were rebuilt with the corrected `rows.md` through a temporary index, so each part has the fix.
- migration/refactor/handoffs/P7-6/dev.md

### Commands run

- MSW handler list (a temporary vitest file that wrote `handlers.map(h => h.info.header)`; deleted after each run):
  before 155 (147 unique), after the same 155 in the same order (`cmp`: identical)
- `node migration/tools/refactor/move.ts --map p76-files.csv --phase P7-6 --dry-run` → 136 files, 1374 imports in 866
  files. Warnings: the 2 MSW globs (changed by hand), and 8 `./__captures__` globs that move with their folders.
- `node migration/tools/refactor/move.ts --map p76-files.csv --phase P7-6 --no-typecheck` → moved 136, rewrote 1374
- `node migration/tools/refactor/rename-exports-g1-shared.ts p76-rn.csv` → renamed in 9 files, no "skip" line
- rename map of `rf.py` (`load_rename_map`, after the move) → `Layout_DetailPage` → `DetailLayoutContainer`,
  `Layout_DetailPageProps` → `DetailLayoutContainerProps`, and the dir map `…/Layout_DetailPage` →
  `app/src/containers/DetailLayout`. The P7-6 row comes after the P2 row, so it wins (T4).
- `rf.py diffcheck --move` against the part 3 tree (`scratchpad/p76/diffcheck_vs_tree.py` replaces `HEAD` by the tree,
  because the index holds the earlier steps) → renames 136, origin tags 0. NOT A MOVE: 49 lines, all in
  `app/.dependency-cruiser.cjs` (the removed `shared/` rules and 2 comments). Other files: `.prettierignore`,
  `arch-baseline.csv`, `src/shared/README.md` (deleted). The 3 glob lines pass as path lines.
- `python3 migration/tools/refactor/arch_baseline.py check --move-step P7-6 --base <part 3 tree>` → 1 ADD (OSLink), 0
  NEW; after the row: `arch_baseline.py check` → 78 warnings, 78 baseline rows, 0 new, 0 gone
- `npx depcruise src` (JSON) → 227 warnings, 0 errors: rule-4 40, rule-5 13, rule-6 55, rule-8 20, rule-9 99. New
  against the part 3 graph (paths mapped): 63, the same 63 as "Debt created"; gone: 110 (rule-5). **rule-6 = 55** is the
  ceiling from now on.
- `npx prettier --check .` → pass after the re-wrap
- `npm run typecheck` → exit 0
- `npx eslint .` → 0 errors, 79 warnings (78 boundary rows + the 1 non-boundary warning of the base)
- `npx vitest run` → 640 files, 3933 tests pass. The base had 641 and 3935; the difference is the MultiResolutionImageLoader
  test of part 3 (2 cases).

### Deviations from the brief

- The diffcheck ran against the part 3 tree through a wrapper, not against HEAD. The worktree index holds G5, G6,
  P6-end and P7-0 to P7-4, so a check against HEAD would list their lines too.
- The rows.md fix touched the trees of parts 1 to 3 (see "Files changed"). Their file names are unchanged, and their new
  hashes are in the tree files.

### Questions for the user

none

## Main-tree pass (resume, on the part 4 patch the master applied)

The main tree is on `refactor/architecture`. HEAD is `1d9baa51` (part 3), with parts 1 to 3 committed as `cca9b514`,
`14f5a615` and `1d9baa51`. The master applied the part 4 patch and staged it. The master also removed the shared README
by hand and resolved 2 import conflicts (`components/assemble/AssembleSummaryCard`, `VirtualMeetingUrl`). Part 5 is not
applied.

## Part 5 (@origin tags) — tree `P7-6-part5.tree`

### Result

status: pass
summary: One file was added to the main tree after my prefetch base and still imported `src/shared/`. I changed its 2
import paths to the targets of the P7-6 rows, the same change `move.ts` makes. After that, no `@/shared/` or relative
`shared/` import is left in `app/src`, `app/.storybook`, `app/build` or `migration/tools`, and there is no `app/e2e`.
Every gate passes, except that `diffcheck` flags the 49 declared lint-rule lines.

### Files changed

app/src/containers/AssembleSummaryCard/AssembleSummaryCardContainer.tsx (2 import lines:
`@/shared/Connect2_LegacyShared/lib/actions` → `@/lib/legacyShared/actions`,
`@/shared/Connect2_LegacyShared/lib/staticEntities` → `@/lib/legacyShared/staticEntities`; staged)
migration/refactor/handoffs/P7-6/dev.md (this section; staged)

### Commands run

- grep of `app/src app/.storybook app/e2e app/build migration/tools` for `@/shared/`, `../shared/` and globs with
  `shared` (without `.md` text) → before: the 2 lines above. After: only string text in 2 one-off tools, and no import.
  The tools are `p7-2-dialog-users.py` (its old P7-2 search patterns) and `p7-6-move-map-rows.py` (a row note).
- grep for the 9 old block identifiers in `.ts`/`.tsx` → only string and comment text (action names such as
  `'CacheControl_Policies/DataActionGetCacheInfo'`, test names, `data-block` values), no code identifier
- HEAD reference: `git archive HEAD app` exported to the scratch folder `scratchpad/p76/head-export/`, with a symlink to
  `node_modules`. This was not a checkout; the main working tree was not touched. That export gave the HEAD numbers below.
- `npm --prefix app run typecheck` → exit 0
- `npm --prefix app run lint` → 0 errors, 73 warnings (72 boundary rows plus the 1 non-boundary warning)
- `npm --prefix app run format:check` → all files pass
- `npx vitest run` → 641 files, 3939 tests pass. HEAD (export): 641 files, 3939 tests. Same counts.
- `python3 migration/tools/refactor/arch_baseline.py check` → 72 warnings, 72 baseline rows, 0 new, 0 gone. The only
  row added by P7-6 is in a moved file (W15):
  `src/components/ui/os/OSLink.tsx,@/platform/navigation,rule-4,FU-OSLink-navigation`.
  `arch_baseline_selfcheck.py` → ok
- `npx depcruise src` by rule:
  - HEAD: 269 warnings (rule-4 35, rule-5 122, rule-8 19, rule-9 93).
  - Now: 222 warnings (rule-4 36, rule-5 13, **rule-6 55**, rule-8 20, rule-9 98), 0 errors.
  - The 63 new warnings (paths mapped through the rows) are the same set as `rows.md` "Debt created". 110 rule-5
    warnings are gone. rule-6 = 55 (≤ 55).
- MSW handler list (a temporary vitest file, deleted after each run): HEAD export 155 handlers (147 unique), main tree
  after the change 155. `cmp` shows the same list in the same order.
- `python3 .claude/skills/refactor-master/scripts/rf.py diffcheck --move` → renames 136, origin tags 0, exit 1.
  - Other files: `app/.prettierignore` (the `src/shared/**/__captures__` line, a lint rule of the folder),
    `app/docs/refactor/arch-baseline.csv` (+1 W15 row), `app/src/shared/README.md` (deleted with the folder), and
    `migration/metrics/ledger.csv` (unstaged master file, not mine).
  - NOT A MOVE: 49 lines, all in `app/.dependency-cruiser.cjs`. The brief asks for this: "remove its alias and lint
    rules in the same commit".
    - Lines 1 to 7: the header comment. It named the P3-1 to P3-3 `shared/` rules; it now says they went with the folder
      (4 old lines, 3 new lines).
    - Lines 8 and 9: the comment of `pages-imported-by-own-route-only` loses `shared/` from its folder list.
    - Lines 10 to 14: rule `shared-no-import-of-screens-or-app` removed (P3-1; `src/shared/` no longer exists).
    - Lines 15 to 22: rule `ubtconnect-library-no-import-of-utils-or-ubtconnect` removed (P3-2, `src/shared/` paths).
    - Lines 23 to 27: rule `ubtconnect-utils-no-import-of-ubtconnect` removed (P3-2).
    - Lines 28 to 35: rule `osui-no-import-of-app-modules` removed (P3-3).
    - Lines 36 to 42: rule `legacyshared-no-import-of-ubtconnect` removed (P3-3).
    - Lines 43 to 49: rule `mybookmarks-no-import-of-assemble` removed (P3-3).
  - The 3 MSW glob lines (`src/mocks/handlers.ts`, `handlers.test.ts` ×2), the 2 import lines of
    `AssembleSummaryCardContainer.tsx`, and the master's 2 conflict resolutions pass as move lines.
- W21: `npm --prefix app run build && node app/build/bundle-report.mjs`.
  - HomeFeed: 751.34 kB raw, 244.69 kB gzip, 40 chunks. HEAD export: 751.35 / 244.66, so +0.03 kB gzip.
  - Login: 601.35 / 184.71, 12 chunks. HEAD export: 601.36 / 184.71, so ±0.00.
  - Both are within the +0.3 kB tripwire.

### Deviations from the brief

- The HEAD numbers (tests, depcruise, MSW list, W21) come from a `git archive` export of HEAD in the scratch folder,
  because the main working tree holds the staged part 4.
- Not run: `npm run ci` as one command, and the parity (tester gates).

summary: Added one `/** @origin <OutSystems qualified name> */` line at the top of the 10 moved block files, with the
P7-0 script `add-origin-g1-shared.py`. Each name is the file's `@os-block` name and the origin of its move-map row. No
other line changed.

### Files changed

app/src/components/household/MemberListItem/MemberListItem.tsx (UBTConnectLibrary.ConnectCorePatterns.Member_ListItem)
app/src/components/household/HouseholdTimelinePhoto/HouseholdTimelinePhoto.tsx (UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto)
app/src/components/household/HouseholdTimelinePhotoList/HouseholdTimelinePhotoList.tsx (…HouseholdDetails_TimelinePhoto_List)
app/src/legacy/os/cache/CacheControl/CacheControl.tsx (UBTConnect_Utils.CacheControl.CacheControl)
app/src/legacy/os/cache/AllCountriesCacheControl/AllCountriesCacheControl.tsx (…CacheControl_AllCountries)
app/src/legacy/os/cache/AllLocalitiesCacheControl/AllLocalitiesCacheControl.tsx (…CacheControl_AllLocalities)
app/src/legacy/os/cache/PoliciesCacheControl/PoliciesCacheControl.tsx (…CacheControl_Policies)
app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx (…CacheControl_UserInfo)
app/src/platform/session/UserInfoCache/UserInfoCache.tsx (UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper)
app/src/containers/DetailLayout/DetailLayoutContainer.tsx (UBTConnectLibrary.Layouts.Layout_DetailPage)
migration/refactor/handoffs/P7-6/dev.md

### Commands run

- `python3 migration/tools/refactor/add-origin-g1-shared.py p76-org.csv` → 10 files, +10 lines. Every origin is the
  origin of its P7-6 move-map row (checked).
- `rf.py diffcheck --move` against the part 4 tree (same wrapper) → renames 0, ok

### Deviations from the brief

- No tag on `components/ui/os/OSLink.tsx` and on the `lib/` and `mocks/modules/` files: they port no OutSystems
  screen or block (OSLink ports the platform Link widget; the others are module actions, static entities, structures
  and mock handlers). This is the same choice as P7-0.

### Questions for the user

none


## Final checks (on the part 5 tree)

- `npm --prefix app run typecheck` → exit 0
- `npm --prefix app run lint` → 0 errors, 79 warnings
- `npm --prefix app run format:check` → all files pass
- `npx vitest run` → 640 files, 3933 tests pass
- `python3 migration/tools/refactor/arch_baseline.py check` → 78 warnings, 78 baseline rows, 0 new, 0 gone;
  `arch_baseline_selfcheck.py` → ok
- `npx depcruise src` by rule → 227 warnings, 0 errors: rule-4 40, rule-5 13, **rule-6 55** (the ceiling; it may only
  go down later), rule-8 20, rule-9 99. Base: 274 (rule-4 39, rule-5 122, rule-8 19, rule-9 94).
- `rf.py diffcheck --move` on part 4 → see Part 4: only the 49 declared lines of `app/.dependency-cruiser.cjs`.
- W21: `npm --prefix app run build && node app/build/bundle-report.mjs` → HomeFeed 751.34 kB raw, 244.64 kB gzip,
  40 chunks (base 244.65: −0.01). Login 601.35 kB raw, 184.70 kB gzip, 12 chunks (base 184.70: ±0.00).
- Not run (tester's gates): `npm run ci` as one command, and the parity `strict --all`.
- `src/shared/` does not exist. `git ls-tree` of the part 5 tree has no `app/src/shared/` path.
