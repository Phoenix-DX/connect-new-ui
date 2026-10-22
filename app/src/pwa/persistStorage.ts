import { log } from '@/platform/log/log';

/* ADR-10 (P10): the client entities stay in IndexedDB as in the original; when the app is installed, ask the browser to
   keep that storage (`navigator.storage.persist()`), so it is not evicted under storage pressure or, on Safari, after
   days without use. Once per app start (page load): the shell calls it when it first opens the device database
   (src/shell/localEntities/database.ts). Only when installed: Chrome grants it to installed apps without a prompt,
   and Firefox would prompt in a browser tab (the original asks nothing). Every step degrades without an error
   (P13: old Safari has no StorageManager). */

type StorageLike = Pick<StorageManager, 'persist'> & Partial<Pick<StorageManager, 'persisted'>>;

/** Installed app: `display-mode: standalone` (manifest display, as deviceContext.ts's IsRunningAsPWA), or iOS
    home-screen apps (`navigator.standalone`). */
export function isInstalledApp(win: Window = window): boolean {
  try {
    if (win.matchMedia('(display-mode: standalone)').matches) return true;
  } catch {
    /* no matchMedia (tests, old engines) */
  }
  return (win.navigator as Navigator & { standalone?: boolean }).standalone === true;
}

let requested = false;

/**
 * Asks once per page load. Resolves true when the storage is (or became) persistent, false when refused or failed,
 * null when not asked (already asked, not installed, or no StorageManager).
 */
export async function requestPersistentStorage({
  installed = isInstalledApp(),
  storage = typeof navigator === 'undefined' ? undefined : navigator.storage,
}: { installed?: boolean; storage?: StorageLike } = {}): Promise<boolean | null> {
  if (requested) return null;
  requested = true;
  if (!installed || typeof storage?.persist !== 'function') return null;
  try {
    if (storage.persisted && (await storage.persisted())) return true;
    const granted = await storage.persist();
    log.info(`pwa: persistent storage ${granted ? 'granted' : 'refused'}`);
    return granted;
  } catch (error) {
    log.warn('pwa: persistent storage request failed', { error: String(error) });
    return false;
  }
}

/** Tests: a new page load. */
export function resetPersistentStorageRequest(): void {
  requested = false;
}
