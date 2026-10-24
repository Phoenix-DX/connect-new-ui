import { fireEvent, render, renderHook, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { ResultListType } from '@/shared/Connect2_LegacyShared/lib/staticEntities';
import { ResultItemImage } from './ResultItemImage';
import { MOCK_SIGNED_PHOTO_URL, mockGetSignedPhotosInBulk } from './mocks';
import * as stories from './ResultItemImage.stories';
import { useLoadPhotoAsync } from './useLoadPhotoAsync';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Result_Item_Image', () => {
  testCapturedVariants(stories, captures);

  it('padding, border and custom classes; image and text raise OnClick_Item', () => {
    const onClick = vi.fn();
    const { container } = render(
      <ResultItemImage inHasPadding={false} customClass="extra" itemHeight="50px" onOnClickItem={onClick} />,
    );
    const item = container.querySelector('[data-item]');
    expect(item).toHaveClass(
      'image-item',
      'result-item',
      'no-padding',
      'border-bottom',
      'border-bottom-neutral-4',
      'extra',
    );
    expect(container.querySelector('.result-item_text-content')?.getAttribute('style')).toContain('min-height: 50px');
    const visual = container.querySelector('.result-item_visual');
    const text = container.querySelector('.result-item_text-content');
    if (!visual || !text) throw new Error('columns not rendered');
    fireEvent.click(visual);
    fireEvent.click(text);
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('a subdivision shows the division image; a round signed photo is cropped to the diameter', () => {
    const { container, rerender } = render(<ResultItemImage inResultType={ResultListType.Subdivision} />);
    expect(container.querySelector('img')?.getAttribute('src')).toContain('no_division_rectangle');
    rerender(<ResultItemImage inIsRoundImage inDiameter={40} inSignedURL="/photo.png" />);
    const cropper = container.querySelector('.photo-cropper');
    expect(cropper?.getAttribute('style')).toBe('width: 40px; height: 40px;');
    expect(cropper?.querySelector('img')).toHaveClass('round-photo');
  });

  it('without GetSignedPhotosInBulk in the contract (CR-W3Y-1) Bucket / Path / Type leave the default image', () => {
    const { container } = render(<ResultItemImage inBucket="bucket" inPath="photos/a.jpg" inType="Member" />);
    expect(container.querySelector('img')?.getAttribute('src')).toContain('Connect2_LegacyShared.User_rectangle.png');
  });

  it('LoadPhotoAsync signs Bucket / Path / Type once and reuses Last_SignedURL; In_SignedURL wins', async () => {
    const server = vi.fn(mockGetSignedPhotosInBulk);
    const { result, rerender } = renderHook(
      ({ url, path }: { url: string; path: string }) => useLoadPhotoAsync(url, 'load-bucket', path, 'Member', server),
      { initialProps: { url: '', path: 'a.jpg' } },
    );
    expect(result.current).toBe('');
    await waitFor(() => {
      expect(result.current).toBe(MOCK_SIGNED_PHOTO_URL);
    });
    expect(server).toHaveBeenCalledWith([{ Bucket: 'load-bucket', Path: 'a.jpg', Type: 'Member' }]);
    rerender({ url: 'signed-by-screen', path: 'a.jpg' });
    expect(result.current).toBe('signed-by-screen');
    rerender({ url: '', path: 'a.jpg' });
    expect(result.current).toBe(MOCK_SIGNED_PHOTO_URL);
    rerender({ url: '', path: 'b.jpg' });
    expect(result.current).toBe('');
    await waitFor(() => {
      expect(result.current).toBe(MOCK_SIGNED_PHOTO_URL);
    });
    expect(server).toHaveBeenCalledTimes(2);
  });
});
