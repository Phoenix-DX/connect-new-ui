import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  activeBarcodeScanner,
  checkBarcodePlugin,
  scannerSwitch,
  setBarcodeScanner,
  type BarcodeScanner,
} from './barcodePlugin';

/* Which scanner answers (ADR-11): ?scanner=web (remembered for the tab) > the mock phase's scanner > the web scanner. */

const fictional: BarcodeScanner = {
  checkBarcodePlugin: vi.fn(() =>
    Promise.resolve({ IsAvailable: true, IsPWA: false, Error: { ErrorCode: '', ErrorMessage: '' } }),
  ),
  scanBarcode: vi.fn(),
};

const goTo = (search: string) => {
  window.history.replaceState(null, '', `/UBTConnect/OrbitAdminEventDetail${search}`);
};

describe('barcode scanner selection', () => {
  beforeEach(() => {
    sessionStorage.clear();
    goTo('');
  });
  afterEach(() => {
    setBarcodeScanner(null);
    sessionStorage.clear();
    goTo('');
  });

  it('production (no mock scanner installed): the web scanner', () => {
    expect(activeBarcodeScanner()).not.toBe(fictional);
  });

  it('mock phase: the installed fictional scanner by default', async () => {
    setBarcodeScanner(fictional);
    expect(activeBarcodeScanner()).toBe(fictional);
    await checkBarcodePlugin();
    expect(fictional.checkBarcodePlugin).toHaveBeenCalled();
  });

  it('?scanner=web switches to the web scanner and is remembered for the tab; ?scanner=mock goes back', () => {
    setBarcodeScanner(fictional);
    goTo('?EventId=7311&scanner=web');
    expect(activeBarcodeScanner()).not.toBe(fictional);
    goTo('?EventId=7311');
    expect(scannerSwitch()).toBe('web');
    expect(activeBarcodeScanner()).not.toBe(fictional);
    goTo('?scanner=mock');
    expect(activeBarcodeScanner()).toBe(fictional);
  });

  it('without navigator.mediaDevices the web scanner answers OS-PLUG-BARC-0011', async () => {
    const mediaDevices = Object.getOwnPropertyDescriptor(Navigator.prototype, 'mediaDevices');
    Object.defineProperty(navigator, 'mediaDevices', { value: undefined, configurable: true });
    try {
      const result = await checkBarcodePlugin();
      expect(result.IsAvailable).toBe(false);
      expect(result.Error.ErrorCode).toBe('OS-PLUG-BARC-0011');
    } finally {
      Reflect.deleteProperty(navigator, 'mediaDevices');
      if (mediaDevices) Object.defineProperty(Navigator.prototype, 'mediaDevices', mediaDevices);
    }
  });
});
