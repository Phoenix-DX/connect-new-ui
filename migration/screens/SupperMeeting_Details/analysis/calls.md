# Service calls captured on SupperMeeting_Details

| # | t (ms) | call | status | scope | path |
|---|---|---|---|---|---|
| 1 | 2683 | `ActionAppManager_SynchAppContext` | 200 | this screen | `/UBTConnect/screenservices/UBT_AppManager/ActionAppManager_SynchAppContext` |
| 2 | 3999 | `DataActionGetSubdivisionHouseholds` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_SupperMeetings/SupperMeeting_HouseholdList/DataActionGetSubdivisionHouseholds` |
| 3 | 4066 | `DataActionFetchContactDetails` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails` |
| 4 | 4304 | `ActionGetSignedImagesInBulk` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect_Utils/ActionGetSignedImagesInBulk` |
| 5 | 5020 | `DataActionGetSubdivision` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_SupperMeetings/SupperMeeting_DetailsBlock/DataActionGetSubdivision` |
| 6 | 5273 | `DataActionFetchContactDetails` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails` |
| 7 | 5277 | `ActionAppManager_AfterInitialize` | 200 | this screen | `/UBTConnect/screenservices/UBT_AppManager/ActionAppManager_AfterInitialize` |
| 8 | 5331 | `ActionGetSignedImagesInBulk` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect_Utils/ActionGetSignedImagesInBulk` |
| 9 | 5367 | `DataActionFetchContactDetails` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails` |
| 10 | 5831 | `ActionSync_Info_GetMain` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/ActionSync_Info_GetMain` |
| 11 | 6159 | `ActionGetUserInformation` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect_Utils/ActionGetUserInformation` |
| 12 | 6427 | `ActionGetNumberUnreadMessages` | 200 | this screen | `/UBTConnect/screenservices/Connect2_LegacyShared/ActionGetNumberUnreadMessages` |
| 13 | 7339 | `ServiceAPIFetchData_CacheableHouseholds` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/ServiceAPIFetchData_CacheableHouseholds` |
| 14 | 7421 | `ServiceAPIFetchData_CacheableMapEntities` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/ServiceAPIFetchData_CacheableMapEntities` |

## ActionAppManager_SynchAppContext
- Scope: this screen
- Path: `/UBTConnect/screenservices/UBT_AppManager/ActionAppManager_SynchAppContext`
- Server action input parameters: `EspaceName`
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): (none)
- Other request keys: (none)
- Response type: `AppManager_SynchAppContextResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "AppManager_ClientConfig": {
   "AppManager_ClientCache": {
    "BaseURL": "string",
    "Environment": "string",
    "IdpProviderId": "number",
    "AzureB2C_Policy_Login": "string",
    "AzureB2C_Policy_ResetPass": "string",
    "AzureB2C_ClientId": "string",
    "FrontEgg_AppId": "string (EMPTY)",
    "FrontEgg_CodeVerifier": "string (EMPTY)",
    "FrontEgg_CodeChallenge": "string (EMPTY)",
    "Firebase_ProjectId": "string",
    "Firebase_RealTimeDatabase_Use": "boolean",
    "AzureInsights_Use": "boolean",
    "PIN_Use": "boolean",
    "PIN_SessionInactivity_Use": "boolean",
    "PIN_SessionInactivity_Seconds": "number",
    "PIN_SessionInactivity_Navigate": "boolean",
    "PIN_EnableFingerprint": "boolean",
    "PIN_EnforceOnReady": "boolean",
    "CustomCallback": "string (EMPTY)",
    "MinWebViewVersion_Chrome": "string (EMPTY)",
    "MinWebViewVersion_Safari": "string (EMPTY)",
    "MinNativeAppVersion": "string (EMPTY)",
    "PackageName": "string",
    "AndroidAppId": "string",
    "EnableFrameworkExtension": "boolean",
    "PluginUse_PrivacyScreen": "boolean",
    "Streamline_TOTP_LoginCheck": "boolean"
   },
   "EspaceName": "string",
   "CurrentUTCTime": "datetime string",
   "Firebase_RealTimeDatabase_URL": "string",
   "Firebase_RealTimeDatabase_APIKey": "string",
   "Firebase_CloudMessage_Use": "boolean",
   "AzureInsights_ConnectionString": "string",
   "DeviceAwareness_Use": "boolean",
   "Streamline_Use": "boolean",
   "CheckDeviceOnReady": "boolean"
  },
  "isSuccess": "boolean",
  "PermissionList": {
   "List": {
    "List": [
     "string"
    ]
   }
  },
  "FirebaseRealTimeDB_Token": "string"
 }
}
```

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

## DataActionFetchContactDetails
- Scope: this screen
- Path: `/UBTConnect/screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): `Local_isBookmarked`, `Local_isBookmarked_C2`, `Local_BookmarkType`, `Local_BookmarkTypeId_C2`, `Local_BookmarkGroup`, `Local_In_ActionsMenuOptions`, `isLoaded`, `Local_ShareType`, `ShowCallPopUp`, `ShowEmailPopUp`, `ShowSharePopup`, `ShowNotesSheet`, `isFetchContacts`, `ShowIconLabels`, `ShareSheet_OverwriteImageURL`, `NoteCategoryId`, `IsEnabled`, `_isEnabledInDataFetchStatus`, `EntityType`, `_entityTypeInDataFetchStatus`, `EntityId`, `_entityIdInDataFetchStatus`, `ContactPopUp_OverrideOptions`, `_contactPopUp_OverrideOptionsInDataFetchStatus`, `EnableOptions`, `_enableOptionsInDataFetchStatus`, `useViewDetails`, `_useViewDetailsInDataFetchStatus`, `EntityExtraDataJSON`, `_entityExtraDataJSONInDataFetchStatus`
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

