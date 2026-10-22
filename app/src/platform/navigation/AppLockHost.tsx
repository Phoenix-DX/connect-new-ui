import { useIsCommonUiAbsent, useIsCommonUiMounted } from '@/platform/feedback/dialogs/commonUiPresence';
import { LockHost } from './LockHost';

/* The app-level lock host, a stand-in for screens not yet rendering CommonUI_InsideLayout; screens that render it get
   the lock container from the block (CR-PINUnlock-3). None on a screen that declares no CommonUI (useNoCommonUi):
   Block_PINUnlock exists only inside CommonUI_InsideLayout (and the PINUnlock screen), so the original has no lock
   container and no PIN_OnTimeout handler there; the timer of the previous screen keeps running and its timeout locks
   nothing (CR-Services-1; inactivity.ts). */
export function AppLockHost() {
  const commonUiMounted = useIsCommonUiMounted();
  const commonUiAbsent = useIsCommonUiAbsent();
  return commonUiMounted || commonUiAbsent ? null : <LockHost />;
}
