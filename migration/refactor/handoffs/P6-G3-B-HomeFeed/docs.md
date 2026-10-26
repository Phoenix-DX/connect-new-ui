## Result
status: pass
summary: CHANGELOG entry, 4 move-map notes (status stays `moved`, HomeFeed page row untouched), `api/README.md` (feed domain, member call, meta.errorLog), `guides/shell.md` (2 session hooks), follow-up F17 tripwire, FeedCms README fixed for STE errors. Lint 0 errors, prettier pass.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/src/api/README.md
app/docs/guides/shell.md
app/src/components/feed/FeedCms/README.md
migration/refactor/followups.md
migration/refactor/handoffs/P6-G3-B-HomeFeed/docs.md

## Commands run
ste_lint.py on the changed .md files → 0 errors
npx prettier --check (CHANGELOG, api README, shell.md, 3 feed READMEs) → pass
No mermaid or ADR-15 change.

## Deviations from the brief
- `app/docs/refactor/calls-by-domain.md` rows 174-175 (dev.md item 10) not changed: it is not in my file list. The master may update it.
- page-template.md not changed (no page-pattern change).

## Questions for the user
none
