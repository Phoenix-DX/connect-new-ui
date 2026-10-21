import { useQuery } from '@tanstack/react-query';
import { callAction } from '../../lib/api';
import type { EntertainingConfig, EntertainingConfigInputs, MyEntertainingInputs } from './types';

/** MyCalendarEventSourceId (Text) from the query string, "" when absent (MyEntertaining.mvc.js:13-15, 62-63). */
export function readMyEntertainingInputs(params: URLSearchParams): MyEntertainingInputs {
  return { MyCalendarEventSourceId: params.get('MyCalendarEventSourceId') ?? '' };
}

/** DataActionGetEntertainingConfig of Embedded_MyEntertaining (controller getEntertainingConfig$DataActRefresh, fetched
    once at start; OnParametersChanged does not refresh it, so the inputs are read at fetch time and are not part of the
    key). gcTime 0: a new visit fetches again, as the original block does. */
export function useGetEntertainingConfig(inputs: () => EntertainingConfigInputs) {
  return useQuery({
    queryKey: ['MyEntertaining', 'DataActionGetEntertainingConfig'],
    queryFn: async (): Promise<EntertainingConfig> => {
      const { View, Theme, Sources, B2CTenant } = inputs();
      const out = await callAction(
        'UBTConnect_EmbedMyEntertaining',
        'Embedded_MyEntertaining/DataActionGetEntertainingConfig',
        { View, Theme, Sources, B2CTenant },
      );
      return { token: out.Token, baseURL: out.BaseURL, b2CClientId: out.B2CClientId, b2CPolicy: out.B2CPolicy };
    },
    retry: false,
    staleTime: Infinity,
    gcTime: 0,
  });
}

/** AppManager_Get_UserIdToken (Action_RefreshToken, Embedded_MyEntertaining.mvc.js:1020-1040): EspaceName "". */
export async function appManager_Get_UserIdToken(): Promise<string> {
  const out = await callAction('UBTConnect_EmbedMyEntertaining', 'ActionAppManager_Get_UserIdToken', {
    EspaceName: '',
  });
  return out.IdToken;
}
