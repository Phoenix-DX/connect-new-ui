# React code index of UI flow Directory_Household

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen Household_Relations
- route: `/UBTConnect/Household_Relations` inputs=["HouseholdId: LongInteger", "MemberId: LongInteger"]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/Household_Relations/Household_RelationsPage.tsx` (58 lines)
  - `app/src/pages/Household_Relations/components/HouseholdRelationsView.tsx` (313 lines)
  - `app/src/pages/Household_Relations/components/MemberRelation_ListItem.tsx` (117 lines)
  - `app/src/pages/Household_Relations/components/staticEntities.ts` (11 lines)
  - `app/src/pages/Household_Relations/hooks/householdRelationsState.ts` (176 lines)
  - `app/src/pages/Household_Relations/hooks/useHouseholdRelations.ts` (214 lines)
  - `app/src/pages/Household_Relations/inputs.ts` (18 lines)
  - `app/src/pages/Household_Relations/mocks.ts` (91 lines)
- tests: `app/src/pages/Household_Relations/Household_Relations.test.tsx`, `app/src/pages/Household_Relations/components/HouseholdRelationsView.test.tsx`, `app/src/pages/Household_Relations/components/MemberRelation_ListItem.test.tsx`, `app/src/pages/Household_Relations/hooks/householdRelationsState.test.ts`, `app/src/pages/Household_Relations/hooks/useHouseholdRelations.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: `api/bookmark/index.ts` (16, d2); +5 deeper
  - **api/client**: `api/client/callAction.ts` (167, d2); +2 deeper
  - **api/household**: `api/household/index.ts` (17, d2); +5 deeper
  - **api/image**: 3 files at depth 3-4
  - **api/locality**: 1 files at depth 3-4
  - **api/member**: 6 files at depth 3-4
  - **api/note**: 1 files at depth 3-4
  - **api/schema.d.ts**: 1 files at depth 3-4
  - **api/update**: `api/update/index.ts` (13, d2); +5 deeper
  - **components/auth**: 2 files at depth 3-4
  - **components/household**: `components/household/NonMemberListItem/index.ts` (2, d1), `components/household/NonMemberListItem/NonMemberListItem.tsx` (112, d2), `components/household/NonMemberListItem/types.ts` (2, d2)
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/DirectoryDetailSection/index.ts` (1, d1), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/DirectoryDetailSection/DirectoryDetailSection.tsx` (51, d2); +11 deeper
  - **components/note**: `components/note/NotesSheet/index.ts` (2, d1), `components/note/NotesSheet/NotesSheet.tsx` (166, d2), `components/note/NotesSheet/types.ts` (1, d2); +4 deeper
  - **components/ui**: `components/ui/ActionButton/index.ts` (2, d1), `components/ui/ColumnsThree/index.ts` (2, d1), `components/ui/EntityLazyImage/index.ts` (2, d1), `components/ui/Icon/index.ts` (1, d1), `components/ui/IconText/index.ts` (2, d1), `components/ui/ActionButton/ActionButton.tsx` (63, d2), `components/ui/ActionButton/types.ts` (1, d2), `components/ui/ColumnsThree/ColumnsThree.tsx` (57, d2), `components/ui/ColumnsThree/types.ts` (1, d2), `components/ui/EntityLazyImage/EntityLazyImage.tsx` (113, d2), `components/ui/EntityLazyImage/types.ts` (1, d2), `components/ui/Icon/Icon.tsx` (47, d2), `components/ui/IconText/IconText.tsx` (70, d2), `components/ui/IconText/types.ts` (1, d2), `components/ui/os/OSList/index.ts` (2, d2); +39 deeper
  - **components/version**: 2 files at depth 3-4
  - **containers/DetailLayout**: `containers/DetailLayout/index.ts` (1, d1), `containers/DetailLayout/DetailLayoutContainer.tsx` (70, d2)
  - **containers/NoteListActions**: 3 files at depth 3-4
  - **legacy/os**: `legacy/os/exceptions.ts` (84, d2), `legacy/os/os-exceptions.ts` (205, d2); +4 deeper
  - **lib/cssText.ts**: 1 files at depth 3-4
  - **lib/geography**: `lib/geography/structures.ts` (28, d2)
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/leaflet**: `lib/leaflet/json.ts` (265, d2), `lib/leaflet/structures.ts` (192, d2); +2 deeper
  - **lib/os-assets.manifest.json**: 1 files at depth 3-4
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: `lib/os-wire.ts` (12, d1)
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: `lib/ubtConnect/actions.ts` (544, d1), `lib/ubtConnect/staticEntities.ts` (205, d2), `lib/ubtConnect/structures.ts` (285, d2); +1 deeper
  - **lib/ubtConnectLibrary**: `lib/ubtConnectLibrary/actions.ts` (916, d2), `lib/ubtConnectLibrary/structures.ts` (335, d2); +1 deeper
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/actions.ts` (383, d2); +2 deeper
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/fictional**: `mocks/fictional/directory.ts` (442, d1)
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/flowErrors.ts` (17, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2); +12 deeper
  - **platform/flags**: 7 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: 14 files at depth 3-4
  - **platform/session**: `platform/session/userInfo.ts` (46, d2); +14 deeper
  - **platform/settings**: 1 files at depth 3-4
  - **platform/storage**: `platform/storage/localEntities/index.ts` (130, d2); +9 deeper

