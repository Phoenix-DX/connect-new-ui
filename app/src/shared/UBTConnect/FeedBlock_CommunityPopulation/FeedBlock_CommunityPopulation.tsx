// @os-block UBTConnect.Home.FeedBlock_CommunityPopulation
import { useEffect, useState } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { log } from '../../../lib/log';
import { useOsNavigate } from '../../../shell/navigation';
import { APP_ID } from '../../../shell/paths';
import { CustomContainer } from '../../UBTConnectLibrary/CustomContainer';
import { CustomText } from '../../UBTConnectLibrary/CustomText';
import { SkeletonSection } from '../../UBTConnectLibrary/SkeletonSection';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Shape,
  UBT_Size,
} from '../../UBTConnectLibrary/lib/staticEntities';
import { fetchCount } from './api';

export interface FeedBlock_CommunityPopulationProps {
  /** OutSystems instance id of the block. */
  id?: string;
}

/** FormatDecimal(LongIntegerToDecimal(n), 0, "", ","): no group separator, no decimals. */
const formatCount = (n: string) => String(Math.round(Number(n) || 0));

/** "Community Population" card of HomeFeed and CountryList (p:UBTConnect.Home.FeedBlock_CommunityPopulation.mvc.js
    view): the member count of DataActionFetchCount ("00000" in a skeleton while it loads); a click opens
    Updates_SingleList (OnClick_Block, controller :365-380). */
export function FeedBlock_CommunityPopulation({ id }: FeedBlock_CommunityPopulationProps) {
  const navigate = useOsNavigate();
  const [fetch, setFetch] = useState({ isDataFetched: false, hasFetchError: false, total: '0' });
  useEffect(() => {
    let alive = true;
    fetchCount()
      .then((total) => {
        if (alive) setFetch({ isDataFetched: true, hasFetchError: false, total });
      })
      .catch((e: unknown) => {
        log.warn('DataActionFetchCount failed', e);
        if (alive) setFetch((f) => ({ ...f, hasFetchError: true }));
      });
    return () => {
      alive = false;
    };
  }, []);
  const isLoading = !fetch.isDataFetched && !fetch.hasFetchError;
  return (
    <OSBlock name="Home.FeedBlock_CommunityPopulation" id={id}>
      <CustomContainer
        options={{
          Background: { BackgroundColor: UBT_Color.PrimaryGradientRadial },
          PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base },
          BorderOptions: { Radius: { GeneralSizeId: UBT_Shape.Medium } },
          IsSkeletonElement: true,
        }}
        onClicked={() => {
          navigate(`/${APP_ID}/Updates_SingleList`);
        }}
      >
        <CustomText
          inText="Community Population"
          inTextOptions={{
            Color: UBT_Color.Neutral0,
            FontSize: UBT_FontSize.DoubleExtraSmall,
            FontWeight: UBT_FontWeight.SemiBold,
          }}
        />
        <SkeletonSection inIsLoading={isLoading}>
          <CustomText
            inTextOptions={{
              Color: UBT_Color.Neutral0,
              FontSize: UBT_FontSize.Heading2,
              FontWeight: UBT_FontWeight.SemiBold,
            }}
            inText={isLoading ? '00000' : formatCount(fetch.total)}
          />
        </SkeletonSection>
      </CustomContainer>
    </OSBlock>
  );
}
