import { callAction } from '@/api/client/callAction';
import type { MessageDetailInputs } from './types';

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

/* The two data actions of ScreenBlock_MessageDetail are in the domain api/message; this module keeps the names that the
   screen uses:
   - GetMessageInstance (DataActionGetMessageInstance, ScreenBlock controller :839-866): on demand only (OnReady and
     the adaptive-card submit); the block variables travel as screenData.variables.
   - GetMessageTemplateParametersByMessageTemplateId (aggregate, controller :811-838): refreshed with MaxRecords 50,
     StartIndex 0 by GetMessageInstanceByIdOnAfterFetch. */
export { fetchMessageInstance, fetchMessageTemplateParameters } from '@/api/message';

/** Wrapper_NotificationOpened(MessageInstanceId) → IsRetracted (controller :685-706). */
export async function wrapper_NotificationOpened(messageInstanceId: string): Promise<boolean> {
  const out = await callAction('Connect2_LegacyShared', 'ActionWrapper_NotificationOpened', {
    MessageInstanceId: messageInstanceId,
  });
  return out.IsRetracted;
}
