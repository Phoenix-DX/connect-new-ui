import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { SecurityException } from '@/legacy/os/os-exceptions';
import { SCHOOLS, exampleEmail } from '@/mocks/fictional/directory';
import { ldmEventById, ldmEventDay, ldmEventName } from '@/mocks/fictional/ldm';
import { ORBIT_HELPDESK_EMAIL } from '@/mocks/fictional/orbit';
import { collection } from '@/mocks/store';
import { Connect_Entity } from '@/lib/ubtConnect/staticEntities';
import { recordBodies } from '@/test/testSupport';
import {
  fetchCountryNames,
  fetchEntityContactDetails,
  fetchEventEmailCoordinator,
  fetchLocalityTimezone,
  fetchMemberContacts,
  fetchMessageInstance,
  fetchMessageInstanceExists,
  fetchMessages,
  fetchMessageTemplateParameters,
  fetchNumberUnreadMessages,
  markMessageAsClear,
  markMessageAsRead,
  sendContactEmail,
  sendContactFormEmail,
  sendContactLDMCoordinatorEmail,
  sendContactMemberEmail,
  sendContactUsMessage,
  sendEventContactEmail,
  sendUserContactEmail,
} from './repository';
import type {
  ContactByEmailForm,
  ContactUsCallInputs,
  EventEmailCallInputs,
  MessageDetailCallInputs,
  MessageListCallInputs,
  MessagesList,
  OrbitContactEmail,
  UserContactRequest,
} from './types';

/* The MSW mocks of the test setup: the ContactFlow screens and the shared ContactByEmailForm (each sent e-mail goes to
   an in-memory collection), EmailContact (the recipients of the Orbit world), EmailTarget and LDM_Email_V2 (the LDM
   world), ContactUsDetails (the recorded time zone, an empty country list, the sent messages), MessageDetail and
   MessageList (22 fictional messages in the collection MessageList.messages, 2 unread), the shell (the recorded unread
   count: 0 public, 6 private), Directory_EntityDetailsActions (the directory cast) and Connect2_LegacyShared (the
   contacts of the hosted Orbit guests). */
const sent = (name: string) => collection(name, () => [], 'Id');

const form: ContactByEmailForm = {
  firstName: 'Lucia',
  contactMember: 'Mateo Herrera',
  emailTo: 'mateo.herrera@example.com',
  subject: 'Saturday supper',
  message: 'We look forward to seeing you on Saturday.',
};
const formWire = {
  FirstName: 'Lucia',
  ContactMember: 'Mateo Herrera',
  EmailTo: 'mateo.herrera@example.com',
  Subject: 'Saturday supper',
  Message: 'We look forward to seeing you on Saturday.',
};

const helpdeskEmail: OrbitContactEmail = {
  isContactHelpdesk: true,
  eventId: '7301',
  milestoneId: '',
  targetMemberId: '0',
  subject: 'Orbit Helpdesk',
  userSubject: 'Room change',
  message: 'Could we have a room on the ground floor?',
  emailInfo: {
    EventName: 'Bahia Blanca Gathering',
    SenderFullName: 'Lucia Vitale',
    HostName: '',
    HostEmail: '',
    MilestoneName: '',
    FormattedDateTime: '',
  },
};

const contactRequest: UserContactRequest = {
  ContactMember: 'Medina Household',
  EmailFrom: 'lucia.vitale@example.com',
  EmailTo: 'medina.family@example.com',
  FirstName: 'Ana',
  FirstNameSender: 'Lucia',
  LastNameSender: 'Vitale',
  Message: 'Thank you for the supper on Saturday.',
  SenderCountry: 'Argentina',
  SenderLocality: 'Bahia Blanca',
  SenderPhone: '+54 291 555 0101',
  Subject: 'Saturday supper',
};

const contactUsInputs: ContactUsCallInputs = {
  isLogged: true,
  isLoadingMainData: false,
  IgnorePolices: false,
  In_ContactSubjectId: 'account',
  In_ContactSubjectTitle: 'User Account Management',
  In_ListMenuOptionLabel: 'Set up a UBT One account',
};

