/* NavigationHandler ConfirmAction (HF p:NavigationHandler.controller.js:256-283): sends `dx-show` to the event hub of the
   ActionConfirmationDialog whose element id is `dialogId`; resolves with the answer, or False at once when there is no
   such dialog. */

export const DX_SHOW = 'dx-show';

export interface DxShowDetail {
  resolve: (confirmed: boolean) => void;
}

export function confirmAction(dialogId: string): Promise<boolean> {
  return new Promise((resolve) => {
    const eventHub = document.getElementById(dialogId)?.querySelector('[data-dx-event-hub]');
    if (!eventHub) {
      resolve(false);
      return;
    }
    const detail: DxShowDetail = { resolve };
    eventHub.dispatchEvent(new CustomEvent(DX_SHOW, { cancelable: false, detail }));
  });
}
