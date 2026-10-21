import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MultiResolutionImageLoader } from './MultiResolutionImageLoader';

/* Never captured: behaviour of OnReady InitializeJS (MultiResolutionImageLoader.mvc.js :271-305). */
describe('MultiResolutionImageLoader', () => {
  const render2 = () =>
    render(
      <MultiResolutionImageLoader
        loading={<span>Loading</span>}
        imagesToLoad={
          <>
            <img alt="" src="/small.svg" />
            <img alt="" src="/large.svg" />
            <img alt="" />
          </>
        }
      />,
    );

  it('starts loading; a load of an image with a src marks the root loaded and one complete image', () => {
    const { container } = render2();
    const root = container.querySelector('.multi-resolution-image-loader');
    const [small] = container.querySelectorAll('img');
    if (!root || !small) throw new Error('not rendered');
    Object.defineProperty(small, 'complete', { value: true });
    for (const img of [...container.querySelectorAll('img')].slice(1))
      Object.defineProperty(img, 'complete', { value: false });
    expect(root).toHaveClass('multi-resolution-image-loader-loading');
    fireEvent.load(small);
    expect(root).toHaveClass('multi-resolution-image-loader-loaded');
    expect(root).not.toHaveClass('multi-resolution-image-loader-loading');
    expect(small).toHaveClass('multi-resolution-image-loader-loaded');
  });

  it('a load event of an image without src is ignored', () => {
    const { container } = render2();
    const noSrc = container.querySelectorAll('img')[2];
    if (!noSrc) throw new Error('not rendered');
    fireEvent.load(noSrc);
    expect(container.querySelector('.multi-resolution-image-loader')).toHaveClass(
      'multi-resolution-image-loader-loading',
    );
  });
});
