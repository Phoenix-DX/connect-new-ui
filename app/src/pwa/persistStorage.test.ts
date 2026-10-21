import { beforeEach, expect, test, vi } from 'vitest';
import { isInstalledApp, requestPersistentStorage, resetPersistentStorageRequest } from './persistStorage';

beforeEach(() => {
  resetPersistentStorageRequest();
});

const storage = (persisted: boolean, grant: boolean) => ({
  persisted: vi.fn(() => Promise.resolve(persisted)),
  persist: vi.fn(() => Promise.resolve(grant)),
});

test('installed: asks once per page load', async () => {
  const s = storage(false, true);
  await expect(requestPersistentStorage({ installed: true, storage: s })).resolves.toBe(true);
  await expect(requestPersistentStorage({ installed: true, storage: s })).resolves.toBeNull();
  expect(s.persist).toHaveBeenCalledTimes(1);
});

test('already persistent: no new request', async () => {
  const s = storage(true, true);
  await expect(requestPersistentStorage({ installed: true, storage: s })).resolves.toBe(true);
  expect(s.persist).not.toHaveBeenCalled();
});

test('a browser tab (not installed) or no StorageManager: nothing asked', async () => {
  const s = storage(false, true);
  await expect(requestPersistentStorage({ installed: false, storage: s })).resolves.toBeNull();
  resetPersistentStorageRequest();
  await expect(requestPersistentStorage({ installed: true, storage: undefined })).resolves.toBeNull();
  expect(s.persist).not.toHaveBeenCalled();
});

test('refused or failing: false, no error', async () => {
  vi.spyOn(console, 'warn').mockImplementation(() => undefined);
  await expect(requestPersistentStorage({ installed: true, storage: storage(false, false) })).resolves.toBe(false);
  resetPersistentStorageRequest();
  const failing = { persist: () => Promise.reject(new Error('blocked')) };
  await expect(requestPersistentStorage({ installed: true, storage: failing })).resolves.toBe(false);
});

test('installed = display-mode standalone or iOS navigator.standalone', () => {
  const win = (standalone: boolean, ios?: boolean) =>
    ({ matchMedia: () => ({ matches: standalone }), navigator: { standalone: ios } }) as unknown as Window;
  expect(isInstalledApp(win(true))).toBe(true);
  expect(isInstalledApp(win(false, true))).toBe(true);
  expect(isInstalledApp(win(false))).toBe(false);
});
