import { renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { QRCodeStatus } from '@/api/event';
import { fetchLegacySignedImageURL } from '@/api/image';
import { fetchMember, type Member } from '@/api/member';
import { checkBarcodePlugin, scanBarcode, SCANNER_CLOSED_BY_USER } from '@/platform/device/barcodePlugin';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { isUserException } from '@/platform/feedback/flowErrors';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { DirectoryAPIFilter, ImageSigningSize } from '@/lib/orbit/staticEntities';
import {
  useAdminQRCodeScan,
  type AdminQRCodeScanBlock,
  type AdminQRCodeScanState,
  type AdminQRCodeScanStrategy,
  type AdminScannedUser,
} from './useAdminQRCodeScan';

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
vi.mock('@/platform/session/cachedUserInfo', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/session/cachedUserInfo')>()),
  appManager_GetCachedUserInfo: vi.fn(),
}));

/* The shared scan flows of the Orbit admin detail blocks with a fictional block: an admin scans the guests of a
   harvest gathering. The server calls, the scanner and the messages are spies. */
interface Params {
  In_EventId: string;
  In_Title: string;
}
interface User extends AdminScannedUser {
  UserRole: string;
  Venue: string;
}
interface Result {
  UserRole: string;
  Venue: string;
  Status: QRCodeStatus;
}
type State = AdminQRCodeScanState<User>;

const PARAMS: Params = { In_EventId: '7315', In_Title: 'Harvest Gathering' };
const MEMBER: Member = {
  Id: '9101',
  FirstName: 'Tomás',
  Lastname: 'Ferreira',
  LocalityName: 'Braga',
  CountryName: 'Portugal',
};
const EMPTY_MEMBER: Member = { Id: '0', FirstName: '', Lastname: '', LocalityName: '', CountryName: '' };
const INITIAL: State = {
  isProcessingData: false,
  qrCodePopupOpened: false,
  hasQRCode: true,
  scannedUser: { Member: EMPTY_MEMBER, SignedURL: '', UserRole: 'Old role', Venue: 'Old venue' },
  scanResult: { Success: false, ErrorMessage: '' },
  scanError: { IsShowErrorMessage: false, Message: '' },
};
const CHECKED_IN: Result = { UserRole: 'Guest', Venue: 'Lakeside Hall', Status: { Success: true, ErrorMessage: '' } };
const PHOTO = '/mock-images/guest-photo.jpg';
const NO_ERROR = { ErrorCode: '', ErrorMessage: '' };
const qrCode = (eventId: number, memberId: number) => JSON.stringify({ eventid: eventId, id: memberId });
const scanned = (text: string) =>
  vi
    .mocked(scanBarcode)
    .mockResolvedValueOnce({ Success: true, ScanResult: { Text: text, Format: 1 }, Error: NO_ERROR });

function setup(initial: Partial<State> = {}) {
  let state: State = { ...INITIAL, ...initial };
  const runs: Promise<void>[] = [];
  const raised: unknown[] = [];
  const strategy = {
    scannedMember: vi.fn((p: Params) => ({ Venue: `at ${p.In_Title}` })),
    emptyScannedUserPatch: { UserRole: '', Venue: '' },
    adminMemberId: vi.fn((memberId: string) => `#${memberId}`),
    checkIn: vi.fn(() => Promise.resolve(CHECKED_IN)),
    scannedUserOf: (result: Result) => ({ UserRole: result.UserRole, Venue: result.Venue }),
    onLaunch: vi.fn(),
    onSuccess: vi.fn(),
  } satisfies AdminQRCodeScanStrategy<Params, User, Result>;
  const block: AdminQRCodeScanBlock<Params, User> = {
    dispatch: (patch) => {
      state = { ...state, ...patch };
    },
    latest: {
      get current() {
        return state;
      },
    },
    parameters: { current: PARAMS },
    flow: {
      own: (action) => action,
      run: (flow) => {
        runs.push(flow().catch((e: unknown) => void raised.push(e)));
      },
    },
  };
  const handlers = renderHook(() => useAdminQRCodeScan(block, strategy)).result.current;
  const settled = async () => {
    await Promise.all(runs);
  };
  return { handlers, strategy, raised, settled, state: () => state };
}

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(fetchMember).mockResolvedValue(MEMBER);
  vi.mocked(fetchLegacySignedImageURL).mockResolvedValue(PHOTO);
  vi.mocked(checkBarcodePlugin).mockResolvedValue({ IsAvailable: true, IsPWA: false, Error: NO_ERROR });
  vi.mocked(appManager_GetCachedUserInfo).mockReturnValue({
    MemberId: '4242',
    FirstName: 'Inês',
    LastName: 'Duarte',
    Locality: 'Porto',
    Country: 'Portugal',
  } as ReturnType<typeof appManager_GetCachedUserInfo>);
});

