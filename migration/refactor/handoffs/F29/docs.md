# F29 docs

Status: pass

## Result
- `migration/refactor/followups.md`: row F29 closed (user decision, 2026-10-24; what was deleted). Prettier re-padded the table, so other rows show whitespace-only changes. The text of F22, F25 and F28 is unchanged.
- `app/docs/refactor/move-map.csv`: 4 rows (Columns4, RangeSlider, SwipeEvents, Tooltip) set to `deleted`. No other row changed.
- `app/docs/refactor/CHANGELOG.md`: F29 entry added, gate line "ci: pass; parity visual --all: 64/64 (OutSystems), 64/64 (self)".
- `app/src/components/ui/README.md`: folder count 93 changed to 89 (`ls` of `components/ui/`, without `legacy`, `lib`, `os`).
- Not changed: `app/docs/refactor/reports/P7.md` (historic report); generated `app/docs/reference/stack.md` and `shared-blocks.md` still list RangeSlider, nouislider, wnumb, Columns4, SwipeEvents (outside my file list).
- Checks: ste_lint 0 errors; prettier pass on changed .md files; no mermaid changed.

## Questions for the user
- `app/docs/reference/stack.md` and `shared-blocks.md` still name the deleted patterns and packages. Regenerate them?
