## Result

status: pass
summary: Ran the full gate and the measurements, wrote `app/docs/refactor/reports/final.md` (metrics table with baseline, target, result and evidence; phases; work not done; advisor decisions W34-W43). Two targets are not met beyond the frozen ones: callAction outside api/ (6) and getClientVar outside platform/ (22), and total JS+CSS is +4.1 percent. No app code changed.

## Files changed

app/docs/refactor/reports/final.md (new)
app/docs/refactor/reports/P9-4.md (new, parity report)
migration/tools/refactor/measure-final.mjs (new; measure.mjs fails on the deleted shared/ and screens/ folders)

## Commands run

npm --prefix app run ci → exit 0; 640 test files, 3,975 tests
node app/build/bundle-report.mjs → HomeFeed 244.87 kB gzip, Login 184.92 kB gzip
total of dist/assets → JS 1,011.69 kB gzip (212 files) + CSS 2.54 kB (1 file) = 1,014.23 kB; baseline 974.55
node migration/tools/refactor/measure.mjs → fails (ENOENT app/src/shared); tool gap, replaced by measure-final.mjs
node migration/tools/refactor/measure-final.mjs → callAction outside api/ 6; memoryCache 0; getClientVar outside platform/ 22; 19 code files over 400 lines (without mock data)
npx jscpd → 35 clones, 0.51 percent
depcruise → 0 cycles; 142 known rows (rule 9: 30, rule 6: 50, rule 4: 36, rule 8: 20, rule 5: 6), 0 new
arch_baseline.py check --strict → 72 rows, 0 new; eslint . → 0 errors, 73 warnings
node app/build/check-flags.mjs → readers outside pages/hooks/containers 4 = 1 + 3 owned
python3 migration/tools/refactor_parity.py --level strict --all --ref both --app http://localhost:5174 → PASS, 64/64 both references, 4.3 min (dev server cwd is this repo's app/)
npm --prefix app run e2e:pwa → 9/9
npx vitest run --coverage (baseline command) → statements 89.51 percent (baseline 49.22)
npm audit → 0 in production, 2 in dev tools (1 low, 1 moderate)
prettier on final.md and P9-4.md → formatted

## Deviations from the brief

- Used a new script `measure-final.mjs` because `measure.mjs` cannot run on the new tree. `inventory.csv`, `routes.csv` and `calls-by-domain.md` are not regenerated.
- The master note says "33 screens without parity states"; the parity report shows 14 routes without states (50 of 64 checked). The report uses 14.
- Did not run `lint:arch` as a gate beyond the counts above (0 errors, 73 ESLint warnings are the frozen baseline).

## Questions for the user

Decisions the report lists as open (no follow-up existed): N-A two callAction files (ShareSheet api, platform/session/userInfo); N-B 22 getClientVar users outside platform (move to typed settings or accept); N-C 19 files over 400 lines; N-D total JS+CSS +4.1 percent (accept or run a size step); N-E add AcceptPendingPolicies and EmailContact to the manual review list (F27).
