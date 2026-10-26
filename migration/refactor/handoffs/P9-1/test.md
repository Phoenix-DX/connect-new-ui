## Result
status: pass
summary: Staged diff applied on e2006670. `npm run ci` exits 0 (154 s, 3975 tests). Baselines match, all three negative probes fail the gate as intended, strict parity 64/64 on both references, bundle within 5 percent. No leftover change.

## Files changed
none (this file only)

## Commands run
- `npm --prefix app run ci` → exit 0, 154 s; depcruise baseline 142 rows/0 stale; arch baseline 72/72, 0 new, 0 gone; jscpd 35 clones; knip exports/types 1130 rows, 0 new, 0 stale; 3975 tests passed; vite build ok
- `npm --prefix app run lint:arch` → exit 0
- `python3 migration/tools/refactor/arch_baseline.py check` → exit 0 (72 warnings, 72 rows, 0 new, 0 gone)
- `node app/build/check-arch-baselines.mjs` → 142 rows, 142 violations, 0 stale
- Probe 1: temp `src/lib/zzProbe.ts` importing `@/legacy/os/exceptions` → depcruise reports 2 new errors (nonzero); file removed
- Probe 2: temp `src/components/ui/zzProbe.ts` importing `@/platform/log` → ESLint rule 4 reports error; file removed
- Probe 3: temp `export const tempUnusedProbe` in `src/platform/device/device.ts` → `check-unused-exports.mjs` prints NEW, 1130 baseline vs 1131 found; line removed
- `git status` after probes → no change under `app/src` or `app/public`; only the staged P9-1 files remain (plus an untracked parity report and the P9-2 handoff folder, which are not mine)
- `refactor_parity.py --level strict --changed --ref both --app http://localhost:5174` → 64 routes selected (changes to config files), outsystems 64/64 clean, self 64/64 clean, 0 new differences, PASS (report `app/docs/refactor/reports/P9-1.md`)
- `vite build` + `bundle-report.mjs` → HomeFeed 244.87 kB gzip vs baseline 236.40 (+3.6 percent, limit +5); Login 184.92 vs 184.61 (+0.2 percent)
- Dev server: 200 on /UBTConnect/HomeFeed, cwd is `<root>/app`
- Not run: `rf.py diffcheck --move` (this is a tool step, not a move)

## Diff review
1. openapi.yaml, mocks fixtures, public css: no change. Pass.
2. No test file deleted. Pass.
3. Scope: only app config, two build scripts, two baseline JSON files, `arch_baseline.py` and the handoff files. Nothing in `src/` or `public/`. Pass.
4. No new screen or block file, so no `@origin` tag needed. Pass.
5. Not a move step. n/a.
6. Change step: no behavior change in the app. `--strict` in `arch_baseline.py` is opt-in, and plain `check` still behaves as before. Pass.
7. No secret, password, PIN or account email found in the diff (grep). Pass.

Notes
- The rule-9 reclassification (34 → 30, 4 mock/test-helper rows) is config only, as the master's note says.
- The knip gate covers exports and types through a shrink-only baseline (W41); this answers the developer's question 1.
- Note for the documenter: the developer's time of 180 s differs from my 154 s; both are for the after state.

## Deviations from the brief
none

## Questions for the user
none
