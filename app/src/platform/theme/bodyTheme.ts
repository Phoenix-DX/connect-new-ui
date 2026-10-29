/* Body theme setter for the layouts. Rule 9 (docs/architecture/overview.md): only platform/, api/ and app/ import
   legacy/os/, so a layout in components/layout/ imports this module. It wraps legacy/os/bodyTheme without change. */
import { setThemeClassToBody } from '@/legacy/os/bodyTheme';

/** Sets the theme class of the body (ThemeClass.Connect or ThemeClass.Orbit) and removes the other theme classes. */
export function setBodyTheme(theme: string): void {
  setThemeClassToBody(theme);
}
