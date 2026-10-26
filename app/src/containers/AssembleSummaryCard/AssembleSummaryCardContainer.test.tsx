import { act, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vitest';
import type { AssembleEventSummary } from '@/components/assemble/AssembleSummaryCard';
import { LOCALITY } from '@/mocks/fictional/directory';
import * as feedback from '@/platform/feedback/feedbackStore';
import * as pageRedirectModule from '@/platform/feedback/pageRedirect';
import { AssembleSummaryCardContainer, linkAddressOnClick } from './AssembleSummaryCardContainer';

/** A prayer meeting at the locality's main hall (fictional, as in the AssembleSummaryCard stories). */
const HALL_MEETING: AssembleEventSummary = {
  AssembleEventType: { Title: 'Prayer Meeting' },
  DateTime: '2026-11-10T19:30:00',
  HostingLocation: `${LOCALITY.name} Main Hall`,
  LocalityName: LOCALITY.name,
  CountryName: LOCALITY.country,
  HostingSubdivisionFormattedAddress: 'Calle Ficticia 100, Bahia Blanca',
  BrothersCount: 24,
  SistersCount: 27,
};

/** The same meeting by video call, with its Zoom details. */
const VIRTUAL_MEETING: AssembleEventSummary = {
  ...HALL_MEETING,
  IsVirtual: true,
  VirtualMeetingTypeLabel: 'Zoom',
  VirtualMeetingLink: 'https://meet.example.com/j/84522106631',
  VirtualMeetingId: '845 2210 6631',
  VirtualMeetingPassword: 'Hall2026',
};

const renderCard = (summary: AssembleEventSummary, isListItem = false) =>
  render(
    <MemoryRouter>
      <AssembleSummaryCardContainer id="b2-$b7" assembleEventSummary={summary} isListItem={isListItem} />
    </MemoryRouter>,
  );

describe('AssembleSummaryCardContainer', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders AssembleSummaryCard with the inputs', () => {
    const { container } = renderCard(HALL_MEETING);
    const block = container.querySelector('[data-block="Assemble.AssembleSummaryCard"]');
    expect(block).toHaveAttribute('id', 'b2-$b7');
    expect(block?.querySelector('.text-primary.white-space-normal')?.textContent).toBe(
      'Calle Ficticia 100, Bahia Blanca',
    );
  });

  it('LinkAddressOnClick: no address → "Map is not available"; a desktop browser → geo: link (AndroidBrowser)', async () => {
    const show = vi.spyOn(feedback, 'showFeedbackMessage').mockImplementation(() => undefined);
    const redirect = vi.spyOn(pageRedirectModule, 'pageRedirect').mockImplementation(() => undefined);
    linkAddressOnClick({});
    expect(show).toHaveBeenCalledWith('Map is not available', 0);
    vi.spyOn(window.navigator, 'platform', 'get').mockReturnValue('MacIntel');
    const { container } = renderCard(HALL_MEETING);
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

  it('LinkAddressOnClick errors: GoogleMapsNotInstalled for "application not found for uri.", else UnknownError', () => {
    vi.spyOn(window.navigator, 'platform', 'get').mockReturnValue('iPhone');
    const redirect = vi.spyOn(pageRedirectModule, 'pageRedirect').mockImplementation(() => {
      throw new Error('Application not found for URI.');
    });
    expect(() => {
      linkAddressOnClick({ HostingSubdivisionFormattedAddress: 'Calle Ficticia 100' });
    }).toThrow('Please install and enable Google Maps');
    redirect.mockImplementation(() => {
      throw new Error('Blocked');
    });
    expect(() => {
      linkAddressOnClick({ HostingSubdivisionFormattedAddress: 'Calle Ficticia 100' });
    }).toThrow('Blocked');
  });

  it('MeetingInfo_Toggle opens the MeetingInfo dialog with the details; Close closes it', async () => {
    const { container } = renderCard(VIRTUAL_MEETING, true);
    const closed = container.querySelector(
      '.assemble-meeting-info-popup [data-block="ConfirmationDialogs.ActionConfirmationDialog"]',
    );
    expect(closed?.id).toMatch(/-MeetingInfo$/);
    expect(document.querySelector('[role="dialog"]')).toBeNull();
    await act(async () => {
      fireEvent.click(container.querySelector('.connect-icon-info-fill') as Element);
      await Promise.resolve();
    });
    const dialog = document.querySelector('[role="dialog"]');
    expect(dialog?.querySelector('[data-block="Assemble.AssembleCommon_VirtualMeetingDetails"]')).not.toBeNull();
    await act(async () => {
      fireEvent.click(screen.getByText('Close'));
      await Promise.resolve();
    });
    expect(document.querySelector('[role="dialog"]')).toBeNull();
  });
});
