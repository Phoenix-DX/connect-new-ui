import { useCallback, useEffect, useState } from 'react';
import { BACK_PRIORITY } from './backQueue';
import { useBackHandler, usePreventBackNavigation } from './hooks';
import { clearViewCache } from './viewCache';

/* NavigationHandler ConfirmationDialogs.ExitConfirmationDialog logic
   (p:NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc.js, "EXD" below). */

/** ExitAppJS (EXD:674-681): Cordova's `navigator.app.exitApp()`, else `window.close()` (decision U15). */
export function exitApp(): void {
  const app = (navigator as Navigator & { app?: { exitApp?: () => void } }).app;
  if (app?.exitApp) app.exitApp();
  else window.close();
}

export interface ExitConfirmation {
  showDialog: boolean;
  yes: () => void;
  no: () => void;
}

/**
 * - back navigation, queue priority -1 (EXD:320-336): when `force` or the back goes to the first entry
 *   (ShouldShowDialogJS, EXD:669-672): prevent it and show the dialog (EXD:408-415);
 * - while shown, a back navigation is prevented at lock-screen priority and acts as No (EXD:284-318);
 * - Yes: hide, then exit the app (EXD:471-488); No: hide (EXD:552-566);
 * - OnReady: ClearScreenStateCache (EXD:523-538, 683-691), so HomeFeed and Login empty the view cache (U19).
 */
export function useExitConfirmation(force: boolean): ExitConfirmation {
  const [showDialog, setShowDialog] = useState(false);

  useBackHandler(BACK_PRIORITY.exitDialog, (event) => {
    if (!force && !event.isInitialLocation()) return;
    event.preventDefault();
    setShowDialog(true);
  });

  const no = useCallback(() => {
    setShowDialog(false);
  }, []);
  usePreventBackNavigation(showDialog, no);

  const yes = useCallback(() => {
    setShowDialog(false);
    exitApp();
  }, []);

  useEffect(() => {
    clearViewCache();
  }, []);

  return { showDialog, yes, no };
}
