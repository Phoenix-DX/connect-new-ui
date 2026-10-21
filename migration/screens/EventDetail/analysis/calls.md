# Service calls captured on EventDetail

| # | t (ms) | call | status | scope | path |
|---|---|---|---|---|---|
| 1 | 542 | `ActionGetAllApplicationEvents` | 200 | this screen | `/UBTConnect/screenservices/Connect2_LegacyShared/ActionGetAllApplicationEvents` |
| 2 | 1775 | `DataActionGet_EventDetails` | 200 | this screen | `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_EventDetails` |
| 3 | 2065 | `DataActionGet_HostSurveyStatus` | 200 | this screen | `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HostSurveyStatus` |
| 4 | 2609 | `DataActionGet_HasDocuments` | 200 | this screen | `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HasDocuments` |
| 5 | 2906 | `DataActionGet_HasQRCode` | 200 | this screen | `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HasQRCode` |

## ActionGetAllApplicationEvents
- Scope: this screen
- Path: `/UBTConnect/screenservices/Connect2_LegacyShared/ActionGetAllApplicationEvents`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): (none)
- Other request keys: (none)
- Response type: `GetAllApplicationEventsResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "EventList": {
   "List": [
    {
     "LocalConnectApplicationEvents": {
      "Id": "string",
      "Name": "string"
     }
    }
   ]
  }
 }
}
```

## DataActionGet_EventDetails
- Scope: this screen
- Path: `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_EventDetails`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): `EventDetails`, `DateFilters`, `IsFetchingData`, `HostAllocation`, `HasQRCode`, `HasScanned`, `HasDocuments`, `IsEventUnavailable`, `UserInformation`, `In_MemberId`, `_in_MemberIdInDataFetchStatus`, `In_EventId`, `_in_EventIdInDataFetchStatus`, `In_EventName`, `_in_EventNameInDataFetchStatus`, `In_FromNotification`, `_in_FromNotificationInDataFetchStatus`, `Get_HostSurveyStatus`
- Other request keys: (none)
- Response type: `Get_EventDetailsResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "Response": {
   "EventId": "numeric string",
   "MemberId": "numeric string",
   "EventType": "string",
   "EventName": "string",
   "EventStartDate": "datetime string",
   "EventEndDate": "datetime string",
   "Location": "string",
   "TypeOfEvent": "string",
   "IsBookletVisible": "boolean",
   "SetUpMeals": "boolean",
   "Meals": "boolean",
   "Accommodations": "boolean",
   "Helpers": "boolean",
   "Transport": "boolean",
   "GuestTransport": "boolean",
   "HostSurvey": {
    "Id": "string (EMPTY)",
    "Description": "string (EMPTY)"
   },
   "OrbitEventType": {
    "Id": "string",
    "Is_Active": "boolean",
    "Type": "string",
    "Name": "string (EMPTY)",
    "MainColorVar": "string (EMPTY)",
    "MainIcon": "string (EMPTY)"
   },
   "Milestones": {
    "List": [
     {
      "MilestoneId": "string",
      "Type": "string",
      "Title": "string",
      "MilestoneDateTime": "datetime string",
      "TimeType": "string",
      "SequenceNo": "numeric string",
      "DateForFilter": "date string",
      "OrbitMilestoneType": {
       "Id": "string",
       "Is_Active": "boolean",
       "Order": "number",
       "Type": "string",
       "Name": "string",
       "MainColorVar": "string",
       "MainIcon": "string",
       "CanHost": "boolean",
       "IsTransportMilestone": "boolean",
       "IconTransportDeparture": "string (EMPTY)",
       "IconTransportArrival": "string (EMPTY)",
       "TransportHeaderClass": "string (EMPTY)",
       "TravelInfoHeader": "string (EMPTY)",
       "TravelInfoHeaderIcon": "string (EMPTY)"
      },
      "MilestoneInfo": {
       "HostId": "numeric string",
       "Location": "string",
       "Seating": "string (EMPTY)",
       "MilestoneStartDateTime": "date (1900 default)",
       "MilestoneEndDateTime": "date (1900 default)",
       "DepartureLocation": "string (EMPTY)",
       "ArrivalLocation": "string (EMPTY)",
       "MilestoneHost": "string",
       "Description": "string (EMPTY)"
      }
     }
    ]
   }
  },
  "Response_DateFilters": {
   "HasBefore": "boolean",
   "HasAfter": "boolean",
   "DayFilterList": {
    "List": [
     {
      "DateGroup": "date string",
      "IsSelected": "boolean"
     }
    ]
   }
  },
  "IsNullResponse": "boolean"
 }
}
```

