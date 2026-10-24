## Result
status: pass
summary: Updated move-map (3 rows), calls-by-domain, api/README, CHANGELOG and followups (F24 for W27). overview.md and guides need no change (no folder or layer change).

## Files changed
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
app/src/api/README.md
app/docs/refactor/CHANGELOG.md
migration/refactor/followups.md

## Commands run
ste_lint.py on 4 .md files → 0 new errors (2 old errors in lines I did not change)
prettier --check on the 3 .md files under app/ → see final run
no mermaid file changed

## Deviations from the brief
F24 is added at the end of followups.md (after F23), not directly after F22; its text says "decide together with F22".
api/image and flowState were already committed by earlier steps; their docs needed no new change.

## Questions for the user
none
