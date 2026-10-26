import { describe, expect, it } from 'vitest';
import {
  toContactByEmailFormInputs,
  toCountryNames,
  toEntityContactDetails,
  toEventEmailCoordinatorData,
  toEventEmailCoordinatorInputs,
  toLocalityTimezone,
  toMarkMessageInputs,
  toMemberContacts,
  toMessageClearResult,
  toMessageExists,
  toMessageInstanceResult,
  toMessageItem,
  toMessageListInputs,
  toMessageParameters,
  toMessagesResult,
  toMessageTemplateParametersInputs,
  toOrbitContactEmailInputs,
  toSendContactUsMessageInputs,
  toSendContactUsMessageResult,
  toUnreadMessageCounts,
  type EntityContactDetailsWire,
  type EventEmailCoordinatorWire,
  type MessageInstanceWire,
  type MessageListItemWire,
} from './mapper';
import type {
  ContactByEmailForm,
  MemberContactWithTimezone,
  MessageDetailCallInputs,
  MessageListCallInputs,
  OrbitContactEmail,
} from './types';

/* Wire records as the server sends them (every attribute), with fictional values. The OutSystems null DateTime is
   "1900-01-01T00:00:00". */
const NULL_DATE_TIME = '1900-01-01T00:00:00';

const form: ContactByEmailForm = {
  firstName: 'Lucia',
  contactMember: 'Mateo Herrera',
  emailTo: 'mateo.herrera@example.com',
  subject: 'Saturday supper',
  message: 'We look forward to seeing you on Saturday.',
};

const orbitEmail: OrbitContactEmail = {
  isContactHelpdesk: true,
  eventId: '7301',
  milestoneId: 'M-12',
  targetMemberId: '0',
  subject: 'Orbit Helpdesk',
  userSubject: 'Room change',
  message: 'Could we have a room on the ground floor?',
  emailInfo: {
    EventName: 'Bahia Blanca Gathering',
    SenderFullName: 'Lucia Vitale',
    HostName: 'Mr Andres & Mrs Sofia Perez',
    HostEmail: 'perez.family@example.com',
    MilestoneName: 'Arrival',
    FormattedDateTime: 'Fri 13 Nov 2026, 6:00 PM',
  },
};

const coordinatorWire = (eventDate: string): EventEmailCoordinatorWire => ({
  Out_CoordinatorDetails: {
    GetCoordinatorDetailsResponse: {
      CoordinatorName: 'Marta Ibanez',
      CoordinatorEmail: 'marta.ibanez@example.com',
      CoordinatorPhoneNumber: '+54 291 555 0310',
      Latitude: '',
      Longitude: '',
      Address: '',
      LocalityName: 'Bahia Blanca',
      LocalityId: '252',
      CountryCode: 'AR',
      CountryName: 'Argentina',
      EventDate: eventDate,
      LDMEventName: '',
      Timezone: { TimezoneLabel: 'ART', OffsetSeconds: '-10800' },
    },
  },
  Out_HasContent: true,
  EventName: "Lord's Day Meal at Bahia Blanca",
});

