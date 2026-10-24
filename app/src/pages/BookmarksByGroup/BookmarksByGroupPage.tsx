import { useSearchParams } from 'react-router';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { ShareableObject } from '@/components/share/ShareableObject';
import { ShareSheetContainer } from '@/containers/ShareSheet';
import { useFlagOn } from '@/platform/flags/flags';
import { setPreloadObject, useOsNavigate } from '@/platform/navigation';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler';
import { Connect_BottomBar_Items } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { BookmarkGroupView } from './components/BookmarkGroupView';
import { bookmarkGroupIds } from './hooks/bookmarkGroupState';
import { useBookmarkGroup } from './hooks/useBookmarkGroup';
import { readBookmarksByGroupInputs } from './inputs';
import { MyBookmarks_ObjectType } from './staticEntities';

/** The instance id of ScreenBlock_BookmarkGroup. */
const GROUP_BLOCK_ID = '$b1';
const ids = bookmarkGroupIds(GROUP_BLOCK_ID);

/** @origin UBTConnect.Legacy_MyBookmarks.BookmarksByGroup
    The bookmark group block (BookmarkGroupView, flows in useBookmarkGroup) with the BookmarkGroup input, BottomBarMenu
    (active item Bookmarks) in its BottomBar, an empty Menu and CommonUI_Elements; CommonUI_InsideLayout after it.
    The block's NavigateTo_* events navigate (OnHandle_NavigateTo_*). Search is not part of this screen's view;
    NavigateTo_ShareObject is raised only without C2ExtendedShare (TST on): not wired. */
export default function BookmarksByGroup() {
  const [params] = useSearchParams();
  const inputs = readBookmarksByGroupInputs(params);
  const navigate = useOsNavigate();
  const hasCarouselEnabled = useFlagOn('C2EnableCarousel');
  const flags = {
    hasBookmarkNote: useFlagOn('mobileDirectoryBookmarkNote'),
    hasExtendedShare: useFlagOn('C2ExtendedShare'),
  };
  const { state, onCloseShareSheet, onBackNavigation, ...handlers } = useBookmarkGroup(
    GROUP_BLOCK_ID,
    { bookmarkGroup: inputs.BookmarkGroup },
    flags,
    {
      onNavigateToHouseholdCarousel: (selectedHouseholdId, _itemPosition, householdIdList) => {
        // OnHandle_NavigateTo_HouseholdCarousel: GetHasCarouselEnabled → preload the ids and open the carousel, else
        // HouseholdDetails.
        if (hasCarouselEnabled) {
          setPreloadObject({ CarouselHouseholdItem: householdIdList.map((h) => ({ Household: h })) });
          navigate('/UBTConnect/HouseholdCarousel', { In_StartingHouseholdId: selectedHouseholdId });
        } else {
          navigate('/UBTConnect/HouseholdDetails', { HouseholdId: selectedHouseholdId });
        }
      },
      onNavigateToCommunityBusinessCarousel: (communityBusinessId, _itemPosition, objectType) => {
        // OnHandle_NavigateTo_CommunityBusinessCarousel.
        if (objectType === MyBookmarks_ObjectType.OneSchoolGlobal) {
          navigate('/UBTConnect/OneSchoolGlobalDetails', { In_OneSchoolGlobalId: communityBusinessId });
        } else {
          navigate('/UBTConnect/CommunityBusinessDetails_CoomingSoon', {
            In_CommunityBusinessId: communityBusinessId,
          });
        }
      },
      onNavigateToLocality: (localityId) => {
        navigate('/UBTConnect/Locality_Details', { LocalityId: localityId });
      },
      onNavigateToSubdivision: (subdivisionId) => {
        navigate('/UBTConnect/SupperMeeting_Details', { In_SubdivsionId: subdivisionId });
      },
    },
  );
  const share = state.share;

  return (
    <>
      <BookmarkGroupView
        id={GROUP_BLOCK_ID}
        bookmarkGroup={inputs.BookmarkGroup}
        bookmarkedItems={state.bookmarkedItems}
        isFetchingBookmarks={state.isFetchingBookmarks}
        isFromNavigationHistory={state.isFromNavigationHistory}
        wasSearched={state.wasSearched}
        editingBookmarkNote={state.editingBookmarkNote}
        hasBookmarkNote={flags.hasBookmarkNote}
        hasExtendedShare={flags.hasExtendedShare}
        {...handlers}
        bottomBar={<BottomBar id="$b2" activeItem={Connect_BottomBar_Items.Bookmarks} />}
        backNavigationHandler={
          <BackNavigationHandler id={ids.backNavigationHandler} onBackNavigation={onBackNavigation} />
        }
        shareSheet={
          <ShareSheetContainer
            id={ids.shareSheet}
            inShareObjectTypeId={share.typeId}
            inIsOpen={share.isOpen}
            inShareableObjectId={share.objectId}
            inIsLegacy
            onEventClosedShareSheet={onCloseShareSheet}
          >
            {share.object.ConnectEntityTypeId !== '' && (
              <ShareableObject id={ids.shareableObject} inShareableObject={share.object} />
            )}
          </ShareSheetContainer>
        }
      />
      <CommonUiLayout id="$b3" />
    </>
  );
}
