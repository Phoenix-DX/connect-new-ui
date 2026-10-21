import { callAction } from '../../lib/api';
import { osList } from '../../lib/os-wire';
import type { EventDocumentItem, EventDocumentsVariablesWire } from './types';

/** Module and owner of the data action (screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_Documents/
    ScreenBlock_ViewDocuments/DataActionGetEventDocuments). On demand (dataFetchDependentsGraph without a start fetch,
    SB :642-647): OnReady → RefreshDocumentData (SB :1102-1132). SB = analysis/sources/Connect2_OrbitMobile_MUI.
    Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.mvc.js. */
const MODULE = 'Connect2_OrbitMobile_MUI';

/** OutSystems null DateTime: "" for the components. */
const dateTime = (value: string): string => (value === '' || value.startsWith('1900-01-01') ? '' : value);

/** DataActionGetEventDocuments (SB :653-680): Response.EventDocuments, which OnAfterFetch_GetEventDocuments copies into
    EventDocuments with IsViewed False (SB :1012-1043). The server reads the block variables (In_EventId, In_MemberId, …). */
export async function getEventDocuments(vars: EventDocumentsVariablesWire): Promise<EventDocumentItem[]> {
  const out = await callAction(MODULE, 'ScreenBlock_ViewDocuments/DataActionGetEventDocuments', vars);
  return osList(out.Response.EventDocuments).map((d) => ({
    DocumentURL: d.DocumentURL,
    DocumentName: d.DocumentName,
    LastUpdatedOn: dateTime(d.LastUpdatedOn),
    LastUpdatedBy: d.LastUpdatedBy,
    IsViewed: false,
  }));
}
