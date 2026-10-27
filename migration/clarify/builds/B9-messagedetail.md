# B9 MessageDetail: build note (2026-10-27)

Group B9 builds four major findings of `migration/clarify/flows/Legacy_MyNotificationsFlow/report.md` §5: F1, F2, F3
and F6. The user's decisions are Q1 (a), Q3 (a) and Q4 (a) (`migration/clarify/decisions.md`). The orchestrator
ordered F1. No commit.

Short names of the TST files:

- SBMD: `Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc.js`.
- MD: `UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.mvc.js`.
- EXT: `Connect2_LegacyShared.Share_UI.ShareObjectDetail_ExtendedShare.mvc.js`.
- ACV: `Connect2_LegacyShared.Widgets.AdaptiveCardViewer.mvc.js`.
- NDB: `Connect2_LegacyShared.Widgets.NotificationDetailBlock.mvc.js`.
- C2LS: `Connect2_LegacyShared.controller.js`.

## F1 (major): the shared item of a Sharing message

TST evidence:

- SBMD view :385-526: Placeholder MessageDetails. GetHasExtendedShare (True on TST) gives ShareObjectDetail_ExtendedShare
  (`b1-$b5`), else ShareObjectDetail (`b1-$b6`).
- ShareId is the current (first) row of the template parameters. HasAccessToDeceasedHousehold is GetHasDeceasedProfileAccess.
- MD :349-351: the extended block gets the screen's empty Placeholder_FeedItem2. Feed_Embeded(FeedItemId) goes only to
  the other block.
- EXT model, view :120-426, controller :446-740: CustomContainer, EmptyShareDetailCard_ExtendedFlow, SkeletonSection
  with Update_ListItem or ShareableObject_Generic, FreeSubscriptionAlert.
- EXT flows: OnInitialize, GetShare at start and on OnParametersChanged, GetShareOnAfterFetch, OnClickShareDetail.
- MD :897-975 Handler_NavigateTo_ShareObjectDetail; MD :1113 Handler_SubscriptionDenied (App_Subscription_ShowUpgradePopUp).

Files changed:

- `app/src/pages/MessageDetail/components/ShareObjectDetail_ExtendedShare.tsx:1-96` (new).
- `app/src/pages/MessageDetail/hooks/useShareObjectDetail.ts:1-96` and `hooks/shareObjectDetailState.ts:1-150` (new).
- `app/src/pages/MessageDetail/components/EmptyShareDetailCard_ExtendedFlow.tsx:1-50` (new).
- `app/src/pages/MessageDetail/components/FreeSubscriptionActionDialog.tsx` (new, a copy, see "Notes for the orchestrator").
- `app/src/pages/MessageDetail/MessageDetailPage.tsx:107-150`: the share block, Handler_NavigateTo_ShareObjectDetail, SubscriptionDenied.
- `app/src/pages/MessageDetail/actions.ts:150-185`: AuditShareViewEvent, GetConnectEntity_ByShareType.
- `app/src/api/share/types.ts`, `mapper.ts`, `repository.ts`, `index.ts`: `fetchSharedObjectDetail` (DataActionGetShare).
- `app/src/pages/MessageDetail/mocks.ts`: DataActionGetShare (a fictional shared household for ShareId 9001), seed 5965304.

What was built:

- The extended block with its view, ids (`b1-b5-$b1` to `b1-b5-$b5`, `b1-b5-FreeSubscriptionAlert`) and flows.
- OnClickShareDetail: "This shared item is no longer available." (Info), "This profile is not available!" (Error),
  SubscriptionDenied, or GoToObjectDetail. An Update opens its HouseholderId.
- The dead branch "Has Access to Deceased Profile?" (EXT :528-541) tests the same flag twice. It can not run, so it is not ported; a comment says so.
- The screen switch: Household, Update, My Household, OneSchool Global, Supper Meeting, Feed.

Tests: `ShareObjectDetail_ExtendedShare.test.tsx` (6), `MessageDetail.test.tsx` "Sharing" (MSW, opens HouseholdDetails).

