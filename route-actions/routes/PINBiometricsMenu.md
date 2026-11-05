# PINBiometricsMenu: OutSystems (TST) and React

The route `/UBTConnect/PINBiometricsMenu`, read from the TST compiled code and from the React code by `route-actions/tools/check_route.py` on 2026-11-05. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/PINBiometricsMenu/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Live code.** TST changed 8 compiled files of this route after the capture (`migration/knowledge/tst-drift-2026-11-05.md`). The tool read the live copies in `migration/runtime-sources/live/` for: `NavigationHandler`, `OutSystemsUI_2_23`, `js`, `UBTConnect`, `js`, `js`, `UBTConnectLibrary`, `js`. The observed calls come from the capture.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/PINBiometricsMenu` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.App_Menu.PINBiometricsMenu` | TST compiled code |
| UI flow | `App_Menu` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/PINBiometricsMenu/PINBiometricsMenuPage.tsx`](../../app/src/pages/PINBiometricsMenu/PINBiometricsMenuPage.tsx) | `app/src/pages/` |
| React route rules | access `anonymous`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | [`migration/screens/PINBiometricsMenu/parity`](../../migration/screens/PINBiometricsMenu/parity) | `route.py parity` |
| Code read | OutSystems: 2 files of the UI flow, 9 shared blocks, 0 app shell files. React: 46 files in the closure of the page | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 0: React makes 0, **0 missing** |
| Differences found | **0** (see [section 3](#3-differences-found)) |
| Questions | 0 (see [section 4](#4-questions)) |
| React calls reached only through shared code | 0: see the last section |
| User actions of the route (own code) | OutSystems: 1. React: 2 |
| Screen and blocks of the UI flow with a React port | 2 of 2 |
| Navigation targets found in React | 1 of 1 |
| Shared blocks and components on the route | OutSystems 9, React 0 with user actions: see the last section |
| App shell on this route | 7 calls: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Differences found

Each line is a fact of both sides: a TST call, navigation or variable, and the React code that has it or not. The tool does not judge the behaviour.

None.

## 4. Questions

None.

## 5. Server calls

None.

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `PINBiometricsMenu` | `onClick_MenuOption of List` | `onClick_MenuOption` | – | goes to PINChange |

### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`pages/PINBiometricsMenu/PINBiometricsMenuPage.tsx:19`](../../app/src/pages/PINBiometricsMenu/PINBiometricsMenuPage.tsx#L19) | `<DetailLayout>` | `onBack` | `navigateBack` | – | goes to previous screen |
| 2 | [`pages/PINBiometricsMenu/PINBiometricsMenuPage.tsx:21`](../../app/src/pages/PINBiometricsMenu/PINBiometricsMenuPage.tsx#L21) | `<MenuList>` | `onOnClickMenuOption` | `onMenuOption` | – | goes to PINChange |

## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in the `analysis/sources/raw/` folder of the route; the files that TST changed after the capture are in `migration/runtime-sources/live/`.

### 7.1 OutSystems (TST)

Screen inputs: none. `setInputs` of `PINBiometricsMenu` reads no input.

Navigations with parameters: none.

### 7.2 React

Declared inputs of the route: none (`app/src/app/routes.generated.ts`).

Parameters read (`useSearchParams`, `useParams`): none.

Navigations with parameters: none.

## 8. Lifecycle

What runs when the screen and its blocks open and close, without a user action.

### 8.1 OutSystems (TST)

Event handlers. The steps are the node comments and the conditions of the compiled action.

| Block | Event | Action | Steps |
|---|---|---|---|
| `PINBiometricsMenu` | OnInitialize ([`UBTConnect.App_Menu.PINBiometricsMenu.mvc.js:382`](../../migration/screens/PINBiometricsMenu/analysis/sources/raw/UBTConnect.App_Menu.PINBiometricsMenu.mvc.js#L382)) | `screenEvent_OnInitialize` | 1. JavaScript: IsViewRestoredFromCache ([`L248`](../../migration/screens/PINBiometricsMenu/analysis/sources/raw/UBTConnect.App_Menu.PINBiometricsMenu.mvc.js#L248))<br>2. Check if IsViewRestoredFromCache IsRestoredFromCache ([`L255`](../../migration/screens/PINBiometricsMenu/analysis/sources/raw/UBTConnect.App_Menu.PINBiometricsMenu.mvc.js#L255))<br>3. If isViewRestoredFromCache.isRestoredFromCache ([`L256`](../../migration/screens/PINBiometricsMenu/analysis/sources/raw/UBTConnect.App_Menu.PINBiometricsMenu.mvc.js#L256))<br>4. Else ([`L258`](../../migration/screens/PINBiometricsMenu/analysis/sources/raw/UBTConnect.App_Menu.PINBiometricsMenu.mvc.js#L258))<br>5. Execute Action: ListClear ([`L260`](../../migration/screens/PINBiometricsMenu/analysis/sources/raw/UBTConnect.App_Menu.PINBiometricsMenu.mvc.js#L260))<br>6. Execute Action: ListAppend ([`L263`](../../migration/screens/PINBiometricsMenu/analysis/sources/raw/UBTConnect.App_Menu.PINBiometricsMenu.mvc.js#L263))<br>7. Execute Action: AppManager_GetPIN_FingerprintReaderAvailable ([`L271`](../../migration/screens/PINBiometricsMenu/analysis/sources/raw/UBTConnect.App_Menu.PINBiometricsMenu.mvc.js#L271))<br>8. If appManager_GetPIN_FingerprintReaderAvailable.available ([`L274`](../../migration/screens/PINBiometricsMenu/analysis/sources/raw/UBTConnect.App_Menu.PINBiometricsMenu.mvc.js#L274))<br>9. Execute Action: ListAppend2 ([`L276`](../../migration/screens/PINBiometricsMenu/analysis/sources/raw/UBTConnect.App_Menu.PINBiometricsMenu.mvc.js#L276))<br>10. Else ([`L287`](../../migration/screens/PINBiometricsMenu/analysis/sources/raw/UBTConnect.App_Menu.PINBiometricsMenu.mvc.js#L287)) |

<details><summary>Sequence diagrams of the screen event handlers (1)</summary>

The diagram keeps the order of the steps in the compiled action. The code does not give the order of the handlers of different blocks.

#### 8.1.1 PINBiometricsMenu: OnInitialize

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as PINBiometricsMenu
  R->>B: OnInitialize → screenEvent_OnInitialize
  B->>B: JavaScript IsViewRestoredFromCache
  Note over B: Check if IsViewRestoredFromCache IsRestoredFromCache
  alt isViewRestoredFromCache.isRestoredFromCache
    Note over B: no step
  else other
    B->>B: action ListClear
    B->>B: action ListAppend
    B->>B: action AppManager_GetPIN_FingerprintReaderAvailable
    alt appManager_GetPIN_FingerprintReaderAvailable.available
      B->>B: action ListAppend2
    else other
      Note over B: no step
    end
  end
```

