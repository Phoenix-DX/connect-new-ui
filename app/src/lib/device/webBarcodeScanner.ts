/* The web branches of the OutSystems BarcodePlugin actions, ported 1:1 (ADR-11) from
   migration/runtime-sources/BarcodePlugin.controller.js (C below):
   - CheckBarcodePlugin (C :1-200): IsCordovaDefined → (Cordova) IsPluginAvailableJS, else GetWebAPIJS ("Is PWA?") →
     AddCSSJS + requireScript(OSBarcodePlugin.js) → IsAvailable, IsPWA / OS-PLUG-BARC-0011; AllExceptions → "-1".
   - ScanBarcode (C :224-723): CheckBarcodePlugin → LimitScanInstructions (162) / LimitScanButtonText (16) → null
     CameraDirection / ScanOrientation / Hint → BackCamera / Adaptive / ALL → CorrectHint (Hint - 1) → "Is PWA?" →
     RunWebScannerJS (C :768-805) → JSON-deserialize ScanResultRec; AllExceptions → "-1".
   The Cordova branches (IsPluginAvailableJS, RunCodeScannerJS) are not ported: the app is web / PWA only (ADR-1) and ships
   no Cordova plugin, so with Cordova present CheckBarcodePlugin answers as the original does without the plugin (0012).
   The browser is reached only through WebScannerEnvironment, so the branches are unit-tested without a camera. */
import { requireOSBarcodePlugin, type OSBarcodePluginApi, type OSBarcodeScanResult } from '../../vendor/barcodeplugin';
import { addBarcodePluginCss } from './barcodePluginCss';
import {
  BarcodePluginEntities,
  CORDOVA_NOT_AVAILABLE,
  EMPTY_SCAN_RESULT,
  PLUGIN_NOT_AVAILABLE,
  SCAN_BARCODE_DEFAULTS,
  type BarcodePluginError,
  type BarcodeScanner,
  type BarcodeScannerUi,
  type CheckBarcodePluginResult,
  type ScanBarcodeInput,
  type ScanBarcodeResult,
  type ScanResult,
} from './barcodePluginTypes';

/** The browser services the actions use. */
export interface WebScannerEnvironment {
  /** CommonPlugin IsCordovaDefined (CheckCordovaJS: typeof cordova !== "undefined") */
  isCordovaDefined: () => boolean;
  /** GetWebAPIJS (C :201-205): navigator.mediaDevices !== undefined */
  isWebApiSupported: () => boolean;
  /** AddCSSJS (C :211-222) */
  addCss: () => void;
  /** AddOSBarcodePlugin: requireScript of the vendored OSBarcodePlugin.js (cached after the first load) */
  requireScript: () => Promise<OSBarcodePluginApi>;
  /** RunWebScannerJS: the parent the scanner hides while open, document.getElementById('reactContainer') */
  scannerParent: () => HTMLElement | null;
}

export const browserEnvironment: WebScannerEnvironment = {
  isCordovaDefined: () => typeof (globalThis as { cordova?: unknown }).cordova !== 'undefined',
  isWebApiSupported: () => (navigator as { mediaDevices?: MediaDevices }).mediaDevices !== undefined,
  addCss: () => {
    addBarcodePluginCss();
  },
  requireScript: requireOSBarcodePlugin,
  scannerParent: () => document.getElementById('reactContainer'),
};

/** ScannerResultInternalRec. */
interface ScannerResultInternal {
  Success: boolean;
  ScanResultObjectString: string;
  Error: BarcodePluginError;
}

/** OS.Exceptions.getMessage */
const exceptionMessage = (ex: unknown): string => (ex instanceof Error ? ex.message : String(ex));

/** LimitScanInstructionsJS / LimitScanButtonTextJS (C :725-762). The original then reads `truncatedString.lastSpaceIndex`,
    a property strings do not have: `undefined !== -1` and `substr(0, undefined)` keep the cut text, so the cut never
    moves back to a space. Ported as it behaves. */
export function limitText(text: string, maxLength: number): string {
  const ellipsis = '...';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - ellipsis.length) + ellipsis;
}

/** A JSON value read into a Text attribute: strings as they are, numbers and booleans as text, else the default. */
const textOf = (value: unknown): string =>
  typeof value === 'string'
    ? value
    : typeof value === 'number' || typeof value === 'boolean'
      ? String(value)
      : EMPTY_SCAN_RESULT.Text;

/** JSONDeserialize ScanResultRec: Text ← "ScanResult", Format ← "format"; missing attributes keep the defaults. */
export function deserializeScanResult(json: string): ScanResult {
  const data = JSON.parse(json) as { ScanResult?: unknown; format?: unknown } | null;
  return {
    Text: textOf(data?.ScanResult),
    Format: data?.format == null ? EMPTY_SCAN_RESULT.Format : Math.trunc(Number(data.format)),
  };
}

