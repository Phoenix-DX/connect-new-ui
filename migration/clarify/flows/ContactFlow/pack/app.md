# React code index of UI flow ContactFlow

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen ContactByEmailContacts
- **not built**: no folder `app/src/pages/ContactByEmailContacts` (check the board for the decision)

## Screen ContactByEmailLDMCoordinator
- route: `/UBTConnect/ContactByEmailLDMCoordinator` inputs=["In_AvatarURL: Text", "In_ContactName: Text", "In_EmailTo: Text", "In_Subject: Text", "In_EventDate: Date", "In_EventLocality: Text"]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/ContactByEmailLDMCoordinator/ContactByEmailLDMCoordinatorPage.tsx` (42 lines)
  - `app/src/pages/ContactByEmailLDMCoordinator/actions.ts` (30 lines)
  - `app/src/pages/ContactByEmailLDMCoordinator/config.ts` (17 lines)
  - `app/src/pages/ContactByEmailLDMCoordinator/hooks/useContactByEmailLDMCoordinatorSubmit.ts` (68 lines)
  - `app/src/pages/ContactByEmailLDMCoordinator/inputs.ts` (29 lines)
  - `app/src/pages/ContactByEmailLDMCoordinator/mocks.ts` (19 lines)
- tests: `app/src/pages/ContactByEmailLDMCoordinator/ContactByEmailLDMCoordinator.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/client**: `api/client/callAction.ts` (167, d2); +2 deeper
  - **api/image**: 1 files at depth 3-4
  - **api/member**: 1 files at depth 3-4
  - **api/message**: `api/message/index.ts` (45, d1), `api/message/hooks.ts` (196, d2), `api/message/keys.ts` (34, d2), `api/message/repository.ts` (232, d2), `api/message/types.ts` (283, d2); +2 deeper
  - **components/auth**: 2 files at depth 3-4
  - **components/contact**: `components/contact/ContactEmailForm/index.ts` (2, d1), `components/contact/ContactHeaderCard/index.ts` (1, d1), `components/contact/ContactEmailForm/types.ts` (28, d2), `components/contact/ContactHeaderCard/ContactHeaderCard.tsx` (63, d2); +1 deeper
  - **components/layout**: 5 files at depth 3-4
  - **components/ui**: 12 files at depth 3-4
  - **components/version**: 2 files at depth 3-4
  - **containers/DetailLayout**: `containers/DetailLayout/index.ts` (1, d1), `containers/DetailLayout/DetailLayoutContainer.tsx` (70, d2)
  - **legacy/os**: `legacy/os/os-exceptions.ts` (205, d2); +4 deeper
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/navigationEvent.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: 2 files at depth 3-4
  - **lib/ubtConnectLibrary**: 1 files at depth 3-4
  - **lib/ubtConnectUtils**: 3 files at depth 3-4
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/fictional**: 1 files at depth 3-4
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **mocks/store.ts**: `mocks/store.ts` (74, d1)
  - **platform/config**: 1 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2), `platform/feedback/index.ts` (27, d2); +13 deeper
  - **platform/flags**: 1 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/index.ts` (26, d1), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/flowState.ts` (140, d2), `platform/navigation/screenTransition.ts` (179, d2); +13 deeper
  - **platform/session**: `platform/session/cachedUserInfo.ts` (60, d1), `platform/session/mockUser.ts` (118, d2), `platform/session/types.ts` (20, d2); +8 deeper
  - **platform/storage**: 1 files at depth 3-4

