import { act, render, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  fetchMessageInstance,
  fetchMessageTemplateParameters,
  type MessageDetail,
  type MessageInstanceResult,
} from '@/api/message';
import { markNotificationOpened } from '@/api/notification';
import type { MessageDetailInputs } from '@/pages/MessageDetail/inputs';
import { MessageInfoType, MessageSenderTarget, MessageType, ParameterName } from '@/pages/MessageDetail/staticEntities';
import { feedbackMessageAutoClose, showFeedbackMessage } from '@/platform/feedback';
import { replaceOnUpcomingNavigation } from '@/platform/navigation';
import { MOCK_USER_ID, mockUserInformation } from '@/platform/session/mockUser';
import { getClientVar, setClientVar, setSignedInUser } from '@/platform/session/session';
import { getUserInformation } from '@/platform/session/userInfo';
import { cache_SignedImageURL_Get } from '@/lib/ubtConnectUtils/actions';
import { messageDetailReducer } from './messageDetailState';
import { useMessageDetail, type MessageDetailFlows } from './useMessageDetail';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./messageDetailState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./messageDetailState')>();
  return { ...actual, messageDetailReducer: vi.fn(actual.messageDetailReducer) };
});

vi.mock('@/api/message', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/message')>()),
  fetchMessageInstance: vi.fn(),
  fetchMessageTemplateParameters: vi.fn(() => Promise.resolve([])),
}));
vi.mock('@/api/notification', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/notification')>()),
  markNotificationOpened: vi.fn(() => Promise.resolve(false)),
}));
vi.mock('@/lib/ubtConnectUtils/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/ubtConnectUtils/actions')>()),
  cache_SignedImageURL_Get: vi.fn(() => Promise.resolve('/img/member-900114.png')),
}));
vi.mock('@/platform/session/userInfo', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/session/userInfo')>()),
  getUserInformation: vi.fn(),
}));
vi.mock('@/platform/feedback', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback')>()),
  feedbackMessageAutoClose: vi.fn(),
  showFeedbackMessage: vi.fn(),
}));
vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  replaceOnUpcomingNavigation: vi.fn(),
}));
/** A back navigation that the view cache restores (wasCurrentViewRestoredFromCache), read by useFlowState. */
const viewCache = vi.hoisted(() => ({ restored: false }));
vi.mock('@/platform/navigation/hooks', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation/hooks')>()),
  useWasRestoredFromCache: () => viewCache.restored,
}));

/* The flows of ScreenBlock_MessageDetail, with the calls, the feedback and the navigation replaced by spies.
   Fictional messages. */
const inputs: MessageDetailInputs = {
  MessageInstanceId: '81014',
  isOriginPushNotification: false,
  MessageTemplateId: '0',
  HardwareId: '',
};

const message = (patch: Partial<MessageDetail> = {}): MessageDetail => ({
  messageInstanceId: '81014',
  messageInstanceUserId: 0,
  isRead: true,
  dateTimeCreated: '2026-10-09T02:50:00',
  title: 'Choir practice moves to Thursday',
  summary: '',
  isAdaptiveCard: false,
  messageTemplateTypeId: MessageType.Public,
  messageTemplatePriorityId: 1,
  messageInfoTypeId: MessageInfoType.GeneralInformation,
  sentAs: MessageSenderTarget.Directory,
  senderTargetId: MessageSenderTarget.Directory,
  senderTargetName: 'Directory',
  profileIconURL: '/UBT_CW/img/UBT_CW.directory_entity_logo.png',
  messageContent: '<p>Choir practice moves to Thursday</p>',
  adaptiveCardContent: '',
  userName: '',
  createdByMemberId: '0',
  ...patch,
});

function answer(messagePatch: Partial<MessageDetail> = {}, patch: Partial<MessageInstanceResult> = {}) {
  vi.mocked(fetchMessageInstance).mockResolvedValue({
    message: message(messagePatch),
    isRetracted: false,
    isCleared: false,
    ...patch,
  });
}

