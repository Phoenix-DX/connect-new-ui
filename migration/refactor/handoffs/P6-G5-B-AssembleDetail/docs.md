## Result
status: pass
summary: Updated CHANGELOG, move-map rows 3, 34, 36, 268, calls-by-domain, api/README, page-template (exception for the container without a data hook), the overview diagram label, and followups (new F26; F23 note on HostSurvey). Checks pass.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
app/src/api/README.md
app/docs/guides/page-template.md
app/docs/architecture/overview.md
migration/refactor/followups.md
migration/refactor/handoffs/P6-G5-B-AssembleDetail/docs.md

## Commands run
- ste_lint.py on the 5 changed .md files under app/ and on followups.md → 0 errors in the changed text (calls-by-domain.md keeps 1 old error, line 5)
- prettier --check on the 5 .md files → clean (move-map.csv has no parser)
- check_mermaid.cjs overview.md → no error

## Deviations from the brief
- The follow-up got the id F26 (F25 exists). It is placed after F24.
- ADR-15 not changed: no rule of the target architecture changed.

## Questions for the user
none
