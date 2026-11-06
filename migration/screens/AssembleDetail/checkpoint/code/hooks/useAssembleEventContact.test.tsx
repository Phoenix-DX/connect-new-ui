import { act, renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { IgnorableSystemException } from '@/legacy/os/os-exceptions';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { hasAccessToRegion } from '@/lib/assemble/actions';
import { getCacheableSignedPhotoURL } from '@/lib/legacyShared/actions';
import { assembleEventContactReducer, emptyContact, type AssembleEventContact } from './assembleEventContacts';
import { useAssembleEventContact, type AssembleEventContactEvents } from './useAssembleEventContact';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./assembleEventContacts', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./assembleEventContacts')>();
  return { ...actual, assembleEventContactReducer: vi.fn(actual.assembleEventContactReducer) };
});
vi.mock('@/lib/assemble/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/assemble/actions')>()),
  hasAccessToRegion: vi.fn(),
}));
vi.mock('@/platform/feedback/dialogs/subscription', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/dialogs/subscription')>()),
  showUpgradePopUp: vi.fn(() => Promise.resolve()),
}));
vi.mock('@/lib/legacyShared/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/legacyShared/actions')>()),
  getCacheableSignedPhotoURL: vi.fn(),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* The flows of AssembleEventDetail_Contact with the module actions (HasAccessToRegion, App_Subscription_ShowUpgradePopUp,
   GetCacheableSignedPhotoURL) and the flow handler replaced by spies. The contact is fictional. */
const CONTACT: AssembleEventContact = {
  ...emptyContact(),
  Email: 'martin.herrera@example.org',
  CountryCode: 'AR',
  LocalityId: '252',
  HouseholdId: '88010',
  ContactDetails: {
    ...emptyContact().ContactDetails,
    Id: '880101',
    Name: 'Martín Herrera',
    AvatarURL: { Bucket: 'photos', Path: 'members/880101.jpg', Type: 'Photo', SignedURL: '' },
  },
  MobilePhoneNumber: '+54 291 455 0101',
  LocalityName: 'Bahia Blanca',
  CountryName: 'Argentina',
};
const SIGNED_URL = 'https://example.com/members/880101.jpg';

/** A module action that answers only when the test resolves or rejects it. */
function deferred<T>() {
  const call: { resolve: (value: T) => void; reject: (error: Error) => void; promise: Promise<T> } = {
    resolve: () => undefined,
    reject: () => undefined,
    promise: Promise.resolve() as Promise<T>,
  };
  call.promise = new Promise<T>((resolve, reject) => {
    call.resolve = resolve;
    call.reject = reject;
  });
  return call;
}

const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
let events: AssembleEventContactEvents;
const renderContact = () => renderHook(() => useAssembleEventContact('b2-b4-b18-$b1-0', CONTACT, events), { wrapper });
/** Lets the flows that started finish (their awaits resolve before the next task). */
const settle = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
/** The errors that reached the flow handler, without the ignorable ones (the handler drops them: R1, R3). */
const raisedErrors = () =>
  vi
    .mocked(raiseToFlowHandler)
    .mock.calls.map(([error]) => error)
    .filter((error) => !(error instanceof IgnorableSystemException));
/** The flow scope that the raise of `error` carried (R6: the handler checks its context); `alive` is false after the
    unmount. */
const scopeOf = (error: unknown) =>
  vi.mocked(raiseToFlowHandler).mock.calls.find(([raised]) => raised === error)?.[1] as
    { active: () => boolean; alive: () => boolean } | undefined;

beforeEach(() => {
  events = { onEmailContact: vi.fn(), onNavigateToHousehold: vi.fn() };
  vi.mocked(hasAccessToRegion).mockResolvedValue(true);
  vi.mocked(getCacheableSignedPhotoURL).mockResolvedValue(SIGNED_URL);
});
afterEach(() => {
  vi.clearAllMocks();
});

