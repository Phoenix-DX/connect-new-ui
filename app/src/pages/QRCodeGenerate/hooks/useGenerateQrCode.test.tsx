import { act, render, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { EventQRCodeData } from '@/api/event';
import { fetchEventQRCode } from '@/api/event/repository';
import { fetchLegacySignedImageURL } from '@/api/image/repository';
import { IgnorableSystemException } from '@/legacy/os/os-exceptions';
import type { QRCodeGenerateInputs } from '@/pages/QRCodeGenerate/inputs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import type { AppManager_CachedUserInfoRec } from '@/platform/session/types';
import {
  afterFetchOf,
  eventQRCodeCallInputs,
  generateQrCodeReducer,
  INITIAL_GENERATE_QR_CODE_STATE,
  type GenerateQrCodeState,
} from './generateQrCodeState';
import { useGenerateQrCode, type GenerateQrCodeFlows } from './useGenerateQrCode';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./generateQrCodeState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./generateQrCodeState')>();
  return { ...actual, generateQrCodeReducer: vi.fn(actual.generateQrCodeReducer) };
});
vi.mock('@/api/event/repository', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/event/repository')>()),
  fetchEventQRCode: vi.fn(),
}));
vi.mock('@/api/image/repository', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/image/repository')>()),
  fetchLegacySignedImageURL: vi.fn(),
}));
vi.mock('@/platform/session/cachedUserInfo', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/session/cachedUserInfo')>()),
  appManager_GetCachedUserInfo: vi.fn(),
}));
/* useFlowState sends a rejected OnReady to this flow handler. */
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
/** A back navigation that the view cache restores (wasCurrentViewRestoredFromCache), with the saved variables. */
const viewCache = vi.hoisted((): { restored: boolean; saved: unknown } => ({ restored: false, saved: undefined }));
vi.mock('@/platform/navigation/hooks', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/platform/navigation/hooks')>();
  return {
    ...actual,
    useWasRestoredFromCache: () => viewCache.restored,
    useViewState: <T,>(name: string, initial: T) => {
      const saved = viewCache.saved as T | undefined;
      return actual.useViewState(name, saved ?? initial);
    },
  };
});

/* The flows of ScreenBlock_GenerateQRCode with the calls, the cached user and the flow handler replaced by spies.
   Fictional member and event. */
const INPUTS: QRCodeGenerateInputs = {
  In_MemberId: '990001',
  In_EventId: '7301',
  In_EventName: 'Rosario Conference',
  In_EventStartDate: '2026-11-06T09:00:00Z',
  In_EventEndDate: '2026-11-08T17:00:00Z',
  In_EventLocation: 'Rosario Main Hall',
};
const USER: AppManager_CachedUserInfoRec = {
  isCommunityMember: true,
  ContactBaseId: '',
  MemberId: '990001',
  FirstName: 'Matías',
  LastName: 'Vitale',
  Locality: 'Rosario',
  Country: 'Argentina',
  CountryCode: 'AR',
  UserExternalId: '',
  Username: '',
  Email: '',
  Phone: '',
};
const PHOTO = '/mock-images/placeholder-square.svg';
/** A one-pixel PNG as the QR image. */
const PNG = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
const DATA: EventQRCodeData = {
  GetEventQRCodeResponse: {
    GuestRole: 'Host',
    QrCodeImage: 'UBTCONNECT-ORBIT|EVENT:7301|MEMBER:990001|PASS:H-0417',
    Seats: [
      { MilestoneName: 'Conference Meeting', SeatAllocation: '12' },
      { MilestoneName: 'Closing Meeting', SeatAllocation: '12' },
    ],
    Tag: 'H-0417',
  },
  QRCodeAsBinary: PNG,
};
/** The variables when RefreshData calls Get_EventQRCode. */
const AT_CALL: GenerateQrCodeState = {
  ...INITIAL_GENERATE_QR_CODE_STATE,
  isFetchingData: true,
  userName: 'Matías Vitale',
  userLocation: 'Rosario, Argentina',
  userSignedURL: PHOTO,
};

