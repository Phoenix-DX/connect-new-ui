import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import type { EventsSummaryItem } from '@/api/event';
import type { OrbitHouseholdMember } from '@/api/household';
import { OrbitLandingFilter } from '@/pages/OrbitLanding/staticEntities';
import { OrbitLandingView, type OrbitLandingViewProps } from './OrbitLandingView';

/* The view of ScreenBlock_OrbitLanding, props only. Fictional members and rows. */
const MEMBERS: OrbitHouseholdMember[] = [
  { memberId: '7401', firstName: 'Bruno', isSelected: true },
  { memberId: '7402', firstName: 'Clara', isSelected: false },
];
const EVENT: EventsSummaryItem = {
  isMilestone: false,
  sequenceNo: 1,
  endDateTime: '2099-08-02T18:00:00Z',
  event: {
    EventId: 'e7',
    Title: 'Winter Conference',
    EventInfo: { StartEventDate: '2099-08-01T08:00:00Z', EndEventDate: '2099-08-02T18:00:00Z' },
  },
  milestone: {},
};
const MILESTONE: EventsSummaryItem = {
  isMilestone: true,
  sequenceNo: 2,
  endDateTime: '2099-08-01T10:00:00Z',
  event: {},
  milestone: {
    MilestoneId: 'm7',
    Title: 'Coach to the hall',
    OrbitMilestoneType: { Id: 'mt-2', IsTransportMilestone: true },
    MilestoneInfo: { MilestoneStartDateTime: '2099-08-01T08:00:00Z', MilestoneEndDateTime: '2099-08-01T10:00:00Z' },
  },
};

/** The view after a load: the members, two rows, Upcoming Events, ascending, the popups closed. */
const BASE_PROPS: Omit<OrbitLandingViewProps, `on${string}`> = {
  id: '$b1',
  householdMembers: MEMBERS,
  showMyCalendar: false,
  isFetchingData: false,
  isEventsDataFetched: true,
  eventsSummary: [EVENT, MILESTONE],
  eventFilter: OrbitLandingFilter.UpcomingEvents,
  sortEventsASC: true,
  yearsSelection: [],
  isFiltersPopupOpen: false,
  isSortPopupOpen: false,
  popupMeasurements: { top: 56, left: 185, bottom: 64 },
  bottomBar: <p>bottom bar</p>,
};

function setup(props: Partial<OrbitLandingViewProps> = {}) {
  const handlers = {
    onMyCalendarClicked: vi.fn(),
    onClickedHouseholdMember: vi.fn(),
    onViewPassportDetails: vi.fn(),
    onToggleFilterPopup: vi.fn(),
    onToggleSortPopup: vi.fn(),
    onApplyFilters: vi.fn(),
    onApplySort: vi.fn(),
    onEventCardClicked: vi.fn(),
    onMilestoneCardClicked: vi.fn(),
  };
  const view = render(
    <MemoryRouter>
      <OrbitLandingView {...BASE_PROPS} {...handlers} {...props} />
    </MemoryRouter>,
  );
  return { ...view, handlers };
}

const blocks = (name: string) => document.querySelectorAll(`[data-block="${name}"]`).length;
const filterLabel = () => document.querySelector('.orbit-landing-filters.justify-content-flex-start span')?.textContent;
const memberItems = () => [...document.querySelectorAll('.orbit-household-member-list-item')];

