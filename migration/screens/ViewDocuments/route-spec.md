# Route spec: ViewDocuments

Sources (analysis/sources/, extracted unchanged, CRLF → LF, from capture/survey-UBTConnect.json `sources`). The newer TST copy of the screen in migration/runtime-sources/ differs only in debugger ids.
- `S` = migration/screens/ViewDocuments/
  analysis/sources/UBTConnect.Legacy_OrbitEventsFlow.ViewDocuments.mvc.js
- `SB` = migration/screens/ViewDocuments/analysis/
  sources/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.mvc.js
- `LS` = migration/screens/
  ViewDocuments/analysis/sources/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.LoadingSpinner.mvc.js
- `C` = migration/
  runtime-sources/Connect2_OrbitMobile_MUI.controller.js.

No capture (no-capture.json, user 2026-10-16): the screen is built from the compiled code.

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/ViewDocuments` with In_MemberId, In_EventId (Long Integer), In_EventName (Text), In_EventStartDate, In_EventEndDate (DateTime), In_EventLocation (Text) [S model :12-47] |
| Tier | lite |
| Captured | not captured (no-capture.json: not reachable read-only on TST) |
| Shared/shell components used | Layout_Orbit, MenuIcon__UpdatedOSUI (shared/Connect2_LegacyShared); Skeleton_Loading, NoInformation_Orbit, ContactHelpdesk_Footer, lib addExtensionToFile / getFormattedDateTime (shared/Connect2_OrbitMobile_MUI); openInApp_TryOpenFileInApp (shared/UBTConnect_Utils); useHandleDownload (shared/FileTransferPlugin); CommonUI_InsideLayout (shared/UBTConnect); OSBlock, OSList, usePopupWidget; useViewState, useWasRestoredFromCache, raiseToFlowHandler, isUserException, feedbackMessageAutoClose, showFeedbackMessage (shell) |
| Screen-specific components | ScreenBlock_ViewDocuments, LoadingSpinner (own blocks, catalog "own: ViewDocuments, not built"); components/actions.ts (GetContactHelpdeskSubject_Event, C :1961-1990) |

## Specification
### Structure
Screen [S view :186-245]: ScreenBlock_ViewDocuments `$b1` (all six inputs; Menu, CommonUI_Elements empty), CommonUI_InsideLayout `$b2`.

ScreenBlock [SB :242-626]:
- Layout_Orbit CustomClass "orbit-detail orbit-header-center".
- HeaderLeft MenuIcon__UpdatedOSUI (Auto).
- Title Expression In_EventName.
- Content, in this order of conditions:
  - IsFetchingData → Skeleton_Loading (ViewDocument) [:494-510].
  - Else, Response.EventDocuments not empty → container "full-width padding-x-m padding-y-m" [:310-436]. It holds a hint row, a document list and a spinner container:
    - Hint row: Icon "icon" file-text-o, Text "margin-left-base" "Tap the link/s below to view/download documents".
    - Document list: container "full-width margin-top-m" › List List_EventDocuments "list list-group" of EventDocuments.
    - Each row is a Container with OnClick (cursor pointer). Its extended class is "full-width" + " margin-bottom-m", but not on the last row.
    - The row has Icon "icon orbit-icon-file-pdf color-orbit-red-5" file-pdf-o.
    - The row has Expression DocumentName with extended class "margin-left-base underline" + (IsViewed ? " text-neutral-7" : " color-orbit-primary-7").
    - Then container "backwards-compatibility" › LoadingSpinner(IsLoadingDocument) [:437-466].
  - Else, fetched → NoInformation_Orbit "There are no documents available for this event at the moment. For any enquiries please contact the event organiser." [:468-489].
- BottomBar: EventDocuments not empty → ContactHelpdesk_Footer [:516-553].
- CommonUI_Elements: FileTransfer HandleDownload (no markup) and the placeholder [:555-625].

LoadingSpinner [LS :135-198]: Container Root_LoadingSpinner › Popup Popup_LoadingSpinner ("popup-dialog", ShowPopup IsProcessingData) › "orbit-spinner-cont" › Icon "icon orbit-spinner-icon" spinner 2x, Text "bold margin-top-base" "Loading". Root componentDidUpdate → CopyClassesAcrossPortal [LS :223-246].

The List uses virtualization with vertical rows (no `disable-virtualization`) → `style="position: relative;"`.

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| Connect2_OrbitMobile_MUI `ScreenBlock_ViewDocuments/DataActionGetEventDocuments` | data action (on demand) | OnReady → RefreshDocumentData [SB :903-952, :1102-1132, :653-680] | block variables IsFetchingData, IsLoadingDocument, In_MemberId, In_EventId, In_EventName, In_EventLocation, In_EventStartDate, In_EventEndDate (list EventDocuments left out) | Response.EventDocuments (DocumentURL, DocumentName, LastUpdatedOn, LastUpdatedBy) | not in MCP; must check that the member takes part in the event | real (orbit.ts orbitEventDocuments: event 7301, four PDFs; other events none), empty, loading, error |

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| block | OnReady [SB :903-952] | restored from the view cache → nothing; else IsFetchingData True, RefreshDocumentData, OnAfterFetch [SB :1012-1043]: EventDocuments = Response list with IsViewed False; IsFetchingData False | GetEventDocuments | – | – |
| document row | OnClick → OnClick_Document(URL, Name) [SB :684-764] | IsLoadingDocument → nothing; else IsLoadingDocument True; OpenInApp_TryOpenFileInApp(AddExtensionToFile(Name, PDF), URL, "orbit-documents", "pdf"); not in app → Action_OpenDoc(Name) [SB :782-828] (IsLoadingDocument False, the row becomes viewed), IsLoadingDocument False; UnknownError → IsLoadingDocument False, raise | – | web: the PDF in a new tab (U18, Q2) | – |
| HandleDownload | OnDownloadComplete / OnDownloadError [SB :962-1083] | native app only (never raised in the browser): OpenDocumentFromLocalPath (logged) + Action_OpenDoc; error: IsLoadingDocument False, FeedbackMessage_AutoClose("", FileTransferError.Message, Info, True, "", 0, False) | – | – | info message |
| footer | Click → OnHandle_ContactHelpdesk [SB :838-868] | ContactHelpdesk(GetContactHelpdeskSubject_Event(In_EventName, In_EventStartDate, In_EventEndDate, In_EventLocation), In_EventName) | – | screen OnHandle_ContactHelpdesk [S :270-318]: GetHasOrbitAccess → `/UBTConnect/ContactByEmailOrbitHelpdesk` (In_Subject, In_EventId, In_EventName, In_MilestoneId "") | no access: "You don't have access to Orbit. …" after transition (type 3), HomeFeed |
| any | exception | Legacy_OrbitEventsFlow handleError (raiseToFlowHandler) | – | – | flow handler |
| entry | – | EventDetail OnHandle_NavigateToViewDocuments (built) when Get_HasDocuments; event 7301 has none on its capture | – | – | – |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | Response.EventDocuments not empty [SB :309] | no | real (review URL Q1) |
| loading | IsFetchingData [SB :308, :494] | no | loading |
| empty | fetched, no document [SB :468] | no | empty, or another event |
| opening | IsLoadingDocument (spinner popup) | no | not reachable in the browser (the flag is reset in the same click) |
| error | data action fails → flow handler | no | error |

## Patterns used
- P-PARAMS: query inputs with the original names; navigation with the original parameter names.
- P-DATA / P-CALLS: api.ts `callAction('Connect2_OrbitMobile_MUI', 'ScreenBlock_ViewDocuments/DataActionGetEventDocuments')` in OnReady only.
- P-MOCKS: mocks.ts contractHandler from the shared Orbit world (src/mocks/fictional/orbit.ts).
- P-STATES: skeleton while IsFetchingData is True, NoInformation when empty.
- P-BACK: model kept with useViewState; OnReady does nothing after a restore.
- P-LIST: OSList for List_EventDocuments.
- P-DIALOG: the LoadingSpinner Popup through usePopupWidget.
- P-FLAGS: useFlagOn('mobileOrbitAccess') for GetHasOrbitAccess.

## Feature flags
- `action:getHasOrbitAccess`: MCP unavailable (tst=on). Decision: default-only, TST value on (user, 2026-10-14). The React app uses useFlagOn('mobileOrbitAccess') with both paths of the handler (no-access branch as compiled).
- `clientVar:App_PIN_BiometricEnabled`: not a flag (user, 2026-10-14); shell only.

## Unclear points
- Mock documents and review without capture → Q1 (decision, answered: A [questions.md Q1])
- Web branch of the document click (new tab, viewed at once) → Q2 (decision, answered: A [questions.md Q2])

## Decisions to confirm
- Q1 → A: four PDF documents of event 7301 (orbit.ts orbitEventDocuments, links on example.com), not reachable from
  EventDetail (its capture: HasDocuments false). Review URL:
  `/UBTConnect/ViewDocuments?mocksession=unlocked&In_MemberId=990001&In_EventId=7301&In_EventName=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul&In_EventStartDate=2026-10-23T09%3A00%3A00Z&In_EventEndDate=2026-10-25T17%3A00%3A00Z&In_EventLocation=Bahia%20Blanca%20Main%20Hall`
  (empty state: `In_EventId=7302`; loading `&mock=loading`; error `&mock=error`).
- Q2 → A:
  - A click opens the PDF in a new tab (U18) and marks the row viewed (text-neutral-7) at once.
  - The React app wires the native download events, but the browser never raises them.
  - The React app ports the "Loading" spinner popup, but the web does not show it.
- Markup not captured: built from the compiled view (SB, LS).

## Change requests
- none

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| – | no capture (no-capture.json) | – | – | – | – | – | – |

## Server-side notes
- GetEventDocuments must return the documents of In_EventId only to a member of the event (inputs are client data).
