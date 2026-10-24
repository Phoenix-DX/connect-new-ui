/* DataActionGetEventDocuments of ScreenBlock_ViewDocuments (on demand: OnReady → RefreshDocumentData; the server reads
   the block variables In_EventId, In_MemberId, ...; the documents come with IsViewed False) is in the domain api/event.
   This module keeps the name that the screen uses. */
export { fetchEventDocuments as getEventDocuments } from '@/api/event';
