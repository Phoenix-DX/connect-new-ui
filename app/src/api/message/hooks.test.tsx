import { QueryClient, QueryClientProvider, type UseMutationResult, type UseQueryResult } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  useCountryNamesQuery,
  useEntityContactDetailsQuery,
  useEventEmailCoordinatorQuery,
  useLocalityTimezoneQuery,
  useMarkMessageAsClearMutation,
  useMarkMessageAsReadMutation,
  useMessageInstanceExistsQuery,
  useMessageInstanceQuery,
  useMessagesQuery,
  useMessageTemplateParametersQuery,
  useSendContactEmailMutation,
  useSendContactFormEmailMutation,
  useSendContactLDMCoordinatorEmailMutation,
  useSendContactMemberEmailMutation,
  useSendContactUsMessageMutation,
  useSendEventContactEmailMutation,
  useSendUserContactEmailMutation,
} from './hooks';
import { messageKeys } from './keys';
import type {
  ContactByEmailForm,
  ContactUsCallInputs,
  EntityContactCallInputs,
  EventEmailCallInputs,
  MessageDetailCallInputs,
  MessageListCallInputs,
  MessageListQuery,
  OrbitContactEmail,
  UserContactRequest,
} from './types';

const contactUsInputs: ContactUsCallInputs = {
  isLogged: true,
  In_ContactSubjectId: 'account',
  In_ContactSubjectTitle: 'User Account Management',
  In_ListMenuOptionLabel: 'Set up a UBT One account',
};
const eventEmailInputs: EventEmailCallInputs = {
  In_EventHostId: '0',
  In_EventId: '70415',
  In_IsMessageGuest: false,
  In_IsContactOrganiser: true,
  EventDate: '',
  EventLocality: '',
};
const messageDetailInputs: MessageDetailCallInputs = {
  IsEntryScreen: false,
  IsLoading: true,
  ShowAssembleAction: false,
  MessageInstanceId: '5965247',
  MessageTemplateId: '0',
  HardwareId: '',
  isOriginPushNotification: false,
};
const listVariables: MessageListCallInputs = {
  ShowWarning: false,
  ShowFilters: false,
  ShowSearch: false,
  SearchMessageString: '',
  OrderByIsAscending: false,
  SelectedHistorySearch: '',
  DeviceHardwareId: 'WEB_test',
  MaxRecords: 20,
  isLoadMore: false,
  Filter_OrderASC: false,
  Filter_OrderDESC: true,
  Filter_MessageTypePrivate: true,
  Filter_MessageTypePublic: true,
  IsShowLoading: true,
  IsEmptyMessage: false,
  IsRefreshing: false,
  HasUnread: false,
  WarningMessage: '',
  CurrentMessageInstanceId: '81012',
  ForceInitiateLoginFlowDateTime: '',
  TotalPrivate: 0,
  TotalPublic: 0,
  SelectedFilter_OrderASC: false,
  SelectedFilter_MessageTypePrivate: true,
  SelectedFilter_MessageTypePublic: true,
};
const listQuery: MessageListQuery = {
  variables: listVariables,
  list: { items: [], hasUnreadMessages: false },
  triggerPullToRefresh: false,
};
const entityInputs: EntityContactCallInputs = { EntityType: 'OneSchool Global', EntityId: '1430', IsEnabled: true };

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
  milestoneId: '',
  targetMemberId: '0',
  subject: 'Orbit Helpdesk',
  userSubject: 'Room change',
  message: 'Could we have a room on the ground floor?',
  emailInfo: {
    EventName: 'Bahia Blanca Gathering',
    SenderFullName: 'Lucia Vitale',
    HostName: '',
    HostEmail: '',
    MilestoneName: '',
    FormattedDateTime: '',
  },
};
const contactRequest: UserContactRequest = {
  ContactMember: 'Medina Household',
  EmailFrom: 'lucia.vitale@example.com',
  EmailTo: 'medina.family@example.com',
  FirstName: 'Ana',
  FirstNameSender: 'Lucia',
  LastNameSender: 'Vitale',
  Message: 'Thank you for the supper on Saturday.',
  SenderCountry: 'Argentina',
  SenderLocality: 'Bahia Blanca',
  SenderPhone: '',
  Subject: 'Saturday supper',
};
const contactUsForm = {
  FullName: 'Lucia Vitale',
  Email: 'lucia.vitale@example.com',
  Country: 'Argentina',
  Locality: 'Bahia Blanca',
  PhoneNumber: '',
  Message: 'The app does not show my bookmarks.',
};