const messageInstanceWire = (fields: { id: string; sentAs: number; created: string }): MessageInstanceWire => ({
  Message: {
    MessagePriority: { Id: 1, Label: 'Normal', Order: 1, Is_Active: true },
    MessageContent: { Id: '41', MessageContent: '<p>The hall is open from 9 am.</p>', Tenant_Id: 1 },
    MessageTemplate: {
      Id: '31',
      IsAdaptiveCard: false,
      Title: 'Hall opening times',
      Summary: 'The hall is open from 9 am.',
      MessageContentId: '41',
      CreatedByUser: 7012,
      CreatedDate: NULL_DATE_TIME,
      LastUpdated: NULL_DATE_TIME,
      UpdatedBy: 0,
      MessageTemplateStatusId: 2,
      MessageTemplateTypeId: 2,
      MessageTemplatePriorityId: 1,
      MessageInfoTypeId: 1,
      AdaptiveCardJSONId: '0',
      SentAs: fields.sentAs,
      SavedTemplateId: '0',
      MessageSendToTypeId: 1,
      MessageApplicationTargetId: 1,
      RecalledBy: 0,
      IsPushNotificationOnly: false,
      HideTitleOnPushNotification: false,
      HideBodyOnPushNotification: false,
      Tenant_Id: 1,
    },
    MessageSenderTarget: {
      Id: 3,
      Name: 'Directory',
      ProfileIconURL: '/UBT_CW/img/UBT_CW.directory_entity_logo.png',
      Order: 1,
      Is_Active: true,
      NotificationIcon: '',
      NotificationHeading: '',
    },
    MessageInstance: {
      Id: fields.id,
      MessageTemplateId: '31',
      UserId: 7012,
      DeviceHardwareId: '',
      IsSent: true,
      IsReceived: true,
      IsRead: false,
      IsReplied: false,
      IsClear: false,
      DateTimeCreated: fields.created,
      NotificationUUID: '',
      SendAttemptCount: 1,
      LastSendAttemptDateTime: NULL_DATE_TIME,
      NextSendAttemptDateTime: NULL_DATE_TIME,
      CheckForReceiptCount: 0,
      LastCheckForReceiptDateTime: NULL_DATE_TIME,
      NextCheckForReceiptDateTime: NULL_DATE_TIME,
      SentToWebDevice: false,
      MessageError: '',
      Tenant_Id: 1,
    },
    AdaptiveCardJSON: { Id: '0', AdaptiveCardContent: '', Tenant_Id: 1 },
    User: {
      Id: 7012,
      Name: 'Ana Medina',
      Username: '',
      Password: '',
      Email: '',
      MobilePhone: '',
      External_Id: '',
      Creation_Date: NULL_DATE_TIME,
      Last_Login: NULL_DATE_TIME,
      Is_Active: true,
      Tenant_Id: 1,
    },
    CreatedByMemberId: '900112',
  },
  IsRetracted: false,
  IsCleared: true,
  PlaceholderDelimiters: { Delimiters: { Delimiter_Function: '', Delimiter_Parameter: '', Delimiter_Placeholder: '' } },
});

const messageDetailInputs: MessageDetailCallInputs = {
  IsEntryScreen: false,
  IsLoading: true,
  ShowAssembleAction: false,
  MessageInstanceId: '81012',
  MessageTemplateId: '31',
  HardwareId: 'device-01',
  isOriginPushNotification: false,
};

const listItemWire: MessageListItemWire = {
  Id: '81012',
  MessageTemplateTypeId: 1,
  Title: 'Monthly announcement for all',
  Summary: 'The announcement of October',
  DateTimeCreated: '2026-10-07T11:25:00',
  MessageTemplatePriorityId: 1,
  ProfileIconURL: '',
  IsClear: false,
  IsRead: false,
  CreatedByUserId: 7012,
  CreatedByMemberId: '900112',
  MessageInfoTypeId: 1,
  MessageSenderTargetName: 'Ana Medina',
};

const listVariables: MessageListCallInputs = {
  ShowWarning: false,
  ShowFilters: false,
  ShowSearch: false,
  SearchMessageString: '',
  OrderByIsAscending: false,
  SelectedHistorySearch: 'announcement',
  DeviceHardwareId: 'device-01',
  MaxRecords: 20,
  isLoadMore: false,
  Filter_OrderASC: false,
  Filter_OrderDESC: true,
  Filter_MessageTypePrivate: true,
  Filter_MessageTypePublic: false,
  IsShowLoading: true,
  IsEmptyMessage: false,
  IsRefreshing: false,
  HasUnread: false,
  WarningMessage: '',
  CurrentMessageInstanceId: '0',
  ForceInitiateLoginFlowDateTime: '',
  TotalPrivate: 3,
  TotalPublic: 16,
  SelectedFilter_OrderASC: false,
  SelectedFilter_MessageTypePrivate: true,
  SelectedFilter_MessageTypePublic: false,
};

