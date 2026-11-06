# CommunityBusinessDetails_CoomingSoon: OutSystems (TST) and React

The route `/UBTConnect/CommunityBusinessDetails_CoomingSoon`, read from the TST compiled code and from the React code by `tools/route-check/check_route.py` on 2026-11-06. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/CommunityBusinessDetails_CoomingSoon/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Live code.** TST changed 8 compiled files of this route after the capture (`migration/knowledge/tst-drift-2026-11-05.md`). The tool read the live copies in `migration/sources/runtime/` for: `NavigationHandler`, `OutSystemsUI_2_23`, `js`, `UBTConnect`, `js`, `js`, `UBTConnectLibrary`, `js`. The observed calls come from the capture.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/CommunityBusinessDetails_CoomingSoon` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.zDEV_Directory_CommunityBusinessBlocks.CommunityBusinessDetails_CoomingSoon` | TST compiled code |
| UI flow | `zDEV_Directory_CommunityBusinessBlocks` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/CommunityBusinessDetails_CoomingSoon/CommunityBusinessDetails_CoomingSoonPage.tsx`](../../../app/src/pages/CommunityBusinessDetails_CoomingSoon/CommunityBusinessDetails_CoomingSoonPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | [`migration/screens/CommunityBusinessDetails_CoomingSoon/parity`](../../screens/CommunityBusinessDetails_CoomingSoon/parity) | `route.py parity` |
| Code read | OutSystems: 1 files of the UI flow, 8 shared blocks, 0 app shell files. React: 29 files in the closure of the page | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 0: React makes 0, **0 missing** |
| Differences found | **0** (see [section 3](#3-differences-found)) |
| Questions | 0 (see [section 4](#4-questions)) |
| React calls reached only through shared code | 0: see the last section |
| User actions of the route (own code) | OutSystems: 0. React: 0 |
| Screen and blocks of the UI flow with a React port | 1 of 1 |
| Navigation targets found in React | 0 of 0 |
| Shared blocks and components on the route | OutSystems 8, React 0 with user actions: see the last section |
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

None.

### 6.2 React

None.

## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in `migration/sources/raw/` (the route's `analysis/manifest.json` names them); the files that TST changed after the capture are read from `migration/sources/runtime/`.

### 7.1 OutSystems (TST)

| Input | Type | Mandatory | Place |
|---|---|---|---|
| `In_CommunityBusinessId` | LongInteger | yes | [`UBTConnect.zDEV_Directory_CommunityBusinessBlocks.CommunityBusinessDetails_CoomingSoon.mvc.js:59`](../../sources/raw/UBTConnect.zDEV_Directory_CommunityBusinessBlocks.CommunityBusinessDetails_CoomingSoon.mvc.js#L59) |

Navigations with parameters: none.

### 7.2 React

Declared inputs of the route: `In_CommunityBusinessId: LongInteger` (`app/src/app/routes.generated.ts`).

| Hook | Keys read | Place |
|---|---|---|
| `useSearchParams` | none | [`pages/CommunityBusinessDetails_CoomingSoon/CommunityBusinessDetails_CoomingSoonPage.tsx:15`](../../../app/src/pages/CommunityBusinessDetails_CoomingSoon/CommunityBusinessDetails_CoomingSoonPage.tsx#L15) |

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
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.zDEV_Directory_CommunityBusinessBlocks.CommunityBusinessDetails_CoomingSoon.mvc.js:265`](../../sources/raw/UBTConnect.zDEV_Directory_CommunityBusinessBlocks.CommunityBusinessDetails_CoomingSoon.mvc.js#L265) |
| React | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

The actions of the screen and its blocks have no `Handle Error` node.

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `zDEV_Directory_CommunityBusinessBlocks` not in `migration/sources/shell/`. Handled errors: none.

### 11.2 React

None.

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `Layout_MainPages` | `UBTConnectLibrary` | [`components/layout/MainLayout/MainLayout.tsx`](../../../app/src/components/layout/MainLayout/MainLayout.tsx) | 0 |
| `LayoutRuntime_Top` | `NavigationHandler` | [`components/layout/LayoutRuntimeTop/LayoutRuntimeTop.tsx`](../../../app/src/components/layout/LayoutRuntimeTop/LayoutRuntimeTop.tsx) | 0 |
| `Columns_Two` | `UBTConnectLibrary` | [`components/ui/ColumnsTwo/ColumnsTwo.tsx`](../../../app/src/components/ui/ColumnsTwo/ColumnsTwo.tsx) | 0 |
| `Columns2` | `OutSystemsUI_2_23` | [`components/ui/Columns2/Columns2.tsx`](../../../app/src/components/ui/Columns2/Columns2.tsx) | 0 |
| `StaticInput` | `UBTConnectLibrary` | [`components/ui/StaticInput/StaticInput.tsx`](../../../app/src/components/ui/StaticInput/StaticInput.tsx) | 0 |
| `Icon` | `UBTConnectLibrary` | [`components/ui/Icon/Icon.tsx`](../../../app/src/components/ui/Icon/Icon.tsx) | 0 |
| `TextEllipsis` | `UBTConnectLibrary` | [`components/ui/TextEllipsis/TextEllipsis.tsx`](../../../app/src/components/ui/TextEllipsis/TextEllipsis.tsx) | 0 |
| `BlankSlate` | `OutSystemsUI_2_23` | [`components/ui/BlankSlate/BlankSlate.tsx`](../../../app/src/components/ui/BlankSlate/BlankSlate.tsx) | 0 |

### React

None.

### React calls reached only through shared code

Calls that React can make on this route, without a TST chain on this route. Every reference chain starts in a shared container, component or app code (`containers/`, `components/`, `platform/`, `legacy/`, `lib/`), not in the screen files. TST makes these calls on a user action of the shared block, which the capture did not record, or on another screen.

None.
