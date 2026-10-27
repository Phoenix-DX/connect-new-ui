import { useMemo, useState } from 'react';
import { changeServicesOrder, useUserServicesQuery, type CurrentService, type Service } from '@/api/service';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { raiseBubbledToFlowHandler } from '@/platform/feedback/bubbleErrors';
import { currentUserId } from '@/platform/session/session';
import { UBT_MessageType_Success } from '@/pages/Services/staticEntities';
import {
  EMPTY_SERVICES_LISTS,
  FAVOURITE_LIST,
  SUGGESTION_LIST,
  SUGGESTIONS_CONTAINER,
  action_ChangeOrderLocal,
  referenceServicesOf,
  type ChangeOrderVariables,
  type ServicesLists,
} from './servicesState';

/** The variables and the flows of the Services screen: the data action GetServices, the lists that change locally
    (CurrentServices, AvailableServices, ReferenceServices), IsLoading and HasChanges, Handler_SortableListOnDragEnd
    and OnClick_SaveChanges. The page calls this hook and passes the result to the components.
    @origin UBTConnect.App_Services.Services */

interface ServicesFlows {
  /** CurrentServices and AvailableServices: the answer of GetServices, then the local changes. */
  lists: ServicesLists;
  /** GetServices has not answered yet (IsDataFetched False, no error): the List widgets show `list-loading`. */
  isFetching: boolean;
  /** GetServices failed: the List widgets show `list-error`. */
  hasFetchError: boolean;
  /** The skeleton of the content shows: GetServices has not answered, or a save runs. */
  isSkeletonLoading: boolean;
  /** [IsLoading]: a save runs. */
  isLoading: boolean;
  /** Handler_SortableListOnDragEnd: the OnDragEnd event of the two SortableList blocks. */
  onDragEnd: (fromId: string, toId: string, oldIndex: number, newIndex: number, itemId: string) => void;
  /** The remove icon of a favourite: Handler_SortableListOnDragEnd from the favourites to the suggestions, with
      OldIndex = the Order of the favourite and NewIndex = -1. */
  onRemove: (current: CurrentService) => void;
  /** The add icon of a suggestion: Handler_SortableListOnDragEnd from the suggestions to the favourites, with
      OldIndex = -1 and NewIndex = the count of the favourites + 1. */
  onAdd: (service: Service) => void;
  /** OnClick_SaveChanges: the "Save changes" button. */
  onSaveChanges: () => void;
}

export function useServices(): ServicesFlows {
  const getServices = useUserServicesQuery();
  const [changed, setChanged] = useState<ServicesLists | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const isDataFetched = getServices.isSuccess;
  const hasFetchError = getServices.isError;
  const lists = changed ?? getServices.data ?? EMPTY_SERVICES_LISTS;
  // OnAfterFetch_GetServices
  const referenceServices = useMemo(() => referenceServicesOf(getServices.data), [getServices.data]);

  /** Handler_SortableListOnDragEnd: OldIndex = NewIndex changes nothing. Action_ChangeOrderLocal changes copies of
      the variables in place; they are stored also when a List action fails, so the steps before the failure stay
      (TST changes the screen variables in place). A failure then goes to the exception handlers of the action. */
  const onDragEnd = (fromId: string, toId: string, oldIndex: number, newIndex: number, itemId: string) => {
    if (oldIndex === newIndex) return;
    const variables: ChangeOrderVariables = {
      currentServices: [...lists.currentServices],
      availableServices: [...lists.availableServices],
      hasChanges,
    };
    const store = () => {
      setChanged({ currentServices: variables.currentServices, availableServices: variables.availableServices });
      setHasChanges(variables.hasChanges);
    };
    try {
      action_ChangeOrderLocal(
        variables,
        referenceServices,
        newIndex,
        oldIndex,
        fromId === FAVOURITE_LIST,
        toId === FAVOURITE_LIST,
        itemId,
        Number(currentUserId() ?? 0),
      );
    } catch (error) {
      store();
      raiseBubbledToFlowHandler(error);
      return;
    }
    store();
  };

  /** OnClick_SaveChanges: only with changes. It saves the favourites, then shows "Your changes were saved.". After a
      failure, IsLoading stays True, as in the original. */
  const saveChanges = async () => {
    if (!hasChanges) return;
    setIsLoading(true);
    try {
      await changeServicesOrder(lists.currentServices);
      setIsLoading(false);
      feedbackMessageAutoClose({
        title: '',
        message: 'Your changes were saved.',
        messageType: UBT_MessageType_Success,
        encodedHtml: true,
        extendedClass: '',
        delayMs: 0,
        useDebounce: false,
      });
      setHasChanges(false);
    } catch (error) {
      raiseBubbledToFlowHandler(error);
    }
  };

  return {
    lists,
    isFetching: !isDataFetched && !hasFetchError,
    hasFetchError,
    isSkeletonLoading: !(isDataFetched || hasFetchError) || isLoading,
    isLoading,
    onDragEnd,
    onRemove: (current) => {
      onDragEnd(FAVOURITE_LIST, SUGGESTIONS_CONTAINER, current.serviceUser.order, -1, current.service.id);
    },
    onAdd: (service) => {
      onDragEnd(SUGGESTION_LIST, FAVOURITE_LIST, -1, lists.currentServices.length + 1, service.id);
    },
    onSaveChanges: () => {
      void saveChanges();
    },
  };
}
