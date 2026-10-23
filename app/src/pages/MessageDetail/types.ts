import type { LongId } from '@/legacy/os/os-wire';

/** Screen inputs (query string, original names): UBTConnect.Legacy_MyNotificationsFlow.MessageDetail model. */
export interface MessageDetailInputs {
  MessageInstanceId: LongId;
  isOriginPushNotification: boolean;
  MessageTemplateId: LongId;
  HardwareId: string;
}

/* The ScreenBlock_MessageDetail variables (model :40-91) sent with its data actions (screenData.variables), the fields
   of GetMessageInstance.Message that the block reads (null for "" / NullIdentifier / 1900-01-01) and a row of
   GetMessageTemplateParametersByMessageTemplateId (MessageParameter) are domain types of api/message; this module
   keeps the names that the screen uses. */
export type { MessageDetail, MessageDetailCallInputs as MessageDetailVariables, MessageParameter } from '@/api/message';
