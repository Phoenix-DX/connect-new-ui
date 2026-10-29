import { callAction } from '@/api/client/callAction';
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
  toListOfMessageParameters,
  toMessageInstanceResult,
  toOrbitHostSurveyNotificationParameters,
  toMessageListInputs,
  toMessageParameters,
  toMessagesResult,
  toMessageTemplateParametersInputs,
  toOrbitContactEmailInputs,
  toSendContactUsMessageInputs,
  toSendContactUsMessageResult,
} from './mapper';
import type {
  ContactByEmailForm,
  ContactUsCallInputs,
  ContactUsCountriesCallInputs,
  ContactUsForm,
  CountryName,
  EntityContactCallInputs,
  EntityContactDetails,
  EventEmailCallInputs,
  EventEmailCoordinatorData,
  LocalityTimezone,
  MemberContactWithTimezone,
  MessageClearResult,
  MessageDetailCallInputs,
  MessageInstanceResult,
  MessageListCallInputs,
  MessageParameter,
  OrbitHostSurveyNotificationParameters,
  OrbitNotificationParameters,
  StoreAdaptiveCardResponsesInputs,
  MessagesList,
  MessagesResult,
  OrbitContactEmail,
  SendContactUsMessageResult,
  UserContactRequest,
} from './types';

/* The server calls of the message domain, called with their OutSystems names and owners. Each function makes one call.
   The data actions send the screen or block variables as they are (screenData.variables). The callers decide when to
   call: none of the data actions runs at a screen start on its own (each is refreshed on demand). The sends are writes:
   the mocks answer them, the real server never gets them. */

const LEGACY_SHARED = 'Connect2_LegacyShared';
const ORBIT = 'Connect2_OrbitMobile_MUI';

/* ---- Contact e-mails ---- */

/** SendContactLDMCoordinatorEmail (service action of UBTConnect ContactFlow.ContactByEmailLDMCoordinator), on the
    form's Event_SubmitForm: the form as In_UI_ContactByEmailForm. No outputs. */
export async function sendContactLDMCoordinatorEmail(form: ContactByEmailForm): Promise<void> {
  await callAction('UBTConnect', 'ServiceAPISendContactLDMCoordinatorEmail', toContactByEmailFormInputs(form));
}

/** SendContactMemberEmail (service action of UBTConnect ContactFlow, the screens ContactByEmailMember and
    ContactByEmailOneSchoolGlobal), on Send: the form as In_UI_ContactByEmailForm. No outputs. */
export async function sendContactMemberEmail(form: ContactByEmailForm): Promise<void> {
  await callAction('UBTConnect', 'ServiceAPISendContactMemberEmail', toContactByEmailFormInputs(form));
}

/** SendContactEmail (server action of Connect2_OrbitMobile_BL) through UBTConnect (the screens
    ContactByEmailOrbitHelpdesk and ContactByEmailOrbitHost), on the form's Event_SubmitForm → IsSuccess. */
export async function sendContactEmail(email: OrbitContactEmail): Promise<boolean> {
  return (await callAction('UBTConnect', 'ActionSendContactEmail', toOrbitContactEmailInputs(email))).IsSuccess;
}

/** SendContactEmail (server action of Connect2_OrbitMobile_BL) through Connect2_OrbitMobile_MUI (ScreenBlock_ContactForm
    of EmailContact), on Submit → IsSuccess. */
export async function sendContactFormEmail(email: OrbitContactEmail): Promise<boolean> {
  return (await callAction(ORBIT, 'ActionSendContactEmail', toOrbitContactEmailInputs(email))).IsSuccess;
}

/** UserContactUser(UserContactRequest) (server action of ScreenBlock_Household_Email, Connect2_LegacyShared), on Send.
    No outputs. */
export async function sendUserContactEmail(request: UserContactRequest): Promise<void> {
  await callAction(LEGACY_SHARED, 'ActionUserContactUser', { UserContactRequest: request });
}

/** EventContact(UserContactRequest) (server action of ScreenBlock_Event_Email_V2, Connect2_OrbitMobile_MUI), on Submit.
    No outputs. */
export async function sendEventContactEmail(request: UserContactRequest): Promise<void> {
  await callAction(ORBIT, 'ActionEventContact', { UserContactRequest: request });
}

/* ---- Contact Us (UBTConnect ContactUsDetails) ---- */

