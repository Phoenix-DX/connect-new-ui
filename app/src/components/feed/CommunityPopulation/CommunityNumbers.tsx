/** @origin UBTConnect.Directory_CommonBlocks.Directory_CommunityNumbers */
import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Icon } from '@/components/ui/Icon';
import { Skeleton } from '@/components/ui/Skeleton';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Icons,
  UBT_IconsSize,
} from '@/lib/ubtConnectLibrary/staticEntities';

/** Connect_Geography_CS.UI_CommunityStatistics (In_CommunityStatistics): the community counts. The same fields as the
    domain record of `api/member` (a component does not import `api/`). */
export interface CommunityNumbersStatistics {
  In_Change: number;
  In_CountriesCount: number;
  In_HouseholdCount: number;
  In_LocalitiesCount: number;
  In_MembersCount: number;
}

export interface CommunityNumbersProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_IsLoading: the data action of the owner screen has not answered (not IsDataFetched). */
  isLoading: boolean;
  /** In_CommunityStatistics: the answer of DataActionGetCommunityStatistics of the owner screen. */
  communityStatistics: CommunityNumbersStatistics;
}

/* TST values of the static entities that lib/ does not list yet (migration/knowledge/static-entities-tst.json,
   UBTConnect.uBT_Icons2 / uBT_Color / uBT_FontSize / uBT_IconsSize). */
const ICON = {
  SVG_CommunityMembers: UBT_Icons.SVG_CommunityMembers,
  SVG_CommunityHouseholds: UBT_Icons.SVG_CommunityHouseholds,
  SVG_CommunityLocalities: UBT_Icons.SVG_CommunityLocalities,
  SVG_CommunityCountries: UBT_Icons.SVG_CommunityCountries,
  ArrowUp: 'connect-icon-Arrow-up1',
  ArrowDown: 'connect-icon-Arrow-down',
} as const;
const COLOR = { PeachDark: 'peach-dark', GreenDark: 'green-dark', RedDark: 'red-dark' } as const;
const FONT_SIZE_HEADING1 = 'h1';
const ICON_SIZE = { NonStandard_40: 'icon-non-standard-40', ExtraSmall_10: 'icon-extra-small' } as const;

/** Local_CommunityStatistics default (an empty UI_CommunityStatistics record). */
const EMPTY: CommunityNumbersStatistics = {
  In_Change: 0,
  In_CountriesCount: 0,
  In_HouseholdCount: 0,
  In_LocalitiesCount: 0,
  In_MembersCount: 0,
};
/** OnReady while loading: every count 1000 (the skeleton shows "1,000" and "+1,000"). */
const LOADING: CommunityNumbersStatistics = {
  In_Change: 1000,
  In_CountriesCount: 1000,
  In_HouseholdCount: 1000,
  In_LocalitiesCount: 1000,
  In_MembersCount: 1000,
};

/** FormatCurrency(IntegerToDecimal(n), "", 0, "", ","): no symbol, no decimals, "," between the groups of three digits
    (Decimal.toFormat of the runtime keeps the minus sign). */
export const formatCount = (n: number): string => {
  const digits = String(Math.abs(Math.round(n))).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return n < 0 ? `-${digits}` : digits;
};

/** Local_CommunityStatistics, as the block keeps it: OnReady sets the 1000 placeholders when the block starts while
    loading; OnParametersChanged copies In_CommunityStatistics when an input changes and the block is not loading. A
    block that starts not loading keeps the empty record until an input changes, as compiled. */
function useLocalCommunityStatistics(isLoading: boolean, statistics: CommunityNumbersStatistics) {
  const [local, setLocal] = useState(() => (isLoading ? LOADING : EMPTY));
  const [inputs, setInputs] = useState({ isLoading, statistics });
  if (inputs.isLoading !== isLoading || inputs.statistics !== statistics) {
    setInputs({ isLoading, statistics });
    if (!isLoading) setLocal(statistics);
  }
  return local;
}

