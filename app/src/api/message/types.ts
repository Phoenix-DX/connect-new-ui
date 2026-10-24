import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';
import type { LongId } from '@/lib/os-wire';

/* Domain types of the message calls: the contact e-mails (UBTConnect ContactFlow, the Orbit contact form, the LDM and
   household e-mails), the Contact Us screen, the in-app messages (Connect2_LegacyShared MyNotifications), the unread
   count, the contact details of a directory entity and the member contacts. The fields are those that the UI reads.
   Each type has the shape that its readers use today, so no caller changes: the OutSystems names where a screen reads
   the record as it travels, camelCase where a screen mapped the record. Long Integer ids are text. The wire types stay
   in src/api/schema.d.ts. The call inputs that travel as they are are type aliases, not interfaces: the contract
   inputs have an index signature. */

/* ---- Contact e-mails ---- */

/** Connect_Communication_CS.UI_ContactByEmailFormRec: the form of the ContactByEmail screens (ContactByEmailMember,
    ContactByEmailOneSchoolGlobal, ContactByEmailLDMCoordinator), sent as In_UI_ContactByEmailForm. */
export interface ContactByEmailForm {
  firstName: string;
  contactMember: string;
  emailTo: string;
  subject: string;
  message: string;
}

/** UBT_Email.OrbitEmailInformation, with the fields that the screens set. SenderEmail and TargetHelpdeskEmail travel
    as "": no screen sets them. */
export interface OrbitEmailInfo {
  EventName: string;
  SenderFullName: string;
  HostName: string;
  HostEmail: string;
  MilestoneName: string;
  FormattedDateTime: string;
}

/** The inputs of SendContactEmail (server action of Connect2_OrbitMobile_BL): the e-mail to the Orbit helpdesk or to a
    host, and its OrbitEmailInformation. Long Integer ids are text ("0" = null). */
export interface OrbitContactEmail {
  isContactHelpdesk: boolean;
  eventId: string;
  milestoneId: string;
  targetMemberId: string;
  subject: string;
  userSubject: string;
  message: string;
  emailInfo: OrbitEmailInfo;
}

/** UBT_Email.UserContactRequest: the input of UserContactUser (ScreenBlock_Household_Email) and of EventContact
    (ScreenBlock_Event_Email_V2). The blocks build the record as it travels, so the domain type is the contract type. */
export type UserContactRequest = ActionInputs<
  PathOf<'Connect2_LegacyShared', 'ActionUserContactUser'>
>['UserContactRequest'];

/* ---- Contact Us (UBTConnect App_Menu_ContactUs.ContactUsDetails) ---- */

type ContactUsPath<A extends string> = PathOf<'UBTConnect', A>;

/** Connect_Communication_CS.UI_ContactUsForm: the form that SendContactUsMessage sends. */
export type ContactUsForm = ActionInputs<ContactUsPath<'ServiceAPISendContactUsMessage'>>['In_ContactUsForm'];

/** The screen variables that OutSystems sends with DataAction_GetLocalityTimezone (screenData.variables). */
export type ContactUsCallInputs = ActionInputs<
  ContactUsPath<'ContactUsDetails/DataActionDataAction_GetLocalityTimezone'>
>;

/** The screen variables that OutSystems sends with DataAction_GetCountriesNames (screenData.variables). */
export type ContactUsCountriesCallInputs = ActionInputs<
  ContactUsPath<'ContactUsDetails/DataActionDataAction_GetCountriesNames'>
>;

/** The outputs of DataAction_GetLocalityTimezone. */
export interface LocalityTimezone {
  timezoneName: string;
  timezoneOffset: number;
}

/** Connect_Geography_CS.CS_CountryName: a row of DataAction_GetCountriesNames.Countries. */
export interface CountryName {
  code: string;
  name: string;
}

/** The output of SendContactUsMessage: "" on success. */
export interface SendContactUsMessageResult {
  out_ErrorMessage: string;
}

