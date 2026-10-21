import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { OSBlock } from '../../../components/OSBlock';
import { testCapturedVariants } from '../../test/capturedVariants';
import type { SupperMeeting_DetailsBlockProps } from '../SupperMeeting_DetailsBlock';
import * as stories from './EntitiesCarouse_lSupperMeetingDetails.stories';

/* SupperMeeting_DetailsBlock (own tests) shows its CarouselTag placeholder only inside the loaded image card: here a
   stand-in with the same wrapper renders the inputs it receives. */
vi.mock('../SupperMeeting_DetailsBlock', () => ({
  SupperMeeting_DetailsBlock: ({ id, inSubdivsionId, placeholderCarouselTag }: SupperMeeting_DetailsBlockProps) => (
    <OSBlock name="Directory_SupperMeetings.SupperMeeting_DetailsBlock" id={id}>
      <span>subdivision {inSubdivsionId}</span>
      {placeholderCarouselTag}
    </OSBlock>
  ),
}));

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
});
