/* The device id of the web branch of GetDeviceInfo (Policy_Custom_AcceptPendingPolicies, ContinueOnClick,
   GetDeviceInfoJS; TST UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:1385-1387):
     UniqueId = window.localStorage["UUID"] || (window.localStorage["UUID"] = window.crypto.randomUUID())
   One id per browser, under the key "UUID" without the mock prefix of platform/storage, so the server gets the same
   device id as from the original app (App_Policies Q2 (a) and C4, user 2026-10-27). The id is random: it is not a
   personal identifier (AGENTS rule 16). Storage can be missing or throw (private mode, blocked site data): every access
   is guarded, and the id then lives in memory for this page. */

/** The key of the original. */
export const DEVICE_UNIQUE_ID_KEY = 'UUID';

/** The id of this page when the browser storage cannot be read or written. */
let pageUniqueId: string | undefined;

function storedId(): string | null {
  try {
    return window.localStorage.getItem(DEVICE_UNIQUE_ID_KEY);
  } catch {
    return null;
  }
}

/** Stores the id; false when the storage is full or blocked. */
function storeId(id: string): boolean {
  try {
    window.localStorage.setItem(DEVICE_UNIQUE_ID_KEY, id);
    return true;
  } catch {
    return false;
  }
}

/** The UniqueId of GetDeviceInfo: "" when the browser has no crypto.randomUUID (the original leaves the default). */
export function deviceUniqueId(): string {
  if (typeof window.crypto.randomUUID !== 'function') return '';
  const stored = storedId();
  if (stored) return stored;
  if (pageUniqueId !== undefined) return pageUniqueId;
  const id = window.crypto.randomUUID();
  if (storeId(id)) return id;
  pageUniqueId = id;
  return id;
}
