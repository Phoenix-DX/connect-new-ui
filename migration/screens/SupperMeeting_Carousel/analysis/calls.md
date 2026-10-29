# Service calls captured on SupperMeeting_Carousel

| # | t (ms) | call | status | scope | path |
|---|---|---|---|---|---|
| 1 | 2812 | `DataActionGetSubdivisionHouseholds` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_SupperMeetings/SupperMeeting_HouseholdList/DataActionGetSubdivisionHouseholds` |
| 2 | 2831 | `DataActionGetSubdivisionHouseholds` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_SupperMeetings/SupperMeeting_HouseholdList/DataActionGetSubdivisionHouseholds` |
| 3 | 2838 | `DataActionGetSubdivisionHouseholds` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_SupperMeetings/SupperMeeting_HouseholdList/DataActionGetSubdivisionHouseholds` |
| 4 | 2898 | `DataActionFetchNotes` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchNotes` |
| 5 | 2933 | `DataActionFetchContactDetails` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails` |
| 6 | 2969 | `DataActionGetSubdivision` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_SupperMeetings/SupperMeeting_DetailsBlock/DataActionGetSubdivision` |
| 7 | 3001 | `DataActionFetchNotes` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchNotes` |
| 8 | 3016 | `DataActionFetchNotes` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchNotes` |
| 9 | 3019 | `DataActionFetchContactDetails` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails` |
| 10 | 3034 | `DataActionFetchContactDetails` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails` |
| 11 | 3675 | `DataActionGetSubdivision` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_SupperMeetings/SupperMeeting_DetailsBlock/DataActionGetSubdivision` |
| 12 | 3688 | `DataActionFetchContactDetails` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails` |
| 13 | 3985 | `ActionGetSignedImagesInBulk` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect_Utils/ActionGetSignedImagesInBulk` |
| 14 | 4429 | `DataActionFetchContactDetails` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails` |
| 15 | 4646 | `DataActionGetSubdivision` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_SupperMeetings/SupperMeeting_DetailsBlock/DataActionGetSubdivision` |
| 16 | 4772 | `DataActionFetchContactDetails` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails` |
| 17 | 4901 | `DataActionFetchContactDetails` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails` |
| 18 | 4951 | `DataActionFetchContactDetails` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails` |
| 19 | 5136 | `DataActionFetchContactDetails` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails` |

## DataActionGetSubdivisionHouseholds
- Scope: this screen
- Path: `/UBTConnect/screenservices/UBTConnect/Directory_SupperMeetings/SupperMeeting_HouseholdList/DataActionGetSubdivisionHouseholds`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): `In_SubdivisionId`, `_in_SubdivisionIdInDataFetchStatus`
- Other request keys: (none)
- Response type: `GetSubdivisionHouseholdsResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "Household_GalleryCard_List": {
   "List": [
    {
     "HouseholdId": "numeric string",
     "HouseholdName": "string",
     "ChildrenNames": "string"
    }
   ]
  }
 }
}
```

## DataActionFetchNotes
- Scope: this screen
- Path: `/UBTConnect/screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchNotes`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): `Local_isBookmarked`, `Local_BookmarkTypeId`, `Local_In_ActionsMenuOptions`, `isLoaded`, `Local_ShareType`, `ShowCallPopUp`, `ShowEmailPopUp`, `ShowSharePopup`, `ShowNotesSheet`, `isFetchContacts`, `ShowIconLabels`, `ShareSheet_OverwriteImageURL`, `NoteCategoryId`, `EntityNotes`, `FetchNoteId`, `IsEnabled`, `_isEnabledInDataFetchStatus`, `EntityType`, `_entityTypeInDataFetchStatus`, `EntityId`, `_entityIdInDataFetchStatus`, `ContactPopUp_OverrideOptions`, `_contactPopUp_OverrideOptionsInDataFetchStatus`, `EnableOptions`, `_enableOptionsInDataFetchStatus`, `useViewDetails`, `_useViewDetailsInDataFetchStatus`, `In_LocalityId`, `_in_LocalityIdInDataFetchStatus`
- Other request keys: (none)
- Response type: `FetchNotesResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "Notes": {
   "Total": "number (0)",
   "Note_Item_List": {
    "List": [
     "(empty array)"
    ],
    "EmptyListItem": {
     "Id": "numeric string",
     "Note": "string (EMPTY)",
     "DateCreatedUtc": "date (1900 default)",
     "DateEditedUtc": "date (1900 default)"
    }
   }
  }
 }
}
```

## DataActionFetchContactDetails
- Scope: this screen
- Path: `/UBTConnect/screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): `Local_isBookmarked`, `Local_BookmarkTypeId`, `Local_In_ActionsMenuOptions`, `isLoaded`, `Local_ShareType`, `ShowCallPopUp`, `ShowEmailPopUp`, `ShowSharePopup`, `ShowNotesSheet`, `isFetchContacts`, `ShowIconLabels`, `ShareSheet_OverwriteImageURL`, `NoteCategoryId`, `EntityNotes`, `FetchNoteId`, `IsEnabled`, `_isEnabledInDataFetchStatus`, `EntityType`, `_entityTypeInDataFetchStatus`, `EntityId`, `_entityIdInDataFetchStatus`, `ContactPopUp_OverrideOptions`, `_contactPopUp_OverrideOptionsInDataFetchStatus`, `EnableOptions`, `_enableOptionsInDataFetchStatus`, `useViewDetails`, `_useViewDetailsInDataFetchStatus`, `In_LocalityId`, `_in_LocalityIdInDataFetchStatus`
- Other request keys: (none)
- Response type: `FetchContactDetailsResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "ContactPopupData": {
   "ImageURL": "string (EMPTY)",
   "EntityTypeId": "string (EMPTY)",
   "EntityId": "numeric string",
   "IsAvatarImage": "boolean",
   "ActionName": "string (EMPTY)",
   "Name": "string (EMPTY)",
   "Locality": "string (EMPTY)",
   "TimezoneName": "string (EMPTY)",
   "TimezoneOffset": "number (0)",
   "ShowPopup": "boolean",
   "DisplayContactNumber": "string (EMPTY)",
   "IsFetchingTimezone": "boolean",
   "IsLoading": "boolean",
   "ShowTimezone": "boolean",
   "ShowImage": "boolean",
   "CountryName": "string (EMPTY)",
   "TitleTerminator": "string (EMPTY)"
  },
  "Phone": "string (EMPTY)",
  "MobilePhone": "string (EMPTY)",
  "HomePhone": "string (EMPTY)",
  "WorkPhone": "string (EMPTY)",
  "Email": "string (EMPTY)",
  "CountryName": "string",
  "LocalityId": "numeric string",
  "LocalityName": "string",
  "EntitySubtitle": "string (EMPTY)",
  "EntityName": "string"
 }
}
```

