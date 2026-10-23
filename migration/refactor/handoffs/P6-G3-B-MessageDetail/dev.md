## Result
status: pass
summary: Split ScreenBlock_MessageDetail into `hooks/useMessageDetail.ts` (it uses useFlowState), the pure `hooks/messageDetailState.ts` and the props-only `components/MessageDetailView.tsx`. `api.ts` and `types.ts` became `inputs.ts`, and the code now imports the domains directly. NotificationDetailBlock got its `@origin` tag. The W23 fix is in (see "W23 fix"). The quick checks pass, the full vitest run passes (2370 tests) and arch_baseline exits 0. Two rule-9 depcruise warnings are gone. The first load grows by 0.03 kB gzip (HomeFeed) and 0.01 kB gzip (Login) because of a new shared `flowState` chunk (see "Deviations").

## Files changed
app/src/pages/MessageDetail/MessageDetailPage.tsx
app/src/pages/MessageDetail/MessageDetail.test.tsx (new)
app/src/pages/MessageDetail/inputs.ts (git mv from api.ts, rewritten)
app/src/pages/MessageDetail/types.ts (deleted; the input type is in inputs.ts, the domain types come from @/api/message)
app/src/pages/MessageDetail/staticEntities.ts (git mv from components/staticEntities.ts, unchanged)
app/src/pages/MessageDetail/hooks/useMessageDetail.ts (git mv from components/ScreenBlock_MessageDetail.tsx, rewritten: the flows)
app/src/pages/MessageDetail/hooks/useMessageDetail.test.tsx (new)
app/src/pages/MessageDetail/hooks/messageDetailState.ts (git mv from components/actions.ts, rewritten: state, reducer, pure parts, client actions)
app/src/pages/MessageDetail/hooks/messageDetailState.test.ts (new)
app/src/pages/MessageDetail/components/MessageDetailView.tsx (new, the move-map target of ScreenBlock_MessageDetail)
app/src/pages/MessageDetail/components/MessageDetailView.test.tsx (new)
app/src/pages/MessageDetail/components/NotificationDetailBlock.tsx (comments only: `@origin` replaces `// @os-block`, compiled-line references removed)
app/src/pages/MessageDetail/components/NotificationDetailBlock.test.tsx (new)
migration/refactor/handoffs/P6-G3-B-MessageDetail/dev.md (new)

## Commands run
All commands ran in the worktree wt-MessageDetail with Node 24. These are the results after the W23 fix.
- `git branch --show-current` → `rf/prefetch-P6-G3-B-MessageDetail-56042eaf`. This is the prefetch worktree branch from 56042eaf on refactor/architecture, as the master asked.
- `npm --prefix app run typecheck` → exit 0
- `cd app && npx vitest run src/pages/MessageDetail` → exit 0, 5 files, 54 tests
- `cd app && npx vitest run` (full suite) → exit 0, 437 files, 2370 tests
- `cd app && npx eslint src/pages/MessageDetail` → exit 0, no warning
- `cd app && npx prettier --check src/pages/MessageDetail` → all files formatted. I applied the Prettier changes with the Edit tool, not with `--write`.
- `python3 migration/tools/refactor/arch_baseline.py check` → exit 0 (78 warnings, 78 baseline rows, 0 new, 0 gone)
- `cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err` (before the W23 fix) → 220 warnings (HEAD: 222). Removed: rule-9 `types.ts → legacy/os/os-wire` and `ScreenBlock_MessageDetail.tsx → legacy/os/exceptions`. Still there, from before this step: `components/NotificationDetailBlock.tsx → legacy/os/os-assets` (osImage). The W23 fix changed no import.
- `cd app && npx vite build && node build/bundle-report.mjs` → this change: HomeFeed 755.68 kB / 245.60 kB gzip, Login 608.78 / 186.95. HEAD (a `git archive` export in the scratchpad, same build): HomeFeed 755.62 / 245.57, Login 608.73 / 186.94.
- `cd app && npx knip` (before the W23 fix) → no unused file or unused value export in pages/MessageDetail. It lists 5 unused exported types (MessageDetailState, MessageDetailAction, MessageAccess, MessageDetailEvents, MessageDetailFlows); the hook test now uses MessageDetailFlows and the hook uses MessageDetailAction. Other pages have the same kind of finding (EmailContactFlows, HouseholdEmailInputs, ...). Step C handles them.

