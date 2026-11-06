# EmailContact: OutSystems (TST) and React

The route `/UBTConnect/EmailContact`, read from the TST compiled code and from the React code by `tools/route-check/check_route.py` on 2026-11-05. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/EmailContact/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Static check.** This route has no TST capture (`migration/screens/EmailContact/no-capture.json`).

- The OutSystems facts come from the compiled code of the screen and of its static closure (TST survey).
- The code is in `migration/runtime-sources/` and in the raw folders of the captured routes.
- The tool observed no call and has no screenshot.
- Closure: 59 files, 0 without compiled code.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/EmailContact` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.Legacy_OrbitEventsFlow.EmailContact` | TST compiled code |
| UI flow | `Legacy_OrbitEventsFlow` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/EmailContact/EmailContactPage.tsx`](../../app/src/pages/EmailContact/EmailContactPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | no parity run | `route.py parity` |
| Code read | OutSystems: 1 files of the UI flow, 15 shared blocks, 43 app shell files. React: 155 files in the closure of the page | TST survey closure and compiled code (static), `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 2: React makes 2, **0 missing** |
| Differences found | **0** (see [section 3](#3-differences-found)) |
| Questions | 0 (see [section 4](#4-questions)) |
| React calls reached only through shared code | 0: see the last section |
| User actions of the route (own code) | OutSystems: 1. React: 1 |
| Screen and blocks of the UI flow with a React port | 1 of 1 |
| Navigation targets found in React | 6 of 6 |
| Shared blocks and components on the route | OutSystems 15, React 3 with user actions: see the last section |
| App shell on this route | 3 calls: see [APP_SHELL.md](../APP_SHELL.md) |

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
| 1 | `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_ContactForm/ActionSendContactEmail` | server action | `ScreenBlock_ContactForm` | onClick in ScreenBlock_ContactForm → ScreenBlock_ContactForm.onClick_Submit → server SendContactEmail | no capture | `sendContactFormEmail()` [`api/message/repository.ts:86`](../../app/src/api/message/repository.ts#L86) (page) | `EmailContact → useOrbitContactForm → sendContactFormEmail`<br>[`pages/EmailContact/EmailContactPage.tsx`](../../app/src/pages/EmailContact/EmailContactPage.tsx) | implemented |
| 2 | `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All` | service action | `UBTConnect` | BottomBarMenu.OnReady → BottomBarMenu.onReady → UBTConnect.directory_Updates_RefreshBottomBarCount → server Get_UI_UpdateItems_UnreadCount_All | no capture | `fetchUnreadUpdateItemsCount()` [`api/update/repository.ts:73`](../../app/src/api/update/repository.ts#L73) (page) | `BottomBar → directory_Updates_RefreshBottomBarCount → fetchUnreadUpdateItemsCount`<br>[`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | implemented |

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| [1](#611-emailcontact-onhandle_submitted) | `EmailContact` | `submitted of ContactForm` | `onHandle_Submitted` | – | goes to previous screen, HomeFeed; shows a message |

<details><summary>1 diagrams (handlers with two or more effects)</summary>

#### 6.1.1 EmailContact: onHandle_Submitted

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as EmailContact
  participant N as Navigation
  U->>B: submitted of ContactForm → onHandle_Submitted
  B->>N: go to previous screen
  Note over B: message FeedbackMessageAfterTransition
  B->>N: go to HomeFeed
```


</details>


### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| [1](#621-orbitcontactformview-onsubmitclick) | [`pages/EmailContact/EmailContactPage.tsx:46`](../../app/src/pages/EmailContact/EmailContactPage.tsx#L46) | `<OrbitContactFormView>` | `onSubmitClick` | `form.onSubmitClick` | – | calls ActionSendContactEmail; goes to previous screen, HomeFeed; shows a message |

<details><summary>1 diagrams (handlers with two or more effects)</summary>

#### 6.2.1 OrbitContactFormView: onSubmitClick

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as OrbitContactFormView · EmailContactPage.tsx
  participant A as Server (React api)
  participant N as Navigation
  U->>H: onSubmitClick → form.onSubmitClick
  Note over H: via onClickSubmit()
  Note over H: via sendContactFormEmail()
  H->>A: ActionSendContactEmail(EmailInfo, EventId, IsContactHelpdesk, …)
  A-->>H: IsSuccess
  Note over H: message NO_HELPDESK_EMAIL
  Note over H: via scheduleFeedbackMessageAfterTransition()
  Note over H: message message
  Note over H: via onSubmitted()
  H->>N: go to previous screen
  Note over H: message NO_ORBIT_ACCESS
  H->>N: go to HomeFeed
```


</details>


## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in `migration/runtime-sources/` and in `migration/sources/raw/` (the shared store of the captured routes; static check).

### 7.1 OutSystems (TST)

| Input | Type | Mandatory | Place |
|---|---|---|---|
| `In_IsContactHelpdesk` | Boolean | yes | [`UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js:113`](../../migration/runtime-sources/UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js#L113) |
| `In_EventId` | LongInteger | yes | [`UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js:117`](../../migration/runtime-sources/UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js#L117) |
| `In_MilestoneId` | Text | yes | [`UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js:121`](../../migration/runtime-sources/UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js#L121) |
| `In_TargetMemberId` | LongInteger | yes | [`UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js:125`](../../migration/runtime-sources/UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js#L125) |
| `In_Subject` | Text | yes | [`UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js:129`](../../migration/runtime-sources/UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js#L129) |
| `In_MilestoneTitle` | Text | yes | [`UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js:133`](../../migration/runtime-sources/UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js#L133) |
| `In_EventName` | Text | yes | [`UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js:137`](../../migration/runtime-sources/UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js#L137) |
| `In_HostName` | Text | yes | [`UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js:141`](../../migration/runtime-sources/UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js#L141) |
| `In_HostEmail` | Text | yes | [`UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js:145`](../../migration/runtime-sources/UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js#L145) |
| `In_FormattedDateTime` | Text | yes | [`UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js:149`](../../migration/runtime-sources/UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js#L149) |

Navigations with parameters: none.

### 7.2 React

Declared inputs of the route: `In_IsContactHelpdesk: Boolean`, `In_EventId: LongInteger`, `In_MilestoneId: Text`, `In_TargetMemberId: LongInteger`, `In_Subject: Text`, `In_MilestoneTitle: Text`, `In_EventName: Text`, `In_HostName: Text`, `In_HostEmail: Text`, `In_FormattedDateTime: Text` (`app/src/app/routes.generated.ts`).

| Hook | Keys read | Place |
|---|---|---|
| `useSearchParams` | none | [`pages/EmailContact/EmailContactPage.tsx:22`](../../app/src/pages/EmailContact/EmailContactPage.tsx#L22) |

| File | Target | Parameters | Place |
|---|---|---|---|
| `useEmailContact.ts` | `HomeFeed` |  | [`pages/EmailContact/hooks/useEmailContact.ts:34`](../../app/src/pages/EmailContact/hooks/useEmailContact.ts#L34) |

## 8. Lifecycle

What runs when the screen and its blocks open and close, without a user action.

### 8.1 OutSystems (TST)

Event handlers. The steps are the node comments and the conditions of the compiled action.

None.

Data actions and aggregates. The tool reads `dataFetchDependenciesOriginal`: `0` is a fetch when the block opens, `-1` is a fetch only on demand (a `Refresh Query` step). `Read by` lists the child block inputs, conditions, text widgets and actions that read the result.

None.

### 8.2 React

Effects (`useEffect`, `useLayoutEffect`) of the screen files, and the effects of shared components that make a call, a navigation or a message.

| File | Hook (function) | Dependencies | Cleanup | Effects | Place |
|---|---|---|---|---|---|
| `useOrbitContactForm.ts` | `useEffect` (`useOrbitContactForm`) | `[]` | no | none | [`pages/EmailContact/hooks/useOrbitContactForm.ts:87`](../../app/src/pages/EmailContact/hooks/useOrbitContactForm.ts#L87) |

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
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js:399`](../../migration/runtime-sources/UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js#L399) |
| React | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

The actions of the screen and its blocks have no `Handle Error` node.

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `Legacy_OrbitEventsFlow` not in `migration/shell/sources/`. Handled errors: none.

### 11.2 React

None.

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `BottomBarMenu` | `UBTConnect` | [`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | 1 |
| `App_IconBadge` | `UBTConnect` | [`components/layout/BottomBarIconBadge/BottomBarIconBadge.tsx`](../../app/src/components/layout/BottomBarIconBadge/BottomBarIconBadge.tsx) | 0 |
| `IconBadge` | `UBTConnectLibrary` | [`components/ui/IconBadge/IconBadge.tsx`](../../app/src/components/ui/IconBadge/IconBadge.tsx) | 0 |
| `Badge` | `UBTConnectLibrary` | [`components/ui/Badge/Badge.tsx`](../../app/src/components/ui/Badge/Badge.tsx) | 0 |
| `BottomBarItem` | `OutSystemsUI_2_23` | [`components/ui/BottomBarItem/BottomBarItem.tsx`](../../app/src/components/ui/BottomBarItem/BottomBarItem.tsx) | 0 |
| `BottomBarContent` | `UBTConnect` | [`components/layout/BottomBarContent/BottomBarContent.tsx`](../../app/src/components/layout/BottomBarContent/BottomBarContent.tsx) | 0 |
| `ScreenBlock_ContactForm` | `Connect2_OrbitMobile_MUI` | [`pages/EmailContact/components/OrbitContactFormView.tsx`](../../app/src/pages/EmailContact/components/OrbitContactFormView.tsx), [`pages/EmailContact/hooks/orbitContactFormState.ts`](../../app/src/pages/EmailContact/hooks/orbitContactFormState.ts), [`pages/EmailContact/hooks/useOrbitContactForm.ts`](../../app/src/pages/EmailContact/hooks/useOrbitContactForm.ts) | 1 |
| `NavigationConfirmationDialog` | `NavigationHandler` | [`components/ui/Dialog/NavigationDialog.tsx`](../../app/src/components/ui/Dialog/NavigationDialog.tsx) | 0 |
| `NavigationHandler` | `NavigationHandler` | [`components/layout/LayoutRuntimeTop/LayoutRuntimeTop.tsx`](../../app/src/components/layout/LayoutRuntimeTop/LayoutRuntimeTop.tsx), [`components/ui/Dialog/ConfirmDialog.tsx`](../../app/src/components/ui/Dialog/ConfirmDialog.tsx), [`components/ui/Dialog/Dialog.tsx`](../../app/src/components/ui/Dialog/Dialog.tsx) | 0 |
| `DEPRECATED_ButtonLoading` | `OutSystemsUI_2_23` | [`components/ui/legacy/LegacyButtonLoading/LegacyButtonLoading.tsx`](../../app/src/components/ui/legacy/LegacyButtonLoading/LegacyButtonLoading.tsx) | 0 |
| `InputCounter` | `Connect2_LegacyShared` | [`components/ui/LegacyInputCounter/LegacyInputCounter.tsx`](../../app/src/components/ui/LegacyInputCounter/LegacyInputCounter.tsx) | 0 |
| `MenuIcon__UpdatedOSUI` | `Connect2_LegacyShared` | [`components/layout/MenuIcon/MenuIcon.tsx`](../../app/src/components/layout/MenuIcon/MenuIcon.tsx) | 1 |
| `Layout_Orbit` | `Connect2_LegacyShared` | [`components/layout/OrbitLayout/OrbitLayout.tsx`](../../app/src/components/layout/OrbitLayout/OrbitLayout.tsx) | 0 |
| `BaseLayout_UpdatedOSUI` | `Connect2_LegacyShared` | [`components/layout/BaseLayout/BaseLayout.tsx`](../../app/src/components/layout/BaseLayout/BaseLayout.tsx) | 0 |
| `PullToRefresh` | `OutSystemsUI_2_23` | [`components/ui/PullToRefresh/PullToRefresh.tsx`](../../app/src/components/ui/PullToRefresh/PullToRefresh.tsx) | 0 |

<details><summary>User actions of the shared blocks (7)</summary>

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `MenuIcon__UpdatedOSUI` | `onClick (HTML element)` | `onBack` | – | goes to previous screen |
| 2 | `ScreenBlock_ContactForm` | `onClick (HTML element)` | `onClick_Submit` | – | calls SendContactEmail, GetAllApplicationEvents, AppManager_SynchAppContext; shows a message |
| 3 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `home` | goes to HomeFeed |
| 4 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `directory` | goes to CountryList, Locality_Details |
| 5 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `updates` | goes to Updates_SingleList |
| 6 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `bookmarks` | goes to Bookmarks |
| 7 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `menu` | goes to Menu |

</details>


### React

| File | User actions |
|---|---|
| [`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | 2 |
| [`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx) | 2 |
| [`components/layout/MenuIcon/MenuIcon.tsx`](../../app/src/components/layout/MenuIcon/MenuIcon.tsx) | 1 |

<details><summary>User actions of the shared components (15)</summary>

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:80`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L80) | `<PreventBackNavigation>` | `onBackNavigationPrevented` | `redirectHome` | – | goes to HomeFeed |
| 2 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:82`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L82) | `<BackNavigationHandler>` | `onBackNavigation` | `maybeRedirectHome` | – | goes to HomeFeed |
| 3 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Home` | goes to HomeFeed |
| 4 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Directory` | goes to CountryList, Locality_Details |
| 5 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Updates` | goes to Updates_SingleList |
| 6 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Bookmarks` | goes to Bookmarks |
| 7 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Menu` | goes to Menu |
| 8 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `other` | calls the prop onBottomBarClicked() |
| 9 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Home` | goes to HomeFeed |
| 10 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Directory` | goes to CountryList, Locality_Details |
| 11 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Updates` | goes to Updates_SingleList |
| 12 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Bookmarks` | goes to Bookmarks |
| 13 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Menu` | goes to Menu |
| 14 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `other` | calls the prop onBottomBarClicked() |
| 15 | [`components/layout/MenuIcon/MenuIcon.tsx:34`](../../app/src/components/layout/MenuIcon/MenuIcon.tsx#L34) | `<div>` | `onClick` | `inline` | – | goes to previous screen |

</details>


### React calls reached only through shared code

Calls that React can make on this route, without a TST chain on this route. Every reference chain starts in a shared container, component or app code (`containers/`, `components/`, `platform/`, `legacy/`, `lib/`), not in the screen files. TST makes these calls on a user action of the shared block, which the capture did not record, or on another screen.

None.
