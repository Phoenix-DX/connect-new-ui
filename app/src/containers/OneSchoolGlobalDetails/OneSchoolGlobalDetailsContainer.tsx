import { useId, useMemo } from 'react';
import { AddressPopupWrapper } from '@/components/contact/AddressPopupWrapper';
import { DirectoryDetailLayout } from '@/components/layout/DirectoryDetailLayout';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { EntityDetailsActionsContainer } from '@/containers/EntityDetailsActions/EntityDetailsActionsContainer';
import { useFlag } from '@/platform/flags';
import { Connect_Entity, UBT_IconsSize } from '@/lib/ubtConnect/staticEntities';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import { ComingSoon } from '@/components/ui/ComingSoon';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import { ImageCardContent } from '@/components/ui/ImageCardContent';
import { ImageCard } from '@/components/ui/ImageCard';
import { ACTIONS_MENU_ENABLE_OPTIONS_DEFAULT } from '@/lib/ubtConnectLibrary/actions';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_ImageCardType,
  UBT_ImageSize,
  UBT_Shape,
  UBT_Size,
} from '@/lib/ubtConnectLibrary/staticEntities';
import { Skeleton } from '@/components/ui/Skeleton';
import { ButtonGroup } from './components/ButtonGroup';
import { ExpandableSection } from './components/ExpandableSection';
import { External_Link } from './components/External_Link';
import { listStatusClassOf, SKELETON_DETAIL_CARD } from './hooks/oneSchoolGlobalDetailsState';
import { SCREEN_VIEW_NAME, useOneSchoolGlobalDetails } from './hooks/useOneSchoolGlobalDetails';
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

interface OneSchoolGlobalDetailsContainerProps {
  /** In_OneSchoolGlobalId (Long Integer, as text): the school. */
  oneSchoolGlobalId: string;
  /** OutSystems instance id of the block: '$b3' on the screen OneSchoolGlobalDetails, `<prefix>-$b1` in a carousel
      slide (EntitiesCarousel_OneSchoolGlobal). The widget ids are the block's own aliases under this prefix. */
  id?: string;
  /** Where the block is (its view cache scope):
      - 'screen' (default): the content of the screen OneSchoolGlobalDetails; the view cache of the screen.
      - 'slide': a slide of OneSchoolGlobalCarousel; one view cache entry per school. */
  placement?: 'screen' | 'slide';
  /** IsRestoredFromCache of the block: the screen gives its own view cache flag (omitted: the hook reads it), the
      slide gives False. See useOneSchoolGlobalDetails. */
  isRestoredFromCache?: boolean;
}

/** The school details with their data: SubLayout_DirectoryDetailScreen with the detail card (photo, name, areas
    served, address popup, business links), the actions menu (Directory_EntityDetailsActions) as call to action, and
    the content: the student numbers section (flag mobileStudentInformation), the button group "Upcoming events" /
    "About our campus" and a "Coming Soon" box. The skeleton shows until GetOneSchoolGlobalDetails answers.
    TST 2026-10-27: the screen OneSchoolGlobalDetails and the carousel slide both render OneSchoolGlobalDetails_Block,
    with the block wrapper and the block's aliases (re-captures of 2026-10-29: OneSchoolGlobalDetails and
    OneSchoolGlobalCarousel analysis/dom/default.html).
    Container (page-template criterion 2, and two pages use it): the data action with its view cache state, the flag,
    the handlers of the button group and of the actions menu, the entity actions container; OneSchoolGlobalDetails and
    OneSchoolGlobalCarousel render it.
    @origin UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block */
