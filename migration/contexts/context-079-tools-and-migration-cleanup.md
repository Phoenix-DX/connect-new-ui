# context-079: one-off tools deleted, `migration/` cleaned (2026-11-06)

## Result
- `tools/` had no duplicated script (content hash over the repository). The one-off tools were deleted
  (commit `8fd581a8`):
  - refactor step tools: `move.ts`, `measure*.mjs`, `move-map.mjs`, `css-prune.py`, `css-coverage-*`,
    `os-block-to-origin.py`, `arch_baseline_selfcheck.py`;
  - skill scaffolding used once: `scaffold_react_app.py`, `build_prototype.py`, 8 assets, `references/prototype-guide.md`;
  - English docs program tools: `english_docs.py`, `meaning_guard.py`.
- `tools/mcp/` merged into `tools/route-check/`. `gen_steps.py` stays: `rf.py` and `test_rf.py` use it.
- `migration/` (this commit): 1,418 tracked files deleted, 292 MB tracked in place of 1,200 MB a day before.
  - `migration/english-docs/` → `migration/style/` keeps only `style-rules.md` and `glossary.md` (the lint and
    `CLAUDE.md` use them); the program files (plan, pilot, pilot-diff, batches, logs, inventory) deleted.
  - `migration/clarify/tools/` → `tools/clarify/` (14 scripts, cwd-relative paths; the artifacts can be rebuilt).
    `clarify/flows/*/pack/` (442 agent inputs) and the ignored `.dump/` deleted. The decisions, reports, reviews,
    fixes and builds stay.
  - `migration/refactor/handoffs/` (664 files of the finished refactor) deleted; `rf.py` makes a handoff folder
    again when a step runs.
  - `migration/flows-dashboard/site/` is a build output: untracked and in `.gitignore`; build before you publish.
  - Old plans deleted: `scope-plan.md`, `foundation-plan.md`, `extras-plan.md`, `capture-notes.md`.
    Kept because a tool reads or writes them: `scope-review.md` (sitemap) and `mock-scope.json` (contract).
    Also kept: `refactor-exemptions.json` (refactor parity), `fixture-coverage.md`, `recording-coverage.md`, `sitemap.html`.
  - Routes: 6 `no-capture.json.withdrawn-2026-10-16`, 6 `review/` pages (`review_page.py` output) and 27
    `proposed-*.json` deleted. `journeys/runs/` kept (source of the future end-to-end tests).
  - Outside git: `capture/runtime-sources-live-2026-10-28/` (26 MB, already copied into `runtime-sources`) deleted.

## Decisions (who, date)
- User 2026-11-06: delete group B (skill scaffolding); `migration/` per the table of the session; wave 3 (one
  store for every compiled file) approved.

## Facts learned (evidence)
- `migration/runtime-sources/live/` is byte-identical to the top level for all 286 files (`cmp`): wave 3 replaces
  it by a list of the drifted file names.
- `capture/survey-UBTConnect.json` is in `.gitignore`; the `survey/` kind of the store keeps the copies git needs.

## Files changed
- Deleted and moved: above.
- Root texts: `tools/README.md`, `README.md`, `RUNBOOK.md`, `REVIEW-GUIDE.md`, `CLAUDE.md`, `.gitignore`.
- Skills and agents: `outsystems-screen-spec` (SKILL.md, 5 references), `route-check`, `refactor-developer`, `refactor-documenter`.
- Tools: `rf.py`, `stack.py`, `survey_app.py`, `ste_lint.py`, the templates in `tools/pipeline/assets/`.
- Documents: `migration/AGENTS.md`, `migration/clarify/*.md`, `migration/refactor/README.md`,
  `migration/flows-dashboard/README.md`, `app/docs/guides/shell.md`, `page-template.md`, `app/docs/architecture/refactor-plan*.md`.

## Open issues
- Wave 3: `runtime-sources`, `contract/sources`, `shell/sources`, `screens/<S>/sources` into `migration/sources/`.

## Next
- Wave 3, then row 23 and the re-captures (context-075).