const messageDetailInputs = (messageInstanceId: string): MessageDetailCallInputs => ({
  IsEntryScreen: false,
  IsLoading: true,
  ShowAssembleAction: false,
  MessageInstanceId: messageInstanceId,
  MessageTemplateId: '0',
  HardwareId: '',
  isOriginPushNotification: false,
});

const listVariables = (fields: Partial<MessageListCallInputs> = {}): MessageListCallInputs => ({
  ShowWarning: false,
  ShowFilters: false,
  ShowSearch: false,
  SearchMessageString: '',
  OrderByIsAscending: false,
  SelectedHistorySearch: '',
  DeviceHardwareId: 'WEB_test',
  MaxRecords: 20,
  isLoadMore: false,
  Filter_OrderASC: false,
  Filter_OrderDESC: true,
  Filter_MessageTypePrivate: true,
  Filter_MessageTypePublic: true,
  IsShowLoading: true,
  IsEmptyMessage: false,
  IsRefreshing: false,
  HasUnread: false,
  WarningMessage: '',
  CurrentMessageInstanceId: '0',
  ForceInitiateLoginFlowDateTime: '',
  TotalPrivate: 0,
  TotalPublic: 0,
  SelectedFilter_OrderASC: false,
  SelectedFilter_MessageTypePrivate: true,
  SelectedFilter_MessageTypePublic: true,
  ...fields,
});
const emptyList: MessagesList = { items: [], hasUnreadMessages: false };
const emptyContactUsForm = { FullName: '', Email: '', Country: '', Locality: '', PhoneNumber: '', Message: '' };

beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
});
afterEach(() => {
  sessionStorage.clear();
});

describe('message repository: contact e-mails', () => {
  it('sendContactLDMCoordinatorEmail sends the form as In_UI_ContactByEmailForm', async () => {
    await expect(sendContactLDMCoordinatorEmail(form)).resolves.toBeUndefined();
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        action: 'ServiceAPISendContactLDMCoordinatorEmail',
        inputNames: ['In_UI_ContactByEmailForm'],
      }),
    ]);
    expect(sent('UBTConnect.sentContactLDMCoordinatorEmails').all()[0]).toEqual(expect.objectContaining(formWire));
  });

  it('sendContactMemberEmail sends the form as In_UI_ContactByEmailForm', async () => {
    await expect(sendContactMemberEmail(form)).resolves.toBeUndefined();
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        action: 'ServiceAPISendContactMemberEmail',
        inputNames: ['In_UI_ContactByEmailForm'],
      }),
    ]);
    expect(sent('UBTConnect.sentContactMemberEmails').all()[0]).toEqual(expect.objectContaining(formWire));
  });

  it('sendContactEmail calls SendContactEmail through UBTConnect and answers IsSuccess', async () => {
    await expect(sendContactEmail(helpdeskEmail)).resolves.toBe(true);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        action: 'ActionSendContactEmail',
        inputNames: [
          'EmailInfo',
          'EventId',
          'IsContactHelpdesk',
          'Message',
          'MilestoneId',
          'Subject',
          'TargetMemberId',
          'UserSubject',
        ],
      }),
    ]);
    expect(sent('UBTConnect.sentOrbitContactEmails').all()[0]).toEqual(
      expect.objectContaining({
        To: ORBIT_HELPDESK_EMAIL,
        UserSubject: 'Room change',
        EmailInfo: { ...helpdeskEmail.emailInfo, SenderEmail: '', TargetHelpdeskEmail: '' },
      }),
    );
  });

  it('sendContactFormEmail calls SendContactEmail through Connect2_OrbitMobile_MUI and answers IsSuccess', async () => {
    await expect(sendContactFormEmail(helpdeskEmail)).resolves.toBe(true);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({ module: 'Connect2_OrbitMobile_MUI', action: 'ActionSendContactEmail' }),
    ]);
    // An event without a helpdesk address: the server answers IsSuccess False.
    await expect(sendContactFormEmail({ ...helpdeskEmail, eventId: '1' })).resolves.toBe(false);
  });

  it('sendUserContactEmail and sendEventContactEmail send the UserContactRequest as it is', async () => {
    await expect(sendUserContactEmail(contactRequest)).resolves.toBeUndefined();
    await expect(sendEventContactEmail(contactRequest)).resolves.toBeUndefined();
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'Connect2_LegacyShared',
        action: 'ActionUserContactUser',
        inputNames: ['UserContactRequest'],
      }),
      expect.objectContaining({
        module: 'Connect2_OrbitMobile_MUI',
        action: 'ActionEventContact',
        inputNames: ['UserContactRequest'],
      }),
    ]);
    expect(sent('Connect2_LegacyShared.sentUserContactUserEmails').all()[0]).toEqual(
      expect.objectContaining(contactRequest),
    );
    expect(sent('Connect2_OrbitMobile_MUI.sentEventContactEmails').all()[0]).toEqual(
      expect.objectContaining(contactRequest),
    );
  });
});

