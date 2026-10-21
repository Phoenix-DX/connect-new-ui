import { useQuery } from '@tanstack/react-query';
import { callAction } from '../../lib/api';
import { osList, wireList } from '../../lib/os-wire';
import type { ExternalAppPopUpInfo, ServicesData, ServicesPage, UpdateItem, UpdateItemWire } from './types';

/** OutSystems NullDate() as it travels on the wire (ShareSheet In_UpdateDate when nothing is shared). */
export const NULL_DATE = '1900-01-01';

/** Screen variables FeedBlock_Services sends with DataActionGetServices (screenData), as they are at fetch time:
    the OnInitialize skeleton page, no popup id yet, ItemPerPage and ForceAddService inputs. */
export interface GetServicesVariables {
  mainElementClass: string;
  servicesPerPage: ServicesPage[];
  externalAppPopUpId: string;
  externalAppPopUpInfo: ExternalAppPopUpInfo;
  itemPerPage: number;
  forceAddService: boolean;
}

/** DataActionGetServices of FeedBlock_Services (Services.mvc.js:703-731), fetched at start, once. */
export function useGetServices(variables: () => GetServicesVariables) {
  return useQuery({
    queryKey: ['HomeFeed', 'FeedBlock_Services/DataActionGetServices'],
    queryFn: async (): Promise<ServicesData> => {
      const v = variables();
      const out = await callAction('UBTConnect', 'FeedBlock_Services/DataActionGetServices', {
        MainElementClass: v.mainElementClass,
        Local_ServicesPerPage: wireList(
          v.servicesPerPage.map((p) => ({
            PageNumber: p.pageNumber,
            ServiceItem: wireList(
              p.serviceItems.map((s) => ({ Id: s.id, IconId: s.iconId, Name: s.name, Order: s.order })),
            ),
          })),
        ),
        ExternalAppPopUp_Id: v.externalAppPopUpId,
        Local_ExternalApp_PopUpInfo: {
          AppName: v.externalAppPopUpInfo.appName,
          PackageName: v.externalAppPopUpInfo.packageName,
          IconId: v.externalAppPopUpInfo.iconId,
        },
        ItemPerPage: v.itemPerPage,
        ForceAddService: v.forceAddService,
      });
      return {
        services: osList(out.List).map((s) => ({ id: s.Id, label: s.Label, order: s.Order, iconId: s.IconId })),
        externalLinksElGusto: out.ExternalLinks_ElGusto,
        externalPackagesCommunityTradelink: out.ExterrnalPackages_CommunityTradelink,
        externalPackagesHR100: out.ExterrnalPackages_HR100,
        externalPackagesTrove: out.ExterrnalPackages_Trove,
      };
    },
    retry: false,
  });
}

const toUpdateItem = (w: UpdateItemWire): UpdateItem => ({
  updateItemId: w.UpdateItemId,
  updateItemTypeId: w.UpdateItemTypeId,
  householdId: w.HouseholdId,
  memberId: w.MemberId,
  name: w.Name,
  date: w.Date,
  genderId: w.GenderId,
  locationString: w.LocationString,
  parentsNames: w.ParentsNames,
  birthType: w.BirthType,
  isRead: w.IsRead,
  hasAccess: w.HasAccess,
  hasShare: w.HasShare,
});

/** DataActionFetchUpdates of FeedBlock_Updates (Updates.mvc.js:609-625), fetched at start; sends the block's
    CarouselPreloadedHouseholds variable (empty at fetch time). */
export function useFetchUpdates() {
  return useQuery({
    queryKey: ['HomeFeed', 'FeedBlock_Updates/DataActionFetchUpdates'],
    queryFn: async (): Promise<UpdateItem[]> => {
      const out = await callAction('UBTConnect', 'FeedBlock_Updates/DataActionFetchUpdates', {
        CarouselPreloadedHouseholds: { CarouselHouseholdItem: wireList([]) },
      });
      return osList(out.UI_UpdateItemList).map(toUpdateItem);
    },
    retry: false,
  });
}

/** Action_UI_UpdateItem_MarkAsRead (Updates.mvc.js:583-590): UpdateItemId as Long Integer text. */
export async function markAsRead(updateItemId: string): Promise<void> {
  await callAction('UBTConnect', 'ServiceAPIAction_UI_UpdateItem_MarkAsRead', { UpdateItemId: updateItemId });
}

/** Action_UI_UpdateItem_MarkAsUnread (Updates.mvc.js:592-599). */
export async function markAsUnread(updateItemId: string): Promise<void> {
  await callAction('UBTConnect', 'ServiceAPIAction_UI_UpdateItem_MarkAsUnread', { UpdateItemId: updateItemId });
}
