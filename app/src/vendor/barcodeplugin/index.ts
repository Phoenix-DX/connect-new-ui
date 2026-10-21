/* Typed loader of the vendored TST web scanner (ADR-11, SOURCE.md). The file is a webpack bundle with a `var`
   library target (`var OSBarcodePlugin;(()=>{…})()`): only a classic <script> makes `OSBarcodePlugin` a global, so it
   is loaded the way the original loads it, OS.SystemActions.requireScript("scripts/BarcodePlugin.OSBarcodePlugin.js")
   (BarcodePlugin.controller.js CheckBarcodePlugin, "AddOSBarcodePlugin"): one <script> per page, on first use.
   `?url` makes Vite emit the file unchanged as a hashed asset (assets/), which the production precache covers. */
import scriptUrl from './BarcodePlugin.OSBarcodePlugin.js?url';

/** The parameters RunWebScannerJS builds (BarcodePlugin.controller.js :768-805). */
export interface OSBarcodeScannerParams {
  facingMode: 'user' | 'environment';
  orientation: number;
  scanInstructions: string;
  hasScannerButton: boolean;
  buttonText: string;
  showCameraSelection: boolean;
  /** 0-indexed format, undefined for every format */
  typeHint: number | undefined;
  scannerFPS: number;
}

/** What the scanner reports on a read: the text and the 0-indexed format (OSBarcodePlugin.js `re`). */
export interface OSBarcodeScanResult {
  ScanResult: string;
  format: number;
}

/** The scanner's API: openScanner(params, parent, onSuccess, onFail(errorCode, errorMessage), feedback(message, type)).
    It appends its interface to document.body, hides `parent` while open, and calls back once. */
export interface OSBarcodePluginApi {
  openScanner: (
    params: OSBarcodeScannerParams,
    parent: HTMLElement | null,
    onSuccess: (result: OSBarcodeScanResult) => void,
    onFail: (errorCode: string, errorMessage: string) => void,
    feedback: (message: string, type: number) => void,
  ) => Promise<void>;
}

export const OS_BARCODE_PLUGIN_URL: string = scriptUrl;

let loading: Promise<OSBarcodePluginApi> | null = null;

/** requireScript: adds the script once and resolves with the global it defines; a failed load can be retried. */
export function requireOSBarcodePlugin(): Promise<OSBarcodePluginApi> {
  loading ??= new Promise<OSBarcodePluginApi>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = OS_BARCODE_PLUGIN_URL;
    script.onload = () => {
      const api = (window as unknown as { OSBarcodePlugin?: OSBarcodePluginApi }).OSBarcodePlugin;
      if (api && typeof api.openScanner === 'function') resolve(api);
      else reject(new Error('The vendored OSBarcodePlugin script did not define OSBarcodePlugin'));
    };
    script.onerror = () => {
      loading = null;
      script.remove();
      reject(new Error(`Failed to load ${OS_BARCODE_PLUGIN_URL}`));
    };
    document.head.appendChild(script);
  });
  return loading;
}
