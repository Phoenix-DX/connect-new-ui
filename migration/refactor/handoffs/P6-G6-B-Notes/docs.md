## Result
status: pass
summary: Updated CHANGELOG (new entry with the 5 deviations and the tester verdict), move-map row of Notes, calls-by-domain note rows, api/README note paragraph. No other document needs a change. ste_lint 0 errors, prettier clean.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv (row src/screens/Notes/index.tsx: notes text; status was already moved)
app/docs/refactor/calls-by-domain.md (2 note rows: screens/Notes/api.ts to pages/Notes/hooks/useNotes.ts)
app/docs/guides/page-template.md (2 patterns: restore returning the initial state; OnReady in its own effect)
app/src/api/README.md (note paragraph: api.ts and types.ts deleted, local reads in platform/storage/localEntities)

## Commands run
python3 migration/tools/ste_lint.py app/docs/refactor/CHANGELOG.md → 0 errors
python3 migration/tools/ste_lint.py app/src/api/README.md → 0 errors
cd app && npx prettier --check (3 changed .md files) → clean
Checked against tree: pages/Notes/hooks/useNotes.ts imports @/api/note and @/platform/storage/localEntities; api.ts and types.ts absent.

## Deviations from the brief
LDM_Email_V2 and LegacyShareObject are not named as examples: no `restore: () =>` use in their code now. Examples are Notes and MilestoneDetail.

## Questions for the user
none
