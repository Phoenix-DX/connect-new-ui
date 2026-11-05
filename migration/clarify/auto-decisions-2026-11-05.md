# Auto decisions, route actions gaps (2026-11-05)

User instructions (2026-11-05):

- Goal: "mục tiêu của mình là fix các gap còn lại để có thể hướng tới production". The backend stays mock data.
- MCP: "màn hình nào không lấy được dữ liệu từ web có thể dựa trên MCP để tạo mock data".
- Delegation: "Để fable quyết định thay tôi tất cả" (Fable decides everything). The user can reopen any row.

Input: the 48 differences of `route-actions/routes/*.md` (section 3) on 68 routes, 9 distinct items.

| # | Item (routes) | Evidence | Decision | Result |
|---|---|---|---|---|
| 1 | `CS_CreateShareProfileLink` (22 rows, 2 chains) | ShareSheet `Action_SetExternalShareOptions` appends Share via, Copy link, WhatsApp, Signal, Outlook only inside `if (AppManager_GetIsNative)` (HomeFeed raw `UBTConnect_Utils.CW_Share.ShareSheet.mvc.js:2418-2475`); SharePopup appends "Share to other apps" only after `AppManager_GetIsNative` (`…CW_CTA_PopUps.SharePopup.mvc.js:274-288`); `ShareEntity_ByURL` calls the SocialSharing plugin (`UBTConnect_Utils.controller.js:5319+`). The React app is never native (`platform/session/clientVars.ts:40`). | Not a web gap: native only. The tool lists these rows under "Not reachable in a browser" with the evidence, not under the gaps. | done: `config.json` rule, 13 rows set aside |
| 2 | `GetAllApplicationEvents` (16 rows) | Every chain passes through `Connect2_LegacyShared.zOnApplicationEvent_Wrapper → getAppEventName → cacheLocalApplicationEvents` (the telemetry pipeline). Decision U17 (`migration/app-shell.spec.md:349,384`): telemetry is not wired in the mock phase (`lib/orbit/actions.ts:319`). | Not now: telemetry (U17). The tool lists these rows under "Telemetry (decision U17)". Wire with the BFF. | done: rule, 16 rows |
| 3 | `AppManager_ChangeDevice` (Login) | Login OnReady → `AppManager_HandleDeviceAwarenessPopUp`; decision Q3 (a): the dialog flow comes with the production identity provider (`useLogin.ts:110`, DeviceAwareness_Use false on TST). | Not now: decided Q3 (a). The tool lists it under "Decided earlier". | done: rule, 1 row |
| 4 | `Notifications/ServiceAPIAction_UI_UpdateItem_MarkAllAsRead` | The only chain roots in the client action `Notifications.handler_MarkAllAsRead`; no view event binds it (`facts.json` callSites rootKinds `['client action']`). The bound "mark all as read" is `ActionMarkAllAsReadNotifications` (`onClick in IconText`), which React makes. | Not a gap: a handler without a binding. The tool lists such rows under "No binding in the TST view". | done: rule, 1 row |
| 5 | `GetEventsForCalendar`, `GetEventViewInfo` (LDM_MyEvents_V2) | Both chains root in `ScreenBlock_MyEvents_V2.onHandle_DateClicked`, bound only in the Month, Day and Agenda calendar views, which render only when `CurrentEventView` is not MyTimeline. The variable has its default and no action assigns it (`…ScreenBlock_MyEvents_V2.mvc.js:50`, no `currentEventViewVar =` in the file; `ldmMyEventsState.ts:16-18`). | Not a gap: unreachable on TST. The tool lists it under "Unreachable on TST". | done: rule (also the OnReady branch, `:2140-2185`), 2 rows |
| 6 | `AppManager_Logout` (Login, PINRegister) | TST `AppManager_Logout` client action calls the server action (`UBT_AppManager.controller.js:3651+`), and `Connect_Logout` calls `AppManager_Logout` (`UBTConnect.controller.js`); React `connectLogout` (`platform/session/auth.ts:106`) clears the device but makes no server call. Inputs from the compiled code: EspaceName (Text), AppManager_MobileContext (Record); no output (`UBT_AppManager.controller.js:8500-8512`). | Fix: `appManagerLogout()` in `api/app`, called first in `connectLogout` (signOut and signedOutRemotely, as TST Connect_Logout); contract entry through `migration/contract/extra-actions.json` + `contract_gen.py`; mock handler in `platform/bootstrap/mocks.ts`. | done: `api/app/repository.ts appManagerLogout`, `auth.ts connectLogout`; DeviceInfo_PackageName client variable set by the app start |
| 7 | `HouseholdRelations_Block/DataActionFetchNotes` | TST `Handler_AddNotes`: Refresh Query FetchNotes, then ShowNotesSheet = True (`…HouseholdRelations_Block.mvc.js:1918`); fetch mode -1 (on demand). React opens the sheet with an empty local list (`householdRelationsState.ts:30`). | Fix: `fetchHouseholdRelationNotes` in `api/household`; `onAddNotes` fetches (R1 `flow.fetch`) then opens; mock from the notes collection (category Member, item MemberId). | done; parity clean |
| 8 | `AssembleDetail/DataActionGetAssembleNotes` | TST fetches at start (mode 0) and gives `Out_Notes` to NoteListActions (preview, with ItemCard_ActionBar: Add note) in the `meetingNotes` placeholder of ScreenBlock_AssembleDetail and to NotesSheet (`IsAddNote`) (`…AssembleDetail.mvc.js:312-345, 387-412, 493-520`). React has neither the notes preview nor the sheet; its "Meeting Note" section shows the summary text. | Fix: `fetchAssembleNotes` in `api/event`; the page fetches at start (R1), renders NoteListActionsContainer + ItemCard_ActionBar in a `meetingNotes` slot of AssembleEventDetail and NotesSheet; handlers OpenNoteSheet, NoteSheet_Closed, OnNotesChanged, OnNoteDeleted; mock from the notes collection (category Assemble Event, item EventId). | done: `useAssembleNotes`, `meetingNotes` slot of AssembleEventDetail, `NoteCategory2.AssembleEvent` |
| 9 | `HouseholdDetails(HouseholdId)` branch (HomeFeed, Updates_SingleList) | TST Event_ListItemOnClick: carousel on → HouseholdCarousel, else → `HouseholdDetails(HouseholdId)` (`FeedBlock_Updates.mvc.js:696-712`, `Updates_SingleList.mvc.js:1870-1890`). React: "branch not built". | Fix: the else branch in both hooks; tests. | done; parity clean |

