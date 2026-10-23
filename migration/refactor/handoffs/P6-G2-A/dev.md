## Result
status: pass
summary: Moved the 9 G2 routes from screens/<R> to pages/<R> with move.ts (one run per route), renamed index.tsx to <R>Page.tsx, added @origin tags. Typecheck, vitest (src/pages, 126 tests) and eslint pass; rf.py diffcheck --move ok.

## Files changed
app/src/screens/{ContactUsMenu,ContactUsDetails,ContactByEmailMember,ContactByEmailOneSchoolGlobal,ContactByEmailLDMCoordinator,ContactByEmailOrbitHelpdesk,ContactByEmailOrbitHost,EmailContact,EmailTarget}/** -> app/src/pages/<R>/** (git mv; index.tsx -> <R>Page.tsx)
app/src/pages/<R>/<R>Page.tsx (9 files): added one `@origin` line
app/src/pages/ContactByEmailMember/ContactByEmailMember.test.tsx: import './index' -> './ContactByEmailMemberPage'
app/src/pages/ContactByEmailOneSchoolGlobal/ContactByEmailOneSchoolGlobal.test.tsx: import './index' -> './ContactByEmailOneSchoolGlobalPage'
(codemod rewrote 4 import lines in other files)
migration/tools/refactor/add-origin-g2.py (new)

## Commands run
node migration/tools/refactor/move.ts --from ... --to ... --no-typecheck (x9) → ok
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages → 30 files, 126 tests pass
cd app && npx eslint src/pages → no output
rf.py diffcheck --move → ok (55 renames, 9 origin tags)

## Deviations from the brief
- index.tsx renamed to <R>Page.tsx (as in G1-A); two test import lines changed for that.
- @origin flow names taken from compiled source names (ContactFlow, App_Menu_ContactUs) and migration notes (Legacy_OrbitEventsFlow, Legacy_LDMEventsFlow).

## Questions for the user
none
