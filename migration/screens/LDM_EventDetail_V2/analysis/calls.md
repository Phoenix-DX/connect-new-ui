# Service calls captured on LDM_EventDetail_V2

| # | t (ms) | call | status | scope | path |
|---|---|---|---|---|---|
| 1 | 1297 | `DataActionGetCoordinatorDetails` | 200 | this screen | `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2/DataActionGetCoordinatorDetails` |
| 2 | 1320 | `DataActionGetEventByEventId` | 200 | this screen | `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2/DataActionGetEventByEventId` |

## DataActionGetCoordinatorDetails
- Scope: this screen
- Path: `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2/DataActionGetCoordinatorDetails`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): `IsFetching`, `MinBannerHeight`, `SquarePhotoPx`, `HasInformation`, `MaxPhotoWidth`, `MaxPhotoHeight`, `ContactByPhoneData`, `ContactByMessagePopupData`, `ContactByMessagePopupData_IsCoordinator`, `EventHostId`, `_eventHostIdInDataFetchStatus`, `EventId`, `_eventIdInDataFetchStatus`
- Other request keys: (none)
- Response type: `GetCoordinatorDetailsResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "Out_CoordinatorDetails": {
   "GetCoordinatorDetailsResponse": {
    "CoordinatorName": "string",
    "CoordinatorEmail": "string",
    "CoordinatorPhoneNumber": "string",
    "Latitude": "string (EMPTY)",
    "Longitude": "string (EMPTY)",
    "Address": "string (EMPTY)",
    "LocalityName": "string",
    "LocalityId": "numeric string",
    "CountryCode": "string (EMPTY)",
    "CountryName": "string",
    "EventDate": "datetime string",
    "LDMEventName": "string",
    "Timezone": {
     "TimezoneLabel": "string",
     "OffsetSeconds": "numeric string"
    }
   }
  },
  "Out_HasContent": "boolean",
  "EventName": "string (EMPTY)"
 }
}
```

