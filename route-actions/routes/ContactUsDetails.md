# ContactUsDetails: OutSystems (TST) and React

The route `/UBTConnect/ContactUsDetails`, read from the TST compiled code and from the React code by `route-actions/tools/check_route.py` on 2026-11-05. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/ContactUsDetails/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Live code.** TST changed 15 compiled files of this route after the capture (`migration/knowledge/tst-drift-2026-11-05.md`). The tool read the live copies in `migration/runtime-sources/live/` for: `Connect2_LegacyShared`, `js`, `NavigationHandler`, `OutSystemsUI_2_23`, `js`, `UBTConnect`, `js`, `js`, `UBTConnectLibrary`, `js`, `CacheControl_UserInfo`, `UBTConnect_Utils`, `js`, `UBT_AppManager`, `UBT_AppManager_Mobile`. The observed calls come from the capture.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/ContactUsDetails` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.App_Menu_ContactUs.ContactUsDetails` | TST compiled code |
| UI flow | `App_Menu_ContactUs` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/ContactUsDetails/ContactUsDetailsPage.tsx`](../../app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx) | `app/src/pages/` |
| React route rules | access `anonymous`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | [`migration/screens/ContactUsDetails/parity`](../../migration/screens/ContactUsDetails/parity) | `route.py parity` |
| Code read | OutSystems: 1 files of the UI flow, 17 shared blocks, 28 app shell files. React: 165 files in the closure of the page | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 4: React makes 4, **0 missing** |
| Differences found | **0** (see [section 3](#3-differences-found)) |
| Questions | 0 (see [section 4](#4-questions)) |
| React calls reached only through shared code | 1: see the last section |
| User actions of the route (own code) | OutSystems: 1. React: 3 |
| Screen and blocks of the UI flow with a React port | 1 of 1 |
| Navigation targets found in React | 0 of 0 |
| Shared blocks and components on the route | OutSystems 17, React 3 with user actions: see the last section |
| App shell on this route | 7 calls: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Differences found

Each line is a fact of both sides: a TST call, navigation or variable, and the React code that has it or not. The tool does not judge the behaviour.

None.

### Not a gap of the web app

Missing TST calls that a rule of `route-actions/config.json` (`notApplicable`, user 2026-11-05) sets aside. The rule names the fact and its evidence; the chain is the one of the TST code.

**Declared, never run (navigation).** The navigation sits in a client action that no event, lifecycle step or action of the compiled code calls or binds (`tools/os_call_graph.py dead_client_actions`): TST cannot reach it.

- Navigation to `HomeFeed` in `CommonUI_InsideLayout.action_RedirectHome`, `CommonUI_InsideLayout.onBackNavigation_RedirectHome`.


## 4. Questions

None.

React reaches 1 more call without a TST chain on this route only through shared containers, components or app code. The last section lists it, not this one.

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
| 1 | `UBTConnect_Utils/CacheControl/CacheControl_UserInfo/DataActionGetCacheInfo` | data action | `CacheControl_UserInfo` | CacheControl.OnInitialize → CacheControl.onInitialize → event onNonCacheHit of CacheControl → CacheControl_UserInfo.cacheControlOnNonCacheHit → CacheControl_UserInfo.DataActionGetCacheInfo<br>CacheControl_UserInfo fetch at start → CacheControl_UserInfo.DataActionGetCacheInfo | yes | `UserInfoCacheControl()` [`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx:37`](../../app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx#L37) (page) | `ContactUsDetails → UserInfoCache → UserInfoCacheControl`<br>[`pages/ContactUsDetails/ContactUsDetailsPage.tsx`](../../app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx) | implemented |
| 2 | `UBTConnect/App_Menu_ContactUs/ContactUsDetails/DataActionDataAction_GetCountriesNames` | data action | `ContactUsDetails` | ContactUsDetails.OnReady → ContactUsDetails.screenEvent_OnReady → ContactUsDetails.DataActionDataAction_GetCountriesNames<br>ContactUsDetails fetch at start → ContactUsDetails.DataActionDataAction_GetCountriesNames | no | `fetchCountryNames()` [`api/message/repository.ts:115`](../../app/src/api/message/repository.ts#L115) (page) | `ContactUsDetails → useContactUsDetails → fetchCountryNames`<br>[`pages/ContactUsDetails/ContactUsDetailsPage.tsx`](../../app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx) | implemented |
| 3 | `UBTConnect/App_Menu_ContactUs/ContactUsDetails/DataActionDataAction_GetLocalityTimezone` | data action | `ContactUsDetails` | CacheControl.OnInitialize → CacheControl.onInitialize → … → ContactUsDetails.cacheControl_UserInfo_WrapperResult → ContactUsDetails.DataActionDataAction_GetLocalityTimezone<br>event onNonCacheHit of CacheControl → CacheControl_UserInfo.cacheControlOnNonCacheHit → … → ContactUsDetails.cacheControl_UserInfo_WrapperResult → ContactUsDetails.DataActionDataAction_GetLocalityTimezone<br>CacheControl_UserInfo fetch at start → CacheControl_UserInfo.DataActionGetCacheInfo → … → ContactUsDetails.cacheControl_UserInfo_WrapperResult → ContactUsDetails.DataActionDataAction_GetLocalityTimezone<br>(+1 more chains) | yes | `fetchLocalityTimezone()` [`api/message/repository.ts:107`](../../app/src/api/message/repository.ts#L107) (page) | `ContactUsDetails → useContactUsDetails → fetchLocalityTimezone`<br>[`pages/ContactUsDetails/ContactUsDetailsPage.tsx`](../../app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx) | implemented |
| 4 | `UBTConnect/App_Menu_ContactUs/ContactUsDetails/ServiceAPISendContactUsMessage` | service action | `ContactUsDetails` | onClick in Button → event event_OnClick of Button → event buttonOnClick of Button → ContactUsDetails.onClick_SubmitForm → server SendContactUsMessage | no | `sendContactUsMessage()` [`api/message/repository.ts:128`](../../app/src/api/message/repository.ts#L128) (page) | `ContactUsDetails → useContactUsDetails → sendContactUsMessage`<br>[`pages/ContactUsDetails/ContactUsDetailsPage.tsx`](../../app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx) | implemented |

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| [1](#611-contactusdetails-onclick_submitform) | `ContactUsDetails` | `buttonOnClick of Button` | `onClick_SubmitForm` | – | calls SendContactUsMessage; goes to previous screen; shows a message; asks for a confirmation |

<details><summary>1 diagrams (handlers with two or more effects)</summary>

#### 6.1.1 ContactUsDetails: onClick_SubmitForm

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as ContactUsDetails
  participant S as Server (TST calls)
  participant N as Navigation
  U->>B: buttonOnClick of Button → onClick_SubmitForm
  B->>S: SendContactUsMessage(In_ContactSubjectId, In_ContactUsForm, Rate, …)
  S-->>B: Out_ErrorMessage
  Note over B: confirm dialog
  B->>N: go to previous screen
  Note over B: message FeedbackMessage_AutoClose2
  Note over B: message FeedbackMessage_AutoClose
```


