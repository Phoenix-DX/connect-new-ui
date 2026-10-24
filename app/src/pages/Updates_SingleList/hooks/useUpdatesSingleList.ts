import { useEffect, useRef } from 'react';
import {
  fetchUpdateDateRangeIds,
  fetchUpdatesList,
  markAllUpdateItemsAsRead,
  markUpdateItemAsRead,
  markUpdateItemAsUnread,
  type FilterUpdates,
  type UpdateBreakpoint,
  type UpdateItem,
} from '@/api/update';
import { UserException, exceptionMessage, isSystemException, raiseToFlowHandler } from '@/legacy/os/exceptions';
import { getPreloadObject, setPreloadObject, useFlowState, useOsNavigate } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { getClientVar } from '@/platform/session/session';
import {
  directory_Updates_GetCarouselPreloadedHouseholds,
  directory_Updates_RefreshBottomBarCount,
  scrollTop,
} from '@/lib/ubtConnect/actions';
import type { Tag } from '@/lib/ubtConnectLibrary/structures';
import {
  directory_Updates_AugmentDateRanges,
  directory_Updates_GetBreakpoints,
  directory_Updates_GetListBreakpoint,
  directory_Updates_GetUpdatedBreakpoints,
  directory_Updates_MarkAllAsRead,
  EMPTY_BREAKPOINT,
  getSkeletonList_UI_Updates,
  INITIAL_UPDATES_SINGLE_LIST_STATE,
  osDateOf,
  restoreUpdatesSingleListState,
  sameFilter,
  setDefaultFilters,
  textToDate,
  updatesSingleListReducer,
  type UpdatesSingleListPatch,
  type UpdatesSingleListState,
} from './updatesSingleListState';

/** The feature flags that the screen reads. The page reads them (rule 4) and gives them here. */
export interface UpdatesSingleListFlags {
  /** C2EnableCarousel (GetHasCarouselEnabled, default-only, on): an update opens the household carousel. */
  carousel: boolean;
  /** C2ExtendedShare (GetHasExtendedShare, default-only, on): the share action opens the share sheet. */
  extendedShare: boolean;
}

/** What the page renders and the handlers of the events of its blocks. */
export interface UpdatesSingleListFlows {
  /** The screen variables (rendered). */
  state: UpdatesSingleListState;
  /** OnHeaderScrolled of the layout: IsHeaderScrolled. */
  onHeaderScrolled: (isHeaderScrolled: boolean) => void;
  /** Handler_FilterSearchText: the Submit event of both search inputs. */
  onSearchSubmit: (text: string) => void;
  /** Handler_FilterSearchText with an empty text: the ClearString event of both search inputs. */
  onSearchClear: () => void;
  /** Handler_OnChangeSearchInput(Text, In_IsToggleSearch): the OnChange event of the search inputs. */
  onSearchChange: (text: string, inIsToggleSearch: boolean) => void;
  /** Handler_ToggleSearch: the search icon and the back arrow of the scrolled title. */
  onToggleSearch: () => void;
  /** OnChange_FilterType: the Changed event of the type tags. */
  onFilterTypeChanged: (tags: Tag[]) => void;
  /** Handler_MarkAllAsRead: Click_MarkAll of the list header. */
  onMarkAllAsRead: () => void;
  /** Event_UpdateListHeader of a SectionHeader: CurrentBreakpoint. */
  onUpdateListHeader: (breakpoint: UpdateBreakpoint) => void;
  /** Handler_OnClickUpdateItem(In_CurrentItemIndex): the OnClick event of an update. */
  onItemClick: (index: number) => void;
  /** Handler_OnShare: the Event_Share of an update. */
  onItemShare: (item: UpdateItem) => void;
  /** Handler_MarkAsRead(UpdateItemId, CurrentPosition): the Event_MarkAsRead of an update. */
  onItemMarkAsRead: (updateItemId: string, position: number) => void;
  /** Handler_MarkAsUnread(UpdateItemId, CurrentPosition): the Event_MarkAsUnread of an update. */
  onItemMarkAsUnread: (updateItemId: string, position: number) => void;
  /** Handler_ApplyFilters: the ApplyFilters event of Directory_Updates_FilterSheet. */
  onApplyFilters: (filter: FilterUpdates, hasFiltersApplied: boolean) => void;
  /** The Loaded event of the filter sheet: BottomSheetId_IsLoaded, BottomSheetId_ShowSubscription. */
  onFilterSheetLoaded: (showSubscriptionOnClick: boolean) => void;
  /** The SheetInitialized event of the filter sheet: Filter_BottomSheetId. */
  onFilterSheetInitialized: (sheetId: string) => void;
  /** Event_ClosedShareSheet of the share sheet: IsShareOpen False. */
  onShareSheetClosed: () => void;
}

