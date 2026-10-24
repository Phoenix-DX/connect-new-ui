## Result
status: pass
summary: Checked the developer's 6 doc items against the current tree and updated them (line numbers had moved: calls-by-domain rows now at lines 31 and 111). overview.md and the guides need no change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv (row 25 status `moved`, hooks named; row 317 note)
app/docs/refactor/calls-by-domain.md (2 OrbitLanding rows removed, 1 note paragraph added)
app/src/api/README.md (household paragraph added, event paragraph exception)
migration/refactor/handoffs/P6-G5-B-OrbitLanding/docs.md

## Commands run
ste_lint.py on the 3 changed .md files → CHANGELOG 0 errors, README 0 errors, calls-by-domain 1 error (line 5, 39-word sentence, existing, not changed)
prettier --check on the 3 .md files → pass
check_mermaid → not run (no mermaid changed)

## Deviations from the brief
none

## Questions for the user
none
