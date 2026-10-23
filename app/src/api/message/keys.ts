import { cacheEntry } from '@/api/client/cache';
import type {
  ContactUsCallInputs,
  ContactUsCountriesCallInputs,
  EntityContactCallInputs,
  EventEmailCallInputs,
  MessageDetailCallInputs,
  MessageListQuery,
} from './types';

/** Query keys of the message queries: one key per data action. The inputs are part of the key: the server answer can
    depend on each screen or block variable that the call sends. */
export const messageKeys = {
  all: ['message'] as const,
  localityTimezone: (inputs: ContactUsCallInputs) => [...messageKeys.all, 'localityTimezone', inputs] as const,
  countryNames: (inputs: ContactUsCountriesCallInputs) => [...messageKeys.all, 'countryNames', inputs] as const,
  eventEmailCoordinator: (inputs: EventEmailCallInputs) =>
    [...messageKeys.all, 'eventEmailCoordinator', inputs] as const,
  messageInstance: (inputs: MessageDetailCallInputs) => [...messageKeys.all, 'messageInstance', inputs] as const,
  messageTemplateParameters: (inputs: MessageDetailCallInputs) =>
    [...messageKeys.all, 'messageTemplateParameters', inputs] as const,
  messages: (query: MessageListQuery) => [...messageKeys.all, 'messages', query] as const,
  messageInstanceExists: (query: MessageListQuery) => [...messageKeys.all, 'messageInstanceExists', query] as const,
  entityContactDetails: (inputs: EntityContactCallInputs) =>
    [...messageKeys.all, 'entityContactDetails', inputs] as const,
};

/** The memory-cache entries of the message domain (api/client/cache.ts): the TTL is the staleTime. */
export const messageCache = {
  /** GetCacheableMemberContactList (Connect2_LegacyShared.controller.js:3414-3545): type DirectoryCacheType
      .MemberContact (static-entities-tst.json `Connect2_LegacyShared.directoryCacheType`), key
      BuildMemberContactsCacheKey(MemberIdList), TimeToLive 300 s. */
  memberContacts: (cacheKey: string) => cacheEntry('MemberContact', cacheKey, 300),
};
