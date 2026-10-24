## Result
status: pass
summary: knip found no unused file in group G6 (7 unused files in the app, all tooling or P7 shared/osui and LegacyShared; none in G6). jscpd found 2 small clones in G6; both recorded, none merged. No file deleted.

## Prune report
- knip (whole app): 7 unused files: `.storybook/withFlags.ts`, `shared/Connect2_LegacyShared/MultiResolutionImageLoader/index.ts`, 5 `shared/osui/*/index.ts`. None in G6 folders; left (P7 shared blocks). Unused exports are barrel re-exports; not in the step.
- jscpd (min 8 lines, 70 tokens, tests and stories excluded) on the 7 G6 pages, components/{bookmark,note,share}, api/{bookmark,note,share}: 142 files, 2 clones, 0.17% lines. Left, recorded only:
  1. `QRCodeGenerate/hooks/generateQrCodeState.ts` 104-114 and `ViewDocuments/hooks/viewDocumentsState.ts` 74-84 (10 lines).
  2. `QRCodeGenerate/inputs.ts` 22-31 and `ViewDocuments/inputs.ts` 21-30 (9 lines).
  A merge is a page-to-page import (forbidden) or a new shared module; too small, candidate for P7. The third copy of `getContactHelpdeskSubject_Event` (QRCodeGenerate) noted in G5 stays.
- Guard: `arch_baseline.py check` -> 69 warnings, 69 baseline rows, 0 new.

## Files changed
migration/refactor/handoffs/P6-G6-C/dev.md

## Commands run
npx knip -> 7 unused files, 0 in G6
npx jscpd (G6 folders) -> 2 clones, 142 files, 0.17%
python3 migration/tools/refactor/arch_baseline.py check -> 0 new
(typecheck/vitest/eslint not run: no code changed)

## Deviations from the brief
none

## Questions for the user
none
