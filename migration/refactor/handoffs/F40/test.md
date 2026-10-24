# Test · F40

Status: pass

## Commands run
- npm --prefix app run ci: exit 0; 639 files, 3971 tests passed, no flake; build ok.
- lint:arch: 73 warnings, 0 errors; eslint on the 10 changed files: exit 0.
- arch_baseline.py check: exit 0 (72 warnings, 0 new, 0 gone).
- refactor_parity.py --level visual --all --ref both --app http://localhost:5182 (run from the main checkout, --out migration/refactor-parity/f40-tester): outsystems 64/64 clean, self 64/64 clean, PASS. (A first run from the worktree lacked the self reference: 50 false differences; discarded.)
- bundle-report: HomeFeed 244.74 kB gzip (baseline 236.40, limit 248.2), Login 184.82 (baseline 184.61). Pass.
- Preview server on 5182 served the worktree app; stopped.

## Diff review
1. openapi, mocks, css: no change. Pass.
2. Deleted test: only the hasStarted unit test, replaced by hook tests (dev.md). Pass.
3. Scope: only the 4 hooks, adminLandingState and their tests. Pass.
4. @origin tags unchanged. Pass.
5. n/a (change step).
6. Behavior change is the one asked: restored without data calls again; LDM skips audit when restored. Dev note 1 accepted by master.
7. No secrets. Pass.
