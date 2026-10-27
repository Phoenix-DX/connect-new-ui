# Fix note: group C (error paths and query defaults)

Minor findings wave of 2026-10-27. Brief: `migration/clarify/FIX.md`. No commit.

Two files are outside the areas of the group prompt. The finding rows name them, and no other change was in them when
this group started:

- `app/src/api/update/hooks.ts` (Home F2): the FetchUpdates query is in `api/update`, not in `api/feed`.
- `app/src/platform/feedback/flowErrors.ts` (_libraries F3): two new exports only. Rule 9 of
  `.dependency-cruiser.cjs` does not let `containers/` import `legacy/os/`, so the NotRegistered test must come from
  `platform/`.

## 1. Calendar F2: failed Action_RefreshToken

Decision: Calendar Q2 (a) (user, 2026-10-27).

- TST evidence: `UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc.js:1106-1110`
  (`safeExecuteClientAction`), `:1007-1035` (AppManager_Get_UserIdToken, then RefreshEmbedTokenJS);
  `migration/runtime-sources/OutSystems.js` (`safeExecuteClientAction`: `tryCatchFinally` to `handleError`).
- Files changed:
  - `app/src/pages/MyEntertaining/hooks/useEntertainingCalendar.ts:7, 17-28`: the catch of `refreshToken` calls
    `raiseToFlowHandler(e)`, not `log.warn`. The SDK keeps its token.
  - `app/src/pages/MyEntertaining/hooks/useEntertainingCalendar.test.tsx`: the failure test checks one call of the flow
    handler (spy).
  - `app/src/pages/MyEntertaining/MyEntertaining.test.tsx`: the test "closed while the token refresh is pending" counts
    the calls of the flow handler, not the warnings. The spy keeps the real handler.
- Tests: `npx vitest run src/pages/MyEntertaining` (pass).
- Proposed verdict: `match` for Calendar-061.

## 2. App_Policies F2: pending-policies query on reconnect

- TST evidence: OutSystems does not fetch a data action again when the network comes back, and an offline call fails
  with the communication message (report row 045; `migration/runtime-sources/OutSystems.js`).
- Files changed:
  - `app/src/api/policy/hooks.ts:13-24`: `refetchOnReconnect: false` and `networkMode: 'always'`. The value 'always'
    is the one of the report fix and of the memory cache queries (`app/src/api/client/cache.ts:14, 68`). The feed and
    member queries keep the default 'online'. With 'online', an offline fetch waits and the message does not show,
    which is not the TST behaviour.
  - `app/src/api/policy/hooks.test.tsx:86-114`: no fetch after an offline-then-online event; the call runs while the
    browser is offline.
- Tests: `npx vitest run src/api/policy src/pages/AcceptPendingPolicies` (pass).
- Proposed verdict: `match` for App_Policies-045. The failed fetch already goes to the flow handler
  (`usePendingPoliciesForm.ts:64-70`).

## 3. App_Policies F3: exception in AcceptPendingPoliciesAcceptedAll

- TST evidence: `UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:798-799` (screen `handleError` to the
  App_Policies flow handler); `OutSystems.js` (`safeExecuteClientAction`).
- Files changed:
  - `app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts:8, 55-74`: the body of `acceptedAll` is in
    a `try`. The catch calls `raiseToFlowHandler(error)`. Both callers (`continueOnClick` and the 5-second timer of
    `usePendingPoliciesForm.ts`) now get a resolved promise, so no rejection stays unhandled.
  - `app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.test.tsx` (new): a failed user-info read goes
    to the flow handler once, and `App_Policies_HasPolicyToAccept` keeps its value.
- Tests: `npx vitest run src/pages/AcceptPendingPolicies` (pass).
- Proposed verdict: `match` for App_Policies-028.

## 4. App_Policies F4: device id of AcceptPolicies

Decisions: App_Policies Q2 (a) and C4 (user, 2026-10-27).

- TST evidence: `UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:1385-1387`:
  `UniqueId = window.localStorage["UUID"] || (window.localStorage["UUID"] = window.crypto.randomUUID())`, only when
  `window.crypto.randomUUID` exists.
- Files changed:
  - `app/src/platform/device/deviceUniqueId.ts` (new): `deviceUniqueId()` reads the key "UUID" (no mock prefix), or
    makes a new id and stores it there. When the stored id is removed, the next call makes a new one, as TST does. The
    storage access is in try/catch. When the storage cannot be written, one id stays in memory for the page.
  - `app/src/pages/AcceptPendingPolicies/actions.ts:1, 61-64`: `getDeviceInfo` uses `deviceUniqueId()`. The page
    variable `pageUniqueId` and the comment "AGENTS rule 16, Q4" are removed. A page does not access browser storage
    (`app/docs/architecture/overview.md:128`), so the access is in `platform/device`.
  - `app/src/platform/device/deviceUniqueId.test.ts` (new): the key, a stored id, a new id stored, a new id after a
    removal, and the memory fallback when the storage throws.
  - `app/src/pages/AcceptPendingPolicies/actions.test.ts:38-45`: the id is in `localStorage["UUID"]` and stays the same.
