## Result
status: pass
summary: Updated the CHANGELOG, move-map rows 23 and 315, calls-by-domain.md, api/README.md (member paragraph fixed, new `image/` paragraph) and the keys.ts comment. Checked against the current tree. No other document needed a change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv (row 23 status moved and notes; row 315 notes)
app/docs/refactor/calls-by-domain.md (3 rows of the old api.ts deleted, note added)
app/src/api/README.md
app/src/api/image/keys.ts (comment text only)

## Commands run
ste_lint.py on the 3 changed .md files → 0 errors in my text; remaining errors are old (calls-by-domain.md line 5, README paragraph rules fixed)
prettier --check on the .md and keys.ts → pass (csv has no parser)
mermaid check → not needed, no mermaid changed

## Deviations from the brief
none

## Questions for the user
none
