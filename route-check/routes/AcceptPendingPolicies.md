# AcceptPendingPolicies: OutSystems (TST) and React

The route `/UBTConnect/AcceptPendingPolicies`, read from the TST compiled code and from the React code by `tools/route-check/check_route.py` on 2026-11-06. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/AcceptPendingPolicies/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Static check.** This route has no TST capture (`migration/screens/AcceptPendingPolicies/no-capture.json`).

- The OutSystems facts come from the compiled code of the screen and of its static closure (TST survey).
- The code is in `migration/sources/runtime/` and in `migration/sources/raw/` (the captured routes).
- The tool observed no call and has no screenshot.
- Closure: 47 files, 0 without compiled code.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/AcceptPendingPolicies` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.App_Policies.AcceptPendingPolicies` | TST compiled code |
| UI flow | `App_Policies` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx`](../../app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | no parity run | `route.py parity` |
| Code read | OutSystems: 2 files of the UI flow, 2 shared blocks, 43 app shell files. React: 131 files in the closure of the page | TST survey closure and compiled code (static), `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 1: React makes 1, **0 missing** |
| Differences found | **0** (see [section 3](#3-differences-found)) |
| Questions | 0 (see [section 4](#4-questions)) |
| React calls reached only through shared code | 0: see the last section |
| User actions of the route (own code) | OutSystems: 4. React: 1 |
| Screen and blocks of the UI flow with a React port | 2 of 2 |
| Navigation targets found in React | 0 of 0 |
| Shared blocks and components on the route | OutSystems 2, React 1 with user actions: see the last section |
| App shell on this route | 4 calls: see [APP_SHELL.md](../APP_SHELL.md) |

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
| 1 | `UBTConnect/App_Policies/Policy_Custom_AcceptPendingPolicies/DataActionGetPendingPolicies` | data action | `Policy_Custom_AcceptPendingPolicies` | Policy_Custom_AcceptPendingPolicies.OnParametersChanged → Policy_Custom_AcceptPendingPolicies.onParametersChanged → Policy_Custom_AcceptPendingPolicies.DataActionGetPendingPolicies<br>Policy_Custom_AcceptPendingPolicies fetch at start → Policy_Custom_AcceptPendingPolicies.DataActionGetPendingPolicies | no capture | `fetchPendingPolicies()` [`api/policy/repository.ts:17`](../../app/src/api/policy/repository.ts#L17) (page) | `AcceptPendingPolicies → usePendingPoliciesForm → usePendingPoliciesQuery → fetchPendingPolicies`<br>[`pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx`](../../app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx) | implemented |

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `AcceptPendingPolicies` | `acceptedAll of AcceptPendingPolicies` | `acceptPendingPoliciesAcceptedAll` | – | goes to previous screen |
| 2 | `AcceptPendingPolicies` | `networkError of AcceptPendingPolicies` | `acceptPendingPoliciesNetworkError` | – | shows a message |
| 3 | `Policy_Custom_AcceptPendingPolicies` | `clicked of CustomText` | `onClickPolicy` | – | opens an external link |
| 4 | `Policy_Custom_AcceptPendingPolicies` | `buttonOnClick of Button` | `continueOnClick` | – | calls AcceptPolicies |

### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx:49`](../../app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx#L49) | `<PendingPoliciesForm>` | `onPolicyClick` | `form.onClickPolicy` | – | opens an external link |

## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in `migration/sources/runtime/` and in `migration/sources/raw/` (the shared store of the captured routes; static check).

### 7.1 OutSystems (TST)

Screen inputs: none. `setInputs` of `AcceptPendingPolicies` reads no input.

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
| `AcceptPendingPolicies` | OnInitialize ([`UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:774`](../../migration/sources/runtime/UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js#L774)) | `onInitialize` | 1. Execute Action: AppManager_GetCachedUserInfo ([`L621`](../../migration/sources/runtime/UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js#L621))<br>2. UserCountry = AppManager_GetCachedUserInfo.UserInformation.CountryCode ([`L625`](../../migration/sources/runtime/UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js#L625)) |
| `Policy_Custom_AcceptPendingPolicies` | OnParametersChanged ([`UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:1419`](../../migration/sources/runtime/UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js#L1419)) | `onParametersChanged` | 1. Refresh Query: GetPendingPolicies ([`L897`](../../migration/sources/runtime/UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js#L897)) |

<details><summary>Sequence diagrams of the screen event handlers (1)</summary>

The diagram keeps the order of the steps in the compiled action. The code does not give the order of the handlers of different blocks.

#### 8.1.1 AcceptPendingPolicies: OnInitialize

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as AcceptPendingPolicies
  R->>B: OnInitialize → onInitialize
  B->>B: action AppManager_GetCachedUserInfo
  Note over B: UserCountry = AppManager_GetCachedUserInfo.UserInformation.CountryCode
```

</details>

Data actions and aggregates. The tool reads `dataFetchDependenciesOriginal`: `0` is a fetch when the block opens, `-1` is a fetch only on demand (a `Refresh Query` step). `Read by` lists the child block inputs, conditions, text widgets and actions that read the result.

| Block | Data action | Fetch | Read by | Place |
|---|---|---|---|---|
| `Policy_Custom_AcceptPendingPolicies` | `GetPendingPolicies` | at start (`0`) | `shown if` ([`UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:194`](../../migration/sources/runtime/UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js#L194)), `Columns_Two.source` ([`UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:230`](../../migration/sources/runtime/UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js#L230)), `view` ([`UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:238`](../../migration/sources/runtime/UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js#L238)), `text` ([`UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:251`](../../migration/sources/runtime/UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js#L251)), `shown if (Columns_Two)` ([`UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:252`](../../migration/sources/runtime/UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js#L252)), `CustomText.In_Text` ([`UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:375`](../../migration/sources/runtime/UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js#L375)), `CustomText.value` ([`UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:432`](../../migration/sources/runtime/UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js#L432)), `shown if (CustomText)` ([`UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:446`](../../migration/sources/runtime/UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js#L446)), `action toggleCheckBox` ([`UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:928`](../../migration/sources/runtime/UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js#L928)), `action continueOnClick` ([`UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:962`](../../migration/sources/runtime/UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js#L962)), `action getPendingPoliciesOnAfterFetch` ([`UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:1148`](../../migration/sources/runtime/UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js#L1148)), `action selectCheckboxOnChange` ([`UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:1192`](../../migration/sources/runtime/UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js#L1192)), `action onClickPolicy` ([`UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:1231`](../../migration/sources/runtime/UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js#L1231)), `action detailsOnClick` ([`UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:1281`](../../migration/sources/runtime/UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js#L1281)), `action selectAllCheckboxOnChange` ([`UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:1328`](../../migration/sources/runtime/UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js#L1328)) | [`UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:804`](../../migration/sources/runtime/UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js#L804) |

### 8.2 React

Effects (`useEffect`, `useLayoutEffect`) of the screen files, and the effects of shared components that make a call, a navigation or a message.

| File | Hook (function) | Dependencies | Cleanup | Effects | Place |
|---|---|---|---|---|---|
| `usePendingPoliciesForm.ts` | `useLayoutEffect` (`usePendingPoliciesForm`) | `none (every render)` | no | none | [`pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:53`](../../app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts#L53) |
| `usePendingPoliciesForm.ts` | `useLayoutEffect` (`usePendingPoliciesForm`) | `none (every render)` | no | none | [`pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:68`](../../app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts#L68) |
| `usePendingPoliciesForm.ts` | `useEffect` (`usePendingPoliciesForm`) | `[fetchedAt, fetchedEmpty]` | no | none | [`pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:77`](../../app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts#L77) |
| `usePendingPoliciesForm.ts` | `useEffect` (`usePendingPoliciesForm`) | `[]` | yes | none | [`pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:85`](../../app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts#L85) |

Queries. A query fetches when its component mounts and when its key changes. `Read by` lists what reads the result in the same file.

| File | Hook (function) | Calls | Read by | Place |
|---|---|---|---|---|
| `usePendingPoliciesForm.ts` | `usePendingPoliciesQuery` (`usePendingPoliciesForm`) | `/api/UBTConnect/Policy_Custom_AcceptPendingPolicies/DataActionGetPendingPolicies` | `expression` ([`L59`](../../app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts#L59)), `setList()` ([`L60`](../../app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts#L60)) | [`pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:56`](../../app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts#L56) |

## 9. Client state

Client variables and browser storage that the route reads or writes. Other screens can read this state.

### 9.1 OutSystems (TST)

| Block | Operation | Variable | Places |
|---|---|---|---|
| `AcceptPendingPolicies` | set | `UBTConnect.App_Policies_HasPolicyToAccept` | [`UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:671`](../../migration/sources/runtime/UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js#L671) |

### 9.2 React

| File | Operation | Variable or key | Place |
|---|---|---|---|
| `useAcceptPendingPolicies.ts` | `clientVar.get` | `UBTConnect_Utils.UniqueCacheKey` | [`pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts:64`](../../app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts#L64) |
| `useAcceptPendingPolicies.ts` | `clientVar.set` | `UBTConnect.App_Policies_HasPolicyToAccept` | [`pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts:68`](../../app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts#L68) |

## 10. Access

Who can open the route, and the role checks in the screen and block code.

| Side | Rule | Place |
|---|---|---|
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:799`](../../migration/sources/runtime/UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js#L799) |
| React | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

| Block | Action | Error | Steps of the handler |
|---|---|---|---|
| `Policy_Custom_AcceptPendingPolicies` | `continueOnClick` | `CommunicationException` ([`UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:1016`](../../migration/sources/runtime/UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js#L1016)) | 1. Trigger Event: NetworkError ([`L1024`](../../migration/sources/runtime/UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js#L1024)) |

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `App_Policies` [`UBTConnect.App_Policies.controller.js:12`](../../migration/sources/shell/UBTConnect.App_Policies.controller.js#L12). Handled errors: none, it goes to the next flow.
2. UI flow `App_Common` [`UBTConnect.App_Common.controller.js:12`](../../migration/sources/shell/UBTConnect.App_Common.controller.js#L12). Handled errors: `BubbleCommunicationException` ([`UBTConnect.App_Common.controller.js:31`](../../migration/sources/shell/UBTConnect.App_Common.controller.js#L31)), `CommunicationException` ([`UBTConnect.App_Common.controller.js:46`](../../migration/sources/shell/UBTConnect.App_Common.controller.js#L46)), `SecurityException` ([`UBTConnect.App_Common.controller.js:61`](../../migration/sources/shell/UBTConnect.App_Common.controller.js#L61)), `AllExceptions` ([`UBTConnect.App_Common.controller.js:91`](../../migration/sources/shell/UBTConnect.App_Common.controller.js#L91)).

### 11.2 React

| File | Kind | Function | Effects | Place |
|---|---|---|---|---|
| `useAcceptPendingPolicies.ts` | flow handler | `acceptedAll` | none | [`pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts:73`](../../app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts#L73) |
| `usePendingPoliciesForm.ts` | try/catch | `continueOnClick` | none | [`pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:119`](../../app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts#L119) |

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `FixedFooter` | `UBTConnectLibrary` | [`components/ui/FixedFooter/FixedFooter.tsx`](../../app/src/components/ui/FixedFooter/FixedFooter.tsx) | 0 |
| `Separator` | `OutSystemsUI_2_23` | [`components/ui/Separator/Separator.tsx`](../../app/src/components/ui/Separator/Separator.tsx) | 0 |

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
