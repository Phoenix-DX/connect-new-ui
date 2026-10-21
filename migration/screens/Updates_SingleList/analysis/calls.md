# Service calls captured on Updates_SingleList

| # | t (ms) | call | status | scope | path |
|---|---|---|---|---|---|
| 1 | 3450 | `ActionAppManager_SynchAppContext` | 200 | this screen | `/UBTConnect/screenservices/UBT_AppManager/ActionAppManager_SynchAppContext` |
| 2 | 4525 | `DataActionGetDateRanges` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_Updates/Updates_SingleList/DataActionGetDateRanges` |
| 3 | 4596 | `DataActionGetCacheInfo` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect_Utils/CacheControl/CacheControl_UserInfo/DataActionGetCacheInfo` |
| 4 | 4605 | `DataActionGetCacheInfo` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect_Utils/CacheControl/CacheControl_AllCountries/DataActionGetCacheInfo` |
| 5 | 4636 | `DataActionGetCacheInfo` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect_Utils/CacheControl/CacheControl_AllLocalities/DataActionGetCacheInfo` |
| 6 | 5233 | `DataActionFetchUpdates` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/Directory_Updates/Updates_SingleList/DataActionFetchUpdates` |
| 7 | 5546 | `ServiceAPIGet_UI_UpdateItems_UnreadCount_All` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All` |
| 8 | 6487 | `ActionAppManager_AfterInitialize` | 200 | this screen | `/UBTConnect/screenservices/UBT_AppManager/ActionAppManager_AfterInitialize` |
| 9 | 7129 | `ActionSync_Info_GetMain` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/ActionSync_Info_GetMain` |
| 10 | 7494 | `ActionGetNumberUnreadMessages` | 200 | this screen | `/UBTConnect/screenservices/Connect2_LegacyShared/ActionGetNumberUnreadMessages` |
| 11 | 8358 | `ServiceAPIFetchData_CacheableMapEntities` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/ServiceAPIFetchData_CacheableMapEntities` |
| 12 | 8364 | `ServiceAPIFetchData_CacheableHouseholds` | 200 | this screen | `/UBTConnect/screenservices/UBTConnect/ServiceAPIFetchData_CacheableHouseholds` |

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

## DataActionGetDateRanges
- Scope: this screen
- Path: `/UBTConnect/screenservices/UBTConnect/Directory_Updates/Updates_SingleList/DataActionGetDateRanges`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): `Filter_UpdateTypeOptions`, `Filter_BottomSheetId`, `Filter_Updates`, `Filter_DefaultState`, `HasFiltersApplied`, `ShowMarkAll`, `DateRanges`, `isLoading`, `BottomSheetId_IsLoaded`, `BottomSheetId_ShowSubscription`, `Breakpoints`, `CurrentBreakpoint`, `IsHeaderScrolled`, `ShareableUpdateItem`, `IsShareOpen`, `ShareableObjectId`, `IsToggleSearch`, `FocusedScrollAnchorId`, `CurrentSearchString`
- Other request keys: (none)
- Response type: `GetDateRangesResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "DateRangesList": {
   "List": [
    {
     "Id": "string",
     "Order": "number"
    }
   ]
  }
 }
}
```

## DataActionGetCacheInfo
- Scope: this screen
- Path: `/UBTConnect/screenservices/UBTConnect_Utils/CacheControl/CacheControl_UserInfo/DataActionGetCacheInfo`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): `CacheTypeId`, `CacheKey`, `_cacheKeyInDataFetchStatus`
- Other request keys: (none)
- Response type: `GetCacheInfoResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "CacheControl_Response": {
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
  },
  "TTL": "number"
 }
}
```

