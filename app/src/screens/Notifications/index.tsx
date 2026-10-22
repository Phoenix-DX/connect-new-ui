import { useEffect, useReducer, useRef } from 'react';
import { NotCaptured } from '@/app/NotCaptured';
import { UserException } from '@/legacy/os/os-exceptions';
import { BottomBarMenu } from '../../shared/UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { directory_Updates_RefreshBottomBarCount, scrollTop } from '../../shared/UBTConnect/lib/actions';
import { Badge } from '../../shared/UBTConnectLibrary/Badge';
import { CustomContainer } from '../../shared/UBTConnectLibrary/CustomContainer';
import { Icon } from '../../shared/UBTConnectLibrary/Icon';
import { Input } from '../../shared/UBTConnectLibrary/Input';
import {
  Shape,
  UBT_AlignItems,
  UBT_Color,
  UBT_Display,
  UBT_Icons2,
  UBT_IconsSize,
  UBT_Size,
} from '../../shared/UBTConnectLibrary/lib/staticEntities';
import { bottomSheetOpen } from '../../shared/osui/lib/actions';
import { exceptionMessage, isSystemException, raiseToFlowHandler } from '@/legacy/os/exceptions';
import { useViewState } from '@/platform/navigation';
import { fetchNotifications, getDateRanges } from './api';
import {
  app_Notifications_AugmentDateRanges,
  app_Notifications_GetBreakpoints,
  setDefaultFilters,
} from './components/actions';
import { Layout_MainPages_Upgrade } from './components/Layout_MainPages_Upgrade';
import { Notifications_MoreActionSheet } from './components/MoreActionSheet';
import { NotificationsListBreakpoints } from './components/NotificationsListBreakpoints';
import { Notifications_Action } from './components/Notifications_Action';
import { Notifications_SortSheet } from './components/SortSheet';
import { UBT_Color_RedDark, UBT_Icons2_Notifications, Updates_DateRanges } from './components/staticEntities';
import type { Breakpoint, FilterUpdates, NotificationItem, NotificationsVariables } from './types';

/* Null dates are '' here; api.ts sends them as the OutSystems null date. */
const EMPTY_FILTER: FilterUpdates = {
  dateFrom: '',
  dateTo: '',
  searchText: '',
  updateTypeId: '',
  readOnly: '',
  sortByNewest: '',
};
const EMPTY_BREAKPOINT: Breakpoint = {
  position: 0,
  sectionName: '',
  badgeCount: 0,
  dateRange: { range: '', from: '', to: '' },
};
/** UBTConnect.uBT_FlexDirection row (TST): not in the shared constants; written as the shared RowReverse is. */
const FlexDirection_Row = 'flex-direction-row';

interface Model extends NotificationsVariables {
  items: NotificationItem[];
  isDataFetched: boolean;
  unreadNotificationsCount: number;
}

/** Screen variables with their compiled defaults (SCR model :56-142), then ScreenEvent_OnInitialize (SCR :1429-1569):
    SelectedFilter_* (True, True, False), InitializeSetting (:1976-2028; the route is protected, so GetUserId is set:
    ShowWarning True, message types from the selected ones, OrderASC / OrderDESC) and CurrentBreakpoint {0, Today, 0}.
    A view restored from the cache keeps the saved search text, filter and HasFiltersApplied (P-BACK); the carousel
    swipe preload of that branch has no caller on this screen. */
function initialModel(searchText: string, filter: FilterUpdates, hasFiltersApplied: boolean): Model {
  return {
    filter_BottomSheetId: '',
    filter_Updates: filter,
    hasFiltersApplied,
    showMarkAll: false,
    dateRanges: [],
    isLoading: false,
    bottomSheetId_IsLoaded: false,
    bottomSheetId_ShowSubscription: false,
    breakpoints: [],
    currentBreakpoint: { ...EMPTY_BREAKPOINT, sectionName: Updates_DateRanges.Today },
    isHeaderScrolled: false,
    isToggleSearch: false,
    currentSearchString: searchText,
    badgeNumber: 0,
    selectedHistorySearch: '',
    deviceHardwareId: '',
    filter_MessageTypePrivate: true,
    filter_MessageTypePublic: true,
    orderByIsAscending: false,
    maxRecords: 20,
    showWarning: true,
    selectedFilter_OrderASC: false,
    filter_OrderASC: false,
    filter_OrderDESC: true,
    selectedFilter_MessageTypePrivate: true,
    selectedFilter_MessageTypePublic: true,
    moreAction_BottomSheetId: '',
    items: [],
    isDataFetched: false,
    unreadNotificationsCount: 0,
  };
}

