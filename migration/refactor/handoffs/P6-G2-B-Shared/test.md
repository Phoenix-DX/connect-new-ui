## Result
status: pass
summary: Pure move of 9 shared blocks (62 files) holds. diffcheck --move fails only on the declared W17 lines in handlers.ts/handlers.test.ts; handler set and count are unchanged (155); ci, parity strict --all (64/64 on both references) and bundle pass.

## Files changed
migration/refactor/handoffs/P6-G2-B-Shared/test.md
(gate tool report) app/docs/refactor/reports/P6-G2-B-Shared.md

## Commands run
curl http://localhost:5174/UBTConnect/HomeFeed -> 200; vite cwd = /Users/khaitruong/Projects/connect-new/app
rf.py diffcheck --move -> FAIL (expected). renames 62, origin tags 9. NOT A MOVE lines (4, all W17): handlers.test.ts "+[" and "+],"; handlers.ts "-export const handlers ... collectHandlers(screens, containers, shared, platform)" and "+... (screens, containers, shared, components, platform)". The added glob line itself is also in handlers.ts. Nothing else. Other files: arch-baseline.csv, ledger.csv, arch_baseline.py (all belong to the step / master).
Handler list (vitest printing method + path, 1633175 via git archive vs now): 155 vs 155, same set. Only difference: ServiceAPISendContactMemberEmail moves from position 125 to 145 (now after the shared handlers, just before UBT_AppManager SynchAppContext). It is a unique path, no wildcard handlers exist (0 "*" paths), so no handler is shadowed.
W15 guard: HEAD baseline put in place, `arch_baseline.py check --move-step P6-G2 --base 1633175` -> 11 ADD lines, 0 new, 37 baseline rows. The 11 ADD lines equal the 11 rows added to arch-baseline.csv (ContactEmailForm x1 owner P6-G2-B-ContactByEmailMember; ContactPopup x2, BaseLayout x4, LegacyLayout x3, MenuIcon x1 owner P7). File restored (git diff vs index empty). `arch_baseline.py check` -> 48 warnings, 48 rows, 0 new, 0 gone, exit 0.
lint:arch -> eslint 49 warnings = 48 baseline + 1 non-boundary warning that existed before (old tree: 38 = 37 + 1). depcruise 210 -> 214: +4 rule-4 (the same moved warnings; ContactEmailForm, ContactPopup x2, MenuIcon) and rule-9 bodyTheme 2 old -> 2 new at moved paths. No warning outside the baseline.
npm run ci -> exit 0 (build ok).
parity strict --all --ref both --app http://localhost:5174 -> outsystems 64/64 clean, self 64/64 clean, PASS (4.2 min).
bundle-report: HomeFeed 244.90 kB gzip (limit 236.40 x 1.05 = 248.22; margin 3.32 kB). Login 193.03 kB gzip (limit 184.61 x 1.05 = 193.84; margin 0.81 kB, 0.4 percent). Both within limit.

## Diff review
1 openapi / mocks fixtures / public css: no change (only mocks/handlers.ts and handlers.test.ts, declared W17). pass
2 deleted tests: none without rename; 8 old shared index.ts deleted and replaced by new index.ts in components/ (shown as A+D). pass
3 scope: only the 9 blocks, their importers (import paths and renamed identifiers), baseline, arch_baseline.py tool. pass
4 @origin: 9 tags added. pass
5 move, no logic change: diffcheck code check passes except W17. pass
6 n/a (move step)
7 secrets: none found in the diff. pass
Note: the old "src/shared" still holds other-phase blocks (expected).

## Deviations from the brief
none (the handlers.ts glob is the accepted W17 change)

## Questions for the user
none