describe('message repository: Contact Us', () => {
  it('fetchLocalityTimezone sends the screen variables as they are and answers the time zone', async () => {
    await expect(fetchLocalityTimezone(contactUsInputs)).resolves.toEqual({
      timezoneName: 'CDT',
      timezoneOffset: -18000,
    });
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'ContactUsDetails',
        action: 'DataActionDataAction_GetLocalityTimezone',
        inputNames: Object.keys(contactUsInputs).sort(),
      }),
    ]);
  });

  it('fetchCountryNames answers the countries (the mock: eight countries, by name)', async () => {
    const countries = await fetchCountryNames(contactUsInputs);
    expect(countries).toHaveLength(8);
    expect(countries[0]).toEqual({ code: 'AR', name: 'Argentina' });
    expect(window.__osCalls).toEqual([
      expect.objectContaining({ owner: 'ContactUsDetails', action: 'DataActionDataAction_GetCountriesNames' }),
    ]);
  });

  it('sendContactUsMessage sends the form, the subject and the rate, and answers Out_ErrorMessage', async () => {
    const contactUsForm = {
      FullName: 'Lucia Vitale',
      Email: 'lucia.vitale@example.com',
      Country: 'Argentina',
      Locality: 'Bahia Blanca',
      PhoneNumber: '',
      Message: 'The app does not show my bookmarks.',
    };
    await expect(sendContactUsMessage(contactUsForm, 'account', 4, true)).resolves.toEqual({ out_ErrorMessage: '' });
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        action: 'ServiceAPISendContactUsMessage',
        inputNames: ['In_ContactSubjectId', 'In_ContactUsForm', 'Rate', 'Rate_UserWantToBeContacted'],
      }),
    ]);
    expect(sent('ContactUsDetails.sentMessages').all()[0]).toEqual(
      expect.objectContaining({ In_ContactUsForm: contactUsForm, In_ContactSubjectId: 'account', Rate: 4 }),
    );
  });
});

describe('message repository: LDM event e-mail', () => {
  const inputs: EventEmailCallInputs = {
    In_EventHostId: '0',
    In_EventId: '70415',
    In_IsMessageGuest: false,
    In_IsContactOrganiser: true,
    EventDate: '',
    EventLocality: '',
  };

  it('fetchEventEmailCoordinator sends the block inputs and answers the coordinator of the meal', async () => {
    const bodies = recordBodies('Connect2_OrbitMobile_MUI/ScreenBlock_Event_Email_V2/DataActionGetCoordinatorDetails');
    const meal = ldmEventById('70415');
    if (!meal) throw new Error('No LDM meal 70415');
    const data = await fetchEventEmailCoordinator(inputs);
    expect(data).toMatchObject({
      hasContent: true,
      eventName: ldmEventName(meal),
      eventDateText: ldmEventDay(meal),
      coordinatorDetails: { LocalityName: meal.host.localityName },
    });
    expect(data.coordinatorDetails.CoordinatorName).not.toBe('');
    expect(bodies).toEqual([{ ...inputs, EventDate: '1900-01-01' }]);
  });

  it('fetchEventEmailCoordinator answers no content for an unknown meal', async () => {
    await expect(fetchEventEmailCoordinator({ ...inputs, In_EventId: '1' })).resolves.toMatchObject({
      hasContent: false,
      eventName: '',
      eventDateText: '1900-01-01',
    });
  });
});

