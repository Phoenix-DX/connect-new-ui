import { describe, expect, it } from 'vitest';
import type { EventBookletFiltersResponse, EventBookletMember } from '@/api/event';
import type { LocalHelperRole } from '@/platform/storage/localEntities';
import {
  checkSelectedDates,
  filtersApplied,
  getHelperRoleByJSON_Name,
  groupHelpersByRole,
  groupMembersByCountry,
} from './eventBookletLists';
import {
  canFetchNextPage,
  EMPTY_EVENT_BOOKLET_STATE,
  eventBookletReducer,
  INITIAL_EVENT_BOOKLET_STATE,
  restoreEventBookletState,
  searchInputId,
} from './eventBookletState';
import type { EventBookletAction, EventBookletState } from './eventBookletTypes';

/* The pure state of the event booklet: the client actions of Connect2_OrbitMobile_MUI and the reducer. Fictional
   members of a fictional event. */

const member = (over: Partial<EventBookletMember>): EventBookletMember => ({
  MemberId: '1',
  HouseholderId: '10',
  Title: 'Mr',
  FirstName: 'Tomás',
  LastName: 'Herrera',
  Age: '40',
  Phone: '',
  IsHouseholder: true,
  Country: 'Argentina',
  CountryCode: 'AR',
  Locality: 'Necochea',
  LocalityId: '601',
  IsHostLocality: false,
  Host: '',
  HostHouseholderId: '0',
  Days: [],
  Role: '',
  OrderNo: '1',
  ...over,
});

const herrera = member({ MemberId: '11', FirstName: 'Tomás', LastName: 'Herrera', OrderNo: '1' });
const dominguez = member({
  MemberId: '21',
  FirstName: 'Lucía',
  LastName: 'Domínguez',
  Country: 'Uruguay',
  Locality: 'Montevideo',
  OrderNo: '2',
});
const lucero = member({ MemberId: '31', FirstName: 'Gabriel', LastName: 'Lucero', Locality: 'Tandil', OrderNo: '3' });
const molina = member({
  MemberId: '41',
  FirstName: 'Sofía',
  LastName: 'Molina',
  Locality: 'Bahia Blanca',
  IsHostLocality: true,
  OrderNo: '4',
});
const ramos = member({ MemberId: '51', FirstName: 'Diego', LastName: 'Ramos', OrderNo: '5' });

const roles: LocalHelperRole[] = [
  { Id: 1, Label: 'Catering', Order: 1, JSON_Name: 'CATERING', isReadOnly: true },
  { Id: 2, Label: 'Usher', Order: 2, JSON_Name: 'USHER', isReadOnly: true },
];

const filtersResponse: EventBookletFiltersResponse = {
  EventInfo: {
    EventId: '7301',
    EventName: 'Spring Gathering',
    EventLocation: 'Bahia Blanca',
    EventLocationId: '600',
    EventCountry: 'Argentina',
    EventCountryCode: 'AR',
    EventStartDateTime: '2026-11-06T09:00:00Z',
    EventEndDateTime: '2026-11-08T18:00:00Z',
  },
  Filters: {
    EventDays: ['2026-11-06', '2026-11-07'],
    HelperRoles: ['USHER', 'PARKING'],
    Countries: [
      { CountryName: 'Argentina', Localities: ['Necochea', 'Tandil'] },
      { CountryName: 'Uruguay', Localities: ['Montevideo'] },
    ],
  },
};

const apply = (s: EventBookletState, ...actions: EventBookletAction[]) => actions.reduce(eventBookletReducer, s);

