import type {
  EventBookletEventInfo,
  EventBookletFiltersResponse,
  EventBookletMember,
  EventBookletPaginationSettings,
  EventBookletSelectedFilters,
} from '@/api/event';
import type { LocalHelperRole } from '@/platform/storage/localEntities';
import type { DayFilter } from '@/shared/Connect2_OrbitMobile_MUI/lib/structures';
import type {
  BookletMembersByLocality,
  BookletMembersByRole,
  CurrentFilters,
  PopupFilters,
} from '@/pages/EventBooklet/types';

/** The state of the event booklet block: its variables, the state of its data sources, the reducer and the pure
    client actions of Connect2_OrbitMobile_MUI that the block calls. Records are values: every assignment copies.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet */

/** The block variables and the state of its data sources (IsDataFetched and Response). */
export interface EventBookletState {
  isFetchingData: boolean;
  eventInfo: EventBookletEventInfo;
  availableFilters: PopupFilters;
  currentFilters: CurrentFilters;
  selectedFilters: EventBookletSelectedFilters;
  guests: BookletMembersByLocality[];
  guests_InvitedList: BookletMembersByLocality[];
  guests_HostingList: BookletMembersByLocality[];
  helpers: BookletMembersByRole[];
  isSearchMode: boolean;
  filtersPopUp: boolean;
  localHelperRoles: LocalHelperRole[];
  isGuestView: boolean;
  hasFiltersApplied: boolean;
  lastFetchedGuests: EventBookletMember[];
  lastFetchedHelpers: EventBookletMember[];
  paginationSettings: EventBookletPaginationSettings;
  lastFilters_Guest: EventBookletSelectedFilters;
  lastFilters_Helpers: EventBookletSelectedFilters;
  lastFetched_Guests_InvitedLocality: EventBookletMember[];
  lastFetched_Guests_HostLocality: EventBookletMember[];
  /** GetLocalHelperRoles.IsDataFetched. */
  helperRolesFetched: boolean;
  /** Get_EventBookletFilters.IsDataFetched and Response. */
  filtersFetched: boolean;
  filtersResponse: EventBookletFiltersResponse | null;
  /** Get_EventBookletGuests.IsDataFetched and Response. */
  guestsFetched: boolean;
  guestsResponse: EventBookletMember[];
  /** Get_EventBookletHelpers.IsDataFetched and Response. */
  helpersFetched: boolean;
  helpersResponse: EventBookletMember[];
}

/** The assignments of the block flows. */
export type EventBookletAction =
  /** SetCurrentView(SetGuestView). */
  | { type: 'currentViewSet'; isGuestView: boolean }
  /** ResetPaginationSettings(IsClearAll), with the client variables BookletGuestsMaxRows and BookletHelpersMaxRows. */
  | { type: 'paginationReset'; isClearAll: boolean; guestsMaxRows: number; helpersMaxRows: number }
  /** ResetData(IsClearAll). */
  | { type: 'dataReset'; isClearAll: boolean }
  /** IsFetchingData = the value. */
  | { type: 'fetchingDataSet'; isFetchingData: boolean }
  /** "Finished fetching?" of the OnAfterFetch actions. */
  | { type: 'fetchingFinished' }
  /** GetLocalHelperRoles fetched, and LocalHelperRoles = its list (OnAfterFetch_GetLocalHelperRoles). */
  | { type: 'localHelperRolesFetched'; list: LocalHelperRole[] }
  /** Get_EventBookletFilters fetched. */
  | { type: 'eventFiltersFetched'; response: EventBookletFiltersResponse }
  /** OnAfterFetch_GetEventBookletFilters, first part: EventInfo, the view and the event days. */
  | { type: 'availableDaysSet'; response: EventBookletFiltersResponse | null }
  /** OnAfterFetch_GetEventBookletFilters, second part: the helper roles, the countries and the localities. */
  | { type: 'availableOptionsSet'; response: EventBookletFiltersResponse | null }
  /** Get_EventBookletGuests fetched. */
  | { type: 'eventGuestsFetched'; response: EventBookletMember[] }
  /** OnAfterFetch_GetEventBookletGuests: the page appended to the guest lists. */
  | { type: 'guestsPageAdded' }
  /** Get_EventBookletHelpers fetched. */
  | { type: 'eventHelpersFetched'; response: EventBookletMember[] }
  /** OnAfterFetch_GetEventBookletHelpers: the page appended to the helper list. */
  | { type: 'helpersPageAdded' }
  /** ToggleSearchMode(ForceSearchMode): IsSearchMode kept when forced, else toggled. */
  | { type: 'searchModeToggled'; forceSearchMode: boolean }
  /** ToggleFiltersPopUp. */
  | { type: 'filtersPopUpToggled' }
  /** OnClick_ClearSearch: both search terms "". */
  | { type: 'searchCleared' }
  /** The search input changed CurrentFilters.SearchTerm. */
  | { type: 'searchTermChanged'; searchTerm: string }
  /** OnKeyUp_SearchTerm on Enter: SelectedFilters.SearchTerm = CurrentFilters.SearchTerm. */
  | { type: 'searchTermSelected' }
  /** ClearAllFilters: CurrentFilters and SelectedFilters back to empty records. */
  | { type: 'filtersCleared' }
  /** OnHandle_ApplyFilters: SelectedFilters from the popup filters. */
  | { type: 'popupFiltersSelected'; filters: PopupFilters }
  /** OnHandle_ApplyFilters, at the end: CurrentFilters = the popup filters. */
  | { type: 'popupFiltersKept'; filters: PopupFilters }
  /** OnScrollEnding_Guests: the next guest page. */
  | { type: 'nextGuestPage' }
  /** OnScrollEnding_Helpers: the next helper page. */
  | { type: 'nextHelperPage' };

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