</details>

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

| Block | Operation | Variable | Places |
|---|---|---|---|
| `PINBiometricsMenu` | get | `UBTConnect.App_PIN_BiometricEnabled` | [`UBTConnect.App_Menu.PINBiometricsMenu.mvc.js:283`](../../migration/screens/PINBiometricsMenu/analysis/sources/raw/UBTConnect.App_Menu.PINBiometricsMenu.mvc.js#L283), [`UBTConnect.App_Menu.PINBiometricsMenu.mvc.js:334`](../../migration/screens/PINBiometricsMenu/analysis/sources/raw/UBTConnect.App_Menu.PINBiometricsMenu.mvc.js#L334) |
| `PINBiometricsMenu` | set | `UBTConnect.App_PIN_BiometricEnabled` | [`UBTConnect.App_Menu.PINBiometricsMenu.mvc.js:334`](../../migration/screens/PINBiometricsMenu/analysis/sources/raw/UBTConnect.App_Menu.PINBiometricsMenu.mvc.js#L334) |

### 9.2 React

| File | Operation | Variable or key | Place |
|---|---|---|---|
| `usePINBiometricsMenu.ts` | `clientVar.get` | `UBTConnect.App_PIN_BiometricEnabled` | [`pages/PINBiometricsMenu/hooks/usePINBiometricsMenu.ts:32`](../../app/src/pages/PINBiometricsMenu/hooks/usePINBiometricsMenu.ts#L32) |
| `usePINBiometricsMenu.ts` | `clientVar.set` | `UBTConnect.App_PIN_BiometricEnabled` | [`pages/PINBiometricsMenu/hooks/usePINBiometricsMenu.ts:46`](../../app/src/pages/PINBiometricsMenu/hooks/usePINBiometricsMenu.ts#L46) |
| `usePINBiometricsMenu.ts` | `clientVar.get` | `UBTConnect.App_PIN_BiometricEnabled` | [`pages/PINBiometricsMenu/hooks/usePINBiometricsMenu.ts:46`](../../app/src/pages/PINBiometricsMenu/hooks/usePINBiometricsMenu.ts#L46) |

## 10. Access

Who can open the route, and the role checks in the screen and block code.

| Side | Rule | Place |
|---|---|---|
| OutSystems (TST) | anonymous (no check) | [`UBTConnect.App_Menu.PINBiometricsMenu.mvc.js:407`](../../migration/screens/PINBiometricsMenu/analysis/sources/raw/UBTConnect.App_Menu.PINBiometricsMenu.mvc.js#L407) |
| React | access `anonymous`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

The actions of the screen and its blocks have no `Handle Error` node.

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `App_Menu` [`UBTConnect.App_Menu.controller.js:12`](../../migration/shell/sources/UBTConnect.App_Menu.controller.js#L12). Handled errors: none, it goes to the next flow.
2. UI flow `App_Common` [`UBTConnect.App_Common.controller.js:12`](../../migration/shell/sources/UBTConnect.App_Common.controller.js#L12). Handled errors: `BubbleCommunicationException` ([`UBTConnect.App_Common.controller.js:31`](../../migration/shell/sources/UBTConnect.App_Common.controller.js#L31)), `CommunicationException` ([`UBTConnect.App_Common.controller.js:46`](../../migration/shell/sources/UBTConnect.App_Common.controller.js#L46)), `SecurityException` ([`UBTConnect.App_Common.controller.js:61`](../../migration/shell/sources/UBTConnect.App_Common.controller.js#L61)), `AllExceptions` ([`UBTConnect.App_Common.controller.js:91`](../../migration/shell/sources/UBTConnect.App_Common.controller.js#L91)).

### 11.2 React

None.

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `Layout_DetailPage` | `UBTConnectLibrary` | [`components/layout/DetailLayout/DetailLayout.tsx`](../../app/src/components/layout/DetailLayout/DetailLayout.tsx) | 1 |
| `LayoutRuntime_Top` | `NavigationHandler` | [`components/layout/LayoutRuntimeTop/LayoutRuntimeTop.tsx`](../../app/src/components/layout/LayoutRuntimeTop/LayoutRuntimeTop.tsx) | 0 |
| `Icon` | `UBTConnectLibrary` | [`components/ui/Icon/Icon.tsx`](../../app/src/components/ui/Icon/Icon.tsx) | 0 |
| `CustomContainer` | `UBTConnectLibrary` | [`components/ui/CustomContainer/CustomContainer.tsx`](../../app/src/components/ui/CustomContainer/CustomContainer.tsx) | 0 |
| `SkeletonSection` | `UBTConnectLibrary` | [`components/ui/Skeleton/Skeleton.tsx`](../../app/src/components/ui/Skeleton/Skeleton.tsx) | 0 |
| `Columns_Three` | `UBTConnectLibrary` | [`components/ui/ColumnsThree/ColumnsThree.tsx`](../../app/src/components/ui/ColumnsThree/ColumnsThree.tsx) | 0 |
| `Columns3` | `OutSystemsUI_2_23` | [`components/ui/Columns3/Columns3.tsx`](../../app/src/components/ui/Columns3/Columns3.tsx) | 0 |
| `CustomText` | `UBTConnectLibrary` | [`components/ui/CustomText/CustomText.tsx`](../../app/src/components/ui/CustomText/CustomText.tsx) | 0 |
| `IconInline_Internal` | `UBTConnectLibrary` | [`components/ui/IconInline/IconInline.tsx`](../../app/src/components/ui/IconInline/IconInline.tsx) | 0 |

<details><summary>User actions of the shared blocks (1)</summary>

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `Layout_DetailPage` | `click of Icon` | `onClick_BackNavigation` | – | goes to previous screen |

</details>


### React

None.

### React calls reached only through shared code

Calls that React can make on this route, without a TST chain on this route. Every reference chain starts in a shared container, component or app code (`containers/`, `components/`, `platform/`, `legacy/`, `lib/`), not in the screen files. TST makes these calls on a user action of the shared block, which the capture did not record, or on another screen.

None.
