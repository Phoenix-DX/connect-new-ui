# ContactByEmailOrbitHelpdesk: OutSystems (TST) and React

The route `/UBTConnect/ContactByEmailOrbitHelpdesk`, read from the TST compiled code and from the React code by `route-actions/tools/check_route.py` on 2026-11-05. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/ContactByEmailOrbitHelpdesk/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/ContactByEmailOrbitHelpdesk` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk` | TST compiled code |
| UI flow | `ContactFlow` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/ContactByEmailOrbitHelpdesk/ContactByEmailOrbitHelpdeskPage.tsx`](../../app/src/pages/ContactByEmailOrbitHelpdesk/ContactByEmailOrbitHelpdeskPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | [`migration/screens/ContactByEmailOrbitHelpdesk/parity`](../../migration/screens/ContactByEmailOrbitHelpdesk/parity) | `route.py parity` |
| Code read | OutSystems: 2 files of the UI flow, 16 shared blocks, 0 app shell files. React: 88 files in the closure of the page | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 1: React makes 1, **0 missing** |
| Differences found | **0** (see [section 3](#3-differences-found)) |
| Questions | 1 (see [section 4](#4-questions)) |
| User actions of the route (own code) | OutSystems: 1. React: 1 |
| Screen and blocks of the UI flow with a React port | 2 of 2 |
| Navigation targets found in React | 0 of 0 |
| Shared blocks and components on the route | OutSystems 16, React 1 with user actions: see the last section |
| App shell on this route | 0 calls: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Differences found

Each line is a fact of both sides: a TST call, navigation or variable, and the React code that has it or not. The tool does not judge the behaviour.

None.

## 4. Questions

1. React calls `/api/UBT_AppManager/ActionAppManager_SynchAppContext` from `fetchAppContext()` [`api/app/repository.ts:23`](../../app/src/api/app/repository.ts#L23) (shell + page). TST ContactByEmailOrbitHelpdesk has no chain to this call. Does the call belong to this route?

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
| 1 | `UBTConnect/ContactFlow/ContactByEmailOrbitHelpdesk/ActionSendContactEmail` | server action | `ContactByEmailOrbitHelpdesk` | onClick in Button → event event_OnClick of Button → … → ContactByEmailOrbitHelpdesk.handler_SubmitForm → server SendContactEmail | no | `sendContactEmail()` [`api/message/repository.ts:76`](../../app/src/api/message/repository.ts#L76) (page) | `ContactByEmailOrbitHelpdesk → useContactByEmailOrbitHelpdeskSubmit → sendContactEmail`<br>[`pages/ContactByEmailOrbitHelpdesk/ContactByEmailOrbitHelpdeskPage.tsx`](../../app/src/pages/ContactByEmailOrbitHelpdesk/ContactByEmailOrbitHelpdeskPage.tsx) | implemented |

The TST capture also has calls of another screen (scope `other`, no chain in the code of the route). React does not make them on this route. The tool does not count them:

- `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HasDocuments`: a call of the screen in the capture of [EventDetail](EventDetail.md).
- `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HasQRCode`: a call of the screen in the capture of [EventDetail](EventDetail.md).
- `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HostSurveyStatus`: a call of the screen in the capture of [EventDetail](EventDetail.md).

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| [1](#611-contactbyemailorbithelpdesk-handler_submitform) | `ContactByEmailOrbitHelpdesk` | `event_SubmitForm of ContactByEmailForm` | `handler_SubmitForm` | – | calls SendContactEmail; goes to previous screen; shows a message |

<details><summary>1 diagrams (handlers with two or more effects)</summary>

#### 6.1.1 ContactByEmailOrbitHelpdesk: handler_SubmitForm

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as ContactByEmailOrbitHelpdesk
  participant S as Server (TST calls)
  participant N as Navigation
  U->>B: event_SubmitForm of ContactByEmailForm → handler_SubmitForm
  B->>S: SendContactEmail(EmailInfo, EventId, IsContactHelpdesk, …)
  S-->>B: IsSuccess
  Note over B: message "Your message has been sent."
  B->>N: go to previous screen
```


</details>


### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| [1](#621-contactemailform-oneventsubmitform) | [`pages/ContactByEmailOrbitHelpdesk/ContactByEmailOrbitHelpdeskPage.tsx:35`](../../app/src/pages/ContactByEmailOrbitHelpdesk/ContactByEmailOrbitHelpdeskPage.tsx#L35) | `<ContactEmailForm>` | `onEventSubmitForm` | `submit.onEventSubmitForm` | – | calls ActionSendContactEmail; goes to previous screen; shows a message |

<details><summary>1 diagrams (handlers with two or more effects)</summary>

