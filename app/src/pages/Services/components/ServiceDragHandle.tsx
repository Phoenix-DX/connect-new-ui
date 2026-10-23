import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { UBT_Color, UBT_IconsSize, UBT_Shape, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { ContainerOptions } from '@/shared/UBTConnectLibrary/lib/structures';
import { UBT_Color_Neutral1, UBT_Icons2 } from '@/pages/Services/staticEntities';

export interface ServiceDragHandleProps {
  /** OutSystems instance id of the CustomContainer. */
  containerId: string;
  /** OutSystems instance id of the Icon. */
  iconId: string;
}

const DRAG_HANDLE_CONTAINER: ContainerOptions = {
  Background: { BackgroundColor: UBT_Color_Neutral1 },
  PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.ExtraSmall },
  BorderOptions: { Radius: { GeneralSizeId: UBT_Shape.Rounded } },
  IsInlineBlock: true,
};

/** The drag handle of a row: the CustomContainer `drag-handle` with the drag_indicator icon. SortableJS starts a drag
    only from it.
    @origin UBTConnect.App_Services.Services */
export function ServiceDragHandle({ containerId, iconId }: ServiceDragHandleProps) {
  return (
    <CustomContainer id={containerId} extendedClasses="drag-handle" options={DRAG_HANDLE_CONTAINER}>
      <Icon
        id={iconId}
        inIconId={UBT_Icons2.DragIndicator}
        inColorId={UBT_Color.Neutral6}
        inSizeId={UBT_IconsSize.NonStandard_14}
      />
    </CustomContainer>
  );
}
