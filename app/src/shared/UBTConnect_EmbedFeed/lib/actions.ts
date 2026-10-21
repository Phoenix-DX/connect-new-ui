/* Client actions of UBTConnect_EmbedFeed, ported 1:1 from UBTConnect_EmbedFeed.controller.js (copy in
   migration/screens/HomeFeed/analysis/sources/pretty/). */

/** GetIframeObject (controller.js:76-80): the first iframe of the container. */
export function getIframeObject(containerId: string): HTMLIFrameElement | null {
  return document.getElementById(containerId)?.getElementsByTagName('iframe')[0] ?? null;
}

/** GetScrollContainer (controller.js:144-147): the active screen's scroll container. */
export function getScrollContainer(): HTMLElement | null {
  return document.querySelector<HTMLElement>('.active-screen.screen-container');
}
