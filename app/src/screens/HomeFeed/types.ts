import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';

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

/* An update item of FeedBlock_Updates and the share sheet (Connect_Updates_CS UI_UpdateItem; the date "1900-01-01"
   stays as OutSystems sends it) is a domain type of api/update. This module keeps the name that the screen and the
   block use. */
export type { UpdateItem } from '@/api/update';
