import { composeStories } from '@storybook/react-vite';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import * as stories from './HouseholdGalleryCard.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { V2 } = composeStories(stories);

describe('Household_GalleryCard', () => {
  testCapturedVariants(stories, captures);

  it('raises Event_OnClick when the card is clicked', () => {
    const onEventOnClick = vi.fn();
    const { container } = render(<V2 onEventOnClick={onEventOnClick} />);
    const card = container.querySelector('.ubt-image-card');
    if (!card) throw new Error('no card');
    fireEvent.click(card);
    expect(onEventOnClick).toHaveBeenCalledTimes(1);
  });
});
