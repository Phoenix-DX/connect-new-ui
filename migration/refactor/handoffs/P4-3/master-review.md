# Master review: P4-3 test item 4 (`@origin`)

The tester failed P4-3 only on diff-review item 4: `appStartSteps.ts` (ports the app event OnApplicationReady),
`postLogin.ts` (ports the client action Connect_SetLoggedContext) and `mockAuth.ts` (ports `shell/auth.ts`) have no
`@origin` tag. All gates passed (ci, lint:arch, parity strict 64/0 on both references, bundle, e2e:pwa 8/8, the four
extra checks).

Decision M3 (master, 2026-10-23, row in `migration/refactor/auto-decisions-2026-10-22.md`): the finding is outside
the rule. Plan v2 §1.4 rule 6 and §2.4 rule 13 (R4) ask for `@origin` only in a file that ports an OutSystems screen
or block. None of the three files ports a screen or block, and no file in `platform/` has the tag today. No code
changed after the test run, so its gate results stand. The step goes on to the docs stage with fix loop 1 recorded.
