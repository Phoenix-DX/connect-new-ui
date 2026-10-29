import { afterEach, describe, expect, it } from 'vitest';
import { setLayoutTheme } from '@/components/layout/layoutTheme';
import { ThemeClass } from '@/lib/legacyShared/staticEntities';
import { connectLayoutTheme } from './layoutTheme';

describe('connectLayoutTheme', () => {
  const initial = document.body.className;
  afterEach(() => {
    document.body.className = initial;
  });

  it('makes setLayoutTheme set the theme class of the body', () => {
    connectLayoutTheme();
    document.body.className = 'phone connect-theme';
    setLayoutTheme(ThemeClass.Orbit);
    expect(document.body.className).toBe('phone orbit-theme');
  });
});
