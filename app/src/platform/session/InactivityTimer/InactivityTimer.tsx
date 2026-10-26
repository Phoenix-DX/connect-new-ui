/** @origin UBT_AppManager.PIN.InactivityTimer */
// @os-block UBT_AppManager.PIN.InactivityTimer
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface InactivityTimerProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Event Timeout. Not raised by this component: the shell runs the inactivity timer (README). */
  onTimeout?: () => void;
}

/** Empty block. In the original, OnInitialize registers a PIN_OnTimeout handler (→ Timeout) and calls
    PIN_SessionInactivity_Start (p:UBT_AppManager.PIN.InactivityTimer.mvc.js:166-205, 221-236), which first destroys
    the running timer (one timer for the app). The shell's `LockHost` already does both for Block_PINUnlock
    (pinSessionInactivityStart, registerInactivityTimeoutHandler: `src/shell/inactivity.ts`). */
export function InactivityTimer({ id }: InactivityTimerProps) {
  return <OSBlock name="PIN.InactivityTimer" id={id} />;
}
