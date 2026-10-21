import { useFlagOn } from '../../lib/flags';
import { BottomBarMenu } from '../../shared/UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { Connect_BottomBar_Items, Connect_Entity } from '../../shared/UBTConnect_Utils/lib/staticEntities';
import { setPreloadObject, useOsNavigate } from '../../shell/navigation';
import { ScreenBlock_MyBookmarks } from './components/ScreenBlock_MyBookmarks';

/** UBTConnect Legacy_MyBookmarks.MyBookmarks (p:UBTConnect.Legacy_MyBookmarks.MyBookmarks.mvc.js: view :120-270,
    controller :275-615). ScreenBlock_MyBookmarks with BottomBarMenu (isRootPage, ActiveItem Bookmarks) in its BottomBar
    placeholder and CommonUI_InsideLayout after it (W:128-260). The block's navigation events go to the OnHandle_*
    actions (W:285-560). */
export default function MyBookmarks() {
  const navigate = useOsNavigate();
  const hasCarouselEnabled = useFlagOn('C2EnableCarousel');
  return (
    <>
      <ScreenBlock_MyBookmarks
        id="$b1"
        bottomBar={<BottomBarMenu id="$b2" isRootPage activeItem={Connect_BottomBar_Items.Bookmarks} />}
        onNavigateToHouseholds={(selectedHouseholdId, _itemsLength, _itemPosition, _searchString, householdIdList) => {
          /* OnHandle_NavigateTo_HouseholdCarousel (W:285-345): GetHasCarouselEnabled (C2EnableCarousel, TST on) →
             PreloadedHouseholds.CarouselHouseholdItem = HouseholdIdList, SetPreloadObject, HouseholdCarousel; else
             HouseholdDetails. */
          if (hasCarouselEnabled) {
            setPreloadObject({ CarouselHouseholdItem: householdIdList.map((Household) => ({ Household })) });
            navigate('/UBTConnect/HouseholdCarousel', { In_StartingHouseholdId: selectedHouseholdId });
          } else {
            navigate('/UBTConnect/HouseholdDetails', { HouseholdId: selectedHouseholdId });
          }
        }}
        onNavigateToLocality={(localityId) => {
          /* OnHandle_NavigateTo_Locality (W:532-560): LocalityName and InitialTab are not passed on. */
          navigate('/UBTConnect/Locality_Details', { LocalityId: localityId });
        }}
        onNavigateToSubdivision={(subdivisionId) => {
          navigate('/UBTConnect/SupperMeeting_Details', { In_SubdivsionId: subdivisionId });
        }}
        onNavigateToCommunityBusinessCarousel={(communityBusinessId, objectType) => {
          /* OnHandle_NavigateTo_CommunityBusinessCarousel (W:466-500): OneSchool Global → OneSchoolGlobalDetails, else
             CommunityBusinessDetails_CoomingSoon. */
          if (objectType === Connect_Entity.OneSchoolGlobal)
            navigate('/UBTConnect/OneSchoolGlobalDetails', { In_OneSchoolGlobalId: communityBusinessId });
          else
            navigate('/UBTConnect/CommunityBusinessDetails_CoomingSoon', {
              In_CommunityBusinessId: communityBusinessId,
            });
        }}
        onNavigateToBookmarkGroup={(bookmarkGroup) => {
          navigate('/UBTConnect/BookmarksByGroup', { BookmarkGroup: bookmarkGroup });
        }}
      />
      <CommonUI_InsideLayout id="$b3" />
    </>
  );
}
