## Result
status: pass
summary: Documented api/member in the CHANGELOG (with M9, M10, M11), `src/api/README.md`, the API guide, the ShareSheet README and `calls-by-domain.md` (OrbitLanding row moved to event). `move-map.csv` and ADR-15 need no change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/calls-by-domain.md
app/docs/guides/api-and-mocks.md
app/src/api/README.md
app/src/shared/UBTConnect_Utils/ShareSheet/README.md
migration/refactor/handoffs/P5-2-member/docs.md

## Commands run
ste_lint.py on the 5 .md files → 0 errors, except calls-by-domain.md: 1 error (sentence > 25 words in the "Method" paragraph, exists in HEAD)
npx prettier --check (5 files) → pass after `--write` on calls-by-domain.md (table widths)
mermaid check → not needed (no diagram changed)

## Deviations from the brief
`move-map.csv` not changed: it has no row for these 3 calls. The `CacheControl_UserInfo` row (target `api/member/hooks.ts`) stays open for P5-4 (M10).

## Questions for the user
none