/** A client with the library defaults (retry 3), so the tests see the options of the hooks. */
function providerOf(client: QueryClient) {
  return function Provider({ children }: { children: ReactNode }) {
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
  };
}
const calls = () => (window.__osCalls ?? []).map((c) => c.action);

beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
});
afterEach(() => {
  sessionStorage.clear();
});

describe('message query keys', () => {
  it('the inputs are part of the key', () => {
    expect(messageKeys.localityTimezone(contactUsInputs)).toEqual(['message', 'localityTimezone', contactUsInputs]);
    expect(messageKeys.messages(listQuery)).toEqual(['message', 'messages', listQuery]);
    expect(messageKeys.eventEmailCoordinator(eventEmailInputs)).toEqual([
      'message',
      'eventEmailCoordinator',
      eventEmailInputs,
    ]);
  });
});

interface QueryCase {
  name: string;
  action: string;
  key: readonly unknown[];
  use: () => UseQueryResult;
}

const queryCases: QueryCase[] = [
  {
    name: 'useLocalityTimezoneQuery',
    action: 'DataActionDataAction_GetLocalityTimezone',
    key: messageKeys.localityTimezone(contactUsInputs),
    use: () => useLocalityTimezoneQuery(contactUsInputs),
  },
  {
    name: 'useCountryNamesQuery',
    action: 'DataActionDataAction_GetCountriesNames',
    key: messageKeys.countryNames(contactUsInputs),
    use: () => useCountryNamesQuery(contactUsInputs),
  },
  {
    name: 'useEventEmailCoordinatorQuery',
    action: 'DataActionGetCoordinatorDetails',
    key: messageKeys.eventEmailCoordinator(eventEmailInputs),
    use: () => useEventEmailCoordinatorQuery(eventEmailInputs),
  },
  {
    name: 'useMessageInstanceQuery',
    action: 'DataActionGetMessageInstance',
    key: messageKeys.messageInstance(messageDetailInputs),
    use: () => useMessageInstanceQuery(messageDetailInputs),
  },
  {
    name: 'useMessageTemplateParametersQuery',
    action: 'ScreenDataSetGetMessageTemplateParametersByMessageTemplateId',
    key: messageKeys.messageTemplateParameters(messageDetailInputs),
    use: () => useMessageTemplateParametersQuery(messageDetailInputs),
  },
  {
    name: 'useMessagesQuery',
    action: 'DataActionGetMessages',
    key: messageKeys.messages(listQuery),
    use: () => useMessagesQuery(listQuery),
  },
  {
    name: 'useMessageInstanceExistsQuery',
    action: 'DataActionGetMessageInstanceById2',
    key: messageKeys.messageInstanceExists(listQuery),
    use: () => useMessageInstanceExistsQuery(listQuery),
  },
  {
    name: 'useEntityContactDetailsQuery',
    action: 'DataActionFetchContactDetails',
    key: messageKeys.entityContactDetails(entityInputs),
    use: () => useEntityContactDetailsQuery(entityInputs),
  },
];

