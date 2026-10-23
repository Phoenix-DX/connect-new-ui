import { useMutation, useQuery, type QueryKey, type UseQueryOptions } from '@tanstack/react-query';
import { messageKeys } from './keys';
import {
  fetchCountryNames,
  fetchEntityContactDetails,
  fetchEventEmailCoordinator,
  fetchLocalityTimezone,
  fetchMessageInstance,
  fetchMessageInstanceExists,
  fetchMessages,
  fetchMessageTemplateParameters,
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
  ContactUsCallInputs,
  ContactUsCountriesCallInputs,
  ContactUsForm,
  CountryName,
  EntityContactCallInputs,
  EntityContactDetails,
  EventEmailCallInputs,
  EventEmailCoordinatorData,
  LocalityTimezone,
  MessageDetailCallInputs,
  MessageInstanceResult,
  MessageListCallInputs,
  MessageListQuery,
  MessageParameter,
  MessagesResult,
} from './types';

/* The data actions of the message domain as queries, and the sends and the message marks as mutations. The screens
   still call the repository functions in their flows: these hooks have no caller yet. */

/** The query options that a caller can set (for example `enabled`). The key, the query function and the cache times
    are fixed. */
export type MessageQueryOptions<T> = Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn' | 'staleTime' | 'gcTime'>;

/** No cache: each fetch calls the server, as OutSystems does, so the calls stay equal to the original (call parity,
    refactor plan v2 §5.4). */
const NO_CACHE = { staleTime: 0, gcTime: 0 } as const;

/** A query of one message call. No retry by default: OutSystems does not retry a failed data action. */
function useMessageQuery<T>(queryKey: QueryKey, queryFn: () => Promise<T>, options: MessageQueryOptions<T>) {
  return useQuery({ retry: false, ...options, queryKey, queryFn, ...NO_CACHE });
}

/* ---- Queries ---- */

/** DataAction_GetLocalityTimezone of ContactUsDetails as a query. */
export function useLocalityTimezoneQuery(
  inputs: ContactUsCallInputs,
  options: MessageQueryOptions<LocalityTimezone> = {},
) {
  return useMessageQuery(messageKeys.localityTimezone(inputs), () => fetchLocalityTimezone(inputs), options);
}

/** DataAction_GetCountriesNames of ContactUsDetails as a query. */
export function useCountryNamesQuery(
  inputs: ContactUsCountriesCallInputs,
  options: MessageQueryOptions<CountryName[]> = {},
) {
  return useMessageQuery(messageKeys.countryNames(inputs), () => fetchCountryNames(inputs), options);
}

/** DataActionGetCoordinatorDetails of ScreenBlock_Event_Email_V2 as a query. */
export function useEventEmailCoordinatorQuery(
  inputs: EventEmailCallInputs,
  options: MessageQueryOptions<EventEmailCoordinatorData> = {},
) {
  return useMessageQuery(messageKeys.eventEmailCoordinator(inputs), () => fetchEventEmailCoordinator(inputs), options);
}

/** DataActionGetMessageInstance of ScreenBlock_MessageDetail as a query. */
export function useMessageInstanceQuery(
  inputs: MessageDetailCallInputs,
  options: MessageQueryOptions<MessageInstanceResult> = {},
) {
  return useMessageQuery(messageKeys.messageInstance(inputs), () => fetchMessageInstance(inputs), options);
}

/** The aggregate GetMessageTemplateParametersByMessageTemplateId of ScreenBlock_MessageDetail as a query. */
export function useMessageTemplateParametersQuery(
  inputs: MessageDetailCallInputs,
  options: MessageQueryOptions<MessageParameter[]> = {},
) {
  return useMessageQuery(
    messageKeys.messageTemplateParameters(inputs),
    () => fetchMessageTemplateParameters(inputs),
    options,
  );
}

/** DataActionGetMessages of ScreenBlock_MessageList as a query. */
export function useMessagesQuery(query: MessageListQuery, options: MessageQueryOptions<MessagesResult> = {}) {
  return useMessageQuery(
    messageKeys.messages(query),
    () => fetchMessages(query.variables, query.list, query.triggerPullToRefresh),
    options,
  );
}

/** DataActionGetMessageInstanceById2 of ScreenBlock_MessageList as a query. */
export function useMessageInstanceExistsQuery(query: MessageListQuery, options: MessageQueryOptions<boolean> = {}) {
  return useMessageQuery(
    messageKeys.messageInstanceExists(query),
    () => fetchMessageInstanceExists(query.variables, query.list, query.triggerPullToRefresh),
    options,
  );
}

/** DataActionFetchContactDetails of Directory_EntityDetailsActions as a query. */
export function useEntityContactDetailsQuery(
  inputs: EntityContactCallInputs,
  options: MessageQueryOptions<EntityContactDetails> = {},
) {
  return useMessageQuery(messageKeys.entityContactDetails(inputs), () => fetchEntityContactDetails(inputs), options);
}

/* ---- Mutations (a mutation does not retry by default, as OutSystems) ---- */

/** SendContactLDMCoordinatorEmail as a mutation. */
export function useSendContactLDMCoordinatorEmailMutation() {
  return useMutation({ mutationFn: sendContactLDMCoordinatorEmail });
}

/** SendContactMemberEmail as a mutation. */
export function useSendContactMemberEmailMutation() {
  return useMutation({ mutationFn: sendContactMemberEmail });
}

/** SendContactEmail through UBTConnect (ContactFlow) as a mutation. */
export function useSendContactEmailMutation() {
  return useMutation({ mutationFn: sendContactEmail });
}

/** SendContactEmail through Connect2_OrbitMobile_MUI (ScreenBlock_ContactForm) as a mutation. */
export function useSendContactFormEmailMutation() {
  return useMutation({ mutationFn: sendContactFormEmail });
}

/** UserContactUser as a mutation. */
export function useSendUserContactEmailMutation() {
  return useMutation({ mutationFn: sendUserContactEmail });
}

/** EventContact as a mutation. */
export function useSendEventContactEmailMutation() {
  return useMutation({ mutationFn: sendEventContactEmail });
}

/** The variables of the Contact Us send. */
export interface SendContactUsMessageVariables {
  form: ContactUsForm;
  contactSubjectId: string;
  rate: number;
  userWantToBeContacted: boolean;
}

/** SendContactUsMessage as a mutation. */
export function useSendContactUsMessageMutation() {
  return useMutation({
    mutationFn: ({ form, contactSubjectId, rate, userWantToBeContacted }: SendContactUsMessageVariables) =>
      sendContactUsMessage(form, contactSubjectId, rate, userWantToBeContacted),
  });
}

/** The variables of a message mark: the message and the block variables (its filters). */
export interface MarkMessageVariables {
  messageInstanceId: string;
  variables: MessageListCallInputs;
}

/** MarkMessageAsRead as a mutation. */
export function useMarkMessageAsReadMutation() {
  return useMutation({
    mutationFn: ({ messageInstanceId, variables }: MarkMessageVariables) =>
      markMessageAsRead(messageInstanceId, variables),
  });
}

/** MarkMessageAsClear as a mutation. */
export function useMarkMessageAsClearMutation() {
  return useMutation({
    mutationFn: ({ messageInstanceId, variables }: MarkMessageVariables) =>
      markMessageAsClear(messageInstanceId, variables),
  });
}
