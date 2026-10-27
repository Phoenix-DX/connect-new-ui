# Flow report: App_Cache

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 0 (block-only flow) |
| Own blocks | CacheControl_UserInfo_Wrapper (1) |
| Own actions | GetUserInformation_Wrapper_Assign (shared, 15 flows; its internals are judged here, as the App_Common report asks) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `_shared/pack/actions.md:295-303`, `app/src/…`, KB rule `BR-UBTCON-530`, TST compiled code (`UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc.js`, `UBTConnect_Utils.CacheControl.CacheControl_UserInfo.mvc.js`, `UBTConnect.controller.js`) |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 9 · partial 0 · missing 0 · differs 0 · mock-only 1 · n/a 0 · unclear 0 (same as `checklist.json`).
- No findings. The React port follows the TST compiled code in each step.
- The mock-only row is the data action `DataActionGetCacheInfo` of the referenced block `CacheControl_UserInfo`.
  Production needs that screen service of `UBTConnect_Utils`.
- Status: the block reads the user information through the memory cache. It copies `HasPoliciesToAccept` into
  `App_Policies_HasPolicyToAccept` and then raises `Result` with `Directory_UserCurrent`, as TST does.

## 2. Blocks

### 2.1 CacheControl_UserInfo_Wrapper

**Identity**

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -001 block | public False; no inputs, no local variables, no lifecycle; event `Result(UserInformation)` | `UserInfoCache` with `OSBlock name="App_Cache.CacheControl_UserInfo_Wrapper"` | match | `app/src/platform/session/UserInfoCache/UserInfoCache.tsx:18-31`; TST file present. React users: Profile, Menu, CountryList, ContactUsDetails, FilterSheet. Map (board skip), MoreActionSheet and SortSheet: checked in the reports of their flows |

**Data**

| Data source | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -008 `DataActionGetCacheInfo` (inside the referenced block) | screen service `UBTConnect_Utils/CacheControl/CacheControl_UserInfo/DataActionGetCacheInfo`, run on a cache miss | `callAction('UBTConnect_Utils','CacheControl_UserInfo/DataActionGetCacheInfo')`, mock fixture | mock-only | `app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx:37-40`; fixture `app/src/mocks/fixtures/UBTConnect_Utils/DataActionGetCacheInfo/02-7ff2e5bc.json`; TST `CacheControl_UserInfo.mvc.js:253`; `migration/app-shell.spec.md:310`. Production needs the screen service of `UBTConnect_Utils` |
| -007 `Client.App_Policies_HasPolicyToAccept` | written by `GetUserInformation_Wrapper_Assign`; read by `Policy_Checker` | written `actions.ts:117`; read `PolicyChecker.tsx:23`; default False `clientVars.ts:16` | match | TST write `UBTConnect.controller.js:13699-13700`, TST read `:22458`; React `app/src/lib/ubtConnect/actions.ts:117`, `app/src/platform/session/PolicyChecker/PolicyChecker.tsx:23` |

**UI tree**

| Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -002 block `CacheControl_UserInfo` | no `CacheKey` argument; on `Result` → `CacheControl_UserInfoResult` | `<UserInfoCacheControl onResult={onUserInfoResult} />`, `cacheKey` default "" | match | TST wrapper view `inputs: {}` (`CacheControl_UserInfo_Wrapper.mvc.js:126-127`); an empty key becomes `UniqueCacheKey` in TST (`CacheControl_UserInfo.mvc.js:318-320`) and in React (`UserInfoCacheControl.tsx:27`) |

**Block actions**

| Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -004 `CacheControl_UserInfoResult`: assign call | call `GetUserInformation_Wrapper_Assign(UserInformation=CacheControl_Response)` | `getUserInformation_Wrapper_Assign(response)` | match | TST `CacheControl_UserInfo_Wrapper.mvc.js:198-200`; React `UserInfoCache.tsx:23-24` |
| -005 `CacheControl_UserInfoResult`: event | then trigger `Result(UserInformation=CacheControl_Response.Directory_UserCurrent)` | `latest.current?.(response.Directory_UserCurrent)` after the assign | match | TST `:202-203` (same order); React `UserInfoCache.tsx:25` |
| -006 `GetUserInformation_Wrapper_Assign` (shared) | `App_Policies_HasPolicyToAccept = UserInformation.HasPoliciesToAccept` | `setClientVar('UBTConnect.App_Policies_HasPolicyToAccept', userInformation.HasPoliciesToAccept)` | match | DEV `_shared/pack/actions.md:295-303`; TST `UBTConnect.controller.js:13699-13700`; React `app/src/lib/ubtConnect/actions.ts:116-118`; `BR-UBTCON-530`. The App_Common report (row 176) gives the same verdict |

**Validations**

None. The block has no input widget.

**Business logic**

| Logic | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -003 event `Result(UserInformation: Directory_UserCurrent)` mandatory | each instance binds a handler | prop `onResult?` optional | match | `UserInfoCache.tsx:13,25`; all five React users pass `onResult` (`ProfilePage.tsx:109`, `MenuPage.tsx:97`, `CountryListPage.tsx:65`, `ContactUsDetailsPage.tsx:107`, `FilterSheetContainer.tsx:61`) |
| -009 referenced block `CacheControl_UserInfo` | miss: refresh `GetCacheInfo`, then in OnAfterFetch `PutCacheableObject` and `Result`; hit: `AssignFromObject` → `Result` | `onNonCacheHit` (fetch, put, result) and `onCacheHit` (result) | match | TST `CacheControl_UserInfo.mvc.js:288, 348-351, 385-389`; React `UserInfoCacheControl.tsx:33-44` |

**Strings**

| Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -010 string literals | none (`pack/strings.md`) | none | match | the block renders no text |

## 3. Blocks of the flow

The flow has one own block (§2.1). It uses no block of another UBTConnect flow. The referenced block
`UBTConnect_Utils.CacheControl.CacheControl_UserInfo` is checked against its TST file in rows -002, -008 and -009.

## 4. Shared blocks and actions

| Shared item | React location | Verdict |
|---|---|---|
| `GetUserInformation_Wrapper_Assign` (folder App_Cache, 15 flows) | `app/src/lib/ubtConnect/actions.ts:116-118` | match (row -006); the internals are judged here |
| `GetUserInformation_Wrapper` (the second writer of the client variable) | `app/src/platform/session/userInfo.ts:38-46` | not in this pack; the App_Common report assigns it to the report of `_shared` |

## 5. Findings

No findings.

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| - | no difference found | - | - | rows -002 to -009 |

### 6.2 KB pages vs TST (for the KB owner)

None. `BR-UBTCON-530` agrees with TST.

## 7. Questions for the user

None.

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| data | 2 | 1 | 0 | 0 | 0 | 1 | 0 | 0 |
| ui | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| actions | 3 | 3 | 0 | 0 | 0 | 0 | 0 | 0 |
| validations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 |
| strings | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| **total** | 10 | 9 | 0 | 0 | 0 | 1 | 0 | 0 |
