import type { RequestHandler } from 'msw';
import { scenario } from '../../mocks/scenario';
import { collection, statefulHandler } from '../../mocks/store';
import { messageSenderName } from '../../mocks/fictional/content';

/* DataActionGetMessageInstance was never recorded (no fixture) and messages are person data: fictional values with
   the captured shape (analysis/calls.md #2). The captured message (MessageInstanceId 5965247): sender target Directory
   (3, SentAs set, so the title is "Directory"), the captured generic test label "Test Noti 56" as title and body (Q4),
   already read (no Wrapper_NotificationOpened in the capture), date of the captured masked length.
   Other ids come from the MessageList mock rows (shared store "MessageList.messages", P-MUTATION): a row with a
   ProfileIconURL is sent as Directory, a row without one is sent as a user (SentAs null → the sender photo from the
   signed-image mock, the name from the fictional senders of src/mocks/fictional/content.ts); body = "<p>" + title +
   "</p>" as captured. Unknown ids answer an empty message (not found).
   Wrapper_NotificationOpened answers IsRetracted False and marks the row read in both stores.
   GetMessageTemplateParametersByMessageTemplateId: no seeded message needs it (Q1): empty list.
   Scenarios: real, empty (not found), error (HTTP 500), loading (never answers). */
const DIRECTORY_LOGO = '/UBT_CW/img/UBT_CW.directory_entity_logo.png';
const DIRECTORY = { Id: 3, Name: 'Directory' };

interface DetailSeed {
  Id: string;
  Title: string;
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
];

const details = collection('MessageDetail.messages', seed, 'Id');
/** The MessageList mock's rows (created by its module at load; read lazily). */
const listRows = () => collection('MessageList.messages', () => [], 'Id');

const NULL_DATE = '1900-01-01T00:00:00';

function wireMessage(d: DetailSeed | undefined) {
  const sentAsDirectory = d !== undefined && d.ProfileIconURL !== '';
  return {
    MessagePriority: { Id: 0, Label: '', Order: 0, Is_Active: false },
    MessageContent: { Id: d ? '1' : '0', MessageContent: d ? `<p>${d.Title}</p>` : '' },
    MessageTemplate: {
      Id: d ? '1' : '0',
      IsAdaptiveCard: false,
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
      SentAs: sentAsDirectory ? DIRECTORY.Id : 0,
      SavedTemplateId: '0',
      MessageSendToTypeId: 0,
      MessageApplicationTargetId: 0,
      RecalledBy: 0,
      IsPushNotificationOnly: false,
      HideTitleOnPushNotification: false,
      HideBodyOnPushNotification: false,
    },
    MessageSenderTarget: {
      Id: sentAsDirectory ? DIRECTORY.Id : 0,
      Name: sentAsDirectory ? DIRECTORY.Name : '',
      ProfileIconURL: d !== undefined && sentAsDirectory ? d.ProfileIconURL : '',
      Order: 0,
      Is_Active: sentAsDirectory,
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
    AdaptiveCardJSON: { Id: '0', AdaptiveCardContent: '' },
    User: {
      Id: 0,
      Name: sentAsDirectory || d === undefined ? '' : messageSenderName(d.CreatedByMemberId),
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

export const handlers: RequestHandler[] = [
  statefulHandler('Connect2_LegacyShared', 'ScreenBlock_MessageDetail/DataActionGetMessageInstance', (inputs) => {
    const d = scenario() === 'empty' ? undefined : findDetail(inputs.MessageInstanceId);
    return {
      Message: wireMessage(d),
      IsRetracted: false,
      IsCleared: d?.IsClear ?? false,
      PlaceholderDelimiters: {
        Delimiters: { Delimiter_Function: '', Delimiter_Parameter: '', Delimiter_Placeholder: '' },
      },
    };
  }),
  statefulHandler(
    'Connect2_LegacyShared',
    'ScreenBlock_MessageDetail/ScreenDataSetGetMessageTemplateParametersByMessageTemplateId',
    () => ({ List: { List: [] }, Count: 0 }),
  ),
  statefulHandler('Connect2_LegacyShared', 'ActionWrapper_NotificationOpened', ({ MessageInstanceId }) => {
    if (details.get(MessageInstanceId)) details.upsert({ Id: MessageInstanceId, IsRead: true });
    if (listRows().get(MessageInstanceId)) listRows().upsert({ Id: MessageInstanceId, IsRead: true });
    return { IsRetracted: false };
  }),
];
