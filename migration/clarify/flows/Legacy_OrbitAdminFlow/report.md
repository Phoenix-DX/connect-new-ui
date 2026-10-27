# Flow report: Legacy_OrbitAdminFlow

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 4 (built: OrbitAdminLanding, OrbitAdminEventDetail; not built: OrbitAdminMilestones, OrbitAdminMilestoneDetail, board `skip` V8 dev-only) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/pages/OrbitAdmin*`, `app/src/components/orbit/*`, KB pages (`pack/kb.md`, `connect2-legacy/.../Connect2_OrbitMobile_MUI/ui/admin.md`), TST compiled code (`tst_source.py show`) |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

TST line numbers are lines of `python3 migration/clarify/tools/tst_source.py show <file>`. Short names: LW = `UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding.mvc.js`, EW = `UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail.mvc.js`, LB = `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc.js`, EB = `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail.mvc.js`, PQ = `Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_QRCodeScan.mvc.js`, CE = `Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Event.mvc.js`, NI = `Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc.js`, OE = `Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.OrbitErrorMessage.mvc.js`, LO = `Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc.js`. React paths start at `app/src/`.

## 1. Summary

- Counts by verdict: match 90 · partial 5 · missing 0 · differs 5 · mock-only 4 · n/a 4 · unclear 1 (same as `checklist.json`, 109 rows).
- F1 (major): OrbitAdminLanding runs the DEV-only branch of OnHandle_NavigateToEventDetail. React calls GetMilestoneScanFF and can open OrbitAdminMilestones, a route that the app does not have. TST only opens OrbitAdminEventDetail.
- F2 (minor): the "Failed to deserialize JSON" check of OnHandle_ScanCode is case-sensitive in React. TST ignores the case.
- F3 (minor): React converts the admin MemberId of GetScanEventQRCode with TextToLongInteger. TST uses IntegerToLongInteger(TextToInteger(...)).
- Status: an admin sees the events, opens an event, scans a code and sees the result, as on TST. The scanner is fictional by default and the web scanner with `?scanner=web`. The only open behaviour is the extra milestone branch (F1, Q1) and the list virtualization flag (Q2).

## 2. Screens

### 2.1 OrbitAdminLanding

**Identity**

| Id | Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 001 | roles | TST: Registered only | member route | match | LW:336; `app/routes.generated.ts:28`; BR-UBTCON-608. The pack also lists UBTOne_User (§6.1) |

**Data**

| Id | Data source | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 002 | input parameters | none | none | match | LW:52 setInputs; `OrbitAdminLandingPage.tsx:12` |
| 003 | local variables, lifecycle | none; all handlers null | no screen state | match | LW:327-331 |

**UI tree**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 004 | ScreenBlock_AdminLanding | inputs {}, event NavigateTo_EventDetail | AdminLandingView + useAdminLanding | match | LW:126-180; `OrbitAdminLandingPage.tsx:18-26` |
| 005 | BottomBarMenu in BottomBar | inputs {} | `<BottomBar id="$b2" />` | match | LW:159-179. Internals: App_Common |
| 006 | CommonUI_InsideLayout | inputs {} | `<CommonUiLayout id="$b3" />` | match | LW:181. Internals: App_Common |

**Screen actions**

| Id | Action | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 007 | OnHandle_NavigateToEventDetail: GetMilestoneScanFF | DEV: server call first. TST: no server call | `fetchMilestoneScanFF()` first | partial (F1) | LW:244-252; `useNavigateToEventDetail.ts:15` |
| 009 | navigate OrbitAdminEventDetail | 6 inputs in the TST URL order | same destination and order | match | LW:244-252; `useNavigateToEventDetail.ts:20, :25-32` |
| 010 | parameter conversion | ServerDataConverter.asString per type | `wireDateTimeParam`, text as is | match | LW:245-251; `useNavigateToEventDetail.ts:38-39` |
| 011 | action inputs | 6 mandatory inputs | `EventDetailTarget` | match | LW:232-238, :261 |
| 012 | event handler binding | 6 event arguments to the action | `useAdminLanding({ onNavigateToEventDetail })` | match | LW:132-140; `OrbitAdminLandingPage.tsx:13-14` |

**Validations**: none (no input widget).

**Business logic**

| Id | Logic | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 008 | If IsScanPerMilestone true → OrbitAdminMilestones(EventId) | DEV only; TST has no If | navigates to `/UBTConnect/OrbitAdminMilestones` | partial (F1) | `useNavigateToEventDetail.ts:16-18`; `routes.generated.ts` has no such route; `migration/board.md:95` (V8) |

**Strings**: the screen has no own strings.

### 2.2 OrbitAdminEventDetail

**Identity**

| Id | Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 038 | roles | TST: Registered only | member route | match | EW:298; `app/routes.generated.ts:49`; BR-UBTCON-608 |

**Data**

| Id | Data source | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 039 | In_EventId | Long Integer | `inputs.ts:26`, "0" when absent | match | EW:89-91 |
| 040 | In_EventName | Text | `inputs.ts:27` | match | EW:93-95 |
| 041 | In_EventStartDate | Date Time | `inputs.ts:28`, null date when absent | match | EW:97-99 |
| 042 | In_EventEndDate | Date Time | `inputs.ts:29` | match | EW:101-103 |
| 043 | In_EventLocation | Text | `inputs.ts:30` | match | EW:105-107 |
| 044 | In_EventTypeFriendly | Text | `inputs.ts:31` | match | EW:109-111 |
| 045 | local variables, lifecycle | none; all handlers null | no screen state | match | EW:289-293 |

**UI tree**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 046 | ScreenBlock_AdminEventDetail | 6 inputs 1:1, BottomBarMenu in BottomBar | AdminEventDetailView with the inputs | match | EW:187-234; `OrbitAdminEventDetailPage.tsx:20-28` |
| 047 | CommonUI_InsideLayout | inputs {} | `<CommonUiLayout id="$b3" />` | match | EW:235 |

**Screen actions**, **Validations**, **Business logic**: none in the screen. The block holds the logic (§3.2).

**Strings**: the screen has no own strings.

### 2.3 OrbitAdminMilestones (not built)

Board: `skip`, V8 skip:dev-only, user 2026-10-27 (`migration/board.md:95`): the screen exists on DEV only, with no compiled file on TST and no survey route.

On DEV it wraps ScreenBlock_AdminMilestones (input EventId, event NavigateTo_MilestoneDetail with 7 arguments) and opens OrbitAdminMilestoneDetail. A build needs ScreenBlock_AdminMilestones of Connect2_OrbitMobile_MUI and its server calls, which TST does not have. Row 092: `n/a`.

### 2.4 OrbitAdminMilestoneDetail (not built)

Board: `skip`, V8 skip:dev-only, user 2026-10-27 (`migration/board.md:94`).

On DEV it wraps ScreenBlock_AdminMilestoneDetail (7 inputs: EventId, MilestoneId, name, date, description, start and end dates). A build needs that block and its server calls. Row 091: `n/a`.

## 3. Blocks of the flow

The two screen blocks are in Connect2_OrbitMobile_MUI. The pack has their signatures only, so all rows come from the TST compiled code.

### 3.1 ScreenBlock_AdminLanding

**Data**

| Id | Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 013 | IsFetchingData | Boolean, False | `isFetchingData: false` | match | LB:33; `adminLandingState.ts:29` |
| 014 | EventsSummary | list, empty | `eventsSummary: []` | match | LB:36; `adminLandingState.ts:30` |
| 015 | UserFirstName | Text, "" | `userFirstName: ''` | match | LB:39; `adminLandingState.ts:31` |
| 016 | UserMemberId | Long Integer, null id | `NULL_ID` | match | LB:42; `adminLandingState.ts:32` |
| 017 | Get_AdminEventsList | on demand, sends the block variables | `fetchAdminEvents(adminEventsCallInputsOf(...))` | match | LB:441-470; `useAdminLanding.ts:76` |
| 036 | GetMilestoneScanFF | DEV only; no TST stub | `fetchMilestoneScanFF` + mock | partial (F1) | `api/event/repository.ts:253`; `pages/OrbitAdminLanding/mocks.ts:50-52` |
| 037 | Get_UI_UpdateItems_UnreadCount_All | called by BottomBarMenu | - | n/a | owned by flow App_Common, see its report |
| 105 | server side of DataActionGet_AdminEventsList | screen service (BL GetAdminEventsList) | mock | mock-only | LB:441-470; `pages/OrbitAdminLanding/mocks.ts:47-49` |

**Business logic**

| Id | Logic | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 018 | OnReady: WasCurrentViewRestoredFromCache | JS node, If FromCache | `onReady(restored)` | differs | LB:526-530; `useAdminLanding.ts:81-83`; `app/docs/reference/stack.md:228` (F40, intended difference) |
| 019 | If FromCache true → end | ends | ends only when the answer is there | differs | LB:530-532; `useAdminLanding.ts:83`; stack.md:228 (F40) |
| 020 | IsFetchingData = True | assign | `write({ isFetchingData: true })` | match | LB:535-536; `useAdminLanding.ts:84` |
| 021 | UserFirstName from AppManager_GetCachedUserInfo | assign | `userInformation.FirstName` | match | LB:539-544; `useAdminLanding.ts:85-87` |
| 022 | UserMemberId = TextToLongInteger or null id | If(TextToLongIntegerValidate…) | `textToLongIntegerOrNull` | match | LB:546-547; `useAdminLanding.ts:88` |
| 023 | Refresh_GetEventsByMemberId | refresh Get_AdminEventsList | `refreshGetEventsByMemberId()` | match | LB:472-501, :549-550; `useAdminLanding.ts:75-78, :90` |
| 024 | OnAfterFetch_Get_AdminEventsList | EventsSummary = Response; IsFetchingData False | one write | match | LB:639-666; `useAdminLanding.ts:77` |

**Actions**

| Id | Action | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 025 | OnHandle_EventCardClicked: trigger NavigateTo_EventDetail | EventId, Title, start, end, location, TypeFriendly | `eventDetailTargetOf` | match | LB:595; `adminLandingState.ts:65-75`; `useAdminLanding.ts:94-95` |
| 026 | OnApplicationEvent_ClickEvent | payload EventId, EventTitle, EventLocation, start, end | `clickEventPayloadOf` | match | LB:599-606; `adminLandingState.ts:88-96`. Sink: row 104 |
| 027 | error path | block handleError | `raiseToFlowHandler` | match | LB:724-726; `useAdminLanding.ts:102` |

**UI tree**

| Id | Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 028 | Layout_Orbit, MenuIcon (menu), flag icon | as left | `OrbitLayout`, `MenuAction_Menu`, `menu-icon-Orbit` | match | LB:162, :193, :216; `AdminLandingView.tsx:78-82` |
| 029 | header: UserFirstName | Expression UserFirstName only | `{userFirstName}` | match | LB:230-249; `AdminLandingView.tsx:83-91` |
| 030 | content Ifs | not fetching → fetched → list or NoInformation; else skeleton | same tree | match | LB:258-260, :346, :371; `AdminLandingView.tsx:50-74` |
| 031 | List: disable-virtualization | IsListVirtualizationDisabled (LaunchDarkly flag) | always `disableVirtualization` | unclear (Q2) | LB:262-275; `UBTConnect_Utils.controller.js:4246-4250`; `migration/flags.md:73` (open) |
| 032 | Card_Event per row | In_EventSummary; ClickedEvent → OnHandle_EventCardClicked(…, TypeFriendly) | `OrbitEventCard` | match | LB:295-322; `AdminLandingView.tsx:62-68` |
| 033 | NoInformation_Orbit | the no-event message | `NO_ADMIN_EVENT_MESSAGE` | match | LB:346-348; `AdminLandingView.tsx:18-19, :73` |
| 034 | Skeleton_Loading OrbitLanding | as left | `OrbitSkeleton` | match | LB:371; `AdminLandingView.tsx:51` |
| 035 | placeholders Menu, BottomBar, CommonUI_Elements | passed through | as left | match | LB:179, :393, :404; `AdminLandingView.tsx:80, :93-94` |

### 3.2 ScreenBlock_AdminEventDetail

**Data**

| Id | Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 048 | IsFetchingData | False | `isFetchingData: false` | match | EB:30-50; `adminEventDetailState.ts:63` |
| 049 | IsProcessingData | False | as left | match | EB:30-50; `adminEventDetailState.ts:64` |
| 050 | ScanResult | QRCodeStatusRec default | `{ Success: false, ErrorMessage: '' }` | match | EB:30-50; `adminEventDetailState.ts:65` |
| 051 | ScannedUser | ScannedUserRec default | `EMPTY_SCANNED_USER` | match | EB:30-50; `adminEventDetailState.ts:66` |
| 052 | EventType | OrbitEventTypeRec default | `{}` | match | EB:30-50; `adminEventDetailState.ts:67` |
| 053 | QRCodePopupOpened | False | as left | match | EB:30-50; `adminEventDetailState.ts:68` |
| 054 | ScanError | TextBooleanRecord default | `NO_SCAN_ERROR` | match | EB:30-50; `adminEventDetailState.ts:69` |
| 055 | Get_EventInformation | on demand; outputs HasQRCode, OrbitEventType | `fetchAdminEventInformation` | match | EB:840-869; `useAdminEventDetail.ts:84-88` |
| 106 | server side of DataActionGet_EventInformation | screen service (BL GetOrbitEventTypeRecord, GetHasQRCode) | mock | mock-only | EB:840-869; `pages/OrbitAdminEventDetail/mocks.ts:84` |
| 107 | server side of GetMemberByMemberId | server action | mock | mock-only | EB:783-805; `mocks.ts:91` |
| 108 | server side of GetScanEventQRCode | server action, records the check-in | mock | mock-only | EB:807-838; `mocks.ts:97` |

**Business logic**

| Id | Logic | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 056 | OnReady: If FromCache | end, else RefreshData | ends only when the answer is there | differs | EB:1399-1430 (If :1423); `useAdminEventDetail.ts:93-97`; stack.md:228 (F40) |
| 057 | RefreshData | IsFetchingData True; refresh Get_EventInformation | `refreshData` | match | EB:1329-1360; `useAdminEventDetail.ts:81-89` |
| 058 | OnAfterFetch_Get_EventInformation | EventType; IsFetchingData False | as left | match | EB:1454-1481; `useAdminEventDetail.ts:87-88` |
| 103 | BarcodePlugin on the web | TST web scanner OSBarcodePlugin.js when Cordova is absent (not native only) | `?scanner=web`: vendored web scanner; default: fictional scanner (mock phase) | differs | `app/docs/reference/stack.md:189-195` (ADR-11); `platform/device/barcodePlugin.ts:1-45` |

**Actions**

| Id | Action | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 059 | OnClick_ScanQrCode: If HasQRCode false → end | as left | `if (!latest.current.hasQRCode) return` | match | EB:1219; `useAdminEventDetail.ts:179` |
| 060 | CheckBarcodePlugin not available | FeedbackMessage(Error.ErrorMessage, Info) | as left | match | EB:1221-1228, :1281-1283; `useAdminEventDetail.ts:180-184`; BR-C2LEG-959 |
| 061 | available: IsProcessingData True + LaunchQRCodeScanner | payload EventId, EventTitle, EventType, EventLocation, start, end | same fields and order | match | EB:1229-1245 (payload :1235-1242); `useAdminEventDetail.ts:185-194` |
| 062 | ScanBarcode arguments | 9 arguments, last "Entities.AndroidScanningLibrary.ZXing" | same 9 values | match | EB:1249; `useAdminEventDetail.ts:197-210` |
| 063 | Successful scan → OnHandle_ScanCode | as left | as left | match | EB:1255-1258; `useAdminEventDetail.ts:211-213` |
| 064 | scan failed → IsProcessingData False | as left | as left | match | EB:1262-1264; `useAdminEventDetail.ts:215` |
| 065 | closed by the user (OS-PLUG-BARC-0006) → silent; else message | as left | `SCANNER_CLOSED_BY_USER` | match | EB:1267, :1272; `platform/device/barcodePluginTypes.ts:83` |
| 066 | OnHandle_ScanCode: ToLower + JSONDeserialize | as left | `deserializeQRCodeInformation` | match | EB:956-962; `adminEventDetailActions.ts:25-48` |
| 067 | Has data? false | IsProcessingData False; "This QR Code was unable to be processed…" | as left | match | EB:965, :1128-1133; `useAdminEventDetail.ts:110-114`; BR-C2LEG-960 |
| 068 | GetMemberByMemberId + GetCacheableSignedImageURL | (MemberId, Member, Small) | same arguments | match | EB:967-991 (:975); `useAdminEventDetail.ts:115-121` |
| 069 | Same EventId? false | "Guest is not allocated to this event."; clear role, seats, tag; toggle; IsProcessingData False | same order | match | EB:994, :1095-1126; `useAdminEventDetail.ts:123-131` |
| 070 | GetScanEventQRCode: ScannerAdminInfo.AdminMemberId | IntegerToLongInteger(TextToInteger(MemberId)) | `textToLongInteger(admin.MemberId)` | partial (F3) | EB:1018; `useAdminEventDetail.ts:134` |
| 071 | ScannedUser role, seats, tag, guest role | from the response | as left | match | EB:1031-1041; `useAdminEventDetail.ts:140-148` |
| 072 | Success? true | ScanResult; toggle; IsProcessingData False; QRCodeScanned | same order and payload | match | EB:1045-1073 (payload :1064-1070); `useAdminEventDetail.ts:149-163` |
| 073 | Success? false | ScanResult; toggle; IsProcessingData False; no audit | as left | match | EB:1075-1093; `useAdminEventDetail.ts:150-153` |
| 074 | AllExceptions: system exception | not handled | rethrow | match | EB:1141; `useAdminEventDetail.ts:164-166` |
| 075 | "Failed to deserialize JSON" true | Index(…, ignoreCase True) → ScanError "Unable to read QR code, please try again." | `message.includes(...)`, case-sensitive | partial (F2) | EB:1150; `useAdminEventDetail.ts:169`; BR-C2LEG-960 |
| 076 | else Raise UnknownError | UserException Connect2_OrbitMobile_MUI.UnknownError | as left | match | EB:1161-1164; `useAdminEventDetail.ts:173` |
| 077 | OnToggle_PopupQRCode | not QRCodePopupOpened | as left | match | EB:904-918; `useAdminEventDetail.ts:100-102` |
| 078 | OnHandle_ScanEventDone | toggle, then OnClick_ScanQrCode | as left | match | EB:872-902; `useAdminEventDetail.ts:222-225` |
| 079 | OnHandle_OrbitErrorMessage | reset ScanError, then OnClick_ScanQrCode | as left | match | EB:1363-1396; `useAdminEventDetail.ts:228-231` |
| 080 | ComponentDidUpdate_QRCode: CopyClassesAcrossPortal(Root_QRCode, Popup_QRCode) | on update of Root_QRCode | AdminPopup renders the end state: portal root = Root classes, portal parent = "portal-class" + Root grandparent class | match | EB:585, :1305-1327; `Connect2_LegacyShared.controller.js:1534-1553`; `AdminPopup.tsx:37-46`. AdminPopup does not use Dialog |

**UI tree**

| Id | Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 081 | Layout_Orbit CustomClass "orbit-detail", MenuIcon auto, title | as left | as left | match | EB:255, :286; `AdminEventDetailView.tsx:142-156` |
| 082 | content Ifs | not fetching → fetched → event, else NoInformation; else skeleton | same tree | match | EB:347-348, :648-672; `AdminEventDetailView.tsx:63-65, :126-128` |
| 083 | date range | GetFormattedDateTime(start) + " - " + GetFormattedDateTime(end) | as left | match | EB:369-398; `AdminEventDetailView.tsx:57, :68-73` |
| 084 | location, EventType.Type, In_EventTypeFriendly | 3 rows with icons | as left | match | EB:408-484; `AdminEventDetailView.tsx:74-91` |
| 085 | spinner (visible IsProcessingData), "Loading" | as left | as left | match | EB:487-512; `AdminEventDetailView.tsx:93-98` |
| 086 | Scan QR Code button (HasQRCode and not IsProcessingData) | as left | as left | match | EB:516-566; `AdminEventDetailView.tsx:99-106` |
| 087 | Popup_QRCode > Popup_QRCodeScan | ShowPopup = QRCodePopupOpened, style popup-dialog | `AdminPopup` + `Popup_QRCodeScan` | match | EB:572-609; `AdminEventDetailView.tsx:107-124` |
| 088 | NoInformation_Orbit | "The Event is no longer available for you." | as left | match | EB:648-650; `AdminEventDetailView.tsx:16, :127` |
| 089 | OrbitErrorMessage | IsShowMessage, DisplayMessage, ClickedOk | as left | match | EB:690-725; `AdminEventDetailView.tsx:129-136` |

### 3.3 Referenced blocks of Connect2_OrbitMobile_MUI and Connect2_LegacyShared

| Id | Block / element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 093 | Popup_QRCodeScan: name and photo | "Participant" without both names; SignedURL, else Images.User | as left | match | PQ:186, :208-226; `Popup_QRCodeScan.tsx:26-47`; BR-C2LEG-961 |
| 094 | Popup_QRCodeScan: details | event name and date on success; Locality, Country, Role, Row(s) with " & ", GMP Tag when present | as left | match | PQ:237-410; `Popup_QRCodeScan.tsx:48-91` |
| 095 | Popup_QRCodeScan: result | "Has Checked in" + check, else ErrorMessage + cross | as left | match | PQ:427-503; `Popup_QRCodeScan.tsx:93-113` |
| 096 | Popup_QRCodeScan: Done → Event_Done | as left | as left | match | PQ:509-540; `Popup_QRCodeScan.tsx:114-118` |
| 097 | Card_Event: content | icon, Title, dates, EventLocation | `OrbitEventCard` | match | CE:189-290; `components/orbit/OrbitEventCard/OrbitEventCard.tsx:31-59` |
| 098 | Card_Event: ClickedEvent(In_EventSummary) | from Card_Template OnClick | as left | match | CE:150-157; `OrbitEventCard.tsx:33` |
| 099 | NoInformation_Orbit | classes by IsUrgent; icon visible = IsUrgent; Message | as left | match | NI:155-171; `components/orbit/OrbitNoInformation/OrbitNoInformation.tsx:20-26` |
| 100 | OrbitErrorMessage: popup | "Oops! Something went wrong", DisplayMessage, "Ok" → ClickedOk | as left | match | OE:169-255; `pages/OrbitAdminEventDetail/components/OrbitErrorMessage.tsx:26-58` |
| 101 | OrbitErrorMessage: CopyClassesAcrossPortal(Root, UnknownErrorPopup) | on update | AdminPopup with `rootParentClassName` "backwards-compatibility" | match | OE:294; `OrbitErrorMessage.tsx:27-33` |
| 102 | Layout_Orbit: structure | "orbit-theme backwards-compatibility" > base layout with CustomClass and placeholders | `OrbitLayout` | match | LO:189-199, :235-313; `components/layout/OrbitLayout/OrbitLayout.tsx:69-90` |

Flow-level rows:

| Id | Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 104 | audit sink zOnApplicationEvent_Wrapper (ClickEvent, LaunchQRCodeScanner, QRCodeScanned) | AzureInsights_CreateCustomEvent | `log.info` | differs | `migration/app-shell.spec.md:349, :384` (U17); `Connect2_LegacyShared.controller.js:7567-7601`. Production needs the App Insights event |
| 090 | strings of `pack/strings.md` | 18 literals of App_Common and App_PIN blocks | - | n/a | owned by flows App_Common and App_PIN, see their reports |
| 109 | own strings of the flow | 17 literals of the screens and blocks | all present | match | see row 109 in `checklist.json` |

## 4. Shared blocks and actions

- BottomBarMenu, CommonUI_InsideLayout, Get_UI_UpdateItems_UnreadCount_All: checked in the report of flow App_Common.
- AppManager_GetCachedUserInfo (`platform/session/cachedUserInfo.ts`): not checked here (shared). CR-OrbitAdminLanding-1 gives the mock user's FirstName and MemberId.
- GetCacheableSignedImageURL (Connect2_LegacyShared, `api/image`): arguments checked (row 068); its cache logic is not checked here (shared).
- Card_Template (`components/orbit/OrbitCard`), Skeleton_Loading (`components/orbit/OrbitSkeleton`), Layout_Orbit OnInitialize and OnReady: shared with Legacy_OrbitEventsFlow, not checked here.

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix | Status |
|---|---|---|---|---|---|---|
| F1 | major | OrbitAdminLanding / OnHandle_NavigateToEventDetail | React follows the DEV model: it calls GetMilestoneScanFF and, when IsScanPerMilestone is True, opens OrbitAdminMilestones. TST only opens OrbitAdminEventDetail (LW:244-252). TST has no GetMilestoneScanFF stub, and the app has no OrbitAdminMilestones route (board V8 skip). KB `legacy-orbit.md:63` and BR-UBTCON-608 also show an unconditional navigation. The decision of 2026-10-16 (`migration/knowledge/auto-decisions-2026-10-16.md:84`) sets only the mock value False. It does not name a difference from TST. | `pages/OrbitAdminLanding/hooks/useNavigateToEventDetail.ts:15-19`; `api/event/repository.ts:253`; `pages/OrbitAdminLanding/mocks.ts:50-52`; `mocks/fictional/orbitAdmin.ts:113-116` | Remove the call, the branch, the mock handler and the scenario `scanpermilestone`. Keep the navigation of LW:244-252 (Q1) | |
| F2 | minor | ScreenBlock_AdminEventDetail / OnHandle_ScanCode handler | TST finds "Failed to deserialize JSON" with ignoreCase True (EB:1150). React uses a case-sensitive `includes`. A message with other letter case goes to UnknownError instead of the "Unable to read QR code" popup. | `pages/OrbitAdminEventDetail/hooks/useAdminEventDetail.ts:169` | Compare in lower case | fixed 2026-10-27 (`fixes/G2-orbit-ldm.md`) |
| F3 | minor | ScreenBlock_AdminEventDetail / GetScanEventQRCode | TST sets AdminMemberId = IntegerToLongInteger(TextToInteger(MemberId)) (EB:1018). React uses TextToLongInteger. The value is the same for an id in the Integer range. | `pages/OrbitAdminEventDetail/hooks/useAdminEventDetail.ts:134` | Port the TST conversion 1:1 | fixed 2026-10-27 (`fixes/G2-orbit-ldm.md`) |

## 6. DEV vs TST differences

### 6.1 DEV (model) vs TST (compiled code)

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| OnHandle_NavigateToEventDetail | GetMilestoneScanFF, then If IsScanPerMilestone → OrbitAdminMilestones | navigate to OrbitAdminEventDetail only | DEV (F1) | `pack/screens.md`; LW:244-252 |
| OrbitAdminMilestones, OrbitAdminMilestoneDetail and their blocks | present | no compiled file | not built (board V8) | `migration/board.md:94-95` |
| screen roles | Registered, UBTOne_User | `checkRegistered` only | member route | LW:336; EW:298; BR-UBTCON-608 |
| navigation transition | Inherited | TransitionAnimation.Default | not compared | LW:252 |
| block internals | signatures only | full logic | TST | `pack/references.md` |

### 6.2 KB pages vs TST

None. The KB pages of UBTConnect (`legacy-orbit.md`, BR-UBTCON-608) and of Connect2_OrbitMobile_MUI (`ui/admin.md`, BR-C2LEG-958 to 961) agree with TST.

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | F1: remove the DEV-only milestone branch from OrbitAdminLanding? | React calls a server action and can open a route that TST does not have (LW:244-252, board V8). | A: remove the call, the branch, the mock handler and the scenario `scanpermilestone`; add them back when TST deploys the milestone screens. B: keep them for DEV, with the mock value False. | A: TST is the source of truth, and board V8 already waits for a TST deploy. |
| Q2 | What is the TST value of LaunchDarkly flag `Mobile-Directory-list-virtualization`? | The admin event list sets `disable-virtualization` from it (LB:262-275, `UBTConnect_Utils.controller.js:4246-4250`). React always sets it. `migration/flags.md:73` has the flag as open. | A: record the TST value; React reads the flag. B: keep the fixed value, as on the captured lists of other screens. | A: the flag drives every list that calls IsListVirtualizationDisabled. |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 4 | 2 | 0 | 0 | 0 | 0 | 2 | 0 |
| data | 28 | 22 | 1 | 0 | 0 | 4 | 1 | 0 |
| ui | 29 | 28 | 0 | 0 | 0 | 0 | 0 | 1 |
| actions | 29 | 26 | 3 | 0 | 0 | 0 | 0 | 0 |
| validations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 17 | 11 | 1 | 0 | 5 | 0 | 0 | 0 |
| strings | 2 | 1 | 0 | 0 | 0 | 0 | 1 | 0 |
| **total** | **109** | **91** | **5** | **0** | **5** | **4** | **4** | **0** |

## 9. Follow-up pass (2026-10-27)

Rows settled or sharpened after the user answers of 2026-10-27 and the TST files that `tst_source.py` reads. A row that stays `unclear` has a new question that names what settles it. Every row below has `verified: "live"`.

| Row | Old verdict | New verdict | Evidence |
|---|---|---|---|
| Legacy_OrbitAdminFlow-031 | `unclear` | `unclear` | Q2 (no user answer yet). The value is not in the code: isListVirtualizationDisabled asks LaunchDarkly for Mobile-Directory-list-virtualization at run time (UBTConnect_Utils.controller.js:4246-4250), flags.md:73 is open, and flag-values-tst.json has no entry. Capture that settles it (read-only TST session): record the LaunchDarkly evaluation response (the flag request of the LD client, or the HasAccess call of launchDarkly_FF) on OrbitAdminLanding, and add the value to migration/knowledge/flag-values-tst.json. Then: value false on TST and React always disabled = partial (React must read the flag or follow the TST value); value true = match. |

## 12. Captures on TST (2026-10-27)

Read-only captures (`review/captures.md`, script `tools/capture_followup.cjs`). Row changes:

| Row | Before | After | Evidence |
|---|---|---|---|
| Legacy_OrbitAdminFlow-031 | unclear | match | capture 2026-10-27 (review/captures.md §4): the flag Mobile-Directory-list-virtualization is a PermissionList item of ActionAppManager_SynchAppContext and evaluates true on TST (no LaunchDarkly request); React's constant equals it; reading it live comes with the flag endpoint (infra-gaps §6) |

Counts after the captures (checklist.json, 109 rows): match 91, partial 5, missing 0, differs 5, mock-only 4, n/a 4, unclear 0.
