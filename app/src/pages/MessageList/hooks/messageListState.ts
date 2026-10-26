import type { MessageListCallInputs, MessagesList, MessagesResult } from '@/api/message';
import { MessageType } from '@/pages/MessageList/staticEntities';

/** The state of the message list block and its reducer, with the client actions of the block as pure functions.
    @origin Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList */

/** The block variables, kept as one record in the view cache: a view that the cache restores keeps them. */
export interface MessageListState {
  /** The block variables with their OutSystems names. Both data actions send them as they are (screenData.variables). */
  variables: MessageListCallInputs;
  /** [MessagesList] The rows and HasUnreadMessages. */
  messagesList: MessagesList;
}

/** The changes of the state. Each one assigns the values of one step of a flow, in the order of the flow. */
export type MessageListAction =
  /** RefreshMessages starts: IsRefreshing True. */
  | { type: 'refreshStarted' }
  /** OnAfterFetch_GetMessages: the list, TotalPrivate / TotalPublic, HasUnread, IsRefreshing False. */
  | { type: 'messagesFetched'; result: MessagesResult }
  /** ToggleShowFilters: RevertSelectedFiltersToPersistedValue, then ShowFilters = not ShowFilters. */
  | { type: 'filtersToggled' }
  /** RevertSelectedFiltersToPersistedValue. */
  | { type: 'filtersReverted' }
  /** ToggleShowSearch: ShowSearch = not ShowSearch. */
  | { type: 'searchToggled' }
  /** OnClick_Search: ShowFilters False. */
  | { type: 'filtersHidden' }
  /** OnClick_Filter: ShowSearch False. */
  | { type: 'searchHidden' }
  /** SaveSetting, then SetSortVariable. */
  | { type: 'settingSaved' }
  /** OnClick_ResetFilters: the default filters (Private = signed in). */
  | { type: 'filtersReset'; signedIn: boolean }
  /** OnChange_MessageSort(IsAscending). */
  | { type: 'sortChanged'; isAscending: boolean }
  /** The search input changed: SearchMessageString. */
  | { type: 'searchStringChanged'; value: string }
  /** OnClickSearchClear: SearchMessageString "". */
  | { type: 'searchCleared' }
  /** OnHandle_SearchHistorySelectedItem(SelectedString): SelectedHistorySearch. */
  | { type: 'historySearchSelected'; selectedString: string }
  /** OnClick_GoToMessageDetail: CurrentMessageInstanceId. */
  | { type: 'currentMessageSet'; messageInstanceId: string }
  /** OnClick_MarkAllAsRead: IsShowLoading. */
  | { type: 'showLoadingSet'; isShowLoading: boolean }
  /** MarkMessageAsRead or MarkMessageAsClear answered: MessagesList.HasUnreadMessages. */
  | { type: 'unreadMessagesChanged'; hasUnreadMessages: boolean }
  /** UpdateMessageRead: the row IsRead = True. */
  | { type: 'messageRead'; messageInstanceId: string }
  /** HideMessageClear: a row in the list goes, and MaxRecords - 1. */
  | { type: 'messageHidden'; messageInstanceId: string }
  /** Swipe_EventsClear, no message left: IsEmptyMessage True. */
  | { type: 'messagesEmptied' }
  /** OnScrollEnding: isLoadMore. */
  | { type: 'loadMoreSet'; isLoadMore: boolean }
  /** OnScrollEnding: MaxRecords + IncrementRecords. */
  | { type: 'maxRecordsIncreased'; increment: number }
  /** Warning_PrivateMessage NavigateTo_Login: ForceInitiateLoginFlowDateTime = CurrDateTime(). */
  | { type: 'loginRequested'; dateTime: string }
  /** Warning_PrivateMessage Dismiss: ShowWarning True. */
  | { type: 'warningDismissed' };

/** OnScrollEnding local variable IncrementRecords (default 20). */
export const INCREMENT_RECORDS = 20;

/** The model defaults after OnInitialize, when the view cache does not restore the block: SelectedFilter_Private and
    SelectedFilter_Public True, SelectedFilter_OrderASC False, DeviceHardwareId = the device UUID, then
    InitializeSetting. InitializeSetting: the warning text; signed in, ShowWarning True and the selected type filters;
    signed out, ShowWarning False, Private False and Public True; then the order from SelectedFilter_OrderASC. */
export function initialMessageListState(signedIn: boolean, deviceHardwareId: string): MessageListState {
  const selectedOrderASC = false;
  return {
    variables: {
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
      DeviceHardwareId: deviceHardwareId,
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
    },
    messagesList: { items: [], hasUnreadMessages: false },
  };
}

