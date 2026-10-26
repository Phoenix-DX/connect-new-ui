import { showFeedbackMessage } from '@/platform/feedback';
import { log } from '@/platform/log/log';
import type { PopupMeasurements } from '@/pages/OrbitLanding/hooks/orbitLandingState';
import { ApplicationEvents_Orbit } from '@/pages/OrbitLanding/staticEntities';

/** The JavaScript nodes and the client actions with page effects of the route: those of ScreenBlock_OrbitLanding and
    Household_Members_Selection (Connect2_OrbitMobile_MUI), and FeedbackMessageAfterTransition of
    Connect2_LegacyShared (the screen). They read or change the page, the log or the feedback message only.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding */

/** ScrollContentToTop JavaScript node: the `.content` element scrolls to the top at once. */
export function scrollContentToTop(): void {
  document.querySelector('.content')?.scrollTo({ top: 0, behavior: 'instant' });
}

/** GetPopupMeasurements → GetMeasurements JavaScript node: Top = `.header` height, Left = half its width - 10,
    Bottom = `.footer` height; 0 when absent. Integers as the JavaScript node output converter makes them
    (`0|value`). */
export function getPopupMeasurements(): PopupMeasurements {
  const header = document.querySelector<HTMLElement>('.header');
  const footer = document.querySelector<HTMLElement>('.footer');
  return {
    top: header ? header.offsetHeight : 0,
    left: header ? Math.trunc(header.offsetWidth / 2 - 10) : 0,
    bottom: footer ? footer.offsetHeight : 0,
  };
}

/** OnApplicationEvent_SwitchMember / _ClickEvent / _ClickMilestone / _ApplyFilters / _ApplySortBy: JSON of the audit
    payload → zOnApplicationEvent_Wrapper. Telemetry is not wired in the mock phase (decision U17): the event goes to
    the log, without the payload's personal fields. */
export function onApplicationEvent_Orbit(
  event: keyof typeof ApplicationEvents_Orbit,
  ids: Record<string, string>,
): void {
  log.info('ApplicationEvent', { EventId: ApplicationEvents_Orbit[event], ...ids });
}

/** ScrollToSelectMember → ScrollToNewPosition JavaScript node of Household_Members_Selection: scroll the list
    horizontally to In_IntendedPosition × (width of `.header-content` / 3). */
export function scrollToSelectMember(listId: string, currentRowNumber: number, scrollBehavior: ScrollBehavior): void {
  const membersList = document.getElementById(listId);
  const header = document.querySelector<HTMLElement>('.header-content');
  const halfScreen = header ? header.offsetWidth / 3 : 0;
  if (membersList && halfScreen) {
    membersList.scroll({ top: 0, left: currentRowNumber * halfScreen, behavior: scrollBehavior });
  }
}

/** SetIsItemFound → IsItemAvailable JavaScript node of Household_Members_Selection: getComputedStyle of the
    In_Position-th `.orbit-household-member-list-item`; it throws (ItemFound False) when there is no such item. */
export function isItemAvailable(position: number): boolean {
  const items = document.querySelectorAll('.orbit-household-member-list-item');
  return position >= 0 && position < items.length;
}

/** FeedbackMessageAfterTransition (Connect2_LegacyShared): its JavaScript node shows the message 500 ms later, after
    the navigation that follows. */
export function feedbackMessageAfterTransition(message: string, messageType: number): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, messageType);
  }, 500);
}
