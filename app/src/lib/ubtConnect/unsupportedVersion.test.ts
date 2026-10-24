import { afterEach, describe, expect, it } from 'vitest';
import { get_IsUnsupportedSystem, get_IsUnsupportedVersion } from './unsupportedVersion';

describe('get_IsUnsupportedVersion', () => {
  afterEach(() => {
    sessionStorage.removeItem('mock:mock');
    window.history.replaceState(null, '', '/');
  });

  it('is supported everywhere without minimum versions (TST)', () => {
    expect(get_IsUnsupportedVersion()).toEqual({
      Out_IsUnsupportedAppVersion: false,
      Out_IsUnsupportedWebViewVersion: false,
      Out_IsUnsupportedBrowserVersion: false,
    });
  });

  it('reports an unsupported browser in the mock scenario', () => {
    window.history.replaceState(null, '', '/UBTConnect/Login?mock=unsupported-browser');
    expect(get_IsUnsupportedVersion().Out_IsUnsupportedBrowserVersion).toBe(true);
    expect(get_IsUnsupportedVersion().Out_IsUnsupportedAppVersion).toBe(false);
  });
});

describe('get_IsUnsupportedSystem', () => {
  afterEach(() => {
    sessionStorage.removeItem('mock:mock');
    window.history.replaceState(null, '', '/');
  });

  it('is the unsupported app or browser version (UC:4518-4545)', () => {
    expect(get_IsUnsupportedSystem()).toBe(false);
    window.history.replaceState(null, '', '/UBTConnect/PINUnlock?mock=unsupported-browser');
    expect(get_IsUnsupportedSystem()).toBe(true);
  });
});
