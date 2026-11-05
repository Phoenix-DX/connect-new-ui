# NotificationDetails: OutSystems (TST) and React

The route `/UBTConnect/NotificationDetails`, read from the TST compiled code and from the React code by `route-actions/tools/check_route.py` on 2026-11-05. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/NotificationDetails/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Live code.** TST changed 1 compiled file of this route after the capture (`migration/knowledge/tst-drift-2026-11-05.md`). The tool read the live copies in `migration/runtime-sources/live/` for: `NotificationDetails`. The observed calls come from the capture.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/NotificationDetails` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.App_Notifications.NotificationDetails` | TST compiled code |
| UI flow | `App_Notifications` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/NotificationDetails/NotificationDetailsPage.tsx`](../../app/src/pages/NotificationDetails/NotificationDetailsPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | [`migration/screens/NotificationDetails/parity`](../../migration/screens/NotificationDetails/parity) | `route.py parity` |
| Code read | OutSystems: 1 files of the UI flow, 10 shared blocks, 28 app shell files. React: 117 files in the closure of the page | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 5: React makes 2, **2 missing**, 1 not a gap of the web app |
| Differences found | **14** (+ 1 not a gap of the web app) (see [section 3](#3-differences-found)) |
| Questions | 0 (see [section 4](#4-questions)) |
| React calls reached only through shared code | 0: see the last section |
| User actions of the route (own code) | OutSystems: 1. React: 1 |
| Screen and blocks of the UI flow with a React port | 1 of 1 |
| Navigation targets found in React | 10 of 20 |
| Shared blocks and components on the route | OutSystems 10, React 2 with user actions: see the last section |
| App shell on this route | 9 calls: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Differences found

Each line is a fact of both sides: a TST call, navigation or variable, and the React code that has it or not. The tool does not judge the behaviour.

- Call `UBTConnect/App_Notifications/NotificationDetails/ScreenDataSetGetMessageTemplateParametersByMessageTemplateId`. Chain on TST: NotificationDetails fetch at start → NotificationDetails.ScreenDataSetGetMessageTemplateParametersByMessageTemplateId.
  - No React code makes this call.
  - Note in [`api/message/hooks.ts:90`](../../app/src/api/message/hooks.ts#L90): "/** The aggregate GetMessageTemplateParametersByMessageTemplateId of ScreenBlock_MessageDetail as a query. */"
  - Note in [`api/message/mapper.ts:59`](../../app/src/api/message/mapper.ts#L59): "/** The inputs of the aggregate GetMessageTemplateParametersByMessageTemplateId. */"
  - Note in [`api/message/repository.ts:156`](../../app/src/api/message/repository.ts#L156): "/** The aggregate GetMessageTemplateParametersByMessageTemplateId of ScreenBlock_MessageDetail, refreshed by"
- Call `UBTConnect/App_Notifications/NotificationDetails/DataActionGetMessageInstance`. Chain on TST: NotificationDetails fetch at start → NotificationDetails.DataActionGetMessageInstance.
  - No React code makes this call.
  - Note in [`api/message/mapper.ts:179`](../../app/src/api/message/mapper.ts#L179): "/** The message of GetMessageInstance with the fields that the block reads: "" or "0" instance id, the null date and"
  - Note in [`api/message/types.ts:134`](../../app/src/api/message/types.ts#L134): "/** GetMessageInstance.Message, the fields that the block reads (null for "" / NullIdentifier / 1900-01-01). */"
  - Note in [`pages/MessageDetail/components/MessageDetailView.tsx:21`](../../app/src/pages/MessageDetail/components/MessageDetailView.tsx#L21): "/** GetMessageInstance.Message; null before the first answer (the Spinner shows). */"
- Navigation to `HostSurvey` (from NotificationDetails). The React screen and the app shell do not go to this route.
- Navigation to `MilestoneDetail` (from NotificationDetails). The React screen and the app shell do not go to this route.
- Navigation to `EventDetail` (from NotificationDetails). The React screen and the app shell do not go to this route.
- Navigation to `AssembleDetail` (from NotificationDetails). The React screen and the app shell do not go to this route.
- Navigation to `OneSchoolGlobalDetails` (from NotificationDetails). The React screen and the app shell do not go to this route.
- Navigation to `FeedItemDetail` (from NotificationDetails). The React screen and the app shell do not go to this route.
- Navigation to `LDM_Email_V2` (from NotificationDetails). The React screen and the app shell do not go to this route.
- Navigation to `LDM_Email` (from NotificationDetails). The React screen and the app shell do not go to this route.
- Navigation to `LDM_EventDetail_V2` (from NotificationDetails). The React screen and the app shell do not go to this route.
- Navigation to `LDM_EventDetail` (from NotificationDetails). The React screen and the app shell do not go to this route.
- Navigation to `HouseholdDetails` with the parameters `HouseholdId` ([`UBTConnect.App_Notifications.NotificationDetails.mvc.js:1604`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L1604)). No React navigation to `HouseholdDetails` gives parameters. React names `HouseholdDetails` in: [`app/routes.ts:76`](../../app/src/app/routes.ts#L76).
- Navigation to `SupperMeeting_Details` with the parameters `In_SubdivsionId` ([`UBTConnect.App_Notifications.NotificationDetails.mvc.js:1618`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L1618)). No React navigation to `SupperMeeting_Details` gives parameters. React names `SupperMeeting_Details` in: [`app/routes.ts:82`](../../app/src/app/routes.ts#L82).

### Not a gap of the web app

Missing TST calls that a rule of `route-actions/config.json` (`notApplicable`, user 2026-11-05) sets aside. The rule names the fact and its evidence; the chain is the one of the TST code.

**No binding in the TST view.** Every chain roots in a client action of the screen or of a block of its UI flow. No view event, lifecycle event or block event binds that action. Evidence: facts.json callSites rootKinds of the call (the call graph of the compiled code, tools/os_call_graph.py).

- `UBTConnect/App_Notifications/NotificationDetails/ActionWrapper_NotificationOpened`. Chain on TST: NotificationDetails.getMessageInstanceByIdOnAfterFetch → server Wrapper_NotificationOpened.


## 4. Questions

None.

## 5. Server calls

All columns come from the code, without interpretation:

- **Direct caller (TST):** the block or module of the action that calls the server (the step before the server call in the chain).
- **Chain (TST):** the chains of client actions in the TST compiled code, from their start to the call.
  A long chain shows its first 2 steps, …, and its last 2 steps.
- **Seen on TST:** `yes` when TST made the call in the capture.
- **React action:** the React function with the `callAction` of the same call (`file:line`), and the code that loads it: `shell` (from `main.tsx`), `page` (from the screen), or both.
- **Used by (React references):** the functions and components that reference the React action, up to the nearest component. A reference is not always a call.
- **Status:** `implemented` when the contract path of the React call gives the same TST URL. It does not prove the same behaviour.

| # | Call (TST) | Kind | Direct caller (TST) | Chain (TST) | Seen on TST | React action | Used by (React references) | Status |
|---|---|---|---|---|---|---|---|---|
| 1 | `UBTConnect/App_Notifications/NotificationDetails/ActionWrapper_NotificationOpened` | server action | `NotificationDetails` | NotificationDetails.getMessageInstanceByIdOnAfterFetch → server Wrapper_NotificationOpened | no | – | – | not applicable (noBinding) |
| 2 | `UBTConnect/App_Notifications/NotificationDetails/DataActionFetchMessageInstance` | data action | `NotificationDetails` | NotificationDetails fetch at start → NotificationDetails.DataActionFetchMessageInstance | yes | `fetchNotificationDetail()` [`api/notification/notificationDetail.ts:39`](../../app/src/api/notification/notificationDetail.ts#L39) (page) | `NotificationDetails → useNotificationDetailQuery → fetchNotificationDetail`<br>[`pages/NotificationDetails/NotificationDetailsPage.tsx`](../../app/src/pages/NotificationDetails/NotificationDetailsPage.tsx) | implemented |
| 3 | `UBTConnect/App_Notifications/NotificationDetails/DataActionGetMessageInstance` | data action | `NotificationDetails` | NotificationDetails fetch at start → NotificationDetails.DataActionGetMessageInstance | no | – | – | **missing** |
| 4 | `UBTConnect/App_Notifications/NotificationDetails/ScreenDataSetGetMessageTemplateParametersByMessageTemplateId` | aggregate | `NotificationDetails` | NotificationDetails fetch at start → NotificationDetails.ScreenDataSetGetMessageTemplateParametersByMessageTemplateId | no | – | – | **missing** |
| 5 | `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All` | service action | `UBTConnect` | BottomBarMenu.OnReady → BottomBarMenu.onReady → UBTConnect.directory_Updates_RefreshBottomBarCount → server Get_UI_UpdateItems_UnreadCount_All | no | `fetchUnreadUpdateItemsCount()` [`api/update/repository.ts:73`](../../app/src/api/update/repository.ts#L73) (page) | `BottomBar → directory_Updates_RefreshBottomBarCount → fetchUnreadUpdateItemsCount`<br>[`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | implemented |

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `NotificationDetails` | `onExecuteAction of AdaptiveCardViewer` | `adaptiveCardViewerOnExecuteAction` | – | shows a message |

### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`pages/NotificationDetails/NotificationDetailsPage.tsx:41`](../../app/src/pages/NotificationDetails/NotificationDetailsPage.tsx#L41) | `<MainPagesUpgradeLayout>` | `onBack` | `navigateBack` | – | goes to previous screen |

## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in the `analysis/sources/raw/` folder of the route; the files that TST changed after the capture are in `migration/runtime-sources/live/`.

### 7.1 OutSystems (TST)

| Input | Type | Mandatory | Place |
|---|---|---|---|
| `MessageInstanceId` | LongInteger | yes | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:142`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L142) |
| `MessageTemplateId` | LongInteger | yes | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:146`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L146) |
| `HardwareId` | Text | yes | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:150`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L150) |

| Block | Target | Parameters | Place |
|---|---|---|---|
| `NotificationDetails` | `HostSurvey` | `In_EventId` = `eventId`<br>`In_EventStartDate` = `eventStartDate`<br>`In_EventName` = `eventName`<br>`In_MemberId` = `memberId`<br>`In_EventEndDate` = `eventEndDate` | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:916`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L916) |
| `NotificationDetails` | `MilestoneDetail` | `In_EventName` = `eventName`<br>`In_EventId` = `eventId`<br>`In_MilestoneId` = `milestoneId`<br>`In_FromNotification` = `true` | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:1296`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L1296) |
| `NotificationDetails` | `EventDetail` | `In_FromNotification` = `true`<br>`In_EventId` = `eventId`<br>`In_MemberId` = `memberId`<br>`In_EventName` = `eventName` | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:1429`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L1429) |
| `NotificationDetails` | `AssembleDetail` | `AssembleEventTypeTile` = `assembleEventTypeTile`<br>`SeriesId` = `eventParentId`<br>`EventId` = `eventInstanceId` | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:1487`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L1487) |
| `NotificationDetails` | `HouseholdDetails` | `HouseholdId` = `textToLongInteger(objectId)` | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:1604`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L1604) |
| `NotificationDetails` | `OneSchoolGlobalDetails` | `In_OneSchoolGlobalId` = `textToLongInteger(objectId)` | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:1611`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L1611) |
| `NotificationDetails` | `SupperMeeting_Details` | `In_SubdivsionId` = `textToLongInteger(objectId)` | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:1618`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L1618) |
| `NotificationDetails` | `FeedItemDetail` | `FeedItemId` = `objectId` | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:1625`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L1625) |
| `NotificationDetails` | `LDM_Email_V2` | `EventHostId` = `in_EventHostId`<br>`In_IsContactOrganiser` = `false`<br>`In_IsMessageGuest` = `true`<br>`In_EventId` = `in_EventId` | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:1797`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L1797) |
| `NotificationDetails` | `LDM_Email` | `In_IsContactOrganiser` = `false`<br>`EventHostId` = `in_EventHostId`<br>`In_EventId` = `in_EventId`<br>`In_IsMessageGuest` = `true` | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:1806`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L1806) |
| `NotificationDetails` | `LDM_EventDetail_V2` | `EventHostId` = `in_EventHostId`<br>`EventId` = `in_EventId` | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:1874`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L1874) |
| `NotificationDetails` | `LDM_EventDetail` | `EventHostId` = `in_EventHostId`<br>`EventId` = `in_EventId` | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:1881`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L1881) |

### 7.2 React

Declared inputs of the route: `MessageInstanceId: LongInteger` (`app/src/app/routes.generated.ts`).

| Hook | Keys read | Place |
|---|---|---|
| `useSearchParams` | none | [`pages/NotificationDetails/NotificationDetailsPage.tsx:33`](../../app/src/pages/NotificationDetails/NotificationDetailsPage.tsx#L33) |

Navigations with parameters: none.

## 8. Lifecycle

What runs when the screen and its blocks open and close, without a user action.

### 8.1 OutSystems (TST)

Event handlers. The steps are the node comments and the conditions of the compiled action.

None.

Data actions and aggregates. The tool reads `dataFetchDependenciesOriginal`: `0` is a fetch when the block opens, `-1` is a fetch only on demand (a `Refresh Query` step). `Read by` lists the child block inputs, conditions, text widgets and actions that read the result.

| Block | Data action | Fetch | Read by | Place |
|---|---|---|---|---|
| `NotificationDetails` | `FetchMessageInstance` | on demand (`-1`) | **no widget or action reads it** | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:713`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L713) |
| `NotificationDetails` | `GetMessageInstance` | at start (`0`) | `view` ([`UBTConnect.App_Notifications.NotificationDetails.mvc.js:249`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L249)), `IconText.Text` ([`UBTConnect.App_Notifications.NotificationDetails.mvc.js:308`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L308)), `text` ([`UBTConnect.App_Notifications.NotificationDetails.mvc.js:386`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L386)), `CustomText.In_Text` ([`UBTConnect.App_Notifications.NotificationDetails.mvc.js:441`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L441)), `shown if (CustomText)` ([`UBTConnect.App_Notifications.NotificationDetails.mvc.js:479`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L479)), `AdaptiveCardViewer.In_AdaptiveCardJson` ([`UBTConnect.App_Notifications.NotificationDetails.mvc.js:499`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L499)), `SanitizedHtml.Value` ([`UBTConnect.App_Notifications.NotificationDetails.mvc.js:553`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L553)), `action getMessageInstanceByIdOnAfterFetch` ([`UBTConnect.App_Notifications.NotificationDetails.mvc.js:999`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L999)), `action getMessageTemplateParametersOnAfterFetch` ([`UBTConnect.App_Notifications.NotificationDetails.mvc.js:1351`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L1351)) | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:714`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L714) |

### 8.2 React

Effects (`useEffect`, `useLayoutEffect`) of the screen files, and the effects of shared components that make a call, a navigation or a message.

None.

Queries. A query fetches when its component mounts and when its key changes. `Read by` lists what reads the result in the same file.

| File | Hook (function) | Calls | Read by | Place |
|---|---|---|---|---|
| `NotificationDetailsPage.tsx` | `useNotificationDetailQuery` (`NotificationDetails`) | `/api/UBTConnect/NotificationDetails/DataActionFetchMessageInstance` | **nothing reads it** | [`pages/NotificationDetails/NotificationDetailsPage.tsx:36`](../../app/src/pages/NotificationDetails/NotificationDetailsPage.tsx#L36) |

## 9. Client state

Client variables and browser storage that the route reads or writes. Other screens can read this state.

### 9.1 OutSystems (TST)

None.

### 9.2 React

None.

## 10. Access

Who can open the route, and the role checks in the screen and block code.

| Side | Rule | Place |
|---|---|---|
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:2016`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L2016) |
| React | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

