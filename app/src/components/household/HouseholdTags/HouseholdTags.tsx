import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { HorizontalTagList } from '@/shared/UBTConnectLibrary/HorizontalTagList';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
import { KebabButtonMenu } from '@/shared/UBTConnectLibrary/KebabButtonMenu';
import {
  UBT_AlignItems,
  UBT_Display,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_JustifyContent,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { Tag } from '@/shared/UBTConnectLibrary/lib/structures';
import {
  UBT_Color as UBTConnect_Color,
  UBT_FlexDirection,
  UBT_Icons2 as UBTConnect_Icons2,
  UBT_IconsSize,
} from '@/shared/UBTConnect/lib/staticEntities';

export interface HouseholdTagsProps {
  /** False: the tags and the kebab menu do not react. */
  isEnabled: boolean;
  /** The About and Photos tags (one is always selected). */
  tags: Tag[];
  /** Shows the kebab menu (edit, share) next to the tags. */
  showKebabMenu: boolean;
  /** False: the line "Your profile is private and only visible to you" shows under the tags. */
  isVisible: boolean;
  /** The user selected another tag. */
  onTagsChanged: (tags: Tag[]) => void;
  /** Kebab menu: Edit. */
  onEdit: () => void;
  /** Kebab menu: Share. */
  onShare: () => void;
}

/** The top section of the household card: the tags in one row with the kebab menu at the end, then the
    private-profile line when the household is not visible to other users.
    @origin UBTConnect.Directory_Household.HouseholdDetails_Block */
export function HouseholdTags({
  isEnabled,
  tags,
  showKebabMenu,
  isVisible,
  onTagsChanged,
  onEdit,
  onShare,
}: HouseholdTagsProps) {
  return (
    <>
      <CustomContainer
        options={{
          DisplayOptions: {
            Display: UBT_Display.Flex,
            AlignItems: UBT_AlignItems.Center,
            JustifyContent: UBT_JustifyContent.SpaceBetween,
            FlexDirection: UBT_FlexDirection.Row,
          },
        }}
      >
        <div data-container="">
          <HorizontalTagList
            isEnabled={isEnabled}
            inIsMandatorySelection
            inIsSingleSelection
            inTagToggleList={tags}
            onChanged={onTagsChanged}
          />
        </div>
        {showKebabMenu && (
          <div data-container="">
            <KebabButtonMenu isEnable={isEnabled} onEdit={onEdit} onShare={onShare} />
          </div>
        )}
      </CustomContainer>
      {!isVisible && (
        <CustomContainer options={{ MarginSize: { TopSizeId: UBT_Size.Small } }}>
          <IconText
            spacingSize={UBT_Size.ExtraSmall}
            textOptions={{
              Color: UBTConnect_Color.Info,
              FontSize: UBT_FontSize.Small,
              FontWeight: UBT_FontWeight.Regular,
            }}
            text="Your profile is private and only visible to you"
          >
            <Icon
              inIconId={UBTConnect_Icons2.Lock}
              inSizeId={UBT_IconsSize.NonStandard_16}
              inColorId={UBTConnect_Color.Info}
            />
          </IconText>
        </CustomContainer>
      )}
    </>
  );
}