## ActionAppManager_AfterInitialize
- Scope: this screen
- Path: `/UBTConnect/screenservices/UBT_AppManager/ActionAppManager_AfterInitialize`
- Server action input parameters: `EspaceName`, `AppManager_MobileContext`, `TOTP`
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): (none)
- Other request keys: (none)
- Response type: `AppManager_AfterInitializeResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "isNotRegistered": "boolean"
 }
}
```

## ActionSync_Info_GetMain
- Scope: this screen
- Path: `/UBTConnect/screenservices/UBTConnect/ActionSync_Info_GetMain`
- Server action input parameters: `isFromLogin`
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): (none)
- Other request keys: (none)
- Response type: `Sync_Info_GetMainResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "OrbitStaticEntities": {
   "OrbitEventTypes": {
    "List": [
     {
      "Id": "string",
      "Is_Active": "boolean",
      "Type": "string",
      "Name": "string",
      "MainColorVar": "string",
      "MainIcon": "string"
     }
    ]
   },
   "OrbitMilestoneTypes": {
    "List": [
     {
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
     }
    ]
   },
   "HostSurveyStep": {
    "List": [
     {
      "Id": "number",
      "HeaderLabel": "string (EMPTY)",
      "AddLabel": "string (EMPTY)",
      "Order": "number",
      "IsDataStep": "boolean"
     }
    ]
   },
   "OrbitBedSize": {
    "List": [
     {
      "Id": "numeric string",
      "Label": "string",
      "Order": "number",
      "JSON_Name": "string"
     }
    ]
   },
   "OrbitGenderPreference": {
    "List": [
     {
      "Id": "number",
      "Label": "string",
      "Order": "number",
      "Is_Active": "boolean",
      "JSON_Name": "string"
     }
    ]
   },
   "OrbitHouseFloor": {
    "List": [
     {
      "Id": "number",
      "Label": "string",
      "Order": "number",
      "JSON_Name": "string",
      "Is_Active": "boolean"
     }
    ]
   },
   "OrbitVehicleOwner": {
    "List": [
     {
      "Id": "numeric string",
      "Label": "string",
      "Order": "number",
      "JSON_Name": "string"
     }
    ]
   },
   "OrbitVehicleType": {
    "List": [
     {
      "Id": "numeric string",
      "Label": "string",
      "Order": "number",
      "JSON_Name": "string",
      "Is_Active": "boolean"
     }
    ]
   },
   "HelperStatus": {
    "List": [
     {
      "Id": "number",
      "Label": "string",
      "Order": "number",
      "Is_Active": "boolean",
      "JSON_Name": "string"
     }
    ]
   },
   "SurveyStatus": {
    "List": [
     {
      "Id": "number",
      "Label": "string",
      "Order": "number",
      "Is_Active": "boolean",
      "JSON_Name": "string"
     }
    ]
   },
   "MealType": {
    "List": [
     {
      "Id": "number",
      "Label": "string",
      "Order": "number",
      "Is_Active": "boolean",
      "JSON_Name": "string"
     }
    ]
   },
   "HelperRoles": {
    "List": [
     {
      "Id": "number",
      "Label": "string",
      "Order": "number",
      "Is_Active": "boolean",
      "JSON_Name": "string",
      "isReadOnly": "boolean"
     }
    ]
   }
  },
  "LocalEntities_App": {
   "LocalBookmark": {
    "List": [
     {
      "Id": "numeric string",
      "UserId": "number",
      "BookmarkId": "numeric string",
      "ObjectType": "string",
      "ObjectId": "numeric string",
      "Group": "string",
      "DateCreatedUtc": "datetime string",
      "Note": "string (EMPTY)"
     }
    ]
   },
   "LocalBookmarksC2": {
    "List": [
     "(empty array)"
    ],
    "EmptyListItem": {
     "Id": "numeric string",
     "UserId": "number (0)",
     "BookmarkId": "numeric string",
     "BookmarkCategoryId": "string (EMPTY)",
     "ItemId": "numeric string",
     "CreatedAtDateUtc": "date (1900 default)"
    }
   },
   "LocalNotes": {
    "List": [
     "(empty array)"
    ],
    "EmptyListItem": {
     "Id": "numeric string",
     "UserId": "number (0)",
     "NoteId": "numeric string",
     "NoteCategoryId": "string (EMPTY)",
     "ItemId": "string (EMPTY)",
     "DateCreatedUtc": "date (1900 default)",
     "DateEditedUtc": "date (1900 default)"
    }
   }
  },
  "Sync_SiteProperties": {
   "UpdatesFeed_MonthsToShow": "number"
  },
  "MyEntertainingBaseURL": "string",
  "FeedBaseURL": "string",
  "B2CTenant": "string"
 }
}
```

