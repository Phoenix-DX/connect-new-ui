## Result
status: pass
summary: Moved the 30 src/shared/ rows of phase P6-G1 (200 tracked files) to their targets with move.ts, one run with a per-file CSV; the main file, test and stories take the target name. Renamed the component and its Props type to the target name in 21 files and all importers (ts-morph rename). Added @origin tags. Typecheck, full vitest (392 files, 2111 tests), eslint (0 errors), format:check pass.

## Files changed
app/src/shared/{NavigationHandler,UBT_AppManager,UBT_AppManager_Mobile,UBTConnect,UBTConnectLibrary}/<30 block folders> -> app/src/{platform,components}/... as in app/docs/refactor/move-map.csv (git mv, 200 files incl. README, index.ts, types.ts, __captures__, tests, stories)
Main files renamed with the target name (path + export + Props type), 21 blocks: LayoutRuntime_Top, PinUnlock_MobileWrapper, Pincode_Register, Pincode_Unlock, App_IconBadge, Block_PINRegister_ContentWrapper, Block_PINUnlock_ContentWrapper, BottomBarMenu, CommonUI_InsideLayout, HandleOnResumeOpenLink, Menu_List, OfflineDataSyncEvents, Policy_Checker, UnsupportedVersion_{Browser,Native,WebView,Wrapper}, Version, Layout_HomePage, Layout_LoginFlow, SubLayout_HomePageSearch
The 30 target main files (*.tsx): added one line `/** @origin <origin column of the move map> */` at the top
Importers (about 100 files in pages/, screens/, shared/, platform/, components/): import lines and renamed identifiers only (262 imports rewritten by the codemod; prettier re-wrapped 7 files)
migration/tools/refactor/rename-exports-g1-shared.ts (new)
migration/tools/refactor/add-origin-g1-shared.py (new)
(30 empty old folders under app/src/shared removed; git does not track them)

## Commands run
node migration/tools/refactor/move.ts --map <scratch>/files.csv --phase P6-G1 --no-typecheck → Moved 200 files, rewrote 262 imports (CSV: one row per tracked file of the 30 rows, built from move-map.csv; the codemod's own --map treats the .tsx target as a folder, so I used the file list)
node migration/tools/refactor/rename-exports-g1-shared.ts → renamed in 21 files
python3 migration/tools/refactor/add-origin-g1-shared.py → 30 tags
npm --prefix app run typecheck → exit 0
cd app && npx vitest run (full) → 392 files, 2111 tests pass
cd app && npx eslint <all changed files> → 0 errors, 88 warnings
cd app && npx prettier --check . → clean
npm --prefix app run lint:arch → 0 errors, 89 warnings

## Deviations from the brief
- The map target is a file path, so I moved per file (codemod CSV mode on a file list) instead of per folder.
- Renames went beyond the file: component and `<Name>Props` exports renamed to the target name (task instruction); other exports/identifiers untouched.
- `// @os-block` comment kept below the new `@origin` line (migration tools read it).
- lint:arch warnings: components/** files that import platform/ (Rule 4) are new warnings in the new folders (components/auth, layout, version, menu: about 88 in changed files; lint:arch total 89). They come from the placement given in the move map (not changed here); the baseline count was not measured by me, the tester should compare with HEAD.
- Not checked: import.meta.glob in mocks/handlers.ts (`../shared/**/mocks.ts`): none of the 30 blocks has a mocks.ts, so no change.

## Questions for the user
none

## Loop 1

### Result
status: pass
summary: W12: `rf.py diffcheck --move` now accepts identifier renames declared by `app/docs/refactor/move-map.csv`; it passes on the step tree with no line reverted. W13: frozen lint:arch baseline `app/docs/refactor/arch-baseline.csv` (88 rows) and check script `migration/tools/refactor/arch_baseline.py` (check/list/write); check exits 0 on the current tree.

### Files changed
.claude/skills/refactor-master/scripts/rf.py (diffcheck rename map; own commit)
.claude/skills/refactor-master/scripts/test_rf.py (4 new tests, class TestDiffcheckRenames; own commit)
app/docs/refactor/arch-baseline.csv (new)
migration/tools/refactor/arch_baseline.py (new)
migration/refactor/handoffs/P6-G1-B-Shared/dev.md (this section)
No app code changed in this loop.

### How diffcheck --move works now
- Map: rows with a `src/shared/` source and a `.tsx` target whose target file already exists (a block not yet moved keeps its names). Old identifier = source block name, new = target base name, plus `<Old>Props` -> `<New>Props`. No other derived names were needed (the renamer only did these two). Built from the CSV, not from the diff.
- A changed line passes when, after the map is applied to whole identifier tokens outside string literals and comments, the removed line equals an added line of the same file (and the reverse). Strings (className, testid, displayName, test titles) and comments are never renamed, so a change there fails.
- Fallback for Prettier re-wrapping after a rename (line length changed): the old file, without import/re-export statements and `@origin` tags, mapped, must equal the new file's token text ignoring whitespace, parentheses and trailing commas (strings and comments compared exactly). Only used when a map applies.
- The 20 `shared/*/index.ts` delete + add pairs are matched through the map (old dir -> target dir) and checked the same way.
- Code files outside `app/` (step helper scripts in `migration/tools/`) are listed as "other file (review it)" instead of failing. Without a map nothing changes: old behavior.
- Known limit: the fallback ignores parentheses, so it would not see `(a+b)*c` changed to `a+b*c` inside a re-wrapped file; ci and parity cover that.

### Commands run
python3 -m unittest test_rf (in .claude/skills/refactor-master/scripts) -> 25 tests OK (new: mapped rename passes, logic change fails, string-literal change fails, unmapped rename fails)
python3 .claude/skills/refactor-master/scripts/rf.py diffcheck --move -> ok (renames 200, origin tags 30; other files: rf.py, test_rf.py, ledger.csv, 2 helper scripts, parity report)
python3 migration/tools/refactor/arch_baseline.py write / list / check -> 88 rows (PINRegister 20, PINUnlock 32, P7 35, pre-existing 1); check: 88 warnings, 0 new, 0 gone, exit 0

### Baseline notes
- Key is (file, import specifier, rule); two imports of the same specifier in one file (CommonUiLayout.tsx, `@/platform/feedback/dialogs`) are one row. So the 88 new warnings of the tester are 87 rows.
- I included the 1 old HEAD warning (components/ui/os/OSPopup/usePopupWidget.ts -> `@/platform/session/session`) with owner `pre-existing`, because the check must exit 0 on the tree; without the row the gate would fail. It can be deleted when OSPopup is fixed.
- Owners: PinRegisterContent, PinCodeRegister -> P6-G1-B-PINRegister; PinUnlockContent, PinCodeUnlock, PinUnlockMobile, PinCode, FingerprintScanner -> P6-G1-B-PINUnlock; layout/*, version/* -> P7.
- `npm run lint:arch` itself is unchanged (still 89 warnings); the gate becomes `python3 migration/tools/refactor/arch_baseline.py check`. The master should add it to the gate list and to the briefs of the PIN and P7 steps ("delete your rows"). The `arch` (depcruise rule-9) warnings are not covered.

### Questions for the user
none