## Screen ContactByEmailMember
- route: `/UBTConnect/ContactByEmailMember` inputs=["In_AvatarURL: Text", "In_ContactName: Text", "In_ContactSurname: Text", "In_ContactLocality: Text", "In_ContactCountry: Text", "In_EmailTo: Text", "In_EntityType: Text", "In_EntityId: LongInteger", "In_LDMEventDate: Date", "In_LDMEventLocality: Text", "In_AuditEventId: Text", "In_OrbitEventTitle: Text", "In_OrbitEventId: LongInteger", "In_OrbitMilestoneId: Text", "In_IsHousehold: Boolean", "In_HouseholdHeaderName: Text"]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/ContactByEmailMember/ContactByEmailMemberPage.tsx` (43 lines)
  - `app/src/pages/ContactByEmailMember/actions.ts` (34 lines)
  - `app/src/pages/ContactByEmailMember/config.ts` (14 lines)
  - `app/src/pages/ContactByEmailMember/hooks/useContactByEmailMemberSubmit.ts` (80 lines)
  - `app/src/pages/ContactByEmailMember/inputs.ts` (53 lines)
  - `app/src/pages/ContactByEmailMember/mocks.ts` (7 lines)
  - `app/src/pages/ContactByEmailMember/staticEntities.ts` (9 lines)
- tests: `app/src/pages/ContactByEmailMember/ContactByEmailMember.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/client**: 3 files at depth 3-4
  - **api/image**: 1 files at depth 3-4
  - **api/member**: 1 files at depth 3-4
  - **api/message**: `api/message/index.ts` (45, d1), `api/message/hooks.ts` (196, d2), `api/message/keys.ts` (34, d2), `api/message/repository.ts` (232, d2), `api/message/types.ts` (283, d2); +2 deeper
  - **components/auth**: 2 files at depth 3-4
  - **components/contact**: `components/contact/ContactEmailForm/index.ts` (2, d1), `components/contact/ContactPersonCard/index.ts` (1, d1), `components/contact/ContactEmailForm/types.ts` (28, d2), `components/contact/ContactPersonCard/ContactPersonCard.tsx` (91, d2); +1 deeper
  - **components/layout**: 5 files at depth 3-4
  - **components/ui**: 26 files at depth 3-4
  - **components/version**: 2 files at depth 3-4
  - **containers/DetailLayout**: `containers/DetailLayout/index.ts` (1, d1), `containers/DetailLayout/DetailLayoutContainer.tsx` (70, d2)
  - **legacy/os**: 5 files at depth 3-4
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/navigationEvent.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: 2 files at depth 3-4
  - **lib/ubtConnectLibrary**: 1 files at depth 3-4
  - **lib/ubtConnectUtils**: 3 files at depth 3-4
  - **mocks/fictional**: 1 files at depth 3-4
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2), `platform/feedback/index.ts` (27, d2); +13 deeper
  - **platform/flags**: 1 files at depth 3-4
  - **platform/log**: `platform/log/log.ts` (56, d2)
  - **platform/navigation**: `platform/navigation/index.ts` (26, d1), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/flowState.ts` (140, d2), `platform/navigation/screenTransition.ts` (179, d2); +13 deeper
  - **platform/session**: `platform/session/cachedUserInfo.ts` (60, d1), `platform/session/mockUser.ts` (118, d2), `platform/session/types.ts` (20, d2); +8 deeper
  - **platform/storage**: 1 files at depth 3-4

## Screen ContactByEmailOneSchoolGlobal
- route: `/UBTConnect/ContactByEmailOneSchoolGlobal` inputs=["In_EmailTo: Text", "In_ContactName: Text"]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/ContactByEmailOneSchoolGlobal/ContactByEmailOneSchoolGlobalPage.tsx` (42 lines)
  - `app/src/pages/ContactByEmailOneSchoolGlobal/actions.ts` (20 lines)
  - `app/src/pages/ContactByEmailOneSchoolGlobal/config.ts` (16 lines)
  - `app/src/pages/ContactByEmailOneSchoolGlobal/hooks/useContactByEmailOneSchoolGlobalSubmit.ts` (58 lines)
  - `app/src/pages/ContactByEmailOneSchoolGlobal/inputs.ts` (16 lines)
  - `app/src/pages/ContactByEmailOneSchoolGlobal/mocks.ts` (7 lines)
  - `app/src/pages/ContactByEmailOneSchoolGlobal/staticEntities.ts` (5 lines)
- tests: `app/src/pages/ContactByEmailOneSchoolGlobal/ContactByEmailOneSchoolGlobal.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/client**: 3 files at depth 3-4
  - **api/image**: 1 files at depth 3-4
  - **api/member**: 1 files at depth 3-4
  - **api/message**: `api/message/index.ts` (45, d1), `api/message/hooks.ts` (196, d2), `api/message/keys.ts` (34, d2), `api/message/repository.ts` (232, d2), `api/message/types.ts` (283, d2); +2 deeper
  - **components/auth**: 2 files at depth 3-4
  - **components/contact**: `components/contact/ContactEmailForm/index.ts` (2, d1), `components/contact/ContactHeaderCard/index.ts` (1, d1), `components/contact/ContactEmailForm/types.ts` (28, d2), `components/contact/ContactHeaderCard/ContactHeaderCard.tsx` (63, d2); +1 deeper
  - **components/layout**: 5 files at depth 3-4
  - **components/ui**: 12 files at depth 3-4
  - **components/version**: 2 files at depth 3-4
  - **containers/DetailLayout**: `containers/DetailLayout/index.ts` (1, d1), `containers/DetailLayout/DetailLayoutContainer.tsx` (70, d2)
  - **legacy/os**: 5 files at depth 3-4
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/navigationEvent.ts**: 1 files at depth 3-4
  - **lib/os-assets.manifest.json**: `lib/os-assets.manifest.json` (78, d2)
  - **lib/os-assets.ts**: `lib/os-assets.ts` (11, d1)
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: 2 files at depth 3-4
  - **lib/ubtConnectLibrary**: 1 files at depth 3-4
  - **lib/ubtConnectUtils**: 3 files at depth 3-4
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2), `platform/feedback/index.ts` (27, d2); +13 deeper
  - **platform/flags**: 1 files at depth 3-4
  - **platform/log**: `platform/log/log.ts` (56, d2)
  - **platform/navigation**: `platform/navigation/index.ts` (26, d1), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/flowState.ts` (140, d2), `platform/navigation/screenTransition.ts` (179, d2); +13 deeper
  - **platform/session**: 9 files at depth 3-4

