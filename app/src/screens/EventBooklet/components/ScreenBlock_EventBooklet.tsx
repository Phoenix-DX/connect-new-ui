// @os-block Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet
import { useLayoutEffect, useReducer, useRef, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { UserException } from '@/legacy/os/os-exceptions';
import { Layout_Orbit } from '@/shared/Connect2_LegacyShared/Layout_Orbit';
import { MenuIcon__UpdatedOSUI } from '@/shared/Connect2_LegacyShared/MenuIcon__UpdatedOSUI';
import { HostSurvey_PillItem } from '@/shared/Connect2_OrbitMobile_MUI/HostSurvey_PillItem';
import { NoResults } from '@/shared/Connect2_OrbitMobile_MUI/NoResults';
import { Skeleton_Loading } from '@/shared/Connect2_OrbitMobile_MUI/Skeleton_Loading';
import { checkDirectoryAccess, setBookletMaxRows } from '@/shared/Connect2_OrbitMobile_MUI/lib/actions';
import { DirectoryAPIFilter, OrbitSkeletonLoading } from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import { BackNavigationHandler, type BackNavigationEvent } from '@/platform/navigation/BackNavigationHandler';
import { InputWithIcon } from '@/shared/osui/InputWithIcon';
import { Dialog_AccessRestrictedAction_Legacy } from '@/shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { exceptionMessage, isSystemException, raiseToFlowHandler } from '@/legacy/os/exceptions';
import { showFeedbackMessage } from '@/platform/feedback';
import { getLocalHelperRoles, type LocalHelperRole } from '@/platform/storage/localEntities';
import { useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { getClientVar } from '@/platform/session/session';
import {
  getEventBookletFilters,
  getEventBookletGuests,
  getEventBookletHelpers,
  paginationWire,
  selectedFiltersWire,
} from '@/screens/EventBooklet/api';
import type {
  BookletMembersByLocality,
  BookletMembersByRole,
  CurrentFilters,
  EventBookletEventInfo,
  EventBookletFiltersResponse,
  EventBookletMember,
  EventBookletVariablesWire,
  PaginationSettings,
  PopupFilters,
  SelectedFilters,
} from '@/screens/EventBooklet/types';
import {
  blurInput,
  checkSelectedDates,
  focusOnInput,
  getHelperRoleByJSON_Name,
  groupHelpersByRole,
  groupMembersByCountry,
  onApplicationEvent_ViewHousehold,
} from './actions';
import { BookletPopup } from './BookletPopup';
import { DoubleAction } from './DoubleAction';
import { EventBooklet_ListHeader } from './EventBooklet_ListHeader';
import { EventBooklet_MembersItem } from './EventBooklet_MembersItem';
import { PopUp_OrbitBookletFilters } from './PopUp_OrbitBookletFilters';

/* ScreenBlock_EventBooklet (SB = analysis/sources/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.
   ScreenBlock_EventBooklet.mvc.js: model :1-226, view :227-1854, controller :1855-4155, JS nodes :4156-4203). No capture:
   markup from the compiled view (Container = div[data-container] with its Style Classes; Expression =
   span[data-expression]; Icon = i[data-icon] "<style> fa fa-<icon> fa-1x"; Input = input[data-input]). */

/** Connect2_OrbitMobile_MUI.menuAction.auto: the MenuAction the block passes to MenuIcon__UpdatedOSUI (SB :329). */
const MENU_ACTION_AUTO = 'Auto';
const UNKNOWN_ERROR = 'Connect2_OrbitMobile_MUI.UnknownError';
/** OS.FeedbackMessageService message type Info. */
const INFO = 0;

const EMPTY_POPUP_FILTERS: PopupFilters = {
  IsGuest: false,
  IsHelper: false,
  DateRange: [],
  HelperRoles: [],
  Countries: [],
  Localities: [],
};
/** CurrentFiltersRec / SelectedFiltersRec defaults (ClearAllFilters' Temp_ variables, SB :3312-3385). */
const EMPTY_CURRENT_FILTERS: CurrentFilters = { ...EMPTY_POPUP_FILTERS, SearchTerm: '' };
const EMPTY_SELECTED_FILTERS: SelectedFilters = {
  SearchTerm: '',
  DateRange: [],
  HelperRoles: [],
  Countries: [],
  Localities: [],
};
const EMPTY_PAGINATION: PaginationSettings = {
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

/** Block variables (SB model :79-155) and the state of its data sources (IsDataFetched, Response). Records are values:
    every assignment copies (OutSystems records are immutable data behind per-attribute wrappers). */
interface Model {
  isFetchingData: boolean;
  eventInfo: EventBookletEventInfo;
  availableFilters: PopupFilters;
  currentFilters: CurrentFilters;
  selectedFilters: SelectedFilters;
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
  paginationSettings: PaginationSettings;
  lastFilters_Guest: SelectedFilters;
  lastFilters_Helpers: SelectedFilters;
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

const INITIAL_MODEL: Model = {
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

export interface ScreenBlock_EventBookletProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  In_EventId: string;
  In_EventName: string;
  /** Placeholder Menu. */
  menu?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
  /** Event NavigateTo_HouseholdDetail(HouseholdId). */
  onNavigateToHouseholdDetail: (householdId: string) => void;
}

/** Runs `onMount` once, after the element before it mounted: the List widget's `componentdidmount` extended event. */
function OnListMounted({ onMount }: { onMount: () => void }) {
  const done = useRef(false);
  useLayoutEffect(() => {
    if (done.current) return;
    done.current = true;
    onMount();
    // once per mount of the List, as componentDidMount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

/** DetermineIfNeedsNewFetch (SB :4156-4170): the list is shown, lower than the `.content` container, on page 1. */
function determineIfNeedsNewFetch(listId: string, pageNumber: number): boolean {
  const listToCheck = document.getElementById(listId);
  const contentCont = document.querySelector('.content');
  if (!listToCheck || !contentCont) return false;
  return listToCheck.clientHeight > 0 && listToCheck.clientHeight < contentCont.clientHeight && pageNumber === 1;
}

/** The location pill text (SB :995-1000): "Locality, Country", the locality or the country. */
const pillText = (g: BookletMembersByLocality): string =>
  g.Locality !== '' ? `${g.Locality}${g.Country !== '' ? `, ${g.Country}` : ''}` : g.Country;

/** The event booklet (SB view :282-1849): Layout_Orbit (CustomClass "orbit-detail orbit-header-center", ExtendedClasses
    "orbit-booklet") with the Auto MenuIcon; Title: the search input in search mode, else "Event Guest List" and the
    event name; HeaderRight: search and filter icons (faded until the helper roles and the filters are fetched);
    HeaderContent: the Guests / Helpers switch and, with filters applied, "Filters Applied" / "Clear All"; Content: the
    guest view (Invite List and Host Localities, grouped by locality) or the helper view (grouped by role, then
    locality), each with its skeletons and NoResults; then the filters popup, BackNavigationHandler and the legacy
    access-restricted dialog. Flows: SB controller (cited per handler). */
export function ScreenBlock_EventBooklet(props: ScreenBlock_EventBookletProps) {
  const { id, In_EventId, In_EventName } = props;
  const prefix = id.replace('$', '');
  const inputId = `${prefix}-Input_SearchTerm`;
  const restored = useWasRestoredFromCache();
  const [saved, setSaved] = useViewState<Model | null>('Model', null);
  /* The OutSystems model: flows read and write the latest values (state is the rendered copy). OnInitialize
     (SB :2957-3010) after a restore from the view cache: IsFetchingData False. */
  const [state, dispatch] = useReducer(
    (current: Model, patch: Partial<Model>): Model => ({ ...current, ...patch }),
    null,
    () => (restored && saved ? { ...saved, isFetchingData: false } : INITIAL_MODEL),
  );
  const latest = useRef(state);
  const m = (): Model => latest.current;
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    setSaved(latest.current);
    dispatch(patch);
  };

  /** The block variables the data actions send (see EventBookletVariablesWire). */
  const variables = (): EventBookletVariablesWire => {
    const s = m();
    return {
      In_EventId,
      In_EventName,
      IsFetchingData: s.isFetchingData,
      IsGuestView: s.isGuestView,
      IsSearchMode: s.isSearchMode,
      FiltersPopUp: s.filtersPopUp,
      HasFiltersApplied: s.hasFiltersApplied,
      SelectedFilters: selectedFiltersWire(s.selectedFilters),
      PaginationSettings: paginationWire(s.paginationSettings),
    };
  };

  /** Handle Error: AllExceptions of the Refresh* actions (SB :3386-3440 and the three others): a non-system exception
      sets IsFetchingData False and raises UnknownError with its message; a system one goes on as it is. */
  const asUnknownError = (e: unknown): never => {
    if (!isSystemException(e)) {
      set({ isFetchingData: false });
      throw new UserException(exceptionMessage(e), UNKNOWN_ERROR);
    }
    throw e;
  };

  /** "Fisnished fetching?" of the OnAfterFetch actions (SB :2229-2240, :3796-3806): the data source of the current view
      is fetched → IsFetchingData False. */
  const finishedFetching = () => {
    const s = m();
    if (s.isGuestView ? s.guestsFetched : s.helpersFetched) set({ isFetchingData: false });
  };

  /** SetCurrentView(SetGuestView) (SB :2641-2683): IsGuestView, CurrentFilters.IsGuest / IsHelper. */
  const setCurrentView = (setGuestView: boolean) => {
    set({
      isGuestView: setGuestView,
      currentFilters: { ...m().currentFilters, IsGuest: setGuestView, IsHelper: !setGuestView },
    });
  };

  /** ResetPaginationSettings(IsClearAll) (SB :2744-2844): both lists (with the scroll thresholds, MaxRows × 30) or only
      the current view's: MaxRows from the client variables BookletGuestsMaxRows / BookletHelpersMaxRows (read at each
      assignment, as compiled), page 1, new search, no "no results". */
  const resetPaginationSettings = (isClearAll: boolean) => {
    const p = { ...m().paginationSettings };
    const guestsMaxRows = () => getClientVar('Connect2_OrbitMobile_MUI.BookletGuestsMaxRows');
    const helpersMaxRows = () => getClientVar('Connect2_OrbitMobile_MUI.BookletHelpersMaxRows');
    const guests = () => {
      p.Guest_MaxRows = guestsMaxRows();
      p.Guest_PageNumber = 1;
      p.Guest_IsNewSearch = true;
      p.Guest_NoResults = false;
    };
    const helpers = () => {
      p.Helper_MaxRows = helpersMaxRows();
      p.Helper_PageNumber = 1;
      p.Helper_IsNewSearch = true;
      p.Helper_NoResults = false;
    };
    if (isClearAll) {
      guests();
      p.Guest_ScrollThreshold = guestsMaxRows() * 30;
      helpers();
      p.Helper_ScrollThreshold = helpersMaxRows() * 30;
    } else if (m().isGuestView) guests();
    else helpers();
    set({ paginationSettings: p });
  };

  /** ResetData(IsClearAll) (SB :3814-3904): every list, or the current view's lists. */
  const resetData = (isClearAll: boolean) => {
    const guests: Partial<Model> = {
      guests: [],
      lastFetchedGuests: [],
      guests_InvitedList: [],
      lastFetched_Guests_InvitedLocality: [],
      guests_HostingList: [],
      lastFetched_Guests_HostLocality: [],
    };
    const helpers: Partial<Model> = { helpers: [], lastFetchedHelpers: [] };
    if (isClearAll) set({ ...guests, ...helpers });
    else set(m().isGuestView ? guests : helpers);
  };

  /** HasFiltersApplied of the OnAfterFetch actions (SB :3604-3612, :3941-3949). */
  const filtersApplied = (f: SelectedFilters): boolean =>
    f.SearchTerm !== '' ||
    checkSelectedDates(f.DateRange) ||
    f.HelperRoles.length > 0 ||
    f.Countries.length > 0 ||
    f.Localities.length > 0;

  /** OnAfterFetch_GetLocalHelperRoles (SB :3778-3813): LocalHelperRoles = the aggregate's list; finished fetching. */
  const onAfterFetchGetLocalHelperRoles = (list: LocalHelperRole[]) => {
    set({ localHelperRoles: list });
    finishedFetching();
  };

  /** Refresh of the client aggregate GetLocalHelperRoles (SB :1902-1994, Max. Records 20, no sort): the shell's
      LocalHelperRole rows (getLocalHelperRoles sorts by Order; only looked up by JSON_Name here), then its OnAfterFetch. */
  const refreshGetLocalHelperRoles = async () => {
    await Promise.resolve();
    const list = getLocalHelperRoles(20);
    set({ helperRolesFetched: true });
    onAfterFetchGetLocalHelperRoles(list);
  };

  /** OnAfterFetch_GetEventBookletFilters (SB :2082-2278): EventInfo; AvailableFilters: IsGuest / IsHelper of the view,
      the event days unselected, (after fetching the roles when not yet) the helper roles with their labels, the
      countries and their localities (GroupName = country); finished fetching. */
  const onAfterFetchGetEventBookletFilters = async () => {
    const r = m().filtersResponse;
    const filters = r?.Filters ?? { EventDays: [], HelperRoles: [], Countries: [] };
    set({
      eventInfo: r?.EventInfo ?? EMPTY_EVENT_INFO,
      availableFilters: {
        ...m().availableFilters,
        IsGuest: m().isGuestView,
        IsHelper: !m().isGuestView,
        DateRange: filters.EventDays.map((d) => ({ DateGroup: d, IsSelected: false })),
      },
    });
    if (!m().helperRolesFetched) await refreshGetLocalHelperRoles();
    const roles = m().localHelperRoles;
    set({
      availableFilters: {
        ...m().availableFilters,
        HelperRoles: filters.HelperRoles.map((value) => ({
          Value: value,
          Label: getHelperRoleByJSON_Name(value, roles).Label,
          ImageUrlOrIconClass: '',
          GroupName: '',
          Description: '',
        })),
        Countries: filters.Countries.map((c) => ({
          Value: c.CountryName,
          Label: c.CountryName,
          ImageUrlOrIconClass: '',
          GroupName: '',
          Description: '',
        })),
        Localities: filters.Countries.flatMap((c) =>
          c.Localities.map((l) => ({
            Value: l,
            Label: l,
            ImageUrlOrIconClass: '',
            GroupName: c.CountryName,
            Description: '',
          })),
        ),
      },
    });
    finishedFetching();
  };

  /** OnAfterFetch_GetEventBookletGuests (SB :3528-3622): the page appended to the last fetched guests (all, invited
      localities, host localities), each grouped by country and locality; Guest_NoResults, Guest_IsNewSearch False,
      LastFilters_Guest, HasFiltersApplied; SetCurrentView(True); IsFetchingData False. */
  const onAfterFetchGetEventBookletGuests = () => {
    const s = m();
    const page = s.guestsResponse;
    const lastFetchedGuests = [...s.lastFetchedGuests, ...page];
    const invited = [...s.lastFetched_Guests_InvitedLocality, ...page.filter((p) => !p.IsHostLocality)];
    const hosting = [...s.lastFetched_Guests_HostLocality, ...page.filter((p) => p.IsHostLocality)];
    const guests = groupMembersByCountry(lastFetchedGuests);
    set({
      lastFetchedGuests,
      lastFetched_Guests_InvitedLocality: invited,
      lastFetched_Guests_HostLocality: hosting,
      guests,
      guests_InvitedList: groupMembersByCountry(invited),
      guests_HostingList: groupMembersByCountry(hosting),
      paginationSettings: { ...s.paginationSettings, Guest_NoResults: guests.length === 0, Guest_IsNewSearch: false },
      lastFilters_Guest: s.selectedFilters,
      hasFiltersApplied: filtersApplied(s.selectedFilters),
    });
    setCurrentView(true);
    set({ isFetchingData: false });
  };

  /** OnAfterFetch_GetEventBookletHelpers (SB :3905-3990): the page appended to the last fetched helpers, grouped by
      role; Helper_NoResults, Helper_IsNewSearch False, LastFilters_Helpers, HasFiltersApplied; SetCurrentView(False);
      IsFetchingData False. */
  const onAfterFetchGetEventBookletHelpers = () => {
    const s = m();
    const lastFetchedHelpers = [...s.lastFetchedHelpers, ...s.helpersResponse];
    const helpers = groupHelpersByRole(lastFetchedHelpers);
    set({
      lastFetchedHelpers,
      helpers,
      paginationSettings: {
        ...s.paginationSettings,
        Helper_NoResults: helpers.length === 0,
        Helper_IsNewSearch: false,
      },
      lastFilters_Helpers: s.selectedFilters,
      hasFiltersApplied: filtersApplied(s.selectedFilters),
    });
    setCurrentView(false);
    set({ isFetchingData: false });
  };

  /** RefreshHelperRoles (SB :3195-3249): IsFetchingData True, refresh GetLocalHelperRoles. */
  const refreshHelperRoles = async () => {
    set({ isFetchingData: true });
    try {
      await refreshGetLocalHelperRoles();
    } catch (e) {
      asUnknownError(e);
    }
  };

  /** RefreshEventFilters (SB :3623-3677): IsFetchingData True, refresh Get_EventBookletFilters. */
  const refreshEventFilters = async () => {
    set({ isFetchingData: true });
    try {
      const response = await getEventBookletFilters(variables());
      set({ filtersFetched: true, filtersResponse: response });
      await onAfterFetchGetEventBookletFilters();
    } catch (e) {
      asUnknownError(e);
    }
  };

  /** RefreshEventGuests (SB :3386-3440): IsFetchingData True, refresh Get_EventBookletGuests. */
  const refreshEventGuests = async () => {
    set({ isFetchingData: true });
    try {
      const response = await getEventBookletGuests(variables());
      set({ guestsFetched: true, guestsResponse: response });
      onAfterFetchGetEventBookletGuests();
    } catch (e) {
      asUnknownError(e);
    }
  };

  /** RefreshEventHelpers (SB :2279-2333): IsFetchingData True, refresh Get_EventBookletHelpers. */
  const refreshEventHelpers = async () => {
    set({ isFetchingData: true });
    try {
      const response = await getEventBookletHelpers(variables());
      set({ helpersFetched: true, helpersResponse: response });
      onAfterFetchGetEventBookletHelpers();
    } catch (e) {
      asUnknownError(e);
    }
  };

  /** Runs a client action flow; an exception goes to the flow's handler (Legacy_OrbitEventsFlow handleError). */
  const run = (flow: () => Promise<void> | void): void => {
    void (async () => {
      try {
        await flow();
      } catch (e) {
        raiseToFlowHandler(e);
      }
    })();
  };

  /* OnInitialize (SB :2957-3010) and OnReady (SB :3121-3194), before paint as when the block mounts. Not restored:
     SetCurrentView(True), ResetData(True); then SetBookletMaxRows, ResetPaginationSettings(True) and the three
     refreshes, each in its own setTimeout 0 (RefreshHelperRoles_Async, RefreshEventFilters_Async,
     RefreshEventGuests_Async, SB :4183-4197). A view restored from the cache does neither (P-BACK). */
  const started = useRef(false);
  useLayoutEffect(() => {
    if (started.current) return;
    started.current = true;
    if (restored && saved) return;
    setCurrentView(true);
    resetData(true);
    run(async () => {
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
    });
    // OnInitialize / OnReady run once (the view cache restores the same instance state).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** OnClick_ViewSwap(IsGuestButton) (SB :2484-2581): nothing while fetching or for the current view; else
      SetCurrentView and, when the view "needs data fetch" (its list is empty or LastFilters_* <> SelectedFilters:
      the compiled `!==` compares two record wrappers, always different, OutSystems.js getComplexProperty), reset its
      pagination and data and refresh it. */
  const onClickViewSwap = (isGuestButton: boolean) => {
    run(async () => {
      const s = m();
      if (s.isFetchingData) return;
      if (isGuestButton === s.isGuestView) return;
      setCurrentView(isGuestButton);
      // Needs data fetch? always (see above), so no list check.
      resetPaginationSettings(false);
      resetData(false);
      if (m().isGuestView) await refreshEventGuests();
      else await refreshEventHelpers();
    });
  };

  /** ToggleSearchMode(ForceSearchMode, ForceBlurOnInput) (SB :2582-2640): only once the helper roles and the filters
      are fetched; IsSearchMode kept when forced, else toggled; with ForceBlurOnInput, FocusOnInput(Input_SearchTerm). */
  const toggleSearchMode = (forceSearchMode: boolean, forceBlurOnInput: boolean) => {
    const s = m();
    if (!(s.helperRolesFetched && s.filtersFetched)) return;
    set({ isSearchMode: forceSearchMode ? s.isSearchMode : !s.isSearchMode });
    if (forceBlurOnInput) focusOnInput(inputId);
  };

  /** ToggleFiltersPopUp (SB :3091-3120): only once the helper roles and the filters are fetched. */
  const toggleFiltersPopUp = () => {
    const s = m();
    if (s.helperRolesFetched && s.filtersFetched) set({ filtersPopUp: !s.filtersPopUp });
  };

  /** OnClick_ClearSearch (SB :2926-2956): both search terms "", FocusOnInput. */
  const onClickClearSearch = () => {
    set({
      currentFilters: { ...m().currentFilters, SearchTerm: '' },
      selectedFilters: { ...m().selectedFilters, SearchTerm: '' },
    });
    focusOnInput(inputId);
  };

  /** OnKeyUp_SearchTerm (SB :3011-3090): on Enter (CheckForEnterKey, SB :4176-4182), SelectedFilters.SearchTerm =
      CurrentFilters.SearchTerm, reset the view's pagination and data, BlurInput, refresh the view. */
  const onKeyUpSearchTerm = (isEnterKey: boolean) => {
    run(async () => {
      if (!isEnterKey) return;
      set({ selectedFilters: { ...m().selectedFilters, SearchTerm: m().currentFilters.SearchTerm } });
      resetPaginationSettings(false);
      resetData(false);
      blurInput(inputId);
      if (m().isGuestView) await refreshEventGuests();
      else await refreshEventHelpers();
    });
  };

  /** OnClick_SelectedFilters (SB :3501-3527): ToggleSearchMode(True, False), ToggleFiltersPopUp. */
  const onClickSelectedFilters = () => {
    toggleSearchMode(true, false);
    toggleFiltersPopUp();
  };

  /** ClearAllFilters (SB :3312-3385): CurrentFilters and SelectedFilters back to empty records, ResetData(True),
      ResetPaginationSettings(True), refresh the view. */
  const clearAllFilters = () => {
    run(async () => {
      set({ currentFilters: EMPTY_CURRENT_FILTERS, selectedFilters: EMPTY_SELECTED_FILTERS });
      resetData(true);
      resetPaginationSettings(true);
      if (m().isGuestView) await refreshEventGuests();
      else await refreshEventHelpers();
    });
  };

  /** OnHandle_ApplyFilters(Event_SelectedFilters) (SB :2334-2483): both or neither of Guests / Helpers → the filters
      are rebuilt (OnAfterFetch_GetEventBookletFilters) and "The chosen filters were invalid, filters have been reset."
      (Info); else SelectedFilters from the popup (search term kept; roles, countries, localities as their values; the
      selected days or none), SetCurrentView, ResetPaginationSettings / ResetData of that view, close the popup, refresh
      helpers or guests, then CurrentFilters = the popup's filters. */
  const onHandleApplyFilters = (f: PopupFilters) => {
    run(async () => {
      if ((!f.IsGuest && !f.IsHelper) || (f.IsGuest && f.IsHelper)) {
        await onAfterFetchGetEventBookletFilters();
        showFeedbackMessage('The chosen filters were invalid, filters have been reset.', INFO);
        return;
      }
      const selectedDates = f.DateRange.filter((d) => d.IsSelected === true);
      set({
        selectedFilters: {
          SearchTerm: m().currentFilters.SearchTerm,
          HelperRoles: f.HelperRoles.map((o) => o.Value ?? ''),
          DateRange: selectedDates,
          Countries: f.Countries.map((o) => o.Value ?? ''),
          Localities: f.Localities.map((o) => o.Value ?? ''),
        },
      });
      setCurrentView(f.IsGuest);
      resetPaginationSettings(false);
      resetData(false);
      toggleFiltersPopUp();
      if (f.IsHelper) await refreshEventHelpers();
      else if (f.IsGuest) await refreshEventGuests();
      set({
        currentFilters: {
          ...m().currentFilters,
          IsHelper: f.IsHelper,
          IsGuest: f.IsGuest,
          DateRange: f.DateRange,
          HelperRoles: f.HelperRoles,
          Countries: f.Countries,
          Localities: f.Localities,
        },
      });
    });
  };

  /** OnScrollEnding_Guests (SB :3441-3500): in the guest view, not fetching, a full last page and a last answer with
      rows → next page (not a new search), RefreshEventGuests. */
  const onScrollEndingGuests = async () => {
    const s = m();
    if (!(s.isGuestView && !s.isFetchingData)) return;
    const p = s.paginationSettings;
    if (s.lastFetchedGuests.length < p.Guest_PageNumber * p.Guest_MaxRows) return;
    if (!(s.guestsFetched && s.guestsResponse.length > 0)) return;
    set({ paginationSettings: { ...p, Guest_PageNumber: p.Guest_PageNumber + 1, Guest_IsNewSearch: false } });
    await refreshEventGuests();
  };

  /** OnScrollEnding_Helpers (SB :2684-2743): the same for the helper view. */
  const onScrollEndingHelpers = async () => {
    const s = m();
    if (!(!s.isGuestView && !s.isFetchingData)) return;
    const p = s.paginationSettings;
    if (s.lastFetchedHelpers.length < p.Helper_PageNumber * p.Helper_MaxRows) return;
    if (!(s.helpersFetched && s.helpersResponse.length > 0)) return;
    set({ paginationSettings: { ...p, Helper_PageNumber: p.Helper_PageNumber + 1, Helper_IsNewSearch: false } });
    await refreshEventHelpers();
  };

  /** OnHandle_ComponentDidMount(In_ListId) (SB :2845-2925): a first page lower than the content → the view's scroll
      ending. */
  const onHandleComponentDidMount = (listId: string) => {
    run(async () => {
      const s = m();
      const page = s.isGuestView ? s.paginationSettings.Guest_PageNumber : s.paginationSettings.Helper_PageNumber;
      if (!determineIfNeedsNewFetch(listId, page)) return;
      if (s.isGuestView) await onScrollEndingGuests();
      else await onScrollEndingHelpers();
    });
  };

  /** OnHandle_ClickedMember(HouseholdId, Type) (SB :3678-3777): while fetching "Please wait until all data has
      finished loading" (Info); a set id → CheckDirectoryAccess: NavigateTo_HouseholdDetail then
      OnApplicationEvent_ViewHousehold, or App_Subscription_ShowUpgradePopUp. */
  const onHandleClickedMember = (householdId: string) => {
    run(async () => {
      if (m().isFetchingData) {
        showFeedbackMessage('Please wait until all data has finished loading', INFO);
        return;
      }
      if (householdId === '' || householdId === '0') return;
      const hasAccess = await checkDirectoryAccess(householdId, DirectoryAPIFilter.Member);
      if (hasAccess) {
        props.onNavigateToHouseholdDetail(householdId);
        onApplicationEvent_ViewHousehold(householdId, m().eventInfo.EventId);
      } else {
        await showUpgradePopUp();
      }
    });
  };

  /** OnHandle_BackNavigation(BackNavigationEvent) (SB :3250-3311): an open popup → PreventNavigation and close it;
      else search mode → PreventNavigation and leave search mode; else the back navigation goes on. PreventNavigation
      (NavigationHandler) = preventDefault (and stopPropagation of the DOM event). */
  const onHandleBackNavigation = (event: BackNavigationEvent) => {
    const s = m();
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

  const s = state;
  const p = s.paginationSettings;
  const fetchedFilterData = s.helperRolesFetched && s.filtersFetched;

  /** A member row of a list (SB :1038-1090 and the two other lists). */
  const memberRow = (member: EventBookletMember, key: string) => (
    <EventBooklet_MembersItem
      id={`${prefix}-${key}`}
      memberItem={member}
      onClickHost={() => {
        onHandleClickedMember(member.HostHouseholderId);
      }}
      onClickMember={() => {
        onHandleClickedMember(member.HouseholderId);
      }}
    />
  );

  /** A locality group: the location pill and its members (SB :970-1092). */
  const localityGroup = (g: BookletMembersByLocality, key: string, pillAlias: number, memberAlias: number) => (
    <div className="orbit-booklet-list-cont" data-container="">
      <div className="orbit-booklet-location-pill-cont" data-container="">
        <HostSurvey_PillItem
          id={`${prefix}-${key}-$b${String(pillAlias)}`}
          inIsSmallIcon
          inExtendedClass="orbit-booklet-location-pill"
          inPillText={pillText(g)}
          inIconClass="orbit-icon-location text-neutral-7"
        />
      </div>
      <OSList
        className="list list-group orbit-booklet-list-members"
        animateItems
        disableVirtualization
        source={g.Members}
        keyOf={(x: EventBookletMember) => x.MemberId}
      >
        {(x, j) => memberRow(x, `${key}-l${String(memberAlias)}_${String(j)}-$b${String(memberAlias)}`)}
      </OSList>
    </div>
  );

  /** A sticky list header (SB :756-794): `orbit-booklet-list-header-sticky-cont` > EventBooklet_ListHeader. */
  const stickyHeader = (alias: number, title: string) => (
    <div className="orbit-booklet-list-header-sticky-cont" data-container="">
      <EventBooklet_ListHeader
        id={`${prefix}-$b${String(alias)}`}
        placeholderTitle={<span data-expression="">{title}</span>}
      />
    </div>
  );

  const skeleton = (alias: number) => (
    <Skeleton_Loading id={`${prefix}-$b${String(alias)}`} inSkeletonLoadingId={OrbitSkeletonLoading.EventBooklet} />
  );

  /** NoResults of a view (SB :816-866, :1375-1427). */
  const noResults = (alias: number, lastFilters: SelectedFilters, nothingAllocated: string) => (
    <NoResults
      id={`${prefix}-$b${String(alias)}`}
      placeholderTitle={
        <span data-expression="">
          {s.hasFiltersApplied
            ? lastFilters.SearchTerm !== ''
              ? `No results for '${lastFilters.SearchTerm}'.`
              : 'No results.'
            : 'No results.'}
        </span>
      }
      placeholderMessage={
        <span data-expression="">
          {s.hasFiltersApplied
            ? 'Make sure that all words are spelled correctly, or refine your search terms.'
            : nothingAllocated}
        </span>
      }
    />
  );

  /** A guest list of locality groups (SB :918-1094, :1105-1282). */
  const guestList = (name: string, source: BookletMembersByLocality[], l: number) => (
    <>
      <OSList
        id={`${prefix}-${name}`}
        className="list list-group orbit-booklet-main-list"
        animateItems
        disableVirtualization
        infiniteScrollThreshold={p.Guest_ScrollThreshold}
        onScrollEnding={() => {
          run(onScrollEndingGuests);
        }}
        source={source}
        keyOf={(g: BookletMembersByLocality) => `${g.Country}|${g.Locality}`}
      >
        {(g, i) => localityGroup(g, `l${String(l)}_${String(i)}`, l === 1 ? 10 : 12, l === 1 ? 11 : 13)}
      </OSList>
      <OnListMounted
        onMount={() => {
          onHandleComponentDidMount(`${prefix}-${name}`);
        }}
      />
    </>
  );

  /** The guest view (SB :754-1312). */
  const guestView =
    s.isFetchingData && p.Guest_IsNewSearch ? (
      <>
        {stickyHeader(6, 'Guest Name')}
        {skeleton(7)}
      </>
    ) : !p.Guest_IsNewSearch ? (
      <>
        {p.Guest_NoResults ? (
          noResults(
            8,
            s.lastFilters_Guest,
            'There are no guests allocated to this event. Please check again later or contact the Orbit Helpdesk if you have any questions.',
          )
        ) : (
          <>
            {stickyHeader(9, 'Guest Name')}
            <div
              className="margin-top-s margin-bottom-s padding-left-base font-size-xs font-semi-bold"
              data-container=""
              id={`${prefix}-InviteList`}
            >
              Invite List
            </div>
            {guestList('List_Guests_InvitedLocality', s.guests_InvitedList, 1)}
            {s.guests_HostingList.length > 0 && (
              <div
                className="margin-top-s margin-bottom-s padding-left-base font-size-xs font-semi-bold"
                data-container=""
                id={`${prefix}-HostList`}
              >
                Host Localities
              </div>
            )}
            {guestList('List_Guests_HostingLocality', s.guests_HostingList, 2)}
          </>
        )}
        {s.isFetchingData && skeleton(14)}
      </>
    ) : null;

  /** The helper view (SB :1313-1716). */
  const helperView =
    s.isFetchingData && p.Helper_IsNewSearch ? (
      <>
        {stickyHeader(15, 'Helper')}
        {skeleton(16)}
      </>
    ) : !p.Helper_IsNewSearch ? (
      <>
        {p.Helper_NoResults ? (
          noResults(
            17,
            s.lastFilters_Helpers,
            'There are no helpers allocated to this event. Please check again later or contact the Orbit Helpdesk if you have any questions.',
          )
        ) : (
          <>
            <OSList
              id={`${prefix}-List_Helpers`}
              className="list list-group orbit-booklet-main-list"
              animateItems
              disableVirtualization
              infiniteScrollThreshold={p.Helper_ScrollThreshold}
              onScrollEnding={() => {
                run(onScrollEndingHelpers);
              }}
              source={s.helpers}
              keyOf={(r: BookletMembersByRole) => r.Role}
            >
              {(r, i) => (
                <div data-container="">
                  <div className="orbit-booklet-list-header-sticky-cont" data-container="">
                    <EventBooklet_ListHeader
                      id={`${prefix}-l3_${String(i)}-$b18`}
                      placeholderTitle={
                        <span data-expression="">{getHelperRoleByJSON_Name(r.Role, s.localHelperRoles).Label}</span>
                      }
                    />
                  </div>
                  <OSList
                    className="list list-group orbit-booklet-secondary-list"
                    animateItems
                    disableVirtualization
                    source={r.MembersByLocality}
                    keyOf={(g: BookletMembersByLocality) => `${g.Country}|${g.Locality}`}
                  >
                    {(g, k) => localityGroup(g, `l3_${String(i)}-l4_${String(k)}`, 19, 20)}
                  </OSList>
                </div>
              )}
            </OSList>
            <OnListMounted
              onMount={() => {
                onHandleComponentDidMount(`${prefix}-List_Helpers`);
              }}
            />
          </>
        )}
        {s.isFetchingData && skeleton(21)}
      </>
    ) : null;

  const showFiltersApplied =
    s.hasFiltersApplied &&
    (s.isGuestView ? s.guests.length > 0 || p.Guest_NoResults : s.helpers.length > 0 || p.Helper_NoResults);

  const title = s.isSearchMode ? (
    <InputWithIcon
      id={`${prefix}-$b3`}
      alignIconRight={false}
      icon={
        s.currentFilters.SearchTerm === '' && <i className="icon orbit-icon-search fa fa-flag fa-1x" data-icon="" />
      }
      input={
        <InputWithIcon
          id={`${prefix}-$b4`}
          alignIconRight
          icon={
            s.currentFilters.SearchTerm !== '' && (
              <i className="icon orbit-icon-cross fa fa-rocket fa-1x" data-icon="" onClick={onClickClearSearch} />
            )
          }
          input={
            <input
              aria-required="false"
              autoComplete="off"
              className="form-control OSFillParent"
              data-input=""
              id={inputId}
              maxLength={50}
              placeholder="Search guest or host name"
              type="search"
              value={s.currentFilters.SearchTerm}
              onChange={(e) => {
                set({ currentFilters: { ...m().currentFilters, SearchTerm: e.target.value } });
              }}
              onKeyUp={(e) => {
                onKeyUpSearchTerm(e.key === 'Enter'); // CheckForEnterKey: event.keyCode == 13
              }}
            />
          }
        />
      }
    />
  ) : (
    <>
      <div className="font-size-s bold text-align-center" data-container="">
        Event Guest List
      </div>
      <div className="font-size-base text-align-center" data-container="">
        <span data-expression="">{s.eventInfo.EventName !== '' ? s.eventInfo.EventName : In_EventName}</span>
      </div>
    </>
  );

  return (
    <OSBlock name="Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet" id={id}>
      <Layout_Orbit
        id={`${prefix}-$b1`}
        customClass="orbit-detail orbit-header-center"
        extendedClasses="orbit-booklet"
        menu={<div id={`${prefix}-Menu`}>{props.menu}</div>}
        headerLeft={<MenuIcon__UpdatedOSUI id={`${prefix}-$b2`} menuAction={MENU_ACTION_AUTO} />}
        title={title}
        headerRight={
          <div className={`flex-center-all${fetchedFilterData ? '' : ' opacity-0-50'}`} data-container="">
            {!s.isSearchMode && (
              <i
                className="icon orbit-icon-search fa fa-flag fa-1x"
                data-icon=""
                onClick={() => {
                  toggleSearchMode(false, true);
                }}
              />
            )}
            <i className="icon orbit-icon-filter fa fa-flag fa-1x" data-icon="" onClick={toggleFiltersPopUp} />
          </div>
        }
        headerContent={
          <>
            <div className="orbit-double-button-cont" data-container="">
              <div className="orbit-double-button-border-cont" data-container="">
                <div
                  className={`orbit-double-button-btn${s.isGuestView ? ' orbit-double-button-btn-active' : ''}`}
                  data-container=""
                  onClick={() => {
                    onClickViewSwap(true);
                  }}
                >
                  Guests
                </div>
                <div
                  className={`orbit-double-button-btn${s.isGuestView ? '' : ' orbit-double-button-btn-active'}`}
                  data-container=""
                  onClick={() => {
                    onClickViewSwap(false);
                  }}
                >
                  Helpers
                </div>
              </div>
            </div>
            {showFiltersApplied && (
              <DoubleAction
                id={`${prefix}-$b5`}
                extendedClass="orbit-border-background"
                placeholderLeft={
                  <span
                    className="color-orbit-primary-7 bold font-size-s"
                    data-expression=""
                    onClick={onClickSelectedFilters}
                  >
                    Filters Applied
                  </span>
                }
                placeholderRight={
                  <span className="font-size-s text-neutral-10" data-expression="" onClick={clearAllFilters}>
                    Clear All
                  </span>
                }
              />
            )}
          </>
        }
        content={
          <>
            {s.isGuestView && guestView}
            {!s.isGuestView && helperView}
          </>
        }
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`}>{props.commonUIElements}</div>}
      />
      <BookletPopup showPopup={s.filtersPopUp}>
        <PopUp_OrbitBookletFilters
          id={`${prefix}-$b22`}
          currentFilters={{
            IsGuest: s.currentFilters.IsGuest,
            IsHelper: s.currentFilters.IsHelper,
            DateRange: s.currentFilters.DateRange,
            HelperRoles: s.currentFilters.HelperRoles,
            Countries: s.currentFilters.Countries,
            Localities: s.currentFilters.Localities,
          }}
          availableFilters={s.availableFilters}
          onClosePopUp={toggleFiltersPopUp}
          onApplyFilters={onHandleApplyFilters}
        />
      </BookletPopup>
      <BackNavigationHandler id={`${prefix}-$b23`} onBackNavigation={onHandleBackNavigation} />
      <Dialog_AccessRestrictedAction_Legacy id={`${prefix}-FreeSubscriptionAlert`} scope={`${prefix}-b24`} />
    </OSBlock>
  );
}
