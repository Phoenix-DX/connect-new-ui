## Result
status: pass
summary: Added the CHANGELOG entry for P6-G1-A with the P6-F12 tool fix. overview.md, guides and move-map.csv need no change: overview already shows pages/ and the not-yet-moved screens/, and move-map.csv has no row with a G1 screen as source.

## Files changed
app/docs/refactor/CHANGELOG.md

## Commands run
python3 migration/tools/ste_lint.py app/docs/refactor/CHANGELOG.md → 0 errors (warnings only)
cd app && npx prettier --check docs/refactor/CHANGELOG.md → all files use Prettier code style

## Deviations from the brief
none

## Questions for the user
none
