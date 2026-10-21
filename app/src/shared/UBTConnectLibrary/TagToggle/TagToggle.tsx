// @os-block UBTConnectLibrary.ConnectPatterns.TagToggle
import { OSBlock } from '../../../components/OSBlock';
import { CustomContainer } from '../CustomContainer';
import { Icon } from '../Icon';
import { IconText } from '../IconText';
import { formatClasses } from '../lib/actions';
import { UBT_Color, UBT_FontSize, UBT_FontWeight, UBT_IconSize, UBT_Shape, UBT_Size } from '../lib/staticEntities';
import type { Tag } from './types';

export interface TagToggleProps {
  /** OutSystems instance id of the block. */
  id?: string;
  tag?: Tag;
  extendedClasses?: string;
  isEnabled?: boolean;
  /** Event Event_Click(IsSelected): raised only when enabled, with the tag's current IsSelected. */
  onEventClick?: (isSelected: boolean) => void;
}

const MAIN_CONTAINER_CLASS = 'ubt-tag-toggle';

/** Selectable tag (p:UBTConnectLibrary.ConnectPatterns.TagToggle.mvc.js view :167-330): a rounded CustomContainer
    whose colours follow isEnabled / Tag.IsSelected, with the text, or IconText with the icon when Tag.IconId is set.
    CustomContainerClicked raises Event_Click only when isEnabled (:375-400). */
export function TagToggle({ id, tag = {}, extendedClasses = '', isEnabled = true, onEventClick }: TagToggleProps) {
  const { Text = '', IconId = '', IsSelected = true } = tag;
  const pick = (selected: string, notSelected: string, disabled: string) =>
    isEnabled ? (IsSelected ? selected : notSelected) : disabled;
  const textColor = pick(UBT_Color.Neutral0, UBT_Color.Neutral7, UBT_Color.Neutral6);
  return (
    <OSBlock name="ConnectPatterns.TagToggle" id={id}>
      <CustomContainer
        options={{
          Background: { BackgroundColor: pick(UBT_Color.Primary, UBT_Color.Neutral0, UBT_Color.Neutral3) },
          PaddingSize: { VerticalSizeId: UBT_Size.ExtraSmall, HorizontalSizeId: UBT_Size.Base },
          BorderOptions: {
            Color: pick(UBT_Color.Primary, UBT_Color.Neutral5, UBT_Color.Neutral3),
            Size: { GeneralSizeId: UBT_Size.Small },
            Radius: { GeneralSizeId: UBT_Shape.Rounded },
          },
          TextOptions: { Color: textColor, FontSize: UBT_FontSize.Small, FontWeight: UBT_FontWeight.SemiBold },
        }}
        extendedClasses={formatClasses(
          formatClasses(formatClasses(MAIN_CONTAINER_CLASS, 'inline-block'), extendedClasses),
          'ubt-skeleton-section__element',
        )}
        onClicked={() => {
          if (isEnabled) onEventClick?.(IsSelected);
        }}
      >
        {IconId === '' ? (
          <span data-expression="">{Text}</span>
        ) : (
          <IconText
            spacingSize={UBT_Size.Small}
            text={Text}
            textOptions={{ FontSize: UBT_FontSize.Small, FontWeight: UBT_FontWeight.SemiBold }}
          >
            <Icon inColorId={textColor} inIconId={IconId} inSizeId={UBT_IconSize.NonStandard_16} />
          </IconText>
        )}
      </CustomContainer>
    </OSBlock>
  );
}
