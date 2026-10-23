# Brief: G1 (App_Common SecurityException branch), a migration fix on `refactor/architecture`

Not a refactor step. Decision U2 (user, 2026-10-23: "oki tôi accept 2 quyết định của Fable"); Fable's proposal is in
`migration/refactor/followups.md`, row G1. Branch: W7 (Window 4, Opus high and Fable high): make the fix directly on
`refactor/architecture`, as its own commit outside the refactor steps; `main` does not change. The user's order of
2026-10-23: G1 first, then Phase 6 group G1.

## The gap

OutSystems App_Common `OnException` handles a SecurityException as follows:

- the user is signed in: toast with the message, `Connect_Logout`, then a full load of `/UBTConnect/Login`;
- the user is anonymous: navigate to `/UBTConnect/Login?In_IsFromInvalidPermissions=True`.

The clone shows only a toast. No mock answers a SecurityException, so parity cannot see the gap. P5-1 added
`signedOutRemotely()` (`app/src/platform/session/auth.ts`) as the single entry point for "the server ended the
session"; today only the forced-logout branch of `app/src/platform/feedback/exceptionMessages.ts` uses it (decision
rf Q12, option C).

## Do

1. Find the compiled App_Common `OnException` handler in the TST sources (the static survey, the captured runtime
   scripts or `migration/knowledge/`; never `.auth/` or `migration/.raw/`) and cite its lines in the code comment, as
   the other ports do. Port that branch exactly: the order of the toast, the logout and the navigation, and the
   check for a signed-in user.
2. Write the failing tests first: a SecurityException that reaches the flow handler (`raiseToFlowHandler`, see
   `app/src/platform/navigation/flowState.ts`, `app/src/platform/feedback/flowErrors.ts` and
   `app/src/legacy/os/exceptions.ts`) with a signed-in user ends in the same state and storage as the forced-logout
   path, and the browser goes to Login; with an anonymous user the app goes to
   `/UBTConnect/Login?In_IsFromInvalidPermissions=True`. Other exception types keep today's behavior.
3. Implement it with `signedOutRemotely()`; add no second logout path.
4. Add one mock scenario that answers a SecurityException (follow the existing scenario mechanism of `src/mocks`;
   add a scenario, do not change the existing fixtures), so the path can be tried by hand.
5. Quick checks: typecheck; the vitest suites of the changed folders and of `src/platform/session`; eslint and
   prettier on the changed files; `npm run lint:arch` (no new error or warning).
6. Do not change `src/api/openapi.yaml`, existing mock fixtures or CSS. Do not commit.

## Gate (tester)

- `npm --prefix app run ci`.
- `python3 migration/tools/refactor_parity.py --level strict --changed --ref both --app http://localhost:5174`: no
  difference (the new path is reached only by the new scenario).
- Review the diff against this brief: the branch matches the cited compiled code, one logout path, tests cover both
  users and one other exception type.
