/* Theme class of the body (CR-W3A-1), ported from migration/runtime-sources/Connect2_LegacyShared.controller.js. The
   shell owns the body classes; a layout sets its theme when it initializes (Layout.Layout OnInitialize sets
   ThemeClass.Connect). Nothing removes the class when the layout leaves (Layout.Layout has no OnDestroy). */
import { ThemeClass } from '@/shared/Connect2_LegacyShared/lib/staticEntities';

/** AddThemeClassToBody (controller.js:235-283, AddThemeJS :278-283). */
function addThemeClassToBody(themeName: string): void {
  document.body.classList.add(themeName);
}

/** RemoveThemeClassFromBody (RemoveThemeJS, controller.js:6909-6915): errors are ignored. */
function removeThemeClassFromBody(themeName: string): void {
  try {
    document.body.classList.remove(themeName);
  } catch {
    // RemoveThemeJS swallows the error
  }
}

/** RemoveAllThemeClassesFromBody (controller.js:6548-6600): removes the MediaHub, Connect and Orbit theme classes,
    except ExceptTheme (SubscriptionsAndPayments is not in the list). */
function removeAllThemeClassesFromBody(exceptTheme: string): void {
  for (const theme of [ThemeClass.MediaHub, ThemeClass.Connect, ThemeClass.Orbit])
    if (exceptTheme !== theme) removeThemeClassFromBody(theme);
}

/** SetThemeClassToBody (controller.js:6959-6986): the other theme classes off, then Theme on. */
export function setThemeClassToBody(theme: string): void {
  removeAllThemeClassesFromBody(theme);
  addThemeClassToBody(theme);
}
