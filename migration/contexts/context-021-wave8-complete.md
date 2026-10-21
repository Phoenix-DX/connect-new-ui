# context-021 · Wave 8 complete: 64/64 routes (2026-10-16, auto mode)

## Result
- **All 64 in-scope routes finished**: the 41 original screens plus the 23 wave-8 routes (Orbit 12 + 2 contact forms +
  EmailContact, LDM V2 3 + ContactByEmailLDMCoordinator + EmailTarget, Assemble 3). EventBooklet came last, after F17.
- Foundation since context-020: F16 (cached user identity merged at read time; OrbitLanding member order) and F17
  (CR-EventBooklet-1/2: booklet max rows in the contract, now 165 operations, plus Orbit client variables and
  SetBookletMaxRows; OSUI dropdown client API DropdownClear / ClearValidation / TogglePopup / Close, and
  DropdownTags_CloseOtherOnClick).
- User fixes: the HomeFeed search input now navigates to Search (F1). Audit A1 checked empty handlers against the
  compiled code (`migration/knowledge/audit-a1-empty-handlers.md`); two were fixed and 7 routes re-stamped.
- Final checks: CI passed twice (310 test files, 1369 tests). The parity sweep over all 64 finished routes found 0
  differences.

## Decisions (who, date)
- Auto mode ON (user, 2026-10-16 night). Every auto answer is in `migration/knowledge/auto-decisions-2026-10-16.md`.
- Stop rule (user): auto-accept ends when the PWA discussion starts. It is now **OFF**.
- At most 2 subagents in parallel (user, 2026-10-15).

## Facts learned (evidence)
- `Connect2_OrbitMobile_MUI.clientVariables.js:8-19` (TST static file fetched under the standing approval) gives no
  default for BookletGuests/HelpersMaxRows, so Integer falls back to 0. The server answers the real page size.
- The read-only guard rule tags `ActionGetBooklet*MaxRows` as writes ("Book" in "Booklet"). They are reads.

## Files changed
- `app/src/shared/osui/{DropdownSearch,DropdownTags,lib}`, `shared/Connect2_OrbitMobile_MUI/lib`, `shell/clientVars.ts`,
  `shared/UBTConnect_Utils/lib/actions.ts`, `screens/EventBooklet/`; CRs in `migration/change-requests/` (applied).

## Open issues (review list for the user)
- TO CONFIRM rows in the auto-decisions log: EventDetail Q5, TransportDetail Q2, EventBooklet Q2, O-B1, the TST
  SearchResult fields that were not adopted, the B6 deviation, and the false write tag on the booklet actions.
- Process slip: the O-A2 agent spawned 2 subagents itself (4 agents at once).

## Next
PWA discussion: `migration/pwa/pwa-discussion-plan.md` (P1–P16). The user decides every item.
