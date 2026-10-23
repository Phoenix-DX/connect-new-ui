import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';
import { osDate, osList, osNumber, wireList } from '@/legacy/os/os-wire';
import type {
  ContactByEmailForm,
  ContactUsForm,
  CountryName,
  EntityContactDetails,
  EventEmailCallInputs,
  EventEmailCoordinatorData,
  LocalityTimezone,
  MemberContactWithTimezone,
  MessageClearResult,
  MessageDetailCallInputs,
  MessageInstanceResult,
  MessageItem,
  MessageListCallInputs,
  MessageParameter,
  MessagesList,
  MessagesResult,
  OrbitContactEmail,
  SendContactUsMessageResult,
} from './types';

/* ---- Wire types (as the contract describes them) ---- */

type LegacySharedPath<A extends string> = PathOf<'Connect2_LegacyShared', A>;

/** The inputs of SendContactMemberEmail and SendContactLDMCoordinatorEmail (the same record). */
export type ContactByEmailFormInputsWire = ActionInputs<PathOf<'UBTConnect', 'ServiceAPISendContactMemberEmail'>>;
/** The inputs of SendContactEmail (UBTConnect ContactFlow and Connect2_OrbitMobile_MUI ScreenBlock_ContactForm). */
export type OrbitContactEmailInputsWire = ActionInputs<PathOf<'UBTConnect', 'ActionSendContactEmail'>>;
/** The outputs of DataAction_GetLocalityTimezone. */
export type LocalityTimezoneWire = ActionOutputs<
  PathOf<'UBTConnect', 'ContactUsDetails/DataActionDataAction_GetLocalityTimezone'>
>;
/** The outputs of DataAction_GetCountriesNames. */
export type CountryNamesWire = ActionOutputs<
  PathOf<'UBTConnect', 'ContactUsDetails/DataActionDataAction_GetCountriesNames'>
>;
/** The inputs of SendContactUsMessage. */
export type SendContactUsMessageInputsWire = ActionInputs<PathOf<'UBTConnect', 'ServiceAPISendContactUsMessage'>>;
/** The outputs of SendContactUsMessage. */
export type SendContactUsMessageWire = ActionOutputs<PathOf<'UBTConnect', 'ServiceAPISendContactUsMessage'>>;
/** The inputs of DataActionGetCoordinatorDetails of ScreenBlock_Event_Email_V2. */
export type EventEmailCoordinatorInputsWire = ActionInputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_Event_Email_V2/DataActionGetCoordinatorDetails'>
>;
/** The outputs of DataActionGetCoordinatorDetails of ScreenBlock_Event_Email_V2. */
export type EventEmailCoordinatorWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_Event_Email_V2/DataActionGetCoordinatorDetails'>
>;
/** The outputs of DataActionGetMessageInstance. */
export type MessageInstanceWire = ActionOutputs<
  LegacySharedPath<'ScreenBlock_MessageDetail/DataActionGetMessageInstance'>
>;
type MessageTemplateParametersPath =
  LegacySharedPath<'ScreenBlock_MessageDetail/ScreenDataSetGetMessageTemplateParametersByMessageTemplateId'>;
/** The inputs of the aggregate GetMessageTemplateParametersByMessageTemplateId. */
export type MessageTemplateParametersInputsWire = ActionInputs<MessageTemplateParametersPath>;
/** The outputs of the aggregate GetMessageTemplateParametersByMessageTemplateId. */
export type MessageTemplateParametersWire = ActionOutputs<MessageTemplateParametersPath>;
/** The inputs of DataActionGetMessages (the same block variables as DataActionGetMessageInstanceById2). */
export type MessageListInputsWire = ActionInputs<LegacySharedPath<'ScreenBlock_MessageList/DataActionGetMessages'>>;
/** The outputs of DataActionGetMessages. */
export type MessagesWire = ActionOutputs<LegacySharedPath<'ScreenBlock_MessageList/DataActionGetMessages'>>;
/** MessageListItem (Connect2_LegacyShared), as it travels. */
export type MessageListItemWire = MessagesWire['Messages']['List'][number];
/** The outputs of DataActionGetMessageInstanceById2. */
export type MessageExistsWire = ActionOutputs<
  LegacySharedPath<'ScreenBlock_MessageList/DataActionGetMessageInstanceById2'>
