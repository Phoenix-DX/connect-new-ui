import { PATHS } from '@/platform/navigation/paths';
import { setAppCallbackCurrentLocation } from './resume';
import { getClientVar } from './session';
import { rememberedParam } from '@/platform/storage/storage';

/* Inactivity lock (spec 9; PIN_SessionInactivity_Start and its SetupTimersJS, AM:7892-8037): activity listeners, a
   check every 10 s, timeout = PIN_SessionInactivity_Seconds (TST 1200, shell-observed U2). Testing override
   (decision U6): ?locksecs=<seconds>, remembered for the tab. */
export const PRECISION_SECONDS = 10;

const ACTIVITY_EVENTS = [
  'mousemove',
  'mousedown',
  'keypress',
  'DOMMouseScroll',
  'mousewheel',
  'touchmove',
  'MSPointerMove',
  'touchstart',
] as const;

/** Last activity shared by every timer (the original keeps it in the AppManager element cache). */
let sharedLastActivity = 0;

export function inactivitySeconds(): number {
  const override = Number(rememberedParam('locksecs'));
  return Number.isFinite(override) && override > 0
    ? override
    : getClientVar('UBT_AppManager.PIN_SessionInactivity_Seconds');
}

/** Starts a timer and returns its destroy function (PIN_SessionInactivity_Destroy). */
export function startInactivityTimer(timeoutSeconds: number, onTimeout: () => void): () => void {
  let lastActivity = Date.now();
  sharedLastActivity = lastActivity;
  let lastStored = lastActivity;
  const detectedActivity = () => {
    lastActivity = Date.now();
  };
  const store = () => {
    if (lastActivity !== lastStored) {
      sharedLastActivity = lastActivity;
      lastStored = lastActivity;
    }
  };
  const destroy = () => {
    window.clearInterval(interval);
    for (const name of ACTIVITY_EVENTS) window.removeEventListener(name, detectedActivity);
    store();
  };
  const checkTimeout = () => {
    if (sharedLastActivity > lastActivity) lastActivity = sharedLastActivity;
    if (lastActivity < Date.now() - timeoutSeconds * 1000) {
      destroy();
      onTimeout();
    }
  };
  for (const name of ACTIVITY_EVENTS) window.addEventListener(name, detectedActivity);
  const interval = window.setInterval(() => {
    store();
    checkTimeout();
  }, PRECISION_SECONDS * 1000);
  checkTimeout();
  return destroy;
}

/* The running timer is app-wide, as in the original: PIN_SessionInactivity_Start keeps its destroy function in the
   element cache (obj_SessionInactivityDestroyCallback, AM:7924) and only the next Start destroys it (AM:7906). The
   InactivityTimer block that starts it (inside Pincode_Unlock, inside Block_PINUnlock, inside CommonUI) only registers
   the PIN_OnTimeout handler; its OnDestroy removes that handler, not the timer (p:UBT_AppManager.PIN.InactivityTimer
   .mvc.js:186-197, 245-262). So on a screen without CommonUI the timer of the previous screen keeps running and, when
   it fires, nobody listens to PIN_OnTimeout (CR-Services-1). */
let runningTimerDestroy: (() => void) | null = null;
const timeoutHandlers = new Set<() => void>();

/** PIN_SessionInactivity_Destroy (AM:7862-7873): runs the stored destroy function. */
export function pinSessionInactivityDestroy(): void {
  runningTimerDestroy?.();
}

/** PIN_SessionInactivity_Start (AM:7894-7930): with PIN_SessionInactivity_Use, destroys the running timer and starts
    a new one (SetupTimersJS, AM:7955-8036) whose timeout calls PIN_SessionInactivty_OnTimeout. */
export function pinSessionInactivityStart(): void {
  if (!getClientVar('UBT_AppManager.PIN_SessionInactivity_Use')) return;
  pinSessionInactivityDestroy();
  runningTimerDestroy = startInactivityTimer(inactivitySeconds(), () => {
    onInactivityTimeout();
  });
}

/** AppManager_JSUtils_CustomEvents_RegisterHandler(PIN_OnTimeout) as InactivityTimer OnInitialize calls it
    (p:UBT_AppManager.PIN.InactivityTimer.mvc.js:186-193); returns the destroy function its OnDestroy runs. */
export function registerInactivityTimeoutHandler(handler: () => void): () => void {
  timeoutHandlers.add(handler);
  return () => {
    timeoutHandlers.delete(handler);
  };
}

/** PIN_SessionInactivty_OnTimeout (AM:8040-8075): keep the current path as callback; with
    PIN_SessionInactivity_Navigate a full page load of PINUnlock (AM:8063-8069), otherwise the custom event
    PIN_OnTimeout (AM:8071), handled only while an InactivityTimer is mounted (LockHost locks in place). */
export function onInactivityTimeout(
  redirect: (url: string) => void = (url) => {
    window.location.assign(url);
  },
): void {
  setAppCallbackCurrentLocation();
  if (getClientVar('UBT_AppManager.PIN_SessionInactivity_Navigate')) redirect(PATHS.pinUnlock);
  else for (const handler of [...timeoutHandlers]) handler();
}
