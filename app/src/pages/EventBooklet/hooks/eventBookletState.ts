import type {
  EventBookletEventInfo,
  EventBookletFiltersResponse,
  EventBookletPaginationSettings,
  EventBookletSelectedFilters,
} from '@/api/event';
import type { CurrentFilters, PopupFilters } from '@/pages/EventBooklet/types';
import {
  filtersApplied,
  getHelperRoleByJSON_Name,
  groupHelpersByRole,
  groupMembersByCountry,
} from './eventBookletLists';
import type { EventBookletAction, EventBookletState } from './eventBookletTypes';

/** The reducer, the defaults and the client actions of the event booklet block. The types: eventBookletTypes.ts;
    the list helpers: eventBookletLists.ts.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet */

const EMPTY_POPUP_FILTERS: PopupFilters = {
  IsGuest: false,
  IsHelper: false,
  DateRange: [],
  HelperRoles: [],
  Countries: [],
  Localities: [],
};
/** CurrentFiltersRec and SelectedFiltersRec defaults (the Temp_ variables of ClearAllFilters). */
const EMPTY_CURRENT_FILTERS: CurrentFilters = { ...EMPTY_POPUP_FILTERS, SearchTerm: '' };
const EMPTY_SELECTED_FILTERS: EventBookletSelectedFilters = {
  SearchTerm: '',
  DateRange: [],
  HelperRoles: [],
  Countries: [],
  Localities: [],
};
const EMPTY_PAGINATION: EventBookletPaginationSettings = {
  Guest_MaxRows: 0,
  Guest_PageNumber: 0,
  Guest_IsNewSearch: false,
  Guest_NoResults: false,
  Guest_ScrollThreshold: 0,
  Helper_MaxRows: 0,
  Helper_PageNumber: 0,
  Helper_IsNewSearch: false,
  Helper_NoResults: false,
  Helper_ScrollThreshold: 0,
};
const EMPTY_EVENT_INFO: EventBookletEventInfo = {
  EventId: '0',
  EventName: '',
  EventLocation: '',
  EventLocationId: '0',
  EventCountry: '',
  EventCountryCode: '',
  EventStartDateTime: '',
  EventEndDateTime: '',
};
const EMPTY_FILTERS: EventBookletFiltersResponse['Filters'] = { EventDays: [], HelperRoles: [], Countries: [] };

/** The block variables with their default values, before OnInitialize. */
export const EMPTY_EVENT_BOOKLET_STATE: EventBookletState = {
  isFetchingData: false,
  eventInfo: EMPTY_EVENT_INFO,
  availableFilters: EMPTY_POPUP_FILTERS,
  currentFilters: EMPTY_CURRENT_FILTERS,
  selectedFilters: EMPTY_SELECTED_FILTERS,
  guests: [],
  guests_InvitedList: [],
  guests_HostingList: [],
  helpers: [],
  isSearchMode: false,
  filtersPopUp: false,
  localHelperRoles: [],
  isGuestView: false,
  hasFiltersApplied: false,
  lastFetchedGuests: [],
  lastFetchedHelpers: [],
  paginationSettings: EMPTY_PAGINATION,
  lastFilters_Guest: EMPTY_SELECTED_FILTERS,
  lastFilters_Helpers: EMPTY_SELECTED_FILTERS,
  lastFetched_Guests_InvitedLocality: [],
  lastFetched_Guests_HostLocality: [],
  helperRolesFetched: false,
  filtersFetched: false,
  filtersResponse: null,
  guestsFetched: false,
  guestsResponse: [],
  helpersFetched: false,
  helpersResponse: [],
};

/** The id of the search input of the block instance `blockId` (`$b1` → `b1-Input_SearchTerm`). */
export const searchInputId = (blockId: string): string => `${blockId.replace('$', '')}-Input_SearchTerm`;

/** SetCurrentView(SetGuestView): IsGuestView, CurrentFilters.IsGuest / IsHelper. */
const setCurrentView = (s: EventBookletState, isGuestView: boolean): EventBookletState => ({
  ...s,
  isGuestView,
  currentFilters: { ...s.currentFilters, IsGuest: isGuestView, IsHelper: !isGuestView },
});

/** ResetPaginationSettings(IsClearAll): both lists (with the scroll thresholds, MaxRows × 30) or only the current
    view's: MaxRows from the client variables, page 1, a new search, no "no results". */
function resetPagination(
  s: EventBookletState,
  isClearAll: boolean,
  guestsMaxRows: number,
  helpersMaxRows: number,
): EventBookletPaginationSettings {
  const p = { ...s.paginationSettings };
  const guests = () => {
    p.Guest_MaxRows = guestsMaxRows;
    p.Guest_PageNumber = 1;
    p.Guest_IsNewSearch = true;
    p.Guest_NoResults = false;
  };
  const helpers = () => {
    p.Helper_MaxRows = helpersMaxRows;
    p.Helper_PageNumber = 1;
    p.Helper_IsNewSearch = true;
    p.Helper_NoResults = false;
  };
  if (isClearAll) {
    guests();
    p.Guest_ScrollThreshold = guestsMaxRows * 30;
    helpers();
    p.Helper_ScrollThreshold = helpersMaxRows * 30;
  } else if (s.isGuestView) guests();
  else helpers();
  return p;
}

