## Result
status: pass
summary: CHANGELOG entry added (with the P6-G2-C follow-up on the double `Type_ContactSubject`). move-map row of ContactUsDetails note updated (status was already `moved`, shape page + hook). `calls-by-domain.md` and `os-widgets.md` fixed for the deleted `api.ts` and the renamed `MessageTextArea.tsx`.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
app/docs/guides/os-widgets.md
migration/refactor/handoffs/P6-G2-B-ContactUsDetails/docs.md

## Commands run
ste_lint.py on the 3 .md files → 0 errors in CHANGELOG and os-widgets; calls-by-domain has 1 error (sentence > 25 words) that was already there at HEAD
npx prettier --check on the 3 .md files → pass
check_mermaid.cjs → not run, no file with mermaid changed

## Deviations from the brief
Not changed: `reference/screens.md` and `guides/api-and-mocks.md` still name `src/screens/...` (same state as Menu and Profile; for the phase-end full run). The follow-up for P6-G2-C is in the CHANGELOG entry, not in `followups.md` (outside my allowed files).

## Questions for the user
none
