# Refactor changelog

## P0-1 - refactor(P0-1): record the baseline

- Architecture: no change. The step records the baseline in `app/docs/refactor/baseline.md`.
- Security packages pinned: vite 7.3.7, vitest and @vitest/coverage-v8 4.1.12, storybook and @storybook/react-vite 10.6.3.
- Baseline: parity 64 routes with 0 differences, statements 49.22 percent, `npm audit` 0.

## P0-2 - refactor(P0-2): add refactor_parity.py and the self-parity reference

- Architecture: no change. New tool `migration/tools/refactor_parity.py` (levels strict and visual, `--changed`, `--all`).
- Self-parity reference recorded in `migration/refactor-reference/` (git-ignored). Strict run: 64/0 against both references.
- New default-off flags in `parity_check.cjs`; exemptions in `migration/refactor-exemptions.json` (empty).

## P0-3 - refactor(P0-3): add the architecture tools and the move codemod

- Architecture: no folder change. Added dev tools: dependency-cruiser (`npm run graph`, `npm run arch`), jscpd, knip, ts-morph, and the alias `@/` for `src/`.
- Added the move codemod `migration/tools/refactor/move.ts` (plain Node 24). No import uses `@/` yet.
- First reports are in `app/docs/refactor/reports/P0-3-*.txt`. `npm run arch` reports 1 cycle (`src/shell/cachedUserInfo.ts` and `src/shell/mockUser.ts`).

## P0-4 - refactor(P0-4): add the code inventory

- Architecture: no folder change. New tools `migration/tools/refactor/measure.mjs` and `app/build/bundle-report.mjs`.
- Outputs: `inventory.csv` (265 rows), `routes.csv` (64 routes), `calls-by-domain.md` (70 files call `callAction`).
- First-load gzip: HomeFeed 236.40 kB, Login 184.61 kB; recorded in `baseline.md`.

## P0-5 - refactor(P0-5): add the move map and ADR-15

- Architecture: no folder change. ADR-15 "Target front-end architecture" is accepted; 9 dev packages are allowed (`--adr ADR-15`).
- New: `move-map.csv` (329 rows: 265 blocks and 64 screens, with shape, target and phase) and `duplicates.md` (verdicts per candidate group).
- Auto decisions: Q5 keeps the 4 `DEPRECATED_*` patterns as legacy UI in `components/ui/legacy/`; Q6 gives the 5 `ContactByEmail*` pages a shared form and no container; Q7 puts `OSBlock` and the `OS*` widgets in `components/ui/os/`.
