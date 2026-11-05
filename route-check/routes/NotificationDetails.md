# NotificationDetails: OutSystems (TST) and React

The route `/UBTConnect/NotificationDetails`, read from the TST compiled code and from the React code by `tools/route-check/check_route.py` on 2026-11-05. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/NotificationDetails/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Live code.** TST changed 15 compiled files of this route after the capture (`migration/knowledge/tst-drift-2026-11-05.md`). The tool read the live copies in `migration/runtime-sources/live/` for: `Connect2_LegacyShared`, `js`, `NavigationHandler`, `OutSystemsUI_2_23`, `js`, `NotificationDetails`, `UBTConnect`, `js`, `js`, `UBTConnectLibrary`, `js`, `UBTConnect_Utils`, `js`, `UBT_AppManager`, `UBT_AppManager_Mobile`. The observed calls come from the capture.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/NotificationDetails` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.App_Notifications.NotificationDetails` | TST compiled code |
| UI flow | `App_Notifications` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/NotificationDetails/NotificationDetailsPage.tsx`](../../app/src/pages/NotificationDetails/NotificationDetailsPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | [`migration/screens/NotificationDetails/parity`](../../migration/screens/NotificationDetails/parity) | `route.py parity` |
| Code read | OutSystems: 1 files of the UI flow, 10 shared blocks, 28 app shell files. React: 154 files in the closure of the page | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 5: React makes 4, **0 missing**, 1 not a gap of the web app |
| Differences found | **0** (+ 1 not a gap of the web app) (see [section 3](#3-differences-found)) |
| Questions | 1 (see [section 4](#4-questions)) |
| React calls reached only through shared code | 0: see the last section |
| User actions of the route (own code) | OutSystems: 1. React: 1 |
| Screen and blocks of the UI flow with a React port | 1 of 1 |
| Navigation targets found in React | 8 of 8 |
| Shared blocks and components on the route | OutSystems 10, React 2 with user actions: see the last section |
| App shell on this route | 8 calls: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Differences found

Each line is a fact of both sides: a TST call, navigation or variable, and the React code that has it or not. The tool does not judge the behaviour.

None.

### Not a gap of the web app

Missing TST calls that a rule of `route-check/config.json` (`notApplicable`, user 2026-11-05) sets aside. The rule names the fact and its evidence; the chain is the one of the TST code.

**Declared, never run (navigation).** The navigation sits in a client action that no event, lifecycle step or action of the compiled code calls or binds (`tools/os_call_graph.py dead_client_actions`): TST cannot reach it.

- Navigation to `AssembleDetail` in `NotificationDetails.handler_NavigateTo_AssembleDetail`.
- Navigation to `EventDetail` in `NotificationDetails.handler_NavigateTo_OrbitEventDetails`.
- Navigation to `FeedItemDetail` in `NotificationDetails.handler_NavigateTo_ShareObjectDetail`.
- Navigation to `HostSurvey` in `NotificationDetails.handler_NavigateTo_OrbitHostSurvey`.
- Navigation to `HouseholdDetails` in `NotificationDetails.handler_NavigateTo_ShareObjectDetail`.
- Navigation to `LDM_Email` in `NotificationDetails.handler_AddAuditAndNavigateTo_EventEmail`.
- Navigation to `LDM_Email_V2` in `NotificationDetails.handler_AddAuditAndNavigateTo_EventEmail`.
- Navigation to `LDM_EventDetail` in `NotificationDetails.handler_AddAuditAndNavigateTo_EventDetail`.
- Navigation to `LDM_EventDetail_V2` in `NotificationDetails.handler_AddAuditAndNavigateTo_EventDetail`.
- Navigation to `MilestoneDetail` in `NotificationDetails.handler_NavigateTo_OrbitMilestone`.
- Navigation to `OneSchoolGlobalDetails` in `NotificationDetails.handler_NavigateTo_ShareObjectDetail`.
- Navigation to `SupperMeeting_Details` in `NotificationDetails.handler_NavigateTo_ShareObjectDetail`.

**Declared, never fetched.** The data action or aggregate fetches on demand (dataFetchDependenciesOriginal -1) and no action of the compiled code refreshes it: TST never calls it. Evidence: facts.json callSites: the only chain is the synthetic 'fetch at start' root of the call graph. The fetch mode comes from the compiled file (tools/os_extras.py fetch_modes).

- `UBTConnect/App_Notifications/NotificationDetails/DataActionFetchMessageInstance`. Chain on TST: NotificationDetails fetch at start → NotificationDetails.DataActionFetchMessageInstance.


## 4. Questions

1. React calls `/api/UBTConnect_Utils/ActionGetSignedImagesInBulk` from `cache_SignedImageURL_GetCallback()` [`lib/ubtConnectUtils/actions.ts:131`](../../app/src/lib/ubtConnectUtils/actions.ts#L131) (page). TST NotificationDetails has no chain to this call. Does the call belong to this route?

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
| 1 | `UBTConnect/App_Notifications/NotificationDetails/ActionWrapper_NotificationOpened` | server action | `NotificationDetails` | NotificationDetails fetch at start → NotificationDetails.DataActionGetMessageInstance → NotificationDetails.getMessageInstanceByIdOnAfterFetch → server Wrapper_NotificationOpened | no | `markNotificationDetailsOpened()` [`api/notification/notificationDetail.ts:20`](../../app/src/api/notification/notificationDetail.ts#L20) (page) | `NotificationDetails → useNotificationDetail → markNotificationDetailsOpened`<br>[`pages/NotificationDetails/NotificationDetailsPage.tsx`](../../app/src/pages/NotificationDetails/NotificationDetailsPage.tsx) | implemented |
| 2 | `UBTConnect/App_Notifications/NotificationDetails/DataActionFetchMessageInstance` | data action | `NotificationDetails` | NotificationDetails fetch at start → NotificationDetails.DataActionFetchMessageInstance | yes | – | – | not applicable (noCaller) |
| 3 | `UBTConnect/App_Notifications/NotificationDetails/DataActionGetMessageInstance` | data action | `NotificationDetails` | NotificationDetails fetch at start → NotificationDetails.DataActionGetMessageInstance | no | `fetchNotificationMessageInstance()` [`api/message/repository.ts:215`](../../app/src/api/message/repository.ts#L215) (page) | `NotificationDetails → useNotificationDetail → fetchNotificationMessageInstance`<br>[`pages/NotificationDetails/NotificationDetailsPage.tsx`](../../app/src/pages/NotificationDetails/NotificationDetailsPage.tsx) | implemented |
| 4 | `UBTConnect/App_Notifications/NotificationDetails/ScreenDataSetGetMessageTemplateParametersByMessageTemplateId` | aggregate | `NotificationDetails` | NotificationDetails fetch at start → NotificationDetails.DataActionGetMessageInstance → NotificationDetails.getMessageInstanceByIdOnAfterFetch → NotificationDetails.ScreenDataSetGetMessageTemplateParametersByMessageTemplateId<br>NotificationDetails fetch at start → NotificationDetails.ScreenDataSetGetMessageTemplateParametersByMessageTemplateId | no | `fetchNotificationTemplateParameters()` [`api/message/repository.ts:225`](../../app/src/api/message/repository.ts#L225) (page) | `NotificationDetails → useNotificationDetail → fetchNotificationTemplateParameters`<br>[`pages/NotificationDetails/NotificationDetailsPage.tsx`](../../app/src/pages/NotificationDetails/NotificationDetailsPage.tsx) | implemented |
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
| 1 | [`pages/NotificationDetails/NotificationDetailsPage.tsx:113`](../../app/src/pages/NotificationDetails/NotificationDetailsPage.tsx#L113) | `<MainPagesUpgradeLayout>` | `onBack` | `navigateBack` | – | goes to previous screen |

## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in the `analysis/sources/raw/` folder of the route; the files that TST changed after the capture are in `migration/runtime-sources/live/`.

### 7.1 OutSystems (TST)

| Input | Type | Mandatory | Place |
|---|---|---|---|
| `MessageInstanceId` | LongInteger | yes | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:142`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L142) |
| `MessageTemplateId` | LongInteger | yes | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:146`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L146) |
| `HardwareId` | Text | yes | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:150`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L150) |

