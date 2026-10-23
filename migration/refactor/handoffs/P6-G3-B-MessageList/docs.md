## Result
status: pass
summary: CHANGELOG entry, move-map rows 19 and 305, api README line 77, calls-by-domain (2 rows) and follow-up F19 are done. overview.md needs no change.

## Files changed
app/docs/refactor/CHANGELOG.md (new entry)
app/docs/refactor/move-map.csv (row 19 status moved with state file note; row 305 note)
app/src/api/README.md (line 77: adapter is `markAllAsReadFilter` in the hook)
app/docs/refactor/calls-by-domain.md (2 rows name the hook; prettier realigned one table)
migration/refactor/followups.md (F19)

## Commands run
ste_lint.py on the 4 .md files: 0 errors in 3; calls-by-domain.md has 1 error (sentence over 25 words) that is not in the changed lines
prettier --check on the 3 .md files under app/: pass (CSV has no parser)

## Questions for the user
none
