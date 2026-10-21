# Device adapters

The original app is a Cordova app with native plugins. The React app is web / PWA only (ADR-1). Each native feature
sits behind an adapter in `src/lib/device/`. The project decides the web equivalent for each feature separately. Screens call
the adapter with the name, inputs and outputs of the OutSystems action. Screens never call the browser API.

Import an adapter by its file (`lib/device/barcodePlugin`). The file `lib/device.ts` (device classes) has the same
name as the folder.

## Barcode scanner (BarcodePlugin, ADR-11)

| File                                   | What                                                                                                   |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `src/lib/device/barcodePlugin.ts`      | the adapter: `checkBarcodePlugin()`, `scanBarcode(input, ui)`, `setBarcodeScanner`, `?scanner=` switch |
| `src/lib/device/barcodePluginTypes.ts` | records (ErrorRec, ScanResultRec), static entities, input defaults, error codes                        |
| `src/lib/device/webBarcodeScanner.ts`  | CheckBarcodePlugin / ScanBarcode web branches, ported 1:1 from `BarcodePlugin.controller.js`           |
| `src/lib/device/barcodePluginCss.ts`   | AddCSSJS: the scanner's stylesheet, `<style title="barcode-plugin-css">`, added once                   |
| `src/vendor/barcodeplugin/`            | the TST web scanner `BarcodePlugin.OSBarcodePlugin.js`, unchanged (SOURCE.md), and its script loader   |

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
  the `showFeedbackMessage` of the shell; `src/lib` does not import the shell.
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

Tests: `src/lib/device/*.test.ts` (branches, result mapping, close, CSS, switch), `src/vendor/barcodeplugin/index.test.ts`
(the vendored bytes are those of TST).
