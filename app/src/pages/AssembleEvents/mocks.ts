import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import {
  ASSEMBLE_EVENT_TYPES,
  ASSEMBLE_MEETINGS,
  countriesBySubscriptionOutput,
  hallName,
  USER_HALL_ID,
} from '@/mocks/fictional/assemble';
import { scenario } from '@/mocks/scenario';
import { wireList } from '@/legacy/os/os-wire';

/* Mocks of AssembleEvents (P-MOCKS), on the fictional Assemble world (src/mocks/fictional/assemble.ts).
   Scenarios: real (the hall's meetings), nomeetings (TST's captured account: no meeting, NC_ErrorScreen; Q1), empty,
   error, loading. GetAssembleMeetingSummaryList filters by LocalSubdivisionId (0 = the user's hall), the date range,
   the selected meeting types (none = all) and pages by MaxRecords; upcoming meetings oldest first, past ones newest
   first. */

const PAST_MEETINGS = 'Past Meetings';

export const handlers: RequestHandler[] = [
  contractHandler('Connect2_Assemble_MUI', 'AssembleSummary_List/DataActionGetAssembleEventTypes', () => ({
    AssembleEventTypeList: wireList(ASSEMBLE_EVENT_TYPES.map((t) => ({ Id: t.Id, Title: t.Title }))),
  })),
  contractHandler('Connect2_Assemble_MUI', 'AssembleSummary_List/DataActionGetAssembleMeetingSummaryList', (vars) => {
    if (scenario() === 'nomeetings') return { AssembleSummaryMeetingList: wireList([]) };
    const local = vars.LocalSubdivisionId ?? '0';
    const hall = local === '0' || local === '' ? USER_HALL_ID : local;
    const filter = vars.EventList_Filter;
    const selected = (filter?.AssembleEventType.List ?? [])
      .filter((t) => t.IsSelected)
      .map((t) => t.AssembleEventType.Id);
    const from = (vars.EventList_RangeFrom ?? '').slice(0, 19);
    const to = (vars.EventsList_RangeTo ?? '').slice(0, 19);
    const isPast = filter?.AssembleFilterTimeOptionId === PAST_MEETINGS;
    const rows = ASSEMBLE_MEETINGS.filter(
      (m) =>
        m.HostingSubdivisionId === hall &&
        (from === '' || m.DateTime >= from) &&
        (to === '' || m.DateTime <= to) &&
        (selected.length === 0 || selected.includes(m.AssembleEventType.Id)),
    );
    const ordered = isPast ? [...rows].reverse() : rows;
    const page = vars.EventList_PageNumber ?? 1;
    const max = vars.MaxRecords ?? 10;
    return { AssembleSummaryMeetingList: wireList(ordered.slice((page - 1) * max, page * max)) };
  }),
  contractHandler('Connect2_Assemble_MUI', 'ScreenBlock_AssembleEvents/DataActionGetSubdivisionName', (vars) => ({
    SelectedSubdivisionName: hallName(vars.SubdivisionId ?? ''),
  })),
  contractHandler('Connect2_LegacyShared', 'ActionGetCountriesBySubscription', () => countriesBySubscriptionOutput()),
];