describe('useAdminQRCodeScan', () => {
  it('a scan: the launch hook, ScanBarcode, the member and photo, the check-in, the result popup, the success hook', async () => {
    const { handlers, strategy, settled, state } = setup();
    scanned(qrCode(7315, 9101));
    handlers.onScanQrCodeClicked();
    await settled();
    expect(strategy.onLaunch).toHaveBeenCalledWith(PARAMS);
    expect(strategy.onLaunch.mock.invocationCallOrder[0]).toBeLessThan(
      vi.mocked(scanBarcode).mock.invocationCallOrder[0] ?? 0,
    );
    expect(scanBarcode).toHaveBeenCalledWith(
      {
        ScanInstructions: 'Please center the code in the frame',
        CameraDirection: 1,
        ScanOrientation: 1,
        ScanButton: false,
        ScanButtonText: 'Scan',
        ShowCameraSelection: false,
        Hint: 0,
        ScannerFPS: -1,
        AndroidScanningLibrary: 'Entities.AndroidScanningLibrary.ZXing',
      },
      { showFeedbackMessage },
    );
    expect(fetchMember).toHaveBeenCalledWith('9101');
    expect(fetchLegacySignedImageURL).toHaveBeenCalledWith('9101', DirectoryAPIFilter.Member, ImageSigningSize.Small);
    expect(strategy.scannedMember).toHaveBeenCalledWith(PARAMS);
    expect(strategy.checkIn).toHaveBeenCalledWith(
      expect.objectContaining({ EventId: '7315', MemberId: '9101' }),
      MEMBER,
      { MemberId: '#4242', FirstName: 'Inês', LastName: 'Duarte', Locality: 'Porto', Country: 'Portugal' },
      PARAMS,
    );
    expect(strategy.adminMemberId).toHaveBeenCalledWith('4242');
    expect(state()).toEqual({
      ...INITIAL,
      qrCodePopupOpened: true,
      scanResult: { Success: true, ErrorMessage: '' },
      scannedUser: { Member: MEMBER, SignedURL: PHOTO, UserRole: 'Guest', Venue: 'Lakeside Hall' },
    });
    expect(strategy.onSuccess).toHaveBeenCalledWith(PARAMS, MEMBER, CHECKED_IN);
  });

  it('a failed check-in: its message in the popup, no success hook', async () => {
    const { handlers, strategy, settled, state } = setup();
    strategy.checkIn.mockResolvedValueOnce({ ...CHECKED_IN, Status: { Success: false, ErrorMessage: 'Already in.' } });
    scanned(qrCode(7315, 9101));
    handlers.onScanQrCodeClicked();
    await settled();
    expect(state().scanResult).toEqual({ Success: false, ErrorMessage: 'Already in.' });
    expect(state().qrCodePopupOpened).toBe(true);
    expect(strategy.onSuccess).not.toHaveBeenCalled();
  });

  it('a code of another event: "Guest is not allocated to this event.", the cleared fields, no check-in', async () => {
    const { handlers, strategy, settled, state } = setup();
    scanned(qrCode(8000, 9101));
    handlers.onScanQrCodeClicked();
    await settled();
    expect(strategy.checkIn).not.toHaveBeenCalled();
    expect(state()).toEqual({
      ...INITIAL,
      qrCodePopupOpened: true,
      scanResult: { Success: false, ErrorMessage: 'Guest is not allocated to this event.' },
      scannedUser: { Member: MEMBER, SignedURL: PHOTO, UserRole: '', Venue: '' },
    });
  });

  it('a code without data: the message; an unreadable code: the error popup; another error: UnknownError', async () => {
    const first = setup({ isProcessingData: true });
    scanned('');
    first.handlers.onScanQrCodeClicked();
    await first.settled();
    expect(showFeedbackMessage).toHaveBeenCalledWith(
      'This QR Code was unable to be processed. Please try again later.',
      PLATFORM_MESSAGE_TYPE.info,
    );
    expect(fetchMember).not.toHaveBeenCalled();
    expect(first.state().isProcessingData).toBe(false);

    const second = setup();
    vi.mocked(fetchMember).mockRejectedValueOnce(new Error('failed to DESERIALIZE json to MemberRecord'));
    scanned(qrCode(7315, 9101));
    second.handlers.onScanQrCodeClicked();
    await second.settled();
    expect(second.state().scanError).toEqual({
      IsShowErrorMessage: true,
      Message: 'Unable to read QR code, please try again.',
    });
    expect(second.raised).toEqual([]);

    const third = setup();
    vi.mocked(fetchMember).mockRejectedValueOnce(new Error('Member not found'));
    scanned(qrCode(7315, 9101));
    third.handlers.onScanQrCodeClicked();
    await third.settled();
    expect(third.raised).toHaveLength(1);
    expect(isUserException(third.raised[0], 'Connect2_OrbitMobile_MUI.UnknownError')).toBe(true);
    expect((third.raised[0] as Error).message).toBe('Member not found');
    expect(third.state().isProcessingData).toBe(false);
  });

  it('the scanner: closed by the user without a message, another failure with its message, no plugin, no QR code', async () => {
    const { handlers, settled, state } = setup();
    vi.mocked(scanBarcode).mockResolvedValueOnce({
      Success: false,
      ScanResult: { Text: '', Format: 0 },
      Error: { ErrorCode: SCANNER_CLOSED_BY_USER, ErrorMessage: 'Closed.' },
    });
    vi.mocked(scanBarcode).mockResolvedValueOnce({
      Success: false,
      ScanResult: { Text: '', Format: 0 },
      Error: { ErrorCode: 'OS-PLUG-BARC-0001', ErrorMessage: 'Camera busy.' },
    });
    handlers.onScanQrCodeClicked();
    await settled();
    expect(showFeedbackMessage).not.toHaveBeenCalled();
    handlers.onScanQrCodeClicked();
    await settled();
    vi.mocked(checkBarcodePlugin).mockResolvedValueOnce({
      IsAvailable: false,
      IsPWA: false,
      Error: { ErrorCode: 'X', ErrorMessage: 'No scanner here.' },
    });
    handlers.onScanQrCodeClicked();
    await settled();
    expect(scanBarcode).toHaveBeenCalledTimes(2);
    expect(vi.mocked(showFeedbackMessage).mock.calls).toEqual([
      ['Camera busy.', PLATFORM_MESSAGE_TYPE.info],
      ['No scanner here.', PLATFORM_MESSAGE_TYPE.info],
    ]);
    expect(state().isProcessingData).toBe(false);

    const none = setup({ hasQRCode: false });
    none.handlers.onScanQrCodeClicked();
    await none.settled();
    expect(checkBarcodePlugin).toHaveBeenCalledTimes(3);
  });

  it('Done closes the popup and scans again; Ok clears the error and scans again', async () => {
    const { handlers, settled, state } = setup({
      qrCodePopupOpened: true,
      scanError: { IsShowErrorMessage: true, Message: 'Unable to read QR code, please try again.' },
    });
    vi.mocked(checkBarcodePlugin).mockResolvedValue({
      IsAvailable: false,
      IsPWA: false,
      Error: { ErrorCode: 'X', ErrorMessage: 'No scanner here.' },
    });
    handlers.onScanDone();
    await settled();
    expect(state().qrCodePopupOpened).toBe(false);
    expect(checkBarcodePlugin).toHaveBeenCalledTimes(1);
    handlers.onErrorMessageOk();
    await settled();
    expect(state().scanError).toEqual({ IsShowErrorMessage: false, Message: '' });
    expect(checkBarcodePlugin).toHaveBeenCalledTimes(2);
  });
});
