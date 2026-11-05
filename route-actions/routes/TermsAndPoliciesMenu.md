# TermsAndPoliciesMenu: OutSystems (TST) and React

The route `/UBTConnect/TermsAndPoliciesMenu`, read from the TST compiled code and from the React code by `route-actions/tools/check_route.py` on 2026-11-05. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/TermsAndPoliciesMenu/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/TermsAndPoliciesMenu` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.App_Menu.TermsAndPoliciesMenu` | TST compiled code |
| UI flow | `App_Menu` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/TermsAndPoliciesMenu/TermsAndPoliciesMenuPage.tsx`](../../app/src/pages/TermsAndPoliciesMenu/TermsAndPoliciesMenuPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | [`migration/screens/TermsAndPoliciesMenu/parity`](../../migration/screens/TermsAndPoliciesMenu/parity) | `route.py parity` |
| Code read | OutSystems: 2 files of the UI flow, 3 shared blocks, 28 app shell files. React: 104 files in the closure of the page | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 0: React makes 0, **0 missing** |
| Differences found | **0** (see [section 3](#3-differences-found)) |
| Questions | 0 (see [section 4](#4-questions)) |
| User actions of the route (own code) | OutSystems: 1. React: 2 |
| Screen and blocks of the UI flow with a React port | 2 of 2 |
| Navigation targets found in React | 0 of 0 |
| Shared blocks and components on the route | OutSystems 3, React 1 with user actions: see the last section |
| App shell on this route | 9 calls: see [APP_SHELL.md](../APP_SHELL.md) |

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
| [1](#611-termsandpoliciesmenu-onclick_menuoption-termsandconditionsnamevar) | `TermsAndPoliciesMenu` | `onClick_MenuOption of List` | `onClick_MenuOption` | `termsAndConditionsNameVar` | opens an external link; shows a message |
| [2](#612-termsandpoliciesmenu-onclick_menuoption-privacypolicynamevar) | `TermsAndPoliciesMenu` | `onClick_MenuOption of List` | `onClick_MenuOption` | `privacyPolicyNameVar` | opens an external link; shows a message |

<details><summary>2 diagrams (handlers with two or more effects)</summary>

#### 6.1.1 TermsAndPoliciesMenu: onClick_MenuOption (termsAndConditionsNameVar)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as TermsAndPoliciesMenu
  participant X as External link
  U->>B: onClick_MenuOption of List → onClick_MenuOption (termsAndConditionsNameVar)
  Note over B: via UBTConnect_Utils.openPolicy
  B->>X: JSUtils_PageOpenInNewTab
  Note over B: message errorMessage
```

#### 6.1.2 TermsAndPoliciesMenu: onClick_MenuOption (privacyPolicyNameVar)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as TermsAndPoliciesMenu
  participant X as External link
  U->>B: onClick_MenuOption of List → onClick_MenuOption (privacyPolicyNameVar)
  Note over B: via UBTConnect_Utils.openPolicy
  B->>X: JSUtils_PageOpenInNewTab
  Note over B: message errorMessage
```


</details>


### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`pages/TermsAndPoliciesMenu/TermsAndPoliciesMenuPage.tsx:23`](../../app/src/pages/TermsAndPoliciesMenu/TermsAndPoliciesMenuPage.tsx#L23) | `<DetailLayout>` | `onBack` | `navigateBack` | – | goes to previous screen |
| [2](#622-menulist-ononclickmenuoption-terms_and_conditions_name) | [`pages/TermsAndPoliciesMenu/TermsAndPoliciesMenuPage.tsx:27`](../../app/src/pages/TermsAndPoliciesMenu/TermsAndPoliciesMenuPage.tsx#L27) | `<MenuList>` | `onOnClickMenuOption` | `onClickMenuOption` | `TERMS_AND_CONDITIONS_NAME` | opens an external link; shows a message |
| [3](#623-menulist-ononclickmenuoption-privacy_policy_name) | [`pages/TermsAndPoliciesMenu/TermsAndPoliciesMenuPage.tsx:27`](../../app/src/pages/TermsAndPoliciesMenu/TermsAndPoliciesMenuPage.tsx#L27) | `<MenuList>` | `onOnClickMenuOption` | `onClickMenuOption` | `PRIVACY_POLICY_NAME` | opens an external link; shows a message |

<details><summary>2 diagrams (handlers with two or more effects)</summary>

#### 6.2.2 MenuList: onOnClickMenuOption (TERMS_AND_CONDITIONS_NAME)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as MenuList · TermsAndPoliciesMenuPage.tsx
  participant X as External link
  U->>H: onOnClickMenuOption → onClickMenuOption (TERMS_AND_CONDITIONS_NAME)
  Note over H: via openPolicy()
  Note over H: message errorMessage
  H->>X: jSUtils_PageOpenInNewTab
```

