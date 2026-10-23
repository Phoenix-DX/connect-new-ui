/* Domain types of the Connect services (Connect_Services_CS): the services of the app and the choice of the signed-in
   user, that is the favourites and their order. The Services screen reads and saves them; the services card of the
   home feed (FeedBlock_Services) reads the favourites. The wire types stay in src/api/schema.d.ts. */

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

/** One service of a page of the services carousel (UBTConnect.UI_ServiceItem). */
export interface ServiceItem {
  id: string;
  iconId: string;
  name: string;
  order: number;
}

/** One slide of the services carousel (UBTConnect.UI_ServicesPage). */
export interface ServicesPage {
  pageNumber: number;
  serviceItems: ServiceItem[];
}

/** The external app that the dialog Dialog_GoExternalApp opens (UBTConnect_Utils.ExternalApp_PopUpInfo). */
export interface ExternalAppPopUpInfo {
  appName: string;
  packageName: string;
  iconId: string;
}

/** The screen variables of FeedBlock_Services that its data action GetServices sends, with their values at fetch
    time. */
export interface FeedServicesVariables {
  mainElementClass: string;
  servicesPerPage: ServicesPage[];
  externalAppPopUpId: string;
  externalAppPopUpInfo: ExternalAppPopUpInfo;
  itemPerPage: number;
  forceAddService: boolean;
}

/** The services card of the home feed (DataActionGetServices of FeedBlock_Services): the favourites of the user in
    their order, the link of El Gusto and the store packages of the external apps. */
export interface FeedServices {
  services: Service[];
  externalLinksElGusto: string;
  externalPackagesCommunityTradelink: string;
  externalPackagesHR100: string;
  externalPackagesTrove: string;
}
