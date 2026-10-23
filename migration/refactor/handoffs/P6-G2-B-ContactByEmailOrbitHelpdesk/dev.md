## Result
status: pass
summary: ContactByEmailOrbitHelpdesk is now a page with `config.ts`, `inputs.ts` and `hooks/useContactByEmailOrbitHelpdeskSubmit.ts`, and its card is the shared `ContactHeaderCard`. This follows the pattern of the pilot P6-G2-B-ContactByEmailMember (decision Q6). I did not change `components/contact/*`. A temporary old-vs-new check gave byte-identical DOM and call order in 6 of 6 scenarios. Typecheck, eslint, prettier, arch baseline and all 2225 tests pass.

## Files changed
app/src/pages/ContactByEmailOrbitHelpdesk/ContactByEmailOrbitHelpdeskPage.tsx (rewritten: `useNoCommonUi`, inputs, config, submit hook, `<ContactHeaderCard imageSrc={osImage(ORBIT_LOGO)} title="Orbit Helpdesk" />`; compiled-line references removed)
app/src/pages/ContactByEmailOrbitHelpdesk/config.ts (added: `contactByEmailOrbitHelpdeskConfig(inputs)` → `'Email'`, primary, placeholders, `inSubject: inputs.In_Subject`, `inUseDynamicTextAreaSubject: true`)
app/src/pages/ContactByEmailOrbitHelpdesk/hooks/useContactByEmailOrbitHelpdeskSubmit.ts (added: IsLoading and Handler_SubmitForm, unchanged; `sendContactEmail` from `@/api/message`, `raiseToFlowHandler` from `@/platform/feedback/flowErrors`)
app/src/pages/ContactByEmailOrbitHelpdesk/api.ts → app/src/pages/ContactByEmailOrbitHelpdesk/inputs.ts (git mv, then rewritten: the input type and `readContactByEmailOrbitHelpdeskInputs`. I removed the `sendContactEmail` re-export, because the hook imports it from `@/api/message`.)
app/src/pages/ContactByEmailOrbitHelpdesk/types.ts (deleted: the input type is now in inputs.ts)
app/src/pages/ContactByEmailOrbitHelpdesk/components/actions.ts → app/src/pages/ContactByEmailOrbitHelpdesk/actions.ts (git mv, content unchanged; the empty `components/` folder is gone)
app/src/pages/ContactByEmailOrbitHelpdesk/ContactByEmailOrbitHelpdesk.test.tsx (added: the page had no test; 5 tests)
migration/refactor/handoffs/P6-G2-B-ContactByEmailOrbitHelpdesk/dev.md (this report)

Not changed: `mocks.ts` (its comments are still true) and all of `components/contact/*`.

For the documenter, not changed by me:
- `app/docs/refactor/move-map.csv:279`: the note of the ContactByEmailOrbitHelpdesk row. It is now a page with config.ts, inputs.ts and hooks/useContactByEmailOrbitHelpdeskSubmit.ts. api.ts and types.ts are folded into inputs.ts, components/actions.ts moved to actions.ts, and the card is ContactHeaderCard.
- `app/docs/refactor/calls-by-domain.md:135`: still names `screens/ContactByEmailOrbitHelpdesk/api.ts`. The caller of `ActionSendContactEmail` is now `pages/ContactByEmailOrbitHelpdesk/hooks/useContactByEmailOrbitHelpdeskSubmit.ts`.
- `app/src/components/contact/ContactHeaderCard/README.md` "Status": OrbitHelpdesk now uses the card (I did not edit it, because the master told me not to change components/contact/*).
- The CHANGELOG entry.

## Commands run
temporary old-vs-new check (vitest, `oldnew.tmp.test.tsx`, deleted after use): the real form, 3 query strings (empty; a full event with In_Subject; empty Long Integers without a subject) × send succeeds or fails = 6 scenarios. For each scenario I recorded `document.body.innerHTML` after the first render, after typing, after Send and after 500 ms, and the call order (allowUpcomingNavigation, appManager_GetCachedUserInfo, sendContactEmail with its arguments, the ApplicationEvent log, navigateBack, showFeedbackMessage, raiseToFlowHandler). I recorded these before and after the change. Result: 30 of 30 records are byte-identical.
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages/ContactByEmailOrbitHelpdesk src/components/contact src/mocks → 9 files, 41 tests pass
cd app && npx vitest run → 416 files, 2225 tests pass
cd app && npx eslint --max-warnings 0 src/pages/ContactByEmailOrbitHelpdesk → exit 0
cd app && npx prettier --check src/pages/ContactByEmailOrbitHelpdesk → pass (I ran prettier --write on the hook first: one signature line wrap)
python3 migration/tools/refactor/arch_baseline.py check → exit 0: 47 warnings, 47 baseline rows, 0 new, 0 gone
cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err → 210 warnings (211 before). The page → legacy/os/exceptions warning (rule 9) is gone. The page → legacy/os/os-assets warning (rule 9, `osImage`) is not new, and finished pages such as AcceptPendingPolicies and ContactUsDetails keep it too.
cd app && npx knip → no finding in pages/ContactByEmailOrbitHelpdesk/ or components/contact/ContactHeaderCard/
Not run (tester): ci, parity, build and bundle report. I added no import to the entry or the shell. The new modules and ContactHeaderCard are imported only by the lazy route chunk of ContactByEmailOrbitHelpdesk.

## Deviations from the brief
- Branch: as the master told me, I worked in the prefetch worktree on the branch `rf/prefetch-P6-G2-B-ContactByEmailOrbitHelpdesk-52510c7`, not on `refactor/architecture`. The index holds the diff of P6-G2-B-ContactByEmailMember. My two `git mv` renames are staged. All other changes are unstaged or untracked.
- Test added: the page had no test. The new test follows pattern item 7 of the pilot. It mocks `@/api/message`, `@/platform/feedback/flowErrors` and `@/platform/navigation`, checks that `onBeforeSubmitForm` is the spy and runs before the send, and covers the send arguments, the ContactHelpdesk event, the 500 ms message, the defaults of absent inputs and the error path.
- OrbitHelpdesk has no `staticEntities.ts`, so pattern item 6 moved only `components/actions.ts`.

## Questions for the user
none
