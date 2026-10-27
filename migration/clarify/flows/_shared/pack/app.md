# React code index of UI flow _shared

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| AddBookmark | 11 | `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:19`<br>`mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:170`<br>`mocks/modules/Connect2_Assemble_MUI/mocks.ts:6`<br>`mocks/modules/Connect2_Assemble_MUI/mocks.ts:12`<br>`lib/assemble/actions.ts:163`<br>`lib/assemble/actions.ts:175` |
| AddBookmark2 | 11 | `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:39`<br>`lib/ubtConnect/staticEntities.ts:145`<br>`lib/ubtConnect/actions.ts:270`<br>`api/bookmark/repository.ts:108`<br>`api/bookmark/types.ts:200`<br>`api/bookmark/mapper.ts:35` |
| App_CommonFilter_CheckCountry | 1 | `lib/ubtConnect/actions.ts:136` |
| App_CommonFilter_DefineOptionNames | 1 | `lib/ubtConnect/actions.ts:122` |
| AreDatesInSameMonth | 0 | - |
| AreDatesInSameWeek | 0 | - |
| CompareRecurrence | 0 | - |
| DeleteBookmarkByBookmarkId | 16 | `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:19`<br>`mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:22`<br>`mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:216`<br>`mocks/modules/Connect2_Assemble_MUI/mocks.ts:6`<br>`mocks/modules/Connect2_Assemble_MUI/mocks.ts:17`<br>`lib/assemble/actions.ts:167` |
| DeleteBookmarkByBookmarkId2 | 7 | `lib/ubtConnect/actions.ts:267`<br>`api/bookmark/repository.ts:119`<br>`api/bookmark/types.ts:186`<br>`api/schema.d.ts:2226`<br>`api/openapi.yaml:4570`<br>`containers/EntityDetailsActions/mocks.ts:20` |
| DiffMonths | 0 | - |
| Directory_BrowseByCountry_TooltipBuilder | 2 | `lib/ubtConnect/actions.ts:484`<br>`pages/BrowseDirectory/hooks/useBrowseDirectory.ts:137` |
| Directory_Updates_MinDateToShow | 1 | `pages/Updates_SingleList/hooks/updatesSingleListState.ts:174` |
| Directory_Updates_RefreshBottomBarCount | 4 | `platform/session/testSession.ts:79`<br>`components/layout/BottomBar/BottomBar.tsx:66`<br>`components/layout/BottomBar/BottomBar.tsx:75`<br>`lib/ubtConnect/actions.ts:62` |
| ExitApplicationForWebViewUpdate | 0 | - |
| FCM_DeeplinkCallback | 0 | - |
| FCM_NotificationCallback | 0 | - |
| FRD_UserCallback | 0 | - |
| FetchData_CacheableHouseholds | 6 | `api/app/repository.ts:45`<br>`api/app/types.ts:4`<br>`api/app/types.ts:101`<br>`api/app/mapper.ts:19`<br>`api/schema.d.ts:2243`<br>`api/openapi.yaml:4608` |
| FetchData_CacheableMapEntities | 6 | `api/app/repository.ts:39`<br>`api/app/types.ts:4`<br>`api/app/types.ts:91`<br>`api/app/mapper.ts:17`<br>`api/schema.d.ts:2260`<br>`api/openapi.yaml:4679` |
| FormatEventDescriptionTime | 0 | - |
| GetBookmarkCategoryId_ByEntityTypeId | 2 | `lib/ubtConnect/actions.ts:212`<br>`containers/EntityDetailsActions/useEntityDetailsActions.ts:136` |
| GetDateOfFirstDayOfMonth | 0 | - |
| GetDateOfFirstDayOfWeek | 0 | - |
| GetDateOfLastDayOfMonth | 0 | - |
| GetDateOfLastDayOfWeek | 0 | - |
| GetDayLabel | 0 | - |
| GetDescriptor_BretherenCount | 2 | `components/directory/SupperMeetingCardStatistics/SupperMeetingCardStatistics.tsx:22`<br>`lib/ubtConnect/actions.ts:143` |
| GetDescriptor_OneSchool_Event_Years | 0 | - |
| GetDescriptor_Subdivision_GenderSplit | 2 | `components/directory/SupperMeetingCardContent/SupperMeetingCardContent.tsx:22`<br>`lib/ubtConnect/actions.ts:334` |
| GetDescriptor_Subdivision_HouseholdCount | 1 | `lib/ubtConnect/actions.ts:148` |
| GetDistinctYearsOptions | 0 | - |
| GetEventsByCacheKeys | 0 | - |
| GetHouseholdDetails | 8 | `api/schema.d.ts:560`<br>`api/household/repository.ts:135`<br>`api/household/types.ts:215`<br>`api/household/mapper.ts:250`<br>`api/household/mapper.ts:253`<br>`api/openapi.yaml:1129` |
| GetIconLabel_Interchange_Statistics | 2 | `pages/Locality_Details/components/actions.ts:96`<br>`pages/Locality_Details/hooks/localityBlocksState.ts:175` |
| GetLocalityCurrentTimeLabel | 2 | `pages/Locality_Details/components/Locality_DateTimeLabel.tsx:12`<br>`pages/Locality_Details/components/actions.ts:32` |
| GetLocalityLabel | 2 | `lib/ubtConnect/actions.ts:455`<br>`pages/Locality_Details/hooks/useLocalityInterchange.ts:30` |
| GetLocalityMenu | 1 | `pages/Locality_Details/components/staticEntities.ts:16` |
| GetMonthGrid | 0 | - |
| GetMonthGrid_ExtraRow | 0 | - |
| GetMonthName | 0 | - |
| GetNameAndSurname_ByFullName | 5 | `lib/jsUtils.ts:59`<br>`lib/ubtConnect/actions.ts:198`<br>`pages/LDM_MyEvents_V2/LDM_MyEvents_V2Page.tsx:19`<br>`pages/LDM_EventDetail_V2/LDM_EventDetail_V2Page.tsx:24`<br>`pages/AssembleDetail/AssembleDetailPage.tsx:39` |
| GetNotesByItemId | 0 | - |
| GetRecurrenceDescription | 0 | - |
| GetRecurrencePatternTypeLabel | 0 | - |
| GetRecurrencePatternWeekIndexList | 0 | - |
| GetRecurrentWeekdaysLabelByRecurrence | 0 | - |
| GetShareType_FromEntity | 1 | `lib/ubtConnect/actions.ts:177` |
| GetSkeletonList_UI_HouseholdMembers | 1 | `lib/ubtConnect/actions.ts:360` |
| GetSkeleton_HouseholdActions | 2 | `lib/ubtConnect/actions.ts:443`<br>`lib/ubtConnect/actions.ts:449` |
| GetSkeleton_UI_HouseholdCard | 2 | `lib/ubtConnect/actions.ts:438`<br>`lib/ubtConnect/actions.ts:448` |
| GetSkeleton_UI_HouseholdCardContent | 2 | `lib/ubtConnect/actions.ts:422`<br>`lib/ubtConnect/actions.ts:438` |
| GetSkeleton_UI_HouseholdDetails | 1 | `lib/ubtConnect/actions.ts:448` |
| GetSkeleton_UI_HouseholdMember | 1 | `lib/ubtConnect/actions.ts:352` |
| GetSkeleton_UI_SubdivisionCard | 2 | `lib/ubtConnect/actions.ts:365`<br>`pages/Locality_Details/components/actions.ts:58` |
| GetSkeleton_UI_SubdivisionCardContent | 2 | `lib/ubtConnect/actions.ts:366`<br>`pages/Locality_Details/components/actions.ts:58` |
| GetStartingPosition | 0 | - |
| GetSubdivisionLocation_BySubdivisionId | 0 | - |
| GetURLFromEventDataURL | 1 | `platform/session/resume.ts:13` |
| GetUserInformation_Wrapper | 13 | `platform/bootstrap/appStartSteps.ts:106`<br>`platform/session/userInfo.ts:6`<br>`platform/session/userInfo.ts:29`<br>`platform/session/userInfo.ts:35`<br>`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx:22`<br>`containers/HouseholdDetails/hooks/useHouseholdDetails.ts:134` |
| GetUserInformation_Wrapper_Assign | 2 | `platform/session/UserInfoCache/UserInfoCache.tsx:16`<br>`lib/ubtConnect/actions.ts:115` |
| Get_Cacheable_MapEntities | 1 | `platform/bootstrap/appStartSteps.ts:89` |
| Get_Cacheable_MapHouseholds | 2 | `platform/bootstrap/appStartSteps.ts:98`<br>`api/app/types.ts:102` |
| Get_Core_LocalityTimezone | 0 | - |
| Get_Descriptor_OneSchool_Event_TimeRange | 0 | - |
| Get_FormattedDistance | 0 | - |
| Get_IsUnsupportedSystem | 3 | `platform/feedback/dialogs/BlockPinUnlock.tsx:17`<br>`lib/ubtConnect/unsupportedVersion.ts:29`<br>`pages/Login/hooks/useLogin.ts:16` |
| Get_IsUnsupportedVersion | 4 | `components/version/UnsupportedVersionWrapper/UnsupportedVersionWrapper.tsx:24`<br>`lib/ubtConnect/unsupportedVersion.ts:7`<br>`lib/ubtConnect/unsupportedVersion.ts:17`<br>`lib/ubtConnect/unsupportedVersion.ts:30` |
| Get_LookupRSVPStatus | 0 | - |
| Get_LookupRecurrencePatternWeekIndex | 0 | - |
| Get_LookupRecurrenceType | 0 | - |
| Get_LookupReminderType | 0 | - |
| Get_NoteCategoryId_ByBookmarkCategoryId | 0 | - |
| Get_NoteCategoryId_ByEntityTypeId | 2 | `lib/ubtConnect/staticEntities.ts:116`<br>`lib/ubtConnect/actions.ts:153` |
| Get_OneSchoolGlobalDetails | 0 | - |
| Get_UI_UpdateItems_UnreadCount_All | 6 | `platform/session/testSession.ts:78`<br>`lib/ubtConnect/actions.ts:63`<br>`api/update/repository.ts:70`<br>`api/update/mapper.ts:24`<br>`api/schema.d.ts:2277`<br>`api/openapi.yaml:4751` |
| Get_UserEventFormFormattedDate | 0 | - |
| Get_WeekIndexOptionLabel | 0 | - |
| Get_Years_Extra_Option_FlatList | 0 | - |
| HasAccessToRegion | 13 | `components/assemble/AssembleLocalityFilter/AssembleLocalityFilter.tsx:41`<br>`lib/assemble/actions.ts:137`<br>`lib/ubtConnect/staticEntities.ts:110`<br>`lib/ubtConnect/actions.ts:390`<br>`containers/HouseholdDetails/hooks/useHouseholdDetails.ts:220`<br>`pages/BrowseCountries/hooks/useBrowseCountries.ts:29` |
| HouseholdMember_GetShowContacts | 0 | - |
| Household_GetMembers_Service | 0 | - |
| IsEventOnDay | 0 | - |
| IsHouseholdDetails_InAncestryModeView | 0 | - |
| IsItemAboveMaximumDate | 0 | - |
| IsStringEquals | 2 | `lib/ubtConnect/actions.ts:383`<br>`lib/ubtConnect/actions.ts:393` |
| LN_MaybeTriggerLocalNotification | 0 | - |
| ListAppend | 10 | `components/note/NotesSheet/NotesSheet.tsx:103`<br>`lib/legacyShared/actions.ts:438`<br>`lib/ubtConnect/actions.ts:95`<br>`lib/ubtConnect/actions.ts:346`<br>`lib/ubtConnect/actions.ts:479`<br>`pages/SupperMeeting_Carousel/hooks/supperMeetingCarouselActions.ts:31` |
| ListAppendAll | 7 | `lib/ubtConnect/actions.ts:461`<br>`pages/Locality_Details/hooks/localityBlocksState.ts:26`<br>`pages/Locality_Details/hooks/localityBlocksState.ts:96`<br>`pages/Locality_Details/hooks/localityBlocksState.ts:237`<br>`pages/Locality_Details/hooks/useLocalitySubdivisions.ts:36`<br>`pages/Locality_Details/hooks/useLocalityOneSchoolGlobal.ts:35` |
| ListJoin | 0 | - |
| LockOrientationLandscapeIfNeeded | 0 | - |
| LockOrientationWithNavigationTransition | 1 | `platform/navigation/transitionEvents.ts:4` |
| MapRecurrencePatterDaysOfWeek | 0 | - |
| Member_ContactDetails_Service | 0 | - |
| NullTime | 0 | - |
| OfflineDataSync | 11 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18`<br>`platform/device/OfflineDataSync/OfflineDataSync.tsx:22`<br>`platform/device/OfflineDataSync/index.ts:1`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:22`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:25`<br>`components/layout/CommonUiLayout/CommonUiLayout.tsx:22` |
| OfflineDataSyncConfiguration | 1 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18` |
| OnApplicationReady_ListenForLandscapeScreens | 0 | - |
| OnOffiline | 1 | `platform/feedback/networkStatus.ts:6` |
| OnOnline | 1 | `platform/feedback/networkStatus.ts:6` |
| OpenGooglePlay_Chrome | 0 | - |
| OpenGooglePlay_UBTConnect | 0 | - |
| OpenGooglePlay_WebView | 0 | - |
| ScrollTop | 6 | `lib/ubtConnect/actions.ts:73`<br>`pages/Locality_Details/hooks/useLocalityDetails.ts:149`<br>`pages/Notes/hooks/useNotes.ts:29`<br>`pages/Assemble_BrowseByCountry/hooks/useAssembleFilter.ts:73`<br>`pages/Notifications/hooks/useNotifications.ts:143`<br>`pages/Updates_SingleList/hooks/useUpdatesSingleList.ts:207` |
| SetResumeLoginLink | 2 | `platform/navigation/OpenLinkOnResume/OpenLinkOnResume.tsx:12`<br>`platform/session/resume.ts:7` |
| TextListAppend_Function | 0 | - |
| ToggleBookmarkItem | 13 | `mocks/modules/Connect2_Assemble_MUI/mocks.ts:5`<br>`mocks/modules/Connect2_Assemble_MUI/mocks.ts:9`<br>`platform/storage/localEntities/localBookmarks.ts:22`<br>`platform/storage/localEntities/localBookmarks.ts:255`<br>`lib/assemble/staticEntities.ts:33`<br>`lib/assemble/actions.ts:161` |
| ToggleBookmarkItem_C2 | 10 | `platform/storage/localEntities/localBookmarks.ts:18`<br>`lib/ubtConnect/actions.ts:249`<br>`lib/ubtConnect/actions.ts:266`<br>`api/bookmark/repository.ts:108`<br>`api/bookmark/repository.ts:119`<br>`api/bookmark/types.ts:3` |
| Try_GetIsSupportedVersion | 0 | - |
| UBTConnect_JSUtils_ElementCache_GetObjProperty | 0 | - |
| UBTConnect_JSUtils_ElementCache_GetTextProperty | 0 | - |
| UBTConnect_JSUtils_ElementCache_SetObjProperty | 0 | - |
| UBTConnect_JSUtils_ElementCache_SetTextProperty | 0 | - |
| UnlockOrientationLandscapeIfNeeded | 0 | - |
| Upgrade_UBTConnect | 0 | - |
| Upgrade_WebView | 0 | - |
| ValidateRecurrence | 0 | - |
| ValidateWeeklyRecurrence | 0 | - |
| Wait | 1 | `pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:77` |

