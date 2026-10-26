import type { RefObject } from 'react';

/* The dialogs of this folder render markup. What opens ConfirmDialog (the `dx-show` event of ConfirmAction) and the
   back-navigation queue that both dialogs join while open are app state in platform/, which components/ui may not
   import (plan v2 section 2.4, rules 4 and 5). app/ gives these hooks once at start (app/dialogs.ts); the test setup
   and the Storybook preview do the same. */

/** The open state and the two answers of a confirmation dialog. */
export interface DialogTrigger {
  open: boolean;
  /** The confirm button. */
  confirm: () => void;
  /** The dismiss button. */
  dismiss: () => void;
}

/** ActionConfirmationDialog: `confirmAction(id)` sends `dx-show` to the event hub element. */
export interface ActionConfirmationTrigger extends DialogTrigger {
  /** The event hub element (`data-dx-event-hub`) that receives `dx-show`. */
  eventHubRef: RefObject<HTMLDivElement | null>;
}

export interface DialogTriggers {
  /** ActionConfirmationDialog: opened by ConfirmAction; `onConfirmed` runs before the answer True. */
  useActionConfirmation: (onConfirmed?: () => Promise<void> | void) => ActionConfirmationTrigger;
  /** PreventBackNavigation: while `enabled`, a back navigation is prevented and `onPrevented` runs. */
  usePreventBackNavigation: (enabled: boolean, onPrevented: () => void) => void;
}

/** Before app/dialogs.ts connected the dialogs, a dialog that renders throws this. */
const notConnected = (): never => {
  throw new Error('connectDialogs() not run');
};

/** The ConfirmAction trigger of ConfirmDialog (app/dialogs.ts sets it). */
export let useActionConfirmationTrigger: DialogTriggers['useActionConfirmation'] = notConnected;
/** The back-navigation handler of NavigationDialog while it is open (app/dialogs.ts sets it). */
export let usePreventBackNavigationTrigger: DialogTriggers['usePreventBackNavigation'] = notConnected;

/** Called once by app/ (and by the test and Storybook setup) before a dialog renders. */
export function setDialogTriggers(next: DialogTriggers): void {
  useActionConfirmationTrigger = next.useActionConfirmation;
  usePreventBackNavigationTrigger = next.usePreventBackNavigation;
}
