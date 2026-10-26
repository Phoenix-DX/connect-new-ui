## Result
status: pass
summary: Added the P4-1 entry to the CHANGELOG with the Q12 line (older-build tab reads defaults once; `ubtc-mock:` keys are mock-only). Updated the shell guide, the overview runtime table and ADR-15 with the settings store (11 settings). No move-map change, no mermaid change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/guides/shell.md
app/docs/architecture/overview.md
migration/architecture.md

## Commands run
ste_lint.py on shell.md, CHANGELOG.md, overview.md → 0 errors (warnings only)
ste_lint.py migration/architecture.md → 20 errors, all on older lines; none on the new P4-1 line
npx prettier --check (3 files under app/) → pass
check_mermaid.cjs → not run, no mermaid change

## Deviations from the brief
none

## Questions for the user
none