| Block | Action | Error | Steps of the handler |
|---|---|---|---|
| `NotificationDetails` | `adaptiveCardViewerOnExecuteAction` | `CommunicationException` ([`UBTConnect.App_Notifications.NotificationDetails.mvc.js:1686`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L1686)) | none |

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `App_Notifications` not in `migration/shell/sources/`. Handled errors: none.

### 11.2 React

None.

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `Layout_MainPages_Upgrade` | `UBTConnectLibrary` | [`components/layout/MainPagesUpgradeLayout/MainPagesUpgradeLayout.tsx`](../../app/src/components/layout/MainPagesUpgradeLayout/MainPagesUpgradeLayout.tsx) | 1 |
| `IconText` | `UBTConnectLibrary` | [`components/ui/IconText/IconText.tsx`](../../app/src/components/ui/IconText/IconText.tsx) | 0 |
| `CircleButton` | `UBTConnectLibrary` | [`components/ui/CircleButton/CircleButton.tsx`](../../app/src/components/ui/CircleButton/CircleButton.tsx) | 0 |
| `SectionSeparator` | `UBTConnect` | [`components/ui/SectionSeparator/SectionSeparator.tsx`](../../app/src/components/ui/SectionSeparator/SectionSeparator.tsx) | 0 |
| `BottomBarMenu` | `UBTConnect` | [`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | 1 |
| `BottomBarContent` | `UBTConnect` | [`components/layout/BottomBarContent/BottomBarContent.tsx`](../../app/src/components/layout/BottomBarContent/BottomBarContent.tsx) | 0 |
| `BottomBarItem` | `OutSystemsUI_2_23` | [`components/ui/BottomBarItem/BottomBarItem.tsx`](../../app/src/components/ui/BottomBarItem/BottomBarItem.tsx) | 0 |
| `App_IconBadge` | `UBTConnect` | [`components/layout/BottomBarIconBadge/BottomBarIconBadge.tsx`](../../app/src/components/layout/BottomBarIconBadge/BottomBarIconBadge.tsx) | 0 |
| `IconBadge` | `UBTConnectLibrary` | [`components/ui/IconBadge/IconBadge.tsx`](../../app/src/components/ui/IconBadge/IconBadge.tsx) | 0 |
| `Badge` | `UBTConnectLibrary` | [`components/ui/Badge/Badge.tsx`](../../app/src/components/ui/Badge/Badge.tsx) | 0 |

<details><summary>User actions of the shared blocks (6)</summary>

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `home` | goes to HomeFeed |
| 2 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `directory` | goes to CountryList, Locality_Details |
| 3 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `updates` | goes to Updates_SingleList |
| 4 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `bookmarks` | goes to Bookmarks |
| 5 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `menu` | goes to Menu |
| 6 | `Layout_MainPages_Upgrade` | `click of Icon` | `onClick_BackNavigation` | – | goes to previous screen |

</details>


### React

| File | User actions |
|---|---|
| [`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | 2 |
| [`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx) | 2 |

<details><summary>User actions of the shared components (14)</summary>

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:80`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L80) | `<PreventBackNavigation>` | `onBackNavigationPrevented` | `redirectHome` | – | goes to HomeFeed |
| 2 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:82`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L82) | `<BackNavigationHandler>` | `onBackNavigation` | `maybeRedirectHome` | – | goes to HomeFeed |
| 3 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Home` | goes to HomeFeed |
| 4 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Directory` | goes to CountryList, Locality_Details |
| 5 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Updates` | goes to Updates_SingleList |
| 6 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Bookmarks` | goes to Bookmarks |
| 7 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Menu` | goes to Menu |
| 8 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `other` | calls the prop onBottomBarClicked() |
| 9 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Home` | goes to HomeFeed |
| 10 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Directory` | goes to CountryList, Locality_Details |
| 11 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Updates` | goes to Updates_SingleList |
| 12 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Bookmarks` | goes to Bookmarks |
| 13 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Menu` | goes to Menu |
| 14 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `other` | calls the prop onBottomBarClicked() |

</details>


### React calls reached only through shared code

Calls that React can make on this route, without a TST chain on this route. Every reference chain starts in a shared container, component or app code (`containers/`, `components/`, `platform/`, `legacy/`, `lib/`), not in the screen files. TST makes these calls on a user action of the shared block, which the capture did not record, or on another screen.

None.
