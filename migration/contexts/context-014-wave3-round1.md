# context-014 · Wave 3 round 1: Services, Search, MyEntertaining finished

Date: 2026-10-15 · Phase: 6–8 (wave 3) · Status: current

## Result
- Services, Search, MyEntertaining `built` (user "confirm"); AcceptPendingPolicies re-stamped after typed exceptions.
  9 routes finished. Parity 0 in every state; regression parity clean.
- Foundation in the round: CR-Services-1 (screen without CommonUI → no Access Restricted, no lock layer; inactivity
  timer port), CR-Search-1 (recent searches in IndexedDB), CR-Search-3 (signed-in app start waits for the first screen
  before Sync_Info_GetMain), dev server serves original `/UBTConnect/img/*` (references no longer show broken images;
  logo-replay exemptions no longer fire), parity `ignoreSubtrees.idRegex`.

## Decisions (user, 2026-10-15)
- MyEntertaining Q1 stand-in, Q2 MYENT-D8B-IFRAME; Services Q1 re-record (Id/IconId/ConnectServiceId kept, reviewed),
  Q2 keep the original drag bug (B3 in app/docs/known-original-bugs.md), Q3 dev-server images instead of an exemption;
  Search Q4 focus-border exemption (ignoreSubtrees by id), Q1/Q2/Q3/Q5 resolutions confirmed.

## Facts learned
- Original flows delegate errors to App_Common.handleError (App_Services.controller.js).
- Route agents kept calling present sources "missing": `migration/AGENTS.md` now lists where all compiled code lives.

## Next
- Round 2: MessageList, Notifications, Notes (full); round 3: MessageDetail, Updates_SingleList, FeedItemDetail.
