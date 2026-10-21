/* Services (UBTConnect App_Services.Services). Wire shapes stay in api.ts / mocks.ts; components see the domain types. */

/** Connect_Services_CS.Connect_Services (wire: Connect_Services_CS__Connect_Services). */
export interface ConnectServicesWire {
  Id: string;
  Label: string;
  Order: number;
  Is_Active: boolean;
  IconId: string;
  isMandatory: boolean;
  StartAsDefault: boolean;
}

/** Connect_Services_CS.Connect_Service_User (Id is a Long Integer: text). */
export interface ConnectServiceUserWire {
  Id: string;
  ConnectServiceId: string;
  UserId: number;
  Order: number;
  LastChangedOn: string;
}

/** UBTConnect.Connect_ServicesConnect_Service_UserRecord. */
export interface CurrentServiceWire {
  Connect_Services: ConnectServicesWire;
  Connect_Service_User: ConnectServiceUserWire;
}

/** A service record (Connect_Services). */
export interface Service {
  id: string;
  label: string;
  order: number;
  isActive: boolean;
  iconId: string;
  isMandatory: boolean;
  startAsDefault: boolean;
}

/** The user's choice of a service (Connect_Service_User). `id` null = not saved yet (NullIdentifier). */
export interface ServiceUser {
  id: string | null;
  connectServiceId: string;
  userId: number;
  order: number;
  lastChangedOn: string | null;
}

/** A favourite: GetServices.CurrentServices row. */
export interface CurrentService {
  service: Service;
  serviceUser: ServiceUser;
}

/** DataActionGetServices outputs. */
export interface ServicesData {
  availableServices: Service[];
  currentServices: CurrentService[];
}
