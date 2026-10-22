import { callAction } from '@/api/client/callAction';
import { osList } from '@/legacy/os/os-wire';
import type { Milestone_Screen } from '@/shared/Connect2_OrbitMobile_MUI/lib/structures';
import type { EventDetailsResult, EventDetailVariablesWire, MilestoneWire } from './types';

/** Module and owner of the four data actions (screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/
    ScreenBlock_EventDetail/…). All four are on demand (dataFetchDependenciesOriginal -1, ScreenBlock_EventDetail
    .mvc.js :1483-1489): OnReady refreshes them one after the other (:1799-1890), as captured (calls.md #2-5). */
const MODULE = 'Connect2_OrbitMobile_MUI';

/** OutSystems null DateTime / Date: kept as "" for the components (lib/actions.ts formatters treat "" as null). */
const date = (value: string): string => (value.startsWith('1900-01-01') ? '' : value);

/** Milestone_ScreenRec → the record Card_Milestone and the host allocation take (same field names). */
export const toMilestone = (w: MilestoneWire): Milestone_Screen => ({
  MilestoneId: w.MilestoneId,
  Type: w.Type,
  Title: w.Title,
  MilestoneDateTime: date(w.MilestoneDateTime),
  TimeType: w.TimeType,
  SequenceNo: w.SequenceNo,
  DateForFilter: date(w.DateForFilter),
  OrbitMilestoneType: { ...w.OrbitMilestoneType },
  MilestoneInfo: {
    ...w.MilestoneInfo,
    MilestoneStartDateTime: date(w.MilestoneInfo.MilestoneStartDateTime),
    MilestoneEndDateTime: date(w.MilestoneInfo.MilestoneEndDateTime),
  },
});

/** DataActionGet_EventDetails (:1597-1624; OnReady :1830): Response, Response_DateFilters and IsNullResponse. The
    server reads the block variables (In_MemberId, In_EventId, …). */
export async function getEventDetails(vars: EventDetailVariablesWire): Promise<EventDetailsResult> {
  const out = await callAction(MODULE, 'ScreenBlock_EventDetail/DataActionGet_EventDetails', vars);
  const r = out.Response;
  return {
    response: {
      EventId: r.EventId,
      MemberId: r.MemberId,
      EventType: r.EventType,
      EventName: r.EventName,
      EventStartDate: date(r.EventStartDate),
      EventEndDate: date(r.EventEndDate),
      Location: r.Location,
      TypeOfEvent: r.TypeOfEvent,
      IsBookletVisible: r.IsBookletVisible,
      SetUpMeals: r.SetUpMeals,
      Meals: r.Meals,
      Accommodations: r.Accommodations,
      Helpers: r.Helpers,
      Transport: r.Transport,
      GuestTransport: r.GuestTransport,
      OrbitEventType: { Id: r.OrbitEventType.Id, Type: r.OrbitEventType.Type },
      Milestones: osList(r.Milestones).map(toMilestone),
    },
    dateFilters: {
      HasBefore: out.Response_DateFilters.HasBefore,
      HasAfter: out.Response_DateFilters.HasAfter,
      DayFilterList: osList(out.Response_DateFilters.DayFilterList).map((d) => ({
        DateGroup: date(d.DateGroup),
        IsSelected: d.IsSelected,
      })),
    },
    isNullResponse: out.IsNullResponse,
  };
}

/** DataActionGet_HostSurveyStatus (:1625-1652; OnReady :1859 for a host event): HostSurveyRec.Id = the JSON_Name of
    the household's survey status ("" = none). */
export async function getHostSurveyStatus(vars: EventDetailVariablesWire): Promise<string> {
  const out = await callAction(MODULE, 'ScreenBlock_EventDetail/DataActionGet_HostSurveyStatus', vars);
  return out.Response.Id;
}

/** DataActionGet_HasDocuments (:1681-1708; OnReady :1868). */
export async function getHasDocuments(vars: EventDetailVariablesWire): Promise<boolean> {
  const out = await callAction(MODULE, 'ScreenBlock_EventDetail/DataActionGet_HasDocuments', vars);
  return out.Response_HasDocuments;
}

/** DataActionGet_HasQRCode (:1653-1680; OnReady :1877 when the itinerary has milestones). */
export async function getHasQRCode(
  vars: EventDetailVariablesWire,
): Promise<{ hasQRCode: boolean; hasScanned: boolean }> {
  const out = await callAction(MODULE, 'ScreenBlock_EventDetail/DataActionGet_HasQRCode', vars);
  return { hasQRCode: out.Response_HasQRCode, hasScanned: out.Response_HasScanned };
}