## Screen HouseholdCarousel
- route: `/UBTConnect/HouseholdCarousel` inputs=["In_StartingHouseholdId: LongInteger"]; meta: `{
    flag: 'C2EnableCarousel',
    when: false,
    to: 'HouseholdDetails',
    inputs: { In_StartingHouseholdId: 'HouseholdId' }`
- page files:
  - `app/src/pages/HouseholdCarousel/HouseholdCarouselPage.tsx` (66 lines)
  - `app/src/pages/HouseholdCarousel/hooks/householdCarouselActions.ts` (114 lines)
  - `app/src/pages/HouseholdCarousel/hooks/useHouseholdCarousel.ts` (97 lines)
  - `app/src/pages/HouseholdCarousel/inputs.ts` (33 lines)
  - `app/src/pages/HouseholdCarousel/mocks.ts` (24 lines)
- tests: `app/src/pages/HouseholdCarousel/HouseholdCarousel.test.tsx`, `app/src/pages/HouseholdCarousel/hooks/householdCarouselActions.test.ts`, `app/src/pages/HouseholdCarousel/hooks/useHouseholdCarousel.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/client**: 3 files at depth 3-4
  - **api/household**: 1 files at depth 3-4
  - **api/image**: 3 files at depth 3-4
  - **api/locality**: 1 files at depth 3-4
  - **api/member**: 1 files at depth 3-4
  - **api/schema.d.ts**: 1 files at depth 3-4
  - **api/update**: `api/update/index.ts` (13, d1), `api/update/hooks.ts` (16, d2), `api/update/keys.ts` (6, d2), `api/update/repository.ts` (74, d2), `api/update/types.ts` (91, d2); +1 deeper
  - **components/contact**: 2 files at depth 3-4
  - **components/directory**: `components/directory/EntitiesCarousel/index.ts` (2, d1), `components/directory/EntitiesCarousel/EntitiesCarousel.tsx` (159, d2), `components/directory/EntitiesCarousel/types.ts` (1, d2); +12 deeper
  - **components/household**: 1 files at depth 3-4
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2); +7 deeper
  - **components/note**: 1 files at depth 3-4
  - **components/share**: 2 files at depth 3-4
  - **components/ui**: `components/ui/Skeleton/index.ts` (1, d1), `components/ui/Skeleton/Skeleton.tsx` (40, d2); +20 deeper
  - **containers/DetailLayout**: `containers/DetailLayout/index.ts` (1, d1), `containers/DetailLayout/DetailLayoutContainer.tsx` (70, d2)
  - **containers/EntityDetailsActions**: 4 files at depth 3-4
  - **containers/HouseholdDetails**: `containers/HouseholdDetails/HouseholdDetailsContainer.tsx` (147, d2), `containers/HouseholdDetails/hooks/useHouseholdDetails.ts` (253, d2); +1 deeper
  - **containers/ShareSheet**: 1 files at depth 3-4
  - **containers/SupperMeetingDetails**: `containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx` (52, d2), `containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts` (130, d2); +1 deeper
  - **containers/index.ts**: `containers/index.ts` (15, d1)
  - **legacy/os**: 4 files at depth 3-4
  - **lib/geography**: 1 files at depth 3-4
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: `lib/ubtConnect/staticEntities.ts` (205, d1), `lib/ubtConnect/structures.ts` (285, d2); +1 deeper
  - **lib/ubtConnectLibrary**: 3 files at depth 3-4
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/actions.ts` (383, d2); +2 deeper
  - **mocks/fictional**: `mocks/fictional/directory.ts` (442, d1)
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: 22 files at depth 3-4
  - **platform/flags**: 8 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/BackNavigationHandler/index.ts` (2, d1), `platform/navigation/BackNavigationHandler/BackNavigationHandler.tsx` (28, d2), `platform/navigation/BackNavigationHandler/types.ts` (1, d2); +8 deeper
  - **platform/session**: 9 files at depth 3-4
  - **platform/settings**: 1 files at depth 3-4
  - **platform/storage**: 1 files at depth 3-4

## Screen HouseholdDetails
- route: `/UBTConnect/HouseholdDetails` inputs=["HouseholdId: LongInteger"]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/HouseholdDetails/HouseholdDetailsPage.tsx` (55 lines)
  - `app/src/pages/HouseholdDetails/inputs.ts` (14 lines)
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: 1 files at depth 3-4
  - **api/household**: 1 files at depth 3-4
  - **api/locality**: 5 files at depth 3-4
  - **api/update**: 1 files at depth 3-4
  - **components/contact**: 2 files at depth 3-4
  - **components/directory**: 3 files at depth 3-4
  - **components/household**: 1 files at depth 3-4
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/index.ts` (4, d1), `components/layout/BlankLayout/BlankLayout.tsx` (50, d2), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/DetailLayout/DetailLayout.tsx` (130, d2); +6 deeper
  - **components/note**: 1 files at depth 3-4
  - **components/share**: 2 files at depth 3-4
  - **components/ui**: 16 files at depth 3-4
  - **containers/EntityDetailsActions**: 4 files at depth 3-4
  - **containers/HouseholdDetails**: `containers/HouseholdDetails/HouseholdDetailsContainer.tsx` (147, d2), `containers/HouseholdDetails/hooks/useHouseholdDetails.ts` (253, d2); +1 deeper
  - **containers/ShareSheet**: 1 files at depth 3-4
  - **containers/SupperMeetingDetails**: `containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx` (52, d2), `containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts` (130, d2); +1 deeper
  - **containers/index.ts**: `containers/index.ts` (15, d1)
  - **legacy/os**: 4 files at depth 3-4
  - **lib/geography**: 1 files at depth 3-4
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/leaflet**: 2 files at depth 3-4
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: 3 files at depth 3-4
  - **lib/ubtConnectLibrary**: 3 files at depth 3-4
  - **lib/ubtConnectUtils**: 3 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: 21 files at depth 3-4
  - **platform/flags**: 8 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: 23 files at depth 3-4
  - **platform/session**: 8 files at depth 3-4
  - **platform/settings**: 1 files at depth 3-4
  - **platform/storage**: 2 files at depth 3-4

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| AddBookmark2 | 11 | `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:39`<br>`lib/ubtConnect/staticEntities.ts:145`<br>`lib/ubtConnect/actions.ts:270`<br>`api/bookmark/repository.ts:108`<br>`api/bookmark/types.ts:200`<br>`api/bookmark/mapper.ts:35` |
| DeleteBookmarkByBookmarkId2 | 7 | `lib/ubtConnect/actions.ts:267`<br>`api/bookmark/repository.ts:119`<br>`api/bookmark/types.ts:186`<br>`api/schema.d.ts:2226`<br>`api/openapi.yaml:4570`<br>`containers/EntityDetailsActions/mocks.ts:20` |
| Directory_Updates_CarouselSwipeAction | 5 | `mocks/modules/UBTConnect/Directory_Updates/mocks.ts:62`<br>`api/update/repository.ts:64`<br>`pages/HouseholdCarousel/hooks/householdCarouselActions.ts:10`<br>`pages/HouseholdCarousel/hooks/householdCarouselActions.ts:84`<br>`pages/HouseholdCarousel/hooks/useHouseholdCarousel.ts:43` |
| Directory_Updates_RefreshBottomBarCount | 4 | `platform/session/testSession.ts:79`<br>`components/layout/BottomBar/BottomBar.tsx:66`<br>`components/layout/BottomBar/BottomBar.tsx:75`<br>`lib/ubtConnect/actions.ts:62` |
| ExitApplicationForWebViewUpdate | 0 | - |
| GetBookmarkCategoryId_ByEntityTypeId | 2 | `lib/ubtConnect/actions.ts:212`<br>`containers/EntityDetailsActions/useEntityDetailsActions.ts:136` |
| GetHouseholdCoordinates | 12 | `mocks/fictional/ldm.ts:235`<br>`mocks/fictional/ldm.ts:493`<br>`api/schema.d.ts:798`<br>`api/household/repository.ts:122`<br>`api/household/repository.ts:124`<br>`api/household/mapper.ts:236` |
| GetHouseholdDetails | 8 | `api/schema.d.ts:560`<br>`api/household/repository.ts:135`<br>`api/household/types.ts:215`<br>`api/household/mapper.ts:250`<br>`api/household/mapper.ts:253`<br>`api/openapi.yaml:1129` |
| GetHouseholdList_BySubdivisionId | 0 | - |
| GetNameAndSurname_ByFullName | 5 | `lib/jsUtils.ts:59`<br>`lib/ubtConnect/actions.ts:198`<br>`pages/LDM_MyEvents_V2/LDM_MyEvents_V2Page.tsx:19`<br>`pages/LDM_EventDetail_V2/LDM_EventDetail_V2Page.tsx:24`<br>`pages/AssembleDetail/AssembleDetailPage.tsx:39` |
| GetNotesByItemId | 0 | - |
| GetSekeletonList_UI_OneSchoolGlobal_EventCard | 0 | - |
| GetShareType_FromEntity | 1 | `lib/ubtConnect/actions.ts:177` |
| GetSkeletonList_UI_HouseholdMembers | 1 | `lib/ubtConnect/actions.ts:360` |
| GetSkeletonList_UI_SubdivisionHousehold | 3 | `components/directory/SupperMeetingHouseholdList/SupperMeetingHouseholdList.tsx:16`<br>`lib/ubtConnect/actions.ts:346`<br>`containers/SupperMeetingDetails/hooks/supperMeetingDetailsState.ts:14` |
| GetSkeleton_HouseholdActions | 2 | `lib/ubtConnect/actions.ts:443`<br>`lib/ubtConnect/actions.ts:449` |
| GetSkeleton_SubdivisionActions | 1 | `lib/ubtConnect/actions.ts:366` |
| GetSkeleton_UI_HouseholdCard | 2 | `lib/ubtConnect/actions.ts:438`<br>`lib/ubtConnect/actions.ts:448` |
| GetSkeleton_UI_HouseholdCardContent | 2 | `lib/ubtConnect/actions.ts:422`<br>`lib/ubtConnect/actions.ts:438` |
| GetSkeleton_UI_HouseholdDetails | 1 | `lib/ubtConnect/actions.ts:448` |
| GetSkeleton_UI_HouseholdMember | 1 | `lib/ubtConnect/actions.ts:352` |
| GetSkeleton_UI_OneSchoolGlobal_DetailCard | 1 | `pages/OneSchoolGlobalDetails/hooks/oneSchoolGlobalDetailsState.ts:47` |
| GetSkeleton_UI_OneSchoolGlobal_EventCard | 0 | - |
| GetSkeleton_UI_OneSchoolGlobal_StudentNumbers | 0 | - |
| GetSkeleton_UI_SubdivisionCard | 2 | `lib/ubtConnect/actions.ts:365`<br>`pages/Locality_Details/components/actions.ts:58` |
| GetSkeleton_UI_SubdivisionCardContent | 2 | `lib/ubtConnect/actions.ts:366`<br>`pages/Locality_Details/components/actions.ts:58` |
| GetSkeleton_UI_SubdivisionDetails | 3 | `components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:31`<br>`lib/ubtConnect/actions.ts:365`<br>`containers/SupperMeetingDetails/hooks/supperMeetingDetailsState.ts:21` |
| GetSkeleton_UI_SubdivisionHousehold | 1 | `lib/ubtConnect/actions.ts:341` |
| GetSubdivisionDetails_BySubdivisionId | 0 | - |
| GetSubdivisionLocation_BySubdivisionId | 0 | - |
| GetURLFromEventDataURL | 1 | `platform/session/resume.ts:13` |
| GetUserInformation_Wrapper | 13 | `platform/bootstrap/appStartSteps.ts:106`<br>`platform/session/userInfo.ts:6`<br>`platform/session/userInfo.ts:29`<br>`platform/session/userInfo.ts:35`<br>`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx:22`<br>`containers/HouseholdDetails/hooks/useHouseholdDetails.ts:134` |
| GetUserInformation_Wrapper_Assign | 2 | `platform/session/UserInfoCache/UserInfoCache.tsx:16`<br>`lib/ubtConnect/actions.ts:115` |
| Get_Core_LocalityTimezone | 0 | - |
| Get_CurrentEntityHeader | 2 | `components/directory/EntitiesCarouselHeader/EntitiesCarouselHeader.tsx:23`<br>`lib/ubtConnect/actions.ts:512` |
| Get_IsInsideRenderBuffer | 1 | `lib/ubtConnect/actions.ts:525` |
| Get_IsUnsupportedSystem | 3 | `platform/feedback/dialogs/BlockPinUnlock.tsx:17`<br>`lib/ubtConnect/unsupportedVersion.ts:29`<br>`pages/Login/hooks/useLogin.ts:16` |
| Get_IsUnsupportedVersion | 4 | `components/version/UnsupportedVersionWrapper/UnsupportedVersionWrapper.tsx:24`<br>`lib/ubtConnect/unsupportedVersion.ts:7`<br>`lib/ubtConnect/unsupportedVersion.ts:17`<br>`lib/ubtConnect/unsupportedVersion.ts:30` |
| Get_LookupSection | 5 | `components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:47`<br>`components/household/HouseholdGalleryCardList/HouseholdGalleryCardList.tsx:34`<br>`lib/ubtConnect/staticEntities.ts:59`<br>`lib/ubtConnect/actions.ts:316`<br>`pages/OneSchoolGlobalDetails/hooks/oneSchoolGlobalDetailsState.ts:38` |
| Get_OneSchoolGlobalDetails | 0 | - |
| Get_UI_UpdateItems_UnreadCount_All | 6 | `platform/session/testSession.ts:78`<br>`lib/ubtConnect/actions.ts:63`<br>`api/update/repository.ts:70`<br>`api/update/mapper.ts:24`<br>`api/schema.d.ts:2277`<br>`api/openapi.yaml:4751` |
| HasAccessToRegion | 13 | `components/assemble/AssembleLocalityFilter/AssembleLocalityFilter.tsx:41`<br>`lib/assemble/actions.ts:137`<br>`lib/ubtConnect/staticEntities.ts:110`<br>`lib/ubtConnect/actions.ts:390`<br>`containers/HouseholdDetails/hooks/useHouseholdDetails.ts:220`<br>`pages/BrowseCountries/hooks/useBrowseCountries.ts:29` |
| Household_GetMemberSiblings | 0 | - |
| IsHouseholdDetails_InAncestryModeView | 0 | - |
| ListAppend | 10 | `components/note/NotesSheet/NotesSheet.tsx:103`<br>`lib/legacyShared/actions.ts:438`<br>`lib/ubtConnect/actions.ts:95`<br>`lib/ubtConnect/actions.ts:346`<br>`lib/ubtConnect/actions.ts:479`<br>`pages/SupperMeeting_Carousel/hooks/supperMeetingCarouselActions.ts:31` |
| ListAppendAll | 7 | `lib/ubtConnect/actions.ts:461`<br>`pages/Locality_Details/hooks/localityBlocksState.ts:26`<br>`pages/Locality_Details/hooks/localityBlocksState.ts:96`<br>`pages/Locality_Details/hooks/localityBlocksState.ts:237`<br>`pages/Locality_Details/hooks/useLocalitySubdivisions.ts:36`<br>`pages/Locality_Details/hooks/useLocalityOneSchoolGlobal.ts:35` |
| Member_ContactDetails_Service | 0 | - |
| Member_GetContext_Service | 0 | - |
| OfflineDataSync | 11 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18`<br>`platform/device/OfflineDataSync/OfflineDataSync.tsx:22`<br>`platform/device/OfflineDataSync/index.ts:1`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:22`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:25`<br>`components/layout/CommonUiLayout/CommonUiLayout.tsx:22` |
| OfflineDataSyncConfiguration | 1 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18` |
| OpenGooglePlay_Chrome | 0 | - |
| OpenGooglePlay_UBTConnect | 0 | - |
| OpenGooglePlay_WebView | 0 | - |
| ScrollTop | 6 | `lib/ubtConnect/actions.ts:73`<br>`pages/Locality_Details/hooks/useLocalityDetails.ts:149`<br>`pages/Notes/hooks/useNotes.ts:29`<br>`pages/Assemble_BrowseByCountry/hooks/useAssembleFilter.ts:73`<br>`pages/Notifications/hooks/useNotifications.ts:143`<br>`pages/Updates_SingleList/hooks/useUpdatesSingleList.ts:207` |
| SetResumeLoginLink | 2 | `platform/navigation/OpenLinkOnResume/OpenLinkOnResume.tsx:12`<br>`platform/session/resume.ts:7` |
| ToggleBookmarkItem_C2 | 10 | `platform/storage/localEntities/localBookmarks.ts:18`<br>`lib/ubtConnect/actions.ts:249`<br>`lib/ubtConnect/actions.ts:266`<br>`api/bookmark/repository.ts:108`<br>`api/bookmark/repository.ts:119`<br>`api/bookmark/types.ts:3` |
| Try_GetIsSupportedVersion | 0 | - |
| UpdateItem_MarkAsRead | 7 | `mocks/modules/UBTConnect/Directory_Updates/mocks.ts:61`<br>`api/update/repository.ts:63`<br>`api/schema.d.ts:1597`<br>`api/openapi.yaml:3271`<br>`pages/HouseholdCarousel/inputs.ts:5`<br>`pages/HouseholdCarousel/hooks/householdCarouselActions.ts:85` |
| Upgrade_UBTConnect | 0 | - |
| Upgrade_WebView | 0 | - |
| Wait | 1 | `pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:77` |

