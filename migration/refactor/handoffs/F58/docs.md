# Docs · F58 · Client variables through typed platform accessors

Status: pass

## Result

- `app/docs/refactor/CHANGELOG.md`: F58 entry (`clientVar` with 15 accessors, `useClientVar(accessor)`, metric 22 to 7, gates).
- `app/docs/guides/shell.md`: table row and a new rule (new code uses `clientVar`); the 3 by-name `useClientVar` users and stories named.
- `migration/refactor/followups.md`: F58 done; new row F62 for the 3 `useClientVar`-by-name users.
- `app/docs/refactor/reports/final.md`: one line under section 3.1 (N-B: metric 7).
- No change to overview.md, move-map.csv, ADR-15.

## Checks

ste_lint: 0 errors on the 4 files. prettier --check: pass. No mermaid change.
