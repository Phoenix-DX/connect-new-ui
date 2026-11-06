import { afterEach, describe, expect, it, vi } from 'vitest';
import { getDeviceInfo, getSVGMetric } from './actions';

function stubDisplayMode(standalone: boolean) {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: (query: string) => ({ matches: standalone && query === '(display-mode: standalone)', media: query }),
  });
}

afterEach(() => {
  Reflect.deleteProperty(window, 'matchMedia');
  document.body.innerHTML = '';
});

describe('GetSVGMetric', () => {
  it('HeightWithoutCurve = path height * largest V / largest Q value', () => {
    document.body.innerHTML =
      '<div class="ubt-header-svg"><svg><path d="M0,0 H390 V240 Q195,300 0,240 Z"></path></svg></div>';
    const path = document.querySelector('path');
    if (!path) throw new Error('no path');
    vi.spyOn(path, 'getBoundingClientRect').mockReturnValue({ height: 300 } as DOMRect);
    expect(getSVGMetric()).toEqual({ HeightPx: 300, HeightWithoutCurve: 240 });
  });
});

describe('GetDeviceInfo (web branch)', () => {
  it('Platform is Web in a browser tab and PWA in the installed app; no manufacturer or model', () => {
    stubDisplayMode(false);
    expect(getDeviceInfo()).toEqual(
      expect.objectContaining({ Platform: 'Web', Manufacturer: '', Model: '', UserAgent: window.navigator.userAgent }),
    );
    stubDisplayMode(true);
    expect(getDeviceInfo().Platform).toBe('PWA');
  });

  it('UniqueId: one id per browser in localStorage["UUID"] (App_Policies Q2)', () => {
    stubDisplayMode(false);
    localStorage.removeItem('UUID');
    const first = getDeviceInfo().UniqueId;
    expect(first).not.toBe('');
    expect(localStorage.getItem('UUID')).toBe(first);
    expect(getDeviceInfo().UniqueId).toBe(first);
  });
});