/** RunWebScannerJS (C :768-805): opens the scanner and resolves once, on a read or a failure (close: 0006). */
function runWebScanner(
  plugin: OSBarcodePluginApi,
  parent: HTMLElement | null,
  p: {
    ScanInstructions: string;
    ScanText: string;
    ScannerFPS: number;
    ScanOrientation: number;
    ScanButton: boolean;
    CameraDirection: string;
    Hint: number;
    ShowCameraSelection: boolean;
  },
  ui: BarcodeScannerUi,
): Promise<ScannerResultInternal> {
  return new Promise((resolve) => {
    const params = {
      facingMode: p.CameraDirection === '2' ? ('user' as const) : ('environment' as const),
      orientation: p.ScanOrientation,
      scanInstructions: p.ScanInstructions,
      hasScannerButton: p.ScanButton,
      buttonText: p.ScanText,
      showCameraSelection: p.ShowCameraSelection,
      typeHint: p.Hint === 17 ? undefined : p.Hint,
      scannerFPS: p.ScannerFPS !== -1 ? p.ScannerFPS : 50,
    };
    const onSuccessScan = (result: OSBarcodeScanResult) => {
      // OutSystems uses 1-indexed, PWA implementation uses 0-index
      result.format = result.format + 1;
      resolve({
        Success: true,
        ScanResultObjectString: JSON.stringify(result),
        Error: { ErrorCode: '', ErrorMessage: '' },
      });
    };
    const onFailScan = (errorCode: string, errorMessage: string) => {
      resolve({
        Success: false,
        ScanResultObjectString: '',
        Error: { ErrorCode: errorCode, ErrorMessage: errorMessage },
      });
    };
    // startScan() is not awaited in the original: a rejection of openScanner leaves the action waiting.
    void plugin.openScanner(params, parent, onSuccessScan, onFailScan, ui.showFeedbackMessage);
  });
}

export function createWebBarcodeScanner(env: WebScannerEnvironment = browserEnvironment): BarcodeScanner {
  const checkBarcodePlugin = async (): Promise<CheckBarcodePluginResult> => {
    const out: CheckBarcodePluginResult = {
      IsAvailable: false,
      IsPWA: false,
      Error: { ErrorCode: '', ErrorMessage: '' },
    };
    try {
      if (env.isCordovaDefined()) {
        return { ...out, IsAvailable: false, Error: { ...PLUGIN_NOT_AVAILABLE } };
      }
      // Is PWA?
      if (!env.isWebApiSupported()) {
        return { ...out, IsAvailable: false, Error: { ...CORDOVA_NOT_AVAILABLE } };
      }
      env.addCss();
      await env.requireScript();
      return { IsAvailable: true, IsPWA: true, Error: { ErrorCode: '0', ErrorMessage: '' } };
    } catch (ex) {
      return { ...out, IsAvailable: false, Error: { ErrorCode: '-1', ErrorMessage: exceptionMessage(ex) } };
    }
  };

  const scanBarcode = async (input: ScanBarcodeInput, ui: BarcodeScannerUi): Promise<ScanBarcodeResult> => {
    const v = { ...SCAN_BARCODE_DEFAULTS, ...input };
    try {
      const check = await checkBarcodePlugin();
      // Is Barcode available?
      if (!check.IsAvailable) {
        return {
          ScanResult: { ...EMPTY_SCAN_RESULT },
          Success: false,
          Error: { ErrorCode: check.Error.ErrorCode, ErrorMessage: check.Error.ErrorMessage },
        };
      }
      v.ScanInstructions = limitText(v.ScanInstructions, 162);
      v.ScanButtonText = limitText(v.ScanButtonText, 16);
      if (v.CameraDirection === 0) v.CameraDirection = BarcodePluginEntities.CameraDirection.BackCamera;
      if (v.ScanOrientation === 0) v.ScanOrientation = BarcodePluginEntities.ScanOrientation.Adaptive;
      // Use ALL for Hint
      if (v.Hint === 0) v.Hint = BarcodePluginEntities.Format.ALL;
      const correctedHint = v.Hint - 1;
      // Is PWA? Always true here: the Cordova branch never reports the plugin available (see above).
      const scannerResult = await runWebScanner(
        await env.requireScript(),
        env.scannerParent(),
        {
          ScanInstructions: v.ScanInstructions,
          ScanText: v.ScanButtonText,
          ScannerFPS: v.ScannerFPS,
          ScanOrientation: v.ScanOrientation,
          ScanButton: v.ScanButton,
          CameraDirection: String(v.CameraDirection),
          Hint: correctedHint,
          ShowCameraSelection: v.ShowCameraSelection,
        },
        ui,
      );
      if (scannerResult.Success) {
        return {
          ScanResult: deserializeScanResult(scannerResult.ScanResultObjectString),
          Success: scannerResult.Success,
          Error: { ErrorCode: '0', ErrorMessage: '' },
        };
      }
      return { ScanResult: { ...EMPTY_SCAN_RESULT }, Success: false, Error: scannerResult.Error };
    } catch (ex) {
      return {
        ScanResult: { ...EMPTY_SCAN_RESULT },
        Success: false,
        Error: { ErrorCode: '-1', ErrorMessage: exceptionMessage(ex) },
      };
    }
  };

  return { checkBarcodePlugin, scanBarcode };
}
