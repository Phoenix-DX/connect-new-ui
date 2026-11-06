import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import { wireMessage, type MessageSeed } from '@/mocks/fictional/messages';
import {
  findNotificationRow,
  isCapturedDetail,
  notificationRows,
  notificationSenderTarget,
  type MessageListItemRow,
  CAPTURED_DETAIL_CARD,
} from '@/mocks/fictional/notifications';
import { scenario } from '@/mocks/scenario';
import { statefulHandler } from '@/mocks/store';

/* Mocks of NotificationDetails (live TST 2026-11-05, UBTConnect.App_Notifications.NotificationDetails.mvc.js = ND).
   Messages are person data and the calls were never recorded: fictional values with the structure of the
   Connect2_LegacyShared records (the UBTConnect copies are the same structures, live UBTConnect.model.js).
   - DataActionGetMessageInstance (ND:800-827): the message of a notification of the shared collection
     (src/mocks/fictional/notifications.ts, the 68 notifications of the Notifications mock with the read state that
     MarkAsRead and Wrapper_NotificationOpened set) or of the captured record 5496739 (empty body). A notification with
     a logo is sent as its sender target (Directory, Assemble, Connect, Lord's Day Meal), one without a logo is sent as
     a user (its invented author: the header shows the fictional name, the photo comes from the signed-image mock).
     Body "<p>" + title + "</p>", as the MessageDetail mock. An unknown id answers the empty record (not found).
     IsRetracted False, IsCleared False; the delimiters are fictional (empty ones make SetTextPlaceholdersValue recurse
     for ever, known-original-bugs B19).
   - ScreenDataSetGetMessageTemplateParametersByMessageTemplateId (ND:748-775): the Assemble event parameters
     (fictional ids, the TST ParameterName ids 18, 17, 14) for a message sent as Assemble; empty for the others.
   - ActionWrapper_NotificationOpened (ND:724-737): IsRead True in the shared collection; IsRetracted False.
   Scenarios: real, empty (not found), error (HTTP 500), loading (never answers). */

const DELIMITERS = { Delimiters: { Delimiter_Function: '@@', Delimiter_Parameter: '%%', Delimiter_Placeholder: '##' } };
const ASSEMBLE = 21;

/** The message seed of a notification. */
function seedOf(row: MessageListItemRow): MessageSeed {
  const target = notificationSenderTarget(row);
  return {
    Id: row.Id,
    Title: row.Title,
    ...(target === undefined ? {} : { SenderTarget: target }),
    Summary: row.Summary,
    ...(isCapturedDetail(row.Id) ? { AdaptiveCardContent: CAPTURED_DETAIL_CARD } : {}),
    DateTimeCreated: row.DateTimeCreated,
    IsRead: row.IsRead,
    IsClear: row.IsClear,
    ProfileIconURL: row.ProfileIconURL,
    CreatedByMemberId: row.CreatedByMemberId,
    MessageTemplateTypeId: row.MessageTemplateTypeId,
    MessageTemplatePriorityId: row.MessageTemplatePriorityId,
    MessageInfoTypeId: row.MessageInfoTypeId,
  };
}

const findMessage = (messageInstanceId: string | undefined): MessageSeed | undefined => {
  if (scenario() === 'empty' || messageInstanceId === undefined) return undefined;
  const row = findNotificationRow(messageInstanceId);
  return row === undefined ? undefined : seedOf(row);
};

/** The parameters of an Assemble message: the parent and the instance of a fictional event, and its type. */
const assembleParameters = (messageTemplateId: string) =>
  (
    [
      [18, '4410'],
      [17, '4412'],
      [14, 'Bible Reading'],
    ] as const
  ).map(([nameId, value], index) => ({
    MessageParameter: {
      Id: String(index + 1),
      MessageTemplateId: messageTemplateId,
      ParameterNameId: nameId,
      ParameterValue: value,
      Tenant_Id: 1,
    },
  }));

/** GetMessageInstance.Message of the seed: the UBTConnect records carry Tenant_Id (1, as the parameter rows) on
    MessageContent, MessageInstance, MessageTemplate,
    User and AdaptiveCardJSON, which the shared record does not. */
export function notificationMessage(seed: MessageSeed | undefined) {
  const message = wireMessage(seed);
  return {
    ...message,
    MessageContent: { ...message.MessageContent, Tenant_Id: 1 },
    MessageTemplate: { ...message.MessageTemplate, Tenant_Id: 1 },
    User: { ...message.User, Tenant_Id: 1 },
    MessageInstance: { ...message.MessageInstance, Tenant_Id: 1 },
    AdaptiveCardJSON: { ...message.AdaptiveCardJSON, Tenant_Id: 1 },
  };
}

export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect', 'NotificationDetails/DataActionGetMessageInstance', ({ MessageInstanceId }) => ({
    Message: notificationMessage(findMessage(MessageInstanceId)),
    IsRetracted: false,
    IsCleared: false,
    PlaceholderDelimiters: DELIMITERS,
  })),
  contractHandler(
    'UBTConnect',
    'NotificationDetails/ScreenDataSetGetMessageTemplateParametersByMessageTemplateId',
    ({ MessageInstanceId, MessageTemplateId }) => {
      const message = findMessage(MessageInstanceId);
      const rows = message?.SenderTarget?.Id === ASSEMBLE ? assembleParameters(MessageTemplateId ?? '0') : [];
      return { List: { List: rows }, Count: rows.length };
    },
  ),
  statefulHandler('UBTConnect', 'ActionWrapper_NotificationOpened', ({ MessageInstanceId }) => {
    const rows = notificationRows();
    const row = rows.get(MessageInstanceId);
    if (row) rows.upsert({ ...row, IsRead: true });
    return { IsRetracted: false };
  }),
];
