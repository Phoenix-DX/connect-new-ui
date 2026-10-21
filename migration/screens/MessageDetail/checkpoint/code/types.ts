import type { LongId } from '../../lib/os-wire';

/** Screen inputs (query string, original names): UBTConnect.Legacy_MyNotificationsFlow.MessageDetail model. */
export interface MessageDetailInputs {
  MessageInstanceId: LongId;
  isOriginPushNotification: boolean;
  MessageTemplateId: LongId;
  HardwareId: string;
}

/** ScreenBlock_MessageDetail variables (model :40-91) sent with its data actions (screenData.variables). */
export interface MessageDetailVariables {
  IsEntryScreen: boolean;
  IsLoading: boolean;
  ShowAssembleAction: boolean;
  MessageInstanceId: LongId;
  MessageTemplateId: LongId;
  HardwareId: string;
  isOriginPushNotification: boolean;
}

/** GetMessageInstance.Message, the fields the block reads (domain shape; null for "" / NullIdentifier / 1900-01-01). */
export interface MessageDetail {
  messageInstanceId: LongId | null;
  messageInstanceUserId: number;
  isRead: boolean;
  dateTimeCreated: string | null;
  title: string;
  summary: string;
  isAdaptiveCard: boolean;
  messageTemplateTypeId: number;
  messageTemplatePriorityId: number;
  messageInfoTypeId: number;
  /** MessageTemplate.SentAs (sender target id); null = NullIdentifier (sent as a user). */
  sentAs: number | null;
  senderTargetId: number;
  senderTargetName: string;
  profileIconURL: string;
  messageContent: string;
  adaptiveCardContent: string;
  userName: string;
  createdByMemberId: LongId;
}

/** GetMessageInstance outputs. */
export interface GetMessageInstanceResult {
  message: MessageDetail;
  isRetracted: boolean;
  isCleared: boolean;
}

/** GetMessageTemplateParametersByMessageTemplateId row (MessageParameter). */
export interface MessageParameter {
  parameterNameId: number;
  parameterValue: string;
}
