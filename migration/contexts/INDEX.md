# Contexts

Read this file at session start; open a context only when it concerns the current work. Rules: `CLAUDE.md`,
section "Context notes".

## Now
- Goal (user 2026-10-14): replace the OutSystems app in production; UI/UX 1:1. Current focus: local demo for colleagues, no production work until the user says so.
- **TST sync wave 2026-11 closed** ([context-088](context-088-sync-wave-close.md)): 29 routes re-stamped and committed on `sync/tst-2026-11`; CI green; sweep 68 routes clean (OneSchoolGlobalCarousel known). The user merges the branch into `main`.
- Next, only when the user says start: the live API bridge plan `app/docs/architecture/live-api-bridge-plan.md` (B0–B6, D1–D6 decided, one phase per approval).
- TST has 84 routes: 68 build, 16 skip; 13 build routes without TST data. Dev http://localhost:5173/UBTConnect/HomeFeed (`?review=1`).
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
| [038](context-038-refactor-phase-2.md) | 2026-10-22 | Refactor Phase 2 (P2-1 to P2-4) overnight: HouseholdDetails pilot page, page template, gate G-P2-4 by Opus + Fable; follow-ups F1–F5 | current |
| [039](context-039-refactor-phase-3.md) | 2026-10-23 | Refactor Phase 3 (P3-1 to P3-4): 0 import cycles, folder-direction rules, phase report; 6 h stall fixed (act on the agent report); F6 parity flake | current |
| [040](context-040-refactor-phase-4.md) | 2026-10-23 | Refactor Phase 4 (P4-1 to P4-5): settings store, session machine, AuthProvider, route guard, flag registry; Q12, M2–M6; F7 (ADR-15 generated file) | current |
| [041](context-041-refactor-phase-5-paused.md) | 2026-10-23 | Refactor Phase 5 in progress (P5-1, P5-2 member/country/locality/update; P5-F8, P5-F9), paused for the user; resume steps, prefetch patches, F10, G1, G2 | superseded by context-042 |
| [042](context-042-refactor-phase-5.md) | 2026-10-23 | Refactor Phase 5 done (P5-2-app to P5-4): api domains, memory cache on TanStack Query; G2 fixed on main and merged; W1–W6 by Opus + Fable | current |
| [043](context-043-refactor-g1-fix-p6-g1-paused.md) | 2026-10-23 | Gap G1 fixed; P6-F12 tool fix; P6-G1-A done; B-Login at test, 3 prefetch patches; paused for the user | superseded by context-044 |
| [044](context-044-refactor-p6-g1-done.md) | 2026-10-23 | P6 group G1 done (13 steps, B-Shared per group, arch baseline); W9–W16; scope widened to P6+P7 auto; prefetch method | superseded by context-045 |
| [045](context-045-refactor-p6-g2-g3.md) | 2026-10-24 | P6 groups G2 and G3 done; bundle fixes P6-F15/F16; W17–W25; G4–G6 A/B-Shared patches prefetched | superseded by context-046 |
| [046](context-046-refactor-p6-g4.md) | 2026-10-24 | P6 group G4 done (13 pages); W26–W29; fix step P6-F17 (beforePaint) before G5; chain worktree method | superseded by context-047 |
| [047](context-047-refactor-p6-g5.md) | 2026-10-24 | P6-F17 and group G5 done (16 pages); W27–W31; 6 routes without parity states; G6/P6-end/P7-0..2 prefetched | superseded by context-048 |
| [048](context-048-refactor-phase6-done.md) | 2026-10-24 | Phase 6 done (G6, P6-end, F23 fix); W30, W32, W33; P7 prefetched (P7-6 in 5 parts) | superseded by context-049 |
| [049](context-049-refactor-phase7-done.md) | 2026-10-24 | Phase 7 done (P7-0…P7-6, P7-5 report); in-scope run finished; user decisions and owned debt listed | superseded by context-051 |
| [050](context-050-refactor-user-decisions-batch.md) | 2026-10-24 | User-decision batch: F25 back guard, F22-26 restored views, F33 NetworkWarning, F29 + stack cleanup | superseded by context-051 |
| [051](context-051-refactor-p8-p9-done.md) | 2026-10-25 | P8 and P9 done (all 133 steps), F39, F40, F43, F54; advisor decisions W34-W43; final report | superseded by context-052 |
| [052](context-052-refactor-user-decisions-2026-10-25.md) | 2026-10-25 | User decisions of 2026-10-25 done: F52, F55 (CLAUDE.md), F57, F58, F59-a/b/c; W44, W45 | current |
| [053](context-053-libraries-dashboard.md) | 2026-10-26 | Knowledge comparison with my-research; Libraries view, new artifact DLHY4vLn… (accepted); rule 7 change | current |
| [054](context-054-clarify-screens-g1.md) | 2026-10-27 | Clarify screens: plan, P0 tooling (packs from the MCP dump), waves G1–G3 (22 flows), cost analysis, model split | current |
| [055](context-055-clarify-screens-g2-g4-shared.md) | 2026-10-27 | Clarify screens: waves G2–G4 and the shared units (reader Sonnet + judge Opus/Fable), 41 reports, decisions recorded, RESUME.md | current |
| [056](context-056-clarify-screens-p2.md) | 2026-10-27 | Clarify screens: G5, follow-up pass (18 of 29 unclear settled), P2 architecture-current.md and infra-gaps.md | current |
| [057](context-057-clarify-screens-done.md) | 2026-10-27 | Clarify screens complete: G4/shared answers, C1–C4, Orbit block pass, TST captures, hand-over | current |
| [058](context-058-clarify-minor-fixes.md) | 2026-10-27 | Clarify screens: 56 minor findings fixed in app/ (49 fixed, 4 withdrawn, 2 kept, 1 open), gates + parity clean, EN artifact v2 | current |
| [059](context-059-clarify-build-wave.md) | 2026-10-28 | Clarify screens: build wave (3 blockers, 26 majors, 30 build items) by 10 Opus agents; gates + parity clean; 13 pending decisions with advisor advice; survey stale for OrbitLanding | current |
| [060](context-060-clarify-build-decisions.md) | 2026-10-28 | Clarify screens: the user answered the 13 build decisions; PD2 Choice = TST identifiers, PD7 adaptivecards 2.5.0, PD8 PlaceholderLib port (bug B19), bugs B15–B18; ci green; artifacts EN v8, VI v5 | current |
| [061](context-061-survey-drift-check.md) | 2026-10-28 | Survey drift check: TST published again on 2026-10-27; 79 files changed logic, 21 added, 20 removed, 19 runtime sources changed; MyBookmarks and BookmarksByGroup removed on TST; the user decides the next step | current |
| [062](context-062-tst-source-switch.md) | 2026-10-28 | TST source switch (decision (c)): live survey, runtime sources and moduleinfo in place; static entities from live model.js; 1885 checklist rows stale (422 strong), `mark_stale.py` | current |
| [063](context-063-item2-fetch-errors.md) | 2026-10-28 | Item 2, failed data calls: MCP + TST evidence, TST probes (E3, E9), Fable design (one query-cache subscription, App_Common order, error-page marker), SupperMeetings no raise after unmount; ci green, parity 64/0 | current |
| [064](context-064-item3-dropdowns.md) | 2026-10-28 | Item 3: one shared OSDropdownCustom for the 8 Custom dropdowns, useValidationWidget (UnbuiltValidationWidget gone); MCP = TST; D2 from runtime code (TST check waits for an Orbit event); ci green, parity 64/0 | current |
| [065](context-065-item4-original-bugs.md) | 2026-10-28 | Item 4: Maps link double `?` and SanitizedHtml `<nobr>` are TST bugs ported 1:1, kept (B20, B21); item 3 follow-up: scrollIntoView spy tests | current |
| [066](context-066-item5-tooltip-loader.md) | 2026-10-28 | Item 5: shared Tooltip (OSUI OnClick path, pure position function) and MultiResolutionImageLoader (PhotoLazyLoaded, Card_MemberInformation_Survey); TST rules kept for blur, placement class, body listener; ci green, parity 64/0 | current |
| [067](context-067-item6-getshare-inputs.md) | 2026-10-28 | Item 6: DataActionGetShare sends the four block variables (inputs + two record locals, full UI_UpdateItem), as TST; Long Integer as "0"; item 5 Q1/Q2 kept TST; ci green, parity 64/0 | current |
| [068](context-068-item7-decisions.md) | 2026-10-28 | Item 7: Photobook move log not ported (user a; rows 074/076/105 differs), §10.4 nothing open, §11 set-up order approved; no unclear row; artifacts VI v8, EN v11; work list complete | current |
| [069](context-069-item8-flow-scope.md) | 2026-10-28 | Item 8: TST leave rules R1-R6 (runtime, live probe, MCP), the flow scope replaces W23 in 57 hooks, static _error.html (0 px diff), N2-N4 fixed; ci 4624, parity 64/0 | current |
| [070](context-070-items9-10-wave.md) | 2026-10-29 | Items 9-10 wave: TST render/route error handling ported; NotificationDetails, Bookmarks, PassportScan, OrbitAdminMilestones/Detail finished; OneSchoolGlobalCarousel held (drift); contract 178 ops; window 7 auto decisions 1-23 | done |
| [071](context-071-drift-wave.md) | 2026-10-29 | Drift wave: re-capture of all routes, WP1-WP9, TST publish 2 gaps G1-G4, OneSchoolGlobalCarousel finished, gallery flag on, MCP rows 9-16, failed fetches at start to the flow handler, Splash replace, flag route sync; ci 4756, sweep 68/0 | current |
| [072](context-072-app-principal-review.md) | 2026-11-03 | Principal review of `app/`: facts pack, 6 Sonnet collectors, Opus lead; 33 findings (2 S1, 10 S2), gate blind spots, self-assessment gaps, roadmap WP-1 to WP-13, target folder structure | current |
| [073](context-073-app-conventions-review.md) | 2026-11-04 | Convention review of `app/src`: 16 findings (two naming regimes, barrels against R8, two origin tags, page folder layout), decisions D1–D8, plan N0–N5 next to WP-7 | current |
| [074](context-074-route-actions-pilot.md) | 2026-11-04 | Route actions pipeline (TST → MCP → React shell + screen; KB dropped in run 2): one md per route, ROUTES.md list; pilot HomeFeed (21 calls, 3 missing) | current |
| [075](context-075-tst-drift-waves.md) | 2026-11-05 | TST drift of 2026-11-05 handled in two waves (live compiled code wins): 24 route differences built, bookmark toggle moved to UBTConnect_Utils, contract from the live module files, HostSurvey store race fixed, route-actions call graph fixes; open: JSON key names (row 23), re-captures | current |
| [076](context-076-folder-reorg.md) | 2026-11-05 | Folder reorganisation: `tools/` by purpose (pipeline, parity, generate, docs, tst, mcp, refactor, route-check), `route-actions` → `route-check`, one-off scripts deleted, path constants fixed; generators re-run after ADR-17 and AdaptiveCards were recorded in stack.json | current |
| [077](context-077-migration-cleanup.md) | 2026-11-05 | `migration/` cleanup: run outputs, checkpoints, MyBookmarks/BookmarksByGroup/LDM_MyEvents captures, capture-tags deleted; raw captures kept; duplicate compiled sources measured (830 MB → 160 MB possible) | current |
| [078](context-078-sources-store.md) | 2026-11-05 | Shared store `migration/sources/` (raw, pretty, styles) + `analysis/manifest.json` per route; 9 tools read/write through `sources_store.py`; 650+ citations rewritten; 68 route files regenerated | current |
| [079](context-079-tools-and-migration-cleanup.md) | 2026-11-06 | One-off tools deleted (refactor step tools, skill scaffolding, English docs program); `migration/` cleaned: `style/`, `tools/clarify/`, handoffs, flow packs, dashboard site, old plans. | current |
| [080](context-080-one-sources-store.md) | 2026-11-06 | One store for every compiled TST file: `runtime/`, `contract/`, `shell/`, `survey/` added to `migration/sources/`; `live/` → `live-files.txt`; 15 tools through the store; 372 files of citations rewritten. | current |
| [081](context-081-root-folders-and-accounts.md) | 2026-11-06 | `route-check/` → `migration/route-check/`, `capture/` → `migration/survey/`; `.auth/accounts.json` with a list of users per role, tools try the next account; site profile path fixed. | current |
| [082](context-082-recaptures-and-decisions.md) | 2026-11-06 | Re-captures: NotificationDetails (adaptive card record) and Search (six pills, no header filter icon) rebuilt, parity clean without drift rules; Household_Relations waits for data; flags re-scanned; row 23 (c); `sources/pinned.txt`. | current |
| [083](context-083-account-sweep.md) | 2026-11-06 | Three routes re-stamped; sweep of the 25 test accounts (coverage table in knowledge); AcceptPendingPolicies, EventDetail, MilestoneDetail, LDM_EventDetail_V2 captured with real data; discovery tool options. | current |
| [084](context-084-real-capture-fix-wave.md) | 2026-11-06 | Four routes rebuilt to their real captures by parallel route agents; Orbit/LDM sweep 24 of 24 clean; Search re-stamped after the fixtures review. | current |
| [085](context-085-assemble-detail-capture.md) | 2026-11-06 | Password list in accounts.json; more sweeps (Assemble meetings on global#9/#10); AssembleDetail captured and rebuilt; two shared blocks fixed; full sweep 68 of 68, CI green. | current |
| [086](context-086-evening-captures.md) | 2026-11-06 | GuestArrangements and ContactByEmailLDMCoordinator captured through in-app paths and rebuilt; SectionExpandable StrictMode fix; data conditions of the 12 routes still without a capture. | current |
| [087](context-087-tst-sync-wave.md) | 2026-11-07 | TST sync wave: re-capture, drift tool, triage (29 items), team `tst-sync`, contract regenerated, 19 routes at review, decisions Q1–Q8 open | superseded by context-088 |
| [088](context-088-sync-wave-close.md) | 2026-11-07 | Sync wave closed: 29 routes confirmed and re-stamped; stylesheet gap (CSS sets, SanitizedHtml id); close gates; exemptions 146→100; live API bridge plan (D1–D6) | current |
