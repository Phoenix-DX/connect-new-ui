# PINUnlock: server calls and user actions in OutSystems and React

This file compares the route `/UBTConnect/PINUnlock` in OutSystems (TST) with the React app.
The tool `route-actions/tools/check_route.py` wrote this file on 2026-11-04.
The tool reads the code. It does not run the app.

The app shell is in [APP_SHELL.md](../APP_SHELL.md), not here.
- OutSystems app shell: `CommonUI_InsideLayout` with its blocks (TST survey), and the chains that start in a module action.
- React app shell: the code that `app/src/main.tsx` loads (router, `AppFrame`, app start, hosts).

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/PINUnlock` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.App_PIN.PINUnlock` | TST compiled code |
| UI flow | `App_PIN` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/PINUnlock/PINUnlockPage.tsx`](../../app/src/pages/PINUnlock/PINUnlockPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `ignore`, flag redirect none | `app/src/app/routes.ts` |
| Code read | OutSystems: 1 screen and block files of the route, 31 app shell files. React: 97 screen files | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 0: React makes 0, **0 missing** |
| User actions of the route | OutSystems: 1 diagrams. React: 3 diagrams |
| React calls of the screen that TST does not make | 0 (see [questions](#8-questions)) |
| Screen and blocks with a React port | 1 of 1 |
| Navigation targets found in React | 0 of 0 |
| App shell on this route | 9 calls; event bindings: OutSystems 11, React 7: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Screenshots

The screenshots come from the last parity run (`route.py parity`). The TST capture hides personal text with dots. The React build shows fictional mock data.

| State | TST (expected) | React (build) | Difference |
|---|---|---|---|
| `default`<br>390x844, mock `real`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/PINUnlock/parity/default.expected.png" width="200" alt="default expected"> | <img src="../../migration/screens/PINUnlock/parity/default.build.png" width="200" alt="default build"> | <img src="../../migration/screens/PINUnlock/parity/default.diff.png" width="200" alt="default diff"> |
| `loading`<br>390x844, mock `loading`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/PINUnlock/parity/loading.expected.png" width="200" alt="loading expected"> | <img src="../../migration/screens/PINUnlock/parity/loading.build.png" width="200" alt="loading build"> | <img src="../../migration/screens/PINUnlock/parity/loading.diff.png" width="200" alt="loading diff"> |
| `offline`<br>390x844, mock `error`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/PINUnlock/parity/offline.expected.png" width="200" alt="offline expected"> | <img src="../../migration/screens/PINUnlock/parity/offline.build.png" width="200" alt="offline build"> | <img src="../../migration/screens/PINUnlock/parity/offline.diff.png" width="200" alt="offline diff"> |

## 4. Diagram

None. The route makes no server call on TST.

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
| [1](#511-pinunlock-block_pinunlockunlock) | `PINUnlock` | `unlock of PINUnlock` | `block_PINUnlockUnlock` | – | goes to URL getResumeLoginLink.uRLOut, URL client variable LastURL |

#### 5.1.1 PINUnlock: block_PINUnlockUnlock

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as PINUnlock
  participant N as Navigation
  U->>B: unlock of PINUnlock → block_PINUnlockUnlock
  B->>N: go to URL getResumeLoginLink.uRLOut
  B->>N: go to URL client variable LastURL
```

### 5.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| [1](#521-blockpinunlock-onunlock) | [`pages/PINUnlock/PINUnlockPage.tsx:14`](../../app/src/pages/PINUnlock/PINUnlockPage.tsx#L14) | `<BlockPinUnlock>` | `onUnlock` | `onUnlock` | – | goes to URL resumeLink, URL lastUrl, HomeFeed |
| [2](#522-preventbacknavigation-onbacknavigationprevented) | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:80`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L80) | `<PreventBackNavigation>` | `onBackNavigationPrevented` | `redirectHome` | – | goes to HomeFeed |
| [3](#523-backnavigationhandler-onbacknavigation) | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:82`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L82) | `<BackNavigationHandler>` | `onBackNavigation` | `maybeRedirectHome` | – | goes to HomeFeed |

#### 5.2.1 BlockPinUnlock: onUnlock

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as BlockPinUnlock · PINUnlockPage.tsx
  participant N as Navigation
  U->>H: onUnlock → onUnlock
  H->>N: go to URL resumeLink
  H->>N: go to URL lastUrl
  H->>N: go to HomeFeed
```

#### 5.2.2 PreventBackNavigation: onBackNavigationPrevented

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as PreventBackNavigation · CommonUiLayout.tsx
  participant N as Navigation
  U->>H: onBackNavigationPrevented → redirectHome
  H->>N: go to HomeFeed
```

#### 5.2.3 BackNavigationHandler: onBackNavigation

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

None.

## 7. Missing in React

None.

## 8. Questions

None.

## 9. Method

1. **OutSystems (TST).** The tool reads `facts.json` and the compiled code of `migration/screens/PINUnlock/analysis/`:
   - the rendered files;
   - each server call with its chain of client actions, and the calls that TST made in the capture;
   - the effects of each user action.
2. **Route and app shell.** OutSystems: a chain belongs to the app shell when it starts in `CommonUI_InsideLayout`, one of its blocks, or a module action. React: a binding belongs to the app shell when its file is in the code that `main.tsx` loads.
3. **MCP (DEV).** The tool reads the UI flow with `getScreenNames`. TST wins when DEV is different.
4. **React.** `react_calls.mjs` reads the app shell from `app/src/main.tsx` and the screen from its `<Route>Page.tsx`. It counts only the code that the app uses.
5. **Match.** `callAction(M, A)` gives `/api/M/A`. The `x-os-paths` of `app/src/api/openapi.yaml` give the TST call. The status is `implemented` when the TST call is the same. Else the status is `missing`.

Limit: a name or a call match does not prove the same behaviour. The parity checks of the migration compare the behaviour.
