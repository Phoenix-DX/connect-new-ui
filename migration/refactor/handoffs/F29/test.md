# F29 test

Status: pass

## Commands run
- dev server http://localhost:5174: 200, cwd = /Users/khaitruong/Projects/connect-new/app
- `npm --prefix app run ci`: exit 0 (build ok)
- `npm --prefix app run lint:arch`: 0 errors, 73 warnings (arch warnings, none from changed files; changed files are deletions plus README/package files)
- `arch_baseline.py check`: exit 0, 72 warnings, 72 baseline rows, 0 new, 0 gone
- `refactor_parity.py --level visual --all --ref both`: outsystems 64/64 clean, self 64/64 clean, PASS (parity.md in this folder)
- build + `bundle-report.mjs`: HomeFeed 244.69 kB gzip (751.34 raw), Login 184.71 gzip (601.35 raw). Baseline 236.40 / 184.61; limit +5% = 248.22 / 193.84. Within limit.
- `npx knip`: no "Unused dependencies"; no finding for nouislider, wnumb, vendor.d.ts, Columns4, SwipeEvents, Tooltip folders. Unused files (2) are unrelated (withFlags.ts, DropdownSearch/index.ts).
- grep for imports of the 4 folders, nouislider, wnumb, vendor.d in app/src, app/.storybook, app/e2e, migration/tools: no import. Only text hits (SwipeEvents event names in MessageList, a BottomSheet comment) and `RangeSlider*` types in components/ui/lib.

## Diff review
1. openapi.yaml, mocks, public css: no change. Pass.
2. Deleted tests (Columns4, RangeSlider, SwipeEvents, Tooltip) belong to the deleted components. Pass.
3. Scope: deletions of the 4 folders, vendor.d.ts, package.json/lock (only nouislider and wnumb removed), ui/README.md. Pass.
4. No new files: n/a.
5. Move: n/a (delete step; no logic change).
6. No behavior change: parity DOM identical, 64/64 both refs. Pass.
7. No secrets in the diff. Pass.

## Notes
- knip still lists the unused type `RangeSliderOptionalConfigs` (components/ui/lib/structures.ts:88); it is a type left in the data structures file, not the deleted pattern. Not in the F29 scope, candidate for later cleanup.
- `migration/refactor/followups.md` in the working tree has edits to rows F22, F25, F28 (not F29), and the ledger has 4 added lines. Both predate or are outside the developer's list; documenter should confirm they belong to the commit.

## Re-test after addendum 2

Status: pass (the status line at the top stays `pass`; the note about `RangeSliderOptionalConfigs` above is now resolved)

Gate line: ci 0 | lint:arch 0 errors, 73 warnings | arch_baseline 72 warnings, 72 rows, 0 new, 0 gone | parity visual --all --ref both: outsystems 64/64, self 64/64, PASS | bundle HomeFeed 244.69 kB gzip (limit 248.22), Login 184.71 (limit 193.84) | knip clean for F29 names.

- dev server http://localhost:5174: 200, cwd = /Users/khaitruong/Projects/connect-new/app.
- `git diff` of components/ui/lib: only the removal of `Orientation`, `Trigger`, `Position` (staticEntities.ts) and `RangeSliderOptionalConfigs` (structures.ts) plus two header comments. 2 insertions, 31 deletions. No other change.
- knip: no finding for `Orientation`, `Trigger`, `Position`, `RangeSliderOptionalConfigs`, nouislider, wnumb or vendor.d.ts. The words "Trigger" in knip output are other names (Dialog `ActionConfirmationTrigger`, `DialogTrigger(s)`), unrelated. No "Unused dependencies".
- Diff review items 1 to 7: unchanged, pass. The working tree now also shows CHANGELOG.md and move-map.csv edits (documenter scope).
