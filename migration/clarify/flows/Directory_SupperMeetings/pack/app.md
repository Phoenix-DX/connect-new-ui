# React code index of UI flow Directory_SupperMeetings

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen SupperMeeting_Carousel
- route: `/UBTConnect/SupperMeeting_Carousel` inputs=["In_StartingSupperMeetingId: LongInteger"]; meta: `{
    flag: 'C2EnableCarousel',
    when: false,
    to: 'SupperMeeting_Details',
    inputs: { In_StartingSupperMeetingId: 'In_SubdivsionId' }`
- page files:
  - `app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx` (50 lines)
  - `app/src/pages/SupperMeeting_Carousel/hooks/supperMeetingCarouselActions.ts` (58 lines)
  - `app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts` (45 lines)
  - `app/src/pages/SupperMeeting_Carousel/inputs.ts` (41 lines)
  - `app/src/pages/SupperMeeting_Carousel/mocks.ts` (20 lines)
- tests: `app/src/pages/SupperMeeting_Carousel/SupperMeeting_Carousel.test.tsx`, `app/src/pages/SupperMeeting_Carousel/hooks/supperMeetingCarouselActions.test.ts`, `app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/client**: 3 files at depth 3-4
  - **api/household**: 1 files at depth 3-4
  - **api/image**: 3 files at depth 3-4
  - **api/locality**: 1 files at depth 3-4
  - **api/member**: 1 files at depth 3-4
  - **api/schema.d.ts**: 1 files at depth 3-4
  - **components/contact**: 2 files at depth 3-4
  - **components/directory**: `components/directory/EntitiesCarousel/index.ts` (2, d1), `components/directory/EntitiesCarousel/EntitiesCarousel.tsx` (159, d2), `components/directory/EntitiesCarousel/types.ts` (1, d2); +12 deeper
  - **components/household**: 1 files at depth 3-4
  - **components/layout**: `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2); +3 deeper
  - **components/note**: 1 files at depth 3-4
  - **components/share**: 2 files at depth 3-4
  - **components/ui**: `components/ui/CustomText/index.ts` (2, d1), `components/ui/CustomText/CustomText.tsx` (68, d2), `components/ui/CustomText/types.ts` (1, d2); +19 deeper
  - **containers/DetailLayout**: `containers/DetailLayout/index.ts` (1, d1), `containers/DetailLayout/DetailLayoutContainer.tsx` (70, d2)
  - **containers/EntityDetailsActions**: 4 files at depth 3-4
  - **containers/HouseholdDetails**: `containers/HouseholdDetails/HouseholdDetailsContainer.tsx` (147, d2), `containers/HouseholdDetails/hooks/useHouseholdDetails.ts` (253, d2); +1 deeper
  - **containers/ShareSheet**: 1 files at depth 3-4
  - **containers/SupperMeetingDetails**: `containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx` (52, d2), `containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts` (130, d2); +1 deeper
  - **containers/index.ts**: `containers/index.ts` (15, d1)
  - **legacy/os**: 3 files at depth 3-4
  - **lib/geography**: 1 files at depth 3-4
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: `lib/ubtConnect/staticEntities.ts` (205, d1), `lib/ubtConnect/structures.ts` (285, d2); +1 deeper
  - **lib/ubtConnectLibrary**: 3 files at depth 3-4
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/actions.ts` (383, d2); +2 deeper
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: 21 files at depth 3-4
  - **platform/flags**: 8 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: 11 files at depth 3-4
  - **platform/session**: 9 files at depth 3-4
  - **platform/settings**: 1 files at depth 3-4
  - **platform/storage**: 1 files at depth 3-4

## Screen SupperMeeting_Details
- route: `/UBTConnect/SupperMeeting_Details` inputs=["In_SubdivsionId: LongInteger"]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx` (29 lines)
  - `app/src/pages/SupperMeeting_Details/inputs.ts` (20 lines)
  - `app/src/pages/SupperMeeting_Details/mocks.ts` (8 lines)