const contactDetailsWire: EntityContactDetailsWire = {
  ContactPopupData: {
    ImageURL: '',
    EntityTypeId: 'Household',
    EntityId: '7001',
    IsAvatarImage: true,
    ActionName: '',
    Name: 'Medina Household',
    Locality: 'Bahia Blanca',
    TimezoneName: '',
    TimezoneOffset: 0,
    ShowPopup: false,
    DisplayContactNumber: '',
    IsFetchingTimezone: false,
    IsLoading: false,
    ShowTimezone: false,
    ShowImage: true,
    CountryName: 'Argentina',
    TitleTerminator: '',
  },
  CountryName: 'Argentina',
  Email: 'ana.medina@example.com',
  EntityName: 'Medina Household',
  EntitySubtitle: 'Bahia Blanca, Argentina',
  HomePhone: '+54 291 555 0101',
  LocalityId: '252',
  LocalityName: 'Bahia Blanca',
  MobilePhone: '+54 9 291 555 0101',
  Phone: '',
  WorkPhone: '',
};

const memberContact: MemberContactWithTimezone = {
  MobilePhoneNumber: '+54 291 555 0121',
  HomePhoneNumber: '',
  WorkPhoneNumber: '',
  Email: 'mateo.herrera@example.com',
  CountryCode: 'AR',
  LocalityId: '252',
  HouseholdId: '9101',
  Timezone: { TimezoneLabel: 'ART', OffsetSeconds: '-10800' },
  ContactDetails: {
    Id: '880101',
    Name: 'Mateo Herrera',
    Location: 'Bahia Blanca',
    AvatarURL: { Bucket: '', Path: '', SignedURL: '', Type: '', CropX: '0', CropY: '0', CropW: '0', CropH: '0' },
    IsBookmarked: false,
    IsDisabled: false,
  },
  LocalityName: 'Bahia Blanca',
  CountryName: 'Argentina',
};

describe('contact e-mail mappers', () => {
  it('toContactByEmailFormInputs sends the form as In_UI_ContactByEmailForm, attribute by attribute', () => {
    expect(toContactByEmailFormInputs(form)).toEqual({
      In_UI_ContactByEmailForm: {
        FirstName: 'Lucia',
        ContactMember: 'Mateo Herrera',
        EmailTo: 'mateo.herrera@example.com',
        Subject: 'Saturday supper',
        Message: 'We look forward to seeing you on Saturday.',
      },
    });
  });

  it('toOrbitContactEmailInputs sends SenderEmail and TargetHelpdeskEmail as ""', () => {
    expect(toOrbitContactEmailInputs(orbitEmail)).toEqual({
      IsContactHelpdesk: true,
      EventId: '7301',
      MilestoneId: 'M-12',
      TargetMemberId: '0',
      Subject: 'Orbit Helpdesk',
      UserSubject: 'Room change',
      Message: 'Could we have a room on the ground floor?',
      EmailInfo: { ...orbitEmail.emailInfo, SenderEmail: '', TargetHelpdeskEmail: '' },
    });
  });
});

describe('Contact Us mappers', () => {
  it('toLocalityTimezone and toCountryNames keep the fields that the screen reads', () => {
    expect(toLocalityTimezone({ Out_TimezoneName: 'ART', Out_TimezoneOffset: -10800 })).toEqual({
      timezoneName: 'ART',
      timezoneOffset: -10800,
    });
    expect(
      toCountryNames({
        Countries: {
          List: [
            { Code: 'AR', Name: 'Argentina' },
            { Code: 'NZ', Name: 'New Zealand' },
          ],
        },
      }),
    ).toEqual([
      { code: 'AR', name: 'Argentina' },
      { code: 'NZ', name: 'New Zealand' },
    ]);
    expect(toCountryNames({ Countries: { List: [] } })).toEqual([]);
  });

  it('toSendContactUsMessageInputs and toSendContactUsMessageResult', () => {
    const contactUsForm = {
      FullName: 'Lucia Vitale',
      Email: 'lucia.vitale@example.com',
      Country: 'Argentina',
      Locality: 'Bahia Blanca',
      PhoneNumber: '+54 291 555 0101',
      Message: 'The app does not show my bookmarks.',
    };
    expect(toSendContactUsMessageInputs(contactUsForm, 'account', 4, true)).toEqual({
      In_ContactUsForm: contactUsForm,
      In_ContactSubjectId: 'account',
      Rate: 4,
      Rate_UserWantToBeContacted: true,
    });
    expect(toSendContactUsMessageResult({ Out_ErrorMessage: '' })).toEqual({ out_ErrorMessage: '' });
  });
});

