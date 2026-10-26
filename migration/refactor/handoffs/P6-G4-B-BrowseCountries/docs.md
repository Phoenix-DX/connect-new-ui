## Result
status: pass
summary: Added the CHANGELOG entry and updated move-map.csv (page row notes), calls-by-domain.md (row removed, note added) and duplicates.md (api.ts clone row). overview.md, the guides and ADR-15 need no change: no folder, layer or rule changed.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
app/docs/refactor/duplicates.md
migration/refactor/handoffs/P6-G4-B-BrowseCountries/docs.md

## Commands run
python3 migration/tools/ste_lint.py CHANGELOG.md duplicates.md → 0 errors
python3 migration/tools/ste_lint.py calls-by-domain.md → 1 error (line 5, sentence over 25 words; existed before this step, not changed)
npx prettier --check (3 md files) → duplicates.md failed; fixed with prettier --write; then clean
check_mermaid.cjs → not run: no changed file has a mermaid diagram

## Deviations from the brief
none. The generated counts in calls-by-domain.md (70 files, 155 call sites) are left as is; P9-3 re-runs them.

## Questions for the user
none
