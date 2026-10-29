import { act, renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchSharedObjectDetail, type SharedObjectDetail } from '@/api/share';
import { IgnorableSystemException } from '@/legacy/os/os-exceptions';
import { auditShareViewEvent } from '@/pages/MessageDetail/actions';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useShareObjectDetail } from './useShareObjectDetail';

/* The flows of ShareObjectDetail_ExtendedShare, with GetShare, AuditShareViewEvent and the flow handler replaced by
   spies. Fictional share. */
vi.mock('@/api/share', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/share')>()),
  fetchSharedObjectDetail: vi.fn(),
}));
vi.mock('@/pages/MessageDetail/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/pages/MessageDetail/actions')>()),
  auditShareViewEvent: vi.fn(() => Promise.resolve()),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

const SHARE: SharedObjectDetail = {
  objectId: '61207',
  senderId: '900131',
  shareObjectTypeId: 'Household',
  shareObjectTypeLabel: 'Household',
  isShareAvailable: true,
  updateDate: null,
  shareItem: {
    id: '61207',
    canAccess: true,
    isDeceased: false,
    householderId: '61207',
    type: '',
    title: 'Lindqvist Household',
    subtitle: 'Anders and Maja Lindqvist',
    label: 'Uppsala',
    dateTime: null,
    genderId: '',
    parentsName: '',
    birthType: '',
    localityName: 'Uppsala',
    countryName: 'Sweden',
    photoSignedPath: '',
    isVisible: true,
  },
};

const events = { onGoToObjectDetail: vi.fn(), onSubscriptionDenied: vi.fn() };
const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const renderFlows = () =>
  renderHook(() => useShareObjectDetail({ ShareId: '9001', HasAccessToDeceasedHousehold: true }, events), { wrapper });
const settle = () => act(() => new Promise((resolve) => setTimeout(resolve, 0)));
/** GetShare answers only when the test resolves or rejects it. */
function pendingGetShare() {
  let resolve: (value: SharedObjectDetail) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  vi.mocked(fetchSharedObjectDetail).mockReturnValueOnce(
    new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    }),
  );
  return { resolve, reject };
}
/** The errors that reached the flow handler, without the ignorable ones (the handler drops them: R1). */
const raisedErrors = () =>
  vi
    .mocked(raiseToFlowHandler)
    .mock.calls.map(([error]) => error)
    .filter((error) => !(error instanceof IgnorableSystemException));

beforeEach(() => {
  vi.clearAllMocks();
});

describe('useShareObjectDetail: GetShare and GetShareOnAfterFetch (flow scope, item 8)', () => {
  it('GetShare answers: AuditShareViewEvent, then the share', async () => {
    vi.mocked(fetchSharedObjectDetail).mockResolvedValueOnce(SHARE);
    const { result } = renderFlows();
    await settle();
    expect(auditShareViewEvent).toHaveBeenCalledWith('9001', 'Household');
    expect(result.current.state.share).toEqual(SHARE);
  });

  it('R1: unmount while GetShare is pending: no audit, no raise', async () => {
    const getShare = pendingGetShare();
    const { unmount } = renderFlows();
    unmount();
    getShare.resolve(SHARE);
    await settle();
    expect(auditShareViewEvent).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: unmount while GetShare is pending: its failure reaches no handler', async () => {
    const getShare = pendingGetShare();
    const { unmount } = renderFlows();
    unmount();
    getShare.reject(new Error('Service Interruption'));
    await settle();
    expect(auditShareViewEvent).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });
});
