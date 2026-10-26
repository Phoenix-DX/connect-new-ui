## Result
status: pass
summary: Updated paths from src/shell to src/platform, src/legacy/os and src/app in the overview (diagram node too), 8 guides and platform/README.md. Added the P1-2 CHANGELOG entry. Set status `moved` on 30 move-map rows.

## Files changed
- app/docs/refactor/CHANGELOG.md
- app/docs/refactor/move-map.csv
- app/docs/architecture/overview.md
- app/docs/guides/api-and-mocks.md
- app/docs/guides/getting-started.md
- app/docs/guides/os-widgets.md
- app/docs/guides/screens.md
- app/docs/guides/shared-code.md
- app/docs/guides/pwa.md
- app/docs/guides/quality.md
- app/src/platform/README.md
(app/docs/guides/shell.md was already updated by the developer; prettier left it unchanged.)

## Commands run
- ste_lint.py on each changed .md → 0 errors, except guides/screens.md (2 errors "sentence > 25 words", the same in HEAD, not from this step)
- prettier --check/--write on the .md files → pass after write (overview.md and api-and-mocks.md table widths re-formatted); csv not checkable by prettier
- check_mermaid.cjs overview.md → no errors
- grep `src/shell` in guides, overview, platform README → none left (only `migration/shell/` paths remain)

## Deviations from the brief
- ADR-15 not changed: no rule of the target architecture changed in this step.
- Row statuses use the value `moved` (the column was empty everywhere; no value was defined).

## Questions for the user
none
