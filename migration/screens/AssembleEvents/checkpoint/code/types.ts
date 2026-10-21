import type { AssembleEventSummary } from '../../shared/Connect2_Assemble_MUI/lib/structures';

/* Domain types of AssembleEvents (rule 9: components never see the wire shape; api.ts maps it). */
export type { CountryWithMapPosition } from '../../shared/Connect2_LegacyShared/lib/structures';

/** Connect2_Assemble_CS AssembleEventType (Id, Title). */
export interface AssembleEventTypeItem {
  Id: string;
  Title: string;
}

/** AssembleEventTypeBooleanRecord: an event type and whether the filter selects it. */
export interface AssembleEventTypeSelection {
  AssembleEventType: AssembleEventTypeItem;
  IsSelected: boolean;
}

/** Connect2_Assemble_CS AssembleEventFilter (AssembleFilterTimeOptionId = a ViewmodeType id, AssembleEventType). */
export interface AssembleEventFilter {
  AssembleFilterTimeOptionId: string;
  AssembleEventType: AssembleEventTypeSelection[];
}

/** AssembleEventSummary with the ids the list reads (EventId, SeriesId). */
export interface AssembleMeeting extends AssembleEventSummary {
  EventId: string;
  SeriesId: string;
  DateTime: string;
}

/** Connect2_LegacyShared Tag (Id, Label). */
export interface TagItem {
  Id: string;
  Label: string;
}

/** The screen variables GetAssembleMeetingSummaryList reads on the server (AssembleSummary_List, sent as
    screenData.variables). */
export interface MeetingListQuery {
  SubdivisionId: string;
  LocalSubdivisionId: string;
  EventList_Filter: AssembleEventFilter;
  EventList_RangeFrom: string;
  EventsList_RangeTo: string;
  EventList_PageNumber: number;
  MaxRecords: number;
  DeviceTimezone: string;
}