/** ResetData(IsClearAll): every list, or the current view's lists. */
function resetData(s: EventBookletState, isClearAll: boolean): EventBookletState {
  const guests: Partial<EventBookletState> = {
    guests: [],
    lastFetchedGuests: [],
    guests_InvitedList: [],
    lastFetched_Guests_InvitedLocality: [],
    guests_HostingList: [],
    lastFetched_Guests_HostLocality: [],
  };
  const helpers: Partial<EventBookletState> = { helpers: [], lastFetchedHelpers: [] };
  if (isClearAll) return { ...s, ...guests, ...helpers };
  return { ...s, ...(s.isGuestView ? guests : helpers) };
}

/** A filter value of the popup: Value and Label, in the group GroupName. */
const option = (value: string, label: string, groupName = '') => ({
  Value: value,
  Label: label,
  ImageUrlOrIconClass: '',
  GroupName: groupName,
  Description: '',
});

/** OnAfterFetch_GetEventBookletGuests: the page appended to the last fetched guests (all, invited localities, host
    localities), each grouped by country and locality; Guest_NoResults, Guest_IsNewSearch False, LastFilters_Guest,
    HasFiltersApplied. */
function addGuestsPage(s: EventBookletState): EventBookletState {
  const page = s.guestsResponse;
  const lastFetchedGuests = [...s.lastFetchedGuests, ...page];
  const invited = [...s.lastFetched_Guests_InvitedLocality, ...page.filter((p) => !p.IsHostLocality)];
  const hosting = [...s.lastFetched_Guests_HostLocality, ...page.filter((p) => p.IsHostLocality)];
  const guests = groupMembersByCountry(lastFetchedGuests);
  return {
    ...s,
    lastFetchedGuests,
    lastFetched_Guests_InvitedLocality: invited,
    lastFetched_Guests_HostLocality: hosting,
    guests,
    guests_InvitedList: groupMembersByCountry(invited),
    guests_HostingList: groupMembersByCountry(hosting),
    paginationSettings: { ...s.paginationSettings, Guest_NoResults: guests.length === 0, Guest_IsNewSearch: false },
    lastFilters_Guest: s.selectedFilters,
    hasFiltersApplied: filtersApplied(s.selectedFilters),
  };
}

/** OnAfterFetch_GetEventBookletHelpers: the page appended to the last fetched helpers, grouped by role;
    Helper_NoResults, Helper_IsNewSearch False, LastFilters_Helpers, HasFiltersApplied. */
function addHelpersPage(s: EventBookletState): EventBookletState {
  const lastFetchedHelpers = [...s.lastFetchedHelpers, ...s.helpersResponse];
  const helpers = groupHelpersByRole(lastFetchedHelpers);
  return {
    ...s,
    lastFetchedHelpers,
    helpers,
    paginationSettings: { ...s.paginationSettings, Helper_NoResults: helpers.length === 0, Helper_IsNewSearch: false },
    lastFilters_Helpers: s.selectedFilters,
    hasFiltersApplied: filtersApplied(s.selectedFilters),
  };
}