const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const renderFlows = () => renderHook(() => useGenerateQrCode(INPUTS), { wrapper });
/** The hook as the dev server renders it: StrictMode runs the mount effects twice. Returns the newest result. */
function renderStrict() {
  const latestResult: { current: GenerateQrCodeFlows | null } = { current: null };
  function Probe() {
    latestResult.current = useGenerateQrCode(INPUTS);
    return null;
  }
  render(
    <StrictMode>
      <MemoryRouter>
        <Probe />
      </MemoryRouter>
    </StrictMode>,
  );
  return latestResult;
}
const settle = () => act(() => new Promise((resolve) => setTimeout(resolve, 0)));
/** Get_EventQRCode answers only when the test resolves or rejects it. */
function pendingQrCode() {
  const call: { resolve: (value: EventQRCodeData) => void; reject: (error: Error) => void } = {
    resolve: () => undefined,
    reject: () => undefined,
  };
  vi.mocked(fetchEventQRCode).mockReturnValueOnce(
    new Promise((resolve, reject) => {
      call.resolve = resolve;
      call.reject = reject;
    }),
  );
  return call;
}
/** GetCacheableSignedImageURL answers only when the test resolves it. */
function pendingPhoto() {
  const call: { resolve: (value: string) => void } = { resolve: () => undefined };
  vi.mocked(fetchLegacySignedImageURL).mockReturnValueOnce(
    new Promise((resolve) => {
      call.resolve = resolve;
    }),
  );
  return call;
}

beforeEach(() => {
  vi.clearAllMocks();
  viewCache.restored = false;
  viewCache.saved = undefined;
  vi.mocked(appManager_GetCachedUserInfo).mockReturnValue(USER);
  vi.mocked(fetchLegacySignedImageURL).mockResolvedValue(PHOTO);
  vi.mocked(fetchEventQRCode).mockResolvedValue(DATA);
});

