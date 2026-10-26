import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import type { EntertainingConfig } from './types';

/** DataActionGetEntertainingConfig of Embedded_MyEntertaining. */
export type EntertainingConfigWire = ActionOutputs<
  PathOf<'UBTConnect_EmbedMyEntertaining', 'Embedded_MyEntertaining/DataActionGetEntertainingConfig'>
>;

/** The four outputs of the configuration, with camelCase names. */
export const toEntertainingConfig = (wire: EntertainingConfigWire): EntertainingConfig => ({
  token: wire.Token,
  baseURL: wire.BaseURL,
  b2CClientId: wire.B2CClientId,
  b2CPolicy: wire.B2CPolicy,
});
