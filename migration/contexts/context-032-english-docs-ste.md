# context-032 · English docs in STE style: phase A, pilot and phase B done (2026-10-21)

## Result
- All specs and docs for the manager's review are in English and follow the ASD-STE100 writing rules (no dictionary).
  Plan, glossary, style rules, logs: `migration/english-docs/` (PLAN.md, phase-b-log.md, pilot-report.md).
- Phase A: `RUNBOOK.md`, `scope-review.md`, `scope-plan.md`, sitemap labels translated; Vietnamese user quotes keep
  their text plus "(English: …)"; new `REVIEW-GUIDE.md` at the root.
- Pilot + phase B: 64 route specs, `app-shell.spec.md`, 237 shared READMEs, 40 other docs (app/docs, knowledge,
  patterns, shell, plans). 232 of 342 files changed. Writer agent, then a separate reviewer agent per batch.
- Reviewers fixed 38 + 13 (pilot) meaning problems and corrected 183 + 9 (pilot) stale facts with evidence.
- `route.py spec-done` for all 64 routes; `parity_sweep.py`: 64 routes, 0 differences; `route.py plan`: 64 finished.

## Decisions (who, date)
- User, 2026-10-21: STE rules only (no dictionary); backup to `migration/.ste-backup/`; checkpoint 1 "duyệt hết"
  (approve all; English: "approve all"): glossary, rules, pilot style, fix stale facts, apply pilot; phase B full
  scope with a 100 % review.

## Facts learned (evidence)
- `app/src/shared/**` and `app/src/shell/**` are parity inputs, README files too (`route.py` PARITY_SHARED).
- Patterns are an input of the context pack digest: re-run `spec-done` after a pattern change.
- `migration/blocks/*.md` are generated block packs: no rewrite.
- Review is necessary: about 4 % of rewritten paragraphs had a meaning change (wrong actor, lost condition scope,
  hypothetical made factual, invented order). Agent lessons are in `english-docs/agent-writer.md`.
- Tokens (ledger, `_docs`): phase A 0.23 M, pilot 0.65 M, phase B 4.52 M subagent tokens.

## Files changed
- See `migration/english-docs/inventory.json`; backup with sha256 in `migration/.ste-backup/2026-10-21/`.
- New tools: `migration/tools/english_docs.py`, `ste_lint.py`, `meaning_guard.py`.

## Answers and open issues
- User, 2026-10-21: LDM = Lord's Day Meal (docs updated); the stale comment in `LDM_EventDetail_V2/index.tsx:15` stays.
- Records updated (user, 2026-10-21): CR-MessageList-2 applied; CR-QRCodeGenerate-1 notes; Updates_SingleList "None open"
  fixed. CR-Updates_SingleList-1 stays open (the shared mark-read mock collection is not built).
- Confirmed for the demo (user, 2026-10-21, `route.py answer`): TransportDetail Q2, MyBookmarks Q3, LegacyShareObject Q2,
  Services Q1 (fixture reviewed). Check them again in the production phase.
- Code: only a comment in `app/src/shell/testSession.ts` changed; the user keeps it. A stray `README.md-E` was deleted.
- Before sharing the folder: leave out `.auth/`, `migration/.raw/`, `migration/.ste-backup/`.

## Next
- The user moves `migration/.ste-backup/` out of the folder (user, 2026-10-21). Nothing else is open.
