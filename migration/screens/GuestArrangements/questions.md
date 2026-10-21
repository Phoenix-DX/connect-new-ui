# Questions: GuestArrangements

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] mock data / review (answered)
- Question: No capture: which data and entry does the user review GuestArrangements with? The captured MilestoneDetail shows no 'Guest Arrangements' link (HasGuestArrangements False on every guest), so no built screen leads here in the mock.
- Evidence: no-capture.json; MilestoneDetail ScreenBlock_AccommodationHost OnClick_GuestArrangements (link only when HasGuestArrangements); app/src/mocks/fictional/orbit.ts ORBIT_HOSTED_ROOMS
- Options: A: fictional arrangements of the two hosted families in orbit.ts (orbitGuestArrangements: Herrera with special needs, coach, 3 meal days; Ramos without special needs, own car), reviewed by direct URLs; MilestoneDetail stays as captured | B: also a CR so MilestoneDetail's mock guests get HasGuestArrangements True (changes a finished, captured route) (recommended: A)
- Answer (user, 2026-10-16T15:03:09): A (recommended), auto-accepted (user instruction 2026-10-16 night)

## Q2 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): fictional arrangements of the two families the Vitale household hosts for; Herrera family (coach, three members with special needs, three meal days):; Ramos family (own car, arrival without number plate → "Not available", no special needs): the same URL with; no data: `In_MemberId=880301`; loading: add `&mock=loading`; error: `&mock=error`.; Markup not captured: built from the compiled view (SB). Feature flags: action:getHasOrbitAccess → default-only: TST value on (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T15:03:19): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
