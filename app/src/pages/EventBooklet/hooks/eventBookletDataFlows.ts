import {
  fetchEventBookletFilters,
  fetchEventBookletGuests,
  fetchEventBookletHelpers,
  toEventBookletPaginationInput,
  toEventBookletSelectedFiltersInput,
  type EventBookletCallInputs,
  type EventBookletMember,
} from '@/api/event';
import type { EventBookletInputs } from '@/pages/EventBooklet/inputs';
import { clientVar } from '@/platform/session/session';
import { getLocalHelperRoles } from '@/platform/storage/localEntities';
import type { EventBookletAction, EventBookletState } from './eventBookletTypes';

/** The data flows of the event booklet block: the Refresh* actions with their OnAfterFetch_* tails, and the view and
    pagination resets. They read the newest variables (`vars`) and assign through `write`; useEventBooklet.ts gives
    them both. It is named as a hook (it calls none) so that the React compiler lets the view hook pass the ref-reading
    functions.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet */

/** The Max. Records of the client aggregate GetLocalHelperRoles. */
const HELPER_ROLES_MAX_RECORDS = 20;

export function useEventBookletDataFlows(
  write: (action: EventBookletAction) => void,
  vars: () => EventBookletState,
  parameters: { current: EventBookletInputs },
  asUnknownError: (e: unknown) => never,
) {
  /** The block variables that the three data actions send. */
  const callInputs = (): EventBookletCallInputs => {
    const s = vars();
    return {
      In_EventId: parameters.current.In_EventId,
      In_EventName: parameters.current.In_EventName,
      IsFetchingData: s.isFetchingData,
      IsGuestView: s.isGuestView,
      IsSearchMode: s.isSearchMode,
      FiltersPopUp: s.filtersPopUp,
      HasFiltersApplied: s.hasFiltersApplied,
      SelectedFilters: toEventBookletSelectedFiltersInput(s.selectedFilters),
      PaginationSettings: toEventBookletPaginationInput(s.paginationSettings),
    };
  };

  /** SetCurrentView(SetGuestView). */
  const setCurrentView = (isGuestView: boolean) => {
    write({ type: 'currentViewSet', isGuestView });
  };

  /** ResetPaginationSettings(IsClearAll): MaxRows from the client variables BookletGuestsMaxRows and
      BookletHelpersMaxRows. */
  const resetPaginationSettings = (isClearAll: boolean) => {
    write({
      type: 'paginationReset',
      isClearAll,
      guestsMaxRows: clientVar.bookletGuestsMaxRows.get(),
      helpersMaxRows: clientVar.bookletHelpersMaxRows.get(),
    });
  };

  /** ResetData(IsClearAll). */
  const resetData = (isClearAll: boolean) => {
    write({ type: 'dataReset', isClearAll });
  };

  /** Refresh of the client aggregate GetLocalHelperRoles (Max. Records 20, no sort): the shell's LocalHelperRole rows,
      then OnAfterFetch_GetLocalHelperRoles (LocalHelperRoles = the list; finished fetching). */
  const refreshGetLocalHelperRoles = async () => {
    await Promise.resolve();
    const list = getLocalHelperRoles(HELPER_ROLES_MAX_RECORDS);
    write({ type: 'localHelperRolesFetched', list });
    write({ type: 'fetchingFinished' });
  };

  /** OnAfterFetch_GetEventBookletFilters: EventInfo and the event days; (after fetching the roles when not yet) the
      helper roles with their labels, the countries and their localities; finished fetching. */
  const onAfterFetchGetEventBookletFilters = async () => {
    const response = vars().filtersResponse;
    write({ type: 'availableDaysSet', response });
    if (!vars().helperRolesFetched) await refreshGetLocalHelperRoles();
    write({ type: 'availableOptionsSet', response });
    write({ type: 'fetchingFinished' });
  };

  /** OnAfterFetch_GetEventBookletGuests: the page appended to the guest lists; SetCurrentView(True); IsFetchingData
      False. */
  const onAfterFetchGetEventBookletGuests = () => {
    write({ type: 'guestsPageAdded' });
    setCurrentView(true);
    write({ type: 'fetchingDataSet', isFetchingData: false });
  };

  /** OnAfterFetch_GetEventBookletHelpers: the page appended to the helper list; SetCurrentView(False); IsFetchingData
      False. */
  const onAfterFetchGetEventBookletHelpers = () => {
    write({ type: 'helpersPageAdded' });
    setCurrentView(false);
    write({ type: 'fetchingDataSet', isFetchingData: false });
  };

  /** RefreshHelperRoles: IsFetchingData True, refresh GetLocalHelperRoles. */
  const refreshHelperRoles = async () => {
    write({ type: 'fetchingDataSet', isFetchingData: true });
    try {
      await refreshGetLocalHelperRoles();
    } catch (e) {
      asUnknownError(e);
    }
  };

  /** RefreshEventFilters: IsFetchingData True, refresh Get_EventBookletFilters. */
  const refreshEventFilters = async () => {
    write({ type: 'fetchingDataSet', isFetchingData: true });
    try {
      const response = await fetchEventBookletFilters(callInputs());
      write({ type: 'eventFiltersFetched', response });
      await onAfterFetchGetEventBookletFilters();
    } catch (e) {
      asUnknownError(e);
    }
  };

  /** RefreshEventGuests: IsFetchingData True, refresh Get_EventBookletGuests. */
  const refreshEventGuests = async () => {
    write({ type: 'fetchingDataSet', isFetchingData: true });
    try {
      const response: EventBookletMember[] = await fetchEventBookletGuests(callInputs());
      write({ type: 'eventGuestsFetched', response });
      onAfterFetchGetEventBookletGuests();
    } catch (e) {
      asUnknownError(e);
    }
  };

  /** RefreshEventHelpers: IsFetchingData True, refresh Get_EventBookletHelpers. */
  const refreshEventHelpers = async () => {
    write({ type: 'fetchingDataSet', isFetchingData: true });
    try {
      const response: EventBookletMember[] = await fetchEventBookletHelpers(callInputs());
      write({ type: 'eventHelpersFetched', response });
      onAfterFetchGetEventBookletHelpers();
    } catch (e) {
      asUnknownError(e);
    }
  };

  /** Refreshes the data source of the current view. */
  const refreshCurrentView = async () => {
    if (vars().isGuestView) await refreshEventGuests();
    else await refreshEventHelpers();
  };

  return {
    setCurrentView,
    resetPaginationSettings,
    resetData,
    onAfterFetchGetEventBookletFilters,
    refreshHelperRoles,
    refreshEventFilters,
    refreshEventGuests,
    refreshEventHelpers,
    refreshCurrentView,
  };
}
