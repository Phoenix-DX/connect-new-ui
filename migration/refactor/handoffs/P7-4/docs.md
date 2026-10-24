## Result
status: pass
summary: Recorded the P7-4 result (no merge) per group in duplicates.md; added follow-ups F31-F34 (Orbit client actions + raiseFromHandler, PopupMenu, NetworkWarning user decision, Member_ListItem row for P7-6); CHANGELOG entry; Layout_MainPages note in move-map.csv set to "kept by P7-4". overview.md needs no change (no code changed).

## Files changed
app/docs/refactor/duplicates.md
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
migration/refactor/followups.md (prettier also re-aligned its table)
migration/refactor/handoffs/P7-4/docs.md

## Commands run
ste_lint duplicates.md, CHANGELOG.md → 0 errors; prettier --check (app files) → pass; no mermaid changed.

## Deviations from the brief
Member_ListItem row left without status (phase P2, file still in shared/); noted in duplicates.md and F34.

## Questions for the user
none (F33 NetworkWarning is a later user decision, listed in followups)
