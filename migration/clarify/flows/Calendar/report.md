# Flow report: Calendar

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 2 (built: MyEntertaining; not built: MyCalendar, board `skip`) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/pages/MyEntertaining/**`, `app/src/api/entertaining/**`, KB page `ui/calendar.md`, TST compiled code: `UBTConnect.Calendar.MyEntertaining.mvc.js`, `UBTConnect.Calendar.MyEntertaining_Embedded.mvc.js`, `UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc.js` |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

In this report, "Embedded file" is `UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc.js` (TST, 1475 lines) and
"Wrapper file" is `UBTConnect.Calendar.MyEntertaining_Embedded.mvc.js` (TST).

## 1. Summary

- Counts by verdict: match 37 · partial 1 · missing 3 · differs 1 · mock-only 2 · n/a 28 · unclear 0 (same as `checklist.json`, 72 rows).
- F1 (major): a failed `DataActionGetEntertainingConfig` shows no toast in React. TST passes the error to App_Common, which shows the toast.
- F2 (minor): a failed token refresh only logs a warning in React. TST passes the error to App_Common, which shows the toast.
- F3 (minor): React does not set the document title "MyEntertaining" (app-wide gap, App_Services Q4).
- F4 (info): React has no console logs of the calendar SDK callbacks.
- Status: a user opens My Entertaining from Orbit, LDM, Assemble or the Home services. The calendar opens pre-filtered to the source. The error toast of the embed and the map link work. The calendar itself is the D8(b) stand-in. A failed configuration fetch or token refresh shows no toast.

## 2. Screens

### 2.1 MyEntertaining

**Identity**

| Id | Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 002 | route and roles | QueryString URL; DEV roles Registered, UBTOne_User; TST checks Registered only | `/UBTConnect/MyEntertaining`, `MEMBER_ROUTE` (member, enforce): a signed-out user goes to Login | `match` | `app/src/app/routes.generated.ts:24`; `app/src/app/routes.ts:40, 92`; `app/src/app/RouteGuard.tsx:40`; TST `MyEntertaining.mvc.js:217-218`. The guard is shared: checked in the report of App_Common. §6.1. |
| 072 | document title | the runtime sets `document.title` from the screen title "MyEntertaining" | no code sets `document.title` | `missing` | TST `MyEntertaining.mvc.js:117-118`; TST `OutSystemsReactView.js:7`; `routes.generated.ts:24` holds the unused title. F3. |

**Data**

| Id | Data source | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 003 | input `MyCalendarEventSourceId` | Text, default "" (TST) | `params.get('MyCalendarEventSourceId') ?? ''` | `match` | `app/src/pages/MyEntertaining/inputs.ts:10-12` |
| 004 | local variables, lifecycle | none; all event handlers null | no lifecycle event, no own call | `match` | `MyEntertainingPage.tsx:36-53`; TST `MyEntertaining.mvc.js` |
| 030 | `GetEventsByCacheKeys` (Connect2_MyCalendar_BL) | called only by MyCalendar blocks | no handler | `n/a` | board skip of MyCalendar (`migration/board.md:75`) |
| 031 | `Get_CalendarViewOptions` | called only by `Calendar_ViewActionMenu` | no handler | `n/a` | board skip of MyCalendar |
| 032-036 | `Client.ColumnsPerView`, `DaysBuffer`, `MinimumDate`, `MonthsBuffer`, `WeeksBuffer` | read only by MyCalendar and its blocks | not in React | `n/a` | board skip of MyCalendar |
| 037-040 | `Client.App_PIN_BiometricEnabled`, `App_Policies_HasPolicyToAccept`, `App_Policies_RedirectURL`, `IsNavigateToHomeOnBack` | read by the shared blocks `CommonUI_InsideLayout`, `Policy_Checker`, `Block_PINUnlock` | in the shared blocks | `n/a` | owned by flows App_Common, App_PIN and App_Policies, see their reports |

**UI tree**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 005 | block `CommonUI_InsideLayout` (no arguments), first widget | first widget | `<CommonUiLayout id="$b1" />` | `match` | `MyEntertainingPage.tsx:46`. Internals: App_Common report. |
| 006 | block `MyEntertaining_Embedded`, `In_InitialEventSouceId` | `MyCalendarEventSourceId` | `useMyEntertaining(MyCalendarEventSourceId)` feeds the block | `match` | `MyEntertainingPage.tsx:43-50` |
| 007 | event `OnNavBack` → `Handle_NavBack` | DEV only: TST passes only the inputs and `_handleError` | no handler; `onBack` is the back arrow of the layout | `match` | `MyEntertainingPage.tsx:42, 49`. §6.1. |

**Screen actions**

| Id | Action | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 008 | `Handle_NavBack` | DEV only. On TST the back arrow runs `OnClick_BackNavigation` of `Layout_DetailPage` (previous screen) | `useNavigateBack()` as `onBack` of `DetailLayout` | `match` | `app/src/platform/navigation/osNavigate.ts:135`; `DetailLayout.tsx:106`; TST `Layout_DetailPage.mvc.js:497` (App_Services row 019). §6.1. |

**Validations**

The screen has no input widget and no validation.

**Business logic**

The screen has no logic of its own. The logic is in `MyEntertaining_Embedded` (§3.1) and `Embedded_MyEntertaining` (§3.2).

**Strings**

| Id | Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 041 | strings of the built screens | one string: the title "My Entertaining" (TST, not in `strings.md`) | `headerTitle="My Entertaining"` | `match` | `MyEntertaining_Embedded.tsx:26`; TST Wrapper file `:158-160`. The other strings of `strings.md` belong to MyCalendar blocks (skip) or other flows. |

### 2.2 MyCalendar (not built)

Row 001, verdict `n/a`. The board line is `skip`: "V7 · skip:dead · replaced by MyEntertaining; revisit if a link to
MyCalendar appears" (user, 2026-10-14, `migration/board.md:75`). The KB page `ui/calendar.md` says that no screen, block or
action navigates to MyCalendar.

On DEV, the screen shows a month, week or day strip of the events of Orbit, LDM, Assemble and personal events. A fresh
entry clears the event cache (BR-UBTCON-680). An entry with a source shows only that source (BR-UBTCON-681). A click on an
event opens the detail screen of its source (BR-UBTCON-682 to 684). The filter drawer and the month picker change the view
(BR-UBTCON-685, 687, 688). The create button for personal events depends on `C2EnablePersonalEvents`, which is false on TST
(BR-UBTCON-686).

A build needs these parts:
- the 16 own calendar blocks (rows 042 to 057)
- `GetEventsByCacheKeys` of Connect2_MyCalendar_BL and `Get_CalendarViewOptions`
- the client variables of rows 032 to 036 and the MemoryClientCache actions

## 3. Blocks of the flow

### 3.1 MyEntertaining_Embedded

| Id | Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 009 | signature | input `In_InitialEventSouceId` Text; event `OnNavBack` (DEV only); local `PreloadedSource` | props `id`, `onBack`, `renderCalendar`; the input goes to `useMyEntertaining` | `match` | `MyEntertaining_Embedded.tsx:6-14` |
| 010 | `Layout_DetailPage` arguments | DEV `In_IsHideTitle=True`, `In_IsPrimaryColor=True`; TST `In_IsPrimaryColor` only | `DetailLayout isPrimaryColor headerTitle="My Entertaining"` | `match` | `MyEntertaining_Embedded.tsx:23-30`; TST Wrapper file `:145-147`. §6.1. |
| 011 | `Placeholder_Header_Title` | "My Entertaining" | `headerTitle` | `match` | TST Wrapper file `:158-160` |
| 012 | `Embedded_MyEntertaining` arguments | `B2CTenant = Client.Embedd_B2CTenant`, `Sources = PreloadedSource`; View and Theme default | `View`, `Theme` from `EMBEDDED_MY_ENTERTAINING_DEFAULTS`; `sources`, `b2CTenant` from the flow | `match` | `MyEntertainingPage.tsx:13-31`; TST Wrapper file `:170-172` |
| 013 | `CommonUI_InsideLayout` in `Placeholder_CommonUI_Inside_Layout` | no arguments | `commonUI={<CommonUiLayout … />}` | `match` | `MyEntertaining_Embedded.tsx:29` |
| 014 | events on `Embedded_MyEntertaining` | TST binds `OnError` → `Handle_Error`, `OnOpenMap` → `Handle_OpenMap`; `OnNavBack` is DEV only | `onOnError`, `onOnOpenMap`; no back event | `match` | `MyEntertainingPage.tsx:28-29`; TST Wrapper file `:182-200` |
| 015-019 | `OnInitialize` switch | Orbit → "orbit", LDM → "ldm", Assemble → "assemble", UserCreated → "personal", otherwise "" | `preloadedSourceOf`, the same five branches | `match` | `useMyEntertaining.ts:21-27`; TST Wrapper file `:279-303`; BR-UBTCON-689 |
| 020 | `OnInitialize` runs once | no `OnParametersChanged` | `useState(() => preloadedSourceOf(…))` | `match` | `useMyEntertaining.ts:53`; TST Wrapper file `:436, 457` |
| 021 | `Type_MyCalendarEventSource` values | TST: `event-assemble`, `event-ldm`, `event-orbit`, `event-user` | the same four values | `match` | `staticEntities.ts:2-7`; `migration/knowledge/static-entities-tst.json:3279-3284` |
| 022 | `Handle_Error` | `FeedbackMessage_AutoClose("", Message, Info, True, "", 0, False)` | `feedbackMessageAutoClose` with the same seven values | `match` | `useMyEntertaining.ts:30-40`; TST Wrapper file `:391`; BR-UBTCON-691 |
| 023 | `Handle_OpenMap` | `OpenInApp_OpenExternalLink(Google Maps search URL of Lat and Lng, InNewTab True)`; Label not used | the same URL, `true` | `match` | `useMyEntertaining.ts:43-45`; TST Wrapper file `:339`; BR-UBTCON-690. The shared action is not checked here. |
| 024 | `Handle_NavBack` (block) | DEV only: trigger `OnNavBack` | no event | `match` | TST Wrapper file has no `NavBack`. §6.1. |
| 025 | `Client.Embedd_B2CTenant` | read, Text | `useClientVar('UBTConnect.Embedd_B2CTenant')`, default '' | `match` | `useMyEntertaining.ts:54`; `app/src/platform/session/clientVars.ts:27` |

### 3.2 Embedded_MyEntertaining (module UBTConnect_EmbedMyEntertaining)

The flow depends on this referenced block. `references.md:18` names its TST file (the Embedded file). This section checks
React against it.

| Id | Item | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 026 | interface | inputs View "timeline", Theme "light", Sources "", B2CTenant; events OnReady, OnAuthenticated, OnComplete, OnError, OnOpenMap | the same props, defaults and event props | `match` | `Embedded_MyEntertaining.tsx:17-50`; Embedded file `:1112-1126`. `OnNavBack` is DEV only (§6.1). |
| 027 | `DataActionGetEntertainingConfig` call | fetched at start with View, Theme, Sources, B2CTenant; then `OnAfterFetch_GetEntertainingConfig` | `useEntertainingConfigQuery`: on mount, no retry, no refetch while open | `match` | `app/src/api/entertaining/repository.ts:10-20`; `hooks.ts:12-20`; Embedded file `:515-535, 544` |
| 058 | server side of `DataActionGetEntertainingConfig` | BaseURL, Token, B2CClientId, B2CPolicy | mock: own origin, empty values | `mock-only` | `app/src/pages/MyEntertaining/mocks.ts:9-14`. Production needs the data action of UBTConnect_EmbedMyEntertaining. |
| 060 | failed fetch | the runtime calls `handleError`: Calendar flow, then App_Common OnException, which shows the toast | the skeleton stays; no toast | `missing` | TST `OutSystems.js:3853`; TST `UBTConnect.Calendar.controller.js:12-16`; `migration/knowledge/shell-facts.md` U10; `app/src/api/client/queryClient.ts:15-18`. F1. |
| 028 | `AppManager_Get_UserIdToken` call | `Action_RefreshToken`: `AppManager_Get_UserIdToken("")`, then `RefreshEmbedTokenJS` | `fetchUserIdToken` with `EspaceName: ''` | `match` | `useEntertainingCalendar.ts:20-26`; `repository.ts:24-29`; Embedded file `:491-510, 1007-1045` |
| 059 | server side of `AppManager_Get_UserIdToken` (UBT_AppManager_CS) | the ID token of the user | mock: `IdToken: ''` | `mock-only` | `mocks.ts:15`. Production needs the server action of UBT_AppManager_CS. |
| 061 | failed token refresh | `safeExecuteClientAction` sends the error to `handleError`, then App_Common shows the toast | a warning in the log; no toast | `partial` | TST `OutSystems.js:17`; Embedded file `:1107-1110`; `useEntertainingCalendar.ts:17-26`. F2. |
| 029 | embed SDK `embed-entertaining.js` | `RequireScript(BaseURL + "/embed-entertaining.js")` | same-size local stand-in behind `requireEmbed` | `differs` | `migration/board.md:18` (D8(b), user 2026-10-14); `migration/parity-exemptions.json:340`; Embedded file `:927`; `connect2Entertaining.ts:57-95` |
| 062 | `OnInitialize`: LoadingList | "Loading 1" to "Loading 5" (MaxLoadingItems 5) | five items, the same texts | `match` | `Embedded_MyEntertaining.tsx:20, 88`; Embedded file `:49-51, 597-625` |
| 063 | container and skeleton | `overflow-hidden` plus `display-none` while isLoading; If isLoading: SkeletonSection with LazyImage list | the same classes and the same skeleton | `match` | `Embedded_MyEntertaining.tsx:180-206`; Embedded file `:228-240` |
| 064 | `InitializeCalendarJS` | destroy a configured SDK, remove the old listener and interval, `embed.init` with 11 options and 6 callbacks; error text: message, else type, else "Unknown error" | the same options and callbacks; cleanup in the effect | `match` | `Embedded_MyEntertaining.tsx:101-139`; Embedded file `:911-960, 1226-1273` |
| 065 | message listener `embed:open-map` | origin = BaseURL; `Action_OnOpenMap("" + lat, "" + lng, label or "")` | the same check and call | `match` | `Embedded_MyEntertaining.tsx:140-153`; Embedded file `:1275-1287` |
| 066 | `JSUtils_Console_Log` calls | `console.log` of ready, authenticated, complete, error, and failed sources of an `events:loaded` message | no log call | `missing` | TST `UBTJavaScriptUtils.controller.js:778-781`; Embedded file `:1251-1284`. F4. |
| 067 | token refresh every 10 minutes | `setInterval` 10 minutes → `Action_RefreshToken` → `embed.refreshToken` when configured | `REFRESH_INTERVAL_MS` → `onRefreshToken(applyIdToken)` | `match` | `Embedded_MyEntertaining.tsx:22, 52-56, 154-156`; Embedded file `:1289-1302` |
| 068 | `OnParametersChanged` | `ApplySourcesJS`: `setSources(Sources or null)` when configured | effect, skipped on the first render | `match` | `Embedded_MyEntertaining.tsx:167-176`; Embedded file `:546-560, 1219-1225` |
| 069 | `OnDestroy` | `CleanupCalendarJS`: listener, interval, destroy | effect cleanup, the same three steps | `match` | `Embedded_MyEntertaining.tsx:158-164`; Embedded file `:1206-1218` |
| 070 | `Action_OnComplete` | isLoading = False, then trigger OnComplete(Status, Total) | `setIsLoading(false)`, then `onOnComplete` | `match` | `Embedded_MyEntertaining.tsx:128-134`; Embedded file `:705-740` |
| 071 | `Action_OnReady`, `Action_OnAuthenticated`, `Action_OnError`, `Action_OnOpenMap` | each triggers its event | each callback calls its event prop | `match` | `Embedded_MyEntertaining.tsx:122-151`; Embedded file `:758-1000` |

### 3.3 Other own blocks

These 16 blocks are not used by a built screen. Each has one row with verdict `n/a` (board skip of MyCalendar,
`migration/board.md:75`):
- CacheControl_Calendar_Coordinator (042), CalendarDays (043), CalendarHeaderWeekdays (044), CalendarMonths (045)
- CalendarView (046), CalendarView_MonthWrapper (047), CalendarView_WeekWrapper (048), CalendarWeeks (049)
- Calendar_Header (050), Calendar_Header_SelectedDate (051), Calendar_ViewActionMenu (052), DayList (053)
- EventList (054), EventList_CacheWrapper (055), MonthPicker (056), Weekday (057)

CalendarView, Calendar_Header_SelectedDate and MonthPicker are also used by `Picker_Date` of flow
Deprecated_Calendar_PersonalEvent. Its users are Recurrence (skip, `migration/board.md:85`) and
UserEventForm_DateTimeWrapper (pack of that flow, `blocks.md:222`).

## 4. Shared blocks and actions

| Element | Owner | React | Verdict here |
|---|---|---|---|
| `CommonUI_InsideLayout` | App_Common | `app/src/components/layout/CommonUiLayout` | use `match` (rows 005, 013); internals checked in the report of App_Common |
| `Layout_DetailPage` | UBTConnectLibrary | `app/src/components/layout/DetailLayout/DetailLayout.tsx` | use `match` (row 010); the back arrow is checked in the report of App_Services (row 019) |
| `FeedbackMessage_AutoClose` | UBTConnect_Utils | `app/src/platform/feedback` | use `match` (row 022); not checked here (shared) |
| `OpenInApp_OpenExternalLink` | UBTConnect_Utils | `app/src/lib/ubtConnectUtils/actions` | use `match` (row 023); not checked here (shared) |
| route guard of `member` routes | app shell | `app/src/app/RouteGuard.tsx:40` | use `match` (row 002); checked in the report of App_Common |
| flow exception handler | App_Common (Calendar delegates, `UBTConnect.Calendar.controller.js:12-16`) | `app/src/legacy/os/exceptions.ts` (`raiseToFlowHandler`) | not called by this flow: F1, F2 |

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix |
|---|---|---|---|---|---|
| F1 | major | Embedded_MyEntertaining / failed `DataActionGetEntertainingConfig` | The runtime (`OutSystems.js:3853`) calls `handleError` after a failed data fetch. The Calendar flow passes the error to App_Common OnException, which shows the toast. React keeps the skeleton and shows no toast. App_Services F2 is the same gap. | `app/src/api/entertaining/hooks.ts:12-20`; `app/src/pages/MyEntertaining/hooks/useEntertainingCalendar.ts:32-35` | Q1. Pass the query error to `raiseToFlowHandler`, as part of the shared fix of App_Services Q3. |
| F2 | minor | Embedded_MyEntertaining / failed `Action_RefreshToken` | TST runs the action through `safeExecuteClientAction` (`OutSystems.js:17`), so an error goes to App_Common, which shows the toast. React logs a warning only. A code comment names this, but no recorded decision does. | `app/src/pages/MyEntertaining/hooks/useEntertainingCalendar.ts:20-26` | Q2. Send the error to `raiseToFlowHandler` in `refreshToken`. |
| F3 | minor | MyEntertaining / document title | The runtime sets `document.title` to "MyEntertaining" (`OutSystemsReactView.js:7`). React sets no title. The gap is app-wide. | `app/src/app/routes.generated.ts:24` (title not used) | The shared fix of App_Services Q4. |
| F4 | info | Embedded_MyEntertaining / console logs | TST writes five `console.log` texts from the SDK callbacks and the `events:loaded` message. React writes none. | `app/src/pages/MyEntertaining/components/Embedded_MyEntertaining.tsx:122-152` | Optional: `log.info` calls with the same texts. |

## 6. DEV vs TST differences

### 6.1 DEV vs TST

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| MyEntertaining roles | Registered, UBTOne_User | `checkRegistered()` only | TST: a member route | TST `MyEntertaining.mvc.js:217-218` |
| MyEntertaining `Handle_NavBack` on `OnNavBack` | present | absent: the screen passes only the inputs and `_handleError` | TST: no handler; the back arrow of the layout | TST `MyEntertaining.mvc.js` (no `NavBack`) |
| MyEntertaining_Embedded event `OnNavBack` and `Handle_NavBack` | present | absent | TST: no event | TST Wrapper file (no `NavBack`) |
| MyEntertaining_Embedded `Layout_DetailPage.In_IsHideTitle` | True | absent (default): the title shows | TST: title "My Entertaining" | TST Wrapper file `:145-147` |
| Embedded_MyEntertaining event `OnNavBack` | in the signature | absent | TST: no event prop | `references.md:18`; Embedded file `:1112-1126` |
| title text "My Entertaining" | not in `strings.md` | `placeholder_Header_Title` | TST | TST Wrapper file `:158-160` |
| data actions of UBTConnect_EmbedMyEntertaining | not in `data.md` | `DataActionGetEntertainingConfig`, `AppManager_Get_UserIdToken` | TST | Embedded file `:491-535` |

### 6.2 KB pages vs TST

None. The KB page `ui/calendar.md` says that the screens declare only the role Registered. TST agrees.

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | Pass a failed `DataActionGetEntertainingConfig` to the flow handler, as the runtime does (F1)? | TST shows the App_Common toast after a failed fetch. React keeps the skeleton and shows nothing. App_Services Q3 asks the same for screen data actions. | (a) The shared fix of App_Services Q3 also covers block data actions such as this one. (b) Fix this query only. (c) Record a decision: no toast. | (a): one fix for all fetches, 1:1 with TST. |
| Q2 | Pass a failed token refresh to the flow handler, as TST does (F2)? | TST shows the App_Common toast when `AppManager_Get_UserIdToken` fails (every 10 minutes while the calendar is open). React logs a warning. Only a code comment names the choice. | (a) Follow TST: `raiseToFlowHandler` in `refreshToken`. (b) Keep the warning and record the decision in a CR or in `known-original-bugs.md`. | (a): the compiled code is clear, and the change is small. |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 20 | 2 | 0 | 1 | 0 | 0 | 17 | 0 |
| data | 21 | 7 | 0 | 1 | 0 | 2 | 11 | 0 |
| ui | 9 | 9 | 0 | 0 | 0 | 0 | 0 | 0 |
| actions | 4 | 4 | 0 | 0 | 0 | 0 | 0 | 0 |
| validations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 17 | 14 | 1 | 1 | 1 | 0 | 0 | 0 |
| strings | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| **total** | 72 | 37 | 1 | 3 | 1 | 2 | 28 | 0 |
