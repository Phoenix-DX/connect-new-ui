/** @origin UBTConnect_Utils.CW_Share.ShareSheet */
// @os-block UBTConnect_Utils.CW_Share.ShareSheet
import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback/feedbackStore';
import { PreventBackNavigation } from '@/platform/navigation/PreventBackNavigation';
import { bottomSheetClose, bottomSheetOpen } from '@/shared/osui/lib/actions';
import { ConnectBottomSheet } from '@/components/ui/ConnectBottomSheet';
import { CircleButtonWithLabel } from '@/components/ui/CircleButtonWithLabel';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { EmptyList } from '@/components/ui/EmptyList';
import { Icon } from '@/components/ui/Icon';
import { Input } from '@/components/ui/Input';
import { SkeletonSection } from '@/components/ui/SkeletonSection';
import {
  Shape,
  UBT_ButtonSize,
  UBT_ButtonType,
  UBT_Color as LibraryColor,
  UBT_Display,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { ActionButton } from '@/components/ui/ActionButton';
import type { SearchResult } from '@/shared/UBTConnect_Utils/lib/structures';
import {
  Connect_Entity,
  UBT_AvatarSize,
  UBT_Color,
  UBT_FlexDirection,
  UBT_FontSize,
  UBT_IconSize,
  UBT_Icons,
  UBT_ImageSize,
  UBT_Shape,
  UBT_Size,
} from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { SearchResultItem } from '@/components/search/SearchResultItem';
import { ShareSheetSection } from '@/components/share/ShareSheetSection';
import { ShareSheetSectionTitle } from '@/components/share/ShareSheetSectionTitle';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import { cs_ShareObject, useGetAvailableMembers, useGetRecentlyShared } from './api';
import { delaySetIsOpen, scrollToTop, shareSheet_IsSharing } from './jsNodes';

export interface ShareSheetContainerProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_IsOpen: a change opens or closes the sheet (OnParametersChanged). */
  inIsOpen?: boolean;
  inShareObjectTypeId?: string;
  /** Long Integer (text). */
  inShareableObjectId?: string;
  inIsLegacy?: boolean;
  inUpdateType?: string;
  /** In_UpdateDate (Date, ISO text; OutSystems null date 1900-01-01). */
  inUpdateDate?: string;
  /** Event Event_ClosedShareSheet. */
  onEventClosedShareSheet?: () => void;
  /** Placeholder Placeholder_ShareableObject. */
  children?: ReactNode;
}

/* Local variables reset by Action_ResetLocalVariables (ShareSheet.mvc.js:2868-2910). */
interface Locals {
  searchTerm: string;
  isSearching: boolean;
  isSearchStep: boolean;
  currentExternalShareIdOption: string;
  sharingRecentMemberId: string;
}
const RESET: Locals = {
  searchTerm: '',
  isSearching: false,
  isSearchStep: false,
  currentExternalShareIdOption: '',
  sharingRecentMemberId: '',
};
/** SearchPromt default (ShareSheet.mvc.js:80). */
const SEARCH_PROMPT = 'Search';
/** Action_CreateSkeletonList (:2630-2696): five "Loading Name" members (Id "0"), shown while a list loads. */
const SKELETON: SearchResult[] = Array.from({ length: 5 }, () => ({
  Id: '0',
  HouseholderId: '0',
  Name: 'Loading Name',
  Location: 'Locality, Country',
  Type: Connect_Entity.Member,
}));
const MAX_RECIPIENTS = 50;
const horizontalList = 'list list-group display-flex overflow-horizontal gap-base connect-share-sheet__horizontal-list';
const lastPadding = (index: number, length: number) =>
  'lazy-image-middle ' + (index === length - 1 ? 'padding-right-base' : '');

/** Share sheet: closed in every capture (empty root, BookmarksByGroup/default). The open sheet is ported from the
    compiled view (ShareSheet.mvc.js:316-1891) and controller (:1892-3585); server data and actions in `api.ts`. */
