## Result
status: pass
summary: ci, arch baseline, parity visual, bundle and the diff review pass. W23 holds: useMessageList never uses isAlive, so no side effect is skipped after unmount.

## Files changed
migration/refactor/handoffs/P6-G3-B-MessageList/test.md

## Commands run
npm --prefix app run ci → exit 0, 456 files, 2450 tests passed (no F11 flake), build ok
npm --prefix app run lint:arch → 0 errors, 53 warnings
python3 migration/tools/refactor/arch_baseline.py check → 52 warnings, 52 baseline rows, 0 new, 0 gone
cd app && npx eslint <changed src files> → 0 warnings in the changed files
refactor_parity.py --app http://localhost:5174 --level visual --changed --ref both → 5 routes (MessageList, Notes, Search, Updates_SingleList...), outsystems 5/0, self 5/0, PASS (MessageList/search both refs OK)
bundle-report.mjs → HomeFeed 246.03 kB gzip (limit 248.22; Search step 246.06, so -0.03), Login 187.03 (limit 193.84). W21 tripwire: margin 2.19 kB (>1.0), step adds <0.3 kB

## Diff review
1 No change in openapi.yaml, mocks fixtures, public css: pass.
2 No deleted test file: pass (deleted files are api.ts, ScreenBlock_MessageList.tsx, actions.ts; tests added).
3 Scope: pass, only pages/MessageList and migration/refactor bookkeeping.
4 @origin: pass on all ported screens/blocks. The helpers textEllipsis.ts, unreadNotifications.ts, staticEntities.ts and types.ts have none (not screen or block ports).
5 n/a (change step).
6 Behavior: no change found. Reviewed the hook against the old flows; developer's 16-script old-vs-new run is not re-run by me.
7 No secret, password, PIN or email in the diff: pass.

## W23 check (useFlowState in hooks/useMessageList.ts)
- onReady and onParametersChanged passed to useFlowState take no isAlive argument. isAlive is never read in pages/MessageList (grep: no match). So nothing is guarded or skipped after unmount.
- useFlowState itself only passes isAlive to the callbacks; it does not stop them. After unmount, the flows still run feedback (showFeedbackMessage), navigation event (eventsRef.onNavigateToMessageDetail), server calls, setUnreadNotificationsNumber, decrementReadMessagesCounter, synchronizeNumberUnreadMessages. dispatch only writes the state and the view cache.
- The once-guard (readyRef) only prevents the StrictMode double OnReady. It is not an unmount guard.
- Note (not a failure): the GetMessages key ['MessageList','DataActionGetMessages'] stays in the hook on purpose (back-navigation restore), not in api/message/keys.ts. Documenter should record it.

## Deviations from the brief
none

## Questions for the user
none
