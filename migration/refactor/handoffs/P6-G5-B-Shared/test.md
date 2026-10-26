## Result
status: pass
summary: ci exit 0; parity strict --all 64 routes, 0 differences (both refs); arch baseline 75 rows, 0 new, 0 gone; bundle HomeFeed 244.41 / Login 184.42 kB gzip (limits 248.22 / 193.84). diffcheck --move fails only on the glob path line, judged a path fix forced by the move (allowed).

## Files changed
none (test.md only)

## Commands run
curl 5174/UBTConnect/HomeFeed -> 200; vite cwd = <root>/app
npm --prefix app run ci -> exit 0 (no flake)
arch_baseline.py check -> 75 warnings, 75 rows, 0 new, 0 gone. The 8 new rows (6 owner P6-G5-B-AssembleDetail, 2 P7) each have an owner.
refactor_parity.py --level strict --all --ref both --app http://localhost:5174 --report app/docs/refactor/reports/P6-G5-B-Shared.md -> 64 routes, 0 differences (outsystems 64/64, self 64/64). Note: an earlier visual --changed run also passed (19 routes, 0 differences).
bundle-report.mjs -> HomeFeed 244.41, Login 184.42 gzip (under limits)
rf.py diffcheck --move -> renames 163, origin tags 25; other files: arch-baseline.csv (+8 rows, belongs), migration/metrics/ledger.csv (master bookkeeping); NOT A MOVE only in AssembleSummarySkeleton.test.tsx; exit FAIL

## Review
1. openapi, mocks, css: no change. ok
2. Deleted tests: none without a rename. ok
3. Scope: only G5 shared rows + importers + baseline. ok
4. @origin: 25 tags present. ok
5. Move, no logic change: the only non-move line is the import.meta.glob path in AssembleSummarySkeleton.test.tsx (one more ../ and shared/Connect2_LegacyShared/... to the still-shared NC_Result_Item__Card captures; prettier wrapped it). This is a path fix forced by the move: allowed.
6. n/a (move step)
7. No secrets (the only grep hit is the UI label "Passcode").

## Deviations from the brief
none (strict --all rerun after the master correction)

## Questions for the user
none
