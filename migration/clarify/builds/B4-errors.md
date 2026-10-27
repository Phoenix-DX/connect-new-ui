# Build B4 (error paths), 2026-10-27

Group B4 builds the error paths of six major findings. They are the App_Common flow handler and the Services exception
handlers. They are also the failed data fetches of three flows and the app-start failure. All code is in `app/`. No
commit.

## App_Common F1: the BubbleCommunicationException branch

- TST evidence:
  - `UBTConnect.App_Common.controller.js:31-44` (flow handler OnException): the first branch tests
    `UBTConnect.BubbleCommunicationException` and runs ShowCommunicationExceptionMessage.
  - `:46-59` is the CommunicationException branch, `:61-89` SecurityException, `:91-105` AllExceptions.
- Files changed:
  - `app/src/legacy/os/exceptions.ts:57-59, 72-73`
  - `app/src/legacy/os/exceptions.test.tsx:12, 217-251`
  - `app/docs/guides/shell.md:401-405`
- What was built:
  - `raiseToFlowHandler` tests `isUserException(error, 'UBTConnect.BubbleCommunicationException')` first. That branch
    shows the communication message, as the CommunicationException branch does.
  - A bubbled "Request failed with status N" now shows "Service Interruption" online, or "No internet connection…"
    offline. React showed the raw text before.
  - BubbleGenericException keeps the AllExceptions branch.
- Note: `legacy/os/exceptions.ts` is outside the listed B4 folders. It is the only file of `raiseToFlowHandler`.
- Tests: `npx vitest run src/legacy/os/exceptions.test.tsx src/platform/feedback`: all pass. The callers that bubble
  (CountryList, Profile, Search, Services, EntityDetailsActions) pass in the full run.
- Proposed verdict: App_Common-166 `match`.

## App_Services F1 and F6: isLoading in the exception handlers

- TST evidence:
  - `UBTConnect.App_Services.Services.mvc.js:1320-1362` (OnClick_SaveChanges): NotRegistered raises at once. The
    CommunicationException and AllExceptions handlers set `isLoading = False`, then raise the bubble exception.
  - `:1706-1743` (Handler_SortableListOnDragEnd): the same two handlers set `isLoading = False`.
- Files changed:
  - `app/src/pages/Services/hooks/useServices.ts:5-10, 64-75, 102, 113-115, 128`
  - `app/src/pages/Services/hooks/useServices.test.tsx:136-159`
  - `app/src/pages/Services/Services.test.tsx` (the failed save test)
- What was built:
  - `raiseActionError` sets `isLoading` to false for a CommunicationException and for an error that is not a system
    exception. NotRegistered and a system exception keep `isLoading`. Then it calls `raiseBubbledToFlowHandler`.
  - Both actions use it (decision Q2 (a), user 2026-10-27; F6 with the fix of F1, as the report says).
  - After a failed save, the skeleton goes and "Save changes" is enabled again.
- Tests: `npx vitest run src/pages/Services`: 37 pass. Three save cases: CommunicationException, ServerException,
  NotRegisteredException.
- Proposed verdict: App_Services-061 `match`, App_Services-040 `match`.

## App_Services F2, Calendar F1: a failed query data action goes to the flow handler

- TST evidence:
  - `OutSystems.js:17` (the data fetch of a screen or block): a rejection runs `t.model.flush(),t.handleError(e)`.
  - `UBTConnect.App_Services.Services.mvc.js:1835-1837`: the screen handleError calls the App_Services flow handler.
  - `UBTConnect.App_Common.controller.js:24-26`: the flow handler ignores an IgnorableSystemException.
- Files changed:
  - `app/src/platform/feedback/flowErrors.ts:1-9, 31-58` (new hook `useFetchErrorToFlowHandler`)
  - `app/src/pages/Services/hooks/useServices.ts:62-63`
  - `app/src/pages/Services/hooks/useServices.test.tsx:161-177`, `app/src/pages/Services/Services.test.tsx:84-102`
  - `app/src/pages/MyEntertaining/hooks/useEntertainingCalendar.ts:7, 30-40`
  - `app/src/pages/MyEntertaining/hooks/useEntertainingCalendar.test.tsx` (the failed fetch test)
  - `app/src/pages/MyEntertaining/MyEntertaining.test.tsx` (the failed fetch test, with and without StrictMode)
  - `app/docs/guides/page-template.md:114-116`, `app/docs/guides/shell.md:410-412`
