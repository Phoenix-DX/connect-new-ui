import { showFeedbackMessage } from '@/platform/feedback';

/* JavaScript nodes and shared client actions that ScreenBlock_HostSurvey calls, ported 1:1. */

/** FeedbackMessageAfterTransition (Connect2_LegacyShared): its JavaScript node shows the message 500 ms later, after
    the navigation that follows (PostHostSurvey → NavigateTo_Back). */
export function feedbackMessageAfterTransition(message: string, messageType: number): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, messageType);
  }, 500);
}

/** FocusOnFirstInvalidInput (Connect2_OrbitMobile_MUI controller.js :1547-1582), JavaScript node
    ScrollInvalidInputIntoView: scrolls the first `.content.orbit-host-survey input.not-valid` into view. */
export function focusOnFirstInvalidInput(): void {
  const invalidInput = document.querySelectorAll('.content.orbit-host-survey input.not-valid')[0];
  if (invalidInput) invalidInput.scrollIntoView();
}
