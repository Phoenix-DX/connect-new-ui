# Route spec: Services

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/Services` with inputs none [pack.md] |
| Tier | lite |
| Captured | 2026-10-14, viewport 390×844, states: default, loading, offline [analysis/states.json] |
| Shared/shell components used | Layout_DetailPage (`src/shared/UBTConnectLibrary/Layout_DetailPage`), SkeletonSection, CustomContainer, CustomText, Columns_Two, Columns_Three, IconText, Icon, FixedFooter (`src/shared/UBTConnectLibrary/*`), SectionSeparator (`src/shared/UBTConnect/SectionSeparator`), ButtonLoading (`src/shared/osui/ButtonLoading`), CW_Common.Button (`src/shared/UBTConnect_Utils/Button`) [pack.md Block plan] |
| Screen-specific components | `components/SortableList.tsx` (SortableJS Sortable.SortableList), `components/SortableList_Draggable.tsx` (Sortable.SortableList_Draggable), `components/actions.ts` (SetupList JS node, Action_ChangeOrderLocal) [pack.md: BUILD here] |

## Specification
### Structure
- Layout_DetailPage `$b1`, title placeholder "Manage Services", empty right/header/bottom [Services.mvc.js:168-180; dom/default.html:21].
- Content: container `ContentWrapper` (FixedFooter adds `ubt-fixed-footer--content` and the footer-height variable on ready) > SkeletonSection `Content` [Services.mvc.js:181-200; dom:35-36].
- SortableList `$b3` (Group "services", PreventDomMove True, no DenyLists → `data-deny-from=""`) [Services.mvc.js:204-330; dom:38-51]:
  - It contains CustomContainer `Favourites2` (padding x base, y s).
  - That container holds CustomText "Favourites" (neutral-10, h6, semi-bold, padding y s) and List `FavouriteList` over GetServices.CurrentServices.
- Favourite row: CustomContainer (padding y s, border bottom s neutral-4) > Columns_Two reduce-last [Services.mvc.js:331-640; dom:52-528]:
  - Left = SortableList_Draggable (Id = Connect_Services.Id, UseCustomDragHandle True) > Columns_Two (reduce-first, gutter s, center). Its two parts are:
    - The drag handle CustomContainer (`drag-handle`, neutral-1, padding x xs y s, rounded, inline-block) with Icon drag_indicator (neutral-6, non-standard-14).
    - IconText (Text = Label, neutral-10 base semi-bold, spacing s, Icon = IconId base_24).
  - Right = Icon cancel_fill (neutral-7, base), only when not isMandatory.
- When AvailableServices is not empty: SectionSeparator `$b15` and SortableList `$b16` (DenyLists [SuggestionList, FavouriteList]) > CustomContainer `Suggestions2` > CustomText "Suggestions" + List `SuggestionList` [Services.mvc.js:647-800; dom:531-550].
- Suggestion row: SortableList_Draggable (Id = Id) > CustomContainer (padding y s, border bottom) > Columns_Three expand-middle gutter s center: drag handle | IconText (Label, IconId) | Icon add_circle (primary, base) [Services.mvc.js:790-1060; dom:551-770].
- FixedFooter `$b27` (no bottom bar, ExpectedFooterHeight `calc(2 * var(--space-base) + var(--ubt-button-height-m))`, ContentContainerId ContentWrapper) > CustomContainer (neutral-0, padding base, shadow xs-top) > ButtonLoading (IsLoading = isLoading) > Button "Save changes" (IsDisabled = isLoading) [Services.mvc.js:1080-1200; dom:781-830].

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| `Services/DataActionGetServices` | data | Services fetch at start [call-sites.md] | screen variables isLoading, ReferenceServices, HasChanges [fixtures/index.json] | AvailableServices, CurrentServices | not known (no MCP); mock reads the collection | real (recorded fixture through a collection), empty, error, loading |
| `ServiceAPIService_ConnectServices_ChangeOrder_Bulk` | service | Button click → OnClick_SaveChanges when HasChanges [call-sites.md; Services.mvc.js:1277-1320] | CurrentServices | none | not recorded (write); mock stores the list in the collection (P-MUTATION) | real, error |
| ActionSync_Info_GetMain, ActionGetUserInformation, FetchData_Cacheable* | server | app start (shell) [calls.md] | — | — | shell mocks | — |

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| OnAfterFetch_GetServices | fetch done | if ReferenceServices empty: append AvailableServices and CurrentServices.Connect_Services [Services.mvc.js:1638-1660] | — | — | — |
| SortableList OnDragEnd | drag end | Handler_SortableListOnDragEnd: if OldIndex <> NewIndex → Action_ChangeOrderLocal(NewIndex, OldIndex, FromId = FavouriteList, ToId = FavouriteList, ItemId) [Services.mvc.js:1674-1711] | — | — | errors: Bubble* exceptions |
| Favourite cancel icon | click | Handler(FavouriteList, Suggestions2, Order, -1, Id) → remove: ListRemove(Current, Order-1), ListInsert(Available, service, 0) [Services.mvc.js:606-608, 1380-1520] | — | — | — |
| Suggestion add icon | click | Handler(SuggestionList, FavouriteList, -1, Current.Length+1, Id) → add: service from ReferenceServices, new Connect_Service_User (UserId = GetUserId, Id null), remove from Available, insert at NewOrder-1 [Services.mvc.js:1031, 1438-1510] | — | — | — |
| Action_ChangeOrderLocal | — | HasChanges = True; reorder/remove/add as above; renumber Connect_Service_User.Order = row + 1 [Services.mvc.js:1406-1530] | — | — | — |
| Save changes | click | if HasChanges: isLoading = True, ChangeOrder_Bulk(CurrentServices), isLoading = False, FeedbackMessage_AutoClose("", "Your changes were saved.", success, True, "", 0, False), HasChanges = False; NotRegistered re-raised, CommunicationException → BubbleCommunicationException, others → BubbleGenericException [Services.mvc.js:1277-1370] | ChangeOrder_Bulk | — | toast |
| Back arrow | click | Layout_DetailPage previous screen (shared) | — | back | — |
| SortableList | OnReady | SetupList(ListPlaceholder, Handler, Group, DenyLists JSON, PreventDomMove): sortablejs on every `.list`, `data-deny-from`, drop marker [SortableJS.controller.js:94-492] | — | — | — |
| SortableList_Draggable | OnReady | when UseCustomDragHandle: set `sortable-item-id` on the `.drag-handle` [SortableList_Draggable.mvc.js:195-215] | — | — | — |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| loading | SkeletonSection In_IsLoading = not (IsDataFetched or HasFetchError) or isLoading; list class `list-loading`; Suggestions hidden (Available empty) [Services.mvc.js:194] | yes (dom/loading.html) | loading |
| default | data fetched | yes | real |
| offline | HasFetchError: not loading, list class `list-error` [dom/offline.html:37,51] | yes | error |
| empty favourites / all favourites | lists empty; Suggestions hidden when Available empty [Services.mvc.js:647] | no | empty |

## Patterns used
- P-DATA: `api.ts` adapter for DataActionGetServices and ChangeOrder_Bulk, domain types in `types.ts`.
- P-MOCKS: `mocks.ts` contract handlers, scenarios real/empty/error/loading.
- P-MUTATION: services collection seeded from the recorded fixture; ChangeOrder_Bulk writes it.
- P-CALLS: data action on load, service action only on Save with HasChanges, original input names.
- P-STATES: loading/error from SkeletonSection and list classes as captured.
- P-OSUI: Columns2/Columns3 through Columns_Two/Columns_Three; ButtonLoading from `src/shared/osui`.
- P-PARAMS: no inputs; back through Layout_DetailPage.
- P-LIST: no shared OS list component exists yet; the screen renders lists with the captured List markup as in AcceptPendingPolicies.
- P-BACK: no view cache (the screen refetches on entry).

## Feature flags
- none (pack.md "no feature flag detected")

## Unclear points
- Q1 (answered, user 2026-10-15): fixture re-recorded read-only with the real Id, IconId and ConnectServiceId
  (`app/src/mocks/fixtures/UBTConnect/DataActionGetServices/02-f72786df.json`); the user reviewed it (2026-10-21) [questions.md Q1].
- Q2 answered (user, 2026-10-15): keep the original drag arithmetic 1:1; known original bug B3 (app/docs/known-original-bugs.md).
- Q3 answered (user, 2026-10-15): no exemption; the dev server serves the original /UBTConnect/img/* (vite.config.ts originalImages), so the reference shows the real icons.

## Decisions to confirm
- **No lock layer and no Access Restricted dialog on this screen, as the original** (CR-Services-1, user 2026-10-15):
  the screen calls `useNoCommonUi()` (`index.tsx:129`; Services.mvc.js:1207 empty `placeholder_CommonUI_Inside_Layout`).
  The inactivity timer that started on the previous screen keeps running. On timeout nothing locks here. The next CommonUI
  screen starts a new timer (`app/src/shell/inactivity.ts`, `app/docs/guides/shell.md` "Inactivity timer").
- Q1 done: ids and icons are real. Headless check (mock=real):
  - Favourites Orbit, LDM, Assemble, Trove, MyCalendar, MyNotes and suggestions HR100, ElGusto, CommunityTradelink carry `sortable-item-id` = real Id.
  - The icon classes are as captured (`connect-icon-*`, `SVG_*`). The three SVGs load.
  - Cancel (Trove) and add (HR100) move the right rows.
  - Save without changes sends nothing.
  - Save sends ChangeOrder_Bulk with real ConnectServiceId, new row Id "0", Order 1..n. Then the toast "Your changes were saved." shows.
  - After the user leaves and returns, the screen shows the saved lists.
  - The user reviewed the fixture (2026-10-21) [questions.md Q1].
- Q2 answered (user, 2026-10-15): keep the original drag arithmetic 1:1. It is known original bug B3 [questions.md Q2; known-original-bugs.md B3]. The drag reorder of the original app is wrong:
  - SetupList passes the 0-based indexes of Sortable (SortableJS.controller.js:445-470).
  - The block raises OnDragEnd unchanged (SortableJS.Sortable.SortableList.mvc.js:239-261).
  - The screen subtracts 1 again (Services.mvc.js:1433-1436).
  - Touch check: My Notes dragged before LDM gives My Notes, Orbit, LDM, Assemble, Trove, My Notes (My Entertaining lost).
  - The React app builds it as compiled (`components/actions.ts:250-251`); the fix comes after the replacement.
  - With a desktop mouse (native DnD) a reorder inside Favourites never fires. With PreventDomMove the `.drag-ghost` stays at its origin, so `isGhostBackAtOriginalPosition` is always true (same JS).
  - The phone path (touch fallback `.sortable-fallback`) works.
  - Deny list as captured: Favourites → Suggestions refused.
- The default pixel difference was an artifact of the reference replay (broken captured images). The dev server fix removed it (Q3).
- Mock semantics (write not recorded):
  - ChangeOrder_Bulk replaces the current services of the user in the collection.
  - The next GetServices answers CurrentServices from the collection. It answers AvailableServices = the other recorded services by Order (`mocks.ts` sorts them; the collection prepends new rows).
  - The services block of HomeFeed keeps its own recorded answer.
- Exceptions of Save go to the flow handler (`raiseToFlowHandler`). The App_Services flow controller is not fetched (shell-facts U10). The spec assumes the App_Common behaviour, as for the other routes.
- A failed GetServices shows only the `list-error` state as captured (no toast captured in the offline state), as HomeFeed does.
- Lists use the captured List markup directly: P-LIST asks for a shared OS list component, which does not exist yet
  (same as AcceptPendingPolicies).

## Change requests
- CR-Services-1 (applied): the shell no longer renders Block_PINUnlock and Dialog_AccessRestrictedAction (`b13-$b2`,
  `b13-$b4`) on a screen without CommonUI; Services calls `useNoCommonUi()`. Structure differences gone in all states.

## Parity
Run 2026-10-15 after the last code change (`route.py parity`):

| State | Scenario | structure | class | attr | style | layout | position | pixel | calls | Exemptions fired |
|---|---|---|---|---|---|---|---|---|---|---|
| default | real | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | CAPTURE-LINK-HREF-CURSOR-HOMEFEED |
| loading | loading | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | CAPTURE-LINK-HREF-CURSOR-HOMEFEED, CAPTURE-SKELETON-SHIMMER-PHASE |
| offline | error | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | CAPTURE-LINK-HREF-CURSOR-HOMEFEED |

- default pixel (x=40, y=440-560): the three suggestion icons are broken images in the replayed reference. They are real SVGs in the build.
  - The replay resolves the captured `src="/UBTConnect/img/UBTConnectLibrary.*.svg"` (dom/default.html:583, 657, 731) against the dev server (`<base href>` = app origin, parity_check.cjs:550).
  - The dev server answers that path with `index.html` (text/html). The build uses `/os-assets/UBTConnect/img/…` (image/svg+xml).
  - This is not a code difference (DOM, class, attr, layout 0).
  - Q3: no exemption; dev-server fix instead (parity 0, 2026-10-15).

## Server-side notes
- ChangeOrder_Bulk must take the user from the session. It must not take the user from Connect_Service_User.UserId that the client sends.
- ChangeOrder_Bulk must refuse to remove mandatory services (the client only hides the cancel icon).
- GetServices must return only the session user's services.
