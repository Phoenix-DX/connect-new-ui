# Service calls captured on AssembleDetail

| # | t (ms) | call | status | scope | path |
|---|---|---|---|---|---|
| 1 | 2731 | `DataActionGetAssembleNotes` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Legacy_AssembleFlow/AssembleDetail/DataActionGetAssembleNotes` |
| 2 | 4005 | `DataActionGetAssembleEvent` | 200 | this screen | `/UBTConnect/screenservices/Connect2_Assemble_MUI/Assemble/AssembleEventDetail/DataActionGetAssembleEvent` |
| 3 | 4490 | `ActionGetMemberContactByCacheKey` | 200 | this screen | `/UBTConnect/screenservices/Connect2_LegacyShared/ActionGetMemberContactByCacheKey` |
| 4 | 4809 | `ActionGetSignedPhotosInBulk` | 200 | this screen | `/UBTConnect/screenservices/Connect2_LegacyShared/ActionGetSignedPhotosInBulk` |

## DataActionGetAssembleNotes
- Scope: this screen
- Path: `/UBTConnect/screenservices/UBTConnect/Legacy_AssembleFlow/AssembleDetail/DataActionGetAssembleNotes`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): `IsEventNotFound`, `IsShareOpen`, `ShareableObjectId`, `IsAddNote`, `EventId`, `_eventIdInDataFetchStatus`, `SeriesId`, `_seriesIdInDataFetchStatus`, `Start`, `_startInDataFetchStatus`, `AssembleEventTypeTile`, `_assembleEventTypeTileInDataFetchStatus`
- Other request keys: (none)
- Response type: `GetAssembleNotesResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "Out_Notes": {
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

## DataActionGetAssembleEvent
- Scope: this screen
- Path: `/UBTConnect/screenservices/Connect2_Assemble_MUI/Assemble/AssembleEventDetail/DataActionGetAssembleEvent`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): `IsDataFetched`, `DeviceTimezone`, `EventId`, `_eventIdInDataFetchStatus`, `SeriesId`, `_seriesIdInDataFetchStatus`, `Start`, `_startInDataFetchStatus`
- Other request keys: (none)
- Response type: `GetAssembleEventResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "AssembleEvent": {
   "AssembleEventSummary": {
    "EventId": "string",
    "SeriesId": "string",
    "DateTime": "datetime string",
    "HostingSubdivisionId": "numeric string",
    "HostingLocation": "string",
    "HostingSubdivisionFormattedAddress": "string",
    "HostingSubdivisionUseCoordinates": "boolean",
    "HostingSubdivisionLatitude": "decimal string",
    "HostingSubdivisionLongitude": "decimal string",
    "HostingSubdivisionHallPhotoSignedURL": "string",
    "AssembleEventType": {
     "Id": "string",
     "Title": "string"
    },
    "RecurrenceTypeId": "string",
    "RecurrenceTypeLabel": "string",
    "IsCustomRecurrence": "boolean",
    "RecurrencyFirstDate": "date (1900 default)",
    "IsAllDay": "boolean",
    "BrothersCount": "numeric string",
    "SistersCount": "numeric string",
    "IsVirtual": "boolean",
    "Notes": "string",
    "LocalityName": "string",
    "CountryName": "string",
    "VirtualMeetingTypeLabel": "string (EMPTY)",
    "VirtualMeetingLink": "string (EMPTY)",
    "VirtualMeetingId": "string (EMPTY)",
    "VirtualMeetingPassword": "string (EMPTY)",
    "IsPBCC": "boolean",
    "IsUnavailable": "boolean"
   },
   "AssembleAttendeeSubdivisionList": {
    "List": [
     {
      "LocalityId": "numeric string",
      "LocalityName": "string",
      "AssembleAttendeeSubdivisionList": {
       "List": [
        {
         "Id": "numeric string",
         "Name": "string",
         "HouseholdCount": "numeric string",
         "LocalityId": "numeric string",
         "SubdivisionHouseholdList": {
          "List": [
           "(empty array)"
          ],
          "EmptyListItem": {
           "Id": "numeric string",
           "Name": "string (EMPTY)",
           "FamilyNames": "string (EMPTY)",
           "Location": "string (EMPTY)",
           "IsDisabled": "boolean",
           "IsBookmarked": "boolean",
           "AvatarURL": {
            "Bucket": "string (EMPTY)",
            "Path": "string (EMPTY)",
            "Type": "string (EMPTY)",
            "CropX": "numeric string",
            "CropY": "numeric string",
            "CropW": "numeric string",
            "CropH": "numeric string",
            "SignedURL": "string (EMPTY)"
           }
          }
         }
        }
       ]
      }
     }
    ]
   },
   "AssembleSpecialAttendeeSubdivisionList": {
    "List": [
     {
      "LocalityId": "numeric string",
      "LocalityName": "string",
      "AssembleAttendeeSubdivisionList": {
       "List": [
        {
         "Id": "numeric string",
         "Name": "string",
         "HouseholdCount": "numeric string",
         "LocalityId": "numeric string",
         "SubdivisionHouseholdList": {
          "List": [
           "(empty array)"
          ],
          "EmptyListItem": {
           "Id": "numeric string",
           "Name": "string (EMPTY)",
           "FamilyNames": "string (EMPTY)",
           "Location": "string (EMPTY)",
           "IsDisabled": "boolean",
           "IsBookmarked": "boolean",
           "AvatarURL": {
            "Bucket": "string (EMPTY)",
            "Path": "string (EMPTY)",
            "Type": "string (EMPTY)",
            "CropX": "numeric string",
            "CropY": "numeric string",
            "CropW": "numeric string",
            "CropH": "numeric string",
            "SignedURL": "string (EMPTY)"
           }
          }
         }
        }
       ]
      }
     }
    ]
   },
   "AssembleAttendeeSpecialGuestList": {
    "List": [
     "(empty array)"
    ],
    "EmptyListItem": {
     "Id": "numeric string",
     "Name": "string (EMPTY)",
     "FamilyNames": "string (EMPTY)",
     "Location": "string (EMPTY)",
     "IsDisabled": "boolean",
     "IsBookmarked": "boolean",
     "AvatarURL": {
      "Bucket": "string (EMPTY)",
      "Path": "string (EMPTY)",
      "Type": "string (EMPTY)",
      "CropX": "numeric string",
      "CropY": "numeric string",
      "CropW": "numeric string",
      "CropH": "numeric string",
      "SignedURL": "string (EMPTY)"
     }
    }
   },
   "GSMContactList": {
    "List": [
     "number"
    ],
    "EmptyListItem": "number (0)"
   }
  },
  "IsNotFound": "boolean"
 }
}
```