## ActionGetUserInformation
- Scope: this screen
- Path: `/UBTConnect/screenservices/UBTConnect_Utils/ActionGetUserInformation`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): (none)
- Other request keys: (none)
- Response type: `GetUserInformationResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "UserInformation": {
   "Directory_UserCurrent": {
    "Id": "string",
    "UserName": "string",
    "Email": "string",
    "AccountEmail": "string",
    "FirstName": "string",
    "LastName": "string",
    "FullName": "string",
    "MemberID": "numeric string",
    "AccountNumber": "string",
    "HomeNumber": "string",
    "MobileNumber": "string",
    "WorkNumber": "string (EMPTY)",
    "Directory_UserCurrent_Visibility": {
     "DisplayWorkPhone": "boolean",
     "DisplayMobilePhone": "boolean",
     "DisplayAge": "boolean"
    },
    "Directory_UserCurrent_Geography": {
     "Subdivision_Id": "numeric string",
     "Subdivision_Name": "string",
     "Locality_Id": "numeric string",
     "Locality_Name": "string",
     "Locality_SubdivisionCount": "numeric string",
     "Country_Code": "string",
     "Country_Name": "string",
     "Country_Email": "string",
     "Country_Phone": "string",
     "Country_LocalityCount": "numeric string"
    },
    "Directory_UserCurrent_Subscription": {
     "SubscriptionID": "string",
     "SubscriptionType": "string",
     "SubscriptionRegionId": "string",
     "SubscriptionRegion": "string",
     "SubscriptionManageLink": "string",
     "SubscriptionActive": "boolean",
     "SubscribedCountries": {
      "List": [
       {
        "Code": "string",
        "Name": "string",
        "RegionId": "numeric string"
       }
      ]
     }
    },
    "Directory_UserCurrent_Member": {
     "HouseholderId": "numeric string",
     "isHouseholder": "boolean",
     "SpouseId": "numeric string",
     "SpouseIsHouseholder": "boolean",
     "Photo": {
      "Bucket": "string",
      "Path": "string",
      "Type": "string",
      "SignedURL": "string"
     },
     "Address": {
      "AddressItemsList": {
       "List": [
        {
         "Label": "string",
         "Visible": "boolean",
         "Required": "boolean",
         "Value": "string (EMPTY)",
         "NumberRef": "number",
         "IsValid": "boolean"
        }
       ]
      },
      "FormattedAddress": "string",
      "Lat": "numeric string",
      "Long": "numeric string"
     }
    }
   },
   "HasPoliciesToAccept": "boolean"
  }
 }
}
```

