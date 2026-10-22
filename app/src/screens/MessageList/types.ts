import type { LongId } from '@/legacy/os/os-wire';

/** Wire record MessageListItem (Connect2_LegacyShared), as DataActionGetMessages answers it (analysis/types.ts:53-67). */
export interface MessageWire {
  Id: string;
  MessageTemplateTypeId: number;
  Title: string;
  Summary: string;
  DateTimeCreated: string;
  MessageTemplatePriorityId: number;
  ProfileIconURL: string;
  IsClear: boolean;
  IsRead: boolean;
  CreatedByUserId: number;
  CreatedByMemberId: string;
  MessageInfoTypeId: number;
  MessageSenderTargetName: string;
}

/** One row of MessagesList (domain shape seen by the components). */
export interface MessageItem {
  id: LongId;
  /** MessageType: Private 1, Public 2 (TotalPrivate / TotalPublic). */
  messageTemplateTypeId: number;
  title: string;
  /** OutSystems DateTime text ("yyyy-MM-ddTHH:mm:ss"), formatted by the item. */
  dateTimeCreated: string;
  messageTemplatePriorityId: number;
  profileIconURL: string;
  isClear: boolean;
  isRead: boolean;
  createdByUserId: number;
  createdByMemberId: string;
  messageInfoTypeId: number;
}

/** Block variable MessagesList (LongIntegerBooleanMessageListItemListRecord): the rows and HasUnreadMessages. */
export interface MessagesList {
  items: MessageItem[];
  hasUnreadMessages: boolean;
}

/** Outputs of DataActionGetMessages used by OnAfterFetch_GetMessages. */
export interface GetMessagesResult {
  messages: MessageItem[];
  hasUnreadMessages: boolean;
  countUnreadMessages: number;
}

/** ScreenBlock_MessageList variables that OutSystems sends with its data actions (screenData.variables). */
export interface MessageListVariables {
  ShowWarning: boolean;
  ShowFilters: boolean;
  ShowSearch: boolean;
  SearchMessageString: string;
  OrderByIsAscending: boolean;
  SelectedHistorySearch: string;
  DeviceHardwareId: string;
  MaxRecords: number;
  isLoadMore: boolean;
  Filter_OrderASC: boolean;
  Filter_OrderDESC: boolean;
  Filter_MessageTypePrivate: boolean;
  Filter_MessageTypePublic: boolean;
  IsShowLoading: boolean;
  IsEmptyMessage: boolean;
  IsRefreshing: boolean;
  HasUnread: boolean;
  WarningMessage: string;
  CurrentMessageInstanceId: LongId;
  /** "" = NullDate (sent as 1900-01-01T00:00:00). */
  ForceInitiateLoginFlowDateTime: string;
  TotalPrivate: number;
  TotalPublic: number;
  SelectedFilter_OrderASC: boolean;
  SelectedFilter_MessageTypePrivate: boolean;
  SelectedFilter_MessageTypePublic: boolean;
}
