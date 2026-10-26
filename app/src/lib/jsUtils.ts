import { useCallback } from 'react';
import { useOsNavigate } from '@/platform/navigation';

/* Client actions of UBTJavaScriptUtils used by the shared blocks, ported 1:1 from UBTJavaScriptUtils.controller.js
   (copy in migration/shell/sources/). One function per action, named after it in lowerCamelCase. */

/** JSUtils_SetStyleProperty (:2912-2920): sets a style property on the element with that id, if any. */
export function jSUtils_SetStyleProperty(objectId: string, propertyName: string, propertyValue: string): void {
  document.getElementById(objectId)?.style.setProperty(propertyName, propertyValue);
}

/** JSUtils_AddClass (:465-470): adds a class to the element with that id, if any. */
export function jSUtils_AddClass(className: string, objectId: string): void {
  document.getElementById(objectId)?.classList.add(className);
}

/** The in-app path (pathname + search + hash) of an href of this origin or an app path (`/UBTConnect/Profile`); null for
    another origin. Relative values resolve against the origin, as the Splash route did before CR-Splash-2. */
export function appPathOf(url: string): string | null {
  const target = new URL(url, window.location.origin);
  return target.origin === window.location.origin ? `${target.pathname}${target.search}${target.hash}` : null;
}

export type ScreenController_NavigateToPage = (url: string, replaceInHistory: boolean) => void;

/** Navigation.changeWindowLocation(URL) with its defaults (runtime-sources/OutSystems.js:8:6637): no invalidation
    suffix, replace False, so `location.href = URL` (a new history entry). The runtime runs it after flushing its log
    storage; the clone has none, so it runs at once. */
export function changeWindowLocation(url: string, location: Pick<Location, 'href'> = window.location): void {
  location.href = url;
}

/** ScreenController_NavigateToPage(URL, ReplaceInHistory) (:3713-3789): the screen controller's
    `publicApiHelper.Navigation.navigateTo(URL, transition, isReplace)` → runtime Navigation.navigateTo
    (runtime-sources/OutSystems.js:16:26318 → :8:698). The runtime asks getUrlInfo (:8:7127) whether the URL belongs to
    this application: an internal URL goes to the router's goTo with the replace flag (here the shell navigation,
    `useOsNavigate`, so a pending ReplaceOnUpcomingNavigation still applies); any other URL goes to changeWindowLocation
    with its defaults, so ReplaceInHistory is ignored and the page is loaded with `location.href` in both cases.
    Callers pass absolute hrefs (Splash LastURL is `window.location.href`) or app paths. A hook: navigation needs the
    router. */
export function useScreenController_NavigateToPage(): ScreenController_NavigateToPage {
  const navigate = useOsNavigate();
  return useCallback(
    (url, replaceInHistory) => {
      const path = appPathOf(url);
      if (path !== null) navigate(path, undefined, { replace: replaceInHistory });
      else changeWindowLocation(url);
    },
    [navigate],
  );
}

/** JSUtils_PageOpenInNewTab (UBTJavaScriptUtils.controller.js, TST copy in migration/shell/sources, :2133-2177):
    `window.open(URL, '_blank')`. */
export function jSUtils_PageOpenInNewTab(url: string): void {
  window.open(url, '_blank');
}

/* ---- Wave 4 foundation (AddressPopup "Copy Address", GetNameAndSurname_ByFullName) ---- */

/** JSUtils_CopyToClipboard(Text) (:784-832, JS node :833-843): `navigator.clipboard.writeText(Text)`; the action waits
    for it and a rejection is raised to the caller. */
export function jSUtils_CopyToClipboard(text: string): Promise<void> {
  // inside the Promise executor as compiled, so a missing clipboard API also ends as a rejection
  return new Promise((resolve, reject) => {
    navigator.clipboard.writeText(text).then(resolve, reject);
  });
}

/** JSUtils_String_Split(String, Char) (:3087-3177, JS node :3178-3184): `String.split(Char)`, serialised to JSON and
    deserialised as a Text List, i.e. the parts of the split. Out: List. */
export function jSUtils_String_Split(string: string, char: string): string[] {
  return string.split(char);
}

/* ---- Wave 4D (StatisticsList) ---- */
/** JSUtils_String_RemoveAccents(In_Text) (:3004-3070, JS node RemoveAccentes :3078-3084): splits accented characters
    into base + diacritic (NFD) and removes the diacritics (U+0300-U+036F). Out: Out_Text. */
export function jSUtils_String_RemoveAccents(inText: string): string {
  return inText.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
