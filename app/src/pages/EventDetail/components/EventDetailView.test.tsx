import { fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { Milestone_Screen } from '@/api/event';
import { INITIAL_EVENT_DETAIL_STATE, type EventDetailState } from '@/pages/EventDetail/hooks/eventDetailState';
import { SurveyStatus } from '@/pages/EventDetail/staticEntities';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { freshPage } from '@/test/testSupport';
import { EventDetailView, type EventDetailViewProps } from './EventDetailView';

/* The view from props, on a memory router (MenuIcon and the view cache of EventDateSelection need one). Fictional
   event of a hosting household. */
const PATH = '/UBTConnect/EventDetail';

const stay: Milestone_Screen = {
  MilestoneId: '7301-1',
  Title: 'Accommodation',
  MilestoneDateTime: '2026-10-23T18:00:00Z',
  TimeType: 'DAY',
  SequenceNo: '1',
  DateForFilter: '2026-10-23',
  OrbitMilestoneType: { Id: 'accommodation-host', CanHost: true, Order: 3, Name: 'Accommodation' },
  MilestoneInfo: { HostId: '990003', Location: '' },
};
const meeting: Milestone_Screen = {
  MilestoneId: '7301-2',
  Title: 'Meeting',
  MilestoneDateTime: '2026-10-23T23:59:00Z',
  TimeType: 'DAY',
  SequenceNo: '2',
  DateForFilter: '2026-10-23',
  OrbitMilestoneType: { Id: 'meeting-host', CanHost: false, Order: 1, Name: 'Meeting' },
  MilestoneInfo: { HostId: '0', Location: '' },
};

const confirmed = { Id: SurveyStatus.Confirmed, Label: 'Confirmed', JSON_Name: 'confirmed' };
const sent = { Id: SurveyStatus.Sent, Label: 'Sent', JSON_Name: 'sent' };

/** A loaded host event: two milestones on its only day, survey Confirmed. */
function loaded(patch: Partial<EventDetailState> = {}): EventDetailState {
  return {
    ...INITIAL_EVENT_DETAIL_STATE,
    isFetchingData: false,
    isEventDetailsFetched: true,
    eventDetails: {
      ...INITIAL_EVENT_DETAIL_STATE.eventDetails,
      EventId: '7301',
      EventType: 'event-host',
      EventName: 'Weekend Bible Conferences - Bahia and Azul',
      EventStartDate: '2026-10-23T09:00:00Z',
      EventEndDate: '2026-10-25T17:00:00Z',
      Location: 'Bahia Blanca Main Hall',
      TypeOfEvent: 'Weekend Conference Program',
      OrbitEventType: { Id: 'event-host', Type: 'Host' },
      Milestones: [stay, meeting],
    },
    dateFilters: { HasBefore: false, HasAfter: false, DayFilterList: [{ DateGroup: '2026-10-23', IsSelected: true }] },
    responseMilestones: [stay, meeting],
    responseHelpers: true,
    hostSurveyStatusId: 'confirmed',
    localSurveyStatus: [confirmed],
    hostAllocation: [stay],
    ...patch,
  };
}

const handlers = {
  onClickGenerateQRCode: vi.fn(),
  onClickOpenDocuments: vi.fn(),
  onClickViewEventBooklet: vi.fn(),
  onClickNavigateToHostSurvey: vi.fn(),
  onHandleClickedMilestone: vi.fn(),
  onHandleHostAllocationView: vi.fn(),
  onHandleViewHelpers: vi.fn(),
  onHandleContactHelpdesk: vi.fn(),
  onHandleClickedDate: vi.fn(),
};

function renderView(props: Partial<EventDetailViewProps> = {}) {
  return renderRoutes(
    {
      [PATH]: (
        <EventDetailView
          id="$b1"
          inEventName=""
          inFromNotification={false}
          hasOrbitHostSurvey
          hasOrbitEventBooklet
          state={loaded()}
          {...handlers}
          {...props}
        />
      ),
    },
    PATH,
  );
}

const byId = (id: string) => document.getElementById(id);
const blockOf = (id: string) => byId(id)?.getAttribute('data-block');
const text = (selector: string) => [...document.querySelectorAll(selector)].map((e) => e.textContent);

beforeEach(() => {
  freshPage();
  resetNavigation();
  vi.clearAllMocks();
});

describe('EventDetailView', () => {
  it('shows the skeleton while fetching, without the header icons and the footer', () => {
    renderView({
      state: { ...INITIAL_EVENT_DETAIL_STATE, isFetchingData: true },
      inEventName: 'Weekend Bible Conferences',
    });
    expect(blockOf('$b1')).toBe('Orbit_ScreenBlocks.ScreenBlock_EventDetail');
    expect(blockOf('b1-$b14')).toBe('Orbit_Generic_Blocks.Skeleton_Loading');
    expect(document.querySelector('.orbit-icon-paper-clip')).toBeNull();
    expect(byId('b1-$b15')).toBeNull();
    expect(document.querySelector('.orbit-header-center')?.textContent).toContain('Weekend Bible Conferences');
  });

  it('shows the info rows, the host survey, the accordion, the itinerary and the footer of a host event', () => {
    renderView();
    expect(text('.font-size-0-9em span.margin-left-base')).toEqual([
      'Fri 23 Oct 2026 - Sun 25 Oct 2026',
      'Bahia Blanca Main Hall',
      'Host',
      'Weekend Conference Program',
    ]);
    expect(document.querySelector('.orbit-host-survey-link-new')?.textContent).toBe('View Host Survey');
    expect(blockOf('b1-$b3')).toBe('Orbit_Blocks.HostSurvey_PillItem');
    expect(blockOf('b1-$b4')).toBe('Orbit_Generic_Blocks.Accordion_Orbit');
    expect(blockOf('b1-$b7')).toBe('Orbit_Blocks.EventDateSelection');
    expect(document.querySelectorAll('[data-block="Orbit_Blocks.Card_Milestone"]')).toHaveLength(2);
    expect(blockOf('b1-l1-142797_1-$b8')).toBe('Orbit_Blocks.Card_Milestone');
    expect(blockOf('b1-$b15')).toBe('Orbit_Blocks.ContactHelpdesk_Footer');
    expect(document.querySelector('.orbit-header-center')?.textContent).toContain(
      'Weekend Bible Conferences - Bahia and Azul',
    );
  });

  it('takes In_EventName as the title when it is set', () => {
    renderView({ inEventName: 'Weekend Conferences' });
    expect(document.querySelector('.orbit-header-center')?.textContent).toContain('Weekend Conferences');
    expect(document.querySelector('.orbit-header-center')?.textContent).not.toContain('Bahia and Azul');
  });

  it('shows the "Host Survey" tag without the HostSurvey flag', () => {
    renderView({ hasOrbitHostSurvey: false });
    expect(document.querySelector('.orbit-host-survey-link')?.textContent).toBe('Host SurveyConfirmed');
    expect(document.querySelector('.orbit-host-survey-link-new')).toBeNull();
  });

  it('asks to complete a Sent survey, and the link raises OnClick_NavigateToHostSurvey', () => {
    renderView({ state: loaded({ localSurveyStatus: [sent] }) });
    const link = document.querySelector('.orbit-host-survey-link-new');
    expect(link?.textContent).toBe('Complete Host Survey');
    expect(byId('b1-$b4')).toBeNull();
    fireEvent.click(link as Element);
    expect(handlers.onClickNavigateToHostSurvey).toHaveBeenCalledTimes(1);
  });

  it('shows no host survey row for a guest event', () => {
    renderView({
      state: loaded({
        eventDetails: {
          ...loaded().eventDetails,
          EventType: 'event-guest',
          OrbitEventType: { Id: 'event-guest', Type: '' },
        },
      }),
    });
    expect(document.querySelector('.orbit-host-survey-link')).toBeNull();
    expect(document.querySelector('.orbit-host-survey-link-new')).toBeNull();
  });

  it('shows the QR code and documents icons and the QR code button, and raises their clicks', () => {
    renderView({ state: loaded({ hasQRCode: true, hasDocuments: true }) });
    fireEvent.click(document.querySelector('.fa-qrcode.font-size-1-5em')?.parentElement as Element);
    expect(handlers.onClickGenerateQRCode).toHaveBeenCalledTimes(1);
    const paperClip = document.querySelector('.orbit-icon-paper-clip');
    expect(paperClip?.className).toContain('margin-left-base');
    fireEvent.click(paperClip?.parentElement as Element);
    expect(handlers.onClickOpenDocuments).toHaveBeenCalledTimes(1);
    expect(document.querySelector('.orbit-generate-qrcode-button-text')?.textContent).toBe('GENERATE QR CODE');
  });

  it('shows a scanned QR code as generated, without the header QR icon', () => {
    renderView({ state: loaded({ hasQRCode: true, hasScanned: true, hasDocuments: true }) });
    expect(document.querySelector('.fa-qrcode.font-size-1-5em')).toBeNull();
    expect(document.querySelector('.orbit-icon-paper-clip')?.className).not.toContain('margin-left-base');
    expect(document.querySelector('.orbit-generate-qrcode-button-disabled')?.textContent).toBe('QR CODE GENERATED');
  });

  it('shows the guest list row with the booklet flag and a visible booklet', () => {
    renderView({ state: loaded({ eventDetails: { ...loaded().eventDetails, IsBookletVisible: true } }) });
    const row = [...document.querySelectorAll('.color-orbit-primary-7')].find((e) =>
      e.textContent.includes('View Event Guest List'),
    );
    fireEvent.click(row as Element);
    expect(handlers.onClickViewEventBooklet).toHaveBeenCalledTimes(1);
  });

  it('hides the guest list row without the booklet flag', () => {
    renderView({
      hasOrbitEventBooklet: false,
      state: loaded({ eventDetails: { ...loaded().eventDetails, IsBookletVisible: true } }),
    });
    expect(document.body.textContent).not.toContain('View Event Guest List');
  });

  it('raises the clicks of the cards, the host allocation, the helpers and the footer', () => {
    renderView();
    fireEvent.click(byId('b1-l1-142797_1-$b8')?.querySelector('.orbit-card-cont') as Element);
    expect(handlers.onHandleClickedMilestone).toHaveBeenCalledWith(meeting);
    const views = document.querySelectorAll('#b1-\\$b6 .host-allocation-list-item-right');
    expect(views).toHaveLength(2);
    fireEvent.click(views[0] as Element);
    expect(handlers.onHandleHostAllocationView).toHaveBeenCalledWith(
      '7301-1',
      'accommodation-host',
      'Accommodation',
      '990003',
    );
    fireEvent.click(views[1] as Element);
    expect(handlers.onHandleViewHelpers).toHaveBeenCalledWith('Helper');
    fireEvent.click(byId('b1-$b15')?.querySelector('.contact-helpdesk-footer') as Element);
    expect(handlers.onHandleContactHelpdesk).toHaveBeenCalledTimes(1);
  });

  it('shows NoInformation without milestones, and the accordion when the event has helpers and is Confirmed', () => {
    const empty = { eventDetails: { ...loaded().eventDetails, Milestones: [] }, responseMilestones: [] };
    renderView({ state: loaded({ ...empty, responseHelpers: false }) });
    expect(document.querySelector('.orbit-separator')).not.toBeNull();
    expect(byId('b1-$b12')?.textContent).toBe(
      'Your itinerary will be available once it has been published by the event organiser.',
    );
    expect(byId('b1-$b15')).toBeNull();
  });

  it('shows the Host Allocation accordion without milestones for an event with helpers', () => {
    renderView({
      state: loaded({ eventDetails: { ...loaded().eventDetails, Milestones: [] }, responseMilestones: [] }),
    });
    expect(blockOf('b1-$b9')).toBe('Orbit_Generic_Blocks.Accordion_Orbit');
    expect(byId('b1-$b12')).toBeNull();
  });

  it('tells a member from a notification that the event is no longer available', () => {
    renderView({ inFromNotification: true, state: loaded({ isEventUnavailable: true }) });
    expect(byId('b1-$b13')?.textContent).toBe('The Event is no longer available for you.');
    expect(byId('b1-$b13')?.querySelector('.orbit-icon-circle-cross')).not.toBeNull();
  });

  it('shows the itinerary message for an unavailable event without a notification', () => {
    renderView({ state: loaded({ isEventUnavailable: true }) });
    expect(byId('b1-$b13')?.textContent).toBe(
      'Your itinerary will be available once it has been published by the event organiser.',
    );
  });
});