Proposed verdicts:

| Row | Element | Verdict | Reason |
|---|---|---|---|
| 097 | Handler_NavigateTo_ShareObjectDetail | match | |
| 130 | Placeholder MessageDetails | partial | The TST branch is built; the ShareObjectDetail branch (flag False) shows a NotCaptured marker |
| 098 | Handler_SetFeedItemId + Handler_SubscriptionDenied | partial | SubscriptionDenied matches; only ShareObjectDetail raises SetFeedItemId |
| 084 | Local FeedItemId, Placeholder_FeedItem | open | Only the ShareObjectDetail branch uses them |
| 133 | The 11 block events | partial | 10 of 11 are wired; SetFeedItemId is open |

## F2 (major): the Orbit and Assemble action button (decision Q1 (a))

TST evidence:

- SBMD view :566-640: ViewAssembleEvent "View Meeting" and ViewOrbitEvent "View Event" or "Go to Host Survey", class
  `btn btn-primary full-width ignore-cap`, with their visible conditions.
- SBMD :1210-1378 OnClick_ViewOrbitEvent; SBMD :1415-1506 OnClick_ViewAssembleEvent; SBMD :704-792 the two Get_Orbit* actions.
- SBMD :1113-1135 BuildAssembleNotificationContent; C2LS :671-900 its body.
- MD :574-888: the four navigation handlers with In_FromNotification True.

Files changed:

- `app/src/pages/MessageDetail/components/MessageDetailView.tsx:55-100`: the two buttons in Placeholder_ActionButton.
- `app/src/pages/MessageDetail/hooks/useMessageDetail.ts:270-330`: onClickViewOrbitEvent, onClickViewAssembleEvent.
- `app/src/pages/MessageDetail/hooks/useMessageDetail.ts:160-176`: BuildAssembleNotificationContent for Assemble.
- `app/src/pages/MessageDetail/hooks/messageDetailState.ts`: the access messages, `orbitButtonText`, `textToLongInteger`.
- `app/src/pages/MessageDetail/actions.ts`: the flag helpers, `assembleEventParameters`, `buildAssembleNotificationContent`.
- `app/src/pages/MessageDetail/MessageDetailPage.tsx:40-75`: Handler_NavigateTo_OrbitEventDetails, _OrbitMilestone,
  _OrbitHostSurvey, _AssembleDetail.
- `app/src/api/message/types.ts`, `mapper.ts`, `repository.ts`, `index.ts`: the two Get_Orbit* calls. MessageParameter
  now keeps Id, MessageTemplateId and Tenant_Id: TST sends the whole records back.
- `app/src/pages/MessageDetail/mocks.ts`: the parameters of seeds 5965301 (Orbit), 5965302 (host survey), 5965303 (Assemble), and the two Get_Orbit* mocks.

Tests: `useMessageDetail.test.tsx` (4 new), `MessageDetailView.test.tsx` (3 new), `MessageDetail.test.tsx` (3 new, MSW),
`actions.test.ts`, `api/message/mapper.test.ts` (2 new).

Proposed verdicts:

| Row | Element | Verdict | Reason |
|---|---|---|---|
| 091-094 | The four navigation handlers | match | |
| 100, 101 | Get_OrbitNotificationParameters, Get_OrbitHostSurveyNotificationParameters | mock-only | The server source is not available; the mock reads the parameter names |
| 123 | OnClick_ViewOrbitEvent | match | |
| 124 | OnClick_ViewAssembleEvent | match | |
| 131 | Placeholder ActionButton | match | |
| 121 | BuildAssembleNotificationContent | partial | Built; PlaceholderLib SetTextPlaceholdersValue is open (decision D2) |

## F3 (major): the adaptive card (decision Q3 (a))

TST evidence:

