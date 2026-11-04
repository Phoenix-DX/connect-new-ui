# MyEntertaining: server calls and user actions in OutSystems and React

This file compares the route `/UBTConnect/MyEntertaining` in OutSystems (TST) with the React app.
The tool `route-actions/tools/check_route.py` wrote this file on 2026-11-04.
The tool reads the code. It does not run the app.

The app shell is in [APP_SHELL.md](../APP_SHELL.md), not here.
- OutSystems app shell: `CommonUI_InsideLayout` with its blocks (TST survey), and the chains that start in a module action.
- React app shell: the code that `app/src/main.tsx` loads (router, `AppFrame`, app start, hosts).

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/MyEntertaining` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.Calendar.MyEntertaining` | TST compiled code |
| UI flow | `Calendar` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/MyEntertaining/MyEntertainingPage.tsx`](../../app/src/pages/MyEntertaining/MyEntertainingPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Code read | OutSystems: 4 screen and block files of the route, 21 app shell files. React: 128 screen files | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 2: React makes 2, **0 missing** |
| User actions of the route | OutSystems: 4 diagrams. React: 6 diagrams |
| React calls of the screen that TST does not make | 1 (see [questions](#8-questions)) |
| Screen and blocks with a React port | 4 of 4 |
| Navigation targets found in React | 0 of 0 |
| App shell on this route | 8 calls; event bindings: OutSystems 10, React 7: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Screenshots

The screenshots come from the last parity run (`route.py parity`). The TST capture hides personal text with dots. The React build shows fictional mock data.

| State | TST (expected) | React (build) | Difference |
|---|---|---|---|
| `default`<br>390x844, mock `real`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/MyEntertaining/parity/default.expected.png" width="200" alt="default expected"> | <img src="../../migration/screens/MyEntertaining/parity/default.build.png" width="200" alt="default build"> | <img src="../../migration/screens/MyEntertaining/parity/default.diff.png" width="200" alt="default diff"> |
| `loading`<br>390x844, mock `loading`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/MyEntertaining/parity/loading.expected.png" width="200" alt="loading expected"> | <img src="../../migration/screens/MyEntertaining/parity/loading.build.png" width="200" alt="loading build"> | <img src="../../migration/screens/MyEntertaining/parity/loading.diff.png" width="200" alt="loading diff"> |
| `offline`<br>390x844, mock `error`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/MyEntertaining/parity/offline.expected.png" width="200" alt="offline expected"> | <img src="../../migration/screens/MyEntertaining/parity/offline.build.png" width="200" alt="offline build"> | <img src="../../migration/screens/MyEntertaining/parity/offline.diff.png" width="200" alt="offline diff"> |

## 4. Diagram

- A box on the left is the block or module of the action that calls the server (TST code).
- A line connects each call to the React action that makes the same call.
- The right column shows the React components that use each React action.
- A red box is a call that React does not make.

```mermaid
flowchart LR
  subgraph OS["OutSystems (TST compiled)"]
    subgraph OS_screen["Screen and its blocks"]
      o0["Embedded_MyEntertaining"]
    end
  end
  subgraph EP["Server calls (TST)"]
    e1["DataActionGetEntertainingConfig"]
    e2["ActionAppManager_Get_UserIdToken"]
  end
  subgraph RE["React actions"]
    subgraph RE_page["Screen"]
      r3["fetchEntertainingConfig()"]
      r4["fetchUserIdToken()"]
    end
  end
  subgraph RC["React components"]
    c5["EntertainingCalendar"]
  end
  r3 --- c5
  r4 --- c5
  o0 --> e1
  o0 --> e2
  e1 --- r3
  e2 --- r4
  classDef missing fill:#fde2e1,stroke:#c0392b,color:#7b241c
  classDef ok fill:#e3f4e8,stroke:#2e7d4f,color:#1d4d31
  class e1,e2 ok
```

## 5. User actions

The two lists are independent: the OutSystems list comes from the TST compiled code, the React list from the React code. The tool does not map one list to the other.

- **OutSystems:** each event binding of the compiled views (`<event>$Action: function` of a child block or widget, `on<Event>: function` of an HTML element) with its handler.
- **React:** each JSX attribute `on<Event>={handler}` with its handler.
- Both lists keep only the bindings whose handler has an effect: a server call, a navigation, an external link, a message or a confirm dialog. The tool follows the called functions 3 levels deep.
- When the handler has branches in the code (`switch` case, `if` with `===`), each branch has its own diagram. The branch name is the constant of the condition. `other` is the last `else` or `default`.
- An arrow to the server gives the inputs of the call, the return arrow its outputs (contract `app/src/api/openapi.yaml`).

### 5.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| [1](#511-myentertaining-handle_navback) | `MyEntertaining` | `onNavBack of Embedded` | `handle_NavBack` | – | goes to previous screen |
| [2](#512-myentertaining_embedded-handle_error) | `MyEntertaining_Embedded` | `onError of MyEntertaining` | `handle_Error` | – | shows a message |
| [3](#513-myentertaining_embedded-handle_openmap) | `MyEntertaining_Embedded` | `onOpenMap of MyEntertaining` | `handle_OpenMap` | – | opens an external link |
| [4](#514-layout_detailpage-onclick_backnavigation) | `Layout_DetailPage` | `click of Icon` | `onClick_BackNavigation` | – | goes to previous screen |

#### 5.1.1 MyEntertaining: handle_NavBack

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as MyEntertaining
  participant N as Navigation
  U->>B: onNavBack of Embedded → handle_NavBack
  B->>N: go to previous screen
```

#### 5.1.2 MyEntertaining_Embedded: handle_Error

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as MyEntertaining_Embedded
  U->>B: onError of MyEntertaining → handle_Error
  Note over B: message FeedbackMessage_AutoClose