## DataActionGet_HostSurveyStatus
- Scope: this screen
- Path: `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HostSurveyStatus`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): `EventDetails`, `DateFilters`, `IsFetchingData`, `HostAllocation`, `HasQRCode`, `HasScanned`, `HasDocuments`, `IsEventUnavailable`, `UserInformation`, `In_MemberId`, `_in_MemberIdInDataFetchStatus`, `In_EventId`, `_in_EventIdInDataFetchStatus`, `In_EventName`, `_in_EventNameInDataFetchStatus`, `In_FromNotification`, `_in_FromNotificationInDataFetchStatus`, `Get_HostSurveyStatus`
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
- Scope: this screen
- Path: `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HasDocuments`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): `EventDetails`, `DateFilters`, `IsFetchingData`, `HostAllocation`, `HasQRCode`, `HasScanned`, `HasDocuments`, `IsEventUnavailable`, `UserInformation`, `In_MemberId`, `_in_MemberIdInDataFetchStatus`, `In_EventId`, `_in_EventIdInDataFetchStatus`, `In_EventName`, `_in_EventNameInDataFetchStatus`, `In_FromNotification`, `_in_FromNotificationInDataFetchStatus`, `Get_HostSurveyStatus`
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
- Scope: this screen
- Path: `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HasQRCode`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): `EventDetails`, `DateFilters`, `IsFetchingData`, `HostAllocation`, `HasQRCode`, `HasScanned`, `HasDocuments`, `IsEventUnavailable`, `UserInformation`, `In_MemberId`, `_in_MemberIdInDataFetchStatus`, `In_EventId`, `_in_EventIdInDataFetchStatus`, `In_EventName`, `_in_EventNameInDataFetchStatus`, `In_FromNotification`, `_in_FromNotificationInDataFetchStatus`, `Get_HostSurveyStatus`
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
| `script /UBTConnect/scripts/Connect2_LegacyShared.aggregates.IDB.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Legacy_OrbitEventsFlow.EventDetail.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_List.mvc.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_ListItem.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_HelperItem.mvc.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ListOfDaySelectors.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.DaySelector.mvc.js` | 1 |
| `xmlhttprequest https://australiaeast-0.in.applicationinsights.azure.com/v2/track` | 2 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.aggregates.IDB.js` | 1 |
| `xmlhttprequest /UBTConnect/moduleservices/moduleversioninfo` | 1 |
| `fetch /UBTConnect/EventDetail` | 1 |
| `fetch /UBTConnect/moduleservices/moduleinfo` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Legacy_OrbitEventsFlow.EventDetail.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_List.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_ListItem.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_HelperItem.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ListOfDaySelectors.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.DaySelector.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_Common.OfflineDataSyncEvents.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_PIN.Block_PINUnlock.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.Layouts.SVG_Background_LoginWrapper.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Utilities.InlineSVG.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBT_AppManager.PIN.Pincode_Unlock.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBT_AppManager.PIN.InactivityTimer.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.Utility.HandleImageLoadError.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.NavigationHandler.BackNavigationHandler.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.controller.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.model.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.languageResources.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.controller.js` | 1 |
| `fetch /UBTConnect/status/network-ping.txt` | 2 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.model.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.languageResources.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.controller.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.model.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.languageResources.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.controller.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.model.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.languageResources.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.controller.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.model.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.languageResources.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.controller.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.model.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.languageResources.js` | 1 |
| `fetch /UBTConnect/scripts/UBT_AppManager_Mobile.controller.js` | 1 |
| `fetch /UBTConnect/scripts/UBT_AppManager_Mobile.model.js` | 1 |
| `fetch /UBTConnect/scripts/UBT_AppManager_Mobile.languageResources.js` | 1 |
| `fetch /UBTConnect/scripts/UBT_AppManager.controller.js` | 1 |
| `fetch /UBTConnect/scripts/UBT_AppManager.model.js` | 1 |
| `fetch /UBTConnect/scripts/UBT_AppManager.languageResources.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.controller.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.model.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.languageResources.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_AndroidAppLinksPlugin.controller.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_AndroidAppLinksPlugin.model.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_AndroidAppLinksPlugin.languageResources.js` | 1 |
| `fetch /UBTConnect/scripts/EventfulDeeplinksPlugin.controller.js` | 1 |
| `fetch /UBTConnect/scripts/EventfulDeeplinksPlugin.model.js` | 1 |
| `fetch /UBTConnect/scripts/EventfulDeeplinksPlugin.languageResources.js` | 1 |
| `fetch /UBTConnect/css/_Basic.css` | 1 |
| `fetch /UBTConnect/css/OutSystemsReactWidgets.css` | 1 |
| `fetch /UBTConnect/css/UBT_AppManager.PIN.PinCode.css` | 1 |
| `fetch /UBTConnect/css/UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.css` | 1 |
| `fetch /UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.css` | 1 |
| `fetch /UBTConnect/css/UBTConnectLibrary.UBTConnectBase.css` | 1 |
| `fetch /UBTConnect/css/UBTConnectLibrary.UBTConnectLibrary.css` | 1 |
| `fetch /UBTConnect/css/Connect2_LegacyShared.UBTConnect.css` | 1 |
| `fetch /UBTConnect/css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css` | 1 |
| `fetch /UBTConnect/css/Connect2_LegacyShared.ConnectMobileCommonTheme.css` | 1 |
| `fetch /UBTConnect/css/Connect2_LegacyShared.OrbitTheme.css` | 1 |
| `fetch /UBTConnect/css/Connect2_LegacyShared.AssembleTheme.css` | 1 |
| `fetch /UBTConnect/css/Connect2_LegacyShared.ConnectMobile.css` | 1 |
| `fetch /UBTConnect/css/Connect2_LegacyShared.UBTConnect_LegacyChain.css` | 1 |
| `fetch /UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.extra.css` | 1 |
| `fetch /UBTConnect/fonts/fontawesome-webfont.woff2` | 1 |
| `fetch /UBTConnect/fonts/fontawesome-webfont.woff` | 1 |
| `fetch /UBTConnect/Inter-VariableFont_opsz,wght.ttf` | 1 |
| `fetch /UBTConnect/Inter-Italic-VariableFont_opsz,wght.ttf` | 1 |
| `fetch /UBTConnect/fonts/connect-icon.ttf` | 1 |
| `fetch /UBTConnect/fonts/connect-icon.woff` | 1 |
| `fetch /UBTConnect/Roboto-Bold.ttf` | 1 |
| `fetch /UBTConnect/Roboto-Regular.ttf` | 1 |
| `fetch /UBTConnect/Roboto-Thin.ttf` | 1 |
| `fetch /UBTConnect/material-design-icons.eot` | 1 |
| `fetch /UBTConnect/material-design-icons.ttf` | 1 |
| `fetch /UBTConnect/material-design-icons.woff` | 1 |
| `fetch /UBTConnect/material-design-icons.svg` | 1 |
| `fetch /UBTConnect/locality-tabs.eot` | 1 |
| `fetch /UBTConnect/locality-tabs.ttf` | 1 |
| `fetch /UBTConnect/locality-tabs.woff` | 1 |
| `fetch /UBTConnect/locality-tabs.svg` | 1 |
| `fetch /UBTConnect/my-update-feed.eot` | 1 |
| `fetch /UBTConnect/my-update-feed.ttf` | 1 |
| `fetch /UBTConnect/my-update-feed.woff` | 1 |
| `fetch /UBTConnect/my-update-feed.svg` | 1 |
| `fetch /UBTConnect/icon-directory-theme.eot` | 1 |
| `fetch /UBTConnect/icon-directory-theme.ttf` | 1 |
| `fetch /UBTConnect/icon-directory-theme.woff` | 1 |
| `fetch /UBTConnect/icon-directory-theme.svg` | 1 |
| `fetch /UBTConnect/communityHub.eot` | 1 |
| `fetch /UBTConnect/communityHub.ttf` | 1 |
| `fetch /UBTConnect/communityHub.woff` | 1 |
| `fetch /UBTConnect/communityHub.svg` | 1 |
| `fetch /UBTConnect/photobook-icon-set.eot` | 1 |
| `fetch /UBTConnect/photobook-icon-set.ttf` | 1 |
| `fetch /UBTConnect/photobook-icon-set.woff` | 1 |
| `fetch /UBTConnect/photobook-icon-set.svg` | 1 |
| `fetch /UBTConnect/ADVSearch-Icons.eot` | 1 |
| `fetch /UBTConnect/ADVSearch-Icons.ttf` | 1 |
| `fetch /UBTConnect/ADVSearch-Icons.woff` | 1 |
| `fetch /UBTConnect/ADVSearch-Icons.svg` | 1 |
| `fetch /UBTConnect/application-icon.eot` | 1 |
| `fetch /UBTConnect/application-icon.ttf` | 1 |
| `fetch /UBTConnect/application-icon.woff` | 1 |
| `fetch /UBTConnect/application-icon.svg` | 1 |
| `fetch /UBTConnect/trove-icon.eot` | 1 |
| `fetch /UBTConnect/trove-icon.ttf` | 1 |
| `fetch /UBTConnect/trove-icon.woff` | 1 |
| `fetch /UBTConnect/trove-icon.svg` | 1 |
| `fetch /UBTConnect/icon-play_circle.eot` | 1 |
| `fetch /UBTConnect/icon-play_circle.ttf` | 1 |
| `fetch /UBTConnect/icon-play_circle.woff` | 1 |
| `fetch /UBTConnect/icon-play_circle.svg` | 1 |
| `fetch /UBTConnect/trove-mobile-icon.eot` | 1 |
| `fetch /UBTConnect/trove-mobile-icon.ttf` | 1 |
| `fetch /UBTConnect/trove-mobile-icon.woff` | 1 |
| `fetch /UBTConnect/trove-mobile-icon.svg` | 1 |
| `fetch /UBTConnect/bookmark_icon.eot` | 1 |
| `fetch /UBTConnect/bookmark_icon.ttf` | 1 |
| `fetch /UBTConnect/bookmark_icon.woff` | 1 |
| `fetch /UBTConnect/bookmark_icon.svg` | 1 |
| `fetch /UBTConnect/event_icon.eot` | 1 |
| `fetch /UBTConnect/event_icon.woff` | 1 |
| `fetch /UBTConnect/event_icon.ttf` | 1 |
| `fetch /UBTConnect/event_icon.svg` | 1 |
| `fetch /UBTConnect/AccountSetting-Icons.eot` | 1 |
| `fetch /UBTConnect/AccountSetting-Icons.ttf` | 1 |
| `fetch /UBTConnect/AccountSetting-Icons.woff` | 1 |
| `fetch /UBTConnect/AccountSetting-Icons.svg` | 1 |
| `fetch /UBTConnect/MyDetail-Icons.eot` | 1 |
| `fetch /UBTConnect/MyDetail-Icons.ttf` | 1 |
| `fetch /UBTConnect/MyDetail-Icons.woff` | 1 |
| `fetch /UBTConnect/MyDetail-Icons.svg` | 1 |
| `fetch /UBTConnect/myprofile-icon-set.eot` | 1 |
| `fetch /UBTConnect/myprofile-icon-set.woff` | 1 |
| `fetch /UBTConnect/myprofile-icon-set.ttf` | 1 |
| `fetch /UBTConnect/myprofile-icon-set.svg` | 1 |
| `fetch /UBTConnect/ContactUs-Icons.eot` | 1 |
| `fetch /UBTConnect/ContactUs-Icons.ttf` | 1 |
| `fetch /UBTConnect/ContactUs-Icons.woff` | 1 |
| `fetch /UBTConnect/ContactUs-Icons.svg` | 1 |
| `fetch /UBTConnect/menu-icon.eot` | 1 |
| `fetch /UBTConnect/menu-icon.ttf` | 1 |
| `fetch /UBTConnect/menu-icon.woff` | 1 |
| `fetch /UBTConnect/menu-icon.svg` | 1 |
| `fetch /UBTConnect/Playlist.eot` | 1 |
| `fetch /UBTConnect/Playlist.ttf` | 1 |
| `fetch /UBTConnect/Playlist.woff` | 1 |
| `fetch /UBTConnect/Playlist.svg` | 1 |
| `fetch /UBTConnect/img/Connect2_LegacyShared.Large_BackgroundLogin.jpg` | 1 |
| `fetch /UBTConnect/home.svg` | 1 |
| `fetch /UBTConnect/img/Connect2_LegacyShared.importantfeedbackmessage.png` | 1 |
| `fetch /UBTConnect/img/Connect2_LegacyShared.loading.svg` | 1 |
| `fetch /UBTConnect/orbit-icon.eot` | 1 |
| `fetch /UBTConnect/orbit-icon.ttf` | 1 |
| `fetch /UBTConnect/orbit-icon.woff` | 1 |
| `fetch /UBTConnect/orbit-icon.svg` | 1 |
| `fetch /UBTConnect/img/Connect2_LegacyShared.flight_detail_image2.png` | 1 |
| `fetch /UBTConnect/img/Connect2_LegacyShared.train_detail_image2.png` | 1 |
| `fetch /UBTConnect/img/Connect2_LegacyShared.boat_detail_image2.png` | 1 |
| `fetch /UBTConnect/img/Connect2_LegacyShared.car_detail_image2.png` | 1 |
| `fetch /UBTConnect/connect.eot` | 1 |
| `fetch /UBTConnect/connect.ttf` | 1 |
| `fetch /UBTConnect/connect.woff` | 1 |
| `fetch /UBTConnect/connect.svg` | 1 |
| `fetch /UBTConnect/wallet.eot` | 1 |
| `fetch /UBTConnect/wallet.ttf` | 1 |
| `fetch /UBTConnect/wallet.woff` | 1 |
| `fetch /UBTConnect/wallet.svg` | 1 |
