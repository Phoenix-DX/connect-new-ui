# Flow report: Legacy_OrbitQRCodeFlow

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 1 (built: 1: QRCodeGenerate; not built: none) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/pages/QRCodeGenerate/`, `app/src/api/`, `app/src/platform/`, KB pages (`pack/kb.md`), TST compiled code of the screen, of the block `ScreenBlock_GenerateQRCode` and of `Connect2_OrbitMobile_MUI.controller.js` |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |
| TST lines | The numbers are file lines, as `tst_source.py grep` prints them. `show` prints one header line first, so its numbers are one higher. `S` = `UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate.mvc.js`, `B` = `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode.mvc.js`. |

## 1. Summary

- Counts by verdict: match 60 · partial 1 · missing 1 · differs 0 · mock-only 2 · n/a 4 · unclear 0 (same as `checklist.json`, 68 rows).
- **F1** (minor): React does not set the document title "QRCodeGenerate". The tab keeps "UBTConnect". This is the app-wide gap of flow App_Services F5.
- **F2** (minor): with an empty signed photo URL, TST renders the member photo with `src=""`; React renders the image without `src`.
- Note: no mock answers `Connect2_LegacyShared` `ActionGetSignedImagesInBulk` (the server call behind `GetCacheableSignedImageURL`). The demo shows no member photo. The QR image, the name, the location, the seats and the tag show.
- Status: a user can open the QR pass of an event. The screen shows the skeleton, then the pass or the "couldn't be generated" message. The footer opens the helpdesk e-mail screen. The tab title and the member photo differ from TST.

## 2. Screens

### 2.1 QRCodeGenerate

The screen is a wrapper. It passes its six inputs to `ScreenBlock_GenerateQRCode` (module `Connect2_OrbitMobile_MUI`) and handles the block event `NavigateTo_ContactHelpdesk`. The block logic is in §3. The board row is `migration/board.md:84` (build, user, 2026-10-16).

**Identity**

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| roles | DEV: Registered, UBTOne_User. TST: `checkRegistered` only | route meta `member` (default `MEMBER_ROUTE`) | match | `S:344-345`; `app/src/app/routes.ts:40`, `:92`. §6.1 |
| screen title | "QRCodeGenerate"; the runtime sets `document.title` on mount | no code sets `document.title`; the tab shows "UBTConnect" | missing | `S:166-168`; `OutSystemsReactView.js:7`; `app/index.html:6`. F1, Q1 |
| flow error handler | `Legacy_OrbitQRCodeFlow.handleError` → `App_Common.handleError` | a rejected OnReady goes to `raiseToFlowHandler` | match | `app/src/platform/navigation/flowState.ts:112`. The handler: owned by flow App_Common |

**Data** (screen inputs)

| Data source | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| `In_MemberId`, `In_EventId` (LongInteger) | default 0 when absent | `params.get(...) ?? '0'` | match | `app/src/pages/QRCodeGenerate/inputs.ts:24-25` |
| `In_EventName`, `In_EventLocation` (Text) | default "" | `?? ''` | match | `inputs.ts:26`, `:29` |
| `In_EventStartDate`, `In_EventEndDate` (DateTime) | default null date | `?? ''` ("" is the null date) | match | `inputs.ts:12-15`, `:27-28` |
| client variables `App_PIN_BiometricEnabled`, `App_Policies_*`, `IsNavigateToHomeOnBack` | read by the layout blocks | not read by the page | n/a | owned by flow _shared, see its report |

**UI tree**

| Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| `ScreenBlock_GenerateQRCode` | six inputs = the screen inputs | `GenerateQrCodeView` + `useGenerateQrCode(inputs)` | match | `S:186-192`; `QRCodeGeneratePage.tsx:20-31` |
| `CommonUI_InsideLayout` | no arguments | `<CommonUiLayout id="$b2" />` | match | `S:228`; `QRCodeGeneratePage.tsx:32`. Internals: owned by flow App_Common |
| event `NavigateTo_ContactHelpdesk` | handler with `Event_Subject`, `Event_EventName` | one handler computes the same values | match | `S:199`; `B:733-735`; `useGenerateQrCode.ts:89-103` |

**Screen actions**

| Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| `OnHandle_ContactHelpdesk` inputs | Subject, EventName | Subject from `getContactHelpdeskSubject_Event`, EventName = `In_EventName` | match | `S:280-281`; `useGenerateQrCode.ts:90-96` |
| navigation | `ContactByEmailOrbitHelpdesk(In_MilestoneId "", In_EventName, In_EventId, In_Subject)`, transition Default | same URL inputs; no transition argument → `DEFAULT_TRANSITION` | match | `S:288-293`; `useGenerateQrCode.ts:97-102`; `osNavigate.ts:95`; `screenTransition.ts:40`, `:54`. §6.1 |
| `In_EventName` source | the event argument, which the block fills with `In_EventName` | the screen input | match | `S:290`; `B:735` |
| no Orbit access check | no node before the navigation | no check | match | `S:280-293`; KB `ui/legacy-orbit.md:91` |

**Validations**

| Validation | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| mandatory inputs | DEV marks six inputs mandatory; TST `setInputs` has no check | no check | match | `S` setInputs; `inputs.ts:24-29`. §6.1 |

**Business logic**: in §3 (the screen has none of its own).

**Strings**: the 17 strings of `pack/strings.md` belong to the layout blocks (`UnsupportedVersion*`, `Block_PINUnlock*`): n/a, owned by flows App_Common and App_PIN. The four strings of the block match (rows 047, 054, 057, 059).

## 3. Blocks of the flow

### 3.1 ScreenBlock_GenerateQRCode (Connect2_OrbitMobile_MUI, logic from TST)

**Lifecycle and RefreshData**

| Step | TST | React | Verdict | Evidence / note |
|---|---|---|---|---|
| variables | UserName, UserLocation, UserSignedURL, IsFetchingData, QRCodeData; data action Get_EventQRCode | `INITIAL_GENERATE_QR_CODE_STATE` | match | `B:32-44`, `:83`; `generateQrCodeState.ts:38-46` |
| OnReady | JS node `WasCurrentViewRestoredFromCache`; FromCache → end; else RefreshData | `if (restored) return; await refreshData(...)` | match | `B:663`, `:679`, `:687`, `:691-692`; `useGenerateQrCode.ts:81-84` |
| OnReady timing | runs when the view mounts | `beforePaint: true` | match | `B:663`; `useGenerateQrCode.ts:51`. The comment "decision W28" is not a source; the row does not need one |
| IsFetchingData = True | first node | `assign({ isFetchingData: true })` | match | `B:768`; `useGenerateQrCode.ts:65` |
| AppManager_GetCachedUserInfo | client action of UBT_AppManager | `appManager_GetCachedUserInfo()` | match | `B:771`; `useGenerateQrCode.ts:66`. Mock user fields: CR-QRCodeGenerate-1 |
| UserName | FirstName + " " + LastName | same | match | `B:776`; `generateQrCodeState.ts:60` |
| UserLocation | Locality + (", " + Country when Locality is set, else Country) | same | match | `B:779`; `generateQrCodeState.ts:61` |
| GetCacheableSignedImageURL | (IntegerToLongInteger(TextToInteger(MemberId)), Member, Medium) | `fetchLegacySignedImageURL(memberPhotoIdOf(...), Member, Medium)` | match | `B:783`; `useGenerateQrCode.ts:69-73`; `generateQrCodeState.ts:67`. MemberId comes from the cached user, not from `In_MemberId` |
| UserSignedURL | = `GetCacheableSignedImageURL.URL` | assigned from the call | match | `B:789`; `useGenerateQrCode.ts:68-74` |
| refresh Get_EventQRCode | `get_EventQRCode$DataActRefresh` | `fetchEventQRCode(eventQRCodeCallInputs(...))` | match | `B:792`, `:642`; `useGenerateQrCode.ts:75` |
| OnAfterFetch | QRCodeData = Response, after the fetch | `assign(afterFetchOf(data))` | match | `B:650`, `:827`; `generateQrCodeState.ts:87-89` |
| IsFetchingData = False | last node | `assign({ isFetchingData: false })` | match | `B:799`; `useGenerateQrCode.ts:77` |
| error path | catch rethrows; IsFetchingData stays True | no try/finally; the rejection goes to the flow handler | match | `B:806`; `useGenerateQrCode.ts:57-78`; `flowState.ts:112` |

**Data**

| Data source | TST | React | Verdict | Evidence / note |
|---|---|---|---|---|
| Get_EventQRCode fetch moment | on demand only (`-1`: the start fetch takes only a count of 0) | only in RefreshData | match | `B:622`, `:661`; `OutSystems.js:17` (fetchReadySources); `useGenerateQrCode.ts:75` |
| Get_EventQRCode inputs | the block variables; the server reads `In_EventId`, `In_MemberId` | the block variables, typed by the API contract | match | `B:642`; KB `BR-C2LEG-962`; `generateQrCodeState.ts:70-82`; `mocks.ts:41` |
| DataActionGet_EventQRCode (server) | screen service of Connect2_OrbitMobile_MUI (Connect2_OrbitMobile_BL GetEventQRCode) | `contractHandler` with ORBIT_EVENT_PASSES | mock-only | `app/src/pages/QRCodeGenerate/mocks.ts:40-43` |
| GetCacheableSignedImageURL (server) | Connect2_LegacyShared, server action GetSignedImagesInBulk | `callAction('Connect2_LegacyShared', 'ActionGetSignedImagesInBulk')`; no mock handler; a failed call gives "" | mock-only | `app/src/api/image/repository.ts:21`, `:44`; `app/src/api/client/cache.ts:154-168`; `app/src/main.tsx:40`. The only mock of this action is for UBTConnect_Utils (`EntityLazyImage/mocks.ts:49`) |

**UI tree**

| Element | TST | React | Verdict | Evidence / note |
|---|---|---|---|---|
| Layout_Orbit | CustomClass "orbit-detail orbit-header-center" | same | match | `B:250`; `GenerateQrCodeView.tsx:121-123` |
| placeholders Menu, CommonUI_Elements | empty | empty divs | match | `B:273`, `:594-600`; `GenerateQrCodeView.tsx:124`, `:129` |
| headerLeft MenuIcon | MenuAction Auto | `MENU_ACTION_AUTO` | match | `B:281`; `GenerateQrCodeView.tsx:13`, `:125` |
| title | Expression `In_EventName` | `{eventName}` | match | `B:300-302`; `GenerateQrCodeView.tsx:126` |
| headerRight, headerContent | `PlaceholderContent.Empty` | OrbitLayout renders an empty div for each | match | `B:311-312`; `OrbitLayout.tsx:82-83` |
| If not IsFetchingData, else skeleton | Skeleton_Loading `memberQRCode` | `OrbitSkeleton` `MemberQRCode` | match | `B:314`, `:535`; `GenerateQrCodeView.tsx:111-112` |
| If fetched and QRCodeAsBinary not null | member card, else NoInformation_Orbit | `hasPassOf` | match | `B:315`, `:513`; `generateQrCodeState.ts:93-94`; `GenerateQrCodeView.tsx:113-116` |
| member photo | Image External, url UserSignedURL, no default image; empty url → `src=""` | `src` omitted when the URL is "" | partial | `B:337-339`; `OutSystemsReactWidgets.js:2`; `GenerateQrCodeView.tsx:65`. F2 |
| name, location | two containers with their style classes | same | match | `B:348`, `:365`; `GenerateQrCodeView.tsx:67-72` |
| guest role, seats, GMP tag | visible when set; not visible = not rendered | rendered only when set | match | `B:383`, `:401`, `:453`, `:461`; `OutSystemsReactWidgets.js:1`; `GenerateQrCodeView.tsx:73-97` |
| seat list | "Row:", List "list list-group", animateItems, " & " between items | same | match | `B:408-409`, `:416-422`, `:433`; `GenerateQrCodeView.tsx:82-89` |
| check-in area and QR image | If QRCodeAsBinary not null; "Check into Event"; Image Binary "orbit-qrcode-code" | object URL of the binary | match | `B:467`, `:481`, `:488`, `:498-500`; `GenerateQrCodeView.tsx:98-107`; `useBinaryImageURL.ts:11-16` |
| bottomBar | ContactHelpdesk_Footer when not IsFetchingData; Click → OnHandle_ContactHelpdesk | same | match | `B:556-557`, `:570`; `GenerateQrCodeView.tsx:128` |

**Business logic**

| Logic | TST | React | Verdict | Evidence / note |
|---|---|---|---|---|
| GetContactHelpdeskSubject_Event | EventName [+ " - "], Location [+ " - "], "start - end" when both dates are set | same terms | match | `Connect2_OrbitMobile_MUI.controller.js:1963`, `:1979`; `generateQrCodeState.ts:104-114` |
| GetFormattedDateTime arguments | (date, false, true, false, true, false, false) | same | match | `controller.js:1980`, `:1982`; `generateQrCodeState.ts:99` |
| null-date test | both dates not null | both dates not "" | match | `controller.js:1979`; `generateQrCodeState.ts:110` |
| rule BR-C2LEG-962 | pass, no-image message, optional fields, user name and location | rows above | match | KB `rules/BR-C2LEG-962.md`. One term disagrees with TST: K1 |

## 4. Shared blocks and actions

- `CommonUI_InsideLayout`, `Policy_Checker`, `Block_PINUnlock*`, `UnsupportedVersion_Wrapper`: owned by flows App_Common and App_PIN, see their reports.
- `Layout_Orbit`, `MenuIcon__UpdatedOSUI` (Connect2_LegacyShared), `NoInformation_Orbit`, `Skeleton_Loading`, `ContactHelpdesk_Footer` (Connect2_OrbitMobile_MUI): the instances and their arguments match (§3.1). Their internals: not checked here (shared).
- The 13 shared client actions of `pack/actions.md` (`PIN_Check`, `AppManager_*`, `PreventNavigation`, ...): called by the layout blocks only. Checked in the reports of App_Common and _shared.
- `GetFormattedDateTime` (`app/src/lib/orbit/actions.ts`): shared, not checked here.

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix | Status |
|---|---|---|---|---|---|---|
| F1 | minor | QRCodeGenerate / screen title | The runtime sets `document.title` to "QRCodeGenerate" when the screen mounts (`OutSystemsReactView.js:7`, `S:166-168`). No code of the React app sets `document.title`. | `app/index.html:6`; `app/src/app/routes.generated.ts:68` | Answer Q1 (one answer for all flows, see App_Services Q4). | fixed 2026-10-27 (`fixes/A-shell.md`) |
| F2 | minor | ScreenBlock_GenerateQRCode / member photo | With an empty UserSignedURL, TST renders `<img class="orbit-member-photo" src="">` (`OutSystemsReactWidgets.js:2`, no default image at `B:337-339`). React renders the image without `src`. In the demo the URL is always empty. | `app/src/pages/QRCodeGenerate/components/GenerateQrCodeView.tsx:65` | Look at a member without a signed photo on TST and give the React image the same result. | fixed 2026-10-27 (`fixes/D-forms.md`) |

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| QRCodeGenerate roles | Registered, UBTOne_User | `checkRegistered` only | TST: route meta `member` | `S:344-345`; `routes.ts:40`, `:92` |
| OnHandle_ContactHelpdesk transition | Inherited | `TransitionAnimation.Default` | TST: `DEFAULT_TRANSITION` | `S:293`; `osNavigate.ts:95`; `screenTransition.ts:54` |
| six screen inputs | mandatory | defaults, no check | TST: defaults, no check | `S` setInputs; `inputs.ts:24-29` |

### 6.2 KB pages vs TST

| Id | KB text | TST evidence | File |
|---|---|---|---|
| K1 | BR-C2LEG-962 Outcomes: `title "Check into Event"` | The layout title is the Expression `In_EventName` (`B:300-302`). "Check into Event" is a text above the QR image (`B:481`, `:488`). The pack has no dump of the block, so DEV was not compared. | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-962.md` |

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | Set `document.title` from the screen title (F1)? | The runtime sets the tab title on every screen (`OutSystemsReactView.js:7`). React keeps "UBTConnect" everywhere. `routes.generated.ts:68` holds "QRCodeGenerate". | (a) The router sets `document.title` from the route title, app-wide. (b) Keep "UBTConnect" and record the decision on the board. | (a), with one answer for this question and App_Services Q4. |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 3 | 2 | 0 | 1 | 0 | 0 | 0 | 0 |
| data | 14 | 9 | 0 | 0 | 0 | 2 | 3 | 0 |
| ui | 27 | 26 | 1 | 0 | 0 | 0 | 0 | 0 |
| actions | 13 | 13 | 0 | 0 | 0 | 0 | 0 | 0 |
| validations | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 9 | 9 | 0 | 0 | 0 | 0 | 0 | 0 |
| strings | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| **total** | 68 | 60 | 1 | 1 | 0 | 2 | 4 | 0 |
