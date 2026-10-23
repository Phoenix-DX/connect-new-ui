import { act, renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchHouseholdCaption, type HouseholdCaption, type PhotobookHousehold } from '@/api/household';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { bottomSheetClose, bottomSheetOpen } from '@/shared/osui/lib/actions';
import { SKELETON_CAPTION, useHouseholdCaption, type HouseholdCaptionInputs } from './useHouseholdCaption';

vi.mock('@/api/household', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/household')>()),
  fetchHouseholdCaption: vi.fn(),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
vi.mock('@/shared/osui/lib/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/shared/osui/lib/actions')>()),
  bottomSheetOpen: vi.fn(),
  bottomSheetClose: vi.fn(),
}));
/** A back navigation that the view cache restores (wasCurrentViewRestoredFromCache). */
const viewCache = vi.hoisted(() => ({ restored: false }));
vi.mock('@/platform/navigation/hooks', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation/hooks')>()),
  useWasRestoredFromCache: () => viewCache.restored,
}));

/* The flows of Photobook_Options_Left, with the call, the sheet actions and the flow handler replaced by spies.
   Fictional households. */
const marlowe: PhotobookHousehold = { householdId: '7001', householdName: 'Ada & Tom Marlowe', locality: 'Nelson' };
const harlow: PhotobookHousehold = { householdId: '7002', householdName: 'Ben Harlow', locality: 'Nelson' };
const EMPTY: PhotobookHousehold = { householdId: '0', householdName: '', locality: '' };
const captionOf = (h: PhotobookHousehold): HouseholdCaption => ({
  householdCaption: `${h.householdName.toUpperCase()} (${h.locality})`,
  lastFetchedHousehold: h,
});

const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
function renderFlows(current: PhotobookHousehold = marlowe) {
  return renderHook((props: HouseholdCaptionInputs) => useHouseholdCaption(props), {
    wrapper,
    initialProps: { inCurrentHousehold: current, inIsShow: true, inMainContainerClass: 'photobook-carousel' },
  });
}
const settle = () => act(() => Promise.resolve());

/** DataActionGetHouseholdCaption answers or fails only when the test says so. */
function pendingCall() {
  let resolve: (value: HouseholdCaption) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  vi.mocked(fetchHouseholdCaption).mockReturnValue(
    new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    }),
  );
  return {
    resolve: (value: HouseholdCaption) => {
      resolve(value);
    },
    reject: (error: unknown) => {
      reject(error);
    },
  };
}

beforeEach(() => {
  viewCache.restored = false;
  vi.mocked(fetchHouseholdCaption).mockImplementation((v) => Promise.resolve(captionOf(v.inCurrentHousehold)));
});
afterEach(() => {
  vi.clearAllMocks();
});

describe('useHouseholdCaption', () => {
  it('starts with the skeleton caption, or an empty caption on a restored view', () => {
    expect(renderFlows().result.current.caption).toBe(SKELETON_CAPTION);
    expect(renderFlows().result.current.isLoading).toBe(false);
    viewCache.restored = true;
    expect(renderFlows().result.current.caption).toBe('');
  });

  it('opens the sheet, then fetches the caption with the block variables', async () => {
    const call = pendingCall();
    const { result } = renderFlows();
    act(() => {
      result.current.onSheetInitialized('b4-b3-BottomSheet_Info');
    });
    act(() => {
      result.current.onClickedInfo();
    });
    expect(bottomSheetOpen).toHaveBeenCalledWith('b4-b3-BottomSheet_Info');
    expect(fetchHouseholdCaption).toHaveBeenCalledWith({
      inCurrentHousehold: marlowe,
      inIsShow: true,
      inMainContainerClass: 'photobook-carousel',
      infoSheetId: 'b4-b3-BottomSheet_Info',
      lastFetched: EMPTY,
      isLoading: true,
    });
    expect(result.current.isLoading).toBe(true);
    call.resolve(captionOf(marlowe));
    await settle();
    expect(result.current.caption).toBe('ADA & TOM MARLOWE (Nelson)');
    expect(result.current.isLoading).toBe(false);
  });

  it('only opens the sheet for the last fetched household, and fetches again for another one', async () => {
    const { result, rerender } = renderFlows();
    act(() => {
      result.current.onClickedInfo();
    });
    await settle();
    act(() => {
      result.current.onClickedInfo();
    });
    expect(bottomSheetOpen).toHaveBeenCalledTimes(2);
    expect(fetchHouseholdCaption).toHaveBeenCalledTimes(1);
    rerender({ inCurrentHousehold: harlow, inIsShow: true, inMainContainerClass: 'photobook-carousel' });
    act(() => {
      result.current.onClickedInfo();
    });
    await settle();
    expect(fetchHouseholdCaption).toHaveBeenCalledTimes(2);
    expect(vi.mocked(fetchHouseholdCaption).mock.calls[1]?.[0]).toEqual(
      expect.objectContaining({ inCurrentHousehold: harlow, lastFetched: marlowe }),
    );
    expect(result.current.caption).toBe('BEN HARLOW (Nelson)');
  });

  it('closes the sheet on OnClose', () => {
    const { result } = renderFlows();
    act(() => {
      result.current.onSheetInitialized('b4-b3-BottomSheet_Info');
    });
    result.current.onCloseSheet();
    expect(bottomSheetClose).toHaveBeenCalledWith('b4-b3-BottomSheet_Info');
  });

  it('sends a failure to the flow handler and keeps the skeleton', async () => {
    const call = pendingCall();
    const { result } = renderFlows();
    act(() => {
      result.current.onClickedInfo();
    });
    const error = new Error('Request failed with status 500');
    call.reject(error);
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error);
    expect(result.current.isLoading).toBe(true);
  });
});

describe('useHouseholdCaption after an unmount (decision W23)', () => {
  it('still sends a failure to the flow handler once', async () => {
    const call = pendingCall();
    const { result, unmount } = renderFlows();
    act(() => {
      result.current.onClickedInfo();
    });
    unmount();
    call.reject(new Error('Request failed with status 500'));
    await settle();
    expect(fetchHouseholdCaption).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
  });

  it('writes no state when the answer comes after the unmount', async () => {
    const call = pendingCall();
    const { result, unmount } = renderFlows();
    act(() => {
      result.current.onClickedInfo();
    });
    const before = result.current;
    unmount();
    call.resolve(captionOf(marlowe));
    await settle();
    expect(result.current).toBe(before);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });
});
