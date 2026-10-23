/** Wire record MessageListItem (Connect2_LegacyShared), as DataActionGetMessages answers it (analysis/types.ts:53-67).
    The mocks build the rows in this shape. */
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

/* The block variable MessagesList (LongIntegerBooleanMessageListItemListRecord: the rows and HasUnreadMessages), the
   outputs of DataActionGetMessages that OnAfterFetch_GetMessages reads and the ScreenBlock_MessageList variables that
   OutSystems sends with its data actions (screenData.variables) are domain types of api/message; this module keeps
   the names that the screen uses. */
export type {
  MessageListCallInputs as MessageListVariables,
  MessagesList,
  MessagesResult as GetMessagesResult,
} from '@/api/message';
