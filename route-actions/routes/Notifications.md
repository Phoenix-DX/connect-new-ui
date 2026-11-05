# Notifications: OutSystems (TST) and React

The route `/UBTConnect/Notifications`, read from the TST compiled code and from the React code by `route-actions/tools/check_route.py` on 2026-11-05. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/Notifications/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Live code.** TST changed 21 compiled files of this route after the capture (`migration/knowledge/tst-drift-2026-11-05.md`). The tool read the live copies in `migration/runtime-sources/live/` for: `Connect2_LegacyShared`, `js`, `NavigationHandler`, `OutSystemsUI_2_23`, `js`, `ReactiveHtmlSanitizer`, `Notifications`, `NotificationsList`, `NotificationsListBreakpoints`, `Notifications_Header`, `UBTConnect`, `js`, `js`, `Notification_ListItem`, `AvatarImage`, `UBTConnectLibrary`, `js`, `UBTConnect_Utils`, `js`, `UBT_AppManager`, `UBT_AppManager_Mobile`. The observed calls come from the capture.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/Notifications` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.App_Notifications.Notifications` | TST compiled code |
| UI flow | `App_Notifications` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/Notifications/NotificationsPage.tsx`](../../app/src/pages/Notifications/NotificationsPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect C2NewNotifications = false → MessageList | `app/src/app/routes.ts` |
| Screenshots | [`migration/screens/Notifications/parity`](../../migration/screens/Notifications/parity) | `route.py parity` |
| Code read | OutSystems: 7 files of the UI flow, 23 shared blocks, 28 app shell files. React: 175 files in the closure of the page | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 8: React makes 8, **0 missing** |
| Differences found | **0** (see [section 3](#3-differences-found)) |
| Questions | 0 (see [section 4](#4-questions)) |
| React calls reached only through shared code | 0: see the last section |
| User actions of the route (own code) | OutSystems: 6. React: 16 |
| Screen and blocks of the UI flow with a React port | 7 of 7 |
| Navigation targets found in React | 7 of 7 |
| Shared blocks and components on the route | OutSystems 23, React 2 with user actions: see the last section |
| App shell on this route | 9 calls: see [APP_SHELL.md](../APP_SHELL.md) |

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
| 1 | `UBTConnect/App_Notifications/Notifications/ActionMarkAllAsReadNotifications` | server action | `Notifications` | onClick in IconText → event clicked of IconText → … → Notifications.handler_MoreActionSheetMarkAllAsRead → server MarkAllAsReadNotifications | no | `markAllAsReadNotifications()` [`api/notification/repository.ts:68`](../../app/src/api/notification/repository.ts#L68) (page) | `Notifications → useNotifications → markAllAsReadNotifications`<br>[`pages/Notifications/NotificationsPage.tsx`](../../app/src/pages/Notifications/NotificationsPage.tsx) | implemented |
| 2 | `UBTConnect/App_Notifications/Notifications/ActionMarkAsRead` | server action | `Notifications` | onClick in NotificationsList → NotificationsList.onClick_NotificationDetail → … → Notifications.handler_NotificationDetail → server MarkAsRead | no | `markNotificationAsRead()` [`api/notification/notificationDetail.ts:14`](../../app/src/api/notification/notificationDetail.ts#L14) (page) | `Notifications → useNotifications → markNotificationAsRead`<br>[`pages/Notifications/NotificationsPage.tsx`](../../app/src/pages/Notifications/NotificationsPage.tsx) | implemented |
| 3 | `UBTConnect/App_Notifications/Notifications/DataActionFetchNotifications` | data action | `Notifications` | onChange in Notifications_Action → Notifications_Action.switch_IsOnlyShowUnReadOnChange → event onlyShowUnread of Notifications_Action → Notifications.handler_OnlyShowUnread → Notifications.DataActionFetchNotifications<br>NotificationsListBreakpoints.notificationsListBreakpoints_OnScrollEnding → event onLoadMore of NotificationsListBreakpoints → Notifications.notificationsListBreakpoints_OnLoadMore → Notifications.DataActionFetchNotifications<br>event event_OnClick of Button → MoreActionSheet.onClick_Clear → … → Notifications.refreshNotifications → Notifications.DataActionFetchNotifications<br>(+2 more chains) | yes | `fetchNotifications()` [`api/notification/repository.ts:40`](../../app/src/api/notification/repository.ts#L40) (page) | `Notifications → useNotifications → fetchNotifications`<br>[`pages/Notifications/NotificationsPage.tsx`](../../app/src/pages/Notifications/NotificationsPage.tsx) | implemented |
| 4 | `UBTConnect/App_Notifications/Notifications/DataActionGetDateRanges` | data action | `Notifications` | Notifications.OnReady → Notifications.screenEvent_OnReady → Notifications.DataActionGetDateRanges<br>Notifications fetch at start → Notifications.DataActionGetDateRanges | yes | `fetchNotificationDateRanges()` [`api/notification/repository.ts:32`](../../app/src/api/notification/repository.ts#L32) (page) | `Notifications → useNotifications → fetchNotificationDateRanges`<br>[`pages/Notifications/NotificationsPage.tsx`](../../app/src/pages/Notifications/NotificationsPage.tsx) | implemented |
| 5 | `UBTConnect/App_Notifications/Notifications/ServiceAPIDelete_Notifications` | service action | `Notifications` | MoreActionSheet.deleteAllNotificationClicked → event deleteAllNotification of MoreActionSheet → … → Notifications.handler_MoreActionSheetDeleteAll → server Delete_Notifications | no | `deleteNotifications()` [`api/notification/repository.ts:60`](../../app/src/api/notification/repository.ts#L60) (page) | `NotificationsList → deleteNotifications`<br>[`pages/Notifications/components/NotificationsList.tsx`](../../app/src/pages/Notifications/components/NotificationsList.tsx)<br>`Notifications → useNotifications → deleteNotifications`<br>[`pages/Notifications/NotificationsPage.tsx`](../../app/src/pages/Notifications/NotificationsPage.tsx) | implemented |
| 6 | `UBTConnect/App_Notifications/NotificationsList/ActionToggleRead` | server action | `NotificationsList` | onClick in NotificationsList → NotificationsList.handler_ToggleRead → server ToggleRead | no | `toggleNotificationRead()` [`api/notification/repository.ts:54`](../../app/src/api/notification/repository.ts#L54) (page) | `NotificationsList → toggleNotificationRead`<br>[`pages/Notifications/components/NotificationsList.tsx`](../../app/src/pages/Notifications/components/NotificationsList.tsx) | implemented |
| 7 | `UBTConnect/App_Notifications/NotificationsList/ServiceAPIDelete_Notifications` | service action | `NotificationsList` | NotificationsList.handler_DeleteNotification → server Delete_Notifications | no | `deleteNotifications()` [`api/notification/repository.ts:60`](../../app/src/api/notification/repository.ts#L60) (page) | `NotificationsList → deleteNotifications`<br>[`pages/Notifications/components/NotificationsList.tsx`](../../app/src/pages/Notifications/components/NotificationsList.tsx)<br>`Notifications → useNotifications → deleteNotifications`<br>[`pages/Notifications/NotificationsPage.tsx`](../../app/src/pages/Notifications/NotificationsPage.tsx) | implemented |
| 8 | `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All` | service action | `UBTConnect` | BottomBarMenu.OnReady → BottomBarMenu.onReady → UBTConnect.directory_Updates_RefreshBottomBarCount → server Get_UI_UpdateItems_UnreadCount_All<br>onClick in IconText → event clicked of IconText → … → UBTConnect.directory_Updates_RefreshBottomBarCount → server Get_UI_UpdateItems_UnreadCount_All<br>onChange in Notifications_Action → Notifications_Action.switch_IsOnlyShowUnReadOnChange → … → UBTConnect.directory_Updates_RefreshBottomBarCount → server Get_UI_UpdateItems_UnreadCount_All<br>(+3 more chains) | yes | `fetchUnreadUpdateItemsCount()` [`api/update/repository.ts:73`](../../app/src/api/update/repository.ts#L73) (page) | `BottomBar → directory_Updates_RefreshBottomBarCount → fetchUnreadUpdateItemsCount`<br>[`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx)<br>`Notifications → useNotifications → directory_Updates_RefreshBottomBarCount → fetchUnreadUpdateItemsCount`<br>[`pages/Notifications/NotificationsPage.tsx`](../../app/src/pages/Notifications/NotificationsPage.tsx) | implemented |

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| [1](#611-notifications-handler_notificationdetail) | `Notifications` | `notificationDetail of NotificationsListBreakpoints` | `handler_NotificationDetail` | – | calls MarkAsRead; goes to NotificationDetails |
| 2 | `Notifications` | `deleteAll of MoreActionSheet` | `handler_MoreActionSheetDeleteAll` | – | calls Delete_Notifications |
| [3](#613-notifications-handler_moreactionsheetmarkallasread) | `Notifications` | `markAllAsRead of MoreActionSheet` | `handler_MoreActionSheetMarkAllAsRead` | – | calls MarkAllAsReadNotifications, Get_UI_UpdateItems_UnreadCount_All |
| 4 | `NotificationsList` | `onClick (HTML element)` | `handler_ToggleRead` | – | calls ToggleRead |
| 5 | `NotificationsList` | `confirm of ConfirmDialog` | `handler_DeleteNotification` | – | calls Delete_Notifications |
| 6 | `Notifications_Action` | `click of Icon`<br>`clicked of IconText` | `iconClick` | – | asks for a confirmation |

<details><summary>2 diagrams (handlers with two or more effects)</summary>

#### 6.1.1 Notifications: handler_NotificationDetail

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Notifications
  participant S as Server (TST calls)
  participant N as Navigation
  U->>B: notificationDetail of NotificationsListBreakpoints → handler_NotificationDetail
  B->>S: MarkAsRead(MessageInstanceId)
  S-->>B: no outputs
  B->>N: go to NotificationDetails
```

#### 6.1.3 Notifications: handler_MoreActionSheetMarkAllAsRead

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Notifications
  participant S as Server (TST calls)
  U->>B: markAllAsRead of MoreActionSheet → handler_MoreActionSheetMarkAllAsRead
  B->>S: MarkAllAsReadNotifications(DeviceHardwareId, IsPrivate, IsPublic, …)
  S-->>B: TotalChange
  Note over B: via UBTConnect.directory_Updates_RefreshBottomBarCount
  B->>S: Get_UI_UpdateItems_UnreadCount_All()
  S-->>B: UnreadCount
```


</details>


### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`pages/Notifications/NotificationsPage.tsx:83`](../../app/src/pages/Notifications/NotificationsPage.tsx#L83) | `<MainPagesUpgradeLayout>` | `onBack` | `navigateBack` | – | goes to previous screen |
| 2 | [`pages/Notifications/NotificationsPage.tsx:108`](../../app/src/pages/Notifications/NotificationsPage.tsx#L108) | `<Input>` | `onEventClearString` | `inline` | – | calls DataActionFetchNotifications |
| 3 | [`pages/Notifications/NotificationsPage.tsx:111`](../../app/src/pages/Notifications/NotificationsPage.tsx#L111) | `<Input>` | `onEventSubmit` | `onFilterSearchText` | – | calls DataActionFetchNotifications |
| 4 | [`pages/Notifications/NotificationsPage.tsx:147`](../../app/src/pages/Notifications/NotificationsPage.tsx#L147) | `<Input>` | `onEventClearString` | `inline` | – | calls DataActionFetchNotifications |
| 5 | [`pages/Notifications/NotificationsPage.tsx:150`](../../app/src/pages/Notifications/NotificationsPage.tsx#L150) | `<Input>` | `onEventSubmit` | `onFilterSearchText` | – | calls DataActionFetchNotifications |
| [6](#626-notifications_action-ononlyshowunread) | [`pages/Notifications/NotificationsPage.tsx:161`](../../app/src/pages/Notifications/NotificationsPage.tsx#L161) | `<Notifications_Action>` | `onOnlyShowUnread` | `onOnlyShowUnread` | – | calls DataActionFetchNotifications, ServiceAPIGet_UI_UpdateItems_UnreadCount_All |
| [7](#627-notificationslistbreakpoints-onnotificationdetail) | [`pages/Notifications/NotificationsPage.tsx:189`](../../app/src/pages/Notifications/NotificationsPage.tsx#L189) | `<NotificationsListBreakpoints>` | `onNotificationDetail` | `onNotificationDetail` | – | calls ActionMarkAsRead; goes to NotificationDetails |
| [8](#628-notifications_sortsheet-onapplyfilters) | [`pages/Notifications/NotificationsPage.tsx:201`](../../app/src/pages/Notifications/NotificationsPage.tsx#L201) | `<Notifications_SortSheet>` | `onApplyFilters` | `onApplyFilters` | – | calls DataActionFetchNotifications, ServiceAPIGet_UI_UpdateItems_UnreadCount_All |
| [9](#629-notifications_moreactionsheet-onapplyfilters) | [`pages/Notifications/NotificationsPage.tsx:206`](../../app/src/pages/Notifications/NotificationsPage.tsx#L206) | `<Notifications_MoreActionSheet>` | `onApplyFilters` | `inline` | – | calls DataActionFetchNotifications, ServiceAPIGet_UI_UpdateItems_UnreadCount_All |
| [10](#6210-notifications_moreactionsheet-onmarkallasread) | [`pages/Notifications/NotificationsPage.tsx:209`](../../app/src/pages/Notifications/NotificationsPage.tsx#L209) | `<Notifications_MoreActionSheet>` | `onMarkAllAsRead` | `onMarkAllAsRead` | – | calls ActionMarkAllAsReadNotifications, ServiceAPIGet_UI_UpdateItems_UnreadCount_All, DataActionFetchNotifications |
| [11](#6211-notifications_moreactionsheet-ondeleteall) | [`pages/Notifications/NotificationsPage.tsx:210`](../../app/src/pages/Notifications/NotificationsPage.tsx#L210) | `<Notifications_MoreActionSheet>` | `onDeleteAll` | `onDeleteAll` | – | calls ServiceAPIDelete_Notifications, DataActionFetchNotifications, ServiceAPIGet_UI_UpdateItems_UnreadCount_All |
| [12](#6212-oslistitemaction-onclick) | [`pages/Notifications/components/NotificationsList.tsx:113`](../../app/src/pages/Notifications/components/NotificationsList.tsx#L113) | `<OSListItemAction>` | `onClick` | `inline` | – | calls ActionToggleRead; calls the prop onUpdateReadCount() |
| [13](#6213-notifications_confirmdialog-onconfirm) | [`pages/Notifications/components/NotificationsList.tsx:183`](../../app/src/pages/Notifications/components/NotificationsList.tsx#L183) | `<Notifications_ConfirmDialog>` | `onConfirm` | `inline` | – | calls ServiceAPIDelete_Notifications; calls the prop onUpdateReadCount() |
| 14 | [`pages/Notifications/components/Notifications_Action.tsx:73`](../../app/src/pages/Notifications/components/Notifications_Action.tsx#L73) | `<IconText>` | `onClicked` | `iconClick` | – | asks for a confirmation |
| 15 | [`pages/Notifications/components/Notifications_Action.tsx:79`](../../app/src/pages/Notifications/components/Notifications_Action.tsx#L79) | `<Icon>` | `onClick` | `iconClick` | – | asks for a confirmation |
| 16 | [`pages/Notifications/components/Notifications_Action.tsx:87`](../../app/src/pages/Notifications/components/Notifications_Action.tsx#L87) | `<Icon>` | `onClick` | `iconClick` | – | asks for a confirmation |

<details><summary>8 diagrams (handlers with two or more effects)</summary>

#### 6.2.6 Notifications_Action: onOnlyShowUnread

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as Notifications_Action · NotificationsPage.tsx
  participant A as Server (React api)
  U->>H: onOnlyShowUnread → onOnlyShowUnread
  Note over H: via refreshNotifications()
  Note over H: via fetchNotifications()
  H->>A: DataActionFetchNotifications(BottomSheetId_IsLoaded, BottomSheetId_ShowSubscription, Breakpoints, …)
  A-->>H: UI_NotificationItemList, UnreadNotificationsCount
  Note over H: via directory_Updates_RefreshBottomBarCount()
  Note over H: via fetchUnreadUpdateItemsCount()
  H->>A: ServiceAPIGet_UI_UpdateItems_UnreadCount_All()
  A-->>H: UnreadCount
```

#### 6.2.7 NotificationsListBreakpoints: onNotificationDetail

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as NotificationsListBreakpoints · NotificationsPage.tsx
  participant A as Server (React api)
  participant N as Navigation
  U->>H: onNotificationDetail → onNotificationDetail
  Note over H: via notificationDetail()
  Note over H: via markNotificationAsRead()
  H->>A: ActionMarkAsRead(MessageInstanceId)
  A-->>H: no outputs
  H->>N: go to NotificationDetails
```

#### 6.2.8 Notifications_SortSheet: onApplyFilters

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as Notifications_SortSheet · NotificationsPage.tsx
  participant A as Server (React api)
  U->>H: onApplyFilters → onApplyFilters
  Note over H: via refreshNotifications()
  Note over H: via fetchNotifications()
  H->>A: DataActionFetchNotifications(BottomSheetId_IsLoaded, BottomSheetId_ShowSubscription, Breakpoints, …)
  A-->>H: UI_NotificationItemList, UnreadNotificationsCount
  Note over H: via directory_Updates_RefreshBottomBarCount()
  Note over H: via fetchUnreadUpdateItemsCount()
  H->>A: ServiceAPIGet_UI_UpdateItems_UnreadCount_All()
  A-->>H: UnreadCount
```

#### 6.2.9 Notifications_MoreActionSheet: onApplyFilters

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as Notifications_MoreActionSheet · NotificationsPage.tsx
  participant A as Server (React api)
  U->>H: onApplyFilters → inline
  Note over H: via onApplyFilters()
  Note over H: via refreshNotifications()
  Note over H: via fetchNotifications()
  H->>A: DataActionFetchNotifications(BottomSheetId_IsLoaded, BottomSheetId_ShowSubscription, Breakpoints, …)
  A-->>H: UI_NotificationItemList, UnreadNotificationsCount
  Note over H: via directory_Updates_RefreshBottomBarCount()
  Note over H: via fetchUnreadUpdateItemsCount()
  H->>A: ServiceAPIGet_UI_UpdateItems_UnreadCount_All()
  A-->>H: UnreadCount
```

#### 6.2.10 Notifications_MoreActionSheet: onMarkAllAsRead

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as Notifications_MoreActionSheet · NotificationsPage.tsx
  participant A as Server (React api)
  U->>H: onMarkAllAsRead → onMarkAllAsRead
  Note over H: via markAllAsRead()
  Note over H: via markAllAsReadNotifications()
  H->>A: ActionMarkAllAsReadNotifications(DeviceHardwareId, IsPrivate, IsPublic, …)
  A-->>H: TotalChange
  Note over H: via directory_Updates_RefreshBottomBarCount()
  Note over H: via fetchUnreadUpdateItemsCount()
  H->>A: ServiceAPIGet_UI_UpdateItems_UnreadCount_All()
  A-->>H: UnreadCount
  Note over H: via refreshNotifications()
  Note over H: via fetchNotifications()
  H->>A: DataActionFetchNotifications(BottomSheetId_IsLoaded, BottomSheetId_ShowSubscription, Breakpoints, …)
  A-->>H: UI_NotificationItemList, UnreadNotificationsCount
  Note over H: via directory_Updates_RefreshBottomBarCount()
  Note over H: via fetchUnreadUpdateItemsCount()
  H->>A: ServiceAPIGet_UI_UpdateItems_UnreadCount_All()
  A-->>H: UnreadCount
```

#### 6.2.11 Notifications_MoreActionSheet: onDeleteAll

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as Notifications_MoreActionSheet · NotificationsPage.tsx
  participant A as Server (React api)
  U->>H: onDeleteAll → onDeleteAll
  Note over H: via deleteAll()
  Note over H: via deleteNotifications()
  H->>A: ServiceAPIDelete_Notifications(Messages)
  A-->>H: no outputs
  Note over H: via refreshNotifications()
  Note over H: via fetchNotifications()
  H->>A: DataActionFetchNotifications(BottomSheetId_IsLoaded, BottomSheetId_ShowSubscription, Breakpoints, …)
  A-->>H: UI_NotificationItemList, UnreadNotificationsCount
  Note over H: via directory_Updates_RefreshBottomBarCount()
  Note over H: via fetchUnreadUpdateItemsCount()
  H->>A: ServiceAPIGet_UI_UpdateItems_UnreadCount_All()
  A-->>H: UnreadCount
```

#### 6.2.12 OSListItemAction: onClick

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as OSListItemAction · NotificationsList.tsx
  participant A as Server (React api)
  U->>H: onClick → inline
  Note over H: via handlerToggleRead()
  Note over H: via toggleNotificationRead()
  H->>A: ActionToggleRead(IsRead, MessageInstanceId)
  A-->>H: no outputs
  Note over H: calls the prop onUpdateReadCount()
```

#### 6.2.13 Notifications_ConfirmDialog: onConfirm

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as Notifications_ConfirmDialog · NotificationsList.tsx
  participant A as Server (React api)
  U->>H: onConfirm → inline
  Note over H: via handlerDeleteNotification()
  Note over H: via deleteNotifications()
  H->>A: ServiceAPIDelete_Notifications(Messages)
  A-->>H: no outputs
  Note over H: calls the prop onUpdateReadCount()
```


</details>


## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in the `analysis/sources/raw/` folder of the route; the files that TST changed after the capture are in `migration/runtime-sources/live/`.

### 7.1 OutSystems (TST)

Screen inputs: none. `setInputs` of `Notifications` reads no input.

| Block | Target | Parameters | Place |
|---|---|---|---|
| `Notifications` | `NotificationDetails` | `HardwareId` = `hardwareId`<br>`MessageInstanceId` = `messageInstanceId`<br>`MessageTemplateId` = `messageTemplateId` | [`UBTConnect.App_Notifications.Notifications.mvc.js:2592`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L2592) |

### 7.2 React

Declared inputs of the route: none (`app/src/app/routes.generated.ts`).

Parameters read (`useSearchParams`, `useParams`): none.

| File | Target | Parameters | Place |
|---|---|---|---|
| `useNotifications.ts` | `NotificationDetails` | `HardwareId` = `hardwareId`<br>`MessageInstanceId` = `messageInstanceId`<br>`MessageTemplateId` = `messageTemplateId` | [`pages/Notifications/hooks/useNotifications.ts:258`](../../app/src/pages/Notifications/hooks/useNotifications.ts#L258) |

## 8. Lifecycle

What runs when the screen and its blocks open and close, without a user action.

### 8.1 OutSystems (TST)

Event handlers. The steps are the node comments and the conditions of the compiled action.

| Block | Event | Action | Steps |
|---|---|---|---|
| `Notifications` | OnInitialize ([`UBTConnect.App_Notifications.Notifications.mvc.js:2864`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L2864)) | `screenEvent_OnInitialize` | 1. Execute Action: ResetNotifications ([`L1504`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1504))<br>2. JavaScript: IsViewRestoredFromCache ([`L1507`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1507))<br>3. Check if IsViewRestoredFromCache IsRestoredFromCache ([`L1514`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1514))<br>4. If isViewRestoredFromCache.isRestoredFromCache ([`L1515`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1515))<br>5. JavaScript: FocusCursor ([`L1517`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1517))<br>6. Execute Action: GetPreloadObject ([`L1522`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1522))<br>7. If ((getPreloadObject.preload) !== (nullObject())) ([`L1525`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1525))<br>8. Execute Action: AssignFromObject ([`L1527`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1527))<br>9. Foreach EntitiesCarousel_SwippedItems ([`L1530`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1530))<br>10. If ((entitiesCarousel_SwippedItems.getItem(entitiesCarousel_SwippedItemsIndex.valueOf()).list… ([`L1536`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1536))<br>11. FetchNotifications.UnreadNotificationsCount = FetchNotifications.UnreadNotificationsCount - 1 ([`L1538`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1538))<br>12. FetchNotifications.UI_NotificationItemList[EntitiesCarousel_SwippedItems.Current.ListPosition].IsRead = True ([`L1541`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1541))<br>13. Execute Action: ListIndexOf ([`L1544`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1544))<br>14. If ((listIndexOf.position) !== (-1)) ([`L1549`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1549))<br>15. Breakpoints[ListIndexOf.Position].BadgeCount = Breakpoints[ListIndexOf.Position].BadgeCount - 1 ([`L1551`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1551))<br>16. << ([`L1555`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1555))<br>17. Else ([`L1567`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1567))<br>18. Else ([`L1571`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1571))<br>19. SelectedFilter_MessageTypePrivate = True ([`L1573`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1573))<br>20. SelectedFilter_MessageTypePublic = True ([`L1576`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1576))<br>21. SelectedFilter_OrderASC = False ([`L1579`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1579))<br>22. Execute Action: InitializeSetting ([`L1582`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1582))<br>23. Set Initial Breakpoint ([`L1584`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1584))<br>24. CurrentBreakpoint.Position = 0 ([`L1586`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1586))<br>25. CurrentBreakpoint.SectionName = Today ([`L1589`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1589))<br>26. CurrentBreakpoint.BadgeCount = 0 ([`L1592`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1592)) |
| `Notifications` | OnReady ([`UBTConnect.App_Notifications.Notifications.mvc.js:2882`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L2882)) | `screenEvent_OnReady` | 1. isLoading ([`L1887`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1887))<br>2. isLoading = True ([`L1889`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1889))<br>3. Execute Action: GetSkeletonList_UI_Notification ([`L1892`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1892))<br>4. Setup Skeleton Data ([`L1895`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1895))<br>5. Screen_NotificationItemList = GetSkeletonList_UI_Notification.UI_NotificationItems ([`L1897`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1897))<br>6. Breakpoints = GetSkeletonList_UI_Notification.Breakpoints ([`L1900`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1900))<br>7. Refresh Query: GetDateRanges ([`L1903`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1903)) |
| `Notifications` | OnDestroy ([`UBTConnect.App_Notifications.Notifications.mvc.js:2901`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L2901)) | `destroyEventListener` | 1. JavaScript: DestroyEventListener ([`L1337`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1337)) |
| `Notifications_Header` | OnReady ([`UBTConnect.App_Notifications.Notifications_Header.mvc.js:426`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications_Header.mvc.js#L426)) | `onReady` | 1. JavaScript: SetStickyHeaderHeight ([`L397`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications_Header.mvc.js#L397)) |
| `NotificationsList` | OnInitialize ([`UBTConnect.App_Notifications.NotificationsList.mvc.js:1025`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationsList.mvc.js#L1025)) | `onInitialize` | 1. Execute Action: ListFilter_GetRange ([`L814`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationsList.mvc.js#L814))<br>2. Execute Action: ListAppendAll ([`L820`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationsList.mvc.js#L820)) |
| `NotificationsList` | OnParametersChanged ([`UBTConnect.App_Notifications.NotificationsList.mvc.js:1046`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationsList.mvc.js#L1046)) | `onParametersChanged` | 1. Execute Action: ListClear ([`L957`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationsList.mvc.js#L957))<br>2. Execute Action: ListFilter_GetRange ([`L960`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationsList.mvc.js#L960))<br>3. Execute Action: ListAppendAll ([`L966`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.NotificationsList.mvc.js#L966)) |

<details><summary>Sequence diagrams of the screen event handlers (3)</summary>

The diagram keeps the order of the steps in the compiled action. The code does not give the order of the handlers of different blocks.

#### 8.1.1 Notifications: OnInitialize

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as Notifications
  R->>B: OnInitialize → screenEvent_OnInitialize
  B->>B: action ResetNotifications
  B->>B: JavaScript IsViewRestoredFromCache
  Note over B: Check if IsViewRestoredFromCache IsRestoredFromCache
  alt isViewRestoredFromCache.isRestoredFromCache
    B->>B: JavaScript FocusCursor
    B->>B: action GetPreloadObject
    alt ((getPreloadObject.preload) !== (nullObject()))
      B->>B: action AssignFromObject
      Note over B: Foreach EntitiesCarousel_SwippedItems
      alt ((entitiesCarousel_SwippedItems.getItem(entitiesCarousel_SwippedItemsIndex.value…
        Note over B: FetchNotifications.UnreadNotificationsCount = FetchNotifications.UnreadNotificat…
        Note over B: FetchNotifications.UI_NotificationItemList[EntitiesCarousel_SwippedItems.Current…
        B->>B: action ListIndexOf
        alt ((listIndexOf.position) !== (-1))
          Note over B: Breakpoints[ListIndexOf.Position].BadgeCount = Breakpoints[ListIndexOf.Position]…
        end
        Note over B: <<
      end
    else other
      Note over B: no step
    end
  else other
    Note over B: SelectedFilter_MessageTypePrivate = True
    Note over B: SelectedFilter_MessageTypePublic = True
    Note over B: SelectedFilter_OrderASC = False
    B->>B: action InitializeSetting
    Note over B: Set Initial Breakpoint
    Note over B: CurrentBreakpoint.Position = 0
    Note over B: CurrentBreakpoint.SectionName = Today
    Note over B: CurrentBreakpoint.BadgeCount = 0
  end
```

#### 8.1.2 Notifications: OnReady

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as Notifications
  participant S as Server (TST calls)
  R->>B: OnReady → screenEvent_OnReady
  Note over B: isLoading
  Note over B: isLoading = True
  B->>B: action GetSkeletonList_UI_Notification
  Note over B: Setup Skeleton Data
  Note over B: Screen_NotificationItemList = GetSkeletonList_UI_Notification.UI_NotificationIte…
  Note over B: Breakpoints = GetSkeletonList_UI_Notification.Breakpoints
  B->>S: GetDateRanges
  S-->>B: GetDateRanges
```

#### 8.1.3 Notifications: OnDestroy

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as Notifications
  R->>B: OnDestroy → destroyEventListener
  B->>B: JavaScript DestroyEventListener
```

</details>

Data actions and aggregates. The tool reads `dataFetchDependenciesOriginal`: `0` is a fetch when the block opens, `-1` is a fetch only on demand (a `Refresh Query` step). `Read by` lists the child block inputs, conditions, text widgets and actions that read the result.

| Block | Data action | Fetch | Read by | Place |
|---|---|---|---|---|
| `Notifications` | `GetDateRanges` | on demand (`-1`) | `action onAfterFetch_GetDateRanges` ([`UBTConnect.App_Notifications.Notifications.mvc.js:2027`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L2027)) | [`UBTConnect.App_Notifications.Notifications.mvc.js:1141`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1141) |
| `Notifications` | `FetchNotifications` | on demand (`-1`) | `shown if (Notifications_Header)` ([`UBTConnect.App_Notifications.Notifications.mvc.js:740`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L740)), `text` ([`UBTConnect.App_Notifications.Notifications.mvc.js:957`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L957)), `action screenEvent_OnInitialize` ([`UBTConnect.App_Notifications.Notifications.mvc.js:1536`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1536)), `action onAfterFetch_FetchNotifications` ([`UBTConnect.App_Notifications.Notifications.mvc.js:2167`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L2167)), `action handler_MoreActionSheetDeleteAll` ([`UBTConnect.App_Notifications.Notifications.mvc.js:2374`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L2374)) | [`UBTConnect.App_Notifications.Notifications.mvc.js:1142`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L1142) |

### 8.2 React

Effects (`useEffect`, `useLayoutEffect`) of the screen files, and the effects of shared components that make a call, a navigation or a message.

| File | Hook (function) | Dependencies | Cleanup | Effects | Place |
|---|---|---|---|---|---|
| `useNotifications.ts` | `useEffect` (`useNotifications`) | `[]` | no | call `/api/UBTConnect/Notifications/DataActionGetDateRanges`<br>call `/api/UBTConnect/Notifications/DataActionFetchNotifications` | [`pages/Notifications/hooks/useNotifications.ts:154`](../../app/src/pages/Notifications/hooks/useNotifications.ts#L154) |

<details><summary>Sequence diagrams of the effects with a call, a navigation, a message or a refresh (1)</summary>

#### 8.2.1 useNotifications: useEffect

```mermaid
sequenceDiagram
  autonumber
  participant R as React
  participant H as useNotifications · useNotifications.ts
  participant A as Server (React api)
  R->>H: useEffect (after the mount)
  H->>A: DataActionGetDateRanges
  A-->>H: DataActionGetDateRanges
  H->>A: DataActionFetchNotifications
  A-->>H: DataActionFetchNotifications
```

</details>

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
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.App_Notifications.Notifications.mvc.js:2923`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L2923) |
| React | access `member`, lock `enforce`, flag redirect C2NewNotifications = false → MessageList | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

| Block | Action | Error | Steps of the handler |
|---|---|---|---|
| `Notifications` | `onAfterFetch_GetDateRanges` | `AllExceptions` ([`UBTConnect.App_Notifications.Notifications.mvc.js:2042`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L2042)) | 1. isLoading = False ([`L2050`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L2050))<br>2. Raise Error: BubbleGenericException ([`L2053`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L2053)) |
| `Notifications` | `onAfterFetch_FetchNotifications` | `AllExceptions` ([`UBTConnect.App_Notifications.Notifications.mvc.js:2225`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L2225)) | 1. isLoading = False ([`L2233`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L2233))<br>2. Raise Error: BubbleGenericException ([`L2236`](../../migration/runtime-sources/live/UBTConnect.App_Notifications.Notifications.mvc.js#L2236)) |

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `App_Notifications` not in `migration/shell/sources/`. Handled errors: none.

### 11.2 React

| File | Kind | Function | Effects | Place |
|---|---|---|---|---|
| `useNotifications.ts` | try/catch | `refreshNotifications` | none | [`pages/Notifications/hooks/useNotifications.ts:131`](../../app/src/pages/Notifications/hooks/useNotifications.ts#L131) |
| `useNotifications.ts` | try/catch | `onReady` | none | [`pages/Notifications/hooks/useNotifications.ts:148`](../../app/src/pages/Notifications/hooks/useNotifications.ts#L148) |

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `Layout_MainPages_Upgrade` | `UBTConnectLibrary` | [`components/layout/MainPagesUpgradeLayout/MainPagesUpgradeLayout.tsx`](../../app/src/components/layout/MainPagesUpgradeLayout/MainPagesUpgradeLayout.tsx) | 1 |
| `Badge` | `UBTConnectLibrary` | [`components/ui/Badge/Badge.tsx`](../../app/src/components/ui/Badge/Badge.tsx) | 0 |
| `Input` | `UBTConnectLibrary` | [`components/ui/Input/Input.tsx`](../../app/src/components/ui/Input/Input.tsx) | 0 |
| `InputWithIcon` | `OutSystemsUI_2_23` | [`components/ui/InputWithIcon/InputWithIcon.tsx`](../../app/src/components/ui/InputWithIcon/InputWithIcon.tsx) | 0 |
| `IconText` | `UBTConnectLibrary` | [`components/ui/IconText/IconText.tsx`](../../app/src/components/ui/IconText/IconText.tsx) | 0 |
| `Notification_ListItem` | `UBTConnectLibrary` | [`pages/Notifications/components/Notification_ListItem.tsx`](../../app/src/pages/Notifications/components/Notification_ListItem.tsx) | 0 |
| `Columns_Three` | `UBTConnectLibrary` | [`components/ui/ColumnsThree/ColumnsThree.tsx`](../../app/src/components/ui/ColumnsThree/ColumnsThree.tsx) | 0 |
| `Columns3` | `OutSystemsUI_2_23` | [`components/ui/Columns3/Columns3.tsx`](../../app/src/components/ui/Columns3/Columns3.tsx) | 0 |
| `AvatarImage` | `UBTConnectLibrary` | [`components/ui/AvatarImage/AvatarImage.tsx`](../../app/src/components/ui/AvatarImage/AvatarImage.tsx) | 0 |
| `SanitizedHtml` | `ReactiveHtmlSanitizer` | [`components/ui/SanitizedHtml/SanitizedHtml.tsx`](../../app/src/components/ui/SanitizedHtml/SanitizedHtml.tsx) | 0 |
| `ScrollAnchor` | `NavigationHandler` | [`platform/navigation/ScrollAnchor/ScrollAnchor.tsx`](../../app/src/platform/navigation/ScrollAnchor/ScrollAnchor.tsx) | 0 |
| `BottomBarMenu` | `UBTConnect` | [`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | 1 |
| `BottomBarContent` | `UBTConnect` | [`components/layout/BottomBarContent/BottomBarContent.tsx`](../../app/src/components/layout/BottomBarContent/BottomBarContent.tsx) | 0 |
| `BottomBarItem` | `OutSystemsUI_2_23` | [`components/ui/BottomBarItem/BottomBarItem.tsx`](../../app/src/components/ui/BottomBarItem/BottomBarItem.tsx) | 0 |
| `App_IconBadge` | `UBTConnect` | [`components/layout/BottomBarIconBadge/BottomBarIconBadge.tsx`](../../app/src/components/layout/BottomBarIconBadge/BottomBarIconBadge.tsx) | 0 |
| `IconBadge` | `UBTConnectLibrary` | [`components/ui/IconBadge/IconBadge.tsx`](../../app/src/components/ui/IconBadge/IconBadge.tsx) | 0 |
| `SortSheet` | `UBTConnect` | [`pages/Notifications/components/SortSheet.tsx`](../../app/src/pages/Notifications/components/SortSheet.tsx) | 0 |
| `BottomSheet` | `UBTConnectLibrary` | [`components/ui/ConnectBottomSheet/ConnectBottomSheet.tsx`](../../app/src/components/ui/ConnectBottomSheet/ConnectBottomSheet.tsx) | 0 |
| `BottomSheet` | `OutSystemsUI_2_23` | [`components/ui/BottomSheet/BottomSheet.tsx`](../../app/src/components/ui/BottomSheet/BottomSheet.tsx) | 0 |
| `FilterSheet_OptionChoice_Item` | `UBTConnect` | [`components/filter/FilterOptionChoice/FilterOptionChoice.tsx`](../../app/src/components/filter/FilterOptionChoice/FilterOptionChoice.tsx) | 0 |
| `SelectionOption_List` | `UBTConnectLibrary` | [`components/ui/SelectionOptionList/SelectionOptionList.tsx`](../../app/src/components/ui/SelectionOptionList/SelectionOptionList.tsx) | 0 |
| `Button` | `UBTConnectLibrary` | [`components/ui/Button/Button.tsx`](../../app/src/components/ui/Button/Button.tsx) | 0 |
| `MoreActionSheet` | `UBTConnect` | [`pages/Notifications/components/MoreActionSheet.tsx`](../../app/src/pages/Notifications/components/MoreActionSheet.tsx) | 0 |

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
