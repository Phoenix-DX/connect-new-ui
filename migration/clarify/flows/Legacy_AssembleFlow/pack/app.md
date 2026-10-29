# React code index of UI flow Legacy_AssembleFlow

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen Assemble_BrowseByCountry
- route: `/UBTConnect/Assemble_BrowseByCountry` inputs=[]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/Assemble_BrowseByCountry/Assemble_BrowseByCountryPage.tsx` (52 lines)
  - `app/src/pages/Assemble_BrowseByCountry/components/AssembleFilterView.tsx` (195 lines)
  - `app/src/pages/Assemble_BrowseByCountry/hooks/assembleFilterState.ts` (117 lines)
  - `app/src/pages/Assemble_BrowseByCountry/hooks/useAssembleFilter.ts` (191 lines)
  - `app/src/pages/Assemble_BrowseByCountry/mocks.ts` (11 lines)
- tests: `app/src/pages/Assemble_BrowseByCountry/Assemble_BrowseByCountry.test.tsx`, `app/src/pages/Assemble_BrowseByCountry/components/AssembleFilterView.test.tsx`, `app/src/pages/Assemble_BrowseByCountry/hooks/assembleFilterState.test.ts`, `app/src/pages/Assemble_BrowseByCountry/hooks/useAssembleFilter.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: `api/bookmark/index.ts` (16, d2); +5 deeper
  - **api/client**: `api/client/callAction.ts` (167, d2); +1 deeper
  - **api/country**: 1 files at depth 3-4
  - **api/event**: 6 files at depth 3-4
  - **api/image**: 1 files at depth 3-4
  - **api/locality**: 1 files at depth 3-4
  - **api/member**: 6 files at depth 3-4
  - **api/message**: 1 files at depth 3-4
  - **api/schema.d.ts**: `api/schema.d.ts` (14986, d2)
  - **app**: 1 files at depth 3-4
  - **components/assemble**: `components/assemble/AssembleLocalityFilter/index.ts` (1, d1), `components/assemble/LocalityListDetail/index.ts` (2, d1), `components/assemble/AssembleLocalityFilter/AssembleLocalityFilter.tsx` (216, d2), `components/assemble/LocalityListDetail/LocalityListDetail.tsx` (106, d2), `components/assemble/LocalityListDetail/types.ts` (1, d2); +2 deeper
  - **components/auth**: 2 files at depth 3-4
  - **components/layout**: `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/LegacyLayout/index.ts` (1, d1), `components/layout/MenuIcon/index.ts` (1, d1), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/LegacyLayout/LegacyLayout.tsx` (93, d2), `components/layout/MenuIcon/MenuIcon.tsx` (44, d2); +4 deeper
  - **components/ui**: `components/ui/InputWithIcon/index.ts` (1, d1), `components/ui/Spinner/index.ts` (1, d1), `components/ui/InputWithIcon/InputWithIcon.tsx` (29, d2), `components/ui/Spinner/Spinner.tsx` (23, d2); +12 deeper
  - **components/version**: 2 files at depth 3-4
  - **legacy/os**: `legacy/os/os-exceptions.ts` (205, d2); +5 deeper
  - **lib/assemble**: `lib/assemble/actions.ts` (215, d1), `lib/assemble/staticEntities.ts` (34, d2), `lib/assemble/structures.ts` (17, d2)
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/legacyShared**: `lib/legacyShared/actions.ts` (471, d2); +2 deeper
  - **lib/os-wire.ts**: `lib/os-wire.ts` (12, d2)
  - **lib/osDateTime.ts**: `lib/osDateTime.ts` (67, d2)
  - **lib/ubtConnect**: `lib/ubtConnect/staticEntities.ts` (205, d2); +1 deeper
  - **lib/ubtConnectLibrary**: 1 files at depth 3-4
  - **lib/ubtConnectUtils**: 3 files at depth 3-4
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/fictional**: `mocks/fictional/assemble.ts` (313, d1); +1 deeper
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2); +8 deeper
  - **platform/flags**: 1 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/BackNavigationHandler/index.ts` (2, d1), `platform/navigation/index.ts` (26, d1), `platform/navigation/BackNavigationHandler/BackNavigationHandler.tsx` (28, d2), `platform/navigation/BackNavigationHandler/types.ts` (1, d2), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/flowState.ts` (140, d2), `platform/navigation/screenTransition.ts` (179, d2); +16 deeper
  - **platform/session**: `platform/session/userInfo.ts` (46, d2); +11 deeper
  - **platform/storage**: `platform/storage/localEntities/index.ts` (130, d2); +9 deeper

## Screen AssembleDetail
- route: `/UBTConnect/AssembleDetail` inputs=["EventId: Text", "SeriesId: Text", "Start: DateTime", "AssembleEventTypeTile: Text"]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/AssembleDetail/AssembleDetailPage.tsx` (152 lines)
  - `app/src/pages/AssembleDetail/components/AssembleDetailView.tsx` (45 lines)
  - `app/src/pages/AssembleDetail/components/AssembleEventDetail.tsx` (199 lines)
  - `app/src/pages/AssembleDetail/components/AssembleEventDetail_AttendeeSubdivision.tsx` (169 lines)
  - `app/src/pages/AssembleDetail/components/AssembleEventDetail_AttendeeSubdivisionList_Skelet.tsx` (36 lines)
  - `app/src/pages/AssembleDetail/components/AssembleEventDetail_Contact.tsx` (77 lines)
  - `app/src/pages/AssembleDetail/components/AssembleEventDetail_ContactList.tsx` (43 lines)
  - `app/src/pages/AssembleDetail/components/AssembleEventDetail_LocalitiesList.tsx` (71 lines)
  - `app/src/pages/AssembleDetail/components/AssembleEventDetail_LocalitySubdivisionList.tsx` (97 lines)
  - `app/src/pages/AssembleDetail/components/AssembleEventDetail_Section.tsx` (52 lines)
  - `app/src/pages/AssembleDetail/components/AssembleEventDetail__Error.tsx` (44 lines)
  - `app/src/pages/AssembleDetail/components/BookmarkNoteAddEdit.tsx` (68 lines)
  - `app/src/pages/AssembleDetail/components/ContextMenu.tsx` (46 lines)
  - `app/src/pages/AssembleDetail/components/FocusScrollAnchorOnBack.tsx` (31 lines)
  - `app/src/pages/AssembleDetail/components/NC_Result_Item__Image__Skeleton.tsx` (60 lines)
  - `app/src/pages/AssembleDetail/components/NC_Result_Item__Tag.tsx` (18 lines)
  - `app/src/pages/AssembleDetail/components/ShowMoreShowLessContainer.tsx` (127 lines)
  - `app/src/pages/AssembleDetail/components/actions.ts` (48 lines)
  - `app/src/pages/AssembleDetail/hooks/assembleDetailState.ts` (50 lines)
  - `app/src/pages/AssembleDetail/hooks/assembleEventContacts.ts` (170 lines)
  - `app/src/pages/AssembleDetail/hooks/assembleEventDetailState.ts` (48 lines)
  - `app/src/pages/AssembleDetail/hooks/attendeeSubdivisionState.ts` (144 lines)
  - `app/src/pages/AssembleDetail/hooks/blockLifecycle.ts` (31 lines)
  - `app/src/pages/AssembleDetail/hooks/useAssembleDetail.ts` (50 lines)
  - `app/src/pages/AssembleDetail/hooks/useAssembleEventContact.ts` (160 lines)
  - `app/src/pages/AssembleDetail/hooks/useAssembleEventContactList.ts` (51 lines)
  - `app/src/pages/AssembleDetail/hooks/useAssembleEventDetail.ts` (93 lines)
  - `app/src/pages/AssembleDetail/hooks/useAttendeeSubdivision.ts` (179 lines)
  - `app/src/pages/AssembleDetail/hooks/useLocalitySubdivisionList.ts` (53 lines)
  - `app/src/pages/AssembleDetail/inputs.ts` (20 lines)
  - `app/src/pages/AssembleDetail/mocks.ts` (66 lines)