</details>


### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| [1](#621-contactusdetailsfooter-onsend) | [`pages/ContactUsDetails/ContactUsDetailsPage.tsx:82`](../../app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx#L82) | `<ContactUsDetailsFooter>` | `onSend` | `onSend` | – | calls ServiceAPISendContactUsMessage; goes to previous screen; shows a message; asks for a confirmation |
| 2 | [`pages/ContactUsDetails/ContactUsDetailsPage.tsx:112`](../../app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx#L112) | `<DetailLayout>` | `onBack` | `navigateBack` | – | goes to previous screen |
| 3 | [`pages/ContactUsDetails/ContactUsDetailsPage.tsx:117`](../../app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx#L117) | `<UserInfoCache>` | `onResult` | `onUserInformation` | – | calls DataActionDataAction_GetLocalityTimezone |

<details><summary>1 diagrams (handlers with two or more effects)</summary>

#### 6.2.1 ContactUsDetailsFooter: onSend

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ContactUsDetailsFooter · ContactUsDetailsPage.tsx
  participant A as Server (React api)
  participant N as Navigation
  U->>H: onSend → onSend
  Note over H: via submitForm()
  Note over H: via sendContactUsMessage()
  H->>A: ServiceAPISendContactUsMessage(In_ContactSubjectId, In_ContactUsForm, Rate, …)
  A-->>H: Out_ErrorMessage
  Note over H: confirm dialog SubmittedConfirmation
  H->>N: go to previous screen
  Note over H: message { title: '', message: sent.out_ErrorMessage, messageType: 'error' }
  Note over H: message { title: '', message: exceptionMessage(error), messageType: 'error' }
```


</details>


## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in the `analysis/sources/raw/` folder of the route; the files that TST changed after the capture are in `migration/runtime-sources/live/`.

### 7.1 OutSystems (TST)

| Input | Type | Mandatory | Place |
|---|---|---|---|
| `In_ContactSubjectId` | Text | yes | [`UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js:163`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L163) |
| `In_ContactSubjectTitle` | Text | yes | [`UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js:167`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L167) |
| `In_ListMenuOptionLabel` | Text | yes | [`UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js:171`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L171) |

Navigations with parameters: none.

### 7.2 React

Declared inputs of the route: `In_ContactSubjectId: Text`, `In_ContactSubjectTitle: Text`, `In_ListMenuOptionLabel: Text` (`app/src/app/routes.generated.ts`).

| Hook | Keys read | Place |
|---|---|---|
| `useSearchParams` | none | [`pages/ContactUsDetails/ContactUsDetailsPage.tsx:28`](../../app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx#L28) |

Navigations with parameters: none.

## 8. Lifecycle

What runs when the screen and its blocks open and close, without a user action.

### 8.1 OutSystems (TST)

Event handlers. The steps are the node comments and the conditions of the compiled action.

| Block | Event | Action | Steps |
|---|---|---|---|
| `ContactUsDetails` | OnInitialize ([`UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js:2525`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L2525)) | `screenEvent_OnInitialize` | 1. Execute Action: PIN_Check ([`L2373`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L2373))<br>2. IgnorePolices = GetUserId = NullIdentifier or PIN_Check.NeedRegister ([`L2377`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L2377))<br>3. Execute Action: Get_ContactUsFormDescription ([`L2380`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L2380))<br>4. Description = Get_ContactUsFormDescription.Out_FormDescription ([`L2384`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L2384))<br>5. MessagePrompt = Get_ContactUsFormDescription.Out_MessagePrompt ([`L2387`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L2387))<br>6. isLogged = GetUserId <> NullIdentifier ([`L2390`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L2390))<br>7. Rate_ShowRate = In_ContactSubjectId = GeneralSuggestionsFeedbackRating and isLogged ([`L2393`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L2393))<br>8. isLoadingMainData = isLogged ([`L2396`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L2396)) |
| `ContactUsDetails` | OnReady ([`UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js:2543`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L2543)) | `screenEvent_OnReady` | 1. If isLogged ([`L2057`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L2057))<br>2. Else ([`L2059`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L2059))<br>3. Refresh Query: DataAction_GetCountriesNames ([`L2061`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L2061)) |

<details><summary>Sequence diagrams of the screen event handlers (2)</summary>

The diagram keeps the order of the steps in the compiled action. The code does not give the order of the handlers of different blocks.

#### 8.1.1 ContactUsDetails: OnInitialize

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as ContactUsDetails
  R->>B: OnInitialize → screenEvent_OnInitialize
  B->>B: action PIN_Check
  Note over B: IgnorePolices = GetUserId = NullIdentifier or PIN_Check.NeedRegister
  B->>B: action Get_ContactUsFormDescription
  Note over B: Description = Get_ContactUsFormDescription.Out_FormDescription
  Note over B: MessagePrompt = Get_ContactUsFormDescription.Out_MessagePrompt
  Note over B: isLogged = GetUserId <> NullIdentifier
  Note over B: Rate_ShowRate = In_ContactSubjectId = GeneralSuggestionsFeedbackRating and isLog…
  Note over B: isLoadingMainData = isLogged
```

#### 8.1.2 ContactUsDetails: OnReady

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as ContactUsDetails
  participant S as Server (TST calls)
  R->>B: OnReady → screenEvent_OnReady
  alt isLogged
    Note over B: no step
  else other
    B->>S: DataAction_GetCountriesNames
    S-->>B: DataAction_GetCountriesNames
  end
```

</details>

Data actions and aggregates. The tool reads `dataFetchDependenciesOriginal`: `0` is a fetch when the block opens, `-1` is a fetch only on demand (a `Refresh Query` step). `Read by` lists the child block inputs, conditions, text widgets and actions that read the result.

| Block | Data action | Fetch | Read by | Place |
|---|---|---|---|---|
| `ContactUsDetails` | `DataAction_GetLocalityTimezone` | on demand (`-1`) | `action onAfterFetch_GetLocalityTimezone` ([`UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js:1794`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L1794)), `action onClick_SupportTeam` ([`UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js:2241`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L2241)) | [`UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js:1650`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L1650) |
| `ContactUsDetails` | `DataAction_GetCountriesNames` | on demand (`-1`) | `SkeletonSection.list` ([`UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js:916`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L916)), `view` ([`UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js:944`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L944)), `text` ([`UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js:956`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L956)), `SkeletonSection.value` ([`UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js:958`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L958)) | [`UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js:1651`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L1651) |

### 8.2 React

Effects (`useEffect`, `useLayoutEffect`) of the screen files, and the effects of shared components that make a call, a navigation or a message.

| File | Hook (function) | Dependencies | Cleanup | Effects | Place |
|---|---|---|---|---|---|
| `useContactUsDetails.ts` | `useEffect` (`useContactUsDetails`) | `[dispatch, flow, inputs]` | no | call `/api/UBTConnect/ContactUsDetails/DataActionDataAction_GetCountriesNames` | [`pages/ContactUsDetails/hooks/useContactUsDetails.ts:95`](../../app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts#L95) |

<details><summary>Sequence diagrams of the effects with a call, a navigation, a message or a refresh (1)</summary>

#### 8.2.1 useContactUsDetails: useEffect

```mermaid
sequenceDiagram
  autonumber
  participant R as React
  participant H as useContactUsDetails · useContactUsDetails.ts
  participant A as Server (React api)
  R->>H: useEffect (after the mount and when [dispatch, flow, inputs] changes)
  H->>A: DataActionDataAction_GetCountriesNames
  A-->>H: DataActionDataAction_GetCountriesNames
```

</details>

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
| OutSystems (TST) | anonymous (no check) | [`UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js:2567`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L2567) |
| React | access `anonymous`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

| Block | Action | Error | Steps of the handler |
|---|---|---|---|
| `ContactUsDetails` | `onClick_SubmitForm` | `AllExceptions` ([`UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js:2012`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L2012)) | 1. isSubmiting = False ([`L2020`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L2020))<br>2. Execute Action: FeedbackMessage_AutoClose ([`L2023`](../../migration/screens/ContactUsDetails/analysis/sources/raw/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js#L2023)) |

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `App_Menu_ContactUs` not in `migration/shell/sources/`. Handled errors: none.

### 11.2 React

| File | Kind | Function | Effects | Place |
|---|---|---|---|---|
| `useContactUsDetails.ts` | flow handler | `onMessageChange` | none | [`pages/ContactUsDetails/hooks/useContactUsDetails.ts:120`](../../app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts#L120) |
| `useContactUsDetails.ts` | flow handler | `onFieldChange` | none | [`pages/ContactUsDetails/hooks/useContactUsDetails.ts:133`](../../app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts#L133) |
| `useContactUsDetails.ts` | flow handler | `onCountryChange` | none | [`pages/ContactUsDetails/hooks/useContactUsDetails.ts:145`](../../app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts#L145) |
| `useContactUsDetails.ts` | flow handler | `onRateSelected` | none | [`pages/ContactUsDetails/hooks/useContactUsDetails.ts:154`](../../app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts#L154) |
| `useContactUsDetails.ts` | flow handler | `onSupportTeam` | none | [`pages/ContactUsDetails/hooks/useContactUsDetails.ts:166`](../../app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts#L166) |
| `useContactUsDetails.ts` | flow handler | `submitForm` | none | [`pages/ContactUsDetails/hooks/useContactUsDetails.ts:224`](../../app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts#L224) |
| `useContactUsDetails.ts` | flow handler | `onBackNavigation` | none | [`pages/ContactUsDetails/hooks/useContactUsDetails.ts:241`](../../app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts#L241) |

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `Layout_DetailPage` | `UBTConnectLibrary` | [`components/layout/DetailLayout/DetailLayout.tsx`](../../app/src/components/layout/DetailLayout/DetailLayout.tsx) | 1 |
| `SectionSeparator` | `UBTConnect` | [`components/ui/SectionSeparator/SectionSeparator.tsx`](../../app/src/components/ui/SectionSeparator/SectionSeparator.tsx) | 0 |
| `SubLayout_DirectoryDetailScreen_Section` | `UBTConnect` | [`components/layout/DirectoryDetailSection/DirectoryDetailSection.tsx`](../../app/src/components/layout/DirectoryDetailSection/DirectoryDetailSection.tsx) | 0 |
| `SubLayout_Section` | `UBTConnectLibrary` | [`components/layout/SectionLayout/SectionLayout.tsx`](../../app/src/components/layout/SectionLayout/SectionLayout.tsx) | 0 |
| `TextArea_WithCounter` | `UBTConnectLibrary` | [`components/ui/TextAreaWithCounter/TextAreaWithCounter.tsx`](../../app/src/components/ui/TextAreaWithCounter/TextAreaWithCounter.tsx) | 0 |
| `InputCounter` | `UBTConnectLibrary` | [`components/ui/InputCounter/InputCounter.tsx`](../../app/src/components/ui/InputCounter/InputCounter.tsx) | 0 |
| `FixedFooter` | `UBTConnectLibrary` | [`components/ui/FixedFooter/FixedFooter.tsx`](../../app/src/components/ui/FixedFooter/FixedFooter.tsx) | 0 |
| `ButtonLoading` | `OutSystemsUI_2_23` | [`components/ui/ButtonLoading/ButtonLoading.tsx`](../../app/src/components/ui/ButtonLoading/ButtonLoading.tsx) | 0 |
| `Button` | `UBTConnect_Utils` | [`components/ui/ActionButton/ActionButton.tsx`](../../app/src/components/ui/ActionButton/ActionButton.tsx) | 0 |
| `Button` | `UBTConnectLibrary` | [`components/ui/Button/Button.tsx`](../../app/src/components/ui/Button/Button.tsx) | 0 |
| `IconText` | `UBTConnectLibrary` | [`components/ui/IconText/IconText.tsx`](../../app/src/components/ui/IconText/IconText.tsx) | 0 |
| `Dialog_Information` | `UBTConnect` | [`pages/ContactUsDetails/components/InformationDialog.tsx`](../../app/src/pages/ContactUsDetails/components/InformationDialog.tsx) | 0 |
| `ContactPopup_ByPhone` | `UBTConnect_Utils` | [`components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx`](../../app/src/components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx) | 1 |
| `ContactPopup` | `UBTConnect_Utils` | [`components/contact/ContactPopup/ContactPopup.tsx`](../../app/src/components/contact/ContactPopup/ContactPopup.tsx) | 0 |
| `CacheControl_UserInfo_Wrapper` | `UBTConnect` | [`platform/session/UserInfoCache/UserInfoCache.tsx`](../../app/src/platform/session/UserInfoCache/UserInfoCache.tsx) | 0 |
| `CacheControl_UserInfo` | `UBTConnect_Utils` | [`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx`](../../app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx) | 0 |
| `CacheControl` | `UBTConnect_Utils` | [`legacy/os/cache/CacheControl/CacheControl.tsx`](../../app/src/legacy/os/cache/CacheControl/CacheControl.tsx) | 0 |

<details><summary>User actions of the shared blocks (2)</summary>

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `Layout_DetailPage` | `click of Icon` | `onClick_BackNavigation` | – | goes to previous screen |
| 2 | `ContactPopup_ByPhone` | `event_Clicked of ContactPopup` | `onClick_CallButton` | – | opens an external link |

</details>


### React

| File | User actions |
|---|---|
| [`components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx`](../../app/src/components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx) | 1 |
| [`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx) | 2 |
| [`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx`](../../app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx) | 1 |

<details><summary>User actions of the shared components (4)</summary>

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx:52`](../../app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx#L52) | `<CacheControl>` | `onNonCacheHit` | `onNonCacheHit` | – | calls DataActionGetCacheInfo |
| 2 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:80`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L80) | `<PreventBackNavigation>` | `onBackNavigationPrevented` | `redirectHome` | – | goes to HomeFeed |
| 3 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:82`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L82) | `<BackNavigationHandler>` | `onBackNavigation` | `maybeRedirectHome` | – | goes to HomeFeed |
| 4 | [`components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx:66`](../../app/src/components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx#L66) | `<ContactPopup>` | `onEventClicked` | `inline` | – | opens an external link; calls the prop onEventCall() |

</details>


### React calls reached only through shared code

Calls that React can make on this route, without a TST chain on this route. Every reference chain starts in a shared container, component or app code (`containers/`, `components/`, `platform/`, `legacy/`, `lib/`), not in the screen files. TST makes these calls on a user action of the shared block, which the capture did not record, or on another screen.

| Call | React action | Reached through |
|---|---|---|
| `/api/UBTConnect_Utils/ActionGetSignedImagesInBulk` | `cache_SignedImageURL_GetCallback()` [`lib/ubtConnectUtils/actions.ts:131`](../../app/src/lib/ubtConnectUtils/actions.ts#L131) | `EntityLazyImage` [`components/ui/EntityLazyImage/EntityLazyImage.tsx`](../../app/src/components/ui/EntityLazyImage/EntityLazyImage.tsx) |
