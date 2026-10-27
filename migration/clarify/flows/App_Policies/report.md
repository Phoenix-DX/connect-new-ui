# Flow report: App_Policies

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 1 (built: 1, AcceptPendingPolicies; not built: none) |
| Own blocks | Policy_Checker, Policy_Custom_AcceptPendingPolicies |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/…`, KB page `ui/policies.md` and the rules it names, TST compiled code of the screen and the two blocks (`tst_source.py`), `UBTConnect.controller.js` (TST), `migration/shell/sources/` (TST copies of the App_Policies flow controller, ApplicationPolicies_CW and UBTJavaScriptUtils) |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 74 · partial 6 · missing 1 · differs 2 · mock-only 2 · n/a 5 · unclear 0 (same as `checklist.json`).
- **F1** (major): the screen sends the names of the Connect_Applications records as `PolicyApplications`. TST sends
  the record identifiers (GUID texts). The production server gets other application ids than TST sends.
- **F2** (minor): the pending-policies query fetches again after an offline-then-online event and clears every tick.
  `IsAllSelected` keeps its value, so Continue can send an empty list.
- **F3** (minor): an exception in `AcceptPendingPoliciesAcceptedAll` stays unhandled. TST sends it to the flow handler,
  which shows the communication message.
- **F4** (minor, Q2): the device id of `AcceptPolicies` lives in memory only. TST keeps it in `localStorage["UUID"]`.
- Status: in React a user with pending policies goes to the screen from every screen that does not opt out. The user
  ticks the policies, opens a policy in a new tab, accepts, and returns to the previous screen. With the mocks, nothing
  blocks the flow. Before production, the team must fix F1: the server gets the wrong application ids.

## 2. Screens

### 2.1 AcceptPendingPolicies

Route `/UBTConnect/AcceptPendingPolicies`, screen file `app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx`,
screen flows in `hooks/useAcceptPendingPolicies.ts`, block flows in `hooks/usePendingPoliciesForm.ts`. Board: `build`,
built (V1: "policy checker on 67 screens leads here; AcceptPolicies (write) mocked", user, 2026-10-14). The screen
has no capture (CR-AcceptPendingPolicies-1).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 001 | roles Registered, UBTOne_User | A signed-in user opens the screen; the TST controller checks Registered (`checkRegistered`) | MEMBER_ROUTE (member, enforce): the screen is not in ROUTE_META | `match` | app/src/app/routes.ts:39-57; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:801-802 |
| 002 | input parameters | none (URL structure QueryString) | route inputs [] | `match` | app/src/app/routes.generated.ts:6 |
| 003 | local useOverlay (Boolean, True) | passed to Layout_LoginFlow In_HasOverlay | useState(true) | `match` | app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts:32; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:13 |
| 004 | local UserCountry (Text) and OnInitialize | OnInitialize: UserCountry = AppManager_GetCachedUserInfo.UserInformation.CountryCode | lazy useState(() => appManager_GetCachedUserInfo().CountryCode): set once, before the first render | `match` | app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts:33-34; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:623-628; migration/change-requests/CR-AcceptPendingPolicies-2.md |
| 005 | local MainContainer (Text, "") | the id of the layout Main container after OnReady; input ContentBlockId of the block | useState('') and a ref for DefineHeight | `match` | app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts:35-36; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:19 |
| 006 | lifecycle | OnInitialize only; no OnReady, OnRender, OnDestroy or OnParametersChanged | no lifecycle effect besides the lazy state of the UserCountry row | `match` | app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts:31-37; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:776-797 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 007 | data actions and aggregates of the screen | none (the block owns GetPendingPolicies) | none in the screen hook | `match` | pack/screens.md AcceptPendingPolicies; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:511 (dataFetchActionNames = []) |
| 008 | AppManager_GetCachedUserInfo (UBT_AppManager) | JSON of the client variable AppManager_UserExtended into AppManager_CachedUserInfoRec | appManager_GetCachedUserInfo(): the same JSON read; a missing field keeps its default | `match` | app/src/platform/session/cachedUserInfo.ts:36-52; migration/change-requests/CR-AcceptPendingPolicies-2.md (Resolution)<br>In mock builds the mock identity fills the empty name fields. CountryCode comes from the stored record. |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 009 | Layout_LoginFlow In_ExtendedClass, In_HasOverlay | In_ExtendedClass = "ubt-policies", In_HasOverlay = useOverlay | LoginLayout inExtendedClass="ubt-policies" inHasOverlay={useOverlay} | `match` | app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx:28-31; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:136-139 |
| 010 | Layout_LoginFlow events | OnReady → Layout_LoginFlowOnReady(MainContainerId); OnPathCalculated → DefineHeight | onOnReady={screen.onLayoutReady}; onOnPathCalculated={screen.defineHeight} | `match` | app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx:32-33; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:144-167 |
| 011 | Placeholder_Header | empty | no placeholderHeader | `match` | app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx:28-60; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:184 |
| 012 | container Content | class ubt-policies--content, extended style "text-align: center;" | div#Content.ubt-policies--content with style textAlign center | `match` | app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx:36; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:185-197<br>The pack shows the class only. The TST view also has the extended style. |
| 013 | header: container ubt-policies--header, CustomContainer and CustomText "Welcome to" | CustomContainer PaddingSize Bottom Small; CustomText Neutral0, Heading3, SemiBold | PoliciesHeader: the same container, options and text | `match` | app/src/pages/AcceptPendingPolicies/components/PoliciesHeader/PoliciesHeader.tsx:23-34; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:199-252 |
| 014 | image ConnectLogoWhite | static image img/UBTConnect.ConnectLogoWhite.svg, style login-screen__connect-logo, grid class ThemeGrid_MarginGutter | img with both classes; src = osImage('img/UBTConnect.ConnectLogoWhite.svg') | `match` | app/src/pages/AcceptPendingPolicies/components/PoliciesHeader/PoliciesHeader.tsx:35; app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx:37; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:271-281 |
| 015 | CustomContainer with two CustomText | PaddingSize Top Base, Bottom Medium; "Connect and Directory" and "Terms and Conditions & Privacy Policy" in Neutral0, Base, SemiBold | the same container and two texts | `match` | app/src/pages/AcceptPendingPolicies/components/PoliciesHeader/PoliciesHeader.tsx:36-39; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:282-354 |
| 016 | Policy_Custom_AcceptPendingPolicies inputs | ContentBlockId = MainContainer, Country = UserCountry, PolicyApplications = TextToIdentifier of Connect_Applications Connect, Directory, Orbit (TST values: GUID texts) | contentBlockId and country as TST; policyApplications = the names 'Connect_Applications.Connect', '.Directory', '.Orbit' | `partial` | app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx:12-13, 22-25; app/src/pages/AcceptPendingPolicies/staticEntities.ts:14-20; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:374-386; migration/knowledge/static-entities-tst.json:2809 (UBTConnect.connect_Applications)<br>The mock ignores the value, so the demo shows no difference.<br>**F1** (major) |
| 017 | block events | AcceptedAll → AcceptPendingPoliciesAcceptedAll; NetworkError → AcceptPendingPoliciesNetworkError | onAcceptedAll: screen.acceptedAll; onNetworkError: showCommunicationExceptionMessage | `match` | app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx:22-25; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:391-420 |
| 018 | BackNavigationHandler (NavigationHandler) | no Priority argument (default 0); BackNavigation → BackNavigationHandlerBackNavigation | BackNavigationHandler with the default priority 0 and onBackNavigation | `match` | app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx:51-56; app/src/platform/navigation/BackNavigationHandler/BackNavigationHandler.tsx:19; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:431-446; TST NavigationHandler.NavigationHandler.BackNavigationHandler.mvc.js:16-17 |
| 019 | Placeholder_CommonUI_Inside_Layout | CommonUI_InsideLayout(In_IgnorePolicy = True) | CommonUiLayout inIgnorePolicy; the lock screen and the other parts stay | `match` | app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx:59; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:464-468 |
| 020 | screen stylesheet | getCssDependencies includes css/UBTConnect.App_Policies.AcceptPendingPolicies.css | ROUTE_CSS of AcceptPendingPolicies loads the original file | `match` | app/src/app/routes.css.generated.ts:12-22; migration/change-requests/CR-AcceptPendingPolicies-1.md |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 021 | DefineHeight | If MainContainer <> "": GetSVGMetric, then JSUtils_SetStyleProperty(MainContainer, "--current-svg-height", DecimalToText(HeightWithoutCurve) + "px") | getSVGMetric, then jSUtils_SetStyleProperty(ref, '--current-svg-height', String(HeightWithoutCurve) + 'px'); no If node | `match` | app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts:39-47; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:527-534<br>With MainContainer = '' the call getElementById('') finds no element, so React also sets nothing. String() of a number and DecimalToText of a Decimal can differ in the last digits; no visible effect. |
| 022 | Layout_LoginFlowOnReady(MainContainerId) | MainContainer = MainContainerId, then DefineHeight | onLayoutReady: ref and state = mainId, then defineHeight | `match` | app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts:49-53; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:712-714 |
| 023 | AcceptPendingPoliciesAcceptedAll: Cache_UserInfo_Get | Cache_UserInfo_Get (UBTConnect_Utils): the user-info cache entry; GetUserInformation on a miss | getUserInformation(): GetUserInformation_Wrapper. It also runs GetUserInformation_Wrapper_Assign (App_Policies_HasPolicyToAccept = the cached HasPoliciesToAccept) and waits for the app-start step | `partial` | app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts:58-59; app/src/platform/session/userInfo.ts:30-46; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:656; TST UBTConnect.controller.js:13631-13660; BR-C2UTL-141<br>**F5** (info) |
| 024 | AcceptedAll: HasPoliciesToAccept = False and PutCacheableObject | record.HasPoliciesToAccept = False; PutCacheableObject(DirectoryUser, Get_MemoryCacheKey_UniqueKey.Key, ToObject(record), 7200) | putCacheableObject(memberCache.userInfo(key), { ...info, HasPoliciesToAccept: false }); TTL 7200 | `match` | app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts:60-63; app/src/api/member/keys.ts:26; app/src/api/client/cache.ts:89-92; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:663-669<br>React names the cache type 'Connect_CacheType.DirectoryUser' (TST value "DirectoryUser"). The name only keys the client cache, and the reader uses the same name. |
| 025 | AcceptedAll: Get_MemoryCacheKey_UniqueKey (UBTConnect_Utils) | the Key output of the action; its logic is not in the dump | the client variable UBTConnect_Utils.UniqueCacheKey | `unclear` | app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts:60; app/src/platform/session/session.ts:207-208; KB connect2-utilities UBTConnect_Utils/module.md:103 ("not fetched")<br>**Q1**: Behaviour of Get_MemoryCacheKey_UniqueKey in module UBTConnect_Utils: not in the dump, no KB page. Is Key equal to Client.UniqueCacheKey, the key that Cache_UserInfo_Get reads (BR-C2UTL-141)? |
| 026 | AcceptedAll: Client.App_Policies_HasPolicyToAccept = False | assign | clientVar.hasPolicyToAccept.set(false) | `match` | app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts:64; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:673 |
| 027 | AcceptedAll: ReplaceOnUpcomingNavigation, AllowUpcomingNavigation, (Previous Screen) | the two calls, then navigateBack(null): transition UseHistory | replaceOnUpcomingNavigation(), allowUpcomingNavigation(), navigateBack() with the history transition | `match` | app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts:65-67; app/src/platform/navigation/osNavigate.ts:62-64, 135-145; app/src/platform/navigation/navigationGate.ts:30-32, 103-105; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:675-682<br>In both apps AllowUpcomingNavigation makes the back navigation skip the BackNavigationHandler of the screen. |
| 028 | AcceptedAll: exceptions | safeExecuteClientAction sends an exception (for example a CommunicationException on a cache miss) to the screen handleError → App_Policies → App_Common, which shows the message | no catch: continueOnClick awaits onAcceptedAll outside its try, and the 5-second timer calls it with void; the rejection stays unhandled and no message shows | `partial` | app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts:58-68; app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:84-87, 129; app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx:45-47; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:798-799; migration/runtime-sources/OutSystems.js (safeExecuteClientAction: tryCatchFinally → handleError); app/src/api/client/cache.ts:105-112 (a failed miss rejects the readers)<br>**F3** (minor) |
| 029 | AcceptedAll: disabled nodes | [DISABLED] NavigateToDeeplink, RedirectToURL(App_Policies_RedirectURL), HomeFeed | not implemented | `n/a` | pack/screens.md AcceptPendingPolicies; BR-UBTCON-946<br>dead in the model |
| 030 | AcceptPendingPoliciesNetworkError | ShowCommunicationExceptionMessage, then End | showCommunicationExceptionMessage | `match` | app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx:24; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:597 |
| 031 | BackNavigationHandlerBackNavigation | PreventNavigation(BackNavigationEvent) | event.preventDefault(); the queue stops, so the CommonUI handler (priority -10000) does not run | `match` | app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx:53-55; app/src/platform/navigation/backQueue.ts:55-77; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:564 |
| 032 | unreachable end nodes (5 screen actions) | not connected | not implemented | `n/a` | pack/screens.md AcceptPendingPolicies<br>dead in the model |

**Validations**

None: the screen has no input widget and no validation.

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 033 | BR-UBTCON-946 | acceptance clears the flag in the cache and on the device and returns to the previous screen; Back is blocked | the rows of PutCacheableObject, the flag, the navigation and BackNavigationHandlerBackNavigation | `match` | app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts:58-68; app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx:51-56; BR-UBTCON-946 |
| 034 | Client.App_Policies_HasPolicyToAccept (read and written; default False) | read by CommonUI_InsideLayout and Policy_Checker; written False here | default false; read by CommonUiLayout and PolicyChecker | `match` | app/src/platform/session/clientVars.ts:16; pack/data.md |
| 035 | handleError of the screen (App_Policies flow) | the flow handler logs and delegates to App_Common | raiseToFlowHandler: the App_Common handler (the block calls it for its own errors) | `match` | app/src/legacy/os/exceptions.ts:69-84; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:798-799; migration/shell/sources/UBTConnect.App_Policies.controller.js:12-16; migration/knowledge/shell-facts.md:61<br>The report of App_Common checks the branches of the App_Common handler. |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 036 | screen strings (3) | "Welcome to", "Connect and Directory", "Terms and Conditions & Privacy Policy" | the same 3 texts | `match` | app/src/pages/AcceptPendingPolicies/components/PoliciesHeader/PoliciesHeader.tsx:27, 37-38; TST UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:242, 326, 354<br>The pack prints a line break after "Connect and Directory"; the TST text has none. |

All 3 strings of the screen match.

## 3. Blocks of the flow

### 3.1 Policy_Custom_AcceptPendingPolicies

Public block, used by AcceptPendingPolicies only. View: `components/PendingPoliciesForm/PendingPoliciesForm.tsx`;
flows: `hooks/usePendingPoliciesForm.ts`; data: `app/src/api/policy/` (query, repository, mapper); mocks:
`app/src/pages/AcceptPendingPolicies/mocks.ts`.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 037 | input parameters | PolicyApplications (PolicyApplication Identifier List, mandatory), Country (Text), ContentBlockId (Text, mandatory) | PendingPoliciesInputs: policyApplications, country, contentBlockId | `match` | app/src/api/policy/types.ts:20-24; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:36-53 |
| 038 | events | AcceptedAll (mandatory), NetworkError | onAcceptedAll, onNetworkError | `match` | app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:12-17, 72-75 |
| 039 | local IsAllSelected (Boolean, False) | the select-all state and the Continue gate | useState(false) | `match` | app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:51-55; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:33-35 |
| 040 | lifecycle OnParametersChanged | Refresh Query GetPendingPolicies when an input changes | the inputs are the query key: a new value fetches again | `match` | app/src/api/policy/hooks.ts:13-19; app/src/api/policy/keys.ts:8; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:797-811, 1333 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 041 | GetPendingPolicies: fetch moment | At Start | useQuery on mount | `match` | app/src/api/policy/hooks.ts:14-19; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:768<br>The screen sets ContentBlockId after the layout OnReady, and OnParametersChanged then refreshes the list. React makes the same second call (CR-AcceptPendingPolicies-2, headless check: two request bodies). |
| 042 | DataActionGetPendingPolicies request | callDataAction with the block variables | callAction('UBTConnect', 'Policy_Custom_AcceptPendingPolicies/DataActionGetPendingPolicies', { PolicyApplications, Country, ContentBlockId, IsAllSelected }) | `match` | app/src/api/policy/repository.ts:12-24; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:749 |
| 043 | result of each fetch | replaceWith: a new list with IsSelected from the server; IsDataFetched stays True while a refresh runs; IsAllSelected keeps its value | setList on each new dataUpdatedAt; keepPreviousData keeps the rows while a refresh runs; isAllSelected keeps its value | `match` | app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:58-62; app/src/api/policy/hooks.ts:17; app/src/api/policy/mapper.ts:15-27; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:752 |
| 044 | failed fetch | handleError → App_Policies → App_Common; no retry | handleFlowError (raiseToFlowHandler) once per failed fetch; retry false | `match` | app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:66-70; app/src/api/policy/hooks.ts:18 |
| 045 | network events | no fetch on reconnect; while offline the call runs and fails (CommunicationException → message) | the query keeps the TanStack defaults refetchOnReconnect true and networkMode 'online'. An offline-then-online event fetches again and clears every tick, but isAllSelected keeps its value. While TanStack counts the browser offline, a fetch waits and no message shows | `partial` | app/src/api/policy/hooks.ts:13-19; app/src/api/client/queryClient.ts:17; app/src/api/member/hooks.ts:51; app/src/api/feed/hooks.ts:21; app/src/api/client/cache.ts:14<br>After the reset, Continue can stay enabled with no row ticked, and AcceptPolicies then gets an empty list.<br>**F2** (minor) |
| 046 | server side of DataActionGetPendingPolicies | GetPoliciesToAccept(Country, PolicyApplications), then ListAppend of { PolicyInformation, Url: GetPublishedPolicyContentUrl(Id) } per policy | the mock answers two fictional Connect policies and ignores the inputs | `mock-only` | app/src/pages/AcceptPendingPolicies/mocks.ts:50-67<br>Production needs the data action DataActionGetPendingPolicies of Policy_Custom_AcceptPendingPolicies (UBTConnect), with ApplicationPolicies GetPoliciesToAccept and GetPublishedPolicyContentUrl. |
| 047 | GetPendingPoliciesOnAfterFetch | after each fetch: Empty → JavaScript Wait(5) → AcceptedAll | one effect per fetched list: empty → setTimeout 5000 → onAcceptedAll; the timers stop when the block unmounts | `match` | app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:77-95; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:1048-1070, 1401-1405; BR-UBTCON-944 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 048 | If GetPendingPolicies.IsDataFetched, else container list-updating | until the first fetch ends: container list-updating | rows undefined → div.list-updating | `match` | app/src/pages/AcceptPendingPolicies/components/PendingPoliciesForm/PendingPoliciesForm.tsx:73-74; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:195, 694 |
| 049 | If not Policies.Empty, else the message container | container background-blue-lighter text-align-center padding-x-l padding-y-l: "You have accepted all required policies.", br, "No more policies available to accept." | the same container, texts and br | `match` | app/src/pages/AcceptPendingPolicies/components/PendingPoliciesForm/PendingPoliciesForm.tsx:75-82; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:196, 683-688 |
| 050 | Columns_Two | ColumnBehaviour ReduceLast, FlexDirection Column, ExtendedClasses "ubt-policies--columns" | ColumnsTwo with the same options | `match` | app/src/pages/AcceptPendingPolicies/components/PendingPoliciesForm/PendingPoliciesForm.tsx:86-89; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:197-207 |
| 051 | List, source GetPendingPolicies.Policies | List widget: style "list list-group ubt-policies--list" + OSFillParent, animateItems True, source_dataFetchStatus of the data action | a hand-written div with the same classes and data-list, not the shared OSList; no ' list-loading' or ' list-error' class while a fetch runs or fails | `partial` | app/src/pages/AcceptPendingPolicies/components/PendingPoliciesForm/PendingPoliciesForm.tsx:91; app/src/components/ui/os/OSList/OSList.tsx:60-64, 221; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:224-236<br>No CSS rule in app/public or app/src uses list-loading or list-error (grep: 0 hits), so nothing visible changes.<br>**F6** (info) |
| 052 | row: container display-flex margin-y-xl, If Current.IsSelected | Icon Checkbox or CheckboxOutlineBlank, Neutral0; Click → ToggleCheckBox | one Icon whose icon follows isSelected; onClick → onToggle(index) | `match` | app/src/pages/AcceptPendingPolicies/components/PendingPoliciesForm/PendingPoliciesForm.tsx:64-70, 93-96; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:245-300 |
| 053 | row text: container margin-left-xs white-space-nowrap, CustomText | "I agree to the " + ApplicationName + " - "; FitContent; Neutral0, Small, Regular | the same text and options | `match` | app/src/pages/AcceptPendingPolicies/components/PendingPoliciesForm/PendingPoliciesForm.tsx:97-102; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:328-350 |
| 054 | row link: CustomText PolicyTypeName | FitContent; Neutral0, Small, SemiBold, IsUnderlined; Clicked → OnClickPolicy | the same options; onClicked → onPolicyClick(policy) | `match` | app/src/pages/AcceptPendingPolicies/components/PendingPoliciesForm/PendingPoliciesForm.tsx:103-115; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:352-385 |
| 055 | Right placeholder: If Policies.Length > 1 | container ubt-policies--agree-to-all > Separator (defaults) > container display-flex padding-top-xl > If IsAllSelected Icon Checkbox or CheckboxOutlineBlank (Click → ToggleSelectAllCheckBox) > container margin-left-xs > CustomText "I agree to all" (FitContent, Small, Regular) | rows.length > 1 → the same structure | `match` | app/src/pages/AcceptPendingPolicies/components/PendingPoliciesForm/PendingPoliciesForm.tsx:121-137; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:418-560 |
| 056 | FixedFooter | useBottomBar False, ExpectedFooterHeight "calc(2 * var(--space-base) + var(--ubt-button-height-m))", ContentContainerId = ContentBlockId | the same three inputs | `match` | app/src/pages/AcceptPendingPolicies/components/PendingPoliciesForm/PendingPoliciesForm.tsx:140-145; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:576-578 |
| 057 | CustomContainer of the footer | Background Neutral0, PaddingSize General Base, ShadowId ExtraSmallTop | the same options | `match` | app/src/pages/AcceptPendingPolicies/components/PendingPoliciesForm/PendingPoliciesForm.tsx:146-153; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:604-612 |
| 058 | Button (UBTConnect_Utils CW_Common) | ButtonText "Continue", IsDisabled = not IsAllSelected; buttonOnClick → ContinueOnClick | ActionButton buttonText="Continue", isDisabled={!isAllSelected}, onButtonOnClick → continueOnClick | `match` | app/src/pages/AcceptPendingPolicies/components/PendingPoliciesForm/PendingPoliciesForm.tsx:154-159; app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx:45-47; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:635-636 |

**Block actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 059 | ToggleCheckBox and SelectCheckboxOnChange | Current.IsSelected = not Current.IsSelected; IsAllSelected = ListAll(IsSelected) | the row flips; isAllSelected = every(isSelected) | `match` | app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:101-107; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:828-845, 1090-1112 |
| 060 | ToggleSelectAllCheckBox and SelectAllCheckboxOnChange | IsAllSelected = not IsAllSelected; every row IsSelected = IsAllSelected | the same two steps | `match` | app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:109-115; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:770-786, 1229-1249 |
| 061 | ContinueOnClick: normal path | ListFilter(IsSelected) → GetDeviceInfo → AcceptPolicies(Policies = the ids, DeviceDetails = UniqueId, Platform, Manufacturer, Model) → AcceptedAll | filter → getDeviceInfo → acceptPolicies(ids, device), ClientIP '' → onAcceptedAll | `match` | app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:119-130; app/src/api/policy/mapper.ts:30-42; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:855-925 |
| 062 | ContinueOnClick: exceptions | CommunicationException → NetworkError; any other exception goes up to the flow handler | isCommunicationException → onNetworkError; else handleFlowError | `match` | app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:122-128; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:930-945 |
| 063 | GetDeviceInfo, web branch: UniqueId | UniqueId = localStorage["UUID"], or a new crypto.randomUUID() that it stores there: one id per browser | a randomUUID in a module variable: a new id on each page load | `unclear` | app/src/pages/AcceptPendingPolicies/actions.ts:50-66; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:1385-1387; BR-UBTCON-943<br>**F4** (minor)<br>**Q2**: Keep the device id in memory, or store it in localStorage["UUID"] as TST does? The code cites "AGENTS rule 16, Q4"; no ADR, CR, U decision or board row names it. |
| 064 | GetDeviceInfo, web branch: Platform and the other outputs | Platform "PWA" in standalone display mode, else "Web"; UserAgent; AppVersion and NetworkConnectionType are not sent | the same Platform rule; Manufacturer and Model stay "" | `match` | app/src/pages/AcceptPendingPolicies/actions.ts:55-63; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:1377-1383 |
| 065 | GetDeviceInfo, native branch | window.device (Cordova) gives uuid, manufacturer, model and platform | not built | `differs` | app/src/pages/AcceptPendingPolicies/actions.ts:53-54; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:1367-1376; ADR-1 (user, 2026-10-14), app/docs/reference/stack.md:129-133 |
| 066 | server side of ActionAcceptPolicies | ApplicationPolicies AcceptPolicies(Policies, DeviceDetails); no output read | the mock removes the accepted ids from its collection | `mock-only` | app/src/pages/AcceptPendingPolicies/mocks.ts:68-71; app/src/api/policy/repository.ts:26-30; migration/board.md:9 ("AcceptPolicies (write) mocked", user, 2026-10-14)<br>Production needs the server action ActionAcceptPolicies of Policy_Custom_AcceptPendingPolicies (UBTConnect), which calls ApplicationPolicies AcceptPolicies. |
| 067 | OnClickPolicy, web | CanOpenApplicationPolicyDirectlyViaUrl (ApplicationPolicies_CW): CanOpenDirectly = not window.cordova, True in a browser → JSUtils_PageOpenInNewTab(Current.Url) | jSUtils_PageOpenInNewTab(policy.url) on every click | `match` | app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:132-137; app/src/lib/jsUtils.ts:55-57; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:1122-1149; migration/shell/sources/ApplicationPolicies_CW.controller.js (IsWebJS); migration/knowledge/pwa-file-plugins.md:1-6 |
| 068 | DetailsOnClick (native branch of OnClickPolicy) | Get_PolicsyIsLoading: loading → End; else OpenApplicationPolicy(Url, Filename, ContentType), Set_PolicsyIsLoading(False), HasFoundNetworkError → NetworkError | not built | `differs` | app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:132-134; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:1167-1210; ADR-1, app/docs/reference/stack.md:129-133; decision U18 (user, 2026-10-14), migration/app-shell.spec.md:350, 385 |
| 069 | unreachable end nodes (9 block actions) | not connected | not implemented | `n/a` | pack/blocks.md Policy_Custom_AcceptPendingPolicies<br>dead in the model |

**Validations**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 070 | BR-UBTCON-941: the Continue gate | IsDisabled = not IsAllSelected | isDisabled={!isAllSelected} | `match` | app/src/pages/AcceptPendingPolicies/components/PendingPoliciesForm/PendingPoliciesForm.tsx:156; BR-UBTCON-941 |
| 071 | ContinueOnClick: completeness | no check at submit: it sends ListFilter(IsSelected) | no check at submit: it sends the selected ids | `match` | app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:120; BR-UBTCON-941 (test hooks) |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 072 | BR-UBTCON-942 | "I agree to all" only when Length > 1; row text "I agree to the <application> - <policy type>"; ListAll after each tick | rows.length > 1; the same text; every() after each tick | `match` | app/src/pages/AcceptPendingPolicies/components/PendingPoliciesForm/PendingPoliciesForm.tsx:100, 122; app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:101-115; BR-UBTCON-942 |
| 073 | BR-UBTCON-943 | the ticked ids and four device details; the result is not read; then AcceptedAll | the same call and order; no output read | `match` | app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:119-130; BR-UBTCON-943<br>The storage of UniqueId is a separate row (F4). |
| 074 | BR-UBTCON-944 | fetch for the user country and the Connect, Directory and Orbit applications; empty → wait 5 s → AcceptedAll | the country and the 5-second wait as TST; the application ids are names (F1) | `partial` | app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx:12-13; app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:77-95; BR-UBTCON-944<br>**F1** (major) |
| 075 | BR-UBTCON-945 | a new tab when CanOpenDirectly, else the policy viewer, which ignores a tap while a policy loads | a new tab, the web value of CanOpenDirectly; the viewer branch is the DetailsOnClick row | `match` | app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:132-137; BR-UBTCON-945 |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 076 | block strings (6) | "I agree to the ", " - ", "I agree to all", "Continue", "You have accepted all required policies.", "No more policies available to accept." | the same 6 texts | `match` | app/src/pages/AcceptPendingPolicies/components/PendingPoliciesForm/PendingPoliciesForm.tsx:78-80, 100, 133, 157; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:338, 550, 636, 688<br>The pack lists only the first two; the TST view has all six. |

All 6 strings of the block match.

### 3.2 Policy_Checker

Private block, used by CommonUI_InsideLayout. React: `app/src/platform/session/PolicyChecker/PolicyChecker.tsx`,
rendered by `CommonUiLayout`.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 077 | block definition | not public; no inputs, events or local variables; empty widget tree | PolicyChecker: an empty OSBlock | `match` | app/src/platform/session/PolicyChecker/PolicyChecker.tsx:17-29; TST UBTConnect.App_Policies.Policy_Checker.mvc.js:121 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 078 | placement in CommonUI_InsideLayout | If not In_IgnorePolicy and Client.App_Policies_HasPolicyToAccept → Policy_Checker | `!inIgnorePolicy && hasPolicyToAccept && <PolicyChecker>` | `match` | app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx:53, 75; ../App_Common/pack/blocks.md:184-185; BR-UBTCON-311<br>The report of App_Common checks the other parts of CommonUI_InsideLayout. |

**Block actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 079 | OnInitialize, flag True | ResetReplaceOnUpcomingNavigation, then AcceptPendingPolicies (transition Default) | resetReplaceOnUpcomingNavigation(), then navigate('/UBTConnect/AcceptPendingPolicies') with the default transition | `match` | app/src/platform/session/PolicyChecker/PolicyChecker.tsx:20-27; TST UBTConnect.App_Policies.Policy_Checker.mvc.js:158-164<br>React runs the check in an effect after the first render; OnInitialize runs before it. |
| 080 | OnInitialize, flag False | End | no navigation | `match` | app/src/platform/session/PolicyChecker/PolicyChecker.tsx:23 |
| 081 | [DISABLED] GetCurrentLocationURL and App_Policies_RedirectURL = CurrentLocation | disabled nodes | not implemented | `n/a` | pack/blocks.md Policy_Checker; BR-UBTCON-940<br>dead in the model |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 082 | BR-UBTCON-940 | while the flag is True, every screen whose layout does not opt out goes to AcceptPendingPolicies | the placement row and the OnInitialize rows | `match` | app/src/platform/session/PolicyChecker/PolicyChecker.tsx:20-27; app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx:75; BR-UBTCON-940 |
| 083 | Client.App_Policies_RedirectURL | read and written only by disabled nodes | no such client variable (grep: 0 hits in app/src) | `n/a` | pack/data.md; pack/screens.md; pack/blocks.md<br>dead in the model |

### 3.3 Blocks of other flows

- CommonUI_InsideLayout (App_Common, `../App_Common/pack/blocks.md`): AcceptPendingPolicies passes
  `In_IgnorePolicy = True` (row 019, `match`). The report of App_Common checks the behaviour (BR-UBTCON-310 to
  BR-UBTCON-313).
- Block_PINUnlock and Block_PINUnlock_ContentWrapper (App_PIN): transitive through CommonUI_InsideLayout. The report of
  App_PIN checks them.
- HandleOnResumeOpenLink (Legacy_Share), OfflineDataSyncEvents, UnsupportedVersion, UnsupportedVersion_Browser,
  UnsupportedVersion_Native, UnsupportedVersion_WebView, UnsupportedVersion_Wrapper and WelcomeToConnect (App_Common):
  transitive through CommonUI_InsideLayout. Not checked here.

## 4. Shared blocks and actions

The pack names GetSVGMetric and ShowCommunicationExceptionMessage as actions of this flow. The flow-level rows (screen
`-` in `checklist.json`):

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 084 | GetSVGMetric (own action of the flow; BR-UBTCON-514) | JavaScript: height of `.ubt-header-svg svg path`, the largest V and Q values; early return without the path or its d; HeightWithoutCurve = HeightPx * MaxV / MaxQ | the same parse and formula; without the path or its d every output is 0 | `match` | app/src/pages/AcceptPendingPolicies/actions.ts:8-39; TST UBTConnect.controller.js:13439-13470, 13528-13570; BR-UBTCON-514<br>Without a V or Q value React uses 0. TST converts the null JavaScript outputs; the runtime conversion and the Decimal division by 0 are not captured. |
| 085 | ShowCommunicationExceptionMessage (own action of the flow; BR-UBTCON-213) | TST: App_NetworkStatus_IsOnline_IsPersistent → "Service Interruption" (Info, with title); else "No internet connection…" (Error) | the same condition and messages | `match` | app/src/platform/feedback/exceptionMessages.ts:16-23; TST UBTConnect.controller.js:16104-16117; BR-UBTCON-213<br>DEV adds a live navigator.onLine check (section 6.1). |
| 086 | FeedbackMessage_AutoClose calls of ShowCommunicationExceptionMessage | (Title, Message, Type, True, "", 0, False) for both messages | title or '', encodedHtml true, extendedClass '', delayMs 0, useDebounce false | `match` | app/src/platform/feedback/exceptionMessages.ts:17-23; app/src/platform/feedback/feedbackMessageAutoClose.ts:76-86; TST UBTConnect.controller.js:16112-16116 |
| 087 | Client.App_NetworkStatus_IsOnline_IsPersistent (read; default True) | read by ShowCommunicationExceptionMessage | default true | `match` | app/src/platform/session/clientVars.ts:28; pack/data.md<br>The report of App_Common checks the writers. |
| 088 | NavigationHandler: AllowUpcomingNavigation, ReplaceOnUpcomingNavigation, ResetReplaceOnUpcomingNavigation, PreventNavigation | skip the handlers once; replace the entry on the next navigation; clear that; stop the back navigation | allowUpcomingNavigation, replaceOnUpcomingNavigation, resetReplaceOnUpcomingNavigation, event.preventDefault() | `match` | app/src/platform/navigation/navigationGate.ts:30-32, 103-105; app/src/platform/navigation/osNavigate.ts:62-68; app/src/platform/navigation/backQueue.ts:55-77<br>The report of App_PIN also checks the first two (row 130). |
| 089 | UBTJavaScriptUtils: JSUtils_SetStyleProperty, JSUtils_PageOpenInNewTab | getElementById(Id)?.style.setProperty(name, value); window.open(URL, '_blank') | the same two statements | `match` | app/src/lib/jsUtils.ts:8-10, 55-57; migration/shell/sources/UBTJavaScriptUtils.controller.js (JavaScript1JS of both actions) |
| 090 | strings of ShowCommunicationExceptionMessage (3) | "Service Interruption", the high-traffic text, "No internet connection. Please check your network settings and try again." | the same texts (the full TST text, with \r\n) | `match` | app/src/platform/feedback/exceptionMessages.ts:10-14; TST UBTConnect.controller.js:16112-16116 |

Not checked here (shared, in `../_shared/pack/actions.md`): ExitApplicationForWebViewUpdate, GetURLFromEventDataURL,
Get_IsUnsupportedSystem, Get_IsUnsupportedVersion, OfflineDataSync, OfflineDataSyncConfiguration,
OpenGooglePlay_Chrome, OpenGooglePlay_UBTConnect, OpenGooglePlay_WebView, SetResumeLoginLink,
Try_GetIsSupportedVersion, Upgrade_UBTConnect, Upgrade_WebView. The flow reaches them only through CommonUI_InsideLayout.

Not checked here (referenced UI blocks): the internals of Layout_LoginFlow, CustomContainer, CustomText, Columns_Two,
Icon, FixedFooter (UBTConnectLibrary), Separator (OutSystemsUI) and Button (UBTConnect_Utils). The rows above check the
arguments that the flow passes. The internals of the referenced client actions AppManager_GetCachedUserInfo and
PutCacheableObject: this report compares them with CR-AcceptPendingPolicies-2 and `app/src/api/client/cache.ts` only.

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix |
|---|---|---|---|---|---|
| F1 | major | AcceptPendingPolicies / Policy_Custom_AcceptPendingPolicies input PolicyApplications | TST sends `TextToIdentifier` of the Connect_Applications records: the GUID texts of Connect, Directory and Orbit (`static-entities-tst.json:2809`). React sends the names `Connect_Applications.Connect`, `.Directory` and `.Orbit`. The comment of `staticEntities.ts` says that the values are not in the compiled code; the TST values are in the knowledge file since 2026-10-15. The mock ignores the input. When the server finds no pending policy for these ids, the screen shows "You have accepted all required policies." and clears the flag after 5 seconds (BR-UBTCON-944), with no acceptance. | `app/src/pages/AcceptPendingPolicies/staticEntities.ts:14-20`; `app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx:12-13` | Use the TST values of `UBTConnect.connect_Applications` from `migration/knowledge/static-entities-tst.json` and update the comment. |
| F2 | minor | Policy_Custom_AcceptPendingPolicies / GetPendingPolicies | The query keeps the TanStack defaults `refetchOnReconnect: true` and `networkMode: 'online'`. An offline-then-online event fetches the list again: every tick goes, but `isAllSelected` stays True, so Continue stays enabled and sends an empty list. While TanStack counts the browser offline, a fetch waits and the communication message does not show. OutSystems does not fetch on reconnect, and an offline call fails with the message. | `app/src/api/policy/hooks.ts:13-19` | Set `refetchOnReconnect: false` and `networkMode: 'always'`, as `api/feed`, `api/member` and the memory cache do. |
| F3 | minor | AcceptPendingPolicies / AcceptPendingPoliciesAcceptedAll | TST runs the screen action through `safeExecuteClientAction`: an exception goes to the screen handleError, then App_Policies and App_Common, which show the message. React has no catch: `continueOnClick` awaits `onAcceptedAll` outside its `try`, and the 5-second timer calls it with `void`. A failed user-info read (cache miss and network error) leaves an unhandled rejection and no message. | `app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts:58-68`; `app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:84-87, 129` | Catch the error in `acceptedAll` and call `raiseToFlowHandler(error)`. |
| F4 | minor | Policy_Custom_AcceptPendingPolicies / GetDeviceInfo | TST keeps one device id per browser in `localStorage["UUID"]` and sends it as `DeviceDetails.UniqueId`. React makes a new id on each page load. The server records of the acceptances get a different device id each time. The code cites "AGENTS rule 16, Q4", which is not a recorded decision of the kinds that this check accepts. | `app/src/pages/AcceptPendingPolicies/actions.ts:50-66` | Q2. |
| F5 | info | AcceptPendingPolicies / AcceptPendingPoliciesAcceptedAll | TST reads the record with `Cache_UserInfo_Get`. React calls `getUserInformation()` (GetUserInformation_Wrapper): it also sets `App_Policies_HasPolicyToAccept` from the cached record (True at that moment) and waits for the app-start step. The next statement sets the flag False, and CommonUiLayout ignores the policy on this screen, so the user sees no difference. | `app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts:59` | Read the entry with `getCacheableObject(memberCache.userInfo(key), fetchUserInformation)`, the Cache_UserInfo_Get part of the wrapper. |
| F6 | info | Policy_Custom_AcceptPendingPolicies / List | The list is a hand-written `div`, not the shared `OSList` (P-LIST). It has no ` list-loading` or ` list-error` class while GetPendingPolicies runs or fails. No CSS rule uses these classes. | `app/src/pages/AcceptPendingPolicies/components/PendingPoliciesForm/PendingPoliciesForm.tsx:91` | Render the rows with `OSList` (`animateItems`, `sourceDataFetchStatus`). |

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| ShowCommunicationExceptionMessage | A JavaScript node `CheckIsOnlineNow` reads `navigator.onLine`. The condition is `Client.App_NetworkStatus_IsOnline_IsPersistent and CheckIsOnlineNow.IsOnlineNow`. | No JavaScript node. The condition is `App_NetworkStatus_IsOnline_IsPersistent` only. | TST | `pack/actions.md` ShowCommunicationExceptionMessage; `UBTConnect.controller.js:16104-16117` (`tst_source.py show`); `app/src/platform/feedback/exceptionMessages.ts:16-23` |

The screen and the two blocks agree on DEV and TST in every other checked item. Two gaps of the dump are not model
differences. The pack does not show the extended style `text-align: center;` of the container Content. The pack also
prints a line break after "Connect and Directory".

### 6.2 KB pages vs TST (for the KB owner)

| Id | KB text | TST (compiled code) | Source |
|---|---|---|---|
| K1 | `ui/policies.md:50` and BR-UBTCON-944 (Inputs): the block has an input `WaitTimeSeconds` that it declares but does not use. | The block has three inputs: PolicyApplications, Country and ContentBlockId. `WaitTimeSeconds` is the parameter of the JavaScript node Wait, which the block calls with the literal 5. The DEV pack agrees with TST. | `UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:33-53, 1065, 1401-1405` |
| K2 | BR-UBTCON-213 (Provenance): no element calls `OnOnline` or `OnOffiline`, so the flag stays True. | OnApplicationReady gives OnOnline and OnOffiline to `NetworkDetetion_DefineCallbacks` as callbacks. OnApplicationReady is not in the DEV pack. | `UBTConnect.controller.js:15331-15332` (`tst_source.py show`) |

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | Fact for the review pass: is the `Key` of `Get_MemoryCacheKey_UniqueKey` (UBTConnect_Utils) equal to `Client.UniqueCacheKey`? | AcceptedAll writes the user info back under this key. The reader `Cache_UserInfo_Get` uses `Client.UniqueCacheKey` (BR-C2UTL-141). With another key the next read gets the pending flag again. React uses `UniqueCacheKey` for both. The dump and the KB do not have the action (KB `UBTConnect_Utils/module.md:103`: not fetched). | (a) Read the action with the MCP (`getClientAction`, UBTConnect_Utils) in the review pass. (b) Read the TST copy of `UBTConnect_Utils.controller.js` (read-only static GET). | (a): one MCP call settles it. |
| Q2 | Keep the device id of `AcceptPolicies` in memory, or store it in `localStorage["UUID"]` as TST does (F4)? | TST sends one id per browser to `ApplicationPolicies.AcceptPolicies`. React sends a new id after each page load. Rule 16 of `migration/AGENTS.md` keeps personal identifiers out of browser storage. No record says whether a random device id counts as one. | (a) Store it in `localStorage["UUID"]` as TST does, and record the decision. (b) Keep it in memory and record the decision on the board row. | (a): the server gets the same device id as from the original app. |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 11 | 11 | 0 | 0 | 0 | 0 | 0 | 0 |
| data | 9 | 7 | 1 | 0 | 0 | 1 | 0 | 0 |
| ui | 24 | 22 | 2 | 0 | 0 | 0 | 0 | 0 |
| actions | 27 | 17 | 2 | 1 | 2 | 1 | 4 | 0 |
| validations | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 14 | 12 | 1 | 0 | 0 | 0 | 1 | 0 |
| strings | 3 | 3 | 0 | 0 | 0 | 0 | 0 | 0 |
| **total** | **90** | **74** | **6** | **1** | **2** | **2** | **5** | **0** |

## 9. Follow-up pass (2026-10-27)

Rows settled or sharpened after the user answers of 2026-10-27 and the TST files that `tst_source.py` reads. A row that stays `unclear` has a new question that names what settles it. Every row below has `verified: "live"`.

| Row | Old verdict | New verdict | Evidence |
|---|---|---|---|
| App_Policies-025 | `unclear` | `match` | migration/runtime-sources/UBTConnect_Utils.controller.js:2383-2384; app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts:60; app/src/platform/session/session.ts:207-208 |
| App_Policies-063 | `unclear` | `missing` | app/src/pages/AcceptPendingPolicies/actions.ts:50-66; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:1385-1387; BR-UBTCON-943; migration/clarify/answers.json App_Policies:Q2 |
