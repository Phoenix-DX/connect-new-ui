import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import type { CarouselSupperMeetingDetailsSlot } from './CarouselSupperMeetingDetails';
import * as stories from './CarouselSupperMeetingDetails.stories';

/* The stories give a stand-in of SupperMeeting_DetailsBlock in the slot: its wrapper, the supper meeting id and the
   carousel tag placeholder. */
const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { V1 } = composeStories(stories);

describe('EntitiesCarouse_lSupperMeetingDetails', () => {
  testCapturedVariants(stories, captures);

  it('passes In_SubdivisionId (as In_SubdivsionId) and its placeholder in a Placeholder_CarouselTag div of its own', () => {
    const { container } = render(<V1 />);
    expect(screen.getByText('subdivision 2820')).toBeInTheDocument();
    const own = container.querySelector('[id="b3-l1-1164_0-b2-b1-Placeholder_CarouselTag"]');
    expect(own?.parentElement?.id).toBe('b3-l1-1164_0-b2-b1-$b1');
    expect(own?.querySelector('[data-block="Directory_Caroussel.CarouselTag"]')).not.toBeNull();
    expect(screen.getByText('1 / 3')).toBeInTheDocument();
  });

  it('gives SupperMeeting_DetailsBlock its instance id and In_SubdivsionId', () => {
    const slots: CarouselSupperMeetingDetailsSlot[] = [];
    const record = (slot: CarouselSupperMeetingDetailsSlot) => {
      slots.push(slot);
      return null;
    };
    render(<V1 inSubdivisionId="9203" renderSupperMeetingDetails={record} />);
    expect(slots.at(-1)).toMatchObject({ id: 'b3-l1-1164_0-b2-b1-$b1', subdivisionId: '9203' });
  });

  it('renders its wrapper only without the supper meeting details slot', () => {
    const { container } = render(<V1 renderSupperMeetingDetails={undefined} />);
    const root = container.querySelector('[data-block="Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails"]');
    expect(root?.childElementCount).toBe(0);
  });
});