/** SetStickyHeaderHeight (JS node): `--sticky-top-offset` = header + `.updates-list__header` heights + 9 on the
    screen container (read by the observer of SectionHeader); nothing when an element is missing. */
function setStickyHeaderHeight() {
  const headerEl = document.querySelector('.header');
  const updatesHeaderEl = document.querySelector('.updates-list__header');
  const scrollContainer = document.querySelector<HTMLElement>('.active-screen.screen-container');
  if (!headerEl || !updatesHeaderEl || !scrollContainer) return;
  const topOffsetPx = headerEl.getBoundingClientRect().height + updatesHeaderEl.getBoundingClientRect().height + 9;
  scrollContainer.style.setProperty('--sticky-top-offset', `${topOffsetPx}px`);
}

/** The flows of the screen Updates_SingleList (the screen controller).
    - OnInitialize: the variables with their defaults (`INITIAL_UPDATES_SINGLE_LIST_STATE`). On a back navigation the
      view cache restores the variables, and the updates swiped in the carousel become read
      (`restoreUpdatesSingleListState`).
    - OnReady: SetStickyHeaderHeight. Restored: SetupScrollListener. Otherwise isLoading, 10 skeleton rows,
      GetDateRanges, then AugmentDateRanges, SetDefaultFilters and RefreshUpdates (FetchUpdates, then the breakpoints,
      ShowMarkAll and the bottom bar count). Both data actions are refresh-only.
    - SetupScrollListener always takes its SetupScrollEndListener branch: on each `scrollend` of the screen container,
      the update at the bottom edge of the list header gives the date of CurrentBreakpoint.
    - The search, type and filter flows reload the list from the top; the read-state flows call the service actions,
      then recount the breakpoints and the bottom bar.
    @origin UBTConnect.Directory_Updates.Updates_SingleList */