## Mock handlers and fixtures of the server actions

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: none for this flow).

- AddBookmark: `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:19`, `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:170`, `mocks/modules/Connect2_Assemble_MUI/mocks.ts:6`, `mocks/modules/Connect2_Assemble_MUI/mocks.ts:12`
- AddBookmark2: `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:39`
- DeleteBookmarkByBookmarkId: `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:19`, `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:22`, `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:216`, `mocks/modules/Connect2_Assemble_MUI/mocks.ts:6`
- DeleteBookmarkByBookmarkId2: **no mock handler found**
- FetchData_CacheableHouseholds: **no mock handler found**
- FetchData_CacheableMapEntities: **no mock handler found**
- GetEventsByCacheKeys: **no mock handler found**
- GetHouseholdDetails: **no mock handler found**
- GetNotesByItemId: **no mock handler found**
- GetSubdivisionLocation_BySubdivisionId: **no mock handler found**
- Get_Core_LocalityTimezone: **no mock handler found**
- Get_OneSchoolGlobalDetails: **no mock handler found**
- Get_UI_UpdateItems_UnreadCount_All: **no mock handler found**
- Household_GetMembers_Service: **no mock handler found**
- ListAppend: **no mock handler found**
- ListAppendAll: **no mock handler found**
- Member_ContactDetails_Service: **no mock handler found**
- Wait: **no mock handler found**
