# React code index of UI flow App_Profile

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen Profile
- route: `/UBTConnect/Profile` inputs=[]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/Profile/ProfilePage.tsx` (150 lines)
  - `app/src/pages/Profile/components/ContactInformationSection.tsx` (136 lines)
  - `app/src/pages/Profile/components/FormInput.tsx` (51 lines)
  - `app/src/pages/Profile/components/FormSwitch.tsx` (25 lines)
  - `app/src/pages/Profile/components/IdentificationSection.tsx` (61 lines)
  - `app/src/pages/Profile/components/PersonalInformationSection.tsx` (97 lines)
  - `app/src/pages/Profile/components/ProfileDetailsForm.tsx` (69 lines)
  - `app/src/pages/Profile/components/ProfileFooter.tsx` (72 lines)
  - `app/src/pages/Profile/components/ProfileHeader.tsx` (79 lines)
  - `app/src/pages/Profile/components/ProfileHouseholdPreview.tsx` (39 lines)
  - `app/src/pages/Profile/components/formOptions.ts` (42 lines)
  - `app/src/pages/Profile/hooks/profileState.ts` (234 lines)
  - `app/src/pages/Profile/hooks/useProfile.ts` (222 lines)
  - `app/src/pages/Profile/mocks.ts` (77 lines)
  - `app/src/pages/Profile/staticEntities.ts` (10 lines)
- tests: `app/src/pages/Profile/Profile.test.tsx`, `app/src/pages/Profile/components/ProfileDetailsForm.test.tsx`, `app/src/pages/Profile/components/ProfileFooter.test.tsx`, `app/src/pages/Profile/components/ProfileHeader.test.tsx`, `app/src/pages/Profile/components/ProfileHouseholdPreview.test.tsx`, `app/src/pages/Profile/hooks/profileState.test.ts`, `app/src/pages/Profile/hooks/useProfile.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: 1 files at depth 3-4
  - **api/client**: `api/client/callAction.ts` (167, d2); +1 deeper
  - **api/country**: `api/country/index.ts` (17, d1), `api/country/hooks.ts` (65, d2), `api/country/keys.ts` (32, d2), `api/country/repository.ts` (83, d2), `api/country/types.ts` (143, d2); +1 deeper
  - **api/household**: 1 files at depth 3-4
  - **api/image**: 1 files at depth 3-4
  - **api/locality**: 1 files at depth 3-4
  - **api/member**: `api/member/index.ts` (18, d2); +6 deeper
  - **api/schema.d.ts**: `api/schema.d.ts` (14986, d2)
  - **api/update**: 1 files at depth 3-4
  - **app**: 1 files at depth 3-4
  - **components/auth**: 2 files at depth 3-4
  - **components/contact**: 2 files at depth 3-4
  - **components/directory**: 3 files at depth 3-4
  - **components/household**: 1 files at depth 3-4
  - **components/layout**: `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/HomeLayout/index.ts` (1, d1), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/HomeLayout/HomeLayout.tsx` (211, d2); +4 deeper
  - **components/note**: 1 files at depth 3-4
  - **components/share**: 2 files at depth 3-4
  - **components/ui**: `components/ui/ActionButton/index.ts` (2, d1), `components/ui/ButtonLoading/index.ts` (1, d1), `components/ui/ConnectBottomSheet/index.ts` (2, d1), `components/ui/Dialog/index.ts` (10, d1), `components/ui/EntityLazyImage/index.ts` (2, d1), `components/ui/FixedFooter/index.ts` (1, d1), `components/ui/IconText/index.ts` (2, d1), `components/ui/SectionSeparator/index.ts` (1, d1), `components/ui/lib/actions.ts` (307, d1), `components/ui/os/OSValidation/index.ts` (28, d1), `components/ui/ActionButton/ActionButton.tsx` (63, d2), `components/ui/ActionButton/types.ts` (1, d2), `components/ui/ButtonLoading/ButtonLoading.tsx` (63, d2), `components/ui/ConnectBottomSheet/ConnectBottomSheet.tsx` (220, d2), `components/ui/ConnectBottomSheet/types.ts` (1, d2), `components/ui/Dialog/ChoiceDialog.tsx` (73, d2), `components/ui/Dialog/NavigationDialog.tsx` (178, d2), `components/ui/Dialog/dialogTriggers.ts` (44, d2), `components/ui/EntityLazyImage/EntityLazyImage.tsx` (113, d2), `components/ui/EntityLazyImage/types.ts` (1, d2) … +8; +43 deeper
  - **components/version**: 2 files at depth 3-4
  - **containers/EntityDetailsActions**: 4 files at depth 3-4
  - **containers/HouseholdDetails**: `containers/HouseholdDetails/mockData.ts` (185, d1), `containers/HouseholdDetails/HouseholdDetailsContainer.tsx` (147, d2), `containers/HouseholdDetails/hooks/useHouseholdDetails.ts` (253, d2); +1 deeper
  - **containers/ShareSheet**: 1 files at depth 3-4
  - **containers/SupperMeetingDetails**: `containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx` (52, d2), `containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts` (130, d2); +1 deeper
  - **containers/index.ts**: `containers/index.ts` (15, d1)
  - **legacy/os**: `legacy/os/exceptions.ts` (84, d1), `legacy/os/os-exceptions.ts` (205, d2); +7 deeper
  - **lib/geography**: `lib/geography/structures.ts` (28, d2)
  - **lib/jsUtils.ts**: `lib/jsUtils.ts` (81, d1)
  - **lib/leaflet**: 2 files at depth 3-4
  - **lib/navigationEvent.ts**: 1 files at depth 3-4
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: `lib/os-wire.ts` (12, d2)
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: `lib/ubtConnect/structures.ts` (285, d1); +3 deeper
  - **lib/ubtConnectLibrary**: `lib/ubtConnectLibrary/structures.ts` (335, d2); +2 deeper
  - **lib/ubtConnectUtils**: 3 files at depth 3-4
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/fictional**: `mocks/fictional/directory.ts` (442, d2)
  - **mocks/fixtures.ts**: `mocks/fixtures.ts` (83, d1)
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **mocks/store.ts**: `mocks/store.ts` (74, d1)
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2); +7 deeper
  - **platform/flags**: 6 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/index.ts` (26, d2); +25 deeper
  - **platform/session**: `platform/session/UserInfoCache/index.ts` (2, d1), `platform/session/mockUser.ts` (118, d1), `platform/session/userInfo.ts` (46, d1), `platform/session/UserInfoCache/UserInfoCache.tsx` (32, d2), `platform/session/UserInfoCache/types.ts` (1, d2), `platform/session/resume.ts` (34, d2), `platform/session/session.ts` (295, d2), `platform/session/types.ts` (20, d2); +10 deeper
  - **platform/settings**: 3 files at depth 3-4
  - **platform/storage**: `platform/storage/storage.ts` (62, d2); +1 deeper

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| AddBookmark2 | 11 | `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:39`<br>`lib/ubtConnect/staticEntities.ts:145`<br>`lib/ubtConnect/actions.ts:270`<br>`api/bookmark/repository.ts:108`<br>`api/bookmark/types.ts:200`<br>`api/bookmark/mapper.ts:35` |
| DeleteBookmarkByBookmarkId2 | 7 | `lib/ubtConnect/actions.ts:267`<br>`api/bookmark/repository.ts:119`<br>`api/bookmark/types.ts:186`<br>`api/schema.d.ts:2226`<br>`api/openapi.yaml:4570`<br>`containers/EntityDetailsActions/mocks.ts:20` |
| ExitApplicationForWebViewUpdate | 0 | - |
| GetBookmarkCategoryId_ByEntityTypeId | 2 | `lib/ubtConnect/actions.ts:212`<br>`containers/EntityDetailsActions/useEntityDetailsActions.ts:136` |
| GetHouseholdCoordinates | 12 | `mocks/fictional/ldm.ts:235`<br>`mocks/fictional/ldm.ts:493`<br>`api/schema.d.ts:798`<br>`api/household/repository.ts:122`<br>`api/household/repository.ts:124`<br>`api/household/mapper.ts:236` |
| GetHouseholdDetails | 8 | `api/schema.d.ts:560`<br>`api/household/repository.ts:135`<br>`api/household/types.ts:215`<br>`api/household/mapper.ts:250`<br>`api/household/mapper.ts:253`<br>`api/openapi.yaml:1129` |
| GetNameAndSurname_ByFullName | 5 | `lib/jsUtils.ts:59`<br>`lib/ubtConnect/actions.ts:198`<br>`pages/LDM_MyEvents_V2/LDM_MyEvents_V2Page.tsx:19`<br>`pages/LDM_EventDetail_V2/LDM_EventDetail_V2Page.tsx:24`<br>`pages/AssembleDetail/AssembleDetailPage.tsx:39` |
| GetNotesByItemId | 0 | - |
| GetShareType_FromEntity | 1 | `lib/ubtConnect/actions.ts:177` |
| GetSkeletonList_UI_HouseholdMembers | 1 | `lib/ubtConnect/actions.ts:360` |
| GetSkeleton_HouseholdActions | 2 | `lib/ubtConnect/actions.ts:443`<br>`lib/ubtConnect/actions.ts:449` |
| GetSkeleton_UI_HouseholdCard | 2 | `lib/ubtConnect/actions.ts:438`<br>`lib/ubtConnect/actions.ts:448` |
| GetSkeleton_UI_HouseholdCardContent | 2 | `lib/ubtConnect/actions.ts:422`<br>`lib/ubtConnect/actions.ts:438` |
| GetSkeleton_UI_HouseholdDetails | 1 | `lib/ubtConnect/actions.ts:448` |
| GetSkeleton_UI_HouseholdMember | 1 | `lib/ubtConnect/actions.ts:352` |
| GetSubdivisionLocation_BySubdivisionId | 0 | - |
| GetURLFromEventDataURL | 1 | `platform/session/resume.ts:13` |
| GetUserInformation_Wrapper | 13 | `platform/bootstrap/appStartSteps.ts:106`<br>`platform/session/userInfo.ts:6`<br>`platform/session/userInfo.ts:29`<br>`platform/session/userInfo.ts:35`<br>`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx:22`<br>`containers/HouseholdDetails/hooks/useHouseholdDetails.ts:134` |
| GetUserInformation_Wrapper_Assign | 2 | `platform/session/UserInfoCache/UserInfoCache.tsx:16`<br>`lib/ubtConnect/actions.ts:115` |
| Get_Core_LocalityTimezone | 0 | - |
| Get_IsUnsupportedSystem | 3 | `platform/feedback/dialogs/BlockPinUnlock.tsx:17`<br>`lib/ubtConnect/unsupportedVersion.ts:29`<br>`pages/Login/hooks/useLogin.ts:16` |
| Get_IsUnsupportedVersion | 4 | `components/version/UnsupportedVersionWrapper/UnsupportedVersionWrapper.tsx:24`<br>`lib/ubtConnect/unsupportedVersion.ts:7`<br>`lib/ubtConnect/unsupportedVersion.ts:17`<br>`lib/ubtConnect/unsupportedVersion.ts:30` |
| Get_OneSchoolGlobalDetails | 0 | - |
| Get_UI_CountryAddressInfo | 0 | - |
| HasAccessToRegion | 13 | `components/assemble/AssembleLocalityFilter/AssembleLocalityFilter.tsx:41`<br>`lib/assemble/actions.ts:137`<br>`lib/ubtConnect/staticEntities.ts:110`<br>`lib/ubtConnect/actions.ts:390`<br>`containers/HouseholdDetails/hooks/useHouseholdDetails.ts:220`<br>`pages/BrowseCountries/hooks/useBrowseCountries.ts:29` |
| IsHouseholdDetails_InAncestryModeView | 0 | - |
| Member_ContactDetails_Service | 0 | - |
| Member_EditDetails_Service | 9 | `api/member/repository.ts:29`<br>`api/member/types.ts:40`<br>`api/member/mapper.ts:11`<br>`api/member/mapper.ts:40`<br>`api/member/hooks.ts:63`<br>`api/schema.d.ts:2294` |
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

## Mock handlers and fixtures of the server actions

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: `app/src/pages/Profile/mocks.ts`).

- AddBookmark2: `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:39`
- DeleteBookmarkByBookmarkId2: **no mock handler found**
- GetHouseholdCoordinates: `mocks/fictional/ldm.ts:235`, `mocks/fictional/ldm.ts:493`
- GetHouseholdDetails: **no mock handler found**
- GetNotesByItemId: **no mock handler found**
- GetSubdivisionLocation_BySubdivisionId: **no mock handler found**
- Get_Core_LocalityTimezone: **no mock handler found**
- Get_OneSchoolGlobalDetails: **no mock handler found**
- Get_UI_CountryAddressInfo: **no mock handler found**
- Member_ContactDetails_Service: **no mock handler found**
- Member_EditDetails_Service: `app/src/pages/Profile/mocks.ts`
