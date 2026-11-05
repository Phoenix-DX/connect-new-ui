# MessageList: OutSystems (TST) and React

The route `/UBTConnect/MessageList`, read from the TST compiled code and from the React code by `route-actions/tools/check_route.py` on 2026-11-05. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/MessageList/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Live code.** TST changed 14 compiled files of this route after the capture (`migration/knowledge/tst-drift-2026-11-05.md`). The tool read the live copies in `migration/runtime-sources/live/` for: `Connect2_LegacyShared`, `js`, `NavigationHandler`, `OutSystemsUI_2_23`, `js`, `UBTConnect`, `js`, `js`, `UBTConnectLibrary`, `js`, `UBTConnect_Utils`, `js`, `UBT_AppManager`, `UBT_AppManager_Mobile`. The observed calls come from the capture.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/MessageList` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.Legacy_MyNotificationsFlow.MessageList` | TST compiled code |
| UI flow | `Legacy_MyNotificationsFlow` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/MessageList/MessageListPage.tsx`](../../app/src/pages/MessageList/MessageListPage.tsx) | `app/src/pages/` |
| React route rules | access `anonymous`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | [`migration/screens/MessageList/parity`](../../migration/screens/MessageList/parity) | `route.py parity` |
| Code read | OutSystems: 1 files of the UI flow, 14 shared blocks, 25 app shell files. React: 173 files in the closure of the page | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 7: React makes 7, **0 missing** |
| Differences found | **0** (see [section 3](#3-differences-found)) |
| Questions | 0 (see [section 4](#4-questions)) |
| React calls reached only through shared code | 0: see the last section |
| User actions of the route (own code) | OutSystems: 3. React: 10 |
| Screen and blocks of the UI flow with a React port | 1 of 1 |
| Navigation targets found in React | 8 of 8 |
| Shared blocks and components on the route | OutSystems 14, React 4 with user actions: see the last section |
| App shell on this route | 8 calls: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Differences found

Each line is a fact of both sides: a TST call, navigation or variable, and the React code that has it or not. The tool does not judge the behaviour.

None.

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
| 1 | `Connect2_LegacyShared/ActionGetNumberUnreadMessages` | server action | `Connect2_LegacyShared` | onClick in MessageListBlock → event markAllRead of MessageListBlock → ScreenBlock_MessageList.onClick_MarkAllAsRead → Connect2_LegacyShared.synchronizeNumberUnreadMessages → server GetNumberUnreadMessages | yes | `fetchNumberUnreadMessages()` [`api/message/unreadMessages.ts:22`](../../app/src/api/message/unreadMessages.ts#L22) (shell + page) | `MessageList → useMessageList → synchronizeNumberUnreadMessages → fetchNumberUnreadMessages`<br>[`pages/MessageList/MessageListPage.tsx`](../../app/src/pages/MessageList/MessageListPage.tsx)<br>`AppFrame → AppStart → … → fetchNumberUnreadMessages`<br>[`app/AppFrame.tsx`](../../app/src/app/AppFrame.tsx) | implemented |
| 2 | `Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageList/ActionMarkMessageAsClear` | server action | `ScreenBlock_MessageList` | onClick in MessageListBlock → event swipeEventsClear of MessageListBlock → ScreenBlock_MessageList.swipe_EventsClear → server MarkMessageAsClear | no | `markMessageAsClear()` [`api/message/repository.ts:281`](../../app/src/api/message/repository.ts#L281) (page) | `MessageList → useMessageList → markMessageAsClear`<br>[`pages/MessageList/MessageListPage.tsx`](../../app/src/pages/MessageList/MessageListPage.tsx) | implemented |
| 3 | `Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageList/ActionMarkMessageAsRead` | server action | `ScreenBlock_MessageList` | onClick in MessageListBlock → event swipeEventsRead of MessageListBlock → ScreenBlock_MessageList.swipe_EventsRead → server MarkMessageAsRead | no | `markMessageAsRead()` [`api/message/repository.ts:270`](../../app/src/api/message/repository.ts#L270) (page) | `MessageList → useMessageList → markMessageAsRead`<br>[`pages/MessageList/MessageListPage.tsx`](../../app/src/pages/MessageList/MessageListPage.tsx) | implemented |
| 4 | `Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageList/ActionWrapper_MarkAllAsReadNotifications` | server action | `ScreenBlock_MessageList` | onClick in MessageListBlock → event markAllRead of MessageListBlock → ScreenBlock_MessageList.onClick_MarkAllAsRead → server Wrapper_MarkAllAsReadNotifications | no | `markAllNotificationsAsRead()` [`api/notification/repository.ts:84`](../../app/src/api/notification/repository.ts#L84) (page) | `MessageList → useMessageList → markAllNotificationsAsRead`<br>[`pages/MessageList/MessageListPage.tsx`](../../app/src/pages/MessageList/MessageListPage.tsx) | implemented |
| 5 | `Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageList/DataActionGetMessageInstanceById2` | data action | `ScreenBlock_MessageList` | onClick in MessageListBlock → event onClick_GoToMessageDetail of MessageListBlock → ScreenBlock_MessageList.onClick_GoToMessageDetail → ScreenBlock_MessageList.DataActionGetMessageInstanceById2<br>ScreenBlock_MessageList fetch at start → ScreenBlock_MessageList.DataActionGetMessageInstanceById2 | no | `fetchMessageInstanceExists()` [`api/message/repository.ts:259`](../../app/src/api/message/repository.ts#L259) (page) | `MessageList → useMessageList → fetchMessageInstanceExists`<br>[`pages/MessageList/MessageListPage.tsx`](../../app/src/pages/MessageList/MessageListPage.tsx) | implemented |
| 6 | `Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageList/DataActionGetMessages` | data action | `ScreenBlock_MessageList` | onClick in MessageListBlock → event onClick_GoToMessageDetail of MessageListBlock → ScreenBlock_MessageList.onClick_GoToMessageDetail → ScreenBlock_MessageList.DataActionGetMessages<br>ScreenBlock_MessageList.OnReady → ScreenBlock_MessageList.onReady → ScreenBlock_MessageList.DataActionGetMessages<br>ScreenBlock_MessageList.onClick_ApplyFilters → ScreenBlock_MessageList.refreshMessages → ScreenBlock_MessageList.DataActionGetMessages<br>(+3 more chains) | yes | `fetchMessages()` [`api/message/repository.ts:243`](../../app/src/api/message/repository.ts#L243) (page) | `MessageList → useMessageList → fetchMessages`<br>[`pages/MessageList/MessageListPage.tsx`](../../app/src/pages/MessageList/MessageListPage.tsx) | implemented |
| 7 | `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All` | service action | `UBTConnect` | BottomBarMenu.OnReady → BottomBarMenu.onReady → UBTConnect.directory_Updates_RefreshBottomBarCount → server Get_UI_UpdateItems_UnreadCount_All | no | `fetchUnreadUpdateItemsCount()` [`api/update/repository.ts:73`](../../app/src/api/update/repository.ts#L73) (page) | `BottomBar → directory_Updates_RefreshBottomBarCount → fetchUnreadUpdateItemsCount`<br>[`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | implemented |

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `MessageList` | `navigateTo_MessageDetail of MessageList` | `handler_NavigateTo_MessageDetail` | – | goes to MessageDetail |
| 2 | `MessageList` | `navigateTo_B2CCallback of MessageList` | `handler_NavigateTo_B2CCallback` | – | goes to URL redirectTo |
| 3 | `MessageList` | `navigateTo_B2CLanding of MessageList` | `handler_NavigateTo_B2CLanding` | – | goes to Login |

### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`pages/MessageList/MessageListPage.tsx:36`](../../app/src/pages/MessageList/MessageListPage.tsx#L36) | `<MessageListView>` | `onPullToRefresh` | `view.onPullToRefresh` | – | calls DataActionGetMessages |
| 2 | [`pages/MessageList/MessageListPage.tsx:36`](../../app/src/pages/MessageList/MessageListPage.tsx#L36) | `<MessageListView>` | `onSearchSubmit` | `view.onSearchSubmit` | – | calls DataActionGetMessages |
| 3 | [`pages/MessageList/MessageListPage.tsx:36`](../../app/src/pages/MessageList/MessageListPage.tsx#L36) | `<MessageListView>` | `onSearchClear` | `view.onSearchClear` | – | calls DataActionGetMessages |
| 4 | [`pages/MessageList/MessageListPage.tsx:36`](../../app/src/pages/MessageList/MessageListPage.tsx#L36) | `<MessageListView>` | `onSwipeEventsClear` | `view.onSwipeEventsClear` | – | calls ActionMarkMessageAsClear |
| [5](#625-messagelistview-onmarkallread) | [`pages/MessageList/MessageListPage.tsx:36`](../../app/src/pages/MessageList/MessageListPage.tsx#L36) | `<MessageListView>` | `onMarkAllRead` | `view.onMarkAllRead` | – | calls ActionWrapper_MarkAllAsReadNotifications, DataActionGetMessages, ActionGetNumberUnreadMessages |
| [6](#626-messagelistview-ongotomessagedetail) | [`pages/MessageList/MessageListPage.tsx:36`](../../app/src/pages/MessageList/MessageListPage.tsx#L36) | `<MessageListView>` | `onGoToMessageDetail` | `view.onGoToMessageDetail` | – | calls DataActionGetMessageInstanceById2, DataActionGetMessages; goes to MessageDetail; shows a message |
| 7 | [`pages/MessageList/MessageListPage.tsx:36`](../../app/src/pages/MessageList/MessageListPage.tsx#L36) | `<MessageListView>` | `onSwipeEventsRead` | `view.onSwipeEventsRead` | – | calls ActionMarkMessageAsRead |
| 8 | [`pages/MessageList/MessageListPage.tsx:36`](../../app/src/pages/MessageList/MessageListPage.tsx#L36) | `<MessageListView>` | `onScrollEnding` | `view.onScrollEnding` | – | calls DataActionGetMessages |
| 9 | [`pages/MessageList/MessageListPage.tsx:36`](../../app/src/pages/MessageList/MessageListPage.tsx#L36) | `<MessageListView>` | `onResetFilters` | `view.onResetFilters` | – | calls DataActionGetMessages |
| 10 | [`pages/MessageList/MessageListPage.tsx:36`](../../app/src/pages/MessageList/MessageListPage.tsx#L36) | `<MessageListView>` | `onApplyFilters` | `view.onApplyFilters` | – | calls DataActionGetMessages |

<details><summary>2 diagrams (handlers with two or more effects)</summary>

#### 6.2.5 MessageListView: onMarkAllRead

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as MessageListView · MessageListPage.tsx
  participant A as Server (React api)
  U->>H: onMarkAllRead → view.onMarkAllRead
  Note over H: via onClickMarkAllAsRead()
  Note over H: via markAllNotificationsAsRead()
  H->>A: ActionWrapper_MarkAllAsReadNotifications(DeviceHardwareId, IsPrivate, IsPublic, …)
  A-->>H: TotalChange
  Note over H: via refreshMessages()
  Note over H: via refreshGetMessages()
  Note over H: via getMessages.refetch()
  H->>A: DataActionGetMessages(CurrentMessageInstanceId, DeviceHardwareId, Filter_MessageTypePrivate, …)
  A-->>H: CountUnreadMessages, HasUnreadMessages, Messages
  Note over H: via synchronizeNumberUnreadMessages()
  Note over H: via fetchNumberUnreadMessages()
  H->>A: ActionGetNumberUnreadMessages(DeviceId)
  A-->>H: NumberPrivateUnreadMessages, NumberPublicUnreadMessages
```

#### 6.2.6 MessageListView: onGoToMessageDetail

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as MessageListView · MessageListPage.tsx
  participant A as Server (React api)
  participant N as Navigation
  U->>H: onGoToMessageDetail → view.onGoToMessageDetail
  Note over H: via onClickGoToMessageDetail()
  Note over H: via fetchMessageInstanceExists()
  H->>A: DataActionGetMessageInstanceById2(CurrentMessageInstanceId, DeviceHardwareId, Filter_MessageTypePrivate, …)
  A-->>H: Exist
  Note over H: via onNavigateToMessageDetail()
  H->>N: go to MessageDetail
  Note over H: message 'This message is no longer available'
  Note over H: via refreshGetMessages()
  Note over H: via getMessages.refetch()
  H->>A: DataActionGetMessages(CurrentMessageInstanceId, DeviceHardwareId, Filter_MessageTypePrivate, …)
  A-->>H: CountUnreadMessages, HasUnreadMessages, Messages
```


</details>


## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in the `analysis/sources/raw/` folder of the route; the files that TST changed after the capture are in `migration/runtime-sources/live/`.

### 7.1 OutSystems (TST)

Screen inputs: none. `setInputs` of `MessageList` reads no input.

| Block | Target | Parameters | Place |
|---|---|---|---|
| `MessageList` | `MessageDetail` | `MessageInstanceId` = `messageInstanceId` | [`UBTConnect.Legacy_MyNotificationsFlow.MessageList.mvc.js:337`](../../migration/screens/MessageList/analysis/sources/raw/UBTConnect.Legacy_MyNotificationsFlow.MessageList.mvc.js#L337) |

### 7.2 React

Declared inputs of the route: none (`app/src/app/routes.generated.ts`).

Parameters read (`useSearchParams`, `useParams`): none.

| File | Target | Parameters | Place |
|---|---|---|---|
| `MessageListPage.tsx` | `MessageDetail` | `MessageInstanceId` = `messageInstanceId` | [`pages/MessageList/MessageListPage.tsx:24`](../../app/src/pages/MessageList/MessageListPage.tsx#L24) |

## 8. Lifecycle

What runs when the screen and its blocks open and close, without a user action.

### 8.1 OutSystems (TST)

Event handlers. The steps are the node comments and the conditions of the compiled action.

| Block | Event | Action | Steps |
|---|---|---|---|
| `MessageList` | OnReady ([`UBTConnect.Legacy_MyNotificationsFlow.MessageList.mvc.js:506`](../../migration/screens/MessageList/analysis/sources/raw/UBTConnect.Legacy_MyNotificationsFlow.MessageList.mvc.js#L506)) | `onReady` | 1. Execute Action: ClearAllNotifications ([`L304`](../../migration/screens/MessageList/analysis/sources/raw/UBTConnect.Legacy_MyNotificationsFlow.MessageList.mvc.js#L304)) |

<details><summary>Sequence diagrams of the screen event handlers (1)</summary>

The diagram keeps the order of the steps in the compiled action. The code does not give the order of the handlers of different blocks.

#### 8.1.1 MessageList: OnReady

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as MessageList
  R->>B: OnReady → onReady
  B->>B: action ClearAllNotifications
```

</details>

Data actions and aggregates. The tool reads `dataFetchDependenciesOriginal`: `0` is a fetch when the block opens, `-1` is a fetch only on demand (a `Refresh Query` step). `Read by` lists the child block inputs, conditions, text widgets and actions that read the result.

None.

### 8.2 React

Effects (`useEffect`, `useLayoutEffect`) of the screen files, and the effects of shared components that make a call, a navigation or a message.

| File | Hook (function) | Dependencies | Cleanup | Effects | Place |
|---|---|---|---|---|---|
| `MessageListItem.tsx` | `useEffect` (`MessageListItem`) | `[]` | yes | none | [`pages/MessageList/components/MessageListItem.tsx:50`](../../app/src/pages/MessageList/components/MessageListItem.tsx#L50) |
| `MessageSearchHistory.tsx` | `useEffect` (`MessageSearchHistory`) | `[recentSearchTypeId, searchString, showOnlyOnCorrectTerm]` | yes | none | [`pages/MessageList/components/MessageSearchHistory.tsx:41`](../../app/src/pages/MessageList/components/MessageSearchHistory.tsx#L41) |

Queries. A query fetches when its component mounts and when its key changes. `Read by` lists what reads the result in the same file.

| File | Hook (function) | Calls | Read by | Place |
|---|---|---|---|---|
| `useMessageList.ts` | `useQuery` (`useMessageList`) | `/api/Connect2_LegacyShared/ScreenBlock_MessageList/DataActionGetMessages` | `var result` ([`L123`](../../app/src/pages/MessageList/hooks/useMessageList.ts#L123)), `var onScrollEnding` ([`L283`](../../app/src/pages/MessageList/hooks/useMessageList.ts#L283)), `return` ([`L306`](../../app/src/pages/MessageList/hooks/useMessageList.ts#L306)) | [`pages/MessageList/hooks/useMessageList.ts:101`](../../app/src/pages/MessageList/hooks/useMessageList.ts#L101) |

## 9. Client state

Client variables and browser storage that the route reads or writes. Other screens can read this state.

### 9.1 OutSystems (TST)

None.

### 9.2 React

| File | Operation | Variable or key | Place |
|---|---|---|---|
| `unreadNotifications.ts` | `clientVar.set` | `Connect2_LegacyShared.UnreadNotificationsNumber` | [`pages/MessageList/hooks/unreadNotifications.ts:7`](../../app/src/pages/MessageList/hooks/unreadNotifications.ts#L7) |
| `useMessageList.ts` | `clientVar.get` | `UBT_AppManager.DeviceInfo_UUID` | [`pages/MessageList/hooks/useMessageList.ts:92`](../../app/src/pages/MessageList/hooks/useMessageList.ts#L92) |

## 10. Access

Who can open the route, and the role checks in the screen and block code.

| Side | Rule | Place |
|---|---|---|
| OutSystems (TST) | anonymous (no check) | [`UBTConnect.Legacy_MyNotificationsFlow.MessageList.mvc.js:530`](../../migration/screens/MessageList/analysis/sources/raw/UBTConnect.Legacy_MyNotificationsFlow.MessageList.mvc.js#L530) |
| React | access `anonymous`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

The actions of the screen and its blocks have no `Handle Error` node.

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `Legacy_MyNotificationsFlow` not in `migration/shell/sources/`. Handled errors: none.

### 11.2 React

None.

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `ScreenBlock_MessageList` | `Connect2_LegacyShared` | [`pages/MessageList/components/MessageListView.tsx`](../../app/src/pages/MessageList/components/MessageListView.tsx), [`pages/MessageList/hooks/messageListState.ts`](../../app/src/pages/MessageList/hooks/messageListState.ts), [`pages/MessageList/hooks/useMessageList.ts`](../../app/src/pages/MessageList/hooks/useMessageList.ts) | 4 |
| `Layout` | `Connect2_LegacyShared` | [`components/layout/LegacyLayout/LegacyLayout.tsx`](../../app/src/components/layout/LegacyLayout/LegacyLayout.tsx) | 0 |
| `BaseLayout_UpdatedOSUI` | `Connect2_LegacyShared` | [`components/layout/BaseLayout/BaseLayout.tsx`](../../app/src/components/layout/BaseLayout/BaseLayout.tsx) | 0 |
| `MenuIcon__UpdatedOSUI` | `Connect2_LegacyShared` | [`components/layout/MenuIcon/MenuIcon.tsx`](../../app/src/components/layout/MenuIcon/MenuIcon.tsx) | 1 |
| `PullToRefresh` | `OutSystemsUI_2_23` | [`components/ui/PullToRefresh/PullToRefresh.tsx`](../../app/src/components/ui/PullToRefresh/PullToRefresh.tsx) | 0 |
| `MessageListBlock` | `Connect2_LegacyShared` | [`pages/MessageList/components/MessageListBlock.tsx`](../../app/src/pages/MessageList/components/MessageListBlock.tsx) | 0 |
| `MessageListItem` | `Connect2_LegacyShared` | [`pages/MessageList/components/MessageListItem.tsx`](../../app/src/pages/MessageList/components/MessageListItem.tsx) | 0 |
| `Spinner` | `Connect2_LegacyShared` | [`components/ui/Spinner/Spinner.tsx`](../../app/src/components/ui/Spinner/Spinner.tsx) | 0 |
| `BottomBarMenu` | `UBTConnect` | [`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | 1 |
| `BottomBarContent` | `UBTConnect` | [`components/layout/BottomBarContent/BottomBarContent.tsx`](../../app/src/components/layout/BottomBarContent/BottomBarContent.tsx) | 0 |
| `BottomBarItem` | `OutSystemsUI_2_23` | [`components/ui/BottomBarItem/BottomBarItem.tsx`](../../app/src/components/ui/BottomBarItem/BottomBarItem.tsx) | 0 |
| `App_IconBadge` | `UBTConnect` | [`components/layout/BottomBarIconBadge/BottomBarIconBadge.tsx`](../../app/src/components/layout/BottomBarIconBadge/BottomBarIconBadge.tsx) | 0 |
| `IconBadge` | `UBTConnectLibrary` | [`components/ui/IconBadge/IconBadge.tsx`](../../app/src/components/ui/IconBadge/IconBadge.tsx) | 0 |
| `Badge` | `UBTConnectLibrary` | [`components/ui/Badge/Badge.tsx`](../../app/src/components/ui/Badge/Badge.tsx) | 0 |

<details><summary>User actions of the shared blocks (10)</summary>

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `MenuIcon__UpdatedOSUI` | `onClick (HTML element)` | `onBack` | – | goes to previous screen |
| 2 | `ScreenBlock_MessageList` | `swipeEventsClear of MessageListBlock` | `swipe_EventsClear` | – | calls MarkMessageAsClear |
| 3 | `ScreenBlock_MessageList` | `markAllRead of MessageListBlock` | `onClick_MarkAllAsRead` | – | calls Wrapper_MarkAllAsReadNotifications, GetNumberUnreadMessages |
| 4 | `ScreenBlock_MessageList` | `onClick_GoToMessageDetail of MessageListBlock` | `onClick_GoToMessageDetail` | – | shows a message |
| 5 | `ScreenBlock_MessageList` | `swipeEventsRead of MessageListBlock` | `swipe_EventsRead` | – | calls MarkMessageAsRead |
| 6 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `home` | goes to HomeFeed |
| 7 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `directory` | goes to CountryList, Locality_Details |
| 8 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `updates` | goes to Updates_SingleList |
| 9 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `bookmarks` | goes to Bookmarks |
| 10 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `menu` | goes to Menu |

</details>


### React

| File | User actions |
|---|---|
| [`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | 2 |
| [`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx) | 2 |
| [`components/layout/MenuIcon/MenuIcon.tsx`](../../app/src/components/layout/MenuIcon/MenuIcon.tsx) | 1 |
| [`components/layout/MenuIconBack/MenuIconBack.tsx`](../../app/src/components/layout/MenuIconBack/MenuIconBack.tsx) | 1 |

<details><summary>User actions of the shared components (16)</summary>

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
| 15 | [`components/layout/MenuIconBack/MenuIconBack.tsx:19`](../../app/src/components/layout/MenuIconBack/MenuIconBack.tsx#L19) | `<OSLink>` | `onClick` | `navigateBack` | – | goes to previous screen |
| 16 | [`components/layout/MenuIcon/MenuIcon.tsx:34`](../../app/src/components/layout/MenuIcon/MenuIcon.tsx#L34) | `<div>` | `onClick` | `inline` | – | goes to previous screen |

</details>


### React calls reached only through shared code

Calls that React can make on this route, without a TST chain on this route. Every reference chain starts in a shared container, component or app code (`containers/`, `components/`, `platform/`, `legacy/`, `lib/`), not in the screen files. TST makes these calls on a user action of the shared block, which the capture did not record, or on another screen.

None.
