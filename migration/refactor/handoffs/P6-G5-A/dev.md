## Result
status: pass
summary: Moved the 16 G5 routes from screens/<R> to pages/<R> with move.ts (one folder run plus one index.tsx -> <R>Page.tsx run per route), added @origin tags. Typecheck, vitest (src/pages, 52 files, 254 tests) and eslint pass.

## Files changed
app/src/screens/{OrbitLanding,OrbitAdminLanding,OrbitAdminEventDetail,EventDetail,EventBooklet,MilestoneDetail,GuestArrangements,HelpersDetail,HostSurvey,TransportDetail,MyEntertaining,LDM_MyEvents_V2,LDM_EventDetail_V2,LDM_Email_V2,AssembleEvents,AssembleDetail}/** -> app/src/pages/<R>/** (git mv; index.tsx -> <R>Page.tsx)
app/src/pages/<R>/<R>Page.tsx (16 files): added one `@origin` line
codemod rewrote import lines in moved and other files (60 files in the unstaged diff; only import lines)
migration/tools/refactor/add-origin-g5.py (new)

## Commands run
node migration/tools/refactor/move.ts --from/--to (x32) --no-typecheck -> ok
npm --prefix app run typecheck -> exit 0
cd app && npx vitest run src/pages -> 52 files, 254 tests pass
cd app && npx eslint src/pages -> no output
rf.py diffcheck --move -> FAIL only because of base diffs in the index (shared/UBTConnect/lib/actions.ts etc. from earlier steps); no NOT A MOVE line for any G5 file except the @origin additions

## Deviations from the brief
- index.tsx renamed to <R>Page.tsx (as in G1-A..G4-A); AssembleEvents.test.tsx import './index' -> './AssembleEventsPage' (done by the codemod).
- @origin flows: from compiled names; LDM_* use Legacy_LDMEventsFlow and MyEntertaining uses Calendar (as found in the migration notes).
- Empty leftover screens/<R>/components dirs removed.
- codemod warned that the import.meta.glob in app/src/mocks/handlers.ts is not rewritten; typecheck and tests pass, same as earlier steps.

## Questions for the user
none

## Loop 1
- Cause: format:check failed on app/src/pages/AssembleDetail/components/AssembleEventDetail_Localities.tsx (line 24); the shortened import now fits on one line.
- Fix: `npx prettier --write` on that file only (formatting only), then `git add` on it.
- Checked: prettier --check on all staged app files of the step -> clean; `npm --prefix app run format:check` -> pass; `npm --prefix app run typecheck` -> exit 0.
- Questions for the user: none
