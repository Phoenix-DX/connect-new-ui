# Service calls captured on MilestoneDetail

| # | t (ms) | call | status | scope | path |
|---|---|---|---|---|---|
| 1 | 456 | `DataActionGet_HostSurveyStatus` | 200 | other (after navigating away, or app shell) | `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HostSurveyStatus` |
| 2 | 1089 | `DataActionGet_HasDocuments` | 200 | other (after navigating away, or app shell) | `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HasDocuments` |
| 3 | 1391 | `DataActionGet_HasQRCode` | 200 | other (after navigating away, or app shell) | `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HasQRCode` |
| 4 | 4038 | `DataActionGetAccommodationHost` | 200 | this screen | `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_AccommodationHost/DataActionGetAccommodationHost` |
| 5 | 4336 | `DataActionGet_Document` | 200 | this screen | `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_AccommodationHost/DataActionGet_Document` |
| 6 | 4906 | `ActionGetSignedImagesInBulk` | 200 | this screen | `/UBTConnect/screenservices/Connect2_LegacyShared/ActionGetSignedImagesInBulk` |

## DataActionGetAccommodationHost
- Scope: this screen
- Path: `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_AccommodationHost/DataActionGetAccommodationHost`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): `IsFetchingData`, `AccommodationData`, `IsLoadingDocument`, `HasDocument`, `ContactByPhoneData`, `In_MilestoneId`, `_in_MilestoneIdInDataFetchStatus`, `In_EventId`, `_in_EventIdInDataFetchStatus`, `In_HostId`, `_in_HostIdInDataFetchStatus`, `In_PreloadEventName`, `_in_PreloadEventNameInDataFetchStatus`, `In_PreloadMilestoneName`, `_in_PreloadMilestoneNameInDataFetchStatus`, `In_OrbitMilestoneTypeId`, `_in_OrbitMilestoneTypeIdInDataFetchStatus`
- Other request keys: (none)
- Response type: `GetAccommodationHostResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "Response": {
   "OrbitMilestoneType": {
    "Id": "string (EMPTY)",
    "Is_Active": "boolean",
    "Order": "number (0)",
    "Type": "string (EMPTY)",
    "Name": "string (EMPTY)",
    "MainColorVar": "string (EMPTY)",
    "MainIcon": "string (EMPTY)",
    "CanHost": "boolean",
    "IsTransportMilestone": "boolean",
    "IconTransportDeparture": "string (EMPTY)",
    "IconTransportArrival": "string (EMPTY)",
    "TransportHeaderClass": "string (EMPTY)",
    "TravelInfoHeader": "string (EMPTY)",
    "TravelInfoHeaderIcon": "string (EMPTY)"
   },
   "GetAccommodationHostResponse": {
    "MilestoneId": "string (EMPTY)",
    "MilestoneType": "string (EMPTY)",
    "MilestoneDateTime": "datetime string",
    "MilestoneTitle": "string",
    "EventDetails": {
     "Id": "numeric string",
     "Name": "string",
     "Location": "string",
     "StartDate": "date (1900 default)",
     "EndDate": "date (1900 default)"
    },
    "SpecialNeeds": {
     "List": [
      "(empty array)"
     ],
     "EmptyListItem": {
      "HouseholderId": "numeric string",
      "MemberId": "numeric string",
      "LocalityId": "numeric string",
      "FirstName": "string (EMPTY)",
      "LastName": "string (EMPTY)",
      "Title": "string (EMPTY)",
      "SignedPhotoURL": "string (EMPTY)",
      "SpecialNeeds": {
       "List": [
        "(empty array)"
       ],
       "EmptyListItem": {
        "Category": "string (EMPTY)",
        "Type": "string (EMPTY)",
        "Notes": "string (EMPTY)"
       }
      }
     }
    },
    "Helpers": {
     "List": [
      "(empty array)"
     ],
     "EmptyListItem": {
      "Role": "string (EMPTY)",
      "MemberInformation": {
       "List": [
        "(empty array)"
       ],
       "EmptyListItem": {
        "HouseholderId": "numeric string",
        "MemberId": "numeric string",
        "LocalityId": "numeric string",
        "Locality": "string (EMPTY)",
        "CountryCode": "string (EMPTY)",
        "FirstName": "string (EMPTY)",
        "LastName": "string (EMPTY)",
        "Title": "string (EMPTY)",
        "IsHouseholder": "boolean",
        "IsSpouse": "boolean",
        "Age": "numeric string",
        "Phone": "string (EMPTY)",
        "MiddayMeal": "string (EMPTY)",
        "EveningMeal": "string (EMPTY)",
        "Accommodation": {
         "Host": "string (EMPTY)",
         "HouseholderId": "numeric string",
         "MilestoneId": "string (EMPTY)"
        },
        "HasGuestArrangements": "boolean",
        "HasOrbitAdminRole": "boolean",
        "SignedPhotoURL": "string (EMPTY)",
        "HouseHolderId2": "numeric string"
       }
      }
     }
    },
    "Rooms": {
     "List": [
      {
       "RoomId": "numeric string",
       "RoomName": "string",
       "RoomInformation": {
        "Floor": "string",
        "Type": "string",
        "Beds": "numeric string"
       },
       "Guests": {
        "List": [
         {
          "HouseholderId": "numeric string",
          "HouseholdName": "string (EMPTY)",
          "LocalityId": "numeric string",
          "Locality": "string",
          "CountryCode": "string",
          "DisplayDot": "boolean",
          "MemberInformation": {
           "List": [
            {
             "HouseholderId": "numeric string",
             "MemberId": "numeric string",
             "LocalityId": "numeric string",
             "Locality": "string (EMPTY)",
             "CountryCode": "string (EMPTY)",
             "FirstName": "string",
             "LastName": "string",
             "Title": "string",
             "IsHouseholder": "boolean",
             "IsSpouse": "boolean",
             "Age": "numeric string",
             "Phone": "string",
             "MiddayMeal": "string (EMPTY)",
             "EveningMeal": "string (EMPTY)",
             "Accommodation": {
              "Host": "string (EMPTY)",
              "HouseholderId": "numeric string",
              "MilestoneId": "string (EMPTY)"
             },
             "HasGuestArrangements": "boolean",
             "HasOrbitAdminRole": "boolean",
             "SignedPhotoURL": "string (EMPTY)",
             "HouseHolderId2": "numeric string"
            }
           ]
          }
         }
        ]
       }
      }
     ]
    }
   }
  },
  "HasData": "boolean"
 }
}
```

