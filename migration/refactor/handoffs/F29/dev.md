# F29 dev: delete unused OSUI patterns

Status: pass (with one question, see below). Not committed.

## Evidence (no real user for any of the four)
- Import-line grep over app/src, app/.storybook, app/e2e, migration/tools for `from|import()|require` of a path ending in
  `/Columns4`, `/RangeSlider`, `/SwipeEvents`, `/Tooltip` (also subpaths): zero hits outside the pattern's own folder.
- JSX / identifier grep (`<Tooltip`, `<RangeSlider`, `Columns4`, `SwipeEvents`) in app/src outside the folders: only a
  comment in pages/LDM_MyEvents_V2/components/MyTimeline_V2.tsx (text "SwipeEvents", not an import) and ui/README.md.
- Other hits are unrelated strings: Leaflet tooltip names, CSS files, fixtures, `RangeSlider*` types in
  components/ui/lib/structures.ts and staticEntities.ts (data structures, not imports), docs and CSV/JSON maps.
- Only their own stories/tests referenced them (knip entry via stories). No parity capture plan or route map imports them.

## Files deleted (`git rm -r`)
- app/src/components/ui/Columns4/ (5 files: tsx, index, test, stories, README)
- app/src/components/ui/RangeSlider/ (7 files: + provider.ts, types.ts)
- app/src/components/ui/SwipeEvents/ (5 files)
- app/src/components/ui/Tooltip/ (6 files: + position.ts)
None had `__captures__`.

## Reference removed
- app/src/components/ui/README.md: removed section "Unused patterns"; removed Columns4 and Tooltip from the pattern list; prettier-formatted.
- Not touched (documenter's job): followups.md F29, docs/refactor CSVs/graph.json/CHANGELOG/reports, move-map.decisions.json.

## Commands
- typecheck: pass. lint: 0 errors, 73 warnings (arch warnings). format:check: pass (after prettier on the README).
- vitest full: 637 files, 3926 tests passed. build: pass.
- arch_baseline check: 72 warnings, 72 baseline rows, 0 new, 0 gone (no row to remove).
- knip: new finding "Unused dependencies (2)": `nouislider` and `wnumb` (only RangeSlider used them). Also
  app/src/types/vendor.d.ts (`declare module 'wnumb'`) now serves nothing. I did not touch package.json or vendor.d.ts.

## Addendum: packages and dead type file (coordinator order)
- `npm uninstall nouislider wnumb` (app/): package.json and package-lock.json only (16 lines removed, no other package changed).
- `git rm app/src/types/vendor.d.ts` (only the `wnumb` declaration; no tsconfig include/files entry names it; the folder is now empty).
- Re-run: typecheck pass; lint 0 errors / 73 warnings; format:check pass; vitest 637 files / 3926 tests pass; build pass;
  arch_baseline 72 rows, 0 new, 0 gone.
- knip: "Unused dependencies" finding is gone, no nouislider/wnumb mention. Remaining "Unused files (2)" are
  `.storybook/withFlags.ts` and `src/components/ui/DropdownSearch/index.ts`, not related to F29 files.

## Addendum 2: orphan exports in components/ui/lib
- staticEntities.ts: removed `Orientation` (+ W5-B RangeSlider header), `Trigger`, `Position`; Accordion header now "(Accordion)".
  `AccordionIconType`, `AccordionIconPosition` kept. `GutterSize` and `BreakColumns` kept (importers: ColumnsTwo, legacy/GridGallery).
- structures.ts: removed `RangeSliderOptionalConfigs`; W5-B header now "(DropdownSearch)".
- Checks re-run: typecheck, lint (0 errors), format:check, full vitest, build, arch_baseline (0 new, 0 gone); knip shows none of the four names (see final report numbers).
