/* ShareSheet JS nodes and the UBTConnect_Utils client action it calls, ported 1:1. */

/** ShareSheet_IsSharing (UBTConnect_Utils.controller.js:5257-5258, BookmarksByGroup copy): an external share option
    or a recent member is being shared. */
export function shareSheet_IsSharing(in_ExternalShareOptionTypeId: string, in_SharingRecentMemberId: string): boolean {
  return in_ExternalShareOptionTypeId !== '' || in_SharingRecentMemberId !== '';
}

/** DelaySetIsOpen JS (ShareSheet.mvc.js:3586-3601): IsOpen = False once the sheet's closing transition ends. */
export function delaySetIsOpen(sheetElementId: string, setLocalIsOpen: (value: boolean) => void): void {
  const sheetElement = document.getElementById(sheetElementId)?.querySelector('.osui-bottom-sheet');
  if (!sheetElement) return;
  const transitionEndHandler = () => {
    setLocalIsOpen(false);
    sheetElement.removeEventListener('transitionend', transitionEndHandler);
  };
  sheetElement.addEventListener('transitionend', transitionEndHandler);
}

/** Action_ScrollTop / ScrollToTopJS (ShareSheet.mvc.js:2697-2728, 3619-3628): the sheet content back to the top. */
export function scrollToTop(bottomSheetBlockId: string): void {
  const sheetContent = document.getElementById(bottomSheetBlockId)?.querySelector('.osui-bottom-sheet__content');
  if (sheetContent) sheetContent.scrollTop = 0;
}