describe('useAssembleEventContact', () => {
  it('Handler_OnClickHostContact: with access NavigateTo_Household(HouseholdId); without access the upgrade popup', async () => {
    vi.mocked(hasAccessToRegion).mockResolvedValueOnce(true).mockResolvedValueOnce(false);
    const { result } = renderContact();
    act(() => {
      result.current.onClickHostContact();
    });
    await settle();
    expect(hasAccessToRegion).toHaveBeenCalledWith('AR', '252');
    expect(events.onNavigateToHousehold).toHaveBeenCalledWith('88010');
    act(() => {
      result.current.onClickHostContact();
    });
    await settle();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(events.onNavigateToHousehold).toHaveBeenCalledTimes(1);
  });

  it('Handler_ContactByEmail: the popup closes, GetCacheableSignedPhotoURL, then NavigateTo_EmailContact', async () => {
    const { result } = renderContact();
    act(() => {
      result.current.onContactByEmail();
    });
    await settle();
    expect(events.onEmailContact).toHaveBeenCalledWith({
      avatarURL: SIGNED_URL,
      contactName: 'Martín Herrera',
      contactSurname: '',
      contactLocality: 'Bahia Blanca',
      contactCountry: 'Argentina',
      emailTo: 'martin.herrera@example.org',
      memberId: '880101',
    });
  });

  it('Handler_ContactByMessage: the popup shows with the signed avatar', async () => {
    const { result } = renderContact();
    act(() => {
      result.current.onEmailClicked();
    });
    expect(result.current.contactPopupData.IsLoading).toBe(true);
    await settle();
    expect(result.current.contactPopupData).toMatchObject({ ShowPopup: true, ImageURL: SIGNED_URL, IsLoading: false });
  });

  it('a failed module action goes to the flow handler with the flow scope', async () => {
    const error = new Error('Request failed with status 500');
    vi.mocked(hasAccessToRegion).mockRejectedValueOnce(error);
    const { result } = renderContact();
    act(() => {
      result.current.onClickHostContact();
    });
    await settle();
    expect(raisedErrors()).toEqual([error]);
    expect(scopeOf(error)?.alive()).toBe(true);
  });
});

describe('useAssembleEventContact after an unmount (flow scope, item 8)', () => {
  it('R2 + R3: unmount while HasAccessToRegion is pending: NavigateTo_Household is not triggered', async () => {
    const access = deferred<boolean>();
    vi.mocked(hasAccessToRegion).mockReturnValueOnce(access.promise);
    const { result, unmount } = renderContact();
    act(() => {
      result.current.onClickHostContact();
    });
    unmount();
    access.resolve(true);
    await settle();
    expect(events.onNavigateToHousehold).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R2: unmount while HasAccessToRegion is pending, no access: the upgrade popup (a module action) still shows', async () => {
    const access = deferred<boolean>();
    vi.mocked(hasAccessToRegion).mockReturnValueOnce(access.promise);
    const { result, unmount } = renderContact();
    act(() => {
      result.current.onClickHostContact();
    });
    unmount();
    access.resolve(false);
    await settle();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(events.onNavigateToHousehold).not.toHaveBeenCalled();
  });

  it('R2 + R3: unmount while GetCacheableSignedPhotoURL is pending: NavigateTo_EmailContact is not triggered', async () => {
    const photo = deferred<string>();
    vi.mocked(getCacheableSignedPhotoURL).mockReturnValueOnce(photo.promise);
    const { result, unmount } = renderContact();
    act(() => {
      result.current.onContactByEmail();
    });
    unmount();
    photo.resolve(SIGNED_URL);
    await settle();
    expect(events.onEmailContact).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R2: unmount while the avatar of the message popup is signed: no state write, no raise', async () => {
    const photo = deferred<string>();
    vi.mocked(getCacheableSignedPhotoURL).mockReturnValueOnce(photo.promise);
    const { result, unmount } = renderContact();
    act(() => {
      result.current.onEmailClicked();
    });
    unmount();
    vi.mocked(assembleEventContactReducer).mockClear();
    photo.resolve(SIGNED_URL);
    await settle();
    expect(assembleEventContactReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R2: a GetCacheableSignedPhotoURL failure after the unmount reaches the flow handler with the flow scope', async () => {
    const photo = deferred<string>();
    vi.mocked(getCacheableSignedPhotoURL).mockReturnValueOnce(photo.promise);
    const { result, unmount } = renderContact();
    act(() => {
      result.current.onContactByEmail();
    });
    unmount();
    const error = new Error('Request failed with status 500');
    photo.reject(error);
    await settle();
    expect(raisedErrors()).toEqual([error]);
    expect(scopeOf(error)?.alive()).toBe(false);
    expect(events.onEmailContact).not.toHaveBeenCalled();
  });
});
