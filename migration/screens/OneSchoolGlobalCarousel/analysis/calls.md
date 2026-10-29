# Service calls captured on OneSchoolGlobalCarousel

| # | t (ms) | call | status | scope | path |
|---|---|---|---|---|---|
| 1 | 3131 | `DataActionFetchContactDetails` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails` |
| 2 | 3133 | `DataActionFetchNotes` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchNotes` |
| 3 | 3143 | `DataActionGetOneSchoolGlobalDetails` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_OneSchoolGlobal/OneSchoolGlobalDetails_Block/DataActionGetOneSchoolGlobalDetails` |
| 4 | 3143 | `DataActionFetchContactDetails` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails` |
| 5 | 3452 | `DataActionFetchContactDetails` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails` |

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
   "EntityTypeId": "string",
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
   "TitleTerminator": "string"
  },
  "Phone": "string (EMPTY)",
  "MobilePhone": "string (EMPTY)",
  "HomePhone": "string (EMPTY)",
  "WorkPhone": "string (EMPTY)",
  "Email": "string (EMPTY)",
  "CountryName": "string (EMPTY)",
  "LocalityId": "numeric string",
  "LocalityName": "string (EMPTY)",
  "EntitySubtitle": "string (EMPTY)",
  "EntityName": "string (EMPTY)"
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

## DataActionGetOneSchoolGlobalDetails
- Scope: this screen
- Path: `/UBTConnect/screenservices/UBTConnect/Directory_OneSchoolGlobal/OneSchoolGlobalDetails_Block/DataActionGetOneSchoolGlobalDetails`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): `LookupSections`, `Selected_OneschoolGlobal_SubsectionId`, `Type_OneschoolGlobal_SubsectionId`, `LocalIsBookmarked`, `In_OneSchoolGlobalId`, `_in_OneSchoolGlobalIdInDataFetchStatus`, `IsRestoredFromCache`, `_isRestoredFromCacheInDataFetchStatus`
- Other request keys: (none)
- Response type: `GetOneSchoolGlobalDetailsResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "Out_OneSchoolGlobal": {
   "OneSchoolGlobal_About": "string (EMPTY)",
   "OneSchoolGlobal_LocalitiesList": {
    "List": [
     "(empty array)"
    ],
    "EmptyListItem": {
     "LocalityName": "string (EMPTY)",
     "LocalityId": "numeric string"
    }
   },
   "OneSchoolGlobal_DetailCard": {
    "CommunityBusinessId": "numeric string",
    "SignedURL": "string (EMPTY)",
    "UI_OneSchool_Card_Content": {
     "Name": "string (EMPTY)",
     "LocalityName": "string (EMPTY)",
     "LocalityId": "numeric string",
     "CountryName": "string (EMPTY)",
     "CountryCode": "string (EMPTY)",
     "Phone": "string (EMPTY)",
     "Email": "string (EMPTY)"
    },
    "OneSchoolGlobal__DetailCard_Content": {
     "Address": "string (EMPTY)",
     "AreasServed": "string (EMPTY)",
     "BusinesLinks": {
      "List": [
       "(empty array)"
      ],
      "EmptyListItem": {
       "Text": "string (EMPTY)",
       "Link": "string (EMPTY)",
       "ID": "numeric string"
      }
     }
    }
   }
  },
  "HouseholdCoordinates": {
   "Longitude": "decimal string",
   "Latitude": "decimal string",
   "UseCoordinates": "boolean"
  },
  "UI_Timezone": {
   "TimezoneName": "string (EMPTY)",
   "TimezoneOffset": "numeric string"
  }
 }
}
```

## Other requests during capture (no bodies)
| request | count |
|---|---|
| `fetch /UBTConnect/Bookmarks` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_OneSchoolGlobal.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalCarousel.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Caroussel.EntitiesCarousel_Element.mvc.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Interaction.Carousel.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Caroussel.CarouselTag.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Caroussel.EntitiesCarousel_OneSchoolGlobal.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.TagContent.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect_Household_CS.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect_Subdivision_CS.model.js` | 1 |
| `script /UBTConnect/scripts/Connect_Household_CS.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_Sharing_CS.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect_CommunityBusiness_CS.model.js` | 1 |
| `script /UBTConnect/scripts/Connect_Geography_CS.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.ComingSoon.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.SeeMoreSection.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectCorePatterns.KebabButtonMenu.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Share.ShareSheet.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect_Subdivision_CS.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.Layouts.SubLayout_Section.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectCorePatterns.Member_ListItem.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_AppLauncherPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/Connect_CommunityBusiness_CS.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_AppLauncherPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.AddressPopup.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect_Search_CS.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Share.ShareSheet_SectionTitle.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Share.ShareSheet_Section.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Search.SearchResult_Item.mvc.js` | 1 |
| `script /UBTConnect/scripts/SocialSharingPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Household_Blocks.Household_GalleryCard.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.ImageCard__Content__Tag.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText.mvc.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Adaptive.Gallery.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc.js` | 1 |
| `script /UBTConnect/scripts/SocialSharingPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/SocialSharingPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common_Blocks.External_Link.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.ExpandableSection.mvc.js` | 1 |
| `link /UBTConnect/css/UBTConnect.Directory_Caroussel.EntitiesCarousel.css` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Splide.js` | 1 |
| `xmlhttprequest https://australiaeast-0.in.applicationinsights.azure.com/v2/track` | 3 |
| `xmlhttprequest /UBTConnect/moduleservices/moduleversioninfo` | 1 |
| `fetch /UBTConnect/OneSchoolGlobalCarousel` | 2 |
| `fetch /UBTConnect/moduleservices/moduleinfo` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalCarousel.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.CustomText.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.IconInline_Internal.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Interaction.Carousel.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_Caroussel.EntitiesCarousel_Element.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_Caroussel.EntitiesCarousel_OneSchoolGlobal.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.LazyImage.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.AddressPopup.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.CircleButton.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.ExpandableSection.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Adaptive.Columns2.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.IconText.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.ComingSoon.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_Common.BottomBarMenu.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_Common.BottomBarContent.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Navigation.BottomBarItem.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_Common_Blocks.App_IconBadge.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc.js` | 1 |
| `fetch /UBTConnect/status/network-ping.txt` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc.js` | 1 |
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
| `img /UBTConnect/OneSchoolGlobalCarousel` | 1 |
| `fetch /UBTConnect/fonts/fontawesome-webfont.woff` | 1 |
| `fetch /UBTConnect/Inter-VariableFont_opsz,wght.ttf` | 1 |
| `fetch /UBTConnect/Inter-Italic-VariableFont_opsz,wght.ttf` | 1 |
| `fetch /UBTConnect/fonts/connect-icon.ttf` | 1 |
| `fetch /UBTConnect/fonts/connect-icon.woff` | 1 |