## ActionGetNumberUnreadMessages
- Scope: this screen
- Path: `/UBTConnect/screenservices/Connect2_LegacyShared/ActionGetNumberUnreadMessages`
- Server action input parameters: `DeviceId`
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): (none)
- Other request keys: (none)
- Response type: `GetNumberUnreadMessagesResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "NumberPublicUnreadMessages": "numeric string",
  "NumberPrivateUnreadMessages": "numeric string"
 }
}
```

## ServiceAPIFetchData_CacheableHouseholds
- Scope: this screen
- Path: `/UBTConnect/screenservices/UBTConnect/ServiceAPIFetchData_CacheableHouseholds`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): (none)
- Other request keys: (none)
- Response type: `ServiceAPIFetchData_CacheableHouseholdsResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "Household_Markers": {
   "List": [
    {
     "MarkerWithWindow": {
      "Marker": {
       "Id": "numeric string",
       "Type": "string",
       "ExtraData": "string (EMPTY)",
       "Latlng": {
        "List": [
         "number"
        ],
        "EmptyListItem": "number (0)"
       },
       "Options": {
        "Icon": {
         "iconUrl": "string",
         "iconRetinaUrl": "string (EMPTY)",
         "iconSize": {
          "List": [
           "(empty array)"
          ],
          "EmptyListItem": "number (0)"
         },
         "iconAnchor": {
          "List": [
           "(empty array)"
          ],
          "EmptyListItem": "number (0)"
         },
         "popupAnchor": {
          "List": [
           "(empty array)"
          ],
          "EmptyListItem": "number (0)"
         },
         "tooltipAnchor": {
          "List": [
           "(empty array)"
          ],
          "EmptyListItem": "number (0)"
         },
         "shadowUrl": "string (EMPTY)",
         "shadowRetinaUrl": "string (EMPTY)",
         "shadowSize": {
          "List": [
           "(empty array)"
          ],
          "EmptyListItem": "number (0)"
         },
         "shadowAnchor": {
          "List": [
           "(empty array)"
          ],
          "EmptyListItem": "number (0)"
         },
         "className": "string (EMPTY)",
         "crossOrigin": "string (EMPTY)",
         "isTextIcon": "boolean"
        },
        "Draggable": "boolean",
        "Keyboard": "boolean",
        "Title": "string (EMPTY)",
        "Alt": "string (EMPTY)",
        "ZIndexOffset": "numeric string",
        "Opacity": "decimal string",
        "RiseOnHover": "boolean",
        "RiseOffset": "numeric string"
       }
      },
      "Tooltip": {
       "Content": "string",
       "Options": {
        "Pane": "string",
        "Offset": {
         "List": [
          "(empty array)"
         ],
         "EmptyListItem": "number (0)"
        },
        "Direction": "string",
        "Permanent": "boolean",
        "Sticky": "boolean",
        "Interactive": "boolean",
        "Opacity": "decimal string",
        "ClassName": "string"
       }
      },
      "Popup": {
       "Pane": "string",
       "MaxWidth": "numeric string",
       "MinWidth": "numeric string",
       "AutoPan": "boolean",
       "AutoPanPadding": {
        "X": "numeric string",
        "Y": "numeric string"
       },
       "KeepInView": "boolean",
       "CloseButton": "boolean",
       "AutoClose": "boolean",
       "CloseOnEscapeKey": "boolean",
       "ClassName": "string (EMPTY)",
       "Interactive": "boolean",
       "Content": "string (EMPTY)"
      }
     },
     "MapExploreItem": {
      "Name": "string",
      "Address": "string",
      "Latitude": "decimal string",
      "Longitude": "decimal string",
      "PhotoURL": "string (EMPTY)",
      "PhotoURL2": "string (EMPTY)",
      "Type": "string",
      "Id": "numeric string"
     }
    }
   ]
  }
 }
}
```

