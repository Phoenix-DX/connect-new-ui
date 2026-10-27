# React code index of UI flow Legacy_LDMEventsFlow_V2

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen LDM_Email_V2
- route: `/UBTConnect/LDM_Email_V2` inputs=["EventHostId: LongInteger", "In_EventId: LongInteger", "In_IsMessageGuest: Boolean", "In_IsContactOrganiser: Boolean", "EventDate: Date", "EventLocality: Text"]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/LDM_Email_V2/LDM_Email_V2Page.tsx` (36 lines)
  - `app/src/pages/LDM_Email_V2/components/LdmEventEmailView.tsx` (331 lines)
  - `app/src/pages/LDM_Email_V2/components/actions.ts` (39 lines)
  - `app/src/pages/LDM_Email_V2/hooks/ldmEventEmailState.ts` (217 lines)
  - `app/src/pages/LDM_Email_V2/hooks/useLdmEventEmail.ts` (200 lines)
  - `app/src/pages/LDM_Email_V2/inputs.ts` (28 lines)
  - `app/src/pages/LDM_Email_V2/mocks.ts` (49 lines)
- tests: `app/src/pages/LDM_Email_V2/LDM_Email_V2.test.tsx`, `app/src/pages/LDM_Email_V2/components/LdmEventEmailView.test.tsx`, `app/src/pages/LDM_Email_V2/hooks/ldmEventEmailState.test.ts`, `app/src/pages/LDM_Email_V2/hooks/useLdmEventEmail.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: 2 files at depth 3-4
  - **api/client**: `api/client/callAction.ts` (167, d2); +2 deeper
  - **api/country**: 1 files at depth 3-4
  - **api/image**: 1 files at depth 3-4
  - **api/locality**: 5 files at depth 3-4
  - **api/member**: 1 files at depth 3-4
  - **api/message**: `api/message/index.ts` (45, d1), `api/message/hooks.ts` (196, d2), `api/message/keys.ts` (34, d2), `api/message/repository.ts` (232, d2), `api/message/types.ts` (283, d2); +2 deeper
  - **api/schema.d.ts**: `api/schema.d.ts` (14986, d2)
  - **api/update**: 1 files at depth 3-4
  - **app**: 1 files at depth 3-4
  - **components/contact**: `components/contact/ContactPopupByPhone/index.ts` (2, d1), `components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx` (75, d2), `components/contact/ContactPopupByPhone/types.ts` (1, d2); +3 deeper
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/LegacyLayout/index.ts` (1, d1), `components/layout/MenuIcon/index.ts` (1, d1), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/LegacyLayout/LegacyLayout.tsx` (93, d2), `components/layout/MenuIcon/MenuIcon.tsx` (44, d2); +8 deeper
  - **components/orbit**: `components/orbit/OrbitErrorScreen/index.ts` (1, d1), `components/orbit/OrbitErrorScreen/OrbitErrorScreen.tsx` (55, d2)
  - **components/ui**: `components/ui/Dialog/index.ts` (10, d1), `components/ui/LegacyInputCounter/index.ts` (1, d1), `components/ui/NetworkWarning/index.ts` (1, d1), `components/ui/os/OSValidation/index.ts` (28, d1), `components/ui/Dialog/ChoiceDialog.tsx` (73, d2), `components/ui/Dialog/NavigationDialog.tsx` (178, d2), `components/ui/Dialog/dialogTriggers.ts` (44, d2), `components/ui/LegacyInputCounter/LegacyInputCounter.tsx` (47, d2), `components/ui/NetworkWarning/NetworkWarning.tsx` (45, d2), `components/ui/os/OSValidation/OSValidation.tsx` (193, d2), `components/ui/os/OSValidation/validationService.ts` (309, d2); +21 deeper
  - **legacy/os**: `legacy/os/os-exceptions.ts` (205, d2); +4 deeper
  - **lib/cssText.ts**: 1 files at depth 3-4
  - **lib/geography**: 1 files at depth 3-4
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/leaflet**: 2 files at depth 3-4
  - **lib/legacyShared**: `lib/legacyShared/staticEntities.ts` (38, d1); +2 deeper
  - **lib/navigationEvent.ts**: `lib/navigationEvent.ts` (30, d1)
  - **lib/os-assets.manifest.json**: `lib/os-assets.manifest.json` (78, d2)
  - **lib/os-assets.ts**: `lib/os-assets.ts` (11, d1)
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: 3 files at depth 3-4
  - **lib/ubtConnectLibrary**: 3 files at depth 3-4
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/structures.ts` (86, d2); +2 deeper
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/fictional**: `mocks/fictional/ldm.ts` (504, d1), `mocks/fictional/directory.ts` (442, d2)
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **mocks/store.ts**: `mocks/store.ts` (74, d1)
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: 21 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/index.ts` (26, d1), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/flowState.ts` (140, d2), `platform/navigation/screenTransition.ts` (179, d2); +19 deeper
  - **platform/session**: `platform/session/cachedUserInfo.ts` (60, d1), `platform/session/mockUser.ts` (118, d2), `platform/session/session.ts` (295, d2), `platform/session/types.ts` (20, d2); +7 deeper
  - **platform/settings**: 3 files at depth 3-4
  - **platform/storage**: 2 files at depth 3-4

## Screen LDM_EventDetail_V2
- route: `/UBTConnect/LDM_EventDetail_V2` inputs=["EventHostId: LongInteger", "EventId: LongInteger"]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/LDM_EventDetail_V2/LDM_EventDetail_V2Page.tsx` (87 lines)
  - `app/src/pages/LDM_EventDetail_V2/components/EventDetail_Banner.tsx` (133 lines)
  - `app/src/pages/LDM_EventDetail_V2/components/EventDetail_HostCard.tsx` (153 lines)
  - `app/src/pages/LDM_EventDetail_V2/components/EventDetail_ListItem.tsx` (181 lines)
  - `app/src/pages/LDM_EventDetail_V2/components/EventDetail_Section.tsx` (44 lines)
  - `app/src/pages/LDM_EventDetail_V2/components/EventDetail_SpecialNeeds_ListItem.tsx` (58 lines)
  - `app/src/pages/LDM_EventDetail_V2/components/EventsDetail_Content.tsx` (47 lines)
  - `app/src/pages/LDM_EventDetail_V2/components/LdmEventDetailView.tsx` (288 lines)
  - `app/src/pages/LDM_EventDetail_V2/components/actions.ts` (39 lines)
  - `app/src/pages/LDM_EventDetail_V2/hooks/ldmEventDetailState.ts` (210 lines)
  - `app/src/pages/LDM_EventDetail_V2/hooks/useLdmEventDetail.ts` (272 lines)
  - `app/src/pages/LDM_EventDetail_V2/inputs.ts` (13 lines)
  - `app/src/pages/LDM_EventDetail_V2/mocks.ts` (109 lines)
