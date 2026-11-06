# Test accounts: what each one shows on TST (sweep of 2026-11-06)

Source: `tools/tst/route_discovery.cjs` look-and-click jobs with every account of `.auth/accounts.json` (labels
`<role>#<n>` = position in the owner's file; no user name here). Read-only: sign-in, PIN, page reads. The driver
stopped when the list was done; no account covered the last five kinds.

| Kind of data | Accounts that have it | Routes it unlocks |
|---|---|---|
| Pending policy at sign-in | global#5, #6, local#1–8, regional#2, #3, #5–8 (15) | AcceptPendingPolicies (captured with global#5) |
| Orbit event (OrbitLanding card) | global#1, regional#1 | EventDetail, MilestoneDetail (captured with global#1), ContactByEmailOrbitHelpdesk |
| LDM event (LDM_MyEvents_V2 card) | global#1, #2, #4, regional#1, #4 | LDM_EventDetail_V2 (captured with global#1) |
| Admin event (OrbitAdminLanding) | none | OrbitAdminEventDetail, OrbitAdminMilestones, OrbitAdminMilestoneDetail |
| Booklet, Documents, QR code, Transport entries in EventDetail | none (global#1 and regional#1 have no such entry) | EventBooklet, ViewDocuments, QRCodeGenerate, TransportDetail |
| Assemble meeting card (AssembleEvents) | none (the list is empty for every account) | AssembleDetail |
| Sign-in failed (identity provider: unknown user name) | global#3, global#7 | – |

Caveats:
- An account with a pending policy is held on AcceptPendingPolicies until the policy is accepted. Accepting is a
  write, so the sweep never did it: for those 15 accounts the Orbit, Assemble and LDM screens were not visible.
  The owner can accept the policies by hand in a browser; after that, run the sweep again for them.
- Guest arrangements (MilestoneDetail → guest card) did not open in the headless run: the accordion content stays
  hidden. The LDM contact and message entries (LDM_EventDetail_V2) did not navigate either.
- Household_Relations: the household member list of HouseholdDetails and HouseholdCarousel stays hidden behind a
  skeleton overlay in the headless run; no member with relations was found.

How to reuse: `node tools/pipeline/batch_capture.cjs login --auto --account <label> --storage .auth/state-<label>.json`,
then `batch_capture.cjs run … --storage .auth/state-<label>.json --only <Route>`. The sweep jobs and the driver are
one-off scripts (scratchpad, not committed).