/** The unread rows of one MessageType (TotalPrivate / TotalPublic of OnAfterFetch_GetMessages). */
const unreadOfType = (result: MessagesResult, messageType: number): number =>
  result.messages.filter((m) => !m.isRead && m.messageTemplateTypeId === messageType).length;

/** RevertSelectedFiltersToPersistedValue: the edited filters from the selected ones. */
const revertedFilters = (v: MessageListCallInputs): Partial<MessageListCallInputs> => ({
  Filter_OrderASC: v.SelectedFilter_OrderASC,
  Filter_OrderDESC: !v.SelectedFilter_OrderASC,
  Filter_MessageTypePrivate: v.SelectedFilter_MessageTypePrivate,
  Filter_MessageTypePublic: v.SelectedFilter_MessageTypePublic,
});

/** Assigns block variables. Each assignment gives a new record, as each assignment of the block rendered again. */
const assign = (state: MessageListState, values: Partial<MessageListCallInputs>): MessageListState => ({
  ...state,
  variables: { ...state.variables, ...values },
});

/** Assigns MessagesList. */
const assignList = (state: MessageListState, messagesList: MessagesList): MessageListState => ({
  ...state,
  messagesList,
});

export function messageListReducer(state: MessageListState, action: MessageListAction): MessageListState {
  const v = state.variables;
  const list = state.messagesList;
  switch (action.type) {
    case 'refreshStarted':
      return assign(state, { IsRefreshing: true });
    case 'messagesFetched': {
      const { result } = action;
      return assign(assignList(state, { items: result.messages, hasUnreadMessages: result.hasUnreadMessages }), {
        TotalPrivate: unreadOfType(result, MessageType.Private),
        TotalPublic: unreadOfType(result, MessageType.Public),
        HasUnread: result.hasUnreadMessages,
        IsRefreshing: false,
      });
    }
    case 'filtersToggled': {
      const reverted = assign(state, revertedFilters(v));
      return assign(reverted, { ShowFilters: !reverted.variables.ShowFilters });
    }
    case 'filtersReverted':
      return assign(state, revertedFilters(v));
    case 'searchToggled':
      return assign(state, { ShowSearch: !v.ShowSearch });
    case 'filtersHidden':
      return assign(state, { ShowFilters: false });
    case 'searchHidden':
      return assign(state, { ShowSearch: false });
    case 'settingSaved': {
      // SaveSetting: the selected filters from the edited ones. SetSortVariable: OrderByIsAscending = Filter_OrderASC.
      const saved = assign(state, {
        SelectedFilter_OrderASC: v.Filter_OrderASC,
        SelectedFilter_MessageTypePublic: v.Filter_MessageTypePublic,
        SelectedFilter_MessageTypePrivate: v.Filter_MessageTypePrivate,
      });
      return assign(saved, { OrderByIsAscending: saved.variables.Filter_OrderASC });
    }
    case 'filtersReset':
      return assign(state, {
        Filter_MessageTypePrivate: action.signedIn,
        Filter_MessageTypePublic: true,
        Filter_OrderASC: false,
        Filter_OrderDESC: true,
      });
    case 'sortChanged':
      return assign(state, { Filter_OrderASC: action.isAscending, Filter_OrderDESC: !action.isAscending });
    case 'searchStringChanged':
      return assign(state, { SearchMessageString: action.value });
    case 'searchCleared':
      return assign(state, { SearchMessageString: '' });
    case 'historySearchSelected':
      return assign(state, {
        SelectedHistorySearch: action.selectedString !== '' ? action.selectedString : v.SearchMessageString,
      });
    case 'currentMessageSet':
      return assign(state, { CurrentMessageInstanceId: action.messageInstanceId });
    case 'showLoadingSet':
      return assign(state, { IsShowLoading: action.isShowLoading });
    case 'unreadMessagesChanged':
      return assignList(state, { ...list, hasUnreadMessages: action.hasUnreadMessages });
    case 'messageRead':
      return assignList(state, {
        ...list,
        items: list.items.map((m) => (m.id === action.messageInstanceId ? { ...m, isRead: true } : m)),
      });
    case 'messageHidden': {
      if (!list.items.some((m) => m.id === action.messageInstanceId)) return state;
      const hidden = assignList(state, { ...list, items: list.items.filter((m) => m.id !== action.messageInstanceId) });
      return assign(hidden, { MaxRecords: v.MaxRecords - 1 });
    }
    case 'messagesEmptied':
      return assign(state, { IsEmptyMessage: true });
    case 'loadMoreSet':
      return assign(state, { isLoadMore: action.isLoadMore });
    case 'maxRecordsIncreased':
      return assign(state, { MaxRecords: v.MaxRecords + action.increment });
    case 'loginRequested':
      return assign(state, { ForceInitiateLoginFlowDateTime: action.dateTime });
    case 'warningDismissed':
      return assign(state, { ShowWarning: true });
  }
}
