# Test report: P1-fix

Status: pass

## Commands run

- Server check: HomeFeed on 5174 returned 200; cwd of the server is /Users/khaitruong/Projects/connect-new/app.
- `npm --prefix app run ci`: exit 0 (build ok).
- `python3 migration/tools/refactor_parity.py --level strict --all --ref both --app http://localhost:5174 --report app/docs/refactor/reports/P1-fix.md`: outsystems 64/64 clean, self 64/64 clean, PASS.
- `node --test .../origin_normalize.test.cjs`: 3 tests, 3 pass.

## Diff review

1. openapi.yaml, fixtures, CSS, migration/refactor-reference/: unchanged (git status shows none).
2. No deleted test file.
3. Scope: handlers.ts, handlers.test.ts, parity_check.cjs, origin_normalize.cjs(+test), tools/README.md, ledger.csv, handoff. All in the brief.
4. No screen ported; no @origin needed.
5. Handler order: 3b25ddd had one glob (screens, shell, shared) in path order = screens, shared, shell. HEAD uses collectHandlers(screens, shared, platform): same precedence. Pass.
6. Order test: the second test asserts that every platform/bootstrap handler index is after every screens/shared handler in the real `handlers` export. Platform first would make it fail (reasoned, not mutated, because I may not edit files). The first test only covers collectHandlers.
7. Origin normalization: applied only when selfRef is set (outsystems runs unchanged). It replaces only the origin regex (`http(s)://localhost|127.0.0.1[:port]`); path and query stay in the string and are still compared (test 3 covers a different path).
8. No secrets in the diff.

## Notes

- Lint warning rule 4 in usePopupWidget.ts existed before.
- Report: app/docs/refactor/reports/P1-fix.md.
