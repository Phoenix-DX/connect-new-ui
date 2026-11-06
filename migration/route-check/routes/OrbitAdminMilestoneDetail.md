# OrbitAdminMilestoneDetail: OutSystems (TST) and React

The route `/UBTConnect/OrbitAdminMilestoneDetail`, read from the TST compiled code and from the React code by `tools/route-check/check_route.py` on 2026-11-06. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/OrbitAdminMilestoneDetail/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Static check.** This route has no TST capture (`migration/screens/OrbitAdminMilestoneDetail/no-capture.json`).

- The OutSystems facts come from the compiled code of the screen and of its static closure (TST survey).
- The code is in `migration/sources/runtime/` and in `migration/sources/raw/` (the captured routes).
- The tool observed no call and has no screenshot.
- Closure: 59 files, 0 without compiled code.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/OrbitAdminMilestoneDetail` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestoneDetail` | TST compiled code |
| UI flow | `Legacy_OrbitAdminFlow` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/OrbitAdminMilestoneDetail/OrbitAdminMilestoneDetailPage.tsx`](../../../app/src/pages/OrbitAdminMilestoneDetail/OrbitAdminMilestoneDetailPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | no parity run | `route.py parity` |
| Code read | OutSystems: 1 files of the UI flow, 15 shared blocks, 43 app shell files. React: 168 files in the closure of the page | TST survey closure and compiled code (static), `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 4: React makes 4, **0 missing** |
| Differences found | **0** (see [section 3](#3-differences-found)) |
| Questions | 0 (+ 1 declared on TST outside the call graph) (see [section 4](#4-questions)) |
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

None.

### Calls that TST declares outside the static call graph

React calls of the screen without a TST chain in the code of the route. TST makes them: the contract (`x-os-screens`, from the compiled closure) or `migration/contract/extra-actions.json` records each. The reasons: a block that the capture did not render, a module client action, a JavaScript callback. Not questions (user 2026-11-05).

| Call | React action | How TST declares it | Evidence |
|---|---|---|---|
| `/api/Connect2_LegacyShared/ActionGetSignedImagesInBulk` | `fetchLegacySignedImagesInBulk()` [`api/image/repository.ts:21`](../../../app/src/api/image/repository.ts#L21) | extra-actions | Connect2_LegacyShared.controller.js (migration/sources/runtime/): ServerAction.GetSignedImagesInBulk, called by GetBulkSignedImageURL (:2816-2871), called through the CallbacksJS JavaScript node of GetCacheableSignedImageURL (:3692+, getClientActionProxies: a callback the call graph cannot follow);  |

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
| 1 | `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminMilestoneDetail/ActionGetMemberByMemberId` | server action | `ScreenBlock_AdminMilestoneDetail` | onClick in OrbitErrorMessage → event clickedOk of OrbitErrorMessage → … → ScreenBlock_AdminMilestoneDetail.onHandle_ScanCode → server GetMemberByMemberId<br>onClick in Popup_QRCodeScan_Milestone → event event_Done of Popup_QRCodeScan_Milestone → … → ScreenBlock_AdminMilestoneDetail.onHandle_ScanCode → server GetMemberByMemberId<br>onClick in ScreenBlock_AdminMilestoneDetail → ScreenBlock_AdminMilestoneDetail.onClick_ScanQrCode → ScreenBlock_AdminMilestoneDetail.onHandle_ScanCode → server GetMemberByMemberId | no capture | `fetchMember()` [`api/member/repository.ts:19`](../../../app/src/api/member/repository.ts#L19) (page) | `OrbitAdminMilestoneDetail → useAdminMilestoneDetail → useAdminQRCodeScan → fetchMember`<br>[`pages/OrbitAdminMilestoneDetail/OrbitAdminMilestoneDetailPage.tsx`](../../../app/src/pages/OrbitAdminMilestoneDetail/OrbitAdminMilestoneDetailPage.tsx) | implemented |
| 2 | `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminMilestoneDetail/ActionGetScanMilestoneQRCode` | server action | `ScreenBlock_AdminMilestoneDetail` | onClick in OrbitErrorMessage → event clickedOk of OrbitErrorMessage → … → ScreenBlock_AdminMilestoneDetail.onHandle_ScanCode → server GetScanMilestoneQRCode<br>onClick in Popup_QRCodeScan_Milestone → event event_Done of Popup_QRCodeScan_Milestone → … → ScreenBlock_AdminMilestoneDetail.onHandle_ScanCode → server GetScanMilestoneQRCode<br>onClick in ScreenBlock_AdminMilestoneDetail → ScreenBlock_AdminMilestoneDetail.onClick_ScanQrCode → ScreenBlock_AdminMilestoneDetail.onHandle_ScanCode → server GetScanMilestoneQRCode | no capture | `fetchScanMilestoneQRCode()` [`api/event/adminMilestoneDetail.ts:160`](../../../app/src/api/event/adminMilestoneDetail.ts#L160) (page) | `OrbitAdminMilestoneDetail → useAdminMilestoneDetail → fetchScanMilestoneQRCode`<br>[`pages/OrbitAdminMilestoneDetail/OrbitAdminMilestoneDetailPage.tsx`](../../../app/src/pages/OrbitAdminMilestoneDetail/OrbitAdminMilestoneDetailPage.tsx) | implemented |
| 3 | `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminMilestoneDetail/DataActionGet_MilestoneInformation` | data action | `ScreenBlock_AdminMilestoneDetail` | ScreenBlock_AdminMilestoneDetail.OnReady → ScreenBlock_AdminMilestoneDetail.onReady → ScreenBlock_AdminMilestoneDetail.refreshData → ScreenBlock_AdminMilestoneDetail.DataActionGet_MilestoneInformation<br>ScreenBlock_AdminMilestoneDetail fetch at start → ScreenBlock_AdminMilestoneDetail.DataActionGet_MilestoneInformation | no capture | `fetchAdminMilestoneInformation()` [`api/event/adminMilestoneDetail.ts:147`](../../../app/src/api/event/adminMilestoneDetail.ts#L147) (page) | `OrbitAdminMilestoneDetail → useAdminMilestoneDetail → fetchAdminMilestoneInformation`<br>[`pages/OrbitAdminMilestoneDetail/OrbitAdminMilestoneDetailPage.tsx`](../../../app/src/pages/OrbitAdminMilestoneDetail/OrbitAdminMilestoneDetailPage.tsx) | implemented |
| 4 | `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All` | service action | `UBTConnect` | BottomBarMenu.OnReady → BottomBarMenu.onReady → UBTConnect.directory_Updates_RefreshBottomBarCount → server Get_UI_UpdateItems_UnreadCount_All | no capture | `fetchUnreadUpdateItemsCount()` [`api/update/repository.ts:73`](../../../app/src/api/update/repository.ts#L73) (page) | `BottomBar → directory_Updates_RefreshBottomBarCount → fetchUnreadUpdateItemsCount`<br>[`components/layout/BottomBar/BottomBar.tsx`](../../../app/src/components/layout/BottomBar/BottomBar.tsx) | implemented |

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

None.

### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| [1](#621-adminmilestonedetailview-onscanqrcodeclicked-0) | [`pages/OrbitAdminMilestoneDetail/OrbitAdminMilestoneDetailPage.tsx:26`](../../../app/src/pages/OrbitAdminMilestoneDetail/OrbitAdminMilestoneDetailPage.tsx#L26) | `<AdminMilestoneDetailView>` | `onScanQrCodeClicked` | `onScanQrCodeClicked` | `0` | shows a message; calls the prop onLaunch() |
| [2](#622-adminmilestonedetailview-onscanqrcodeclicked-other) | [`pages/OrbitAdminMilestoneDetail/OrbitAdminMilestoneDetailPage.tsx:26`](../../../app/src/pages/OrbitAdminMilestoneDetail/OrbitAdminMilestoneDetailPage.tsx#L26) | `<AdminMilestoneDetailView>` | `onScanQrCodeClicked` | `onScanQrCodeClicked` | `other` | calls ActionGetMemberByMemberId, ActionGetScanMilestoneQRCode; shows a message; calls the prop onLaunch(); calls the prop onSuccess() |
| [3](#623-adminmilestonedetailview-onscanmilestonedone-0) | [`pages/OrbitAdminMilestoneDetail/OrbitAdminMilestoneDetailPage.tsx:27`](../../../app/src/pages/OrbitAdminMilestoneDetail/OrbitAdminMilestoneDetailPage.tsx#L27) | `<AdminMilestoneDetailView>` | `onScanMilestoneDone` | `onScanMilestoneDone` | `0` | shows a message; calls the prop onLaunch() |
| [4](#624-adminmilestonedetailview-onscanmilestonedone-other) | [`pages/OrbitAdminMilestoneDetail/OrbitAdminMilestoneDetailPage.tsx:27`](../../../app/src/pages/OrbitAdminMilestoneDetail/OrbitAdminMilestoneDetailPage.tsx#L27) | `<AdminMilestoneDetailView>` | `onScanMilestoneDone` | `onScanMilestoneDone` | `other` | calls ActionGetMemberByMemberId; shows a message; calls the prop onLaunch(); calls the prop onSuccess() |
| [5](#625-adminmilestonedetailview-onerrormessageok-0) | [`pages/OrbitAdminMilestoneDetail/OrbitAdminMilestoneDetailPage.tsx:28`](../../../app/src/pages/OrbitAdminMilestoneDetail/OrbitAdminMilestoneDetailPage.tsx#L28) | `<AdminMilestoneDetailView>` | `onErrorMessageOk` | `onErrorMessageOk` | `0` | shows a message; calls the prop onLaunch() |
| [6](#626-adminmilestonedetailview-onerrormessageok-other) | [`pages/OrbitAdminMilestoneDetail/OrbitAdminMilestoneDetailPage.tsx:28`](../../../app/src/pages/OrbitAdminMilestoneDetail/OrbitAdminMilestoneDetailPage.tsx#L28) | `<AdminMilestoneDetailView>` | `onErrorMessageOk` | `onErrorMessageOk` | `other` | calls ActionGetMemberByMemberId; shows a message; calls the prop onLaunch(); calls the prop onSuccess() |

<details><summary>6 diagrams (handlers with two or more effects)</summary>

#### 6.2.1 AdminMilestoneDetailView: onScanQrCodeClicked (0)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as AdminMilestoneDetailView · OrbitAdminMilestoneDetailPage.tsx
  U->>H: onScanQrCodeClicked → onScanQrCodeClicked (0)
  Note over H: via onClickScanQrCode()
  Note over H: message check.Error.ErrorMessage
  Note over H: calls the prop onLaunch()
  Note over H: via onHandleScanCode()
  Note over H: message scan.Error.ErrorMessage
  Note over H: message UNPROCESSABLE_QR_CODE
```

#### 6.2.2 AdminMilestoneDetailView: onScanQrCodeClicked (other)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as AdminMilestoneDetailView · OrbitAdminMilestoneDetailPage.tsx
  participant A as Server (React api)
  U->>H: onScanQrCodeClicked → onScanQrCodeClicked (other)
  Note over H: via onClickScanQrCode()
  Note over H: message check.Error.ErrorMessage
  Note over H: calls the prop onLaunch()
  Note over H: via onHandleScanCode()
  Note over H: message scan.Error.ErrorMessage
  Note over H: via fetchMember()
  H->>A: ActionGetMemberByMemberId(MemberId)
  A-->>H: Response
  Note over H: via checkIn()
  Note over H: via fetchScanMilestoneQRCode()
  H->>A: ActionGetScanMilestoneQRCode(ScanClientId, ScannedQRCodeInfo)
  A-->>H: QRCodeErrorTypeId, Response
  Note over H: calls the prop onSuccess()
```

#### 6.2.3 AdminMilestoneDetailView: onScanMilestoneDone (0)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as AdminMilestoneDetailView · OrbitAdminMilestoneDetailPage.tsx
  U->>H: onScanMilestoneDone → onScanMilestoneDone (0)
  Note over H: via onHandleScanDone()
  Note over H: via onClickScanQrCode()
  Note over H: message check.Error.ErrorMessage
  Note over H: calls the prop onLaunch()
  Note over H: via onHandleScanCode()
  Note over H: message scan.Error.ErrorMessage
  Note over H: message UNPROCESSABLE_QR_CODE
```

#### 6.2.4 AdminMilestoneDetailView: onScanMilestoneDone (other)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as AdminMilestoneDetailView · OrbitAdminMilestoneDetailPage.tsx
  participant A as Server (React api)
  U->>H: onScanMilestoneDone → onScanMilestoneDone (other)
  Note over H: via onHandleScanDone()
  Note over H: via onClickScanQrCode()
  Note over H: message check.Error.ErrorMessage
  Note over H: calls the prop onLaunch()
  Note over H: via onHandleScanCode()
  Note over H: message scan.Error.ErrorMessage
  Note over H: via fetchMember()
  H->>A: ActionGetMemberByMemberId(MemberId)
  A-->>H: Response
  Note over H: calls the prop onSuccess()
```

#### 6.2.5 AdminMilestoneDetailView: onErrorMessageOk (0)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as AdminMilestoneDetailView · OrbitAdminMilestoneDetailPage.tsx
  U->>H: onErrorMessageOk → onErrorMessageOk (0)
  Note over H: via onHandleOrbitErrorMessage()
  Note over H: via onClickScanQrCode()
  Note over H: message check.Error.ErrorMessage
  Note over H: calls the prop onLaunch()
  Note over H: via onHandleScanCode()
  Note over H: message scan.Error.ErrorMessage
  Note over H: message UNPROCESSABLE_QR_CODE
```

#### 6.2.6 AdminMilestoneDetailView: onErrorMessageOk (other)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as AdminMilestoneDetailView · OrbitAdminMilestoneDetailPage.tsx
  participant A as Server (React api)
  U->>H: onErrorMessageOk → onErrorMessageOk (other)
  Note over H: via onHandleOrbitErrorMessage()
  Note over H: via onClickScanQrCode()
  Note over H: message check.Error.ErrorMessage
  Note over H: calls the prop onLaunch()
  Note over H: via onHandleScanCode()
  Note over H: message scan.Error.ErrorMessage
  Note over H: via fetchMember()
  H->>A: ActionGetMemberByMemberId(MemberId)
  A-->>H: Response
  Note over H: calls the prop onSuccess()
```


</details>


## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in `migration/sources/runtime/` and in `migration/sources/raw/` (the shared store of the captured routes; static check).

### 7.1 OutSystems (TST)

| Input | Type | Mandatory | Place |
|---|---|---|---|
| `In_EventId` | LongInteger | yes | [`UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestoneDetail.mvc.js:95`](../../sources/runtime/UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestoneDetail.mvc.js#L95) |
| `In_MilestoneId` | Text | yes | [`UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestoneDetail.mvc.js:99`](../../sources/runtime/UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestoneDetail.mvc.js#L99) |
| `In_MilestoneName` | Text | yes | [`UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestoneDetail.mvc.js:103`](../../sources/runtime/UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestoneDetail.mvc.js#L103) |
| `In_MilestoneDate` | DateTime | yes | [`UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestoneDetail.mvc.js:107`](../../sources/runtime/UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestoneDetail.mvc.js#L107) |
| `In_MilestoneDescription` | Text | yes | [`UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestoneDetail.mvc.js:111`](../../sources/runtime/UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestoneDetail.mvc.js#L111) |
| `In_MilestoneStartDate` | DateTime | yes | [`UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestoneDetail.mvc.js:115`](../../sources/runtime/UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestoneDetail.mvc.js#L115) |
| `In_MilestoneEndDate` | DateTime | yes | [`UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestoneDetail.mvc.js:119`](../../sources/runtime/UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestoneDetail.mvc.js#L119) |

Navigations with parameters: none.

### 7.2 React

Declared inputs of the route: `In_EventId: LongInteger`, `In_MilestoneId: Text`, `In_MilestoneName: Text`, `In_MilestoneDate: DateTime`, `In_MilestoneDescription: Text`, `In_MilestoneStartDate: DateTime`, `In_MilestoneEndDate: DateTime` (`app/src/app/routes.generated.ts`).

| Hook | Keys read | Place |
|---|---|---|
| `useSearchParams` | none | [`pages/OrbitAdminMilestoneDetail/OrbitAdminMilestoneDetailPage.tsx:16`](../../../app/src/pages/OrbitAdminMilestoneDetail/OrbitAdminMilestoneDetailPage.tsx#L16) |

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
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestoneDetail.mvc.js:307`](../../sources/runtime/UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestoneDetail.mvc.js#L307) |
| React | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

The actions of the screen and its blocks have no `Handle Error` node.

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `Legacy_OrbitAdminFlow` not in `migration/sources/shell/`. Handled errors: none.

### 11.2 React

None.

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `BottomBarMenu` | `UBTConnect` | [`components/layout/BottomBar/BottomBar.tsx`](../../../app/src/components/layout/BottomBar/BottomBar.tsx) | 1 |
| `App_IconBadge` | `UBTConnect` | [`components/layout/BottomBarIconBadge/BottomBarIconBadge.tsx`](../../../app/src/components/layout/BottomBarIconBadge/BottomBarIconBadge.tsx) | 0 |
| `IconBadge` | `UBTConnectLibrary` | [`components/ui/IconBadge/IconBadge.tsx`](../../../app/src/components/ui/IconBadge/IconBadge.tsx) | 0 |
| `Badge` | `UBTConnectLibrary` | [`components/ui/Badge/Badge.tsx`](../../../app/src/components/ui/Badge/Badge.tsx) | 0 |
| `BottomBarItem` | `OutSystemsUI_2_23` | [`components/ui/BottomBarItem/BottomBarItem.tsx`](../../../app/src/components/ui/BottomBarItem/BottomBarItem.tsx) | 0 |
| `BottomBarContent` | `UBTConnect` | [`components/layout/BottomBarContent/BottomBarContent.tsx`](../../../app/src/components/layout/BottomBarContent/BottomBarContent.tsx) | 0 |
| `ScreenBlock_AdminMilestoneDetail` | `Connect2_OrbitMobile_MUI` | [`pages/OrbitAdminMilestoneDetail/components/AdminMilestoneDetailView.tsx`](../../../app/src/pages/OrbitAdminMilestoneDetail/components/AdminMilestoneDetailView.tsx), [`pages/OrbitAdminMilestoneDetail/hooks/adminMilestoneDetailActions.ts`](../../../app/src/pages/OrbitAdminMilestoneDetail/hooks/adminMilestoneDetailActions.ts), [`pages/OrbitAdminMilestoneDetail/hooks/adminMilestoneDetailState.ts`](../../../app/src/pages/OrbitAdminMilestoneDetail/hooks/adminMilestoneDetailState.ts), [`pages/OrbitAdminMilestoneDetail/hooks/useAdminMilestoneDetail.ts`](../../../app/src/pages/OrbitAdminMilestoneDetail/hooks/useAdminMilestoneDetail.ts) | 3 |
| `OrbitErrorMessage` | `Connect2_OrbitMobile_MUI` | [`components/orbit/OrbitErrorMessage/OrbitErrorMessage.tsx`](../../../app/src/components/orbit/OrbitErrorMessage/OrbitErrorMessage.tsx) | 0 |
| `Skeleton_Loading` | `Connect2_OrbitMobile_MUI` | [`components/orbit/OrbitSkeleton/OrbitSkeleton.tsx`](../../../app/src/components/orbit/OrbitSkeleton/OrbitSkeleton.tsx) | 0 |
| `NoInformation_Orbit` | `Connect2_OrbitMobile_MUI` | [`components/orbit/OrbitNoInformation/OrbitNoInformation.tsx`](../../../app/src/components/orbit/OrbitNoInformation/OrbitNoInformation.tsx) | 0 |
| `Popup_QRCodeScan_Milestone` | `Connect2_OrbitMobile_MUI` | [`pages/OrbitAdminMilestoneDetail/components/Popup_QRCodeScan_Milestone.tsx`](../../../app/src/pages/OrbitAdminMilestoneDetail/components/Popup_QRCodeScan_Milestone.tsx) | 0 |
| `MenuIcon__UpdatedOSUI` | `Connect2_LegacyShared` | [`components/layout/MenuIcon/MenuIcon.tsx`](../../../app/src/components/layout/MenuIcon/MenuIcon.tsx) | 1 |
| `Layout_Orbit` | `Connect2_LegacyShared` | [`components/layout/OrbitLayout/OrbitLayout.tsx`](../../../app/src/components/layout/OrbitLayout/OrbitLayout.tsx) | 0 |
| `BaseLayout_UpdatedOSUI` | `Connect2_LegacyShared` | [`components/layout/BaseLayout/BaseLayout.tsx`](../../../app/src/components/layout/BaseLayout/BaseLayout.tsx) | 0 |
| `PullToRefresh` | `OutSystemsUI_2_23` | [`components/ui/PullToRefresh/PullToRefresh.tsx`](../../../app/src/components/ui/PullToRefresh/PullToRefresh.tsx) | 0 |

<details><summary>User actions of the shared blocks (9)</summary>

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `MenuIcon__UpdatedOSUI` | `onClick (HTML element)` | `onBack` | – | goes to previous screen |
| 2 | `ScreenBlock_AdminMilestoneDetail` | `onClick (HTML element)` | `onClick_ScanQrCode` | – | calls GetMemberByMemberId, GetScanMilestoneQRCode; shows a message |
| 3 | `ScreenBlock_AdminMilestoneDetail` | `event_Done of Milestone` | `onHandle_ScanMilestoneDone` | – | calls GetMemberByMemberId, GetScanMilestoneQRCode; shows a message |
| 4 | `ScreenBlock_AdminMilestoneDetail` | `clickedOk of OrbitErrorMessage` | `onHandle_OrbitErrorMessage` | – | calls GetMemberByMemberId, GetScanMilestoneQRCode; shows a message |
| 5 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `home` | goes to HomeFeed |
| 6 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `directory` | goes to CountryList, Locality_Details |
| 7 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `updates` | goes to Updates_SingleList |
| 8 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `bookmarks` | goes to Bookmarks |
| 9 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `menu` | goes to Menu |

</details>


### React

| File | User actions |
|---|---|
| [`components/layout/BottomBar/BottomBar.tsx`](../../../app/src/components/layout/BottomBar/BottomBar.tsx) | 2 |
| [`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx) | 2 |
| [`components/layout/MenuIcon/MenuIcon.tsx`](../../../app/src/components/layout/MenuIcon/MenuIcon.tsx) | 1 |

<details><summary>User actions of the shared components (15)</summary>

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:80`](../../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L80) | `<PreventBackNavigation>` | `onBackNavigationPrevented` | `redirectHome` | – | goes to HomeFeed |
| 2 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:82`](../../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L82) | `<BackNavigationHandler>` | `onBackNavigation` | `maybeRedirectHome` | – | goes to HomeFeed |
| 3 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Home` | goes to HomeFeed |
| 4 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Directory` | goes to CountryList, Locality_Details |
| 5 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Updates` | goes to Updates_SingleList |
| 6 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Bookmarks` | goes to Bookmarks |
| 7 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Menu` | goes to Menu |
| 8 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `other` | calls the prop onBottomBarClicked() |
| 9 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Home` | goes to HomeFeed |
| 10 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Directory` | goes to CountryList, Locality_Details |
| 11 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Updates` | goes to Updates_SingleList |
| 12 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Bookmarks` | goes to Bookmarks |
| 13 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Menu` | goes to Menu |
| 14 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `other` | calls the prop onBottomBarClicked() |
| 15 | [`components/layout/MenuIcon/MenuIcon.tsx:34`](../../../app/src/components/layout/MenuIcon/MenuIcon.tsx#L34) | `<div>` | `onClick` | `inline` | – | goes to previous screen |

</details>


### React calls reached only through shared code

Calls that React can make on this route, without a TST chain on this route. Every reference chain starts in a shared container, component or app code (`containers/`, `components/`, `platform/`, `legacy/`, `lib/`), not in the screen files. TST makes these calls on a user action of the shared block, which the capture did not record, or on another screen.

None.
