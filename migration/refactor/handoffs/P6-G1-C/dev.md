## Result
status: pass
summary: Ran knip and jscpd on group G1 (10 pages, components/, platform/session, platform/feedback). knip reports no unused file in G1 scope; jscpd found 0 clones. The only removal is 10 empty, untracked directories src/screens/<G1 route>. W14 guard holds. No tracked file changed.

## Prune report
knip 5.88.1 (whole app, `npx knip`): 10 unused files, 291 unused exports, 719 unused exported types.
- Unused files: `.storybook/withFlags.ts`, `src/screens/ContactUsMenu/api.ts`, 7 index/types files in `src/shared/` (LegacyShared, OrbitMobile_MUI, osui). None is in a G1 folder. They belong to later groups (G2, G5, shared/) or to tooling, so none was deleted.
- Unused exports in G1 scope: only `*Props` / `*State` / `*Flows` interfaces and a few barrel re-exports (`platform/feedback/dialogs/index.ts`, `components/household/index.ts`, `components/ui/os/OSValidation/index.ts`, `platform/feedback/networkDetection.ts`, `platform/session/inactivity.ts`). These are export keywords, not files, and the plan says "delete the unused files". Left as is. The household and OSValidation barrels belong to P2 or later groups.
- jscpd 4.3.0 on the 10 G1 `pages/` folders, `components/`, `platform/session`, `platform/feedback` (min 8 lines, 70 tokens, tests and stories excluded): 0 clones in 210 files.
- Deleted: 10 empty directories `app/src/screens/{AcceptPendingPolicies,Login,Menu,PINBiometricsMenu,PINChange,PINRegister,PINUnlock,Profile,Splash,TermsAndPoliciesMenu}`. They held no files (git does not track them) and were left by the B steps. No git diff results.
- W14 guard: `arch_baseline.py list` gives P7: 36, pre-existing: 1, total 37. No P6-G1 owner. `arch_baseline.py check` exits 0 (37 warnings, 37 rows, 0 new, 0 gone).

## Files changed
none tracked. Removed 10 empty untracked directories under app/src/screens/ (listed above).

## Commands run
npx knip → exit non-zero (reports found); 10 unused files, none in G1
npx jscpd (G1 folders) → 0 clones, 210 files
python3 migration/tools/refactor/arch_baseline.py list → P7 36, pre-existing 1
python3 migration/tools/refactor/arch_baseline.py check → exit 0
typecheck, vitest, eslint not run: no code file changed.

## Deviations from the brief
none. The unused-export interfaces were not pruned, because the step prunes files, not export keywords.

## Questions for the user
none
