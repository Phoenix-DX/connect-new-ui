import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { osImage } from '@/lib/os-assets';
import { expectToMatchCapture } from '@/test/dom';
import { testCapturedVariants } from '@/test/capturedVariants';
import { Connect_Entity, ImageSize, UBT_ImageSize } from '@/lib/ubtConnectUtils/staticEntities';
import { markNoPhoto, mockSignedImageURL } from './mocks';
import { onInitialize } from './onInitialize';
import { EntityLazyImage } from './EntityLazyImage';
import * as stories from './EntityLazyImage.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('UBT_LazyImage', () => {
  testCapturedVariants(stories, captures);

  it('renders capture v2 once the flag has loaded (CountryDetails/default)', () => {
    const { container } = render(
      <EntityLazyImage
        imageURL={osImage('img/UBTConnect.ConnectLogo.svg')}
        imageSize={{ Height: UBT_ImageSize.Small_40, Width: UBT_ImageSize.Square }}
        extendedClass="country-flag"
        inBorderRadius="circle"
      />,
    );
    const img = container.querySelector('img');
    if (!img) throw new Error('no image');
    fireEvent.load(img);
    expectToMatchCapture(container.firstElementChild, captures['./__captures__/v2.html'] ?? '');
  });

  it('member without image: avatar classes, circle border, person icon sized from the height', () => {
    const { container } = render(
      <EntityLazyImage
        entityType={Connect_Entity.Member}
        imageSize={{ Height: UBT_ImageSize.Base_52, Width: 'square' }}
      />,
    );
    const image = container.querySelector('.ubt-lazy-image');
    expect(image).toHaveClass(
      'inline-block',
      'ubt-avatar-image',
      'border-s',
      'border-color-neutral-3',
      'border-radius-circle',
    );
    expect(container.querySelector('.ubt-lazy-image--no-image')).toHaveClass(
      'background-cyan-lightest',
      'font-size-base',
    );
    expect(container.querySelector('.connect-icon-person-fill')).toHaveClass(
      'text-cyan-darker',
      'icon-non-standard-32',
    );
  });

  it('an entity without ImageURL loads its signed URL in the skeleton (GetSignedImagesInBulk: placeholder, Q-W2C-1)', async () => {
    const { container } = render(<EntityLazyImage entityId="12" entityType={Connect_Entity.Locality} />);
    expect(container.querySelector('.ubt-skeleton-section')).not.toBeNull();
    // The signed URL replaces the outer skeleton; LazyImage keeps its own until the image loads (no load in jsdom).
    await waitFor(() => {
      expect(container.querySelector('img')?.getAttribute('src')).toBe('/mock-images/placeholder-landscape.svg');
    });
  });

  it('OnParametersChanged (:812-845): an EntityId that arrives after the first render asks for its signed URL', async () => {
    const { container, rerender } = render(<EntityLazyImage entityId="" entityType={Connect_Entity.Household} />);
    expect(container.querySelector('.ubt-skeleton-section')).toBeNull();
    rerender(<EntityLazyImage entityId="31" entityType={Connect_Entity.Household} />);
    expect(container.querySelector('.ubt-skeleton-section')).not.toBeNull();
    await waitFor(() => {
      expect(container.querySelector('img')?.getAttribute('src')).toBe('/mock-images/placeholder-landscape.svg');
    });
  });

  it('mock rule (Q-W2C-1): Member square, Household / Locality / Subdivision landscape, others and marked ids empty', () => {
    expect(mockSignedImageURL('1', Connect_Entity.Member)).toBe('/mock-images/placeholder-square.svg');
    expect(mockSignedImageURL('1', Connect_Entity.Household)).toBe('/mock-images/placeholder-landscape.svg');
    expect(mockSignedImageURL('1', 'Subdivision')).toBe('/mock-images/placeholder-landscape.svg');
    expect(mockSignedImageURL('1', Connect_Entity.FeedItem)).toBe('');
    markNoPhoto(Connect_Entity.Member, '77');
    expect(mockSignedImageURL('77', Connect_Entity.Member)).toBe('');
    expect(mockSignedImageURL('77', Connect_Entity.Household)).toBe('/mock-images/placeholder-landscape.svg');
  });

  it('a member marked without photo shows the fallback icon (HouseholdCarousel default)', async () => {
    markNoPhoto(Connect_Entity.Member, '78');
    const { container } = render(
      <EntityLazyImage
        entityId="78"
        entityType={Connect_Entity.Member}
        imageSize={{ Height: UBT_ImageSize.Base_52 }}
      />,
    );
    await waitFor(() => {
      expect(container.querySelector('.ubt-skeleton-section')).toBeNull();
    });
    expect(container.querySelector('img')?.getAttribute('src')).toBeNull();
    expect(container.querySelector('.connect-icon-person-fill')).not.toBeNull();
  });

  it('OnInitialize size switch: height first, then width; message kept only for large images; HighRes', () => {
    const xl = onInitialize('', { Height: UBT_ImageSize.ExtraLarge_100 }, true, true, '');
    expect(xl.fallbackOptions).toMatchObject({ FontSize: 'h2', IconSizeId: 'icon-non-standard-64' });
    expect(xl.fallbackOptions.Message).toBe('Sorry, no photo available');
    expect(xl.imageSizeId).toBe(ImageSize.Large);
    const small = onInitialize('', { Height: UBT_ImageSize.Small_40 }, true, true, '');
    expect(small.fallbackOptions.Message).toBe('');
    expect(small.imageSizeId).toBe(ImageSize.Small);
    const width = onInitialize('', { Width: UBT_ImageSize.Large_65 }, false, true, 'soft');
    expect(width.fallbackOptions).toMatchObject({ FontSize: 'h4', IconSizeId: '' });
    expect(width.imageSizeId).toBe(ImageSize.Medium);
    expect(width.borderRadius).toBe('soft');
    const none = onInitialize('', {}, false, true, '');
    expect(none.imageSizeId).toBe('');
    expect(none.borderRadius).toBe('none');
    expect(onInitialize('', {}, false, false, '').imageSizeId).toBe(ImageSize.Medium);
    expect(onInitialize(Connect_Entity.FeedItem, {}, false, false, '').fallbackOptions.IconId).toBe(
      'connect-icon-feed',
    );
  });
});