## Deviations from the brief
- F17 (first load): HomeFeed grows by 0.06 kB raw / 0.03 kB gzip and Login by 0.05 / 0.01. Cause: before this step, only HouseholdDetailsContainer used `useFlowState` (page-template.md requires it for flow hooks), so Rollup kept it in that chunk. Now two lazy routes use it, so Rollup puts it in a new shared chunk `flowState` (864 bytes). The entry's modulepreload map (`__vite__mapDeps`) gets one more file name. No module is added to the first load. This cost comes once: later pages that use useFlowState only add an index to the map. To get zero growth, the hook can go back to the hand-written useReducer + latest ref + useViewState pattern, which page-template.md forbids. The master decides.
- Superseded by the W23 fix: the first version stopped a flow at `isAlive()` after each await, and in dev ran OnReady two times. The flow now runs as the old port did (see "W23 fix").
- The `decrementReadMessagesCounter` duplicate stays: MessageDetail keeps its local copy in `hooks/messageDetailState.ts` (MessageList has its own copy). The doc comment names step P6-G3-C as the step that removes the duplicate.
- The view cache key changed from the two names `MessageDetail.variables` and `MessageDetail.data` to one record `MyNotifications.ScreenBlock_MessageDetail`. A restored view keeps the same values.
- Git: `types.ts` was deleted with `git rm`, and the new files were marked with `git add -N` (intent to add) so that `git diff --stat HEAD` lists them. Nothing was committed.
- Observation, no change made: in the mock data, the MessageList rows have MessageTemplateTypeId 1 (Private) and MessageInstance.UserId 0. The detail mock copies these values. So when you open a list row signed in, the app shows "You don't have access to that message" and goes back to the list. The old code did the same. MessageDetail.test.tsx adds its own public message to the mock store for the unread test.
- Shared blocks (LegacyLayout, MenuIconBack, Spinner, Card, SanitizedHtml) are imported from their current places and are not changed.

## W23 fix
Decision W23 (master request, 2026-10-24): a flow on useFlowState checks `isAlive` only before its state writes. The side effects of a flow that already started run to the end after the unmount, as in the old port.
- `useMessageDetail.ts`:
  - The flows have no `if (!isAlive()) return` after their awaits now.
  - Each state write goes through `write(action)`, which dispatches only while the screen is alive. After the unmount, these still run: the toast, ReplaceOnUpcomingNavigation, NavigateTo_MessageList / NavigateTo_Login, the counter decrement, Wrapper_NotificationOpened, Cache_SignedImageURL_Get, the template-parameters call and GetUserInformation.
  - StrictMode once-guard: `readyStarted` (a ref) lets OnReady run once per screen. The second call from StrictMode only stores its `isAlive` in `newestReadyRun`. So the one flow checks the newest run's liveness: true while the screen is mounted, false after the real unmount. In dev, GetMessageInstance, the toasts, the decrement and Wrapper_NotificationOpened now run once again, as in the old port.
  - GetMessageInstanceByIdOnAfterFetch keeps its own copy of the block variables (MessageInstanceId = the fetched id). Wrapper_NotificationOpened and the template-parameters call send the same id as before, also when the state write was skipped after the unmount.
- `useMessageDetail.test.tsx`: the old test "stops after an unmount" is replaced by the group "after an unmount and in StrictMode (decision W23)". The reducer is a spy, so the tests see every state write.
  - Unmount while GetMessageInstance is pending, then answer IsRetracted: the toast, ReplaceOnUpcomingNavigation and NavigateTo_MessageList run once each, and the reducer is not called.
  - Unmount, then answer an unread message: the counter goes down once, and Wrapper_NotificationOpened runs once with the fetched id. The reducer is not called.
  - In StrictMode, with `render`: GetMessageInstance and Wrapper_NotificationOpened run once, the counter goes down by 1, and the message loads. The "Invalid message detail id." message shows once.
  - I checked that the tests can fail. Without the once-guard, both StrictMode tests fail. When `write` always dispatches, both unmount tests fail. I put the code back after each check.
  - `renderHook` with a StrictMode wrapper does not run the mount effects twice in this setup (checked with a probe). So the StrictMode tests use `render` with a probe component.

## Questions for the user
none
