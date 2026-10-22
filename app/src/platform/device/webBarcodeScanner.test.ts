import { afterEach, describe, expect, it, vi } from 'vitest';
import type { OSBarcodePluginApi, OSBarcodeScannerParams } from '@/vendor/barcodeplugin';
import { addBarcodePluginCss, BARCODE_PLUGIN_CSS } from './barcodePluginCss';
import { BarcodePluginEntities, SCANNER_CLOSED_BY_USER } from './barcodePluginTypes';
import {
  createWebBarcodeScanner,
  deserializeScanResult,
  limitText,
  type WebScannerEnvironment,
} from './webBarcodeScanner';

/* The web branches of CheckBarcodePlugin / ScanBarcode (BarcodePlugin.controller.js, ADR-11) with a fake browser. */

type OpenScanner = OSBarcodePluginApi['openScanner'];

function setup(overrides: Partial<WebScannerEnvironment> = {}, openScanner?: OpenScanner) {
  const parent = document.createElement('div');
  const open = vi.fn<OpenScanner>(openScanner ?? (() => Promise.resolve()));
  const env: WebScannerEnvironment = {
    isCordovaDefined: vi.fn(() => false),
    isWebApiSupported: vi.fn(() => true),
    addCss: vi.fn(),
    requireScript: vi.fn(() => Promise.resolve({ openScanner: open })),
    scannerParent: () => parent,
    ...overrides,
  };
  const ui = { showFeedbackMessage: vi.fn() };
  return { scanner: createWebBarcodeScanner(env), env, open, parent, ui };
}

/** The block's ScanBarcode inputs (ScreenBlock_AdminEventDetail ctrl :1241). */
const BLOCK_INPUT = {
  ScanInstructions: 'Please center the code in the frame',
  CameraDirection: 1,
  ScanOrientation: 1,
  ScanButton: false,
  ScanButtonText: 'Scan',
  ShowCameraSelection: false,
  Hint: 0,
  ScannerFPS: -1,
  AndroidScanningLibrary: 'Entities.AndroidScanningLibrary.ZXing',
};

describe('CheckBarcodePlugin (web)', () => {
  it('no Cordova, navigator.mediaDevices: adds the CSS, loads the scanner, available as a PWA', async () => {
    const { scanner, env } = setup();
    await expect(scanner.checkBarcodePlugin()).resolves.toEqual({
      IsAvailable: true,
      IsPWA: true,
      Error: { ErrorCode: '0', ErrorMessage: '' },
    });
    expect(env.addCss).toHaveBeenCalledTimes(1);
    expect(env.requireScript).toHaveBeenCalledTimes(1);
  });

  it('no Cordova, no navigator.mediaDevices: OS-PLUG-BARC-0011, nothing loaded', async () => {
    const { scanner, env } = setup({ isWebApiSupported: () => false });
    await expect(scanner.checkBarcodePlugin()).resolves.toEqual({
      IsAvailable: false,
      IsPWA: false,
      Error: { ErrorCode: 'OS-PLUG-BARC-0011', ErrorMessage: 'Cordova is not available.' },
    });
    expect(env.addCss).not.toHaveBeenCalled();
    expect(env.requireScript).not.toHaveBeenCalled();
  });

  it('Cordova without a barcode plugin (this web build): OS-PLUG-BARC-0012', async () => {
    const { scanner } = setup({ isCordovaDefined: () => true });
    const result = await scanner.checkBarcodePlugin();
    expect(result.IsAvailable).toBe(false);
    expect(result.Error).toEqual({ ErrorCode: 'OS-PLUG-BARC-0012', ErrorMessage: 'Barcode Plugin is not available.' });
  });

  it('the script fails to load: AllExceptions, ErrorCode -1 with the message', async () => {
    const { scanner } = setup({ requireScript: () => Promise.reject(new Error('Failed to load script')) });
    await expect(scanner.checkBarcodePlugin()).resolves.toEqual({
      IsAvailable: false,
      IsPWA: false,
      Error: { ErrorCode: '-1', ErrorMessage: 'Failed to load script' },
    });
  });
});

