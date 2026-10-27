/* The two JavaScript nodes of Updates_SingleList that save and restore the scroll position of the tapped update
   (US = UBTConnect.Directory_Updates.Updates_SingleList.mvc.js). They keep two localStorage keys, as the original. */

const CONTAINER = '.active-screen.screen-container';
const anchorSelector = (anchorId: string) => `[data-dx-scroll-anchor-id="${anchorId}"]`;

/** Handler_OnClickUpdateItem.CaptureScrollPosition (US:3369-3384): the offset of the anchor from the top of the
    screen container goes to localStorage (`scrollAnchorId`, `scrollAnchorDelta`). */
export function captureScrollPosition(anchorId: string): void {
  const container = document.querySelector(CONTAINER);
  if (!container) return;
  const el = container.querySelector(anchorSelector(anchorId));
  if (!el) return;
  const delta = el.getBoundingClientRect().top - container.getBoundingClientRect().top;
  localStorage.setItem('scrollAnchorId', anchorId);
  localStorage.setItem('scrollAnchorDelta', delta.toString());
}

/** ScreenEvent_OnReady.ScrollFix(In_AnchorId) (US:3440-3460): the anchor (the input, else the stored id) is looked up
    for up to 180 animation frames; when found, the container scrolls so that the anchor sits at the stored delta
    again, and the two keys are removed. */
export function scrollFix(newAnchorId: string): void {
  const anchorId = newAnchorId || localStorage.getItem('scrollAnchorId');
  const delta = parseFloat(localStorage.getItem('scrollAnchorDelta') || '0');
  if (!anchorId) return;
  const container = document.querySelector(CONTAINER);
  if (!container) return;
  let frames = 0;
  const maxFrames = 180;
  const tryRestore = () => {
    const el = document.querySelector(anchorSelector(anchorId));
    if (el) {
      const relativeTop = el.getBoundingClientRect().top - container.getBoundingClientRect().top;
      container.scrollTop = container.scrollTop + relativeTop - delta;
      localStorage.removeItem('scrollAnchorId');
      localStorage.removeItem('scrollAnchorDelta');
      return;
    }
    if (++frames < maxFrames) window.requestAnimationFrame(tryRestore);
  };
  window.requestAnimationFrame(tryRestore);
}