## ServiceAPIFetchData_CacheableMapEntities
- Scope: this screen
- Path: `/UBTConnect/screenservices/UBTConnect/ServiceAPIFetchData_CacheableMapEntities`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): (none)
- Other request keys: (none)
- Response type: `ServiceAPIFetchData_CacheableMapEntitiesResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {},
 "exception": {
  "name": "string",
  "specificType": "string",
  "message": "string"
 }
}
```

## Other requests during capture (no bodies)
| request | count |
|---|---|
| `script /UBTConnect/scripts/cordova.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsManifestLoader.js` | 1 |
| `link /UBTConnect/css/_Basic.css` | 1 |
| `script /UBTConnect/scripts/OutSystemsSettings.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.appDefinition.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.index.js` | 1 |
| `script /UBTConnect/scripts/Debugger.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsReactWidgets.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsReactView.js` | 1 |
| `script /UBTConnect/scripts/OutSystems.js` | 1 |
| `xmlhttprequest /UBTConnect/moduleservices/moduleversioninfo` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.entities.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.controller.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.entities.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Notes_MCS.entities.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.entities.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Bookmarks_MCS.entities.js` | 1 |
| `script /UBTConnect/scripts/AppInsightsConnector_Mobile.entities.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.SupperMeeting_Details.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.controller.js` | 1 |
| `script /UBTConnect/scripts/AppInsightsConnector_Mobile.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common.controller.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.clientVariables.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Notes_MCS.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.CustomText.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.languageResources.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Bookmarks_MCS.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc.js` | 1 |
| `script /UBTConnect/scripts/NavigationHandler.NavigationHandler.PreventBackNavigation.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.Utility.HandleImageLoadError.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common.OfflineDataSyncEvents.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.controller.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager.controller.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.model.js` | 1 |
| `script /UBTConnect/scripts/UBTJavaScriptUtils.controller.js` | 1 |
| `script /UBTConnect/scripts/NavigationHandler.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Policies.Policy_Checker.mvc.js` | 1 |
| `script /UBTConnect/scripts/NavigationHandler.NavigationHandler.BackNavigationHandler.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.model.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_PIN.Block_PINUnlock.mvc.js` | 1 |
| `script /UBTConnect/scripts/NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect_Subdivision_CS.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.HighlightSearch.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.IconInline_Internal.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager_Mobile.controller.js` | 1 |
| `script /UBTConnect/scripts/CommonPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/KeyboardPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/EventfulDeeplinksPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/Connect2_AndroidAppLinksPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/MemoryClientCache.model.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager_Mobile.model.js` | 1 |
| `script /UBTConnect/scripts/Connect_Map_CS.model.js` | 1 |
| `script /UBTConnect/scripts/Firebase.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Notes_MCS.controller.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LocalNotificationPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/Firebase.controller.js` | 1 |
| `script /UBTConnect/scripts/ScreenOrientationPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Bookmarks_MCS.controller.js` | 1 |
| `script /UBTConnect/scripts/Leaflet.model.js` | 1 |
| `script /UBTConnect/scripts/FirebaseCloudMessagingPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/MemoryClientCache.controller.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.model.js` | 1 |
| `script /UBTConnect/scripts/NavigationHandler.model.js` | 1 |
| `script /UBTConnect/scripts/Connect2_AndroidAppLinksPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.clientVariables.js` | 1 |
| `script /UBTConnect/scripts/NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc.js` | 1 |
| `script /UBTConnect/scripts/APIDomain_Directory_IS.model.js` | 1 |
| `script /UBTConnect/scripts/UBTJavaScriptUtils.model.js` | 1 |
| `script /UBTConnect/scripts/UBTJavaScriptUtils.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Notes.NotesSheet.mvc.js` | 1 |
| `script /UBTConnect/scripts/InAppBrowserPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/InAppBrowserPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager.clientVariables.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics.mvc.js` | 1 |
| `script /UBTConnect/scripts/EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.IconSVG.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc.js` | 1 |
| `script /UBTConnect/scripts/ApplicationInsightsConnector.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.LazyImage.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.Layouts.SubLayout_Section.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.clientVariables.js` | 1 |
| `script /UBTConnect/scripts/ApplicationInsightsConnector.controller.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/Connect2_Sharing_CS.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Share.ShareSheet.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_MyBookmarks_IS.model.js` | 1 |
| `script /UBTConnect/scripts/Connect_Household_CS.model.js` | 1 |
| `script /UBTConnect/scripts/Connect_Subdivision_CS.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager_Mobile.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc.js` | 1 |
| `script /UBTConnect/scripts/SocialSharingPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common.UnsupportedVersion_Wrapper.mvc.js` | 1 |
| `script /UBTConnect/scripts/KeyboardPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/Connect_Bookmarks_CS.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List.mvc.js` | 1 |
| `script /UBTConnect/scripts/AppVersionPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/CommonPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LocalNotificationPlugin.clientVariables.js` | 1 |
| `script /UBTConnect/scripts/Connect2_AndroidAppLinksPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/Connect_Map_CS.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/EventfulDeeplinksPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LocalNotificationPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/AppInsightsConnector_Mobile.controller.js` | 1 |
| `script /UBTConnect/scripts/EventfulDeeplinksPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/NetworkDetection.controller.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_BL.model.js` | 1 |
| `script /UBTConnect/scripts/ScreenOrientationPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/ScreenOrientationPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/TouchIdPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/KeyboardPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/FirebaseCrashlyticsPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/FirebaseCloudMessagingPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager_CS.model.js` | 1 |
| `script /UBTConnect/scripts/PrivacyScreenPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect_Notes_CS.model.js` | 1 |
| `script /UBTConnect/scripts/Connect2_AppLauncherPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.AddNote.mvc.js` | 1 |
| `script /UBTConnect/scripts/InAppBrowserPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Notes.NoteListActions.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.ImageCard__Content__Tag.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.IconText.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.Layouts.SVG_Background_LoginWrapper.mvc.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Utilities.InlineSVG.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect_Search_CS.model.js` | 1 |
| `script /UBTConnect/scripts/Connect2_AppLauncherPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Share.ShareSheet_Section.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common.UnsupportedVersion_Native.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Input.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Share.ShareSheet_SectionTitle.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.EmptyList.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Common.Button.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CacheControl.CacheControl_Policies.mvc.js` | 1 |
| `script /UBTConnect/scripts/ApplicationInsightsConnector.clientVariables.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Search.SearchResult_Item.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.AddressPopup.mvc.js` | 1 |
| `script /UBTConnect/scripts/ApplicationPolicies_CW.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common.UnsupportedVersion_WebView.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common.UnsupportedVersion_Browser.mvc.js` | 1 |
| `script /UBTConnect/scripts/SocialSharingPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Household_Blocks.Household_GalleryCard.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc.js` | 1 |
| `script /UBTConnect/scripts/SocialSharingPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Adaptive.Gallery.mvc.js` | 1 |
| `script /UBTConnect/scripts/AppVersionPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/AppVersionPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/AppInsightsConnector_Mobile.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/NetworkDetection.clientVariables.js` | 1 |
| `script /UBTConnect/scripts/NetworkDetection.model.js` | 1 |
| `script /UBTConnect/scripts/TouchIdPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/FirebaseCrashlyticsPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/FirebaseCloudMessagingPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/TouchIdPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/FirebaseCrashlyticsPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/PrivacyScreenPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Note_Item_List.mvc.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Adaptive.Columns2.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.Columns_Three.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common.UnsupportedVersion.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Button.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager.PIN.Pincode_Unlock.mvc.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Interaction.BottomSheet.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.mvc.js` | 1 |
| `script /UBTConnect/scripts/ApplicationPolicies_CW.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CacheControl.CacheControl.mvc.js` | 1 |
| `script /UBTConnect/scripts/ApplicationPolicies_CW.clientVariables.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.CircleButton.mvc.js` | 1 |
| `script /UBTConnect/scripts/ContentProviderPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.clientVariables.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.clientVariables.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Popup.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common.WelcomeToConnect.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Note_Item.mvc.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Adaptive.Columns3.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager.PIN.PinCode.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager.PIN.InactivityTimer.mvc.js` | 1 |
| `script /UBTConnect/scripts/ContentProviderPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.languageResources.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.languageResources.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.languageResources.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Interaction.InputWithIcon.mvc.js` | 1 |
| `script /UBTConnect/scripts/EventfulDeeplinksPlugin.languageResources.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.languageResources.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager_Mobile.languageResources.js` | 1 |
| `script /UBTConnect/scripts/Connect2_AndroidAppLinksPlugin.languageResources.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.TextEllipsis.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager.languageResources.js` | 1 |
| `script /UBTConnect/scripts/NavigationHandler.languageResources.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.InputCounter.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc.js` | 1 |
| `script /UBTConnect/scripts/Firebase.FirebaseApp.js` | 1 |
| `fetch /UBTConnect/status/network-ping.txt` | 2 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.ContextMenu_Item.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.PopupMenu.mvc.js` | 1 |
| `script /UBTConnect/scripts/Firebase.FirebaseAuth.js` | 1 |
| `link /UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.extra.css` | 1 |
| `link /UBTConnect/css/Connect2_LegacyShared.UBTConnect.css` | 1 |
| `link /UBTConnect/css/UBTConnectLibrary.ConnectPatterns.Note_Item.css` | 1 |
| `link /UBTConnect/css/UBTConnectLibrary.UBTConnectLibrary.css` | 1 |
| `link /UBTConnect/css/UBTConnectLibrary.UBTConnectBase.css` | 1 |
| `link /UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.css` | 1 |
| `link /UBTConnect/css/UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.css` | 1 |
| `link /UBTConnect/css/UBT_AppManager.PIN.PinCode.css` | 1 |
| `link /UBTConnect/css/UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes.css` | 1 |
| `link /UBTConnect/css/OutSystemsReactWidgets.css` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ScrollAnimations.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.OfflineDataSync.js` | 1 |
| `script /UBTConnect/scripts/CommonPlugin.PluginManager.js` | 1 |
| `script /UBTConnect/scripts/Firebase.FirebaseDatabase.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.OutSystemsUI.js` | 1 |
| `css /UBTConnect/fonts/connect-icon.ttf` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.MWO.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.aggregates.IDB.js` | 1 |
| `xmlhttprequest https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo` | 2 |
| `xmlhttprequest https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken` | 1 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1210/42453/118993_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1210/42438/131995_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1210/42498/131806_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1210/42493/126742_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1210/42455/118629_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1210/42491/120457_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1209/42492/113064_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1210/42525/134052_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1210/42484/126827_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1210/42448/125259_720.jpg` | 2 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1210/42506/132788_720.jpg` | 2 |
| `script /UBTConnect/scripts/ApplicationInsightsConnector.AppInsights_v3_4_nightly.js` | 1 |
| `fetch https://js.monitor.azure.com/scripts/b/ai.config.1.cfg.json` | 1 |
| `img https://cbcdn.ubtconnect.com/5/AR/252/1210/hall_726_720.jpg` | 2 |
| `fetch /UBTConnect/moduleservices/moduleinfo` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.SupperMeeting_Details.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.CustomText.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.IconInline_Internal.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.LazyImage.mvc.js` | 1 |
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
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.CircleButton.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CW_Notes.NotesSheet.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Adaptive.Gallery.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_Household_Blocks.Household_GalleryCard.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_Common.OfflineDataSyncEvents.mvc.js` | 1 |
| `xmlhttprequest https://australiaeast-0.in.applicationinsights.azure.com/v2/track` | 2 |
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
| `fetch /UBTConnect/scripts/UBTConnect_Utils.controller.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.model.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.languageResources.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.controller.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.model.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.languageResources.js` | 1 |
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
| `fetch /UBTConnect/css/UBT_AppManager.PIN.PinCode.css` | 1 |
| `fetch /UBTConnect/css/UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.css` | 1 |
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
| `fetch /UBTConnect/SupperMeeting_Details` | 1 |
