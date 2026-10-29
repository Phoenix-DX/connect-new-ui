import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { http, HttpResponse } from 'msw';
import { NotRegisteredException, UserException, isInstanceOf } from '@/legacy/os/os-exceptions';
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

const renderSheet = (inShareObjectTypeId = 'Household') =>
  renderHook(
    () =>
      useShareSheet({
        inIsOpen: false,
        inShareObjectTypeId,
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

describe('Action_SubmitShare: the handlers (survey ShareSheet.mvc.js:3138-3218, TST publish of 2026-10-29)', () => {
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

  it('the user exception CommunicationError goes to the flow handler as CommunicationError (:3166-3179)', async () => {
    server.use(
      contractHandler('UBTConnect_Utils', 'ActionCS_ShareObject', () => {
        throw new UserException('The connection was lost.', 'UBTConnect_Utils.CommunicationError');
      }),
    );
    const { result } = renderSheet();
    act(() => {
      result.current.onClickSend();
    });
    await waitFor(() => {
      expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    });
    const raised = vi.mocked(raiseToFlowHandler).mock.calls[0]?.[0];
    expect(isInstanceOf(raised, UserException, 'UBTConnect_Utils.CommunicationError')).toBe(true);
    expect((raised as Error).message).toBe('The connection was lost.');
    expect(getFeedbackMessage()).toBeNull();
    expect(result.current.isSubmitting).toBe(false);
  });

  it('a CommunicationException goes to the flow handler as the user exception CommunicationError (:3181-3194)', async () => {
    server.use(
      http.post('/api/UBTConnect_Utils/ActionCS_ShareObject', () =>
        HttpResponse.json({ error: 'mock error' }, { status: 500 }),
      ),
    );
    const { result } = renderSheet();
    act(() => {
      result.current.onClickSend();
    });
    await waitFor(() => {
      expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    });
    const raised = vi.mocked(raiseToFlowHandler).mock.calls[0]?.[0];
    expect(isInstanceOf(raised, UserException, 'UBTConnect_Utils.CommunicationError')).toBe(true);
    expect((raised as Error).message).toBe('Request failed with status 500');
    expect(getFeedbackMessage()).toBeNull();
    expect(result.current.isSubmitting).toBe(false);
  });
});

describe('Action_SubmitShare: IsSubmitting and the message (:3120-3150, Send IsDisabled :1759)', () => {
  it('IsSubmitting is True while CS_ShareObject runs, then False', async () => {
    let finish: () => void = () => undefined;
    const answered = new Promise<void>((resolve) => {
      finish = resolve;
    });
    server.use(
      contractHandler('UBTConnect_Utils', 'ActionCS_ShareObject', async () => {
        await answered;
        throw new UserException('The share is not allowed.');
      }),
    );
    const { result } = renderSheet();
    expect(result.current.isSubmitting).toBe(false);
    act(() => {
      result.current.onClickSend();
    });
    await waitFor(() => {
      expect(result.current.isSubmitting).toBe(true);
    });
    finish();
    await waitFor(() => {
      expect(result.current.isSubmitting).toBe(false);
    });
    expect(getFeedbackMessage()?.message).toBe('Share failed. Please try again.');
  });

  it('a household share says "Household profile has been shared."; other types "<Type> has been shared."', async () => {
    const household = renderSheet('Household');
    act(() => {
      household.result.current.onClickSend();
    });
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe('Household profile has been shared.');
    });
    resetFeedbackMessages();
    const locality = renderSheet('Locality');
    act(() => {
      locality.result.current.onClickSend();
    });
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe('Locality has been shared.');
    });
    expect(getFeedbackMessage()?.type).toBe(PLATFORM_MESSAGE_TYPE.info);
  });
});