/** Directory_CommunityNumbers__Number: one count of the right column, with its icon and its label. */
function CommunityNumbersNumber({
  id,
  icon,
  hideBorder = false,
  number,
  label,
}: {
  id?: string;
  icon: string;
  hideBorder?: boolean;
  number: number;
  label: string;
}) {
  return (
    <OSBlock name="Directory_CommonBlocks.Directory_CommunityNumbers__Number" id={id}>
      <div
        className={`directory-numbers-card__number ${hideBorder ? ' ' : 'directory-numbers-card__number--border-top'}`}
        data-container=""
      >
        <div data-container="">
          <Icon inIconId={icon} inSizeId={UBT_IconsSize.Base_24} />
        </div>
        <div data-container="">
          <CustomContainer
            options={{
              TextOptions: {
                Color: UBT_Color.CyanDarker,
                FontSize: UBT_FontSize.Base,
                FontWeight: UBT_FontWeight.SemiBold,
              },
            }}
          >
            <span data-expression="">{formatCount(number)}</span>
          </CustomContainer>
          <CustomContainer options={{ TextOptions: { Color: UBT_Color.Neutral7, FontSize: UBT_FontSize.ExtraSmall } }}>
            <span data-expression="">{label}</span>
          </CustomContainer>
        </div>
      </div>
    </OSBlock>
  );
}

/** "COMMUNITY BY THE NUMBERS" card of HomeFeed (and CountryList): the members with the change of today on the left,
    the households, localities and countries on the right, in a SkeletonSection while the owner screen loads its
    DataActionGetCommunityStatistics. The caller runs the data action and gives its answer. No events. */
export function CommunityNumbers({ id, isLoading, communityStatistics }: CommunityNumbersProps) {
  const local = useLocalCommunityStatistics(isLoading, communityStatistics);
  const change = local.In_Change;
  return (
    <OSBlock name="Directory_CommonBlocks.Directory_CommunityNumbers" id={id}>
      <Skeleton isLoading={isLoading}>
        <div className="directory-numbers-card" data-container="">
          <CustomContainer options={{ TextOptions: { Color: COLOR.PeachDark, FontSize: UBT_FontSize.ExtraSmall } }}>
            COMMUNITY BY THE NUMBERS
          </CustomContainer>
          <div className="directory-numbers-card__content" data-container="">
            <div className="directory-numbers-card__left" data-container="">
              <Icon inIconId={ICON.SVG_CommunityMembers} inSizeId={ICON_SIZE.NonStandard_40} />
              <div data-container="">
                <CustomContainer
                  options={{
                    TextOptions: {
                      Color: UBT_Color.CyanDarker,
                      FontSize: FONT_SIZE_HEADING1,
                      FontWeight: UBT_FontWeight.SemiBold,
                    },
                  }}
                >
                  <span data-expression="">{formatCount(local.In_MembersCount)}</span>
                </CustomContainer>
                <div className="directory-numbers-card__variation" data-container="">
                  {change !== 0 && (
                    <>
                      {change > 0 ? (
                        <Icon inSizeId={ICON_SIZE.ExtraSmall_10} inColorId={COLOR.GreenDark} inIconId={ICON.ArrowUp} />
                      ) : (
                        <Icon inColorId={COLOR.RedDark} inSizeId={ICON_SIZE.ExtraSmall_10} inIconId={ICON.ArrowDown} />
                      )}
                      <CustomContainer
                        options={{
                          TextOptions: {
                            Color: change > 0 ? COLOR.GreenDark : COLOR.RedDark,
                            FontSize: UBT_FontSize.DoubleExtraSmall,
                          },
                        }}
                      >
                        <span data-expression="">{(change > 0 ? '+' : '-') + formatCount(change)}</span>
                      </CustomContainer>
                    </>
                  )}
                  <CustomContainer
                    options={{ TextOptions: { Color: UBT_Color.Neutral7, FontSize: UBT_FontSize.DoubleExtraSmall } }}
                  >
                    <span data-expression="">{change !== 0 ? 'Today' : 'No change today'}</span>
                  </CustomContainer>
                </div>
              </div>
            </div>
            <div className="directory-numbers-card__right" data-container="">
              <CommunityNumbersNumber
                icon={ICON.SVG_CommunityHouseholds}
                hideBorder
                number={local.In_HouseholdCount}
                label="Households"
              />
              <CommunityNumbersNumber
                icon={ICON.SVG_CommunityLocalities}
                label="Localities"
                number={local.In_LocalitiesCount}
              />
              <CommunityNumbersNumber
                icon={ICON.SVG_CommunityCountries}
                label="Countries"
                number={local.In_CountriesCount}
              />
            </div>
          </div>
        </div>
      </Skeleton>
    </OSBlock>
  );
}