/** UBTConnect App_Notifications.Notifications (p:UBTConnect.App_Notifications.Notifications.mvc.js: view :252-1092,
    controller :1097-2885). Both data actions are refresh-only (:1110); OnReady drives GetDateRanges →
    FetchNotifications. The scroll-threshold and scroll-end JS (:2519-2660) target the floating header, which sits in a
    Container with visible False (view :700-720), so they find no element and do nothing; SetStickyHeaderHeight runs
    before any `.updates-list__header` exists (no-op); FocusCursor focuses the Input block's wrapper (no-op). */
export default function Notifications() {
  const [savedSearch, setSavedSearch] = useViewState('CurrentSearchString', '');
  const [savedFilter, setSavedFilter] = useViewState<FilterUpdates>('Filter_Updates', EMPTY_FILTER);
  const [savedHasFilters] = useViewState('HasFiltersApplied', false);
  const [state, dispatch] = useReducer(
    (s: Model, patch: Partial<Model>): Model => ({ ...s, ...patch }),
    null,
    () => initialModel(savedSearch, savedFilter, savedHasFilters),
  );
  /* The OutSystems model: async flows read the latest values (state is the rendered copy). */
  const latest = useRef(state);
  const m = (): Model => latest.current;
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    if (patch.currentSearchString !== undefined) setSavedSearch(patch.currentSearchString);
    if (patch.filter_Updates !== undefined) setSavedFilter(patch.filter_Updates);
    dispatch(patch);
  };

  /** RefreshNotifications (:2091-2121) → FetchNotifications, then OnAfterFetch_FetchNotifications (:2289-2385):
      breakpoints, CurrentBreakpoint, ShowMarkAll, isLoading False, scroll listener (no-op), bottom bar count. */
  const refreshNotifications = async () => {
    const out = await fetchNotifications(m());
    set({ items: out.items, unreadNotificationsCount: out.unreadNotificationsCount, isDataFetched: true });
    try {
      const breakpoints = app_Notifications_GetBreakpoints(out.items, m().dateRanges);
      set({
        breakpoints,
        currentBreakpoint: breakpoints[0] ?? EMPTY_BREAKPOINT,
        showMarkAll: out.unreadNotificationsCount > 0,
        isLoading: false,
      });
      await directory_Updates_RefreshBottomBarCount(true);
    } catch (e) {
      if (isSystemException(e)) throw e;
      set({ isLoading: false });
      throw new UserException(exceptionMessage(e), 'UBTConnect.BubbleGenericException');
    }
  };

  /* ScreenEvent_OnReady (:1892-1938): isLoading, skeleton list (not shown: no breakpoint yet), GetDateRanges, then
     OnAfterFetch_GetDateRanges (:2029-2090): AugmentDateRanges, SetDefaultFilters, RefreshNotifications; a non-system
     error → isLoading False and BubbleGenericException. */
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    void (async () => {
      set({ isLoading: true });
      try {
        const ranges = await getDateRanges(m());
        try {
          const dateRanges = app_Notifications_AugmentDateRanges(ranges.map((r) => r.id));
          set({ dateRanges, filter_Updates: setDefaultFilters(m().filter_Updates, dateRanges) });
          await refreshNotifications();
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

  /** Handler_FilterSearchText (:1204-1268): same text as the filter → nothing; otherwise filter, ShowMarkAll False,
      ScrollTop, isLoading, RefreshNotifications. */
  const filterSearchText = (text: string) => {
    set({ currentSearchString: text });
    if (text === m().filter_Updates.searchText) return;
    set({ filter_Updates: { ...m().filter_Updates, searchText: text }, showMarkAll: false });
    scrollTop('.active-screen', 'instant');
    set({ isLoading: true });
    refreshNotifications().catch(raiseToFlowHandler);
  };
  /** Handler_OnChangeSearchInput (:1321-1374). */
  const onChangeSearchInput = (text: string, inIsToggleSearch: boolean) => {
    set(inIsToggleSearch ? { currentSearchString: text, isToggleSearch: true } : { currentSearchString: text });
  };
  /** Handler_ToggleSearch (:1296-1320). */
  const toggleSearch = () => {
    set({ isToggleSearch: !m().isToggleSearch });
  };
  /** OnClick_KebabButton (:1607-1634). */
  const onClickKebab = () => {
    bottomSheetOpen(m().moreAction_BottomSheetId);
  };
  /** Handler_ApplyFilters (:2464-2518), raised by both sheets with HasFiltersApplied as it is. */
  const applyFilters = () => {
    set({ hasFiltersApplied: m().hasFiltersApplied, showMarkAll: false });
    scrollTop('.active-screen', 'instant');
    set({ isLoading: true });
    refreshNotifications().catch(raiseToFlowHandler);
  };

  const v = state;
  const searchOptions = {
    InitalString: v.currentSearchString,
    SearchPrompt: 'Search notifications',
    Debounce_DelayMS: 300,
    BorderRadius: Shape.Rounded,
    EnableAutocompleteHTML: false,
    IsSyncValueWithInput: true,
  };
  const titleWithBadge = (
    <>
      Notifications
      <Badge
        id="$b6"
        size={UBT_Size.ExtraSmall}
        color={UBT_Color_RedDark}
        number={String(v.badgeNumber)}
        maxNumber={9}
      />
    </>
  );
  const kebab = (id: string) => (
    <Icon
      id={id}
      inSizeId={UBT_IconsSize.Base_24}
      inIconId={UBT_Icons2_Notifications.MoreVertical}
      inColorId={UBT_Color.Neutral0}
      onClick={onClickKebab}
    />
  );
  return (
    <>
      <Layout_MainPages_Upgrade
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
                  FlexDirection: FlexDirection_Row,
                },
              }}
            >
              <Icon
                inColorId={UBT_Color.Neutral0}
                inIconId={UBT_Icons2.ArrowLeftAlt}
                inSizeId={UBT_IconsSize.Base_24}
                onClick={toggleSearch}
              />
              <Input
                id="Search_PostScroll"
                inOptions={searchOptions}
                onEventClearString={() => {
                  filterSearchText('');
                }}
                onEventSubmit={filterSearchText}
                onEventOnChange={(text) => {
                  onChangeSearchInput(text, false);
                }}
              />
            </CustomContainer>
          ) : (
            titleWithBadge
          )
        }
        placeholderHeaderRight={
          v.isHeaderScrolled ? (
            <>
              {!v.isToggleSearch && (
                <Icon
                  id="Icon_Search"
                  inSizeId={UBT_IconsSize.Base_24}
                  inColorId={UBT_Color.Neutral0}
                  inIconId={UBT_Icons2_Notifications.Search}
                  onClick={toggleSearch}
                />
              )}
              {kebab('Icon_Kebab')}
            </>
          ) : (
            kebab('Icon_Kebab2')
          )
        }
        placeholderHeaderInput={
          <Input
            id="Search_PreScroll"
            inOptions={searchOptions}
            onEventOnChange={(text) => {
              onChangeSearchInput(text, true);
            }}
            onEventClearString={() => {
              filterSearchText('');
            }}
            onEventSubmit={filterSearchText}
          />
        }
        headerContent={
          <Notifications_Action
            id="Notifications_Action"
            haveFiltersApplied={v.hasFiltersApplied}
            bottomSheetId={v.filter_BottomSheetId}
            isLoaded
            showSubscriptionOnClick={v.bottomSheetId_ShowSubscription}
          />
        }
        content={
          !v.isLoading && v.isDataFetched && v.items.length === 0 ? (
            <NotCaptured name="App_Notifications.Notifications_NoItemsFound (not rendered in any captured state)" />
          ) : (
            <NotificationsListBreakpoints
              id="$b14"
              breakpoints={v.breakpoints}
              uiNotificationItemList={v.items}
              isLoading={v.isLoading}
            />
          )
        }
        bottom={<BottomBarMenu id="$b18" activeItem="" />}
        placeholderCommonUIInsideLayout={<CommonUI_InsideLayout id="$b19" />}
      />
      <Notifications_SortSheet
        id="$b20"
        onSheetInitialized={(sheetId) => {
          set({ filter_BottomSheetId: sheetId });
        }}
        onApplyFilters={applyFilters}
      />
      <Notifications_MoreActionSheet
        id="$b21"
        onSheetInitialized={(sheetId) => {
          set({ moreAction_BottomSheetId: sheetId });
        }}
        onApplyFilters={applyFilters}
      />
    </>
  );
}