#### 6.2.3 MenuList: onOnClickMenuOption (PRIVACY_POLICY_NAME)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as MenuList · TermsAndPoliciesMenuPage.tsx
  participant X as External link
  U->>H: onOnClickMenuOption → onClickMenuOption (PRIVACY_POLICY_NAME)
  Note over H: via openPolicy()
  Note over H: message errorMessage
  H->>X: jSUtils_PageOpenInNewTab
```


</details>


## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in `migration/screens/TermsAndPoliciesMenu/analysis/sources/raw/`.

### 7.1 OutSystems (TST)

Screen inputs: none. `setInputs` of `TermsAndPoliciesMenu` reads no input.

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
| `TermsAndPoliciesMenu` | OnInitialize ([`UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js:503`](../../migration/screens/TermsAndPoliciesMenu/analysis/sources/raw/UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js#L503)) | `screenEvent_OnInitialize` | 1. JavaScript: IsViewRestoredFromCache ([`L324`](../../migration/screens/TermsAndPoliciesMenu/analysis/sources/raw/UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js#L324))<br>2. Check if IsViewRestoredFromCache IsRestoredFromCache ([`L331`](../../migration/screens/TermsAndPoliciesMenu/analysis/sources/raw/UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js#L331))<br>3. If isViewRestoredFromCache.isRestoredFromCache ([`L332`](../../migration/screens/TermsAndPoliciesMenu/analysis/sources/raw/UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js#L332))<br>4. Else ([`L334`](../../migration/screens/TermsAndPoliciesMenu/analysis/sources/raw/UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js#L334))<br>5. Execute Action: ListClear ([`L336`](../../migration/screens/TermsAndPoliciesMenu/analysis/sources/raw/UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js#L336))<br>6. Execute Action: ListAppend ([`L339`](../../migration/screens/TermsAndPoliciesMenu/analysis/sources/raw/UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js#L339))<br>7. Execute Action: ListAppend2 ([`L347`](../../migration/screens/TermsAndPoliciesMenu/analysis/sources/raw/UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js#L347)) |

<details><summary>Sequence diagrams of the screen event handlers (1)</summary>

The diagram keeps the order of the steps in the compiled action. The code does not give the order of the handlers of different blocks.

#### 8.1.1 TermsAndPoliciesMenu: OnInitialize

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as TermsAndPoliciesMenu
  R->>B: OnInitialize → screenEvent_OnInitialize
  B->>B: JavaScript IsViewRestoredFromCache
  Note over B: Check if IsViewRestoredFromCache IsRestoredFromCache
  alt isViewRestoredFromCache.isRestoredFromCache
    Note over B: no step
  else other
    B->>B: action ListClear
    B->>B: action ListAppend
    B->>B: action ListAppend2
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

None.

### 9.2 React

None.

## 10. Access

Who can open the route, and the role checks in the screen and block code.

| Side | Rule | Place |
|---|---|---|
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js:528`](../../migration/screens/TermsAndPoliciesMenu/analysis/sources/raw/UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js#L528) |
| React | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |

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
| `Columns_Three` | `UBTConnectLibrary` | [`components/ui/ColumnsThree/ColumnsThree.tsx`](../../app/src/components/ui/ColumnsThree/ColumnsThree.tsx) | 0 |
| `Columns3` | `OutSystemsUI_2_23` | [`components/ui/Columns3/Columns3.tsx`](../../app/src/components/ui/Columns3/Columns3.tsx) | 0 |

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

