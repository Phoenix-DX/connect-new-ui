## Result
status: pass
summary: CHANGELOG has entries for P5-F9 and P5-2-locality. api/README.md, api-and-mocks.md, calls-by-domain.md and quality.md describe api/locality and the new --hold-third-party option. migration/tools/README.md matches the code; no fix needed. Checks pass.

## Files changed
app/docs/refactor/CHANGELOG.md
app/src/api/README.md
app/docs/guides/api-and-mocks.md
app/docs/refactor/calls-by-domain.md
app/docs/guides/quality.md

## Commands run
ste_lint.py on the 5 files → 0 new errors (calls-by-domain.md line 5 has 1 old error)
prettier --check on the 5 files → pass

## Deviations from the brief
move-map.csv unchanged: its one row for these calls (CacheControl_AllLocalities) already points to src/api/locality/hooks.ts. No mermaid change. reference/api.md and the two block READMEs stay correct (endpoints and api.ts re-exports unchanged).

## Questions for the user
none
