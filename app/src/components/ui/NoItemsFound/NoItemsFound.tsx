import { CircleButton } from '@/components/ui/CircleButton';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { OSBlock } from '@/components/ui/os/OSBlock';
import {
  UBT_AlignItems,
  UBT_AvatarSize,
  UBT_Color,
  UBT_Display,
  UBT_FlexDirection,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_IconsSize,
  UBT_JustifyContent,
  UBT_Shape,
  UBT_Size,
} from '@/lib/ubtConnectLibrary/staticEntities';

interface NoItemsFoundProps {
  /** The OutSystems block name of the caller (`App_Notifications.Notifications_NoItemsFound`,
      `Directory_Updates.Updates_NoItemsFound`). */
  blockName: string;
  /** OutSystems instance id of the block ($b13 on both screens). */
  id: string;
  /** The icon of the primary CircleButton (CalendarBusyFill of the caller's icon set). */
  iconId: string;
  /** The title line ("No Notifications Found", "No Updates Found"). */
  title: string;
  /** The text line ("We were unable to find any … to display."). */
  message: string;
}

/** The "no items found" state that two OutSystems blocks share with the same view (Notifications_NoItemsFound.mvc.js
    :126-338, Updates_NoItemsFound.mvc.js :125-338): a neutral-0 CustomContainer (padding base, flex, centred,
    "full-width full-height") holds a neutral-0 bordered box (padding small, border small neutral-3, radius large,
    flex column, centred, "full-width") with the primary CircleButton (Small_40) and its icon (neutral-0, Base_24),
    the title (neutral-10, base, semi-bold, "margin-top-base") and the text (neutral-10, small, regular). The two
    page blocks pass their name, icon and texts. */
export function NoItemsFound({ blockName, id, iconId, title, message }: NoItemsFoundProps) {
  const scope = id.replace(/^\$/, '');
  return (
    <OSBlock name={blockName} id={id}>
      <CustomContainer
        id={`${scope}-$b1`}
        extendedClasses="full-width full-height"
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { GeneralSizeId: UBT_Size.Base },
          DisplayOptions: {
            Display: UBT_Display.Flex,
            AlignItems: UBT_AlignItems.Center,
            JustifyContent: UBT_JustifyContent.Center,
          },
        }}
      >
        <CustomContainer
          id={`${scope}-$b2`}
          extendedClasses="full-width"
          options={{
            Background: { BackgroundColor: UBT_Color.Neutral0 },
            PaddingSize: { GeneralSizeId: UBT_Size.Small },
            BorderOptions: {
              Color: UBT_Color.Neutral3,
              Size: { GeneralSizeId: UBT_Size.Small },
              Radius: { GeneralSizeId: UBT_Shape.Large },
            },
            DisplayOptions: {
              Display: UBT_Display.Flex,
              AlignItems: UBT_AlignItems.Center,
              JustifyContent: UBT_JustifyContent.Center,
              FlexDirection: UBT_FlexDirection.Column,
            },
          }}
        >
          <CircleButton
            id={`${scope}-$b3`}
            sizeId={UBT_AvatarSize.Small_40}
            backgroundColorId={UBT_Color.Primary}
            icon={
              <Icon
                id={`${scope}-$b4`}
                inColorId={UBT_Color.Neutral0}
                inIconId={iconId}
                inSizeId={UBT_IconsSize.Base_24}
              />
            }
          />
          <CustomText
            id={`${scope}-$b5`}
            extendedClasses="margin-top-base"
            inText={title}
            inTextOptions={{
              Color: UBT_Color.Neutral10,
              FontSize: UBT_FontSize.Base,
              FontWeight: UBT_FontWeight.SemiBold,
            }}
          />
          <CustomText
            id={`${scope}-$b6`}
            inTextOptions={{
              Color: UBT_Color.Neutral10,
              FontSize: UBT_FontSize.Small,
              FontWeight: UBT_FontWeight.Regular,
            }}
            inText={message}
          />
        </CustomContainer>
      </CustomContainer>
    </OSBlock>
  );
}
