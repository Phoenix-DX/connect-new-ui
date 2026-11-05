import { messageSenderName } from './content';

/* The message record of GetMessageInstance (Connect2_LegacyShared ScreenBlock_MessageDetail, and the same structure in
   the UBTConnect screen NotificationDetails: MessagePriority, MessageContent, MessageTemplate, MessageSenderTarget,
   MessageInstance, AdaptiveCardJSON (Comms_CS), User (ServiceCenter) and CreatedByMemberId; live TST model of
   2026-11-05, UBTConnect.model.js), built from a fictional seed. Shared by the mocks of pages/MessageDetail and
   pages/NotificationDetails. A seed with a ProfileIconURL and no SenderTarget is sent as Directory; a seed without
   either is sent as a user (SentAs null), whose name comes from the fictional senders of content.ts. No seed gives the
   empty record (a message that was not found). */
const DIRECTORY = { Id: 3, Name: 'Directory' };

const NULL_DATE = '1900-01-01T00:00:00';

/** The fields of a fictional message. */
export interface MessageSeed {
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

/** GetMessageInstance.Message of the seed (the empty record without one). */
export function wireMessage(d: MessageSeed | undefined) {
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
