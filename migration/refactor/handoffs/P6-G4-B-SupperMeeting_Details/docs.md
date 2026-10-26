## Result
status: pass
summary: Updated the CHANGELOG, 6 move-map rows, calls-by-domain, api/README, page-template (slot list) and followups (new F22). Baseline: 7 rows of this step gone, arch-baseline.csv has 67 rows (P7 66, pre-existing 1). Checks pass; the only STE error left (calls-by-domain.md line 5) is old text.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv (rows 167, 168, 169, 195, 196, 332; line numbers checked in the current tree)
app/docs/refactor/calls-by-domain.md (note at the end; the table rows at lines 33 and 64 stay, as for earlier steps)
app/src/api/README.md (locality: 13 calls, fetchSubdivisionHouseholds)
app/docs/guides/page-template.md (slots renderHouseholdDetails and renderSupperMeetingDetails)
migration/refactor/followups.md (F22: back navigation calls both data actions again)
migration/refactor/handoffs/P6-G4-B-SupperMeeting_Details/docs.md

## Commands run
ste_lint.py on 5 changed .md files → 0 errors, except calls-by-domain.md (1 error, line 5, not changed by this step)
npx prettier --check on the changed files under app/ → pass (move-map.csv has no prettier parser)
mermaid: not run, no diagram changed (overview.md not changed)

## Deviations from the brief
overview.md not changed: its diagrams show layers and folders, and no layer changed. The slot description is in page-template.md.

## Questions for the user
none
