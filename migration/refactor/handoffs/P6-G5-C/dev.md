## Result
status: pass
summary: knip found 2 unused files in group G5 (empty `export {}` placeholders `types.ts` in components/orbit/EventDetailSubSection and HostSurveyPill); deleted both. jscpd found 12 small clones in the G5 folders; all recorded, none merged (page-to-page imports are forbidden by rule 3).

## Prune report
- knip (whole app): 9 unused files. G5: `src/components/orbit/EventDetailSubSection/types.ts`, `src/components/orbit/HostSurveyPill/types.ts` (each only `export {}` and a comment) -> deleted with `git rm`. The other 7 are tooling or later groups (`.storybook/withFlags.ts`, LegacyShared MultiResolutionImageLoader, 5 `shared/osui` index.ts), left as in G3 and G4. Unused exports are barrel re-exports and types; not in the step.
- jscpd (min 8 lines, 70 tokens, tests and stories excluded) on the 16 G5 pages, components/{orbit,assemble}, api/event: 353 files, 12 clones, 0.71% lines. Left, recorded only:
  1. `api/event/hooks.ts` 30-69 and `repository.ts` 35-74 (39 lines, same query-option shape).
  2. `MilestoneCard.tsx` 190-204 and 158-173 (14 lines, same file).
  3. `HostSurvey/mocks.ts` 87-104 and `hostSurveyState.ts` 22-39 (17 lines).
  4. `getContactHelpdeskSubject_Event` copies: `EventDetail/hooks/eventDetailActions.ts` 58-67 and `HelpersDetail/hooks/helperDetailsActions.ts` 32-41 (9 lines); QRCodeGenerate (G6) has a third copy, not touched. A merge needs a shared module (new file in `lib/` or `api/event`); too small, left for P7.
  5. HelpersDetail / TransportDetail / GuestArrangements / MilestoneDetail action, view and state clones (HelpersDetail `helperDetailsActions` vs TransportDetail `actions`; GuestArrangements actions vs TransportDetail and MilestoneDetail state; `GuestArrangementsView` vs `HelperDetailsView`; `AccommodationHostView` vs `HelperDetailsView`; `useAccommodationHost` vs `useHelperDetails` 45 lines; mocks MilestoneDetail vs HelpersDetail 17 lines). The pages are twins in OutSystems; a merge is a page-to-page import (rule 3) or a new container, which is a design change. Candidate for P7.
- F21 `fetchSubscribedCountries`: kept as 2 copies on purpose (duplicates.md); not touched.
- Guard: `arch_baseline.py check` -> 69 warnings, 69 baseline rows, 0 new.

## Files changed
app/src/components/orbit/EventDetailSubSection/types.ts (deleted)
app/src/components/orbit/HostSurveyPill/types.ts (deleted)
migration/refactor/handoffs/P6-G5-C/dev.md

## Commands run
npx knip -> 9 unused files, 2 in G5
npx jscpd (G5 folders) -> 12 clones, 353 files, 0.71%
npm --prefix app run typecheck -> exit 0
npx vitest run src/components/orbit -> 13 files, 61 tests passed
python3 migration/tools/refactor/arch_baseline.py check -> 0 new

## Deviations from the brief
none

## Questions for the user
none
