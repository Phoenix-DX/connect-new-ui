import type { RequestHandler } from 'msw';
import { scenario } from '@/mocks/scenario';
import { collection, statefulHandler } from '@/mocks/store';
import { messageSenderName } from '@/mocks/fictional/content';

/* DataActionGetMessageInstance was never recorded (no fixture) and messages are person data: fictional values with
   the captured shape (analysis/calls.md #2). The captured message (MessageInstanceId 5965247): sender target Directory
   (3, SentAs set, so the title is "Directory"), the captured generic test label "Test Noti 56" as title and body (Q4),
   already read (no Wrapper_NotificationOpened in the capture), date of the captured masked length.
   Other ids come from the MessageList mock rows (shared store "MessageList.messages", P-MUTATION): a row with a
   ProfileIconURL is sent as Directory, a row without one is sent as a user (SentAs null → the sender photo from the
   signed-image mock, the name from the fictional senders of src/mocks/fictional/content.ts); body = "<p>" + title +
   "</p>" as captured. Unknown ids answer an empty message (not found).
   Wrapper_NotificationOpened answers IsRetracted False and marks the row read in both stores.
   GetMessageTemplateParametersByMessageTemplateId: the parameters of the seeded Orbit, host survey, Assemble and
   Sharing messages (fictional ids and names, the TST ParameterName ids); empty for the others.
   Get_OrbitNotificationParameters and Get_OrbitHostSurveyNotificationParameters read the values of the parameters
   OrbitEventId (2), OrbitEventName (3), OrbitStartDate (4), OrbitEndDate (5) and OrbitMilestoneId (7) ("" or the null
   date when missing): the server source is not available, this is the mock's reading of the parameter names.
   StoreAdaptiveCardResponses answers nothing. ShareObjectDetail_ExtendedShare DataActionGetShare answers a fictional
   shared household for ShareId 9001 and an unavailable share for any other id.
   Scenarios: real, empty (not found), error (HTTP 500), loading (never answers). */
const DIRECTORY_LOGO = '/UBT_CW/img/UBT_CW.directory_entity_logo.png';
const DIRECTORY = { Id: 3, Name: 'Directory' };

interface DetailSeed {
  Id: string;
  Title: string;
  /** Sender target of a seeded Orbit, host survey or Assemble message (else Directory or a user, see above). */
  SenderTarget?: { Id: number; Name: string };
  /** Message content of a seeded message (else "<p>" + Title + "</p>"). */
  Content?: string;
  AdaptiveCardContent?: string;
  DateTimeCreated: string;
  IsRead: boolean;
  IsClear: boolean;
  ProfileIconURL: string;
  CreatedByMemberId: string;
  MessageTemplateTypeId: number;
  MessageTemplatePriorityId: number;
  MessageInfoTypeId: number;
}

