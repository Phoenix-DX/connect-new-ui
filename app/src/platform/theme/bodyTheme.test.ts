import { afterEach, describe, expect, it } from 'vitest';
import { ThemeClass } from '@/lib/legacyShared/staticEntities';
import { setBodyTheme } from './bodyTheme';

describe('setBodyTheme', () => {
  const initial = document.body.className;
  afterEach(() => {
    document.body.className = initial;
  });

  it('sets the theme class and removes the other theme classes, keeping every other class', () => {
    document.body.className = 'phone media-hub-theme orbit-theme subpay-theme';
    setBodyTheme(ThemeClass.Connect);
    expect(document.body.className).toBe('phone subpay-theme connect-theme');
    setBodyTheme(ThemeClass.Orbit);
    expect(document.body.className).toBe('phone subpay-theme orbit-theme');
  });
});
