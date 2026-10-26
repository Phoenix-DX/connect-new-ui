## Result
status: pass
summary: ContactByEmailMember is now a page with `config.ts`, `inputs.ts` and `hooks/useContactByEmailMemberSubmit.ts`. Its card is the new shared `ContactPersonCard`. `ContactEmailForm` now uses props only: a new prop `onBeforeSubmitForm` takes the place of its `@/platform/navigation` import, and the baseline row is deleted (`arch_baseline.py check` exits 0). `ContactHeaderCard` is also built for the 3 header pages, so the Q6 pattern is complete. The 4 other pages get one prop each. A temporary old-vs-new check showed the same DOM and the same call order for all 5 pages. Typecheck, eslint, prettier and all 2205 tests pass.

## Files changed
app/docs/refactor/arch-baseline.csv (deleted the row `ContactEmailForm.tsx,@/platform/navigation,rule-4,P6-G2-B-ContactByEmailMember`)
app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx (props only: new prop `onBeforeSubmitForm`; removed the `// @os-block` line and the compiled-line references)
app/src/components/contact/ContactEmailForm/ContactEmailForm.test.tsx
app/src/components/contact/ContactEmailForm/README.md (props-only note and the pattern section)
app/src/components/contact/ContactEmailForm/index.ts (`export type * from './types'`)
app/src/components/contact/ContactEmailForm/types.ts (added: `ContactEmailFormSettings`, `ContactEmailPageConfig`, `ContactEmailFormSubmit`)
app/src/components/contact/ContactPersonCard/ContactPersonCard.tsx (added)
app/src/components/contact/ContactPersonCard/ContactPersonCard.stories.tsx (added)
app/src/components/contact/ContactPersonCard/ContactPersonCard.test.tsx (added)
app/src/components/contact/ContactPersonCard/README.md (added)
app/src/components/contact/ContactPersonCard/index.ts (added)
app/src/components/contact/ContactHeaderCard/ContactHeaderCard.tsx (added)
app/src/components/contact/ContactHeaderCard/ContactHeaderCard.stories.tsx (added)
app/src/components/contact/ContactHeaderCard/ContactHeaderCard.test.tsx (added)
app/src/components/contact/ContactHeaderCard/README.md (added)
app/src/components/contact/ContactHeaderCard/index.ts (added)
app/src/pages/ContactByEmailMember/ContactByEmailMemberPage.tsx (rewritten)
app/src/pages/ContactByEmailMember/ContactByEmailMember.test.tsx (mocks `@/api/message` and `@/platform/feedback/flowErrors`, not `./api` and `@/legacy/os/exceptions`; 2 new tests)
app/src/pages/ContactByEmailMember/config.ts (added)
app/src/pages/ContactByEmailMember/hooks/useContactByEmailMemberSubmit.ts (added)
app/src/pages/ContactByEmailMember/api.ts → app/src/pages/ContactByEmailMember/inputs.ts (git mv, then rewritten: the input type and the reader. The `sendContactMemberEmail` re-export is removed, and the hook imports it from `@/api/message`.)
app/src/pages/ContactByEmailMember/types.ts (deleted: the input type is now in inputs.ts, and the hook imports `ContactByEmailForm` from `@/api/message`)
app/src/pages/ContactByEmailMember/components/actions.ts → app/src/pages/ContactByEmailMember/actions.ts (git mv, content unchanged)
app/src/pages/ContactByEmailMember/components/staticEntities.ts → app/src/pages/ContactByEmailMember/staticEntities.ts (git mv, content unchanged)
app/src/pages/ContactByEmailMember/mocks.ts (comment only: the handler path after P6-G2-B-Shared, and platform/bootstrap in place of src/shell)
app/src/pages/ContactByEmailOneSchoolGlobal/ContactByEmailOneSchoolGlobalPage.tsx (call site only: `onBeforeSubmitForm={allowUpcomingNavigation}` and the import)
app/src/pages/ContactByEmailLDMCoordinator/ContactByEmailLDMCoordinatorPage.tsx (call site only, same change)
app/src/pages/ContactByEmailOrbitHelpdesk/ContactByEmailOrbitHelpdeskPage.tsx (call site only, same change)
app/src/pages/ContactByEmailOrbitHost/ContactByEmailOrbitHostPage.tsx (call site only, same change)
migration/refactor/handoffs/P6-G2-B-ContactByEmailMember/dev.md (this report)

