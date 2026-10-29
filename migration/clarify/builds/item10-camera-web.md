# Item 10 build: PassportScan web camera (Q2 (a))

User decision PassportScan Q2, asked again on 2026-10-29, answer (a): port the web camera path as TST. That is the
browser camera, JPEG quality 60 and the back camera. Permission denied or no camera follows the TST error path (log,
empty image). The UI comes from the CameraPlugin compiled code. Fact: `migration/clarify/review/mcp-session-2026-10-29.md`
row 8. Not run: `route.py ready`, `npm run ci`, `npm run unused`, parity.

## Place in the architecture

- The adapter is in `src/platform/device/`, next to the barcode adapter (ADR-1, the ADR-11 pattern). Screens call the
  OutSystems action by its name, inputs and outputs: `takePhoto(input)` gives `{ Success, Error: { ErrorCode,
  ErrorMessage }, MediaResult: { Type, URI, Thumbnail, Saved } }`.
- The camera code is ported to TypeScript and is not vendored. Reason: the TST camera scripts are small classes,
  declared with `class` at the top level of classic scripts. These do not become `window` properties, so a typed
  loader (as `vendor/barcodeplugin`) cannot reach them. The port keeps the markup, classes, order and error codes,
  and lets unit tests run without a camera.
- The native branch is not ported (web / PWA only). With Cordova present, CheckCameraPlugin returns the TST answer
  without the plugin: `OS-PLUG-CAMR-0018` "The plugin is not available". Web_EditPhoto is not ported: no caller sets
  AllowEdit (`AllowEdit: false` in the input type).

## Files

Code (new):
- `app/src/platform/device/cameraPlugin.ts`: CheckCameraPlugin, TakePhoto, Web_TakePhoto and TakePhotoJS; records,
  static entities (EncodingType JPEG 1 / PNG 2, CameraDirection BackCamera 1 / FrontCamera 2), error constants.
- `app/src/platform/device/webCamera.ts`: `isMobileOrTablet`, `WebCamera`, `CameraStream` (camera view),
  `NativeCamera` (camera input of a phone or tablet), `CAMERA_ERRORS`.
- `app/src/platform/device/cameraPluginCss.ts`: LoadCSSJS, the TST stylesheet unchanged (checked: identical to
  `CameraPlugin.controller.js` :65, 5932 characters) in the `legacy` layer.
- `app/src/platform/device/cameraPlugin.test.ts`.

Code (changed):
- `app/src/pages/PassportScan/camera.ts`: `takePassportPhoto()` calls `takePhoto(PASSPORT_TAKE_PHOTO)` in every build.
  On success it logs "Camera plugin success" and returns `{ Image: MediaResult.Thumbnail }`. On an error it logs
  `Camera plugin error code: <code>\r\n Message: <message>` and returns `{ Image: "" }`. The fictional picture is
  gone from this file.
- `app/src/pages/PassportScan/PassportScan.test.tsx`: `takePhoto` is a test double that returns the fictional
  picture; there is a new error test.
- `app/src/mocks/fictional/passport.ts`: header comment only (the picture is now only a test double).

Docs and knowledge: `app/docs/guides/device.md` (new section "Camera"), `migration/knowledge/runtime-sources.md` (2
rows), `migration/clarify/builds/item10-PassportScan.md` (pointer to this note).

Fetched read-only from the TST manifest (static GET, no sign-in) into `migration/runtime-sources/`:
`CameraPlugin.Camera.js`, `CameraPlugin.Errors.js`, `CameraPlugin.NativeCamera.js`, `CameraPlugin.model.js`,
`CameraPlugin.ImageEditor.js`, `CameraPlugin.Cropper.js` and `UBTJavaScriptUtils.controller.js`. For
`NativeCamera.js` the version query had a typing error (`dIv` for `d8v`). The query is only a cache key and the server
sent the current file (HTTP 200).

## TST evidence