## DataActionFetchUpdates
- Scope: this screen
- Path: `/UBTConnect/screenservices/UBTConnect/Directory_Updates/Updates_SingleList/DataActionFetchUpdates`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): `Filter_UpdateTypeOptions`, `Filter_BottomSheetId`, `Filter_Updates`, `Filter_DefaultState`, `HasFiltersApplied`, `ShowMarkAll`, `DateRanges`, `isLoading`, `BottomSheetId_IsLoaded`, `BottomSheetId_ShowSubscription`, `Breakpoints`, `CurrentBreakpoint`, `IsHeaderScrolled`, `ShareableUpdateItem`, `IsShareOpen`, `ShareableObjectId`, `IsToggleSearch`, `FocusedScrollAnchorId`, `CurrentSearchString`
- Other request keys: (none)
- Response type: `FetchUpdatesResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "UI_UpdateItemList": {
   "List": [
    {
     "UpdateItemId": "numeric string",
     "UpdateItemTypeId": "string",
     "Name": "string",
     "Date": "date string",
     "GenderId": "string",
     "LocationString": "string",
     "IsRead": "boolean",
     "HasAccess": "boolean",
     "HasShare": "boolean",
     "HouseholdId": "numeric string",
     "ParentsNames": "string",
     "BirthType": "string",
     "MemberId": "numeric string"
    }
   ]
  },
  "UnreadCount": "number"
 }
}
```

