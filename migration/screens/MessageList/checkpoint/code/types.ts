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
