## Result
status: pass
summary: Moved the 10 G1 routes from screens/<R> to pages/<R> with the codemod (move.ts, one run per route), renamed index.tsx to <R>Page.tsx (the loader in app/screens.ts expects it), added @origin tags. Typecheck, vitest (src/pages) and eslint pass.

## Files changed
app/src/screens/{Login,Splash,PINRegister,PINUnlock,PINChange,PINBiometricsMenu,AcceptPendingPolicies,Menu,TermsAndPoliciesMenu,Profile}/** -> app/src/pages/<R>/** (all files, git mv; index.tsx -> <R>Page.tsx)
app/src/pages/<R>/<R>Page.tsx (10 files): added one line `/** @origin UBTConnect.<flow>.<R> */` at the top
app/src/pages/Profile/Profile.test.tsx: import './index' -> './ProfilePage'
(codemod rewrote 5 import lines in other files: Menu 3 in 2 files, Profile/other 1 each)
migration/tools/refactor/add-origin-g1.py (new, adds the @origin lines)

## Commands run
node migration/tools/refactor/move.ts --from app/src/screens/<R> --to app/src/pages/<R> --no-typecheck (x10) → ok
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages → 2 files, 3 tests pass
cd app && npx eslint src/pages → no output

## Deviations from the brief
- index.tsx renamed to <R>Page.tsx (path only) so app/screens.ts picks the page; globs in screens.ts and mocks/handlers.ts already cover pages/ and screens/, so no edit there.
- Profile.test.tsx import line changed (module path of the renamed file).
- @origin flow names taken from the compiled source file names (migration/screens/<R>/analysis/sources/pretty); AcceptPendingPolicies from existing code comments (App_Policies).

## Questions for the user
none