## DataActionGetSubdivision
- Scope: this screen
- Path: `/UBTConnect/screenservices/UBTConnect/Directory_SupperMeetings/SupperMeeting_DetailsBlock/DataActionGetSubdivision`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): `In_SubdivsionId`, `_in_SubdivsionIdInDataFetchStatus`
- Other request keys: (none)
- Response type: `GetSubdivisionResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "Subdivision": {
   "Subdivision_Card": {
    "SubdivisionId": "numeric string",
    "Subdivision_Card_Content": {
     "Name": "string",
     "BretherenCount": "number",
     "HouseholdCount": "number",
     "BrothersCount": "number",
     "SistersCount": "number",
     "Address": "string"
    }
   },
   "Subdivision_Actions": {
    "HasBookmark": "boolean",
    "HasUnbookmark": "boolean",
    "HasNotes": "boolean",
    "HasGift": "boolean",
    "HasShare": "boolean",
    "HasCall": "boolean",
    "HasEmail": "boolean",
    "HasViewDetails": "boolean"
   }
  }
 }
}
```

## ActionGetSignedImagesInBulk
- Scope: this screen
- Path: `/UBTConnect/screenservices/UBTConnect_Utils/ActionGetSignedImagesInBulk`
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
    "(empty array)"
   ],
   "EmptyListItem": {
    "Id": "numeric string",
    "Type": "string (EMPTY)",
    "Size": "string (EMPTY)",
    "SignedURL": "string (EMPTY)",
    "Error": "string (EMPTY)"
   }
  }
 }
}
```

## Other requests during capture (no bodies)
| request | count |
|---|---|
| `fetch /UBTConnect/Locality_Details` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Caroussel.EntitiesCarousel_Element.mvc.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Interaction.Carousel.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Caroussel.CarouselTag.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Caroussel.EntitiesCarousel_OneSchoolGlobal.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails.mvc.js` | 1 |
| `xmlhttprequest https://australiaeast-0.in.applicationinsights.azure.com/v2/track` | 3 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.TagContent.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect_CommunityBusiness_CS.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Household_Blocks.Household_GalleryCard.mvc.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Adaptive.Gallery.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.ExpandableSection.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common_Blocks.External_Link.mvc.js` | 1 |
| `link /UBTConnect/css/UBTConnect.Directory_Caroussel.EntitiesCarousel.css` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Splide.js` | 1 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1210/42438/131995_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1210/42448/125259_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1210/42453/118993_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1210/42455/118629_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1210/42484/126827_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1210/42491/120457_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1209/42492/113064_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1210/42493/126742_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1210/42498/131806_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1210/42525/134052_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1210/42506/132788_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1209/42468/126705_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1209/42475/124281_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1209/42480/93905_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1209/42391/120713_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1209/42512/130780_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1209/42518/124740_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1209/42520/133971_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/2533/42445/126704_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/2533/42447/128160_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1209/42456/120548_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1209/42478/124712_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/2533/42523/126826_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1209/hall_1433_720.jpg` | 2 |
| `xmlhttprequest /UBTConnect/moduleservices/moduleversioninfo` | 1 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1210/hall_726_720.jpg` | 2 |
| `fetch /UBTConnect/SupperMeeting_Carousel` | 2 |
| `fetch /UBTConnect/moduleservices/moduleinfo` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.CustomText.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.IconInline_Internal.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Interaction.Carousel.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_Caroussel.EntitiesCarousel_Element.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.LazyImage.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_Caroussel.CarouselTag.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.TagContent.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Adaptive.Columns2.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.IconText.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.ImageCard__Content__Tag.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.AddressPopup.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.Layouts.SubLayout_Section.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js` | 1 |
| `fetch /UBTConnect/status/network-ping.txt` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.CircleButton.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Adaptive.Gallery.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_Household_Blocks.Household_GalleryCard.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator.mvc.js` | 1 |
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
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_Notes.NotesSheet.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_Share.ShareSheet.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.controller.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.model.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.languageResources.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.controller.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.model.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.languageResources.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.controller.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.model.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.languageResources.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.controller.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.model.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.languageResources.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.controller.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.model.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.languageResources.js` | 1 |
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
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.controller.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.model.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.languageResources.js` | 1 |
| `fetch /UBTConnect/css/_Basic.css` | 1 |
| `fetch /UBTConnect/css/OutSystemsReactWidgets.css` | 1 |
| `fetch /UBTConnect/css/UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes.css` | 1 |
| `fetch /UBTConnect/css/UBTConnectLibrary.ConnectPatterns.Note_Item.css` | 1 |
| `fetch /UBTConnect/css/UBTConnect_Utils.CW_Notes.NotesSheet.css` | 1 |
| `fetch /UBTConnect/css/UBTConnect.Directory_Caroussel.EntitiesCarousel.css` | 1 |
| `fetch /UBTConnect/css/UBT_AppManager.PIN.PinCode.css` | 1 |
| `fetch /UBTConnect/css/UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.css` | 1 |
| `fetch /UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.css` | 1 |
| `fetch /UBTConnect/css/UBTConnectLibrary.UBTConnectBase.css` | 1 |
| `fetch /UBTConnect/css/UBTConnectLibrary.UBTConnectLibrary.css` | 1 |
| `fetch /UBTConnect/css/Connect2_LegacyShared.UBTConnect.css` | 1 |
| `fetch /UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.extra.css` | 1 |
| `fetch /UBTConnect/fonts/fontawesome-webfont.woff2` | 1 |
| `img /UBTConnect/SupperMeeting_Carousel` | 1 |
| `fetch /UBTConnect/fonts/fontawesome-webfont.woff` | 1 |
| `fetch /UBTConnect/Inter-VariableFont_opsz,wght.ttf` | 1 |
| `fetch /UBTConnect/Inter-Italic-VariableFont_opsz,wght.ttf` | 1 |
| `fetch /UBTConnect/fonts/connect-icon.ttf` | 1 |
| `fetch /UBTConnect/fonts/connect-icon.woff` | 1 |
