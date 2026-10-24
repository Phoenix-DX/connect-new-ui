## Result
status: pass
summary: Updated move-map rows 15 and 301, calls-by-domain.md, the event/ and household/ paragraphs of api/README.md, and the CHANGELOG (records the `@origin` correction to `Legacy_LDMEventsFlow_V2`). overview.md and the guides need no change.

## Files changed
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
app/docs/refactor/CHANGELOG.md
app/src/api/README.md
migration/refactor/handoffs/P6-G5-B-LDM_EventDetail_V2/docs.md

## Commands run
python3 migration/tools/ste_lint.py (3 changed .md files) → 0 errors in README and CHANGELOG; 1 error in calls-by-domain.md (3.1 long sentence), already in HEAD
cd app && npx prettier --check src/api/README.md docs/refactor/CHANGELOG.md docs/refactor/calls-by-domain.md → clean
mermaid check → not needed (no diagram changed)

## Deviations from the brief
- Row 15 status set to `moved`; the note names the hooks `useLdmEventDetail.ts` and `ldmEventDetailState.ts` (checked in the tree). Row 301 note: inputs.ts new, api.ts and types.ts deleted.
- calls-by-domain.md: a new step paragraph, as for the earlier G5 steps (old table rows stay).
- api/README.md: the event/ paragraph no longer lists LDM_EventDetail_V2 among the screens with a re-exporting `api.ts` (12 other screens now); the household/ paragraph has `fetchHouseholdCoordinatesById`. Checked against the tree: LDM_MyEvents_V2 was already handled by an earlier step.
- The CHANGELOG line that said LDM_EventDetail_V2 still has the wrong `@origin` is left in the earlier entry; the new entry says it is fixed. LDM_Email_V2 still has the error (checked).

## Questions for the user
none
