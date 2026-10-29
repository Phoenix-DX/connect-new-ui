/* The layouts set the theme class of the body when they initialize. The setter is app state in platform/theme, which
   components/ may not import (plan v2 section 2.4, rule 4), and legacy/os is closed to components (rule 9). app/ gives
   the setter once at start (app/layoutTheme.ts); the test setup and the Storybook preview do the same. */

type BodyThemeSetter = (theme: string) => void;

let setter: BodyThemeSetter | undefined;

/** Called by app/layoutTheme.ts. */
export function setLayoutThemeSetter(next: BodyThemeSetter): void {
  setter = next;
}

/** Sets the theme class of the body (ThemeClass.Connect or ThemeClass.Orbit). Throws before app/ connected the setter. */
export function setLayoutTheme(theme: string): void {
  if (setter === undefined)
    throw new Error('The layout theme is not connected: call connectLayoutTheme() (app/layoutTheme.ts).');
  setter(theme);
}
