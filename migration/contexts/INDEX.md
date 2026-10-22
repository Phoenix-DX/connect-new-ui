# Contexts

Read this file at session start; open a context only when it concerns the current work. Rules: `CLAUDE.md`,
section "Context notes".

## Now
- Goal (user 2026-10-14): replace the OutSystems app in production; UI/UX 1:1. **Current focus (user 2026-10-17): local demo for colleagues, no production work.**
- 64/64 routes finished, sweep clean; PWA phases 1–3 done; English docs done (2026-10-21); UI Flows dashboard + 38 journeys (2026-10-22, [context-033](context-033-ui-flows-dashboard.md)).
- Branch `refactor/architecture`: Phases 0 and 1 of the refactor done by the agent team (2026-10-22, [context-036](context-036-refactor-phase-0.md), [context-037](context-037-refactor-phase-1.md)); next P2-1 with `/refactor-master continue` (this repo's dev server on port 5174: 5173 is another clone). Auto decisions Q1–Q9 wait for the user's review.
- Auto mode OFF (P1 window ended 16:30, 2026-10-22). Deferred to production: nav timeout, PWA-2/3/B choices, BFF host, ADR-14 code; mobile performance later.
- Demo: `npm --prefix app run build:demo` → `app/dist-demo/`; dev http://localhost:5173/UBTConnect/HomeFeed (`?review=1`). Tools: `migration/tools/` (README).

## Contexts
| id | date | topic | status |
|---|---|---|---|
| [001](context-001-auto-login.md) | 2026-10-13 | Auto-login TST: Callback, PINRegister, LastURL; MCP token hang (later fixed) | current |
| [002](context-002-survey-and-scope-review.md) | 2026-10-13 | Survey, board, scope review D1–D10, MCP cross-check, sitemap | superseded by context-003 |
| [003](context-003-scope-decided.md) | 2026-10-14 | Scope decided by journey rounds: 41 build / 42 skip, external apps, flag helpers | current |
| [004](context-004-capture.md) | 2026-10-14 | Phase 2 capture: guard, PIN wait, via/auth modes, 39/41 captured | current |
| [005](context-005-catalog-flags.md) | 2026-10-14 | Phase 3: catalog 147 queued blocks, tiers, 26 flags decided (1 both, 18 default-only, 7 false positives) | current |
| [006](context-006-stack.md) | 2026-10-14 | Phase 4: production goal, extras A–D, web/PWA, stable baseline (ADR-1…5), stack confirmed | current |
| [007](context-007-foundation-wave1.md) | 2026-10-14 | Phase 5: fixtures, shell spec + A/B/C, contract per owner, review tooling, wave-1 blocks (49) | current |
| [008](context-008-wave1-login-pinunlock.md) | 2026-10-14 | Wave 1: Login and PINUnlock built (parity 0, user confirm), parity tool fixes, Login as pattern reference | current |
| [009](context-009-css-per-screen-wave1-reviews.md) | 2026-10-14 | Per-screen original stylesheets (StylesheetHost); PINRegister, Splash, AcceptPendingPolicies built (user confirm); CR-Splash-3 | current |
| [010](context-010-cr-batch-1.md) | 2026-10-14 | Foundation CR batch 1 applied; SVG background + InlineSVG id fix; 4 routes re-stamped | current |
| [011](context-011-wave2-foundation.md) | 2026-10-15 | Wave 2: 42 shared blocks, runtime-script ports, mock images, Feed CMS mock origin | current |
| [012](context-012-homefeed.md) | 2026-10-15 | HomeFeed built (parity 0, user confirm); parity replay keeps live nesting; TST static values | current |
| [013](context-013-wave3-foundation.md) | 2026-10-15 | Wave 3 foundation: 36 blocks, TST script ports, typed exceptions, notes local cache | current |
| [014](context-014-knowledge-atlas.md) | 2026-10-15 | Connect 2.0 Atlas: team knowledge dashboard (artifact) from migration/ + capture/ | superseded by context-031 (deleted) |
| [014](context-014-wave3-round1.md) | 2026-10-15 | Wave 3 round 1 finished (Services, Search, MyEntertaining); no-CommonUI lock rule, original images on dev server | current |
| [015](context-015-wave3-done.md) | 2026-10-15 | Wave 3 finished (9 screens); OSList + swipe; auto-accept window decisions | current |
| [016](context-016-wave4-paused-demo.md) | 2026-10-15 | Wave 4 blocks 40/46 (paused for demo); mock session demo default unlocked | current |
| [017](context-017-wave4-auto-mode.md) | 2026-10-15 | Wave 4 auto mode: 5 routes finished, auto decisions, parity deep-tree fix, via app-start calls, detailRegex | current |
| [018](context-018-all-screens-built.md) | 2026-10-15 | All 41 screens built: waves 5–7, F4–F7, validation port, textarea rows artifact, 64 auto decisions | current |
| [019](context-019-overnight-f8.md) | 2026-10-16 | Overnight F8: request timeouts, OSValidation Login/ContactUsDetails, Locality tags built, docs; regression 41/41 | current |
| [020](context-020-wave8-orbit-assemble-ldm.md) | 2026-10-16 | Wave 8 Orbit/Assemble/LDM: 59/64 finished, 48 blocks, F9–F15, paused (weekly limit) | current |
| [021](context-021-wave8-complete.md) | 2026-10-16 | Wave 8 complete: 64/64 routes, F16–F17, CI and parity sweep clean; auto mode off for PWA | current |
| [022](context-022-f18-transitions-pwa-decisions.md) | 2026-10-16 | F18 screen transitions 1:1; PWA P1–P16 decided by the user; F1/F3/F4 facts | current |
| [023](context-023-pwa-demo.md) | 2026-10-16 | PWA phase 1 (ADR-9/10), shareable demo PWA (in-process mocks), PIN 0223, review frames dev-only | current |
| [024](context-024-pwa-phases-2-3.md) | 2026-10-16 | PWA phases 2–3 (offline 1:1, ADR-11 scanner), mock-free production, Photobook/Splash fixes | current |
| [025](context-025-pwa-tests.md) | 2026-10-16 | PWA e2e (8 scenarios) + Lighthouse (ADR-13, lhci rejected by audit); first scores | current |
| [026](context-026-favicon-date-rollover.md) | 2026-10-17 | Favicon 1:1 (OSUI AddFavicon), EventDetail date-rollover exemption, sweep 64/64 | current |
| [027](context-027-review-markers-opt-in.md) | 2026-10-17 | User review of auto items, F2 answered (TST SW, ADR-14), review markers opt-in on dev | current |
| [028](context-028-migration-atlas.md) | 2026-10-17 | UBTConnect Migration Atlas (VI): generator, 64 route pages with TST/React shots, review, artifact | superseded by context-031 (deleted) |
| [029](context-029-build-kb.md) | 2026-10-17 | Build KB (VI): screen build specs, API/structure browser, component catalog, CSS map, nav map, roadmap; artifact | superseded by context-031 (deleted) |
| [030](context-030-kb-scorecard.md) | 2026-10-20 | KB Scorecard (EN): 9 sections, spec rubric 5×20, KB 82/B; artifact | superseded by context-031 (deleted) |
| [031](context-031-coverage-atlas-removed.md) | 2026-10-21 | MCP coverage check, spec coverage vs DEV inventory (server side missing), VI scan, Atlas/KB/Scorecard deleted | current |
| [032](context-032-english-docs-ste.md) | 2026-10-21 | English docs in STE style: phase A, pilot, phase B (342 files reviewed), 183 stale facts fixed, parity 64/0 | current |
| [033](context-033-ui-flows-dashboard.md) | 2026-10-22 | UI Flows dashboard and 38 user journeys on TST (20 verified); build only, publish after the user's accept | current |
| [034](context-034-refactor-plan-review.md) | 2026-10-22 | Refactor plan review (6/10), flag and session design, plan v2 with agent steps; R1–R8 open | current |
| [035](context-035-refactor-agent-team.md) | 2026-10-22 | Refactor agent team: /refactor-master + developer/tester/documenter, rf.py state, self-test passed; not begun | current |
| [036](context-036-refactor-phase-0.md) | 2026-10-22 | Refactor Phase 0 (P0-1 to P0-5) by the agent team; baseline, parity tool, move map, ADR-15; auto decisions Q1–Q7 | current |
| [037](context-037-refactor-phase-1.md) | 2026-10-22 | Refactor Phase 1 (P1-1 to P1-4): moves, `@/` imports; P1 parity had used another clone on 5173, re-run found 2 regressions, fixed (P1-fix); Q8–Q9 | current |
