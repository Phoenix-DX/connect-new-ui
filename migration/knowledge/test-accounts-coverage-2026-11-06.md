# Test accounts: what each one shows on TST (sweep of 2026-11-06)

Source: `tools/tst/route_discovery.cjs` look-and-click jobs with every account of `.auth/accounts.json` (labels
`<role>#<n>` = position in the owner's file; no user name here). Read-only: sign-in, PIN, page reads. The driver
stopped when the list was done. Three sweeps (morning: 25 accounts; afternoon: the 16 held at a policy, then the two
new accounts and the two that had failed to sign in).

| Kind of data | Accounts that have it | Routes it unlocks |
|---|---|---|
| Pending policy at sign-in | global#5 (first sweep only), local#1–8, regional#2, #3, #5–8 | AcceptPendingPolicies (captured with global#5) |
| Orbit event (OrbitLanding card) | global#1, regional#1 | EventDetail, MilestoneDetail (captured with global#1), ContactByEmailOrbitHelpdesk |
| LDM event (LDM_MyEvents_V2 card) | global#1–7, #9, #10, regional#1, #4, extra#1 | LDM_EventDetail_V2 (captured with global#1) |
| Assemble meeting (AssembleSummaryCard) | global#9, global#10 (the two accounts added in the afternoon) | AssembleDetail (captured with global#10, via click from AssembleEvents) |
| Admin event (OrbitAdminLanding) | none | OrbitAdminEventDetail, OrbitAdminMilestones, OrbitAdminMilestoneDetail |
| Booklet, Documents, QR code, Transport entries in EventDetail | none (global#1 and regional#1 have no such entry) | EventBooklet, ViewDocuments, QRCodeGenerate, TransportDetail |
| Sign-in | global#3, #7 and #10 need the second or third password of the list (passwords are tried in order since the afternoon); one extra user name the owner gave is rejected by the identity provider with every password |

Caveats:
- An account with a pending policy shows the policy block in place of every screen until the policy is accepted.
  Accepting is a write. The owner allowed it for two accounts, but the automated tick did not enable the Continue
  button (`IsAllSelected` stays false). Nothing was written. global#5 and global#6 lost the block on a later
  sign-in by themselves. The other accounts with a policy were not seen past it.
- Guest arrangements (MilestoneDetail → guest card) did not open in the headless run: the accordion content stays
  hidden. The LDM contact and message entries (LDM_EventDetail_V2) did not navigate either.
- Household_Relations: the household member list of HouseholdDetails and HouseholdCarousel stays hidden behind a
  skeleton overlay in the headless run; no member with relations was found.

How to reuse: `node tools/pipeline/batch_capture.cjs login --auto --account <label> --storage .auth/state-<label>.json`,
then `batch_capture.cjs run … --storage .auth/state-<label>.json --only <Route>`. The sweep jobs and the driver are
one-off scripts (scratchpad, not committed).
