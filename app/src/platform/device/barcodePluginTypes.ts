/* Records, static entities and defaults of the OutSystems BarcodePlugin module (CheckBarcodePlugin, ScanBarcode), as
   the callers read them. Sources: migration/runtime-sources/BarcodePlugin.controller.js (actions, proxies :180-199,
   :709-723), BarcodePlugin.model.js (ScanResultRec, ScannerResultInternalRec), CommonPlugin ErrorRec, and
   migration/knowledge/static-entities-tst.json (BarcodePlugin.* values). */

/** CommonPlugin ErrorRec. ErrorCode is Text: "0" after a success, "-1" after an exception. */
export interface BarcodePluginError {
  ErrorCode: string;
  ErrorMessage: string;
}

/** CheckBarcodePlugin outputs. */
export interface CheckBarcodePluginResult {
  IsAvailable: boolean;
  /** true when the web scanner (OSBarcodePlugin.js) is used instead of the Cordova plugin */
  IsPWA: boolean;
  Error: BarcodePluginError;
}

/** ScanResultRec: Text ← JSON "ScanResult", Format ← JSON "format" (1-indexed BarcodePlugin.Format). */
export interface ScanResult {
  Text: string;
  Format: number;
}

/** ScanBarcode outputs. */
export interface ScanBarcodeResult {
  ScanResult: ScanResult;
  Success: boolean;
  Error: BarcodePluginError;
}

/** ScanBarcode inputs; an omitted one takes the action's default (SCAN_BARCODE_DEFAULTS). */
export interface ScanBarcodeInput {
  ScanInstructions?: string;
  /** BarcodePlugin.CameraDirection identifier */
  CameraDirection?: number;
  /** BarcodePlugin.ScanOrientation identifier */
  ScanOrientation?: number;
  ScanButton?: boolean;
  ScanButtonText?: string;
  ShowCameraSelection?: boolean;
  /** BarcodePlugin.Format identifier */
  Hint?: number;
  ScannerFPS?: number;
  AndroidScanningLibrary?: string;
}

/** The platform services the web scanner calls: `$public.FeedbackMessage.showFeedbackMessage(message, type)` for its
    camera / orientation warnings. The caller passes the shell's showFeedbackMessage (src/lib does not import the shell). */
export interface BarcodeScannerUi {
  showFeedbackMessage: (message: string, type: number) => void;
}

/** A scanner behind CheckBarcodePlugin / ScanBarcode: the web scanner (production) or a fictional one (mock phase). */
export interface BarcodeScanner {
  checkBarcodePlugin: () => Promise<CheckBarcodePluginResult>;
  scanBarcode: (input: ScanBarcodeInput, ui: BarcodeScannerUi) => Promise<ScanBarcodeResult>;
}

/** BarcodePlugin static entities (static-entities-tst.json). */
export const BarcodePluginEntities = {
  CameraDirection: { BackCamera: 1, FrontCamera: 2 },
  ScanOrientation: { Portrait: 1, Landscape: 2, Adaptive: 3 },
  Format: { QR_CODE: 1, ALL: 18 },
  AndroidScanningLibrary: { MLKit: 'mlkit', ZXing: 'zxing' },
} as const;

/** Defaults of the ScanBarcode inputs (scanBarcode$Action proxy, BarcodePlugin.controller.js :710-719). */
export const SCAN_BARCODE_DEFAULTS: Required<ScanBarcodeInput> = {
  ScanInstructions: 'Center your code on the frame',
  CameraDirection: BarcodePluginEntities.CameraDirection.BackCamera,
  ScanOrientation: BarcodePluginEntities.ScanOrientation.Adaptive,
  ScanButton: false,
  ScanButtonText: 'Scan',
  ShowCameraSelection: false,
  Hint: BarcodePluginEntities.Format.ALL,
  ScannerFPS: -1,
  AndroidScanningLibrary: BarcodePluginEntities.AndroidScanningLibrary.ZXing,
};

/** The scanner's error when the user closes it (OSBarcodePlugin.js CLOSED, code 6). */
export const SCANNER_CLOSED_BY_USER = 'OS-PLUG-BARC-0006';
/** CheckBarcodePlugin without Cordova and without navigator.mediaDevices. */
export const CORDOVA_NOT_AVAILABLE: BarcodePluginError = {
  ErrorCode: 'OS-PLUG-BARC-0011',
  ErrorMessage: 'Cordova is not available.',
};
/** CheckBarcodePlugin with Cordova but no Cordova barcode plugin. */
export const PLUGIN_NOT_AVAILABLE: BarcodePluginError = {
  ErrorCode: 'OS-PLUG-BARC-0012',
  ErrorMessage: 'Barcode Plugin is not available.',
};

/** ScanResultRec default. */
export const EMPTY_SCAN_RESULT: ScanResult = { Text: '', Format: 0 };