/* ---- LDM event e-mail (Connect2_OrbitMobile_MUI ScreenBlock_Event_Email_V2) ---- */

/** The inputs of ScreenBlock_Event_Email_V2 (the route inputs of LDM_Email_V2: EventHostId → In_EventHostId), sent with
    DataActionGetCoordinatorDetails. Long Integers stay text ("0" by default); EventDate is "YYYY-MM-DD", "" for the
    null date. */
export interface EventEmailCallInputs {
  In_EventHostId: string;
  In_EventId: string;
  In_IsMessageGuest: boolean;
  In_IsContactOrganiser: boolean;
  EventDate: string;
  EventLocality: string;
}

type EventEmailCoordinatorWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_Event_Email_V2/DataActionGetCoordinatorDetails'>
>;

/** GetCoordinatorDetailsResponse (Connect2_OrbitMobile_IS), the record inside Out_CoordinatorDetails (HostDetails). The
    block reads it as it travels. */
export type EventEmailCoordinator =
  EventEmailCoordinatorWire['Out_CoordinatorDetails']['GetCoordinatorDetailsResponse'];

/** The outputs of DataActionGetCoordinatorDetails that the block reads. */
export interface EventEmailCoordinatorData {
  coordinatorDetails: EventEmailCoordinator;
  hasContent: boolean;
  eventName: string;
  /** DateToText(DateTimeToDate(GetCoordinatorDetailsResponse.EventDate)): "YYYY-MM-DD" ("1900-01-01" for the null date,
      as OutSystems writes it). */
  eventDateText: string;
}

/* ---- Message detail (Connect2_LegacyShared ScreenBlock_MessageDetail) ---- */

/** The ScreenBlock_MessageDetail variables that OutSystems sends with its data actions (screenData.variables). */
export interface MessageDetailCallInputs {
  IsEntryScreen: boolean;
  IsLoading: boolean;
  ShowAssembleAction: boolean;
  MessageInstanceId: LongId;
  MessageTemplateId: LongId;
  HardwareId: string;
  isOriginPushNotification: boolean;
}

/** GetMessageInstance.Message, the fields that the block reads (null for "" / NullIdentifier / 1900-01-01). */
export interface MessageDetail {
  messageInstanceId: LongId | null;
  messageInstanceUserId: number;
  isRead: boolean;
  dateTimeCreated: string | null;
  title: string;
  summary: string;
  isAdaptiveCard: boolean;
  messageTemplateTypeId: number;
  messageTemplatePriorityId: number;
  messageInfoTypeId: number;
  /** MessageTemplate.SentAs (sender target id); null = NullIdentifier (sent as a user). */
  sentAs: number | null;
  senderTargetId: number;
  senderTargetName: string;
  profileIconURL: string;
  messageContent: string;
  adaptiveCardContent: string;
  userName: string;
  createdByMemberId: LongId;
}

/** The outputs of GetMessageInstance that the block reads. */
export interface MessageInstanceResult {
  message: MessageDetail;
  isRetracted: boolean;
  isCleared: boolean;
}

/** A row of GetMessageTemplateParametersByMessageTemplateId (MessageParameter). */
export interface MessageParameter {
  parameterNameId: number;
  parameterValue: string;
}

/* ---- Message list (Connect2_LegacyShared ScreenBlock_MessageList) ---- */

/** A row of MessagesList (MessageListItem), the fields that the list reads. */
export interface MessageItem {
  id: LongId;
  /** MessageType: Private 1, Public 2 (TotalPrivate / TotalPublic). */
  messageTemplateTypeId: number;
  title: string;
  /** OutSystems DateTime text ("yyyy-MM-ddTHH:mm:ss"), formatted by the item. */
  dateTimeCreated: string;
  messageTemplatePriorityId: number;
  profileIconURL: string;
  isClear: boolean;
  isRead: boolean;
  createdByUserId: number;
  createdByMemberId: string;
  messageInfoTypeId: number;
}

