## Result
status: pass
summary: Added the CHANGELOG entry (W28 `beforePaint: true`, no parity states, DOM evidence from the 16-scenario test), set the ScreenBlock move-map row to `moved`, and added the TransportDetail note to calls-by-domain.md. overview.md and the guides need no change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md

## Commands run
ste_lint.py CHANGELOG.md calls-by-domain.md → 0 errors in CHANGELOG; 1 error in calls-by-domain.md that exists at HEAD (not from this change)
npx prettier --check CHANGELOG.md calls-by-domain.md → pass (CSV has no parser)

## Deviations from the brief
- The screen row (index.tsx) was already `moved` by step A; only the ScreenBlock row changed.
- The `fetchTransportDetail` call checked in app/src/api/event/repository.ts and hooks hooks/useTransportDetail.ts.

## Questions for the user
none
