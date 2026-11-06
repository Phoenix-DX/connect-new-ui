import { act, renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import {
  CommunicationException,
  NotRegisteredException,
  SystemException,
  UserException,
} from '@/legacy/os/os-exceptions';
import { Connect_Entity } from '@/lib/ubtConnect/staticEntities';
import { freshPage } from '@/test/testSupport';
import { fetchContactDetails, fetchNotes } from './api';
import { CONTACT_POPUP_DATA_DEFAULT, type ContactDetails } from './entityDetailsActionsState';
import type { EntityDetailsActionsContainerProps } from './types';
import { useEntityDetailsActions } from './useEntityDetailsActions';

vi.mock('./api', async (importOriginal) => ({
  ...(await importOriginal<typeof import('./api')>()),
  fetchContactDetails: vi.fn(),
  fetchNotes: vi.fn(),
}));
vi.mock('@/legacy/os/exceptions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/legacy/os/exceptions')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* Action_UpdateContactDetails on OnParametersChanged (Directory_EntityDetailsActions.mvc.js:1157-1171) and the handlers
   of Action_AsyncRefresh_ContactDetails (:1196-1262). A member (call and email: isFetchContacts), fictional data. */
const CONTACT: ContactDetails = {
  EntityName: 'Odile Fenwick',
  Phone: '',
  MobilePhone: '+54 291 555 0101',
  HomePhone: '',
  WorkPhone: '',
  Email: '',
  CountryName: 'Argentina',
  ContactPopupData: { ...CONTACT_POPUP_DATA_DEFAULT, Name: 'Odile Fenwick' },
} as ContactDetails;
const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const member: EntityDetailsActionsContainerProps = { entityType: Connect_Entity.Member, entityId: '7' };
const renderMember = (props: EntityDetailsActionsContainerProps = member) =>
  renderHook((p: EntityDetailsActionsContainerProps) => useEntityDetailsActions(p), { wrapper, initialProps: props });
const disabledActions = (o: ReturnType<typeof useEntityDetailsActions>['localEnableOptions']) =>
  [o.EnableBookmark, o.EnableNotes, o.EnableGift, o.EnableShare, o.EnableCall, o.EnableEmail].every((e) => e === false);

describe('useEntityDetailsActions', () => {
  beforeEach(() => {
    freshPage();
  });
  afterEach(() => {
    vi.mocked(fetchContactDetails).mockReset();
    vi.mocked(fetchNotes).mockReset();
    vi.mocked(raiseToFlowHandler).mockReset();
    vi.useRealTimers();
  });

  it('Handler_AddNotesOnClick on an open sheet sets PendingOpen; the close reopens it once after 50 ms (live mvc.js:1114-1166, :1395-1435)', async () => {
    vi.mocked(fetchContactDetails).mockResolvedValue(CONTACT);
    vi.mocked(fetchNotes).mockResolvedValue({});
    const { result, unmount } = renderMember();
    await act(() => result.current.handlerAddNotes());
    expect(result.current.showNotesSheet).toBe(true);
    await act(() => result.current.handlerAddNotes());
    expect(result.current.showNotesSheet).toBe(true);
    vi.useFakeTimers();
    act(() => {
      result.current.handlerOnNotesSheetClosed();
    });
    expect(result.current.showNotesSheet).toBe(false);
    act(() => {
      vi.advanceTimersByTime(49);
    });
    expect(result.current.showNotesSheet).toBe(false);
    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(result.current.showNotesSheet).toBe(true);
    // PendingOpen was cleared: the next close keeps the sheet closed.
    act(() => {
      result.current.handlerOnNotesSheetClosed();
      vi.advanceTimersByTime(100);
    });
    expect(result.current.showNotesSheet).toBe(false);
    unmount();
  });

  it('the deferred reopen is cancelled when the block unmounts', async () => {
    vi.mocked(fetchContactDetails).mockResolvedValue(CONTACT);
    vi.mocked(fetchNotes).mockResolvedValue({});
    const { result, unmount } = renderMember();
    await act(() => result.current.handlerAddNotes());
    await act(() => result.current.handlerAddNotes());
    vi.useFakeTimers();
    act(() => {
      result.current.handlerOnNotesSheetClosed();
    });
    expect(vi.getTimerCount()).toBe(1);
    unmount();
    expect(vi.getTimerCount()).toBe(0);
  });

  it('OnParametersChanged fetches the contact details on every input change, compared by value', async () => {
    vi.mocked(fetchContactDetails).mockResolvedValue(CONTACT);
    const view = renderMember({ ...member, contactPopUpOverrideOptions: { Name: '' } });
    await waitFor(() => {
      expect(fetchContactDetails).toHaveBeenCalledTimes(1);
    });
    // The same values in new objects: no change.
    view.rerender({ ...member, contactPopUpOverrideOptions: { Name: '' } });
    // ContactPopUp_OverrideOptions, then EnableOptions, then IsEnabled change: one call each.
    view.rerender({ ...member, contactPopUpOverrideOptions: { Name: 'Odile' } });
    view.rerender({ ...member, contactPopUpOverrideOptions: { Name: 'Odile' }, enableOptions: { EnableCall: false } });
    view.rerender({
      ...member,
      contactPopUpOverrideOptions: { Name: 'Odile' },
      enableOptions: { EnableCall: false },
      isEnabled: false,
    });
    await waitFor(() => {
      expect(fetchContactDetails).toHaveBeenCalledTimes(4);
    });
  });

  it.each([
    ['NotRegistered', new NotRegisteredException('Not registered'), false],
    ['a system exception', new SystemException('Failed'), false],
    ['CommunicationException', new CommunicationException('Offline'), true],
    ['a user exception (AllExceptions)', new UserException('Failed'), true],
  ])('a failed fetch with %s: HandleFetchError %s, then the error is raised', async (_name, error, handles) => {
    vi.mocked(fetchContactDetails).mockRejectedValue(error);
    const { result } = renderMember();
    await waitFor(() => {
      expect(raiseToFlowHandler).toHaveBeenCalledWith(error);
    });
    await act(async () => {
      await Promise.resolve();
    });
    expect(disabledActions(result.current.localEnableOptions)).toBe(handles);
  });
});