## DataActionGet_Document
- Scope: this screen
- Path: `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_AccommodationHost/DataActionGet_Document`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): `IsFetchingData`, `AccommodationData`, `IsLoadingDocument`, `HasDocument`, `ContactByPhoneData`, `In_MilestoneId`, `_in_MilestoneIdInDataFetchStatus`, `In_EventId`, `_in_EventIdInDataFetchStatus`, `In_HostId`, `_in_HostIdInDataFetchStatus`, `In_PreloadEventName`, `_in_PreloadEventNameInDataFetchStatus`, `In_PreloadMilestoneName`, `_in_PreloadMilestoneNameInDataFetchStatus`, `In_OrbitMilestoneTypeId`, `_in_OrbitMilestoneTypeIdInDataFetchStatus`
- Other request keys: (none)
- Response type: `Get_DocumentResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "AccommodationHostDocument": {
   "DocumentURL": "string (EMPTY)",
   "DocumentName": "string (EMPTY)"
  }
 }
}
```

## ActionGetSignedImagesInBulk
- Scope: this screen
- Path: `/UBTConnect/screenservices/Connect2_LegacyShared/ActionGetSignedImagesInBulk`
- Server action input parameters: `BulkSignedImagesParameters`
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): (none)
- Other request keys: (none)
- Response type: `GetSignedImagesInBulkResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "Results": {
   "List": [
    {
     "Id": "numeric string",
     "Type": "string",
     "Size": "string",
     "SignedURL": "string",
     "Error": "string (EMPTY)"
    }
   ]
  }
 }
}
```

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
| `link /UBTConnect/css/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.css` | 1 |
| `link /UBTConnect/css/UBTConnectLibrary.ConnectPatterns.Note_Item.css` | 1 |
| `link /UBTConnect/css/UBTConnect_Utils.CW_Notes.NotesSheet.css` | 1 |
| `link /UBTConnect/css/UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes.css` | 1 |
| `xmlhttprequest https://australiaeast-0.in.applicationinsights.azure.com/v2/track` | 3 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.aggregates.IDB.js` | 1 |
| `xmlhttprequest /UBTConnect/moduleservices/moduleversioninfo` | 2 |
| `script /UBTConnect/scripts/UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHost.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealGuest.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc.js` | 1 |
| `script /UBTConnect/scripts/FileTransferPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Blocks.OrbitAdminTag.mvc.js` | 1 |
| `script /UBTConnect/scripts/FilePlugin.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Blocks.HostInformation.mvc.js` | 1 |
| `script /UBTConnect/scripts/FileTransferPlugin.FileTransfer.HandleDownload.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.mvc.js` | 1 |
| `script /UBTConnect/scripts/FileTransferPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/FileViewerPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/FilePlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/FileTransferPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/Connect2_AppLauncherPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.PhotoLazyLoaded.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ContactOptions_Orbit.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_AppLauncherPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/FileViewerPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/FileViewerPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/FilePlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.Widgets.MultiResolutionImageLoader.mvc.js` | 1 |
| `script /UBTConnect/scripts/ReactiveHtmlSanitizer.model.js` | 1 |
| `script /UBTConnect/scripts/ReactiveHtmlSanitizer.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.LazyImage.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc.js` | 1 |
| `script /UBTConnect/scripts/FileTransferPlugin.languageResources.js` | 1 |
| `script /UBTConnect/scripts/ReactiveHtmlSanitizer.languageResources.js` | 1 |
| `script /UBTConnect/scripts/ReactiveHtmlSanitizer.HtmlSanitizer.js` | 1 |
| `script /UBTConnect/scripts/FileTransferPlugin.FileTransfer_HandleDownload.js` | 1 |
| `script /UBTConnect/scripts/FileTransferPlugin.osfiletransfer_bundle.js` | 1 |
| `script /UBTConnect/scripts/FileTransferPlugin.wrapper.js` | 1 |
| `img https://cbcdn.ubtconnect.com/3/US/335/1501/52989/117499_f_73842.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/3/US/335/1501/52989/117499_f_77810.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/3/US/335/1501/52989/117499_f_52990.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/3/CA/381/2424/52471/122853_f_57972.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/3/US/335/1501/52989/117499_f_52991.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/3/US/335/1501/52989/117499_f_52989.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/3/CA/381/2424/52471/122853_f_52472.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/3/US/335/1501/52989/117499_f_52992.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/3/CA/381/2424/52471/122853_f_52471.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/3/CA/381/2424/52471/122853_f_66774.jpg` | 2 |
| `fetch /UBTConnect/MilestoneDetail` | 1 |
| `fetch /UBTConnect/moduleservices/moduleinfo` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc.js` | 1 |
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
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc.js` | 1 |
| `fetch /UBTConnect/status/network-ping.txt` | 2 |
| `fetch /UBTConnect/scripts/FileTransferPlugin.FileTransfer.HandleDownload.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.controller.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.model.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.languageResources.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.controller.js` | 1 |
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
| `fetch /UBTConnect/scripts/FileTransferPlugin.controller.js` | 1 |
| `fetch /UBTConnect/scripts/FileTransferPlugin.model.js` | 1 |
| `fetch /UBTConnect/scripts/FileTransferPlugin.languageResources.js` | 1 |
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
