# context-020 · Wave 8: Orbit, Assemble, LDM (2026-10-16, auto mode)

## Result
- User scope decision 2026-10-16: Orbit is not an embedded app; build Orbit (12 + 2 contact forms + EmailContact), LDM V2
  (V1 skipped by the user) and Assemble (3). Trove has no screen (external app, already built as compiled).
- Captures with a full-permission account (user): 11 screens captured read-only, 12 no-capture (built from compiled
  code), 3 V1 skipped. 48 shared blocks built (O-A1/O-A2/O-B1..B4), foundation F9–F15.
- **59/64 routes finished.** Paused by the weekly usage limit (resets 2026-10-20 19:00 +07); resume plan in
  `migration/foundation-plan.md` ("Paused 2026-10-16 night"). Left: F16 → QRCodeGenerate, OrbitAdminLanding;
  GuestArrangements, EventBooklet, EmailContact (rebuild).

## Decisions (who, date)
- Auto mode ON (user, 2026-10-16 night). Every auto decision: `migration/knowledge/auto-decisions-2026-10-16.md`.
- Meaningful mock data (user, 2026-10-16): fictional worlds `app/src/mocks/fictional/{directory,content,orbit,orbitAdmin,ldm,assemble}.ts`.

## Facts learned (evidence)
- Orbit static entities sync at app start and persist in IndexedDB (F10/F12/F14); memory cache shares in-flight misses
  (QueueJS, F13); DateTime URL params are `toISOString()` (F13); BarcodePlugin: browser → OS-PLUG-BARC-0011, PWA → web
  scanner (PWA discussion). Known original bugs B6–B13 in `app/docs/known-original-bugs.md`.

## Files changed (tooling)
- `parity_check.cjs` routeRegex/detailRegex used widely; `consistency_check.py`: no-capture routes accept compiled inline
  styles cited in their spec; `contract_gen.py` scans compiled call sites (163 operations).

## Open issues
- Review list: TO CONFIRM rows in auto-decisions (LocalSurveyStatus labels, TransportDetail icons, TST SearchResult new
  fields not adopted, O-B1 conservative choices, B6 deviation).

## Next
F16 → finish the last 5 routes → regression sweep → PWA discussion plan.
