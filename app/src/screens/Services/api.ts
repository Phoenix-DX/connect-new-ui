import { useQuery } from '@tanstack/react-query';
import { callAction } from '@/api/client/callAction';
import { osDate, osList, wireList } from '@/legacy/os/os-wire';
import type { ConnectServicesWire, CurrentService, CurrentServiceWire, Service, ServicesData } from './types';

const toService = (w: ConnectServicesWire): Service => ({
  id: w.Id,
  label: w.Label,
  order: w.Order,
  isActive: w.Is_Active,
  iconId: w.IconId,
  isMandatory: w.isMandatory,
  startAsDefault: w.StartAsDefault,
});

const fromService = (s: Service): ConnectServicesWire => ({
  Id: s.id,
  Label: s.label,
  Order: s.order,
  Is_Active: s.isActive,
  IconId: s.iconId,
  isMandatory: s.isMandatory,
  StartAsDefault: s.startAsDefault,
});

const toCurrent = (w: CurrentServiceWire): CurrentService => ({
  service: toService(w.Connect_Services),
  serviceUser: {
    // NullIdentifier travels as "0"
    id: w.Connect_Service_User.Id === '0' || w.Connect_Service_User.Id === '' ? null : w.Connect_Service_User.Id,
    connectServiceId: w.Connect_Service_User.ConnectServiceId,
    userId: w.Connect_Service_User.UserId,
    order: w.Connect_Service_User.Order,
    lastChangedOn: osDate(w.Connect_Service_User.LastChangedOn),
  },
});

const fromCurrent = (c: CurrentService): CurrentServiceWire => ({
  Connect_Services: fromService(c.service),
  Connect_Service_User: {
    Id: c.serviceUser.id ?? '0',
    ConnectServiceId: c.serviceUser.connectServiceId,
    UserId: c.serviceUser.userId,
    Order: c.serviceUser.order,
    LastChangedOn: c.serviceUser.lastChangedOn ?? '1900-01-01T00:00:00',
  },
});

/** Screen variables the data action sends at fetch time (initial values: Services.mvc.js model :30-45). */
const FETCH_VARIABLES = {
  isLoading: false,
  ReferenceServices: wireList<ConnectServicesWire>([]),
  HasChanges: false,
};

/** DataActionGetServices of the screen (controller getServices$DataActRefresh, Services.mvc.js:1246-1275): fetched at
    start; never refreshed by the screen (the lists are then changed locally until Save). */
export function useGetServices() {
  return useQuery({
    queryKey: ['Services', 'Services/DataActionGetServices'],
    queryFn: async (): Promise<ServicesData> => {
      const out = await callAction('UBTConnect', 'Services/DataActionGetServices', FETCH_VARIABLES);
      return {
        availableServices: osList(out.AvailableServices).map(toService),
        currentServices: osList(out.CurrentServices).map(toCurrent),
      };
    },
    gcTime: 0,
    staleTime: Infinity,
    retry: false,
  });
}

/** Service_ConnectServices_ChangeOrder_Bulk (Services.mvc.js:1235-1245): the whole CurrentServices list. */
export async function changeOrderBulk(currentServices: CurrentService[]): Promise<void> {
  await callAction('UBTConnect', 'ServiceAPIService_ConnectServices_ChangeOrder_Bulk', {
    CurrentServices: wireList(currentServices.map(fromCurrent)),
  });
}
