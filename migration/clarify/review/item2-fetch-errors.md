# Item 2: error handling of the data calls (2026-10-28)

Item 2 of the user's work list (`../RESUME.md`): the follow-ups of build B4 (`../builds/B4-errors.md`). Evidence
order (user, 2026-10-28): the MCP (Service Studio, DEV) first, then the compiled TST code (live since the source
switch), then the React code. When DEV and TST differ, TST wins and the difference is noted. Runtime behaviour that
the model cannot show comes from TST and from a read-only probe.

## 1. Established behaviour

| # | Fact | MCP (DEV) | Compiled TST (live) | Probe |
|---|---|---|---|---|
| E1 | A failed data fetch of a screen calls the screen handleError, then the flow handler | Screen data actions `Fetch = AtStart`; no handler on the data action | `OutSystems.js` `executeDataFetchAction`: `t.model.flush(), t.handleError(e)`; screens: `_flow_<Flow>Controller.default.handleError` (84 files) | CountryDetails: "Service Interruption" shown |
| E2 | Every UBTConnect flow handler goes to the App_Common handler | One `OnException` in UBTConnect (App_Common) | 37 flow controllers: `return _flow_UBTConnect_App_CommonController.default.handleError(ex, callContext)` | - |
| E3 | A failed data fetch of a block also reaches the App_Common handler, for blocks of UBTConnect and of other modules | Blocks have no handler; UBTConnect_Utils, UBTConnect_EmbedFeed, Connect2_LegacyShared and UBTConnect_EmbedMyEntertaining have no `OnException` | Blocks (557 files): `handleError = function (ex) { return controller.handleError(ex); }`; `controller` is not declared in the file or the runtime (the mechanism is not visible in the code) | Communication message shown for FeedBlock_CommunityPopulation, SupperMeeting_DetailsBlock, Embedded_FeedCMS, Embedded_MyEntertaining, ProfileList (search); none in the control run; no unhandled rejection |
| E4 | App_Common `OnException` branches, in the compiled order: BubbleCommunicationException and CommunicationException → ShowCommunicationExceptionMessage; SecurityException → Has User Id? (ShowExceptionMessage with ForceLogout, or Login with In_IsFromInvalidPermissions); AllExceptions (not a system exception) → **new**: message contains "NoteCommunicationError" → ShowCommunicationExceptionMessage, else ShowExceptionMessage(message, False) | `OnException` of App_Common (same nodes and the new If node) | `migration/shell/sources/UBTConnect.App_Common.controller.js:12-125`, If node at :98 | - |
| E5 | The handler first ignores an ignorable error: `OS.ErrorHandling.ignoreError` = IgnorableSystemException (ViewHasChanged, OutOfOrder, …), or LicensingException (then the app-offline page) | Not in the model (runtime) | ACF:24-26; `OutSystems.js` ErrorHandling `d(e,t)` | - |
| E6 | A system exception that is not ignorable is raised again (`throw ex`); the runtime then opens `_error.html` with the exception (`navigateToErrorPage`) | Not in the model (runtime) | ACF:119-125; ErrorHandling `l(e,t)` / `s(...)` | - |
| E7 | ShowCommunicationExceptionMessage: **new** JS node CheckIsOnlineNow (`navigator.onLine`); the "Service Interruption" message (Info) when `Client.App_NetworkStatus_IsOnline_IsPersistent and IsOnlineNow`, else "No internet connection…" (Error) | Client action ShowCommunicationExceptionMessage (CheckIsOnlineNow, If) | `migration/runtime-sources/UBTConnect.controller.js:16097-16158`; the survey of 2026-10-13 had only the client variable | - |
| E8 | NotesSheet raises `UserException("UBTConnect_Utils.CommunicationError", "NoteCommunicationError")` for a CommunicationException of Handler_OnSubmitNote (new) | Module UBTConnect_Utils is open in the MCP (not read yet) | `UBTConnect_Utils.CW_Notes.NotesSheet.mvc.js:605-620` (live); absent on 2026-10-13 | - |

| E9 | A fetch that fails after the user left the screen or block shows nothing; the same fetch shows the message when the user stays | Not in the model (runtime) | The mechanism is not readable in the minified runtime | `probe-fetch-errors-late.json`: CountryDetails (data action at start) and SupperMeeting_DetailsBlock (Refresh in OnReady) left with Back → no message; the control (stay) → "Service Interruption" |

