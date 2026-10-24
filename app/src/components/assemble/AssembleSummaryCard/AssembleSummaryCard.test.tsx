import { composeStories } from '@storybook/react-vite';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import * as stories from './AssembleSummaryCard.stories';

const { HallMeeting, VirtualListItem, Unavailable } = composeStories(stories);

const rowTexts = (container: HTMLElement) =>
  [...container.querySelectorAll('.flex1 .assemble-summary-row__content-placeholder')].map((r) => r.textContent);

/* Never captured: the markup follows the compiled view (AssembleSummaryCard.mvc.js :141-626). LinkAddressOnClick and
   the MeetingInfo dialog are tested with the container (containers/AssembleSummaryCard). */
describe('AssembleSummaryCard', () => {
  it('detail layout: visual, header in Placeholder_1, hosted-at / time / invitee rows, address link', () => {
    const { container } = render(<HallMeeting />);
    const card = container.querySelector(
      '[data-block="Assemble.AssembleSummaryCard"] [data-block="NewConnect_Utilities.NC_Result_Item__Card"]',
    );
    expect(
      card?.querySelector('.margin-bottom-s [data-block="NewConnect_Utilities.NC_Card_Item_Visual"]'),
    ).not.toBeNull();
    expect(card?.querySelector('.flex1 > div:nth-child(1) > .margin-bottom-s span.bold')?.textContent).toBe(
      'Prayer Meeting - Tuesday',
    );
    expect(rowTexts(container)).toEqual([
      'Bahia Blanca Main Hall, Bahia Blanca, Argentina',
      '7:30 PM on Tuesday, 10 November 2026',
      '51 Attendees • Brothers: 24 • Sisters: 27',
    ]);
    const location = card?.querySelector('.padding-y-s.border-top-s.text-neutral-2.margin-top-s');
    expect(location?.querySelector('a[data-link] .text-primary.white-space-normal')?.textContent).toBe(
      'Calle Ficticia 100, Bahia Blanca',
    );
    expect(card?.querySelector('[data-block="NewConnect_Utilities.NC_Result_Item__Image"]')).toBeNull();
  });

  it('list layout, virtual: header in Placeholder_2, 73px round image on the right, meeting URL row', () => {
    const { container } = render(<VirtualListItem />);
    expect(container.querySelector('[data-block="NewConnect_Utilities.NC_Card_Item_Visual"]')).toBeNull();
    expect(container.querySelector('.flex1 > div:nth-child(2) span.bold')?.textContent).toBe(
      "Gospel Preaching - Lord's Day",
    );
    expect(rowTexts(container)).toEqual([
      'Online - Bahia Blanca, Argentina',
      "6:00 PM on Lord's Day, 8 November 2026",
      '1 Attendee • Brothers: 1 • Sisters: 0',
    ]);
    expect(container.querySelector('[data-block="NewConnect_Utilities.NC_Result_Item__Image"]')).not.toBeNull();
    expect(container.querySelector('[data-block="Assemble.AssembleCommon_VirtualMeetingURL"]')?.textContent).toContain(
      'Join with Zoom: ',
    );
  });

  it('IsUnavailable: unavailable texts and no location row', () => {
    const { container } = render(<Unavailable />);
    expect(rowTexts(container)).toEqual([
      'Hosting details unavailable at the moment',
      '7:30 PM on Tuesday, 10 November 2026',
      'Invitee numbers unavailable at the moment',
    ]);
    expect(container.querySelector('.border-top-s')).toBeNull();
  });

  it('LinkAddressOnClick: the address link raises onAddressClick with the AssembleEventSummary', () => {
    const onAddressClick = vi.fn();
    const { container } = render(<HallMeeting onAddressClick={onAddressClick} />);
    fireEvent.click(container.querySelector('.connect-icon-place') as Element);
    expect(onAddressClick).toHaveBeenCalledExactlyOnceWith(
      expect.objectContaining({ HostingSubdivisionFormattedAddress: 'Calle Ficticia 100, Bahia Blanca' }),
    );
  });

  it('virtual: the MeetingInfo actions reach AssembleCommon_VirtualMeetingURL', () => {
    const onMeetingInfoToggle = vi.fn();
    const { container } = render(<VirtualListItem onMeetingInfoToggle={onMeetingInfoToggle} />);
    const dialog = container.querySelector(
      '.assemble-meeting-info-popup [data-block="ConfirmationDialogs.ActionConfirmationDialog"]',
    );
    expect(dialog?.id).toMatch(/-MeetingInfo$/);
    fireEvent.click(container.querySelector('.connect-icon-info-fill') as Element);
    expect(onMeetingInfoToggle).toHaveBeenCalledExactlyOnceWith(dialog?.id);
  });
});
