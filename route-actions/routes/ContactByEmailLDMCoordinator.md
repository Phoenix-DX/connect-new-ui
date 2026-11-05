# ContactByEmailLDMCoordinator: OutSystems (TST) and React

The route `/UBTConnect/ContactByEmailLDMCoordinator`, read from the TST compiled code and from the React code by `route-actions/tools/check_route.py` on 2026-11-05. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/ContactByEmailLDMCoordinator/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Static check.** This route has no TST capture (`migration/screens/ContactByEmailLDMCoordinator/no-capture.json`).

- The OutSystems facts come from the compiled code of the screen and of its static closure (TST survey).
- The code is in `migration/runtime-sources/` and in the raw folders of the captured routes.
- The tool observed no call and has no screenshot.
- Closure: 25 files, 0 without compiled code.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/ContactByEmailLDMCoordinator` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.ContactFlow.ContactByEmailLDMCoordinator` | TST compiled code |
| UI flow | `ContactFlow` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/ContactByEmailLDMCoordinator/ContactByEmailLDMCoordinatorPage.tsx`](../../app/src/pages/ContactByEmailLDMCoordinator/ContactByEmailLDMCoordinatorPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | no parity run | `route.py parity` |
| Code read | OutSystems: 2 files of the UI flow, 23 shared blocks, 0 app shell files. React: 89 files in the closure of the page | TST survey closure and compiled code (static), `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 1: React makes 1, **0 missing** |
| Differences found | **0** (see [section 3](#3-differences-found)) |
| Questions | 0 (see [section 4](#4-questions)) |
| React calls reached only through shared code | 0: see the last section |
| User actions of the route (own code) | OutSystems: 1. React: 1 |
| Screen and blocks of the UI flow with a React port | 2 of 2 |
| Navigation targets found in React | 0 of 0 |
| Shared blocks and components on the route | OutSystems 23, React 1 with user actions: see the last section |
| App shell on this route | 0 calls: see [APP_SHELL.md](../APP_SHELL.md) |

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
| 1 | `UBTConnect/ContactFlow/ContactByEmailLDMCoordinator/ServiceAPISendContactLDMCoordinatorEmail` | service action | `ContactByEmailLDMCoordinator` | onClick in Button → event event_OnClick of Button → … → ContactByEmailLDMCoordinator.handler_SubmitForm → server SendContactLDMCoordinatorEmail | no capture | `sendContactLDMCoordinatorEmail()` [`api/message/repository.ts:64`](../../app/src/api/message/repository.ts#L64) (page) | `ContactByEmailLDMCoordinator → useContactByEmailLDMCoordinatorSubmit → sendContactLDMCoordinatorEmail`<br>[`pages/ContactByEmailLDMCoordinator/ContactByEmailLDMCoordinatorPage.tsx`](../../app/src/pages/ContactByEmailLDMCoordinator/ContactByEmailLDMCoordinatorPage.tsx) | implemented |

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| [1](#611-contactbyemailldmcoordinator-handler_submitform) | `ContactByEmailLDMCoordinator` | `event_SubmitForm of ContactByEmailForm` | `handler_SubmitForm` | – | calls SendContactLDMCoordinatorEmail; goes to previous screen; shows a message |

<details><summary>1 diagrams (handlers with two or more effects)</summary>

#### 6.1.1 ContactByEmailLDMCoordinator: handler_SubmitForm

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as ContactByEmailLDMCoordinator
  participant S as Server (TST calls)
  participant N as Navigation
  U->>B: event_SubmitForm of ContactByEmailForm → handler_SubmitForm
  B->>S: SendContactLDMCoordinatorEmail(In_UI_ContactByEmailForm)
  S-->>B: no outputs
  Note over B: message "Your message has been sent."
  B->>N: go to previous screen
```


</details>


### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| [1](#621-contactemailform-oneventsubmitform) | [`pages/ContactByEmailLDMCoordinator/ContactByEmailLDMCoordinatorPage.tsx:32`](../../app/src/pages/ContactByEmailLDMCoordinator/ContactByEmailLDMCoordinatorPage.tsx#L32) | `<ContactEmailForm>` | `onEventSubmitForm` | `submit.onEventSubmitForm` | – | calls ServiceAPISendContactLDMCoordinatorEmail; goes to previous screen; shows a message |

<details><summary>1 diagrams (handlers with two or more effects)</summary>

#### 6.2.1 ContactEmailForm: onEventSubmitForm

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ContactEmailForm · ContactByEmailLDMCoordinatorPage.tsx
  participant A as Server (React api)
  participant N as Navigation
  U->>H: onEventSubmitForm → submit.onEventSubmitForm
  Note over H: via handlerSubmitForm()
  Note over H: via sendContactLDMCoordinatorEmail()
  H->>A: ServiceAPISendContactLDMCoordinatorEmail(In_UI_ContactByEmailForm)
  A-->>H: no outputs
  Note over H: via scheduleFeedbackMessageAfterTransition()
  Note over H: message message
  H->>N: go to previous screen
```


</details>


## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in `migration/runtime-sources/` and in the `analysis/sources/raw/` folders of the captured routes (static check).

### 7.1 OutSystems (TST)

| Input | Type | Mandatory | Place |
|---|---|---|---|
| `In_AvatarURL` | Text | yes | [`UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js:98`](../../migration/runtime-sources/UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js#L98) |
| `In_ContactName` | Text | yes | [`UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js:102`](../../migration/runtime-sources/UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js#L102) |
| `In_EmailTo` | Text | yes | [`UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js:106`](../../migration/runtime-sources/UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js#L106) |
| `In_Subject` | Text | yes | [`UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js:110`](../../migration/runtime-sources/UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js#L110) |
| `In_EventDate` | Date | yes | [`UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js:114`](../../migration/runtime-sources/UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js#L114) |
| `In_EventLocality` | Text | yes | [`UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js:118`](../../migration/runtime-sources/UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js#L118) |

Navigations with parameters: none.

### 7.2 React

Declared inputs of the route: `In_AvatarURL: Text`, `In_ContactName: Text`, `In_EmailTo: Text`, `In_Subject: Text`, `In_EventDate: Date`, `In_EventLocality: Text` (`app/src/app/routes.generated.ts`).

| Hook | Keys read | Place |
|---|---|---|
| `useSearchParams` | none | [`pages/ContactByEmailLDMCoordinator/ContactByEmailLDMCoordinatorPage.tsx:20`](../../app/src/pages/ContactByEmailLDMCoordinator/ContactByEmailLDMCoordinatorPage.tsx#L20) |

Navigations with parameters: none.

## 8. Lifecycle

What runs when the screen and its blocks open and close, without a user action.

### 8.1 OutSystems (TST)

Event handlers. The steps are the node comments and the conditions of the compiled action.

| Block | Event | Action | Steps |
|---|---|---|---|
| `ContactByEmailLDMCoordinator` | OnInitialize ([`UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js:632`](../../migration/runtime-sources/UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js#L632)) | `screenEvent_OnInitialize` | 1. ContactByEmailForm.FirstName = In_ContactName ([`L496`](../../migration/runtime-sources/UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js#L496))<br>2. ContactByEmailForm.ContactMember = In_ContactName ([`L499`](../../migration/runtime-sources/UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js#L499))<br>3. ContactByEmailForm.EmailTo = In_EmailTo ([`L502`](../../migration/runtime-sources/UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js#L502))<br>4. ContactByEmailForm.Subject = In_Subject ([`L505`](../../migration/runtime-sources/UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js#L505)) |
| `ContactByEmailForm` | OnInitialize ([`UBTConnect.ContactFlow.ContactByEmailForm.mvc.js:902`](../../migration/screens/ContactByEmailMember/analysis/sources/raw/UBTConnect.ContactFlow.ContactByEmailForm.mvc.js#L902)) | `onInitialize` | 1. Subject = In_Subject ([`L825`](../../migration/screens/ContactByEmailMember/analysis/sources/raw/UBTConnect.ContactFlow.ContactByEmailForm.mvc.js#L825)) |

<details><summary>Sequence diagrams of the screen event handlers (1)</summary>

The diagram keeps the order of the steps in the compiled action. The code does not give the order of the handlers of different blocks.

#### 8.1.1 ContactByEmailLDMCoordinator: OnInitialize

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as ContactByEmailLDMCoordinator
  R->>B: OnInitialize → screenEvent_OnInitialize
  Note over B: ContactByEmailForm.FirstName = In_ContactName
  Note over B: ContactByEmailForm.ContactMember = In_ContactName
  Note over B: ContactByEmailForm.EmailTo = In_EmailTo
  Note over B: ContactByEmailForm.Subject = In_Subject
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
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js:657`](../../migration/runtime-sources/UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js#L657) |
| React | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

The actions of the screen and its blocks have no `Handle Error` node.

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `ContactFlow` not in `migration/shell/sources/`. Handled errors: none.

### 11.2 React

| File | Kind | Function | Effects | Place |
|---|---|---|---|---|
| `useContactByEmailLDMCoordinatorSubmit.ts` | flow handler | `handlerSubmitForm` | none | [`pages/ContactByEmailLDMCoordinator/hooks/useContactByEmailLDMCoordinatorSubmit.ts:57`](../../app/src/pages/ContactByEmailLDMCoordinator/hooks/useContactByEmailLDMCoordinatorSubmit.ts#L57) |

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `CustomContainer` | `UBTConnectLibrary` | [`components/ui/CustomContainer/CustomContainer.tsx`](../../app/src/components/ui/CustomContainer/CustomContainer.tsx) | 0 |
| `Dialog_Navigation` | `UBTConnect` | [`components/ui/Dialog/NavigationDialog.tsx`](../../app/src/components/ui/Dialog/NavigationDialog.tsx) | 0 |
| `NavigationConfirmationDialog` | `NavigationHandler` | [`components/ui/Dialog/NavigationDialog.tsx`](../../app/src/components/ui/Dialog/NavigationDialog.tsx) | 0 |
| `NavigationHandler` | `NavigationHandler` | [`components/layout/LayoutRuntimeTop/LayoutRuntimeTop.tsx`](../../app/src/components/layout/LayoutRuntimeTop/LayoutRuntimeTop.tsx), [`components/ui/Dialog/ConfirmDialog.tsx`](../../app/src/components/ui/Dialog/ConfirmDialog.tsx), [`components/ui/Dialog/Dialog.tsx`](../../app/src/components/ui/Dialog/Dialog.tsx) | 0 |
| `PreventBackNavigation` | `NavigationHandler` | [`platform/navigation/PreventBackNavigation/PreventBackNavigation.tsx`](../../app/src/platform/navigation/PreventBackNavigation/PreventBackNavigation.tsx) | 0 |
| `BackNavigationHandler` | `NavigationHandler` | [`platform/navigation/BackNavigationHandler/BackNavigationHandler.tsx`](../../app/src/platform/navigation/BackNavigationHandler/BackNavigationHandler.tsx) | 0 |
| `Button` | `UBTConnect_Utils` | [`components/ui/ActionButton/ActionButton.tsx`](../../app/src/components/ui/ActionButton/ActionButton.tsx) | 0 |
| `Icon` | `UBTConnectLibrary` | [`components/ui/Icon/Icon.tsx`](../../app/src/components/ui/Icon/Icon.tsx) | 0 |
| `IconSVG` | `UBTConnectLibrary` | [`components/ui/IconSvg/IconSvg.tsx`](../../app/src/components/ui/IconSvg/IconSvg.tsx) | 0 |
| `IconText` | `UBTConnectLibrary` | [`components/ui/IconText/IconText.tsx`](../../app/src/components/ui/IconText/IconText.tsx) | 0 |
| `CustomText` | `UBTConnectLibrary` | [`components/ui/CustomText/CustomText.tsx`](../../app/src/components/ui/CustomText/CustomText.tsx) | 0 |
| `IconInline_Internal` | `UBTConnectLibrary` | [`components/ui/IconInline/IconInline.tsx`](../../app/src/components/ui/IconInline/IconInline.tsx) | 0 |
| `HighlightSearch` | `UBTConnectLibrary` | [`components/ui/HighlightSearch/HighlightSearch.tsx`](../../app/src/components/ui/HighlightSearch/HighlightSearch.tsx) | 0 |
| `Columns_Two` | `UBTConnectLibrary` | [`components/ui/ColumnsTwo/ColumnsTwo.tsx`](../../app/src/components/ui/ColumnsTwo/ColumnsTwo.tsx) | 0 |
| `Columns2` | `OutSystemsUI_2_23` | [`components/ui/Columns2/Columns2.tsx`](../../app/src/components/ui/Columns2/Columns2.tsx) | 0 |
| `Button` | `UBTConnectLibrary` | [`components/ui/Button/Button.tsx`](../../app/src/components/ui/Button/Button.tsx) | 0 |
| `ButtonLoading` | `OutSystemsUI_2_23` | [`components/ui/ButtonLoading/ButtonLoading.tsx`](../../app/src/components/ui/ButtonLoading/ButtonLoading.tsx) | 0 |
| `FixedFooter` | `UBTConnectLibrary` | [`components/ui/FixedFooter/FixedFooter.tsx`](../../app/src/components/ui/FixedFooter/FixedFooter.tsx) | 0 |
| `TextArea_WithCounter` | `UBTConnectLibrary` | [`components/ui/TextAreaWithCounter/TextAreaWithCounter.tsx`](../../app/src/components/ui/TextAreaWithCounter/TextAreaWithCounter.tsx) | 0 |
| `InputCounter` | `UBTConnectLibrary` | [`components/ui/InputCounter/InputCounter.tsx`](../../app/src/components/ui/InputCounter/InputCounter.tsx) | 0 |
| `DynamicTextArea` | `UBTConnectLibrary` | [`components/ui/DynamicTextArea/DynamicTextArea.tsx`](../../app/src/components/ui/DynamicTextArea/DynamicTextArea.tsx) | 0 |
| `Layout_DetailPage` | `UBTConnectLibrary` | [`components/layout/DetailLayout/DetailLayout.tsx`](../../app/src/components/layout/DetailLayout/DetailLayout.tsx), [`containers/DetailLayout/DetailLayoutContainer.tsx`](../../app/src/containers/DetailLayout/DetailLayoutContainer.tsx) | 1 |
| `LayoutRuntime_Top` | `NavigationHandler` | [`components/layout/LayoutRuntimeTop/LayoutRuntimeTop.tsx`](../../app/src/components/layout/LayoutRuntimeTop/LayoutRuntimeTop.tsx) | 0 |

<details><summary>User actions of the shared blocks (1)</summary>

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `Layout_DetailPage` | `click of Icon` | `onClick_BackNavigation` | – | goes to previous screen |

</details>


### React

| File | User actions |
|---|---|
| [`containers/DetailLayout/DetailLayoutContainer.tsx`](../../app/src/containers/DetailLayout/DetailLayoutContainer.tsx) | 1 |

<details><summary>User actions of the shared components (1)</summary>

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`containers/DetailLayout/DetailLayoutContainer.tsx:66`](../../app/src/containers/DetailLayout/DetailLayoutContainer.tsx#L66) | `<DetailLayout>` | `onBack` | `navigateBack` | – | goes to previous screen |

</details>


### React calls reached only through shared code

Calls that React can make on this route, without a TST chain on this route. Every reference chain starts in a shared container, component or app code (`containers/`, `components/`, `platform/`, `legacy/`, `lib/`), not in the screen files. TST makes these calls on a user action of the shared block, which the capture did not record, or on another screen.

None.
