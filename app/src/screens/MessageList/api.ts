import { callAction } from '@/api/client/callAction';
import { osList, osNumber, wireList } from '@/legacy/os/os-wire';
import type { GetMessagesResult, MessageItem, MessageListVariables, MessagesList, MessageWire } from './types';

const toMessage = (w: MessageWire): MessageItem => ({
  id: w.Id,
  messageTemplateTypeId: w.MessageTemplateTypeId,
  title: w.Title,
  dateTimeCreated: w.DateTimeCreated,
  messageTemplatePriorityId: w.MessageTemplatePriorityId,
  profileIconURL: w.ProfileIconURL,
  isClear: w.IsClear,
  isRead: w.IsRead,
  createdByUserId: w.CreatedByUserId,
  createdByMemberId: w.CreatedByMemberId,
  messageInfoTypeId: w.MessageInfoTypeId,
});

const toWire = (m: MessageItem): MessageWire => ({
  Id: m.id,
  MessageTemplateTypeId: m.messageTemplateTypeId,
  Title: m.title,
  Summary: '',
  DateTimeCreated: m.dateTimeCreated,
  MessageTemplatePriorityId: m.messageTemplatePriorityId,
  ProfileIconURL: m.profileIconURL,
  IsClear: m.isClear,
  IsRead: m.isRead,
  CreatedByUserId: m.createdByUserId,
  CreatedByMemberId: m.createdByMemberId,
  MessageInfoTypeId: m.messageInfoTypeId,
  MessageSenderTargetName: '',
});

/** screenData.variables of ScreenBlock_MessageList (OutSystems sends every block variable and input with its data
    actions; the names are the contract's). MessagesList keeps TotalCount 0 (never assigned in the block). */
const blockVariables = (v: MessageListVariables, list: MessagesList, triggerPullToRefresh: boolean) => ({
  ...v,
  TotalPrivate: String(v.TotalPrivate),
  TotalPublic: String(v.TotalPublic),
  ForceInitiateLoginFlowDateTime: v.ForceInitiateLoginFlowDateTime || '1900-01-01T00:00:00',
  MessagesList: {
    HasUnreadMessages: list.hasUnreadMessages,
    Items: wireList(list.items.map(toWire)),
    TotalCount: '0',
  },
  Trigger_PullToRefresh: triggerPullToRefresh,
});

/** GetMessages (DataActionGetMessages, ScreenBlock controller :1250-1270): refreshed on demand only (OnReady and
    RefreshMessages); OnAfterFetch_GetMessages runs on its outputs. */
export async function fetchMessages(
  v: MessageListVariables,
  list: MessagesList,
  triggerPullToRefresh: boolean,
): Promise<GetMessagesResult> {
  const out = await callAction(
    'Connect2_LegacyShared',
    'ScreenBlock_MessageList/DataActionGetMessages',
    blockVariables(v, list, triggerPullToRefresh),
  );
  return {
    messages: osList(out.Messages as { List?: MessageWire[] }).map(toMessage),
    hasUnreadMessages: out.HasUnreadMessages,
    countUnreadMessages: osNumber(out.CountUnreadMessages),
  };
}

/** GetMessageInstanceById2 (DataActionGetMessageInstanceById2, controller :1278-1296): refreshed by
    OnClick_GoToMessageDetail with CurrentMessageInstanceId set. */
export async function fetchMessageInstanceExists(
  v: MessageListVariables,
  list: MessagesList,
  triggerPullToRefresh: boolean,
): Promise<boolean> {
  const out = await callAction(
    'Connect2_LegacyShared',
    'ScreenBlock_MessageList/DataActionGetMessageInstanceById2',
    blockVariables(v, list, triggerPullToRefresh),
  );
  return out.Exist;
}

/** Wrapper_MarkAllAsReadNotifications(IsPublic, IsPrivate, DeviceHardwareId, SearchTerm) → TotalChange. */
export async function wrapper_MarkAllAsReadNotifications(v: MessageListVariables): Promise<number> {
  const out = await callAction('Connect2_LegacyShared', 'ActionWrapper_MarkAllAsReadNotifications', {
    IsPublic: v.Filter_MessageTypePublic,
    IsPrivate: v.Filter_MessageTypePrivate,
    DeviceHardwareId: v.DeviceHardwareId,
    SearchTerm: v.SelectedHistorySearch,
  });
  return out.TotalChange;
}

const messageInputs = (messageInstanceId: string, v: MessageListVariables) => ({
  MessageInstanceId: messageInstanceId,
  DeviceHardwareId: v.DeviceHardwareId,
  SelectedHistorySearch: v.SelectedHistorySearch,
  MessageTypePrivate: v.Filter_MessageTypePrivate,
  MessageTypePublic: v.Filter_MessageTypePublic,
});

/** MarkMessageAsRead(MessageInstanceId, DeviceHardwareId, SelectedHistorySearch, Private, Public) → HasUnreadMessages. */
export async function markMessageAsRead(messageInstanceId: string, v: MessageListVariables): Promise<boolean> {
  const out = await callAction('Connect2_LegacyShared', 'ActionMarkMessageAsRead', messageInputs(messageInstanceId, v));
  return out.HasUnreadMessages;
}

/** MarkMessageAsClear(same inputs) → HasUnreadMessages, IsHaveMessage, IsRead. */
export async function markMessageAsClear(
  messageInstanceId: string,
  v: MessageListVariables,
): Promise<{ hasUnreadMessages: boolean; isHaveMessage: boolean; isRead: boolean }> {
  const out = await callAction(
    'Connect2_LegacyShared',
    'ActionMarkMessageAsClear',
    messageInputs(messageInstanceId, v),
  );
  return { hasUnreadMessages: out.HasUnreadMessages, isHaveMessage: out.IsHaveMessage, isRead: out.IsRead };
}