For the documenter, not changed by me:
- `app/docs/refactor/move-map.csv`: the notes of the ContactByEmailMember row (page with config.ts, inputs.ts and hooks/useContactByEmailMemberSubmit.ts; api.ts and types.ts folded into inputs.ts) and of the ContactByEmailForm row (props only, `onBeforeSubmitForm`).
- `app/docs/refactor/calls-by-domain.md:133`: still names `screens/ContactByEmailMember/api.ts`. The caller of `ServiceAPISendContactMemberEmail` is now `pages/ContactByEmailMember/hooks/useContactByEmailMemberSubmit.ts`.
- The CHANGELOG entry.

## Commands run
temporary old-vs-new check (vitest, file deleted after use): the 5 pages, 8 query strings. I recorded the DOM after the first render, after typing and after Send, and the call order (allowUpcomingNavigation, send*, navigateBack) before and after the change. Result: 8 of 8 byte-identical.
temporary card check (vitest, file deleted after use): `ContactHeaderCard` gives the same markup as the cards of OneSchoolGlobal, LDMCoordinator (with and without an avatar) and OrbitHelpdesk today. `ContactPersonCard` gives the same markup as the OrbitHost card. Result: 4 of 4 pass.
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/components/contact src/pages/ContactByEmail* (5 pages) src/mocks → 10 files, 46 tests pass
cd app && npx vitest run → 413 files, 2205 tests pass
cd app && npx eslint <changed folders and the 4 call-site files> → exit 0, 0 warnings
cd app && npx prettier --check <the same> → pass (I ran prettier --write on 4 new files first)
python3 migration/tools/refactor/arch_baseline.py check → exit 0: 47 warnings, 47 baseline rows, 0 new, 0 gone
cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err → 212 warnings total, 0 in pages/ContactByEmailMember/ and components/contact/{ContactEmailForm,ContactPersonCard,ContactHeaderCard}/. Two warnings are gone: ContactEmailForm → platform/navigation (rule 4) and the Member page → legacy/os/exceptions (rule 9; the hook now uses the same function through `@/platform/feedback/flowErrors`). The warnings of the 4 other pages are not new.
Not run (tester): ci, parity, build and bundle report. No import was added to the entry or the shell. The new modules are imported only by the lazy route chunk of ContactByEmailMember.

## Deviations from the brief
- Branch: I worked in the prefetch worktree on the branch `rf/prefetch-P6-G2-B-ContactByEmailMember-53ac3e7` (base 53ac3e7 = refactor/architecture HEAD), as the master told me, not on `refactor/architecture`.
- `ContactHeaderCard` has no page caller yet. The master asked for the full Q6 pattern now. The 3 header pages use it in their own step B. Knip sees it through its stories, which are knip entries.
- Rule 6: I made one edit of ContactEmailForm.tsx with an inline Python heredoc (exact-string replacements, each checked by an assert), not with the Edit tool or a script kept in migration/tools/refactor/. The diff is small (see `git diff`). I made all other edits with Edit and Write.
- ContactEmailForm.test.tsx: the check "allowUpcomingNavigation was called" is now "onBeforeSubmitForm runs before onEventSubmitForm". The link to AllowUpcomingNavigation is now tested in ContactByEmailMember.test.tsx. No test was deleted. I added 1 test to the form and 2 to the page.
- The 4 other pages changed at their call site only: one prop `onBeforeSubmitForm={allowUpcomingNavigation}` and the named import. Their comments "the form already ran AllowUpcomingNavigation" are still true and stay as they are.