describe('message repository: message detail', () => {
  it('fetchMessageInstance answers the message of the instance id', async () => {
    const result = await fetchMessageInstance(messageDetailInputs('5965247'));
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'Connect2_LegacyShared',
        owner: 'ScreenBlock_MessageDetail',
        action: 'DataActionGetMessageInstance',
        inputNames: Object.keys(messageDetailInputs('5965247')).sort(),
      }),
    ]);
    expect(result).toMatchObject({
      message: {
        messageInstanceId: '5965247',
        title: 'Test Noti 56',
        isRead: true,
        sentAs: 3,
        senderTargetName: 'Directory',
        messageContent: '<p>Test Noti 56</p>',
      },
      isRetracted: false,
      isCleared: false,
    });
  });

  it('fetchMessageInstance gives a null instance id for an unknown message', async () => {
    const { message } = await fetchMessageInstance(messageDetailInputs('1'));
    expect(message.messageInstanceId).toBeNull();
    expect(message.dateTimeCreated).toBeNull();
  });

  it('fetchMessageTemplateParameters sends MaxRecords 50 and StartIndex 0 with the block variables', async () => {
    const bodies = recordBodies(
      'Connect2_LegacyShared/ScreenBlock_MessageDetail/ScreenDataSetGetMessageTemplateParametersByMessageTemplateId',
    );
    await expect(fetchMessageTemplateParameters(messageDetailInputs('5965247'))).resolves.toEqual([]);
    expect(bodies).toEqual([{ ...messageDetailInputs('5965247'), MaxRecords: 50, StartIndex: 0 }]);
  });
});

describe('message repository: message list', () => {
  it('fetchMessages sends the block variables and answers the messages, newest first', async () => {
    const bodies = recordBodies('Connect2_LegacyShared/ScreenBlock_MessageList/DataActionGetMessages');
    const result = await fetchMessages(listVariables(), emptyList, false);
    expect(result.messages).toHaveLength(20);
    expect(result.messages[0]).toMatchObject({ id: '81022', title: 'Test Noti 2', isRead: true });
    expect(result.hasUnreadMessages).toBe(true);
    expect(result.countUnreadMessages).toBe(2);
    expect(bodies[0]).toMatchObject({
      TotalPrivate: '0',
      TotalPublic: '0',
      ForceInitiateLoginFlowDateTime: '1900-01-01T00:00:00',
      MessagesList: { HasUnreadMessages: false, Items: { List: [] }, TotalCount: '0' },
      Trigger_PullToRefresh: false,
    });
  });

  it('fetchMessageInstanceExists answers whether the current message is still there', async () => {
    await expect(
      fetchMessageInstanceExists(listVariables({ CurrentMessageInstanceId: '81012' }), emptyList, false),
    ).resolves.toBe(true);
    await expect(
      fetchMessageInstanceExists(listVariables({ CurrentMessageInstanceId: '1' }), emptyList, false),
    ).resolves.toBe(false);
    expect(window.__osCalls?.map((c) => c.action)).toEqual([
      'DataActionGetMessageInstanceById2',
      'DataActionGetMessageInstanceById2',
    ]);
  });

  it('markMessageAsRead and markMessageAsClear send the message and the filters of the block', async () => {
    await expect(markMessageAsRead('81019', listVariables())).resolves.toBe(true);
    await expect(markMessageAsClear('81018', listVariables())).resolves.toEqual({
      hasUnreadMessages: true,
      isHaveMessage: true,
      isRead: true,
    });
    const markInputs = [
      'DeviceHardwareId',
      'MessageInstanceId',
      'MessageTypePrivate',
      'MessageTypePublic',
      'SelectedHistorySearch',
    ];
    expect(window.__osCalls).toEqual([
      expect.objectContaining({ action: 'ActionMarkMessageAsRead', inputNames: markInputs }),
      expect.objectContaining({ action: 'ActionMarkMessageAsClear', inputNames: markInputs }),
    ]);
    const { messages } = await fetchMessages(listVariables(), emptyList, false);
    expect(messages.find((m) => m.id === '81019')?.isRead).toBe(true);
    expect(messages.find((m) => m.id === '81018')).toBeUndefined();
  });

  it('fetchNumberUnreadMessages sends DeviceId and answers the two counts as numbers', async () => {
    await expect(fetchNumberUnreadMessages('WEB_test')).resolves.toEqual({ publicCount: 0, privateCount: 6 });
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'Connect2_LegacyShared',
        action: 'ActionGetNumberUnreadMessages',
        inputNames: ['DeviceId'],
      }),
    ]);
  });
});

