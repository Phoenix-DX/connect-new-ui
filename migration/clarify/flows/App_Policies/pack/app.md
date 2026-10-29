# React code index of UI flow App_Policies

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen AcceptPendingPolicies
- route: `/UBTConnect/AcceptPendingPolicies` inputs=[]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx` (62 lines)
  - `app/src/pages/AcceptPendingPolicies/actions.ts` (66 lines)
  - `app/src/pages/AcceptPendingPolicies/components/PendingPoliciesForm/PendingPoliciesForm.tsx` (171 lines)
  - `app/src/pages/AcceptPendingPolicies/components/PoliciesHeader/PoliciesHeader.tsx` (42 lines)
  - `app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts` (71 lines)
  - `app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts` (140 lines)
  - `app/src/pages/AcceptPendingPolicies/mocks.ts` (72 lines)
  - `app/src/pages/AcceptPendingPolicies/staticEntities.ts` (20 lines)
- tests: `app/src/pages/AcceptPendingPolicies/AcceptPendingPolicies.test.tsx`, `app/src/pages/AcceptPendingPolicies/actions.test.ts`, `app/src/pages/AcceptPendingPolicies/components/PendingPoliciesForm/PendingPoliciesForm.test.tsx`, `app/src/pages/AcceptPendingPolicies/components/PoliciesHeader/PoliciesHeader.test.tsx`, `app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/client**: `api/client/callAction.ts` (167, d2); +1 deeper
  - **api/member**: `api/member/index.ts` (18, d2); +6 deeper
  - **api/policy**: `api/policy/index.ts` (4, d1), `api/policy/hooks.ts` (20, d2), `api/policy/keys.ts` (9, d2), `api/policy/repository.ts` (30, d2), `api/policy/types.ts` (33, d2); +1 deeper
  - **app**: 1 files at depth 3-4
  - **components/layout**: `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/LoginLayout/index.ts` (1, d1), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/LoginLayout/LoginLayout.tsx` (67, d2); +2 deeper
  - **components/ui**: `components/ui/ActionButton/index.ts` (2, d1), `components/ui/ColumnsTwo/index.ts` (2, d1), `components/ui/CustomContainer/index.ts` (2, d1), `components/ui/CustomText/index.ts` (2, d1), `components/ui/FixedFooter/index.ts` (1, d1), `components/ui/Separator/index.ts` (1, d1), `components/ui/ActionButton/ActionButton.tsx` (63, d2), `components/ui/ActionButton/types.ts` (1, d2), `components/ui/ColumnsTwo/ColumnsTwo.tsx` (54, d2), `components/ui/ColumnsTwo/types.ts` (1, d2), `components/ui/CustomContainer/CustomContainer.tsx` (55, d2), `components/ui/CustomContainer/types.ts` (11, d2), `components/ui/CustomText/CustomText.tsx` (68, d2), `components/ui/CustomText/types.ts` (1, d2), `components/ui/FixedFooter/FixedFooter.tsx` (47, d2), `components/ui/Separator/Separator.tsx` (42, d2); +22 deeper
  - **legacy/os**: `legacy/os/os-exceptions.ts` (205, d2); +2 deeper
  - **lib/cssText.ts**: 1 files at depth 3-4
  - **lib/jsUtils.ts**: `lib/jsUtils.ts` (81, d1)
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnectLibrary**: `lib/ubtConnectLibrary/staticEntities.ts` (314, d1); +2 deeper
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/fictional**: 1 files at depth 3-4
  - **mocks/fixtures.ts**: `mocks/fixtures.ts` (83, d1)
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **mocks/store.ts**: `mocks/store.ts` (74, d1)
  - **platform/auth**: 1 files at depth 3-4
  - **platform/bootstrap**: 2 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/index.ts` (27, d1), `platform/feedback/FeedbackMessageHost.tsx` (57, d2), `platform/feedback/delayedMessage.ts` (34, d2), `platform/feedback/exceptionMessages.ts` (126, d2), `platform/feedback/networkStatus.ts` (41, d2); +18 deeper
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/index.ts` (26, d2); +25 deeper
  - **platform/session**: `platform/session/cachedUserInfo.ts` (60, d1), `platform/session/userInfo.ts` (46, d1), `platform/session/mockUser.ts` (118, d2), `platform/session/session.ts` (295, d2); +9 deeper
  - **platform/settings**: 3 files at depth 3-4
  - **platform/storage**: 2 files at depth 3-4

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| AcceptPolicies | 4 | `api/schema.d.ts:1495`<br>`api/openapi.yaml:3043`<br>`pages/AcceptPendingPolicies/mocks.ts:14`<br>`pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:117` |
| ExitApplicationForWebViewUpdate | 0 | - |
| GetPoliciesToAccept | 0 | - |
| GetSVGMetric | 3 | `pages/AcceptPendingPolicies/actions.ts:1`<br>`pages/AcceptPendingPolicies/actions.ts:4`<br>`pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts:39` |
| GetURLFromEventDataURL | 1 | `platform/session/resume.ts:13` |
| Get_IsUnsupportedSystem | 3 | `platform/feedback/dialogs/BlockPinUnlock.tsx:17`<br>`lib/ubtConnect/unsupportedVersion.ts:29`<br>`pages/Login/hooks/useLogin.ts:16` |
| Get_IsUnsupportedVersion | 4 | `components/version/UnsupportedVersionWrapper/UnsupportedVersionWrapper.tsx:24`<br>`lib/ubtConnect/unsupportedVersion.ts:7`<br>`lib/ubtConnect/unsupportedVersion.ts:17`<br>`lib/ubtConnect/unsupportedVersion.ts:30` |
| ListAppend | 10 | `components/note/NotesSheet/NotesSheet.tsx:103`<br>`lib/legacyShared/actions.ts:438`<br>`lib/ubtConnect/actions.ts:95`<br>`lib/ubtConnect/actions.ts:346`<br>`lib/ubtConnect/actions.ts:479`<br>`pages/SupperMeeting_Carousel/hooks/supperMeetingCarouselActions.ts:31` |
| OfflineDataSync | 11 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18`<br>`platform/device/OfflineDataSync/OfflineDataSync.tsx:22`<br>`platform/device/OfflineDataSync/index.ts:1`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:22`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:25`<br>`components/layout/CommonUiLayout/CommonUiLayout.tsx:22` |
| OfflineDataSyncConfiguration | 1 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18` |
| OpenGooglePlay_Chrome | 0 | - |
| OpenGooglePlay_UBTConnect | 0 | - |
| OpenGooglePlay_WebView | 0 | - |
| SetResumeLoginLink | 2 | `platform/navigation/OpenLinkOnResume/OpenLinkOnResume.tsx:12`<br>`platform/session/resume.ts:7` |
| ShowCommunicationExceptionMessage | 4 | `platform/feedback/networkStatus.ts:10`<br>`platform/feedback/exceptionMessages.ts:7`<br>`platform/feedback/exceptionMessages.ts:16`<br>`legacy/os/exceptions.ts:57` |
| Try_GetIsSupportedVersion | 0 | - |
| Upgrade_UBTConnect | 0 | - |
| Upgrade_WebView | 0 | - |

## Mock handlers and fixtures of the server actions

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: `app/src/pages/AcceptPendingPolicies/mocks.ts`).

- AcceptPolicies: `app/src/pages/AcceptPendingPolicies/mocks.ts`
- GetPoliciesToAccept: **no mock handler found**
- ListAppend: **no mock handler found**
