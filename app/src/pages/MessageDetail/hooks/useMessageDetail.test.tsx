import { act, render, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  fetchMessageInstance,
  fetchMessageTemplateParameters,
  getOrbitHostSurveyNotificationParameters,
  getOrbitNotificationParameters,
  storeAdaptiveCardResponses,
  type MessageDetail,
  type MessageInstanceResult,
  type MessageParameter,
} from '@/api/message';
import { markNotificationOpened } from '@/api/notification';
import { CommunicationException } from '@/legacy/os/exceptions';
import { getHasAssemble, getHasOrbitAccess, getHasOrbitHostSurvey } from '@/pages/MessageDetail/actions';
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
  getOrbitNotificationParameters: vi.fn(),
  getOrbitHostSurveyNotificationParameters: vi.fn(),
  storeAdaptiveCardResponses: vi.fn(() => Promise.resolve()),
}));
/** The UBTConnect_Utils flag helpers (True on TST), as spies. */
vi.mock('@/pages/MessageDetail/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/pages/MessageDetail/actions')>()),
  getHasOrbitAccess: vi.fn(() => true),
  getHasOrbitHostSurvey: vi.fn(() => true),
  getHasAssemble: vi.fn(() => true),
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
    placeholderDelimiters: { placeholder: '', function: '', parameter: '' },
    isCleared: false,
    ...patch,
  });
}

const events = {
  onNavigateToMessageList: vi.fn(),
  onNavigateToLogin: vi.fn(),
  onNavigateToOrbitEvent: vi.fn(),
  onNavigateToOrbitMilestone: vi.fn(),
  onNavigateToOrbitHostSurvey: vi.fn(),
  onNavigateToAssembleEvent: vi.fn(),
  onAddAuditAndNavigateToEventEmail: vi.fn(),
  onAddAuditAndNavigateToEventDetail: vi.fn(),
};
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

  it("shows another user's private message after the no-access message, without a navigation (SBMD:976-1011)", async () => {
    answer({ messageTemplateTypeId: MessageType.Private, messageInstanceUserId: 12, isRead: false });
    const { result } = renderFlows();
    await settle();
    expect(lastAutoClose()?.message).toBe("You don't have access to that message");
    expect(replaceOnUpcomingNavigation).not.toHaveBeenCalled();
    expect(events.onNavigateToMessageList).not.toHaveBeenCalled();
    expect(markNotificationOpened).toHaveBeenCalledWith('81014');
    expect(result.current.isLoading).toBe(false);
  });

  it("leaves another user's cleared private message after both messages", async () => {
    answer({ messageTemplateTypeId: MessageType.Private, messageInstanceUserId: 12 }, { isCleared: true });
    renderFlows();
    await settle();
    expect(vi.mocked(feedbackMessageAutoClose).mock.calls.map(([m]) => m.message)).toEqual([
      "You don't have access to that message",
      'Sorry, this message is not available anymore.',
    ]);
    expect(events.onNavigateToMessageList).toHaveBeenCalledTimes(1);
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
      {
        id: '41',
        messageTemplateId: '31',
        parameterNameId: ParameterName.AssembleEventParentId,
        parameterValue: '41',
        tenantId: 1,
      },
      {
        id: '42',
        messageTemplateId: '31',
        parameterNameId: ParameterName.AssembleEventInstanceId,
        parameterValue: '42',
        tenantId: 1,
      },
    ]);
    answer({ senderTargetId: MessageSenderTarget.Assemble, sentAs: MessageSenderTarget.Assemble });
    const assemble = renderFlows();
    await settle();
    expect(fetchMessageTemplateParameters).toHaveBeenCalledTimes(1);
    // BuildAssembleNotificationContent: Cache_UserInfo_Get, then SetTextPlaceholdersValue (not ported: the content
    // stays as fetched).
    expect(getUserInformation).toHaveBeenCalledTimes(1);
    expect(assemble.result.current.message?.messageContent).toBe('<p>Choir practice moves to Thursday</p>');
    expect(assemble.result.current.showAssembleAction).toBe(true);
    vi.mocked(getUserInformation).mockClear();

    answer({ messageInfoTypeId: MessageInfoType.Sharing });
    renderFlows();
    await settle();
    expect(fetchMessageTemplateParameters).toHaveBeenCalledTimes(2);
    expect(getUserInformation).not.toHaveBeenCalled();
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
      resolve({
        message: message(messagePatch),
        isRetracted: false,
        isCleared: false,
        placeholderDelimiters: { placeholder: '', function: '', parameter: '' },
        ...patch,
      });
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