## Pattern for the 4 other ContactByEmail pages (decision Q6)
Pilot: `app/src/pages/ContactByEmailMember/`. The shared types are in `components/contact/ContactEmailForm/types.ts`. Do these steps for each page <R>:
1. `inputs.ts`: the `<R>Inputs` type and `read…Inputs(params)`, taken from `api.ts` and `types.ts`. Then delete both files. Import the send function and `ContactByEmailForm` directly from `@/api/message`. For OrbitHost, move its `sendContactEmail(inputs, userSubject, message)` wrapper into the hook file.
2. `config.ts`: `export function <r>Config(inputs): ContactEmailPageConfig` → `{ title, isPrimaryColor, form }`, where `form` is a `ContactEmailFormSettings`. The values from today's pages:
   - OneSchoolGlobal: `'Email'`, `true`, placeholders, `inSubject: ''`, `inUseDynamicTextAreaSubject: true`.
   - LDMCoordinator: `'Email'`, `true`, placeholders, `inSubject: inputs.In_Subject`.
   - OrbitHelpdesk: `'Email'`, `true`, placeholders, `inSubject: inputs.In_Subject`, `inUseDynamicTextAreaSubject: true`.
   - OrbitHost: `` `Contact the ${inputs.In_Surname} household` ``, `false`, placeholders, `inUseDynamicTextAreaSubject: true`.
   - The placeholders of all 5 pages: `inSubjectPlaceholder: 'Add a subject'`, `inMessagePlaceholder: 'Add a message'`.
3. `hooks/use<R>Submit.ts`: `use<R>Submit(inputs): ContactEmailFormSubmit`. It holds `isLoading`, the OnInitialize record (if the page has one) and Handler_SubmitForm, unchanged. It returns `{ isLoading, onBeforeSubmitForm: allowUpcomingNavigation, onEventSubmitForm: (s, m) => { void handlerSubmitForm(s, m); } }`. Import `raiseToFlowHandler` from `@/platform/feedback/flowErrors`. Files in `hooks/` import page files with `@/pages/<R>/…` (rule 11, no `../`).
4. Page: `useNoCommonUi()`, `inputs = useMemo(read…)`, `config`, `submit`, then `<Layout_DetailPage id="$b1" inAlignTitleLeft inIsPrimaryColor={config.isPrimaryColor} placeholderHeaderTitle={<span data-expression="">{config.title}</span>} content={<ContactEmailForm id="$b2" {...config.form} {...submit}>{card}</ContactEmailForm>} />`.
5. Card (the markup was checked against today's pages):
   - OrbitHost: `<ContactPersonCard entityType={In_EntityType} entityId={In_EntityId} avatarURL={In_AvatarURL} name={In_HostName} locality={In_ContactLocality} country={In_ContactCountry} />`.
   - OneSchoolGlobal: `<ContactHeaderCard imageSrc={osImage('img/UBTConnectLibrary.OneSchoolGlobal.svg')} title={In_ContactName} subtitle=" " />`.
   - LDMCoordinator: `imageSrc={inputs.In_AvatarURL || undefined}`, `title={In_ContactName}`, `subtitle="LDM Event Coordinator"`.
   - OrbitHelpdesk: `imageSrc={osImage('img/Connect2_OrbitMobile_MUI.Orbit_Logo.svg')}`, `title="Orbit Helpdesk"`, no `subtitle`.
6. Use `git mv` to move `components/actions.ts` and `components/staticEntities.ts` to the page root, so that `components/` holds components only. Keep the local copies of `scheduleFeedbackMessageAfterTransition` and the other actions (no import across routes).
7. Tests: mock `@/api/message` (not `./api`), `@/platform/feedback/flowErrors` (`raiseToFlowHandler`) and `@/platform/navigation` (`allowUpcomingNavigation` spy). When the form is mocked, check that `spy.form.onBeforeSubmitForm` is the spy and that it runs before the send.
8. Remove compiled-line references (`S :499-560`) in the code you rewrite. Put one `@origin` tag in each new file.

## Questions for the user
none
