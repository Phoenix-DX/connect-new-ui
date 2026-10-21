# context-015 · Wave 3 finished (9 screens); auto-accept window

Date: 2026-10-15 · Phase: 6–8 (wave 3) · Status: current

## Result
- Wave 3 finished: Services, Search, MyEntertaining, MessageList, Notifications, Notes, MessageDetail, Updates_SingleList,
  FeedItemDetail (no capture). 15 routes `built`; parity 0 in every captured state; regression clean.
- Foundation in rounds 2–3: OSList / OSListItem shared (P-LIST reference) with the platform swipe actions,
  synchronizeNumberUnreadMessages export, search-history and recent-search IndexedDB adapters, UnreadWhatsNewsNumber,
  dev server serves `/UBTConnect/img/*` and `/UBT_CW/img/*`. Parity tool: `callOrderFree`, per-state `scenarios` and
  `latencies` in the capture plan, `ignoreSubtrees.idRegex`, one-sided and pseudo-element masks, style `props`.

## Decisions
- User (2026-10-15): round-2 answers (test labels reused, GetDateRanges re-recorded, UBT_CW logos fetched, call-order
  and pull-to-refresh exemptions, Notes empty scenario + filter mock, OSList, swipe, MessageList filter/search).
- **Auto-accepted in the user's window 11:24–14:24 +07** (all recorded "auto-accepted"/"auto-confirmed"):
  Notifications Q5 (chose per-state latency 600 ms instead of the recommended exemption: an exemption could not target
  the footer ::before only), FeedItemDetail no-capture + Q1 A, MessageDetail Q1–Q3 A (SPINNER-ROTATION-PHASE),
  Updates_SingleList Q1–Q2 A (slider offline + loading pixel), MessageList Q7 A (search/filter captured read-only) and
  Q8–Q12 A (focus, data drift, Animate phase, sort radio, call order); reviews of Notifications, Notes, FeedItemDetail,
  MessageDetail (+ formatting re-stamp), Updates_SingleList, MessageList confirmed automatically.

## Facts learned
- A monthly spend limit stops agents even with credits left (raise it at claude.ai settings/usage).
- route.py treats a review answer as a confirmation only when it starts with "confirm".

## Next
- Wave 4 (13 screens, 46 blocks) — started inside the window; after 14:24 +07 decisions go back to the user.
