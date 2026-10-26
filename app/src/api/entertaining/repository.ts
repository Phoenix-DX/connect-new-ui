import { callAction } from '@/api/client/callAction';
import { toEntertainingConfig } from './mapper';
import type { EntertainingConfig, EntertainingConfigInputs } from './types';

/* The two calls of the entertaining calendar embed (module UBTConnect_EmbedMyEntertaining), with their OutSystems
   names. Both are fictional in the contract: they were never recorded. */

/** DataActionGetEntertainingConfig of Embedded_MyEntertaining: the configuration of the calendar SDK. It sends the
    four input parameters of the block as screen variables, in this order. */
export async function fetchEntertainingConfig(inputs: EntertainingConfigInputs): Promise<EntertainingConfig> {
  const { View, Theme, Sources, B2CTenant } = inputs;
  return toEntertainingConfig(
    await callAction('UBTConnect_EmbedMyEntertaining', 'Embedded_MyEntertaining/DataActionGetEntertainingConfig', {
      View,
      Theme,
      Sources,
      B2CTenant,
    }),
  );
}

/** ActionAppManager_Get_UserIdToken (Action_RefreshToken of Embedded_MyEntertaining): the ID token of the signed-in
    user that refreshes the calendar SDK. EspaceName is "". */
export async function fetchUserIdToken(): Promise<string> {
  const out = await callAction('UBTConnect_EmbedMyEntertaining', 'ActionAppManager_Get_UserIdToken', {
    EspaceName: '',
  });
  return out.IdToken;
}
