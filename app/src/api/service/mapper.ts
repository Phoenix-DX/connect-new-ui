import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';
import { osDate, osList, wireList } from '@/legacy/os/os-wire';
import type { CurrentService, Service, UserServices } from './types';

/** DataActionGetServices of the Services screen. */
export type UserServicesWire = ActionOutputs<PathOf<'UBTConnect', 'Services/DataActionGetServices'>>;
/** Connect_Services_CS.Connect_Services. */
export type ServiceWire = UserServicesWire['AvailableServices']['List'][number];
/** UBTConnect.Connect_ServicesConnect_Service_UserRecord. */
export type CurrentServiceWire = UserServicesWire['CurrentServices']['List'][number];
/** The inputs of Service_ConnectServices_ChangeOrder_Bulk. */
export type ChangeServicesOrderInputsWire = ActionInputs<
  PathOf<'UBTConnect', 'ServiceAPIService_ConnectServices_ChangeOrder_Bulk'>
>;

/** The null date of OutSystems: a ServiceUser with no LastChangedOn sends it. */
const NULL_DATE_TIME = '1900-01-01T00:00:00';

const toService = (w: ServiceWire): Service => ({
  id: w.Id,
  label: w.Label,
  order: w.Order,
  isActive: w.Is_Active,
  iconId: w.IconId,
  isMandatory: w.isMandatory,
  startAsDefault: w.StartAsDefault,
});

const fromService = (s: Service): ServiceWire => ({
  Id: s.id,
  Label: s.label,
  Order: s.order,
  Is_Active: s.isActive,
  IconId: s.iconId,
  isMandatory: s.isMandatory,
  StartAsDefault: s.startAsDefault,
});

export const toCurrentService = (w: CurrentServiceWire): CurrentService => ({
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

export const fromCurrentService = (c: CurrentService): CurrentServiceWire => ({
  Connect_Services: fromService(c.service),
  Connect_Service_User: {
    Id: c.serviceUser.id ?? '0',
    ConnectServiceId: c.serviceUser.connectServiceId,
    UserId: c.serviceUser.userId,
    Order: c.serviceUser.order,
    LastChangedOn: c.serviceUser.lastChangedOn ?? NULL_DATE_TIME,
  },
});

/** The two lists of the answer, in the server order. */
export const toUserServices = (wire: UserServicesWire): UserServices => ({
  availableServices: osList(wire.AvailableServices).map(toService),
  currentServices: osList(wire.CurrentServices).map(toCurrentService),
});

/** The inputs of Service_ConnectServices_ChangeOrder_Bulk: the whole list of favourites. */
export const toChangeServicesOrderInputs = (currentServices: CurrentService[]): ChangeServicesOrderInputsWire => ({
  CurrentServices: wireList(currentServices.map(fromCurrentService)),
});