const param = (parameterNameId: number, parameterValue: string): MessageParameter => ({
  id: parameterValue,
  messageTemplateId: '31',
  parameterNameId,
  parameterValue,
  tenantId: 1,
});

/** A loaded message of the sender target with its template parameters. */
async function loaded(
  senderTargetId: number,
  parameters: MessageParameter[],
  messagePatch: Partial<MessageDetail> = {},
) {
  vi.mocked(fetchMessageTemplateParameters).mockResolvedValue(parameters);
  answer({ senderTargetId, sentAs: senderTargetId, ...messagePatch });
  const flows = renderFlows();
  await settle();
  return flows.result;
}

describe('OnClick_ViewOrbitEvent and OnClick_ViewAssembleEvent (SBMD:1210-1506)', () => {
  const orbitParameters = [param(2, '7301'), param(3, 'Harvest Supper')];

  it('opens the milestone, else the event of an Orbit message', async () => {
    const result = await loaded(MessageSenderTarget.Orbit, orbitParameters);
    vi.mocked(getOrbitNotificationParameters).mockResolvedValueOnce({
      orbitMilestoneId: 'M-77',
      orbitEventId: '7301',
      orbitEventName: 'Harvest Supper',
    });
    await act(() => result.current.onClickViewOrbitEvent(MessageSenderTarget.Orbit));
    expect(getOrbitNotificationParameters).toHaveBeenCalledWith(orbitParameters);
    expect(events.onNavigateToOrbitMilestone).toHaveBeenCalledWith('M-77', '7301', 'Harvest Supper');

    vi.mocked(getOrbitNotificationParameters).mockResolvedValueOnce({
      orbitMilestoneId: '',
      orbitEventId: '7301',
      orbitEventName: 'Harvest Supper',
    });
    await act(() => result.current.onClickViewOrbitEvent(MessageSenderTarget.Orbit));
    expect(events.onNavigateToOrbitEvent).toHaveBeenCalledWith(MOCK_USER_ID, '7301', 'Harvest Supper');
  });

  it('opens the host survey when its four values are known', async () => {
    const result = await loaded(MessageSenderTarget.OrbitHostSurvey, orbitParameters);
    vi.mocked(getOrbitHostSurveyNotificationParameters).mockResolvedValueOnce({
      orbitEventId: '7301',
      orbitEventName: 'Harvest Supper',
      orbitStartDate: '2026-11-02T18:00:00',
      orbitEndDate: null,
    });
    await act(() => result.current.onClickViewOrbitEvent(MessageSenderTarget.OrbitHostSurvey));
    expect(events.onNavigateToOrbitHostSurvey).not.toHaveBeenCalled();
    vi.mocked(getOrbitHostSurveyNotificationParameters).mockResolvedValueOnce({
      orbitEventId: '7301',
      orbitEventName: 'Harvest Supper',
      orbitStartDate: '2026-11-02T18:00:00',
      orbitEndDate: '2026-11-02T21:00:00',
    });
    await act(() => result.current.onClickViewOrbitEvent(MessageSenderTarget.OrbitHostSurvey));
    expect(events.onNavigateToOrbitHostSurvey).toHaveBeenCalledWith(
      MOCK_USER_ID,
      '7301',
      'Harvest Supper',
      '2026-11-02T18:00:00',
      '2026-11-02T21:00:00',
    );
  });

  it('shows the access errors and does nothing without parameters', async () => {
    const result = await loaded(MessageSenderTarget.OrbitHostSurvey, orbitParameters);
    vi.mocked(getHasOrbitHostSurvey).mockReturnValueOnce(false);
    await act(() => result.current.onClickViewOrbitEvent(MessageSenderTarget.OrbitHostSurvey));
    expect(showFeedbackMessage).toHaveBeenLastCalledWith(
      "You don't have access to Orbit Host Survey. Please contact the Orbit Helpdesk if you have any questions.",
      3,
    );
    vi.mocked(getHasOrbitAccess).mockReturnValueOnce(false);
    await act(() => result.current.onClickViewOrbitEvent(MessageSenderTarget.Orbit));
    expect(showFeedbackMessage).toHaveBeenLastCalledWith(
      "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.",
      3,
    );

    const empty = await loaded(MessageSenderTarget.Orbit, []);
    vi.mocked(showFeedbackMessage).mockClear();
    await act(() => empty.current.onClickViewOrbitEvent(MessageSenderTarget.Orbit));
    expect(showFeedbackMessage).not.toHaveBeenCalled();
    expect(getOrbitNotificationParameters).not.toHaveBeenCalled();
  });

  it('opens the Assemble event of its parameters, or shows the access error', async () => {
    const result = await loaded(MessageSenderTarget.Assemble, [
      param(ParameterName.AssembleEventParentId, '41'),
      param(ParameterName.AssembleEventInstanceId, '42'),
      param(ParameterName.AssembleEventType, 'Bible Reading'),
    ]);
    act(() => {
      result.current.onClickViewAssembleEvent();
    });
    expect(events.onNavigateToAssembleEvent).toHaveBeenCalledWith('41', '42', 'Bible Reading');
    vi.mocked(getHasAssemble).mockReturnValueOnce(false);
    act(() => {
      result.current.onClickViewAssembleEvent();
    });
    expect(showFeedbackMessage).toHaveBeenLastCalledWith("You don't have access to Assemble.", 3);
  });
});

