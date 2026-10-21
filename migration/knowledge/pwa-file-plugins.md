# File open/download when the original runs as a PWA (browser, no Cordova)
Paths: RS=migration/runtime-sources, UT=migration/screens/OrbitLanding/analysis/sources/raw/UBTConnect_Utils.controller.js.
Static reading only. Nothing ran. FileViewerPlugin.osfileviewerlib_bundle.js is NOT in RS (see Open items).
## 1. Plugin checks in a browser without Cordova
- CheckFilePlugin (RS/FilePlugin.controller.js:201+): runs requireScript scripts/FilePlugin.wrapper.js, then IsCordovaDefined
  (CommonPlugin.controller.js:505-513, `typeof(cordova)==="undefined"`). No Cordova -> IsAvailable=False, error OS-PLUG-FILE-0001
  "Cordova isn't defined." (FilePlugin.controller.js:~258-270). There is no PWA test in this action. => ALWAYS False on the web.
- CheckFileTransferPlugin (RS/FileTransferPlugin.controller.js:1-140): requireScript scripts/FileTransferPlugin.wrapper.js (:~20),
  IsCordovaDefined; false branch runs CheckPWA JS (:274-278): `typeof(OSFileTransferPluginWrapper)!=="undefined" &&
  typeof(OSFileTransferPluginWrapper.Instance)!=="undefined"`. The wrapper is UMD and sets global OSFileTransferPluginWrapper
  (FileTransferPlugin.wrapper.js:2-3), so it holds -> IsAvailable=True, IsPWA=True (:114-121).
- CheckFileViewerPlugin (RS/FileViewerPlugin.controller.js:1-110) runs requireScript FileViewerPlugin.wrapper.js.
  Then, without Cordova, it runs these steps:
  - LoadCSS JS (:229+, injects a style titled fileviewer-plugin-css).
  - requireScript scripts/FileViewerPlugin.osfileviewerlib_bundle.js (:74).
  - CheckPWA JS (:224-228) `IsAvailable = OSFileViewerLib !== undefined`. If the bundle defines OSFileViewerLib ->
  IsPWA=True, IsAvailable=True (:84-90); else error OS-PLUG-FLVW-0001. FileViewerPlugin.wrapper.js has no web code: it only forwards
  to Capacitor/Synapse (wrapper:5-70; no `isPWA`, no `window.open`, no `<a>`). The web viewer is the separate OSFileViewerLib
  (used e.g. FileViewerPlugin.controller.js:1227, 1504, 3030: openDocumentFromURL).
## 2. TryOpenFileInApp in a PWA (UT:4568-4816)
- Order: Get_FileExtension, CheckFileTransferPlugin, CheckFilePlugin, CheckFileViewerPlugin (UT:~4620-4640). The download branch
  needs `FileTransfer.IsAvailable AND File.IsAvailable AND FileViewer.IsAvailable` (UT:~4645). File.IsAvailable is False
  without Cordova (see 1). The condition then fails whatever the other two say, and the flow falls to
  OpenInApp_ViewFile_Fallback(DownloadUrl) (UT:4716-4717), IsInApp=False (:4719). The branch has no isPWA test and its DownloadFile paths use FilePlugin
  GetMetadata/CreateDirectory (Cordova file system), so it is never reached on the web.
- OpenInApp_ViewFile_Fallback (UT:4830-4894): CheckInAppBrowserPlugin; if available InAppBrowser.Open(url, SYSTEM); else JS
  `setTimeout(() => window.open(DownloadUrl, "_blank"))` (UT:4890-4893). On the web the InAppBrowser check is Cordova-based
  (not read here). The user therefore sees a NEW TAB with the URL (browser shows/downloads it as it likes). No XHR/blob/`<a download>`.
- Therefore: no in-app viewer, no `<a download>`, no "Please check your downloads folder" toast.
## 3. Where HandleDownload / `<a download>` does run
- FileTransferPlugin.wrapper.js: OSFileTransferWrapper.downloadFile(options) checks `isPWA()` (:314-316 = no Capacitor/Cordova
  FileTransfer plugin) and then downloadWithHeaders (:105-128): XHR responseType blob -> onDownloadComplete (:56-86) dispatches
  window events downloadcomplete / downloadprogress / fileTransferError, then Blob + hidden `<a download=filename>`.click().
  This only runs when something calls FileTransferPlugin DownloadFile (or DEPRECATED_DownloadFile, controller:457-520, which has
  a DownloadFilePWA JS node at :508). In TryOpenFileInApp DownloadFile is unreachable on the web (see 2).
- FileTransfer.HandleDownload block (MilestoneDetail raw HandleDownload.mvc.js:297-350, :534-545): OnReady runs
  DEPRECATED_CheckFileTransferPlugin; when IsPWA it registers web listeners (RegisterWebCallbacksJS :759) for the three window
  events and relays them to OnDownloadProgress/Complete/Error. Passive listener; it starts no download.
## 4. Other opener: Connect2_OrbitMobile_MUI OpenDocument (RS/Connect2_OrbitMobile_MUI.controller.js:6018-6214)
- Url<>"" -> CheckForCordova JS: `if(!window.cordova) HasCordova=false` (:6202-6207). Without Cordova -> OpenInNewTab JS
  `setTimeout(() => window.open(Url,"_blank"),0)` (:6209-6214). The FileViewer path (OpenDocumentInFileViewer) is Cordova-only.
## 5. Clone
- actions.ts:318-345 openInApp_TryOpenFileInApp always calls openInApp_ViewFile_Fallback(downloadUrl) and returns
  {IsInApp:false, Filepath:''}. It logs NotPorted only when window.cordova exists.
- handleDownload.ts:63-130: useHandleDownload ports the PWA listener logic. It listens when OSFileTransferPluginWrapper exists.
  The React app never loads that wrapper, so the listener stays inert.
- Callers: Feed_Embeded.tsx:65 (pdf, folder connect-feed-documents); ViewDocuments/ScreenBlock_ViewDocuments.tsx:153 + useHandleDownload :171;
  MilestoneDetail/ScreenBlock_AccommodationHost.tsx:220 + useHandleDownload :235. No `openDocument` / OpenDocument port in app/src
  (only mentions in the two blocks' comments and Feed_Embeded README).
## 6. Clone vs original-as-PWA
- TryOpenFileInApp: same outcome (fallback, window.open "_blank", IsInApp False). The React app matches. The File plugin check alone forces it.
- Difference candidates, all dormant:
  - (a) The original app loads the plugin wrappers and injects the fileviewer CSS style (`fileviewer-plugin-css`) as a side
    effect of the Check* actions. The React app does not.
  - (b) The fallback of the React app never tries InAppBrowser.Open (Cordova-only; same on the web).
  - (c) HandleDownload events never fire in either app, since nothing starts a web download.
- Open items: (1) osfileviewerlib_bundle.js not captured, so it is unverified whether OSFileViewerLib exists in the web build. This does not
  change the TryOpenFileInApp result. (2) Not verified at runtime; OS-PLUG-FILE-0001 path read from source only.
## Implication for PWA decision P8
The original PWA never downloads in-app via TryOpenFileInApp (File plugin is Cordova-only). Real parity is to open a new tab, as the React app
does. Adding an in-app `<a download>` adds a new feature; it does not port one.
