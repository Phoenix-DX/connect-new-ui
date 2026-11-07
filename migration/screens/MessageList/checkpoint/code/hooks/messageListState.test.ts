import { describe, expect, it } from 'vitest';
import type { MessageItem, MessagesResult } from '@/api/message';
import {
  INCREMENT_RECORDS,
  initialMessageListState,
  messageListReducer,
  type MessageListAction,
  type MessageListState,
} from './messageListState';

/* The reducer of the message list block, without React. Fictional rows. */
const item = (id: string, patch: Partial<MessageItem> = {}): MessageItem => ({
  id,
  messageTemplateTypeId: 1,
  title: `Choir practice moved ${id}`,
  dateTimeCreated: '2026-10-14T10:20:00',
  messageTemplatePriorityId: 1,
  profileIconURL: '',
  isClear: false,
  isRead: false,
  createdByUserId: 0,
  createdByMemberId: '0',
  messageInfoTypeId: 1,
  ...patch,
});

const reduce = (state: MessageListState, ...actions: MessageListAction[]) => actions.reduce(messageListReducer, state);

describe('initialMessageListState (OnInitialize, InitializeSetting)', () => {
  it('signed in: the warning is hidden and both message types are filtered in; newest first', () => {
    const { variables, messagesList } = initialMessageListState(true, 'device-7');
    expect(variables).toMatchObject({
      ShowWarning: true,
      Filter_MessageTypePrivate: true,
      Filter_MessageTypePublic: true,
      Filter_OrderASC: false,
      Filter_OrderDESC: true,
      OrderByIsAscending: false,
      DeviceHardwareId: 'device-7',
      MaxRecords: 20,
      CurrentMessageInstanceId: '0',
      ForceInitiateLoginFlowDateTime: '',
      SelectedFilter_MessageTypePrivate: true,
      SelectedFilter_MessageTypePublic: true,
      SelectedFilter_OrderASC: false,
    });
    expect(variables.WarningMessage).toBe('To access your Private Messages,\r\nplease login to the  Connect App.');
    expect(messagesList).toEqual({ items: [], hasUnreadMessages: false });
  });

  it('signed out: the warning shows and the private messages are filtered out', () => {
    const { variables } = initialMessageListState(false, '');
    expect(variables.ShowWarning).toBe(false);
    expect(variables.Filter_MessageTypePrivate).toBe(false);
    expect(variables.Filter_MessageTypePublic).toBe(true);
  });
});

