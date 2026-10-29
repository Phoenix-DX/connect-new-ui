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
import { Skeleton } from '@/components/ui/Skeleton';
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
import { UBT_Icons2_Search } from './staticEntities';

export interface RecentSearchProps {
  /** [HasSearched] Chooses the text shown without recent rows. */
  hasSearched: boolean;
  /** [RecentClickedResults] The rows of the recent clicked results list. */
  recentClicked: ConnectSearch_RecentClickedResults[];
  /** Get_FilteredRecentClickedResults.Out_RecentClickedResults: with the recent terms, the show condition of the
      header, the lists and "Clear all" (S:562, S:642). */
  filteredRecentClicked: ConnectSearch_RecentClickedResults[];
  /** Not Get_FilteredRecentClickedResults.IsDataFetched: the recent clicked results have the skeleton look (S:740). */
  isRecentClickedLoading: boolean;
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

/** The "Recent search" container of the search block, never captured with rows (both lists are empty in every
    capture): a header with "Clear all", the horizontal list of the recent clicked results in a skeleton section and
    the list of the recent terms; the getting-started text when both lists are empty. S = ScreenBlock_Search.mvc.js of
    the capture of 2026-10-29.
    @origin UBTConnect.Directory_Search.ScreenBlock_Search */
export function RecentSearch({
  hasSearched,
  recentClicked,
  filteredRecentClicked,
  isRecentClickedLoading,
  recentTerms,
  onRemoveAll,
  onRecentResultClick,
  onRecentSearchTerm,
  onRecentSearchTermRemove,
}: RecentSearchProps) {
  const hasRecent = filteredRecentClicked.length > 0 || recentTerms.length > 0;
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
            {/* S:738-886: a SkeletonSection (alias 13), loading until Get_FilteredRecentClickedResults has data, around
                the list of RecentClickedResults; the theme lays it out as one scrolling row. */}
            <Skeleton id="b1-$b13" isLoading={isRecentClickedLoading}>
              <div
                className="list list-group recent-search-list OSFillParent"
                data-animation-disabled=""
                data-list=""
                data-virtualization-disabled=""
              >
                {recentClicked.map((r) => (
                  <div
                    key={r.Id}
                    data-container=""
                    className="recent-search-item overflow-wrap-anywhere"
                    style={{ textAlign: 'center' }}
                    onClick={() => {
                      onRecentResultClick(r);
                    }}
                  >
                    <EntityLazyImage
                      entityId={r.EntityId}
                      entityType={r.EntityType}
                      // S:822-829: Width Square for a Member, else NullTextIdentifier.
                      imageSize={{
                        Height: UBT_ImageSize.ExtraSmall_32,
                        Width: r.EntityType === Connect_Entity.Member ? UBT_ImageSize.Square : '',
                      }}
                      inBorderRadius={UBT_Shape.Soft}
                      // S:832: In_ForceLoadingState = not Get_FilteredRecentClickedResults.IsDataFetched.
                      inForceLoadingState={isRecentClickedLoading}
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
            </Skeleton>
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
                      // S:979-983: IsOverflowEllipsis = True (class ubt-custom-text-ellipsis).
                      textOptions={{
                        ...textNeutral9(UBT_FontSize.ExtraSmall, UBT_FontWeight.Regular),
                        IsOverflowEllipsis: true,
                      }}
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
