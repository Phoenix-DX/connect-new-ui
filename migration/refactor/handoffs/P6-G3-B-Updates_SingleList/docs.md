## Result
status: pass
summary: Updated CHANGELOG, move-map rows 332 and 245, calls-by-domain (note under the update table) and page-template.md (the optional `restore(saved)` option of useFlowState). overview.md and ADR-15 need no change: no folder, layer or rule changed.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
app/docs/guides/page-template.md
migration/refactor/handoffs/P6-G3-B-Updates_SingleList/docs.md

## Commands run
python3 migration/tools/ste_lint.py CHANGELOG.md, page-template.md → 0 errors
python3 migration/tools/ste_lint.py calls-by-domain.md → 1 error (3.1, sentence > 25 words), already in HEAD, not from this step
cd app && npx prettier --check (3 md files) → pass
check_mermaid: not run, no mermaid file changed

## Deviations from the brief
none

## Questions for the user
none
