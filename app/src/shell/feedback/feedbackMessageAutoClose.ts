import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage, type PlatformMessageTypeName } from './feedbackStore';

/* UBTJavaScriptUtils.FeedbackMessage_AutoClose (migration/shell/sources/UBTJavaScriptUtils.controller.js:81-295, "JSU";
   knowledge/shell-facts.md U9). It builds no markup: it wraps the platform message and adds `feedback-message-autoclose`,
   whose CSS slides the message down and up again in 5 s (HF bundle:4460-4462, 20374, 23078-23079). */

/** UBT_MessageType. Its ids are not captured (UBTJavaScriptUtils.model.js); the action passes `Id - 1` as the platform
    type, and the captures show info → `feedback-message-info`, so the ids are kept one above the platform types. */
export type UbtMessageType = PlatformMessageTypeName;
const ubtMessageTypeId = (type: UbtMessageType): number => PLATFORM_MESSAGE_TYPE[type] + 1;
const UBT_ERROR_ID = ubtMessageTypeId('error');

export interface FeedbackMessageAutoCloseInput {
  /** Title (default ""): when set, title and message are wrapped in divs and the message is shown as HTML */
  title?: string;
  /** Message (mandatory) */
  message: string;
  /** MessageType (default Error) */
  messageType?: UbtMessageType;
  /** EncodedHTML (default True) */
  encodedHtml?: boolean;
  /** ExtendedClass (default "") */
  extendedClass?: string;
  /** DelayMs (default 0) */
  delayMs?: number;
  /** useDebounce (default False): skip the message when one was shown or scheduled less than 5 s ago */
  useDebounce?: boolean;
}

interface Call {
  title: string;
  message: string;
  messageTypeId: number;
  encodedHtml: boolean;
  extendedClass: string;
  delayMs: number;
  useDebounce: boolean;
}

/** window.ubt.lastTimeMessageFired (JSU:273-295): set by the first call, then by every shown or scheduled message. */
let lastTimeMessageFired: number | null = null;
const DEBOUNCE_MS = 5000;

function run(call: Call): void {
  let { message, messageTypeId, encodedHtml } = call;
  if (messageTypeId === 0) messageTypeId = UBT_ERROR_ID; // NullIdentifier → Error (JSU:99-102)
  const now = Date.now(); // CurrDateTime (JSU:105)
  lastTimeMessageFired ??= now; // InitializeVariablesJS (JSU:286-295)
  const last = lastTimeMessageFired;
  if (call.useDebounce && !(last === now || last + DEBOUNCE_MS <= now)) return; // JSU:118-125

  const lastChar = message.slice(-1); // JSU:128-131
  if (lastChar !== '.' && lastChar !== '!' && lastChar !== '?') message += '.';
  if (call.title !== '') {
    // JSU:132-140
    message = `<div class='feedback-message--title'>${call.title}</div><div class='feedback-message--body'>${message}</div>`;
    encodedHtml = false;
  }

  if (call.delayMs === 0) {
    // JSU:142-145
    const extraClasses = (call.extendedClass !== '' ? `${call.extendedClass} ` : '') + 'feedback-message-autoclose';
    showFeedbackMessage(message, messageTypeId - 1, encodedHtml, extraClasses, true);
  } else {
    // TimeoutJS (JSU:146-157, 273-279), with the original bugs reproduced (docs/known-original-bugs.md):
    // B1: the re-call passes DelayMs as MessageType, so the platform type becomes DelayMs - 1;
    // B2: it passes the already wrapped message and the same title, so a titled message is wrapped again (and gets ".").
    const { title, extendedClass, delayMs } = call;
    window.setTimeout(() => {
      run({ title, message, messageTypeId: delayMs, encodedHtml, extendedClass, delayMs: 0, useDebounce: false });
    }, delayMs);
  }
  lastTimeMessageFired = now; // SetLastTimeFiredJS (JSU:280-284)
}

/** FeedbackMessage_AutoClose with the original inputs and defaults (JSU:178-268). */
export function feedbackMessageAutoClose(input: FeedbackMessageAutoCloseInput): void {
  run({
    title: input.title ?? '',
    message: input.message,
    messageTypeId: ubtMessageTypeId(input.messageType ?? 'error'),
    encodedHtml: input.encodedHtml ?? true,
    extendedClass: input.extendedClass ?? '',
    delayMs: input.delayMs ?? 0,
    useDebounce: input.useDebounce ?? false,
  });
}

/** Test helper: forgets the last message time, as a new page load does. */
export function resetFeedbackDebounce(): void {
  lastTimeMessageFired = null;
}
