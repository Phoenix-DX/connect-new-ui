import { callAction } from '@/api/client/callAction';
import { wireList } from '@/legacy/os/os-wire';
import { toChangeServicesOrderInputs, toUserServices, type ServiceWire } from './mapper';
import type { CurrentService, UserServices } from './types';

/** The two calls of the Services screen, with their OutSystems names: the data action that reads the services of the
    user and the service action that saves the favourites.
    @origin UBTConnect.App_Services.Services */

/** The screen variables that the data action sends: their values at fetch time, which are the initial values (the
    screen fetches only at start). */
const FETCH_VARIABLES = {
  isLoading: false,
  ReferenceServices: wireList<ServiceWire>([]),
  HasChanges: false,
};

/** DataActionGetServices: the favourites of the user and the services that the user can add. */
export async function fetchUserServices(): Promise<UserServices> {
  return toUserServices(await callAction('UBTConnect', 'Services/DataActionGetServices', FETCH_VARIABLES));
}

/** Service_ConnectServices_ChangeOrder_Bulk: saves the whole list of favourites in its order. No outputs. A write: the
    mocks answer it, the real server never gets it. */
export async function changeServicesOrder(currentServices: CurrentService[]): Promise<void> {
  await callAction(
    'UBTConnect',
    'ServiceAPIService_ConnectServices_ChangeOrder_Bulk',
    toChangeServicesOrderInputs(currentServices),
  );
}
