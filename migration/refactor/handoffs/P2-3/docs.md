## Result
status: pass
summary: CHANGELOG entry for P2-3 added, with the two follow-ups for P2-4 under "Open". 3 move-map rows set to `moved`, and 2 moved READMEs updated to the new structure. overview.md, the guides and ADR-15 need no change (no new folder rule).

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv (rows 181, 182, 241 status `moved`; notes of 181, 184, 241 carry the P2-4 follow-ups)
app/src/containers/HouseholdDetails/README.md
app/src/components/household/HouseholdMemberList/README.md
migration/refactor/handoffs/P2-3/docs.md

## Commands run
python3 migration/tools/ste_lint.py (CHANGELOG, 2 READMEs) → 0 errors; CHANGELOG 11 warnings (passive voice, glossary), most from earlier entries
npx prettier --check (3 md files) → pass
check_mermaid.cjs → not run, no mermaid changed

## Deviations from the brief
- Not updated: `migration/screens/HouseholdDetails/route-spec.md` (old README link) and `migration/tools/docs_gen.py` / `move-map.mjs` (`// @os-block`). They are outside my file list; both are named in the CHANGELOG "Open".
- The READMEs of EntitiesCarousel and EntitiesCarousel_HouseholdDetails still name `HouseholdDetails_Block`; that is the OutSystems block name, so they stay.

## Questions for the user
none
