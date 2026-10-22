// @os-block UBTConnect.Directory_Search.ScreenBlock_Search
import { useEffect, useRef, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { useFlagOn } from '@/platform/flags/flags';
import { BottomBarMenu } from '../../../shared/UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '../../../shared/UBTConnect/CommonUI_InsideLayout';
import { FilterSheet } from '../../../shared/UBTConnect/FilterSheet';
import { FilterSheet_Icon } from '../../../shared/UBTConnect/FilterSheet_Icon';
import { SectionSeparator } from '../../../shared/UBTConnect/SectionSeparator';
import { Connect_Entity } from '../../../shared/UBTConnect_Utils/lib/staticEntities';
import { UBT_LazyImage } from '../../../shared/UBTConnect_Utils/UBT_LazyImage';
import { Columns_Two } from '../../../shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '../../../shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '../../../shared/UBTConnectLibrary/CustomText';
import { HorizontalTagList, type Tag } from '../../../shared/UBTConnectLibrary/HorizontalTagList';
import { Icon } from '../../../shared/UBTConnectLibrary/Icon';
import { IconText } from '../../../shared/UBTConnectLibrary/IconText';
import { Gallery } from '../../../shared/osui/Gallery';
import { Input } from '../../../shared/UBTConnectLibrary/Input';
import { Layout_DetailPage } from '../../../shared/UBTConnectLibrary/Layout_DetailPage';
import { SkeletonSection } from '../../../shared/UBTConnectLibrary/SkeletonSection';
import {
  Shape,
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_IconsSize,
  UBT_ImageSize,
  UBT_Shape,
  UBT_Size,
  UBT_VerticalAlign,
} from '../../../shared/UBTConnectLibrary/lib/staticEntities';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import {
  NotRegisteredException,
  UserException,
  exceptionMessage,
  isInstanceOf,
  isSystemException,
  isUserException,
  raiseToFlowHandler,
} from '@/legacy/os/exceptions';
import {
  type ConnectSearch_RecentClickedResults,
  type ConnectSearch_RecentSearchTerm,
  deleteConnectSearch_RecentSearchTerm,
  getAllSearchRecentClickedResultsByUserId,
  get_RecentClickedResults,
  get_RecentSearchTerms,
  removeAllRecentSearch,
  saveRecentClickedResult,
  saveRecentSearchTerm,
} from '@/platform/storage/localEntities';
import { setPreloadObject, useOsNavigate, useViewState } from '@/platform/navigation';
import { getClientVar } from '@/platform/session/session';
import { fetchSearchResults, useSearchBirthdayOptions } from '../api';
import type { SearchResult, SearchResults, SearchVariables } from '../types';
import { initialTagList, isBirthdayKeyWord, showsCategory, validateSearchPhoneNumber } from './actions';
import { SearchResult_Section } from './SearchResult_Section';
import { Search_BirthdayOptions } from './Search_BirthdayOptions';
import { Connect_SearchCategories, Space_ExtraSmall, UBT_Icons2_Search } from './staticEntities';

export interface ScreenBlock_SearchProps {
  id?: string;
  inIsInScreenSearch?: boolean;
  inIsEventNavigation?: boolean;
  inSearchTargetId?: string;
  /** Event Event_SearchResultClick(SearchResult). */
  onEventSearchResultClick?: (searchResult: SearchResult) => void;
}

const NO_RESULTS: SearchResults = { households: [], people: [], places: [] };

const TEXT_XS_NEUTRAL9 = { Color: UBT_Color.Neutral9, FontSize: UBT_FontSize.ExtraSmall };

/** UBTConnect Directory_Search.ScreenBlock_Search (p:UBTConnect.Directory_Search.ScreenBlock_Search.mvc.js: model
    :1-200, view :201-1830, controller :1830-4100). */
export function ScreenBlock_Search({
  id,
  inIsInScreenSearch = false,
  inIsEventNavigation = false,
  inSearchTargetId = '',
  onEventSearchResultClick,
}: ScreenBlock_SearchProps) {
  const navigate = useOsNavigate();
  const birthdaySearchFlag = useFlagOn('C2EnableSearchByBirthday'); // Connect_OutSystems_PermissionCheck (default-only, on)
  const carouselEnabled = useFlagOn('C2EnableCarousel'); // GetHasCarouselEnabled (default-only, on)
  // Block variables kept by the view cache (P-BACK).
  const [searchKeyCurrent, setSearchKeyCurrent] = useViewState('SearchKey_Current', '');
  const [searchKeyLastSearched, setSearchKeyLastSearched] = useViewState('SearchKey_LastSearched', '');
  const [hasSearched, setHasSearched] = useViewState('HasSearched', false);
  const [selectedCategory, setSelectedCategory] = useViewState<string>(
    'SelectedCategory',
    Connect_SearchCategories.All,
  );
  // OnInitialize: TagList = SearchCategory_GetList (:3299-3310).
  const [tagList, setTagList] = useViewState<Tag[]>('TagList', initialTagList(Connect_SearchCategories.All));
  const [selectedCountryIds, setSelectedCountryIds] = useViewState<string[]>('SelectedCountryIds', []);
  const [isLoading, setIsLoading] = useViewState('IsLoading', false);
  const [hasFiltersApplied, setHasFiltersApplied] = useViewState('HasFiltersApplied', false);
  const [hasPeople, setHasPeople] = useViewState('HasPeople', false);
  const [hasHouseholds, setHasHouseholds] = useViewState('HasHouseholds', false);
  const [hasPlaces, setHasPlaces] = useViewState('HasPlaces', false);
  const [isBirthdayKey, setIsBirthdayKey] = useViewState('isBirthdayKeyWord', false);
  const [results, setResults] = useViewState<SearchResults>('FetchSearchResults', NO_RESULTS);
  const [bottomSheetIdFilter, setBottomSheetIdFilter] = useState('');
  const [filterIsLoaded, setFilterIsLoaded] = useState(false);
  const [filterShowSubscription, setFilterShowSubscription] = useState(false);
  const [isBirthdaySearchEnabled, setIsBirthdaySearchEnabled] = useState(false);
  const fetchSeq = useRef(0);

  // OnReady (:3253-3261): isBirthdaySearchEnabled = permission check; when True, Refresh Get_SearchBirthdayOptions.
  useEffect(() => {
    let alive = true;
    void Promise.resolve().then(() => {
      if (alive) setIsBirthdaySearchEnabled(birthdaySearchFlag);
    });
    return () => {
      alive = false;
    };
  }, [birthdaySearchFlag]);
  const birthdayOptions = useSearchBirthdayOptions(isBirthdaySearchEnabled);

  const variables = (o: Partial<SearchVariables> = {}): SearchVariables => ({
    searchKeyCurrent,
    searchKeyLastSearched,
    hasSearched,
    selectedCategory,
    selectedCountryIds,
    bottomSheetIdFilter,
    bottomSheetIdFilterIsLoaded: filterIsLoaded,
    bottomSheetIdFilterShowSubscriptionOnClick: filterShowSubscription,
    hasFiltersApplied,
    isBirthdayKeyWord: isBirthdayKey,
    isBirthdaySearchEnabled,
    inSearchTargetId,
    ...o,
  });

  // Get_RecentClickedResults / Get_RecentSearchTerms: client-entity aggregates fetched at start (:2159) and refreshed
  // with the variables of that moment (shell adapter, CR-Search-1).
  const [recentClicked, setRecentClicked] = useState<ConnectSearch_RecentClickedResults[]>([]);
  const [recentTerms, setRecentTerms] = useState<ConnectSearch_RecentSearchTerm[]>([]);
  const refreshRecent = (key: string, lastSearched: string, category: string) => {
    void get_RecentClickedResults(inSearchTargetId, key, category).then(setRecentClicked);
    void get_RecentSearchTerms(inSearchTargetId, key, lastSearched).then(setRecentTerms);
  };
  const initialRecent = useRef({
    key: searchKeyCurrent,
    lastSearched: searchKeyLastSearched,
    category: selectedCategory,
  });
  useEffect(() => {
    const { key, lastSearched, category } = initialRecent.current;
    let alive = true;
    void get_RecentClickedResults(inSearchTargetId, key, category).then((list) => {
      if (alive) setRecentClicked(list);
    });
    void get_RecentSearchTerms(inSearchTargetId, key, lastSearched).then((list) => {
      if (alive) setRecentTerms(list);
    });
    return () => {
      alive = false;
    };
  }, [inSearchTargetId]);

  // Action_ClearResults (:2618-2660): refresh the recent lists, clear the three lists, HasSearched False.
  const clearResults = (key: string, lastSearched: string, category: string) => {
    refreshRecent(key, lastSearched, category);
    setResults(NO_RESULTS);
    setHasSearched(false);
  };

  // Action_RefreshSearch (:2302-2600).
  const refreshSearch = async (next: SearchVariables, tags: Tag[]) => {
    if (next.searchKeyCurrent.trim() === '') return; // Has Search Term, else End
    // CheckIfSearchtermAlreadyExist + CreateOrUpdateConnectSearch_RecentSearchTerm (:2340-2445), then Action_ClearResults
    await saveRecentSearchTerm(inSearchTargetId, next.searchKeyCurrent);
    clearResults(next.searchKeyCurrent, next.searchKeyLastSearched, next.selectedCategory);
    setHasSearched(true);
    setSearchKeyLastSearched(next.searchKeyCurrent);
    setIsLoading(true);
    const seq = ++fetchSeq.current;
    try {
      const out = await fetchSearchResults(
        { ...next, hasSearched: true, searchKeyLastSearched: next.searchKeyCurrent },
        tags,
        true,
      );
      if (seq !== fetchSeq.current) return;
      setResults(out);
      // OnAfterFetch_FetchSearchResults (:3879-3888).
      setIsLoading(false);
      setHasPeople(out.people.length > 0 && showsCategory(next.selectedCategory, Connect_SearchCategories.People));
      setHasHouseholds(
        out.households.length > 0 && showsCategory(next.selectedCategory, Connect_SearchCategories.Households),
      );
      setHasPlaces(out.places.length > 0 && showsCategory(next.selectedCategory, Connect_SearchCategories.Places));
    } catch (error) {
      if (seq !== fetchSeq.current) return;
      if (isInstanceOf(error, NotRegisteredException)) {
        raiseToFlowHandler(error); // Raise Error: NotRegistered
      } else if (isUserException(error, 'UBTConnect.BubbleCommunicationException')) {
        clearResults(next.searchKeyCurrent, next.searchKeyCurrent, next.selectedCategory); // Action_ClearResults3
        setIsLoading(false);
        raiseToFlowHandler(new UserException(exceptionMessage(error), 'UBTConnect.BubbleCommunicationException'));
      } else if (!isSystemException(error)) {
        clearResults(next.searchKeyCurrent, next.searchKeyCurrent, next.selectedCategory); // Action_ClearResults2
        setIsLoading(false);
        raiseToFlowHandler(new UserException(exceptionMessage(error), 'UBTConnect.BubbleGenericException'));
      } else {
        raiseToFlowHandler(error);
      }
    }
  };

  // InputEvent_OnChange (:3827-3841): SearchKey_Current, isBirthdayKeyWord, refresh the recent lists.
  const onChange = (text: string) => {
    setSearchKeyCurrent(text);
    setIsBirthdayKey(isBirthdayKeyWord(text));
    refreshRecent(text, searchKeyLastSearched, selectedCategory);
  };
  // InputEvent_Submit (:2180-2196): ValidateSearchPhoneNumber, then Action_RefreshSearch or FeedbackMessage_AutoClose.
  const onSubmit = (text: string) => {
    setSearchKeyCurrent(text);
    const validation = validateSearchPhoneNumber(text);
    if (validation.isValid) {
      void refreshSearch(variables({ searchKeyCurrent: text }), tagList);
      return;
    }
    feedbackMessageAutoClose({
      title: '',
      message: validation.errorMessage,
      messageType: 'error',
      encodedHtml: true,
      extendedClass: '',
      delayMs: 0,
      useDebounce: false,
    });
  };
  // OnClick_RecentSearchTerm (:2221-2240), also Search_BirthdayOptions Selected (:1176): search the term.
  const onRecentSearchTerm = (term: string) => {
    setSearchKeyCurrent(term);
    void refreshSearch(variables({ searchKeyCurrent: term }), tagList);
  };
  // OnClick_RecentSearchTerm_Remove (:3774-3792): delete the row, refresh Get_RecentSearchTerms.
  const onRecentSearchTermRemove = (termId: string) => {
    void deleteConnectSearch_RecentSearchTerm(termId)
      .then(() => get_RecentSearchTerms(inSearchTargetId, searchKeyCurrent, searchKeyLastSearched))
      .then(setRecentTerms);
  };
  // OnClick_RecentSearch_RemoveAll (:3359-3615): delete both lists of this target, refresh both aggregates.
  const onRecentSearchRemoveAll = () => {
    void removeAllRecentSearch(inSearchTargetId).then(() => {
      refreshRecent(searchKeyCurrent, searchKeyLastSearched, selectedCategory);
    });
  };
  // InputEvent_ClearString (:3338-3345).
  const onClearString = () => {
    setSearchKeyCurrent('');
    setSearchKeyLastSearched('');
    clearResults('', '', selectedCategory);
  };
  // Event_HorizontalTagListChanged (:3918-3936).
  const onTagListChanged = (updated: Tag[]) => {
    const category = updated.find((t) => t.IsSelected)?.Identifier ?? '';
    setSelectedCategory(category);
    setTagList(updated);
    void refreshSearch(variables({ selectedCategory: category }), updated);
  };

  // Event_SectionOnItemClick (:2667-3182).
  const onItemClick = (searchResult: SearchResult, isRecentResult: boolean) => {
    void itemClick(searchResult, isRecentResult);
  };
  const itemClick = async (searchResult: SearchResult, isRecentResult: boolean) => {
    if (searchResult.recordDisabled) {
      void showUpgradePopUp(); // App_Subscription_ShowUpgradePopUp
      return;
    }
    // CreateOrUpdateConnectSearch_RecentClickedResults, then the ones beyond the limit are deleted (:2720-2975)
    await saveRecentClickedResult(
      inSearchTargetId,
      searchResult,
      getClientVar('UBTConnect.Search_RecenctClickedResultsLimit'),
    );
    if (inIsEventNavigation) {
      onEventSearchResultClick?.(searchResult); // Trigger Event: Event_SearchResultClick
      return;
    }
    if (searchResult.type === Connect_Entity.Locality) {
      navigate('/UBTConnect/Locality_Details', { LocalityId: searchResult.id });
      return;
    }
    let source: { householdId: string; recordDisabled: boolean }[];
    if (isRecentResult) {
      // GetAllSearchRecentClickedResultsByUserId (:3000-3106)
      source = (await getAllSearchRecentClickedResultsByUserId(inSearchTargetId, searchResult.type)).map((r) => ({
        householdId: r.HouseholderId,
        recordDisabled: false,
      }));
    } else if (searchResult.type === Connect_Entity.Member) {
      source = results.people.map((r) => ({ householdId: r.householderId, recordDisabled: r.recordDisabled }));
    } else if (searchResult.type === Connect_Entity.Household) {
      source = results.households.map((r) => ({ householdId: r.id, recordDisabled: r.recordDisabled }));
    } else {
      return;
    }
    if (carouselEnabled) {
      const ids = [...new Set(source.filter((s) => !s.recordDisabled).map((s) => s.householdId))];
      setPreloadObject({ CarouselHouseholdItem: ids.map((Household) => ({ Household })) });
      navigate('/UBTConnect/HouseholdCarousel', { In_StartingHouseholdId: searchResult.householderId });
    } else {
      navigate('/UBTConnect/HouseholdDetails', { HouseholdId: searchResult.householderId });
    }
  };

  const changedSinceSearch = searchKeyCurrent !== searchKeyLastSearched;
  const showsBirthdayOptions = isBirthdaySearchEnabled && isBirthdayKey;
  const hasRecent = recentClicked.length > 0 || recentTerms.length > 0;
  // Recent clicked result → SearchResult (view :765-775: EntityId → Id, EntityType → Type; RecordDisabled default False).
  const recentAsResult = (r: ConnectSearch_RecentClickedResults): SearchResult => ({
    id: r.EntityId,
    householderId: r.HouseholderId,
    name: r.Name,
    additionalInformation: r.AdditionalInformation,
    location: r.Location,
    type: r.EntityType,
    latitude: r.Latitude,
    longitude: r.Longitude,
    recordDisabled: false,
  });
  const textNeutral9 = (fontSize: string, fontWeight: string) => ({
    Color: UBT_Color.Neutral9,
    FontSize: fontSize,
    FontWeight: fontWeight,
  });
  // Recent search (view :502-1119), never captured (both lists empty in every capture).
  const recentSearch = (
    <CustomContainer
      id="b1-RecentSearch"
      options={{ PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base } }}
    >
      {hasRecent ? (
        <>
          <CustomContainer options={{ PaddingSize: { BottomSizeId: UBT_Size.Small } }}>
            <Columns_Two
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
                    onClicked={onRecentSearchRemoveAll}
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
                      onItemClick(recentAsResult(r), true);
                    }}
                  >
                    <UBT_LazyImage
                      entityId={r.EntityId}
                      entityType={r.EntityType}
                      imageSize={{ Height: UBT_ImageSize.ExtraSmall_32 }}
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
                <Columns_Two
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
          <FilterSheet_Icon
            id="b1-$b3"
            showSubscriptionOnClick={filterShowSubscription}
            isLoaded={filterIsLoaded}
            haveFiltersApplied={hasFiltersApplied}
            bottomSheetId={bottomSheetIdFilter}
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
            {/* view :484-1202: separator, Recent search and birthday options only before a search or once the
                term changed */}
            {(!hasSearched || changedSinceSearch) && (
              <>
                <SectionSeparator id="b1-$b6" />
                {hasRecent && !showsBirthdayOptions && recentSearch}
                {showsBirthdayOptions && (
                  <CustomContainer
                    id="b1-Padding"
                    options={{ PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base } }}
                  >
                    <Search_BirthdayOptions
                      birthdayOptions={birthdayOptions.data ?? []}
                      onSelected={onRecentSearchTerm}
                    />
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
                  {/* view :1350-1474 */}
                  {(hasPlaces || (isLoading && showsCategory(selectedCategory, Connect_SearchCategories.Places))) && (
                    <SearchResult_Section
                      id="b1-PlacesSection"
                      hideSeparator={changedSinceSearch}
                      type={Connect_SearchCategories.Places}
                      searchTerm={searchKeyCurrent}
                      items={results.places}
                      onItemClick={(r) => {
                        onItemClick(r, false);
                      }}
                    />
                  )}
                  {(hasHouseholds || isLoading) && (
                    <SearchResult_Section
                      id="b1-HouseholdsSection"
                      type={Connect_SearchCategories.Households}
                      searchTerm={searchKeyCurrent}
                      items={results.households}
                      hideSeparator={changedSinceSearch && results.places.length === 0}
                      onItemClick={(r) => {
                        onItemClick(r, false);
                      }}
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
                      onItemClick={(r) => {
                        onItemClick(r, false);
                      }}
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
        bottom={inIsInScreenSearch ? undefined : <BottomBarMenu id="b1-$b37" />}
        placeholderCommonUIInsideLayout={<CommonUI_InsideLayout id="b1-$b38" />}
      />
      <FilterSheet
        id="b1-$b39"
        inOptions={{
          HasSorting: { Enable: false },
          HasCountries: { Enable: true },
          HasLocalities: { Enable: false },
        }}
        inStartFilter={{}}
        onSheetInitialized={setBottomSheetIdFilter} // Event_FilterBottomSheet_tInitialized (:2282)
        onLoaded={(showSubscriptionOnClick) => {
          // Handler_FilterSheetLoaded (:3751-3754)
          setFilterIsLoaded(true);
          setFilterShowSubscription(showSubscriptionOnClick);
        }}
        onApplyFilters={(
          optionLists,
          _choices,
          _flatLists,
          _localitiesTitle,
          countriesTitle,
          _sortByTitle,
          hasFilters,
        ) => {
          // Event_ApplyFilters (:3656-3669): SelectedCountryIds = the list titled CountriesTitle .SelectedIds.
          const countryIds = optionLists.find((l) => l.Title === countriesTitle)?.SelectedIds ?? [];
          setSelectedCountryIds(countryIds);
          setHasFiltersApplied(hasFilters);
          void refreshSearch(variables({ selectedCountryIds: countryIds, hasFiltersApplied: hasFilters }), tagList);
        }}
      />
    </OSBlock>
  );
}
