/** @origin UBTConnectLibrary.ConnectCorePatterns.ItemCard_ActionBar */
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import { UBT_Color, UBT_Display, UBT_FontSize, UBT_FontWeight } from '@/lib/ubtConnectLibrary/staticEntities';
import { child, scopeOf } from '@/components/ui/os/blockIds';

/* TST static-entity values that the shared static entities do not list (classes as captured, Bookmarks
   dom/default.html:398-466). */
const UBT_IconSize_NonStandard_18 = 'icon-non-standard-18';
const UBT_Icons_BorderColor = 'connect-icon-border_color';
const UBT_Icons_Check = 'connect-icon-check';
const UBT_JustifyContent_FlexStart = 'justify-content-flex-start';

/** ActionBarOptions (UBTConnectLibrary.ActionBarOptions). */
export interface ActionBarOptions {
  showUnbookmark: boolean;
  showAddNote: boolean;
  showShare: boolean;
}

interface ItemCard_ActionBarProps {
  id?: string;
  actionBarOptions: ActionBarOptions;
  /** Event OnClickUnbookmark (the Unmark IconText). */
  onClickUnbookmark?: () => void;
  onEventAddNote?: () => void;
}

const ACTION_TEXT = { FontSize: UBT_FontSize.DoubleExtraSmall, FontWeight: UBT_FontWeight.SemiBold };

/** Action bar of an item card (survey UBTConnectLibrary.ConnectCorePatterns.ItemCard_ActionBar.mvc.js): CustomContainer
    "ubt-action-bar" (flex, flex-start) with the Unmark (ShowUnbookmark: check icon, primary), Add Note (ShowAddNote)
    and Share (ShowShare) IconTexts. Bookmarks_Card_Item shows Unmark and Add Note, NoteCard_Item Add Note only; no
    caller shows Share, so Share is not ported. */
export function ItemCard_ActionBar({
  id,
  actionBarOptions,
  onClickUnbookmark,
  onEventAddNote,
}: ItemCard_ActionBarProps) {
  const p = scopeOf(id);
  return (
    <OSBlock name="ConnectCorePatterns.ItemCard_ActionBar" id={id}>
      <CustomContainer
        id={child(p, 1)}
        extendedClasses="ubt-action-bar"
        options={{ DisplayOptions: { Display: UBT_Display.Flex, JustifyContent: UBT_JustifyContent_FlexStart } }}
      >
        {actionBarOptions.showUnbookmark && (
          <IconText
            id={child(p, 2)}
            text="Unmark"
            textOptions={{ Color: UBT_Color.Primary, ...ACTION_TEXT }}
            onClicked={onClickUnbookmark}
          >
            <Icon
              id={child(p, 3)}
              inSizeId={UBT_IconSize_NonStandard_18}
              inColorId={UBT_Color.Primary}
              inIconId={UBT_Icons_Check}
            />
          </IconText>
        )}
        {actionBarOptions.showAddNote && (
          <IconText
            id={child(p, 4)}
            text="Add Note"
            textOptions={{ Color: UBT_Color.Neutral7, ...ACTION_TEXT }}
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
