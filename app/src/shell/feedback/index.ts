/* Feedback messages for screens (docs/guides/shell.md, "Part C"). */
import { feedbackMessageAutoClose } from './feedbackMessageAutoClose';
import { showCommunicationExceptionMessage, showExceptionMessage } from './exceptionMessages';
import { showFeedbackMessage } from './feedbackStore';

export {
  feedbackMessageAutoClose,
  type FeedbackMessageAutoCloseInput,
  type UbtMessageType,
} from './feedbackMessageAutoClose';
export { showCommunicationExceptionMessage, showExceptionMessage } from './exceptionMessages';
export { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from './feedbackStore';
export { delayedMessageShow } from './delayedMessage';
export { FeedbackMessageHost } from './FeedbackMessageHost';
export { useNetworkStatusEvents } from './networkStatus';

const feedback = {
  feedbackMessageAutoClose,
  showFeedbackMessage,
  showExceptionMessage,
  showCommunicationExceptionMessage,
} as const;

/** The message actions for components; they need no React state, so the module functions work as well. */
export function useFeedback(): typeof feedback {
  return feedback;
}
