import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import type { EventBookletMember } from '@/api/event';
import {
  eventBookletReducer,
  INITIAL_EVENT_BOOKLET_STATE,
  type EventBookletAction,
  type EventBookletState,
} from '@/pages/EventBooklet/hooks/eventBookletState';
import { EventBookletView, type EventBookletViewProps } from './EventBookletView';

/* The event booklet block, props only: the state comes from the reducer. Fictional members of a fictional event. */

const member = (id: string, firstName: string, over: Partial<EventBookletMember> = {}): EventBookletMember => ({
  MemberId: id,
  HouseholderId: `${id}0`,
  Title: 'Mr',
  FirstName: firstName,
  LastName: 'Herrera',
  Age: '40',
  Phone: '',
  IsHouseholder: true,
  Country: 'Argentina',
  CountryCode: 'AR',
  Locality: 'Necochea',
  LocalityId: '601',
  IsHostLocality: false,
  Host: 'Mr Julián & Mrs Fiorella Vitale',
  HostHouseholderId: '880100',
  Days: ['2026-11-06'],
  Role: '',
  OrderNo: id,
  ...over,
});
const GUESTS = [
  member('1', 'Tomás'),
  member('2', 'Lucía', { Locality: 'Tandil', Host: '' }),
  member('3', 'Sofía', { Locality: 'Bahia Blanca', IsHostLocality: true }),
];
const HELPERS = [member('4', 'Diego', { Role: 'USHER' })];

const apply = (...actions: EventBookletAction[]) => actions.reduce(eventBookletReducer, INITIAL_EVENT_BOOKLET_STATE);
const page = (isClearAll = true): EventBookletAction => ({
  type: 'paginationReset',
  isClearAll,
  guestsMaxRows: 10,
  helpersMaxRows: 5,
});
const fetched: EventBookletAction[] = [
  {
    type: 'localHelperRolesFetched',
    list: [{ Id: 2, Label: 'Usher', Order: 2, JSON_Name: 'USHER', isReadOnly: true }],
  },
  {
    type: 'eventFiltersFetched',
    response: {
      EventInfo: INITIAL_EVENT_BOOKLET_STATE.eventInfo,
      Filters: { EventDays: [], HelperRoles: [], Countries: [] },
    },
  },
];
const guestsLoaded = apply(
  page(),
  ...fetched,
  { type: 'eventGuestsFetched', response: GUESTS },
  { type: 'guestsPageAdded' },
);

function setup(state: EventBookletState, props: Partial<EventBookletViewProps> = {}) {
  const handlers = {
    onSearchIcon: vi.fn(),
    onToggleFiltersPopUp: vi.fn(),
    onViewSwap: vi.fn(),
    onSearchTermChange: vi.fn(),
    onSearchTermKeyUp: vi.fn(),
    onClearSearch: vi.fn(),
    onSelectedFilters: vi.fn(),
    onClearAllFilters: vi.fn(),
    onApplyFilters: vi.fn(),
    onScrollEndingGuests: vi.fn(),
    onScrollEndingHelpers: vi.fn(),
    onListMounted: vi.fn(),
    onClickedMember: vi.fn(),
  };
  const view = render(
    <MemoryRouter>
      <EventBookletView id="$b1" inEventName="Spring Gathering" state={state} {...handlers} {...props} />
    </MemoryRouter>,
  );
  return { ...view, handlers };
}

const text = (selector: string) => [...document.querySelectorAll(selector)].map((e) => e.textContent);
const names = () => text('.orbit-booklet-list-members-title');
const skeletons = () => document.querySelectorAll('[data-block="Orbit_Generic_Blocks.Skeleton_Loading"]').length;
const byText = (value: string) =>
  [...document.querySelectorAll('[data-container], [data-expression], span')].find((e) => e.textContent === value);