const seed = (): Record<string, unknown>[] => [
  {
    Id: '5965247',
    Title: 'Test Noti 56',
    DateTimeCreated: '2026-10-14T10:20:00',
    IsRead: true,
    IsClear: false,
    ProfileIconURL: DIRECTORY_LOGO,
    CreatedByMemberId: '0',
    MessageTemplateTypeId: 2,
    MessageTemplatePriorityId: 1,
    MessageInfoTypeId: 1,
  },
  {
    Id: '5965301',
    Title: 'Harvest Supper: your hosting details',
    SenderTarget: { Id: 2, Name: 'Orbit' },
    Content: '<p>The Harvest Supper at Millbrook Hall needs one more host family. Your timeline is ready.</p>',
    DateTimeCreated: '2026-10-20T08:45:00',
    IsRead: true,
    IsClear: false,
    ProfileIconURL: '',
    CreatedByMemberId: '0',
    MessageTemplateTypeId: 2,
    MessageTemplatePriorityId: 1,
    MessageInfoTypeId: 1,
  },
  {
    Id: '5965302',
    Title: 'Tell us how the Harvest Supper went',
    SenderTarget: { Id: 20, Name: 'Orbit' },
    Content: '<p>Thank you for hosting at Millbrook Hall. Please fill in the host survey.</p>',
    DateTimeCreated: '2026-10-21T19:10:00',
    IsRead: true,
    IsClear: false,
    ProfileIconURL: '',
    CreatedByMemberId: '0',
    MessageTemplateTypeId: 2,
    MessageTemplatePriorityId: 1,
    MessageInfoTypeId: 1,
  },
  {
    Id: '5965303',
    Title: 'Bible Reading meeting changed',
    SenderTarget: { Id: 21, Name: 'Assemble' },
    Content:
      '<p>Dear ##@@FirstName@@%%%%##, the Bible Reading meeting of Riverside Locality now starts at 7:30 pm.</p>',
    DateTimeCreated: '2026-10-22T07:30:00',
    IsRead: true,
    IsClear: false,
    ProfileIconURL: '',
    CreatedByMemberId: '0',
    MessageTemplateTypeId: 2,
    MessageTemplatePriorityId: 2,
    MessageInfoTypeId: 1,
  },
  {
    Id: '5965304',
    Title: 'A household was shared with you',
    DateTimeCreated: '2026-10-23T12:05:00',
    IsRead: true,
    IsClear: false,
    ProfileIconURL: DIRECTORY_LOGO,
    CreatedByMemberId: '0',
    MessageTemplateTypeId: 2,
    MessageTemplatePriorityId: 1,
    MessageInfoTypeId: 3,
  },
  {
    Id: '5965305',
    Title: 'Will you attend the Harvest Supper?',
    AdaptiveCardContent: JSON.stringify({
      type: 'AdaptiveCard',
      version: '1.3',
      body: [{ type: 'TextBlock', text: 'Harvest Supper at Millbrook Hall, Saturday 7 pm', wrap: true }],
      actions: [{ type: 'Action.Submit', title: 'I will attend', data: { answer: 'yes' } }],
    }),
    DateTimeCreated: '2026-10-24T09:00:00',
    IsRead: true,
    IsClear: false,
    ProfileIconURL: DIRECTORY_LOGO,
    CreatedByMemberId: '0',
    MessageTemplateTypeId: 2,
    MessageTemplatePriorityId: 1,
    MessageInfoTypeId: 1,
  },
];

/** The template parameters of the seeded messages, by message id (ParameterName ids of TST). */
const PARAMETERS: Record<string, [number, string][]> = {
  '5965301': [
    [2, '7301'],
    [3, 'Harvest Supper'],
    [7, 'M-7714'],
  ],
  '5965302': [
    [2, '7301'],
    [3, 'Harvest Supper'],
    [4, '2026-10-18T18:00:00'],
    [5, '2026-10-18T21:30:00'],
  ],
  '5965303': [
    [18, '4410'],
    [17, '4412'],
    [14, 'Bible Reading'],
  ],
  '5965304': [[1, '9001']],
};

type ParameterRow = { ParameterNameId: number; ParameterValue: string };
/** The value of a parameter in ListOfMessageParameters ("" when missing). */
const parameterValue = (listOfMessageParameters: unknown, nameId: number) =>
  ((listOfMessageParameters as { List?: ParameterRow[] } | undefined)?.List ?? []).find(
    (p) => p.ParameterNameId === nameId,
  )?.ParameterValue ?? '';

const details = collection('MessageDetail.messages', seed, 'Id');
/** The MessageList mock's rows (created by its module at load; read lazily). */
const listRows = () => collection('MessageList.messages', () => [], 'Id');

const NULL_DATE = '1900-01-01T00:00:00';

