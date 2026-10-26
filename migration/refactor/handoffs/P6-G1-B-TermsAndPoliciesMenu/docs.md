## Result
status: pass
summary: Added the CHANGELOG entry, set the TermsAndPoliciesMenu row of move-map.csv to `moved`, fixed the re-export sentence in audit-a1-empty-handlers.md. No other document names a path that changed.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
migration/knowledge/audit-a1-empty-handlers.md
migration/refactor/handoffs/P6-G1-B-TermsAndPoliciesMenu/docs.md

## Commands run
ste_lint.py (CHANGELOG, audit file) → 0 errors
prettier --check CHANGELOG.md → exit 0 (CSV has no parser)

## Deviations from the brief
none

## Questions for the user
none
