import { afterEach, describe, expect, it } from 'vitest';
import type { MessageDetail, MessageInstanceResult } from '@/api/message';
import { MessageInfoType, MessageSenderTarget, MessageType, ParameterName } from '@/pages/MessageDetail/staticEntities';
import { getClientVar, setClientVar } from '@/platform/session/session';
import {
  addFirstSentence,
  decrementReadWhatsNewsCounter,
  initialMessageDetailState,
  isOrbitKind,
  isPrivateMessageOfAnotherUser,
  messageAccess,
  messageDetailReducer,
  messageTitle,
  needsTemplateParameters,
  showAssembleAction,
} from './messageDetailState';

/* The pure parts of ScreenBlock_MessageDetail, with fictional messages. */
const inputs = { MessageInstanceId: '81014', isOriginPushNotification: false, MessageTemplateId: '0', HardwareId: '' };

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
  profileIconURL: '',
  messageContent: '<p>Choir practice moves to Thursday</p>',
  adaptiveCardContent: '',
  userName: '',
  createdByMemberId: '0',
  ...patch,
});

const result = (patch: Partial<MessageInstanceResult> = {}, messagePatch: Partial<MessageDetail> = {}) => ({
  message: message(messagePatch),
  isRetracted: false,
  placeholderDelimiters: { placeholder: '', function: '', parameter: '' },
  isCleared: false,
  ...patch,
});

afterEach(() => {
  setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', 0);
  setClientVar('Connect2_LegacyShared.UnreadPublicMessagesNumber', 0);
  setClientVar('Connect2_LegacyShared.UnreadWhatsNewsNumber', 0);
});

describe('messageDetailReducer', () => {
  it('starts loading with the block inputs as variables', () => {
    expect(initialMessageDetailState(inputs)).toEqual({
      variables: { IsEntryScreen: false, IsLoading: true, ShowAssembleAction: false, ...inputs },
      message: null,
      parameters: null,
    });
  });

  it('keeps the fetched message and its instance id, "0" for the null identifier, and stays loading', () => {
    const fetched = messageDetailReducer(initialMessageDetailState(inputs), {
      type: 'messageInstanceFetched',
      message: message({ messageInstanceId: '5965247' }),
    });
    expect(fetched.variables.MessageInstanceId).toBe('5965247');
    expect(fetched.message?.messageInstanceId).toBe('5965247');
    expect(fetched.variables.IsLoading).toBe(true);
    const notFound = messageDetailReducer(fetched, {
      type: 'messageInstanceFetched',
      message: message({ messageInstanceId: null }),
    });
    expect(notFound.variables.MessageInstanceId).toBe('0');
  });

  it('sets ShowAssembleAction from the parameters only for an Assemble message', () => {
    const both = [
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
    ];
    const assemble = messageDetailReducer(initialMessageDetailState(inputs), {
      type: 'templateParametersFetched',
      parameters: both,
      senderTargetId: MessageSenderTarget.Assemble,
    });
    expect(assemble.parameters).toEqual(both);
    expect(assemble.variables.ShowAssembleAction).toBe(true);
    const orbit = messageDetailReducer(initialMessageDetailState(inputs), {
      type: 'templateParametersFetched',
      parameters: both,
      senderTargetId: MessageSenderTarget.Orbit,
    });
    expect(orbit.parameters).toEqual(both);
    expect(orbit.variables.ShowAssembleAction).toBe(false);
  });

  it('ends the loading with the prepared message', () => {
    const prepared = messageDetailReducer(initialMessageDetailState(inputs), {
      type: 'messagePrepared',
      message: message({ profileIconURL: '/img/member.png' }),
    });
    expect(prepared.variables.IsLoading).toBe(false);
    expect(prepared.message?.profileIconURL).toBe('/img/member.png');
  });
});

describe('showAssembleAction', () => {
  it('needs both Assemble event ids', () => {
    expect(showAssembleAction([])).toBe(false);
    expect(
      showAssembleAction([
        {
          id: '41',
          messageTemplateId: '31',
          parameterNameId: ParameterName.AssembleEventParentId,
          parameterValue: '41',
          tenantId: 1,
        },
      ]),
    ).toBe(false);
  });
});

