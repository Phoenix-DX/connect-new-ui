# PINRegister: server calls and user actions in OutSystems and React

This file compares the route `/UBTConnect/PINRegister` in OutSystems (TST) with the React app.
The tool `route-actions/tools/check_route.py` wrote this file on 2026-11-04.
The tool reads the code. It does not run the app.

The app shell is in [APP_SHELL.md](../APP_SHELL.md), not here.
- OutSystems app shell: `CommonUI_InsideLayout` with its blocks (TST survey), and the chains that start in a module action.
- React app shell: the code that `app/src/main.tsx` loads (router, `AppFrame`, app start, hosts).

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/PINRegister` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.App_PIN.PINRegister` | TST compiled code |
| UI flow | `App_PIN` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/PINRegister/PINRegisterPage.tsx`](../../app/src/pages/PINRegister/PINRegisterPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `ignore`, flag redirect none | `app/src/app/routes.ts` |
| Code read | OutSystems: 12 screen and block files of the route, 16 app shell files. React: 121 screen files | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 1: React makes 0, **1 missing** |
| User actions of the route | OutSystems: 3 diagrams. React: 5 diagrams |
| React calls of the screen that TST does not make | 1 (see [questions](#8-questions)) |
| Screen and blocks with a React port | 12 of 12 |
| Navigation targets found in React | 4 of 4 |
| App shell on this route | 8 calls; event bindings: OutSystems 5, React 7: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Screenshots

The screenshots come from the last parity run (`route.py parity`). The TST capture hides personal text with dots. The React build shows fictional mock data.

| State | TST (expected) | React (build) | Difference |
|---|---|---|---|
| `default`<br>390x844, mock `real`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/PINRegister/parity/default.expected.png" width="200" alt="default expected"> | <img src="../../migration/screens/PINRegister/parity/default.build.png" width="200" alt="default build"> | <img src="../../migration/screens/PINRegister/parity/default.diff.png" width="200" alt="default diff"> |
| `loading`<br>390x844, mock `loading`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/PINRegister/parity/loading.expected.png" width="200" alt="loading expected"> | <img src="../../migration/screens/PINRegister/parity/loading.build.png" width="200" alt="loading build"> | <img src="../../migration/screens/PINRegister/parity/loading.diff.png" width="200" alt="loading diff"> |
| `offline`<br>390x844, mock `error`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/PINRegister/parity/offline.expected.png" width="200" alt="offline expected"> | <img src="../../migration/screens/PINRegister/parity/offline.build.png" width="200" alt="offline build"> | <img src="../../migration/screens/PINRegister/parity/offline.diff.png" width="200" alt="offline diff"> |

## 4. Diagram

- A box on the left is the block or module of the action that calls the server (TST code).
- A line connects each call to the React action that makes the same call.
- The right column shows the React components that use each React action.
- A red box is a call that React does not make.

```mermaid
flowchart LR
  subgraph OS["OutSystems (TST compiled)"]
    subgraph OS_screen["Screen and its blocks"]
      o0["UBT_AppManager"]
    end
  end
  subgraph EP["Server calls (TST)"]
    e1["ActionAppManager_Logout"]
  end
  o0 --> e1
  classDef missing fill:#fde2e1,stroke:#c0392b,color:#7b241c
  classDef ok fill:#e3f4e8,stroke:#2e7d4f,color:#1d4d31
  class e1 missing
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
| [1](#511-block_pinregister_contentwrapper-event_pincode_registerpinregistrationsuccess) | `Block_PINRegister_ContentWrapper` | `pinRegistrationSuccess of Register` | `event_Pincode_RegisterPinRegistrationSuccess` | – | goes to Menu, URL getResumeLoginLink.uRLOut, URL client variable LastURL, HomeFeed; shows a message |
| [2](#512-block_pinregister_contentwrapper-event_pincode_registerpinregistrationerror) | `Block_PINRegister_ContentWrapper` | `pinRegistrationError of Register` | `event_Pincode_RegisterPinRegistrationError` | – | shows a message |
| [3](#513-pinregister-onclick_backtologin) | `PINRegister` | `onClick (HTML element)` | `onClick_BackToLogin` | – | calls AppManager_Logout, AppManager_SynchAppContext; goes to Login |

#### 5.1.1 Block_PINRegister_ContentWrapper: event_Pincode_RegisterPinRegistrationSuccess

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Block_PINRegister_ContentWrapper
  participant N as Navigation
  U->>B: pinRegistrationSuccess of Register → event_Pincode_RegisterPinRegistrationSuccess
  Note over B: message FeedbackMessage_AutoClose
  B->>N: go to Menu
  B->>N: go to URL getResumeLoginLink.uRLOut
  B->>N: go to URL client variable LastURL
  B->>N: go to HomeFeed
```

#### 5.1.2 Block_PINRegister_ContentWrapper: event_Pincode_RegisterPinRegistrationError

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Block_PINRegister_ContentWrapper
  U->>B: pinRegistrationError of Register → event_Pincode_RegisterPinRegistrationError
  Note over B: message FeedbackMessage_AutoClose
```

#### 5.1.3 PINRegister: onClick_BackToLogin

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as PINRegister
  participant S as Server (TST calls)
  participant N as Navigation
  U->>B: onClick (HTML element) → onClick_BackToLogin
  Note over B: via UBT_AppManager.appManager_Logout
  B->>S: AppManager_Logout()
  S-->>B: outputs not in the contract
  B->>S: AppManager_SynchAppContext(EspaceName)
  S-->>B: AppManager_ClientConfig, FirebaseRealTimeDB_Token, PermissionList, …
  B->>N: go to Login
```

### 5.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| [1](#521-oslink-onclick) | [`pages/PINRegister/PINRegisterPage.tsx:29`](../../app/src/pages/PINRegister/PINRegisterPage.tsx#L29) | `<OSLink>` | `onClick` | `inline` | – | goes to Login |
| [2](#522-pinregistercontent-onsetpin-newpincode) | [`pages/PINRegister/PINRegisterPage.tsx:59`](../../app/src/pages/PINRegister/PINRegisterPage.tsx#L59) | `<PinRegisterContent>` | `onSetPin` | `registration.onSetPin` | `newPinCode` | goes to Menu, URL resumeLink, URL lastUrl, HomeFeed; shows a message |
| [3](#523-pinregistercontent-onsetpin-other) | [`pages/PINRegister/PINRegisterPage.tsx:59`](../../app/src/pages/PINRegister/PINRegisterPage.tsx#L59) | `<PinRegisterContent>` | `onSetPin` | `registration.onSetPin` | `other` | shows a message |
| [4](#524-preventbacknavigation-onbacknavigationprevented) | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:80`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L80) | `<PreventBackNavigation>` | `onBackNavigationPrevented` | `redirectHome` | – | goes to HomeFeed |
| [5](#525-backnavigationhandler-onbacknavigation) | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:82`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L82) | `<BackNavigationHandler>` | `onBackNavigation` | `maybeRedirectHome` | – | goes to HomeFeed |

#### 5.2.1 OSLink: onClick

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as OSLink · PINRegisterPage.tsx
  participant N as Navigation
  U->>H: onClick → inline
  Note over H: via onClickBackToLogin()
  H->>N: go to Login
```

#### 5.2.2 PinRegisterContent: onSetPin (newPinCode)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as PinRegisterContent · PINRegisterPage.tsx
  participant N as Navigation
  U->>H: onSetPin → registration.onSetPin (newPinCode)
  Note over H: via onPinRegistrationError()
  Note over H: message { title: '', message: errorMessage, messageType: 'error', encodedHtml: true, extendedClass
  Note over H: via onPinRegistrationSuccess()
  Note over H: message { title: '', message: 'Your PIN has been changed.', messageType: 'success', encodedHtml: t
  H->>N: go to Menu
  H->>N: go to URL resumeLink
  H->>N: go to URL lastUrl
  H->>N: go to HomeFeed
```

#### 5.2.3 PinRegisterContent: onSetPin (other)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as PinRegisterContent · PINRegisterPage.tsx
  U->>H: onSetPin → registration.onSetPin (other)
  Note over H: via onPinRegistrationError()
  Note over H: message { title: '', message: errorMessage, messageType: 'error', encodedHtml: true, extendedClass
  Note over H: via onPinRegistrationError()
  Note over H: message { title: '', message: errorMessage, messageType: 'error', encodedHtml: true, extendedClass
```

#### 5.2.4 PreventBackNavigation: onBackNavigationPrevented

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as PreventBackNavigation · CommonUiLayout.tsx
  participant N as Navigation
  U->>H: onBackNavigationPrevented → redirectHome
  H->>N: go to HomeFeed
```

#### 5.2.5 BackNavigationHandler: onBackNavigation

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
| 1 | `UBT_AppManager/ActionAppManager_Logout` | server action | `UBT_AppManager` | onClick in PINRegister → PINRegister.onClick_BackToLogin → UBT_AppManager.appManager_Logout → server AppManager_Logout | no | – | – | **missing** |

## 7. Missing in React

- Call `UBT_AppManager/ActionAppManager_Logout`. Chain on TST: onClick in PINRegister → PINRegister.onClick_BackToLogin → UBT_AppManager.appManager_Logout → server AppManager_Logout.
  - No React code makes this call.
  - Note in [`platform/auth/mockAuth.ts:24`](../../app/src/platform/auth/mockAuth.ts#L24): "/** The server logout of AppManager_Logout: no call (app-shell spec 10). */"
  - Note in [`platform/session/auth.ts:84`](../../app/src/platform/session/auth.ts#L84): "/** Connect_Logout (UC:1062-1066): Cache_InvalidateEverything, then AppManager_Logout (AM:3649-3720): server logout"
  - Note in [`platform/session/pin.ts:66`](../../app/src/platform/session/pin.ts#L66): "/** PIN_Delete(UserId, AppName), part of AppManager_Logout (AM:3712). */"

## 8. Questions

1. React calls `/api/UBTConnect_Utils/CacheControl_Policies/DataActionGetCacheInfo` from `fetchPolicies()` [`api/app/repository.ts:54`](../../app/src/api/app/repository.ts#L54) (shell + page). TST PINRegister has no chain to this call. Does the call belong to this route?

## 9. Method

1. **OutSystems (TST).** The tool reads `facts.json` and the compiled code of `migration/screens/PINRegister/analysis/`:
   - the rendered files;
   - each server call with its chain of client actions, and the calls that TST made in the capture;
   - the effects of each user action.
2. **Route and app shell.** OutSystems: a chain belongs to the app shell when it starts in `CommonUI_InsideLayout`, one of its blocks, or a module action. React: a binding belongs to the app shell when its file is in the code that `main.tsx` loads.
3. **MCP (DEV).** The tool reads the UI flow with `getScreenNames`. TST wins when DEV is different.
4. **React.** `react_calls.mjs` reads the app shell from `app/src/main.tsx` and the screen from its `<Route>Page.tsx`. It counts only the code that the app uses.
5. **Match.** `callAction(M, A)` gives `/api/M/A`. The `x-os-paths` of `app/src/api/openapi.yaml` give the TST call. The status is `implemented` when the TST call is the same. Else the status is `missing`.

Limit: a name or a call match does not prove the same behaviour. The parity checks of the migration compare the behaviour.
