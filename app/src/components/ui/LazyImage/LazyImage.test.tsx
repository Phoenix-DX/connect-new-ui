import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { osImage } from '@/legacy/os/os-assets';
import { expectToMatchCapture } from '@/test/dom';
import { testCapturedVariants } from '@/test/capturedVariants';
import { LazyImage } from './LazyImage';
import * as stories from './LazyImage.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const url = osImage('img/UBTConnect.ConnectLogo.svg');
const image = (root: HTMLElement) => {
  const img = root.querySelector('img');
  if (!img) throw new Error('no image');
  return img;
};

describe('LazyImage', () => {
  testCapturedVariants(stories, captures);

  it('shows the skeleton while the image loads, then the image (v4: CountryDetails/default)', () => {
    const { container } = render(
      <LazyImage imageURL={url} extendedClass="country-flag" inImageSize={{ Height: 's', Width: 'square' }} />,
    );
    expect(container.querySelector('.ubt-lazy-image')).toHaveClass('hidden');
    expect(container.querySelector('.ubt-lazy-image--no-image')).not.toBeNull();
    fireEvent.load(image(container));
    expectToMatchCapture(container.firstElementChild, captures['./__captures__/v4.html'] ?? '');
  });

  it('shows the fallback after a load error, with initials', () => {
    const { container } = render(<LazyImage imageURL={url} fallbackOptions={{ Initials: 'AB' }} />);
    fireEvent.load(image(container));
    expect(container.querySelector('.ubt-lazy-image--no-image')).toBeNull();
    fireEvent.error(image(container));
    expect(container.querySelector('.ubt-lazy-image')).toHaveClass('hidden');
    expect(container.querySelector('.ubt-lazy-image--no-image')).toHaveTextContent('AB');
  });

  it('renders InlineSVG for an SVG fallback, and loads a new ImageURL', () => {
    const { container, rerender } = render(<LazyImage fallbackOptions={{ SVG: '<svg></svg>' }} />);
    expect(container.querySelector('[data-block="Utilities.InlineSVG"]')).not.toBeNull();
    rerender(<LazyImage imageURL={url} fallbackOptions={{ SVG: '<svg></svg>' }} />);
    expect(image(container)).toHaveAttribute('src', url);
    expect(container.querySelector('.ubt-lazy-image')).toHaveClass('hidden');
  });
});
