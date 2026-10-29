# React code index of UI flow Map

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen Map
- **not built**: no folder `app/src/pages/Map` (check the board for the decision)

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| AddBookmark2 | 11 | `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:39`<br>`lib/ubtConnect/staticEntities.ts:145`<br>`lib/ubtConnect/actions.ts:270`<br>`api/bookmark/repository.ts:108`<br>`api/bookmark/types.ts:200`<br>`api/bookmark/mapper.ts:35` |
| App_CommonFilter_CheckCountry | 1 | `lib/ubtConnect/actions.ts:136` |
| App_CommonFilter_DefineOptionNames | 1 | `lib/ubtConnect/actions.ts:122` |
| Connect_Search | 0 | - |
| DeleteBookmarkByBookmarkId2 | 7 | `lib/ubtConnect/actions.ts:267`<br>`api/bookmark/repository.ts:119`<br>`api/bookmark/types.ts:186`<br>`api/schema.d.ts:2226`<br>`api/openapi.yaml:4570`<br>`containers/EntityDetailsActions/mocks.ts:20` |
| Directory_Updates_RefreshBottomBarCount | 4 | `platform/session/testSession.ts:79`<br>`components/layout/BottomBar/BottomBar.tsx:66`<br>`components/layout/BottomBar/BottomBar.tsx:75`<br>`lib/ubtConnect/actions.ts:62` |
| ExitApplicationForWebViewUpdate | 0 | - |
| FetchData_Countries | 0 | - |
| FetchData_GlobalLocation | 0 | - |
| FetchData_Households_ByCoordinates | 0 | - |
| FetchData_Localities | 0 | - |
| FetchData_VisibilityPreferences | 0 | - |
| GetBookmarkCategoryId_ByEntityTypeId | 2 | `lib/ubtConnect/actions.ts:212`<br>`containers/EntityDetailsActions/useEntityDetailsActions.ts:136` |
| GetHouseholdDetails | 8 | `api/schema.d.ts:560`<br>`api/household/repository.ts:135`<br>`api/household/types.ts:215`<br>`api/household/mapper.ts:250`<br>`api/household/mapper.ts:253`<br>`api/openapi.yaml:1129` |
| GetNameAndSurname_ByFullName | 5 | `lib/jsUtils.ts:59`<br>`lib/ubtConnect/actions.ts:198`<br>`pages/LDM_MyEvents_V2/LDM_MyEvents_V2Page.tsx:19`<br>`pages/LDM_EventDetail_V2/LDM_EventDetail_V2Page.tsx:24`<br>`pages/AssembleDetail/AssembleDetailPage.tsx:39` |
| GetNotesByItemId | 0 | - |
| GetShareType_FromEntity | 1 | `lib/ubtConnect/actions.ts:177` |
| GetSubdivisionDetails_BySubdivisionId | 0 | - |
| GetSubdivisionLocation_BySubdivisionId | 0 | - |
| GetURLFromEventDataURL | 1 | `platform/session/resume.ts:13` |
| GetUserInformation_Wrapper_Assign | 2 | `platform/session/UserInfoCache/UserInfoCache.tsx:16`<br>`lib/ubtConnect/actions.ts:115` |
| Get_ActiveGeoJsonFeatureId | 0 | - |
| Get_Core_LocalityTimezone | 0 | - |
| Get_IsUnsupportedSystem | 3 | `platform/feedback/dialogs/BlockPinUnlock.tsx:17`<br>`lib/ubtConnect/unsupportedVersion.ts:29`<br>`pages/Login/hooks/useLogin.ts:16` |
| Get_IsUnsupportedVersion | 4 | `components/version/UnsupportedVersionWrapper/UnsupportedVersionWrapper.tsx:24`<br>`lib/ubtConnect/unsupportedVersion.ts:7`<br>`lib/ubtConnect/unsupportedVersion.ts:17`<br>`lib/ubtConnect/unsupportedVersion.ts:30` |
| Get_OneSchoolGlobalDetails | 0 | - |
| Get_SearchResultsVisibilityStatus | 0 | - |
| Get_UI_CountryStatistics | 0 | - |
| Get_UI_LocalityDetailsWithStatistics | 0 | - |
| Get_UI_UpdateItems_UnreadCount_All | 6 | `platform/session/testSession.ts:78`<br>`lib/ubtConnect/actions.ts:63`<br>`api/update/repository.ts:70`<br>`api/update/mapper.ts:24`<br>`api/schema.d.ts:2277`<br>`api/openapi.yaml:4751` |
| ListAppend | 10 | `components/note/NotesSheet/NotesSheet.tsx:103`<br>`lib/legacyShared/actions.ts:438`<br>`lib/ubtConnect/actions.ts:95`<br>`lib/ubtConnect/actions.ts:346`<br>`lib/ubtConnect/actions.ts:479`<br>`pages/SupperMeeting_Carousel/hooks/supperMeetingCarouselActions.ts:31` |
| ListAppendAll | 7 | `lib/ubtConnect/actions.ts:461`<br>`pages/Locality_Details/hooks/localityBlocksState.ts:26`<br>`pages/Locality_Details/hooks/localityBlocksState.ts:96`<br>`pages/Locality_Details/hooks/localityBlocksState.ts:237`<br>`pages/Locality_Details/hooks/useLocalitySubdivisions.ts:36`<br>`pages/Locality_Details/hooks/useLocalityOneSchoolGlobal.ts:35` |
| ListFilter | 13 | `components/assemble/AssembleSubdivisionFilter/AssembleSubdivisionFilter.tsx:32`<br>`lib/assemble/actions.ts:112`<br>`lib/legacyShared/actions.ts:438`<br>`pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:117`<br>`pages/Profile/hooks/profileState.ts:111`<br>`pages/HomeFeed/hooks/useFeedUpdates.ts:89` |
| Member_ContactDetails_Service | 0 | - |
| OfflineDataSync | 11 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18`<br>`platform/device/OfflineDataSync/OfflineDataSync.tsx:22`<br>`platform/device/OfflineDataSync/index.ts:1`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:22`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:25`<br>`components/layout/CommonUiLayout/CommonUiLayout.tsx:22` |
| OfflineDataSyncConfiguration | 1 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18` |
| OpenGooglePlay_Chrome | 0 | - |
| OpenGooglePlay_UBTConnect | 0 | - |
| OpenGooglePlay_WebView | 0 | - |
| ScrollTop | 6 | `lib/ubtConnect/actions.ts:73`<br>`pages/Locality_Details/hooks/useLocalityDetails.ts:149`<br>`pages/Notes/hooks/useNotes.ts:29`<br>`pages/Assemble_BrowseByCountry/hooks/useAssembleFilter.ts:73`<br>`pages/Notifications/hooks/useNotifications.ts:143`<br>`pages/Updates_SingleList/hooks/useUpdatesSingleList.ts:207` |
| SetResumeLoginLink | 2 | `platform/navigation/OpenLinkOnResume/OpenLinkOnResume.tsx:12`<br>`platform/session/resume.ts:7` |
| ToggleBookmarkItem_C2 | 10 | `platform/storage/localEntities/localBookmarks.ts:18`<br>`lib/ubtConnect/actions.ts:249`<br>`lib/ubtConnect/actions.ts:266`<br>`api/bookmark/repository.ts:108`<br>`api/bookmark/repository.ts:119`<br>`api/bookmark/types.ts:3` |
| Try_GetIsSupportedVersion | 0 | - |
| Update_VisibilityPreferences | 0 | - |
| Upgrade_UBTConnect | 0 | - |
| Upgrade_WebView | 0 | - |
| ValidateSearchPhoneNumber | 2 | `pages/Search/hooks/searchState.ts:133`<br>`pages/Search/hooks/useSearch.ts:265` |

