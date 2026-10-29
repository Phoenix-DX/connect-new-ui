# Item 6: the inputs of DataActionGetShare: build note (2026-10-28)

- Design: `../review/item6-solution.md` §1-7, corrections §8, decisions §9 (user, 2026-10-28). Facts S1-S5, G1-G2:
  `../review/item6-getshare-inputs.md`.
- The paths below are relative to `app/` unless they start with `migration/`.
- Nothing is committed. No parity sweep and no `npm run ci` were run (the orchestrator runs them).

## Files

Changed (code):

- `src/api/share/types.ts`: `ShareableUpdateItem` (the 13 fields of UI_UpdateItem), `ShareableObject`,
  `SharedObjectDetailVariables`. `SharedObjectDetailCallInputs` is gone. `ShareableObject` comes from the contract
  through `ActionInputs` of the DataActionGetShare path (§8 correction, rule 7). No import of `@/api/schema`.
- `src/api/share/mapper.ts`: `emptyShareableUpdateItem()` (the 13 defaults) and `toSharedObjectDetailVariablesWire`
  (the four block variables, every attribute of both records). The wire type is local to the file (see D1).
- `src/api/share/repository.ts`: `fetchSharedObjectDetail(variables)` sends `toSharedObjectDetailVariablesWire(variables)`.
- `src/api/share/index.ts`: exports `emptyShareableUpdateItem`. The types go out through `export type *`.
- `src/pages/MessageDetail/hooks/shareObjectDetailState.ts`: imports the type and the factory from `@/api/share`.
  OnInitialize uses the factory. `prepareSharedObject` sets the 13 fields of an Update (O1).
- `src/pages/MessageDetail/hooks/useShareObjectDetail.ts`: `refreshGetShare` passes the two locals from `latest.current`.

Changed (tests): `src/api/share/mapper.test.ts`, `src/pages/MessageDetail/components/ShareObjectDetail_ExtendedShare.test.tsx`,
`src/pages/MessageDetail/MessageDetail.test.tsx`.

Unchanged: `src/api/openapi.yaml`, `src/api/schema.d.ts`, the mocks, the view `ShareObjectDetail_ExtendedShare.tsx`.

## Tests (written first)

All six new or changed assertions failed first: three on the missing mapper functions, three on the two-key request.

| File | Tests | Covers |
|---|---|---|
| `api/share/mapper.test.ts` | +3 | the four keys and their order; every attribute of both records; the defaults ("", `'0'`, `'1900-01-01'`); no `DataFetchStatus` key; an empty Long Integer goes as `'0'` |
| `ShareObjectDetail_ExtendedShare.test.tsx` | 1 changed, +1 | first fetch: the Loading card and the empty record (S4); Update → new ShareId: the Update record (S5, O1); Household → new ShareId: the Household card and the unchanged Update record (§2.4) |
| `MessageDetail.test.tsx` | 1 changed | MSW `recordBodies`: the body has exactly the four keys, 6 and 13 attributes, the Loading card, `'0'` and the null date (G1 on the wire) |

## Visible behaviour changes

None. The view reads the same 7 fields. The mock answers by ShareId only (`pages/MessageDetail/mocks.ts:362`). The
audit call and `shareClick` read `state.share`, which did not change. Only the request body of DataActionGetShare
changes. `window.__osCalls[].inputNames` now has four names (§7 of the design).

## Differences from the design text

| # | Design text | Built, with evidence |
|---|---|---|
| D1 | §2.3: `export type SharedObjectDetailVariablesWire`. | The type is not exported. Only `mapper.ts` uses it. An unused export adds a knip row (`npm run unused`). |
| D2 | §2.3: `UpdateItemId` and `HouseholdId` go as the state has them. | `osLong(x) ?? '0'` on both. TST sends a Long Integer with `longIntegerToText` (§8, O2), so never `""`. The answer keeps `HouseholderId` as sent (`api/share/mapper.ts`, `toSharedObjectDetail`), and the project has seen `""` for a null HouseholderId (`toShareDetails`). See Q1. |
| D3 | §2.2: the field order of `ShareableUpdateItem`. | The order of the existing UI_UpdateItem wire mapper (`api/update/mapper.ts:87-101`). The JSON key order of a record has no effect. The tests compare values. |
| D4 | §6 test 2: one new test with two fetches. | The new test has a third fetch (Update → Household → any). It proves that a non-Update keeps the record (§2.4). |

## Not built, and why

- Share_UI.ShareObjectDetail: out of scope (decision O3 a, PD9).
- The `lib/ubtConnectUtils/structures.ts` alias `UI_ShareableObject_Generic`: the page keeps it (§2.2, §7 follow-up).
- The ledger row, the context note, the parity sweep and `npm run ci`: the orchestrator does them.

## Questions

1. Q1 (D2): keep the `'0'` guard for an empty Long Integer in the request? Options: a) keep it, so the body always
   matches TST (O2); b) send the state value as it is (design §2.3). Recommendation: a. The server ignores both
   fields (S2), so neither option has a visible effect.

## Checks (from `app/`)

| Command | Result |
|---|---|
| `npx tsc --noEmit` | pass, 0 errors (one test cast fixed for `noUncheckedIndexedAccess`) |
| `npx eslint <9 changed files>` | pass, 0 problems |
| `npx prettier --check <9 changed files>` | pass |
| `npx vitest run src/api/share src/pages/MessageDetail` | 11 files, 113 tests pass (before: 109) |
| `npx vitest run` (all) | 686 files, 4441 tests pass (before: 4437 at 5b5c41f6); **Errors: 0** (no "Errors" line) |
| `npm run arch` | pass, no new violation (144 known) |
| `npm run unused` | pass: 1089 rows, 0 new, 0 stale |
| `npm run dup` | pass, 0.43 % (35 clones, as before) |

The full run prints one jsdom line on stderr: "Not implemented: navigation to another Document". It is not an
error, and it was there before. `npm run unused` prints one knip configuration hint for
`src/components/ui/DropdownSearch/index.ts`. This change does not touch that folder.

## Orchestrator checks (2026-10-28)

- Review of the diff against the design. Q1 (D2, the `"0"` guard) follows O2 of the design §8, which the user
  approved: TST sends a Long Integer with `longIntegerToText` and never sends `""`. No new decision.
- `npm run ci` passed: 686 files, 4441 tests, no "Errors" line, build OK, 0 new unused exports.
- Parity sweep of the 64 routes on port 5174 (dev server of this repo): 64 of 64 clean.
