import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { DEVICE_UNIQUE_ID_KEY, deviceUniqueId } from './deviceUniqueId';

/* GetDeviceInfo, web branch (Policy_Custom_AcceptPendingPolicies.mvc.js:1385-1387):
   UniqueId = localStorage["UUID"] || (localStorage["UUID"] = crypto.randomUUID()). */
describe('deviceUniqueId', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('uses the key "UUID" of the original, without the mock prefix', () => {
    expect(DEVICE_UNIQUE_ID_KEY).toBe('UUID');
  });

  it('keeps the id that the browser has', () => {
    localStorage.setItem('UUID', 'a0b1c2d3-0000-4000-8000-000000000001');
    expect(deviceUniqueId()).toBe('a0b1c2d3-0000-4000-8000-000000000001');
  });

  it('makes a new id, stores it, and gives the same id on the next call (one id per browser)', () => {
    const id = deviceUniqueId();
    expect(id).toMatch(/^[0-9a-f-]{36}$/);
    expect(localStorage.getItem('UUID')).toBe(id);
    expect(deviceUniqueId()).toBe(id);
  });

  it('makes a new id when the stored one was removed, as the original does', () => {
    const first = deviceUniqueId();
    localStorage.removeItem('UUID');
    const second = deviceUniqueId();
    expect(second).not.toBe(first);
    expect(localStorage.getItem('UUID')).toBe(second);
  });

  it('keeps one id in memory for the page when the storage throws', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    const id = deviceUniqueId();
    expect(id).toMatch(/^[0-9a-f-]{36}$/);
    expect(deviceUniqueId()).toBe(id);
  });
});
