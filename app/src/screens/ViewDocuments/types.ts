import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';

/* ---- Wire shapes (api.ts and mocks.ts only) ----
   DataActionGetEventDocuments of ScreenBlock_ViewDocuments, typed by the API contract (no capture: shape from the
   contract, Connect2_OrbitMobile_IS.GetEventDocumentsResponseRec). */

/** Endpoint screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_Documents/ScreenBlock_ViewDocuments/DataActionGetEventDocuments. */
type GetEventDocumentsPath = PathOf<
  'Connect2_OrbitMobile_MUI',
  'ScreenBlock_ViewDocuments/DataActionGetEventDocuments'
>;

export type GetEventDocumentsWire = ActionOutputs<GetEventDocumentsPath>;
export type EventDocumentItemWire = GetEventDocumentsWire['Response']['EventDocuments']['List'][number];

/** The block variables OutSystems sends with the data action (screenData.variables). The list variable EventDocuments
    that echoes the client state is left out, as in the other Orbit routes (the contract makes every variable
    optional). */
export type EventDocumentsVariablesWire = Required<
  Pick<
    ActionInputs<GetEventDocumentsPath>,
    | 'IsFetchingData'
    | 'IsLoadingDocument'
    | 'In_MemberId'
    | 'In_EventId'
    | 'In_EventName'
    | 'In_EventLocation'
    | 'In_EventStartDate'
    | 'In_EventEndDate'
  >
>;

/* ---- Domain (components) ---- */

/** EventDocumentItem_Screen (Connect2_OrbitMobile_MUI): a document of the event, IsViewed set by the screen.
    LastUpdatedOn stays an OutSystems DateTime ("" = null). */
export interface EventDocumentItem {
  DocumentURL: string;
  DocumentName: string;
  LastUpdatedOn: string;
  LastUpdatedBy: string;
  IsViewed: boolean;
}
