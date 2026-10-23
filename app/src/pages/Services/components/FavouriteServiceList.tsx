import type { CurrentService } from '@/api/service';
import { Columns_Two } from '@/shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { UBT_Color, UBT_ColumnBehaviour, UBT_IconsSize } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { FAVOURITE_LIST, SORTABLE_GROUP } from '@/pages/Services/hooks/servicesState';
import { UBT_Icons2 } from '@/pages/Services/staticEntities';
import { ServiceDragHandle } from './ServiceDragHandle';
import { ServiceIconText } from './ServiceIconText';
import { ServiceListSection } from './ServiceListSection';
import { ICON_TEXT_COLUMNS, ROW_CONTAINER } from './serviceRowOptions';
import { SortableList } from './SortableList';
import { SortableList_Draggable } from './SortableList_Draggable';
import type { DragEndHandler } from './setupList';

export interface FavouriteServiceListProps {
  /** CurrentServices, in the order of the user. */
  services: CurrentService[];
  /** GetServices has not answered yet. */
  isFetching: boolean;
  /** GetServices failed. */
  hasFetchError: boolean;
  /** OnDragEnd of the SortableList block. */
  onDragEnd: DragEndHandler;
  /** The remove icon of a favourite that is not mandatory. */
  onRemove: (current: CurrentService) => void;
}

/** The favourites: a SortableList block with the section "Favourites". Each row has the drag handle, the service and,
    when the service is not mandatory, the remove icon.
    @origin UBTConnect.App_Services.Services */
export function FavouriteServiceList({
  services,
  isFetching,
  hasFetchError,
  onDragEnd,
  onRemove,
}: FavouriteServiceListProps) {
  return (
    <SortableList id="$b3" group={SORTABLE_GROUP} preventDomMove onDragEnd={onDragEnd}>
      <ServiceListSection
        id="Favourites2"
        titleId="$b5"
        title="Favourites"
        listId={FAVOURITE_LIST}
        isFetching={isFetching}
        hasFetchError={hasFetchError}
      >
        {services.map((current, i) => {
          const scope = `l1-38_${String(i)}`;
          return (
            <CustomContainer key={`${current.service.id}-${String(i)}`} id={`${scope}-$b6`} options={ROW_CONTAINER}>
              <Columns_Two
                id={`${scope}-$b7`}
                columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast }}
                left={
                  <SortableList_Draggable id={`${scope}-$b8`} itemId={current.service.id} useCustomDragHandle>
                    <Columns_Two
                      id={`${scope}-$b9`}
                      columnOptions={ICON_TEXT_COLUMNS}
                      left={<ServiceDragHandle containerId={`${scope}-$b10`} iconId={`${scope}-$b11`} />}
                      right={
                        <ServiceIconText id={`${scope}-$b12`} iconBlockId={`${scope}-$b13`} service={current.service} />
                      }
                    />
                  </SortableList_Draggable>
                }
                right={
                  current.service.isMandatory ? null : (
                    <Icon
                      id={`${scope}-$b14`}
                      inIconId={UBT_Icons2.CancelFill}
                      inColorId={UBT_Color.Neutral7}
                      inSizeId={UBT_IconsSize.Base_24}
                      onClick={() => {
                        onRemove(current);
                      }}
                    />
                  )
                }
              />
            </CustomContainer>
          );
        })}
      </ServiceListSection>
    </SortableList>
  );
}
