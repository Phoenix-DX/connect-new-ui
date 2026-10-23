/* Domain types of AssembleEvents (rule 9: components never see the wire shape). The meeting types, the filter and the
   meetings of AssembleSummary_List (Connect2_Assemble_CS) are domain types of api/event; this module keeps the names
   that the screen uses. */
export type { CountryWithMapPosition } from '@/shared/Connect2_LegacyShared/lib/structures';
export type { AssembleEventFilter, AssembleEventTypeSelection, AssembleMeeting } from '@/api/event';

/** Connect2_LegacyShared Tag (Id, Label). */
export interface TagItem {
  Id: string;
  Label: string;
}
