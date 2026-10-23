import type { Service } from '@/api/service';
import { SectionSeparator } from '@/shared/UBTConnect/SectionSeparator';
import { Columns_Three } from '@/shared/UBTConnectLibrary/Columns_Three';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { UBT_Color, UBT_ColumnBehaviour, UBT_IconsSize } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import {
  FAVOURITE_LIST,
  SORTABLE_GROUP,
  SUGGESTION_LIST,
  SUGGESTIONS_CONTAINER,
} from '@/pages/Services/hooks/servicesState';
import { UBT_Icons2 } from '@/pages/Services/staticEntities';
import { ServiceDragHandle } from './ServiceDragHandle';
import { ServiceIconText } from './ServiceIconText';
import { ServiceListSection } from './ServiceListSection';
import { ICON_TEXT_COLUMNS, ROW_CONTAINER } from './serviceRowOptions';
import { SortableList } from './SortableList';
import { SortableList_Draggable } from './SortableList_Draggable';
import type { DragEndHandler } from './setupList';

export interface SuggestedServiceListProps {
  /** AvailableServices. */
  services: Service[];
  /** GetServices has not answered yet. */
  isFetching: boolean;
  /** GetServices failed. */
  hasFetchError: boolean;
  /** OnDragEnd of the SortableList block. */
  onDragEnd: DragEndHandler;
  /** The add icon of a suggestion. */
  onAdd: (service: Service) => void;
}

/** DenyLists of the block: the rows of these lists cannot be dropped in the suggestions. So the suggestions do not
    change order, and a favourite cannot be dragged to them. */
const DENY_LISTS = [SUGGESTION_LIST, FAVOURITE_LIST];

/** The suggestions: the section separator, then a SortableList block with the section "Suggestions". Each row has the
    drag handle, the service and the add icon.
    @origin UBTConnect.App_Services.Services */
export function SuggestedServiceList({
  services,
  isFetching,
  hasFetchError,
  onDragEnd,
  onAdd,
}: SuggestedServiceListProps) {
  return (
    <>
      <SectionSeparator id="$b15" />
      <SortableList id="$b16" group={SORTABLE_GROUP} denyLists={DENY_LISTS} preventDomMove onDragEnd={onDragEnd}>
        <ServiceListSection
          id={SUGGESTIONS_CONTAINER}
          titleId="$b18"
          title="Suggestions"
          listId={SUGGESTION_LIST}
          isFetching={isFetching}
          hasFetchError={hasFetchError}
        >
          {services.map((service, i) => {
            const scope = `l2-37_${String(i)}`;
            return (
              <SortableList_Draggable
                key={`${service.id}-${String(i)}`}
                id={`${scope}-$b19`}
                itemId={service.id}
                useCustomDragHandle
              >
                <CustomContainer id={`${scope}-$b20`} options={ROW_CONTAINER}>
                  <Columns_Three
                    id={`${scope}-$b21`}
                    columnOptions={{ ...ICON_TEXT_COLUMNS, ColumnBehaviour: UBT_ColumnBehaviour.ExpandMiddle }}
                    left={<ServiceDragHandle containerId={`${scope}-$b22`} iconId={`${scope}-$b23`} />}
                    middle={<ServiceIconText id={`${scope}-$b24`} iconBlockId={`${scope}-$b25`} service={service} />}
                    right={
                      <Icon
                        id={`${scope}-$b26`}
                        inIconId={UBT_Icons2.AddCircle}
                        inColorId={UBT_Color.Primary}
                        inSizeId={UBT_IconsSize.Base_24}
                        onClick={() => {
                          onAdd(service);
                        }}
                      />
                    }
                  />
                </CustomContainer>
              </SortableList_Draggable>
            );
          })}
        </ServiceListSection>
      </SortableList>
    </>
  );
}
