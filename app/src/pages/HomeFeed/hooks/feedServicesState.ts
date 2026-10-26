import type { ExternalAppPopUpInfo, FeedServices, ServiceItem, ServicesPage } from '@/api/service';

/** The initial variables and the client action OnAfterFetch_GetServices of the services card. Pure, without React.
    @origin UBTConnect.Home.FeedBlock_Services */

/** MainElementClass: the class of the card, of the carousel and of its lists. The data action sends it too. */
export const MAIN_ELEMENT_CLASS = 'ubt-services-carousel';

const EMPTY_SERVICE: ServiceItem = { id: '', iconId: '', name: '', order: 0 };

/** Local_ExternalApp_PopUpInfo before a click on an external app. */
export const EMPTY_POPUP_INFO: ExternalAppPopUpInfo = { appName: '', packageName: '', iconId: '' };

/** Local_ServicesPerPage of OnInitialize: one page of five empty services, which show as skeletons until the fetch. */
export const INITIAL_PAGES: ServicesPage[] = [
  { pageNumber: 1, serviceItems: Array.from({ length: 5 }, () => EMPTY_SERVICE) },
];

/** OnAfterFetch_GetServices: the services in the server order, then the "Add Service" item when ForceAddService is
    True, cut into pages of ItemPerPage items. */
export function toPages(data: FeedServices, itemPerPage: number, forceAddService: boolean): ServicesPage[] {
  const list = data.services.map((s) => ({ id: s.id, iconId: s.iconId, name: s.label, order: s.order }));
  if (forceAddService) {
    // The icon id of AddCircle is not captured (ForceAddService is False on HomeFeed).
    list.push({ id: '', iconId: '', name: 'Add Service', order: list.length + 1 });
  }
  const pages: ServicesPage[] = [];
  for (let i = 0, page = 1; i < list.length; i += itemPerPage, page++) {
    pages.push({ pageNumber: page, serviceItems: list.slice(i, i + itemPerPage) });
  }
  return pages;
}