| Fact | Source |
| --- | --- |
| The caller: `TakePhoto(60, 0, 0, true, JPEG, false, BackCamera, false, false, true)`. On success: log, `Image = BinaryToBase64(MediaResult.Thumbnail)`. On error: log `"Camera plugin error code: " + code + "\r\n" + " Message: " + message`, Image stays "" | `OrbitPassportScanC2.controller.js` :81-131 (call :96), BinaryToBase64JS :75-79 |
| TakePhoto signature (`…, allowEditIn, allowMultiplePhotosIn, includeMetadataIn`) | `CameraPlugin.controller.js` :2873 |
| `JSUtils_Console_Log` is `console.log(Message)` | `UBTJavaScriptUtils.controller.js` :778-782 |
| CheckCameraPlugin: Cordova → native check; `!!navigator.mediaDevices` → AddDependencies, IsAvailable, IsPWA, "0"; else `OS-PLUG-CAMR-0004` | `CameraPlugin.controller.js` :71-282, :283-287, 0004 at :165-169 |
| Native check without the plugin: `OS-PLUG-CAMR-0018` "The plugin is not available" | `CameraPlugin.controller.js` :897-903 |
| TakePhoto: Width or Height < 0 → `OS-PLUG-CAMR-0030`; "Is PWA?" → Web_TakePhoto; only `MediaResult.Thumbnail` is set | `CameraPlugin.controller.js` :2910-2945 |
| AddDependencies loads Camera, Errors, CameraStream, NativeCamera, Cropper, ImageEditor; LoadCSSJS | `CameraPlugin.controller.js` :1-69 |
| TakePhotoJS: `facingMode = CameraDirection == '2' ? 'user' : 'environment'`, `fileType = EncodingType == '2' ? 'png' : 'jpeg'`; cuts the data URL after `;base64,`; parent `#reactContainer` | `CameraPlugin.controller.js` :3971-4010 |
| Desktop or batch → CameraStream; phone or tablet → NativeCamera | `CameraPlugin.Camera.js` (WebCamera constructor), regular expressions line 3 (copied, checked identical) |
| Camera view: `history.pushState`, `div#camera-interface.camera-wrapper` in `<body>`, `canvas#camera-canvas`, `video#camera-video[playsinline]`, parent hidden; `getUserMedia({ audio: false, video: { facingMode, aspectRatio: { exact } } })`; one button `div.camera-button-wrapper > button#camera-white-button.camera-button`; `toDataURL('image/jpeg', quality / 100)`; popstate closes the view without a callback | `CameraPlugin.CameraStream.js` (`#build`, `open`, `#buildButton`, `#onTakePhotoClick`, `#onBackButton`) |
| Phone or tablet: hidden `input#native-input[type=file][accept=image/*][capture=environment]`; no file → 0002; not an image → 0001 | `CameraPlugin.NativeCamera.js` (`#build`, `#onInput`, `#prepareImage`) |
| Error codes `OS-PLUG-CAMR-0001`..`0004` and texts | `CameraPlugin.Errors.js` :1-8 |
| MediaResultRec: Type default 0 (the web branch does not set it) | `CameraPlugin.model.js` :216-245; values in `moduleinfo.json` |

Differences from the brief: TST has no cancel and no switch button, and the brief asked for both. The view has only
the capture button, and the browser back button closes it. TST has no cancel error code for TakePhoto: `CANCELLED`
(13) belongs to the image editor. `MediaResult.Type` stays 0, not Photo, as in TST.

## Tests

- `src/platform/device/cameraPlugin.test.ts`, 13 tests, mocked `navigator.mediaDevices`: the picture (back camera, exact
  aspect ratio, JPEG 0.6, Thumbnail base64, view removed, `#reactContainer` shown again, track stopped); permission
  denied and no camera → 0003; no `mediaDevices` → 0004 (controller text); no `getUserMedia` → 0004 (Errors.js text);
  back button → view closed, no answer; Width -1 → 0030; Cordova → 0018; phone: file input, picture, no file 0002,
  not an image 0001; `isMobileOrTablet`; CSS added once.
- `src/pages/PassportScan/PassportScan.test.tsx`: TakePhoto inputs, `{ Image: <base64> }` and the success log; the
  error log and `{ Image: "" }`.
- Run: `npx tsc --noEmit` OK; eslint and prettier on the changed files OK; `npx vitest run src/platform/device
  src/pages/PassportScan` 45/45; `npm run arch` no new violations.

## What the user sees on localhost

Checked on the dev server of this repo (http://localhost:5174) with Chrome and its fake camera
(`--use-fake-ui-for-media-stream --use-fake-device-for-media-stream`), at
`/UBTConnect/PassportScan?LoginMemberId=990001&TargetId=7301`:

1. In the fake portal, Scan passport. The browser asks for camera permission (the first time).
2. The app is hidden and the camera fills the window, with a white round button at the bottom center (70 px).
3. Click the button. The view closes, the app comes back, and the portal shows the review with the JPEG picture.
   The console shows "Camera plugin success".
Steps 1-3 were checked in the browser; steps 4-6 only in the unit tests.

4. Permission denied or no camera: the view closes at once. The console shows `Camera plugin error code:
   OS-PLUG-CAMR-0003 …` and the portal gets no image (`ocr:error`).
5. The browser back button while the camera shows: the view closes and the portal stays on "Waiting for the camera…".
6. With a phone user agent (or a real phone), the device camera opens through the file input, not the in-page view.

Camera needs a secure context (HTTPS or localhost). Not checked: Safari and Firefox with the exact aspect ratio
constraint (if a browser refuses it, the 0003 path runs), and a real phone.

## Questions (for the user)

1. Back button while the camera shows. TST closes the view and never answers, so the portal waits.
   (a) keep TST (built); (b) answer `{ Image: "" }` on back, so the portal gets `ocr:error` and shows its fallback
   (React only); (c) add a cancel button (not in TST). Recommendation: (a), for parity. Choose (b) if the demo needs a
   way out of the waiting view.
2. Phone and tablet. TST uses the device camera through `<input type="file" capture>`, not the in-page view.
   (a) keep TST (built); (b) the in-page view on every device. Recommendation: (a).
3. The capture button has no text or label (TST markup). (a) keep TST (built); (b) add `aria-label` for screen
   readers (a DOM difference). Recommendation: (a) now, (b) as a production item.