## ActionGetMemberContactByCacheKey
- Scope: this screen
- Path: `/UBTConnect/screenservices/Connect2_LegacyShared/ActionGetMemberContactByCacheKey`
- Server action input parameters: `CacheKey`
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): (none)
- Other request keys: (none)
- Response type: `GetMemberContactByCacheKeyResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "MemberContactList": {
   "List": [
    {
     "MobilePhoneNumber": "string",
     "HomePhoneNumber": "string",
     "WorkPhoneNumber": "string (EMPTY)",
     "Email": "string",
     "CountryCode": "string",
     "LocalityId": "numeric string",
     "HouseholdId": "numeric string",
     "Timezone": {
      "TimezoneLabel": "string",
      "OffsetSeconds": "numeric string"
     },
     "ContactDetails": {
      "Id": "numeric string",
      "Name": "string",
      "Location": "string",
      "IsDisabled": "boolean",
      "IsBookmarked": "boolean",
      "AvatarURL": {
       "Bucket": "string",
       "Path": "string",
       "Type": "string",
       "CropX": "numeric string",
       "CropY": "numeric string",
       "CropW": "numeric string",
       "CropH": "numeric string",
       "SignedURL": "string (EMPTY)"
      }
     },
     "LocalityName": "string",
     "CountryName": "string"
    }
   ]
  }
 }
}
```

