## Result
status: pass
summary: CHANGELOG entry, move-map (2 rows changed), duplicates.md group 2, shell guide, os-widgets guide, overview and 2 READMEs updated. No mermaid diagram changed. STE 0 errors, prettier pass.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/duplicates.md
app/docs/guides/shell.md
app/docs/guides/os-widgets.md
app/docs/architecture/overview.md
app/src/pages/LegacyShareObject/components/UpgradeSubscriptionDialog/README.md
app/src/components/assemble/VirtualMeetingUrl/README.md
migration/refactor/handoffs/P7-2/docs.md

## Commands run
- ste_lint on each changed .md -> 0 errors
- prettier --check on the changed files -> pass (shell.md reformatted once)
- git diff of move-map.csv -> 2 rows changed (NavigationConfirmationDialog: status moved; Dialog_AccessRestrictedAction_Legacy: target DialogAccessRestrictedActionLegacy.tsx, status moved). Dialog_CustomChoice and Dialog_Navigation were already moved.
- check_mermaid: not run, no diagram changed

## Deviations from the brief
none

## Questions for the user
none
