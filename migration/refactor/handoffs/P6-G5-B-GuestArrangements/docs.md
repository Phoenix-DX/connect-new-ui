## Result
status: pass
summary: Updated move-map row (moved), CHANGELOG entry (beforePaint: true, W28), api/README (image callers, event sentence), calls-by-domain note, and two comment texts (fetchLegacySignedImageURL callers; mocks.ts photo handler location). overview.md and guides need no change.

## Files changed
app/docs/refactor/move-map.csv
app/docs/refactor/CHANGELOG.md
app/docs/refactor/calls-by-domain.md
app/src/api/README.md
app/src/api/image/repository.ts (comment text only)
app/src/pages/GuestArrangements/mocks.ts (comment text only)
migration/refactor/handoffs/P6-G5-B-GuestArrangements/docs.md

## Commands run
python3 migration/tools/ste_lint.py (CHANGELOG, README) → 0 errors; calls-by-domain.md has 1 error (39-word sentence at line 5, existing before this step)
npx prettier --check (md files, repository.ts, mocks.ts) → pass

## Deviations from the brief
The caller comment already named MilestoneDetail's need only in README; I listed all 3 callers. The photo handler is in pages/MilestoneDetail/mocks.ts (checked), and the comment now says so.

## Questions for the user
none
