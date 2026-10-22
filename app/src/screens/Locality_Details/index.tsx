import { useEffect, useReducer, useRef } from 'react';
import { useLocation, useSearchParams } from 'react-router';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { HouseholdDetailsContainer, useHouseholdDetailsFlags } from '@/containers';
import { useFlagOn } from '@/platform/flags/flags';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { useOsNavigate, useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { getUserInformation } from '@/platform/session/userInfo';
import { BottomBarMenu } from '@/shared/UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '@/shared/UBTConnect/CommonUI_InsideLayout';
import { Columns_Two } from '@/shared/UBTConnectLibrary/Columns_Two';
import { ComingSoon } from '@/shared/UBTConnectLibrary/ComingSoon';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { HorizontalTagList } from '@/shared/UBTConnectLibrary/HorizontalTagList';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { Layout_MainPages } from '@/shared/UBTConnectLibrary/Layout_MainPages';
import {
  UBT_ColumnBehaviour,
  UBT_Color,
  UBT_Display,
  UBT_FontSize,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { ContainerOptions, Tag } from '@/shared/UBTConnectLibrary/lib/structures';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { StaticInput } from '@/shared/UBTConnectLibrary/StaticInput';
import { Connect_BottomBar_Items } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { getHasC1DirectoryView } from '@/shared/UBTConnect_Utils/lib/actions';
import { getLocalityDetails } from './api';
import { getSample_FilterTags, stopPropagationHelper_Check } from './components/actions';
import { Locality_DateTimeLabel } from './components/Locality_DateTimeLabel';
import { Locality_Households } from './components/Locality_Households';
import { Locality_Interchange } from './components/Locality_Interchange';
import { Locality_OneSchoolGlobal } from './components/Locality_OneSchoolGlobal';
import { Locality_Subdivisions } from './components/Locality_Subdivisions';
import { LocalityMenu, UBT_AlignItems_Center, UBT_Icons2_Locality } from './components/staticEntities';
import { SubHeader_MainPages } from './components/SubHeader_MainPages';
import type { LocalityDetails } from './types';

/** Get_LocalityDetails (fetch on demand) as the view reads it. */
interface LocalityDetailsData {
  isDataFetched: boolean;
  hasFetchError: boolean;
  localityDetails: LocalityDetails;
}

/** Screen variables (Locality_Details.mvc.js model :26-70). Long Integers stay text. */
interface Model {
  tagsList: Tag[];
  headerIsScrolled: boolean;
  tagsList_SelectedTag: string;
  logged_User: { householdId: string; localityId: string };
  isUserLocality: boolean;
  localityLabel: string;
  isScreenInitialized: boolean;
  localityId: string;
  preloadedLocalityLabel: string;
  get_LocalityDetails: LocalityDetailsData;
}

const NO_DETAILS: LocalityDetails = {
  bretherenCount: 0,
  householdCount: 0,
  maiinHallLatitude: '0',
  mainHallLongitude: '0',
  localityName: '',
  countryName: '',
  countryCode: '',
  timezoneName: '',
  timezoneOffset: '0',
};

/** Defaults, inputs, then ScreenEvent_OnInitialize (controller :1170-1200): LocalityLabel = PreloadedLocalityLabel when
    empty; TagsList = GetSample_FilterTags(IsUserLocality) when empty (IsUserLocality defaults to True). */
const initialModel = (localityId: string, preloadedLocalityLabel: string): Model => {
  const isUserLocality = true;
  return {
    tagsList: getSample_FilterTags(isUserLocality),
    headerIsScrolled: false,
    tagsList_SelectedTag: '',
    logged_User: { householdId: '0', localityId: '0' },
    isUserLocality,
    localityLabel: preloadedLocalityLabel,
    isScreenInitialized: false,
    localityId,
    preloadedLocalityLabel,
    get_LocalityDetails: { isDataFetched: false, hasFetchError: false, localityDetails: NO_DETAILS },
  };
};

const FLEX_CENTER: ContainerOptions = {
  DisplayOptions: { Display: UBT_Display.Flex, AlignItems: UBT_AlignItems_Center },
};
const LABEL_CLASS = 'font-size-s font-semi-bold';
/** Action_SetLocalityLabel (controller :1235-1260): LocalityName + ", " + CountryName. */
const localityLabelOf = (localityName: string, countryName: string) => `${localityName}, ${countryName}`;

/** UBTConnect Directory_Locality.Locality_Details (p:UBTConnect.Directory_Locality.Locality_Details.mvc.js: view
    :182-1060, controller :1068-1780). Inputs LocalityId, PreloadedLocalityLabel. OnReady: Action_InitializeScreen
    (user, tags) unless initialized, then refresh Get_LocalityDetails (skipped when restored with the data fetched). */
export default function Locality_Details() {
  /* Every navigation opens a new instance of the screen, also to Locality_Details itself (Locality_Interchange's
     Handler_NavigateToLocality): the instance is keyed by the history entry. */
  const { key } = useLocation();
  return <Locality_DetailsScreen key={key} />;
}

function Locality_DetailsScreen() {
  const [params] = useSearchParams();
  const navigate = useOsNavigate();
  const restored = useWasRestoredFromCache();
  const mapsEnabled = useFlagOn('C2EnableMaps'); // GetHasMapsEnabled (view :267-308, :640-680)
  const householdDetailsFlags = useHouseholdDetailsFlags();
  const [saved, setSaved] = useViewState<Model | null>('Model', null);
  const [state, dispatch] = useReducer(
    (s: Model, patch: Partial<Model>): Model => ({ ...s, ...patch }),
    null,
    () =>
      restored && saved
        ? saved
        : initialModel(params.get('LocalityId') ?? '0', params.get('PreloadedLocalityLabel') ?? ''),
  );
  /* The OutSystems model: async flows read the latest values (state is the rendered copy). */
  const latest = useRef(state);
  const m = (): Model => latest.current;
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    setSaved(latest.current);
    dispatch(patch);
  };

  /** Action_InitializeScreen (controller :1262-1330). */
  const initializeScreen = async () => {
    const info = await getUserInformation(); // LoggedUserInfo = GetUserInformation_Wrapper
    const geography = info.Directory_UserCurrent.Directory_UserCurrent_Geography;
    const logged_User = {
      householdId: info.Directory_UserCurrent.Directory_UserCurrent_Member.HouseholderId,
      localityId: geography.Locality_Id,
    };
    set({ logged_User });
    if (m().localityId === '0') {
      set({
        localityId: logged_User.localityId,
        localityLabel: localityLabelOf(geography.Locality_Name, geography.Country_Name),
      });
    }
    const isUserLocality = m().localityId === logged_User.localityId;
    set({
      isUserLocality,
      tagsList: getSample_FilterTags(isUserLocality), // ListClear, then GetSample_FilterTags
      tagsList_SelectedTag: LocalityMenu.Households,
      isScreenInitialized: true,
    });
  };

  /** Refresh Get_LocalityDetails, then OnAfterFetch_Get_LocalityDetails (controller :1220-1234): SetLocalityLabel. */
  const refreshLocalityDetails = async () => {
    const v = m();
    let localityDetails: LocalityDetails;
    try {
      localityDetails = await getLocalityDetails({
        TagsList: v.tagsList,
        HeaderIsScrolled: v.headerIsScrolled,
        TagsList_SelectedTag: v.tagsList_SelectedTag,
        IsUserLocality: v.isUserLocality,
        LocalityLabel: v.localityLabel,
        IsScreenInitialized: v.isScreenInitialized,
        LocalityId: v.localityId,
        PreloadedLocalityLabel: v.preloadedLocalityLabel,
      });
    } catch (e) {
      set({ get_LocalityDetails: { ...m().get_LocalityDetails, hasFetchError: true } });
      throw e;
    }
    set({ get_LocalityDetails: { isDataFetched: true, hasFetchError: false, localityDetails } });
    set({ localityLabel: localityLabelOf(localityDetails.localityName, localityDetails.countryName) });
  };

  /* ScreenEvent_OnReady (controller :1420-1460): initialized → nothing when the data is fetched without error, else
     the refresh; not initialized → Action_InitializeScreen, then the refresh. */
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const onReady = async () => {
      const v = m();
      if (v.isScreenInitialized) {
        if (v.get_LocalityDetails.isDataFetched && !v.get_LocalityDetails.hasFetchError) return;
      } else {
        await initializeScreen();
      }
      await refreshLocalityDetails();
    };
    onReady().catch(raiseToFlowHandler);
    // OnReady runs once (the view cache restores the same instance state).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** OnClick_Search (controller :1462-1475). */
  const onClickSearch = () => {
    navigate(`/${APP_ID}/Search`);
  };
  /** OnClick_Maps (controller :1560-1580). */
  const onClickMaps = () => {
    const d = m().get_LocalityDetails.localityDetails;
    navigate(`/${APP_ID}/Map`, { In_InitialLongitude: d.mainHallLongitude, In_InitialLatitude: d.maiinHallLatitude });
  };
  /** Handler_NavigateTo_BrowsebyLocation (controller :1120-1150): CountryDetails when GetHasC1DirectoryView, else
      BrowseDirectory, with the locality's CountryCode. */
  const onNavigateToBrowseByLocation = () => {
    const countryCode = m().get_LocalityDetails.localityDetails.countryCode;
    navigate(`/${APP_ID}/${getHasC1DirectoryView() ? 'CountryDetails' : 'BrowseDirectory'}`, {
      CountryCode: countryCode,
    });
  };
  /** Handler_NavigateTo_HouseholdDetails(HouseholdId) (controller :1600-1625): nothing while it is NullIdentifier. */
  const onNavigateToHouseholdDetails = (householdId: string) => {
    if (householdId === '0') return;
    navigate(`/${APP_ID}/HouseholdDetails`, { HouseholdId: householdId });
  };
  /** Handler_NavigateTo_OneschoolGlobalDetails(Event_OneSchoolGlobalId) (controller :1537-1560): nothing when the
      click started inside a StopPropagationHelper (StopPropagationHelper_Check), else OneSchoolGlobalDetails. */
  const onNavigateToOneSchoolGlobalDetails = (oneSchoolGlobalId: string) => {
    if (stopPropagationHelper_Check()) return;
    navigate(`/${APP_ID}/OneSchoolGlobalDetails`, { In_OneSchoolGlobalId: oneSchoolGlobalId });
  };
  /* Handler_OnClick_Bookmark(IsBookmarked) (controller :1156-1180) has no node: Locality_OneSchoolGlobal's
     Event_OnClick_Bookmark is not wired. */
  /** Handler_HorizontalTagListChanged(UpdatedTagList) (controller :1476-1505): TagsList = UpdatedTagList, ScrollTop JS
      (after the render, `.active-screen` scrollTop = 0, :1784-1797), TagsList_SelectedTag = the selected tag's
      Identifier. */
  const onTagsChanged = (updated: Tag[]) => {
    const selected = updated.findIndex((t) => t.IsSelected);
    set({ tagsList: updated, tagsList_SelectedTag: updated[selected]?.Identifier ?? '' });
    requestAnimationFrame(() => {
      const contentEl = document.querySelector('.active-screen');
      if (contentEl) contentEl.scrollTop = 0;
    });
  };

  const v = state;
  const details = v.get_LocalityDetails;
  const selected = v.tagsList_SelectedTag;
  const b = (n: number) => `$b${String(n)}`;
  const exploreIcon = (id: string) => (
    <Icon id={id} inColorId={UBT_Color.Neutral0} inIconId={UBT_Icons2_Locality.Explore} onClick={onClickMaps} />
  );

  return (
    <Layout_MainPages
      id={b(1)}
      placeholderHeaderTitle="Directory"
      placeholderHeaderInput={
        <StaticInput id={b(2)} inPrompt="Search for households or members" onClickInput={onClickSearch} />
      }
      placeholderHeaderInputIcon={mapsEnabled ? exploreIcon(b(3)) : null}
      onOnHeaderScrolled={(isHeaderScrolled) => {
        set({ headerIsScrolled: isHeaderScrolled });
      }}
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
                    <Columns_Two
                      id={b(5)}
                      columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast }}
                      extendedClasses="fit-content"
                      left={
                        <SkeletonSection id={b(6)} inIsLoading={v.localityLabel === ''}>
                          <CustomContainer id={b(7)} options={FLEX_CENTER}>
                            <span className={LABEL_CLASS} data-expression="">
                              {v.localityLabel}
                            </span>
                          </CustomContainer>
                        </SkeletonSection>
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
                      <SkeletonSection id={b(10)} inIsLoading={!details.isDataFetched || details.hasFetchError}>
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
                      </SkeletonSection>
                    )}
                  </div>
                </>
              }
              placeholderIcons={!v.headerIsScrolled && mapsEnabled ? exploreIcon(b(13)) : null}
            />
          </div>
          <CustomContainer
            id={b(14)}
            extendedClasses="background-neutral-0"
            options={{ PaddingSize: { VerticalSizeId: UBT_Size.Small } }}
          >
            <SkeletonSection id={b(15)} inIsLoading={!v.isScreenInitialized}>
              <HorizontalTagList
                id={b(16)}
                extendedClasses="household-tag"
                inTagToggleList={v.tagsList}
                inHorizontalPadding={UBT_Size.Base}
                inIsMandatorySelection
                inIsSingleSelection
                onChanged={onTagsChanged}
              />
            </SkeletonSection>
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
          {selected === LocalityMenu.Subdivsion && <Locality_Subdivisions id={b(19)} localityId={v.localityId} />}
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
      bottom={<BottomBarMenu id={b(23)} activeItem={Connect_BottomBar_Items.Directory} />}
      placeholderCommonUIInsideLayout={<CommonUI_InsideLayout id={b(24)} />}
    />
  );
}