describe('message query hooks', () => {
  it('cover the 8 data actions of the domain', () => {
    expect(new Set(queryCases.map((c) => c.action)).size).toBe(8);
  });

  it.each(queryCases)('$name calls $action once and keeps nothing in the cache after unmount', async (c) => {
    const client = new QueryClient();
    const { result, unmount } = renderHook(() => c.use(), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    expect(calls()).toEqual([c.action]);
    unmount();
    await waitFor(() => {
      expect(client.getQueryCache().find({ queryKey: c.key })).toBeUndefined();
    });
  });

  it.each(queryCases)('$name does not retry a failed call by default', async (c) => {
    sessionStorage.setItem('mock:mock', 'error');
    const client = new QueryClient();
    const { result } = renderHook(() => c.use(), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(calls()).toEqual([c.action]);
  });

  it('a new mount calls the server again (staleTime 0, gcTime 0)', async () => {
    const client = new QueryClient();
    const first = renderHook(() => useMessageInstanceQuery(messageDetailInputs), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(first.result.current.isSuccess).toBe(true);
    });
    expect(first.result.current.data?.message.title).toBe('Test Noti 56');
    first.unmount();
    const second = renderHook(() => useMessageInstanceQuery(messageDetailInputs), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(second.result.current.isSuccess).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetMessageInstance', 'DataActionGetMessageInstance']);
  });

  it('does not call the server when the caller disables the query', async () => {
    const client = new QueryClient();
    const { result } = renderHook(() => useCountryNamesQuery(contactUsInputs, { enabled: false }), {
      wrapper: providerOf(client),
    });
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(result.current.fetchStatus).toBe('idle');
    expect(calls()).toEqual([]);
  });
});

interface MutationCase {
  name: string;
  action: string;
  run: () => Promise<unknown>;
}

/** Renders a mutation hook and answers a function that runs one mutation with the given variables. */
function mutationOf<TData, TVariables>(
  use: () => UseMutationResult<TData, Error, TVariables>,
  variables: TVariables,
): () => Promise<unknown> {
  return async () => {
    const { result } = renderHook(() => use(), { wrapper: providerOf(new QueryClient()) });
    return act(() => result.current.mutateAsync(variables));
  };
}

const mutationCases: MutationCase[] = [
  {
    name: 'useSendContactLDMCoordinatorEmailMutation',
    action: 'ServiceAPISendContactLDMCoordinatorEmail',
    run: mutationOf(useSendContactLDMCoordinatorEmailMutation, form),
  },
  {
    name: 'useSendContactMemberEmailMutation',
    action: 'ServiceAPISendContactMemberEmail',
    run: mutationOf(useSendContactMemberEmailMutation, form),
  },
  {
    name: 'useSendContactEmailMutation',
    action: 'ActionSendContactEmail',
    run: mutationOf(useSendContactEmailMutation, orbitEmail),
  },
  {
    name: 'useSendContactFormEmailMutation',
    action: 'ActionSendContactEmail',
    run: mutationOf(useSendContactFormEmailMutation, orbitEmail),
  },
  {
    name: 'useSendUserContactEmailMutation',
    action: 'ActionUserContactUser',
    run: mutationOf(useSendUserContactEmailMutation, contactRequest),
  },
  {
    name: 'useSendEventContactEmailMutation',
    action: 'ActionEventContact',
    run: mutationOf(useSendEventContactEmailMutation, contactRequest),
  },
  {
    name: 'useSendContactUsMessageMutation',
    action: 'ServiceAPISendContactUsMessage',
    run: mutationOf(useSendContactUsMessageMutation, {
      form: contactUsForm,
      contactSubjectId: 'account',
      rate: 4,
      userWantToBeContacted: false,
    }),
  },
  {
    name: 'useMarkMessageAsReadMutation',
    action: 'ActionMarkMessageAsRead',
    run: mutationOf(useMarkMessageAsReadMutation, { messageInstanceId: '81019', variables: listVariables }),
  },
  {
    name: 'useMarkMessageAsClearMutation',
    action: 'ActionMarkMessageAsClear',
    run: mutationOf(useMarkMessageAsClearMutation, { messageInstanceId: '81017', variables: listVariables }),
  },
];

describe('message mutation hooks', () => {
  it.each(mutationCases)('$name calls $action once per send, without a retry after a failure', async (c) => {
    await c.run();
    expect(calls()).toEqual([c.action]);
    sessionStorage.setItem('mock:mock', 'error');
    await expect(c.run()).rejects.toThrow('Request failed with status 500');
    expect(calls()).toEqual([c.action, c.action]);
  });

  it('a send answers the output of the call', async () => {
    await expect(mutationOf(useSendContactEmailMutation, orbitEmail)()).resolves.toBe(true);
    await expect(
      mutationOf(useSendContactUsMessageMutation, {
        form: contactUsForm,
        contactSubjectId: 'account',
        rate: 4,
        userWantToBeContacted: false,
      })(),
    ).resolves.toEqual({ out_ErrorMessage: '' });
  });
});
