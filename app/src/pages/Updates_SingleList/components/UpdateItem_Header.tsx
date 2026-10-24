// @os-block UBTConnect.Directory_Updates.UpdateItem_Header
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Badge } from '@/components/ui/Badge';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { IconText } from '@/components/ui/IconText';
import { Skeleton } from '@/components/ui/Skeleton';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Size,
} from '@/lib/ubtConnectLibrary/staticEntities';
import { UBT_Color_RedDark } from './staticEntities';

export interface UpdateItem_HeaderProps {
  /** Instance id (`ListHeader`, or `<row>-b15-ListSectionHeader` inside SectionHeader). */
  id: string;
  /** Prefix of the block's inner widgets (`b12` in the screen, `<row>-b15-b1` inside SectionHeader). */
  scope: string;
  title?: string;
  isLoading?: boolean;
  badgeNumber?: number;
  showMarkAll?: boolean;
  /** Event Click_MarkAll. */
  onClickMarkAll?: () => void;
}

/** UBTConnect.Directory_Updates.UpdateItem_Header (p:…UpdateItem_Header.mvc.js view): CustomContainer
    "updates-list__header" (neutral-0, padding y xs / x base, top border l neutral-4) with Columns_Two (reduce last):
    left SkeletonSection > IconText (icon on the right, xs spacing, neutral-7 xs semi-bold Title) whose icon is the
    red-dark xs Badge (max 9) when BadgeNumber > 0; right "Mark All as Read" (primary xs semi-bold) when ShowMarkAll.
    Captured dom/default.html:177-252. */
export function UpdateItem_Header({
  id,
  scope,
  title = '',
  isLoading = false,
  badgeNumber = 0,
  showMarkAll = false,
  onClickMarkAll,
}: UpdateItem_HeaderProps) {
  return (
    <OSBlock name="Directory_Updates.UpdateItem_Header" id={id}>
      <CustomContainer
        id={`${scope}-$b1`}
        extendedClasses="updates-list__header"
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { VerticalSizeId: UBT_Size.ExtraSmall, HorizontalSizeId: UBT_Size.Base },
          MarginSize: {},
          BorderOptions: { Color: UBT_Color.Neutral4, Size: { TopSizeId: UBT_Size.Large } },
        }}
      >
        <ColumnsTwo
          id={`${scope}-$b2`}
          columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast }}
          left={
            <Skeleton id={`${scope}-$b3`} isLoading={isLoading}>
              <IconText
                id={`${scope}-$b4`}
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
                    id={`${scope}-$b5`}
                    number={String(badgeNumber)}
                    color={UBT_Color_RedDark}
                    size={UBT_Size.ExtraSmall}
                    maxNumber={9}
                  />
                )}
              </IconText>
            </Skeleton>
          }
          right={
            showMarkAll && (
              <div data-container="" style={{ textAlign: 'right' }}>
                <CustomText
                  id={`${scope}-$b6`}
                  inText="Mark All as Read"
                  inTextOptions={{
                    Color: UBT_Color.Primary,
                    FontSize: UBT_FontSize.ExtraSmall,
                    FontWeight: UBT_FontWeight.SemiBold,
                  }}
                  onClicked={onClickMarkAll}
                />
              </div>
            )
          }
        />
      </CustomContainer>
    </OSBlock>
  );
}