- tests: `app/src/pages/AssembleDetail/AssembleDetail.test.tsx`, `app/src/pages/AssembleDetail/hooks/assembleDetailState.test.ts`, `app/src/pages/AssembleDetail/hooks/assembleEventContacts.test.ts`, `app/src/pages/AssembleDetail/hooks/assembleEventDetailState.test.ts`, `app/src/pages/AssembleDetail/hooks/attendeeSubdivisionState.test.ts`, `app/src/pages/AssembleDetail/hooks/useAssembleEventContactList.test.tsx`, `app/src/pages/AssembleDetail/hooks/useAssembleEventDetail.test.tsx`, `app/src/pages/AssembleDetail/hooks/useAttendeeSubdivision.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: 6 files at depth 3-4
  - **api/client**: `api/client/callAction.ts` (167, d2); +1 deeper
  - **api/country**: 1 files at depth 3-4
  - **api/event**: `api/event/index.ts` (65, d1), `api/event/hooks.ts` (295, d2), `api/event/keys.ts` (52, d2), `api/event/repository.ts` (300, d2), `api/event/types.ts` (1001, d2); +1 deeper
  - **api/image**: 1 files at depth 3-4
  - **api/locality**: 5 files at depth 3-4
  - **api/member**: 6 files at depth 3-4
  - **api/message**: 1 files at depth 3-4
  - **api/schema.d.ts**: `api/schema.d.ts` (14986, d2)
  - **api/update**: `api/update/index.ts` (13, d2); +5 deeper
  - **components/assemble**: `components/assemble/AssembleSummarySkeleton/index.ts` (1, d1), `components/assemble/AssembleSummarySkeleton/AssembleSummarySkeleton.tsx` (49, d2); +5 deeper
  - **components/auth**: 1 files at depth 3-4
  - **components/bookmark**: `components/bookmark/ItemOptionsMenu/index.ts` (1, d1), `components/bookmark/ItemOptionsMenu/ItemOptionsMenu.tsx` (92, d2)
  - **components/contact**: `components/contact/ContactPopupByPhone/types.ts` (1, d1), `components/contact/ContactByMessage/index.ts` (2, d2), `components/contact/ContactPopupByPhone/index.ts` (2, d2), `components/contact/PersonContactOptions/index.ts` (1, d2); +6 deeper
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/LegacyLayout/index.ts` (1, d1), `components/layout/MenuIcon/index.ts` (1, d1), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/LegacyLayout/LegacyLayout.tsx` (93, d2), `components/layout/MenuIcon/MenuIcon.tsx` (44, d2); +7 deeper
  - **components/share**: `components/share/ShareableObject/index.ts` (2, d2); +2 deeper
  - **components/ui**: `components/ui/CardTextSkeleton/index.ts` (1, d1), `components/ui/Dialog/index.ts` (10, d1), `components/ui/LegacyInputCounter/index.ts` (1, d1), `components/ui/NewConnectContent/index.ts` (1, d1), `components/ui/CardTextSkeleton/CardTextSkeleton.tsx` (20, d2), `components/ui/Dialog/ChoiceDialog.tsx` (73, d2), `components/ui/Dialog/NavigationDialog.tsx` (178, d2), `components/ui/Dialog/dialogTriggers.ts` (44, d2), `components/ui/LegacyInputCounter/LegacyInputCounter.tsx` (47, d2), `components/ui/NewConnectContent/NewConnectContent.tsx` (22, d2), `components/ui/ResultItemBadge/index.ts` (1, d2), `components/ui/ResultItemMedia/index.ts` (1, d2), `components/ui/os/OSList/index.ts` (2, d2); +31 deeper
  - **components/version**: 1 files at depth 3-4
  - **containers/AssembleSummaryCard**: `containers/AssembleSummaryCard/index.ts` (1, d1), `containers/AssembleSummaryCard/AssembleSummaryCardContainer.tsx` (82, d2)
  - **containers/ShareSheet**: `containers/ShareSheet/index.ts` (2, d2); +5 deeper
  - **legacy/os**: `legacy/os/os-exceptions.ts` (205, d2); +4 deeper
  - **lib/assemble**: `lib/assemble/actions.ts` (215, d2); +2 deeper
  - **lib/cssText.ts**: 1 files at depth 3-4
  - **lib/geography**: `lib/geography/structures.ts` (28, d2)
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/leaflet**: `lib/leaflet/json.ts` (265, d2), `lib/leaflet/structures.ts` (192, d2); +2 deeper
  - **lib/legacyShared**: `lib/legacyShared/actions.ts` (471, d2); +2 deeper
  - **lib/navigationEvent.ts**: 1 files at depth 3-4
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: `lib/os-wire.ts` (12, d1)
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: `lib/ubtConnect/actions.ts` (544, d1), `lib/ubtConnect/structures.ts` (285, d2); +2 deeper
  - **lib/ubtConnectLibrary**: `lib/ubtConnectLibrary/actions.ts` (916, d2); +2 deeper
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/structures.ts` (86, d2); +2 deeper
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/fictional**: `mocks/fictional/assemble.ts` (313, d1), `mocks/fictional/directory.ts` (442, d1)
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d1)
  - **mocks/scenarioParams.ts**: `mocks/scenarioParams.ts` (17, d2)
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/feedbackMessageAutoClose.ts` (92, d2); +15 deeper
  - **platform/flags**: 6 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/BackNavigationHandler/index.ts` (2, d1), `platform/navigation/index.ts` (26, d1), `platform/navigation/BackNavigationHandler/BackNavigationHandler.tsx` (28, d2), `platform/navigation/BackNavigationHandler/types.ts` (1, d2), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/ScrollAnchor/index.ts` (1, d2), `platform/navigation/flowState.ts` (140, d2), `platform/navigation/screenTransition.ts` (179, d2); +15 deeper
  - **platform/session**: 10 files at depth 3-4
  - **platform/storage**: `platform/storage/localEntities/index.ts` (130, d2); +8 deeper

## Screen AssembleEvents
- route: `/UBTConnect/AssembleEvents` inputs=["SubdivisionId: LongInteger", "ShowBackNavigation: Boolean", "IsUserSubdivision: Boolean"]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/AssembleEvents/AssembleEventsPage.tsx` (137 lines)
  - `app/src/pages/AssembleEvents/components/AssembleEventsView.tsx` (99 lines)
  - `app/src/pages/AssembleEvents/components/AssembleSummary_FilterDrawer.tsx` (227 lines)
  - `app/src/pages/AssembleEvents/components/AssembleSummary_List.tsx` (165 lines)
  - `app/src/pages/AssembleEvents/components/AssembleSummary_List__Header.tsx` (83 lines)
  - `app/src/pages/AssembleEvents/components/AssembleSummary_SkeletonList.tsx` (68 lines)
  - `app/src/pages/AssembleEvents/components/Assemble_FilterSheet.tsx` (181 lines)
  - `app/src/pages/AssembleEvents/components/HorizontalTags.tsx` (80 lines)
  - `app/src/pages/AssembleEvents/components/InBlock_ActionMenu.tsx` (57 lines)
  - `app/src/pages/AssembleEvents/components/NC_ErrorScreen.tsx` (33 lines)
  - `app/src/pages/AssembleEvents/components/actions.ts` (69 lines)
  - `app/src/pages/AssembleEvents/hooks/assembleFilterSheetState.ts` (85 lines)
  - `app/src/pages/AssembleEvents/hooks/assembleSummaryListState.ts` (206 lines)
  - `app/src/pages/AssembleEvents/hooks/useAssembleEvents.ts` (78 lines)
  - `app/src/pages/AssembleEvents/hooks/useAssembleFilterSheet.ts` (161 lines)
  - `app/src/pages/AssembleEvents/hooks/useAssembleSummaryList.ts` (203 lines)
  - `app/src/pages/AssembleEvents/hooks/userSubdivision.ts` (19 lines)
  - `app/src/pages/AssembleEvents/inputs.ts` (24 lines)
  - `app/src/pages/AssembleEvents/mocks.ts` (52 lines)
