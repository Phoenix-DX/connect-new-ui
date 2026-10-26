## Result
status: pass
summary: knip finds no unused file in group G4 (the same 9 unused files as in G3, all in later groups or tooling), so nothing was deleted. jscpd found 2 small clones in the G4 folders, recorded and left. No code file changed.

## Prune report
- knip (whole app): 9 unused files, none in G4: `.storybook/withFlags.ts`, `MultiResolutionImageLoader/index.ts` (LegacyShared), 2 `types.ts` in `src/shared/Connect2_OrbitMobile_MUI`, 5 `index.ts` in `src/shared/osui`. Not deleted (later groups or tooling). Unused exports in G4 folders are only types and interfaces (props/state types) plus the exported `getSkeleton_UI_CountryStatistics` in CountryList (used inside its file). Left: not unused files, and removing `export` is not in the step.
- jscpd (min 8 lines, 70 tokens, tests and stories excluded) on the 14 G4 pages, components/{directory,household,assemble}, containers/{HouseholdDetails,SupperMeetingDetails,EntityDetailsActions}, api/{country,household,locality,member,image}: 245 files, 2 clones, 0.13% lines. Left, recorded only:
  1. `api/country/mapper.ts` 59-71 and `api/locality/mapper.ts` 86-98 (12 lines, same mapping shape).
  2. `pages/BrowseDirectory/hooks/browseDirectoryState.ts` 79-93 and `pages/CountryDetails/hooks/countryDetailsState.ts` 49-63 (14 lines). A merge needs a page-to-page import or a new shared module (rule 3); too small.
- Open follow-ups F21 and F22 were not touched.
- Guard: `arch_baseline.py check` result below; no P6-G4 owner row.

## Files changed
none

## Commands run
npx knip → 9 unused files, none in G4
npx jscpd (G4 folders) → 2 clones, 245 files, 0.13%
python3 migration/tools/refactor/arch_baseline.py check → see summary, 0 P6-G4 rows

## Deviations from the brief
none

## Questions for the user
none
