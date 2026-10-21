import type { RequestHandler } from 'msw';
import { contractHandler } from '../../mocks/contract';

/* Both actions are fictional in the contract (never recorded). Decision D8 (b): the calendar embed is a same-size
   local stand-in (components/connect2Entertaining.ts, page public/mock-embeds/my-entertaining.html), so the config
   carries the app's own origin as BaseURL (the block accepts embed messages only from that origin) and no token or B2C
   values. AppManager_Get_UserIdToken never answers a real token. Scenarios: real, loading (no answer), error (500). */
export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect_EmbedMyEntertaining', 'Embedded_MyEntertaining/DataActionGetEntertainingConfig', () => ({
    BaseURL: window.location.origin,
    Token: '',
    B2CClientId: '',
    B2CPolicy: '',
  })),
  contractHandler('UBTConnect_EmbedMyEntertaining', 'ActionAppManager_Get_UserIdToken', () => ({ IdToken: '' })),
];
