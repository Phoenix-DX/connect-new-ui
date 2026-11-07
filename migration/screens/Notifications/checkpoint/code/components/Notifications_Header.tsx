/** @origin UBTConnect.App_Notifications.Notifications_Header */
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Badge } from '@/components/ui/Badge';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { IconText } from '@/components/ui/IconText';
import { Skeleton } from '@/components/ui/Skeleton';
import { UBT_Color, UBT_FontSize, UBT_FontWeight, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { UBT_Color_RedDark } from './staticEntities';

export interface Notifications_HeaderProps {
  id: string;
  title?: string;
  isLoading?: boolean;
  badgeNumber?: number;
}

/** UBTConnect.App_Notifications.Notifications_Header (live TST 2026-11-07, Notifications_Header.mvc.js view): a
    SkeletonSection (isLoading) around the section header (background neutral-0, padding x base / y xs, top border l
    neutral-4, "updates-list__header") with IconText inside a second SkeletonSection
    (icon on the right, xs spacing, neutral-7 xs semi-bold Title) whose icon is the red-dark xs Badge (BadgeNumber).
    If_HasBadge (:290): the Badge shows only when BadgeNumber > 0 (BR-UBTCON-981). */
export function Notifications_Header({
  id,
  title = '',
  isLoading = false,
  badgeNumber = 0,
}: Notifications_HeaderProps) {
  const p = id.replace(/-Notifications_ListHeader$/, '');
  return (
    <OSBlock name="App_Notifications.Notifications_Header" id={id}>
      <Skeleton id={`${p}-b1-$b1`} isLoading={isLoading}>
        <CustomContainer
          id={`${p}-b1-$b2`}
          extendedClasses="updates-list__header"
          options={{
            Background: { BackgroundColor: UBT_Color.Neutral0 },
            PaddingSize: { VerticalSizeId: UBT_Size.ExtraSmall, HorizontalSizeId: UBT_Size.Base },
            MarginSize: {},
            BorderOptions: { Color: UBT_Color.Neutral4, Size: { TopSizeId: UBT_Size.Large } },
          }}
        >
          <ColumnsTwo
            left={
              <Skeleton id={`${p}-b1-$b4`} isLoading={isLoading}>
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
                  {badgeNumber > 0 && (
                    <Badge
                      number={String(badgeNumber)}
                      maxNumber={9}
                      color={UBT_Color_RedDark}
                      size={UBT_Size.ExtraSmall}
                    />
                  )}
                </IconText>
              </Skeleton>
            }
          />
        </CustomContainer>
      </Skeleton>
    </OSBlock>
  );
}
