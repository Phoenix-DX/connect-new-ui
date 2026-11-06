# context-083: confirms, account sweep and real captures (2026-11-06)

## Result
- Re-stamped after the user's `confirm`: Bookmarks, NotificationDetails, OrbitAdminMilestoneDetail (`restamp.py`
  with `--no-scope-guard`; spec hashes re-recorded; a null-date literal moved out of the NotificationDetails page).
  Search waits for the user's fixtures review (two fixtures changed in the drift wave `f32ebfa1`).
- Account sweep on TST (read-only) over the 25 accounts of `.auth/accounts.json`, stopping when the union covers the
  missing data kinds: the table is in `migration/knowledge/test-accounts-coverage-2026-11-06.md`. Two accounts
  cannot sign in. 15 are held at a pending policy. Only global#1 and regional#1 have an Orbit event. No account has an
  admin event, a Booklet, Documents, QR code or Transport entry, or an Assemble meeting.
- Captured with real data: AcceptPendingPolicies (global#5), EventDetail, MilestoneDetail, LDM_EventDetail_V2
  (global#1, ids from the sweep; the capture plan rows carry them). Their parity against the real captures fails:
  the React mocks have no data for those ids (NoInformation, ErrorScreen), AcceptPendingPolicies has a new heading.
- Household_Relations: the member lists stay hidden behind a skeleton overlay in the headless run (ten click
  variants); no member with relations found. The baseline of 2026-10-29 stays.
- Tools: `batch_capture.cjs login --account <label>`; `route_discovery.cjs --storage`, job options `settleMs`,
  `force`, `dispatch`, pre-click objects, fuller failure reasons.

## Decisions (who, date)
- User 2026-11-06: `confirm` for the four routes. Fable may probe TST for a member with relations. Try every account
  and capture what is reachable. Stop the sweep as soon as the accounts together cover what is missing.

## Facts learned (evidence)
- TST lists (households, event cards) load behind a `SkeletonSection` that intercepts pointer events in headless
  Chromium; `dispatchEvent('click')` on the card reaches the handler (`route_discovery.cjs` `dispatch`).
- EventDetail, MilestoneDetail and LDM_EventDetail_V2 open with their id parameters only (text parameters left out).
- The LDM event card navigates from its `EventCard_Info_V2` block (`eventClicked` → `NavigateTo_EventDetail`).

## Files changed
- `app/src/pages/NotificationDetails/NotificationDetailsPage.tsx`; `tools/parity/restamp.py`,
  `tools/pipeline/batch_capture.cjs`, `tools/tst/route_discovery.cjs`; route state of the three re-stamped routes;
  captures, analysis, manifests and parity of the four routes; `migration/sources/`; knowledge page above;
  `README.md`, `tools/README.md`.

## Open issues
- The fix wave of the four routes against their real captures (estimate 2–3 h): waits for the user.
- Search fixtures review; Household_Relations member; the routes no account unlocks (TST data to create).

## Next
- The user's answer on the fix wave; then the fixtures review.
