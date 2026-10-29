# Item 10 build: OrbitAdminMilestoneDetail

No-capture route (user decision I10-3 (a), 2026-10-29). Built from the compiled TST code in
`migration/screens/OrbitAdminMilestoneDetail/sources/` (screen, ScreenBlock_AdminMilestoneDetail, Popup_QRCodeScan_Milestone)
and `migration/runtime-sources/` (BL / IS records, `moduleinfo.json` static entities). Spec:
`migration/screens/OrbitAdminMilestoneDetail/route-spec.md`. Pipeline: `route.py step … spec`, `spec-done`, `step … build`
done; `route.py ready` not run (brief).

## Files

Code (new):
- `app/src/pages/OrbitAdminMilestoneDetail/OrbitAdminMilestoneDetailPage.tsx`, `inputs.ts`, `staticEntities.ts`, `mocks.ts`
- `app/src/pages/OrbitAdminMilestoneDetail/hooks/useAdminMilestoneDetail.ts`, `adminMilestoneDetailState.ts`, `adminMilestoneDetailActions.ts`
- `app/src/pages/OrbitAdminMilestoneDetail/components/AdminMilestoneDetailView.tsx` (the block), `Popup_QRCodeScan_Milestone.tsx`, `actions.ts`
- `app/src/api/event/adminMilestoneDetail.ts` (interim form, I10-6): Get_MilestoneInformation and GetScanMilestoneQRCode
- `app/src/components/orbit/OrbitErrorMessage/` (block, index, README) and `app/src/components/orbit/OrbitPopup/` (Popup widget, index, README)

Code (changed): `app/src/api/event/index.ts` (one line: `export * from './adminMilestoneDetail';`, after the line of the
OrbitAdminMilestones agent).

Tests (written first): `OrbitAdminMilestoneDetail.test.tsx` (page + MSW, 7), `components/AdminMilestoneDetailView.test.tsx` (8),
`hooks/adminMilestoneDetailActions.test.ts` (9), `api/event/adminMilestoneDetail.test.ts` (3),
`components/orbit/OrbitErrorMessage/OrbitErrorMessage.test.tsx` (2).

Docs: `migration/screens/OrbitAdminMilestoneDetail/route-spec.md`, this note.

Mocks: `pages/OrbitAdminMilestoneDetail/mocks.ts`. Data: the admin milestones of
`app/src/mocks/fictional/orbitAdminMilestones.ts` (written by the OrbitAdminMilestones agent; read only here, so the
entry and the detail share the ids) and the attendees of `orbitAdmin.ts`. GetScanMilestoneQRCode is a stateful mock
(collection `orbitAdminMilestoneCheckIns`): first scan CheckedIn, the next scan of the same attendee
AlreadyCheckedInForMilestone, a non-attendee NotAllocated. Scenarios (`?mock=`): real, noqrcode, empty (unknown
milestone), notallocated, loading, error; the scanner scenarios of the shared fictional scanner (scanwrongevent,
scanunreadable, scancancel). Never called on TST.

## Interim contract (I10-6)

`api/event/adminMilestoneDetail.ts`: two `@ts-expect-error` lines (`ScreenBlock_AdminMilestoneDetail/DataActionGet_MilestoneInformation`,
`ActionGetScanMilestoneQRCode`), hand-written wire types (`MilestoneInformationWire`, `ScanMilestoneQRCodeWire`,
`ScanMilestoneQRCodeInputsWire`; ScannedQRCodeInfo reuses the contract type of ActionGetScanEventQRCode, same BL
structure). The mocks use `statefulHandler` (untyped). GetMemberByMemberId is in the contract (`api/member` fetchMember).

## Parity

None: no capture. The user reviews by eye: `/UBTConnect/OrbitAdminMilestoneDetail?In_EventId=7301&In_MilestoneId=930101&…`
(normally opened from OrbitAdminMilestones).

## Differences from TST, with evidence

- Same markup and logic as the compiled block; no difference in behaviour found.
- Error texts of a failed check-in are fictional ("Guest has already checked in for this milestone.", "Guest is not
  allocated to this milestone."): the server texts are unknown (Q1). QRCodeErrorTypeId values are live TST
  (`moduleinfo.json` entity a87e8dcc…).
- Admin milestone type names come from the fictional file of the OrbitAdminMilestones agent (Q2).
- Get_MilestoneInformation sends the seven inputs + IsFetchingData, IsProcessingData, QRCodePopupOpened, the same rule
  as Get_EventInformation of OrbitAdminEventDetail.

## Follow-ups for the orchestrator (wave rule: another route's page is not edited)

1. OrbitAdminEventDetail: switch `components/OrbitErrorMessage.tsx` and `components/AdminPopup.tsx` to
   `components/orbit/OrbitErrorMessage` and `components/orbit/OrbitPopup` (same markup, props renamed only for the
   popup type), then delete its copies.
2. Move `deserializeQRCodeInformation`, `containsIgnoreCase` (both hooks/*Actions.ts) and `getFormattedLocalDateTime`
   (both components/actions.ts) of the two admin pages to `lib/orbit/` (lib is outside the route scope).
3. After the contract regeneration: remove the two `@ts-expect-error` lines and type the wires from the contract.

## Questions

- OrbitAdminMilestoneDetail Q1 (fact, topic "server: milestone check-in"): does GetScanMilestoneQRCode record the
  check-in, and which Status / ErrorMessage / QRCodeErrorTypeId does it return per status; what does
  Get_MilestoneInformation return for an unknown milestone. Options: a) MCP (DEV) lookup; b) keep the fictional texts.
  Recommendation: a.
- OrbitAdminMilestoneDetail Q2 (fact, topic "server: admin milestone types"): Name / Type of the six admin milestone
  types in Sync_Info_GetMain. Options: a) MCP lookup; b) keep the fictional names. Recommendation: a.
- Barcode plugin: no new decision; the ADR-11 adapter and the fictional scanner of OrbitAdminEventDetail Q1 (A) cover it.

## Checks (from `app/`)

- `npx tsc --noEmit`: no error in the files of this route (the errors left are in `api/bookmark/bookmarkCards.ts`,
  `pages/Bookmarks/`, `lib/legacyShared/actions.test.ts` of other agents).
- `npx eslint`, `npx prettier --check` on the changed files: clean.
- `npx vitest run src/pages/OrbitAdminMilestoneDetail src/api/event src/components/orbit/OrbitErrorMessage src/mocks/handlers.test.ts`:
  9 files, 177 tests passed, no "Errors" line. One combined run failed all 7 page tests at 0 ms while other agents
  wrote shared files; the three runs after it passed.
- `npm run arch`: one error, not of this route (`components/layout/OrbitBlankLayout/OrbitBlankLayout.tsx → legacy/os/bodyTheme.ts`).
  The hook takes `isSystemException` and `UserException` from `platform/feedback/flowErrors` (rule 9).

Tool calls: 85.