describe('AdaptiveCardViewerOnExecuteAction (SBMD:1569-1737)', () => {
  const card =
    '{"actions":[{"type":"Action.Submit","title":"View Event","data":{"submitType":"view_event","eventId":5520,"id":880},"style":"positive"}],"spacing":"medium"}';

  it('send_email opens the event e-mail; without an event id, with the ids of the "View Event" action', async () => {
    const result = await loaded(MessageSenderTarget.Directory, [], { isAdaptiveCard: true, adaptiveCardContent: card });
    await act(() =>
      result.current.adaptiveCardViewerOnExecuteAction(
        card,
        'email',
        '{"submitType":"send_email","eventId":5521,"id":881}',
      ),
    );
    expect(events.onAddAuditAndNavigateToEventEmail).toHaveBeenLastCalledWith('5521', '881');
    await act(() => result.current.adaptiveCardViewerOnExecuteAction(card, 'email', '{"submitType":"send_email"}'));
    expect(events.onAddAuditAndNavigateToEventEmail).toHaveBeenLastCalledWith('5520', '880');
  });

  it('view_event opens the event detail, or shows "Event is not accessible" without ids', async () => {
    const result = await loaded(MessageSenderTarget.Directory, [], { isAdaptiveCard: true, adaptiveCardContent: card });
    await act(() =>
      result.current.adaptiveCardViewerOnExecuteAction(card, 'view', '{"submitType":"view_event","id":880}'),
    );
    expect(events.onAddAuditAndNavigateToEventDetail).toHaveBeenCalledWith('880', '0');
    await act(() => result.current.adaptiveCardViewerOnExecuteAction(card, 'view', '{"submitType":"view_event"}'));
    expect(showFeedbackMessage).toHaveBeenLastCalledWith('Event is not accessible', 0);
  });

  it('any other submit stores the answer, refreshes the message and thanks the user', async () => {
    const result = await loaded(MessageSenderTarget.Directory, [], { isAdaptiveCard: true, adaptiveCardContent: card });
    await act(() => result.current.adaptiveCardViewerOnExecuteAction(card, 'rsvp', '{"answer":"yes"}'));
    expect(storeAdaptiveCardResponses).toHaveBeenCalledWith({
      deviceHardwareId: '',
      adaptiveCardPayloadJSON: card,
      actionTaken: 'rsvp',
      formDataJSON: '{"answer":"yes"}',
      messageInstanceId: '81014',
    });
    expect(fetchMessageInstance).toHaveBeenCalledTimes(2);
    expect(showFeedbackMessage).toHaveBeenLastCalledWith('Thanks for filling out our form!', 0);
  });

  it('shows the connection message on a CommunicationException', async () => {
    const result = await loaded(MessageSenderTarget.Directory, [], { isAdaptiveCard: true, adaptiveCardContent: card });
    vi.mocked(storeAdaptiveCardResponses).mockRejectedValueOnce(new CommunicationException('offline'));
    await act(() => result.current.adaptiveCardViewerOnExecuteAction(card, 'rsvp', '{"answer":"yes"}'));
    expect(showFeedbackMessage).toHaveBeenLastCalledWith('Please check your internet connection!', 0);
  });
});
