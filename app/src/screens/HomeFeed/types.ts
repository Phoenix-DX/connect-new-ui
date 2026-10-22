import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';
import type { LongId } from '@/legacy/os/os-wire';

/* Wire types from the contract (src/api/openapi.yaml), through the callAction types. */
type GetServicesPath = PathOf<'UBTConnect', 'FeedBlock_Services/DataActionGetServices'>;
type FetchUpdatesPath = PathOf<'UBTConnect', 'FeedBlock_Updates/DataActionFetchUpdates'>;
export type GetServicesInputsWire = ActionInputs<GetServicesPath>;
export type GetServicesOutputsWire = ActionOutputs<GetServicesPath>;
/** Connect_Services_CS.Connect_Services (GetServices.List). */
export type ConnectServiceWire = GetServicesOutputsWire['List']['List'][number];
/** Connect_Updates_CS.UI_UpdateItem (FetchUpdates.UI_UpdateItemList). */
export type UpdateItemWire = ActionOutputs<FetchUpdatesPath>['UI_UpdateItemList']['List'][number];

/** UBTConnect.UI_ServiceItem: one service of a carousel page (OnAfterFetch_GetServices mapping). */
export interface ServiceItem {
  id: string;
  iconId: string;
  name: string;
  order: number;
}

/** UBTConnect.UI_ServicesPage: one carousel slide. */
export interface ServicesPage {
  pageNumber: number;
  serviceItems: ServiceItem[];
}

/** GetServices outputs as FeedBlock_Services uses them. */
export interface ServicesData {
  services: { id: string; label: string; order: number; iconId: string }[];
  externalLinksElGusto: string;
  externalPackagesCommunityTradelink: string;
  externalPackagesHR100: string;
  externalPackagesTrove: string;
}

/** UBTConnect_Utils.ExternalApp_PopUpInfo. */
export interface ExternalAppPopUpInfo {
  appName: string;
  packageName: string;
  iconId: string;
}

/** Connect_Updates_CS.UI_UpdateItem as FeedBlock_Updates and the share sheet use it. */
export interface UpdateItem {
  updateItemId: LongId;
  updateItemTypeId: string;
  householdId: LongId;
  memberId: string;
  name: string;
  /** Date, `YYYY-MM-DD`; `1900-01-01` stays as OutSystems sends it (Update_ListItem formats it). */
  date: string;
  genderId: string;
  locationString: string;
  parentsNames: string;
  birthType: string;
  isRead: boolean;
  hasAccess: boolean;
  hasShare: boolean;
}
