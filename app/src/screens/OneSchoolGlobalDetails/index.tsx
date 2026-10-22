import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { OSList } from '@/components/ui/os/OSList';
import { useFlagOn } from '@/platform/flags/flags';
import { BottomBarMenu } from '@/shared/UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '@/shared/UBTConnect/CommonUI_InsideLayout';
import { Directory_EntityDetailsActions } from '@/shared/UBTConnect/Directory_EntityDetailsActions/Directory_EntityDetailsActions';
import { get_LookupSection } from '@/shared/UBTConnect/lib/actions';
import { Connect_Entity, UBT_IconsSize } from '@/shared/UBTConnect/lib/staticEntities';
import { SubLayout_DirectoryDetailScreen } from '@/shared/UBTConnect/SubLayout_DirectoryDetailScreen';
import { ComingSoon } from '@/shared/UBTConnectLibrary/ComingSoon';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
import { ImageCard__Content } from '@/shared/UBTConnectLibrary/ImageCard__Content';
import { ImageCard_LazyLoading } from '@/shared/UBTConnectLibrary/ImageCard_LazyLoading';
import { Layout_DetailPage } from '@/shared/UBTConnectLibrary/Layout_DetailPage';
import { ACTIONS_MENU_ENABLE_OPTIONS_DEFAULT } from '@/shared/UBTConnectLibrary/lib/actions';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_ImageCardType,
  UBT_ImageSize,
  UBT_Shape,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { AddressPopup_Wrapper } from '@/shared/UBTConnect_Utils/AddressPopup_Wrapper';
import { UBT_LazyImage } from '@/shared/UBTConnect_Utils/UBT_LazyImage';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { readOneSchoolGlobalDetailsInputs, useGetOneSchoolGlobalDetails } from './api';
import { ButtonGroup } from './components/ButtonGroup';
import { ExpandableSection } from './components/ExpandableSection';
import { External_Link } from './components/External_Link';
import { FLAG_MobileStudentInformation, Type_OneschoolGlobal_Subsection } from './components/staticEntities';
import type { OneSchoolGlobalDetailCard, OneSchoolGlobalDetails } from './types';

/** GetSkeleton_UI_OneSchoolGlobal_DetailCard (UBTConnect.controller.js:11952-11990, raw copy in analysis/sources/raw):
    a UI_OneSchoolGlobal_DetailCardRec with Name "OneSchool Global" and Address "9 Park Ave, Aberfoyle  Park SA 5159"
    (two spaces, as compiled). */
const SKELETON_CARD: OneSchoolGlobalDetailCard = {
  communityBusinessId: '0',
  signedURL: '',
  name: 'OneSchool Global',
  address: '9 Park Ave, Aberfoyle  Park SA 5159',
  areasServed: '',
  businessLinks: [],
};

/** EnableOptions (view :603-609): a new ActionsMenuEnableOptionsRec with EnableNotes True. */
const ENABLE_OPTIONS = { ...ACTIONS_MENU_ENABLE_OPTIONS_DEFAULT, EnableNotes: true };
/** Container border of the "Coming Soon" boxes (view :783-799, :1044-1058): neutral 3, small, radius large. */
const COMING_SOON_BORDER = {
  Color: UBT_Color.Neutral3,
  Size: { GeneralSizeId: UBT_Size.Small },
  Radius: { GeneralSizeId: UBT_Shape.Large },
};
/** ComingSoon In_TextOptions of both instances (view :821-829, :1081-1089): neutral 7, base, semi-bold. */
const COMING_SOON_TEXT = {
  Color: UBT_Color.Neutral7,
  FontSize: UBT_FontSize.Base,
  FontWeight: UBT_FontWeight.SemiBold,
};

/** UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails (OneSchoolGlobalDetails.mvc.js: model :1-104, view
    :105-1173, controller :1174-1462). Layout_DetailPage titled "OneSchool Global" with SubLayout_DirectoryDetailScreen:
    the detail card (photo, name, areas served, address popup, business links), the actions menu, and the content
    (student numbers section when mobileStudentInformation is on, the Upcoming events / About our campus button group,
    a "Coming Soon" box). OnInitialize (:1221-1261): Selected_OneschoolGlobal_SubsectionId = UpcomingEvents unless the
    view is restored from the cache. OnReady (:1271-1337): unless restored with its data, LookupSections =
    Get_LookupSection(False), the card = the skeleton card, then DataActionGetOneSchoolGlobalDetails. */