describe('useGenerateQrCode: OnReady and RefreshData', () => {
  it('shows the fetching state with the user at once, then the pass, with one call of each', async () => {
    const qrCode = pendingQrCode();
    const { result } = renderFlows();
    // The part of RefreshData before its first wait runs with the mount.
    expect(result.current.state).toEqual({
      ...INITIAL_GENERATE_QR_CODE_STATE,
      isFetchingData: true,
      userName: 'Matías Vitale',
      userLocation: 'Rosario, Argentina',
    });
    expect(result.current.qrCodeImageURL).toBe('');
    await settle();
    expect(result.current.state).toEqual(AT_CALL);
    qrCode.resolve(DATA);
    await settle();
    expect(result.current.state).toEqual({ ...AT_CALL, ...afterFetchOf(DATA), isFetchingData: false });
    expect(result.current.qrCodeImageURL).toMatch(/^blob:/);
    expect(fetchLegacySignedImageURL).toHaveBeenCalledTimes(1);
    expect(fetchLegacySignedImageURL).toHaveBeenCalledWith('990001', 'Member', 'Medium');
    expect(fetchEventQRCode).toHaveBeenCalledTimes(1);
    expect(fetchEventQRCode).toHaveBeenCalledWith(eventQRCodeCallInputs(AT_CALL, INPUTS));
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('asks the photo of member id 0 when the cached user has no member id', async () => {
    vi.mocked(appManager_GetCachedUserInfo).mockReturnValue({ ...USER, MemberId: '', Locality: '' });
    const { result } = renderFlows();
    await settle();
    expect(fetchLegacySignedImageURL).toHaveBeenCalledWith('0', 'Member', 'Medium');
    expect(result.current.state.userLocation).toBe('Argentina');
  });

  it('keeps the fetching state and raises a failed Get_EventQRCode to the flow handler once', async () => {
    const error = new Error('Service Interruption');
    vi.mocked(fetchEventQRCode).mockRejectedValue(error);
    const { result } = renderFlows();
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
    expect(result.current.state).toEqual(AT_CALL);
  });

  it('raises a failed photo call and makes no Get_EventQRCode call', async () => {
    const error = new Error('Service Interruption');
    vi.mocked(fetchLegacySignedImageURL).mockRejectedValue(error);
    const { result } = renderFlows();
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
    expect(fetchEventQRCode).not.toHaveBeenCalled();
    expect(result.current.state.isFetchingData).toBe(true);
  });

  it('keeps the variables of a view that the view cache restored, without a call', async () => {
    const saved: GenerateQrCodeState = { ...AT_CALL, ...afterFetchOf(DATA), isFetchingData: false };
    viewCache.restored = true;
    viewCache.saved = saved;
    const { result } = renderFlows();
    await settle();
    expect(result.current.state).toEqual(saved);
    expect(result.current.qrCodeImageURL).toMatch(/^blob:/);
    expect(appManager_GetCachedUserInfo).not.toHaveBeenCalled();
    expect(fetchLegacySignedImageURL).not.toHaveBeenCalled();
    expect(fetchEventQRCode).not.toHaveBeenCalled();
  });

  it('paints the fetching state in the first frame (OnReady before the paint, decision W28)', async () => {
    const actEnvironment = globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean };
    const previous = actEnvironment.IS_REACT_ACT_ENVIRONMENT;
    actEnvironment.IS_REACT_ACT_ENVIRONMENT = false;
    pendingQrCode();
    function Probe() {
      const { state } = useGenerateQrCode(INPUTS);
      return <p>{state.isFetchingData ? `fetching ${state.userName}` : 'idle'}</p>;
    }
    const container = document.createElement('div');
    document.body.append(container);
    const root = createRoot(container);
    try {
      flushSync(() => {
        root.render(
          <MemoryRouter>
            <Probe />
          </MemoryRouter>,
        );
      });
      expect(container.textContent).toBe('fetching Matías Vitale');
      await vi.waitFor(() => {
        expect(fetchEventQRCode).toHaveBeenCalledTimes(1);
      });
    } finally {
      flushSync(() => {
        root.unmount();
      });
      container.remove();
      actEnvironment.IS_REACT_ACT_ENVIRONMENT = previous;
    }
  });
});

describe('useGenerateQrCode after an unmount and in StrictMode (flow scope, item 8)', () => {
  /** The errors that reached the flow handler, without the ignorable ones (the handler drops them: R1). */
  const raisedErrors = () =>
    vi
      .mocked(raiseToFlowHandler)
      .mock.calls.map(([error]) => error)
      .filter((error) => !(error instanceof IgnorableSystemException));

  it('R2: GetCacheableSignedImageURL answers after the unmount: Get_EventQRCode still goes out once with the assigned variables, no state write', async () => {
    const photo = pendingPhoto();
    const { unmount } = renderFlows();
    unmount();
    vi.mocked(generateQrCodeReducer).mockClear();
    photo.resolve(PHOTO);
    await settle();
    expect(fetchEventQRCode).toHaveBeenCalledTimes(1);
    expect(fetchEventQRCode).toHaveBeenCalledWith(eventQRCodeCallInputs(AT_CALL, INPUTS));
    expect(generateQrCodeReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: unmount while Get_EventQRCode is pending: the answer writes no state and raises nothing', async () => {
    const qrCode = pendingQrCode();
    const { unmount } = renderFlows();
    await settle();
    unmount();
    vi.mocked(generateQrCodeReducer).mockClear();
    qrCode.resolve(DATA);
    await settle();
    expect(generateQrCodeReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: unmount while Get_EventQRCode is pending: its failure reaches no handler', async () => {
    const qrCode = pendingQrCode();
    const { unmount } = renderFlows();
    await settle();
    unmount();
    qrCode.reject(new Error('Service Interruption'));
    await settle();
    expect(fetchEventQRCode).toHaveBeenCalledTimes(1);
    expect(raisedErrors()).toEqual([]);
  });

  it('R2: a failure of GetCacheableSignedImageURL after the unmount still goes to the flow handler, with the scope', async () => {
    const error = new Error('Service Interruption');
    let fail: (reason: Error) => void = () => undefined;
    vi.mocked(fetchLegacySignedImageURL).mockReturnValueOnce(
      new Promise((_resolve, reject) => {
        fail = reject;
      }),
    );
    const { unmount } = renderFlows();
    unmount();
    fail(error);
    await settle();
    expect(fetchEventQRCode).not.toHaveBeenCalled();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
  });

  it('runs RefreshData once in StrictMode and shows the pass', async () => {
    const result = renderStrict();
    await settle();
    expect(appManager_GetCachedUserInfo).toHaveBeenCalledTimes(1);
    expect(fetchLegacySignedImageURL).toHaveBeenCalledTimes(1);
    expect(fetchEventQRCode).toHaveBeenCalledTimes(1);
    expect(result.current?.state).toEqual({ ...AT_CALL, ...afterFetchOf(DATA), isFetchingData: false });
  });
});
