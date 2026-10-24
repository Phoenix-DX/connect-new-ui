import { OSBlock } from '@/components/ui/os/OSBlock';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { FilterSheetIcon } from '@/components/filter/FilterSheetIcon';
import { FilterSheetContainer } from '@/containers/FilterSheet';
import type { SearchFlows } from '@/pages/Search/hooks/useSearch';
import { showsCategory } from '@/pages/Search/hooks/searchState';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { SectionSeparator } from '@/components/ui/SectionSeparator';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { HorizontalTagList } from '@/components/ui/HorizontalTagList';
import { Input } from '@/components/ui/Input';
import { Layout_DetailPage } from '@/shared/UBTConnectLibrary/Layout_DetailPage';
import { SkeletonSection } from '@/components/ui/SkeletonSection';
import {
  Shape,
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { RecentSearch } from './RecentSearch';
import { SearchResult_Section } from './SearchResult_Section';
import { Search_BirthdayOptions } from './Search_BirthdayOptions';
import { Connect_SearchCategories } from './staticEntities';

export interface SearchViewProps extends SearchFlows {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_IsInScreenSearch: inside another screen, the layout has no navigation handler and no bottom bar. */
  inIsInScreenSearch: boolean;
}

const TEXT_XS_NEUTRAL9 = { Color: UBT_Color.Neutral9, FontSize: UBT_FontSize.ExtraSmall };

/** The view of the search block: the detail layout with the search input and the filter icon in the header, the
    category tags, then the recent search or the birthday options before a search (or once the term changed) and the
    three result sections after it; the bottom bar unless In_IsInScreenSearch; the filter sheet of the countries. The
    state and the flows come from useSearch.
    @origin UBTConnect.Directory_Search.ScreenBlock_Search */
export function SearchView({
  id,
  inIsInScreenSearch,
  state,
  filterSheet,
  isBirthdaySearchEnabled,
  birthdayOptions,
  recentClicked,
  recentTerms,
  onChange,
  onSubmit,
  onClearString,
  onTagListChanged,
  onRecentSearchTerm,
  onRecentSearchTermRemove,
  onRecentSearchRemoveAll,
  onRecentResultClick,
  onResultClick,
  onFilterSheetInitialized,
  onFilterSheetLoaded,
  onApplyFilters,
}: SearchViewProps) {
  const {
    searchKeyCurrent,
    searchKeyLastSearched,
    hasSearched,
    selectedCategory,
    tagList,
    isLoading,
    hasFiltersApplied,
    hasPeople,
    hasHouseholds,
    hasPlaces,
    isBirthdayKeyWord,
    results,
  } = state;
  const changedSinceSearch = searchKeyCurrent !== searchKeyLastSearched;
  const showsBirthdayOptions = isBirthdaySearchEnabled && isBirthdayKeyWord;
  const hasRecent = recentClicked.length > 0 || recentTerms.length > 0;

  return (
    <OSBlock name="Directory_Search.ScreenBlock_Search" id={id}>
      <Layout_DetailPage
        id="b1-$b1"
        inInitializeNavigationHandler={!inIsInScreenSearch}
        placeholderHeaderTitle={
          <Input
            id="b1-$b2"
            inOptions={{
              InitalString: searchKeyCurrent,
              SearchPrompt: 'Search for households, members or places.',
              Debounce_DelayMS: 300,
              BorderRadius: Shape.Rounded,
              FocusOnReady: true,
            }}
            onEventOnChange={onChange}
            onEventClearString={onClearString}
            onEventSubmit={onSubmit}
          />
        }
        placeholderHeaderRight={
          <FilterSheetIcon
            id="b1-$b3"
            showSubscriptionOnClick={filterSheet.showSubscriptionOnClick}
            isLoaded={filterSheet.isLoaded}
            haveFiltersApplied={hasFiltersApplied}
            bottomSheetId={filterSheet.bottomSheetId}
            onShowUpgradePopUp={showUpgradePopUp}
          />
        }
        headerContent={
          <CustomContainer
            id="b1-$b4"
            options={{
              Background: { BackgroundColor: UBT_Color.Neutral0 },
              PaddingSize: { VerticalSizeId: UBT_Size.Small },
            }}
          >
            <HorizontalTagList
              id="b1-$b5"
              inTagToggleList={tagList}
              inIsSingleSelection
              inHorizontalPadding={UBT_Size.Base}
              inIsMandatorySelection
              onChanged={onTagListChanged}
            />
          </CustomContainer>
        }
        content={
          <>
            {/* The separator, Recent search and the birthday options only before a search or once the term
                changed. */}
            {(!hasSearched || changedSinceSearch) && (
              <>
                <SectionSeparator id="b1-$b6" />
                {hasRecent && !showsBirthdayOptions && (
                  <RecentSearch
                    hasSearched={hasSearched}
                    recentClicked={recentClicked}
                    recentTerms={recentTerms}
                    onRemoveAll={onRecentSearchRemoveAll}
                    onRecentResultClick={onRecentResultClick}
                    onRecentSearchTerm={onRecentSearchTerm}
                    onRecentSearchTermRemove={onRecentSearchTermRemove}
                  />
                )}
                {showsBirthdayOptions && (
                  <CustomContainer
                    id="b1-Padding"
                    options={{ PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base } }}
                  >
                    <Search_BirthdayOptions birthdayOptions={birthdayOptions} onSelected={onRecentSearchTerm} />
                  </CustomContainer>
                )}
              </>
            )}
            {hasSearched && (
              <>
                {changedSinceSearch && <SectionSeparator />}
                <CustomContainer options={{ PaddingSize: { HorizontalSizeId: UBT_Size.Base } }}>
                  <CustomText
                    inPaddingOptions={{ VerticalSizeId: UBT_Size.Base }}
                    fitContent
                    inText="Showing results for "
                    inTextOptions={TEXT_XS_NEUTRAL9}
                  />
                  <CustomText
                    fitContent
                    inText={`'${searchKeyLastSearched}':`}
                    inPaddingOptions={{ VerticalSizeId: UBT_Size.Base }}
                    inTextOptions={{ ...TEXT_XS_NEUTRAL9, FontWeight: UBT_FontWeight.SemiBold }}
                  />
                </CustomContainer>
                <SkeletonSection inIsLoading={isLoading}>
                  {/* Places, Households and Members, then the no-match texts. */}
                  {(hasPlaces || (isLoading && showsCategory(selectedCategory, Connect_SearchCategories.Places))) && (
                    <SearchResult_Section
                      id="b1-PlacesSection"
                      hideSeparator={changedSinceSearch}
                      type={Connect_SearchCategories.Places}
                      searchTerm={searchKeyCurrent}
                      items={results.places}
                      onItemClick={onResultClick}
                    />
                  )}
                  {(hasHouseholds || isLoading) && (
                    <SearchResult_Section
                      id="b1-HouseholdsSection"
                      type={Connect_SearchCategories.Households}
                      searchTerm={searchKeyCurrent}
                      items={results.households}
                      hideSeparator={changedSinceSearch && results.places.length === 0}
                      onItemClick={onResultClick}
                    />
                  )}
                  {(hasPeople || isLoading) && (
                    <SearchResult_Section
                      id="b1-MembersSection"
                      searchTerm={searchKeyCurrent}
                      type={Connect_SearchCategories.People}
                      hideSeparator={
                        changedSinceSearch && results.places.length === 0 && results.households.length === 0
                      }
                      items={results.people}
                      onItemClick={onResultClick}
                    />
                  )}
                  {!hasPeople && !hasHouseholds && !hasPlaces && !isLoading && (
                    <>
                      {searchKeyCurrent === searchKeyLastSearched && <SectionSeparator />}
                      <CustomContainer
                        options={{ PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base } }}
                      >
                        <CustomContainer
                          options={{ PaddingSize: { TopSizeId: UBT_Size.Base, BottomSizeId: UBT_Size.Small } }}
                        >
                          <div data-container="" style={{ textAlign: 'center' }}>
                            <CustomText
                              inText={'We’re sorry. We were not able to find a match.\r\nTry another search?'}
                              fitContent
                              inTextOptions={{
                                Color: UBT_Color.Neutral9,
                                FontSize: UBT_FontSize.Base,
                                FontWeight: UBT_FontWeight.SemiBold,
                              }}
                            />
                          </div>
                        </CustomContainer>
                        <CustomText
                          inText={
                            '• Check for typos and spelling errors.\r\n• Try more general keywords.\r\n• Try different keywords.'
                          }
                          inTextOptions={{
                            Color: UBT_Color.Neutral9,
                            FontSize: UBT_FontSize.Small,
                            FontWeight: UBT_FontWeight.Regular,
                          }}
                          inPaddingOptions={{ VerticalSizeId: UBT_Size.Base }}
                        />
                      </CustomContainer>
                    </>
                  )}
                </SkeletonSection>
              </>
            )}
          </>
        }
        bottom={inIsInScreenSearch ? undefined : <BottomBar id="b1-$b37" />}
        placeholderCommonUIInsideLayout={<CommonUiLayout id="b1-$b38" />}
      />
      {/* The countries only (In_Options of the block's FilterSheet). The two records are new on each render, as
          before this step: FilterSheet takes a new record as a parameter change and runs Action_Define_OptionControl
          again. */}
      <FilterSheetContainer
        id="b1-$b39"
        inOptions={{
          HasSorting: { Enable: false },
          HasCountries: { Enable: true },
          HasLocalities: { Enable: false },
        }}
        inStartFilter={{}}
        onSheetInitialized={onFilterSheetInitialized}
        onLoaded={onFilterSheetLoaded}
        onApplyFilters={(
          optionLists,
          _choices,
          _flatLists,
          _localitiesTitle,
          countriesTitle,
          _sortByTitle,
          hasFilters,
        ) => {
          onApplyFilters(optionLists, countriesTitle, hasFilters);
        }}
      />
    </OSBlock>
  );
}
