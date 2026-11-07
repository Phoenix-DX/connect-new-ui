import { http, HttpResponse, type RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import { householdsOfSupperMeeting } from '@/mocks/fictional/directory';
import {
  assembleEventOf,
  assembleWorldId,
  type AssembleEventSummaryWire,
  type AssembleEventWire,
} from '@/mocks/fictional/assemble';
import { mockDelay, scenario } from '@/mocks/scenario';
import { MOCK_SIGNED_PHOTO_URL } from '@/components/ui/ResultItemImage/mocks';
import { wireList } from '@/lib/os-wire';
import type { MemberContactWithTimezone } from '@/lib/legacyShared/structures';
import { notesCollection } from '@/containers/NoteListActions/mocks';
import { NoteCategory2 } from '@/lib/ubtConnect/staticEntities';

/* Mocks of AssembleDetail (P-MOCKS), on the fictional Assemble world (src/mocks/fictional/assemble.ts): every value is
   fictional; the answer carries the ids the request sent. Scenarios: real (the meeting of EventId; an unknown EventId →
   IsNotFound with an empty event), notfound, unavailable (IsUnavailable: Service Interruption message + "Meeting not
   found"), error, loading (shared `?latency=`).
   - The capture plan's EventId (58dbb5ab-…, migration/capture-plan.json) answers the meeting of the fresh TST capture
     of 2026-11-07 (sync item AssembleDetail, user decision of 2026-11-07: the first AssembleEvents card of the account
     global#10 is the reference): an in-person reading meeting on a Saturday, hosted at a hall with a photo, with the
     address row, one host locality, one interchange locality and one GMS local contact whose avatar is signed by
     GetSignedPhotosInBulk (analysis/dom/default.html, analysis/calls.json). The shared world
     (src/mocks/fictional/assemble.ts) maps that id to its online prayer meeting; this page overrides it here and keeps
     the shared file unchanged. The values are fictional, with the word lengths of the masked capture: title "Reading"
     and header "Reading - Saturday" (:119, :169), hosted-at line 3 7 7 6 7 (:183), time 4 2 2 9 1 8 4 (:200),
     invitees with three-digit counts (:219), address 3 6 · 6 4 3 with a double space (:242), host locality 6 (:367),
     interchange locality 7 (:423), contact name 4 6 and location 7 6 7 (:476, :481). The halls of both localities are
     collapsed in the capture (their count is not known; two and one here); their households come from
     GetBulkSubdivisions_V2, whose shared mock does not know these halls.
   - Any other EventId of the world answers the world's meeting (the virtual-meeting branch is the world's online prayer
     meeting). The world's GMS contacts are answered by the Connect2_LegacyShared member-contact mock. */

/** EventId of the capture plan's route (migration/capture-plan.json, AssembleDetail). */
const CAPTURED_EVENT_ID = '58dbb5ab-047e-469d-9558-2f8967a7ec41';

/** The GMS local contact of the captured meeting. */
const CAPTURED_CONTACT_ID = '880901';

const HOST_LOCALITY = { id: '4710', name: 'Wexley' } as const;
const INTERCHANGE_LOCALITY = { id: '4810', name: 'Thornby' } as const;
const COUNTRY_NAME = 'United Kingdom';

const CAPTURED_SUMMARY: AssembleEventSummaryWire = {
  EventId: '',
  SeriesId: '',
  DateTime: '2026-11-07T19:30:00',
  HostingSubdivisionId: '47101',
  HostingLocation: 'Elm Street',
  HostingSubdivisionFormattedAddress: 'Elm Street  Wexley WX12 4HB',
  HostingSubdivisionUseCoordinates: false,
  HostingSubdivisionLatitude: '51.3412',
  HostingSubdivisionLongitude: '-2.1187',
  HostingSubdivisionHallPhotoSignedURL: MOCK_SIGNED_PHOTO_URL,
  AssembleEventType: { Id: '2', Title: 'Reading' },
  RecurrenceTypeId: 'weekly',
  RecurrenceTypeLabel: 'Weekly',
  IsCustomRecurrence: false,
  RecurrencyFirstDate: '2021-09-04',
  IsAllDay: false,
  BrothersCount: '118',
  SistersCount: '131',
  IsVirtual: false,
  Notes: '',
  LocalityName: HOST_LOCALITY.name,
  CountryName: COUNTRY_NAME,
  VirtualMeetingTypeLabel: '',
  VirtualMeetingLink: '',
  VirtualMeetingId: '',
  VirtualMeetingPassword: '',
  IsPBCC: false,
  IsUnavailable: false,
};

const locality = (l: { id: string; name: string }, halls: { id: string; name: string; households: number }[]) => ({
  LocalityId: l.id,
  LocalityName: l.name,
  AssembleAttendeeSubdivisionList: wireList(
    halls.map((h) => ({
      Id: h.id,
      Name: h.name,
      HouseholdCount: String(h.households),
      LocalityId: l.id,
      SubdivisionHouseholdList: wireList([]),
    })),
  ),
});

const capturedEvent = (): AssembleEventWire => ({
  AssembleEventSummary: CAPTURED_SUMMARY,
  AssembleAttendeeSubdivisionList: wireList([
    locality(HOST_LOCALITY, [
      { id: '47101', name: 'Elm Street', households: 38 },
      { id: '47102', name: 'Mill Lane', households: 24 },
    ]),
  ]),
  AssembleSpecialAttendeeSubdivisionList: wireList([
    locality(INTERCHANGE_LOCALITY, [{ id: '48101', name: 'Church Road', households: 17 }]),
  ]),
  AssembleAttendeeSpecialGuestList: wireList([]),
  GSMContactList: wireList([CAPTURED_CONTACT_ID]),
});

/** The GMS local contact of the captured meeting: name 4 6, location "<locality>, <country>" (7 6 7), a phone and an
    e-mail (both options shown, as captured), and an avatar to sign (Bucket, Path and Type set, no SignedURL). */
const CAPTURED_CONTACT: MemberContactWithTimezone = {
  MobilePhoneNumber: '+44 7700 900418',
  HomePhoneNumber: '',
  WorkPhoneNumber: '',
  Email: 'ruth.hadley@example.com',
  CountryCode: 'GB',
  LocalityId: HOST_LOCALITY.id,
  HouseholdId: '880900',
  Timezone: { TimezoneLabel: 'GMT', OffsetSeconds: '0' },
  ContactDetails: {
    Id: CAPTURED_CONTACT_ID,
    Name: 'Ruth Hadley',
    Location: `${HOST_LOCALITY.name}, ${COUNTRY_NAME}`,
    AvatarURL: {
      Bucket: 'member-photos',
      Path: `${CAPTURED_CONTACT_ID}/profile.jpg`,
      SignedURL: '',
      Type: 'Member',
      CropX: '0',
      CropY: '0',
      CropW: '0',
      CropH: '0',
    },
    IsBookmarked: false,
    IsDisabled: false,
  },
  LocalityName: HOST_LOCALITY.name,
  CountryName: COUNTRY_NAME,
};

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

/** The meeting of an EventId: the captured meeting for the capture plan's id, else the world's meeting. */
const meetingOf = (eventId: string): AssembleEventWire | undefined =>
  eventId === CAPTURED_EVENT_ID
    ? capturedEvent()
    : assembleEventOf(assembleWorldId(eventId), (hallId) => householdsOfSupperMeeting(hallId).length);

export const handlers: RequestHandler[] = [
  // DataActionGetAssembleNotes (fetched at start): the user's notes on the meeting, from the in-memory notes
  // collection (P-MUTATION), category Assemble Event, item EventId.
  contractHandler('UBTConnect', 'AssembleDetail/DataActionGetAssembleNotes', ({ EventId }) => {
    const rows = notesCollection()
      .all()
      .filter((n) => String(n.ItemId) === (EventId ?? '') && n.NoteCategoryId === NoteCategory2.AssembleEvent);
    const items = rows.map((n) => ({
      Id: String(n.Id),
      Note: String(n.Note),
      DateCreatedUtc: String(n.DateCreatedUtc),
      DateEditedUtc: String(n.DateEditedUtc),
    }));
    return { Out_Notes: { Total: rows.length, Note_Item_List: wireList(items) } };
  }),
  contractHandler('Connect2_Assemble_MUI', 'AssembleEventDetail/DataActionGetAssembleEvent', (vars) => {
    const requestIds = { EventId: vars.EventId ?? '', SeriesId: vars.SeriesId ?? '' };
    const found = meetingOf(requestIds.EventId);
    if (scenario() === 'notfound' || !found) return notFound();
    const event = { ...found, AssembleEventSummary: { ...found.AssembleEventSummary, ...requestIds } };
    if (scenario() === 'unavailable')
      return {
        IsNotFound: false,
        AssembleEvent: { ...event, AssembleEventSummary: { ...event.AssembleEventSummary, IsUnavailable: true } },
      };
    return { IsNotFound: false, AssembleEvent: event };
  }),
  // GetMemberContactByCacheKey (GetCacheableMemberContactList of AssembleEventDetail_ContactList): the captured
  // meeting's contact. Any other CacheKey falls through to the Connect2_LegacyShared member-contact mock.
  http.post('/api/Connect2_LegacyShared/ActionGetMemberContactByCacheKey', async ({ request }) => {
    const body: unknown = await request
      .clone()
      .json()
      .catch(() => ({}));
    const cacheKey = typeof body === 'object' && body !== null && 'CacheKey' in body ? String(body.CacheKey) : '';
    if (cacheKey !== CAPTURED_CONTACT_ID) return undefined;
    await mockDelay();
    if (scenario() === 'error') return HttpResponse.json({ error: 'mock error' }, { status: 500 });
    const list = scenario() === 'empty' ? [] : [CAPTURED_CONTACT];
    return HttpResponse.json({ data: { MemberContactList: wireList(list) } });
  }),
];
