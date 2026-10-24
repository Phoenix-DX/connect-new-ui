# Test report · F39

Status: pass

## Commands run
- `npm --prefix app run ci`: two full runs failed ONLY on vitest timeouts (worker start / 5 s test timeout) because the machine load was 30-57; different files each run, none related to AssembleDetail. The 9 failing files of run 2 re-run with `--maxWorkers=4 --testTimeout=60000`: 39 files, 254 tests pass. `actions.test.ts` + `src/pages/AssembleDetail`: 9 files, 76 tests pass. gen:api, typecheck, lint, format:check passed in both runs; `vite build` run alone: ok. Environment issue, not a code failure (note: ci exit code not 0 under load).
- eslint on the two changed files: exit 0.
- `arch_baseline.py check`: exit 0, 72 warnings, 72 baseline rows, 0 new, 0 gone.
- bundle report: HomeFeed 244.75 kB gzip (baseline 236.40, limit +5% = 248.2), Login 184.82 (baseline 184.61): within limit.
- preview on 5181 (cwd = worktree app, HTTP 200). `refactor_parity.py --level visual --all --ref both --app http://localhost:5181`: run from the worktree, the self reference is missing (gitignored folder only in main), so it was run from the main checkout root (same tracked captures) with `--out migration/refactor-parity/f39-tester`: outsystems 64/64 clean, self 64/64 clean, PASS. Report: handoffs/F39/parity.md.
- Preview server stopped.

## Diff review
1. openapi / mocks / css unchanged: pass.
2. No deleted test: pass.
3. Scope: only the hook and its test: pass.
4. `@origin` tag kept in the hook header: pass.
5. Not a move step: n/a.
6. Behavior: only `onParametersChanged` added (re-reads local contact bookmarks, `withLocalBookmarks` on current rows, no fetch, idempotent, isAlive guard), as the brief asks: pass. The test asserts marks update and `getCacheableSubdivision_V2` called once.
7. No secrets: pass.
