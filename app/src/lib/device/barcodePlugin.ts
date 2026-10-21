/* Device adapter for the OutSystems BarcodePlugin actions CheckBarcodePlugin and ScanBarcode (ADR-1, ADR-11;
   docs/guides/device.md). Which scanner answers:
   1. `?scanner=web` in the URL (remembered for the tab in sessionStorage; `?scanner=mock` forgets it): the web scanner;
   2. else the scanner a mock module installed with setBarcodeScanner (mock phase, dev and demo builds:
      OrbitAdminEventDetail/mocks.ts, Q1 = A);
   3. else the web scanner, the vendored TST OSBarcodePlugin.js (production: the mocks are not built). */
import type {
  BarcodeScanner,
  BarcodeScannerUi,
  CheckBarcodePluginResult,
  ScanBarcodeInput,
  ScanBarcodeResult,
} from './barcodePluginTypes';
import { createWebBarcodeScanner } from './webBarcodeScanner';

export * from './barcodePluginTypes';

const SWITCH_PARAM = 'scanner';
const SWITCH_KEY = 'device:scanner';

/** The `?scanner=` switch: the URL value wins and is remembered for the tab; storage errors are ignored. */
export function scannerSwitch(): string | null {
  const fromUrl = new URLSearchParams(window.location.search).get(SWITCH_PARAM);
  try {
    if (fromUrl !== null) sessionStorage.setItem(SWITCH_KEY, fromUrl);
    return sessionStorage.getItem(SWITCH_KEY) ?? fromUrl;
  } catch {
    return fromUrl;
  }
}

// Remember the `?scanner=` of the URL the tab opens with: the mock modules load this module at boot (src/mocks/handlers.ts,
// eager), so the switch survives client-side navigation to URLs without it (e.g. OrbitAdminLanding → the event).
scannerSwitch();

const webScanner: BarcodeScanner = createWebBarcodeScanner();
let installed: BarcodeScanner | null = null;

/** Installs the scanner of the mock phase (a fictional one); null goes back to the web scanner. */
export function setBarcodeScanner(next: BarcodeScanner | null): void {
  installed = next;
}

/** The scanner that answers now (see the header). */
export function activeBarcodeScanner(): BarcodeScanner {
  return scannerSwitch() === 'web' || installed === null ? webScanner : installed;
}

/** CheckBarcodePlugin. */
export const checkBarcodePlugin = (): Promise<CheckBarcodePluginResult> => activeBarcodeScanner().checkBarcodePlugin();

/** ScanBarcode(input) with the platform services the web scanner calls. */
export const scanBarcode = (input: ScanBarcodeInput, ui: BarcodeScannerUi): Promise<ScanBarcodeResult> =>
  activeBarcodeScanner().scanBarcode(input, ui);
