## Result
status: pass
summary: LDM_MyEvents_V2 is a page now. ScreenBlock_MyEvents_V2 is split, as in move-map row 16, into `components/LdmMyEventsView.tsx` (props only) and `hooks/useLdmMyEvents.ts` (useFlowState, W23 once-guard), with the pure `hooks/ldmMyEventsState.ts`. The filter button's flow is in `hooks/useMyTimelineFilterButton.ts`. `api.ts` and `types.ts` are deleted: the code imports `@/api/event` and `@/api/locality` directly. A temporary old-vs-new probe (now deleted) ran 17 scripted scenarios and gave identical DOM, calls, bodies, URLs, audit events and raised errors. Typecheck, lint, prettier and the full unit suite (2923 tests) pass.

## Files changed
app/src/pages/LDM_MyEvents_V2/LDM_MyEvents_V2Page.tsx (rewritten: hook + view; navigation stays in the page)
app/src/pages/LDM_MyEvents_V2/LDM_MyEvents_V2.test.tsx (new, page test)
app/src/pages/LDM_MyEvents_V2/api.ts (deleted)
app/src/pages/LDM_MyEvents_V2/types.ts (deleted)
app/src/pages/LDM_MyEvents_V2/components/ScreenBlock_MyEvents_V2.tsx (deleted; replaced by LdmMyEventsView + useLdmMyEvents)
app/src/pages/LDM_MyEvents_V2/components/LdmMyEventsView.tsx (new)
app/src/pages/LDM_MyEvents_V2/components/MyEvents_MyTimelineFilterButton.tsx (flow moved to its hook)
app/src/pages/LDM_MyEvents_V2/components/MyTimeline_V2.tsx (type import from @/api/event, @origin)
app/src/pages/LDM_MyEvents_V2/components/EventCard_V2.tsx (type import from @/api/event, @origin)
app/src/pages/LDM_MyEvents_V2/components/EventCard_Info_V2.tsx (type import from @/api/event, @origin)
app/src/pages/LDM_MyEvents_V2/components/EventCard_Guests.tsx (type import from @/api/event, @origin)
app/src/pages/LDM_MyEvents_V2/components/EventCard_Box.tsx (@origin)
app/src/pages/LDM_MyEvents_V2/components/OverlappingImages.tsx (@origin)
app/src/pages/LDM_MyEvents_V2/components/actions.ts (the flow-only date actions and EventView_MyTimeline moved to hooks/ldmMyEventsState.ts)
app/src/pages/LDM_MyEvents_V2/hooks/ldmMyEventsState.ts (new)
app/src/pages/LDM_MyEvents_V2/hooks/ldmMyEventsState.test.ts (new)
app/src/pages/LDM_MyEvents_V2/hooks/useLdmMyEvents.ts (new)
app/src/pages/LDM_MyEvents_V2/hooks/useLdmMyEvents.test.tsx (new, with the W23 unmount tests)
app/src/pages/LDM_MyEvents_V2/hooks/useMyTimelineFilterButton.ts (new)
app/src/pages/LDM_MyEvents_V2/hooks/useMyTimelineFilterButton.test.tsx (new)
migration/refactor/handoffs/P6-G5-B-LDM_MyEvents_V2/dev.md (this report)

The step changed 20 code files, all in `pages/LDM_MyEvents_V2/`. It changed no `api/` domain file (`fetchEventsForMyTimeline` and `fetchEventFilterLocalities` already exist) and did not use `api/image`. It changed no shared block and no doc. No change to `openapi.yaml`, `src/mocks/**` or `public/UBTConnect/css/**`. `pages/LDM_MyEvents_V2/mocks.ts` is unchanged. Nothing is staged (the master stages).

