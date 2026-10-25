import { useRef } from 'react';
import { UserException, exceptionMessage, isSystemException } from '@/legacy/os/exceptions';
import type { EventBookletInputs } from '@/pages/EventBooklet/inputs';
import type { PopupFilters } from '@/pages/EventBooklet/types';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { log } from '@/platform/log/log';
import { useFlowState, type BackNavigationEvent, type IsAlive } from '@/platform/navigation';
import { checkDirectoryAccess, setBookletMaxRows } from '@/lib/orbit/actions';
import { DirectoryAPIFilter } from '@/lib/orbit/staticEntities';
import { useEventBookletDataFlows } from './eventBookletDataFlows';
import {
  canFetchNextPage,
  eventBookletReducer,
  INITIAL_EVENT_BOOKLET_STATE,
  restoreEventBookletState,
  searchInputId,
} from './eventBookletState';
import type { EventBookletAction, EventBookletState } from './eventBookletTypes';

/** The flows of the event booklet block: OnInitialize, OnReady and the screen actions of the view. The state comes
    from useFlowState: the flows read the newest variables (`latest`), as OutSystems assigns the variables at once.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet */

/** The events of the block. */
export interface EventBookletEvents {
  /** Event NavigateTo_HouseholdDetail(HouseholdId). */
  onNavigateToHouseholdDetail: (householdId: string) => void;
}

/** What the page gives the view, and the BackNavigationHandler event. */
export interface EventBookletFlows {
  /** The block variables (rendered). */
  state: EventBookletState;
  /** The search icon: ToggleSearchMode(False, True). */
  onSearchIcon: () => void;
  /** The filter icon and the close icon of the popup: ToggleFiltersPopUp. */
  onToggleFiltersPopUp: () => void;
  /** OnClick_ViewSwap(IsGuestButton). */
  onViewSwap: (isGuestButton: boolean) => void;
  /** The search input changed CurrentFilters.SearchTerm. */
  onSearchTermChange: (searchTerm: string) => void;
  /** OnKeyUp_SearchTerm: `isEnterKey` is CheckForEnterKey (keyCode 13). */
  onSearchTermKeyUp: (isEnterKey: boolean) => void;
  /** OnClick_ClearSearch. */
  onClearSearch: () => void;
  /** OnClick_SelectedFilters ("Filters Applied"). */
  onSelectedFilters: () => void;
  /** ClearAllFilters ("Clear All"). */
  onClearAllFilters: () => void;
  /** OnHandle_ApplyFilters(Event_SelectedFilters), the ApplyFilters event of the popup. */
  onApplyFilters: (filters: PopupFilters) => void;
  /** OnScrollEnding_Guests. */
  onScrollEndingGuests: () => void;
  /** OnScrollEnding_Helpers. */
  onScrollEndingHelpers: () => void;
  /** OnHandle_ComponentDidMount(In_ListId): a List of the view mounted. */
  onListMounted: (listId: string) => void;
  /** OnHandle_ClickedMember(HouseholdId): the member or the host of a row. */
  onClickedMember: (householdId: string) => void;
  /** OnHandle_BackNavigation(BackNavigationEvent). */
  onBackNavigation: (event: BackNavigationEvent) => void;
}

/** The name under which the view cache keeps the block variables. */
const VIEW_NAME = 'Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet';
const UNKNOWN_ERROR = 'Connect2_OrbitMobile_MUI.UnknownError';

/** FocusOnInput(InputId): focus the element 150 ms later, when it exists. */
function focusOnInput(inputId: string): void {
  window.setTimeout(() => {
    document.getElementById(inputId)?.focus();
  }, 150);
}

/** BlurInput(In_InputId): document.getElementById(In_InputId).blur(). */
function blurInput(inputId: string): void {
  document.getElementById(inputId)?.blur();
}

