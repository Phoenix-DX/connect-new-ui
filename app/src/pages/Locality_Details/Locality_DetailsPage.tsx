import { useLocation, useSearchParams } from 'react-router';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { HouseholdDetailsContainer, useHouseholdDetailsFlags } from '@/containers';
import { useFlagOn } from '@/platform/flags/flags';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { ComingSoon } from '@/components/ui/ComingSoon';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { HorizontalTagList } from '@/components/ui/HorizontalTagList';
import { Icon } from '@/components/ui/Icon';
import { MainLayout } from '@/components/layout/MainLayout';
import {
  UBT_ColumnBehaviour,
  UBT_Color,
  UBT_Display,
  UBT_FontSize,
  UBT_Size,
} from '@/lib/ubtConnectLibrary/staticEntities';
import type { ContainerOptions } from '@/lib/ubtConnectLibrary/structures';
import { Skeleton } from '@/components/ui/Skeleton';
import { StaticInput } from '@/components/ui/StaticInput';
import { Connect_BottomBar_Items } from '@/lib/ubtConnectUtils/staticEntities';
import { Locality_DateTimeLabel } from './components/Locality_DateTimeLabel';
import { Locality_Households } from './components/Locality_Households';
import { Locality_Interchange } from './components/Locality_Interchange';
import { Locality_OneSchoolGlobal } from './components/Locality_OneSchoolGlobal';
import { Locality_Subdivisions } from './components/Locality_Subdivisions';
import { LocalityMenu, UBT_AlignItems_Center, UBT_Icons2_Locality } from './components/staticEntities';
import { SubHeader_MainPages } from './components/SubHeader_MainPages';
import { useLocalityDetails } from './hooks/useLocalityDetails';
import { readLocalityDetailsInputs } from './inputs';

const FLEX_CENTER: ContainerOptions = {
  DisplayOptions: { Display: UBT_Display.Flex, AlignItems: UBT_AlignItems_Center },
};
const LABEL_CLASS = 'font-size-s font-semi-bold';

/** @origin UBTConnect.Directory_Locality.Locality_Details
    The locality route: Layout_MainPages titled "Directory" with the search input (and the explore icon when
    C2EnableMaps), the sub-header with the locality label (the time zone label below it), the tags, then the content
    of the selected tag (Households, My Household, Supper Meetings, Interchange, OneSchool Global, Locality Contacts),
    the bottom bar and CommonUI. The flows of the screen are in useLocalityDetails, the flows of the tag blocks in
    their hooks; the flags are read here. */
export default function Locality_Details() {
  /* Every navigation opens a new instance of the screen, also to Locality_Details itself (Locality_Interchange's
     Handler_NavigateToLocality): the instance is keyed by the history entry. */
  const { key } = useLocation();
  return <Locality_DetailsScreen key={key} />;
}

