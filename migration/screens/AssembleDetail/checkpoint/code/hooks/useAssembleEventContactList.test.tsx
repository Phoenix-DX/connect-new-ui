import { act, renderHook, waitFor } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter, useLocation } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { MemberContactWithTimezone } from '@/api/message';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { resetNavigation } from '@/platform/navigation/testRouter';
import { enterView, saveView } from '@/platform/navigation/viewCache';
import { getCacheableMemberContactList } from '@/lib/legacyShared/actions';
import { emptyContact, type AssembleEventContact } from './assembleEventContacts';
import { useAssembleEventContactList } from './useAssembleEventContactList';

vi.mock('@/lib/legacyShared/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/legacyShared/actions')>()),
  getCacheableMemberContactList: vi.fn(),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* The flow of AssembleEventDetail_ContactList with GetCacheableMemberContactList and the flow handler replaced by
   spies, on the real view cache. The contact is fictional. */
const CONTACT: AssembleEventContact = {
  ...emptyContact(),
  Email: 'martin.herrera@example.org',
  CountryCode: 'AR',
  LocalityId: '252',
  HouseholdId: '88010',
  ContactDetails: { ...emptyContact().ContactDetails, Id: '880101', Name: 'Martín Herrera', Location: 'San Nicolás' },
  MobilePhoneNumber: '+54 291 455 0101',
  LocalityName: 'Bahia Blanca',
  CountryName: 'Argentina',
};
const IDS = ['880101'];

const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const strictWrapper = ({ children }: { children: ReactNode }) => (
  <StrictMode>
    <MemoryRouter>{children}</MemoryRouter>
  </StrictMode>
);
/** Runs the pending effects and the promises that they start (no timer). */
const flushEffects = () =>
  act(async () => {
    await Promise.resolve();
  });

/** The history entry of the memory router: the view cache keeps its saved view under this key. */
let entryKey = '';
function renderList(strict = false) {
  return renderHook(
    () => {
      entryKey = useLocation().key;
      return useAssembleEventContactList('b2-b4-$b18', IDS);
    },
    { wrapper: strict ? strictWrapper : wrapper },
  );
}
/** Waits until the contacts of GetCacheableMemberContactList are shown. */
async function waitForContacts(result: { current: ReturnType<typeof useAssembleEventContactList> }) {
  await waitFor(() => {
    expect(result.current).toEqual({ contacts: [CONTACT], isDataFetched: true });
  });
}
/** The user leaves the entry (the view cache saves the mounted view), then comes back to it by a back navigation. */
function leaveAndComeBack(view: { unmount: () => void }) {
  saveView(entryKey, undefined);
  view.unmount();
  enterView(entryKey, true, undefined);
}

beforeEach(() => {
  resetNavigation();
  // The fields of the record that toAssembleEventContact reads (it maps them one to one).
  vi.mocked(getCacheableMemberContactList).mockResolvedValue([CONTACT as unknown as MemberContactWithTimezone]);
});
afterEach(() => {
  vi.clearAllMocks();
  resetNavigation();
});

describe('useAssembleEventContactList', () => {
  it('a new visit: one loading row per id, then GetCacheableMemberContactList and IsDataFetched', async () => {
    const { result } = renderList();
    expect(result.current).toEqual({ contacts: [emptyContact()], isDataFetched: false });
    await waitForContacts(result);
    expect(getCacheableMemberContactList).toHaveBeenCalledWith(IDS);
  });

  it('StrictMode: OnReady runs once and the contacts come', async () => {
    const { result } = renderList(true);
    await waitForContacts(result);
    expect(getCacheableMemberContactList).toHaveBeenCalledTimes(1);
  });

  it('a back navigation to the restored view keeps the saved contacts and makes no call', async () => {
    const first = renderList();
    await waitForContacts(first.result);
    leaveAndComeBack(first);
    const { result } = renderList();
    expect(result.current).toEqual({ contacts: [CONTACT], isDataFetched: true });
    await flushEffects();
    expect(getCacheableMemberContactList).toHaveBeenCalledTimes(1);
  });

  it('a restored view without a saved state for the block calls as a new visit', async () => {
    renderList().unmount();
    // The entry is saved while the block is not mounted: its saved view has no state of the block.
    saveView(entryKey, undefined);
    enterView(entryKey, true, undefined);
    const { result } = renderList();
    expect(result.current).toEqual({ contacts: [emptyContact()], isDataFetched: false });
    await waitForContacts(result);
    expect(getCacheableMemberContactList).toHaveBeenCalledTimes(2);
  });

  it('a restored view saved before GetCacheableMemberContactList answered calls again', async () => {
    let answer: (value: MemberContactWithTimezone[]) => void = () => undefined;
    vi.mocked(getCacheableMemberContactList).mockReturnValueOnce(
      new Promise((resolve) => {
        answer = resolve;
      }),
    );
    const first = renderList();
    await waitFor(() => {
      expect(getCacheableMemberContactList).toHaveBeenCalledTimes(1);
    });
    leaveAndComeBack(first);
    // The answer comes after the unmount (flow scope, item 8: `dispatch` is a no-op after the unmount); the saved view
    // has the loading rows.
    answer([CONTACT as unknown as MemberContactWithTimezone]);
    await flushEffects();
    const { result } = renderList();
    expect(result.current.isDataFetched).toBe(false);
    await waitForContacts(result);
    expect(getCacheableMemberContactList).toHaveBeenCalledTimes(2);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });
});

describe('useAssembleEventContactList after an unmount (flow scope, item 8)', () => {
  it('a GetCacheableMemberContactList failure after the unmount (a module action, not R1) reaches the flow handler with the scope', async () => {
    let fail: (error: Error) => void = () => undefined;
    vi.mocked(getCacheableMemberContactList).mockReturnValueOnce(
      new Promise((_resolve, reject) => {
        fail = reject;
      }),
    );
    const view = renderList();
    await waitFor(() => {
      expect(getCacheableMemberContactList).toHaveBeenCalledTimes(1);
    });
    view.unmount();
    const error = new Error('Request failed with status 500');
    fail(error);
    await flushEffects();
    // R6: the handler gets the scope; a system exception of a left block opens no error page (platform rule).
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    const [raised, scope] = vi.mocked(raiseToFlowHandler).mock.calls[0] ?? [];
    expect(raised).toBe(error);
    expect((scope as { alive: () => boolean } | undefined)?.alive()).toBe(false);
  });
});
