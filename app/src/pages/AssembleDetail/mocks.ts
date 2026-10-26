import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import { householdsOfSupperMeeting } from '@/mocks/fictional/directory';
import { assembleEventOf, type AssembleEventSummaryWire } from '@/mocks/fictional/assemble';
import { scenario } from '@/mocks/scenario';
import { wireList } from '@/lib/os-wire';

/* Mocks of AssembleDetail (P-MOCKS), on the fictional Assemble world (src/mocks/fictional/assemble.ts). No TST capture
   (no-capture route): every value is fictional. Scenarios: real (the meeting of EventId; an unknown EventId → IsNotFound
   with an empty event), notfound, unavailable (IsUnavailable: Service Interruption message + "Meeting not found"),
   error, loading (shared `?latency=`). The GMS contacts are answered by the Connect2_LegacyShared member-contact mock. */

const EMPTY_SUMMARY: AssembleEventSummaryWire = {
  EventId: '',
  SeriesId: '',
  DateTime: '1900-01-01T00:00:00',
  HostingSubdivisionId: '0',
  HostingLocation: '',
  HostingSubdivisionFormattedAddress: '',
  HostingSubdivisionUseCoordinates: false,
  HostingSubdivisionLatitude: '0',
  HostingSubdivisionLongitude: '0',
  HostingSubdivisionHallPhotoSignedURL: '',
  AssembleEventType: { Id: '', Title: '' },
  RecurrenceTypeId: '',
  RecurrenceTypeLabel: '',
  IsCustomRecurrence: false,
  RecurrencyFirstDate: '1900-01-01',
  IsAllDay: false,
  BrothersCount: '0',
  SistersCount: '0',
  IsVirtual: false,
  Notes: '',
  LocalityName: '',
  CountryName: '',
  VirtualMeetingTypeLabel: '',
  VirtualMeetingLink: '',
  VirtualMeetingId: '',
  VirtualMeetingPassword: '',
  IsPBCC: false,
  IsUnavailable: false,
};

const notFound = () => ({
  IsNotFound: true,
  AssembleEvent: {
    AssembleEventSummary: EMPTY_SUMMARY,
    AssembleAttendeeSubdivisionList: wireList([]),
    AssembleSpecialAttendeeSubdivisionList: wireList([]),
    AssembleAttendeeSpecialGuestList: wireList([]),
    GSMContactList: wireList([]),
  },
});

export const handlers: RequestHandler[] = [
  contractHandler('Connect2_Assemble_MUI', 'AssembleEventDetail/DataActionGetAssembleEvent', (vars) => {
    const event = assembleEventOf(vars.EventId ?? '', (hallId) => householdsOfSupperMeeting(hallId).length);
    if (scenario() === 'notfound' || !event) return notFound();
    if (scenario() === 'unavailable')
      return {
        IsNotFound: false,
        AssembleEvent: { ...event, AssembleEventSummary: { ...event.AssembleEventSummary, IsUnavailable: true } },
      };
    return { IsNotFound: false, AssembleEvent: event };
  }),
];
