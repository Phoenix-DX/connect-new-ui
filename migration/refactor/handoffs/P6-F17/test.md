## Result
status: pass
summary: Default path of useFlowState is unchanged (the passive effect only gains an early return when beforePaint is set). ci, lint:arch, arch baseline, parity (64/64 clean on both references) and bundle all pass.

## Files changed
none (the parity tool wrote app/docs/refactor/reports/P6-F17.md)

## Commands run
curl http://localhost:5174/UBTConnect/HomeFeed → 200; vite cwd = /Users/khaitruong/Projects/connect-new/app
npm --prefix app run ci → exit 0 (typecheck, lint, tests, build)
npm --prefix app run lint:arch → exit 0; eslint on the two changed ts files → exit 0
arch_baseline.py check → exit 0: 67 warnings, 67 baseline rows, 0 new, 0 gone
refactor_parity.py --level visual --changed --ref both --app http://localhost:5174 → PASS: outsystems 64/64 clean, self 64/64 clean (all routes), 0 new differences
bundle-report.mjs → HomeFeed 244.13 kB gzip (limit 248.22), Login 184.19 kB (limit 193.84)

## Diff review
1. openapi, mocks, css: not changed. Pass.
2. No test deleted (flowState.test.tsx +206/-2, tests added). Pass.
3. Scope: only flowState.ts, its test, page-template.md. Pass.
4. @origin: no new screen/block file. n/a.
6. Behavior: default path unchanged. The new layout effect returns at once when the mode is off. The passive effect (OnReady, its own `alive`, cleanup, StrictMode double run, restored via restoredRef) is the same, plus `if (beforePaintRef.current) return undefined`. No page sets the option. Pass.
   W23: with beforePaint on, isAlive reads readyAlive, true until the unmount; the StrictMode re-run only sets it true again; the rejection goes through raiseToFlowHandler also after the unmount. The test "an unmount while OnReady is pending stops the state writes, not the flow" runs in both modes. Pass.
7. No secrets in the diff. Pass.

## Deviations from the brief
none

## Questions for the user
none