export default function OneSchoolGlobalDetails() {
  const [params] = useSearchParams();
  const inputs = readOneSchoolGlobalDetailsInputs(params);
  const restored = useWasRestoredFromCache();
  const hasStudentInformation = useFlagOn(FLAG_MobileStudentInformation);

  /* Screen variables (model :35-55), kept by the view cache (P-BACK). OnReady (:1300-1323), unless the view is
     restored from the cache with its data fetched: LookupSections = Get_LookupSection(False), the card = the skeleton
     card, then the fetch. The model defaults (empty lookup and card) only last until OnReady, so the state starts
     from the OnReady values. */
  const [lookupSections] = useViewState('LookupSections', get_LookupSection(false));
  const [selectedSubsection, setSelectedSubsection] = useViewState<string>(
    'Selected_OneschoolGlobal_SubsectionId',
    Type_OneschoolGlobal_Subsection.UpcomingEvents,
  );
  const [localIsBookmarked, setLocalIsBookmarked] = useViewState('LocalIsBookmarked', false);
  const [saved, setSaved] = useViewState<OneSchoolGlobalDetails | null>('GetOneSchoolGlobalDetails', null);
  const skipFetch = restored && saved !== null;

  const details = useGetOneSchoolGlobalDetails(
    inputs,
    () => ({
      lookupSections,
      selected_OneschoolGlobal_SubsectionId: selectedSubsection,
      localIsBookmarked,
      in_OneSchoolGlobalId: inputs.In_OneSchoolGlobalId,
    }),
    !skipFetch,
  );
  useEffect(() => {
    if (details.data) setSaved(details.data);
  }, [details.data, setSaved]);
  /* A failed fetch goes to the screen's handleError → Directory_OneSchoolGlobal flow handler (:1450-1452; Q1). */
  useEffect(() => {
    if (details.error) raiseToFlowHandler(details.error);
  }, [details.error]);

  const fetched = skipFetch ? saved : (details.data ?? null);
  const isDataFetched = fetched !== null;
  const card = fetched?.card ?? SKELETON_CARD;
  const coordinates = fetched?.householdCoordinates ?? {};
  /* List source_dataFetchStatus (view :483; OutSystemsReactWidgets.js List render): Fetching → list-loading,
     Error → list-error. */
  const listStatusClass = isDataFetched ? '' : details.isError ? ' list-error' : ' list-loading';

  /* ContactPopUp_OverrideOptions (view :588-599): ImageURL = SignedURL, Name = Trim(Name), cached on both. */
  const contactOverrides = useMemo(
    () => ({ ImageURL: card.signedURL, Name: card.name.trim() }),
    [card.signedURL, card.name],
  );

  const detailCard = (
    <SkeletonSection id="$b4" inIsLoading={!isDataFetched}>
      <ImageCard_LazyLoading
        id="$b5"
        inIsBookmarked={localIsBookmarked}
        inCardTypeId={UBT_ImageCardType.Detail}
        lazyImagePlaceholder={
          <UBT_LazyImage
            id="$b6"
            imageURL={card.signedURL}
            imageSize={{ Width: UBT_ImageSize.MaxWidth_100vw }}
            entityId={card.communityBusinessId}
            hasErrorMessage
            entityType={Connect_Entity.OneSchoolGlobal}
          />
        }
        placeholderContent={
          <ImageCard__Content
            id="$b7"
            inTitle={card.name}
            placeholderBottomSectionContent={
              <>
                <CustomText
                  id="$b8"
                  inTextOptions={{
                    Color: UBT_Color.Neutral8,
                    FontSize: UBT_FontSize.Small,
                    FontWeight: UBT_FontWeight.SemiBold,
                  }}
                  inText="Educating Students From:"
                />
                <CustomText
                  id="$b9"
                  inText={card.areasServed}
                  inTextOptions={{
                    Color: UBT_Color.Neutral7,
                    FontSize: UBT_FontSize.ExtraSmall,
                    FontWeight: UBT_FontWeight.Regular,
                  }}
                />
                <CustomContainer
                  id="$b10"
                  options={{
                    MarginSize: { TopSizeId: UBT_Size.ExtraSmall },
                    TextOptions: { Color: UBT_Color.CyanDarker },
                  }}
                >
                  <div className={isDataFetched ? 'school-address' : 'margin-top-s margin-bottom-xs'} data-container="">
                    <AddressPopup_Wrapper
                      id="$b11"
                      inCoordinates={coordinates}
                      inAddress={card.address}
                      iconVisible
                      isEnabled
                    />
                  </div>
                  <OSList
                    className={`list list-group${listStatusClass}`}
                    animateItems
                    positionRelative
                    source={card.businessLinks}
                    keyOf={(link, i) => `${link.id}_${i}`}
                  >
                    {(link) => (
                      <div className="school-link-item" data-container="">
                        <External_Link iconVisible isEnabled inLink={link} />
                      </div>
                    )}
                  </OSList>
                </CustomContainer>
              </>
            }
          />
        }
      />
    </SkeletonSection>
  );

  const callToAction = (
    <CustomContainer
      id="$b13"
      options={{
        Background: { BackgroundColor: UBT_Color.Neutral0 },
        PaddingSize: { GeneralSizeId: UBT_Size.Base },
      }}
    >
      <Directory_EntityDetailsActions
        id="$b14"
        contactPopUpOverrideOptions={contactOverrides}
        entityType={Connect_Entity.OneSchoolGlobal}
        entityId={inputs.In_OneSchoolGlobalId}
        enableOptions={ENABLE_OPTIONS}
        onOnChangeBookmark={setLocalIsBookmarked}
      />
    </CustomContainer>
  );

  const content = (
    <SkeletonSection id="$b15" inIsLoading={!isDataFetched}>
      {hasStudentInformation && (
        <CustomContainer id="Block_StudentNumbers" options={{ Background: { BackgroundColor: UBT_Color.Neutral0 } }}>
          <ExpandableSection
            id="$b17"
            startExpanded={false}
            title={
              <IconText
                id="$b18"
                textOptions={{ FontWeight: UBT_FontWeight.SemiBold }}
                spacingSize={UBT_Size.Small}
                text={lookupSections.OneSchoolStatistitics.Singular ?? ''}
              >
                <Icon
                  id="$b19"
                  inColorId={UBT_Color.CyanDarker}
                  inSizeId={UBT_IconsSize.Base_24}
                  inIconId={lookupSections.OneSchoolStatistitics.Icon ?? ''}
                />
              </IconText>
            }
          >
            <CustomContainer id="$b20" options={{ BorderOptions: COMING_SOON_BORDER }}>
              <ComingSoon id="ComingSoon" inTextOptions={COMING_SOON_TEXT} />
            </CustomContainer>
          </ExpandableSection>
        </CustomContainer>
      )}
      <CustomContainer
        id="Block_ButtonGroup"
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { BottomSizeId: UBT_Size.Small },
        }}
      >
        <CustomContainer
          id="$b23"
          options={{
            PaddingSize: { HorizontalSizeId: UBT_Size.Base, TopSizeId: UBT_Size.Small },
            MarginSize: { TopSizeId: hasStudentInformation ? UBT_Size.ExtraSmall : '' },
          }}
        >
          <ButtonGroup
            id="ButtonGroup1"
            style="button-group ubt-skeleton-section__element"
            value={selectedSubsection}
            onChange={setSelectedSubsection}
            items={[
              {
                id: 'ButtonGroupItem1',
                style: 'button-group-item',
                value: Type_OneschoolGlobal_Subsection.UpcomingEvents,
                content: <span data-expression="">{Type_OneschoolGlobal_Subsection.UpcomingEvents}</span>,
              },
              {
                id: 'ButtonGroupItem2',
                style: 'button-group-item',
                value: Type_OneschoolGlobal_Subsection.AboutOurCampus,
                content: <span data-expression="">{Type_OneschoolGlobal_Subsection.AboutOurCampus}</span>,
              },
            ]}
          />
        </CustomContainer>
      </CustomContainer>
      <CustomContainer id="$b24" options={{ Background: { BackgroundColor: UBT_Color.Neutral0 } }}>
        <CustomContainer
          id="$b25"
          options={{
            Background: {},
            PaddingSize: {},
            MarginSize: { LeftSizeId: UBT_Size.Base, RightSizeId: UBT_Size.Base },
            BorderOptions: COMING_SOON_BORDER,
          }}
        >
          <ComingSoon id="ComingSoon4" inTextOptions={COMING_SOON_TEXT} />
        </CustomContainer>
      </CustomContainer>
    </SkeletonSection>
  );

  return (
    <Layout_DetailPage
      id="$b1"
      placeholderHeaderTitle={<CustomText id="$b2" inText="OneSchool Global" />}
      content={
        <SubLayout_DirectoryDetailScreen
          id="$b3"
          placeholderDetailCard={detailCard}
          placeholderCallToAction={callToAction}
          placeholderContent={content}
        />
      }
      bottom={<BottomBarMenu id="$b27" />}
      placeholderCommonUIInsideLayout={<CommonUI_InsideLayout id="$b28" />}
    />
  );
}
