## Result
status: pass
summary: EmailContact is now a page with two hooks: `useOrbitContactForm`, which holds the flows of ScreenBlock_ContactForm, with a pure state file, and `useEmailContact`, which holds OnHandle_Submitted. A props-only view, `OrbitContactFormView`, renders the form. `api.ts`, `types.ts` and `ScreenBlock_ContactForm.tsx` are deleted, and the inputs are in `inputs.ts`. A temporary old-vs-new test (now deleted) ran 7 scenarios 10 times and found the same DOM, field values, calls, bodies, messages, navigation and audit log every time. Typecheck, eslint, prettier, 2211 tests and arch_baseline pass.

## Files changed
app/src/pages/EmailContact/EmailContactPage.tsx (rewritten: reads the inputs and the flag, calls the two hooks, renders OrbitContactFormView + CommonUiLayout)
app/src/pages/EmailContact/inputs.ts (new: EmailContactInputs and readEmailContactInputs, from api.ts and types.ts)
app/src/pages/EmailContact/components/actions.ts -> app/src/pages/EmailContact/actions.ts (git mv, then edited: compiled-line references removed; FeedbackMessageAfterTransition moved here from the page)
app/src/pages/EmailContact/hooks/useOrbitContactForm.ts (new: flows of ScreenBlock_ContactForm)
app/src/pages/EmailContact/hooks/orbitContactFormState.ts (new: block variables, reducer, widget ids, pure rules: isFilled, hasUnsentText, toOrbitContactEmail)
app/src/pages/EmailContact/hooks/orbitContactFormState.test.ts (new)
app/src/pages/EmailContact/hooks/useEmailContact.ts (new: OnHandle_Submitted)
app/src/pages/EmailContact/components/OrbitContactFormView.tsx (new: the form markup, props only, with the Input_Subject and FormTextArea widgets)
app/src/pages/EmailContact/components/OrbitContactFormView.stories.tsx (new: Default (helpdesk), Host, Submitting)
app/src/pages/EmailContact/components/OrbitContactFormView.test.tsx (new, composeStories)
app/src/pages/EmailContact/EmailContact.test.tsx (new: page test against the MSW mocks)
app/src/pages/EmailContact/api.ts (deleted: readInputs and a re-export of sendContactFormEmail)
app/src/pages/EmailContact/types.ts (deleted: input types only, folded into inputs.ts)
app/src/pages/EmailContact/components/ScreenBlock_ContactForm.tsx (deleted: split into the hook, the state file and the view)
migration/refactor/handoffs/P6-G2-B-EmailContact/dev.md (this report)

## Commands run
npm --prefix app run typecheck → exit 0
cd app && npx eslint src/pages/EmailContact → exit 0, 0 warnings
cd app && npx prettier --check src/pages/EmailContact → exit 0 (the page test was formatted with prettier --write first)
cd app && npm run format:check → exit 0
cd app && npx vitest run src/pages/EmailContact src/mocks/handlers.test.ts src/api/message → exit 0, 7 files, 88 tests
cd app && npx vitest run → exit 0, 414 files, 2211 tests
python3 migration/tools/refactor/arch_baseline.py check → exit 0 (48 warnings, 48 baseline rows, 0 new, 0 gone; EmailContact had no row)
cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err → no warning in src/pages/EmailContact (the old block's rule-9 import of legacy/os/exceptions is gone)
cd app && npx knip → no unused file or value export in src/pages/EmailContact; only the exported props and state interfaces are listed as unused types, as for the G1 pages (PendingPoliciesFormProps, TermsAndPoliciesMenuState)
cd app && npx vite build && node build/bundle-report.mjs → build exit 0; Login 193.08 kB gzip, HomeFeed 244.95 kB gzip; EmailContact code only in its route chunk EmailContactPage-*.js, no entry or shell import added
temporary test (src/__tmp_parity/, deleted): the old page (HEAD copy) against the new page in renderRoutes, 7 scenarios (helpdesk send, host send, event without a helpdesk address, navigation dialog for helpdesk and host, the MessageMaxLength key up, no Orbit access) → same body HTML (dialog portal included), field values, calledActions, SendContactEmail bodies, feedback message and type, location and ApplicationEvent log in each step; 10 runs, all pass. The first runs were flaky because the BottomBar unread badge answers at its own time; the test waited for the badge after that.

## Deviations from the brief
- I worked in the prefetch worktree wt-EmailContact, on branch rf/prefetch-P6-G2-B-EmailContact-53ac3e7 (base 53ac3e7), as the master told me, not on refactor/architecture.
- Shape: page + 2 hooks + 1 component. No container: one data source, no data hook, and the view is props only (move-map row 7: hook+component, target components/OrbitContactFormView.tsx, hook hooks/useOrbitContactForm.ts). Decision Q6: EmailContact stays a separate page and does not use ContactEmailForm.
- `useFlowState` is not used. It saves the state in the view cache and restores it after a back navigation. The ported block uses a plain `useReducer`, which a back navigation does not restore, so `useFlowState` would change the behavior. The hook uses `useReducer` with a pure reducer file and a `latest` ref, as useProfile and useMenu do.
- Item 4 (api.ts → domain hooks): the hook calls the repository function `sendContactFormEmail` of `@/api/message` directly, as the page template says for flows. The existing `useSendContactFormEmailMutation` is not used, and `api/message` is unchanged.
- Same-function swaps in the rewritten code: `raiseToFlowHandler` now comes from `@/platform/feedback/flowErrors`, which re-exports the same function, so the page no longer imports legacy/os (rule 9). `useFlagOn('mobileOrbitAccess')`, the adapter, became `useFlag` of the `@/platform/flags` barrel, which the shell already loads. The literal message type 3 became `PLATFORM_MESSAGE_TYPE.error` (also 3).
- Effect order: OnReady (UserFullName from the cached user info) now runs in the page component, after the effects of CommonUiLayout and not before them. OnReady makes no call and only sets a variable, and the old-vs-new test showed the same calls and DOM.
- The page test spies `useNavigateBack`. In the test router, a back navigation from the route goes to HomeFeed for the old page too (I checked this with the old page), so with a real back the test could not tell Orbit access from no access.
- Shared blocks are imported from where they are and not changed: InputCounter, NavigationConfirmationDialog and DEPRECATED_ButtonLoading (P7 targets), OrbitLayout, MenuIcon, BottomBar and CommonUiLayout. Nothing under components/contact/ is touched. mocks.ts is unchanged.
- Git: the deletions were staged with `git rm`, and the actions.ts move with `git mv`. The new files are untracked: `git diff` does not show them, but `git status` does. Nothing is committed.
- For the documenter: move-map row 7 (`src/screens/EmailContact/components/ScreenBlock_ContactForm.tsx`) needs status `moved`, with the extra files `hooks/orbitContactFormState.ts` and `hooks/useEmailContact.ts`. `app/docs/refactor/calls-by-domain.md:138` still names `screens/EmailContact/api.ts`, and SendContactEmail is now called from `pages/EmailContact/hooks/useOrbitContactForm.ts`.

## Questions for the user
none
