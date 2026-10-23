## Result
status: pass
summary: All gate checks pass on the main tree (HEAD cbb79b2 plus the 35 staged files). Parity strict, both references: 64 routes, 0 differences. The call check compares only the set of input names, not the order of the keys in the JSON body.

## Files changed
none (test.md only; the parity tool wrote app/docs/refactor/reports/P5-3-message.md)

## Commands run
- dev server: http://localhost:5174 → HTTP 200; cwd of the listener is /Users/khaitruong/Projects/connect-new/app.
- `npm run ci` (Node 24.21.0) → exit 0; 373 test files, 2009 tests pass; build ok.
- `npm run lint:arch` → exit 0; 186 dependency warnings, 0 errors; eslint 1 warning (components/ui/os/OSPopup/usePopupWidget.ts, from before the step). None in src/api/message.
- `npx eslint <staged src files>` → exit 0; no warning on the changed files.
- `python3 migration/tools/refactor_parity.py --level strict --changed --ref both --app http://localhost:5174 --jobs 2 --report app/docs/refactor/reports/P5-3-message.md` → exit 0, PASS: outsystems 64/64 clean, self 64/64 clean (64 routes, 48 changed files, 8.3 min).
- `node app/build/bundle-report.mjs` (after the build in ci) → HomeFeed 244.00 kB gzip (baseline 236.40, limit 248.2), Login 192.09 kB gzip (baseline 184.61, limit 193.8). Within 5 percent.
- `rf.py diffcheck --move`: not run; the step is a change step.
- Step "Check": the brief names none besides the gate commands.

## Body key order
The call check (`diffCalls` in parity_check.cjs) compares the action names, the number of calls and the set of input names (missing and extra). It does not compare the order of the keys in the JSON body or nested values. The three shared-mapper sends (ContactByEmailOneSchoolGlobal, ContactByEmailOrbitHelpdesk, EmailContact) are user actions that parity does not trigger, so parity does not exercise them. The unit tests in src/api/message cover the mapper. Key order in a JSON body has no semantic effect; I count this as no behavior change.

## Diff review
1. openapi.yaml, mocks fixtures, public css: no change. Pass.
2. Deleted test files: none. Pass.
3. Scope: only api/message, the 11 message screens, Directory_EntityDetailsActions, Connect2_LegacyShared/lib and platform/bootstrap/startup.ts. These match the dev.md list and the inventory. Pass.
4. @origin: the new files are domain code, not ports of a screen or block; the domain files of api/event carry no @origin tag either. Not applicable.
5. Not a move step. Not applicable.
6. Change step, no behavior change seen: the screens re-export the domain functions under their old names; sendContactEmail now returns IsSuccess, which its caller ignores; LocalityId is dropped, and nothing reads it (per dev.md). The only change in the wire format is the key order. Pass.
7. Secrets: the added emails are fictional @example.com values in tests; `Password: ''` is an empty input. No real secret. Pass.

## Deviations from the brief
none

## Questions for the user
none
