## Result
status: pass
summary: Split the 2 container files into 10 modules, each 344 lines or less. Bodies are copied by a kept script
(`migration/tools/refactor/f59-b-split.ts`, reads HEAD, checks that each code line is copied once, same output on a
second run). `npm --prefix app run ci` passes. The dependency-cruiser baseline grows from 142 to 144 rows (see Deviations).

## Files changed
app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx (570 -> 209, view)
app/src/containers/EntityDetailsActions/useEntityDetailsActions.ts (new, 344)
app/src/containers/EntityDetailsActions/entityDetailsActionsState.ts (new, 88)
app/src/containers/EntityDetailsActions/types.ts (new, 28: the props interface)
app/src/containers/ShareSheet/ShareSheetContainer.tsx (526 -> 161, view)
app/src/containers/ShareSheet/useShareSheet.ts (new, 187)
app/src/containers/ShareSheet/shareSheetState.ts (new, 36)
app/src/containers/ShareSheet/types.ts (new, 29: props interface + ShareSheetParams)
app/src/containers/ShareSheet/components/ShareSheetFirstStep.tsx (new, 119)
app/src/containers/ShareSheet/components/ShareSheetSearchStep.tsx (new, 186)
app/src/containers/ShareSheet/index.ts (re-exports the props type from types.ts)
app/src/containers/ShareSheet/ShareSheetContainer.stories.tsx (import only)
app/.dependency-cruiser-known-violations.json (rows follow the moved legacy imports)
app/.knip-known-unused.json (1 row deleted: EntityDetailsActionsContainerProps is now used)
migration/tools/refactor/f59-b-split.ts (new: the split script)
migration/refactor/handoffs/F59-b/dev.md (new)

## Commands run
node migration/tools/refactor/f59-b-split.ts --dry-run -> exit 0; not copied: imports, headers, the two function signatures, the 4 `&&` lines of the step switch
node migration/tools/refactor/f59-b-split.ts -> exit 0; second run -> byte-identical (shasum)
npm --prefix app run ci -> exit 0 (gen:api, typecheck, lint, arch, arch:baselines, dup, unused, flags, format:check, test, vite build)
arch: 0 new, 144 known; check-arch-baselines 144 rows, 0 stale; arch_baseline.py --strict 72 rows, 0 new; knip 1128 rows (was 1129), 0 new, 0 stale

## Deviations from the brief
- Both big components are one function with state: the split is a hook (`useEntityDetailsActions`, `useShareSheet`) that returns what the
  view needs. The hook bodies are copied lines (same hook order). The view destructures the returned object.
- ShareSheet: the two step branches of the JSX are now sub-views (`components/`). The only text change in copied lines:
  `locals.sharingRecentMemberId` -> prop `sharingRecentMemberId`. `ShareSheetContainerProps` moved to `types.ts`
  (index.ts re-exports it; the stories import it from there).
- Defaults of the ShareSheet props stay in the view; the hook takes the resolved values (`ShareSheetParams`).
  EntityDetailsActions: the hook gets the props and applies the same defaults (copied lines).
- Baseline: dependency-cruiser rows 142 -> 144. The legacy imports (`legacy/os/exceptions`, `legacy/os/os-exceptions`)
  now sit in 3 files (hook, state, view) instead of 1; rows follow the files. The view still imports `raiseToFlowHandler`
  (the `.catch(raiseToFlowHandler)` of the Notes click). Moving that call into the hook would make it +1: ask if wanted.