/** DetermineIfNeedsNewFetch (JS node): the list is shown, lower than the `.content` container, on page 1. */
function determineIfNeedsNewFetch(listId: string, pageNumber: number): boolean {
  const listToCheck = document.getElementById(listId);
  const contentCont = document.querySelector('.content');
  if (!listToCheck || !contentCont) return false;
  return listToCheck.clientHeight > 0 && listToCheck.clientHeight < contentCont.clientHeight && pageNumber === 1;
}

/** OnApplicationEvent_ViewHousehold(AuditPayload_ViewHousehold: TargetHouseholdId, EventId, EventTitle,
    EventLocation). Telemetry is not wired in the mock phase (decision U17): the event goes to the log with its ids
    only. */
function onApplicationEventViewHousehold(targetHouseholdId: string, eventId: string): void {
  log.info('ApplicationEvent', { Event: 'ViewHousehold', TargetHouseholdId: targetHouseholdId, EventId: eventId });
}

/** Runs a client action flow; an exception goes to the flow's handler (Legacy_OrbitEventsFlow handleError). */
function run(flow: () => Promise<void> | void): void {
  void (async () => {
    try {
      await flow();
    } catch (e) {
      raiseToFlowHandler(e);
    }
  })();
}

/** The state and the flows of the block instance `blockId` (`$b1`).
    - OnInitialize is the initial state (a new view: SetCurrentView(True), ResetData(True)) or `restore` (a view that
      the view cache restores: IsFetchingData False).
    - OnReady, on a new view only, before the first paint as in the old port (decision W28, `beforePaint`):
      SetBookletMaxRows, ResetPaginationSettings(True), then RefreshHelperRoles, RefreshEventFilters and
      RefreshEventGuests, each in its own setTimeout 0 (the *_Async JS nodes). It runs once (StrictMode too).
    - Decision W23: a flow that started runs to its end after an unmount (its server calls, messages, navigation and
      flow-handler errors), but its state writes stop. The flow keeps its assignments in its own copy of the
      variables, so its later calls send the same variables as the old port. */
