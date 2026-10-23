## Result
status: pass
summary: Group gate G1 passes. ci exit 0; parity visual --all 64/64 clean on both references; e2e:pwa 9/9; arch baseline check exit 0 (37, no P6-G1 owner). Login first load is 0.88 kB gzip under its limit.

## Files changed
none (report app/docs/refactor/reports/P6-G1-C.md written by the parity tool)

## Commands run
- npm --prefix app run ci -> exit 0 (gen:api, typecheck, lint, format, vitest, build)
- python3 migration/tools/refactor_parity.py --app http://localhost:5174 --level visual --all --ref both --report app/docs/refactor/reports/P6-G1-C.md -> exit 0; outsystems 64/64 clean, self 64/64 clean, 0 differences
- npm --prefix app run e2e:pwa -> exit 0; 1 file, 9 tests passed
- npm --prefix app run build && node app/build/bundle-report.mjs -> HomeFeed 244.80 kB gzip (754.35 raw); Login 192.96 kB gzip (627.44 raw)
  - Baseline +5 percent: HomeFeed 236.40 -> limit 248.22, margin 3.42 kB (1.4 percent). Login 184.61 -> limit 193.84, margin 0.88 kB gzip (0.45 percent; Login is at +4.52 percent). Raw Login limit 633.03, margin 5.59 kB.
- arch_baseline.py check -> exit 0 (37 warnings, 37 rows, 0 new, 0 gone)
- arch_baseline.py list -> P7: 36, pre-existing: 1, total 37; no owner P6-G1-*; W14 guard holds
- npm --prefix app run lint:arch -> 0 errors; warnings all in the baseline (rule 9 legacy-os importers in G1 pages are baselined as P7); no new warning
- Server check: http://localhost:5174 returns 200; cwd of vite is /Users/khaitruong/Projects/connect-new/app
- git status: only ledger.csv, log.md, state.json modified; no tracked code file changed (dev.md claims the same). diffcheck not needed (no move).

## Diff review
1. openapi.yaml, mocks fixtures, public css: unchanged. Pass.
2. Deleted tests: none. Pass.
3. Out of scope changes: none. Pass.
4. @origin tags: no new or rewritten file. Pass (n/a).
5. Move logic: n/a.
6. Behavior change: none (no code change).
7. Secrets: none in the diff.
Dev claim checked: 10 empty untracked dirs under src/screens removed, no git effect. Knip and jscpd results were not re-run (dev report only); the gate does not require them.

## Group G1 review links
- http://localhost:5174/UBTConnect/Login
- http://localhost:5174/UBTConnect/Splash
- http://localhost:5174/UBTConnect/PINRegister
- http://localhost:5174/UBTConnect/PINUnlock
- http://localhost:5174/UBTConnect/PINChange
- http://localhost:5174/UBTConnect/PINBiometricsMenu
- http://localhost:5174/UBTConnect/AcceptPendingPolicies
- http://localhost:5174/UBTConnect/Menu
- http://localhost:5174/UBTConnect/TermsAndPoliciesMenu
- http://localhost:5174/UBTConnect/Profile

## Deviations from the brief
none

## Questions for the user
none