```

#### 5.1.3 MyEntertaining_Embedded: handle_OpenMap

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as MyEntertaining_Embedded
  participant X as External link
  U->>B: onOpenMap of MyEntertaining → handle_OpenMap
  B->>X: OpenInApp_OpenExternalLink
```

#### 5.1.4 Layout_DetailPage: onClick_BackNavigation

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Layout_DetailPage
  participant N as Navigation
  U->>B: click of Icon → onClick_BackNavigation
  B->>N: go to previous screen
```

### 5.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| [1](#521-embedded_myentertaining-onrefreshtoken) | [`pages/MyEntertaining/MyEntertainingPage.tsx:35`](../../app/src/pages/MyEntertaining/MyEntertainingPage.tsx#L35) | `<Embedded_MyEntertaining>` | `onRefreshToken` | `calendar.refreshToken` | – | calls ActionAppManager_Get_UserIdToken |
| [2](#522-embedded_myentertaining-ononerror) | [`pages/MyEntertaining/MyEntertainingPage.tsx:36`](../../app/src/pages/MyEntertaining/MyEntertainingPage.tsx#L36) | `<Embedded_MyEntertaining>` | `onOnError` | `flow.onError` | – | shows a message |
| [3](#523-embedded_myentertaining-ononopenmap) | [`pages/MyEntertaining/MyEntertainingPage.tsx:37`](../../app/src/pages/MyEntertaining/MyEntertainingPage.tsx#L37) | `<Embedded_MyEntertaining>` | `onOnOpenMap` | `flow.onOpenMap` | – | opens an external link |
| [4](#524-myentertaining_embedded-onnavback) | [`pages/MyEntertaining/MyEntertainingPage.tsx:59`](../../app/src/pages/MyEntertaining/MyEntertainingPage.tsx#L59) | `<MyEntertaining_Embedded>` | `onNavBack` | `navigateBack` | – | goes to previous screen |
| [5](#525-preventbacknavigation-onbacknavigationprevented) | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:80`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L80) | `<PreventBackNavigation>` | `onBackNavigationPrevented` | `redirectHome` | – | goes to HomeFeed |
| [6](#526-backnavigationhandler-onbacknavigation) | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:82`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L82) | `<BackNavigationHandler>` | `onBackNavigation` | `maybeRedirectHome` | – | goes to HomeFeed |

#### 5.2.1 Embedded_MyEntertaining: onRefreshToken

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as Embedded_MyEntertaining · MyEntertainingPage.tsx
  participant A as Server (React api)
  U->>H: onRefreshToken → calendar.refreshToken
  Note over H: via fetchUserIdToken()
  H->>A: ActionAppManager_Get_UserIdToken(EspaceName)
  A-->>H: IdToken
```

#### 5.2.2 Embedded_MyEntertaining: onOnError

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as Embedded_MyEntertaining · MyEntertainingPage.tsx
  U->>H: onOnError → flow.onError
  Note over H: message { title: '', message, messageType: 'info', encodedHtml: true, extendedClass: '', delayMs: 
```

#### 5.2.3 Embedded_MyEntertaining: onOnOpenMap

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as Embedded_MyEntertaining · MyEntertainingPage.tsx
  participant X as External link
  U->>H: onOnOpenMap → flow.onOpenMap
  H->>X: openInApp_OpenExternalLink
```

#### 5.2.4 MyEntertaining_Embedded: onNavBack

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as MyEntertaining_Embedded · MyEntertainingPage.tsx
  participant N as Navigation
  U->>H: onNavBack → navigateBack
  H->>N: go to previous screen
```

#### 5.2.5 PreventBackNavigation: onBackNavigationPrevented

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as PreventBackNavigation · CommonUiLayout.tsx
  participant N as Navigation
  U->>H: onBackNavigationPrevented → redirectHome
  H->>N: go to HomeFeed
```

#### 5.2.6 BackNavigationHandler: onBackNavigation

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as BackNavigationHandler · CommonUiLayout.tsx
  participant N as Navigation
  U->>H: onBackNavigation → maybeRedirectHome
  Note over H: via actionRedirectHome()
  H->>N: go to HomeFeed
```

## 6. Server calls

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

## 7. Missing in React

None.

## 8. Questions

1. React calls `/api/UBTConnect_Utils/CacheControl_Policies/DataActionGetCacheInfo` from `fetchPolicies()` [`api/app/repository.ts:54`](../../app/src/api/app/repository.ts#L54) (shell + page). TST MyEntertaining has no chain to this call. Does the call belong to this route?

## 9. Method

1. **OutSystems (TST).** The tool reads `facts.json` and the compiled code of `migration/screens/MyEntertaining/analysis/`:
   - the rendered files;
   - each server call with its chain of client actions, and the calls that TST made in the capture;
   - the effects of each user action.
2. **Route and app shell.** OutSystems: a chain belongs to the app shell when it starts in `CommonUI_InsideLayout`, one of its blocks, or a module action. React: a binding belongs to the app shell when its file is in the code that `main.tsx` loads.
3. **MCP (DEV).** The tool reads the UI flow with `getScreenNames`. TST wins when DEV is different.
4. **React.** `react_calls.mjs` reads the app shell from `app/src/main.tsx` and the screen from its `<Route>Page.tsx`. It counts only the code that the app uses.
5. **Match.** `callAction(M, A)` gives `/api/M/A`. The `x-os-paths` of `app/src/api/openapi.yaml` give the TST call. The status is `implemented` when the TST call is the same. Else the status is `missing`.

Limit: a name or a call match does not prove the same behaviour. The parity checks of the migration compare the behaviour.