- What was built:
  - One shared way: the hook `useFetchErrorToFlowHandler(query)` reads `isError`, `error` and `errorUpdatedAt`.
  - It calls `raiseToFlowHandler` once per failed fetch. A ref stops a second call in StrictMode and on a new render.
  - It skips an IgnorableSystemException, as the App_Common handler does.
  - The query status still drives the `list-error` classes and the skeleton. Services keeps `list-error` with no
    skeleton. MyEntertaining keeps its skeleton.
  - The query hooks of `api/*/hooks.ts` do not change: `api/` must not import `platform/` (rule 7).
- Tests: `npx vitest run src/pages/Services src/pages/MyEntertaining`: all pass. Each test counts one message.
- Proposed verdict: App_Services-014 `match`, Calendar-060 `match`.

## Directory_SupperMeetings F1: a failed refresh goes to the flow handler

- TST evidence:
  - `UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js:720-722`: OnReady runs through
    `safeExecuteClientAction`; `:758-760` handleError calls the flow handler.
  - `UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js:324`: the same for the household list.
- Files changed:
  - `app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:8, 48-52, 94-97, 106-109`
  - `app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.test.tsx` (two tests)
  - `app/src/containers/SupperMeetingDetails/README.md` (Flows; the "Not settled" item is removed)
- What was built:
  - Each failed refresh first writes its state: the skeleton stays, or the household list gets the Error status.
    Then it calls `raiseToFlowHandler` once.
  - Two failures give two calls, one for each block, as the two OnReady flows of TST do.
  - A failure after an unmount still calls the flow handler. Decision W23 calls the message an app-level side effect.
    The old test said the opposite, so it is changed.
- Tests: `npx vitest run src/containers/SupperMeetingDetails src/pages/SupperMeeting_Details
  src/pages/SupperMeeting_Carousel`: 37 pass.
- Proposed verdict: Directory_SupperMeetings-042 `match`, Directory_SupperMeetings-079 `match`.

## _shared F3: the exception message after a failed app start

- TST evidence:
  - `UBTConnect.controller.js:15398-15417` (OnApplicationReady): Handle Error AllExceptions, when the exception is not
    a system exception, runs `ScreenController_RaiseError(message)`. A system exception is raised again.
  - `UBTJavaScriptUtils.controller.js:3900`: the JS node calls `screenController.handleError(new Error(Message))`.
- Files changed:
  - `app/src/platform/bootstrap/appStartSteps.ts:9, 193-199`
  - `app/src/platform/bootstrap/appStartSteps.test.ts:11, 186-212`
  - `app/docs/guides/shell.md:396-398`
- What was built:
  - The app start logs the error first, as TST does (`OS.Logger.error`).
  - A non-system exception then goes to `raiseToFlowHandler(new Error(message))`. The App_Common handler shows
    `showExceptionMessage(message, false)` (decision C3, user 2026-10-27).
  - A system exception, for example ViewHasChangedException, is only logged.
- Tests: `npx vitest run src/platform/bootstrap`: 47 pass. One test checks a ServerException message. One test checks
  that a 404 (system) gives no message.
- Proposed verdict: _shared-193 `match`.

## Checks

- `npm run typecheck`: no error in the B4 files. 19 errors are in files of other groups: MessageDetail tests,
  LDM_MyEvents_V2 `useMyTimelineFilterButton.test.tsx` and `FilterSheet.stories.tsx`.
- `npm run arch`: no violation.
- `npx eslint` and `npx prettier --check` on the changed files: clean.
- Full `npx vitest run`: 4087 pass, 8 fail. The 8 failures are in `api/event`, `api/locality` and `api/policy`. Other
  groups change those areas now. No B4 file is in their import path.

## Follow-ups (no decision needed)

- `app/src/pages/CountryDetails/hooks/useCountryDetails.ts:115` (GetLocalityStatistics) has the same gap as
  App_Services F2. The report names it. The folder is outside B4: add `useFetchErrorToFlowHandler`.
- Other query callers have no fetch-error raise: Search, Profile, HomeFeed (CommunityPopulation, FeedServices,
  FeedUpdates), CountryList, LegacyShareObject and ShareSheet. Check each against its TST block before a change.
  Two blocks log on purpose (`meta.errorLog`).
- `AcceptPendingPolicies` and `OneSchoolGlobalDetails` have their own copy of this pattern. They can use the shared hook.
- `raiseToFlowHandler` has no `ignoreError` guard (ACF:24-26), and it shows a message for a system exception.
  TST raises a system exception again (`throw ex`). Only the fetch hook skips an IgnorableSystemException now.
