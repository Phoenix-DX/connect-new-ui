## Result
status: pass
summary: CHANGELOG entry added. The 4 Splash rows of move-map.csv (one already changed by the developer) are set to `moved`. One sentence in guides/shell.md now says that SplashPage calls useNoCommonUi. overview.md needs no change (no layer or flow change).

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/guides/shell.md

## Commands run
python3 migration/tools/ste_lint.py CHANGELOG.md, shell.md → 0 errors (warnings only)
npx prettier --check CHANGELOG.md shell.md → pass (CSV has no parser)
mermaid check → not needed, no diagram changed

## Deviations from the brief
none

## Questions for the user
none