export function useEventBooklet(
  blockId: string,
  inputs: EventBookletInputs,
  events: EventBookletEvents,
): EventBookletFlows {
  const inputId = searchInputId(blockId);
  /** The liveness check of the block (true until the unmount), which useFlowState gives OnReady. */
  const blockAlive = useRef<IsAlive>(() => true);
  /** The variables of the flows that run on after the unmount (W23): never rendered, never saved. */
  const detached = useRef<EventBookletState | null>(null);
  const {
    state,
    dispatch,
    latest,
    parameters,
    events: eventsRef,
  } = useFlowState({
    viewName: VIEW_NAME,
    reducer: eventBookletReducer,
    initial: INITIAL_EVENT_BOOKLET_STATE,
    restore: restoreEventBookletState,
    parameters: inputs,
    events,
    // OnReady runs once, before the first paint, as in the old port (W28). Its `isAlive` is true until the unmount.
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (isAlive, restored) => {
      blockAlive.current = isAlive;
      return onReady(restored);
    },
    beforePaint: true,
  });

  /** The newest variables, which the flows read: the state, or after the unmount the flows' own copy. */
  const vars = (): EventBookletState => detached.current ?? latest.current;

  /** An assignment of a flow. After the unmount it goes to the flows' own copy, not to the state (W23). */
  const write = (action: EventBookletAction) => {
    if (blockAlive.current()) dispatch(action);
    else detached.current = eventBookletReducer(vars(), action);
  };

  /** Handle Error (AllExceptions) of the Refresh* actions: a non-system exception sets IsFetchingData False and raises
      UnknownError with its message; a system one goes on as it is. */
  const asUnknownError = (e: unknown): never => {
    if (!isSystemException(e)) {
      write({ type: 'fetchingDataSet', isFetchingData: false });
      throw new UserException(exceptionMessage(e), UNKNOWN_ERROR);
    }
    throw e;
  };

  /* The Refresh* actions and the resets (eventBookletDataFlows.ts). */
  const {
    setCurrentView,
    resetPaginationSettings,
    resetData,
    onAfterFetchGetEventBookletFilters,
    refreshHelperRoles,
    refreshEventFilters,
    refreshEventGuests,
    refreshEventHelpers,
    refreshCurrentView,
  } = useEventBookletDataFlows(write, vars, parameters, asUnknownError);

  /** OnReady, before the first paint (W28). A view that the view cache restores does nothing (P-BACK). */
  async function onReady(restored: boolean) {
    if (restored) return;
    await setBookletMaxRows();
    resetPaginationSettings(true);
    window.setTimeout(() => {
      run(refreshHelperRoles);
    }, 0);
    window.setTimeout(() => {
      run(refreshEventFilters);
    }, 0);
    window.setTimeout(() => {
      run(refreshEventGuests);
    }, 0);
  }

  /** ToggleSearchMode(ForceSearchMode, ForceBlurOnInput): only once the helper roles and the filters are fetched;
      with ForceBlurOnInput, FocusOnInput(Input_SearchTerm). */
  const toggleSearchMode = (forceSearchMode: boolean, forceBlurOnInput: boolean) => {
    const s = vars();
    if (!(s.helperRolesFetched && s.filtersFetched)) return;
    write({ type: 'searchModeToggled', forceSearchMode });
    if (forceBlurOnInput) focusOnInput(inputId);
  };

  /** ToggleFiltersPopUp: only once the helper roles and the filters are fetched. */
  const toggleFiltersPopUp = () => {
    const s = vars();
    if (s.helperRolesFetched && s.filtersFetched) write({ type: 'filtersPopUpToggled' });
  };

  /** OnClick_ViewSwap(IsGuestButton): nothing while fetching or for the current view; else SetCurrentView and, as
      the view always "needs data fetch" (the compiled `!==` compares two record wrappers, always different), reset
      its pagination and data and refresh it. */
  const onClickViewSwap = (isGuestButton: boolean) => {
    run(async () => {
      const s = vars();
      if (s.isFetchingData) return;
      if (isGuestButton === s.isGuestView) return;
      setCurrentView(isGuestButton);
      resetPaginationSettings(false);
      resetData(false);
      await refreshCurrentView();
    });
  };

  /** OnClick_ClearSearch: both search terms "", FocusOnInput. */
  const onClickClearSearch = () => {
    write({ type: 'searchCleared' });
    focusOnInput(inputId);
  };

  /** OnKeyUp_SearchTerm: on Enter, SelectedFilters.SearchTerm = CurrentFilters.SearchTerm, reset the view's
      pagination and data, BlurInput, refresh the view. */
  const onKeyUpSearchTerm = (isEnterKey: boolean) => {
    run(async () => {
      if (!isEnterKey) return;
      write({ type: 'searchTermSelected' });
      resetPaginationSettings(false);
      resetData(false);
      blurInput(inputId);
      await refreshCurrentView();
    });
  };

  /** OnClick_SelectedFilters: ToggleSearchMode(True, False), ToggleFiltersPopUp. */
  const onClickSelectedFilters = () => {
    toggleSearchMode(true, false);
    toggleFiltersPopUp();
  };

  /** ClearAllFilters: CurrentFilters and SelectedFilters back to empty records, ResetData(True),
      ResetPaginationSettings(True), refresh the view. */
  const clearAllFilters = () => {
    run(async () => {
      write({ type: 'filtersCleared' });
      resetData(true);
      resetPaginationSettings(true);
      await refreshCurrentView();
    });
  };

  /** OnHandle_ApplyFilters(Event_SelectedFilters): both or neither of Guests / Helpers → the filters are rebuilt
      (OnAfterFetch_GetEventBookletFilters) and an Info message; else SelectedFilters from the popup, SetCurrentView,
      ResetPaginationSettings / ResetData of that view, close the popup, refresh helpers or guests, then
      CurrentFilters = the popup's filters. */
  const onHandleApplyFilters = (filters: PopupFilters) => {
    run(async () => {
      if ((!filters.IsGuest && !filters.IsHelper) || (filters.IsGuest && filters.IsHelper)) {
        await onAfterFetchGetEventBookletFilters();
        showFeedbackMessage('The chosen filters were invalid, filters have been reset.', PLATFORM_MESSAGE_TYPE.info);
        return;
      }
      write({ type: 'popupFiltersSelected', filters });
      setCurrentView(filters.IsGuest);
      resetPaginationSettings(false);
      resetData(false);
      toggleFiltersPopUp();
      if (filters.IsHelper) await refreshEventHelpers();
      else if (filters.IsGuest) await refreshEventGuests();
      write({ type: 'popupFiltersKept', filters });
    });
  };

  /** OnScrollEnding_Guests: in the guest view, not fetching, a full last page and a last answer with rows → the next
      page (not a new search), RefreshEventGuests. */
  const onScrollEndingGuests = async () => {
    if (!canFetchNextPage(vars(), true)) return;
    write({ type: 'nextGuestPage' });
    await refreshEventGuests();
  };

  /** OnScrollEnding_Helpers: the same for the helper view. */
  const onScrollEndingHelpers = async () => {
    if (!canFetchNextPage(vars(), false)) return;
    write({ type: 'nextHelperPage' });
    await refreshEventHelpers();
  };

  /** OnHandle_ComponentDidMount(In_ListId): a first page lower than the content → the view's scroll ending. */
  const onHandleComponentDidMount = (listId: string) => {
    run(async () => {
      const s = vars();
      const page = s.isGuestView ? s.paginationSettings.Guest_PageNumber : s.paginationSettings.Helper_PageNumber;
      if (!determineIfNeedsNewFetch(listId, page)) return;
      if (s.isGuestView) await onScrollEndingGuests();
      else await onScrollEndingHelpers();
    });
  };

  /** OnHandle_ClickedMember(HouseholdId): while fetching an Info message; a set id → CheckDirectoryAccess:
      NavigateTo_HouseholdDetail then OnApplicationEvent_ViewHousehold, or App_Subscription_ShowUpgradePopUp. */
  const onHandleClickedMember = (householdId: string) => {
    run(async () => {
      if (vars().isFetchingData) {
        showFeedbackMessage('Please wait until all data has finished loading', PLATFORM_MESSAGE_TYPE.info);
        return;
      }
      if (householdId === '' || householdId === '0') return;
      const hasAccess = await checkDirectoryAccess(householdId, DirectoryAPIFilter.Member);
      if (hasAccess) {
        eventsRef.current.onNavigateToHouseholdDetail(householdId);
        onApplicationEventViewHousehold(householdId, vars().eventInfo.EventId);
      } else {
        await showUpgradePopUp();
      }
    });
  };

  /** OnHandle_BackNavigation(BackNavigationEvent): an open popup → PreventNavigation and close it; else search mode →
      PreventNavigation and leave search mode; else the back navigation goes on. */
  const onHandleBackNavigation = (event: BackNavigationEvent) => {
    const s = vars();
    if (!(s.isSearchMode && s.filtersPopUp) && !s.filtersPopUp) {
      if (s.isSearchMode) {
        event.preventDefault();
        toggleSearchMode(false, false);
      }
      return;
    }
    event.preventDefault();
    toggleFiltersPopUp();
  };

  return {
    state,
    onSearchIcon: () => {
      toggleSearchMode(false, true);
    },
    onToggleFiltersPopUp: toggleFiltersPopUp,
    onViewSwap: onClickViewSwap,
    onSearchTermChange: (searchTerm) => {
      write({ type: 'searchTermChanged', searchTerm });
    },
    onSearchTermKeyUp: onKeyUpSearchTerm,
    onClearSearch: onClickClearSearch,
    onSelectedFilters: onClickSelectedFilters,
    onClearAllFilters: clearAllFilters,
    onApplyFilters: onHandleApplyFilters,
    onScrollEndingGuests: () => {
      run(onScrollEndingGuests);
    },
    onScrollEndingHelpers: () => {
      run(onScrollEndingHelpers);
    },
    onListMounted: onHandleComponentDidMount,
    onClickedMember: onHandleClickedMember,
    onBackNavigation: onHandleBackNavigation,
  };
}
