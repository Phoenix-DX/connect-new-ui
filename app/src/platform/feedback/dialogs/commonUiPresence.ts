import { useEffect, useSyncExternalStore } from 'react';

/* Whether the current screen renders CommonUI_InsideLayout (CR-Login-2, CR-PINUnlock-3). While it does, the shell's
   stand-ins (Access Restricted dialog, CommonUI back handler, app-level lock host) stay unmounted, so each exists once,
   as in the captures. A layout without CommonUI (App_Common.LayoutBlank, used by Splash) declares it, so the shell
   mounts no CommonUI stand-in there either (CR-Splash-3). */
let mounted = 0;
let absent = 0;
const listeners = new Set<() => void>();
const notify = () => {
  for (const l of listeners) l();
};
const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
};

function useCounter(change: (delta: number) => void): void {
  useEffect(() => {
    change(1);
    notify();
    return () => {
      change(-1);
      notify();
    };
  }, [change]);
}

const changeMounted = (delta: number) => {
  mounted += delta;
};
const changeAbsent = (delta: number) => {
  absent += delta;
};

/** Called by the CommonUI_InsideLayout block for as long as it is mounted. */
export function useCommonUiPresence(): void {
  useCounter(changeMounted);
}

/** Called by a layout that has no Placeholder_CommonUI_Inside_Layout (App_Common.LayoutBlank) while it is mounted. */
export function useNoCommonUi(): void {
  useCounter(changeAbsent);
}

export function useIsCommonUiMounted(): boolean {
  return useSyncExternalStore(subscribe, () => mounted > 0);
}

const isAbsent = () => absent > 0 && mounted === 0;

export function useIsCommonUiAbsent(): boolean {
  return useSyncExternalStore(subscribe, isAbsent);
}

/** The same, read at once (in an effect): the screen's effects run before the app-level hosts' (AppFrame order), so
    a host can skip work in the commit that mounts a screen without CommonUI, before the store re-renders it. */
export function isCommonUiAbsentNow(): boolean {
  return isAbsent();
}
