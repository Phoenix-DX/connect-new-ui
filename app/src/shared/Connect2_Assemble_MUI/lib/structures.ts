/* Structures of Connect2_Assemble_MUI / Connect2_Assemble_CS used by the shared Assemble blocks. Connect2_Assemble_CS's
   model is not in the captured sources: field names are the record attributes the compiled code reads (attribute
   `<name>Attr` → field `<Name>`, e.g. `isPBCCAttr` → `IsPBCC`), all optional = OutSystems default ("", False, 0, the
   null DateTime "1900-01-01T00:00:00"). DateTime travels as "yyyy-MM-ddTHH:mm:ss"; Long Integer counts → number. */

/** AssembleEventType (the record inside AssembleEventSummary; only Title is read, Connect2_Assemble_MUI.controller.js:410). */
export interface AssembleEventType {
  Title?: string;
}

/** AssembleEventSummary (Connect2_Assemble_CS AssembleEventSummaryRec): the fields AssembleSummaryCard and its actions
    read (AssembleSummaryCard.mvc.js view, LinkAddressOnClick; Connect2_Assemble_MUI.controller.js:328-671). */
export interface AssembleEventSummary {
  AssembleEventType?: AssembleEventType;
  DateTime?: string;
  IsAllDay?: boolean;
  IsPBCC?: boolean;
  IsVirtual?: boolean;
  IsUnavailable?: boolean;
  HostingLocation?: string;
  LocalityName?: string;
  CountryName?: string;
  HostingSubdivisionHallPhotoSignedURL?: string;
  HostingSubdivisionFormattedAddress?: string;
  HostingSubdivisionUseCoordinates?: boolean;
  HostingSubdivisionLatitude?: number;
  HostingSubdivisionLongitude?: number;
  BrothersCount?: number;
  SistersCount?: number;
  VirtualMeetingLink?: string;
  VirtualMeetingId?: string;
  VirtualMeetingPassword?: string;
  VirtualMeetingTypeLabel?: string;
}

/** HostedAtComponents, GetAssembleHostedAtComponents' output (anonymous Text, Text, Text record, model
    `TextTextTextRecord`): FirstRow, SecondRow, SingleLine. */
export interface HostedAtComponents {
  FirstRow: string;
  SecondRow: string;
  SingleLine: string;
}
