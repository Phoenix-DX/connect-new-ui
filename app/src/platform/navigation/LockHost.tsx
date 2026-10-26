import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { BlockPinUnlock } from '@/platform/feedback/dialogs/BlockPinUnlock';
import { isCommonUiAbsentNow } from '@/platform/feedback/dialogs/commonUiPresence';
import { pinSessionInactivityStart, registerInactivityTimeoutHandler } from '@/platform/session/inactivity';
import { usePreventBackNavigation } from '@/platform/navigation';
import { lock } from '@/platform/session/pin';
import { useClientVar, useShellState } from '@/platform/session/session';

/* Host of the inactivity lock: Block_PINUnlock as CommonUI renders it (dialogs/BlockPinUnlock.tsx). Like the original: no lock block when signed out, on screens that ignore the lock screen, or when a PIN must still be
   registered (CommonUI HideLockScreen, CUI:533-537). While the unlock content is hidden the InactivityTimer is mounted
   (Pincode_Unlock:188, 348): it registers the PIN_OnTimeout handler and restarts the app-wide timer on every screen (each
   screen mounts its own CommonUI); on timeout Pincode_Unlock sets PIN_IsLocked (Pincode_Unlock:660-666) and the content
   shows. Unmounting removes the handler only; the timer keeps running (inactivity.ts, CR-Services-1). While the content
   shows, back navigation is prevented at the lock-screen priority 100000 (spec section 9 "Back navigation", NH:664-705).
   `ignoresLockScreen`: the screens that ignore the lock screen, by path. The app-level host (AppLockHost) gives the
   route meta `lock` (app/routes.ts). CommonUI_InsideLayout gives none: its In_IgnoreLockScreen input already leaves
   the host out on those screens (Login, PINUnlock, PINRegister; Splash has no CommonUI). */
export function LockHost({ ignoresLockScreen }: { ignoresLockScreen?: (pathname: string) => boolean }) {
  const { pathname } = useLocation();
  const { signedIn, hasLocalPin, locked } = useShellState();
  const pinUse = useClientVar('UBT_AppManager.PIN_Use');
  const inactivityUse = useClientVar('UBT_AppManager.PIN_SessionInactivity_Use');
  const ignored = ignoresLockScreen?.(pathname) ?? false;
  const hidden = !signedIn || ignored || (pinUse && !hasLocalPin);
  const contentVisible = inactivityUse && locked; // Pincode_Unlock:192-196 (In_ForceVisible not used by the shell)

  useEffect(() => {
    // a screen without CommonUI has no InactivityTimer (CR-Services-1): AppLockHost unmounts this host on the next render
    if (hidden || contentVisible || isCommonUiAbsentNow()) return;
    // InactivityTimer OnInitialize (p:UBT_AppManager.PIN.InactivityTimer.mvc.js:186-197); OnDestroy removes the
    // handler. The timeout writes the session machine: lock() sets PIN_IsLocked and moves the status unlocked → locked.
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
