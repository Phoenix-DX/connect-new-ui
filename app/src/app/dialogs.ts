/* Module paths, not the barrels: tests replace the barrels (vi.mock of '@/platform/feedback/dialogs' and
   '@/platform/navigation'), and the test setup runs this file too. */
import { ConfirmDialog } from '@/components/ui/Dialog/ConfirmDialog';
import { Dialog } from '@/components/ui/Dialog/Dialog';
import { setDialogTriggers } from '@/components/ui/Dialog/dialogTriggers';
import { setDialogViews } from '@/platform/feedback/dialogs/dialogViews';
import { useActionConfirmation } from '@/platform/feedback/dialogs/useActionConfirmation';
import { usePreventBackNavigation } from '@/platform/navigation/hooks';

/** Connects the dialogs of components/ui/Dialog (markup) with platform/: ConfirmAction and the back-navigation queue
    for the dialogs, and the markup for the platform dialogs (Dialog_AccessRestrictedAction, Dialog_ExitConfirmation).
    Neither folder may import the other (plan v2 section 2.4, rules 4, 5 and 8), so app/ does it once, before the first
    render (main.tsx). The test setup and the Storybook preview call it too. */
export function connectDialogs(): void {
  setDialogTriggers({ useActionConfirmation, usePreventBackNavigation });
  setDialogViews({ ConfirmDialog, Dialog });
}