Probe: `../tools/probe_fetch_errors.cjs` (read-only, guard on, allowed by the user 2026-10-28), output
`probe-fetch-errors.json`. Each probe aborts one read as a failed request (CommunicationException). With `--late`,
the read is held open and fails after a Back (`probe-fetch-errors-late.json`).

The data sources of D4–D12 in the MCP (DEV) and in TST (the dependency value of the compiled controller: 0 = fetch
at start, -1 = on demand):

| Data source | MCP (DEV) | TST |
|---|---|---|
| FeedBlock_CommunityPopulation FetchCount | Data action, AtStart, no handler | `fetchCount$DataActRefresh: 0` |
| Embedded_FeedCMS GetFeedConfig | Data action, AtStart | in `dataFetchActionNames` |
| FeedBlock_Updates FetchUpdates | Data action, AtStart | in `dataFetchActionNames` |
| CountryDetails GetLocalityStatistics | Data action, OnDemand | `-1`; refreshed in Action_RefreshData without Handle Error |
| ShareSheet GetRecentlyShared | Data action, OnDemand | `-1` (GetAvailableMembers also `-1`) |
| ProfileList GetAvailableUsers | Data action, AtStart | `0` |
| ScreenBlock_ShareObject GetShareObjectTypeById | Screen aggregate, AtStart | `0` |
| Profile GetCountryInfo | Data action, OnDemand | `-1` |
| ScreenBlock_Search Get_SearchBirthdayOptions | Screen aggregate, OnDemand | `-1` |

No DEV≠TST difference in these rows.

## 2. The B4 assumptions, checked again

| B4 item | Result | Evidence |
|---|---|---|
| App_Common F1 (BubbleCommunicationException branch) | Confirmed | MCP `OnException` node BubbleCommunicationException → ShowCommunicationExceptionMessage2; TST ACF |
| App_Services F1, F6 (`isLoading` in the exception handlers) | Confirmed | MCP OnClick_SaveChanges, Handler_SortableListOnDragEnd: AllExceptions and CommunicationException set isLoading False, then raise BubbleGenericException or BubbleCommunicationException; NotRegistered raises at once |
| App_Services F2, Calendar F1 (failed query → flow handler) | Confirmed for screens and blocks | E1, E3; probe Embedded_MyEntertaining |
| Directory_SupperMeetings F1 (failed block refresh → flow handler) | Confirmed | E3; probe SupperMeeting_DetailsBlock |
| _shared F3 (app start error) | Confirmed | MCP system event OnApplicationReady: AllExceptions (LogError) → ScreenController_RaiseError(ExceptionMessage); MCP ScreenController_RaiseError: `screenController.handleError(new Error(Message))` |

## 3. React today: the differences