>;
/** The inputs of MarkMessageAsRead and MarkMessageAsClear (the same inputs). */
export type MarkMessageInputsWire = ActionInputs<LegacySharedPath<'ActionMarkMessageAsRead'>>;
/** The outputs of MarkMessageAsClear. */
export type MessageClearWire = ActionOutputs<LegacySharedPath<'ActionMarkMessageAsClear'>>;
/** The outputs of GetNumberUnreadMessages: in unreadMessages.ts (decision W18). */
export type { UnreadMessageCountsWire } from './unreadMessages';
/** The outputs of GetMemberContactByCacheKey. */
export type MemberContactsWire = ActionOutputs<LegacySharedPath<'ActionGetMemberContactByCacheKey'>>;
/** The outputs of DataActionFetchContactDetails. */
export type EntityContactDetailsWire = ActionOutputs<
  PathOf<'UBTConnect', 'Directory_EntityDetailsActions/DataActionFetchContactDetails'>
>;

/** The OutSystems null DateTime, as the screens send it. */
const NULL_DATE_TIME = '1900-01-01T00:00:00';

/* ---- Contact e-mails ---- */

/** In_UI_ContactByEmailForm: the form record, attribute by attribute. */
export const toContactByEmailFormInputs = (form: ContactByEmailForm): ContactByEmailFormInputsWire => ({
  In_UI_ContactByEmailForm: {
    FirstName: form.firstName,
    ContactMember: form.contactMember,
    EmailTo: form.emailTo,
    Subject: form.subject,
    Message: form.message,
  },
});

/** The inputs of SendContactEmail. EmailInfo's SenderEmail and TargetHelpdeskEmail stay "": no screen sets them. */
export const toOrbitContactEmailInputs = (email: OrbitContactEmail): OrbitContactEmailInputsWire => ({
  IsContactHelpdesk: email.isContactHelpdesk,
  EventId: email.eventId,
  MilestoneId: email.milestoneId,
  TargetMemberId: email.targetMemberId,
  Subject: email.subject,
  UserSubject: email.userSubject,
  Message: email.message,
  EmailInfo: {
    EventName: email.emailInfo.EventName,
    SenderFullName: email.emailInfo.SenderFullName,
    SenderEmail: '',
    HostName: email.emailInfo.HostName,
    HostEmail: email.emailInfo.HostEmail,
    MilestoneName: email.emailInfo.MilestoneName,
    FormattedDateTime: email.emailInfo.FormattedDateTime,
    TargetHelpdeskEmail: '',
  },
});

/* ---- Contact Us ---- */

/** The time zone of DataAction_GetLocalityTimezone. */
export const toLocalityTimezone = (wire: LocalityTimezoneWire): LocalityTimezone => ({
  timezoneName: wire.Out_TimezoneName,
  timezoneOffset: wire.Out_TimezoneOffset,
});

/** The countries of DataAction_GetCountriesNames: Countries, unwrapped. */
export const toCountryNames = (wire: CountryNamesWire): CountryName[] =>
  osList(wire.Countries).map((c) => ({ code: c.Code, name: c.Name }));

/** The inputs of SendContactUsMessage: the form as it is, the subject, the rate and the "contact me" choice. */
export const toSendContactUsMessageInputs = (
  form: ContactUsForm,
  contactSubjectId: string,
  rate: number,
  userWantToBeContacted: boolean,
): SendContactUsMessageInputsWire => ({
  In_ContactUsForm: form,
  In_ContactSubjectId: contactSubjectId,
  Rate: rate,
  Rate_UserWantToBeContacted: userWantToBeContacted,
});

/** The output of SendContactUsMessage. */
export const toSendContactUsMessageResult = (wire: SendContactUsMessageWire): SendContactUsMessageResult => ({
  out_ErrorMessage: wire.Out_ErrorMessage,
});

/* ---- LDM event e-mail ---- */

/** The block inputs that DataActionGetCoordinatorDetails sends. The null EventDate travels as "1900-01-01". */
export const toEventEmailCoordinatorInputs = (inputs: EventEmailCallInputs): EventEmailCoordinatorInputsWire => ({
  In_EventId: inputs.In_EventId,
  In_EventHostId: inputs.In_EventHostId,
  In_IsMessageGuest: inputs.In_IsMessageGuest,
  In_IsContactOrganiser: inputs.In_IsContactOrganiser,
  EventDate: inputs.EventDate === '' ? '1900-01-01' : inputs.EventDate,
  EventLocality: inputs.EventLocality,
});

