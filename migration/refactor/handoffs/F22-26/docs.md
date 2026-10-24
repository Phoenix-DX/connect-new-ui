# Docs · F22-26

## Result
status: pass
summary: CHANGELOG entry, 2 stale docs fixed, W27 marked as superseded.

Changed:
- `app/docs/refactor/CHANGELOG.md`: F22-26 entry (option C, 3 places, skip rule).
- `app/src/containers/SupperMeetingDetails/README.md`: Flows describes the restore and the skip rule; the "Not settled" item about the reload is removed.
- `app/docs/guides/page-template.md`: `useAccommodationHost.ts` is now the example of a hook without `restore`; `useNotes.ts` stays the example of `restore: () => INITIAL_STATE`.
- `migration/refactor/auto-decisions-2026-10-22.md`: "Superseded by F22-26 (user, 2026-10-24)." added at the end of the last cell of the W27 row (a separate line would split the table).

Not changed: `move-map.csv` (no row names these hooks), AssembleDetail READMEs (none exist), `followups.md`.

Checks: ste_lint 0 errors on the changed app files (README error is older than this step); prettier clean on the app files.

## Questions for the user
none