describe('EventBookletView', () => {
  it('a new search that fetches: the header and the skeleton; the title from In_EventName; faded icons', () => {
    setup(apply(page(), { type: 'fetchingDataSet', isFetchingData: true }));
    expect(text('.header-title [data-container]')).toEqual(['Event Guest List', 'Spring Gathering']);
    expect(skeletons()).toBe(1);
    expect(text('.orbit-booklet-list-header-title')).toEqual(['Guest Name']);
    expect(document.querySelector('.flex-center-all')?.className).toContain('opacity-0-50');
    expect(document.querySelector('.orbit-double-button-btn-active')?.textContent).toBe('Guests');
  });

  it('the guests: the Invite List and the Host Localities, grouped by locality, with days and host', () => {
    const { handlers } = setup(guestsLoaded);
    expect(document.querySelector('.flex-center-all')?.className).toBe('flex-center-all');
    expect(byText('Invite List')).toBeTruthy();
    expect(byText('Host Localities')).toBeTruthy();
    expect(names()).toEqual(['Mr Tomás Herrera', 'Mr Lucía Herrera', 'Mr Sofía Herrera']);
    expect(text('.orbit-booklet-list-members-host')).toEqual([
      'Mr Julián & Mrs Fiorella Vitale',
      '-',
      'Mr Julián & Mrs Fiorella Vitale',
    ]);
    expect(handlers.onListMounted.mock.calls).toEqual([
      ['b1-List_Guests_InvitedLocality'],
      ['b1-List_Guests_HostingLocality'],
    ]);
    fireEvent.click(document.querySelector('.orbit-booklet-list-members-title') as Element);
    fireEvent.click(document.querySelector('.orbit-booklet-list-members-host') as Element);
    expect(handlers.onClickedMember.mock.calls).toEqual([['10'], ['880100']]);
  });

  it('the helpers: one header per role label, then the localities', () => {
    setup(
      apply(
        page(),
        ...fetched,
        { type: 'currentViewSet', isGuestView: false },
        { type: 'eventHelpersFetched', response: HELPERS },
        { type: 'helpersPageAdded' },
      ),
    );
    expect(document.querySelector('.orbit-double-button-btn-active')?.textContent).toBe('Helpers');
    expect(text('.orbit-booklet-list-header-title')).toEqual(['Usher']);
    expect(names()).toEqual(['Mr Diego Herrera']);
  });

  it('NoResults: the nothing-allocated message, or the search term with filters', () => {
    const empty = apply(page(), { type: 'eventGuestsFetched', response: [] }, { type: 'guestsPageAdded' });
    const { unmount } = setup(empty);
    expect(text('.no-results-title')).toEqual(['No results.']);
    expect(text('.no-results-message')[0]).toMatch(/^There are no guests allocated to this event\./);
    unmount();
    const searched = apply(
      page(),
      { type: 'searchTermChanged', searchTerm: 'zzz' },
      { type: 'searchTermSelected' },
      { type: 'eventGuestsFetched', response: [] },
      { type: 'guestsPageAdded' },
    );
    const { handlers } = setup(searched);
    expect(text('.no-results-title')).toEqual(["No results for 'zzz'."]);
    fireEvent.click(byText('Filters Applied') as Element);
    fireEvent.click(byText('Clear All') as Element);
    expect(handlers.onSelectedFilters).toHaveBeenCalledTimes(1);
    expect(handlers.onClearAllFilters).toHaveBeenCalledTimes(1);
  });

  it('the search mode: the input, its events and the clear icon', () => {
    const { handlers } = setup(
      apply(
        page(),
        { type: 'searchModeToggled', forceSearchMode: false },
        { type: 'searchTermChanged', searchTerm: 'Lu' },
      ),
    );
    const input = document.getElementById('b1-Input_SearchTerm') as HTMLInputElement;
    expect(input.value).toBe('Lu');
    expect(input.placeholder).toBe('Search guest or host name');
    fireEvent.change(input, { target: { value: 'Luc' } });
    fireEvent.keyUp(input, { key: 'a' });
    fireEvent.keyUp(input, { key: 'Enter' });
    fireEvent.click(document.querySelector('.orbit-icon-cross') as Element);
    expect(handlers.onSearchTermChange).toHaveBeenCalledWith('Luc');
    expect(handlers.onSearchTermKeyUp.mock.calls).toEqual([[false], [true]]);
    expect(handlers.onClearSearch).toHaveBeenCalledTimes(1);
    expect(document.querySelector('.flex-center-all .orbit-icon-search')).toBeNull();
  });

  it('the header icons, the view buttons and the filters popup', () => {
    const { handlers, unmount } = setup(guestsLoaded);
    fireEvent.click(document.querySelector('.flex-center-all .orbit-icon-search') as Element);
    fireEvent.click(document.querySelector('.flex-center-all .orbit-icon-filter') as Element);
    fireEvent.click(byText('Helpers') as Element);
    expect(handlers.onSearchIcon).toHaveBeenCalledTimes(1);
    expect(handlers.onToggleFiltersPopUp).toHaveBeenCalledTimes(1);
    expect(handlers.onViewSwap).toHaveBeenCalledWith(false);
    expect(document.querySelector('.orbit-booklet-popup')).toBeNull();
    unmount();
    const open = setup(eventBookletReducer(guestsLoaded, { type: 'filtersPopUpToggled' }));
    expect(document.querySelector('.orbit-booklet-popup')).toBeTruthy();
    fireEvent.click(byText('Apply') as Element);
    expect(open.handlers.onApplyFilters).toHaveBeenCalledWith(
      expect.objectContaining({ IsGuest: true, IsHelper: false }),
    );
  });

  it('renders the slots of the page', () => {
    setup(guestsLoaded, {
      backNavigationHandler: <div id="back-handler" />,
      accessRestrictedDialog: <div id="restricted-dialog" />,
    });
    expect(document.getElementById('back-handler')).toBeTruthy();
    expect(document.getElementById('restricted-dialog')).toBeTruthy();
  });
});