describe('ScanBarcode (web)', () => {
  it('opens the scanner as RunWebScannerJS does: rear camera, portrait, every format, 50 fps, #reactContainer parent', async () => {
    const { scanner, open, parent, ui } = setup({}, (_params, _parent, onSuccess) => {
      onSuccess({ ScanResult: 'x', format: 0 });
      return Promise.resolve();
    });
    await scanner.scanBarcode(BLOCK_INPUT, ui);
    const params: OSBarcodeScannerParams = {
      facingMode: 'environment',
      orientation: BarcodePluginEntities.ScanOrientation.Portrait,
      scanInstructions: 'Please center the code in the frame',
      hasScannerButton: false,
      buttonText: 'Scan',
      showCameraSelection: false,
      typeHint: undefined,
      scannerFPS: 50,
    };
    expect(open).toHaveBeenCalledWith(
      params,
      parent,
      expect.any(Function),
      expect.any(Function),
      ui.showFeedbackMessage,
    );
  });

  it('maps a read to ScanResultRec: Text from ScanResult, Format 1-indexed, ErrorCode 0', async () => {
    const text = '{"eventid":"7311","memberid":"40021"}';
    const { scanner, ui } = setup({}, (_params, _parent, onSuccess) => {
      onSuccess({ ScanResult: text, format: 0 });
      return Promise.resolve();
    });
    await expect(scanner.scanBarcode(BLOCK_INPUT, ui)).resolves.toEqual({
      ScanResult: { Text: text, Format: BarcodePluginEntities.Format.QR_CODE },
      Success: true,
      Error: { ErrorCode: '0', ErrorMessage: '' },
    });
  });

  it('closed by the user: Success false with the scanner error OS-PLUG-BARC-0006', async () => {
    const message = "Couldn't scan because the process was cancelled.";
    const { scanner, ui } = setup({}, (_params, _parent, _onSuccess, onFail) => {
      onFail('OS-PLUG-BARC-0006', message);
      return Promise.resolve();
    });
    await expect(scanner.scanBarcode(BLOCK_INPUT, ui)).resolves.toEqual({
      ScanResult: { Text: '', Format: 0 },
      Success: false,
      Error: { ErrorCode: SCANNER_CLOSED_BY_USER, ErrorMessage: message },
    });
  });

  it('not available: returns the check error and never opens the scanner', async () => {
    const { scanner, open, ui } = setup({ isWebApiSupported: () => false });
    await expect(scanner.scanBarcode(BLOCK_INPUT, ui)).resolves.toEqual({
      ScanResult: { Text: '', Format: 0 },
      Success: false,
      Error: { ErrorCode: 'OS-PLUG-BARC-0011', ErrorMessage: 'Cordova is not available.' },
    });
    expect(open).not.toHaveBeenCalled();
  });

  it('front camera, a format hint (0-indexed), an FPS, the action defaults and the length limits', async () => {
    const { scanner, open, ui } = setup({}, (_p, _parent, onSuccess) => {
      onSuccess({ ScanResult: 'x', format: 0 });
      return Promise.resolve();
    });
    await scanner.scanBarcode(
      {
        CameraDirection: 2,
        Hint: BarcodePluginEntities.Format.QR_CODE,
        ScannerFPS: 30,
        ScanButtonText: 'Scan the guest code now',
      },
      ui,
    );
    expect(open.mock.lastCall?.[0]).toMatchObject({
      facingMode: 'user',
      typeHint: 0,
      scannerFPS: 30,
      orientation: BarcodePluginEntities.ScanOrientation.Adaptive,
      scanInstructions: 'Center your code on the frame',
      buttonText: 'Scan the gues...',
    });
  });

  it('reads ScanResultRec as JSONDeserialize does (an invalid JSON throws, caught by AllExceptions)', () => {
    expect(() => deserializeScanResult('not json')).toThrow();
    expect(deserializeScanResult('{"ScanResult":"abc","format":2}')).toEqual({ Text: 'abc', Format: 2 });
    expect(deserializeScanResult('{}')).toEqual({ Text: '', Format: 0 });
  });
});

describe('LimitScanInstructions / LimitScanButtonText', () => {
  it('keeps short texts and cuts long ones to MaxLength with "..." (never back to a space, as compiled)', () => {
    expect(limitText('Scan', 16)).toBe('Scan');
    expect(limitText('Scan the guest code now', 16)).toBe('Scan the gues...');
    expect(limitText('a'.repeat(200), 162)).toHaveLength(162);
  });
});

describe('AddCSSJS', () => {
  afterEach(() => {
    document.head.querySelectorAll('style[title="barcode-plugin-css"]').forEach((node) => {
      node.remove();
    });
  });

  it('adds the barcode-plugin-css stylesheet once', () => {
    addBarcodePluginCss();
    addBarcodePluginCss();
    const sheets = document.head.querySelectorAll('style[title="barcode-plugin-css"]');
    expect(sheets).toHaveLength(1);
    expect(sheets[0]?.textContent).toBe(BARCODE_PLUGIN_CSS);
    expect(BARCODE_PLUGIN_CSS).toHaveLength(2316);
  });
});