export function useUpdatesSingleList(flags: UpdatesSingleListFlags): UpdatesSingleListFlows {
  const navigate = useOsNavigate();
  const started = useRef(false);
  const {
    state,
    dispatch: set,
    latest,
  } = useFlowState({
    viewName: 'Directory_Updates.Updates_SingleList',
    reducer: updatesSingleListReducer,
    initial: INITIAL_UPDATES_SINGLE_LIST_STATE,
    restore: (saved) => restoreUpdatesSingleListState(saved, getPreloadObject()),
    parameters: null,
    // OnReady runs once per screen instance, also when StrictMode runs the effects twice.
    onReady: (_isAlive, restored) => {
      if (started.current) return Promise.resolve();
      started.current = true;
      return onReady(restored);
    },
  });
  /* The flows read the newest variables (state is the rendered copy). */
  const m = (): UpdatesSingleListState => latest.current;

  /** SetupScrollListener. */
  const setupScrollListener = () => {
    set({ scrollListenerSeq: m().scrollListenerSeq + 1 });
  };

  /** Handler_ScrollEnding_UpdateBreakpoint(In_Date). */
  const scrollEndingUpdateBreakpoint = (inDate: string | null) => {
    set({
      currentBreakpoint: directory_Updates_GetListBreakpoint(
        m().breakpoints,
        textToDate(inDate),
        osDateOf(new Date()),
        false,
      ),
    });
  };

  /* SetupScrollEndListener (JS node): after a 0 ms timeout, and on every `scrollend` of the screen container, the list
     item straddling the bottom edge of `ListHeader` gives its data-plus-date (3 frame retries). */
  const scrollEndCleanups = useRef<(() => void)[]>([]);
  useEffect(() => {
    if (state.scrollListenerSeq === 0) return;
    const timer = window.setTimeout(() => {
      const container = document.querySelector('.active-screen.screen-container');
      const header = document.getElementById('ListHeader');
      if (!container || !header) return;
      const resolve = (retriesLeft = 3) => {
        const boundaryY = header.getBoundingClientRect().bottom;
        const current = [...document.querySelectorAll('.updates-list__list-item')].find((item) => {
          const rect = item.getBoundingClientRect();
          return rect.top <= boundaryY && rect.bottom >= boundaryY;
        });
        if (!current) {
          if (retriesLeft > 0)
            requestAnimationFrame(() => {
              resolve(retriesLeft - 1);
            });
          return;
        }
        scrollEndingUpdateBreakpoint(current.getAttribute('data-plus-date'));
      };
      const onScrollEnd = () => {
        resolve();
      };
      container.addEventListener('scrollend', onScrollEnd, { passive: true });
      scrollEndCleanups.current.push(() => {
        container.removeEventListener('scrollend', onScrollEnd);
      });
      resolve();
    }, 0);
    return () => {
      window.clearTimeout(timer);
    };
    // Runs once per SetupScrollListener call.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.scrollListenerSeq]);
  useEffect(
    () => () => {
      for (const off of scrollEndCleanups.current) off();
    },
    [],
  );

  /** RefreshUpdates → FetchUpdates, then OnAfterFetch_FetchUpdates. */
  const refreshUpdates = async () => {
    let out;
    try {
      out = await fetchUpdatesList(m());
    } catch (e) {
      set({ fetchStatus: 'error' });
      throw e;
    }
    set({ items: out.items, unreadCount: out.unreadCount, fetchStatus: 'ok', isDataFetched: true });
    try {
      const breakpoints = directory_Updates_GetBreakpoints(out.items, m().dateRanges);
      set({
        breakpoints,
        currentBreakpoint: breakpoints[0] ?? EMPTY_BREAKPOINT,
        showMarkAll: out.unreadCount > 0,
        isLoading: false,
      });
      setupScrollListener();
      await directory_Updates_RefreshBottomBarCount(true);
    } catch (e) {
      if (isSystemException(e)) throw e;
      set({ isLoading: false });
      throw new UserException(exceptionMessage(e), 'UBTConnect.BubbleGenericException');
    }
  };

  /* ScreenEvent_OnReady: SetStickyHeaderHeight; restored → SetupScrollListener (the scroll position comes back
     through the view cache of the shell: Q1); otherwise isLoading, 10 skeleton rows, GetDateRanges →
     OnAfterFetch_GetDateRanges: AugmentDateRanges, SetDefaultFilters, RefreshUpdates. */
  async function onReady(restored: boolean) {
    setStickyHeaderHeight();
    if (restored) {
      setupScrollListener();
      return;
    }
    set({ isLoading: true, items: getSkeletonList_UI_Updates(10) });
    let ids: string[];
    try {
      ids = await fetchUpdateDateRangeIds(m());
    } catch (e) {
      set({ dateRangesFailed: true });
      throw e;
    }
    try {
      const dateRanges = directory_Updates_AugmentDateRanges(
        ids,
        getClientVar('UBTConnect.Directory_Updates_MonthsToShow'),
      );
      set({ dateRanges });
      const d = setDefaultFilters(m().filter_Updates, m().filter_DefaultState, dateRanges);
      set({ filter_Updates: d.filter, filter_DefaultState: d.defaultState });
      await refreshUpdates();
    } catch (e) {
      if (isSystemException(e)) throw e;
      set({ isLoading: false });
      throw new UserException(exceptionMessage(e), 'UBTConnect.BubbleGenericException');
    }
  }

  /** The common tail of the filter flows: ShowMarkAll False, ScrollTop, isLoading, RefreshUpdates. */
  const reload = (patch: UpdatesSingleListPatch) => {
    set({ ...patch, showMarkAll: false });
    scrollTop('.active-screen', 'instant');
    set({ isLoading: true });
    refreshUpdates().catch(raiseToFlowHandler);
  };
  /** Handler_FilterSearchText. */
  const filterSearchText = (text: string) => {
    set({ currentSearchString: text });
    if (text === m().filter_Updates.searchText) return;
    reload({ filter_Updates: { ...m().filter_Updates, searchText: text } });
  };
  /** Handler_OnChangeSearchInput. */
  const onSearchChange = (text: string, inIsToggleSearch: boolean) => {
    set(inIsToggleSearch ? { currentSearchString: text, isToggleSearch: true } : { currentSearchString: text });
  };
  /** Handler_ToggleSearch. */
  const onToggleSearch = () => {
    set({ isToggleSearch: !m().isToggleSearch });
  };
  /** OnChange_FilterType: the selected tag, unless it is already the filter. */
  const onFilterTypeChanged = (tags: Tag[]) => {
    const selected = tags.find((t) => t.IsSelected);
    const identifier = selected?.Identifier ?? '';
    if (identifier === m().filter_Updates.updateTypeId) return;
    reload({
      filter_Updates: { ...m().filter_Updates, updateTypeId: identifier },
      filter_UpdateTypeOptions: m().filter_UpdateTypeOptions.map((o) => ({
        ...o,
        isSelected: o.identifier === identifier,
      })),
    });
  };
  /** Handler_ApplyFilters: nothing when the filter did not change. */
  const onApplyFilters = (filter: FilterUpdates, hasFiltersApplied: boolean) => {
    if (sameFilter(filter, m().filter_Updates)) return;
    reload({ filter_Updates: filter, hasFiltersApplied });
  };

  /** UpdateCurrentBreakpoint. */
  const updateCurrentBreakpoint = (sectionName: string) => {
    const found = m().breakpoints.find((b) => b.sectionName === sectionName);
    if (found) set({ currentBreakpoint: found });
  };
  /** RefreshUpdatesAndFlags(CurrentPosition), then SetMarkAllTag. */
  const refreshUpdatesAndFlags = (position: number) => {
    const r = directory_Updates_GetUpdatedBreakpoints(m().items, position, m().dateRanges, m().breakpoints);
    set({ breakpoints: r.updatedBreakpoints });
    if (m().currentBreakpoint.sectionName === r.changedBreakpoint.sectionName)
      updateCurrentBreakpoint(r.changedBreakpoint.sectionName);
    set({ showMarkAll: m().items.some((i) => !i.isRead) });
  };
  const setIsRead = (position: number, isRead: boolean) => {
    set({ items: m().items.map((it, i) => (i === position ? { ...it, isRead } : it)) });
  };
  /** Handler_MarkAsRead(UpdateItemId, CurrentPosition). */
  const handlerMarkAsRead = async (updateItemId: string, position: number) => {
    await markUpdateItemAsRead(updateItemId);
    setIsRead(position, true);
    refreshUpdatesAndFlags(position);
    await directory_Updates_RefreshBottomBarCount(true);
  };
  /** Handler_MarkAsUnread(UpdateItemId, CurrentPosition). */
  const handlerMarkAsUnread = async (updateItemId: string, position: number) => {
    await markUpdateItemAsUnread(updateItemId);
    setIsRead(position, false);
    refreshUpdatesAndFlags(position);
    await directory_Updates_RefreshBottomBarCount(true);
  };
  /** Handler_MarkAllAsRead: a non-system error only clears isLoading. */
  const handlerMarkAllAsRead = async () => {
    set({ showMarkAll: false, isLoading: true });
    try {
      await markAllUpdateItemsAsRead(m().filter_Updates);
      set({
        items: directory_Updates_MarkAllAsRead(m().items),
        breakpoints: m().breakpoints.map((b) => ({ ...b, badgeCount: 0 })),
        currentBreakpoint: { ...m().currentBreakpoint, badgeCount: 0 },
        isLoading: false,
      });
      await directory_Updates_RefreshBottomBarCount(true);
      await refreshUpdates();
    } catch (e) {
      if (isSystemException(e)) throw e;
      set({ isLoading: false });
    }
  };
  /** Handler_OnClickUpdateItem(In_CurrentItemIndex): mark read, remember the anchor (Q1), then HouseholdCarousel with
      the preloaded households of the accessible updates. */
  const onClickUpdateItem = async (index: number) => {
    const item = m().items[index];
    if (!item) return;
    await handlerMarkAsRead(item.updateItemId, index);
    set({ focusedScrollAnchorId: item.updateItemId });
    setIsRead(index, true);
    if (flags.carousel) {
      const preloaded = directory_Updates_GetCarouselPreloadedHouseholds(
        m()
          .items.filter((p) => p.hasAccess)
          .map((p) => ({
            HouseholdId: p.householdId,
            IsRead: p.isRead,
            Updates_CarouselSwipeCallbackParameters: { UpdateItemId: p.updateItemId },
          })),
      );
      setPreloadObject({ CarouselHouseholdItem: preloaded.CarouselHouseholdItem });
      navigate(`/${APP_ID}/HouseholdCarousel`, { In_StartingHouseholdId: item.householdId });
    } // HouseholdDetails branch (flag off) not built: default-only
  };
  /** Handler_OnShare. */
  const onItemShare = (item: UpdateItem) => {
    if (!flags.extendedShare) return; // ShowComingSoonMessage branch not built: default-only
    set({ shareableUpdateItem: item, isShareOpen: true, shareableObjectId: item.memberId });
  };

  return {
    state,
    onHeaderScrolled: (isHeaderScrolled) => {
      set({ isHeaderScrolled });
    },
    onSearchSubmit: filterSearchText,
    onSearchClear: () => {
      filterSearchText('');
    },
    onSearchChange,
    onToggleSearch,
    onFilterTypeChanged,
    onMarkAllAsRead: () => {
      handlerMarkAllAsRead().catch(raiseToFlowHandler);
    },
    onUpdateListHeader: (breakpoint) => {
      set({ currentBreakpoint: breakpoint });
    },
    onItemClick: (index) => {
      onClickUpdateItem(index).catch(raiseToFlowHandler);
    },
    onItemShare,
    onItemMarkAsRead: (updateItemId, position) => {
      handlerMarkAsRead(updateItemId, position).catch(raiseToFlowHandler);
    },
    onItemMarkAsUnread: (updateItemId, position) => {
      handlerMarkAsUnread(updateItemId, position).catch(raiseToFlowHandler);
    },
    onApplyFilters,
    onFilterSheetLoaded: (showSubscriptionOnClick) => {
      set({ bottomSheetId_IsLoaded: true, bottomSheetId_ShowSubscription: showSubscriptionOnClick });
    },
    onFilterSheetInitialized: (sheetId) => {
      set({ filter_BottomSheetId: sheetId });
    },
    onShareSheetClosed: () => {
      set({ isShareOpen: false });
    },
  };
}
