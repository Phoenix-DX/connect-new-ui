# context-086: two more real captures through in-app paths (2026-11-06, evening)

## Result
- The user asked to use the account list for the open items. The compiled code and the captured labels were read
  first (probe stop rule). Two routes without a capture were reached with global#1 through in-app paths and captured
  (`via` rows in the capture plan): GuestArrangements (MilestoneDetail → first room accordion → "Guest Arrangements")
  and ContactByEmailLDMCoordinator (LDM_EventDetail_V2 → "Contact Coordinator" popup → "Email"). Both rebuilt by
  route agents; parity clean; full sweep 68 of 68; CI green (4832 tests).
- Shared block fixed: `SectionExpandable` ran its OnParametersChanged effect again on the StrictMode double mount.
  That left an item open from the start in the animating state. The effect now runs only on a real input change.
- Still without a capture, with the data condition (knowledge page, section "Entry points"):
  - EventBooklet: flag `getHasOrbitEventBooklet` false on TST;
  - QRCodeGenerate, ViewDocuments: the event needs `hasQRCode` / documents; TransportDetail: a transport milestone;
  - OrbitAdmin*: an admin event; EmailContact, EmailTarget, LDM_Email_V2, ContactByEmailOrbitHost, PassportScan,
    FeedItemDetail. Household_Relations: the member click of
  HouseholdDetails_Block runs only with `IsEnabled`; Profile and a guest's household did not navigate headless.
- Other accounts: the user's extra account signs in with the second password (Assemble and LDM only). The direct
  URL of regional#1's event shows nothing outside the OrbitLanding navigation.

## Decisions (who, date)
- User 2026-11-06: use the account list for the pending items. Fable: exemption copies of the HelpersDetail
  capture-path rules for GuestArrangements; Legacy body theme and dropped subject value for the LDM coordinator form.

## Files changed
- GuestArrangements and ContactByEmailLDMCoordinator: captures, analysis, mocks, tests, specs, parity, route-check;
  `app/src/mocks/fictional/orbit.ts`; `app/src/components/ui/legacy/SectionExpandable`;
  `migration/parity-exemptions.json`; knowledge coverage page; ledger.

## Open issues
- The user's `confirm` of GuestArrangements and ContactByEmailLDMCoordinator (then `restamp.py`).
- The twelve routes above: TST data or an account placed in such an event.

## Next
- The confirms; then a fresh session for the next phase (context notes carry the state).