/** DateToText(DateTimeToDate(dateTime)): the "YYYY-MM-DD" part of an OutSystems Date Time text; the null date
    "1900-01-01" when there is none (the text OutSystems shows for it). */
const dateTimeToDateText = (dateTime: string): string => /^\d{4}-\d{2}-\d{2}/.exec(dateTime)?.[0] ?? '1900-01-01';

/** The coordinator of DataActionGetCoordinatorDetails, the content flag, the meal name and the meal date. */
export const toEventEmailCoordinatorData = (wire: EventEmailCoordinatorWire): EventEmailCoordinatorData => ({
  coordinatorDetails: wire.Out_CoordinatorDetails.GetCoordinatorDetailsResponse,
  hasContent: wire.Out_HasContent,
  eventName: wire.EventName,
  eventDateText: dateTimeToDateText(wire.Out_CoordinatorDetails.GetCoordinatorDetailsResponse.EventDate),
});

/* ---- Message detail ---- */

/** The message of GetMessageInstance with the fields that the block reads: "" or "0" instance id, the null date and
    the NullIdentifier SentAs become null. */
export const toMessageInstanceResult = (wire: MessageInstanceWire): MessageInstanceResult => {
  const m = wire.Message;
  const instanceId = m.MessageInstance.Id;
  return {
    message: {
      messageInstanceId: instanceId === '' || instanceId === '0' ? null : instanceId,
      messageInstanceUserId: m.MessageInstance.UserId,
      isRead: m.MessageInstance.IsRead,
      dateTimeCreated: osDate(m.MessageInstance.DateTimeCreated),
      title: m.MessageTemplate.Title,
      summary: m.MessageTemplate.Summary,
      isAdaptiveCard: m.MessageTemplate.IsAdaptiveCard,
      messageTemplateTypeId: m.MessageTemplate.MessageTemplateTypeId,
      messageTemplatePriorityId: m.MessageTemplate.MessageTemplatePriorityId,
      messageInfoTypeId: m.MessageTemplate.MessageInfoTypeId,
      sentAs: m.MessageTemplate.SentAs === 0 ? null : m.MessageTemplate.SentAs,
      senderTargetId: m.MessageSenderTarget.Id,
      senderTargetName: m.MessageSenderTarget.Name,
      profileIconURL: m.MessageSenderTarget.ProfileIconURL,
      messageContent: m.MessageContent.MessageContent,
      adaptiveCardContent: m.AdaptiveCardJSON.AdaptiveCardContent,
      userName: m.User.Name,
      createdByMemberId: m.CreatedByMemberId,
    },
    isRetracted: wire.IsRetracted,
    isCleared: wire.IsCleared,
  };
};

/** The block variables of the aggregate, with MaxRecords 50 and StartIndex 0 (GetMessageInstanceByIdOnAfterFetch). */
export const toMessageTemplateParametersInputs = (
  inputs: MessageDetailCallInputs,
): MessageTemplateParametersInputsWire => ({
  ...inputs,
  MaxRecords: 50,
  StartIndex: 0,
});

/** The parameters of the aggregate: List, unwrapped, with the name id and the value. */
export const toMessageParameters = (wire: MessageTemplateParametersWire): MessageParameter[] =>
  osList(wire.List).map((row) => ({
    parameterNameId: row.MessageParameter.ParameterNameId,
    parameterValue: row.MessageParameter.ParameterValue,
  }));

/* ---- Message list ---- */

/** A row of DataActionGetMessages, with the fields that the list reads. */
export const toMessageItem = (w: MessageListItemWire): MessageItem => ({
  id: w.Id,
  messageTemplateTypeId: w.MessageTemplateTypeId,
  title: w.Title,
  dateTimeCreated: w.DateTimeCreated,
  messageTemplatePriorityId: w.MessageTemplatePriorityId,
  profileIconURL: w.ProfileIconURL,
  isClear: w.IsClear,
  isRead: w.IsRead,
  createdByUserId: w.CreatedByUserId,
  createdByMemberId: w.CreatedByMemberId,
  messageInfoTypeId: w.MessageInfoTypeId,
});