/** The block variable MessagesList (LongIntegerBooleanMessageListItemListRecord): the rows and HasUnreadMessages. */
export interface MessagesList {
  items: MessageItem[];
  hasUnreadMessages: boolean;
}

/** The outputs of DataActionGetMessages that OnAfterFetch_GetMessages reads. */
export interface MessagesResult {
  messages: MessageItem[];
  hasUnreadMessages: boolean;
  countUnreadMessages: number;
}

/** The ScreenBlock_MessageList variables that OutSystems sends with its data actions (screenData.variables). The
    totals are numbers here and travel as text. */
export interface MessageListCallInputs {
  ShowWarning: boolean;
  ShowFilters: boolean;
  ShowSearch: boolean;
  SearchMessageString: string;
  OrderByIsAscending: boolean;
  SelectedHistorySearch: string;
  DeviceHardwareId: string;
  MaxRecords: number;
  isLoadMore: boolean;
  Filter_OrderASC: boolean;
  Filter_OrderDESC: boolean;
  Filter_MessageTypePrivate: boolean;
  Filter_MessageTypePublic: boolean;
  IsShowLoading: boolean;
  IsEmptyMessage: boolean;
  IsRefreshing: boolean;
  HasUnread: boolean;
  WarningMessage: string;
  CurrentMessageInstanceId: LongId;
  /** "" = NullDate (sent as 1900-01-01T00:00:00). */
  ForceInitiateLoginFlowDateTime: string;
  TotalPrivate: number;
  TotalPublic: number;
  SelectedFilter_OrderASC: boolean;
  SelectedFilter_MessageTypePrivate: boolean;
  SelectedFilter_MessageTypePublic: boolean;
}

/** Everything that the two data actions of ScreenBlock_MessageList send: the block variables, the list in the block
    and the Trigger_PullToRefresh input. */
export interface MessageListQuery {
  variables: MessageListCallInputs;
  list: MessagesList;
  triggerPullToRefresh: boolean;
}

/** The outputs of MarkMessageAsClear. */
export interface MessageClearResult {
  hasUnreadMessages: boolean;
  isHaveMessage: boolean;
  isRead: boolean;
}

/** The outputs of GetNumberUnreadMessages: the unread public and private messages of the device. */
export interface UnreadMessageCounts {
  publicCount: number;
  privateCount: number;
}

/* ---- Contact details of a directory entity (UBTConnect Directory_EntityDetailsActions) ---- */

type EntityContactPath = PathOf<'UBTConnect', 'Directory_EntityDetailsActions/DataActionFetchContactDetails'>;

/** The block variables that OutSystems sends with DataActionFetchContactDetails (screenData.variables). */
export type EntityContactCallInputs = ActionInputs<EntityContactPath>;

/** The outputs of DataActionFetchContactDetails that the block reads. ContactPopupData (UBTConnect_Utils) is the
    record of the call popup, as it travels. */
export interface EntityContactDetails {
  ContactPopupData: ActionOutputs<EntityContactPath>['ContactPopupData'];
  EntityName: string;
  EntitySubtitle: string;
  Email: string;
  Phone: string;
  MobilePhone: string;
  HomePhone: string;
  WorkPhone: string;
  LocalityName: string;
  CountryName: string;
}

/* ---- Member contacts (Connect2_LegacyShared GetMemberContactByCacheKey) ---- */

/** MemberContactWithTimezone: a member's phones, e-mail, locality and timezone (Timezone: TextLongIntegerRecord
    TimezoneLabel / OffsetSeconds). The memory cache keeps the record as it travels; the callers map it field by
    field. */
export type MemberContactWithTimezone = ActionOutputs<
  PathOf<'Connect2_LegacyShared', 'ActionGetMemberContactByCacheKey'>
>['MemberContactList']['List'][number];
