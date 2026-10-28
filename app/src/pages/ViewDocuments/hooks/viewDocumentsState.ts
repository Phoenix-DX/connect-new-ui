import type { EventDocumentItem, EventDocumentsCallInputs } from '@/api/event';
import type { ViewDocumentsInputs } from '@/pages/ViewDocuments/inputs';
import { addExtensionToFile, getFormattedDateTime } from '@/lib/orbit/actions';

/** The state of ScreenBlock_ViewDocuments and its reducer, and the pure parts of its flows: the block variables that
    the data action sends, the document that Action_OpenDoc marks as viewed, and the helpdesk subject.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments */

/** FileExtension.PDF (static entity Connect2_OrbitMobile_MUI.fileExtension), as ScreenBlock_AccommodationHost. */
export const FILE_EXTENSION_PDF = 'pdf';

/** The block variables and the state of DataActionGetEventDocuments that the view reads. The view cache keeps the
    record, so a back navigation shows the documents at once, without a call. */
export interface ViewDocumentsState {
  /** EventDocuments: the documents, with IsViewed set by Action_OpenDoc. */
  eventDocuments: EventDocumentItem[];
  /** IsFetchingData: OnReady runs the data action (the skeleton shows). */
  isFetchingData: boolean;
  /** IsLoadingDocument: a document opens (the loading spinner shows). */
  isLoadingDocument: boolean;
  /** GetEventDocuments.IsDataFetched. */
  isDataFetched: boolean;
  /** GetEventDocuments.Response.EventDocuments is not empty. */
  hasResponseDocuments: boolean;
}

/** An assignment of some variables (an OutSystems Assign node). */
type ViewDocumentsPatch = Partial<ViewDocumentsState>;

/** The block variables before OnReady: no documents, nothing fetched. */
export const INITIAL_VIEW_DOCUMENTS_STATE: ViewDocumentsState = {
  eventDocuments: [],
  isFetchingData: false,
  isLoadingDocument: false,
  isDataFetched: false,
  hasResponseDocuments: false,
};

export function viewDocumentsReducer(state: ViewDocumentsState, patch: ViewDocumentsPatch): ViewDocumentsState {
  return { ...state, ...patch };
}

/** The block variables that OutSystems sends with DataActionGetEventDocuments, read when the call starts. */
export const eventDocumentsCallInputs = (
  state: ViewDocumentsState,
  inputs: ViewDocumentsInputs,
): EventDocumentsCallInputs => ({
  IsFetchingData: state.isFetchingData,
  IsLoadingDocument: state.isLoadingDocument,
  In_MemberId: inputs.In_MemberId,
  In_EventId: inputs.In_EventId,
  In_EventName: inputs.In_EventName,
  In_EventLocation: inputs.In_EventLocation,
  In_EventStartDate: inputs.In_EventStartDate,
  In_EventEndDate: inputs.In_EventEndDate,
});

/** Action_OpenDoc(DocName): the first document whose name is DocName, or whose name with the PDF extension is DocName,
    becomes viewed. The new list, or null when no document matches (the list does not change). */
export function withDocumentViewed(documents: EventDocumentItem[], docName: string): EventDocumentItem[] | null {
  const position = documents.findIndex(
    (d) => d.DocumentName === docName || docName === addExtensionToFile(d.DocumentName, FILE_EXTENSION_PDF),
  );
  if (position === -1) return null;
  return documents.map((d, i) => (i === position ? { ...d, IsViewed: true } : d));
}

/** The date of the subject: GetFormattedDateTime(date, no time, weekday, full letters, abbreviated). */
const formattedDay = (dateTime: string) => getFormattedDateTime(dateTime, false, true, false, true, false, false);

/** GetContactHelpdeskSubject_Event(EventName, StartDateTime, EndDateTime, Location) → Out_FormattedSubject (client
    action of Connect2_OrbitMobile_MUI): EventName [+ " - " when a location or both dates follow], then Location
    [+ " - " when both dates follow], then "start - end" when both dates are set. "" is the null date. */
export function getContactHelpdeskSubject_Event(
  eventName: string,
  startDateTime: string,
  endDateTime: string,
  location: string,
): string {
  const hasDates = startDateTime !== '' && endDateTime !== '';
  const name = eventName !== '' ? `${eventName}${location !== '' || hasDates ? ' - ' : ''}` : '';
  const place = location !== '' ? `${location}${hasDates ? ' - ' : ''}` : '';
  return `${name}${place}${hasDates ? `${formattedDay(startDateTime)} - ${formattedDay(endDateTime)}` : ''}`;
}