## DataActionGetEventByEventId
- Scope: this screen
- Path: `/UBTConnect/screenservices/Connect2_OrbitMobile_MUI/LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2/DataActionGetEventByEventId`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): `IsFetching`, `MinBannerHeight`, `SquarePhotoPx`, `HasInformation`, `MaxPhotoWidth`, `MaxPhotoHeight`, `ContactByPhoneData`, `ContactByMessagePopupData`, `ContactByMessagePopupData_IsCoordinator`, `EventHostId`, `_eventHostIdInDataFetchStatus`, `EventId`, `_eventIdInDataFetchStatus`
- Other request keys: (none)
- Response type: `GetEventByEventIdResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "EventResponse": {
   "Host": {
    "IsPublished": "boolean",
    "Hosting": "boolean",
    "MemberId": "numeric string",
    "HouseholderID": "numeric string",
    "HouseholderName": "string",
    "FirstName": "string (EMPTY)",
    "LastName": "string (EMPTY)",
    "LocalityId": "numeric string",
    "Phone": "string",
    "Email": "string",
    "FormattedAddress": "string",
    "CountryName": "string",
    "Longitude": "string (EMPTY)",
    "Latitude": "string (EMPTY)",
    "CDNbucket": "string (EMPTY)",
    "CDNPath": "string (EMPTY)",
    "SignedURL": "string",
    "EventID": "numeric string",
    "EventDate": "datetime string",
    "EventLocalityID": "numeric string",
    "EventLocalityName": "string",
    "HallPhotosCdnBucket": "string (EMPTY)",
    "HallphotosCdnPath": "string (EMPTY)",
    "SignedHallPhoto": "string",
    "MainHallName": "string (EMPTY)",
    "MainHallFormattedAddress": "string",
    "MainHallUseLatLong": "boolean",
    "MainHallLongititude": "decimal string",
    "MainHallLatitude": "decimal string",
    "OrganiserName": "string (EMPTY)",
    "OrganiserEmail": "string (EMPTY)",
    "Adults": "numeric string",
    "Children": "numeric string",
    "RecordDisabled": "boolean",
    "HouseholdDisplay": "boolean",
    "EventName": "string (EMPTY)",
    "Timezone": {
     "TimezoneLabel": "string",
     "OffsetSeconds": "numeric string"
    },
    "HomePhone": "string (EMPTY)",
    "HouseholderSignedImagePath": "string (EMPTY)",
    "WorkPhone": "string",
    "MobilePhone": "string"
   },
   "Guests": {
    "List": [
     {
      "EventGuestID": "numeric string",
      "HouseholderName": "string",
      "HouseholderID": "numeric string",
      "LocalityName": "string",
      "LocalityId": "numeric string",
      "CdnBucket": "string",
      "Resize340CdnPath": "string",
      "SignedURL": "string",
      "NonAttending": "string (EMPTY)",
      "Including": "string (EMPTY)",
      "Adults": "numeric string",
      "Children": "numeric string",
      "RecordDisabled": "boolean",
      "HouseholdDisplay": "boolean",
      "MobilePhone": "string",
      "WorkPhone": "string (EMPTY)",
      "Email": "string",
      "FormattedAddress": "string (EMPTY)",
      "CountryName": "string",
      "Latitude": "decimal string",
      "Longitude": "decimal string",
      "Timezone": {
       "TimezoneLabel": "string",
       "OffsetSeconds": "numeric string"
      },
      "HomePhone": "string (EMPTY)",
      "HouseholderSignedImagePath": "string (EMPTY)",
      "HouseholderFirstName": "string"
     }
    ]
   },
   "SpecialNeeds": {
    "Mobility": {
     "List": [
      "(empty array)"
     ],
     "EmptyListItem": {
      "Type": "numeric string",
      "Memberid": "numeric string",
      "Name": "string (EMPTY)",
      "Notes": "string (EMPTY)",
      "Category": "string (EMPTY)",
      "Eventid": "numeric string",
      "Eventguestid": "numeric string",
      "FullName": "string (EMPTY)",
      "CdnBucket": "string (EMPTY)",
      "CdnPath": "string (EMPTY)",
      "SignedUrl": "string (EMPTY)"
     }
    },
    "Diet": {
     "List": [
      "(empty array)"
     ],
     "EmptyListItem": {
      "Type": "numeric string",
      "Memberid": "numeric string",
      "Name": "string (EMPTY)",
      "Notes": "string (EMPTY)",
      "Category": "string (EMPTY)",
      "Eventid": "numeric string",
      "Eventguestid": "numeric string",
      "FullName": "string (EMPTY)",
      "CdnBucket": "string (EMPTY)",
      "CdnPath": "string (EMPTY)",
      "SignedUrl": "string (EMPTY)"
     }
    },
    "Other": {
     "List": [
      "(empty array)"
     ],
     "EmptyListItem": {
      "Type": "numeric string",
      "Memberid": "numeric string",
      "Name": "string (EMPTY)",
      "Notes": "string (EMPTY)",
      "Category": "string (EMPTY)",
      "Eventid": "numeric string",
      "Eventguestid": "numeric string",
      "FullName": "string (EMPTY)",
      "CdnBucket": "string (EMPTY)",
      "CdnPath": "string (EMPTY)",
      "SignedUrl": "string (EMPTY)"
     }
    }
   }
  },
  "Out_HasContent": "boolean"
 }
}
```

## Other requests during capture (no bodies)
| request | count |
|---|---|
| `fetch /UBTConnect/LDM_MyEvents_V2` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_HostCard.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.LDM_Blocks.EventsDetail_Content.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Section.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_SpecialNeeds_ListItem.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_ListItem.mvc.js` | 1 |
| `img /UBTConnect/img/Connect2_OrbitMobile_MUI.no_events.png` | 1 |
| `img https://d23bplak01dwmt.cloudfront.net/3/US/326/hall_765.jpg` | 2 |
| `xmlhttprequest https://australiaeast-0.in.applicationinsights.azure.com/v2/track` | 6 |
| `xmlhttprequest /UBTConnect/moduleservices/moduleversioninfo` | 1 |
| `fetch /UBTConnect/LDM_EventDetail_V2` | 1 |
| `fetch /UBTConnect/moduleservices/moduleinfo` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.Layout.Layout.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.LDM_Blocks.EventsDetail_Content.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_HostCard.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_Common.BottomBarMenu.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_Common.BottomBarContent.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Navigation.BottomBarItem.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.CustomText.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.IconInline_Internal.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_Common_Blocks.App_IconBadge.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc.js` | 1 |
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
| `fetch /UBTConnect/scripts/UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.Utility.HandleImageLoadError.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.NavigationHandler.BackNavigationHandler.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.controller.js` | 1 |
| `fetch /UBTConnect/status/network-ping.txt` | 2 |
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
| `fetch /UBTConnect/scripts/UBTConnect_Utils.controller.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.model.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.languageResources.js` | 1 |
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