| 10 | The 29 route questions and 9 app-shell questions (React calls without a TST chain on the route) | (a) The contract's `x-os-screens` lists the route (built from the captured calls and the survey closure, `contract_gen.py:666-676`): 16 rows. (b) `extra-actions.json` lists the route for the TST path. The GetCacheable* module actions call the server in a JavaScript callback the call graph cannot follow. The screens come from the blocks of the route's closure that call them (`GetCacheableSignedImageURL`, `GetCacheableMemberContactList`, `GetCacheableTimezoneInfo`, `GetCacheableSignedPhotoURL`, `GetCacheableUserInfo`): 13 rows. (c) App shell: an explicit list of the app-start calls observed on TST (`shell-observed.md:26-27`) and the sign-out call (`UBTConnect.controller.js:1054-1069`). | Not questions: the route file lists them under "Calls that TST declares outside the static call graph", with the evidence. | done: `check_route.py` (contract_meta, extra_actions, `config.json` shellDeclared) |

Opus review (2026-11-05, model Opus, 38 tool calls):

- Agrees with rows 1–9 and 10a.
- 10b with a caveat: a block in the closure proves the declaration, not that the route reaches the call. The rows
  stay visible in the route file, with the block names.
- 10c as first built (x-os-phase `load`) was too broad. Replaced by the explicit list above.
- The U17 evidence pointed to the wrong file. Fixed.
- Two decisions go to the user. One: the `Section_MeetingNotes` drift of AssembleDetail. Two: the sign-out behaviour
  when AppManager_Logout fails, 1:1 rethrow as TST (`UBT_AppManager.controller.js:3740-3745`) or try/finally for
  production. Both are open.

Drift noticed, not a gap of this work: the live `Connect2_Assemble_MUI.Assemble.AssembleEventDetail.mvc.js` (manifest
version of 2026-11-05) has no `Section_MeetingNotes`. The survey of 2026-10-13 had one, and React renders it. To check
when AssembleDetail gets a capture.

Order of the fixes: 9, 7, 8, 6 (small to large), then the tool rules 1–5 and a rerun of the 68 routes.

Result (2026-11-05): 68 of 68 routes, **0 gaps**, 34 rows "not a gap of the web app" (the rules above). Gates: typecheck,
lint, the tests of the touched folders, parity of HomeFeed, Updates_SingleList and Household_Relations.
Correction (same day): the "159 files fail in the full run" seen first was the runner, not the branch. `caffeinate
<command>` resolves `node` to Homebrew Node 26 (`/opt/homebrew/bin/node`), whose experimental global `localStorage`
shadows the jsdom one; the shell's nvm Node 22.23 has no such global. Run vitest without `caffeinate` in front of
`node` (keep-awake as a separate process). The full run with the nvm Node: see the result lines below.

Parity sweep (2026-11-05, after the fixes, every route with a capture): 50 of 51 clean. Notifications default
state differs in one text: the relative age of a recorded notification. The capture of 2026-10-29 shows "1w", today
"6d" (a fixed `DateTimeCreated` fixture, a label computed from the current date). Not a change of this work; a frozen
clock for parity is a later decision.

Full `vitest run` (nvm Node 22.23, alone): 4756 of 4757 tests pass. The one failure is the AssembleEvents test "a
navigation away while OnReady waits for the user starts no refresh" (`AssembleEvents.test.tsx`). It passes 3 of 3
times alone: a timing flake of the full run under load (LegacyPopupMenu showed the same once). Not a change of this
work.

