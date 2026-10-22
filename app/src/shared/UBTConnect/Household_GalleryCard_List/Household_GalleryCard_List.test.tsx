import { composeStories } from '@storybook/react-vite';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { Household_GalleryCard_List } from './Household_GalleryCard_List';
import * as stories from './Household_GalleryCard_List.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { V2 } = composeStories(stories);

describe('Household_GalleryCard_List', () => {
  testCapturedVariants(stories, captures);

  it('raises Event_OnClick_Household_GalleryCard with the HouseholdId of the clicked card', () => {
    const onClick = vi.fn();
    const { container } = render(<V2 onEventOnClickHouseholdGalleryCard={onClick} />);
    const third = container.querySelectorAll('.ubt-image-card')[2];
    if (!third) throw new Error('no third card');
    fireEvent.click(third);
    expect(onClick).toHaveBeenCalledWith('91005');
  });

  it('shows the household empty state for an empty list (not captured)', () => {
    const { container } = render(<Household_GalleryCard_List />);
    expect(container.querySelector('[data-block="Directory_CommonBlocks.Directory_EmptyState"]')).not.toBeNull();
    expect(container.querySelector('[data-block="Adaptive.Gallery"]')).toBeNull();
  });
});
