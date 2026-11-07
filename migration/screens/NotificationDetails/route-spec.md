# Route spec: NotificationDetails (lite)

## Summary

- Route `/UBTConnect/NotificationDetails`, input `MessageInstanceId` (LongInteger, mandatory) (`NotificationDetails.mvc.js` model; pack "Logic in screen-specific blocks"). Role: Registered users (`NotificationDetails.mvc.js:577`).
- Data: data action `FetchMessageInstance` at the screen start, output `UI_NotificationDetail` (MessageListItemRec) (`NotificationDetails.mvc.js:11, 538-554`; pack Calls #2; call-sites "fetch at start"). No other client action.
- View (`NotificationDetails.mvc.js:164-508`; `analysis/dom/default.html:44-125`):
  - `Layout_MainPages_Upgrade` with `isGrayBackground: true`; title placeholder the text `Notifications`; Right, Input and HeaderContent placeholders empty (:164-188).
  - `Notification_Title`: CustomContainer (Neutral0 background, Small padding) > IconText (Text = Title, FontWeight SemiBold) with a CircleButton (BorderColorId Neutral6) > Icon (UBT_Icons2 calendarBusy, Primary) (:190-305).
  - SectionSeparator (:306-322).
  - `Notification_Content`: CustomContainer > CustomText (Summary, color Neutral10) (:323-388).
  - `Notification_Date`: CustomContainer > CustomText (FormatDateTime(DateTimeCreated, "ddd dd/MM/yyyy HH:mm tt"), Neutral5, FontSize Small) (:389-459).
  - Bottom: BottomBarMenu (ActiveItem NullTextIdentifier) (:462-485); CommonUI_InsideLayout (:486-505).
- Loading state: the same markup; Title text empty (diff of `dom/loading.html` and `dom/default.html`: only line 42). The date shows the format of the null date (masked in the capture).
- Entry (Notifications, live survey copy of TST 2026-10-28): the list item Container `onClick` raises `OnClick_NotificationDetail(Id, IsRead)` (`NotificationsList.mvc.js:329-341, 822-846`) → event `NotificationDetail` → `Handler_NotificationDetail` (`Notifications.mvc.js:2986-3003`). When not IsRead, the server action `MarkAsRead(MessageInstanceId)`, then always `navigateTo /UBTConnect/NotificationDetails?MessageInstanceId=<Id>`, transition Default.

## Patterns used

- P-DATA, P-CALLS, P-MOCKS: `api/notification` (repository `fetchNotificationDetail`, `markNotificationAsRead`; query `useNotificationDetailQuery`), page mocks.
- P-MUTATION: the notifications live in one mock collection (`src/mocks/fictional/notifications.ts`); MarkAsRead sets `IsRead`, FetchNotifications and FetchMessageInstance read it.
- P-PARAMS: `pages/NotificationDetails/inputs.ts`; navigation with `useOsNavigate`.
- P-STATES: loading renders the empty record (as TST); error goes to the flow handler (query-cache subscription).
- Flow scope (item 8): MarkAsRead is a server action (R2, not wrapped); the navigation as is (R4); the list click starts the flow with `flow.run` (R6).
- Layout: `Layout_MainPages_Upgrade` moves from `pages/Notifications/components/` to `components/layout/MainPagesUpgradeLayout/` (props only, back arrow through `onBack`), as `DetailLayout` (page-template "Folders": a page never imports another page).

## Feature flags

- None (pack "Feature flags of this route").

## Unclear points


- None open. The three points of the first build are settled:
  - Q1 (answered, user 2026-10-29): `contract_gen.py` takes the live TST code, the contract is regenerated, and
    `npm run gen:api` runs. `app/src/api/openapi.yaml` now lists `FetchMessageInstance` and `ActionMarkAsRead`
    (grep, 2026-10-29). The two `@ts-expect-error` lines are gone from `api/notification/notificationDetail.ts`. The
    hand type `MessageInstanceWire` is now an alias of the contract output (`notificationDetail.ts:11`).
  - Q2 (answered, user 2026-10-29): `migration/survey` gets the new screen and route list from the live TST survey.
    `routes.generated.ts` has the NotificationDetails row (grep, 2026-10-29).
  - Q3 (fact, answered by a TST probe 2026-10-29): see "Unknown id" below.

## Unknown id

- `DataActionFetchMessageInstance` for an id that does not exist answers HTTP 200 with the empty `UI_NotificationDetail`
  record: Id '0', Title '', Summary '', DateTimeCreated 1900-01-01T00:00:00, flags false. There is no exception and no
  toast. The screen stays on NotificationDetails with an empty title (probe
  `migration/clarify/tools/probe_notification_unknown.cjs`, MessageInstanceId=1). MCP (DEV): the data action calls the
  service action `Get_UI_NotificationDetails` of `Connect2_Notification_CS` (module not open).
- The mock answers the empty record for an unknown id. It matches TST.

## Changes 2026-11-07 (TST sync)

- TST file changed: `UBTConnect.App_Notifications.NotificationDetails.mvc.js` (110368 → 136580 bytes, `tst-drift-2026-11-07.md`).
  Compiled code read: `migration/sources/pretty/UBTConnect.App_Notifications.NotificationDetails.mvc@6445b6d0.js` (ND7).
- Fresh capture: the title block, the separator and the border differ from the old build (brief: default 14, offline 18 diffs).
  Parity after the change is 0 in default, loading and offline (`parity/*.json`).
- New user action: AdaptiveCardViewerOnExecuteAction (ND7:1990-2100) with the audit handlers
  Handler_AddAuditAndNavigateTo_EventEmail and _EventDetail (ND7:2196-2320). React ports them in
  `pages/NotificationDetails/actions.ts` and `hooks/useNotificationDetail.ts`.
- New call: `ActionStoreAdaptiveCardResponses` (`api/notification/notificationDetail.ts:25`). Source: ND7 flow of the card
  submit. The page does not call `DataActionFetchMessageInstance` at load: the route-check reports no widget or action
  that reads it (`migration/route-check/routes/NotificationDetails.md`, table of data actions).
- ActionButtonGroup (ND7:651-717, visible when ShowAssembleAction) is `<NotCaptured>`.

## Decisions to confirm


- Q1 (a), user 2026-10-29: the contract comes from the live TST code, with the MyBookmarks retirement. The diff of the
  other operations is for the user to see (`migration/clarify/builds/item10-tooling.md`).
- Q2 (a), user 2026-10-29: only the screen and route list of `migration/survey` is refreshed from the live TST survey.
- Q3 (fact, code 2026-10-29): the empty-record mock matches TST. No decision needed.
- Mock data: the captured record (Id 5496739, Title "Your Host on Wednesday", Summary empty, read) is served for the
  captured id. The 19 notifications of the Notifications mock open their own record.
- Sync wave 2026-11-07 (TST re-capture, `NotificationDetails.mvc@6445b6d0.js` = ND7): AdaptiveCardViewerOnExecuteAction
  (ND7:1990-2100) and Handler_AddAuditAndNavigateTo_EventEmail / _EventDetail (ND7:2196-2320) are ported (user answer
  Q2 (a) of the wave). No capture shows a card submit (a user write). The mock answers StoreAdaptiveCardResponses with
  the contract shape (no outputs). It keeps each response in the store `UBTConnect.notificationAdaptiveCardResponses`
  (P-MUTATION); the audits go to the log (decision U17). To confirm with a capture when one is possible.
- Sync wave 2026-11-07: ActionButtonGroup (ND7:651-717, visible when ShowAssembleAction) renders `<NotCaptured>`
  until a capture of the block (user answer Q1 (b) of the wave). The new sender-target constants stay local in the page
  (Q3 (b)).
- Follow-up 1 (sync 2026-11-07, user answer Q1 b): ActionButtonGroup stays `<NotCaptured>` until a capture of the block.
- Follow-up 2 (sync 2026-11-07, user answer Q3 b): the page-local constants move to the shared static entities in a later
  item: MessageSenderTarget (RRT 12, CommunityHub 17), uBT_Icons2 (orbitText, assemble), uBT_FontWeight (light).