- Tests: `npx vitest run src/platform/device src/pages/AcceptPendingPolicies` (pass).
- Proposed verdict: `match` for App_Policies-063.

## 5. Home F2: cache options of GetServices and FetchUpdates

Decision: Home Q1 (a) (user, 2026-10-27).

- TST evidence: report rows Home-074 and Home-110. Both data actions fetch at block start. On the same screen,
  `useCommunityPopulationQuery` has no cache and no reconnect fetch (`app/src/api/member/hooks.ts:44-55`).
- Files changed:
  - `app/src/api/service/hooks.ts:21-36`: `useFeedServicesQuery` has `gcTime: 0` and `refetchOnReconnect: false`.
  - `app/src/api/update/hooks.ts:5-19`: `useFeedUpdatesQuery` has `gcTime: 0` and `refetchOnReconnect: false`.
  - `app/src/api/service/hooks.test.tsx:45-79` and `app/src/api/update/hooks.test.tsx:31-67`: the data goes when the
    block closes, the next mount waits for a new fetch, and an offline-then-online event does not fetch.
- The view cache (`app/src/platform/navigation/viewCache.ts`) keeps the query data of a screen for a back navigation,
  so a back navigation still restores the lists. The HomeFeed tests pass.
- Tests: `npx vitest run src/api/service src/api/update src/pages/HomeFeed` (pass).
- Proposed verdict: `match` for Home-074 and Home-110 for the cache options. Row 111 (Home Q3, a TST check of a fetch
  after a back navigation) is not part of this fix.

## 6. _libraries F2: ShareSheet 50-recipient message

- TST evidence: `UBTConnect_Utils.CW_Share.ShareSheet.mvc.js:2924-2926`:
  `FeedbackMessage_AutoClose("", "You can select up to 50 recipients only.", TextToInteger("Entities.UBT_MessageType.Error"), True, "", 0, False)`.
  The type text gives 0, and FeedbackMessage_AutoClose changes 0 to Error (`feedbackMessageAutoClose.ts`, JSU:99-102).
- Files changed:
  - `app/src/containers/ShareSheet/useShareSheet.ts:4, 150-163`: `onSelect` calls `feedbackMessageAutoClose` with the
    TST inputs and the type Error. The message gets the class `feedback-message-autoclose` and closes by itself.
  - `app/src/containers/ShareSheet/useShareSheet.test.tsx` (new): 50 members are selected, the 51st shows the
    auto-close error message and is not added.
  - `app/src/containers/ShareSheet/README.md`: the limit line names the auto-close; the gap line is removed.
- Tests: `npx vitest run src/containers/ShareSheet src/platform/feedback` (pass).
- Proposed verdict: `match` for _libraries-112.

## 7. _libraries F3: ShareSheet Action_SubmitShare handlers

- TST evidence: `UBTConnect_Utils.CW_Share.ShareSheet.mvc.js:3126-3156`. The handlers, in order:
  - NotRegistered (`:3128-3137`): raised again, so it goes to the flow handler. The callers rethrow
    (`:2601-2623, 3054-3064`).
  - AllExceptions, not a system exception (`:3141-3149`): the message "Share failed. Please try again."
  - A system exception (`:3156`): thrown again, to the flow handler.
  - The success message "<Type> has been shared." does not change (`:3123`).
- Files changed:
  - `app/src/platform/feedback/flowErrors.ts:1, 19-23`: new exports `isNotRegisteredException` and
    `isSystemException` (additive; no other caller changes).
  - `app/src/containers/ShareSheet/useShareSheet.ts:5, 122-141`: a NotRegistered error or a system exception goes to
    `raiseToFlowHandler`; any other error shows the TST message.
  - `app/src/containers/ShareSheet/useShareSheet.test.tsx` (new): NotRegistered goes to the flow handler with no block
    message; a user exception shows the message and does not go to the flow handler.
  - `app/src/containers/ShareSheet/README.md`: the failure line names the two paths; the gap line keeps only
    IsSubmitting.
- Tests: `npx vitest run src/containers/ShareSheet` (pass).
- Proposed verdict: `match` for _libraries-115.

## Checks

- `npx vitest run src/pages/MyEntertaining src/pages/AcceptPendingPolicies src/api/policy src/api/service
  src/api/update src/api/feed src/pages/HomeFeed src/containers/ShareSheet src/platform/device src/platform/feedback`:
  50 files, 246 tests, pass.
- `npx eslint` and `npx prettier --check` on the changed files: no error.
- `npm run arch`: no new dependency violation.
- `npm run typecheck`: no error in the files of this group. The errors that stay are in files of other groups
  (`BookmarkGroupView.test.tsx`, `ldmEventDetailState.test.ts`).
- `npm run unused`: no new row from this group.
