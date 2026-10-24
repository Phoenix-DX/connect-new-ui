import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { AddressPopupWrapper } from '@/components/contact/AddressPopupWrapper';
import { DetailLayout } from '@/components/layout';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { DirectoryDetailLayout } from '@/components/layout/DirectoryDetailLayout';
import { OSList } from '@/components/ui/os/OSList';
import { EntityDetailsActionsContainer } from '@/containers/EntityDetailsActions/EntityDetailsActionsContainer';
import { useFlag } from '@/platform/flags';
import { useNavigateBack } from '@/platform/navigation';
import { Connect_Entity, UBT_IconsSize } from '@/shared/UBTConnect/lib/staticEntities';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import { ComingSoon } from '@/components/ui/ComingSoon';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import { ImageCardContent } from '@/components/ui/ImageCardContent';
import { ImageCard } from '@/components/ui/ImageCard';
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
import { SkeletonSection } from '@/components/ui/SkeletonSection';
import { ButtonGroup } from './components/ButtonGroup';
import { ExpandableSection } from './components/ExpandableSection';
import { External_Link } from './components/External_Link';
import { listStatusClassOf, SKELETON_DETAIL_CARD } from './hooks/oneSchoolGlobalDetailsState';
import { useOneSchoolGlobalDetails } from './hooks/useOneSchoolGlobalDetails';
import { readOneSchoolGlobalDetailsInputs } from './inputs';
import { FLAG_MobileStudentInformation, Type_OneschoolGlobal_Subsection } from './staticEntities';

/** EnableOptions of Directory_EntityDetailsActions: a new ActionsMenuEnableOptionsRec with EnableNotes True. */
const ENABLE_OPTIONS = { ...ACTIONS_MENU_ENABLE_OPTIONS_DEFAULT, EnableNotes: true };
/** The container border of the "Coming Soon" boxes: neutral 3, small, radius large. */
const COMING_SOON_BORDER = {
  Color: UBT_Color.Neutral3,
  Size: { GeneralSizeId: UBT_Size.Small },
  Radius: { GeneralSizeId: UBT_Shape.Large },
};
/** In_TextOptions of both ComingSoon instances: neutral 7, base, semi-bold. */
const COMING_SOON_TEXT = {
  Color: UBT_Color.Neutral7,
  FontSize: UBT_FontSize.Base,
  FontWeight: UBT_FontWeight.SemiBold,
};

/** @origin UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails
    The detail page of a school: the detail layout titled "OneSchool Global" with SubLayout_DirectoryDetailScreen as
    content. Its detail card has the photo, the name, the areas served, the address popup and the business links; its
    call to action is the actions menu (Directory_EntityDetailsActions); its content has the student numbers section
    (flag mobileStudentInformation), the button group "Upcoming events" / "About our campus" and a "Coming Soon" box.
    The skeleton shows until GetOneSchoolGlobalDetails answers. The bottom bar and CommonUI_InsideLayout are in the
    layout. The variables and the data action are in useOneSchoolGlobalDetails. */
export default function OneSchoolGlobalDetails() {
  const [params] = useSearchParams();
  const inputs = useMemo(() => readOneSchoolGlobalDetailsInputs(params), [params]);
  const navigateBack = useNavigateBack();
  const hasStudentInformation = useFlag(FLAG_MobileStudentInformation);
  const { state, details, hasFetchError, onSubsectionChange, onChangeBookmark } = useOneSchoolGlobalDetails(inputs);

  const isDataFetched = details !== null;
  const card = details?.card ?? SKELETON_DETAIL_CARD;
  const coordinates = details?.householdCoordinates ?? {};
  const listStatusClass = listStatusClassOf(isDataFetched, hasFetchError);

  /* ContactPopUp_OverrideOptions: ImageURL = SignedURL, Name = Trim(Name). */
  const contactOverrides = useMemo(
    () => ({ ImageURL: card.signedURL, Name: card.name.trim() }),
    [card.signedURL, card.name],
  );

  const detailCard = (
    <SkeletonSection id="$b4" inIsLoading={!isDataFetched}>
      <ImageCard
        id="$b5"
        inIsBookmarked={state.LocalIsBookmarked}
        inCardTypeId={UBT_ImageCardType.Detail}
        lazyImagePlaceholder={
          <EntityLazyImage
            id="$b6"
            imageURL={card.signedURL}
            imageSize={{ Width: UBT_ImageSize.MaxWidth_100vw }}
            entityId={card.communityBusinessId}
            hasErrorMessage
            entityType={Connect_Entity.OneSchoolGlobal}
          />
        }
        placeholderContent={
          <ImageCardContent
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
                    <AddressPopupWrapper
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
      <EntityDetailsActionsContainer
        id="$b14"
        contactPopUpOverrideOptions={contactOverrides}
        entityType={Connect_Entity.OneSchoolGlobal}
        entityId={inputs.In_OneSchoolGlobalId}
        enableOptions={ENABLE_OPTIONS}
        onOnChangeBookmark={onChangeBookmark}
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
                text={state.LookupSections.OneSchoolStatistitics.Singular ?? ''}
              >
                <Icon
                  id="$b19"
                  inColorId={UBT_Color.CyanDarker}
                  inSizeId={UBT_IconsSize.Base_24}
                  inIconId={state.LookupSections.OneSchoolStatistitics.Icon ?? ''}
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
            value={state.Selected_OneschoolGlobal_SubsectionId}
            onChange={onSubsectionChange}
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
    <DetailLayout
      id="$b1"
      onBack={navigateBack}
      headerTitle={<CustomText id="$b2" inText="OneSchool Global" />}
      content={
        <DirectoryDetailLayout
          id="$b3"
          placeholderDetailCard={detailCard}
          placeholderCallToAction={callToAction}
          placeholderContent={content}
        />
      }
      bottom={<BottomBar id="$b27" />}
      commonUI={<CommonUiLayout id="$b28" />}
    />
  );
}
