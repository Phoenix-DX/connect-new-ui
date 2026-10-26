## Result
status: pass
summary: All gates pass. ci exit 0; parity visual --all --ref both: 64/64 clean for outsystems and self; bundle below baseline; e2e:pwa and build-storybook exit 0. Diff review has no finding.

## Files changed
migration/refactor/handoffs/P8-1/test.md (added)
app/docs/refactor/reports/P8-1.md (written by the parity tool)

## Commands run
- dev server check: http://localhost:5174/UBTConnect/HomeFeed → 200; vite cwd = /Users/khaitruong/Projects/connect-new/app
- `npm --prefix app run ci` → exit 0 (no vitest timeout)
- `npx eslint <7 changed TS files>` → exit 0, no boundary or cycle warning
- `python3 migration/tools/refactor/arch_baseline.py check` → exit 0: 72 warnings, 72 baseline rows, 0 new, 0 gone
- `python3 migration/tools/refactor_parity.py --level visual --all --ref both --app http://localhost:5174 --report app/docs/refactor/reports/P8-1.md` → PASS: outsystems 64/64 clean, self 64/64 clean, 0 differences (4.2 min)
- `node app/build/bundle-report.mjs` → HomeFeed 244.87 kB gzip (limit 248.22), Login 184.92 kB (limit 193.84)
- `npm --prefix app run e2e:pwa` → exit 0, 9/9 tests
- `npm --prefix app run build-storybook` → exit 0

## Diff review
1. openapi.yaml, mocks fixtures, public/UBTConnect/css: no change. Pass.
2. No test file deleted; StylesheetHost and barcode tests updated, tokens.test.ts added. Pass.
3. Scope: only styles, StylesheetHost, barcode CSS, main.tsx, Storybook preview and the css_sets.py / tokens generator tools (plus master state files). Pass.
4. @origin: no new file ports a screen or block. Pass (n/a).
5. n/a (change step).
6. Behavior: the only change is the cascade layering, as the step asks. The layer choices for review.css (app) and the barcode CSS (legacy) are explained in dev.md. Note for the master: a future CSP needs `style-src data:` (from dev.md). Pass.
7. No secret, password, PIN or email in the diff. Pass.

## Deviations from the brief
none

## Questions for the user
none