## ActionGetSignedPhotosInBulk
- Scope: this screen
- Path: `/UBTConnect/screenservices/Connect2_LegacyShared/ActionGetSignedPhotosInBulk`
- Server action input parameters: `Parameters`
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): (none)
- Other request keys: (none)
- Response type: `GetSignedPhotosInBulkResponse` (see types.ts)
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
     "Bucket": "string",
     "Path": "string",
     "Type": "string",
     "SignedURL": "string",
     "Error": "string (EMPTY)"
    }
   ]
  }
 }
}
```

## Other requests during capture (no bodies)
| request | count |
|---|---|
| `fetch /UBTConnect/AssembleEvents` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Legacy_AssembleFlow.AssembleDetail.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Notes.NotesSheet.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Notes.NoteListActions.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectCorePatterns.ItemCard_ActionBar.mvc.js` | 1 |
| `script /UBTConnect/scripts/SocialSharingPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Share.ShareSheet.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect_Notes_CS.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.AddNote.mvc.js` | 1 |
| `script /UBTConnect/scripts/NavigationHandler.ScrollAnchors.FocusScrollAnchorOnBack.mvc.js` | 1 |
| `script /UBTConnect/scripts/SocialSharingPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/Connect2_Assemble_MUI.Assemble.AssembleEventDetail.mvc.js` | 1 |
| `script /UBTConnect/scripts/SocialSharingPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Note_Item_List.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect_Search_CS.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.EmptyList.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Share.ShareSheet_Section.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Share.ShareSheet_SectionTitle.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Search.SearchResult_Item.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Section.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.CircleButton.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_Assemble_MUI.Assemble.AssembleEventDetail_ContactList.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_Assemble_MUI.Assemble.AssembleEventDetail__Error.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_Assemble_CS.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Popup.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivisionList_Skelet.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitiesList.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.NewConnect_Skeleton.NC_Result_Item__Image__Skeleton.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Note_Item.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.TagContent.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.LazyImage.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Contact.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitySubdivisionList.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_Sharing_CS.model.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Tag.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.Share.ContextMenu.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect_Bookmarks_CS.model.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.MyBookmarks.BookmarkNoteAddEdit.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.Utility.ItemOptionsMenu.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.Widgets.PopupMenu.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.TextEllipsis.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.InputCounter.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.Reusable.InputCounter.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.ContextMenu_Item.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.PopupMenu.mvc.js` | 1 |
| `link /UBTConnect/css/UBTConnect_Utils.CW_Notes.NotesSheet.css` | 1 |
| `link /UBTConnect/css/UBTConnectLibrary.ConnectPatterns.Note_Item.css` | 1 |
| `link /UBTConnect/css/UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes.css` | 1 |
| `xmlhttprequest https://australiaeast-0.in.applicationinsights.azure.com/v2/track` | 2 |
| `img https://cbcdn.ubtconnect.com/1/uk/123/602/hall_212_720.jpg` | 2 |
| `img /UBTConnect/img/Connect2_LegacyShared.User_rectangle.png` | 1 |
| `xmlhttprequest /UBTConnect/moduleservices/moduleversioninfo` | 1 |
| `img https://cbcdn.ubtconnect.com/8/uk/123/601/15071/122976_f_15072.jpg` | 2 |
| `fetch /UBTConnect/AssembleDetail` | 1 |
| `fetch /UBTConnect/moduleservices/moduleinfo` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Legacy_AssembleFlow.AssembleDetail.mvc.js` | 1 |
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
| `fetch /UBTConnect/status/network-ping.txt` | 2 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.Utility.HandleImageLoadError.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.NavigationHandler.BackNavigationHandler.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.Layout.Layout.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.Reusable.NewConnectContent.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_Assemble_MUI.Assemble.AssembleEventDetail.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_Assemble_MUI.Assemble.AssembleSummaryCard.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Card.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.NewConnect_Utilities.NC_Card_Item_Visual.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_Assemble_MUI.Assemble.AssembleSummaryCard__Header.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_Assemble_MUI.Assemble.AssembleSummary_Card_Row.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_Notes.NoteListActions.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Note_Item_List.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.CustomText.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.IconInline_Internal.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Popup.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectCorePatterns.ItemCard_ActionBar.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.IconText.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Adaptive.Columns2.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Section.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitiesList.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitySubdivisionList.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item_Badge.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_Assemble_MUI.Assemble.AssembleEventDetail_ContactList.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Contact.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.ScrollAnchors.FocusScrollAnchorOnBack.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_Common.BottomBarMenu.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_Common.BottomBarContent.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Navigation.BottomBarItem.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_Common_Blocks.App_IconBadge.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_Share.ShareSheet.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_Notes.NotesSheet.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.controller.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.model.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.languageResources.js` | 1 |
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
| `fetch /UBTConnect/scripts/NavigationHandler.controller.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.model.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.languageResources.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_AndroidAppLinksPlugin.controller.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_AndroidAppLinksPlugin.model.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_AndroidAppLinksPlugin.languageResources.js` | 1 |
| `fetch /UBTConnect/scripts/EventfulDeeplinksPlugin.controller.js` | 1 |
| `fetch /UBTConnect/scripts/EventfulDeeplinksPlugin.model.js` | 1 |
| `fetch /UBTConnect/scripts/EventfulDeeplinksPlugin.languageResources.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.controller.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.model.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.languageResources.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_Assemble_MUI.controller.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_Assemble_MUI.model.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_Assemble_MUI.languageResources.js` | 1 |
| `fetch /UBTConnect/css/_Basic.css` | 1 |
| `fetch /UBTConnect/css/OutSystemsReactWidgets.css` | 1 |
| `fetch /UBTConnect/css/UBT_AppManager.PIN.PinCode.css` | 1 |
| `fetch /UBTConnect/css/UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.css` | 1 |
| `fetch /UBTConnect/css/UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes.css` | 1 |
| `fetch /UBTConnect/css/UBTConnectLibrary.ConnectPatterns.Note_Item.css` | 1 |
| `fetch /UBTConnect/css/UBTConnect_Utils.CW_Notes.NotesSheet.css` | 1 |
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
