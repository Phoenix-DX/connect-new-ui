import { describe, expect, it } from 'vitest';
import { styleFromCssText } from './cssText';

describe('styleFromCssText', () => {
  it('converts declarations, keeps custom properties and values with commas', () => {
    expect(
      styleFromCssText(
        'height: 100vh; background-color: rgba(var(--color-rgb-neutral-9),0.25); --_ubt-column-width:  8px;',
      ),
    ).toEqual({
      height: '100vh',
      backgroundColor: 'rgba(var(--color-rgb-neutral-9),0.25)',
      '--_ubt-column-width': '8px',
    });
  });

  it('ignores empty or invalid declarations', () => {
    expect(styleFromCssText('')).toEqual({});
    expect(styleFromCssText('[object CSSStyleDeclaration]; ;color:')).toEqual({});
  });
});
