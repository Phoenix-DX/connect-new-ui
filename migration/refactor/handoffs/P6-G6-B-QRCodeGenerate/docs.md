## Result
status: pass
summary: Updated CHANGELOG, move-map rows 26 and 324, api/README (event/ and image/), calls-by-domain and the caller comment in api/image/repository.ts (comment only). The overview, guides and ADR-15 need no change. The checks pass; the only STE error is in line 5 of calls-by-domain.md, which this step did not touch.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv (rows 26 and 324 only; checked with git diff HEAD)
app/src/api/README.md
app/docs/refactor/calls-by-domain.md
app/src/api/image/repository.ts (JSDoc comment text only)
migration/refactor/handoffs/P6-G6-B-QRCodeGenerate/docs.md

## Commands run
- git diff HEAD -- app/docs/refactor/move-map.csv → 2 changed rows (26, 324)
- npx prettier --check (4 changed files under app/) → pass
- ste_lint.py on the 3 .md files → 0 new errors (1 old error in line 5 of calls-by-domain.md)

## Deviations from the brief
none. The CHANGELOG states that QRCodeGenerate has no parity states (evidence: the developer's 14-scenario old-vs-new DOM test).

## Questions for the user
none
