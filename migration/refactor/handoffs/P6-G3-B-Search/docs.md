## Result
status: pass
summary: Updated CHANGELOG, move-map (Search block row set to moved; FilterSheet note now names containers/FilterSheet), calls-by-domain, api/README (search domain) and followups (F18). Lint and prettier pass; the one STE error in calls-by-domain.md was there before.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
app/src/api/README.md
migration/refactor/followups.md
migration/refactor/handoffs/P6-G3-B-Search/docs.md

## Commands run
python3 migration/tools/ste_lint.py <4 md files> → 0 new errors (calls-by-domain.md: 1 existing sentence > 25 words, same at HEAD)
npx prettier --check (CHANGELOG, calls-by-domain, api/README) → pass; move-map.csv has no prettier parser
mermaid check → not needed (no diagram changed)

## Deviations from the brief
No guide lists containers, so containers/FilterSheet was not added to any guide. overview.md and ADR-15 unchanged (no rule or flow change).

## Questions for the user
none