## ServiceAPIGet_UI_UpdateItems_UnreadCount_All
- Scope: this screen
- Path: `/UBTConnect/screenservices/UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All`
- Server action input parameters: (none)
- Screen variables sent with the call (OutSystems sends these automatically; React does not need to): (none)
- Other request keys: (none)
- Response type: `ServiceAPIGet_UI_UpdateItems_UnreadCount_AllResponse` (see types.ts)
```json
{
 "versionInfo": {
  "hasModuleVersionChanged": false,
  "hasApiVersionChanged": false
 },
 "data": {
  "UnreadCount": "number"
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

## Other requests during capture (no bodies)
| request | count |
|---|---|
| `script /UBTConnect/scripts/OutSystemsManifestLoader.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsSettings.js` | 1 |
| `link /UBTConnect/css/_Basic.css` | 1 |
| `script /UBTConnect/scripts/cordova.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.appDefinition.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.index.js` | 1 |
| `script /UBTConnect/scripts/Debugger.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsReactWidgets.js` | 1 |
| `script /UBTConnect/scripts/OutSystems.js` | 1 |
| `xmlhttprequest /UBTConnect/moduleservices/moduleversioninfo` | 1 |
| `script /UBTConnect/scripts/OutSystemsReactView.js` | 1 |
| `script /UBTConnect/scripts/AppInsightsConnector_Mobile.entities.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.entities.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Notes_MCS.entities.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.entities.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Bookmarks_MCS.entities.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Updates.controller.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.entities.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Updates.Updates_SingleList.mvc.js` | 1 |
| `script /UBTConnect/scripts/AppInsightsConnector_Mobile.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Notes_MCS.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.clientVariables.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Bookmarks_MCS.model.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` | 1 |
| `script /UBTConnect/scripts/NavigationHandler.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Updates.UpdateItem_Header.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.model.js` | 1 |
| `script /UBTConnect/scripts/Connect_Updates_CS.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Updates.SectionHeader.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common.BottomBarMenu.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Updates.Directory_Updates_FilterSheet.mvc.js` | 1 |
| `script /UBTConnect/scripts/NavigationHandler.ScrollAnchors.ScrollAnchor.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.languageResources.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Directory_Updates.Updates_NoItemsFound.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Share.ShareSheet.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTJavaScriptUtils.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Input.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.model.js` | 1 |
| `script /UBTConnect/scripts/NavigationHandler.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.IconSVG.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js` | 1 |
| `script /UBTConnect/scripts/NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.IconText.mvc.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.CustomText.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common_Blocks.App_IconBadge.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common.BottomBarContent.mvc.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Navigation.BottomBarItem.mvc.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Private.PullToRefresh.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.Columns_Three.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common_Blocks.App_NotificationRefresh.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.clientVariables.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.AvatarDouble.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.TagContent.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common.OfflineDataSyncEvents.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_PIN.Block_PINUnlock.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Policies.Policy_Checker.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.Utility.HandleImageLoadError.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.CircleButton.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc.js` | 1 |
| `script /UBTConnect/scripts/NavigationHandler.NavigationHandler.BackNavigationHandler.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.model.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager.controller.js` | 1 |
| `script /UBTConnect/scripts/EventfulDeeplinksPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/KeyboardPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager_Mobile.controller.js` | 1 |
| `script /UBTConnect/scripts/Firebase.model.js` | 1 |
| `script /UBTConnect/scripts/ScreenOrientationPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.controller.js` | 1 |
| `script /UBTConnect/scripts/Connect2_AndroidAppLinksPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Notes_MCS.controller.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LocalNotificationPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/Connect_Map_CS.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_BL.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Bookmarks_MCS.controller.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager_Mobile.model.js` | 1 |
| `script /UBTConnect/scripts/Leaflet.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.controller.js` | 1 |
| `script /UBTConnect/scripts/Firebase.controller.js` | 1 |
| `script /UBTConnect/scripts/FirebaseCloudMessagingPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Adaptive.Columns2.mvc.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Adaptive.Columns3.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.HighlightSearch.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.IconInline_Internal.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.ContextMenu_Item.mvc.js` | 1 |
| `script /UBTConnect/scripts/NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.PopupMenu.mvc.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Utilities.InlineSVG.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc.js` | 1 |
| `script /UBTConnect/scripts/InAppBrowserPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/InAppBrowserPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager.clientVariables.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager.model.js` | 1 |
| `script /UBTConnect/scripts/ApplicationInsightsConnector.model.js` | 1 |
| `script /UBTConnect/scripts/KeyboardPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/CommonPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/EventfulDeeplinksPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/EventfulDeeplinksPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/ApplicationInsightsConnector.controller.js` | 1 |
| `script /UBTConnect/scripts/KeyboardPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/AppVersionPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager_Mobile.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/PrivacyScreenPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/NetworkDetection.controller.js` | 1 |
| `script /UBTConnect/scripts/AppInsightsConnector_Mobile.controller.js` | 1 |
| `script /UBTConnect/scripts/FirebaseCrashlyticsPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/TouchIdPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/FirebaseCloudMessagingPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager_CS.model.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.controller.js` | 1 |
| `script /UBTConnect/scripts/ScreenOrientationPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/ScreenOrientationPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.clientVariables.js` | 1 |
| `script /UBTConnect/scripts/Connect2_AndroidAppLinksPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/Connect_Map_CS.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LocalNotificationPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LocalNotificationPlugin.clientVariables.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CacheControl.CacheControl_AllCountries.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Button.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CacheControl.CacheControl_AllLocalities.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_AppLauncherPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Share.ShareSheet_SectionTitle.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Common.Button.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.TagToggle.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Share.ShareSheet_Section.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.EmptyList.mvc.js` | 1 |
| `script /UBTConnect/scripts/MemoryClientCache.model.js` | 1 |
| `script /UBTConnect/scripts/NavigationHandler.NavigationHandler.PreventBackNavigation.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect_Search_CS.model.js` | 1 |
| `script /UBTConnect/scripts/UBTJavaScriptUtils.model.js` | 1 |
| `script /UBTConnect/scripts/SocialSharingPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/Connect2_AppLauncherPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CW_Search.SearchResult_Item.mvc.js` | 1 |
| `script /UBTConnect/scripts/CommonPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/UBTJavaScriptUtils.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/ApplicationInsightsConnector.clientVariables.js` | 1 |
| `script /UBTConnect/scripts/AppVersionPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/AppInsightsConnector_Mobile.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/PrivacyScreenPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/NetworkDetection.clientVariables.js` | 1 |
| `script /UBTConnect/scripts/AppVersionPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/NetworkDetection.model.js` | 1 |
| `script /UBTConnect/scripts/FirebaseCrashlyticsPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/FirebaseCrashlyticsPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/TouchIdPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/TouchIdPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/FirebaseCloudMessagingPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CacheControl.CacheControl.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.LazyImage.mvc.js` | 1 |
| `script /UBTConnect/scripts/APIDomain_Directory_IS.model.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js` | 1 |
| `script /UBTConnect/scripts/MemoryClientCache.controller.js` | 1 |
| `script /UBTConnect/scripts/SocialSharingPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/SocialSharingPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Interaction.BottomSheet.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_AndroidAppLinksPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common.UnsupportedVersion_Wrapper.mvc.js` | 1 |
| `script /UBTConnect/scripts/ContentProviderPlugin.controller.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CacheControl.CacheControl_Policies.mvc.js` | 1 |
| `script /UBTConnect/scripts/ApplicationPolicies_CW.controller.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.clientVariables.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common.UnsupportedVersion_Native.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common.UnsupportedVersion_Browser.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common.UnsupportedVersion_WebView.mvc.js` | 1 |
| `script /UBTConnect/scripts/InAppBrowserPlugin.referencesHealth.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.Layouts.SVG_Background_LoginWrapper.mvc.js` | 1 |
| `script /UBTConnect/scripts/ContentProviderPlugin.model.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager.PIN.Pincode_Unlock.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.mvc.js` | 1 |
| `script /UBTConnect/scripts/Connect2_OrbitMobile_MUI.clientVariables.js` | 1 |
| `script /UBTConnect/scripts/ApplicationPolicies_CW.model.js` | 1 |
| `script /UBTConnect/scripts/ApplicationPolicies_CW.clientVariables.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.CacheControl.CacheControl_UserInfo.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common.UnsupportedVersion.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager.PIN.InactivityTimer.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager.PIN.PinCode.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect.App_Common.WelcomeToConnect.mvc.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.languageResources.js` | 1 |
| `script /UBTConnect/scripts/UBTConnect_Utils.languageResources.js` | 1 |
| `script /UBTConnect/scripts/NavigationHandler.languageResources.js` | 1 |
| `script /UBTConnect/scripts/Connect2_AndroidAppLinksPlugin.languageResources.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.languageResources.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager_Mobile.languageResources.js` | 1 |
| `script /UBTConnect/scripts/UBT_AppManager.languageResources.js` | 1 |
| `script /UBTConnect/scripts/Connect2_LegacyShared.languageResources.js` | 1 |
| `script /UBTConnect/scripts/EventfulDeeplinksPlugin.languageResources.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.Interaction.InputWithIcon.mvc.js` | 1 |
| `link /UBTConnect/css/Connect2_LegacyShared.UBTConnect.css` | 1 |
| `script /UBTConnect/scripts/Firebase.FirebaseApp.js` | 1 |
| `link /UBTConnect/css/UBTConnectLibrary.UBTConnectLibrary.css` | 1 |
| `link /UBTConnect/css/UBTConnect.Directory_Updates.Updates_SingleList.css` | 1 |
| `link /UBTConnect/css/UBTConnectLibrary.UBTConnectBase.css` | 1 |
| `link /UBTConnect/css/UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.css` | 1 |
| `link /UBTConnect/css/UBT_AppManager.PIN.PinCode.css` | 1 |
| `link /UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.extra.css` | 1 |
| `script /UBTConnect/scripts/CommonPlugin.PluginManager.js` | 1 |
| `script /UBTConnect/scripts/UBTConnectLibrary.ScrollAnimations.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.OfflineDataSync.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.PullToRefresh.js` | 1 |
| `link /UBTConnect/css/OutSystemsReactWidgets.css` | 1 |
| `fetch /UBTConnect/status/network-ping.txt` | 2 |
| `link /UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.css` | 1 |
| `script /UBTConnect/scripts/Firebase.FirebaseAuth.js` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.OutSystemsUI.js` | 1 |
| `css /UBTConnect/fonts/connect-icon.ttf` | 1 |
| `script /UBTConnect/scripts/OutSystemsUI_2_23.MWO.js` | 1 |
| `script /UBTConnect/scripts/Firebase.FirebaseDatabase.js` | 1 |
| `xmlhttprequest https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo` | 2 |
| `xmlhttprequest https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken` | 1 |
| `script /UBTConnect/scripts/ApplicationInsightsConnector.AppInsights_v3_4_nightly.js` | 1 |
| `fetch https://js.monitor.azure.com/scripts/b/ai.config.1.cfg.json` | 1 |
| `fetch /UBTConnect/moduleservices/moduleinfo` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_Updates.Updates_SingleList.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Adaptive.Columns2.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_Common_Blocks.App_IconBadge.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_Common_Blocks.App_NotificationRefresh.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Input.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Interaction.InputWithIcon.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.TagToggle.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_Updates.UpdateItem_Header.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.IconText.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.CustomText.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.IconInline_Internal.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.TagContent.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.PopupMenu.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/NavigationHandler.ScrollAnchors.ScrollAnchor.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.Directory_Updates.SectionHeader.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_Common.BottomBarMenu.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_Common.BottomBarContent.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Navigation.BottomBarItem.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_Common.OfflineDataSyncEvents.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_PIN.Block_PINUnlock.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.Layouts.SVG_Background_LoginWrapper.mvc.js` | 1 |
| `xmlhttprequest https://australiaeast-0.in.applicationinsights.azure.com/v2/track` | 2 |
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
| `fetch /UBTConnect/scripts/UBTConnect.Directory_Updates.Directory_Updates_FilterSheet.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Interaction.BottomSheet.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.BasePatterns.Columns_Three.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/OutSystemsUI_2_23.Adaptive.Columns3.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnectLibrary.ConnectPatterns.Button.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CacheControl.CacheControl_AllCountries.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CacheControl.CacheControl.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CacheControl.CacheControl_AllLocalities.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc.js` | 1 |
| `fetch /UBTConnect/scripts/UBTConnect_Utils.CacheControl.CacheControl_UserInfo.mvc.js` | 1 |
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
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.controller.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.model.js` | 1 |
| `fetch /UBTConnect/scripts/Connect2_LegacyShared.languageResources.js` | 1 |
| `fetch /UBTConnect/css/_Basic.css` | 1 |
| `fetch /UBTConnect/css/OutSystemsReactWidgets.css` | 1 |
| `fetch /UBTConnect/css/UBT_AppManager.PIN.PinCode.css` | 1 |
| `fetch /UBTConnect/css/UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.css` | 1 |
| `fetch /UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.css` | 1 |
| `fetch /UBTConnect/css/UBTConnectLibrary.UBTConnectBase.css` | 1 |
| `fetch /UBTConnect/css/UBTConnectLibrary.UBTConnectLibrary.css` | 1 |
| `fetch /UBTConnect/css/Connect2_LegacyShared.UBTConnect.css` | 1 |
| `fetch /UBTConnect/css/UBTConnect.Directory_Updates.Updates_SingleList.css` | 1 |
| `fetch /UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.extra.css` | 1 |
| `fetch /UBTConnect/fonts/fontawesome-webfont.woff2` | 1 |
| `fetch /UBTConnect/fonts/fontawesome-webfont.woff` | 1 |
| `fetch /UBTConnect/Inter-VariableFont_opsz,wght.ttf` | 1 |
| `fetch /UBTConnect/Inter-Italic-VariableFont_opsz,wght.ttf` | 1 |
| `fetch /UBTConnect/fonts/connect-icon.ttf` | 1 |
| `fetch /UBTConnect/fonts/connect-icon.woff` | 1 |
| `fetch /UBTConnect/Updates_SingleList` | 1 |
