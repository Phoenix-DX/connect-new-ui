import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ResultListType } from '@/shared/Connect2_LegacyShared/lib/staticEntities';
import { NC_Card_Item_Visual } from './NC_Card_Item_Visual';

/* Never captured: behaviour from the compiled view (NC_Card_Item_Visual.mvc.js view :300-395). */
describe('NC_Card_Item_Visual', () => {
  it('signed photo: cover image with height and object-position "<Y> <X>"; user error image', () => {
    const { container } = render(
      <NC_Card_Item_Visual
        inSignedURL="/photo.svg"
        inImageHeight={180}
        inImageCoverPositionX="left"
        inImageCoverPositionY="top"
        inFloatingPillPosition="top-left"
        inFloatingOverlayTextPosition="bottom-left"
      />,
    );
    const img = container.querySelector('img');
    expect(img).toHaveClass('img-cover', 'full-width');
    expect(img?.getAttribute('src')).toBe('/photo.svg');
    expect(img?.getAttribute('style')).toBe('height: 180px; object-position: top left;');
    expect(img?.getAttribute('data-error-placeholder-src')).toContain('User_rectangle');
    const floating = [...container.querySelectorAll('.position-absolute')].map((e) => e.className);
    expect(floating).toEqual(['position-absolute absolute-top-left', 'position-absolute absolute-bottom-left']);
  });

  it('no signed URL: division default image (top-center); Subdivision gives the division error image', () => {
    const { container } = render(<NC_Card_Item_Visual inResultType={ResultListType.Subdivision} />);
    const img = container.querySelector('img');
    expect(img).toHaveClass('img-cover--top-center');
    expect(img?.getAttribute('src')).toContain('no_division_rectangle');
    expect(img?.getAttribute('style')).toBe('height: 202px;');
    expect(img?.getAttribute('data-error-placeholder-src')).toContain('no_division_rectangle');
  });

  it('ShowPlaceholderForImage renders the Image placeholder instead of an image', () => {
    const { container, getByText } = render(
      <NC_Card_Item_Visual showPlaceholderForImage image={<span>Event banner</span>} inSignedURL="/photo.svg" />,
    );
    expect(container.querySelector('img')).toBeNull();
    expect(getByText('Event banner')).toBeInTheDocument();
  });
});
