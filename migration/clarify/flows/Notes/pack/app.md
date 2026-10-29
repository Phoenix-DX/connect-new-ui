# React code index of UI flow Notes

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen Notes
- route: `/UBTConnect/Notes` inputs=[]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/Notes/NotesPage.tsx` (123 lines)
  - `app/src/pages/Notes/components/FilterSheet_Icon_Label.tsx` (95 lines)
  - `app/src/pages/Notes/components/Horizontal_Filter_TagList.tsx` (101 lines)
  - `app/src/pages/Notes/components/ItemCardActions.tsx` (32 lines)
  - `app/src/pages/Notes/components/ItemCard_ActionBar.tsx` (58 lines)
  - `app/src/pages/Notes/components/ItemCard_WithNotes.tsx` (201 lines)
  - `app/src/pages/Notes/components/NoteCard_Item.tsx` (113 lines)
  - `app/src/pages/Notes/components/NoteCard_List.tsx` (126 lines)
  - `app/src/pages/Notes/components/Notes_FilterSheet.tsx` (83 lines)
  - `app/src/pages/Notes/components/ids.ts` (4 lines)
  - `app/src/pages/Notes/components/staticEntities.ts` (18 lines)
  - `app/src/pages/Notes/hooks/notesState.ts` (106 lines)
  - `app/src/pages/Notes/hooks/useNotes.ts` (212 lines)
  - `app/src/pages/Notes/mocks.ts` (102 lines)
- tests: `app/src/pages/Notes/Notes.test.tsx`, `app/src/pages/Notes/hooks/notesState.test.ts`, `app/src/pages/Notes/hooks/useNotes.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: `api/bookmark/index.ts` (16, d2); +5 deeper
  - **api/client**: 3 files at depth 3-4
  - **api/image**: 3 files at depth 3-4
  - **api/locality**: 1 files at depth 3-4
  - **api/member**: 6 files at depth 3-4
  - **api/note**: `api/note/index.ts` (4, d2); +5 deeper
  - **api/schema.d.ts**: 1 files at depth 3-4
  - **api/update**: `api/update/index.ts` (13, d2); +5 deeper
  - **components/filter**: 3 files at depth 3-4
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/MainLayoutFixedTitle/index.ts` (1, d1), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/MainLayoutFixedTitle/MainLayoutFixedTitle.tsx` (166, d2); +6 deeper
  - **components/note**: `components/note/NotesSheet/index.ts` (2, d2); +5 deeper
  - **components/notification**: `components/notification/NotificationIcon/index.ts` (1, d1), `components/notification/NotificationIcon/NotificationIcon.tsx` (45, d2); +2 deeper
  - **components/ui**: `components/ui/EmptyState/index.ts` (1, d1), `components/ui/Input/index.ts` (2, d1), `components/ui/Skeleton/index.ts` (1, d1), `components/ui/TagToggle/index.ts` (2, d1), `components/ui/os/OSBlock.tsx` (10, d1), `components/ui/EmptyState/EmptyState.tsx` (73, d2), `components/ui/Input/Input.tsx` (221, d2), `components/ui/Input/types.ts` (1, d2), `components/ui/Skeleton/Skeleton.tsx` (40, d2), `components/ui/TagToggle/TagToggle.tsx` (73, d2), `components/ui/TagToggle/types.ts` (1, d2); +30 deeper
  - **containers/FilterSheet**: `containers/FilterSheet/index.ts` (1, d1), `containers/FilterSheet/FilterSheetContainer.tsx` (72, d2)
  - **containers/NoteListActions**: `containers/NoteListActions/mocks.ts` (48, d1); +1 deeper
  - **legacy/os**: `legacy/os/exceptions.ts` (84, d2); +9 deeper
  - **lib/geography**: `lib/geography/structures.ts` (28, d2)
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/leaflet**: `lib/leaflet/json.ts` (265, d2), `lib/leaflet/structures.ts` (192, d2); +2 deeper
  - **lib/os-assets.manifest.json**: 1 files at depth 3-4
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: `lib/os-wire.ts` (12, d1)
  - **lib/osDateTime.ts**: `lib/osDateTime.ts` (67, d2)
  - **lib/ubtConnect**: `lib/ubtConnect/actions.ts` (544, d1), `lib/ubtConnect/staticEntities.ts` (205, d1), `lib/ubtConnect/structures.ts` (285, d2)
  - **lib/ubtConnectLibrary**: `lib/ubtConnectLibrary/actions.ts` (916, d2), `lib/ubtConnectLibrary/structures.ts` (335, d2); +1 deeper
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/actions.ts` (383, d2); +2 deeper
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d2)
  - **mocks/fictional**: 1 files at depth 3-4
  - **mocks/scenario.ts**: 1 files at depth 3-4
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **mocks/store.ts**: `mocks/store.ts` (74, d2)
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/flowErrors.ts` (17, d1); +21 deeper
  - **platform/flags**: 7 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: 14 files at depth 3-4
  - **platform/session**: `platform/session/useNotificationIcon.ts` (47, d1), `platform/session/userInfo.ts` (46, d2); +13 deeper
  - **platform/settings**: 1 files at depth 3-4
  - **platform/storage**: `platform/storage/localEntities/index.ts` (130, d2); +9 deeper

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| AddBookmark2 | 11 | `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:39`<br>`lib/ubtConnect/staticEntities.ts:145`<br>`lib/ubtConnect/actions.ts:270`<br>`api/bookmark/repository.ts:108`<br>`api/bookmark/types.ts:200`<br>`api/bookmark/mapper.ts:35` |
| App_CommonFilter_CheckCountry | 1 | `lib/ubtConnect/actions.ts:136` |
| App_CommonFilter_DefineOptionNames | 1 | `lib/ubtConnect/actions.ts:122` |
| DeleteBookmarkByBookmarkId2 | 7 | `lib/ubtConnect/actions.ts:267`<br>`api/bookmark/repository.ts:119`<br>`api/bookmark/types.ts:186`<br>`api/schema.d.ts:2226`<br>`api/openapi.yaml:4570`<br>`containers/EntityDetailsActions/mocks.ts:20` |
| Directory_Updates_RefreshBottomBarCount | 4 | `platform/session/testSession.ts:79`<br>`components/layout/BottomBar/BottomBar.tsx:66`<br>`components/layout/BottomBar/BottomBar.tsx:75`<br>`lib/ubtConnect/actions.ts:62` |
| ExitApplicationForWebViewUpdate | 0 | - |
| GetNotes | 3 | `pages/Notes/mocks.ts:20`<br>`pages/Notes/hooks/notesState.ts:10`<br>`pages/Notes/hooks/notesState.ts:85` |
| GetNotes_FilterYear | 4 | `platform/storage/localEntities/localNotes.ts:13`<br>`pages/Notes/hooks/useNotes.ts:60`<br>`pages/Notes/hooks/useNotes.ts:74`<br>`pages/Notes/hooks/useNotes.ts:144` |
| GetNotes_Pills | 5 | `platform/storage/localEntities/localNotes.ts:14`<br>`api/note/types.ts:100`<br>`pages/Notes/hooks/notesState.ts:74`<br>`pages/Notes/hooks/useNotes.ts:51`<br>`pages/Notes/hooks/useNotes.ts:115` |
| GetURLFromEventDataURL | 1 | `platform/session/resume.ts:13` |
| GetUserInformation_Wrapper_Assign | 2 | `platform/session/UserInfoCache/UserInfoCache.tsx:16`<br>`lib/ubtConnect/actions.ts:115` |
| Get_IsUnsupportedSystem | 3 | `platform/feedback/dialogs/BlockPinUnlock.tsx:17`<br>`lib/ubtConnect/unsupportedVersion.ts:29`<br>`pages/Login/hooks/useLogin.ts:16` |
| Get_IsUnsupportedVersion | 4 | `components/version/UnsupportedVersionWrapper/UnsupportedVersionWrapper.tsx:24`<br>`lib/ubtConnect/unsupportedVersion.ts:7`<br>`lib/ubtConnect/unsupportedVersion.ts:17`<br>`lib/ubtConnect/unsupportedVersion.ts:30` |
| Get_RecentYears | 0 | - |
| Get_UI_UpdateItems_UnreadCount_All | 6 | `platform/session/testSession.ts:78`<br>`lib/ubtConnect/actions.ts:63`<br>`api/update/repository.ts:70`<br>`api/update/mapper.ts:24`<br>`api/schema.d.ts:2277`<br>`api/openapi.yaml:4751` |
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

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: `app/src/pages/Notes/mocks.ts`).

- AddBookmark2: `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:39`
- DeleteBookmarkByBookmarkId2: **no mock handler found**
- GetNotes: `app/src/pages/Notes/mocks.ts`
- Get_UI_UpdateItems_UnreadCount_All: **no mock handler found**