/** DataAction_GetLocalityTimezone of ContactUsDetails, refreshed by CacheControl_UserInfo_WrapperResult: the time zone
    of the user's locality. */
export async function fetchLocalityTimezone(inputs: ContactUsCallInputs): Promise<LocalityTimezone> {
  return toLocalityTimezone(
    await callAction('UBTConnect', 'ContactUsDetails/DataActionDataAction_GetLocalityTimezone', inputs),
  );
}

/** DataAction_GetCountriesNames of ContactUsDetails, refreshed by ScreenEvent_OnReady when the user is not signed in:
    the countries of the form. */
export async function fetchCountryNames(inputs: ContactUsCountriesCallInputs): Promise<CountryName[]> {
  return toCountryNames(
    await callAction('UBTConnect', 'ContactUsDetails/DataActionDataAction_GetCountriesNames', inputs),
  );
}

/** SendContactUsMessage (service action of UBTConnect ContactUsDetails), on Submit → Out_ErrorMessage ("" on
    success). */
export async function sendContactUsMessage(
  form: ContactUsForm,
  contactSubjectId: string,
  rate: number,
  userWantToBeContacted: boolean,
): Promise<SendContactUsMessageResult> {
  return toSendContactUsMessageResult(
    await callAction(
      'UBTConnect',
      'ServiceAPISendContactUsMessage',
      toSendContactUsMessageInputs(form, contactSubjectId, rate, userWantToBeContacted),
    ),
  );
}

/* ---- LDM event e-mail (ScreenBlock_Event_Email_V2) ---- */

/** DataActionGetCoordinatorDetails of ScreenBlock_Event_Email_V2 (on demand, from OnReady): the LDM coordinator of
    the meal, the content flag and the meal name. The server gets the block inputs. */
export async function fetchEventEmailCoordinator(inputs: EventEmailCallInputs): Promise<EventEmailCoordinatorData> {
  return toEventEmailCoordinatorData(
    await callAction(
      ORBIT,
      'ScreenBlock_Event_Email_V2/DataActionGetCoordinatorDetails',
      toEventEmailCoordinatorInputs(inputs),
    ),
  );
}

/* ---- Message detail (ScreenBlock_MessageDetail) ---- */

/** DataActionGetMessageInstance of ScreenBlock_MessageDetail (on demand: OnReady and the adaptive-card submit): the
    message, IsRetracted and IsCleared. */
export async function fetchMessageInstance(inputs: MessageDetailCallInputs): Promise<MessageInstanceResult> {
  return toMessageInstanceResult(
    await callAction(LEGACY_SHARED, 'ScreenBlock_MessageDetail/DataActionGetMessageInstance', { ...inputs }),
  );
}

/** The aggregate GetMessageTemplateParametersByMessageTemplateId of ScreenBlock_MessageDetail, refreshed by
    GetMessageInstanceByIdOnAfterFetch: the parameters of the message template. */
export async function fetchMessageTemplateParameters(inputs: MessageDetailCallInputs): Promise<MessageParameter[]> {
  return toMessageParameters(
    await callAction(
      LEGACY_SHARED,
      'ScreenBlock_MessageDetail/ScreenDataSetGetMessageTemplateParametersByMessageTemplateId',
      toMessageTemplateParametersInputs(inputs),
    ),
  );
}

/** Get_OrbitNotificationParameters (server action of ScreenBlock_MessageDetail, OnClick_ViewOrbitEvent): the Orbit
    event and milestone of the message parameters. */
export async function getOrbitNotificationParameters(
  parameters: MessageParameter[],
): Promise<OrbitNotificationParameters> {
  const w = await callAction(LEGACY_SHARED, 'ActionGet_OrbitNotificationParameters', {
    ListOfMessageParameters: toListOfMessageParameters(parameters),
  });
  return { orbitMilestoneId: w.OrbitMilestoneId, orbitEventId: w.OrbitEventId, orbitEventName: w.OrbitEventName };
}

/** Get_OrbitHostSurveyNotificationParameters (server action of ScreenBlock_MessageDetail, OnClick_ViewOrbitEvent): the
    Orbit event and its dates of the message parameters. */
