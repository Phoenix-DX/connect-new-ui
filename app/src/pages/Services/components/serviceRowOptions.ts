import { UBT_Color, UBT_ColumnBehaviour, UBT_Size, UBT_VerticalAlign } from '@/lib/ubtConnectLibrary/staticEntities';
import type { ColumnOptions, ContainerOptions } from '@/lib/ubtConnectLibrary/structures';

/* The options that the rows of the two lists share. */

/** The CustomContainer of a row: small vertical padding and a bottom border. */
export const ROW_CONTAINER: ContainerOptions = {
  PaddingSize: { VerticalSizeId: UBT_Size.Small },
  BorderOptions: { Color: UBT_Color.Neutral4, Size: { BottomSizeId: UBT_Size.Small } },
};

/** The columns of the drag handle and the service: the first column is small, the items are centred. */
export const ICON_TEXT_COLUMNS: ColumnOptions = {
  ColumnBehaviour: UBT_ColumnBehaviour.ReduceFirst,
  SpacingSize: UBT_Size.Small,
  VerticalAlign: UBT_VerticalAlign.Center,
};
