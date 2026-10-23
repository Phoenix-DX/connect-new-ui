## Result
status: pass
summary: ContactByEmailOrbitHost is now a page in the pilot pattern (decision Q6). It has `config.ts`, `inputs.ts` and `hooks/useContactByEmailOrbitHostSubmit.ts`, and its card is the shared `ContactPersonCard`. `api.ts` and `types.ts` are merged into `inputs.ts` and the hook. No file in `components/contact/*` changed. A temporary old-vs-new check showed the same DOM and the same calls in 6 of 6 cases. Typecheck, eslint, prettier and all 2226 tests pass. `arch_baseline.py check` exits 0.

## Files changed
app/src/pages/ContactByEmailOrbitHost/ContactByEmailOrbitHostPage.tsx (rewritten: `useNoCommonUi`, inputs, config, submit hook, Layout_DetailPage > ContactEmailForm > ContactPersonCard; compiled-line references removed)
app/src/pages/ContactByEmailOrbitHost/api.ts → app/src/pages/ContactByEmailOrbitHost/inputs.ts (git mv, then rewritten: the `ContactByEmailOrbitHostInputs` type and `readContactByEmailOrbitHostInputs(params)`. The `sendContactEmail(inputs, userSubject, message)` wrapper is now in the hook file.)
app/src/pages/ContactByEmailOrbitHost/types.ts (deleted: the input type is now in inputs.ts)
app/src/pages/ContactByEmailOrbitHost/config.ts (added: `contactByEmailOrbitHostConfig(inputs)` → title `Contact the <In_Surname> household`, not primary, placeholders, dynamic subject text area)
app/src/pages/ContactByEmailOrbitHost/hooks/useContactByEmailOrbitHostSubmit.ts (added: IsLoading, Handler_SubmitForm, the SendContactEmail wrapper and the local `scheduleFeedbackMessageAfterTransition`; it uses `raiseToFlowHandler` from `@/platform/feedback/flowErrors`)
app/src/pages/ContactByEmailOrbitHost/ContactByEmailOrbitHost.test.tsx (added: 6 tests. The route had no test before.)
migration/refactor/handoffs/P6-G2-B-ContactByEmailOrbitHost/dev.md (this report)

For the documenter (I did not change these files):
- `app/docs/refactor/move-map.csv:280`: the note of the ContactByEmailOrbitHost row still lists `api.ts, types.ts, components/`. The page now has config.ts, inputs.ts and hooks/useContactByEmailOrbitHostSubmit.ts. api.ts and types.ts are merged into inputs.ts and the hook. The route has no `components/` folder.
- `app/docs/refactor/calls-by-domain.md:136`: still names `screens/ContactByEmailOrbitHost/api.ts`. The caller of `ActionSendContactEmail` is now `pages/ContactByEmailOrbitHost/hooks/useContactByEmailOrbitHostSubmit.ts`.
- The CHANGELOG entry.

## Commands run
temporary old-vs-new check (vitest, `src/pages/ContactByEmailOrbitHost/zzOldNew.test.tsx`, deleted after use): 6 query strings (full, country only, locality only, empty, avatar with entity type, send error). The real ContactEmailForm was used. I recorded the DOM after the first render, after typing, and after Send. I also recorded the call log (allowUpcomingNavigation, sendContactEmail with its full payload, navigateBack, showFeedbackMessage after 500 ms, raiseToFlowHandler). I recorded before and after the change → 24 of 24 comparisons byte-identical.
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages/ContactByEmailOrbitHost src/components/contact src/mocks → 9 files, 42 tests pass
cd app && npx vitest run src/pages/ContactByEmail → 3 files, 16 tests pass
cd app && npx vitest run → 416 files, 2226 tests pass
cd app && npx eslint --max-warnings 0 src/pages/ContactByEmailOrbitHost → exit 0
cd app && npx prettier --check src/pages/ContactByEmailOrbitHost → pass
python3 migration/tools/refactor/arch_baseline.py check → exit 0: 47 warnings, 47 baseline rows, 0 new, 0 gone
cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err → exit 0, 210 warnings, 0 in pages/ContactByEmailOrbitHost/. The old page's warning rule-9 (→ `legacy/os/exceptions`) is gone.
Not run (these are for the tester): ci, parity, build and bundle report. I added no import to the entry or the shell. The new modules are imported only by the lazy route chunk of ContactByEmailOrbitHost. `ContactPersonCard` was already imported by the lazy chunk of ContactByEmailMember.

## Deviations from the brief
- Branch: as the master told me, I worked in the prefetch worktree on the branch `rf/prefetch-P6-G2-B-ContactByEmailOrbitHost-52510c7`, not on `refactor/architecture`. The base is the index, which holds the uncommitted diff of P6-G2-B-ContactByEmailMember. I did not unstage anything. The `git mv` of api.ts → inputs.ts is staged. The other changes are not staged.
- Pattern step 6 (move `components/actions.ts` and `components/staticEntities.ts`): not applicable, because OrbitHost has no `components/` folder. Its `scheduleFeedbackMessageAfterTransition` was inline in the page. It is now a local function (not exported) in the hook file, because the hook is its only caller. I added no `actions.ts`.
- Pattern step 3: OrbitHost has no OnInitialize record to keep. Its OnInitialize sets only `EmailTo`, and nothing reads it. The hook keeps the comment about this and holds no form state, as the old page did.
- Tests: the route had no test file, so I added `ContactByEmailOrbitHost.test.tsx` (pattern step 7: mocks of `@/api/message`, `@/platform/feedback/flowErrors` and `@/platform/navigation`). No test was deleted.

## Questions for the user
none
