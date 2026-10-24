import { act, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  fetchAdminEventInformation,
  fetchScanEventQRCode,
  type AdminEventInformation,
  type ScanEventQRCodeResult,
} from '@/api/event';
import { fetchLegacySignedImageURL } from '@/api/image';
import { fetchMember, type Member } from '@/api/member';
import { CommunicationException, UserException } from '@/legacy/os/exceptions';
import { checkBarcodePlugin, scanBarcode, SCANNER_CLOSED_BY_USER } from '@/platform/device/barcodePlugin';
import { showFeedbackMessage } from '@/platform/feedback';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { addLogSink, type LogEntry } from '@/platform/log/log';
import type { AdminEventDetailInputs } from '@/pages/OrbitAdminEventDetail/inputs';
import { ApplicationEvents_Orbit } from '@/pages/OrbitAdminEventDetail/staticEntities';
import { adminEventDetailReducer } from './adminEventDetailState';
import { useAdminEventDetail } from './useAdminEventDetail';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./adminEventDetailState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./adminEventDetailState')>();
  return { ...actual, adminEventDetailReducer: vi.fn(actual.adminEventDetailReducer) };
});
vi.mock('@/api/event', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/event')>()),
  fetchAdminEventInformation: vi.fn(),
  fetchScanEventQRCode: vi.fn(),
}));
vi.mock('@/api/member', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/member')>()),
  fetchMember: vi.fn(),
}));
vi.mock('@/api/image', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/image')>()),
  fetchLegacySignedImageURL: vi.fn(),
}));
vi.mock('@/platform/device/barcodePlugin', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/device/barcodePlugin')>()),
  checkBarcodePlugin: vi.fn(),
  scanBarcode: vi.fn(),
}));
vi.mock('@/platform/feedback', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback')>()),
  showFeedbackMessage: vi.fn(),
}));
/* useFlowState and the click handlers send a rejected flow to this flow handler. */
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* The flows of ScreenBlock_AdminEventDetail with the server calls, the scanner, the messages and the flow handler
   replaced by spies. The admin scans the attendees of a fictional youth day. */
const INPUTS: AdminEventDetailInputs = {
  In_EventId: '7315',
  In_EventName: 'Youth Day - Azul',
  In_EventStartDate: '2026-11-14T13:00:00Z',
  In_EventEndDate: '2026-11-14T21:00:00Z',
  In_EventLocation: 'Azul Meeting Room',
  In_EventTypeFriendly: 'Youth Day',
};
const ADMIN_TYPE = { Id: 'event-admin', Is_Active: true, Type: 'Admin', Name: 'Admin', MainColorVar: '', MainIcon: '' };
const INFORMATION: AdminEventInformation = { hasQRCode: true, orbitEventType: ADMIN_TYPE };
const MEMBER: Member = {
  Id: '9101',
  FirstName: 'Lucía',
  Lastname: 'Herrera',
  LocalityName: 'San Nicolás',
  CountryName: 'Argentina',
};
const CHECK_IN: ScanEventQRCodeResult = {
  UserRole: 'Guest',
  Seats: [{ MilestoneName: '', SeatAllocation: '3' }],
  Tag: '',
  GuestRole: '',
  Status: { Success: true, ErrorMessage: '' },
};
const PHOTO = '/mock-images/placeholder-square.svg';
const NO_ERROR = { ErrorCode: '', ErrorMessage: '' };
const qrCode = (eventId: string, memberId: string) =>
  JSON.stringify({ eventid: Number(eventId), id: Number(memberId) });
const scanned = (text: string) =>
  vi
    .mocked(scanBarcode)
    .mockResolvedValueOnce({ Success: true, ScanResult: { Text: text, Format: 1 }, Error: NO_ERROR });

const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const strictWrapper = ({ children }: { children: ReactNode }) => (
  <StrictMode>
    <MemoryRouter>{children}</MemoryRouter>
  </StrictMode>
);
const settle = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
/** An answer that the test gives later. */
function pending<T>(mock: { mockReturnValueOnce: (value: Promise<T>) => unknown }) {
  let resolve: (value: T) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  mock.mockReturnValueOnce(
    new Promise<T>((res, rej) => {
      resolve = res;
      reject = rej;
    }),
  );
  return { resolve, reject };
}
const raised = () => vi.mocked(raiseToFlowHandler).mock.calls.map(([error]) => error);
let auditEvents: LogEntry[] = [];
let removeSink: () => void = () => undefined;
const audit = () => auditEvents.filter((e) => e.message === 'ApplicationEvent').map((e) => e.data);