## Screen ContactByEmailOrbitHelpdesk
- route: `/UBTConnect/ContactByEmailOrbitHelpdesk` inputs=["In_EventId: LongInteger", "In_MilestoneId: Text", "In_TargetMemberId: LongInteger", "In_Subject: Text", "In_MilestoneTitle: Text", "In_EventName: Text", "In_HostName: Text", "In_HostEmail: Text", "In_FormattedDateTime: Text"]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/ContactByEmailOrbitHelpdesk/ContactByEmailOrbitHelpdeskPage.tsx` (41 lines)
  - `app/src/pages/ContactByEmailOrbitHelpdesk/actions.ts` (25 lines)
  - `app/src/pages/ContactByEmailOrbitHelpdesk/config.ts` (18 lines)
  - `app/src/pages/ContactByEmailOrbitHelpdesk/hooks/useContactByEmailOrbitHelpdeskSubmit.ts` (69 lines)
  - `app/src/pages/ContactByEmailOrbitHelpdesk/inputs.ts` (34 lines)
  - `app/src/pages/ContactByEmailOrbitHelpdesk/mocks.ts` (24 lines)
- tests: `app/src/pages/ContactByEmailOrbitHelpdesk/ContactByEmailOrbitHelpdesk.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/client**: `api/client/callAction.ts` (167, d2); +2 deeper
  - **api/image**: 1 files at depth 3-4
  - **api/member**: 1 files at depth 3-4
  - **api/message**: `api/message/index.ts` (45, d1), `api/message/hooks.ts` (196, d2), `api/message/keys.ts` (34, d2), `api/message/repository.ts` (232, d2), `api/message/types.ts` (283, d2); +2 deeper
  - **components/auth**: 2 files at depth 3-4
  - **components/contact**: `components/contact/ContactEmailForm/index.ts` (2, d1), `components/contact/ContactHeaderCard/index.ts` (1, d1), `components/contact/ContactEmailForm/types.ts` (28, d2), `components/contact/ContactHeaderCard/ContactHeaderCard.tsx` (63, d2); +1 deeper
  - **components/layout**: 5 files at depth 3-4
  - **components/ui**: 12 files at depth 3-4
  - **components/version**: 2 files at depth 3-4
  - **containers/DetailLayout**: `containers/DetailLayout/index.ts` (1, d1), `containers/DetailLayout/DetailLayoutContainer.tsx` (70, d2)
  - **legacy/os**: `legacy/os/os-exceptions.ts` (205, d2); +4 deeper
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/navigationEvent.ts**: 1 files at depth 3-4
  - **lib/os-assets.manifest.json**: `lib/os-assets.manifest.json` (78, d2)
  - **lib/os-assets.ts**: `lib/os-assets.ts` (11, d1)
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: 2 files at depth 3-4
  - **lib/ubtConnectLibrary**: 1 files at depth 3-4
  - **lib/ubtConnectUtils**: 3 files at depth 3-4
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/fictional**: `mocks/fictional/orbit.ts` (1446, d1), `mocks/fictional/directory.ts` (442, d2)
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **mocks/store.ts**: `mocks/store.ts` (74, d1)
  - **platform/config**: 1 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2), `platform/feedback/index.ts` (27, d2); +13 deeper
  - **platform/flags**: 1 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/index.ts` (26, d1), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/flowState.ts` (140, d2), `platform/navigation/screenTransition.ts` (179, d2); +13 deeper
  - **platform/session**: `platform/session/cachedUserInfo.ts` (60, d1), `platform/session/mockUser.ts` (118, d2); +9 deeper
  - **platform/storage**: 1 files at depth 3-4

