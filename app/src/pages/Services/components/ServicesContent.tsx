import type { CurrentService, Service } from '@/api/service';
import { SkeletonSection } from '@/components/ui/SkeletonSection';
import type { ServicesLists } from '@/pages/Services/hooks/servicesState';
import { FavouriteServiceList } from './FavouriteServiceList';
import type { DragEndHandler } from './setupList';
import { SuggestedServiceList } from './SuggestedServiceList';

export interface ServicesContentProps {
  /** Name of the container that the fixed footer pads. */
  id: string;
  /** CurrentServices and AvailableServices. */
  lists: ServicesLists;
  /** The skeleton shows instead of the lists. */
  isSkeletonLoading: boolean;
  /** GetServices has not answered yet. */
  isFetching: boolean;
  /** GetServices failed. */
  hasFetchError: boolean;
  /** OnDragEnd of the two SortableList blocks. */
  onDragEnd: DragEndHandler;
  /** The remove icon of a favourite. */
  onRemove: (current: CurrentService) => void;
  /** The add icon of a suggestion. */
  onAdd: (service: Service) => void;
}

/** The content of the screen: the skeleton section with the favourites and, when there are services to add, the
    suggestions.
    @origin UBTConnect.App_Services.Services */
export function ServicesContent({
  id,
  lists,
  isSkeletonLoading,
  isFetching,
  hasFetchError,
  onDragEnd,
  onRemove,
  onAdd,
}: ServicesContentProps) {
  return (
    <div data-container="" id={id}>
      <SkeletonSection id="Content" inIsLoading={isSkeletonLoading}>
        <FavouriteServiceList
          services={lists.currentServices}
          isFetching={isFetching}
          hasFetchError={hasFetchError}
          onDragEnd={onDragEnd}
          onRemove={onRemove}
        />
        {lists.availableServices.length > 0 && (
          <SuggestedServiceList
            services={lists.availableServices}
            isFetching={isFetching}
            hasFetchError={hasFetchError}
            onDragEnd={onDragEnd}
            onAdd={onAdd}
          />
        )}
      </SkeletonSection>
    </div>
  );
}
