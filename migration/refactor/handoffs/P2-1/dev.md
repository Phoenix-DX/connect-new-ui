## Result
status: pass
summary: Moved screens/HouseholdDetails to pages/HouseholdDetails (index.tsx -> HouseholdDetailsPage.tsx) with the codemod; updated the screens glob and the MSW mock globs; added @origin. Quick checks and strict parity (3 routes, both refs) pass.

## Files changed
app/src/screens/HouseholdDetails/{api,mocks,types}.ts -> app/src/pages/HouseholdDetails/ (moved)
app/src/screens/HouseholdDetails/index.tsx -> app/src/pages/HouseholdDetails/HouseholdDetailsPage.tsx (moved, @origin tag)
app/src/app/screens.ts
app/src/mocks/handlers.ts
app/src/mocks/handlers.test.ts

## Commands run
node migration/tools/refactor/move.ts --from ... --to ... → 4 files moved, 0 imports rewritten, typecheck ok
npm run typecheck → 0
vitest run src/mocks → 10 passed
eslint changed files → clean
npm run format:check → clean
refactor_parity.py strict HouseholdDetails HouseholdCarousel Profile --ref both --app :5174 → PASS (3/3 clean per ref)
rf.py diffcheck --move → FAIL (expected, see deviations)

## Deviations from the brief
- diffcheck --move flags the lines the step itself requires: the screens.ts glob fallback, the @origin tag, and handlers.ts/handlers.test.ts. handlers.ts needed a change because the mocks.ts moved out of the screens/* glob; pages and screens mocks are merged and sorted by folder name so the handler order stays as before.
- The codemod does not rename index.tsx; done with git mv.

## Questions for the user
none