- tests: `app/src/pages/LDM_EventDetail_V2/LDM_EventDetail_V2.test.tsx`, `app/src/pages/LDM_EventDetail_V2/hooks/ldmEventDetailState.test.ts`, `app/src/pages/LDM_EventDetail_V2/hooks/useLdmEventDetail.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: `api/bookmark/index.ts` (16, d2); +5 deeper
  - **api/client**: `api/client/callAction.ts` (167, d2); +2 deeper
  - **api/country**: 1 files at depth 3-4
  - **api/event**: `api/event/index.ts` (65, d1), `api/event/hooks.ts` (295, d2), `api/event/keys.ts` (52, d2), `api/event/repository.ts` (300, d2), `api/event/types.ts` (1001, d2); +1 deeper
  - **api/household**: `api/household/index.ts` (17, d2); +5 deeper
  - **api/image**: 3 files at depth 3-4
  - **api/locality**: 5 files at depth 3-4
  - **api/member**: 6 files at depth 3-4
  - **api/message**: 1 files at depth 3-4
  - **api/schema.d.ts**: `api/schema.d.ts` (14986, d2)
  - **api/update**: `api/update/index.ts` (13, d2); +5 deeper
  - **components/auth**: 2 files at depth 3-4
  - **components/contact**: `components/contact/ContactByMessage/index.ts` (2, d1), `components/contact/ContactPopupByPhone/index.ts` (2, d1), `components/contact/ContactByMessage/ContactByMessage.tsx` (69, d2), `components/contact/ContactByMessage/types.ts` (1, d2), `components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx` (75, d2), `components/contact/ContactPopupByPhone/types.ts` (1, d2), `components/contact/PersonContactOptions/index.ts` (1, d2); +7 deeper
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/LegacyLayout/index.ts` (1, d1), `components/layout/MenuIcon/index.ts` (1, d1), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/LegacyLayout/LegacyLayout.tsx` (93, d2), `components/layout/MenuIcon/MenuIcon.tsx` (44, d2); +8 deeper
  - **components/orbit**: `components/orbit/EventDetailSubSection/index.ts` (1, d1), `components/orbit/OrbitErrorScreen/index.ts` (1, d1), `components/orbit/EventDetailSubSection/EventDetailSubSection.tsx` (38, d2), `components/orbit/OrbitErrorScreen/OrbitErrorScreen.tsx` (55, d2)
  - **components/ui**: `components/ui/os/OSList/index.ts` (2, d1), `components/ui/os/OSList/OSList.tsx` (232, d2), `components/ui/os/OSList/OSListItem.tsx` (129, d2); +21 deeper
  - **components/version**: 2 files at depth 3-4
  - **legacy/os**: `legacy/os/exceptions.ts` (84, d2), `legacy/os/os-exceptions.ts` (205, d2); +5 deeper
  - **lib/cssText.ts**: `lib/cssText.ts` (19, d2)
  - **lib/geography**: `lib/geography/structures.ts` (28, d2)
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/leaflet**: `lib/leaflet/json.ts` (265, d2), `lib/leaflet/structures.ts` (192, d2); +2 deeper
  - **lib/legacyShared**: `lib/legacyShared/actions.ts` (471, d2); +2 deeper
  - **lib/orbit**: `lib/orbit/actions.ts` (330, d2); +2 deeper
  - **lib/os-assets.manifest.json**: `lib/os-assets.manifest.json` (78, d2)
  - **lib/os-assets.ts**: `lib/os-assets.ts` (11, d1)
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: `lib/ubtConnect/actions.ts` (544, d1), `lib/ubtConnect/staticEntities.ts` (205, d2), `lib/ubtConnect/structures.ts` (285, d2); +1 deeper
  - **lib/ubtConnectLibrary**: `lib/ubtConnectLibrary/actions.ts` (916, d2); +2 deeper
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/actions.ts` (383, d2), `lib/ubtConnectUtils/structures.ts` (86, d2); +1 deeper
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/fictional**: `mocks/fictional/ldm.ts` (504, d1), `mocks/fictional/directory.ts` (442, d2)
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/flowErrors.ts` (17, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2); +12 deeper
  - **platform/flags**: 8 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: 14 files at depth 3-4
  - **platform/session**: 14 files at depth 3-4
  - **platform/settings**: 1 files at depth 3-4
  - **platform/storage**: `platform/storage/localEntities/index.ts` (130, d2); +9 deeper

## Screen LDM_MyEvents_V2
- route: `/UBTConnect/LDM_MyEvents_V2` inputs=[]; meta: `{ flag: 'C2NewLDM', when: false, to: 'LDM_MyEvents' }`
- page files:
  - `app/src/pages/LDM_MyEvents_V2/LDM_MyEvents_V2Page.tsx` (64 lines)
  - `app/src/pages/LDM_MyEvents_V2/components/EventCard_Box.tsx` (36 lines)
  - `app/src/pages/LDM_MyEvents_V2/components/EventCard_Guests.tsx` (222 lines)
  - `app/src/pages/LDM_MyEvents_V2/components/EventCard_Info_V2.tsx` (61 lines)
  - `app/src/pages/LDM_MyEvents_V2/components/EventCard_V2.tsx` (106 lines)
  - `app/src/pages/LDM_MyEvents_V2/components/LdmMyEventsView.tsx` (127 lines)
  - `app/src/pages/LDM_MyEvents_V2/components/MyEvents_MyTimelineFilterButton.tsx` (78 lines)
  - `app/src/pages/LDM_MyEvents_V2/components/MyTimeline_V2.tsx` (145 lines)
  - `app/src/pages/LDM_MyEvents_V2/components/OverlappingImages.tsx` (86 lines)
  - `app/src/pages/LDM_MyEvents_V2/components/actions.ts` (39 lines)
  - `app/src/pages/LDM_MyEvents_V2/hooks/ldmMyEventsState.ts` (196 lines)
  - `app/src/pages/LDM_MyEvents_V2/hooks/useLdmMyEvents.ts` (201 lines)
  - `app/src/pages/LDM_MyEvents_V2/hooks/useMyTimelineFilterButton.ts` (63 lines)
  - `app/src/pages/LDM_MyEvents_V2/mocks.ts` (34 lines)
- tests: `app/src/pages/LDM_MyEvents_V2/LDM_MyEvents_V2.test.tsx`, `app/src/pages/LDM_MyEvents_V2/hooks/ldmMyEventsState.test.ts`, `app/src/pages/LDM_MyEvents_V2/hooks/useLdmMyEvents.test.tsx`, `app/src/pages/LDM_MyEvents_V2/hooks/useMyTimelineFilterButton.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: `api/bookmark/index.ts` (16, d2); +5 deeper
  - **api/client**: `api/client/callAction.ts` (167, d2); +1 deeper
  - **api/country**: 1 files at depth 3-4
  - **api/event**: 1 files at depth 3-4
  - **api/image**: 1 files at depth 3-4
  - **api/locality**: `api/locality/index.ts` (30, d1), `api/locality/hooks.ts` (120, d2), `api/locality/repository.ts` (203, d2); +3 deeper
  - **api/member**: 1 files at depth 3-4
  - **api/message**: 1 files at depth 3-4
  - **api/schema.d.ts**: `api/schema.d.ts` (14986, d2)
  - **api/update**: `api/update/index.ts` (13, d2); +5 deeper
  - **app**: 1 files at depth 3-4
  - **components/auth**: 2 files at depth 3-4
  - **components/contact**: `components/contact/ContactByMessage/index.ts` (2, d1), `components/contact/ContactPopupByPhone/index.ts` (2, d1), `components/contact/ContactByMessage/ContactByMessage.tsx` (69, d2), `components/contact/ContactByMessage/types.ts` (1, d2), `components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx` (75, d2), `components/contact/ContactPopupByPhone/types.ts` (1, d2); +8 deeper
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/LegacyLayout/index.ts` (1, d1), `components/layout/MenuIcon/index.ts` (1, d1), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/LegacyLayout/LegacyLayout.tsx` (93, d2), `components/layout/MenuIcon/MenuIcon.tsx` (44, d2); +8 deeper
  - **components/orbit**: `components/orbit/EventDetailSubSection/index.ts` (1, d1), `components/orbit/OrbitErrorScreen/index.ts` (1, d1), `components/orbit/EventDetailSubSection/EventDetailSubSection.tsx` (38, d2), `components/orbit/OrbitErrorScreen/OrbitErrorScreen.tsx` (55, d2)
  - **components/ui**: `components/ui/NetworkWarning/index.ts` (1, d1), `components/ui/os/OSPopup/index.ts` (1, d1), `components/ui/NetworkWarning/NetworkWarning.tsx` (45, d2), `components/ui/os/OSPopup/usePopupWidget.ts` (100, d2); +23 deeper
  - **components/version**: 2 files at depth 3-4
  - **legacy/os**: `legacy/os/exceptions.ts` (84, d2), `legacy/os/os-exceptions.ts` (205, d2); +5 deeper
  - **lib/cssText.ts**: 1 files at depth 3-4
  - **lib/geography**: `lib/geography/structures.ts` (28, d2)
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/leaflet**: `lib/leaflet/json.ts` (265, d2), `lib/leaflet/structures.ts` (192, d2); +2 deeper
  - **lib/legacyShared**: 3 files at depth 3-4
  - **lib/orbit**: `lib/orbit/actions.ts` (330, d1), `lib/orbit/staticEntities.ts` (95, d2); +1 deeper
  - **lib/os-assets.manifest.json**: 1 files at depth 3-4
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: `lib/osDateTime.ts` (67, d2)
  - **lib/ubtConnect**: `lib/ubtConnect/actions.ts` (544, d1), `lib/ubtConnect/staticEntities.ts` (205, d2), `lib/ubtConnect/structures.ts` (285, d2); +1 deeper
  - **lib/ubtConnectLibrary**: `lib/ubtConnectLibrary/actions.ts` (916, d2); +2 deeper
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/structures.ts` (86, d2); +2 deeper
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/fictional**: `mocks/fictional/ldm.ts` (504, d1), `mocks/fictional/directory.ts` (442, d2)
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/flowErrors.ts` (17, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2); +12 deeper
  - **platform/flags**: 6 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/index.ts` (26, d1), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/flowState.ts` (140, d2); +20 deeper
  - **platform/session**: `platform/session/session.ts` (295, d2); +13 deeper
  - **platform/settings**: 3 files at depth 3-4
  - **platform/storage**: `platform/storage/localEntities/index.ts` (130, d2), `platform/storage/localEntities/orbitStaticEntities.ts` (715, d2); +8 deeper

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| Directory_Updates_RefreshBottomBarCount | 4 | `platform/session/testSession.ts:79`<br>`components/layout/BottomBar/BottomBar.tsx:66`<br>`components/layout/BottomBar/BottomBar.tsx:75`<br>`lib/ubtConnect/actions.ts:62` |
| ExitApplicationForWebViewUpdate | 0 | - |
| GetNameAndSurname_ByFullName | 5 | `lib/jsUtils.ts:59`<br>`lib/ubtConnect/actions.ts:198`<br>`pages/LDM_MyEvents_V2/LDM_MyEvents_V2Page.tsx:19`<br>`pages/LDM_EventDetail_V2/LDM_EventDetail_V2Page.tsx:24`<br>`pages/AssembleDetail/AssembleDetailPage.tsx:39` |
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

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: `app/src/pages/LDM_Email_V2/mocks.ts`, `app/src/pages/LDM_EventDetail_V2/mocks.ts`, `app/src/pages/LDM_MyEvents_V2/mocks.ts`).

- Get_UI_UpdateItems_UnreadCount_All: **no mock handler found**
