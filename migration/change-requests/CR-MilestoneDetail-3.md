# CR-MilestoneDetail-3: shared — OpenInApp_TryOpenFileInApp and FileTransfer.HandleDownload (open an Orbit document)

- Status: applied
- Raised by: MilestoneDetail, 2026-10-16
- Block: `app/src/shared/UBTConnect_Utils/lib/actions.ts` (OpenInApp_TryOpenFileInApp, AddExtensionToFile of
  Connect2_OrbitMobile_MUI) and a web port of `FileTransferPlugin.FileTransfer.HandleDownload` (OnDownloadProgress /
  Complete / Error, OpenDocumentFromLocalPath)
- Other routes using it: Orbit screens with a document icon (ViewDocuments, EventBooklet, MealHost, …)
- Related question: MilestoneDetail Q4

## Evidence
- `…ScreenBlock_AccommodationHost.mvc.js:367-415` (HeaderRight icon `orbit-icon-file-doc`, visible when HasDocument),
  `:1840-1860` (HasDocument = Get_Document.DocumentURL <> ""), `:1900-1973` (OnClick_OpenDocument: IsLoadingDocument,
  OpenInApp_TryOpenFileInApp(AddExtensionToFile(DocumentName, PDF), DocumentURL, "orbit-documents", "pdf")),
  `:1974-2032` and `:2567-2616` (HandleDownload callbacks: messages "The file you are trying to open is no longer
  available and cannot be opened." / "Unfortunately this file could not be opened. Please try again at a later time.").
- `migration/screens/MilestoneDetail/analysis/calls.md` DataActionGet_Document: DocumentURL and DocumentName empty (no
  document captured). No shared port of OpenInApp_TryOpenFileInApp exists.

## Request
Port the web branch of OpenInApp_TryOpenFileInApp and HandleDownload. Until then the route renders the icon when
HasDocument and its click is not ported; the mock world has no document (Q4 A).

## Resolution (foundation owner, F11, 2026-10-16)
- `openInApp_TryOpenFileInApp` and `openInApp_ViewFile_Fallback` in `app/src/shared/UBTConnect_Utils/lib/actions.ts`
  (UBTConnect_Utils.controller.js:4568-4895, OrbitLanding raw copy). Web branch: Get_FileExtension JS node (throws on an empty
  name, as the original); the plugin checks need Cordova or the plugins' PWA wrappers (OSFileTransferPluginWrapper…, CheckPWA
  FT:270-280), which the browser app does not load, so the action always takes OpenInApp_ViewFile_Fallback (new tab, decision
  U18 as openInApp_OpenExternalLink) and IsInApp False. The Cordova download branch (CreateDirectory / GetMetadata /
  DownloadFile) is documented and logged as not ported when a Cordova runtime is present, as OpenInApp_OpenApp's port does.
- `addExtensionToFile` in `app/src/shared/Connect2_OrbitMobile_MUI/lib/actions.ts` (C:523-575; original bug kept: the
  extension is appended without a dot).
- `useHandleDownload` in `app/src/shared/FileTransferPlugin/lib/handleDownload.ts`: OnReady DEPRECATED_CheckFileTransferPlugin;
  PWA → the window listeners `downloadprogress` / `downloadcomplete` / `fileTransferError` (RegisterWebCallbacks), JSON mapped to
  FileDownloadResult / FileTransferError; Cordova scopes not ported; OnDestroy removes the listeners. In the browser app
  nothing registers, so the events never fire.
- Route: OnClick_OpenDocument (IsLoadingDocument guard, TryOpenFileInApp, not in app → IsLoadingDocument False, UnknownError
  handler) and the HandleDownload events (complete → OpenDocumentFromLocalPath logged as Cordova-only, IsLoadingDocument
  False; error → the two messages via FeedbackMessage_AutoClose Info). The mock world still has no document (Q4), so the
  icon stays hidden. Parity: MilestoneDetail 0.
