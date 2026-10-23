// @os-block Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList
import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, type KeyboardEvent, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Layout } from '@/shared/Connect2_LegacyShared/Layout';
import { MenuIcon_Back } from '@/shared/Connect2_LegacyShared/MenuIcon_Back';
import { MenuIcon__UpdatedOSUI } from '@/shared/Connect2_LegacyShared/MenuIcon__UpdatedOSUI';
import { MenuAction } from '@/shared/Connect2_LegacyShared/lib/staticEntities';
import { MessageList_NoResults } from '@/shared/Connect2_LegacyShared/MessageList_NoResults';
import { Spinner } from '@/shared/Connect2_LegacyShared/Spinner';
import { currDateTime } from '@/shared/lib/osDateTime';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler';
import { Animate } from '@/shared/osui/Animate';
import { InputWithIcon } from '@/shared/osui/InputWithIcon';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { showFeedbackMessage } from '@/platform/feedback';
import { useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { getClientVar, useShellState } from '@/platform/session/session';
import { synchronizeNumberUnreadMessages } from '@/platform/bootstrap/startup';
import {
  fetchMessageInstanceExists,
  fetchMessages,
  markMessageAsClear,
  markMessageAsRead,
  wrapper_MarkAllAsReadNotifications,
} from '@/screens/MessageList/api';
import type { GetMessagesResult, MessageListVariables, MessagesList } from '@/screens/MessageList/types';
import { decrementReadMessagesCounter, setUnreadNotificationsNumber } from './actions';
import { MessageListBlock } from './MessageListBlock';
import { MessageList_Filter } from './MessageList_Filter';
import { MessageList_NoNotifications_Banner } from './MessageList_NoNotifications_Banner';
import { MessageSearchHistory } from './MessageSearchHistory';
import { AnimationType, MessageType, RecentSearchType, Speed } from './staticEntities';
import { Warning_PrivateMessage } from './Warning_PrivateMessage';

/** OnScrollEnding local variable IncrementRecords (default 20). */
const INCREMENT_RECORDS = 20;
/** FeedbackMessage types (OS.FeedbackMessageService): Info 0. */
const FEEDBACK_INFO = 0;

/** Model defaults (ScreenBlock model :56-135) after OnInitialize when not restored from the view cache (controller
    :1305-1330): SelectedFilter_Private/Public True, SelectedFilter_OrderASC False, DeviceHardwareId = the device UUID
    (AppManager_GetDeviceContext; client variable, "" on the web), then InitializeSetting (:2205-2240). */
function initialVariables(signedIn: boolean): MessageListVariables {
  const selectedOrderASC = false;
  return {
    // InitializeSetting: WarningMessage; signed in → ShowWarning True and the selected type filters; signed out →
    // ShowWarning False, Private False, Public True; then the order from SelectedFilter_OrderASC.
    WarningMessage: 'To access your Private Messages,\r\nplease login to the  Connect App.',
    ShowWarning: signedIn,
    Filter_MessageTypePrivate: signedIn,
    Filter_MessageTypePublic: true,
    Filter_OrderASC: selectedOrderASC,
    Filter_OrderDESC: !selectedOrderASC,
    ShowFilters: false,
    ShowSearch: false,
    SearchMessageString: '',
    OrderByIsAscending: false,
    SelectedHistorySearch: '',
    DeviceHardwareId: getClientVar('UBT_AppManager.DeviceInfo_UUID'),
    MaxRecords: 20,
    isLoadMore: false,
    IsShowLoading: false,
    IsEmptyMessage: false,
    IsRefreshing: false,
    HasUnread: false,
    CurrentMessageInstanceId: '0',
    ForceInitiateLoginFlowDateTime: '',
    TotalPrivate: 0,
    TotalPublic: 0,
    SelectedFilter_OrderASC: selectedOrderASC,
    SelectedFilter_MessageTypePrivate: true,
    SelectedFilter_MessageTypePublic: true,
  };
}

/** FocusCursor JS (OnInitialize, OnClick_Search, OnClick_CloseSearchAndFilter): focus Input_SearchMessages after 200 ms. */
const focusCursor = () => {
  window.setTimeout(() => document.getElementById('b1-Input_SearchMessages')?.focus(), 200);
};
/** ScrollToTop / SetScrollToTop JS: scroll `.content` to the top. */
const scrollContentToTop = () => {
  const content = document.querySelector('.content');
  if (content) content.scrollTop = 0;
};

export interface ScreenBlock_MessageListProps {
  id?: string;
  /** Input Trigger_PullToRefresh. */
  triggerPullToRefresh: boolean;
  /** Placeholder Menu_IfLoggedIn (empty in MessageList). */
  menuIfLoggedIn?: ReactNode;
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
  /** Event NavigateTo_MessageDetail(MessageInstanceId). */
  onNavigateToMessageDetail: (messageInstanceId: string) => void;
  /** Event PullToRefreshTriggered. */
  onPullToRefreshTriggered: () => void;
}

/** Connect2_LegacyShared MyNotifications.ScreenBlock_MessageList (p:…ScreenBlock_MessageList.mvc.js: model :1-198,
    view :199-1122, controller :1123-3140). Layout with pull to refresh; header: menu icon or close icon, title or
    search input, search and filter icons; content: warning, MessageListBlock or the empty states, spinners. */
export function ScreenBlock_MessageList({
  id,
  triggerPullToRefresh,
  menuIfLoggedIn,
  bottomBar,
  commonUIElements,
  onNavigateToMessageDetail,
  onPullToRefreshTriggered,
}: ScreenBlock_MessageListProps) {
  const { signedIn } = useShellState();
  const restoredFromCache = useWasRestoredFromCache();
  const [vars, setVars] = useViewState<MessageListVariables>('MessageList.variables', initialVariables(signedIn));
  const [messagesList, setMessagesList] = useViewState<MessagesList>('MessageList.MessagesList', {
    items: [],
    hasUnreadMessages: false,
  });
  // Flows read and assign variables between server calls, as OutSystems does: the refs hold the latest values.
  const varsRef = useRef(vars);
  const listRef = useRef(messagesList);
  const triggerRef = useRef(triggerPullToRefresh);
  triggerRef.current = triggerPullToRefresh;
  const assign = (patch: Partial<MessageListVariables>) => {
    varsRef.current = { ...varsRef.current, ...patch };
    setVars(varsRef.current);
  };
  const assignList = (list: MessagesList) => {
    listRef.current = list;
    setMessagesList(list);
  };

  // GetMessages: on demand only (OnReady, RefreshMessages); the stable key lets the view cache restore it (P-BACK).
  const getMessages = useQuery({
    queryKey: ['MessageList', 'DataActionGetMessages'],
    queryFn: () => fetchMessages(varsRef.current, listRef.current, triggerRef.current),
    enabled: false,
    retry: false,
  });
  const isDataFetched = getMessages.isSuccess;

  /** OnAfterFetch_GetMessages (:2765-2812): list = Messages, SetUnreadNotificationsNumber(CountUnreadMessages),
      TotalPrivate/TotalPublic (unread rows of type Private / Public), HasUnread, MessagesList.HasUnreadMessages, IsRefreshing False. */
  const onAfterFetchGetMessages = (out: GetMessagesResult) => {
    assignList({ items: out.messages, hasUnreadMessages: out.hasUnreadMessages });
    setUnreadNotificationsNumber(out.countUnreadMessages);
    const unread = out.messages.filter((m) => !m.isRead);
    assign({
      TotalPrivate: unread.filter((m) => m.messageTemplateTypeId === MessageType.Private).length,
      TotalPublic: unread.filter((m) => m.messageTemplateTypeId === MessageType.Public).length,
      HasUnread: out.hasUnreadMessages,
      IsRefreshing: false,
    });
  };

  /** Refresh Query GetMessages; a failure goes to the flow handler. Returns false when the flow stops. */
  const refreshGetMessages = async (): Promise<boolean> => {
    const result = await getMessages.refetch();
    if (result.isSuccess) {
      onAfterFetchGetMessages(result.data);
      return true;
    }
    raiseToFlowHandler(result.error);
    return false;
  };

  /** RefreshMessages(IsScrollToTop) (:1640-1680): IsRefreshing True, refresh GetMessages, ScrollToTop JS. */
  const refreshMessages = async (isScrollToTop: boolean): Promise<boolean> => {
    assign({ IsRefreshing: true });
    const ok = await refreshGetMessages();
    if (ok && isScrollToTop) scrollContentToTop();
    return ok;
  };

  // OnInitialize when restored from the view cache: FocusCursor only (the variables come back with the view).
  const initializedRef = useRef(false);
  if (!initializedRef.current) {
    initializedRef.current = true;
    if (restoredFromCache) focusCursor();
  }

  // OnReady (:1495-1510): Refresh Query GetMessages (once; StrictMode runs effects twice).
  const readyRef = useRef(false);
  useEffect(() => {
    if (readyRef.current) return;
    readyRef.current = true;
    void refreshGetMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // OnParametersChanged (:1755-1770): Trigger_PullToRefresh → PullToRefresh, then event PullToRefreshTriggered.
  useEffect(() => {
    if (!triggerPullToRefresh) return;
    void pullToRefresh().then(onPullToRefreshTriggered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerPullToRefresh]);

  /** PullToRefresh (:1380-1400): not refreshing → RefreshMessages(False). */
  async function pullToRefresh() {
    if (!varsRef.current.IsRefreshing) await refreshMessages(false);
  }

  /** RevertSelectedFiltersToPersistedValue (:2000-2020). */
  const revertSelectedFilters = () => {
    const v = varsRef.current;
    assign({
      Filter_OrderASC: v.SelectedFilter_OrderASC,
      Filter_OrderDESC: !v.SelectedFilter_OrderASC,
      Filter_MessageTypePrivate: v.SelectedFilter_MessageTypePrivate,
      Filter_MessageTypePublic: v.SelectedFilter_MessageTypePublic,
    });
  };
  /** ToggleShowFilters (:2590-2605): revert the filters, ShowFilters = not ShowFilters. */
  const toggleShowFilters = () => {
    revertSelectedFilters();
    assign({ ShowFilters: !varsRef.current.ShowFilters });
  };
  /** ToggleShowSearch (:2178-2186). */
  const toggleShowSearch = () => {
    assign({ ShowSearch: !varsRef.current.ShowSearch });
  };

  /** SaveSetting (:1785-1815): the selected filters from the edited ones, then SetSortVariable (:2485-2510):
      OrderByIsAscending = Filter_OrderASC. */
  const saveSetting = () => {
    const v = varsRef.current;
    assign({
      SelectedFilter_OrderASC: v.Filter_OrderASC,
      SelectedFilter_MessageTypePublic: v.Filter_MessageTypePublic,
      SelectedFilter_MessageTypePrivate: v.Filter_MessageTypePrivate,
    });
    assign({ OrderByIsAscending: varsRef.current.Filter_OrderASC });
  };
  /** OnClick_ApplyFilters (:2450-2484): SaveSetting, RefreshMessages(False), then ToggleShowFilters. */
  const onClickApplyFilters = async () => {
    saveSetting();
    if (!(await refreshMessages(false))) return;
    toggleShowFilters();
  };
  /** OnClick_ResetFilters (:1698-1745): Private = signed in, Public True, OrderASC False, OrderDESC True, SaveSetting,
      RefreshMessages(False), then ToggleShowFilters. */
  const onClickResetFilters = async () => {
    assign({
      Filter_MessageTypePrivate: signedIn,
      Filter_MessageTypePublic: true,
      Filter_OrderASC: false,
      Filter_OrderDESC: true,
    });
    saveSetting();
    if (!(await refreshMessages(false))) return;
    toggleShowFilters();
  };
  /** OnChange_MessageSort(IsAscending) (:2250-2265): Filter_OrderASC = IsAscending, Filter_OrderDESC = not IsAscending. */
  const onChangeMessageSort = (isAscending: boolean) => {
    assign({ Filter_OrderASC: isAscending, Filter_OrderDESC: !isAscending });
  };

  /** OnHandle_SearchHistorySelectedItem(SelectedString) (:1530-1560). */
  const onHandleSearchHistorySelectedItem = async (selectedString: string) => {
    assign({ SelectedHistorySearch: selectedString !== '' ? selectedString : varsRef.current.SearchMessageString });
    await refreshMessages(true);
  };
  /** OnClickSearchClear (:2145-2160): SearchMessageString "", SetScrollToTop, OnHandle_SearchHistorySelectedItem(""). */
  const onClickSearchClear = async () => {
    assign({ SearchMessageString: '' });
    scrollContentToTop();
    await onHandleSearchHistorySelectedItem('');
  };

  /** OnKeyup_SearchMessages (:2729-2754), JS CheckForEnterKey (:3198-3205): Enter → OnHandle_SearchHistorySelectedItem("")
      and blur the input. */
  const onKeyupSearchMessages = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return; // event.keyCode == 13
    void onHandleSearchHistorySelectedItem('');
    event.currentTarget.blur();
  };

  /** OnClick_Search (:1420-1445): ShowFilters False, ToggleShowSearch, FocusCursor. */
  const onClickSearch = () => {
    assign({ ShowFilters: false });
    toggleShowSearch();
    focusCursor();
  };
  /** OnClick_Filter (:2830-2842): ShowSearch False, ToggleShowFilters. */
  const onClickFilter = () => {
    assign({ ShowSearch: false });
    toggleShowFilters();
  };
  /** OnClick_CloseSearchAndFilter (:2390-2430): search → toggle it and, unless restored from cache, clear the search;
      filters → toggle and revert them; then FocusCursor. */
  const onClickCloseSearchAndFilter = async () => {
    if (varsRef.current.ShowSearch) {
      toggleShowSearch();
      if (!restoredFromCache) await onClickSearchClear();
    } else {
      toggleShowFilters();
      revertSelectedFilters();
    }
    focusCursor();
  };

  /** OnClick_GoToMessageDetail(MessageInstanceId) (:1590-1625): GetMessageInstanceById2; Exist → NavigateTo_MessageDetail,
      otherwise the info message and a GetMessages refresh. */
  const onClickGoToMessageDetail = async (messageInstanceId: string): Promise<void> => {
    assign({ CurrentMessageInstanceId: messageInstanceId });
    let exists: boolean;
    try {
      exists = await fetchMessageInstanceExists(varsRef.current, listRef.current, triggerRef.current);
    } catch (e) {
      raiseToFlowHandler(e);
      return;
    }
    if (exists) {
      onNavigateToMessageDetail(messageInstanceId);
      return;
    }
    showFeedbackMessage('This message is no longer available', FEEDBACK_INFO);
    await refreshGetMessages();
  };

  /** OnClick_MarkAllAsRead (:2090-2125): IsShowLoading, Wrapper_MarkAllAsReadNotifications; TotalChange > 0 →
      RefreshMessages and SynchronizeNumberUnreadMessages; IsShowLoading False. */
  const onClickMarkAllAsRead = async () => {
    assign({ IsShowLoading: true });
    try {
      const totalChange = await wrapper_MarkAllAsReadNotifications(varsRef.current);
      if (totalChange > 0) {
        if (!(await refreshMessages(false))) return;
        await synchronizeNumberUnreadMessages();
      }
    } catch (e) {
      raiseToFlowHandler(e);
      return;
    }
    assign({ IsShowLoading: false });
  };

  /** UpdateMessageRead(MessageInstanceId) (:1900-1975): DecrementReadMessagesCounter, row IsRead = True. */
  const updateMessageRead = (messageInstanceId: string) => {
    decrementReadMessagesCounter();
    const list = listRef.current;
    assignList({ ...list, items: list.items.map((m) => (m.id === messageInstanceId ? { ...m, isRead: true } : m)) });
  };
  /** Swipe_EventsRead (:2300-2320): MarkMessageAsRead → MessagesList.HasUnreadMessages, UpdateMessageRead. */
  const swipeEventsRead = async (messageInstanceId: string) => {
    try {
      const hasUnreadMessages = await markMessageAsRead(messageInstanceId, varsRef.current);
      assignList({ ...listRef.current, hasUnreadMessages });
      updateMessageRead(messageInstanceId);
    } catch (e) {
      raiseToFlowHandler(e);
    }
  };
  /** Swipe_EventsClear (:2625-2660): HideMessageClear (remove the row, MaxRecords - 1), MarkMessageAsClear →
      HasUnreadMessages; no message left → IsEmptyMessage; UpdateMessageClear(IsRead): not read → decrement. */
  const swipeEventsClear = async (messageInstanceId: string) => {
    const list = listRef.current;
    if (list.items.some((m) => m.id === messageInstanceId)) {
      assignList({ ...list, items: list.items.filter((m) => m.id !== messageInstanceId) });
      assign({ MaxRecords: varsRef.current.MaxRecords - 1 });
    }
    try {
      const out = await markMessageAsClear(messageInstanceId, varsRef.current);
      assignList({ ...listRef.current, hasUnreadMessages: out.hasUnreadMessages });
      if (!out.isHaveMessage) assign({ IsEmptyMessage: true });
      if (!out.isRead) decrementReadMessagesCounter();
    } catch (e) {
      raiseToFlowHandler(e);
    }
  };

  /** OnScrollEnding (:1835-1870): not refreshing → isLoadMore; when fetched and the list holds at least
      MaxRecords - 20 rows, MaxRecords += 20 and RefreshMessages; isLoadMore False. */
  const onScrollEnding = async (): Promise<void> => {
    if (varsRef.current.IsRefreshing) return;
    assign({ isLoadMore: true });
    if (!getMessages.isSuccess) return;
    if (listRef.current.items.length >= varsRef.current.MaxRecords - INCREMENT_RECORDS) {
      assign({ MaxRecords: varsRef.current.MaxRecords + INCREMENT_RECORDS });
      await refreshMessages(false);
    }
    assign({ isLoadMore: false });
  };

  const isEmpty = messagesList.items.length === 0;
  const prefix = id?.replace('$', '') ?? 'b1';

  const headerLeft = signedIn ? (
    vars.ShowSearch || vars.ShowFilters ? (
      <i
        className="icon padding-y-s padding-x-s fa fa-arrow-left fa-1x"
        data-icon={vars.ShowSearch ? 'icon-search' : 'icon-filter'}
        id={`${prefix}-Close_Search_Icon`}
        onClick={() => void onClickCloseSearchAndFilter()}
      />
    ) : (
      <MenuIcon__UpdatedOSUI id={`${prefix}-$b2`} menuAction={MenuAction.Menu} />
    )
  ) : (
    <MenuIcon_Back id={`${prefix}-$b3`} />
  );

  const title =
    vars.SearchMessageString !== '' || vars.ShowSearch ? (
      // InputWithIcon b1-$b4 (view :392-500): search icon; Input_SearchMessages (type Search, max 50, extended style
      // "display: block;", enabled when searching) and the remove icon (OnClickSearchClear).
      <InputWithIcon
        id={`${prefix}-$b4`}
        icon={<i className="icon fa fa-search fa-1x" data-icon="" />}
        input={
          <>
            <span className="input-search">
              <input
                aria-required="false"
                className="form-control search-input OSFillParent"
                data-input=""
                disabled={!(vars.ShowSearch || vars.SearchMessageString !== '')}
                id={`${prefix}-Input_SearchMessages`}
                maxLength={50}
                placeholder="Search My Notifications..."
                style={{ display: 'block' }}
                type="search"
                value={vars.SearchMessageString}
                onChange={(e) => {
                  assign({ SearchMessageString: e.currentTarget.value });
                }}
                onKeyUp={onKeyupSearchMessages}
              />
            </span>
            <i
              className="icon fa fa-remove fa-1x"
              data-icon=""
              // Compiled "color: #d3d3d3; padding: 10px; …" (view :483), as captured in dom/search.html:46 (Q7 A).
              style={{ color: 'rgb(211, 211, 211)', padding: 10, position: 'absolute', right: 0, top: 5 }}
              onClick={() => void onClickSearchClear()}
            />
          </>
        }
      />
    ) : (
      <div className="text-align-center" data-container="">
        <span data-expression="">{vars.ShowFilters ? 'Sort' : 'My Notifications'}</span>
      </div>
    );

  const headerRight = (
    <div data-container="">
      {!vars.ShowSearch && !vars.ShowFilters && (
        <i
          className="icon padding-y-s padding-x-s fa fa-search fa-1x"
          data-icon=""
          id={`${prefix}-Search_Icon`}
          style={{ marginRight: 0, padding: 5 }}
          onClick={onClickSearch}
        />
      )}
      {!vars.ShowSearch &&
        (vars.ShowFilters ? (
          <i
            className="icon padding-y-s padding-x-s margin-left-base fa fa-remove fa-1x"
            data-icon=""
            id={`${prefix}-Close_Filter_Icon`}
            style={{ marginLeft: 0, marginRight: 0 }}
            onClick={() => void onClickCloseSearchAndFilter()}
          />
        ) : (
          <i
            className="icon padding-y-s padding-x-s margin-left-base fa fa-filter fa-1x"
            data-icon=""
            id={`${prefix}-Filter_Icon`}
            style={{ marginLeft: 0, marginRight: 0, padding: 5 }}
            onClick={onClickFilter}
          />
        ))}
      <div className="ThemeGrid_Width1" data-container="" />
    </div>
  );

  // Empty list (view :740-790): filtered or searched → NoResults (unless the last message was cleared) or the banner;
  // otherwise an empty container and the banner once fetched.
  const filteredOrSearched =
    (signedIn && !vars.Filter_MessageTypePrivate) || !vars.Filter_MessageTypePublic || vars.SearchMessageString !== '';
  const emptyState =
    isDataFetched && filteredOrSearched ? (
      isEmpty && !vars.IsEmptyMessage ? (
        <div data-container="">
          <MessageList_NoResults
            id={`${prefix}-$b8`}
            placeholder1="Make sure that all words are spelled correctly."
            placeholder2="Try different keyword."
            placeholder3="Clear filter."
          />
        </div>
      ) : (
        <MessageList_NoNotifications_Banner id={`${prefix}-$b9`} />
      )
    ) : isDataFetched && isEmpty ? (
      <>
        <div data-container="" />
        <MessageList_NoNotifications_Banner id={`${prefix}-$b10`} />
      </>
    ) : null;

  const content = (
    <>
      <div className="message-list" data-container="">
        {vars.ShowSearch && (
          <MessageSearchHistory
            id={`${prefix}-$b5`}
            searchString={vars.SearchMessageString}
            recentSearchTypeId={RecentSearchType.MyNotifications}
          />
        )}
        {!vars.IsShowLoading && (
          <div data-container="" id={`${prefix}-FilterDataBlock`}>
            {!vars.ShowFilters ? (
              <>
                {!vars.ShowWarning && (
                  <Warning_PrivateMessage
                    id={`${prefix}-$b6`}
                    message={vars.WarningMessage}
                    onNavigateToLogin={() => {
                      assign({ ForceInitiateLoginFlowDateTime: currDateTime() });
                    }}
                    onDismiss={() => {
                      assign({ ShowWarning: true });
                    }}
                  />
                )}
                {!isEmpty ? (
                  <MessageListBlock
                    id={`${prefix}-$b7`}
                    isShowLoading={vars.IsShowLoading}
                    messagesList={messagesList}
                    onSwipeEventsClear={swipeEventsClear}
                    onMarkAllRead={() => void onClickMarkAllAsRead()}
                    onClickGoToMessageDetail={(messageId) => onClickGoToMessageDetail(messageId)}
                    onSwipeEventsRead={swipeEventsRead}
                    onScrollEnding={onScrollEnding}
                  />
                ) : (
                  emptyState
                )}
                <Spinner id={`${prefix}-$b11`} showLoader={vars.isLoadMore} />
              </>
            ) : (
              // Animate b1-$b12 (Speed fast, right to left) › MessageList_Filter b1-$b13 (view :953-1030).
              <Animate id={`${prefix}-$b12`} speed={Speed.Fast} animationType={AnimationType.RightToLeft}>
                <MessageList_Filter
                  id={`${prefix}-$b13`}
                  filterOrderASC={vars.Filter_OrderASC}
                  filterOrderDESC={vars.Filter_OrderDESC}
                  onMessageSort={onChangeMessageSort}
                  onResetFilters={() => void onClickResetFilters()}
                  onApplyFilters={() => void onClickApplyFilters()}
                />
              </Animate>
            )}
          </div>
        )}
        <Spinner id={`${prefix}-LoadingMarkAllRead`} showLoader={vars.IsShowLoading} />
      </div>
      <BackNavigationHandler
        id={`${prefix}-$b15`}
        onBackNavigation={(event) => {
          // BackNavigationHandler (:2040-2060): filters or search open → PreventNavigation and close them.
          if (varsRef.current.ShowFilters) {
            event.preventDefault();
            toggleShowFilters();
          }
          if (varsRef.current.ShowSearch) {
            event.preventDefault();
            toggleShowSearch();
          }
        }}
      />
    </>
  );

  return (
    <OSBlock name="MyNotifications.ScreenBlock_MessageList" id={id}>
      <Layout
        id={`${prefix}-$b1`}
        usePullToRefresh
        onOnPullToRefresh={() => void pullToRefresh()}
        menu={<div id={`${prefix}-Menu_IfLoggedIn`}>{menuIfLoggedIn}</div>}
        headerLeft={headerLeft}
        title={title}
        headerRight={headerRight}
        content={content}
        bottomBar={<div id={`${prefix}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`}>{commonUIElements}</div>}
      />
    </OSBlock>
  );
}
