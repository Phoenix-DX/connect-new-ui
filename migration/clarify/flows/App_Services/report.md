# Flow report: App_Services

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 1 (built: 1, Services; not built: none) |
| Own blocks | none |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/pages/Services/…`, `app/src/api/service/…`, KB page `ui/profile-services.md` and the rules BR-UBTCON-995 to BR-UBTCON-998, TST compiled code of the screen, the flow controller, the two SortableJS blocks, `Layout_DetailPage`, `SkeletonSection` and the runtime files `OutSystems.js`, `OutSystemsReactView.js`, `OutSystemsReactWidgets.js` (`tst_source.py`) |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

TST line numbers are the lines of `python3 migration/clarify/tools/tst_source.py show <file>`.

## 1. Summary

- Counts by verdict: match 69 · partial 6 · missing 2 · differs 0 · mock-only 2 · n/a 2 · unclear 0 (same as `checklist.json`).
- **F1** (major): after a failed save, React keeps `isLoading` True. The skeleton and the disabled loading button stay. TST
  resets `isLoading` in the CommunicationException and AllExceptions handlers.
- **F2** (major): a failed `GetServices` fetch shows no toast in React. The runtime passes the error to the flow handler,
  and App_Common shows the toast.
- **F3** (minor): a failed move keeps no partial change in React, and `HasChanges` stays False. TST keeps the list
  steps that ran before the failure, and `HasChanges` is True.
- **F4** (minor): the text of a list index error differs: "Index out of range" in React, the runtime text in TST.
- **F5** (minor): React does not set the document title "Services".
- Status: in React a user can reorder, add and remove favourites by drag or by icon, and save the whole list with the
  message. The error paths differ (F1, F2, F3, F4). The SortableJS drag port waits for its TST source (Q1).

## 2. Screens

### 2.1 Services

Route `/UBTConnect/Services`, screen component `app/src/pages/Services/ServicesPage.tsx`, flows in
`app/src/pages/Services/hooks/useServices.ts` and `hooks/servicesState.ts`. Board: `build`, built (V3a, user
2026-10-14; writes mocked).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 001 | roles Registered, UBTOne_User | A signed-in user opens the screen; TST checkPermissions calls checkRegistered | MEMBER_ROUTE (member, enforce): Services is not in ROUTE_META | `match` | app/src/app/routes.ts:40-56; TST UBTConnect.App_Services.Services.mvc.js:1840 |
| 002 | input parameters, URL structure QueryString | no input parameter | route /UBTConnect/Services, inputs [] | `match` | app/src/app/routes.generated.ts:31 |
| 003 | lifecycle | no OnInitialize, OnReady, OnRender or OnDestroy | no lifecycle effect in the page or in the hook | `match` | app/src/pages/Services/ServicesPage.tsx:15-21; app/src/pages/Services/hooks/useServices.ts:45-54; TST UBTConnect.App_Services.Services.mvc.js:1831-1834 |
| 004 | local isLoading (Boolean) | False at start; True while the save runs | useState(false) | `match` | app/src/pages/Services/hooks/useServices.ts:48 |
| 005 | local HasChanges (Boolean) | False at start; True after a move; False after a save | useState(false) | `match` | app/src/pages/Services/hooks/useServices.ts:49 |
| 006 | local ReferenceServices (Connect_Services List) | empty at start; OnAfterFetch_GetServices fills it | useMemo of referenceServicesOf(getServices.data) | `match` | app/src/pages/Services/hooks/useServices.ts:54; app/src/pages/Services/hooks/servicesState.ts:21-24 |
| 007 | screen title (View.title) | "Services": the runtime sets document.title to the screen title on mount and on update | no code in app/src sets document.title: the tab keeps "UBTConnect" of index.html | `missing` | TST UBTConnect.App_Services.Services.mvc.js:137-139; TST OutSystemsReactView.js:2009; app/index.html:6<br>App-wide: the route titles exist in routes.generated.ts, but no screen uses them. Finding F5 (minor). Question Q4. |
| 008 | stylesheet | the view loads UBTConnect.App_Services.Services.css with the module and theme CSS | the Services entry of routes.css.generated.ts, plus the CSS of the SortableList block | `match` | TST UBTConnect.App_Services.Services.mvc.js:115; app/src/app/routes.css.generated.ts:1016-1026 |
| 009 | Placeholder_CommonUI_Inside_Layout | empty: the screen has no CommonUI block | useNoCommonUi(): no lock layer and no Access Restricted dialog on the screen | `match` | app/src/pages/Services/ServicesPage.tsx:16-18; TST UBTConnect.App_Services.Services.mvc.js:1205; migration/change-requests/CR-Services-1.md (user, 2026-10-15) |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 010 | GetServices (data action, fetch At Start) | fetches once when the screen opens; no action of the screen refreshes it | useUserServicesQuery: fetch on mount, staleTime Infinity, gcTime 0, no retry | `match` | app/src/api/service/hooks.ts:11-19; app/src/pages/Services/hooks/useServices.ts:46; TST UBTConnect.App_Services.Services.mvc.js:1224, 1254 |
| 011 | DataActionGetServices request | screenservices/UBTConnect/App_Services/Services/DataActionGetServices with the screen variables isLoading, ReferenceServices, HasChanges | callAction('UBTConnect', 'Services/DataActionGetServices') with the start values of the three variables | `match` | app/src/api/service/repository.ts:19-28; app/src/api/openapi.yaml:4946-4947 |
| 012 | outputs AvailableServices, CurrentServices | Connect_Services List; Connect_Service_User and Connect_Services Record List | toUserServices maps every field of both records (NullIdentifier "0" to null, the null date to null) | `match` | app/src/api/service/mapper.ts:24-71 |
| 013 | server side of Service_ConnectServices_GetByUser (Connect_Services_CS) | Services_GetByUser: deletes the rows of inactive services, adds the missing mandatory services, returns the active non-mandatory services not held | mock: the recorded TST answer, served from two in-memory collections | `mock-only` | app/src/pages/Services/mocks.ts:28-51, 70-73; KB connect2-services Connect_Services_CS/logic/service-favourites.md (BR-C2SVC-294 to BR-C2SVC-297)<br>Production needs the service action Service_ConnectServices_GetByUser. |
| 014 | GetServices failure | the runtime flushes the model (list-error), then calls the screen handleError: App_Services, then App_Common OnException, which shows the communication or exception toast | the List widgets get list-error; no code passes the error to the flow handler, so no toast shows | `missing` | TST OutSystems.js:3853 (executeDataFetchAction: model.flush(), handleError(e)); TST UBTConnect.App_Services.controller.js:17; migration/knowledge/shell-facts.md U10; app/src/pages/Services/hooks/useServices.ts:46-52; app/src/api/client/queryClient.ts:15-18<br>CountryDetails has the same gap (app/src/pages/CountryDetails/hooks/useCountryDetails.ts:110-115). Finding F2 (major). Question Q3. |
| 015 | Service_ConnectServices_ChangeOrder_Bulk request | screenservices/UBTConnect/App_Services/Services/ServiceAPIService_ConnectServices_ChangeOrder_Bulk with CurrentServices (the whole list); no outputs | changeServicesOrder(lists.currentServices): the whole list; each row keeps its Id ("0" for a new row), UserId, Order and LastChangedOn | `match` | app/src/api/service/repository.ts:40-46; app/src/api/service/mapper.ts:56-65, 101-104; app/src/api/openapi.yaml:4914; TST UBTConnect.App_Services.Services.mvc.js:1237 |
| 016 | server side of Service_ConnectServices_ChangeOrder_Bulk (Connect_Services_CS) | Service_ChangeOrder_Bulk: upserts the rows as sent and deletes the rows of the caller that are not in the list | mock: replaces the favourites with the list sent, gives new rows an id and computes the suggestions again | `mock-only` | app/src/pages/Services/mocks.ts:53-67, 74-77; KB BR-C2SVC-298, BR-C2SVC-299<br>Production needs the service action Service_ConnectServices_ChangeOrder_Bulk. |
| 017 | no refresh after the save | OnClick_SaveChanges does not refresh GetServices: the lists keep the local state, and new rows keep Id NullIdentifier | no invalidate and no refetch after changeServicesOrder; the local lists stay | `match` | app/src/pages/Services/hooks/useServices.ts:47, 52, 82-101; TST UBTConnect.App_Services.Services.mvc.js:1295-1312 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 018 | Layout_DetailPage (no input set) | the default inputs (title centred, primary colour, LayoutRuntime_Top); Placeholder_Header_Title "Manage Services"; header right, header content and bottom empty | DetailLayout headerTitle "Manage Services" with the default props; no headerRight, headerContent or bottom | `match` | app/src/pages/Services/ServicesPage.tsx:24-47; app/src/components/layout/DetailLayout/DetailLayout.tsx:43-58; TST UBTConnect.App_Services.Services.mvc.js:157-180 |
| 019 | back arrow of Layout_DetailPage | OnClick_BackNavigation: navigateBack (PreviousScreen) | onBack = useNavigateBack(): navigate(-1) | `match` | app/src/pages/Services/ServicesPage.tsx:19, 27; app/src/platform/navigation/osNavigate.ts:135-145; TST UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js:497<br>The other internals of the layout are not checked here. |
| 020 | Container ContentWrapper | holds the content; FixedFooter pads it (ContentContainerId) | div with the id ContentWrapper | `match` | app/src/pages/Services/components/ServicesContent.tsx:41; app/src/pages/Services/ServicesPage.tsx:9, 31, 41; TST UBTConnect.App_Services.Services.mvc.js:186 |
| 021 | SkeletonSection #Content, In_IsLoading | not (GetServices.IsDataFetched or GetServices.HasFetchError) or isLoading | isSkeletonLoading = not (isDataFetched or hasFetchError) or isLoading | `match` | app/src/pages/Services/hooks/useServices.ts:50-51, 107; app/src/pages/Services/components/ServicesContent.tsx:42; TST UBTConnect.App_Services.Services.mvc.js:191 |
| 022 | SortableList of the favourites | Group "services", PreventDomMove True, no DenyLists; OnDragEnd calls Handler_SortableListOnDragEnd with the five event values | SortableList group SORTABLE_GROUP, preventDomMove, onDragEnd | `match` | app/src/pages/Services/components/FavouriteServiceList.tsx:40; app/src/pages/Services/hooks/servicesState.ts:6; TST UBTConnect.App_Services.Services.mvc.js:211-226 |
| 023 | CustomContainer #Favourites2 and CustomText "Favourites" | padding vertical Small, horizontal Base; text Neutral10, Heading6, SemiBold, padding vertical Small | ServiceListSection with SECTION_CONTAINER and TITLE_TEXT | `match` | app/src/pages/Services/components/ServiceListSection.tsx:24-31, 51-57; app/src/pages/Services/components/FavouriteServiceList.tsx:41-48; TST UBTConnect.App_Services.Services.mvc.js:246-293 |
| 024 | List #FavouriteList | source GetServices.CurrentServices, style "list list-group", class list-loading or list-error by the fetch status | div.list with the id FavouriteList and the same classes by isFetching and hasFetchError | `match` | app/src/pages/Services/components/ServiceListSection.tsx:35-36, 58; app/src/pages/Services/components/FavouriteServiceList.tsx:49; TST UBTConnect.App_Services.Services.mvc.js:316-321; TST OutSystemsReactWidgets.js:169 |
| 025 | favourite row: CustomContainer and Columns_Two | row padding vertical Small, border Neutral4 bottom Small; Columns_Two ReduceLast | ROW_CONTAINER; ColumnsTwo ReduceLast | `match` | app/src/pages/Services/components/FavouriteServiceList.tsx:52-55; app/src/pages/Services/components/serviceRowOptions.ts:7-10; TST UBTConnect.App_Services.Services.mvc.js:330-372 |
| 026 | SortableList_Draggable of a favourite | Id = CurrentServices.Current.Connect_Services.Id, UseCustomDragHandle True | SortableList_Draggable itemId = service.id, useCustomDragHandle | `match` | app/src/pages/Services/components/FavouriteServiceList.tsx:57; TST UBTConnect.App_Services.Services.mvc.js:395-397 |
| 027 | inner Columns_Two, drag handle and IconText of a favourite | Columns_Two ReduceFirst, Small, Center; CustomContainer "drag-handle" (Neutral1, padding Small and ExtraSmall, radius Rounded, inline block) with Icon DragIndicator, Neutral6, NonStandard_14; IconText Label (Small, Neutral10, Base, SemiBold) with Icon IconId, Base_24 | ICON_TEXT_COLUMNS; ServiceDragHandle; ServiceIconText with the same options | `match` | app/src/pages/Services/components/FavouriteServiceList.tsx:58-65; app/src/pages/Services/components/serviceRowOptions.ts:13-17; app/src/pages/Services/components/ServiceDragHandle.tsx:14-34; app/src/pages/Services/components/ServiceIconText.tsx:21-34; TST UBTConnect.App_Services.Services.mvc.js:420-422, 455-493, 530-551<br>The DEV pack cuts the drag handle options; TST gives radius Rounded and IsInlineBlock True. |
| 028 | If isMandatory (#IsMandatory2) | True: nothing; False: Icon CancelFill, Neutral7, Base_24, with a Click handler | isMandatory: null; else Icon CancelFill, Neutral7, Base_24, onClick onRemove | `match` | app/src/pages/Services/components/FavouriteServiceList.tsx:68-79; TST UBTConnect.App_Services.Services.mvc.js:585-605 |
| 029 | If not GetServices.AvailableServices.Empty | shows SectionSeparator and the SortableList of the suggestions | availableServices.length > 0: SuggestedServiceList (separator and list) | `match` | app/src/pages/Services/components/ServicesContent.tsx:50-58; app/src/pages/Services/components/SuggestedServiceList.tsx:49-52; TST UBTConnect.App_Services.Services.mvc.js:644 |
| 030 | SectionSeparator (App_Common_Blocks) | no input; CustomContainer Neutral4 with padding top ExtraSmall | SectionSeparator with the same container | `match` | app/src/pages/Services/components/SuggestedServiceList.tsx:51; app/src/components/ui/SectionSeparator/SectionSeparator.tsx:14-24; migration/clarify/flows/_shared/pack/blocks.md (SectionSeparator) |
| 031 | SortableList of the suggestions | DenyLists [SuggestionList.Id, FavouriteList.Id], Group "services", PreventDomMove True; OnDragEnd calls Handler_SortableListOnDragEnd | denyLists [SUGGESTION_LIST, FAVOURITE_LIST], group, preventDomMove, onDragEnd | `match` | app/src/pages/Services/components/SuggestedServiceList.tsx:37, 52; TST UBTConnect.App_Services.Services.mvc.js:664-669 |
| 032 | CustomContainer #Suggestions2, CustomText "Suggestions", List #SuggestionList | the options of the favourites section; List source GetServices.AvailableServices | ServiceListSection id Suggestions2, title "Suggestions", list id SuggestionList | `match` | app/src/pages/Services/components/SuggestedServiceList.tsx:53-61; TST UBTConnect.App_Services.Services.mvc.js:706-781 |
| 033 | suggestion row | SortableList_Draggable (Id = AvailableServices.Current.Id, UseCustomDragHandle True), then the row CustomContainer, then Columns_Three ExpandMiddle, Small, Center with the drag handle and the IconText | the same nesting and options | `match` | app/src/pages/Services/components/SuggestedServiceList.tsx:64-75; TST UBTConnect.App_Services.Services.mvc.js:789-791, 854-856, 927-986 |
| 034 | Icon AddCircle of a suggestion | AddCircle, Primary, Base_24, with a Click handler | Icon AddCircle, Primary, Base_24, onClick onAdd | `match` | app/src/pages/Services/components/SuggestedServiceList.tsx:76-86; TST UBTConnect.App_Services.Services.mvc.js:1014-1015 |
| 035 | FixedFooter | ContentContainerId = ContentWrapper.Id, ExpectedFooterHeight "calc(2 * var(--space-base) + var(--ubt-button-height-m))", useBottomBar False | FixedFooter with the same three inputs | `match` | app/src/pages/Services/components/ServicesFooter.tsx:19, 31-36; TST UBTConnect.App_Services.Services.mvc.js:1079-1081 |
| 036 | CustomContainer of the footer | background Neutral0, padding General Base, shadow ExtraSmallTop | FOOTER_OPTIONS with the same values | `match` | app/src/pages/Services/components/ServicesFooter.tsx:21-25, 37; TST UBTConnect.App_Services.Services.mvc.js:1106-1114 |
| 037 | ButtonLoading and Button "Save changes" | ButtonLoading IsLoading = isLoading; Button (CW_Common) ButtonText "Save changes", IsDisabled = isLoading, buttonOnClick calls OnClick_SaveChanges | ButtonLoading isLoading; ActionButton buttonText "Save changes", isDisabled isLoading, onButtonOnClick onSaveChanges | `match` | app/src/pages/Services/components/ServicesFooter.tsx:38-40; app/src/pages/Services/ServicesPage.tsx:40-44; TST UBTConnect.App_Services.Services.mvc.js:1137-1158 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 038 | Handler_SortableListOnDragEnd: OldIndex = NewIndex | End: nothing changes | if (oldIndex === newIndex) return | `match` | app/src/pages/Services/hooks/useServices.ts:59; TST UBTConnect.App_Services.Services.mvc.js:1695 |
| 039 | Handler_SortableListOnDragEnd: else branch | Action_ChangeOrderLocal(NewOrder = NewIndex, OldOrder = OldIndex, isFromFavoriteList = (FromId = FavouriteList.Id), isToFavoriteList = (ToId = FavouriteList.Id), ItemId) | action_ChangeOrderLocal(lists, referenceServices, newIndex, oldIndex, fromId === FAVOURITE_LIST, toId === FAVOURITE_LIST, itemId, userId) | `match` | app/src/pages/Services/hooks/useServices.ts:60-74; TST UBTConnect.App_Services.Services.mvc.js:1700 |
| 040 | Handler_SortableListOnDragEnd: exception handlers | CommunicationException: isLoading = False, raise BubbleCommunicationException; NotRegistered: raise; AllExceptions: isLoading = False, raise BubbleGenericException | raiseBubbledToFlowHandler(error): the same three raises; isLoading is not reset | `partial` | app/src/pages/Services/hooks/useServices.ts:75-77; app/src/platform/feedback/bubbleErrors.ts:20-34; TST UBTConnect.App_Services.Services.mvc.js:1707-1742<br>No UI path: SkeletonSection makes the lists inert while isLoading is True. Finding F6 (info). |
| 041 | Icon CancelFill: Click | Handler_SortableListOnDragEnd(FromId FavouriteList.Id, ToId Suggestions2.Id, OldIndex = Connect_Service_User.Order, NewIndex -1, ItemId = Connect_Services.Id) | onRemove: onDragEnd(FAVOURITE_LIST, SUGGESTIONS_CONTAINER, serviceUser.order, -1, service.id) | `match` | app/src/pages/Services/hooks/useServices.ts:110-112; TST UBTConnect.App_Services.Services.mvc.js:605 |
| 042 | Icon AddCircle: Click | Handler_SortableListOnDragEnd(FromId SuggestionList.Id, ToId FavouriteList.Id, OldIndex -1, NewIndex = CurrentServices.Length + 1, ItemId = AvailableServices.Current.Id) | onAdd: onDragEnd(SUGGESTION_LIST, FAVOURITE_LIST, -1, currentServices.length + 1, service.id) | `match` | app/src/pages/Services/hooks/useServices.ts:113-115; TST UBTConnect.App_Services.Services.mvc.js:1028 |
| 043 | Action_ChangeOrderLocal: NewOrder = OldOrder | End | returns null: the lists and HasChanges stay | `match` | app/src/pages/Services/hooks/servicesState.ts:62; app/src/pages/Services/hooks/useServices.ts:71-74; TST UBTConnect.App_Services.Services.mvc.js:1403 |
| 044 | Action_ChangeOrderLocal: HasChanges = True | the first step after the check, before any list action: it stays True when a later list action fails | setHasChanges(true) only after the action returns new lists | `partial` | app/src/pages/Services/hooks/useServices.ts:71-74; TST UBTConnect.App_Services.Services.mvc.js:1409<br>Finding F3 (minor). |
| 045 | flags isReorderingFavorites, isRemovingFavorites, isAddingFavorites | from and to the favourites; from the favourites only; to the favourites only | the same three expressions | `match` | app/src/pages/Services/hooks/servicesState.ts:65-67; TST UBTConnect.App_Services.Services.mvc.js:1412-1418 |
| 046 | locals isUseMovingDown, isUseMovingUp | assigned, never read | not ported | `n/a` | TST UBTConnect.App_Services.Services.mvc.js:1424-1427 (no reader in the controller)<br>dead in the model |
| 047 | Adjust for zero based | NewOrder = NewOrder - 1; OldOrder = OldOrder - 1, for every caller | newOrder = newOrderIn - 1; oldOrder = oldOrderIn - 1 | `match` | app/src/pages/Services/hooks/servicesState.ts:68-69; TST UBTConnect.App_Services.Services.mvc.js:1431-1434<br>A drag passes zero-based indexes, so a drag moves by one row too many: known original bug B3, kept 1:1. |
| 048 | isAddingFavorites: GetReferenceService and LocalService | ListFilter(ReferenceServices, Id = ItemId); LocalService: UserId = GetUserId(), ConnectServiceId = ItemId, Id = NullIdentifier(), Connect_Services = FilteredList.Current (the default record when no row matches) | find in referenceServices, else DEFAULT_SERVICE; serviceUser: id null, connectServiceId itemId, userId, order 0, lastChangedOn null; userId = currentUserId() | `match` | app/src/pages/Services/hooks/servicesState.ts:32-41, 71-77; app/src/pages/Services/hooks/useServices.ts:69; TST UBTConnect.App_Services.Services.mvc.js:1421, 1438-1454 |
| 049 | not adding: GetCurrentService and LocalService | ListIndexOf(CurrentServices, Connect_Services.Id = ItemId); LocalService = CurrentServices[Position] | findIndex by service.id; checkIndex; current[position] | `match` | app/src/pages/Services/hooks/servicesState.ts:78-82; TST UBTConnect.App_Services.Services.mvc.js:1458-1465 |
| 050 | branch isRemovingFavorites | ListRemove(CurrentServices, OldOrder); ListInsert3(AvailableServices, LocalService.Connect_Services, 0); no ListInsert2 | splice(oldOrder, 1); available.splice(0, 0, service); no insert | `match` | app/src/pages/Services/hooks/servicesState.ts:84-88; TST UBTConnect.App_Services.Services.mvc.js:1471-1474 |
| 051 | branch isReorderingFavorites | ListRemove2(CurrentServices, OldOrder), then ListInsert2 | splice(oldOrder, 1), then the insert | `match` | app/src/pages/Services/hooks/servicesState.ts:89-91, 98-101; TST UBTConnect.App_Services.Services.mvc.js:1482, 1505 |
| 052 | branch isAddingFavorites: GetAvailableItem | ListIndexOf(AvailableServices, Id = ItemId); Position <> -1: ListRemove3; then ListInsert2 | findIndex; position !== -1: splice; then the insert | `match` | app/src/pages/Services/hooks/servicesState.ts:92-95, 98-101; TST UBTConnect.App_Services.Services.mvc.js:1487-1494, 1505 |
| 053 | no flag (neither list is FavouriteList) | break: no ListInsert2, then the For Each | no insert, then the renumbering | `match` | app/src/pages/Services/hooks/servicesState.ts:95-97; TST UBTConnect.App_Services.Services.mvc.js:1498 |
| 054 | ListInsert2 | ListInsert(CurrentServices, LocalService, NewOrder) | checkIndex(length, newOrder, allowEnd), then splice(newOrder, 0, localService) | `match` | app/src/pages/Services/hooks/servicesState.ts:98-101; TST UBTConnect.App_Services.Services.mvc.js:1505 |
| 055 | For Each GetServices.CurrentServices | Connect_Service_User.Order = CurrentRowNumber + 1 | map: order = i + 1 | `match` | app/src/pages/Services/hooks/servicesState.ts:102-105; TST UBTConnect.App_Services.Services.mvc.js:1510-1518 |
| 056 | failed list action: error text | the runtime raises Error "Index out of bounds. Index <n> for bounds [0, <m>]." (or "... for empty list."); the flow handler shows the text in the toast | throws Error("Index out of range") | `partial` | app/src/pages/Services/hooks/servicesState.ts:26-30; TST OutSystems.js:1523 (List.checkIndex); migration/knowledge/shell-facts.md U10 (ShowExceptionMessage)<br>Finding F4 (minor). |
| 057 | failed list action: lists | the actions change the lists in place: the steps before the failing action stay (for example ListRemove2 or ListRemove3 runs, then ListInsert2 fails at index -1) | the action works on copies and throws before setChanged: no step stays | `partial` | app/src/pages/Services/hooks/servicesState.ts:63-64, 98-101; app/src/pages/Services/hooks/useServices.ts:61-74; TST UBTConnect.App_Services.Services.mvc.js:1471-1505<br>Finding F3 (minor). |
| 058 | OnAfterFetch_GetServices | ReferenceServices.Empty: ListAppendAll(AvailableServices), then ListAppendAll(ConvertList(CurrentServices, Connect_Services)); else End | referenceServicesOf: the suggestions, then the services of the favourites; computed again only when the data changes (one fetch) | `match` | app/src/pages/Services/hooks/servicesState.ts:21-24; app/src/pages/Services/hooks/useServices.ts:54; TST UBTConnect.App_Services.Services.mvc.js:1262, 1647-1653 |
| 059 | OnClick_SaveChanges: no changes | HasChanges False: End, no call and no message | if (!hasChanges) return | `match` | app/src/pages/Services/hooks/useServices.ts:83; TST UBTConnect.App_Services.Services.mvc.js:1295 |
| 060 | OnClick_SaveChanges: with changes | isLoading = True; Service_ConnectServices_ChangeOrder_Bulk(CurrentServices); isLoading = False; FeedbackMessage_AutoClose("Your changes were saved.", Success); HasChanges = False | the same steps in the same order | `match` | app/src/pages/Services/hooks/useServices.ts:84-97; TST UBTConnect.App_Services.Services.mvc.js:1298-1311 |
| 061 | OnClick_SaveChanges: exception handlers | NotRegistered: raise (isLoading stays True); CommunicationException: isLoading = False, raise BubbleCommunicationException; AllExceptions: isLoading = False, raise BubbleGenericException | raiseBubbledToFlowHandler(error); isLoading stays True in every branch, so the skeleton and the disabled loading button stay | `partial` | app/src/pages/Services/hooks/useServices.ts:80-81, 98-100; app/src/pages/Services/Services.test.tsx:110-128; TST UBTConnect.App_Services.Services.mvc.js:1321-1361<br>The code and the test say "as in the original"; TST resets isLoading in two branches. Finding F1 (major). Question Q2. |
| 062 | unreachable End nodes | GetServices, Action_ChangeOrderLocal, Handler_SortableListOnDragEnd, OnAfterFetch_GetServices and OnClick_SaveChanges list unreachable End nodes | not implemented | `n/a` | pack/screens.md Services<br>dead in the model |

**Validations**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 063 | validations | no input widget, no built-in validation, no custom validation node | none | `match` | pack/screens.md Services; app/src/pages/Services/components/ServicesContent.tsx; app/src/pages/Services/components/ServicesFooter.tsx |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 064 | BR-UBTCON-995 | a drag is reorder, remove or add by the list it leaves and the list it enters; the same index does nothing | the same checks and flags | `match` | app/src/pages/Services/hooks/useServices.ts:59, 66-67; app/src/pages/Services/hooks/servicesState.ts:62-67; BR-UBTCON-995 |
| 065 | BR-UBTCON-996 (remove icon) | a mandatory favourite has no remove icon; the icon moves the row to the top of the suggestions | no Icon when isMandatory; onRemove runs the remove branch | `match` | app/src/pages/Services/components/FavouriteServiceList.tsx:68-79; app/src/pages/Services/hooks/servicesState.ts:84-88; BR-UBTCON-996 |
| 066 | BR-UBTCON-996 (drag of a mandatory row) | isMandatory does not guard the drag; the SortableList of the suggestions passes DenyLists [SuggestionList.Id, FavouriteList.Id]; SetupList (SortableJS) applies DenyLists, and its source is not available | every row has the drag handle; setupList denies a drop into SuggestionList from FavouriteList (data-deny-from), so no favourite leaves by drag | `unclear` | app/src/pages/Services/components/FavouriteServiceList.tsx:57; app/src/pages/Services/components/SuggestedServiceList.tsx:35-37; app/src/pages/Services/components/setupList.ts:59-67, 158-167; TST UBTConnect.App_Services.Services.mvc.js:664-669; BR-UBTCON-996<br>BR-UBTCON-996 says that a mandatory row can leave by drag (K1). Question Q1. |
| 067 | BR-UBTCON-997 | save only when HasChanges; one bulk call with the whole list; new rows carry Id NullIdentifier and UserId = GetUserId() | the same guard, call and row values | `match` | app/src/pages/Services/hooks/useServices.ts:69, 83-86; app/src/pages/Services/hooks/servicesState.ts:76; app/src/api/service/mapper.ts:56-65; BR-UBTCON-997 |
| 068 | BR-UBTCON-998 | moves change the local lists; the favourites get Order 1..n in list order | action_ChangeOrderLocal returns the new lists with order i + 1 | `match` | app/src/pages/Services/hooks/servicesState.ts:52-106; BR-UBTCON-998 |
| 069 | known original bug B3 (drag indexes) | SortableJS gives zero-based OldIndex and NewIndex; Action_ChangeOrderLocal subtracts 1 again | kept 1:1: the drag path passes the zero-based indexes to action_ChangeOrderLocal | `match` | app/docs/known-original-bugs.md B3; app/src/pages/Services/hooks/servicesState.ts:49-51, 68-69; app/src/pages/Services/components/setupList.ts:176-182, 195-200<br>B3 cites SortableJS.controller.js:445-470. tst_source.py does not hold that file (Q1). |
| 070 | client variables | none read or written | none | `match` | pack/data.md (empty table); app/src/pages/Services/hooks/useServices.ts:1-15 |

The KB file `ui/legacy-ldm-events.md` names this flow only through `WebBlock_FeedBlock_Services` (flow Home). It has
no rule for the Services screen.

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 071 | screen strings (6) | "Manage Services", "Favourites", "Suggestions", "Save changes", "Your changes were saved.", "calc(2 * var(--space-base) + var(--ubt-button-height-m))" | the same 6 texts | `match` | app/src/pages/Services/ServicesPage.tsx:26; app/src/pages/Services/components/FavouriteServiceList.tsx:44; app/src/pages/Services/components/SuggestedServiceList.tsx:56; app/src/pages/Services/components/ServicesFooter.tsx:19, 39; app/src/pages/Services/hooks/useServices.ts:90 |

All 6 strings of the pack match. The screen title "Services" is row 007.

## 3. Blocks of the flow

The flow has no own block.

### 3.1 Referenced blocks of module SortableJS

The pack has the signatures of SortableList and SortableList_Draggable only, and the KB has no file of module
SortableJS. TST holds the compiled code of both blocks, so the rows below check it. The JavaScript action SetupList
lives in `SortableJS.controller.js`. Neither the survey nor `migration/runtime-sources/` holds that file (row 079, Q1).

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 072 | view: Placeholder ListPlaceholder | a div with the placeholder ListPlaceholder | OSBlock with a div, id <block>-ListPlaceholder | `match` | app/src/pages/Services/components/SortableList.tsx:29, 47-51; TST SortableJS.Sortable.SortableList.mvc.js:165-170 |
| 073 | OnReady | GetObj JS node wraps Handler; SetupList(ListPlaceholder.Id, Function, Group, DenyLists, PreventDomMove) | useEffect on mount: setupList(placeholderId, a handler that calls the latest onDragEnd, group, denyLists, preventDomMove) | `match` | app/src/pages/Services/components/SortableList.tsx:30-46; TST SortableJS.Sortable.SortableList.mvc.js:337, 387 |
| 074 | Handler: OnDragEnd | Handler raises OnDragEnd(FromId, ToId, OldIndex, NewIndex, ItemId) | the setupList handler calls onDragEnd with the same five values | `match` | app/src/pages/Services/components/SortableList.tsx:37-39; TST SortableJS.Sortable.SortableList.mvc.js:255 |
| 075 | OnParametersChanged | runs OnReady again, so SetupList runs again | no effect on an input change; the comment says "OutSystems runs it once" | `partial` | app/src/pages/Services/components/SortableList.tsx:44-46; TST SortableJS.Sortable.SortableList.mvc.js:223, 407<br>No input changes on this screen: Group and PreventDomMove are constants, and DenyLists is a cached list. Finding F7 (info). |
| 076 | view: Item placeholder | extended property sortable-item-id = Id; style "" with UseCustomDragHandle, else "drag-handle" | div id <block>-Item, sortable-item-id = itemId, class by useCustomDragHandle | `match` | app/src/pages/Services/components/SortableList_Draggable.tsx:24, 32-37; TST SortableJS.Sortable.SortableList_Draggable.mvc.js:154-157 |
| 077 | OnReady | UseCustomDragHandle: SetItemIdOnCustomDragHandle sets sortable-item-id on the inner .drag-handle | useEffect on mount: the same querySelector and setAttribute | `match` | app/src/pages/Services/components/SortableList_Draggable.tsx:25-31; TST SortableJS.Sortable.SortableList_Draggable.mvc.js:204-206, 323 |
| 078 | OnParametersChanged | runs OnReady again: a new Id goes to the inner .drag-handle | no effect on an itemId change; the row key (service id and index) mounts a new row when the service of a row changes, so the new id is on the handle | `match` | app/src/pages/Services/components/SortableList_Draggable.tsx:25-31; app/src/pages/Services/components/FavouriteServiceList.tsx:52; app/src/pages/Services/components/SuggestedServiceList.tsx:65; TST SortableJS.Sortable.SortableList_Draggable.mvc.js:237, 291<br>The comment "OutSystems runs it once" is wrong (F7), but the result is the same. |
| 079 | SetupList internals (SortableJS.controller.js) | behaviour of SortableList in module SortableJS: not in the dump, no KB page; tst_source.py has no SortableJS.controller.js | web port in setupList.ts: one Sortable per list, handle .drag-handle, deny lists, drop marker, a pending move with PreventDomMove, OnDragEnd at the end | `unclear` | app/src/pages/Services/components/setupList.ts:32-217; pack/references.md (SortableList); pack/kb.md (SortableList: no KB page)<br>Question Q1. |

### 3.2 Blocks of other flows

- SectionSeparator (App_Common_Blocks, `../_shared/pack/blocks.md`): the suggestions use it with no input (row 030,
  `match`).

## 4. Shared blocks and actions

The flow-level rows (screen `-` in `checklist.json`):

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 080 | FeedbackMessage_AutoClose call (UBTJavaScriptUtils) | ("", "Your changes were saved.", Success, True, "", 0, False) | title '', the message, 'success', encodedHtml true, extendedClass '', delayMs 0, useDebounce false | `match` | app/src/pages/Services/hooks/useServices.ts:88-96; TST UBTConnect.App_Services.Services.mvc.js:1308<br>The internals of the action are shared: checked in the report of App_Common. |
| 081 | flow handler App_Services, then App_Common | the handleError of App_Services passes the error to App_Common OnException | raiseToFlowHandler: the port of App_Common OnException | `match` | TST UBTConnect.App_Services.controller.js:17; app/src/legacy/os/exceptions.ts:55-84; app/src/platform/feedback/bubbleErrors.ts:20-34<br>Shared: the branches are checked in the report of App_Common. |

Not checked here: the internals of the referenced UI blocks of `UBTConnectLibrary`, `UBTConnect_Utils` and
`OutSystemsUI_2_23`. These blocks are Layout_DetailPage, SkeletonSection, CustomContainer, CustomText, Columns_Two,
Columns_Three, Icon, IconText, FixedFooter, ButtonLoading and Button. The rows of §2.1 check the arguments that the screen passes. Row 019
checks the back arrow, and row 021 checks the inert content of SkeletonSection.

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix |
|---|---|---|---|---|---|
| F1 | major | Services / OnClick_SaveChanges, exception handlers | TST sets `isLoading` to False in the CommunicationException and AllExceptions handlers, then raises the bubble exception. React raises the same exceptions but keeps `isLoading` True. The skeleton covers the lists, and "Save changes" stays disabled with the spinner until the user leaves the screen. The code comment and the test say "as in the original". No ADR, CR, board row or entry of `known-original-bugs.md` records it. | `app/src/pages/Services/hooks/useServices.ts:80-81, 98-100`; `app/src/pages/Services/Services.test.tsx:110-128` | Q2. With option (a): call `setIsLoading(false)` before `raiseBubbledToFlowHandler` for a CommunicationException and for an AllExceptions error. NotRegistered keeps `isLoading`. Change the test. |
| F2 | major | Services / GetServices failure | The runtime (`OutSystems.js:3853`) flushes the model and calls the screen `handleError` when a data fetch fails. App_Services passes the error to App_Common OnException, which shows the communication toast or the exception toast. React only sets the `list-error` class. The error of the query reaches no flow handler. CountryDetails has the same gap (`useCountryDetails.ts:110-115`). | `app/src/pages/Services/hooks/useServices.ts:46-52`; `app/src/api/client/queryClient.ts:15-18` | Q3. With option (a): a shared hook or query option passes the error of a screen data action to `raiseToFlowHandler` once per failed fetch. |
| F3 | minor | Services / Action_ChangeOrderLocal | TST sets `HasChanges` to True first and changes the lists in place. When a list action fails, the earlier steps stay. Example: a touch drag to the top of the favourites (NewOrder -1, bug B3) removes a row, then ListInsert2 fails. React works on copies and throws before it stores them, so the lists and `HasChanges` do not change. The rule "1:1, bugs included" (`known-original-bugs.md`, user 2026-10-14) applies. | `app/src/pages/Services/hooks/servicesState.ts:63-64, 98-101`; `app/src/pages/Services/hooks/useServices.ts:61-74` | Set `HasChanges` before the moves, and store the lists of each step that ran before the error. Add this case to B3. |
| F4 | minor | Services / list actions of Action_ChangeOrderLocal | The runtime `List.checkIndex` raises "Index out of bounds. Index n for bounds [0, m]." (or "… for empty list."). The flow handler shows this text in the toast. React throws "Index out of range". | `app/src/pages/Services/hooks/servicesState.ts:26-30` | Throw the runtime text from `checkIndex`, with the index and the bounds. |
| F5 | minor | Services / screen title | The runtime sets `document.title` to the screen title ("Services") when the screen mounts (`OutSystemsReactView.js:2009`). No code of the React app sets `document.title`, so the tab shows "UBTConnect" on every screen. | `app/index.html:6`; `app/src/app/routes.generated.ts:31` (title present, not used) | Q4. With option (a): the router sets `document.title` from the route title. |
| F6 | info | Services / Handler_SortableListOnDragEnd, exception handlers | TST sets `isLoading` to False before it raises in the CommunicationException and AllExceptions handlers. React does not. No UI path reaches it: the content is inert while `isLoading` is True. | `app/src/pages/Services/hooks/useServices.ts:75-77` | Add `setIsLoading(false)` with the fix of F1, for 1:1. |
| F7 | info | SortableList / OnParametersChanged | TST runs OnReady (SetupList) again when an input changes. React runs `setupList` on mount only. The comments of `SortableList.tsx` and `SortableList_Draggable.tsx` say "OutSystems runs it once". The inputs never change on Services, and the row keys mount a new Draggable for a new id. | `app/src/pages/Services/components/SortableList.tsx:44-46`; `app/src/pages/Services/components/SortableList_Draggable.tsx:29-30` | Correct the two comments. Add an effect on the inputs when a second caller with changing inputs appears. |

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

No behaviour difference. The DEV pack and the TST compiled code agree on every checked item of
`UBTConnect.App_Services.Services.mvc.js` and `UBTConnect.App_Services.controller.js`. Two notes:

- The pack cuts the options of the drag handle ("Radius: { Ge…"). TST gives radius Rounded and `IsInlineBlock`
  True. React follows TST (row 027).
- DEV lists the roles Registered and UBTOne_User. TST compiles them to `checkRegistered` only. React follows TST: any
  signed-in user (row 001).

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| - | - | - | - | no difference found |

### 6.2 KB pages vs TST (for the KB owner)

The KB files come from DEV (2026-10-05). In these two places a KB file disagrees with the DEV pack and with TST.

| Id | KB text | TST (compiled code) | Source |
|---|---|---|---|
| K1 | `ui/profile-services.md` ("drag not guarded") and BR-UBTCON-996: the SortableList has no deny list, so a mandatory row can be dragged to Suggestions and saved | The favourites SortableList has no deny list, but the suggestions SortableList passes DenyLists [SuggestionList.Id, FavouriteList.Id]. The KB does not name it. The effect of DenyLists is in SetupList (Q1); the React port denies the drop. | `UBTConnect.App_Services.Services.mvc.js:664-669` |
| K2 | BR-UBTCON-997, outcomes: "NotRegistered re-raised (each resets `isLoading`)" | The NotRegistered handler of OnClick_SaveChanges only raises; `isLoading` stays True. Only the CommunicationException and AllExceptions handlers reset it. | `UBTConnect.App_Services.Services.mvc.js:1321-1361` |

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | Behaviour of SortableList in module SortableJS: not in the dump, no KB page. Add the TST source of SetupList (`SortableJS.controller.js`) and check `setupList.ts` against it? | Rows 066 and 079 depend on it: the deny of a drop from Favourites into Suggestions (K1), the zero-based indexes of B3 and the pending move with PreventDomMove. B3 cites lines of this file, but `tst_source.py` does not hold it. | (a) Fetch the static file from TST (read-only GET, the standing approval for missing static files) into `migration/runtime-sources/`, then check the port in the review pass. (b) Accept the port as it is. | (a): the drag is the main interaction of the screen. |
| Q2 | After a failed save, reset `isLoading` as TST does, or keep the skeleton and the disabled button (F1)? | TST resets `isLoading` in two of the three handlers. React keeps the screen blocked until the user leaves. The code says "as in the original", but no record outside `migration/screens/` names it. | (a) Follow TST: reset `isLoading` for CommunicationException and AllExceptions; NotRegistered keeps it. (b) Keep React, and record the evidence in `known-original-bugs.md`. | (a): the compiled code is clear, and the user can try the save again. |
| Q3 | Pass a failed `GetServices` fetch to the flow handler, as the runtime does (F2)? | The runtime calls `handleError` after a failed data fetch, so App_Common shows a toast. React shows only the `list-error` class. CountryDetails has the same gap, so other screens can have it too. | (a) Shared fix: the screen data actions pass a failed fetch to `raiseToFlowHandler`. (b) Fix Services only. (c) Record a decision: no toast. | (a), checked in the report of App_Common. |
| Q4 | Set `document.title` from the screen title ("Services") (F5)? | The runtime sets the title of the browser tab on every screen. React keeps "UBTConnect" everywhere. `routes.generated.ts` holds the titles. | (a) The router sets `document.title` from the route title (app-wide). (b) Record a decision to keep "UBTConnect". | (a): a small shared change, 1:1 with TST. |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 9 | 8 | 0 | 1 | 0 | 0 | 0 | 0 |
| data | 8 | 5 | 0 | 1 | 0 | 2 | 0 | 0 |
| ui | 22 | 22 | 0 | 0 | 0 | 0 | 0 | 0 |
| actions | 30 | 22 | 6 | 0 | 0 | 0 | 2 | 0 |
| validations | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 10 | 10 | 0 | 0 | 0 | 0 | 0 | 0 |
| strings | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| **total** | **81** | **69** | **6** | **2** | **0** | **2** | **2** | **0** |

## 9. Follow-up pass (2026-10-27)

Rows settled or sharpened after the user answers of 2026-10-27 and the TST files that `tst_source.py` reads. A row that stays `unclear` has a new question that names what settles it. Every row below has `verified: "live"`.

| Row | Old verdict | New verdict | Evidence |
|---|---|---|---|
| App_Services-066 | `unclear` | `match` | migration/shell/sources/SortableJS.controller.js:87, 149-167, 375-389; TST UBTConnect.App_Services.Services.mvc.js:209-212, 662-671; app/src/pages/Services/components/FavouriteServiceList.tsx:40; app/src/pages/Services/components/SuggestedServiceList.tsx:37, 52; app/src/pages/Services/components/setupList.ts:59-67 |
| App_Services-079 | `unclear` | `match` | migration/shell/sources/SortableJS.controller.js:103-181, 202-340, 342-470; app/src/pages/Services/components/setupList.ts:32-217 |
