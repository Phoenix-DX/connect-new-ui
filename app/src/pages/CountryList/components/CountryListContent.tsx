import type { CountrySummary } from '@/api/country';
import { StatisticsTypedItem } from '@/components/directory/StatisticsTypedItem';
import { CommunityPopulation } from '@/components/feed/CommunityPopulation';
import { OSList } from '@/components/ui/os/OSList';
import { Columns_Two } from '@/shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { getFlagURLByCountryCode } from '@/shared/UBTConnectLibrary/lib/actions';
import type { ContainerOptions, TextOptions } from '@/shared/UBTConnectLibrary/lib/structures';
import {
  UBT_ColumnBehaviour,
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_IconSize,
  UBT_Shape,
  UBT_Size,
  UBT_VerticalAlign,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { Connect_Entity, UBT_ImageSize } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { UBT_LazyImage } from '@/shared/UBTConnect_Utils/UBT_LazyImage';
import { countText, type CountriesFetchStatus, type UserGeography } from '@/pages/CountryList/hooks/countryListState';
import { UBT_Icons2_CountryList } from './staticEntities';

export interface CountryListContentProps {
  /** LocalCacheControl_UserInformation: the two header cards (a skeleton until isFetched). */
  user: UserGeography;
  /** GetCountriesStatistics.Out_CountriesStatistics (the skeleton rows while loading). */
  countries: CountrySummary[];
  fetchStatus: CountriesFetchStatus;
  /** The skeleton of the country list: neither IsDataFetched nor HasFetchError. */
  isListLoading: boolean;
  /** FeedBlock_CommunityPopulation: FetchCount is pending. */
  isCommunityPopulationLoading: boolean;
  /** FeedBlock_CommunityPopulation: the count of the community. */
  communityPopulationTotal: string;
  /** OnClick_MyLocality. */
  onMyLocalityClicked: () => void;
  /** OnClick_MyCountry. */
  onMyCountryClicked: () => void;
  /** OnClick_Block of FeedBlock_CommunityPopulation. */
  onCommunityPopulationClicked: () => void;
  /** OnClick_LegendInfo. */
  onLegendInfoClicked: () => void;
  /** Handler_StatisticsList_Clicked(Event_Id): a country row, with its country code. */
  onCountryClicked: (countryCode: string) => void;
}

/** The two header cards: Neutral0 background, padding Base, radius Medium. */
const CARD_OPTIONS: ContainerOptions = {
  Background: { BackgroundColor: UBT_Color.Neutral0 },
  PaddingSize: { GeneralSizeId: UBT_Size.Base },
  BorderOptions: { Radius: { GeneralSizeId: UBT_Shape.Medium } },
};
const CARD_LABEL: TextOptions = {
  Color: UBT_Color.Neutral6,
  FontSize: UBT_FontSize.Small,
  FontWeight: UBT_FontWeight.SemiBold,
};
const CARD_NAME: TextOptions = {
  Color: UBT_Color.Neutral10,
  FontSize: UBT_FontSize.Base,
  FontWeight: UBT_FontWeight.SemiBold,
};
const CARD_COUNT: TextOptions = {
  Color: UBT_Color.Primary,
  FontSize: UBT_FontSize.ExtraSmall,
  FontWeight: UBT_FontWeight.SemiBold,
};
const CARD_IMAGE_SIZE = { Height: UBT_ImageSize.Base_52, Width: UBT_ImageSize.Square };
/** NullIdentifier() as text: no entity, so UBT_LazyImage asks for no signed image. */
const NULL_ID = '0';
/** Runtime key of the countries List in the default capture (`l1-66_<n>`, dom/default.html). */
const LIST_KEY = '66';

/** The Content placeholder of the screen: the "MY LOCALITY" and "MY COUNTRY" cards (a skeleton until the user
    information answers), FeedBlock_CommunityPopulation, the "Browse by Country" title with the legend info icon, and
    the List of countries (`list-loading` until GetCountriesStatistics answers, `list-error` after it fails), one
    Statistics_TypedItem per country.
    @origin UBTConnect.Directory_Locality.CountryList */
export function CountryListContent({
  user,
  countries,
  fetchStatus,
  isListLoading,
  isCommunityPopulationLoading,
  communityPopulationTotal,
  onMyLocalityClicked,
  onMyCountryClicked,
  onCommunityPopulationClicked,
  onLegendInfoClicked,
  onCountryClicked,
}: CountryListContentProps) {
  const listClass = `list list-group${
    fetchStatus === 'notFetched' ? ' list-loading' : fetchStatus === 'error' ? ' list-error' : ''
  }`;
  return (
    <CustomContainer id="Content" options={{ PaddingSize: { GeneralSizeId: UBT_Size.Base } }}>
      <SkeletonSection id="HeaderLoading" inIsLoading={!user.isFetched}>
        <Columns_Two
          id="HeaderColumns"
          columnOptions={{ SpacingSize: UBT_Size.Small }}
          left={
            <CustomContainer id="$b7" options={CARD_OPTIONS} onClicked={onMyLocalityClicked}>
              <div data-container="" style={{ textAlign: 'center' }}>
                <UBT_LazyImage
                  id="$b8"
                  inBorderRadius={UBT_Shape.Circle}
                  entityType={Connect_Entity.Locality}
                  entityId={NULL_ID}
                  imageSize={CARD_IMAGE_SIZE}
                />
                <CustomText id="$b9" inTextOptions={CARD_LABEL} inText="MY LOCALITY" />
                <CustomText id="$b10" inText={user.localityName} inTextOptions={CARD_NAME} />
                <CustomText
                  id="$b11"
                  inTextOptions={CARD_COUNT}
                  inText={countText(user.localitySubdivisionCount, ' Supper Meeting', ' Supper Meetings')}
                />
              </div>
            </CustomContainer>
          }
          right={
            <CustomContainer id="$b12" options={CARD_OPTIONS} onClicked={onMyCountryClicked}>
              <div data-container="" style={{ textAlign: 'center' }}>
                <UBT_LazyImage
                  id="$b13"
                  imageURL={getFlagURLByCountryCode(user.countryCode)}
                  inBorderRadius={UBT_Shape.Circle}
                  extendedClass="country-flag"
                  imageSize={CARD_IMAGE_SIZE}
                  entityId={NULL_ID}
                  entityType={Connect_Entity.Locality}
                />
                <CustomText id="$b14" inTextOptions={CARD_LABEL} inText="MY COUNTRY" />
                <CustomText id="$b15" inText={user.countryName} inTextOptions={CARD_NAME} />
                <CustomText
                  id="$b16"
                  inTextOptions={CARD_COUNT}
                  inText={countText(user.countryLocalityCount, ' Locality', ' Localities')}
                />
              </div>
            </CustomContainer>
          }
        />
      </SkeletonSection>
      <CustomContainer id="Population" options={{ PaddingSize: { TopSizeId: UBT_Size.Base } }}>
        <CommunityPopulation
          id="$b18"
          isLoading={isCommunityPopulationLoading}
          total={communityPopulationTotal}
          onClick={onCommunityPopulationClicked}
        />
      </CustomContainer>
      <CustomContainer id="Legend" options={{ PaddingSize: { VerticalSizeId: UBT_Size.Base } }}>
        <Columns_Two
          id="Title"
          columnOptions={{
            ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast,
            VerticalAlign: UBT_VerticalAlign.Center,
          }}
          left={<CustomText id="$b21" inTextOptions={CARD_NAME} inText="Browse by Country" />}
          right={
            <Icon
              id="$b22"
              inColorId={UBT_Color.Primary}
              inIconId={UBT_Icons2_CountryList.Info}
              inSizeId={UBT_IconSize.NonStandard_16}
              onClick={onLegendInfoClicked}
            />
          }
        />
      </CustomContainer>
      <SkeletonSection id="$b23" inIsLoading={isListLoading}>
        <OSList
          className={listClass}
          animateItems
          positionRelative
          source={countries}
          keyOf={(_c, i) => `${LIST_KEY}_${i}`}
        >
          {(c, i) => (
            <div
              data-container=""
              style={{ cursor: 'pointer' }}
              onClick={() => {
                onCountryClicked(c.countryCode);
              }}
            >
              <StatisticsTypedItem
                id={`l1-${LIST_KEY}_${i}-$b24`}
                inHasImage={c.avatarURL !== ''}
                uICountryStatistics={{ UI_StatisticsTexts: c.texts, Name: c.title, ImageURL: c.avatarURL }}
              />
            </div>
          )}
        </OSList>
      </SkeletonSection>
    </CustomContainer>
  );
}
