## Result
status: pass
summary: Updated the CHANGELOG, the move-map row (page+hook), calls-by-domain.md (Notifications calls now under api/notification/repository.ts) and page-template.md (no useFlowState when the view cache keeps some variables). overview.md needs no change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
app/docs/guides/page-template.md
migration/refactor/handoffs/P6-G3-B-Notifications/docs.md

## Commands run
ste_lint.py on the 3 .md files → 0 errors in CHANGELOG and page-template; calls-by-domain.md has 1 error that is also in HEAD (sentence over 25 words, not from this step)
prettier --check on the 3 .md files → pass (calls-by-domain.md reformatted with --write)
check_mermaid → not run (no mermaid changed)

## Deviations from the brief
none

## Questions for the user
none
