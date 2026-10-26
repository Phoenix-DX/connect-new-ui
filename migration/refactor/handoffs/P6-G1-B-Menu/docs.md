## Result
status: pass
summary: CHANGELOG entry added. Menu row of move-map.csv set to `moved` (not duplicated). api/README.md and calls-by-domain.md updated for the move of requestPhotoUpdate to api/member (W9). overview.md and the guides need no change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/src/api/README.md
app/docs/refactor/calls-by-domain.md

## Commands run
python3 migration/tools/ste_lint.py on the 3 changed .md files → 0 errors in CHANGELOG.md and README.md; calls-by-domain.md has 1 error (3.1 sentence > 25 words) that is also in the HEAD version, not in the new text
cd app && npx prettier --check on the 3 .md files → pass (prettier has no parser for the CSV)
mermaid check → not run, no diagram changed

## Deviations from the brief
none

## Questions for the user
none