function wireMessage(d: DetailSeed | undefined) {
  const sentAsDirectory = d !== undefined && d.ProfileIconURL !== '';
  const target = d?.SenderTarget ?? (sentAsDirectory ? DIRECTORY : { Id: 0, Name: '' });
  return {
    MessagePriority: { Id: 0, Label: '', Order: 0, Is_Active: false },
    MessageContent: { Id: d ? '1' : '0', MessageContent: d ? (d.Content ?? `<p>${d.Title}</p>`) : '' },
    MessageTemplate: {
      Id: d ? '1' : '0',
      IsAdaptiveCard: d?.AdaptiveCardContent !== undefined,
      Title: d?.Title ?? '',
      Summary: '',
      MessageContentId: d ? '1' : '0',
      CreatedByUser: 0,
      CreatedDate: NULL_DATE,
      LastUpdated: NULL_DATE,
      UpdatedBy: 0,
      MessageTemplateStatusId: 0,
      MessageTemplateTypeId: d?.MessageTemplateTypeId ?? 0,
      MessageTemplatePriorityId: d?.MessageTemplatePriorityId ?? 0,
      MessageInfoTypeId: d?.MessageInfoTypeId ?? 0,
      AdaptiveCardJSONId: '0',
      SentAs: target.Id,
      SavedTemplateId: '0',
      MessageSendToTypeId: 0,
      MessageApplicationTargetId: 0,
      RecalledBy: 0,
      IsPushNotificationOnly: false,
      HideTitleOnPushNotification: false,
      HideBodyOnPushNotification: false,
    },
    MessageSenderTarget: {
      Id: target.Id,
      Name: target.Name,
      ProfileIconURL: d !== undefined && sentAsDirectory ? d.ProfileIconURL : '',
      Order: 0,
      Is_Active: target.Id !== 0,
      NotificationIcon: '',
      NotificationHeading: '',
    },
    MessageInstance: {
      Id: d?.Id ?? '0',
      MessageTemplateId: d ? '1' : '0',
      UserId: 0,
      DeviceHardwareId: '',
      IsSent: d !== undefined,
      IsReceived: d !== undefined,
      IsRead: d?.IsRead ?? false,
      IsReplied: false,
      IsClear: d?.IsClear ?? false,
      DateTimeCreated: d?.DateTimeCreated ?? NULL_DATE,
      NotificationUUID: '',
      SendAttemptCount: 0,
      LastSendAttemptDateTime: NULL_DATE,
      NextSendAttemptDateTime: NULL_DATE,
      CheckForReceiptCount: 0,
      LastCheckForReceiptDateTime: NULL_DATE,
      NextCheckForReceiptDateTime: NULL_DATE,
      SentToWebDevice: false,
      MessageError: '',
    },
    AdaptiveCardJSON: { Id: '0', AdaptiveCardContent: d?.AdaptiveCardContent ?? '' },
    User: {
      Id: 0,
      Name: target.Id !== 0 || d === undefined ? '' : messageSenderName(d.CreatedByMemberId),
      Username: '',
      Password: '',
      Email: '',
      MobilePhone: '',
      External_Id: '',
      Creation_Date: NULL_DATE,
      Last_Login: NULL_DATE,
      Is_Active: false,
    },
    CreatedByMemberId: d?.CreatedByMemberId ?? '0',
  };
}

function findDetail(id: unknown): DetailSeed | undefined {
  const own = details.get(id) as unknown as DetailSeed | undefined;
  if (own) return own;
  const row = listRows().get(id) as unknown as DetailSeed | undefined;
  return row;
}

/** DataActionGetShare of ShareObjectDetail_ExtendedShare: the fictional household of ShareId 9001, else an
    unavailable share (no ShareItem). */