export function OneSchoolGlobalDetailsContainer({
  oneSchoolGlobalId,
  id,
  placement = 'screen',
  isRestoredFromCache,
}: OneSchoolGlobalDetailsContainerProps) {
  const fallback = useId();
  const prefix = id?.replace('$', '') ?? `osg${fallback.replace(/:/g, '')}`;
  /** The widget id inside this block instance. */
  const cid = (name: string): string => `${prefix}-${name}`;

  const inputs = useMemo(() => ({ In_OneSchoolGlobalId: oneSchoolGlobalId }), [oneSchoolGlobalId]);
  const hasStudentInformation = useFlag(FLAG_MobileStudentInformation);
  const { state, details, hasFetchError, onSubsectionChange, onChangeBookmark } = useOneSchoolGlobalDetails(inputs, {
    isRestoredFromCache,
    viewName:
      placement === 'slide'
        ? `Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block#${oneSchoolGlobalId}`
        : SCREEN_VIEW_NAME,
  });

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
    <Skeleton id={cid('$b2')} isLoading={!isDataFetched}>
      <ImageCard
        id={cid('$b3')}
        inIsBookmarked={state.LocalIsBookmarked}
        inCardTypeId={UBT_ImageCardType.Detail}
        lazyImagePlaceholder={
          <EntityLazyImage
            id={cid('$b4')}
            imageURL={card.signedURL}
            imageSize={{ Width: UBT_ImageSize.MaxWidth_100vw }}
            entityId={card.communityBusinessId}
            hasErrorMessage
            entityType={Connect_Entity.OneSchoolGlobal}
          />
        }
        placeholderContent={
          <ImageCardContent
            id={cid('$b5')}
            inTitle={card.name}
            placeholderBottomSectionContent={
              <>
                <CustomText
                  id={cid('$b6')}
                  inTextOptions={{
                    Color: UBT_Color.Neutral8,
                    FontSize: UBT_FontSize.Small,
                    FontWeight: UBT_FontWeight.SemiBold,
                  }}
                  inText="Educating Students From:"
                />
                <CustomText
                  id={cid('$b7')}
                  inText={card.areasServed}
                  inTextOptions={{
                    Color: UBT_Color.Neutral7,
                    FontSize: UBT_FontSize.ExtraSmall,
                    FontWeight: UBT_FontWeight.Regular,
                  }}
                />
                <CustomContainer
                  id={cid('$b8')}
                  options={{
                    MarginSize: { TopSizeId: UBT_Size.ExtraSmall },
                    TextOptions: { Color: UBT_Color.CyanDarker },
                  }}
                >
                  <div className={isDataFetched ? 'school-address' : 'margin-top-s margin-bottom-xs'} data-container="">
                    <AddressPopupWrapper
                      id={cid('$b9')}
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
    </Skeleton>
  );

  const callToAction = (
    <CustomContainer
      id={cid('$b11')}
      options={{
        Background: { BackgroundColor: UBT_Color.Neutral0 },
        PaddingSize: { GeneralSizeId: UBT_Size.Base },
      }}
    >
      <EntityDetailsActionsContainer
        id={cid('$b12')}
        contactPopUpOverrideOptions={contactOverrides}
        entityType={Connect_Entity.OneSchoolGlobal}
        entityId={oneSchoolGlobalId}
        enableOptions={ENABLE_OPTIONS}
        onOnChangeBookmark={onChangeBookmark}
      />
    </CustomContainer>
  );

  const content = (
    <Skeleton id={cid('$b13')} isLoading={!isDataFetched}>
      {hasStudentInformation && (
        <CustomContainer
          id={cid('Block_StudentNumbers')}
          options={{ Background: { BackgroundColor: UBT_Color.Neutral0 } }}
        >
          <ExpandableSection
            id={cid('$b15')}
            startExpanded={false}
            title={
              <IconText
                id={cid('$b16')}
                textOptions={{ FontWeight: UBT_FontWeight.SemiBold }}
                spacingSize={UBT_Size.Small}
                text={state.LookupSections.OneSchoolStatistitics.Singular ?? ''}
              >
                <Icon
                  id={cid('$b17')}
                  inColorId={UBT_Color.CyanDarker}
                  inSizeId={UBT_IconsSize.Base_24}
                  inIconId={state.LookupSections.OneSchoolStatistitics.Icon ?? ''}
                />
              </IconText>
            }
          >
            <CustomContainer id={cid('$b18')} options={{ BorderOptions: COMING_SOON_BORDER }}>
              <ComingSoon id={cid('ComingSoon')} inTextOptions={COMING_SOON_TEXT} />
            </CustomContainer>
          </ExpandableSection>
        </CustomContainer>
      )}
      <CustomContainer
        id={cid('Block_ButtonGroup')}
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { BottomSizeId: UBT_Size.Small },
        }}
      >
        <CustomContainer
          id={cid('$b21')}
          options={{
            PaddingSize: { HorizontalSizeId: UBT_Size.Base, TopSizeId: UBT_Size.Small },
            MarginSize: { TopSizeId: hasStudentInformation ? UBT_Size.ExtraSmall : '' },
          }}
        >
          <ButtonGroup
            id={cid('ButtonGroup1')}
            style="button-group ubt-skeleton-section__element"
            value={state.Selected_OneschoolGlobal_SubsectionId}
            onChange={onSubsectionChange}
            items={[
              {
                id: cid('ButtonGroupItem1'),
                style: 'button-group-item',
                value: Type_OneschoolGlobal_Subsection.UpcomingEvents,
                content: <span data-expression="">{Type_OneschoolGlobal_Subsection.UpcomingEvents}</span>,
              },
              {
                id: cid('ButtonGroupItem2'),
                style: 'button-group-item',
                value: Type_OneschoolGlobal_Subsection.AboutOurCampus,
                content: <span data-expression="">{Type_OneschoolGlobal_Subsection.AboutOurCampus}</span>,
              },
            ]}
          />
        </CustomContainer>
      </CustomContainer>
      <CustomContainer id={cid('$b22')} options={{ Background: { BackgroundColor: UBT_Color.Neutral0 } }}>
        <CustomContainer
          id={cid('$b23')}
          options={{
            Background: {},
            PaddingSize: {},
            MarginSize: { LeftSizeId: UBT_Size.Base, RightSizeId: UBT_Size.Base },
            BorderOptions: COMING_SOON_BORDER,
          }}
        >
          <ComingSoon id={cid('ComingSoon4')} inTextOptions={COMING_SOON_TEXT} />
        </CustomContainer>
      </CustomContainer>
    </Skeleton>
  );

  return (
    <OSBlock name="Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block" id={id}>
      <DirectoryDetailLayout
        id={cid('$b1')}
        placeholderDetailCard={detailCard}
        placeholderCallToAction={callToAction}
        placeholderContent={content}
      />
    </OSBlock>
  );
}
