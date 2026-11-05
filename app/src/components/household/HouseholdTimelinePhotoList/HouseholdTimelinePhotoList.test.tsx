import { composeStories } from '@storybook/react-vite';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import * as stories from './HouseholdTimelinePhotoList.stories';

const { CompiledView, Empty, Fetching } = composeStories(stories);

describe('HouseholdDetails_TimelinePhoto_List (not captured: compiled view)', () => {
  it('renders one timeline photo per image in the horizontal list', () => {
    const { container } = render(<CompiledView />);
    const root = container.firstElementChild;
    if (!root) throw new Error('nothing rendered');
    expect(root.getAttribute('data-block')).toBe('Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List');
    const list = root.firstElementChild;
    expect(list?.className).toBe('Household_GalleryCard-list list list-group list-horizontal--gap-xs OSFillParent');
    const photos = root.querySelectorAll('[data-block="Directory_Household_Blocks.HouseholdDetails_TimelinePhoto"]');
    expect(photos).toHaveLength(3);
    expect(photos[2]?.querySelector('[class*="border-color-primary"]')).not.toBeNull();
  });

  it('raises Event_DateSelected with the Date of the clicked photo', () => {
    const onEventDateSelected = vi.fn();
    const { container } = render(<CompiledView onEventDateSelected={onEventDateSelected} />);
    const boxes = container.querySelectorAll('[class*="ubt-household-image-card__background-image"]');
    const second = boxes[1];
    if (!second) throw new Error('no second photo');
    fireEvent.click(second);
    expect(onEventDateSelected).toHaveBeenCalledWith('2023-01-01 00:00:00');
  });

  it('no images: the bordered box with Unavailable_Image (Gallery, Household) and no list (live TST, TL:140, 215-251)', () => {
    const { container } = render(<Empty />);
    expect(container.querySelector('.Household_GalleryCard-list')).toBeNull();
    const unavailable = container.querySelector('[data-block="ConnectPatterns.Unavailable_Image"]');
    expect(unavailable).not.toBeNull();
    expect(unavailable?.querySelector('.ubt-image-unavailable__background-image')).not.toBeNull();
    expect(unavailable?.textContent).toContain('Household image missing');
    expect(unavailable?.parentElement?.className).toContain('border-color-neutral-3');
  });

  it('rows while the source is Fetching: the list gets list-loading (TL:158)', () => {
    const { container } = render(<Fetching />);
    const list = container.querySelector('.Household_GalleryCard-list');
    expect(list?.className).toBe(
      'Household_GalleryCard-list list list-group list-horizontal--gap-xs list-loading OSFillParent',
    );
    expect(container.querySelector('[data-block="ConnectPatterns.Unavailable_Image"]')).toBeNull();
  });
});
