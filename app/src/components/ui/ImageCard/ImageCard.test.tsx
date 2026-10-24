import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { UBT_ImageCardType } from '@/lib/ubtConnectLibrary/staticEntities';
import { ImageCard } from './ImageCard';
import * as stories from './ImageCard.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('ImageCard_LazyLoading', () => {
  testCapturedVariants(stories, captures);
  it('gallery card (not captured): third-width image, small padding, xxs text; click raises Event_Click', () => {
    const onClick = vi.fn();
    const { container, getByText } = render(
      <ImageCard
        inCardTypeId={UBT_ImageCardType.Gallery}
        inItemsPerRow={3}
        placeholderContent={<span>Card</span>}
        onEventClick={onClick}
      />,
    );
    expect(container.querySelector('.ubt-image-card__background-image')).toHaveClass(
      'ubt-lazy-image--width-third-width',
    );
    expect(container.querySelector('.ubt-image-card__content')).toHaveClass('padding-s', 'font-size-xxs');
    fireEvent.click(getByText('Card'));
    expect(onClick).toHaveBeenCalled();
  });
});
