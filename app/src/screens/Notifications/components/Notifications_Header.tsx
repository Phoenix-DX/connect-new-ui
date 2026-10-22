// @os-block UBTConnect.App_Notifications.Notifications_Header
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Badge } from '../../../shared/UBTConnectLibrary/Badge';
import { Columns_Two } from '../../../shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '../../../shared/UBTConnectLibrary/CustomContainer';
import { IconText } from '../../../shared/UBTConnectLibrary/IconText';
import { SkeletonSection } from '../../../shared/UBTConnectLibrary/SkeletonSection';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Size,
} from '../../../shared/UBTConnectLibrary/lib/staticEntities';
import { UBT_Color_RedDark } from './staticEntities';

export interface Notifications_HeaderProps {
  id: string;
  title?: string;
  isLoading?: boolean;
  badgeNumber?: number;
}

/** UBTConnect.App_Notifications.Notifications_Header (p:…Notifications_Header.mvc.js view :170-340): section header
    (background neutral-0, padding x base / y xs, top border l neutral-4, "updates-list__header") with IconText
    (icon on the right, xs spacing, neutral-7 xs semi-bold Title) whose icon is the red-dark xs Badge (BadgeNumber). */
export function Notifications_Header({
  id,
  title = '',
  isLoading = false,
  badgeNumber = 0,
}: Notifications_HeaderProps) {
  return (
    <OSBlock name="App_Notifications.Notifications_Header" id={id}>
      <CustomContainer
        id={`${id.replace(/-Notifications_ListHeader$/, '')}-b1-$b1`}
        extendedClasses="updates-list__header"
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { VerticalSizeId: UBT_Size.ExtraSmall, HorizontalSizeId: UBT_Size.Base },
          MarginSize: {},
          BorderOptions: { Color: UBT_Color.Neutral4, Size: { TopSizeId: UBT_Size.Large } },
        }}
      >
        <Columns_Two
          left={
            <SkeletonSection inIsLoading={isLoading}>
              <IconText
                isIconOnRight
                text={title}
                spacingSize={UBT_Size.ExtraSmall}
                textOptions={{
                  Color: UBT_Color.Neutral7,
                  FontSize: UBT_FontSize.ExtraSmall,
                  FontWeight: UBT_FontWeight.SemiBold,
                }}
              >
                <Badge number={String(badgeNumber)} color={UBT_Color_RedDark} size={UBT_Size.ExtraSmall} />
              </IconText>
            </SkeletonSection>
          }
        />
      </CustomContainer>
    </OSBlock>
  );
}