/** Renders the hook and waits for Get_EventInformation. */
async function fetched(wrap = wrapper) {
  const view = renderHook(() => useAdminEventDetail(INPUTS), { wrapper: wrap });
  await settle();
  return view;
}

beforeEach(() => {
  vi.mocked(fetchAdminEventInformation).mockResolvedValue(INFORMATION);
  vi.mocked(fetchMember).mockResolvedValue(MEMBER);
  vi.mocked(fetchLegacySignedImageURL).mockResolvedValue(PHOTO);
  vi.mocked(fetchScanEventQRCode).mockResolvedValue(CHECK_IN);
  vi.mocked(checkBarcodePlugin).mockResolvedValue({ IsAvailable: true, IsPWA: false, Error: NO_ERROR });
  auditEvents = [];
  removeSink = addLogSink((entry) => auditEvents.push(entry));
});
afterEach(() => {
  removeSink();
  vi.clearAllMocks();
});

describe('useAdminEventDetail', () => {
  it('OnReady: IsFetchingData, then Get_EventInformation with the block variables, then EventType and HasQRCode', async () => {
    const answer = pending(vi.mocked(fetchAdminEventInformation));
    const { result } = renderHook(() => useAdminEventDetail(INPUTS), { wrapper });
    await settle();
    expect(result.current.state).toMatchObject({ isFetchingData: true, isDataFetched: false });
    expect(fetchAdminEventInformation).toHaveBeenCalledWith({
      ...INPUTS,
      IsFetchingData: true,
      IsProcessingData: false,
      QRCodePopupOpened: false,
    });
    answer.resolve(INFORMATION);
    await settle();
    expect(result.current.state).toMatchObject({
      isFetchingData: false,
      isDataFetched: true,
      hasQRCode: true,
      eventType: ADMIN_TYPE,
    });
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('StrictMode: OnReady runs once and the event information comes', async () => {
    const { result } = await fetched(strictWrapper);
    expect(fetchAdminEventInformation).toHaveBeenCalledTimes(1);
    expect(result.current.state.isDataFetched).toBe(true);
  });

  it('a failed Get_EventInformation goes to the flow handler and the skeleton stays', async () => {
    const error = new CommunicationException('offline');
    vi.mocked(fetchAdminEventInformation).mockRejectedValueOnce(error);
    const { result } = await fetched();
    expect(raised()).toEqual([error]);
    expect(result.current.state).toMatchObject({ isFetchingData: true, isDataFetched: false });
  });

  it('a scan of an attendee: the check-in, the result popup and the two audit events', async () => {
    const { result } = await fetched();
    const answer = pending(vi.mocked(fetchScanEventQRCode));
    scanned(qrCode('7315', '9101'));
    act(() => {
      result.current.onScanQrCodeClicked();
    });
    await settle();
    expect(result.current.state.isProcessingData).toBe(true);
    expect(scanBarcode).toHaveBeenCalledWith(
      expect.objectContaining({ ScanInstructions: 'Please center the code in the frame', Hint: 0, ScannerFPS: -1 }),
      { showFeedbackMessage },
    );
    expect(fetchMember).toHaveBeenCalledWith('9101');
    expect(fetchLegacySignedImageURL).toHaveBeenCalledWith('9101', 'Member', 'Small');
    expect(fetchScanEventQRCode).toHaveBeenCalledWith(
      '7315',
      '9101',
      MEMBER,
      expect.objectContaining({ MemberId: expect.any(String) as unknown }),
    );
    answer.resolve(CHECK_IN);
    await settle();
    expect(result.current.state).toMatchObject({
      isProcessingData: false,
      qrCodePopupOpened: true,
      scanResult: { Success: true, ErrorMessage: '' },
      scannedUser: { Member: MEMBER, SignedURL: PHOTO, UserRole: 'Guest', Seats: CHECK_IN.Seats, Tag: '' },
    });
    expect(audit()).toEqual([
      {
        EventId: ApplicationEvents_Orbit.LaunchQRCodeScanner,
        Payload: JSON.stringify({
          EventId: '7315',
          EventTitle: 'Youth Day - Azul',
          EventType: 'Youth Day',
          EventLocation: 'Azul Meeting Room',
          EventStartDate: '2026-11-14T13:00:00Z',
          EventEndDate: '2026-11-14T21:00:00Z',
        }),
      },
      {
        EventId: ApplicationEvents_Orbit.QRCodeScanned,
        Payload: JSON.stringify({
          EventId: '7315',
          EventTitle: 'Youth Day - Azul',
          EventLocation: 'Azul Meeting Room',
          ScannedMemberId: '9101',
          ScannedMemberName: 'Lucía Herrera',
          ScannedMemberRole: 'Guest',
        }),
      },
    ]);
  });

  it('a failed check-in: the error of the answer in the popup, no QRCodeScanned event', async () => {
    vi.mocked(fetchScanEventQRCode).mockResolvedValueOnce({
      ...CHECK_IN,
      Status: { Success: false, ErrorMessage: 'Already checked in.' },
    });
    const { result } = await fetched();
    scanned(qrCode('7315', '9101'));
    act(() => {
      result.current.onScanQrCodeClicked();
    });
    await settle();
    expect(result.current.state).toMatchObject({
      qrCodePopupOpened: true,
      scanResult: { Success: false, ErrorMessage: 'Already checked in.' },
    });
    expect(audit()).toHaveLength(1);
  });

  it('a code of another event: "Guest is not allocated to this event." without a check-in', async () => {
    const { result } = await fetched();
    scanned(qrCode('7301', '9101'));
    act(() => {
      result.current.onScanQrCodeClicked();
    });
    await settle();
    expect(fetchScanEventQRCode).not.toHaveBeenCalled();
    expect(result.current.state).toMatchObject({
      isProcessingData: false,
      qrCodePopupOpened: true,
      scanResult: { Success: false, ErrorMessage: 'Guest is not allocated to this event.' },
      scannedUser: { Member: MEMBER, SignedURL: PHOTO, UserRole: '', Seats: [], Tag: '', GuestRole: '' },
    });
  });

  it('a code without an event or member id: the message, no member call', async () => {
    const { result } = await fetched();
    scanned('{"eventid":0,"id":9101}');
    act(() => {
      result.current.onScanQrCodeClicked();
    });
    await settle();
    expect(fetchMember).not.toHaveBeenCalled();
    expect(showFeedbackMessage).toHaveBeenCalledWith(
      'This QR Code was unable to be processed. Please try again later.',
      expect.any(Number),
    );
    expect(result.current.state.isProcessingData).toBe(false);
  });

  it('an unreadable code: the OrbitErrorMessage popup; Ok resets it and scans again', async () => {
    const { result } = await fetched();
    scanned('WIFI:S:Hall-Guests;T:WPA;;');
    act(() => {
      result.current.onScanQrCodeClicked();
    });
    await settle();
    expect(result.current.state.scanError).toEqual({
      IsShowErrorMessage: true,
      Message: 'Unable to read QR code, please try again.',
    });
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
    scanned(qrCode('7315', '9101'));
    act(() => {
      result.current.onErrorMessageOk();
    });
    await settle();
    expect(result.current.state.scanError).toEqual({ IsShowErrorMessage: false, Message: '' });
    expect(scanBarcode).toHaveBeenCalledTimes(2);
    expect(result.current.state.qrCodePopupOpened).toBe(true);
  });

  it('Done closes the result popup and starts the next scan', async () => {
    const { result } = await fetched();
    scanned(qrCode('7315', '9101'));
    act(() => {
      result.current.onScanQrCodeClicked();
    });
    await settle();
    expect(result.current.state.qrCodePopupOpened).toBe(true);
    vi.mocked(scanBarcode).mockResolvedValueOnce({
      Success: false,
      ScanResult: { Text: '', Format: 0 },
      Error: { ErrorCode: SCANNER_CLOSED_BY_USER, ErrorMessage: 'cancelled' },
    });
    act(() => {
      result.current.onScanEventDone();
    });
    await settle();
    expect(scanBarcode).toHaveBeenCalledTimes(2);
    expect(result.current.state).toMatchObject({ qrCodePopupOpened: false, isProcessingData: false });
    // The user closed the scanner: no message.
    expect(showFeedbackMessage).not.toHaveBeenCalled();
  });

  it('a scanner error shows its message; an unavailable plugin shows its message without a scan', async () => {
    const { result } = await fetched();
    vi.mocked(scanBarcode).mockResolvedValueOnce({
      Success: false,
      ScanResult: { Text: '', Format: 0 },
      Error: { ErrorCode: 'OS-PLUG-BARC-0007', ErrorMessage: 'Camera access denied.' },
    });
    act(() => {
      result.current.onScanQrCodeClicked();
    });
    await settle();
    expect(showFeedbackMessage).toHaveBeenLastCalledWith('Camera access denied.', expect.any(Number));
    expect(result.current.state.isProcessingData).toBe(false);
    vi.mocked(checkBarcodePlugin).mockResolvedValueOnce({
      IsAvailable: false,
      IsPWA: false,
      Error: { ErrorCode: 'OS-PLUG-BARC-0011', ErrorMessage: 'Cordova is not available.' },
    });
    act(() => {
      result.current.onScanQrCodeClicked();
    });
    await settle();
    expect(showFeedbackMessage).toHaveBeenLastCalledWith('Cordova is not available.', expect.any(Number));
    expect(scanBarcode).toHaveBeenCalledTimes(1);
  });

  it('without a QR code the button does nothing', async () => {
    vi.mocked(fetchAdminEventInformation).mockResolvedValueOnce({ ...INFORMATION, hasQRCode: false });
    const { result } = await fetched();
    act(() => {
      result.current.onScanQrCodeClicked();
    });
    await settle();
    expect(checkBarcodePlugin).not.toHaveBeenCalled();
  });

  it('a failed server call of the scan: UnknownError to the flow handler, processing ends', async () => {
    vi.mocked(fetchMember).mockRejectedValueOnce(new UserException('Member not found'));
    const { result } = await fetched();
    scanned(qrCode('7315', '9101'));
    act(() => {
      result.current.onScanQrCodeClicked();
    });
    await settle();
    expect(raised()).toHaveLength(1);
    expect(raised()[0]).toMatchObject({
      message: 'Member not found',
      specificType: 'Connect2_OrbitMobile_MUI.UnknownError',
    });
    expect(result.current.state.isProcessingData).toBe(false);
  });

  it('W23: after the unmount, OnReady makes its call once and writes no state', async () => {
    const answer = pending(vi.mocked(fetchAdminEventInformation));
    let renders = 0;
    const { unmount } = renderHook(
      () => {
        renders += 1;
        return useAdminEventDetail(INPUTS);
      },
      { wrapper: strictWrapper },
    );
    await settle();
    unmount();
    const rendersAtUnmount = renders;
    vi.mocked(adminEventDetailReducer).mockClear();
    answer.resolve(INFORMATION);
    await settle();
    expect(fetchAdminEventInformation).toHaveBeenCalledTimes(1);
    expect(adminEventDetailReducer).not.toHaveBeenCalled();
    expect(renders).toBe(rendersAtUnmount);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('W23: an exception of OnReady after the unmount still goes to the flow handler, once', async () => {
    const answer = pending(vi.mocked(fetchAdminEventInformation));
    const { unmount } = renderHook(() => useAdminEventDetail(INPUTS), { wrapper: strictWrapper });
    await settle();
    unmount();
    vi.mocked(adminEventDetailReducer).mockClear();
    const error = new CommunicationException('offline');
    answer.reject(error);
    await settle();
    expect(raised()).toEqual([error]);
    expect(adminEventDetailReducer).not.toHaveBeenCalled();
  });

  it('W23: a scan that is pending at the unmount still checks in and raises QRCodeScanned once, without a state write', async () => {
    const { result, unmount } = await fetched(strictWrapper);
    const answer = pending(vi.mocked(fetchScanEventQRCode));
    scanned(qrCode('7315', '9101'));
    act(() => {
      result.current.onScanQrCodeClicked();
    });
    await settle();
    expect(fetchScanEventQRCode).toHaveBeenCalledTimes(1);
    unmount();
    vi.mocked(adminEventDetailReducer).mockClear();
    answer.resolve(CHECK_IN);
    await settle();
    expect(adminEventDetailReducer).not.toHaveBeenCalled();
    expect(fetchScanEventQRCode).toHaveBeenCalledTimes(1);
    expect(audit().map((e) => (e as { EventId: string }).EventId)).toEqual([
      ApplicationEvents_Orbit.LaunchQRCodeScanner,
      ApplicationEvents_Orbit.QRCodeScanned,
    ]);
    expect(JSON.parse((audit()[1] as { Payload: string }).Payload)).toMatchObject({
      ScannedMemberId: '9101',
      ScannedMemberName: 'Lucía Herrera',
      ScannedMemberRole: 'Guest',
    });
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('W23: a code that cannot be processed after the unmount still shows its message, once', async () => {
    const { result, unmount } = await fetched();
    const scan = pending(vi.mocked(scanBarcode));
    act(() => {
      result.current.onScanQrCodeClicked();
    });
    await settle();
    unmount();
    vi.mocked(adminEventDetailReducer).mockClear();
    scan.resolve({ Success: true, ScanResult: { Text: '{"eventid":0}', Format: 1 }, Error: NO_ERROR });
    await settle();
    expect(showFeedbackMessage).toHaveBeenCalledTimes(1);
    expect(adminEventDetailReducer).not.toHaveBeenCalled();
  });
});