/** A row of the block's MessagesList as it travels back to the server. The list does not keep Summary and
    MessageSenderTargetName: they travel as "". */
const toMessageListItemWire = (m: MessageItem): MessageListItemWire => ({
  Id: m.id,
  MessageTemplateTypeId: m.messageTemplateTypeId,
  Title: m.title,
  Summary: '',
  DateTimeCreated: m.dateTimeCreated,
  MessageTemplatePriorityId: m.messageTemplatePriorityId,
  ProfileIconURL: m.profileIconURL,
  IsClear: m.isClear,
  IsRead: m.isRead,
  CreatedByUserId: m.createdByUserId,
  CreatedByMemberId: m.createdByMemberId,
  MessageInfoTypeId: m.messageInfoTypeId,
  MessageSenderTargetName: '',
});

/** screenData.variables of ScreenBlock_MessageList (OutSystems sends every block variable and input with its data
    actions; the names are the contract's). MessagesList keeps TotalCount 0 (never assigned in the block). */
export const toMessageListInputs = (
  variables: MessageListCallInputs,
  list: MessagesList,
  triggerPullToRefresh: boolean,
): MessageListInputsWire => ({
  ...variables,
  TotalPrivate: String(variables.TotalPrivate),
  TotalPublic: String(variables.TotalPublic),
  ForceInitiateLoginFlowDateTime: variables.ForceInitiateLoginFlowDateTime || NULL_DATE_TIME,
  MessagesList: {
    HasUnreadMessages: list.hasUnreadMessages,
    Items: wireList(list.items.map(toMessageListItemWire)),
    TotalCount: '0',
  },
  Trigger_PullToRefresh: triggerPullToRefresh,
});

/** The rows, HasUnreadMessages and CountUnreadMessages (Long Integer text → number) of DataActionGetMessages. */
export const toMessagesResult = (wire: MessagesWire): MessagesResult => ({
  messages: osList(wire.Messages).map(toMessageItem),
  hasUnreadMessages: wire.HasUnreadMessages,
  countUnreadMessages: osNumber(wire.CountUnreadMessages),
});

/** Exist of DataActionGetMessageInstanceById2. */
export const toMessageExists = (wire: MessageExistsWire): boolean => wire.Exist;

/** The inputs of MarkMessageAsRead and MarkMessageAsClear: the message and the filters of the block. */
export const toMarkMessageInputs = (
  messageInstanceId: string,
  variables: MessageListCallInputs,
): MarkMessageInputsWire => ({
  MessageInstanceId: messageInstanceId,
  DeviceHardwareId: variables.DeviceHardwareId,
  SelectedHistorySearch: variables.SelectedHistorySearch,
  MessageTypePrivate: variables.Filter_MessageTypePrivate,
  MessageTypePublic: variables.Filter_MessageTypePublic,
});

/** The outputs of MarkMessageAsClear. */
export const toMessageClearResult = (wire: MessageClearWire): MessageClearResult => ({
  hasUnreadMessages: wire.HasUnreadMessages,
  isHaveMessage: wire.IsHaveMessage,
  isRead: wire.IsRead,
});

/** The two counts of GetNumberUnreadMessages: in unreadMessages.ts, with the app-start call (decision W18). */
export { toUnreadMessageCounts } from './unreadMessages';

/* ---- Contact details and member contacts ---- */

/** The contact details of DataActionFetchContactDetails, with the fields that the block reads. */
export const toEntityContactDetails = (wire: EntityContactDetailsWire): EntityContactDetails => ({
  ContactPopupData: wire.ContactPopupData,
  EntityName: wire.EntityName,
  EntitySubtitle: wire.EntitySubtitle,
  Email: wire.Email,
  Phone: wire.Phone,
  MobilePhone: wire.MobilePhone,
  HomePhone: wire.HomePhone,
  WorkPhone: wire.WorkPhone,
  LocalityName: wire.LocalityName,
  CountryName: wire.CountryName,
});

/** The member contacts of GetMemberContactByCacheKey: MemberContactList, unwrapped, each record as it is. */
export const toMemberContacts = (wire: MemberContactsWire): MemberContactWithTimezone[] =>
  osList(wire.MemberContactList);