export function ShareSheetContainer({
  id,
  inIsOpen = false,
  inShareObjectTypeId = '',
  inShareableObjectId = '',
  inIsLegacy = false,
  inUpdateType = '',
  inUpdateDate = '1900-01-01',
  onEventClosedShareSheet,
  children,
}: ShareSheetContainerProps) {
  const sheetBlockId = `${useId()}BottomSheet`;
  const [isOpen, setIsOpen] = useState(false);
  const [locals, setLocals] = useState<Locals>(RESET);
  const [selectedMembers, setSelectedMembers] = useState<SearchResult[]>([]);
  // Refresh Query requests: each opening refreshes GetRecentlyShared, each submitted search GetAvailableMembers.
  const [recentFetchId, setRecentFetchId] = useState(0);
  const [searchFetchId, setSearchFetchId] = useState(0);
  const bottomSheetId = useRef('');
  const pendingOpen = useRef(false);
  const isOpenRef = useRef(false);
  const previousInIsOpen = useRef(inIsOpen);
  const onClosed = useRef(onEventClosedShareSheet);
  useEffect(() => {
    onClosed.current = onEventClosedShareSheet;
    isOpenRef.current = isOpen;
  });

  const setLocalIsOpen = (value: boolean) => {
    isOpenRef.current = value;
    setIsOpen(value);
  };

  // ScreenEvent_OnParametersChanged (:2133-2209): IsOpen <> In_IsOpen → open (render the sheet, reset, BottomSheetOpen
  // once the sheet is initialized, refresh GetRecentlyShared) or close (BottomSheetClose; IsOpen = False after the
  // closing transition, DelaySetIsOpen JS :3586-3601).
  useEffect(() => {
    if (previousInIsOpen.current === inIsOpen) return;
    previousInIsOpen.current = inIsOpen;
    if (isOpenRef.current === inIsOpen) return;
    if (inIsOpen) {
      pendingOpen.current = true;
      // The OutSystems handler is an async flow: the state changes run after the render that changed the input.
      void Promise.resolve().then(() => {
        setLocalIsOpen(true);
        setLocals(RESET);
        setRecentFetchId((n) => n + 1);
      });
    } else {
      delaySetIsOpen(bottomSheetId.current, setLocalIsOpen);
      bottomSheetClose(bottomSheetId.current);
    }
  }, [inIsOpen]);

  // Handler_BottomSheetInitialized (:3332-3368): BottomSheetId = Id; the pending BottomSheetOpen runs with it.
  const onInitialized = (sheetId: string) => {
    bottomSheetId.current = sheetId;
    if (pendingOpen.current) {
      pendingOpen.current = false;
      bottomSheetOpen(sheetId);
    }
  };

  // Action_ResetAndCloseSheetState (:3184-3224): Event_ClosedShareSheet, clear the lists, reset, scroll to the top.
  const resetAndCloseSheetState = () => {
    onClosed.current?.();
    setSelectedMembers([]);
    setLocals(RESET);
    scrollToTop(sheetBlockId);
  };
  // Handler_OnBack (:3265-3309): the search step goes back to the first step, else the sheet closes.
  const onBack = () => {
    if (locals.isSearchStep) {
      setLocals((current) => ({ ...current, searchTerm: '', isSearchStep: false }));
      scrollToTop(sheetBlockId);
    } else resetAndCloseSheetState();
  };
  // Handler_SearchOnFocus (:2374-2414): the first focus switches to the search step.
  const onSearchFocus = () => {
    if (!locals.isSearchStep) setLocals((current) => ({ ...current, isSearchStep: true }));
  };
  // Handler_InputEventClearString (:2729-2759) and Handler_InputEventSubmit (:2809-2867): the search term and
  // IsSearching; a submitted search refreshes GetAvailableMembers.
  const onClearString = () => {
    setLocals((current) => ({ ...current, searchTerm: '', isSearching: false }));
  };
  const onSubmit = (submitted: string) => {
    const searchTerm = submitted.trim();
    setLocals((current) => ({ ...current, searchTerm, isSearching: searchTerm !== '' ? true : current.isSearching }));
    if (searchTerm !== '') setSearchFetchId((n) => n + 1);
  };

  const { isSearchStep, isSearching, searchTerm } = locals;
  const variables = {
    In_ShareObjectTypeId: inShareObjectTypeId,
    In_ShareableObjectId: inShareableObjectId,
    In_UpdateType: inUpdateType,
    In_UpdateDate: inUpdateDate,
  };
  const recent = useGetRecentlyShared({ ...variables, SearchTerm: '' }, recentFetchId);
  const available = useGetAvailableMembers({ ...variables, SearchTerm: searchTerm }, searchFetchId);
  const recentFetched = recent.isSuccess;
  const availableFetched = available.isSuccess;
  // OnAfterFetch_* (:2070-2132, :2302-2373) and the handlers that assign SearchResultItemList: RecentlyShared starts
  // as the skeleton; the search list shows the skeleton while its query loads, the members found while searching,
  // else the recently shared. IsSelected = the member is in SelectedMembers.
  const recentlyShared = recent.data ?? SKELETON;
  const searchResultItemList = isSearching ? (available.data ?? SKELETON) : recentFetched ? recentlyShared : SKELETON;
  const isSelected = (item: SearchResult) => selectedMembers.some((m) => m.Id === item.Id);

  // Action_SubmitShare (:3084-3183): CS_ShareObject, then reset and close, then the confirmation; any error → message.
  const submitShare = async (targetMemberIds: string[]) => {
    try {
      await cs_ShareObject(variables, targetMemberIds);
      resetAndCloseSheetState();
      showFeedbackMessage(`${inShareObjectTypeId} has been shared.`, PLATFORM_MESSAGE_TYPE.info);
    } catch {
      showFeedbackMessage('Share failed. Please try again.', PLATFORM_MESSAGE_TYPE.error);
    }
  };
  // Handler_OnClickRecentMember (:2575-2629): a disabled record asks App_Subscription_ShowUpgradePopUp (not ported);
  // otherwise the member is shared with at once (its HouseholderId).
  const onClickRecentMember = (item: SearchResult) => {
    if (!recentFetched || item.RecordDisabled === true) return;
    setLocals((current) => ({ ...current, sharingRecentMemberId: item.Id ?? '' }));
    void submitShare([item.HouseholderId ?? '']);
  };
  // Handler_SearchResultItemOnSelect (:2911-3008): at most 50 recipients; select adds, unselect removes.
  const onSelect = (item: SearchResult, select: boolean) => {
    if (select && selectedMembers.length >= MAX_RECIPIENTS) {
      showFeedbackMessage('You can select up to 50 recipients only.', PLATFORM_MESSAGE_TYPE.error);
      return;
    }
    if (select && !isSelected(item)) setSelectedMembers([...selectedMembers, item]);
    if (!select && isSelected(item)) setSelectedMembers(selectedMembers.filter((m) => m.Id !== item.Id));
  };
  // Handler_SelectedListItemOnClick (:2210-2249): removes the member from the selection.
  const onClickSelected = (item: SearchResult) => {
    setSelectedMembers(selectedMembers.filter((m) => m.Id !== item.Id));
  };
  // Handler_OnClickSend (:3009-3083): the distinct HouseholderIds of the selected members and selected results.
  const onClickSend = () => {
    const ids = [...selectedMembers, ...searchResultItemList.filter(isSelected)].map((m) => m.HouseholderId ?? '');
    void submitShare([...new Set(ids)]);
  };
  const isSharing = shareSheet_IsSharing(locals.currentExternalShareIdOption, locals.sharingRecentMemberId);
  return (
    <OSBlock name="CW_Share.ShareSheet" id={id}>
      {isOpen && (
        <ConnectBottomSheet
          id={sheetBlockId}
          extendedClasses={
            'connect-share-sheet background-neutral-2 ubt-bottom-sheet--dynamic-height' +
            (isSearchStep ? ' ubt-bottom-sheet--full-height' : '') +
            (inIsLegacy ? ' connect-share-sheet--legacy' : '')
          }
          footerHeight={isSearching ? '0px' : 'auto'}
          showHeader
          title={`Share ${inShareObjectTypeId}`}
          contentBackgroundColorId={UBT_Color.Neutral2}
          showBackButton={isSearchStep}
          contentPadding={{ GeneralSizeId: UBT_Size.None, HorizontalSizeId: UBT_Size.None }}
          onInitialized={onInitialized}
          onOnClose={resetAndCloseSheetState}
          onOnToggle={(event_IsOpen) => {
            // Handler_BottomSheetOnToggle (:2760-2808): closed while IsOpen → reset and close.
            if (!event_IsOpen && isOpenRef.current) resetAndCloseSheetState();
          }}
          onOnBack={onBack}
          content={
            <CustomContainer
              options={{
                Background: { BackgroundColor: LibraryColor.Neutral0 },
                PaddingSize: { VerticalSizeId: UBT_Size.Base },
                MarginSize: { HorizontalSizeId: UBT_Size.Small },
                BorderOptions: { Radius: { GeneralSizeId: UBT_Shape.Medium } },
              }}
            >
              <div
                className={
                  'connect-share-sheet__results text-align-left connect-share-sheet__content ' +
                  (isSharing ? 'connect-share-sheet__content--processing' : '')
                }
                data-container=""
              >
                {!isSearchStep && (
                  <CustomContainer options={{ PaddingSize: { HorizontalSizeId: UBT_Size.Base } }}>
                    <div
                      className="connect-share-sheet__content__first-step display-flex flex-direction-column gap-base"
                      data-container=""
                    >
                      <div data-container="">
                        <CustomContainer
                          options={{
                            PaddingSize: { GeneralSizeId: UBT_Size.Small },
                            BorderOptions: {
                              Color: UBT_Color.Neutral5,
                              Size: { GeneralSizeId: UBT_Size.Small },
                              Radius: { GeneralSizeId: UBT_Shape.Large },
                            },
                          }}
                        >
                          <div>{children}</div>
                        </CustomContainer>
                      </div>
                      <div
                        className="sticky absolute-top connect-share-sheet__search background-neutral-0"
                        data-container=""
                      >
                        <CustomContainer
                          extendedClasses="connect-share-sheet__search"
                          options={{ Background: { BackgroundColor: LibraryColor.Neutral0 }, TextOptions: {} }}
                        >
                          <Input
                            inOptions={{
                              InitalString: searchTerm,
                              SearchPrompt: SEARCH_PROMPT,
                              Debounce_DelayMS: 300,
                              BorderRadius: Shape.Rounded,
                              FocusOnReady: false,
                            }}
                            onEventOnFocus={onSearchFocus}
                          />
                        </CustomContainer>
                      </div>
                      {!(recentFetched && recentlyShared.length === 0) && (
                        <SkeletonSection inIsLoading={!recentFetched}>
                          <ShareSheetSection
                            placeholderTitle={
                              <ShareSheetSectionTitle
                                inLabel="Recently Shared"
                                inFontSize={UBT_FontSize.DoubleExtraSmall}
                              />
                            }
                            placeholderContent={
                              <div className="negative-margin-right-base" data-container="">
                                <div className={`${horizontalList} OSFillParent`} data-list="">
                                  {recentlyShared.map((item, index) => (
                                    <CircleButtonWithLabel
                                      key={`${item.Id ?? ''}-${String(index)}`}
                                      borderColorId={
                                        locals.sharingRecentMemberId === item.Id
                                          ? UBT_Color.Primary
                                          : LibraryColor.Transparent
                                      }
                                      extendedClasses={lastPadding(index, recentlyShared.length)}
                                      sizeId={UBT_AvatarSize.Small_40}
                                      isProcessing={locals.sharingRecentMemberId === item.Id}
                                      onOnClick={() => {
                                        onClickRecentMember(item);
                                      }}
                                      icon={
                                        <EntityLazyImage
                                          entityType={Connect_Entity.Member}
                                          entityId={item.Id ?? ''}
                                          imageSize={{ Height: UBT_ImageSize.Square, Width: UBT_ImageSize.Small_40 }}
                                        />
                                      }
                                      text={<span data-expression="">{item.Name}</span>}
                                    />
                                  ))}
                                </div>
                              </div>
                            }
                          />
                        </SkeletonSection>
                      )}
                    </div>
                  </CustomContainer>
                )}
                {isSearchStep && (
                  <CustomContainer
                    extendedClasses="gap-sb flex-1"
                    options={{
                      PaddingSize: { HorizontalSizeId: UBT_Size.Small },
                      DisplayOptions: { Display: UBT_Display.Flex, FlexDirection: UBT_FlexDirection.Column },
                    }}
                  >
                    <Input
                      inOptions={{
                        SearchPrompt: SEARCH_PROMPT,
                        Debounce_DelayMS: 300,
                        BorderRadius: Shape.Rounded,
                        FocusOnReady: true,
                      }}
                      onEventClearString={onClearString}
                      onEventOnFocus={onSearchFocus}
                      onEventSubmit={onSubmit}
                    />
                    {selectedMembers.length > 0 && (
                      <ShareSheetSection
                        placeholderTitle={
                          <CustomContainer options={{ PaddingSize: { HorizontalSizeId: UBT_Size.Small } }}>
                            <ShareSheetSectionTitle
                              inFontSize={UBT_FontSize.DoubleExtraSmall}
                              inLabel={`${String(selectedMembers.length)} ${selectedMembers.length === 1 ? 'person' : 'people'} selected`}
                            />
                          </CustomContainer>
                        }
                        placeholderContent={
                          <div className="negative-margin-right-s" data-container="">
                            <div className={`${horizontalList} OSFillParent`} data-list="">
                              {selectedMembers.map((item, index) => (
                                <CircleButtonWithLabel
                                  key={item.Id}
                                  extendedClasses={lastPadding(index, selectedMembers.length)}
                                  borderColorId={UBT_Color.Primary}
                                  sizeId={UBT_AvatarSize.SmallBase_48}
                                  isProcessing={false}
                                  onOnClick={() => {
                                    onClickSelected(item);
                                  }}
                                  icon={
                                    <EntityLazyImage
                                      entityType={Connect_Entity.Member}
                                      imageSize={{ Height: UBT_ImageSize.Square, Width: UBT_ImageSize.Small_40 }}
                                      entityId={item.Id ?? ''}
                                    />
                                  }
                                  badge={
                                    <Icon
                                      inColorId={UBT_Color.Primary}
                                      inIconId={UBT_Icons.RemoveFill}
                                      inSizeId={UBT_IconSize.Small_12}
                                    />
                                  }
                                  text={
                                    <span className="text-primary" data-expression="">
                                      {item.Name}
                                    </span>
                                  }
                                />
                              ))}
                            </div>
                          </div>
                        }
                      />
                    )}
                    <div
                      className="connect-share-sheet__content__search-list padding-top-xs negative-margin-bottom-base"
                      data-container=""
                    >
                      {searchResultItemList.length === 0 && isSearching && availableFetched ? (
                        <div data-container="">
                          <EmptyList
                            iconId={UBT_Icons.Search}
                            titlePlaceholder={<span data-expression="">{`No results found for '${searchTerm}'`}</span>}
                            textPlaceholder={
                              <span data-expression="">
                                Sorry, we couldn’t find any results for your search. Please check your spelling or try
                                different keywords.
                              </span>
                            }
                          />
                        </div>
                      ) : searchResultItemList.length === 0 && recentFetched && !isSearching ? null : (
                        <SkeletonSection
                          inIsLoading={(isSearching && !availableFetched) || (!isSearching && !recentFetched)}
                        >
                          <CustomContainer options={{ PaddingSize: { HorizontalSizeId: UBT_Size.Small } }}>
                            <ShareSheetSectionTitle inLabel={isSearching ? 'Results' : 'Recently shared'} />
                          </CustomContainer>
                          <div
                            className="list list-group padding-bottom-s connect-share-sheet__results OSFillParent"
                            data-list=""
                          >
                            {searchResultItemList.map((item, index) => (
                              <SearchResultItem
                                key={`${item.Id ?? ''}-${String(index)}`}
                                inSearchTerm={searchTerm}
                                inSearchResult={item}
                                inShowSubscriptionWarning={item.RecordDisabled === true}
                                inLocationTopPadding={UBT_Size.None}
                                inImageHeightId={UBT_ImageSize.Square}
                                inTitleFontSize={UBT_FontSize.Small}
                                inImageWidthId={UBT_ImageSize.Base_52}
                              >
                                {item.RecordDisabled === true ? (
                                  <Icon inColorId={UBT_Color.Neutral7} inIconId={UBT_Icons.Lock} />
                                ) : isSelected(item) ? (
                                  <Icon
                                    inColorId={UBT_Color.Primary}
                                    inIconId={UBT_Icons.CheckboxFill}
                                    onClick={() => {
                                      onSelect(item, false);
                                    }}
                                  />
                                ) : (
                                  <Icon
                                    inColorId={UBT_Color.Neutral7}
                                    inIconId={UBT_Icons.CheckboxOutlineBlank}
                                    onClick={() => {
                                      onSelect(item, true);
                                    }}
                                  />
                                )}
                              </SearchResultItem>
                            ))}
                          </div>
                        </SkeletonSection>
                      )}
                    </div>
                  </CustomContainer>
                )}
              </div>
            </CustomContainer>
          }
          footer={
            <CustomContainer
              options={{
                Background: { BackgroundColor: LibraryColor.Neutral0 },
                PaddingSize: { GeneralSizeId: UBT_Size.Base },
              }}
            >
              {isSearchStep ? (
                <ActionButton
                  isDisabled={selectedMembers.length === 0}
                  buttonText="Send"
                  buttonOptions={{ UBT_ButtonSizeId: UBT_ButtonSize.Small }}
                  onButtonOnClick={onClickSend}
                />
              ) : (
                <ActionButton
                  buttonText="Cancel"
                  buttonOptions={{ UBT_ButtonSizeId: UBT_ButtonSize.Small, UBT_ButtonTypeId: UBT_ButtonType.Tertiary }}
                  onButtonOnClick={() => onClosed.current?.()}
                />
              )}
            </CustomContainer>
          }
        />
      )}
      {isOpen && <PreventBackNavigation onBackNavigationPrevented={onBack} />}
    </OSBlock>
  );
}
