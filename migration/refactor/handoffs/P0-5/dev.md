## Result
status: pass
summary: P0-5 has two parts. Part A (`duplicates.md`, `move-map.csv`, `move-map.mjs`, decisions file) and part B (ADR-15 in `migration/stack.json`, rendered `migration/architecture.md`) are done. Details are in `dev-A.md` and `dev-B.md`. Loop 1 applies the decisions Q5 and Q6 (below).

## Files changed
See `dev-A.md` and `dev-B.md`. Loop 1 changed the files listed in the section below.

## Loop 1: Q5 and Q6
Decisions (auto-accepted under the delegation of the user, 2026-10-22):
- Q5 (a): the 4 `DEPRECATED_*` patterns stay as legacy UI components with business names in `components/ui/legacy/` (phase P7, shape `ui`). They are not deleted.
- Q6 (a): the 5 `ContactByEmail*` pages use a shared `ContactEmailForm`, two card components, and per page a config object plus one submit hook. No container. `EmailContact`, `EmailTarget` and `LDM_Email_V2` stay separate.

Files changed:
- migration/tools/refactor/move-map.decisions.json (the 4 `osui/DEPRECATED_*` rows: kind ui, shape ui, names `LegacyAccordion`, `SectionExpandable`, `LegacyButtonLoading`, `GridGallery`, targets `src/components/ui/legacy/<Name>/<Name>.tsx`, `review` removed; the `ContactByEmailForm` row and the `ContactByEmailMember` row: notes name Q6, `review` not present)
- app/docs/refactor/move-map.csv (regenerated)
- app/docs/refactor/duplicates.md (summary counts: ui 94 to 98, delete 6 to 2, review rows 18 to 15; the review table lost row 1 and has 9 rows; group 1 and group 6 now state the decisions; the older lint errors in the file are fixed by splitting long sentences)
- migration/stack.json (ADR-15 `decision`: two list items for Q5 and Q6; status stays `proposed`)
- migration/architecture.md (rendered)

Commands run:
- `node migration/tools/refactor/move-map.mjs` and `--check` → exit 0; 329 rows; shape: page 64, component 90, hook+component 56, container+component 4, layout 14, ui 98, delete 2, mock 1; phase counts are unchanged (P7 102)
- `stack.py render` → exit 0
- `ste_lint.py app/docs/refactor/duplicates.md` → 0 errors, 7 warnings (glossary "page", "clone"; 1 passive)
- `cd app && npx prettier --check` on `duplicates.md` and the decisions file → pass

Notes: the 2 remaining `delete` rows are `MultiResolutionImageLoader` and `Dialog_AccessRestrictedAction_Legacy` (a merge into the P1-2 dialog), not changed here. A first write of `stack.json` used indent 2 and reformatted the whole file; it was rewritten with indent 1 (the format of `stack.py`), and the diff against HEAD is now only the ADR-15 addition. No `adr accept` and no `dep add` were run.

## Loop 2: gate review

Applied the 16 row changes of the Opus gate review (delegated) in `migration/tools/refactor/move-map.decisions.json`; `move-map.csv` regenerated, `--check` passes; no `review` left in `move-map.csv`.

- Phase P5: `CacheControl`, the 4 `CacheControl_*`, `CacheControl_UserInfo_Wrapper`, `Directory_Updates` (target `src/mocks/handlers/update.ts`). `App_NotificationRefresh` is now `component`.
- `duplicates.md`: new count table (P5 column added, component 91, hook+component 55, P7 101), review rows 15 to 0, review table notes updated.
- ADR-15 (`stack.json`, status `proposed`): 3 consequences added (plan §2.2 text, memoryCache readers in P5-4, OSBlock placement per Q7: `components/ui/os/`, plan P1-3 text change). The move map has no `src/components/OS*` rows, so none added. `stack.py render` run.

Files changed: migration/tools/refactor/move-map.decisions.json, app/docs/refactor/move-map.csv, app/docs/refactor/duplicates.md, migration/stack.json, migration/architecture.md.