/** The reducer of the block variables. */
export function eventBookletReducer(s: EventBookletState, action: EventBookletAction): EventBookletState {
  switch (action.type) {
    case 'currentViewSet':
      return setCurrentView(s, action.isGuestView);
    case 'paginationReset':
      return {
        ...s,
        paginationSettings: resetPagination(s, action.isClearAll, action.guestsMaxRows, action.helpersMaxRows),
      };
    case 'dataReset':
      return resetData(s, action.isClearAll);
    case 'fetchingDataSet':
      return { ...s, isFetchingData: action.isFetchingData };
    case 'fetchingFinished':
      // The data source of the current view is fetched → IsFetchingData False.
      return (s.isGuestView ? s.guestsFetched : s.helpersFetched) ? { ...s, isFetchingData: false } : s;
    case 'localHelperRolesFetched':
      return { ...s, helperRolesFetched: true, localHelperRoles: action.list };
    case 'eventFiltersFetched':
      return { ...s, filtersFetched: true, filtersResponse: action.response };
    case 'availableDaysSet': {
      // The view of the popup and the event days, unselected.
      const filters = action.response?.Filters ?? EMPTY_FILTERS;
      return {
        ...s,
        eventInfo: action.response?.EventInfo ?? EMPTY_EVENT_INFO,
        availableFilters: {
          ...s.availableFilters,
          IsGuest: s.isGuestView,
          IsHelper: !s.isGuestView,
          DateRange: filters.EventDays.map((d) => ({ DateGroup: d, IsSelected: false })),
        },
      };
    }
    case 'availableOptionsSet': {
      // The helper roles with their labels, the countries, and their localities (GroupName = the country).
      const filters = action.response?.Filters ?? EMPTY_FILTERS;
      return {
        ...s,
        availableFilters: {
          ...s.availableFilters,
          HelperRoles: filters.HelperRoles.map((value) =>
            option(value, getHelperRoleByJSON_Name(value, s.localHelperRoles).Label),
          ),
          Countries: filters.Countries.map((c) => option(c.CountryName, c.CountryName)),
          Localities: filters.Countries.flatMap((c) => c.Localities.map((l) => option(l, l, c.CountryName))),
        },
      };
    }
    case 'eventGuestsFetched':
      return { ...s, guestsFetched: true, guestsResponse: action.response };
    case 'guestsPageAdded':
      return addGuestsPage(s);
    case 'eventHelpersFetched':
      return { ...s, helpersFetched: true, helpersResponse: action.response };
    case 'helpersPageAdded':
      return addHelpersPage(s);
    case 'searchModeToggled':
      return { ...s, isSearchMode: action.forceSearchMode ? s.isSearchMode : !s.isSearchMode };
    case 'filtersPopUpToggled':
      return { ...s, filtersPopUp: !s.filtersPopUp };
    case 'searchCleared':
      return {
        ...s,
        currentFilters: { ...s.currentFilters, SearchTerm: '' },
        selectedFilters: { ...s.selectedFilters, SearchTerm: '' },
      };
    case 'searchTermChanged':
      return { ...s, currentFilters: { ...s.currentFilters, SearchTerm: action.searchTerm } };
    case 'searchTermSelected':
      return { ...s, selectedFilters: { ...s.selectedFilters, SearchTerm: s.currentFilters.SearchTerm } };
    case 'filtersCleared':
      return { ...s, currentFilters: EMPTY_CURRENT_FILTERS, selectedFilters: EMPTY_SELECTED_FILTERS };
    case 'popupFiltersSelected': {
      // The search term is kept; roles, countries and localities as their values; the selected days or none.
      const f = action.filters;
      return {
        ...s,
        selectedFilters: {
          SearchTerm: s.currentFilters.SearchTerm,
          HelperRoles: f.HelperRoles.map((o) => o.Value ?? ''),
          DateRange: f.DateRange.filter((d) => d.IsSelected === true),
          Countries: f.Countries.map((o) => o.Value ?? ''),
          Localities: f.Localities.map((o) => o.Value ?? ''),
        },
      };
    }
    case 'popupFiltersKept': {
      const f = action.filters;
      return {
        ...s,
        currentFilters: {
          ...s.currentFilters,
          IsHelper: f.IsHelper,
          IsGuest: f.IsGuest,
          DateRange: f.DateRange,
          HelperRoles: f.HelperRoles,
          Countries: f.Countries,
          Localities: f.Localities,
        },
      };
    }
    case 'nextGuestPage': {
      const p = s.paginationSettings;
      return { ...s, paginationSettings: { ...p, Guest_PageNumber: p.Guest_PageNumber + 1, Guest_IsNewSearch: false } };
    }
    case 'nextHelperPage': {
      const p = s.paginationSettings;
      return {
        ...s,
        paginationSettings: { ...p, Helper_PageNumber: p.Helper_PageNumber + 1, Helper_IsNewSearch: false },
      };
    }
  }
}

/** OnInitialize of a new view: SetCurrentView(True), then ResetData(True). */
export const INITIAL_EVENT_BOOKLET_STATE: EventBookletState = eventBookletReducer(
  eventBookletReducer(EMPTY_EVENT_BOOKLET_STATE, { type: 'currentViewSet', isGuestView: true }),
  { type: 'dataReset', isClearAll: true },
);

/** OnInitialize of a view that the view cache restores: IsFetchingData False. */
export const restoreEventBookletState = (saved: EventBookletState): EventBookletState => ({
  ...saved,
  isFetchingData: false,
});

/** The OnScrollEnding conditions of a view: the view is shown and not fetching, the last page is full, and the last
    answer had rows. */
export function canFetchNextPage(s: EventBookletState, guests: boolean): boolean {
  if (s.isGuestView !== guests || s.isFetchingData) return false;
  const p = s.paginationSettings;
  if (guests) {
    if (s.lastFetchedGuests.length < p.Guest_PageNumber * p.Guest_MaxRows) return false;
    return s.guestsFetched && s.guestsResponse.length > 0;
  }
  if (s.lastFetchedHelpers.length < p.Helper_PageNumber * p.Helper_MaxRows) return false;
  return s.helpersFetched && s.helpersResponse.length > 0;
}
