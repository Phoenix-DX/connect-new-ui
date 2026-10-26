# Test report · F33

Status: pass

## Failure
- `npm --prefix app run ci` exits 1 at `format:check` (prettier): `app/src/components/ui/NetworkWarning/README.md`
  is not formatted (the long table row and the long "Inputs" line the step added). `ci` stops there; the rest was run by hand.

## Commands run
- `npm --prefix app run ci`: exit 1 (format:check, README above). gen:api, typecheck, lint (0 errors, 73 warnings) passed before it.
- `npm run test` (by hand): 637 files, 3928 tests pass.
- `npx eslint` on the changed files: no new warning.
- `arch_baseline.py check`: exit 0; 72 warnings, 72 baseline rows, 0 new, 0 gone.
- `refactor_parity.py --level visual --all --ref both --app http://localhost:5174`: PASS; outsystems 64/64 clean, self 64/64 clean. Report: `parity.md`.
- `npm --prefix app run build` + `bundle-report.mjs`: HomeFeed 244.65 kB gzip (baseline 236.40, limit 248.2), Login 184.70 (baseline 184.61, limit 193.8). Pass.
- `npx jscpd --config .jscpd.json` (P7-4 command): 35 clones (P7-4: 36); no NetworkWarning clone. Pass.
- Server check: 200 on /UBTConnect/HomeFeed; vite cwd is `/Users/khaitruong/Projects/connect-new/app`.

## Diff review
1. openapi, mocks, css: no change. Pass.
2. No test file deleted. Pass.
3. Scope: 6 files, all NetworkWarning-related (plus ledger, master's). Pass.
4. `@origin` tag kept on the ui file. Pass.
5. n/a (change step).
6. Behavior: only the Animate id (`<id without $>-$b1`) on the LDM routes, as approved; MyBookmarks DOM unchanged (same id rule). The visual parity shows no other difference. Pass.
7. No secret in the diff. Pass.

## Fix needed
Run prettier on `app/src/components/ui/NetworkWarning/README.md`, then `npm --prefix app run ci` again.

## Re-test after loop 1

- `npm --prefix app run ci` (Node 24): exit code 0 (format:check, lint, typecheck, tests, build all pass).
- `git status` / `git diff`: the changed code files are the same six as in the first run (NetworkWarning.tsx, its test, MyBookmarksView.tsx, LdmEventEmailView.test.tsx, MyBookmarks NetworkWarning.tsx deleted); the only loop 1 change is the prettier reformat of `app/src/components/ui/NetworkWarning/README.md`. No code file changed.
- Parity result of the first run stays valid (no code change).

Status: pass
