## Result
status: pass
summary: ContactByEmailOneSchoolGlobal is now a page that follows the Q6 pattern of the pilot. It has `config.ts`, `inputs.ts`, `actions.ts` and `hooks/useContactByEmailOneSchoolGlobalSubmit.ts`, and its card is the shared `ContactHeaderCard`. I did not change `components/contact/*`. A temporary old-vs-new check gave the same DOM, calls and log entries in 8 of 8 cases. Typecheck, eslint, prettier, `arch_baseline.py check` and all 2221 tests pass.

## Files changed
app/src/pages/ContactByEmailOneSchoolGlobal/ContactByEmailOneSchoolGlobalPage.tsx (rewritten: useNoCommonUi, inputs, config, submit hook, Layout_DetailPage > ContactEmailForm > ContactHeaderCard)
app/src/pages/ContactByEmailOneSchoolGlobal/config.ts (added: `contactByEmailOneSchoolGlobalConfig`, a constant `ContactEmailPageConfig`)
app/src/pages/ContactByEmailOneSchoolGlobal/hooks/useContactByEmailOneSchoolGlobalSubmit.ts (added: IsLoading, the OnInitialize record and Handler_SubmitForm, which has the same steps as before)
app/src/pages/ContactByEmailOneSchoolGlobal/actions.ts (added: `scheduleFeedbackMessageAfterTransition` and `zOnApplicationEvent_Wrapper`, moved out of the page with the same body)
app/src/pages/ContactByEmailOneSchoolGlobal/api.ts → app/src/pages/ContactByEmailOneSchoolGlobal/inputs.ts (git mv, then rewritten: the input type and the reader; the `sendContactMemberEmail` re-export is removed, and the hook imports it from `@/api/message`)
app/src/pages/ContactByEmailOneSchoolGlobal/types.ts (deleted: the input type is now in inputs.ts, and the hook imports `ContactByEmailForm` from `@/api/message`)
app/src/pages/ContactByEmailOneSchoolGlobal/components/staticEntities.ts → app/src/pages/ContactByEmailOneSchoolGlobal/staticEntities.ts (git mv, content unchanged; the empty `components/` folder is removed)
app/src/pages/ContactByEmailOneSchoolGlobal/mocks.ts (comment only: the handler path after P6-G2-B-Shared, and platform/bootstrap in place of src/shell)
app/src/pages/ContactByEmailOneSchoolGlobal/ContactByEmailOneSchoolGlobal.test.tsx (the test now mocks `@/api/message` and `@/platform/feedback/flowErrors` in place of `./api` and `@/legacy/os/exceptions`, and spies on `allowUpcomingNavigation`; 1 new test)
migration/refactor/handoffs/P6-G2-B-ContactByEmailOneSchoolGlobal/dev.md (this report)

For the documenter, not changed by me:
- `app/docs/refactor/move-map.csv:278`: the notes of the ContactByEmailOneSchoolGlobal row. The page now has config.ts, inputs.ts, actions.ts and hooks/useContactByEmailOneSchoolGlobalSubmit.ts. api.ts and types.ts are folded into inputs.ts, and the card is ContactHeaderCard.
- `app/docs/refactor/calls-by-domain.md:134`: still names `screens/ContactByEmailOneSchoolGlobal/api.ts`. The caller of `ServiceAPISendContactMemberEmail` is now `pages/ContactByEmailOneSchoolGlobal/hooks/useContactByEmailOneSchoolGlobalSubmit.ts`.
- The CHANGELOG entry.

## Commands run
temporary old-vs-new check (vitest, file deleted after use), 4 query strings x success and error: the default capture, an empty query, an In_ContactName with HTML characters, and In_EmailTo only. For each case I recorded the DOM after the first render, after typing, after Send and after 500 ms. I also recorded the call order (allowUpcomingNavigation, send with its record, navigateBack, feedback, raise) and the log entries. I ran the check on the base before the change and again after it. Result: the JSON files are byte-identical (`cmp`), 8 of 8.
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages/ContactByEmailOneSchoolGlobal src/components/contact src/mocks → 9 files, 40 tests pass
cd app && npx vitest run → 415 files, 2221 tests pass
cd app && npx eslint src/pages/ContactByEmailOneSchoolGlobal → exit 0, 0 warnings
cd app && npx prettier --check src/pages/ContactByEmailOneSchoolGlobal → pass (I ran prettier --write on the hook file first)
python3 migration/tools/refactor/arch_baseline.py check → exit 0: 47 warnings, 47 baseline rows, 0 new, 0 gone
cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err → 210 warnings in total. One is in pages/ContactByEmailOneSchoolGlobal/: the page imports `osImage` from `legacy/os/os-assets` (rule 9). That warning was there before, and ContactUsDetails and OrbitHelpdesk have the same import. The rule-9 warning for `legacy/os/exceptions` is gone: the hook now gets `raiseToFlowHandler` from `@/platform/feedback/flowErrors`.
Not run (tester): ci, lint:arch, parity, build and bundle report. I added no import to the entry or the shell. The new modules are imported only by the lazy route chunk of ContactByEmailOneSchoolGlobal.

## Deviations from the brief
- Branch: as the master told me, I worked in the prefetch worktree on the branch `rf/prefetch-P6-G2-B-ContactByEmailOneSchoolGlobal-52510c7`, not on `refactor/architecture`. The base is 52510c7 plus the staged diff of P6-G2-B-ContactByEmailMember. I did not change the staged pilot diff. My `git mv` calls added 2 renames to the index. All my other changes are unstaged.
- `config.ts` exports a constant (`contactByEmailOneSchoolGlobalConfig`), not a function `(inputs) => config`. None of the values on this screen depends on an input, and a parameter that is not used gives an unused-variable warning. The page reads it as `const config = contactByEmailOneSchoolGlobalConfig`.
- Handler_SubmitForm keeps the shape it had on this screen: the try/catch is around SendContactMemberEmail only, and the event, the message and the back navigation come after it. The pilot (Member) puts all of these steps in the try. I kept the old shape so that the behavior does not change. Today the page writes the OnInitialize record back to a ref on each submit. The hook keeps it in `useState`, as the pilot does, and does not write it back. This is not visible: Subject and Message are set again on each submit, and the other fields are constant. The old-vs-new check confirms this.
- `actions.ts` is a new file. Before, the two helpers were inline in the page. Point 6 of the pattern puts them at the page root, so they are in `actions.ts` with one `@origin` tag. Rule 8 of the pattern: I removed their compiled-line references (`mvc.js :599-604`, `controller.js:7565-7590`). `staticEntities.ts` is only moved, so its text did not change.
- Rule 6: I made the edit of ContactByEmailOneSchoolGlobal.test.tsx with a small Python script in the scratchpad (2 exact-string replacements, each checked by an assert), not with the Edit tool or a script kept in migration/tools/refactor/. You can see the diff with `git diff`. I made all other edits with Edit and Write.
- The test does not mock the form, as it did not before. The real ContactEmailForm runs, so the new test checks the call order: `allowUpcomingNavigation` runs once and before the send. The pilot checks that `spy.form.onBeforeSubmitForm` is the spy, but that needs a mocked form. No test was deleted.

## Questions for the user
none
