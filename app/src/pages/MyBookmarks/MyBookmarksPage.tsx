import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { useFlagOn } from '@/platform/flags/flags';
import { setPreloadObject, useOsNavigate } from '@/platform/navigation';
import { Connect_BottomBar_Items, Connect_Entity } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { MyBookmarksView } from './components/MyBookmarksView';
import { useMyBookmarks, type MyBookmarksEvents } from './hooks/useMyBookmarks';

/** @origin UBTConnect.Legacy_MyBookmarks.MyBookmarks
    The Bookmarks tab: the block ScreenBlock_MyBookmarks (instance `$b1`) with BottomBarMenu (root page, active item
    Bookmarks) in its BottomBar placeholder, then CommonUI_InsideLayout. The block's navigation events go to the screen
    actions OnHandle_NavigateTo_*:
    - a household: with the flag C2EnableCarousel (GetHasCarouselEnabled, on in TST), the preload object of every
      bookmarked household and HouseholdCarousel; otherwise HouseholdDetails;
    - a locality: Locality_Details (LocalityName and InitialTab are not passed on);
    - a supper meeting: SupperMeeting_Details;
    - an entity: OneSchoolGlobalDetails for OneSchool Global, else CommunityBusinessDetails_CoomingSoon;
    - a group: BookmarksByGroup. */
export default function MyBookmarks() {
  const navigate = useOsNavigate();
  const hasCarouselEnabled = useFlagOn('C2EnableCarousel');
  const events: MyBookmarksEvents = {
    onNavigateToHouseholds: (selectedHouseholdId, _itemsLength, _itemPosition, _searchString, householdIdList) => {
      if (hasCarouselEnabled) {
        setPreloadObject({ CarouselHouseholdItem: householdIdList.map((Household) => ({ Household })) });
        navigate('/UBTConnect/HouseholdCarousel', { In_StartingHouseholdId: selectedHouseholdId });
      } else {
        navigate('/UBTConnect/HouseholdDetails', { HouseholdId: selectedHouseholdId });
      }
    },
    onNavigateToLocality: (localityId) => {
      navigate('/UBTConnect/Locality_Details', { LocalityId: localityId });
    },
    onNavigateToSubdivision: (subdivisionId) => {
      navigate('/UBTConnect/SupperMeeting_Details', { In_SubdivsionId: subdivisionId });
    },
    onNavigateToCommunityBusinessCarousel: (communityBusinessId, objectType) => {
      if (objectType === Connect_Entity.OneSchoolGlobal)
        navigate('/UBTConnect/OneSchoolGlobalDetails', { In_OneSchoolGlobalId: communityBusinessId });
      else
        navigate('/UBTConnect/CommunityBusinessDetails_CoomingSoon', {
          In_CommunityBusinessId: communityBusinessId,
        });
    },
  };
  return (
    <>
      <MyBookmarksBlock
        events={events}
        onNavigateToBookmarkGroup={(bookmarkGroup) => {
          navigate('/UBTConnect/BookmarksByGroup', { BookmarkGroup: bookmarkGroup });
        }}
      />
      <CommonUiLayout id="$b3" />
    </>
  );
}

interface MyBookmarksBlockProps {
  /** The events that the block flows raise. */
  events: MyBookmarksEvents;
  /** NavigateTo_BookmarkGroup(BookmarkGroup) of the view. */
  onNavigateToBookmarkGroup: (bookmarkGroup: string) => void;
}

/** The block ScreenBlock_MyBookmarks: its flows (useMyBookmarks) and its view. It is a component of its own so that
    its OnReady runs before the effects of CommonUI_InsideLayout (its sibling after it), in the order of the block
    before the refactor. */
function MyBookmarksBlock({ events, onNavigateToBookmarkGroup }: MyBookmarksBlockProps) {
  const { state, onBookmarkedItem, onTryAgain } = useMyBookmarks(events);
  return (
    <MyBookmarksView
      id="$b1"
      state={state}
      bottomBar={<BottomBar id="$b2" isRootPage activeItem={Connect_BottomBar_Items.Bookmarks} />}
      onBookmarkedItem={onBookmarkedItem}
      onTryAgain={onTryAgain}
      onNavigateToBookmarkGroup={onNavigateToBookmarkGroup}
    />
  );
}
