# Service calls captured on ContactByEmailOrbitHelpdesk

| # | t (ms) | call | status | scope | path |
|---|---|---|---|---|---|
| 1 | 443 | `DataActionGet_HostSurveyStatus` | 200 | other (after navigating away, or app shell) | `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HostSurveyStatus` |
| 2 | 1013 | `DataActionGet_HasDocuments` | 200 | other (after navigating away, or app shell) | `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HasDocuments` |
| 3 | 1317 | `DataActionGet_HasQRCode` | 200 | other (after navigating away, or app shell) | `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HasQRCode` |

## DataActionGet_HostSurveyStatus
- Scope: other (after navigating away, or app shell)
- Path: `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HostSurveyStatus`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): `EventDetails`, `DateFilters`, `IsFetchingData`, `HostAllocation`, `HasQRCode`, `HasScanned`, `HasDocuments`, `IsEventUnavailable`, `UserInformation`, `EventNotes`, `In_MemberId`, `_in_MemberIdInDataFetchStatus`, `In_EventId`, `_in_EventIdInDataFetchStatus`, `In_EventName`, `_in_EventNameInDataFetchStatus`, `In_FromNotification`, `_in_FromNotificationInDataFetchStatus`, `Get_HostSurveyStatus`
- Other request keys: (none)
- Response type: `Get_HostSurveyStatusResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "Response": {
   "Id": "string",
   "Description": "string (EMPTY)"
  }
 }
}
```

## DataActionGet_HasDocuments
- Scope: other (after navigating away, or app shell)
- Path: `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HasDocuments`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): `EventDetails`, `DateFilters`, `IsFetchingData`, `HostAllocation`, `HasQRCode`, `HasScanned`, `HasDocuments`, `IsEventUnavailable`, `UserInformation`, `EventNotes`, `In_MemberId`, `_in_MemberIdInDataFetchStatus`, `In_EventId`, `_in_EventIdInDataFetchStatus`, `In_EventName`, `_in_EventNameInDataFetchStatus`, `In_FromNotification`, `_in_FromNotificationInDataFetchStatus`, `Get_HostSurveyStatus`
- Other request keys: (none)
- Response type: `Get_HasDocumentsResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "Response_HasDocuments": "boolean"
 }
}
```

## DataActionGet_HasQRCode
- Scope: other (after navigating away, or app shell)
- Path: `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HasQRCode`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): `EventDetails`, `DateFilters`, `IsFetchingData`, `HostAllocation`, `HasQRCode`, `HasScanned`, `HasDocuments`, `IsEventUnavailable`, `UserInformation`, `EventNotes`, `In_MemberId`, `_in_MemberIdInDataFetchStatus`, `In_EventId`, `_in_EventIdInDataFetchStatus`, `In_EventName`, `_in_EventNameInDataFetchStatus`, `In_FromNotification`, `_in_FromNotificationInDataFetchStatus`, `Get_HostSurveyStatus`
- Other request keys: (none)
- Response type: `Get_HasQRCodeResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "Response_HasQRCode": "boolean",
  "Response_HasScanned": "boolean"
 }
}
```

## Other requests during capture (no bodies)
| request | count |
|---|---|
| `fetch /UBTConnect/OrbitLanding` | 1 |
| `link /UBTConnect/css/UBTConnect_Utils.CW_Notes.NotesSheet.css` | 1 |
| `link /UBTConnect/css/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.css` | 1 |
| `link /UBTConnect/css/UBTConnectLibrary.ConnectPatterns.Note_Item.css` | 1 |
| `link /UBTConnect/css/UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes.css` | 1 |
| `xmlhttprequest https://australiaeast-0.in.applicationinsights.azure.com/v2/track` | 3 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.aggregates.IDB.js` | 1 |
| `xmlhttprequest /UBTConnect/moduleservices/moduleversioninfo` | 2 |
| `script /UBTConnect/scripts/UBTConnect.ContactFlow.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.ContactFlow.ContactByEmailForm.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect_Communication_CS.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBT_Email.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.DynamicTextArea.mvc.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Utilities.ButtonLoading.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.FixedFooter.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_Navigation.mvc.js` | 1 |
| `script /UBTConnect/scripts/NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc.js` | 1 |
| `script /UBTConnect/scripts/NavigationHandler.NavigationHandler.NavigationHandler.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ScrollAnimations.js` | 1 |
| `img /UBTConnect/img/Connect2_OrbitMobile_MUI.Orbit_Logo.svg` | 3 |
| `fetch /UBTConnect/ContactByEmailOrbitHelpdesk` | 1 |
| `fetch /UBTConnect/moduleservices/moduleinfo` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.ContactFlow.ContactByEmailForm.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.DynamicTextArea.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.InputCounter.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.FixedFooter.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Utilities.ButtonLoading.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_Common.Button.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Button.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.IconText.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Adaptive.Columns2.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.CustomText.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.IconInline_Internal.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.controller.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.model.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.languageResources.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.controller.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.model.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.languageResources.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.controller.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.model.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.languageResources.js` | 1 |
| `fetch /UBTConnect/status/network-ping.txt` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.controller.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.model.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.languageResources.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.controller.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.model.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.languageResources.js` | 1 |
| `fetch /UBTConnect/css/_Basic.css` | 1 |
| `fetch /UBTConnect/css/OutSystemsReactWidgets.css` | 1 |
| `fetch /UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.css` | 1 |
| `fetch /UBTConnect/css/UBTConnectLibrary.UBTConnectBase.css` | 1 |
| `fetch /UBTConnect/css/UBTConnectLibrary.UBTConnectLibrary.css` | 1 |
| `fetch /UBTConnect/css/Connect2_LegacyShared.UBTConnect.css` | 1 |
| `fetch /UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.extra.css` | 1 |
| `fetch /UBTConnect/fonts/fontawesome-webfont.woff2` | 1 |
| `fetch /UBTConnect/fonts/fontawesome-webfont.woff` | 1 |
| `fetch /UBTConnect/Inter-VariableFont_opsz,wght.ttf` | 1 |
| `fetch /UBTConnect/Inter-Italic-VariableFont_opsz,wght.ttf` | 1 |
| `fetch /UBTConnect/fonts/connect-icon.ttf` | 1 |
| `fetch /UBTConnect/fonts/connect-icon.woff` | 1 |
| `fetch /UBTConnect/img/Connect2_OrbitMobile_MUI.Orbit_Logo.svg` | 1 |
