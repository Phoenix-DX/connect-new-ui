## Result
status: pass
summary: F25 entry added to the CHANGELOG. The navigation guard section of the shell guide now describes the "navigating away" block and the re-entry block, and the one-back result for Unable to Host.

## Files changed
- app/docs/refactor/CHANGELOG.md (F25 entry)
- app/docs/guides/shell.md (navigation guard)

## Checks
- ste_lint: 0 errors on both files (warnings only). prettier: clean. No mermaid change.
- No other doc says the HostSurvey back recurses (grep of app/docs, app/src, READMEs). overview.md only names the gate, no change needed. move-map.csv: no change.

## Questions for the user
none
