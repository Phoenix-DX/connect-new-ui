# Dev report · F33

Status: pass

## Result
The ui NetworkWarning now gives the inner Animate the id `<id without $>-$b1` when `id` is given (none otherwise).
The MyBookmarks copy is deleted; MyBookmarksView imports the ui component (DOM unchanged). The two LDM routes gain the
Animate id (approved). The only other difference between the copies was that `id` and `onTryAgain` were required in the
MyBookmarks one; the ui one keeps them optional.

## Files changed
- app/src/components/ui/NetworkWarning/NetworkWarning.tsx (Animate id)
- app/src/components/ui/NetworkWarning/NetworkWarning.test.tsx (2 tests: id with/without)
- app/src/components/ui/NetworkWarning/README.md (id rule, capture evidence)
- app/src/pages/MyBookmarks/components/MyBookmarksView.tsx (import)
- app/src/pages/MyBookmarks/components/NetworkWarning.tsx (deleted)
- app/src/pages/LDM_Email_V2/components/LdmEventEmailView.test.tsx (Animate id assertion `b1-b5-$b1`)

Story unchanged (already passes `id: 'b1-b9-$b5'`; the capture test covers the Animate id).

## Checks
typecheck, vitest (13 files, 124 tests), eslint: pass.

## Loop 1
`format:check` failed on `app/src/components/ui/NetworkWarning/README.md` (lines I added). Ran prettier --write on that
file only. `npm --prefix app run ci` exits 0. No other file changed.
