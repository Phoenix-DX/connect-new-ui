/** @origin UBTConnect.Home.FeedBlock_CommunityPopulation */
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Skeleton } from '@/components/ui/Skeleton';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Shape,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface CommunityPopulationProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** DataActionFetchCount has not answered yet (not IsDataFetched and no fetch error). */
  isLoading: boolean;
  /** UI_MembersStatistics.TotalNumberOfMembers (Long Integer as text); "0" before the answer and after an error. */
  total: string;
  /** OnClick_Block: the caller opens Updates_SingleList. */
  onClick: () => void;
}

/** FormatDecimal(LongIntegerToDecimal(n), 0, "", ","): no group separator, no decimals. */
const formatCount = (n: string) => String(Math.round(Number(n) || 0));

/** "Community Population" card of HomeFeed and CountryList: the member count of DataActionFetchCount ("00000" in a
    skeleton while it loads). The caller runs the fetch (`useCommunityPopulationQuery` of `api/member`) and the click
    (OnClick_Block → Updates_SingleList). */
export function CommunityPopulation({ id, isLoading, total, onClick }: CommunityPopulationProps) {
  return (
    <OSBlock name="Home.FeedBlock_CommunityPopulation" id={id}>
      <CustomContainer
        options={{
          Background: { BackgroundColor: UBT_Color.PrimaryGradientRadial },
          PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base },
          BorderOptions: { Radius: { GeneralSizeId: UBT_Shape.Medium } },
          IsSkeletonElement: true,
        }}
        onClicked={onClick}
      >
        <CustomText
          inText="Community Population"
          inTextOptions={{
            Color: UBT_Color.Neutral0,
            FontSize: UBT_FontSize.DoubleExtraSmall,
            FontWeight: UBT_FontWeight.SemiBold,
          }}
        />
        <Skeleton isLoading={isLoading}>
          <CustomText
            inTextOptions={{
              Color: UBT_Color.Neutral0,
              FontSize: UBT_FontSize.Heading2,
              FontWeight: UBT_FontWeight.SemiBold,
            }}
            inText={isLoading ? '00000' : formatCount(total)}
          />
        </Skeleton>
      </CustomContainer>
    </OSBlock>
  );
}
