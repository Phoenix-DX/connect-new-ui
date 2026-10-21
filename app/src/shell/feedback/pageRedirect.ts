/** UBTJavaScriptUtils JSUtils_PageRedirect (UBTJavaScriptUtils.controller.js:2226-2240): a full page load to `url`,
    unless `navigateIfSamePage` is False and the page is already there. */
export function pageRedirect(url: string, navigateIfSamePage = true): void {
  if (navigateIfSamePage || window.location.href !== url) window.location.href = url;
}