describe('the client actions of the booklet', () => {
  it('GroupMembersByCountry: by OrderNo, a country at its first member, then one group per locality', () => {
    const groups = groupMembersByCountry([ramos, dominguez, lucero, herrera]);
    expect(groups.map((g) => [g.Country, g.Locality, g.Members.map((m) => m.FirstName)])).toEqual([
      ['Argentina', 'Necochea', ['Tomás', 'Diego']],
      ['Argentina', 'Tandil', ['Gabriel']],
      ['Uruguay', 'Montevideo', ['Lucía']],
    ]);
    expect(groupMembersByCountry([])).toEqual([]);
  });

  it('GroupHelpersByRole: one group per role at its first helper, each grouped by country', () => {
    const groups = groupHelpersByRole([
      { ...lucero, Role: 'USHER' },
      { ...herrera, Role: 'CATERING' },
      { ...ramos, Role: 'USHER' },
    ]);
    expect(groups.map((g) => [g.Role, g.MembersByLocality.map((l) => l.Locality)])).toEqual([
      ['CATERING', ['Necochea']],
      ['USHER', ['Tandil', 'Necochea']],
    ]);
  });

  it('CheckSelectedDates and HasFiltersApplied', () => {
    expect(checkSelectedDates([{ DateGroup: '2026-11-06', IsSelected: false }])).toBe(false);
    expect(checkSelectedDates([{ DateGroup: '2026-11-06' }, { DateGroup: '2026-11-07', IsSelected: true }])).toBe(true);
    const none = { SearchTerm: '', DateRange: [], HelperRoles: [], Countries: [], Localities: [] };
    expect(filtersApplied(none)).toBe(false);
    expect(filtersApplied({ ...none, SearchTerm: 'ro' })).toBe(true);
    expect(filtersApplied({ ...none, DateRange: [{ DateGroup: '2026-11-06', IsSelected: false }] })).toBe(false);
    expect(filtersApplied({ ...none, Localities: ['Tandil'] })).toBe(true);
  });

  it('GetHelperRoleByJSON_Name: the role, or the empty record', () => {
    expect(getHelperRoleByJSON_Name('USHER', roles).Label).toBe('Usher');
    expect(getHelperRoleByJSON_Name('PARKING', roles)).toEqual({ Label: '', JSON_Name: '' });
  });

  it('the id of the search input of a block instance', () => {
    expect(searchInputId('$b1')).toBe('b1-Input_SearchTerm');
  });
});

describe('OnInitialize', () => {
  it('a new view: the guest view and empty lists', () => {
    expect(INITIAL_EVENT_BOOKLET_STATE).toEqual({
      ...EMPTY_EVENT_BOOKLET_STATE,
      isGuestView: true,
      currentFilters: { ...EMPTY_EVENT_BOOKLET_STATE.currentFilters, IsGuest: true, IsHelper: false },
    });
  });

  it('a restored view keeps its variables, without IsFetchingData', () => {
    const saved = { ...INITIAL_EVENT_BOOKLET_STATE, isFetchingData: true, isSearchMode: true };
    expect(restoreEventBookletState(saved)).toEqual({ ...saved, isFetchingData: false });
  });
});

