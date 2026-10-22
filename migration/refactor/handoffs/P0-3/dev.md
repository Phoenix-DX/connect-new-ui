## Result
status: pass
summary: Installed dependency-cruiser 17.4.3, jscpd 4.3.0, knip 5.88.1, ts-morph 27.0.2 (exact, dev); wrote the depcruise, jscpd and knip configs, the `@/` alias, and the codemod `migration/tools/refactor/move.ts` (plain Node 24). `npm --prefix app run ci` passes. Dry run on shell to platform lists 110 files and 777 imports in 353 files and changes nothing.

## Files changed
app/package.json (4 devDependencies, scripts `graph` and `arch`)
app/package-lock.json
app/tsconfig.json (paths `@/*`)
app/vite.config.ts (resolve.alias `@`; vitest uses the same config)
app/eslint.config.js (block for `.dependency-cruiser.cjs`)
app/.prettierignore (graph.json)
app/.dependency-cruiser.cjs (new)
app/.jscpd.json (new)
app/knip.json (new)
app/docs/refactor/graph.json (new, 4.5 MB)
app/docs/refactor/reports/P0-3-depcruise-cycles.txt (new)
app/docs/refactor/reports/P0-3-jscpd.txt (new)
app/docs/refactor/reports/P0-3-knip.txt (new)
app/docs/refactor/baseline.md (versions table, braces note)
migration/tools/refactor/move.ts (new)
migration/tools/refactor/package.json (new, `{"type":"module"}` to avoid the Node typeless warning)
migration/refactor/handoffs/P0-3/dev.md

## Commands run
npm install --save-dev --save-exact (4 packages) → ok, no arborist error, no --legacy-peer-deps needed
npm run graph → ok, graph.json written (1886 modules, 7174 dependencies)
npm run arch → exit 1 as expected: 1 error (no-circular: src/shell/cachedUserInfo.ts <-> src/shell/mockUser.ts), 4 warnings (rule 6: lib imports vendor, test setup, shell/testSupport)
npx jscpd src → 63 clones, 1.15 percent of lines (report saved)
npx knip → 19 unused files, 220 unused exports, more in the report (saved; jscpd and ts-morph set in ignoreDependencies since only tools use them)
node migration/tools/refactor/move.ts --from app/src/shell --to app/src/platform --dry-run → 110 files, 777 imports in 353 files, no change in git status
Codemod real run tested in a scratch git repo (folder move, map mode with test companion, vi.mock, ?raw, index import, src/sw stays relative) → correct, typecheck step skipped there
npm --prefix app run ci → exit 0; 324 test files, 1457 tests; build ok

## Deviations from the brief
- Not installed (per Q2, Q4): eslint-plugin-boundaries, eslint-plugin-import-x, tsx. Rule 11 (core no-restricted-imports) is left for P1-1.
- `npm run arch` is not part of `ci`: the existing shell cycle makes it fail; P3-4 fixes cycles.
- Added a `.dependency-cruiser.cjs` block to `eslint.config.js` so `eslint .` can parse the CommonJS file.
- `.jscpd.json` and `knip.json` have first settings (tests, stories, mocks, schema ignored); thresholds come in Phase 9.
- Codemod: only imports that the move changes are rewritten (an unaffected `../` import stays until P1-4 `--alias-only`). `./` imports that stay below the importing folder stay relative. `import.meta.glob` patterns are not rewritten; the tool warns (mocks/fixtures.ts, mocks/handlers.ts, app/screens.ts matter in later moves).
- Advisory for ADR-15: `braces` GHSA-vfj7-8cjw-p6xm (high, dev-only CLIs, no fix). `npm audit` now shows 1 high.

## Questions for the user
none

## Loop 1

F1 fixed (option B). `changed_routes` in `migration/tools/refactor_parity.py` now builds the forward graph from `modules[].dependencies[].resolved` of `app/docs/refactor/graph.json`, takes the closure of each route entry (`src/screens/<R>/index.tsx` or `src/pages/<R>/<R>Page.tsx`) and selects a route when a changed file is in its closure. It runs `npm --prefix app run graph` when graph.json is missing or older than `git log -1 --format=%ct`; the old "graph.json is missing" fallback is gone. Global paths: kept app, platform, api/client, legacy/os, styles, shell, mocks, public, index.html, exemption files; removed `shared`, `lib`, `components` (the closure covers them); added app/package*.json, vite.config.ts, tsconfig* (build config reaches every route). New options `--explain` and `--files <path>...`. README `--changed` row updated. `python3 -m py_compile` passes.

Explain outputs (`--changed --explain --files <path>`):

1. Shared block `app/src/shared/UBTConnect/HouseholdDetails_Block/HouseholdDetails_Block.tsx`:
```
5 of 64 routes selected (1 changed file(s))
HouseholdCarousel / HouseholdDetails / Locality_Details / Profile / SupperMeeting_Carousel: <that file>
```
(5 routes, not 3: Locality_Details and SupperMeeting_Carousel also import the block; this is the real closure.)

2. Screen file `app/src/screens/Profile/api.ts`:
```
1 of 64 routes selected (1 changed file(s))
Profile: app/src/screens/Profile/api.ts
```

3. Shell file `app/src/shell/Foo.tsx`:
```
64 of 64 routes selected (1 changed file(s))
AcceptPendingPolicies: app/src/shell/Foo.tsx (global path)
... (all 64 routes)
```
