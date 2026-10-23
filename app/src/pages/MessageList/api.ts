import { markAllNotificationsAsRead } from '@/api/notification';
import type { MessageListVariables } from './types';

/* The two data actions and the two message marks of ScreenBlock_MessageList are in the domain api/message; this
   module keeps the names that the screen uses:
   - GetMessages (DataActionGetMessages, ScreenBlock controller :1250-1270): refreshed on demand only (OnReady and
     RefreshMessages); OnAfterFetch_GetMessages runs on its outputs.
   - GetMessageInstanceById2 (DataActionGetMessageInstanceById2, controller :1278-1296): refreshed by
     OnClick_GoToMessageDetail with CurrentMessageInstanceId set.
   - MarkMessageAsRead(MessageInstanceId, DeviceHardwareId, SelectedHistorySearch, Private, Public) →
     HasUnreadMessages, and MarkMessageAsClear (the same inputs) → HasUnreadMessages, IsHaveMessage, IsRead.
   Both data actions send screenData.variables of the block (every block variable and input; MessagesList keeps
   TotalCount 0, never assigned in the block). */
export { fetchMessageInstanceExists, fetchMessages, markMessageAsClear, markMessageAsRead } from '@/api/message';

/** Wrapper_MarkAllAsReadNotifications(IsPublic, IsPrivate, DeviceHardwareId, SearchTerm) → TotalChange: the block
    sends its message-type filters, the device and the selected search. The call is in the domain api/notification. */
export function wrapper_MarkAllAsReadNotifications(v: MessageListVariables): Promise<number> {
  return markAllNotificationsAsRead({
    isPublic: v.Filter_MessageTypePublic,
    isPrivate: v.Filter_MessageTypePrivate,
    deviceHardwareId: v.DeviceHardwareId,
    searchTerm: v.SelectedHistorySearch,
  });
}
