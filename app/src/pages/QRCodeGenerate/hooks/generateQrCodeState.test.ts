import { describe, expect, it } from 'vitest';
import type { EventQRCodeData } from '@/api/event';
import type { QRCodeGenerateInputs } from '@/pages/QRCodeGenerate/inputs';
import {
  afterFetchOf,
  EMPTY_QR_CODE_DATA,
  eventQRCodeCallInputs,
  generateQrCodeReducer,
  getContactHelpdeskSubject_Event,
  hasPassOf,
  INITIAL_GENERATE_QR_CODE_STATE,
  memberPhotoIdOf,
  userVariablesOf,
} from './generateQrCodeState';

/* Fictional pass of the mock world (src/mocks/fictional/orbit.ts): event 7301, member 990001. */
const INPUTS: QRCodeGenerateInputs = {
  In_MemberId: '990001',
  In_EventId: '7301',
  In_EventName: 'Rosario Conference',
  In_EventStartDate: '2026-11-06T09:00:00Z',
  In_EventEndDate: '2026-11-08T17:00:00Z',
  In_EventLocation: 'Rosario Main Hall',
};
const DATA: EventQRCodeData = {
  GetEventQRCodeResponse: {
    GuestRole: 'Host',
    QrCodeImage: 'UBTCONNECT-ORBIT|EVENT:7301|MEMBER:990001|PASS:H-0417',
    Seats: [{ MilestoneName: 'Conference Meeting', SeatAllocation: '12' }],
    Tag: 'H-0417',
  },
  QRCodeAsBinary: 'iVBORw0KGgo=',
};

describe('generateQrCodeState', () => {
  it('starts with the defaults: not fetching, nothing fetched, an empty pass', () => {
    expect(INITIAL_GENERATE_QR_CODE_STATE).toEqual({
      userName: '',
      userLocation: '',
      userSignedURL: '',
      isFetchingData: false,
      qrCodeData: EMPTY_QR_CODE_DATA,
      isDataFetched: false,
      responseQRCodeAsBinary: '',
    });
  });

  it('generateQrCodeReducer assigns the patch and keeps the other variables', () => {
    const next = generateQrCodeReducer(INITIAL_GENERATE_QR_CODE_STATE, { isFetchingData: true, userName: 'Ana Ruiz' });
    expect(next).toEqual({ ...INITIAL_GENERATE_QR_CODE_STATE, isFetchingData: true, userName: 'Ana Ruiz' });
    expect(INITIAL_GENERATE_QR_CODE_STATE.isFetchingData).toBe(false);
  });

  it('userVariablesOf joins the names, and the locality and country with ", " only when the locality is set', () => {
    expect(
      userVariablesOf({ FirstName: 'Matías', LastName: 'Vitale', Locality: 'Rosario', Country: 'Argentina' }),
    ).toEqual({ userName: 'Matías Vitale', userLocation: 'Rosario, Argentina' });
    expect(userVariablesOf({ FirstName: 'Matías', LastName: 'Vitale', Locality: '', Country: 'Argentina' })).toEqual({
      userName: 'Matías Vitale',
      userLocation: 'Argentina',
    });
    expect(userVariablesOf({ FirstName: '', LastName: '', Locality: '', Country: '' })).toEqual({
      userName: ' ',
      userLocation: '',
    });
  });

  it('memberPhotoIdOf reads the leading number of the member id, "0" otherwise', () => {
    expect(memberPhotoIdOf('990001')).toBe('990001');
    expect(memberPhotoIdOf('0042')).toBe('42');
    expect(memberPhotoIdOf('')).toBe('0');
    expect(memberPhotoIdOf('member')).toBe('0');
  });

  it('eventQRCodeCallInputs sends the block variables, then the six inputs, in their order', () => {
    const state = {
      ...INITIAL_GENERATE_QR_CODE_STATE,
      userName: 'Matías Vitale',
      userLocation: 'Rosario, Argentina',
      userSignedURL: '/mock-images/placeholder-square.svg',
      isFetchingData: true,
    };
    expect(JSON.stringify(eventQRCodeCallInputs(state, INPUTS))).toBe(
      '{"UserName":"Matías Vitale","UserLocation":"Rosario, Argentina",' +
        '"UserSignedURL":"/mock-images/placeholder-square.svg","IsFetchingData":true,"In_MemberId":"990001",' +
        '"In_EventId":"7301","In_EventName":"Rosario Conference","In_EventStartDate":"2026-11-06T09:00:00Z",' +
        '"In_EventEndDate":"2026-11-08T17:00:00Z","In_EventLocation":"Rosario Main Hall"}',
    );
  });

  it('afterFetchOf keeps the response as QRCodeData and marks the data action fetched', () => {
    expect(afterFetchOf(DATA)).toEqual({
      isDataFetched: true,
      responseQRCodeAsBinary: 'iVBORw0KGgo=',
      qrCodeData: DATA,
    });
  });

  it('hasPassOf needs a fetched answer with a QR image', () => {
    expect(hasPassOf(INITIAL_GENERATE_QR_CODE_STATE)).toBe(false);
    expect(hasPassOf(generateQrCodeReducer(INITIAL_GENERATE_QR_CODE_STATE, afterFetchOf(DATA)))).toBe(true);
    expect(hasPassOf(generateQrCodeReducer(INITIAL_GENERATE_QR_CODE_STATE, afterFetchOf(EMPTY_QR_CODE_DATA)))).toBe(
      false,
    );
    expect(hasPassOf({ ...INITIAL_GENERATE_QR_CODE_STATE, responseQRCodeAsBinary: 'iVBORw0KGgo=' })).toBe(false);
  });
});

describe('getContactHelpdeskSubject_Event', () => {
  const start = '2026-11-06T09:00:00Z';
  const end = '2026-11-08T17:00:00Z';

  it('joins the name, the location and the two days with " - "', () => {
    expect(getContactHelpdeskSubject_Event('Rosario Conference', start, end, 'Rosario Main Hall')).toBe(
      'Rosario Conference - Rosario Main Hall - Fri 6 Nov 2026 - Sun 8 Nov 2026',
    );
  });

  it('leaves out the dates when one of them is the null date', () => {
    expect(getContactHelpdeskSubject_Event('Rosario Conference', start, '', 'Rosario Main Hall')).toBe(
      'Rosario Conference - Rosario Main Hall',
    );
    expect(getContactHelpdeskSubject_Event('Rosario Conference', '', end, '')).toBe('Rosario Conference');
  });

  it('leaves out an empty name or location without a separator', () => {
    expect(getContactHelpdeskSubject_Event('', start, end, 'Rosario Main Hall')).toBe(
      'Rosario Main Hall - Fri 6 Nov 2026 - Sun 8 Nov 2026',
    );
    expect(getContactHelpdeskSubject_Event('Rosario Conference', start, end, '')).toBe(
      'Rosario Conference - Fri 6 Nov 2026 - Sun 8 Nov 2026',
    );
    expect(getContactHelpdeskSubject_Event('', '', '', '')).toBe('');
  });
});
