import { useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { NotCaptured } from '../../components/NotCaptured';
import {
  closeFeedbackMessage,
  FEEDBACK_CONTAINER_ID,
  getFeedbackMessage,
  messageTypeClass,
  subscribeFeedback,
  type FeedbackMessage,
} from './feedbackStore';

/* Platform feedback message container. Captured markup (CountryList dom[loading]:1-19, BookmarksByGroup dom[offline]:1-9):
     body > div.feedback-message-wrapper#feedbackMessageContainer (before #reactContainer)
       > div.feedback-message.feedback-message-<type>[ extra classes twice][role=alert][tabindex=0] > i + div.feedback-message-text
   The container is absent in captures without a message (HF dom): showFeedbackMessage creates it and keeps it. */

export function FeedbackMessageHost() {
  const message = useSyncExternalStore(subscribeFeedback, getFeedbackMessage);
  const container = message ? document.getElementById(FEEDBACK_CONTAINER_ID) : null;
  if (!message || !container) return null;
  return createPortal(<Message key={message.id} message={message} />, container);
}

function Message({ message }: { message: FeedbackMessage }) {
  const typeClass = messageTypeClass(message.type);
  // EncodedHTML False: the message is HTML (FeedbackMessage_AutoClose titles, JSU:132-140)
  const text = message.encodedHtml ? (
    <div className="feedback-message-text">{message.message}</div>
  ) : (
    <div className="feedback-message-text" dangerouslySetInnerHTML={{ __html: message.message }} />
  );
  if (typeClass === null) {
    // only through bug B1 (type DelayMs - 1): how the runtime renders such a type is not captured
    return (
      <NotCaptured name={`Feedback message of type ${String(message.type)} (runtime, not captured)`}>
        {text}
      </NotCaptured>
    );
  }
  // the captured auto-close message has its extra class twice (CountryList dom[loading]:3); the cause is runtime code
  const extra = message.extraClasses === '' ? '' : ` ${message.extraClasses} ${message.extraClasses}`;
  const close = () => {
    closeFeedbackMessage(message.id);
  };
  return (
    <div
      className={`feedback-message ${typeClass}${extra}`}
      role="alert"
      tabIndex={0}
      onClick={message.closeOnClick ? close : undefined}
    >
      <i></i>
      {text}
    </div>
  );
}
