/** @origin UBTConnect_Utils.CW_Search.SearchResult_Item */
// @os-block UBTConnect_Utils.CW_Search.SearchResult_Item
import { useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { AvatarImage } from '@/components/ui/AvatarImage';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import { TagContent } from '@/components/ui/TagContent';
import { formatConnectDate_WithYear } from '@/lib/ubtConnectLibrary/actions';
import { UBT_ColumnBehaviour, UBT_VerticalAlign } from '@/lib/ubtConnectLibrary/staticEntities';
import { Connect_EventTypes } from '@/lib/ubtConnect/staticEntities';
import {
  Connect_Entity,
  UBT_AvatarSize,
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_IconSize,
  UBT_Icons,
  UBT_ImageSize,
  UBT_Shape,
  UBT_Size,
} from '@/lib/ubtConnectUtils/staticEntities';
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
  /** OnClick_UpgradeSubscription (SearchResult_Item.mvc.js:702-735): App_Subscription_NavigateToUpgrade
      (platform/feedback/dialogs), given by the caller, because components/ does not import platform/. The click on
      "Subscription upgrade needed" runs it. */
  onClickUpgradeSubscription?: () => void;
  /** Placeholder Placeholder_Actions. */
  children?: ReactNode;
}

/** OnInitialize (live UBTConnect_Utils.CW_Search.SearchResult_Item.mvc.js:918-964). The image entity: an Assemble event
    shows its hall (SupperMeetings_aka_Subdivisions, Event_HostSubdivisionId), an LDM event its host household
    (Household, Event_HostHouseholderId), any other row its own Type and Id. A Member or an Orbit event
    (Event_OrbitEventType not "") gets a square, Medium_60 wide, rounded image; any other row an auto height,
    ListThumbnail_104 wide, soft image; In_ImageHeightId / In_ImageWidthId then override. */
function imageOptions(searchResult: SearchResult, heightId: string, widthId: string) {
  const source = searchResult.Event_Source ?? '';
  const entity =
    source === Connect_EventTypes.Assemble
      ? { type: Connect_Entity.SupperMeetings_aka_Subdivisions, id: searchResult.Event_HostSubdivisionId ?? '0' }
      : source === Connect_EventTypes.LDM
        ? { type: Connect_Entity.Household, id: searchResult.Event_HostHouseholderId ?? '0' }
        : { type: searchResult.Type ?? '', id: searchResult.Id ?? '' };
  const isSquare = searchResult.Type === Connect_Entity.Member || (searchResult.Event_OrbitEventType ?? '') !== '';
  return {
    entityType: entity.type,
    entityId: entity.id,
    height: heightId !== '' ? heightId : isSquare ? UBT_ImageSize.Square : UBT_ImageSize.Auto,
    width: widthId !== '' ? widthId : isSquare ? UBT_ImageSize.Medium_60 : UBT_ImageSize.ListThumbnail_104,
    shape: isSquare ? UBT_Shape.Rounded : UBT_Shape.Soft,
  };
}

/** The Orbit event avatar (SearchResult_Item.mvc.js:363-382): AvatarImage with no URL, the TransportPlane fallback icon
    in Primary, a Neutral3 Small border, icon NonStandard_40, size Medium_60, circle. */
const ORBIT_AVATAR = {
  FallbackOptions: {
    IconId: UBT_Icons.TransportPlane,
    FontColor: UBT_Color.Primary,
    BorderColor: UBT_Color.Neutral3,
    BorderSize: UBT_Size.Small,
    IconSizeId: UBT_IconSize.NonStandard_40,
  },
};

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
  onClickUpgradeSubscription,
  children,
}: SearchResultItemProps) {
  // OnInitialize runs once (no OnParametersChanged handler).
  const [image] = useState(() => imageOptions(inSearchResult, inImageHeightId, inImageWidthId));
  const additionalInformation = inSearchResult.AdditionalInformation ?? '';
  const location = inSearchResult.Location ?? '';
  const eventSource = inSearchResult.Event_Source ?? '';
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
                (inSearchResult.Event_OrbitEventType ?? '') !== '' ? (
                  <AvatarImage
                    inAvatarImage={ORBIT_AVATAR}
                    inSizeId={UBT_AvatarSize.Medium_60}
                    inBorderRadius={UBT_Shape.Circle}
                  />
                ) : (
                  <EntityLazyImage
                    entityId={image.entityId}
                    inBorderRadius={image.shape}
                    imageSize={{ Height: image.height, Width: image.width }}
                    entityType={image.entityType}
                    imageURL={inImageURL}
                  />
                )
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
                    /* The Clicked event of IconText (SearchResult_Item.mvc.js:440-466): OnClick_UpgradeSubscription. */
                    <IconText
                      textOptions={{ Color: UBT_Color.BlueDark, FontSize: UBT_FontSize.ExtraSmall }}
                      text="Subscription upgrade needed"
                      onClicked={onClickUpgradeSubscription}
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
                      {/* An event row (SearchResult_Item.mvc.js:699-830): its source tag and its start date. */}
                      {eventSource !== '' && (
                        <CustomContainer options={{ MarginSize: { TopSizeId: UBT_Size.ExtraSmall } }}>
                          <ColumnsTwo
                            columnOptions={{
                              ColumnBehaviour: UBT_ColumnBehaviour.ReduceFirst,
                              SpacingSize: UBT_Size.ExtraSmall,
                              VerticalAlign: UBT_VerticalAlign.Center,
                            }}
                            left={
                              /* TagContent (live SearchResult_Item.mvc.js:757-783) with the padding and shape inputs of
                                 the live TagContent (2026-11-05). */
                              <TagContent
                                inShapeId={UBT_Shape.Soft}
                                inHorizontalPaddingSizeId={UBT_Size.ExtraSmall}
                                inVerticalPaddingSizeId={UBT_Size.ExtraSmall}
                                textColorId={UBT_Color.Primary}
                                backgroundColorId={UBT_Color.CyanLighter}
                                text={eventSource}
                              />
                            }
                            right={
                              <CustomText
                                inText={formatConnectDate_WithYear(inSearchResult.Event_StartDate ?? '').LongLabel}
                                inTextOptions={{ FontSize: UBT_FontSize.ExtraSmall }}
                              />
                            }
                          />
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
