# Item 10 small fixes (2026-10-29)

## 1. OrbitAdminMilestones Q2 (a): Admin* ids

- File: `app/src/lib/orbit/staticEntities.ts` (ids and comment), `app/src/components/orbit/MilestoneCard/MilestoneCard.tsx` (comment), `MilestoneCard/README.md`, `MilestoneCard.test.tsx`.
- Mapping (record names of `Connect2_OrbitMobile_MUI.orbitMilestoneType` in `migration/knowledge/static-entities-tst.json`, same GUIDs in moduleinfo 15682): AdminMeeting `meeting-admin`, AdminMeal `meeting-meal`, AdminMealAtHall `meal-at-hall-admin`, AdminAccommodation `accommodation-admin`, AdminTransportVehicle `transport-vehicle-admin`, AdminBreak `break-admin`.
- Note: the record adminMeal has the id `meeting-meal` in the live file (not `meal-admin`). Kept as listed; confirm if you doubt it.
- Render change: the admin branch of MilestoneCard now renders for these six ids: a description row, a date row (MilestoneDateTime) and a times row ("start - end"; its class stays `orbit-card-content-infomargin-top-m`, as compiled).
- Tests: MilestoneCard test now checks all six ids (3 rows) and that `break` / an unknown id render nothing. 11 pass. No other test used the ids.

## 2. PassportScan Q3 (a): body theme through platform

- Rule 4 forbids `components/` to import `platform/`, so a direct import was not possible. Same pattern as `app/dialogs.ts`:
  `platform/theme/bodyTheme.ts` (`setBodyTheme`, wraps `legacy/os/bodyTheme`, test beside it), `components/layout/layoutTheme.ts` (setter slot, `setLayoutTheme`), `app/layoutTheme.ts` (`connectLayoutTheme`, test beside it), called in `main.tsx`, `test/setup.ts`, `.storybook/preview.ts`.
- LegacyLayout, OrbitLayout, OrbitBlankLayout use `setLayoutTheme`. Two known-violation rows removed (LegacyLayout, OrbitLayout) from `app/.dependency-cruiser-known-violations.json`.
- `npm run arch`: no violations. `npm run arch:baselines` reports 2 stale rows from other agents' deleted pages (BookmarksByGroup, MyBookmarks hooks), not mine.

## 3. PassportScan Q1 (a): ADR-17

- `app/docs/reference/stack.md`: ADR table row and section ADR-17 (accepted, 2026-10-29, user). The number is 17 because ADR-16 exists. ste_lint reports findings on the whole file (older text); the new text is short sentences.

## Checks

- tsc: clean. eslint changed files: 0 errors. prettier: clean.
- vitest: src/platform/theme, src/app, src/components/layout, src/components/orbit, src/pages/OrbitAdmin, src/lib/orbit: 64 files, 315 tests pass (before the MilestoneCard test update; that folder re-run passes 11).
- Stopped on nothing.