export async function getOrbitHostSurveyNotificationParameters(
  parameters: MessageParameter[],
): Promise<OrbitHostSurveyNotificationParameters> {
  return toOrbitHostSurveyNotificationParameters(
    await callAction(LEGACY_SHARED, 'ActionGet_OrbitHostSurveyNotificationParameters', {
      ListOfMessageParameters: toListOfMessageParameters(parameters),
    }),
  );
}

/** StoreAdaptiveCardResponses (server action of ScreenBlock_MessageDetail, AdaptiveCardViewerOnExecuteAction): stores
    the submit of an adaptive card. No outputs. */
export async function storeAdaptiveCardResponses(inputs: StoreAdaptiveCardResponsesInputs): Promise<void> {
  await callAction(LEGACY_SHARED, 'ActionStoreAdaptiveCardResponses', {
    DeviceHardwareId: inputs.deviceHardwareId,
    AdaptiveCardPayloadJSON: inputs.adaptiveCardPayloadJSON,
    ActionTaken: inputs.actionTaken,
    FormDataJSON: inputs.formDataJSON,
    MessageInstanceId: inputs.messageInstanceId,
  });
}

/* ---- Message list (ScreenBlock_MessageList) ---- */

/** DataActionGetMessages of ScreenBlock_MessageList (on demand: OnReady and RefreshMessages): the messages,
    HasUnreadMessages and CountUnreadMessages. */
export async function fetchMessages(
  variables: MessageListCallInputs,
  list: MessagesList,
  triggerPullToRefresh: boolean,
): Promise<MessagesResult> {
  return toMessagesResult(
    await callAction(
      LEGACY_SHARED,
      'ScreenBlock_MessageList/DataActionGetMessages',
      toMessageListInputs(variables, list, triggerPullToRefresh),
    ),
  );
}

/** DataActionGetMessageInstanceById2 of ScreenBlock_MessageList, refreshed by OnClick_GoToMessageDetail with
    CurrentMessageInstanceId set: whether the message still exists. */
export async function fetchMessageInstanceExists(
  variables: MessageListCallInputs,
  list: MessagesList,
  triggerPullToRefresh: boolean,
): Promise<boolean> {
  return toMessageExists(
    await callAction(
      LEGACY_SHARED,
      'ScreenBlock_MessageList/DataActionGetMessageInstanceById2',
      toMessageListInputs(variables, list, triggerPullToRefresh),
    ),
  );
}

/** MarkMessageAsRead(MessageInstanceId, DeviceHardwareId, SelectedHistorySearch, MessageTypePrivate,
    MessageTypePublic) (server action of Connect2_LegacyShared) → HasUnreadMessages. */
export async function markMessageAsRead(messageInstanceId: string, variables: MessageListCallInputs): Promise<boolean> {
  return (await callAction(LEGACY_SHARED, 'ActionMarkMessageAsRead', toMarkMessageInputs(messageInstanceId, variables)))
    .HasUnreadMessages;
}

/** MarkMessageAsClear (the same inputs; server action of Connect2_LegacyShared) → HasUnreadMessages, IsHaveMessage,
    IsRead. */
export async function markMessageAsClear(
  messageInstanceId: string,
  variables: MessageListCallInputs,
): Promise<MessageClearResult> {
  return toMessageClearResult(
    await callAction(LEGACY_SHARED, 'ActionMarkMessageAsClear', toMarkMessageInputs(messageInstanceId, variables)),
  );
}

/** GetNumberUnreadMessages: in unreadMessages.ts, the app-start call (decision W18). */
export { fetchNumberUnreadMessages } from './unreadMessages';

/* ---- Contact details and member contacts ---- */

/** DataActionFetchContactDetails of Directory_EntityDetailsActions (UBTConnect), refreshed by
    Action_AsyncRefresh_ContactDetails, never on start: the contact details of the entity. */
export async function fetchEntityContactDetails(inputs: EntityContactCallInputs): Promise<EntityContactDetails> {
  return toEntityContactDetails(
    await callAction('UBTConnect', 'Directory_EntityDetailsActions/DataActionFetchContactDetails', inputs),
  );
}

/** GetMemberContactByCacheKey(CacheKey) (server action of Connect2_LegacyShared), the miss of the member contact
    cache: the contacts of the members of the cache key. */
export async function fetchMemberContacts(cacheKey: string): Promise<MemberContactWithTimezone[]> {
  return toMemberContacts(await callAction(LEGACY_SHARED, 'ActionGetMemberContactByCacheKey', { CacheKey: cacheKey }));
}