function Locality_DetailsScreen() {
  const [params] = useSearchParams();
  const mapsEnabled = useFlagOn('C2EnableMaps'); // GetHasMapsEnabled
  const hasCarouselEnabled = useFlagOn('C2EnableCarousel'); // GetHasCarouselEnabled
  const hasNewBookmarks = useFlagOn('C2NewBookmarks'); // GetHasNewBookmarks: the GetLocal_Bookmark_C2 branch (decided off)
  const householdDetailsFlags = useHouseholdDetailsFlags();
  const flags = {
    hasLocalityContacts: useFlagOn('mobileDirectoryLocalityContacts'), // GetSample_FilterTags (Q2)
    hasC1DirectoryView: useFlagOn('C2EnableC1DirectoryView'), // GetHasC1DirectoryView
  };
  const {
    state,
    onHeaderScrolled,
    onClickSearch,
    onClickMaps,
    onNavigateToBrowseByLocation,
    onNavigateToHouseholdDetails,
    onNavigateToOneSchoolGlobalDetails,
    onTagsChanged,
  } = useLocalityDetails(readLocalityDetailsInputs(params), flags);

  const v = state;
  const details = v.get_LocalityDetails;
  const selected = v.tagsList_SelectedTag;
  const b = (n: number) => `$b${String(n)}`;
  const exploreIcon = (id: string) => (
    <Icon id={id} inColorId={UBT_Color.Neutral0} inIconId={UBT_Icons2_Locality.Explore} onClick={onClickMaps} />
  );

  return (
    <MainLayout
      id={b(1)}
      placeholderHeaderTitle="Directory"
      placeholderHeaderInput={
        <StaticInput id={b(2)} inPrompt="Search for households or members" onClickInput={onClickSearch} />
      }
      placeholderHeaderInputIcon={mapsEnabled ? exploreIcon(b(3)) : null}
      onOnHeaderScrolled={onHeaderScrolled}
      headerContent={
        <>
          <div className="locality-subtitle" data-container="">
            <SubHeader_MainPages
              id={b(4)}
              inIsShowSearchIcon={v.headerIsScrolled}
              onClickSearch={onClickSearch}
              placeholderTitle={
                <>
                  {v.localityId === v.logged_User.localityId && (
                    <NotCaptured name="My Locality label (own locality)">
                      <span className="font-size-xxs font-regular">My Locality:</span>
                    </NotCaptured>
                  )}
                  <div data-container="" style={{ cursor: 'pointer' }} onClick={onNavigateToBrowseByLocation}>
                    <ColumnsTwo
                      id={b(5)}
                      columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast }}
                      extendedClasses="fit-content"
                      left={
                        <Skeleton id={b(6)} isLoading={v.localityLabel === ''}>
                          <CustomContainer id={b(7)} options={FLEX_CENTER}>
                            <span className={LABEL_CLASS} data-expression="">
                              {v.localityLabel}
                            </span>
                          </CustomContainer>
                        </Skeleton>
                      }
                      right={
                        <CustomContainer id={b(8)} options={FLEX_CENTER}>
                          <Icon
                            id={b(9)}
                            inColorId={UBT_Color.Neutral0}
                            inIconId={UBT_Icons2_Locality.ExpandMore}
                            inExtendedClasses="directory-locality padding-left-xs"
                          />
                        </CustomContainer>
                      }
                    />
                    {details.isDataFetched && details.localityDetails.timezoneName === '' ? null : (
                      <Skeleton id={b(10)} isLoading={!details.isDataFetched || details.hasFetchError}>
                        <CustomContainer
                          id={b(11)}
                          options={{ TextOptions: { FontSize: UBT_FontSize.DoubleExtraSmall } }}
                        >
                          {v.localityLabel === '' ? (
                            <span className={LABEL_CLASS} data-expression="">
                              Local Timezone And UTC Offset
                            </span>
                          ) : (
                            <Locality_DateTimeLabel
                              id={b(12)}
                              inTimezoneOffset={Number(details.localityDetails.timezoneOffset)}
                            />
                          )}
                        </CustomContainer>
                      </Skeleton>
                    )}
                  </div>
                </>
              }
              placeholderIcons={v.headerIsScrolled && mapsEnabled ? exploreIcon(b(13)) : null}
            />
          </div>
          <CustomContainer
            id={b(14)}
            extendedClasses="background-neutral-0"
            options={{ PaddingSize: { VerticalSizeId: UBT_Size.Small } }}
          >
            <Skeleton id={b(15)} isLoading={!v.isScreenInitialized}>
              <HorizontalTagList
                id={b(16)}
                extendedClasses="household-tag"
                inTagToggleList={v.tagsList}
                inHorizontalPadding={UBT_Size.Base}
                inIsMandatorySelection
                inIsSingleSelection
                onChanged={onTagsChanged}
              />
            </Skeleton>
          </CustomContainer>
        </>
      }
      content={
        <>
          {selected === LocalityMenu.Households && (
            <Locality_Households
              id={b(17)}
              inHouseholdCount={details.localityDetails.householdCount}
              inLocalityId={v.localityId}
              inBretherenCount={details.localityDetails.bretherenCount}
              onEventNavigateToHouseholdDetails={onNavigateToHouseholdDetails}
              flags={{ hasCarouselEnabled, hasNewBookmarks }}
            />
          )}
          {selected === LocalityMenu.MyHousehold && (
            <NotCaptured name="My Household tab (Q1)">
              <HouseholdDetailsContainer
                id={b(18)}
                showKebabMenu
                source={{ kind: 'server', householdId: v.logged_User.householdId }}
                flags={householdDetailsFlags}
                checkVisibility
                hideActions
              />
            </NotCaptured>
          )}
          {selected === LocalityMenu.Subdivsion && (
            <Locality_Subdivisions id={b(19)} localityId={v.localityId} flags={{ hasCarouselEnabled }} />
          )}
          {selected === LocalityMenu.Interchange && (
            <Locality_Interchange id={b(20)} inInterchangeLocalityId={v.localityId} />
          )}
          {selected === LocalityMenu.OneSchoolGlobal && (
            <Locality_OneSchoolGlobal
              id="Block_OneSchoolGlobal_List"
              idPrefix="b21"
              inLocalityTimezoneData={{
                TimezoneName: details.localityDetails.timezoneName,
                TimezoneOffset: details.localityDetails.timezoneOffset,
              }}
              inLocalityId={v.localityId}
              onEventOnClick={onNavigateToOneSchoolGlobalDetails}
            />
          )}
          {selected === LocalityMenu.LocalityContacts && (
            <NotCaptured name="Locality Contacts tab (Q1, Q2)">
              <ComingSoon id={b(22)} />
            </NotCaptured>
          )}
        </>
      }
      bottom={<BottomBar id={b(23)} activeItem={Connect_BottomBar_Items.Directory} />}
      placeholderCommonUIInsideLayout={<CommonUiLayout id={b(24)} />}
    />
  );
}
