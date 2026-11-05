# OrbitAdminEventDetail: OutSystems (TST) and React

The route `/UBTConnect/OrbitAdminEventDetail`, read from the TST compiled code and from the React code by `route-actions/tools/check_route.py` on 2026-11-05. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/OrbitAdminEventDetail/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Static check.** This route has no TST capture (`migration/screens/OrbitAdminEventDetail/no-capture.json`).

- The OutSystems facts come from the compiled code of the screen and of its static closure (TST survey).
- The code is in `migration/runtime-sources/` and in the raw folders of the captured routes.
- The tool observed no call and has no screenshot.
- Closure: 59 files, 0 without compiled code.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/OrbitAdminEventDetail` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail` | TST compiled code |
| UI flow | `Legacy_OrbitAdminFlow` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx`](../../app/src/pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | no parity run | `route.py parity` |
| Code read | OutSystems: 1 files of the UI flow, 15 shared blocks, 43 app shell files. React: 167 files in the closure of the page | TST survey closure and compiled code (static), `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 4: React makes 4, **0 missing** |
| Differences found | **0** (see [section 3](#3-differences-found)) |
| Questions | 1 (see [section 4](#4-questions)) |
| React calls reached only through shared code | 0: see the last section |
| User actions of the route (own code) | OutSystems: 0. React: 3 |
| Screen and blocks of the UI flow with a React port | 1 of 1 |
| Navigation targets found in React | 6 of 6 |
| Shared blocks and components on the route | OutSystems 15, React 3 with user actions: see the last section |
| App shell on this route | 3 calls: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Differences found

Each line is a fact of both sides: a TST call, navigation or variable, and the React code that has it or not. The tool does not judge the behaviour.

None.

## 4. Questions

1. React calls `/api/Connect2_LegacyShared/ActionGetSignedImagesInBulk` from `fetchLegacySignedImagesInBulk()` [`api/image/repository.ts:21`](../../app/src/api/image/repository.ts#L21) (page). TST OrbitAdminEventDetail has no chain to this call. Does the call belong to this route?

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
| 1 | `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminEventDetail/ActionGetMemberByMemberId` | server action | `ScreenBlock_AdminEventDetail` | onClick in OrbitErrorMessage → event clickedOk of OrbitErrorMessage → … → ScreenBlock_AdminEventDetail.onHandle_ScanCode → server GetMemberByMemberId<br>onClick in Popup_QRCodeScan → event event_Done of Popup_QRCodeScan → … → ScreenBlock_AdminEventDetail.onHandle_ScanCode → server GetMemberByMemberId<br>onClick in ScreenBlock_AdminEventDetail → ScreenBlock_AdminEventDetail.onClick_ScanQrCode → ScreenBlock_AdminEventDetail.onHandle_ScanCode → server GetMemberByMemberId | no capture | `fetchMember()` [`api/member/repository.ts:19`](../../app/src/api/member/repository.ts#L19) (page) | `OrbitAdminEventDetail → useAdminEventDetail → useAdminQRCodeScan → fetchMember`<br>[`pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx`](../../app/src/pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx) | implemented |
| 2 | `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminEventDetail/ActionGetScanEventQRCode` | server action | `ScreenBlock_AdminEventDetail` | onClick in OrbitErrorMessage → event clickedOk of OrbitErrorMessage → … → ScreenBlock_AdminEventDetail.onHandle_ScanCode → server GetScanEventQRCode<br>onClick in Popup_QRCodeScan → event event_Done of Popup_QRCodeScan → … → ScreenBlock_AdminEventDetail.onHandle_ScanCode → server GetScanEventQRCode<br>onClick in ScreenBlock_AdminEventDetail → ScreenBlock_AdminEventDetail.onClick_ScanQrCode → ScreenBlock_AdminEventDetail.onHandle_ScanCode → server GetScanEventQRCode | no capture | `fetchScanEventQRCode()` [`api/event/repository.ts:296`](../../app/src/api/event/repository.ts#L296) (page) | `OrbitAdminEventDetail → useAdminEventDetail → fetchScanEventQRCode`<br>[`pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx`](../../app/src/pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx) | implemented |
| 3 | `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminEventDetail/DataActionGet_EventInformation` | data action | `ScreenBlock_AdminEventDetail` | ScreenBlock_AdminEventDetail.OnReady → ScreenBlock_AdminEventDetail.onReady → ScreenBlock_AdminEventDetail.refreshData → ScreenBlock_AdminEventDetail.DataActionGet_EventInformation<br>ScreenBlock_AdminEventDetail fetch at start → ScreenBlock_AdminEventDetail.DataActionGet_EventInformation | no capture | `fetchAdminEventInformation()` [`api/event/repository.ts:283`](../../app/src/api/event/repository.ts#L283) (page) | `OrbitAdminEventDetail → useAdminEventDetail → fetchAdminEventInformation`<br>[`pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx`](../../app/src/pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx) | implemented |
| 4 | `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All` | service action | `UBTConnect` | BottomBarMenu.OnReady → BottomBarMenu.onReady → UBTConnect.directory_Updates_RefreshBottomBarCount → server Get_UI_UpdateItems_UnreadCount_All | no capture | `fetchUnreadUpdateItemsCount()` [`api/update/repository.ts:73`](../../app/src/api/update/repository.ts#L73) (page) | `BottomBar → directory_Updates_RefreshBottomBarCount → fetchUnreadUpdateItemsCount`<br>[`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | implemented |

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

None.

### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| [1](#621-admineventdetailview-onscanqrcodeclicked-0) | [`pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx:25`](../../app/src/pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx#L25) | `<AdminEventDetailView>` | `onScanQrCodeClicked` | `onScanQrCodeClicked` | `0` | shows a message |
| [2](#622-admineventdetailview-onscanqrcodeclicked-other) | [`pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx:25`](../../app/src/pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx#L25) | `<AdminEventDetailView>` | `onScanQrCodeClicked` | `onScanQrCodeClicked` | `other` | calls ActionGetMemberByMemberId, ActionGetScanEventQRCode; shows a message |
| [3](#623-admineventdetailview-onscaneventdone-0) | [`pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx:26`](../../app/src/pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx#L26) | `<AdminEventDetailView>` | `onScanEventDone` | `onScanEventDone` | `0` | shows a message |
| [4](#624-admineventdetailview-onscaneventdone-other) | [`pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx:26`](../../app/src/pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx#L26) | `<AdminEventDetailView>` | `onScanEventDone` | `onScanEventDone` | `other` | calls ActionGetMemberByMemberId; shows a message |
| [5](#625-admineventdetailview-onerrormessageok-0) | [`pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx:27`](../../app/src/pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx#L27) | `<AdminEventDetailView>` | `onErrorMessageOk` | `onErrorMessageOk` | `0` | shows a message |
| [6](#626-admineventdetailview-onerrormessageok-other) | [`pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx:27`](../../app/src/pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx#L27) | `<AdminEventDetailView>` | `onErrorMessageOk` | `onErrorMessageOk` | `other` | calls ActionGetMemberByMemberId; shows a message |

<details><summary>6 diagrams (handlers with two or more effects)</summary>

#### 6.2.1 AdminEventDetailView: onScanQrCodeClicked (0)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as AdminEventDetailView · OrbitAdminEventDetailPage.tsx
  U->>H: onScanQrCodeClicked → onScanQrCodeClicked (0)
  Note over H: via onClickScanQrCode()
  Note over H: message check.Error.ErrorMessage
  Note over H: via onHandleScanCode()
  Note over H: message scan.Error.ErrorMessage
  Note over H: message UNPROCESSABLE_QR_CODE
```

#### 6.2.2 AdminEventDetailView: onScanQrCodeClicked (other)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as AdminEventDetailView · OrbitAdminEventDetailPage.tsx
  participant A as Server (React api)
  U->>H: onScanQrCodeClicked → onScanQrCodeClicked (other)
  Note over H: via onClickScanQrCode()
  Note over H: message check.Error.ErrorMessage
  Note over H: via onHandleScanCode()
  Note over H: message scan.Error.ErrorMessage
  Note over H: via fetchMember()
  H->>A: ActionGetMemberByMemberId(MemberId)
  A-->>H: Response
  Note over H: via checkIn()
  Note over H: via fetchScanEventQRCode()
  H->>A: ActionGetScanEventQRCode(ScannedQRCodeInfo)
  A-->>H: QRCodeErrorTypeId, Response
```

#### 6.2.3 AdminEventDetailView: onScanEventDone (0)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as AdminEventDetailView · OrbitAdminEventDetailPage.tsx
  U->>H: onScanEventDone → onScanEventDone (0)
  Note over H: via onHandleScanDone()
  Note over H: via onClickScanQrCode()
  Note over H: message check.Error.ErrorMessage
  Note over H: via onHandleScanCode()
  Note over H: message scan.Error.ErrorMessage
  Note over H: message UNPROCESSABLE_QR_CODE
```

#### 6.2.4 AdminEventDetailView: onScanEventDone (other)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as AdminEventDetailView · OrbitAdminEventDetailPage.tsx
  participant A as Server (React api)
  U->>H: onScanEventDone → onScanEventDone (other)
  Note over H: via onHandleScanDone()
  Note over H: via onClickScanQrCode()
  Note over H: message check.Error.ErrorMessage
  Note over H: via onHandleScanCode()
  Note over H: message scan.Error.ErrorMessage
  Note over H: via fetchMember()
  H->>A: ActionGetMemberByMemberId(MemberId)
  A-->>H: Response
```

#### 6.2.5 AdminEventDetailView: onErrorMessageOk (0)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as AdminEventDetailView · OrbitAdminEventDetailPage.tsx
  U->>H: onErrorMessageOk → onErrorMessageOk (0)
  Note over H: via onHandleOrbitErrorMessage()
  Note over H: via onClickScanQrCode()
  Note over H: message check.Error.ErrorMessage
  Note over H: via onHandleScanCode()
  Note over H: message scan.Error.ErrorMessage
  Note over H: message UNPROCESSABLE_QR_CODE
```

#### 6.2.6 AdminEventDetailView: onErrorMessageOk (other)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as AdminEventDetailView · OrbitAdminEventDetailPage.tsx
  participant A as Server (React api)
  U->>H: onErrorMessageOk → onErrorMessageOk (other)
  Note over H: via onHandleOrbitErrorMessage()
  Note over H: via onClickScanQrCode()
  Note over H: message check.Error.ErrorMessage
  Note over H: via onHandleScanCode()
  Note over H: message scan.Error.ErrorMessage
  Note over H: via fetchMember()
  H->>A: ActionGetMemberByMemberId(MemberId)
  A-->>H: Response
```


</details>


## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in `migration/runtime-sources/` and in the `analysis/sources/raw/` folders of the captured routes (static check).

### 7.1 OutSystems (TST)

| Input | Type | Mandatory | Place |
|---|---|---|---|
| `In_EventId` | LongInteger | yes | [`UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail.mvc.js:89`](../../migration/runtime-sources/UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail.mvc.js#L89) |
| `In_EventName` | Text | yes | [`UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail.mvc.js:93`](../../migration/runtime-sources/UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail.mvc.js#L93) |
| `In_EventStartDate` | DateTime | yes | [`UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail.mvc.js:97`](../../migration/runtime-sources/UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail.mvc.js#L97) |
| `In_EventEndDate` | DateTime | yes | [`UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail.mvc.js:101`](../../migration/runtime-sources/UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail.mvc.js#L101) |
| `In_EventLocation` | Text | yes | [`UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail.mvc.js:105`](../../migration/runtime-sources/UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail.mvc.js#L105) |
| `In_EventTypeFriendly` | Text | yes | [`UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail.mvc.js:109`](../../migration/runtime-sources/UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail.mvc.js#L109) |

Navigations with parameters: none.

### 7.2 React

Declared inputs of the route: `In_EventId: LongInteger`, `In_EventName: Text`, `In_EventStartDate: DateTime`, `In_EventEndDate: DateTime`, `In_EventLocation: Text`, `In_EventTypeFriendly: Text` (`app/src/app/routes.generated.ts`).

| Hook | Keys read | Place |
|---|---|---|
| `useSearchParams` | none | [`pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx:15`](../../app/src/pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx#L15) |

Navigations with parameters: none.

## 8. Lifecycle

What runs when the screen and its blocks open and close, without a user action.

### 8.1 OutSystems (TST)

Event handlers. The steps are the node comments and the conditions of the compiled action.

None.

Data actions and aggregates. The tool reads `dataFetchDependenciesOriginal`: `0` is a fetch when the block opens, `-1` is a fetch only on demand (a `Refresh Query` step). `Read by` lists the child block inputs, conditions, text widgets and actions that read the result.

None.

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
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail.mvc.js:296`](../../migration/runtime-sources/UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail.mvc.js#L296) |
| React | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

The actions of the screen and its blocks have no `Handle Error` node.

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `Legacy_OrbitAdminFlow` not in `migration/shell/sources/`. Handled errors: none.

### 11.2 React

None.

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `BottomBarMenu` | `UBTConnect` | [`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | 1 |
| `App_IconBadge` | `UBTConnect` | [`components/layout/BottomBarIconBadge/BottomBarIconBadge.tsx`](../../app/src/components/layout/BottomBarIconBadge/BottomBarIconBadge.tsx) | 0 |
| `IconBadge` | `UBTConnectLibrary` | [`components/ui/IconBadge/IconBadge.tsx`](../../app/src/components/ui/IconBadge/IconBadge.tsx) | 0 |
| `Badge` | `UBTConnectLibrary` | [`components/ui/Badge/Badge.tsx`](../../app/src/components/ui/Badge/Badge.tsx) | 0 |
| `BottomBarItem` | `OutSystemsUI_2_23` | [`components/ui/BottomBarItem/BottomBarItem.tsx`](../../app/src/components/ui/BottomBarItem/BottomBarItem.tsx) | 0 |
| `BottomBarContent` | `UBTConnect` | [`components/layout/BottomBarContent/BottomBarContent.tsx`](../../app/src/components/layout/BottomBarContent/BottomBarContent.tsx) | 0 |
| `ScreenBlock_AdminEventDetail` | `Connect2_OrbitMobile_MUI` | [`components/orbit/AdminDetailScaffold/AdminDetailScaffold.tsx`](../../app/src/components/orbit/AdminDetailScaffold/AdminDetailScaffold.tsx), [`pages/OrbitAdminEventDetail/components/AdminEventDetailView.tsx`](../../app/src/pages/OrbitAdminEventDetail/components/AdminEventDetailView.tsx), [`pages/OrbitAdminEventDetail/hooks/adminEventDetailActions.ts`](../../app/src/pages/OrbitAdminEventDetail/hooks/adminEventDetailActions.ts), [`pages/OrbitAdminEventDetail/hooks/adminEventDetailState.ts`](../../app/src/pages/OrbitAdminEventDetail/hooks/adminEventDetailState.ts), [`pages/OrbitAdminEventDetail/hooks/useAdminEventDetail.ts`](../../app/src/pages/OrbitAdminEventDetail/hooks/useAdminEventDetail.ts) | 3 |
| `OrbitErrorMessage` | `Connect2_OrbitMobile_MUI` | [`components/orbit/OrbitErrorMessage/OrbitErrorMessage.tsx`](../../app/src/components/orbit/OrbitErrorMessage/OrbitErrorMessage.tsx) | 0 |
| `Skeleton_Loading` | `Connect2_OrbitMobile_MUI` | [`components/orbit/OrbitSkeleton/OrbitSkeleton.tsx`](../../app/src/components/orbit/OrbitSkeleton/OrbitSkeleton.tsx) | 0 |
| `NoInformation_Orbit` | `Connect2_OrbitMobile_MUI` | [`components/orbit/OrbitNoInformation/OrbitNoInformation.tsx`](../../app/src/components/orbit/OrbitNoInformation/OrbitNoInformation.tsx) | 0 |
| `Popup_QRCodeScan` | `Connect2_OrbitMobile_MUI` | [`components/orbit/QRCodeScanResult/QRCodeScanResult.tsx`](../../app/src/components/orbit/QRCodeScanResult/QRCodeScanResult.tsx), [`pages/OrbitAdminEventDetail/components/Popup_QRCodeScan.tsx`](../../app/src/pages/OrbitAdminEventDetail/components/Popup_QRCodeScan.tsx) | 0 |
| `MenuIcon__UpdatedOSUI` | `Connect2_LegacyShared` | [`components/layout/MenuIcon/MenuIcon.tsx`](../../app/src/components/layout/MenuIcon/MenuIcon.tsx) | 1 |
| `Layout_Orbit` | `Connect2_LegacyShared` | [`components/layout/OrbitLayout/OrbitLayout.tsx`](../../app/src/components/layout/OrbitLayout/OrbitLayout.tsx) | 0 |
| `BaseLayout_UpdatedOSUI` | `Connect2_LegacyShared` | [`components/layout/BaseLayout/BaseLayout.tsx`](../../app/src/components/layout/BaseLayout/BaseLayout.tsx) | 0 |
| `PullToRefresh` | `OutSystemsUI_2_23` | [`components/ui/PullToRefresh/PullToRefresh.tsx`](../../app/src/components/ui/PullToRefresh/PullToRefresh.tsx) | 0 |

<details><summary>User actions of the shared blocks (9)</summary>

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `MenuIcon__UpdatedOSUI` | `onClick (HTML element)` | `onBack` | – | goes to previous screen |
| 2 | `ScreenBlock_AdminEventDetail` | `onClick (HTML element)` | `onClick_ScanQrCode` | – | calls GetAllApplicationEvents, AppManager_SynchAppContext, GetMemberByMemberId, GetScanEventQRCode; shows a message |
| 3 | `ScreenBlock_AdminEventDetail` | `event_Done of QRCodeScan` | `onHandle_ScanEventDone` | – | calls GetAllApplicationEvents, AppManager_SynchAppContext, GetMemberByMemberId, GetScanEventQRCode; shows a message |
| 4 | `ScreenBlock_AdminEventDetail` | `clickedOk of OrbitErrorMessage` | `onHandle_OrbitErrorMessage` | – | calls GetAllApplicationEvents, AppManager_SynchAppContext, GetMemberByMemberId, GetScanEventQRCode; shows a message |
| 5 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `home` | goes to HomeFeed |
| 6 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `directory` | goes to CountryList, Locality_Details |
| 7 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `updates` | goes to Updates_SingleList |
| 8 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `bookmarks` | goes to Bookmarks |
| 9 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `menu` | goes to Menu |

</details>


### React

| File | User actions |
|---|---|
| [`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | 2 |
| [`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx) | 2 |
| [`components/layout/MenuIcon/MenuIcon.tsx`](../../app/src/components/layout/MenuIcon/MenuIcon.tsx) | 1 |

<details><summary>User actions of the shared components (15)</summary>

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
| 15 | [`components/layout/MenuIcon/MenuIcon.tsx:34`](../../app/src/components/layout/MenuIcon/MenuIcon.tsx#L34) | `<div>` | `onClick` | `inline` | – | goes to previous screen |

</details>


### React calls reached only through shared code

Calls that React can make on this route, without a TST chain on this route. Every reference chain starts in a shared container, component or app code (`containers/`, `components/`, `platform/`, `legacy/`, `lib/`), not in the screen files. TST makes these calls on a user action of the shared block, which the capture did not record, or on another screen.

None.
