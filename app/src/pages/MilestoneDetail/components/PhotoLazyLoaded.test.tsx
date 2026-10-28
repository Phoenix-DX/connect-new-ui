import { fireEvent, render, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { PhotoLazyLoaded } from './PhotoLazyLoaded';

/* PhotoLazyLoaded with the shared MultiResolutionImageLoader (Connect2_LegacyShared, L2). jsdom reports `complete` false
   for an image with a src that never loads: the test stubs it (decision O8 a). */

const completeDescriptor = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'complete');
afterEach(() => {
  if (completeDescriptor) Object.defineProperty(HTMLImageElement.prototype, 'complete', completeDescriptor);
});

describe('PhotoLazyLoaded', () => {
  it('shows the loader -loading with the User_rectangle image, then -loaded after the signed photo loads', async () => {
    const getSignedImageURL = vi.fn(() => Promise.resolve('/photos/host-1042.jpg'));
    const onImageClicked = vi.fn();
    const { container } = render(
      <PhotoLazyLoaded
        id="b4-$b2"
        inId="1042"
        inType="Household"
        inSize="Small"
        getSignedImageURL={getSignedImageURL}
        onImageClicked={onImageClicked}
      />,
    );
    const loader = container.querySelector('[data-block="Widgets.MultiResolutionImageLoader"]') as HTMLElement;
    expect(loader.id).toBe('b4-b2-$b1');
    const root = container.querySelector('#b4-b2-b1-Root') as HTMLElement;
    expect(root.className).toBe('multi-resolution-image-loader multi-resolution-image-loader-loading');
    expect(container.querySelector('#b4-b2-b1-Loading img')?.getAttribute('src')).toContain(
      'Connect2_LegacyShared.User_rectangle.png',
    );
    const photo = container.querySelector('#b4-b2-b1-ImagesToLoad img') as HTMLImageElement;
    await waitFor(() => {
      expect(photo).toHaveAttribute('src', '/photos/host-1042.jpg');
    });
    expect(getSignedImageURL).toHaveBeenCalledWith('1042', 'Household', 'Small');
    Object.defineProperty(HTMLImageElement.prototype, 'complete', { configurable: true, get: () => true });
    fireEvent.load(photo);
    expect(root.className).toBe('multi-resolution-image-loader multi-resolution-image-loader-loaded');
    expect(photo.className).toBe('host-information-image multi-resolution-image-loader-loaded');
    fireEvent.click(photo);
    expect(onImageClicked).toHaveBeenCalledTimes(1);
  });
});
