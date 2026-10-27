import type {
  ConnectSearch_RecentClickedResults,
  ConnectSearch_RecentSearchTerm,
} from '@/platform/storage/localEntities';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import { Gallery } from '@/components/ui/Gallery';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_IconsSize,
  UBT_ImageSize,
  UBT_Shape,
  UBT_Size,
  UBT_VerticalAlign,
} from '@/lib/ubtConnectLibrary/staticEntities';
import { Connect_Entity } from '@/lib/ubtConnectUtils/staticEntities';
import { Space_ExtraSmall, UBT_Icons2_Search } from './staticEntities';

export interface RecentSearchProps {
  /** [HasSearched] Chooses the text shown without recent rows. */
  hasSearched: boolean;
  /** Get_RecentClickedResults. */
  recentClicked: ConnectSearch_RecentClickedResults[];
  /** Get_RecentSearchTerms. */
  recentTerms: ConnectSearch_RecentSearchTerm[];
  /** "Clear all": OnClick_RecentSearch_RemoveAll. */
  onRemoveAll: () => void;
  /** A recent clicked result: Event_SectionOnItemClick. */
  onRecentResultClick: (recent: ConnectSearch_RecentClickedResults) => void;
  /** A recent term: OnClick_RecentSearchTerm. */
  onRecentSearchTerm: (term: string) => void;
  /** The close icon of a recent term: OnClick_RecentSearchTerm_Remove, with the Id of the row. */
  onRecentSearchTermRemove: (termId: string) => void;
}

const textNeutral9 = (fontSize: string, fontWeight: string) => ({
  Color: UBT_Color.Neutral9,
  FontSize: fontSize,
  FontWeight: fontWeight,
});

/** The "Recent search" container of the search block, never captured (both lists are empty in every
    capture): a header with "Clear all", a gallery of the recent clicked results and the list of the recent terms; the
    getting-started text when both lists are empty.
    @origin UBTConnect.Directory_Search.ScreenBlock_Search */
export function RecentSearch({
  hasSearched,
  recentClicked,
  recentTerms,
  onRemoveAll,
  onRecentResultClick,
  onRecentSearchTerm,
  onRecentSearchTermRemove,
}: RecentSearchProps) {
  const hasRecent = recentClicked.length > 0 || recentTerms.length > 0;
  return (
    <CustomContainer
      id="b1-RecentSearch"
      options={{ PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base } }}
    >
      {hasRecent ? (
        <>
          <CustomContainer options={{ PaddingSize: { BottomSizeId: UBT_Size.Small } }}>
            <ColumnsTwo
              left={
                <CustomText
                  inText="Recent search"
                  inTextOptions={textNeutral9(UBT_FontSize.Small, UBT_FontWeight.SemiBold)}
                />
              }
              right={
                <div data-container="" style={{ textAlign: 'right' }}>
                  <CustomText
                    inText="Clear all"
                    inTextOptions={{
                      Color: UBT_Color.Primary,
                      FontSize: UBT_FontSize.Small,
                      FontWeight: UBT_FontWeight.SemiBold,
                    }}
                    onClicked={onRemoveAll}
                  />
                </div>
              }
            />
          </CustomContainer>
          <CustomContainer id="b1-Recent_SearchResults" options={{ PaddingSize: { VerticalSizeId: UBT_Size.Small } }}>
            <Gallery rowItemsPhone={5} rowItemsTablet={5} rowItemsDesktop={5} itemsGap={Space_ExtraSmall}>
              <div
                className="list list-group OSFillParent"
                data-animation-disabled=""
                data-list=""
                data-virtualization-disabled=""
              >
                {recentClicked.map((r) => (
                  <div
                    key={r.Id}
                    data-container=""
                    className="overflow-wrap-anywhere"
                    style={{ textAlign: 'center' }}
                    onClick={() => {
                      onRecentResultClick(r);
                    }}
                  >
                    <EntityLazyImage
                      entityId={r.EntityId}
                      entityType={r.EntityType}
                      // ScreenBlock_Search.mvc.js:800-803: Width Square for a Member, else NullTextIdentifier.
                      imageSize={{
                        Height: UBT_ImageSize.ExtraSmall_32,
                        Width: r.EntityType === Connect_Entity.Member ? UBT_ImageSize.Square : '',
                      }}
                      inBorderRadius={UBT_Shape.Soft}
                    />
                    <CustomText
                      inTextOptions={{
                        Color: UBT_Color.Neutral10,
                        FontSize: UBT_FontSize.ExtraSmall,
                        FontWeight: UBT_FontWeight.SemiBold,
                      }}
                      inText={r.Name}
                    />
                  </div>
                ))}
              </div>
            </Gallery>
          </CustomContainer>
          <div id="b1-Recent_SearchTerms" className="list list-group OSFillParent" data-list="">
            {recentTerms.map((t) => (
              <CustomContainer
                key={t.Id}
                options={{
                  PaddingSize: { VerticalSizeId: UBT_Size.Small },
                  BorderOptions: { Color: UBT_Color.Neutral3, Size: { BottomSizeId: UBT_Size.Small } },
                }}
              >
                <ColumnsTwo
                  columnOptions={{
                    ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast,
                    VerticalAlign: UBT_VerticalAlign.Center,
                  }}
                  left={
                    <IconText
                      text={t.SearchedTerm}
                      textOptions={textNeutral9(UBT_FontSize.ExtraSmall, UBT_FontWeight.Regular)}
                      spacingSize={UBT_Size.Small}
                      onClicked={() => {
                        onRecentSearchTerm(t.SearchedTerm);
                      }}
                    >
                      <Icon
                        inSizeId={UBT_IconsSize.Base_24}
                        inColorId={UBT_Color.Neutral9}
                        inIconId={UBT_Icons2_Search.History}
                      />
                    </IconText>
                  }
                  right={
                    <Icon
                      inIconId={UBT_Icons2_Search.Close}
                      inSizeId={UBT_IconsSize.Base_24}
                      inColorId={UBT_Color.Neutral7}
                      onClick={() => {
                        onRecentSearchTermRemove(t.Id);
                      }}
                    />
                  }
                />
              </CustomContainer>
            ))}
          </div>
        </>
      ) : (
        <CustomText
          inText={
            hasSearched
              ? 'No recent results to show'
              : 'Please search for a Household, Member or a Place to get started.'
          }
          inPaddingOptions={{ VerticalSizeId: UBT_Size.Base }}
          inTextOptions={{ Color: UBT_Color.Neutral9, FontSize: UBT_FontSize.ExtraSmall }}
        />
      )}
    </CustomContainer>
  );
}