describe('eventBookletReducer', () => {
  it('ResetPaginationSettings: both lists with the scroll thresholds, or the current view only', () => {
    const all = apply(INITIAL_EVENT_BOOKLET_STATE, {
      type: 'paginationReset',
      isClearAll: true,
      guestsMaxRows: 10,
      helpersMaxRows: 5,
    }).paginationSettings;
    expect(all).toEqual({
      Guest_MaxRows: 10,
      Guest_PageNumber: 1,
      Guest_IsNewSearch: true,
      Guest_NoResults: false,
      Guest_ScrollThreshold: 300,
      Helper_MaxRows: 5,
      Helper_PageNumber: 1,
      Helper_IsNewSearch: true,
      Helper_NoResults: false,
      Helper_ScrollThreshold: 150,
    });
    const helpersOnly = apply(
      INITIAL_EVENT_BOOKLET_STATE,
      { type: 'currentViewSet', isGuestView: false },
      { type: 'paginationReset', isClearAll: false, guestsMaxRows: 10, helpersMaxRows: 5 },
    ).paginationSettings;
    expect(helpersOnly.Guest_MaxRows).toBe(0);
    expect(helpersOnly.Helper_ScrollThreshold).toBe(0);
    expect(helpersOnly).toMatchObject({ Helper_MaxRows: 5, Helper_PageNumber: 1, Helper_IsNewSearch: true });
  });

  it('OnAfterFetch_GetEventBookletGuests: the page appended to the three guest lists', () => {
    const page1 = apply(
      INITIAL_EVENT_BOOKLET_STATE,
      { type: 'searchTermChanged', searchTerm: 'a' },
      { type: 'searchTermSelected' },
      { type: 'eventGuestsFetched', response: [herrera, molina] },
      { type: 'guestsPageAdded' },
    );
    const s = apply(page1, { type: 'eventGuestsFetched', response: [lucero] }, { type: 'guestsPageAdded' });
    expect(s.lastFetchedGuests).toEqual([herrera, molina, lucero]);
    expect(s.guests_InvitedList.map((g) => g.Locality)).toEqual(['Necochea', 'Tandil']);
    expect(s.guests_HostingList.map((g) => g.Locality)).toEqual(['Bahia Blanca']);
    expect(s.paginationSettings).toMatchObject({ Guest_NoResults: false, Guest_IsNewSearch: false });
    expect(s.lastFilters_Guest.SearchTerm).toBe('a');
    expect(s.hasFiltersApplied).toBe(true);
    const empty = apply(
      INITIAL_EVENT_BOOKLET_STATE,
      { type: 'eventGuestsFetched', response: [] },
      {
        type: 'guestsPageAdded',
      },
    );
    expect(empty.paginationSettings.Guest_NoResults).toBe(true);
    expect(empty.hasFiltersApplied).toBe(false);
  });

  it('OnAfterFetch_GetEventBookletHelpers: the page appended and grouped by role', () => {
    const s = apply(
      INITIAL_EVENT_BOOKLET_STATE,
      { type: 'eventHelpersFetched', response: [{ ...herrera, Role: 'USHER' }] },
      { type: 'helpersPageAdded' },
      { type: 'eventHelpersFetched', response: [{ ...ramos, Role: 'CATERING' }] },
      { type: 'helpersPageAdded' },
    );
    expect(s.helpers.map((g) => g.Role)).toEqual(['USHER', 'CATERING']);
    expect(s.helpersFetched).toBe(true);
    expect(s.paginationSettings.Helper_NoResults).toBe(false);
  });

  it('OnAfterFetch_GetEventBookletFilters: the event, the days, then the roles with labels, countries, localities', () => {
    const withRoles = apply(INITIAL_EVENT_BOOKLET_STATE, { type: 'localHelperRolesFetched', list: roles });
    const s = apply(
      withRoles,
      { type: 'eventFiltersFetched', response: filtersResponse },
      { type: 'availableDaysSet', response: filtersResponse },
      { type: 'availableOptionsSet', response: filtersResponse },
    );
    expect(s.eventInfo.EventName).toBe('Spring Gathering');
    expect(s.availableFilters.IsGuest).toBe(true);
    expect(s.availableFilters.IsHelper).toBe(false);
    expect(s.availableFilters.DateRange).toEqual([
      { DateGroup: '2026-11-06', IsSelected: false },
      { DateGroup: '2026-11-07', IsSelected: false },
    ]);
    expect(s.availableFilters.HelperRoles.map((o) => [o.Value, o.Label])).toEqual([
      ['USHER', 'Usher'],
      ['PARKING', ''],
    ]);
    expect(s.availableFilters.Countries.map((o) => o.Value)).toEqual(['Argentina', 'Uruguay']);
    expect(s.availableFilters.Localities.map((o) => [o.Value, o.GroupName])).toEqual([
      ['Necochea', 'Argentina'],
      ['Tandil', 'Argentina'],
      ['Montevideo', 'Uruguay'],
    ]);
    const none = apply(INITIAL_EVENT_BOOKLET_STATE, { type: 'availableDaysSet', response: null });
    expect(none.eventInfo.EventId).toBe('0');
    expect(none.availableFilters.DateRange).toEqual([]);
  });

  it('"Finished fetching?": IsFetchingData False only when the current view is fetched', () => {
    const fetching = apply(INITIAL_EVENT_BOOKLET_STATE, { type: 'fetchingDataSet', isFetchingData: true });
    expect(apply(fetching, { type: 'fetchingFinished' }).isFetchingData).toBe(true);
    const guests = apply(fetching, { type: 'eventGuestsFetched', response: [] }, { type: 'fetchingFinished' });
    expect(guests.isFetchingData).toBe(false);
  });

  it('the search term, the search mode and the filters popup', () => {
    let s = apply(INITIAL_EVENT_BOOKLET_STATE, { type: 'searchTermChanged', searchTerm: 'Lu' });
    expect(s.currentFilters.SearchTerm).toBe('Lu');
    expect(s.selectedFilters.SearchTerm).toBe('');
    s = apply(s, { type: 'searchTermSelected' }, { type: 'searchModeToggled', forceSearchMode: false });
    expect(s.selectedFilters.SearchTerm).toBe('Lu');
    expect(s.isSearchMode).toBe(true);
    expect(apply(s, { type: 'searchModeToggled', forceSearchMode: true }).isSearchMode).toBe(true);
    s = apply(s, { type: 'searchCleared' }, { type: 'filtersPopUpToggled' });
    expect([s.currentFilters.SearchTerm, s.selectedFilters.SearchTerm, s.filtersPopUp]).toEqual(['', '', true]);
  });

  it('OnHandle_ApplyFilters: the selected values, then the popup filters kept; ClearAllFilters', () => {
    const popup = {
      IsGuest: false,
      IsHelper: true,
      DateRange: [
        { DateGroup: '2026-11-06', IsSelected: true },
        { DateGroup: '2026-11-07', IsSelected: false },
      ],
      HelperRoles: [{ Value: 'USHER', Label: 'Usher' }],
      Countries: [{ Value: 'Argentina', Label: 'Argentina' }],
      Localities: [{ Value: 'Tandil', Label: 'Tandil', GroupName: 'Argentina' }],
    };
    let s = apply(
      INITIAL_EVENT_BOOKLET_STATE,
      { type: 'searchTermChanged', searchTerm: 'Ga' },
      { type: 'popupFiltersSelected', filters: popup },
    );
    expect(s.selectedFilters).toEqual({
      SearchTerm: 'Ga',
      HelperRoles: ['USHER'],
      DateRange: [{ DateGroup: '2026-11-06', IsSelected: true }],
      Countries: ['Argentina'],
      Localities: ['Tandil'],
    });
    s = apply(s, { type: 'popupFiltersKept', filters: popup });
    expect(s.currentFilters).toEqual({ ...popup, SearchTerm: 'Ga' });
    s = apply(s, { type: 'filtersCleared' });
    expect(s.currentFilters).toEqual(EMPTY_EVENT_BOOKLET_STATE.currentFilters);
    expect(s.selectedFilters).toEqual(EMPTY_EVENT_BOOKLET_STATE.selectedFilters);
  });

  it('ResetData: every list, or the lists of the current view', () => {
    const filled = apply(
      INITIAL_EVENT_BOOKLET_STATE,
      { type: 'eventGuestsFetched', response: [herrera] },
      { type: 'guestsPageAdded' },
      { type: 'eventHelpersFetched', response: [{ ...ramos, Role: 'USHER' }] },
      { type: 'helpersPageAdded' },
      { type: 'currentViewSet', isGuestView: true },
    );
    const guestsOnly = apply(filled, { type: 'dataReset', isClearAll: false });
    expect(guestsOnly.lastFetchedGuests).toEqual([]);
    expect(guestsOnly.helpers).toHaveLength(1);
    const all = apply(filled, { type: 'dataReset', isClearAll: true });
    expect([all.guests, all.helpers, all.lastFetchedHelpers]).toEqual([[], [], []]);
  });

  it('OnScrollEnding: a full last page and a last answer with rows, in the shown view, not fetching', () => {
    const page = Array.from({ length: 2 }, (_, i) => member({ MemberId: String(i), OrderNo: String(i) }));
    const s = apply(
      INITIAL_EVENT_BOOKLET_STATE,
      { type: 'paginationReset', isClearAll: true, guestsMaxRows: 2, helpersMaxRows: 2 },
      { type: 'eventGuestsFetched', response: page },
      { type: 'guestsPageAdded' },
    );
    expect(canFetchNextPage(s, true)).toBe(true);
    expect(canFetchNextPage(s, false)).toBe(false);
    expect(canFetchNextPage({ ...s, isFetchingData: true }, true)).toBe(false);
    const next = apply(s, { type: 'nextGuestPage' });
    expect(next.paginationSettings).toMatchObject({ Guest_PageNumber: 2, Guest_IsNewSearch: false });
    expect(canFetchNextPage(next, true)).toBe(false);
    const helpers = apply(
      INITIAL_EVENT_BOOKLET_STATE,
      { type: 'currentViewSet', isGuestView: false },
      {
        type: 'nextHelperPage',
      },
    );
    expect(helpers.paginationSettings.Helper_PageNumber).toBe(1);
  });
});