- ACV: the container AdaptiveCardContainer; OnReady and OnParametersChanged run RenderAdaptiveCardAction.
- ACV RenderAdaptiveCardJS: it uses the global `AdaptiveCards` (AdaptiveCard, HostConfig, OpenUrlAction).
- C2LS :4787-4876 GetHostConfigByConfigId(Events); C2LS :5775-5860 IsJsonValid.
- NDB view :506-553 and NDB :671-726: the event AdaptiveCardEventExecuted and its CommunicationException message.
- SBMD :1569-1737 AdaptiveCardViewerOnExecuteAction: send_email, view_event, other submits (store, refresh, thank).
- MD :474-550 and :976-1048: the two LDM handlers (audit, then V2 or V1 by GetHasNewLDM).
- TST loads the library as `/UBTConnect/scripts/Connect2_LegacyShared.AdaptiveCards.js` (`migration/runtime-sources/moduleinfo.json`).

Files changed:

- `app/src/components/widgets/AdaptiveCardViewer/` (new): `AdaptiveCardViewer.tsx`, `actions.ts`, `hostConfig.ts`,
  `runtime.ts`, `index.ts`, `README.md`, a story and a test.
- `app/src/pages/MessageDetail/components/NotificationDetailBlock.tsx:85-100, 120-130`: the viewer replaces the marker.
- `app/src/pages/MessageDetail/components/MessageDetailView.tsx`: HostConfig = GetHostConfigByConfigId(Events).
- `app/src/pages/MessageDetail/hooks/useMessageDetail.ts:331-385`: adaptiveCardViewerOnExecuteAction.
- `app/src/pages/MessageDetail/actions.ts`: AdaptiveCardActionSubmitData, SubstringJS, the two audits.
- `app/src/pages/MessageDetail/MessageDetailPage.tsx:76-95`: Handler_AddAuditAndNavigateTo_EventEmail and _EventDetail.
- `app/src/api/message/repository.ts`: `storeAdaptiveCardResponses`; `pages/MessageDetail/mocks.ts`: its mock and seed 5965305.

What was built:

- Everything around the renderer: host config, IsJsonValid, the action binding, the submit flows, the mocks.
- `runtime.ts` holds the renderer as null. The tests set a stub runtime with the SDK's members.
- After the install, one line in `runtime.ts` sets the renderer (the file comment shows it).
- Telemetry of the two audits goes to the log (decision U17, as the other LDM routes).

Tests: `AdaptiveCardViewer.test.tsx` (7), `NotificationDetailBlock.test.tsx` (2), `useMessageDetail.test.tsx` (4 new),
`MessageDetail.test.tsx` (1 new).

Proposed verdicts:

| Row | Element | Verdict | Reason |
|---|---|---|---|
| 095, 096 | The two LDM handlers | match | |
| 102 | StoreAdaptiveCardResponses | mock-only | The mock answers nothing, as the contract |
| 125, 148 | The two AdaptiveCardViewerOnExecuteAction | match | |
| 128 | HostConfig argument | match | |
| 144 | The adaptive card branch | open | The card renders after the library install (decision D1) |

## F6 (major): a private message of another user (decision Q4 (a))

TST evidence: SBMD :976-1011. The branch runs FeedbackMessage_AutoClose2 "You don't have access to that message" and
`breakAsync()`. The flow then goes on with the IsCleared check, the read step and the content.

Files changed:

- `app/src/pages/MessageDetail/hooks/messageDetailState.ts:90-125`: `messageAccess` no longer leaves; `isPrivateMessageOfAnotherUser`.
- `app/src/pages/MessageDetail/hooks/useMessageDetail.ts:222-229`: the toast, then the flow goes on.
- `app/docs/known-original-bugs.md`: row B14.

Tests: `messageDetailState.test.ts` (2), `useMessageDetail.test.tsx` (2: shown after the toast; cleared after both messages).

Proposed verdict: row 113, match.

## Checks