describe('LDM event e-mail mappers', () => {
  const inputs = {
    In_EventHostId: '88231',
    In_EventId: '70415',
    In_IsMessageGuest: false,
    In_IsContactOrganiser: true,
    EventDate: '',
    EventLocality: 'Bahia Blanca',
  };

  it('toEventEmailCoordinatorInputs sends the null EventDate as "1900-01-01"', () => {
    expect(toEventEmailCoordinatorInputs(inputs)).toEqual({ ...inputs, EventDate: '1900-01-01' });
    expect(toEventEmailCoordinatorInputs({ ...inputs, EventDate: '2026-10-03' }).EventDate).toBe('2026-10-03');
  });

  it('toEventEmailCoordinatorData keeps the record and writes the meal date as "YYYY-MM-DD"', () => {
    const wire = coordinatorWire('2026-10-03T20:00:00');
    expect(toEventEmailCoordinatorData(wire)).toEqual({
      coordinatorDetails: wire.Out_CoordinatorDetails.GetCoordinatorDetailsResponse,
      hasContent: true,
      eventName: "Lord's Day Meal at Bahia Blanca",
      eventDateText: '2026-10-03',
    });
    expect(toEventEmailCoordinatorData(coordinatorWire('')).eventDateText).toBe('1900-01-01');
  });
});

describe('message detail mappers', () => {
  it('toMessageInstanceResult keeps the fields that the block reads', () => {
    expect(
      toMessageInstanceResult(messageInstanceWire({ id: '81012', sentAs: 3, created: '2026-10-07T11:25:00' })),
    ).toEqual({
      message: {
        messageInstanceId: '81012',
        messageInstanceUserId: 7012,
        isRead: false,
        dateTimeCreated: '2026-10-07T11:25:00',
        title: 'Hall opening times',
        summary: 'The hall is open from 9 am.',
        isAdaptiveCard: false,
        messageTemplateTypeId: 2,
        messageTemplatePriorityId: 1,
        messageInfoTypeId: 1,
        sentAs: 3,
        senderTargetId: 3,
        senderTargetName: 'Directory',
        profileIconURL: '/UBT_CW/img/UBT_CW.directory_entity_logo.png',
        messageContent: '<p>The hall is open from 9 am.</p>',
        adaptiveCardContent: '',
        userName: 'Ana Medina',
        createdByMemberId: '900112',
      },
      isRetracted: false,
      isCleared: true,
    });
  });

  it('toMessageInstanceResult gives null for the "0" id, the null date and the NullIdentifier SentAs', () => {
    const { message } = toMessageInstanceResult(messageInstanceWire({ id: '0', sentAs: 0, created: NULL_DATE_TIME }));
    expect(message.messageInstanceId).toBeNull();
    expect(message.dateTimeCreated).toBeNull();
    expect(message.sentAs).toBeNull();
    expect(toMessageInstanceResult(messageInstanceWire({ id: '', sentAs: 0, created: '' })).message).toMatchObject({
      messageInstanceId: null,
      dateTimeCreated: null,
    });
  });

  it('toMessageTemplateParametersInputs adds MaxRecords 50 and StartIndex 0 to the block variables', () => {
    expect(toMessageTemplateParametersInputs(messageDetailInputs)).toEqual({
      ...messageDetailInputs,
      MaxRecords: 50,
      StartIndex: 0,
    });
  });

  it('toMessageParameters unwraps the list', () => {
    const row = (id: string, nameId: number, value: string) => ({
      MessageParameter: {
        Id: id,
        MessageTemplateId: '31',
        ParameterNameId: nameId,
        ParameterValue: value,
        Tenant_Id: 1,
      },
    });
    expect(toMessageParameters({ Count: 2, List: { List: [row('1', 1, '7301'), row('2', 4, 'Arrival')] } })).toEqual([
      { parameterNameId: 1, parameterValue: '7301' },
      { parameterNameId: 4, parameterValue: 'Arrival' },
    ]);
  });
});

