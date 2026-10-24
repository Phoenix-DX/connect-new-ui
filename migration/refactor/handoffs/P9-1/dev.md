## Result
status: pass
summary: Rules to error with frozen baselines, jscpd and knip gates in `npm run ci` (worktree wt-P9-1, branch rf/prefetch-P9-1, nothing committed). `npm run ci` exits 0 (3975 tests). No source file in `src/` changed.

Numbers
- Rule 9 scope (F38, reclassification, config only): 34 -> 30. The 4 rows left out are `src/mocks/contract.ts`, `src/pages/ConnectShare/mocks.ts`, `src/test/setup.ts`, `src/test/testSupport.ts`.
- dependency-cruiser: every folder rule is `error`, `no-circular` stays `error`. 142 violations, all frozen in `app/.dependency-cruiser-known-violations.json` (rule 4: 36, rule 5: 6, rule 6: 50, rule 8: 20, rule 9: 30). Rule 3, rule 7 and `pages-imported-by-own-route-only`: 0.
- ESLint: rule 4 (`no-restricted-imports`) is `error` in `components/**`. The 72 baseline rows stay a `warn` only in the files of the CSV (read by `eslint.config.js`); any other file is an error (tested with a temporary file). Rule 11 was already `error`.
- ESLint 73 vs 72: `CommonUiLayout.tsx` imports `@/platform/feedback/dialogs` twice (two import lines). The row key is (file, import, rule), so two warnings give one row. `check` passes. Not a hidden row.
- jscpd: P7-5/P7-4 value 36 clones, 667 lines, 0.52 percent; now 35 clones, 644 lines, 0.51 percent. `threshold` = 0.57 (0.52 + 10 percent) in `app/.jscpd.json`; `npx jscpd --threshold 0.1` exits 1, so the gate works.
- knip: `npm run unused` = `knip --include files,dependencies,unlisted,unresolved,binaries,duplicates`, 0 findings. Unused EXPORTS and TYPES are NOT in the gate (see Questions: 297 exports, 796 types, mostly barrel re-exports and `*Props` types).
- `ci` time: before about 140 s (not measured on the old script; derived), after 180 s. Added steps measured alone: `arch` 4 s, `arch:baselines` 30 s, `dup` 3 s, `unused` 3 s.

Stale rows: `build/check-arch-baselines.mjs` (dependency-cruiser) and `arch_baseline.py check --strict` (ESLint) fail on a baseline row that no longer occurs, so `ci` fails; the fix is to delete the printed row. `npm run arch` fails on a new violation (`--ignore-known`).