- tests: `app/src/pages/AssembleEvents/AssembleEvents.test.tsx`, `app/src/pages/AssembleEvents/components/AssembleEventsView.test.tsx`, `app/src/pages/AssembleEvents/components/AssembleSummary_List.test.tsx`, `app/src/pages/AssembleEvents/components/Assemble_FilterSheet.test.tsx`, `app/src/pages/AssembleEvents/hooks/assembleFilterSheetState.test.ts`, `app/src/pages/AssembleEvents/hooks/assembleSummaryListState.test.ts`, `app/src/pages/AssembleEvents/hooks/useAssembleEvents.test.tsx`, `app/src/pages/AssembleEvents/hooks/useAssembleFilterSheet.test.tsx`, `app/src/pages/AssembleEvents/hooks/useAssembleSummaryList.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: `api/bookmark/index.ts` (16, d2), `api/bookmark/keys.ts` (22, d2); +4 deeper
  - **api/client**: `api/client/callAction.ts` (167, d2); +2 deeper
  - **api/country**: 5 files at depth 3-4
  - **api/event**: 6 files at depth 3-4
  - **api/image**: 3 files at depth 3-4
  - **api/locality**: 5 files at depth 3-4
  - **api/member**: `api/member/index.ts` (18, d2); +6 deeper
  - **api/message**: 5 files at depth 3-4
  - **api/schema.d.ts**: `api/schema.d.ts` (14986, d2)
  - **api/update**: 1 files at depth 3-4
  - **components/assemble**: `components/assemble/AssembleLocalityFilter/index.ts` (1, d2), `components/assemble/LocalityListDetail/index.ts` (2, d2); +8 deeper
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/LegacyLayout/index.ts` (1, d1), `components/layout/MenuIcon/index.ts` (1, d1), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/LegacyLayout/LegacyLayout.tsx` (93, d2), `components/layout/MenuIcon/MenuIcon.tsx` (44, d2); +8 deeper
  - **components/ui**: `components/ui/ConnectBottomSheet/index.ts` (2, d1), `components/ui/ConnectBottomSheet/ConnectBottomSheet.tsx` (220, d2), `components/ui/ConnectBottomSheet/types.ts` (1, d2), `components/ui/InputWithIcon/index.ts` (1, d2), `components/ui/Spinner/index.ts` (1, d2); +37 deeper
  - **containers/AssembleSummaryCard**: `containers/AssembleSummaryCard/index.ts` (1, d2); +1 deeper
  - **legacy/os**: `legacy/os/os-exceptions.ts` (205, d2); +3 deeper
  - **lib/assemble**: `lib/assemble/actions.ts` (215, d1), `lib/assemble/staticEntities.ts` (34, d2), `lib/assemble/structures.ts` (17, d2)
  - **lib/geography**: 1 files at depth 3-4
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/leaflet**: 2 files at depth 3-4
  - **lib/legacyShared**: `lib/legacyShared/actions.ts` (471, d1), `lib/legacyShared/staticEntities.ts` (38, d2), `lib/legacyShared/structures.ts` (56, d2)
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: `lib/os-wire.ts` (12, d1)
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: `lib/ubtConnect/staticEntities.ts` (205, d2); +2 deeper
  - **lib/ubtConnectLibrary**: 3 files at depth 3-4
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/actions.ts` (383, d2), `lib/ubtConnectUtils/staticEntities.ts` (190, d2); +1 deeper
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/fictional**: `mocks/fictional/assemble.ts` (313, d1); +1 deeper
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d1)
  - **mocks/scenarioParams.ts**: `mocks/scenarioParams.ts` (17, d2)
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: 13 files at depth 3-4
  - **platform/flags**: 7 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/ScrollAnchor/index.ts` (1, d2); +12 deeper
  - **platform/session**: `platform/session/userInfo.ts` (46, d2); +9 deeper
  - **platform/settings**: 1 files at depth 3-4
  - **platform/storage**: `platform/storage/localEntities/index.ts` (130, d2); +9 deeper

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| Directory_Updates_RefreshBottomBarCount | 4 | `platform/session/testSession.ts:79`<br>`components/layout/BottomBar/BottomBar.tsx:66`<br>`components/layout/BottomBar/BottomBar.tsx:75`<br>`lib/ubtConnect/actions.ts:62` |
| ExitApplicationForWebViewUpdate | 0 | - |
| GetNameAndSurname_ByFullName | 5 | `lib/jsUtils.ts:59`<br>`lib/ubtConnect/actions.ts:198`<br>`pages/LDM_MyEvents_V2/LDM_MyEvents_V2Page.tsx:19`<br>`pages/LDM_EventDetail_V2/LDM_EventDetail_V2Page.tsx:24`<br>`pages/AssembleDetail/AssembleDetailPage.tsx:39` |
| GetNotesByItemId | 0 | - |
| GetURLFromEventDataURL | 1 | `platform/session/resume.ts:13` |
| Get_IsUnsupportedSystem | 3 | `platform/feedback/dialogs/BlockPinUnlock.tsx:17`<br>`lib/ubtConnect/unsupportedVersion.ts:29`<br>`pages/Login/hooks/useLogin.ts:16` |
| Get_IsUnsupportedVersion | 4 | `components/version/UnsupportedVersionWrapper/UnsupportedVersionWrapper.tsx:24`<br>`lib/ubtConnect/unsupportedVersion.ts:7`<br>`lib/ubtConnect/unsupportedVersion.ts:17`<br>`lib/ubtConnect/unsupportedVersion.ts:30` |
| Get_UI_UpdateItems_UnreadCount_All | 6 | `platform/session/testSession.ts:78`<br>`lib/ubtConnect/actions.ts:63`<br>`api/update/repository.ts:70`<br>`api/update/mapper.ts:24`<br>`api/schema.d.ts:2277`<br>`api/openapi.yaml:4751` |
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

## Mock handlers and fixtures of the server actions

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: `app/src/pages/Assemble_BrowseByCountry/mocks.ts`, `app/src/pages/AssembleDetail/mocks.ts`, `app/src/pages/AssembleEvents/mocks.ts`).

- GetNotesByItemId: **no mock handler found**
- Get_UI_UpdateItems_UnreadCount_All: **no mock handler found**
