/* OutSystems platform feedback message (`$public.FeedbackMessage.showFeedbackMessage`, reached through OSUI
   FeedbackMessageShow: HF r:OutSystemsUI_2_23.controller.js:10857-10946). The runtime code is not captured, so only what
   the captures show is reproduced (app-shell.spec.md section 6): one message at a time in `#feedbackMessageContainer`,
   no JS timer (the auto-close kind slides out by CSS), closed by a click when CloseOnClick. */

/** Platform MessageType: Info 0, Success 1, Warning 2, Error 3 (ND:947 shows an error with 3; classes HF bundle:243-258). */
export const PLATFORM_MESSAGE_TYPE = { info: 0, success: 1, warning: 2, error: 3 } as const;

export type PlatformMessageTypeName = keyof typeof PLATFORM_MESSAGE_TYPE;

export interface FeedbackMessage {
  /** new for every call, so a new message restarts the CSS animation */
  readonly id: number;
  readonly message: string;
  /** platform type; outside 0-3 only through original bug B1 (docs/known-original-bugs.md) */
  readonly type: number;
  readonly encodedHtml: boolean;
  readonly extraClasses: string;
  readonly closeOnClick: boolean;
}

export const FEEDBACK_CONTAINER_ID = 'feedbackMessageContainer';

/** `body > div.feedback-message-wrapper#feedbackMessageContainer`, before `#reactContainer` (CountryList dom[loading]:2). */
function ensureFeedbackContainer(): void {
  if (document.getElementById(FEEDBACK_CONTAINER_ID)) return;
  const container = document.createElement('div');
  container.className = 'feedback-message-wrapper';
  container.id = FEEDBACK_CONTAINER_ID;
  document.body.insertBefore(container, document.getElementById('reactContainer'));
}

let current: FeedbackMessage | null = null;
let nextId = 1;
const listeners = new Set<() => void>();

const emit = () => {
  for (const listener of listeners) listener();
};

/** FeedbackMessageShow(Message, MessageType, EncodedHTML = True, ExtendedClass = "", CloseOnClick = True). */
export function showFeedbackMessage(
  message: string,
  type: number,
  encodedHtml = true,
  extraClasses = '',
  closeOnClick = true,
): void {
  ensureFeedbackContainer();
  current = { id: nextId++, message, type, encodedHtml, extraClasses, closeOnClick };
  emit();
}

/** The click on a CloseOnClick message. */
export function closeFeedbackMessage(id: number): void {
  if (current?.id !== id) return;
  current = null;
  emit();
}

export const getFeedbackMessage = (): FeedbackMessage | null => current;

export function subscribeFeedback(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Class of a platform type, or null for a type the captures do not show (runtime handling not captured). */
export function messageTypeClass(type: number): string | null {
  const name = (Object.keys(PLATFORM_MESSAGE_TYPE) as PlatformMessageTypeName[]).find(
    (key) => PLATFORM_MESSAGE_TYPE[key] === type,
  );
  return name === undefined ? null : `feedback-message-${name}`;
}

/** Test helper: no message, as on a new page load. */
export function resetFeedbackMessages(): void {
  current = null;
  emit();
}
