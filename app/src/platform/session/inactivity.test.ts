import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import {
  inactivitySeconds,
  onInactivityTimeout,
  pinSessionInactivityStart,
  registerInactivityTimeoutHandler,
  startInactivityTimer,
} from './inactivity';
import { isLocked, lock } from './pin';
import { getClientVar, setClientVar } from './session';
import { freshPage } from '@/test/testSupport';

beforeEach(() => {
  freshPage();
  vi.useFakeTimers();
});
afterEach(() => {
  vi.useRealTimers();
  window.history.replaceState(null, '', '/');
});

describe('startInactivityTimer (SetupTimersJS)', () => {
  test('fires at the first 10 s check after the timeout, then stops', () => {
    const onTimeout = vi.fn();
    startInactivityTimer(25, onTimeout);
    vi.advanceTimersByTime(29_999);
    expect(onTimeout).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1);
    expect(onTimeout).toHaveBeenCalledTimes(1);
    vi.advanceTimersByTime(60_000);
    expect(onTimeout).toHaveBeenCalledTimes(1);
  });

  test('activity (touch, mouse, keys) postpones it', () => {
    const onTimeout = vi.fn();
    startInactivityTimer(20, onTimeout);
    vi.advanceTimersByTime(15_000);
    window.dispatchEvent(new Event('touchstart'));
    vi.advanceTimersByTime(15_000);
    expect(onTimeout).not.toHaveBeenCalled();
    vi.advanceTimersByTime(10_000);
    expect(onTimeout).toHaveBeenCalledTimes(1);
  });

  test('destroy stops the checks', () => {
    const onTimeout = vi.fn();
    const destroy = startInactivityTimer(10, onTimeout);
    destroy();
    vi.advanceTimersByTime(60_000);
    expect(onTimeout).not.toHaveBeenCalled();
  });
});

test('the timeout is PIN_SessionInactivity_Seconds unless ?locksecs= overrides it (decision U6)', () => {
  setClientVar('UBT_AppManager.PIN_SessionInactivity_Seconds', 1200);
  expect(inactivitySeconds()).toBe(1200);
  window.history.replaceState(null, '', '/UBTConnect/Menu?locksecs=15');
  expect(inactivitySeconds()).toBe(15);
  window.history.replaceState(null, '', '/UBTConnect/Notes');
  expect(inactivitySeconds()).toBe(15); // remembered for the tab
});

describe('onInactivityTimeout (PIN_SessionInactivty_OnTimeout)', () => {
  test('Navigate false (TST): keeps the path and raises PIN_OnTimeout to the mounted InactivityTimer', () => {
    window.history.replaceState(null, '', '/UBTConnect/Notes');
    const removeHandler = registerInactivityTimeoutHandler(lock);
    const redirect = vi.fn();
    onInactivityTimeout(redirect);
    expect(isLocked()).toBe(true);
    expect(redirect).not.toHaveBeenCalled();
    expect(getClientVar('UBT_AppManager.OutSystems_LastURL')).toBe('/UBTConnect/Notes');
    removeHandler();
  });

  test('Navigate false with no InactivityTimer mounted (screen without CommonUI): keeps the path, locks nothing', () => {
    window.history.replaceState(null, '', '/UBTConnect/Services');
    const redirect = vi.fn();
    onInactivityTimeout(redirect);
    expect(isLocked()).toBe(false);
    expect(redirect).not.toHaveBeenCalled();
    expect(getClientVar('UBT_AppManager.OutSystems_LastURL')).toBe('/UBTConnect/Services');
  });

  test('Navigate true: full page load of PINUnlock', () => {
    setClientVar('UBT_AppManager.PIN_SessionInactivity_Navigate', true);
    const redirect = vi.fn();
    onInactivityTimeout(redirect);
    expect(redirect).toHaveBeenCalledWith('/UBTConnect/PINUnlock');
    expect(isLocked()).toBe(false);
  });
});

describe('pinSessionInactivityStart (PIN_SessionInactivity_Start)', () => {
  test('one app-wide timer: a new start replaces the running one; removing the handler leaves the timer running', () => {
    setClientVar('UBT_AppManager.PIN_SessionInactivity_Use', true);
    setClientVar('UBT_AppManager.PIN_SessionInactivity_Seconds', 30);
    const handler = vi.fn();
    const removeHandler = registerInactivityTimeoutHandler(handler);
    pinSessionInactivityStart();
    vi.advanceTimersByTime(20_000);
    pinSessionInactivityStart();
    vi.advanceTimersByTime(30_000);
    expect(handler).not.toHaveBeenCalled();
    removeHandler();
    const later = vi.fn();
    const removeLater = registerInactivityTimeoutHandler(later);
    vi.advanceTimersByTime(10_000);
    expect(handler).not.toHaveBeenCalled();
    expect(later).toHaveBeenCalledTimes(1);
    removeLater();
  });

  test('PIN_SessionInactivity_Use false: no timer', () => {
    setClientVar('UBT_AppManager.PIN_SessionInactivity_Use', false);
    setClientVar('UBT_AppManager.PIN_SessionInactivity_Seconds', 10);
    const handler = vi.fn();
    const removeHandler = registerInactivityTimeoutHandler(handler);
    pinSessionInactivityStart();
    vi.advanceTimersByTime(60_000);
    expect(handler).not.toHaveBeenCalled();
    removeHandler();
  });
});
