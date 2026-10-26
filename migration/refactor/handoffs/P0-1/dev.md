## Result
status: pass
summary: Updated vite, vitest, @vitest/coverage-v8, storybook and @storybook/react-vite to the exact patched versions; npm audit went from 4 vulnerabilities to 0. ci passed, coverage measured (statements 49.22 percent), storybook build passed, baseline.md written. The parity sweep was not run (tester).

## Files changed
app/package.json
app/package-lock.json
app/docs/refactor/baseline.md
migration/refactor/handoffs/P0-1/dev.md

## Commands run
npm --prefix app audit (before) → 4 vulnerabilities (2 moderate, 1 high, 1 critical)
npm install --save-exact --save-dev vitest@4.1.12 ... → npm bug "Cannot read properties of null (reading 'edgesOut')"; worked with --legacy-peer-deps for vitest + coverage-v8; storybook, @storybook/react-vite and vite installed normally
npm ci → exit 0 with the new lock file
npm --prefix app audit (after) → found 0 vulnerabilities
npm --prefix app run ci → exit 0 (324 test files, 1457 tests passed, build ok)
npx vitest run --coverage.enabled ... (flags of Q1) → statements 49.22 percent (10348/21021)
npm --prefix app run build-storybook → completed; storybook-static is git-ignored, git status clean for it

## Deviations from the brief
- Only @storybook/react-vite exists in package.json, so no other @storybook/* package was pinned (npm moved its dependencies to 10.6.3 by itself).
- A first install attempt with a quoted multi-package loop wrote bad values into package.json; I corrected package.json by a node script and restored the lock from git show before the final install. Final package.json diff has only the 5 intended lines.
- The counts of callAction, memoryCache and getClientVar users differ from the plan v2 values (87/19/37 vs 71/27/50); recorded with the method in baseline.md.
- Node is v22.23.3, engines ask for 24 (warning only).

## Questions for the user
none
