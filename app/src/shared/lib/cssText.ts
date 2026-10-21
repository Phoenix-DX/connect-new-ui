import type { CSSProperties } from 'react';

/** Inline style text as OutSystems writes it ("height: 100vh; width: 100vw;") as a React style object.
    Custom properties (`--name`) keep their name; other properties become camelCase. */
export function styleFromCssText(cssText: string): CSSProperties {
  const style: Record<string, string> = {};
  for (const declaration of cssText.split(';')) {
    const colon = declaration.indexOf(':');
    if (colon < 0) continue;
    const property = declaration.slice(0, colon).trim();
    const value = declaration.slice(colon + 1).trim();
    if (!property || !value) continue;
    const key = property.startsWith('--')
      ? property
      : property.replace(/-([a-z])/g, (_match, letter: string) => letter.toUpperCase());
    style[key] = value;
  }
  return style;
}
