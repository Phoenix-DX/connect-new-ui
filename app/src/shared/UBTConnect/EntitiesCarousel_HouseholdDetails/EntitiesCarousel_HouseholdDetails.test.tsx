import { composeStories } from '@storybook/react-vite';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import * as stories from './EntitiesCarousel_HouseholdDetails.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { V1 } = composeStories(stories);

describe('EntitiesCarousel_HouseholdDetails', () => {
  testCapturedVariants(stories, captures);

  it('puts the placeholder in a Placeholder_CarouselTag div of its own inside HouseholdDetails_Block', () => {
    const { container } = render(<V1 />);
    const own = container.querySelector('[id="b3-l1-1152_0-b2-b3-Placeholder_CarouselTag"]');
    expect(own?.querySelector('[data-block="Directory_Caroussel.CarouselTag"]')).not.toBeNull();
    expect(screen.getByText('1 / 23')).toBeInTheDocument();
  });

  it('raises Event_SetHeader("<LocalityName>, <CountryName>") once HouseholdDetails_Block fetched the household', async () => {
    const onEventSetHeader = vi.fn();
    render(<V1 onEventSetHeader={onEventSetHeader} />);
    await waitFor(
      () => {
        expect(onEventSetHeader).toHaveBeenCalledWith('Bahia Blanca, Argentina');
      },
      { timeout: 4000 },
    );
  });
});
