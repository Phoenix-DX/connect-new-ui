# React code index of UI flow Directory_Search

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen Search
- route: `/UBTConnect/Search` inputs=[]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/Search/SearchPage.tsx` (13 lines)
  - `app/src/pages/Search/components/RecentSearch.tsx` (187 lines)
  - `app/src/pages/Search/components/SearchResult_Section.tsx` (104 lines)
  - `app/src/pages/Search/components/SearchView.tsx` (273 lines)
  - `app/src/pages/Search/components/Search_BirthdayOptions.tsx` (47 lines)
  - `app/src/pages/Search/components/staticEntities.ts` (24 lines)
  - `app/src/pages/Search/hooks/searchState.ts` (195 lines)
  - `app/src/pages/Search/hooks/useSearch.ts` (392 lines)
  - `app/src/pages/Search/mocks.ts` (50 lines)
- tests: `app/src/pages/Search/Search.test.tsx`, `app/src/pages/Search/hooks/searchState.test.ts`, `app/src/pages/Search/hooks/useSearch.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: 1 files at depth 3-4
  - **api/client**: 2 files at depth 3-4
  - **api/image**: 1 files at depth 3-4
  - **api/member**: 1 files at depth 3-4
  - **api/search**: `api/search/index.ts` (5, d1), `api/search/hooks.ts` (17, d2), `api/search/keys.ts` (5, d2), `api/search/repository.ts` (33, d2), `api/search/types.ts` (59, d2); +1 deeper
  - **api/update**: 1 files at depth 3-4
  - **app**: 1 files at depth 3-4
  - **components/auth**: 2 files at depth 3-4
  - **components/filter**: `components/filter/FilterSheet/index.ts` (2, d1), `components/filter/FilterSheetIcon/index.ts` (1, d1), `components/filter/FilterSheet/FilterSheet.tsx` (325, d2), `components/filter/FilterSheet/types.ts` (31, d2), `components/filter/FilterSheetIcon/FilterSheetIcon.tsx` (57, d2); +9 deeper
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2); +9 deeper
  - **components/search**: `components/search/SearchResultItem/index.ts` (2, d2); +2 deeper
  - **components/ui**: `components/ui/IconText/index.ts` (2, d1), `components/ui/Input/index.ts` (2, d1), `components/ui/Gallery/index.ts` (1, d2), `components/ui/HorizontalTagList/index.ts` (2, d2), `components/ui/IconText/IconText.tsx` (70, d2), `components/ui/IconText/types.ts` (1, d2), `components/ui/Input/Input.tsx` (221, d2), `components/ui/Input/types.ts` (1, d2), `components/ui/SectionSeparator/index.ts` (1, d2); +43 deeper
  - **components/version**: 2 files at depth 3-4
  - **containers/DetailLayout**: `containers/DetailLayout/index.ts` (1, d1), `containers/DetailLayout/DetailLayoutContainer.tsx` (70, d2)
  - **containers/FilterSheet**: `containers/FilterSheet/index.ts` (1, d1), `containers/FilterSheet/FilterSheetContainer.tsx` (72, d2)
  - **legacy/os**: `legacy/os/clientVarNames.ts` (39, d2), `legacy/os/os-exceptions.ts` (205, d2); +10 deeper
  - **lib/geography**: 1 files at depth 3-4
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/leaflet**: 2 files at depth 3-4
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: 4 files at depth 3-4
  - **lib/ubtConnectLibrary**: 3 files at depth 3-4
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/staticEntities.ts` (190, d1); +2 deeper
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/fictional**: `mocks/fictional/directory.ts` (442, d1)
  - **mocks/fixtures.ts**: `mocks/fixtures.ts` (83, d1)
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2); +7 deeper
  - **platform/flags**: `platform/flags/flags.ts` (19, d1), `platform/flags/overrides.ts` (70, d2), `platform/flags/types.ts` (7, d2), `platform/flags/useFlag.ts` (9, d2); +4 deeper
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/index.ts` (26, d1), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/flowState.ts` (140, d2), `platform/navigation/paths.ts` (27, d2), `platform/navigation/screenTransition.ts` (179, d2); +18 deeper
  - **platform/session**: `platform/session/session.ts` (295, d1), `platform/session/clientVars.ts` (78, d2), `platform/session/machine.ts` (133, d2); +13 deeper
  - **platform/settings**: `platform/settings/index.ts` (11, d2); +2 deeper
  - **platform/storage**: `platform/storage/localEntities/index.ts` (130, d2), `platform/storage/storage.ts` (62, d2); +8 deeper

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| App_CommonFilter_CheckCountry | 1 | `lib/ubtConnect/actions.ts:136` |
| App_CommonFilter_DefineOptionNames | 1 | `lib/ubtConnect/actions.ts:122` |
| Connect_Search | 0 | - |
| Directory_Updates_RefreshBottomBarCount | 4 | `platform/session/testSession.ts:79`<br>`components/layout/BottomBar/BottomBar.tsx:66`<br>`components/layout/BottomBar/BottomBar.tsx:75`<br>`lib/ubtConnect/actions.ts:62` |
| ExitApplicationForWebViewUpdate | 0 | - |
| GetURLFromEventDataURL | 1 | `platform/session/resume.ts:13` |
| GetUserInformation_Wrapper_Assign | 2 | `platform/session/UserInfoCache/UserInfoCache.tsx:16`<br>`lib/ubtConnect/actions.ts:115` |
| Get_IsUnsupportedSystem | 3 | `platform/feedback/dialogs/BlockPinUnlock.tsx:17`<br>`lib/ubtConnect/unsupportedVersion.ts:29`<br>`pages/Login/hooks/useLogin.ts:16` |
| Get_IsUnsupportedVersion | 4 | `components/version/UnsupportedVersionWrapper/UnsupportedVersionWrapper.tsx:24`<br>`lib/ubtConnect/unsupportedVersion.ts:7`<br>`lib/ubtConnect/unsupportedVersion.ts:17`<br>`lib/ubtConnect/unsupportedVersion.ts:30` |
| Get_SearchResultsVisibilityStatus | 0 | - |
| Get_UI_UpdateItems_UnreadCount_All | 6 | `platform/session/testSession.ts:78`<br>`lib/ubtConnect/actions.ts:63`<br>`api/update/repository.ts:70`<br>`api/update/mapper.ts:24`<br>`api/schema.d.ts:2277`<br>`api/openapi.yaml:4751` |
| ListAppend | 10 | `components/note/NotesSheet/NotesSheet.tsx:103`<br>`lib/legacyShared/actions.ts:438`<br>`lib/ubtConnect/actions.ts:95`<br>`lib/ubtConnect/actions.ts:346`<br>`lib/ubtConnect/actions.ts:479`<br>`pages/SupperMeeting_Carousel/hooks/supperMeetingCarouselActions.ts:31` |
| ListFilter | 13 | `components/assemble/AssembleSubdivisionFilter/AssembleSubdivisionFilter.tsx:32`<br>`lib/assemble/actions.ts:112`<br>`lib/legacyShared/actions.ts:438`<br>`pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:117`<br>`pages/Profile/hooks/profileState.ts:111`<br>`pages/HomeFeed/hooks/useFeedUpdates.ts:89` |
| OfflineDataSync | 11 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18`<br>`platform/device/OfflineDataSync/OfflineDataSync.tsx:22`<br>`platform/device/OfflineDataSync/index.ts:1`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:22`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:25`<br>`components/layout/CommonUiLayout/CommonUiLayout.tsx:22` |
| OfflineDataSyncConfiguration | 1 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18` |
| OpenGooglePlay_Chrome | 0 | - |
| OpenGooglePlay_UBTConnect | 0 | - |
| OpenGooglePlay_WebView | 0 | - |
| ScrollTop | 6 | `lib/ubtConnect/actions.ts:73`<br>`pages/Locality_Details/hooks/useLocalityDetails.ts:149`<br>`pages/Notes/hooks/useNotes.ts:29`<br>`pages/Assemble_BrowseByCountry/hooks/useAssembleFilter.ts:73`<br>`pages/Notifications/hooks/useNotifications.ts:143`<br>`pages/Updates_SingleList/hooks/useUpdatesSingleList.ts:207` |
| SetResumeLoginLink | 2 | `platform/navigation/OpenLinkOnResume/OpenLinkOnResume.tsx:12`<br>`platform/session/resume.ts:7` |
| Try_GetIsSupportedVersion | 0 | - |
| Upgrade_UBTConnect | 0 | - |
| Upgrade_WebView | 0 | - |
| ValidateSearchPhoneNumber | 2 | `pages/Search/hooks/searchState.ts:133`<br>`pages/Search/hooks/useSearch.ts:265` |

## Mock handlers and fixtures of the server actions

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: `app/src/pages/Search/mocks.ts`).

- Connect_Search: **no mock handler found**
- Get_SearchResultsVisibilityStatus: **no mock handler found**
- Get_UI_UpdateItems_UnreadCount_All: **no mock handler found**
- ListAppend: **no mock handler found**
- ListFilter: **no mock handler found**
