import { afterEach, describe, expect, it } from 'vitest';
import { ThemeClass } from '@/shared/Connect2_LegacyShared/lib/staticEntities';
import { setThemeClassToBody } from './bodyTheme';

describe('setThemeClassToBody', () => {
  const initial = document.body.className;
  afterEach(() => {
    document.body.className = initial;
  });

  it('adds the theme and removes the other MediaHub / Connect / Orbit classes, keeping every other class', () => {
    document.body.className = 'phone portrait media-hub-theme orbit-theme subpay-theme';
    setThemeClassToBody(ThemeClass.Connect);
    expect(document.body.className).toBe('phone portrait subpay-theme connect-theme');
    setThemeClassToBody(ThemeClass.Connect);
    expect(document.body.classList.contains(ThemeClass.Connect)).toBe(true);
    setThemeClassToBody(ThemeClass.Orbit);
    expect(document.body.className).toBe('phone portrait subpay-theme orbit-theme');
  });
});
