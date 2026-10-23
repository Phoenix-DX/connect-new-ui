/* Domain types of the Connect services (Connect_Services_CS): the services of the app and the choice of the signed-in
   user, that is the favourites and their order. The Services screen reads and saves them. The wire types stay in
   src/api/schema.d.ts. */

/** A service record (Connect_Services_CS.Connect_Services). */
export interface Service {
  id: string;
  label: string;
  order: number;
  isActive: boolean;
  /** The icon: a font icon class, or an SVG_* icon. */
  iconId: string;
  /** A mandatory favourite has no remove icon. */
  isMandatory: boolean;
  startAsDefault: boolean;
}

/** The choice of a service by the user (Connect_Services_CS.Connect_Service_User). `id` null: not saved yet
    (NullIdentifier). `lastChangedOn` null: the null date. */
export interface ServiceUser {
  id: string | null;
  connectServiceId: string;
  userId: number;
  /** The position in the favourites, from 1. */
  order: number;
  lastChangedOn: string | null;
}

/** A favourite of the user: the service and the choice of it (UBTConnect Connect_ServicesConnect_Service_UserRecord). */
export interface CurrentService {
  service: Service;
  serviceUser: ServiceUser;
}

/** The services of the user (DataActionGetServices of the Services screen): the favourites in the order of the user,
    and the services that the user can add. */
export interface UserServices {
  availableServices: Service[];
  currentServices: CurrentService[];
}