#### 6.2.1 ContactEmailForm: onEventSubmitForm

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ContactEmailForm · ContactByEmailOrbitHelpdeskPage.tsx
  participant A as Server (React api)
  participant N as Navigation
  U->>H: onEventSubmitForm → submit.onEventSubmitForm
  Note over H: via handlerSubmitForm()
  Note over H: via sendContactEmail()
  H->>A: ActionSendContactEmail(EmailInfo, EventId, IsContactHelpdesk, …)
  A-->>H: IsSuccess
  Note over H: via scheduleFeedbackMessageAfterTransition()
  Note over H: message message
  H->>N: go to previous screen
```


</details>


## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in `migration/screens/ContactByEmailOrbitHelpdesk/analysis/sources/raw/`.

### 7.1 OutSystems (TST)

| Input | Type | Mandatory | Place |
|---|---|---|---|
| `In_EventId` | LongInteger | yes | [`UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js:113`](../../migration/screens/ContactByEmailOrbitHelpdesk/analysis/sources/raw/UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js#L113) |
| `In_MilestoneId` | Text | yes | [`UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js:117`](../../migration/screens/ContactByEmailOrbitHelpdesk/analysis/sources/raw/UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js#L117) |
| `In_TargetMemberId` | LongInteger | yes | [`UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js:121`](../../migration/screens/ContactByEmailOrbitHelpdesk/analysis/sources/raw/UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js#L121) |
| `In_Subject` | Text | yes | [`UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js:125`](../../migration/screens/ContactByEmailOrbitHelpdesk/analysis/sources/raw/UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js#L125) |
| `In_MilestoneTitle` | Text | yes | [`UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js:129`](../../migration/screens/ContactByEmailOrbitHelpdesk/analysis/sources/raw/UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js#L129) |
| `In_EventName` | Text | yes | [`UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js:133`](../../migration/screens/ContactByEmailOrbitHelpdesk/analysis/sources/raw/UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js#L133) |
| `In_HostName` | Text | yes | [`UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js:137`](../../migration/screens/ContactByEmailOrbitHelpdesk/analysis/sources/raw/UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js#L137) |
| `In_HostEmail` | Text | yes | [`UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js:141`](../../migration/screens/ContactByEmailOrbitHelpdesk/analysis/sources/raw/UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js#L141) |
| `In_FormattedDateTime` | Text | yes | [`UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js:145`](../../migration/screens/ContactByEmailOrbitHelpdesk/analysis/sources/raw/UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js#L145) |

Navigations with parameters: none.

### 7.2 React

Declared inputs of the route: `In_EventId: LongInteger`, `In_MilestoneId: Text`, `In_TargetMemberId: LongInteger`, `In_Subject: Text`, `In_MilestoneTitle: Text`, `In_EventName: Text`, `In_HostName: Text`, `In_HostEmail: Text`, `In_FormattedDateTime: Text` (`app/src/app/routes.generated.ts`).

| Hook | Keys read | Place |
|---|---|---|
| `useSearchParams` | none | [`pages/ContactByEmailOrbitHelpdesk/ContactByEmailOrbitHelpdeskPage.tsx:23`](../../app/src/pages/ContactByEmailOrbitHelpdesk/ContactByEmailOrbitHelpdeskPage.tsx#L23) |

Navigations with parameters: none.

## 8. Lifecycle

What runs when the screen and its blocks open and close, without a user action.

### 8.1 OutSystems (TST)

Event handlers. The steps are the node comments and the conditions of the compiled action.

| Block | Event | Action | Steps |
|---|---|---|---|
| `ContactByEmailOrbitHelpdesk` | OnInitialize ([`UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js:632`](../../migration/screens/ContactByEmailOrbitHelpdesk/analysis/sources/raw/UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js#L632)) | `screenEvent_OnInitialize` | 1. ContactByEmailForm.FirstName = "" ([`L492`](../../migration/screens/ContactByEmailOrbitHelpdesk/analysis/sources/raw/UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js#L492))<br>2. ContactByEmailForm.ContactMember = "" ([`L495`](../../migration/screens/ContactByEmailOrbitHelpdesk/analysis/sources/raw/UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js#L495))<br>3. ContactByEmailForm.EmailTo = "" ([`L498`](../../migration/screens/ContactByEmailOrbitHelpdesk/analysis/sources/raw/UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js#L498))<br>4. ContactByEmailForm.Subject = In_Subject ([`L501`](../../migration/screens/ContactByEmailOrbitHelpdesk/analysis/sources/raw/UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js#L501)) |
| `ContactByEmailForm` | OnInitialize ([`UBTConnect.ContactFlow.ContactByEmailForm.mvc.js:902`](../../migration/screens/ContactByEmailOrbitHelpdesk/analysis/sources/raw/UBTConnect.ContactFlow.ContactByEmailForm.mvc.js#L902)) | `onInitialize` | 1. Subject = In_Subject ([`L825`](../../migration/screens/ContactByEmailOrbitHelpdesk/analysis/sources/raw/UBTConnect.ContactFlow.ContactByEmailForm.mvc.js#L825)) |

<details><summary>Sequence diagrams of the screen event handlers (1)</summary>

The diagram keeps the order of the steps in the compiled action. The code does not give the order of the handlers of different blocks.

#### 8.1.1 ContactByEmailOrbitHelpdesk: OnInitialize

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as ContactByEmailOrbitHelpdesk
  R->>B: OnInitialize → screenEvent_OnInitialize
  Note over B: ContactByEmailForm.FirstName = ""
  Note over B: ContactByEmailForm.ContactMember = ""
  Note over B: ContactByEmailForm.EmailTo = ""
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
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js:657`](../../migration/screens/ContactByEmailOrbitHelpdesk/analysis/sources/raw/UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js#L657) |
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
| `useContactByEmailOrbitHelpdeskSubmit.ts` | flow handler | `handlerSubmitForm` | none | [`pages/ContactByEmailOrbitHelpdesk/hooks/useContactByEmailOrbitHelpdeskSubmit.ts:65`](../../app/src/pages/ContactByEmailOrbitHelpdesk/hooks/useContactByEmailOrbitHelpdeskSubmit.ts#L65) |

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `Layout_DetailPage` | `UBTConnectLibrary` | [`components/layout/DetailLayout/DetailLayout.tsx`](../../app/src/components/layout/DetailLayout/DetailLayout.tsx), [`containers/DetailLayout/DetailLayoutContainer.tsx`](../../app/src/containers/DetailLayout/DetailLayoutContainer.tsx) | 1 |
| `LayoutRuntime_Top` | `NavigationHandler` | [`components/layout/LayoutRuntimeTop/LayoutRuntimeTop.tsx`](../../app/src/components/layout/LayoutRuntimeTop/LayoutRuntimeTop.tsx) | 0 |
| `Icon` | `UBTConnectLibrary` | [`components/ui/Icon/Icon.tsx`](../../app/src/components/ui/Icon/Icon.tsx) | 0 |
| `CustomContainer` | `UBTConnectLibrary` | [`components/ui/CustomContainer/CustomContainer.tsx`](../../app/src/components/ui/CustomContainer/CustomContainer.tsx) | 0 |
| `DynamicTextArea` | `UBTConnectLibrary` | [`components/ui/DynamicTextArea/DynamicTextArea.tsx`](../../app/src/components/ui/DynamicTextArea/DynamicTextArea.tsx) | 0 |
| `TextArea_WithCounter` | `UBTConnectLibrary` | [`components/ui/TextAreaWithCounter/TextAreaWithCounter.tsx`](../../app/src/components/ui/TextAreaWithCounter/TextAreaWithCounter.tsx) | 0 |
| `InputCounter` | `UBTConnectLibrary` | [`components/ui/InputCounter/InputCounter.tsx`](../../app/src/components/ui/InputCounter/InputCounter.tsx) | 0 |
| `FixedFooter` | `UBTConnectLibrary` | [`components/ui/FixedFooter/FixedFooter.tsx`](../../app/src/components/ui/FixedFooter/FixedFooter.tsx) | 0 |
| `ButtonLoading` | `OutSystemsUI_2_23` | [`components/ui/ButtonLoading/ButtonLoading.tsx`](../../app/src/components/ui/ButtonLoading/ButtonLoading.tsx) | 0 |
| `Button` | `UBTConnect_Utils` | [`components/ui/ActionButton/ActionButton.tsx`](../../app/src/components/ui/ActionButton/ActionButton.tsx) | 0 |
| `Button` | `UBTConnectLibrary` | [`components/ui/Button/Button.tsx`](../../app/src/components/ui/Button/Button.tsx) | 0 |
| `IconText` | `UBTConnectLibrary` | [`components/ui/IconText/IconText.tsx`](../../app/src/components/ui/IconText/IconText.tsx) | 0 |
| `Columns_Two` | `UBTConnectLibrary` | [`components/ui/ColumnsTwo/ColumnsTwo.tsx`](../../app/src/components/ui/ColumnsTwo/ColumnsTwo.tsx) | 0 |
| `Columns2` | `OutSystemsUI_2_23` | [`components/ui/Columns2/Columns2.tsx`](../../app/src/components/ui/Columns2/Columns2.tsx) | 0 |
| `CustomText` | `UBTConnectLibrary` | [`components/ui/CustomText/CustomText.tsx`](../../app/src/components/ui/CustomText/CustomText.tsx) | 0 |
| `IconInline_Internal` | `UBTConnectLibrary` | [`components/ui/IconInline/IconInline.tsx`](../../app/src/components/ui/IconInline/IconInline.tsx) | 0 |

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

