import type { CurrentService, Service, UserServices } from '@/api/service';

/* The lists of the Services screen and its client action Action_ChangeOrderLocal. Pure: no React, no call. */

/** Group of the two SortableList blocks: a row can go from one list to the other. */
export const SORTABLE_GROUP = 'services';
/** Name of the List widget of the favourites (the FromId and ToId of OnDragEnd). */
export const FAVOURITE_LIST = 'FavouriteList';
/** Name of the List widget of the suggestions. */
export const SUGGESTION_LIST = 'SuggestionList';
/** Name of the container of the suggestions: the ToId that the remove icon of a favourite gives. */
export const SUGGESTIONS_CONTAINER = 'Suggestions2';

/** The two lists of the screen: CurrentServices (the favourites) and AvailableServices (the suggestions). The screen
    changes them locally until Save. */
export type ServicesLists = UserServices;

/** The lists before the data action answers. */
export const EMPTY_SERVICES_LISTS: ServicesLists = { currentServices: [], availableServices: [] };

/** OnAfterFetch_GetServices: ReferenceServices is empty, so it becomes AvailableServices and then the services of
    CurrentServices. Action_ChangeOrderLocal finds an added service in it. */
export const referenceServicesOf = (data: UserServices | undefined): Service[] =>
  data ? [...data.availableServices, ...data.currentServices.map((c) => c.service)] : [];

/** OutSystems List insert, remove and getItem check the index, and raise an error for a wrong one (checkIndex of the
    runtime). */
function checkIndex(length: number, index: number, allowEnd = false): void {
  if (index < 0 || index > length || (index === length && !allowEnd)) throw new Error('Index out of range');
}

/** The default Connect_Services record: the Current of a ListFilter that finds no row. */
const DEFAULT_SERVICE: Service = {
  id: '',
  label: '',
  order: 0,
  isActive: false,
  iconId: '',
  isMandatory: false,
  startAsDefault: false,
};

/** Action_ChangeOrderLocal: the lists after a move, or null when NewOrder = OldOrder (nothing changes, HasChanges
    stays). It throws for a wrong index, as the List actions of OutSystems do.
    - From and to the favourites: the row moves in the favourites.
    - From the favourites to the suggestions: the row goes to the top of the suggestions.
    - From the suggestions to the favourites: a new choice of the service (not saved yet) goes in the favourites.
    - Neither list is the favourites: nothing moves.
    Then the Order of each favourite is its position from 1. Ported as is, with the adjustment NewOrder - 1 and
    OldOrder - 1 for every caller, also for the zero-based indexes of a drag: a touch drag removes one row and
    duplicates the dragged one (known original bug B3, kept 1:1). */
export function action_ChangeOrderLocal(
  lists: ServicesLists,
  referenceServices: Service[],
  newOrderIn: number,
  oldOrderIn: number,
  isFromFavoriteList: boolean,
  isToFavoriteList: boolean,
  itemId: string,
  userId: number,
): ServicesLists | null {
  if (newOrderIn === oldOrderIn) return null;
  const current = [...lists.currentServices];
  const available = [...lists.availableServices];
  const isReorderingFavorites = isFromFavoriteList && isToFavoriteList;
  const isRemovingFavorites = isFromFavoriteList && !isToFavoriteList;
  const isAddingFavorites = isToFavoriteList && !isFromFavoriteList;
  const newOrder = newOrderIn - 1;
  const oldOrder = oldOrderIn - 1;
  let localService: CurrentService;
  if (isAddingFavorites) {
    // GetReferenceService (ListFilter) .Current: the first match, or the default record when none
    const reference = referenceServices.find((p) => p.id === itemId);
    localService = {
      service: reference ?? DEFAULT_SERVICE,
      serviceUser: { id: null, connectServiceId: itemId, userId, order: 0, lastChangedOn: null },
    };
  } else {
    const position = current.findIndex((p) => p.service.id === itemId); // GetCurrentService (ListIndexOf)
    checkIndex(current.length, position);
    localService = current[position] as CurrentService;
  }
  let insert = true;
  if (isRemovingFavorites) {
    checkIndex(current.length, oldOrder);
    current.splice(oldOrder, 1); // ListRemove
    available.splice(0, 0, localService.service); // ListInsert3 at 0
    insert = false;
  } else if (isReorderingFavorites) {
    checkIndex(current.length, oldOrder);
    current.splice(oldOrder, 1); // ListRemove2
  } else if (isAddingFavorites) {
    const position = available.findIndex((p) => p.id === itemId); // GetAvailableItem
    if (position !== -1) available.splice(position, 1); // ListRemove3
  } else {
    insert = false; // neither list is Favourites: break
  }
  if (insert) {
    checkIndex(current.length, newOrder, true);
    current.splice(newOrder, 0, localService); // ListInsert2
  }
  // Foreach CurrentServices: Connect_Service_User.Order = CurrentRowNumber + 1
  return {
    currentServices: current.map((c, i) => ({ ...c, serviceUser: { ...c.serviceUser, order: i + 1 } })),
    availableServices: available,
  };
}