describe('messageAccess', () => {
  it('decides in the order of GetMessageInstanceByIdOnAfterFetch', () => {
    expect(messageAccess(result({ isRetracted: true, isCleared: true }), true)).toBe('retracted');
    expect(messageAccess(result({}, { messageInstanceId: null }), true)).toBe('noAccess');
    expect(messageAccess(result({}, { messageInstanceId: null }), false)).toBe('login');
    expect(messageAccess(result({ isCleared: true }), true)).toBe('cleared');
    expect(messageAccess(result(), false)).toBe('open');
  });

  it('opens a private message when signed in, and sends a signed-out user to the login', () => {
    const own = { messageTemplateTypeId: MessageType.Private, messageInstanceUserId: 7 };
    expect(messageAccess(result({}, own), true)).toBe('open');
    // Another user's private message goes on to the IsCleared check (SBMD:976-1011, decision Q4 (a)).
    expect(messageAccess(result({}, own), true)).toBe('open');
    expect(messageAccess(result({ isCleared: true }, own), true)).toBe('cleared');
    expect(messageAccess(result({}, own), false)).toBe('login');
  });

  it('tells a private message of another signed-in user', () => {
    const own = { messageTemplateTypeId: MessageType.Private, messageInstanceUserId: 7 };
    expect(isPrivateMessageOfAnotherUser(result({}, own), true, '8')).toBe(true);
    expect(isPrivateMessageOfAnotherUser(result({}, own), true, '7')).toBe(false);
    expect(isPrivateMessageOfAnotherUser(result({}, own), false, null)).toBe(false);
    expect(isPrivateMessageOfAnotherUser(result({}, { messageInstanceUserId: 7 }), true, '8')).toBe(false);
  });
});

describe('the view expressions', () => {
  it('titles a message by its sender target, "Meal Allocation" for LordsDayMeal, or by its user', () => {
    expect(messageTitle(null)).toBe('');
    expect(messageTitle(message())).toBe('Directory');
    expect(
      messageTitle(
        message({ sentAs: MessageSenderTarget.LordsDayMeal, senderTargetId: MessageSenderTarget.LordsDayMeal }),
      ),
    ).toBe('Meal Allocation');
    expect(messageTitle(message({ sentAs: null, userName: 'Mara Lindqvist' }))).toBe('Mara Lindqvist');
  });

  it('knows the Orbit targets and the messages with template parameters', () => {
    expect(isOrbitKind(MessageSenderTarget.Orbit)).toBe(true);
    expect(isOrbitKind(MessageSenderTarget.OrbitHostSurvey)).toBe(true);
    expect(isOrbitKind(MessageSenderTarget.Assemble)).toBe(false);
    expect(needsTemplateParameters(message())).toBe(false);
    expect(needsTemplateParameters(message({ messageInfoTypeId: MessageInfoType.Sharing }))).toBe(true);
    expect(needsTemplateParameters(message({ senderTargetId: MessageSenderTarget.OrbitHostSurvey }))).toBe(true);
    expect(needsTemplateParameters(message({ senderTargetId: MessageSenderTarget.Assemble }))).toBe(true);
  });
});

describe('the client actions', () => {
  it('AddFirstSentence greets the user before the content', () => {
    expect(addFirstSentence('Ingrid', '<p>See you at the camp.</p>')).toBe(
      'Hello Ingrid, <br> <br><p>See you at the camp.</p>',
    );
  });

  it('DecrementReadWhatsNewsCounter lowers the unread news, not below 0', () => {
    setClientVar('Connect2_LegacyShared.UnreadWhatsNewsNumber', 1);
    decrementReadWhatsNewsCounter();
    expect(getClientVar('Connect2_LegacyShared.UnreadWhatsNewsNumber')).toBe(0);
    decrementReadWhatsNewsCounter();
    expect(getClientVar('Connect2_LegacyShared.UnreadWhatsNewsNumber')).toBe(0);
  });
});
