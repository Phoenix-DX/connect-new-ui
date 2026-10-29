# React code index of UI flow zDEV_Directory_CommunityBusinessBlocks

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen CommunityBusinessDetails
- **not built**: no folder `app/src/pages/CommunityBusinessDetails` (check the board for the decision)

## Screen CommunityBusinessDetails_CoomingSoon
- route: `/UBTConnect/CommunityBusinessDetails_CoomingSoon` inputs=["In_CommunityBusinessId: LongInteger"]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/CommunityBusinessDetails_CoomingSoon/CommunityBusinessDetails_CoomingSoonPage.tsx` (34 lines)
  - `app/src/pages/CommunityBusinessDetails_CoomingSoon/inputs.ts` (18 lines)
- tests: `app/src/pages/CommunityBusinessDetails_CoomingSoon/CommunityBusinessDetails_CoomingSoon.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/client**: 2 files at depth 3-4
  - **api/image**: 1 files at depth 3-4
  - **api/member**: 1 files at depth 3-4
  - **components/auth**: 2 files at depth 3-4
  - **components/layout**: `components/layout/MainLayout/index.ts` (1, d1), `components/layout/MainLayout/MainLayout.tsx` (171, d2); +2 deeper
  - **components/ui**: `components/ui/BlankSlate/index.ts` (1, d1), `components/ui/StaticInput/index.ts` (1, d1), `components/ui/BlankSlate/BlankSlate.tsx` (37, d2), `components/ui/StaticInput/StaticInput.tsx` (38, d2); +17 deeper
  - **components/version**: 2 files at depth 3-4
  - **legacy/os**: 4 files at depth 3-4
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: 1 files at depth 3-4
  - **lib/ubtConnectLibrary**: 3 files at depth 3-4
  - **lib/ubtConnectUtils**: 3 files at depth 3-4
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2); +6 deeper
  - **platform/flags**: 1 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: 17 files at depth 3-4
  - **platform/session**: 10 files at depth 3-4
  - **platform/settings**: 1 files at depth 3-4
  - **platform/storage**: 1 files at depth 3-4

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| AddBookmark2 | 11 | `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:39`<br>`lib/ubtConnect/staticEntities.ts:145`<br>`lib/ubtConnect/actions.ts:270`<br>`api/bookmark/repository.ts:108`<br>`api/bookmark/types.ts:200`<br>`api/bookmark/mapper.ts:35` |
| DeleteBookmarkByBookmarkId2 | 7 | `lib/ubtConnect/actions.ts:267`<br>`api/bookmark/repository.ts:119`<br>`api/bookmark/types.ts:186`<br>`api/schema.d.ts:2226`<br>`api/openapi.yaml:4570`<br>`containers/EntityDetailsActions/mocks.ts:20` |
| Directory_Updates_RefreshBottomBarCount | 4 | `platform/session/testSession.ts:79`<br>`components/layout/BottomBar/BottomBar.tsx:66`<br>`components/layout/BottomBar/BottomBar.tsx:75`<br>`lib/ubtConnect/actions.ts:62` |
| ExitApplicationForWebViewUpdate | 0 | - |
| GetBookmarkCategoryId_ByEntityTypeId | 2 | `lib/ubtConnect/actions.ts:212`<br>`containers/EntityDetailsActions/useEntityDetailsActions.ts:136` |
| GetHouseholdDetails | 8 | `api/schema.d.ts:560`<br>`api/household/repository.ts:135`<br>`api/household/types.ts:215`<br>`api/household/mapper.ts:250`<br>`api/household/mapper.ts:253`<br>`api/openapi.yaml:1129` |
| GetNameAndSurname_ByFullName | 5 | `lib/jsUtils.ts:59`<br>`lib/ubtConnect/actions.ts:198`<br>`pages/LDM_MyEvents_V2/LDM_MyEvents_V2Page.tsx:19`<br>`pages/LDM_EventDetail_V2/LDM_EventDetail_V2Page.tsx:24`<br>`pages/AssembleDetail/AssembleDetailPage.tsx:39` |
| GetNotesByItemId | 0 | - |
| GetShareType_FromEntity | 1 | `lib/ubtConnect/actions.ts:177` |
| GetSubdivisionLocation_BySubdivisionId | 0 | - |
| GetURLFromEventDataURL | 1 | `platform/session/resume.ts:13` |
| Get_Core_LocalityTimezone | 0 | - |
| Get_IsUnsupportedSystem | 3 | `platform/feedback/dialogs/BlockPinUnlock.tsx:17`<br>`lib/ubtConnect/unsupportedVersion.ts:29`<br>`pages/Login/hooks/useLogin.ts:16` |
| Get_IsUnsupportedVersion | 4 | `components/version/UnsupportedVersionWrapper/UnsupportedVersionWrapper.tsx:24`<br>`lib/ubtConnect/unsupportedVersion.ts:7`<br>`lib/ubtConnect/unsupportedVersion.ts:17`<br>`lib/ubtConnect/unsupportedVersion.ts:30` |
| Get_LocalityCommunityBusinessDetails | 0 | - |
| Get_OneSchoolGlobalDetails | 0 | - |
| Get_UI_UpdateItems_UnreadCount_All | 6 | `platform/session/testSession.ts:78`<br>`lib/ubtConnect/actions.ts:63`<br>`api/update/repository.ts:70`<br>`api/update/mapper.ts:24`<br>`api/schema.d.ts:2277`<br>`api/openapi.yaml:4751` |
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
| Upgrade_UBTConnect | 0 | - |
| Upgrade_WebView | 0 | - |

## Mock handlers and fixtures of the server actions

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: none for this flow).

- AddBookmark2: `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:39`
- DeleteBookmarkByBookmarkId2: **no mock handler found**
- GetHouseholdDetails: **no mock handler found**
- GetNotesByItemId: **no mock handler found**
- GetSubdivisionLocation_BySubdivisionId: **no mock handler found**
- Get_Core_LocalityTimezone: **no mock handler found**
- Get_LocalityCommunityBusinessDetails: **no mock handler found**
- Get_OneSchoolGlobalDetails: **no mock handler found**
- Get_UI_UpdateItems_UnreadCount_All: **no mock handler found**
- Member_ContactDetails_Service: **no mock handler found**