describe('message list mappers', () => {
  const item = toMessageItem(listItemWire);

  it('toMessageItem keeps the fields that the list reads', () => {
    expect(item).toEqual({
      id: '81012',
      messageTemplateTypeId: 1,
      title: 'Monthly announcement for all',
      dateTimeCreated: '2026-10-07T11:25:00',
      messageTemplatePriorityId: 1,
      profileIconURL: '',
      isClear: false,
      isRead: false,
      createdByUserId: 7012,
      createdByMemberId: '900112',
      messageInfoTypeId: 1,
    });
  });

  it('toMessageListInputs sends the block variables, the totals as text, the null date and the list', () => {
    expect(toMessageListInputs(listVariables, { items: [item], hasUnreadMessages: true }, true)).toEqual({
      ...listVariables,
      TotalPrivate: '3',
      TotalPublic: '16',
      ForceInitiateLoginFlowDateTime: NULL_DATE_TIME,
      MessagesList: {
        HasUnreadMessages: true,
        Items: { List: [{ ...listItemWire, Summary: '', MessageSenderTargetName: '' }] },
        TotalCount: '0',
      },
      Trigger_PullToRefresh: true,
    });
    const dated = { ...listVariables, ForceInitiateLoginFlowDateTime: '2026-10-14T08:00:00' };
    expect(
      toMessageListInputs(dated, { items: [], hasUnreadMessages: false }, false).ForceInitiateLoginFlowDateTime,
    ).toBe('2026-10-14T08:00:00');
  });

  it('toMessagesResult unwraps the rows and reads CountUnreadMessages as a number', () => {
    expect(
      toMessagesResult({ Messages: { List: [listItemWire] }, HasUnreadMessages: true, CountUnreadMessages: '16' }),
    ).toEqual({ messages: [item], hasUnreadMessages: true, countUnreadMessages: 16 });
    expect(toMessagesResult({ Messages: { List: [] }, HasUnreadMessages: false, CountUnreadMessages: '' })).toEqual({
      messages: [],
      hasUnreadMessages: false,
      countUnreadMessages: 0,
    });
  });

  it('toMessageExists, toMarkMessageInputs and toMessageClearResult', () => {
    expect(toMessageExists({ Exist: true })).toBe(true);
    expect(toMarkMessageInputs('81012', listVariables)).toEqual({
      MessageInstanceId: '81012',
      DeviceHardwareId: 'device-01',
      SelectedHistorySearch: 'announcement',
      MessageTypePrivate: true,
      MessageTypePublic: false,
    });
    expect(toMessageClearResult({ HasUnreadMessages: true, IsHaveMessage: false, IsRead: true })).toEqual({
      hasUnreadMessages: true,
      isHaveMessage: false,
      isRead: true,
    });
  });

  it('toUnreadMessageCounts reads the two Long Integer counts as numbers', () => {
    expect(toUnreadMessageCounts({ NumberPublicUnreadMessages: '2', NumberPrivateUnreadMessages: '6' })).toEqual({
      publicCount: 2,
      privateCount: 6,
    });
    expect(toUnreadMessageCounts({ NumberPublicUnreadMessages: '', NumberPrivateUnreadMessages: '' })).toEqual({
      publicCount: 0,
      privateCount: 0,
    });
  });
});

describe('contact details and member contact mappers', () => {
  it('toEntityContactDetails keeps the fields that the block reads (not LocalityId)', () => {
    const details = toEntityContactDetails(contactDetailsWire);
    expect(details).toEqual({
      ContactPopupData: contactDetailsWire.ContactPopupData,
      EntityName: 'Medina Household',
      EntitySubtitle: 'Bahia Blanca, Argentina',
      Email: 'ana.medina@example.com',
      Phone: '',
      MobilePhone: '+54 9 291 555 0101',
      HomePhone: '+54 291 555 0101',
      WorkPhone: '',
      LocalityName: 'Bahia Blanca',
      CountryName: 'Argentina',
    });
    expect(details).not.toHaveProperty('LocalityId');
  });

  it('toMemberContacts unwraps the list and keeps each record as it is', () => {
    expect(toMemberContacts({ MemberContactList: { List: [memberContact] } })).toEqual([memberContact]);
    expect(toMemberContacts({ MemberContactList: { List: [] } })).toEqual([]);
  });
});