/** ListSort by OrderNo ascending (Long Integer). */
const byOrderNo = (list: readonly EventBookletMember[]): EventBookletMember[] =>
  [...list].sort((a, b) => Number(a.OrderNo) - Number(b.OrderNo));

/** GroupMembersByCountry(MembersList) → MembersByLocality: sort by OrderNo; for each member whose country is not
    grouped yet, its country's members, then one group per locality of that country (first-seen order) with that
    locality's members. */
export function groupMembersByCountry(membersList: readonly EventBookletMember[]): BookletMembersByLocality[] {
  const members = byOrderNo(membersList);
  const out: BookletMembersByLocality[] = [];
  for (const m of members) {
    if (out.some((g) => g.Country === m.Country)) continue;
    const byCountry = members.filter((x) => x.Country === m.Country);
    const temp: BookletMembersByLocality[] = [];
    for (const c of byCountry) {
      if (temp.some((g) => g.Locality === c.Locality)) continue;
      temp.push({
        Locality: c.Locality,
        Country: c.Country,
        Members: byCountry.filter((x) => x.Locality === c.Locality),
      });
    }
    out.push(...temp);
  }
  return out;
}

/** GroupHelpersByRole(MembersList) → HelpersByRole: sort by OrderNo; one group per role (first-seen order) with
    GroupMembersByCountry of that role's members. */
export function groupHelpersByRole(membersList: readonly EventBookletMember[]): BookletMembersByRole[] {
  const members = byOrderNo(membersList);
  const out: BookletMembersByRole[] = [];
  for (const m of members) {
    if (out.some((g) => g.Role === m.Role)) continue;
    out.push({ Role: m.Role, MembersByLocality: groupMembersByCountry(members.filter((x) => x.Role === m.Role)) });
  }
  return out;
}

/** CheckSelectedDates(DayFilterList) → HasSelected: True at the first selected day. */
export const checkSelectedDates = (dayFilterList: readonly DayFilter[]): boolean =>
  dayFilterList.some((d) => d.IsSelected === true);

/** GetHelperRoleByJSON_Name(In_JSON_Name, In_HelperRoles) → Out_HelperRoles: the first role with that JSON_Name,
    else the empty record (Label ""). */
export function getHelperRoleByJSON_Name(
  jsonName: string,
  helperRoles: readonly LocalHelperRole[],
): Pick<LocalHelperRole, 'Label' | 'JSON_Name'> {
  return helperRoles.find((r) => r.JSON_Name === jsonName) ?? { Label: '', JSON_Name: '' };
}

/** HasFiltersApplied of the OnAfterFetch actions: a search term, a selected day, a role, a country or a locality. */
export const filtersApplied = (f: EventBookletSelectedFilters): boolean =>
  f.SearchTerm !== '' ||
  checkSelectedDates(f.DateRange) ||
  f.HelperRoles.length > 0 ||
  f.Countries.length > 0 ||
  f.Localities.length > 0;

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