describe('OrbitLandingView', () => {
  it('shows the member bar, the passport link, the toggles and one card per row', () => {
    setup();
    expect(memberItems().map((e) => e.textContent)).toEqual(['Bruno', 'Clara']);
    expect(document.querySelector('.orbit-landing-passport-cont')?.textContent).toBe('View Passport details');
    expect(filterLabel()).toBe('Upcoming Events');
    expect(blocks('Orbit_Blocks.Card_Event')).toBe(1);
    expect(blocks('Orbit_Blocks.Card_Milestone')).toBe(1);
    expect(document.querySelector('.menu-icon-my-calendar')).toBeNull();
    expect(document.getElementById('b1-BottomBar')?.textContent).toBe('bottom bar');
  });

  it('shows the skeleton while fetching, nothing before the first answer, the message without rows', () => {
    const { rerender, handlers } = setup({ isFetchingData: true });
    expect(blocks('Orbit_Generic_Blocks.Skeleton_Loading')).toBe(1);
    expect(document.querySelector('.orbit-card-list')).toBeNull();
    const view = (props: Partial<OrbitLandingViewProps>) => (
      <MemoryRouter>
        <OrbitLandingView {...BASE_PROPS} {...handlers} {...props} />
      </MemoryRouter>
    );
    rerender(view({ isEventsDataFetched: false, eventsSummary: [] }));
    expect(blocks('Orbit_Generic_Blocks.Skeleton_Loading')).toBe(0);
    expect(blocks('Orbit_Generic_Blocks.NoInformation_Orbit')).toBe(0);
    expect(document.querySelector('.orbit-card-list')).toBeNull();
    rerender(view({ isEventsDataFetched: true, eventsSummary: [] }));
    expect(blocks('Orbit_Generic_Blocks.NoInformation_Orbit')).toBe(1);
    expect(document.body.textContent).toContain('You currently have not been assigned to an event.');
  });

  it('shows the My calendar icon for the signed-in member and the Past Events label', () => {
    const { handlers } = setup({ showMyCalendar: true, eventFilter: OrbitLandingFilter.PastEvents });
    expect(filterLabel()).toBe('Past Events');
    const icon = document.querySelector('.menu-icon-my-calendar');
    expect(icon).not.toBeNull();
    if (icon) fireEvent.click(icon);
    expect(handlers.onMyCalendarClicked).toHaveBeenCalledTimes(1);
  });

  it('raises the events of the member bar, the passport link, the toggles and the cards', () => {
    const { handlers } = setup();
    const second = memberItems()[1];
    if (second) fireEvent.click(second);
    expect(handlers.onClickedHouseholdMember).toHaveBeenCalledWith(
      [
        { memberId: '7401', firstName: 'Bruno', isSelected: false },
        { memberId: '7402', firstName: 'Clara', isSelected: true },
      ],
      '7402',
    );
    const passport = document.querySelector('.orbit-landing-passport-cont');
    if (passport) fireEvent.click(passport);
    expect(handlers.onViewPassportDetails).toHaveBeenCalledTimes(1);
    const [filters, sort] = [...document.querySelectorAll('.orbit-landing-filters')];
    if (filters) fireEvent.click(filters);
    if (sort) fireEvent.click(sort);
    expect(handlers.onToggleFilterPopup).toHaveBeenCalledTimes(1);
    expect(handlers.onToggleSortPopup).toHaveBeenCalledTimes(1);
    const [eventCard, milestoneCard] = [...document.querySelectorAll('.orbit-card-cont')];
    if (eventCard) fireEvent.click(eventCard);
    if (milestoneCard) fireEvent.click(milestoneCard);
    expect(handlers.onEventCardClicked).toHaveBeenCalledWith(EVENT.event);
    expect(handlers.onMilestoneCardClicked).toHaveBeenCalledWith(MILESTONE.milestone);
  });

  it('renders the open Filters popup at the header height, and its Apply raises ApplyFilters', () => {
    const { handlers } = setup({ isFiltersPopupOpen: true });
    const popup = document.getElementById('b1-Popup_Filters');
    expect(popup?.getAttribute('style')).toBe('top: 56px;');
    expect(document.querySelector('.orbit-landing-filters .fa-caret-up')).not.toBeNull();
    const apply = popup?.querySelector('.orbit-filters-popup-button button');
    if (apply) fireEvent.click(apply);
    expect(handlers.onApplyFilters).toHaveBeenCalledWith(OrbitLandingFilter.UpcomingEvents, []);
  });

  it('renders the open Sort popup at the header height and half its width, and its Apply raises ApplySort', () => {
    const { handlers } = setup({ isSortPopupOpen: true });
    const popup = document.getElementById('b1-Popup_Sort');
    expect(popup?.getAttribute('style')).toBe('top: 56px; left: 185px;');
    const apply = popup?.querySelector('.orbit-filters-popup-button button');
    if (apply) fireEvent.click(apply);
    expect(handlers.onApplySort).toHaveBeenCalledWith(true);
  });
});
