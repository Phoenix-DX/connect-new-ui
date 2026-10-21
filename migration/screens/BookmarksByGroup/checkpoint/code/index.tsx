import { useSearchParams } from 'react-router';
import { useFlagOn } from '../../lib/flags';
import { BottomBarMenu } from '../../shared/UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { Connect_BottomBar_Items } from '../../shared/UBTConnect_Utils/lib/staticEntities';
import { setPreloadObject, useOsNavigate } from '../../shell/navigation';
import { readInputs } from './api';
import { ScreenBlock_BookmarkGroup } from './components/ScreenBlock_BookmarkGroup';
import { MyBookmarks_ObjectType } from './components/staticEntities';

/** UBTConnect Legacy_MyBookmarks.BookmarksByGroup (analysis/sources/pretty/UBTConnect.Legacy_MyBookmarks.BookmarksByGroup
    .mvc.js: view :127-240, controller :298-600). ScreenBlock_BookmarkGroup with the BookmarkGroup input, BottomBarMenu
    (active item Bookmarks) in its BottomBar, an empty Menu and CommonUI_Elements; CommonUI_InsideLayout after it.
    The block's NavigateTo_* events navigate (OnHandle_NavigateTo_*, :298-600). Search is not part of this screen's
    view; NavigateTo_ShareObject is raised only without C2ExtendedShare (TST on): not wired. */
export default function BookmarksByGroup() {
  const [params] = useSearchParams();
  const inputs = readInputs(params);
  const navigate = useOsNavigate();
  const hasCarouselEnabled = useFlagOn('C2EnableCarousel');

  return (
    <>
      <ScreenBlock_BookmarkGroup
        id="$b1"
        bookmarkGroup={inputs.BookmarkGroup}
        bottomBar={<BottomBarMenu id="$b2" activeItem={Connect_BottomBar_Items.Bookmarks} />}
        onNavigateToHouseholdCarousel={(selectedHouseholdId, _itemPosition, householdIdList) => {
          // OnHandle_NavigateTo_HouseholdCarousel (:530-600): GetHasCarouselEnabled → preload the ids and open the
          // carousel, else HouseholdDetails.
          if (hasCarouselEnabled) {
            setPreloadObject({ CarouselHouseholdItem: householdIdList.map((h) => ({ Household: h })) });
            navigate('/UBTConnect/HouseholdCarousel', { In_StartingHouseholdId: selectedHouseholdId });
          } else {
            navigate('/UBTConnect/HouseholdDetails', { HouseholdId: selectedHouseholdId });
          }
        }}
        onNavigateToCommunityBusinessCarousel={(communityBusinessId, _itemPosition, objectType) => {
          // OnHandle_NavigateTo_CommunityBusinessCarousel (:336-400).
          if (objectType === MyBookmarks_ObjectType.OneSchoolGlobal) {
            navigate('/UBTConnect/OneSchoolGlobalDetails', { In_OneSchoolGlobalId: communityBusinessId });
          } else {
            navigate('/UBTConnect/CommunityBusinessDetails_CoomingSoon', {
              In_CommunityBusinessId: communityBusinessId,
            });
          }
        }}
        onNavigateToLocality={(localityId) => {
          navigate('/UBTConnect/Locality_Details', { LocalityId: localityId });
        }}
        onNavigateToSubdivision={(subdivisionId) => {
          navigate('/UBTConnect/SupperMeeting_Details', { In_SubdivsionId: subdivisionId });
        }}
      />
      <CommonUI_InsideLayout id="$b3" />
    </>
  );
}