Navigations with parameters: none.

### 7.2 React

Declared inputs of the route: `MessageInstanceId: LongInteger` (`app/src/app/routes.generated.ts`).

| Hook | Keys read | Place |
|---|---|---|
| `useSearchParams` | none | [`pages/NotificationDetails/NotificationDetailsPage.tsx:69`](../../app/src/pages/NotificationDetails/NotificationDetailsPage.tsx#L69) |

Navigations with parameters: none.

## 8. Lifecycle

What runs when the screen and its blocks open and close, without a user action.

### 8.1 OutSystems (TST)

Event handlers. The steps are the node comments and the conditions of the compiled action.

None.

Data actions and aggregates. The tool reads `dataFetchDependenciesOriginal`: `0` is a fetch when the block opens, `-1` is a fetch only on demand (a `Refresh Query` step). `Read by` lists the child block inputs, conditions, text widgets and actions that read the result.

| Block | Data action | Fetch | Read by | Place |
|---|---|---|---|---|
| `NotificationDetails` | `GetMessageTemplateParametersByMessageTemplateId` | on demand (`-1`) | **no widget or action reads it** | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:712`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L712) |
| `NotificationDetails` | `FetchMessageInstance` | on demand (`-1`) | **no widget or action reads it** | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:713`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L713) |
| `NotificationDetails` | `GetMessageInstance` | at start (`0`) | `view` ([`UBTConnect.App_Notifications.NotificationDetails.mvc.js:249`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L249)), `IconText.Text` ([`UBTConnect.App_Notifications.NotificationDetails.mvc.js:308`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L308)), `text` ([`UBTConnect.App_Notifications.NotificationDetails.mvc.js:386`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L386)), `CustomText.In_Text` ([`UBTConnect.App_Notifications.NotificationDetails.mvc.js:441`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L441)), `shown if (CustomText)` ([`UBTConnect.App_Notifications.NotificationDetails.mvc.js:479`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L479)), `AdaptiveCardViewer.In_AdaptiveCardJson` ([`UBTConnect.App_Notifications.NotificationDetails.mvc.js:499`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L499)), `SanitizedHtml.Value` ([`UBTConnect.App_Notifications.NotificationDetails.mvc.js:553`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L553)), `action getMessageInstanceByIdOnAfterFetch` ([`UBTConnect.App_Notifications.NotificationDetails.mvc.js:999`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L999)), `action getMessageTemplateParametersOnAfterFetch` ([`UBTConnect.App_Notifications.NotificationDetails.mvc.js:1351`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L1351)) | [`UBTConnect.App_Notifications.NotificationDetails.mvc.js:714`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationDetails.mvc.js#L714) |

### 8.2 React

Effects (`useEffect`, `useLayoutEffect`) of the screen files, and the effects of shared components that make a call, a navigation or a message.

None.

Queries. A query fetches when its component mounts and when its key changes. `Read by` lists what reads the result in the same file.

None.

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
