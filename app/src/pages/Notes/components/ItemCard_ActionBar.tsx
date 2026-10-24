/** @origin UBTConnectLibrary.ConnectCorePatterns.ItemCard_ActionBar */
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import { UBT_Color, UBT_Display, UBT_FontSize, UBT_FontWeight } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { child, scopeOf } from './ids';
import { UBT_IconSize_NonStandard_18, UBT_Icons_BorderColor, UBT_JustifyContent_FlexStart } from './staticEntities';

/** ActionBarOptions (UBTConnectLibrary.ActionBarOptions). */
export interface ActionBarOptions {
  showUnbookmark: boolean;
  showAddNote: boolean;
  showShare: boolean;
}

export interface ItemCard_ActionBarProps {
  id?: string;
  actionBarOptions: ActionBarOptions;
  onEventAddNote?: () => void;
}

/** Action bar of an item card (survey UBTConnectLibrary.ConnectCorePatterns.ItemCard_ActionBar.mvc.js): CustomContainer
    "ubt-action-bar" (flex, flex-start) with the Unmark (ShowUnbookmark), Add Note (ShowAddNote) and Share (ShowShare)
    IconTexts. Only Add Note is reachable on this route (NoteCard_Item sets ShowAddNote only); Unmark and Share are
    never rendered here and not ported. */
export function ItemCard_ActionBar({ id, actionBarOptions, onEventAddNote }: ItemCard_ActionBarProps) {
  const p = scopeOf(id);
  return (
    <OSBlock name="ConnectCorePatterns.ItemCard_ActionBar" id={id}>
      <CustomContainer
        id={child(p, 1)}
        extendedClasses="ubt-action-bar"
        options={{ DisplayOptions: { Display: UBT_Display.Flex, JustifyContent: UBT_JustifyContent_FlexStart } }}
      >
        {actionBarOptions.showAddNote && (
          <IconText
            id={child(p, 4)}
            text="Add Note"
            textOptions={{
              Color: UBT_Color.Neutral7,
              FontSize: UBT_FontSize.DoubleExtraSmall,
              FontWeight: UBT_FontWeight.SemiBold,
            }}
            onClicked={onEventAddNote}
          >
            <Icon
              id={child(p, 5)}
              inSizeId={UBT_IconSize_NonStandard_18}
              inColorId={UBT_Color.Neutral7}
              inIconId={UBT_Icons_BorderColor}
            />
          </IconText>
        )}
      </CustomContainer>
    </OSBlock>
  );
}
