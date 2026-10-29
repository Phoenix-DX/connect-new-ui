# Device adapters

The original app is a Cordova app with native plugins. The React app is web / PWA only (ADR-1). Each native feature
sits behind an adapter in `src/platform/device/`. The project decides the web equivalent for each feature separately. Screens call
the adapter with the name, inputs and outputs of the OutSystems action. Screens never call the browser API.

Import an adapter by its file (`platform/device/barcodePlugin`). The device classes are in `platform/device/device.ts`.

## Barcode scanner (BarcodePlugin, ADR-11)

| File                                        | What                                                                                                   |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `src/platform/device/barcodePlugin.ts`      | the adapter: `checkBarcodePlugin()`, `scanBarcode(input, ui)`, `setBarcodeScanner`, `?scanner=` switch |
| `src/platform/device/barcodePluginTypes.ts` | records (ErrorRec, ScanResultRec), static entities, input defaults, error codes                        |
| `src/platform/device/webBarcodeScanner.ts`  | CheckBarcodePlugin / ScanBarcode web branches, ported 1:1 from `BarcodePlugin.controller.js`           |
| `src/platform/device/barcodePluginCss.ts`   | AddCSSJS: the scanner's stylesheet, `<style title="barcode-plugin-css">`, added once                   |
| `src/vendor/barcodeplugin/`                 | the TST web scanner `BarcodePlugin.OSBarcodePlugin.js`, unchanged (SOURCE.md), and its script loader   |

Flow, as in the original:

- **CheckBarcodePlugin**:
  - When Cordova is present, the action returns `OS-PLUG-BARC-0012` "Barcode Plugin is not available." (this build
    has no Cordova plugin).
  - When `navigator.mediaDevices` is missing (plain HTTP, old browsers), the action returns `OS-PLUG-BARC-0011`
    "Cordova is not available."
  - Otherwise the action adds the CSS and loads the vendored script once (a classic `<script>`, as `requireScript`).
    The answer is `IsAvailable`, `IsPWA`, ErrorCode `"0"`.
  - An exception gives ErrorCode `"-1"` with its message.
- **ScanBarcode**:
  - When the plugin is not available, the action returns the error of the check.
  - The action cuts instructions to 162 characters and button text to 16 characters (`...`).
  - A null direction, orientation or hint becomes back camera, adaptive or every format.
  - The scanner opens over the app. It hides `#reactContainer` and appends its own interface to `<body>`.
  - A read resolves with `ScanResult.Text`, `ScanResult.Format` (1-indexed) and ErrorCode `"0"`.
  - The user closes the scanner with the cross or the back button of the browser. The action then returns
    `OS-PLUG-BARC-0006` "Couldn't scan because the process was cancelled."
  - Callers skip their message for that code.
- The camera and orientation warnings of the scanner go to the `ui.showFeedbackMessage` that the caller passes. This is
  the `showFeedbackMessage` of the shell; `src/platform/device` does not import the shell.
- As in the original, nothing catches a rejection inside `openScanner`, so the action never resolves.
- The cut of long texts never moves back to a space. The original reads a `lastSpaceIndex` property that strings do
  not have.

Which scanner answers:

| Build                   | Default                                                            | Switch                                                                                                                |
| ----------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| production (no mocks)   | the web scanner                                                    | none                                                                                                                  |
| dev, demo (mocks built) | the fictional scanner of `OrbitAdminEventDetail/mocks.ts` (Q1 = A) | `?scanner=web` → the web scanner, remembered for the tab (sessionStorage `device:scanner`); `?scanner=mock` goes back |

The scanner needs a secure context (HTTPS or localhost) and camera permission. iOS has no `BarcodeDetector`. The
bundled ZXing decodes. To check without a camera, use Chrome with
`--use-fake-ui-for-media-stream --use-fake-device-for-media-stream` on
`/UBTConnect/OrbitAdminEventDetail?In_EventId=7315&…&scanner=web`. When you click Scan QR Code, the scanner shows the
test pattern of Chrome. The cross closes it.

Tests: `src/platform/device/*.test.ts` (branches, result mapping, close, CSS, switch), `src/vendor/barcodeplugin/index.test.ts`
(the vendored bytes are those of TST).

## Camera (CameraPlugin TakePhoto, PassportScan Q2 (a))

| File                                     | What                                                                                                  |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `src/platform/device/cameraPlugin.ts`    | the adapter: `checkCameraPlugin()`, `takePhoto(input)`, records, static entities, error codes         |
| `src/platform/device/webCamera.ts`       | the TST web camera (`Camera.js`, `CameraStream.js`, `NativeCamera.js`, `Errors.js`), ported 1:1 to TS |
| `src/platform/device/cameraPluginCss.ts` | LoadCSSJS: the camera stylesheet, `<style title="camera-plugin-css">`, added once                     |

The TST camera scripts are small classes, so they are ported to TypeScript, not vendored. Every build uses the web
camera; there is no mock camera. Flow, as in the original:

- **CheckCameraPlugin**: with Cordova, `OS-PLUG-CAMR-0018` "The plugin is not available" (no native plugin). Without
  `navigator.mediaDevices`, `OS-PLUG-CAMR-0004`. Otherwise the action adds the CSS and answers `IsAvailable`, `IsPWA`.
- **TakePhoto**: a negative Width or Height gives `OS-PLUG-CAMR-0030`. On a desktop (or with AllowMultiplePhotos) the
  camera view hides `#reactContainer` and appends `div#camera-interface.camera-wrapper` to `<body>`: a `<canvas>`, the
  `<video>` of `getUserMedia({ facingMode, aspectRatio: exact window ratio })` and, when the video loads, one white
  round button `#camera-white-button`. The click draws the video on the canvas and returns
  `MediaResult.Thumbnail` (base64, JPEG or PNG at Quality / 100). On a phone or tablet a hidden
  `<input type="file" accept="image/*" capture>` opens the camera of the device.
- Errors: no camera, permission denied or a refused constraint give `OS-PLUG-CAMR-0003`; no `getUserMedia` gives
  `OS-PLUG-CAMR-0004`; on a phone, no file `0002` and not an image `0001`.
- The view has no cancel or switch button. The back button of the browser closes it (the view pushes a history entry
  when it opens), and the action then never resolves, as in the original.
- AllowEdit (the image editor) and the native branch are not ported.

To check without a camera, use Chrome with `--use-fake-ui-for-media-stream --use-fake-device-for-media-stream` on
`/UBTConnect/PassportScan?LoginMemberId=…&TargetId=…`, then Scan passport in the fake portal.

Tests: `src/platform/device/cameraPlugin.test.ts` (mocked `navigator.mediaDevices`: picture, permission denied, no
device, no API, back button, phone input, file errors).
