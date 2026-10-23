## Result
status: pass
summary: Ran knip and jscpd on group G2. knip reports no unused file in G2 scope; jscpd found 1 clone (11 lines, test mocks). Nothing deleted: no G2 leftovers exist. Type_ContactSubject already has one definition. W14 guard holds. No file changed.

## Prune report
knip (whole app): 9 unused files, all outside G2: `.storybook/withFlags.ts` and 8 index/types files in `src/shared/` (LegacyShared, OrbitMobile_MUI, osui). They belong to later groups or tooling, so none was deleted. `src/screens/ContactUsMenu/api.ts` (listed after G1) is gone already.
- Old dirs: no `src/screens/<G2 route>` directory exists. No empty directory under `pages/<G2 route>`, `components/contact`, `components/layout`.
- jscpd 4.3.0 on 9 G2 `pages/`, `components/contact`, `components/layout` (min 8 lines, 70 tokens, tests and stories excluded): 125 files, 1 clone: `pages/ContactByEmailOrbitHelpdesk/mocks.ts` 13-24 and `pages/ContactByEmailOrbitHost/mocks.ts` 15-26 (11 lines). Left: merging needs a shared module or a page-to-page import (rule 3), and mocks are fixture-like data. Recorded only.
- Type_ContactSubject: one definition only, `pages/ContactUsMenu/staticEntities.ts`, used only by ContactUsMenu. `pages/ContactUsDetails` no longer defines it. Nothing to resolve.
- Guard: `arch_baseline.py list` gives P7: 46, pre-existing: 1, total 47. No P6-G2 owner. `arch_baseline.py check` exits 0 (47 warnings, 47 rows, 0 new, 0 gone).

## Files changed
none

## Commands run
npx knip → reports found; 9 unused files, none in G2
npx jscpd (G2 folders) → 1 clone, 125 files
python3 migration/tools/refactor/arch_baseline.py list → P7 46, pre-existing 1
python3 migration/tools/refactor/arch_baseline.py check → exit 0
typecheck, vitest, eslint not run: no code file changed.

## Deviations from the brief
none

## Questions for the user
none
