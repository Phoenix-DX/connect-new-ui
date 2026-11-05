# MyEntertaining: OutSystems (TST) and React

The route `/UBTConnect/MyEntertaining`, read from the TST compiled code and from the React code by `route-actions/tools/check_route.py` on 2026-11-05. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/MyEntertaining/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Live code.** TST changed 16 compiled files of this route after the capture (`migration/knowledge/tst-drift-2026-11-05.md`). The tool read the live copies in `migration/runtime-sources/live/` for: `Connect2_LegacyShared`, `js`, `NavigationHandler`, `OutSystemsUI_2_23`, `js`, `MyEntertaining_Embedded`, `UBTConnect`, `js`, `js`, `UBTConnectLibrary`, `js`, `UBTConnect_EmbedMyEntertaining`, `UBTConnect_Utils`, `js`, `UBT_AppManager`, `UBT_AppManager_Mobile`. The observed calls come from the capture.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/MyEntertaining` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.Calendar.MyEntertaining` | TST compiled code |
| UI flow | `Calendar` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/MyEntertaining/MyEntertainingPage.tsx`](../../app/src/pages/MyEntertaining/MyEntertainingPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | [`migration/screens/MyEntertaining/parity`](../../migration/screens/MyEntertaining/parity) | `route.py parity` |
| Code read | OutSystems: 2 files of the UI flow, 2 shared blocks, 21 app shell files. React: 129 files in the closure of the page | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 2: React makes 2, **0 missing** |
| Differences found | **0** (see [section 3](#3-differences-found)) |
| Questions | 0 (see [section 4](#4-questions)) |
| React calls reached only through shared code | 0: see the last section |
| User actions of the route (own code) | OutSystems: 3. React: 4 |
| Screen and blocks of the UI flow with a React port | 2 of 2 |
| Navigation targets found in React | 0 of 0 |
| Shared blocks and components on the route | OutSystems 2, React 1 with user actions: see the last section |
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
| 1 | `UBTConnect_EmbedMyEntertaining/Blocks/Embedded_MyEntertaining/ActionAppManager_Get_UserIdToken` | server action | `Embedded_MyEntertaining` | Embedded_MyEntertaining.action_RefreshToken → server AppManager_Get_UserIdToken | no | `fetchUserIdToken()` [`api/entertaining/repository.ts:25`](../../app/src/api/entertaining/repository.ts#L25) (page) | `EntertainingCalendar → useEntertainingCalendar → refreshToken → fetchUserIdToken`<br>[`pages/MyEntertaining/MyEntertainingPage.tsx`](../../app/src/pages/MyEntertaining/MyEntertainingPage.tsx) | implemented |
| 2 | `UBTConnect_EmbedMyEntertaining/Blocks/Embedded_MyEntertaining/DataActionGetEntertainingConfig` | data action | `Embedded_MyEntertaining` | Embedded_MyEntertaining fetch at start → Embedded_MyEntertaining.DataActionGetEntertainingConfig | yes | `fetchEntertainingConfig()` [`api/entertaining/repository.ts:13`](../../app/src/api/entertaining/repository.ts#L13) (page) | `EntertainingCalendar → useEntertainingCalendar → useEntertainingConfigQuery → fetchEntertainingConfig`<br>[`pages/MyEntertaining/MyEntertainingPage.tsx`](../../app/src/pages/MyEntertaining/MyEntertainingPage.tsx) | implemented |

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `MyEntertaining` | `onNavBack of Embedded` | `handle_NavBack` | – | goes to previous screen |
| 2 | `MyEntertaining_Embedded` | `onError of MyEntertaining` | `handle_Error` | – | shows a message |
| 3 | `MyEntertaining_Embedded` | `onOpenMap of MyEntertaining` | `handle_OpenMap` | – | opens an external link |

### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`pages/MyEntertaining/MyEntertainingPage.tsx:35`](../../app/src/pages/MyEntertaining/MyEntertainingPage.tsx#L35) | `<Embedded_MyEntertaining>` | `onRefreshToken` | `calendar.refreshToken` | – | calls ActionAppManager_Get_UserIdToken |
| 2 | [`pages/MyEntertaining/MyEntertainingPage.tsx:36`](../../app/src/pages/MyEntertaining/MyEntertainingPage.tsx#L36) | `<Embedded_MyEntertaining>` | `onOnError` | `flow.onError` | – | shows a message |
| 3 | [`pages/MyEntertaining/MyEntertainingPage.tsx:37`](../../app/src/pages/MyEntertaining/MyEntertainingPage.tsx#L37) | `<Embedded_MyEntertaining>` | `onOnOpenMap` | `flow.onOpenMap` | – | opens an external link |
| 4 | [`pages/MyEntertaining/MyEntertainingPage.tsx:59`](../../app/src/pages/MyEntertaining/MyEntertainingPage.tsx#L59) | `<MyEntertaining_Embedded>` | `onNavBack` | `navigateBack` | – | goes to previous screen |

## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in the `analysis/sources/raw/` folder of the route; the files that TST changed after the capture are in `migration/runtime-sources/live/`.

### 7.1 OutSystems (TST)

| Input | Type | Mandatory | Place |
|---|---|---|---|
| `MyCalendarEventSourceId` | Text | yes | [`UBTConnect.Calendar.MyEntertaining.mvc.js:59`](../../migration/screens/MyEntertaining/analysis/sources/raw/UBTConnect.Calendar.MyEntertaining.mvc.js#L59) |

Navigations with parameters: none.

### 7.2 React

Declared inputs of the route: `MyCalendarEventSourceId: Text` (`app/src/app/routes.generated.ts`).

| Hook | Keys read | Place |
|---|---|---|
| `useSearchParams` | none | [`pages/MyEntertaining/MyEntertainingPage.tsx:50`](../../app/src/pages/MyEntertaining/MyEntertainingPage.tsx#L50) |

Navigations with parameters: none.

## 8. Lifecycle

What runs when the screen and its blocks open and close, without a user action.

### 8.1 OutSystems (TST)

Event handlers. The steps are the node comments and the conditions of the compiled action.

| Block | Event | Action | Steps |
|---|---|---|---|
| `MyEntertaining_Embedded` | OnInitialize ([`UBTConnect.Calendar.MyEntertaining_Embedded.mvc.js:478`](../../migration/runtime-sources/live/UBTConnect.Calendar.MyEntertaining_Embedded.mvc.js#L478)) | `onInitialize` | 1. If (in_InitialEventSouceId === UBTConnectModel.staticEntities.type_MyCalendarEventSource.orbi… ([`L292`](../../migration/runtime-sources/live/UBTConnect.Calendar.MyEntertaining_Embedded.mvc.js#L292))<br>2. PreloadedSource = "orbit" ([`L294`](../../migration/runtime-sources/live/UBTConnect.Calendar.MyEntertaining_Embedded.mvc.js#L294))<br>3. Else ([`L297`](../../migration/runtime-sources/live/UBTConnect.Calendar.MyEntertaining_Embedded.mvc.js#L297))<br>4. If in_InitialEventSouceId === UBTConnectModel.staticEntities.type_MyCalendarEventSource.lDM ([`L298`](../../migration/runtime-sources/live/UBTConnect.Calendar.MyEntertaining_Embedded.mvc.js#L298))<br>5. PreloadedSource = "ldm" ([`L300`](../../migration/runtime-sources/live/UBTConnect.Calendar.MyEntertaining_Embedded.mvc.js#L300))<br>6. Else ([`L303`](../../migration/runtime-sources/live/UBTConnect.Calendar.MyEntertaining_Embedded.mvc.js#L303))<br>7. If in_InitialEventSouceId === UBTConnectModel.staticEntities.type_MyCalendarEventSource.assem… ([`L304`](../../migration/runtime-sources/live/UBTConnect.Calendar.MyEntertaining_Embedded.mvc.js#L304))<br>8. PreloadedSource = "assemble" ([`L306`](../../migration/runtime-sources/live/UBTConnect.Calendar.MyEntertaining_Embedded.mvc.js#L306))<br>9. Else ([`L309`](../../migration/runtime-sources/live/UBTConnect.Calendar.MyEntertaining_Embedded.mvc.js#L309))<br>10. If in_InitialEventSouceId === UBTConnectModel.staticEntities.type_MyCalendarEventSource.userC… ([`L310`](../../migration/runtime-sources/live/UBTConnect.Calendar.MyEntertaining_Embedded.mvc.js#L310))<br>11. PreloadedSource = "personal" ([`L312`](../../migration/runtime-sources/live/UBTConnect.Calendar.MyEntertaining_Embedded.mvc.js#L312))<br>12. Else ([`L315`](../../migration/runtime-sources/live/UBTConnect.Calendar.MyEntertaining_Embedded.mvc.js#L315)) |

Data actions and aggregates. The tool reads `dataFetchDependenciesOriginal`: `0` is a fetch when the block opens, `-1` is a fetch only on demand (a `Refresh Query` step). `Read by` lists the child block inputs, conditions, text widgets and actions that read the result.

None.

### 8.2 React

Effects (`useEffect`, `useLayoutEffect`) of the screen files, and the effects of shared components that make a call, a navigation or a message.

| File | Hook (function) | Dependencies | Cleanup | Effects | Place |
|---|---|---|---|---|---|
| `Embedded_MyEntertaining.tsx` | `useLayoutEffect` (`Embedded_MyEntertaining`) | `none (every render)` | no | none | [`pages/MyEntertaining/components/Embedded_MyEntertaining.tsx:99`](../../app/src/pages/MyEntertaining/components/Embedded_MyEntertaining.tsx#L99) |
| `Embedded_MyEntertaining.tsx` | `useEffect` (`Embedded_MyEntertaining`) | `[config, containerId]` | yes | none | [`pages/MyEntertaining/components/Embedded_MyEntertaining.tsx:107`](../../app/src/pages/MyEntertaining/components/Embedded_MyEntertaining.tsx#L107) |
| `Embedded_MyEntertaining.tsx` | `useEffect` (`Embedded_MyEntertaining`) | `[view, theme, sources, b2CTenant]` | no | none | [`pages/MyEntertaining/components/Embedded_MyEntertaining.tsx:197`](../../app/src/pages/MyEntertaining/components/Embedded_MyEntertaining.tsx#L197) |

Queries. A query fetches when its component mounts and when its key changes. `Read by` lists what reads the result in the same file.

| File | Hook (function) | Calls | Read by | Place |
|---|---|---|---|---|
| `useEntertainingCalendar.ts` | `useEntertainingConfigQuery` (`useEntertainingCalendar`) | `/api/UBTConnect_EmbedMyEntertaining/Embedded_MyEntertaining/DataActionGetEntertainingConfig` | `return` ([`L38`](../../app/src/pages/MyEntertaining/hooks/useEntertainingCalendar.ts#L38)) | [`pages/MyEntertaining/hooks/useEntertainingCalendar.ts:37`](../../app/src/pages/MyEntertaining/hooks/useEntertainingCalendar.ts#L37) |

## 9. Client state

Client variables and browser storage that the route reads or writes. Other screens can read this state.

### 9.1 OutSystems (TST)

| Block | Operation | Variable | Places |
|---|---|---|---|
| `MyEntertaining_Embedded` | get | `UBTConnect.Embedd_B2CTenant` | [`UBTConnect.Calendar.MyEntertaining_Embedded.mvc.js:169`](../../migration/runtime-sources/live/UBTConnect.Calendar.MyEntertaining_Embedded.mvc.js#L169), [`UBTConnect.Calendar.MyEntertaining_Embedded.mvc.js:254`](../../migration/runtime-sources/live/UBTConnect.Calendar.MyEntertaining_Embedded.mvc.js#L254) |

### 9.2 React

| File | Operation | Variable or key | Place |
|---|---|---|---|
| `useMyEntertaining.ts` | `useClientVar` | `UBTConnect.Embedd_B2CTenant` | [`pages/MyEntertaining/hooks/useMyEntertaining.ts:54`](../../app/src/pages/MyEntertaining/hooks/useMyEntertaining.ts#L54) |

## 10. Access

Who can open the route, and the role checks in the screen and block code.

| Side | Rule | Place |
|---|---|---|
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.Calendar.MyEntertaining.mvc.js:259`](../../migration/screens/MyEntertaining/analysis/sources/raw/UBTConnect.Calendar.MyEntertaining.mvc.js#L259) |
| React | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

The actions of the screen and its blocks have no `Handle Error` node.

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `Calendar` not in `migration/shell/sources/`. Handled errors: none.

### 11.2 React

| File | Kind | Function | Effects | Place |
|---|---|---|---|---|
| `Embedded_MyEntertaining.tsx` | onError | `Embedded_MyEntertaining` | none | [`pages/MyEntertaining/components/Embedded_MyEntertaining.tsx:151`](../../app/src/pages/MyEntertaining/components/Embedded_MyEntertaining.tsx#L151) |
| `useEntertainingCalendar.ts` | flow handler | `refreshToken` | none | [`pages/MyEntertaining/hooks/useEntertainingCalendar.ts:26`](../../app/src/pages/MyEntertaining/hooks/useEntertainingCalendar.ts#L26) |
| `useMyEntertaining.ts` | onError | `useMyEntertaining` | message `{
    title: '',
    message,
    messageType: 'info',
    encodedHtml: true,
    extendedClass: '',
    delayMs: 0,
    useDebounce: false,
  }` | [`pages/MyEntertaining/hooks/useMyEntertaining.ts:55`](../../app/src/pages/MyEntertaining/hooks/useMyEntertaining.ts#L55) |

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `Layout_DetailPage` | `UBTConnectLibrary` | [`components/layout/DetailLayout/DetailLayout.tsx`](../../app/src/components/layout/DetailLayout/DetailLayout.tsx) | 1 |
| `Embedded_MyEntertaining` | `UBTConnect_EmbedMyEntertaining` | [`pages/MyEntertaining/components/Embedded_MyEntertaining.tsx`](../../app/src/pages/MyEntertaining/components/Embedded_MyEntertaining.tsx), [`pages/MyEntertaining/hooks/useEntertainingCalendar.ts`](../../app/src/pages/MyEntertaining/hooks/useEntertainingCalendar.ts) | 0 |

<details><summary>User actions of the shared blocks (1)</summary>

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `Layout_DetailPage` | `click of Icon` | `onClick_BackNavigation` | – | goes to previous screen |

</details>


### React

| File | User actions |
|---|---|
| [`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx) | 2 |

<details><summary>User actions of the shared components (2)</summary>

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:80`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L80) | `<PreventBackNavigation>` | `onBackNavigationPrevented` | `redirectHome` | – | goes to HomeFeed |
| 2 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:82`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L82) | `<BackNavigationHandler>` | `onBackNavigation` | `maybeRedirectHome` | – | goes to HomeFeed |

</details>


### React calls reached only through shared code

Calls that React can make on this route, without a TST chain on this route. Every reference chain starts in a shared container, component or app code (`containers/`, `components/`, `platform/`, `legacy/`, `lib/`), not in the screen files. TST makes these calls on a user action of the shared block, which the capture did not record, or on another screen.

None.
