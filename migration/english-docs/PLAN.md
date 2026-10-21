# English docs: plan and status

Goal (user, 2026-10-21): the user's manager, who does not read Vietnamese, reviews this folder. All specs and docs
must be in English, easy to read, and easy for an agent to follow. Style: ASD-STE100 writing rules, without the STE
dictionary (user, 2026-10-21). Backup before change: `migration/.ste-backup/` (user, 2026-10-21).

Files: `inventory.json` (scope groups), `glossary.md`, `style-rules.md`, `pilot/` (pilot outputs), `pilot-diff.md`,
`pilot-report.md`. Tools: `migration/tools/english_docs.py`, `ste_lint.py`, `meaning_guard.py`.

## Phase 0: preparation

- [x] Inventory: A 16 files, pilot 14, B 329, generated 254, out 322 (`english_docs.py inventory`).
- [x] Backup: 357 files to `migration/.ste-backup/2026-10-21/` with `MANIFEST.json` (sha256).
- [x] Glossary and style rules: proposals, **the user approves them at checkpoint 1**.
- [x] `ste_lint.py` (measurable rules) and `meaning_guard.py` (protected elements, Before/After diff).

Findings:
- `app/src/shared/**` and `app/src/shell/**` are parity inputs (`route.py` hashes the full folders, README files too).
  A change there makes the parity reports of all 64 routes stale: run `migration/tools/parity_sweep.py` after it.
  Phase A does not change app files; the README files change only in phase B, with one sweep.
- `migration/blocks/*.md` are generated block packs (`block_pack.py`): no STE rewrite.
- A change to `route-spec.md` breaks its `spec.complete.json` hash. After the user approves a rewritten spec, run
  `route.py spec-done <Route>` (user's OK needed).
- `migration/tools/sitemap.py` reads the table rows of `scope-review.md`: the translation keeps the columns, the
  D-codes and the words build / skip.

## Phase A: Vietnamese documents

- [x] Translate `RUNBOOK.md`, `migration/scope-review.md`, `migration/scope-plan.md` (style rules apply). Lint 0 errors.
      Vietnamese placeholders became English (`<Screen>`, `<date>`, `<reason>`); one term became "wave" (glossary §9). Heading references in context-003/005 updated.
- [x] `migration/tools/sitemap.py` labels to English; regenerate `migration/sitemap.md` and `.html`. Same scope classes
      with the old and the new `scope-review.md`. The old sitemap (2026-10-14) was stale: it now follows the board.
- [x] Vietnamese quotes: keep them, add "(English: …)" (10 files).
- [x] New `REVIEW-GUIDE.md` at the project root for the reviewer. Lint 0 errors.
- [x] Checks: `english_docs.py vi-scan` (only quotes left, and `testSession.ts` for phase B), `meaning_guard.py --mode
      translate` (differences explained), review agent: 0 meaning errors (3 glossary fixes: "real app" → "original app").

## Phase B-pilot

- [ ] Rewrite 3 route specs (Login, HomeFeed, Locality_Details), `app-shell.spec.md`, 10 shared README files into
      `pilot/` (originals unchanged).
- [ ] `ste_lint.py` 0 errors, `meaning_guard.py pilot` 0 errors, review agent (old vs new), fixes.
- [ ] `pilot-diff.md` (Before / After), `pilot-report.md` (tokens per file, Unclear items found).
- [x] **Checkpoint 1 (user, 2026-10-21):** all approved: glossary, rules, REVIEW-GUIDE, pilot style; fix the stale facts
      as a separate step; apply the pilot now; phase B = full scope, review of 100 % of the files.

## Phase B (after checkpoint 1)

- [x] Apply the pilot files; 9 stale facts corrected (1 was not stale); `route.py spec-done` for the 3 routes.
- [x] Route specs: 61 rewritten and reviewed; `route.py spec-done` for all 64 (2026-10-21).
- [x] Shared README files, app/docs (written files), knowledge, patterns, shell, others (`phase-b-log.md`).
- [x] `parity_sweep.py` once after the README files and `testSession.ts`: 64 routes, 0 differences.
- [x] `route.py spec-done` again for all 64 routes after the `migration/patterns/` files change (the pattern digest is an input of
      the context pack, so the recorded inputs change).
- [x] `route.py spec-done` for all changed route specs (64; `route.py plan`: 64 finished).
- [x] Final lint and guard report (`phase-b-log.md` Totals); context-032; ledger.

## Before the folder is shared

- Leave out `.auth/` (secrets), `migration/.raw/` (raw recordings) and `migration/.ste-backup/` (Vietnamese originals).
