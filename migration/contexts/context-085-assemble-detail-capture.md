# context-085: more accounts, AssembleDetail captured and rebuilt (2026-11-06, afternoon)

## Result
- `.auth/accounts.json` now lists passwords and PINs; `site_auth.cjs` tries them in order (a rejected password or a
  PIN that does not unlock moves on). Two more global accounts in the list; global#3, #7 and #10 sign in with the
  second password. One user name the owner gave sign in with the second password too (label extra#2, not in the file).
- Coverage after three sweeps (`migration/knowledge/test-accounts-coverage-2026-11-06.md`): Assemble meetings on
  global#9, global#10 and extra#2; Orbit events on global#1 and regional#1 only; no account has an admin event or a
  Booklet, Documents, QR code or Transport entry. The policy block held most accounts on the first sign-in. The
  automated accept (allowed by the user for two accounts) never enabled the Continue button. Nothing was written.
- AssembleDetail captured with a meeting of global#10 (`via` click from AssembleEvents, `dispatch`) and rebuilt by a
  route agent: parity clean. Two shared blocks fixed from the capture: `ResultItemBadge` (unit-less size as px) and
  `NoteList` (minimum height 44 px). Three masked-text exemptions. Full sweep 68 of 68 clean, CI green (4831 tests).
- MCP (Service Studio, DEV) reachable over HTTP with a session token: it reads the model only (ModelQL), no data rows.

## Decisions (who, date)
- User 2026-11-06: passwords as a list; skip an account that cannot sign in; try the accounts the owner names.
  Accept the policy for one or two test accounts: not done, the automation did not enable the button.
- Fable: stop the second sweep after 9 accounts (every one of them still showed the policy block). Exemptions for
  the masked-text artefacts of AssembleDetail, the same family as the existing masked-text rules.

## Facts learned (evidence)
- `Policy_Custom_AcceptPendingPolicies.mvc.js`: the Continue button is enabled by `IsAllSelected`. The action
  `ListAllSelected` sets it after `SelectCheckboxOnChange`. A dispatched or forced click on the checkbox icon changes
  the icon but not that variable.
- `AssembleDetail` opened by URL shows the error block: the preload object of the list is missing. The capture plan
  opens it `via` the AssembleEvents card (`dispatch`, `settleMs`).
- OrbitLanding of extra#2: an event card appears only after a household member is selected
  (`Household_Members_Selection`); its EventDetail shows NoInformation.

## Files changed
- `tools/pipeline/site_auth.cjs`, `batch_capture.cjs` (via options), `tools/tst/route_discovery.cjs` (dumpWaitMs);
  AssembleDetail: page, components, mocks, tests, spec, parity, route-check; `app/src/mocks/fictional/assemble.ts`;
  `app/src/components/ui/ResultItemBadge`, `components/note/NoteList`; `migration/parity-exemptions.json`;
  knowledge coverage page; ledger; README and skill texts for the password list.

## Open issues
- Routes still without a capture: OrbitAdminEventDetail, OrbitAdminMilestones, EventBooklet, ViewDocuments,
  QRCodeGenerate, TransportDetail, GuestArrangements, EmailContact, EmailTarget, LDM_Email_V2,
  ContactByEmailLDMCoordinator, ContactByEmailOrbitHost, PassportScan, FeedItemDetail (TST data needed).
- Household_Relations member; the `confirm` of the five routes rebuilt today to real captures.

## Next
- The user's `confirm` of AcceptPendingPolicies, EventDetail, MilestoneDetail, LDM_EventDetail_V2, AssembleDetail;
  TST data or an account for the routes above.
