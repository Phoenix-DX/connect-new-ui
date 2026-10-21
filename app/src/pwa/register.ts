import { Workbox } from 'workbox-window';
import { log } from '../lib/log';
import type { BootPlan } from './bootPlan';
import { SW_URL } from './swRoutes';

/* Service-worker registration (ADR-9; guide: app/docs/guides/pwa.md). Only one service worker per scope: MSW's
   mockServiceWorker.js in dev and the plain mock build, the app service worker (src/sw/sw.ts) in the demo and
   production builds. Every step degrades without an error where service workers do not exist (insecure origin, old
   iOS, private modes; P13). */

const MSW_SCRIPT = '/mockServiceWorker.js';

/** The subset of the browser API this module uses (tests pass a fake). */
export interface SwContainer {
  readonly controller: { scriptURL: string } | null;
  getRegistrations(): Promise<readonly SwRegistration[]>;
}
export interface SwRegistration {
  readonly active: { scriptURL: string } | null;
  readonly waiting: { scriptURL: string } | null;
  readonly installing: { scriptURL: string } | null;
  unregister(): Promise<boolean>;
}

function scriptOf(reg: SwRegistration): string {
  return (reg.active ?? reg.waiting ?? reg.installing)?.scriptURL ?? '';
}

function isMsw(scriptURL: string): boolean {
  return new URL(scriptURL, 'http://x').pathname === MSW_SCRIPT;
}

/** Registrations left over from the other build mode on this origin: the app SW in an MSW build, MSW otherwise. */
export function staleRegistrations(regs: readonly SwRegistration[], plan: BootPlan): SwRegistration[] {
  return regs.filter((reg) => {
    const script = scriptOf(reg);
    return script !== '' && (plan.mocks === 'worker' ? !isMsw(script) : isMsw(script));
  });
}

/**
 * Removes the other mode's service worker before anything starts. Returns true when the page itself was controlled by
 * the removed app service worker and is reloading (MSW cannot take over a page another worker controls).
 */
export async function clearStaleServiceWorkers(
  plan: BootPlan,
  container: SwContainer | undefined = 'serviceWorker' in navigator ? navigator.serviceWorker : undefined,
  reload: () => void = () => {
    window.location.reload();
  },
): Promise<boolean> {
  if (!container) return false;
  try {
    const stale = staleRegistrations(await container.getRegistrations(), plan);
    if (stale.length === 0) return false;
    await Promise.all(stale.map((reg) => reg.unregister()));
    log.info(`pwa: removed ${stale.length} stale service worker(s)`);
    const controller = container.controller;
    if (plan.mocks === 'worker' && controller && !isMsw(controller.scriptURL)) {
      reload();
      return true;
    }
  } catch (error) {
    log.warn('pwa: could not check service workers', { error: String(error) });
  }
  return false;
}

let workbox: { wb: Workbox; registration: ServiceWorkerRegistration } | null = null;

/**
 * Registers the app service worker when the plan asks for one, in a built app only (dev serves no sw.js). Silent
 * update: a new version installs in the background and waits for the next cold start; nothing is shown.
 */
export async function registerAppServiceWorker(
  plan: BootPlan,
  { isBuilt = import.meta.env.PROD, supported = 'serviceWorker' in navigator } = {},
): Promise<boolean> {
  if (!plan.appServiceWorker || !isBuilt || !supported) return false;
  try {
    const wb = new Workbox(SW_URL, { scope: plan.swScope });
    const registration = await wb.register();
    if (registration) workbox = { wb, registration };
    return registration !== undefined;
  } catch (error) {
    log.warn('pwa: service worker registration failed', { error: String(error) });
    return false;
  }
}

/** Build-time hash of src/api/openapi.yaml (vite.config.ts `define`). */
export const API_CONTRACT_VERSION: string = __API_CONTRACT_VERSION__;

/** True when the backend reports another API contract than the one this build was made for. */
export function isContractChanged(serverVersion: string | null | undefined): boolean {
  return typeof serverVersion === 'string' && serverVersion !== '' && serverVersion !== API_CONTRACT_VERSION;
}

/**
 * Forced update when the API contract changed (P11, the equivalent of the OutSystems ViewHasChangedException): looks
 * for the new service worker, lets it take over (SKIP_WAITING) and reloads. READY BUT NOT WIRED: there is no backend
 * yet. With the BFF, call it with the contract version the backend reports (for example a response header read in
 * src/lib/api.ts). Returns true when a reload was started.
 */
export async function reloadForContractChange(
  serverVersion: string | null | undefined,
  reload: () => void = () => {
    window.location.reload();
  },
): Promise<boolean> {
  if (!isContractChanged(serverVersion)) return false;
  if (workbox) {
    const { wb, registration } = workbox;
    try {
      await registration.update();
      if (registration.waiting || registration.installing) {
        wb.addEventListener('controlling', reload);
        if (registration.waiting) wb.messageSkipWaiting();
        else
          wb.addEventListener('waiting', () => {
            wb.messageSkipWaiting();
          });
        return true;
      }
    } catch (error) {
      log.warn('pwa: service worker update failed', { error: String(error) });
    }
  }
  // no new worker: the network-first navigation still loads the new index.html and bundles
  reload();
  return true;
}
