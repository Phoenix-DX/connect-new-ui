import { useEffect, useRef, useState } from 'react';
import {
  fetchSearchResults,
  useSearchBirthdayOptionsQuery,
  type SearchBirthdayOption,
  type SearchResult,
  type SearchVariables,
} from '@/api/search';
import type { Filter_Common_Control_List } from '@/components/filter/FilterSheet';
import {
  NotRegisteredException,
  UserException,
  exceptionMessage,
  isInstanceOf,
  isSystemException,
  isUserException,
  raiseToFlowHandler,
} from '@/legacy/os/exceptions';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { setPreloadObject, useFlowState, useOsNavigate } from '@/platform/navigation';
import { getClientVar } from '@/platform/session/session';
import {
  type ConnectSearch_RecentClickedResults,
  type ConnectSearch_RecentSearchTerm,
  deleteConnectSearch_RecentSearchTerm,
  getAllSearchRecentClickedResultsByUserId,
  get_RecentClickedResults,
  get_RecentSearchTerms,
  removeAllRecentSearch,
  saveRecentClickedResult,
  saveRecentSearchTerm,
} from '@/platform/storage/localEntities';
import { Connect_Entity } from '@/lib/ubtConnectUtils/staticEntities';
import type { Tag } from '@/components/ui/HorizontalTagList';
import {
  INITIAL_SEARCH_STATE,
  recentAsResult,
  searchReducer,
  selectedCategoryOf,
  validateSearchPhoneNumber,
  type SearchState,
} from './searchState';

/** The input parameters of ScreenBlock_Search. The Search screen gives none: each keeps its default. */
export interface SearchInputs {
  /** In_IsInScreenSearch: the block is inside another screen (no navigation handler, no bottom bar). */
  inIsInScreenSearch: boolean;
  /** In_IsEventNavigation: a result click raises Event_SearchResultClick instead of navigating. */
  inIsEventNavigation: boolean;
  /** In_SearchTargetId: the target of the recent searches (Type_SearchTarget). */
  inSearchTargetId: string;
}

/** The inputs of the block on the Search screen. */
export const SEARCH_SCREEN_INPUTS: SearchInputs = {
  inIsInScreenSearch: false,
  inIsEventNavigation: false,
  inSearchTargetId: '',
};

/** The events of ScreenBlock_Search. */
export interface SearchEvents {
  /** Event Event_SearchResultClick(SearchResult). */
  onEventSearchResultClick?: (searchResult: SearchResult) => void;
}

/** The feature flags that the block reads. The page reads them (rule 4) and gives them here. */
export interface SearchFlags {
  /** C2EnableSearchByBirthday (Connect_OutSystems_PermissionCheck, default-only, on). */
  birthdaySearch: boolean;
  /** C2EnableCarousel (GetHasCarouselEnabled, default-only, on): a household result opens the carousel. */
  carousel: boolean;
}

/** The variables of the filter sheet that the view cache does not keep. */
export interface SearchFilterSheetState {
  /** [BottomSheetId_Filter] The widget id of the filter sheet (Event_FilterBottomSheet_tInitialized). */
  bottomSheetId: string;
  /** [BottomSheetId_Filter_IsLoaded] */
  isLoaded: boolean;
  /** [BottomSheetId_Filter_ShowSubscriptionOnClick] */
  showSubscriptionOnClick: boolean;
}

/** What the SearchView renders and the handlers of its events. */
export interface SearchFlows {
  /** The block variables that the view cache keeps. */
  state: SearchState;
  filterSheet: SearchFilterSheetState;
  /** [isBirthdaySearchEnabled] Set on OnReady from the C2EnableSearchByBirthday check. */
  isBirthdaySearchEnabled: boolean;
  /** Get_SearchBirthdayOptions (empty until fetched). */
  birthdayOptions: SearchBirthdayOption[];
  /** Get_RecentClickedResults. */
  recentClicked: ConnectSearch_RecentClickedResults[];
  /** Get_RecentSearchTerms. */
  recentTerms: ConnectSearch_RecentSearchTerm[];
  /** InputEvent_OnChange. */
  onChange: (text: string) => void;
  /** InputEvent_Submit. */
  onSubmit: (text: string) => void;
  /** InputEvent_ClearString. */
  onClearString: () => void;
  /** Event_HorizontalTagListChanged. */
  onTagListChanged: (tagList: Tag[]) => void;
  /** OnClick_RecentSearchTerm, also the Selected event of Search_BirthdayOptions: search the term. */
  onRecentSearchTerm: (term: string) => void;
  /** OnClick_RecentSearchTerm_Remove, with the Id of the row. */
  onRecentSearchTermRemove: (termId: string) => void;
  /** OnClick_RecentSearch_RemoveAll ("Clear all"). */
  onRecentSearchRemoveAll: () => void;
  /** Event_SectionOnItemClick of a recent clicked result. */
  onRecentResultClick: (recent: ConnectSearch_RecentClickedResults) => void;
  /** Event_SectionOnItemClick of a result of the three sections. */
  onResultClick: (searchResult: SearchResult) => void;
  /** Event_FilterBottomSheet_tInitialized (SheetInitialized of FilterSheet). */
  onFilterSheetInitialized: (sheetId: string) => void;
  /** Handler_FilterSheetLoaded (Loaded of FilterSheet). */
  onFilterSheetLoaded: (showSubscriptionOnClick: boolean) => void;
  /** Event_ApplyFilters (ApplyFilters of FilterSheet), with the option lists and the title of the country list. */
  onApplyFilters: (optionLists: Filter_Common_Control_List[], countriesTitle: string, hasFilters: boolean) => void;
}