const events = { onNavigateToMessageList: vi.fn(), onNavigateToLogin: vi.fn() };
const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
/** The hook as the dev server renders it: StrictMode runs the mount effects twice. Returns the newest result. */
function renderStrict(screenInputs: MessageDetailInputs = inputs) {
  const latestResult: { current: MessageDetailFlows | null } = { current: null };
  function Probe() {
    latestResult.current = useMessageDetail(screenInputs, events);
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
const renderFlows = (screenInputs: MessageDetailInputs = inputs) =>
  renderHook(() => useMessageDetail(screenInputs, events), { wrapper });
/** Lets the flows that started finish (their awaits resolve before the next task). */
const settle = () => act(() => new Promise((resolve) => setTimeout(resolve, 0)));
const lastAutoClose = () => vi.mocked(feedbackMessageAutoClose).mock.lastCall?.[0];

beforeEach(() => {
  vi.clearAllMocks();
  viewCache.restored = false;
  setSignedInUser(MOCK_USER_ID);
  const user = mockUserInformation();
  vi.mocked(getUserInformation).mockResolvedValue({
    ...user,
    Directory_UserCurrent: { ...user.Directory_UserCurrent, FirstName: 'Ingrid' },
  });
});
afterEach(() => {
  setSignedInUser(null);
  setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', 0);
  setClientVar('Connect2_LegacyShared.UnreadPublicMessagesNumber', 0);
  setClientVar('Connect2_LegacyShared.UnreadWhatsNewsNumber', 0);
});

describe('useMessageDetail', () => {
  it('loads a read message once, with the block variables, and ends the loading', async () => {
    answer();
    const { result } = renderFlows();
    expect(result.current.isLoading).toBe(true);
    expect(result.current.message).toBeNull();
    await settle();
    expect(fetchMessageInstance).toHaveBeenCalledTimes(1);
    expect(fetchMessageInstance).toHaveBeenCalledWith({
      IsEntryScreen: false,
      IsLoading: true,
      ShowAssembleAction: false,
      ...inputs,
    });
    expect(result.current.isLoading).toBe(false);
    expect(result.current.message?.title).toBe('Choir practice moves to Thursday');
    expect(markNotificationOpened).not.toHaveBeenCalled();
    expect(cache_SignedImageURL_Get).not.toHaveBeenCalled();
    expect(fetchMessageTemplateParameters).not.toHaveBeenCalled();
  });

  it('shows "Invalid message detail id." and calls nothing when both ids are null', async () => {
    renderFlows({ ...inputs, MessageInstanceId: '0', MessageTemplateId: '0' });
    await settle();
    expect(showFeedbackMessage).toHaveBeenCalledWith('Invalid message detail id.', 3);
    expect(fetchMessageInstance).not.toHaveBeenCalled();
  });

  it('marks an unread message opened and lowers the unread messages, or the unread news for a WhatsNew', async () => {
    setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', 4);
    setClientVar('Connect2_LegacyShared.UnreadWhatsNewsNumber', 2);
    answer({ isRead: false });
    renderFlows();
    await settle();
    expect(markNotificationOpened).toHaveBeenCalledWith('81014');
    expect(getClientVar('Connect2_LegacyShared.UnreadNotificationsNumber')).toBe(3);
    expect(getClientVar('Connect2_LegacyShared.UnreadPublicMessagesNumber')).toBe(3);
    expect(getClientVar('Connect2_LegacyShared.UnreadWhatsNewsNumber')).toBe(2);

    answer({ isRead: false, messageInfoTypeId: MessageInfoType.WhatsNew });
    renderFlows();
    await settle();
    expect(getClientVar('Connect2_LegacyShared.UnreadWhatsNewsNumber')).toBe(1);
    expect(getClientVar('Connect2_LegacyShared.UnreadNotificationsNumber')).toBe(3);
  });

  it('leaves to the message list when Wrapper_NotificationOpened answers IsRetracted', async () => {
    vi.mocked(markNotificationOpened).mockResolvedValueOnce(true);
    answer({ isRead: false });
    const { result } = renderFlows();
    await settle();
    expect(lastAutoClose()?.message).toBe('Sorry, this message is not available anymore.');
    expect(lastAutoClose()?.messageType).toBe('error');
    expect(replaceOnUpcomingNavigation).toHaveBeenCalledTimes(1);
    expect(events.onNavigateToMessageList).toHaveBeenCalledTimes(1);
    expect(result.current.isLoading).toBe(true);
  });

  it.each([
    ['retracted', {}, { isRetracted: true }, 'Sorry, this message is not available anymore.'],
    ['cleared', {}, { isCleared: true }, 'Sorry, this message is not available anymore.'],
    ['not found', { messageInstanceId: null }, {}, "You don't have access to that message"],
    [
      "another user's private",
      { messageTemplateTypeId: MessageType.Private, messageInstanceUserId: 12 },
      {},
      "You don't have access to that message",
    ],
  ])('leaves a %s message to the message list with its message', async (_name, messagePatch, patch, text) => {
    answer(messagePatch, patch);
    const { result } = renderFlows();
    await settle();
    expect(lastAutoClose()?.message).toBe(text);
    expect(replaceOnUpcomingNavigation).toHaveBeenCalledTimes(1);
    expect(events.onNavigateToMessageList).toHaveBeenCalledTimes(1);
    expect(events.onNavigateToLogin).not.toHaveBeenCalled();
    expect(markNotificationOpened).not.toHaveBeenCalled();
    expect(result.current.isLoading).toBe(true);
  });

  it('opens the own private message of the signed-in user', async () => {
    answer({ messageTemplateTypeId: MessageType.Private, messageInstanceUserId: Number(MOCK_USER_ID) });
    const { result } = renderFlows();
    await settle();
    expect(result.current.isLoading).toBe(false);
    expect(events.onNavigateToMessageList).not.toHaveBeenCalled();
  });

  it.each([
    ['not found', { messageInstanceId: null }],
    ['private', { messageTemplateTypeId: MessageType.Private }],
  ])('goes to Login for a %s message when signed out', async (_name, messagePatch) => {
    setSignedInUser(null);
    answer(messagePatch);
    renderFlows();
    await settle();
    expect(events.onNavigateToLogin).toHaveBeenCalledTimes(1);
    expect(events.onNavigateToMessageList).not.toHaveBeenCalled();
    expect(feedbackMessageAutoClose).not.toHaveBeenCalled();
  });

  it('shows the sender photo of a message sent as a user', async () => {
    answer({ sentAs: null, profileIconURL: '', userName: 'Mara Lindqvist', createdByMemberId: '900114' });
    const { result } = renderFlows();
    await settle();
    expect(cache_SignedImageURL_Get).toHaveBeenCalledWith('900114', 'Member', 'Small');
    expect(result.current.message?.profileIconURL).toBe('/img/member-900114.png');
  });

  it('refreshes the template parameters of an Orbit message and greets the user', async () => {
    answer({ senderTargetId: MessageSenderTarget.Orbit, sentAs: MessageSenderTarget.Orbit, messageContent: 'Camp' });
    const { result } = renderFlows();
    await settle();
    expect(fetchMessageTemplateParameters).toHaveBeenCalledWith(
      expect.objectContaining({ MessageInstanceId: '81014' }),
    );
    expect(result.current.message?.messageContent).toBe('Hello Ingrid, <br> <br>Camp');
  });

  it('refreshes the template parameters of an Assemble or a Sharing message, without a greeting', async () => {
    vi.mocked(fetchMessageTemplateParameters).mockResolvedValue([
      { parameterNameId: ParameterName.AssembleEventParentId, parameterValue: '41' },
      { parameterNameId: ParameterName.AssembleEventInstanceId, parameterValue: '42' },
    ]);
    answer({ senderTargetId: MessageSenderTarget.Assemble, sentAs: MessageSenderTarget.Assemble });
    const assemble = renderFlows();
    await settle();
    expect(fetchMessageTemplateParameters).toHaveBeenCalledTimes(1);
    expect(getUserInformation).not.toHaveBeenCalled();
    expect(assemble.result.current.message?.messageContent).toBe('<p>Choir practice moves to Thursday</p>');

    answer({ messageInfoTypeId: MessageInfoType.Sharing });
    renderFlows();
    await settle();
    expect(fetchMessageTemplateParameters).toHaveBeenCalledTimes(2);
  });

  it('refreshes GetMessageInstance again on a restored view, but not the template parameters', async () => {
    viewCache.restored = true;
    answer({ senderTargetId: MessageSenderTarget.Orbit, sentAs: MessageSenderTarget.Orbit, messageContent: 'Camp' });
    const { result } = renderFlows();
    await settle();
    expect(fetchMessageInstance).toHaveBeenCalledTimes(1);
    expect(fetchMessageTemplateParameters).not.toHaveBeenCalled();
    expect(result.current.message?.messageContent).toBe('Hello Ingrid, <br> <br>Camp');
  });
});

describe('useMessageDetail after an unmount and in StrictMode (decision W23)', () => {
  /** GetMessageInstance answers only when the test resolves it. */
  function pendingMessageInstance() {
    let resolve: (value: MessageInstanceResult) => void = () => undefined;
    vi.mocked(fetchMessageInstance).mockReturnValue(
      new Promise((r) => {
        resolve = r;
      }),
    );
    return (patch: Partial<MessageInstanceResult>, messagePatch: Partial<MessageDetail> = {}) => {
      resolve({ message: message(messagePatch), isRetracted: false, isCleared: false, ...patch });
    };
  }

  it('still shows the message and goes to the message list once, without a state write', async () => {
    const answerNow = pendingMessageInstance();
    const { unmount } = renderFlows();
    unmount();
    vi.mocked(messageDetailReducer).mockClear();
    answerNow({ isRetracted: true });
    await settle();
    expect(feedbackMessageAutoClose).toHaveBeenCalledTimes(1);
    expect(lastAutoClose()?.message).toBe('Sorry, this message is not available anymore.');
    expect(replaceOnUpcomingNavigation).toHaveBeenCalledTimes(1);
    expect(events.onNavigateToMessageList).toHaveBeenCalledTimes(1);
    expect(messageDetailReducer).not.toHaveBeenCalled();
  });

  it('still lowers the counter and calls Wrapper_NotificationOpened with the fetched id, without a state write', async () => {
    setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', 4);
    const answerNow = pendingMessageInstance();
    const { unmount } = renderFlows({ ...inputs, MessageInstanceId: '0', MessageTemplateId: '3101' });
    unmount();
    vi.mocked(messageDetailReducer).mockClear();
    answerNow({}, { isRead: false, messageInstanceId: '81014' });
    await settle();
    expect(getClientVar('Connect2_LegacyShared.UnreadNotificationsNumber')).toBe(3);
    expect(markNotificationOpened).toHaveBeenCalledTimes(1);
    expect(markNotificationOpened).toHaveBeenCalledWith('81014');
    expect(messageDetailReducer).not.toHaveBeenCalled();
  });

  it('runs OnReady once in StrictMode and still loads the message', async () => {
    setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', 4);
    answer({ isRead: false });
    const result = renderStrict();
    await settle();
    expect(fetchMessageInstance).toHaveBeenCalledTimes(1);
    expect(markNotificationOpened).toHaveBeenCalledTimes(1);
    expect(getClientVar('Connect2_LegacyShared.UnreadNotificationsNumber')).toBe(3);
    expect(result.current?.isLoading).toBe(false);
    expect(result.current?.message?.title).toBe('Choir practice moves to Thursday');
  });

  it('shows "Invalid message detail id." once in StrictMode', async () => {
    renderStrict({ ...inputs, MessageInstanceId: '0' });
    await settle();
    expect(showFeedbackMessage).toHaveBeenCalledTimes(1);
  });
});
