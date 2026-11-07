/* The JavaScript nodes of the page: DropdownSearch_ForceResizeOnOpen, a client action of UBTConnect_Utils that only
   this screen calls (TST: UBTConnect.App_Profile.Profile.mvc.js:3967-3968 is its only caller). It reads the page
   only. */

/** The Virtual Select instance that the provider sets on the element (`ele.virtualSelect = this`, vendored
    OutSystemsUI_2_23.VirtualSelect.js setEleProps). */
interface VirtualSelectElement extends HTMLElement {
  virtualSelect?: { onResize: () => void };
}

/** DropdownSearch_ForceResizeOnOpen (UBTConnect_Utils.controller.js:1415-1442, JavaScript1 :1443-1460): on every
    `.osui-dropdown-search` present now that has no `data-resize-listener-added`, sets that attribute to "true" and
    adds an `afterOpen` listener that calls `virtualSelect.onResize()`. As compiled, the listeners are never removed
    and elements rendered later get none. */
export function dropdownSearch_ForceResizeOnOpen(): void {
  const elements = document.querySelectorAll<VirtualSelectElement>('.osui-dropdown-search');
  elements.forEach((el) => {
    if (!el.dataset.resizeListenerAdded) {
      el.dataset.resizeListenerAdded = 'true';
      el.addEventListener('afterOpen', () => {
        el.virtualSelect?.onResize();
      });
    }
  });
}
