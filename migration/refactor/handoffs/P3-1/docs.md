## Result
status: pass
summary: Updated the CHANGELOG, move-map rows 166/181/379, overview, ADR-15, page template, container README, os-widgets and the generated shared-blocks page; F1 to F3 are "done (P3-1)".
Checks: ste_lint 0 errors on changed files (migration/architecture.md keeps its 20 errors from before this step), prettier and mermaid pass.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/architecture/overview.md
app/docs/guides/page-template.md
app/docs/guides/os-widgets.md
app/docs/reference/shared-blocks.md (regenerated with docs_gen.py; only the header line changed)
app/src/containers/HouseholdDetails/README.md
migration/architecture.md (ADR-15, rule 3)
migration/refactor/followups.md
migration/refactor/handoffs/P3-1/docs.md

## Commands run
python3 migration/tools/docs_gen.py → exit 0
python3 migration/tools/ste_lint.py <changed .md> → 0 errors (architecture.md: 20 errors, same count at HEAD)
npx prettier --check <changed files under app/> → pass (CSV has no parser)
node migration/tools/check_mermaid.cjs app/docs/architecture/overview.md → pass

## Deviations from the brief
- move-map.csv: row 379 (NotCaptured) target is now src/platform/feedback/NotCaptured.tsx (status was already moved). Row 181 notes updated. Row 166 only notes (no block moved, status unchanged).
- app/docs/README.md still names `NotCaptured` in the os-widgets line; it is a link description, so I left it.
- os-widgets.md: the NotCaptured row left the components table; the NotCaptured section names the new path.

## Questions for the user
none
