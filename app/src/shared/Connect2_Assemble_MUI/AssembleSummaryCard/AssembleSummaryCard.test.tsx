import { composeStories } from '@storybook/react-vite';
import { fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import * as pageRedirectModule from '../../../shell/feedback/pageRedirect';
import * as feedback from '../../../shell/feedback/feedbackStore';
import { linkAddressOnClick } from './AssembleSummaryCard';
import * as stories from './AssembleSummaryCard.stories';

const { HallMeeting, VirtualListItem, Unavailable } = composeStories(stories);

const rowTexts = (container: HTMLElement) =>
  [...container.querySelectorAll('.flex1 .assemble-summary-row__content-placeholder')].map((r) => r.textContent);

/* Never captured: the markup follows the compiled view (AssembleSummaryCard.mvc.js :141-626). */
describe('AssembleSummaryCard', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

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

  it('LinkAddressOnClick: no address → "Map is not available"; a desktop browser → geo: link (AndroidBrowser)', async () => {
    const show = vi.spyOn(feedback, 'showFeedbackMessage').mockImplementation(() => undefined);
    const redirect = vi.spyOn(pageRedirectModule, 'pageRedirect').mockImplementation(() => undefined);
    linkAddressOnClick({});
    expect(show).toHaveBeenCalledWith('Map is not available', 0);
    vi.spyOn(window.navigator, 'platform', 'get').mockReturnValue('MacIntel');
    const { container } = render(<HallMeeting />);
    fireEvent.click(container.querySelector('.connect-icon-place') as Element);
    await vi.waitFor(() => {
      expect(redirect).toHaveBeenCalledWith('geo:0,0?q=Calle%20Ficticia%20100%2C%20Bahia%20Blanca');
    });
  });

  it('LinkAddressOnClick offline: Google Maps directions URL (NavigateToMaps gives the null id)', () => {
    vi.spyOn(window.navigator, 'onLine', 'get').mockReturnValue(false);
    vi.spyOn(feedback, 'showFeedbackMessage').mockImplementation(() => undefined);
    const redirect = vi.spyOn(pageRedirectModule, 'pageRedirect').mockImplementation(() => undefined);
    linkAddressOnClick({ HostingSubdivisionFormattedAddress: 'Calle Ficticia 100' });
    expect(redirect).toHaveBeenCalledWith('https://www.google.com/maps/dir/?api=1?api=1&query=Calle%20Ficticia%20100');
  });

  it('LinkAddressOnClick on an iPhone: comgooglemapsurl://', () => {
    vi.spyOn(window.navigator, 'platform', 'get').mockReturnValue('iPhone');
    const redirect = vi.spyOn(pageRedirectModule, 'pageRedirect').mockImplementation(() => undefined);
    linkAddressOnClick({ HostingSubdivisionFormattedAddress: 'Calle Ficticia 100' });
    expect(redirect).toHaveBeenCalledWith('comgooglemapsurl://?q=Calle%20Ficticia%20100');
  });
});
