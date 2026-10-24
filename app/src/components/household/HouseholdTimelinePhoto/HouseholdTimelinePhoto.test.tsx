import { composeStories } from '@storybook/react-vite';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { HouseholdTimelinePhoto } from './HouseholdTimelinePhoto';
import * as stories from './HouseholdTimelinePhoto.stories';

const { CompiledView } = composeStories(stories);
const imageContainer = (root: Element) => root.querySelector('[class*="ubt-household-image-card__background-image"]');

describe('HouseholdDetails_TimelinePhoto (not captured: compiled view)', () => {
  it('renders the bordered image container, the lazy image and the label', () => {
    const { container } = render(<CompiledView />);
    const root = container.firstElementChild;
    if (!root) throw new Error('nothing rendered');
    expect(root.getAttribute('data-block')).toBe('Directory_Household_Blocks.HouseholdDetails_TimelinePhoto');
    const box = imageContainer(root);
    expect(box?.classList).toContain('border-color-primary');
    expect(box?.classList).toContain('display-flex');
    expect(root.querySelector('[data-block="CW_Image.UBT_LazyImage"]')).not.toBeNull();
    expect(root.querySelector('.householdImage_horizontalCard-label')?.textContent).toBe('2024');
  });

  it('uses the Neutral3 border when not selected and hides the label without an image URL', () => {
    const { container } = render(<HouseholdTimelinePhoto label="2024" />);
    const root = container.firstElementChild as Element;
    expect(imageContainer(root)?.classList).toContain('border-color-neutral-3');
    expect(root.querySelector('.householdImage_horizontalCard-label')).toBeNull();
  });

  it('raises Selected with its Date when clicked', () => {
    const onSelected = vi.fn();
    const { container } = render(<CompiledView onSelected={onSelected} />);
    const box = imageContainer(container.firstElementChild as Element);
    if (!box) throw new Error('no image container');
    fireEvent.click(box);
    expect(onSelected).toHaveBeenCalledWith('2024-01-01 00:00:00');
  });
});
