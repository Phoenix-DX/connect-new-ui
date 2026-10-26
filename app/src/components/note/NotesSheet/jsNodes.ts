/* NotesSheet JS node, ported 1:1. */

/** DelaySetIsOpen JS (NotesSheet.mvc.js:945-962): IsSheetOpen = False once the sheet's closing transition ends. */
export function delaySetIsOpen(sheetElementId: string, setBottomSheetOpen: (value: boolean) => void): void {
  const sheetElement = document.getElementById(sheetElementId)?.querySelector('.osui-bottom-sheet');
  if (!sheetElement) return;
  const transitionEndHandler = () => {
    setBottomSheetOpen(false);
    sheetElement.removeEventListener('transitionend', transitionEndHandler);
  };
  sheetElement.addEventListener('transitionend', transitionEndHandler);
}
