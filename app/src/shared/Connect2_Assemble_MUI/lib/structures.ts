/* Structures of Connect2_Assemble_MUI / Connect2_Assemble_CS used by the shared Assemble blocks. Connect2_Assemble_CS's
   model is not in the captured sources: field names are the record attributes the compiled code reads (attribute
   `<name>Attr` → field `<Name>`, e.g. `isPBCCAttr` → `IsPBCC`), all optional = OutSystems default ("", False, 0, the
   null DateTime "1900-01-01T00:00:00"). DateTime travels as "yyyy-MM-ddTHH:mm:ss"; Long Integer counts → number. */

/** AssembleEventSummary (Connect2_Assemble_CS AssembleEventSummaryRec) and AssembleEventType (the record inside it):
    the fields that AssembleSummaryCard and its actions read. Domain types of api/event, which the meeting calls
    answer. */
export type { AssembleEventSummary, AssembleEventType } from '@/api/event';

/** HostedAtComponents, GetAssembleHostedAtComponents' output (anonymous Text, Text, Text record, model
    `TextTextTextRecord`): FirstRow, SecondRow, SingleLine. */
export interface HostedAtComponents {
  FirstRow: string;
  SecondRow: string;
  SingleLine: string;
}
