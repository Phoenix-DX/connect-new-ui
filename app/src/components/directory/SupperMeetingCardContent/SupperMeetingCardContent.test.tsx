import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { SupperMeetingCardContent } from './SupperMeetingCardContent';
import * as stories from './SupperMeetingCardContent.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('SupperMeeting_ImageCard_Content', () => {
  testCapturedVariants(stories, captures);

  it('passes the gender split and leaves the address out without In_ShowAddress (not captured)', () => {
    const { container } = render(
      <SupperMeetingCardContent inSubdivisionCardContent={{ BrothersCount: 3, SistersCount: 4 }} />,
    );
    expect(container.textContent).toContain('3 Brothers & 4 Sisters');
    expect(container.querySelector('[data-block="CW_CTA_PopUps.AddressPopup_Wrapper"]')).toBeNull();
  });
});
