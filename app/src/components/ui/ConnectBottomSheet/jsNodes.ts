/* JavaScript nodes of UBTConnectLibrary.ConnectPatterns.BottomSheet (CountryDetails copy,
   UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc.js), ported 1:1. `id` is the OSUI block's widget id
   (BottomSheet_Internal). */
const sheetOf = (id: string) => document.getElementById(id)?.querySelector<HTMLElement>('.osui-bottom-sheet') ?? null;

/** OnReady.CloseOnClick (:1084-1095): a click on the overlay closes the sheet. */
export function closeOnClick(id: string, bottomSheetClose: (id: string) => void): void {
  const overlay = document.getElementById(id)?.querySelector<HTMLElement>('.osui-bottom-sheet-overlay');
  if (overlay)
    overlay.onclick = () => {
      bottomSheetClose(id);
    };
}

/** OnReady.AddTransitionListener (:1096-1105): RemoveInert after every sheet transition; the sheet is not inert. */
export function addTransitionListener(id: string, removeInert: () => void): void {
  const sheet = sheetOf(id);
  if (sheet) {
    sheet.addEventListener('transitionend', removeInert);
    sheet.inert = false;
  }
}

/** MaybeHideContentWhenClosed.DelaySetHideWhenClosed (:1106-1122): SetHideContentWhenClosed(True) after the next
    sheet transition. */
export function delaySetHideWhenClosed(id: string, setHideContentWhenClosed: (value: boolean) => void): void {
  const sheet = sheetOf(id);
  const transitionEndHandler = () => {
    setHideContentWhenClosed(true);
    sheet?.removeEventListener('transitionend', transitionEndHandler);
  };
  sheet?.addEventListener('transitionend', transitionEndHandler);
}

/** RemoveInert.RemoveInert (:1212-1227), run after the block's next render. */
export function removeInert(id: string): void {
  const sheet = sheetOf(id);
  if (sheet) sheet.inert = false;
}

const DRAG_THRESHOLD_PX = 60;
const SWIPE_SPEED_THRESHOLD = 0.3;

function currentTranslateY(element: HTMLElement): number {
  const transform = getComputedStyle(element).transform;
  if (!transform || transform === 'none') return 0;
  return new DOMMatrixReadOnly(transform).m42;
}

/** BottomSheet_InternalInitialized.JavaScript1 (:1123-1211): drag the closed sheet's header up to open it (more than
    60 px, or an upward swipe faster than 0.3 px/ms). Binds once per header (`data-drag-to-open-bound`). */
export function bindDragToOpen(containerId: string, bottomSheetOpen: (id: string) => void): void {
  const container = document.getElementById(containerId);
  if (!container) return;
  const sheet = container.querySelector<HTMLElement>('.osui-bottom-sheet');
  const handle = sheet?.querySelector<HTMLElement>('.osui-bottom-sheet__header');
  if (!sheet || !handle) return;
  if (handle.dataset.dragToOpenBound === 'true') return;
  handle.dataset.dragToOpenBound = 'true';
  handle.style.touchAction = 'none';
  // Engines whose style object drops `touch-action` (jsdom) get the same inline style through the attribute.
  if (handle.style.getPropertyValue('touch-action') !== 'none')
    handle.setAttribute('style', `${handle.getAttribute('style') ?? ''}touch-action: none;`);

  let startY = 0;
  let startTime = 0;
  let lastY = 0;
  let dragging = false;
  let closedOffset = 0;
  const isOpen = () => sheet.classList.contains('osui-bottom-sheet--is-open');

  const onPointerDown = (event: PointerEvent) => {
    if (isOpen()) return;
    dragging = true;
    startY = lastY = event.clientY;
    startTime = performance.now();
    closedOffset = currentTranslateY(sheet);
    sheet.style.transition = 'none';
    handle.setPointerCapture(event.pointerId);
  };
  const onPointerMove = (event: PointerEvent) => {
    if (!dragging) return;
    let deltaY = event.clientY - startY;
    lastY = event.clientY;
    if (deltaY > 0) deltaY = 0;
    const next = Math.max(0, closedOffset + deltaY);
    event.preventDefault();
    sheet.style.transform = `translateY(${String(next)}px)`;
  };
  const onPointerUp = () => {
    if (!dragging) return;
    dragging = false;
    sheet.style.transition = '';
    const totalDelta = lastY - startY;
    const speed = Math.abs(totalDelta) / (performance.now() - startTime);
    const shouldOpen = -totalDelta > DRAG_THRESHOLD_PX || (totalDelta < 0 && speed > SWIPE_SPEED_THRESHOLD);
    sheet.style.transform = '';
    if (shouldOpen) bottomSheetOpen(containerId);
  };
  handle.addEventListener('pointerdown', onPointerDown, { passive: true });
  handle.addEventListener('pointermove', onPointerMove, { passive: false });
  handle.addEventListener('pointerup', onPointerUp, { passive: true });
  handle.addEventListener('pointercancel', onPointerUp, { passive: true });
}
