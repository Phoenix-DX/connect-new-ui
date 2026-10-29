# Route spec: OrbitAdminMilestoneDetail

No-capture route (user decision I10-3 (a), 2026-10-29, `no-capture.json`: the test account has no admin events on TST).
Built from the compiled TST code; no parity; the user reviews it by eye. Facts: `migration/clarify/review/item10-new-screens.md` §5, §10.
Sources (all in `migration/screens/OrbitAdminMilestoneDetail/sources/`): SCR = `UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestoneDetail.mvc.js`,
SB = `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail.mvc.js`,
PQM = `Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_QRCodeScan_Milestone.mvc.js`. Records and static entities:
`migration/runtime-sources/Connect2_OrbitMobile_BL.model.js`, `Connect2_OrbitMobile_IS.model.js`, `moduleinfo.json`.
Closest React route: OrbitAdminEventDetail (`app/src/pages/OrbitAdminEventDetail/`), same block family.

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/OrbitAdminMilestoneDetail`, inputs `In_EventId` (Long Integer), `In_MilestoneId`, `In_MilestoneName` (Text), `In_MilestoneDate`, `In_MilestoneStartDate`, `In_MilestoneEndDate` (DateTime), `In_MilestoneDescription` (Text), all mandatory [SCR model :9-50, setInputs :88-118] |
| Role | Registered [SCR :308] |
| Entry | Only OrbitAdminMilestones `Handler_NavigateToMilestoneDetail` when `IsScanPerMilestone` (item10 §5) |
| Captured | no (no-capture.json) |
| Existing React blocks | Layout_Orbit (`components/layout/OrbitLayout`), MenuIcon__UpdatedOSUI (`components/layout/MenuIcon`), NoInformation_Orbit (`components/orbit/OrbitNoInformation`), Skeleton_Loading (`components/orbit/OrbitSkeleton`), BottomBarMenu, CommonUI_InsideLayout (`components/layout/`) |
| Moved to shared | OrbitErrorMessage and the portalled Popup widget, today in `pages/OrbitAdminEventDetail/components/` (a page never imports another page): new `components/orbit/OrbitErrorMessage`, `components/orbit/OrbitPopup` |
| New blocks | ScreenBlock_AdminMilestoneDetail (page view + hook), Popup_QRCodeScan_Milestone (page component) |

## Specification
### Structure
Screen (SCR view :183-266): ScreenBlock_AdminMilestoneDetail `$b1` with the seven inputs; placeholders Menu empty,
BottomBar = BottomBarMenu `$b2`, CommonUI_Elements empty; then CommonUI_InsideLayout `$b3`. No screen logic (SCR :269-317).

Block (SB view :253-771):
- Layout_Orbit `b1-$b1`, CustomClass "orbit-detail" (:268). HeaderLeft MenuIcon `b1-$b2`, MenuAction Auto (:299).
- Title: `div > icon flag "icon menu-icon-Orbit"` + `div > In_MilestoneName` (:318-350). HeaderRight, HeaderContent empty.
- Content (:353-735):
  - IsFetchingData: Skeleton_Loading `b1-$b5`, In_SkeletonLoadingId = AdminEventDetails (:676-689).
  - Else, Get_MilestoneInformation fetched: container `font-size-0-9em padding-x-m padding-y-m` (:365) with three rows:
    - date row `flex-center-vertical` (animated), visible when In_MilestoneDate is not the null date; icon
      `orbit-icon-date-time`; text GetFormattedDateTime(In_MilestoneDate, False ×6) + (start and end not null ?
      " " + GetFormattedTime_FromDateTime(Start) + " - " + GetFormattedTime_FromDateTime(End) : "") (:375-416);
    - type row, visible when MilestoneType.Name <> ""; style "flex-center-vertical" + (date not null ? " margin-top-m"
      : ""); icon `orbit-icon-host-guest`; MilestoneType.Name (:417-450);
    - description row, visible when In_MilestoneDescription <> ""; style + (date not null or Name <> "" ?
      " margin-top-m" : ""); icon `orbit-icon-window`; In_MilestoneDescription (:451-488).
  - Spinner `orbit-spinner-cont` + "Loading" while IsProcessingData (:489-511).
  - Scan QR Code button (`btn btn-primary`, icon qrcode 2x, "Scan QR Code") when HasQRCode and not IsProcessingData (:512-571).
  - RootPlaceholder_QRCode > Root_QRCode `backwards-compatibility` (componentDidUpdate CopyClassesAcrossPortal) >
    Popup_QRCode "popup-dialog" (ShowPopup QRCodePopupOpened) > Popup_QRCodeScan_Milestone `b1-$b3` (:572-650).
  - Else: NoInformation_Orbit `b1-$b4` "The Event is no longer available for you." (:651-671).
- After the content: `backwards-compatibility` > OrbitErrorMessage `b1-$b6` (IsShowMessage, DisplayMessage, ClickedOk) (:694-733).

Popup_QRCodeScan_Milestone (PQM view :160-548): inputs ScanResult, MilestoneName, ScannedUser.
- Title: FirstName + " " + Lastname when both are not empty, else "Participant" (:166-192).
- Photo: signed URL with the User.png error placeholder, else User.png (:193-222).
- Bold block (inline `font-weight: bold`): MilestoneName on success when not empty; GetFormattedLocalDateTime(
  CurrDateTime(), False, True, False, True, False) on success (:275-281); "Description: " + MilestoneDescription;
  "Locality: "; "Country: "; "Role: "; "Row: " + RowAllocation (`full-width display-flex`, when <> ""); "Venue: " +
  SeatingPlan (same style); "GMP Tag: " (:283-418). No `white-space-nowrap` and no seat list (unlike Popup_QRCodeScan).
- "Has Checked in" + check-circle, or ScanResult.ErrorMessage + times cross (:420-476); Done button triggers Event_Done (:477-545).

### Data
| Call | Kind | Trigger | Inputs | Outputs used | Contract | Mock scenarios |
|---|---|---|---|---|---|---|
| ScreenBlock_AdminMilestoneDetail/DataActionGet_MilestoneInformation | data action, on demand (SB :851-878) | OnReady → RefreshData (SB :994-1027) | the block variables (seven inputs, IsFetchingData, IsProcessingData, QRCodePopupOpened, as OrbitAdminEventDetail) | HasQRCode, OrbitMilestoneType (OrbitMilestoneTypeRec, BL) | missing: interim form (I10-6) | real, noqrcode, empty, loading, error |
| ActionGetMemberByMemberId | server action (SB :789-813) | OnHandle_ScanCode | MemberId | Response (Directory_MemberById) | in the contract (shared `api/member` fetchMember) | real |
| GetCacheableSignedImageURL | Connect2_LegacyShared action | OnHandle_ScanCode | MemberId, Member, Small | URL | existing (`api/image`) | existing mock |
| ActionGetScanMilestoneQRCode | server action (SB :814-850); it writes: it calls the Orbit API and creates a local record for some statuses (MCP, Q1) | OnHandle_ScanCode, same event (SB :1276-1302) | ScanClientId "ConnectMobile" (static entity scanClient.connectMobile, moduleinfo), ScannedQRCodeInfo {EventId, MilestoneId = In_MilestoneId, MilestoneType = MilestoneType.Id, ScannedUserInformation, ScannerAdminInfo (AdminMemberId = TextToLongIntegerValidate ? TextToLongInteger : 0, :1292)} | Response.UserRole, Seats, Tag, GuestRole, RowAllocation, SeatingPlanName, Status | missing: interim form; mocked only (never called on TST). Status texts: see "Server facts" | real (stateful check-in), notallocated |
| BarcodePlugin CheckBarcodePlugin / ScanBarcode | plugin (SB :900-925) | Scan QR Code, Done, error Ok | "Please center the code in the frame", back camera, portrait, Hint TextToInteger("Entities.Format.ALL") = 0, FPS -1, ZXing | IsAvailable, Success, ScanResult.Text, Error | `platform/device/barcodePlugin` (ADR-11) | the fictional scanner of the mock phase (installed by the OrbitAdminEventDetail mocks): real, scanwrongevent, scanunreadable, scancancel |

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Feedback |
|---|---|---|---|---|
| Block | OnReady (SB :1149-1203) | restored from cache → nothing; else RefreshData: IsFetchingData True → Get_MilestoneInformation → OnAfterFetch (:1052-1080): MilestoneType = OrbitMilestoneType, IsFetchingData False | Get_MilestoneInformation | – |
| Scan QR Code | OnClick_ScanQrCode (SB :879-969) | HasQRCode → CheckBarcodePlugin; available → IsProcessingData True, ScanBarcode; success → OnHandle_ScanCode; failure → IsProcessingData False and, unless OS-PLUG-BARC-0006 (:932), the scanner's message; unavailable → the plugin's message. No audit event (unlike AdminEventDetail) | BarcodePlugin | Info feedback |
| OnHandle_ScanCode | (SB :1204-1480) | lowercase, JSON-deserialize QRCodeInformation; EventId or MemberId null → IsProcessingData False + "This QR Code was unable to be processed. Please try again later." (:1403); else member, photo, ScannedUser.Member / SignedURL / MilestoneDescription = In_MilestoneDescription; other event → ScanResult False "Guest is not allocated to this event." (:1366), UserRole / Seats / Tag / GuestRole / RowAllocation / SeatingPlan cleared, popup, IsProcessingData False; same event → cached user, GetScanMilestoneQRCode, ScannedUser UserRole / Seats / Tag / GuestRole / RowAllocation / SeatingPlan (= SeatingPlanName), ScanResult = Status.Success + Status.ErrorMessage, popup, IsProcessingData False. AllExceptions (not system): IsProcessingData False; "Failed to deserialize JSON" → ScanError "Unable to read QR code, please try again."; else raise UnknownError (:1408-1440) | GetMemberByMemberId, signed URL, GetScanMilestoneQRCode | Info feedback, OrbitErrorMessage |
| Popup Done | Event_Done → OnHandle_ScanMilestoneDone (SB :1117-1148) | toggle the popup, then OnClick_ScanQrCode | as Scan | – |
| Error Ok | ClickedOk → OnHandle_OrbitErrorMessage (SB :1081-1116) | reset ScanError, then OnClick_ScanQrCode | as Scan | – |

### States
| State | Condition | Scenario |
|---|---|---|
| loading | IsFetchingData | loading |
| milestone | Get_MilestoneInformation fetched | real |
| no QR code | HasQRCode False | noqrcode |
| not available | not fetched (failed data action) | error |
| scanning | IsProcessingData | transient |
| checked in / not checked in | QRCodePopupOpened, ScanResult.Success | real; second scan of a member (stateful); notallocated; scanwrongevent |
| unreadable code | ScanError.IsShowErrorMessage | scanunreadable |

## Server facts
Source: the OutSystems MCP (DEV), `migration/clarify/review/mcp-session-2026-10-29.md` rows 5, 5b, 6, 7. The ids equal TST
(moduleinfo 15682). TST wins on a difference.
- `GetScanMilestoneQRCode` (Connect2_OrbitMobile_BL) writes. It calls the external `Connect2_OrbitMobile_IS.Get_ScanMilestoneQRCode`
  (the Orbit API, with the user token). For `CheckedIn`, `CheckedInForOtherMilestone` and `Moved` it also creates a local
  record (`ScannedQRCodes_Create`).
- A member already recorded locally for the milestone gets `Success = False`, the text "This QR code has been scanned" and
  `QRCodeErrorTypeId = AlreadyCheckedInForMilestone`, without the API call. An API answer `AlreadyCheckedInForMilestone`
  gives `Success = False` and that text.
- Any other API failure keeps the API response. `QRCodeErrorTypeId` is then the `AlreadyCheckedInForMilestone` record id,
  because the outcome lookup always reads that record. A failed local create gives `GenericError` and the create message.
- User messages: CheckedIn and CheckedInForOtherMilestone "Has Checked in"; GenericError "An error has occured"; Moved,
  NotAllocated and NotInvited empty. The mock (`pages/OrbitAdminMilestoneDetail/mocks.ts:45-48`) uses these texts.
- The six admin milestone types have `Name` "Admin". `Type`: AdminMeeting `meeting-admin` (order 17), AdminMeal
  `meeting-meal` (18), AdminMealAtHall `meal-at-hall-admin` (19), AdminAccommodation `accommodation-admin` (20),
  AdminTransportVehicle `transport-vehicle-admin` (21), AdminBreak `break-admin` (22). So the type row shows "Admin" for
  an admin milestone.
- `Get_MilestoneInformation` for an unknown milestone: not found in Connect2_OrbitMobile_BL (it is a data action of the
  MUI block, its server logic was not read). Unclear. The mock keeps its answer.

## Patterns used
P-PARAMS (original input names, DateTimes as the URL's UTC instant, null date when absent), P-CALLS (compiled order),
P-MOCKS (contractHandler for the contract call, statefulHandler + `mocks/store` collection for the interim calls),
P-STATES, P-DIALOG (portalled Popup with usePopupWidget), P-BACK (useFlowState restore), flow scope of item 8
(R1 `flow.fetch` for Get_MilestoneInformation; R3 `flow.own` for OnHandle_ScanCode and OnToggle_PopupQRCode; R2 the
plugin, module and server actions are not wrapped; `flow.run` for the widget handlers).

## Unclear points

- `Get_MilestoneInformation` for an id that is not an admin milestone (HasQRCode, OrbitMilestoneType): unclear (MCP row 6).
  The mock keeps its answer.
- F2 (auto decision, row 8): MCP row 5 states `QRCodeErrorTypeId` for the failure branch only. For the success case the
  row gives no id. The comment in the build is corrected and the success id is carried to the MCP fact list.
- Settled and moved out: Q1 (what the server action does, and the status texts) and Q2 (Name and Type of the admin
  milestone types). See "Server facts".

## Decisions to confirm

- No new decision for the barcode plugin: the ADR-11 adapter and the fictional scanner of OrbitAdminEventDetail Q1 (A)
  cover it.
- Shared code: OrbitErrorMessage and the Popup widget move to `components/orbit/` (page-template rule "a second page moves
  the code"). Auto decision, row 9 (O1, a): OrbitAdminEventDetail switches to the shared copies and its copies are deleted
  now (2 import sites).
- Auto decision, row 10 (O2): the duplicated helpers of the two admin pages move to `lib/orbit/actions.ts` now. They reuse
  `containsIgnoreCase` of `lib/ubtConnectUtils/actions.ts:155`. `textToLongIntegerValidated` stays in the milestone page
  (Fable).
- Auto decision, row 8 (F2, Fable): see "Unclear points".
- Row 13 (dedupe): the admin detail view, the QR popup and the scan hook are shared with OrbitAdminEventDetail.
- Q1 and Q2 are facts answered by the MCP (2026-10-29): "Server facts". No user decision.

## Parity
None (no capture). The user reviews the page by eye.

## Server-side notes
- `GetScanMilestoneQRCode` writes a check-in (see "Server facts"). The backend keeps the duplicate rule and the API call.
- Get_MilestoneInformation, GetMemberByMemberId and GetScanMilestoneQRCode must check that the session user is an admin
  of the event; the scanner identity must come from the session, not from ScannerAdminInfo.
