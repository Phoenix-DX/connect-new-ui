import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { ImageLoadErrorHandler } from './ImageLoadErrorHandler';
import * as stories from './ImageLoadErrorHandler.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

function renderIn(className: string) {
  const view = render(
    <div className={className}>
      <ImageLoadErrorHandler />
      <div id="photo">
        <img alt="" src="/broken.png" />
        <img alt="" src="/broken-2.png" data-error-placeholder-src="/fallback.png" />
      </div>
    </div>,
  );
  const [plain, withPlaceholder] = [...view.container.querySelectorAll('img')];
  if (!plain || !withPlaceholder) throw new Error('images not rendered');
  return { plain, withPlaceholder };
}

describe('HandleImageLoadError', () => {
  testCapturedVariants(stories, captures);

  it('replaces failed images under .screen with their placeholder or the default user picture', () => {
    const { plain, withPlaceholder } = renderIn('main screen');
    fireEvent.error(plain);
    fireEvent.error(withPlaceholder);
    expect(plain.getAttribute('src')).toBe('/os-assets/UBTConnect/img/Connect2_LegacyShared.User_rectangle.png');
    expect(withPlaceholder.getAttribute('src')).toBe('/fallback.png');
    fireEvent.error(withPlaceholder); // the placeholder itself fails: no loop
    expect(withPlaceholder.getAttribute('src')).toBe('/fallback.png');
  });

  it('does nothing without a .screen ancestor (UBTConnect layouts)', () => {
    const { plain } = renderIn('main');
    fireEvent.error(plain);
    expect(plain.getAttribute('src')).toBe('/broken.png');
  });
});