Owners of the remaining rows (the master writes the followups rows)
- Rule 6, 50 rows: F35 (module client actions in `lib/` import `api/`, `platform/`, `components/ui`, `legacy/os`).
- OSLink: F36 (`components/ui/os/OSLink.tsx`, FU-OSLink-navigation, ESLint row).
- CacheControl: F37 (`legacy/os/cache/*CacheControl` imported by `pages/TermsAndPoliciesMenu`, `containers/FilterSheet`, `components/filter/FilterSheet`, `components/auth/PinUnlockContent`; rule 9, 4 rows).
- New follow-up rows:
  - N1 rule 4, 36 depcruise rows and 72 ESLint rows (`components/` imports `platform/` session, navigation, feedback, device, flags, storage, log; `api/note`; `containers/NoteListActions`). Owner now P7 in the CSV; the ESLint row `components/ui/os/OSPopup/usePopupWidget.ts` is `pre-existing`.
  - N2 rule 5, 6 rows (`components/ui` imports `platform/device`, `log`, `navigation`, `session`, and `mocks/contract.ts`).
  - N3 rule 8, 20 rows (`platform/` imports `components/ui` (15), `components/auth|layout|version`, `containers/NoteListActions`, `app/routes.generated.ts`).
  - N4 rule 9 leftovers, 26 rows: `legacy/os/exceptions.ts` (pages, containers, components, 20 rows), `os-exceptions.ts` (lib/*/actions.ts and EntityDetailsActions, 4 rows), `bodyTheme.ts` (OrbitLayout, LegacyLayout, 2 rows).
  - N5 knip: 297 unused exports and 796 unused exported types, then add `exports,types` to `npm run unused`. Plus 2 files kept by the ignore list: `.storybook/withFlags.ts` (a story decorator, no story uses it) and `src/components/ui/DropdownSearch/index.ts` (barrel with no importer).

## Files changed
app/.dependency-cruiser.cjs
app/.dependency-cruiser-known-violations.json (new)
app/build/check-arch-baselines.mjs (new)
app/eslint.config.js
app/.jscpd.json
app/knip.json
app/package.json
migration/tools/refactor/arch_baseline.py
migration/refactor/handoffs/P9-1/dev.md

## Commands run
npm --prefix app run ci (before, original script) -> exit 0, 3975 tests
npx depcruise (new config, --no-ignore-known) -> 142 errors; with --ignore-known -> 0
node build/check-arch-baselines.mjs -> 142 rows, 0 stale
python3 migration/tools/refactor/arch_baseline.py check --strict -> 72 rows, 0 new, 0 gone; arch_baseline_selfcheck.py -> ok
npx eslint . -> 0 errors, 73 warnings (all in baseline files)
npx jscpd -> 35 clones, 0.51 percent, exit 0; with --threshold 0.1 -> exit 1
npm run unused -> exit 0
npm --prefix app run ci (after) -> exit 0, 180 s, 3975 tests passed
prettier --check . -> clean

## Deviations from the brief
- knip gate covers files, dependencies, unlisted, unresolved, binaries and duplicates only, not exports/types (1093 findings; cleaning them is a large change, outside "fix the last warnings"). Needs the master or user to accept (Question 1).
- `python3` is called from `npm run ci` (`arch:baselines`); knip config has `ignoreBinaries: ["python3"]`.
- The ESLint rule is `error` with a `warn` override for the files of the baseline CSV (ESLint cannot ignore known rows); new rows in a baseline file are caught by `arch_baseline.py check`.
- knip.json: removed redundant entries and ignores that knip hinted (`src/main.tsx`, `src/test/setup.ts`, `src/mocks/**`, `src/api/schema.d.ts`, `jscpd` in ignoreDependencies); added 2 file ignores.
- `public/` untouched. Rows in `docs/refactor/` (CHANGELOG, plan docs) not edited: the documenter does it.
- Master: `.dependency-cruiser-known-violations.json` must be applied with the diff; if P8-2 moves files, regenerate and re-check with `node build/check-arch-baselines.mjs`.

## Questions for the user
1. Accept that the knip gate leaves out unused exports and types (297 and 796, follow-up N5)? Alternative: a change step that removes or un-exports them first.

## Resume (W41)
Option (b) done: unused exports and types are in the knip gate with a frozen, shrink-only baseline.
- `app/build/check-unused-exports.mjs` runs `knip --include exports,types --reporter json`, builds rows `file | export|type | name` (no line numbers, no count), sorts them and compares with `app/.knip-known-unused.json`. A new unused export/type fails (`NEW`), a stale row fails (`STALE`). `--write` creates the first baseline.
- `npm run unused` = the old knip check, then this script (so `ci` runs it).
- Baseline rows: 1130 (was 297 exports + 796 types + a few counted by the json; 1132 found, 2 removed by the ignore list).
- Ignore list (`ignoreIssues` in `app/knip.json`, exports and types): `src/api/schema.d.ts`, `src/app/*.generated.ts`, and the legacy/os maps `clientVarNames.ts`, `flagNames.ts`, `reviewMarkers.ts`.
- Stability: two knip runs give a different key order but the same 1132 rows; the script sorts, so the result is stable.
- Proof: `npm --prefix app run ci` exit 0; a temporary `export const tempUnusedProbe` in `src/platform/device/device.ts` made the script print `NEW ...` and exit 1 (removed; `git status` of `src/` is clean).
- Files added/changed: `app/build/check-unused-exports.mjs` (new), `app/.knip-known-unused.json` (new), `app/knip.json`, `app/package.json`.
- Follow-up N5 now means: shrink `.knip-known-unused.json` (remove or un-export the rows); question 1 above is answered.
