## Result
status: pass
summary: Added ESLint `no-restricted-imports` warnings (`^\.\./` for src, plus `@/(api|platform|pages|containers|app)` bans for components/**), the script `lint:arch`, and the count in baseline.md. The dependency-cruiser folder rules were already `warn`, so that file is unchanged. `npm run ci` passes.

## Files changed
app/eslint.config.js
app/package.json
app/docs/refactor/baseline.md

## Commands run
export PATH=node24 && npm --prefix app run ci → exit 0 (lint: 0 errors, 4,460 warnings)
npm run arch → 5 violations: 1 error (existing cycle cachedUserInfo/mockUser, P3-4), 4 warnings (rule 6)
npm run lint:arch → prints the depcruise count, then stops with exit 1 because of the existing cycle error (`arch && eslint .`), so eslint does not run from it
npx eslint . → 4,460 warnings, all no-restricted-imports (rule 11); 0 for the components bans
npx prettier --check eslint.config.js package.json → pass

## Deviations from the brief
- `.dependency-cruiser.cjs` not changed: its rules 3 to 9 were already `warn` (only `no-circular` is `error`, as the plan says). The target folders pages/, containers/, platform/, legacy/os/ do not exist yet; the regexes apply when they appear.
- `lint:arch` is written as the brief says. Because `arch` exits 1 on the cycle, `lint:arch` stops before eslint until P3-4 fixes the cycle. Run `npx eslint .` for the ESLint count.
- Baseline "Boundary violations" = 4,464 (4 depcruise + 4,460 ESLint).

## Questions for the user
none
