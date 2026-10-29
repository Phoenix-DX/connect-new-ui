# Item 10: dedupe of the Orbit admin twins (jscpd gate)

Decision: auto decision row 13 of `migration/clarify/auto-decisions-2026-10-29.md` (Fable), shapes 1, 2 and 5:
OrbitAdminEventDetail against OrbitAdminMilestoneDetail. The other shapes are in `item10-dedupe-notes-layout.md`.
Date: 2026-10-29.

## jscpd

- Before: 50 clones, 952 lines (0.65 %), over the threshold 0.57 %. 9 of these clones (201 lines) were in the Orbit
  admin twins.
- After: 35 clones, 635 lines (0.43 %), under the threshold. This total also has the notes and layout dedupe of the
  other agent (6 clones, 116 lines), which ran at the same time. 50 - 9 - 6 = 35; 952 - 201 - 116 = 635.
- No file of the two pages and no new shared module is in a clone after the change (`grep` of the jscpd output: 0 rows).

## Pairs

| Shape | Pair                                                       | Shared module                                                                                                                                                                                                                                                                                                                                                  | What varies                                                                                                                                                                                                                                                                                                                                                                                                                                                           | jscpd lines before → after        | Tests (new)                        |
| ----- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ---------------------------------- |
| 1     | `AdminEventDetailView.tsx`, `AdminMilestoneDetailView.tsx` | `components/orbit/AdminDetailScaffold` (`AdminDetailScaffold`: OSBlock, OrbitLayout `orbit-detail`, MenuIcon `$b2`, title with the flag icon, skeleton `$b5`, NoInformation_Orbit `$b4`, Loading spinner, Scan QR Code button, `RootPlaceholder_QRCode` > `Root_QRCode` > OrbitPopup `Popup_QRCode`, OrbitErrorMessage `$b6`; `AdminDetailRow`: icon and text) | `blockName`, `title`, `menuAction`, `rows` (event: 4 fixed rows; milestone: 3 rows, each when its value is set, with `typeRowClass` and `descriptionRowClass`), `renderPopup(id)` (the popup gets the id `<prefix>-$b3`)                                                                                                                                                                                                                                              | 96 (4 clones: 39, 23, 22, 12) → 0 | `AdminDetailScaffold.test.tsx` (5) |
| 2     | `Popup_QRCodeScan.tsx`, `Popup_QRCodeScan_Milestone.tsx`   | `components/orbit/QRCodeScanResult` (`QRCodeScanResult`: name or "Participant", photo with the signed URL or the placeholder, the bold details container, "Has Checked in" with a check or the error with a cross, Done; `ScanDetailLine`: a line when its value is not empty)                                                                                 | `blockName`, `details`. Event: name and date `(false, true, true, false, false)`, Locality, Country, Role and GMP Tag with `white-space-nowrap`, the Seats list. Milestone: name and date `(false, true, false, true, false)`, Description, Locality, Country, Role, Row and Venue (`full-width display-flex`), GMP Tag.                                                                                                                                              | 49 (2 clones: 18, 31) → 0         | `QRCodeScanResult.test.tsx` (3)    |
| 5     | `useAdminEventDetail.ts`, `useAdminMilestoneDetail.ts`     | `containers/AdminQRCodeScan` (`useAdminQRCodeScan(block, strategy)`: OnToggle_PopupQRCode, OnHandle_ScanCode, OnClick_ScanQrCode, OnHandle_Scan…Done, OnHandle_OrbitErrorMessage and the 3 widget handlers)                                                                                                                                                    | The strategy: `checkIn` (GetScanEventQRCode or GetScanMilestoneQRCode), `scannedUserOf` (the answer's fields; milestone also RowAllocation, SeatingPlan), `scannedMember` (milestone: MilestoneDescription), `emptyScannedUserPatch` (milestone also clears the row and the seating plan), `adminMemberId` (event `textToIntegerToLongInteger`, milestone `textToLongIntegerValidated`), `onLaunch` and `onSuccess` (event only: LaunchQRCodeScanner, QRCodeScanned). | 56 (3 clones: 15, 17, 24) → 0     | `useAdminQRCodeScan.test.ts` (6)   |

Notes:

- Shape 5 is in `containers/`, not in `components/orbit/`: the flows call `api/` and `platform/`, and rule 4 forbids
  these imports in `components/`. A page does not import another page (rule 3). The hook calls no React hook; the page
  hook calls it on each render with the handles of its `useFlowState`, as the flows were defined before.
- The flow scope of item 8 does not change: OnToggle_PopupQRCode and OnHandle_ScanCode are `flow.own` (R3); the
  barcode plugin, GetMemberByMemberId, the signed image URL and the check-in are not wrapped (R2); the widget
  handlers use `flow.run` (R6). The order of the state writes does not change. The `onSuccess` audit event comes
  after OnToggle_PopupQRCode, as before.
- The check-in `await fetchScan…QRCode(…)` stays in the strategy of each page hook. `check-flow-fetch` still finds
  both calls, so its ALLOWED rows are not stale.
- Each block keeps what only it has: `onReady` and RefreshData, the state file, `MenuAction_Auto`, `ScanClient`, the
  audit events (`adminEventDetailActions.ts`).
- The ScanBarcode inputs CameraDirection.BackCamera and ScanOrientation.Portrait (both 1) moved from the two
  `staticEntities.ts` files to the shared hook. The event hook imported `isSystemException`, `UserException` and
  `exceptionMessage` from `legacy/os` (a rule 9 violation in the baseline). The shared hook takes the same functions
  from `platform/feedback/flowErrors` and has its own `exceptionMessage` (the same body). The baseline row is deleted.
- `NO_SCAN_ERROR` of the two state files is no longer exported (only the initial state uses it; knip).
- Source size is about the same (1041 lines before, 1053 after, with the doc comments of the 3 shared modules); the
  duplicated lines go from 201 to 0.

## DOM

A temporary test rendered both views in 24 states (10 event, 14 milestone: initial, fetching, fetched, processing,
no QR code, no date, no type, no description, scan success, scan without name, empty scanned user, failed check-in,
error popup) with the date fixed. It wrote `document.body.innerHTML`. The output after each shape was byte-identical
to the output before the change (`cmp`). The test file was deleted after the comparison.

## Checks

| Check                                                                                                                    | Result                                       |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| Tests of both pages after each shape                                                                                     | pass (shape 1: 76, shape 2: 79, shape 5: 85) |
| `npx vitest run src/pages/OrbitAdminEventDetail src/pages/OrbitAdminMilestoneDetail src/components/orbit src/containers` | 48 files, 271 tests, pass                    |
| `npx tsc --noEmit`                                                                                                       | pass                                         |
| `eslint` and `prettier --check` on the changed files                                                                     | pass                                         |
| `npm run arch`                                                                                                           | no violations, 139 known                     |
| `npm run arch:baselines`                                                                                                 | 139 rows, 0 stale; 72 warnings, 0 new        |
| `npm run unused`                                                                                                         | 1048 baseline rows, 0 new, 0 stale           |
| `node build/check-flow-fetch.mjs`                                                                                        | ok (30 awaits, 17 rows)                      |
| `npm run dup`                                                                                                            | 35 clones, 0.43 %, under 0.57 %              |
| Parity                                                                                                                   | not run: these routes have no capture        |

## Files

- New: `app/src/components/orbit/AdminDetailScaffold/` (`AdminDetailScaffold.tsx`, test, `index.ts`),
  `app/src/components/orbit/QRCodeScanResult/` (`QRCodeScanResult.tsx`, test, `index.ts`),
  `app/src/containers/AdminQRCodeScan/` (`hooks/useAdminQRCodeScan.ts`, test, `index.ts`).
- Changed: `app/src/pages/OrbitAdminEventDetail/` (`components/AdminEventDetailView.tsx`,
  `components/Popup_QRCodeScan.tsx`, `hooks/useAdminEventDetail.ts`, `hooks/adminEventDetailState.ts`,
  `staticEntities.ts`), `app/src/pages/OrbitAdminMilestoneDetail/` (the same 5 files),
  `app/.dependency-cruiser-known-violations.json` (1 stale row), `app/docs/refactor/duplicates.md` (3 rows).

## Open issues

- The two new component folders have no `README.md` and no stories, unlike most folders of `components/orbit/`.
- `components/orbit/OrbitPopup/README.md` still says that OrbitAdminEventDetail has its own `AdminPopup`. That was not
  true before this change either.
