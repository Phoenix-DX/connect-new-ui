import { getClientVar, setClientVar } from '@/platform/session/session';
import { feedbackMessageAutoClose, type UbtMessageType } from './feedbackMessageAutoClose';

/* UBT_AppManager.DelayedMessage_Show (CR-Login-1; knowledge/shell-facts.md "Answers recorded for routes"): a message
   kept for the next screen in AppManager_DelayedMessage (JSON: MessageTitle, Message, Type) is shown once, auto-closing,
   then cleared. The original's only writer is DelayedMessage_Define in FRD_HandleEvent_Logout (Firebase Realtime Database
   remote logout), which the mock app does not have, so in practice nothing is pending. */
interface DelayedMessage {
  MessageTitle: string;
  Message: string;
  Type: UbtMessageType;
}

export function delayedMessageShow(): void {
  const raw = getClientVar('UBT_AppManager.AppManager_DelayedMessage');
  if (raw === '') return;
  let msg: DelayedMessage;
  try {
    msg = JSON.parse(raw) as DelayedMessage;
  } catch {
    setClientVar('UBT_AppManager.AppManager_DelayedMessage', '');
    return;
  }
  setClientVar('UBT_AppManager.AppManager_DelayedMessage', '');
  feedbackMessageAutoClose({
    title: msg.MessageTitle,
    message: msg.Message,
    messageType: msg.Type,
    encodedHtml: true,
    extendedClass: '',
    delayMs: 0,
    useDebounce: false,
  });
}
