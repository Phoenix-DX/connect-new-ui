import { useEffect, useReducer, useRef } from 'react';
import { OSList } from '../../components/OSList';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import {
  exceptionMessage,
  isCommunicationException,
  isInstanceOf,
  isSystemException,
  NotRegisteredException,
  raiseToFlowHandler,
  UserException,
} from '@/legacy/os/exceptions';
import { useOsNavigate, useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { bottomSheetOpen } from '../../shared/osui/lib/actions';
import { App_NotificationIcon } from '../../shared/UBTConnect/App_NotificationIcon';
import { BottomBarMenu } from '../../shared/UBTConnect/BottomBarMenu';
import { CacheControl_UserInfo_Wrapper } from '../../shared/UBTConnect/CacheControl_UserInfo_Wrapper';
import type { Directory_UserCurrent } from '../../shared/UBTConnect/CacheControl_UserInfo_Wrapper/types';
import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { Directory_LegendBottomSheet } from '../../shared/UBTConnect/Directory_LegendBottomSheet';
import { FeedBlock_CommunityPopulation } from '../../shared/UBTConnect/FeedBlock_CommunityPopulation';
import { hasAccessToRegion } from '../../shared/UBTConnect/lib/actions';
import { Statistics_TypedItem } from '../../shared/UBTConnect/Statistics_TypedItem';
import { Columns_Two } from '../../shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '../../shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '../../shared/UBTConnectLibrary/CustomText';
import { Icon } from '../../shared/UBTConnectLibrary/Icon';
import { Layout_MainPages } from '../../shared/UBTConnectLibrary/Layout_MainPages';
import { getFlagURLByCountryCode } from '../../shared/UBTConnectLibrary/lib/actions';
import type { ContainerOptions, TextOptions } from '../../shared/UBTConnectLibrary/lib/structures';
import {
  UBT_ColumnBehaviour,
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_IconSize,
  UBT_Shape,
  UBT_Size,
  UBT_VerticalAlign,
} from '../../shared/UBTConnectLibrary/lib/staticEntities';
import { SkeletonSection } from '../../shared/UBTConnectLibrary/SkeletonSection';
import { StaticInput } from '../../shared/UBTConnectLibrary/StaticInput';
import {
  Connect_BottomBar_Items,
  Connect_Entity,
  UBT_ImageSize,
} from '../../shared/UBTConnect_Utils/lib/staticEntities';
import { UBT_LazyImage } from '../../shared/UBTConnect_Utils/UBT_LazyImage';
import { getCountriesStatistics } from './api';
import { countText, getSkeletonList_UI_CountryStatistics, longIntegerTextOf } from './components/actions';
import { UBT_Icons2_CountryList } from './components/staticEntities';
import type { CountryStatistics, UserGeography } from './types';

/** GetCountriesStatistics data fetch status, as the List shows it (`list-loading` until it answers, `list-error` after a
    failed fetch: dom/loading.html:328, dom/offline.html:310). */
type FetchStatus = 'notFetched' | 'ok' | 'error';

interface Model {
  /** GetCountriesStatistics.Out_CountriesStatistics (skeleton rows while loading). */
  countries: CountryStatistics[];
  fetchStatus: FetchStatus;
  isDataFetched: boolean;
  hasFetchError: boolean;
  /** LocalCacheControl_UserInformation. */
  user: UserGeography;
  /** BottomSheetId (the legend sheet). */
  bottomSheetId: string;
}

const NO_USER: UserGeography = {
  isFetched: false,
  localityId: '0',
  localityName: '',
  localitySubdivisionCount: '0',
  countryCode: '',
  countryName: '',
  countryLocalityCount: '0',
};

const initialModel = (): Model => ({
  countries: [],
  fetchStatus: 'notFetched',
  isDataFetched: false,
  hasFetchError: false,
  user: NO_USER,
  bottomSheetId: '',
});

/** The two header cards: Neutral0 background, padding Base, radius Medium (CountryList.mvc.js:316-340, :540-560). */
const CARD_OPTIONS: ContainerOptions = {
  Background: { BackgroundColor: UBT_Color.Neutral0 },
  PaddingSize: { GeneralSizeId: UBT_Size.Base },
  BorderOptions: { Radius: { GeneralSizeId: UBT_Shape.Medium } },
};
const CARD_LABEL: TextOptions = {
  Color: UBT_Color.Neutral6,
  FontSize: UBT_FontSize.Small,
  FontWeight: UBT_FontWeight.SemiBold,
};
const CARD_NAME: TextOptions = {
  Color: UBT_Color.Neutral10,
  FontSize: UBT_FontSize.Base,
  FontWeight: UBT_FontWeight.SemiBold,
};
const CARD_COUNT: TextOptions = {
  Color: UBT_Color.Primary,
  FontSize: UBT_FontSize.ExtraSmall,
  FontWeight: UBT_FontWeight.SemiBold,
};
const CARD_IMAGE_SIZE = { Height: UBT_ImageSize.Base_52, Width: UBT_ImageSize.Square };
/** NullIdentifier() as text (CountryList.mvc.js:391, :605): no entity, so UBT_LazyImage asks for no signed image. */
const NULL_ID = '0';
/** Runtime key of the countries List in the default capture (`l1-66_<n>`, dom/default.html:307). */
const LIST_KEY = '66';

/** UBTConnect Directory_Locality.CountryList (p:UBTConnect.Directory_Locality.CountryList.mvc.js: view :145-1110,
    controller :1130-1720). GetCountriesStatistics is refresh-only (:1139-1179); OnReady drives Action_RefreshData. */
export default function CountryList() {
  const navigate = useOsNavigate();
  const restored = useWasRestoredFromCache();
  const [saved, setSaved] = useViewState<Model | null>('Model', null);
  const [state, dispatch] = useReducer(
    (s: Model, patch: Partial<Model>): Model => ({ ...s, ...patch }),
    null,
    () => (restored && saved ? saved : initialModel()),
  );
  /* The OutSystems model: async flows read the latest values (state is the rendered copy). */
  const latest = useRef(state);
  const m = (): Model => latest.current;
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    setSaved(latest.current);
    dispatch(patch);
  };

  /** Action_RefreshData (ctrl :1347-1440): 10 skeleton rows, refresh GetCountriesStatistics, then
      OnAfterFetch_GetCountriesStatistics (:1181-1221): every row's AvatarURL = GetFlagURLByCountryCode(CountryCode). */
  const refreshData = async () => {
    set({ countries: getSkeletonList_UI_CountryStatistics(10) });
    try {
      let rows: CountryStatistics[];
      try {
        rows = await getCountriesStatistics();
      } catch (e) {
        set({ fetchStatus: 'error', hasFetchError: true });
        throw e;
      }
      set({ countries: rows, fetchStatus: 'ok', isDataFetched: true, hasFetchError: false });
      set({ countries: m().countries.map((c) => ({ ...c, avatarURL: getFlagURLByCountryCode(c.countryCode) })) });
    } catch (e) {
      if (isCommunicationException(e)) {
        set({ countries: [] }); // ListClear2
        throw new UserException(exceptionMessage(e), 'UBTConnect.BubbleCommunicationException');
      }
      if (isInstanceOf(e, NotRegisteredException)) throw e; // Raise Error: NotRegistered
      if (!isSystemException(e)) {
        set({ countries: [] }); // ListClear
        throw new UserException(exceptionMessage(e), 'UBTConnect.BubbleGenericException');
      }
      throw e;
    }
  };

  /* ScreenEvent_OnReady (ctrl :1222-1268): restored from cache with the data fetched → nothing; otherwise
     Action_RefreshData. */
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (restored && saved?.isDataFetched) return;
    refreshData().catch(raiseToFlowHandler);
    // OnReady runs once (the view cache restores the same instance state).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** Handler_StatisticsList_Clicked(Event_Id) (ctrl :1278-1346). */
  const onStatisticsClicked = async (eventId: string) => {
    if (eventId === '') return;
    const hasAccess = await hasAccessToRegion(longIntegerTextOf(eventId), eventId);
    if (hasAccess) navigate(`/${APP_ID}/CountryDetails`, { CountryCode: eventId });
    else await showUpgradePopUp(); // App_Subscription_ShowUpgradePopUp
  };
  /** CacheControl_UserInfo_WrapperResult (ctrl :1518-1558). */
  const onUserInfo = (u: Directory_UserCurrent) => {
    const g = u.Directory_UserCurrent_Geography;
    set({
      user: {
        isFetched: true,
        localityId: g.Locality_Id,
        localityName: g.Locality_Name,
        localitySubdivisionCount: g.Locality_SubdivisionCount,
        countryCode: g.Country_Code,
        countryName: g.Country_Name,
        countryLocalityCount: g.Country_LocalityCount,
      },
    });
  };

  const v = state;
  const user = v.user;
  const listClass = `list list-group${
    v.fetchStatus === 'notFetched' ? ' list-loading' : v.fetchStatus === 'error' ? ' list-error' : ''
  }`;

  return (
    <>
      <Layout_MainPages
        id="$b1"
        addHeaderGap={false}
        isGrayBackground
        placeholderHeaderTitle="Directory"
        placeholderHeaderRight={<App_NotificationIcon id="$b2" />}
        placeholderHeaderInput={
          <StaticInput
            id="$b3"
            inPrompt="Search any member or location"
            onClickInput={() => {
              navigate(`/${APP_ID}/Search`); // StaticInputClick_Input (ctrl :1494-1517)
            }}
          />
        }
        content={
          <CustomContainer id="Content" options={{ PaddingSize: { GeneralSizeId: UBT_Size.Base } }}>
            <SkeletonSection id="HeaderLoading" inIsLoading={!user.isFetched}>
              <Columns_Two
                id="HeaderColumns"
                columnOptions={{ SpacingSize: UBT_Size.Small }}
                left={
                  <CustomContainer
                    id="$b7"
                    options={CARD_OPTIONS}
                    onClicked={() => {
                      // OnClick_MyLocality (ctrl :1467-1493)
                      navigate(`/${APP_ID}/Locality_Details`, {
                        LocalityId: user.localityId,
                        PreloadedLocalityLabel: user.localityName,
                      });
                    }}
                  >
                    <div data-container="" style={{ textAlign: 'center' }}>
                      <UBT_LazyImage
                        id="$b8"
                        inBorderRadius={UBT_Shape.Circle}
                        entityType={Connect_Entity.Locality}
                        entityId={NULL_ID}
                        imageSize={CARD_IMAGE_SIZE}
                      />
                      <CustomText id="$b9" inTextOptions={CARD_LABEL} inText="MY LOCALITY" />
                      <CustomText id="$b10" inText={user.localityName} inTextOptions={CARD_NAME} />
                      <CustomText
                        id="$b11"
                        inTextOptions={CARD_COUNT}
                        inText={countText(user.localitySubdivisionCount, ' Supper Meeting', ' Supper Meetings')}
                      />
                    </div>
                  </CustomContainer>
                }
                right={
                  <CustomContainer
                    id="$b12"
                    options={CARD_OPTIONS}
                    onClicked={() => {
                      navigate(`/${APP_ID}/CountryDetails`, { CountryCode: user.countryCode }); // OnClick_MyCountry
                    }}
                  >
                    <div data-container="" style={{ textAlign: 'center' }}>
                      <UBT_LazyImage
                        id="$b13"
                        imageURL={getFlagURLByCountryCode(user.countryCode)}
                        inBorderRadius={UBT_Shape.Circle}
                        extendedClass="country-flag"
                        imageSize={CARD_IMAGE_SIZE}
                        entityId={NULL_ID}
                        entityType={Connect_Entity.Locality}
                      />
                      <CustomText id="$b14" inTextOptions={CARD_LABEL} inText="MY COUNTRY" />
                      <CustomText id="$b15" inText={user.countryName} inTextOptions={CARD_NAME} />
                      <CustomText
                        id="$b16"
                        inTextOptions={CARD_COUNT}
                        inText={countText(user.countryLocalityCount, ' Locality', ' Localities')}
                      />
                    </div>
                  </CustomContainer>
                }
              />
            </SkeletonSection>
            <CustomContainer id="Population" options={{ PaddingSize: { TopSizeId: UBT_Size.Base } }}>
              <FeedBlock_CommunityPopulation id="$b18" />
            </CustomContainer>
            <CustomContainer id="Legend" options={{ PaddingSize: { VerticalSizeId: UBT_Size.Base } }}>
              <Columns_Two
                id="Title"
                columnOptions={{
                  ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast,
                  VerticalAlign: UBT_VerticalAlign.Center,
                }}
                left={<CustomText id="$b21" inTextOptions={CARD_NAME} inText="Browse by Country" />}
                right={
                  <Icon
                    id="$b22"
                    inColorId={UBT_Color.Primary}
                    inIconId={UBT_Icons2_CountryList.Info}
                    inSizeId={UBT_IconSize.NonStandard_16}
                    onClick={() => {
                      bottomSheetOpen(m().bottomSheetId); // OnClick_LegendInfo (ctrl :1559-1586)
                    }}
                  />
                }
              />
            </CustomContainer>
            <SkeletonSection id="$b23" inIsLoading={!(v.isDataFetched || v.hasFetchError)}>
              <OSList
                className={listClass}
                animateItems
                positionRelative
                source={v.countries}
                keyOf={(_c, i) => `${LIST_KEY}_${i}`}
              >
                {(c, i) => (
                  <div
                    data-container=""
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      onStatisticsClicked(c.countryCode).catch(raiseToFlowHandler);
                    }}
                  >
                    <Statistics_TypedItem
                      id={`l1-${LIST_KEY}_${i}-$b24`}
                      inHasImage={c.avatarURL !== ''}
                      uICountryStatistics={{ UI_StatisticsTexts: c.texts, Name: c.title, ImageURL: c.avatarURL }}
                    />
                  </div>
                )}
              </OSList>
            </SkeletonSection>
          </CustomContainer>
        }
        bottom={<BottomBarMenu id="$b25" activeItem={Connect_BottomBar_Items.Directory} isRootPage />}
        placeholderCommonUIInsideLayout={<CommonUI_InsideLayout id="$b26" />}
      />
      <CacheControl_UserInfo_Wrapper id="$b27" onResult={onUserInfo} />
      <Directory_LegendBottomSheet
        id="$b28"
        // no ShowLocalities: CountryList passes no input (view :1091-1093), the block's default True applies
        onSheetInitialized={(sheetId) => {
          set({ bottomSheetId: sheetId }); // Directory_LegendBottomSheetSheetInitialized (ctrl :1587-1624)
        }}
      />
    </>
  );
}
