import { setLayoutThemeSetter } from '@/components/layout/layoutTheme';
import { setBodyTheme } from '@/platform/theme/bodyTheme';

/** Connects the layouts of components/layout (theme class of the body) with platform/theme. Neither folder may import
    the other (plan v2 section 2.4, rules 4 and 8), so app/ does it once, before the first render (main.tsx). The test
    setup and the Storybook preview call it too. */
export function connectLayoutTheme(): void {
  setLayoutThemeSetter(setBodyTheme);
}
