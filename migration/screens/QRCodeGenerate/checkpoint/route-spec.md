# Route spec: QRCodeGenerate

Sources (analysis/sources/, extracted unchanged, CRLF → LF, from capture/survey-UBTConnect.json `sources`; the newer TST
copy of the screen in migration/runtime-sources/ differs only in debugger ids): `S` = migration/screens/QRCodeGenerate/
analysis/sources/UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate.mvc.js, `SB` = migration/screens/QRCodeGenerate/
analysis/sources/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode.mvc.js, `C` = migration/
runtime-sources/Connect2_OrbitMobile_MUI.controller.js. No capture (no-capture.json, user 2026-10-16): built from the
compiled code.

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/QRCodeGenerate` with In_MemberId, In_EventId (Long Integer), In_EventName (Text), In_EventStartDate, In_EventEndDate (DateTime), In_EventLocation (Text) [S model :12-47] |
| Tier | lite |
| Captured | not captured (no-capture.json: not reachable read-only on TST) |
| Shared/shell components used | Layout_Orbit, MenuIcon__UpdatedOSUI (shared/Connect2_LegacyShared); Skeleton_Loading, NoInformation_Orbit, ContactHelpdesk_Footer, lib getFormattedDateTime (shared/Connect2_OrbitMobile_MUI); CommonUI_InsideLayout (shared/UBTConnect); OSBlock, OSList; appManager_GetCachedUserInfo, memoryCache, useViewState, useWasRestoredFromCache, raiseToFlowHandler (shell) |
| Screen-specific components | ScreenBlock_GenerateQRCode (own block); components/actions.ts (GetContactHelpdeskSubject_Event, C :1961-1990); api.ts GetCacheableSignedImageURL port (as the other Orbit routes) |

## Specification
### How the original makes the QR code
The browser draws nothing: Get_EventQRCode returns the image as BinaryData (Response.QRCodeAsBinary,
Connect2_OrbitMobile_BL.GetEventQRCode_ScreenRec in the contract) and an Image widget of type Binary shows it
[SB :497-505] (runtime Image: `URL.createObjectURL` of the binary, OutSystemsReactWidgets.js ImageCache). The TST
manifest has no QR generator script (only BarcodePlugin, for scanning). No package or vendored file is needed (Q1).

### Structure
Screen [S view :186-245]: ScreenBlock_GenerateQRCode `$b1` (all six inputs; Menu, CommonUI_Elements empty),
CommonUI_InsideLayout `$b2`. ScreenBlock [SB :248-606]: Layout_Orbit "orbit-detail orbit-header-center"; HeaderLeft
MenuIcon__UpdatedOSUI (Auto); Title Expression In_EventName; Content: IsFetchingData → Skeleton_Loading(MemberQRCode)
[:533-550]; else IsDataFetched and Response.QRCodeAsBinary not NullBinary [:315] → "orbit-qrcode-member-cont"
[:316-509]: "orbit-member-photo-cont" › Image External "orbit-member-photo" (UserSignedURL); bold name (UserName);
location (UserLocation); guest role (when set, Expression "white-space-nowrap"); "display-flex" with Text
"white-space-nowrap" "Row:" and the List "list list-group" of Seats (Expression (row <> 0 ? " & " : " ") +
SeatAllocation) when seats; "GMP Tag: " + Tag when set; QRCodeData.QRCodeAsBinary not null → "full-width margin-top-xxl
text-align-center" › "font-size-0-9em" "Check into Event" and Image Binary "orbit-qrcode-code"; else NoInformation_Orbit
"Unfortunately the QR Code couldn't be generated. Please try again later." [:511-530]. BottomBar: not fetching →
ContactHelpdesk_Footer [:555-592]. The seat List is virtualized but its items are inline expressions in a row (no
`position: relative`).

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| Connect2_LegacyShared `ActionGetSignedImagesInBulk` (GetCacheableSignedImageURL) | server action | OnReady → RefreshData [SB :781-789] | MemberId of the cached user, Member, Medium (no call when MemberId is "" → 0) | SignedURL | as the other Orbit routes | shared mock (MilestoneDetail/mocks.ts) |
| Connect2_OrbitMobile_MUI `ScreenBlock_GenerateQRCode/DataActionGet_EventQRCode` | data action (on demand) | OnReady → RefreshData → Refresh Query [SB :749-812, :632-659] | block variables UserName, UserLocation, UserSignedURL, IsFetchingData, In_MemberId, In_EventId, In_EventName, In_EventStartDate, In_EventEndDate, In_EventLocation (record QRCodeData left out) | Response (GetEventQRCodeResponse.GuestRole, Seats, Tag; QRCodeAsBinary) | not in MCP; must render the pass of the signed-in member only | real (orbit.ts ORBIT_EVENT_PASSES: event 7301 / member 990001; others no pass), empty, loading, error |

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| block | OnReady [SB :663-708] | restored from the view cache → nothing; else RefreshData [SB :749-812]: IsFetchingData True; UserName = FirstName + " " + LastName, UserLocation = Locality + (Locality <> "" ? ", " + Country : Country) from AppManager_GetCachedUserInfo; UserSignedURL; refresh; OnAfterFetch [SB :813-836]: QRCodeData = Response; IsFetchingData False | GetSignedImagesInBulk (when a MemberId), Get_EventQRCode | – | – |
| footer | Click → OnHandle_ContactHelpdesk [SB :718-748] | NavigateTo_ContactHelpdesk(GetContactHelpdeskSubject_Event(In_EventName, In_EventStartDate, In_EventEndDate, In_EventLocation), In_EventName) | – | screen [S :270-301]: `/UBTConnect/ContactByEmailOrbitHelpdesk` (In_MilestoneId "", In_EventName, In_EventId, In_Subject), no Orbit access check (as compiled) | – |
| any | exception | Legacy_OrbitQRCodeFlow handleError (raiseToFlowHandler) | – | – | flow handler |
| entry | – | EventDetail OnHandle_NavigateToGenerateQRCode (built) when Get_HasQRCode; event 7301 has none on its capture | – | – | – |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | fetched with a QR image [SB :315] | no | real (review URL Q1) |
| loading | IsFetchingData [SB :314, :533] | no | loading |
| no QR | not fetched or NullBinary → NoInformation [SB :511] | no | real with another member or event |
| error | data action fails → flow handler | no | error |

## Patterns used
- P-PARAMS: query inputs with the original names; navigation with the original parameter names.
- P-DATA / P-CALLS: api.ts `callAction` for Get_EventQRCode and GetSignedImagesInBulk, both in OnReady.
- P-MOCKS: mocks.ts contractHandler from the shared Orbit world (src/mocks/fictional/orbit.ts).
- P-STATES: skeleton while fetching, NoInformation without a QR image.
- P-BACK: model kept with useViewState; OnReady does nothing after a restore.
- P-LIST: OSList for the seat rows.

## Feature flags
- `clientVar:App_PIN_BiometricEnabled`: not a flag (user, 2026-10-14); shell only. No GetHasOrbitAccess in this flow.

## Unclear points
- QR image and pass data of the mock world → Q1 (decision, open; built with A)
- Cached user info (name, location, photo) empty in the mock session → Q2 (decision, open; built with A: CR-QRCodeGenerate-1)

## Decisions to confirm
- Q1 → A: Matías's pass for event 7301 (orbit.ts ORBIT_EVENT_PASSES: role Host, GMP tag H-0417, rows "12 & 12" of the
  two seated meetings) with a real QR PNG of the payload "UBTCONNECT-ORBIT|EVENT:7301|MEMBER:990001|PASS:H-0417",
  rendered offline with macOS CoreImage (CIQRCodeGenerator, correction M, 280 px) and decoded back, stored as base64 mock
  data; no package, no QR code drawn by the app (the original does not draw one either). Review URL:
  `/UBTConnect/QRCodeGenerate?mocksession=unlocked&In_MemberId=990001&In_EventId=7301&In_EventName=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul&In_EventStartDate=2026-10-23T09%3A00%3A00Z&In_EventEndDate=2026-10-25T17%3A00%3A00Z&In_EventLocation=Bahia%20Blanca%20Main%20Hall`
  (no pass: `In_MemberId=990002`; loading `&mock=loading`; error `&mock=error`).
- Q2 → A: CR-QRCodeGenerate-1 (shell): the mock user's names, MemberId, locality and country in
  AppManager_GetCachedUserInfo; until applied the pass shows an empty name and location and an empty photo circle.
- Markup not captured: built from the compiled view (SB).

## Change requests
- CR-QRCodeGenerate-1: shell, cached user info of the mock user (FirstName, LastName, MemberId, Locality, Country);
  overlaps CR-OrbitAdminLanding-1. No `<NotCaptured>`: the markup is complete, only session data is missing.

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| – | no capture (no-capture.json) | – | – | – | – | – | – |

## Server-side notes
- Get_EventQRCode must build the pass of the signed-in member only (In_MemberId is client input) and check that the member takes part in the event.