describe('message repository: contact details and member contacts', () => {
  it('fetchEntityContactDetails answers the contact details of the entity, without LocalityId', async () => {
    const school = SCHOOLS[0];
    const inputs = { EntityType: Connect_Entity.OneSchoolGlobal, EntityId: school.id, IsEnabled: true };
    const details = await fetchEntityContactDetails(inputs);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'Directory_EntityDetailsActions',
        action: 'DataActionFetchContactDetails',
        inputNames: ['EntityId', 'EntityType', 'IsEnabled'],
      }),
    ]);
    expect(details).toMatchObject({
      EntityName: school.name,
      Email: exampleEmail('office', school.name.replace(/ /g, '')),
      ContactPopupData: { Name: school.name, EntityId: school.id },
    });
    expect(details).not.toHaveProperty('LocalityId');
  });

  it('fetchMemberContacts answers the contacts of the members of the cache key', async () => {
    const [contact, ...others] = await fetchMemberContacts('880101');
    expect(others).toEqual([]);
    expect(contact).toMatchObject({
      MobilePhoneNumber: '+54 336 555 0141',
      LocalityName: 'San Nicolás',
      Timezone: { TimezoneLabel: 'ART', OffsetSeconds: '-10800' },
    });
    await expect(fetchMemberContacts('1')).resolves.toEqual([]);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({ action: 'ActionGetMemberContactByCacheKey', inputNames: ['CacheKey'] }),
      expect.objectContaining({ action: 'ActionGetMemberContactByCacheKey', inputNames: ['CacheKey'] }),
    ]);
  });
});

describe('message repository: errors', () => {
  it('a failed call raises the exception of callAction', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    await expect(fetchMessages(listVariables(), emptyList, false)).rejects.toThrow('Request failed with status 500');
    await expect(sendContactMemberEmail(form)).rejects.toThrow('Request failed with status 500');
    await expect(fetchNumberUnreadMessages('WEB_test')).rejects.toThrow('Request failed with status 500');
    await expect(fetchLocalityTimezone(contactUsInputs)).rejects.toThrow('Request failed with status 500');
  });

  it('scenario security (G1): both ContactUsDetails data actions raise a SecurityException, the write answers', async () => {
    sessionStorage.setItem('mock:mock', 'security');
    const security = { message: 'You do not have access to this information.', exception: 'SecurityException' };
    await expect(fetchLocalityTimezone(contactUsInputs)).rejects.toBeInstanceOf(SecurityException);
    await expect(fetchLocalityTimezone(contactUsInputs)).rejects.toMatchObject(security);
    await expect(fetchCountryNames(contactUsInputs)).rejects.toMatchObject(security);
    await expect(sendContactUsMessage(emptyContactUsForm, 'account', 0, false)).resolves.toEqual({
      out_ErrorMessage: '',
    });
  });
});
