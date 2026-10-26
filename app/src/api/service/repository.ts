import { callAction } from '@/api/client/callAction';
import { wireList } from '@/lib/os-wire';
import {
  toChangeServicesOrderInputs,
  toFeedServices,
  toFeedServicesVariablesWire,
  toUserServices,
  type ServiceWire,
} from './mapper';
import type { CurrentService, FeedServices, FeedServicesVariables, UserServices } from './types';

/** The calls of the services, with their OutSystems names: the data action of the Services screen that reads the
    services of the user, the service action that saves the favourites, and the data action of the services card of the
    home feed (FeedBlock_Services).
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

/** DataActionGetServices of FeedBlock_Services: the favourites of the user for the services card of the home feed,
    and the links of the external apps. It sends the screen variables of the block. */
export async function fetchFeedServices(variables: FeedServicesVariables): Promise<FeedServices> {
  return toFeedServices(
    await callAction('UBTConnect', 'FeedBlock_Services/DataActionGetServices', toFeedServicesVariablesWire(variables)),
  );
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