- tests: `app/src/pages/SupperMeeting_Details/SupperMeeting_Details.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/client**: 2 files at depth 3-4
  - **api/household**: 1 files at depth 3-4
  - **api/image**: 1 files at depth 3-4
  - **api/locality**: 5 files at depth 3-4
  - **api/member**: 1 files at depth 3-4
  - **app**: 1 files at depth 3-4
  - **components/contact**: 2 files at depth 3-4
  - **components/directory**: 3 files at depth 3-4
  - **components/household**: 1 files at depth 3-4
  - **components/layout**: `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2); +3 deeper
  - **components/note**: 1 files at depth 3-4
  - **components/share**: 2 files at depth 3-4
  - **components/ui**: `components/ui/CustomText/index.ts` (2, d1), `components/ui/CustomText/CustomText.tsx` (68, d2), `components/ui/CustomText/types.ts` (1, d2); +15 deeper
  - **containers/DetailLayout**: `containers/DetailLayout/index.ts` (1, d1), `containers/DetailLayout/DetailLayoutContainer.tsx` (70, d2)
  - **containers/EntityDetailsActions**: 4 files at depth 3-4
  - **containers/HouseholdDetails**: `containers/HouseholdDetails/HouseholdDetailsContainer.tsx` (147, d2), `containers/HouseholdDetails/hooks/useHouseholdDetails.ts` (253, d2); +1 deeper
  - **containers/ShareSheet**: 1 files at depth 3-4
  - **containers/SupperMeetingDetails**: `containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx` (52, d2), `containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts` (130, d2); +1 deeper
  - **containers/index.ts**: `containers/index.ts` (15, d1)
  - **legacy/os**: 2 files at depth 3-4
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: 3 files at depth 3-4
  - **lib/ubtConnectLibrary**: 3 files at depth 3-4
  - **lib/ubtConnectUtils**: 3 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: 15 files at depth 3-4
  - **platform/flags**: 8 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: 23 files at depth 3-4
  - **platform/session**: 7 files at depth 3-4

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| AddBookmark2 | 11 | `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:39`<br>`lib/ubtConnect/staticEntities.ts:145`<br>`lib/ubtConnect/actions.ts:270`<br>`api/bookmark/repository.ts:108`<br>`api/bookmark/types.ts:200`<br>`api/bookmark/mapper.ts:35` |
| DeleteBookmarkByBookmarkId2 | 7 | `lib/ubtConnect/actions.ts:267`<br>`api/bookmark/repository.ts:119`<br>`api/bookmark/types.ts:186`<br>`api/schema.d.ts:2226`<br>`api/openapi.yaml:4570`<br>`containers/EntityDetailsActions/mocks.ts:20` |
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
| HasAccessToRegion | 13 | `components/assemble/AssembleLocalityFilter/AssembleLocalityFilter.tsx:41`<br>`lib/assemble/actions.ts:137`<br>`lib/ubtConnect/staticEntities.ts:110`<br>`lib/ubtConnect/actions.ts:390`<br>`containers/HouseholdDetails/hooks/useHouseholdDetails.ts:220`<br>`pages/BrowseCountries/hooks/useBrowseCountries.ts:29` |
| IsHouseholdDetails_InAncestryModeView | 0 | - |
| ListAppend | 10 | `components/note/NotesSheet/NotesSheet.tsx:103`<br>`lib/legacyShared/actions.ts:438`<br>`lib/ubtConnect/actions.ts:95`<br>`lib/ubtConnect/actions.ts:346`<br>`lib/ubtConnect/actions.ts:479`<br>`pages/SupperMeeting_Carousel/hooks/supperMeetingCarouselActions.ts:31` |
| ListAppendAll | 7 | `lib/ubtConnect/actions.ts:461`<br>`pages/Locality_Details/hooks/localityBlocksState.ts:26`<br>`pages/Locality_Details/hooks/localityBlocksState.ts:96`<br>`pages/Locality_Details/hooks/localityBlocksState.ts:237`<br>`pages/Locality_Details/hooks/useLocalitySubdivisions.ts:36`<br>`pages/Locality_Details/hooks/useLocalityOneSchoolGlobal.ts:35` |
| Member_ContactDetails_Service | 0 | - |
| OfflineDataSync | 11 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18`<br>`platform/device/OfflineDataSync/OfflineDataSync.tsx:22`<br>`platform/device/OfflineDataSync/index.ts:1`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:22`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:25`<br>`components/layout/CommonUiLayout/CommonUiLayout.tsx:22` |
| OfflineDataSyncConfiguration | 1 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18` |
| OpenGooglePlay_Chrome | 0 | - |
| OpenGooglePlay_UBTConnect | 0 | - |
| OpenGooglePlay_WebView | 0 | - |
| SetResumeLoginLink | 2 | `platform/navigation/OpenLinkOnResume/OpenLinkOnResume.tsx:12`<br>`platform/session/resume.ts:7` |
| ToggleBookmarkItem_C2 | 10 | `platform/storage/localEntities/localBookmarks.ts:18`<br>`lib/ubtConnect/actions.ts:249`<br>`lib/ubtConnect/actions.ts:266`<br>`api/bookmark/repository.ts:108`<br>`api/bookmark/repository.ts:119`<br>`api/bookmark/types.ts:3` |
| Try_GetIsSupportedVersion | 0 | - |
| Upgrade_UBTConnect | 0 | - |
| Upgrade_WebView | 0 | - |
| Wait | 1 | `pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:77` |

## Mock handlers and fixtures of the server actions

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: `app/src/pages/SupperMeeting_Carousel/mocks.ts`, `app/src/pages/SupperMeeting_Details/mocks.ts`).

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
- ListAppend: **no mock handler found**
- ListAppendAll: **no mock handler found**
- Member_ContactDetails_Service: **no mock handler found**
- Wait: **no mock handler found**
