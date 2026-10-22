// @os-block UBTConnect.Directory_Household.HouseholdDetails_Block
import { useEffect, useLayoutEffect, useRef, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { DataFetchStatus } from '@/components/ui/os/OSList';
import { ViewHasChangedException, isInstanceOf } from '@/legacy/os/os-exceptions';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { useOsNavigate, useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { getUserInformation } from '@/platform/session/userInfo';
import { Columns_Two } from '@/shared/UBTConnectLibrary/Columns_Two';
import { ComingSoon } from '@/shared/UBTConnectLibrary/ComingSoon';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { HorizontalTagList } from '@/shared/UBTConnectLibrary/HorizontalTagList';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
import { ImageCard__Content } from '@/shared/UBTConnectLibrary/ImageCard__Content';
import { ImageCard_LazyLoading } from '@/shared/UBTConnectLibrary/ImageCard_LazyLoading';
import { KebabButtonMenu } from '@/shared/UBTConnectLibrary/KebabButtonMenu';
import {
  UBT_AlignItems,
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_Display,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Icons2,
  UBT_ImageCardType,
  UBT_ImageSize,
  UBT_JustifyContent,
  UBT_Shape,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { Tag } from '@/shared/UBTConnectLibrary/lib/structures';
import { SeeMoreSection } from '@/shared/UBTConnectLibrary/SeeMoreSection';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { AddressPopup_Wrapper } from '@/shared/UBTConnect_Utils/AddressPopup_Wrapper';
import {
  getHasExtendedShare,
  getHasPhotobookAccess,
  showComingSoonMessage,
} from '@/shared/UBTConnect_Utils/lib/actions';
import type { Directory_Coordinates } from '@/shared/UBTConnect_Utils/lib/structures';
import { ShareableObject_Generic } from '@/shared/UBTConnect_Utils/ShareableObject_Generic';
import { ShareSheet } from '@/shared/UBTConnect_Utils/ShareSheet';
import { UBT_LazyImage } from '@/shared/UBTConnect_Utils/UBT_LazyImage';
import { Directory_EntityDetailsActions } from '@/shared/UBTConnect/Directory_EntityDetailsActions/Directory_EntityDetailsActions';
import { HouseholdDetails_Members_Block } from '@/shared/UBTConnect/HouseholdDetails_Members_Block';
import { HouseholdDetails_TimelinePhoto_List } from '@/shared/UBTConnect/HouseholdDetails_TimelinePhoto_List';
import { getSkeleton_UI_HouseholdDetails } from '@/shared/UBTConnect/lib/actions';
import {
  Connect_Entity,
  Type_ShareObject,
  UBT_Color as UBTConnect_Color,
  UBT_FlexDirection,
  UBT_Icons2 as UBTConnect_Icons2,
  UBT_IconsSize,
} from '@/shared/UBTConnect/lib/staticEntities';
import type { HouseholdPreviewStructure, UI_HouseholdTimelineImages } from '@/shared/UBTConnect/lib/structures';
import { SubLayout_DirectoryDetailScreen } from '@/shared/UBTConnect/SubLayout_DirectoryDetailScreen';
import {
  getHousehold,
  getHousehold_Coordinates,
  type GetHouseholdOutput,
  type HouseholdDetailsCallInputs,
} from './api';
import {
  cardContent,
  handlePreviewData,
  initialTagsList,
  isDeceasedOrAncestry,
  isShownHousehold,
  selectedTagOf,
  selectTimelinePhoto,
  setPhotosTagEnabled,
  TAGS_LIST_ID_ABOUT,
  TAGS_LIST_ID_PHOTOS,
} from './logic';

export interface HouseholdDetails_BlockProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** HouseholdId (Long Integer as text). */
  householdId?: string;
  /** isEnabled (default True): False in Profile_HouseholdPreview (every link and action disabled). */
  isEnabled?: boolean;
  /** Preview (HouseholdPreviewStructure; Profile_HouseholdPreview passes the account form being edited). */
  preview?: HouseholdPreviewStructure;
  /** In_ShowKebabMenu: the kebab menu (edit, share) and the share sheet. */
  inShowKebabMenu?: boolean;
  /** In_CheckVisibility: only sent to the data actions (the server decides isVisible). */
  inCheckVisibility?: boolean;
  /** In_IsSkeletonOnly: hides the members until it turns False (OnParametersChanged then refreshes). */
  inIsSkeletonOnly?: boolean;
  /** In_HideActions: hides the call-to-action section on the About tab. */
  inHideActions?: boolean;
  /** Placeholder Placeholder_CarouselTag (inside the card's image tag). */
  children?: ReactNode;
  /** Event HouseholdDataFetched(LocalityName, CountryName, DeceasedOrAncestry_View), after every GetHousehold. */
  onHouseholdDataFetched?: (localityName: string, countryName: string, deceasedOrAncestryView: boolean) => void;
}

/** Block variables (mvc.js:51-150) kept as one view-cached record: a view restored from the cache keeps them. */
interface BlockVariables {
  TagsList: Tag[];
  TagsList_SelectedTag: string;
  TEMP_TimelineImages: UI_HouseholdTimelineImages[];
  LocalIsBookmarked: boolean;
  UserAge_Visibility: boolean;
  IsSkeletonOnly: boolean;
  HideActions_PhotoBook: boolean;
  IsShareOpen: boolean;
  /** dataFetchStatus: OS.Model.DataFetchStatus of the data action (record default Fetching; isDataFetched = Fetched). */
  GetHousehold: GetHouseholdOutput & { dataFetchStatus: DataFetchStatus };
  GetHousehold_Coordinates: Directory_Coordinates;
}

const INITIAL_VARIABLES: BlockVariables = {
  TagsList: [],
  TagsList_SelectedTag: '',
  TEMP_TimelineImages: [],
  LocalIsBookmarked: false,
  UserAge_Visibility: false,
  IsSkeletonOnly: false,
  HideActions_PhotoBook: false,
  IsShareOpen: false,
  GetHousehold: {
    dataFetchStatus: DataFetchStatus.Fetching,
    Household: {},
    Out_HouseholdMembers: [],
    Out_NonHouseholdMembers: [],
    isVisible: false,
  },
  GetHousehold_Coordinates: {},
};

const EMPTY_PREVIEW: HouseholdPreviewStructure = {};

type IsAlive = () => boolean;

/** Household details (compiled source: migration/screens/HouseholdCarousel/analysis/sources/pretty/
    UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js, "mvc.js": view :241-1886, controller :1887-3058).
    SubLayout_DirectoryDetailScreen (HideActions = In_HideActions and About tab):
    - detail card: SkeletonSection(not GetHousehold.IsDataFetched) > ImageCard_LazyLoading (Detail, bookmarked =
      LocalIsBookmarked) with the household photo, Placeholder_CarouselTag and ImageCard__Content (About: name and family
      names; else "Household gallery"); top section = tags (+ kebab menu), private-profile line when not isVisible;
      bottom section = About: address, See more (locality, supper meeting) / Photos: timeline list and Coming soon;
    - call to action (unless HideActions_PhotoBook): "Actions" + Directory_EntityDetailsActions / "Photobook" link;
    - content (unless IsSkeletonOnly): HouseholdDetails_Members_Block, hidden off the About tab;
    then the share sheet when In_ShowKebabMenu.
    OnInitialize = ScreenEvent_OnReady (GetUserInformation_Wrapper; unless restored from the view cache with the same age
    visibility: skeleton household, IsSkeletonOnly = In_IsSkeletonOnly, refresh both data actions) then the two tags. */
export function HouseholdDetails_Block({
  id,
  householdId = '0',
  isEnabled = true,
  preview = EMPTY_PREVIEW,
  inShowKebabMenu = false,
  inCheckVisibility = false,
  inIsSkeletonOnly = false,
  inHideActions = false,
  children,
  onHouseholdDataFetched,
}: HouseholdDetails_BlockProps) {
  const [variables, setVariables] = useViewState<BlockVariables>(
    `Directory_Household.HouseholdDetails_Block#${householdId}`,
    INITIAL_VARIABLES,
  );
  /* OutSystems assigns block variables synchronously: flows read and write this ref, the state renders it. */
  const variablesRef = useRef(variables);
  const assign = (change: (v: BlockVariables) => Partial<BlockVariables>) => {
    variablesRef.current = { ...variablesRef.current, ...change(variablesRef.current) };
    setVariables(variablesRef.current);
  };
  const props = {
    householdId,
    isEnabled,
    preview,
    inShowKebabMenu,
    inCheckVisibility,
    inIsSkeletonOnly,
    inHideActions,
  };
  const propsRef = useRef(props);
  const eventsRef = useRef(onHouseholdDataFetched);
  const restoredFromCache = useWasRestoredFromCache();
  const navigate = useOsNavigate();

  const callInputs = (): HouseholdDetailsCallInputs => {
    const p = propsRef.current;
    return {
      HouseholdId: p.householdId,
      isEnabled: p.isEnabled,
      In_ShowKebabMenu: p.inShowKebabMenu,
      In_CheckVisibility: p.inCheckVisibility,
      In_IsSkeletonOnly: p.inIsSkeletonOnly,
      In_HideActions: p.inHideActions,
      UserAge_Visibility: variablesRef.current.UserAge_Visibility,
    };
  };

  /** GetHousehold refresh (mvc.js:1948-1976) then OnAfterFetch_GetHouseholdDetail (:2474-2525): Action_HandlePreviewData,
      Photos tag enabled, HouseholdDataFetched. */
  const refreshGetHousehold = async (isAlive: IsAlive) => {
    // callServerDataSource (OutSystems.js): status Fetching when the call starts, Fetched on success, Error on failure
    // (not for ViewHasChangedException; OutOfOrderException is not modelled in src/lib/os-exceptions).
    assign((v) => ({ GetHousehold: { ...v.GetHousehold, dataFetchStatus: DataFetchStatus.Fetching } }));
    let fetched: Awaited<ReturnType<typeof getHousehold>>;
    try {
      fetched = await getHousehold(callInputs());
    } catch (error) {
      if (isAlive() && !isInstanceOf(error, ViewHasChangedException))
        assign((v) => ({ GetHousehold: { ...v.GetHousehold, dataFetchStatus: DataFetchStatus.Error } }));
      throw error;
    }
    if (!isAlive()) return;
    const data = handlePreviewData(fetched, propsRef.current.preview);
    const content = cardContent(data.Household);
    assign((v) => ({
      GetHousehold: { ...data, dataFetchStatus: DataFetchStatus.Fetched },
      TagsList: setPhotosTagEnabled(v.TagsList, content),
    }));
    eventsRef.current?.(content.LocalityName ?? '', content.CountryName ?? '', isDeceasedOrAncestry(content));
  };
  /** GetHousehold_Coordinates refresh (mvc.js:1924-1947). */
  const refreshGetHouseholdCoordinates = async (isAlive: IsAlive) => {
    const coordinates = await getHousehold_Coordinates(callInputs());
    if (isAlive()) assign(() => ({ GetHousehold_Coordinates: coordinates }));
  };
  /** The "Refreshes" JS node (mvc.js:3059-3077): both refresh actions, not awaited. */
  const refreshes = (isAlive: IsAlive) => {
    refreshGetHousehold(isAlive).catch(raiseToFlowHandler);
    refreshGetHouseholdCoordinates(isAlive).catch(raiseToFlowHandler);
  };

  /** ScreenEvent_OnInitialize (mvc.js:2202-2257) → ScreenEvent_OnReady (:2685-2766). */
  const onInitialize = async (isAlive: IsAlive, restored: boolean) => {
    const userInformation = await getUserInformation(); // GetUserInformation_Wrapper, after the app start's step
    if (!isAlive()) return;
    // The shell wrapper returns the cached record: its Directory_UserCurrent is the action's UserInformation output.
    const displayAge = userInformation.Directory_UserCurrent.Directory_UserCurrent_Visibility.DisplayAge;
    // CheckRestored (FromHistory is commented out in the JS node): same visibility on a restored view → nothing to do.
    if (!(restored && displayAge === variablesRef.current.UserAge_Visibility)) {
      assign((v) => ({
        UserAge_Visibility: displayAge,
        GetHousehold: { ...v.GetHousehold, Household: getSkeleton_UI_HouseholdDetails() },
        IsSkeletonOnly: propsRef.current.inIsSkeletonOnly,
      }));
      refreshes(isAlive);
    }
    if (variablesRef.current.TagsList.length === 0) {
      assign(() => ({ TagsList: initialTagsList(), TagsList_SelectedTag: TAGS_LIST_ID_ABOUT }));
    }
  };

  /** ScreenEvent_OnParametersChanged (mvc.js:2784-2835). */
  const onParametersChanged = async (isAlive: IsAlive) => {
    const p = propsRef.current;
    if (p.preview.UsePreview === true) {
      assign(() => ({
        UserAge_Visibility: p.preview.UI_AccountForm?.AccountForm_PersonalInformation?.ShowLifeCycleDates ?? false,
      }));
      await refreshGetHousehold(isAlive);
    }
    if (variablesRef.current.IsSkeletonOnly && !p.inIsSkeletonOnly) {
      assign(() => ({ IsSkeletonOnly: false }));
      refreshes(isAlive);
    }
  };

  const flowsRef = useRef({ onInitialize, onParametersChanged });
  useLayoutEffect(() => {
    propsRef.current = props;
    eventsRef.current = onHouseholdDataFetched;
    flowsRef.current = { onInitialize, onParametersChanged };
  });

  const restoredRef = useRef(restoredFromCache);
  useEffect(() => {
    let alive = true;
    flowsRef.current.onInitialize(() => alive, restoredRef.current).catch(raiseToFlowHandler);
    return () => {
      alive = false;
    };
  }, []);

  const parametersKey = JSON.stringify(props);
  const parametersKeyRef = useRef(parametersKey);
  useEffect(() => {
    if (parametersKeyRef.current === parametersKey) return;
    parametersKeyRef.current = parametersKey;
    let alive = true;
    flowsRef.current.onParametersChanged(() => alive).catch(raiseToFlowHandler);
    return () => {
      alive = false;
    };
  }, [parametersKey]);

  /** OnChangeTag (mvc.js:2391-2432) and Action_SetHideActionsPhotobook (:2579-2605). */
  const onChangeTag = (updatedTagList: Tag[]) => {
    const selected = selectedTagOf(updatedTagList);
    assign(() => ({
      TagsList: updatedTagList,
      TagsList_SelectedTag: selected,
      HideActions_PhotoBook: selected === TAGS_LIST_ID_PHOTOS && !getHasPhotobookAccess(),
    }));
  };
  /** Handler_OnMenuEdit (mvc.js:2367-2390). */
  const onMenuEdit = () => {
    navigate(`/${APP_ID}/Profile`, {});
  };
  /** Handler_OnShare (mvc.js:2103-2138). */
  const onShare = () => {
    if (getHasExtendedShare()) assign(() => ({ IsShareOpen: true }));
    else showComingSoonMessage();
  };
  /** Handler_CloseShareSheet (mvc.js:2660-2684). */
  const onCloseShareSheet = () => {
    assign(() => ({ IsShareOpen: false }));
  };
  const content = cardContent(variables.GetHousehold.Household);
  const deceasedOrAncestry = isDeceasedOrAncestry(content);
  /** OnClick_NavigateToLocality (mvc.js:2606-2637): nothing for a deceased or ancestry household. */
  const onClickNavigateToLocality = () => {
    if (deceasedOrAncestry) return;
    navigate(`/${APP_ID}/Locality_Details`, {
      PreloadedLocalityLabel: content.LocalityName ?? '',
      LocalityId: content.LocalityId ?? '0',
    });
  };
  /** OnClick_NavigateToSupperMeeting (mvc.js:2443-2473). */
  const onClickNavigateToSupperMeeting = () => {
    if (deceasedOrAncestry) return;
    navigate(`/${APP_ID}/SupperMeeting_Details`, { In_SubdivsionId: content.SupperMeetingId ?? '0' });
  };
  /** Handler_OnClickPhotobook (mvc.js:2258-2292): Photobook when the household has a locality, else a message. */
  const onClickPhotobook = () => {
    const localityId = content.LocalityId ?? '0';
    if (localityId !== '0') {
      navigate(`/${APP_ID}/Photobook`, { In_HouseholdId: householdId, In_LocalityId: localityId });
    } else {
      showFeedbackMessage(
        'Photobook is currently unavailable for this household. Please try again later.',
        PLATFORM_MESSAGE_TYPE.info,
      );
    }
  };
  /** Handler_OnClickMember (mvc.js:1979-2023): Household_Relations when enabled. */
  const onClickMember = (memberId: string) => {
    if (isEnabled) navigate(`/${APP_ID}/Household_Relations`, { HouseholdId: householdId, MemberId: memberId });
  };
  /** Handler_OnClickNavigateTomarriedChildren_Household (mvc.js:2293-2326): HouseholdDetails when enabled. */
  const onClickNonMember = (nonMemberHouseholdId: string) => {
    if (isEnabled) navigate(`/${APP_ID}/HouseholdDetails`, { HouseholdId: nonMemberHouseholdId });
  };
  /** Directory_EntityDetailsActionsOnChange_Bookmark (mvc.js:2066-2093). */
  const onChangeBookmark = (isBookmarked: boolean) => {
    assign(() => ({ LocalIsBookmarked: isBookmarked }));
  };
  /** Handler_TimelinePhotoSelected (mvc.js:2836-2879). */
  const onTimelinePhotoSelected = (date: string) => {
    assign((v) => ({ TEMP_TimelineImages: selectTimelinePhoto(v.TEMP_TimelineImages, date) }));
  };

  const isAbout = variables.TagsList_SelectedTag === TAGS_LIST_ID_ABOUT;
  const isLoading = variables.GetHousehold.dataFetchStatus !== DataFetchStatus.Fetched; // !GetHousehold.IsDataFetched
  const linkClasses = deceasedOrAncestry ? 'link-disabled-view' : '';
  const linkTextOptions = { Color: UBT_Color.Primary, FontSize: UBT_FontSize.Small, IsUnderlined: true };
  const labelTextOptions = {
    Color: UBT_Color.Neutral10,
    FontSize: UBT_FontSize.Small,
    FontWeight: UBT_FontWeight.Regular,
  };
  const linkContainerOptions = { MarginSize: { BottomSizeId: UBT_Size.Small }, DisplayOptions: {} };

  const aboutSection = (
    <>
      {isShownHousehold(content) && (content.Address ?? '') !== '' && (
        <div className="householdAddress" data-container="">
          <CustomContainer options={linkContainerOptions}>
            <AddressPopup_Wrapper
              iconVisible
              isEnabled={isEnabled}
              inAddress={content.Address ?? ''}
              inCoordinates={variables.GetHousehold_Coordinates}
            />
          </CustomContainer>
        </div>
      )}
      <div className="full-width padding-top-s" data-container="">
        <SeeMoreSection isEnabled={isEnabled} startExpanded={false}>
          <CustomContainer
            extendedClasses="see-more-locality-cont"
            options={{ PaddingSize: { BottomSizeId: UBT_Size.Small }, BorderOptions: {} }}
          >
            <Columns_Two
              columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceFirst, ColumnSizes: {} }}
              left={
                <IconText spacingSize={UBT_Size.ExtraSmall} text="Locality: " textOptions={labelTextOptions}>
                  <Icon
                    inColorId={UBT_Color.Neutral8}
                    inSizeId={UBT_IconsSize.NonStandard_16}
                    inIconId={UBTConnect_Icons2.HomePIn}
                  />
                </IconText>
              }
              right={
                <CustomContainer options={linkContainerOptions} onClicked={onClickNavigateToLocality}>
                  <CustomText
                    inTextOptions={linkTextOptions}
                    extendedClasses={linkClasses}
                    inText={content.LocalityName ?? ''}
                  />
                </CustomContainer>
              }
            />
          </CustomContainer>
          <CustomContainer options={{ PaddingSize: { TopSizeId: UBT_Size.Small } }}>
            <Columns_Two
              columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceFirst, ColumnSizes: {} }}
              left={
                <IconText text="Supper Meeting: " spacingSize={UBT_Size.ExtraSmall} textOptions={labelTextOptions}>
                  <Icon
                    inSizeId={UBT_IconsSize.NonStandard_16}
                    inColorId={UBT_Color.Neutral8}
                    inIconId={UBTConnect_Icons2.Cottage}
                  />
                </IconText>
              }
              right={
                <CustomContainer options={linkContainerOptions} onClicked={onClickNavigateToSupperMeeting}>
                  <CustomText
                    inText={content.SupperMeetingName ?? ''}
                    inTextOptions={linkTextOptions}
                    extendedClasses={linkClasses}
                  />
                </CustomContainer>
              }
            />
          </CustomContainer>
        </SeeMoreSection>
      </div>
    </>
  );

  const photosSection = (
    <>
      <div data-container="">
        <HouseholdDetails_TimelinePhoto_List
          inHouseholdTimelineImages={variables.TEMP_TimelineImages}
          onEventDateSelected={onTimelinePhotoSelected}
        />
      </div>
      <CustomContainer
        options={{
          BorderOptions: {
            Color: UBT_Color.Neutral3,
            Size: { GeneralSizeId: UBT_Size.Small },
            Radius: { GeneralSizeId: UBT_Shape.Large },
          },
        }}
      >
        <ComingSoon
          inTextOptions={{
            Color: UBT_Color.Neutral7,
            FontSize: UBT_FontSize.Base,
            FontWeight: UBT_FontWeight.SemiBold,
          }}
        />
      </CustomContainer>
    </>
  );

  const detailCard = (
    <SkeletonSection inIsLoading={isLoading}>
      <ImageCard_LazyLoading
        inIsBookmarked={variables.LocalIsBookmarked}
        inCardTypeId={UBT_ImageCardType.Detail}
        lazyImagePlaceholder={
          <UBT_LazyImage
            hasErrorMessage
            imageSize={{ Width: UBT_ImageSize.MaxWidth_100vw }}
            entityType={Connect_Entity.Household}
            entityId={isShownHousehold(content) ? householdId : ''}
          />
        }
        placeholderImageTag={<div>{children}</div>}
        placeholderContent={
          <ImageCard__Content
            inTitle={isAbout ? (content.Name ?? '') : 'Household gallery'}
            inSubtitle={isAbout ? (content.FamilyNames ?? '') : ''}
            inShowSubtitle={isAbout && (content.FamilyNames ?? '') !== ''}
            placeholderTopSectionContent={
              <>
                <CustomContainer
                  options={{
                    DisplayOptions: {
                      Display: UBT_Display.Flex,
                      AlignItems: UBT_AlignItems.Center,
                      JustifyContent: UBT_JustifyContent.SpaceBetween,
                      FlexDirection: UBT_FlexDirection.Row,
                    },
                  }}
                >
                  <div data-container="">
                    <HorizontalTagList
                      isEnabled={isEnabled}
                      inIsMandatorySelection
                      inIsSingleSelection
                      inTagToggleList={variables.TagsList}
                      onChanged={onChangeTag}
                    />
                  </div>
                  {inShowKebabMenu && (
                    <div data-container="">
                      <KebabButtonMenu isEnable={isEnabled} onEdit={onMenuEdit} onShare={onShare} />
                    </div>
                  )}
                </CustomContainer>
                {!variables.GetHousehold.isVisible && (
                  <CustomContainer options={{ MarginSize: { TopSizeId: UBT_Size.Small } }}>
                    <IconText
                      spacingSize={UBT_Size.ExtraSmall}
                      textOptions={{
                        Color: UBTConnect_Color.Info,
                        FontSize: UBT_FontSize.Small,
                        FontWeight: UBT_FontWeight.Regular,
                      }}
                      text="Your profile is private and only visible to you"
                    >
                      <Icon
                        inIconId={UBTConnect_Icons2.Lock}
                        inSizeId={UBT_IconsSize.NonStandard_16}
                        inColorId={UBTConnect_Color.Info}
                      />
                    </IconText>
                  </CustomContainer>
                )}
              </>
            }
            placeholderBottomSectionContent={
              <>
                {isAbout && aboutSection}
                {variables.TagsList_SelectedTag === TAGS_LIST_ID_PHOTOS && photosSection}
              </>
            }
          />
        }
      />
    </SkeletonSection>
  );

  const callToAction = variables.HideActions_PhotoBook ? null : (
    <SkeletonSection inIsLoading={isLoading}>
      <CustomContainer
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { HorizontalSizeId: UBT_Size.Base, TopSizeId: UBT_Size.Small, BottomSizeId: UBT_Size.Base },
        }}
      >
        <CustomText
          inText={isAbout ? 'Actions' : 'Photobook'}
          inTextOptions={{
            Color: UBT_Color.Neutral9,
            FontSize: UBT_FontSize.Small,
            FontWeight: UBT_FontWeight.SemiBold,
          }}
        />
        {isAbout ? (
          <>
            <div className="margin-bottom-xs" data-container="" />
            <Directory_EntityDetailsActions
              entityId={householdId}
              contactPopUpOverrideOptions={{ Name: content.Name ?? '' }}
              isEnabled={isEnabled}
              entityType={Connect_Entity.Household}
              enableOptions={{
                EnableNotes: content.DisplayOptions?.IsDeceased !== true,
                EnableShare: content.DisplayOptions?.IsDeceased !== true,
              }}
              onOnChangeBookmark={onChangeBookmark}
            />
          </>
        ) : (
          <CustomContainer
            options={{
              PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base },
              DisplayOptions: {},
            }}
            onClicked={onClickPhotobook}
          >
            <Columns_Two
              columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast, SpacingSize: UBT_Size.Small }}
              left={
                <IconText text="Photobook" spacingSize={UBT_Size.Base}>
                  <Icon inIconId={UBTConnect_Icons2.BookClosed} />
                </IconText>
              }
              right={<Icon inIconId={UBT_Icons2.ChevronRight} />}
            />
          </CustomContainer>
        )}
      </CustomContainer>
    </SkeletonSection>
  );

  return (
    <OSBlock name="Directory_Household.HouseholdDetails_Block" id={id}>
      <SubLayout_DirectoryDetailScreen
        hideActions={inHideActions && isAbout}
        placeholderDetailCard={detailCard}
        placeholderCallToAction={callToAction}
        placeholderContent={
          variables.IsSkeletonOnly ? null : (
            <div className={isAbout ? '' : 'hidden'} data-container="">
              <HouseholdDetails_Members_Block
                inNonHouseholdMembers={variables.GetHousehold.Out_NonHouseholdMembers}
                isEnabled={isEnabled}
                inIsLoading={isLoading}
                inHouseholdMembers={variables.GetHousehold.Out_HouseholdMembers}
                inNonHouseholdMembersDataFetchStatus={variables.GetHousehold.dataFetchStatus}
                inHouseholdMembersDataFetchStatus={variables.GetHousehold.dataFetchStatus}
                onEventNonMemberOnClick={onClickNonMember}
                onEventMemberOnClick={onClickMember}
              />
            </div>
          )
        }
      />
      {inShowKebabMenu && (
        <ShareSheet
          inShareableObjectId={householdId}
          inIsOpen={variables.IsShareOpen}
          inShareObjectTypeId={Type_ShareObject.MyHousehold}
          onEventClosedShareSheet={onCloseShareSheet}
        >
          <ShareableObject_Generic
            inShareableObject={{
              ConnectEntityTypeId: Connect_Entity.Household,
              Id: householdId,
              Title: content.Name ?? '',
              Subtitle: content.FamilyNames ?? '',
              Location: `${content.LocalityName ?? ''}, ${content.CountryName ?? ''}`,
            }}
          />
        </ShareSheet>
      )}
    </OSBlock>
  );
}
