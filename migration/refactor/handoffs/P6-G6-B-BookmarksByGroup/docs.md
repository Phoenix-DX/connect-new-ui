## Result
status: pass
summary: Updated move-map rows 5 (moved, hooks named) and 271 (api.ts deleted, inputs.ts added, renames), calls-by-domain.md line 115, api/README.md (lines 52, 54), CHANGELOG entry (renames and the "flows read latest" edge case), and the F28 follow-up (same family, user-visible only as the list after two quick Unmarks). overview.md and guides need no change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
app/src/api/README.md
migration/refactor/followups.md
migration/refactor/handoffs/P6-G6-B-BookmarksByGroup/docs.md

## Commands run
ste_lint.py (CHANGELOG, api/README) → 0 errors; calls-by-domain.md → 1 error (sentence > 25 words; not in the lines I changed)
npx prettier --check (CHANGELOG, calls-by-domain, api/README) → pass
check_mermaid → not run (no mermaid file changed)

## Deviations from the brief
none

## Questions for the user
none