- `npx vitest run src/pages/MessageDetail src/components/widgets src/api/message src/api/share`: 14 files, 181 tests, green.
- `npx eslint` and `npx prettier --check` on the changed folders: clean. `npm run arch`: no violation.
- `npm run typecheck`: 4 errors, all in `src/pages/Profile/actions.test.ts` (another group's work).
- A wider run (`src/api`, MessageList, LegacyShareObject, ConnectShare, `src/mocks`, `src/app`) has 6 failures in
  `api/event` and `api/policy`. Other groups changed those files; B9 did not touch them.

## Notes for the orchestrator

- The FreeSubscriptionActionDialog has two copies now: `pages/LegacyShareObject/components/UpgradeSubscriptionDialog`
  and `pages/MessageDetail/components/FreeSubscriptionActionDialog.tsx`. Move one copy to `containers/` and delete the other.
- `known-original-bugs.md` row B14: renumber it if another group added a B14 at the same time.
- DataActionGetShare sends ShareId and HasAccessToDeceasedHousehold. The two record locals of screenData.variables are not sent.
- OnClick_ViewAssembleEvent reads the AssembleEventType row with getItem of the ListIndexOf result. When the row is
  missing, TST reads index -1; React sends "" (`actions.ts` `assembleEventParameters`).

## Decisions needed

D1. The adaptive-cards renderer library (F3, Q3 (a) "after the stack confirmation").

- Evidence: RenderAdaptiveCardJS calls the Microsoft Adaptive Cards JavaScript SDK API (`new AdaptiveCards.AdaptiveCard()`,
  `HostConfig`, `OpenUrlAction`, `onExecuteAction`, `parse`, `render`). TST bundles it as `Connect2_LegacyShared.AdaptiveCards.js`.
- The local sources do not hold that script, so its version is not known. The npm registry was not reachable in this
  run, so the release dates below need a check with `npm view <package> time`.
- Options:
  - (a) `adaptivecards` (Microsoft, npm), the 3.0.x line: the same API as the TST JS node. Pick the newest 3.0.x
    version that is at least 60 days old.
  - (b) `adaptivecards-react` (Microsoft, a React wrapper of (a)): it adds a component layer that the TST code does not use.
  - (c) Copy the TST script as a static file and load it as a global: the exact TST version, outside npm.
- Recommendation: (a). First read the version in the header of the TST script (a read-only static GET).
  Then install the matching version, or the nearest stable 3.0.x version.
- After the install: set the runtime in `app/src/components/widgets/AdaptiveCardViewer/runtime.ts` (one import and one
  line). Check whether TST loads an adaptive-cards stylesheet: no stylesheet is in the local sources.

D2. PlaceholderLib SetTextPlaceholdersValue (F2, BuildAssembleNotificationContent).

- Evidence: C2LS :711 calls `PlaceholderLibController.default.setTextPlaceholdersValue$Action`. No PlaceholderLib file is
  in the local TST sources (`tst_source.py list Placeholder`: no file).
- Options: (a) fetch `PlaceholderLib.controller.js` from TST (a read-only static GET) and port the action; (b) keep the
  content as fetched and record it as a gap.
- Recommendation: (a). Today `setTextPlaceholdersValue` in `app/src/pages/MessageDetail/actions.ts` returns the text unchanged.

D3. Share_UI.ShareObjectDetail (flag C2ExtendedShare False), with Feed_Embeded(FeedItemId) and Handler_SetFeedItemId (F1).

- Evidence: the flag is True on TST (`migration/knowledge/flag-values-tst.json`), so TST never renders this branch.
- The block has its own view (SharedObjectItem, EmptyShareDetailCard, Placeholder_FeedItem) and flows (SetFeedItemId in GetShareOnAfterFetch).
- Options: (a) build it in a next change; (b) keep the NotCaptured marker and record the branch as not reached on TST.
- Recommendation: (a), when the user wants the flag-off variant. It was out of this group's budget.

## Correction by the orchestrator (2026-10-28)

- D1: the TST bundle `Connect2_LegacyShared.AdaptiveCards.js` is byte-identical (after BOM and CRLF) to the npm `adaptivecards` 2.5.0 `dist/adaptivecards.js` (md5 ae3ac2e4…). The library decision is PD7 in `pending-decisions.md`: an exact pin of 2.5.0, not 3.0.x.
- D2: `PlaceholderLib.controller.js` is fetched (`migration/runtime-sources/`, logged in `runtime-sources.md`); the port waits for PD8.