## Screen ContactByEmailOrbitHost
- route: `/UBTConnect/ContactByEmailOrbitHost` inputs=["In_Subject: Text", "In_MilestoneTitle: Text", "In_EventName: Text", "In_HostName: Text", "In_HostEmail: Text", "In_FormattedDateTime: Text", "In_ContactLocality: Text", "In_ContactCountry: Text", "In_AvatarURL: Text", "In_EntityType: Text", "In_EntityId: LongInteger", "In_Surname: Text"]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/ContactByEmailOrbitHost/ContactByEmailOrbitHostPage.tsx` (45 lines)
  - `app/src/pages/ContactByEmailOrbitHost/config.ts` (19 lines)
  - `app/src/pages/ContactByEmailOrbitHost/hooks/useContactByEmailOrbitHostSubmit.ts` (77 lines)
  - `app/src/pages/ContactByEmailOrbitHost/inputs.ts` (40 lines)
  - `app/src/pages/ContactByEmailOrbitHost/mocks.ts` (26 lines)
- tests: `app/src/pages/ContactByEmailOrbitHost/ContactByEmailOrbitHost.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/client**: `api/client/callAction.ts` (167, d2); +1 deeper
  - **api/image**: 1 files at depth 3-4
  - **api/member**: 1 files at depth 3-4
  - **api/message**: `api/message/index.ts` (45, d1), `api/message/hooks.ts` (196, d2), `api/message/keys.ts` (34, d2), `api/message/repository.ts` (232, d2), `api/message/types.ts` (283, d2); +2 deeper
  - **components/auth**: 2 files at depth 3-4
  - **components/contact**: `components/contact/ContactEmailForm/index.ts` (2, d1), `components/contact/ContactPersonCard/index.ts` (1, d1), `components/contact/ContactEmailForm/types.ts` (28, d2), `components/contact/ContactPersonCard/ContactPersonCard.tsx` (91, d2); +1 deeper
  - **components/layout**: 5 files at depth 3-4
  - **components/ui**: 26 files at depth 3-4
  - **components/version**: 2 files at depth 3-4
  - **containers/DetailLayout**: `containers/DetailLayout/index.ts` (1, d1), `containers/DetailLayout/DetailLayoutContainer.tsx` (70, d2)
  - **legacy/os**: `legacy/os/os-exceptions.ts` (205, d2); +6 deeper
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/navigationEvent.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: 2 files at depth 3-4
  - **lib/ubtConnectLibrary**: 1 files at depth 3-4
  - **lib/ubtConnectUtils**: 3 files at depth 3-4
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/fictional**: `mocks/fictional/orbit.ts` (1446, d1), `mocks/fictional/directory.ts` (442, d2)
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **mocks/store.ts**: `mocks/store.ts` (74, d1)
  - **platform/auth**: 1 files at depth 3-4
  - **platform/bootstrap**: 2 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/index.ts` (27, d1), `platform/feedback/FeedbackMessageHost.tsx` (57, d2), `platform/feedback/delayedMessage.ts` (34, d2), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2), `platform/feedback/exceptionMessages.ts` (126, d2), `platform/feedback/networkStatus.ts` (41, d2); +9 deeper
  - **platform/flags**: 1 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/index.ts` (26, d1), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/flowState.ts` (140, d2), `platform/navigation/screenTransition.ts` (179, d2); +13 deeper
  - **platform/session**: `platform/session/mockUser.ts` (118, d2); +12 deeper
  - **platform/settings**: 1 files at depth 3-4
  - **platform/storage**: 2 files at depth 3-4

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| SendContactEmail | 26 | `mocks/fictional/orbit.ts:1414`<br>`api/message/repository.ts:68`<br>`api/message/repository.ts:74`<br>`api/message/types.ts:35`<br>`api/message/mapper.ts:30`<br>`api/message/mapper.ts:101` |
| SendContactLDMCoordinatorEmail | 8 | `api/message/repository.ts:56`<br>`api/message/mapper.ts:28`<br>`api/message/hooks.ts:130`<br>`api/schema.d.ts:2311`<br>`api/openapi.yaml:4812`<br>`pages/ContactByEmailLDMCoordinator/mocks.ts:6` |
| SendContactMemberEmail | 12 | `components/contact/ContactEmailForm/mocks.ts:5`<br>`api/message/repository.ts:62`<br>`api/message/mapper.ts:28`<br>`api/message/hooks.ts:135`<br>`api/schema.d.ts:2328`<br>`api/openapi.yaml:4844` |

## Mock handlers and fixtures of the server actions

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: `app/src/pages/ContactByEmailLDMCoordinator/mocks.ts`, `app/src/pages/ContactByEmailMember/mocks.ts`, `app/src/pages/ContactByEmailOneSchoolGlobal/mocks.ts`, `app/src/pages/ContactByEmailOrbitHelpdesk/mocks.ts`, `app/src/pages/ContactByEmailOrbitHost/mocks.ts`).

- SendContactEmail: `mocks/fictional/orbit.ts:1414`, `app/src/pages/ContactByEmailOrbitHelpdesk/mocks.ts`, `app/src/pages/ContactByEmailOrbitHost/mocks.ts`
- SendContactLDMCoordinatorEmail: `app/src/pages/ContactByEmailLDMCoordinator/mocks.ts`
- SendContactMemberEmail: `app/src/pages/ContactByEmailMember/mocks.ts`, `app/src/pages/ContactByEmailOneSchoolGlobal/mocks.ts`
