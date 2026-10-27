/* The scroll-anchor actions of the NavigationHandler module (NH = migration/runtime-sources/NavigationHandler.controller.js).
   A list screen remembers the tapped row (RememberFocusedScrollAnchor); a detail screen with FocusScrollAnchorOnBack
   stores the row to focus on back in the navigation storage; the list screen reads it (GetFocusedScrollAnchorOnBack).
   The original also patches the List widget's view-cache restore with both anchors (NH:1050-1126); that patch is not
   part of the clone (the view cache of the shell restores the scroll offsets, U19). */

/** `window.dx.Navigation.Storage` (NH:487; FocusScrollAnchorOnBack block: `… || new Map()`), one per page load. */
export const navigationStorage = new Map<string, unknown>();

/** The anchor a detail screen stores for the back navigation ("dx-entering-scroll-anchor"). */
interface EnteringScrollAnchor {
  id: string;
  index: number;
}

/** What RememberFocusedScrollAnchor keeps on the list component (`dxLeavingScrollAnchor`, NH:1620-1623). */
interface LeavingScrollAnchor {
  index: number;
  offsetTop: number;
}

/** `component.dxLeavingScrollAnchor` per list widget id (the original keeps it on the list's React component and
    serializes it with the list's view state, NH:1067-1070). */
export const leavingScrollAnchors = new Map<string, LeavingScrollAnchor>();

/** RememberFocusedScrollAnchor(ListWidgetId, ListIndex, ScrollAnchorId) (NH:1548-1626): when the list element and the
    anchor `[data-dx-scroll-anchor-id]` exist, keep { index, offsetTop } for the list. */
export function rememberFocusedScrollAnchor(listWidgetId: string, listIndex: number, scrollAnchorId: string): void {
  const list = document.getElementById(listWidgetId);
  if (!list) return;
  const anchor = list.querySelector<HTMLElement>(`[data-dx-scroll-anchor-id='${CSS.escape(scrollAnchorId)}']`);
  if (anchor) leavingScrollAnchors.set(listWidgetId, { index: listIndex, offsetTop: anchor.offsetTop });
}

/** GetFocusedScrollAnchorOnBack (NH:403-495): the "dx-entering-scroll-anchor" of the navigation storage, or
    ScrollAnchorId "" and ListIndex -1 (the JS node's defaults). */
export function getFocusedScrollAnchorOnBack(): { scrollAnchorId: string; listIndex: number } {
  const anchor = navigationStorage.get('dx-entering-scroll-anchor') as EnteringScrollAnchor | undefined;
  return anchor ? { scrollAnchorId: anchor.id, listIndex: anchor.index } : { scrollAnchorId: '', listIndex: -1 };
}
