import { fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ImageLoadErrorHandler } from '@/components/ui/ImageLoadErrorHandler';
import { MultiResolutionImageLoader } from './MultiResolutionImageLoader';

/* Connect2_LegacyShared.Widgets.MultiResolutionImageLoader: the view (MRIL.mvc.js:121-147) and InitializeJS
   (MRIL.mvc.js:251-278). jsdom reports `complete` false for an image with a src that never loads, so the tests stub it
   (decision O8 a). */

const ID = 'b2-l1_1-b9-$b1';
const P = 'b2-l1_1-b9-b1';
const LOADED = 'multi-resolution-image-loader-loaded';

const completeDescriptor = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'complete');

/** HTMLImageElement.complete from a rule, by Object.defineProperty on the prototype (restored after each test). */
function stubComplete(isComplete: (img: HTMLImageElement) => boolean) {
  Object.defineProperty(HTMLImageElement.prototype, 'complete', {
    configurable: true,
    get(this: HTMLImageElement) {
      return isComplete(this);
    },
  });
}

afterEach(() => {
  if (completeDescriptor) Object.defineProperty(HTMLImageElement.prototype, 'complete', completeDescriptor);
});

function renderLoader(imagesToLoad = <img alt="" className="member-info-img" src="/photo.jpg" />) {
  const view = render(
    <MultiResolutionImageLoader
      id={ID}
      loading={<img alt="" className="member-info-img" src="/user.png" />}
      imagesToLoad={imagesToLoad}
    />,
  );
  const root = view.container.querySelector(`#${P}-Root`) as HTMLElement;
  const images = [...view.container.querySelectorAll<HTMLImageElement>(`#${P}-ImagesToLoad img`)];
  return { ...view, root, images };
}

describe('MultiResolutionImageLoader', () => {
  it('renders the block, the root and the two slots; the root is -loading at mount', () => {
    const { container, root } = renderLoader();
    const block = container.firstElementChild as HTMLElement;
    expect(block.className).toBe('OSBlockWidget');
    expect(block.dataset.block).toBe('Widgets.MultiResolutionImageLoader');
    expect(block.id).toBe(ID);
    expect(root.className).toBe('multi-resolution-image-loader multi-resolution-image-loader-loading');
    expect(root).toHaveAttribute('data-container', '');
    expect([...root.children].map((c) => c.id)).toEqual([`${P}-Loading`, `${P}-ImagesToLoad`]);
    expect(root.querySelector(`#${P}-Loading img`)).toHaveAttribute('src', '/user.png');
  });

  it('R2: a load of an image without a src is ignored', () => {
    stubComplete(() => true);
    const { root, images } = renderLoader(<img alt="" className="member-info-img" />);
    fireEvent.load(images[0] as HTMLImageElement);
    expect(root).toHaveClass('multi-resolution-image-loader-loading');
    expect(images[0]).not.toHaveClass(LOADED);
  });

  it('R3, R4: a load of an image with a src: the root is -loaded and the complete image gets the class; a re-render keeps it', () => {
    const { root, images, rerender } = renderLoader();
    const img = images[0] as HTMLImageElement;
    stubComplete(() => true);
    fireEvent.load(img);
    expect(root.className).toBe('multi-resolution-image-loader multi-resolution-image-loader-loaded');
    expect(img.className).toBe(`member-info-img ${LOADED}`);
    rerender(
      <MultiResolutionImageLoader
        id={ID}
        loading={<img alt="" className="member-info-img" src="/user.png" />}
        imagesToLoad={<img alt="" className="member-info-img" src="/photo.jpg" />}
      />,
    );
    expect(img).toHaveClass(LOADED);
    expect(root).toHaveClass('multi-resolution-image-loader-loaded');
  });

  it('R4: with two complete images only the last one gets the class', () => {
    const { images } = renderLoader(
      <>
        <img alt="" src="/photo-small.jpg" />
        <img alt="" src="/photo-large.jpg" />
      </>,
    );
    stubComplete(() => true);
    fireEvent.load(images[0] as HTMLImageElement);
    expect(images.map((img) => img.classList.contains(LOADED))).toEqual([false, true]);
  });

  it('R5: an image that is complete at mount loads the root without an event; R6: the Loading slot is not listened to', () => {
    stubComplete((img) => img.getAttribute('src') === '/photo.jpg');
    const { root, images } = renderLoader();
    expect(root).toHaveClass('multi-resolution-image-loader-loaded');
    expect(images[0]).toHaveClass(LOADED);

    stubComplete(() => true);
    const second = render(
      <MultiResolutionImageLoader id="b5-$b1" loading={<img alt="" src="/user.png" />} imagesToLoad={<img alt="" />} />,
    );
    fireEvent.load(second.container.querySelector('#b5-b1-Loading img') as Element);
    expect(second.container.querySelector('#b5-b1-Root')).toHaveClass('multi-resolution-image-loader-loading');
  });

  it('3.5: with HandleImageLoadError under .screen, a failed photo turns into its placeholder, then loads the root', () => {
    const view = render(
      <div className="main screen">
        <ImageLoadErrorHandler />
        <MultiResolutionImageLoader
          id={ID}
          loading={<img alt="" src="/user.png" />}
          imagesToLoad={<img alt="" src="/broken.jpg" data-error-placeholder-src="/user.png" />}
        />
      </div>,
    );
    const root = view.container.querySelector(`#${P}-Root`) as HTMLElement;
    const img = view.container.querySelector(`#${P}-ImagesToLoad img`) as HTMLImageElement;
    fireEvent.error(img);
    expect(img.getAttribute('src')).toBe('/user.png');
    expect(root).toHaveClass('multi-resolution-image-loader-loading');
    stubComplete(() => true);
    fireEvent.load(img);
    expect(root).toHaveClass('multi-resolution-image-loader-loaded');
    expect(img).toHaveClass(LOADED);
  });

  it('removes the load listener on unmount', () => {
    const remove = vi.spyOn(EventTarget.prototype, 'removeEventListener');
    const { unmount } = renderLoader();
    unmount();
    expect(remove).toHaveBeenCalledWith('load', expect.any(Function), { capture: true });
  });
});