function sharedObject(shareId: string) {
  const known = shareId === '9001';
  return {
    GetShareByIdResponse: {
      DateCreatedUTC: '2026-10-23T12:05:00',
      Id: shareId,
      ObjectId: known ? '61207' : '',
      ObjectName: known ? 'Lindqvist Household' : '',
      Details: {
        Sender: {
          CountryCode: 'SE',
          CountryId: '46',
          CountryName: 'Sweden',
          Email: '',
          FirstName: 'Elsa',
          FullName: 'Elsa Nyberg',
          HasAccess: true,
          Id: known ? '900131' : '',
          LastName: 'Nyberg',
          LocalityId: '310',
          LocalityName: 'Uppsala',
          MemberId: '900131',
        },
        ShareItem: {
          BirthType: '',
          CanAccess: known,
          CountryName: known ? 'Sweden' : '',
          DateTime: NULL_DATE,
          Description: '',
          Extension: { FullName: '', IsDeceased: false },
          GenderId: '',
          HouseholderId: known ? '61207' : '',
          Id: known ? '61207' : '',
          IsVisible: known,
          Label: known ? 'Uppsala' : '',
          LocalityName: known ? 'Uppsala' : '',
          ParentsName: '',
          Photo: { Bucket: '', Path: '', SignedPath: '', Type: '' },
          Subtitle: known ? 'Anders and Maja Lindqvist' : '',
          Title: known ? 'Lindqvist Household' : '',
          Type: '',
        },
      },
    },
    IsShareAvailable: known,
    ShareObjectType: {
      APIKey: '',
      Id: 'Household',
      Is_Active: true,
      Label: 'Household',
      LabelPrefix: 'a',
      NotificationTitle: '',
      Order: 1,
    },
    UpdateDate: NULL_DATE,
  };
}

export const handlers: RequestHandler[] = [
  statefulHandler('Connect2_LegacyShared', 'ScreenBlock_MessageDetail/DataActionGetMessageInstance', (inputs) => {
    const d = scenario() === 'empty' ? undefined : findDetail(inputs.MessageInstanceId);
    return {
      Message: wireMessage(d),
      IsRetracted: false,
      IsCleared: d?.IsClear ?? false,
      // Fictional delimiters (the captured answer has empty ones for a message of an unknown sender; only Assemble
      // messages use them). Empty delimiters make SetTextPlaceholdersValue recurse for ever (known-original-bugs B19).
      PlaceholderDelimiters: {
        Delimiters: { Delimiter_Function: '@@', Delimiter_Parameter: '%%', Delimiter_Placeholder: '##' },
      },
    };
  }),
  statefulHandler(
    'Connect2_LegacyShared',
    'ScreenBlock_MessageDetail/ScreenDataSetGetMessageTemplateParametersByMessageTemplateId',
    ({ MessageInstanceId }) => {
      const rows = (PARAMETERS[String(MessageInstanceId)] ?? []).map(([nameId, value], index) => ({
        MessageParameter: {
          Id: String(index + 1),
          MessageTemplateId: '1',
          ParameterNameId: nameId,
          ParameterValue: value,
          Tenant_Id: 1,
        },
      }));
      return { List: { List: rows }, Count: rows.length };
    },
  ),
  statefulHandler('Connect2_LegacyShared', 'ActionGet_OrbitNotificationParameters', ({ ListOfMessageParameters }) => {
    const list = ListOfMessageParameters;
    return {
      OrbitMilestoneId: parameterValue(list, 7),
      OrbitEventId: parameterValue(list, 2),
      OrbitEventName: parameterValue(list, 3),
    };
  }),
  statefulHandler(
    'Connect2_LegacyShared',
    'ActionGet_OrbitHostSurveyNotificationParameters',
    ({ ListOfMessageParameters }) => {
      const list = ListOfMessageParameters;
      return {
        OrbitEventId: parameterValue(list, 2),
        OrbitEventName: parameterValue(list, 3),
        OrbitStartDate: parameterValue(list, 4) || NULL_DATE,
        OrbitEndDate: parameterValue(list, 5) || NULL_DATE,
      };
    },
  ),
  statefulHandler('Connect2_LegacyShared', 'ActionStoreAdaptiveCardResponses', () => ({})),
  statefulHandler('Connect2_LegacyShared', 'ShareObjectDetail_ExtendedShare/DataActionGetShare', ({ ShareId }) =>
    sharedObject(String(ShareId)),
  ),
  statefulHandler('Connect2_LegacyShared', 'ActionWrapper_NotificationOpened', ({ MessageInstanceId }) => {
    if (details.get(MessageInstanceId)) details.upsert({ Id: MessageInstanceId, IsRead: true });
    if (listRows().get(MessageInstanceId)) listRows().upsert({ Id: MessageInstanceId, IsRead: true });
    return { IsRetracted: false };
  }),
];
