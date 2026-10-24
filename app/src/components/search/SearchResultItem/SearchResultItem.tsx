/** @origin UBTConnect_Utils.CW_Search.SearchResult_Item */
// @os-block UBTConnect_Utils.CW_Search.SearchResult_Item
import { useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import { UBT_ColumnBehaviour, UBT_VerticalAlign } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import {
  Connect_Entity,
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_IconSize,
  UBT_Icons,
  UBT_ImageSize,
  UBT_Shape,
  UBT_Size,
} from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import type { SearchResult } from './types';

export interface SearchResultItemProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inSearchResult?: SearchResult;
  inSearchTerm?: string;
  /** In_ImageHeightId / In_ImageWidthId: UBT_ImageSize identifiers overriding the entity defaults. */
  inImageHeightId?: string;
  inImageWidthId?: string;
  inShowSubscriptionWarning?: boolean;
  inImageURL?: string;
  /** UBT_FontSize identifier. */
  inTitleFontSize?: string;
  /** UBT_Size identifier. */
  inLocationTopPadding?: string;
  /** Event OnClick(SearchResult). */
  onOnClick?: (searchResult: SearchResult) => void;
  /** Placeholder Placeholder_Actions. */
  children?: ReactNode;
}

/** OnInitialize (SearchResult_Item.mvc.js:745-778): a Member gets a square, Medium_60 wide, rounded image; any other
    entity an auto height, ListThumbnail_104 wide, soft image; In_ImageHeightId / In_ImageWidthId then override. */
function imageOptions(type: string, heightId: string, widthId: string) {
  const isMember = type === Connect_Entity.Member;
  return {
    height: heightId !== '' ? heightId : isMember ? UBT_ImageSize.Square : UBT_ImageSize.Auto,
    width: widthId !== '' ? widthId : isMember ? UBT_ImageSize.Medium_60 : UBT_ImageSize.ListThumbnail_104,
    shape: isMember ? UBT_Shape.Rounded : UBT_Shape.Soft,
  };
}

const HIGHLIGHT = { Color: UBT_Color.Primary, FontWeight: UBT_FontWeight.Bold };
const GREY_XS = { Color: UBT_Color.Neutral7, FontSize: UBT_FontSize.ExtraSmall };

export function SearchResultItem({
  id,
  inSearchResult = {},
  inSearchTerm = '',
  inImageHeightId = '',
  inImageWidthId = '',
  inShowSubscriptionWarning = false,
  inImageURL = '',
  inTitleFontSize = UBT_FontSize.ExtraSmall,
  inLocationTopPadding = UBT_Size.Small,
  onOnClick,
  children,
}: SearchResultItemProps) {
  // OnInitialize runs once (no OnParametersChanged handler).
  const [image] = useState(() => imageOptions(inSearchResult.Type ?? '', inImageHeightId, inImageWidthId));
  const additionalInformation = inSearchResult.AdditionalInformation ?? '';
  const location = inSearchResult.Location ?? '';
  return (
    <OSBlock name="CW_Search.SearchResult_Item" id={id}>
      <CustomContainer
        extendedClasses="connect-search-result"
        options={{
          PaddingSize: { VerticalSizeId: UBT_Size.Small },
          BorderOptions: { Color: UBT_Color.Neutral3, Size: { BottomSizeId: UBT_Size.Small } },
        }}
        onClicked={() => onOnClick?.(inSearchResult)}
      >
        <ColumnsTwo
          columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast, VerticalAlign: UBT_VerticalAlign.Center }}
          left={
            <ColumnsTwo
              columnOptions={{
                ColumnBehaviour: UBT_ColumnBehaviour.ReduceFirst,
                SpacingSize: UBT_Size.Small,
                VerticalAlign: UBT_VerticalAlign.Center,
              }}
              left={
                <EntityLazyImage
                  entityId={inSearchResult.Id ?? ''}
                  inBorderRadius={image.shape}
                  imageSize={{ Height: image.height, Width: image.width }}
                  entityType={inSearchResult.Type ?? ''}
                  imageURL={inImageURL}
                />
              }
              right={
                <>
                  <CustomText
                    inHighlightOptions={HIGHLIGHT}
                    inHighlightWords={inSearchTerm}
                    inText={inSearchResult.Name ?? ''}
                    inTextOptions={{
                      Color: UBT_Color.Neutral10,
                      FontSize: inTitleFontSize,
                      FontWeight: UBT_FontWeight.SemiBold,
                    }}
                  />
                  {inShowSubscriptionWarning ? (
                    /* Click: App_Subscription_NavigateToUpgrade (not ported, see README). */
                    <IconText
                      textOptions={{ Color: UBT_Color.BlueDark, FontSize: UBT_FontSize.ExtraSmall }}
                      text="Subscription upgrade needed"
                    >
                      <Icon
                        inColorId={UBT_Color.BlueDark}
                        inSizeId={UBT_IconSize.NonStandard_16}
                        inIconId={UBT_Icons.InfoFill}
                      />
                    </IconText>
                  ) : (
                    <>
                      {additionalInformation !== '' && (
                        <CustomText
                          inTextOptions={{
                            Color: UBT_Color.Neutral7,
                            FontSize: UBT_FontSize.DoubleExtraSmall,
                            FontWeight: UBT_FontWeight.Regular,
                          }}
                          inHighlightWords={inSearchTerm}
                          inText={additionalInformation}
                          inHighlightOptions={HIGHLIGHT}
                        />
                      )}
                      {location !== '' && (
                        <CustomContainer
                          options={{
                            PaddingSize: { TopSizeId: inLocationTopPadding },
                            TextOptions: { FontWeight: UBT_FontWeight.SemiBold },
                          }}
                        >
                          <IconText
                            spacingSize={UBT_Size.ExtraSmall}
                            text={location}
                            textOptions={{ ...GREY_XS, FontWeight: UBT_FontWeight.SemiBold }}
                          >
                            <Icon
                              inSizeId={UBT_IconSize.NonStandard_16}
                              inIconId={UBT_Icons.HomePinFill}
                              inColorId={UBT_Color.Neutral7}
                            />
                          </IconText>
                        </CustomContainer>
                      )}
                    </>
                  )}
                </>
              }
            />
          }
          right={<div>{children}</div>}
        />
      </CustomContainer>
    </OSBlock>
  );
}
