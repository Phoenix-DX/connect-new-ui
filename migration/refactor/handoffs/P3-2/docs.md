## Result
status: pass
summary: Recorded the Q11 exception (stories and tests outside the cycle and folder rules) and the 2 new UBTConnect direction rules in ADR-15, overview.md and guides/quality.md. Added the CHANGELOG entry. No move-map rows changed (no file moved); no diagram changed.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/architecture/overview.md
app/docs/guides/quality.md
migration/architecture.md

## Commands run
ste_lint.py on the 4 files → 0 errors in CHANGELOG, overview, quality; migration/architecture.md keeps its old errors (none on the new lines)
prettier --check on the 3 files under app/ → pass
check_mermaid.cjs app/docs/architecture/overview.md → run (diagrams not changed)

## Deviations from the brief
none

## Questions for the user
none
