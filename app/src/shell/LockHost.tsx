import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { BlockPinUnlock } from './dialogs/BlockPinUnlock';
import { isCommonUiAbsentNow } from './dialogs/commonUiPresence';
import { pinSessionInactivityStart, registerInactivityTimeoutHandler } from './inactivity';
import { usePreventBackNavigation } from './navigation';
import { ignoresLockScreen } from './paths';
import { lock } from './pin';
import { useClientVar, useShellState } from './session';

/* Host of the inactivity lock: Block_PINUnlock as CommonUI renders it (dialogs/BlockPinUnlock.tsx). Like the original: no lock block when signed out, on screens that ignore the lock screen, or when a PIN must still be
   registered (CommonUI HideLockScreen, CUI:533-537). While the unlock content is hidden the InactivityTimer is mounted
   (Pincode_Unlock:188, 348): it registers the PIN_OnTimeout handler and restarts the app-wide timer on every screen (each
   screen mounts its own CommonUI); on timeout Pincode_Unlock sets PIN_IsLocked (Pincode_Unlock:660-666) and the content
   shows. Unmounting removes the handler only; the timer keeps running (inactivity.ts, CR-Services-1). While the content
   shows, back navigation is prevented at the lock-screen priority 100000 (spec section 9 "Back navigation", NH:664-705). */
export function LockHost() {
  const { pathname } = useLocation();
  const { signedIn, hasLocalPin, locked } = useShellState();
  const pinUse = useClientVar('UBT_AppManager.PIN_Use');
  const inactivityUse = useClientVar('UBT_AppManager.PIN_SessionInactivity_Use');
  const ignored = ignoresLockScreen(pathname);
  const hidden = !signedIn || ignored || (pinUse && !hasLocalPin);
  const contentVisible = inactivityUse && locked; // Pincode_Unlock:192-196 (In_ForceVisible not used by the shell)

  useEffect(() => {
    // a screen without CommonUI has no InactivityTimer (CR-Services-1): AppLockHost unmounts this host on the next render
    if (hidden || contentVisible || isCommonUiAbsentNow()) return;
    // InactivityTimer OnInitialize (p:UBT_AppManager.PIN.InactivityTimer.mvc.js:186-197); OnDestroy removes the handler
    const removeHandler = registerInactivityTimeoutHandler(() => {
      lock();
    });
    pinSessionInactivityStart();
    return removeHandler;
  }, [hidden, contentVisible, pathname]);
  usePreventBackNavigation(!hidden && contentVisible);

  if (hidden) return null;
  return <BlockPinUnlock inIsCommonBlock />; // In_IsCommonBlock True (CommonUI_InsideLayout:201-206), In_ForceVisible False
}
