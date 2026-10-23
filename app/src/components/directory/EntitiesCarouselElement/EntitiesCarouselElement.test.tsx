import { composeStories } from '@storybook/react-vite';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import type { CarouselHouseholdDetailsProps } from '@/components/directory/CarouselHouseholdDetails';
import { get_IsInsideRenderBuffer } from '@/shared/UBTConnect/lib/actions';
import * as stories from './EntitiesCarouselElement.stories';

/* Records the inputs EntitiesCarousel_HouseholdDetails receives; it still renders the real block. */
const seen = vi.hoisted(() => ({ skeleton: [] as (boolean | undefined)[] }));
vi.mock('@/components/directory/CarouselHouseholdDetails', async (importOriginal) => {
  const real = await importOriginal<typeof import('@/components/directory/CarouselHouseholdDetails')>();
  return {
    ...real,
    CarouselHouseholdDetails: (props: CarouselHouseholdDetailsProps) => {
      seen.skeleton.push(props.inIsSkeletonOnly);
      return <real.CarouselHouseholdDetails {...props} />;
    },
  };
});

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { V1, V2 } = composeStories(stories);
const content = (container: HTMLElement) => container.querySelector('[data-container]');

describe('EntitiesCarousel_Element', () => {
  testCapturedVariants(stories, captures);

  it('renders an element within the buffer of the next active element only as a skeleton (In_IsSkeletonOnly True)', () => {
    seen.skeleton.length = 0;
    const { container } = render(<V2 inIndexActiveElement={10} inIndexNextActiveElement={7} />);
    expect(content(container)).not.toBeNull();
    expect(seen.skeleton.at(-1)).toBe(true);
  });

  it('keeps an element once rendered (IsSinglePassRender) and passes the CarouselTag "n / total"', () => {
    const { container, rerender } = render(<V2 inIndexActiveElement={4} />);
    expect(content(container)).not.toBeNull();
    expect(screen.getByText('5 / 23')).toBeInTheDocument();
    rerender(<V2 inIndexActiveElement={20} inIndexNextActiveElement={20} />);
    expect(content(container)).not.toBeNull();
    expect(seen.skeleton.at(-1)).toBe(true);
  });

  it('renders an empty container for another entity type', () => {
    const { container } = render(<V1 inConnectEntityTypeId="Country" />);
    expect(content(container)?.childElementCount).toBe(0);
  });

  it('passes Event_SetHeader of the household details on', async () => {
    const onEventSetHeader = vi.fn();
    render(<V1 onEventSetHeader={onEventSetHeader} />);
    await waitFor(
      () => {
        expect(onEventSetHeader).toHaveBeenCalledWith('Bahia Blanca, Argentina');
      },
      { timeout: 4000 },
    );
  });

  it('Get_IsInsideRenderBuffer: Abs(current - active) <= buffer', () => {
    expect(get_IsInsideRenderBuffer(3, 4, 1)).toBe(true);
    expect(get_IsInsideRenderBuffer(3, 0, 4)).toBe(false);
    expect(get_IsInsideRenderBuffer(3, 2, -1)).toBe(true);
  });
});
