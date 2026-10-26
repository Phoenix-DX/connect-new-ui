/** @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet */
import type {
  EventBookletEventInfo,
  EventBookletFiltersResponse,
  EventBookletMember,
  EventBookletPaginationSettings,
  EventBookletSelectedFilters,
} from '@/api/event';
import type { LocalHelperRole } from '@/platform/storage/localEntities';
import type {
  BookletMembersByLocality,
  BookletMembersByRole,
  CurrentFilters,
  PopupFilters,
} from '@/pages/EventBooklet/types';

/* The types of the event booklet state: the variables and the assignments of the block flows. The reducer:
   eventBookletState.ts. */

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
