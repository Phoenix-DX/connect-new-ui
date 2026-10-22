## Result
status: pass
summary: Added the domain `app/src/api/household/` (types, mapper, repository, keys, hooks, barrel) with 3 test files, and changed `HouseholdDetails_Block/api.ts` so that it re-exports the domain under its old names. The callers did not change. Typecheck, tests (full suite 328 files), eslint, format:check and strict parity on the 3 routes (both references) pass.

## Files changed
app/src/api/household/types.ts (added)
app/src/api/household/mapper.ts (added)
app/src/api/household/repository.ts (added, `@origin UBTConnect.Directory_Household.HouseholdDetails_Block`)
app/src/api/household/keys.ts (added)
app/src/api/household/hooks.ts (added)
app/src/api/household/index.ts (added, barrel)
app/src/api/household/mapper.test.ts (added)
app/src/api/household/repository.test.ts (added)
app/src/api/household/hooks.test.tsx (added)
app/src/shared/UBTConnect/HouseholdDetails_Block/api.ts (changed: re-export only)
migration/refactor/handoffs/P2-2/dev.md (added)
No `git mv` was used.

## Commands run
npm --prefix app run typecheck → exit 0
npx vitest run src/api src/shared/UBTConnect/HouseholdDetails_Block src/shared/UBTConnect/HouseholdDetails_Members_Block src/shared/UBTConnect/EntitiesCarousel_HouseholdDetails → 8 files, 49 tests passed
npx vitest run src/shared/UBTConnect/EntitiesCarousel_Element src/screens/HouseholdCarousel src/screens/Profile src/screens/Locality_Details src/mocks → 6 files, 25 tests passed
npx vitest run (full suite) → 328 files, 1470 tests passed
npx eslint src/api/household src/shared/UBTConnect/HouseholdDetails_Block/api.ts → exit 0, no warning
npm run format:check (whole app) → all files use Prettier code style (after prettier --write on mapper.ts)
npx depcruise src --config .dependency-cruiser.cjs --output-type err → 244 violations (1 error, 243 warnings), before 245 (1 error, 244 warnings). The removed warning is rule 9 for `HouseholdDetails_Block/api.ts → legacy/os/os-wire.ts`. There is no warning in `src/api/household/`. The error is the cycle in `platform/session` that existed before.
python3 migration/tools/refactor_parity.py --level strict --routes HouseholdDetails HouseholdCarousel Profile --ref both --app http://localhost:5174 → PASS: outsystems 3/3 clean, self 3/3 clean (18 runs). Default report path, not committed. The tester still runs the gate command with `--changed` and the P2-2 report.

## Deviations from the brief
- The domain types keep the OutSystems field names and nesting (`Household.Household.HouseholdCard.Household_Card_Content`, `Out_HouseholdMembers`, `isVisible`, PascalCase fields). They are not camelCase domain names. Reason: the step says that `api.ts` re-exports the domain and that the callers do not change. The block, `logic.ts` and the block test read these names. Business names can come in P2-3, when the callers change.
- The mapper copies only the fields that the UI reads (block JSX, `logic.ts`, `HouseholdDetails_Members_Block`). The plan asks for this. The tester should check the fields that it drops. Household record: `Household_Actions`, `Surname`, `TimezoneName`, `TimezoneOffset`. Member: `Age`, `ContryCode`, `DateOfBirth`, `DeceasedDate`, `Description`, `DescriptionHighlight`, `FirstName`, `FormattedLocality`, `Initials`, `LastName`, `LocalityId`. A grep of `src/` found no reader of these fields on this data path, and strict parity is clean. The member fields that `handlePreviewData` writes (`DisplayAge`, `Email`, `MobilePhone`, `WorkPhone`, `HomePhone`) stay. `HouseholdCard.Id` stays, because the block test sets it.
- Additions that the step table does not name:
  - the type `HouseholdCallInputs`: the inputs of both actions, the same type as the old `HouseholdDetailsCallInputs`. It is a type alias because the contract inputs have an index signature.
  - helper types: `HouseholdDisplayOptions`, `HouseholdCardContent`, `HouseholdCard`, `HouseholdDetails`.
  - the mapper `toHouseholdCoordinates`, `householdKeys.all` and the type `HouseholdQueryOptions`.
- The hooks fix `staleTime: 0` and `gcTime: 0` after the caller options, so a caller cannot override them. They also set `retry: false` as a default that a caller can override. OutSystems does not retry a data action, every existing query hook sets it, and a test client with the library defaults would otherwise retry 3 times. The cache options are in `hooks.ts`, as the step table says, not in `keys.ts`, where plan §2.7 puts them.
- `@origin` is only in `repository.ts`, because that file ports the two data actions of the block. The other files of the domain do not port a screen or a block. The new files have no compiled-line references. The old `api.ts` lost its `mvc.js:` references because the step rewrote it.
- The domain barrel does not export the mapper (internal). The tests import `./mapper` directly.
- For the documenter: `shared/UBTConnect/HouseholdDetails_Block/README.md` ("Data" section) still names `api.ts` as the place of the data actions. The data actions are now in `api/household`, and `api.ts` re-exports them. I did not change the README.

## Questions for the user
none
