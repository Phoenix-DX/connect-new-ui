import type { ReactNode } from 'react';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { UBT_Color, UBT_FontWeight, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import type { ContainerOptions, TextOptions } from '@/lib/ubtConnectLibrary/structures';
import { UBT_FontSize_Heading6 } from '@/pages/Services/staticEntities';

export interface ServiceListSectionProps {
  /** Name of the CustomContainer of the section. */
  id: string;
  /** OutSystems instance id of the CustomText of the title. */
  titleId: string;
  title: string;
  /** Name of the List widget. */
  listId: string;
  /** GetServices has not answered yet: the List widget has the class `list-loading`. */
  isFetching: boolean;
  /** GetServices failed: the List widget has the class `list-error`. */
  hasFetchError: boolean;
  /** The rows of the list. */
  children?: ReactNode;
}

const SECTION_CONTAINER: ContainerOptions = {
  PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base },
};
const TITLE_TEXT: TextOptions = {
  Color: UBT_Color.Neutral10,
  FontSize: UBT_FontSize_Heading6,
  FontWeight: UBT_FontWeight.SemiBold,
};

/** The classes of an OutSystems List widget: "list list-group", the fetch status of its data source, and the grid
    class. */
const listClass = (isFetching: boolean, hasFetchError: boolean) =>
  `list list-group${isFetching ? ' list-loading' : ''}${hasFetchError ? ' list-error' : ''} OSFillParent`;

/** A section of the screen: the CustomContainer with the title and the List widget of the rows. SetupList of the
    SortableList block finds the List widget by its class `list`.
    @origin UBTConnect.App_Services.Services */
export function ServiceListSection({
  id,
  titleId,
  title,
  listId,
  isFetching,
  hasFetchError,
  children,
}: ServiceListSectionProps) {
  return (
    <CustomContainer id={id} options={SECTION_CONTAINER}>
      <CustomText
        id={titleId}
        inText={title}
        inTextOptions={TITLE_TEXT}
        inPaddingOptions={{ VerticalSizeId: UBT_Size.Small }}
      />
      <div className={listClass(isFetching, hasFetchError)} data-list="" id={listId} style={{ position: 'relative' }}>
        {children}
      </div>
    </CustomContainer>
  );
}
