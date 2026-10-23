## Result
status: pass
summary: Updated the move-map row (Services, shape and note), calls-by-domain line 171, api README (domain `service`), known-original-bugs B3, platform README (`bubbleErrors.ts`), CHANGELOG, and page-template (decision W23 rule for `isAlive`). No mermaid file changed. ADR-15 and overview.md need no change.

## Files changed
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
app/docs/refactor/CHANGELOG.md
app/docs/known-original-bugs.md
app/src/api/README.md
app/src/platform/README.md
app/docs/guides/page-template.md
migration/refactor/handoffs/P6-G3-B-Services/docs.md

## Commands run
ste_lint.py on the 6 changed .md files → 0 new errors. Remaining errors are old: calls-by-domain.md line 5 and api/README.md line 89 (not in my text).
npx prettier --check on the changed files → exit 0 (known-original-bugs.md and calls-by-domain.md re-formatted for table width)

## Deviations from the brief
- The move-map status of the Services row was already `moved`; I changed its note only.

## Questions for the user
none
