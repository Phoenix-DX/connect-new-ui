import { callAction } from '../../lib/api';
import { osDate, osList } from '../../lib/os-wire';
import type { GetMessageInstanceResult, MessageDetailInputs, MessageDetailVariables, MessageParameter } from './types';

const osBoolean = (v: string | null): boolean => v !== null && v.toLowerCase() === 'true';
const osLongInput = (v: string | null): string => (v === null || v === '' ? '0' : v);

/** Screen inputs from the query string, original names and OutSystems defaults (LongInteger 0, Boolean False, ""). */
export function readMessageDetailInputs(params: URLSearchParams): MessageDetailInputs {
  return {
    MessageInstanceId: osLongInput(params.get('MessageInstanceId')),
    isOriginPushNotification: osBoolean(params.get('isOriginPushNotification')),
    MessageTemplateId: osLongInput(params.get('MessageTemplateId')),
    HardwareId: params.get('HardwareId') ?? '',
  };
}

/** GetMessageInstance (DataActionGetMessageInstance, ScreenBlock controller :839-866): on demand only (OnReady and the
    adaptive-card submit); the block variables travel as screenData.variables. */
export async function fetchMessageInstance(v: MessageDetailVariables): Promise<GetMessageInstanceResult> {
  const out = await callAction('Connect2_LegacyShared', 'ScreenBlock_MessageDetail/DataActionGetMessageInstance', {
    ...v,
  });
  const m = out.Message;
  const instanceId = m.MessageInstance.Id;
  return {
    message: {
      messageInstanceId: instanceId === '' || instanceId === '0' ? null : instanceId,
      messageInstanceUserId: m.MessageInstance.UserId,
      isRead: m.MessageInstance.IsRead,
      dateTimeCreated: osDate(m.MessageInstance.DateTimeCreated),
      title: m.MessageTemplate.Title,
      summary: m.MessageTemplate.Summary,
      isAdaptiveCard: m.MessageTemplate.IsAdaptiveCard,
      messageTemplateTypeId: m.MessageTemplate.MessageTemplateTypeId,
      messageTemplatePriorityId: m.MessageTemplate.MessageTemplatePriorityId,
      messageInfoTypeId: m.MessageTemplate.MessageInfoTypeId,
      sentAs: m.MessageTemplate.SentAs === 0 ? null : m.MessageTemplate.SentAs,
      senderTargetId: m.MessageSenderTarget.Id,
      senderTargetName: m.MessageSenderTarget.Name,
      profileIconURL: m.MessageSenderTarget.ProfileIconURL,
      messageContent: m.MessageContent.MessageContent,
      adaptiveCardContent: m.AdaptiveCardJSON.AdaptiveCardContent,
      userName: m.User.Name,
      createdByMemberId: m.CreatedByMemberId,
    },
    isRetracted: out.IsRetracted,
    isCleared: out.IsCleared,
  };
}

/** GetMessageTemplateParametersByMessageTemplateId (aggregate, controller :811-838): refreshed with MaxRecords 50,
    StartIndex 0 by GetMessageInstanceByIdOnAfterFetch. */
export async function fetchMessageTemplateParameters(v: MessageDetailVariables): Promise<MessageParameter[]> {
  const out = await callAction(
    'Connect2_LegacyShared',
    'ScreenBlock_MessageDetail/ScreenDataSetGetMessageTemplateParametersByMessageTemplateId',
    { ...v, MaxRecords: 50, StartIndex: 0 },
  );
  return osList(out.List).map((row) => ({
    parameterNameId: row.MessageParameter.ParameterNameId,
    parameterValue: row.MessageParameter.ParameterValue,
  }));
}

/** Wrapper_NotificationOpened(MessageInstanceId) → IsRetracted (controller :685-706). */
export async function wrapper_NotificationOpened(messageInstanceId: string): Promise<boolean> {
  const out = await callAction('Connect2_LegacyShared', 'ActionWrapper_NotificationOpened', {
    MessageInstanceId: messageInstanceId,
  });
  return out.IsRetracted;
}
