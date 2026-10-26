## Result
status: pass
summary: Set the move-map row of ScreenBlock_HelperDetails to `moved`. Added the HelpersDetail note to calls-by-domain, the CHANGELOG entry (with `beforePaint: true`, W28), and the api/README image callers list. Changed the caller comment of `fetchLegacySignedImageURL` (comment text only). No architecture, guide or ADR-15 change.

## Files changed
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
app/docs/refactor/CHANGELOG.md
app/src/api/README.md
app/src/api/image/repository.ts (comment text only)
migration/refactor/handoffs/P6-G5-B-HelpersDetail/docs.md

## Commands run
ste_lint.py on CHANGELOG, calls-by-domain, api/README → 0 new errors (1 old error in calls-by-domain line 5)
npx prettier --check on the 4 files under app/ → pass
No mermaid file changed.

## Deviations from the brief
none

## Questions for the user
none
