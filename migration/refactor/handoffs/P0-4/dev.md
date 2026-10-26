## Result
status: pass
summary: Added `migration/tools/refactor/measure.mjs` (own TypeScript-AST import scan, no package added), `app/build/bundle-report.mjs`, and the outputs `inventory.csv` (265 rows: 237 shared blocks + 28 ScreenBlock files), `routes.csv` (64 routes) and `calls-by-domain.md`. Prefetch in worktree, not committed.

## Files changed
migration/tools/refactor/measure.mjs (new)
app/build/bundle-report.mjs (new)
app/docs/refactor/inventory.csv (new)
app/docs/refactor/routes.csv (new)
app/docs/refactor/calls-by-domain.md (new)
migration/refactor/handoffs/P0-4/dev.md (new)

## Commands run
npm --prefix app run build → exit 0 (needed for dist)
node migration/tools/refactor/measure.mjs → 265 rows (237 + 28), 64 routes, 70 files call callAction
node app/build/bundle-report.mjs → first load gzip: HomeFeed 236.40 kB (730.63 raw), Login 184.61 kB (602.89 raw)
npm --prefix app run typecheck, format:check, npx eslint app/build/bundle-report.mjs → pass
Note: after each run of measure.mjs, run `npx prettier --write app/docs/refactor/calls-by-domain.md` (the CSV needs nothing).

## Deviations from the brief
- baseline.md is not in the worktree (uncommitted in the main tree); counts checked against the main-tree copy: 237 shared blocks, 28 screen blocks match plan. callAction files: 70 by AST scan (plan 71, baseline word search 87; the word search also hits types, comments, mocks and lib/api.ts). The 70 vs 71 gap is not explained; the P0-4 tester can decide whether the 71st (probably `lib/api.ts` itself) matters.
- Extra output `routes.csv` (per-route chunk size, direct/transitive blocks, calls per state from calls.json `phase`). The brief step 2 asks for it, but names no file.
- "Routes that import it" gives two columns: `routes_direct` (a file of the screen imports the block) and `routes_transitive` (through other imports). Test and story files are excluded from the graph. Type-only imports are skipped.
- Domain of a call comes from keywords in module/action name (order in the script), not manual review; a file with calls in several domains appears under each. Review the "app" and "event" groups before use in the move map.
- Block state columns (view state, memory cache, client vars, flags) look at the block's own files only, not its dependencies.

## Questions for the user
none