/** The flows of the search block ScreenBlock_Search (the block controller).
    - OnInitialize: TagList = SearchCategory_GetList, SelectedCategory All (`INITIAL_SEARCH_STATE`). The view cache
      restores the block variables after a back navigation.
    - OnReady: isBirthdaySearchEnabled = the C2EnableSearchByBirthday check; when True, Refresh
      Get_SearchBirthdayOptions.
    - Get_RecentClickedResults and Get_RecentSearchTerms: client-entity aggregates fetched at start and refreshed with
      the variables of that moment (shell adapter, CR-Search-1).
    - Action_RefreshSearch: saves the term, clears the results, then FetchSearchResults. A newer search makes the answer
      of an older one ignored.
    - Event_SectionOnItemClick: saves the clicked result, then raises Event_SearchResultClick or navigates
      (Locality_Details, the HouseholdCarousel or HouseholdDetails).
    @origin UBTConnect.Directory_Search.ScreenBlock_Search */
export function useSearch(inputs: SearchInputs, flags: SearchFlags, events: SearchEvents = {}): SearchFlows {
  const navigate = useOsNavigate();
  const {
    state,
    dispatch,
    latest,
    parameters,
    events: eventsRef,
  } = useFlowState({
    viewName: 'Directory_Search.ScreenBlock_Search',
    reducer: searchReducer,
    initial: INITIAL_SEARCH_STATE,
    parameters: inputs,
    events,
  });
  const [filterSheet, setFilterSheet] = useState<SearchFilterSheetState>({
    bottomSheetId: '',
    isLoaded: false,
    showSubscriptionOnClick: false,
  });
  const [isBirthdaySearchEnabled, setIsBirthdaySearchEnabled] = useState(false);
  const fetchSeq = useRef(0);

  // OnReady: isBirthdaySearchEnabled = permission check; when True, Refresh Get_SearchBirthdayOptions.
  useEffect(() => {
    let alive = true;
    void Promise.resolve().then(() => {
      if (alive) setIsBirthdaySearchEnabled(flags.birthdaySearch);
    });
    return () => {
      alive = false;
    };
  }, [flags.birthdaySearch]);
  const birthdayOptions = useSearchBirthdayOptionsQuery(isBirthdaySearchEnabled);

  const { inSearchTargetId } = inputs;
  const variables = (o: Partial<SearchVariables> = {}): SearchVariables => {
    const v = latest.current;
    return {
      searchKeyCurrent: v.searchKeyCurrent,
      searchKeyLastSearched: v.searchKeyLastSearched,
      hasSearched: v.hasSearched,
      selectedCategory: v.selectedCategory,
      selectedCountryIds: v.selectedCountryIds,
      bottomSheetIdFilter: filterSheet.bottomSheetId,
      bottomSheetIdFilterIsLoaded: filterSheet.isLoaded,
      bottomSheetIdFilterShowSubscriptionOnClick: filterSheet.showSubscriptionOnClick,
      hasFiltersApplied: v.hasFiltersApplied,
      isBirthdayKeyWord: v.isBirthdayKeyWord,
      isBirthdaySearchEnabled,
      inSearchTargetId: parameters.current.inSearchTargetId,
      ...o,
    };
  };

  const [recentClicked, setRecentClicked] = useState<ConnectSearch_RecentClickedResults[]>([]);
  const [recentTerms, setRecentTerms] = useState<ConnectSearch_RecentSearchTerm[]>([]);
  const refreshRecent = (key: string, lastSearched: string, category: string) => {
    const target = parameters.current.inSearchTargetId;
    void get_RecentClickedResults(target, key, category).then(setRecentClicked);
    void get_RecentSearchTerms(target, key, lastSearched).then(setRecentTerms);
  };
  // The recent lists at start, with the variables of the first render (a restored view has its saved ones).
  const initialRecent = useRef({
    key: state.searchKeyCurrent,
    lastSearched: state.searchKeyLastSearched,
    category: state.selectedCategory,
  });
  useEffect(() => {
    const { key, lastSearched, category } = initialRecent.current;
    let alive = true;
    void get_RecentClickedResults(inSearchTargetId, key, category).then((list) => {
      if (alive) setRecentClicked(list);
    });
    void get_RecentSearchTerms(inSearchTargetId, key, lastSearched).then((list) => {
      if (alive) setRecentTerms(list);
    });
    return () => {
      alive = false;
    };
  }, [inSearchTargetId]);

  // Action_ClearResults: refresh the recent lists, clear the three lists, HasSearched False.
  const clearResults = (key: string, lastSearched: string, category: string) => {
    refreshRecent(key, lastSearched, category);
    dispatch({ type: 'resultsCleared' });
  };

  // Action_RefreshSearch.
  const refreshSearch = async (next: SearchVariables, tags: Tag[]) => {
    if (next.searchKeyCurrent.trim() === '') return; // Has Search Term, else End
    // CheckIfSearchtermAlreadyExist + CreateOrUpdateConnectSearch_RecentSearchTerm, then Action_ClearResults
    await saveRecentSearchTerm(parameters.current.inSearchTargetId, next.searchKeyCurrent);
    clearResults(next.searchKeyCurrent, next.searchKeyLastSearched, next.selectedCategory);
    dispatch({ type: 'searchStarted', searchKey: next.searchKeyCurrent });
    const seq = ++fetchSeq.current;
    try {
      const results = await fetchSearchResults(
        { ...next, hasSearched: true, searchKeyLastSearched: next.searchKeyCurrent },
        tags,
        true,
      );
      if (seq !== fetchSeq.current) return;
      // OnAfterFetch_FetchSearchResults.
      dispatch({ type: 'resultsFetched', results, selectedCategory: next.selectedCategory });
    } catch (error) {
      if (seq !== fetchSeq.current) return;
      if (isInstanceOf(error, NotRegisteredException)) {
        raiseToFlowHandler(error); // Raise Error: NotRegistered
      } else if (isUserException(error, 'UBTConnect.BubbleCommunicationException')) {
        clearResults(next.searchKeyCurrent, next.searchKeyCurrent, next.selectedCategory); // Action_ClearResults3
        dispatch({ type: 'loadingEnded' });
        raiseToFlowHandler(new UserException(exceptionMessage(error), 'UBTConnect.BubbleCommunicationException'));
      } else if (!isSystemException(error)) {
        clearResults(next.searchKeyCurrent, next.searchKeyCurrent, next.selectedCategory); // Action_ClearResults2
        dispatch({ type: 'loadingEnded' });
        raiseToFlowHandler(new UserException(exceptionMessage(error), 'UBTConnect.BubbleGenericException'));
      } else {
        raiseToFlowHandler(error);
      }
    }
  };

  // InputEvent_OnChange: SearchKey_Current, isBirthdayKeyWord, refresh the recent lists.
  const onChange = (text: string) => {
    dispatch({ type: 'inputChanged', text });
    refreshRecent(text, latest.current.searchKeyLastSearched, latest.current.selectedCategory);
  };
  // InputEvent_Submit: ValidateSearchPhoneNumber, then Action_RefreshSearch or FeedbackMessage_AutoClose.
  const onSubmit = (text: string) => {
    dispatch({ type: 'searchKeySet', text });
    const validation = validateSearchPhoneNumber(text);
    if (validation.isValid) {
      void refreshSearch(variables({ searchKeyCurrent: text }), latest.current.tagList);
      return;
    }
    feedbackMessageAutoClose({
      title: '',
      message: validation.errorMessage,
      messageType: 'error',
      encodedHtml: true,
      extendedClass: '',
      delayMs: 0,
      useDebounce: false,
    });
  };
  // OnClick_RecentSearchTerm, also Search_BirthdayOptions Selected: search the term.
  const onRecentSearchTerm = (term: string) => {
    dispatch({ type: 'searchKeySet', text: term });
    void refreshSearch(variables({ searchKeyCurrent: term }), latest.current.tagList);
  };
  // OnClick_RecentSearchTerm_Remove: delete the row, refresh Get_RecentSearchTerms.
  const onRecentSearchTermRemove = (termId: string) => {
    const { searchKeyCurrent, searchKeyLastSearched } = latest.current;
    void deleteConnectSearch_RecentSearchTerm(termId)
      .then(() => get_RecentSearchTerms(parameters.current.inSearchTargetId, searchKeyCurrent, searchKeyLastSearched))
      .then(setRecentTerms);
  };
  // OnClick_RecentSearch_RemoveAll: delete both lists of this target, refresh both aggregates.
  const onRecentSearchRemoveAll = () => {
    const { searchKeyCurrent, searchKeyLastSearched, selectedCategory } = latest.current;
    void removeAllRecentSearch(parameters.current.inSearchTargetId).then(() => {
      refreshRecent(searchKeyCurrent, searchKeyLastSearched, selectedCategory);
    });
  };
  // InputEvent_ClearString: both search keys "", then Action_ClearResults.
  const onClearString = () => {
    dispatch({ type: 'searchKeysCleared' });
    clearResults('', '', latest.current.selectedCategory);
  };
  // Event_HorizontalTagListChanged: SelectedCategory and TagList, then Action_RefreshSearch.
  const onTagListChanged = (tagList: Tag[]) => {
    dispatch({ type: 'tagListChanged', tagList });
    void refreshSearch(variables({ selectedCategory: selectedCategoryOf(tagList) }), tagList);
  };

  // Event_SectionOnItemClick.
  const itemClick = async (searchResult: SearchResult, isRecentResult: boolean) => {
    if (searchResult.recordDisabled) {
      void showUpgradePopUp(); // App_Subscription_ShowUpgradePopUp
      return;
    }
    const target = parameters.current.inSearchTargetId;
    // CreateOrUpdateConnectSearch_RecentClickedResults, then the ones beyond the limit are deleted
    await saveRecentClickedResult(target, searchResult, getClientVar('UBTConnect.Search_RecenctClickedResultsLimit'));
    if (parameters.current.inIsEventNavigation) {
      eventsRef.current.onEventSearchResultClick?.(searchResult); // Trigger Event: Event_SearchResultClick
      return;
    }
    if (searchResult.type === Connect_Entity.Locality) {
      navigate('/UBTConnect/Locality_Details', { LocalityId: searchResult.id });
      return;
    }
    const { results } = latest.current;
    let source: { householdId: string; recordDisabled: boolean }[];
    if (isRecentResult) {
      // GetAllSearchRecentClickedResultsByUserId
      source = (await getAllSearchRecentClickedResultsByUserId(target, searchResult.type)).map((r) => ({
        householdId: r.HouseholderId,
        recordDisabled: false,
      }));
    } else if (searchResult.type === Connect_Entity.Member) {
      source = results.people.map((r) => ({ householdId: r.householderId, recordDisabled: r.recordDisabled }));
    } else if (searchResult.type === Connect_Entity.Household) {
      source = results.households.map((r) => ({ householdId: r.id, recordDisabled: r.recordDisabled }));
    } else {
      return;
    }
    if (flags.carousel) {
      const ids = [...new Set(source.filter((s) => !s.recordDisabled).map((s) => s.householdId))];
      setPreloadObject({ CarouselHouseholdItem: ids.map((Household) => ({ Household })) });
      navigate('/UBTConnect/HouseholdCarousel', { In_StartingHouseholdId: searchResult.householderId });
    } else {
      navigate('/UBTConnect/HouseholdDetails', { HouseholdId: searchResult.householderId });
    }
  };

  return {
    state,
    filterSheet,
    isBirthdaySearchEnabled,
    birthdayOptions: birthdayOptions.data ?? [],
    recentClicked,
    recentTerms,
    onChange,
    onSubmit,
    onClearString,
    onTagListChanged,
    onRecentSearchTerm,
    onRecentSearchTermRemove,
    onRecentSearchRemoveAll,
    onRecentResultClick: (recent) => {
      void itemClick(recentAsResult(recent), true);
    },
    onResultClick: (searchResult) => {
      void itemClick(searchResult, false);
    },
    // Event_FilterBottomSheet_tInitialized: BottomSheetId_Filter.
    onFilterSheetInitialized: (bottomSheetId) => {
      setFilterSheet((f) => ({ ...f, bottomSheetId }));
    },
    // Handler_FilterSheetLoaded: BottomSheetId_Filter_IsLoaded True and ShowSubscriptionOnClick.
    onFilterSheetLoaded: (showSubscriptionOnClick) => {
      setFilterSheet((f) => ({ ...f, isLoaded: true, showSubscriptionOnClick }));
    },
    // Event_ApplyFilters: SelectedCountryIds = the list titled CountriesTitle .SelectedIds.
    onApplyFilters: (optionLists, countriesTitle, hasFilters) => {
      const countryIds = optionLists.find((l) => l.Title === countriesTitle)?.SelectedIds ?? [];
      dispatch({ type: 'filtersApplied', selectedCountryIds: countryIds, hasFiltersApplied: hasFilters });
      void refreshSearch(
        variables({ selectedCountryIds: countryIds, hasFiltersApplied: hasFilters }),
        latest.current.tagList,
      );
    },
  };
}
