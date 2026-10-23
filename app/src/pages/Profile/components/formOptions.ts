import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Size,
  UBT_VerticalAlign,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { SpacingOptions, TextOptions } from '@/shared/UBTConnectLibrary/lib/structures';

/* The text, padding and column options that the parts of the Profile screen repeat. */

/** A TextOptions record with the color, the font size and the font weight. */
export const textOptions = (Color: string, FontSize: string, FontWeight: string): TextOptions => ({
  Color,
  FontSize,
  FontWeight,
});

/** The title of a form section. */
export const SECTION_TITLE = textOptions(UBT_Color.Neutral10, UBT_FontSize.Heading6, UBT_FontWeight.SemiBold);
/** The label above an input or next to a switch. */
export const FIELD_LABEL = textOptions(UBT_Color.Neutral10, UBT_FontSize.Small, UBT_FontWeight.SemiBold);
/** A note in small text. */
export const NOTE_S = textOptions(UBT_Color.Neutral10, UBT_FontSize.Small, UBT_FontWeight.Regular);
/** A note in extra small text. */
export const NOTE_XS = textOptions(UBT_Color.Neutral10, UBT_FontSize.ExtraSmall, UBT_FontWeight.Regular);

/** The padding of a form section container. */
export const SECTION_PADDING = {
  PaddingSize: { HorizontalSizeId: UBT_Size.Base, TopSizeId: UBT_Size.Small, BottomSizeId: UBT_Size.Base },
};
/** The padding of the container of a contact row with a switch. */
export const SWITCH_ROW_PADDING = { PaddingSize: { TopSizeId: UBT_Size.Base, BottomSizeId: UBT_Size.ExtraSmall } };
/** The two columns of a label and its switch. */
export const SWITCH_COLUMNS = {
  ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast,
  VerticalAlign: UBT_VerticalAlign.Center,
};
export const PAD_BOTTOM_BASE: SpacingOptions = { BottomSizeId: UBT_Size.Base };
export const PAD_BOTTOM_S: SpacingOptions = { BottomSizeId: UBT_Size.Small };
export const PAD_TOP_BASE_BOTTOM_S: SpacingOptions = { TopSizeId: UBT_Size.Base, BottomSizeId: UBT_Size.Small };