## Commands run
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages/LDM_MyEvents_V2 → exit 0, 4 files, 38 tests
cd app && npx vitest run (full unit suite) → exit 0, 517 files, 2923 tests
cd app && npx eslint src/pages/LDM_MyEvents_V2 → exit 0, 0 problems
cd app && npx prettier --check src/pages/LDM_MyEvents_V2 → clean
python3 migration/tools/refactor/arch_baseline.py check → exit 0 (82 warnings, 82 rows, 0 new, 0 gone; the route has no baseline row)
cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err → 0 errors, 196 warnings (base 198). The route's rule-9 warnings fell from 5 to 3. The ScreenBlock's two warnings (os-exceptions, exceptions) became one in `hooks/useLdmMyEvents.ts → legacy/os/exceptions`. The filter button's warning is gone (raiseToFlowHandler now comes from platform/feedback/flowErrors). The two `os-assets` warnings of EventCard_Info_V2 and EventCard_Guests are unchanged.
cd app && npx knip → no unused file or value export in the route (only the exported Props/Flows types, as on the other pages). I removed the two unused exports it found (EventView_MyTimeline, MAX_AGE_DAYS_FETCH_THRESHOLD).
cd app && npm run build && node build/bundle-report.mjs → HomeFeed 751.30 kB raw / 244.41 kB gzip, Login 601.25 raw / 184.40 gzip. Base (the same tree with the old route files from the index, built in the scratchpad and then deleted): HomeFeed 751.30 / 244.39, Login 601.24 / 184.40. The entry grows by 3 bytes because the route's preload list now names the shared `flowState` chunk (useFlowState, the template pattern). That is +0.02 kB gzip for HomeFeed and +0.01 kB raw for Login, far below the W21 tripwire of 0.3 kB per step.
Temporary old-vs-new probe (a vitest file; run on the base code before any change, then on the new code, then deleted) → 17 scenarios, byte-identical JSON results (document HTML, called actions, request bodies of both data actions, URLs, preload object, audit events with RequestTime normalized, errors given to the flow handler). The scenarios: default; StrictMode; event click; carousel on (expand + guest arrow, URL and preload); carousel off; phone popup + Mobile; message popup + Email (ContactByEmailMember URL); message Cancel; My calendar; filter popup; 500 then Try again; loading; back navigation (phone popup open before leaving: closed, no new timeline call, filter localities fetched again as before); OnScrollEnding (older window body); unmount while the fetch is pending (audit once); unmount then 500 (UnknownError raised once); disabled record (upgrade dialog). Two runs of the old code were identical too.

## Deviations from the brief
1. W23. In `useLdmMyEvents`, `isAlive` guards only the state writes of the flows (OnReady, TryAgain, OnScrollEnding). The RequestAPI_CalendarEvents audit event and the raised errors still happen after the unmount, as in the old port. A once-guard (a `started` ref, and the newest `isAlive` in a ref) keeps StrictMode from running OnReady twice. Tests: `useLdmMyEvents.test.tsx` "after the unmount (W23)" (success and failure), and "runs once in StrictMode".
2. W28 / P6-F17 (beforePaint): does not apply. The old ScreenBlock and the filter button ran OnReady in `useEffect`, not `useLayoutEffect`. I made no `useReadyBeforePaint` and did not copy the F17 `flowState.ts`.
3. The filter button keeps its own effect in `useMyTimelineFilterButton` and does not use useFlowState. Its variables were never in the view cache, so a back navigation fetches the localities again (the probe shows this in the old code). useFlowState would save them and stop that fetch, which is a behavior change. MyEvents_MyTimelineFilterButton calls its hook, as the block components of Locality_Details do.
4. The navigation handlers (the block events) stay in the page and go to the hook as `events`. The page reads the C2EnableCarousel flag. The page re-renders when the block state changes (before, only the block re-rendered). The probe shows the same calls, including the BottomBar's ServiceAPIGet_UI_UpdateItems_UnreadCount_All.
5. The view-cache key of the block state changed from `Model` to `LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2`. The key is internal. A restored view now closes the popups in the `restore` option of useFlowState. The old guard `restored && saved` became `restored`: the saved record always exists after the first OnReady write.
6. The page `@origin` is now `UBTConnect.Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2`. The tag that P6-G5-A added named `Legacy_LDMEventsFlow` without `_V2`. The move-map row 302 and the source file name (`UBTConnect.Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2.mvc.js`) have `_V2`. Note for the master: `add-origin-g5.py` gave LDM_EventDetail_V2 and LDM_Email_V2 the same flow name, so check those two pages too.
7. The 7 page-local block files have `@origin` in their JSDoc instead of `// @os-block`. Only their imports and tags changed, so their compiled-line references stay. The rewritten files (page, view, hooks, filter button) have no compiled-line references.
8. The hook keeps one import of `@/legacy/os/exceptions` (NotRegisteredException, UserException, exceptionMessage, isSystemException), as Search, Profile, CountryList and Notifications do. No platform module re-exports these, and platform/ is outside this step. It is one rule-9 warning, moved from the deleted ScreenBlock (which had two).
9. For the documenter: `docs/refactor/calls-by-domain.md` lines 61 and 106 (`screens/LDM_MyEvents_V2/api.ts`) and `src/api/README.md` line 40 (the old `api.ts` and `types.ts` files that re-export) are out of date for this route. The move-map rows 16 and 302 (status, shape), the CHANGELOG and `docs/reference/screens.md` line 65 (still `src/screens/LDM_MyEvents_V2/`) also need an update. I did not edit docs, as in the earlier B steps.
10. I did not do a browser check. The probe compared the DOM in jsdom and found no difference, and no CSS changed. The tester's parity run covers the browser.

## Questions for the user
none