describe('messageListReducer', () => {
  const initial = initialMessageListState(true, '');

  it('messagesFetched: the list, the unread totals per type, HasUnread and IsRefreshing False', () => {
    const result: MessagesResult = {
      messages: [
        item('1'),
        item('2', { messageTemplateTypeId: 2 }),
        item('3', { messageTemplateTypeId: 2, isRead: true }),
        item('4', { messageTemplateTypeId: 2 }),
      ],
      hasUnreadMessages: true,
      countUnreadMessages: 3,
    };
    const state = reduce(initial, { type: 'refreshStarted' });
    expect(state.variables.IsRefreshing).toBe(true);
    const fetched = reduce(state, { type: 'messagesFetched', result });
    expect(fetched.messagesList).toEqual({ items: result.messages, hasUnreadMessages: true });
    expect(fetched.variables).toMatchObject({ TotalPrivate: 1, TotalPublic: 2, HasUnread: true, IsRefreshing: false });
  });

  it('filtersToggled reverts the edited filters to the selected ones and toggles ShowFilters', () => {
    const edited = reduce(initial, { type: 'filtersToggled' }, { type: 'sortChanged', isAscending: true });
    expect(edited.variables).toMatchObject({ ShowFilters: true, Filter_OrderASC: true, Filter_OrderDESC: false });
    const closed = reduce(edited, { type: 'filtersToggled' });
    expect(closed.variables).toMatchObject({ ShowFilters: false, Filter_OrderASC: false, Filter_OrderDESC: true });
  });

  it('settingSaved keeps the edited filters as the selected ones and sets OrderByIsAscending', () => {
    const saved = reduce(initial, { type: 'sortChanged', isAscending: true }, { type: 'settingSaved' });
    expect(saved.variables).toMatchObject({
      SelectedFilter_OrderASC: true,
      SelectedFilter_MessageTypePrivate: true,
      SelectedFilter_MessageTypePublic: true,
      OrderByIsAscending: true,
    });
    // A later revert keeps the saved order.
    const reverted = reduce(saved, { type: 'sortChanged', isAscending: false }, { type: 'filtersReverted' });
    expect(reverted.variables).toMatchObject({ Filter_OrderASC: true, Filter_OrderDESC: false });
  });

  it('filtersReset: Private = signed in, Public True, newest first', () => {
    const sorted = reduce(initial, { type: 'sortChanged', isAscending: true });
    expect(reduce(sorted, { type: 'filtersReset', signedIn: false }).variables).toMatchObject({
      Filter_MessageTypePrivate: false,
      Filter_MessageTypePublic: true,
      Filter_OrderASC: false,
      Filter_OrderDESC: true,
    });
    expect(reduce(sorted, { type: 'filtersReset', signedIn: true }).variables.Filter_MessageTypePrivate).toBe(true);
  });

  it('search: the typed string, the selected history item or the typed string, then cleared', () => {
    const typed = reduce(initial, { type: 'searchToggled' }, { type: 'searchStringChanged', value: 'camp' });
    expect(typed.variables).toMatchObject({ ShowSearch: true, SearchMessageString: 'camp' });
    expect(reduce(typed, { type: 'historySearchSelected', selectedString: '' }).variables.SelectedHistorySearch).toBe(
      'camp',
    );
    expect(
      reduce(typed, { type: 'historySearchSelected', selectedString: 'hall' }).variables.SelectedHistorySearch,
    ).toBe('hall');
    expect(reduce(typed, { type: 'searchCleared' }).variables.SearchMessageString).toBe('');
    expect(reduce(typed, { type: 'searchHidden' }).variables.ShowSearch).toBe(false);
    expect(reduce(initial, { type: 'filtersToggled' }, { type: 'filtersHidden' }).variables.ShowFilters).toBe(false);
  });

  it('messageRead marks the row read; unreadMessagesChanged sets MessagesList.HasUnreadMessages', () => {
    const listed = reduce(initial, {
      type: 'messagesFetched',
      result: { messages: [item('1'), item('2')], hasUnreadMessages: true, countUnreadMessages: 2 },
    });
    const read = reduce(
      listed,
      { type: 'unreadMessagesChanged', hasUnreadMessages: false },
      { type: 'messageRead', messageInstanceId: '2' },
    );
    expect(read.messagesList.hasUnreadMessages).toBe(false);
    expect(read.messagesList.items.map((m) => m.isRead)).toEqual([false, true]);
  });

  it('messageHidden removes a listed row and lowers MaxRecords; an unknown row changes nothing', () => {
    const listed = reduce(initial, {
      type: 'messagesFetched',
      result: { messages: [item('1'), item('2')], hasUnreadMessages: true, countUnreadMessages: 2 },
    });
    const hidden = reduce(listed, { type: 'messageHidden', messageInstanceId: '1' });
    expect(hidden.messagesList.items.map((m) => m.id)).toEqual(['2']);
    expect(hidden.variables.MaxRecords).toBe(19);
    expect(reduce(hidden, { type: 'messageHidden', messageInstanceId: '9' })).toBe(hidden);
    expect(reduce(hidden, { type: 'messagesEmptied' }).variables.IsEmptyMessage).toBe(true);
  });

  it('load more, loading, current message, login and dismiss assign their variables', () => {
    const state = reduce(
      initial,
      { type: 'loadMoreSet', isLoadMore: true },
      { type: 'maxRecordsIncreased', increment: INCREMENT_RECORDS },
      { type: 'showLoadingSet', isShowLoading: true },
      { type: 'currentMessageSet', messageInstanceId: '81017' },
      { type: 'loginRequested', dateTime: '2026-10-20T09:30:00' },
      { type: 'warningDismissed' },
    );
    expect(state.variables).toMatchObject({
      isLoadMore: true,
      MaxRecords: 40,
      IsShowLoading: true,
      CurrentMessageInstanceId: '81017',
      ForceInitiateLoginFlowDateTime: '2026-10-20T09:30:00',
      ShowWarning: true,
    });
  });

  it('each assignment gives a new state record and does not change the previous one', () => {
    const next = messageListReducer(initial, { type: 'searchToggled' });
    expect(next).not.toBe(initial);
    expect(initial.variables.ShowSearch).toBe(false);
  });
});
