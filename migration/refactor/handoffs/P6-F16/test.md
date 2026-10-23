## Result
status: pass
summary: All gates pass on the applied tree (on top of 2d7b9d4f). HomeFeed first load 243.05 kB gzip (baseline 246.02, -2.97), Login 184.02 kB. Parity strict --all: 64/64 clean on both references, call check included.

## Files changed
migration/refactor/handoffs/P6-F16/test.md
app/docs/refactor/reports/P6-F16.md (written by the parity tool)

## Commands run
curl http://localhost:5174/UBTConnect/HomeFeed → 200; vite cwd = /Users/khaitruong/Projects/connect-new/app
npm --prefix app run ci → exit 0
node app/build/bundle-report.mjs → HomeFeed 243.05 kB gzip (39 chunks), Login 184.02 kB (12 chunks); both below the baseline 246.02 / 187.0x
python3 migration/tools/refactor_parity.py --level strict --all --ref both --app http://localhost:5174 --report app/docs/refactor/reports/P6-F16.md → PASS; outsystems 64/64 clean, self 64/64 clean (call check is part of strict); 4.3 min
npm --prefix app run e2e:pwa → exit 0; 1 file, 9 tests passed
VITE_USE_MOCKS=false vite build (outDir in scratchpad) → exit 0; no msw/mocks/setupWorker text in assets; build/mockFreeBuild.test.ts 5 tests passed
npx eslint on the changed code files → exit 0, no warning
python3 migration/tools/refactor/arch_baseline.py check → exit 0; 49 warnings, 49 baseline rows, 0 new, 0 gone

## Diff review
1. No change in openapi.yaml, fixtures or public css: pass. mocks/scenario.ts and scenarioParams.ts are switch code, not fixtures.
2. No deleted test: pass.
3. Scope: pass (7 code files, all named in the brief task).
4. @origin: not needed (no OutSystems screen or block ported).
5. n/a (change step).
6. Behavior: pass. Code moved without change; scenario.ts and mapper/repository re-export. main.tsx still loads MSW by dynamic import of ./mocks/browser or ./mocks/inProcess and awaits it before createRoot (existing code, unchanged). The app-start call in startup.ts stays a static import, no dynamic import added. One cosmetic difference: unreadMessages.ts uses the literal 'Connect2_LegacyShared' instead of the LEGACY_SHARED constant.
7. No secret, PIN or email in the diff: pass.

## Deviations from the brief
none (the margin target needs HomeFeed-Page +1.11 kB: margin to the limit is now about 5.2 kB before it, about 4.1 kB after).

## Questions for the user
none
