import { useEffect, useReducer, useRef } from 'react';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { OSList } from '@/components/ui/os/OSList';
import { UserException } from '@/legacy/os/os-exceptions';
import { useFlagOn } from '@/platform/flags/flags';
import { exceptionMessage, isSystemException, raiseToFlowHandler } from '@/legacy/os/exceptions';
import {
  getPreloadObject,
  setPreloadObject,
  useOsNavigate,
  useViewState,
  useWasRestoredFromCache,
} from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { getClientVar } from '@/platform/session/session';
import { ScrollAnchor } from '@/shared/NavigationHandler/ScrollAnchor';
import { App_NotificationIcon } from '@/shared/UBTConnect/App_NotificationIcon';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { FilterSheet_Icon } from '@/shared/UBTConnect/FilterSheet_Icon';
import {
  directory_Updates_GetCarouselPreloadedHouseholds,
  directory_Updates_RefreshBottomBarCount,
  scrollTop,
} from '@/shared/UBTConnect/lib/actions';
import { Type_ShareObject } from '@/shared/UBTConnect/lib/staticEntities';
import { ShareSheet } from '@/shared/UBTConnect_Utils/ShareSheet';
import { Connect_BottomBar_Items } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { HorizontalTagList } from '@/shared/UBTConnectLibrary/HorizontalTagList';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { Input } from '@/shared/UBTConnectLibrary/Input';
import { Layout_MainPages_FixedTitle } from '@/shared/UBTConnectLibrary/Layout_MainPages_FixedTitle';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { Update_ListItem } from '@/shared/UBTConnectLibrary/Update_ListItem';
import type { Tag } from '@/shared/UBTConnectLibrary/lib/structures';
import {
  Connect_UpdateTypeId,
  Shape,
  UBT_AlignItems,
  UBT_Color,
  UBT_Display,
  UBT_Icons2,
  UBT_IconsSize,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { Choice } from '@/shared/UBTConnect/lib/staticEntities';
import { fetchUpdates, getDateRanges, markAllAsRead, markAsRead, markAsUnread, osDateInput } from './api';
import {
  dateToText,
  directory_Updates_AugmentDateRanges,
  directory_Updates_GetBreakpoints,
  directory_Updates_GetListBreakpoint,
  directory_Updates_GetUpdatedBreakpoints,
  directory_Updates_MarkAllAsRead,
  EMPTY_BREAKPOINT,
  getSkeletonList_UI_Updates,
  osDateOf,
  sameFilter,
  setDefaultFilters,
  textToDate,
} from './components/actions';
import { Directory_Updates_FilterSheet } from './components/Directory_Updates_FilterSheet';
import { SectionHeader } from './components/SectionHeader';
import { UBT_FlexDirection_Row, UBT_Icons2_Updates, Updates_DateRanges } from './components/staticEntities';
import { UpdateItem_Header } from './components/UpdateItem_Header';
import type { Breakpoint, FilterUpdates, TagOption, UpdateItem, UpdatesVariables } from './types';

const EMPTY_FILTER: FilterUpdates = {
  dateFrom: '',
  dateTo: '',
  searchText: '',
  updateTypeId: '',
  countryIds: [],
  localitiesIds: [],
  readOnly: '',
  sortByNewest: '',
};
const EMPTY_ITEM: UpdateItem = {
  updateItemId: '0',
  updateItemTypeId: '',
  name: '',
  date: '',
  genderId: '',
  locationString: '',
  isRead: false,
  hasAccess: false,
  hasShare: false,
  householdId: '0',
  parentsNames: '',
  birthType: '',
  memberId: '',
};

/** FetchUpdates data fetch status, as the List shows it (`list-loading` until it succeeds, dom/loading.html:236). */
type FetchStatus = 'notFetched' | 'ok' | 'error';

interface Model extends UpdatesVariables {
  /** FetchUpdates.UI_UpdateItemList (skeleton rows while loading). */
  items: UpdateItem[];
  unreadCount: number;
  fetchStatus: FetchStatus;
  isDataFetched: boolean;
  /** GetDateRanges failed (offline): the runtime list key of that capture. */
  dateRangesFailed: boolean;
  /** Bumped by SetupScrollListener: the scroll-end correction runs after the next commit. */
  scrollListenerSeq: number;
}

/** UpdateFilterTypesOptions (SCR ctrl :789-828): All (null identifier, selected), Birth, Marriage, Taken. */
const filterTypeOptions = (): TagOption[] => [
  { text: 'All', identifier: '', isSelected: true },
  { text: 'Birth', identifier: Connect_UpdateTypeId.Birth, isSelected: false },
  { text: 'Marriage', identifier: Connect_UpdateTypeId.Marriage, isSelected: false },
  { text: 'Taken', identifier: Connect_UpdateTypeId.Taken, isSelected: false },
];

/** Screen variables with their compiled defaults (SCR model :45-126), then ScreenEvent_OnInitialize, not restored
    (SCR ctrl :507-517): CurrentBreakpoint {0, Today, 0} and UpdateFilterTypesOptions. */
function initialModel(): Model {
  return {
    filter_UpdateTypeOptions: filterTypeOptions(),
    filter_BottomSheetId: '',
    filter_Updates: EMPTY_FILTER,
    filter_DefaultState: EMPTY_FILTER,
    hasFiltersApplied: false,
    showMarkAll: false,
    dateRanges: [],
    isLoading: false,
    bottomSheetId_IsLoaded: false,
    bottomSheetId_ShowSubscription: false,
    breakpoints: [],
    currentBreakpoint: { ...EMPTY_BREAKPOINT, sectionName: Updates_DateRanges.Today },
    isHeaderScrolled: false,
    shareableUpdateItem: EMPTY_ITEM,
    isShareOpen: false,
    shareableObjectId: '',
    isToggleSearch: false,
    focusedScrollAnchorId: '',
    currentSearchString: '',
    items: [],
    unreadCount: 0,
    fetchStatus: 'notFetched',
    isDataFetched: false,
    dateRangesFailed: false,
    scrollListenerSeq: 0,
  };
}

/** ScreenEvent_OnInitialize, restored (SCR ctrl :473-506): the updates swiped in the carousel (preload object
    EntitiesCarousel_SwippedItems) become read; UnreadCount and their breakpoint's BadgeCount go down by one. */
function restoredModel(saved: Model): Model {
  const preload = getPreloadObject();
  if (!Array.isArray(preload)) return saved;
  const items = [...saved.items];
  const breakpoints = [...saved.breakpoints];
  let unreadCount = saved.unreadCount;
  for (const row of preload as { ListPosition?: number; EntityItemId?: unknown }[]) {
    const pos = row.ListPosition ?? -1;
    const item = items[pos];
    if (pos < 0 || !item || String(row.EntityItemId) !== item.updateItemId) continue;
    unreadCount -= 1;
    items[pos] = { ...item, isRead: true };
    const b = breakpoints.findIndex((p) => item.date >= p.dateRange.from && item.date <= p.dateRange.to);
    const bp = breakpoints[b];
    if (bp) breakpoints[b] = { ...bp, badgeCount: bp.badgeCount - 1 };
  }
  return { ...saved, items, breakpoints, unreadCount };
}

/** UBTConnect Directory_Updates.Updates_SingleList (p:UBTConnect.Directory_Updates.Updates_SingleList.mvc.js: view
    :225-1194, controller :1200-3375). Both data actions are refresh-only (:1233-1236); OnReady drives GetDateRanges →
    FetchUpdates. SetupScrollListener always takes its SetupScrollEndListener branch (`if (true)`, :972), so
    SetupScrollThreshold / DestroyEventListener never get a listener object (no-ops). */
export default function Updates_SingleList() {
  const navigate = useOsNavigate();
  const restored = useWasRestoredFromCache();
  const hasCarouselEnabled = useFlagOn('C2EnableCarousel'); // GetHasCarouselEnabled (default-only, on)
  const hasExtendedShare = useFlagOn('C2ExtendedShare'); // GetHasExtendedShare (default-only, on)
  const [saved, setSaved] = useViewState<Model | null>('Model', null);
  const [state, dispatch] = useReducer(
    (s: Model, patch: Partial<Model>): Model => ({ ...s, ...patch }),
    null,
    () => (restored && saved ? restoredModel(saved) : initialModel()),
  );
  /* The OutSystems model: async flows read the latest values (state is the rendered copy). */
  const latest = useRef(state);
  const m = (): Model => latest.current;
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    setSaved(latest.current);
    dispatch(patch);
  };

  /** SetupScrollListener (SCR ctrl :968-990). */
  const setupScrollListener = () => {
    set({ scrollListenerSeq: m().scrollListenerSeq + 1 });
  };

  /** Handler_ScrollEnding_UpdateBreakpoint(In_Date) (SCR ctrl :884-894). */
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

  /* SetupScrollEndListener JS (SCR :3520-3600): after a 0 ms timeout, and on every `scrollend` of the screen
     container, the list item straddling the bottom edge of `ListHeader` gives its data-plus-date (3 frame retries). */
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

  /** RefreshUpdates (SCR ctrl :1446-1476) → FetchUpdates, then OnAfterFetch_FetchUpdates (:829-873). */
  const refreshUpdates = async () => {
    let out;
    try {
      out = await fetchUpdates(m());
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

  /* ScreenEvent_OnReady (SCR ctrl :643-694): SetStickyHeaderHeight; restored → SetupScrollListener (the scroll
     position comes back through the shell's view cache: Q1); otherwise isLoading, 10 skeleton rows, GetDateRanges →
     OnAfterFetch_GetDateRanges (:935-961): AugmentDateRanges, SetDefaultFilters, RefreshUpdates. */
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    setStickyHeaderHeight();
    if (restored && saved) {
      setupScrollListener();
      return;
    }
    set({ isLoading: true, items: getSkeletonList_UI_Updates(10) });
    void (async () => {
      try {
        let ids: string[];
        try {
          ids = await getDateRanges(m());
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
      } catch (e) {
        raiseToFlowHandler(e);
      }
    })();
    // OnReady runs once (the view cache restores the same instance state).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** The filter flows' common tail: ShowMarkAll False, ScrollTop, isLoading, RefreshUpdates. */
  const reload = (patch: Partial<Model>) => {
    set({ ...patch, showMarkAll: false });
    scrollTop('.active-screen', 'instant');
    set({ isLoading: true });
    refreshUpdates().catch(raiseToFlowHandler);
  };
  /** Handler_FilterSearchText (SCR ctrl :1732-1796). */
  const filterSearchText = (text: string) => {
    set({ currentSearchString: text });
    if (text === m().filter_Updates.searchText) return;
    reload({ filter_Updates: { ...m().filter_Updates, searchText: text } });
  };
  /** Handler_OnChangeSearchInput (SCR ctrl :904-917). */
  const onChangeSearchInput = (text: string, inIsToggleSearch: boolean) => {
    set(inIsToggleSearch ? { currentSearchString: text, isToggleSearch: true } : { currentSearchString: text });
  };
  /** Handler_ToggleSearch (SCR ctrl :962-967). */
  const toggleSearch = () => {
    set({ isToggleSearch: !m().isToggleSearch });
  };
  /** OnChange_FilterType (SCR ctrl :1332-1420): the selected tag, unless it is already the filter. */
  const onChangeFilterType = (tags: Tag[]) => {
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
  /** Handler_ApplyFilters (SCR ctrl :743-770): nothing when the filter did not change. */
  const applyFilters = (filter: FilterUpdates, hasFiltersApplied: boolean) => {
    if (sameFilter(filter, m().filter_Updates)) return;
    reload({ filter_Updates: filter, hasFiltersApplied });
  };

  /** UpdateCurrentBreakpoint (SCR ctrl :704-716). */
  const updateCurrentBreakpoint = (sectionName: string) => {
    const found = m().breakpoints.find((b) => b.sectionName === sectionName);
    if (found) set({ currentBreakpoint: found });
  };
  /** RefreshUpdatesAndFlags(CurrentPosition) (SCR ctrl :1637-1690), then SetMarkAllTag (:1604-1636). */
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
  /** Handler_MarkAsRead(UpdateItemId, CurrentPosition) (SCR ctrl :560-579). */
  const handlerMarkAsRead = async (updateItemId: string, position: number) => {
    await markAsRead(updateItemId);
    setIsRead(position, true);
    refreshUpdatesAndFlags(position);
    await directory_Updates_RefreshBottomBarCount(true);
  };
  /** Handler_MarkAsUnread(UpdateItemId, CurrentPosition) (SCR ctrl :1032-1051). */
  const handlerMarkAsUnread = async (updateItemId: string, position: number) => {
    await markAsUnread(updateItemId);
    setIsRead(position, false);
    refreshUpdatesAndFlags(position);
    await directory_Updates_RefreshBottomBarCount(true);
  };
  /** Handler_MarkAllAsRead (SCR ctrl :991-1031): a non-system error only clears isLoading. */
  const handlerMarkAllAsRead = async () => {
    set({ showMarkAll: false, isLoading: true });
    try {
      await markAllAsRead(m().filter_Updates);
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
  /** Handler_OnClickUpdateItem(In_CurrentItemIndex) (SCR ctrl :328-385): mark read, remember the anchor (Q1), then
      HouseholdCarousel with the preloaded households of the accessible updates. */
  const onClickUpdateItem = async (index: number) => {
    const item = m().items[index];
    if (!item) return;
    await handlerMarkAsRead(item.updateItemId, index);
    set({ focusedScrollAnchorId: item.updateItemId });
    setIsRead(index, true);
    if (hasCarouselEnabled) {
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
  /** Handler_OnShare (SCR ctrl :614-633). */
  const onShare = (item: UpdateItem) => {
    if (!hasExtendedShare) return; // ShowComingSoonMessage branch not built: default-only
    set({ shareableUpdateItem: item, isShareOpen: true, shareableObjectId: item.memberId });
  };

  const v = state;
  const searchOptions = {
    InitalString: v.currentSearchString,
    SearchPrompt: 'Search updates',
    Debounce_DelayMS: 300,
    BorderRadius: Shape.Rounded,
    EnableAutocompleteHTML: false,
    IsSyncValueWithInput: true,
  };
  const filterIcon = (id: string) => (
    <FilterSheet_Icon
      id={id}
      haveFiltersApplied={v.hasFiltersApplied}
      isLoaded={v.bottomSheetId_IsLoaded}
      bottomSheetId={v.filter_BottomSheetId}
      showSubscriptionOnClick={v.bottomSheetId_ShowSubscription}
    />
  );
  const tags: Tag[] = v.filter_UpdateTypeOptions.map((o) => ({
    Text: o.text,
    Identifier: o.identifier,
    IconId: '',
    IsSelected: o.isSelected,
    Enabled: true,
  }));
  const isAscending = v.filter_Updates.sortByNewest !== Choice.Yes;
  const listKey = v.fetchStatus === 'ok' ? '478' : v.dateRangesFailed ? '129' : '106'; // runtime list keys captured
  const listClass = `list list-group background-neutral-0 updates-list${
    v.fetchStatus === 'notFetched' ? ' list-loading' : v.fetchStatus === 'error' ? ' list-error' : ''
  }`;

  return (
    <>
      <Layout_MainPages_FixedTitle
        id="$b1"
        isGrayBackground
        onOnHeaderScrolled={(isHeaderScrolled) => {
          set({ isHeaderScrolled });
        }}
        placeholderHeaderTitle={
          v.isToggleSearch && v.isHeaderScrolled ? (
            <CustomContainer
              extendedClasses="full-width"
              options={{
                DisplayOptions: {
                  Display: UBT_Display.Flex,
                  AlignItems: UBT_AlignItems.Center,
                  FlexDirection: UBT_FlexDirection_Row,
                },
              }}
            >
              <Icon
                inIconId={UBT_Icons2.ArrowLeftAlt}
                inExtendedClasses="margin-right-s"
                inColorId={UBT_Color.Neutral0}
                inSizeId={UBT_IconsSize.Base_24}
                onClick={toggleSearch}
              />
              <Input
                id="Search_PostScroll"
                inOptions={searchOptions}
                onEventSubmit={filterSearchText}
                onEventClearString={() => {
                  filterSearchText('');
                }}
                onEventOnChange={(text) => {
                  onChangeSearchInput(text, false);
                }}
              />
            </CustomContainer>
          ) : (
            'Updates'
          )
        }
        placeholderHeaderRight={
          <>
            {v.isHeaderScrolled && (
              <>
                {!v.isToggleSearch && (
                  <Icon
                    id="Icon_Search"
                    inSizeId={UBT_IconsSize.Base_24}
                    inIconId={UBT_Icons2_Updates.Search}
                    inColorId={UBT_Color.Neutral0}
                    onClick={toggleSearch}
                  />
                )}
                {filterIcon('Icon_FilterSheet_PostScroll')}
              </>
            )}
            <App_NotificationIcon id="$b7" />
          </>
        }
        placeholderHeaderInput={
          <Input
            id="Search_PreScroll"
            inOptions={searchOptions}
            onEventClearString={() => {
              filterSearchText('');
            }}
            onEventOnChange={(text) => {
              onChangeSearchInput(text, true);
            }}
            onEventSubmit={filterSearchText}
          />
        }
        placeholderHeaderInputIcon={filterIcon('Icon_FilterSheet_PreScroll')}
        headerContent={
          <>
            <CustomContainer
              id="$b10"
              options={{
                Background: { BackgroundColor: UBT_Color.Neutral0 },
                PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base },
                MarginSize: { TopSizeId: UBT_Size.Base },
              }}
            >
              <HorizontalTagList id="$b11" inIsSingleSelection inTagToggleList={tags} onChanged={onChangeFilterType} />
            </CustomContainer>
            <UpdateItem_Header
              id="ListHeader"
              scope="b12"
              isLoading={v.isLoading}
              showMarkAll={v.showMarkAll}
              badgeNumber={v.currentBreakpoint.badgeCount}
              title={v.currentBreakpoint.sectionName}
              onClickMarkAll={() => {
                handlerMarkAllAsRead().catch(raiseToFlowHandler);
              }}
            />
          </>
        }
        content={
          !v.isLoading && v.isDataFetched && v.items.length === 0 ? (
            <NotCaptured name="Directory_Updates.Updates_NoItemsFound (not rendered in any captured state)" />
          ) : (
            <OSList
              id="List_Updates"
              className={listClass}
              animateItems={false}
              positionRelative
              source={v.items}
              keyOf={(_item, i) => `${listKey}_${i}`}
            >
              {(item, i) => {
                const r = `l1-${listKey}_${i}`;
                return (
                  <SkeletonSection id={`${r}-$b14`} inIsLoading={v.isLoading}>
                    <div className="updates-list__list-item" data-container="" data-plus-date={dateToText(item.date)}>
                      {i !== 0 && (
                        <SectionHeader
                          id={`${r}-$b15`}
                          rowScope={r}
                          inIsLoading={v.isLoading}
                          inIsAscending={isAscending}
                          inCurrentUpdateDate={item.date}
                          inSiblingId={`${r}-UpdateItem`}
                          inBreakpoints={v.breakpoints}
                          inPreviousUpdateDate={v.items[i - 1]?.date ?? ''}
                          onEventUpdateListHeader={(b: Breakpoint) => {
                            set({ currentBreakpoint: b });
                          }}
                        />
                      )}
                      <Update_ListItem
                        id={`${r}-UpdateItem`}
                        inHasShare={item.hasShare}
                        inLocation={item.locationString}
                        showImage={false}
                        inInitialsList={[{ Gender: item.genderId }]}
                        inIsRead={item.isRead}
                        inBirthType={item.birthType}
                        inDate={item.date}
                        inTypeUpdateFeedItem={item.updateItemTypeId}
                        inParentsNames={item.parentsNames}
                        inName={item.name}
                        paddingSizeId={{ GeneralSizeId: UBT_Size.Base }}
                        onEventShare={() => {
                          onShare(item);
                        }}
                        onOnClick={() => {
                          onClickUpdateItem(i).catch(raiseToFlowHandler);
                        }}
                        onEventMarkAsRead={() => {
                          handlerMarkAsRead(item.updateItemId, i).catch(raiseToFlowHandler);
                        }}
                        onEventMarkAsUnread={() => {
                          handlerMarkAsUnread(item.updateItemId, i).catch(raiseToFlowHandler);
                        }}
                      />
                      <ScrollAnchor id={`${r}-$b17`} idIn={item.updateItemId} />
                    </div>
                  </SkeletonSection>
                );
              }}
            </OSList>
          )
        }
        bottom={<BottomBar id="$b18" activeItem={Connect_BottomBar_Items.Updates} isRootPage />}
        placeholderCommonUIInsideLayout={<CommonUiLayout id="$b19" />}
      />
      <Directory_Updates_FilterSheet
        id="$b20"
        inFilterUpdates={v.filter_Updates}
        onApplyFilters={applyFilters}
        onLoaded={(showSubscriptionOnClick) => {
          set({ bottomSheetId_IsLoaded: true, bottomSheetId_ShowSubscription: showSubscriptionOnClick });
        }}
        onSheetInitialized={(sheetId) => {
          set({ filter_BottomSheetId: sheetId });
        }}
      />
      <ShareSheet
        id="$b21"
        inShareObjectTypeId={Type_ShareObject.Update}
        inUpdateType={v.shareableUpdateItem.updateItemTypeId}
        inIsOpen={v.isShareOpen}
        inUpdateDate={osDateInput(v.shareableUpdateItem.date)}
        inShareableObjectId={v.shareableObjectId}
        onEventClosedShareSheet={() => {
          set({ isShareOpen: false });
        }}
      >
        <Update_ListItem
          inName={v.shareableUpdateItem.name}
          hasBorderBottom={false}
          inDate={v.shareableUpdateItem.date}
          isEnabled={false}
          inTypeUpdateFeedItem={v.shareableUpdateItem.updateItemTypeId}
          showImage={false}
          inInitialsList={[{ Gender: v.shareableUpdateItem.genderId }]}
          ignoreReadBackground
          inBirthType={v.shareableUpdateItem.birthType}
          inLocation={v.shareableUpdateItem.locationString}
          inParentsNames={v.shareableUpdateItem.parentsNames}
          inIsRead={false}
        />
      </ShareSheet>
    </>
  );
}

/** SetStickyHeaderHeight JS (SCR :3481-3514): `--sticky-top-offset` = header + `.updates-list__header` heights + 9 on
    the screen container (read by SectionHeader's observer); nothing when an element is missing. */
function setStickyHeaderHeight() {
  const headerEl = document.querySelector('.header');
  const updatesHeaderEl = document.querySelector('.updates-list__header');
  const scrollContainer = document.querySelector<HTMLElement>('.active-screen.screen-container');
  if (!headerEl || !updatesHeaderEl || !scrollContainer) return;
  const topOffsetPx = headerEl.getBoundingClientRect().height + updatesHeaderEl.getBoundingClientRect().height + 9;
  scrollContainer.style.setProperty('--sticky-top-offset', `${topOffsetPx}px`);
}
