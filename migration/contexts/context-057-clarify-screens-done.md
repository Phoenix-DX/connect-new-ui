# context-057 · Clarify screens complete: answers, captures, hand-over (2026-10-27, third session)

## Result
- The clarify work is complete: 45 reports, 5412 rows (`migration/clarify/INDEX.md`).
  - Verdicts: match 4295, partial 137, missing 166, differs 96, mock-only 157, n/a 556, unclear 5.
  - Findings: 3 blockers, 27 major, 56 minor, 29 info.
- The user answered every question: 59 rows in `decisions.md` (G1–G3 by recommendation; G4 and shared by id; the 4
  candidate findings C1–C4). `infra-gaps.md` §10.4 lists 30 build items, 12 "keep", 14 checks.
- Orbit block pass: 80 rows, F8 minor.

Read-only TST captures (`tools/capture_followup.cjs`, `review/captures.md`):
- OSG re-mounts and refetches on a same-screen navigation (match).
- Notes sends Years after Apply (new F2 major).
- OrbitAdmin flag true in PermissionList (match, value in `flag-values-tst.json`); Home-111 match.
- Updates blocked by the MarkAsRead write.
- `dev-ahead.md`: 150 DEV vs TST rows for a later comparison (user's request).

## Decisions (who, date)
- User 2026-10-27, by id:
  - OrbitEvents Q1 a (HostSurvey wizard, build now), Q2 a (remove the DEV-only passport control), Q3 a (5 milestone
    blocks); OrbitAdmin Q1 a (remove the DEV milestone branch, keep the DEV note).
  - LDM_V2 Q1 a (timeline filter popup); _libraries Q1 a (port SkipToContent only), Q3 a (wire the 2 subscription
    call sites).
  - C1, C2 keep React (validators trim, IsGuestView default); C3 toast on app-start failure (F3); C4 device id as TST.
- User 2026-10-27: "build now" means in scope, built only on the user's order; the Fable fallback rule was removed.
- User 2026-10-27: an artifact "Infra & FE readiness" in Vietnamese, one page with two tabs (current FE, production
  needs), built locally first, published after accept.

## Facts learned (evidence)
- Total cost of the clarify work: about 16.0 M tokens over 67 agent runs (ledger, agents `clarify-*`).
- A tap on an update calls `ServiceAPIAction_UI_UpdateItem_MarkAsRead` (write): read-only captures cannot open an
  update item (`review/captures.md` §2).

## Files changed
- `migration/clarify/**` (decisions, dev-ahead, review/captures, orbit-blocks, tools/capture_followup.cjs, reports),
  `migration/knowledge/flag-values-tst.json`, `migration/metrics/ledger.csv`.

## Open issues
- Notes F2 decision; Directory_Updates 073/074 (capture with the write, or a decision); Photobook move-log record.
- The artifact "Infra & FE readiness" (VI) is published: https://claude.ai/artifact/GRwjpVEAPtSCPaDPXiCCLM (user accept 2026-10-27).

## Next
- `migration/clarify/RESUME.md`: the artifact, then builds on the user's order.
