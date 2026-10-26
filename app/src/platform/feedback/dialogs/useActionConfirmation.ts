import { useCallback, useEffect, useRef, useState, type RefObject } from 'react';
import { usePreventBackNavigation } from '@/platform/navigation';
import { DX_SHOW, type DxShowDetail } from './confirmAction';

export interface ActionConfirmation {
  open: boolean;
  /** The element that receives `dx-show` (`data-dx-event-hub`); the dialog renders it. */
  eventHubRef: RefObject<HTMLDivElement | null>;
  /** Yes: closes, runs Confirmed, then answers True. */
  confirm: () => void;
  /** No: closes and answers False. */
  dismiss: () => void;
}

/**
 * The trigger of NavigationHandler ConfirmationDialogs.ActionConfirmationDialog; components/ui/Dialog ConfirmDialog
 * renders it (app/dialogs.ts connects the two).
 * - OnReady: listens for `dx-show` on the event hub; `confirmAction(id)` sends it with the resolve callback;
 * - Yes: ShowDialog False, Confirmed (awaited), then the answer True; No: the answer False;
 * - while open, a back navigation is prevented at lock-screen priority and acts as No (PreventBackNavigation).
 */
export function useActionConfirmation(onConfirmed?: () => Promise<void> | void): ActionConfirmation {
  const [open, setOpen] = useState(false); // OnInitialize: ShowDialog = False
  const resolveCallback = useRef<DxShowDetail['resolve'] | null>(null);
  const eventHubRef = useRef<HTMLDivElement>(null);

  // OnReady: OnShowJS → Show
  useEffect(() => {
    const eventHub = eventHubRef.current;
    if (!eventHub) return undefined;
    const onShow = (event: Event) => {
      resolveCallback.current = (event as CustomEvent<DxShowDetail>).detail.resolve;
      setOpen(true);
    };
    eventHub.addEventListener(DX_SHOW, onShow);
    return () => {
      eventHub.removeEventListener(DX_SHOW, onShow);
    };
  }, []);

  // Resolve
  const resolve = useCallback((result: boolean) => {
    setOpen(false);
    const callback = resolveCallback.current;
    resolveCallback.current = null;
    callback?.(result);
  }, []);
  const yes = async () => {
    setOpen(false);
    await onConfirmed?.();
    resolve(true);
  };
  const confirm = () => {
    void yes();
  };
  const dismiss = useCallback(() => {
    resolve(false);
  }, [resolve]);
  usePreventBackNavigation(open, dismiss); // PreventBackNavigation while shown → No

  return { open, eventHubRef, confirm, dismiss };
}
