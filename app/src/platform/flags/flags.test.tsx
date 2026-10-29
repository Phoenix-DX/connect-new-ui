import { act, fireEvent, render, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import {
  clearFlagOverrides,
  fetchFlags,
  FlagPanel,
  flagValue,
  initFlagOverrides,
  loadFlags,
  setFlagOverride,
  useFlag,
} from '@/platform/flags';
import { isOn, setFlag, useFlagOn } from './flags';
import { defaultFlags, FLAG_KEYS, resolveFlags } from './resolve';
import { setOverrideValues, setServerFlags } from './store';

const STORED = 'ff:overrides';

beforeEach(() => {
  sessionStorage.clear();
  clearFlagOverrides();
  setServerFlags({});
});

afterEach(() => {
  window.history.replaceState(null, '', '/');
});

describe('resolveFlags (plan v2 §3.1)', () => {
  test('default < server < override; a missing value leaves the one below; other keys are ignored', () => {
    const defaults = defaultFlags();
    const resolved = resolveFlags(
      defaults,
      { C2NewBookmarks: false, C2EnableCarousel: false, ...({ NoSuchFlag: true } as object) },
      { C2EnableCarousel: true, C2NewNotifications: true },
    );
    expect(resolved.C2NewBookmarks).toBe(false); // server over default
    expect(resolved.C2EnableCarousel).toBe(true); // override over server
    expect(resolved.C2NewNotifications).toBe(true); // override over default
    expect(resolved.C2EnableMaps).toBe(true); // default
    expect(Object.keys(resolved)).toEqual(FLAG_KEYS);
  });

  test('the defaults are the decided values', () => {
    expect(flagValue('C2NewNotifications')).toBe(false);
    expect(flagValue('C2NewBookmarks')).toBe(true);
    expect(flagValue('C2EnableCarousel')).toBe(true);
    expect(flagValue('C2ExtendedShare')).toBe(true);
    expect(flagValue('WalletAccess')).toBe(false);
  });
});

describe('overrides (dev and demo builds)', () => {
  test('?ff=: Key:on, Key:off, yes, a key alone is on; a name that is not a flag is ignored with a warning', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    window.history.replaceState(
      null,
      '',
      '/UBTConnect/HomeFeed?ff=C2NewNotifications,C2EnableCarousel:off,C2NewBookmarks:yes,NoSuchFlag:on',
    );
    initFlagOverrides();
    expect(flagValue('C2NewNotifications')).toBe(true);
    expect(flagValue('C2EnableCarousel')).toBe(false);
    expect(flagValue('C2NewBookmarks')).toBe(true);
    expect(warn).toHaveBeenCalledTimes(1);
    expect(JSON.parse(sessionStorage.getItem(STORED) ?? '')).toEqual({
      C2NewNotifications: true,
      C2EnableCarousel: false,
      C2NewBookmarks: true,
    });
  });

  test('the overrides are kept for the tab: a reload without ?ff= reads them, also as texts of earlier builds', () => {
    sessionStorage.setItem(STORED, JSON.stringify({ C2NewNotifications: 'on', C2ExtendedShare: 'off', Old: 'on' }));
    setOverrideValues({}); // a new page: nothing in memory
    initFlagOverrides();
    expect(flagValue('C2NewNotifications')).toBe(true);
    expect(flagValue('C2ExtendedShare')).toBe(false);
    window.history.replaceState(null, '', '/UBTConnect/HomeFeed?ff=C2NewNotifications:off');
    initFlagOverrides(); // ?ff= wins over the kept value
    expect(flagValue('C2NewNotifications')).toBe(false);
    expect(flagValue('C2ExtendedShare')).toBe(false);
  });

  test('setFlagOverride: a value, then null goes back to the value below', () => {
    setFlagOverride('C2ExtendedShare', false);
    expect(flagValue('C2ExtendedShare')).toBe(false);
    setFlagOverride('C2ExtendedShare', null);
    expect(flagValue('C2ExtendedShare')).toBe(true);
    expect(JSON.parse(sessionStorage.getItem(STORED) ?? '')).toEqual({});
  });

  test('the flag panel (?ffpanel=1) lists the registry, marks the defaults and overrides a flag', () => {
    expect(render(<FlagPanel />).container).toBeEmptyDOMElement();
    window.history.replaceState(null, '', '/UBTConnect/HomeFeed?ffpanel=1');
    const { container } = render(<FlagPanel />);
    const selects = [...container.querySelectorAll('select')];
    expect(selects).toHaveLength(FLAG_KEYS.length);
    const select = selects[FLAG_KEYS.indexOf('C2NewNotifications')];
    if (!select) throw new Error('no select of C2NewNotifications');
    expect(select.value).toBe('off');
    expect([...select.options].map((o) => o.textContent)).toEqual(['on', 'off (default)']);
    fireEvent.change(select, { target: { value: 'on' } });
    expect(flagValue('C2NewNotifications')).toBe(true);
    expect(select.value).toBe('on');
  });
});

describe('readers', () => {
  test('useFlag renders again when the flag changes', () => {
    const { result } = renderHook(() => useFlag('C2NewNotifications'));
    expect(result.current).toBe(false);
    act(() => {
      setFlagOverride('C2NewNotifications', true);
    });
    expect(result.current).toBe(true);
  });

  test('the adapter of the readers before P4-5 (flags.ts): isOn, useFlagOn, setFlag with texts', () => {
    expect(isOn('C2ExtendedShare')).toBe(true);
    setFlag('C2ExtendedShare', 'off');
    expect(isOn('C2ExtendedShare')).toBe(false);
    setFlag('C2ExtendedShare', 'TRUE');
    expect(isOn('C2ExtendedShare')).toBe(true);
    setFlag('C2ExtendedShare', null);
    expect(isOn('C2ExtendedShare')).toBe(true);
    const { result } = renderHook(() => useFlagOn('WalletAccess'));
    expect(result.current).toBe(false);
    act(() => {
      setFlag('WalletAccess', 'on');
    });
    expect(result.current).toBe(true);
  });
});

describe('server values (mock phase)', () => {
  test('fetchFlags: the registry default of every server flag (WalletAccess is a build constant)', async () => {
    const expected: Record<string, boolean> = { ...defaultFlags() };
    delete expected.WalletAccess;
    expect(await fetchFlags()).toEqual(expected);
  });

  test('loadFlags: the server values go below the overrides; a failure keeps the last known values', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    await loadFlags(() => Promise.resolve({ C2NewBookmarks: true }));
    expect(flagValue('C2NewBookmarks')).toBe(true);
    setFlagOverride('C2NewBookmarks', false);
    expect(flagValue('C2NewBookmarks')).toBe(false);
    await loadFlags(() => Promise.reject(new Error('offline')));
    expect(warn).toHaveBeenCalledTimes(1);
    setFlagOverride('C2NewBookmarks', null);
    expect(flagValue('C2NewBookmarks')).toBe(true); // the last known server value
  });
});