## Mock handlers and fixtures of the server actions

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: none for this flow).

- AddBookmark2: `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:39`
- Connect_Search: **no mock handler found**
- DeleteBookmarkByBookmarkId2: **no mock handler found**
- FetchData_Countries: **no mock handler found**
- FetchData_GlobalLocation: **no mock handler found**
- FetchData_Households_ByCoordinates: **no mock handler found**
- FetchData_Localities: **no mock handler found**
- FetchData_VisibilityPreferences: **no mock handler found**
- GetHouseholdDetails: **no mock handler found**
- GetNotesByItemId: **no mock handler found**
- GetSubdivisionDetails_BySubdivisionId: **no mock handler found**
- GetSubdivisionLocation_BySubdivisionId: **no mock handler found**
- Get_Core_LocalityTimezone: **no mock handler found**
- Get_OneSchoolGlobalDetails: **no mock handler found**
- Get_SearchResultsVisibilityStatus: **no mock handler found**
- Get_UI_CountryStatistics: **no mock handler found**
- Get_UI_LocalityDetailsWithStatistics: **no mock handler found**
- Get_UI_UpdateItems_UnreadCount_All: **no mock handler found**
- ListAppend: **no mock handler found**
- ListAppendAll: **no mock handler found**
- ListFilter: **no mock handler found**
- Member_ContactDetails_Service: **no mock handler found**
- Update_VisibilityPreferences: **no mock handler found**
