# QRCodeGenerate: OutSystems (TST) and React

The route `/UBTConnect/QRCodeGenerate`, read from the TST compiled code and from the React code by `tools/route-check/check_route.py` on 2026-11-06. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/QRCodeGenerate/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Static check.** This route has no TST capture (`migration/screens/QRCodeGenerate/no-capture.json`).

- The OutSystems facts come from the compiled code of the screen and of its static closure (TST survey).
- The code is in `migration/sources/runtime/` and in `migration/sources/raw/` (the captured routes).
- The tool observed no call and has no screenshot.
- Closure: 52 files, 0 without compiled code.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/QRCodeGenerate` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate` | TST compiled code |
| UI flow | `Legacy_OrbitQRCodeFlow` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/QRCodeGenerate/QRCodeGeneratePage.tsx`](../../../app/src/pages/QRCodeGenerate/QRCodeGeneratePage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | no parity run | `route.py parity` |
| Code read | OutSystems: 1 files of the UI flow, 8 shared blocks, 43 app shell files. React: 141 files in the closure of the page | TST survey closure and compiled code (static), `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 1: React makes 1, **0 missing** |
| Differences found | **0** (see [section 3](#3-differences-found)) |
| Questions | 0 (+ 1 declared on TST outside the call graph) (see [section 4](#4-questions)) |
| React calls reached only through shared code | 0: see the last section |
| User actions of the route (own code) | OutSystems: 1. React: 1 |
| Screen and blocks of the UI flow with a React port | 1 of 1 |
| Navigation targets found in React | 1 of 1 |
| Shared blocks and components on the route | OutSystems 8, React 2 with user actions: see the last section |
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
| 1 | `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_QRCode/ScreenBlock_GenerateQRCode/DataActionGet_EventQRCode` | data action | `ScreenBlock_GenerateQRCode` | ScreenBlock_GenerateQRCode.OnReady → ScreenBlock_GenerateQRCode.onReady → ScreenBlock_GenerateQRCode.refreshData → ScreenBlock_GenerateQRCode.DataActionGet_EventQRCode<br>ScreenBlock_GenerateQRCode fetch at start → ScreenBlock_GenerateQRCode.DataActionGet_EventQRCode | no capture | `fetchEventQRCode()` [`api/event/repository.ts:276`](../../../app/src/api/event/repository.ts#L276) (page) | `QRCodeGenerate → useGenerateQrCode → fetchEventQRCode`<br>[`pages/QRCodeGenerate/QRCodeGeneratePage.tsx`](../../../app/src/pages/QRCodeGenerate/QRCodeGeneratePage.tsx) | implemented |

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `QRCodeGenerate` | `navigateTo_ContactHelpdesk of GenerateQRCode` | `onHandle_ContactHelpdesk` | – | goes to ContactByEmailOrbitHelpdesk |

### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`pages/QRCodeGenerate/QRCodeGeneratePage.tsx:30`](../../../app/src/pages/QRCodeGenerate/QRCodeGeneratePage.tsx#L30) | `<GenerateQrCodeView>` | `onContactHelpdesk` | `onContactHelpdesk` | – | goes to ContactByEmailOrbitHelpdesk |

## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in `migration/sources/runtime/` and in `migration/sources/raw/` (the shared store of the captured routes; static check).

### 7.1 OutSystems (TST)

| Input | Type | Mandatory | Place |
|---|---|---|---|
| `In_MemberId` | LongInteger | yes | [`UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate.mvc.js:89`](../../sources/runtime/UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate.mvc.js#L89) |
| `In_EventId` | LongInteger | yes | [`UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate.mvc.js:93`](../../sources/runtime/UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate.mvc.js#L93) |
| `In_EventName` | Text | yes | [`UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate.mvc.js:97`](../../sources/runtime/UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate.mvc.js#L97) |
| `In_EventStartDate` | DateTime | yes | [`UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate.mvc.js:101`](../../sources/runtime/UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate.mvc.js#L101) |
| `In_EventEndDate` | DateTime | yes | [`UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate.mvc.js:105`](../../sources/runtime/UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate.mvc.js#L105) |
| `In_EventLocation` | Text | yes | [`UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate.mvc.js:109`](../../sources/runtime/UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate.mvc.js#L109) |

| Block | Target | Parameters | Place |
|---|---|---|---|
| `QRCodeGenerate` | `ContactByEmailOrbitHelpdesk` | `In_MilestoneId` = `""`<br>`In_EventName` = `eventName`<br>`In_EventId` = `in_EventId`<br>`In_Subject` = `subject` | [`UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate.mvc.js:288`](../../sources/runtime/UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate.mvc.js#L288) |

### 7.2 React

Declared inputs of the route: `In_MemberId: LongInteger`, `In_EventId: LongInteger`, `In_EventName: Text`, `In_EventStartDate: DateTime`, `In_EventEndDate: DateTime`, `In_EventLocation: Text` (`app/src/app/routes.generated.ts`).

| Hook | Keys read | Place |
|---|---|---|
| `useSearchParams` | none | [`pages/QRCodeGenerate/QRCodeGeneratePage.tsx:14`](../../../app/src/pages/QRCodeGenerate/QRCodeGeneratePage.tsx#L14) |

| File | Target | Parameters | Place |
|---|---|---|---|
| `useGenerateQrCode.ts` | `ContactByEmailOrbitHelpdesk` | `In_MilestoneId` = `''`<br>`In_EventName` = `In_EventName`<br>`In_EventId` = `In_EventId`<br>`In_Subject` = `subject` | [`pages/QRCodeGenerate/hooks/useGenerateQrCode.ts:103`](../../../app/src/pages/QRCodeGenerate/hooks/useGenerateQrCode.ts#L103) |

## 8. Lifecycle

What runs when the screen and its blocks open and close, without a user action.

### 8.1 OutSystems (TST)

Event handlers. The steps are the node comments and the conditions of the compiled action.

None.

Data actions and aggregates. The tool reads `dataFetchDependenciesOriginal`: `0` is a fetch when the block opens, `-1` is a fetch only on demand (a `Refresh Query` step). `Read by` lists the child block inputs, conditions, text widgets and actions that read the result.

None.

### 8.2 React

Effects (`useEffect`, `useLayoutEffect`) of the screen files, and the effects of shared components that make a call, a navigation or a message.

| File | Hook (function) | Dependencies | Cleanup | Effects | Place |
|---|---|---|---|---|---|
| `useBinaryImageURL.ts` | `useEffect` (`useBinaryImageURL`) | `[url]` | yes | none | [`pages/QRCodeGenerate/hooks/useBinaryImageURL.ts:17`](../../../app/src/pages/QRCodeGenerate/hooks/useBinaryImageURL.ts#L17) |

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
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate.mvc.js:344`](../../sources/runtime/UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate.mvc.js#L344) |
| React | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

The actions of the screen and its blocks have no `Handle Error` node.

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `Legacy_OrbitQRCodeFlow` not in `migration/sources/shell/`. Handled errors: none.

### 11.2 React

None.

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `ScreenBlock_GenerateQRCode` | `Connect2_OrbitMobile_MUI` | [`pages/QRCodeGenerate/components/GenerateQrCodeView.tsx`](../../../app/src/pages/QRCodeGenerate/components/GenerateQrCodeView.tsx), [`pages/QRCodeGenerate/hooks/generateQrCodeState.ts`](../../../app/src/pages/QRCodeGenerate/hooks/generateQrCodeState.ts), [`pages/QRCodeGenerate/hooks/useBinaryImageURL.ts`](../../../app/src/pages/QRCodeGenerate/hooks/useBinaryImageURL.ts), [`pages/QRCodeGenerate/hooks/useGenerateQrCode.ts`](../../../app/src/pages/QRCodeGenerate/hooks/useGenerateQrCode.ts) | 0 |
| `ContactHelpdesk_Footer` | `Connect2_OrbitMobile_MUI` | [`components/orbit/ContactHelpdeskFooter/ContactHelpdeskFooter.tsx`](../../../app/src/components/orbit/ContactHelpdeskFooter/ContactHelpdeskFooter.tsx) | 0 |
| `Skeleton_Loading` | `Connect2_OrbitMobile_MUI` | [`components/orbit/OrbitSkeleton/OrbitSkeleton.tsx`](../../../app/src/components/orbit/OrbitSkeleton/OrbitSkeleton.tsx) | 0 |
| `NoInformation_Orbit` | `Connect2_OrbitMobile_MUI` | [`components/orbit/OrbitNoInformation/OrbitNoInformation.tsx`](../../../app/src/components/orbit/OrbitNoInformation/OrbitNoInformation.tsx) | 0 |
| `MenuIcon__UpdatedOSUI` | `Connect2_LegacyShared` | [`components/layout/MenuIcon/MenuIcon.tsx`](../../../app/src/components/layout/MenuIcon/MenuIcon.tsx) | 1 |
| `Layout_Orbit` | `Connect2_LegacyShared` | [`components/layout/OrbitLayout/OrbitLayout.tsx`](../../../app/src/components/layout/OrbitLayout/OrbitLayout.tsx) | 0 |
| `BaseLayout_UpdatedOSUI` | `Connect2_LegacyShared` | [`components/layout/BaseLayout/BaseLayout.tsx`](../../../app/src/components/layout/BaseLayout/BaseLayout.tsx) | 0 |
| `PullToRefresh` | `OutSystemsUI_2_23` | [`components/ui/PullToRefresh/PullToRefresh.tsx`](../../../app/src/components/ui/PullToRefresh/PullToRefresh.tsx) | 0 |

<details><summary>User actions of the shared blocks (1)</summary>

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `MenuIcon__UpdatedOSUI` | `onClick (HTML element)` | `onBack` | – | goes to previous screen |

</details>


### React

| File | User actions |
|---|---|
| [`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx) | 2 |
| [`components/layout/MenuIcon/MenuIcon.tsx`](../../../app/src/components/layout/MenuIcon/MenuIcon.tsx) | 1 |

<details><summary>User actions of the shared components (3)</summary>

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:80`](../../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L80) | `<PreventBackNavigation>` | `onBackNavigationPrevented` | `redirectHome` | – | goes to HomeFeed |
| 2 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:82`](../../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L82) | `<BackNavigationHandler>` | `onBackNavigation` | `maybeRedirectHome` | – | goes to HomeFeed |
| 3 | [`components/layout/MenuIcon/MenuIcon.tsx:34`](../../../app/src/components/layout/MenuIcon/MenuIcon.tsx#L34) | `<div>` | `onClick` | `inline` | – | goes to previous screen |

</details>


### React calls reached only through shared code

Calls that React can make on this route, without a TST chain on this route. Every reference chain starts in a shared container, component or app code (`containers/`, `components/`, `platform/`, `legacy/`, `lib/`), not in the screen files. TST makes these calls on a user action of the shared block, which the capture did not record, or on another screen.

None.