## Mock handlers and fixtures of the server actions

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: `app/src/pages/Household_Relations/mocks.ts`, `app/src/pages/HouseholdCarousel/mocks.ts`).

- AddBookmark2: `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:39`
- DeleteBookmarkByBookmarkId2: **no mock handler found**
- GetHouseholdCoordinates: `mocks/fictional/ldm.ts:235`, `mocks/fictional/ldm.ts:493`
- GetHouseholdDetails: **no mock handler found**
- GetHouseholdList_BySubdivisionId: **no mock handler found**
- GetNotesByItemId: **no mock handler found**
- GetSubdivisionDetails_BySubdivisionId: **no mock handler found**
- GetSubdivisionLocation_BySubdivisionId: **no mock handler found**
- Get_Core_LocalityTimezone: **no mock handler found**
- Get_OneSchoolGlobalDetails: **no mock handler found**
- Get_UI_UpdateItems_UnreadCount_All: **no mock handler found**
- Household_GetMemberSiblings: **no mock handler found**
- ListAppend: **no mock handler found**
- ListAppendAll: **no mock handler found**
- Member_ContactDetails_Service: **no mock handler found**
- Member_GetContext_Service: **no mock handler found**
- UpdateItem_MarkAsRead: `mocks/modules/UBTConnect/Directory_Updates/mocks.ts:61`
- Wait: **no mock handler found**
