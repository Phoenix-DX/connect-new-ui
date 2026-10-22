## Result
status: pass
summary: Added ADR-15 "Target front-end architecture (refactor-plan-v2)" to `migration/stack.json` with `stack.py adr new` (status `proposed`) and rendered `migration/architecture.md` with `stack.py render`. `ste_lint.py` finds 0 errors in the ADR-15 part (lines 220 to 246). The 9 packages that `stack.py check` reports are the 9 packages in the consequences.

## Files changed
migration/stack.json
migration/architecture.md
migration/refactor/handoffs/P0-5/dev-B.md

## Commands run
git branch --show-current → rf/prefetch-P0-5
python3 .claude/skills/outsystems-screen-spec/scripts/stack.py adr new --title … --context … --decision … --consequences … → exit 0, "ADR-15 proposed"
python3 .claude/skills/outsystems-screen-spec/scripts/stack.py render → exit 0, architecture.md written (+30/-1 lines; stack.json +10 lines)
python3 migration/tools/ste_lint.py migration/architecture.md → exit 1: 19 errors, 34 warnings in the whole file. ADR-15 part (lines 220 to 246): 0 errors, 11 warnings. The 19 errors are older: the HEAD version of the file has the same 19 errors.
  ADR-15 warnings: 10 × "2.1 glossary: page/pages" (the React term "page" of plan v2 §2.1, kept on purpose); 1 × "3.8 -ing word: walking" (the plan term "walking skeleton", R7).
python3 .claude/skills/outsystems-screen-spec/scripts/stack.py check → problems (expected until the gate): 5 packages are not in the allow-list (@vitest/coverage-v8, dependency-cruiser, jscpd, knip, ts-morph) and 4 versions differ from the pins (vite 7.3.7, vitest 4.1.12, storybook 10.6.3, @storybook/react-vite 10.6.3). These are the same 9 packages that the ADR-15 consequences list.
npm ls braces / npm audit (app/) → braces 3.0.3 comes in through knip 5.88.1 and jscpd 4.3.0 (fast-glob, micromatch); 1 advisory (GHSA-vfj7-8cjw-p6xm), shown as "6 high" because npm counts each package in the chain. npm audit --omit=dev → 0 vulnerabilities.
npm view knip time → knip 6.0.0 released 2026-03-20, 6.42.1 released 2026-10-19: the npm fix path (knip 6.42.1) fails the stable rule (ADR-2).
npm --prefix app run typecheck → exit 0 (no code file changed; vitest and eslint not applicable)

## Deviations from the brief
- `stack.py render` regenerates the whole file. Because of this, the P-DIALOG row of the patterns table also changes ("opens a popup, bottom sheet" → "opens a dialog or a bottom sheet"). The text comes from the current `migration/patterns/P-DIALOG.md`; architecture.md was not rendered again after the English-docs rewrite. I did not edit that row by hand.
- The decision and consequences fields contain line breaks with indented "  - " items. In the rendered file they show as nested lists under "Decision:" and "Consequences:". Reason: each list item is its own paragraph for `ste_lint.py`, so the rules fit within 6 sentences per paragraph. Older ADRs are single-line; `stack.py` and `docs_gen.py` print the fields unchanged, so the nested lists also show correctly in the generated docs.
- Added one consequence that the master did not list: "Open point: the consistency rules of `stack.json` (`requiredFiles`, `requiredIfCalls`, `allowedImportRoots`, NO-ROUTE-CSS) describe the folders of the migration. They need a change before the code moves to the new folders." Evidence: `stack.json` → `rules` names `index.tsx`, `api.ts`, `src/shared`, `src/shell`, and NO-ROUTE-CSS conflicts with R3 (CSS Modules for new components). Remove that item at the gate if the master does not want it.
- The consequence about the advisory adds two facts from the audit: `npm audit` offers knip 6.42.1 as a fix, and that fix fails the stable rule; jscpd 4.3.0 keeps the path in any case.
- I did not run `adr accept` or `dep add`, and I did not touch `duplicates.md` or `move-map.csv` (part A).

## Questions for the user
none (ADR-15 is ready for the P0-5 user gate: accept or reject; then `stack.py dep add <name> <version> --dev --adr ADR-15` for the 9 packages)
