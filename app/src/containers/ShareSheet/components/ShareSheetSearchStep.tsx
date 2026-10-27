/** @origin UBTConnect_Utils.CW_Share.ShareSheet */
import { CircleButtonWithLabel } from '@/components/ui/CircleButtonWithLabel';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { EmptyState } from '@/components/ui/EmptyState';
import { Icon } from '@/components/ui/Icon';
import { Input } from '@/components/ui/Input';
import { Skeleton } from '@/components/ui/Skeleton';
import { Shape, UBT_Display } from '@/lib/ubtConnectLibrary/staticEntities';
import type { SearchResult } from '@/lib/ubtConnectUtils/structures';
import {
  Connect_Entity,
  UBT_AvatarSize,
  UBT_Color,
  UBT_FlexDirection,
  UBT_FontSize,
  UBT_IconSize,
  UBT_Icons,
  UBT_ImageSize,
  UBT_Size,
} from '@/lib/ubtConnectUtils/staticEntities';
import { SearchResultItem } from '@/components/search/SearchResultItem';
import { ShareSheetSection } from '@/components/share/ShareSheetSection';
import { ShareSheetSectionTitle } from '@/components/share/ShareSheetSectionTitle';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import { horizontalList, lastPadding, SEARCH_PROMPT } from '@/containers/ShareSheet/shareSheetState';

interface ShareSheetSearchStepProps {
  searchTerm: string;
  isSearching: boolean;
  recentFetched: boolean;
  availableFetched: boolean;
  selectedMembers: SearchResult[];
  searchResultItemList: SearchResult[];
  isSelected: (item: SearchResult) => boolean;
  onSearchFocus: () => void;
  onClearString: () => void;
  onSubmit: (submitted: string) => void;
  onClickSelected: (item: SearchResult) => void;
  onSelect: (item: SearchResult, select: boolean) => void;
  /** OnClick_UpgradeSubscription of a SearchResult_Item (App_Subscription_NavigateToUpgrade). */
  onClickUpgradeSubscription: () => void;
}

/** The search step of the sheet: the search box, the selected members and the result list. */
export function ShareSheetSearchStep({
  searchTerm,
  isSearching,
  recentFetched,
  availableFetched,
  selectedMembers,
  searchResultItemList,
  isSelected,
  onSearchFocus,
  onClearString,
  onSubmit,
  onClickSelected,
  onSelect,
  onClickUpgradeSubscription,
}: ShareSheetSearchStepProps) {
  return (
    <CustomContainer
      extendedClasses="gap-sb flex-1"
      options={{
        PaddingSize: { HorizontalSizeId: UBT_Size.Small },
        DisplayOptions: { Display: UBT_Display.Flex, FlexDirection: UBT_FlexDirection.Column },
      }}
    >
      <Input
        inOptions={{
          SearchPrompt: SEARCH_PROMPT,
          Debounce_DelayMS: 300,
          BorderRadius: Shape.Rounded,
          FocusOnReady: true,
        }}
        onEventClearString={onClearString}
        onEventOnFocus={onSearchFocus}
        onEventSubmit={onSubmit}
      />
      {selectedMembers.length > 0 && (
        <ShareSheetSection
          placeholderTitle={
            <CustomContainer options={{ PaddingSize: { HorizontalSizeId: UBT_Size.Small } }}>
              <ShareSheetSectionTitle
                inFontSize={UBT_FontSize.DoubleExtraSmall}
                inLabel={`${String(selectedMembers.length)} ${selectedMembers.length === 1 ? 'person' : 'people'} selected`}
              />
            </CustomContainer>
          }
          placeholderContent={
            <div className="negative-margin-right-s" data-container="">
              <div className={`${horizontalList} OSFillParent`} data-list="">
                {selectedMembers.map((item, index) => (
                  <CircleButtonWithLabel
                    key={item.Id}
                    extendedClasses={lastPadding(index, selectedMembers.length)}
                    borderColorId={UBT_Color.Primary}
                    sizeId={UBT_AvatarSize.SmallBase_48}
                    isProcessing={false}
                    onOnClick={() => {
                      onClickSelected(item);
                    }}
                    icon={
                      <EntityLazyImage
                        entityType={Connect_Entity.Member}
                        imageSize={{ Height: UBT_ImageSize.Square, Width: UBT_ImageSize.Small_40 }}
                        entityId={item.Id ?? ''}
                      />
                    }
                    badge={
                      <Icon
                        inColorId={UBT_Color.Primary}
                        inIconId={UBT_Icons.RemoveFill}
                        inSizeId={UBT_IconSize.Small_12}
                      />
                    }
                    text={
                      <span className="text-primary" data-expression="">
                        {item.Name}
                      </span>
                    }
                  />
                ))}
              </div>
            </div>
          }
        />
      )}
      <div
        className="connect-share-sheet__content__search-list padding-top-xs negative-margin-bottom-base"
        data-container=""
      >
        {searchResultItemList.length === 0 && isSearching && availableFetched ? (
          <div data-container="">
            <EmptyState
              iconId={UBT_Icons.Search}
              title={<span data-expression="">{`No results found for '${searchTerm}'`}</span>}
              text={
                <span data-expression="">
                  Sorry, we couldn’t find any results for your search. Please check your spelling or try different
                  keywords.
                </span>
              }
            />
          </div>
        ) : searchResultItemList.length === 0 && recentFetched && !isSearching ? null : (
          <Skeleton isLoading={(isSearching && !availableFetched) || (!isSearching && !recentFetched)}>
            <CustomContainer options={{ PaddingSize: { HorizontalSizeId: UBT_Size.Small } }}>
              <ShareSheetSectionTitle inLabel={isSearching ? 'Results' : 'Recently shared'} />
            </CustomContainer>
            <div className="list list-group padding-bottom-s connect-share-sheet__results OSFillParent" data-list="">
              {searchResultItemList.map((item, index) => (
                <SearchResultItem
                  key={`${item.Id ?? ''}-${String(index)}`}
                  inSearchTerm={searchTerm}
                  inSearchResult={item}
                  inShowSubscriptionWarning={item.RecordDisabled === true}
                  inLocationTopPadding={UBT_Size.None}
                  inImageHeightId={UBT_ImageSize.Square}
                  inTitleFontSize={UBT_FontSize.Small}
                  inImageWidthId={UBT_ImageSize.Base_52}
                  onClickUpgradeSubscription={onClickUpgradeSubscription}
                >
                  {item.RecordDisabled === true ? (
                    <Icon inColorId={UBT_Color.Neutral7} inIconId={UBT_Icons.Lock} />
                  ) : isSelected(item) ? (
                    <Icon
                      inColorId={UBT_Color.Primary}
                      inIconId={UBT_Icons.CheckboxFill}
                      onClick={() => {
                        onSelect(item, false);
                      }}
                    />
                  ) : (
                    <Icon
                      inColorId={UBT_Color.Neutral7}
                      inIconId={UBT_Icons.CheckboxOutlineBlank}
                      onClick={() => {
                        onSelect(item, true);
                      }}
                    />
                  )}
                </SearchResultItem>
              ))}
            </div>
          </Skeleton>
        )}
      </div>
    </CustomContainer>
  );
}
