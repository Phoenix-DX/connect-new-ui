# ContactByEmailOneSchoolGlobal: server calls and user actions in OutSystems and React

This file compares the route `/UBTConnect/ContactByEmailOneSchoolGlobal` in OutSystems (TST) with the React app.
The tool `route-actions/tools/check_route.py` wrote this file on 2026-11-04.
The tool reads the code. It does not run the app.

The app shell is in [APP_SHELL.md](../APP_SHELL.md), not here.
- OutSystems app shell: `CommonUI_InsideLayout` with its blocks (TST survey), and the chains that start in a module action.
- React app shell: the code that `app/src/main.tsx` loads (router, `AppFrame`, app start, hosts).

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/ContactByEmailOneSchoolGlobal` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal` | TST compiled code |
| UI flow | `ContactFlow` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/ContactByEmailOneSchoolGlobal/ContactByEmailOneSchoolGlobalPage.tsx`](../../app/src/pages/ContactByEmailOneSchoolGlobal/ContactByEmailOneSchoolGlobalPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Code read | OutSystems: 18 screen and block files of the route, 0 app shell files. React: 89 screen files | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 1: React makes 1, **0 missing** |
| User actions of the route | OutSystems: 2 diagrams. React: 2 diagrams |
| React calls of the screen that TST does not make | 0 (see [questions](#8-questions)) |
| Screen and blocks with a React port | 18 of 18 |
| Navigation targets found in React | 0 of 0 |
| App shell on this route | 7 calls; event bindings: OutSystems 0, React 7: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Screenshots

The screenshots come from the last parity run (`route.py parity`). The TST capture hides personal text with dots. The React build shows fictional mock data.

| State | TST (expected) | React (build) | Difference |
|---|---|---|---|
| `default`<br>390x844, mock `real`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/ContactByEmailOneSchoolGlobal/parity/default.expected.png" width="200" alt="default expected"> | <img src="../../migration/screens/ContactByEmailOneSchoolGlobal/parity/default.build.png" width="200" alt="default build"> | <img src="../../migration/screens/ContactByEmailOneSchoolGlobal/parity/default.diff.png" width="200" alt="default diff"> |
| `loading`<br>390x844, mock `loading`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/ContactByEmailOneSchoolGlobal/parity/loading.expected.png" width="200" alt="loading expected"> | <img src="../../migration/screens/ContactByEmailOneSchoolGlobal/parity/loading.build.png" width="200" alt="loading build"> | <img src="../../migration/screens/ContactByEmailOneSchoolGlobal/parity/loading.diff.png" width="200" alt="loading diff"> |
| `offline`<br>390x844, mock `error`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/ContactByEmailOneSchoolGlobal/parity/offline.expected.png" width="200" alt="offline expected"> | <img src="../../migration/screens/ContactByEmailOneSchoolGlobal/parity/offline.build.png" width="200" alt="offline build"> | <img src="../../migration/screens/ContactByEmailOneSchoolGlobal/parity/offline.diff.png" width="200" alt="offline diff"> |

## 4. Diagram

- A box on the left is the block or module of the action that calls the server (TST code).
- A line connects each call to the React action that makes the same call.
- The right column shows the React components that use each React action.
- A red box is a call that React does not make.

```mermaid
flowchart LR
  subgraph OS["OutSystems (TST compiled)"]
    subgraph OS_screen["Screen and its blocks"]
      o0["ContactByEmailOneSchoolGlobal"]
    end
  end
  subgraph EP["Server calls (TST)"]
    e1["ServiceAPISendContactMemberEmail"]
  end
  subgraph RE["React actions"]
    subgraph RE_page["Screen"]
      r2["sendContactMemberEmail()"]
    end
  end
  subgraph RC["React components"]
    c3["ContactByEmailOneSchoolGlobal"]
  end
  r2 --- c3
  o0 --> e1
  e1 --- r2
  classDef missing fill:#fde2e1,stroke:#c0392b,color:#7b241c
  classDef ok fill:#e3f4e8,stroke:#2e7d4f,color:#1d4d31
  class e1 ok
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
| [1](#511-contactbyemailoneschoolglobal-handler_submitform) | `ContactByEmailOneSchoolGlobal` | `event_SubmitForm of ContactByEmailForm` | `handler_SubmitForm` | – | calls SendContactMemberEmail; goes to previous screen; shows a message |
| [2](#512-layout_detailpage-onclick_backnavigation) | `Layout_DetailPage` | `click of Icon` | `onClick_BackNavigation` | – | goes to previous screen |

#### 5.1.1 ContactByEmailOneSchoolGlobal: handler_SubmitForm

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as ContactByEmailOneSchoolGlobal
  participant S as Server (TST calls)
  participant N as Navigation
  U->>B: event_SubmitForm of ContactByEmailForm → handler_SubmitForm
  B->>S: SendContactMemberEmail(In_UI_ContactByEmailForm)
  S-->>B: no outputs
  Note over B: message "Your message has been sent."
  B->>N: go to previous screen
```

#### 5.1.2 Layout_DetailPage: onClick_BackNavigation

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
| [1](#521-contactemailform-oneventsubmitform) | [`pages/ContactByEmailOneSchoolGlobal/ContactByEmailOneSchoolGlobalPage.tsx:32`](../../app/src/pages/ContactByEmailOneSchoolGlobal/ContactByEmailOneSchoolGlobalPage.tsx#L32) | `<ContactEmailForm>` | `onEventSubmitForm` | `submit.onEventSubmitForm` | – | calls ServiceAPISendContactMemberEmail; goes to previous screen; shows a message |
| [2](#522-detaillayout-onback) | [`containers/DetailLayout/DetailLayoutContainer.tsx:66`](../../app/src/containers/DetailLayout/DetailLayoutContainer.tsx#L66) | `<DetailLayout>` | `onBack` | `navigateBack` | – | goes to previous screen |

#### 5.2.1 ContactEmailForm: onEventSubmitForm

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ContactEmailForm · ContactByEmailOneSchoolGlobalPage.tsx
  participant A as Server (React api)
  participant N as Navigation
  U->>H: onEventSubmitForm → submit.onEventSubmitForm
  Note over H: via handlerSubmitForm()
  Note over H: via sendContactMemberEmail()
  H->>A: ServiceAPISendContactMemberEmail(In_UI_ContactByEmailForm)
  A-->>H: no outputs
  Note over H: via scheduleFeedbackMessageAfterTransition()
  Note over H: message message
  H->>N: go to previous screen
```

#### 5.2.2 DetailLayout: onBack

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as DetailLayout · DetailLayoutContainer.tsx
  participant N as Navigation
  U->>H: onBack → navigateBack
  H->>N: go to previous screen
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
| 1 | `UBTConnect/ContactFlow/ContactByEmailOneSchoolGlobal/ServiceAPISendContactMemberEmail` | service action | `ContactByEmailOneSchoolGlobal` | onClick in Button → event event_OnClick of Button → … → ContactByEmailOneSchoolGlobal.handler_SubmitForm → server SendContactMemberEmail | no | `sendContactMemberEmail()` [`api/message/repository.ts:70`](../../app/src/api/message/repository.ts#L70) (page) | `ContactByEmailOneSchoolGlobal → useContactByEmailOneSchoolGlobalSubmit → sendContactMemberEmail`<br>[`pages/ContactByEmailOneSchoolGlobal/ContactByEmailOneSchoolGlobalPage.tsx`](../../app/src/pages/ContactByEmailOneSchoolGlobal/ContactByEmailOneSchoolGlobalPage.tsx) | implemented |

## 7. Missing in React

None.

## 8. Questions

None.

## 9. Method

1. **OutSystems (TST).** The tool reads `facts.json` and the compiled code of `migration/screens/ContactByEmailOneSchoolGlobal/analysis/`:
   - the rendered files;
   - each server call with its chain of client actions, and the calls that TST made in the capture;
   - the effects of each user action.
2. **Route and app shell.** OutSystems: a chain belongs to the app shell when it starts in `CommonUI_InsideLayout`, one of its blocks, or a module action. React: a binding belongs to the app shell when its file is in the code that `main.tsx` loads.
3. **MCP (DEV).** The tool reads the UI flow with `getScreenNames`. TST wins when DEV is different.
4. **React.** `react_calls.mjs` reads the app shell from `app/src/main.tsx` and the screen from its `<Route>Page.tsx`. It counts only the code that the app uses.
5. **Match.** `callAction(M, A)` gives `/api/M/A`. The `x-os-paths` of `app/src/api/openapi.yaml` give the TST call. The status is `implemented` when the TST call is the same. Else the status is `missing`.

Limit: a name or a call match does not prove the same behaviour. The parity checks of the migration compare the behaviour.
