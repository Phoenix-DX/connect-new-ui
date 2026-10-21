import { useEffect } from 'react';
import { config } from '../../lib/config';
import { setClientVar } from '../session';
import { startNetworkDetection, type ServerCallObserver } from './networkDetection';

/* Network status (knowledge/shell-facts.md U11). UBTConnect OnApplicationReady registers OnOnline / OnOffiline with
   NetworkDetection (NetworkDetetion_DefineCallbacks, UC:15284-15316; AM callbacks AM:7164-7239), which start the
   detector with 30 s and 300 000 ms (AM:3019-3020, 7083-7111). The callbacks only set
   App_NetworkStatus_IsOnline_IsPersistent (UC:15779-15787, 15806-15816), whose only reader is the text choice of
   ShowCommunicationExceptionMessage (UC:16093: "Service Interruption" online, "No internet connection…" offline): no
   toast on a change, no body class (CountryList dom[offline]:1). The flag is persistent: until the first decision of
   this page (the initial ping) it keeps the value of the last session, as in the original.
   Open (U11): the UBT_AppManager OnApplicationReady also starts NetworkDetection with null callbacks (AM:7363-7384) and
   the first caller wins; the clone assumes the call with the callbacks, so the flag follows the network. */

/** The app's server calls (`POST <apiBaseUrl>/api/<Module>/<Action>`, src/lib/api.ts). */
export function apiCallObserver(apiBaseUrl: string = config.apiBaseUrl): ServerCallObserver {
  const prefix = new URL(`${apiBaseUrl}/api/`, window.location.origin).href;
  return {
    target: globalThis,
    isServerCall: (url) => new URL(url, window.location.href).href.startsWith(prefix),
  };
}

export function useNetworkStatusEvents(): void {
  useEffect(
    () =>
      startNetworkDetection({
        onOnline: () => {
          setClientVar('UBTConnect.App_NetworkStatus_IsOnline_IsPersistent', true);
        },
        onOffline: () => {
          setClientVar('UBTConnect.App_NetworkStatus_IsOnline_IsPersistent', false);
        },
        // with mocks the API answers come from MSW or the page, not from a network: only the ping and the browser
        // events decide there (an answer would otherwise count as "online" while the device is offline)
        serverCalls: config.useMocks ? null : apiCallObserver(),
      }),
    [],
  );
}