| # | React location | React today | TST (E1–E8) |
|---|---|---|---|
| D1 | `app/src/legacy/os/exceptions.ts` `raiseToFlowHandler` | No ignore step: an IgnorableSystemException shows a message; a system exception shows a message | E5: ignored silently; E6: raised again, then the error page |
| D2 | `app/src/platform/feedback/exceptionMessages.ts:17-23` `showCommunicationExceptionMessage` | Client variable only | E7: also `navigator.onLine` at the moment of the error |
| D3 | `raiseToFlowHandler` AllExceptions branch | No "NoteCommunicationError" check | E4 (new If node); the raise of E8 is not in React (the new Notes flow is not built) |
| D4 | `app/src/api/member/hooks.ts:46-55` (FeedBlock_CommunityPopulation, used by `pages/HomeFeed/HomeFeedPage.tsx:79` and `pages/CountryList/CountryListPage.tsx:23`) | `meta.errorLog` only: a log, no message | E3 (probe): the communication message |
| D5 | `app/src/api/feed/hooks.ts:22` via `platform/session/useEmbeddedFeed.ts:40` (Embedded_FeedCMS) | `meta.errorLog` only | E3 (probe): the communication message |
| D6 | `pages/HomeFeed/hooks/useFeedServices.ts:57`, `useFeedUpdates.ts:61` (FeedBlock_Services, FeedBlock_Updates) | Error status only (skeleton, `hasFetchError`) | E3: the message (blocks of the Home flow, as D4) |
| D7 | `pages/CountryDetails/hooks/useCountryDetails.ts:110-115` (GetLocalityStatistics) | Error status only | E1 (probe): the message |
| D8 | `containers/ShareSheet/useShareSheet.ts:114-115` (GetRecentlyShared, GetAvailableMembers) | Error status only | E3 (the same block mechanism; not probed: the sheet opens on a user tap) |
| D9 | `pages/LegacyShareObject/hooks/useProfileList.ts:113-131` (ProfileList GetAvailableUsers) | Error status only | E3 (probe): the message |
| D10 | `pages/LegacyShareObject/hooks/useShareObject.ts:54` (ScreenDataSetGetShareObjectTypeById) | Error status only | E1/E3: to confirm the owner block of the aggregate |
| D11 | `pages/Profile/hooks/useProfile.ts:115` (DataActionGetCountryInfo, on demand) | Error status only | E1: to confirm how the screen refreshes it (a Refresh in an action with or without Handle Error) |
| D12 | `pages/Search/hooks/useSearch.ts:173` (Get_SearchBirthdayOptions of ScreenBlock_Search) | Error status only | To confirm: a data action or a server action in a client action, and its handlers |
| D13 | `pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:56-67`, `pages/OneSchoolGlobalDetails/hooks/useOneSchoolGlobalDetails.ts:48-61` | Own copies of the fetch-error raise (OneSchoolGlobalDetails raises on each change of `error`, and does not skip an ignorable error) | E1/E5: one raise per failed fetch, ignorable errors skipped |
| D14 | `pages/MessageList/hooks/useMessageList.ts:116-124` | Raises after a failed refetch | Same as TST (no change) |

Notes:
- The query hooks in `api/*/hooks.ts` cannot import `platform/` (architecture rule 7). The B4 hook
  `useFetchErrorToFlowHandler` (`platform/feedback/flowErrors.ts:31-58`) is called by the page or container hook.
- Drift found on the way, not part of item 2. Live TST HomeFeed has a new screen data action GetCommunityStatistics
  (OnReady refresh). Live CountryList has GetCommunityStatistics and GetCountriesStatistics. The React screens still
  use FeedBlock_CommunityPopulation. That belongs to the new judge of the Home and Directory_Locality routes
  (decision (c)).

## 4. Decisions for the user (not settled here)

- D1, E6: TST opens `_error.html` for a system exception that is not ignorable. React has no such page. No React code
  raises such an exception today: the server answers map to ServerException, UserException and the other classes.
  The only system exception is ViewHasChangedException, and it is ignorable.
- D3: port the "NoteCommunicationError" branch now, or with the new Notes flow (E8).

## 5. Status (2026-10-28)

The user approved the design of `item2-solution.md` (design (a), D1 (b), D3 (a); after E9: §8.1 (a), §8.2 (a)).
Built and tested (tests first) in `app/`:
- One subscription on the query cache: `installQueryErrorsToFlowHandler` in `platform/feedback/flowErrors.ts`, which
  `main.tsx` installs. A failed fetch goes to the flow handler once, while a mounted screen uses the query (E1, E3,
  E9). `meta.errorFlow: 'caller'` is on the cache reads and on MessageList. D4–D12 and D13 change behaviour; D14
  changes structure only.
- `raiseToFlowHandler`: the ignore step, the "NoteCommunicationError" test, and the error-page marker for a system
  exception (`platform/feedback/errorPage.ts`, `app/ErrorPageGate.tsx`). D1, D3.
- `showCommunicationExceptionMessage`: `navigator.onLine` (D2).
- `containers/SupperMeetingDetails`: no raise after the unmount (E9).
- Tests: `platform/feedback/flowErrors.test.tsx`, `queryErrors.test.tsx` (D4–D12), `exceptions.test.tsx`,
  `exceptionMessages.test.tsx`, `app/ErrorPageGate.test.tsx`; test clients come from `testQueryClient()`.

Open for later (the user decides):
- the other W23 flows (`item2-solution.md` §8.2 option b);
- a capture of `_error.html` to replace the marker (static GET, read-only).