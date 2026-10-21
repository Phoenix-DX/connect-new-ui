# Capture notes (Phase 2)

Decisions and known gaps of the TST captures, for the route specs. Plan: `migration/capture-plan.json` (not in git:
test-account ids). The script `migration/tools/route_discovery.cjs` finds the ids read-only and writes `migration/capture-ids.json`.

## Decisions (user)

| Date | Decision |
|---|---|
| 2026-10-14 | Read-only guard on for every capture; allowed calls listed in the plan `defaults.allowActions` (app start sync calls, reads with non-standard names, `Wrapper_NotificationOpened`). See CLAUDE.md rule 6. |
| 2026-10-14 | Q2 a: real ids found read-only (cached user data or clicking the first list item and keeping the URL). |
| 2026-10-14 | Q3 a: display-only text parameters use fictional values (`ContactName=Test Member`, `EmailTo=member@example.test`…); avatar URL empty so the app shows its own default image. App labels (menu subjects, place names) keep their real value. |
| 2026-10-14 | Q4: phone viewport only (390×844). |
| 2026-10-14 | Q5 a: ConnectShare captured with a fictional `ShareId` (invalid-link path); the valid-link path is not captured and is built from the compiled code. |
| 2026-10-14 | Q7: AcceptPendingPolicies first a (capture the brief empty state), then c after it proved impossible: not captured; built from the compiled code. |
| 2026-10-14 | Q6 b: FeedItemDetail id looked for only among feed-type messages in MessageList (guarded); if none, not captured. The Feed CMS iframe is not clicked (external app, outside the guard). |

## Known gaps

- Post-write states are not captured: the guard blocks the write. Examples: after a user saves a note, marks an item as read,
  sends a form or accepts policies. These states are built from the compiled code and mocks.
- Notifications: TST has `C2NewNotifications` = false, so the bell opens MessageList; Notifications is captured by URL.
- HomeFeed update items mark the item as read before they navigate. The guard blocks this write, so the capture reached households through Locality_Details.
- FeedItemDetail: not captured (Q6 b). None of the first 10 messages in MessageList is a shared feed item. Build it from the compiled code.
- ConnectShare: only the invalid-link path is captured (Q5 a).
- AcceptPendingPolicies: not captured (Q7 c). The test account has no pending policies.
  An empty list makes the screen go back (`PreviousScreen`) about 9 s after the load. This destroys the page during the capture.
  The capture of Login and of the PIN screens includes its layout (`Layout_LoginFlow`).
