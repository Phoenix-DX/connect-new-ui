import { composeStories } from '@storybook/react-vite';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import type { CarouselHouseholdDetailsSlot } from './CarouselHouseholdDetails';
import * as stories from './CarouselHouseholdDetails.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { V1 } = composeStories(stories);

describe('EntitiesCarousel_HouseholdDetails', () => {
  testCapturedVariants(stories, captures);

  it('puts the placeholder in a Placeholder_CarouselTag div of its own inside HouseholdDetails_Block', () => {
    const { container } = render(<V1 />);
    const own = container.querySelector('[id="b3-l1-1152_0-b2-b3-Placeholder_CarouselTag"]');
    expect(own?.parentElement?.getAttribute('data-block')).toBe('Directory_Household.HouseholdDetails_Block');
    expect(own?.querySelector('[data-block="Directory_Caroussel.CarouselTag"]')).not.toBeNull();
    expect(screen.getByText('1 / 23')).toBeInTheDocument();
  });

  it('gives HouseholdDetails_Block its instance id, In_HouseholdId and In_IsSkeletonOnly', () => {
    const slots: CarouselHouseholdDetailsSlot[] = [];
    const record = (slot: CarouselHouseholdDetailsSlot) => {
      slots.push(slot);
      return null;
    };
    render(<V1 inIsSkeletonOnly renderHouseholdDetails={record} />);
    expect(slots.at(-1)).toMatchObject({ id: 'b3-l1-1152_0-b2-b3-$b1', householdId: '42438', isSkeletonOnly: true });
  });

  it('renders its wrapper only without the household details slot', () => {
    const { container } = render(<V1 renderHouseholdDetails={undefined} />);
    const root = container.querySelector('[data-block="Directory_Caroussel.EntitiesCarousel_HouseholdDetails"]');
    expect(root?.childElementCount).toBe(0);
  });

  it('raises Event_SetHeader("<LocalityName>, <CountryName>") once HouseholdDetails_Block fetched the household', async () => {
    const onEventSetHeader = vi.fn();
    render(<V1 onEventSetHeader={onEventSetHeader} />);
    await waitFor(() => {
      expect(onEventSetHeader).toHaveBeenCalledWith('Bahia Blanca, Argentina');
    });
    expect(onEventSetHeader).toHaveBeenCalledTimes(1);
  });
});
