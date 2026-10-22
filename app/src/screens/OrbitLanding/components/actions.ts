import { log } from '@/platform/log/log';
import type { EventsSummaryItem, YearItem } from '@/screens/OrbitLanding/types';
import { ApplicationEvents_Orbit, OrbitLandingFilter } from './staticEntities';

/* Client actions and JavaScript nodes of ScreenBlock_OrbitLanding and Household_Members_Selection
   (analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.mvc.js = SB,
   …Orbit_Blocks.Household_Members_Selection.mvc.js = HM). */

const DAY_MS = 24 * 60 * 60 * 1000;

/** AddDays(CurrDate(), -22): local midnight of today minus 22 days (the "Last8DaysAndFuture" filters use -22). */
const upcomingThreshold = (now: Date): number =>
  new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() - 22 * DAY_MS;

/** The date of a row the filters read; the OutSystems null date (empty here) is 1 Jan 1900. */
const rowDate = (value: string | null | undefined): Date => (value ? new Date(value) : new Date(Date.UTC(1900, 0, 1)));

/** GetFullYear (runtime-sources/Connect2_OrbitMobile_MUI.controller.js :3536-3607): TimeFormat.getYear = the UTC year
    (Connect2_OrbitMobile_MUI.TimeFormat.js:90-92) of the row's start (MilestoneStartDateTime / StartEventDate). */
const startYear = (p: EventsSummaryItem): number =>
  rowDate(
    p.isMilestone ? p.milestone.MilestoneInfo?.MilestoneStartDateTime : p.event.EventInfo?.StartEventDate,
  ).getUTCFullYear();

/** FilterEvents (SB :1770-1894). With rows: UpcomingEvents → the rows whose end (MilestoneEndDateTime of a milestone,
    EndEventDate of an event) is on or after AddDays(CurrDate(), -22); PastEvents → the rows ending before it, and when
    years are selected, per selected year (in YearsSelection order) the rows starting in that year (GetFullYear),
    appended; any other filter keeps EventsSummary. Without rows: the empty answer. */
export function filterEvents(
  response: readonly EventsSummaryItem[],
  eventFilter: number,
  yearsSelection: readonly YearItem[],
  eventsSummary: readonly EventsSummaryItem[],
  now: Date = new Date(),
): EventsSummaryItem[] {
  if (response.length === 0) return [...response];
  const threshold = upcomingThreshold(now);
  const ends = (p: EventsSummaryItem) => rowDate(p.endDateTime).getTime();
  if (eventFilter === OrbitLandingFilter.UpcomingEvents) return response.filter((p) => ends(p) >= threshold);
  if (eventFilter !== OrbitLandingFilter.PastEvents) return [...eventsSummary];
  const moreThan22DaysAgo = response.filter((p) => ends(p) < threshold);
  const selectedYears = yearsSelection.filter((y) => y.isSelected);
  if (selectedYears.length === 0) return moreThan22DaysAgo;
  return selectedYears.flatMap((y) => moreThan22DaysAgo.filter((p) => startYear(p) === Number(y.year)));
}

/** SortEvents' ListSort (SB :1573-1602): by OrbitSummaryItem.SequenceNo, ascending when SortEventsASC. */
export function sortEvents(eventsSummary: readonly EventsSummaryItem[], ascending: boolean): EventsSummaryItem[] {
  return [...eventsSummary].sort((a, b) => (ascending ? a.sequenceNo - b.sequenceNo : b.sequenceNo - a.sequenceNo));
}

/** ScrollContentToTop JS (runtime-sources/Connect2_OrbitMobile_MUI.controller.js :6497-6512). */
export function scrollContentToTop(): void {
  document.querySelector('.content')?.scrollTo({ top: 0, behavior: 'instant' });
}

export interface PopupMeasurements {
  top: number;
  left: number;
  bottom: number;
}

/** GetPopupMeasurements → GetMeasurements JS (SB :1363-1433, :2200-2214): Top = `.header` height, Left = half its width
    - 10, Bottom = `.footer` height; 0 when absent. Integers as the JS node output converter makes them (`0|value`). */
export function getPopupMeasurements(): PopupMeasurements {
  const header = document.querySelector<HTMLElement>('.header');
  const footer = document.querySelector<HTMLElement>('.footer');
  return {
    top: header ? header.offsetHeight : 0,
    left: header ? Math.trunc(header.offsetWidth / 2 - 10) : 0,
    bottom: footer ? footer.offsetHeight : 0,
  };
}

/** TextToInteger: the number of a text, 0 when it is not one. */
export function textToInteger(text: string): number {
  const n = Number.parseInt(text.trim(), 10);
  return Number.isNaN(n) || !/^[-+]?\d+$/.test(text.trim()) ? 0 : n;
}

/** OnApplicationEvent_SwitchMember / _ClickEvent / _ClickMilestone / _ApplyFilters / _ApplySortBy (runtime-sources/Connect2_OrbitMobile_MUI.controller
    .js :5532-5600, :5910-5980): JSON of the audit payload → zOnApplicationEvent_Wrapper. Telemetry is not wired in the
    mock phase (decision U17): the event goes to the log, without the payload's personal fields. */
export function onApplicationEvent_Orbit(
  event: keyof typeof ApplicationEvents_Orbit,
  ids: Record<string, string>,
): void {
  log.info('ApplicationEvent', { EventId: ApplicationEvents_Orbit[event], ...ids });
}

/** ScrollToSelectMember → ScrollToNewPosition JS (HM :401-458, :607-625): scroll the list horizontally to
    In_IntendedPosition × (width of `.header-content` / 3). */
export function scrollToSelectMember(listId: string, currentRowNumber: number, scrollBehavior: ScrollBehavior): void {
  const membersList = document.getElementById(listId);
  const header = document.querySelector<HTMLElement>('.header-content');
  const halfScreen = header ? header.offsetWidth / 3 : 0;
  if (membersList && halfScreen) {
    membersList.scroll({ top: 0, left: currentRowNumber * halfScreen, behavior: scrollBehavior });
  }
}

/** SetIsItemFound → IsItemAvailable JS (HM :459-, :626-636): getComputedStyle of the In_Position-th
    `.orbit-household-member-list-item`; it throws (ItemFound False) when there is no such item. */
export function isItemAvailable(position: number): boolean {
  const items = document.querySelectorAll('.orbit-household-member-list-item');
  return position >= 0 && position < items.length;
}
