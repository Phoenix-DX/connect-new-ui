import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { NotRegisteredException, UserException } from '@/legacy/os/os-exceptions';
import type { SearchResult } from '@/lib/ubtConnectUtils/structures';
import { contractHandler } from '@/mocks/contract';
import { resetFeedbackDebounce } from '@/platform/feedback/feedbackMessageAutoClose';
import { PLATFORM_MESSAGE_TYPE, getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { server } from '@/test/setup';
import { freshPage } from '@/test/testSupport';
import { useShareSheet } from './useShareSheet';

/* The flows of ShareSheet (UBTConnect_Utils.CW_Share.ShareSheet.mvc.js) that show a message or raise an error. The
   flow handler is a spy. */
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

function wrapper({ children }: { children: ReactNode }) {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return (
    <QueryClientProvider client={client}>
      <MemoryRouter>{children}</MemoryRouter>
    </QueryClientProvider>
  );
}

const renderSheet = () =>
  renderHook(
    () =>
      useShareSheet({
        inIsOpen: false,
        inShareObjectTypeId: 'Household',
        inShareableObjectId: '77',
        inUpdateType: '',
        inUpdateDate: '1900-01-01',
      }),
    { wrapper },
  );

const member = (n: number) => ({ Id: `m${String(n)}`, HouseholderId: `h${String(n)}` }) as SearchResult;

beforeEach(() => {
  freshPage();
  setSignedInUser(MOCK_USER_ID);
  resetFeedbackMessages();
  resetFeedbackDebounce();
  vi.mocked(raiseToFlowHandler).mockClear();
});

describe('Handler_SearchResultItemOnSelect: the 50-recipient limit (:2918-2928)', () => {
  it('the 51st member shows FeedbackMessage_AutoClose(Error) and is not added', () => {
    const { result } = renderSheet();
    for (let n = 1; n <= 50; n++) {
      act(() => {
        result.current.onSelect(member(n), true);
      });
    }
    expect(result.current.selectedMembers).toHaveLength(50);
    expect(getFeedbackMessage()).toBeNull();
    act(() => {
      result.current.onSelect(member(51), true);
    });
    expect(result.current.selectedMembers).toHaveLength(50);
    expect(getFeedbackMessage()).toEqual(
      expect.objectContaining({
        message: 'You can select up to 50 recipients only.',
        type: PLATFORM_MESSAGE_TYPE.error,
        encodedHtml: true,
        extraClasses: 'feedback-message-autoclose',
      }),
    );
  });
});

describe('Action_SubmitShare: the handlers (:3120-3152)', () => {
  it('NotRegistered goes to the flow handler, with no message of the block', async () => {
    server.use(
      contractHandler('UBTConnect_Utils', 'ActionCS_ShareObject', () => {
        throw new NotRegisteredException('Not signed in');
      }),
    );
    const { result } = renderSheet();
    act(() => {
      result.current.onClickSend();
    });
    await waitFor(() => {
      expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    });
    expect(vi.mocked(raiseToFlowHandler).mock.calls[0]?.[0]).toBeInstanceOf(NotRegisteredException);
    expect(getFeedbackMessage()).toBeNull();
  });

  it('any other exception shows "Share failed. Please try again." and does not go to the flow handler', async () => {
    server.use(
      contractHandler('UBTConnect_Utils', 'ActionCS_ShareObject', () => {
        throw new UserException('The share is not allowed.');
      }),
    );
    const { result } = renderSheet();
    act(() => {
      result.current.onClickSend();
    });
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe('Share failed. Please try again.');
    });
    expect(getFeedbackMessage()?.type).toBe(PLATFORM_MESSAGE_TYPE.error);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });
});
